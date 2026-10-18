---
id: lem-hh-affine-hecke-im-basis
kind: lemma
title: "The extended Iwahori–Matsumoto basis"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-hh-affine-hecke-algebra-from-root-datum, thm-hh-generic-coxeter-hecke-standard-basis, thm-hh-matsumoto-reduced-word-theorem]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§§1.2 and 1.4, PDF pp. 8–12: affine Coxeter and extended affine groups and their Iwahori–Matsumoto presentation."
---

## Statement

Let $\mathcal H_{\mathrm{IM}}(R,q)=\mathcal H_{\mathrm{aff}}(R,q)\rtimes\Omega$ be the Iwahori–Matsumoto algebra of [[def-hh-affine-hecke-algebra-from-root-datum]]. For $w\in W_{\mathrm{aff}}$, let $T_w$ be the product along a reduced expression, and let $U_\omega$ denote the length-zero symmetry corresponding to $\omega\in\Omega$. Then

$$
\{T_wU_\omega:w\in W_{\mathrm{aff}},\ \omega\in\Omega\}
$$

is a $\mathbb C$-basis of $\mathcal H_{\mathrm{IM}}(R,q)$.

## Facts & Assumptions

**Given:** The reduced based root datum, affine Coxeter system, positive conjugacy-invariant parameter function, and extended algebra from [[def-hh-affine-hecke-algebra-from-root-datum]].

[F1] The affine Coxeter group $W_{\mathrm{aff}}$ has finite simple set $S_{\mathrm{aff}}$. For $s\in S_{\mathrm{aff}}$, put $v_s=\sqrt{q_s}>0$ and $N_s=v_s^{-1}T_s$. These normalized generators satisfy the symmetric quadratic relation. They satisfy the generic Coxeter braid relations: an even braid has equal numbers of each generator on its two sides; if $m(s,t)=2r+1$ is odd, then $t=(st)^r s(st)^{-r}$, so $s,t$ are conjugate in $W_{\mathrm{aff}}\subseteq W_{\mathrm e}$ and their parameters agree ([[def-hh-affine-hecke-algebra-from-root-datum]]).

[F2] For any Coxeter system with finite simple set and the stated generic unit parameters, the generic reduced products indexed by the Coxeter group form a basis after every commutative coefficient specialization, with no flatness assumption ([[thm-hh-generic-coxeter-hecke-standard-basis]]).

[F3] As a crossed product, $\mathcal H_{\mathrm{aff}}\rtimes\Omega$ has underlying vector space $\mathcal H_{\mathrm{aff}}\otimes_\mathbb C\mathbb C[\Omega]$, and $\mathbb C[\Omega]$ has the group elements $U_\omega$ as a basis ([[def-hh-affine-hecke-algebra-from-root-datum]]).

[F4] Any two reduced expressions of the same affine Weyl group element are connected by braid moves ([[thm-hh-matsumoto-reduced-word-theorem]]).

## Proof

**Given:** The data above.

1.1 The affine simple set is finite by [F1]. Specialize [F2] to $v_s=\sqrt{q_s}$; it gives the basis $\{N_w:w\in W_{\mathrm{aff}}\}$ of the normalized presentation, where $N_w$ is a reduced product of the $N_s$. For a reduced expression $w=s_1\cdots s_k$, the unnormalized product is $T_w=(\prod_{j=1}^k v_{s_j})N_w$. By [F4], changing reduced expressions uses braid moves. An even braid preserves the product of the $v_s$ factors because both sides have equal counts of each generator; an odd braid preserves it because its two generators are conjugate in $W_{\mathrm{aff}}$ and [F1] makes their parameters equal. Thus the scalar is well defined and nonzero, so the unnormalized products $T_w$ are nonzero scalar multiples of the basis elements $N_w$. Hence $\{T_w:w\in W_{\mathrm{aff}}\}$ is a $\mathbb C$-basis of $\mathcal H_{\mathrm{aff}}$. [F1, F2, F4, given, construct]

2.1 By [F3], every element of the crossed product has a unique finite sum $\sum_{\omega\in\Omega}h_\omega U_\omega$ with $h_\omega\in\mathcal H_{\mathrm{aff}}$. Expanding each coefficient uniquely in the basis from step 1.1 gives a unique finite $\mathbb C$-linear combination of $T_wU_\omega$. Hence the displayed family is a basis. No choice principle is used. [F3, step 1.1, algebra] ∎
