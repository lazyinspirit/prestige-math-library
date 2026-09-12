---
id: "thm-forcing-theorem"
kind: "theorem"
title: "Forcing theorem"
deps: ["lem-atomic-forcing-relation-is-well-founded-and-definable", "def-forcing-relation-for-formulas", "lem-forcing-monotonicity-density-and-decision", "lem-forcing-truth-lemma"]
justified_by: []
forward_refs: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every fixed membership formula $\varphi$, forcing is uniformly definable from P and its name parameters over a transitive ZF ground model M and satisfies the truth lemma for every M-generic G. If externally an M-generic filter through every condition is available, then

$$p\Vdash^M\varphi(\vec\tau)\quad\Longleftrightarrow\quad\forall G\ (G\text{ is M-generic and }p\in G\ \Longrightarrow\ M[G]\models\varphi(\vec\tau_G)).$$

The definability assertion is a scheme indexed by fixed formulas. Existence of generics is an extra hypothesis for the displayed semantic characterization, not for the forcing predicate or truth lemma. ZF suffices.

## Facts & Assumptions

**Given:** A transitive ZF model M, its nonempty forcing preorder P, and a fixed formula with names in M.

[F1] [[lem-atomic-forcing-relation-is-well-founded-and-definable]] proves atomic definability on set cones.

[F2] [[def-forcing-relation-for-formulas]] extends definability through each fixed formula and specifies negation.

[F3] [[lem-forcing-monotonicity-density-and-decision]] supplies density closure and persistence.

[F4] [[lem-forcing-truth-lemma]] proves the semantic equivalence with existence of a forcing condition in a given generic.

## Proof

1.1 Atomic relations are definable by F1. At conjunction and negation insert the already obtained subformula predicates into the clauses in F2; at an existential quantify over the definable class of M-names and over the set P. This gives a fixed first-order predicate for each fixed formula. Every parameter is P, its order, or one of the name arguments. F4 then supplies the truth lemma for this very internally defined predicate. [F1, F2, F4]

2.1 If $p\Vdash^M\varphi$ and G is M-generic containing p, the right-to-left direction of F4 makes $\varphi$ true in M[G]. This implication needs no assumption that any generic exists. [F4, step 1.1]

2.2 Suppose p does not force $\varphi$. By density closure F3 the conditions forcing $\varphi$ cannot be dense below p. Hence some $q\le p$ has no stronger condition forcing $\varphi$, which says $q\Vdash^M\neg\varphi$ by F2. The extra generic-existence hypothesis supplies an M-generic G containing q; upward closure puts p in G. F4 makes $\neg\varphi$ true there. Thus the asserted truth in every generic through p fails. [F2, F3, F4, step 1.1]

3.1 Steps 2.1 and 2.2 give both directions of the display. The argument selected only one generic under the stated existence hypothesis; it did not select generics simultaneously or infer their existence from definability. Formula construction used an external finite induction, so no uniform truth predicate for the universe or AC was assumed. [step 2.1, step 2.2] ∎
