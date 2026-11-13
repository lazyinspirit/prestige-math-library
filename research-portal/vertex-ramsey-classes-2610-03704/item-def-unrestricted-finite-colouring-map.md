---
title: Unrestricted finite colourings and used palettes
status: draft
research_item: def-unrestricted-finite-colouring-map
dependency_level: 0
---

## Prerequisites

- [math:def-function](https://alphabetamath.cc/item/def-function)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)
- [math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)
- [math:def-axiom-of-extensionality](https://alphabetamath.cc/item/def-axiom-of-extensionality)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)


## Definition

Let $X$ be a finite set, meaning a set in bijection with a natural number, and let $k$ be a nonzero natural number. Write $[k]=\{1,\ldots,k\}=\{i\in\sigma(k):i\ne0\}$, where $\sigma(k)=k\cup\{k\}$ is the successor of $k$. A **$k$-colouring** of $X$ is any function $c:X\to[k]$: it assigns exactly one member of $[k]$ to each element of $X$.

The **used palette** is $c[X]=\{i\in[k]:\exists x\in X\;c(x)=i\}$. For $i\in[k]$, its **colour class**, or fibre, is $c^{-1}(\{i\})=\{x\in X:c(x)=i\}$. A subset $Y\subseteq X$ is **monochromatic** if $c(x)=c(y)$ for every $x,y\in Y$; in particular, the empty subset is monochromatic. Colours need not all be used. When $X$ is a graph's vertex set, this definition imposes no restriction on the colours of adjacent vertices.

## Justification

The natural-number supplier gives $\sigma(k)$ as a set. Separation applied within it gives $[k]$; applied within $[k]$ and $X$, respectively, it also gives the displayed used palette and each colour class. Extensionality makes each of these sets unique by its stated members. The function definition supplies the unique value $c(x)$ for every $x\in X$, so the equality conditions are unambiguous. The monochromatic condition is a definite predicate, including when $Y$ is empty.

## Definition references

[math:def-function](https://alphabetamath.cc/item/def-function)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

[math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)

[math:def-axiom-of-extensionality](https://alphabetamath.cc/item/def-axiom-of-extensionality)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
