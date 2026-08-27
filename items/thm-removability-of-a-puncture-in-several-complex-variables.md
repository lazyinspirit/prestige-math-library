---
id: thm-removability-of-a-puncture-in-several-complex-variables
kind: theorem
title: "An isolated puncture is removable in complex dimension at least two"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-balls-and-polydiscs-in-complex-euclidean-space,
       thm-contour-parameter-integrals-are-holomorphic,
       thm-cauchy-integral-formula-circle,
       thm-identity-theorem-in-several-complex-variables,
       thm-locally-bounded-separate-holomorphy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Theorem 1.6.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge2$, let $\Omega\subseteq\mathbb C^m$ be a domain, let $a\in\Omega$, and
let $f:\Omega\setminus\{a\}\to\mathbb C$ be holomorphic. Then there exists a
unique holomorphic $F:\Omega\to\mathbb C$ such that
$F=f$ on $\Omega\setminus\{a\}$.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$ with $m\ge2$, a point $a=(a_1,a')\in\Omega$, and a holomorphic function $f:\Omega\setminus\{a\}\to\mathbb C$.

[L1] Every point of an open subset of $\mathbb C^m$ has a polydisc neighborhood inside that open set ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L2] A contour integral of a jointly continuous integrand that is holomorphic in the parameter variable defines a holomorphic function of that parameter ([[thm-contour-parameter-integrals-are-holomorphic]]).

[L3] The one-variable Cauchy integral formula recovers a holomorphic function on a disc from any interior circle ([[thm-cauchy-integral-formula-circle]]).

[L4] A holomorphic function on a connected open set is determined by its values on a nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[L5] A separately holomorphic function that is locally bounded is jointly holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose radii $\rho_1>\rho>0$ and $\tau>0$ with $\Delta_{\rho_1}(a_1)\times\Delta_\tau(a')\subseteq\Omega$. For $(z_1,z')$ with $|z_1-a_1|<\rho$ and $|z'-a'|<\tau$, define $$ F(z_1,z'):=\frac{1}{2\pi i}\int_{|\zeta-a_1|=\rho} \frac{f(\zeta,z')}{\zeta-z_1}\,d\zeta. $$ When $|\zeta-a_1|=\rho$ and $|z'-a'|<\tau$, the point $(\zeta,z')$ lies in $\Delta_{\rho_1}(a_1)\times\Delta_\tau(a')\setminus\{a\}$, so the integrand is well defined and continuous there. [L1, construct]

2.1 Fix all variables except one. If the free variable is $z_1$, the Cauchy kernel makes $z_1\mapsto F(z_1,z')$ holomorphic on $|z_1-a_1|<\rho$. If the free variable is one coordinate of $z'$, then [L2] applies to that single complex parameter. So $F$ is separately holomorphic on $\Delta_\rho(a_1)\times\Delta_\tau(a')$. The same integral formula gives local bounds on compact subsets, so [L5] upgrades $F$ to a jointly holomorphic function there. [L2, L5, step 1.1, algebra]

2.2 If $z'\ne a'$, then the slice $\zeta\mapsto f(\zeta,z')$ is holomorphic on the full disc $|\zeta-a_1|<\rho$, because the deleted point $a$ does not lie on that slice. Hence [L3] gives $F(z_1,z')=f(z_1,z')$ for every $|z_1-a_1|<\rho$. [step 1.1, L3]

3.1 The set $\{(z_1,z')\in P : z'\ne a'\}$ is a nonempty open subset of $P\setminus\{a\}$, and step 2.2 shows that $F$ and $f$ agree there. Both are holomorphic on the connected punctured polydisc $P\setminus\{a\}$, so [L4] forces $F=f$ on all of $P\setminus\{a\}$. [step 2.2, L4]

4.1 Thus $F$ is a holomorphic extension of $f$ across $a$ on the neighborhood $\Delta_\rho(a_1)\times\Delta_\tau(a')$. Repeating the same construction at each puncture point gives a local extension, and uniqueness on overlaps again follows from [L4]. Therefore the local extensions glue to a unique holomorphic function on all of $\Omega$. [step 2.1, step 3.1, L4] ∎
