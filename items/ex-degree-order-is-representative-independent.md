---
id: ex-degree-order-is-representative-independent
kind: example
title: "Changing representatives of a degree comparison"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-turing-degree-and-degree-order, lem-degree-order-is-representative-independent]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Exercise 5.3"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Example

Let $\widetilde A = A\oplus\varnothing$ and
$\widetilde B=B\oplus\varnothing$. The tags can be ignored or supplied as
constant $0$ bits, so $A\equiv_T\widetilde A$ and
$B\equiv_T\widetilde B$.
Thus a comparison $A\le_TB$ gives the same degree comparison when these
particular representatives are replaced by $\widetilde A$ and
$\widetilde B$.

## Facts & Assumptions

**Given:** sets $A,B\subseteq\mathbb N$ and their zero-padded tagged versions.

## Verification

**Proof technique:** direct.

1.1 A $\widetilde A$-oracle decides $A$ by even queries, while an $A$-oracle decides $\widetilde A$ by querying $A$ on even inputs and returning $0$ on odd inputs. Thus $A\equiv_T\widetilde A$, and likewise $B\equiv_T\widetilde B$. [given, construct]

2.1 [[lem-degree-order-is-representative-independent]] now yields $A\le_TB$ iff $\widetilde A\le_T\widetilde B$. [step 1.1] ∎
