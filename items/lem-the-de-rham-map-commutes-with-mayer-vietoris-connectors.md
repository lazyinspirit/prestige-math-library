---
id: "lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors"
kind: "lemma"
title: "The de Rham map commutes with Mayer–Vietoris connectors"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift","thm-smooth-singular-mayer-vietoris-sequence","lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis","thm-de-rham-integration-is-a-cochain-map","prop-naturality-of-the-de-rham-map","def-countable-choice","thm-barycentric-subdivision-is-chain-homotopic-to-the-identity","prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains","lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision"]
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For an ordered open cover $M=U\cup V$ of a smooth manifold, possibly with boundary, integration intertwines the de Rham and smooth singular Mayer–Vietoris connectors:
$$I_M\Delta_{\mathrm{dR}}=\Delta_\infty I_{U\cap V}.$$
Both sequences use second-minus-first difference and the positive lift-differential connector. If a smooth partition subordinate to $U,V$ is supplied, the proof uses no choice axiom.

## Facts & Assumptions

[F1] [[lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift]] gives the lift $(-\rho_V\omega,\rho_U\omega)$, its smooth zero extensions and the global closed form obtained by differentiating the lift.

[F2] [[thm-smooth-singular-mayer-vietoris-sequence]] constructs the smooth small-chain row and its positive connector through the actual inclusion.

[F3] [[lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis]] supplies degreewise zero extension on a specified simplex basis; its formula also applies to the smooth bases and is not a cochain map assertion.

[F4] [[thm-de-rham-integration-is-a-cochain-map]] gives $\delta I(\alpha)=I(d\alpha)$.

[F5] [[prop-naturality-of-the-de-rham-map]] gives restriction naturality of integration and its real linearity.

[F6] [[def-countable-choice]] is used only to obtain the partition in [F1].

[F7] [[thm-barycentric-subdivision-is-chain-homotopic-to-the-identity]] gives $1-S=\partial T+T\partial$.

[F8] [[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]] says that $S$ and $T$ preserve smooth chains and do not enlarge simplex images.

[F9] [[lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]] supplies a finite subdivision depth for every finite chain.

## Proof

**Given:** The ordered cover, $W=U\cap V$ and a closed $k$-form $\omega$ on $W$, with $k\ge0$. Let $C=C_\bullet^\infty(M;\mathbb R)$, let $A$ be its cover-small subcomplex and let $j:A\to C$ be inclusion. Denote restriction of a small cochain to the two opens by $a$, and their second-minus-first difference by $b$.

1.1 Take the partition supplied by [F1] under [F6], or the given partition in the choice-free branch. Set $\alpha=-\rho_V\omega$ on $W$, smoothly extended by zero in $U$, and $\beta=\rho_U\omega$ similarly in $V$. Then $\beta-\alpha=\omega$, and the pair $(d\alpha,d\beta)$ glues to a closed form $\zeta$ on $M$. By [F1], $\Delta_{\mathrm{dR}}[\omega]=[\zeta]$. Set $c=I_W^k(\omega)$ and $e=(I_U^k(\alpha),I_V^k(\beta))$. By [F4], $c$ is a cocycle; by [F5], $b(e)=c$ and $$\delta e=(I_U^{k+1}(d\alpha),I_V^{k+1}(d\beta))=a(j^*I_M^{k+1}(\zeta)).$$ [F1, F4, F5, F6, given]

2.1 Let $E_Uc$ be the function on smooth $k$-simplices in $U$ equal to $c$ when the simplex has image in $W$ and zero otherwise. An overlap-valued smooth simplex in $U$ is smooth in $W$: restrict its target-valued extension to the inverse image of the open set $W$. Thus this is the legitimate degreewise extension [F3]. The prescribed singular lift is $e_0=(-E_Uc,0)$, since $b(e_0)=c$. Its differential has zero difference, so the gluing in [F2] gives a unique small $(k+1)$-cochain $z_0$ with $a(z_0)=\delta e_0$. It is a cocycle because $a$ is injective and $a(\delta z_0)=\delta^2e_0=0$. The singular connector is $H(j^*)^{-1}[z_0]$. [F2, F3, step 1.1]

