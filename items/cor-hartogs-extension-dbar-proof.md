---
id: cor-hartogs-extension-dbar-proof
kind: corollary
title: Hartogs extension by a compact-support dbar correction
status: draft
origin: pipeline
deps:
  - thm-compact-support-dbar-solution-cn
  - def-axiom-of-choice
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-compactly-supported-differential-form
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - def-holomorphic-function-in-several-complex-variables
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - thm-identity-theorem-in-several-complex-variables
  - def-holomorphic-extension-and-domain-of-holomorphy
  - thm-extreme-value-metric
  - def-norm-and-normed-space
  - thm-compact-subset-is-closed-and-bounded
  - rem-complex-euclidean-space-dictionary
  - def-euclidean-spheres-and-closed-balls
  - cor-euclidean-spheres-are-path-connected
  - thm-path-connected-implies-connected
  - def-connected-component-and-quasicomponent
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.3, Theorem 4.3.1"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Complete theorem and proof, printed pp. 135–136, PDF text lines 10987–11044. Exercises 4.3.1 and 4.2.3 are prompts; the bump and compact-support suppliers below provide those arguments, and the proof makes the outer-zero-set argument explicit."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume the full Axiom of Choice (AC). Let $n\ge2$, let $\Omega\subseteq\mathbb C^n$ be a domain, and let $K\subseteq\Omega$ be compact with $G:=\Omega\setminus K$ connected. Every holomorphic $f:G\to\mathbb C$ has a unique holomorphic extension $F:\Omega\to\mathbb C$. No finite-shell-cover assumption is required.

## Facts & Assumptions

**Given:** Full AC; $n\ge2$; a domain $\Omega\subseteq\mathbb C^n$; a compact $K\subseteq\Omega$ such that $G=\Omega\setminus K$ is connected; and a holomorphic function $f:G\to\mathbb C$.

[F1] Under full AC, every smooth compactly supported $\bar\partial$-closed $(0,1)$-form $g$ on $\mathbb C^n$, for $n\ge2$, has a unique smooth compactly supported solution $u$ to $\bar\partial u=g$; that solution vanishes on the unique unbounded connected component of $\mathbb C^n\setminus\operatorname{supp}g$ ([[thm-compact-support-dbar-solution-cn]]).

[F2] Smooth complex-valued functions are $(0,0)$-forms, and the coefficient formula defines $\bar\partial$ on forms ([[def-bigraded-complex-differential-forms]]).

[F3] The operator satisfies $\bar\partial^2=0$ and the graded product rule; on a function $a$ and a function $b$, $\bar\partial(ab)=a\,\bar\partial b+b\,\bar\partial a$ ([[thm-d-dbar-decomposition-and-identities]]).

[F4] For a compact subset of an open set in a smooth manifold, there is a smooth $[0,1]$-valued function equal to one on a neighborhood of the compact set and with support in that open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F5] The support of a form is the closure of its nonzero locus, and a form is compactly supported when that support is compact ([[def-compactly-supported-differential-form]]).

[F6] Holomorphic functions on open subsets of $\mathbb C^m$ are smooth in real coordinates ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[F7] For a $C^1$ function, vanishing of every $\partial_{\bar z_k}$ is equivalent to holomorphy ([[thm-cauchy-riemann-characterization-in-several-complex-variables]], [[def-holomorphic-function-in-several-complex-variables]]). When matching the library's zero-based coordinate $k$ with the coordinates here, $k=j-1$.

[F8] A compact subset of a metric space is closed ([[thm-compact-subset-is-closed-and-bounded]]).

[F9] The standard norm and metric on $\mathbb C^m$ agree with those on $\mathbb R^{2m}$, so the norm topology and the real Euclidean topology agree ([[rem-complex-euclidean-space-dictionary]]).

[F10] A continuous real-valued function on a nonempty compact metric space attains its maximum ([[thm-extreme-value-metric]]).

[F11] In $\mathbb R^m$, $S^{m-1}=S_2(0,1)$ ([[def-euclidean-spheres-and-closed-balls]]), and for $m\ge2$ this unit sphere is path-connected ([[cor-euclidean-spheres-are-path-connected]]). A path-connected subset is connected ([[thm-path-connected-implies-connected]]).

[F12] A connected component is the largest connected subset containing any one of its points ([[def-connected-component-and-quasicomponent]]).

