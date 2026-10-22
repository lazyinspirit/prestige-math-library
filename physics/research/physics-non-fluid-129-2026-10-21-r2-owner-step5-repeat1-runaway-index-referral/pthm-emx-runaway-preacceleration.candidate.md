---
id: pthm-emx-runaway-preacceleration
kind: physics-theorem
title: "Runaway and bounded-future branches of the Abraham–Lorentz equation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - def-real-exponential-function-and-e
  - def-oriented-integral
  - lem-smooth-bump-between-concentric-euclidean-balls
  - post-emx-abraham-lorentz-model
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-continuous-implies-integrable
  - thm-derivative-of-exponential
  - thm-ftc-first-part
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
dependency_roles:
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-oriented-integral: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  post-emx-abraham-lorentz-model: physical-assumption
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Exact conditional properties of the adopted nonrelativistic prescribed-force ODE for bounded continuous forces: every acceleration solution, the unique solution bounded on a future half-line, and an explicit smooth future force for which that selected branch accelerates before the force begins. The proof concerns the formal effective equation only; it asserts no measured preacceleration, no self-consistent Maxwell–Lorentz trajectory, and no empirical validity outside the stated model regime."
verification:
  precheck: pass
sources:
  references:
    - title: "Fritz Rohrlich, The Dynamics of a Charged Particle, arXiv:0804.4614 (complete 11-page full-text paper)"
      url: "https://arxiv.org/pdf/0804.4614"
      locator: "Sections 1–2, PDF pp. 2–6: the nonrelativistic Abraham–Lorentz equation and discussion of its runaway and pre-acceleration branches. The complete branch classification and bounded-future proof here are local."
    - title: "Jack Vanderlinde, Classical Electromagnetic Theory, Fundamental Theories of Physics, Springer (2004), complete 426-page book PDF"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/220397/mod_page/content/2/Classical%20Electromagnetic%20Theory%20%28Fundamental%20Theories%20of%20Physics%29%20-%20Jack%20Vanderlinde%20%282004%29.pdf"
      locator: "Chapter 12, §12.4, printed pp. 338–339 (PDF pp. 345–346), equations (12–38)–(12–41): the homogeneous exponential runaway and the future-weighted solution selected by a future boundary condition. The item independently proves the exact ODE statement for every bounded continuous force."
---

## Statement

Use the equation and constants of the preceding postulate, with $m,\tau>0$. Let $f:\mathbb R\to\mathbb R^3$ be bounded and continuous, and let a solution mean a continuously differentiable map $a:\mathbb R\to\mathbb R^3$ satisfying $m(a-\tau\dot a)=f$ at every real time. Bounded for a vector map means each of its three real coordinates is bounded; in $\mathbb R^3$ this is equivalent to bounded Euclidean norm. The vector improper Riemann integral below is taken componentwise, with $\int_t^\infty h(s)\,ds:=\lim_{R\to\infty}\int_t^R h(s)\,ds$ when that limit exists. Then the integral converges absolutely, and

$$a_*(t):=\frac{1}{m\tau}\int_t^\infty \exp\!\left(-\frac{s-t}{\tau}\right)f(s)\,ds$$

is a bounded solution. For any fixed $t_0\in\mathbb R$, every solution has the form

$$a(t)=a_*(t)+C\exp\!\left(\frac{t-t_0}{\tau}\right),\qquad C\in\mathbb R^3$$

Here $C$ is a constant acceleration vector with units $\mathrm{m\,s^{-2}}$.

The only solution bounded on a future half-line $[T,\infty)$, for any finite $T$, is $a_*$. A nonzero $C$ gives an exponentially growing acceleration branch, called a runaway branch in this item. Moreover, there is a bounded smooth force that vanishes for $t\le0$, is nonzero for some $t\in(0,1)$, and for which $a_*(t)\ne0$ for every $t<0$. Preacceleration means this nonzero acceleration before the force begins; it is a property of the selected ODE branch, not an observation about a physical particle.

## Statement references

[[post-emx-abraham-lorentz-model]]

[[def-real-exponential-function-and-e]]

[[thm-derivative-of-exponential]]

[[cor-exponential-reciprocal-and-positivity]]

[[cor-mean-value-theorem]]

[[thm-ftc-first-part]]

[[lem-smooth-bump-between-concentric-euclidean-balls]]

## Facts & Assumptions

**Given:** The adopted equation $m(a-\tau\dot a)=f$ with $m,\tau>0$, a bounded continuous force $f:\mathbb R\to\mathbb R^3$, and the SI laboratory time and spatial vector conventions.

[A1] The adopted effective model equation is $m(a(t)-\tau\dot a(t))=f(t)$ for all $t\in\mathbb R$, with $m>0$ and $\tau>0$. ([[post-emx-abraham-lorentz-model]])

[F1] The real exponential is defined by its all-real power series, is smooth with derivative $\exp'=\exp$, and satisfies $\exp(-x)=1/\exp(x)>0$. For $x\ge0$, its series gives $\exp(x)\ge1+x$. ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]])

[F2] Products and scalar multiples differentiate by the product rule; the chain rule applies to $t\mapsto\exp(-t/\tau)$; continuous functions on compact real intervals are Riemann integrable; and the first fundamental theorem gives $J'(x)=h(x)$ for the integral function $J(x)=\int_u^x h(s)\,ds$ of a continuous real function $h$ on a compact interval $[u,v]$ with $u<v$. ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-continuous-implies-integrable]], [[thm-ftc-first-part]])

