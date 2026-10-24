---
id: def-pontryagin-classes-by-complexification
kind: definition
title: Pontryagin classes by complexification
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-chern-classes-from-the-projective-bundle-relation, prop-complexification-is-conjugation-invariant, cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
axiom_strength: "ZF + AC; inherited from the Chern-class construction."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Definition of Pontryagin classes, printed pp.94-96"
verification:
  audited: 2026-09-22
---

## Definition

Assume AC. Let $E\to B$ be a real vector bundle of rank $n$ over a path-connected
CW base (or a CW-type base), with complexification $E_{\mathbb C}$ and Chern
classes $c_i(E_{\mathbb C})\in H^{2i}(B;\mathbb Z)$ in the sense of
[[def-chern-classes-from-the-projective-bundle-relation]]. The **Pontryagin
classes** of $E$ are defined by
$$p_i(E):=(-1)^i\,c_{2i}(E_{\mathbb C})\in H^{4i}(B;\mathbb Z)\qquad(i\geq0),$$
completed by the conventions $p_0(E):=1$ and $p_i(E):=0$ whenever
$2i>n=\operatorname{rank}_{\mathbb R}E$; the **total Pontryagin class** is the
finite sum $p(E):=\sum_{i\geq0}p_i(E)$.

The definition is well defined and requires no orientation of $E$: the
complexification $E_{\mathbb C}$ is determined by $E$ up to canonical
isomorphism, so its even Chern classes are determined, and the sign $(-1)^i$
is a fixed normalization (it makes $p_i$ of a line vanish and makes the top
class $p_n$ of an oriented rank-$2n$ bundle equal to $e(E)^2$ in the next
items). When $E$ is numerable and $B$ is a path-connected paracompact
Hausdorff CW complex, the odd Chern classes of $E_{\mathbb C}$ are two-torsion by
[[cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion]] and
enter no Pontryagin class; conjugation invariance of the even classes,
$c_{2i}(\overline{E_{\mathbb C}})=c_{2i}(E_{\mathbb C})$, is what makes the
construction orientation-free.
