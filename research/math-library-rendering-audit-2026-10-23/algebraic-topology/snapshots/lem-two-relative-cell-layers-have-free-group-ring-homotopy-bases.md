---
id: lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases
kind: lemma
title: "Two high relative cell layers have free homotopy bases and their cellular boundary matrix"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees, def-based-cellular-chain-complex-of-a-universal-cover, lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases, lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees, thm-covering-space-lifting-criterion, lem-high-relative-cells-do-not-change-lower-homotopy, thm-long-exact-sequence-of-relative-homotopy-groups, lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees, thm-five-lemma-for-a-morphism-of-long-exact-sequences, def-hurewicz-homomorphism, lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, thm-path-lifting-for-covering-maps, prop-monodromy-acts-by-bijections-and-detects-components, thm-homotopy-lifting-for-covering-maps, thm-higher-dimensional-spheres-are-simply-connected, def-covering-map-and-evenly-covered-neighbourhoods, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, lem-relative-cubical-disk-model-and-compression, lem-group-rings-have-invariant-basis-number-via-augmentation]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Cohen, §8.1 and beginning of §8.2, pp.28–30"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§8.1 and beginning of §8.2, pp.28–30"
    - title: "Lück, Theorem 2.21 proof sketch, pp.37–38"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Theorem 2.21 proof sketch, pp.37–38"
    - title: "Hatcher, Algebraic Topology, Proposition 4.21, and the relative Hurewicz and covering-space arguments of §4.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf"
      locator: "Proposition 4.21 and §4.2"
    - title: "Hatcher, Algebraic Topology, §4.1 change-of-basepoint arguments"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf"
      locator: "Printed pp.341–342: absolute change-of-basepoint isomorphisms and path-composition laws; p.345: relative change of basepoint for paths in A and the induced π1(A)-action"
---
## Statement

Let $L\subset K$ be connected finite CW complexes, let $\pi_1(L)\to\pi_1(K)$ be an
isomorphism, and suppose that the relative cells of $K$ over $L$ occur only in
dimensions $n,n+1$ with $n\ge3$. Put $K_n=L$ together with the relative
$n$-cells and $R=\mathbb Z[\pi_1K]$. Then $\pi_n(K_n,L)$ and
$\pi_{n+1}(K,K_n)$ are finite free right $R$-modules on the chosen oriented
characteristic cells, up to $\pm g$. The triple boundary
$$\partial:\pi_{n+1}(K,K_n)\longrightarrow\pi_n(K_n,L)$$
is represented in those bases by the relative cellular differential
$d_{n+1}:C_{n+1}(\widetilde K,\widetilde L)\to C_n(\widetilde K,\widetilde L)$.
If $L\hookrightarrow K$ is a homotopy equivalence, $\partial$ is an isomorphism,
hence its matrix is invertible.

The right $R$-module structure meant here is induced on the universal-cover
relative homotopy groups by deck transformations, with basepoints transported
back along paths in the corresponding simply connected subspaces $\widetilde L$
or $\widetilde K_n$, and then transported to the base-side groups by the
covering isomorphisms of step 3.2 below. The change-of-basepoint map is
independent of the path because those subspaces are simply connected. A
*chosen oriented characteristic cell* means one chosen lift of the cell together
with one orientation of it. Changing the lift multiplies the corresponding
basis element by an element of $\pi$ and reversing the orientation multiplies
it by $-1$, so the basis is determined only up to these factors $\pm g$; every
such change alters a representing matrix only by the corresponding change of
basis, and the assertions below are unaffected by it.

## Facts & Assumptions

**Given:** Connected finite CW complexes $L\subset K$ whose relative cells occur only in dimensions $n,n+1$ with $n\ge3$, with $\pi_1(L)\to\pi_1(K)$ an isomorphism; a basepoint $k_0\in L$ that is a vertex, the universal cover $p:\widetilde K\to K$, and $R=\mathbb Z[\pi]$ for $\pi=\pi_1(K,k_0)$.

