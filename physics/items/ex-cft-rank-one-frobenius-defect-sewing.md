---
id: ex-cft-rank-one-frobenius-defect-sewing
kind: example
title: "Rank-one Frobenius defect sewing with every coefficient equal to one"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-mtc-symmetric-special-frobenius-defect-data
  - thm-weighted-rt-tqft-and-factorization
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-cft-mtc-symmetric-special-frobenius-defect-data: mathematical-premise
  thm-weighted-rt-tqft-and-factorization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Fjelstad, Fuchs and Stigner, RCFT with Defects: Factorization and Fundamental World Sheets, arXiv:1202.3929v2"
      url: "https://arxiv.org/pdf/1202.3929v2"
      locator: "Equations (2.32), (2.40), (2.45)–(2.51), (4.5), (A.9)–(A.12): conventions for the identities checked directly in this generated example."
    - title: "Fjelstad, Fuchs, Runkel and Schweigert, TFT Construction of RCFT Correlators V, arXiv:hep-th/0503194v2"
      url: "https://arxiv.org/pdf/hep-th/0503194v2"
      locator: "Section 4.2 and Appendix C.1: boundary projector and two-point coefficient conventions."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Assume that every set-indexed family of nonempty sets has a choice function, and that every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets admits a function $f$ with $f(n)\in X_n$ for all $n$. These are the Axiom of Choice and countable choice required by the weighted RT construction used below.

Take $\mathcal C=\operatorname{Vect}^{\mathrm{fd}}_{\mathbb C}$, the category of finite-dimensional complex vector spaces and linear maps, with ordinary tensor product, flip braiding $c_{U,V}(u\otimes v)=v\otimes u$, identity twist, linear duals, and the canonical double-dual pivotal map. There is one simple label $0$, represented by $U_0=\mathbf1=\mathbb C$; choose its basis vector $1$. Set $A=B=\mathbb C$ and use
$$ m(a\otimes b)=ab,\quad\eta(z)=z,\quad\Delta(a)=a(1\otimes1),\quad\epsilon(a)=a. $$
Take the identity defect $X=\mathbb C$ with left and right scalar multiplication, and boundary modules $M_\ell=M_r=\mathbb C$ with scalar action. All chosen chiral, region, defect, and boundary labels are this unit. Identify every tensor power of the unit with $\mathbb C$ using $1^{\otimes n}\mapsto1$; all normalized structural coupons, chosen field-basis coupons, evaluations, and coevaluations then have scalar $1$.

For the normalized ribbon/TQFT data choose $D=1$, $S=(1)$, $\kappa=1$, unit Kirby color, and the basis $1$ of every resulting unit-labeled RT state space. Give a compact oriented doubled worldsheet any of the permitted Lagrangians and integer weights. The selected trivial weighted TQFT assigns $\mathbb C$ to every such surface, including the empty surface, and the identity map to each weighted bordism whose labels and coupons are the selected unit data. Tensor identifications use $1\otimes1\mapsto1$. For a graph with additional scalar coupons $t_1,\ldots,t_n$, its map is multiplication by $\prod_j t_j$; the empty product is $1$. The normalized RT surgery expression for these data has exactly this value.

For every finite oriented FRS worldsheet built from these labels with all coupons equal to the selected basis coupons, the connecting-graph correlator is $1$. The relative-tensor projector and marked-torus projector are identities on $\mathbb C$. Every nonempty bulk or boundary field space has basis $1$, every paired two-point matrix is $(1)$, and the bulk and boundary sewing coefficients are both $1$. Thus cutting and capping along either of the declared cut geometries, followed by its weighted gluing, gives the directly checked identity $1=1\cdot1$. This checks a concrete instance without using the general defect factorization theorem. It neither proves that theorem nor constructs an analytic full CFT or a physical path-integral measure.

## Example references

[[def-cft-mtc-symmetric-special-frobenius-defect-data]]

