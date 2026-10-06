---
id: lem-cartan-subgroups-conjugacy-and-density
kind: lemma
title: "Cartan subgroups: conjugacy, density and normalizers"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 15
deps: [def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-group-of-multiplicative-type-and-torus, lem-fixed-loci-and-centralizers-of-torus-actions-are-connected, thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, lem-smooth-finite-type-schemes-have-schematically-dense-rational-points, lem-lie-functor-exactness-fixed-points-and-generation, thm-homogeneous-space-for-smooth-affine-group, lem-ag-flat-local-regularity-ascent-descent, thm-nonaffine-affine-normal-group-quotient-affine, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, thm-quotient-by-a-borel-subgroup-is-complete, thm-global-functions-proper-integral-variety, thm-morphisms-into-affine-scheme-global-sections, lem-nonaffine-subgroup-scheme-stabilizer-of-line, lem-nilpotent-group-structure-and-maximal-torus-criterion, thm-trigonalizable-extensions-split-over-algebraically-closed-fields, def-unipotent-algebraic-group]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.21)-(17.22), (17.33), (17.43)-(17.50), printed pp. 358-368"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.1, Definition 155 and Corollary 158"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a smooth connected affine group variety over an algebraically closed field $k$ and let $T$ be a maximal torus. (a) The Cartan subgroup $C_G(T)$ is smooth, connected and nilpotent, $C_G(T)=N_G(C_G(T))^\circ$, and $C_G(T)$ is contained in every Borel subgroup of $G$ containing $T$; if $G$ is reductive then $C_G(T)=T$. (b) Any two Cartan subgroups of $G$ are conjugate by an element of $G(k)$, and the union of the Cartan subgroups contains a dense open subset of $G$. (c) For every Borel subgroup $B$ one has $Z(G)=Z(B)$. (d) If $H\subseteq G$ contains a Cartan subgroup, then $N_G(H)^\circ=H^\circ$; in particular every Borel subgroup equals its own normalizer and $(N_G(B_u))_{\mathrm{red}}=B$ for a maximal unipotent subgroup $B_u$ of a Borel subgroup $B$.

## Facts & Assumptions

**Given:** AC, a smooth connected affine group $G$ over algebraically closed $k$, a maximal torus $T$, and $C=C_G(T)$.

[F1] Torus centralizers are smooth connected; $C$ is nilpotent with its unique maximal torus $T$, and $N_G(C)^\circ=C$. The fixed tangent space is $\operatorname{Lie}(C_G(S))=\mathfrak g^S$, and torus fixed schemes in smooth varieties are smooth. ([[lem-fixed-loci-and-centralizers-of-torus-actions-are-connected]], [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]])

[F2] Borels and maximal tori are conjugate in a smooth connected affine group over algebraically closed $k$. Borels containing $T$ are permuted transitively by $N_G(T)(k)$; maximal tori in a smooth connected solvable group are conjugate. ([[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate]], [[def-borel-subgroup-and-maximal-torus]])

[F3] Finite-dimensional torus representations have choice-free weight decompositions. Smooth schemes have schematically dense algebraically closed rational points. The correct normalizer formula is $\operatorname{Lie}(N_G(H))/\operatorname{Lie}(H)=(\mathfrak g/\operatorname{Lie}(H))^H$, a quotient of Lie algebras; it does not assert a formula for the Lie algebra of $N_G(H)/H$ when $H$ is nonsmooth. ([[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]], [[lem-lie-functor-exactness-fixed-points-and-generation]])

[F4] $G/H$ for a closed subgroup scheme of smooth affine $G$ is a separated finite-type fppf quotient with faithfully flat locally finitely presented projection. Smoothness descends along this cover over algebraically closed $k$, by flat-local regularity descent. Quotients by normal affine subgroups are affine; the projection is smooth when its kernel is smooth. Reductions of algebraic groups over perfect $k$ are smooth subgroup varieties. ([[thm-homogeneous-space-for-smooth-affine-group]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-nonaffine-affine-normal-group-quotient-affine]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]])

[F5] $G/B$ is complete. A proper integral variety over algebraically closed $k$ has global functions $k$, and this equality becomes $\Gamma((G/B)_R,\mathcal O)=R$ after flat base change to any $k$-algebra $R$. A morphism into an affine scheme is determined by global functions. Any closed subgroup is the scheme-theoretic stabilizer of a line in a finite-dimensional rational representation. ([[thm-quotient-by-a-borel-subgroup-is-complete]], [[thm-global-functions-proper-integral-variety]], [[thm-morphisms-into-affine-scheme-global-sections]], [[lem-nonaffine-subgroup-scheme-stabilizer-of-line]])

