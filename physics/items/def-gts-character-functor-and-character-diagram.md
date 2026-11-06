---
id: def-gts-character-functor-and-character-diagram
kind: definition
title: Character functor and Character Diagram
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
deps:
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 1, Definition of Character Functor and Character Diagram, PDF pp. 2–3.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

A degree-$k$ **Character Functor**, for $k\ge1$, on the category of finite-dimensional Hausdorff second-countable smooth manifolds and smooth maps consists of a contravariant functor $\widehat G^k$ to abelian groups and natural maps
$$i_1:H^{k-1}(M;\mathbb R/\mathbb Z)\to\widehat G^k(M),\quad i_2:\Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M)\to\widehat G^k(M),\quad R:\widehat G^k(M)\to\Omega^k_{\mathbb Z}(M),\quad I:\widehat G^k(M)\to H^k(M;\mathbb Z).$$
Here $\Omega^j_{\mathbb Z}$ is the group of closed smooth $j$-forms with integral periods; $\alpha$ is coefficient reduction, $B$ the Bockstein, and $\rho:H^k(M;\mathbb Z)\to H^k(M;\mathbb R)$ coefficient extension. The map $\beta:H^{k-1}(M;\mathbb R)\to\Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M)$ sends a real cohomology class to any closed-form representative modulo integral-period forms; $d$ sends $[\eta]$ to $d\eta$, and $s:\Omega^k_{\mathbb Z}(M)\to H^k(M;\mathbb R)$ is the de Rham class. Require both displayed sequences in the Definition to be exact and require
$$i_1\circ\alpha=i_2\circ\beta,\qquad I\circ i_1=-B,\qquad R\circ i_2=d,\qquad \rho\circ I=s\circ R.$$
These identities, together with the two exact sequences, specify the commutative Character Diagram.

## Statement references

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

## Definition

The two exact rows are
$$0\longrightarrow H^{k-1}(M;\mathbb R/\mathbb Z)\xrightarrow{i_1}\widehat G^k(M)\xrightarrow{R}\Omega^k_{\mathbb Z}(M)\longrightarrow0$$
and
$$0\longrightarrow \Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M)\xrightarrow{i_2}\widehat G^k(M)\xrightarrow{I}H^k(M;\mathbb Z)\longrightarrow0.$$
The coefficient maps $\alpha,B,\rho$ are those of $0\to\mathbb Z\to\mathbb R\to\mathbb R/\mathbb Z\to0$. The form maps $\beta,d,s$ are defined in the Statement. A morphism of Character Functors is a natural transformation commuting with $i_1,i_2,R,I$ and acting as the identity on the adjacent coefficient and form functors.

## Definition references

[[def-gts-cheegersimons-differential-character]]

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

## Remarks

The first diagram displays the two exact rows. The following diagrams display the Bockstein, form-action, characteristic-class, curvature, and de Rham compatibility maps with the signs fixed in the Definition. They record algebraic data and are not proofs.

```tikzcd
0 \arrow[r] & H^{k-1}(M;\mathbb R/\mathbb Z) \arrow[r,"i_1"] & \widehat G^k(M) \arrow[r,"R"] & \Omega^k_{\mathbb Z}(M) \arrow[r] & 0
\\
0 \arrow[r] & \Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M) \arrow[r,"i_2"] & \widehat G^k(M) \arrow[r,"I"] & H^k(M;\mathbb Z) \arrow[r] & 0
```

```tikzcd
H^{k-1}(M;\mathbb R/\mathbb Z) \arrow[r,"i_1"] \arrow[d,"-B"'] & \widehat G^k(M) \arrow[r,"R"] \arrow[d,"\rho\circ I"] & \Omega^k_{\mathbb Z}(M) \arrow[d,"s"] \\
H^k(M;\mathbb Z) \arrow[r,"\rho"'] & H^k(M;\mathbb R) \arrow[r,equal] & H^k(M;\mathbb R)
```

```tikzcd
H^{k-1}(M;\mathbb R) \arrow[r,"\alpha"] \arrow[d,"\beta"'] & H^{k-1}(M;\mathbb R/\mathbb Z) \arrow[d,"i_1"] \\
\Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M) \arrow[r,"i_2"'] & \widehat G^k(M)
```

```tikzcd
\Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M) \arrow[r,"i_2"] \arrow[d,"d"'] & \widehat G^k(M) \arrow[r,"I"] \arrow[d,"s\circ R"] & H^k(M;\mathbb Z) \arrow[d,"\rho"] \\
\Omega^k_{\mathbb Z}(M) \arrow[r,"s"'] & H^k(M;\mathbb R) \arrow[r,equal] & H^k(M;\mathbb R)
```

