---
id: lem-lc-generic-evaluation-of-measurable-densities
kind: lemma
title: Generic evaluation of bounded measurable functions by rational cuts
status: draft
origin: pipeline
deps: [lem-lc-generic-boolean-ground-joins, lem-lc-probability-algebra-completeness, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-extended-real-valued-measurable-function, def-dedekind-cut, def-cut-addition, thm-check-name-evaluation-and-generic-reconstruction, thm-ordinals-and-omega-are-absolute-in-transitive-models, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Bagaria and da Silva, section 2.2 Theorem 2.9 p.8, density interpretation sketch; local rational-cut construction
      url: https://diposit.ub.edu/dspace/bitstream/2445/214429/1/847279.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Assume AC. Let $M$ be a transitive set model of ZFC containing a probability space $(X,\Sigma,\mu)$, let $\mathbb B$ be its probability algebra computed in $M$, and let $G\subseteq\mathbb B\setminus\{0\}$ be an externally supplied $M$-generic filter. All measurable functions, sequences, null equalities and algebra operations below are ground-model objects computed in $M$. Represent real numbers as lower Dedekind cuts. For a bounded nonnegative measurable function $h$, define the rational set

$$h_G=\{q\in\mathbb Q:[\{x:h(x)>q\}]\in G\}.$$

This is a nonnegative real cut and is the valuation of a Boolean name in $M$, hence belongs to $M[G]$. It depends only on the almost-everywhere class of $h$. Constants evaluate to the same real, and evaluation preserves addition of bounded nonnegative functions. If $c\in G$ and $h\le k$ almost everywhere on a measurable representative of $c$, then $h_G\le k_G$; equality on $c$ gives equality of evaluations. For bounded nonnegative $h$,

$$h_G=0\quad\Longleftrightarrow\quad [\{h=0\}]\in G.$$

If a ground sequence of bounded nonnegative measurable functions $(h_n)$ and a bounded nonnegative measurable $h$ satisfy $h=\sum_{n<\omega}h_n$ almost everywhere on $c\in G$, then $h_G=\sum_{n<\omega}(h_n)_G$. Empty sums evaluate to zero. The conclusions concern this explicitly supplied generic and ground sequences; ZFC preservation and generic existence are not asserted.

## Facts & Assumptions

**Given:** The statement's supplied $M,G$ and ground probability data. A bracket denotes the internal measurable-set equivalence class modulo null sets.

[F1] Generic filters select ground joins and contain ground meets exactly when they contain every term, and are proper Boolean ultrafilters. ([[lem-lc-generic-boolean-ground-joins]])

[F2] Probability algebras are complete, countable joins are measurable unions, and meet distributes over all joins. ([[lem-lc-probability-algebra-completeness]])

[F3] Finite sums, scalar multiples, measurable restrictions, and increasing limits of measurable functions have the stated measurability properties. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F4] A real cut is a nonempty proper downward-closed rational set with no greatest element. ([[def-dedekind-cut]])

[F5] Addition of real cuts is their rational sumset; zero is the set of negative rationals. ([[def-cut-addition]])

[F6] Ground check names evaluate to their ground objects, for a nonempty coefficient filter. ([[thm-check-name-evaluation-and-generic-reconstruction]])

[F7] A transitive ZF model has the actual natural numbers. ([[thm-ordinals-and-omega-are-absolute-in-transitive-models]])

[F8] AC is available internally for probability-algebra completeness in F2; no further family of generic witnesses is selected. ([[def-axiom-of-choice]])

[F9] A measurable real-valued function has a measurable strict superlevel set at every real threshold. ([[def-extended-real-valued-measurable-function]])

## Proof

1.1 By F7 the internal finite integers are the actual ones. Integer and rational arithmetic constructed from pairs of these integers agrees with the external construction: each quotient class has precisely the pairs satisfying the same finite cross-multiplication equation. Thus the rational set, its order and its arithmetic agree. F4's cut clauses quantify over this identical rational set, so every internal cut is an actual cut. Inclusion and F5's sumset also agree, since their rational membership tests have exactly the same witnesses. In particular ground rational bounds and ground real cuts can be read externally without choosing representatives of equivalence classes of real sequences. [F4, F5, F7]

2.1 For each rational $q$ put $b_q(h)=[\{h>q\}]$. These coefficients form a ground set function; F9 makes the level sets measurable. If $q<r$ then $b_r(h)\le b_q(h)$, and $b_q(h)=\bigvee_{r\in\mathbb Q,\ r>q}b_r(h)$. For the latter equality, membership of $q$ in each value cut has a larger member by F4, so the corresponding measurable union is exactly $\{h>q\}$; F2 turns this countable union into the stated join. Here rationals are countable by their explicit integer-pair enumeration. If $h\ge0$ and $h\le K$ for a ground bound, all negative rational coefficients are one and any rational above $K$ has coefficient zero. A rational above a cut bound exists because its complement is nonempty and upward closed. F1 now makes $h_G$ nonempty, proper and downward closed, and its ground-join property gives no greatest element. Hence $h_G$ is a nonnegative real cut. [F1, F2, F4, F8, F9, step 1.1]

