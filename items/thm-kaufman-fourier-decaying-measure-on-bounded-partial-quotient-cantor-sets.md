---
id: thm-kaufman-fourier-decaying-measure-on-bounded-partial-quotient-cantor-sets
kind: theorem
title: "Kaufman Fourier-decaying Frostman measure on bounded-partial-quotient Cantor sets"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-hausdorff-dimension
  - def-convergents-of-regular-continued-fraction
  - def-countable-choice
  - lem-finite-alphabet-cf-cylinder-pressure-and-separation
  - lem-reversal-invariant-cf-block-frostman-measure
  - lem-mobius-phase-pair-integral-and-cf-l2-bound
  - lem-frostman-transfer-from-continuous-l2
proof_strategy: direct
sources:
  references:
    - title: "Queffélec–Ramaré 2003"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "Theorem 1.4 and complete construction in §§2–6"
    - title: "Chow–Technau 2024"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "Theorem 1.5 and complete proof route in §§1–4"
---

## Statement

Queffélec and Ramaré's Kaufman-measure theorem states the following.

Assume Countable Choice. Let $A\subset\mathbb N$ be a finite nonempty alphabet of positive integer digits and set
$$F(A):=\{[0;a_1,a_2,\ldots]:a_j\in A\text{ for all }j\}.$$
If $\dim_HF(A)>1/2$, then for every $1/2<\delta<\dim_HF(A)$ there are a Borel probability measure $\mu$ supported on $F(A)$ and constants $C,\sigma>0$ such that $\mu(I)\le C|I|^\delta$ for every interval $I$ of length $|I|\le1$, and $|\widehat\mu(\xi)|\le C|\xi|^{-\sigma}$ for all $|\xi|\ge1$.

Here $\dim_H$ denotes Hausdorff dimension and $\widehat\mu(\xi)=\int e^{-2\pi i\xi x}\,d\mu(x)$.

## Statement references

[Queffélec–Ramaré 2003](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — Theorem 1.4 and complete construction in §§2–6.

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 1.5 and complete proof route in §§1–4.



## Facts & Assumptions

**Given:** Countable Choice, a finite alphabet $A$, and $d=\delta$ with $1/2<d<\dim_HF(A)$.

[F1] Subcritical dimension gives arbitrarily large finite-word pressure $\sum_{A^m}q(w)^{-2d}\ge8$. [[lem-finite-alphabet-cf-cylinder-pressure-and-separation]]

[F2] Under Countable Choice, this pressure gives a reversal-invariant block measure $\mu$ with the Frostman-$d$ bound, independent identical tails and uniform denominators $Q^{1-2\epsilon}\le q_J\le Q^{1+2\epsilon}$ at lengths $J=kJ_0$ with integer $k\ge1$, $Q=e^{J\sigma_0}$. [[lem-reversal-invariant-cf-block-frostman-measure]]

[F3] Its prefix exponential sum $F$ satisfies $|F|\le1$, $|F'|\le C uQ^{-2+4\epsilon}$ and $m_2=\int_0^1|F|^2\le C[Q^{1+20\epsilon}/\sqrt u+Q^{-2d+20\epsilon}]$. [[lem-mobius-phase-pair-integral-and-cf-l2-bound]]

[F4] For a Frostman-$d$ probability, $|F|\le1$, $|F'|\le M$, and $0<r<1$ with $r/M<1$, one has $\int|F|\,d\mu\le2r+C(r/M)^d(1+m_2M/r^3)$. [[lem-frostman-transfer-from-continuous-l2]]

[A1] Countable Choice is assumed; the finite-alphabet premeasure extension in F2 uses this axiom, without a general countable-product or Dependent Choice theorem. [[def-countable-choice]]

## Proof

**Proof technique:** finite-prefix oscillatory bounds and Frostman transfer with fixed exponent reserves.

1.1 Covering $[0,1]$ by $M$ intervals of length $1/M$ makes its $s$-dimensional covering sum $M^{1-s}$ tend to zero for each $s>1$. Thus $F(A)\subset[0,1]$ has dimension at most1 and hence $1/2<d<1$. Put $\eta=d(1-2d)/[(4-d)(1+2d)]<0$ and choose $0<\epsilon<1/100$ so $6\epsilon<-\eta/2$. F1 and F2 construct a single probability $\mu$, block length $J_0$ and growth rate $\sigma_0>0$ for this choice. Its support and Frostman bound already have exactly the desired exponent $d$, without an exponent loss. [given, F1, F2, A1, construct, algebra]

2.1 For sufficiently large real $u\ge1$, choose an integer $k\ge1$ so $Q=e^{kJ_0\sigma_0}$ lies within a fixed factor of $u^{1/(2+4d)}$, for example by taking the floor of $\log u/[(2+4d)J_0\sigma_0]$. The prefix-tail identity in F2 gives $|\widehat\mu(u)|=|\int F(t)\,d\mu(t)|\le\int|F|\,d\mu$; changing the exponential sign only conjugates the expression. F3 gives $m_2\le C Q^{-2d+20\epsilon}$ because $Q/\sqrt u$ is comparable to $Q^{-2d}$. Take $M=C uQ^{-2+4\epsilon}$ with the derivative-bound constant enlarged if needed. [F2, F3, step 1.1, construct, algebra]

3.1 Apply F4 with a parameter $0<r<1$. Substitution of step 2.1 and $Q\asymp u^{1/(2+4d)}$ gives $|\widehat\mu(u)|\le C\left[r+r^d u^{-2d^2/(1+2d)}+r^{d-3}u^{d(1-2d)/(1+2d)+6\epsilon}\right].$ Indeed the isolated $M^{-d}$ term is at most $C u^{-d+2d/(2+4d)}$ after dropping a negative $\epsilon$ contribution. The other term is $r^{d-3}M^{1-d}m_2\le C r^{d-3}u^{1-d}Q^{-2+(24-4d)\epsilon}$; its main exponent is $d(1-2d)/(1+2d)$, and $(24-4d)/(2+4d)\le6$ for $d>1/2$. Every multiplicative comparison constant is fixed independently of $u$. [F4, step 2.1, algebra]

4.1 Set $r=u^\eta$. Then $r\to0$, $M\to\infty$, and $r/M<1$ for all sufficiently large $u$, so F4's hypotheses really hold. The first term in step 3.1 is $u^\eta$; the third has exponent $(d-3)\eta+d(1-2d)/(1+2d)+6\epsilon=\eta+6\epsilon<\eta/2$. The middle has exponent $d\eta-2d^2/(1+2d)=-7d^2/[(4-d)(1+2d)]<\eta$. Thus $|\widehat\mu(u)|\le C u^{\eta/2}$ for all sufficiently large $u$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Put $\sigma=-\eta/2>0$. Negative frequencies have the same modulus by conjugation, since $\mu$ is a real positive measure. On the remaining compact range $1\le|u|\le u_0$ use $|\widehat\mu(u)|\le1$ and enlarge $C$ by $u_0^\sigma$. Together with the support and Frostman conclusions of step 1.1 this proves the complete stated theorem, for every finite alphabet and every stated subcritical $\delta$, with no imported measure-decay theorem. [step 1.1, step 4.1, algebra] ∎

