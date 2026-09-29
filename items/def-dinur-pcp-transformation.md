---
id: def-dinur-pcp-transformation
kind: definition
title: "One fixed-alphabet Dinur transformation"
status: published
origin: pipeline
deps:
  - thm-gap-amplification-step
  - thm-alphabet-reduction-step
  - lem-alphabet-reduction-controls-size-and-degree
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3, Theorems 1.2 and 1.5 and §3 proof of Theorem 1.5, printed pp. 5–8 and 12–15"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.29 and §18.5.2 Lemma 18.30, printed pp. 371–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: n/a
  audited: 2026-09-30
---

## Definition

Let $\Sigma_\star$ denote the fixed alphabet of $66$ symbols produced by the
alphabet reduction of [[thm-alphabet-reduction-step]], that is,
$$\Sigma_\star=\{B(0),B(1)\}\sqcup\{0,1\}^6,$$
and let $W_\star=\lvert\Sigma_\star\rvert=66\ge2$.

Fix the constants of the gap-amplification step of
[[thm-gap-amplification-step]] at the input alphabet $\Sigma_\star$: its
threshold $t_0$ (which depends only on $W_\star$ and on the absolute
constants of that theorem), its output alphabet $\Sigma_t$, its output degree
bound $d_t$, its blowup $C_t$, its gap map
$g_t(\varepsilon)=\beta\sqrt t\min(\varepsilon,c/t)$ and its completeness
and edgeless-input clauses. For every integer $t\ge t_0$, denoted in the
sequel by $t$ being **in the transformation domain**, define, for every
finite binary constraint graph $G$ over $\Sigma_\star$ whose relation tables
are explicit and whose degree is arbitrary,
$$T_t(G):=A_{\Sigma_t}\bigl(R_t(G)\bigr),$$
where:

- $R_t(G)$ is the output of the published complete uniform gap-preserving
  step of [[thm-gap-amplification-step]] applied to $G$: first the degree
  reduction, then the local-view powering. It is a binary constraint graph
  over the finite alphabet $\Sigma_t$ with at most $C_t\lvert E(G)\rvert$
  ordinary edges, and it is edgeless whenever $G$ is edgeless;
- $\Sigma_t$ has $\lvert\Sigma_t\rvert=\lvert\Sigma_\star\rvert^{(2D)^R}$
  symbols for the absolute constant $D=387$ and the view radius
  $R=t+\lceil\sqrt t\rceil$, so $\lvert\Sigma_t\rvert\ge2$ for every $t$ in
  the domain;
- $A_{\Sigma_t}$ is the alphabet reduction of [[thm-alphabet-reduction-step]]
  instantiated at the input alphabet $\Sigma_t$, a deterministic map sending
  finite $\Sigma_t$-graphs to finite binary constraint graphs over
  $\Sigma_\star$ again.

Thus $T_t$ is a map from finite binary constraint graphs over
$\Sigma_\star$ to finite binary constraint graphs over $\Sigma_\star$,
defined exactly for integers $t\ge t_0$. It retains the input edge
multiplicities and relation orientations throughout: both stages enumerate
their relation tables explicitly and copy edge records, one per occurrence,
without merging parallel edges or reversing endpoint order. It is
deterministic and polynomial time in the bit length of the explicit encoding
of its input, and it satisfies
$$\lvert E(T_t(G))\rvert\le 6M_{\Sigma_t}\,C_t\,\lvert E(G)\rvert$$
for the constant $M_{\Sigma_t}$ of
[[lem-alphabet-reduction-controls-size-and-degree]] attached to the input
alphabet $\Sigma_t$, while every output degree is bounded by the constant
$6M_{\Sigma_t}d_t$, which depends only on $\Sigma_\star$ and $t$. By the two
cited edgeless clauses, $T_t$ maps an edgeless graph to the edgeless graph
over $\Sigma_\star$. The definition asserts nothing
about unsatisfaction; the amplification and completeness properties of $T_t$
are separate results.

## Remarks

The alphabet is fixed before the powering parameter is chosen: $\Sigma_\star$
is used as the input alphabet of $R_t$, the intermediate alphabet
$\Sigma_t$ is a function of $t$ alone, and the alphabet reduction returns to
the same absolute alphabet $\Sigma_\star$. This is what lets the same map
$T_t$ be iterated without changing the alphabet between rounds; the later
iteration fixes one integer $t$ in the domain once and for all.

The construction is choice-free. The degree reduction, the powering, the
edge-circuit construction and the alphabet reduction are all deterministic
finite constructions, and no selection from a varying family of nonempty
sets occurs.
