---
id: lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams
kind: lemma
title: "Reduced C prime(1/6) diagrams satisfy the standard combinatorial curvature count"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-small-cancellation-conditions-c-lambda-and-c-prime-lambda,
       def-reduced-van-kampen-diagram,
       def-van-kampen-diagram-boundary-label-and-area]
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
    - title: "Adrien Abgrall and Zachary Munro, On residual finiteness of graphs of free groups with cyclic edge groups, Lemma 2.12"
      url: "https://arxiv.org/pdf/2410.10152"
---

## Statement

Let $D$ be a reduced van Kampen diagram with at least one $2$-cell over a
symmetrised $C'(1/6)$ presentation, and assume its outer boundary word is freely
reduced and nontrivial. Then some boundary face of $D$ is a shell whose inner
boundary is a concatenation of at most three maximal internal arcs.

## Facts & Assumptions

**Given:** A reduced van Kampen diagram $D$ with at least one $2$-cell over a symmetrised $C'(1/6)$ presentation, with freely reduced nontrivial outer boundary word.

[L0] A nondegenerate van Kampen diagram is a finite combinatorial $2$-complex whose underlying space is a closed disc ([[def-van-kampen-diagram-boundary-label-and-area]]).

[F1] The relator set satisfies the strict metric condition $C'(1/6)$ ([[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

[L1] The diagram is reduced in the sense that no cancellable adjacent face pair occurs ([[def-reduced-van-kampen-diagram]]).

[F2] Under Section 3.5's standing $C'(1/6)$ hypothesis, Touikan first observes that internal arcs of a reduced diagram are labelled by pieces and that every internal face of its arc reduction has at least seven sides; Definition 3.5.3 defines an $i$-shell, and Proposition 3.5.5 states that an arc-reduced disc diagram contains an $i$-shell for some $1\le i\le3$. Independently, Abgrall--Munro Lemma 2.12 states the general Greendlinger form that every nontrivial reduced $C'(1/6)$ disc diagram has $3$-shells and/or boundary spurs.

## Proof

**Proof technique:** direct.

1.1 If $D$ has exactly one $2$-cell, that face has empty inner boundary and is therefore a shell with zero internal arcs. Hence assume that $D$ has at least two faces. [L0, given]

2.1 Collapse every maximal arc of $D$---boundary arcs as well as internal arcs---by suppressing its valence-$2$ internal vertices. The resulting diagram $\overline D$ is an arc-reduced combinatorial disc with the same faces and face incidences. Removing subdivisions neither creates a cancellable face pair nor changes which face-boundary portions are internal or external. [L0, L1, step 1.1, construct]

3.1 Every internal edge of $\overline D$ represents a maximal internal arc of $D$. By reducedness, the two incident face occurrences do not cancel, so [F2] identifies the arc label as a piece. If $f$ is an interior face, these piece-arcs cover $\partial f$; [F1] makes each one shorter than $|\partial f|/6$, so $f$ has at least seven sides. This is exactly the arc-reduced $C'(1/6)$ setup preceding the proposition cited in [F2]. [F1, F2, L1, step 2.1, algebra]

4.1 Apply the Touikan proposition cited in [F2] to $\overline D$. It gives a boundary face whose inner boundary consists of $i$ internal arcs for some $1\le i\le3$. Expanding the suppressed valence-$2$ vertices turns those $i$ edges back into the same $i$ maximal internal arcs of $D$, without changing the face or its outer boundary. Together with the one-face case in step 1.1, this proves the claim. [F2, step 1.1, step 2.1, step 3.1] ∎
