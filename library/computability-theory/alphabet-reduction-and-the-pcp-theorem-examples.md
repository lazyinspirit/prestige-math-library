---
page: alphabet-reduction-and-the-pcp-theorem-examples
title: "Alphabet Reduction and the PCP Theorem: Examples and Counterexamples"
status: published
requires: [alphabet-reduction-and-the-pcp-theorem]
items: []
examples:
  - ex-composition-preserves-perfect-completeness
  - ex-pcp-error-amplification
  - cex-gap-amplification-alone-controls-alphabet
  - ex-walsh-hadamard-encoding-and-testing
---

These examples check the page's coding, composition and amplification
conventions on small inputs. Two Walsh–Hadamard words of length four differ
at exactly half their coordinates. A single satisfying equality edge remains
satisfiable after its endpoint labels are encoded and its tester constraints
are composed.

Three independent runs of a verifier with soundness $3/4$ have soundness at
most $(3/4)^3=27/64$ when they read the same fixed proof. The counterexample
to alphabet preservation uses a one-vertex graph with two contradictory
binary loop constraints: its powered local-view alphabet has $2^{64}$
labels at the stated parameter, despite the original alphabet having only
two.
