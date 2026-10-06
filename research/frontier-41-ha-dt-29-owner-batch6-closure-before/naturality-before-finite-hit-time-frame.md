---
id: thm-morse-homology-is-naturally-isomorphic-to-singular-homology
kind: theorem
title: "Morse homology is naturally isomorphic to singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex, thm-cellular-homology-computes-singular-homology, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-cellular-homology, def-morse-homology-of-a-morse-smale-pair, def-canonical-morse-homology-of-a-closed-manifold, thm-reverse-continuation-is-an-inverse-on-morse-homology, thm-continuation-composition-law-on-homology, def-homology-object-of-a-chain-complex, def-chain-complex-in-an-abelian-category, def-axiom-of-choice, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, def-regular-continuation-datum-between-morse-smale-pairs, def-continuation-chain-map, lem-orientation-lines-orient-continuation-moduli-spaces, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-relative-homology-of-consecutive-cw-skeleta, cor-homology-of-spheres, cor-homotopic-maps-induce-the-same-map-on-singular-homology, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, thm-homotopic-continuation-data-give-chain-homotopic-maps]
justified_by: []
dependency_level: 14
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9, Theorem 4.9.3 and the consequent isomorphism of Morse homology with cellular homology, printed pp. 115-126, PDF pp. 125-136"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Corollary 2.5.2: for any Morse--Smale pair on a compact manifold there is an isomorphism from the homology of the Morse--Floer complex to singular homology, read at PDF p. 74"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, remark (3): the chain of isomorphisms from Morse homology to cellular and singular homology, PDF p. 87"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
smooth manifold and $\Lambda=\mathbb Z/2$ or $\mathbb Z$. For every
Morse--Smale pair $(f,X)$ on $M$ the composite
$$HM_k(f,X;\Lambda)\xrightarrow{\ \Theta\ }H_k^{\mathrm{cell}}(M;\Lambda)\xrightarrow{\ \cong\ }H_k(M;\Lambda)$$
of the chain isomorphism $\Theta$ of
[[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]]
with the cellular--singular comparison theorem
[[thm-cellular-homology-computes-singular-homology]] applied to the finite CW
complex of the Morse--Smale decomposition
([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]],
[[def-cellular-homology]]) is an isomorphism
$$\theta_{(f,X)}:HM_k(f,X;\Lambda)\xrightarrow{\ \cong\ }H_k(M;\Lambda).$$
The isomorphism is independent of the auxiliary choices used to build the CW
decomposition and (over $\mathbb Z$) of the orientation lines, and it
identifies the canonical Morse homology
[[def-canonical-morse-homology-of-a-closed-manifold]] with singular homology:
$$HM_*(M;\Lambda)\cong H_*(M;\Lambda).$$
Here the word *naturally* expresses that the isomorphism is independent of
the Morse--Smale pair, the CW auxiliary choices and the orientation lines, as
proved below; no functoriality with respect to smooth maps is asserted. Orientation independence is understood under the corresponding diagonal generator identifications.

## Facts & Assumptions

**Given:** The Axiom of Choice, the closed manifold and the normalized field-version Morse--Smale pairs of the stated CW comparison, represented by actual metrics for continuation. The two coefficient rings are $\mathbb Z$ and $\mathbb Z/2$.

[F1] The compactified unstable disks give the intrinsic unstable-cell CW structure and continuous characteristic maps; the same theorem applied to $(-f,-X)$ gives the stable-cell CW structure. Its boundary cells have larger original index ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], [[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]]).

[F2] The critical-cell generator identification is a chain isomorphism with the stated orientation conventions; their precise local incidence calculation gives dimension signs $+1$ ([[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]], [[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]]).

[F3] Relative pair sequences, excision, sphere homology and homotopy invariance are natural. Consecutive CW relative groups are concentrated in the cell dimension; cellular homology comparison is constructed from these pair sequences ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-excision-for-singular-homology]], [[cor-homology-of-spheres]], [[thm-relative-homology-of-consecutive-cw-skeleta]], [[thm-cellular-homology-computes-singular-homology]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F4] Closed embedded smooth submanifolds have tubular neighbourhoods, with variable radius permitted ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F5] Finite-window continuation is transverse endpoint matching, negative index difference forbids solutions, and its signs are the source-unstable versus target-stable-normal determinant signs. Its evolution diffeomorphism is isotopic to the identity ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[lem-orientation-lines-orient-continuation-moduli-spaces]], [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]], [[def-continuation-chain-map]]).

