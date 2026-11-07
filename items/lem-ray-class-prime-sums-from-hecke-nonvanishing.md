---
dependency_level: 16
id: lem-ray-class-prime-sums-from-hecke-nonvanishing
kind: lemma
title: Analytic prime sums in every ray class
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-character-orthogonality-for-finite-abelian-groups
- thm-ray-class-group-finite
- thm-finite-order-hecke-l-euler-product
- thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one
- lem-trivial-ray-hecke-character-has-a-positive-simple-pole
- thm-dedekind-zeta-euler-product
- thm-weierstrass-convergence-holomorphic-functions
- lem-finitely-many-number-field-ideals-of-bounded-norm
- thm-holomorphic-logarithms-homologically-simply-connected-domains
- prop-star-shaped-plane-domains-are-homologically-simply-connected
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §13, Theorem13.2 analytic prime-sum argument, printed543–545; full local proof below.
---

## Statement

Assume AC and Countable Choice. For any ordinary modulus $\mathfrak m$ of a number field, write $G=\operatorname{Cl}_{\mathfrak m}(K)$ and $h=|G|$. For every $C\in G$, along real $s\downarrow1$,
$$\sum_{\substack{\mathfrak p\nmid\mathfrak m_0\\[\mathfrak p]_{\mathfrak m}=C}}(N\mathfrak p)^{-s}=\frac1h\log\frac1{s-1}+O(1).$$
Thus these primes have Dirichlet density $1/h$, and the sum over all primes of $K$ is $\log(1/(s-1))+O(1)$. This statement uses ray classes and asserts neither existence of a ray class field nor its Artin identification.

## Facts & Assumptions

**Given:** The modulus, ray group and choice assumptions in the Statement.

[F1] The ray group is finite and its characters satisfy the two finite orthogonality relations. [[thm-ray-class-group-finite]] [[lem-character-orthogonality-for-finite-abelian-groups]]

[F2] The Hecke and zeta Euler products converge absolutely for $\operatorname{Re}s>1$. Only finitely many ideals have bounded norm, so prime sums are countable. [[thm-finite-order-hecke-l-euler-product]] [[thm-dedekind-zeta-euler-product]] [[lem-finitely-many-number-field-ideals-of-bounded-norm]]

[F3] Every nontrivial ray-character L-function is holomorphic and nonzero at $1$, whereas the trivial character function has a positive simple pole there. [[thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one]] [[lem-trivial-ray-hecke-character-has-a-positive-simple-pole]]

[F4] A nonvanishing holomorphic function on a disc has a holomorphic logarithm, and locally uniform holomorphic series are holomorphic. [[thm-holomorphic-logarithms-homologically-simply-connected-domains]] [[prop-star-shaped-plane-domains-are-homologically-simply-connected]] [[thm-weierstrass-convergence-holomorphic-functions]]

[A1] AC and CC are retained through [F1]–[F4]. The DC hypothesis in the nonvanishing supplier follows from AC here: for a serial relation on a nonempty set, choose one successor for each element by AC and recursively iterate that successor map from the given initial point. Thus no stronger choice hypothesis is suppressed in invoking [F3]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

1.1 For $\operatorname{Re}s>1$, the series $H_\chi(s)=\sum_{\mathfrak p\nmid\mathfrak m_0}\sum_{k\ge1}\chi([\mathfrak p])^k(N\mathfrak p)^{-ks}/k$ is absolutely locally uniformly convergent by [F2]. Expanding the scalar geometric logarithm and passing through finite products gives $\exp H_\chi=L(s,\chi)$. Its remainder $R_\chi$ over $k\ge2$ is holomorphic for $\operatorname{Re}s>1/2$: on $\operatorname{Re}s\ge\sigma_0>1/2$ its absolute series is bounded by $(1-2^{-\sigma_0})^{-1}\sum_{\mathfrak p}(N\mathfrak p)^{-2\sigma_0}$, finite by [F2]. The Weierstrass theorem [F4] applies. [F2, F4, algebra]

2.1 For a nontrivial $\chi$, [F3]–[F4] supply a holomorphic logarithm $\ell_\chi$ on a sufficiently small disc about $1$. On the connected intersection of that disc with $\operatorname{Re}s>1$, $H_\chi-\ell_\chi$ takes values in $2\pi i\mathbb Z$ and hence is constant. Consequently $S_\chi(s)=\sum_{\mathfrak p\nmid\mathfrak m_0}\chi([\mathfrak p])(N\mathfrak p)^{-s}=H_\chi(s)-R_\chi(s)$ remains bounded along real $s\downarrow1$. For the trivial character, its positive simple pole in [F3] and positivity of its Euler product give $H_1(s)=\log L(s,1)=\log(1/(s-1))+O(1)$ along that real interval. Thus $S_1$ has the same leading term. [F3, F4, step 1.1, algebra]

3.1 Apply [F1] to each prime class and interchange only the finite character sum with the absolutely convergent prime sum. It gives $$\sum_{[\mathfrak p]=C}(N\mathfrak p)^{-s}=\frac1h\sum_{\chi\in\widehat G}\overline{\chi(C)}S_\chi(s)=\frac1h\log\frac1{s-1}+O(1).$$ The finitely many modulus primes have bounded sum near $1$, so the all-prime sum has leading coefficient $1$ as well. Division by $\log(1/(s-1))\to\infty$ proves the density assertion, including $h=1$. No Galois character or unproved reciprocity input occurred. [F1, step 2.1, algebra] ∎ 