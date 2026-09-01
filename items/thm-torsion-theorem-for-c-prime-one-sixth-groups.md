---
id: thm-torsion-theorem-for-c-prime-one-sixth-groups
kind: theorem
title: "In a C prime(1/6) group, every nontrivial torsion element is conjugate to a power of a relator root"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-power]
proof_strategy: "direct"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Statement

Let $G=\langle X\mid R\rangle$ be a symmetrised $C'(1/6)$ presentation. Every
nontrivial torsion element of $G$ is conjugate to a power of a root of some
defining relator.

## Facts & Assumptions

**Given:** A nontrivial torsion element $g\in G$.

[F1] Powers in a group are written multiplicatively as in [[def-group-power]].

[F2] Theorem 5.6 of the cited Williams source is the classical torsion theorem
for symmetrised $C'(1/6)$ presentations: every nontrivial element of finite
order is conjugate to a power of a root of some defining relator.

## Proof

**Proof technique:** direct.

1.1 Because $g$ is a nontrivial torsion element, the hypotheses of [F2] apply directly. Therefore $g$ is conjugate to a power of a root of some defining relator. [F2, given]

2.1 Powers are interpreted as in [F1], so step 1.1 is exactly the claimed conclusion. [F1, step 1.1] ∎
