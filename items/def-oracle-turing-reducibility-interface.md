---
id: "def-oracle-turing-reducibility-interface"
kind: "definition"
title: "Oracle turing reducibility interface"
status: published
origin: "pipeline"
deps: ["def-computable-many-one-reducibility-interface", "def-multitape-and-nondeterministic-machines"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Patey chapter 5, relative-computability interfaces; full text pending"
      url: https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf
proof_strategy: "direct"
---

## Definition

An oracle $X\subseteq\mathbb N$ is used by a deterministic finite multitape program as in [[def-multitape-and-nondeterministic-machines]], with an extra query tape, a query state and two answer states. Entering the query state reads the maximal initial bit word of the query tape. If canonical, its decoded number receives its membership bit in X; otherwise the answer is zero. One transition moves to the corresponding answer state, with ordinary tapes and head positions unchanged. This is the oracle instruction allowed in [[def-computable-many-one-reducibility-interface]]; preparing or clearing a query uses ordinary transitions.

A partial function is **X-computable** when such a program on the encoded numeric inputs halts with the prescribed numeric output exactly on its domain. A set is **X-c.e.** when an oracle program accepts exactly its members; it may reject or diverge elsewhere. In contrast, $A\le_T B$ means a B-oracle program halts on every natural input and outputs the characteristic bit of A. Queries may depend on earlier answers, and both answers can affect the computation. Malformed input numerals impose no condition on a numeric decider.

## Facts & Assumptions

**Given:** The oracle model just defined and total deciders for the indicated reductions.

[F1] A many-one reduction is total and preserves membership by one iff on every natural ([[def-computable-many-one-reducibility-interface]]).

## Verification

1.1 To decide A from B when $A\le_m B$, run the total map f, put its canonical result on the query tape, make one query to B and output that bit. Both f and the single query terminate, and the iff in F1 gives the correct answer. Identity querying also decides any B from itself. [F1, given]

2.1 Suppose $A\le_T B$ and $B\le_T C$. A C-program simulates the A-decider, keeping its finite configuration in a protected work zone. When the simulated machine queries a canonical number b, run the total C-decider for B on b in separate work zones, and return its bit as the simulated B answer; malformed queries return zero immediately. Finite table simulation and work-zone copying do not depend on knowing B. Each subcall halts. On a fixed input the original A computation has finitely many transitions and queries; induction over those transitions shows the composite eventually reaches the same halt and bit. Thus $A\le_T C$, with no uniform bound on the lengths or number of subcalls required. Replacing the B-decider by a recognizer would invalidate this argument at a negative query, since that call might diverge. [step 1.1, given] ∎
