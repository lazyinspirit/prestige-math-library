---
id: thm-trace-class-iff-product-of-two-hilbert-schmidt-operators
kind: theorem
title: Trace class iff product of two Hilbert Schmidt operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, thm-hilbert-schmidt-operators-form-a-two-sided-ideal, thm-hilbert-schmidt-operators-are-compact, thm-hilbert-schmidt-norm-is-basis-independent, def-hilbert-schmidt-operator, lem-compositions-with-a-compact-operator-are-compact, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-bessel-inequality, thm-cauchy-schwarz-in-an-inner-product-space, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-dimension, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.26 (printed pp. 95–97)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, Propositions 2.8–2.9"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and $K$
be real or complex Hilbert spaces ([[def-hilbert-space]]), let $E$ be a Hilbert
basis of $H$ and $G$ a Hilbert basis of $K$ (both supplied as data), and let
$T\in\mathcal B(H,K)$ be compact ([[def-compact-linear-operator]]). Then:

1. **(factorization of a trace-class operator)** if $T$ is trace class
   ([[def-trace-class-operator]]), then, with $|T|$, $U$ and the singular system
   of $T$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]],
   [[thm-singular-value-decomposition-for-compact-operators]]), the operators
   $$B:=|T|^{1/2}\in\mathcal B(H),\qquad A:=U|T|^{1/2}\in\mathcal B(H,K)$$
   satisfy $T=AB$, are both Hilbert–Schmidt relative to $E$
   ([[def-hilbert-schmidt-operator]]), and
   $$\|A\|_{HS,E}=\|B\|_{HS,E}=\|T\|_1^{1/2},$$
   so that $\|A\|_{HS,E}\|B\|_{HS,E}=\|T\|_1$: the trace norm is attained by this
   factorization;
2. **(products of Hilbert–Schmidt operators are trace class)** conversely, if
   there are a real or complex Hilbert space $H_0$ with a supplied Hilbert basis
   $E_0$, a Hilbert–Schmidt operator $B\in\mathcal B(H,H_0)$ relative to $E$ and a
   Hilbert–Schmidt operator $A\in\mathcal B(H_0,K)$ relative to $E_0$ with
   $T=AB$, then $T$ is trace class and
   $$\|T\|_1\le\|A\|_{HS,E_0}\|B\|_{HS,E};$$
   in particular $AB$ is compact and $\|T\|\le\|A\|_{HS,E_0}\|B\|_{HS,E}$.

The bases $E$, $E_0$, $G$ are supplied data; no existence of a Hilbert basis is
asserted or used, and the adjoint-stability of the Hilbert–Schmidt norm across
$G$ is the imported invariance theorem.

## Facts & Assumptions

**Given:** Countable Choice, Hilbert spaces $H,H_0,K$, supplied Hilbert bases $E$ of $H$, $E_0$ of $H_0$, $G$ of $K$, and a compact $T\in\mathcal B(H,K)$.

