---
id: prop-a-primitive-ideal-determines-a-central-character
kind: proposition
title: "A primitive ideal determines a central character"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-annihilator-ideal-of-a-lie-algebra-module, def-primitive-ideal-of-an-enveloping-algebra, def-central-character-of-a-lie-algebra-module, lem-dixmiers-lemma-for-countable-dimensional-algebras, thm-quotient-is-field-iff-ideal-maximal, def-prime-and-maximal-ideals, def-simple-module]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 7.2, printed p.38; Section 25.1, printed pp.123-124"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra and let $I$ be a
primitive ideal of $U(\mathfrak g)$, say
$I=\operatorname{Ann}_{U(\mathfrak g)}(M)$ with $M$ simple. Then
$Z(U(\mathfrak g))$ acts on $M$ by a central character
$\chi_I\colon Z(U(\mathfrak g))\to\mathbb C$, and

$$I\cap Z(U(\mathfrak g))=\ker\chi_I.$$

In particular $I\cap Z(U(\mathfrak g))$ is a maximal ideal of the commutative
algebra $Z(U(\mathfrak g))$, and
$U(\mathfrak g)\ker\chi_I\subseteq I$.

## Facts & Assumptions

**Given:** A finite-dimensional complex Lie algebra $\mathfrak g$, a simple left $U(\mathfrak g)$-module $M$, and the primitive ideal $I=\operatorname{Ann}_{U(\mathfrak g)}(M)$.

[F1] $U(\mathfrak g)$ is countable-dimensional for finite-dimensional $\mathfrak g$, so Dixmier's lemma applies: $\operatorname{End}_{U(\mathfrak g)}(M)=\mathbb C$, every central element acts on $M$ by a scalar, and these scalars form a unital $\mathbb C$-algebra homomorphism $\chi_I\colon Z(U(\mathfrak g))\to\mathbb C$ with $zm=\chi_I(z)m$ ([[lem-dixmiers-lemma-for-countable-dimensional-algebras]], [[def-central-character-of-a-lie-algebra-module]]).

[F2] A unital homomorphism $\chi\colon Z(U(\mathfrak g))\to\mathbb C$ has image $\mathbb C$, so $Z(U(\mathfrak g))/\ker\chi\cong\mathbb C$ is a field and $\ker\chi$ is a maximal ideal; maximal means maximal among proper ideals ([[thm-quotient-is-field-iff-ideal-maximal]], [[def-prime-and-maximal-ideals]]).

[F3] $I$ is a two-sided ideal equal to the kernel of the action; $M\ne0$ and $1$ acts as the identity, so $I$ is proper ([[def-annihilator-ideal-of-a-lie-algebra-module]], [[def-primitive-ideal-of-an-enveloping-algebra]], [[def-simple-module]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] there is a central character $\chi_I\colon Z(U(\mathfrak g))\to\mathbb C$ with $zm=\chi_I(z)m$ for all $z\in Z(U(\mathfrak g))$, $m\in M$. If $z\in I\cap Z(U(\mathfrak g))$, then $z$ acts on $M$ as $0$ and as the scalar $\chi_I(z)$; since $M\ne0$ this forces $\chi_I(z)=0$, so $I\cap Z(U(\mathfrak g))\subseteq\ker\chi_I$. [F1, F3, given]

1.2 Conversely, if $z\in\ker\chi_I$, then $zm=\chi_I(z)m=0$ for every $m\in M$, so $z\in\operatorname{Ann}_{U(\mathfrak g)}(M)=I$, hence $z\in I\cap Z(U(\mathfrak g))$. Thus $\ker\chi_I\subseteq I\cap Z(U(\mathfrak g))$. [F1, F3, given]

2.1 Steps 1.1 and 1.2 give $I\cap Z(U(\mathfrak g))=\ker\chi_I$, which is a maximal ideal of $Z(U(\mathfrak g))$ by [F2] because $\chi_I$ is a unital homomorphism onto $\mathbb C$. [step 1.1, step 1.2, F2]

3.1 Every $z\in\ker\chi_I$ lies in the two-sided ideal $I$, so every product $uz$ with $u\in U(\mathfrak g)$ lies in $I$; as these products generate the two-sided ideal $U(\mathfrak g)\ker\chi_I$, one has $U(\mathfrak g)\ker\chi_I\subseteq I$. [step 2.1, F3, algebra] ∎ 