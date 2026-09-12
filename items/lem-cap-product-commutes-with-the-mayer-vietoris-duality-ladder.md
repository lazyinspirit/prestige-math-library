---
id: "lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder"
kind: "lemma"
title: "Cap product and the Mayer–Vietoris duality ladder"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cap-duality-map-for-an-oriented-manifold","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","lem-compatible-local-orientation-classes-exist-over-compact-subsets","thm-excision-for-singular-cohomology","thm-excision-for-singular-homology","prop-cap-product-naturality-and-projection-formula","def-relative-cup-product","thm-long-exact-sequence-in-homology","thm-mayer-vietoris-sequence-in-singular-homology","thm-cover-small-inclusion-is-a-chain-homotopy-equivalence","thm-cap-product-boundary-identity","thm-locally-compact-hausdorff-basics"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma 3.36 and its complete proof,
        pp.246–247
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: May, A Concise Course in Algebraic Topology, Chapter 20 §5, Step 2
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M=U\cup V$ be an $R$-oriented boundaryless $n$-manifold covered by open subsets, with $R$ commutative unital. Extension of compact supports gives an exact sequence
$$\cdots\longrightarrow H_c^p(U\cap V;R)\xrightarrow{(e_U,-e_V)}H_c^p(U;R)\oplus H_c^p(V;R)\xrightarrow{e_U+e_V}H_c^p(M;R)\xrightarrow{\delta}H_c^{p+1}(U\cap V;R)\longrightarrow\cdots.$$
Under cap-duality maps, its first two arrows commute with the ordinary homology Mayer–Vietoris arrows $(i_*,-i_*)$ and sum. For its connecting arrow,
$$\partial D_M=(-1)^{p+1}D_{U\cap V}\delta.$$
Thus replacing the homology connecting arrow from $H_{n-p}(M;R)$ by $(-1)^{p+1}\partial$ makes an exactly commuting ladder with exact rows. This asserts compatibility, without assuming any duality map is an isomorphism. The filtered-colimit exactness used here and the entire argument require no AC.

## Facts & Assumptions

[F1] [[def-cap-duality-map-for-an-oriented-manifold]] defines cap duality using the support classes of [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]], which are uniquely determined by their point restrictions.

[F2] [[thm-excision-for-singular-cohomology]] and [[thm-excision-for-singular-homology]] identify relative groups supported in a compact subset of an open subspace with their ambient versions.

[F3] [[prop-cap-product-naturality-and-projection-formula]] proves the actual chain identity $i_*(i^*a\cap c)=a\cap i_*c$.

[F4] [[def-relative-cup-product]] proves the quotient-cochain comparison for two open subspaces, by explicit small-chain homotopies; only that comparison is used here.

[F5] [[thm-long-exact-sequence-in-homology]] supplies the exact sequence of a short exact sequence of complexes, including the connecting map obtained by lifting and taking a differential.

[F6] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] constructs the support colimit and proves that a class is zero precisely when it becomes zero at a larger compact support. [[thm-locally-compact-hausdorff-basics]] supplies relatively compact open neighborhoods with closure inside a specified open set.

[F7] [[thm-mayer-vietoris-sequence-in-singular-homology]] gives the homology sequence with sum as second map. Its chain convention has first map $(c,-c)$ and connecting map $[z_U+z_V]\mapsto[\partial z_U]$.

[F8] [[def-relative-cup-product]] explicitly constructs the least-subdivision retraction and homotopy from image-preserving barycentric subdivision and prism operators. Hence both operators preserve chains in every subspace and the homotopy is relative to chains already small for the cover.

[F9] [[thm-cap-product-boundary-identity]] gives $\partial(a\cap c)=(-1)^p(a\cap\partial c-\delta a\cap c)$ for a degree-$p$ cochain, including zero output degrees.

## Proof

**Given:** $M,U,V,n,R$ and the supplied orientation. All cochains below have coefficients in $R$, with positive coboundary, and cap is cohomology first. Orient open subspaces by restriction.

