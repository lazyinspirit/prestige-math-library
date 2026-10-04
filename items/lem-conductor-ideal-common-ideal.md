---
id: lem-conductor-ideal-common-ideal
kind: lemma
title: The conductor is an ideal of both rings
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-axiom-of-choice, thm-noetherian-ring-has-finitely-many-minimal-primes, thm-nilradical-of-a-noetherian-ring-is-nilpotent, lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite, def-conductor-normalization, def-integral-closure-and-integrally-closed-domain, def-annihilator-and-torsion-of-a-module, thm-normalization-finite-birational-surjective, def-normalization-affine-variety, cor-affine-normalization-is-finite]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §b: the conductor of the normalization as an ideal of both rings"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $A\subseteq B$ be an inclusion of domains with $B$ the normalization of $A$
in a common fraction field. The conductor
$\mathfrak c=\operatorname{Ann}_A(B/A)=\{a\in A:aB\subseteq A\}$ is an ideal of
$A$ and also an ideal of $B$: for $a\in\mathfrak c$ and $b\in B$ one has
$ab\in\mathfrak c$. Consequently $\mathfrak c=\mathfrak c B$ generates the same
ideal in $B$, and in the geometric setting, where $A$ is a finite-type domain
over a field and $B$ is a finite $A$-module, the quotient $B/\mathfrak c$ is a
finite $A/\mathfrak c$-module supported on the non-normal locus; when that
locus is finite (in particular for one-dimensional finite-type domains) $B/\mathfrak c$ is a finite
$k$-vector space.

## Facts & Assumptions

**Given:** AC, the domains $A\subseteq B$ with $B$ the normalization of $A$ in their common fraction field, the conductor $\mathfrak c=\operatorname{Ann}_A(B/A)=\{a\in A:aB\subseteq A\}$, elements $a,a'\in\mathfrak c$ and $b\in B$.

[F1] $\mathfrak c$ is defined as the annihilator of the $A$-module $B/A$, so it is an ideal of $A$; moreover $a\in\mathfrak c$ implies $a=a\cdot1\in A$ because $1\in B$ ([[def-annihilator-and-torsion-of-a-module]], [[def-conductor-normalization]]).

[F2] In the geometric setting $B$ is a finite $A$-module and $A$ is a finite-type domain over $k$ ([[cor-affine-normalization-is-finite]], [[def-normalization-affine-variety]], [[thm-normalization-finite-birational-surjective]], [[def-integral-closure-and-integrally-closed-domain]]).

[F3] Noetherian rings have finitely many minimal primes and nilpotent nilradical; maximal residue fields of finite-type algebras are finite over the base field ([[thm-noetherian-ring-has-finitely-many-minimal-primes]], [[thm-nilradical-of-a-noetherian-ring-is-nilpotent]], [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]). AC is assumed for the localization and classical normalization interfaces ([[def-axiom-of-choice]]).

## Proof

1.1 Let $a\in\mathfrak c$ and $b\in B$. Then $ab\in aB\subseteq A$ by definition of $\mathfrak c$, and $(ab)B=a(bB)\subseteq aB\subseteq A$ because $bB\subseteq B$. Hence $ab\in\mathfrak c$. Together with additivity of $\mathfrak c$ and $a+a'\in\mathfrak c$, this says that $\mathfrak c$ is closed under multiplication by elements of $B$. [F1, given]

2.1 Consequently $\mathfrak c$ is an ideal of the ring $B$: it is an additive subgroup of $A\subseteq B$ [F1] and stable under multiplication by $B$ and by $A$ by step 1.1. Hence $\mathfrak c B=\mathfrak c$: the inclusion $\mathfrak c\subseteq\mathfrak c B$ is clear and $\mathfrak c B\subseteq\mathfrak c$ is exactly the stability just proved, so the conductor generates the same ideal in $B$ as in $A$. [F1, step 1.1]

3.1 In the geometric setting of [F2], $B/\mathfrak c$ is a quotient of the finite $A$-module $B$, hence a finite $A$-module, and it is annihilated by $\mathfrak c$, so it is a finite $A/\mathfrak c$-module; its support is contained in $V(\mathfrak c)$, the non-normal locus of [[def-conductor-normalization]]. For a finite normalization in the common fraction field, a product of the nonzero denominators of finitely many module generators gives $0\ne d\in\mathfrak c$. In dimension one every prime containing $d$ is maximal, and there are finitely many such primes, since they are the minimal primes over $(d)$ in a Noetherian ring. Thus $V(\mathfrak c)$ is finite for curves. More generally if it is finite, $A/\mathfrak c$ is a zero-dimensional finite-type $k$-algebra and hence finite-dimensional over $k$: its finitely many prime quotients are finite field extensions, and the filtration by powers of its nilpotent nilradical has finite modules over their product. Consequently its finite module $B/\mathfrak c$ is finite-dimensional as well. [F2, F3, step 2.1] ∎
