---
id: ex-multiplicity-two-diagonal-representation
kind: example
title: Multiplicity-two diagonal representation
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - def-axiom-of-choice
  - def-c-star-algebra-generated-by-a-normal-operator
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-dependent-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - def-hilbert-space-adjoint
  - def-locally-compact-space
  - def-measurable-and-decomposable-operator-fields
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-polish-space
  - def-projection-valued-measure
  - def-radon-measure-on-an-lch-space
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - def-spectrum-and-resolvent-of-a-bounded-operator
  - def-standard-borel-space
  - def-von-neumann-algebra-and-commutant
  - ex-direct-integral-of-a-constant-hilbert-field
  - lem-borel-subspaces-admit-polish-presentations
  - lem-diagonal-multipliers-form-a-von-neumann-algebra
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-rat-embeds-dense
  - lem-scalar-and-complex-measures-from-a-pvm
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - thm-bounded-borel-pvm-integral
  - thm-c-c-is-dense-in-l-p-for-radon-measures
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-euclidean-space-complete
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - thm-monotone-convergence-for-the-integral
  - thm-rationals-countable
  - thm-spectral-theorem-for-bounded-normal-operators-pvm-form
  - thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras
axiom_use: "Assume AC. It supplies the direct-integral Hilbert-space, spectral-multiplicity, commutant, and operator-action results; AC implies DC and Countable Choice for the C_c-density, Lebesgue-box, regularity, and adjoint hypotheses. The cyclic vectors, their spectral measures, the weights and RN densities, and the matrix units are explicit; no further choice is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "C. Anantharaman and S. Popa, An Introduction to II1 Factors"
      url: https://www.idpoisson.fr/anantharaman/publications/IIun.pdf
      locator: "Chapter 8 §8.1, Theorem 8.1.1 and Remark 8.1.2, printed pp. 122–123; the two cyclic summands and active rank are calculated explicitly here"
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.H, Theorems 1.H.1 and 1.H.4, Corollary 1.H.5, printed pp. 65–68; the constant two-dimensional commutant is identified entrywise here"
verification:
  precheck: pass
---

## Example

Assume AC. Let $\lambda$ be Lebesgue measure on the Borel subsets of $[0,1]$,
let $\mathcal H=L^2([0,1],\lambda;\mathbb C^2)$, and define
$$S=M_t\otimes I_2,\qquad \mathcal D=\{M_f\otimes I_2:f\in L^\infty([0,1],\lambda)\}.$$
Then $\mathcal D$ is an abelian concrete von Neumann algebra,
$\mathcal D=W^*(S)$, and its spectral multiplicity function for this
coordinate generator is $m(t)=2$ for $\lambda$-almost every $t$. Its commutant
is exactly the algebra of essentially bounded Borel measurable $2\times2$
matrix fields, modulo equality almost everywhere, and that commutant is
nonabelian.

## Facts & Assumptions

**Given:** AC; Borel Lebesgue measure $\lambda$ on $[0,1]$; the constant field with fibre $\mathbb C^2$; scalar multiplication by $f\in L^\infty([0,1],\lambda)$; and the coordinate multiplier $S=M_t\otimes I_2$.

[F1] The usual metric on $\mathbb R$ is complete, and $\mathbb Q$ is countable and dense, so $\mathbb R$ is Polish ([[thm-euclidean-space-complete]], [[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[def-polish-space]]).

[F2] The closed Borel subspace $[0,1]$ is standard Borel; the Borel-subspace presentation theorem assumes AC, which is given ([[def-axiom-of-choice]], [[def-standard-borel-space]], [[lem-borel-subspaces-admit-polish-presentations]]).

[F3] The Borel Lebesgue measure of $[0,1]$ is $1$ by the one-dimensional box formula; it is finite and hence sigma-finite ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F4] The compact interval is a second-countable LCH space, and every finite Borel measure on it is regular, hence Radon. In particular this applies to Lebesgue measure and to the scalar measures of the candidate PVM below. The regularity corollary assumes Countable Choice; AC supplies it ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-locally-compact-space]], [[def-radon-measure-on-an-lch-space]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F5] For the constant field $H_t=\mathbb C^2$ with its standard basis, the direct integral identifies with $L^2([0,1],\lambda)\oplus L^2([0,1],\lambda)$ by the two coordinate functions; under AC this direct integral is a separable Hilbert space ([[ex-direct-integral-of-a-constant-hilbert-field]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]], [[def-separable-space]]).

