---
id: lem-b-adic-step-functions-dense-in-l2-cube
kind: lemma
title: "Base-$b$ box step functions are dense in $L^2$ of the cube"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-b-adic-anova-components
  - thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p
  - thm-continuity-from-below-for-measures
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §6"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Let $b\ge2$ and $d\ge1$. In $L^2([0,1)^d)$ for Borel Lebesgue measure, the
finite linear span of indicators of base-$b$ elementary boxes is dense.

## Facts & Assumptions
**Given:** Integers $b\ge2$, $d\ge1$, and the Borel cube with Lebesgue measure.

[F1] [[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]: Every $L^2$ class is approximated in $L^2$ by a finite simple function supported on finitely many measurable sets.

[F2] [[thm-continuity-from-below-for-measures]]: If $E_N\uparrow E$, then $\lambda(E_N)\to\lambda(E)$.



## Proof

**Proof technique:** direct.

**Given:** $b\ge2$, $d\ge1$, and $\varepsilon>0$.

1.1 Let $\mathcal A_b$ be the algebra of finite unions of base-$b$ elementary boxes in $[0,1)^d$. There are countably many such boxes. For any open $O\subseteq[0,1)^d$ and $x\in O$, choose $\delta_x>0$ such that the relative $\delta_x$-ball about $x$ lies in $O$. At every sufficiently large level $k$, the unique level-$k$ box containing $x$ has diameter at most $\sqrt d\,b^{-k}<\delta_x$, hence is contained in $O$. Therefore $O$ is the union of the countably many base-$b$ boxes contained in it. Thus $\sigma(\mathcal A_b)$ contains every open set and equals the Borel $\sigma$-algebra. [given, construct]

2.1 Let $\mathcal C$ be the Borel sets $E$ for which every $\eta>0$ admits $A\in\mathcal A_b$ with $\lambda(E\triangle A)<\eta$. It contains $\mathcal A_b$ and is closed under complements and finite unions by the symmetric-difference inequalities and the algebra property. If $E_i\in\mathcal C$, then $E^{(N)}=\bigcup_{i=1}^N E_i\uparrow E=\bigcup_{i\ge1}E_i$; [F2] lets us choose $N$ with $\lambda(E\setminus E^{(N)})<\eta/2$. Approximate each of the finitely many $E_i$, $i\le N$, within $\eta/(2N)$ and union those approximants. The resulting member of $\mathcal A_b$ is within $\eta$ of $E$. Thus $\mathcal C$ is a $\sigma$-algebra, so step 1.1 gives $\mathcal C$ equal to all Borel sets. [F2, step 1.1, algebra, choose]

3.1 By [F1], choose a finite simple function $s=\sum_{j=1}^M c_j\mathbf1_{E_j}$ with $\|f-s\|_2<\varepsilon/2$. By step 2.1 choose $A_j\in\mathcal A_b$ so that $\sum_{j=1}^M |c_j|\lambda(E_j\triangle A_j)^{1/2}<\varepsilon/2$. The finite box step function $g=\sum_j c_j\mathbf1_{A_j}$ then satisfies $\|s-g\|_2\le\sum_j|c_j|\|\mathbf1_{E_j}-\mathbf1_{A_j}\|_2 =\sum_j|c_j|\lambda(E_j\triangle A_j)^{1/2}<\varepsilon/2$. [F1, step 2.1, given, choose, algebra]

4.1 The triangle inequality gives $\|f-g\|_2\le\|f-s\|_2+\|s-g\|_2<\varepsilon$. Since $f$ and $\varepsilon$ were arbitrary, the stated finite-span density follows. [F1, step 3.1, algebra] ∎
