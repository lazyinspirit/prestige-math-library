---
id: cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character
kind: corollary
title: "Primitive ideals are partitioned by their dot-orbit central character"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [prop-a-primitive-ideal-determines-a-central-character, lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight, cor-central-characters-are-dot-weyl-orbits, def-axiom-of-choice, def-central-character-of-a-lie-algebra-module, def-primitive-ideal-of-an-enveloping-algebra]
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
      locator: "Section 14.1-14.2, printed pp.76-77; Section 25.1, printed pp.123-124"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a fixed positive
system. If $I$ is a primitive ideal of $U(\mathfrak g)$, then
$I\cap Z(U(\mathfrak g))=\ker\chi_I$ for a unique central character $\chi_I$,
and there is a unique dot-Weyl orbit $W\cdot\lambda\subseteq\mathfrak h^*$ with
$\chi_I=\chi_\lambda$; this orbit is determined by $I$ alone. Consequently, for
primitive ideals $I,J$: $I\cap Z=J\cap Z$ if and only if $\chi_I=\chi_J$, if and
only if $W\cdot\lambda=W\cdot\mu$ for any $\lambda,\mu$ with
$\chi_\lambda=\chi_I$ and $\chi_\mu=\chi_J$. Thus the primitive ideals are
partitioned by their central characters, and the central character of a
primitive ideal is exactly a dot-Weyl orbit under the Harish-Chandra
isomorphism.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan $\mathfrak h$ and positive system, and primitive ideals $I,J$ of $U(\mathfrak g)$.

[F1] For a primitive ideal $I$, the center acts on a simple module with annihilator $I$ through a central character $\chi_I$, and $I\cap Z(U(\mathfrak g))=\ker\chi_I$; a unital homomorphism $Z(U(\mathfrak g))\to\mathbb C$ is determined by its kernel, because the quotient by the kernel is $\mathbb C$ via the unital structure map ([[prop-a-primitive-ideal-determines-a-central-character]], [[def-primitive-ideal-of-an-enveloping-algebra]]).

[F2] Under AC, every central character $\chi\colon Z(U(\mathfrak g))\to\mathbb C$ equals $\chi_\lambda$ for some $\lambda\in\mathfrak h^*$ ([[lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight]], [[def-central-character-of-a-lie-algebra-module]], [[def-axiom-of-choice]]).

[F3] Under AC, $\chi_\lambda=\chi_\mu$ if and only if $\mu\in W\cdot\lambda$ ([[cor-central-characters-are-dot-weyl-orbits]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $I\cap Z(U(\mathfrak g))=\ker\chi_I$ for a central character $\chi_I$; any central character with the same kernel equals $\chi_I$, because the kernel determines the unital homomorphism through the quotient $Z(U(\mathfrak g))/\ker\chi_I\cong\mathbb C$. Hence $\chi_I$ is unique, and it is determined by $I$. [F1, given]

2.1 By [F2] there is $\lambda\in\mathfrak h^*$ with $\chi_I=\chi_\lambda$. If also $\chi_I=\chi_\mu$, then $\chi_\lambda=\chi_\mu$, so $\mu\in W\cdot\lambda$ by [F3]; hence the dot orbit $W\cdot\lambda$ is independent of the choice of $\lambda$ and determined by $I$. [F2, F3, step 1.1]

3.1 For primitive ideals $I,J$, the identity $I\cap Z=J\cap Z$ is equivalent to $\ker\chi_I=\ker\chi_J$ by [F1], which is equivalent to $\chi_I=\chi_J$ because a central character is determined by its kernel; and by step 2.1 with [F3] this is equivalent to $W\cdot\lambda=W\cdot\mu$ for any $\lambda,\mu$ realizing $\chi_I,\chi_J$. Thus the fibres of $I\mapsto\chi_I$ on primitive ideals are exactly the sets of primitive ideals with a common dot-Weyl orbit, i.e. the primitive ideals are partitioned by their central characters. [F1, F3, step 1.1, step 2.1] ∎ 