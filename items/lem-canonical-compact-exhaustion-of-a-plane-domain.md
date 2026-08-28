---
id: lem-canonical-compact-exhaustion-of-a-plane-domain
kind: lemma
title: "Every plane domain has the canonical nested compact exhaustion by distance and radius cutoffs"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-domain, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a plane domain, and define for $n\ge1$
$$K_n:=\{z\in\Omega:|z|\le n\text{ and }\operatorname{dist}(z,\partial\Omega)\ge1/n\},$$
with the convention $\operatorname{dist}(z,\varnothing)=\infty$ when
$\Omega=\mathbb C$. Then each $K_n$ is compact, one has
$$K_n\subseteq \operatorname{int}K_{n+1},$$
and
$$\Omega=\bigcup_{n\ge1}K_n.$$

## Facts & Assumptions

**Given:** A plane domain $\Omega$ and the sets $K_n=\{z\in\Omega:|z|\le n\text{ and }\operatorname{dist}(z,\partial\Omega)\ge1/n\}$.

[L1] Closed and bounded subsets of $\mathbb R^2\cong\mathbb C$ are compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Each $K_n$ is bounded by $|z|\le n$ and closed because limits preserve both the radius bound and the distance-to-boundary inequality, so [L1] makes each $K_n$ compact; early members are allowed to be empty. [L1, given]

1.2 If $z\in K_n$, then $|z|<n+1$ and $\operatorname{dist}(z,\partial\Omega)>1/(n+1)$, so a small disc about $z$ stays inside $K_{n+1}$. Hence $K_n\subseteq\operatorname{int}K_{n+1}$. [given, algebra]

2.1 If $z\in\Omega$, openness gives a closed disc $\overline D(z,r)\subseteq\Omega$; choosing $n>|z|$ and $1/n<r$ puts $z$ in $K_n$. Therefore $\bigcup_{n\ge1}K_n=\Omega$. [given, choose] ∎
