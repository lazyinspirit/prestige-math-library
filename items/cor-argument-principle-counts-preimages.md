---
id: cor-argument-principle-counts-preimages
kind: corollary
title: "The argument principle counts preimages of a target value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-argument-principle-null-homologous-cycle,
       def-order-of-zero-holomorphic-function,
       thm-algebra-of-complex-derivatives]
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$, let
$\Gamma$ be admissible for the residue theorem in $\Omega$, and let
$w\in\mathbb C$ satisfy $f(z)\ne w$ for every $z\in\Gamma^\ast$. Then

$$\frac{1}{2\pi i}\int_\Gamma \frac{f'(z)}{f(z)-w}\,dz=N_w(f,\Gamma)-P(f,\Gamma),$$

where

$$N_w(f,\Gamma):=\sum_{f(a)=w} n(\Gamma,a)\operatorname{ord}_a(f-w)$$

is the weighted multiplicity count of the preimages of $w$, and $P(f,\Gamma)$ is
the weighted pole count of $f$.

In particular, if $f$ is holomorphic on $\Omega$, then the pole term vanishes
and the integral counts the preimages of $w$ with multiplicity.

## Facts & Assumptions

**Given:** A meromorphic function $f$ on an open set $\Omega$, an admissible
cycle $\Gamma$, and a complex number $w$ with $f(z)\ne w$ on $\Gamma^\ast$.

[L1] The argument principle applied to a meromorphic function $g$ gives
$$\frac{1}{2\pi i}\int_\Gamma \frac{g'(z)}{g(z)}\,dz=Z(g,\Gamma)-P(g,\Gamma)$$
([[thm-argument-principle-null-homologous-cycle]]).

[L2] Derivatives ignore constants, so $(f-w)'=f'$
([[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Put $g:=f-w$. Then $g$ is meromorphic on $\Omega$, has the same poles as $f$, and has no zero on $\Gamma^\ast$ by the hypothesis on $w$. Its zeros are exactly the points $a$ with $f(a)=w$. [given, L2]

2.1 Applying [L1] to $g$ and then using [L2] gives $$\frac{1}{2\pi i}\int_\Gamma \frac{f'(z)}{f(z)-w}\,dz=\frac{1}{2\pi i}\int_\Gamma \frac{g'(z)}{g(z)}\,dz=Z(g,\Gamma)-P(g,\Gamma).$$ [step 1.1, L1, L2]

3.1 By step 1.1, the zero count $Z(g,\Gamma)$ is exactly $N_w(f,\Gamma)$ and the pole count $P(g,\Gamma)$ is exactly $P(f,\Gamma)$. Substituting that into step 2.1 proves the formula. If $f$ is holomorphic, then it has no poles, so $P(f,\Gamma)=0$. [step 1.1, step 2.1] ∎
