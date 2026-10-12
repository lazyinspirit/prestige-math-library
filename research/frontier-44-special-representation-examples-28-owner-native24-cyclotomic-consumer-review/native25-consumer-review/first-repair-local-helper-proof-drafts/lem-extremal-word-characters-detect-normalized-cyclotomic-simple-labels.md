---
id: "lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels"
kind: "lemma"
title: "Extremal word characters detect normalized cyclotomic simple labels"
provenance: {"statement": "ai-altered", "proof": "ai-altered"}
deps: ["def-cyclotomic-klr-quotient-at-a-dominant-weight", "def-cyclotomic-klr-diagram-duality-and-graded-module-duals", "lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head", "lem-klr-one-step-simple-restriction-induction-and-first-dot-index", "def-divided-power-klr-idempotents-and-projectives", "thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda", "def-axiom-of-choice"]
sources: {"references": [{"title": "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3", "url": "https://arxiv.org/pdf/0901.4450v3", "locator": "Actual cached text §4.12 Lemma4.21 and §5.6 Theorems5.17–5.18 read for this construction. Local maximal-tail proof supplied rather than importing the cited BK1 lemma."}]}
axiom_use: "AC is inherited only through thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda for naming the existing abstract crystal; exact restrictions, finite maximal tuples, character detection and nil-Hecke calculations use no new choice."
status: "draft"
origin: "session"
proof_strategy: "direct"
---

## Statement

For a finite-dimensional standard homogeneous cyclotomic KLR module M over any field, choose a word by successive maximal last-color blocks i_1^{r_1}...i_s^{r_s}. There is exactly one normalized simple shift orbit S_c contributing to that word; its right crystal label is c=tilde f_{i_s}^{r_s}...tilde f_{i_1}^{r_1}u_Lambda. Its word graded dimension is product_a [r_a]_{i_a}!, and [M:S_c]_v equals gdim e(word)M divided by that product. All other simple orbits have zero word space. Consequently graded word characters are injective on G0. If two fields have modules with the same word character, their extremal words and detected canonical B(Lambda) labels coincide. No one-dimensional word-space assertion is made. Choice is inherited only through the existing abstract crystal identification.

## Facts & Assumptions

[F1] The declared maximal-tail and one-step simple-head suppliers give exact restriction and reconstruction.

[F2] The declared crystal, finite-duality and divided-power suppliers give canonical labels, absolute normalized simples and the nil-Hecke factorial character.

## Proof

**Given:** The hypotheses of the statement and the explicitly declared proved supplier interfaces.

1.1 Let M be a finite-dimensional standard homogeneous cyclotomic module. Choose a nonzero word by successively maximizing the last constant-color block, then the preceding block after restricting that maximum, until the vacuum is reached. Write the resulting word as i_1^{r_1}...i_s^{r_s}, adjacent colors distinct. Restriction to a word idempotent is exact. Every simple constituent with nonzero word space must have precisely the same first maximal last-block length: a shorter length gives zero, a longer length would contradict maximality for M. The actual maximal-tail supplier identifies the full maximal restriction of this simple with N tensor L(i_s^{r_s}), where N is simple with zero residual i_s-tail. Repeat on N and on the corresponding exact restriction of M. At the end N is the unique vacuum simple. Reconstruct using the actual unique-head induction supplier. Hence exactly ONE simple shift orbit can contribute at the chosen word. Its crystal label is obtained by the same successive right-induction powers from the vacuum, so is field independent under the native11 canonical B(Lambda) identification. [F1, F2, algebra]

1.2 For the normalized simple S in that orbit, maximal restriction is normalized N tensor normalized L(i^r): restriction commutes with finite vector duality, the two factors are absolutely simple, and their unique self-dual normalizations force the remaining shift to be zero. The normalized rank-r nil-Hecke simple has graded dimension [r]_i!, by the actual polynomial/corner calculation with shift -d_i binomial(r,2). Iterating gives gdim e(word)S=product_a [r_a]_{i_a}!. Therefore the coefficient of [S] in [M] is gdim e(word)M divided by this nonzero product. No one-dimensional Hom or semisimplicity shortcut is used. The same exact argument, ordering maximal tuples, shows that characters of normalized simples are linearly independent: choose the lexicographically maximal tuple with nonzero coefficient and evaluate its extremal word, then remove it. Thus graded word character equality implies G0 equality, over each original field. [F1, F2, step 1.1, algebra]

1.3 For character injectivity, realize the finite set of simple orbits appearing in a virtual relation as their direct sum, choose an extremal word as above, and evaluate the relation: exactly one orbit contributes, with its nonzero factorial polynomial. Its Laurent coefficient is zero. Remove it and repeat on the remaining finite set. This proves injectivity without assuming the relation is a module. [step 1.1, step 1.2, algebra]