[F6] Multiplicative-type rigidity makes an action of a connected group on a torus by group automorphisms trivial (Milne12.36–12.38). A smooth connected affine group having a nilpotent Borel equals that Borel (Milne17.23): the positive-dimensional centre of a nontrivial nilpotent Borel is central in the whole group by the complete-quotient rigidity argument, and quotient induction lowers its dimension; the zero-dimensional case is affine and complete. Consequently a smooth connected affine group with no nontrivial smooth connected unipotent subgroup is a torus (17.25): its Borel is a torus and hence nilpotent. These precise source inputs are independent of reductive-centre claims. Smooth connected unipotent groups are nilpotent and a solvable group decomposes as $B_u\rtimes T$. ([[lem-nilpotent-group-structure-and-maximal-torus-criterion]], [[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]], [[def-unipotent-algebraic-group]])

[F7] For the reductive consequence only, use the source-proved Milne17.56 and17.61 input: for a maximal torus $T$, $(\bigcap_{B\supseteq T}B)^\circ_{\mathrm{red}}=R_u(G)T$. Since $C_G(T)$ is smooth connected and lies in each such Borel, it lies in this reduced neutral intersection; reductivity gives $R_u(G)=1$ and hence $C_G(T)=T$. The source proves the intersection theorem by stable affine charts in the flag quotient and the closed-orbit theorem for unipotent groups (17.64–65). This precise external input avoids a cycle through the later local Chevalley and centre carriers.

## Proof

**Given:** AC, smooth connected affine $G$ over algebraically closed $k$, and maximal $T$.

1.1 By [F1] the Cartan $C=C_G(T)$ is smooth connected nilpotent and satisfies $N_G(C)^\circ=C$. It lies in some Borel $B'$ because it is connected solvable, and $T\subseteq B'$. For any other Borel $B\supseteq T$, [F2] gives $B=nB'n^{-1}$ with $n\in N_G(T)(k)$. Such $n$ preserves $C$, so $C\subseteq B$. In the reductive case [F7] gives $C=T$. This proves (a). [F1, F2, F7]

1.2 Conjugacy of maximal tori in [F2] implies conjugacy of their centralizers, proving the first assertion of (b). To prove density, decompose $\mathfrak g$ into $T$-weights. There are finitely many nonzero weights; choose $t\in T(k)$ with $\chi(t)\ne1$ for each of them, possible because their kernels are proper closed subsets of the irreducible torus. On the zero-weight space $\mathfrak c$ the differential of $G\times C\to G$, $(g,c)\mapsto gcg^{-1}$, at $(e,t)$ receives all of $\mathfrak c$ from its second factor. On every other weight space the first-factor differential is multiplication by $1-\chi(t)$, hence invertible. The differential is surjective. A morphism between smooth varieties with surjective differential is smooth on a neighbourhood of this point and hence has open image there. This nonempty open subset consists of conjugates of points of $C$; algebraically closed rational points in each nonempty fibre give the asserted dense open union of Cartan subgroups. [F1, F2, F3, choose, algebra]

1.3 To prove the full neutral-normalizer clause for possibly nonsmooth $H\supseteq C$, put $X=G/H$, smooth by [F4]. The connected normalizer of $T$ acts trivially on $T$ by rigidity, so $N_G(T)^\circ=C$. It has finitely many connected components; therefore $N_G(T)(k)/C(k)$ is finite. Every $T$-fixed coset $gH\in X(k)$ satisfies $g^{-1}Tg\subseteq H$. Both $T$ and $g^{-1}Tg$ lie in the smooth connected group $(H_{\mathrm{red}})^\circ$ and are maximal tori there, since they are maximal in $G$. By [F2] some $h\in H(k)$ makes $gh\in N_G(T)(k)$. Thus the fixed cosets are represented by this finite set of normalizer components. Since $X^T$ is smooth by [F1] and has finitely many geometric points, it is finite étale. [F1, F2, F4, F6, construct]

2.1 Let $B\supseteq T$ be a Borel. For every $R$ and $z\in C_G(B)(R)$, the morphism $g\mapsto zgz^{-1}g^{-1}$ is right $B_R$-invariant, since $z$ commutes with $B_R$, and descends to $(G/B)_R$. By [F5] any such morphism to affine $G_R$ is constant, with its identity value at $eB$. Therefore $C_G(B)=Z(G)$ as group schemes. Step 1.1 gives $Z(G)\subseteq C_G(T)\subseteq B$, so $Z(B)=C_G(B)\cap B=Z(G)$. This proves (c). [F5, step 1.1, algebra]

