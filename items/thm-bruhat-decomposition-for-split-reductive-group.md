---
id: thm-bruhat-decomposition-for-split-reductive-group
kind: theorem
title: Bruhat decomposition for a split reductive group
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 29
deps: [def-unipotent-algebraic-group, lem-finite-dimensional-subcomodules-contain-elements, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions, thm-cocharacter-limit-subgroups, lem-root-coordinate-cells-and-generation, lem-simple-reflection-double-coset-rule, thm-weyl-group-borel-chambers, thm-root-subgroups-of-a-split-reductive-group, thm-luna-map-and-bialynicki-birula-decomposition, lem-borel-root-group-opposition, thm-quotient-by-a-borel-subgroup-is-complete, lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag, def-axiom-of-choice, def-root-datum-of-a-split-reductive-group]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 13 (13.49)-(13.51); Ch. 21 (21.68)-(21.84), printed pp. 448-452"
    - title: "Brian Conrad, Reductive Group Schemes (SGA 3 summer school, Luminy; Panoramas et Syntheses)"
      url: "https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf"
      locator: "Theorem 1.4.12 and S1.4"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "Proposition 171(i)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(G,T)$ be a split reductive group over $k$, $B\supseteq T$ a Borel subgroup, $U=B_u$, $W=N_G(T)/T$, and choose representatives $n_w\in N_G(T)(k)$ ([[def-root-datum-of-a-split-reductive-group]]). Then: (a) the double cosets $Bn_wB$ depend only on $w$, are smooth locally closed subvarieties of $G$, and $G$ is their disjoint union, $G=\bigsqcup_{w\in W}BwB=\bigsqcup_{w\in W}Bn_wB=\bigsqcup_{w\in W}U^wn_wB$; (b) for every $w$ the multiplication map $U^w\times B\to Bn_wB$ is an isomorphism, and $G/B=\bigsqcup_wY(w)$ with $Y(w)=UwB/B\cong\mathbf A^{n(w)}$ an affine space of dimension $n(w)=|\Phi^+\cap w\Phi^-|$; (c) the **big cell** $B^-B=U^-TB$ (with $B^-$ the opposite Borel, $B^-\cap B=T$ and $U^-=B^-_u$) is open and dense in $G$, the multiplication map $U^-\times T\times U\to G$ is an open immersion, the open dense longest Bruhat cell is $Bn_{w_0}B=n_{w_0}(B^-B)$, a translate of this opposite big cell. Its flag cell $Y(w_0)$ is the unique flag cell of maximal dimension $|\Phi^+|$, while the group cell has dimension $\dim G$; (d) on $k$-points, $G(k)=\bigsqcup_wB(k)wB(k)$ is the Bruhat decomposition attached to the Tits system of [[lem-simple-reflection-double-coset-rule]], and the $G(k)$-orbits on $(G/B)(k)\times(G/B)(k)$ are in bijection with the $B(k)$-double cosets of $G(k)$, hence indexed by $W$.

## Facts & Assumptions

**Given:** AC, a split reductive group $(G,T)$ with Borel $B\supseteq T$, $U=B_u$, $W=N_G(T)/T$, and representatives $n_w\in N_G(T)(k)$.

[F1] The quadruple $(G(k),B(k),N_G(T)(k),S)$ is a Tits system, so the double cosets $B(k)wB(k)$ satisfy the standard combinatorial rules and $G(k)=\bigsqcup_wB(k)wB(k)$ ([[lem-simple-reflection-double-coset-rule]]); the Weyl group acts simply transitively on the Borels containing $T$ and $n_wU_\alpha n_w^{-1}=U_{w\alpha}$ ([[thm-weyl-group-borel-chambers]]).

[F2] The subgroups $U_w,U^w\subseteq U$ have the described weight sets, $U_w\times U^w\to U$ is an isomorphism, and the isotropy group of $wB/B$ in $U$ is $U_w$ with $\dim(UwB/B)=n(w)$ ([[lem-root-coordinate-cells-and-generation]], [[thm-root-subgroups-of-a-split-reductive-group]]).

[F3] For a smooth geometrically connected complete variety with locally affine $\mathbf G_m$-action and finite constant fixed scheme, the attracting cells are smooth locally closed affine spaces, with tangent spaces the positive tangent spaces at their fixed points; they are disjoint and cover the underlying space. ([[thm-luna-map-and-bialynicki-birula-decomposition]])

[F4] The flag-stabilizer representation realizes $G/B$ as a smooth projective closed orbit in a projective representation (Milne21.70, also the complete flag construction). Choose a cocharacter in the dominant chamber separating the finitely many torus weights of this representation; its fixed scheme on the projective representation equals the $T$-fixed scheme, so the same is true on $G/B$. Smoothness of torus-fixed schemes and the Weyl/Borel correspondence identify this fixed scheme with the finite constant points $n_wB$. Semi-invariant homogeneous coordinates provide invariant affine open charts, so the action is locally affine. ([[lem-borel-root-group-opposition]], [[thm-weyl-group-borel-chambers]], [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]], [[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[thm-quotient-by-a-borel-subgroup-is-complete]], [[lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag]])

