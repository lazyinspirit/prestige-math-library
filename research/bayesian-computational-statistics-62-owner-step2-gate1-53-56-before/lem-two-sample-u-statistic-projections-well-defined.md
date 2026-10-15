---
id: lem-two-sample-u-statistic-projections-well-defined
kind: lemma
title: First projections are measurable and square-integrable
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Péter Major, Some Results About U-statistics, in On the Estimation of Multiple Random Integrals and U-Statistics, Lecture Notes in Mathematics 2079, Theorem 9.1 and proof"
      url: "https://static.renyi.hu/~major/articles/lect-note1.pdf"
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

For the setup of [[def-two-sample-order-r-u-statistic-and-first-projections]],
suppose $h\in L^2(P^{\otimes r}\otimes Q^{\otimes r})$. Then the section
integrals defining $g_X$ and $g_Y$ are finite and measurable almost everywhere,
can be assigned measurable values on exceptional null sets, and define
square-integrable centered projections. In particular,
$$E_P[g_X(X_1)]=E_Q[g_Y(Y_1)]=0,$$
$$E_P[g_X(X_1)^2]\le E_{P^{\otimes r}\otimes Q^{\otimes r}}[h^2],\qquad E_Q[g_Y(Y_1)^2]\le E_{P^{\otimes r}\otimes Q^{\otimes r}}[h^2].$$

## Facts & Assumptions

**Given:** Probability measures $P,Q$, a product-measurable kernel $h$ with finite second moment under $P^{\otimes r}\otimes Q^{\otimes r}$, and the projection definitions.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]] defines $g_X$ and $g_Y$ as the corresponding conditional section integrals minus $\theta(P,Q;h)$.

[F2] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] gives integrable sections almost everywhere, measurable section-integral versions, and equality of iterated and product integrals.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]] gives $|\int ab|\le\|a\|_2\|b\|_2$.

[F4] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] supplies the finite product sigma-algebras on which the section maps and product integrals are defined.

## Proof

**Given:** $h\in L^2(P^{\otimes r}\otimes Q^{\otimes r})$ and the definitions in [F1]. Prove both projections are measurable, centered, and square-integrable with the displayed bounds.

1.1 The product measure is a probability measure, so applying [F3] to $h$ and the constant function $1$ gives $E|h|\le(Eh^2)^{1/2}<\infty$. Thus $h$ is integrable and $\theta(P,Q;h)=Eh$ is finite. [F1, F3]

1.2 By [F4], the product decomposition uses the stated finite product sigma-algebra. Apply [F2] with first coordinate $P$-distributed and the remaining $2r-1$ coordinates distributed according to $P$ or $Q$. For $P$-almost every $x$, the section integral $f_X(x)=\int h(x,x_2,\ldots,x_r;y_1,\ldots,y_r)\,dP^{r-1}dQ^r$ is finite; [F2] supplies a measurable version after setting it to zero on the exceptional null set. Reordering the coordinates and using the $Y_1$ section gives a finite measurable $f_Y$ for $Q$-almost every $y$. [F1, F2, F4]

2.1 For each good $x$, Cauchy–Schwarz [F3] on the remaining probability product measure gives $|f_X(x)|^2\le\int h(x,x_2,\ldots,x_r;y_1,\ldots,y_r)^2\,dP^{r-1}dQ^r$. Integrating in $P$ and using [F2] yields $E_P[f_X(X_1)^2]\le E[h^2]$. The same argument for the $Y_1$ section gives $E_Q[f_Y(Y_1)^2]\le E[h^2]$. [F2, F3, step 1.2]

3.1 By [F2], $E_P f_X=E h=\theta(P,Q;h)$ and $E_Q f_Y=E h=\theta(P,Q;h)$. Subtracting this finite mean gives the centered projections in [F1]; step 2.1 and finiteness of $\theta$ show both remain square-integrable. [F1, F2, step 1.1, step 2.1] ∎