[F6] The complex $L^2$ pairing is $\langle f,g\rangle=\int f\overline g\,d\lambda$. Since $t$ is real and bounded by $1$, direct calculation gives $\langle M_tf,g\rangle=\langle f,M_tg\rangle$ and $\|M_tf\|_2\le\|f\|_2$, so $M_t$ and its direct sum are bounded self-adjoint operators ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-real-and-complex-inner-product-space]], [[def-hilbert-space-adjoint]]).

[F7] The spectrum is defined by bounded invertibility of $zI-S$. A regular PVM on $\sigma(S)$ whose coordinate integral is $S$ is the unique spectral PVM, and its bounded Borel integral is determined by scalar pairings; the Borel calculus identifies $\mathbf1_B(S)$ with that PVM's value at $B$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-bounded-borel-pvm-integral]], [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-borel-functional-calculus-for-bounded-normal-operators]]).

[F8] Every relative neighbourhood of a point of $[0,1]$, including either endpoint, has positive Lebesgue measure by the box formula ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F9] Uniformly bounded Borel functions that converge pointwise almost everywhere for the spectral PVM have functional-calculus operators converging strongly ([[thm-borel-functional-calculus-for-bounded-normal-operators]]).

[F10] The scalar multiplier set on a measurable Hilbert field's direct integral is a unital abelian star-subalgebra and a concrete von Neumann algebra ([[lem-diagonal-multipliers-form-a-von-neumann-algebra]], [[def-von-neumann-algebra-and-commutant]]).

[F11] Continuous functional calculus places continuous functions of $S$ in $C^*(I,S)\subseteq W^*(S)$; $W^*(S)$ is WOT closed by its definition ([[def-c-star-algebra-generated-by-a-normal-operator]], [[def-von-neumann-algebra-and-commutant]], [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]).

[F12] On this compact base, real $C_c$ functions are all real continuous functions and are dense in real $L^2$ under DC. AC implies DC. Apply density to real and imaginary parts; the least-essential-bound property supplies a bounded Borel representative of each $L^\infty$ class ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[def-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F13] For the spectral PVM $E$ of $S$, the scalar spectral measure of $x$ is $E_x(B)=\langle E(B)x,x\rangle$. The multiplicity theorem supplies a spectral model for the fixed generator and states that its measure class and multiplicity are unique almost everywhere ([[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras]]).

