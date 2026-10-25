---
id: cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven
kind: corollary
title: "The Milnor homotopy seven-spheres are homeomorphic to $S^7$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-sphere-bundle-m-h-j, cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres, lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six, thm-smooth-simply-connected-h-cobordism-theorem, lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 19
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
      locator: "the two-disk complement, the h-cobordism cylinder and the radial extension giving a homeomorphism"
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 403, the manifolds M_{h,j} are homeomorphic to S^7"
---

## Statement

Assume the Axiom of Choice and countable choice. For $h+j=\pm1$, the Milnor
homotopy seven-sphere $M_{h,j}$ is homeomorphic to $S^7$.

## Facts & Assumptions

**Given:** Integers $h,j$ with $h+j=\pm1$ and the smooth homotopy seven-sphere $M_{h,j}$ of [[cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres]].

[A1] AC and $\mathrm{AC}_\omega$ are assumed; AC implies $\mathrm{AC}_\omega$ ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[L1] Removing two disjoint disks from a smooth homotopy $d$-sphere with $d\ge6$ gives a compact simply connected h-cobordism between two standard $S^{d-1}$ faces ([[lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six]]).

[L2] Assume $\mathrm{AC}_\omega$. The smooth simply connected h-cobordism theorem: a compact connected smooth h-cobordism of dimension at least six between closed simply connected manifolds is diffeomorphic to a product relative to one face ([[thm-smooth-simply-connected-h-cobordism-theorem]]).

[L3] Every homeomorphism $S^{d-1}\to S^{d-1}$ extends radially to a homeomorphism $D^d\to D^d$ ([[lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] with $d=7$ the complement $W$ of the interiors of two disjoint disks in $M_{h,j}$ is a compact simply connected h-cobordism of dimension seven between two standard $S^6$ boundary faces; the dimension meets the threshold $7\ge6$. [L1, A1, given]

2.1 By [L2] and [A1] the cobordism $W$ is diffeomorphic to the product $S^6\times[0,1]$ relative to one face. [step 1.1, L2, A1]

3.1 Reattach the two seven-disks: one attaching boundary diffeomorphism can be taken to be the standard one, and the other is a homeomorphism of $S^6$ which by [L3] extends radially to a homeomorphism of the disk; hence the reattached space $D^7\cup_{S^6}(S^6\times[0,1])\cup_{S^6}D^7$ is homeomorphic to $S^7$. [step 2.1, L3]

4.1 Therefore $M_{h,j}$ is homeomorphic to $S^7$, as asserted; the argument is topological at the gluing step and does not claim smoothness of the radial extension at the origin. [step 3.1] ∎
