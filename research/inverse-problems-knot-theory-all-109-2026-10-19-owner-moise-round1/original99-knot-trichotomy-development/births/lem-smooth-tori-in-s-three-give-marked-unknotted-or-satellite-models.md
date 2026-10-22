---
id: lem-smooth-tori-in-s-three-give-marked-unknotted-or-satellite-models
kind: lemma
title: Smooth tori in the three-sphere give marked unknotted or satellite models
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-coprime-torus-knot
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-knot-genus-zero-iff-unknot
  - thm-knot-exterior-homology-and-longitude
  - thm-seifert-van-kampen
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: Full AC supplies the stated countable-choice hypotheses of smooth Schoenflies and genus-zero unknot recognition. All subsequent marked disk, tube and curve operations are finite.
sources:
  references:
    - title: Hatcher, Notes on Basic 3-Manifold Topology
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: Section1.1 Alexander theorem and Section3.1 Loop theorem; the actual smooth side, tube isotopies and zero-framed satellite marking are constructed below
---

## Statement

Assume full AC. Every smooth embedded torus in $S^3$ has a side whose closure is a parametrized smooth solid torus. If both sides are solid tori, there is an orientation-preserving smooth ambient isotopy taking this torus to a standard Clifford torus. Consequently every essential smooth circle on it is a torus knot or the unknot, through actual smooth ambient isotopies, not merely through an unspecified diffeomorphism of $S^3$.

If $T$ is an essential smooth torus in the interior of a chosen smooth knot exterior $E_K$, the side containing the knot tube is a parametrized solid torus $V$. It has a nontrivial smooth core knot $C$ and an orientation-preserving parameter $e:S^1\times D^2\to V$ identifying the positive meridian and product longitude with the positive meridian and preferred longitude of $C$. The pattern $P=e^{-1}(K)$, with its pulled-back tube, gives the actual equality $K=P(C)$ and the actual exterior gluing along $T$. The pattern is not isotopic to the core in the solid torus. In particular this conclusion retains the actual essential companion torus and its meridian/longitude marking. No winding-nonzero assertion is imposed on a general satellite.

## Facts & Assumptions

**Given:** Full AC and the smooth torus, or the essential torus and chosen knot tube, of the Statement.

[F1] Smooth two-sided geometric incompressibility is fundamental-group injectivity, and the smooth Loop construction gives a neat disk on a cut side. The three-sphere is simply connected. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]], [[thm-higher-dimensional-spheres-are-simply-connected]]

