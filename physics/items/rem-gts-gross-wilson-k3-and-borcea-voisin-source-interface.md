---
id: rem-gts-gross-wilson-k3-and-borcea-voisin-source-interface
kind: remark
title: Gross–Wilson K3 and Borcea–Voisin source interfaces
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-gts-marked-m-polarized-k3-and-admissible-vector
  - def-gts-borcea-voisin-k3-involution-and-quotient-data
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-marked-m-polarized-k3-and-admissible-vector: mathematical-premise
  def-gts-borcea-voisin-k3-involution-and-quotient-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: §1 Proposition 1.3 and its proof; §2 K3 involution; §3 Borcea–Voisin construction and Proposition 3.1
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

This is a source and scope interface. Under AC, the separate construction theorem locally reconstructs the K3 rotation, elliptic pencil, real Kähler-chamber realization and quotient duality; the cited named source results are not external proof premises. Gross–Wilson Proposition 1.3 states that for a primitive $M\subset L$ of signature $(1,t)$, an m-admissible isotropic vector in $T=M^\perp$, a general marked K3 period in $D_M$, and a general compatible Kähler–Einstein metric, the K3 has a fibration $S\to S^2$ whose general fibres are special-Lagrangian $T^2$'s and which has a special-Lagrangian numerical m-section. The proof uses a decomposition $T\cong U(m)\oplus\check M$, a special period choice, hyper-Kähler rotation, an elliptic fibration after reflection in $(-2)$-classes, and an extension from special to general choices. The source invokes K3 period/Torelli and elliptic-fibration results at the cited locations. The local construction replaces those uses by analytic Riemann–Roch, the nef elliptic pencil, and an explicit conjugate-model mirror realization. For its richer numerical m-section conclusion, genuinely general choices exclude the additional countable real walls where another class becomes algebraic in the section rotation; the public fibration proof does not assume that irreducibility follows solely from period hyperplane avoidance.

A numerical m-section here is a surface whose topological intersection number with a general fibration fibre is $m$; it need not be an actual section of degree one.

For the Borcea–Voisin case, the source takes the stated K3 involution and elliptic-curve negation quotient, resolves its $4N$ $A_1$-curves, and restricts to a codimension-$4N$ wall limit of the Kähler cone. The limiting metric is degenerate on the compact resolution and Kähler–Einstein only on the complement of the exceptional locus. The special-Lagrangian $T^3$-fibration is asserted on that complement. Proposition 3.1 identifies the named Borcea–Voisin mirror as a smooth compactification of the topological dual torus fibration over the complement of the discriminant. This is topological duality; the source does not thereby prove an analytic or corrected-complex mirror equivalence.

On the quotient before resolution, the source's product fibration descends through the involutions. Let $\iota'$ be the map induced by $\iota$ on $S^2$, and let $j'$ be the map induced by elliptic negation $j$ on the base circle; in circle coordinate $t\in\mathbb R/\mathbb Z$, $j'(t)=-t$. The quotient square is
```tikz
\begin{tikzpicture}
  \node (SA) at (0,1.2) {$S\times A$};
  \node (Y) at (4.1,1.2) {$Y=(S\times A)/\langle(\iota,j)\rangle$};
  \node (base) at (0,0) {$S^2\times S^1$};
  \node (B) at (4.1,0) {$B=(S^2\times S^1)/\langle(\iota',j')\rangle$};
  \draw[->] (SA) -- node[above] {$q_X$} (Y);
  \draw[->] (SA) -- node[left] {$\widetilde\pi$} (base);
  \draw[->] (Y) -- node[right] {$\bar\pi$} (B);
  \draw[->] (base) -- node[below] {$q_B$} (B);
\end{tikzpicture}
```
The square commutes because the product fibration $\widetilde\pi$ is equivariant for the stated involutions, so its composite with $q_B$ is constant on $q_X$-orbits and factors through $\bar\pi$. The diagram concerns the source quotient; the resolution and the degenerate metric are handled only on the stated smooth complement.

The Ricci-flat metric is supplied by the locally proved Calabi theorem in the selected actual Kähler class. In the Borcea–Voisin comparison retain the restricted D′/T′ regime and both original- and mirror-period hyperplane exclusions in its data Definition. The chamber realization uses two operations. Put $a=B+E'+cE$, where $c=(\omega^2-B^2)/2$, and $\sigma=E'-E$. Take $w=\mathrm{id}$ when $(a,\sigma)>0$ and otherwise take the root reflection $w(x)=x+(x,\sigma)\sigma$; the mirror-period exclusion gives $(a,\sigma)=c-1\ne0$. First replace $a$ by the Kähler class $a'=w(a)$ on the conjugate elliptic model; rotation then constructs a mirror whose marked period is $[a'+i\omega]$. Re-marking that mirror by $w^{-1}$ gives the prescribed period $[a+i\omega]$, since $w$ fixes $\omega$ and $\check\omega$, and retains the mirror polarization $\check M$ and selected Kähler class $\check\omega$. The reflection alone does not fix the prescribed marked mirror period: it swaps $E,E'$ and sends $[B+E'+cE+i\omega]$ to $[B+E+cE'+i\omega]$. The auxiliary elliptic-fibre label consequently may change from $E$ to $E'$. The topological dual bundle and its involutions are unchanged; no fixed fibre-label preservation or corrected analytic mirror equivalence is asserted.

## Source references

[[def-gts-marked-m-polarized-k3-and-admissible-vector]]

[[def-gts-borcea-voisin-k3-involution-and-quotient-data]]
