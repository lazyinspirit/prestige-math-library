---
id: def-compactly-embedded-normed-spaces
kind: definition
title: "Compactly embedded normed spaces"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-compact-linear-operator, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, def-bounded-linear-operator, def-metric-compactness, def-metric-bounded-diameter, thm-metric-compactness-equivalences, def-countable-choice, def-dependent-choice, thm-coordinate-map-for-a-finite-dimensional-normed-space, thm-heine-borel-rn]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Definition 3.24 and the surrounding discussion of continuous and compact imbeddings, printed p. 74"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 3.10, first paragraph: the definition of $X\\Subset Y$ by precompact images of bounded sets, printed p. 73"
---

## Definition

Let $X$ and $Y$ be normed spaces over the same field
$\mathbb K\in\{\mathbb R,\mathbb C\}$, read in the real case from
[[def-norm-and-normed-space]] and in the complex case from
[[rem-real-and-complex-normed-space-convention]], and suppose $X\subseteq Y$
with **continuous inclusion** $J:X\to Y$: there is a real $C\ge0$ with
$\|x\|_Y\le C\|x\|_X$ for every $x\in X$.

One says that $X$ is **compactly embedded** in $Y$, written $X\Subset Y$, when
the inclusion operator $J$ is a compact operator in the sense of
[[def-compact-linear-operator]]: the image under $J$ of every bounded
subset of $X$ ([[def-metric-bounded-diameter]]) has compact closure in $Y$
([[def-metric-compactness]]).

**The sequential form.** Assume the Axiom of Countable Choice
([[def-countable-choice]]) and the Axiom of Dependent Choice
([[def-dependent-choice]]). Then $X\Subset Y$ if and only if every bounded
sequence $(x_j)$ in $X$ has a subsequence $(x_{j_k})$ converging in $Y$:
Indeed, compact closure gives the sequence conclusion by
[[thm-metric-compactness-equivalences]]. Conversely, fix bounded $B\subseteq X$
and let $K=\overline{J(B)}$. For any sequence $(y_j)$ in $K$, Countable
Choice selects $b_j\in B$ with $\|y_j-b_j\|_Y<1/j$ (start at $j=1$);
a convergent subsequence of $(b_j)$ gives one of $(y_j)$ with the same limit,
which belongs to the closed set $K$. Thus $K$ is sequentially compact and
[[thm-metric-compactness-equivalences]] makes it compact. The empty case is
immediate. Both readings
of $X\Subset Y$ are used on this page; the second is the form in which the
compactness theorems below are stated.

Continuity of the inclusion is a separate hypothesis and is never inferred
from compactness: a compact operator is bounded by
[[def-compact-linear-operator]] and [[def-bounded-linear-operator]], but the
definition above fixes the continuity of $J$ in advance. On this page the
continuity of every Sobolev inclusion is verified separately, through the
corresponding Sobolev embedding theorem.

## Remarks

- The symbol $X\Subset Y$ is used only for pairs of normed spaces embedded in
  one another as above; it never abbreviates a claim that some particular
  Sobolev space is compactly embedded in another, which always requires its
  own theorem with its own domain, exponent and boundary hypotheses.
- If $X$ is finite-dimensional and $Y$ is a normed space containing it with
  continuous inclusion, then $X\Subset Y$: the coordinate isomorphism of
  [[thm-coordinate-map-for-a-finite-dimensional-normed-space]] sends a closed
  bounded coordinate ball to a compact set containing any prescribed bounded
  subset of $X$, by [[thm-heine-borel-rn]] (identify $\mathbb C^d$ with
  $\mathbb R^{2d}$). Its image in $Y$ is compact by continuity of the
  inclusion, and the closure of the bounded image is a closed subset of it.
  The zero-dimensional case is immediate.
- The two formulations agree without any hypothesis on $X$ or $Y$ beyond
  their being normed spaces, and the choice cost of the passage between them
  is bounded above by Countable Choice plus Dependent Choice, as recorded in
  [[thm-metric-compactness-equivalences]].
