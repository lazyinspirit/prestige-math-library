---
id: thm-chevalley-centralizer-radical-and-reductive-centralizers
kind: theorem
title: Chevalley's centralizer theorem and reductive centralizers
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 17
deps: [def-axiom-of-choice, lem-cartan-subgroups-conjugacy-and-density, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, def-borel-subgroup-and-maximal-torus, thm-solvable-subgroups-and-the-radical-as-borel-intersection, def-radical-and-unipotent-radical-of-an-algebraic-group, lem-fixed-loci-and-centralizers-of-torus-actions-are-connected, thm-quotient-by-a-borel-subgroup-is-complete, lem-nonaffine-subgroup-scheme-stabilizer-of-line, thm-homogeneous-space-for-smooth-affine-group, prop-faithfully-flat-orbit-map-represents-coset-quotient, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, thm-borel-fixed-point-for-complete-schemes, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, lem-finite-dimensional-subcomodules-contain-elements, def-unipotent-algebraic-group, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate, lem-unipotent-and-diagonalizable-intersection-is-trivial, lem-nonaffine-group-image-exact-quotient-properties]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.52)-(17.59), printed pp. 368-371; S17h (17.65)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "Theorem 157 and Corollary 158, Propositions 163-165"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a smooth connected affine group variety over an algebraically closed field $k$ and let $T$ be a maximal torus. Then Chevalley's theorem holds: $R_u(G)=(\bigcap_{B\supseteq T}B_u)^\circ_{\mathrm{red}}$ and $R_u(G)\cdot T=(\bigcap_{B\supseteq T}B)^\circ_{\mathrm{red}}$, the intersections running over the finite set of Borel subgroups containing $T$. Consequently, for any torus $S$ in $G$ one has $R_u(C_G(S))=R_u(G)\cap C_G(S)$, and for a torus $S$ acting on $G$ one has $R_u(G^S)=R_u(G)^S$. In particular, if $G$ is reductive, then $G^S$ is smooth, connected and reductive for every torus action by group automorphisms, in particular $C_G(S)$ has these properties for every torus $S\subseteq G$, and $C_G(T)=T$ for every maximal torus $T$ of a reductive $G$.

## Facts & Assumptions

**Given:** AC, smooth connected affine $G$ over algebraically closed $k$, and maximal torus $T$; external torus actions are by group automorphisms.

[F1] Cartans are smooth connected, lie in every Borel containing their maximal torus, and $N_G(B)=B$. Borels containing $T$ are conjugate under $N_G(T)(k)$; the connected normalizer of $T$ equals $C_G(T)$ by multiplicative-type rigidity. Thus the set of these Borels is finite, indexed by a quotient of the finite component set of $N_G(T)$. ([[lem-cartan-subgroups-conjugacy-and-density]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[def-borel-subgroup-and-maximal-torus]])

[F2] $R(G)$ is the reduced neutral intersection of all Borels. Smooth connected normal solvable subgroups lie in every Borel. The radical and unipotent radical are the largest smooth connected normal subgroups of their respective classes. ([[thm-solvable-subgroups-and-the-radical-as-borel-intersection]], [[def-radical-and-unipotent-radical-of-an-algebraic-group]])

[F3] Torus fixed subgroups of smooth connected affine groups are smooth connected, and $C_G(S)\cap B$ is a Borel of $C_G(S)$ whenever $S\subseteq B$. In particular $R_u(G)^S$ is smooth connected. ([[lem-fixed-loci-and-centralizers-of-torus-actions-are-connected]])

[F4] $X=G/B_0$ is a smooth connected complete variety for any Borel $B_0$, and embeds $G$-equivariantly as a closed orbit in some $\mathbf P(V)$: choose a Chevalley line with stabilizer $B_0$, identify its orbit with the fppf homogeneous quotient, and use completeness to make that locally closed orbit closed. Replace $V$ by the span of the orbit, so the embedding is nondegenerate. A smooth connected solvable group acting on a nonempty complete scheme has a fixed point. Every orbit of a smooth group is locally closed; an orbit of minimum dimension in its closure is closed. ([[thm-quotient-by-a-borel-subgroup-is-complete]], [[lem-nonaffine-subgroup-scheme-stabilizer-of-line]], [[thm-homogeneous-space-for-smooth-affine-group]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], [[thm-borel-fixed-point-for-complete-schemes]])

