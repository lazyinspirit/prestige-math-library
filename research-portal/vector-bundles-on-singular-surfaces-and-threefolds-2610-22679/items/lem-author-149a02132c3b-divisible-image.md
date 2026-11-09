---
id: lem-author-149a02132c3b-divisible-image
kind: lemma
title: Divisibility survives the quotient and the support image
status: published
domain: mathematics
deps:
  - lem-author-149a02132c3b-normalization-surjection
  - def-cohomology-with-support
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-149a02132c3b-normalization-surjection: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 18
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be an arbitrary algebraically closed field, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, put $U=X_{\mathrm{smooth}}$, and let $T\subset X$ be a closed integral curve contained in $U$. The group $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)$ is divisible, and its image under the actual support-to-global map into $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is divisible. No injectivity of that map is required.

## Facts & Assumptions
**Given:** The algebraically closed field $k$, affine finite-type threefold $X$, smooth locus $U$, closed integral curve $T\subset U$, Axiom of Choice, and fixed site and universe bounds in the statement.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [[lem-author-149a02132c3b-normalization-surjection]] supplies an actual surjection from a divisible group onto the supported group under exactly the stated geometry, field, Choice and size hypotheses. This includes the zero case on a lower-dimensional smooth stratum. Choice is inherited from its normalization and Picard constructions; [[math:def-axiom-of-choice]] records that premise.

[F2] [[def-cohomology-with-support]] gives the actual support-to-global homomorphism under the stated Choice and size conventions.

## Proof
1.1 For any surjection $q:D\to A$ with D divisible, fix $a\in A$ and positive n. Choose $d\in D$ with $q(d)=a$, then $e\in D$ with $ne=d$. Thus $nq(e)=a$. Negative integers are handled by negation. Apply this to the actual surjection in the preceding lemma (or to its zero case). This proves divisibility of the supported group. [F1, construct]

2.1 Let $s:A\to G$ be the support-to-global homomorphism fixed by the completed support definition. For $s(a)$ and positive n, choose b in A with $nb=a$ from step 1.1. Then $ns(b)=s(a)$, so every element of the image has an n-th root in that same image. Again handle negative n by negation. This proves the asserted image divisibility without identifying the support group with its image. [F1, F2, step 1.1] ∎
