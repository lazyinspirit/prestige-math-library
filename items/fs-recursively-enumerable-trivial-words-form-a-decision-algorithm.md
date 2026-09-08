---
id: fs-recursively-enumerable-trivial-words-form-a-decision-algorithm
kind: false-statement
title: "FALSE: recursively enumerable trivial words already give a decision algorithm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-recursive-and-finite-group-presentations, def-recursive-and-recursively-enumerable-languages, lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable, thm-reduced-words-form-the-free-group, thm-presentation-of-a-free-product-with-amalgamation, thm-normal-form-for-free-products-with-amalgamation]
forward_refs: [thm-halting-is-recognizable-and-undecidable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Local counterexample construction and prerequisite audit; no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Combinatorial Group Theory, Section 5.2, four-generator recursive amalgam"
      url: "https://www.macs.hw.ac.uk/~lc45/Teaching/kggt/miller.pdf"
pipeline_run: null
---

## Statement

If the trivial words of a presentation form a recursively enumerable language,
then the word problem for that presentation is solvable.

## Facts & Assumptions

**Given:** The universal claim in the Statement. We construct one recursive presentation with enumerable trivial words and no algorithm deciding triviality for every input word.

[L1] The halting language on binary strings is recognizable and undecidable ([[thm-halting-is-recognizable-and-undecidable]]). This is an explicit load-bearing reference to the later computability theorem.

[L2] A recursive presentation has a finite generating alphabet and enumerable relators; its trivial-word language is enumerable ([[def-recursive-and-finite-group-presentations]], [[def-recursive-and-recursively-enumerable-languages]], [[lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable]]).

[L3] Free groups have the reduced-word model, with only adjacent inverse cancellations ([[thm-reduced-words-form-the-free-group]]).

[L4] An amalgamated free product has the union of the factor presentations and the relations identifying subgroup generators. Its normal form makes an alternating product of elements outside the amalgamated subgroup nontrivial ([[thm-presentation-of-a-free-product-with-amalgamation]], [[thm-normal-form-for-free-products-with-amalgamation]]).

## Refutation

**Proof technique:** direct.

1.1 Enumerate binary strings first by length, then lexicographically, starting with the empty string as index zero. Both the indexing and its inverse are computable by finite scans. Let $S\subseteq\mathbb N$ be the indices of the halting language from [L1]. Dovetail its recognizer on all strings to enumerate $S$. A decider for $S$ would decide the halting language by computing an index. Hence $S$ is enumerable and undecidable. [given, L1, algebra]

2.1 In $F(a,b)$ put $u_i=a^{-i}ba^i$ for $i\in\mathbb N$. A nonempty reduced word in the formal symbols $u_i^{\pm1}$ can be collected as $u_{i_1}^{e_1}\cdots u_{i_r}^{e_r}$ with $e_j\ne0$ and adjacent indices distinct. Its expansion is $$a^{-i_1}b^{e_1}a^{i_1-i_2}b^{e_2}\cdots a^{i_{r-1}-i_r}b^{e_r}a^{i_r}.$$ Every interior power of $a$ is nonzero and every displayed power of $b$ is nonzero, so this is a nonempty reduced word after omitting any zero end power. Thus the $u_i$ freely generate their subgroup. In particular $u_j$ lies in $U=\langle u_i:i\in S\rangle$ exactly when $j\in S$: otherwise equality with a word on the selected basis elements would give a nonempty reduced relation. [step 1.1, L3, algebra]

3.1 In the disjoint free group $F(c,d)$ put $v_i=c^{-i}dc^i$ and $V=\langle v_i:i\in S\rangle$. The same proof applies, and $u_i\mapsto v_i$ for $i\in S$ extends to an isomorphism $U\to V$. By [L4], amalgamating this isomorphism gives the recursive presentation $$\mathcal P_S=\langle a,b,c,d\mid a^{-i}ba^i c^{-i}d^{-1}c^i, i\in S\rangle.$$ Its relators can be listed by the enumeration in step 1.1. [step 2.1, L2, L3, L4, algebra]

4.1 Set $w_j=u_jv_j^{-1}$. If $j\in S$, then $w_j=1$ by its defining relation. If $j\notin S$, step 2.1 and its counterpart for $V$ put the two factors outside the amalgamated subgroup, so [L4] makes $w_j\ne1$. The required coset transversals exist without a choice axiom: order the finite-alphabet reduced words by length and then lexicographically, and take the unique least word in each coset. This selection need not be computable; it is only used for the normal-form proof. Rewriting either non-subgroup factor in these transversals gives a nonidentity representative, and absorbing the intervening subgroup element into the other factor leaves that factor outside its subgroup, yielding a positive-length normal word. Thus $$w_j=_{\mathcal P_S}1\quad\Longleftrightarrow\quad j\in S.$$ [step 2.1, step 3.1, L4, algebra]

5.1 The map $j\mapsto w_j$ is computable by writing the four indicated powers. A word-problem decider for this one presentation would therefore decide $S$, contrary to step 1.1. Yet its trivial words are enumerable by [L2] and step 3.1. This presentation is the required counterexample. Its relator list is allowed to be infinite, as the Statement imposes no finite-presentation hypothesis. [step 1.1, step 3.1, step 4.1, L2, algebra] ∎
