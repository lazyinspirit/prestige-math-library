---
id: lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
kind: lemma
title: "Normal-transfer pairing and signature under component-connecting tubes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-seifert-pairing-well-defined
  - thm-mayer-vietoris-sequence-in-singular-homology
  - thm-euclidean-inverse-function-theorem
  - thm-parametric-transversality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from normal-transfer linking and the linking-number interfaces; it supplies countable choice for the finite smooth surface presentations. Component connections and all homology calculations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), printed pp.55–56 and Proposition 10, printed pp.65–66"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. Let $F\subset S^3$ be a nonempty compact smooth embedded surface, possibly disconnected and nonorientable, every component of which has nonempty boundary. The ambient sphere has its standard orientation. The normal-transfer expression $B_F([a],[b])=\operatorname{lk}(a,\tau b)$ defines a symmetric integral bilinear pairing on the free finite-rank group $H_1(F;\mathbb Z)$, with rational extension. It restricts on each component to its normal-transfer pairing; for cycles $a,b$ on distinct components its value is $2\operatorname{lk}(a,b)$, which need not vanish.

Suppose an embedded product cylinder $W=[-1,1]\times D^2$ meets $F$ exactly in its two end disks, on distinct components. Replace those disks by the lateral annulus and round the seams to obtain $F'$. There is an integral basis in which $B_{F'}$ has matrix $G\oplus[0]$, where $G$ is the entire matrix of $B_F$, including its cross-component entries. Thus its signature is unchanged. The boundary link and its surface collar remain fixed, so $e(F)=-\sum_i\operatorname{lk}(K_i,K_i')$, computed from boundary normal push-offs, is unchanged as well.

A finite sequence of such tubes exists making $F$ connected. All intermediate surfaces still have the original boundary link and collar, no closed components, and finite smooth disk-and-band presentations on their components. The signature and $e$ are preserved throughout.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]]

## Facts & Assumptions

**Given:** Full AC and the compact smooth embedded surface without closed components; for the specified move, the product cylinder with end disks on distinct components.

[F1] Every connected compact smooth surface with nonempty boundary has a finite smooth disk-and-band presentation under countable choice. Such a presentation gives free finite-rank first homology and a canonical symmetric normal-transfer pairing, invariant under ambient isotopy. The normal-fiber contraction gives a two-chain with boundary $\tau b-2b$. ([[lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations]], [[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]])

[F2] Positive-meridian linking is a homomorphism on complement homology, and linking of disjoint oriented circles is symmetric and bilinear. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[lem-seifert-pairing-well-defined]])

[F3] Mayer–Vietoris gives the exact homology sequence of a two-set open cover. ([[thm-mayer-vietoris-sequence-in-singular-homology]])

[F4] A smooth map with invertible differential has a local inverse; compactness gives a common embedded normal neighborhood by taking a finite cover and excluding collisions converging to the zero section. ([[thm-euclidean-inverse-function-theorem]])

[F5] Under countable choice, a finite-dimensional smooth family transverse to a target has transverse slices for parameters outside a null set. A finite union of these exceptional sets does not fill a parameter ball. ([[thm-parametric-transversality]])



## Proof

1.1 There are finitely many components of $F$: a finite cover by connected surface charts meets them all. Apply [F1] to each, using full AC to supply countable choice. Integral cycles can be represented by oriented multicurves with integer coefficients on each component. For distinct components $A,C$, choose the normal interval neighborhood of $C$ disjoint from $A$, using compactness and [F4]. The fiber-contraction chain in [F1] then lies in the complement of every cycle $a$ on $A$ and has boundary $\tau b-2b$. Hence $\operatorname{lk}(a,\tau b)=2\operatorname{lk}(a,b)$ by [F2]. This is well-defined on both homology classes: a bounding chain on either component misses the other component. Its symmetry follows from [F2]. On each diagonal component summand use the pairing of [F1]. Extending these diagonal and cross terms bilinearly over $H_1(F;\mathbb Z)=\bigoplus_A H_1(A;\mathbb Z)$ proves all the pairing assertions, including equality with the total transfer expression. In particular no zero cross-term assumption has been made. [given, F1, F2, F4, construct, algebra]

1.2 Let $A,C$ be the two distinct components at the ends of $W$, and delete the interiors of their respective end disks, giving $A_0,C_0$. Each remains connected, because paths detour around the deleted disk. Its original surface retracts onto a finite graph by collapsing the bands and disks in [F1], so its second homology is zero. Apply [F3] to the surface covered by its punctured part and a slightly enlarged removed disk. Their overlap is an annulus and its degree-zero map is injective. Exactness gives $0\to\mathbb Z\to H_1(A_0;\mathbb Z)\to H_1(A;\mathbb Z)\to0$, and the analogous sequence for $C$. The first generator is its new boundary circle. The last group is free by [F1], so both sequences split integrally, with old basis cycles chosen away from the new circles. [given, F1, F3, construct, algebra]

