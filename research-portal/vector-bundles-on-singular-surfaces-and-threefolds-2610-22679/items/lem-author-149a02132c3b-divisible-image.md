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
  - math:def-group
  - math:def-group-homomorphism
  - math:def-divisible-module-over-an-integral-domain
dependency_roles:
  lem-author-149a02132c3b-normalization-surjection: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-divisible-module-over-an-integral-domain: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 19
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be an arbitrary algebraically closed field, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, put $U=X_{\mathrm{smooth}}$, and let $T\subset X$ be a closed integral curve contained in $U$. The group $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)$ is divisible, and its image under the actual support-to-global map into $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is divisible. No injectivity of that map is required.

## Facts & Assumptions
**Given:** The algebraically closed field $k$, affine finite-type threefold $X$, smooth locus $U$, closed integral curve $T\subset U$, Axiom of Choice, and fixed site and universe bounds in the statement.

**Goal:** Prove divisibility of the supported group and of its image under the supplied support-to-global homomorphism.

[F1] [[lem-author-149a02132c3b-normalization-surjection]] supplies an actual surjective group homomorphism from a divisible abelian group onto the supported group under exactly the stated geometry, field, Choice and size hypotheses. This includes the zero case on a lower-dimensional smooth stratum. Choice is inherited from its normalization and Picard constructions; [[math:def-axiom-of-choice]] records that premise.

[F2] [[def-cohomology-with-support]] gives the actual support-to-global homomorphism under the stated Choice and size conventions.

[F3] We use abelian groups in additive notation, as defined in [[math:def-group]]. A group homomorphism preserves addition, as in [[math:def-group-homomorphism]]. For a positive integer $n$, $na$ denotes the sum of $n$ copies of $a$; set $0a=0$ and $(-n)a=-(na)$. By [[math:def-divisible-module-over-an-integral-domain]], in its explicit abelian-group specialization, an abelian group $B$ is divisible if for every nonzero integer $n$ and every $b\in B$ there is $c\in B$ with $nc=b$. The local root arguments use only finitely many existential witnesses for a fixed element and integer; they add no Choice assumption beyond the inherited one in [F1] and [F2].

## Proof
1.1 Let $q:D\to A$ be a surjective group homomorphism of abelian groups with $D$ divisible. Fix $a\in A$ and an integer $n>0$. Choose $d\in D$ with $q(d)=a$, then $e\in D$ with $ne=d$. Repeated additivity gives $nq(e)=q(ne)=q(d)=a$. For the integer $-n$, the element $-q(e)$ is a root of $a$, since $(-n)(-q(e))=nq(e)=a$. Thus $A$ is divisible by [F3]. Apply this to the actual surjective group homomorphism in [F1], including its zero-target case, with $A=H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)$. This proves divisibility of the supported group. [F1, F3, construct]

2.1 Put $G=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ and let $s:A\to G$ be the actual support-to-global homomorphism from [F2]. Its image is $I=\{s(a):a\in A\}\subseteq G$, with the operation restricted from $G$. Additivity gives $s(0)=s(0)+s(0)$, hence $s(0)=0$, and $s(a)+s(-a)=s(0)=0$, hence $s(-a)=-s(a)$. Thus $0\in I$ and $s(a)-s(a')=s(a-a')\in I$, so $I$ is an abelian subgroup. For any $s(a)\in I$ and positive integer $n$, step 1.1 supplies $b\in A$ with $nb=a$. Repeated additivity gives $ns(b)=s(nb)=s(a)$, with $s(b)\in I$. For $-n$, use $-s(b)\in I$ instead. By [F3], $I$ is divisible. No injectivity of $s$ is used. [F2, F3, step 1.1] ∎
