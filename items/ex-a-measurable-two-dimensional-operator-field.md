---
id: ex-a-measurable-two-dimensional-operator-field
kind: example
title: A measurable two-dimensional operator field
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-essential-supremum-with-respect-to-a-measure
  - def-measurable-and-decomposable-operator-fields
  - def-operator-norm
  - ex-multiplicity-two-diagonal-representation
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
axiom_use: "Assume AC for the measurable-field action theorem. AC implies DC and Countable Choice, supplying the countable-choice hypothesis of the Lebesgue box theorem used for positive-measure endpoint neighborhoods. All matrix entries, norm calculations, and the vector witness are explicit; no further choice is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.H, the constant-field action/norm statement and Theorems 1.H.1, 1.H.4, Corollary 1.H.5, printed pp. 65–68"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf
      locator: "Part III, Chapter 10 §§1.7–1.8, Proposition 6 and Theorem 2, printed pp. 99–101; the field here is continuous and bounded"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume AC. On the preceding multiplicity-two field over $[0,1]$, with
$H_t=\mathbb C^2$, Lebesgue measure $\lambda$, and diagonal algebra
$\mathcal D=\{M_f\otimes I_2:f\in L^\infty([0,1],\lambda)\}$ from
[[ex-multiplicity-two-diagonal-representation]], define
$$T_t=\begin{pmatrix}0&t\\1-t&0\end{pmatrix}\qquad(0\le t\le1).$$
This is a weakly measurable, essentially bounded operator field. Its induced
operator $T=\int_{[0,1]}^\oplus T_t\,d\lambda(t)$ has norm $1$, adjoint field
$$T_t^*=\begin{pmatrix}0&1-t\\t&0\end{pmatrix},$$
and square field
$$T_t^2=\begin{pmatrix}t(1-t)&0\\0&t(1-t)\end{pmatrix}.$$
The operator $T$ commutes with every element of $\mathcal D$, but $T$ is not
itself in $\mathcal D$.

## Facts & Assumptions

**Given:** AC and the multiplicity-two constant field, measure, Hilbert space,
and diagonal algebra of the preceding example.

[F1] The preceding example has base $[0,1]$ with Borel Lebesgue measure,
fibre $\mathbb C^2$, direct integral $\mathcal H=L^2(\lambda)\oplus
L^2(\lambda)$, and diagonal algebra $\mathcal D$ acting by $f(t)I_2$
([[ex-multiplicity-two-diagonal-representation]]).

[F2] Weak measurability is tested by the fundamental matrix coefficients, and
essential boundedness means the measurable pointwise operator norm has finite
essential supremum ([[def-measurable-and-decomposable-operator-fields]]).

