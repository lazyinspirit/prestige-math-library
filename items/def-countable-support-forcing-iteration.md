---
id: def-countable-support-forcing-iteration
kind: definition
title: "Countable-support forcing iterations"
status: published
origin: pipeline
deps: [def-two-step-forcing-iteration, def-finite-support-forcing-iteration, def-forcing-names-and-name-rank, def-countable]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Chapters 5 and 24"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Definition

Fix an ordinal $\delta$ and set-indexed data
$\langle P_\alpha,\dot Q_\alpha,\dot 1_\alpha:\alpha<\delta\rangle$.
As in [[def-finite-support-forcing-iteration]], $P_0$ is trivial,
$P_{\alpha+1}$ is identified with the two-step iteration
$P_\alpha*\dot Q_\alpha$, and $\dot 1_\alpha$ is a supplied name forced to be
the largest condition of the nonempty preorder $\dot Q_\alpha$. More
precisely, for each $\alpha<\delta$ let $R_\alpha$ be the set-sized
second-name carrier used for that two-step iteration and require
$\dot 1_\alpha\in R_\alpha$. At a limit
$\gamma\leq\delta$, a condition $p\in P_\gamma$ is a coherent function on
$\gamma$ with $p(\alpha)\in R_\alpha$ such that

$$p\mathbin{\restriction}\alpha\Vdash_{P_\alpha}p(\alpha)\in\dot Q_\alpha$$

for every $\alpha<\gamma$, and its nontrivial support

$$\operatorname{supp}(p)=\{\alpha<\gamma:p\mathbin{\restriction}\alpha\not\Vdash p(\alpha)=\dot 1_\alpha\}$$

is at most countable. Coordinates outside the support are filled by the
specified top names. The order is stronger-is-smaller:

$$p\leq q\quad\Longleftrightarrow\quad(\forall\alpha<\gamma)\;p\mathbin{\restriction}\alpha\Vdash p(\alpha)\leq_{\dot Q_\alpha}q(\alpha).$$

This recursive system is a **countable-support iteration**, and the limit
order is its countable-support inverse limit. It differs from the direct
finite-support limit precisely by allowing countably many nontrivial
coordinates.

For $\eta\leq\gamma$, the restriction map is
$p\mapsto p\mathbin{\restriction}\eta$. In a $P_\eta$-generic extension, the
quotient is

$$P_\gamma/G_\eta=\{p\in P_\gamma:p\mathbin{\restriction}\eta\in G_\eta\},$$

with the inherited order; equivalently one may use the canonical
$P_\eta$-name for the tails $p\mathbin{\restriction}[\eta,\gamma)$. Thus a
name for a quotient condition always comes with the requirement that its
initial restriction belongs to the generic filter.

The definition itself makes no choice. Later limit arguments may take the
union of a sequence of *coherent initial segments*, meaning
$q_{n+1}\mathbin{\restriction}\eta_n=q_n$ for increasing $\eta_n$; this is
not an assertion that arbitrary coordinatewise descending sequences in
proper iterands have lower bounds. Showing that the resulting union has
countable support uses the applicable countable-union principle and is kept
as an explicit proof obligation there.
