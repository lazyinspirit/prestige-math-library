---
id: lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
kind: lemma
title: "Normal-transfer linking defines a symmetric surface pairing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-seifert-pairing-well-defined
  - thm-euclidean-inverse-function-theorem
  - thm-covering-space-lifting-criterion
  - thm-uniqueness-of-lifts-from-a-connected-space
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the library's positive-meridian linking and Seifert-pairing interfaces. The supplied surface presentation, transfer sums and local intersection computations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, §2 printed p.56 and Proposition 9 printed p.64"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. Let $F\subset S^3$ be a connected compact smooth embedded surface with nonempty boundary, possibly nonorientable, with a supplied finite smooth disk-and-band presentation. The ambient three-sphere has its standard orientation. For oriented integral multicurves $a,b\subset\operatorname{int}F$, let $\tau b$ be the cycle consisting of the two small normal pushes over $b$, oriented by projection to $b$. For a one-sided circle this is one circle mapping with degree two, rather than a choice of a single normal direction. Then
$B_F([a],[b])=\operatorname{lk}(a,\tau b)$ defines a well-defined symmetric integral bilinear pairing on $H_1(F;\mathbb Z)$, independently of representatives and sufficiently small normal pushes. Every integral homology class has an oriented multicurve representative, permitting integer coefficients. The pairing extends to rational homology, with quadratic form $q_F(x)=B_F(x,x)$ satisfying the normal-transfer linking identity.

For an embedded compact subsurface $A\subset F$ with such a finite presentation, the pairing on $A$ is the pullback of $B_F$ under inclusion. If $F$ is oriented and its boundary is one knot, its pairing has matrix $V+V^T$ in any integral basis, where $V$ is the positive-push Seifert matrix. Orientation-preserving ambient isotopies transport the pairing.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the compact embedded surface with nonempty boundary and supplied finite smooth disk-and-band presentation, and the standard ambient orientation.

[F1] The positive-meridian linking coefficient is a homomorphism on the first homology of the complement of each oriented circle. A positive local meridian has coefficient one. ([[def-one-variable-alexander-module-of-an-oriented-link]])

[F2] Linking of disjoint oriented circles is symmetric and extends bilinearly to their integral sums. On an oriented spanning surface for one knot, the positive-push Seifert pairing is well-defined on homology and every integral class has a multicurve representative. ([[lem-seifert-pairing-well-defined]])

[F3] A $C^1$ map with invertible differential has a $C^1$ local inverse with derivative $Df^{-1}(y)=Df(f^{-1}(y))^{-1}$. ([[thm-euclidean-inverse-function-theorem]])

[F4] A map from a path-connected locally path-connected simply connected domain lifts through a covering after one value is prescribed; two lifts agreeing at one point of a connected domain agree everywhere. ([[thm-covering-space-lifting-criterion]], [[thm-uniqueness-of-lifts-from-a-connected-space]])

## Proof

1.1 The supplied presentation retracts onto a finite graph: collapse each band along its interval fibers to its core and each disk to a finite radial star joining its band intervals. These contractions agree on attaching collars and can be performed in their finite disk and rectangle charts. An integral graph cycle has a finite collection of directed edge strands, with as many incoming as outgoing strands at every vertex. Realize the strands by parallel smooth arcs in the bands, with their directions transported through any band twist, and join the ends in each vertex disk. Finite smooth arcs in a disk can be drawn with finitely many transverse crossings, by using polygonal arcs and rounding their finitely many corners. Resolve each crossing by connecting incoming to outgoing arcs in a smaller disk. This changes the cycle by a boundary in that disk and leaves a finite disjoint union of oriented embedded circles with its original homology class. A small inward displacement keeps them in the interior. This proves the representative assertion without orienting $F$. [given, construct]

1.2 The round metric gives the normal line bundle of $F$. A sufficiently short closed normal interval bundle embeds in $S^3$: the normal exponential map has invertible differential along the zero section by [F3], a finite cover gives a common positive radius, and collisions at arbitrarily small radii would converge to a single base point and contradict a local inverse there. Boundary charts are first extended slightly across the boundary, so the same argument includes their interval fibers. The inverse is smooth by induction in the derivative formula in [F3]. Denote this embedded interval bundle by $N$, and its horizontal two-sheeted boundary cover by $\pi:\widetilde F\to F$. Its total space may be connected or disconnected. Round the corners along the vertical boundary away from any chosen multicurves, producing a smooth boundary surface $\Sigma=\partial N$ that retains their horizontal lifts. Both lifts of every oriented curve are oriented by projection. No global normal direction on $F$ has been selected. [given, F3, construct]

