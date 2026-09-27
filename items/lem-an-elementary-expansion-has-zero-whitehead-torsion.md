---
id: lem-an-elementary-expansion-has-zero-whitehead-torsion
kind: lemma
title: "An elementary CW expansion has zero Whitehead torsion"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-expansion-and-collapse-of-finite-cw-complexes, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, thm-composition-and-sum-formulas-for-whitehead-torsion, def-based-cellular-chain-complex-of-a-universal-cover, def-mapping-cone-of-a-chain-map, lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone, def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-contraction-torsion-is-independent-of-the-contracting-homotopy, lem-basis-change-and-direct-sum-formulas-for-chain-torsion, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, def-stable-general-linear-group-and-elementary-subgroup-of-a-ring, def-homotopy-equivalence, lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemma 2.18(1), p.35"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 2.18(1), p.35"
    - title: "Davis–Kirk, Theorem 11.31(2), p.344"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 11.31(2), p.344"
    - title: "Cohen, §22, p.72"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§22, p.72"
---
## Statement

Let $j:X\hookrightarrow Y$ be an elementary expansion of finite CW complexes. Then its Whitehead torsion vanishes,
$$\tau(j)=0\quad\text{in }\mathrm{Wh}(\pi_1Y),$$
componentwise. In suitable oriented lifts the only nonzero relative cellular boundary of the pair $(Y,X)$ is
$$R\xrightarrow{\ \pm g\ }R$$
in two consecutive degrees, where $R=\mathbb Z[\pi_1Y]$ and $g\in\pi_1Y$; this is a contractible two-term complex, and $[\pm g]=0$ in $\mathrm{Wh}(\pi_1Y)$.

## Facts & Assumptions

**Given:** An elementary expansion $j:X\hookrightarrow Y$ of finite CW complexes of dimension $n\ge1$, with new cells $e^{n-1}$ and $e^{n}$, and, in the connected case, $\pi=\pi_1(Y,y)$ and $R=\mathbb Z[\pi]$.

[F1] In an elementary expansion the new $(n-1)$-cell is a free face of the new $n$-cell: the characteristic map $\varphi$ restricts to a characteristic map $Q^{n-1}\to\overline{e^{n-1}}$, homeomorphic on the open cell, and all other boundary values of $\varphi$ lie in the previously constructed complex $X$; moreover $Y=X\cup e^{n-1}\cup e^n$ with $X$ a subcomplex, the pair deformation retracts onto $X$, and the operation is taken componentwise and fixes the retained subcomplex ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]).

[F2] For a finite CW pair the relative cellular chains over the universal cover are the finite free right $R$-modules on the chosen oriented lifts of the relative cells, the lifts of one cell are the cells $T_g\widetilde e$, the right action is $c\cdot g=T_g^{-1}c$, and the cellular boundary is right $R$-linear; for a disconnected finite $X$ the constructions are applied componentwise and assembled by direct sums ([[def-based-cellular-chain-complex-of-a-universal-cover]], [[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]]).

[F3] For a homotopy equivalence $f$ of finite CW complexes, $\tau(f)$ is the image in $\mathrm{Wh}(\pi_1Y)$ of the contraction torsion of the algebraic mapping cone $\operatorname{Cone}(C_*(\widetilde f))$ of the lifted cellular chain map, with the target summands recorded first in each degree, and for disconnected $Y$ the class is the tuple of the classes of the componentwise restrictions ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]]).

[F4] The algebraic mapping cone of a chain map $f:C_\bullet\to D_\bullet$ has $\operatorname{Cone}(f)_n=D_n\oplus C_{n-1}$ and differential $d(y,x)=(d^D_ny+f_{n-1}x,-d^C_{n-1}x)$ ([[def-mapping-cone-of-a-chain-map]]).

[F5] If $f:X\to Y$ is a homotopy equivalence of connected finite CW complexes and $\widetilde f$ is a lift of a cellular approximation, then $C_*(\widetilde f)$ is a chain homotopy equivalence of right $\mathbb Z[\pi_1(Y,y)]$-complexes and $\operatorname{Cone}(C_*(\widetilde f))$ is a bounded based free right $\mathbb Z[\pi_1(Y,y)]$-complex which is contractible ([[lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone]]).

