---
id: cor-newton-leibniz-with-finitely-many-exceptional-points
kind: corollary
title: "Newton–Leibniz remains valid across finitely many exceptional interior points when the primitive is continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-newton-leibniz-with-interior-derivative, thm-additivity-over-subintervals]
justified_by: []
aliases: []
landmark: false
proof_strategy: decomposition
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I & II, Exercise 5.3.3"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a<b$, let $E\subseteq[a,b]$ be finite, and let $G:[a,b]\to\mathbb R$ be continuous. Suppose $G$ is differentiable at every point of $(a,b)\setminus E$, and let $f:[a,b]\to\mathbb R$ be Riemann integrable with

$$f(x)=G'(x)\qquad(x\in(a,b)\setminus E).$$

Then

$$\int_a^b f=G(b)-G(a).$$

Points of $E$ equal to $a$ or $b$ impose no additional condition, because the hypothesis concerns only interior derivatives.

## Facts & Assumptions

**Given:** The data in the statement.

[L1] If a continuous function on a closed interval is differentiable in its interior and its interior derivative has an integrable extension, the extension integrates to the endpoint change ([[thm-newton-leibniz-with-interior-derivative]]).

[L2] An integrable function restricts to closed subintervals, and its integral is additive over finitely many adjacent subintervals ([[thm-additivity-over-subintervals]]).

## Proof

**Proof technique:** decomposition.

1.1 List the distinct points of $E\cap(a,b)$ in increasing order as $e_1<\cdots<e_m$; if this set is empty, take $m=0$. Put $e_0=a$ and $e_{m+1}=b$. [given, choose]

1.2 On every $[e_i,e_{i+1}]$, the restriction of $G$ is continuous and differentiable throughout the open subinterval, while the restriction of $f$ is integrable and agrees there with $G'$. [given, L2]

2.1 Applying [L1] on each subinterval gives $\int_{e_i}^{e_{i+1}}f=G(e_{i+1})-G(e_i)$. [step 1.2, L1]

3.1 Summing step 2.1, using [L2], and telescoping yields $\int_a^b f=G(b)-G(a)$. [step 2.1, L2]

4.1 When $m=0$ there is one subinterval and the proof is exactly [L1]; endpoint members of $E$ never occur in an open subinterval. [step 1.1, step 2.1] ∎
