---
id: prop-fredholm-determinant-properties-for-trace-class-operators
kind: proposition
title: Fredholm determinant properties for trace-class operators
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-fredholm-determinant, lem-arbitrary-hilbert-fredholm-determinant-from-separable-support, lem-fredholm-determinant-trace-norm-continuity-and-growth, lem-fredholm-determinant-zeros-and-algebraic-multiplicities, lem-fredholm-determinant-logarithmic-derivative, lem-separable-trace-class-determinant-construction, lem-weyl-eigenvalue-singular-value-inequalities, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-absolute-value-and-singular-values-of-a-compact-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  precheck: pass
sources:
  references:
    - title: "Aleksey Kostenko, Trace Ideals with Applications — Sections 3.4–3.5, printed pp. 34–45"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and
$T\in\mathcal S_1(H)$. The function $D_T(z)=\det_H(I+zT)$ is entire and,
locally uniformly in $z$,
$$
D_T(z)=\prod_j(1+z\lambda_j(T)),
$$
where all nonzero eigenvalues are listed with their finite algebraic
multiplicities, and $\sum_j|\lambda_j(T)|\leq\|T\|_1$. It satisfies
$$
D_T(0)=1,\qquad D_T'(0)=\operatorname{tr}_H(T),
$$
$$
|D_T(z)|\leq\prod_j(1+|z|s_j(T))\leq e^{|z|\|T\|_1},
$$
and for every $\varepsilon>0$ there is $C_\varepsilon$ such that
$|D_T(z)|\leq C_\varepsilon e^{\varepsilon|z|}$. For trace-class $A,B$,
$$ |D_A(z)-D_B(z)|\leq |z|\|A-B\|_1 e^{1+|z|\|A\|_1+|z|\|B\|_1}, $$
and
$$
\det_H(I+A+B+AB)=\det_H(I+A)\det_H(I+B).
$$
Moreover $D_T(z)=0$ exactly when $I+zT$ is not boundedly invertible, and the
zero at $-1/\lambda$ has the algebraic multiplicity of $\lambda\neq0$.

If finite-rank $T_n$ converge to $T$ in trace norm, their ordinary
finite-dimensional determinants converge to $D_T$ locally uniformly. Where
$I+zT$ is invertible,
$$
D_T'(z)=D_T(z)\operatorname{tr}_H\bigl(T(I+zT)^{-1}\bigr).
$$
All assertions include $H=\{0\}$, finite eigenvalue lists and the empty list.

## Facts & Assumptions

**Given:** The Axiom of Choice, a complex Hilbert space $H$, and the displayed
trace-class operators.

[F1] The determinant is defined through a separable reducing support; its
value is independent of the support, entire and normalized, and equals the
locally uniform product over the nonzero eigenvalues with algebraic
multiplicity. Finite-rank values are ordinary finite-dimensional determinants
([[def-fredholm-determinant]],
[[lem-arbitrary-hilbert-fredholm-determinant-from-separable-support]]).

[F2] On a separable complex Hilbert space the local determinant satisfies
$D_S'(0)=\operatorname{tr}(S)$
([[lem-separable-trace-class-determinant-construction]]).

[F3] On a separable complex Hilbert space the eigenvalue absolute sum is at
most the trace norm, with algebraic multiplicities
([[lem-weyl-eigenvalue-singular-value-inequalities]]).

[F4] On a separable complex Hilbert space the local determinant satisfies
the singular-value product and exponential bounds, minimal exponential type,
the displayed trace-norm continuity estimate, multiplicativity at $z=1$,
and locally uniform convergence of finite-rank determinants in trace norm
([[lem-fredholm-determinant-trace-norm-continuity-and-growth]]).

[F5] On a separable complex Hilbert space, the local determinant vanishes
exactly when $I+zS$ is not boundedly invertible, and its zero at
$-1/\lambda$ has order $m_{\rm alg}(\lambda;S)$
([[lem-fredholm-determinant-zeros-and-algebraic-multiplicities]]).

[F6] On a separable complex Hilbert space, at every invertibility point,
$D_S'(z)=D_S(z)\operatorname{tr}(S(I+zS)^{-1})$
([[lem-fredholm-determinant-logarithmic-derivative]]).

