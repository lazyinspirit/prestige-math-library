---
id: ex-five-value-bound-is-sharp
kind: example
title: "Four shared values do not force equality"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-nevanlinna-five-value-theorem
  - def-nevanlinna-truncated-and-ramification-counts
  - def-countable-choice
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-surjects-onto-the-punctured-plane
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5-6.1, printed pp. 35-43: the five-value and four-value theorems and the sharpness discussion"
---

## Example

Assume Countable Choice. The distinct nonconstant entire functions
$F(z)=e^z$ and $G(z)=e^{-z}$ share exactly the four distinct sphere values
$0,\infty,1,-1$ ignoring multiplicity: both omit $0$ and $\infty$, and their
preimage sets of $1$ and of $-1$ agree,
$$\{z:e^z=1\}=\{z:e^{-z}=1\}=2\pi i\mathbb Z,\qquad \{z:e^z=-1\}=\{z:e^{-z}=-1\}=i\pi(2\mathbb Z+1).$$
No other sphere value is shared. Since $F\ne G$, the five distinct shared
values required by the five-value uniqueness theorem
[[thm-nevanlinna-five-value-theorem]] cannot be reduced to four.

## Facts & Assumptions

**Given:** The functions $F(z)=e^z$ and $G(z)=e^{-z}$; Countable Choice is assumed as in the statement, and the computation below is choice-free.

[F1] Five-value theorem: if two nonconstant meromorphic functions on $\mathbb C$ share five distinct sphere values ignoring multiplicity, that is, the preimage sets of each value agree, then they are identically equal ([[thm-nevanlinna-five-value-theorem]]).

[F2] Fibres of the exponential: $\ker(\exp)=2\pi i\mathbb Z$, and $e^z=e^w$ exactly when $z-w\in2\pi i\mathbb Z$; moreover $e^{i\pi}=-1$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F3] The complex exponential is entire and $|e^z|=e^{\operatorname{Re}z}>0$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F4] The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[F5] Sharing ignoring multiplicity concerns the sets of points only: $\bar n$ counts each preimage once and multiplicities are discarded ([[def-nevanlinna-truncated-and-ramification-counts]]), exactly the convention in the statement of [F1].

## Verification

**Proof technique:** compute the four preimage sets that the two exponentials have in common, verify that no further value is shared, and observe that the functions are distinct.

1.1 (Omitted values) By [F3] both $F$ and $G$ are entire and never vanish; hence the preimage set of $0$ is empty for both, and the preimage set of $\infty$, that is, the pole set, is empty for both as well. Thus $0$ and $\infty$ are shared values in the sense of [F5] with empty preimage sets. [F3, F5]

1.2 (The value $1$) By [F2], $e^z=1$ if and only if $z\in2\pi i\mathbb Z$; and $e^{-z}=1$ if and only if $-z\in2\pi i\mathbb Z$, which is the same set. Hence the two $1$-point sets agree and equal $2\pi i\mathbb Z$. [F2, algebra]

1.3 (The value $-1$) By [F2] and $e^{i\pi}=-1$, $e^z=-1$ if and only if $z-i\pi\in2\pi i\mathbb Z$, that is, $z\in i\pi(2\mathbb Z+1)$; and $e^{-z}=-1$ if and only if $-z\in i\pi(2\mathbb Z+1)$, that is, $z\in i\pi(2\mathbb Z+1)$ as well, because $-i\pi(2k+1)=i\pi(2(-k-1)+1)$. Hence the two $(-1)$-point sets agree. [F2, algebra]

1.4 (Distinctness) If $F=G$ then $e=e^{-1}$, hence $e^2=1=e^0$, so by [F2] the number $2$ would lie in $2\pi i\mathbb Z$; but $2$ is real and nonzero while every element of $2\pi i\mathbb Z$ is purely imaginary. Thus $F\ne G$. [F2, algebra]

1.5 (No other shared value) Let $a\in\widehat{\mathbb C}\setminus\{0,\infty,1,-1\}$ be a shared value in the sense of [F5]. Since $a\ne0,\infty$ we may fix $b$ with $e^b=a$ by [F4]; the preimage sets of $a$ under $F$ and $G$ are $b+2\pi i\mathbb Z$ and $-b+2\pi i\mathbb Z$ by [F2], and agreement forces $b\in-b+2\pi i\mathbb Z$, hence $2b\in2\pi i\mathbb Z$; then $a^2=e^{2b}=1$ by [F2], so $a=\pm1$, contrary to the choice of $a$. Hence the shared sphere values of $F$ and $G$ are exactly $0,\infty,1,-1$, four in number. [F2, F4, algebra]

2.1 (Sharpness) Steps 1.1-1.5 exhibit two distinct nonconstant meromorphic functions sharing exactly four distinct sphere values ignoring multiplicity, while [F1] guarantees equality as soon as five distinct values are shared. Therefore the number five in the five-value theorem is optimal. [F1, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
