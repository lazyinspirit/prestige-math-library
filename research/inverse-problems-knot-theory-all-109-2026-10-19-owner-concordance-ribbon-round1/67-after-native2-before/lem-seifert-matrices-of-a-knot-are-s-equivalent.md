---
id: lem-seifert-matrices-of-a-knot-are-s-equivalent
kind: lemma
title: Seifert matrices of a knot are S-equivalent
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-seifert-matrix-s-equivalence
  - def-knot-seifert-pairing-and-matrix
  - def-seifert-surface-arc-surgery
  - lem-seifert-pairing-well-defined
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries
  - thm-linking-number-equals-signed-intersection
  - def-oriented-seifert-surface
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: W. B. Raymond Lickorish, An Introduction to Knot Theory
      url: https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf
      locator: Chapter 8, Theorem 8.2, printed pp. 79–81, and Theorem 8.4, printed pp. 81–82; complete surface-surgery argument and S-equivalence conclusion inspected.
    - title: Dale Rolfsen, Knots and Links
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
      locator: §8.A, printed pp. 200–203; Seifert-form convention and surface dependence
---

## Statement

Assume full AC. Let $K$ be a smooth oriented knot in the oriented standard $3$-sphere, and let $F,F'$ be any connected compact smooth oriented spanning surfaces for $K$. For any ordered integral bases of $H_1(F;\mathbb Z)$ and $H_1(F';\mathbb Z)$, the matrices of the positive-push Seifert pairing are related by a finite sequence of integral unimodular congruences and the two rank-two elementary Seifert enlargements or their reverses.

## Statement references

[[def-seifert-matrix-s-equivalence|The integral congruence and elementary enlargement relation]]

[[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries|The draft surface-surgery interface used in the conditional proof]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, two connected smooth oriented spanning surfaces $F,F'$, and ordered integral bases for their first homology groups.

[A1] Full AC is the choice-function axiom assumed by the knot Seifert-pairing interface. [[def-axiom-of-choice]]

[F1] The positive-push pairing is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ and is bilinear on integral homology classes. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-pairing-well-defined]]

[F2] If an ambient isotopy carries one oriented knot-surface pair to another, the transported basis has the same Seifert matrix; changing an integral basis gives a unimodular congruence. [[lem-seifert-matrix-s-equivalence-under-isotopy]]

[F3] An arc surgery replaces two disks by the lateral annulus of a product cylinder while preserving the oriented boundary knot. [[def-seifert-surface-arc-surgery]]

[F4] The two elementary enlargement matrices are $E_0(V;x,y,z)$ and $E_1(V;x,y,z)$ as defined in S-equivalence. [[def-seifert-matrix-s-equivalence]]

[F5] A knot Seifert surface is connected, compact, smooth, oriented, embedded, and has the specified oriented knot as boundary. [[def-oriented-seifert-surface]]

[F6] For disjoint oriented knots, linking is the signed intersection with a spanning surface and is symmetric in the two components; the mixed-crossing formula gives the same half-sum after the components are interchanged. [[thm-linking-number-equals-signed-intersection]]

[F7] The skew part of the positive-push Seifert matrix is the oriented intersection form on the surface. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[L1] The current draft supplier asserts that any two such surfaces are connected by finitely many ambient isotopies and arc surgeries, but its proof has not been established as a valid supplier. [[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries]]

## Proof

1.1 At an isotopy step in a proposed surface sequence, [F2] gives equality of the matrices in the transported basis. If the target basis is changed by $P\in\mathrm{GL}_{2g}(\mathbb Z)$, bilinearity gives $V'=P^TVP$, which is one of the defining S-equivalence moves by [F4]. [A1, F1, F2, F4, given, algebra]

1.2 Consider one arc surgery, conditional on such a surgery being part of the sequence. Choose the old basis curves away from the two surgery disks. The added product cylinder contributes a longitudinal class $b$ and a meridian class $c$; together with the old basis these form an integral basis of the new surface because the surgery adds one orientable handle and hence two first-homology generators. In a cross-section $\{t_0\}\times D^2$ of the cylinder, $c=\{t_0\}\times\partial D^2$ bounds the disk $D=\{t_0\}\times D^2$ and the longitudinal class $b$ meets $D$ once. The disk and its parallel copies miss the old curves and their positive push-offs, so both pairings between $c$ and every old basis curve vanish. The disk $D$ misses $b^+$, which lies outside the cylinder, so [F6] gives $V(b,c)=\operatorname{lk}(b^+,c)=0$. A parallel disk just outside the cylinder bounds $c^+$ and meets $b$ once, so symmetry in [F6] gives $V(c,b)=\operatorname{lk}(c^+,b)=\operatorname{lk}(b,c^+)=\pm1$; orient $c$ to make this entry $+1$. The same disks show $V(c,c)=0$. The tube core has integer self-linking $z=V(b,b)$, and its pairings with the old curves give integer column and row vectors $x$ and $y^T$. By [F7], the difference between the two new cross entries equals the oriented intersection of the same ordered basis curves, so this is exactly one of $E_0(V;x,y,z)$ or $E_1(V;x,y,z)$, up to an integral basis change. [A1, F1, F3, F4, F5, F6, F7, given, construct]

2.1 If [L1] is established, it supplies a finite sequence of isotopies and arc surgeries from $F$ to $F'$. Steps 1.1 and 1.2 turn each member of that sequence into a defining S-equivalence move, so their finite composition proves the statement. The body of [L1] has not been verified; therefore this proof remains conditional and this item is escalated. [F2, F3, F4, L1, step 1.1, step 1.2, construct] ∎

## Unresolved proof obligation

The missing verification is the full surface-surgery theorem [L1], including its asserted finite sequence for arbitrary spanning surfaces. The current draft proof uses a maximal-deck-translate argument and a regular-neighborhood reduction whose projection-injectivity and strict intersection-decrease claims are not justified in the supplier body. Until that proof is repaired or replaced by a complete authoritative argument, this item cannot be marked ready.
