---
id: lem-divisible-quotient-torsion-free
kind: lemma
title: Quotient by a divisible subgroup
status: published
domain: mathematics
deps:
  - math:def-divisible-module-over-an-integral-domain
  - math:def-annihilator-and-torsion-of-a-module
  - math:def-exact-and-short-exact-sequences-of-modules
  - math:def-group
  - math:prop-abelian-groups-are-z-modules
dependency_roles:
  math:def-divisible-module-over-an-integral-domain: mathematical-premise
  math:def-annihilator-and-torsion-of-a-module: mathematical-premise
  math:def-exact-and-short-exact-sequences-of-modules: mathematical-premise
  math:def-group: mathematical-premise
  math:prop-abelian-groups-are-z-modules: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 13, final group-theoretic paragraph in the proof of Proposition
        6.1
      statement: In a short exact sequence of abelian groups 0 -> D -> G -> A -> 0,
        divisibility of D and torsion-freeness of G imply torsion-freeness of A.
      hypotheses: D, G and A are abelian groups; i and pi are group homomorphisms; i
        is injective, pi is surjective and im(i)=ker(pi); D is divisible and G
        is torsion-free.
      reading_limits: Inspected the final group-theoretic paragraph of Proposition 6.1
        on PDF page 13 using the supplied PDF text extraction. It states this
        exact-sequence observation and gives the lifting-and-subtraction
        argument. The geometry and motivic-cohomology arguments preceding that
        paragraph were not independently checked for this lemma. The local proof
        remains ai-generated; this citation records the source of the statement,
        not an external proof substitution.
dependency_level: 0
---

## Statement

Let $0\to D\xrightarrow{i}G\xrightarrow{\pi}A\to0$ be a short exact sequence of abelian groups. If $D$ is divisible and $G$ is torsion-free, then $A$ is torsion-free.

Here divisible means that, for every positive integer $n$ and every $d\in D$, there is an $e\in D$ with $ne=d$. Torsion-free means that $nx=0$ for a positive integer $n$ implies $x=0$. Short exactness means that $i$ is injective, $\pi$ is surjective, and $\operatorname{im}i=\ker\pi$. These are the stated module definitions applied over $\mathbb Z$; positive integers suffice because multiplication by a negative integer differs only by negation.

## Statement references

[[math:def-group]]

[[math:prop-abelian-groups-are-z-modules]]

[[math:def-divisible-module-over-an-integral-domain]]

[[math:def-annihilator-and-torsion-of-a-module]]

[[math:def-exact-and-short-exact-sequences-of-modules]]

## Facts & Assumptions

**Given:** A short exact sequence $0\to D\xrightarrow{i}G\xrightarrow{\pi}A\to0$ of abelian groups, with $D$ divisible and $G$ torsion-free.

**Goal:** Prove that $A$ is torsion-free.

[F1] Short exactness gives surjectivity of $\pi$ and $\ker\pi=\operatorname{im}i$ ([[math:def-exact-and-short-exact-sequences-of-modules]]).

[F2] Divisibility of $D$ means that multiplication by each positive integer is surjective on $D$ ([[math:def-divisible-module-over-an-integral-domain]]).

[F3] Since $G$ is torsion-free, an element of $G$ killed by a positive integer is zero; the same criterion characterizes torsion-freeness of $A$ ([[math:def-annihilator-and-torsion-of-a-module]]).

[F4] We use additive notation for abelian groups, with identity $0$ and inverse $-x$ ([[math:def-group]]). Every abelian group has its canonical $\mathbb Z$-module structure and every group homomorphism between abelian groups is $\mathbb Z$-linear ([[math:prop-abelian-groups-are-z-modules]]). Thus integer multiplication distributes over sums and differences, and both $i$ and $\pi$ commute with it; homomorphisms also preserve $0$.

## Proof

**Proof technique:** direct lifting and subtraction.

1.1 Let $a\in A$ and let $n$ be a positive integer such that $na=0$. By surjectivity choose $g\in G$ with $\pi(g)=a$. Then $\pi(ng)=n\pi(g)=0$, so exactness gives $ng=i(d)$ for some $d\in D$. [given, F1, F4, choose]

2.1 By divisibility choose $e\in D$ with $ne=d$. As $i$ is a homomorphism, $n(g-i(e))=ng-i(ne)=i(d)-i(d)=0$. Torsion-freeness of $G$ therefore gives $g=i(e)$. Consequently $a=\pi(g)=\pi(i(e))=0$. Since $a$ and $n$ were arbitrary, $A$ is torsion-free. [F1, F2, F3, F4, step 1.1, choose] ∎
