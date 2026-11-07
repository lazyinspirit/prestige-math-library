---
id: lem-deligne-pappas-arithmetic-local-model-reduction
kind: lemma
title: Unramified and Eisenstein reduction of the arithmetic Lagrangian model
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - def-standard-etale-algebra
  - lem-deligne-pappas-polynomial-lagrangian-model-flat-normal-fibre
  - lem-deligne-pappas-truncated-dvr-lagrangian-strata
  - thm-regular-quotients-and-cohen-macaulayness
  - thm-jacobian-criterion-smooth-morphism
  - thm-serre-normality-criterion
proof_strategy: direct
axiom_use: The arithmetic presentations are finite constructions with explicit Newton limits. AC is retained for the local-model, Cohen–Macaulay, Jacobian and Serre-criterion suppliers used in the geometric conclusion.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne and Georgios Pappas, Singularités des espaces de modules de Hilbert, en les caractéristiques divisant le discriminant
      url: https://www.numdam.org/item/CM_1994__90_1_59_0.pdf
      locator: §4.5, printed pp.72–73, unramified and Eisenstein reduction of the local model
---

## Statement

Assume AC. Let $K$ be a number field of degree $d$, let $O_K$ be its ring of integers, let $p$ be any rational prime, and put $R=O_K\otimes_{\mathbb Z}\mathbb Z_p$. For each prime $v\mid p$, write $e_v$ and $f_v$ for its ramification and residue degrees. There are finite unramified complete DVRs $B_v/\mathbb Z_p$, of degree $f_v$ and with uniformizer $p$, and monic Eisenstein polynomials $P_v\in B_v[t]$ of degree $e_v$ such that
$$R\simeq\prod_{v\mid p}B_v[t]/(P_v),\qquad\sum_{v\mid p}e_vf_v=d.$$
There is a finite unramified faithfully flat DVR extension $A/\mathbb Z_p$ splitting every $B_v$, and consequently
$$R\otimes_{\mathbb Z_p}A\simeq\prod_{v\mid p}\prod_{\sigma:B_v\to A}A[t]/(P_{v,\sigma}),\qquad P_{v,\sigma}\equiv t^{e_v}\pmod p.$$

Let $Y_R$ be the closed relative Grassmannian functor of $R$-stable, $R$-wedge-isotropic scalar rank-$d$ direct subbundles in $R^2$. Over this finite étale base extension it is the product of the polynomial Lagrangian models for the displayed factors. Thus étale-locally on the base it has flat relative complete-intersection charts of pure relative dimension $d$, and its geometric special fibre is normal and geometrically irreducible. Its largest product stratum has affine $d$-space charts and complement of dimension at most $d-2$ (empty when every $e_v=1$).

These are statements about the explicit arithmetic module model. No identification with an abelian moduli deformation functor is included.

## Facts & Assumptions

**Given:** The number field, prime, and the explicit AC assumption in the Statement.

[A1] AC is used through the geometric commutative-algebra suppliers; it is not inferred from the explicit Newton constructions. [[def-axiom-of-choice]]

[F1] Number-field integer completions are complete DVRs with residue fields $O_K/v$, and $R$ is their product. Each fraction field $K_v$ has degree $e_vf_v$ over $\mathbb Q_p$. For finite extensions of local fields, degree equals ramification index times residue degree. [[lem-number-field-completion-tensor-and-norm-in-zf]], [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F2] A finite field has a cyclic multiplicative group. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F3] A monic polynomial quotient with invertible derivative is standard étale. [[def-standard-etale-algebra]]

[F4] The monic polynomial model over a complete DVR with perfect residue field is flat and a relative complete intersection, with normal geometrically irreducible special fibre. Its special-fibre strata have explicit affine charts and dimensions $e-2i$. [[lem-deligne-pappas-polynomial-lagrangian-model-flat-normal-fibre]], [[lem-deligne-pappas-truncated-dvr-lagrangian-strata]]

[F5] Under AC, regular-sequence quotients of Cohen–Macaulay local rings are Cohen–Macaulay; affine polynomial charts are smooth by the Jacobian criterion; and normality is equivalent to $(R_1)+(S_2)$. [[thm-regular-quotients-and-cohen-macaulayness]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-serre-normality-criterion]]

## Proof

**Proof technique:** lift one finite-field generator, read integrality from distinct valuations, and split the unramified factors before applying the polynomial charts.

1.1 Fix $v$, put $E=K_v$, and write $O_E$ for its complete valuation ring from [F1], with residue field $k_v$ of degree $f=f_v$ over $\mathbb F_p$. A generator $\bar\theta$ of $k_v^\times$ from [F2] generates $k_v$ as a field. Its monic minimal polynomial $h\in\mathbb F_p[T]$ has degree $f$ and is separable: it divides $T^{p^f}-T$, whose derivative is $-1$. Lift its coefficients to a monic $H\in\mathbb Z_p[T]$. Choose a lift $\theta_0\in O_E$ of $\bar\theta$. Newton iteration
$$\theta_{n+1}=\theta_n-H(\theta_n)H'(\theta_n)^{-1}$$
is defined because $H'(\theta_n)$ remains a unit. Taylor expansion doubles the valuation of $H(\theta_n)$ at every step. Completeness gives a root $\theta\in O_E$ reducing to $\bar\theta$. The root in this residue class is unique: the difference of two such evaluations factors as their difference times a unit. [F1, F2, given, construct, algebra]