[F5] Every nonzero rational representation of a unipotent group has a nonzero fixed vector, and each vector belongs to a finite-dimensional rational submodule. ([[def-unipotent-algebraic-group]], [[lem-finite-dimensional-subcomodules-contain-elements]]) Cocharacter opposite multiplication is an open immersion, and $B=P_G(\lambda)$ for a regular dominant cocharacter. ([[thm-cocharacter-limit-subgroups]], [[lem-borel-root-group-opposition]])

## Proof

**Given:** AC and the split reductive Borel pair of the Statement.

1.1 Put $X=G/B$. The projective representation and separated torus weights in [F4] identify the chosen cocharacter's fixed scheme with the finite constant set $\{n_wB\}$. Invariant affine charts verify the local-affineness hypothesis of [F3]; $X$ is smooth geometrically connected and complete by [F4]. Thus [F3] gives attracting cells $Y(w)$. Their positive tangent spaces at $n_wB$ are the positive root spaces in $\mathfrak g/\operatorname{Ad}(n_w)\mathfrak b$, indexed by $\Phi^+\cap w\Phi^-$, so $\dim Y(w)=n(w)$. The construction is over $k$ and does not replace the torus scheme by the possibly nondense set $T(k)$ over a finite field. [F4, F3, F2]

2.1 Over an algebraic closure the orbit $Un_wB/B$ lies in $Y(w)$: conjugation by the cocharacter contracts $U$ to identity and fixes $n_wB$. This orbit is closed in the affine cell. Indeed, in its reduced affine closure a nonempty boundary would have a nonzero stable ideal. By [F5] a nonzero element lies in a finite-dimensional stable submodule of that ideal and yields a nonzero invariant function. That function is constant on the transitive orbit, hence on its reduced dense closure; the constant is nonzero because the function is nonzero, contradicting its vanishing on the boundary. Thus there is no boundary. By [F2], the orbit is isomorphic to $U^w$ and has dimension $n(w)$, equal to the irreducible affine space $Y(w)$; being closed it is all of $Y(w)$. Equality of these smooth locally closed schemes descends to $k$. Hence $X$ is the disjoint union of these $U$-orbits, independently of the Tits-system covering argument. [F5, F2, F3, step 1.1]

3.1 Since $B=UT$ and $n_w$ normalizes $T$, the inverse image of $Y(w)$ in $G$ is $Bn_wB=Un_wB$. The product isomorphism $U^w\times U_w\to U$ follows by ordering the complementary root coordinates first in [F2]. The subgroup $U_w=U\cap n_wBn_w^{-1}$ is the orbit stabilizer, so moving its second factor across $n_w$ gives $Un_wB=U^wn_wB$. Pull back the $B$-torsor $G\to G/B$ along the isomorphism $U^w\to Y(w)$. It has the explicit section $u\mapsto un_w$, and therefore multiplication $(u,b)\mapsto un_wb$ is an isomorphism $U^w\times B\to Bn_wB$. These smooth locally closed cells are disjoint and cover $G$ because their flag cells do. Changing $n_w$ by an element of $T$ does not change the cell. This proves(a),(b). [F2, F1, step 2.1]

4.1 For the regular dominant cocharacter, [F5] gives the open immersion $U^-\times B\to G$. Since $B=TU$ with its split torus and positive root groups, it is exactly the multiplication open immersion $U^-\times T\times U\to G$ with image $B^-B$. It is dense because $G$ is geometrically integral. The longest Weyl element sends $B$ to $B^-$, so $Bn_{w_0}B=n_{w_0}(B^-B)$; both are open dense, but they are not asserted equal. Root combinatorics give $n(w_0)=|\Phi^+|$ and no other $w$ has this length. Thus $Y(w_0)$ is the unique flag cell of maximal dimension $|\Phi^+|$, while its group cell has dimension $\dim B+|\Phi^+|=\dim G$. This proves(c). [F5, F1, F2, step 3.1]

5.1 The scheme isomorphisms in step 3.1 are over $k$, so they give $G(k)=\bigsqcup_w U^w(k)n_wB(k)=\bigsqcup_w B(k)n_wB(k)$; no inference from geometric density to arbitrary-field point generation is needed. Likewise every $k$-point of $G/B$ lies in one of its $k$-defined affine cells and has a representative $un_w\in G(k)$, so $G(k)$ acts transitively on $(G/B)(k)$. Fixing the first flag in a pair leaves its stabilizer $B(k)$ acting on the second; hence the orbits on $(G/B)(k)\times(G/B)(k)$ are the $B(k)$-double cosets, indexed by $W$. The corresponding Tits data and inclusion rule are those of [F1], now with the actual point decomposition established. This proves(d). [F1, F2, step 3.1, step 4.1] ∎
