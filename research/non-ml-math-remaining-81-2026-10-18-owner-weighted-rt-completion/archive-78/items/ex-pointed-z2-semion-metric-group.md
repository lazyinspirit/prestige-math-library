---
id: ex-pointed-z2-semion-metric-group
kind: example
title: "The pointed Z/2 semion metric group"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-pointed-metric-group-ribbon-category, thm-pointed-metric-group-is-modular-iff-radical-trivial]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Example 8.13.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

For $G=\mathbb Z/2=\{0,1\}$ define

$$\omega(a,b,c)=(-1)^{abc},\qquad r(a,b)=i^{ab},\qquad q(0)=1,\quad q(1)=i,$$

where group elements are represented by bits. These data give a pointed ribbon category with nondegenerate bicharacter $b$ and modular Hopf-link matrix.

## Facts & Assumptions

**Given:** The finite group $G=\mathbb Z/2$ and the scalar functions in the Statement.

[F1] The pentagon and two hexagon equations and twist compatibility for an abelian $3$-cocycle are those of [[def-pointed-metric-group-ribbon-category]].

[F2] The pointed modularity criterion is $\operatorname{rad}(b)=\{0\}$ ([[thm-pointed-metric-group-is-modular-iff-radical-trivial]]).

## Proof

**Given:** The data in the Statement.

1.1 Normalization holds because every exponent vanishes if any argument is $0$. For bits, $b+c$ in the cocycle equations is reduced modulo $2$. The pentagon signs have exponents
$abc+a(b+c)d+bcd=acd+bcd+abc+abd\pmod2,$
so its two sides agree. For the first hexagon, the ratio of the $r$-terms is $i^{-2abc}=(-1)^{abc}$, which is exactly the ratio of the $\omega$-terms. For the second hexagon, the ratio of the $r$-terms is again $i^{-2abc}=(-1)^{abc}$, equal to $\omega(a,b,c)\omega(c,a,b)\omega(a,c,b)^{-1}=(-1)^{abc}$. The twist equation is trivial if either bit is zero; at $(1,1)$ its right side is $r(1,1)^2q(1)^2=i^2i^2=1=q(0)$. Also $q(-g)=q(g)$. Thus all specified cocycle and twist identities hold. [F1, given, algebra]

1.2 The double-braiding values are $b(0,g)=b(g,0)=1$ and $b(1,1)=i^2=-1$. Hence
$s=\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$
The only nonzero element $1$ is not in the radical because $b(1,1)=-1\ne1$, so $\operatorname{rad}(b)=\{0\}$. By [F2] the category is modular; directly, $\det(s)=-2$ and $D^2=2$. [F2, step 1.1, algebra] ∎