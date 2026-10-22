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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

[[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries|A finite surface-surgery sequence for any two spanning surfaces]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, two connected smooth oriented spanning surfaces $F,F'$, and ordered integral bases for their first homology groups.

[A1] Full AC is the choice-function axiom assumed by the knot Seifert-pairing interface. [[def-axiom-of-choice]]

[F1] The positive-push pairing is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ and is bilinear on integral homology classes. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-pairing-well-defined]]

[F2] If an ambient isotopy carries one oriented knot-surface pair to another, the transported basis has the same Seifert matrix; changing an integral basis gives a unimodular congruence. [[lem-seifert-matrix-s-equivalence-under-isotopy]]

[F3] An arc surgery replaces two disks by the lateral annulus of a product cylinder while preserving the oriented boundary knot. [[def-seifert-surface-arc-surgery]]

[F4] The two elementary enlargement matrices are $E_0(V;x,y,z)$ and $E_1(V;x,y,z)$ as defined in S-equivalence. [[def-seifert-matrix-s-equivalence]]

[F6] For disjoint oriented knots, linking is the signed intersection with a spanning surface and is symmetric in the two components; the mixed-crossing formula gives the same half-sum after the components are interchanged. [[thm-linking-number-equals-signed-intersection]]

[F7] The skew part of the positive-push Seifert matrix is the oriented intersection form on the surface. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[L1] Any two such surfaces are connected by finitely many ambient isotopies fixing the boundary and embedded arc surgeries or their reverses. [[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries]]

## Proof

1.1 At an isotopy step in the finite surface sequence of [L1], [F2] gives equality of the matrices in the transported basis. If the target basis is changed by $P\in\mathrm{GL}_{2g}(\mathbb Z)$, bilinearity gives $V'=P^TVP$, which is one of the defining S-equivalence moves by [F4]. [A1, F1, F2, F4, given, algebra]

1.2 Consider one arc surgery in that sequence. Choose the old basis curves away from the two surgery disks. The added product cylinder contributes a longitudinal class $b$ and a meridian class $c$; together with the old basis these form an integral basis of the new surface because the surgery adds one orientable handle and hence two first-homology generators. In a cross-section $\{t_0\}\times D^2$ of the cylinder, $c=\{t_0\}\times\partial D^2$ bounds the disk $D=\{t_0\}\times D^2$ and the longitudinal class $b$ meets $D$ once. The disk and its parallel copies miss the old curves and their positive push-offs, so both pairings between $c$ and every old basis curve vanish. If the positive normal of the lateral annulus points outward from the cylinder, $b^+$ misses $D$ and the slightly larger disk bounded by $c^+$ meets $b$ once; hence [F6] gives $V(b,c)=0$ and $V(c,b)=\pm1$. If that normal points inward, the smaller disk bounded by $c^+$ misses $b$, while $b^+$ crosses $D$ once, giving $V(c,b)=0$ and $V(b,c)=\pm1$. Orient $c$ so the single nonzero entry is $+1$. The same disks show $V(c,c)=0$. The tube core has integer self-linking $z=V(b,b)$, and its pairings with the old curves give integer column and row vectors $x$ and $y^T$. By [F7], the difference between the two new cross entries equals the oriented intersection of the same ordered basis curves, so this is exactly one of $E_0(V;x,y,z)$ or $E_1(V;x,y,z)$, up to an integral basis change. [A1, F1, F3, F4, F6, F7, given, construct]

2.1 Apply [L1] to obtain a finite sequence of isotopies and arc surgeries or their reverses from $F$ to $F'$. Steps 1.1 and 1.2 turn every isotopy or forward surgery into a defining S-equivalence move, and reverse surgery gives its inverse. Their finite composition, including initial and final basis changes, proves the statement. [F2, F3, F4, L1, step 1.1, step 1.2, construct] ∎

