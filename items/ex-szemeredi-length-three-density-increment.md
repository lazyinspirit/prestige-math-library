---
id: ex-szemeredi-length-three-density-increment
kind: example
title: "A finite length-three density-increment witness"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-density-k-term-arithmetic-progression
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§2, the Fourier density increment for three-term progressions and Theorem 2.6"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Theorem 10.8 and its Roth density-increment proof"
---

## Example

Let $A=\{1,2,4\}\subseteq[4]$. It has density $3/4$ and contains no proper three-term arithmetic progression. Its unnormalised Fourier coefficient $\widetilde{1_A}(2):=\sum_{x=1}^{4}1_A(x)e^{-2\pi i(2)x/4}$ has magnitude $1$. The two-term progression $P=\{2,4\}$ satisfies $|A\cap P|/|P|=1$, a density increase of $1/4$ over the initial density. This is a finite illustration of the first length-three density-increment mechanism; it makes no asymptotic size claim.

## Example references

[[def-finite-density-k-term-arithmetic-progression]]

[Gowers, *A new proof of Szemerédi’s theorem*, §2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** $A=\{1,2,4\}\subseteq[4]$ and the Fourier convention in the Example.

[F1] An interval three-term progression is $(a,a+d,a+2d)$ with integer $d\ge1$ and all terms in the interval ([[def-finite-density-k-term-arithmetic-progression]]).

## Verification

1.1 If $(a,a+d,a+2d)$ is contained in $[4]$ with $d\ge1$, then $a+2d\le4$ leaves only $d=1$ and $a=1$ or $a=2$. Both progressions contain $3\notin A$, so $A$ is three-term-progression-free. [given, F1, algebra]

1.2 The density is $|A|/4=3/4$. For $r=2$, the coefficient is $e^{-\pi i}+e^{-2\pi i}+e^{-4\pi i}=(-1)+1+1=1$, so its magnitude is $1$. [given, algebra]

2.1 The set $P=\{2,4\}$ is a two-term progression of positive difference $2$, and $A\cap P=P$, so $|A\cap P|/|P|=1=3/4+1/4$. Thus this finite instance has a strict density increase while containing no three-term progression at the initial stage. [given, F1, step 1.1, step 1.2, algebra] ∎

## Remarks

[[thm-szemeredi-finite-density-arithmetic-progressions]] supplies the asymptotic context for this explicit finite illustration.
