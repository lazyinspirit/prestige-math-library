---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-17.md
      - research/frontier-38-owner-30-dispatch/reader-reader-17.result.json
      - research/frontier-38-owner-30-step5-hash-17-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-17-5a-decisions.json
id: def-braid-index-of-an-oriented-link
kind: definition
title: "The braid index of an oriented link"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-closure-of-a-geometric-braid, thm-alexanders-closed-braid-theorem,
       def-oriented-link-in-s-three-and-ambient-isotopy, def-natural-numbers,
       lem-closure-depends-only-on-the-braid-isotopy-class, def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2, printed p. 17"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Definition

Assume the Axiom of Choice. For an oriented link $L\subset S^3$
([[def-oriented-link-in-s-three-and-ambient-isotopy]]) put

$$b(L):=\min\bigl\{n\in\mathbb N:\text{ there is an }n\text{-braid }\beta\text{ with }\widehat\beta\text{ equivalent to }L\bigr\},$$

the **braid index** of $L$. Here an $n$-braid is a geometric braid based at
$Q$ ([[def-closure-of-a-geometric-braid]]) and $\widehat\beta$ is its oriented
closure.

For the empty link, $b(\varnothing)=0$: the empty braid in $B_0$ has that
closure, while a positive-strand braid has at least one permutation cycle
and hence a nonempty closure.

The minimum is well defined. The defining set is nonempty: by Alexander's
theorem ([[thm-alexanders-closed-braid-theorem]], which assumes AC) every
oriented link is equivalent to the closure of a braid on some number of
strands. The set is a subset of $\mathbb N$ and $\mathbb N$ is well ordered
([[def-natural-numbers]]), so it has a least element. The value of the minimum
is a property of $L$ alone: the closure construction is well defined on braid
isotopy classes and, by the closure-invariance lemma
([[lem-closure-depends-only-on-the-braid-isotopy-class]]), replacing a braid by
a braid-isotopic one does not change the equivalence class of the closure, so
the condition "$\widehat\beta$ equivalent to $L$" depends only on the braid
class, not on the chosen representative. The existence statement is Alexander's
theorem under AC, and the invariance statement assumes $\mathrm{AC}_\omega$,
which is discharged here from AC through the choice-implication bridge
([[thm-choice-implies-dependent-implies-countable-choice]]); the definition
therefore declares AC in accordance with the axiom-strength convention of this
page.
