---
id: lem-basic-ideal-cardinal-inequalities
kind: lemma
title: Elementary bounds on ideal cardinal invariants
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-null-and-meagre-cardinal-invariants, prop-meagre-subsets-form-a-sigma-ideal, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, thm-lebesgue-measure-is-a-complete-measure, def-measure-null-set-and-almost-everywhere, cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls, thm-cardinality-of-the-borel-sigma-algebra-on-rn, thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero, def-borel-sigma-algebra, def-sigma-algebra, def-aleph-and-beth-hierarchies, def-axiom-of-choice, def-countable-choice, lem-cardinality-of-a-well-orderable-set, def-cardinal, def-cardinal-arithmetic, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-nowhere-dense-meagre-and-residual-subsets, def-g-delta-and-f-sigma-in-a-topological-space, def-countable]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 2 (elementary properties of add, cov, non, cof), printed p.2"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC, for $\mathcal I=\mathcal N$ the Lebesgue-null ideal and for
$\mathcal I=\mathcal M$ the meagre ideal of subsets of $\mathbb{R}$
([[def-null-and-meagre-cardinal-invariants]]),

$$\aleph_1\le\operatorname{add}(\mathcal I)\le\min(\operatorname{cov}(\mathcal I),\operatorname{non}(\mathcal I))\le\max(\operatorname{cov}(\mathcal I),\operatorname{non}(\mathcal I))\le\operatorname{cof}(\mathcal I)\le\mathfrak c=2^{\aleph_0}.$$

The two middle terms are not an assertion that $\operatorname{cov}$ and
$\operatorname{non}$ are comparable: $\min$ and $\max$ of the two cardinals
are displayed, and $\min\le\max$ is immediate. The content is the four
inequalities $\operatorname{add}\le\operatorname{cov}$,
$\operatorname{add}\le\operatorname{non}$,
$\operatorname{cov}\le\operatorname{cof}$,
$\operatorname{non}\le\operatorname{cof}$, the lower bound $\aleph_1\le
\operatorname{add}$ coming from countable closure, and the upper bound
$\operatorname{cof}\le\mathfrak c$ coming from Borel hulls.

## Facts & Assumptions

**Given:** ZFC, hence the Axiom of Choice and the Axiom of Countable Choice.

[F1] For $\mathcal I=\mathcal N$ or $\mathcal M$ the four numbers of [[def-null-and-meagre-cardinal-invariants]] are cardinals, their defining minima are attained, every singleton is a member of both ideals, $\mathbb{R}\notin\mathcal I$, a set is meagre exactly when it is contained in the union of a sequence of nowhere dense sets, and the two meagre conventions used in the library agree. ([[def-null-and-meagre-cardinal-invariants]], [[def-nowhere-dense-meagre-and-residual-subsets]])

[F2] $(\mathbb{R},\mathcal{L}(\mathbb{R}),\lambda)$ is a complete measure space, and in a complete measure space a countable union of measurable null sets is measurable and null. ([[thm-lebesgue-measure-is-a-complete-measure]], [[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]], [[def-measure-null-set-and-almost-everywhere]])

[F3] The meagre subsets of a topological space contain $\varnothing$ and are closed under taking subsets, and under the Axiom of Countable Choice they are closed under countable unions. ([[prop-meagre-subsets-form-a-sigma-ideal]])

[F4] Every $E\subseteq\mathbb{R}$ has a $G_\delta$ set $G$ with $E\subseteq G$ and $\lambda^*(G)=\lambda^*(E)$; such a $G$ is Borel. ([[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]])

[F5] $\lvert\mathcal B(\mathbb{R})\rvert=\mathfrak c=\lvert\mathbb{R}\rvert=2^{\aleph_0}$; the Borel sigma-algebra contains the open sets and is closed under complements and countable unions, so it contains every closed set and every $F_\sigma$ set. ([[thm-cardinality-of-the-borel-sigma-algebra-on-rn]], [[thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero]], [[def-borel-sigma-algebra]], [[def-sigma-algebra]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-cardinal-arithmetic]])