[F14] The commutant of all scalar multipliers on a direct integral consists exactly of decomposable operators. For the constant $\mathbb C^2$ field, weak measurability of an operator field is equivalent to Borel measurability of its four matrix coefficients, and the action theorem realizes every essentially bounded such field ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-measurable-function-between-measurable-spaces]], [[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[def-measurable-and-decomposable-operator-fields]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F15] Monotone convergence applies to increasing nonnegative partial sums, so a summable series of nonnegative squared errors has finite sum almost everywhere ([[thm-monotone-convergence-for-the-integral]]).

## Verification

**Proof technique:** compute the two cyclic scalar measures and identify the constant-field commutant.

**Given:** AC, $[0,1]$, $\lambda$, $\mathcal H$, $S$, and $\mathcal D$ as in the Example.

1.1 By [F1] and [F2], the base is standard Borel. By [F3] and [F4], $\lambda([0,1])=1$, and $\lambda$ is finite and regular. By [F5], identify $\mathcal H$ with $L^2(\lambda)\oplus L^2(\lambda)$. This Hilbert space is nonzero and separable, since the two constant-fibre coordinates are nonzero and the direct integral theorem applies. [F1, F2, F3, F4, F5]

1.2 By [F14], every operator in $\mathcal D'$ is induced by an essentially bounded weakly measurable field $T(t)\in\mathcal B(\mathbb C^2)$. In the fixed standard basis write
$$T(t)=\begin{pmatrix}a_{11}(t)&a_{12}(t)\\a_{21}(t)&a_{22}(t)\end{pmatrix}$$.
The four entries are measurable exactly when the field is weakly measurable. Essential boundedness of $\|T(t)\|$ implies that all entries are essentially bounded; conversely, if each of the four entries is essentially bounded, then $\|T(t)\|\le\sum_{i,j=1}^2|a_{ij}(t)|$ almost everywhere, so the field is essentially bounded. The operator-field action theorem realizes every such matrix field, and the commutant theorem supplies the reverse inclusion. Therefore $\mathcal D'$ is precisely the essentially bounded measurable $2\times2$ matrix fields modulo almost-everywhere equality. [F14, algebra]

2.1 On either scalar coordinate, $\|M_t f\|_2\le\|f\|_2$. For $f,g\in L^2(\lambda)$, the integral pairing in [F6] gives $$\langle M_tf,g\rangle=\int_0^1tf\overline g\,d\lambda=\int_0^1f\overline{tg}\,d\lambda=\langle f,M_tg\rangle,$$ since $t$ is real; hence $M_t$ and its direct sum $S$ are bounded self-adjoint. If $z\notin[0,1]$, the bounded multiplier $(z-t)^{-1}$ on each coordinate is a two-sided bounded inverse of $zI-S$. If $s\in[0,1]$, let $B_n=[0,1]\cap(s-1/n,s+1/n)$. By [F8], $\lambda(B_n)>0$ even at the endpoints. The unit vectors $x_n=(\mathbf1_{B_n}/\sqrt{\lambda(B_n)},0)$ satisfy $\|(S-sI)x_n\|\le1/n$, so $sI-S$ cannot have a bounded inverse. Thus $\sigma(S)=[0,1]$ by [F7]. For Borel $B\subseteq[0,1]$ put $E_0(B)(f,g)=(\mathbf1_Bf,\mathbf1_Bg)$. These are orthogonal projections with $E_0(\varnothing)=0$, $E_0([0,1])=I$, and $E_0(B\cap C)=E_0(B)E_0(C)$. For disjoint $B_j$ with union $B$, the squared norm of the difference between $E_0(B)(f,g)$ and the first $N$ projection terms is the integral over $B\setminus\bigcup_{j\le N}B_j$ of $|f|^2+|g|^2$, which tends to zero by [F15] and the finite $L^2$ norm. Its scalar measures $E_{0,x}(B)=\int_B(|f|^2+|g|^2)\,d\lambda$ are finite regular Borel measures by [F4], so $E_0$ is a regular PVM. For $x=(f,g)$ and $y=(h,k)$, its complex scalar measure is $E_{0,x,y}(B)=\int_B(f\overline h+g\overline k)\,d\lambda$; the bounded PVM integral therefore gives $\langle(\int t\,dE_0)x,y\rangle=\int_0^1t(f\overline h+g\overline k)\,d\lambda=\langle Sx,y\rangle$. The uniqueness clause in [F7] identifies $E_0$ as the spectral PVM of $S$. The same pairing calculation for bounded Borel $\psi$ gives $\psi(S)=M_\psi\oplus M_\psi$, in particular $E(B)=M_{\mathbf1_B}\oplus M_{\mathbf1_B}$. [F3, F4, F5, F6, F7, F8, F15, step 1.1, algebra]

3.1 The algebra $\mathcal D$ is an abelian concrete von Neumann algebra by [F10]. To prove $W^*(S)=\mathcal D$, first note that $S\in\mathcal D$ and $\mathcal D$ is WOT closed, giving $W^*(S)\subseteq\mathcal D$. For the reverse inclusion fix $f\in L^\infty$ and put $M=\|f\|_\infty$. If $M=0$, then $M_f=0\in W^*(S)$. Otherwise choose a Borel representative with $|f|\le M$ everywhere after changing it on a Borel null set, by [F12]. Apply [F12] separately to $u=\operatorname{Re}f$ and $v=\operatorname{Im}f$ to choose real continuous $u_n,v_n$ with $\|u_n-u\|_2+\|v_n-v\|_2<2^{-n}$. Clip each real function to $[-M,M]$; clipping is continuous, does not increase its pointwise error from $u$ or $v$, and makes $\psi_n=u_n+iv_n$ uniformly bounded by $\sqrt2M$. The squared approximation errors have finite sum, so [F15] gives $\sum_n|\psi_n-f|^2<\infty$ almost everywhere; hence $\psi_n\to f$ almost everywhere. Every $\psi_n(S)=M_{\psi_n}$ lies in $C^*(I,S)\subseteq W^*(S)$ by continuous functional calculus. The PVM in step 2.1 has the same null sets as $\lambda$: if $\lambda(B)>0$, then $\mathbf1_B$ is a nonzero vector in scalar $L^2$ and $E(B)\ne0$, while the converse is immediate. Thus the uniformly bounded pointwise-convergence clause of [F9] gives $M_{\psi_n}\to M_f$ strongly. WOT closedness now implies $M_f\in W^*(S)$. This proves $\mathcal D\subseteq W^*(S)$ as well, so equality holds. The Borel functional calculus identifies $S$ as the coordinate generator for $\mathcal D$. [F9, F10, F11, F12, F15, step 2.1, algebra]

3.2 Put $x_1=(\mathbf1,0)$ and $x_2=(0,\mathbf1)$. From the spectral projections in step 2.1, for every Borel $B\subseteq[0,1]$, $$\mu_j(B)=\langle E(B)x_j,x_j\rangle=\lambda(B)\qquad(j=1,2).$$ The explicit weights $a_1=2^{-1}/(1+\|x_1\|^2)=1/4$ and $a_2=2^{-2}/(1+\|x_2\|^2)=1/8$ give the finite nonzero regular common measure $\mu=a_1\mu_1+a_2\mu_2=(3/8)\lambda$ by [F4]. Its RN densities are $h_1=h_2=8/3$, since $\int_B(8/3)\,d\mu=\lambda(B)$. To verify the multiplicity directly, define $$U:L^2(\lambda)\oplus L^2(\lambda)\longrightarrow L^2([0,1],\mu;\mathbb C^2),\qquad U(f,g)=\sqrt{8/3}\,(f,g).$$ It is onto with inverse multiplication by $\sqrt{3/8}$, and $$\|U(f,g)\|^2=\int_{[0,1]}(8/3)(|f|^2+|g|^2)\,d\mu=\|f\|_2^2+\|g\|_2^2.$$ It intertwines $S$ with the coordinate multiplier $M_t$. This is a spectral model over the finite nonzero measure $\mu$ with constant two-dimensional fibres, so its multiplicity is $2$; the uniqueness clause of [F13] identifies the multiplicity function as $m(t)=2$ almost everywhere. The two densities are positive everywhere, agreeing with the same active-coordinate count. [F3, F4, F5, F13, step 2.1, algebra]

4.1 The vectors $x_1,x_2$ from step 3.2 are unit vectors by [F3]. By step 3.1, each continuous multiplier $\varphi(S)=M_\varphi$ lies in $W^*(S)=\mathcal D$ and sends $x_j$ to the corresponding coordinate copy of $\varphi\in C([0,1];\mathbb C)$. Thus the cyclic subspace generated by $x_j$ contains that copy. By [F12], $C([0,1];\mathbb C)$ is dense in complex $L^2(\lambda)$, since its real and imaginary parts are separately approximated in real $L^2$. Hence each $x_j$ is cyclic, and the two orthogonal reducing summands exhaust $\mathcal H$. [F3, F5, F12, step 1.1, step 3.1, algebra]

4.2 The constant fields $E_{12}$ and $E_{21}$ belong to $\mathcal D'$ because scalar matrices commute pointwise with every $f(t)I_2$. Their products are $E_{12}E_{21}=E_{11}$ and $E_{21}E_{12}=E_{22}$; these differ, since on $x_1$ the first acts as the identity and the second acts as zero. Thus $\mathcal D'$ is nonabelian and strictly larger than the abelian algebra $\mathcal D$. [F10, step 1.2, step 3.1, algebra]

5.1 Steps 1.1, 2.1, and 3.1 identify the base, coordinate generator, and its diagonal von Neumann algebra; steps 3.2 and 4.1 compute the two cyclic scalar measures and multiplicity; steps 1.2 and 4.2 identify the commutant and exhibit its noncommutativity. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2] $\square$

