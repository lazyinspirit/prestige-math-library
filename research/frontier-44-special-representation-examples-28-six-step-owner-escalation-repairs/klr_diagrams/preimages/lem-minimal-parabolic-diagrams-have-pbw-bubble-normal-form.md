---
id: lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form
kind: lemma
title: "PBW and bubble normal form in the minimal-parabolic diagram category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [def-minimal-parabolic-klr-diagram-proof-category,
       lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-graded-ring-module-bimodule-and-internal-shift,
       thm-klr-pbw-basis-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020"
      locator: "Sections 1.1-1.4, PDF pages 5-21: Definition 1.1, the matching-diagram calculus of Definition 1.2, the polynomial model of Theorem 1.4, and the basis statement after the local relations."
    - title: "Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3"
      url: "https://arxiv.org/pdf/0812.5023"
      locator: "Sections 3.2.1-3.2.3, PDF pages 22-27: the downward KLR presentation and PBW; Section 5.2, PDF pages 54-55: the rank-one unit."
---

## Statement

Fix a color $i$. In the formal graded minimal-parabolic proof category of
[[def-minimal-parabolic-klr-diagram-proof-category]], the reduced
perfect-matching diagrams, dot monomials on their open components, and
monomials in the independent far-left normalized $i$-bubble coefficients form
a basis of every morphism space. In particular, at all-downward boundaries of
weight difference $\beta$, the morphism space is the corresponding KLR PBW
corner tensored with the polynomial ring in one positive bubble family; the
opposite/fake family is its coefficientwise reciprocal. The graded polynomial
flag models of
[[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]],
with universal monic framing and arbitrarily large auxiliary framing at each
fixed physical source weight, are jointly faithful. The assertion is about this
formal proof category before cyclotomic quotient transfer.

## Facts & Assumptions

**Given:** The formal graded minimal-parabolic proof category
$\mathcal P_i$ of [[def-minimal-parabolic-klr-diagram-proof-category]] for a
fixed color $i$, with its generators, graded shifts and relations.

[F1] The relations of $\mathcal P_i$ are the model-verified local equations of
[[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]]:
downward KLR relations, both rank-one triangles with cyclic dots, the
rho/cross-and-cap equations, bubble inversion, the mixed cap/cup equations and
the finite-coefficient bubble slides; the polynomial flag models realize all of
them.

[F2] The PBW basis of the KLR algebra
([[thm-klr-pbw-basis-theorem]],
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]) and the
grading conventions of [[def-klr-grading-and-diagrammatic-composition]] with
internal shifts of [[def-graded-ring-module-bimodule-and-internal-shift]].

## Proof

**Proof technique:** verify the bubble slides on the model, straighten an
arbitrary diagram by a finite lexicographic induction to a reduced matching
with dots and bubbles, and prove independence by a degree-separation argument
in the universal framed model.

1.1 Bubble slides on the model. For an $i$ root $x$ the normalized bubble series changes by $(1-xt)^{\pm2}$, and for a spectator $j$ root $y$ it changes by $q_{ij}^{\mathrm{rev}}(y,t)^{\pm1}$ with $q_{ij}^{\mathrm{rev}}=t^{-a_{ij}}Q_{ij}(t^{-1},y)/t_{ij}$ of constant coefficient $1$. These hold directly because the model series is $p^{\mathrm{rev}}/(c_r^{\mathrm{rev}})^2$, adjoining an $i$ root multiplies $c_r$ by $u-x$, and adjoining a spectator root multiplies $p$ by $Q_{ij}/t_{ij}$; every fixed inverse coefficient is a finite polynomial recursion. These are the specified formal relations, checked on the model and not derived from the faithfulness being proved. [F1, algebra]

