---
id: lem-finite-normalization-compatible-with-principal-opens
kind: lemma
title: "Finite normalization commutes with principal localization"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-integral-closure-finite-finite-type-domain-over-field, thm-integrality-commutes-with-localisation, def-principal-localisation, def-multiplicative-subset-and-localisation, def-field-of-fractions, def-zero-divisor-and-integral-domain, def-finite-type-and-module-finite-algebras, lem-transitivity-of-module-finiteness, def-generated-cyclic-finitely-generated-and-free-modules, def-integral-closure-and-integrally-closed-domain]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.36.11 (integral closure commutes with localization)"
      url: "https://stacks.math.columbia.edu/tag/0307"
      locator: "Lemma 10.36.11, statement and complete proof"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §6, §17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "§6 (integral closure under localisation)"
---

## Statement

Let $k$ be a field, let $A$ be a finite-type integral domain over $k$, let $B$
be the integral closure of $A$ in $\operatorname{Frac}(A)$, and let
$0\ne f\in A$. Then the integral closure of the principal localisation $A_f$
inside the field $\operatorname{Frac}(A)$ is exactly the localisation $B_f$,
and $B_f$ is a finite $A_f$-module.

## Facts & Assumptions

**Given:** a field $k$, a finite-type integral domain $A$ over $k$, its integral closure $B$ in $\operatorname{Frac}(A)$, and an element $0\ne f\in A$.

[L1] Let $A\to B$ be a homomorphism of commutative rings, $S\subseteq A$ multiplicative and $b\in B$: if $b$ is integral over $A$ then $b/1$ is integral over $S^{-1}A$. Moreover, if $A$ is a domain, $S\subseteq A\setminus\{0\}$, $K$ is a field extension of $\operatorname{Frac}(A)$ and $\overline A$ is the integral closure of $A$ in $K$, then the integral closure of $S^{-1}A$ in $K$ is exactly $S^{-1}\overline A$ ([[thm-integrality-commutes-with-localisation]], [[def-multiplicative-subset-and-localisation]]).

[L2] For a commutative ring $R$ and $f\in R$ the powers $S_f=\{f^{n}:n\in\mathbb N\}$ form a multiplicative subset, and the principal localisation is $R_f=S_f^{-1}R$ with elements written $r/f^{n}$; the element $f$ becomes a unit, and an element $r/1$ is zero exactly when $f^{n}r=0$ for some $n$ ([[def-principal-localisation]], [[def-multiplicative-subset-and-localisation]]).

[L3] The integral closure of a finite-type domain over a field $k$ in its fraction field is a finite module over the domain ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[def-finite-type-and-module-finite-algebras]], [[def-integral-closure-and-integrally-closed-domain]]).

[L4] If $A$ is a domain and $0\ne f\in A$, then $A_f$ is a domain containing $A$ and the identity on $A$ exhibits $\operatorname{Frac}(A)$ as a field containing $A_f$, and $\operatorname{Frac}(A_f)=\operatorname{Frac}(A)$: each element of $\operatorname{Frac}(A_f)$ is a fraction of elements of $A_f$, hence lies in $\operatorname{Frac}(A)$, while each $a/b$ with $a,b\in A$, $b\ne0$, equals $(a/1)/(b/1)$ with $a/1,b/1\in A_f$ ([[def-field-of-fractions]], [[def-zero-divisor-and-integral-domain]], [[def-principal-localisation]]).

[L5] If $B$ is a finite $A$-module with generators $b_1,\ldots,b_m$ and $A\subseteq A_f$, then $B_f=A_f(b_1/1)+\cdots+A_f(b_m/1)$ is a finite $A_f$-module: every element of $B_f$ is $b/f^{n}$ with $b=\sum_i a_ib_i$, and $b/f^{n}=\sum_i(a_i/f^{n})(b_i/1)$ ([[lem-transitivity-of-module-finiteness]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[def-principal-localisation]]).



## Proof

**Proof technique:** direct.

1.1 The element $f$ is nonzero in the domain $A$, so the multiplicative subset $S_f=\{f^{n}\}$ is contained in $A\setminus\{0\}$ by [L2] and [L4]. By [L3] the integral closure $B$ of $A$ in $\operatorname{Frac}(A)$ is a finite $A$-module. The localisation $A_f$ is a domain containing $A$, and by [L4] the field $\operatorname{Frac}(A)$ contains $A_f$ and equals its fraction field, so the phrase "the integral closure of $A_f$ inside $\operatorname{Frac}(A)$" is computed inside a field extension of $\operatorname{Frac}(A_f)$. [L2, L3, L4, given]

2.1 Applying the third clause of [L1] with the domain $A$, the multiplicative subset $S=S_f\subseteq A\setminus\{0\}$, the field $K=\operatorname{Frac}(A)$ and $\overline A=B$: the integral closure of $S_f^{-1}A=A_f$ in $K=\operatorname{Frac}(A)$ is exactly $S_f^{-1}B=B_f$. This is a genuine equality inside the fixed field $\operatorname{Frac}(A)$, not an isomorphism chosen afterwards, so it is canonical. [L1, L2, step 1.1]

3.1 By [L5], applied to the finite generating list $b_1,\ldots,b_m$ of the $A$-module $B$ from step 1.1, the localisation $B_f$ is generated as an $A_f$-module by the finitely many elements $b_1/1,\ldots,b_m/1$, so $B_f$ is a finite $A_f$-module. Combined with step 2.1, the integral closure of $A_f$ inside $\operatorname{Frac}(A)$ is $B_f$, a finite $A_f$-module. If $f$ is a unit of $A$, then $S_f$ contains $1$ and $A_f=A$, so the statement reduces to $B_f=B$; the hypothesis $f\ne0$ is exactly what makes $S_f$ a subset of $A\setminus\{0\}$, and it is used nowhere else. [L2, L5, step 1.1, step 2.1] ∎
