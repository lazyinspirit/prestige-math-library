---
id: lem-gts-original-k-equivariant-critical-hull-retaining-frames
kind: lemma
title: "Gts original k equivariant critical hull retaining frames"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 1
deps:
  - def-gts-weak-phase-framing-moduli-datum
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definition 5.3; §§6.2–6.3, 6.9–6.14 and 7.2. Exact source hypotheses and limitations; no missing local proof is replaced by citation."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; use only under its exact framing, HN, finite-type, fixed-properness, and resolution hypotheses."
verification:
  precheck: pass
aliases: []
---

## Statement

Construct a torus-invariant admissible critical hull retaining the FULL original-k tuple in the actual valuative diagrams, or a direct same-k separatedness replacement. Do not replace the tuple by separate rescalings.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[A1] Local-sheaf branch only: assume the source HN, weak-semistability, boundedness, original concentration, extension-closure, and one-line $T$-fixed properness hypotheses from Bojko Assumptions 5.1 and 5.10 (2025 paper, exact sections listed in Statement references). These do not establish the quiver branch.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records the planned statement only; its draft label is not treated as proof.

## Proof

**Proof status:** the following is the complete local-sheaf same-$k$ collective valuative-existence branch and its simple-pair fixed upgrade. It does not prove the full odd-factor quiver construction required by the Statement.

1.1 In the local-sheaf branch, take an invariant equality witness in the projective fixed-Hilbert-polynomial Quot scheme after finite DVR extension. Repair a noncritical witness by taking the first phase-$\phi$ term of the inverse image of the terminal critical quotient factor. Strict-phase Hom vanishing makes this a strictly larger admissible witness; Noetherianity terminates. Recurse on the positive additive rank to obtain an invariant filtration by stable factors. Each factor is in the same original $\mathcal A_k$, since it is a direct summand of an admitted critical filtration in the concentration open. [given, F1, A1, algebra]

2.1 Choose a nonzero torus weight vector in each original $\mathrm{Fr}_k$ of a stable factor and twist its character to obtain an invariant one-line pair. The original one-line fixed-properness hypothesis extends those pairs over the DVR. Relative Ext$^1$ on proper support is finite and localizes to the generic Ext group, so a sufficiently high uniformizer multiple of each generic extension class lifts; linear reductivity of the complex torus lets the lift remain in the required weight space. Reassemble the extensions and extend the common source line by its primitive lattice in the original framing vector bundle. This gives a flat family with the prescribed generic object using the original $k$. [given, F1, A1, step 1.1, algebra]

3.1 If the special tuple does not collectively generate, choose a proper admissible subobject of minimum positive rank containing it and modify by its quotient. Exactness of the original $\mathrm{Fr}_k$ on the stipulated exact sequence preserves the same tuple. The successive comparison maps have critically generating target; their ordinary kernels are strictly low and cokernels strictly high. A cycle among the finitely many admitted critical classes would equate a nonzero low-phase sum with a high-phase sum, so the modification sequence stabilizes. The compatible quotients modulo $t^j$ are flat over $\mathbb C[t]/(t^j)$ by the Tor criterion and satisfy closed linear incidence equations on the fixed projective support. Completeness algebraizes them to an actual DVR quotient; its kernel would be a proper admissible generic critical subobject containing the whole generic tuple, a contradiction. Thus the special tuple is collectively critical at this same $k$. [given, F1, A1, step 2.1, algebra]

4.1 On the simple-pair local-sheaf locus, the projective nonzero Hom cone is proper over the base and the isomorphism locus is open. The bad Hom locus has closed image, so the diagonal is locally an immersion. The schematic closure of a fixed generic point has finite special fibre; connectedness of $T$ fixes each geometric special point. The immersion diagonal then forces the action map and constant-family map to agree scheme-theoretically on the whole trait. This is the separate fixedness upgrade; the modification choices themselves were not asserted invariant. [given, F1, A1, step 3.1, algebra]

5.1 These arguments prove the local-sheaf branch only. In the literal quiver branch the admitted even total may have odd exact-simple constituents, and original 5.10 cannot be applied to an odd subsum. The invariant-flag route has the obstruction recorded in the B page. No full-scope parity-safe hull or alternative separatedness proof has been established, so the planned Statement remains escalated. [given, F1, step 4.1, algebra] ∎

