---
id: thm-read-only-workspace-space-hierarchy
kind: theorem
title: "The read-only-workspace space hierarchy theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-workspace-classes, lem-effective-enumeration-of-clocked-machines, lem-read-only-workspace-universal-simulation, lem-read-only-workspace-diagonal-machine-halts, def-asymptotic-resource-comparison]
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-receipts.jsonl (thm-read-only-workspace-space-hierarchy). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

If $f,g$ are work-space constructible, $\lceil\log_2(n+2)\rceil=O(f(n))$,
and $f=o(g)$, then
$$ \mathrm{DWORKSPACE}(f(n))\subsetneq\mathrm{DWORKSPACE}(g(n)). $$

## Facts & Assumptions

**Given:** $f,g$ satisfying the stated local-model hypotheses.

## Proof

**Proof technique:** contradiction.

1.1 Define a diagonal decider $D$ on an input string $z$ of length $n$. Compute $g(n)$ with its fixed read-only work-space constructor, presenting a virtual unary input $1^n$ using the known input length. Decode $z$ as a padded machine code using [[lem-effective-enumeration-of-clocked-machines]], interpreting valid codes for read-only-input deciders and rejecting malformed or other codes. The decoded program is read by rescanning its field in $z$; the simulated input is the entire original string $z$. Set $b=\lfloor g(n)/4\rfloor$. If $b=0$, return a fixed answer. Otherwise run the uniform encoded-storage simulator of [[lem-read-only-workspace-universal-simulation]] with cap $b$, rejecting before its encoded configuration or scratch storage exceeds that cap. Include the simulator's input/program addresses and cap bookkeeping in the charged storage. Stop the simulation after its finite configuration bound as in [[lem-read-only-workspace-diagonal-machine-halts]]. If it halted within the cap, return the opposite answer; on overflow or clock expiry, return a fixed answer. [given, construct]

2.1 The constructor uses $O(g(n))$ work cells. Program decoding and rescanning need $O(\log(n+2))$ addresses; the uniform simulator uses at most $b$ charged encoded cells plus $O(\log(n+2)+\log(b+2))$ bookkeeping, and the configuration counter uses $O(b+\log(n+2))$ bits. Since $\log(n+2)=O(f(n))=O(g(n))$ eventually, $D$ is total and belongs to $\mathrm{DWORKSPACE}(g)$. The cap is a computable number derived only from the fixed constructor for $g$, so no varying program-dependent constant has to be estimated. [step 1.1, algebra]

3.1 Suppose $D\in\mathrm{DWORKSPACE}(f)$, decided by a fixed read-only-input machine $M$ using at most $C f(n)$ cells for all sufficiently long inputs. Choose any padded code for $M$ from the effective enumeration. For this fixed $M$, the published simulator's encoded-storage cost is $O_M(f(n)+\log(n+2))=o(g(n))$. Hence a sufficiently long padded self-code $z$ lets the simulation of $M(z)$ fit below $b=\lfloor g(n)/4\rfloor$; the configuration clock does not interrupt a halting computation. On that input $D(z)$ returns the opposite of $M(z)$, a contradiction. Finally $f=o(g)$ gives the ordinary inclusion $\mathrm{DWORKSPACE}(f)\subseteq\mathrm{DWORKSPACE}(g)$, so the inclusion is strict. [step 1.1, step 2.1, assume-contra, discharge-contradiction] ∎
