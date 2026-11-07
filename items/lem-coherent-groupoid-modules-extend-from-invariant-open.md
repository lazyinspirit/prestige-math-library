---
id: lem-coherent-groupoid-modules-extend-from-invariant-open
kind: lemma
title: "Coherent groupoid modules extend from invariant opens"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - lem-nagata-coherent-submodule-extension-and-integral-algebra-approximation
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - def-quasi-coherent-module-scheme
  - def-coherent-module-scheme
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the stated finite atlas and descent conventions."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, colimits of quasi-coherent groupoid modules"
      url: "https://stacks.math.columbia.edu/tag/0GPS"
      locator: "Lemma 78.13.4; the scheme-groupoid approximation and open-extension argument is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $(U,R,s,t,c)$ be a groupoid in schemes with $U$ and $R$ Noetherian and quasi-compact, and with $s,t:R\to U$ flat and quasi-separated. Let $V\subseteq U$ be a quasi-compact invariant open, and let $E$ be a coherent quasi-coherent module on the restricted groupoid. Then there is a coherent quasi-coherent module $\widetilde E$ on the full groupoid whose restriction to $V$ is isomorphic to $E$. Here a groupoid module is a quasi-coherent module on $U$ equipped with its actual compatible descent isomorphism on $R$.

## Facts & Assumptions

**Given:** The Noetherian scheme groupoid, invariant quasi-compact open and coherent restricted groupoid module in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Every quasi-coherent module on a Noetherian scheme is the filtered union of its coherent submodules. [[lem-nagata-coherent-submodule-extension-and-integral-algebra-approximation]]

[F2] Faithfully flat module descent is effective and compatible with base change. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F3] Quasi-coherent and coherent modules have their stated affine-local module descriptions. [[def-quasi-coherent-module-scheme]] [[def-coherent-module-scheme]]

## Proof

**Proof technique:** form the groupoid-stable coherent core of a coherent atlas submodule, then apply it to the open pushforward.

1.1 Let $(M,\beta)$ be a quasi-coherent groupoid module. For a quasi-coherent $H$ on $U$, put $Q(H)=s_*t^*H$. The groupoid composition, inversion and the flat base-change isomorphism $t^*s_*\cong\operatorname{pr}_{1,*}\operatorname{pr}_0^*$ give $Q(H)$ its natural groupoid descent isomorphism; composition associativity is its cocycle equation. The adjunction map $(M,\beta)\to Q(M)$ is equivariant, and the identity section $e:U\to R$ shows it is injective. All these maps are the ordinary pullback and pushforward maps on the groupoid, not a chosen global section of an arbitrary cover. [A1, F2, F3, given, construct, algebra]

2.1 By [F1], write $M$ as the filtered union of coherent submodules $H_i$. Define the groupoid submodule $M_i=M\cap Q(H_i)$ inside $Q(M)$. Since $t$ is flat, $Q(H_i)\to Q(M)$ is injective; the pullback intersection is quasi-coherent and inherits the groupoid descent datum. Pulling its defining inclusion back along the identity section shows $M_i\subseteq H_i$. A quasi-coherent submodule of a coherent module on a Noetherian scheme is coherent, so each $M_i$ is coherent. [F1, F3, step 1.1, construct, algebra]

3.1 The functor $Q$ commutes with filtered unions. Indeed $t^*$ is a tensor functor, and $s_*$ commutes with filtered colimits on quasi-coherent modules: over an affine open of $U$, cover its quasi-compact inverse image and its quasi-compact overlaps by finitely many affines, then compute sections by a finite equalizer; filtered colimits commute with those finite limits. Hence $Q(M)=\varinjlim_iQ(H_i)$ and every local section of $M$ lies locally in some $M_i$. The $M_i$ form a filtered system, since sums of coherent $H_i$ are coherent. Thus $M$ is the filtered union of coherent groupoid submodules. [F1, F3, step 2.1, algebra]

4.1 Let $j:V\hookrightarrow U$ be the invariant quasi-compact open. The ordinary $j_*E$ on $U$ is quasi-coherent: over an affine open use a finite principal cover of its intersection with $V$ and the finite equalizer for sections. Invariance and flat base change carry the descent datum of $E$ to a groupoid datum on $j_*E$, whose restriction to $V$ is $E$. By step 3.1 it is the filtered union of coherent groupoid submodules. A finite affine cover of $V$ and finitely many generators of the coherent module $E$ give one index whose submodule contains those generators; after restriction it is exactly $E$. This coherent groupoid submodule is the required $\widetilde E$. The empty open gives the zero extension. [A1, F2, F3, step 3.1, construct, algebra] ∎
