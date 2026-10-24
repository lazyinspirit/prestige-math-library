---
id: thm-specializing-forcing-kills-a-suslin-tree
kind: theorem
title: "Specializing forcing kills a Suslin tree"
status: published
origin: pipeline
deps: [def-aronszajn-suslin-and-special-tree, def-finite-aronszajn-specialization-poset, thm-aronszajn-specialization-poset-ccc, lem-specialization-dense-domains-and-union, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-countable-subsets-of-omega-one-are-bounded, thm-countable-union-of-countable, def-forcing-name-valuation-and-generic-extension, thm-check-name-evaluation-and-generic-reconstruction, lem-forcing-monotonicity-density-and-decision, thm-forcing-theorem, thm-generic-extensions-satisfy-zf-and-zfc, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Lemma 16.37 and Theorem 16.38 with complete proofs, printed p. 332"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $M$ be a transitive model of ZFC, let $T\in M$ be a Suslin tree in $M$, and
let $P(T)$ be its finite-specialization forcing. Then $P(T)$ is ccc and
preserves every cardinal and cofinality of $M$, in particular $\omega_1^M$.
Moreover, with the internal forcing relation of $M$,

$$1_{P(T)}\Vdash_M\text{“the ground tree }\check T\text{ is special and is not Suslin.”}$$

More precisely, $P(T)$ forces that the canonical generic union is a total map
$\check T\to\check\omega$ separating comparable nodes; consequently $T$
remains Aronszajn but acquires an uncountable antichain. This is an internal
forcing assertion and does not assert the existence of a generic over the
universe.

## Facts & Assumptions

**Given:** $M,T$ and $P=P(T)$ as in the Statement. Assume AC in $M$.

[F1] A Suslin tree has height $\omega_1$, countable levels, no cofinal branch, and no uncountable antichain; a natural-valued map separating comparable nodes specializes a tree. [[def-aronszajn-suslin-and-special-tree]]

[F2] Conditions in $P(T)$ are finite specializing functions, stronger conditions extend weaker graphs, the empty function is the greatest condition, and compatible conditions have a specializing union. [[def-finite-aronszajn-specialization-poset]]

[F3] In ZFC the finite-specialization forcing of an Aronszajn tree is ccc. [[thm-aronszajn-specialization-poset-ccc]]

[F4] Each node-domain set $D_t$ is dense, and the union of a nonempty directed family meeting all $D_t$ is a total specializing function. [[lem-specialization-dense-domains-and-union]]

[F5] Ccc forcing preserves all ground-model cofinalities and cardinals. [[thm-chain-condition-preserves-cofinalities-and-cardinals]]

[F6] Under countable choice, no at most countable subset of $\omega_1$ is cofinal. [[thm-countable-subsets-of-omega-one-are-bounded]]

[F7] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

[F8] Check names evaluate to their ground values; name valuation selects exactly the subnames whose coefficients lie in the filter. [[def-forcing-name-valuation-and-generic-extension]], [[thm-check-name-evaluation-and-generic-reconstruction]]

[F9] Forcing is persistent and closed under dense truth, and the forcing theorem relates the internal predicate to truth in generic extensions without asserting that such a generic over the universe exists. [[lem-forcing-monotonicity-density-and-decision]], [[thm-forcing-theorem]]

[F10] A generic extension of a transitive ZFC ground is again a transitive ZFC model. [[thm-generic-extensions-satisfy-zf-and-zfc]]

[A1] The ground model satisfies AC; its use in the ccc and preservation suppliers and its preservation to the extension are declared explicitly. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct forcing and generic-union analysis.

1.1 Since a Suslin tree is Aronszajn, [F3] makes $P$ ccc; [F2] also verifies that $P$ is nonempty with greatest condition $1_P=\varnothing$. Therefore [F5] says that forcing with $P$ preserves every ground cardinal and cofinality, including $\omega_1^M$. [F1, F2, F3, F5, A1]

1.2 In $M$ form the name $\dot f=\{\langle\check z,p\rangle:p\in P\text{ and }z\in p\}$. For every nonempty $G\subseteq P$, [F8] computes $\dot f_G=\bigcup G$. If $G$ is $M$-generic, it is a nonempty directed forcing filter and meets every $D_t\in M$; [F4] therefore makes $f=\dot f_G$ a total specializing map $T\to\omega$. Functionality is not merely inferred from notation: if $p,q\in G$ contain values for the same node, directedness gives $r\in G$ extending both graphs, so [F2] forces those values equal; the identical common-extension argument gives unequal values for every comparable distinct pair. [F2, F4, F8]

2.1 Work in such an extension $M[G]$, which satisfies ZFC by [F10]. By step 1.1, ordinals and $\omega_1^M$ are preserved; the old tree set and relation are unchanged, its old countable-level enumerations remain, and its node-height set remains cofinal in $\omega_1^M$, so $T$ still has height $\omega_1$. A branch $b$ admits an injection into $\omega$ by $f\mathbin{\upharpoonright}b$, since comparable distinct nodes have different values. If $b$ were cofinal, its node-height image would be an at most countable cofinal subset of $\omega_1$, contradicting [F6]; hence $T$ remains Aronszajn. [step 1.1, step 1.2, F1, F5, F6, F10]

3.1 The fibers $A_n=f^{-1}(\{n\})$ are antichains and $T=\bigcup_{n\in\omega}A_n$. If every $A_n$ were countable, [F7] would make $T$ countable; then its cofinal node-height image would again be a countable cofinal subset of $\omega_1$ by [F6], impossible. Thus some $A_n$ is an uncountable antichain. Consequently $T$ is special, remains Aronszajn, and is not Suslin in $M[G]$. This includes $n=0$ and does not assume in advance that any fiber is nonempty. [step 1.2, step 2.1, F1, F6, F7, F10]

4.1 The preceding conclusions are forced internally. Concretely, below every $p\in P$, each $D_t\cap P{\downarrow}p$ is dense; a member carrying $(t,n)$ has the corresponding check-pair as a coefficient of $\dot f$, while common refinements give exactly the functionality and specialization calculations of step 1.2. Dense truth and persistence in [F9] therefore force the total-specialization clauses below every condition. The ccc preservation theorem and the ZFC argument of steps 2.1-3.1 then force preservation and non-Suslinity. Hence $1_P$ forces the assertion in the Statement. This uses internal names and forcing only; no $M$-generic over the universe was postulated. [step 1.1, step 1.2, step 2.1, step 3.1, F8, F9, F10, A1] ∎

## Remarks

- “Kills” means destroys the Suslin property, not the tree or its height. The specializing map itself rules out a new cofinal branch, so the forced tree is still Aronszajn.
- Preservation of $\omega_1$ alone does not exhibit an uncountable fiber. The proof also uses ZFC in the extension to make a countable union of countable fibers countable and then uses the cofinal node-height set.