[F6] Canonical continuation maps have datum independence, inverse and composition laws ([[thm-homotopic-continuation-data-give-chain-homotopic-maps]], [[thm-reverse-continuation-is-an-inverse-on-morse-homology]], [[thm-continuation-composition-law-on-homology]], [[def-canonical-morse-homology-of-a-closed-manifold]]).

## Proof

**Proof technique:** direct, by the dual stable-cell filtration and finite intersection coefficients.

1.1 Fix a target pair and write $X^j$ for its unstable $j$-skeleton. By [F1], $Y_{>j}=\bigcup_{\operatorname{ind}(q)>j}W^s(q)$ is the $(n-j-1)$-skeleton of the stable CW structure, hence is closed. Put $U_j=M\setminus Y_{>j}$, with $U_{-1}=\varnothing$ and $U_n=M$. Then $U_j$ is open, $U_{j-1}\subset U_j$, and $U_j\setminus U_{j-1}$ is the finite disjoint union of the stable manifolds of index $j$. Each such stable manifold is closed embedded in $U_j$: its compactified stable disk has boundary only in the removed higher-index stable cells, and its interior is its usual smooth immersed Euclidean manifold. The disk characteristic map therefore identifies its intrinsic and subspace topologies there. Also $X^j\subset U_j$, because a nonconstant intersection $W^u(p)\cap W^s(q)$ requires $\operatorname{ind}(p)>\operatorname{ind}(q)$. [F1, F5, given, construct]

2.1 Orient the normal quotient of each index-$j$ stable cell by its unstable critical ray. This normal bundle has an explicit frame in the normalized setting: transport the critical coordinate vectors $\partial_{u_i}$ backwards from a sufficiently late chart point by $e^{2t}D\phi_{-t}$. The local linear flow makes this independent of the sufficiently late $t$, and locally constant choices of $t$ prove smoothness. Thus it is a trivial oriented rank-$j$ bundle over $W^s(q)\cong\mathbb R^{n-j}$. Choose disjoint tubular neighbourhoods of these finitely many closed stable cells in $U_j$ using [F4], shrinking the radius as a positive function of the base point when necessary. Explicitly, on the Euclidean stable base let $r(x)\le1$ be the supremum of the radii whose fibre balls lie in the tube domain and a prescribed disjoint open neighbourhood of that stable cell. This allowable-radius function is positive and lower semicontinuous, by compact smaller fibre balls and openness. The function $r_0(x)=\inf_y(r(y)/2+|x-y|)$ is positive, continuous and at most $r(x)/2$: positivity follows from a positive local lower bound for $r$ near $x$ and the distance bound outside that neighbourhood. Use fibre radius $r_0$. Thus no uniform noncompact radius is assumed. Normalize the tube differential on the normal quotient by precomposing with its inverse normal-bundle derivative. By [F3] excision identifies $H_\ell(U_j,U_{j-1};\Lambda)$ with the direct sum of the tube pairs punctured along their zero sections. Each pair contracts in its stable base to $(\mathbb R^j,\mathbb R^j\setminus\{0\})$, so its homology is $\Lambda$ in degree $j$ and zero otherwise. Use the chosen normal-ray fibre class $v_q$ as its generator. In rank zero this is the chosen signed point unit, including a negative zero-dimensional ray. [F1, F3, F4, step 1.1, construct]

3.1 Inclusion of the unstable skeletal pair $(X^j,X^{j-1})$ into $(U_j,U_{j-1})$ sends its oriented generator $e_p$ to $v_p$. Indeed an index-$j$ unstable cell meets the index-$j$ stable cells only at its own critical centre, and the normal map there is the identity on the unstable Hessian space, with the same chosen ray. Every other same-index intersection is excluded by the positive index-drop argument of [F5]. In degree zero the chosen signed vertex class and normal signed point unit agree. Thus the inclusion is an isomorphism on every consecutive relative group by [F3] and step 2.1, with identity matrix in the critical bases. Naturality of the pair connecting maps makes these relative-group isomorphisms commute with the connecting-defined boundaries. [F1, F3, F5, step 1.1, step 2.1, algebra]

