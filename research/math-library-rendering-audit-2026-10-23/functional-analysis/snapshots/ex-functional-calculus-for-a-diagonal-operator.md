---
id: ex-functional-calculus-for-a-diagonal-operator
kind: example
title: Functional calculus for a diagonal operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-normal-operators, def-axiom-of-choice, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-spectrum-and-resolvent-of-a-bounded-operator, def-operator-norm, def-hilbert-space, thm-continuous-functional-calculus-properties, def-self-adjoint-positive-unitary-and-normal-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $(\lambda_n)_{n\in\mathbb N}$ be a bounded complex sequence and let $T$ be the diagonal operator $Te_n=\lambda_ne_n$ on $\ell^2(\mathbb N;\mathbb C)$, where $(e_n)$ is the standard orthonormal basis. Then $\sigma(T)=\overline{\{\lambda_n:n\in\mathbb N\}}$ and $f(T)e_n=f(\lambda_n)e_n$ for every continuous $f$ on $\sigma(T)$.

## Facts & Assumptions

[A1] $\ell^2(\mathbb N;\mathbb C)$ is the space of square-summable families with $\langle x,y\rangle=\sum_nx_n\overline{y_n}$; the vectors $e_n$ form an orthonormal family with $\langle x,e_n\rangle=x_n$, and the space is complete, hence a Hilbert space ([[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-hilbert-space]]).

[A2] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a bounded operator that is not bounded below has no bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-operator-norm]]).

[A3] For normal $T$ with a nonzero eigenvector $x$ satisfying $Tx=\lambda x$, one has $\lambda\in\sigma(T)$ and, for every $f\in C(\sigma(T))$, $f(T)x=f(\lambda)x$ ([[thm-continuous-functional-calculus-properties]], [[thm-continuous-functional-calculus-for-bounded-normal-operators]]).

[A4] AC is the hypothesis of the calculus supplier ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A bounded complex sequence $(\lambda_n)$ with $M:=\sup_n|\lambda_n|<\infty$ and the diagonal operator $Tx=(\lambda_nx_n)$ on $\ell^2(\mathbb N;\mathbb C)$.

1.1 The formula $Tx=(\lambda_nx_n)$ defines a linear bounded operator with $\|Tx\|_2^2=\sum_n|\lambda_nx_n|^2\le M^2\|x\|_2^2$, so $\|T\|\le M$ and $Te_n=\lambda_ne_n$; moreover $\|T\|\ge\sup_n|\lambda_n|=M$ because $\|Te_n\|=|\lambda_n|$, so $\|T\|=M$. [A1, A2]

1.2 $T$ is normal: $T^*y=(\overline{\lambda_n}y_n)$, since $\langle Tx,y\rangle=\sum_n\lambda_nx_n\overline{y_n}=\sum_nx_n\overline{\lambda_ny_n}$, and therefore $T^*T=TT^*$ is the diagonal operator with entries $|\lambda_n|^2$. [A1, algebra]

2.1 $\sigma(T)=\overline{\{\lambda_n\}}$: if $z\notin\overline{\{\lambda_n\}}$ then $\delta:=\inf_n|z-\lambda_n|>0$, the diagonal operator $S$ with entries $1/(z-\lambda_n)$ is bounded with $\|S\|\le1/\delta$, and $S(zI-T)=(zI-T)S=I$, so $z\in\rho(T)$; if $z\in\overline{\{\lambda_n\}}$ choose $n_k$ with $\lambda_{n_k}\to z$, so $\|(T-zI)e_{n_k}\|=|\lambda_{n_k}-z|\to0$, whence $T-zI$ is not bounded below and lies in $\sigma(T)$. [step 1.1, step 1.2, A2]

3.1 For $f\in C(\sigma(T))$ and each $n$, the basis vector $e_n$ is an eigenvector of the normal operator $T$ at $\lambda_n\in\sigma(T)$, so $f(T)e_n=f(\lambda_n)e_n$. [step 2.1, A3]

4.1 Hence $\sigma(T)=\overline{\{\lambda_n\}}$ and the calculus acts diagonally on the standard basis, as asserted. [step 2.1, step 3.1, A4] ∎
