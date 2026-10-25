---
id: thm-torsion-theorem-for-c-prime-one-sixth-groups
kind: theorem
title: "In a C prime(1/6) group, every nontrivial torsion element is conjugate to a power of a relator root"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-power, def-sc-toolkit-symmetrised-relators-and-pieces, thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots]
proof_strategy: "direct"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (thm-torsion-theorem-for-c-prime-one-sixth-groups). No independent judge or whole-closure certification.
    delegated_by: owner
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

[F2] The published local theorem [[thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots]] proves that a nonidentity finite-order element in the symmetrised $C'(1/6)$ convention of [[def-sc-toolkit-symmetrised-relators-and-pieces]] is conjugate to a power of a root of a cyclic conjugate of a defining relator. This convention uses nonempty cyclically reduced words and permits proper powers and infinite relator sets.

## Proof

**Proof technique:** direct.

1.1 Because $g$ is a nontrivial torsion element in the stated symmetrised $C'(1/6)$ presentation, [F2] applies. It supplies a cyclic conjugate $r'=vu$ of a defining word $r=uv$ and a word root $c$ of $r'$ such that $g$ is conjugate to a power of the image of $c$. In the symmetrised relator set, $r'$ is itself a defining relator; equivalently $r'$ and $r$ are conjugate in the free group. Thus this is a power of a root of a defining relator as claimed. [F2, given]

2.1 Powers are interpreted as in [F1], so step 1.1 is exactly the claimed conclusion. [F1, step 1.1] ∎
