---
id: thm-the-catalan-generating-function-is-not-rational
kind: theorem
title: "$C(x)$ is not a rational formal power series, so $(C_n)$ satisfies no eventual constant-coefficient linear recurrence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-catalan-generating-function-satisfies-a-quadratic-equation, def-rational-formal-power-series-and-reduced-denominator, thm-linear-recurrence-iff-rational-generating-function, thm-polynomial-degree-of-a-product-over-a-domain, def-catalan-generating-function, def-polynomial-degree-leading-coefficient-and-monic, thm-formal-power-series-ring-and-polynomial-embedding, lem-field-is-a-commutative-ring, thm-rat-field, def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

The Catalan generating function $C\in\mathbb{Q}\llbracket x\rrbracket$
([[def-catalan-generating-function]]) is **not** a rational formal power series
([[def-rational-formal-power-series-and-reduced-denominator]]): there are no
polynomials $P,Q\in\mathbb{Q}[x]$ with $Q(0)\ne0$ and $QC=P$.

Consequently the sequence $(C_n)_{n\ge0}$, read in $\mathbb{Q}$, satisfies no
eventual constant-coefficient linear recurrence
([[thm-linear-recurrence-iff-rational-generating-function]]).

## Facts & Assumptions

**Given:** the Catalan generating function $C$, and $\mathbb{Q}[x]$ the polynomial ring over $\mathbb{Q}$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[F1] $C=1+x\,C^{2}$ in $\mathbb{Q}\llbracket x\rrbracket$ ([[thm-catalan-generating-function-satisfies-a-quadratic-equation]]).

[F2] $\mathbb{Q}\llbracket x\rrbracket$ is a commutative $\mathbb{Q}$-algebra and the coefficient of $C$ at the index $n$ is $C_n$ ([[def-catalan-generating-function]]).

[L1] A formal power series $F\in R\llbracket x\rrbracket$ is rational when there are polynomials $P,Q\in R[x]$ with $Q(0)$ a unit and $QF=P$ ([[def-rational-formal-power-series-and-reduced-denominator]]).

[L2] For a field $K$ and a sequence $a$ in $K$ with $F=\sum_{n\ge0}a_nx^n$: $a$ satisfies an eventual constant-coefficient linear recurrence if and only if $F$ is a rational formal power series ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L3] If $R$ is an integral domain and $f,g\in R[x]$ are nonzero, then $fg\ne0$ and $\deg(fg)=\deg f+\deg g$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L5] The degree of a nonzero polynomial is the largest index carrying a nonzero coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L6] Every field is an integral domain ([[lem-field-is-a-commutative-ring]], clause 2).

[L7] $\mathbb{Q}$ is a field ([[thm-rat-field]]).

[L8] The coefficientwise sum and Cauchy product make $\mathbb{Q}\llbracket x\rrbracket$ a commutative ring, and the inclusion of $\mathbb{Q}[x]$ into it is an injective unital ring homomorphism ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $C$ is rational: by [L1] there are $P,Q\in\mathbb{Q}[x]$ with $Q(0)$ a unit of $\mathbb{Q}$, hence $Q(0)\ne0$ and $Q\ne0$, and $QC=P$ in $\mathbb{Q}\llbracket x\rrbracket$. [F2, L1, L8, assume-contra]

2.1 From [F1] we have $C-xC^{2}=1$, hence $(1-2xC)^{2}=1-4xC+4x^{2}C^{2}=1-4x(C-xC^{2})=1-4x$. Multiplying by $Q^{2}$ and using $QC=P$ gives $(Q-2xP)^{2}=(1-4x)Q^{2}$, an identity between polynomials, which by [L8] may be read inside $\mathbb{Q}[x]$. Put $R:=Q-2xP$. [F1, L8, step 1.1]

3.1 $R\ne0$. Otherwise $(1-4x)Q^{2}=0$; but $\mathbb{Q}$ is an integral domain by [L6] and [L7], and $1-4x$ and $Q$ are nonzero, so [L3] makes the product nonzero. [L3, L6, L7, step 2.1]

4.1 Comparing degrees in $\mathbb{Q}[x]$ gives a contradiction. By [L3] applied twice, $\deg(R^{2})=2\deg R$ and $\deg\bigl((1-4x)Q^{2}\bigr)=\deg(1-4x)+2\deg Q=1+2\deg Q$, the degree of $1-4x$ being $1$ by [L5]. So $2\deg R=1+2\deg Q$ in $\mathbb{N}$, which is impossible: writing $r:=\deg R$ and $q:=\deg Q$, if $r\le q$ then $2r\le 2q<1+2q$, and if $r\ge q+1$ then $2r\ge 2q+2>1+2q$. [L3, L5, step 2.1, step 3.1]

5.1 The assumption of step 1.1 is therefore false and $C$ is not rational; and by [L2] with $K=\mathbb{Q}$ and $a_n=C_n$, a sequence satisfies an eventual constant-coefficient linear recurrence exactly when its generating series is rational, so the sequence $(C_n)$ satisfies no such recurrence. [F2, L2, L7, step 1.1, step 4.1, discharge-contradiction] ∎

## Remarks

- **Why the parity argument is the whole proof.** The equation $R^{2}=(1-4x)Q^{2}$ says that $1-4x$ is a square in the fraction field of $\mathbb{Q}[x]$ up to squares, and the degree of a square is even while the degree of $1-4x$ times a square is odd. Nothing about the specific coefficients is used, and the same argument rules out rationality for any series satisfying a quadratic equation whose discriminant has odd degree.

- **What the second clause does and does not say.** It says no recurrence with constantly many constant coefficients holds from some index onwards. The Catalan numbers do satisfy the convolution recurrence $C_{n+1}=\sum_{i}C_iC_{n-i}$, which is not of that form, and they satisfy the two-term recurrence $(n+2)C_{n+1}=(4n+2)C_n$ whose coefficients depend on $n$; neither is excluded, and the companion page carries the false statement that conflates them.
