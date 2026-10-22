---
id: lem-interior-tube-addition-preserves-normal-pairing-signature
kind: lemma
title: "Interior tube addition preserves the normal-pairing signature"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-mayer-vietoris-sequence-in-singular-homology
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the normal-transfer linking pairing and its linking-number interface; all surface homology and block-matrix calculations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Proposition 10, printed pp.64–66"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. Let $F\subset S^3$ be a connected compact smooth embedded surface with nonempty boundary and a supplied finite smooth disk-and-band presentation, allowing nonorientability. Let an embedded product cylinder $W=[-1,1]\times D^2$ meet $F$ exactly in its two end disks, lying in the interior of $F$. Replace those disks by the lateral annulus $[-1,1]\times\partial D^2$ and round the two seams, leaving the rest fixed, to obtain $F'$. The normal-transfer pairing of $F'$ has the same signature as that of $F$.

More precisely, old homology basis curves can be chosen away from the two disks and extended by two classes $b,c$ to a basis for $H_1(F';\mathbb Z)$ in which the new pairing matrix is
$$\begin{pmatrix}G&v&0\\v^T&k&\delta\\0&\delta&0\end{pmatrix},\qquad k\in\mathbb Z,\quad\delta\in\{1,-1\},$$
where $G$ is the old matrix. The boundary link and its entire surface collar remain fixed. In particular, for common chosen boundary normal push-offs $K_i'$ of its components $K_i$, the quantity $e(F)=-\sum_i\operatorname{lk}(K_i,K_i')$ is unchanged, as is $\operatorname{sign}(B_F)+e(F)/2$.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]]

## Facts & Assumptions

**Given:** Full AC, the connected finitely presented smooth surface, the product cylinder with its two specified end disks, and the rounded tube replacement fixed away from those disks and seams.

[F1] Normal-transfer linking defines a symmetric integral pairing, extends rationally, and agrees with the linking values of the two normal pushes of representatives; a finite disk-and-band surface has free finite-rank first homology. ([[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]])

[F2] Positive-meridian linking is a homomorphism on complement homology, evaluating a positively oriented local meridian as one. ([[def-one-variable-alexander-module-of-an-oriented-link]])

[F3] Mayer–Vietoris gives the exact homology sequence for a two-set open cover. ([[thm-mayer-vietoris-sequence-in-singular-homology]])

## Proof

1.1 Write $F_0$ for $F$ with the interiors of the two end disks removed. It is connected: paths can be detoured around either deleted disk in its annular collar. The disk-and-band charts retract $F$ onto a finite core graph, by the band-fiber and disk-star contractions used in [F1], so $H_2(F;\mathbb Z)=0$. Cover $F$ by slightly enlarged copies of $F_0$ and the disjoint union of its two removed disks. The overlap is two annuli. In [F3] the two overlap circles give $H_1=\mathbb Z^2$, the two disks have $H_1=0$, and the map from the overlap $H_0=\mathbb Z^2$ to the sum of the covering sets' degree-zero groups is injective, because its two components map to the two distinct disk components. Exactness therefore gives $0\to\mathbb Z^2\to H_1(F_0;\mathbb Z)\to H_1(F;\mathbb Z)\to0$, with the first map represented by the two new boundary circles $c_0,c_1$. Since the last group is free by [F1], choose an integral basis and cycle representatives in $F_0$, splitting this sequence. This verifies both the independence of the two new circles and the integral lifting of the old basis. [given, F1, F3, construct, algebra]

2.1 Cover the tube replacement by slightly enlarged copies of $F_0$ and its lateral annulus. Their overlap consists of two annuli near its ends. In [F3] its first homology maps into $H_1(F_0)\oplus H_1(\text{annulus})$ by identifying the two classes $c_0,c_1$ with the annular core, with the signs determined by their chosen directions. The kernel of the next degree-zero map is $\mathbb Z$, because both covering sets are connected and their overlap has two components. Hence the quotient of the first-homology sum contributes the old basis and one core class $c$, and one further class $b$ maps to a generator of that degree-zero kernel. It can be represented by a longitudinal arc on the tube, closed by an arc in connected $F_0$. The coefficients are all units in the core identifications, so this yields an integral basis consisting of the old classes, $b$ and $c$, with no torsion or index ambiguity. Seams and these arcs lie in finitely many smooth charts, so rounding supplies the corresponding finite smooth disk-and-band presentation of $F'$. [step 1.1, F3, construct, algebra]

3.1 Take $c=\{0\}\times\partial D^2$ and let $D_c=\{0\}\times D^2$ be its meridian disk in $W$. Choose the old representatives and their sufficiently short normal pushes away from $W$; this is possible because their curves lie in the compact unchanged portion of $F_0$ away from its end circles. The linking of $c$ with each such transfer is zero: the disk $D_c$ misses them. In complement homology this follows directly from [F2], by removing small disks around any transverse intersections of a spanning disk and reading their boundaries as signed meridians; here there are none. The two normal pushes of $c$ are concentric circles in the same disk plane, displaced to radii slightly below and above one, so each has linking zero with $c$. Thus $B_{F'}(c,c)=0$, and its pairings with the old basis vanish. All old-old pairings equal those in $F$, since their normal pushes can be chosen identically in the unchanged surface. [step 1.1, step 2.1, F1, F2, construct]

4.1 Choose the longitudinal representative of $b$ to run along a constant angular direction near the middle of the tube and close outside $W$. Along that middle portion the surface normal is radial. Of the two transferred pushes of $b$, exactly the inward one meets $D_c$, once, and the outward one misses it. This remains true if $b$ is one-sided on the whole surface: its normal cover may be one connected circle, but over this middle segment it still has exactly those two sheets, with both directions induced from $b$. Its remaining transfer lies away from $D_c$. Removing a small disk about this single transverse intersection gives the meridian relation of [F2], so $B_{F'}(c,b)=\delta\in\{1,-1\}$. Symmetry in [F1] gives the reverse entry. Write $k=B_{F'}(b,b)$ and let $v$ be its pairings with the old basis. Together with step 3.1 this is exactly the displayed matrix. [step 2.1, step 3.1, F1, F2, construct, algebra]

5.1 Its last two-by-two block $D=\left(\begin{smallmatrix}k&\delta\\\delta&0\end{smallmatrix}\right)$ has determinant $-1$, hence one positive and one negative eigenvalue. Its inverse has top-left entry zero. The invertible block change of coordinates eliminating the mixed column $(v,0)$ has Schur complement $G-(v,0)D^{-1}(v,0)^T=G$. Consequently the enlarged form is congruent over $\mathbb Q$ to $G\oplus D$, and congruence preserves the dimensions of maximal positive and negative subspaces. The block $D$ contributes signature zero, proving signature preservation. The move was supported away from the original boundary and its collar. Thus identical chosen boundary normal push-offs compute both Euler quantities, so these are equal term by term. Their halves added to the equal signatures are equal as well. [given, step 4.1, algebra] ∎