[F6] For a bounded finite based free right $R$-complex $C$ with $\#B_{\mathrm{odd}}=\#B_{\mathrm{even}}$ and a chain contraction $s$, the contraction torsion is the class $\tau_s(C)=[A_s]\in\tilde K_1(R)$ of the matrix of $(d+s)_{\mathrm{odd}}$ in the degree-ordered displayed bases, and it does not depend on the contraction ([[def-finite-based-free-chain-complex-and-its-contraction-torsion]], [[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]]).

[F7] For bounded finite based free right $R$-complexes, torsion is additive over direct sums with concatenated bases; replacing the displayed degree-$n$ basis by bases whose coordinate columns are the columns of an invertible matrix $P_n$ changes the torsion by $\sum_n(-1)^{n+1}[P_n]$, so a reordering of a displayed basis changes torsion in $\tilde K_1(R)$ by a sum of classes that are $0$ or $[-1]=0$; and for a degreewise based exact sequence $0\to C_\bullet\to D_\bullet\to E_\bullet\to 0$ of contractible such complexes, $\tau(D)=\tau(C)+\tau(E)$ ([[lem-basis-change-and-direct-sum-formulas-for-chain-torsion]]).

[F8] $K_1(R)=\mathrm{GL}(R)/\mathrm E(R)$ is written additively, $\tilde K_1(R)=K_1(R)/\langle[-1]\rangle$, and for a discrete group $\pi$ one has $\mathrm{Wh}(\pi)=K_1(\mathbb Z[\pi])/\langle[\pm g]:g\in\pi\rangle=\tilde K_1(\mathbb Z[\pi])/\langle[g]\rangle$, where $[\pm g]$ is the class of the $1\times1$ matrix $\pm g$; in particular $[\pm g]$ maps to $0$ in $\mathrm{Wh}(\pi)$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F9] An upper unitriangular matrix in specified ordered coordinates of $R^n$ lies in $\mathrm E_n(R)$ in those coordinates. After an arbitrary change of basis its matrix lies in the stable subgroup $\mathrm E(R)$ by normality, possibly only after stabilization at the elementary-matrix level. In either case its class is $0$ in $K_1(R)$ and in $\tilde K_1(R)$ ([[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]], [[def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]]).

