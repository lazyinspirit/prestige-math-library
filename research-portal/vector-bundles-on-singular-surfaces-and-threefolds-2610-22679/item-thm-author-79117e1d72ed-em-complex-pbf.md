---
title: External EM projective bundle equivalence with its specified components
status: draft
research_item: thm-author-79117e1d72ed-em-complex-pbf
dependency_level: 10
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)

## Statement
Let $F$ be a prime field, $X$ a qcqs $F$-scheme, $V$ a finite locally free sheaf of constant rank $r>0$, and $j\geq0$. For the line projectivization $\pi:P_X^{\rm lin}(V)\to X$ of the preceding external input, the actual map
$$\sum_{m=0}^{r-1}c_1(\mathcal O(1))^m\pi^*: \bigoplus_{m=0}^{r-1} C_{j-m}(X)[-2m]\longrightarrow C_j(P_X^{\rm lin}(V))$$
is an equivalence. Each component is pullback followed by multiplication by the $m$-th power of the specific Definition5.2 class; $C_{j-m}=0$ when $j-m<0$.

## External input
Import EM v1 Theorem5.24(2). The source proves regular-blowup excision, deduces the projective-space formula from its P¹ formula using Annala–Iwasa’s argument, and then obtains the vector-bundle formula by Zariski descent. This imports that established proof; it does not pretend to reconstruct all its prerequisites. The explicitly displayed components and the first-Chern/product convention are part of this input. It is not merely an assertion that the two groups or complexes happen to be isomorphic.
