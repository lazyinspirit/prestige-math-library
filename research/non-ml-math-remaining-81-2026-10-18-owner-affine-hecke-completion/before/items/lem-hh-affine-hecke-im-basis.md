---
id: lem-hh-affine-hecke-im-basis
kind: lemma
title: "The extended Iwahori–Matsumoto basis"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-hh-affine-hecke-algebra-from-root-datum, thm-hh-generic-coxeter-hecke-standard-basis]
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

[F1] The affine Coxeter group $W_{\mathrm{aff}}$ has finite simple set $S_{\mathrm{aff}}$, the parameters $v_s=\sqrt{q_s}$ are units constant on its simple-generator conjugacy classes, and $\mathcal H_{\mathrm{aff}}$ is the corresponding generic Coxeter Hecke algebra specialized to $\mathbb C$ ([[def-hh-affine-hecke-algebra-from-root-datum]]).

[F2] For any Coxeter system with finite simple set and the stated generic unit parameters, the Hecke elements $T_w$ indexed by the Coxeter group form a basis after every commutative coefficient specialization, with no flatness assumption ([[thm-hh-generic-coxeter-hecke-standard-basis]]).

[F3] As a crossed product, $\mathcal H_{\mathrm{aff}}\rtimes\Omega$ has underlying vector space $\mathcal H_{\mathrm{aff}}\otimes_\mathbb C\mathbb C[\Omega]$, and $\mathbb C[\Omega]$ has the group elements $U_\omega$ as a basis ([[def-hh-affine-hecke-algebra-from-root-datum]]).

## Proof

**Given:** The data above.

1.1 The affine simple set is finite by the affine Coxeter datum in [F1]. The conjugacy-invariant positive parameters give units $v_s=\sqrt{q_s}\in\mathbb C^\times$ satisfying the parameter condition of [F2]. Applying [F2] to the affine Coxeter subsystem and then specializing its universal coefficient ring by $v_s\mapsto\sqrt{q_s}$ proves that $\{T_w:w\in W_{\mathrm{aff}}\}$ is a $\mathbb C$-basis of $\mathcal H_{\mathrm{aff}}$. [F1, F2, given, construct]

2.1 By [F3], every element of the crossed product has a unique finite sum $\sum_{\omega\in\Omega}h_\omega U_\omega$ with $h_\omega\in\mathcal H_{\mathrm{aff}}$. Expanding each coefficient uniquely in the basis from step 1.1 gives a unique finite $\mathbb C$-linear combination of $T_wU_\omega$. Hence the displayed family is a basis. No choice principle is used. [F3, step 1.1, algebra] ∎
