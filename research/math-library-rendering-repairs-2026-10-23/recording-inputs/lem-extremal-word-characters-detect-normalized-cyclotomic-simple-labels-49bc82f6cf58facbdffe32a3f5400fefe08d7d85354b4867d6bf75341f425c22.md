---
id: lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels
kind: lemma
title: "Extremal word characters detect normalized cyclotomic simple labels"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight, def-cyclotomic-klr-diagram-duality-and-graded-module-duals, lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head, lem-klr-one-step-simple-restriction-induction-and-first-dot-index, def-divided-power-klr-idempotents-and-projectives, thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3"
      url: "https://arxiv.org/pdf/0901.4450v3"
      locator: "Actual cached text §4.12 Lemma4.21 and §5.6 Theorems5.17–5.18 read for this construction. Local maximal-tail proof supplied rather than importing the cited BK1 lemma."
verification:
  precheck: pass
---

## Statement

For a nonzero finite-dimensional standard homogeneous cyclotomic KLR module $M$ over any field, choose a word by successive maximal last-color blocks $i_1^{r_1}\cdots i_s^{r_s}$. Among the simple shift orbits occurring as constituents of $M$, exactly one normalized orbit $S_c$ contributes to that word; its right crystal label is $c=\tilde f_{i_s}^{r_s}\cdots\tilde f_{i_1}^{r_1}u_\Lambda$. Its word graded dimension is $\prod_a [r_a]_{i_a}!$, and $[M:S_c]_v$ equals $\operatorname{gdim} e(\mathrm{word})M$ divided by that product. All other simple orbits occurring in $M$ have zero space at this word; simple orbits absent from $M$ may have nonzero space there. The zero module has zero character and requires no extremal-word selection. Consequently graded word characters are injective on $G_0$. If two fields have modules with the same word character, their extremal words and detected canonical $B(\Lambda)$ labels coincide. No one-dimensional word-space assertion is made. Choice is inherited only through the existing abstract crystal identification.

## Facts & Assumptions

[F1] The declared maximal-tail and one-step simple-head suppliers give exact restriction and reconstruction.

[F2] The declared crystal, finite-duality and divided-power suppliers give canonical labels, absolute normalized simples and the nil-Hecke factorial character.

## Proof

**Given:** The hypotheses of the statement and the explicitly declared proved supplier interfaces.

1.1 Let $M$ be a nonzero finite-dimensional standard homogeneous cyclotomic module. Choose a nonzero word by successively maximizing the last constant-color block, then the preceding block after restricting that maximum, until the vacuum is reached. Write the resulting word as $i_1^{r_1}\cdots i_s^{r_s}$, adjacent colors distinct. Restriction to a word idempotent is exact. Every simple constituent of $M$ with nonzero word space must have precisely the same first maximal last-block length: a shorter length gives zero, a longer length would contradict maximality for $M$. The actual maximal-tail supplier identifies the full maximal restriction of this simple with $N\otimes L(i_s^{r_s})$, where $N$ is simple with zero residual $i_s$-tail. Repeat on $N$ and on the corresponding exact restriction of $M$. At the end $N$ is the unique vacuum simple. Reconstruct using the actual unique-head induction supplier. Hence exactly one simple shift orbit among the constituents of $M$ can contribute at the chosen word. Its crystal label is obtained by the same successive right-induction powers from the vacuum, so is field independent under the native11 canonical $B(\Lambda)$ identification. [F1, F2, algebra]

2.1 For the normalized simple $S$ in that orbit, maximal restriction is normalized $N$ tensor normalized $L(i^r)$: restriction commutes with finite vector duality, the two factors are absolutely simple, and their unique self-dual normalizations force the remaining shift to be zero. The normalized rank-$r$ nil-Hecke simple has graded dimension $[r]_i!$, by the actual polynomial/corner calculation with shift $-d_i\binom{r}{2}$. Iterating gives $\operatorname{gdim} e(\mathrm{word})S=\prod_a [r_a]_{i_a}!$. Therefore the coefficient of $[S]$ in $[M]$ is $\operatorname{gdim} e(\mathrm{word})M$ divided by this nonzero product. [F1, F2, step 1.1, algebra]

3.1 For character injectivity, realize the finite set of simple orbits appearing in a virtual relation as their direct sum, choose an extremal word as above, and evaluate the relation: exactly one orbit contributes, with its nonzero factorial polynomial. Its Laurent coefficient is zero. Remove it and repeat on the remaining finite set. This proves injectivity without assuming the relation is a module. [step 1.1, step 2.1, algebra] ∎
