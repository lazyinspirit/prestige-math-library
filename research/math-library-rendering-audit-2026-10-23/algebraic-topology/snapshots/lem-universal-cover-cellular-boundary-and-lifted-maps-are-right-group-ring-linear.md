---
id: lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear
kind: lemma
title: "Universal-cover boundaries, maps and homotopies respect the right group-ring action"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-based-cellular-chain-complex-of-a-universal-cover, thm-homotopy-lifting-for-covering-maps, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, thm-cellular-approximation-for-maps-of-cw-pairs, lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes, def-singular-chain-complex-of-a-pair, def-relative-homology-connecting-homomorphism-on-cycles, def-prism-operator-for-a-homotopy, thm-singular-chain-homotopy-formula, thm-uniqueness-of-lifts-from-a-connected-space, def-cellular-boundary-from-three-consecutive-skeleta, def-induced-singular-chain-map, def-singular-boundary-operator, def-relative-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, §2.2, pp.30–31"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.2, pp.30–31"
    - title: "Cohen, §§19, 22, pp.62–65, 72–75"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§19, 22, pp.62–65, 72–75"
---
## Statement

Let $X,Y$ be connected finite CW complexes, $x\in X$, $y\in Y$, $\pi=\pi_1(X,x)$, $\pi'=\pi_1(Y,y)$, with chosen universal covers $p:\widetilde X\to X$ and $q:\widetilde Y\to Y$ and the based cellular chains of [[def-based-cellular-chain-complex-of-a-universal-cover]], so that $C_n(\widetilde X)$ is a finite free right $\mathbb Z[\pi]$-module and $C_n(\widetilde Y)$ a finite free right $\mathbb Z[\pi']$-module.

1. **Boundaries are right-linear.** Each cellular boundary $d_n:C_n(\widetilde X)\to C_{n-1}(\widetilde X)$ satisfies $d_n(c\cdot g)=d_n(c)\cdot g$ for all $c\in C_n(\widetilde X)$ and $g\in\pi$. Consequently every deck transformation $T_h$ is an automorphism of the underlying cellular chain complex of abelian groups. It is semilinear for conjugation: $T_h(c\cdot g)=T_h(c)\cdot(hgh^{-1})$. It need not be right $\mathbb Z[\pi]$-linear or preserve the selected module basis.
2. **Lifted cellular maps are right-linear chain maps.** Let $f:(X,x)\to(Y,y)$ be a based cellular map with $f_*:\pi\to\pi'$ an isomorphism. Choose points $\widetilde x,\widetilde y$ over the basepoints and the unique compatible lift $\widetilde f$ with $\widetilde f(\widetilde x)=\widetilde y$. Transport the right $\mathbb Z[\pi]$-module structure of $C_*(\widetilde X)$ along $\mathbb Z[f_*]:\mathbb Z[\pi]\to\mathbb Z[\pi']$. Then $\widetilde f$ induces a right $\mathbb Z[\pi']$-linear chain map. A different lift is linear for the correspondingly conjugated coefficient identification, rather than necessarily for this fixed one.
3. **Lifted cellular homotopies are right-linear chain homotopies with one coefficient transport.** Let $f,g:(X,x)\to(Y,y)$ be based cellular maps, with $f_*$ an isomorphism, and let $H:X\times I\to Y$ be a cellular homotopy from $f$ to $g$ which may move $x$ during the homotopy. Choose $\widetilde f$ as in clause 2 and any lift $\widetilde g$ of $g$. Then the unique lift $\widetilde H$ of $H\circ(p\times\mathrm{id})$ beginning at $\widetilde f$ ends at $T'_\beta\circ\widetilde g$ for a unique $\beta\in\pi'$, and there are right $\mathbb Z[\pi']$-linear maps $s_n:C_n(\widetilde X)\to C_{n+1}(\widetilde Y)$, with the source transported by $f_*$, satisfying
$$d_{n+1}s_n+s_{n-1}d_n=T'_\beta\circ C_n(\widetilde g)-C_n(\widetilde f)$$
for every $n$. The composite $T'_\beta C_*(\widetilde g)$ is right-linear for this transport, although $T'_\beta$ alone is generally not right-linear when $\pi'$ is nonabelian. If $H$ fixes $x$ and $\widetilde g(\widetilde x)=\widetilde y$, then $\beta=1$.

All three clauses are choice-free for finite CW complexes.

## Facts & Assumptions

**Given:** Connected finite CW complexes $X,Y$ with basepoints and chosen universal covers, $\pi=\pi_1(X,x)$, $\pi'=\pi_1(Y,y)$, and the based cellular chains of [[def-based-cellular-chain-complex-of-a-universal-cover]].

[F1] $C_n(\widetilde X)=H_n(\widetilde X^n,\widetilde X^{n-1};\mathbb Z)$ is free abelian on the lifted $n$-cells, the right action is $c\cdot g=T_g^{-1}c$ with $T$ the no-reversal deck isomorphism, and each $T_g$ is a homeomorphism carrying lifted cells to lifted cells ([[def-based-cellular-chain-complex-of-a-universal-cover]]).

[F2] The cellular boundary $d_n:C_n\to C_{n-1}$ is the connecting homomorphism $H_n(X^n,X^{n-1})\to H_{n-1}(X^{n-1})$ of the pair $(X^n,X^{n-1})$ followed by the quotient map to $H_{n-1}(X^{n-1},X^{n-2})$ ([[def-cellular-boundary-from-three-consecutive-skeleta]]).

[F3] For a continuous map of pairs the induced map on singular chains commutes with the boundary, $f_\#\partial=\partial f_\#$ ([[def-induced-singular-chain-map]], [[def-singular-boundary-operator]]).

[F4] A relative $n$-cycle is an ordinary chain $c$ with $\partial c\in C_{n-1}(A)$, and the connecting homomorphism of the pair sequence is $\delta[z]=[\partial z]$ on such cycles; relative homology is $H_n(X,A;G)=\ker\bar\partial_n/\operatorname{im}\bar\partial_{n+1}$ ([[def-relative-singular-homology]], [[def-relative-homology-connecting-homomorphism-on-cycles]], [[def-singular-chain-complex-of-a-pair]]).

[F5] If $H:K\times I\to Z$ is a homotopy from $u$ to $v$, its prism operator $P_H$ satisfies $v_\#-u_\#=\partial P_H+P_H\partial$ ([[def-prism-operator-for-a-homotopy]], [[thm-singular-chain-homotopy-formula]]).

[F6] Covering homotopies lift uniquely once the lift at time zero is prescribed, and two lifts of a map from a connected space which agree at one point agree everywhere ([[thm-homotopy-lifting-for-covering-maps]], [[thm-uniqueness-of-lifts-from-a-connected-space]]).

[F7] For a based map $f:(X,x)\to(Y,y)$, choose points $\widetilde x,\widetilde y$ over the basepoints. Its lift $\widetilde f$ with $\widetilde f(\widetilde x)=\widetilde y$ satisfies $\widetilde fT_g=T'_{f_*(g)}\widetilde f$ under the no-reversal deck identifications. A different lift $T'_\beta\widetilde f$ satisfies the same formula with $f_*$ conjugated by $\beta$ ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] and uniqueness of lifts).

