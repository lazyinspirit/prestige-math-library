---
id: def-transverse-complementary-dimensional-intersection-set
kind: definition
title: "Transverse complementary-dimensional intersection sets"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-smooth-maps, def-transverse-embedded-submanifolds, thm-transverse-fibre-product-theorem, cor-transverse-intersection-theorem, def-embedded-submanifold-and-slice-chart, thm-rank-nullity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 77–78 (complementary dimension and finite transverse intersection); Ch. 3 §3, printed p. 113 (map–map transversality and the fibre-product reformulation)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§4, printed p. 20 (the setting of a compact source and a closed complementary submanifold)"
---

## Definition

Let $M$ be a smooth $n$-manifold without boundary. Let $f:X\to M$ and $g:Z\to M$ be smooth maps from smooth manifolds of dimensions $x=\dim X$ and $z=\dim Z$, with $x+z=n$, and suppose $f$ and $g$ are transverse in the sense of [[def-transverse-smooth-maps]]. The **transverse intersection set**, or fibre product, of $f$ and $g$ is

$$X\times_MZ:=\{(a,b)\in X\times Z:f(a)=g(b)\},$$

with the subspace topology. In the submanifold case, if $A^a$ and $B^b$ are transverse embedded submanifolds of $M$ in the sense of [[def-transverse-embedded-submanifolds]] with $a+b=n$, the **transverse intersection set** is $A\cap B$.

Both constructions are $0$-dimensional embedded submanifolds. For the fibre product this is [[thm-transverse-fibre-product-theorem]] applied through the diagonal, whose codimension in $M\times M$ is $n$, so that

$$\dim(X\times_MZ)=x+z-n=0.$$

For the submanifold case it is [[cor-transverse-intersection-theorem]], which gives codimension additivity, hence $\dim(A\cap B)=a+b-n=0$. The empty set is an allowed value and is a $0$-dimensional embedded submanifold ([[def-embedded-submanifold-and-slice-chart]]).

At a point $(a,b)\in X\times_MZ$ the tangent space is

$$T_{(a,b)}(X\times_MZ)=\{(v,w)\in T_aX\oplus T_bZ:df_a(v)=dg_b(w)\},$$

the kernel of $(df_a,-dg_b):T_aX\oplus T_bZ\to T_{g(b)}M$; transversality makes this map surjective, so the kernel has dimension $x+z-n=0$ by [[thm-rank-nullity]]. At $p\in A\cap B$ the tangent space is $T_p(A\cap B)=T_pA\cap T_pB$ by [[cor-transverse-intersection-theorem]].

The intersection set is not an intersection number: a number requires finiteness of the transverse intersection and a parity or orientation convention.
