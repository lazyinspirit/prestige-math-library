---
id: ex-rank-one-operator-adjoint-norm-and-trace
kind: example
title: Adjoint, norm and trace of an operator of rank at most one
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, thm-cauchy-schwarz-in-an-inner-product-space, lem-finite-rank-operators-are-compact, thm-singular-value-decomposition-for-compact-operators, def-absolute-value-and-singular-values-of-a-compact-operator, lem-positive-square-root-of-a-compact-positive-operator, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-trace-is-absolutely-convergent-and-basis-independent, lem-nuclear-series-characterizes-trace-norm, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, lem-composition-operator-norm-inequality, def-real-and-complex-inner-product-space, def-orthogonality-and-orthogonal-complement, def-countable-choice, lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]
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
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, rank-one operators"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space with the pairing linear in the first argument
([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]), let
$u,v\in H$ and let
$$T:=T_{u,v}\in\mathcal B(H),\qquad Tx:=\langle x,v\rangle u .$$
Then:

1. the Hilbert adjoint is $T^*x=\langle x,u\rangle v$
   ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]);
2. $\|T\|=\|u\|\,\|v\|$ ([[def-operator-norm]]);
3. $T$ is trace class ([[def-trace-class-operator]]); if $u\ne0$ and $v\ne0$ its
   singular values are $s_1(T)=\|u\|\,\|v\|$ and $s_n(T)=0$ for $n\ge2$, so it
   has exactly one nonzero singular value, and $\|T\|_1=\|u\|\,\|v\|$; if $u=0$
   or $v=0$ then $T=0$ and all singular values vanish;
4. $\operatorname{tr}(T)=\langle u,v\rangle$
   ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert space $H$, vectors $u,v\in H$ and the operator of rank at most one $T=\langle\cdot,v\rangle u$.

[A1] **Pairing and adjoint.** The pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric with $\langle w,w\rangle=\|w\|^2\ge0$; the Hilbert adjoint is characterised by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ and satisfies $T^{**}=T$, $(ST)^*=T^*S^*$ ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]], [[def-hilbert-space]]).

[A2] **Cauchy–Schwarz and norm.** $|\langle x,v\rangle|\le\|x\|\|v\|$, and the operator norm is the unit-ball supremum ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-operator-norm]], [[def-bounded-linear-operator]]).

[A3] **Compactness and spectral data.** Every bounded finite-rank operator is compact ([[lem-finite-rank-operators-are-compact]]). A nonzero compact self-adjoint positive operator has a largest eigenvalue equal to its norm with unit eigenvector, its nonzero eigenvalues are positive with finite multiplicities accumulating only at $0$, its closed span is $(\ker\cdot)^\perp$, and the positive square root is unique; the singular values of a compact operator are the positive eigenvalues of $|T|$ with multiplicity, in nonincreasing order with zero padding ([[lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-positive-square-root-of-a-compact-positive-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]], [[thm-singular-value-decomposition-for-compact-operators]]).

[A4] **Trace machinery.** A compact operator with $\sum_ns_n<+\infty$ is trace class with $\|T\|_1=\sum_ns_n$; for a nuclear representation $T=\sum_j\langle\cdot,u_j\rangle v_j$ the trace is $\sum_j\langle v_j,u_j\rangle$, independently of the representation, and $|\operatorname{tr}(T)|\le\|T\|_1$ ([[def-trace-class-operator]], [[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-of-a-trace-class-operator]]).

## Verification

**Proof technique:** direct.

**Given:** Countable Choice, the vectors $u,v$, the operator $T=\langle\cdot,v\rangle u$, and the candidate $T^*:=\langle\cdot,u\rangle v$.