2.1 Straightening to normal form. Move dots to fixed component positions using cyclicity and the KLR dot moves; an equal-color correction has one fewer crossing. Sort each $i$ cup/cap towards a boundary or the far-left closed-component position using the specified mate equations: a main term passes one of its finitely many crossing obstacles, and a correction term removes an unsorted open-component extremum or such an obstacle. Rank-one cross-and-cap sums are finite because open dot counts are nonnegative and negative-degree bubbles vanish, bounding the indices at each fixed total degree; adjacent opposed cup/cap pairs cancel by the triangles. Induct on the lexicographic pair (unsorted extrema, remaining crossing obstacles) and on crossing length for correction terms. Closed components have color $i$; cancel extra extrema, slide them left by the finite coefficient equations, and express the reverse family by bubble inversion. Coxeter deletion plus the KLR braid and quadratic straightening then reduce every open matching to the selected reduced diagram, all braid defects being shorter. This gives a finite spanning family of reduced matchings with dot monomials and far-left bubble monomials. [step 1.1, F1, F2]

3.1 All-downward boundaries. At an all-downward boundary every open arc joins bottom to top, so it is a colored permutation; the reduced matching together with its dots is exactly a KLR PBW monomial, and the morphism space is the PBW corner tensored with the polynomial ring in the positive bubble family, whose opposite family is the coefficientwise reciprocal by bubble inversion. For general boundaries the two triangles give invertible Hom correspondences bending the upward $i$-endpoints to the other boundary, and the straightening of step 2.1 has unit leading matching coefficients, so the same normal form transfers. [step 2.1, F1, F2]

4.1 Independence by degree separation. Fix the physical source weight $\mu$ and write $\mu_i=\langle h_i,\mu\rangle$; choose spectator background counts $m_j$ with $A_{\mathrm{spect}}=\sum_{j\ne i}(-a_{ij})m_j$ and for an increasing background $i$-count $r$ set $N=\mu_i+2r$, $\lambda_i=N-A_{\mathrm{spect}}$, so the physical weight $N-2r=\mu_i$ is fixed. Use the universal monic framing $a_i(u)=u^{\lambda_i}+z_1u^{\lambda_i-1}+\cdots+z_{\lambda_i}$ with independent $\deg z_a=2d_ia$, put $p=a_i\prod_{j\ne i}Q_{ij}/t_{ij}$ and $c_r=\prod_a(u-x_a)$; the normalized series $\mathcal B(t)=p^{\mathrm{rev}}/(c_r^{\mathrm{rev}})^2=a_i^{\mathrm{rev}}U(t)$ with $U_0=1$ has coefficients $\mathcal B_a=z_a+\sum_{1\le\ell<a}z_\ell U_{a-\ell}+U_a$, unit triangular in the framing variables, with reciprocal coefficients $-z_a$ plus lower framing indices. Hence the first $D$ bubble coefficients are independent whenever $\lambda_i\ge D$, in every characteristic and at every physical weight; no unit old-root coefficient is claimed, since $\mathcal B_1=p_1+2e_1$ can lose its root term in characteristic two. A nonzero finite PBW/bubble combination remains nonzero after this triangular substitution over the independent polynomial coefficient domain; the generic KLR polynomial representation has a distinct nonzero leading permutation for each selected crossing word, so a polynomial test vector with nonzero output exists after clearing a finite denominator. Let $D$ bound the bubble indices and $B$ the actual internal degrees of that vector and its output, both finite in the untruncated polynomial ring, and let $L$ bound the number of added $i$-flags tested. Every monic flag relation and factor-ring coefficient relation after those flags has degree at least $2d_i(\mu_i+r-L+1)$, spectator appends only increase $N$, all variables are nonnegatively graded and all dot degrees are positive; choosing $r\ge0$ and $\lambda_i\ge D$ with $2d_i(\mu_i+r-L+1)>B$ (possible at fixed $\mu$) separates all model relations from degree $\le B$, so the nonzero PBW output survives in that flag model. [step 3.1, F1]

5.1 Conclusion. The family of step 2.1 spans every morphism space by a finite straightening, and step 4.1 shows that no nonzero combination of its reduced matchings, dot monomials and independent bubble monomials vanishes in some graded flag model, so the family is a basis and the stated models are jointly faithful. The model's ordered word shifts with $i$ last make every crossing homogeneous of degree $-b_{jk}$, and the formal upward generator is the normalized $H_i$, so the witness is a witness in the specified graded model; the assertion concerns the formal proof category before any cyclotomic quotient transfer. [step 2.1, step 3.1, step 4.1] ∎
