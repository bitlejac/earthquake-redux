import React from 'react'

const Loader = (loading) => {



    const returnLoadingClass = (loading) => {
        if(loading) {
            return 'loader-wrapper loading'
        }else{
            return 'loader-wrapper'
        }
    }

    return (
        <div className={returnLoadingClass(loading.loading)}>
           <div></div>
        </div>
    )
}

export default Loader