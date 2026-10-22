---
id: lem-cyclically-ordered-knot-marks-can-be-aligned-by-ambient-isotopy
kind: lemma
title: "Cyclically ordered knot marks can be aligned by ambient isotopy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-knot-normal-circle-bundle-trivialization
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular neighborhoods; the finite circle interpolation and ambient product extension are proved explicitly here"
---

## Statement

Assume Countable Choice. Let two smooth oriented knots in $S^3$ be orientation-preservingly ambient isotopic, and let each carry the same finite number of distinct labelled marks. Suppose their cyclic label orders along the oriented knots agree. There is an orientation-preserving ambient diffeomorphism, isotopic to the identity, carrying the first oriented knot and every one of its marks to the corresponding second knot and mark. After the supplied knot isotopy, the remaining mark adjustment can be supported in an arbitrarily small tubular neighborhood of the second knot and preserves that knot setwise throughout. Any supplied finite embedded surfaces, attaching systems and actual arcs are transported by this same ambient map; their incidence and pairing conditions are preserved.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy]]

## Facts & Assumptions

**Given:** The oriented knot isotopy and the two finite marked cyclic lists with matching label order.

[F1] The supplied oriented ambient isotopy is a smooth ambient diffeomorphism isotopy carrying the oriented knot. ([[def-oriented-link-in-s-three-and-ambient-isotopy]])

[F2] The oriented normal bundle of a smooth knot has a smooth oriented frame, constructed by finite interval trivializations and paths in $\mathrm{GL}^+(2,\mathbb R)$. Under Countable Choice its compact normal zero section has a tubular neighborhood. Together these supply a product $S^1\times D^2$ of arbitrarily small constant radius. ([[lem-knot-normal-circle-bundle-trivialization]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]])

[F3] Smooth local inverses exist with parameters by adjoining the parameter coordinates. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

## Proof

**Given:** The data in the Statement.

1.1 Apply the time-one map of the supplied isotopy and work on its target oriented knot $K$. Parametrize it by $\mathbb R/L\mathbb Z$. Lift the first marked cyclic list to $a_1<\cdots<a_n<a_1+L$ and the target list to $b_1<\cdots<b_n<b_1+L$, with corresponding labels, putting $a_{n+1}=a_1+L$ and $b_{n+1}=b_1+L$. Choose a constant $c>0$ smaller than every ratio $(b_{i+1}-b_i)/(a_{i+1}-a_i)$. On each open interval $(a_i,a_{i+1})$ choose a nonnegative smooth bump $\psi_i$ of integral one, supported away from its ends. Define the positive $L$-periodic smooth function $$d(s)=c+\sum_{i=1}^n\bigl(b_{i+1}-b_i-c(a_{i+1}-a_i)\bigr)\psi_i(s).$$ Its integral on the $i$th interval is $b_{i+1}-b_i$, and its integral over a full period is $L$. Hence $H(s)=b_1+\int_{a_1}^s d(u)\,du$ is a smooth increasing lift with $H(a_i)=b_i$ and $H(s+L)=H(s)+L$. It induces the required orientation-preserving knot diffeomorphism. The interpolation $H_t(s)=(1-t)s+tH(s)$ has positive derivative and the same periodicity, so descends to a smooth circle isotopy from the identity. For an empty list the identity is sufficient. [F1, given, construct, algebra]

2.1 Choose a sufficiently small tubular product from [F2] and a radial smooth cutoff $\chi(|z|^2)$ equal to one near its zero section and zero near its boundary. Define $$\Phi_t(s,z)=\bigl(H_{t\chi(|z|^2)}(s),z\bigr).$$ This is well-defined modulo $L$. For every fixed $z$ its first component is an increasing circle diffeomorphism, and its full differential is block triangular with positive longitudinal derivative and identity normal block. Its inverse is the corresponding circle inverse at that $z$, smooth by [F3]. Thus it is an orientation-preserving diffeomorphism of the tube, equal to the identity near its boundary, and extends by the identity to $S^3$. The maps form an ambient isotopy, preserve the zero section as an oriented knot, and at time one send every $a_i$ to $b_i$. They have the asserted arbitrarily small support. [F2, F3, step 1.1, construct, algebra]

3.1 Compose the isotopy of step2.1 with the original supplied knot isotopy from step1.1. Its time-one diffeomorphism has the required knot and labelled-mark action. Carry every other supplied embedded object by this SAME map. A diffeomorphism preserves disjointness, transverse intersections, disk boundaries, compression cut components, oriented arc pairing and simultaneous bridge disks by its restriction to those actual objects and their collars. Thus all claimed incidence and diagram-transport properties hold. Countable Choice is used only by the tubular supplier; the interpolation and all other selections were finite. [F1, F2, step 1.1, step 2.1, construct] ∎
