---
id: lem-spin8-four-form-chirality-weights
kind: lemma
title: Spin(8) four-form chirality weights
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
page: st-spin8-representation-mathematics
dependency_level: 2
domain: mathematics
library: physics
deps:
  - def-spin8-vector-and-half-spin-modules
  - lem-spin8-modules-well-defined
  - thm-real-pin-spin-image-kernel-and-compactness
  - def-gram-inner-product-on-kth-exterior-power
  - def-oriented-unit-volume-form
  - def-hodge-star-on-an-oriented-inner-product-space
  - thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula
  - def-fundamental-weights
  - def-integral-dominant-and-strictly-dominant-weights
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - thm-weyl-dimension-formula
  - def-axiom-of-choice
dependency_roles:
  def-spin8-vector-and-half-spin-modules: mathematical-premise
  lem-spin8-modules-well-defined: mathematical-premise
  thm-real-pin-spin-image-kernel-and-compactness: mathematical-premise
  def-gram-inner-product-on-kth-exterior-power: mathematical-premise
  def-oriented-unit-volume-form: mathematical-premise
  def-hodge-star-on-an-oriented-inner-product-space: mathematical-premise
  thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula: mathematical-premise
  def-fundamental-weights: mathematical-premise
  def-integral-dominant-and-strictly-dominant-weights: mathematical-premise
  thm-highest-weight-classification-of-finite-dimensional-irreducible-representations: mathematical-premise
  thm-weyl-dimension-formula: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.6, printed pp. 143–145, equations (6.120)–(6.123): half-spin bilinear products and convention-sensitive four-form chirality."
    - title: "Katrin Becker, Melanie Becker, and John H. Schwarz, String Theory and M-Theory: A Modern Introduction"
      url: "https://csp-global.org/download/M-theory-Cambridge-University.pdf"
      locator: "Chapter 5.3, printed p. 169, Exercise 5.8 solution: the 35-dimensional four-form pieces and their relation to half-spin bilinears."
---

## Statement

Use the oriented Euclidean space $V=\mathbb R^8$, the positive-root system, fundamental weights $\lambda_3,\lambda_4$, and chirality convention of [[lem-spin8-modules-well-defined]]. For $g\in\operatorname{Spin}(8)$, let $\rho_g:V\to V$ be its vector action and define its action on $\Lambda^4V$ by $g\cdot(v_1\wedge\cdots\wedge v_4)=\rho_g(v_1)\wedge\cdots\wedge\rho_g(v_4)$, extended linearly. Equip $\Lambda^4V$ with the Gram inner product
$$\langle v_1\wedge\cdots\wedge v_4,w_1\wedge\cdots\wedge w_4\rangle=\det(\langle v_i,w_j\rangle)_{i,j=1}^4,$$
and let $\omega=e_1\wedge\cdots\wedge e_8$ be the oriented unit volume form. Define $\star:\Lambda^4V\to\Lambda^4V$ by the Hodge identity $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\omega$ for all $\alpha,\beta\in\Lambda^4V$. Set $\Lambda^4_\pm V=\ker(\star\mp I)$. Then $\star$ is equivariant for the specified Spin(8) action, each real eigenspace has dimension $35$ and is irreducible, and their complexifications are irreducible modules of highest weights $2\lambda_4$ and $2\lambda_3$, respectively. Thus the $+$ label here means self-dual for the specified orientation.

## Statement references

[[lem-spin8-modules-well-defined]]

[[def-gram-inner-product-on-kth-exterior-power]]

[[def-oriented-unit-volume-form]]

[[def-hodge-star-on-an-oriented-inner-product-space]]

