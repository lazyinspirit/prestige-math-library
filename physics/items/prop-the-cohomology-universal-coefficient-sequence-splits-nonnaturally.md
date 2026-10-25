---
id: prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally
kind: proposition
title: The cohomology universal coefficient sequence splits nonnaturally
status: published
verification:
  audited: 2026-09-12
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, lem-singular-uct-extension-from-cycle-projections, def-axiom-of-choice, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Miller, Theorem 27.1, printed pages 73–74
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

Assume AC. The cohomology universal coefficient sequence for every space or pair and every abelian coefficient group $G$ splits as abelian groups. Thus
$$H^n(X,A;G)\cong\operatorname{Ext}^1_{\mathbb Z}(H_{n-1}(X,A;\mathbb Z),G)\oplus\operatorname{Hom}_{\mathbb Z}(H_n(X,A;\mathbb Z),G).$$
An isomorphism requires choices of cycle projections; this assertion supplies no natural splitting in spaces and coefficients. Absolute cohomology is the case $A=\varnothing$.

## Facts & Assumptions

[F1] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] supplies $0\to E\xrightarrow{\iota}V\xrightarrow{\beta}W\to0$, with $E,V,W$ the displayed groups.

[F2] [[lem-singular-uct-extension-from-cycle-projections]] proves that $u\mapsto[u q\pi_n]$ is a linear right inverse to evaluation for a fixed cycle projection. [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]] supplies $\pi_n$ under [[def-axiom-of-choice]].

## Proof

**Given:** The free integral singular complex $C$ of $(X,A)$, and the groups $E,V,W$ in [F1]. Assume AC.

1.1 Choose the cycle projection $\pi_n:C_n\to Z_n$ from [F2] and let $q:Z_n\to H_n$ be the quotient. For $u\in W$, define $s(u)=[u q\pi_n]$. It is a cocycle because $q\pi_n$ kills $B_n$; restriction to $Z_n$ is $u q$, so $\beta s(u)=u$. Additivity follows from $(u+v)q\pi_n=u q\pi_n+v q\pi_n$. [F2, given]

2.1 Define $T:E\oplus W\to V$ by $T(e,u)=\iota e+s(u)$. If it is zero, apply $\beta$ to obtain $u=0$, then injectivity of $\iota$ gives $e=0$. For any $v\in V$, the element $v-s(\beta v)$ has zero evaluation, so exactness gives a unique $e\in E$ with $\iota e=v-s(\beta v)$. Thus $v=T(e,\beta v)$. The inverse is additive because this equation determines $e$ uniquely and all its other maps are additive. Hence $T$ is the claimed isomorphism. [F1, step 1.1]

3.1 If $\pi'_n$ is another cycle projection, both sections have the same composite with $\beta$, so their difference has image in $\iota E$. For each $u$, the difference is the class $[u q(\pi_n-\pi'_n)]$. No argument above makes this class zero, nor supplies projections compatible with all maps of spaces. Thus the constructed direct-sum map depends on the supplied projections; a failure of natural splitting is not inferred merely from this dependence. The separate counterexample page addresses nonexistence. For fixed $C$ and fixed $\pi_n$, coefficient postcomposition does commute with $s$ by its formula. [F1, step 1.1, step 2.1]

4.1 At $n=0$, $E=0$ and $\beta$ is an isomorphism, so its inverse is the unique section. For an empty space, equal pair $A=X$, or $G=0$, all groups are zero; for a point in degree zero, $T$ identifies $G$ with $\operatorname{Hom}(\mathbb Z,G)$ by evaluation at $1$. AC enters through [F2] to supply the projections for arbitrary-rank chains and is already assumed in [F1]. The inverse construction in step 2.1 uses unique elements, not a further choice function. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
