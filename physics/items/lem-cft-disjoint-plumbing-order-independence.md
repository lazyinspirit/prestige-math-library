---
id: lem-cft-disjoint-plumbing-order-independence
kind: lemma
title: Order independence of disjoint analytic plumbing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-plumbing-and-sewing-parameter
  - lem-cft-plumbing-local-smoothing-node
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  lem-cft-plumbing-local-smoothing-node: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§1.2 and §4.1 for finite multi-pair plumbing on pairwise disjoint coordinate neighborhoods; the order-independence verification is local below."
---

## Statement

Let $C$ be a pointed compact analytic worldsheet with a finite list of pairwise disjoint marked coordinate pairs $(z_j,w_j)$, and choose independent parameters $q_j$ with $|q_j|<r_js_j$ in their declared coordinate disks. For any permutation of the list, plumbing the pairs successively in that order gives the same simultaneous plumbing family up to the canonical biholomorphism that is the identity on the unchanged complement and on every labeled local plumbing chart. Parameters, remaining marked points and their local coordinates are preserved. This includes $q_j=0$, where the corresponding fiber has the local nodal model.

## Statement references

[[def-cft-plumbing-and-sewing-parameter]]

[[lem-cft-plumbing-local-smoothing-node]]

## Facts & Assumptions

**Given:** A finite list of pairwise disjoint marked coordinate pairs, their coordinate radii, and independent plumbing parameters in the polydisk of the Definition.

[F1] [[def-cft-plumbing-and-sewing-parameter]]: each pair is replaced by the local fixture $z_jw_j=q_j$, with annulus identifications for $q_j\ne0$ and the nodal equation at $q_j=0$; distinct pairs have disjoint neighborhoods and independent parameters.

[F2] [[lem-cft-plumbing-local-smoothing-node]]: every nonzero local fiber is a smooth annulus, while the central local fiber is the reduced node $z_jw_j=0$.

## Proof

1.1 Form the disjoint union of the original complement with one local fixture for each pair. For pair $j$, let $R_j$ be the relation identifying its two fixture boundary circles with the corresponding boundary circles in the original complement, using the declared $z_j$ and $w_j$ coordinates. Each $R_j$ is supported only on the $j$th pair's coordinate neighborhoods and fixture. Pairwise disjointness means that no point in the support of $R_j$ lies in the support of $R_k$ for $j\ne k$. Thus quotienting by any initial segment of the relations leaves every remaining boundary identification unchanged, and every successive order produces the quotient by the same union of seam relations. The resulting point sets and quotient maps are canonically identified by the identity on each labeled piece. [given, F1, construct, algebra]

2.1 On the complement and every fixture, the charts are the same in each order. At a nonzero seam, the only new coordinate transition is $w_j=q_j/z_j$ or its inverse, holomorphic because both coordinates are nonzero there; [F2] supplies the smooth-annulus and nodal local models at every parameter. No transition compares distinct plumbing neighborhoods. Therefore the canonical identity between the quotients preserves every chart and is biholomorphic, and it fixes the parameters, remaining marks and their local coordinates. [given, F1, F2, step 1.1, algebra] ∎

## Sewing-order diagram

For two disjoint pairs, the diagram records the two orders. Its commutativity follows from the common quotient relation proved above, not from the drawing.

```tikzcd
\mathcal C_0 \arrow[r,"\mathrm{sew}_1"] \arrow[d,"\mathrm{sew}_2"'] & \mathcal C_1 \arrow[d,"\mathrm{sew}_2"] \\
\mathcal C_2 \arrow[r,"\mathrm{sew}_1"'] & \mathcal C_{12}
```

Here $\mathcal C_0$ is the original surface with both pairs, $\mathcal C_1$ and $\mathcal C_2$ are the intermediate surfaces after the indicated first plumbing, and $\mathcal C_{12}$ is the simultaneous plumbing family.