[F1] Relative to $L$, finitely many elementary expansions and collapses transform $(K,L)$ into a pair $(K',L)$ whose relative cells occur only in two adjacent degrees $n,n+1$ with $n\ge3$, and the deformation respects the homotopy class of the inclusion and transports the relative torsion ([[lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees]]).

[F2] For a CW pair $(X,A)$ with universal cover $p:\widetilde X\to X$, the preimage $p^{-1}(A)$ is a CW subcomplex of the lifted CW structure, the $n$-skeleton of that structure is $\widetilde X^n=p^{-1}(X^n)$, and the preimage of a relative sum $X^n\cup A$ is its $n$-skeleton; a deck transformation is determined by its value at one point and acts freely, so the lifts of a single cell $e$ are exactly the cells $T_g\widetilde e$ for one chosen lift $\widetilde e$ ([[def-based-cellular-chain-complex-of-a-universal-cover]]).

[F3] On the chains of $\widetilde X$ the deck group acts on the left and the right $R$-action is $c\cdot g:=T_{g^{-1}}(c)$, and each $T_{g^{-1}}$ is a homeomorphism of the pairs $(\widetilde X^n\cup p^{-1}A,\widetilde X^{n-1}\cup p^{-1}A)$, so the action passes to the homology of those pairs; for chosen oriented lifts of the relative cells the group $C_n^{\mathrm{cell}}(\widetilde X,p^{-1}A;R)=H_n(\widetilde X^n\cup p^{-1}A,\widetilde X^{n-1}\cup p^{-1}A;\mathbb Z)$ is a finite free right $R$-module on those lifts, the lifts of one cell forming the $\pi$-orbit $\{T_g\widetilde e\}$ of the chosen lift ([[def-based-cellular-chain-complex-of-a-universal-cover]]).

[F4] Let $A$ be a nonempty simply connected CW complex, $a\in A$, and $k\ge2$, and attach a set of oriented $k$-cells directly to $A$ with supplied characteristic maps $\chi_e:(D^k,S^{k-1})\to(Z,A)$; then $\pi_k(Z,A,a)$ and $H_k(Z,A;\mathbb Z)$ are free abelian on these cells, with basis elements $c_e$ and $u_e$ satisfying $h(c_e)=u_e=(\chi_e)_*[D^k,S^{k-1}]$ for the relative Hurewicz map $h$, the class $c_e$ is represented by moving the marked boundary value of $\chi_e$ to $a$ through $A$ and extending, and the result is independent of these choices and choice-free ([[lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases]]).

[F5] If a CW pair $(X,A)$ has all cells outside $A$ of dimension at least $n\ge1$, then $\pi_0(A)\to\pi_0(X)$ is a bijection when $n\ge2$ and $\pi_i(A,a)\to\pi_i(X,a)$ is an isomorphism for $1\le i<n-1$ at every $a\in A$; no choice principle is used ([[lem-high-relative-cells-do-not-change-lower-homotopy]]).

[F6] Let $Y$ be path-connected and locally path-connected, $f:(Y,y_0)\to(B,b_0)$ based, and $p:(E,e_0)\to(B,b_0)$ a covering; a based lift of $f$ exists if and only if $f_*\pi_1(Y,y_0)\subseteq p_*\pi_1(E,e_0)$, and it is then unique ([[thm-covering-space-lifting-criterion]]).

[F7] For every $n\ge2$ the sphere $S^n$ is simply connected, in particular $\pi_1(S^n,*)=1$ ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F8] If $p:E\to B$ is a covering, $H:Y\times I\to B$ a homotopy and $\widetilde H_0$ a lift of $H(-,0)$, then there is a unique lift $\widetilde H:Y\times I\to E$ of $H$ extending $\widetilde H_0$ ([[thm-homotopy-lifting-for-covering-maps]]).

[F9] For every based pair $(X,A,x_0)$ the relative homotopy sequence is exact at each term with an incoming and outgoing arrow, the arrows being homomorphisms where both group structures exist ([[thm-long-exact-sequence-of-relative-homotopy-groups]]).

[F10] Restriction to the face $I^{m-1}\times\{0\}$ defines the boundary $\partial:\pi_m(X,A,x_0)\to\pi_{m-1}(A,x_0)$, a homomorphism for $m\ge2$, and maps and homotopies of based pairs act functorially on these boundaries ([[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]]); relative nullity is equivalent to compression of a disk model into $A$ fixing the whole disk boundary, so classes and boundary values may be computed on disk models $(D^m,S^{m-1})\to(X,A)$ ([[lem-relative-cubical-disk-model-and-compression]]).

