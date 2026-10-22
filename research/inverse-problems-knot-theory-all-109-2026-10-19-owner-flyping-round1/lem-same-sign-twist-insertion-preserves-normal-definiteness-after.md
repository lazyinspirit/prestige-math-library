---
id: lem-same-sign-twist-insertion-preserves-normal-definiteness
kind: lemma
title: "Same-sign twist insertion preserves normal definiteness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - lem-proper-arc-cuts-preserve-definite-normal-pairings
  - thm-mayer-vietoris-sequence-in-singular-homology
  - def-one-variable-alexander-module-of-an-oriented-link
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the full normal-transfer pairing, linking number and arc-cut suppliers. The parametrized band, product neck and homology computations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Figure 29 and Proposition 6.4, PDF pp.34–35"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F\subset S^3$ be a compact smooth embedded spanning surface with no closed components, possibly disconnected and nonorientable, and let $\alpha$ be a proper smooth arc on it. Let $m\ne0$ be an integer. In a ball separated from $F$, take the embedded annulus or Möbius band $A_m$ parametrized by
$$a_m(\theta,t)=\bigl((R+t\cos(m\theta/2))\cos\theta,\ (R+t\cos(m\theta/2))\sin\theta,\ -t\sin(m\theta/2)\bigr),$$
where $0\le\theta\le2\pi$, $|t|\le r$, $R>2r$, and $(2\pi,t)$ is identified with $(0,(-1)^m t)$. Scale it into that ball by an orientation-preserving similarity. Let $\alpha'$ be a co-core $\theta=\theta_0$ of this band. Form a separated untwisted product boundary sum $F^*=F\mathbin{\natural}A_m$, choosing its attaching interval near one endpoint of $\alpha$ and one endpoint of $\alpha'$ so that the two arcs join across the product neck to one proper arc $\alpha''$. Define the $m$-half-twist insertion along $\alpha$ to be the surface $F_m$ obtained by cutting $F^*$ along $\alpha''$ and rounding inside $F^*$.

If the full normal-transfer pairing on $F$ is positive definite and $m>0$, then that on $F_m$ is positive definite. If the pairing on $F$ is negative definite and $m<0$, then that on $F_m$ is negative definite. Moreover $c(F_m)=c(F)$ and $b_1(F_m)=b_1(F)$, where $c$ counts components and $b_1$ is the rational first Betti number. The boundary undergoes the specified twist insertion.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]]

[[lem-proper-arc-cuts-preserve-definite-normal-pairings]]

## Facts & Assumptions

**Given:** Full AC, the compact boundary surface with its proper arc, the signed nonzero integer, the explicit separated band and untwisted product boundary sum with the joined proper arc.

[F1] Compact smooth surfaces without closed components have free finite-rank first homology and a full symmetric normal-transfer pairing given by linking with the double normal push. Cross-component entries are included. ([[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F2] Cutting along a proper arc injects first homology and restricts the full normal pairing, preserving either sign of definiteness. A nonseparating cut preserves component count and lowers $b_1$ by one. ([[lem-proper-arc-cuts-preserve-definite-normal-pairings]])

[F3] Mayer–Vietoris is exact for a two-set open cover. ([[thm-mayer-vietoris-sequence-in-singular-homology]])

[F4] Positive-meridian linking is the homology coefficient in a circle complement and assigns one to a positive local meridian. ([[def-one-variable-alexander-module-of-an-oriented-link]])

## Proof

1.1 Since $R>2r$, the cylindrical radius of $a_m(\theta,t)$ is positive. Its polar angle recovers $\theta$ modulo $2\pi$, and its radial and vertical displacements recover $t$ on that angle's band interval. Its two derivatives are independent: the $\theta$ derivative has a nonzero angular component and the $t$ derivative is a nonzero vector in its radial-vertical plane. The stated endpoint identification matches the map and all derivatives. Thus it is a smooth embedded band, an annulus for even $m$ and a Möbius band for odd $m$. It retracts onto its oriented core $a_m(\theta,0)$, giving $H_1(A_m;\mathbb Z)=\mathbb Z$. [given, construct]

2.1 On that core the band normal lies in the radial-vertical plane and rotates by $m\pi$ during one core circuit. The plane's positively oriented frame for the core orientation is radial-outward followed by negative vertical. The band transverse tangent has coordinates $(\cos(m\theta/2),\sin(m\theta/2))$ in this frame. The surface normal is its fixed quarter-turn, so its angular change is also $m\pi$. The reference longitude given by a constant radial-outward push has linking zero: it is a concentric planar circle. If $m$ is even, each of the two normal lifts is one longitude plus $m/2$ positive meridians; if $m$ is odd, the single lifted circle makes two core circuits and has $m$ positive meridians in total. Hence in either case [F4] gives linking $m$ with the core. By [F1] the normal pairing of $A_m$ is therefore the one-by-one matrix $[m]$. [step 1.1, F1, F4, construct, algebra]

3.1 In the boundary sum a small thickening of $F$ together with half its product neck meets a small thickening of $A_m$ with the other half in a rectangle. The overlap is contractible and the neck connects the band to just the chosen component of $F$. The degree-zero overlap map is injective. Thus [F3] gives $H_1(F^*;\mathbb Z)=H_1(F;\mathbb Z)\oplus H_1(A_m;\mathbb Z)$, induced by the two old inclusions; also $c(F^*)=c(F)$. Choose old cycles away from the boundary attaching interval, and use the band core for the last basis class. Their old-old linking entries are unchanged. The band core and its short normal transfers lie in the separated band ball, while the old cycles and transfers lie outside it, so all mixed linking numbers vanish: the core cycles bound chains in their ball, disjoint from those old cycles. The full matrix is therefore $G\oplus[m]$, even if $G$ itself has nonzero cross-component entries. Consequently this full form is positive definite when $G$ is positive definite and $m>0$, and negative definite in the corresponding negative case. [step 2.1, F1, F3, F4, construct, algebra]

4.1 The core of $A_m$ crosses its co-core $\alpha'$ once and misses the boundary-sum neck and the part of $\alpha''$ on $F$. Arrange the small endpoint joining charts away from this crossing. Thus it is a closed curve on the affected component of $F^*$ crossing $\alpha''$ transversely exactly once. A separating proper arc would force every closed curve to cross it an even number of times: crossings alternate between its two complementary components, and a closed curve returns to its starting component. This parity statement does not require orientability. Therefore $\alpha''$ is nonseparating on its component. [given, step 1.1, step 3.1, construct, contradiction]

5.1 Apply [F2] to the cut along $\alpha''$. Its pairing is a restriction through an injective homology map of the definite form in step 3.1, so it has the same strict sign. Every resulting component has nonempty boundary. Since the cut is nonseparating by step 4.1, [F2] gives $c(F_m)=c(F^*)=c(F)$ and $b_1(F_m)=b_1(F^*)-1$. Step 3.1 gives $b_1(F^*)=b_1(F)+1$, proving the asserted first-Betti-number equality. These arguments allow the specified initial disconnected and nonorientable surfaces; neither the product neck nor the cut changes their untreated components. [step 3.1, step 4.1, F1, F2, algebra] ∎
