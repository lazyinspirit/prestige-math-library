---
id: thm-solvable-subgroups-and-the-radical-as-borel-intersection
kind: theorem
title: Solvable subgroups, the radical, and the Borel intersection
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 16
deps: [def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-derived-subgroup-and-solvable-algebraic-group, def-radical-and-unipotent-radical-of-an-algebraic-group, def-parabolic-subgroup-of-an-affine-algebraic-group, thm-quotient-by-a-borel-subgroup-is-complete, thm-borel-fixed-point-for-complete-schemes, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, lem-nonaffine-group-image-exact-quotient-properties, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, lem-cartan-subgroups-conjugacy-and-density, thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions, thm-homogeneous-space-for-smooth-affine-group, lem-ag-flat-local-regularity-ascent-descent, thm-nonaffine-affine-normal-group-quotient-affine, def-quotient-sheaf-and-representable-quotient, def-complete-variety, def-proper-morphism]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.16)-(17.19), (17.30)-(17.31), (17.49), printed pp. 355-361 and 367-368"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S5.4-S5.5, Theorems 130 and 157, pp. 58-65"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a smooth connected affine group variety over $k$. (a) Every smooth connected solvable subgroup $H$ is geometrically contained in a Borel: $H_{k^{\mathrm a}}$ lies in a Borel of $G_{k^{\mathrm a}}$. If $k$ is algebraically closed this containment holds over $k$. If $H$ is normal, it is contained in every Borel subgroup of $G$ defined over $k$, when such a Borel exists. Arbitrary-field rational containment without normality is not asserted. (b) If $k$ is algebraically closed, then $R(G)=(\bigcap_{B\ \mathrm{Borel}}B)^\circ_{\mathrm{red}}$ is the largest smooth connected normal solvable subgroup ([[def-radical-and-unipotent-radical-of-an-algebraic-group]]). (c) A closed subgroup scheme $P\subseteq G$, with no reducedness hypothesis, is parabolic in the sense that $G/P$ is complete ([[def-parabolic-subgroup-of-an-affine-algebraic-group]]) if and only if $P_{k^{\mathrm a}}$ contains a Borel of $G_{k^{\mathrm a}}$. Every such $P$ is geometrically connected and $N_G(P)=P$ scheme-theoretically; in particular these conclusions hold when $P$ contains a Borel defined over $k$.

## Facts & Assumptions

**Given:** AC, smooth connected affine $G$, smooth connected solvable $H\subseteq G$, and a closed subgroup scheme $P\subseteq G$.

[F1] Over an algebraically closed field Borels exist, are smooth connected solvable, and are conjugate; a Borel quotient is complete. A smooth connected solvable group acting on a nonempty complete scheme has a fixed point. ([[def-borel-subgroup-and-maximal-torus]], [[thm-quotient-by-a-borel-subgroup-is-complete]], [[thm-borel-fixed-point-for-complete-schemes]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]])

[F2] Normality and solvability use the scheme-theoretic derived subgroup. Products with a smooth normal subgroup are homomorphic images of semidirect products and hence closed smooth connected subgroups when the factors are smooth connected. Solvability is closed under extensions: pull back a derived series of the quotient and append a series of the kernel. Reductions and reduced neutral components are smooth subgroup varieties over a perfect field, and a reduced neutral component of a normal subgroup is normal in a smooth ambient group. ([[def-derived-subgroup-and-solvable-algebraic-group]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]])

[F3] A Cartan $C_G(T)$ is contained in each Borel containing $T$, maximal tori are conjugate, and $N_G(B)=B$ for a Borel. Torus fixed schemes on smooth varieties are smooth. ([[lem-cartan-subgroups-conjugacy-and-density]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]])

[F4] The homogeneous quotient of smooth affine $G$ by any closed subgroup scheme is a separated finite-type fppf quotient with faithfully flat locally finitely presented projection. It is smooth over an algebraically closed field by flat-local regularity descent. Quotients by normal affine subgroups are affine; closed immersions descend along faithfully flat covers. Completeness means separated, finite type and universally closed and can be checked after field extension. ([[thm-homogeneous-space-for-smooth-affine-group]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-nonaffine-affine-normal-group-quotient-affine]], [[def-quotient-sheaf-and-representable-quotient]], [[def-complete-variety]], [[def-proper-morphism]])

