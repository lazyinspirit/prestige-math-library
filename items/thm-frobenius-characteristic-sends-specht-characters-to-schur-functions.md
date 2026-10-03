---
id: thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
kind: theorem
title: "The characteristic of a Specht character is a Schur function"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-frobenius-characteristic-map
  - lem-characteristic-of-a-young-permutation-character-is-complete
  - thm-youngs-rule-for-permutation-modules
  - lem-kostka-change-of-basis-is-dominance-unitriangular
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-semistandard-tableau-and-kostka-number
  - lem-complete-homogeneous-expansion-in-power-sums
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - cor-distinct-specht-modules-are-inequivalent
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - def-stable-schur-function-by-bialternants
  - def-virtual-character-and-character-ring-of-a-finite-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.5), printed p. 114 (ch(χ^λ)=s_λ); implicitly (7.4), printed pp. 113–114"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6 and §16"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26; §16 (Theorem 16.4), printed pp. 60–64"
---

## Statement

For every $n\ge0$ and every $\lambda\vdash n$, let $S^\lambda$ be the complex
Specht module of shape $\lambda$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]) and $\chi^\lambda$
its character, an irreducible character of $S_n$
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]). Then

$$\operatorname{ch}(\chi^\lambda)=s_\lambda\in\Lambda^n,$$

the stable Schur function of shape $\lambda$
([[def-stable-schur-function-by-bialternants]]). In particular $\operatorname{ch}$
maps the $\mathbb Z$-basis $\{\chi^\lambda:\lambda\vdash n\}$ of $R(S_n)$ to the
$\mathbb Z$-basis $\{s_\lambda:\lambda\vdash n\}$ of $\Lambda^n$, and all values
$\chi^\lambda(\rho)$ are integers.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and partitions $\lambda,\mu\vdash n$; the Young permutation module $M^\mu$ with character $\varphi^\mu$ and the Specht modules $S^\lambda$ with characters $\chi^\lambda$.

[F1] Young's rule: $M^\mu\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus K_{\lambda\mu}}$ as $\mathbb C S_n$-modules, where $K_{\lambda\mu}$ is the Kostka number ([[thm-youngs-rule-for-permutation-modules]]).

[F2] $K_{\lambda\mu}$ is the number of semistandard $\lambda$-tableaux of content $\mu$, so it is a nonnegative integer ([[def-semistandard-tableau-and-kostka-number]]).

[F3] Characters of finite-dimensional complex representations are additive on direct sums: $\chi_{V\oplus W}=\chi_V+\chi_W$ ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F4] The characteristic map is $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)p_\rho/z_\rho$ and is $\mathbb Z$-linear on class functions; $R(S_n)$ is by definition the integral span of the irreducible characters of $S_n$ ([[def-frobenius-characteristic-map]], [[def-virtual-character-and-character-ring-of-a-finite-group]]).

[F5] $\operatorname{ch}(\varphi^\mu)=h_\mu$ for every $\mu\vdash n$ ([[lem-characteristic-of-a-young-permutation-character-is-complete]]).

[F6] For partitions $\lambda,\mu$: $h_\mu=\sum_{\lambda\vdash n}K_{\lambda\mu}s_\lambda$, $K_{\lambda\mu}=0$ unless $\lambda\unrhd\mu$, and $K_{\mu\mu}=1$; hence, in a linear extension of dominance from smaller to larger, $(K_{\lambda\mu})$ is lower unitriangular with diagonal entries $1$ and is invertible over $\mathbb Z$ ([[lem-kostka-change-of-basis-is-dominance-unitriangular]]).

[F7] For every $d\ge0$ the Schur functions $\{s_\lambda:\lambda\vdash d\}$ form a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F8] $h_\mu=\sum_{\rho\vdash n}N(\mu,\rho)p_\rho/z_\rho$ in $\Lambda_{\mathbb Q}^n$, with $N(\mu,\rho)\in\mathbb Z$ and $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ ([[lem-complete-homogeneous-expansion-in-power-sums]]).

[F9] The Specht modules $S^\lambda$, $\lambda\vdash n$, are pairwise inequivalent and exhaust the irreducible complex representations of $S_n$; the irreducible complex characters of a finite group are orthonormal, hence $\mathbb Z$-linearly independent, in the space of class functions ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[cor-distinct-specht-modules-are-inequivalent]], [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

## Proof

**Proof technique:** direct.

1.1 For every $\mu\vdash n$, taking characters in Young's rule [F1] and using additivity on direct sums [F3] gives $\varphi^\mu=\sum_{\lambda\vdash n}K_{\lambda\mu}\chi^\lambda$ in $\mathrm{cf}(S_n)$, the sum being finite. [F1, F2, F3]

2.1 Applying the $\mathbb Z$-linear map $\operatorname{ch}$ to step 1.1 and using [F5] gives $h_\mu=\operatorname{ch}(\varphi^\mu)=\sum_{\lambda\vdash n}K_{\lambda\mu}\operatorname{ch}(\chi^\lambda)$ in $\Lambda_{\mathbb C}^n$. [F4, F5, step 1.1, algebra]

3.1 Subtracting the identity $h_\mu=\sum_{\lambda}K_{\lambda\mu}s_\lambda$ of [F6] from step 2.1 yields $\sum_{\lambda\vdash n}K_{\lambda\mu}\bigl(\operatorname{ch}(\chi^\lambda)-s_\lambda\bigr)=0$ for every $\mu\vdash n$, a homogeneous linear system with coefficient matrix $K^{\mathsf T}$, where $K=(K_{\lambda\mu})$; since $K$ is unitriangular in a linear extension of dominance, both $K$ and $K^{\mathsf T}$ are invertible over $\mathbb Z$, so the only solution is the zero vector and $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash n$. [F6, step 2.1, algebra]

4.1 Inverting the integral matrices, $s_\lambda=\sum_{\mu\vdash n}(K^{-1})_{\mu\lambda}h_\mu$ with $(K^{-1})_{\mu\lambda}\in\mathbb Z$; substituting $h_\mu=\sum_{\rho\vdash n}N(\mu,\rho)p_\rho/z_\rho$ with integral $N(\mu,\rho)$ gives $s_\lambda=\sum_{\rho\vdash n}c_{\lambda\rho}\,p_\rho/z_\rho$ with $c_{\lambda\rho}=\sum_\mu(K^{-1})_{\mu\lambda}N(\mu,\rho)\in\mathbb Z$. Since $\{p_\rho/z_\rho:\rho\vdash n\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^n$ and $\operatorname{ch}(\chi^\lambda)=\sum_\rho\chi^\lambda(\rho)p_\rho/z_\rho$ by definition, comparing coefficients gives $\chi^\lambda(\rho)=c_{\lambda\rho}\in\mathbb Z$ for every $\rho\vdash n$. [F4, F8, step 3.1, algebra]

5.1 The characters $\chi^\lambda$ are pairwise distinct irreducible characters of $S_n$ and the irreducible characters are $\mathbb Z$-linearly independent [F9]; since $R(S_n)$ is by definition their integral span [F4], the family $\{\chi^\lambda:\lambda\vdash n\}$ is a $\mathbb Z$-basis of $R(S_n)$. By [F7] the family $\{s_\lambda:\lambda\vdash n\}$ is a $\mathbb Z$-basis of $\Lambda^n$, and by step 3.1 the map $\operatorname{ch}$ carries the first basis bijectively onto the second; step 4.1 shows that all character values are integers. [F4, F7, F9, step 3.1, step 4.1] ∎
