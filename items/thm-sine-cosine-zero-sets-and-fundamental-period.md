---
id: thm-sine-cosine-zero-sets-and-fundamental-period
kind: theorem
title: "The zero sets of sine and cosine and the least positive common period 2 pi"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-pi-is-the-first-positive-sine-zero, thm-quarter-turn-values-and-shift-formulas, lem-integer-part, thm-induction-principle, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Statement

For every real $x$,
$$\sin x=0\Longleftrightarrow x=m\pi\text{ for some }m\in\mathbb Z,\qquad \cos x=0\Longleftrightarrow x=(m+1/2)\pi\text{ for some }m\in\mathbb Z.$$
Both sine and cosine have period $2\pi$, and no smaller positive number is a common period.

## Facts & Assumptions

**Given:** A real $x$.

[L1] $\pi$ is the first positive sine zero, and sine is positive on $(0,\pi)$ ([[cor-pi-is-the-first-positive-sine-zero]]).

[L2] Shifts by $\pi$ negate sine and cosine, while shifts by $\pi/2$ exchange them up to sign ([[thm-quarter-turn-values-and-shift-formulas]]).

[L3] Every real has an integer part; every integer is a natural number or the negative of a natural number; natural induction and the integer-power laws are valid ([[lem-integer-part]], [[def-integer-power]], [[thm-induction-principle]], [[lem-power-laws]]).



## Proof

**Proof technique:** direct.

1.1 Natural induction applied to the $\pi$ shift gives $\sin(x+n\pi)=(-1)^n\sin x$ and $\cos(x+n\pi)=(-1)^n\cos x$ for every natural $n$. Applying these identities at $x-n\pi$ gives the matching backward shifts; since every integer is $n$ or $-n$ and $(-1)^{-n}=(-1)^n$, the displayed identities hold for every integer $m$. [L2, L3, algebra]

2.1 Choose an integer $m$ with $m\pi\le x<(m+1)\pi$ and put $r=x-m\pi\in[0,\pi)$. By [L1] and step 1.1, $\sin x=0$ exactly when $r=0$, hence exactly when $x=m\pi$. [L1, step 1.1, L3]

3.1 The quarter-turn shift converts the sine zero set into $\cos x=0$ exactly when $x=(m+1/2)\pi$. [step 2.1, L2]

4.1 Step 1.1 with $m=2$ gives period $2\pi$. A positive common period $T$ has $\sin T=0$, hence $T=m\pi$ by step 2.1; $m=1$ fails for cosine because $\cos\pi=-1$, so $m\ge2$. [step 2.1, step 3.1, L1, L2]

5.1 Therefore $2\pi$ is the least positive common period. [step 4.1] ∎
