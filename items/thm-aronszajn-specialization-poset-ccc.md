---
id: thm-aronszajn-specialization-poset-ccc
kind: theorem
title: "Finite specialization of an Aronszajn tree is ccc"
status: published
origin: pipeline
deps: [def-finite-aronszajn-specialization-poset, cor-indexed-omega-one-delta-system, lem-aronszajn-finite-petals-incomparability, thm-countable-union-of-countable, thm-product-of-countable, thm-well-ordering-theorem, def-poset-ccc-and-knaster-property, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 16.37, printed p332; corrected indexed-delta reference and complete union case analysis"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, for every Aronszajn tree $T$, its finite-specialization poset $P(T)$ is ccc.

## Facts & Assumptions

**Given:** An Aronszajn tree $T$ and an uncountable subset $X\subseteq P(T)$. Assume AC.

[F1] Specializing conditions are finite functions separating comparable distinct nodes; two conditions are compatible iff their union is a specializing function. [[def-finite-aronszajn-specialization-poset]]

[F2] Every $\omega_1$-indexed family of finite sets has an uncountable indexed delta subsystem. [[cor-indexed-omega-one-delta-system]]

[F3] In an uncountable family of disjoint finite subsets of an Aronszajn tree, two members are cross-incomparable. [[lem-aronszajn-finite-petals-incomparability]]

[F4] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

[F5] A product of two countable sets is countable. [[thm-product-of-countable]]

[F6] AC well-orders every set. [[thm-well-ordering-theorem]]

[F7] ccc means that every pairwise incompatible subset is countable. [[def-poset-ccc-and-knaster-property]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 By F6 and A1 take an injective family $(p_\xi)_{\xi<\omega_1}$ from $X$. Apply F2 to their finite domains to obtain uncountable $J\subseteq\omega_1$ and finite root $r$ with $\operatorname{dom}(p_\xi)\cap\operatorname{dom}(p_\eta)=r$ for distinct $\xi,\eta\in J$. Every such domain contains $r$, since every index in $J$ has a distinct partner. [F1, F2, F6, A1, given]

2.1 The set of all maps $r\to\omega$ is countable: enumerate the finite set $r$, start with the one empty tuple, and apply F5 successively to obtain countability of each finite power of $\omega$. Thus F4, with A1, gives an uncountable $K\subseteq J$ and one assignment $v:r\to\omega$ such that $p_\xi\mathbin{\upharpoonright}r=v$ for every $\xi\in K$; otherwise all these countably many assignment fibers would be countable and their union $J$ would be countable. For $r=\varnothing$ there is just the empty assignment. [F4, F5, A1, step 1.1]

3.1 Put $s_\xi=\operatorname{dom}(p_\xi)\setminus r$. Distinct petals are disjoint by step 1.1. If some $s_\xi$ is empty, then $p_\xi=v\subseteq p_\eta$ for any other $\eta\in K$, so $p_\eta$ is a common lower bound. Otherwise every petal is nonempty; disjointness makes the petals distinct, so $\{s_\xi:\xi\in K\}$ is an uncountable family. Apply F3 to obtain distinct $\xi,\eta\in K$ whose petals are cross-incomparable. [F1, F3, step 1.1, step 2.1]

4.1 In the latter situation put $u=p_\xi\cup p_\eta$. This is a finite function because both assignments agree on $r$, their exact overlap. For comparable distinct nodes $x,y$ in its domain, if both lie in $\operatorname{dom}(p_\xi)$ or both lie in $\operatorname{dom}(p_\eta)$, F1 already gives unequal labels. This covers pairs in the root, root-to-petal pairs, and pairs inside one petal. The only remaining possibility is one node in each different petal; step 3.1 makes such nodes incomparable. Hence every required inequality holds and $u$ is a condition below both. In either alternative in step 3.1, $X$ contains two compatible distinct conditions. Consequently no uncountable subset is an antichain, which is ccc by F7. [F1, F7, step 1.1, step 2.1, step 3.1] ∎
