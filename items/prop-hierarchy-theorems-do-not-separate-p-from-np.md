---
id: prop-hierarchy-theorems-do-not-separate-p-from-np
kind: proposition
title: "Hierarchy theorems do not separate P from NP"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-deterministic-time-hierarchy, thm-nondeterministic-time-hierarchy, def-p, def-np-by-verifiers, thm-verifier-and-nondeterministic-definitions-of-np-agree]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Chapter 3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

The deterministic and nondeterministic time hierarchy conclusions do not
themselves compare $P$ with $NP$, and therefore do not constitute a proof of
either $P=NP$ or $P\ne NP$.

## Facts & Assumptions

**Given:** the quantified conclusions of the two hierarchy theorems.

[L1] A binary language is in verifier-defined NP exactly when it belongs to $\mathrm{NTIME}(n^k)$ for some $k\ge1$ ([[thm-verifier-and-nondeterministic-definitions-of-np-agree]]).

## Proof

**Proof technique:** direct.

1.1 Each hierarchy compares two deterministic classes or two nondeterministic classes at separated resource bounds, such as $\mathrm{DTIME}(f)$ versus $\mathrm{DTIME}(g)$. [given]

2.1 By [L1] and the definition of $P$, the $P$ versus $NP$ question compares the unions of deterministic and nondeterministic polynomial-time classes. A separation needs one language in $NP$ outside every deterministic polynomial-time class; equality needs polynomial deterministic simulations for all $NP$ languages. The witnesses in step 1.1 only separate two bounds in the same model, and their bounds and witnesses may vary. These stated conclusions do not themselves provide either of the required cross-model arguments. This is a comparison of what the theorem statements assert, not a formal independence claim about their consequences in an axiomatic theory. [L1, step 1.1, algebra] ∎
