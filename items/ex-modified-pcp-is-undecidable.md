---
id: ex-modified-pcp-is-undecidable
kind: example
title: "A computation-history domino system whose matches spell a halting run"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-computation-history-domino-encoding, thm-modified-pcp-is-undecidable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Chris Pollett, CS 154: PCP and Rice's Theorem"
      url: "https://www.cs.sjsu.edu/faculty/pollett/154.13.13s/Lec01052013.html"
---

## Example

Let $M$ be the one-tape machine that, on the one-symbol input `1`, has the
transition
$$\delta(q_0,1)=(q_{\mathrm{acc}},1,L).$$
The head starts at the left boundary, so the left move is clamped there. Its
accepting history has two configurations:
$$ C_0=q_01,\qquad C_1=q_{\mathrm{acc}}1. $$

With the fresh left marker $\triangleright$, the construction of
[[lem-computation-history-domino-encoding]] therefore contains the exact
dominoes

$$(\#,\#\triangleright q_01\#),\qquad (\triangleright q_01,\triangleright q_{\mathrm{acc}}1),\qquad (\#,\#),$$

together with the copier $(1,1)$, the accepting-cleanup dominoes
$(\triangleright q_{\mathrm{acc}},q_{\mathrm{acc}})$ and
$(q_{\mathrm{acc}}1,q_{\mathrm{acc}})$, and the terminal domino
$(q_{\mathrm{acc}}\#\#,\#)$.

## Facts & Assumptions

**Given:** The toy machine $M$ above and its two-step accepting history.

[L1] The computation-history construction gives the displayed start, clamped-left transition, and separator dominoes, and the resulting instance has a match exactly when the machine has an accepting history, by [[lem-computation-history-domino-encoding]].

## Verification

**Proof technique:** direct.

1.1 Choose the three displayed dominoes in order. Their top concatenation is $$\#\triangleright q_01\#,$$ while their bottom concatenation is $$\#\triangleright q_01\#\triangleright q_{\mathrm{acc}}1\#.$$ Thus the top has matched the initial block and the bottom is exactly one block ahead with the accepting configuration. No right-boundary extension is needed because the only move is the clamped left move. [L1, given, construct]

2.1 After the three dominoes in step 1.1, append $$ (\triangleright q_{\mathrm{acc}},q_{\mathrm{acc}}),\ (1,1),\ (\#,\#),\ (q_{\mathrm{acc}}1,q_{\mathrm{acc}}),\ (\#,\#),\ (q_{\mathrm{acc}}\#\#,\#). $$ Every pair belongs to the construction in [L1], and the two complete rows are both $$\#\triangleright q_01\#\triangleright q_{\mathrm{acc}}1\#q_{\mathrm{acc}}1\#q_{\mathrm{acc}}\#\#.$$ Thus this instance has a match. Conversely, [L1] decodes every match back to an accepting history; here determinism leaves only $C_0,C_1$. The theorem [[thm-modified-pcp-is-undecidable]] says that no algorithm can decide all such instances, even though this particular accepting instance is visible directly. [L1, step 1.1, construct] ∎
