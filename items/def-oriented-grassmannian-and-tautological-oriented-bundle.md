---
id: def-oriented-grassmannian-and-tautological-oriented-bundle
kind: definition
title: Oriented Grassmannians and the tautological oriented bundle
status: published
origin: pipeline
deps: [def-stiefel-space-grassmannian-and-tautological-bundle, def-oriented-real-vector-bundle-and-oriented-frame-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Oriented Grassmannians and classification discussion after Theorem 1.16, printed p.31"
---

## Definition

For $0\leq n\leq N$, the **oriented Grassmannian** is

$$\operatorname{Gr}_n^+(\mathbb R^N)=V_n(\mathbb R^N)/\operatorname{SO}(n).$$

An ordered orthonormal frame determines its span together with the orientation
it transports from $\mathbb R^n$, and the $\operatorname{SO}(n)$ quotient
identifies exactly the frames inducing the same oriented plane. The associated
standard bundle is the tautological bundle
$\gamma_n^{+,N}$; its fiber over $(W,o)$ is $W$ with orientation $o$, in
the sense of [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]].

The stable coordinate inclusions from
[[def-stiefel-space-grassmannian-and-tautological-bundle]] define

$$\operatorname{Gr}_n^+(\mathbb R^\infty)=\bigcup_{N\geq n}\operatorname{Gr}_n^+(\mathbb R^N),$$

with the weak direct-limit topology. This chosen model is denoted
$B\operatorname{SO}(n)$.

For $n\geq1$, forgetting the orientation is the double cover
$\operatorname{Gr}_n^+\to\operatorname{Gr}_n$, since a positive-dimensional
real vector space has exactly two orientations. After forgetting orientation,
$\gamma_n^+$ is the pullback of $\gamma_n$ along this cover. For $n=0$, both
Grassmannians are points and the tautological bundle has its canonical
rank-zero orientation.
