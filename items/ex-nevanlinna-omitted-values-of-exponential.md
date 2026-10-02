---
id: ex-nevanlinna-omitted-values-of-exponential
kind: example
title: "Exponential omits two sphere values"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-countable-choice
  - thm-nevanlinna-first-main-theorem
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-surjects-onto-the-punctured-plane
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §5"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§5, printed p. 9: plane omitted-value context for the exponential"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§5, printed pp. 38–40: elementary value-distribution context; omitted values have zero counting function"
---

## Example

Assume Countable Choice. The entire function $f(z)=e^z$ omits the value $0$
and, viewed as a meromorphic map into the Riemann sphere, also omits
$\infty$. Every nonzero finite value $a$ is attained exactly at the simple
points $b+2\pi ik$, $k\in\mathbb Z$, where $b$ is any fixed logarithm of $a$.
Thus $0$ and $\infty$ are exactly the two sphere values omitted by $f$.

## Facts & Assumptions

**Given:** The entire function $f(z)=e^z$; Countable Choice is assumed as in the statement.

[F1] For every sphere target $a$, $m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a)$, with $C(f,\infty)=0$ and $C(f,a)$ as in the exact centre-constant form of the First Main Theorem ([[thm-nevanlinna-first-main-theorem]]).

[F2] The complex exponential is entire and $(e^z)'=e^z$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and $|e^z|=e^{\operatorname{Re}z}>0$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F3] $\ker(\exp)=2\pi i\mathbb Z$ and $e^z=e^w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F4] The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

## Verification

**Proof technique:** identify the image of the exponential directly and translate the two omitted targets and the attained targets into the counting and proximity terms of the First Main Theorem.

1.1 By [F2] the function $f$ is entire, so as a meromorphic sphere map it has no poles: $f(z)\ne\infty$ for every $z$, i.e. $f$ omits $\infty$; and $|f(z)|=e^{\operatorname{Re}z}>0$, so $f$ omits $0$. [F2, given]

1.2 Let $a\in\mathbb C\setminus\{0\}$ and let $b$ be a logarithm of $a$, so $e^b=a$ by [F4]. For $z\in\mathbb C$, by [F3], $e^z=a$ holds if and only if $e^{z-b}=1$, if and only if $z-b\in2\pi i\mathbb Z$, if and only if $z=b+2\pi ik$ for some $k\in\mathbb Z$. Hence the preimage of every nonzero finite value is exactly this arithmetic progression in $b$. [F3, F4, algebra]

2.1 At a point $z=b+2\pi ik$ the derivative is $f'(z)=e^z=a\ne0$ by [F2] and step 1.2; therefore $f-a$ has a simple zero there, that is, the value $a$ is attained only with multiplicity one. [F2, step 1.2, algebra]

3.1 Combining steps 1.1, 1.2 and 2.1: the two sphere values $0$ and $\infty$ are omitted, and no other sphere value is omitted. In the notation of [F1], for $a=0,\infty$ the counting function $N(r,a;f)$ vanishes identically and the whole characteristic sits in the proximity term, $m(r,a;f)=T(r,f)+C(f,a)$; the corresponding deficiency-one computation is carried out in the companion example on this page devoted to deficiencies of elementary functions. [F1, step 1.1, step 1.2, step 2.1]

4.1 The argument is choice-free: the only choices made are the fixed logarithm $b$ of $a$ and the integer enumeration of the progression, both of which are data of the example. Countable Choice is carried only because the surrounding Nevanlinna quantities and their exceptional-set interface are stated under it. [F1, given] ∎
