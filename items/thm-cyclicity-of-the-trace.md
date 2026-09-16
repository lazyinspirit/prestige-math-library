---
id: thm-cyclicity-of-the-trace
kind: theorem
title: Cyclicity of the trace
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-class-iff-product-of-two-hilbert-schmidt-operators, lem-nuclear-series-characterizes-trace-norm, def-trace-of-a-trace-class-operator, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, thm-hilbert-schmidt-operators-form-a-two-sided-ideal, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-bessel-inequality, thm-cauchy-schwarz-in-an-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-square-summable-family-on-an-arbitrary-index-set, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.28 (printed pp. 98–99)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, cyclicity exercises"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]), let
$T\in\mathcal B(H)$ be trace class ([[def-trace-class-operator]]) and let
$S\in\mathcal B(H)$ be bounded. Then $ST$ and $TS$ are trace class and
$$\operatorname{tr}(ST)=\operatorname{tr}(TS) .$$
If $A,B\in\mathcal B(H)$ are Hilbert–Schmidt relative to a supplied Hilbert
basis $E$ of $H$ ([[def-hilbert-schmidt-operator]]), then the products $AB$ and
$BA$ are trace class and
$$\operatorname{tr}(AB)=\operatorname{tr}(BA).$$

## Facts & Assumptions

**Given:** Countable Choice, a Hilbert space $H$, a trace-class $T$, a bounded $S$, and Hilbert–Schmidt $A,B$ relative to a supplied basis $E$.

[A1] **Trace and its properties.** Every trace-class $T$ has a well-defined trace, equal to $\sum_j\langle v_j,u_j\rangle$ for every nuclear representation $Tx=\sum_j\langle x,u_j\rangle v_j$, with $|\operatorname{tr}(T)|\le\|T\|_1$ and linearity in the trace-class variable; $\|T\|_1=\sum_ns_n(T)$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-class-operator]], [[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-of-a-trace-class-operator]]).

[A2] **Trace ideal.** Bounded one-sided multiplication preserves trace class, and $\|STB\|_1\le\|S\|\|T\|_1\|B\|$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A3] **Hilbert–Schmidt products.** With supplied bases $E$ of $H$ (twice), a product of two Hilbert–Schmidt operators is trace class with $\|AB\|_1\le\|A\|_{HS,E}\|B\|_{HS,E}$ ([[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]]).

[A4] **SVD truncations and adjoints.** The truncations $T_n=\sum_{j\le n}s_j\langle\cdot,e_j\rangle f_j$ of the SVD are finite-rank, $\|T-T_n\|_1=\sum_{j>n}s_j\to0$, and $T=\lim_nT_n$ in operator norm; the adjoint identity $\langle Sv,u\rangle=\langle v,S^*u\rangle$ holds ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]], [[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]]).

[A5] **Parseval and absolute convergence.** Parseval's identity holds for supplied Hilbert bases; the finite-subset suprema of nonnegative families may be interchanged; absolutely summable scalar families are summable; and finite Cauchy–Schwarz bounds coefficient sums ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-operator-norm]], [[def-bounded-linear-operator]], [[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the trace-class $T$, bounded $S$, Hilbert–Schmidt $A,B$ relative to $E$.

1.1 **Products are trace class.** $ST$ and $TS$ are trace class by [A2] with $\|ST\|_1\le\|S\|\|T\|_1$ and $\|TS\|_1\le\|S\|\|T\|_1$. [A2]

1.2 **Cyclicity for rank-one operators.** Let $R:=\langle\cdot,u\rangle v$ for fixed $u,v\in H$, so that $R$ is trace class; then $SR=\langle\cdot,u\rangle Sv$ and $RS=\langle\cdot,S^*u\rangle v$ are nuclear representations with one term, so by [A1] $\operatorname{tr}(SR)=\langle Sv,u\rangle$ and $\operatorname{tr}(RS)=\langle v,S^*u\rangle$, and these are equal by the adjoint identity of [A4]. [A1, A4]

1.3 **The Hilbert–Schmidt case.** Let $A,B$ be Hilbert–Schmidt relative to the supplied basis $E$; by [A3] the products $AB$ and $BA$ are trace class. Since $A$ is continuous and $E$ is a Hilbert basis, $\langle ABe,e\rangle=\sum_{k\in E}\langle Be,e_k\rangle\langle Ae_k,e\rangle$ for every $e$, and the double family $\alpha_{k,e}\beta_{k,e}$ with $\alpha_{k,e}:=\langle Ae_k,e\rangle$, $\beta_{k,e}:=\langle Be,e_k\rangle$ has finite total, $\sum_{k,e}|\alpha_{k,e}|\,|\beta_{k,e}|\le\|A\|_{HS,E}\|B\|_{HS,E}$, by two applications of finite Cauchy–Schwarz, Bessel and Parseval [A5]; hence, by absolute convergence and the interchange of the nonnegative suprema [A5], $\operatorname{tr}(AB)=\sum_{e\in E}\sum_{k\in E}\alpha_{k,e}\beta_{k,e}=\sum_{k\in E}\sum_{e\in E}\beta_{k,e}\alpha_{k,e}=\operatorname{tr}(BA)$, the last equality by the symmetric computation for $BA$. [A3, A5, algebra]

2.1 **Cyclicity for general trace-class operators.** Let $T$ be trace class with truncations $T_n$ as in [A4]; each $T_n$ is a finite sum of rank-one operators, so by linearity [A1] and [step 1.2] $\operatorname{tr}(ST_n)=\operatorname{tr}(T_nS)$ for every $n$. Since $\|T-T_n\|_1\to0$ by [A4], [A2] gives $\|S(T-T_n)\|_1\le\|S\|\|T-T_n\|_1\to0$ and $\|(T-T_n)S\|_1\to0$, so by $|\operatorname{tr}(\cdot)|\le\|\cdot\|_1$ from [A1], $|\operatorname{tr}(ST)-\operatorname{tr}(ST_n)|\le\|S(T-T_n)\|_1\to0$ and $|\operatorname{tr}(TS)-\operatorname{tr}(T_nS)|\le\|(T-T_n)S\|_1\to0$; hence $\operatorname{tr}(ST)=\operatorname{tr}(TS)$. [step 1.1, step 1.2, A1, A2, A4]

3.1 **Conclusion.** The general cyclicity statement is [step 2.1] with [step 1.1], and the Hilbert–Schmidt statement is [step 1.3]. [step 1.1, step 1.3, step 2.1] ∎