2.2 The quotient $N_G(H)/H$ is a closed subgroup scheme of $X$: pullback along the faithfully flat cover $G\to X$ identifies it with the closed subgroup $N_G(H)\subseteq G$, so closed immersion descends. It lies in $X^T$ because $T\subseteq H$ and each normalizer point transports $T$ into $H$. A closed subscheme of a finite étale scheme over algebraically closed $k$ is finite étale. Therefore $N_G(H)/H$ is finite étale and its identity fibre is $H$. The connected component of $N_G(H)$ lies in that fibre; together with the reverse inclusion this proves $N_G(H)^\circ=H^\circ$, without claiming $H$ smooth. For smooth $H$, [F3] also gives $\operatorname{Lie}N_G(H)=\operatorname{Lie}H$: the zero-weight space $\mathfrak g^T=\mathfrak c$ lies in $\mathfrak h$, so $(\mathfrak g/\mathfrak h)^T=0$, hence its $H$-invariants vanish. Thus the full normalizer of such $H$ is smooth. [F1, F3, F4, step 1.3]

3.1 We prove $N_G(B)=B$ by induction on $\dim G$, with the zero-dimensional case immediate. The normalizer is smooth by step 2.2 because $B$ contains $C$. For $x\in N_G(B)(k)$, conjugate by a point of $B$ so that $x$ normalizes $T$, using [F2]. Then $\varphi:T\to T$, $t\mapsto xtx^{-1}t^{-1}$, is a homomorphism. If it is not surjective, its kernel contains a positive-dimensional torus $S$. Thus $x\in C_G(S)$ and normalizes $C_G(S)\cap B$, a Borel by [F1]. If $C_G(S)\ne G$, induction on this smaller smooth connected group puts $x$ in $B$. If $C_G(S)=G$, then $S$ is central; induction on $G/S$ and its Borel $B/S$ again puts $x$ in $B$. The quotient Borel assertion follows by pulling back any larger smooth connected solvable subgroup along the smooth central-torus quotient. [F1, F2, F4, F6, step 2.2, induction]

4.1 If $\varphi$ is surjective, choose by [F5] a line $L=kv$ whose scheme-theoretic stabilizer is $N_G(B)$. Its character on $T$ is trivial, because it is trivial on commutators $[x,t]$ and these exhaust $T$ as a group scheme. The unipotent subgroup $B_u$ also fixes $v$, by the fixed-vector criterion on this one-dimensional representation. Hence $B$ fixes $v$ and the orbit morphism descends to $G/B\to V$. By [F5] it is the constant $v$, so $G$ fixes $v$ and therefore $G=N_G(B)$. This makes $B$ normal. All conjugate Borels then equal $B$ and, by step 1.1, all Cartans lie in $B$. Their dense union in step 1.2 forces the closed subgroup $B$ to equal $G$. Thus $x\in B$ in this case as well. Since $N_G(B)$ and $B$ are smooth with identical algebraically closed points, they are equal as group schemes. [F2, F5, F6, step 1.1, step 1.2, step 3.1, discharge-induction]

5.1 Every subgroup variety $P\supseteq B$ is connected: for $p\in P(k)$, the two Borels $B$ and $pBp^{-1}$ of $P^\circ$ are conjugate by $P^\circ(k)$, so after multiplying $p$ by such a point it normalizes $B$. Step 4.1 puts that product in $B\subseteq P^\circ$, hence $p\in P^\circ$. Let $P=(N_G(B_u))_{\mathrm{red}}$, a subgroup variety by [F4], containing $B$. The subgroup $B_u$ is maximal among smooth connected unipotent subgroups of $G$: any larger such group lies in a Borel, and its dimension is at most that Borel's unipotent radical, which has the same dimension as $B_u$ by conjugacy. The smooth connected affine quotient $P/B_u$ therefore has no nontrivial smooth connected unipotent subgroup, since its inverse image would be a larger such subgroup of $G$. By [F6] it is a torus, so $P$ is solvable and Borel maximality gives $P=B$. Thus $(N_G(B_u))_{\mathrm{red}}=B$, completing (d). The unreduced equality can fail: in characteristic $2$ and $G=\mathrm{PGL}_2$, $I+\varepsilon E_{21}$ normalizes upper $B_u$ over $k[\varepsilon]/\varepsilon^2$ but is outside upper $B$. [F2, F4, F6, step 4.1] ∎

