---
id: "thm-smooth-singular-mayer-vietoris-sequence"
kind: "theorem"
title: "Smooth singular mayer vietoris sequence"
deps: ["thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence", "def-smooth-singular-chain-and-cochain-complexes", "prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains", "thm-cover-small-inclusion-is-a-chain-homotopy-equivalence", "thm-long-exact-sequence-in-cohomology", "lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 16; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an ordered two-open cover $M=U\cup V$ of a smooth manifold, possibly with boundary, smooth singular cohomology has a natural Mayer–Vietoris sequence
$$\cdots\to H_\infty^k(M;\mathbb R)\to H_\infty^k(U;\mathbb R)\oplus H_\infty^k(V;\mathbb R)\to H_\infty^k(U\cap V;\mathbb R)\xrightarrow{\Delta_\infty}H_\infty^{k+1}(M;\mathbb R)\to\cdots.$$
The maps before the connector are restriction and $V-U$ difference; the connector is positive lift-differential, with the small-complex cohomology identified by the actual inclusion. Naturality holds for smooth maps preserving the ordered cover. Negative groups vanish and the sequence begins with $0\to H_\infty^0(M;\mathbb R)$.

## Facts & Assumptions

**Given:** The ordered open cover. Write $C=C_\bullet^\infty(M;\mathbb R)$, and $A$ for its cover-small subcomplex.

[F1] The ordinary two-open dual sequence is proved by gluing functions on the simplex bases and zero extension ([[thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence]]).

[F2] Smooth chains form a subcomplex and smooth cochains are its real dual ([[def-smooth-singular-chain-and-cochain-complexes]]).

[F3] Subdivision $S$ and its homotopy $T$ preserve smooth chains and do not enlarge simplex images ([[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]]).

[F4] The ordinary small-chain inverse is constructed from least subdivision depths and the identity $1-S=\partial T+T\partial$ ([[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]]).

[F5] Every finite chain becomes cover-small after sufficiently many subdivisions ([[lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]]).

[F6] Short exact cochain sequences give long exact cohomology sequences ([[thm-long-exact-sequence-in-cohomology]]).

## Proof

1.1 For a smooth simplex $\sigma$, let $a(\sigma)$ be the least nonnegative integer such that $S^{a(\sigma)}\sigma$ is small; [F5] supplies existence. Set $m=0$ on vertices and recursively $m(\sigma)=\max(\{a(\sigma)\}\cup\{m(\sigma\delta_j)\}_j)$. Each maximum is finite, faces have smaller dimension, and [F3] ensures all face and subdivision chains remain smooth. A small simplex has $m=0$, by induction on its faces. [given, F2, F3, F5]

2.1 Define $D_q=\sum_{i=0}^{q-1}TS^i$, so $1-S^q=\partial D_q+D_q\partial$ by telescoping [F4]. Set $D\sigma=D_{m(\sigma)}\sigma$ and $R=1-\partial D-D\partial$, extending on the supplied smooth basis. Then $\partial R=R\partial$. On a simplex, $R\sigma=S^{m(\sigma)}\sigma+D_{m(\sigma)}\partial\sigma-D\partial\sigma$. For each face $\tau$, its correction is the signed sum $\sum_{i=m(\tau)}^{m(\sigma)-1}TS^i\tau$; every term is smooth and small because $S^{m(\tau)}\tau$ is small and $S,T$ preserve that property. Thus $R$ lands in $A$. [F2, F3, F4, step 1.1, algebra]

3.1 With $I:A\to C$ and $r=R:C\to A$, the identities are $1-Ir=\partial D+D\partial$ and $rI=1$, since $D$ vanishes on small simplices and their faces. Dualizing these actual equations gives $\theta_\infty=H(I^*):H_\infty^k(M)\cong H^k(\operatorname{Hom}_{\mathbb R}(A,\mathbb R))$: the cochain homotopy is precomposition with $D_{k-1}$. This proves the needed equivalence within smooth chains, independently of any smooth/continuous comparison theorem. [F2, step 1.1, step 2.1, algebra]

4.1 The smooth bases for $U$ and $V$, viewed in $M$, have intersection precisely the smooth overlap basis. To check the corestriction clause, restrict any extension of an overlap-valued simplex to the open inverse image of $U\cap V$, which contains its simplex. Thus the argument [F1] applies to these bases: restrictions inject the small dual into the pair of cochains, agreeing pairs glue uniquely by priority-U values, and $(-E_U\eta,0)$ maps to $\eta$ under $V-U$ difference. Signed face restrictions make both arrows cochain maps. Apply [F6] to this explicitly exact smooth row and identify its first cohomology through $\theta_\infty$ from step 3.1. This proves the sequence and initial injection. [F1, F2, F6, step 3.1]

5.1 For clarity, lift an overlap cocycle $c$ to a pair $e$; its differential equals $a(d)$ for a unique small cocycle $d$. The connector is $\theta_\infty^{-1}[d]$. Changing the lift by $a(t)$ changes $d$ by $\delta t$; changing $c$ by $\delta c_0$ and adding the differential of a lift of $c_0$ leaves $d$ unchanged. For a smooth ordered-cover map, postcomposition preserves each small smooth basis and commutes with inclusions and signed arrows. The image of $e$ is a lift of the image of $c$, proving connector naturality, and the natural inclusion square transports it through $\theta_\infty$. [F1, F2, step 3.1, step 4.1, algebra]

6.1 Negative degrees have zero terms; at degree zero all vertices are small, $m=D=0$, and no negative primitive exists. Empty opens and overlap give zero terms; when $U=V=M$ the row is diagonal then difference, with connector zero by the lift $(0,c)$. This includes one-point and empty manifolds. Degenerate simplices have the same face recursion; no quotient discards them. Least integers, finite maxima and prescribed zero values give all constructions without AC, including boundary targets. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
