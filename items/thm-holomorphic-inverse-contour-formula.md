---
id: thm-holomorphic-inverse-contour-formula
kind: theorem
title: "A contour formula for a locally single-valued holomorphic inverse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-weighted-argument-principle,
       cor-argument-principle-counts-preimages]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4 discussion after Theorem 5.4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be holomorphic on $\Omega$, let
$\Gamma$ be a closed complex contour null-homologous in $\Omega$, and let
$w\in\mathbb C$ satisfy $f(z)\ne w$ for every $z\in\Gamma^\ast$. Suppose
$f(z)=w$ has exactly one solution $a$ inside $\Gamma$, that solution is
simple, and $n(\Gamma,a)=1$. Then

$$a=\frac{1}{2\pi i}\int_\Gamma \frac{\zeta f'(\zeta)}{f(\zeta)-w}\,d\zeta.$$

Thus, on a contour enclosing exactly one simple preimage branch, the inverse
value is recovered by a contour integral.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on an open set $\Omega$, a closed null-homologous contour $\Gamma$, and a value $w$ satisfying the hypotheses of the statement.

[L1] The weighted argument principle multiplies each zero contribution by the value of the holomorphic test function there ([[thm-weighted-argument-principle]]).

[L2] The preimage-count corollary identifies the zeros of $f-w$ inside $\Gamma$ ([[cor-argument-principle-counts-preimages]]).

## Proof

**Proof technique:** direct.

1.1 Because $f$ is holomorphic, the meromorphic function $f-w$ has no poles. The hypotheses say that its only zero inside $\Gamma$ is the simple zero $a$. [given]

2.1 Apply [L1] to the meromorphic function $f-w$ and the holomorphic test function $g(\zeta)=\zeta$. By step 1.1, there is only one zero contribution, its multiplicity is $1$, and the additional hypothesis $n(\Gamma,a)=1$ makes that contribution exactly $a$. The left-hand side is exactly the displayed contour integral. [step 1.1, L1]

3.1 Therefore the contour integral equals $a$. The role of [L2] is to identify the unique enclosed zero as the unique preimage of $w$. [step 1.1, step 2.1, L2] ∎