1.1 If $K\subset U$ is compact, remove the closed set $M\setminus U\subset M\setminus K$ in [F2]. This gives inverse isomorphisms for the inclusion $(U,U\setminus K)\to(M,M\setminus K)$, since $M\setminus K$ is open. Define extension on $H^p(U,U\setminus K)$ as the inverse of cohomology restriction. Inclusions of supports commute with restriction at the cochain level, so their inverses commute too, giving a map $e:H_c^p(U)\to H_c^p(M)$ by [F6]. A relative orientation class in $U$ maps to the ambient class: its local restrictions agree with the given orientation, and [F1] gives uniqueness. For an ambient relative cocycle $a$, [F3] consequently gives $D_M e[a|_U]=i_*D_U[a|_U]$. This proves open naturality, including independence of the excision inverse. [F1, F2, F3, F6, given]

1.2 For compact $K\subset U,L\subset V$, put $A=M\setminus K$, $B=M\setminus L$, and let $Q^*$ be the cochains vanishing on $C_*(A)+C_*(B)$. There is a short exact sequence of cochain complexes $$0\to Q^*\xrightarrow{q\mapsto(q,-q)}C^*(M,A)\oplus C^*(M,B)\xrightarrow{(a,b)\mapsto a+b}C^*(M,A\cap B)\to0.$$ The kernel is exactly the pairs $(q,-q)$ vanishing on both subcomplexes. For surjectivity, given a cochain $\varphi$ in the last term, define $\varphi_A$ to be zero on every simplex wholly in $A$ and equal to $\varphi$ on every other simplex; put $\varphi_B=\varphi-\varphi_A$. Then $\varphi_A$ vanishes on $A$. On a simplex in $B$ but not wholly in $A$, $\varphi_B=0$ by construction, and on a simplex in $A\cap B$ both original values are zero. Thus $\varphi_B$ vanishes on $B$. These are termwise lifts, not asserted cochain maps. All displayed arrows commute with coboundaries. [F4, given]

2.1 Since $A,B$ are open, [F4] identifies $H^*(Q)$ with $H^*(M,A\cup B)=H^*(M,M\setminus(K\cap L))$. Apply [F5] to the short exact sequence of step 1.2, reindexing cochain degree $p$ as chain degree $-p$. This yields a long exact cohomology sequence with maps $(e,-e)$, sum, and connector represented, for a cocycle $\varphi=\varphi_A+\varphi_B$, by $\delta\varphi_A=-\delta\varphi_B$ in $Q$. All comparisons are induced by quotient maps, so they commute with enlargement of $K,L$; the connecting maps do too, since the same lifts remain lifts after enlargement and differential commutes with inclusion. [F4, F5, step 1.2]

3.1 Take the directed system of pairs $(K,L)$ ordered by inclusion. Directed colimits of these module sequences are exact for the following explicit reason. A class in a colimit kernel has a representative $y$ at one stage. Its image becomes zero at a larger stage by the common-stage criterion [F6]. Exactness at that stage gives a preimage $x$, whose colimit class maps to the class of $y$. Conversely every such image is in the kernel because consecutive maps are zero at every stage. This proof applies at every term of the long sequence and needs only a preimage for the one class under consideration, not a family of preimage choices. The middle colimit is the direct sum of the two individual colimits: a pair of representatives can be moved to a common pair $(K,L)$, and equality is tested at a common larger pair. [F6, step 2.1]

4.1 The intersections $K\cap L$ are cofinal among compact subsets of $U\cap V$: for a compact $T$ there take $K=L=T$. The unions $K\cup L$ are cofinal among compact subsets of $M$. Indeed, take all relatively compact open neighborhoods with closure inside $U$ or inside $V$, as supplied by [F6]. This is an open cover of $M$ defined without selecting one neighborhood per point. Finitely many cover a given compact $T$; split their closures into those contained in $U$ and those contained in $V$, assigning a closure contained in both to either member. Their finite unions give compact $K\subset U,L\subset V$ containing $T$ in their union. For the two separate factors every compact support occurs in a pair by taking the other member empty. These cofinality statements, the enlargement maps, and step 1.1 identify the colimit of step 3.1 with the displayed compact-support sequence. In particular the sequence is exact. [F6, step 1.1, step 3.1]

