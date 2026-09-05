---
id: fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel
kind: false-statement
title: "FALSE: H^2 classifies extensions with arbitrary nonabelian kernel"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, rem-nonabelian-extension-obstruction-in-h-three]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

The group $H^2(G,N)$ classifies extensions of $G$ by an arbitrary nonabelian
kernel $N$.

## Facts & Assumptions

**Given:** A nonabelian kernel $N$.

[L1] The theorem on this page classifies extensions only for abelian kernels
([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

[L2] For nonabelian kernels the obstruction moves to $H^3$
([[rem-nonabelian-extension-obstruction-in-h-three]]).

## Refutation

**Proof technique:** direct.

1.1 The hypothesis of [L1] requires the kernel to be abelian, so it does not apply to a general nonabelian $N$. [L1, given]

2.1 The boundary remark [L2] states the right replacement: nonabelian extensions are controlled by an $H^3$ obstruction together with an $H^2$ torsor when the obstruction vanishes. So a single $H^2$ group does not classify them. [L2, step 1.1]

3.1 Therefore the statement is false. [step 2.1] ∎
