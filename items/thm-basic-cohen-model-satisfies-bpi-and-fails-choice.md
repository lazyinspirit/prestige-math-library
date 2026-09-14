---
id: thm-basic-cohen-model-satisfies-bpi-and-fails-choice
kind: theorem
title: The basic Cohen model satisfies BPI and fails Choice
status: draft
origin: pipeline
deps: [lem-basic-cohen-search-and-shift-prime-ideal-construction, def-basic-cohen-symmetric-system, thm-hereditarily-symmetric-interpretations-form-a-zf-model, cor-basic-cohen-model-fails-well-orderability-and-choice, def-boolean-prime-ideal-principle, def-axiom-of-choice]
proof_strategy: composition
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, pp.83-134", url: "https://www.ams.org/books/pspum/013.1/0284328"}
    - {title: "Brian Ransom, On BPI in Symmetric Extensions Part 1, Theorem 3.10, Lemma 4.6, Theorem 4.9, and Theorem 5.27–Corollary 5.28", url: "https://arxiv.org/abs/2511.21684"}
---

## Statement

Let $M$ be a transitive model of ZFC, let $G$ be $M$-generic for $\operatorname{Add}(\omega,\omega)^M$, and let $N=\mathrm{HS}^G$ be the finite-support basic Cohen symmetric model. Then $N$ is a transitive model of

$$\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}.$$

Its symmetric set $A$ of coordinate Cohen reals is infinite and Dedekind-finite, and in particular is not well-orderable in $N$.

## Facts & Assumptions

**Given:** The ground, generic, and model in the Statement.

[F1] [[def-basic-cohen-symmetric-system]] defines $N$ and its coordinate set $A$.

[F2] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] proves that $N$ is a transitive ZF model.

[F3] [[lem-basic-cohen-search-and-shift-prime-ideal-construction]] proves inside this exact hereditarily symmetric presentation that every proper set filter extends to an ultrafilter and hence that BPI holds.

[F4] [[cor-basic-cohen-model-fails-well-orderability-and-choice]] proves that $A$ is infinite, Dedekind-finite, not well-orderable, and that AC fails in $N$.

[F5] [[def-boolean-prime-ideal-principle]] and [[def-axiom-of-choice]] fix the two object-theory assertions.

## Proof

**Proof technique:** composition of the symmetric-model, BPI, and failure-of-choice modules.

1.1 F1 and F2 give a transitive model $N$ of every ZF axiom. [F1, F2]

2.1 F3 applies to the same $M$, $G$, finite-permutation group, normal filter, and class of hereditarily symmetric names, so $N$ satisfies the BPI assertion of F5. This route does not use the unsupported promotion of a parameter-definable maximal ideal in the Repický shortcut. [F3, F5, step 1.1]

2.2 F4 applies to the same orbit set $A$ and shows internally that $A$ is infinite and Dedekind-finite. A well-order would enumerate its least unused elements and contradict Dedekind-finiteness, so $A$ is not well-orderable; by F5, AC would well-order it. Thus $N\models\neg\mathrm{AC}$. [F4, F5, step 1.1]

3.1 Combining steps 1.1, 2.1, and 2.2 gives $N\models\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}$. The ground-model AC used by the search-and-shift construction is a metatheoretic construction hypothesis and is not asserted in $N$. [step 1.1, step 2.1, step 2.2] ∎
