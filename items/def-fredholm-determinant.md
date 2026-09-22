---
id: def-fredholm-determinant
kind: definition
title: Fredholm determinant of a trace-class operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-trace-class-operator, lem-nuclear-series-characterizes-trace-norm, thm-trace-is-absolutely-convergent-and-basis-independent, thm-orthogonal-decomposition-by-a-closed-subspace, lem-positive-square-root-of-a-compact-positive-operator, def-absolute-value-and-singular-values-of-a-compact-operator, rem-external-separable-trace-class-fredholm-determinant-theorem, thm-sequential-characterization-of-compact-operators]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Aleksey Kostenko, Trace Ideals with Applications — Section 3.4, printed pp. 34–41"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
verification:
  audited: 2026-09-22
---

## Definition

**proof uses external results not yet established in this library**

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a complex
Hilbert space and let $T\in\mathcal S_1(H)$
([[def-trace-class-operator]]). Choose a nuclear representation
$$ Tx=\sum_{j\geq1}\langle x,u_j\rangle v_j,\qquad \sum_{j\geq1}\|u_j\|\,\|v_j\|<\infty, $$
and put $M=\overline{\operatorname{span}}\{u_j,v_j:j\geq1\}$ and
$S=T|_M$. The **Fredholm determinant** of $I+zT$ is
$$
\det_H(I+zT):=D_S(z),
$$
where $D_S$ is the separable determinant recorded in
[[rem-external-separable-trace-class-fredholm-determinant-theorem]]. If
$H=\{0\}$, this definition gives $\det_H(I+zT)=1$.

The well-definedness argument below proves that this restriction preserves the
trace, trace norm, nonzero singular values, and nonzero generalized-eigenvalue
data, and that the resulting determinant is independent of the nuclear
representation and separable reducing support.

## Well-definedness

Nuclear representations exist by
[[lem-nuclear-series-characterizes-trace-norm]]. Finite rational-complex
linear combinations of the vectors $u_j,v_j$ form a countable dense subset of
$M$, so $M$ is separable. If $x\in M^\perp$, every coefficient in the nuclear
series vanishes and $Tx=0$; if $x\in M$, every partial sum and hence $Tx$ lies
in the closed space $M$. Thus, using
[[thm-orthogonal-decomposition-by-a-closed-subspace]],
$$
H=M\oplus M^\perp,\qquad T=S\oplus0.
$$
The restriction $S$ is bounded and compact. Indeed, a bounded sequence in
$M$ is bounded in $H$. Since $T$ is compact, its images have a norm-convergent
subsequence by [[thm-sequential-characterization-of-compact-operators]];
the limit lies in the closed space $M$. The converse direction of that same
characterization makes $S:M\to M$ compact. Full AC supplies its DC hypothesis.
The same nuclear series, now regarded inside $M$, therefore makes $S$ trace
class by [[lem-nuclear-series-characterizes-trace-norm]]. The
nuclear trace formula in
[[thm-trace-is-absolutely-convergent-and-basis-independent]] gives
$\operatorname{tr}_M(S)=\operatorname{tr}_H(T)$.

The block identity gives $T^*T=S^*S\oplus0$. Hence $|S|\oplus0$ is a compact
positive square root of $T^*T$, and uniqueness in
[[lem-positive-square-root-of-a-compact-positive-operator]] gives
$|T|=|S|\oplus0$. Therefore $S$ and $T$ have the same nonzero singular values,
with multiplicities, and $\|S\|_1=\|T\|_1$.

For every $\lambda\neq0$ and $r\geq1$,
$$
(T-\lambda I)^r=(S-\lambda I_M)^r\oplus(-\lambda)^rI_{M^\perp}.
$$
Consequently all generalized $\lambda$-eigenvectors lie in $M$, and $S$ and
$T$ have identical nonzero eigenvalues, generalized kernels, stabilization
indices, and algebraic multiplicities. The external product formula therefore
makes $D_S$ independent of the chosen nuclear representation and of every
separable closed reducing support on whose orthogonal complement $T$ is zero.
No arbitrary invariant subspace is asserted to reduce $T$.
