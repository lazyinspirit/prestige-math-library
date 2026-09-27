---
id: def-splitting-and-reaping-numbers
kind: definition
title: The splitting and reaping numbers
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-almost-inclusion-pseudointersection-and-tower, def-axiom-of-choice, def-cardinal, lem-cardinality-of-a-well-orderable-set, def-natural-numbers, def-countable, thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero, def-cardinal-arithmetic]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Blass 3.1 and Proposition 27, printed pp.5, 8"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 2, printed pp.2-3"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

In ZFC, with $[\omega]^{\omega}$ the infinite subsets of $\omega$
([[def-almost-inclusion-pseudointersection-and-tower]]) and $\mathfrak
c=2^{\aleph_0}$ ([[def-cardinal-arithmetic]]):

**Splitting.** For $X,Y\subseteq\omega$, say that $X$ **splits** $Y$ when both
$Y\cap X$ and $Y\setminus X$ are infinite. A family $\mathcal S\subseteq[\omega]^{\omega}$ is a **splitting family** when every $Y\in[\omega]^{\omega}$ is split by some member
of $\mathcal S$. The **splitting number** is

$$s:=\min\{\lvert\mathcal S\rvert:\mathcal S\subseteq[\omega]^{\omega}\text{ is a splitting family}\}.$$

**Reaping.** A family $\mathcal R\subseteq[\omega]^{\omega}$ is **unreaped**
when no single set $X\subseteq\omega$ splits every member of $\mathcal R$; the
negation, "$\mathcal R$ is reaped by $X$", thus means that $X$ splits each
$Y\in\mathcal R$. The **reaping number** is

$$r:=\min\{\lvert\mathcal R\rvert:\mathcal R\subseteq[\omega]^{\omega}\text{ is unreaped}\}.$$

Both minima exist and are cardinals. Candidates for $s$ are subsets of
$[\omega]^{\omega}$, and the minimum is attained: $[\omega]^{\omega}$ itself is
a splitting family, since $Y\in[\omega]^{\omega}$ has an increasing enumeration
$y_0<y_1<\cdots$ and the even part $\{y_{2n}:n\in\mathbb N\}$ is an infinite
subset of $Y$ whose complement in $Y$ is the infinite set of odd-indexed
elements. Candidates for $r$ are again subsets of $[\omega]^{\omega}$, and
$[\omega]^{\omega}$ itself is unreaped: given $X\subseteq\omega$, either
$\omega\setminus X$ is infinite, in which case the member $\omega\setminus X$ of
$[\omega]^{\omega}$ meets $X$ in the empty set and so is not split by $X$, or
$\omega\setminus X$ is finite, in which case the member $X$ of
$[\omega]^{\omega}$ satisfies $X\setminus X=\varnothing$ and so is not split by
$X$ either. In both cases some member of $[\omega]^{\omega}$ is not split by
$X$, so $r\le\lvert[\omega]^{\omega}\rvert\le\mathfrak c$ and $s\le\mathfrak c$;
the cardinalities come from the Axiom of Choice
([[def-axiom-of-choice]], [[lem-cardinality-of-a-well-orderable-set]]).

**Conventions.** Splitting is asymmetric: $X$ splits $Y$ is a statement about
$Y$'s two parts, and it implies $Y$ is infinite but imposes no infinitude
condition on $X$ beyond $Y\cap X$ being infinite; splitting families are,
however, customarily taken inside $[\omega]^{\omega}$, as above. The comparison
of $s$ and $r$ with $b$, $d$ and $\mathfrak c$ is
[[lem-splitting-reaping-comparison-with-b-and-d]]; the elementary lower bounds
$\aleph_1\le s$ and $\aleph_1\le b\le r$ are proved there, and the upper bounds
are the ones just displayed.

## Remarks

Monk attributes the splitting number and the diagonal lower bound $\omega<s$
to Blass, and the inequality $b\le r$ is his Proposition 27; the reaping number
is the least size of a family that no single set splits, which is the
formulation used consistently below. The names come from the dual picture:
$\mathcal R$ is unreaped by $X$ when $X$ fails to split some member, so in a
reaping family every candidate splitter fails on at least one member.
