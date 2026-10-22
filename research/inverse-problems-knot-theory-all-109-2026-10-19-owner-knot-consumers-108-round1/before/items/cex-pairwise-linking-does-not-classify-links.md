---
id: cex-pairwise-linking-does-not-classify-links
kind: counterexample
title: "Pairwise linking numbers do not classify labeled links"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-based-string-link-and-labeled-link-peripheral-system
  - ex-borromean-link-milnor-triple-invariant
  - thm-milnor-invariants-isotopy-and-link-homotopy-scope
  - alg-oriented-linking-number-from-diagram
  - thm-oriented-linking-number-scan-terminates-and-is-correct
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§§4–5, PDF pp. 14–16, Borromean rings and triple linking"
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26), lower-order indeterminacy and Borromean context"
---

## Statement refuted

The matrix of pairwise linking numbers determines every labeled oriented link
in $S^3$ up to orientation-preserving ambient isotopy.

## Statement references

[Milnor, *Link Groups*, §§4–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

[[ex-borromean-link-milnor-triple-invariant|The based Borromean triple coefficient and pairwise linking numbers]]

## Facts & Assumptions

**Given:** The Borromean and unlink diagrams with the labels and orientations in the counterexample statement.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[F1] The Borromean closure has all pairwise linking numbers zero and its based triple coefficient is $1$. [[ex-borromean-link-milnor-triple-invariant]]

[F2] Every component of the three-component unlink bounds a disk disjoint from the other components, so its pairwise linking numbers and its based longitude words are zero and trivial, respectively. [[def-based-string-link-and-labeled-link-peripheral-system]]

[F3] Closed-link Milnor residues are invariant under labeled ambient isotopy. [[thm-milnor-invariants-isotopy-and-link-homotopy-scope]]

## Counterexample

Compare the three-component unlink with the closure of the based Borromean
string link in the preceding example. Every pairwise linking number is zero
for both links, while the based triple Milnor residue candidate is $0$ for the
unlink and $1$ for the Borromean closure.

**Given:** The two labeled oriented links in the counterexample statement.

1.1 By [F1] and [F2], both links have the zero pairwise linking matrix. The unlink longitude words are trivial, so its based triple residue candidate is $0$, whereas the Borromean based candidate is $1$. [F1, F2, given]

1.2 Under [A1], if the two links were orientation-preservingly ambient isotopic as labeled links, [F3] would force their triple Milnor residue candidates to agree. Step 1.1 gives distinct candidates because the pairwise-linking indeterminacy is zero. Thus the claimed classification fails conditional on [F3]; [F3]'s proof remains open in its supplier item. [A1, F1, F2, F3, step 1.1]

## Owner escalation

The witnesses and the finite coefficient calculations are explicit. The final isotopy obstruction depends on [F3], whose based-change and self-crossing proof is still escalated in `lem-milnor-basing-indeterminacy-and-self-crossing-scope`. This counterexample remains escalated until that invariance proof is closed.
