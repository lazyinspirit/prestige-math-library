---
id: "lem-minimal-free-resolution-differentials-land-in-maximal-ideal"
kind: "lemma"
title: "minimal free resolution differentials land in maximal ideal"
deps: ["lem-finite-local-modules-admit-minimal-free-resolutions"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Definition 1.49 and discussion after Lemma 1.50, pp.23–24"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For an augmented degreewise finite free resolution over a nonzero Noetherian local ring $(R,\mathfrak m)$, minimality means that every positive differential matrix has entries in $\mathfrak m$. Equivalently no positive differential admits a unit pivot, or a nonzero two-term identity direct summand. A unit pivot can be cancelled without changing the resolved module.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-finite-local-modules-admit-minimal-free-resolutions]]: Every finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has an augmented resolution $\cdots\to F_1\to F_0\to M\to0$ by finite-rank free modules, with $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for $i>0$. Such a resolution is called minimal; it need not be bounded. This extends the bounded terminology without changing it.

## Proof

1.1 The condition that an image lie in $\mathfrak mF_{i-1}$ is exactly that all matrix entries lie in $\mathfrak m$, and is basis-independent. Since the complement of $\mathfrak m$ consists of units, failure supplies a unit entry. This is the minimality convention of the existence lemma. [F1, given]

2.1 Move that entry to the first position, scale it to $1$, and clear its row and column by elementary basis changes. The matrix becomes $\operatorname{diag}(1,D)$. The identities $d_{i-1}d_i=d_id_{i+1}=0$ force adjacent maps to vanish on or into the isolated coordinates; for $i=1$ the augmentation also vanishes there. Hence these coordinates form the direct summand $0\to R\xrightarrow{1}R\to0$. Deleting it preserves exactness. Conversely an identity summand cannot have zero residue differential, while every matrix with entries in $\mathfrak m$ does. [step 1.1, algebra] ∎
