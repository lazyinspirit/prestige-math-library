---
id: lem-gts-fully-faithful-split-generator-implies-equivalence
kind: lemma
title: Fully faithful functor with thickly generating image is an equivalence
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
axiom_use: ZF + AC in the ambient set universe for the chosen category presentations
dependency_level: 0
deps:
  - def-triangulated-category
  - def-axiom-of-choice
dependency_roles:
  def-triangulated-category: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Paul Seidel, Homological mirror symmetry for the quartic surface, arXiv:math/0310414v4"
      url: "https://arxiv.org/pdf/math/0310414v4"
      locator: "§2b, printed pp. 8–9 (PDF 12–13), Lemmas 2.4–2.6 and proofs, especially Lemma 2.5. This is the split-closed derived A-infinity-category instance of the thick essential-image argument. The ambient-choice and abstract triangulated-category formulation is proved locally."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Assume AC in the ambient set universe used for the category presentations. Let $\mathcal A$ and $\mathcal B$ be triangulated categories presented there by sets of objects and morphisms, with $\mathcal A$ idempotent-complete (every idempotent endomorphism splits). Let $F:\mathcal A\to\mathcal B$ be an exact fully faithful functor. If the smallest full triangulated subcategory of $\mathcal B$ that contains every object isomorphic to some $F(a)$ and is closed under direct summands is all of $\mathcal B$, then $F$ is an equivalence.

Without set-size or choice hypotheses, the same thick-image argument still proves that an exact fully faithful functor with the stated idempotent-complete source and thickly generating image is essentially surjective. For definable class presentations, if an objectwise definable class section $(G(b),u_b:F(G(b))\xrightarrow{\sim}b)$ is supplied explicitly, the same Hom-lifting formula gives a class quasi-inverse; no class-choice axiom is inferred.

Here an exact functor preserves the translation and distinguished triangles; fully faithful means bijective on every morphism set; and the stated smallest subcategory is the thick closure of the essential image.

## Statement references

[Paul Seidel, Homological mirror symmetry for the quartic surface, arXiv:math/0310414v4](https://arxiv.org/pdf/math/0310414v4), §2b, pp. 8–9, especially Lemma 2.5 and its proof. That lemma gives the split-closed derived-category instance; the present abstract triangulated-category formulation uses the same essential-image closure argument, proved locally below.

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The triangulated structures, exactness and ambient set presentations are as stated; use AC in that ambient set universe.

[F1] A triangulated category consists of a category, a translation, and a specified class of distinguished triangles ([[def-triangulated-category]]).

[F2] The Axiom of Choice supplies a simultaneous choice from a set-indexed family of nonempty sets ([[def-axiom-of-choice]]). It is used only for the objectwise witnesses in step 3.1, not as a proper-class choice principle.

## Proof

1.1 Let $\operatorname{Im}(F)$ be the full subcategory of objects isomorphic to some $F(a)$. Exactness makes it closed under translations. For a morphism between two such objects, full faithfulness lifts the morphism to $\mathcal A$; exactness sends a cone triangle for that lift to a distinguished triangle in $\mathcal B$. The cone is therefore again in $\operatorname{Im}(F)$. Thus the image is triangulated. [given, F1, def. triangulated subcategory]

2.1 Suppose $b$ is a direct summand of $F(a)$, with inclusion $i:b\to F(a)$ and retraction $r:F(a)\to b$, so $e=ir$ is idempotent. Fullness gives $e=F(e_a)$ for some endomorphism $e_a$ of $a$, and faithfulness gives $e_a^2=e_a$. Idempotent completeness of $\mathcal A$ splits $e_a$; applying $F$ exhibits $b$ as isomorphic to the image of that splitting. Hence $\operatorname{Im}(F)$ is closed under direct summands. [given, step 1.1, algebra]

3.1 The image is therefore thick. By the assumed thick-generation condition it is all of $\mathcal B$ up to isomorphism, so $F$ is essentially surjective. For every $b\in\operatorname{Ob}(\mathcal B)$ the set $W_b=\{(a,u):a\in\operatorname{Ob}(\mathcal A),\ u:F(a)\xrightarrow{\sim}b\}$ is nonempty; it is a set because the chosen object and morphism collections are sets. By [F2] choose $(G(b),u_b)\in W_b$ simultaneously. For $f:b\to b'$, let $G(f)$ be the unique morphism with $F(G(f))=u_{b'}^{-1}fu_b$. The Hom bijections prove $G(1)=1$ and $G(gf)=G(g)G(f)$. The $u_b$ give a natural isomorphism $FG\Rightarrow1_{\mathcal B}$. Full faithfulness uniquely lifts $u_{F(a)}^{-1}:F(a)\to FGF(a)$ to an isomorphism $\eta_a:a\to GF(a)$; its naturality follows by applying the faithful $F$ to the required square and using the naturality of $u$. Thus $1_{\mathcal A}\Rightarrow GF$ is also a natural isomorphism, and $G$ is a quasi-inverse. The essential-surjectivity part of this step and the closure arguments of steps 1.1–2.1 use no choice or object-set bound. If the displayed objectwise lifts are instead supplied as definable class data, the unique Hom lifts define a class functor by the same formulas and the same naturality verification. This constructs both asserted variants and invokes no global class choice. [given, F2, step 2.1, construct, algebra] ∎

## Definition references

[[def-triangulated-category]]

