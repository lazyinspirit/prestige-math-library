---
id: lem-os-filtered-convergence-and-invariance-scope
kind: lemma
title: "Filtered convergence and the scope of the Ozsváth–Szabó construction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-filtered-chain-complex
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
axiom_use: "Choice-free; the filtration is finite and all arguments are degreewise."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, Remark 1.1"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Let $(C,d,F)$ be a filtered chain complex over a field with an increasing filtration $0=F_{-1}C\subseteq F_0C\subseteq\cdots\subseteq F_nC=C$ and $d(F_pC)\subseteq F_pC$. Its spectral sequence stabilizes and abuts to $H(C)$ with the image filtration, without any uniform bound outside the finite range $0\le p\le n$. If a particular filtered complex has been constructed from a fixed link diagram, this convergence assertion does not itself identify filtered complexes arising from different diagrams.

## Statement references

[[def-filtered-chain-complex|Filtered chain complex convention]]

[[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology|Bounded filtration convergence theorem]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Remark 1.1](https://arxiv.org/pdf/math/0309170v1)

[Weibel, *An Introduction to Homological Algebra*, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf)

[Lipshitz, *Heegaard Floer Homologies*, §5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** A filtered chain complex $(C,d,F)$ with $F_{-1}C=0$ and $F_nC=C$ for some finite $n$.

[F1] A filtered chain complex has $d(F_pC)\subseteq F_pC$ ([[def-filtered-chain-complex]]).

[F2] A finite filtration yields a spectral sequence abutting to homology with the image filtration ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

## Proof

1.1 The filtration has only the levels $0,\ldots,n$, so it is finite, exhaustive and separated; [F1] says each level is a subcomplex. [F1, given]

2.1 Apply [F2] to this bounded filtered complex. Its pages stabilize and the limiting page is the associated graded of $H(C)$ with the filtration induced by the inclusions $F_pC\hookrightarrow C$. [F2, step 1.1]

3.1 This argument identifies the abutment for the fixed filtered complex only. No map between filtered complexes for two different link diagrams occurs in [F1] or [F2], so diagram-independent filtered quasi-isomorphism type is not a consequence of this convergence result. [F1, F2, step 2.1] ∎
