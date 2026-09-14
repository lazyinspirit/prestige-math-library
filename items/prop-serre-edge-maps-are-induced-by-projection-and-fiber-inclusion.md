---
id: prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion
kind: proposition
title: Serre edge maps come from projection and fiber inclusion
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-serre-edge-homomorphisms-and-transgression, thm-naturality-of-the-homological-serre-spectral-sequence, lem-edge-homomorphisms-are-natural, def-homology-and-cohomology-with-local-coefficients, def-singular-and-cellular-chain-complexes-with-local-coefficients]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lecture 26"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Propositions 26.2–26.3, printed pp. 88–90"
---

## Statement

Let $p:E\to B$ be a Serre fibration over a path-connected CW complex, let $R$
be a commutative unital ring, and use the homological edge maps of
[[def-serre-edge-homomorphisms-and-transgression]]. For a supplied zero-cell
$b\in B^0$, put $F_b=p^{-1}(b)$ and let $i_b:F_b\hookrightarrow E$.

The canonical map from the stalk to zeroth local-coefficient homology,
$$\kappa_b:H_n(F_b;R)\twoheadrightarrow H_0\bigl(B;\mathcal H_n(p;R)\bigr),$$
is surjective, and the fiber edge is the unique map satisfying
$$\epsilon_F\kappa_b=(i_b)_*:H_n(F_b;R)\longrightarrow H_n(E;R).$$
Thus nontrivial monodromy is handled by the coinvariant-type quotient
$H_0(B;\mathcal H_n)$; it is not handled by restricting to invariants.

The fiber augmentations $H_0(F_x;R)\to R$ form a morphism
$\mathcal H_0(p;R)\to\underline R$. If
$$a_*:H_n\bigl(B;\mathcal H_0(p;R)\bigr)\longrightarrow H_n(B;R)$$
is its induced map, then the base edge satisfies
$$a_*\epsilon_B=p_*:H_n(E;R)\longrightarrow H_n(B;R).$$
If every fiber is nonempty and path connected, the augmentation is an
isomorphism of local systems, so after this canonical identification the base
edge is exactly $p_*$. The homological assertions are choice-free.

The dual cohomological slogan uses invariants instead: when an AC-dependent
cohomological Serre sequence and its naturality have been supplied, its
fiber-axis edge lands in $H^0(B;\mathcal H^n)$, whose inclusion into a chosen
stalk is followed by $i_b^*$. This conditional dual remark is not used in the
homological proposition.

## Facts & Assumptions

**Given:** The Serre fibration, its normalized edge maps, and a supplied zero-cell of the nonempty base.

[F1] [[def-serre-edge-homomorphisms-and-transgression]] fixes the two homological edge directions and their local-coefficient axis groups.

[F2] [[thm-naturality-of-the-homological-serre-spectral-sequence]] supplies compatible page and filtered-abutment maps for squares over cellular base maps. [[lem-edge-homomorphisms-are-natural]] says the normalized edges commute with such compatible morphisms.

[F3] [[def-singular-and-cellular-chain-complexes-with-local-coefficients]] gives the degree-zero local boundary relations, and [[def-homology-and-cohomology-with-local-coefficients]] defines their homology and identifies a constant system with ordinary coefficients.

## Proof

**Proof technique:** naturality against the point and identity fibrations.

1.1 Apply the Serre construction to the fibration $F_b\to\{b\}$. Its second page is concentrated in the column $a=0$, with $E^2_{0,n}=H_n(F_b;R)$; its image filtration has $F_0H_n=H_n(F_b;R)$. Hence its fiber edge is the identity under these canonical identifications. The square from this fibration to $p$, with total map $i_b$ and cellular base inclusion $\{b\}\hookrightarrow B$, has second-page vertical-axis map $\kappa_b$. Naturality in [F2] therefore gives $\epsilon_F\kappa_b=(i_b)_*$. [F1, F2]

1.2 Map $p$ to the identity fibration $1_B:B\to B$ by the square with total map $p$ and base map $1_B$. On a fiber this is the collapse $F_x\to\{x\}$, whose map on $H_0$ is the augmentation. Thus the second-page bottom-row map is $a_*$. The identity fibration has second page concentrated in row zero and its base edge is the identity on $H_n(B;R)$. Edge naturality in [F2] gives $a_*\epsilon_B=p_*$. [F1, F2, F3]

2.1 To see directly that $\kappa_b$ is epic, [F3] presents $H_0(B;\mathcal H_n)$ as the direct sum of all stalks modulo the relations $T_\gamma(m)$ at the terminal vertex minus $m$ at the initial vertex. For any generator $m$ in a stalk at $x$, path connectedness supplies a path from $b$ to $x$, and its relation expresses $m$ as the image under $\kappa_b$ of the inverse transport of $m$. This is a one-generator argument and makes no simultaneous selection of paths. The same relation and the homotopy in $E$ traced by fiber transport show directly that $(i_b)_*$ kills the kernel relations, agreeing with the naturality proof in Step 1.1. [F3, Step 1.1]

2.2 If every fiber is nonempty and path connected, its augmentation $H_0(F_x;R)\to R$ is an isomorphism, and fiber transport commutes with augmentation. Its inverse sends $1$ to the class of any point; path connectedness makes that class independent of the point, so the inverse is canonical and natural in $x$. Hence $a_*$ is the canonical identification with ordinary coefficients from [F3], and Step 1.2 identifies $\epsilon_B$ itself with $p_*$. [F3, Step 1.2]

3.1 For $n=0$, the degree-zero local boundary relations used in Step 2.1 are exactly the relevant coinvariant relations. Empty fibers give zero stalks and a zero fiber edge; if the base is empty there is no supplied $b$ and only the zero base-edge assertion remains. The zero ring, point fibers, the identity fibration, constant monodromy, one path relation, constant paths, and degenerate simplices are all covered by Steps 1.1–2.2. Both edge directions and both factorization equalities are explicit. Each path is chosen only for one displayed generator, so no AC is used. The proposition has no iff assertion. [F1, F2, F3, Step 1.1, Step 2.1, Step 1.2, Step 2.2] ∎
