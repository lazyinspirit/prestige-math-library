---
id: thm-associated-vector-bundle-is-well-defined
kind: theorem
title: Associated vector bundles are well-defined
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-associated-bundle-to-a-principal-bundle-and-representation, thm-vector-bundle-construction-from-a-smooth-cocycle, def-vector-bundle-chart-and-transition-function, def-smooth-fibre-bundle-and-local-trivialization]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Vector Bundle Chart Lemma 10.6 and complete proof, printed pages 252–253; fibre-bundle conventions, printed pages 267–268
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $\pi:P\to M$ be a smooth right principal $H$-bundle and let
$\rho:H\to GL(V)$ be a smooth representation on a finite-dimensional real
vector space. Then $P\times_HV$ has a unique smooth rank-$\dim V$ vector-bundle
structure over $M$ whose local trivializations are induced by principal-bundle
sections. If $s_i=s_jg_{ji}$ on an overlap, the transition from the
$i$-coordinates to the $j$-coordinates is $\rho(g_{ji})$.

## Facts & Assumptions

**Given:** A smooth right principal $H$-bundle $\pi:P\to M$, a
finite-dimensional real vector space $V$, and a smooth representation
$\rho:H\to GL(V)$.

[F1] The associated quotient, its diagonal action, relation, and projection
are fixed. [[def-associated-bundle-to-a-principal-bundle-and-representation]].

[F2] Smooth vector-bundle charts have smooth linear transition functions, and
smooth local trivializations are diffeomorphisms over the base.
[[def-vector-bundle-chart-and-transition-function]],
[[def-smooth-fibre-bundle-and-local-trivialization]].

[F3] A supplied countable smooth cocycle constructs a vector bundle.
[[thm-vector-bundle-construction-from-a-smooth-cocycle]].

## Proof

**Proof technique:** descend principal charts directly to the quotient.

1.1 Let $s_i:U_i\to P$ be the smooth section defined by a principal trivialization. Every $p\in\pi^{-1}(U_i)$ has a unique expression $p=s_i(x)h$. Define $$\Phi_i:r^{-1}(U_i)\to U_i\times V,\qquad \Phi_i([s_i(x)h,v])=(x,\rho(h)v).$$ This is independent of representatives: replacing $(s_i(x)h,v)$ by $(s_i(x)hk,\rho(k)^{-1}v)$ leaves $\rho(hk)\rho(k)^{-1}v=\rho(h)v$. It is bijective, with inverse $(x,w)\mapsto[s_i(x),w]$. [F1, given, algebra]

2.1 Let $Q:P\times V\to P\times_HV$ be the quotient map. It is open because the saturation of an open set is the union of its translates under the diagonal action, each a homeomorphism. The composite $\Phi_i\circ Q$ on $\pi^{-1}(U_i)\times V$ is, in principal coordinates $(x,h,v)$, $(x,h,v)\mapsto(x,\rho(h)v)$; it is continuous and constant on orbits, while the displayed inverse in step 1.1 is continuous after composing with $Q$. Hence $\Phi_i$ is a homeomorphism. [F1, step 1.1]

2.2 On $U_i\cap U_j$, define the smooth map $g_{ji}$ by $s_i(x)=s_j(x)g_{ji}(x)$; it is the group coordinate in a principal trivialization. Then $$\Phi_j\Phi_i^{-1}(x,w)=\Phi_j([s_i(x),w])=\Phi_j([s_j(x)g_{ji}(x),w])=(x,\rho(g_{ji}(x))w).$$ This is smooth with smooth inverse and is fibrewise linear. Consequently the $\Phi_i$ form a smooth rank-$\dim V$ vector-bundle atlas. [F2, step 1.1, algebra]

3.1 The open quotient of the second-countable manifold $P\times V$ is second-countable. It is Hausdorff: points over distinct base points are separated using the Hausdorff base; points over the same base lie in one $r^{-1}(U_i)$ and are separated by the product chart $\Phi_i$. Thus the charts $\Phi_i$ can define a smooth-manifold atlas on the actual quotient space. [step 2.1]

4.1 Any smooth vector-bundle structure for which all $\Phi_i$ are local trivializations has exactly this atlas, so the identity map between it and the constructed structure is locally the identity in $U_i\times V$ and is a diffeomorphism. This proves uniqueness. The cocycle theorem [F3] gives the same abstract bundle whenever a countable principal cover is supplied, but the direct open-quotient argument above does not assume such a cover or choose a countable refinement. If $V=0$, $H$ is trivial, $M$ is empty, or $\rho$ is ineffective, the same formulas apply. No choice principle is used. [F3, step 3.1, step 2.2] ∎