[F5] Finite-dimensional representations of a split torus have finite character-weight decompositions; regular functions on an affine variety with algebraic group action form a rational representation, and every finite subset lies in a finite-dimensional subrepresentation. A nonzero representation of a unipotent group has a nonzero fixed vector. ([[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[lem-finite-dimensional-subcomodules-contain-elements]], [[def-unipotent-algebraic-group]])

[F6] Over perfect $k$, reduced neutral subgroup components are smooth connected, and a smooth connected solvable group is $B_u\rtimes T$ for any maximal torus $T$. A unipotent group maps trivially to a group of multiplicative type, since its homomorphic image is both unipotent and multiplicative type. Homomorphic images of smooth connected affine groups are closed smooth connected subgroups. ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]], [[lem-nonaffine-group-image-exact-quotient-properties]])

## Proof

**Given:** AC, smooth connected affine $G$ over algebraically closed $k$, and maximal $T$.

1.1 Let $I_u=(\bigcap_{B\supseteq T}B_u)^\circ_{\mathrm{red}}$ and $I=(\bigcap_{B\supseteq T}B)^\circ_{\mathrm{red}}$. The intersection set is finite by [F1]. These groups are smooth connected and normalized by $N_G(T)$, which permutes the factors; $I_u$ is unipotent as a subgroup of one $B_u$. The normal unipotent radical $R_u(G)$ lies in every $B$ by [F2] and then in every $B_u$ by its maximal normal-unipotent property, so $R_u(G)\subseteq I_u$. We prove the reverse inclusion by the action on $X=G/B_0$. [F1, F2, F6, construct]

1.2 We give the closed-orbit argument for unipotent actions on affine varieties. For an orbit $O$, let $Y$ be its reduced affine closure. If its boundary is nonempty, the ideal of the boundary in $O(Y)$ is a nonzero stable rational representation: the orbit is open dense in $Y$, so its boundary is proper. By [F5] choose a nonzero invariant function $f$ in this ideal. Its value is constant on the dense orbit, hence $f$ is that scalar on reduced $Y$. The boundary forces this scalar to be zero, contradicting $f\ne0$. Therefore every such orbit is closed. This is the Kostant–Rosenlicht argument used in Milne17.65. [F4, F5, construct]

2.1 Under $G/B_0\to\{\text{Borels}\}$, $gB_0$ corresponds to $gB_0g^{-1}$; the map is injective because $N_G(B_0)=B_0$. Thus $X^T(k)$ is the finite set of Borels containing $T$, and $N_G(T)(k)$ is transitive on it. Take the nondegenerate projective embedding $X\subseteq\mathbf P(V)$ from [F4], with weights $\Xi$ for $T$. Choose an integral cocharacter $\lambda$ pairing distinctly with the distinct elements of $\Xi$. Let $\chi_-$ have minimum pairing. On the nonempty open set where the projection to $V_{\chi_-}$ is nonzero, the limit under $\lambda(t)$ as $t\to0$ is that projected line, lying in $X\cap\mathbf P(V_{\chi_-})\subseteq X^T$. This projection has constant image because its irreducible domain maps to the finite fixed set. Since $X$ spans $V$, its projections span $V_{\chi_-}$, so this space is one-dimensional. Write it as $kv_-$, with point $x_-=[v_-]\in X^T$. [F1, F4, F5, step 1.1, choose]

3.1 Let $\ell\in V^*$ equal $1$ on $v_-$ and vanish on every other weight space. The chart $U(x_-)=X\cap\{\ell\ne0\}$ is affine and is contracted by $\lambda$ to $x_-$. In the dual projective space, every $G$-orbit meets the affine chart where evaluation on $v_-$ is nonzero: otherwise a nonzero dual vector would annihilate all $gv_-$, which span $V$. The action of $\lambda^{-1}$ contracts that dual chart to $[\ell]$, so the closure of every dual orbit contains $[\ell]$. A closed orbit in the closure of $G[\ell]$ exists by [F4]; it also contains $[\ell]$, and hence is $G[\ell]$. Thus $G[\ell]$ is closed and its stabilizer $P$ has complete quotient. By Borel fixed points [F4], $P$ contains a Borel. Since $T\subseteq P$, choose a Borel containing $T$ inside $(P_{\mathrm{red}})^\circ$; conjugacy there to the previously obtained $G$-Borel shows it is a $G$-Borel $B'$. Thus $I_u\subseteq B'_u\subseteq P$. The dual line is $I_u$-stable, so $U(x_-)$ is $I_u$-stable. [F1, F4, F5, F6, step 2.1, choose]

