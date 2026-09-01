---
id: cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation
kind: counterexample
title: "No proper-power relators alone do not prevent torsion outside small cancellation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-no-proper-power-relators-alone-implies-torsion-free, cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
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

## Statement refuted

No proper-power relators alone prevent torsion, even without any small-
cancellation hypothesis.

## Facts & Assumptions

**Given:** The presentation $G=\langle a,b \mid ab^2, a^2b\rangle$.

[L1] The torsion-free consequence on this page needs the small-cancellation hypothesis as well as the no-proper-power hypothesis ([[cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free]]).

## Counterexample

**Proof technique:** direct.

1.1 As in [[fs-no-proper-power-relators-alone-implies-torsion-free]], neither relator $ab^2$ nor $a^2b$ is a proper power. [given]

2.1 The same substitution calculation gives $a=b^{-2}$ and then $b^{-4}b=1$, so $b^3=1$. Moreover the assignment $a\mapsto t$, $b\mapsto t$ to the cyclic group $C_3=\langle t\mid t^3=1\rangle$ satisfies both relators, so it induces a surjective homomorphism $G\to C_3$. Thus $G$ has nontrivial torsion. [step 1.1, algebra]

3.1 Therefore no-proper-power relators do not by themselves prevent torsion. By [L1], the missing small-cancellation hypothesis is essential. [L1, step 2.1] ∎
