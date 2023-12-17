import React from 'react'

const PokemonAbility = ({ abilityName, abilityType }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">
      {abilityType === 'hidden' ? 'Hidden ability' : 'Normal ability'}</div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
