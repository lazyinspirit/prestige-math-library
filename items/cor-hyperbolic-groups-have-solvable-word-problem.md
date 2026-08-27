---
id: cor-hyperbolic-groups-have-solvable-word-problem
kind: corollary
title: "Hyperbolic groups have solvable word problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hyperbolic-groups-admit-finite-dehn-presentations]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.4.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Every hyperbolic group has solvable word problem.

## Facts & Assumptions

**Given:** A hyperbolic group $G$ with a finite Dehn presentation $\langle S \mid R \rangle$.

[L1] In a Dehn presentation, every nonempty freely reduced trivial word
contains a subword longer than half of a relator
([[thm-hyperbolic-groups-admit-finite-dehn-presentations]]).

[A1] Replacing such a long subword by the complementary shorter subword strictly
decreases word length and preserves the represented group element.

## Proof

**Proof technique:** direct.

1.1 Starting from any input word $w$, repeatedly apply the replacement from [A1] whenever [L1] finds a long relator half. Because length strictly decreases, the process terminates after finitely many steps. [L1, A1]

2.1 If the algorithm stops at the empty word, then $w=1$ in $G$. Conversely, if $w=1$ in $G$ and the current reduced word is nonempty, [L1] says that another shortening move exists, so the procedure cannot terminate early. Thus the algorithm decides whether $w$ represents the identity. [L1, step 1.1] ∎ 