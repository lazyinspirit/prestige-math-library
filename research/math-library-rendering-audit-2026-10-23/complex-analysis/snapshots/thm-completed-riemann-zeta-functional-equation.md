---
id: thm-completed-riemann-zeta-functional-equation
kind: theorem
title: "The completed zeta function satisfies $\\Lambda(s)=\\Lambda(1-s)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-completed-riemann-zeta-function, thm-jacobi-theta-transformation, thm-theta-mellin-representation-of-completed-zeta, thm-riemann-zeta-meromorphic-continuation]
proof_strategy: direct
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume countable choice.

The completed zeta function extends meromorphically to $\mathbb C$, has simple
poles at $0$ and $1$, and satisfies

$$\Lambda(s)=\Lambda(1-s).$$

More explicitly,

$$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt,$$

and the right-hand side is symmetric under $s\mapsto1-s$.

## Facts & Assumptions

**Given:** Countable choice and the completed function on $\operatorname{Re}s>1$.

[A2] Countable choice is [[def-countable-choice]]; it supplies the hypotheses of [L2] and [L4].

[L1] The completed zeta function is $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ ([[def-completed-riemann-zeta-function]]).

[L2] The theta transformation is $\theta(t)=t^{-1/2}\theta(1/t)$ ([[thm-jacobi-theta-transformation]]).

[L3] On $\operatorname{Re}s>1$, $$\Lambda(s)=\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$$ ([[thm-theta-mellin-representation-of-completed-zeta]]).

[L4] Under countable choice, the meromorphic continuation theorem constructs the entire function $$H(s)=\frac12\int_1^\infty(\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt$$ and gives $\Lambda(s)=1/(s(s-1))+H(s)$ on $\mathbb C$ ([[thm-riemann-zeta-meromorphic-continuation]], Proof 2.1).

[A1] Two meromorphic functions on a connected domain that agree on a nonempty open subset agree everywhere on that domain.

## Proof

**Proof technique:** direct.

1.1 Under [A2], repeating the split-at-$1$ calculation from the Mellin integral in [L3] and using [L2] on $(0,1)$ gives $$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt$$ for $\operatorname{Re}s>1$. [given, A2, L2, L3, algebra]

1.2 Define $F(s):=1/(s(s-1))+H(s)$ on $\mathbb C$, using the globally convergent integral for $H$ in [L4]. For every $s\in\mathbb C$, its two powers of $t$ exchange under $s\mapsto1-s$, and $1/(s(s-1))=1/((1-s)(-s))$. Therefore $F(s)=F(1-s)$ as meromorphic functions on $\mathbb C$. This conclusion uses the global integral identity, not merely its initial validity on $\operatorname{Re}s>1$. [L4, algebra]

2.1 On $\operatorname{Re}s>1$, [L1] names the completed function as $\Lambda(s)$ and step 1.1 identifies it with $F$. By [L4] this is its meromorphic continuation, so [A1] identifies $F$ with $\Lambda$ on all of $\mathbb C$. Step 1.2 now gives $\Lambda(s)=F(s)=F(1-s)=\Lambda(1-s)$. Since $H$ is entire, the nonzero simple principal parts of $1/(s(s-1))$ give simple poles at $0$ and $1$. [step 1.1, step 1.2, L1, L4, A1, algebra] ∎
