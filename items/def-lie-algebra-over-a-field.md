---
id: def-lie-algebra-over-a-field
kind: definition
title: Lie algebras over a field
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-vector-space, def-linear-map]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §§3.2 and 11.1"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §§3.4 and 4.1"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

Let $k$ be a field. A **Lie algebra over $k$** is a $k$-vector space
$\mathfrak g$ ([[def-vector-space]]) together with a map

$$[-,-]:\mathfrak g\times\mathfrak g\longrightarrow\mathfrak g$$

that is linear in each variable ([[def-linear-map]]) and satisfies, for all
$x,y,z\in\mathfrak g$,

$$[x,x]=0$$

and

$$[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0.$$

The first identity is **alternation** and the second is the **Jacobi identity**.
No finite-dimensional hypothesis is imposed. Alternation implies
$[x,y]=-[y,x]$ in every characteristic: expand
$0=[x+y,x+y]=[x,y]+[y,x]$. Thus skew-symmetry is a consequence here, not a
replacement for alternation in characteristic $2$.

The zero vector space, with its unique bracket, is a Lie algebra. A Lie algebra
is **abelian** when $[x,y]=0$ for every $x,y$.

