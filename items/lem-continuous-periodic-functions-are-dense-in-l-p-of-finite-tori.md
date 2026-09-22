---
id: lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori
kind: lemma
title: Continuous functions are dense in $L^p$ of finite tori and of bounded intervals
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice, thm-absolute-continuity-of-the-integral, cor-archimedean-reciprocal, thm-quotient-universal-property, def-metric-continuity, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, p.68, Problem 2.18"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §2.3.6, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$n\ge1$ and $1\le p<+\infty$.

1. The complex continuous functions on the finite torus $\mathbb T^n$ are dense
   in complex $L^p(\mathbb T^n)$ with respect to the $L^p$ norm
   ([[def-the-one-dimensional-torus-and-normalized-haar-integral]],
   [[def-complex-lp-and-euclidean-test-function-conventions]]).
2. For every bounded interval $(a,b)\subseteq\mathbb R$, the complex continuous
   functions on $[a,b]$ are dense in complex $L^p((a,b))$ for Lebesgue measure.
3. The real versions of 1 and 2 hold, the approximants being the real parts of
   the complex ones.

## Facts & Assumptions

[A1] Complex $C_c^\infty(\mathbb R^n)$ is dense in complex $L^p(\mathbb R^n)$ for finite $p$, and complex finite simple functions with finite-measure support are dense in $L^p$ of any measure space ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[A2] The torus integral is represented on the fundamental domain $[0,1)^n$, so for $G:=[F\circ q_n]\cdot\mathbf 1_{[0,1)^n}$ one has $\|G\|_{L^p(\mathbb R^n)}=\|F\|_{L^p(\mathbb T^n)}$; Minkowski's inequality holds in complex $L^p$ and $\|\operatorname{Re}h\|_p\le\|h\|_p$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[A3] If $h\in L^1$ and $\varepsilon>0$ then some $\delta>0$ has $\mu(E)<\delta\Rightarrow\int_E|h|<\varepsilon$; the box formula gives $\lambda_n([0,1)^n\setminus[\delta,1-\delta]^n)=1-(1-2\delta)^n\le 2n\delta$, and for every real $\eta>0$ some $\delta>0$ has $2n\delta<\eta$ ([[thm-absolute-continuity-of-the-integral]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[cor-archimedean-reciprocal]]).

[A4] A continuous function $t\mapsto\operatorname{dist}(t,C)$ to a closed set is continuous, and maxima and minima of continuous functions are continuous, so the cutoff $\chi(x):=\prod_{j<n}\max\{0,1-\operatorname{dist}(x_j,[\delta,1-\delta])/\delta\}$ is continuous, equals $1$ on $[\delta,1-\delta]^n$ and vanishes outside $(0,1)^n$; its support meets only finitely many integer translates of the fundamental cube, so the periodisation $\widetilde K(s):=\sum_{m\in\mathbb Z^n}\chi H(s+m)$ is a finite sum locally, is $n$-fold periodic, and descends to a continuous function $K$ on $\mathbb T^n$ by the quotient universal property; on $[0,1)^n$ the sum reduces to $\chi H$ ([[def-metric-continuity]], [[thm-quotient-universal-property]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[A5] A function in $C_c^\infty(\mathbb R^n)$ is continuous, and on a bounded interval a continuous function is Riemann integrable, hence Lebesgue integrable with the same integral ([[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, $n\ge1$, $1\le p<+\infty$, and $f\in L^p(\mathbb T^n;\mathbb C)$ represented by the Borel function $F$.

1.1 Let $G:=F\circ q_n$ on $[0,1)^n$, extended by $0$ to $\mathbb R^n$. Then $G\in L^p(\mathbb R^n)$ and $\|G\|_p=\|f\|_{L^p(\mathbb T^n)}$, and for a measurable $E\subseteq\mathbb R^n$ with $\lambda_n(E)$ small the integral of $|G|^p$ over $E$ is small by absolute continuity of the integral. [A2, A3]

2.1 Given $\varepsilon>0$ choose $\delta>0$ with $\lambda_n([0,1)^n\setminus[\delta,1-\delta]^n)<\delta_0$, where $\delta_0$ is a threshold for $|G|^p$ and $\varepsilon^p$ from [A3]; put $G_\delta:=G\cdot\mathbf 1_{[\delta,1-\delta]^n}$. Then $\|G-G_\delta\|_p^p=\int_{[0,1)^n\setminus[\delta,1-\delta]^n}|G|^p<\varepsilon^p$, so $\|G-G_\delta\|_p<\varepsilon$. [step 1.1, A3]

3.1 By density of $C_c^\infty(\mathbb R^n)$ choose $H\in C_c^\infty(\mathbb R^n)$ with $\|G_\delta-H\|_p<\varepsilon$, and let $\chi$ be the cutoff of [A4] for this $\delta$. Since $\chi=1$ on the support of $G_\delta$ and $|\chi|\le1$, one has $\|G_\delta-\chi H\|_p=\|\chi(G_\delta-H)\|_p\le\|G_\delta-H\|_p<\varepsilon$, and $\chi H$ is continuous, compactly supported in $[0,1]^n$, and vanishes on the boundary of that cube. [step 2.1, A1, A4]

4.1 Let $K$ be the continuous function on $\mathbb T^n$ obtained by periodising $\chi H$, as in [A4]; on the fundamental domain $K$ agrees with $\chi H$. Therefore, using that the torus $L^p$ integral is represented on $[0,1)^n$ and Minkowski's inequality, $\|f-K\|_{L^p(\mathbb T^n)}=\|G-\chi H\|_{L^p([0,1)^n)}\le\|G-G_\delta\|_p+\|G_\delta-\chi H\|_p<2\varepsilon$. [step 2.1, step 3.1, A2, A4]

5.1 Since $\varepsilon>0$ was arbitrary, claim 1 follows: every $f\in L^p(\mathbb T^n;\mathbb C)$ is approximated in $L^p$ by the continuous functions $K$. For claim 2, let $f\in L^p((a,b))$ and extend it by $0$ to $\mathbb R$; the density theorem [A1] gives $H\in C_c^\infty(\mathbb R)$ with $\|f-H\|_{L^p(\mathbb R)}<\varepsilon$, and restricting $H$ to $[a,b]$ gives a continuous function with $\|f-H\|_{L^p((a,b))}\le\|f-H\|_{L^p(\mathbb R)}<\varepsilon$. [step 4.1, A1, A5]

6.1 For claim 3, let $f$ be real valued and let $H$ approximate it complexly within $\varepsilon$; then $\operatorname{Re}H$ is real continuous and $\|f-\operatorname{Re}H\|_p=\|\operatorname{Re}(f-H)\|_p\le\|f-H\|_p<\varepsilon$, so the real continuous functions are dense in each of the two settings. [step 4.1, step 5.1, A2]

7.1 Steps 5.1 and 6.1 establish the complex and real density statements on finite tori and on bounded intervals. [step 5.1, step 6.1] ∎
