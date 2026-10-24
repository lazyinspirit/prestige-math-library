---
id: cor-l-is-properly-contained-in-pspace
kind: corollary
title: "L is properly contained in PSPACE"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-read-only-workspace-space-hierarchy, lem-read-only-workspace-simulates-in-all-tapes-space, def-pspace-and-npspace, def-read-only-input-workspace-classes]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (cor-l-is-properly-contained-in-pspace). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 4.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

With $L:=\mathrm{DWORKSPACE}(\lceil\log_2(n+2)\rceil)$,
$$ L\subsetneq PSPACE. $$

## Facts & Assumptions

**Given:** $f(n)=\lceil\log_2(n+2)\rceil$ and $g(n)=n$.

## Proof

**Proof technique:** direct.

1.1 Both bounds meet the local work-space-constructibility contract. On unary input $1^n$, count its length in binary, using $O(\log(n+2))$ cells, and add $2$. The binary length and a power-of-two test compute $f(n)=\lceil\log_2(n+2)\rceil$ in the same space; outputting the binary count gives $g(n)=n$ within $O(n)$ cells. Also $f(n)\ge\lceil\log_2(n+2)\rceil$ tautologically, $f(n)=o(n)$, and $g(n)$ satisfies the hierarchy's address lower bound for all sufficiently large $n$. Thus [[thm-read-only-workspace-space-hierarchy]] applies and yields a language in $\mathrm{DWORKSPACE}(n)\setminus L$. [given, construct]

2.1 The bridge [[lem-read-only-workspace-simulates-in-all-tapes-space]] puts that witness language in $\mathrm{DSPACE}(n+n)=\mathrm{DSPACE}(2n)$, hence in PSPACE. For any $L$ computation, the same bridge gives $\mathrm{DSPACE}(n+f(n))\subseteq\mathrm{DSPACE}(2n+O(1))\subseteq\mathrm{PSPACE}$, by the polynomial-space definition. The witness lies outside $L$ by step 1.1, so the inclusion is proper. [step 1.1] ∎
