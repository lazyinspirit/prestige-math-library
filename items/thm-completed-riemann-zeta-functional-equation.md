---
id: thm-completed-riemann-zeta-functional-equation
kind: theorem
title: "The completed zeta function satisfies $\\Lambda(s)=\\Lambda(1-s)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completed-riemann-zeta-function, thm-jacobi-theta-transformation, thm-theta-mellin-representation-of-completed-zeta, thm-riemann-zeta-meromorphic-continuation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

The completed zeta function extends meromorphically to $\mathbb C$, has simple
poles at $0$ and $1$, and satisfies

$$\Lambda(s)=\Lambda(1-s).$$

More explicitly,

$$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt,$$

and the right-hand side is symmetric under $s\mapsto1-s$.

## Facts & Assumptions

**Given:** The completed function on $\operatorname{Re}s>1$.

[L1] The completed zeta function is $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ ([[def-completed-riemann-zeta-function]]).

[L2] The theta transformation is $\theta(t)=t^{-1/2}\theta(1/t)$ ([[thm-jacobi-theta-transformation]]).

[L3] On $\operatorname{Re}s>1$, $$\Lambda(s)=\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$$ ([[thm-theta-mellin-representation-of-completed-zeta]]).

[L4] The meromorphic continuation theorem yields an entire function $H$ with $$\Lambda(s)=\frac{1}{s(s-1)}+H(s)$$ on $\mathbb C$ ([[thm-riemann-zeta-meromorphic-continuation]]).

[A1] Two meromorphic functions on a connected domain that agree on a nonempty open subset agree everywhere on that domain.

## Proof

**Proof technique:** direct.

1.1 Repeating the split-at-$1$ calculation from the Mellin integral in [L3] and using [L2] on $(0,1)$ gives $$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt$$ for $\operatorname{Re}s>1$. [given, L2, L3, algebra]

2.1 Define $$F(s):=\frac{1}{s(s-1)}+H(s),$$ where $H$ is the entire function from [L4]. By step 1.1, on $\operatorname{Re}s>1$ this equals the explicit right-hand side there. That explicit formula is unchanged when $s$ is replaced by $1-s$, because $1/(s(s-1))=1/((1-s)(-s))$ and the two powers of $t$ are exchanged. Hence $$F(s)=F(1-s)\qquad(\operatorname{Re}s>1).$$ [step 1.1, L4, algebra]

3.1 On $\operatorname{Re}s>1$, [L1] names the completed function as $\Lambda(s)$, and step 1.1 identifies that same function with the explicit split formula. Combined with [L4], this shows that $F(s)=\Lambda(s)$ there. Since both $F$ and $\Lambda$ are meromorphic on $\mathbb C$, [A1] gives $F=\Lambda$ on all of $\mathbb C$. Applying [A1] again to the meromorphic functions $F(s)$ and $F(1-s)$, which agree on $\operatorname{Re}s>1$ by step 2.1, yields $F(s)=F(1-s)$ on $\mathbb C$. Therefore $$\Lambda(s)=F(s)=F(1-s)=\Lambda(1-s)$$ for every $s \in \mathbb C$. The explicit pole term in step 1.1 shows that the poles at $0$ and $1$ are simple. [step 1.1, step 2.1, L1, L4, A1, algebra] ∎
