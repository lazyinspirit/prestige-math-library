---
id: thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring
kind: theorem
title: The diagonal Koszul complex is a finite free resolution of R
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, lem-polynomial-diagonal-differences-form-a-regular-sequence, thm-regular-sequences-give-acyclic-koszul-complexes, thm-basic-koszul-homology, lem-exterior-algebra-basis-monomials, thm-free-modules-are-projective-with-choice-boundary, def-enveloping-algebra-and-bimodule-module-dictionary, def-projective-resolution-in-an-abelian-category, thm-modules-over-a-ring-form-an-abelian-category]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, Exercise 9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
    - title: "The Stacks Project, Section 15.31: Koszul regular sequences, Lemma 15.31.2"
      url: https://stacks.math.columbia.edu/tag/062D
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $k$ be a field, $R=k[x_1,\ldots,x_n]$ for $n\geq0$, and
$S=R^e=R\otimes_kR^{\mathrm{op}}$. Regard $R$ as the regular $S$-module
through the enveloping-algebra dictionary, and let
$u_i=x_i\otimes1-1\otimes x_i$. The augmented Koszul complex

$$K(u_1,\ldots,u_n;S)\xrightarrow{\mu}R$$

is a finite free, hence projective, resolution of $R$ over $S$. Its degree-$j$
term is free of rank $\binom nj$ for $0\leq j\leq n$, and is zero for $j>n$.
When $n=0$, this is the identity resolution $k\xrightarrow{\mathrm{id}}k$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial algebra $R=k[x_1,\ldots,x_n]$, $S=R^e$, the diagonal differences $u_i$, the Koszul complex $K(u_1,\ldots,u_n;S)$, and its multiplication augmentation $\mu$.

[F1] The regular bimodule $R$ is the left $R^e$-module with action $(a\otimes b^{\mathrm{op}})r=arb$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F2] The ordered sequence $(u_1,\ldots,u_n)$ is regular on $S$, and multiplication induces $S/(u_1,\ldots,u_n)S\cong R$ ([[lem-polynomial-diagonal-differences-form-a-regular-sequence]]).

[F3] Every finite $M$-regular sequence has zero positive-degree Koszul homology ([[thm-regular-sequences-give-acyclic-koszul-complexes]]).

[F4] The zeroth Koszul homology is the quotient by the sequence ([[thm-basic-koszul-homology]]).

[F5] The diagonal Koszul degree-$j$ term is free on its increasing wedge symbols and there are no terms above degree $n$ ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F6] The increasing wedges indexed by $j$-element subsets form a basis of the $j$th exterior power, and that power is zero for $j>n$ ([[lem-exterior-algebra-basis-monomials]]).

[F7] A free module with a finite basis is projective using only finite choice; the empty basis gives the zero projective module ([[thm-free-modules-are-projective-with-choice-boundary]]).

[F8] The category of left $S$-modules is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F9] A projective resolution in an abelian category is an exact augmented complex whose terms are projective ([[def-projective-resolution-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $R$ has the regular left $S$-module structure $(a\otimes b^{\mathrm{op}})r=arb$. The multiplication map $\mu:S\to R$ is $S$-linear: on $s=a\otimes b^{\mathrm{op}}$ and $t=c\otimes d^{\mathrm{op}}$, $\mu(st)=acdb=a(c d)b=s\cdot\mu(t)$ by associativity. Pure tensors span $S$, so this equality extends to arbitrary $s,t$. By [F2], the induced quotient map $S/(u_1,\ldots,u_n)S\to R$ is an isomorphism and is exactly $\mu$. The Koszul differential and $\mu$ are module-linear maps, so both send zero to zero. [F1, F2, given, algebra]

1.2 By [F5] and [F6], for $0\leq j\leq n$ the increasing wedges indexed by $j$-element subsets form a finite $S$-basis of $K_j$, with $\binom nj$ basis elements, and $K_j=0$ for $j>n$. If $n=0$, the only basis symbol is the empty wedge, $S=R=k$, and the augmentation is the identity. [F5, F6, given, algebra]

2.1 Since $S$ is a commutative ring and $(u_1,\ldots,u_n)$ is $S$-regular by [F2], apply [F3] with coefficient module $S$ to get $H_j(K(u_1,\ldots,u_n;S))=0$ for every $j>0$. By [F4], $H_0(K(u_1,\ldots,u_n;S))=S/(u_1,\ldots,u_n)S$, which [F2] identifies with $R$ by the augmentation from 1.1. Thus the augmented complex is exact in positive degrees and at $K_0$ and $R$. [F2, F3, F4, step 1.1, given]

2.2 The basis in each nonzero degree is finite and explicitly enumerated by the lexicographic order on increasing subsets of $\{1,\ldots,n\}$. By [F7] each $K_j$ is projective as an $S$-module; this uses only finite choice, not AC. The zero terms above degree $n$ are projective as well. [F7, step 1.2, given, algebra]

3.1 The augmentation is an exact augmented chain complex by 2.1, all its terms are projective by 2.2, and $S\text{-}\mathbf{Mod}$ is abelian by [F8]. Therefore [F9] makes it a projective resolution. Step 1.2 gives the claimed finite free ranks and length, including the $n=0$ identity case. No form of AC is used. [step 2.1, step 1.2, step 2.2, F8, F9] ∎
