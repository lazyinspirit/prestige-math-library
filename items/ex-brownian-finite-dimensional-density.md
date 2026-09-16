---
id: ex-brownian-finite-dimensional-density
kind: example
title: "Brownian finite-dimensional density"
status: published
origin: pipeline
deps: [def-brownian-motion, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, def-standard-normal-and-normal-laws, thm-independent-random-elements-have-product-joint-law, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-continuous-partial-derivatives-imply-total-differentiability, thm-determinant-of-a-triangular-matrix, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.1"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Example

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion and let
$0<t_1<\cdots<t_n$, where $n\ge1$. Put $t_0=0$ and $x_0=0$. Then the law of
$(B_{t_1},\ldots,B_{t_n})$ has, with respect to Lebesgue measure on
$\mathbb R^n$, the density

$$p(x_1,\ldots,x_n)=\prod_{j=1}^n\frac{1}{\sqrt{2\pi(t_j-t_{j-1})}}\exp\!\left(-\frac{(x_j-x_{j-1})^2}{2(t_j-t_{j-1})}\right).$$

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and $0<t_1<\cdots<t_n$ with $n\ge1$; write $h_j=t_j-t_{j-1}>0$.

[F1] Brownian increments $\Delta_j=B_{t_j}-B_{t_{j-1}}$ are mutually independent and have laws $N(0,h_j)$. [[def-brownian-motion]], [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]].

[F2] Under AC, $N(0,1)$ has density $\phi(z)=e^{-z^2/2}/\sqrt{2\pi}$, and $N(0,h)$ is the pushforward under $z\mapsto\sqrt{h}z$. [[def-standard-normal-and-normal-laws]].

[F3] Independent random elements have product joint law. [[thm-independent-random-elements-have-product-joint-law]].

[F4] A nonnegative measurable function defines a measure by indefinite integration; sigma-finite product measures exist, have the rectangle formula, and are unique. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]].

[F5] Tonelli holds for nonnegative product-measurable functions, and finite products of one-dimensional Lebesgue measure agree with Euclidean Lebesgue measure on Borel sets. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]].

[F6] The declared supplier `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` gives: assuming countable choice, a $C^1$ diffeomorphism $T:U\to V$ satisfies $\int_Vf=\int_U(f\circ T)|\det DT|$ for every nonnegative Borel $f$.

[F7] Continuous partial derivatives give the total derivative, whose matrix is the Jacobian, and a triangular matrix has determinant equal to the product of its diagonal entries. [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-determinant-of-a-triangular-matrix]].

[F8] The declared supplier `thm-choice-implies-dependent-implies-countable-choice` gives that AC implies countable choice, and [[def-axiom-of-choice]] fixes the ambient assumption.

## Verification

**Proof technique:** direct.

1.1 For each $j$, let $\sigma_j=\sqrt{h_j}>0$ and $$g_j(y)=\frac1{\sigma_j}\phi(y/\sigma_j)=\frac1{\sqrt{2\pi h_j}}e^{-y^2/(2h_j)}.$$ For a Borel set $A\subseteq\mathbb R$, apply [F6] to the dilation $T_j(z)=\sigma_jz$ and the nonnegative Borel function $\mathbf1_Ag_j$. Since $T_j'=\sigma_j$, this gives $$\int_Ag_j(y)\,dy=\int_{\mathbb R}\mathbf1_A(\sigma_jz)g_j(\sigma_jz)\sigma_j\,dz=\int_{\mathbb R}\mathbf1_A(\sigma_jz)\phi(z)\,dz.$$ By the pushforward definition in [F2], $g_j$ is therefore a density of $N(0,h_j)$. [F2, F6, F8]

1.2 Define $T:\mathbb R^n\to\mathbb R^n$ and $S:\mathbb R^n\to\mathbb R^n$ by $$(Ty)_j=\sum_{k=1}^jy_k,\qquad (Sx)_j=x_j-x_{j-1},\quad x_0=0.$$ Direct telescoping gives $ST=TS=\operatorname{id}$. Their coordinate partial derivatives are constant, so [F7] makes them $C^1$ with their displayed matrices. The matrix of $S$ is lower triangular with every diagonal entry one; hence $|\det DS|=1$. Thus $S$ is a $C^1$ diffeomorphism with inverse $T$. Moreover, $T\Delta=(B_{t_1},\ldots,B_{t_n})$ almost surely by telescoping and $B_0=0$ almost surely. [F1, F7, algebra]

2.1 Put $q(y_1,\ldots,y_n)=\prod_{j=1}^ng_j(y_j)$. Induction on $n$, using Tonelli and the Borel equality $\lambda_{n-1}\times\lambda_1=\lambda_n$, shows that the measure $Q(E)=\int_Eq\,d\lambda_n$ has on every Borel rectangle the value $\prod_j\int_{A_j}g_j\,d\lambda_1$. The base $n=1$ is step 1.1; the induction also gives $Q(\mathbb R^n)=1$. Thus [F4] and uniqueness of the product measure identify $Q$ with the product of the $N(0,h_j)$ laws. By [F1] and [F3], $Q$ is exactly the joint law of $\Delta=(\Delta_1,\ldots,\Delta_n)$. [step 1.1, F1, F3, F4, F5]

3.1 For a Borel set $A\subseteq\mathbb R^n$, step 2.1 and the almost-sure identity in step 1.2 give $$P\big((B_{t_1},\ldots,B_{t_n})\in A\big)=\int_{T^{-1}A}q(y)\,dy.$$ Apply [F6] to $S$ and $f(y)=\mathbf1_{T^{-1}A}(y)q(y)$. Because $T(Sx)=x$ and $|\det DS|=1$, the right side becomes $$\int_{\mathbb R^n}\mathbf1_A(x)q(Sx)\,dx=\int_A\prod_{j=1}^ng_j(x_j-x_{j-1})\,dx.$$ Substituting the formula from step 1.1 is exactly the stated density. [step 1.1, step 2.1, step 1.2, F6, F8]

4.1 The strict inequalities make every $h_j$ positive, so no division by zero or singular normal density occurs. For $n=1$, the formula is the $N(0,t_1)$ density with $x_0=t_0=0$; the empty case $n=0$ is excluded. The triangular determinant is one even when $n=1$. AC is used through the Brownian and normal-law suppliers, and it supplies the countable choice required by [F5] and [F6]; the finite triangular transformation makes no additional choice. [given, step 1.1, step 1.2, step 3.1, F1, F2, F5, F6, F8] ∎

## Remarks

- The suppliers of [F6] and [F8] are homed on `euclidean-surface-measure-divergence-and-green-identities` (order 458.0021) and `weak-choice-principles-and-sierpinskis-theorem` (order 665), while this examples page has order 288.132. Step-5b resolution moved those citations from item-level `forward_refs` to `deps`, since both suppliers are published and load bearing, and [F6] and [F8] name them by ID rather than linking because their A pages sit the other way along the reading order. The batch-2 manifest whitelists both pages under this page's `forwardRefs`, so the page-level dependency is declared as well; rehoming this example to either of those subjects would be an owner-only reading-order change.

## Source notes

Sousi, Section 6.1 (printed p. 51), supplies the Brownian independent-increment structure. The density and the triangular change-of-variables calculation are derived explicitly above from the library's normal-density, product-measure, and Borel change-of-variables results.
