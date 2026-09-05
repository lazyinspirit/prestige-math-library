---
id: fs-the-factor-set-is-independent-of-the-section-as-a-function
kind: false-statement
title: "FALSE: the factor set is independent of the section as a function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-changing-the-section-changes-the-factor-set-by-a-coboundary]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Changing the section leaves the factor set unchanged as a function
$G\times G\to M$.

## Facts & Assumptions

**Given:** The direct-product extension $0\to\mathbb Z\to\mathbb Z\times C_2\to C_2\to0$ with trivial action.

[L1] Changing the section changes the factor set by a coboundary
([[lem-changing-the-section-changes-the-factor-set-by-a-coboundary]]).

## Refutation

**Proof technique:** direct.

1.1 Let $s(1)=(0,1)$ and $s(t)=(0,t)$. Its factor set is $0$. Let $s'(1)=(0,1)$ and $s'(t)=(1,t)$. Then $s'(t)^2=(2,1)$, so the new factor set satisfies $f_{s'}(t,t)=2$. [given, algebra]

2.1 Step 1.1 shows $f_{s'}\ne f_s$ as functions. This is consistent with [L1], which says only that the two factor sets differ by a coboundary and therefore define the same cohomology class. [L1, step 1.1]

3.1 Hence the statement is false. [step 2.1] ∎