1.1 **The adjoint.** The candidate is linear by first-variable linearity and bounded by $\|\langle x,u\rangle v\|\le\|u\|\|v\|\|x\|$ using [A2]. For all $x,y\in H$, $\langle Tx,y\rangle=\langle\langle x,v\rangle u,y\rangle=\langle x,v\rangle\langle u,y\rangle$ and $\langle x,T^*y\rangle=\langle x,\langle y,u\rangle v\rangle=\overline{\langle y,u\rangle}\langle x,v\rangle=\langle u,y\rangle\langle x,v\rangle$ by conjugate symmetry [A1]; the two expressions agree, so by uniqueness of the Hilbert adjoint $T^*=\langle\cdot,u\rangle v$. [A1, A2]

1.2 **The norm.** For every $x$, $\|Tx\|=|\langle x,v\rangle|\,\|u\|\le\|u\|\|v\|\|x\|$ by [A2], so $\|T\|\le\|u\|\|v\|$; if $v\ne0$ then testing $x=v/\|v\|$ gives $\|Tx\|=\|v\|\|u\|$, whence equality, and if $v=0$ then $T=0$ and both sides are $0$. [A1, A2, algebra]

2.1 **The singular value.** The range of $T$ is contained in $\operatorname{span}\{u\}$, when $u,v\ne0$, $T(v/\|v\|^2)=u$, so its range has ordered basis $(u)$; if either vector is zero its range has the empty basis. Thus the bounded operator $T$ has finite rank and is compact by [A3]. Compute $T^*Tx=\langle x,v\rangle\|u\|^2v$ using [step 1.1] and conjugate linearity in the second argument [A1]; hence $T^*T=\|u\|^2\|v\|^2P$ where $P:=\langle\cdot,v/\|v\|\rangle\,v/\|v\|$ is the orthogonal projection onto $\operatorname{span}\{v\}$ when $v\ne0$, and put $P=0$ when $v=0$, so the displayed formula holds in that case too. For $v\ne0$, writing $e=v/\|v\|$ gives $P^2=P$, $P^*=P$ and $\langle Px,x\rangle=|\langle x,e\rangle|^2\ge0$ directly from [A1]. The operator $S:=\|u\|\,\|v\|P$ is bounded by [A2] and has the one-vector range basis $(v)$ when $u,v\ne0$, otherwise the empty range basis. It is therefore compact by [A3], and is self-adjoint and positive with $S^2=T^*T$, so $|T|=S$ by uniqueness of the positive square root [A3]; its nonzero eigenvalues are the single number $\|u\|\|v\|$ with multiplicity one when $u,v\ne0$, and there are none when $u=0$ or $v=0$. By [A3] the singular values of $T$ are exactly this data, and [A4] gives $\|T\|_1=\|u\|\,\|v\|<+\infty$, so $T$ is trace class. [step 1.1, A1, A2, A3, A4, algebra]

3.1 **The trace.** Assume $u,v\ne0$ (otherwise $T=0$ and the trace is $0=\langle u,v\rangle$). Then, writing $e:=v/\|v\|$ and $s:=\|u\|\|v\|$, the identity $Tx=s\langle x,e\rangle\,(u/\|u\|)$ exhibits $T$ as the positive-integer-indexed nuclear representation with $u_1:=e$, $v_1:=s\,u/\|u\|=\|v\|u$ and $u_j=v_j=0$ for $j\ge2$. Its zero-based partial-sum sequence has $R_0=0$ and $R_m=T$ for every $m\ge1$, so it converges to $T$ exactly as required by [A4]. Therefore $\operatorname{tr}(T)=\langle v_1,u_1\rangle=\langle\|v\|u,v/\|v\|\rangle=\langle u,v\rangle$, since scalar multiplication in the first argument and conjugate-linearity in the second give $\langle\|v\|u,v/\|v\|\rangle=\|v\|\,\overline{\|v\|^{-1}}\langle u,v\rangle=\langle u,v\rangle$. [step 2.1, A1, A4, algebra]

4.1 **Conclusion.** Claims 1–4 are [step 1.1], [step 1.2], [step 2.1] and [step 3.1]; in the degenerate cases $u=0$ or $v=0$ the operator is $0$ with $\|T\|=\|T\|_1=0$ and $\operatorname{tr}(T)=0=\langle u,v\rangle$. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