[F10] An elementary expansion is a homotopy equivalence: deform the characteristic ball onto its complementary boundary disk, fixing that disk. The deformation descends through the attaching map and is the identity on $X$, giving a strong deformation retraction of $Y$ onto $X$ ([[def-homotopy-equivalence]], [F1]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $Y$ is connected and put $\pi=\pi_1(Y,y)$, $R=\mathbb Z[\pi]$; by [F1] the new cells are $e^{n-1}$ and $e^n$ with $Y=X\cup e^{n-1}\cup e^n$. Choose an oriented lift $\widetilde e^{\,n}$ of $e^n$ and an oriented lift $\widetilde e^{\,n-1}$ of $e^{n-1}$ in the universal cover $\widetilde Y$. By [F2] the relative cellular chain complex $T_\bullet:=C_\bullet(\widetilde Y,\widetilde X;R)$ is a bounded finite based free right $R$-complex with exactly two basis vectors, $\widetilde e^{\,n-1}$ in degree $n-1$ and $\widetilde e^{\,n}$ in degree $n$, and all other terms zero. [F2, given]

1.2 The boundary of $\widetilde e^{\,n}$ in the relative complex is a unit multiple of the free face: by [F1] the characteristic map is a homeomorphism from the interior of $Q^{n-1}$ onto $e^{n-1}$, maps $\partial Q^{n-1}$ into $X$, and maps the complementary boundary into $X$. On the quotient by $X$, this face is one characteristic disk, so its relative incidence degree is $\pm1$ even when its boundary points are identified in the closed cell. Thus in the cellular chains of $(\widetilde Y,\widetilde X)$ the coefficient of $e^{n-1}$ in $\partial e^n$ is $\pm T_h$ for the deck transformation $T_h$ relating the two chosen lifts, and in right-module coordinates $d^T(\widetilde e^{\,n})=\widetilde e^{\,n-1}\cdot(\pm h^{-1})$. Writing $\lambda:=\pm h^{-1}\in R$, the differential of $T_\bullet$ has the $1\times1$ matrix $\lambda$ on right-module coordinate columns (so the coordinate map is left multiplication by $\lambda$). [F1, F2]

1.3 Define $s(\widetilde e^{\,n-1}):=\widetilde e^{\,n}\lambda^{-1}$ and $s=0$ in all other degrees. Then $d s(\widetilde e^{\,n-1})=\widetilde e^{\,n-1}\lambda\lambda^{-1}=\widetilde e^{\,n-1}$ and $s d(\widetilde e^{\,n})=s(\widetilde e^{\,n-1}\lambda)=\widetilde e^{\,n}$, while on the only other degree the complex is zero, so $ds+sd=\mathrm{id}$ and $T_\bullet$ is contractible with $\#B_{\mathrm{odd}}=\#B_{\mathrm{even}}=1$. [F2, F6, algebra]

1.4 Compute $\tau(T_\bullet)$. If $n$ is odd, then $T_{\mathrm{odd}}=T_n=R$ and $(d+s)_{\mathrm{odd}}=d$ with matrix $\lambda$; if $n$ is even, then $T_{\mathrm{odd}}=T_{n-1}=R$ and $(d+s)_{\mathrm{odd}}=s$ with matrix $\lambda^{-1}$. In both cases [F6] gives $\tau(T_\bullet)=\pm[\lambda]$ in $\tilde K_1(R)$, and since $\lambda=\pm h^{-1}$ with $h^{-1}\in\pi$, the definition of $\mathrm{Wh}(\pi)$ in [F8] kills the class: the image of $\tau(T_\bullet)$ in $\mathrm{Wh}(\pi)$ is $0$. [F6, F8]

1.5 Write $C_\bullet:=C_\bullet(\widetilde X;R)$ and $K_\bullet:=\operatorname{Cone}(\mathrm{id}_{C_\bullet})$, embedded in $\operatorname{Cone}(C_*(j))$ by the inclusion $(y,x)\mapsto(y,x)$. This inclusion is well defined because in degree $m$ the displayed basis of $C_m(\widetilde Y)$ is the basis of $C_m(\widetilde X)$ together with the lift $\widetilde e^{\,m}$ when $m\in\{n-1,n\}$ and together with nothing otherwise, so $C_m(\widetilde X)$ is a direct summand of $C_m(\widetilde Y)$. It is a chain map because $X$ is a subcomplex of $Y$ by [F1], so $d^{\widetilde Y}$ preserves $C_*(\widetilde X)$, and because the differential of $\operatorname{Cone}(C_*(j))$ displayed in [F4] then sends $(y,x)\in C_m(\widetilde X)\oplus C_{m-1}(\widetilde X)$ to $(d^{\widetilde Y}y+j_{m-1}x,-d^{\widetilde X}x)\in C_{m-1}(\widetilde X)\oplus C_{m-2}(\widetilde X)$; by [F4] restricted to these submodules it is exactly the differential of $\operatorname{Cone}(\mathrm{id}_{C_\bullet})$. [F1, F2, F4]

2.1 The quotient of $\operatorname{Cone}(C_*(j))$ by $K_\bullet$ is $T_\bullet$: the quotient in degree $m$ has basis the images of the complementary basis vectors, namely the lift $\widetilde e^{\,m}$ for $m\in\{n-1,n\}$ and none otherwise, matching the basis of $T_m$ of step 1.1, and the induced differential sends the class of $(\widetilde e^{\,n},0)$ to the class of $(d^{\widetilde Y}\widetilde e^{\,n},0)$, whose $C_{n-1}(\widetilde X)$-part dies in the quotient and whose remaining part is the relative boundary computed in step 1.2; equivalently $(y,x)\mapsto q(y)$ for the relative quotient map $q$ is a chain map with kernel $K_\bullet$. Hence $0\to K_\bullet\to\operatorname{Cone}(C_*(j))\to T_\bullet\to 0$ is degreewise based exact after reordering the displayed basis of $\operatorname{Cone}(C_*(j))_m$ in each degree as the basis of $K_m$ followed by the image of the basis of $T_m$; a reordering of a displayed basis changes torsion in $\tilde K_1(R)$ by a sum of classes of permutation matrices, each of which is $0$ or $[-1]=0$ there ([F7], clause 2). [F2, F4, F7, step 1.1, step 1.2, step 1.5]

3.1 All three complexes of step 2.1 are contractible, bounded and based free: $T_\bullet$ by step 1.3, $K_\bullet=\operatorname{Cone}(\mathrm{id}_{C_\bullet})$ by the explicit contraction $s(y,x)=(0,y)$, since $d(0,y)=(y,-dy)$ and $s(dy+x,-dx)=(0,dy+x)$ give $ds+sd=\mathrm{id}$, and $\operatorname{Cone}(C_*(j))$ by [F5] applied to the homotopy equivalence $j$ of [F10]. Hence [F7] gives $\tau(\operatorname{Cone}(C_*(j)))=\tau(K_\bullet)+\tau(T_\bullet)$ in $\tilde K_1(R)$. [F5, F7, F10, step 1.3, step 2.1]

4.1 Claim: $\tau(\operatorname{Cone}(\mathrm{id}_{C_\bullet}))=0$ for every bounded finite based free right $R$-complex $C_\bullet$. The contraction $s$ of step 3.1 is available, so by [F6] the torsion is the class of the matrix of $(d+s)_{\mathrm{odd}}$ in the displayed degree-ordered bases of $K_{\mathrm{odd}}$ and $K_{\mathrm{even}}$. Each basis vector $e\in C_q$ occupies exactly two slots of $K_\bullet$, namely $(e,0)\in K_q$ and $(0,e)\in K_{q+1}$, and the formula of step 3.1 matches them: the source slot maps to its matched slot with coefficient $1$ plus one correction term, namely $(de,0)$ when $q$ is odd and $(0,-de)$ when $q$ is even. Order both bases by increasing degree and, within a degree, with the second summand before the first; this makes the matching order-preserving, and the correction term of a source slot always lies in a strictly earlier target slot, because for odd $q$ it lies in degree $q-1$ and for even $q$ it lies in the second summand of the degree-$q$ target block whose matched slot is in the first summand of that block. Hence in these matched orders the matrix is upper unitriangular, since each correction is in an earlier row than its matched diagonal entry, and has class $0$ by [F9]. Returning to the prescribed degree-ordered bases permutes rows and columns; these permutations contribute only classes of $-1$, killed in $\tilde K_1(R)$ by [F7]. Thus the torsion in the prescribed bases is $0$ in $\tilde K_1(R)$. [F6, F7, F9, step 3.1]

5.1 Combining steps 3.1 and 4.1 with step 1.4: $\tau(\operatorname{Cone}(C_*(j)))=\tau(T_\bullet)=(-1)^{n+1}[\lambda]$ in $\tilde K_1(R)$. Its image is $0$ in $\mathrm{Wh}(\pi)$ by step 1.4, and therefore $\tau(j)=0$ in $\mathrm{Wh}(\pi)$, because $\tau(j)$ is by [F3] the image of $\tau(\operatorname{Cone}(C_*(j)))$ under the quotient map $K_1(R)\to\mathrm{Wh}(\pi)$. This proves the first assertion for connected $Y$; it also proves that the identity map of a based cellular complex of any finite CW complex has zero torsion. [F3, step 1.4, step 3.1, step 4.1]

6.1 Componentwise: for arbitrary finite CW complexes $X,Y$, the two new cells of the elementary expansion lie in a single component $D$ of $Y$, and $\pi_0(j):\pi_0(X)\to\pi_0(Y)$ is a bijection since $Y=X\cup e^{n-1}\cup e^n$ with the free face attached inside $X$ by [F1]. By the componentwise definition of $\tau$ in [F3] and additivity over direct sums in [F7], $\tau(j)$ is the tuple whose $D$-entry is the torsion of the restriction $j|_{C}:C\to D$ of the component with the new cells and whose other entries are the torsions of the identity inclusions of the remaining components, each of which vanishes by step 5.1; the restriction $j|_C$ falls under steps 1.1 through 5.1, so $\tau(j)=0$ in $\bigoplus_{E\in\pi_0(Y)}\mathrm{Wh}(\pi_1E)$. The relative complex of $(Y,X)$ is concentrated in degrees $n-1$ and $n$ with the single entry $\pm g$ of step 1.2, $g=h^{-1}$, and $[\pm g]=0$ in $\mathrm{Wh}(\pi_1Y)$ by [F8]. [F1, F2, F3, F7, F8, step 1.2, step 5.1] ∎
