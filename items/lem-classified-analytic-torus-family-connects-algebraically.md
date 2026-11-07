---
id: lem-classified-analytic-torus-family-connects-algebraically
kind: lemma
title: "A graph-classified analytic torus family connects algebraically"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-holomorphic-implicit-function-theorem, thm-weierstrass-preparation-theorem, thm-weierstrass-division-theorem, thm-completion-of-a-noetherian-local-ring, thm-flatness-of-noetherian-completion, thm-hilbert-basis-theorem, lem-hilbert-uniform-regularity-fixed-polynomial, lem-hilbert-regularity-propagation, lem-hilbert-projective-space-construction, thm-hilbert-scheme-represents-projective-flat-families, lem-hilbert-family-vanishing-locus, cor-quasi-finite-locus-open-finite-type-algebra, thm-proper-quasi-finite-is-finite, thm-smooth-locus-open, thm-proper-morphism-closed-image, thm-cohomology-and-base-change, thm-resolution-of-singularities-in-characteristic-zero, thm-identity-theorem-in-several-complex-variables, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Let $U$ be a connected complex manifold and $\mathcal A\to U$ a proper holomorphic submersion with compact connected complex-torus fibres and holomorphic fibrewise group law, inversion and zero section. Suppose a finite list of holomorphic fibrewise group endomorphisms is specified and satisfies a finite list of ring identities.

Suppose $\mathcal A$ is holomorphically embedded over $U$ into a fixed $\mathbb P^N\times U$, and the embedded fibres and the Segre-embedded graphs of addition, inversion and each specified endomorphism have fixed Hilbert polynomials and are fibrewise algebraic. For the fibre family and for every graph family, suppose there is a uniform regularity degree in which the spaces of holomorphic sections have local holomorphic frames and the restrictions of ambient forms have holomorphic matrices.

Then there is a smooth connected complex algebraic variety $T$, a smooth projective group scheme $A\to T$ with geometrically connected fibres and algebraic endomorphisms satisfying the same ring identities, and, for any two chosen points $u_0,u_1\in U$, points $t_0,t_1\in T(\mathbb C)$ whose fibres are isomorphic as complex Lie groups with the specified endomorphisms to $\mathcal A_{u_0}$ and $\mathcal A_{u_1}$ respectively.

This conclusion assumes fibrewise algebraicity and the holomorphic restriction matrices for every graph; it does not construct those hypotheses or assert any absolute-Hodge comparison.

## Facts & Assumptions

**Given:** AC, DC, the embedded analytic group family, its graph polynomials, fibrewise algebraicity and restriction matrices as stated.

[F1] Holomorphic submersions have local projection coordinates; Weierstrass preparation and division hold for convergent germs; Noetherian local completions are Noetherian and faithfully flat, and Noetherian ideal-adic completions are flat; polynomial rings over Noetherian rings are Noetherian ([[thm-holomorphic-implicit-function-theorem]], [[thm-weierstrass-preparation-theorem]], [[thm-weierstrass-division-theorem]], [[thm-completion-of-a-noetherian-local-ring]], [[thm-flatness-of-noetherian-completion]], [[thm-hilbert-basis-theorem]]).

[F2] A uniform regularity degree exists for each fixed Hilbert polynomial, and regularity gives the required cohomological vanishing ([[lem-hilbert-uniform-regularity-fixed-polynomial]], [[lem-hilbert-regularity-propagation]]).

[F3] Fixed-polynomial projective Hilbert functors are represented by finite-type schemes with flat universal families; the Grassmann construction reconstructs them from the uniform-degree quotient ([[thm-hilbert-scheme-represents-projective-flat-families]], [[lem-hilbert-projective-space-construction]]).

[F4] On a projective family over a Noetherian base, vanishing of a coherent homomorphism into a base-flat coherent sheaf is a universal closed condition ([[lem-hilbert-family-vanishing-locus]]).

[F5] The quasi-finite locus is open, proper quasi-finite maps are finite, smooth loci are open and proper images are closed ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-smooth-locus-open]], [[thm-proper-morphism-closed-image]]).

[F6] Degree-zero proper cohomology and base change provides a locally free direct image and arbitrary base change near a point where the degree-zero fibre map is surjective ([[thm-cohomology-and-base-change]]).

