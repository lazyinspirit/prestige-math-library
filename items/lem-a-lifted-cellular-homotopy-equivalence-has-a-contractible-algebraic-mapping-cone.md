---
id: lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone
kind: lemma
title: "A lifted finite CW equivalence has a contractible group-ring mapping cone"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-based-cellular-chain-complex-of-a-universal-cover, lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear, thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible, thm-cellular-approximation-for-maps-of-cw-pairs, lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, prop-relative-cw-inclusions-are-cofibrations, def-homotopy-equivalence, def-mapping-cone-of-a-chain-map, def-chain-homotopy-equivalence, def-chain-homotopy, prop-chain-homotopy-is-an-equivalence-relation, lem-chain-homotopy-is-compatible-with-addition-and-composition, def-contractible-complex, def-direct-sum-of-a-family-of-modules, def-chain-complex-in-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, §3.1, pp.27–31"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§3.1, pp.27–31"
    - title: "Davis–Kirk, §11.4, p.343"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "§11.4, p.343"
---
## Statement

Let $f:(X,x)\to(Y,y)$ be a based homotopy equivalence of connected finite CW complexes, with $x$ a vertex and $y=f(x)$ a vertex after choosing a cellular representative. Put $\pi=\pi_1(X,x)$ and $\pi'=\pi_1(Y,y)$; let $p:\widetilde X\to X$ and $q:\widetilde Y\to Y$ be universal covers with chosen points $\widetilde x,\widetilde y$ over the basepoints. Let $\widetilde f$ be the compatible lift of a based cellular approximation of $f$ satisfying $\widetilde f(\widetilde x)=\widetilde y$. Transport the right $\mathbb Z[\pi]$-module structure of the based cellular chains of $\widetilde X$ to a right $R=\mathbb Z[\pi']$-module structure along $f_*$. A different choice of basepoint or lift uses the corresponding transported coefficient identification.

Then $C_*(\widetilde f):C_*(\widetilde X)\to C_*(\widetilde Y)$ is a chain homotopy equivalence of right $R$-complexes. Consequently its algebraic mapping cone $\operatorname{Cone}(C_*(\widetilde f))$, with
$$\operatorname{Cone}(C_*(\widetilde f))_n=C_n(\widetilde Y)\oplus C_{n-1}(\widetilde X)$$
and differential $d(y,u)=(d^{\widetilde Y}y+C_{n-1}(\widetilde f)u,-d^{\widetilde X}u)$, is a bounded contractible complex of finite free based right $R$-modules, with target summands first. Contractibility comes from right-linear chain homotopies induced by based geometric deformation retracts, not from homology vanishing.

## Facts & Assumptions

**Given:** The based finite CW equivalence and compatible cover lifts in the statement. Write $M=M_f$ for its finite cellular mapping cylinder, $j:X\hookrightarrow M$ for the free-end inclusion, $k:Y\hookrightarrow M$ for the target inclusion, and $r:M\to Y$ for the standard collapse, so $rj=f$ and $rk=1_Y$.

[F1] The finite cellular mapping cylinder has $j(X)$ and $k(Y)$ as CW subcomplexes. Its collapse $r$ is a strong deformation retraction onto $k(Y)$, fixing $k(Y)$ pointwise throughout ([[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]]).

[F2] Since $f=rj$ and both $f$ and $r$ are homotopy equivalences, $j$ is a homotopy equivalence. A CW subcomplex inclusion which is a homotopy equivalence is a strong deformation retract, hence there is a retraction $r_j:M\to j(X)$ and a homotopy $1_M\simeq jr_j$ fixing $j(X)$ throughout ([[def-homotopy-equivalence]], [[lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts]]).

[F3] Cellular approximation for finite CW pairs makes each retraction cellular relative to the fixed subcomplex and makes its deformation homotopy cellular relative to that subcomplex and its two cellular endpoint maps. The inclusions have the homotopy extension property ([[thm-cellular-approximation-for-maps-of-cw-pairs]], [[prop-relative-cw-inclusions-are-cofibrations]]).

[F4] A based cellular map inducing a fundamental-group isomorphism has a compatible lift inducing a right-linear cellular chain map after coefficient transport. A lifted cellular homotopy that fixes its basepoint gives a right-linear chain homotopy between the compatible endpoint maps ([[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]]).

[F5] A chain map is a chain homotopy equivalence exactly when its algebraic mapping cone is contractible; the cone has the target summand followed by the shifted source and the displayed differential ([[thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]], [[def-mapping-cone-of-a-chain-map]], [[def-chain-homotopy-equivalence]], [[def-contractible-complex]]).

