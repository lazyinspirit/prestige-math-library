---
id: lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood
kind: lemma
title: "A fine Euclidean approximation lands in a prescribed tubular neighbourhood"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-positive-continuous-error-function-for-strong-approximation,
       thm-whitney-approximation-for-euclidean-valued-maps,
       thm-euclidean-tubular-neighbourhood-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $j:N\hookrightarrow\mathbb R^m$ be a closed embedded smooth submanifold with
tubular neighbourhood $U$, and let $F:M\to N$ be continuous. Then there exists
a positive continuous error function $\varepsilon$ on $M$ such that every smooth
map $\widetilde H:M\to\mathbb R^m$ satisfying
$$
\|\widetilde H(p)-j(F(p))\|<\varepsilon(p)
$$
for all $p$ has image contained in $U$.

## Facts & Assumptions

**Given:** A continuous map $F:M\to N$ and a tubular neighbourhood $U$ of the embedded image $j(N)\subseteq\mathbb R^m$.

[F1] A positive continuous error function is a continuous map into $(0,\infty)$ ([[def-positive-continuous-error-function-for-strong-approximation]]).

[L1] Euclidean embedded submanifolds admit tubular neighbourhoods ([[thm-euclidean-tubular-neighbourhood-theorem]]).

## Proof
**Proof technique:** direct.

1.1 For each $p\in M$, the point $j(F(p))$ lies in the open set $U$, so its Euclidean distance to the closed complement $\mathbb R^m\setminus U$ is positive. Define $$\varepsilon(p):=\frac{1}{2}\operatorname{dist}\!\bigl(j(F(p)),\mathbb R^m\setminus U\bigr).$$ Because $j\circ F$ is continuous and the distance-to-a-fixed-closed-set function is continuous, [F1] shows that $\varepsilon$ is a positive continuous error function. [F1, L1, given, construct]

2.1 If $\|\widetilde H(p)-j(F(p))\|<\varepsilon(p)$, then $\widetilde H(p)$ lies in the open Euclidean ball of radius $\varepsilon(p)$ around $j(F(p))$. By the definition of $\varepsilon(p)$, that ball is contained in $U$. Hence $\widetilde H(p)\in U$. [step 1.1, algebra]

3.1 Therefore every approximation with error bound $\varepsilon$ lands in the prescribed tubular neighbourhood $U$. [step 2.1] ∎