[F7] Trace-class operators form a linear two-sided ideal, their trace norm
is a norm, and singular values are the positive eigenvalues of $|T|$
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[F8] The trace is basis-independent and agrees with every nuclear trace sum
([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Proof

**Proof technique:** direct.

1.1 Choose a nuclear support $M$ from [F1] and write $H=M\oplus M^\perp$ and $T=S\oplus0$. The nuclear trace formula gives $\operatorname{tr}_H(T)=\operatorname{tr}_M(S)$: the same nuclear vectors lie in $M$, so their scalar inner products are unchanged. The block identity $T^*T=S^*S\oplus0$ and uniqueness of the compact positive square root, as established in [[def-fredholm-determinant]], give $|T|=|S|\oplus0$. Thus $T$ and $S$ have the same nonzero singular values, including multiplicity, and $\|T\|_1=\|S\|_1$. For each $\lambda\ne0$, $(T-\lambda I)^r=(S-\lambda I_M)^r\oplus(-\lambda)^rI_{M^\perp}$; hence their nonzero eigenvalues and algebraic multiplicities agree. [F1, F7, F8, given]

2.1 By [F1], $D_T=D_S$ is entire, normalized, and has the stated locally uniform spectral product. Applying [F3] to $S$ and step 1.1 gives $\sum_j|\lambda_j(T)|\le\|T\|_1$. Applying [F2] gives $D_T'(0)=D_S'(0)=\operatorname{tr}_M(S)=\operatorname{tr}_H(T)$. The singular-value product, exponential bound and minimal exponential type in [F4] transfer from $S$ using the same singular-value list and trace norm. This also covers finite and empty lists. [F1, F2, F3, F4, step 1.1]

2.2 For each $z$, $I+zT=(I_M+zS)\oplus I_{M^\perp}$. It has a bounded inverse exactly when $I_M+zS$ does, because the inverse of a block diagonal operator is the block inverse and restriction of a bounded inverse to the reducing summand is bounded. The generalized kernels in step 1.1 preserve algebraic multiplicity. Hence [F5] gives both directions of the stated zero criterion and the exact zero order at $-1/\lambda$. If $I+zT$ is invertible, its inverse is $(I_M+zS)^{-1}\oplus I_{M^\perp}$; consequently $T(I+zT)^{-1}=S(I_M+zS)^{-1}\oplus0$. The same nuclear trace formula as step 1.1 equates these traces, so [F6] gives the displayed logarithmic derivative. [F1, F5, F6, F8, step 1.1]

2.3 For trace-class $A,B$ on $H$, take nuclear representations for both and let $N$ be the closed span of all their input and output vectors. The finite union of the two countable vector lists has a countable dense set of finite Gaussian-rational combinations; the support proof in [F1] shows $N$ is separable and reduces both operators, with $A=A_N\oplus0$ and $B=B_N\oplus0$. By [F7], $C:=A+B+AB$ is trace class and $C=(A_N+B_N+A_NB_N)\oplus0$; the same $N$ supports $A-B$. The block singular-value argument of step 1.1 gives $\|A-B\|_1=\|A_N-B_N\|_1$ and $\|A\|_1=\|A_N\|_1$, $\|B\|_1=\|B_N\|_1$. Apply the separable continuity estimate and multiplicativity in [F4] on $N$, and use support independence in [F1] for all three determinants. These are exactly the displayed arbitrary-space formulas, including the same numerical exponential constant. [F1, F4, F7, step 1.1]

2.4 Suppose finite-rank $T_n\to T$ in trace norm. AC chooses nuclear representations for $T$ and the countable family $(T_n)$; taking the closed span of every input and output vector gives one separable reducing support $N$ for all of them. Their restrictions $S_n,S$ obey $\|S_n-S\|_1=\|T_n-T\|_1\to0$ by the block singular-value argument of step 1.1. Apply the locally uniform finite-rank approximation in [F4] on $N$. By [F1], $D_{S_n}=D_{T_n}$ and each is the ordinary determinant on any finite-dimensional subspace containing $\operatorname{ran}T_n$; the same support lemma shows independence of that subspace. Therefore those ordinary determinants converge locally uniformly to $D_S=D_T$. [F1, F4, step 1.1]

3.1 If $H=\{0\}$ or $T=0$, [F1] gives $D_T\equiv1$, its derivative and trace are zero, and the product and singular-value lists are empty. For $z=0$, normalization holds, and the logarithmic-derivative formula follows from step 2.1. A finite-rank operator is covered by [F1] and step 2.4. Full AC supplies the separable-support and AC-qualified spectral suppliers and permits the countable family of nuclear representations in step 2.4; its Countable Choice consequence supplies [F2], [F4] and [F6]. Both directions of the zero criterion were established in step 2.2. [F1, F2, F4, F5, F6, step 2.1, step 2.2, step 2.4] ∎
