---
id: thm-upper-and-lower-central-characterizations-of-nilpotence
kind: theorem
title: "Nilpotence via central series, the upper central series, and the lower central series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-subnormal-normal-series-refinement-and-equivalence, def-subgroup-commutator-and-lower-central-series, def-upper-central-series, def-nilpotent-group-and-nilpotency-class, lem-central-series-commutator-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

For a group $G$ and $c\in\mathbb N$, the following are equivalent:

1. $G$ has a central series $1=H_0\le\cdots\le H_c=G$;
2. $Z_c(G)=G$;
3. $\gamma_{c+1}(G)=1$.

Hence $G$ is nilpotent exactly when its lower central series reaches $1$, and the least such $c$ is its nilpotency class.

## Facts & Assumptions

**Given:** A group $G$ and $c\in\mathbb N$.

[F1] $\gamma_1(G)=G$ and $\gamma_{r+1}(G)=[G,\gamma_r(G)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[F2] $Z_0(G)=1$ and $Z_{r+1}(G)/Z_r(G)=Z(G/Z_r(G))$ ([[def-upper-central-series]]).

[F3] $G$ is nilpotent of class $c$ exactly when $c$ is least with $Z_c(G)=G$ ([[def-nilpotent-group-and-nilpotency-class]]).

[L1] A chain $1=H_0\le\cdots\le H_c=G$ is central exactly when $[G,H_{i+1}]\le H_i$ for every $i<c$ ([[lem-central-series-commutator-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Let $1=H_0\le\cdots\le H_c=G$ be central. Inductively, $H_i\le Z_i(G)$: the base is $H_0=Z_0(G)=1$, and [L1] says $[G,H_{i+1}]\le H_i\le Z_i(G)$, so the quotient criterion places $H_{i+1}/Z_i(G)$ in $Z(G/Z_i(G))$, hence $H_{i+1}\le Z_{i+1}(G)$. [assume-hyp, F2, L1]

1.2 For any central series as above, descending induction gives $\gamma_{c-i+1}(G)\le H_i$: at $i=c$, $\gamma_1(G)=G=H_c$; if $\gamma_{c-i+1}(G)\le H_i$, then $\gamma_{c-i+2}(G)=[G,\gamma_{c-i+1}(G)]\le[G,H_i]\le H_{i-1}$ by [L1]. [F1, L1]

1.3 Conversely, if $\gamma_{c+1}(G)=1$, the reversed lower central chain $1=\gamma_{c+1}(G)\le\gamma_c(G)\le\cdots\le\gamma_1(G)=G$ is central because $[G,\gamma_{r}(G)]=\gamma_{r+1}(G)$; [L1] applies at every adjacent pair. [assume-hyp, F1, L1]

2.1 At $i=c$, step 1.1 gives $G=H_c\le Z_c(G)\le G$, so $Z_c(G)=G$. Conversely, the upper central chain $1=Z_0(G)\le\cdots\le Z_c(G)=G$ is central by [F2] and [L1]. [step 1.1, F2, L1]

2.2 Taking $i=0$ in step 1.2 gives $\gamma_{c+1}(G)\le H_0=1$. [step 1.2]

3.1 Steps 2.1 and 2.2 show that a central series is equivalent to both upper-central termination and lower-central termination, while step 1.3 constructs a central series from lower-central termination. Taking least $c$ and using [F3] identifies the nilpotency class with the lower-central termination index. [step 2.1, step 2.2, step 1.3, F3] ∎
