---
id: def-local-intersection-form-for-a-soergel-summand
kind: definition
title: "The local intersection form on Hom(B_y, B_x B_s)"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-invariant-intersection-form-on-a-bott-samelson-bimodule, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-bilinear-symmetric-skew-and-alternating-forms, def-transpose-of-a-linear-map, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.2.2 (definition of the composition pairing (-,-)^{x,s}_y, its interpretation as a bilinear form after taking adjoints, and the definition of S^\\pm(y,x,s))"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Lemma 7.1(2), including the identification of the pairing with Hom(B_y, theta_sB_x) x Hom(theta_sB_x, B_y) -> End(B_y)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 (the forms on Hom_B(B_z, B_y \\otimes_R B_s) and the reference to Soergel's Lemma 7.1)"
verification:
  precheck: n/a
---

## Definition

**The setting.** Fix $x\in S_n$, a simple reflection $s$ with $xs>x$, and
$y<xs$ in the Bruhat order; assume $\mathrm{S}(z)$ for all $z<xs$. Choose
reduced-word embeddings $B_y^R\subseteq\!\!\bigoplus\mathrm{BS}(\underline y)$
and $B_x^R\subseteq\!\!\bigoplus\mathrm{BS}(\underline x)$, and equip $B_y^R$,
$B_x^R$ with the positively normalized non-degenerate invariant forms obtained
by restriction, so that the bottom Lefschetz values are $+1$; equip
$M:=B_x^RB_s^R$ with the induced invariant form of
[[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]. Under
$\mathrm{S}(y)$ and $\mathrm{S}(x)$ these forms exist and are unique up to
positive scalars, and the choices enter only through positive factors
([[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

**The local intersection form.** Let
$$E_y:=\operatorname{Hom}^0(B_y^R,M)$$
be the finite-dimensional real space of degree-zero bimodule maps. For
$f,g\in E_y$ define the **local intersection form**
$$(f,g)^{x,s}_y:=g^*\circ f\ \in\ \operatorname{End}^0(B_y^R)=\mathbb R,$$
where $g^*:M\to B_y^R$ is the **adjoint** of $g$ with respect to the two
non-degenerate forms, uniquely characterized by
$\langle g(b),m\rangle_M=\langle b,g^*(m)\rangle_{B_y}$ for all $b\in B_y^R$,
$m\in M$; adjunction is the standard transpose operation of
[[def-transpose-of-a-linear-map]] under the identifications
$B_y^R\to (B_y^R)^*$ and $M\to M^*$ induced by the forms
([[def-algebraic-dual-and-linear-functional]]). The adjoint construction
identifies $\operatorname{Hom}^0(B_y^R,M)$ with
$\operatorname{Hom}^0(M,B_y^R)$.

**Basic properties.** The form $(-,-)^{x,s}_y$ is symmetric: the adjoint of
$g^*f$ is $f^*g$, and a scalar endomorphism of $B_y^R$ is self-adjoint for its
invariant form. It is $\mathbb R$-bilinear, and it changes only by a positive
scalar when the chosen normalized forms or reduced-word embeddings are varied:
scaling the form on $M$ by $a>0$ and the form on $B_y^R$ by $b>0$ scales
$(-,-)^{x,s}_y$ by $a/b$, and the invariant-form uniqueness lemma shows that any
two choices compare by positive scalars. Define
$$\mathrm{S}^\pm(y,x,s)$$
to mean that $(-,-)^{x,s}_y$ is definite of sign
$(-1)^{(\ell(x)+1-\ell(y))/2}$, respectively its negative, with the parity
convention of
[[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]: when the
numerator is odd the corresponding primitive space is zero and the sign
condition is not used.

**Status.** The definition uses degree-zero Hom throughout; no statement
identifies the rank of the full graded Hom module with a Kazhdan-Lusztig
multiplication coefficient. The dimension of $E_y$ in terms of the
multiplication formula, and the equivalence of non-degeneracy of these forms
with the actual summand multiplicities of $M$, are proved in the detection
theorem later on this page; they are not part of this definition.

## Remark

- The adjoint $g^*$ exists and is unique because the forms involved are
  non-degenerate and invariant: an invariant form on a finite right-free
  bimodule is the same as an isomorphism to the dual bimodule, and composing
  $g$ with the two form-isomorphisms gives a degree-zero bimodule map
  $M\to B_y^R$.
- The normalizations are chosen so that the bottom Lefschetz value is $+1$; by
  the uniqueness lemma the comparison between any two such normalizations is by
  a positive scalar, so the sign of the local intersection form, hence the
  statement $\mathrm{S}^\pm(y,x,s)$, is well defined independently of the
  choices.
