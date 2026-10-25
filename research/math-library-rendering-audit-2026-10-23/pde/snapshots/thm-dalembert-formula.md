---
id: thm-dalembert-formula
kind: theorem
title: "d'Alembert's formula and uniqueness in one dimension"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
proof_strategy: direct
deps: [lem-general-solution-of-the-one-dimensional-wave-equation, lem-derivative-of-an-integral-with-moving-endpoints, cor-primitives-of-a-continuous-function, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.3, printed pp. 47–48, equations (2.3.8)–(2.3.14) (d'Alembert's formula and its Cauchy problem)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, printed pp. 4–5, d'Alembert's formula (4.0.14)–(4.0.15)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: the travelling-wave solution and its two initial conditions"
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (arXiv:1901.03022)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§6.2, printed p. 61, derivation of the d'Alembert formula by characteristic coordinates"
---


## Statement

Let $c>0$, $u_0\in C^2(\mathbb R)$ and $u_1\in C^1(\mathbb R)$. Then
$$u(x,t):=\frac12\bigl(u_0(x-ct)+u_0(x+ct)\bigr)+\frac{1}{2c}\int_{x-ct}^{x+ct}u_1(y)\,dy$$
is a $C^2$ function on $\mathbb R\times[0,\infty)$ and is the unique classical solution of the homogeneous Cauchy problem
$$u_{tt}=c^2u_{xx},\qquad u(\cdot,0)=u_0,\qquad u_t(\cdot,0)=u_1 .$$
Its value depends on $u_0$ only through the two endpoints $x\mp ct$ and on $u_1$ only through its integral over $[x-ct,x+ct]$.

## Facts & Assumptions

**Given:** a speed $c>0$, data $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$, and the displayed function $u$.

[F1] A continuous function on an interval has the primitive $P(z)=\int_0^zu_1(y)\,dy$ when the interval is $\mathbb R$; since $u_1\in C^1$, this primitive is $C^2$, and $\int_a^bu_1=P(b)-P(a)$ ([[cor-primitives-of-a-continuous-function]]).

[F2] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F3] Sums, constant multiples, products of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

[F4] Every $C^2$ solution of $u_{tt}=c^2u_{xx}$ on a nonempty open rectangle has the form $F(x-ct)+G(x+ct)$ with $F,G$ of class $C^2$ on the projections, and conversely; the pair is unique up to $F\mapsto F+k$, $G\mapsto G-k$ ([[lem-general-solution-of-the-one-dimensional-wave-equation]]).

## Proof

1.1 Regularity and the equation. The first summand is $C^2$ because $u_0\in C^2$, and the integral term is $(P(x+ct)-P(x-ct))/(2c)$ with $P\in C^2$ by [F1], so it is $C^2$ even across $t=0$ by [F2]: $\partial_tu(x,t)=\frac12(-cu_0'(x-ct)+cu_0'(x+ct))+\frac12(u_1(x+ct)+u_1(x-ct))$ and $\partial_xu(x,t)=\frac12(u_0'(x-ct)+u_0'(x+ct))+\frac{1}{2c}(u_1(x+ct)-u_1(x-ct))$. Differentiating once more by [F2] and [F3], $\partial_t^2u=\frac{c^2}{2}(u_0''(x-ct)+u_0''(x+ct))+\frac c2(u_1'(x+ct)-u_1'(x-ct))$ and $c^2\partial_x^2u=\frac{c^2}{2}(u_0''(x-ct)+u_0''(x+ct))+\frac c2(u_1'(x+ct)-u_1'(x-ct))$, so $u_{tt}=c^2u_{xx}$ on $\mathbb R\times[0,\infty)$. [F1, F2, F3, algebra]

1.2 Both data are attained. At $t=0$ the displacement terms give $u(x,0)=\frac12(u_0(x)+u_0(x))+0=u_0(x)$, and the velocity formula of the previous step gives $\partial_tu(x,0)=\frac12(-cu_0'(x)+cu_0'(x))+\frac12(u_1(x)+u_1(x))=u_1(x)$. [F1, algebra]

1.3 Uniqueness. Let $v$ be any classical solution with the same pointwise displacement and velocity limits at zero and put $w=u-v$. Apply [F4] to the open rectangle $\mathbb R\times(0,T)$, where $T>0$ is arbitrary. Both characteristic projections are all of $\mathbb R$, so $w(x,t)=F(x-ct)+G(x+ct)$ with $F,G\in C^2(\mathbb R)$. At each fixed $x$, letting $t\downarrow0$ gives $F(x)+G(x)=0$ and $-cF'(x)+cG'(x)=0$. Differentiating the first identity and combining with the second yields $F'=G'=0$ everywhere; their sum is zero, so $w=0$ throughout this rectangle. As $T$ is arbitrary, uniqueness holds on the whole time slab. [F2, F3, F4, algebra]


2.1 The display of $u$ therefore defines the unique classical solution, and its value at $(x,t)$ involves $u_0$ only through the endpoint values $u_0(x\mp ct)$ and $u_1$ only through the integral over $[x-ct,x+ct]$. [given] ∎ 