3.1 Define a small $k$-cochain $t$ on its simplex basis by giving priority to $U$: on a simplex $\sigma$ lying in $U$ put $$t(\sigma)=I_U^k(\alpha)(\sigma)+(E_Uc)(\sigma),$$ and on a small simplex not lying in $U$ (hence lying in $V$) put $t(\sigma)=I_V^k(\beta)(\sigma)$. If a simplex lies in both opens, it lies in $W$ and the first value is $I_W(\alpha+\omega)(\sigma)=I_W(\beta)(\sigma)$ by [F5]. Thus $t$ glues precisely $e-e_0$: $a(t)=e-e_0$. Since $a$ is an injective cochain map, step 1.1 and step 2.1 give $$\delta t=j^*I_M^{k+1}(\zeta)-z_0.$$ This is the explicit lower-degree coboundary between the integrated form lift and the basiswise singular lift. [F2, F3, F5, step 1.1, step 2.1]

4.1 Construct the needed full-to-small operators directly. For each smooth simplex $\sigma$, [F9] gives a least $a(\sigma)$ with $S^{a(\sigma)}\sigma$ small. Recursively on dimension let $m(\sigma)$ be the maximum of $a(\sigma)$ and the already defined values on its faces; if $\sigma$ is small then $m(\sigma)=0$. Put $D_q=\sum_{i=0}^{q-1}TS^i$, so [F7] telescopes to $1-S^q=\partial D_q+D_q\partial$. Define $D\sigma=D_{m(\sigma)}\sigma$ and $R=1-\partial D-D\partial$. Then $R$ is a chain map, $Rj=1$, and $1-jR=\partial D+D\partial$. Moreover $R$ lands in $A$: after rewriting $$R\sigma=S^{m(\sigma)}\sigma+D_{m(\sigma)}\partial\sigma-D\partial\sigma,$$ the first term is small, while each face correction is a signed sum of $TS^i\tau$ for $m(\tau)\le i<m(\sigma)$ and hence is small by [F8]. Thus all operators preserve smooth chains and are specified without choice. Put $q=I_M^{k+1}(\zeta)$; it is closed by [F4]. The displayed homotopy identity gives $$q-R^*j^*q=\delta(qD_k),$$ because $q\partial=0$. Precompose the identity in step 3.1 with $R$ and add it to this equality. The result is the concrete full-cochain identity $$q-R^*z_0=\delta\bigl(qD_k+R^*t\bigr).$$ Every evaluation here is on a finite chain produced by the specified operators. [F4, F7, F8, F9, step 1.1, step 3.1]

5.1 The identities for $R,j,D$ in step 4.1 make $H(R^*)$ inverse to $H(j^*)$. Thus step 4.1 implies $[I_M^{k+1}(\zeta)]=H(j^*)^{-1}[z_0]$. By step 1.1 the left side is $I_M\Delta_{\mathrm{dR}}[\omega]$, and by step 2.1 the right side is $\Delta_\infty I_W[\omega]$. Both connectors and integration are already well defined, so this proves the asserted equality on classes, independently of partition, lift and representative. [F1, F2, step 1.1, step 2.1, step 4.1]

6.1 For $k=0$, $t$ is a zero-cochain and $qD_0$ is also a zero-cochain; the formula compares degree-one connectors without any negative primitive. Negative overlap degrees are zero. If $W$ is empty, both connectors are zero; empty opens and the empty manifold likewise reduce to zero terms. If $U=V=M$, both connectors vanish by their explicit lifts, and the same calculation remains valid. Zero forms and repeated or degenerate simplices satisfy the pointwise formulas unchanged. The signs in steps 1.1–3.1 use $(-E_Uc,0)$ and $V-U$ throughout. Apart from [F6] for obtaining the form partition, all extensions, priorities, subdivision depths and sums are specified, so the supplied-partition branch is choice-free. [F1, F2, F3, F6, F7, F8, F9, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
