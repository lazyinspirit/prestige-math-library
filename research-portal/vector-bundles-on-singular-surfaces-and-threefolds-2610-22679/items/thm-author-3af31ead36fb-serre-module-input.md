---
id: thm-author-3af31ead36fb-serre-module-input
kind: theorem
title: Serre free-summand theorem for modules
status: published
domain: mathematics
external_input: true
deps:
  - math:def-commutative-ring
  - math:def-left-and-right-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-prime-and-maximal-ideals
  - math:cor-maximal-ideals-are-prime
  - math:def-prime-spectrum-and-vanishing-sets
  - math:lem-zariski-closed-set-axioms
  - math:def-subspace-topology-top
  - math:def-noetherian-topological-space
  - math:def-irreducible-topological-space-and-subset
  - math:def-finitely-presented-module-and-algebra
  - math:def-localisation-at-a-prime-ideal
  - math:def-localisation-of-a-module
  - math:def-free-module-on-a-set-and-standard-basis
  - math:def-direct-sum-of-a-family-of-modules
dependency_roles:
  math:def-commutative-ring: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:cor-maximal-ideals-are-prime: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:lem-zariski-closed-set-axioms: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-noetherian-topological-space: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-finitely-presented-module-and-algebra: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:def-free-module-on-a-set-and-standard-basis: mathematical-premise
  math:def-direct-sum-of-a-family-of-modules: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Section 15.129: Splitting off a
        free module"
      url: https://stacks.math.columbia.edu/tag/0GVC
      locator: Theorem 15.129.5 (tag 0GVC), theorem statement and complete displayed
        proof
      statement: If the maximal spectrum of a ring is noetherian of finite dimension e
        and a finitely presented module has, at every maximal ideal, a free
        localized direct summand of rank greater than e, then the module is
        isomorphic to the ring plus a complementary module.
      hypotheses: Noetherian finite-dimensional maximal spectrum; finite presentation;
        the stated localized free-summand rank bound at every maximal ideal.
      reading_limits: Read the theorem statement and complete displayed proof at tag
        0GVC for this repair. The source proof cites Algebra Lemmas 10.9.9,
        10.127.6, 10.82.11 and 10.82.4, Lemma 15.129.2 and Proposition 15.129.4;
        those linked statements and proofs were not inspected or reconstructed
        in this repair. The original Serre paper was not read.
dependency_level: 0
---

## Statement
Let $A$ be a commutative unital ring whose maximal spectrum $\Omega$, with its subspace topology, is noetherian of finite dimension $e$. Let $M$ be a finitely presented $A$-module. Suppose that for every maximal ideal $\mathfrak m$, the localization $M_{\mathfrak m}$ has a free direct summand of rank greater than $e$. Then $M\cong A\oplus M'$ for some $A$-module $M'$. The dimension of a topological space is the supremum of the lengths of strict chains of irreducible closed subsets.

Here $\Omega=\{\mathfrak m\subset A:\mathfrak m\text{ is a maximal ideal}\}\subseteq\operatorname{Spec}(A)$; maximal ideals are prime. The ambient spectrum has the Zariski topology, whose closed sets are $V(I)=\{\mathfrak p\in\operatorname{Spec}(A):I\subseteq\mathfrak p\}$ for ideals $I\subseteq A$, and $\Omega$ has the subspace topology. An irreducible closed subset is nonempty; a chain $Z_0\subsetneq\cdots\subsetneq Z_q$ has length $q$.

All modules are unital left modules, and all module isomorphisms are linear over the indicated base ring. For $S=A\setminus\mathfrak m$ write $A_{\mathfrak m}=S^{-1}A$ and $M_{\mathfrak m}=S^{-1}M$. Having a free direct summand of rank $n$ over a ring $R$ means admitting an $R$-module decomposition $R^{\oplus n}\oplus N$, where $R^{\oplus n}$ is the direct sum of $n$ copies of $R$ and $n$ is a nonnegative integer. Thus the local hypothesis means that for each maximal ideal there exist an integer $n>e$ and an $A_{\mathfrak m}$-module $N$ with $M_{\mathfrak m}\cong A_{\mathfrak m}^{\oplus n}\oplus N$.

## Statement references

[[math:def-commutative-ring]]

[[math:def-left-and-right-modules]]

[[math:def-module-homomorphism-kernel-image-and-cokernel]]

[[math:def-prime-and-maximal-ideals]]

[[math:cor-maximal-ideals-are-prime]]

[[math:def-prime-spectrum-and-vanishing-sets]]

[[math:lem-zariski-closed-set-axioms]]

[[math:def-subspace-topology-top]]

[[math:def-noetherian-topological-space]]

[[math:def-irreducible-topological-space-and-subset]]

[[math:def-finitely-presented-module-and-algebra]]

[[math:def-localisation-at-a-prime-ideal]]

[[math:def-localisation-of-a-module]]

[[math:def-free-module-on-a-set-and-standard-basis]]

[[math:def-direct-sum-of-a-family-of-modules]]

## External input
This is Theorem 15.129.5 of the cited Stacks Project section. It is imported as an established result; its underlying dimension-avoidance argument is not reconstructed in this item.

## Facts & Assumptions

**Given:** A ring $A$, maximal spectrum $\Omega$, integer $e$, and module $M$ satisfying the hypotheses in the statement.

**Goal:** Obtain a free rank-one direct summand of $M$.

[F1] The cited external theorem asserts exactly this conclusion under the displayed hypotheses.

## Proof

1.1 The given noetherianity, finite dimension, finite presentation, and local free-summand bounds are precisely the hypotheses of the imported theorem. [F1, given]

2.1 Applying that theorem yields an $A$-module $M'$ and an isomorphism $M\cong A\oplus M'$. This is an application of the external input, not a local reconstruction of its proof. [F1, step 1.1] ∎
