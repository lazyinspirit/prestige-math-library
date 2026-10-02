---
id: ex-plane-quartic-canonical-hyperplane
kind: example
title: "Adjunction on a smooth plane quartic: the canonical bundle is the hyperplane bundle"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-genus-degree-smooth-plane-curve
  - cor-h0-canonical-differentials-genus
  - def-canonical-line-bundle-curve
  - def-complete-linear-system
  - def-direct-image-sheaf
  - def-degree-divisor-proper-curve
  - def-degree-projective-hypersurface
  - def-hyperelliptic-curve
  - def-axiom-of-choice
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-cohomology-pushforward
  - lem-projective-hypersurface-cohomology-sequence
  - thm-adjunction-smooth-plane-curve
  - thm-base-point-free-linear-system-morphism
  - thm-canonical-map-nonhyperelliptic-curve
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-twisting-sheaf-invertible-standard-graded
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass

---

## Example

Assume AC, as required by the cited canonical-map criterion. Let $k$ be a
field and let $C=V_+(F)\subseteq\mathbb P^2_k$ be a smooth plane quartic, a
smooth projective plane curve of degree $d=4$.

Adjunction gives
$$\omega_C\cong\mathcal O_C(d-3)=\mathcal O_C(1),$$
the restriction to $C$ of the hyperplane bundle
$\mathcal O_{\mathbb P^2}(1)$; the genus is $g(C)=(4-1)(4-2)/2=3$, consistently
with $\deg_k\omega_C=4\cdot1=4=2g-2$. Since
$h^0(C,\omega_C)=g=3$, the space of canonical sections has dimension three,
so the complete canonical linear system has projective dimension two. The restriction argument below identifies it with the coordinate sections, which generate $\mathcal O_C(1)$ at every point and hence define the canonical morphism to $\mathbb P^2$.

That map is the given inclusion $C\hookrightarrow\mathbb P^2$: the twisted
hypersurface sequence and its low-degree cohomology sequence, together with
$H^0(\mathbb P^2,\mathcal O(-3))=H^1(\mathbb P^2,\mathcal O(-3))=0$, show that
the restriction map $H^0(\mathbb P^2,\mathcal O(1))\to
H^0(C,\mathcal O_C(1))$ is an isomorphism; hence
$|K_C|=|H|$ is the linear system of lines and the canonical image of $C$ is the
plane quartic itself. In particular $C$ is geometrically nonhyperelliptic,
and the canonical bundle of a plane quartic is the hyperplane bundle; the
canonical model of this genus-three curve is the plane quartic.

## Facts & Assumptions

**Given:** AC, a field $k$ and a smooth plane quartic
$C=V_+(F)\subseteq\mathbb P^2_k$ of degree $d=4$.

[F1] For a smooth plane curve $C=V_+(F)\subseteq\mathbb P^2_k$ of degree $d$,
$\omega_C\cong\mathcal O_C(d-3)$ and $g(C)=(d-1)(d-2)/2$; the degree of the
hypersurface is $\deg F=d$. ([[thm-adjunction-smooth-plane-curve]],
[[cor-genus-degree-smooth-plane-curve]], [[def-degree-projective-hypersurface]])

[F2] For a smooth proper geometrically integral curve of genus $g$,
$\deg_k\omega_C=2g-2$ and $h^0(C,\omega_C)=g$, and, when the complete canonical system $|K_C|$ is base-point-free and its section space is nonzero, it defines the canonical morphism
([[cor-canonical-degree-two-g-minus-two]],
[[cor-h0-canonical-differentials-genus]],
[[def-canonical-line-bundle-curve]], [[def-complete-linear-system]],
[[thm-base-point-free-linear-system-morphism]]).

[F3] On $\mathbb P^2_k$ one has $H^1(\mathbb P^2,\mathcal O(m))=0$ for every
$m$, $H^0(\mathbb P^2,\mathcal O(-3))=0$, and
$H^0(\mathbb P^2,\mathcal O(1))$ is the space of linear forms; the twisting
sheaves are the ones attached to the standard graded presentation.
([[thm-cohomology-projective-space-twisting-sheaves]],
[[def-twisting-sheaf-proj]])

