---
id: def-boundary-topology-by-gromov-products
kind: definition
title: "The boundary topology defined by Gromov products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-gromov-boundary-by-asymptotic-sequences, def-gromov-product]
justified_by: [thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant]
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Let $(X,d)$ be a proper geodesic hyperbolic space, let $o \in X$, and let
$\partial X$ be the boundary defined by Gromov sequences.

For boundary classes $\xi=[(x_n)]$ and $\eta=[(y_n)]$, define

$$ (\xi,\eta)_o := \sup \liminf_{m,n \to \infty} (x_m,y_n)_o, $$

where the supremum runs over all representatives of the two classes.

For $\xi \in \partial X$ and $R > 0$, let

$$ U_o(\xi,R) := \{\eta \in \partial X : (\xi,\eta)_o > R\}. $$

The **boundary topology** consists of the sets $O\subseteq\partial X$ such
that, for every $\xi\in O$, some $R>0$ satisfies $U_o(\xi,R)\subseteq O$.
Each $U_o(\xi,R)$ is a neighbourhood of $\xi$; it need not itself be open.
The next theorem proves that this criterion defines a topology and is
independent of the chosen basepoint.
