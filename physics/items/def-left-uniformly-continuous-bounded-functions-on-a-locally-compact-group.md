---
id: def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
kind: definition
title: Left-uniformly continuous bounded functions (UCB)
status: published
origin: pipeline
dependency_level: 1
deps:
  - def-left-haar-integral-and-left-haar-measure
  - def-complex-haar-l-infinity-space
  - thm-continuous-preimages-of-borel-sets-are-borel
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, §G.1: definition of UCB(G) as a closed translation-invariant subspace of bounded functions and the orbit-map characterization (printed p. 448)"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "Definition of UCB(G) as an L-infinity-class orbit-continuity subspace and its invariance under the G-action (PDF pp. 5–6, file pages indexed 4–5)"
---

## Definition

Let $B_b(G;\mathbb C)$ be the actual bounded complex-valued functions on a
locally compact Hausdorff group $G$, with
$\|\varphi\|_{\sup}:=\sup_{y\in G}|\varphi(y)|$. For $x\in G$ set
$(L_x\varphi)(y):=\varphi(x^{-1}y)$. Define
$$\mathrm{UCB}(G):=\{\varphi\in B_b(G;\mathbb C):\|L_x\varphi-\varphi\|_{\sup}\longrightarrow0\text{ as }x\longrightarrow e\}.$$
These are actual functions, not chosen representatives of equivalence
classes. They are continuous and form a closed translation-invariant subspace
of $B_b(G;\mathbb C)$. The left translation action
$G\times\mathrm{UCB}(G)\to\mathrm{UCB}(G)$ is jointly continuous in the
sup-norm topology. For any fixed left Haar measure $\mu$, the class map
$\varphi\mapsto[\varphi]$ embeds $\mathrm{UCB}(G)$ isometrically into the
complex $L^\infty(G,\mu)$ space. In particular, a UCB function that vanishes
$\mu$-almost everywhere vanishes everywhere.

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$ with a fixed left Haar measure $\mu$.

[A1] The group operations are continuous, each left translation is a bijection, and $\mu$ is a Borel left-invariant measure ([[def-left-haar-integral-and-left-haar-measure]]).

[A2] Every nonempty open subset of $G$ has positive $\mu$-measure ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F1] $L^\infty(G,\mu;\mathbb C)$ consists of Borel measurable complex functions modulo almost-everywhere equality, with the essential-supremum norm ([[def-complex-haar-l-infinity-space]]).

[F2] A continuous complex-valued function on $G$ is Borel measurable ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

## Proof

**Proof technique:** direct.

1.1 If $\varphi\in\mathrm{UCB}(G)$, then it is continuous at every $t\in G$. Indeed, for $y\to t$ put $x=yt^{-1}\to e$; then $\varphi(y)=\varphi(xt)=(L_{x^{-1}}\varphi)(t)$, so $|\varphi(y)-\varphi(t)|\le\|L_{x^{-1}}\varphi-\varphi\|_{\sup}\to0$. Here $x^{-1}\to e$ by continuity of inversion. [A1, given, algebra]

1.2 The zero function belongs to $\mathrm{UCB}(G)$. For $\varphi,\psi\in\mathrm{UCB}(G)$ and $a\in\mathbb C$, the estimates $\|L_x(\varphi+\psi)-(\varphi+\psi)\|_{\sup}\le \|L_x\varphi-\varphi\|_{\sup}+\|L_x\psi-\psi\|_{\sup}$ and $\|L_x(a\varphi)-a\varphi\|_{\sup}=|a|\|L_x\varphi-\varphi\|_{\sup}$ show closure under addition and scalar multiplication. Thus it is a linear subspace of the bounded functions. [given, algebra]

1.3 Let $\varphi$ lie in the norm closure of $\mathrm{UCB}(G)$. For $x\in G$, choose $\psi\in\mathrm{UCB}(G)$ with $2\|\varphi-\psi\|_{\sup}<\varepsilon/2$. Then $\|L_x\varphi-\varphi\|_{\sup}\le2\|\varphi-\psi\|_{\sup}+\|L_x\psi-\psi\|_{\sup}$, since left translation is an isometry for the sup norm. By the defining condition for $\psi$, a neighborhood of $e$ makes the last term $<\varepsilon/2$. Hence $\|L_x\varphi-\varphi\|_{\sup}<\varepsilon$ there, so $\varphi\in\mathrm{UCB}(G)$ and the subspace is closed. [A1, given, algebra]

1.4 For $g\in G$, the group law gives $L_xL_g=L_gL_{g^{-1}xg}$. Therefore $\|L_x(L_g\varphi)-L_g\varphi\|_{\sup}= \|L_{g^{-1}xg}\varphi-\varphi\|_{\sup}\to0$ as $x\to e$, because $g^{-1}xg\to e$. So $L_g\varphi\in\mathrm{UCB}(G)$ and the subspace is translation-invariant. [A1, given, algebra]

2.1 Fix $(x_0,\varphi_0)\in G\times\mathrm{UCB}(G)$. For all $x\in G$ and $\varphi\in\mathrm{UCB}(G)$, $\|L_x\varphi-L_{x_0}\varphi_0\|_{\sup}\le \|\varphi-\varphi_0\|_{\sup}+ \|L_{x_0^{-1}x}\varphi_0-\varphi_0\|_{\sup}$. The first term tends to zero as $\varphi\to\varphi_0$ and the second as $x\to x_0$ by the defining condition for $\varphi_0$. This proves joint continuity of the left action. [A1, step 1.3, algebra]

3.1 By [F2], each $\varphi\in\mathrm{UCB}(G)$ is Borel measurable and so defines a class $[\varphi]$ in [F1]. Put $M=\|\varphi\|_{\sup}$. If $0\le t<M$, then some point has $|\varphi|>t$, and continuity makes $\{y:|\varphi(y)|>t\}$ a nonempty open set. It has positive measure by [A2], so $\|[\varphi]\|_\infty\ge t$. Also $\|[\varphi]\|_\infty\le M$ because $|\varphi|\le M$ everywhere. Letting $t\uparrow M$ when $M>0$, and noting both norms are zero when $M=0$, gives $\|[\varphi]\|_\infty=\|\varphi\|_{\sup}$. The class map is therefore isometric and injective; in particular, an almost-everywhere zero UCB function is identically zero. [A2, F1, F2, step 1.1, construct, algebra] ∎
