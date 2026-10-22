---
id: lem-os-unlink-resolution-covers-and-floer-tqft
kind: lemma
title: "Unlink resolution covers and the Heegaard Floer TQFT"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - lem-double-branched-cover-of-an-oriented-link-well-defined
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: direct
axiom_use: "Uses the ACω analytic branch of Heegaard Floer theory; the unlink topology computation itself is choice-free."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, Propositions 6.1 and 6.2"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

For the $k$-component planar unlink $U_k$, its double branched cover is $\#^{\,k-1}(S^2\times S^1)$, with $\Sigma(U_1)=S^3$. Over $\mathbb F_2$, the hat Floer group of this cover is identified with the exterior algebra on a $(k-1)$-dimensional vector space, hence has rank $2^{k-1}$. Under these identifications, the cobordism maps for the saddle cobordisms between unlink resolutions are the multiplication and comultiplication maps of the two-dimensional Frobenius algebra $\mathbb F_2[X]/(X^2)$ after reduction at a marked component. The identification includes the marked-circle cases and fixes the basis conventions needed to compare the first surgery differential with the reduced Khovanov cube.

## Statement references

[[lem-double-branched-cover-of-an-oriented-link-well-defined|Double-cover existence and local branch convention]]

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold|Hat Floer definition]]

[[lem-os-disk-and-polygon-analytic-foundations|Analytic map-count obligations]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Propositions 6.1 and 6.2](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** A planar unlink resolution and the saddle cobordisms between its neighboring resolutions.

[F1] The double branched cover and its orientation are defined and well-defined up to oriented diffeomorphism ([[lem-double-branched-cover-of-an-oriented-link-well-defined]]).

[F2] The group is defined by the closed-manifold disk-count complex ([[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]]).

[F3] The actual analytic foundations [[lem-os-disk-and-polygon-analytic-foundations]] provide finite zero-basepoint disk and polygon counts, compactified boundaries, exhaustive gluing and the resulting identities under their actual operation-specific global weak, ordinary specified-sector weak or strict admissibility hypotheses. They include positive-rank pointed triple-free representatives and the rank-zero point target. These local identities do not compute the exterior-algebra basis or its $H_1$ action, prove a named top input is a cycle, or identify an unlink saddle map with a prescribed Frobenius map.

## Proof

1.1 The topology assertion has a direct finite construction. Put the planar $k$-component unlink, $k\ge1$, in its standard $k$-bridge position: the upper and lower balls each contain $k$ boundary-parallel arcs with the same noncrossing matching of their $2k$ endpoints. Choose their disjoint bridge disks. Cutting either ball along those disks trivializes the branch construction. Its double cover is two balls joined by $k$ one-handles; the first joins the two zero-handles, and each remaining handle adds one genus. Thus it is a genus-$k-1$ handlebody. The two bridge matchings and disk systems agree in the projection sphere, so the cover of the unlink is the double of this handlebody with matching meridian disks. Doubling each of its $k-1$ co-core disks gives disjoint nonseparating two-spheres. Cutting them removes those one-handles and leaves a sphere with paired ball holes; regluing the pairs gives $\#^{k-1}(S^2\times S^1)$. For $k=1$ it is the double of a ball, hence $S^3$. This finite cut-and-glue construction uses the actual local branched-cover convention of [F1], and no Floer map. [F1, given, construct, finite handle calculation]

1.2 Here is the complete finite algebra required of the still-missing Floer map computation. Order the unmarked circles of a based $k$-circle state, and assign to them generators $x_c$. The reduced state space is $\Lambda_{\mathbb F_2}\langle x_c\rangle$: the basis monomial on a subset labels those circles by $X$, the others by $1$, and the marked circle by the quotient label $1$. Exterior multiplication is commutative over $\mathbb F_2$ and each $x_c^2=0$. Thus this state space has dimension $2^{k-1}$, once an actual Floer vertex identification with it is supplied. This is a computation of the required state algebra, not yet of $\widehat{HF}$. [given, finite algebra]

1.3 Write $A=\mathbb F_2[X]/(X^2)$. For an unmarked merge the required map is $m(1,1)=1$, $m(1,X)=m(X,1)=X$, $m(X,X)=0$. For an unmarked split it is $\Delta(1)=1\otimes X+X\otimes1$, $\Delta(X)=X\otimes X$. If a marked circle merges with an unmarked one, reducing the output kills $X$ on the marked factor, so $1\otimes1\mapsto1$ and $1\otimes X\mapsto0$. If a marked circle splits, reduce the child containing the original point: $\Delta(1)$ then becomes $1_{\rm marked}\otimes X_{\rm new}$ (with factors exchanged when necessary). Hence marked split creates the unmarked label $X$, not $1$. All untouched factors are carried identically. These are literal quotient calculations and include both marked cases. [step 1.2, finite algebra]

1.4 Equivalently, unmarked merge is the exterior-algebra quotient identifying $x_c,x_d$ with $x_e$. Unmarked split is $(x_d+x_e)\wedge\Lambda\iota$, where $\iota(x_c)=x_d$ and other generators are unchanged; choosing $x_e$ instead gives the same map, since $(x_d+x_e)^2=0$. Marked merge is quotient by the disappearing $x_c$, and marked split is wedge with the newly created $x_e$. Thus these four precise quotient/wedge operations, in a common state basis, are the finite map targets for the analytic surgery-edge calculation. [steps 1.2–1.3, finite algebra]

2.1 The retained analytic theorem [F3] does not identify the actual Floer vertex group with this algebra or evaluate these four edge maps. The chosen split-unlink top-cycle transfer, where available, also does not compute arbitrary unlink edge maps or their compatible state bases; it cannot be substituted for them. Still required are an actual admissible unlink diagram with its full disk calculation, compatible vertex basis/$H_1$-action identifications, and the surgery-triangle counts producing all four maps in steps 1.3–1.4. General map regularity alone does not supply these values. Accordingly the topology and finite reduced-algebra bindings above are proved, while the full Floer TQFT Statement remains held at exactly this operation-specific count and basis interface. [F2, F3, steps 1.1–1.4]
