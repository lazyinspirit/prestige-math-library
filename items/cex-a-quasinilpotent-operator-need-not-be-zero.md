---
id: cex-a-quasinilpotent-operator-need-not-be-zero
kind: counterexample
title: A quasinilpotent operator need not be zero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normal-operator-with-zero-spectrum-is-zero, def-axiom-of-choice, def-spectrum-and-resolvent-of-a-bounded-operator, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement refuted

Assume AC. Every nonzero bounded operator has nonzero spectrum; equivalently, vanishing of the spectrum forces an operator to be zero.

## Facts & Assumptions

[A1] A nonzero normal operator with spectrum $\{0\}$ is zero ([[cor-normal-operator-with-zero-spectrum-is-zero]]).

[A2] $T$ is normal when $T^*T=TT^*$, and $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A3] The adjoint is characterised by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ and depends conjugate-linearly on the entries of a matrix in an orthonormal basis ([[thm-hilbert-adjoint-properties]]).

[A4] AC is the hypothesis of the zero-spectrum corollary ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** The two-dimensional complex inner-product space with orthonormal basis $(e_1,e_2)$ and the Jordan block $J=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, so $Je_1=0$, $Je_2=e_1$.

1.1 $J^2=0$ and $J\ne0$, and $zI-J$ is invertible for every $z\ne0$ with inverse $z^{-1}(I+z^{-1}J)$, because $(zI-J)z^{-1}(I+z^{-1}J)=z^{-1}(zI+z^{-1}J^2-J-z^{-1}J\cdot J)=I$ using $J^2=0$. [A2, algebra]

1.2 $J$ is not normal: $J^*=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, so $JJ^*=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ while $J^*J=\begin{pmatrix}0&0\\0&1\end{pmatrix}$, and these are different operators. [A2, A3]

2.1 $0\in\sigma(J)$ because $J$ is not injective: $Je_1=0$ while $e_1\ne0$, so $zI-J$ is not bijective at $z=0$; hence $\sigma(J)=\{0\}$. [step 1.1, A2]

3.1 The operator $J$ is therefore a nonzero bounded operator whose spectrum is the singleton $\{0\}$ — the property the title calls quasinilpotence — and it is not normal; by the zero-spectrum corollary this is only possible because normality fails. [step 2.1, step 1.2, A1]

4.1 The statement that nonzero operators have nonzero spectrum, equivalently that zero spectrum forces vanishing, is refuted by the witness $J$; dropping the normality hypothesis from the zero-spectrum corollary is therefore not legitimate. [step 2.1, step 3.1, A4] ∎
