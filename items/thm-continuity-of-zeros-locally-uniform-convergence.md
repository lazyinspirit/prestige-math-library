---
id: thm-continuity-of-zeros-locally-uniform-convergence
kind: theorem
title: "Locally uniform convergence preserves the total multiplicity near an isolated zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-local-zero-count-via-rouche]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Theorem 5.4.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f_n:\Omega\to\mathbb C$ be
holomorphic, and suppose $f_n\to f$ locally uniformly on $\Omega$. Let
$a\in\Omega$ be an isolated zero of $f$ of multiplicity $m\ge1$. Then there is
$r>0$ such that $\overline{D(a,r)}\subseteq\Omega$, the function $f$ has no
zero on $|z-a|=r$, and for all sufficiently large $n$ the function $f_n$ has
exactly $m$ zeros in $D(a,r)$ counted with multiplicity.

## Facts & Assumptions

**Given:** Holomorphic functions $f_n$ on an open set $\Omega$ converging
locally uniformly to $f$, and an isolated zero $a$ of $f$ of multiplicity $m$.

[L1] A strict boundary perturbation preserves the total zero multiplicity in the
disc ([[cor-local-zero-count-via-rouche]]).

## Proof

**Proof technique:** direct.

1.1 By the isolated-zero hypothesis, choose $r>0$ with $\overline{D(a,r)}\subseteq\Omega$ such that $a$ is the only zero of $f$ in $\overline{D(a,r)}$. Then $|f|$ is a positive continuous function on the circle $|z-a|=r$, so it has a positive minimum there. Call that minimum $\eta$. [given]

2.1 Because $f_n\to f$ locally uniformly and the circle $|z-a|=r$ is compact, there is $N$ such that $$|f_n(z)-f(z)|<\eta\le |f(z)|\qquad(|z-a|=r,\ n\ge N).$$ Applying [L1] on that circle shows that for every $n\ge N$, the function $f_n$ has the same total zero multiplicity in $D(a,r)$ as $f$, namely $m$. [step 1.1, L1]

3.1 Step 2.1 is exactly the claimed persistence of the local multiplicity. [step 2.1] ∎