[F5] The radical is the largest smooth connected normal solvable subgroup; finite-type affine $G$ is Noetherian, so schematic intersections of closed subgroups exist, and their reduced neutral components exist over perfect $k$. ([[def-radical-and-unipotent-radical-of-an-algebraic-group]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]])

## Proof

**Given:** AC and the groups in the Statement.

1.1 First suppose $k$ algebraically closed and choose a Borel $B$. The solvable group $H$ has a fixed point $gB$ in the complete quotient $G/B$ by [F1], so $H\subseteq gBg^{-1}$. If $H$ is normal, its product $HB$ is a closed smooth connected subgroup by [F2], and is solvable: its normal subgroup $H$ and quotient, a homomorphic image of $B$, are solvable. Borel maximality among smooth connected solvable subgroups therefore gives $HB=B$, hence $H\subseteq B$. This holds for every Borel. Over arbitrary $k$, apply this argument after algebraic closure; if $H$ is normal and $B$ is defined over $k$, the geometric inclusion $H_{k^{\mathrm a}}\subseteq B_{k^{\mathrm a}}$ descends to $H\subseteq B$. This proves all parts of (a). [F1, F2, choose]

1.2 Over algebraically closed $k$, if $B\subseteq P$, the quotient map induces a surjective morphism $G/B\to G/P$, and this morphism remains surjective after any field or scheme base change: pull back the cover $G\to G/P$ to see the fppf quotient locally as projection with fibre $P/B$. Its complete source makes $G/P$ universally closed over $k$: for any base change and closed subset of $G/P$, its inverse image in $G/B$ is closed and has exactly the same image in the base. As $G/P$ is separated and finite type by [F4], it is complete. Conversely, if $G/P$ is complete, a Borel fixes a point by [F1], so a conjugate Borel is contained in $P$. Completeness descends and ascends along field extension, giving the equivalence over arbitrary $k$ with geometric Borel containment. [F1, F4, construct]

1.3 Continue over algebraically closed $k$ with $B\subseteq P$. The smooth subgroup variety $P_{\mathrm{red}}$ is connected: for $p\in P(k)$, both $B$ and $pBp^{-1}$ are Borels of $(P_{\mathrm{red}})^\circ$, because they are connected and already maximal solvable in $G$. They are conjugate there; multiplying $p$ by the corresponding point of $(P_{\mathrm{red}})^\circ$ puts it in $N_G(B)(k)=B(k)$ by [F3]. Thus every point of $P_{\mathrm{red}}$ lies in its neutral component and $P$ is connected. The same argument for $n\in N_G(P)(k)$ puts $n$ in $P_{\mathrm{red}}(k)$, since it conjugates Borels inside $P_{\mathrm{red}}$. [F2, F3]

2.1 Over algebraically closed $k$, put $I=(\bigcap_BB)^\circ_{\mathrm{red}}$. The full schematic intersection is conjugation-stable, so its reduced neutral component is normal in smooth $G$ by [F2]; $I$ is smooth connected and solvable, since it lies in a Borel. Hence $I\subseteq R(G)$. Conversely step 1.1 puts the smooth connected normal solvable subgroup $R(G)$ in every Borel, so it factors through their intersection and, by smoothness and connectedness, through its reduced neutral component $I$. Therefore $I=R(G)$, proving (b). [F2, F5, step 1.1]

3.1 This point argument alone would not settle the scheme normalizer, so put $X=G/P$, smooth by [F4], and choose maximal $T\subseteq B$. Every $T$-fixed coset is represented by $N_G(T)(k)$: if $g^{-1}Tg\subseteq P$, conjugate this torus to $T$ inside $(P_{\mathrm{red}})^\circ$ by [F3]. The connected normalizer of $T$ is $C_G(T)$ by multiplicative-type rigidity, and this Cartan lies in $B\subseteq P$ by [F3]. Consequently there are finitely many $T$-fixed cosets. The smooth scheme $X^T$ is therefore finite étale. The group quotient $N_G(P)/P$ is a closed subscheme of $X^T$: closedness descends from $N_G(P)\subseteq G$ along $G\to X$, and normalizer points transport $T$ into $P$. It is finite étale and, by step 1.3, has only its identity point, so it is the trivial group scheme. Thus $N_G(P)=P$. The argument after algebraic closure also proves geometric connectedness; equality of subgroup schemes descends to $k$, proving all assertions of (c). [F3, F4, step 1.3] ∎