[F7] Integral separated complex varieties have proper birational smooth resolutions, and a holomorphic function vanishing on a nonempty open of a connected complex domain vanishes identically ([[thm-resolution-of-singularities-in-characteristic-zero]], [[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** construct Hilbert maps from restriction matrices, impose algebraic graph conditions, and resolve the analytic image closure.

1.1 Each specified graph is a closed complex submanifold of the relevant product of projective spaces over $U$: projection to the source identifies it with a fibre power of $\mathcal A$. Each source is proper and holomorphically submersive over $U$, as is the original family. We prove these submersions flat. By [F1], local coordinates reduce their stalk maps to $A=\mathbb C\{t_1,\ldots,t_m\}\to B=\mathbb C\{t_1,\ldots,t_m,z_1,\ldots,z_q\}$. Both rings are Noetherian: induct on the number of variables, take a nonzero ideal element regular in the last coordinate after a linear change, use [F1] to divide by its Weierstrass polynomial, and lift finitely many generators of the remainder module over the smaller germ ring. Their maximal-ideal completions are the formal power-series rings, because quotienting by each power retains precisely the finite Taylor jet. By [F1], $A\to\widehat A$ is flat and $B\to\widehat B$ faithfully flat. The Noetherian polynomial ring $\widehat A[z_1,\ldots,z_q]$ is flat over $\widehat A$, and its flat $(z_1,\ldots,z_q)$-adic completion is $\widehat B$. Hence $\widehat B$ is flat over $A$, and faithful flatness of $B\to\widehat B$ descends flatness to $B$ over $A$. Thus the analytic families are flat. For each fixed Hilbert polynomial choose a uniform regularity degree as in [F2]; the hypothesis supplies local holomorphic frames and restriction matrices in such a degree. [F1, F2, given, construct, algebra]

1.2 Construct an algebraic parameter space as follows. By [F3], form the product of the fixed-polynomial Hilbert schemes for the fibre and each graph, with $\mathbb P^N$ for the zero section. The universal candidates are projective and flat over this finite-type base. Require every graph to lie in the appropriate universal fibre product and the point to lie in the fibre: [F4] makes these universal vanishing conditions closed. For a graph projection $p:Z\to X^r$, remove from the target the proper image of its closed non-quasi-finite locus. By [F5], the map is finite on the complement. There the open locus where $\mathcal O\to p_*\mathcal O_Z$ is an isomorphism is exactly its isomorphism locus. The closed complement has closed image in the parameter base by properness. Removing that image makes the graph projection an isomorphism and defines the corresponding universal operation. [F3, F4, F5, given, construct, algebra]

2.1 For any one of these embedded families, [F2] gives surjectivity of the regular-degree restriction map and target dimension $P(r)$. Its holomorphic matrix therefore has constant rank. Around any parameter a nonzero maximal minor gives a holomorphic kernel graph and hence a holomorphic map to the Grassmannian of quotients. The maps glue because the kernel is independent of the target frame. By [F3], at every point this quotient is the Grassmann representative of the actual algebraic fibre in its fixed-polynomial Hilbert scheme. Pullbacks of the defining equations of that scheme vanish pointwise on the reduced manifold $U$, so the Grassmann map factors holomorphically through the Hilbert-scheme analytification. [F2, F3, given, step 1.1, construct, algebra]

2.2 The graph-isomorphism open contains each point whose graph fibre is a genuine morphism. To see this, at such a point first use properness to obtain a neighbourhood on which the projection is finite. The cokernel of its finite algebra map vanishes on the fibre and hence vanishes locally by Nakayama. Its kernel also has zero fibre: the source and target of the graph projection are both flat over the parameter base, so tensoring the resulting exact sequence preserves the kernel. Nakayama then kills the kernel near the fibre, and properness gives a common base neighbourhood. Impose each group or ring identity as the vanishing of the pullback of the diagonal ideal under the two corresponding universal composites; [F4] makes this a closed condition because the source is a flat projective fibre power. By [F5], remove the proper image of the nonsmooth locus. At a smooth geometrically connected fibre, $H^0(\mathcal O)$ is one-dimensional and the unit makes the degree-zero base-change map surjective; [F6] gives a neighbourhood where this dimension remains one after all base changes. Smooth proper geometric fibres with one-dimensional $H^0$ are connected. Thus the smooth connected-fibre locus is open. The resulting finite-type scheme $S$ carries a smooth projective group family and the required endomorphisms and identities. [F4, F5, F6, given, step 1.2, construct, algebra]

3.1 The pulled-back universal Hilbert family agrees with the given analytic family as an analytic subspace. Indeed each local section of its ideal vanishes on every point of the smooth actual family, so its restriction there is zero and $I_H\subseteq I_X$. The quotient $Q=I_X/I_H$ is coherent. In the exact sequence of structure sheaves $0\to Q\to\mathcal O_H\to\mathcal O_X\to0$, [F1] makes $\mathcal O_X$ flat over $U$. Tensoring with a base residue field and using equality of the algebraic fibre ideals gives $Q\otimes k(u)=0$. Analytic Nakayama implies $Q=0$ at every point. Apply this to the fibre and each graph family. [F1, F3, given, step 1.1, step 2.1, algebra]

4.1 The Hilbert maps of step 2.1 and the holomorphic zero section give a holomorphic map from $U$ to the product used in step 1.2. Each analytic fibre and graph satisfies incidence, graph-isomorphism, group and ring equations, smoothness and connectedness. The defining equations of the closed loci thus pull back to holomorphic functions vanishing pointwise on reduced $U$, and the open conditions hold at every point; the map factors through $S^{\mathrm{an}}$. By step 3.1 the pulled-back universal fibre and graph families are precisely the analytic fibre family and operation graphs, so the universal group operations and endomorphisms pull back to the specified ones. [given, step 2.1, step 3.1, step 1.2, step 2.2, construct, algebra]

5.1 Let $Y$ be the reduced Zariski closure of the image of $U$ in $S$. It is irreducible. If $Y=Y_1\cup Y_2$ with both closed and proper, their preimages are closed analytic subsets of $U$. If neither were all of $U$, [F7] and analytic continuation would give each empty interior, and two closed subsets with empty interior cannot cover the nonempty manifold. Thus one contains the whole image, contradicting the definition of the closure. Apply [F7] to $Y$ and take the smooth component $T$ containing the birational open. It is integral and connected; the resolution is proper, so its image is closed and contains the dense open, hence all of $Y$. Each of the two selected image points has a complex point in its fibre over $T$. Pull back the universal group family and endomorphisms to $T$. By step 4.1 the two fibres and their operations are the originally specified ones, and all group and ring identities persist under base change. This proves the Statement. [F7, given, step 2.2, step 4.1, choose, construct, algebra] ∎

## Boundary

The proof constructs the algebraic parameter and bridge, but does not establish fibrewise algebraicity or the holomorphic restriction matrices for theta graph families. It makes no relative Betti–étale comparison or absolute-Hodge propagation claim.