4.1 Record the finite-filtration comparison, so no extra naturality is assumed. For a finite filtration $V_{-1}=\varnothing\subset V_0\subset\cdots\subset V_n=V$ with consecutive relative groups concentrated in degree $j$, set $C_j=H_j(V_j,V_{j-1})$ and $d_j=i_{j-1}\partial_j$. Exactness gives $\partial_{j-1}i_{j-1}=0$, hence $d_{j-1}d_j=0$. Pair exactness also gives $H_\ell(V_j)=0$ for $\ell>j$ by induction, and $i_j:H_j(V_j)\to C_j$ is injective with image $\ker d_j$, since $i_{j-1}$ is injective as well. The pair $(V_{j+1},V_j)$ identifies $\ker d_j/\operatorname{im}d_{j+1}$ with $H_j(V_{j+1})$. Later inclusions preserve that degree because their relative groups vanish there, hence this is $H_j(V)$. For $j=0$ use $i_0$ as the identity; for the final degree there is no next relative group. Every map used is an inclusion, quotient or connector, so the comparison commutes with every filtration-preserving map. This is the finite part of the cellular proof in [F3], and applies to the open $U_j$ filtration as well. Step 3.1 and final inclusion $X^n=M=U_n$ therefore identify its comparison with the usual cellular–singular one, without choosing a retraction of $U_j$. [F3, step 2.1, step 3.1, algebra]

5.1 Now let $F=\Psi_{S,-S}$ be evolution for a regular continuation from a source pair to the target pair. Every point of a source unstable cell of index at most $j$ lies at time $-S$ on a negative-end trajectory from its critical centre. Its evolved point has a target forward critical limit. If that target critical index exceeded $j$, it would be a continuation solution of negative index difference, forbidden by [F5]. Thus $F(X^-{}^j)\subset U^+_j$, and similarly $F(X^-{}^{j-1})\subset U^+_{j-1}$. It is an actual filtration-preserving map from the source unstable CW filtration to the target open stable-complement filtration. The final map is the diffeomorphism $F:M\to M$, isotopic to the identity by its smooth partial-time evolution. [F1, F5, step 1.1, construct]

6.1 Compute its relative degree-$j$ matrix. An oriented source characteristic disk for $p$ meets the target index-$j$ stable cells precisely at the finitely many rigid continuation solutions $\mathcal C(p,q)$; its boundary avoids those stable cells by step 5.1. Excision at these finitely many interior preimages sends its relative fundamental class to the sum of its local orientation classes. On each small neighbourhood the map into the normalized target tube is the unstable source-to-stable-normal map of [F5]; its local degree is exactly $\tau(u)$. Projection to each fibre generator $v_q$ therefore gives $\sum_{u\in\mathcal C(p,q)}\tau(u)$, or its mod-two count. This conclusion uses only local smooth coordinates on the interior unstable cell; an auxiliary topological disk parametrization contributes degree $+1$ because it agrees with the critical ray on a fixed inner cap. Hence the filtered map of step 5.1 has exactly the continuation matrix in the critical bases of step 3.1. [F1, F2, F3, F5, step 2.1, step 3.1, step 5.1, algebra]

7.1 Apply the natural finite-filtration comparison of step 4.1 to this map. By step 6.1 its chain map is the continuation count, and by [F2] its source and target generator maps are the Morse–cellular comparisons. The final singular map is $F_*\!=\operatorname{id}$ by the isotopy in step 5.1 and [F3]. Thus $\theta_+\Phi_*=\theta_-$ exactly, proving the missing continuation-versus-comparison compatibility. For a fixed pair the skeleta are the intrinsic unions of its unstable cells; different critical heights, charts, bottle parametrizations or tube choices do not change them or their oriented relative generators. The pair-sequence construction therefore gives the same $\theta$. Reversing a critical ray changes its Morse and relative cellular generators together, leaving the represented singular class unchanged. This proves auxiliary and orientation independence rather than merely existence of unrelated isomorphisms. [F2, F3, step 3.1, step 4.1, step 5.1, step 6.1, algebra]

8.1 Finally choose any normalized Morse--Smale representative for the canonical metric homology of [F6]; such representatives are supplied by the fixed-near-critical metric construction in [F1]. Transition from the chosen metric representative is canonical by [F6], and the equation of step 7.1 makes the resulting singular identification independent of which normalized representative was used. Two metric realizations of the same normalized field give the same complex: their convex metric interpolation satisfies $g_s(X,\cdot)=-df$ and hence has the same autonomous equation. The transverse endpoint sequence then gives the identity count exactly as for constant data. Thus metric realization introduces no additional ambiguity. Composition, inverse and datum independence in [F6] complete the identification $HM_*(M;\Lambda)\cong H_*(M;\Lambda)$ with precisely the choice-independence meaning of naturality in the statement. [F1, F5, F6, step 7.1, construct] ∎
