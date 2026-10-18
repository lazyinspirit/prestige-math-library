---
id: def-finite-support-binary-prefix-code
kind: definition
title: "Binary prefix codes on finite supports"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Definition

Let $M$ be a finite nonempty message set. A **binary prefix code on $M$** is an injective assignment $c:M\to\{0,1\}^*$ such that no assigned string is a proper initial segment of another assigned string. Write $\ell(m):=|c(m)|$ for its codeword lengths. For a probability vector $p$ on $M$, its expected length is
$$L_p(c):=\sum_{m\in M}p(m)\ell(m).$$

The empty string is permitted only when $M$ is a singleton. In that case it describes one known source block, or a known number of copies of the sole message; the message count is part of the framing convention. For arbitrary concatenations whose message count is not supplied, require every codeword to be nonempty. Thus a singleton source can retain a zero-bit code for one known block without claiming unknown-count decoding.

## Facts & Assumptions

**Given:** The finite message set and code assignment in the Definition.

## Proof

1.1 One codeword determines its message by injectivity. In the singleton empty-word case, a known count determines the unique message list, whereas distinct unknown counts all give the same empty string. In particular, the empty string describes one known block with length zero. [given, algebra]

2.1 If all codewords are nonempty, at most one codeword can prefix an unread concatenation, because any two such prefixes would be comparable by the prefix relation and injectivity excludes equal codewords for different messages. Remove that nonempty codeword and repeat; the finite unread length decreases, so this recovers the complete message list without a supplied count. [given, step 1.1, algebra] ∎
