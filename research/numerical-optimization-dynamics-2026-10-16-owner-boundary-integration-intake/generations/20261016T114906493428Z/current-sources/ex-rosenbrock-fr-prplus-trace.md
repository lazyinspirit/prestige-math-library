---
id: ex-rosenbrock-fr-prplus-trace
kind: example
title: "One accepted Rosenbrock step gives different FR and PR+ coefficients"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - alg-bracketing-zoom-strong-wolfe-search
  - def-wolfe-and-strong-wolfe-conditions
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

For the Rosenbrock function $f(x,y)=(1-x)^2+100(y-x^2)^2$, take $x_0=(-6/5,1)$ and $d_0=-g_0$. With $c_1=1/1000$, $c_2=49/100$, bounded search budgets $E\ge1$, $Z\ge10$, and outer budget $K\ge2$, the first accepted step is $t_0=1/1024$. Its FR and PR+ coefficients differ. The PR+ candidate ascends, so the safeguarded method restarts; for definiteness take $\sigma=1/2$ and $C=2$.

## Facts & Assumptions

**Given:** The function, start and parameters in the Example, with exact arithmetic.

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: $d_0=-g_0$; FR uses $\beta_0^{\rm FR}=\|g_1\|_2^2/\|g_0\|_2^2$, whereas the PR+ candidate uses $\beta_0^{\rm PR+}=\max\{0,g_1^T(g_1-g_0)/\|g_0\|_2^2\}$; a failed descent or norm test resets it to $-g_1$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: strong Wolfe requires Armijo decrease and $|\phi'(t)|\le c_2|\phi'(0)|$.

[F3] [[alg-bracketing-zoom-strong-wolfe-search]]: the first expansion trial is $1$; an Armijo failure calls zoom with endpoints $(0,1)$, whose midpoint trials halve the positive endpoint while the same failure persists.

## Verification

**Given:** The objective, initial point and budgets of the Example.

1.1 Differentiation gives $g_0=(-1078/5,-88)$, $d_0=(1078/5,88)$, $f(x_0)=121/5$, and $\phi'(0)=-G_0$ with $G_0=1{,}355{,}684/25=54{,}227.36$. At a parameter $t$, write $u=-6/5+(1078/5)t$, $v=1+88t$, and $r=v-u^2$. Then $\phi(t)=(1-u)^2+100r^2$ and $\phi'(t)=(-400ur+2(u-1))(1078/5)+200r(88)$. [given, F1, algebra]

2.1 Exact substitution into step 1.1 gives integer lower bounds for $\phi(2^{-j})$, in order $j=0,\ldots,9$: $210482437168$, $12810991198$, $758614013$, $42388850$, $2078788$, $72456$, $543$, $211$, $149$, and $35$. Each lower bound exceeds $121/5$, whereas every positive-trial Armijo right side is below $121/5$. Thus the initial trial fails Armijo and the first nine zoom trials fail it as well. By [F3], $a=0$ remains fixed and the tenth zoom trial is $t_0=2^{-10}=1/1024$. [given, F3, step 1.1, algebra]

3.1 At this trial, $x_1=(-2533/2560,139/128)$ and $r=700711/6553600$. Exactly, $$f(x_1)=\frac{438182241277}{85899345920}<\frac{511}{100},\qquad  g_1=\left(\frac{1608013539}{41943040},\frac{700711}{32768}\right),\qquad  h:=g_1^Td_0=\frac{1064039515121}{104857600}.$$ The Armijo right side is $121/5-G_0/(1000\cdot1024)>24$, so Armijo holds. Also $0<h<10148<26571< (49/100)G_0=26571.4064$, so strong curvature holds. The search therefore returns this tenth midpoint. [given, F2, F3, step 1.1, step 2.1, algebra]

4.1 Put $G_1=\|g_1\|_2^2=3390155233212910921/1759218604441600$. Because $g_0=-d_0$ and $h>0$, the coefficients are $\beta_0^{\rm FR}=G_1/G_0$ and $\beta_0^{\rm PR+}=(G_1+h)/G_0>\beta_0^{\rm FR}$. The FR direction is $-g_1+(G_1/G_0)d_0$; the PR+ candidate is $d_1^{\rm cand}=-g_1+((G_1+h)/G_0)d_0$. Exact values in step 3.1 give $1927<G_1<1928$, $10147<h<10148$, and $54227<G_0<54228$. Hence $$g_1^Td_1^{\rm cand}=-G_1+\frac{(G_1+h)h}{G_0}>-1928+\frac{(1927+10147)10147}{54228}>331>0.$$ It fails the descent safeguard for every $\sigma>0$. Thus the actual selected PR+ direction is $d_1=-g_1$ and its restart flag is true; the ascending candidate is not the selected direction. [given, F1, step 3.1, algebra]

5.1 For comparison, the originally displayed trial $\widehat t=1/1000$ is also a mathematically valid strong Wolfe step, but is not an output of this dyadic search. It gives $\widehat x=(-2461/2500,136/125)$, $\widehat r=743479/6250000$, $f(\widehat x)=5.35291158000896$, $\widehat g=(42.8715665664,23.791328)$, and $\widehat h=\widehat g^Td_0=11336.74661571584$. Its Armijo bound is $24.14577264$ and $|\widehat h|<11400<26571.4064$, verifying both inequalities directly. With $\widehat G=\|\widehat g\|_2^2$, its distinct coefficients are $\widehat G/G_0$ and $(\widehat G+\widehat h)/G_0$; these describe the hypothetical accepted update at $\widehat t$, rather than the actual bounded-search trace above. [given, F1, F2, step 1.1, algebra] ∎