[F6] Finite CW cellular chains of universal covers are bounded finite free based right group-ring complexes; their finite direct sums are finite free on the concatenated bases ([[def-based-cellular-chain-complex-of-a-universal-cover]], [[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 If the original map is not cellular or the chosen basepoint is not a vertex, choose a vertex of $X$, use its image under a based cellular approximation as the target vertex, and transport the previously selected fundamental groups along the basepoint paths. These finite choices do not affect the assertion after the specified coefficient transport. Hence work with the based cellular $f$ in the statement. Form $M$, $j$, $k$ and $r$. By [F1], $r$ and $k$ are inverse up to a deformation fixing $k(Y)$. Since $f=rj$ is an equivalence, $j$ is an equivalence: if $g$ is a homotopy inverse of $f$, then $gr$ is a homotopy inverse of $j$: $grj=gf\simeq1_X$, while $rjgr=fgr\simeq r$ and the equivalence $r$ detects $jgr\simeq1_M$. [F1, F2]

2.1 Apply [F2] to $j(X)\subset M$ to obtain a retraction $r_j$ and homotopy $D^j:1_M\simeq jr_j$ fixed on $j(X)$. The standard $k(Y)$ deformation gives $r_k=k r$ and $D^k:1_M\simeq kr$ fixed on $k(Y)$. By [F3] take $r_j,r$ and both homotopies cellular relative to the indicated fixed subcomplexes and their endpoint maps. In particular $r_jj=1_X$, $rk=1_Y$, and the selected basepoints $j(x)$ and $k(y)$ stay fixed during the respective homotopies. [F1, F2, F3, step 1.1]

2.2 Let $\widetilde M$ be the universal cover of $M$. The prism edge $t\mapsto[x,t]$ from $k(y)$ to $j(x)$ identifies $\pi_1(M,j(x))$ with $\pi_1(M,k(y))$ by path transport. Since $r$ collapses this edge to the constant path at $y$, the two inclusion isomorphisms identify with $f_*:\pi\to\pi'$ under $r_*$. Fix a lift of $k(y)$ in $\widetilde M$, lift that edge to select a lift of $j(x)$, and identify the connected preimages of $k(Y)$ and $j(X)$ with the chosen $\widetilde Y$ and $\widetilde X$. They are connected universal covers because $k_*$ and $j_*$ are isomorphisms. Under these identifications the common deck ring $\mathbb Z[\pi_1 M]$ becomes $R$ via $r_*$, the source action is precisely the transport through $f_*$, and the compatible lift of $rj=f$ is $\widetilde r\,\widetilde j=\widetilde f$. [F1, F2, F4, step 1.1]

3.1 For $A=j(X)$ or $k(Y)$, write $i_A:A\hookrightarrow M$ and $r_A:M\to A$ for its cellular retraction. Lift $r_A$ so that $\widetilde r_A\widetilde i_A=1_{\widetilde A}$ at the selected basepoint; lift $D^A:1_M\simeq i_A r_A$ starting at $1_{\widetilde M}$. Since $D^A$ fixes the basepoint in $A$, uniqueness of covering homotopy lifts makes its end exactly $\widetilde i_A\widetilde r_A$. For every deck element $h$, the two maps $\widetilde D^A(T_hz,t)$ and $T_h\widetilde D^A(z,t)$ are lifts of the same map and agree at time zero, so they agree for all $t$. Thus the lifted deformation and its cellular prism are equivariant; under the right action they induce $R$-linear chain homotopies $C_*(\widetilde i_A)C_*(\widetilde r_A)\simeq 1_{C_*(\widetilde M)}$ and $C_*(\widetilde r_A)C_*(\widetilde i_A)=1_{C_*(\widetilde A)}$. No isolated deck transformation is claimed to be $R$-linear. [F3, F4, step 2.1, step 2.2]

4.1 Step 3.1 makes each $C_*(\widetilde j)$ and $C_*(\widetilde k)$ an $R$-linear chain homotopy equivalence. For $k(Y)$ its retraction is $r$, so $C_*(\widetilde r)$ is an $R$-linear chain homotopy inverse to $C_*(\widetilde k)$. Since $C_*(\widetilde f)=C_*(\widetilde r)C_*(\widetilde j)$ by step 2.2, it is an $R$-linear chain homotopy equivalence. An explicit inverse is $C_*(\widetilde r_j)C_*(\widetilde k)$: both composites reduce to identities using the two homotopies in step 3.1 and functoriality of the induced cellular chain maps. [F4, step 2.2, step 3.1]

5.1 Apply [F5] to the chain homotopy equivalence in step 4.1. Its cone is contractible with the stated differential. By [F6], both summands in degree $n$ are finite free based right $R$-modules, so the ordered concatenation of their bases is a finite free basis, and the dimensions of $X,Y$ bound the degrees in which the cone is nonzero. Thus the cone is bounded finite free based and contractible. The contraction follows from the two explicit equivariant lifted deformation homotopies in step 3.1 through the cone criterion; no homology-vanishing converse has been used. [F5, F6, step 3.1, step 4.1] ∎
