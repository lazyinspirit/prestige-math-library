---
id: thm-hartogs-figure-extension
kind: theorem
title: "A holomorphic function on a Hartogs figure extends to the full bidisc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       def-hartogs-figure-and-polydisc-hull,
       lem-holomorphic-dependence-of-slice-laurent-coefficients,
       lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure,
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
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Fix $0<r,s<1$. Every holomorphic function on the Hartogs figure $H(r,s)$ admits
a unique holomorphic extension to the bidisc $\widehat H(r,s)$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on $H(r,s)$.

[L1] The Hartogs figure $H(r,s)$ and its bidisc hull $\widehat H(r,s)$ are the sets defined on the page's opening definition ([[def-hartogs-figure-and-polydisc-hull]]).

[L2] For any $\rho$ with $r<\rho<1$, define $$F_\rho(z,w):=\frac{1}{2\pi i}\int_{|\zeta|=\rho} \frac{f(\zeta,w)}{\zeta-z}\,d\zeta$$ for $|z|<\rho$ and $|w|<1$.

[L3] If $|w|<s$, then the slice $z\mapsto f(z,w)$ is holomorphic on the whole unit disc, so the one-variable Cauchy formula recovers it from the circle $|\zeta|=\rho$ whenever $|z|<\rho<1$ ([[thm-cauchy-integral-formula-circle]]).

[L4] A holomorphic function on a connected open set is determined by its values on any nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[L5] The negative Laurent coefficients of the $z$-slices vanish identically on the parameter disc ([[lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure]]), and the coefficient functions themselves are holomorphic in the parameter ([[lem-holomorphic-dependence-of-slice-laurent-coefficients]]).

[L6] A separately holomorphic function that is locally bounded is jointly holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\rho$ with $r<\rho<1$ and define $F_\rho$ by the Cauchy integral in [L2]. Since $|\zeta|=\rho$ and $|w|<1$ place $(\zeta,w)$ inside $H(r,s)$ by [L1], the integral is well defined. For fixed $z$ with $|z|<\rho$, [L2] applied to the one complex parameter $w$ makes $w\mapsto F_\rho(z,w)$ holomorphic on $|w|<1$. For fixed $w$, the same theorem applied to the one complex parameter $z$ makes $z\mapsto F_\rho(z,w)$ holomorphic on $|z|<\rho$. The ML estimate gives local bounds on compact subsets, so [L6] upgrades $F_\rho$ to a jointly holomorphic function on $\{|z|<\rho,\ |w|<1\}$. [L1, L2, L6, algebra]

2.1 If $|w|<s$, then the slice $z\mapsto f(z,w)$ is holomorphic on $|z|<1$. Therefore [L3] gives $F_\rho(z,w)=f(z,w)$ whenever $|z|<\rho$ and $|w|<s$. So $F_\rho$ extends $f$ across the missing core over that open overlap. [L3, step 1.1]

3.1 If $r<\rho_1<\rho_2<1$, then both $F_{\rho_1}$ and $F_{\rho_2}$ are holomorphic on $\{|z|<\rho_1,\ |w|<1\}$ by step 1.1, and step 2.1 shows that they agree on the nonempty open subset $\{|z|<\rho_1,\ |w|<s\}$. Hence [L4] forces $F_{\rho_1}=F_{\rho_2}$ on the whole connected domain $\{|z|<\rho_1,\ |w|<1\}$. [step 1.1, step 2.1, L4]

4.1 For each point $(z,w)\in\widehat H(r,s)$ choose any $\rho$ with $\max\{r,|z|\}<\rho<1$, and set $F(z,w):=F_\rho(z,w)$. Step 3.1 shows that this does not depend on the chosen $\rho$, so $F$ is well defined and holomorphic locally, hence holomorphic on all of $\widehat H(r,s)$. [step 3.1, construct]

5.1 Step 2.1 gives $F=f$ on the open set $\{|w|<s\}\subseteq H(r,s)$, so $F$ is a holomorphic extension of $f$ to the bidisc. If $G$ is another such extension, then $F$ and $G$ are holomorphic on the connected bidisc and agree on the same nonempty open overlap with $f$; [L4] gives $F=G$. Thus the extension is unique. [step 2.1, step 4.1, L4]

6.1 The Laurent-coefficient view in [L5] is compatible with the integral construction above: the Cauchy kernel removes the vanished negative part and rebuilds the same holomorphic continuation. [L5, step 5.1] ∎
