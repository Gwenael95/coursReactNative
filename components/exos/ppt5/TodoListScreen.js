import React, {useCallback, useMemo, useState} from 'react';
import {
    StyleSheet, View, FlatList
} from 'react-native';

import { TodoListItem } from "../../TodoListItem"
import { AddTodoForm } from "../../AddTodoForm"
import { SearchBar} from "../../SearchBar";

export const TodoListScreen = props => {
    const [todoList, setTodoList] = useState([]) // array of object {name}
    const [todoCreate, setTodoCreate] = useState("")
    const [searchTodo, setSearchTodo] = useState("")
    const {navigation} = props

    const dataFiltered = useMemo(()=>{
        if (searchTodo === ""){
            return todoList
        }
        return todoList.filter(el=>el.name.includes(searchTodo))
    }, [todoList, searchTodo])

    const onSubmit = useCallback(() =>{
        const list = [...todoList]
        list.push({name:todoCreate})
        setTodoList(list)
    }, [todoList, todoCreate])

    const removeTodo = useCallback((index) =>{
        const list = [...todoList]
        list.splice(index, 1);
        setTodoList(list)
    }, [todoList, todoCreate])

    const renderItem = ({ item, index }) => (
        <TodoListItem name={item.name} index={index} callback={removeTodo} goto={goToDetailsTodo}/>
    );

    const goToDetailsTodo = useCallback((name, index)=>{
        navigation.navigate("TodoListDetailsPage", {name:name, index:index})
    },[navigation])

    return (
        <View style={[stylesTodoList.flexBetween, stylesTodoList.height100]}>
            <SearchBar value={searchTodo} onChange={setSearchTodo}></SearchBar>
            <FlatList
                data={dataFiltered}
                renderItem={renderItem}
                callback={removeTodo}
            />
            <AddTodoForm value={todoCreate} onChange={setTodoCreate} onSubmit={onSubmit}></AddTodoForm>
        </View>
    );
}

export const stylesTodoList = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#D1DEDEDE"
    },
    title:{
        color:"black",
        fontWeight:"900",
        fontSize:28
    },
    header:{
        flex:2,
        justifyContent: "center",
        alignItems:"center",
        textAlign: "center"
    },
    button: {
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius:20,
        borderColor:"black",
        borderWidth:2,
        borderStyle:"solid"
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'grey'
    },
    flexAround:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    },
    flexCenter:{
        justifyContent:"center",
        alignItems:"center"
    },
    flexBetween:{
        justifyContent:"space-between",
        alignItems:"center"
    },
    inputForm:{
        backgroundColor:"#BCBFBFBF",
        borderRadius:5,
    },
    width100:{
        width:"100%"
    },
    height100:{
        height:"100%"
    },
    flex1:{
        flex:1
    },
    flex3:{
        flex:3
    },
    createContainer:{
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems:"baseline"
    },
    item:{
        backgroundColor:"#eeeeee",
        flexDirection:"row",
        justifyContent:"space-between"
    }

})
