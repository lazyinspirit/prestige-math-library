---
id: thm-greendlinger-lemma-for-c-prime-one-sixth-presentations
kind: theorem
title: "In a reduced C prime(1/6) null diagram, some face contributes more than half of its boundary to the outer boundary"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams, lem-minimal-area-diagrams-are-reduced]
landmark: true
proof_strategy: "contradiction"
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

Let $D$ be a nonempty reduced van Kampen diagram over a symmetrised
$C'(1/6)$ presentation, and assume the boundary word of $D$ is freely reduced
and nontrivial. Then some face of $D$ contributes more than half of its
boundary to the outer boundary of $D$.

## Facts & Assumptions

**Given:** A nonempty reduced van Kampen diagram $D$ over a symmetrised $C'(1/6)$ presentation, with freely reduced nontrivial outer boundary word.

[L1] Such a diagram contains a shell whose inner boundary is a concatenation of at most three maximal internal arcs ([[lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], some boundary face $f$ of $D$ is a shell whose inner boundary is a concatenation $q_1\cdots q_i$ of maximal internal arcs with $0\le i\le 3$. (For $i=0$, this is the empty concatenation.) Let $p$ be the complementary outer arc of $\partial f$ lying on $\partial D$. [L1, given]

2.1 If $i=0$, the sum of the inner-arc lengths is $0<|\partial f|/2$. If $1\le i\le 3$, each internal arc $q_j$ is shared with a distinct neighbouring face, so reducedness makes its label a piece. Because the presentation satisfies $C'(1/6)$, every such arc satisfies $|q_j|<|\partial f|/6$, and hence $$ |q_1|+\cdots+|q_i|< i\,\frac{|\partial f|}{6}\le \frac{|\partial f|}{2}. $$ Thus in every case the total inner-arc length is less than half of $|\partial f|$. [step 1.1, given, algebra]

3.1 Since $\partial f$ is the disjoint union of the outer arc $p$ and the inner arcs $q_1,\dots,q_i$, step 2.1 gives $$ |p|=|\partial f|-(|q_1|+\cdots+|q_i|)>\frac{|\partial f|}{2}. $$ Thus $f$ contributes more than half of its boundary to the outer boundary of $D$. [step 2.1, algebra] ∎
