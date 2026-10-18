---
page: temperley-lieb-towers-and-physics-models
title: Temperley–Lieb Towers, Spin Chains, and Scaling Interfaces
status: draft
items:
- def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower
- thm-temperley-lieb-type-a-path-space-tower-branching
- def-xxz-open-chain-temperley-lieb-representation
- def-potts-open-chain-clock-shift-representation
- def-temperley-lieb-diagram-tower-and-right-closure
- lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb
- thm-xxz-open-chain-hamiltonian-and-boundary-field
- lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
- lem-temperley-lieb-diagram-tower-conditional-expectation-identities
- lem-temperley-lieb-right-closure-preserves-trace-radical
- thm-temperley-lieb-root-quotient-tower-interface
- lem-tracial-standard-form-and-normal-functional-vectors
- lem-finite-factor-projection-comparison-and-normalized-trace
- lem-tracial-hilbert-module-dimension-and-finite-corners
- def-extremal-finite-index-ii1-subfactor-data
- lem-finite-index-bounded-vector-pull-down
- lem-finite-right-n-module-frame-from-projection-model
- thm-finite-index-ii1-basic-construction-jones-tower
examples: []
requires:
  - temperley-lieb-jones-wenzl-traces-and-quotients
  - direct-integral-decomposition-and-type-i-groups

---

This draft develops four distinct interfaces: the abstract $A_{\ell-1}$ path-space tower; the full Jones tower of an ordinary finite-index II$_1$ inclusion; the open XXZ and Potts finite-chain representations; and normalized right closure on the diagram tower. Every map, parameter, basis order and boundary range is fixed in its local definition. TikZ records the rightmost closure convention; its proof is by matching graphs.

## Item order and dependencies

The path-space and subfactor data definitions, and the XXZ/Potts local conventions, precede their respective proofs. The diagram tower definition depends on the diagram category and normalized closure trace. The root quotient theorem derives the positive-root quotient/path-space identification from the completed PA-31 matrix units and radical equality, with actual prefix maps and right closure.

## Claims and limits

The path-space theorem proves multiplicity-one branching on the abstract type-A tower. The diagram closure lemma proves injection, bimodularity, trace preservation, the one-generator Markov value, and positivity under the stated faithful C$^*$-trace hypotheses. The trace-radical lemma proves algebraic descent of inclusion and right closure; it does not identify this pairing radical with the categorical negligible ideal.

Ordinary finite Jones index supplies the bounded finite frame and complete projection model through local standard-form, dimension, comparison and pull-down proofs. The Jones theorem constructs every stage, its faithful Markov trace, an explicit dual frame of the same index, and both adjacent projection identities. Extremality uses the right-action relative-commutant trace and propagates through the tower. The finite diagram tower represents there; no surjectivity onto a von Neumann algebra or its full relative commutant is claimed.

The XXZ and Potts relation lemmas are direct finite matrix computations. Their Hamiltonians use free/open endpoints. Periodic, blob and two-boundary models have different boundary generators and relations. The continuum-limit remark records the source's conjectural/heuristic status and makes no universal spectral-gap, Bethe-completeness or scaling-theorem claim.

## Cross-batch prerequisite

The page requires [[temperley-lieb-jones-wenzl-traces-and-quotients]]. The seven PA-31 carrier files for closure/partial-trace identities, specialized trace, tensor-ideal negligibility, Jones–Wenzl partial trace, root pairings and semisimple quotient are now present and their actual bodies were read. The root-fusion carrier now supplies the complete retained path matrix units, and the semisimple-quotient carrier proves radical equality and full path blocks. Their actual completed interfaces give the positive-root tower here. Its reflection becomes the usual matrix adjoint after positive path normalization; normalized right closure is the faithful positive trace expectation with the explicit neighbour weights. Exact supplier hypotheses and current excerpts are recorded in the cross-batch file.

## Full-text sources

The A-page arguments use Anantharaman–Popa’s full-text II1-factor treatment for the actual standard-form, module-dimension, bounded pull-down and finite-frame arguments, the author-hosted Penneys lecture notes for module and path-tower context, Jones's full *Planar Algebras I* for the subfactor tower context, and Nichols's full model treatment for the finite XXZ/Potts formulas. Gainutdinov–Read–Saleur is used only for the stated heuristic/conjectural continuum status. Full locators, harvested-result dispositions and fetch stamps are in the batch coverage record.
