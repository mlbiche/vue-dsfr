# Téléchargement de fichier - `DsfrFileDownload`

## 🌟 Introduction

Le téléchargement de fichier permet à l'utilisateur de définir ses préférences sur l'utilisation de ses données personnelles, notamment le dépôt de cookies non fonctionnels dans son navigateur.

🏅 La documentation du composant téléchargement de fichier sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/telechargement-de-fichier)

<VIcon name="vi-file-type-storybook" /> La story du téléchargement de fichier sur le storybook de [VueDsfr](https://vue-dsfr.netlify.app/?path=/docs/composants-dsfrfiledownload--docs)

## 📐 Structure

Le téléchargement de fichier est constitué des éléments suivants :

- le format de la ressource (prop **`format`**, de type `string`)
- la taille de la ressource (prop **`size`**, de type `string`)
- le chemin vers la ressource (prop **`href`**, de type `string`)
- le nom de la ressource (prop **`download`**, de type `string`)
- le titre du lien permettant de téléchager la ressource (prop **`title`**, de type `string`)

## 🛠️ Les props

|  nom                    |   type        |  défaut                      | obligatoire |
| ----------------------- | ---------     | ---------------------------- | --------    |
| `format`                | *`string`*    | `'JPEG'`                     |             |
| `size`                  | *`string`*    | `'250 Ko'`                   |             |
| `href`                  | *`string`*    | `'#'`                        |             |
| `download`              | *`string`*    | `''`                         |             |
| `title`                 | *`string`*    | `' Télécharger le document'` |             |

```vue{6,15,16,25,26}
<template>
  <DsfrFileDownload
    :format="format"
    :size="size"
    :href="href"
    :download="download"
    :title="title"
  />
</template>
```

## 📝 Un exemple complet

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrFileDownloadDemo />
</Story>

<<< docs-demo/DsfrFileDownloadDemo.vue [Code de la démo]

<<< DsfrFileDownload.vue

:::

<script setup lang="ts">
import DsfrFileDownloadDemo from './docs-demo/DsfrFileDownloadDemo.vue'
</script>
