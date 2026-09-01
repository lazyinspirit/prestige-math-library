---
id: fs-diagonalization-needs-literal-source-self-reading
kind: false-statement
title: "FALSE: diagonalization requires a machine to read its physical source text"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, lem-diagonal-self-application-machine, thm-existence-of-a-universal-turing-machine]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
---

## Statement

The diagonal contradiction needs a machine to read its own physical source text
or manuscript.

## Facts & Assumptions

**Given:** The chosen coding and the diagonal construction for $A_{TM}$.

[L1] The library has fixed an explicit binary code $\ulcorner M\urcorner$ for each deterministic one-tape Turing machine, by [[def-effective-encoding-of-turing-machines]].

[L2] The diagonal machine against a hypothetical decider works by feeding that decider the coded self-application instance $\langle\ulcorner M\urcorner,\widehat{\overline{\ulcorner M\urcorner}}\rangle$ and then doing the opposite, by [[lem-diagonal-self-application-machine]].

[L3] A universal Turing machine exists for the chosen code syntax, so coded machine descriptions can be interpreted mechanically, by [[thm-existence-of-a-universal-turing-machine]].

## Refutation

**Proof technique:** direct.

1.1 By [L1] and [L3], the data needed for self-reference are only a finite description string and a fixed interpreter for that string. Nothing in those items mentions any physical source file, manuscript, or external text artifact. [L1, L3, given]

2.1 The actual diagonal step in [L2] uses the coded pair $\langle\ulcorner M\urcorner,\widehat{\overline{\ulcorner M\urcorner}}\rangle$, not a literal reading of source text. So the contradiction is carried entirely by effective encoding and simulation. [L2, step 1.1] ∎
