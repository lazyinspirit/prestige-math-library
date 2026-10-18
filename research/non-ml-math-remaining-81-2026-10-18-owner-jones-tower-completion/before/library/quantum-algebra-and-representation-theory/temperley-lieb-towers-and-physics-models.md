---
page: temperley-lieb-towers-and-physics-models
title: "Temperley–Lieb Towers, Spin Chains, and Scaling Interfaces"
status: draft
items:
  - def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower
  - def-extremal-finite-index-ii1-subfactor-data
  - thm-temperley-lieb-type-a-path-space-tower-branching
  - lem-finite-right-n-module-frame-from-projection-model
  - def-xxz-open-chain-temperley-lieb-representation
  - def-potts-open-chain-clock-shift-representation
  - def-temperley-lieb-diagram-tower-and-right-closure
  - thm-finite-index-ii1-basic-construction-jones-tower
  - lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb
  - thm-xxz-open-chain-hamiltonian-and-boundary-field
  - lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
  - lem-temperley-lieb-diagram-tower-conditional-expectation-identities
  - lem-temperley-lieb-right-closure-preserves-trace-radical
  - thm-temperley-lieb-root-quotient-tower-interface
examples: []
---

This draft develops four distinct interfaces: the abstract $A_{\ell-1}$ path-space tower; a framed finite-index II$_1$ subfactor's first basic construction; the open XXZ and Potts finite-chain representations; and normalized right closure on the diagram tower. Every map, parameter, basis order and boundary range is fixed in its local definition. TikZ records the rightmost closure convention; its proof is by matching graphs.

## Item order and dependencies

The path-space and subfactor data definitions, and the XXZ/Potts local conventions, precede their respective proofs. The diagram tower definition depends on the diagram category and normalized closure trace. The root quotient interface is conditional on an explicit quotient/path-space identification; it does not claim that the assigned PA-31 positive-root quotient already has that identification.

## Claims and limits

The path-space theorem proves multiplicity-one branching on the abstract type-A tower. The diagram closure lemma proves injection, bimodularity, trace preservation, the one-generator Markov value, and positivity under the stated faithful C$^*$-trace hypotheses. The trace-radical lemma proves algebraic descent of inclusion and right closure; it does not identify this pairing radical with the categorical negligible ideal.

The subfactor data item explicitly includes a bounded-coordinate module model. The first-stage projection, basic construction, corner trace and Markov formula are proved. The passage of these data and extremality to every later stage, the two adjacent Jones-projection identities, and the resulting complete Jones tower remain owner-escalated prerequisites; no full diagram algebra is identified with a von Neumann algebra or relative commutant here.

The XXZ and Potts relation lemmas are direct finite matrix computations. Their Hamiltonians use free/open endpoints. Periodic, blob and two-boundary models have different boundary generators and relations. The continuum-limit remark records the source's conjectural/heuristic status and makes no universal spectral-gap, Bethe-completeness or scaling-theorem claim.

## Cross-batch prerequisite

The page requires [[temperley-lieb-jones-wenzl-traces-and-quotients]]. The seven PA-31 carrier files for closure/partial-trace identities, specialized trace, tensor-ideal negligibility, Jones–Wenzl partial trace, root pairings and semisimple quotient are now present and their actual bodies were read. The root-fusion carrier explicitly leaves its matrix-unit induction unfinished; the semisimple-quotient carrier explicitly leaves radical equality, path blocks and fusion unresolved. Their planned interfaces therefore do not establish the actual root quotient or its path modules. Exact supplier IDs, hypotheses, body evidence and affected claims are recorded in the batch cross-batch file. The local root interface theorem is conditional and does not claim the missing identification.

## Full-text sources

The A-page arguments use the author-hosted Penneys lecture notes for module and path-tower context, Jones's full *Planar Algebras I* for the subfactor tower context, and Nichols's full model treatment for the finite XXZ/Potts formulas. Gainutdinov–Read–Saleur is used only for the stated heuristic/conjectural continuum status. Full locators, harvested-result dispositions and fetch stamps are in the batch coverage record.
