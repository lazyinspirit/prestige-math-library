---
id: cex-conjugacy-alone-does-not-classify-braid-closures
kind: counterexample
title: "Conjugacy alone does not classify braid closures"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-markovs-closed-braid-equivalence-theorem,
       def-markov-conjugation-and-stabilization-moves, def-closure-of-a-geometric-braid,
       ex-a-markov-stabilization-preserves-the-unknot-closure, def-axiom-of-choice,
       lem-markov-moves-preserve-oriented-closure-isotopy,
       thm-choice-implies-dependent-implies-countable-choice,
       def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.3, printed pp. 17-19"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement refuted

Assume AC. Two braids have equivalent oriented closures if and only if they
are connected using conjugations alone, without changing strand number.

## Facts & Assumptions

**Given:** AC, the braids $e\in B_1$, $\sigma_1\in B_2$, $\sigma_1\sigma_2\in B_3$ and the closure construction of [[def-closure-of-a-geometric-braid]].

[F1] Stabilization replaces $\beta\in B_n$ by the product in $B_{n+1}$ of the standard inclusion of $\beta$ with $\sigma_n^{\pm1}$, the new strand being added on the right; conjugacy always takes place inside a single group $B_n$ and never changes the number of strands ([[def-markov-conjugation-and-stabilization-moves]]).

[F2] The stabilizations $e\sigma_1$ and $e\sigma_1^{-1}$ close to the unknot, with the explicit R1 isotopies, so the closure of the stabilization of the trivial one-strand braid is the unknot; the example item [[ex-a-markov-stabilization-preserves-the-unknot-closure]] records this for both signs.

[F3] Markov moves preserve the oriented closure up to equivalence; in particular the closure of a stabilized braid is equivalent to the closure of the original ([[lem-markov-moves-preserve-oriented-closure-isotopy]]).

[F4] By closure of a braid, the number of components is the number of cycles of the endpoint permutation; the permutation of $\sigma_1\in B_2$ is the transposition $(1\ 2)$ with one cycle, and the permutation of $\sigma_1\sigma_2\in B_3$ is a three-cycle, also with one cycle, so both closures have one component ([[def-closure-of-a-geometric-braid]], [[def-braid-group-by-the-artin-presentation]]).

## Counterexample

Assume the Axiom of Choice. The braids $\sigma_1\in B_2$ and $\sigma_1\sigma_2\in B_3$ have equivalent closures — both the unknot — but are not conjugate to each other, since conjugacy preserves the braid group and $B_2\ne B_3$. Hence conjugation alone, with the number of strands fixed, does not classify braid closures; at least one stabilization or destabilization is genuinely necessary.

1.1 **Both closures are unknots.** The trivial braid $e\in B_1$ closes to a round unknot. Its positive stabilization is $\sigma_1\in B_2$, whose closure is the unknot by [F2]; stabilizing $\sigma_1$ once more, adding the third strand on the right, gives the braid $\sigma_1\sigma_2\in B_3$, whose closure is equivalent to the closure of $\sigma_1$ by [F3], hence also an unknot. The component count is one in both cases by [F4], so both closures are one-component links, and by [F2] and [F3] they are the unknot. [F2, F3, F4, algebra]

1.2 **They are not conjugate.** Conjugation, by [F1], stays inside a fixed braid group $B_n$ and never changes the number of strands. The braid $\sigma_1\in B_2$ has two strands and $\sigma_1\sigma_2\in B_3$ has three; no sequence of conjugations within a single braid group can relate them, because such a sequence would have to identify an element of $B_2$ with an element of $B_3$. Therefore conjugation alone does not classify braid closures: the two closures are equivalent oriented links (both the unknot) while the braids are not conjugate. [F1, algebra]

2.1 **Conclusion.** The braids $\sigma_1\in B_2$ and $\sigma_1\sigma_2\in B_3$ have equivalent closures but are not conjugate; the only difference between the two braids in Markov terms is the stabilization that changes the group from $B_2$ to $B_3$, which is the strand-changing move that conjugacy cannot simulate. This verifies the counterexample and shows that at least one stabilization or destabilization is genuinely necessary for the classification. The statement retains AC because it consumes the countable-choice-stated closure-preservation lemma [F3], with countable choice following from AC by [[thm-choice-implies-dependent-implies-countable-choice]] and the ambient isotopy theory behind [F2]. [F1, F2, F3, step 1.1, step 1.2] ∎
