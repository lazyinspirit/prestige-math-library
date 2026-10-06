---
id: lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions
kind: lemma
title: "The grand maximal function dominates every admissible radial and nontangential maximal function"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-grand-maximal-test-class-of-order-n, def-schwartz-space-and-its-seminorms, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-schwartz-dilations-preserve-schwartz-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 1.1, printed p. 60 (PDF p. 2), equation (2): $M^*_{\\varphi,a}f(x)\\le a^NP_N(\\varphi)M_Nf(x)$"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Theorem 1.1, printed p. 4: a finite seminorm family implies domination by a single admissible test function"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $f\in\mathcal S'(\mathbb R^n)$, $\varphi\in\mathcal S(\mathbb R^n)$
with $\int_{\mathbb R^n}\varphi\ne0$, $a\ge1$, and an integer $N\ge1$. Then,
with $P_N$ and $\mathcal F_N$ as in
[[def-grand-maximal-test-class-of-order-n]] and the maximal functions of
[[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]],
$$M^{*,a}_\varphi f(x)\le(1+a)^NP_N(\varphi)\,M_Nf(x) \qquad\text{for every }x\in\mathbb R^n,$$
and in particular
$$M^0_\varphi f(x)\le2^NP_N(\varphi)M_Nf(x),\qquad \|M^0_\varphi f\|_{L^p}\le2^NP_N(\varphi)\|M_Nf\|_{L^p}$$
whenever $0<p\le\infty$ and the right-hand side is finite. The constants
$(1+a)^N$ differ from the source's sharper $a^N$ but are equivalent for fixed
$a,N$ and are the ones produced by the elementary translate estimate below.
Consequently every admissible radial maximal function is pointwise dominated
by the grand maximal function of every sufficiently large order, and the space
defined by the radial maximal function of one kernel contains the space defined
by $M_N$.

## Facts & Assumptions

**Given:** $n\ge1$, $\varphi\in\mathcal S$ with $\int\varphi\ne0$, $a\ge1$, an integer $N\ge1$, $f\in\mathcal S'$, and a point $x\in\mathbb R^n$.

[F1] $(f*\Psi_t)(y)=\bigl\langle f_z,\Psi_t(y-z)\bigr\rangle$ for $\Psi\in\mathcal S$ and $t>0$, and $M_Nf(x)=\sup_{\Psi\in\mathcal F_N}\sup_{t>0}\sup_{|y-x|\le t}|(f*\Psi_t)(y)|$ ([[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]], [[def-grand-maximal-test-class-of-order-n]]).

[F2] The test seminorm satisfies $P_N(\Psi)\le1$ exactly for $\Psi\in\mathcal F_N$, and for every nonzero $\Psi$, $P_N(\Psi/P_N(\Psi))=1$; $P_N(\Psi)=\sup_w(1+|w|)^N\max_{|\alpha|\le N+1}|\partial^\alpha\Psi(w)|$ ([[def-grand-maximal-test-class-of-order-n]], [[def-schwartz-space-and-its-seminorms]]).

[F3] If $|y-x|\le at$ then $y=x+t\gamma$ with $|\gamma|\le a$; the translation identity $\varphi_t(y-z)=G_t(x-z)$ for $G(w)=\varphi(w+\gamma)$ holds for every $z$, as both sides equal $t^{-n}\varphi((x-z)/t+\gamma)$ ([[lem-schwartz-dilations-preserve-schwartz-space]]).

[F4] Maximal functions are Borel measurable, so the $L^p$ statement is meaningful ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]).



**Proof technique:** translate the kernel into the aperture-one cone at the base point, using the translate bound for $P_N$.

## Proof

**Proof technique:** direct.

1.1 The translate bound. Fix $\gamma\in\mathbb R^n$ and put $G(w)=\varphi(w+\gamma)$. Then $G\in\mathcal S(\mathbb R^n)$ and $P_N(G)\le(1+|\gamma|)^NP_N(\varphi)$: indeed $\partial^\alpha G(w)=(\partial^\alpha\varphi)(w+\gamma)$ and $(1+|w|)\le(1+|\gamma|)(1+|w+\gamma|)$, so $(1+|w|)^N\max_{|\alpha|\le N+1}|\partial^\alpha\varphi(w+\gamma)|\le(1+|\gamma|)^NP_N(\varphi)$ pointwise in $w$, and taking the supremum proves the claim. If $P_N(G)=0$ then $G=0$ and $f*G_t=0$; otherwise $G/P_N(G)\in\mathcal F_N$ by [F2], and $t^{-n}$ normalisation is the same for $G$. [F2, F3, given, algebra]

2.1 Pointwise domination. Fix $t>0$ and $y$ with $|y-x|\le at$, and write $y=x+t\gamma$ with $|\gamma|\le a$. By [F3], $(f*\varphi_t)(y)=(f*G_t)(x)$ for $G=\varphi(\cdot+\gamma)$. Taking absolute values and applying the definition of $M_N$ through [F1] and step 1.1, $$|(f*\varphi_t)(y)|=|(f*G_t)(x)|\le P_N(G)M_Nf(x)\le(1+a)^NP_N(\varphi)M_Nf(x).$$ Taking the supremum over all such $t,y$ gives $M^{*,a}_\varphi f(x)\le(1+a)^NP_N(\varphi)M_Nf(x)$. [step 1.1, F1, F3, algebra]

3.1 Radial case and $L^p$ consequence. Since $M^0_\varphi f(x)=\sup_{t>0}|(f*\varphi_t)(x)|$ is the diagonal $y=x$ instance of the aperture-one supremum, $M^0_\varphi f(x)\le M^{*,1}_\varphi f(x)\le2^NP_N(\varphi)M_Nf(x)$ by step 2.1 with $a=1$. If $\|M_Nf\|_p<\infty$, the pointwise inequality and the Borel measurability of [F4] give $\|M^0_\varphi f\|_p\le2^NP_N(\varphi)\|M_Nf\|_p$ for every $0<p\le\infty$ by monotonicity of the integral. This proves the lemma. [step 2.1, F1, F4] ∎
