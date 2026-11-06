---
id: def-gts-smooth-deligne-cohomology-model
kind: definition
title: Smooth Deligne cohomology model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
deps:
  - def-gts-cheegersimons-differential-character
  - def-de-rham-cochain-complex
  - thm-de-rham-theorem
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - lem-cech-differential-squares-zero
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-refinement-map-independent-on-cohomology
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-de-rham-cochain-complex: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-cech-cochain-complex-open-cover: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  lem-cech-differential-squares-zero: mathematical-premise
  thm-cech-to-sheaf-cohomology-comparison: mathematical-premise
  thm-refinement-map-independent-on-cohomology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Sections 3.1–3.2, PDF pp. 32–41; Definitions 3.19 and 3.21.
    - title: Michael K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Section 11, PDF pp. 14–15, Deligne cocycle convention.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Fix a good open cover of a finite-dimensional Hausdorff second-countable smooth manifold $M$ without boundary. In degree $k\ge1$, smooth Deligne cohomology is the degree-$k$ hypercohomology of the cohomological complex of sheaves $\mathbb Z\to\Omega^0\to\Omega^1\to\cdots\to\Omega^{k-1}$, with $\mathbb Z$ in degree $0$ and $\Omega^j$ in degree $j+1$. Equivalently it is degree-$(k-1)$ hypercohomology of the shifted complex of smooth circle-valued functions and real forms, $C^\infty(-,U(1))\xrightarrow{d\log/(2\pi i)}\Omega^1\to\cdots\to\Omega^{k-1}$, with $U(1)=\mathbb R/\mathbb Z$ under $t\mapsto e^{2\pi i t}$. For $k=1$ this circle-valued complex consists of $C^\infty(-,U(1))$ alone in degree $0$, with zero differential; for $k\ge2$, its degree-$j$ term is $\Omega^j$ for $1\le j\le k-1$, and all other terms are zero.

## Definition references

[[def-de-rham-cochain-complex]]

[[def-cech-cochain-complex-open-cover]]

[[def-cech-cohomology-open-cover]]

## Definition

A good cover here means an ordered locally finite open cover $\mathcal U=(U_i)$ such that every nonempty finite intersection admits a smooth contraction to a point, together with a chosen smooth partition of unity subordinate to $\mathcal U$. The sheaf $\mathcal U(1)$ assigns to an open set $V$ the abelian group $C^\infty(V,U(1))$, with restrictions by composition and pointwise multiplication. The first map in the integer-form complex is inclusion of locally constant integer functions into smooth real functions; the later maps are the exterior derivative.

Use cohomological grading. For a cochain map $g:C^\bullet\to D^\bullet$, set $\operatorname{Cone}(g)^n=C^{n+1}\oplus D^n$ with differential $(x,y)\mapsto(-d_Cx,d_Dy-gx)$, and set $K[-1]^n=K^{n-1}$ with differential $-d_K$. The stupid truncation $\sigma_{\ge k}\Omega^\bullet$ has term $\Omega^j$ for $j\ge k$ and zero for $j<k$; $\sigma_{<k}\Omega^\bullet$ has term $\Omega^j$ for $j<k$ and zero for $j\ge k$, with the differential out of degree $k-1$ set to zero. The equivalent cone model is $\mathcal D_k=\operatorname{Cone}(f)[-1]$, with $f:\mathbb Z\oplus\sigma_{\ge k}\Omega^\bullet\to\Omega^\bullet$ given by $f(z,\alpha)=z-\alpha$. Projection to $\operatorname{Cone}(\mathbb Z\to\sigma_{<k}\Omega^\bullet)[-1]$ is a quasi-isomorphism: its kernel is $\operatorname{Cone}(-\mathrm{id}_{\sigma_{\ge k}\Omega^\bullet})[-1]$, which is contractible. The projected complex has $\mathbb Z$ in degree $0$ and $\Omega^j$ in degree $j+1$ for $0\le j<k$; multiplying the $\Omega^j$ term by $(-1)^j$ gives the integer-form differential with first map inclusion and later maps $d$. The Cech total complex has terms $\operatorname{Tot}^n=\bigoplus_{p+q=n}C^p(\mathcal U,\mathcal D_k^q)$ and differential $\delta_{\mathrm{Cech}}+(-1)^p d_{\mathcal D}$ on bidegree $(p,q)$. Its degree-$k$ cohomology is the stated model. Refinement maps are induced by cover refinement; the resulting map on cohomology is independent of the refinement function. The alternative circle-valued complex is obtained from the exponential sequence of sheaves $0\to\mathbb Z\to\Omega^0\to\mathcal U(1)\to0$; for $k\ge2$ its first differential is $d\log(g)=(2\pi i)^{-1}g^{-1}dg$, whereas for $k=1$ there is no form term or outgoing differential. The characteristic map $I$ and curvature map $R$ are the projections induced by the cone model; $a$ is the connecting map from the form component. These are model definitions; exactness under the explicit good-cover Cech-to-singular comparison input is stated separately in the Remarks.

## Remarks

This definition fixes the Deligne grading and normalization. Conditional exactness under the good-cover Cech-to-singular comparison input is treated in [[lem-gts-deligne-exact-sequences]]. Equivalence with the smooth-singular Cheeger–Simons character model is a separate theorem, [[lem-gts-deligne-character-comparison]], whose local proof requires the explicitly named geometric input in this batch.