3.1 Form in $M$ the name $\dot r_h=\{\langle\check q,b_q(h)\rangle:q\in\mathbb Q\}$. Its entries form a set by Replacement, and are pairs of names and Boolean coefficients, so it is a Boolean name. F6 and valuation give $\operatorname{val}_G(\dot r_h)=\{q:b_q(h)\in G\}=h_G$. Thus the cut belongs to $M[G]$ without using Separation in $M[G]$. If $h=k$ almost everywhere, every pair of corresponding level sets differs only on that same null set, so the coefficients coincide and the displayed names coincide. For a ground constant $r\ge0$, $b_q(r)$ is one exactly for $q\in r$, and otherwise zero; F1 proves $r_G=r$, including zero and one. [F1, F2, F6, step 2.1]

3.2 Suppose $c\in G$ and $h\le k$ almost everywhere on a representative of $c$. For every rational $q$, $c\wedge b_q(h)\le c\wedge b_q(k)$. If $q\in h_G$, meet closure puts the left side in $G$ and upward closure puts $b_q(k)$ in $G$, so $q\in k_G$. Thus $h_G\subseteq k_G$, which is the order of cuts. Equality almost everywhere on $c$ supplies both inclusions. The conclusion is independent of the representative of $c$, since equivalent representatives differ by a null set. [F1, F2, F4, step 2.1]

3.3 For bounded nonnegative $h,k$ and rational $q$, the sumset formula F5 yields the ground identity $b_q(h+k)=\bigvee_{r,s\in\mathbb Q,\ r+s=q}(b_r(h)\wedge b_s(k))$: at a point, $q$ is in the sum cut exactly when it is a sum of a member of each input cut. The countable union is measurable by F3, and F2 gives its Boolean join. By F1 this coefficient belongs to $G$ exactly when some such pair has both coefficients in $G$. The resulting rational cut is precisely the sumset $h_G+k_G$. Hence $(h+k)_G=h_G+k_G$, with all functions bounded at this finite stage. No pair of witnesses is selected simultaneously for all $q$; each equivalence uses its own existential witness. [F1, F2, F3, F5, step 2.1]

4.1 Put $z=[\{h=0\}]$. If $z\in G$, step 3.2 compares $h$ with the zero function on $z$ and gives $h_G=0$. Conversely if $h_G=0$, none of the coefficients $b_q(h)$ for positive rational $q$ is in $G$. Their complements are all in $G$ by F1. The ground-family meet of these complements is $z$: for nonnegative value cuts, a strictly positive value has a positive rational strictly below it, since a cut strictly containing the zero cut has, by no greatest element, a positive member. The countable intersection therefore describes exactly $h=0$. F2 and F1 give $z\in G$. This proves both zero-test directions without assuming that generic filters preserve external families of meets. [F1, F2, F4, step 3.1, step 3.2]

4.2 Let $s_N=\sum_{n<N}h_n$. For the ground sequence in the statement, F3 makes every $s_N$ measurable and bounded, and step 3.3 gives $(s_N)_G=\sum_{n<N}(h_n)_G$. The assumed equality on $c$ implies $s_N\le h$ there, so step 3.2 bounds every evaluated partial sum by $h_G$. Their increasing union of lower cuts is a real cut: it contains the zero cut, is bounded by the proper cut $h_G$, is downward closed, and has no greatest element by the same property in each term. This union is their least upper bound under inclusion and thus is the nonnegative series sum. [F3, F4, F5, step 3.2, step 3.3]

5.1 For any rational $q\in h_G$, the ground almost-everywhere identity on $c$ gives $c\wedge b_q(h)=\bigvee_{N<\omega}(c\wedge b_q(s_N))$. Indeed, the cut of the pointwise nonnegative series is the union of its partial-sum cuts wherever the assumed equality holds; a single null exceptional set does not change the Boolean identity. By F2 this is a countable join. Since its left side is in $G$, F1 selects an $N$ with $b_q(s_N)\in G$, so $q\in(s_N)_G$. Thus $h_G$ is contained in the union from step 4.2, and the reverse inclusion was already proved there. This proves the countable-sum identity. At an empty sum both cuts are zero by step 3.1; for a singleton it reduces to locality. Only ground sequences and joins were used. AC was inherited exactly through F2 as specified in F8; no existence of a generic or axiom satisfaction for its extension has been used. [F1, F2, F4, F8, step 2.1, step 3.1, step 4.2] ∎
