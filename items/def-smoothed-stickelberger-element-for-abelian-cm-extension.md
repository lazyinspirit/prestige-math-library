---
id: def-smoothed-stickelberger-element-for-abelian-cm-extension
kind: definition
title: "S,T-smoothed Stickelberger element for an abelian CM extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-number-field
  - def-place-of-a-global-field
  - def-ring-of-integers-of-a-number-field
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - lem-character-orthogonality-for-finite-abelian-groups
  - def-artin-l-series-for-a-linear-character
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - lem-totally-real-abelian-artin-l-values-at-zero-in-zf
  - def-decomposition-group-of-a-prime
  - def-inertia-group-of-a-prime
  - def-arithmetic-frobenius-coset
  - def-absolute-norm-of-an-ideal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "§1.1, printed pp. 3–7: Artin L-functions, S-depletion, T-smoothing, character interpolation, and the # involution."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §2 and Chapter VIII §10, printed pp. 154–156 and 261–263: ray-class L-series, Artin L-series, and the abelian Artin–Hecke comparison and continuation context."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://djvu.online/file/K5bwk36WUzYnx"
      locator: "Chapter VII §10, printed pp. 517–526, Definition 10.1 and Theorem 10.6 with proof: Artin local factors and the abelian Artin–Hecke Euler correction. The continuation argument it invokes is Chapter VII §8, Theorem 8.5."
---

## Definition

Let $H/F$ be a finite abelian extension of number fields such that $F$ is totally real and $H$ is a totally imaginary quadratic extension of $F$ (a CM extension). Let $G=\operatorname{Gal}(H/F)$ and $\widehat G=\operatorname{Hom}(G,\mathbb C^\times)$. Write $S_\infty$ for the infinite (archimedean) places of $F$. Let $S$ be a finite set of places containing $S_\infty$, and let $T$ be a finite set of finite primes disjoint from $S$. For a finite prime $v$ of $F$, write $Nv=|\mathcal O_F/v|$, choose a prime $\mathfrak P$ of $H$ above $v$, let $D_v$ and $I_v$ be its decomposition and inertia groups, and let $\operatorname{Frob}_v\in D_v/I_v$ be the arithmetic Frobenius coset. For $\chi\in\widehat G$, set $\chi(\operatorname{Frob}_v)=0$ when $\chi$ is nontrivial on $I_v$; otherwise evaluate the descended character on that coset. For $\operatorname{Re}(s)>1$, define

$$L_{S,T}(\chi,s)=L(\chi,s)\prod_{v\in S\setminus S_\infty}\left(1-\chi(\operatorname{Frob}_v)(Nv)^{-s}\right)\prod_{v\in T}\left(1-\chi(\operatorname{Frob}_v)(Nv)^{1-s}\right),$$

where $L(\chi,s)$ is the Artin $L$-series and its meromorphic continuation is used to evaluate $L_{S,T}(\chi,s)$ at $s=0$. The $S$-depleted, $T$-smoothed Stickelberger element is the element $\Theta_{S,T}^{H/F}\in\mathbb C[G]$ characterized by

$$\chi(\Theta_{S,T}^{H/F})=L_{S,T}(\chi^{-1},0)\qquad(\chi\in\widehat G).$$

The involution $\#$ on $\mathbb C[G]$ is induced by $g\mapsto g^{-1}$ on $G$.

## Definition references

[[def-number-field]]

[[def-place-of-a-global-field]]

[[def-group-ring]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[lem-character-orthogonality-for-finite-abelian-groups]]

[[def-artin-l-series-for-a-linear-character]]

[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[[thm-abelian-artin-l-series-equals-hecke-l-series]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[[def-decomposition-group-of-a-prime]]

[[def-inertia-group-of-a-prime]]

[[def-arithmetic-frobenius-coset]]

[[def-absolute-norm-of-an-ideal]]

[Dasgupta and Kakde — §1.1, printed pp. 3–7](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

[Neukirch — Chapter VII §10, Definition 10.1](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** The finite abelian CM extension, finite sets of places and character conventions in the Definition.

[F1] The group ring is the free module on $G$ with multiplication $[g][h]=[gh]$. [[def-group-ring]] [[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[F2] Characters of a finite abelian group form a complete orthogonal family, so their evaluations distinguish elements of $\mathbb C[G]$. [[lem-character-orthogonality-for-finite-abelian-groups]]

[F3] At each finite place, the Artin factor is the inverse of $1-\chi(\operatorname{Frob}_v)(Nv)^{-s}$ when the character is trivial on inertia, and is one otherwise. [[def-artin-l-series-for-a-linear-character]]

[F4] In ZF, for a finite abelian extension of a totally real number field, every complete Artin $L$-function admits an analytic continuation from its Euler-product half-plane that is holomorphic near zero. Finite $S$-depletion and $T$-smoothing preserve that property. [[lem-totally-real-abelian-artin-l-values-at-zero-in-zf]]

## Proof

1.1 The group $G$ is abelian, so changing the prime above $v$ conjugates decomposition and inertia data trivially; the displayed inertia convention and Frobenius value are independent of that choice. By [F4], for every character the Artin $L$-function has a continuation from the original Euler-product germ to zero, and its finite smoothed product is holomorphic there. Hence every displayed value $L_{S,T}(\chi,0)$ is defined. [F3, F4, given, algebra]

2.1 Character orthogonality [F2] gives the unique element with the displayed interpolation. Explicitly, its coefficient at $g\in G$ is $|G|^{-1}\sum_{\chi\in\widehat G}\chi(g^{-1})L_{S,T}(\chi^{-1},0)$. Inversion $g\mapsto g^{-1}$ extends linearly to the stated involution of $\mathbb C[G]$ by the group-ring multiplication [F1]. [F1, F2, step 1.1, algebra] ∎
