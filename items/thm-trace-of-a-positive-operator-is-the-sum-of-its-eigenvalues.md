---
id: thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
kind: theorem
title: Trace of a positive operator is the sum of its eigenvalues
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-trace-is-absolutely-convergent-and-basis-independent, lem-nuclear-series-characterizes-trace-norm, thm-singular-value-decomposition-for-compact-operators, def-absolute-value-and-singular-values-of-a-compact-operator, lem-positive-square-root-of-a-compact-positive-operator, thm-spectral-theorem-for-compact-self-adjoint-operators, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, def-self-adjoint-positive-unitary-and-normal-operator, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-trace-class-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-real-and-complex-inner-product-space, def-hilbert-space, def-metric-convergence, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, positive trace and the eigenvalue sum (printed pp. 97–100)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be a **self-adjoint positive** trace-class operator
([[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-trace-class-operator]]), so that $\langle Tx,x\rangle\ge0$ for every
$x\in H$. Let $\lambda_1\ge\lambda_2\ge\cdots>0$ be the positive eigenvalues of
$T$ listed with multiplicity
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) and let
$(s_n(T))_{n\ge1}$ be the zero-padded singular-value sequence
([[def-absolute-value-and-singular-values-of-a-compact-operator]]). Then
$s_n(T)=\lambda_n$ for every $n$, and
$$\operatorname{tr}(T)=\sum_{n\ge1}\lambda_n=\|T\|_1 ,$$
where the sum is over the positive eigenvalues with multiplicity and the
equalities are also valid in the finite-rank case (then $\lambda_n:=0$ for
$n$ beyond the rank). This is the positive compact self-adjoint case only; it is
**not** Lidskii's theorem for arbitrary trace-class operators, which is not
claimed here.

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert space $H$, a self-adjoint positive trace-class $T$, its positive eigenvalues $\lambda_n$ with multiplicity and eigenspaces $E_\lambda$.

[A1] **Spectral theorem.** $T$ is compact self-adjoint; its positive eigenvalues have finite-dimensional eigenspaces, the closed linear span of those eigenspaces is $(\ker T)^\perp=\overline{\operatorname{ran}T}$, $H=(\ker T)^\perp\oplus\ker T$, and $Tx=\sum_{\lambda>0}\lambda P_\lambda x$ in norm, where $P_\lambda$ is the orthogonal projection onto $E_\lambda$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[A2] **Positivity forces nonnegative eigenvalues.** If $Tv=\mu v$ with $v\ne0$ then $\mu\|v\|^2=\langle Tv,v\rangle\ge0$, so $\mu\ge0$; and $T$ is self-adjoint with $T^2=T^*T$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]], [[def-real-and-complex-inner-product-space]]).

[A3] **Absolute value of a positive operator.** For compact self-adjoint positive $T$ one has $|T|=(T^*T)^{1/2}=(T^2)^{1/2}=T$, by uniqueness of the compact positive square root applied to the compact self-adjoint positive operator $T$ satisfying $T^2=T^*T$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]], [[lem-positive-square-root-of-a-compact-positive-operator]]).

[A4] **SVD and trace.** The singular values of $T$ are the positive eigenvalues of $|T|$ with multiplicity; the SVD gives orthonormal $(e_j)_{j\in J}$ in $(\ker T)^\perp$ with $|T|e_j=s_je_j$ and $Te_j=s_jf_j$; the trace of a trace-class operator is $\sum_j\langle v_j,u_j\rangle$ for every nuclear representation $Tx=\sum_j\langle x,u_j\rangle v_j$, and $\|T\|_1=\sum_ns_n(T)$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]], [[thm-singular-value-decomposition-for-compact-operators]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-class-operator]], [[lem-nuclear-series-characterizes-trace-norm]]).

[A5] **Orthonormal bases of eigenspaces.** Every finite-dimensional eigenspace $E_\lambda$ has an orthonormal basis, and orthonormal families consist of unit pairwise orthogonal vectors ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the self-adjoint positive trace-class $T$, its positive eigenvalues with multiplicity and their eigenspaces.

1.1 **$|T|=T$.** By [A2] $T$ is self-adjoint with $T^2=T^*T$, so the compact self-adjoint positive operator $T$ satisfies $T^2=T^*T$; since the positive square root of a compact self-adjoint positive operator is unique by [A3], and $(T^2)^{1/2}=T$ because $T\ge0$, the definition $|T|=(T^*T)^{1/2}$ yields $|T|=T$. [A2, A3]

2.1 **The singular values are the positive eigenvalues.** By [A1] and [A2] the eigenvalues of $T$ are nonnegative, its positive eigenvalues are exactly the nonzero eigenvalues, and listing them with multiplicity as $\lambda_1\ge\lambda_2\ge\cdots>0$ matches the nonincreasing listing of the positive eigenvalues of $|T|=T$ with multiplicity required by [step 1.1]; hence $s_n(T)=\lambda_n$ for every $n$, with zeros appended once the positive eigenvalues are exhausted (the finite-rank case), and $\|T\|_1=\sum_n\lambda_n$. [step 1.1, A1, A2, A4]

3.1 **The trace equals the eigenvalue sum.** For each positive eigenvalue $\lambda$ choose an orthonormal basis of $E_\lambda$ by [A5]; the union over the positive eigenvalues is an orthonormal family $(g_j)_{j\in J}$ whose closed span is $(\ker T)^\perp$ by [A1] and [A5]. Since $|T|=T$ by [step 1.1], the SVD of $T$ has $e_j=g_j$, $s_j=\lambda_j$ and $f_j=s_j^{-1}Te_j=\lambda_j^{-1}\lambda_jg_j=g_j$; hence $T=\sum_{j\in J}\lambda_j\langle\cdot,g_j\rangle g_j=\sum_{j\in J}\langle\cdot,\lambda_jg_j\rangle g_j$ is a nuclear representation with nuclear sum $\sum_{j\in J}\lambda_j=\|T\|_1<+\infty$, and the trace formula of [A4] with $u_j=\lambda_jg_j$, $v_j=g_j$ gives $\operatorname{tr}(T)=\sum_{j\in J}\langle g_j,\lambda_jg_j\rangle=\sum_{j\in J}\lambda_j\|g_j\|^2=\sum_{j\in J}\lambda_j$. [step 1.1, step 2.1, A1, A4, A5]

4.1 **Conclusion.** Steps 2.1 and 3.1 give $s_n(T)=\lambda_n$ and $\operatorname{tr}(T)=\sum_n\lambda_n=\|T\|_1$; the computation never chooses a basis of $\ker T$, only orthonormal bases of the finite-dimensional positive eigenspaces, and the identity is stated for self-adjoint positive operators only, as the statement records. [step 2.1, step 3.1, A1, A4] ∎
