---
id: def-local-whitney-move
kind: definition
title: The local Whitney move
deps:
- def-countable-choice
- def-whitney-disk-and-clean-framed-whitney-disk
- def-smooth-embedding
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-compactly-supported-vector-fields-are-complete
justified_by:
- thm-whitney-move-removes-a-cancelling-pair-of-intersections
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and its proof, printed pp. 71-74, with Figures 6.2-6.3 (the plane model $C_0\cup C_1$,
      the disk $D$ they bound, and the isotopy $G_t$ of the model)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed p. 140 ("change it near $\gamma_2$ using the isotopy given on p. 74
      of Milnor")
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
verification:
  precheck: n/a
---

## Definition

In the plane take $C_A=\{v=0\}$ and $C_B=\{v=f(u)\}$, $f(u)=u^2-1$, with corners $u=\pm1$. Choose a small $\varepsilon>0$, a compactly supported smooth $b(u)$ with $0\le b\le1$ and $b=1$ on $[-1,1]$, and set $g(u)=b(u)(f(u)-\varepsilon)$. Choose a compactly supported smooth $c(u,v)$ equal to one on every segment from $(u,0)$ to $(u,g(u))$ for $u$ in the support of $b$. The auxiliary model isotopy $G_t$ is the flow of $g(u)c(u,v)\partial_v$. It carries the axis to $v=tg(u)$, and at time one this graph misses the fixed $C_B$: for $|u|\le1$, $g=f-\varepsilon<f$; outside, $f>0$ and $g=bf-b\varepsilon<f$.

For complementary dimensions use normal coordinates $(e,h)\in\mathbb R^{a-1}\times\mathbb R^{b-1}$ and a compact normal cutoff $\chi(e,h)$ equal to one near zero. Use the vector field $g(u)c(u,v)\chi(e,h)\partial_v$, leaving $u,e,h$ fixed. Its model sheets are $\{v=0,h=0\}$ and $\{v=f(u),e=0\}$. The latter is held fixed as comparison data. A Whitney move along a clean framed bigon is the isotopy of the first sheet obtained by transporting this auxiliary flow through an adapted framed tube and extending by the identity outside the tube. The auxiliary ambient isotopy is applied only to the selected sheet or source patch; applying it to both sheets would preserve their intersections. The support can be chosen in an arbitrarily small neighbourhood of the bigon and its fixed extended arc collars, by choosing $\varepsilon$ and the transition of $b$ sufficiently small. Existence of the adapted tube and cancellation are proved in [[thm-whitney-move-removes-a-cancelling-pair-of-intersections]].
