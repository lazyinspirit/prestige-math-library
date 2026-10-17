---
id: lem-local-lipschitz-derivative-quadratic-remainder
kind: lemma
title: A Lipschitz Fréchet derivative gives a quadratic linearization remainder
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves
  - lem-linearity-of-the-bochner-integral
  - lem-bochner-integral-norm-inequality
  - def-bochner-integrable-function
  - def-banach-valued-simple-function-and-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-frechet-derivative-between-banach-spaces
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Chapter II, §4.a"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Taylor formula (4.14), printed p. 104."
    - title: "David Teschl, Partial Differential Equations: From Classical to Modern, author manuscript"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11, §11.1, Banach-valued fundamental theorem of calculus, printed pp. 247–250."
---

## Statement

Assume Countable Choice. Let $\mathbb F\in\{\mathbb R,\mathbb C\}$ and let
$X,Y$ be Banach spaces over the same field $\mathbb F$. Let $U\subseteq X$ be
open and let $F:U\to Y$ be continuously Fréchet differentiable over
$\mathbb F$. Thus $F'(u)$ is bounded $\mathbb F$-linear for each $u\in U$ and
$$\lim_{\substack{h\to0,\ h\ne0\\u+h\in U}} \frac{\|F(u+h)-F(u)-F'(u)h\|}{\|h\|}=0.$$
In particular, in the complex case $F'(u)$ is complex-linear and the limit
ranges over complex increments. Let $K\subseteq U$ be convex and let
$x,z\in K$. If
$\|F'(u)-F'(v)\|\le L\|u-v\|$ for all $u,v\in K$, where $L\ge0$, then
$$\|F(x)-F(z)-F'(z)(x-z)\|\le\frac L2\|x-z\|^2.$$

## Facts & Assumptions

**Given:** Countable Choice, the Banach spaces and map in the Statement, the convex set $K$, points $x,z\in K$, and the Lipschitz constant $L$.

[A1] [[def-countable-choice]]: Countable Choice is the choice assumption used by the Banach-valued integral supplier.

[F1] [[lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves]]: For a $C^1$ Banach-valued curve $\gamma$ on $[0,1]$, $\gamma(1)-\gamma(0)=\int_0^1\gamma'(t)\,dt$.

[F2] [[lem-linearity-of-the-bochner-integral]]: The Bochner integral is linear.

[F6] For a constant vector $v$ on $[0,1]$ with Lebesgue measure, the one-cell simple-function formula [[def-banach-valued-simple-function-and-integral]] gives $\int_0^1v\,dt=\lambda_1([0,1])v=v$, since [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives $\lambda_1([0,1])=1$.

[F3] [[lem-bochner-integral-norm-inequality]]: The norm of a Bochner integral is at most the integral of the norm of its integrand.

[F4] [[def-frechet-derivative-between-banach-spaces]]: In the real case the Fréchet derivative is bounded real-linear. In the complex case the same-field convention in the Statement makes it bounded complex-linear. In either case it is real-linear along real-parameter increments.

## Proof

**Given:** The assumptions and facts above. Put $h=x-z$ and $\gamma(t)=F(z+th)$ for $0\le t\le1$.

1.1 Convexity gives $z+th\in K\subseteq U$ for $0\le t\le1$. If $h\ne0$ and $0<t<1$, put $u=z+th$. For real $s\to0$ with $t+s\in[0,1]$, Fréchet differentiability at $u$ gives $$\left\|\frac{F(u+sh)-F(u)}s-F'(u)h\right\| =\frac{\|F(u+sh)-F(u)-F'(u)(sh)\|}{|s|}\longrightarrow0,$$ because $F'(u)$ is linear over the common field and hence over real scalars. Thus $\gamma'(t)=F'(z+th)h$. If $h=0$, $\gamma$ is constant and the same formula holds. Differentiability at every point of $U$ also makes $F$ and hence $\gamma$ continuous on the segment, directly from the Fréchet remainder definition. In either case this derivative is continuous in $t$ and extends to the endpoints, since $F'$ is Lipschitz on $K$. The Banach-valued fundamental theorem [F1] therefore gives $F(x)-F(z)=\int_0^1F'(z+th)h\,dt$. The constant vector function $t\mapsto F'(z)h$ has integral $F'(z)h$ by [F6]. Subtracting that integral and using linearity [F2] gives $F(x)-F(z)-F'(z)h=\int_0^1(F'(z+th)-F'(z))h\,dt$. [A1, F1, F2, F6, F4, given, construct, algebra]

2.1 For each $t\in[0,1]$, the Lipschitz hypothesis and bounded linearity give $\|(F'(z+th)-F'(z))h\|\le Lt\|h\|^2$. Therefore [F3] and scalar integration give $\|F(x)-F(z)-F'(z)h\|\le\int_0^1Lt\|h\|^2\,dt=(L/2)\|h\|^2$. [A1, step 1.1, F3, F4, algebra] ∎

## Remarks

[F5] [[def-bochner-integrable-function]]: A Bochner integral is defined as the norm limit of integrals of simple-function approximants for a Bochner-integrable function.
