---
id: thm-root-space-decomposition-relative-to-a-cartan-subalgebra
kind: theorem
title: "Root-space decomposition relative to a Cartan subalgebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, lem-finite-semisimple-cartan-root-and-string-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-root-space-decomposition-relative-to-a-cartan-subalgebra). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and $\mathfrak h\subseteq \mathfrak g$ a Cartan subalgebra. For $\alpha\in \mathfrak h^*$, set

$$\mathfrak g_\alpha:=\{x\in \mathfrak g : [h,x]=\alpha(h)x \text{ for every } h\in \mathfrak h\}.$$

Then there is a finite set $\Phi\subseteq \mathfrak h^*\setminus\{0\}$ such that

$$\mathfrak g=\mathfrak h\oplus \bigoplus_{\alpha\in \Phi} \mathfrak g_\alpha,$$

and the nonzero summands are exactly the root spaces.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, and a Cartan subalgebra $\mathfrak h\subseteq \mathfrak g$ in the nilpotent self-normalizing sense.

[A1] The Axiom of Choice is [[def-axiom-of-choice]].

[F1] Under [A1], a Cartan subalgebra in this sense is maximal toral ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]]).

[F2] Every maximal toral subalgebra of a finite-dimensional complex semisimple Lie algebra has a finite simultaneous root-space decomposition, with zero weight space exactly the subalgebra ([[lem-finite-semisimple-cartan-root-and-string-structure]]).

## Proof

**Proof technique:** direct.

1.1 By [A1, F1], $\mathfrak h$ is maximal toral. Its adjoint operators therefore commute and are diagonalizable; [F2] supplies their simultaneous finite weight-space decomposition. [A1, F1, F2]

2.1 The zero weight space is the centralizer $C_{\mathfrak g}(\mathfrak h)$, which equals $\mathfrak h$ by [F2]. The other nonzero weight spaces are exactly the displayed $\mathfrak g_\alpha$ by their simultaneous-eigenvector definition. [F2, step 1.1]

3.1 Collecting the finitely many nonzero weights gives the finite set $\Phi$, and the simultaneous eigenspace decomposition from step 1.1 becomes the stated direct sum decomposition. [step 1.1, step 2.1] ∎
