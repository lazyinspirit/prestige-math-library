---
id: "thm-lc-countable-completeness-and-well-founded-ultrapowers"
kind: "theorem"
title: "Countable completeness and transitive collapse"
deps: ["thm-lc-los-schema-for-universe-ultrapowers", "lem-lc-scott-quotients-are-sets-and-membership-is-setlike", "thm-mostowski-collapse-for-extensional-relations", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk pp.341–343; Marks Lemma 23.6 and Exercise 23.7 p.94
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC the Scott ultrapower of V is well-founded if and only if U is countably complete. In that case its membership relation collapses to a transitive definable class M containing all ordinals, and the collapsed constant map $j_U:V\to M$ is elementary, formula by formula.

## Facts & Assumptions

**Given:** ZFC. AC is used for set successor selections and sequence representatives; countable intersection gives Foundation contradiction, exit times prove the converse, and the verified collapse hypotheses yield M and its ordinals.

[F1] [[thm-lc-los-schema-for-universe-ultrapowers]]: The Scott relation is extensional and the constant map is elementary.

[F2] [[lem-lc-scott-quotients-are-sets-and-membership-is-setlike]]: Scott classes are nonempty sets and their relation is setlike.

[F3] [[thm-mostowski-collapse-for-extensional-relations]]: A well-founded extensional setlike definable class relation has a definable transitive collapse.

[F4] [[def-axiom-of-choice]]: AC chooses successors in a set without minimal elements and representatives of a sequence of Scott classes.

## Proof

1.1 Assume U countably complete. If a nonempty set S of Scott classes has no E-minimal member, choose an initial a_0 in S. By F4 choose, for each a in S, a predecessor s(a) in S; recursion gives $a_{n+1}=s(a_n)$. By F2 and F4 choose representative functions f_n from the nonempty Scott sets a_n. Each $A_n=\{i:f_{n+1}(i)\in f_n(i)\}$ belongs to U. Countable completeness makes their intersection a member of U, hence nonempty. At any i in it, the set $\{f_n(i):n\in\omega\}$ has no membership-minimal member, contrary to Foundation. Thus every nonempty set of classes has an E-minimal member. This also suffices for definable subclasses: for any chosen member, its finite predecessor closure is a set by set-likeness and Replacement, and an E-minimal member of its intersection with the subclass is minimal in that subclass. [F2, F4]

2.1 Conversely, if U is not countably complete, take A_n in U with intersection A not in U. Set $B_n=(I\setminus A)\cap\bigcap_{k\leq n}A_k$. Each B_n is in U and their intersection is empty. For every i let e(i) be the least n with i not in B_n. Then $\{i:e(i)>n\}=B_n$. Put $g_m(i)=\max(e(i)-m,0)$, viewed as a finite von Neumann ordinal. On B_m, g_(m+1)(i) is strictly smaller than g_m(i), hence belongs to it. Consequently $[g_{m+1}]_U\ E\ [g_m]_U$ for all m. Their range is a nonempty set with no E-minimal member, so the ultrapower is not well-founded. [F2, step 1.1]

3.1 In the complete case, F1 gives extensionality, F2 gives set-likeness and step 1.1 gives well-foundedness. Apply F3 to obtain a definable collapse pi onto transitive M. Composing pi with the constant map yields a definable elementary j by F1. For each ordinal alpha, elementarity says j(alpha) is an ordinal in M; transitivity makes this an actual ordinal. The map on ordinals is strictly increasing since membership is preserved. Induction gives $j(\alpha)\geq\alpha$: j(alpha) is above all j(beta) for beta below alpha, hence above or equal to their required supremum alpha. Given any ordinal gamma, j(gamma+1) belongs to M and is larger than gamma, so transitivity puts gamma in M. Restrictions of pi and j to sets are sets by Replacement; no Global Choice is involved. [F1, F2, F3, step 1.1, step 2.1] ∎
