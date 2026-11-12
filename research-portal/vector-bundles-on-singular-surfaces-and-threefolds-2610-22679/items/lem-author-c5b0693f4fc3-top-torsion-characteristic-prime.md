---
id: lem-author-c5b0693f4fc3-top-torsion-characteristic-prime
kind: lemma
title: Characteristic-prime degree-five vanishing for singular affine threefolds
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - lem-author-c5b0693f4fc3-top-torsion-syntomic-bound
  - math:def-affine-scheme
  - def-article-conventions
  - math:def-ring-characteristic
  - math:thm-prime-subfield-classification
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-topweight-comparison: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-syntomic-bound: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-ring-characteristic: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-em-syntomic: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
formulation_deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - lem-author-c5b0693f4fc3-top-torsion-syntomic-bound
  - math:def-affine-scheme
  - def-article-conventions
  - math:def-ring-characteristic
  - math:thm-prime-subfield-classification
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
  - math:def-axiom-of-choice
argument_deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - lem-author-c5b0693f4fc3-top-torsion-syntomic-bound
  - math:def-affine-scheme
  - def-article-conventions
  - math:def-ring-characteristic
  - math:thm-prime-subfield-classification
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible nested-universe and site-size bounds of the supplied motivic and comparison constructions, with $\omega$ in the scheme-data universe. Universe existence is a separate size assumption.

Let $X=\operatorname{Spec}A$ be an affine finite-type threefold over an algebraically closed field $k$ of characteristic $p>0$. Here threefold means $\dim X=3$, with no smoothness, reducedness or irreducibility assumption. Then $H^{5,3}_{\rm mot}(X,\mathbb Z/p)=0$.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and retain the fixed compatible universe, site and coefficient bounds of [[def-motivic-cohomology]] and [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]]. These discharge the inherited premises when step 1.1 applies the actual motivic-to-syntomic comparison and its selected local motivic realization. The scheme extension in [F6] uses these same bounds. Step 2.1 then applies cohomology to that equivalence; it does not require an additional choice principle.

[F1] [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]] supplies the canonical EM motivic-to-syntomic equivalence in weight $3\geq\dim X$ for finite-type schemes over an algebraically closed field, including singular and nonreduced schemes.

[F2] [[lem-author-c5b0693f4fc3-top-torsion-syntomic-bound]] supplies the upper bound four for affine weight-three mod-$p$ syntomic cohomology, for every $\mathbb F_p$-algebra.

[F3] Affine schemes and their coordinate rings have the meaning of [[math:def-affine-scheme]]. The base-field, finite-type and scheme-dimension conventions are those of [[def-article-conventions]]; in particular $A$ is a finitely generated $k$-algebra and $\dim X$ is chain dimension of the underlying space.

[F4] Characteristic has the meaning of [[math:def-ring-characteristic]]. By [[math:thm-prime-subfield-classification]], $p$ is prime and the canonical map $\mathbb F_p=\mathbb Z/p\to k$, $\overline n\mapsto n\cdot1_k$, identifies $\mathbb F_p$ with the prime subfield of $k$.

[F5] [[def-motivic-cohomology]] defines $H^{5,3}_{\rm mot}(X,\mathbb Z/p)$ as $H^5(\mathbb Z(3)_{\rm mot}(X)\otimes^{\mathbf L}\mathbb Z/p)$. The functor $H^5$ on $D(\mathbb Z)$ is supplied by [[lem-author-b747b28c359f-derived-cohomology]], so an equivalence of these complexes induces an isomorphism on degree-five cohomology.

[F6] [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]] specifies the characteristic-$p$ syntomic theory and its extension from affine schemes. On $X=\operatorname{Spec}A$ its scheme value $\mathbb F_p(3)_{\rm syn}(X)$ is the affine value $\mathbb F_p(3)_{\rm syn}(A)$; no regularity assumption is required.

## Proof
**Given:** $X$ and $k$ as stated, including singular and nonreduced $X$, the Axiom of Choice, and the fixed compatible universe and site-size bounds.

**Goal:** Prove the exact mod-$p$ vanishing needed by Bockstein.

1.1 Compose the prime-subfield map $\mathbb F_p\to k$ from [F4] with the structural map $k\to A$ from [F3], making $A$ an $\mathbb F_p$-algebra. Since $\dim X=3$ and $X$ is finite type over the algebraically closed field $k$, apply [F1] in weight three. Using the affine evaluation in [F6] gives $\mathbb Z(3)_{\rm mot}(X)\otimes^{\mathbf L}\mathbb Z/p\simeq\mathbb F_p(3)_{\rm syn}(A)$. This is the comparison of the specified complexes, not an extrapolation of a degree-$\leq3$ truncated comparison. [given, A1, F1, F3, F4, F6]

2.1 Apply degree-five cohomology using [F5]. Step 1.1 identifies $H^{5,3}_{\rm mot}(X,\mathbb Z/p)$ with $H^5(\mathbb F_p(3)_{\rm syn}(A))$. By [F2] this last group is zero, since $5>4$. No K-theoretic regularity or quasisyntomic assumption enters. [A1, F2, F5, step 1.1] ∎
