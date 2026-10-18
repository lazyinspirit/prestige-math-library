---
id: def-law-entropy-as-self-mutual-information
kind: definition
title: "Law entropy as self-mutual information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-measure-theoretic-mutual-information
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "AC is inherited through the general measurable-space KL in the mutual-information definition."
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Definition

For a random element $X$ with law $P_X$, define its **law entropy** by
$$H(X):=I(X;X)=D(P_{XX}\|P_X\otimes P_X),$$
where $P_{XX}$ is the joint law of the diagonal pair $(X,X)$. This is an extended nonnegative quantity in nats and depends only on the law of X.
