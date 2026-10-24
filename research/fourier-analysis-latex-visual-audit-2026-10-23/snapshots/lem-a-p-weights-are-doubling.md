---
id: lem-a-p-weights-are-doubling
kind: lemma
title: A_p weights are doubling
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-a-p-weighted-average-comparison-and-density-to-mass, def-axis-parallel-cube-averages-and-cube-maximal-functions, lem-ball-and-cube-maximal-functions-are-comparable, thm-lebesgue-measure-under-dilations-and-reflections, def-weight-and-weighted-lp-space, def-muckenhoupt-a-p-and-a-one-weights, lem-a-one-cube-average-and-maximal-function-forms-agree, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Proposition 7.1.5 (9) and its proof, printed pp. 504-505"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.25, printed p. 80"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $1\le p<\infty$ and $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]). Then the measure $w\,d\lambda$ is
doubling: for every axis-parallel cube $Q$ and every $\lambda>1$,
$$w(\lambda Q)\le\lambda^{np}K_pw(Q),$$
and for every ball $B(x,r)$,
$$w(B(x,2r))\le(4\sqrt n)^{np}K_pw(B(x,r)).$$
All constants depend only on $n$, $p$ and $K_p$, never on the particular
cube, ball, or point.

Here $K_p=[w]_{A_p}$ for $p>1$, and
$K_1=\sup_Q\langle w\rangle_Q/(\operatorname{ess\,inf}_Qw)$; by
[[lem-a-one-cube-average-and-maximal-function-forms-agree]],
$1\le K_1\le c_n[w]_{A_1}$. Thus the constants remain controlled by the
stated $A_p$ data, including the ball-normalized endpoint characteristic.

## Facts & Assumptions

**Given:** Countable Choice; $1\le p<\infty$, $w\in A_p$, a cube $Q$, $\lambda>1$, and a ball $B(x,r)$.

[F1] For $w\in A_p$, every cube satisfies $0<w(Q)<\infty$ and $\lambda Q$ is an axis-parallel cube with $|\lambda Q|=\lambda^n|Q|$ ([[def-axis-parallel-cube-averages-and-cube-maximal-functions]], [[def-muckenhoupt-a-p-and-a-one-weights]]).

[F2] For $w\in A_p$, every cube $R$ and every nonnegative measurable $f$ obey $\langle f\rangle_R\le K_p^{1/p}\bigl(w(R)^{-1}\int_Rf^pw\bigr)^{1/p}$ for $p>1$; for $p=1$, $w\ge\langle w\rangle_R/K_1$ a.e. gives the same bound with $K_1$. ([[lem-a-p-weighted-average-comparison-and-density-to-mass]], [[lem-a-one-cube-average-and-maximal-function-forms-agree]]).

[F3] For every ball $B(x,r)$ one has $Q(x,r/\sqrt n)\subseteq B(x,r)\subseteq B(x,2r)\subseteq Q(x,4r)$, and $Q(x,4r)=(4\sqrt n)Q(x,r/\sqrt n)$ ([[lem-ball-and-cube-maximal-functions-are-comparable]], [[def-axis-parallel-cube-averages-and-cube-maximal-functions]]), while $w\,d\lambda$ is a measure, so $A\subseteq B$ implies $w(A)\le w(B)$ ([[def-weight-and-weighted-lp-space]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F2] on the cube $\lambda Q$ to $f:=\mathbf 1_Q$: then $\langle f\rangle_{\lambda Q}=|Q|/|\lambda Q|=\lambda^{-n}$ by [F1] and $\int_{\lambda Q}f^pw\,d\lambda=w(Q)$, so $\lambda^{-n}\le K_p^{1/p}(w(Q)/w(\lambda Q))^{1/p}$. Raising to the $p$-th power and rearranging using $0<w(Q),w(\lambda Q)<\infty$ gives $w(\lambda Q)\le\lambda^{np}K_pw(Q)$, which is the cube assertion. [F1, F2, given, algebra]

2.1 For the ball assertion apply step 1.1 to the cube $Q_0:=Q(x,r/\sqrt n)$ and the dilation factor $\lambda_0:=4\sqrt n>1$: by [F3], $B(x,2r)\subseteq Q(x,4r)=\lambda_0Q_0$, and $Q_0\subseteq B(x,r)$, so $w(B(x,2r))\le w(\lambda_0Q_0)\le\lambda_0^{np}K_pw(Q_0)\le(4\sqrt n)^{np}K_pw(B(x,r))$. [F1, F3, step 1.1, given, algebra]

3.1 Step 1.1 is the cube form with constant $\lambda^{np}K_p$ and step 2.1 the ball form with constant $(4\sqrt n)^{np}K_p$; both depend only on $n,p,K_p$ and the stated dilation, and no property of $Q$, $x$ or $r$ entered otherwise. This is the asserted doubling property. [step 1.1, step 2.1] ∎
