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
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations). No independent judge or whole-closure certification.
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

2.1 By [L1], some face $f$ of $D$ contributes a contiguous outer boundary arc $p$ with $|p|>|\partial f|/2$. Write $u=apb$ as a literal word from the chosen boundary basepoint, and orient the relator boundary of $f$ as $pq$. Its complementary arc $q$ has $|q|<|p|$. The word $a q^{-1}b$ represents the same group element as $u$, since $pq$ is a conjugate of a defining relator; let $u'$ be its free reduction. Then $u'$ is null and $|u'|\le |a|+|q|+|b|<|u|$. In the free group, $[u]=[a(pq)a^{-1}][a q^{-1}b]$, so the algebraic relator area of $u$ is at most one plus that of $u'$. By [F1], diagram and algebraic relator areas agree for both words; hence $\operatorname{Area}(u)\le\operatorname{Area}(u')+1$. [L1, F1, step 1.1, algebra]

3.1 Induct on the freely reduced boundary length. Step 1.1 gives the base case $|u|=0$. For $|u|>0$, step 2.1 yields a shorter freely reduced null word $u'$. By the induction hypothesis, $$ \operatorname{Area}(u)\le \operatorname{Area}(u')+1\le |u'|+1\le |u|. $$ Because $|u|\le |w|$, this is a linear isoperimetric inequality. [step 1.1, step 2.1, induction]

4.1 Finally, [F1] identifies van Kampen area with algebraic relator area, so the same linear bound holds in the algebraic formulation. [F1, step 3.1] ∎
