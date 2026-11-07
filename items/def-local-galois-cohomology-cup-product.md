---
id: def-local-galois-cohomology-cup-product
kind: definition
title: "Cup product on continuous Galois cochains"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-profinite-group-by-inverse-limit
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - thm-long-exact-sequence-in-group-cohomology
  - def-dependent-choice
  - lem-finite-choice
proof_strategy: direct
axiom_use: >-
  The cochain cup formula and its differential identity are choice-free. DC
  and supplied derived-resolution data are assumed only for the connecting-map
  compatibility clause.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Romyar Sharifi, Algebraic Number Theory, Chapter 9 §9.3"
      url: "https://math.ucla.edu/~sharifi/notes/algnum-ch09.html"
      locator: "Definition 9.3.2 and Proposition 9.3.11, including the inhomogeneous cochain comparison."
verification: {}
---

## Definition

Let $G$ be a profinite group, let $M,N,P$ be discrete abelian $G$-modules,
and let $\mu:M\times N\to P$ be a bilinear map satisfying
$g\mu(m,n)=\mu(gm,gn)$. For continuous normalized inhomogeneous cochains
$f:G^r\to M$ and $h:G^s\to N$, define
$$
(f\smile_\mu h)(g_1,\ldots,g_{r+s})
=\mu\!\left(f(g_1,\ldots,g_r),
 (g_1\cdots g_r)h(g_{r+1},\ldots,g_{r+s})\right).
$$
The induced operation on continuous cohomology is the **cup product**
$$
H^r_{\mathrm{cts}}(G,M)\times H^s_{\mathrm{cts}}(G,N)
\longrightarrow H^{r+s}_{\mathrm{cts}}(G,P),
\qquad ([f],[h])\longmapsto[f\smile_\mu h].
$$
For compatible coefficient pairings, this product is associative. If
$0\to N\to E\to Q\to0$ is a short exact sequence of continuous
$G$-modules and $\partial$ is its connecting homomorphism, then for a
cocycle $f$ of degree $r$ and a class $[h]$ with coefficients in $Q$,
$$
\partial([f]\smile[h])=(-1)^r[f]\smile\partial([h]),
$$
whenever the coefficient pairings in this expression are defined; for this
connecting-map clause assume DC and the supplied group-cohomology
resolution convention.

## Definition references

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-profinite-group-by-inverse-limit]]

[[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]

[[thm-long-exact-sequence-in-group-cohomology]]

[[def-dependent-choice]]

[[lem-finite-choice]]

## Facts & Assumptions

**Given:** A profinite group $G$, discrete continuous $G$-modules $M,N,P$, an
equivariant bilinear map $\mu$, and normalized continuous cochains $f,h$ of
degrees $r,s$. For the connecting-map clause, also use DC and the supplied
resolution data.

[F1] Continuous cochains are normalized maps with the inhomogeneous
differential
$$
(dc)(g_1,\ldots,g_{k+1})=g_1c(g_2,\ldots,g_{k+1})+
\sum_{i=1}^{k}(-1)^ic(g_1,\ldots,g_ig_{i+1},\ldots,g_{k+1})+
(-1)^{k+1}c(g_1,\ldots,g_k).
$$
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F2] A connecting homomorphism for a short exact coefficient sequence is
computed by lifting a cocycle and applying the cochain differential.
[[thm-long-exact-sequence-in-group-cohomology]]

[A1] DC and supplied group-cohomology resolution data are used only for the
connecting-map interpretation. [[def-dependent-choice]]
[[thm-long-exact-sequence-in-group-cohomology]]

[F3] Every finite indexed family of nonempty sets has a choice function in ZF.
[[lem-finite-choice]]

[F4] A profinite group is compact, and so is each finite power $G^s$.
[[def-profinite-group-by-inverse-limit]]
[[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]

## Proof

**Proof technique:** verify the cochain differential identity.

**Given:** The data above.

1.1 The displayed formula is continuous because the cochains and the action
maps are continuous and $\mu$ is a homomorphism of discrete groups. If an
argument is the identity, either it lies among the first $r$ arguments and
$f$ vanishes, or it lies among the last $s$ arguments and $h$ vanishes.
Thus $f\smile_\mu h$ is normalized. [F1, given, algebra]

1.2 Expand $d(f\smile_\mu h)$ by [F1]. The initial action term and the
internal terms that merge two entries among $g_1,\ldots,g_r$ are exactly the
corresponding terms of $(df)\smile_\mu h$. The terms that merge two entries
among $g_{r+1},\ldots,g_{r+s+1}$, together with the final term, are exactly
the terms of $(-1)^r f\smile_\mu(dh)$. The two terms at the cut cancel: the
last term of $df$ contributes
$$(-1)^{r+1}\mu(f(g_1,\ldots,g_r),(g_1\cdots g_{r+1})h(g_{r+2},\ldots)),$$
while the first term of $(-1)^r f\smile_\mu(dh)$ contributes the same
expression with coefficient $(-1)^r$. Equivariance of $\mu$ identifies the
action factors in these expressions. Hence
$$
d(f\smile_\mu h)=(df)\smile_\mu h+(-1)^r f\smile_\mu(dh).
$$
It follows that cocycles multiply to cocycles. If $df=0$ and $h$ is replaced
by $h+dk$, the product changes by $(-1)^r d(f\smile_\mu k)$; if $dh=0$
and $f$ is replaced by $f+dq$, it changes by $d(q\smile_\mu h)$.
Therefore the displayed operation is well-defined on cohomology. [F1, step 1.1, algebra]

1.3 For three cochains and compatible coefficient pairings, both iterated cup
formulas evaluate the first cochain on the first block, the second on the
second block acted on by the product of the first-block group elements, and
the third on the final block acted on by the product of the first two blocks.
Associativity of the coefficient pairings and of the group action makes the
two values equal. For the connecting identity, the domain $G^s$ is compact
by [F4], so the discrete-valued continuous cochain $h$ has finite image.
List this finite image by a natural number and apply [F3] to choose a lift in
$E$ of each value, using $0$ over $0$; composing
this finite section with $h$ gives a continuous normalized lift
$\widetilde h$. By [F2], $d\widetilde h$ represents
$\partial([h])$. Since $df=0$, the
differential identity in step 1.2 gives
$$
d(f\smile_\mu\widetilde h)=(-1)^r f\smile_\mu d\widetilde h.
$$
The left side is the connecting representative of $[f]\smile[h]$, and the
right side represents $(-1)^r[f]\smile\partial([h])$. This proves the
connecting formula in the Statement. [A1, F1, F2, F3, F4, step 1.2, given, algebra] ∎
