---
id: "def-projective-line-two-affine-cover-and-twisting-sheaf"
kind: "definition"
title: "Two-affine projective line and its twists"
status: draft
origin: pipeline
deps: [thm-gluing-affine-schemes, thm-gluing-sheaves, def-gluing-datum-sheaves, def-affine-scheme, def-affine-scheme-spectrum, def-affine-open-subscheme, thm-structure-sheaf-affine-scheme, thm-sections-basic-open-affine-scheme, cor-principal-localisation-spectrum-is-distinguished-open, thm-universal-property-of-localisation, def-polynomial-ring-over-a-commutative-ring, def-morphism-affine-schemes-from-ring-map, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field
and write $k[t]$ and $k[u]$ for the polynomial rings in one variable over $k$
([[def-polynomial-ring-over-a-commutative-ring]]). The **two-affine projective
line** $\mathbb P^1_k$ is the scheme obtained by gluing the two affine schemes
$\operatorname{Spec}k[t]$ and $\operatorname{Spec}k[u]$ along their basic opens
$D(t)$ and $D(u)$, which are affine open subschemes isomorphic to
$\operatorname{Spec}k[t,t^{-1}]$ and $\operatorname{Spec}k[u,u^{-1}]$
([[cor-principal-localisation-spectrum-is-distinguished-open]],
[[thm-sections-basic-open-affine-scheme]], [[def-affine-open-subscheme]]), identified through the mutually inverse ring
isomorphisms
$k[t,t^{-1}]\to k[u,u^{-1}]$, $t\mapsto u^{-1}$, and
$k[u,u^{-1}]\to k[t,t^{-1}]$, $u\mapsto t^{-1}$
([[thm-gluing-affine-schemes]]). Its two charts $U_0\cong\operatorname{Spec}k[t]$
and $U_\infty\cong\operatorname{Spec}k[u]$ are open subschemes covering
$\mathbb P^1_k$, and their overlap $W=U_0\cap U_\infty\cong
\operatorname{Spec}k[t,t^{-1}]$ carries the two coordinate functions, mutually
inverse units with $tu=1$.

Here the distinguished-open identification is an isomorphism of schemes, not
only of spaces. For a ring $A$ and $f\in A$, the localization-spectrum map
$\operatorname{Spec}(A_f)\to D_A(f)$ is a homeomorphism
([[cor-principal-localisation-spectrum-is-distinguished-open]]). On the
basis open $D_{A_f}(g/f^m)$ it maps to $D_A(fg)$; the structure-sheaf section
rings on these opens are respectively $(A_f)_{g/f^m}$ and $A_{fg}$, canonically
isomorphic by the universal property of localization, and the
identifications commute with further restrictions
([[thm-sections-basic-open-affine-scheme]],
[[thm-structure-sheaf-affine-scheme]],
[[thm-universal-property-of-localisation]]). Thus the homeomorphism identifies
the restricted structure sheaves and is a local-ringed-space isomorphism.
For $A=k[t]$, $f=t$, the localization $A_f$ is $k[t,t^{-1}]$ by the same
universal property; similarly $k[u]_u=k[u,u^{-1}]$. These are the scheme chart
identifications used in the gluing above.

For every $n\in\mathbb Z$, let $\mathcal O(n)$ be the sheaf of
$\mathcal O_{\mathbb P^1_k}$-modules glued from the structure sheaves
$\mathcal O_{U_0}$ and $\mathcal O_{U_\infty}$ with frames $e_0=1$ on $U_0$ and
$e_\infty=1$ on $U_\infty$, related on $W$ by
$$e_\infty=t^ne_0,\qquad\text{equivalently}\qquad e_0=t^{-n}e_\infty,$$
through the transition isomorphism given by multiplication by the unit $t^{-n}$
of $k[t,t^{-1}]$ ([[thm-gluing-sheaves]], [[def-gluing-datum-sheaves]]). Each
$\mathcal O(n)$ is an invertible sheaf: it is free of rank one on each chart with
the displayed frame. In particular $\mathcal O(0)$ is the structure sheaf
$\mathcal O_{\mathbb P^1_k}$, and on the overlap the sections are written
$k[t,t^{-1}]e_0$, so that $a(t)e_0=t^{-n}a(t)e_\infty=u^na(u^{-1})e_\infty$.
