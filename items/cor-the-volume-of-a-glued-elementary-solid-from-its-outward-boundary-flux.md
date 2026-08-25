---
id: cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux
kind: corollary
title: "The volume of a glued elementary solid is a third of the outward flux of the position field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, def-divergence-and-curl-of-a-c1-vector-field, thm-jordan-content-and-indicator-integrability, def-riemann-integral-over-a-jordan-set, def-finite-gluing-of-elementary-solid-regions, lem-internal-faces-cancel-when-elementary-solid-regions-are-glued, def-euclidean-inner-product, thm-multidimensional-integral-properties, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts), Example 4.2"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$, and let $P$ be the position field $P(p)=p$ on $\mathbb R^3$. Then the content of the solid is a third of the outward flux of the position field through its boundary:

$$\operatorname{cont}(E)=\frac13\iint_{\partial E}\langle P,n\rangle.$$

Moreover each of the three single-coordinate fields $p\mapsto p_xe_x$, $p\mapsto p_ye_y$ and $p\mapsto p_ze_z$ satisfies

$$\iint_{\partial E}\langle p_ke_k,n\rangle=\operatorname{cont}(E)\qquad(k\in\{x,y,z\}).$$

## Facts & Assumptions

**Given:** The finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$, and the position field $P$.

[F1] The divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] For $f=1$ the zero extension is $1_E$, so $\int_E1=\operatorname{cont}(E)$ ([[def-riemann-integral-over-a-jordan-set]], [[thm-jordan-content-and-indicator-integrability]]).

[F3] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$, and $e_k$ has $k$th coordinate $1$ and the others $0$ ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[L1] For a finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$ and a $C^1$ field $G$ on an open set containing $E$, $\iiint_E\operatorname{div}G=\iint_{\partial E}\langle G,n\rangle$ ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

[L2] For a finite gluing, $E$ is compact and Jordan measurable ([[lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]], [[def-finite-gluing-of-elementary-solid-regions]]).

[L3] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$ ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 The position field has $P_k(p)=p_k$, so $\partial_iP_k$ is $1$ when $i=k$ and $0$ otherwise; these are continuous on $\mathbb R^3$, so $P$ is $C^1$ there and [F1] gives $\operatorname{div}P=1+1+1=3$ at every point. By [L2] the set $E$ is compact and Jordan measurable, so $\int_E1=\operatorname{cont}(E)$ by [F2]. [given, F1, F2, L2]

1.2 For each $k$ the field $p\mapsto p_ke_k$ has $k$th coordinate $p_k$ and the other two coordinates $0$ by [F3], so its only nonvanishing first partial derivative is $\partial_kp_k=1$; it is therefore $C^1$ on $\mathbb R^3$ with divergence $1$ by [F1]. [given, F1, F3]

2.1 Applying [L1] with $G=P$, which is $C^1$ on the open set $\mathbb R^3\supseteq E$, gives $\iint_{\partial E}\langle P,n\rangle=\int_E\operatorname{div}P=\int_E3$, and by [L3] with $\alpha=3$, $\beta=0$ and step 1.1 this is $3\int_E1=3\operatorname{cont}(E)$. Dividing by $3$ gives the first identity. [step 1.1, L1, L3]

2.2 Applying [L1] with $G$ the field $p\mapsto p_ke_k$ of step 1.2 gives $\iint_{\partial E}\langle p_ke_k,n\rangle=\int_E1=\operatorname{cont}(E)$ by step 1.1, for each of the three directions $k$. [step 1.1, step 1.2, L1]

3.1 Steps 2.1 and 2.2 are the asserted identities. [step 2.1, step 2.2] ∎

## Remarks

- **The solid is Jordan measurable because its pieces are, not by assumption.** Step 1.1 takes that from [L2]; without it the symbol $\operatorname{cont}(E)$ would not denote anything and $\int_E1$ would not exist.

- **The orientation is what fixes the sign.** Reversing every patch of the presentation negates the right-hand sides and would give a negative content. That the presentation of a glued elementary solid carries the outward normal is [[cor-every-face-of-an-elementary-solid-region-is-outward-oriented]] applied to each piece, and the companion examples page checks the sign against the known volume of a ball.
