---
id: thm-ray-class-primes-dirichlet-density
kind: theorem
title: "Prime ideals in each ray-class group coset have equal Dirichlet density"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-natural-and-dirichlet-density
  - def-dirichlet-density-of-prime-ideals
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-ray-class-group-finite
  - thm-finite-order-hecke-l-euler-product
  - thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - lem-character-orthogonality-for-finite-abelian-groups
  - lem-ray-class-prime-sums-from-hecke-nonvanishing
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-global-class-field-existence-number-field
  - thm-dedekind-zeta-euler-product
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-ring-of-integers-free-of-rank-degree
  - thm-weierstrass-convergence-holomorphic-functions
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ray-class field and
  Artin-reciprocity suppliers; analytic density uses the stated Hecke L-function
  and Dedekind zeta results.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §13, Theorem 13.2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.543–545, character orthogonality, logarithms of Hecke Euler products, and equal Dirichlet densities of ray-class cosets."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §4, Theorem 4.8 and surrounding argument, equal densities of ideal classes and Frobenius classes."

---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field, let $\mathfrak m$ be a modulus, let $L_{\mathfrak m}/K$ be its ray-class field, and let $G=\operatorname{Gal}(L_{\mathfrak m}/K)\cong\operatorname{Cl}_{\mathfrak m}(K)$ under Artin reciprocity. For $g\in G$, let $P_g$ be the set of nonzero prime ideals $\mathfrak p$ of $\mathcal O_K$ not dividing $\mathfrak m_0$ whose arithmetic Frobenius under this isomorphism is $g$. The Dirichlet density of a set $P$ of prime ideals is
$$d(P)=\lim_{s\downarrow1}\frac{\sum_{\mathfrak p\in P}(N\mathfrak p)^{-s}}{\log(1/(s-1))},$$
when the limit exists. Then for every $g\in G$ the limit exists and
$$d(P_g)=\frac1{|G|}=\frac1{|\operatorname{Cl}_{\mathfrak m}(K)|}.$$
This is a Dirichlet-density statement and asserts no natural density.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-ray-class-group-finite]]

[[thm-global-class-field-existence-number-field]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[def-natural-and-dirichlet-density]]

[[def-dirichlet-density-of-prime-ideals]]

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice; a number field $K$, a modulus $\mathfrak m$, its ray-class field $L_{\mathfrak m}$, and an element $g$ of its Galois group $G$.

[F1] The ray class group and its character group are finite, and finite abelian character orthogonality gives $\mathbf 1_{[\mathfrak p]=C}=|G|^{-1}\sum_{\chi\in\widehat G}\overline{\chi(C)}\chi([\mathfrak p])$. [[thm-ray-class-group-finite]] [[lem-character-orthogonality-for-finite-abelian-groups]]

[F2] Each ray-class Hecke L-function has its Euler product in $\operatorname{Re}(s)>1$; the logarithm is the sum over prime powers with coefficients $\chi([\mathfrak p])^k/k$. [[thm-finite-order-hecke-l-euler-product]]

[F3] The sum of prime-power terms with exponent $k\ge2$ converges locally uniformly for $\operatorname{Re}(s)>1/2$, because it is bounded by a constant times $\sum_{\mathfrak p}(N\mathfrak p)^{-2\operatorname{Re}(s)}$, which is controlled by the Dedekind zeta Euler product. The ring of integers is countable as a finite-rank abelian group, and a locally uniform sum of holomorphic functions is holomorphic. [[thm-dedekind-zeta-euler-product]] [[thm-ring-of-integers-free-of-rank-degree]] [[thm-weierstrass-convergence-holomorphic-functions]] [[def-countable-choice]]

[F4] The trivial ray-class Hecke L-function equals $\zeta_K(s)\prod_{\mathfrak p\mid\mathfrak m_0}(1-(N\mathfrak p)^{-s})$; $\zeta_K$ has a simple pole at $1$ with positive residue. [[def-finite-order-ray-class-hecke-character-and-l-function]] [[thm-dedekind-zeta-euler-product]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F5] Every nontrivial ray-class Hecke L-function is holomorphic and nonzero at $1$. [[thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one]]

[F6] The Artin map identifies the class of every prime ideal away from $\mathfrak m_0$ with its arithmetic Frobenius in $G$. [[thm-number-field-ray-class-field-artin-isomorphism]]

[A1] **Unresolved supplier obligation:** ray-class field existence and the Artin isomorphism are not proved by their current suppliers; the actual global CFT proof chain has unresolved norm-subgroup cofinality, global reciprocity, finite-support localization, and local cyclic-algebra/Artin compatibility. [[thm-global-class-field-existence-number-field]] [[thm-number-field-ray-class-field-artin-isomorphism]]

[F7] The complete analytic ray-class prime-sum asymptotic is locally proved from the reconstructed Hecke continuation, finite Euler correction and Taylor-positivity nonvanishing argument. It uses no class-field-existence result. [[lem-ray-class-prime-sums-from-hecke-nonvanishing]]

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 For $\operatorname{Re}(s)>1$, take logarithms of the absolutely convergent Euler product in [F2]. With $$S_\chi(s)=\sum_{\mathfrak p\nmid\mathfrak m_0}\chi([\mathfrak p])(N\mathfrak p)^{-s},$$ the expansion is $\log L(s,\chi)=S_\chi(s)+R_\chi(s)$, where $R_\chi(s)$ is the sum of the terms with powers $k\ge2$. [F2, given, algebra]

2.1 For any fixed $\sigma_0>1/2$, [F3] bounds the absolute value of $R_\chi(s)$ uniformly on compact subsets of $\operatorname{Re}(s)\ge\sigma_0$ by a convergent multiple of $\sum_{\mathfrak p}(N\mathfrak p)^{-2\sigma_0}$. Thus $R_\chi$ is holomorphic near $s=1$. [F3, step 1.1]

3.1 For each nontrivial $\chi$, [F5] gives a holomorphic nonzero value at $1$, so a holomorphic branch of $\log L(s,\chi)$ exists near $1$ and $S_\chi(s)$ remains bounded there by steps 1.1 and 2.1. For the trivial character, [F4] gives $\log L(s,1)=-\log(s-1)+O(1)$, so $S_1(s)=-\log(s-1)+O(1)$. These conclusions are supplied by the reconstructed analytic argument in [F7]. [F4, F5, F7, step 1.1, step 2.1]

4.1 Apply [F1] to the prime classes and sum over primes. For the class $C$ corresponding to $g$ by [F6], $$\sum_{[\mathfrak p]=C}(N\mathfrak p)^{-s}=\frac1{|G|}\sum_{\chi\in\widehat G}\overline{\chi(C)}S_\chi(s)=\frac1{|G|}\log\frac1{s-1}+O(1).$$ The ramified or modulus primes are a finite set and do not affect the limit. The same Euler-product expansion for $\zeta_K$ and its simple pole give $\sum_{\mathfrak p}(N\mathfrak p)^{-s}=\log(1/(s-1))+O(1)$. Dividing proves the analytic density formula of [F7]. Its interpretation in the full Frobenius formulation uses [F6] and the still-held class-field-existence and Artin dictionary [A1]. Those CFT suppliers remain separate obligations, so no proof acceptance of their existence or reciprocity is inferred from the completed analytic argument. [A1, F1, F4, F6, F7, step 3.1, algebra] ∎ 