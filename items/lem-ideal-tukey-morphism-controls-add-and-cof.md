---
id: lem-ideal-tukey-morphism-controls-add-and-cof
kind: lemma
title: Ideal Tukey morphisms control additivity and cofinality
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-null-and-meagre-cardinal-invariants, def-axiom-of-choice, def-cardinal, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Lemma 2.2 and the surrounding Tukey discussion, printed pp.2-3"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $X$ be a set and let $\mathcal I,\mathcal J\subseteq\mathcal P(X)$ be
**proper ideals**: each contains $\varnothing$, is closed under taking subsets,
and does not contain $X$. Let $\operatorname{add}$ and $\operatorname{cof}$ be
defined for a family of subsets of $X$ by the minimum clauses of
[[def-null-and-meagre-cardinal-invariants]], $\operatorname{add}(\mathcal
J)=\min\{\lvert\mathcal A\rvert:\mathcal A\subseteq\mathcal J,\ \bigcup\mathcal
A\notin\mathcal J\}$ and $\operatorname{cof}(\mathcal
J)=\min\{\lvert\mathcal A\rvert:\mathcal A\subseteq\mathcal J,\ \forall B\in\mathcal
J\ \exists A\in\mathcal A\ (B\subseteq A)\}$. Assume these minima exist for both $\mathcal I$ and $\mathcal J$;
equivalently for additivity, each family has a subfamily whose union lies
outside it. Suppose
$u:\mathcal I\to\mathcal J$ and $v:\mathcal J\to\mathcal I$ are functions
satisfying

$$u(A)\subseteq B\quad\Longrightarrow\quad A\subseteq v(B)\qquad\text{for all } A\in\mathcal I,\ B\in\mathcal J .$$

Then $\operatorname{add}(\mathcal J)\le\operatorname{add}(\mathcal I)$ and
$\operatorname{cof}(\mathcal I)\le\operatorname{cof}(\mathcal J)$. The same two
inequalities hold in the weaker form in which $\mathcal I_0\subseteq\mathcal I$
and $\mathcal J_0\subseteq\mathcal J$ are inclusion-cofinal$^*$ subfamilies
(every member of $\mathcal I$ is contained in a member of $\mathcal I_0$, and
similarly for $\mathcal J$) and the morphism is given only between
$\mathcal I_0$ and $\mathcal J_0$, with the Axiom of Choice available to extend
it.

The relevant instances are $\mathcal I,\mathcal J\in\{\mathcal N,\mathcal M\}$
on the real line and their coded cofinal subfamilies on Cantor space; the
inequalities are used below in exactly the direction displayed, with no
reversal.

## Facts & Assumptions

**Given:** A set $X$, proper ideals $\mathcal I,\mathcal J\subseteq\mathcal P(X)$, functions $u:\mathcal I\to\mathcal J$ and $v:\mathcal J\to\mathcal I$ with the displayed property, and the attained $\operatorname{add}$ and $\operatorname{cof}$ minima for both families as assumed in the Statement.

[F1] For a family $\mathcal K\subseteq\mathcal P(X)$ of subsets of $X$, $\operatorname{add}(\mathcal K)$ is the least cardinality of a subfamily of $\mathcal K$ whose union is not in $\mathcal K$, and $\operatorname{cof}(\mathcal K)$ is the least cardinality of an inclusion-cofinal subfamily of $\mathcal K$; for $\mathcal K=\mathcal N$ and $\mathcal K=\mathcal M$ the two minima exist and are attained. ([[def-null-and-meagre-cardinal-invariants]])

[F2] The Axiom of Choice supplies a choice function for every family of nonempty sets, and under it every set has a cardinality and cardinalities are cardinals. ([[def-axiom-of-choice]], [[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]])

## Proof

**Proof technique:** direct.

1.1 If $\kappa<\operatorname{add}(\mathcal J)$ and $(B_i)_{i<\kappa}$ is a family of members of $\mathcal J$, then $\bigcup_{i<\kappa}B_i\in\mathcal J$: otherwise that subfamily would be a subfamily of $\mathcal J$ of cardinality at most $\kappa$ whose union is not in $\mathcal J$, and its cardinality would be a candidate in the minimum defining $\operatorname{add}(\mathcal J)$ strictly below that minimum. [given, F1]

