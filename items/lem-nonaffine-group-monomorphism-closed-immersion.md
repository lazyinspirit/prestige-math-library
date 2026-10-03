---
id: lem-nonaffine-group-monomorphism-closed-immersion
kind: lemma
title: "Finite-type algebraic group monomorphisms are closed immersions"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-scheme-zariski-main-factorization-quasi-finite, lem-finite-presentation-image-constructible, lem-proper-source-to-separated-target-proper, thm-nakayama-lemma, lem-nonaffine-global-sections-flat-field-base-change, thm-existence-of-algebraic-closures, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Brion, Some structure theorems for algebraic groups, Proposition 2.7.1, p.19"
      url: https://arxiv.org/pdf/1509.03059
    - title: "SGA3, Expose VIA, 2.5.2"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp6A-13oct24.pdf
---

## Statement

Assume the Axiom of Choice. A homomorphism of separated finite-type $k$-group schemes with trivial scheme-theoretic kernel is a closed immersion. More generally, the topological image of any such homomorphism is closed and its scheme-theoretic image is a closed subgroup scheme.

## Facts & Assumptions

[F1] Finite-presentation morphisms have constructible image. A separated quasi-finite morphism to a quasi-compact quasi-separated scheme factors as an open immersion followed by a finite map. ([[lem-finite-presentation-image-constructible]], [[lem-scheme-zariski-main-factorization-quasi-finite]])

[F2] A map from a proper scheme over a base to a separated scheme over that base is proper and hence closed. Nakayama detects surjectivity of finite-module maps on residue fields. ([[lem-proper-source-to-separated-target-proper]], [[thm-nakayama-lemma]])

[F3] Scalar extension is exact over a field, and global sections commute with it; algebraic closures and rational closed points over them exist under AC. ([[lem-nonaffine-global-sections-flat-field-base-change]], [[thm-existence-of-algebraic-closures]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** AC and a homomorphism $f:G\to H$ of separated finite-type group schemes over $k$.

1.1 Let $I$ be the scheme-theoretic image, defined on target affine charts by the kernel of restriction to the source. This is a coherent ideal since the chart rings are Noetherian. It commutes with field extension by [F3]. Products of schematically dominant maps over a field remain schematically dominant: on product affine target charts use injectivity of the coordinate maps and exactness of tensoring; the equality of product global sections with the tensor product follows by applying the finite affine-cover equalizer twice, as in [F3]. The group identities of $f$ then force multiplication, inversion, and identity on $H$ to restrict to $I$: their defining ideal sections vanish after pullback to $G\times G$ or $G$, and schematic dominance detects that vanishing. Thus $I$ is a closed subgroup scheme. [F3, given, algebra, construct]

2.1 Over an algebraic closure, the image on closed points is a subgroup $S$ of $I(\bar k)$ and is constructible dense by [F1]. It therefore contains a dense open of the reduced $I$, dense on every irreducible component. For any $y\in I(\bar k)$, that open and its translate by $y$ intersect, because both are dense opens. A closed point in their intersection gives $y=uv^{-1}$ with $u,v\in S$. Hence $S=I(\bar k)$. The complement of the topological image, if nonempty after scalar extension, would have a closed point: the image is constructible, so a nonempty complement contains a locally closed finite-type subset. Thus $f$ is onto $I$ topologically, and its image in $H$ is closed. This conclusion descends to $k$ by surjectivity of the scalar-extension projections. [F1, F3, step 1.1, algebra]

3.1 Suppose now that the scheme kernel is trivial. For every test scheme, two points with equal image differ by a kernel point, so $f$ is a monomorphism. Over a geometric point in $I$, translation by any source point identifies its fibre with the kernel; by step 2.1 such a source point exists. Thus each geometric fibre is a single reduced point, and $f:G\to I$ is quasi-finite. Apply [F1] and replace the finite factor by the scheme-theoretic closure of the open $G$ in it. We obtain $G\subset\overline G$ open and schematically dense, with $\overline G\to I$ finite. The boundary image is closed and avoids all generic points of $I$: in a finite morphism the points above a generic target component are generic points of the components dominating it, and every such point lies in the dense open $G$. Hence $f$ is finite over a dense open of $I$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 Over $\bar k$, translations of that open by $I(\bar k)$ cover $I$: any closed point can be translated from a fixed closed point in the open. Each such translation lifts to a source translation by step 2.1, so $f_{\bar k}$ is finite on every translated open and hence finite globally. The open immersion $G_{\bar k}\subset\overline G_{\bar k}$ is proper by [F2], since its source is finite over $I_{\bar k}$ and its target separated over that base. Its image is therefore closed and also schematically dense, so the open image is the whole finite factor. The boundary of $G\subset\overline G$ consequently becomes empty after faithful scalar extension and is empty already. Hence $f:G\to I$ is finite over $k$. [F1, F2, F3, step 2.1, step 3.1, construct]

5.1 A finite monomorphism is a closed immersion. On an affine target chart its finite fibre algebra $D$ over a residue field has $D\otimes D\cong D$ by the diagonal condition, so its dimension is zero or one. In the nonempty case the unit map from that residue field is an isomorphism. The finite cokernel of the target-ring map therefore has zero reduction at every prime and vanishes by [F2]. Thus the ring map is onto on each affine chart. Applied to $f$, this proves the asserted closed immersion into $I$ and hence into $H$. AC is inherited from [F1]–[F3]. [F1, F2, F3, step 3.1, step 4.1, algebra] ∎