1.2 The formal quotient $B=\mathbb Z_p[T]/(H)$ is finite free of rank $f$ and complete. Its reduction modulo $p$ is the field $k_v$. If a nonzero element is written in its monic-polynomial basis, divide its finitely many coefficients by their common minimum power of $p$; the result has nonzero residue, hence is a unit, by lifting its residue inverse and summing a convergent geometric series in $pB$. Thus every nonzero element of $B$ is $p^n$ times a unit. In particular $B$ is a complete DVR, and $p$ is its uniformizer. Evaluation at $\theta$ embeds it in $O_E$: a nonzero kernel element would be $p^n$ times a unit, whose image cannot be zero in the characteristic-zero field $E$. The derivative is a unit, so [F3] makes this a finite unramified standard étale extension of $\mathbb Z_p$. Its fraction field $E_0$ has degree $f$ over $\mathbb Q_p$ and residue field $k_v$. [F1, F3, step 1.1, construct, algebra]

2.1 Put $e=e_v$ and let $\varpi$ be a uniformizer of $E$. By [F1], $[E:E_0]=e$. On $E_0$, the valuation of $E$ is $e$ times the normalized valuation of $B$, because $p$ has valuation $e$ and a unit of $B$ remains a unit in $O_E$. Therefore the values of nonzero terms $a_j\varpi^j$ for $0\le j<e$, $a_j\in E_0$, are distinct modulo $e$. Their minimum cannot cancel in a nontrivial linear combination. Hence $1,\varpi,\ldots,\varpi^{e-1}$ are linearly independent, and form an $E_0$-basis of $E$. An element in this basis is integral exactly when every $a_j$ lies in $B$: a negative coefficient valuation gives a unique negative minimum, whereas integral coefficients give nonnegative values. Thus $O_E=B[\varpi]$ and is free over $B$ on this basis. Write $\varpi^e=\sum_{j<e}a_j\varpi^j$. Its valuation is exactly $e$, so the distinct-minimum calculation forces $v_B(a_0)=1$ and $v_B(a_j)\ge1$ for $j>0$. Consequently $P_v(t)=t^e-\sum_{j<e}a_jt^j$ is Eisenstein, and $O_E\simeq B[t]/(P_v)$. This includes $e=1$. Taking the product and dimensions in [F1] proves the first displayed decomposition and the degree sum. [F1, step 1.2, given, algebra]

2.2 Take a finite splitting field $k'$ over $\mathbb F_p$ for the finitely many polynomials $h$ in step 1.1. It is a finite field. Apply the formal quotient construction of step 1.2 to a lifted minimal polynomial of a multiplicative generator of $k'$; this constructs a complete unramified DVR $A/\mathbb Z_p$ with residue field $k'$, finite free and faithfully flat. Every $h$ splits with distinct roots in $k'$. Newton lifting in $A$ gives roots of $H$ with unit pairwise differences; monic division and the Chinese remainder identity for these linear factors therefore give
$$B_v\otimes_{\mathbb Z_p}A\simeq\prod_{\sigma:B_v\to A}A.$$
Base-changing the presentation in step 2.1 gives the second displayed decomposition. Each coefficient of $P_v$ other than the leading one is divisible by $p$, and the constant coefficient has valuation one; these facts are preserved by every embedding into the unramified ring $A$. Thus the resulting polynomials have exactly the hypotheses of [F4]. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, construct, algebra]

3.1 Stability under the orthogonal idempotents in the product ring splits a candidate subbundle into its factor subbundles. The wedge-isotropy condition is componentwise. Over every geometric point, compose each factor's wedge with its top-coefficient functional, which is a perfect alternating scalar pairing as proved in [F4]. An isotropic subspace in the factor of dimension $2e_v$ has dimension at most $e_v$. The sum of these bounds is $d$, the prescribed total rank, so equality holds in every factor. The ranks are therefore the required constant ranks over arbitrary bases as well. This gives, functorially and compatibly with base change, the asserted product of polynomial Lagrangian models. [F4, step 2.1, step 2.2, given, algebra]

3.2 Each factor is flat over $A$ by [F4], so their product is flat: on affine charts its coordinate ring is a tensor product of flat $A$-algebras. Their relative regular-sequence charts concatenate to relative regular-sequence charts of the product. Indeed each further flat $A$-factor preserves the successive injections defining a previous factor's regular sequence, and its own equations use a disjoint set of polynomial variables. The relative dimensions sum to $\sum e_vf_v=d$. This proves the claimed étale-local flat complete-intersection charts.
After extending the residue field to an algebraic closure, the special fibre has the product stratification from [F4]. The largest product stratum is irreducible and has affine $d$-space charts. Every other stratum has dimension at most $d-2$; if all $e_v=1$, there is no other stratum. The product complete-intersection charts are Cohen–Macaulay, hence satisfy $(S_2)$ by [F5], and the affine largest stratum is regular. Purity of dimension $d$ puts all codimension-one points there. Thus $(R_1)$ holds and [F5] proves normality. Every component meets the irreducible largest stratum, since no dimension-$d$ component fits in its smaller complement, proving geometric irreducibility. The geometric special fibre before the unramified base extension is the same after embedding its finite residue extension into the algebraic closure, so this conclusion is exactly the asserted one for $Y_R$. [F4, F5, A1, step 2.2, step 3.1, algebra] ∎