[F3] On a compact interval, the Riemann integral is linear and monotone; oriented integrals obey $\int_b^a h=-\int_a^b h$. In particular, if $|h|\le Mg$ and $g\ge0$, then $|\int h|\le M\int g$, by applying monotonicity to $-Mg\le h\le Mg$. ([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[def-oriented-integral]])

[F4] If a real function is continuous on $[u,v]$, differentiable on $(u,v)$ and $u<v$, then its increment is its derivative at an interior point times $v-u$. ([[cor-mean-value-theorem]])

[F5] For $0<r<R$ and $n\ge1$ there is a smooth map $\rho:\mathbb R^n\to[0,1]$ that equals $1$ on $\overline B_r(0)$ and has support in $B_R(0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

**Proof technique:** direct; construct the future integral, verify its differential equation, classify the homogeneous solutions, and exhibit a smooth force profile with a strictly positive future integral.

1.1 Put $M:=\max_{0\le j\le2}\sup_{s\in\mathbb R}|f_j(s)|<\infty$. For $R>t$, put $k(s)=\exp(-(s-t)/\tau)$ and $J(x)=\int_t^x k(s)\,ds$ on $[t,R]$. By [F1]–[F2], $J$ and $P(x)=-\tau\exp(-(x-t)/\tau)$ are continuous on $[t,R]$, differentiable in its interior, and $J'=P'=k$. Thus $P-J$ has zero derivative; [F4] gives $P(R)-J(R)=P(t)-J(t)$, where $J(t)=0$. Consequently $\int_t^R\exp(-(s-t)/\tau)\,ds=\tau(1-\exp(-(R-t)/\tau))\le\tau$ for $R>t$. For $x\ge0$, [F1] implies $0<\exp(-x)\le(1+x)^{-1}\to0$ as $x\to\infty$. Hence for $S>t$ and $R>S$, the component tail is bounded by $M\tau\exp(-(S-t)/\tau)$, which tends to zero as $S\to\infty$. Thus each improper integral defining $a_*(t)$ converges absolutely, and $|a_{*,j}(t)|\le M/m$, so $a_*$ is bounded. [given, F1, F2, F3, F4, algebra]

2.1 For $h\ne0$, splitting the oriented integral at $t$ gives $$a_*(t+h)=\exp(h/\tau)\left(a_*(t)-\frac{1}{m\tau}\int_0^h\exp(-v/\tau)f(t+v)\,dv\right).$$ For each component, the average $h^{-1}\int_0^h\exp(-v/\tau)f_j(t+v)\,dv$ tends to $f_j(t)$: its difference from $f_j(t)$ is bounded by $\sup_{|v|\le|h|}|\exp(-v/\tau)f_j(t+v)-f_j(t)|$, which tends to zero by continuity. Taking the difference quotient and using $\lim_{h\to0}(\exp(h/\tau)-1)/h=1/\tau$ from [F1] yields $\dot a_*=a_*/\tau-f/(m\tau)$, so $m(a_*-\tau\dot a_*)=f$. [F1, F2, step 1.1, algebra]

3.1 If $a$ is any other solution, $b:=a-a_*$ satisfies $\dot b=b/\tau$. For each coordinate, the product rule gives $(\exp(-t/\tau)b_j(t))'=0$. By [F4] its values at any two real times agree, so $\exp(-t/\tau)b(t)$ is a constant vector. Therefore $b(t)=C\exp((t-t_0)/\tau)$ after absorbing the fixed factor $\exp(t_0/\tau)$ into $C$. Conversely, differentiating this expression verifies that every such $a_*+b$ solves the same equation. [A1, F1, F2, F4, step 2.1, algebra]

4.1 If $C\ne0$, at least one coordinate $C_j\ne0$; as $t\to\infty$, $|C_j|\exp((t-t_0)/\tau)\to\infty$ by the lower bound $\exp(x)\ge1+x$ for $x\ge0$, while $a_{*,j}$ is bounded by step 1.1. Thus that coordinate of $a$ is unbounded on every future half-line. Step 1.1 shows that $C=0$ gives a bounded solution, proving uniqueness of the bounded-future branch. [F1, step 1.1, step 3.1, algebra]

5.1 Apply [F5] in dimension one with $r=1/4$, $R=1/2$ and compose its bump with $t\mapsto4(t-1/2)$. This gives $g\in C_c^\infty((0,1))$, $g\ge0$, with $g=1$ on $[7/16,9/16]$. Set $u=(1,0,0)$ and $f(t)=g(t)u$. Then $f$ is bounded and smooth, vanishes for $t\le0$, and is nonzero on a future interval. For $t<0$, $$a_*(t)=\frac{\exp(t/\tau)}{m\tau}\left(\int_0^1\exp(-s/\tau)g(s)\,ds\right)u.$$ The scalar integrand is continuous and positive on $[7/16,9/16]$, so by continuity it has a positive lower bound on some nondegenerate subinterval there; [F2]–[F3] make the displayed integral strictly positive. Since $\exp(t/\tau)>0$, $a_*(t)\ne0$ for every $t<0$, before the applied force begins. This is a conditional ODE deduction, not an experimental result. [F1, F2, F3, F5, step 2.1, algebra] ∎