[F2] Alexander duality separates an oriented closed torus in $S^3$ into two components. Smooth spheres have parametrized ball sides. Smooth disk windows can be standardized with their full parameters, and ball attachment/removal is supported in the specified receiving collar. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]], [[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], [[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]

[F3] Essential smooth torus circles are primitive and normalize to affine circles by smooth isotopies. Compact-source embedding isotopies extend smoothly with prescribed compact support. The finite inverse-function argument gives injective common-width smooth coordinate neighborhoods. [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

[F4] A smooth knot bounding a smooth disk is ambient isotopic to the standard unknot under countable choice. A preferred longitude is the unique primitive parallel of degree one on the knot and zero exterior homology. Exterior gluing has the actual connected-collar van Kampen pushout. [[lem-knot-genus-zero-iff-unknot]], [[thm-knot-exterior-homology-and-longitude]], [[thm-seifert-van-kampen]]

## Proof

1.1 A smooth torus is two-sided: its orientation and that of $S^3$ give a nonzero smooth normal field and its short flow gives a product collar. Alexander duality in [F2] gives $\widetilde H_0(S^3\setminus T;\mathbb Z)\cong H^2(T;\mathbb Z)=\mathbb Z$. The open complement is locally path-connected, so it has exactly two components. Each local collar side belongs to a single component, and each component meets such a side: otherwise it would also be closed in connected $S^3$. Connectedness of $T$ makes these side labels consistent. Their closures are therefore compact smooth manifolds with common boundary $T$. The map $\pi_1(T)\to\pi_1(S^3)$ is not injective, so [F1] gives an actual smooth compressing disk on one side, neat in that cut-side boundary. Its essential boundary on the torus is nonseparating. [F1, F2, F3, given, construct]

1.2 Cut the disk side at a thin neat disk neighborhood and round the supplied quadrants. Its new boundary is the single smooth sphere obtained by compressing $T$. The cut side is connected: every cut component has boundary, and the entire boundary is that one connected sphere. For the first assertion about components, every cut component meets either a disk face or the old boundary; a component meeting neither would already have been an open-and-closed component of the uncut connected side. The other side of $T$ lies outside the cut side. By smooth Schoenflies the compressed sphere has two ball sides. The cut-side interior is open and closed in one sphere-complement component, hence is that whole component, and its closure is its parametrized ball. Restore the disk neighborhood: this attaches one marked one-handle to that ball. This is an actual parametrized solid torus. To retain the parameters, standardize its two disjoint attaching disks in the ball boundary successively using [F2]'s full-window isotopies, the second supported away from the first; the complement is the corresponding smooth annulus. These boundary isotopies extend radially with an identity inner ball. Their collars match the given handle parameter. The result is the usual ball with one standard handle, equivalently the standard solid torus cut at one meridian disk. This proves the solid-torus-side assertion without recognizing an arbitrary manifold from its group. [F2, F3, step 1.1, construct]

2.1 We need actual ambient control of a supplied solid-torus parameter. Let $e:S^1\times D^2\to S^3$ be any smooth embedding and let $c(\theta)=e(\theta,0)$. The paths $e(\theta,r(t)z)$, with $r(t)>0$ decreasing from one to a small $\epsilon$, are embedding isotopies fixing the core. Project the two transverse derivatives $e_{z_i}(\theta,0)$ onto the normal plane of $c$ in $S^3$ and apply Gram--Schmidt to get a smooth periodic normal frame $v_1,v_2$. Change one disk coordinate sign first if necessary. In that frame their normal derivative matrix $A(\theta)$ is upper triangular with positive diagonal. A concrete normal chart is
$$\Phi(\theta,z)=\frac{c(\theta)+z_1v_1(\theta)+z_2v_2(\theta)}{\sqrt{1+|z|^2}}.$$
It is an embedding for one common small disk radius: its derivative at the zero section is invertible, finite inverse-function charts give local injectivity, and compact separation of distinct core parameters gives global injectivity. Write the shrunken map in these coordinates as $(a_\epsilon,n_\epsilon)$. The small periodic lift $a_\epsilon-\theta$ exists, and Taylor's formula gives $a_\epsilon-\theta=O(\epsilon)$ and $n_\epsilon/\epsilon-A(\theta)z=O(\epsilon)$ in $C^1$. Interpolate these two remainders linearly to zero. After rescaling the normal coordinate by $\epsilon$, every map is $C^1$ close to the fixed embedding $(\theta,z)\mapsto(\theta,A(\theta)z)$. This is quantitatively an embedding: on finitely many convex coordinate patches, derivative closeness to an invertible linear map gives a common lower bound on differences by integration along segments; pairs outside those patches are separated by compactness. Thus the interpolation is an embedding isotopy fixing the core. Finally interpolate $A$ to a small scalar identity through upper-triangular matrices with positive diagonal. The resulting image is a round normal tube of $c$. Apply [F3] to these actual compact-source isotopies, stationary at joins. They give an ambient isotopy fixing the core. If the initial solid torus is compactly contained in another ambient manifold, all supports can be chosen inside that manifold. No isotopy theorem for arbitrary three-ball diffeomorphisms is used. [F3, given, construct]

2.2 Suppose now that $S^3=V_1\cup_TV_2$ with both $V_i$ parametrized solid tori. In the first parameter write the second meridian as $a\mu_1+b\lambda_1$. Boundary surjectivity onto $\pi_1(V_2)$ and van Kampen eliminate its core generator and give $\pi_1(S^3)\cong\mathbb Z/\langle b\rangle$. Hence $b=\pm1$. By [F3] a boundary isotopy carries that meridian to its affine slope. Inside $D^2\times S^1=V_1$, the formula $(r,\theta)\mapsto(r e^{ia\theta},e^{ib\theta})$ is an embedded annulus between this slope and the core; pull it back through the boundary collar isotopy to obtain the annulus with the ORIGINAL meridian rim. Glue its outer rim to the actual meridian disk in $V_2$ and round their neat seam. This is a smooth spanning disk for the core of $V_1$. By [F4] that core has an orientation-preserving smooth ambient unknot isotopy. Carry $V_1$ through it and apply step 2.1 to the transported parameter. For the standard round unknot the normal tube in the displayed $\Phi$ chart has Clifford-torus boundary; the frame rotation does not change its disk image. Thus the whole torus is carried to a standard Clifford torus by an actual ambient isotopy. Any essential circle carried with it has primitive class $(p,q)$ and normalizes there by [F3]. If both coordinates are nonzero, this is the defined coprime torus knot; if one vanishes, the other is $\pm1$ and the circle bounds a standard meridian disk on one side, hence is the unknot by [F4]. Full AC supplies the countable-choice uses. [F1, F3, F4, step 2.1, construct, algebra]

3.1 Now assume $T\subset\operatorname{Int}E_K$ is essential. Its two sides in $S^3$ have the connected chosen tube $N(K)$ entirely on one side. A compressing disk from step 1.1 cannot be on the other side, for then it is a smooth compressing disk in $E_K$, contradicting essentiality. Therefore step 1.2 makes the side $V$ CONTAINING $N(K)$ a parametrized solid torus. Let $C$ be its smooth core. If $C$ were the unknot, its ambient unknot isotopy followed by the relative tube control of step 2.1 would identify $V$ with a standard unknotted tube. Its other side would be a solid torus, with a meridian disk lying entirely in $E_K$, again a compression of $T$. Thus $C$ is nontrivial. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, construct]

3.2 Choose the parameter $e_0:S^1\times D^2\to V$ orientation-preserving and orient $C$ by its core coordinate. Its meridian is the positive meridian of $C$. Its product longitude is a degree-one parallel, so it is $\lambda_C+k\mu_C$ for one integer $k$, by [F4]. Precompose with the explicit meridian twist $(\theta,z)\mapsto(\theta,e^{-ik\theta}z)$. This fixes the core and meridian and changes the longitude to exactly $\lambda_C$. Put $e$ equal to this corrected parameter, $P=e^{-1}(K)$ and $N(P)=e^{-1}(N(K))$. These are smooth marked pattern data inside the standard solid torus, and $e(P)=K$ literally. Their actual outer gluing to $E_C$ identifies $\mu_V,\lambda_V$ with $\mu_C,\lambda_C$, not merely with an unmarked peripheral basis. [F3, F4, step 3.1, construct, algebra]

3.3 If $P$ were isotopic to the core through smooth ambient isotopies of the solid torus, carry its chosen tube through that isotopy. Apply the compactly supported version of step 2.1 to make that tube a small round tube about the standard core, fixing the outer boundary. Its complement is then the explicit torus product between two concentric tubes. Pulling the product back gives a smooth product between the ACTUAL inner and outer pattern tori. Carry it by $e$: $T$ is boundary-parallel to $\partial E_K$, contradicting essentiality. Therefore $P$ is not isotopic to the core. All assertions preserve the given knot and torus through their specified parameters and actual isotopies; neither winding nonvanishing nor any atoroidal hyperbolization has been assumed. [F3, F4, step 2.1, step 3.2, construct] ∎
