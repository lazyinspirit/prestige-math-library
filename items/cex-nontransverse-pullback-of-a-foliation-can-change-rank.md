---
id: cex-nontransverse-pullback-of-a-foliation-can-change-rank
kind: counterexample
title: "A nontransverse pullback need not reproduce the rank of a foliation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
  - prop-pullback-foliation-under-a-transverse-map
  - def-map-transverse-to-a-regular-foliation
  - def-flat-chart-for-a-distribution
  - def-integrable-distribution
  - def-differential-of-a-smooth-map
  - def-vector-subbundle
  - def-countable-choice
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes, complete 53-page PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§§1.3, 2.1 (transverse sections and holonomy); the rank-jump witness itself is the author-constructed alteration below and is not stated in the source."
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§§4.2–4.3, printed pp. 140–154 (PDF pp. 149–163); transverse charts and holonomy, not the rank-jump witness."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The
following inference is false: for an arbitrary smooth map $f:N\to M$ and a
regular foliation $F$ of $M$, the inverse-image spaces
$D_t^*:=(df_t)^{-1}(T_{f(t)}F)$ form a smooth distribution of constant rank
$\dim N-\operatorname{codim}F$ and define a regular pullback foliation whose
leaves are the connected components of leaf preimages.

**Counterexample.** Let $M=\mathbb R^2$ with the horizontal foliation, let
$N=\mathbb R$, and let $f(t)=(0,t^2)$. Since $df_t(v)=(0,2tv)$ and
$T_{f(t)}F=\mathbb R\times\{0\}$, one has $D_t^*=\{0\}$ for $t\neq 0$ but
$D_0^*=T_0\mathbb R$. Thus the rank jumps from $0$ to $1$ at $0$, so $D^*$ is
not a regular distribution. The map is transverse to $F$ for $t\neq 0$ and
nontransverse at $0$. This refutes the rank and regular-distribution inference
without the transversality hypothesis.

## Facts & Assumptions

**Given:** The horizontal foliation $F$ of $\mathbb R^2$, the map $f:\mathbb R\to\mathbb R^2$, $f(t)=(0,t^2)$, and the family of inverse-image spaces $D_t^*=(df_t)^{-1}(T_{f(t)}F)$.

[F1] The horizontal foliation $F$ of $\mathbb R^2$ is the regular foliation whose leaves are the lines $\mathbb R\times\{c\}$; its tangent distribution is $T_{f(t)}F=\mathbb R\times\{0\}$ at every point, a rank-one subbundle of $T\mathbb R^2$ ([[def-flat-chart-for-a-distribution]], [[def-integrable-distribution]]).

[F2] A smooth map $f$ is transverse to $F$ at $t$ exactly when $df_t(T_tN)+T_{f(t)}F=T_{f(t)}M$, and the inverse-image convention for the pullback is $D_t^*=(df_t)^{-1}(T_{f(t)}F)$ ([[def-map-transverse-to-a-regular-foliation]], [[prop-pullback-foliation-under-a-transverse-map]]).

[F3] For smooth $f$ the differential $df_t$ is the linear map of tangent spaces induced by $f$, computed in coordinates by the Jacobian matrix ([[def-differential-of-a-smooth-map]]).

[F4] A smooth distribution of rank $k$ assigns to every point a $k$-dimensional subspace as a smooth vector subbundle, so its rank is constant; the linear preimage of a linear subspace under a linear map is a linear subspace ([[def-vector-subbundle]]).

## Counterexample

1.1 In coordinates on $\mathbb R^2$ and $\mathbb R$ the map $f(t)=(0,t^2)$ has Jacobian $(0,2t)^{\mathsf T}$, so $df_t(v)=(0,2tv)$ for every $v\in T_t\mathbb R$, by [F3]. [F3, given]

2.1 Hence $df_t(v)\in T_{f(t)}F=\mathbb R\times\{0\}$ holds exactly when $2tv=0$. Therefore $D_t^*=\{v:2tv=0\}$ equals $\{0\}$ for $t\neq0$ and equals $T_0\mathbb R$ at $t=0$. [F1, F2, step 1.1, algebra]

2.2 The map is transverse to $F$ for $t\neq0$: there $df_t(T_t\mathbb R)$ is the vertical line $\{0\}\times\mathbb R$, which together with $T_{f(t)}F=\mathbb R\times\{0\}$ spans $T_{f(t)}\mathbb R^2$. At $t=0$ the differential vanishes, so $df_0(T_0\mathbb R)=\{0\}$ and the sum $df_0(T_0\mathbb R)+T_{f(0)}F=\mathbb R\times\{0\}$ is a proper subspace of $T_{f(0)}\mathbb R^2$: the map is not transverse at $0$. Thus the failure of the rank conclusion occurs exactly at the point where transversality fails, and the transversality hypothesis of [[prop-pullback-foliation-under-a-transverse-map]] is essential. [F1, F2, step 1.1]

3.1 The rank of $D_t^*$ is $0$ for $t\neq0$ and $1$ at $t=0$; in particular $D^*$ is not a smooth distribution of constant rank $\dim N-\operatorname{codim}F=1-1=0$, and it is not a vector subbundle of $T\mathbb R$ near $0$. So the first two conclusions of the inference fail. [F4, step 2.1]

4.1 Finally the horizontal leaf $L_c=\mathbb R\times\{c\}$ has preimage $f^{-1}(L_c)=\{t:t^2=c\}$, a finite set or empty; its connected components are points, whose tangent spaces are $\{0\}$, while $D_0^*=T_0\mathbb R$. So the leaf-preimage description is not compatible with the inverse-image spaces at $0$ either, and the inference is false in every one of its clauses. The claim is refuted. [F1, F2, step 2.1, step 3.1] ∎