[A1] **Trace norm.** $T$ is trace class exactly when $\sum_n s_n(T)<+\infty$, and then $\|T\|_1=\sum_ns_n(T)$ and $\|T\|=s_1(T)\le\|T\|_1$ ([[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **SVD.** With $J$ the index set of positive singular values, $Tx=\sum_{j\in J}s_j\langle x,e_j\rangle f_j$ in norm, $|T|e_j=s_je_j$, $(e_j)$ and $(f_j)$ orthonormal, $U$ is the partial isometry with $Ue_j=f_j$ on $(\ker T)^\perp$ extended by zero on $\ker T$, $U|T|=T$, and $U$ is isometric on $(\ker T)^\perp$ with range $\overline{\operatorname{ran}T}$; moreover $|T|=\sum_js_j\langle\cdot,e_j\rangle e_j$ ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A3] **Hilbert–Schmidt calculus.** The Hilbert–Schmidt norm is basis-independent and adjoint-stable, and $\|SB\|_{HS}\le\|S\|\|B\|_{HS}$ for bounded $S$; a Hilbert–Schmidt operator is compact; composites of compact operators with bounded ones are compact ([[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]], [[thm-hilbert-schmidt-norm-is-basis-independent]], [[thm-hilbert-schmidt-operators-are-compact]], [[def-hilbert-schmidt-operator]], [[lem-compositions-with-a-compact-operator-are-compact]], [[def-operator-norm]]).

[A4] **Parseval, Bessel, collapse of suprema.** For a Hilbert basis and any vector, the squared norm is the sum of the squared moduli of the coefficients; Bessel's inequality bounds finite coefficient sums for orthonormal families; for nonnegative families indexed by two sets the finite-subset suprema may be interchanged, $\sup_{F,G}\sum_{e\in F,j\in G}c_{e,j}=\sup_{G,F}\sum_{j\in G,e\in F}c_{e,j}$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A5] **Cauchy–Schwarz and boundedness.** $|\langle u,v\rangle|\le\|u\|\|v\|$ and the pairing is linear in the first argument and conjugate-linear in the second; $\|Sv\|\le\|S\|\|v\|$ and $\|ST\|\le\|S\|\|T\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-bounded-linear-operator]], [[thm-hilbert-adjoint-properties]], [[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

1.1 **Products of Hilbert–Schmidt operators are trace class.** Assume $T=AB$ with $B\in\mathcal B(H,H_0)$ Hilber–Schmidt relative to $E$ and $A\in\mathcal B(H_0,K)$ Hilbert–Schmidt relative to $E_0$. Then $B$ is compact [A3], so $T=AB$ is compact [A3] and [A2] applies to $T$ with singular system $(e_j,f_j,s_j)_{j\in J}$; for every finite $F\subseteq J$, and writing $\langle Te_j,f_j\rangle=\langle ABe_j,f_j\rangle=\langle Be_j,A^*f_j\rangle$ [A5], finite Cauchy–Schwarz in $\mathbb C^{F}$ gives $\sum_{j\in F}s_j=\sum_{j\in F}\langle Te_j,f_j\rangle\le(\sum_{j\in F}\|Be_j\|^2)^{1/2}(\sum_{j\in F}\|A^*f_j\|^2)^{1/2}\le\|B\|_{HS,E}\|A^*\|_{HS,G}=\|B\|_{HS,E}\|A\|_{HS,E_0}$, the last inequality because $(e_j)$ is an orthonormal family in $H$ with a Hilbert basis $E$ available so $\sum_{j\in F}\|Be_j\|^2\le\sum_{e\in E}\|Be\|^2$ by Bessel and Parseval [A4], and likewise for $(f_j)$ and $A^*$; the equality is the adjoint-stability of the Hilbert–Schmidt norm [A3]. Taking the supremum over finite $F$ gives $\|T\|_1=\sum_js_j\le\|B\|_{HS,E}\|A\|_{HS,E_0}<+\infty$, so $T$ is trace class with the asserted bound, and $\|T\|\le\|T\|_1$ is [A1]. [A1, A2, A3, A4, A5]

1.2 **The Hilbert–Schmidt norms of the two factors of a trace-class operator.** Assume now that $T$ is trace class and put $B:=|T|^{1/2}$, $A:=U|T|^{1/2}$. First, $B$ is self-adjoint with $B^2=|T|$ and $B$ kills $\ker T$ and preserves $(\ker T)^\perp=[\operatorname{span}\{e_j:j\in J\}]^{\text{closure}}$ [A2], so $Be_j=s_j^{1/2}e_j$ and $|T|e=\sum_js_j\langle e,e_j\rangle e_j$ for every $e\in H$. Hence for the fixed Hilbert basis $E$ of $H$, using Parseval for each $e_j$ and the interchange of nonnegative suprema [A4], $\sum_{e\in E}\|Be\|^2=\sum_{e\in E}\langle |T|e,e\rangle=\sum_{e\in E}\sum_js_j|\langle e,e_j\rangle|^2=\sum_js_j\sum_{e\in E}|\langle e,e_j\rangle|^2=\sum_js_j\|e_j\|^2=\sum_js_j=\|T\|_1<+\infty$, so $B$ is Hilbert–Schmidt relative to $E$ with $\|B\|^2_{HS,E}=\|T\|_1$ [A1]. Second, by [A2] every $B e= |T|^{1/2}e$ lies in $(\ker T)^\perp$, on which $U$ is isometric with values in $\overline{\operatorname{ran}T}$, so $\|Ae\|=\|UBe\|=\|Be\|$ for every $e\in E$; therefore $\sum_{e\in E}\|Ae\|^2=\sum_{e\in E}\|Be\|^2=\|T\|_1$, so $A$ is Hilbert–Schmidt relative to $E$ with $\|A\|^2_{HS,E}=\|T\|_1$ as well. Finally $AB=U|T|^{1/2}|T|^{1/2}=U|T|=T$ by [A2]. [A1, A2, A4, algebra]

2.1 **Conclusion.** Claim 2 is [step 1.1], claim 1 is [step 1.2]; the factorization of [step 1.2] has $H_0=H$ and $E_0=E$ and attains equality $\|A\|_{HS}\|B\|_{HS}=\|T\|_1$ because both norms equal $\|T\|_1^{1/2}$. [step 1.1, step 1.2] ∎