[F8] A continuous map of finite CW complexes is homotopic to a cellular map, and homotopic cellular maps of finite CW pairs admit a cellular homotopy ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Let $z\in C_n(\widetilde X)=H_n(\widetilde X^n,\widetilde X^{n-1})$ be represented by a relative cycle $c\in S_n(\widetilde X^n)$ with $\partial c\in S_{n-1}(\widetilde X^{n-1})$, and let $g\in\pi$. By [F4] the connecting homomorphism satisfies $\delta[c]=[\partial c]$ and is natural for the map of pairs $T_{g^{-1}}:(\widetilde X^n,\widetilde X^{n-1})\to(\widetilde X^n,\widetilde X^{n-1})$, so $\delta(T_{g^{-1}})_*[c]=(T_{g^{-1}})_*\delta[c]$, using [F3]; the quotient map $H_{n-1}(\widetilde X^{n-1})\to H_{n-1}(\widetilde X^{n-1},\widetilde X^{n-2})$ is likewise natural because it is induced by the inclusion of chain complexes. Hence with [F1] and [F2], $d_n(c\cdot g)=d_n(c)\cdot g$. [F1, F2, F3, F4]

1.2 Let $H:X\times I\to Y$ be a cellular homotopy from $f$ to $g$, and let $\widetilde H:\widetilde X\times I\to\widetilde Y$ be the lift of $H\circ(p\times\mathrm{id})$ with $\widetilde H(-,0)=\widetilde f$, which exists and is unique by [F6] since $\widetilde X\times I$ is connected. Its end $\widetilde H(-,1)$ is a lift of $g\circ p$, so it equals $T'_\beta\circ\widetilde g$ for a unique $\beta\in\pi'$ by [F6] and the free transitive deck action. [F1, F6]

2.1 Applying step 1.1 with $g=h^{-1}$ gives $d_n(T_h c)=T_h d_n(c)$. Thus $T_h$ is an automorphism of the underlying integral cellular chain complex, with inverse $T_{h^{-1}}$. The right-action convention gives $T_h(c\cdot g)=T_hT_{g^{-1}}c=T_{hg^{-1}}c=T_{(hgh^{-1})^{-1}}T_hc=T_h(c)\cdot(hgh^{-1})$. This is semilinearity, not right-linearity for the fixed coefficients; the selected finite right-module basis can also change under $T_h$. [F1, step 1.1]

