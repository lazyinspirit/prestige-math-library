---
id: def-stiefel-space-grassmannian-and-tautological-bundle
kind: definition
title: Stiefel spaces, Grassmannians, and tautological bundles
status: draft
origin: pipeline
deps: [def-frame-bundle-and-associated-vector-bundle, thm-vector-bundles-glued-from-transition-cocycles, def-cw-complex-with-closure-finiteness-and-weak-topology]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Stable Grassmannians and tautological bundle, printed pp.28–31"
    - title: "Milnor and Stasheff, Characteristic Classes, §5"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Grassmann and Stiefel manifolds, printed pp.55–66"
---

## Definition

Let $\mathbb F=\mathbb R$ or $\mathbb C$, and let $0\leq n\leq N$.
The **Stiefel space**

$$V_n(\mathbb F^N)=\{(v_1,\ldots,v_n):\langle v_i,v_j\rangle=\delta_{ij}\}$$

has the subspace topology from $(\mathbb F^N)^n$. The group
$K_n=\operatorname O(n)$ in the real case and
$K_n=\operatorname U(n)$ in the complex case acts freely on the right by
change of orthonormal frame. The **Grassmannian**
$\operatorname{Gr}_n(\mathbb F^N)=V_n(\mathbb F^N)/K_n$ is the space of
$n$-planes with this quotient topology.

Graph charts about a plane identify nearby planes with linear maps to its
orthogonal complement. They locally trivialize
$V_n(\mathbb F^N)\to\operatorname{Gr}_n(\mathbb F^N)$ as a principal
$K_n$-bundle. Its associated standard vector bundle, in the convention of
[[def-frame-bundle-and-associated-vector-bundle]], is the **tautological
bundle**

$$\gamma_n^N=\{(W,v)\in\operatorname{Gr}_n(\mathbb F^N)\times\mathbb F^N:v\in W\}.$$

Equivalently, its graph-chart transition matrices glue it by
[[thm-vector-bundles-glued-from-transition-cocycles]].

The coordinate inclusions $\mathbb F^N\subseteq\mathbb F^{N+1}$ define
compatible inclusions of Stiefel spaces, Grassmannians, and tautological
bundles. Write

$$V_n(\mathbb F^\infty)=\bigcup_{N\geq n}V_n(\mathbb F^N),\qquad \operatorname{Gr}_n(\mathbb F^\infty)=\bigcup_{N\geq n}\operatorname{Gr}_n(\mathbb F^N),$$

with the weak direct-limit topology: a set is closed exactly when its
intersection with every finite stage is closed. The later Schubert theorem
identifies this with the weak topology in
[[def-cw-complex-with-closure-finiteness-and-weak-topology]]. For $n=0$,
the Stiefel spaces, Grassmannians, and their stable colimits are points, and
$\gamma_0$ is the zero bundle.
