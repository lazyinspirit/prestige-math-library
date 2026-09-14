---
id: lem-suslin-tree-forcing-is-countably-distributive
kind: lemma
title: "Normal Suslin-tree forcing is countably distributive"
status: draft
origin: pipeline
deps: [def-kappa-closure-distributivity-and-chain-condition, def-dense-open-sets-and-model-generic-filters, def-normal-splitting-set-theoretic-tree, def-aronszajn-suslin-and-special-tree, lem-tree-predecessors-and-common-extensions, def-axiom-of-choice, thm-zorn, thm-countable-subsets-of-omega-one-are-bounded, cor-countable-choice-and-omega-one-cofinality, thm-closure-distributivity-and-no-short-sequences, thm-forcing-preserves-ordinals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Proposition 15.43 and Lemma 15.44, printed pp. 277-278"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
    - title: "Karagila, Forcing & Symmetric Extensions, Theorems 4.16 and 4.22, printed pp. 22 and 24"
      url: https://karagila.org/files/Forcing-2023.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $T$ be a normal Suslin tree and order $P=T$ by reverse tree order, so extensions in the tree are stronger forcing conditions. In ZFC, $P$ is ccc and $\aleph_1$-distributive (equivalently, the intersection of every countable family of dense open subsets is dense). Consequently forcing with $P$ adds no new $\omega$-sequences of ordinals.

## Facts & Assumptions

**Given:** A normal Suslin tree $T$; $P=(T,\ge_T)$ is its reverse forcing order. Assume AC.

[F1] $\aleph_1$-distributive means that every countable family of dense open subsets has dense intersection, and ccc means that every antichain is countable. [[def-kappa-closure-distributivity-and-chain-condition]]

[F2] A dense set contains an extension of every condition, and an open set contains every stronger extension of each of its members. [[def-dense-open-sets-and-model-generic-filters]]

[F3] Normality extends every node to each higher tree level. [[def-normal-splitting-set-theoretic-tree]]

[F4] A Suslin tree has height $\omega_1$, countable levels, and no uncountable antichain. [[def-aronszajn-suslin-and-special-tree]]

[F5] Two nodes below a common tree extension are comparable, and strict tree order raises height. [[lem-tree-predecessors-and-common-extensions]]

[F6] Under countable choice every countable subset of $\omega_1$ is bounded below $\omega_1$. [[thm-countable-subsets-of-omega-one-are-bounded]]

[F7] Under AC, Zorn's lemma supplies a maximal element when every chain in a nonempty poset has an upper bound. [[thm-zorn]]

[F8] For an arbitrary forcing preorder, distributivity of its separative quotient prevents new sequences of ground-model elements of the corresponding shorter lengths. [[thm-closure-distributivity-and-no-short-sequences]]

[F9] Under countable choice, $\operatorname{cf}(\omega_1)=\omega_1$. [[cor-countable-choice-and-omega-one-cofinality]]

[F10] A forcing extension of a transitive ground model has exactly the same ordinals as the ground model. [[thm-forcing-preserves-ordinals]]

[A1] AC supplies Zorn's lemma, the countable choices of antichains and ordinal bounds, and countable choice. [[def-axiom-of-choice]]

## Proof

1.1 Conditions $s,t\in P$ are compatible exactly when they are comparable in $T$: a common stronger condition is a common tree extension, which makes $s,t$ comparable by F5, while the deeper member of two comparable nodes is already a common forcing extension. Therefore forcing antichains are exactly tree antichains, and F4 makes $P$ ccc. The unique root supplied by normality makes $P$ nonempty. [F3, F4, F5, given]

2.1 Let $D\subseteq P$ be dense open. In the inclusion poset of antichains contained in $D$, the empty antichain is present and the union of every chain is an antichain contained in $D$; F7 gives a maximal member $A_D$. It is maximal as a forcing antichain: for any $p$, density gives $d\le_Pp$ in $D$, and if $d$ were incompatible with every member of $A_D$ it could be adjoined. By step 1.1, $A_D$ is countable. F6 therefore gives $\alpha_D<\omega_1$ above the heights of all its nodes. If $t$ has height greater than $\alpha_D$, maximality makes it compatible with some $a\in A_D$; comparability and the height inequality give $a<_Tt$, hence $t\le_Pa$, and openness puts $t$ in $D$. Thus every node above level $\alpha_D$ lies in $D$. [F2, F4, F5, F6, F7, A1, step 1.1]

3.1 Let $(D_n)_{n<\omega}$ be dense open and fix $p\in P$. Apply step 2.1 to each $D_n$, using A1 for the simultaneous maximal-antichain and bound choices. By F6 the countable set $\{\alpha_{D_n}:n<\omega\}$ has a bound $\beta<\omega_1$. Normality gives a tree extension $t>_Tp$ of height greater than $\beta$. Then $t\in D_n$ for every $n$ by step 2.1, and $t\le_Pp$. Hence $\bigcap_nD_n$ is dense; it is open because every $D_n$ is open. This is $\aleph_1$-distributivity by F1. [F1, F2, F3, F4, F6, A1, step 2.1]

4.1 By F9, $\aleph_1$ is regular in the stated ZFC setting. Apply F8 with $\kappa=\aleph_1$ to the separative quotient of $P$; the quotient has the same dense-open distributivity and is forcing equivalent to $P$. Step 3.1 therefore implies that no sequence of ground-model elements of length below $\aleph_1$ is added. By F10 every ordinal of a forcing extension is already a ground-model ordinal, and $\omega<\aleph_1$, so forcing with $P$ adds no new $\omega$-sequence of ordinals. This last assertion comes from F8 and F10, not from the definition of distributivity. [F8, F9, F10, A1, step 3.1] ∎
