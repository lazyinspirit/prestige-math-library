---
id: thm-newton-leibniz-with-interior-derivative
kind: theorem
title: "Newton–Leibniz needs only continuity on $[a,b]$, differentiability on $(a,b)$, and a Riemann-integrable extension of the interior derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-mean-value-theorem, def-darboux-integral, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: true
proof_strategy: squeeze
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 12"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf"
    - title: "J. Lebl, Basic Analysis I & II, Section 5.3"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and

$$f(x)=G'(x)\qquad(a<x<b),$$

then

$$\int_a^b f=G(b)-G(a).$$

No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Facts & Assumptions

**Given:** Reals $a<b$, a continuous $G:[a,b]\to\mathbb R$ differentiable on $(a,b)$, and an integrable $f$ agreeing there with $G'$.

[L1] If a function is continuous on $[u,v]$ and differentiable on $(u,v)$, then some $\xi\in(u,v)$ satisfies $G(v)-G(u)=G'(\xi)(v-u)$ ([[cor-mean-value-theorem]]).

[L2] For a partition $P=(t_0,\ldots,t_m)$, the lower and upper Darboux sums are obtained by multiplying each subinterval length by the infimum and supremum of $f$ there ([[def-partition-and-refinement]], [[def-darboux-integral]]).

[L3] If $f$ is integrable with integral $I$, then every lower sum is at most $I$ and every upper sum is at least $I$ ([[def-darboux-integral]]).

## Proof

**Proof technique:** squeeze.

1.1 Fix a partition $P=(t_0,\ldots,t_m)$ of $[a,b]$. For each $i<m$, [L1] gives $\xi_i\in(t_i,t_{i+1})$ such that $G(t_{i+1})-G(t_i)=f(\xi_i)(t_{i+1}-t_i)$. [given, L1]

2.1 If $m_i$ and $M_i$ are the infimum and supremum of $f$ on $[t_i,t_{i+1}]$, then $m_i(t_{i+1}-t_i)\le G(t_{i+1})-G(t_i)\le M_i(t_{i+1}-t_i)$. [step 1.1, L2]

3.1 Summing step 2.1 and telescoping the increments of $G$ gives $L(f,P)\le G(b)-G(a)\le U(f,P)$. [step 2.1, L2]

4.1 Taking the supremum of the lower sums and the infimum of the upper sums, which coincide because $f$ is integrable, yields $\int_a^b f=G(b)-G(a)$. [step 3.1, L3]

5.1 Every $\xi_i$ lies in an open subinterval, so neither endpoint derivative nor either endpoint value of $f$ was used. [step 1.1] ∎
