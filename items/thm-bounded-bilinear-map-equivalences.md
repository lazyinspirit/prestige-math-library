---
id: thm-bounded-bilinear-map-equivalences
kind: theorem
title: "For a bilinear map, boundedness is equivalent to joint continuity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-bilinear-map,
       def-product-norms-on-finitely-many-normed-spaces,
       lem-vector-operations-are-continuous-in-a-normed-space,
       def-metric-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Statement

Let $X$, $Y$, and $Z$ be normed spaces over the same scalar field, and let
$B:X\times Y\to Z$ be bilinear. Then the following are equivalent:

1. $B$ is bounded.
2. $B$ is continuous at $(0,0)$.
3. $B$ is jointly continuous on $X\times Y$ for the product norm
   $\|(x,y)\|_{\max}:=\max\{\|x\|,\|y\|\}$.

## Facts & Assumptions

**Given:** A bilinear map $B:X\times Y\to Z$, points $x_0 \in X$, $y_0 \in Y$, and perturbations $h \in X$, $k \in Y$.

[L1] A bounded bilinear map has a constant $C \ge 0$ with $\|B(x,y)\| \le C\|x\|\,\|y\|$ for all $x,y$ ([[def-bounded-bilinear-map]]).

[L2] The finite-product maximum norm is a norm on $X\times Y$ ([[def-product-norms-on-finitely-many-normed-spaces]]).

[L3] Continuity on metric spaces is the $\varepsilon$-$\delta$ condition of [[def-metric-continuity]], and addition and scalar multiplication in normed spaces are continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $B$ is bounded, with constant $C$ from [L1]. Bilinearity gives $B(x_0+h,y_0+k)-B(x_0,y_0)=B(h,k)+B(h,y_0)+B(x_0,k)$. If $\max\{\|h\|,\|k\|\}<\delta \le 1$, then $\|B(h,k)\| \le C\delta^2$, $\|B(h,y_0)\| \le C\delta\|y_0\|$, and $\|B(x_0,k)\| \le C\|x_0\|\delta$. Hence

$$\|B(x_0+h,y_0+k)-B(x_0,y_0)\| \le C\delta(\delta+\|x_0\|+\|y_0\|).$$

[L1, L2, algebra]

1.2 The implication $(3)\Rightarrow(2)$ is immediate by specializing the point of continuity to $(0,0)$. [L3]

1.3 Assume $B$ is continuous at $(0,0)$. Applying [L3] with $\varepsilon = 1$ gives $\delta > 0$ such that $\max\{\|u\|,\|v\|\}<\delta$ implies $\|B(u,v)\|<1$. [L3, choose]

2.1 Given $\varepsilon > 0$, choose $\delta \le 1$ so that the bound in step 1.1 is below $\varepsilon$. Then [L3] shows that $B$ is continuous at $(x_0,y_0)$. Since $(x_0,y_0)$ was arbitrary, $(1)\Rightarrow(3)$. [step 1.1, L3, choose]

2.2 If $x=0$ or $y=0$, bilinearity gives $B(x,y)=0$. Otherwise put $u := \dfrac{\delta}{2\|x\|}x$ and $v := \dfrac{\delta}{2\|y\|}y$. Then $\max\{\|u\|,\|v\|\}=\delta/2<\delta$, so $\|B(u,v)\|<1$ by step 1.3. By bilinearity, $B(u,v)=\dfrac{\delta^2}{4\|x\|\|y\|}B(x,y)$, hence $\|B(x,y)\| < \dfrac{4}{\delta^2}\|x\|\,\|y\|$. Therefore $B$ is bounded. [step 1.3, L1, algebra]

3.1 Steps 2.1, 1.2, and 2.2 prove $(1)\Rightarrow(3)\Rightarrow(2)\Rightarrow(1)$, so the three conditions are equivalent. [step 2.1, step 1.2, step 2.2] ∎
