---
id: def-aqft-two-group-background
kind: definition
title: Finite 2-group background cochains
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies, §2.3"
      url: https://arxiv.org/pdf/1803.09336
      locator: "PDF pp. 18–19, equations (2.14)–(2.20)"
    - title: "John C. Baez and Aaron D. Lauda, Higher-Dimensional Algebra V: 2-Groups, §8.3"
      url: https://arxiv.org/pdf/math/0307200
      locator: "PDF pp. 54–59, especially the associator-pentagon calculation on p. 58"
    - title: "Sakura Schäfer-Nameki, ICTP Lectures on (Non-)Invertible Generalized Symmetries, §§2.5 and 2.8.1"
      url: https://arxiv.org/pdf/2305.18296v2
      locator: "Printed pp. 23–33, discrete backgrounds, Postnikov constraint, and its distinction from anomaly data"
---

## Definition

Let $G$ be a finite group with identity $e$, let $A$ be a finite abelian group written additively, and let $\rho:G\to\operatorname{Aut}(A)$ be a left action, so $\rho_{gh}=\rho_g\rho_h$ and $\rho_e=\operatorname{id}_A$. A group $2$-cochain is a function $c:G^2\to A$; it is normalized when it vanishes if either input is $e$. Its coboundary is

$$
(\delta_\rho c)(g,h,k)=\rho_g c(h,k)-c(gh,k)+c(g,hk)-c(g,h).
$$

A normalized group $3$-cocycle is a function $\beta:G^3\to A$ that vanishes whenever any argument is $e$ and satisfies

$$
\rho_g\beta(h,k,l)-\beta(gh,k,l)+\beta(g,hk,l)-\beta(g,h,kl)+\beta(g,h,k)=0
$$

for all $g,h,k,l\in G$. Two normalized $3$-cocycles represent the same class when their difference is $\delta_\rho c$ for a normalized $2$-cochain $c$; this is an equivalence relation by additivity of $\delta_\rho$. The class $[\beta]$ is the Postnikov class in this skeletal model.

The corresponding skeletal categorical $2$-group has objects $g\in G$ and, for each $g$, one automorphism labelled by each $u\in A$; there are no morphisms between distinct objects. Composition of automorphisms adds their labels, tensor product is

$$
(g,u)\otimes(h,v)=(gh,u+\rho_gv),
$$

and the associator from $(gh)k$ to $g(hk)$ has label $\beta(g,h,k)$. The two pentagon path labels are $\beta(gh,k,l)+\beta(g,h,kl)$ and $\rho_g\beta(h,k,l)+\beta(g,hk,l)+\beta(g,h,k)$; equality of these labels is exactly the displayed $3$-cocycle equation.

A finite ordered simplicial complex $K$ is a finite vertex set with a total order and a collection of nonempty finite vertex subsets, called simplices, closed under taking nonempty subsets. Write each simplex in increasing order. A $q$-cochain with values in a local coefficient system assigns an element to each ordered $q$-simplex at its first vertex. A flat $G$-valued edge cochain is a family $a_{ij}\in G$ for each edge $i<j$ such that $a_{ij}a_{jk}=a_{ik}$ on every triangle. It defines the local coefficient system with fiber $A$ at each vertex and transport $\rho_{a_{ij}}$ from vertex $j$ to vertex $i$.

For each integer $q\geq0$ and local-coefficient $q$-cochain $c$, define the twisted coboundary on each ordered $(q+1)$-simplex by

$$
(\delta_a c)_{i_0\ldots i_{q+1}}=\rho_{a_{i_0i_1}}c_{i_1\ldots i_{q+1}}+\sum_{r=1}^{q+1}(-1)^r c_{i_0\ldots\widehat{i_r}\ldots i_{q+1}}.
$$

In particular, for an $A$-valued $2$-cochain $B$,

$$
(\delta_aB)_{ijkl}=\rho_{a_{ij}}B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk},\qquad (a^*\beta)_{ijkl}=\beta(a_{ij},a_{jk},a_{kl}).
$$

A finite $2$-group background on $K$ is a flat edge cochain $a$ and an $A$-valued $2$-cochain $B$ satisfying $\delta_aB=a^*\beta$ on every ordered tetrahedron. This fixes the cochain representative, local coefficient action, and sign convention.

A $1$-gauge transformation consists of vertex labels $g_i\in G$ and edge labels $\lambda_{ij}\in A$ at vertex $i$. Define

$$
a^g_{ij}=g_i a_{ij}g_j^{-1},
$$

$$
\zeta^g_{ijk}=-\beta(g_i,a_{ij},a_{jk})+\beta(a^g_{ij},g_j,a_{jk})-\beta(a^g_{ij},a^g_{jk},g_k),
$$

$$
B^{g,\lambda}_{ijk}=\rho_{g_i}B_{ijk}+\zeta^g_{ijk}+(\delta_{a^g}\lambda)_{ijk},\qquad (\delta_{a^g}\lambda)_{ijk}=\rho_{a^g_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}.
$$

Changing the chosen representative to $\beta'=\beta+\delta_\rho c$ for a normalized $2$-cochain $c$ and simultaneously replacing $B$ by $B+a^*c$ changes the cochain presentation but preserves the background equation: on every tetrahedron, flatness gives

$$
(\delta_a(a^*c))_{ijkl}=\rho_{a_{ij}}c(a_{jk},a_{kl})-c(a_{ik},a_{kl})+c(a_{ij},a_{jl})-c(a_{ij},a_{jk})=(\delta_\rho c)(a_{ij},a_{jk},a_{kl}).
$$

This finite mathematical model makes no assertion that a physical theory realizes the symmetry or has an anomaly.

## Definition references

[Benini, Córdova, and Hsin, §2.3, PDF pp. 18–19](https://arxiv.org/pdf/1803.09336)

[Baez and Lauda, §8.3, PDF pp. 54–59](https://arxiv.org/pdf/math/0307200)

[Schäfer-Nameki, §§2.5 and 2.8.1, printed pp. 23–33](https://arxiv.org/pdf/2305.18296v2)
