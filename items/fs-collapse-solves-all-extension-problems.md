---
id: fs-collapse-solves-all-extension-problems
kind: false-statement
title: Collapse solves all extension problems
deps: ["cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects", "def-zero-and-stalk-complex", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "def-collapse-at-a-page", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "def-extension-problem-of-a-convergent-spectral-sequence"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

It is false that collapse solves all extension problems of a spectral sequence.

## Facts & Assumptions

**Given:** The degree-zero stalk complex on the filtered group in [F1].

[F1] The increasing filtration $0\subset\{0,2\}\subset\mathbb Z/4$ has two $\mathbb Z/2$ graded pieces, while its underlying group is not their direct sum: [[cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects]].

[F2] A stalk complex has a single nonzero chain object and zero differential: [[def-zero-and-stalk-complex]].

[F3] The page of a filtered complex is the stated filtered numerator/denominator quotient: [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]].

[F4] The page differential is induced by the chain differential: [[lem-the-filtered-differential-induces-d-r-on-the-r-page]].

[F5] Collapse at a page means that every differential on that and all later pages is zero: [[def-collapse-at-a-page]].

[F6] A bounded filtered complex abuts to its image-filtered homology: [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]].

[F7] Solving the extension problem means reconstructing the filtered abutment, with splitting requiring sections of its quotient extensions: [[def-extension-problem-of-a-convergent-spectral-sequence]].

## Refutation

**Proof technique:** direct.

1.1 Put the filtered group $A=\mathbb Z/4$ of [F1] in chain degree zero, using [F2]. Since the chain differential is zero, [F3] gives $E^r_{p,-p}=F_pA/F_{p-1}A$ and zero elsewhere for every $r$. Thus its only nonzero page objects are the two $\mathbb Z/2$ pieces at $p=0,1$. By [F4] every page differential is induced by the zero map, so the sequence collapses from page zero by [F5]. Its filtration is finite, and [F6] identifies its filtered abutment with $H_0(C)=A=\mathbb Z/4$. [F1, F2, F3, F4, F5, F6]

2.1 The projection $\mathbb Z/4\to(\mathbb Z/4)/\{0,2\}\cong\mathbb Z/2$ has fiber $\{1,3\}$ over $1$. Each element of this fiber doubles to $2\ne0$, so neither can be the image of $1$ under an additive section from $\mathbb Z/2$. Hence the quotient extension has no section in the sense of [F7]. The extension problem remains unsolved by the stable pieces even though the sequence has already collapsed. [F7, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