[F3] Under AC, every weakly measurable essentially bounded field induces a
bounded direct-integral operator with norm equal to the essential supremum;
adjoint and product fields induce the operator adjoint and product
([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F4] The operator norm is the supremum of $\|Tx\|$ over the unit ball
([[def-operator-norm]]).

[F5] The essential supremum is the least almost-everywhere bound in
$[0,+\infty]$ ([[def-essential-supremum-with-respect-to-a-measure]]).

[F6] Under Countable Choice, every one-dimensional box with any choice of
faces is Borel and has measure equal to its length; in particular
$\lambda([0,\delta))=\delta$ for $0<\delta\le1$
([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F7] AC is assumed here. It implies DC and Countable Choice, which supplies
the hypothesis of [F6] ([[def-axiom-of-choice]],
[[def-countable-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

[F8] The action theorem gives the exact norm of the induced operator as the
essential supremum of the fibre norms
([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F9] The action theorem identifies the induced adjoint and product fields with
the operator adjoint and product
([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F10] The preceding example defines the diagonal algebra as scalar
multiplication by $f(t)I_2$ ([[ex-multiplicity-two-diagonal-representation]]).

## Verification

**Proof technique:** compute the coefficient functions and pointwise norms,
then apply the direct-integral action theorem and exhibit a vector separating
$T$ from every scalar diagonal operator.

**Given:** the preceding multiplicity-two field and $T_t$ as in the Example.

1.1 In the constant standard basis $e_1,e_2$, the four fundamental matrix coefficients of $T_t$ are the Borel functions $0,t,1-t,0$, so $T_t$ is weakly measurable. [F1, F2, algebra]

1.2 The operator-norm and essential-supremum calculations use [F1, F4, F5, F6, F7, algebra].
For $z=(z_1,z_2)\in\mathbb C^2$,
$$\|T_tz\|^2=t^2|z_2|^2+(1-t)^2|z_1|^2.$$
The operator norm definition [F4], with the two standard unit vectors as
witnesses for the larger coefficient, gives
$$\|T_t\|=\max\{t,1-t\}.$$
This is a Borel function bounded by $1$. For every $M\in[0,1)$,
$\|T_t\|>M$ on $[0,1-M)$, whose measure is $1-M>0$ by [F6] and [F7].
So no $M<1$ is an almost-everywhere bound, while $1$ is a pointwise bound;
therefore $\operatorname*{ess\,sup}_{t\in[0,1]}\|T_t\|=1$ by [F5]. The
field is essentially bounded. At $t=0$ and $t=1$ its rank is one, while for
$0<t<1$ its rank is two; the norm formula holds in all cases.

2.1 The action theorem induces $T$ with norm one and identifies its adjoint and square fields. [F3, F7, F8, F9, step 1.1, step 1.2, algebra]
It gives $T=\int^\oplus T_t\,d\lambda(t)$ and $\|T\|=1$. Direct matrix multiplication yields
$$T_t^*=\begin{pmatrix}0&1-t\\t&0\end{pmatrix},\qquad T_t^2=\begin{pmatrix}t(1-t)&0\\0&t(1-t)\end{pmatrix}.$$

3.1 Pointwise commutation and the action theorem put $T$ in $\mathcal D'$. [F3, F9, F10, step 1.1, step 1.2, step 2.1, algebra]
For $f\in L^\infty([0,1],\lambda)$, the scalar field $f(t)I_2$ induces the corresponding $M_f\otimes I_2$ by [F10] and [F3]. At every $t$, $T_t(f(t)I_2)=f(t)T_t$. The product clause of [F3] therefore
shows that $T(M_f\otimes I_2)=(M_f\otimes I_2)T$. Hence $T\in\mathcal D'$.

3.2 A vector witness separates $T$ from every $R\in\mathcal D$, proving $T\notin\mathcal D$. [F1, step 2.1, algebra]
Let $\eta=(\mathbf1,0)\in L^2(\lambda)\oplus L^2(\lambda)$, so
$\|\eta\|=1$ by [F1]. Then $T\eta=(0,1-t)$. For any
$R=M_f\otimes I_2\in\mathcal D$, $R\eta=(f,0)$, and
$$\|T\eta-R\eta\|^2=\|f\|_2^2+\int_0^1(1-t)^2\,d\lambda(t)\ge\frac13>0.$$
Thus $T\ne R$ for every $R\in\mathcal D$.

4.1 Steps 1.1–1.2 prove weak measurability and the exact essential norm; step 2.1 gives the induced operator, its adjoint and square; steps 3.1 and 3.2 prove that $T\in\mathcal D'$ and $T\notin\mathcal D$. $\square$ [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2]

## Source qualifications

Bekka–de la Harpe, Chapter 1 §1.H, state the action and essential-supremum
norm formula for measurable essentially bounded fields on a constant Hilbert
space and prove the constant-field commutant characterization in Theorem
1.H.4, with Corollary 1.H.5 identifying the nonabelian commutant for fibres
of dimension greater than one. The present calculation checks all hypotheses
for the continuous $\mathbb C^2$ field explicitly. Bruhat, Part III Chapter 10
§§1.7–1.8, states the corresponding matrix-coefficient, action and norm
results in a locally compact/Lusin field convention; the polynomial matrix
coefficients here are continuous and the local action theorem supplies the
standard-Borel operator conventions used in this item.

## Boundary cases

- **Empty:** Not applicable because the base is the fixed nonempty interval $[0,1]$ and $\lambda([0,1])=1$.
- **Zero:** Not applicable because every fibre is $\mathbb C^2$ and the base has measure $1$, so $\mathcal H\ne\{0\}$.
- **One:** Not applicable because the example fixes two-dimensional fibres throughout and makes no one-dimensional-fibre claim.
- **Degenerate:** Checked at $t=0,1$, where $T_t$ has rank one, and on $0<t<1$, where it has rank two; the norm, adjoint and square formulas hold on all of $[0,1]$.
- **Endpoints:** Checked explicitly: $\|T_0\|=\|T_1\|=1$, and for every $M<1$ the set $[0,1-M)$ where $\|T_t\|>M$ has positive measure.
- **Nonempty choice:** AC is stated; it supplies the action theorem hypothesis and, via DC and Countable Choice, the box-measure input. The matrix field and vector witness are explicit, with no further choice.
- **Iff directions:** Not applicable because the example gives one explicit commuting operator outside $\mathcal D$ and asserts no equivalence.
