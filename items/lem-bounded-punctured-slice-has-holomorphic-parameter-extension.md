---
id: lem-bounded-punctured-slice-has-holomorphic-parameter-extension
kind: lemma
title: "A locally bounded punctured slice has a holomorphic parameter extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-removable-singularity-characterizations,
       thm-contour-parameter-integrals-are-holomorphic,
       thm-cauchy-integral-formula-circle,
       thm-locally-bounded-separate-holomorphy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Theorem 1.6.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge2$, let $\rho,R>0$, let
$U:=\Delta_\rho(0)\subseteq\mathbb C^{m-1}$, and let
$f:U\times\{0<|w|<R\}\to\mathbb C$ be holomorphic. Assume that for some
$0<\eta<R$ the restriction of $f$ to $U\times\{0<|w|<\eta\}$ is bounded.
Define

$$ F(z'):=\frac{1}{2\pi i}\int_{|\zeta|=\eta}\frac{f(z',\zeta)}{\zeta}\,d\zeta. $$

Then $F$ is holomorphic on $U$, and for every fixed $z'\in U$ the one-variable
slice $w\mapsto f(z',w)$ extends holomorphically to $|w|<R$ with value
$F(z')$ at $w=0$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on
$U\times\{0<|w|<R\}$, bounded on $U\times\{0<|w|<\eta\}$ for some
$0<\eta<R$.

[L1] A punctured-disc holomorphic function extends across the centre exactly
when it is bounded near that centre
([[thm-removable-singularity-characterizations]]).

[L2] A contour integral of a jointly continuous integrand that is holomorphic in
the parameter variable defines a holomorphic function of that parameter
([[thm-contour-parameter-integrals-are-holomorphic]]).

[L3] The one-variable Cauchy integral formula recovers a holomorphic function on
a disc from a circle inside it ([[thm-cauchy-integral-formula-circle]]).

[L4] A separately holomorphic function that is locally bounded is jointly
holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z'\in U$. The slice $w\mapsto f(z',w)$ is holomorphic on the punctured disc $0<|w|<R$ and bounded on $0<|w|<\eta$. Therefore [L1] gives a holomorphic extension $g_{z'}$ to the full disc $|w|<R$. [given, L1]

1.2 Fix one coordinate of $z'$ and hold the others fixed. For $|\zeta|=\eta$ the integrand $(z',\zeta)\mapsto f(z',\zeta)/\zeta$ is jointly continuous in that parameter and $\zeta$, and for fixed $\zeta$ it is holomorphic in the chosen coordinate. So [L2] makes $F$ separately holomorphic on $U$. The same circle formula gives local bounds on compact subsets of $U$, so $F$ is locally bounded there. [given, L2, algebra]

2.1 Applying [L3] to the holomorphic function $g_{z'}$ on the circle $|\zeta|=\eta$ gives $$ g_{z'}(0)=\frac{1}{2\pi i}\int_{|\zeta|=\eta}\frac{f(z',\zeta)}{\zeta}\,d\zeta =F(z'). $$ So $F(z')$ is exactly the removable value of the slice at $w=0$. [step 1.1, L3]

3.1 Step 2.1 identifies $F(z')$ with the extension value at $w=0$ for every $z'$. Step 1.2 makes $F$ separately holomorphic and locally bounded, so [L4] upgrades it to a holomorphic function on $U$. [step 2.1, step 1.2, L4] ∎