5.1 By step 1.1 the first two squares commute with vertical maps $D_{U\cap V}$, $D_U\oplus D_V$, $D_M$, since their signs are $(+,-)$ and sum on both rows. To compute the connecting square, keep $K,L$ fixed and take an $n$-chain $c$ representing $[M]_{K\cup L}$, so $\partial c$ lies outside $K\cup L$. The three open sets $U\setminus L,U\cap V,V\setminus K$ cover $M$. Apply [F8]'s small-chain retraction to this cover. It preserves the complement of $K\cup L$, and its homotopy also preserves that complement, so the resulting chain represents the same relative class. Decompose it as $c=c_1+c_2+c_3$, supported respectively in the three open sets. There are only finitely many simplices, and each is assigned to one containing open set. Discarding $c_1,c_3$ outside $K\cap L$ shows that $c_2$ represents $[M]_{K\cap L}$ under excision, while discarding $c_3$ shows that $c_1+c_2$ represents $[M]_K$. In particular $\partial(c_1+c_2)$ lies in $U\setminus K$: it is a chain in $U$ and in $M\setminus K$, whose free simplex subgroups intersect in the chains of their intersection. [F1, F2, F7, F8, step 1.1, step 4.1]

6.1 Let $\varphi$ be a degree-$p$ cocycle vanishing outside $K\cup L$, with $p\ge0$, and choose the two lifts of step 1.2. The image $D_{U\cap V}\delta[\varphi]$ is represented by $\delta\varphi_A\cap c_2$. To justify use of this $Q$ representative, observe that $\partial c_2=\partial c-\partial c_1-\partial c_3$ is a sum of chains in $A$ and $B$: the first summand is outside both supports, the second lies in $B$, and the third in $A$. By [F4], the class of $\delta\varphi_A$ in $H^{p+1}(Q)$ is represented by an actual relative cocycle $\psi$ vanishing on $A\cup B$, and $\delta\varphi_A-\psi=\delta b$ for a degree-$p$ cochain $b\in Q$. Since $b$ vanishes on each of $A,B$, its cap with each summand of $\partial c_2$ is zero. Thus [F9] gives $(\delta b)\cap c_2=-(-1)^p\partial(b\cap c_2)$, a boundary in $U\cap V$. The cap class computed with $\psi$ is therefore exactly the one computed with $\delta\varphi_A$. Applying [F9] within $U\cap V$ gives $$[\delta\varphi_A\cap c_2]=[\varphi_A\cap\partial c_2],$$ since their difference is $-(-1)^p\partial(\varphi_A\cap c_2)$. [F1, F4, F8, F9, step 1.2, step 2.1, step 5.1]

7.1 The other route begins with $\varphi\cap c$, an absolute cycle by [F1]. Split it into the $U$ chain $\varphi\cap c_1$ and the $V$ chain $\varphi\cap(c_2+c_3)$. The connector of [F7] therefore gives $[\partial(\varphi\cap c_1)]$. Since $\delta\varphi=0$, [F9] and the support vanishings give $$\partial(\varphi\cap c_1)=(-1)^p\varphi\cap\partial c_1=(-1)^p\varphi_A\cap\partial c_1=(-1)^{p+1}\varphi_A\cap\partial c_2.$$ The second equality uses that $\varphi_B$ vanishes on $B$ and $c_1$ lies in $U\setminus L\subset B$. The last equality uses $\partial(c_1+c_2)\in C_*(U\setminus K)$ from step 5.1, annihilated by $\varphi_A$. Comparing with step 6.1 gives the claimed sign. It persists on the support colimit because every class has such a representative. [F1, F7, F9, step 5.1, step 6.1]

8.1 Multiplying each homology connector by $(-1)^{p+1}$ preserves its kernel and image, hence exactness, and step 7.1 makes the last square commute. For $p<0$ its source is zero; for $p\ge n$ the connector target has negative homology degree and the cap formulas are zero there. At $p=0$ the sign is minus and the positive coboundary convention has already been used; at $p=n-1$ the target is ordinary zero-dimensional homology. If a covering open set or their intersection is empty, the corresponding groups are zero and the same exact sequence reduces to the identity/sum sequences. For a point, the cover consists of empty sets and points and degree-zero cap is vertex evaluation. The zero ring and zero representatives give zero throughout. Degenerate simplices remain free generators and all containments and formulas apply to them unchanged. Subdivision uses specified least depths; compactness and individual representatives involve only finite choices. No AC or categorical AB5 implication is used. [F1, F6, F8, F9, step 4.1, step 5.1, step 7.1] ∎
