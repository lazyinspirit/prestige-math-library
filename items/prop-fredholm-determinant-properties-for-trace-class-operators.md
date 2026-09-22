---
id: prop-fredholm-determinant-properties-for-trace-class-operators
kind: proposition
title: Fredholm determinant properties for trace-class operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-fredholm-determinant, rem-external-separable-trace-class-fredholm-determinant-theorem, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-absolute-value-and-singular-values-of-a-compact-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Aleksey Kostenko, Trace Ideals with Applications — Sections 3.4–3.5, printed pp. 34–45"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
---

## Statement

**proof uses external results not yet established in this library**

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

[F1] The arbitrary-space determinant is well defined through a separable
reducing support and preserves trace, trace norm, nonzero singular values, and
nonzero generalized-eigenvalue data ([[def-fredholm-determinant]]).

[F2] The separable determinant has the absolute eigenvalue bound
$\sum_j|\lambda_j|\leq\|T\|_1$, spectral product, growth, continuity,
multiplicativity, derivative-at-zero and zero-multiplicity properties recorded
externally
([[rem-external-separable-trace-class-fredholm-determinant-theorem]]).

[F3] Trace-class operators form a two-sided ideal
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F4] The trace is basis-independent and agrees with every nuclear trace sum
([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Proof

**Proof technique:** direct.

1.1 Choose the separable reducing support from [F1]. Its restriction has the same trace, trace norm, nonzero singular values and algebraic eigenvalue data as $T$. Every single-operator assertion in the first paragraph, including the zero criterion and zero order, therefore transfers term by term from [F2]. The block identity $I+zT=(I_M+zS)\oplus I_{M^\perp}$ also proves the equivalence of bounded invertibility. [F1, F2, F4, given]

1.2 For trace-class $A,B$, take one separable closed span of nuclear vectors for both. It reduces $A$, $B$, $A+B+AB$ and all three operators vanish on its orthogonal complement; [F3] supplies the trace-class hypotheses. Apply the external multiplicativity and continuity formulas on this common support and then [F1] to obtain the displayed arbitrary-space formulas. [F1, F2, F3, given, algebra]

1.3 If finite-rank $T_n\to T$ in trace norm, full AC chooses nuclear representations for the countable family. The closed span of all their input and output vectors and those for $T$ is a common separable reducing support. The block argument in [F1] preserves the trace norm of every difference $T_n-T$, so the locally uniform finite-rank limit in [F2] applies. For a finite-rank $F$, any finite-dimensional $E\supseteq\operatorname{ran}F$ is invariant under $I+zF$, and enlargement adds an identity diagonal block; hence the ordinary determinant is independent of $E$. [F1, F2, F3, given, algebra]

2.1 Fix $z_0$ with $I+z_0T$ invertible and put $B=(I+z_0T)^{-1}T$, which is trace class by [F3]. Since $I+(z_0+h)T=(I+z_0T)(I+hB)$, step 1.2 gives $D_T(z_0+h)=D_T(z_0)D_B(h)$. Steps 1.1 and [F2] give $D_B(h)=1+h\operatorname{tr}_H(B)+o(h)$. Dividing by $h$ and taking the limit gives $D_T'(z_0)=D_T(z_0)\operatorname{tr}_H(B)$. The operator $T$ commutes with $I+z_0T$ and its inverse, so $B=T(I+z_0T)^{-1}$. The zero-space and empty-list conventions follow from [F1] and [F2]. [F1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎
