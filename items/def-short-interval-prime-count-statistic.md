---
id: def-short-interval-prime-count-statistic
kind: definition
title: "Randomized prime count in a short interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-prime
  - def-prime-counting-function
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used through the complete-Lebesgue-measure theorem to obtain the completed measure space and interval-volume normalization; no stronger choice axiom is used."
sources:
  scraped: []
  references:
    - title: "Ofir Gorodetsky, High and odd moments in the Erdős–Kac theorem, arXiv:2501.00351v1, §1.2"
      url: "https://arxiv.org/pdf/2501.00351v1"
      locator: "§1.2, PDF pp. 2–3, uniform averaging of the start $t$ over $[0,x]$ and the centered prime count."
    - title: "NIST Digital Library of Mathematical Functions, §6.2.8"
      url: "https://dlmf.nist.gov/6.2"
      locator: "Equation (6.2.8), real logarithmic integral defined by a Cauchy principal value."
---

## Definition

Assume the Axiom of Countable Choice. Fix real $x\ge2$ and $h>0$. Let $T_x$ be uniform on $[0,x]$ with probability measure $\lambda(\,·\cap[0,x])/x$, where $\lambda$ is Lebesgue measure. Define
$$C_{x,h}(t):=\#\{p\text{ prime}:t\le p<t+h\}$$
and
$$J_{x,h}(t):=\operatorname{PV}\!\int_t^{t+h}\frac{du}{\log u}.$$
For $t,t+h\ne1$, the integral is ordinary improper integration if the interval does not cross $1$, and is the Cauchy principal value if $t<1<t+h$, obtained by deleting $(1-\varepsilon,1+\varepsilon)$ and taking $\varepsilon\downarrow0$. Set $J_{x,h}(t)=0$ when an endpoint equals $1$. The randomized centered prime-count statistic is the real random variable
$$R_{x,h}:=C_{x,h}(T_x)-J_{x,h}(T_x).$$

## Definition references

[Gorodetsky, *High and odd moments in the Erdős–Kac theorem*, arXiv:2501.00351v1, §1.2](https://arxiv.org/pdf/2501.00351v1)

[NIST Digital Library of Mathematical Functions, §6.2.8](https://dlmf.nist.gov/6.2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, real $x\ge2$, and real $h>0$.

[A1] Under the Axiom of Countable Choice, Lebesgue measurable sets form a sigma-algebra, Lebesgue measure is complete, and every half-open interval has measure its length. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] A prime is a positive integer greater than $1$ with no positive divisors other than $1$ and itself; the prime-counting function counts primes up to its argument. ([[def-prime]], [[def-prime-counting-function]])

[F2] Lebesgue measure on the line is the restriction of Lebesgue outer measure to the Lebesgue measurable sets. ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]])

[F3] For every $y>0$, $\log y=\int_1^ydu/u$; consequently, near $1$, $\log y=(y-1)+O((y-1)^2)$. ([[thm-logarithm-derivative-and-integral]])

## Proof

**Proof technique:** measurability and normalization verification.

1.1 The interval $[0,x)$ is a half-open interval, so [A1] gives $\lambda([0,x))=x$. For every $\varepsilon>0$, the singleton $\{x\}$ is contained in $[x,x+\varepsilon)$, whose measure is $\varepsilon$; monotonicity therefore gives $\lambda(\{x\})=0$. Hence $\lambda([0,x])=x$, and restriction followed by division by $x>0$ is a probability measure. [given, A1, algebra]

1.2 Only finitely many primes satisfy $p<x+h$. For each such prime, the set of $t\in[0,x]$ with $t\le p<t+h$ is $[0,x]\cap(p-h,p]$, a Borel interval. Thus $C_{x,h}$ is a finite sum of Borel indicators and is bounded. [F1, given, algebra]

1.3 By [F3], $1/\log u=1/(u-1)+O(1)$ near $u=1$. The symmetric principal value of $1/(u-1)$ over a neighborhood of $1$ exists by cancellation, and the bounded remainder is integrable. The integral also converges at $0$: for $0<u\le1/2$, [F3] gives $\log u=-\int_u^1dt/t\le-\int_{1/2}^1dt/t=-\log2<0$, so $|1/\log u|\le1/\log2$ and $|H(u)|\le u/\log2$. Thus $H(y)=\operatorname{PV}\int_0^ydu/\log u$ is finite for $y>0$, $y\ne1$, and we set $H(0)=0$ and $H(1)=0$. Away from $1$ each branch is continuous, including at $0$ by the endpoint estimate; hence $H$ is Borel on $[0,\infty)$. The definition gives $J_{x,h}(t)=H(t+h)-H(t)$ except at the two endpoint values where it was assigned $0$. Changing a Borel function at these finitely many points preserves Borel measurability, so $J_{x,h}$ and $R_{x,h}$ are Borel random variables. [F3, given, algebra]

2.1 The definition specifies a finite prime count, a finite principal-value integral except at the explicitly assigned endpoint cases, and a Borel map on a probability space. Hence $R_{x,h}$ is well-defined as a real random variable under the stated choice assumption. [A1, F1, step 1.1, step 1.2, step 1.3, algebra] ∎

## Proof references

[[def-prime]]

[[def-prime-counting-function]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[thm-lebesgue-measure-is-a-complete-measure]]

[[def-countable-choice]]

[[thm-logarithm-derivative-and-integral]]
