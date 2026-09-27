---
id: prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup
kind: proposition
title: A faithful irreducible is induced from a proper inertia subgroup
status: published
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, def-subrepresentation-and-irreducible-representation, def-induced-character-of-a-complex-representation, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Proposition 4.3.2
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $G$ be finite and let $A\triangleleft G$ be abelian and noncentral. Every
faithful irreducible complex representation $V$ of $G$ is induced from an
irreducible representation of a proper inertia subgroup of $G$.

## Facts & Assumptions

[F1] The cited prerequisite is [[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]].

[F2] Irreducible representations of a finite abelian group over a splitting field are one-dimensional ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]); the algebraically closed field $\mathbb C$ is a splitting field for $A$.

## Proof

**Given:** $V$ is faithful and irreducible, and $\lambda$ is a linear constituent of $\operatorname{Res}_A^GV$.

1.1 Complete reducibility [F1] decomposes $V|_A$ into irreducible summands, and [F2] makes every such summand one-dimensional. Thus $V|_A$ is the direct sum of its linear weight spaces. The translates of the $\lambda$-weight space are the weight spaces in its $G$-orbit, and their direct sum is $V$ by irreducibility. [F1, F2, given]

2.1 If the inertia group $G_\lambda$ were $G$, every $a\in A$ would act by a scalar on $V$. Its commutator with every $g\in G$ would then act trivially, so faithfulness would make $A$ central, contrary to hypothesis. Thus $G_\lambda<G$. [step 1.1, given]

3.1 Put $W=V_\lambda$. Distinct left cosets of $G_\lambda$ carry $W$ to distinct $A$-weight spaces, whose direct sum is $V$ by step 1.1; the usual transversal model therefore identifies $\operatorname{Ind}_{G_\lambda}^G W$ with $V$. If $0\ne U\subseteq W$ is a $G_\lambda$-submodule, the direct sum of its translates over the left cosets is a nonzero $G$-submodule of $V$. Irreducibility makes this sum all of $V$, and its intersection with $W$ is $U$, so $U=W$. Hence the inducing representation $W$ is irreducible, completing the claim. [step 1.1, step 2.1, given] ∎
