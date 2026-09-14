---
id: cor-basic-cohen-model-finite-set-continuity
kind: corollary
title: Finite parameter sets admit disjoint clopen supports
status: draft
origin: pipeline
deps: [lem-basic-cohen-model-schema-of-continuity, def-set-difference-and-symmetric-difference, def-boolean-ideals-filters-and-primality]
proof_strategy: direct
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
    - {title: "Miroslav Repický, A proof of the independence of the Axiom of Choice from the Boolean Prime Ideal Theorem, Corollary 3, p.545", url: "https://im.saske.sk/~repicky/-r30.pdf"}
---

## Statement

Use the basic Cohen extension and $A$ from [[lem-basic-cohen-model-schema-of-continuity]]. Let $f$ be a finite tuple of distinct members of $A$. Suppose that a Boolean algebra $B$, a finite-arity map

$$d:A^r_{\ne}\longrightarrow B,$$

and finitely many sets used in assertions about its values are each ordinal-definable from $A,f$ and ordinal parameters. Here $A^r_{\ne}$ is the set of injective $r$-tuples. Let $T\subseteq A^r_{\ne}$ be finite, let $F$ be the union of the coordinates occurring in $T$, and assume $F\cap\operatorname{rng}(f)=\varnothing$.

Fix a finite conjunction $\Phi$ of assertions about the values $d(t)$ for $t\in T$, including assertions of the forms

$$d(t)\in S,\qquad d(t)\notin S,\qquad \neg_Bd(t)\in S,\qquad \neg_Bd(t)\notin S,$$

where every displayed $S$ is one of the fixed supported sets. If $\Phi$ holds, then there are pairwise disjoint basic clopen neighbourhoods $(U_a)_{a\in F}$, all avoiding $\operatorname{rng}(f)$, such that every map $g:F\to A$ satisfying $g(a)\in U_a$ preserves $\Phi$ after every tuple $t$ is replaced coherently by $g\circ t$. The $U_a$ may be required to lie inside any previously prescribed basic clopen neighbourhoods of their respective $a$.

In particular this applies with a supported ideal $I\subseteq B$ and $S=B\setminus I$, where set difference has the convention of [[def-set-difference-and-symmetric-difference]] and Boolean complementation has the convention of [[def-boolean-ideals-filters-and-primality]].

## Facts & Assumptions

**Given:** The finite supported data, the finite family $T$, the disjointness $F\cap\operatorname{rng}(f)=\varnothing$, and the true finite conjunction $\Phi$ from the Statement.

[F1] [[lem-basic-cohen-model-schema-of-continuity]] gives simultaneous clopen-box continuity for finitely many parameters ordinal-definable from $A$ and a fixed support tuple.

[F2] [[def-set-difference-and-symmetric-difference]] defines $B\setminus I$ by membership in $B$ and nonmembership in $I$.

[F3] [[def-boolean-ideals-filters-and-primality]] supplies the Boolean complement operation and the ideal vocabulary.

## Proof

**Proof technique:** direct.

1.1 If $F=\varnothing$, then $T$ is empty unless $r=0$. In either case there are no coordinates to vary: take the empty clopen family, and the fixed sentence $\Phi$ remains true. Assume henceforth that $F$ is nonempty, enumerate it without repetition as $\langle a_0,\ldots,a_{m-1}\rangle$, and concatenate this tuple after $f$. [given]

1.2 Choose the finitely many formulas and ordinal parameters which uniquely define $B,d$, and the sets occurring in $\Phi$ from $A,f$. In one formula $\psi(A,f,a_0,\ldots,a_{m-1})$, assert those unique definitions, reconstruct each member of $T$ by its finite list of coordinate positions, and assert the entire conjunction $\Phi$. If $S=B\setminus I$ occurs, replace it by the conjunction “belongs to $B$ and does not belong to $I$”; replace $\neg_Bd(t)$ by the uniquely specified Boolean complement in $B$. Thus $\psi$ is a single fixed membership formula and is true of the concatenated tuple. [F2, F3, construct]

2.1 Apply F1 to $f^\frown\langle a_0,\ldots,a_{m-1}\rangle$ and the formula from step 1.2. Retain the clopens assigned to the $a_i$ and discard those assigned to $f$. Pairwise disjointness of the larger family makes every retained clopen disjoint from every member of $\operatorname{rng}(f)$. If basic clopens $W_{a_i}$ were prescribed in advance, increase the finitely many defining prefix lengths so that the retained neighbourhood of $a_i$ lies in $W_{a_i}$; shrinking does not destroy the conclusion. [F1, step 1.2]

3.1 Let $g:F\to A$ select $g(a)\in U_a$. Since the $U_a$ are pairwise disjoint, $g$ is automatically injective, so every $g\circ t$ remains in $A^r_{\ne}$ and repeated occurrences of one coordinate are replaced coherently. The continuity conclusion for $\psi$ keeps $f$ fixed and preserves all unique definitions and every conjunct of $\Phi$. This proves the simultaneous assertion, including the specialization to $B\setminus I$. Only a finite tuple was enumerated and finitely many clopens were shrunk; no choice function on an arbitrary family was used. [F1, F2, F3, step 2.1] ∎