[F11] If a morphism of long exact sequences in an abelian category is an isomorphism at four consecutive terms around a term, then it is an isomorphism at that term as well ([[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]).

[F12] For $c\in A\subseteq B\subseteq X$ and $m\ge2$ the triple sequence $$\pi_{m+1}(X,B,c)\xrightarrow{\delta}\pi_m(B,A,c)\xrightarrow{s}\pi_m(X,A,c)\xrightarrow{t}\pi_m(X,B,c)\xrightarrow{\delta}\pi_{m-1}(B,A,c)$$ is natural in based maps of triples and exact at its three middle terms, where $\delta$ is the boundary for $(X,B)$ followed by the relative map for $(B,A)$; these statements need no choice and no CW hypotheses ([[lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees]]).

[F13] The absolute Hurewicz homomorphism is $h([f])=f_*[S^m]$ and the relative one is $h([f])=f_*[D^m,S^{m-1}]$, where $[D^m,S^{m-1}]$ is the class whose homology boundary is the positive boundary-sphere generator; both are well-defined, natural in based maps and based maps of pairs, and reversing both orientations multiplies them by $-1$ ([[def-hurewicz-homomorphism]]).

[F14] For a CW pair $(X,A)$, an ordinary homology theory $h$ and $F_{-1}=A$, $F_r=A\cup X^r$, the groups $C_r^h(X,A)=h_r(F_r,F_{r-1})$ are direct sums of copies of the coefficient group indexed by the relative $r$-cells, and the differential $d_r$ is the triple boundary to $h_{r-1}(F_{r-1},A)$ followed by its map to $h_{r-1}(F_{r-1},F_{r-2})$, with $d_0=0$ ([[lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair]]).

[F15] For a path-connected, locally path-connected and semilocally simply connected base, the deck group of a universal cover is isomorphic to the fundamental group by the assignment carrying a loop class to the deck transformation that moves the chosen fibre point to the corresponding lifted endpoint of that loop ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

[F16] For a covering $p:E\to B$ and a path $\alpha$ in $B$ with $\alpha(0)=e_0$ a point of $E$, there is a unique lift of $\alpha$ starting at $e_0$ ([[thm-path-lifting-for-covering-maps]]).

[F17] Monodromy acts on each covering fibre by bijections, and its orbit through a point $e$ is exactly the intersection of the path component of $e$ with that fibre ([[prop-monodromy-acts-by-bijections-and-detects-components]]).

[F18] A covering is a continuous surjection in which every point of the base has an evenly covered neighbourhood $U$, that is, $p^{-1}(U)$ is a disjoint union of open sets each mapped homeomorphically onto $U$; these are the sheets over $U$ ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F19] If $A\subset X$ is a CW subcomplex whose inclusion is a homotopy equivalence, then $X$ strongly deformation retracts onto $A$ ([[lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts]]).