## Source qualifications

Anantharaman–Popa, Chapter 8 §8.1, Theorem 8.1.1 and Remark 8.1.2, printed pp. 122–123, state the multiplicity classification and uniqueness for a separable module over a standard probability-space model; their proof leaves the active-set partition details as an exercise. The local model uses the finite regular measure $(3/8)\lambda$ and verifies its constant two-dimensional fibre directly. Here the cyclic vectors are the two constant coordinate vectors, both scalar measures are calculated as Lebesgue measure, and the common-measure densities are explicitly $8/3$.

Bekka–de la Harpe, Chapter 1 §1.H, Theorem 1.H.1, printed p. 65, states the general varying-field commutant result but defers its proof. Theorem 1.H.4, printed pp. 67–68, proves the constant-field case; Corollary 1.H.5, printed p. 68, observes that a non-one-dimensional constant fibre has a nonabelian commutant. The local argument above identifies all four matrix entries and gives explicit noncommuting units.

## Boundary cases

- **Empty:** Not applicable because $[0,1]$ is nonempty and has measure $1$.
- **Zero:** Not applicable because the fibre is $\mathbb C^2$ everywhere and $\lambda([0,1])=1$, so $\mathcal H\ne\{0\}$.
- **One:** Not applicable because the example fixes two-dimensional fibres at every base point; there is no one-dimensional-fibre case in its claim.
- **Degenerate:** There are exactly two cyclic summands, both with positive scalar measure. The measure is finite; matrix fields and their null-set equivalence are described explicitly.
- **Endpoints:** Both $0$ and $1$ belong to the essential range: every relative neighbourhood has positive Lebesgue measure. The full interval is used, and neither endpoint is deleted.
- **Nonempty choice:** AC is assumed for the spectral multiplicity and direct-integral commutant results and implies DC for [F6]. The cyclic vectors, weights, RN densities, and matrix units are explicit.
- **Iff directions:** Not applicable because the example asserts a concrete algebra identity and a noncommutativity calculation, not an if-and-only-if statement.
