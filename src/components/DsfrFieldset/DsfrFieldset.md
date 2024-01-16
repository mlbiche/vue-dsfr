# Regroupement de champs - `DsfrFieldset`

## 🌟 Introduction

Le regroupement de champs permet à l'utilisateur de lier de façon logique et visuelle des éléments de formulaire appartenant à un même ensemble.

<VIcon name="vi-file-type-storybook" /> La story du regroupement de champs sur le storybook de [VueDsfr](https://vue-dsfr.netlify.app/?path=/docs/composants-dsfrfieldset--docs)

## 📐 Structure

Le regroupement de champs est constitué des éléments suivants :

- un slot par défaut pour le contenu du fieldset
- un slot pour la légende du fieldset appelé `legend`
- un id pour la balise `<legend>` appelé `legendId`
- une classe pour la balise `<legend>` appelée `legendClass`
- un slot pour l'indice placé au dessus du contenu du fieldset appelé `hint`
- un classe pour l'indice appelée `hintClass`

## 🛠️ Les props

|  nom                    |   type        |  défaut          | obligatoire |
| ----------------------- | ---------     | ---------------- | --------    |
| `legendId`              | *`string`*    | `''`             |             |
| `legendClass`           | *`string`*    | `''`             |             |
| `hintClass`             | *`string`*    | `''`             |             |

## 🧩 Les slots

- Un slot par défaut pour laisser la possibilité à l'utilisateur d'ajouter librement les champs contenus dans le fieldset.
- Un slot pour le contenu de la légende du fieldset (`legend`).
- Un slot pour l'indice placé au dessus du contenu du fieldset (`hint`).

```vue{6,15,16,25,26}
<template>
  <DsfrFieldset>
    <template #legend>
      Quel est votre monstre préféré du cinéma ?
    </template>

    <template #hint>
      Si le vôtre n'est pas cité ici, toutes mes excuses !
    </template>

    <DsfrRadioButtonSet
      :options="options"
      :model-value="choice"
    />
  </DsfrFieldset>
</template>
```

## 📝 Un exemple complet

::: code-group

<Story data-title="Démo" min-h="350px">
  <DsfrFieldsetDemo />
</Story>

<<< docs-demo/DsfrFieldsetDemo.vue [Code de la démo]

<<< DsfrFieldset.vue

:::

<script setup lang="ts">
import DsfrFieldsetDemo from './docs-demo/DsfrFieldsetDemo.vue'
</script>
