---
id: thm-hyperbolic-identities-and-derivatives
kind: theorem
title: "Addition formulas, identities, parity, and derivatives of the hyperbolic functions"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hyperbolic-functions, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, cor-mean-value-theorem, thm-exponential-limits-and-range, thm-intermediate-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

For all real $x,y$,
$$\sinh(x+y)=\sinh x\cosh y+\cosh x\sinh y,\qquad\cosh(x+y)=\cosh x\cosh y+\sinh x\sinh y,$$
$$\cosh^2x-\sinh^2x=1,\qquad(\sinh x)'=\cosh x,\qquad(\cosh x)'=\sinh x.$$
Moreover $\sinh:\mathbb R\to\mathbb R$ is odd, strictly increasing, and onto;
$\cosh:\mathbb R\to[1,\infty)$ is even and positive, and its restriction
to $[0,\infty)$ is strictly increasing and onto $[1,\infty)$; and
$\tanh:\mathbb R\to(-1,1)$ is strictly increasing and onto. On their declared domains,
$$(\tanh x)'=\operatorname{sech}^2x,\quad(\coth x)'=-\operatorname{csch}^2x,\quad(\operatorname{sech}x)'=-\operatorname{sech}x\tanh x,\quad(\operatorname{csch}x)'=-\operatorname{csch}x\coth x.$$

## Facts & Assumptions

**Given:** Real numbers $x,y$.

[L1] $\exp(u+v)=\exp u\exp v$, $\exp(-u)=1/\exp u$, and $\exp u>0$ ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]]).

[L2] $\exp'=\exp$, and the chain, product, quotient, and algebra rules differentiate the displayed formulas ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L3] If $a<b$ and $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then some $c\in(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ ([[cor-mean-value-theorem]]).

[L4] $\exp x\to\infty$ as $x\to\infty$ and $\exp x\to0$ as $x\to-\infty$ ([[thm-exponential-limits-and-range]]).

[L5] A continuous real function takes every value between two values on a closed interval ([[thm-intermediate-value]]).

[L6] For every real $x$, $\sinh x=(\exp x-\exp(-x))/2$ and $\cosh x=(\exp x+\exp(-x))/2$; $\tanh x=\sinh x/\cosh x$ and $\operatorname{sech}x=1/\cosh x$; and, when $x\ne0$, $\coth x=\cosh x/\sinh x$ and $\operatorname{csch}x=1/\sinh x$. Moreover $\cosh x>0$ for every $x$, and $\sinh x\ne0$ when $x\ne0$ ([[def-hyperbolic-functions]]).

[L7] Differentiability implies continuity ([[cor-differentiable-implies-continuous]]).



## Proof

**Proof technique:** direct.

1.1 Substitute the exponential definitions of [L6] and use [L1]; collecting terms gives both addition formulas, parity, and $\cosh^2x-\sinh^2x=1$. [L1, L6, algebra]

2.1 Differentiating the exponential definitions of [L6] gives $(\sinh x)'=\cosh x$ and $(\cosh x)'=\sinh x$; on the domains supplied by [L6], differentiating the quotients and using step 1.1 gives the four displayed reciprocal-function derivatives. [step 1.1, L2, L6, algebra]

2.2 The exponential formulas give $\sinh x\to\infty$, $\cosh x\to\infty$, and $\tanh x\to1$ as $x\to\infty$; oddness gives the corresponding limits $-\infty$ and $-1$ at $-\infty$. [step 1.1, L1, L4, algebra]

3.1 By [L6], $\cosh x>0$ and $\sinh x$ is nonzero away from $0$; the defining formula gives $\sinh0=0$. Thus $\sinh'=\cosh>0$ everywhere. For $a<b$, step 2.1 and [L7] give the hypotheses of [L3] for $\sinh$ on $[a,b]$, so for some $c\in(a,b)$, $\sinh b-\sinh a=\cosh c\,(b-a)>0$. Hence $\sinh$ is strictly increasing. [step 2.1, L3, L6, L7, algebra]

4.1 The oddness and strict increase of $\sinh$ make $\sinh x>0$ for $x>0$. Thus for $0\le a<b$, step 2.1 and [L7] let [L3] give $\cosh b-\cosh a=\sinh c\,(b-a)>0$ for some $c\in(a,b)$, so $\cosh$ is strictly increasing on $[0,\infty)$. Also $\operatorname{sech}x>0$, so for $a<b$ the same argument gives $\tanh b-\tanh a=\operatorname{sech}^2c\,(b-a)>0$ for some $c\in(a,b)$; hence $\tanh$ is strictly increasing. [step 1.1, step 2.1, step 3.1, L1, L3, L6, L7]

5.1 The functions are continuous by step 2.1 and [L7]. Their monotonicity, the values $\cosh0=1$, and the endpoint limits of step 2.2 let the intermediate value theorem give exactly the three stated ranges. [step 2.1, step 3.1, step 4.1, step 2.2, L5, L7] ∎
