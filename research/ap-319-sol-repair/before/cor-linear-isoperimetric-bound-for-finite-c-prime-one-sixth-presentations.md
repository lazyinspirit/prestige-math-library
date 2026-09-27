---
id: cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations
kind: corollary
title: "Finite C prime(1/6) presentations satisfy a linear isoperimetric inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-greendlinger-lemma-for-c-prime-one-sixth-presentations, thm-diagram-area-agrees-with-algebraic-relator-area, lem-minimal-area-diagrams-are-reduced]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
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

Every finite $C'(1/6)$ presentation satisfies a linear isoperimetric
inequality for van Kampen area.

## Facts & Assumptions

**Given:** A finite $C'(1/6)$ presentation and a null word $w$.

[L1] A minimal reduced null diagram contains a face whose outer boundary arc is longer than half of that face boundary ([[thm-greendlinger-lemma-for-c-prime-one-sixth-presentations]]).

[F1] Van Kampen area agrees with algebraic relator area ([[thm-diagram-area-agrees-with-algebraic-relator-area]]).

[L2] Minimal-area null diagrams are reduced ([[lem-minimal-area-diagrams-are-reduced]]).

## Proof

**Proof technique:** direct.

1.1 Freely reduce $w$ to a word $u$. Because free reduction does not change the represented group element, $u$ is still null, and $|u|\le |w|$. If $u$ is the empty word, then the null diagram with no faces has area $0$, so the claim is immediate. Otherwise let $D$ be a minimal-area van Kampen diagram for $u$. By [L2], the diagram $D$ is reduced, so [L1] applies. [L1, L2, given, cases]

2.1 By [L1], some face $f$ of $D$ contributes an outer boundary arc $p$ with $|p|>|\partial f|/2$. Let $q$ be the complementary boundary arc of $f$, so $|q|<|p|$. Replacing $p$ by $q^{-1}$ and freely reducing gives a null word $u'$ with $|u'|\le |u|-1$. Conversely, attach one $f$-cell along the occurrence of $q^{-1}$ in any minimal diagram for the unreduced replacement word and add the free-cancellation strips. This constructs a diagram for $u$ with one more face, so $$\operatorname{Area}(u)\le\operatorname{Area}(u')+1.$$ [L1, step 1.1, construct, algebra]

3.1 Induct on the freely reduced boundary length. Step 1.1 gives the base case $|u|=0$. For $|u|>0$, step 2.1 yields a shorter freely reduced null word $u'$. By the induction hypothesis, $$ \operatorname{Area}(u)\le \operatorname{Area}(u')+1\le |u'|+1\le |u|. $$ Because $|u|\le |w|$, this is a linear isoperimetric inequality. [step 1.1, step 2.1, induction]

4.1 Finally, [F1] identifies van Kampen area with algebraic relator area, so the same linear bound holds in the algebraic formulation. [F1, step 3.1] ∎
