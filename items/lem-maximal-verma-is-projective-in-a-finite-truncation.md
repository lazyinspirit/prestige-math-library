---
id: lem-maximal-verma-is-projective-in-a-finite-truncation
kind: lemma
title: "A maximal-label Verma is projective in its truncation"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-projective-object
  - def-truncated-category-o-at-a-finite-weight-ideal
  - def-verma-module
  - lem-maximal-label-vectors-in-a-finite-truncation-are-singular
  - thm-projective-object-characterisations
  - thm-universal-property-of-verma-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-7.md; immutable carrier: research/frontier-38-owner-30-step5-hash-7-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-7 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.4 and its proof"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.3, Proposition 16.4 with proof (Hom(M_lambda, X) = X[lambda] and singularity of lambda-weight vectors), printed pp. 86-87 (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Section 4"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "§4, Lemma 4.10 and the proof of Theorem 4.3, printed pp. 7-8 (maximal-label projectivity; full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Gamma$ be a
finite downward-closed ideal of a linkage class $C$
([[def-truncated-category-o-at-a-finite-weight-ideal]]) and let
$\lambda\in\Gamma$ be maximal in $\Gamma$. Then $\Delta(\lambda)=M(\lambda)$
is a projective object of the truncation $\mathcal O_\Gamma$
([[def-projective-object]]).

More precisely, for every $X\in\mathcal O_\Gamma$ evaluation at the
highest-weight generator $v_\lambda$ is a natural isomorphism
$\operatorname{Hom}_{\mathcal O_\Gamma}(M(\lambda),X)\to
X^{\mathfrak n^+}_\lambda=X_\lambda$, and $X\mapsto X_\lambda$ is exact, so
$\operatorname{Hom}_{\mathcal O_\Gamma}(M(\lambda),-)$ is exact.

Under the fixed positive-Borel convention the essential hypothesis is
maximality of $\lambda$ in the finite ideal $\Gamma$: maximality, not any
antidominance or sufficient-positivity condition, is what makes every
$\lambda$-weight vector singular. For a weight $\lambda$ that is not maximal
in $\Gamma$, $\Delta(\lambda)$ need not be projective in $\mathcal O_\Gamma$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite downward-closed ideal $\Gamma$ of a linkage class, a maximal element $\lambda\in\Gamma$, and an object $X\in\mathcal O_\Gamma$.

[F1] For every $X\in\mathcal O_\Gamma$, every vector of weight $\lambda$ is annihilated by $\mathfrak n^+$, so $X^{\mathfrak n^+}_\lambda=X_\lambda$, and the weight functor $X\mapsto X_\lambda$ is exact on $\mathcal O_\Gamma$ ([[lem-maximal-label-vectors-in-a-finite-truncation-are-singular]]).

[F2] Sending a homomorphism $M(\lambda)\to V$ to the image of $v_\lambda$ is a natural bijection onto the $\mathfrak n^+$-fixed vectors of weight $\lambda$ in any $\mathfrak g$-module $V$ ([[thm-universal-property-of-verma-modules]], [[def-verma-module]]).

[F3] An object $P$ of an abelian category is projective exactly when the functor $\operatorname{Hom}(P,-)$ is exact ([[def-projective-object]], [[thm-projective-object-characterisations]]).

## Proof

**Proof technique:** direct: identify the Hom functor with an exact weight functor through the universal property.

1.1 For $X\in\mathcal O_\Gamma$ the universal property [F2] identifies $\operatorname{Hom}_{\mathcal O_\Gamma}(M(\lambda),X)$ with the space of $\mathfrak n^+$-fixed vectors of weight $\lambda$ in $X$, naturally in $X$; by [F1] this space is $X^{\mathfrak n^+}_\lambda=X_\lambda$. [F1, F2, given]

1.2 The functor $X\mapsto X_\lambda$ is exact on $\mathcal O_\Gamma$ by [F1]. [F1, given]

2.1 Combining steps 1.1 and 1.2, $\operatorname{Hom}_{\mathcal O_\Gamma}(M(\lambda),-)$ is naturally isomorphic to the exact functor $X\mapsto X_\lambda$, hence is exact; by the characterisation [F3] the Verma module $M(\lambda)$ is a projective object of $\mathcal O_\Gamma$. [F3, step 1.1, step 1.2] ∎
