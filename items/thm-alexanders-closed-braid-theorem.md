---
id: thm-alexanders-closed-braid-theorem
kind: theorem
title: "Alexander's theorem: every link is a closed braid"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity,
       lem-a-positive-height-diagram-has-a-defect-region,
       lem-a-height-zero-diagram-represents-a-closed-braid,
       lem-every-oriented-link-admits-a-regular-projection,
       def-reducing-arc-and-yamada-vogel-reducing-move,
       def-coherence-of-seifert-circles-and-the-height-of-a-diagram, def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post-5a.json"
    content_sha256: "41903f33609bf6ebfbf2b1f46333d70e295c3e08d5dd3f4625f6db5c5ec3c657"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Theorem 2 and section 2.2, printed pp. 13-17"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

Assume the Axiom of Choice. Every oriented link $L\subset\mathbb R^3\subset S^3$
is equivalent to the oriented closure $\widehat\beta$ of a geometric braid
$\beta$ on some number $n\ge0$ of strands, with $n\ge1$ when $L$ is nonempty.

## Facts & Assumptions

**Given:** AC, an oriented link $L\subset\mathbb R^3$, and the Yamada-Vogel reducing algorithm ([[def-reducing-arc-and-yamada-vogel-reducing-move]], [[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]).

[F1] Assume AC. Every oriented link has a regular projection; AC yields $\mathrm{AC}_\omega$, which is used in the existence proof ([[lem-every-oriented-link-admits-a-regular-projection]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] If the height of a diagram is positive, the Seifert picture contains a defect region and hence a reducing arc ([[lem-a-positive-height-diagram-has-a-defect-region]]).

[F3] A reducing move lowers the height by one, so no sequence of reducing moves starting at $D$ has more than $h(D)$ terms ([[lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity]]).

[F4] A diagram of height zero represents the closure of an explicitly read-off braid: a sphere isotopy and a choice of planar chart give a nested coherent chain, and reading its signed crossing strips in angular order from a cut ray gives the braid word. The empty diagram gives the empty braid in $B_0$ ([[lem-a-height-zero-diagram-represents-a-closed-braid]]).

## Proof

**Proof technique:** direct.

1.1 **Choosing a diagram and a first reduction.** If $L$ is empty, its empty diagram is read by [F4] as the empty braid in $B_0$, proving the assertion. For a nonempty $L$, by [F1] fix a regular projection $D_0$ of $L$ with its over/under and orientation data, and let $h_0:=h(D_0)\in\mathbb N$. If $h_0=0$, [F4] already presents $L$ as the closure of a braid. If $h_0>0$, then by [F2] the Seifert picture of $D_0$ contains a defect region and a reducing arc; performing the reducing move produces a diagram $D_1$ of the same oriented link with $h(D_1)=h_0-1$ by [F3]. [F1, F2, F3, F4, given]

2.1 **Termination of the algorithm.** Iterate step 1.1. The sequence of heights is a strictly decreasing sequence of nonnegative integers, because each reducing move is a Reidemeister II move of the diagram, which does not change the represented oriented link, and lowers the height by exactly one; hence after exactly $h_0$ steps the algorithm stops at a diagram $D_{h_0}$ with $h(D_{h_0})=0$ representing $L$. [F2, F3, step 1.1]

3.1 **Reading the braid.** By [F4] the height-zero diagram $D_{h_0}$ is put in closed-braid form by a sphere isotopy and a choice of planar chart; the braid word read from the nested chain has a closure equivalent to the link of $D_{h_0}$, which is $L$. Hence $L$ is equivalent to the oriented closure $\widehat\beta$ of an explicit geometric braid $\beta$ on $n\ge1$ strands. [F4, step 2.1]

4.1 **Conclusion.** Steps 1.1-3.1 give the required braid. AC is used in [F1] (regular projections, through the bridge from AC to $\mathrm{AC}_\omega$) and in the AC-stated height and reducing-move chain [F2], [F3], which rests on the annulus lemma. [F1, F2, F3, F4, step 3.1] ∎
