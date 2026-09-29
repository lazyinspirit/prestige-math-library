---
id: lem-finite-rank-compressions-converge-in-trace-norm
kind: lemma
title: "Finite-rank orthogonal compressions converge in trace norm"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, def-hilbert-space, def-separable-space, def-real-and-complex-inner-product-space, def-strong-and-weak-operator-topologies, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-orthogonal-projection, def-trace-class-operator, thm-singular-value-decomposition-for-compact-operators, thm-hilbert-space-fourier-expansion, lem-nuclear-series-characterizes-trace-norm, lem-orthogonal-projection-is-linear-self-adjoint-contractive, thm-trace-class-is-a-two-sided-banach-operator-ideal]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, App. B §§B.5–B.6"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: null
---

## Statement

Assume Countable Choice. Let $H$ be a separable complex Hilbert space, let
$T\in\mathcal S_1(H)$ be trace class, and let $(P_n)_{n\ge1}$ be any supplied sequence of
finite-rank orthogonal projections on $H$ such that $P_n\to I$ strongly. Then
$$\|P_nTP_n-T\|_1\longrightarrow0.$$
The projections need not be increasing. For example, the initial projections
onto the first $n$ vectors of a supplied countable orthonormal basis satisfy
the hypothesis.

## Facts & Assumptions

**Given:** Countable Choice, separable complex $H$, trace-class $T\in\mathcal
B(H)$, and the specified finite-rank orthogonal projections $P_n$.

[A1] By the trace-class definition, a trace-class operator is compact
([[def-trace-class-operator]]).

[A2] Every finite-rank operator is trace class, and hence each SVD truncation
$F_N$ is trace class ([[def-trace-class-operator]]).

[A3] Under Countable Choice the singular-value decomposition supplies
orthonormal families $(e_j)$ and $(f_j)$ and the operator-norm convergent
expansion $Tx=\sum_j s_j\langle x,e_j\rangle f_j$; its index set is finite
exactly in the finite-rank case ([[thm-singular-value-decomposition-for-compact-operators]]).

[A4] If a trace-class operator $R$ has a nuclear representation
$R=\sum_j\langle\cdot,u_j\rangle v_j$ converging in operator norm, then
$\|R\|_1\le\sum_j\|u_j\|\,\|v_j\|$
([[lem-nuclear-series-characterizes-trace-norm]]).

