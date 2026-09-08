---
id: lem-hall-malcev-finite-collection-alphabets-include-torsion-carries
kind: lemma
title: Finite collection alphabets include commutators and torsion carries
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Lemma 14.17, pp.503–504
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-finite-lower-central-coordinate-systems-exist", "lem-hall-malcev-lower-central-commutators-add-weights"]
---
## Statement

A finite lower-central generating alphabet in a finitely generated nilpotent group can be enlarged to a finite alphabet closed under commutators and finite-order carries: if $x\in\gamma_i\setminus\gamma_{i+1}$ has order $d<\infty$ modulo $\gamma_{i+1}$, then $x^d$ is included (unless it is $1$). Inverses are included. Every letter has its ambient lower-central depth, and changes to the chosen cyclic-factor lists have fixed finite replacement words.

## Facts & Assumptions

**Given:** $G$ has class $c$, and fixed mixed coordinates are available. Identity letters are discarded when assigning weights.

[F1] Every element of every lower-central term has mixed coordinates in that and subsequent layers ([[lem-finite-lower-central-coordinate-systems-exist]]).

[F2] A commutator of depths $i,j$ has depth at least $i+j$ unless it is the identity ([[lem-hall-malcev-lower-central-commutators-add-weights]]).

## Proof

1.1 For nonidentity $x$, define its depth as the largest $i\le c$ with $x\in\gamma_i$. Start with the given finite alphabet, the chosen coordinate lifts, and their inverses. Whenever two available letters $x,y$ have depths $i,j$, add $[x,y]$ and its inverse if nontrivial. Whenever a letter of depth $i$ has finite order $d$ in its factor, add $x^d$ and its inverse if nontrivial. Commutator outputs have depth at least $i+j$; carry outputs have depth at least $i+1$. Inversion preserves depth. [F1, F2]

2.1 This closure is finite: regard every new letter as an expression built from initial letters by inverse, carry, and binary commutator operations, absorbing inverse into each operation so it is not an extra level. Along any branch of its expression tree, every non-inversion operation strictly increases depth. No branch has more than $c-1$ such operations. Binary trees of bounded height have bounded size; there are finitely many initial labels, and each carry exponent is uniquely determined by its input element. Induction on tree height therefore gives finitely many expressions and values. Closing under all these expressions yields the required alphabet. If $c=0$, it is empty after deleting identity. [step 1.1]

3.1 Fix any resulting letter of depth $i$. Successive projection in the mixed coordinates writes it as a fixed word in the weight-$i$ coordinate lifts followed by a word of weights at least $i+1$: all earlier coordinates vanish by the uniqueness construction. There are finitely many letters, so the lengths of these replacements have a common finite bound. Replacement of an inverse uses the reversed inverse word, with the same bound. Conversely fixed coordinate lifts also have finite words in any alphabet generating their lower-central term. These words account for finite changes of layer alphabets without treating redundant letters as independent coordinates. [F1, step 2.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Lemma 14.17, pp.503–504. Revised Lemma 14.17 supplies the finite closure construction. Fixed cyclic-basis replacements and inverse letters are explicitly retained.
