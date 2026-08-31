---
id: ex-stay-put-moves-can-be-eliminated
kind: example
title: "Replacing a stay-put transition by a right-left macro"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-stay-put-moves-can-be-eliminated, def-turing-machine-configuration]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Example

Consider the one-tape machine with tape alphabet $\{0,1,\sqcup\}$ and one
transition
$$ \delta(q_0,1)=(q_1,0,S). $$
On a configuration whose scanned cell contains `1`, this machine writes `0`,
enters state $q_1$, and leaves the head on that same tape cell.

Introduce a fresh state $r$ and replace that transition by
$$ \delta'(q_0,1)=(r,0,R),\qquad \delta'(r,a)=(q_1,a,L)\ \text{ for every }a\in\{0,1,\sqcup\}. $$

## Facts & Assumptions

**Given:** The source transition and the replacement macro displayed above.

[L1] Stay-put moves can be replaced by an equivalent machine using only left and right moves, by [[thm-stay-put-moves-can-be-eliminated]].

[L2] A configuration records the current state, head position, and tape contents, so two machines agree on one next configuration exactly when those three pieces of data agree, by [[def-turing-machine-configuration]].

## Verification

**Proof technique:** direct.

1.1 Let $C=(q_0,h,t)$ be any configuration with $t(h)=1$. The original transition sends $C$ in one step to the configuration $(q_1,h,t')$, where $t'$ agrees with $t$ away from $h$ and satisfies $t'(h)=0$. [given]

2.1 Under the replacement macro, the first step writes `0` at cell $h$ and moves the head to $h+1$, entering state $r$. The second step leaves the symbol at cell $h+1$ unchanged, moves the head back to $h$, and enters state $q_1$. So after the two-step macro the transformed machine is also in configuration $(q_1,h,t')$. [given, step 1.1]

3.1 Thus the concrete macro produces exactly the same next configuration as the stay-put transition. This is the local pattern asserted abstractly by [L1], and [L2] explains why matching state, head position, and tape contents is enough. [L1, L2, step 2.1] ∎