[[thm-weighted-rt-tqft-and-factorization]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The finite-dimensional category, scalar maps, normalizations, worldsheet labels, basis coupons, and weighted TQFT data specified in the Example. Arbitrary scalar coupons are used only to verify compatibility of the selected functor with linearity and composition; the asserted correlator $1$ uses the selected coupons $1$.

[F1] [[def-cft-mtc-symmetric-special-frobenius-defect-data]] specifies the modular category, symmetric special Frobenius algebra, module and bimodule equations, induced field spaces, relative tensor product, connecting-graph correlators, and two-point pairings to be checked. No general sewing or nondegeneracy theorem is used below.

[F2] [[thm-weighted-rt-tqft-and-factorization]] supplies the normalized weighted RT functor, its Hom state spaces, composition, duality and normalized sewing maps under its stated choice assumptions. The unit-label calculation below evaluates that construction directly; it does not use the theorem's general factorization conclusion.

[A1] The two choice assumptions are the set-indexed and countable-family principles stated in the Example; their formal definitions are [[def-axiom-of-choice]] and [[def-countable-choice]]. They enter only through [F2], not through any finite-dimensional selection in this example.

## Verification

1.1 Every finite-dimensional vector space is a finite direct sum of copies of $\mathbb C$, and a subspace has a linear complement by finite basis extension. The unit is simple, its endomorphisms are scalars, and there is exactly one simple isomorphism class. The flip obeys the braiding identities on pure tensors; its square is the identity. Ordinary evaluations and coevaluations satisfy both duality snakes on each basis vector. The canonical pivotal trace is the ordinary trace, hence $d_0=1$. The identity twist obeys the ribbon identities because the double flip and its dual are identities. The unnormalized Hopf-link matrix is $(\operatorname{tr}(\operatorname{id}_{\mathbb C}))=(1)$ and is invertible, so this is a modular ribbon fusion category. [given, F1, algebra]

2.1 Under the selected tensor identifications, all four algebra maps have scalar $1$. Associativity, unitality, coassociativity, counitality, and the three Frobenius composites are consequently equal maps with scalar $1$ on their common one-dimensional source and target. In particular $m\Delta=\operatorname{id}$, $\epsilon\eta=1=d_A$, and $d_A\ne0$. Both transposes of the pairing $a\otimes b\mapsto ab$ send $a$ to the functional $b\mapsto ab$, proving symmetry. Scalar bimodule endomorphisms of $A$ form $\mathbb C\operatorname{id}$, so $A$ is simple as a bimodule; the same holds for $B$. Scalar actions are associative, unital and commuting, verifying every module and bimodule clause for $M_\ell,M_r,X$. [given, F1, step 1.1, algebra]

3.1 The two balancing maps $X\otimes B\otimes M_\ell\rightrightarrows X\otimes M_\ell$ both send $x\otimes b\otimes m$ to the scalar $xbm$. Their coequalizer is therefore the identity of the one-dimensional target, with the canonical identification $X\otimes_BM_\ell=\mathbb C$. Also $e_B=\Delta\eta$ sends $1$ to $1\otimes1$, so the explicit projector $P_{X,M_\ell}$ sends $x\otimes m$ to $x\otimes m$. Choose its inclusion and restriction to be the identity under the selected tensor identifications. The descended $A$-action is scalar multiplication. The boundary projector on $M_r^\vee\otimes (X\otimes_BM_\ell)$ is identically $1$ by the same calculation. [given, F1, step 2.1, algebra]

4.1 Since every simple label is $0=\bar0$, both bulk defect-field spaces in [F1] are $\operatorname{Hom}_{\mathbb C|\mathbb C}(\mathbb C,\mathbb C)=\mathbb C$; the induced left and right actions are scalar multiplication, including the inverse-braiding convention since both flips are identity on the unit. Choose the basis morphism $1\mapsto1$ in each space. Both boundary-defect spaces, and both defect-free boundary spaces, are likewise $\operatorname{Hom}_{\mathbb C}(\mathbb C,\mathbb C)=\mathbb C$, with that same basis. The composition-trace pairing of two basis morphisms is $1$, so these bases are trace dual as well as composition dual. [given, F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 In the unit-only RT handle decomposition there is one handle color, one simple summand at each cut, and every Hom tensor factor is $\operatorname{Hom}(\mathbb C,\mathbb C)=\mathbb C$ with basis $1$. Thus every state space specified in the Example is one-dimensional with the asserted tensor identifications. Every unit-colored closed ribbon, crossing, twist, evaluation or coevaluation has value $1$; a scalar coupon contributes precisely its scalar. The Kirby color has one summand of coefficient $d_0=1$. Moreover $\sum_i d_i^2=1$, the positive and negative Gauss sums are $1$, and the chosen $D=1$ gives $S_{00}=1$ and $\kappa=1$. In the normalized weighted surgery formula of [F2], every power of $D$ and every outgoing dimension factor equals $1$. The full anomaly factor is $\kappa^{n+a(R;\lambda,\alpha)-\sigma(B)}=1$, since $\kappa=1$. Here $a(R;\lambda,\alpha)\in\mathbb Z$ is the cap-reference correction in the exponent; its value need not be $1$ (and it is $0$ for the identity with matching reference). Only its multiplicative contribution $\kappa^{a(R;\lambda,\alpha)}$ is $1$. The graph value is exactly the product of the scalar coupons, even for disconnected bordisms. In particular all allowed Lagrangian choices and Maslov corrections give this same scalar. [A1, F2, given, step 1.1, step 4.1, algebra]

6.1 Composing two selected bordisms multiplies their scalar coupon products, just as composing their assigned linear maps does; the Maslov contribution is $1$ by step 5.1. The identity bordism has empty product $1$. Disjoint union concatenates coupon lists, agreeing with tensor product on $\mathbb C$ under $1\otimes1\mapsto1$. Evaluation and coevaluation on these state spaces both have scalar $1$ and satisfy the snakes, so the functor is compatible with duality. These checks verify directly the selected trivial normalized weighted TQFT, including its normalized tube maps, rather than assuming a general anomaly cancellation result. [A1, F2, given, step 5.1, algebra]

6.2 Every coupon in either connecting sphere or disk two-point graph has scalar $1$. Hence its RT vector is $1$ by step 5.1. Its chosen block basis is also $1$, so the coefficient matrix is $(1)$ with inverse $(1)$. Both induced pairing maps $\mathbb C\to\mathbb C^*$ send $1$ to the functional taking $1$ to $1$, and are isomorphisms. Similarly the marked-torus state space is $\mathbb C$, and the FRS projector graph consists only of the selected scalar-$1$ structural coupons and ribbons. It acts as $1$; its image basis and its dual cap basis are both $\{1\}$. The source's normalization $(d_pd_q)^2/(d_A d_X)$ is $1$, with nonzero denominator $d_A d_X=1$ in this example. [A1, F2, given, step 2.1, step 4.1, step 5.1, algebra]

7.1 A connecting graph with the selected coupons, before or after cutting and capping, has correlator $1$ by step 5.1. The gluing map has scalar $1$ by step 6.1, regardless of the integer weight chosen to match the composite. In the bulk sum the only labels are $p=q=0$, the only field indices are $\alpha=\beta=1$, and $d_pd_q(c^{\mathrm{def}}{}^{-1})_{\alpha\beta}=1\cdot1\cdot1=1$. In the boundary sum the only label is $i=0$ and $d_i(c^{\mathrm{bdef}}{}^{-1})_{\beta\alpha}=1\cdot1=1$. Each sewing identity is therefore the scalar equality $1=1$. Replacing the local boundary projector by its split inclusion/restriction changes only an identity map into the composite of two identity maps, so the defect-free boundary reduction also holds directly. This calculation establishes the claimed instance and uses no unresolved general factorization argument. [A1, F2, given, step 3.1, step 5.1, step 6.1, step 6.2, algebra] ∎
