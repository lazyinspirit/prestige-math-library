---
id: cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor
kind: counterexample
title: "A right exact module functor without coproduct preservation is not tensor"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-watts-for-arbitrary-unital-rings
  - def-axiom-of-choice
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
  - thm-one-sided-and-two-sided-exactness-by-short-exact-sequences
  - def-exact-and-short-exact-sequences-of-modules
  - thm-modules-over-a-ring-form-an-abelian-category
  - def-left-and-right-modules
justified_by: []
aliases: []
dependency_level: 4
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Every additive right exact module functor is naturally isomorphic to a tensor
functor; in particular the coproduct-preservation hypothesis of the
Eilenberg-Watts characterization can be dropped.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, the functor $F:\mathbf{Mod}_k\to\mathbf{Mod}_k$ with $F(V)=\prod_{n\ge0}V$ and $F(u)=\prod_nu$ for $k$-linear maps, and the family $(k)_{j\in\mathbb N}$ of $k$-modules.

[F1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] For a family $(X_i)_{i\in I}$ of $k$-modules the direct product $\prod_iX_i$ carries coordinatewise operations, and the direct sum $\bigoplus_iX_i$ consists of the finitely supported families; the direct sum is the coproduct with coordinate inclusions $\jmath_i$, and a homomorphism out of it is uniquely determined by its components ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]], [[def-left-and-right-modules]]).

[F3] Every tensor functor $T_N=N\otimes_k-:\mathbf{Mod}_k\to\mathbf{Mod}_k$ is additive, right exact and coproduct-preserving ([[thm-eilenberg-watts-for-arbitrary-unital-rings]]).

[F4] A functor between abelian categories is exact if and only if it carries every short exact sequence to a short exact sequence; it is exact iff it is additive, left exact and right exact ([[thm-one-sided-and-two-sided-exactness-by-short-exact-sequences]]; [[def-exact-and-short-exact-sequences-of-modules]]). The category $\mathbf{Mod}_k$ is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F5] A sequence of $k$-modules is exact exactly when it is exact after forgetting the scalar action, since kernels and images are computed on the underlying sets ([[def-exact-and-short-exact-sequences-of-modules]]).

## Counterexample

**Proof technique:** direct.

1.1 $F$ is an additive functor: the operations on $\prod_nV$ are coordinatewise by [F2], and for parallel maps $u,v$ one has $F(u+v)=\prod_n(u+v)=\prod_nu+\prod_nv=F(u)+F(v)$, with $F(\mathrm{id})=\mathrm{id}$ and $F(u'u)=F(u')F(u)$ coordinatewise. [F2]

1.2 $F$ is left exact: let $0\to V'\xrightarrow{u'}V\xrightarrow{u}V''\to0$ be a short exact sequence of $k$-modules. Coordinatewise, $\prod_nu'$ is injective, and an element $(v_n)$ of $\prod_nV$ lies in $\ker\prod_nu$ exactly when $u(v_n)=0$ for all $n$, i.e. $v_n\in\operatorname{im}u'$ for all $n$ by exactness at $V$; hence $\ker\prod_nu=\operatorname{im}\prod_nu'$ and $0\to\prod_nV'\to\prod_nV\to\prod_nV''$ is exact. By [F4] this proves left exactness. [F4, F5]

1.3 Let $c:\bigoplus_jF(k)\to F(\bigoplus_jk)$ be induced by the maps $F(\jmath_j)$. An element of its source is a family of scalar sequences $(s_j)_j$ supported on a finite set $J\subseteq\mathbb N$ of summand indices. Its image has $n$-th coordinate $\sum_{j\in J}s_j(n)e_j$, supported in $J$ for every $n$. Conversely, if $(v_n)_n$ has every $v_n$ supported in one finite set $J$, define $s_j(n)$ as the $j$-th coefficient of $v_n$ for $j\in J$ and put $s_j=0$ otherwise; then $(s_j)_j$ belongs to the source and maps to $(v_n)_n$. Thus the image consists exactly of families with supports contained in one fixed finite set of summand indices. [F2]

2.1 Under AC, $F$ is right exact: if $u:V\to V''$ is surjective, each fibre $u^{-1}(w_n)$ for $(w_n)\in\prod_nV''$ is nonempty, so by [F1] there is a choice function on the family $\bigl(u^{-1}(w_n)\bigr)_{n\ge0}$, whose values form $(v_n)\in\prod_nV$ with $u(v_n)=w_n$; hence $\prod_nu$ is surjective, and with the kernel computation of step 1.2 the sequence $\prod_nV'\to\prod_nV\to\prod_nV''\to0$ is exact. By [F4], $F$ is right exact. The Axiom of Choice is used exactly here, to select one preimage in each of the countably many fibres; only this countable instance is used. [F1, F4, F5, step 1.2]

2.2 The element $w=(e_n)_{n\ge0}\in\prod_n(\bigoplus_jk)$, where $e_n$ is the $n$-th standard basis vector, is not in the image of $c$: it would be the image of a source family supported on a finite set $S$ of summand indices, forcing $\{n\}=\operatorname{supp}(e_n)\subseteq S$ for every $n$, so $S\supseteq\mathbb N$, contradicting the finiteness of $S$. Hence $c$ is not surjective and $F$ does not preserve the coproduct of the family $(k)_{j\in\mathbb N}$. [F2, step 1.3]

3.1 By steps 1.1-1.3 and 2.1 the functor $F$ is additive, left exact and right exact, hence exact by [F4] and in particular right exact. [F4, step 1.1, step 1.2, step 2.1]

3.2 No tensor functor represents $F$: suppose $\sigma:F\Rightarrow T_N$ is a natural isomorphism. Naturality of $\sigma$ at the coordinate inclusions $\jmath_j$ gives $T_N(\jmath_j)\circ\sigma_k=\sigma_{\bigoplus_jk}\circ F(\jmath_j)$ for every $j$, so by the universal property in [F2] the comparison maps satisfy $\sigma_{\bigoplus_jk}\circ c=c'\circ(\bigoplus_j\sigma_k)$, where $c'$ is the comparison of $T_N$; since $\sigma_{\bigoplus_jk}$ and $\bigoplus_j\sigma_k$ are isomorphisms, $c$ is an isomorphism if $c'$ is. But $c'$ is an isomorphism because $T_N$ preserves coproducts by [F3], while $c$ is not surjective by step 2.2; this is a contradiction. Hence $F$ is not naturally isomorphic to any tensor functor. [F3, step 2.2]

4.1 Therefore $F$ is additive and exact, hence right exact, but does not preserve coproducts and is not tensor: the coproduct-preservation hypothesis of the Eilenberg-Watts theorem cannot be dropped even for exact functors. The only choice used is the coordinatewise lifting in step 2.1; the rest of the argument is choice-free. [step 2.1, step 2.2, step 3.1, step 3.2] ∎