[F6] $\aleph_1=\aleph_0^{+}$ is the least cardinal strictly above $\aleph_0$; the Axiom of Choice supplies a choice function for every family of nonempty sets, and under it every set has a cardinality. ([[def-aleph-and-beth-hierarchies]], [[def-axiom-of-choice]], [[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]])

[F7] For $A\subseteq\mathbb{R}$ the closure $\overline A$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A=\overline A$; a set is nowhere dense exactly when the interior of its closure is empty. ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-nowhere-dense-meagre-and-residual-subsets]])

## Proof

**Proof technique:** direct.

1.1 **Finite unions.** If $A_0,\dots,A_m\in\mathcal I$ with $\mathcal I\in\{\mathcal N,\mathcal M\}$, then $\bigcup_{i\le m}A_i\in\mathcal I$: extend the finite list to the sequence $A_n:=\varnothing$ for $n>m$, the empty set being in both ideals, and apply the countable-union clause of [F2] respectively [F3]. [F1, F2, F3]

1.2 **$\operatorname{add}\le\operatorname{cov}$.** If $\mathcal A\subseteq\mathcal I$ with $\bigcup\mathcal A=\mathbb{R}$, then $\mathbb{R}\notin\mathcal I$ gives $\bigcup\mathcal A\notin\mathcal I$, so $\mathcal A$ is a candidate in the minimum defining the additivity and $\operatorname{add}(\mathcal I)\le\lvert\mathcal A\rvert$; minimizing over covers of $\mathbb{R}$ by members of $\mathcal I$ gives $\operatorname{add}(\mathcal I)\le\operatorname{cov}(\mathcal I)$. [F1]

1.3 **$\operatorname{add}\le\operatorname{non}$.** If $Y\subseteq\mathbb{R}$ with $Y\notin\mathcal I$, then $Y=\bigcup_{y\in Y}\{y\}$ is the union of the family $\{\{y\}:y\in Y\}$ of members of $\mathcal I$, of cardinality $\lvert Y\rvert$; this family is a candidate in the minimum defining the additivity, so $\operatorname{add}(\mathcal I)\le\lvert Y\rvert$, and minimizing over $Y\notin\mathcal I$ gives $\operatorname{add}(\mathcal I)\le\operatorname{non}(\mathcal I)$. [F1]

1.4 **$\operatorname{cov}\le\operatorname{cof}$.** Let $\mathcal A\subseteq\mathcal I$ be inclusion-cofinal in $\mathcal I$ with $\lvert\mathcal A\rvert=\operatorname{cof}(\mathcal I)$ (attained by [F1]). For each $x\in\mathbb{R}$ the singleton $\{x\}$ is a member of $\mathcal I$, so the set $\{A\in\mathcal A:x\in A\}$ is nonempty, and the Axiom of Choice selects a member $A_x\in\mathcal A$ containing $x$. Every real therefore lies in some member of $\mathcal A$, that is, $\bigcup\mathcal A=\mathbb{R}$, so $\mathcal A$ is a cover of $\mathbb{R}$ by members of $\mathcal I$ and $\operatorname{cov}(\mathcal I)\le\lvert\mathcal A\rvert=\operatorname{cof}(\mathcal I)$. [F1, F6]

1.5 **$\operatorname{non}\le\operatorname{cof}$.** Let $\mathcal A\subseteq\mathcal I$ again be inclusion-cofinal with $\lvert\mathcal A\rvert=\operatorname{cof}(\mathcal I)$. Since $\mathbb{R}\notin\mathcal I$, no member $A\in\mathcal A$ equals $\mathbb{R}$, so each set $\mathbb{R}\setminus A$ is nonempty and the Axiom of Choice selects a point $x_A\in\mathbb{R}\setminus A$ for every $A\in\mathcal A$. Put $Y:=\{x_A:A\in\mathcal A\}$; then $Y\subseteq\mathbb{R}$ and $\lvert Y\rvert\le\lvert\mathcal A\rvert$ because $Y$ is the image of $\mathcal A$ under $A\mapsto x_A$. If $Y$ were a member of $\mathcal I$, cofinality would give $A_*\in\mathcal A$ with $Y\subseteq A_*$, and then $x_{A_*}\in Y\subseteq A_*$ would contradict $x_{A_*}\in\mathbb{R}\setminus A_*$; hence $Y\notin\mathcal I$ and $\operatorname{non}(\mathcal I)\le\lvert Y\rvert\le\operatorname{cof}(\mathcal I)$. [F1, F6]