2.1 On singular chains in $F$ define $\tau\sigma$ to be the sum of the two lifts of a simplex $\sigma$ to $\widetilde F$. A simplex is contractible by its straight-line contraction to a vertex; it is path-connected and locally path-connected. Thus [F4] gives exactly one lift for each of the two points over that vertex. Restricting lifts to any face bijects the two lift sets, again by [F4]. Consequently $\partial\tau=\tau\partial$, and $\pi_\#\tau=2\operatorname{id}$. This construction works equally for the connected and disconnected cover and uses the sum of the entire lift set. Contracting normal fibers gives, for each cycle $a$, a finite singular two-chain in $N$ with boundary $\tau a-2a$, by triangulating the finitely many simplex prisms of that homotopy. [step 1.2, F4, construct, algebra]

3.1 Define $B_F([a],[b])=\operatorname{lk}(a,\tau b)$ using the representatives in step 1.1. If $a-a'=\partial C$ on $F$, then $C$ misses $\tau b$; hence the change in linking is zero by [F1] and the symmetry in [F2]. If $b-b'=\partial D$ on $F$, step 2.1 gives $\tau b-\tau b'=\partial(\tau D)$ off $F$, so this change also has linking zero with every component of $a$. Thus the value depends only on the two homology classes. Additivity of chain transfer and of linking gives integral bilinearity. Changing to another sufficiently small positive normal radius, or to different sufficiently small transverse normal representatives, is a homotopy in the complement of $F$ through normal fibers, so [F1] proves independence of the normal push. [step 1.1, step 1.2, step 2.1, F1, F2, algebra]

4.1 To prove symmetry choose the representatives $a,b$ transverse on $F$, using finite perturbations of the disk-and-band arcs, and put $x=\tau a$, $y=\tau b\subset\Sigma$. Push a cycle on $\Sigma$ slightly outward or inward from $N$, writing superscripts $o,i$. The chain in step 2.1 misses $y^o$, since the latter is outside $N$. Therefore $2B_F([a],[b])=\operatorname{lk}(x,y^o)$; here pushing $y$ outward did not meet $a$. Likewise $2B_F([b],[a])=\operatorname{lk}(y,x^o)=\operatorname{lk}(x^i,y)$. The last equality follows by shifting the disjoint pair $(y,x^o)$ together inward in the boundary collar and then applying [F2]. The difference $\operatorname{lk}(x,y^o)-\operatorname{lk}(x^i,y)$ is the same as $\operatorname{lk}(x^o,y)-\operatorname{lk}(x^i,y)$, by shifting the first pair inward and using symmetry. Passing $x$ from the inward to the outward level crosses $y$ once for each transverse crossing of $x$ and $y$ on $\Sigma$. Its linking change is their signed surface intersection, with one fixed global sign. Indeed remove a small disk at each crossing from the traced annulus: its remaining boundary relation in the complement of $y$ expresses the change as the sum of these signed positive meridians, and [F1] evaluates each as one. Each point of $a\cap b$ has two lifts, one on each side of $F$. Their signs are opposite because the orientation of $\partial N$ induced by its outward normal reverses between the two horizontal sheets. Thus the total signed intersection of $x,y$ is zero. This proves $2B_F([a],[b])=2B_F([b],[a])$, and integral cancellation proves symmetry. [step 1.2, step 2.1, step 3.1, F1, F2, construct, algebra]

5.1 If $F$ is oriented with one boundary knot, its transfer is the sum of positive and negative normal pushes. On a multicurve $a$, translating the disjoint pair $(a^-,a)$ together through the oriented normal collar gives $(a,a^+)$; symmetry in [F2] therefore identifies both self-linking terms. Hence $B_F([a],[a])=2\operatorname{lk}(a^+,a)$. By [F2] the right side is the quadratic form with matrix $V+V^T$. Every class has such a representative, and polarization of the symmetric bilinear forms in step 4.1 gives equality of the full pairings, not just of their diagonal values. This proves the stated matrix identification. [step 1.1, step 3.1, step 4.1, F2, algebra]

6.1 For a subsurface $A$, its normal line over each interior multicurve is the same as the normal line of $F$. The two transfer cycles and their linking values can therefore be chosen literally equal, proving pullback under inclusion, whether or not the inclusion on homology is injective. An orientation-preserving ambient isotopy transports the cycles and normal push homotopies and preserves their positive-meridian linking coefficients, so it transports $B_F$. Finally the finite graph in step 1.1 makes integral first homology free of finite rank; tensoring and clearing denominators extends the pairing uniquely to rational homology. Its diagonal satisfies the normal-transfer identity by step 3.1. All selections were finite within the supplied presentation, with full AC retained through the stated linking interfaces. [step 1.1, step 3.1, step 4.1, step 5.1, F1, F2, algebra] ∎
