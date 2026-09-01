---
id: cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free
kind: corollary
title: "A C prime(1/6) presentation with no proper-power relators defines a torsion-free group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-torsion-theorem-for-c-prime-one-sixth-groups, def-group-power]
proof_strategy: "direct"
verification:
  precheck: pass
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

A $C'(1/6)$ presentation with no proper-power relators defines a torsion-free
group.

## Facts & Assumptions

**Given:** A $C'(1/6)$ presentation in which no defining relator is a proper
power.

[L1] Every torsion element is conjugate to a power of a root of a defining
relator ([[thm-torsion-theorem-for-c-prime-one-sixth-groups]]).

[F1] Group powers are the powers from [[def-group-power]].

## Proof

**Proof technique:** direct.

1.1 Let $g$ be a torsion element. By [L1], $g$ is conjugate to $v^k$, where some defining relator has the form $v^m$. [L1, given]

2.1 The no-proper-power hypothesis forces $m=1$. Thus the root word $v$ is itself a defining relator and represents the identity in the presented group, so every power $v^k$ is trivial by [F1]. Hence $g=1$. [F1, step 1.1, algebra]

3.1 Since every torsion element is trivial, the group is torsion-free. [step 2.1] ∎
