---
id: cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number
kind: corollary
title: "An extraspecial $p$-group has order $p^{1+2n}$ for some $n\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-lagrange, def-index, def-center-of-a-group, def-quotient-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 2.40(i) and Proposition 2.41(i)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.9"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group. Then $\lvert P\rvert=p^{1+2n}$ for some
integer $n\ge1$, and $\lvert P/Z(P)\rvert=p^{2n}$. In particular no extraspecial
group has order $p^{2m}$, and none has order $p$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$.

[F1] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L1] Every extraspecial $p$-group is an internal central product of $n\ge1$ nonabelian subgroups of order $p^3$ with pairwise intersections $Z(P)$, and $\lvert P\rvert=p^{1+2n}$ ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]]).

[L2] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L3] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L4] $[G:H]:=|G/H|$, the number of left cosets of $H$ in $G$ ([[def-index]]).

## Proof

**Proof technique:** direct.

1.1 The decomposition theorem writes $P$ as an internal central product of $n\ge1$ nonabelian subgroups of order $p^{3}$ and gives $\lvert P\rvert=p^{1+2n}$. [L1]

1.2 The centre of $P$ has order $p$. [F1, L2]

2.1 Lagrange applied to $Z(P)\le P$ gives $\lvert P/Z(P)\rvert=\lvert P\rvert/p=p^{2n}$. [L3, L4, step 1.1, step 1.2]

3.1 Since $1+2n$ is odd, no extraspecial group has order an even power of $p$; and $n\ge1$ excludes the order $p$, which corresponds to $n=0$. [step 1.1, step 2.1] ∎

## Remarks

The exponent $n$ is determined by the order and therefore by the group, so it can be used as an invariant even though the decomposition producing it is not unique. That $n\ge1$ is what the nonabelian clause of the definition buys: an abelian group with a centre of order $p$ would be the cyclic group of order $p$, of order $p^{1+2\cdot0}$.
