---
id: thm-cyclicity-of-the-trace
kind: theorem
title: Cyclicity of the trace
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-class-iff-product-of-two-hilbert-schmidt-operators, lem-nuclear-series-characterizes-trace-norm, def-trace-of-a-trace-class-operator, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, thm-hilbert-schmidt-operators-form-a-two-sided-ideal, thm-hilbert-schmidt-operators-are-compact, def-hilbert-schmidt-operator, lem-compositions-with-a-compact-operator-are-compact, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-bessel-inequality, thm-cauchy-schwarz-in-an-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-square-summable-family-on-an-arbitrary-index-set, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

[A1] **Trace and its properties.** Every trace-class $T$ has a nuclear representation and a well-defined trace. For every supplied Hilbert basis $E$, that trace equals the absolutely convergent diagonal sum $\sum_{e\in E}\langle Te,e\rangle$. It is equal to $\sum_j\langle v_j,u_j\rangle$ for every nuclear representation $Tx=\sum_j\langle x,u_j\rangle v_j$, with $|\operatorname{tr}(T)|\le\|T\|_1$ and linearity in the trace-class variable; $\|T\|_1=\sum_ns_n(T)$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-class-operator]], [[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-of-a-trace-class-operator]]).

[A2] **Trace ideal.** Bounded one-sided multiplication preserves trace class, and $\|STB\|_1\le\|S\|\|T\|_1\|B\|$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A3] **Hilbert–Schmidt products.** An operator which is Hilbert–Schmidt relative to a supplied basis is compact. Thus $A$ and $B$ are compact, and their bounded composites $AB$ and $BA$ are compact; the product clause of the factorization theorem then makes both products trace class and gives $\|AB\|_1,\|BA\|_1\le\|A\|_{HS,E}\|B\|_{HS,E}$ ([[thm-hilbert-schmidt-operators-are-compact]], [[lem-compositions-with-a-compact-operator-are-compact]], [[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]]).

[A4] **SVD and adjoints.** The SVD uses only positive singular-value indices, with numerical zero padding beyond finite rank, and its partial sums converge in operator norm. The adjoint is bounded with $\|S^*\|=\|S\|$, and the identity $\langle Sv,u\rangle=\langle v,S^*u\rangle$ holds ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]], [[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]]).

[A5] **Parseval and absolute convergence.** Parseval's identity holds for supplied Hilbert bases; the finite-subset suprema of nonnegative families may be interchanged; absolutely summable scalar families are summable; and finite Cauchy–Schwarz bounds coefficient sums ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-operator-norm]], [[def-bounded-linear-operator]], [[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the trace-class $T$, bounded $S$, Hilbert–Schmidt $A,B$ relative to $E$.

1.1 **Products are trace class.** $ST$ and $TS$ are trace class by [A2] with $\|ST\|_1\le\|S\|\|T\|_1$ and $\|TS\|_1\le\|S\|\|T\|_1$. [A2]

1.2 **Cyclicity for rank-one operators.** Let $R:=\langle\cdot,u\rangle v$ for fixed $u,v\in H$, so that $R$ is trace class; then $SR=\langle\cdot,u\rangle Sv$ and $RS=\langle\cdot,S^*u\rangle v$ are nuclear representations with one term, so by [A1] $\operatorname{tr}(SR)=\langle Sv,u\rangle$ and $\operatorname{tr}(RS)=\langle v,S^*u\rangle$, and these are equal by the adjoint identity of [A4]. [A1, A4]

1.3 **The Hilbert–Schmidt case.** Write $e_k=k$ for $k\in E$, so that basis elements and indices are unambiguous. Let $A,B$ be Hilbert–Schmidt relative to the supplied basis $E$; by [A3] the products $AB$ and $BA$ are trace class. Since $A$ is continuous and $E$ is a Hilbert basis, $\langle ABe,e\rangle=\sum_{k\in E}\langle Be,e_k\rangle\langle Ae_k,e\rangle$ for every $e$, and the double family $\alpha_{k,e}\beta_{k,e}$ with $\alpha_{k,e}:=\langle Ae_k,e\rangle$, $\beta_{k,e}:=\langle Be,e_k\rangle$ has finite total, $\sum_{k,e}|\alpha_{k,e}|\,|\beta_{k,e}|\le\|A\|_{HS,E}\|B\|_{HS,E}$, by two applications of finite Cauchy–Schwarz, Bessel and Parseval [A5]; For detail, on each finite rectangle $K\times F\subseteq E\times E$, finite Cauchy–Schwarz bounds the absolute sum by $(\sum_{k\in K,e\in F}|\alpha_{k,e}|^2)^{1/2}(\sum_{k\in K,e\in F}|\beta_{k,e}|^2)^{1/2}\le\|A\|_{HS,E}\|B\|_{HS,E}$, using Bessel in the inner sums. Every finite set of pairs lies in a finite rectangle. The full absolute sum is therefore finite; outside a finite rectangle its tail is arbitrarily small by [A5], which proves that both iterated scalar sums have the same value as the double-family sum. Invoking the diagonal trace formula in [A1] for the trace-class products, $\operatorname{tr}(AB)=\sum_{e\in E}\sum_{k\in E}\alpha_{k,e}\beta_{k,e}=\sum_{k\in E}\sum_{e\in E}\beta_{k,e}\alpha_{k,e}=\operatorname{tr}(BA)$, the last equality by the symmetric computation for $BA$. [A1, A3, A5, algebra]

2.1 **Cyclicity for general trace-class operators.** By [A1] take a nuclear representation $Tx=\sum_{j\ge1}\langle x,u_j\rangle v_j$ with $C=\sum_{j\ge1}\|u_j\|\|v_j\|<\infty$ and partial sums $R_n=\sum_{1\le j\le n}\langle\cdot,u_j\rangle v_j$ for $n\in\mathbb N$, so $R_0=0$ and $R_n\to T$ in operator norm. Then $SR_n\to ST$ and $R_nS\to TS$: both errors are at most $\|S\|\|T-R_n\|$ by the operator-norm bound. Their terms give nuclear representations $ST=\sum_j\langle\cdot,u_j\rangle Sv_j$ and $TS=\sum_j\langle\cdot,S^*u_j\rangle v_j$. Their sums of norm products are at most $\|S\|C$ and $\|S^*\|C=\|S\|C$, respectively. Both products are already trace class by step 1.1, so [A1] gives $\operatorname{tr}(ST)=\sum_j\langle Sv_j,u_j\rangle=\sum_j\langle v_j,S^*u_j\rangle=\operatorname{tr}(TS)$ by [A4], term by term in absolutely convergent series. No ambient Hilbert basis is used in this part. [step 1.1, A1, A4, A5]


3.1 **Conclusion.** The general cyclicity statement is [step 2.1] with [step 1.1], and the Hilbert–Schmidt statement is [step 1.3]. [step 1.1, step 1.3, step 2.1] ∎
