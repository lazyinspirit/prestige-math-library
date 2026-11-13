---
id: prop-se-2-3-loss
kind: proposition
domain: mathematics
title: Global Strichartz estimate with derivative loss
status: published
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - lem-se-interpolation-sobolev-model
  - prop-se-import-bgt-strichartz
  - math:lem-smooth-bump-between-concentric-euclidean-balls
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:thm-heine-borel-rn
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  lem-se-interpolation-sobolev-model: mathematical-premise
  prop-se-import-bgt-strichartz: mathematical-premise
  math:lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 8
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact smooth non-trapping obstacle. Let $\Delta_D$ be the Dirichlet Laplacian, $H_D^r(\Omega)$ its spectral Sobolev scale, and $W(t)=e^{it\Delta_D}$. Fix $T>0$, $0\le s\le1$, and exponents $2<p\le\infty$, $2\le q<\infty$ satisfying $2/p+n/q=n/2$, with $1/\infty=0$. For $0<s<1$ use the complex interpolation convention $W^{s,q}(\Omega)=[L^q(\Omega),W^{1,q}(\Omega)]_s$, and set $W^{0,q}=L^q$. Time-space norms are Bochner norms.

There is a constant $C$, depending on the fixed domain, exponents, $s$ and $T$, such that for every $u_0\in H_D^{s+1/p}(\Omega)$,
$$\|W(t)u_0\|_{L^p(0,T;W^{s,q}(\Omega))}\le C\|u_0\|_{H_D^{s+1/p}(\Omega)}.$$
This is a whole-domain estimate with a loss of $1/p$ derivatives.

## Statement references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-dirichlet-scale]]

[[def-se-foundation-time-function-spaces]]

[[lem-se-interpolation-sobolev-model]]

[[math:def-sobolev-space-wkp-and-its-norm]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] The geometry definition gives a radius $r>0$ with $\Theta\subset B_r(0)$, and the non-trapping condition is the stated generalized-ray escape hypothesis. [[def-se-geometry]] [[def-se-nontrapping]]

[F2] The Dirichlet scale defines $H_D^r$ and the group $W(t)$; the time-space definition specifies the Bochner norms. [[def-se-dirichlet-scale]] [[def-se-foundation-time-function-spaces]]

[F3] The integer endpoint $W^{1,q}(\Omega)$ is the complex weak-derivative Sobolev space with the norm of the integer Sobolev definition, applied with $k=1$, exponent $q$ and scalar field $\mathbb C$; its countable-choice hypothesis follows from the assumed AC. The fractional target is the complex interpolation space in the statement, with its endpoint conventions. [[math:def-sobolev-space-wkp-and-its-norm]] [[lem-se-interpolation-sobolev-model]] [[math:def-axiom-of-choice]]

[F4] Given a smooth compactly supported cutoff equal to one near the obstacle, the completed exterior Strichartz proposition supplies the displayed whole-domain estimate for precisely these exponents and this target convention, including $p=\infty$. [[prop-se-import-bgt-strichartz]]

[F5] For $0<r<R$, a smooth function supported in $B_R(0)$ and equal to one on $\overline B_r(0)$ exists. [[math:lem-smooth-bump-between-concentric-euclidean-balls]]

[F6] The Axiom of Choice is assumed, as required by the scale and interpolation contracts. [[math:def-axiom-of-choice]]

[F7] In $\mathbb R^n$ with its Euclidean metric, a subset is compact if and only if it is closed and bounded. Thus the compact obstacle is bounded, and a closed support contained in a bounded ball is compact. [[math:thm-heine-borel-rn]]

## Proof

[F1] The geometry definition gives a radius $r>0$ with $\Theta\subset B_r(0)$, and the non-trapping condition is the stated generalized-ray escape hypothesis. [[def-se-geometry]] [[def-se-nontrapping]]

[F2] The Dirichlet scale defines $H_D^r$ and the group $W(t)$; the time-space definition specifies the Bochner norms. [[def-se-dirichlet-scale]] [[def-se-foundation-time-function-spaces]]

[F3] The integer endpoint $W^{1,q}(\Omega)$ is the complex weak-derivative Sobolev space with the norm of the integer Sobolev definition, applied with $k=1$, exponent $q$ and scalar field $\mathbb C$; its countable-choice hypothesis follows from the assumed AC. The fractional target is the complex interpolation space in the statement, with its endpoint conventions. [[math:def-sobolev-space-wkp-and-its-norm]] [[lem-se-interpolation-sobolev-model]] [[math:def-axiom-of-choice]]

[F4] Given a smooth compactly supported cutoff equal to one near the obstacle, the completed exterior Strichartz proposition supplies the displayed whole-domain estimate for precisely these exponents and this target convention, including $p=\infty$. [[prop-se-import-bgt-strichartz]]

[F5] For $0<r<R$, a smooth function supported in $B_R(0)$ and equal to one on $\overline B_r(0)$ exists. [[math:lem-smooth-bump-between-concentric-euclidean-balls]]

[F6] The Axiom of Choice is assumed, as required by the scale and interpolation contracts. [[math:def-axiom-of-choice]]

[F7] In $\mathbb R^n$ with its Euclidean metric, a subset is compact if and only if it is closed and bounded. Thus the compact obstacle is bounded, and a closed support contained in a bounded ball is compact. [[math:thm-heine-borel-rn]]



**Given:** The obstacle, exponents, time, initial datum and Choice assumption in the statement.

**Goal:** Establish the displayed whole-domain estimate.

1.1 The compact obstacle is bounded by F7, so choose $r>0$ with $\Theta\subset B_r(0)$ and choose $R>r$. The smooth-bump lemma gives a smooth function $\chi$ equal to one on $\overline B_r(0)$ with $\operatorname{supp}\chi\subset B_R(0)$. Its support is the closure of its nonzero set, hence is closed; it is bounded by this containment and therefore compact by F7. Consequently $\chi\in C_c^\infty(\mathbb R^n)$ and equals one on the open neighborhood $B_r(0)$ of $\Theta$. Thus $\chi$ meets the cutoff hypothesis of the completed exterior estimate. [F1, F5, F7, given, choose]

2.1 The domain, non-trapping hypothesis, Choice assumption and exponents meet the remaining hypotheses of that estimate. Its whole-domain conclusion applies to $u_0$ and, with the scale, group, Bochner norms and fractional target identified by the stated conventions, is exactly the displayed inequality. The constant may depend on the chosen cutoff, which is fixed once the domain is fixed, as well as on the other displayed data. This proves the assertion. [F1, F2, F3, F4, F6, step 1.1, given] ∎

## Source notes

The original article is cited for attribution to Proposition 2.3, equation (2.5); it is not used as proof here. The completed exterior estimate records its independent Burq–Gérard–Tzvetkov inputs and their reading limits. The explicitly chosen complex interpolation model does not assert an identification with Slobodeckij spaces for $q\ne2$.
