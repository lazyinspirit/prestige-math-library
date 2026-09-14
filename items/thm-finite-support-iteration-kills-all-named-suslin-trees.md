---
id: thm-finite-support-iteration-kills-all-named-suslin-trees
kind: theorem
title: "Finite-support bookkeeping kills all named Suslin trees"
status: draft
origin: pipeline
deps: [def-omega-two-ma-bookkeeping-iteration, lem-bounded-stage-capture-in-finite-support-iterations, thm-finite-support-iterations-preserve-ccc, thm-specializing-forcing-kills-a-suslin-tree, thm-chain-condition-preserves-cofinalities-and-cardinals, def-aronszajn-suslin-and-special-tree, lem-iteration-restrictions-and-complete-embeddings, thm-forcing-equivalence-and-boolean-completion, thm-forcing-theorem, thm-generic-extensions-satisfy-zf-and-zfc, thm-regularity-of-the-alephs, cor-cardinal-absorption, thm-schroder-bernstein, thm-countable-union-of-countable, thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.10 and Lemmas 7.11-7.13, printed pp. 37-38"
      url: https://karagila.org/files/Forcing-2023.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $M$ be a transitive model of ZFC+GCH and let
$P_{\omega_2}$ be its $\omega_2$ finite-support ccc bookkeeping iteration.
Whenever an $M$-generic $G\subseteq P_{\omega_2}$ is supplied, every Suslin
tree in $M[G]$ has an isomorphic presentation coded at a bounded stage, and a
later coordinate schedules an isomorphic top-adjoined presentation of its ccc
finite-specialization forcing on the branch met by $G$. Consequently
$M[G]$ has no Suslin tree and satisfies the Suslin Hypothesis.

Equivalently, if generics through every condition are externally available,
$1_{P_{\omega_2}}$ forces SH over $M$. This last reformulation uses the forcing
theorem; neither formulation asserts that an $M$-generic exists in the
universe.

## Facts & Assumptions

**Given:** $M$, the iteration $P_{\omega_2}$, and a supplied $M$-generic $G$
as in the Statement. Assume AC and GCH in $M$.

[F1] The bookkeeping definition gives an $\omega_2$-length finite-support
iteration whose iterands are forced nonempty and ccc; every earlier canonical
nice code for a ccc order of size at most $\aleph_1$ is revisited later, using
an isomorphic top-adjoined presentation on every positive branch.
[[def-omega-two-ma-bookkeeping-iteration]]

[F2] Every stage of a finite-support iteration of forced ccc orders is ccc.
[[thm-finite-support-iterations-preserve-ccc]]

[F3] In a finite-support ccc iteration of uncountable-cofinality length,
structures coded by fewer than that cofinality many ground ordinals occur at a
bounded stage. [[lem-bounded-stage-capture-in-finite-support-iterations]]

[F4] Ccc forcing preserves all ground-model cardinals and cofinalities.
[[thm-chain-condition-preserves-cofinalities-and-cardinals]]

[F5] A Suslin tree has height $\omega_1$, countable levels and no uncountable
antichain; a natural-valued map separating comparable nodes specializes it.
[[def-aronszajn-suslin-and-special-tree]]

[F6] Under AC, $\aleph_2$ is regular. [[thm-regularity-of-the-alephs]]

[F7] Infinite-cardinal absorption identifies $\omega_1\times\omega_1$ and
$\omega_1\times\omega$ with $\omega_1$ and bounds the countable union of its
finite powers by $\aleph_1$. [[cor-cardinal-absorption]]

[F8] Opposing injections give a bijection. [[thm-schroder-bernstein]]

[F9] Restricting an iteration generic gives the corresponding earlier generic,
and the successor quotient is the evaluated coordinate iterand.
[[lem-iteration-restrictions-and-complete-embeddings]]

[F10] Isomorphic presentations and a top adjunction are forcing-equivalent when
the original order embeds densely; corresponding generics and valuations give
the same generic extension. [[thm-forcing-equivalence-and-boolean-completion]]

[F11] Finite-specialization forcing for a Suslin tree is ccc and forces its
canonical generic union to be a total specialization.
[[thm-specializing-forcing-kills-a-suslin-tree]]

[F12] Under countable choice, a countable union of countable sets is countable.
[[thm-countable-union-of-countable]]

[F13] Nonexistence of a Suslin tree is equivalent in ZFC to the Suslin
Hypothesis in the strong line convention.
[[thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras]]

[F14] Generic extensions of a transitive ZFC ground satisfy ZFC.
[[thm-generic-extensions-satisfy-zf-and-zfc]]

[F15] The forcing theorem supplies truth and the conditional semantic
characterization, whose reverse implication requires externally available
generics through conditions. [[thm-forcing-theorem]]

[A1] AC chooses simultaneous level enumerations, the transported presentation,
and the bookkeeping data; it is preserved to all intermediate and final
extensions. [[def-axiom-of-choice]]

## Proof

**Proof technique:** contradiction, bounded-stage capture, and later specialization.

1.1 By [F1] every iterand is forced ccc, so [F2] makes $P_{\omega_2}$ ccc. Hence [F4] preserves $\omega_1^M$ and $\omega_2^M$, while [F6] gives $\operatorname{cf}^M(\omega_2)=\omega_2$. Every intermediate and final extension satisfies ZFC by [F14]. [F1, F2, F4, F6, F14, A1]

1.2 Suppose toward a contradiction that $T\in M[G]$ is Suslin. Every level $T_\alpha$ is nonempty: height $\omega_1$ supplies a node above $\alpha$, whose predecessor well-order contains a node of height $\alpha$. By AC choose $t_\alpha\in T_\alpha$ and an injection $e_\alpha:T_\alpha\to\omega$ for every $\alpha<\omega_1$. Then $\alpha\mapsto t_\alpha$ injects $\omega_1$ into $T$, while $t\mapsto(\operatorname{ht}(t),e_{\operatorname{ht}(t)}(t))$ injects $T$ into $\omega_1\times\omega$. By [F7] and [F8], fix a bijection $b:\omega_1\to T$. Transport the tree order to a relation $R$ on $\omega_1$. Fixing a bijection $\pi:\omega_1\times\omega_1\to\omega_1$ from [F7], the set $C=\{\pi(\xi,\eta):\xi R\eta\}\subseteq\omega_1$ codes the isomorphic tree $T^*=(\omega_1,R)$. [F5, F7, F8, F14, A1, assume-contra]

2.1 The code $C$ has size at most $\aleph_1<\operatorname{cf}(\omega_2)$ by steps 1.1-1.2. Since its members are ground ordinals, [F3] gives $\alpha<\omega_2$ with $C,T^*\in M[G_\alpha]$. The tree $T^*$ is already Suslin there. Its tree laws, height and absence of a cofinal branch follow downward from the final model because its carrier, relation and ordinals are unchanged. If the earlier model had an uncountable level or antichain $A$, AC there would give an injection $\omega_1\to A$; in the final model the corresponding level or antichain is countable by the assumed Suslinity, so composition would make $\omega_1$ countable, contrary to step 1.1. Thus levels were countable and no uncountable antichain existed at stage $\alpha$. The same argument applies at every later intermediate stage as long as the final model is assumed to see $T^*$ as Suslin. [step 1.1, step 1.2, F3, F4, F5, F14, A1]

3.1 In $M[G_\alpha]$ form the finite-specialization order $P(T^*)$. It is ccc by [F11]. Its conditions are finite functions from $\omega_1$ to $\omega$; increasing enumeration of a finite graph codes it by a finite sequence from $\omega_1\times\omega$, and the union over finite lengths has size at most $\aleph_1$ by repeated absorption in [F7]. Take a ground $P_\alpha$-name for this order. The truth lemma in [F15] supplies a condition on the actual generic branch forcing that it is ccc of size at most $\aleph_1$; the canonical-code clause of [F1] turns it into a scheduled nice code. Because every code is revisited cofinally, choose a scheduled stage $\beta>\alpha$. Step 2.1 ensures that on the maximal-antichain branch met by $G_\beta$, the evaluated coordinate iterand is an isomorphic top-adjoined presentation of $P(T^*)$, not the one-point negative branch. [step 2.1, F1, F7, F11, F15, A1]

4.1 By [F9], $G_{\beta+1}$ factors over $M[G_\beta]$ through a generic for that evaluated coordinate iterand. The isomorphism from its positive presentation to a top-adjoined $P(T^*)$ is onto, and the inclusion of $P(T^*)$ below the new top is a dense order embedding: the new top has every old condition below it. Therefore [F10] identifies its generic extension with a $P(T^*)$-generic extension. Since $T^*$ is Suslin in $M[G_\beta]$ by step 2.1, [F11] supplies there a total function $f:T^*\to\omega$ separating every comparable distinct pair. This function and those pointwise inequalities persist to $M[G]$. [step 2.1, step 3.1, F9, F10, F11, F14]

5.1 In the final model each fiber $A_n=f^{-1}(\{n\})$ is an antichain of the assumed Suslin tree $T^*$, hence is countable by [F5]. Their countable union is all of the carrier $\omega_1$, so [F12] would make $\omega_1$ countable, contradicting step 1.1. This includes the fiber $n=0$ and does not presume that any fiber is nonempty. Thus the alleged final Suslin tree cannot exist. [step 1.1, step 1.2, step 4.1, F5, F12, A1, discharge-contradiction]

6.1 The tree $T$ was arbitrary, so $M[G]$ has no Suslin tree; [F13] yields SH under the strong line convention. The argument applies to every supplied $M$-generic. If generics through all conditions are externally available, [F15] converts that universal generic-extension conclusion into $1_{P_{\omega_2}}\Vdash_M\mathrm{SH}$. Without that extra availability, the internal forcing predicate still exists but this semantic equivalence is not asserted. [F13, F15, step 5.1] ∎

## Remarks

- What is captured is a canonical code for an isomorphic presentation on
  $\omega_1$, not necessarily the original raw name for the tree. This is the
  distinction required by the bookkeeping definition.
- No claim that Suslinity is upward absolute is used. Under the contradiction
  hypothesis, an earlier uncountable antichain cannot become countable in the
  ccc final extension because it carries an injection from the preserved
  $\omega_1$; a cofinal branch simply persists.
