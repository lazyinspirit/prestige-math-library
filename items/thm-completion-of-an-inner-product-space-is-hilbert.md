---
id: thm-completion-of-an-inner-product-space-is-hilbert
kind: theorem
title: The norm completion of an inner-product space is a Hilbert space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-completion-of-a-normed-space, thm-metric-completion-carries-a-unique-banach-space-structure, lem-inner-product-is-jointly-continuous, thm-parallelogram-law, thm-jordan-von-neumann-polarization, thm-cauchy-schwarz-in-an-inner-product-space, lem-vector-operations-are-continuous-in-a-normed-space, lem-reverse-triangle-inequality-in-a-normed-space, cor-archimedean-reciprocal, def-countable-choice, def-hilbert-space, cor-inner-product-induces-a-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, pp.38–39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Countable Choice. Let $X$ be a real or complex inner-product space and let $(\widehat X,\kappa)$ be its norm completion ([[def-completion-of-a-normed-space]]). Then $\widehat X$ carries a unique inner product that extends the given one along $\kappa$ and whose induced length is the completion norm; with it $\widehat X$ is a Hilbert space, and the extension is unique among inner products that extend the given pairing and induce the completion norm.

## Facts & Assumptions

[A1] The completion $(\widehat X,\kappa)$ is a Banach space, $\kappa:X\to\widehat X$ is a dense linear isometry, and $\widehat X$ carries the unique compatible vector-space structure of the published metric completion ([[thm-metric-completion-carries-a-unique-banach-space-structure]], [[def-completion-of-a-normed-space]]).

[A2] The induced length of an inner-product space is a norm ([[cor-inner-product-induces-a-norm]]). Conversely, a norm on a real or complex vector space is induced by an inner product if and only if it satisfies the parallelogram law. That inner product is unique and is recovered by the real or first-linear complex polarisation formula ([[thm-jordan-von-neumann-polarization]]).

[A3] Cauchy–Schwarz holds in every inner-product space; the resulting two-variable difference estimate proves joint continuity ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[lem-inner-product-is-jointly-continuous]]).

[A4] Vector addition and scalar multiplication are continuous, and $\bigl|\|u\|-\|v\|\bigr|\le\|u-v\|$ ([[lem-vector-operations-are-continuous-in-a-normed-space]], [[lem-reverse-triangle-inequality-in-a-normed-space]]).

[A5] Countable Choice selects a point from every member of a countable family of nonempty sets, and $1/(n+1)\to0$ ([[def-countable-choice]], [[cor-archimedean-reciprocal]]).

[A6] Every real or complex inner-product norm satisfies the parallelogram law ([[thm-parallelogram-law]]).

[A7] A Hilbert space is an inner-product space complete for its induced-norm metric ([[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, an inner-product space $X$ with norm $\|\cdot\|$, and its norm completion $(\widehat X,\kappa)$ with completion norm also written $\|\cdot\|$.

1.1 Let $\xi,\eta\in\widehat X$. For every $n$, density makes the sets $\{x\in X:\|\kappa x-\xi\|<1/(n+1)\}$ and $\{y\in X:\|\kappa y-\eta\|<1/(n+1)\}$ nonempty. Countable Choice selects $x_n,y_n$ from these sets. Thus $\kappa(x_n)\to\xi$ and $\kappa(y_n)\to\eta$, the selected sequences are Cauchy, and continuity of the vector operations gives $\kappa(x_n\pm y_n)=\kappa(x_n)\pm\kappa(y_n)\to\xi\pm\eta$. [A1, A4, A5]

2.1 The parallelogram identities $\|x_n+y_n\|^2+\|x_n-y_n\|^2=2\|x_n\|^2+2\|y_n\|^2$ hold in $X$ by [A6]; passing to the limit using continuity of the norm and of sums, and the isometry $\|\kappa z\|=\|z\|$, gives $\|\xi+\eta\|^2+\|\xi-\eta\|^2=2\|\xi\|^2+2\|\eta\|^2$, so the completion norm satisfies the parallelogram law. [step 1.1, A1, A4, A6]

3.1 The Jordan–von Neumann theorem applied to the Banach space $\widehat X$ therefore produces an inner product $B$ on $\widehat X$ whose induced length is exactly the completion norm and which is the unique such inner product. [step 2.1, A2, A7]

4.1 $B$ extends the original pairing: for $x,y\in X$, the polarisation formula of [A2] together with $\kappa(x\pm y)=\kappa x\pm\kappa y$ and the isometry property gives $B(\kappa x,\kappa y)=\tfrac14(\|\kappa(x+y)\|^2-\|\kappa(x-y)\|^2)=\tfrac14(\|x+y\|^2-\|x-y\|^2)=\langle x,y\rangle$ in the real case, and the four-term complex formula likewise in the complex case. [step 3.1, A1, A2]

5.1 Uniqueness: if $B'$ is any inner product on $\widehat X$ that extends the pairing along $\kappa$ and induces the completion norm, then for $\xi,\eta$ and approximating sequences as in step 1.1 the Cauchy–Schwarz inequality for both forms gives $|B'(\xi,\eta)-B'(\kappa x_n,\kappa y_n)|\le\|\xi-\kappa x_n\|\,\|\eta\|+\|\kappa x_n\|\,\|\eta-\kappa y_n\|$ and the same bound for $B$, so both pairings are the limits of the common values $\langle x_n,y_n\rangle$ and $B'=B$. [step 1.1, step 4.1, A1, A3]

6.1 Hence $\widehat X$ carries the inner product $B$ extending the original one with the completion norm as induced length, so it is complete and therefore a Hilbert space by [A7]. Countable Choice is used in the published completion interface and explicitly in step 1.1 to select the two approximating sequences; no further choice enters the limit arguments. [step 1.1, step 3.1, step 5.1, A1, A5, A7] ∎
