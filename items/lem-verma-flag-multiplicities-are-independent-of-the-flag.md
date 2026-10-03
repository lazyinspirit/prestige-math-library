---
id: lem-verma-flag-multiplicities-are-independent-of-the-flag
kind: lemma
title: "Verma-flag multiplicities are independent of the flag"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-grothendieck-group-and-character-of-category-o
  - def-verma-flag-and-its-multiplicities
  - prop-the-grothendieck-group-of-o-has-simple-and-standard-bases
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Proposition-Definition 2.1"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§2, Proposition-Definition 2.1 and its devissage proof, printed p. 4 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 23.1"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§23.1, standard classes as a basis of K(O), printed p. 114 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If $X\in\mathcal O$
admits two finite Verma flags with corresponding multiplicities
$m_\mu$ and $m'_\mu$
([[def-verma-flag-and-its-multiplicities]]), then $m_\mu=m'_\mu$ for every
weight $\mu$. Hence the multiplicity $(X:\Delta(\mu))$ of
[[def-verma-flag-and-its-multiplicities]] is well defined.

## Facts & Assumptions

**Given:** The Axiom of Choice, an object $X$ with two finite Verma flags and their multiplicity functions $m,m'$.

[F1] If $0=X_0\subseteq X_1\subseteq\cdots\subseteq X_n=X$ is a Verma flag with factors $X_i/X_{i-1}\cong\Delta(\mu_i)$, then $[X]=\sum_{i=1}^n[\Delta(\mu_i)]$ in the Grothendieck group, where $[\Delta(\mu)]=[M(\mu)]$, and $m_\mu=\#\{i:\mu_i=\mu\}$ is the multiplicity; all but finitely many $m_\mu$ vanish ([[def-verma-flag-and-its-multiplicities]], [[def-grothendieck-group-and-character-of-category-o]]).

[F2] The classes $[M(\lambda)]$, equivalently the classes $[\Delta(\lambda)]$, form a $\mathbb Z$-basis of $K_0(\mathcal O)$ ([[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]).

## Proof

**Proof technique:** direct comparison of two basis expansions in the Grothendieck group.

1.1 The two flags give two finite expansions of the same class, $[X]=\sum_\mu m_\mu[\Delta(\mu)]$ and $[X]=\sum_\mu m'_\mu[\Delta(\mu)]$, in $K_0(\mathcal O)$. [F1, given]

2.1 Since the standard classes $[\Delta(\mu)]=[M(\mu)]$ form a $\mathbb Z$-basis of $K_0(\mathcal O)$, the coefficient of each basis element in a class is uniquely determined. Comparing the two expansions of $[X]$ from step 1.1 therefore gives $m_\mu=m'_\mu$ for every weight $\mu$, so the multiplicity $(X:\Delta(\mu))$ is independent of the chosen flag. [F2, step 1.1] ∎
