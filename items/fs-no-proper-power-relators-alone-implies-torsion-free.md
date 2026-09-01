---
id: fs-no-proper-power-relators-alone-implies-torsion-free
kind: false-statement
title: "FALSE: a presentation with no proper-power relators is automatically torsion-free"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free, def-group-power]
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

A presentation with no proper-power relators is automatically torsion-free.

## Facts & Assumptions

**Given:** The presentation $G=\langle a,b \mid ab^2, a^2b\rangle$.

[L1] The torsion-free conclusion on this page needs both the $C'(1/6)$ hypothesis and the no-proper-power hypothesis ([[cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free]]).

[F1] Group powers are written multiplicatively ([[def-group-power]]).

## Refutation

**Proof technique:** direct.

1.1 Neither relator $ab^2$ nor $a^2b$ is a proper power: each is cyclically reduced of length $3$ and is not a repetition of a shorter cyclic word. [given]

2.1 From $ab^2=1$ one gets $a=b^{-2}$, and substituting this into $a^2b=1$ gives $b^{-4}b=1$, hence $b^3=1$ in the sense of [F1]. Moreover, if $C_3=\langle t\mid t^3=1\rangle$, then the assignment $a\mapsto t$, $b\mapsto t$ satisfies both relators, so it induces a surjective homomorphism $G\to C_3$. Therefore the image of $b$ is nontrivial and $G$ contains a nontrivial torsion element. [F1, step 1.1, algebra]

3.1 Therefore the absence of proper-power relators alone does not force torsion-freeness. By [L1], the missing small-cancellation hypothesis is load-bearing. [L1, step 2.1] ∎