[F20] A based map induces maps on homotopy groups, identities and composition are preserved, based homotopic maps induce equal maps, and based homotopy equivalences induce isomorphisms ([[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

[F21] If $\gamma$ is a path in $A\subset X$ from $a_0$ to $a_1$, it induces a change-of-basepoint isomorphism $\beta_\gamma:\pi_k(X,A,a_1)\to\pi_k(X,A,a_0)$; these maps have the identity, inverse-path and path-composition properties of the absolute change-of-basepoint maps, and loops in $A$ act on the relative homotopy groups. Thus if $A$ is simply connected, the isomorphism is independent of the path between its endpoints (Hatcher, *Algebraic Topology*, §4.1, printed pp.341–342 and 345).

[F22] For every discrete group $\pi$, an isomorphism of finite free right $\mathbb Z[\pi]$-modules $\mathbb Z[\pi]^m\cong\mathbb Z[\pi]^n$ forces $m=n$ ([[lem-group-rings-have-invariant-basis-number-via-augmentation]]).

## Proof

**Proof technique:** direct.

1.1 The situation of the statement is the one produced by [F1]: for a finite relative homotopy equivalence the cell-trading lemma yields, relative to $L$, a formal deformation to a pair whose relative cells lie in two adjacent degrees, with the deformation respecting the homotopy class of the inclusion and transporting the relative torsion, and this statement therefore applies to each pair so produced; conversely it applies verbatim to any pair satisfying its two-layer hypothesis. All claims below concern a pair $(K,L)$ with relative cells only in the two degrees $n,n+1\ge3$, a vertex basepoint $k_0\in L$, and $\pi=\pi_1(K,k_0)$. [F1]

1.2 Let $p:\widetilde K\to K$ be a universal cover and put $\widetilde L=p^{-1}(L)$ and $\widetilde K_n=p^{-1}(K_n)$, where $K_n=L\cup K^{(n)}=L\cup\{\text{relative }n\text{-cells}\}$. Then $\widetilde L$ and $\widetilde K_n$ are CW subcomplexes of the lifted CW structure, $\widetilde K_n=\widetilde L\cup\widetilde K^{(n)}$ is carried by $\widetilde L$ and the lifts of the relative $n$-cells, and $\widetilde K$ is carried by $\widetilde K_n$ and the lifts of the relative $(n+1)$-cells. This distinction matters when $L$ has cells above dimension $n$. The deck group is identified with $\pi$ and acts freely on $\widetilde K$, the lifts of a single cell forming one orbit $\{T_g\widetilde e\}$, and the right action on chains is $c\cdot g=T_{g^{-1}}(c)$, which passes to the homology of the pairs $(\widetilde X^m\cup p^{-1}A,\widetilde X^{m-1}\cup p^{-1}A)$. [F2, F3]

1.3 The restrictions $p:\widetilde L\to L$ and $p:\widetilde K_n\to K_n$ are coverings: if $U$ is an evenly covered neighbourhood of a point $x\in K_n$ with sheets $V$ over $U$, then $p^{-1}(U\cap K_n)$ is the disjoint union of the sets $V\cap\widetilde K_n$, each mapped homeomorphically onto $U\cap K_n$ because $p(V\cap\widetilde K_n)=p(V)\cap p(\widetilde K_n)=U\cap K_n$. [F18, F2]

1.4 Every relative $n$-cell of $K$ has attaching map with image in $K^{(n-1)}=L^{(n-1)}\subseteq L$, and $S^{n-1}$ is simply connected because $n\ge3$, so the attaching map lifts to $\widetilde L$ by the lifting criterion; hence the relative cells of $(\widetilde K_n,\widetilde L)$ are exactly the lifts of the relative $n$-cells, attached directly to $\widetilde L$, and the relative cells of $(\widetilde K,\widetilde K_n)$ are the lifts of the relative $(n+1)$-cells, attached directly to $\widetilde K_n=\widetilde L\cup\widetilde K^{(n)}$ because $S^n$ is simply connected for $n\ge3$. [F2, F6, F7]

1.5 The space $\widetilde L$ is path-connected and simply connected. The monodromy action of $\pi_1(L,k_0)$ on the fibre $p^{-1}(k_0)$ is transitive, because the monodromy of a loop class $[\gamma]$ is the deck transformation $T_{j_*[\gamma]}$ of the universal cover [F15], the deck group is transitive on the lifts of the vertex $k_0$ [F2], and $j_*$ is onto since it is an isomorphism; hence the whole fibre over $k_0$ lies in one path component of $\widetilde L$ [F17], and every point of $\widetilde L$ is joined to that fibre by a lifted path [F16], so $\widetilde L$ is path-connected. Also $\pi_1(\widetilde L,\widetilde k_0)$ is trivial: for a loop $\widetilde\gamma$ at $\widetilde k_0$ with $\gamma=p\widetilde\gamma$ one has $T_{j_*[\gamma]}(\widetilde k_0)=\widetilde\gamma(1)=\widetilde k_0$, so $j_*[\gamma]=1$ and then $[\gamma]=1$ because $j_*$ is injective, and a null-homotopy of $\gamma$ in $L$ lifts through the covering $\widetilde L\to L$ to a null-homotopy of $\widetilde\gamma$ because $\pi_1(D^2)$ is trivial [F6]. [F2, F6, F15, F16, F17]

2.1 Applying the high-relative-cells lemma to the pair $(\widetilde K_n,\widetilde L)$, whose relative cells all have dimension $n\ge3$, gives a bijection $\pi_0(\widetilde L)\to\pi_0(\widetilde K_n)$ and an isomorphism $\pi_1(\widetilde L,\widetilde k_0)\to\pi_1(\widetilde K_n,\widetilde k_0)$; by step 1.5 the space $\widetilde K_n$ is therefore nonempty, path-connected and simply connected. [F5, step 1.5]

2.2 By the single-cell-layer lemma applied to $A=\widetilde L$, $k=n$ and the lifted $n$-cells with their lifted characteristic maps, $\pi_n(\widetilde K_n,\widetilde L)$ and $H_n(\widetilde K_n,\widetilde L;\mathbb Z)$ are free abelian on the lifts of the relative $n$-cells, with basis classes $c_{\widetilde e}$ and $u_{\widetilde e}$ satisfying $h(c_{\widetilde e})=u_{\widetilde e}=(\chi_{\widetilde e})_*[D^n,S^{n-1}]$; the construction is choice-free and the class $c_{\widetilde e}$ is independent of the choices made in representing it. [F4, step 1.4, step 1.5]

2.3 For $i\ge2$ the covering $p:\widetilde K_n\to K_n$ induces an isomorphism $\pi_i(\widetilde K_n,\widetilde x)\to\pi_i(K_n,p(\widetilde x))$: it is injective because a null-homotopy of the composite of a based map $S^i\to\widetilde K_n$ with $p$ lifts to a null-homotopy of that map by homotopy lifting [F8], and it is surjective because $S^i$ is simply connected for $i\ge2$, so every based map $S^i\to K_n$ lifts through the covering by the lifting criterion [F6, F7]. The same argument applies to the coverings $\widetilde L\to L$ and $\widetilde K\to K$. [F6, F7, F8, step 1.3]

2.4 Suppose now that the inclusion $i:L\hookrightarrow K$ is a homotopy equivalence. By [F19] $K$ strongly deformation retracts onto $L$, and the time-one map $D_1:K\to L$ of that retraction satisfies $D_1\circ i=\mathrm{id}_L$ and $i\circ D_1\simeq\mathrm{id}_K$, so by [F20] the map $i_*:\pi_r(L,k_0)\to\pi_r(K,k_0)$ is an isomorphism for every $r\ge1$. Exactness of the pair sequences [F9] then gives $\pi_r(K,L)=0$ for every $r\ge1$: for $r\ge2$ both $\pi_r(L)\to\pi_r(K)$ and $\pi_{r-1}(L)\to\pi_{r-1}(K)$ are isomorphisms, so the kernel of $\pi_r(K,L)\to\pi_{r-1}(L)$ and the image of $\pi_r(K)\to\pi_r(K,L)$ vanish, while for $r=1$ the isomorphism $\pi_1(L)\to\pi_1(K)$ makes the pointed set $\pi_1(K,L)$ trivial since $L$ and $K$ are connected. In particular $\pi_n(K,L)=0$ and $\pi_{n+1}(K,L)=0$. [F9, F19, F20, step 1.1]

3.1 By the same lemma applied to $A=\widetilde K_n$, $k=n+1\ge4$ and the lifted $(n+1)$-cells, $\pi_{n+1}(\widetilde K,\widetilde K_n)$ and $H_{n+1}(\widetilde K,\widetilde K_n;\mathbb Z)$ are free abelian on the lifts of the relative $(n+1)$-cells, with $h(c_{\widetilde e})=u_{\widetilde e}=(\chi_{\widetilde e})_*[D^{n+1},S^n]$. [F4, step 1.4, step 2.1]

3.2 The covering projection is a based map of pairs, so by functoriality of boundaries [F10] it induces a morphism between the long exact sequences of $(\widetilde K_n,\widetilde L)$ and $(K_n,L)$ and between those of $(\widetilde K,\widetilde K_n)$ and $(K,K_n)$; these sequences are exact [F9], and the comparison maps in the degrees $n-1,n,n+1$ are isomorphisms by step 2.3, all of those degrees being at least $2$ because $n\ge3$. The five lemma [F11] applied to the window $\pi_n(\widetilde L)\to\pi_n(\widetilde K_n)\to\pi_n(\widetilde K_n,\widetilde L)\to\pi_{n-1}(\widetilde L)\to\pi_{n-1}(\widetilde K_n)$ and to the window $\pi_{n+1}(\widetilde K_n)\to\pi_{n+1}(\widetilde K)\to\pi_{n+1}(\widetilde K,\widetilde K_n)\to\pi_n(\widetilde K_n)\to\pi_n(\widetilde K)$ therefore gives isomorphisms of abelian groups $p_*:\pi_n(\widetilde K_n,\widetilde L)\to\pi_n(K_n,L)$ and $p_*:\pi_{n+1}(\widetilde K,\widetilde K_n)\to\pi_{n+1}(K,K_n)$. [F9, F10, F11, step 2.3]

3.3 If the inclusion is a homotopy equivalence, the triple boundary is an isomorphism. In the triple sequence of [F12] with $X=K$, $B=K_n$ and $A=L$, exactness at $\pi_n(K_n,L)$ makes it surjective, because $\pi_n(K,L)$ is trivial by step 2.4 and the kernel of $\pi_n(K_n,L)\to\pi_n(K,L)$ is therefore all of $\pi_n(K_n,L)$. It is also injective: write $\delta$ for it and $\partial'$ for the pair boundary $\pi_{n+1}(K,K_n)\to\pi_n(K_n)$, so that $\delta=j\circ\partial'$ with $j:\pi_n(K_n)\to\pi_n(K_n,L)$; if $\delta z=0$ then $\partial'z\in\ker j=\operatorname{im}(\pi_n(L)\to\pi_n(K_n))$ by exactness of the pair $(K_n,L)$ at $\pi_n(K_n)$, say $\partial'z=i_*y$, and composing with $\pi_n(K_n)\to\pi_n(K)$, which kills $\operatorname{im}\partial'$ by exactness of the pair $(K,K_n)$ at $\pi_n(K_n)$, gives $i_{K,L\,*}(y)=0$, so that $y=0$ because $\pi_n(L)\to\pi_n(K)$ is an isomorphism and thus $\partial'z=0$; then exactness of the pair $(K,K_n)$ at $\pi_{n+1}(K,K_n)$ writes $z=j'_*w$ for the map $j'_*:\pi_{n+1}(K)\to\pi_{n+1}(K,K_n)$, which by naturality of the pair sequences in the map of pairs $(K,L)\to(K,K_n)$ factors as the composite of $\pi_{n+1}(K)\to\pi_{n+1}(K,L)$ with $\pi_{n+1}(K,L)\to\pi_{n+1}(K,K_n)$ and is therefore zero because $\pi_{n+1}(K,L)=0$ by step 2.4; hence $z=0$ and $\delta$ is injective. [F9, F10, F12, step 2.4]

4.1 For either lifted pair, write $a=\widetilde k_0$ and let $A$ be its simply connected subspace ($\widetilde L$ for $(\widetilde K_n,\widetilde L)$ and $\widetilde K_n$ for $(\widetilde K,\widetilde K_n)$). Define the right action by $$c\cdot g:=\beta_{\gamma_g}\bigl((T_{g^{-1}})_*c\bigr),$$ where $\gamma_g$ is any path in $A$ from $a$ to $T_{g^{-1}}a$ and $\beta_{\gamma_g}$ changes the basepoint back to $a$. Such paths exist, and [F21] makes the result independent of the path. This is a right action: applying $g$ and then $h$ applies $T_{h^{-1}}T_{g^{-1}}=T_{(gh)^{-1}}$ and concatenates the path from $a$ to $h^{-1}a$ with the image under $T_{h^{-1}}$ of the path from $a$ to $g^{-1}a$, a path from $a$ to $(gh)^{-1}a$; path-composition for $\beta$ gives $(c\cdot g)\cdot h=c\cdot(gh)$. The class construction in [F4] moves the marked boundary value through $A$; applying $T_{g^{-1}}$ transports that move, and any path used to define the translated cell class differs from the transported path by a loop in simply connected $A$, so [F21] identifies the based classes. Thus $c_{\widetilde e}\cdot g$ is the basis class of the lift $T_{g^{-1}}\widetilde e$. The corresponding change-of-basepoint shell lies in $A$, so relative Hurewicz sends this class to $u_{T_{g^{-1}}\widetilde e}$. As the lifts form a free $\pi$-orbit [F2], each homotopy and homology basis set is a free $\pi$-orbit. [F2, F4, F21, step 2.2, step 3.1]

4.2 The relative Hurewicz homomorphisms of steps 2.2 and 3.1 are isomorphisms because they carry a free basis to a free basis, and for the triple $\widetilde L\subset\widetilde K_n\subset\widetilde K$ the square with upper row $\delta:\pi_{n+1}(\widetilde K,\widetilde K_n)\to\pi_n(\widetilde K_n,\widetilde L)$ and lower row $\partial_*:H_{n+1}(\widetilde K,\widetilde K_n)\to H_n(\widetilde K_n,\widetilde L)$, joined vertically by $h$, commutes: the triple boundary $\delta$ is the boundary of the pair $(\widetilde K,\widetilde K_n)$ followed by the relative map of $(\widetilde K_n,\widetilde L)$ [F12], on disk models these are restriction to the boundary sphere followed by the induced map of pairs [F10], and $h$ is natural in based maps of pairs with $h([f])=f_*[D^m,S^{m-1}]$ [F13], so for a disk model $f:(D^{n+1},S^n)\to(\widetilde K,\widetilde K_n)$ one has $h(\delta[f])=h([f|_{S^n}])=(f|_{S^n})_*[S^n]=\partial_*(f_*[D^{n+1},S^n])=\partial_*h([f])$, the middle equality because $[D^{n+1},S^n]$ has homology boundary the positive sphere generator. [F10, F12, F13, step 2.2, step 3.1]

5.1 Choose one oriented lift $\widetilde e_e$ for each relative cell $e$ and write $c_e:=c_{\widetilde e_e}$. By step 4.1, $c_e\cdot g$ is the basis class of $T_{g^{-1}}\widetilde e_e$; as $g$ varies these are exactly the lifts of $e$, once each. Therefore $\pi_n(\widetilde K_n,\widetilde L)=\bigoplus_e c_eR$ and $\pi_{n+1}(\widetilde K,\widetilde K_n)=\bigoplus_{e'} c_{e'}R$ are finite free right $R$-modules on the chosen oriented characteristic cells, and the same holds for $H_n(\widetilde K_n,\widetilde L;\mathbb Z)$ and $H_{n+1}(\widetilde K,\widetilde K_n;\mathbb Z)$ with the classes $u_e$. [F3, step 4.1]

5.2 With $F_r:=\widetilde L\cup\widetilde K^r$ one has $F_{n-1}=\widetilde L$, $F_n=\widetilde K_n$ and $F_{n+1}=\widetilde K$. Apply [F14] to **integral** homology of the universal-cover pair. Its differential $d_{n+1}$ is precisely the composite in the square of step 4.2: the triple boundary to $H_n(F_n,\widetilde L;\mathbb Z)$ followed by the map to $H_n(F_n,F_{n-1};\mathbb Z)=H_n(\widetilde K_n,\widetilde L;\mathbb Z)$. Deck transformations commute with the integral connecting maps, so this differential is right $R$-linear on the free abelian groups indexed by lifted cells. Thus its matrix in one chosen lift per cell is exactly the matrix of $\partial_*$; no second change of coefficients to $R$ is made. [F3, F14, step 4.2]

6.1 Define the right action of $R$ on $\pi_n(K_n,L)$ and on $\pi_{n+1}(K,K_n)$ by $c\cdot g:=p_*(p_*^{-1}(c)\cdot g)$; this is a well-defined right action because $p_*$ is an isomorphism by step 3.2 and the cover-side action is the right action established in step 4.1. Thus $p_*$ is an isomorphism of right $R$-modules carrying the basis $\{c_e\}$ of step 5.1 to a basis of the base-side module. Hence $\pi_n(K_n,L)$ and $\pi_{n+1}(K,K_n)$ are finite free right $R$-modules on the chosen oriented characteristic cells: replacing the chosen lift $\widetilde e_e$ by $T_h\widetilde e_e$ replaces $c_e$ by $c_e\cdot h^{-1}$, and reversing the orientation replaces $c_e$ by $-c_e$, so the basis is determined only up to these factors $\pm g$, and such a change alters a representing matrix only by the corresponding change of basis. [F3, step 3.2, step 4.1, step 5.1]

7.1 The isomorphism $p_*$ of step 3.2 carries the chosen basis of the cover to the chosen basis of the base, and by step 6.1 the boundary of the statement is the image under $p_*$ of the triple boundary $\delta$ of step 4.2; hence the matrix of $\partial:\pi_{n+1}(K,K_n)\to\pi_n(K_n,L)$ in the chosen bases is exactly the matrix of the relative cellular differential $d_{n+1}$ computed in step 5.2. [step 3.2, step 4.2, step 5.2, step 6.1]

8.1 By steps 7.1 and 3.3 the triple boundary is represented in the chosen bases by $d_{n+1}$ and is an isomorphism whenever the inclusion is a homotopy equivalence. Since $R=\mathbb Z[\pi]$, [F22] forces its finite free source and target ranks to be equal, so the representing matrix is square; the matrices of the isomorphism and its inverse are mutually inverse by the coordinate description of right-linear maps. In the degenerate case in which the pair has no relative cells both modules are the zero module and the empty matrix is invertible. ∎ [F22, step 3.3, step 7.1]
