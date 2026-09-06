---
id: prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup
kind: proposition
title: A faithful irreducible is induced from a proper inertia subgroup
status: draft
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, def-subrepresentation-and-irreducible-representation, def-induced-character-of-a-complex-representation, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Proposition 4.3.2
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $G$ be finite and let $A\triangleleft G$ be abelian and noncentral. Every
faithful irreducible complex representation $V$ of $G$ is induced from an
irreducible representation of a proper inertia subgroup of $G$.

## Facts & Assumptions

[F1] The cited prerequisite is [[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]].

## Proof

**Given:** $V$ is faithful and irreducible, and $\lambda$ is a linear constituent of $\operatorname{Res}_A^GV$.

1.1 Complete reducibility decomposes $V|_A$ into its linear weight spaces. The translates of the $\lambda$-weight space are the weight spaces in its $G$-orbit, and their direct sum is $V$ by irreducibility. [F1, given]

2.1 If the inertia group $G_\lambda$ were $G$, every $a\in A$ would act by a scalar on $V$; faithfulness would then make $A$ central, contrary to hypothesis. Thus $G_\lambda<G$, and the direct sum of its translates identifies $V$ with the induction of its $\lambda$-isotypical component. $\square$ [step 1.1]