2.1 Cover the connected replacement of $A_0\sqcup C_0$ by that punctured pair and the lateral annulus, slightly enlarged. Their overlap is two annuli. In degree zero the two overlap generators map to $(e_A,-e_T)$ and $(e_C,-e_T)$ in $\mathbb Z\{e_A,e_C\}\oplus\mathbb Z\{e_T\}$, so this map is injective. Thus there is no additional longitudinal homology class. In degree one the overlap identifications equate the two new boundary circles, with chosen signs, to the annular core $c$. Their coefficients are units. The quotient therefore has an integral basis consisting of all old basis classes on $A,C$ together with $c$. Add the untouched components' bases. This proves $H_1(F';\mathbb Z)\cong H_1(F;\mathbb Z)\oplus\mathbb Z\{c\}$ with the specified old representatives. Finite smooth presentations of the replacement and untouched components exist by [F1]. [step 1.2, F1, F3, construct, algebra]

2.2 The complement of $F$ is path-connected. To see this, join two complement points by a path consisting of finitely many smooth chart arcs and perturb its finitely many pieces to cross $F$ transversely in finitely many interior points, missing $\partial F$. Use finitely many chart translations with cutoff functions whose parameter derivatives span the ambient tangent space wherever the path can meet $F$. Apply [F5] simultaneously to its interior and boundary, keeping the path endpoints fixed. The boundary has codimension two, so its transverse preimage in the path is empty. Interior transversality and compact separation from the boundary give finitely many crossings. At a crossing choose an embedded arc in that surface component from the crossing to its nonempty boundary, avoiding the other finitely many crossing points. A sufficiently thin normal strip along this arc misses all other surface components. Replace the crossing path segment by a path running on one side of the strip to the boundary, round its boundary edge, and return on the other side. This detour misses $F$ and removes that crossing without creating others. The finitely many detours prove the assertion; self-intersections of this connecting path are harmless. [step 1.1, F4, F5, construct]

3.1 In the product cylinder take $c=\{0\}\times\partial D^2$ and its meridian disk $D_c=\{0\}\times D^2$. All old representatives and their sufficiently small transfers lie outside $W$; representatives avoid the end circles by step 1.2 and compactness permits those transfers. Thus $D_c$ misses their transfers, giving $B_{F'}(c,a)=0$ by [F2]. The two normal pushes of $c$ can be chosen as concentric circles of slightly smaller and larger radius in the same middle disk plane. Their linking with $c$ is zero, so $B_{F'}(c,c)=0$. All old-old entries are literally unchanged because their curves and transfers are in unchanged surface neighborhoods. This includes old classes previously on different components: their new pairing still equals their previous value $2\operatorname{lk}(a,b)$, even though they now belong to one component. Symmetry from step 1.1 proves the opposite entries zero too. The full matrix is consequently $G\oplus[0]$, with unchanged signature. The move fixes the original boundary collar, so identical normal pushes compute equal boundary self-linking numbers term by term and hence equal $e$. [step 1.1, step 1.2, step 2.1, F1, F2, construct, algebra]

4.1 If there is more than one component, choose interior points on two components, small disks there, and short normal segments from their centers to the complement. Step 2.2 joins the free ends in the complement. This can be chosen as an embedded smooth arc, fixed on the short endpoint segments: first approximate the compact complement path by a finite polygonal path in coordinate balls contained in the complement; small choices of its finitely many vertices make nonadjacent edges disjoint, since intersection of two one-dimensional segments imposes a condition of positive codimension in three-dimensional vertex space. Round its corners in disjoint smaller balls and remove any adjacent retracing. Compact separation preserves avoidance of $F$. The normal disk bundle of this interval is trivial: extend a normal frame along finitely many overlapping interval charts, rotating the frames on overlaps. Choose the end-disk parametrizations with compatible ambient orientation, so their frame discrepancy lies in the connected rotation group of an oriented plane, and correct it by a rotation along the interval. Near the endpoints first use surface-adapted coordinates $(u,v,w)$ with the surface $w=0$ and the arc its normal $w$-axis. Extend their transverse disk coordinates along the intervening compact arc by the chosen frame and [F4], joining the coordinate maps over short overlaps by cutoffs; along the axis their transverse differentials remain invertible after choosing the overlaps small. Compactness and local injectivity then give a sufficiently thin embedded product cylinder whose actual end disks lie on the two surfaces. Its interior misses $F$ by compact separation away from those endpoint charts. Its tube joins the two components, reducing their number by one and retaining all their boundary components. Repeat finitely many times. Step 3.1 preserves signature and $e$ at each stage, and [F1] supplies the finite presentations of the resulting components. This proves all conclusions. [step 3.1, step 2.2, F1, F4, construct] ∎
