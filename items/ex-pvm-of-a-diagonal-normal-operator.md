---
id: ex-pvm-of-a-diagonal-normal-operator
kind: example
title: Pvm of a diagonal normal operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-bounded-borel-pvm-integral, lem-scalar-and-complex-measures-from-a-pvm, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-spectrum-and-resolvent-of-a-bounded-operator, def-operator-norm, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.6–5.7, printed pp.273–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Assume AC. Let $I$ be a nonempty set, let $(\lambda_i)_{i\in I}$ be a bounded family of
complex numbers with $M:=\sup_i|\lambda_i|<\infty$, and let
$$T:\ell^2(I;\mathbb C)\to\ell^2(I;\mathbb C),\qquad (Tx)_i:=\lambda_ix_i ,$$
be the associated diagonal operator. Then $T$ is a bounded normal operator with
$\sigma(T)=\overline{\{\lambda_i:i\in I\}}$, its spectral projection valued
measure $E$ on the Borel $\sigma$-algebra of $\sigma(T)$ is
$$E(B)x=\bigl(\mathbf 1_B(\lambda_i)x_i\bigr)_{i\in I},$$
and the bounded Borel functional calculus is $f(T)x=\bigl(f(\lambda_i)x_i\bigr)_{i\in I}$
for every bounded Borel $f$ on $\sigma(T)$.

## Facts & Assumptions

[A1] $\ell^2(I;\mathbb C)$ is the space of square-summable families with inner product $\langle x,y\rangle=\sum_ix_i\overline{y_i}$; the vectors $e_i$ form an orthonormal family with $\langle x,e_i\rangle=x_i$ for square-summable $x$, and the space is complete, hence a Hilbert space ([[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-hilbert-space]]).

[A2] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a bounded operator that is not bounded below is not bijective with bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-operator-norm]]).

[A3] For a bounded normal operator the spectral PVM $E$ is the unique regular PVM on $\sigma(T)$ with $\int z\,dE=T$, and for bounded Borel $f$ one has $\langle f(T)x,y\rangle=\int f\,dE_{x,y}$ with $E_{x,y}(B)=\langle E(B)x,y\rangle$ ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-bounded-borel-pvm-integral]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A4] Normal means $T^*T=TT^*$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A5] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A bounded family $(\lambda_i)_{i\in I}$ with $M=\sup_i|\lambda_i|<\infty$, the diagonal operator $Tx=(\lambda_ix_i)$ on $\ell^2(I;\mathbb C)$, and the map $E(B)x:=(\mathbf 1_B(\lambda_i)x_i)$ for Borel $B\subseteq\sigma(T)$.

1.1 The formula $Tx=(\lambda_ix_i)$ defines a bounded linear operator with $\|Tx\|^2=\sum_i|\lambda_i|^2|x_i|^2\le M^2\|x\|^2$, so $\|T\|\le M$, and $\|T\|\ge\sup_i|\lambda_i|=M$ by testing on the basis vectors, so $\|T\|=M$; the adjoint is $T^*y=(\overline{\lambda_i}y_i)$ because $\langle Tx,y\rangle=\sum_i\lambda_ix_i\overline{y_i}=\sum_ix_i\overline{\lambda_iy_i}$, so $T^*T=TT^*$ is diagonal with entries $|\lambda_i|^2$ and $T$ is normal. [A1, A2, A4]

1.2 The map $E$ takes values in orthogonal projections: for square-summable $x$ the family $(\mathbf 1_B(\lambda_i)x_i)$ is square-summable with $\|E(B)x\|^2=\sum_i\mathbf 1_B(\lambda_i)|x_i|^2$, so $\|E(B)\|\le1$ and $E(B)^2=E(B)=E(B)^*$ because the identity holds coordinatewise and the formula is symmetric. [A1, algebra]

2.1 $\sigma(T)=\overline{\{\lambda_i\}}$: if $z$ is outside the closure then $\delta:=\inf_i|z-\lambda_i|>0$, the diagonal operator with entries $(z-\lambda_i)^{-1}$ is bounded with norm at most $\delta^{-1}$ and is a two-sided inverse of $zI-T$, so $z\in\rho(T)$; if $z\in\overline{\{\lambda_i\}}$ pick a sequence $\lambda_{i_k}\to z$, so $\|(T-zI)e_{i_k}\|=|\lambda_{i_k}-z|\to0$ and $T-zI$ is not bounded below, whence $z\in\sigma(T)$. [step 1.1, A1, A2]

2.2 $E$ is a PVM on the Borel $\sigma$-algebra of $\sigma(T)$: $E(\varnothing)=0$, $E(\sigma(T))=I$, $E(B\cap C)=E(B)E(C)$ coordinatewise, and for pairwise disjoint $B_n$ with union $B$ one has $\|E(B)x-\sum_{n\le N}E(B_n)x\|^2=\sum_{n>N}\sum_i\mathbf 1_{B_n}(\lambda_i)|x_i|^2\to0$, the double sum being a convergent series; moreover every scalar measure $E_x(B)=\sum_i\mathbf 1_B(\lambda_i)|x_i|^2$ is supported on the at most countable set $\{i:x_i\ne0\}$, which makes it regular, so $E$ is a regular PVM. [step 1.2, A1]

3.1 The coordinate measures are point masses: for all $x,y$ and every Borel $B$, $E_{x,y}(B)=\langle E(B)x,y\rangle=\mathbf 1_B(\lambda_i)x_i\overline{y_i}$ summed over $i$, so the complex measure $E_{x,y}$ equals $\sum_ix_i\overline{y_i}\,\delta_{\lambda_i}$, and hence for bounded Borel $f$ the operator identity $\int f\,dE_{x,y}=\sum_if(\lambda_i)x_i\overline{y_i}$ holds; taking $f=z$ gives $\int z\,dE_{x,y}=\sum_i\lambda_ix_i\overline{y_i}=\langle Tx,y\rangle$ for all $x,y$, so $\int z\,dE=T$. [step 2.2, A1, A3]

4.1 By the uniqueness clause of the spectral theorem, $E$ is the spectral PVM of $T$, since it is a regular PVM on $\sigma(T)$ with $\int z\,dE=T$; consequently $f(T)=\Phi_E(f)$ has pairings $\langle f(T)x,y\rangle=\sum_if(\lambda_i)x_i\overline{y_i}$ for every bounded Borel $f$, that is $f(T)x=(f(\lambda_i)x_i)_i$. [step 3.1, A3, A5]

5.1 The diagonal operator is therefore bounded normal with $\sigma(T)=\overline{\{\lambda_i\}}$, its spectral projections act by $\mathbf 1_B$ on the coordinates, and its bounded Borel calculus acts by the scalar values $f(\lambda_i)$. [step 1.1, step 2.1, step 4.1, A5] ∎