4.1 Translating this chart by $N_G(T)(k)$ supplies a $T$-stable and $I_u$-stable affine open $U(x)$ containing every $x\in X^T(k)$, since this normalizer preserves $I_u$. These charts cover $X$: the closure of the $T$-orbit of any point is nonempty complete and has a $T$-fixed point $x$ by [F4]; if the point lay outside $U(x)$, its full orbit closure would lie in the closed $T$-stable complement, contradicting the presence of $x$. [F1, F4, step 3.1]

5.1 For any $y\in X(k)$, the complete orbit closure $\overline{I_u y}$ has an $I_u$-fixed point $z$ by [F4]. Choose an $I_u$-stable affine chart from step 4.1 containing $z$. If the orbit met its closed stable complement, the whole orbit and its closure would lie there, excluding $z$. Thus the orbit lies in the chart and is closed there by step 1.2. It contains $z$, so it is a single point. Hence $I_u$ fixes every point of $X$. The smooth reduced scheme $I_u\times X$ has dense rational points, so the action is scheme-theoretically trivial. Its stabilizers are all Borels, and consequently $I_u$ lies in their full intersection. Smoothness and connectedness put it in its reduced neutral component $R(G)$ by [F2]; being unipotent it lies in $R_u(G)$. Together with step 1.1 this proves $I_u=R_u(G)$. [F2, F4, F5, step 1.1, step 4.1, step 1.2]

6.1 Fix $B_0\supseteq T$ and its split quotient $q_0:B_0=B_{0,u}\rtimes T\to T$. The group $I$ contains $T$ and maps onto $T$ with this section. Thus $I=K\rtimes T$, with $K=I\cap B_{0,u}$; the product isomorphism shows $K$ smooth connected. It is unipotent and lies in every Borel $B\supseteq T$, so its homomorphism into the torus $B/B_u$ is trivial by [F6]. Therefore $K\subseteq B_u$ for all these Borels, hence $K\subseteq I_u$. Conversely $I_u\subseteq K$, so $K=I_u=R_u(G)$ and $I=R_u(G)T$. This proves both Chevalley intersection identities scheme-theoretically. [F6, step 1.1, step 5.1]

7.1 For a torus subgroup $S$, set $C=C_G(S)$ and choose a maximal torus $T\supseteq S$. The group $R_u(G)\cap C=R_u(G)^S$ is smooth connected by [F3], unipotent and normal in $C$, so it lies in $R_u(C)$. Conversely for every Borel $B\supseteq T$, $C\cap B$ is a Borel of $C$ by [F3], and the normal smooth connected unipotent subgroup $R_u(C)$ lies in it by [F2]. Thus $R_u(C)\subseteq I=R_u(G)T$. Its map into the torus $I/R_u(G)$ is trivial, so $R_u(C)\subseteq R_u(G)\cap C$. Equality follows. For an external torus action form $H=G\rtimes S$. Its unipotent radical is $R_u(G)$: normal unipotent subgroups have trivial image in $S$, and $R_u(G)$ is invariant under $S$ by uniqueness. Since $C_H(S)=G^S\times S$, the subgroup-centralizer equality in $H$ gives $R_u(G^S)=R_u(G)^S$. [F2, F3, F6, step 6.1, choose]

8.1 If $G$ is reductive, $R_u(G)=1$, so step 7.1 and smooth connectedness in [F3] make every torus fixed subgroup, in particular every torus centralizer, reductive. For maximal $T$, the smooth connected $C_G(T)$ lies in every Borel containing $T$ by [F1], hence in $I=R_u(G)T=T$ by step 6.1; the reverse inclusion is immediate. Therefore $C_G(T)=T$. This proves every stated consequence. [F1, F3, step 6.1, step 7.1] ∎

