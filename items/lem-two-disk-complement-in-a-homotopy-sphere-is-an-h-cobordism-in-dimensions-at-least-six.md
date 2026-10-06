---
id: lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six
kind: lemma
title: "The two-disk complement of a homotopy sphere is an h-cobordism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-homotopy-sphere, def-h-cobordism, thm-seifert-van-kampen, thm-mayer-vietoris-sequence-in-singular-homology, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-whitehead-theorem, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, lem-relative-hurewicz-comparison-through-a-choice-free-weak-model, def-countable-choice, lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the two-disk complement of a homotopy sphere and the h-cobordism threshold n >= 6"
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 505-506, punctured homotopy spheres"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $d\ge6$, removing the interiors of two disjoint
smoothly embedded closed $d$-disks from a smooth homotopy $d$-sphere
$\Sigma$ gives a compact simply connected h-cobordism between two standard
$S^{d-1}$ boundary faces.

## Facts & Assumptions

**Given:** A smooth homotopy $d$-sphere $\Sigma$ with $d\ge6$ and two disjoint smoothly embedded closed disks $D_1,D_2\subseteq\Sigma$, with $W=\Sigma\setminus(\operatorname{int}D_1\cup\operatorname{int}D_2)$.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] Van Kampen computes the fundamental group of a union with connected overlap ([[thm-seifert-van-kampen]]), and the colimit decomposition of $W$ with a disk reattached gives $W$ simply connected because the disks and the overlap collar are simply connected for $d\ge6$. [A1, given]

[L2] Excision and the long exact sequence of the pair identify the homology of the complement of a disk with the homology of the punctured sphere, and the two-disk complement has the homology of $S^{d-1}\times[0,1]$, with each boundary inclusion inducing an isomorphism in integral homology ([[thm-excision-for-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-mayer-vietoris-sequence-in-singular-homology]], [[def-smooth-homotopy-sphere]]).

[L3] Under $\mathrm{AC}_\omega$ every compact smooth manifold has a finite CW model, and the simply connected finite-model homology criterion derived in [L2] of [[lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere]] applies ([[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]], [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]], [[thm-whitehead-theorem]]).

[L4] An h-cobordism between closed smooth manifolds is a compact cobordism whose two face inclusions are homotopy equivalences ([[def-h-cobordism]]).

## Proof

**Proof technique:** direct.

1.1 Removing finitely many disks leaves a path-connected manifold, since paths crossing them can be diverted along their connected boundary collars. Reattach the two disks successively to $W$, using collar-thickened open covers; each overlap retracts to the simply connected $S^{d-1}$. Van Kampen [L1] shows that each reattachment preserves the fundamental group. The final space is $\Sigma$, so $\pi_1(W)=\pi_1(\Sigma)=0$. [L1, A1, given]

2.1 Orient $\Sigma$. Excision identifies $H_k(\Sigma,W)$ with $H_k(D_1,\partial D_1)\oplus H_k(D_2,\partial D_2)$, zero except for $\mathbb Z^2$ in degree $d$. The map $H_d(\Sigma)=\mathbb Z\to\mathbb Z^2$ is $1\mapsto(1,1)$, using the two local disk orientations. The pair sequence therefore gives $H_d(W)=0$, $H_{d-1}(W)=\mathbb Z^2/\langle(1,1)\rangle\cong\mathbb Z$, and zero reduced homology in every other degree. Each boundary sphere maps to the class of its coordinate vector, up to its boundary-orientation sign, hence generates $H_{d-1}(W)$. Both face inclusions are integral homology equivalences. [step 1.1, L2, algebra]

3.1 By [L3] $W$ has a finite CW model. Transport each inclusion from the finite sphere to that model; step 1.1 gives simple connectivity, and step 2.1 gives homology equivalence. The finite-model homology criterion in [L3] makes each inclusion a homotopy equivalence. [step 1.1, step 2.1, L3]

4.1 Thus the compact smooth $d$-manifold $W$, with its two standard sphere faces, meets exactly the definition of an h-cobordism [L4]. This proves the assertion for $d\ge6$. [step 3.1, L4] ∎
