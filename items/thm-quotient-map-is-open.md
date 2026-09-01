---
id: thm-quotient-map-is-open
kind: theorem
title: "The quotient map sends every open ball onto a set containing the corresponding quotient ball"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-vector-space-coset-notation, def-quotient-seminorm,
       thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Let $X$ be a normed space, let $M \le X$ be closed, and let
$q:X\to X/M$ be the quotient map. Then for every $x_0 \in X$ and every $r>0$,

$$q(B_X(x_0,r)) \supseteq B_{X/M}(q(x_0),r).$$

In particular, $q$ is an open map.

## Facts & Assumptions

**Given:** A normed space $X$, a closed linear subspace $M \le X$, a vector
$x_0 \in X$, a real $r>0$, and a coset $\xi \in X/M$.

[L1] The quotient map is $q(x)=x+M$, and addition of cosets is inherited from
the vector-space quotient ([[def-quotient-vector-space-coset-notation]]).

[L2] The quotient norm is
$\|x+M\|_{X/M} = \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).

[L3] Because $M$ is closed, the quotient seminorm is an honest norm on $X/M$
([[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 First take $x_0=0$. Let $\xi = x+M$ satisfy $\|\xi\|_{X/M}<r$. By [L2], choose $m \in M$ with $\|x+m\|<r$. Then $x+m \in B_X(0,r)$ and $q(x+m)=x+m+M=x+M=\xi$ by [L1]. Hence $B_{X/M}(0,r) \subseteq q(B_X(0,r))$. [L1, L2, L3, choose]

2.1 For general $x_0$, a coset $\xi$ lies in $B_{X/M}(q(x_0),r)$ exactly when $\xi-q(x_0) \in B_{X/M}(0,r)$. By step 1.1 there is $u \in B_X(0,r)$ with $q(u)=\xi-q(x_0)$. Then $q(x_0+u)=q(x_0)+q(u)=\xi$, and $x_0+u \in B_X(x_0,r)$. Therefore $q(B_X(x_0,r)) \supseteq B_{X/M}(q(x_0),r)$. [step 1.1, L1]

3.1 Every open ball in $X$ has image containing an open ball in $X/M$, so $q$ is open. [step 2.1, L3] ∎