1.2 $\operatorname{cof}(\mathcal I)\le\operatorname{cof}(\mathcal J)$: let $\mathcal B\subseteq\mathcal J$ be inclusion-cofinal in $\mathcal J$ with $\lvert\mathcal B\rvert=\operatorname{cof}(\mathcal J)$. For every $A\in\mathcal I$, cofinality of $\mathcal B$ gives some $B\in\mathcal B$ with $u(A)\subseteq B$, and the displayed morphism property gives $A\subseteq v(B)$. Thus the image $\{v(B):B\in\mathcal B\}\subseteq\mathcal I$ is inclusion-cofinal without simultaneously selecting a witness for each $A$, and $\operatorname{cof}(\mathcal I)\le\lvert\{v(B):B\in\mathcal B\}\rvert\le\lvert\mathcal B\rvert=\operatorname{cof}(\mathcal J)$. [given, F1]

2.1 $\operatorname{add}(\mathcal J)\le\operatorname{add}(\mathcal I)$: let $\kappa<\operatorname{add}(\mathcal J)$ and let $(A_i)_{i<\kappa}$ be a family of members of $\mathcal I$; by step 1.1 the set $B:=\bigcup_{i<\kappa}u(A_i)$ is a member of $\mathcal J$, and $u(A_i)\subseteq B$ gives $A_i\subseteq v(B)$ for every $i$ by the displayed property, so $\bigcup_{i<\kappa}A_i\subseteq v(B)$; since $v(B)\in\mathcal I$ and $\mathcal I$ is closed under subsets, $\bigcup_{i<\kappa}A_i\in\mathcal I$. Hence no subfamily of $\mathcal I$ of size below $\operatorname{add}(\mathcal J)$ has its union outside $\mathcal I$, and the minimum clause for $\operatorname{add}(\mathcal I)$ gives $\operatorname{add}(\mathcal I)\ge\operatorname{add}(\mathcal J)$. [step 1.1, given, F1]

3.1 The cofinal-subfamily form: assume $\mathcal I_0\subseteq\mathcal I$ and $\mathcal J_0\subseteq\mathcal J$ are inclusion-cofinal and that $u:\mathcal I_0\to\mathcal J_0$, $v:\mathcal J_0\to\mathcal I_0$ satisfy the displayed property there. By [F2] choose for every $A\in\mathcal I$ a member $A^{+}\in\mathcal I_0$ with $A\subseteq A^{+}$ and for every $B\in\mathcal J$ a member $B^{+}\in\mathcal J_0$ with $B\subseteq B^{+}$, and put $\bar u(A):=u(A^{+})$ and $\bar v(B):=v(B^{+})$; if $\bar u(A)\subseteq B$ for $A\in\mathcal I$, $B\in\mathcal J$, then $u(A^{+})\subseteq B^{+}$ with $A^{+}\in\mathcal I_0$ and $B^{+}\in\mathcal J_0$, so the cofinal-subfamily property gives $A^{+}\subseteq v(B^{+})=\bar v(B)$ and hence $A\subseteq\bar v(B)$; thus $\bar u:\mathcal I\to\mathcal J$ and $\bar v:\mathcal J\to\mathcal I$ satisfy the hypotheses of steps 2.1 and 1.2, which give $\operatorname{add}(\mathcal J)\le\operatorname{add}(\mathcal I)$ and $\operatorname{cof}(\mathcal I)\le\operatorname{cof}(\mathcal J)$. [step 2.1, step 1.2, given, F2]

4.1 Steps 2.1 and 1.2 prove the two inequalities for a morphism defined on the full ideals without a simultaneous witness selection, and step 3.1 transfers them to morphisms defined only on inclusion-cofinal subfamilies, with the Axiom of Choice used for the two selections in step 3.1; the cardinal minima themselves are interpreted in ZFC. This is the statement. ∎ [step 2.1, step 1.2, step 3.1]