[F13] A holomorphic extension agrees with the original function on a nonempty open subset of the intersection of the two domains ([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[F14] A holomorphic function on a nonempty connected open set that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[F15] In $\mathbb C^m$, every closed bounded set is compact ([[rem-complex-euclidean-space-dictionary]]).

[F16] The norm satisfies the triangle inequality and absolute homogeneity, including $\lVert-z\rVert=\lVert z\rVert$ ([[def-norm-and-normed-space]]).

[F17] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $K=\varnothing$, then $G=\Omega$ and take $F=f$. Any other holomorphic extension agrees with $f$ on a nonempty open subset of $\Omega$ by [F13], so the identity theorem [F14] gives uniqueness. [given, F13, F14, construct]

1.2 Suppose $K\ne\varnothing$. The function $z\mapsto\lVert z\rVert$ is continuous: the triangle inequality and $\lVert-z\rVert=\lVert z\rVert$ from [F16] give $|\lVert z\rVert-\lVert w\rVert|\le\lVert z-w\rVert$, and [F9] identifies this norm distance with the metric. By [F10], there are $z_0\in K$ and $r\ge0$ with $\lVert z_0\rVert=r=\max_{z\in K}\lVert z\rVert$. Choose $\varepsilon>0$ with $\{z:\lVert z-z_0\rVert<\varepsilon\}\subseteq\Omega$. If $r>0$, put $w=(1+\varepsilon/(2r))z_0$; if $r=0$, then $z_0=0$ and put $w=(\varepsilon/2)e_1$, where $e_1=(1,0,\ldots,0)$. In either case $\lVert w-z_0\rVert=\varepsilon/2$, so $w\in\Omega$. With $R:=r+\varepsilon/4$, we have $\lVert w\rVert>R$ and $K\subset\{z:\lVert z\rVert<R\}$. [F9, F10, F16, given, choose, algebra]

2.1 Apply [F4] to $K\subseteq W:=\Omega\cap\{z:\lVert z\rVert<R\}$ to obtain $\chi\in C^\infty(\mathbb C^n,[0,1])$ equal to one near $K$ and satisfying $\operatorname{supp}\chi\subseteq W$. Define $f_0=(1-\chi)f$ on $G$ and $f_0=0$ on $K$. This is smooth on $\Omega$: on a neighborhood of $K$ it is identically zero, and off $K$ it is a product of smooth functions by [F6]. [F4, F6, F9, step 1.2, given, construct]

3.1 On $\Omega$ set $g=\bar\partial f_0$, and define $g=0$ on $\mathbb C^n\setminus\Omega$. On $G$, the product rule and $\bar\partial f=0$ from [F7] give $g=-f\,\bar\partial\chi$; near $K$, $g=0$. Thus the global nonzero locus lies in the closed set $\operatorname{supp}\chi\subseteq\Omega\cap\{z:\lVert z\rVert<R\}$. Since $\operatorname{supp}\chi$ is a closed subset of the open set $\Omega$, every point outside $\Omega$ has a neighborhood disjoint from $\operatorname{supp}\chi$; inside $\Omega$ there $\chi=0$ and $f_0=f$ with $\bar\partial f=0$, while outside $\Omega$ we set $g=0$. Hence the zero extension is smooth. Its support is a closed subset of $\operatorname{supp}\chi$, so it lies in $\Omega$ and is bounded; [F15] makes it compact. On $\Omega$, $\bar\partial g=\bar\partial^2 f_0=0$ by [F3], and around the complement of $\Omega$ the extended form is zero, so globally $g$ is $\bar\partial$-closed. [F2, F3, F5, F6, F7, F15, step 2.1, algebra]

4.1 Invoke [F1] under the stated full AC hypothesis [F17] to obtain the unique smooth compactly supported $u$ with $\bar\partial u=g$, vanishing on the unique unbounded connected component of $\mathbb C^n\setminus\operatorname{supp}g$. If $f=0$, then $f_0=g=0$ and uniqueness in [F1] gives $u=0$, so this construction also covers the zero function. [F1, F17, given, step 3.1, construct]

4.2 Let $E_R:=\{z:\lVert z\rVert>R\}$. It is disjoint from $\operatorname{supp}g$ by step 3.1 and is unbounded. It is path-connected: for $x,y\in E_R$, choose $L>\max(R,\lVert x\rVert,\lVert y\rVert)$, move each point radially to the sphere of radius $L$, and join the resulting directions by a path on $S^{2n-1}$, rescaled by $L$. The sphere path exists by [F11], since $2n\ge2$; all three paths stay in $E_R$. Thus $E_R$ is connected by [F11]. Its component containing $(R+1)e_1$, with $e_1=(1,0,\ldots,0)$, contains all of $E_R$ by [F12], so that component is unbounded and therefore is the unique unbounded component in [F1]. Hence $u=0$ on $E_R$. Also $\chi=0$ there by [F4] and [F5], since $E_R$ is disjoint from $\operatorname{supp}\chi$. [F1, F4, F5, F9, F11, F12, step 2.1, step 3.1, given, algebra]

5.1 The set $G$ is open by [F8] and nonempty because the point $w$ from step 1.2 lies in $\Omega\cap E_R\subseteq G$. On $G$ define $h:=u+\chi f$. It is smooth by [F6] and step 4.1, and $\bar\partial h=g+f\,\bar\partial\chi=0$ by steps 3.1 and 4.1. Therefore [F7], with library coordinate $k=j-1$, makes $h$ holomorphic on $G$. Step 4.2 gives $h=0$ on the nonempty open set $\Omega\cap E_R$; because $G$ is connected, [F14] yields $h=0$ throughout $G$. [F3, F6, F7, F8, F14, step 1.2, step 3.1, step 4.1, step 4.2, given, algebra]

6.1 Set $F:=f_0-u$ on $\Omega$. It is smooth, and $\bar\partial F=g-g=0$, so [F7], with library coordinate $k=j-1$, makes $F$ holomorphic. On $G$, $F=(1-\chi)f-u=f-h=f$ by step 5.1. Thus $F$ is an extension of $f$ to $\Omega$ in the sense of [F13]. [F3, F7, F13, step 2.1, step 4.1, step 5.1, given, algebra]

7.1 If $\widetilde F$ is any other holomorphic extension to $\Omega$, [F13] gives a nonempty open $V\subseteq G$ on which $\widetilde F=f$. By step 6.1, $F=f$ on all of $G$, so $\widetilde F-F$ vanishes on $V$. The identity theorem [F14] on the connected domain $\Omega$ gives $\widetilde F=F$. [F13, F14, step 6.1, given, algebra] ∎