[A5] Trace-class operators form a linear space and the trace norm satisfies
the triangle inequality ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A6] For bounded $A,B$ and trace-class $R$,
$\|ARB\|_1\le\|A\|\,\|R\|_1\,\|B\|$
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A7] Each orthogonal projection $P_n$ is self-adjoint
([[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A8] Each orthogonal projection satisfies $\|P_nx\|\le\|x\|$, hence
$\|P_n\|\le1$ ([[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A9] Strong convergence means pointwise norm convergence:
$\|P_nx-x\|\to0$ for every fixed $x\in H$
([[def-strong-and-weak-operator-topologies]]).

[A10] Countable Choice supplies the hypotheses of the trace-class, SVD,
nuclear-series, ideal, orthogonal-projection, and Fourier-expansion results
used below ([[def-countable-choice]]). Its explicit countable basis-selection
use here is through the SVD in [A3], which selects bases of its countably many
finite-dimensional singular eigenspaces; no orthonormal basis of the ambient
$H$ is separately chosen.

[A11] The trace-class singular-value series converges, so its tails tend to
zero ([[def-trace-class-operator]]).

[A12] The complex inner product is linear in its first argument, so for each
positive real $s_j$, $\langle x,s_je_j\rangle=s_j\langle x,e_j\rangle$
([[def-real-and-complex-inner-product-space]]).

[A13] If $(g_j)_{j\ge1}$ is a supplied countable complete orthonormal family,
then the initial Fourier sums $\sum_{j=1}^n\langle x,g_j\rangle g_j$ converge
to each $x$ in norm ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[thm-hilbert-space-fourier-expansion]]).

[A14] The orthogonal projection onto a closed subspace is characterized by
$P_Mx\in M$ and $x-P_Mx\in M^\perp$
([[def-hilbert-orthogonal-projection]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the statement and facts [A1]–[A14].

1.1 By [A1]–[A3] and [A10], write the SVD of $T$ and let $J$ be its positive-singular-value index set. For $N\ge0$ set $F_N=\sum_{j\in J,\ j\le N}s_j\langle\cdot,e_j\rangle f_j$, with $F_0=0$. Since $F_N$ is trace class by [A2], [A5] makes $R_N:=T-F_N$ trace class; the SVD gives the operator-norm convergent nuclear tail $R_N=\sum_{j\in J,\ j>N}\langle\cdot,s_je_j\rangle f_j$, so [A4] gives $\|R_N\|_1\le\sum_{j>N}s_j\to0$ by [A11]. If $T$ has finite rank $r$, then $R_N=0$ for $N\ge r$; when $T=0$ or $H=\{0\}$ the sum is empty and $F_N=R_N=0$. [A1, A2, A3, A4, A5, A10, A11]

1.2 For the stated basis example, let $(g_j)_{j\ge1}$ be the supplied complete orthonormal basis and let $P_n$ project onto $M_n:=\operatorname{span}\{g_1,\ldots,g_n\}$. The sum $s_n:=\sum_{j=1}^n\langle x,g_j\rangle g_j$ lies in $M_n$, and orthonormality plus [A12] gives $x-s_n\in M_n^\perp$, so [A14] gives $s_n=P_nx$; now [A13] yields $P_nx\to x$. [A10, A12, A13, A14]

2.1 Fix $N$ and the finite SVD sum $F_N$ from step 1.1; by [A12] write it as $F_N=\sum_{j\in J,\ j\le N}\langle\cdot,u_j\rangle v_j$, where $u_j=s_je_j$ and $v_j=f_j$. Self-adjointness in [A7] gives $P_nF_NP_n=\sum_j\langle\cdot,P_nu_j\rangle P_nv_j$, so $P_nF_NP_n-F_N=\sum_j\bigl(\langle\cdot,P_nu_j\rangle(P_nv_j-v_j)+\langle\cdot,P_nu_j-u_j\rangle v_j\bigr)$. This finite nuclear representation and [A4] bound its trace norm by $\sum_{j\in J,\ j\le N}(\|P_nu_j\|\,\|P_nv_j-v_j\|+\|P_nu_j-u_j\|\,\|v_j\|)$, which tends to zero by [A8]–[A9] and finiteness of the sum. Thus $\|P_nF_NP_n-F_N\|_1\to0$ for each fixed $N$, including the empty sum when $N=0$ or $T=0$. [A4, A7, A8, A9, A10, A12, step 1.1]

3.1 For every $n,N$, the residual $R_N$ from step 1.1 satisfies $\|P_nR_NP_n\|_1\le\|P_n\|^2\|R_N\|_1\le\|R_N\|_1$ by [A6] and [A8]. Decomposing $P_nTP_n-T=P_nR_NP_n+(P_nF_NP_n-F_N)-R_N$ using step 2.1, and applying [A5]'s trace-norm triangle inequality, yields $\|P_nTP_n-T\|_1\le2\|R_N\|_1+\|P_nF_NP_n-F_N\|_1$. All terms are trace class by [A5]–[A6]. [A5, A6, A8, A10, step 1.1, step 2.1]

4.1 Given $\varepsilon>0$, choose $N$ by step 1.1 so that $\|R_N\|_1<\varepsilon/4$. For this fixed $N$, step 2.1 gives an index $n_0$ such that $\|P_nF_NP_n-F_N\|_1<\varepsilon/2$ for every $n\ge n_0$. Step 3.1 then gives $\|P_nTP_n-T\|_1<\varepsilon$ for every $n\ge n_0$, proving the claim. Countable Choice is the stated hypothesis of the trace-class, nuclear-series, ideal, orthogonal-projection, Fourier-expansion, and SVD suppliers in [A10]; the explicit countable basis selection used here is the SVD construction in [A3]. [A3, A10, step 1.1, step 2.1, step 3.1] ∎