1.6 **$\operatorname{cof}(\mathcal N)\le\mathfrak c$.** Let $E\in\mathcal N$. By [F4] there is a $G_\delta$ set $G$ with $E\subseteq G$ and $\lambda^*(G)=\lambda^*(E)$; here $\lambda^*(E)=\lambda(E)=0$ because $E$ is measurable with $\lambda(E)=0$, so $\lambda^*(G)=0$, and $G$ is a Borel set, hence a member of $\mathcal N$, containing $E$. Therefore the family $\mathcal B_{\mathcal N}:=\{B\in\mathcal B(\mathbb{R}):B\in\mathcal N\}$ consists of members of $\mathcal N$ and is inclusion-cofinal in it, so $\operatorname{cof}(\mathcal N)\le\lvert\mathcal B_{\mathcal N}\rvert\le\lvert\mathcal B(\mathbb{R})\rvert=\mathfrak c$ by [F1] and [F5]. [F1, F2, F4, F5]

1.7 **$\operatorname{cof}(\mathcal M)\le\mathfrak c$.** Let $E\in\mathcal M$ and, by [F1], let $(N_n)_{n\in\mathbb N}$ be a sequence of nowhere dense sets with $E\subseteq\bigcup_nN_n$. Put $B:=\bigcup_n\overline{N_n}$. Each $\overline{N_n}$ is closed by [F7], hence $\overline{N_n}=\overline{\overline{N_n}}$ by [F7], so its interior $\operatorname{int}(\overline{\overline{N_n}})=\operatorname{int}(\overline{N_n})=\varnothing$ is empty, that is, $\overline{N_n}$ is nowhere dense; thus $B$ is the union of a sequence of nowhere dense sets and is meagre, and $B$ is $F_\sigma$, hence Borel and a member of $\mathcal M$, with $E\subseteq B$. Therefore $\mathcal B_{\mathcal M}:=\{B\in\mathcal B(\mathbb{R}):B\in\mathcal M\}$ is inclusion-cofinal in $\mathcal M$, and $\operatorname{cof}(\mathcal M)\le\lvert\mathcal B_{\mathcal M}\rvert\le\lvert\mathcal B(\mathbb{R})\rvert=\mathfrak c$. [F1, F3, F5, F7]

2.1 **Countable families never witness.** If $\mathcal A\subseteq\mathcal I$ is at most countable, then $\bigcup\mathcal A\in\mathcal I$: a finite family is handled by step 1.1, and a countably infinite family can be listed as a sequence and is handled by the countable-union clause of [F2] for $\mathcal N$ and of [F3] for $\mathcal M$. [step 1.1, F1, F2, F3]

3.1 **$\aleph_1\le\operatorname{add}(\mathcal I)$.** By [F1] the minimum defining the additivity is attained, so there is $\mathcal A\subseteq\mathcal I$ with $\lvert\mathcal A\rvert=\operatorname{add}(\mathcal I)$ and $\bigcup\mathcal A\notin\mathcal I$. Step 2.1 shows that such an $\mathcal A$ is not at most countable, so $\operatorname{add}(\mathcal I)>\aleph_0$, and since $\operatorname{add}(\mathcal I)$ is a cardinal and $\aleph_1=\aleph_0^{+}$ is the least cardinal strictly above $\aleph_0$, it follows that $\aleph_1\le \operatorname{add}(\mathcal I)$. [step 2.1, F1, F6]

4.1 Combining step 3.1 with steps 1.2 and 1.3 gives $\aleph_1\le \operatorname{add}(\mathcal I)\le\min(\operatorname{cov}(\mathcal I),\operatorname{non}(\mathcal I))$; steps 1.4 and 1.5 give $\max(\operatorname{cov}(\mathcal I),\operatorname{non}(\mathcal I))\le\operatorname{cof}(\mathcal I)$; steps 1.6 and 1.7 give $\operatorname{cof}(\mathcal I)\le\mathfrak c$ for the two ideals; and $\min\le\max$ of two cardinals is immediate. This is the displayed chain. ∎ [step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 3.1]
