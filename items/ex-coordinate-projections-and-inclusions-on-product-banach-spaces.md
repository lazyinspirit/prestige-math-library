---
id: ex-coordinate-projections-and-inclusions-on-product-banach-spaces
kind: example
title: "Coordinate projections and inclusions on a finite product Banach space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-operator-norm,
       def-product-norms-on-finitely-many-normed-spaces,
       thm-finite-products-of-banach-spaces-are-banach,
       def-space-of-bounded-linear-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Example

Let $X$ and $Y$ be Banach spaces over the same scalar field and equip $X\times Y$ with the maximum product
norm

$$\|(x,y)\|_{\max}:=\max\{\|x\|,\|y\|\}.$$

Then the coordinate projections

$$\pi_X(x,y)=x,\qquad \pi_Y(x,y)=y,$$

and the coordinate inclusions

$$\iota_X(x)=(x,0),\qquad \iota_Y(y)=(0,y)$$

are bounded linear operators. Moreover,

$$\|\pi_X\|=\|\iota_X\|=\begin{cases}1,&X\ne\{0\},\\0,&X=\{0\},\end{cases}\qquad \|\pi_Y\|=\|\iota_Y\|=\begin{cases}1,&Y\ne\{0\},\\0,&Y=\{0\}.\end{cases}$$

## Facts & Assumptions

**Given:** Banach spaces $X$ and $Y$ over the same scalar field, their product $X\times Y$ with the maximum norm, and vectors $x \in X$, $y \in Y$.

[L1] The maximum product norm is one of the standard product norms ([[def-product-norms-on-finitely-many-normed-spaces]]).

[L2] A finite product of Banach spaces is Banach, and bounded linear operators are the members of $\mathcal B(\cdot,\cdot)$ ([[thm-finite-products-of-banach-spaces-are-banach]], [[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]).

[L3] The operator norm is the unit-ball supremum and therefore records the least global bound of a bounded linear operator ([[def-operator-norm]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\|(x,y)\|_{\max} \ge \|x\|$ and $\|(x,y)\|_{\max} \ge \|y\|$, so $\|\pi_X(x,y)\| \le \|(x,y)\|_{\max}$ and $\|\pi_Y(x,y)\| \le \|(x,y)\|_{\max}$. Thus both projections are bounded with operator norm at most $1$ by [L2] and [L3]. [L1, L2, L3]

2.1 For $x \in X$ and $y \in Y$, [L1] gives $\|\iota_X(x)\|_{\max}=\|(x,0)\|_{\max}=\|x\|$ and $\|\iota_Y(y)\|_{\max}=\|(0,y)\|_{\max}=\|y\|$. So $\|\iota_X\|\le1$ and $\|\iota_Y\|\le1$, with equality whenever the relevant domain is nonzero. If $X\ne\{0\}$, choose $u \in X$ with $\|u\|=1$. Then $\|\iota_X(u)\|_{\max}=1$, and also $\|\pi_X(u,0)\|=1=\|(u,0)\|_{\max}$, so $\|\iota_X\|=\|\pi_X\|=1$. If $X=\{0\}$, then both $\iota_X$ and $\pi_X$ are the zero operator, so both norms are $0$. The same argument with $Y$ gives the corresponding statements for $\iota_Y$ and $\pi_Y$. [step 1.1, L1, L3, choose]

3.1 Therefore $\pi_X \in \mathcal B(X\times Y,X)$, $\pi_Y \in \mathcal B(X\times Y,Y)$, $\iota_X \in \mathcal B(X,X\times Y)$, and $\iota_Y \in \mathcal B(Y,X\times Y)$, with the norms stated above. [step 1.1, step 2.1, L2] ∎