2.2 Let $\widetilde f:\widetilde X\to\widetilde Y$ be a lift of the cellular $f$. Since $f$ is cellular, $\widetilde f(\widetilde X^n)\subseteq\widetilde Y^n$ for every $n$: because $f(X^n)\subseteq Y^n$ and $q\widetilde f=fp$; an individual cell may map across several target cells or collapse. Hence $\widetilde f_\#$ carries $S_n(\widetilde X^n)$ into $S_n(\widetilde Y^n)$ and $S_n(\widetilde X^{n-1})$ into $S_n(\widetilde Y^{n-1})$, so it induces maps $C_n(\widetilde f):H_n(\widetilde X^n,\widetilde X^{n-1})\to H_n(\widetilde Y^n,\widetilde Y^{n-1})$ on relative homology by naturality of the connecting homomorphisms and quotient maps as in step 1.1. [F1, F3, F4, step 1.1]

2.3 For $\sigma\in S_n(\widetilde X^m)$ with $m\le n$ one has $\widetilde H(\sigma\times I)\subseteq\widetilde Y^{m+1}$, because $H$ is cellular and $X^m\times I\subseteq(X\times I)^{m+1}$; hence the prism operator $P_{\widetilde H}$ of [F5] maps $S_n(\widetilde X^m)$ into $S_{n+1}(\widetilde Y^{m+1})$. In particular $P_{\widetilde H}$ maps $S_n(\widetilde X^n)$ into $S_{n+1}(\widetilde Y^{n+1})$ and $S_n(\widetilde X^{n-1})$ into $S_{n+1}(\widetilde Y^n)$, so it induces $s_n:C_n(\widetilde X)\to C_{n+1}(\widetilde Y)$ by $s_n[z]:=[P_{\widetilde H}z]$. [F5, step 1.2]

3.1 The induced maps of step 2.2 commute with the differentials: for a relative cycle $c$ as in step 1.1, $\partial\widetilde f_\#c=\widetilde f_\#\partial c$ by [F3], and naturality of $\delta$ and of the quotient map gives $d_n^{\widetilde Y}C_n(\widetilde f)[c]=C_{n-1}(\widetilde f)d_n^{\widetilde X}[c]$. [F3, F4, step 2.2]

3.2 For $g\in\pi$ the map $h\mapsto f_*(h)$ is a group isomorphism and $\widetilde f\circ T_g=T'_{f_*(g)}\circ\widetilde f$ by [F7], so on chains $C_n(\widetilde f)(c\cdot g)=\widetilde f_\#T_{g^{-1}}c=T'_{f_*(g)^{-1}}\widetilde f_\#c=C_n(\widetilde f)(c)\cdot f_*(g)$; thus $C_*(\widetilde f)$ is right $\mathbb Z[\pi']$-linear for the transported source structure. [F1, F7, step 2.2]

3.3 The class in step 2.3 is well defined: if $z$ is replaced by $z+\partial w$ with $w\in S_{n+1}(\widetilde X^n)$, then by [F5] $P_{\widetilde H}\partial w=(T'_\beta\circ\widetilde g)_\# w-\widetilde f_\# w-\partial P_{\widetilde H}w$, where the first two terms lie in $S_{n+1}(\widetilde Y^n)$ (step 2.2) and the last is a boundary in the relative complex $(\widetilde Y^{n+1},\widetilde Y^n)$; adding a chain of $S_n(\widetilde X^{n-1})$ changes $P_{\widetilde H}z$ by an element of $S_{n+1}(\widetilde Y^n)$. [F3, F5, step 2.2, step 2.3]

4.1 Applying the identity of [F5] to $z$ and reducing modulo the subcomplexes defining the relative groups gives $d^{\widetilde Y}_{n+1}s_n[z]+s_{n-1}d^{\widetilde X}_n[z]=(T'_\beta\circ\widetilde g)_*[z]-\widetilde f_*[z]$ in $C_n(\widetilde Y)$, which is the displayed chain-homotopy identity; equivalently $C_*(\widetilde f)\simeq T'_\beta\circ C_*(\widetilde g)$. [F2, F4, F5, step 2.3, step 3.3]

4.2 The operators of step 2.3 are right-linear: $\widetilde H\circ(T_h\times\mathrm{id})=T'_{f_*(h)}\circ\widetilde H$ for $h\in\pi$ by [F6] and [F7], since both sides are lifts agreeing at time zero, so $s_n(c\cdot h)=s_n(c)\cdot f_*(h)$ exactly as in step 3.2. At time one this also proves that the **composite** $T'_\beta C_*(\widetilde g)$ is right-linear for $f_*$; it does not assert that $T'_\beta$ is right-linear for the unmodified $g_*$-module. If $H$ fixes $x$ and both endpoint lifts send $\widetilde x$ to $\widetilde y$, uniqueness at $\widetilde x$ gives $\beta=1$. [F1, F5, F6, F7, step 1.2, step 2.3, step 3.2]

5.1 Clause 1 is steps 1.1 and 2.1, clause 2 is steps 2.2, 3.1 and 3.2, and clause 3 is steps 1.2, 2.3, 3.3, 4.1 and 4.2; every step used only finite CW approximation [F8] where cellular maps were assumed, and no step used a choice principle. [F8, step 2.1, step 3.2, step 4.2] ∎