[F4] If $i:C\hookrightarrow\mathbb P^2_k$ is the plane quartic, the
published hypersurface sequence gives
$0\to\mathcal O_{\mathbb P^2}(-4)\xrightarrow{\cdot F}\mathcal O_{\mathbb P^2}\to i_*\mathcal O_C\to0$:
the nonzero dehomogenizations of $F$ are nonzerodivisors in the polynomial
domain rings of the standard charts. The standard graded polynomial ring
generated in degree one makes $\mathcal O_{\mathbb P^2}(1)$ invertible, so
tensoring preserves exactness. On each standard chart the quotient by the
local equation $F$ with the restricted twist identifies the last term with
$i_*\mathcal O_C(1)$, yielding
$0\to\mathcal O_{\mathbb P^2}(-3)\xrightarrow{\cdot F}\mathcal O_{\mathbb P^2}(1)\to i_*\mathcal O_C(1)\to0$.
([[lem-projective-hypersurface-cohomology-sequence]],
[[thm-twisting-sheaf-invertible-standard-graded]],
[[def-relative-projective-space-standard-charts]],
[[lem-closed-immersion-affine-quotient-and-base-change]],
[[def-direct-image-sheaf]], [[def-twisting-sheaf-proj]])

[F5] The short exact sequence in [F4] gives a long exact sequence in sheaf
cohomology, and closed-immersion pushforward identifies
$H^q(\mathbb P^2,i_*\mathcal O_C(1))$ with $H^q(C,\mathcal O_C(1))$. In
particular its low-degree segment is
$0\to H^0(\mathbb P^2,\mathcal O(-3))\to H^0(\mathbb P^2,\mathcal O(1))\to H^0(C,\mathcal O_C(1))\to H^1(\mathbb P^2,\mathcal O(-3))$.
([[thm-long-exact-sequence-sheaf-cohomology]],
[[lem-closed-immersion-cohomology-pushforward]])

[F6] For a smooth proper geometrically integral curve of genus $g\ge2$,
the canonical map is a closed immersion exactly when $g\ge3$ and the curve is
geometrically nonhyperelliptic, meaning that its algebraic-closure base change
has no degree-two map to $\mathbb P^1$.
([[thm-canonical-map-nonhyperelliptic-curve]], [[def-hyperelliptic-curve]])

[F7] For a divisor $D$ on a smooth proper curve, the complete linear system
$|D|$ is the set of effective divisors linearly equivalent to $D$, and its
dimension is $\ell(D)-1$. ([[def-complete-linear-system]],
[[def-degree-divisor-proper-curve]])



## Verification

**Proof technique:** specialize adjunction to $d=4$ and identify the canonical
linear system with the linear system of lines via the restriction map.

1.1 By [F1] with $d=4$, $\omega_C\cong\mathcal O_C(1)$ and $g(C)=(3)(2)/2=3$. [F1]

2.1 By [F2] and [F3], $\deg_k\omega_C=4=2\cdot3-2$ and $h^0(C,\omega_C)=3$; thus its complete canonical system has projective dimension two. [F2, F3, step 1.1]

2.2 The low-degree segment in [F5], together with the two vanishings in [F3], makes the restriction map $H^0(\mathbb P^2,\mathcal O(1))\to H^0(C,\mathcal O_C(1))$ an isomorphism. By Step 1.1, $\omega_C\cong\mathcal O_C(1)$, so the complete canonical system $|K_C|=|\mathcal O_C(1)|$ is exactly the linear system of lines cut on $C$ by $H^0(\mathbb P^2,\mathcal O(1))$. The three restricted coordinate sections generate $\mathcal O_C(1)$: at each point at least one coordinate is nonzero, and on that standard chart its section is a local frame. Hence the canonical system is base-point-free and its nonzero three-dimensional section space defines a morphism to $\mathbb P^2$ by [F2]. [F2, F3, F4, F5, step 1.1]

3.1 Because $|K_C|$ is the restriction of the linear system of lines, the canonical map of $C$ is the restriction of the inclusion $C\hookrightarrow\mathbb P^2$: it is a closed embedding, and its image is the plane quartic $C$ itself. This embedding remains a closed embedding after extending $k$ to $\bar k$, so [F6] shows that $C$ is geometrically nonhyperelliptic. In particular it has no degree-two map to the split $\mathbb P^1_k$; its canonical model is the plane quartic. [F6, step 2.2]

4.1 As a consistency check, the canonical divisor of $C$ is cut by a line: $\deg_kK_C=4$ equals $2g-2$ by Step 2.1, and the isomorphism $\omega_C\cong\mathcal O_C(1)$ of Step 1.1 is the statement that the canonical divisor class is the class of a hyperplane section, i.e. the hyperplane bundle. [F2, F7, step 2.1] ∎
