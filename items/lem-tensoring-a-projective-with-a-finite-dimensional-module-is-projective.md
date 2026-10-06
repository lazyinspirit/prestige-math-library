---
id: lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective
kind: lemma
title: "Finite-dimensional tensoring preserves projectives in category O"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-injective-object
  - def-projective-object
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - prop-tensoring-with-a-finite-dimensional-module-preserves-category-o
  - thm-projective-object-characterisations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-7.md"
      - "research/frontier-38-owner-30-alpha-batch-7-5a.md"
      - "research/frontier-38-owner-30-step5-hash-7-post.json"
    reviewed_raw_sha256: "10133a1541ac05ffedc34a28acdb255731d88873d4fa3cf4e7397bbb41144608"
    content_sha256: "fb3787cb2a1b7bab7cfd168abfa297321c0aae1ed0fe3db89779769fead61895"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Corollary 16.5 and its proof"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.3, Corollary 16.5(i) with proof (tensor-Hom adjunction), printed p. 87 (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Lemma 3.3"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Lemma 3.3 and proof (adjunction of T_V and T_{V*}), printed p. 4 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $P$ be a projective
object of $\mathcal O$ ([[def-projective-object]]) and let $E$ be a
finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]). Then
$E\otimes P$ belongs to $\mathcal O$ and is projective in $\mathcal O$.

The same tensor adjunction shows that if $I$ is injective in $\mathcal O$,
then $E\otimes I$ is injective.

## Facts & Assumptions

**Given:** The Axiom of Choice, a projective $P\in\mathcal O$, an injective $I\in\mathcal O$, and a finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module $E$.

[F1] For finite-dimensional $\mathfrak h$-semisimple $E$, the functor $M\mapsto E\otimes M$ with diagonal action is exact and maps $\mathcal O$ into itself; its linear dual $E^*$ is again finite-dimensional $\mathfrak h$-semisimple, and evaluation and coevaluation give the tensor-Hom adjunction, natural in the $\mathfrak g$-modules $M$ and $X$ ([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[F2] An object $P$ is projective exactly when $\operatorname{Hom}_{\mathcal O}(P,-)$ is exact, equivalently when $\operatorname{Hom}(P,E)\to\operatorname{Hom}(P,M)$ is surjective for every epimorphism $E\twoheadrightarrow M$ ([[def-projective-object]], [[thm-projective-object-characterisations]]).

[F3] Injectivity means that $\operatorname{Hom}(-,I)$ sends monomorphisms to surjections, equivalently is exact; this follows from the extension property and left exactness of contravariant Hom ([[def-injective-object]]).

## Proof

**Proof technique:** direct, through the tensor-Hom adjunction and exactness of tensoring with a finite-dimensional module.

1.1 For every $X\in\mathcal O$ the tensor-Hom adjunction of [F1] gives a natural isomorphism $\operatorname{Hom}_{\mathcal O}(E\otimes P,X)\cong\operatorname{Hom}_{\mathcal O}(P,E^*\otimes X)$, and $E^*$ is finite-dimensional $\mathfrak h$-semisimple with $E^*\otimes-$ an exact endofunctor of $\mathcal O$. [F1, given]

1.2 If $I$ is injective, evaluation and coevaluation for the ordinary contragredient dual $E^*$ give $\operatorname{Hom}_{\mathcal O}(X,E\otimes I)\cong\operatorname{Hom}_{\mathcal O}(E^*\otimes X,I)$, naturally in $X$. Since $E^*\otimes-$ is exact by [F1] and $\operatorname{Hom}(-,I)$ is exact by [F3], their composite is exact. Thus $E\otimes I$ is injective. [F1, F3, algebra]

2.1 Since $E\otimes P\in\mathcal O$ by [F1], the functor $\operatorname{Hom}_{\mathcal O}(E\otimes P,-)$ is naturally isomorphic to the composite of the exact functor $X\mapsto E^*\otimes X$ and the exact functor $\operatorname{Hom}_{\mathcal O}(P,-)$ of [F2]; composites of exact functors are exact, so $\operatorname{Hom}_{\mathcal O}(E\otimes P,-)$ is exact and [F2] makes $E\otimes P$ projective in $\mathcal O$. [F1, F2, step 1.1]

3.1 Steps 2.1 and 1.2 prove that finite-dimensional tensoring preserves both projectives and injectives in $\mathcal O$. [step 2.1, step 1.2] ∎