[[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]

## Facts & Assumptions

**Given:** The oriented Euclidean $V=\mathbb R^8$ and the Cartan, root, weight, and Spin(8)-action conventions in [[lem-spin8-modules-well-defined]].

[F1] The Spin(8) modules have invariant positive-definite inner products; the Cartan weights of $V_\mathbb C$ are $\pm\xi_j$, and $\mathfrak{so}(8,\mathbb C)$ has positive roots $\xi_i\pm\xi_j$ for $i<j$ and fundamental weights $\lambda_3,\lambda_4$ ([[lem-spin8-modules-well-defined]]). The vector action of the full-even Spin group maps onto $SO(V)$ ([[thm-real-pin-spin-image-kernel-and-compactness]]).

[F2] The Gram pairing on $\Lambda^4V$ is the determinant of vector inner products; the oriented unit volume form is $\omega=e_1\wedge\cdots\wedge e_8$; and $\star$ is the unique map satisfying $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\omega$. In the oriented orthonormal basis, $\star e_I=\varepsilon(I)e_{I^c}$ ([[def-gram-inner-product-on-kth-exterior-power]], [[def-oriented-unit-volume-form]], [[def-hodge-star-on-an-oriented-inner-product-space]], [[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

[F3] A weight is dominant integral when all its simple-coroot pairings are nonnegative integers; each fundamental weight has pairings $0$ or $1$ and is dominant integral, so $2\lambda_3$ and $2\lambda_4$ are dominant integral ([[def-fundamental-weights]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[F4] Finite-dimensional irreducible representations of a finite-dimensional complex semisimple Lie algebra are classified by dominant integral highest weights, assuming the Axiom of Choice ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

[F5] The Weyl dimension formula gives $\dim L(\mu)=\prod_{\alpha\in\Phi^+}(\mu+\rho,\alpha)/(\rho,\alpha)$ for dominant integral $\mu$, under the Axiom of Choice ([[thm-weyl-dimension-formula]]).

[A1] The Axiom of Choice, as defined in [[def-axiom-of-choice]], is assumed for the Lie-theory conventions and highest-weight claims in [F1] and the dominant-integral convention in [F3], and exactly for the classification and dimension formula in [F4] and [F5].

## Proof

1.1 The basis formula in [F2] gives $\star^2e_I=(-1)^{4(8-4)}e_I=e_I$ for every four-element index set $I$, so $\star$ is diagonalizable with eigenvalues $\pm1$. Its matrix on the 70 basis vectors has zero diagonal because $I^c\ne I$, so its trace is zero; the two eigenspaces therefore each have dimension $35$. The vector action $\rho_g$ lies in $SO(V)$ by [F1]. Its induced action preserves the Gram inner product, since each pairing $\langle\rho_gv_i,\rho_gw_j\rangle$ equals $\langle v_i,w_j\rangle$, and it fixes $\omega$ because its determinant is $1$. Applying it to the Hodge identity shows $g\cdot\star\beta$ satisfies the defining identity for $\star(g\cdot\beta)$; uniqueness in [F2] gives $g\cdot\star=\star\,g\cdot$. [given, F1, F2, construct, algebra]

2.1 Put $w_j^+=e_{2j-1}+ie_{2j}$ and $w_j^-=e_{2j-1}-ie_{2j}$. With the Cartan basis $H_j=-iR_j$ fixed in [[lem-spin8-modules-well-defined]], the vectors $w_j^\pm$ have weights $\pm\xi_j$. For signs $s_j\in\{+1,-1\}$, expansion in the ordered real basis gives
$$\star(w_1^{s_1}\wedge\cdots\wedge w_4^{s_4})=(s_1s_2s_3s_4)(w_1^{s_1}\wedge\cdots\wedge w_4^{s_4}).$$
Indeed, a term with $k$ even-indexed basis vectors has Hodge sign $(-1)^k$, and the ratio of its coefficient to that of the complementary term is $(-1)^k\prod_js_j$, so every complementary pair has the displayed common eigenvalue. The vectors $w_1^+\wedge\cdots\wedge w_4^+$ and $w_1^+\wedge w_2^+\wedge w_3^+\wedge w_4^-$ therefore lie in the $+$ and $-$ eigenspaces and have weights $2\lambda_4=\xi_1+\xi_2+\xi_3+\xi_4$ and $2\lambda_3=\xi_1+\xi_2+\xi_3-\xi_4$, respectively. Each is killed by every positive-root operator: adding any positive root $\xi_i\pm\xi_j$ with $i<j$ gives a coordinate $2$, while every $\Lambda^4V_\mathbb C$ weight is a sum of four distinct weights among $\pm\xi_j$ and has coordinates in $\{-1,0,1\}$. For either $\mu=2\lambda_4=(1,1,1,1)$ or $\mu=2\lambda_3=(1,1,1,-1)$, the shifted-coordinate squares $(\mu_i+\rho_i)^2$ are $(16,9,4,1)$, where $\rho=\frac12\sum_{\alpha\in\Phi^+}\alpha=(3,2,1,0)$. Pairing the positive roots $\xi_i\pm\xi_j$ in the Weyl dimension formula gives denominator $\prod_{i<j}(\rho_i^2-\rho_j^2)=4320$ and numerator $\prod_{i<j}((\mu_i+\rho_i)^2-(\mu_j+\rho_j)^2)=7\cdot12\cdot15\cdot5\cdot8\cdot3=151200$ for either weight. Thus each corresponding irreducible module has dimension $151200/4320=35$. [F1, F5, A1, step 1.1, algebra]

3.1 The $+$ eigenspace is Spin(8)-invariant by step 1.1, and the positive-definite Gram inner product from the Statement complexifies to a positive-definite invariant Hermitian form by step 1.1. Orthogonal complements therefore decompose this finite-dimensional complex representation into irreducible submodules, and the corresponding orthogonal projections commute with the Lie-algebra action. A nonzero projection of the highest-weight vector in step 2.1 is still killed by all positive-root operators and has weight $2\lambda_4$. By [F3] this weight is dominant integral; its summand is $L(2\lambda_4)$ by [F4], and its dimension is $35$ by the Weyl calculation in step 2.1. The whole complexified $+$ eigenspace has dimension $35$ by step 1.1, so that summand is the entire eigenspace; it is irreducible of highest weight $2\lambda_4$. A nonzero real invariant subspace complexifies to this whole $35$-dimensional complex module, so its real dimension is $35$ and it is the full real eigenspace. Thus the real $+$ eigenspace is irreducible. [F3, F4, step 1.1, step 2.1]

4.1 The $-$ eigenspace is Spin(8)-invariant by step 1.1, and the positive-definite Gram inner product from the Statement complexifies to a positive-definite invariant Hermitian form by step 1.1. Orthogonal complements therefore decompose this finite-dimensional complex representation into irreducible submodules, and the corresponding orthogonal projections commute with the Lie-algebra action. A nonzero projection of the highest-weight vector in step 2.1 is still killed by all positive-root operators and has weight $2\lambda_3$. By [F3] this weight is dominant integral; its summand is $L(2\lambda_3)$ by [F4], and its dimension is $35$ by the Weyl calculation in step 2.1. Since the whole complexified $-$ eigenspace has dimension $35$ by step 1.1, it equals this summand and is irreducible of highest weight $2\lambda_3$. A nonzero real invariant subspace complexifies to this whole $35$-dimensional complex module, so its real dimension is $35$ and it is the full real eigenspace. Thus the real $-$ eigenspace is irreducible. [F3, F4, step 1.1, step 2.1] ∎
