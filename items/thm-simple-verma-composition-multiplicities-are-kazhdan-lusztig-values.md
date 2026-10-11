---
id: thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values
kind: theorem
title: "Simple Verma composition multiplicities are Kazhdan–Lusztig values"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one, thm-bgg-reciprocity, def-standard-and-costandard-objects-in-category-o, def-regular-integral-dot-orbit-labelling-convention, def-axiom-of-choice, def-verma-flag-and-its-multiplicities]
justified_by: []
aliases: []
landmark: false
dependency_level: 16
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Section 2 (printed pp. 4-5): Proposition-Definition 2.1 and Theorem 2.2 (BGG reciprocity), (P_lambda : M_mu) = [M_mu : L_lambda]; complete section read."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Section 1 (printed pp. 1-3): Conjecture 1.15 with the pair [M_{w'.0}:L_{w.0}]=h_{w',w}(1) and Remark 1.16 fixing w >= w'; complete passage read."
---

## Statement

Assume the Axiom of Choice. In a regular integral type-$A$ block
$\mathcal O_\lambda$, for all $y,w\in W$
$$[M(y\cdot\lambda):L(w\cdot\lambda)]=(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1),$$
with the pair ordered so that the multiplicity vanishes unless $y\le w$ in the
Bruhat order; in particular the Kazhdan–Lusztig conjecture's multiplicity
statement holds for every dominant regular integral weight, with the same
combinatorial answer.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the BGG reciprocity and block theory cited below), a regular integral type-$A$ block $\mathcal O_\lambda$ with $W=S_n$, and labels $y,w\in W$.

[F1] BGG reciprocity ([[thm-bgg-reciprocity]]): for all weights $\lambda,\mu$ one has $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]=[M(\mu):L(\lambda)]$, where the left multiplicity is the Verma-flag multiplicity and the right one the simple composition multiplicity.

[F2] The projective-Verma multiplicity theorem ([[thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one]]): in the regular integral type-$A$ block, $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)$ for all $y,w\in W$, and this vanishes unless $y\le w$.

[F3] Standards are Vermas ([[def-standard-and-costandard-objects-in-category-o]], [[def-verma-flag-and-its-multiplicities]]): $\Delta(\nu)=M(\nu)$ for every weight $\nu$, and the Verma-flag multiplicity $(X:\Delta(\nu))$ is the well-defined multiplicity of that standard in a finite flag.

[F4] Block conventions ([[def-regular-integral-dot-orbit-labelling-convention]]): the simples $L(w\cdot\lambda)$, standards $\Delta(w\cdot\lambda)=M(w\cdot\lambda)$ and indecomposable projectives $P(w\cdot\lambda)$ indexed by $w\in W$, the composition multiplicity notation $[M(y\cdot\lambda):L(w\cdot\lambda)]$, and the Bruhat direction $[M(y\cdot\lambda):L(w\cdot\lambda)]\neq0\Rightarrow y\le w$.

## Proof

**Proof technique:** direct.

1.1 Apply BGG reciprocity [F1] with the two weights $w\cdot\lambda$ and $y\cdot\lambda$: because $P(w\cdot\lambda)$ is the projective cover of $L(w\cdot\lambda)$ and $\Delta(y\cdot\lambda)=M(y\cdot\lambda)$ by [F3], reciprocity reads $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=[\Delta(y\cdot\lambda):L(w\cdot\lambda)]=[M(y\cdot\lambda):L(w\cdot\lambda)]$. [F1, F3, F4]

1.2 The projective-Verma theorem [F2] evaluates the projective-flag multiplicity in the regular integral block: $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)$, the value at $q=1$ of the classical Kazhdan–Lusztig polynomial, and this value is zero unless $y\le w$ in the Bruhat order. [F2, F4]

2.1 Substituting the value of step 1.2 into the chain of equalities of step 1.1 gives $[M(y\cdot\lambda):L(w\cdot\lambda)]=(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)$ for all $y,w\in W$, and the vanishing clause transfers along the same chain: the multiplicity is zero unless $y\le w$, in agreement with the Bruhat direction recorded in [F4]. Since $P_{y,w}(1)$ is a combinatorial quantity of the symmetric group alone, this multiplicity statement — the Kazhdan–Lusztig conjecture's multiplicity assertion — holds with the same answer for every dominant regular integral weight. [F2, F4, step 1.1, step 1.2] ∎
