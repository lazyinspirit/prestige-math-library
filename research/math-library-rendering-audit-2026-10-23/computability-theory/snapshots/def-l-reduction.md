---
id: def-l-reduction
kind: definition
title: "L-reductions between optimization problems"
status: published
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-ptas-fptas-and-apx
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §16.2 Definition 16.4 and Theorems 16.5–16.6, printed pp. 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $\Pi$ and $\Gamma$ be finite-instance optimization problems in the model of
[[def-optimization-problem-and-approximation-ratio]], with objective directions
and nonnegative rational values as specified there; write
$\operatorname{OPT}_\Pi(x)$ and $\operatorname{OPT}_\Gamma(z)$ for their
attained optima and $\operatorname{val}_\Pi$, $\operatorname{val}_\Gamma$ for
their objective values. An **L-reduction** from $\Pi$ to $\Gamma$ consists of:

- a total instance map $f$, computable in deterministic polynomial time, that
  carries every instance $x$ of $\Pi$ to an instance $f(x)$ of $\Gamma$;
- a feasible-solution map $g$, computable in deterministic polynomial time,
  that on every instance $x$ of $\Pi$ and every feasible solution $y$ of the
  $\Gamma$-instance $f(x)$ produces a feasible solution $g(x,y)$ of the
  $\Pi$-instance $x$;
- constants $a>0$ and $b>0$, independent of the instance, such that for every
  instance $x$ of $\Pi$ and every feasible solution $y$ of $f(x)$,

$ \operatorname{OPT}_\Gamma(f(x))\le a\,\operatorname{OPT}_\Pi(x), \qquad \bigl|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(g(x,y))\bigr| \le b\,\bigl|\operatorname{OPT}_\Gamma(f(x))-\operatorname{val}_\Gamma(y)\bigr|. $

The first inequality relates the two optima and the second is the **error
transfer** inequality: it compares the loss of the decoded solution to the loss
of the given one. Both maps are required to be total on their stated domains and
to run in time polynomial in the encoding lengths involved, and both objectives
are nonnegative rationals, so the absolute values are ordinary finite
differences of nonnegative numbers. The definition covers minimization and
maximization problems without change; the first inequality is an ordinary
comparison of nonnegative rationals and the second is stated with absolute
values rather than a quotient, so instances with optimum $0$ are included. The
APX-hardness and APX-completeness notions attached to this reduction are
defined separately under the selected convention of
[[def-apx-hardness-and-apx-completeness]], and the transfer and composition
properties are proved in [[lem-l-reductions-transfer-apx-hardness]]. An
L-reduction alone is not a promise problem or a gap-preserving reduction in the
sense of [[def-gap-problem-and-gap-preserving-reduction]]: it carries feasible
solutions backwards through $g$, which a gap map need not do.
