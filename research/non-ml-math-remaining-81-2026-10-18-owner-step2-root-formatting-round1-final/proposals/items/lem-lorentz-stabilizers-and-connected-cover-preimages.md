---
id: lem-lorentz-stabilizers-and-connected-cover-preimages
kind: lemma
title: Global Lorentz stabilizers and their connected-cover preimages
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
proof_strategy: direct
axiom_use: >-
  AC is used through the numerable-bundle fibration theorem; AC_omega is
  inherited by the connected-Lie-group quotient and smooth-partition suppliers.
  The explicit matrix stabilizer calculation is choice-free.
deps:
  - def-connected-poincare-cover-and-positive-energy
  - def-axiom-of-choice
  - def-countable-choice
  - thm-universal-covering-lie-group
  - thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-product-of-connected-spaces
  - def-covering-homomorphism-of-lie-groups
  - cor-based-connected-coverings-isomorphic-iff-equal-subgroups
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis
  - cor-geometric-unit-circle-has-fundamental-group-z
  - ex-su-two-to-so-three-as-a-covering-homomorphism
  - def-locally-trivial-fiber-bundle
  - def-hurewicz-and-serre-fibrations
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§1.1 and §3.2, PDF pp. 3–4 and 11–13; Appendix B, §§B.1–B.3, PDF pp. 53–58. The local proof supplies global null groups and cover preimages."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.14–4.16 (PDF pp. 62–64), massive and massless stabilizer conventions; global covers are proved locally here."
---

## Statement

Let $D\ge2$, $L=SO_0(D-1,1)$, and $c:K\to L$ be a connected covering homomorphism as in [[def-connected-poincare-cover-and-positive-energy]]. For $p_m=me_0$ with $m>0$, the stabilizer in $L$ is $SO(D-1)$. For a fixed future null $p_+$, choose a null frame $e_+,e_-,\mathbb R^n$ with $n=D-2$, $\eta(e_+,e_-)=-1$, and $\eta|_{\mathbb R^n}$ Euclidean. Its stabilizer is
$$
L_{p_+}\cong\mathbb R^n\rtimes SO(n),
$$
where $SO(0)$ is trivial. At zero the stabilizer is all of $L$. Every $L_p$ is closed, and the stabilizer in $K$ is the full inverse image $K_p=c^{-1}(L_p)$. Since $c$ is onto, $K$ and $L$ have the same orbits on momentum space.

The connected covers and the relevant preimages are as follows.

- If $D=2$, $L\cong\mathbb R$ has no nontrivial connected cover. The massive and nonzero null stabilizers are trivial; the zero stabilizer is $K=L$.
- If $D=3$, write $z$ for the deck element in the universal cover $\widetilde L$ corresponding to a positive $2\pi$ spatial rotation. All connected covers are $K_N=\widetilde L/\langle z^N\rangle$ for $N=1,2,\ldots$, and $K_\infty=\widetilde L$. The massive preimage is $\mathbb R/(2\pi N\mathbb Z)$ for finite $N$ and $\mathbb R$ for $N=\infty$. The null preimage is $\mathbb R\times(\mathbb Z/N\mathbb Z)$ for finite $N$ and $\mathbb R\times\mathbb Z$ for $N=\infty$. The zero preimage is $K_N$ itself.
- If $D\ge4$, the only connected covers are $L$ and its universal double cover $\widetilde L$. The massive preimages are respectively $SO(D-1)$ and $\mathrm{Spin}(D-1)$. Put $n=D-2$. The null preimages are respectively $\mathbb R^n\rtimes SO(n)$ and $\mathbb R^n\rtimes\mathrm{Spin}(n)$, where $\mathrm{Spin}(r)$ for $r\ge3$ denotes the universal cover of $SO(r)$. When $D=4$, $\mathrm{Spin}(2)$ means the connected double cover $\mathbb R/(4\pi\mathbb Z)\to SO(2)$, not the universal cover $\mathbb R$. The zero preimage is all of $K$.

Every such $K$ is second-countable locally compact Hausdorff.
For the standard inclusions $SO(r-1)\hookrightarrow SO(r)$, the induced map on $\pi_1$ is an isomorphism for $r\ge4$ and is surjective for $r=3$.
For every $r\ge3$, $\mathrm{Spin}(r)\to SO(r)$ is a two-sheeted universal cover; $\mathrm{Spin}(2)=\mathbb R/(4\pi\mathbb Z)$ is the connected double cover of $SO(2)$ used above.

## Facts & Assumptions

**Given:** The Lorentz group and connected cover from [[def-connected-poincare-cover-and-positive-energy]], and AC.

[L1] [[thm-universal-covering-lie-group]]: every connected Lie group has a simply connected covering Lie group. [[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]: under $\mathrm{AC}_\omega$, a connected Lie group is a quotient of its simply connected cover by a discrete central subgroup.

[L2] [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] identifies the universal-cover deck group with $\pi_1$; [[cor-based-connected-coverings-isomorphic-iff-equal-subgroups]] says that two already-given connected based covers of the same eligible base are isomorphic over that base exactly when their induced subgroups in $\pi_1$ agree.

[L3] Applying [[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]] to any connected Lie group $K$ gives its simply connected covering group $\widetilde K$ and a discrete central kernel $\Gamma_K$ with $K\cong\widetilde K/\Gamma_K$ over $K$.

[F1] The rotation-cover and sphere inputs used below are: conjugation by unit quaternions gives a two-sheeted cover $SU(2)\to SO(3)$ with kernel $\{I,-I\}$ and $SU(2)\cong S^3$ ([[ex-su-two-to-so-three-as-a-covering-homomorphism]]); $SO(2)\cong S^1$ has $\pi_1=\mathbb Z$, and for $r\ge2$, $\pi_j(S^r)=0$ for $0<j<r$ ([[cor-geometric-unit-circle-has-fundamental-group-z]], [[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]]); and the homotopy sequence of a fibration is exact, with a numerable locally trivial bundle a Hurewicz/Serre fibration when it has the supplied partition of unity ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[def-locally-trivial-fiber-bundle]], [[def-hurewicz-and-serre-fibrations]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F2] [[thm-uniqueness-of-lifts-from-a-connected-space]]: two lifts through the same covering from a connected domain that agree at one point are equal.

[F3] [[thm-product-of-connected-spaces]]: the product of two connected spaces with the product topology is connected.

[A1] AC implies countable choice; the connected-group quotient theorem uses $\mathrm{AC}_\omega$, while [F1]'s numerable-bundle theorem assumes AC. [[def-axiom-of-choice]], [[def-countable-choice]].

## Proof

**Given:** $D\ge2$, $L=SO_0(D-1,1)$, a connected cover $c:K\to L$, and AC.

1.1 A Lorentz transformation fixing $p_m=me_0$ fixes $e_0$ and preserves its orthogonal complement, so it is $\operatorname{diag}(1,A)$ with $A\in SO(D-1)$. For a future null vector use the frame in the statement. Any $T(A,v)$ defined by $T(A,v)e_+=e_+,\quad T(A,v)x=Ax+(v\cdot Ax)e_+,\quad T(A,v)e_-=e_-+v+\tfrac12|v|^2e_+.$ with $A\in SO(n)$ and $v\in\mathbb R^n$ preserves all pairings of the frame: $e_+$ stays null, $\eta(e_+,Te_-)=-1$, transverse pairings are $\eta(Ax,Ay)=x\cdot y$, and the only remaining checks are $\eta(Tx,Te_-)=v\cdot Ax-v\cdot Ax=0$ and $\eta(Te_-,Te_-)=|v|^2-|v|^2=0$. Its matrix is triangular in the ordered frame with diagonal blocks $1,A,1$, so its determinant is $1$. Since it fixes the future null $e_+$, $\eta(Te_0,e_+)=\eta(e_0,e_+)<0$; hence $Te_0$ is future timelike and $T(A,v)\in L$. [given, algebra, construct]

1.2 For $x\in\mathbb R^{D-1}$ put $r=\sqrt{1+|x|^2}$ and $ B(x)=\begin{pmatrix}r&x^T\\x&I+\frac{xx^T}{1+r}\end{pmatrix}. $ On the plane spanned by $e_0$ and $x$ (with $x=0$ giving $B(0)=I$), this is the boost with entries $r,|x|,|x|,r$ and determinant $r^2-|x|^2=1$; on its orthogonal complement it is the identity. Hence $B(x)\in L$ and $B(x)e_0=(r,x)$. Every $g\in L$ has $ge_0=(r,x)$ for a unique $x$, and $B(x)^{-1}g$ fixes $e_0$, so it is $\operatorname{diag}(1,A)$. Conversely every such pair gives an element of $L$. These mutually inverse maps are smooth, giving $L\cong\mathbb R^{D-1}\times SO(D-1)$ and $\pi_1(L)\cong\pi_1(SO(D-1))$. [given, algebra, construct]

2.1 Conversely, if $g\in L$ fixes $e_+$, write $ge_-=\alpha e_++e_-+v$; the coefficient of $e_-$ is $1$ from $\eta(ge_+,ge_-)=-1$, and $\alpha=|v|^2/2$ from $\eta(ge_-,ge_-)=0$. For $x\in\mathbb R^n$, $\eta(gx,e_+)=0$ gives $gx=Ax+\lambda(x)e_+$; preservation of transverse pairings makes $A$ orthogonal, and $\eta(gx,ge_-)=0$ gives $\lambda(x)=v\cdot Ax$. The determinant of $g$ is $\det A=1$, so $A\in SO(n)$. On $x\in\mathbb R^n$, composition gives $ABx+(v\cdot ABx+w\cdot Bx)e_+=ABx+((v+Aw)\cdot ABx)e_+$; on $e_-$ it gives $e_-+(v+Aw)+\frac12|v+Aw|^2e_+$. Thus $T(A,v)T(B,w)=T(AB,v+Aw)$, so these matrices form exactly $\mathbb R^n\rtimes SO(n)$, including $n=1$ and $n=0$. The zero vector is fixed by all of $L$. Continuity of the orbit map makes each stabilizer closed, and $K_p=c^{-1}(L_p)$ because $c$ is onto. [given, step 1.1, algebra]

2.2 $SO(1)$ is trivial, $SO(2)\cong S^1$ has $\pi_1=\mathbb Z$ by [F1], and $SU(2)\cong S^3$ is simply connected and covers $SO(3)$ twice by [F1], so its deck group gives $\pi_1(SO(3))\cong\mathbb Z/2$ by [L2]. For $r\ge4$, the map $SO(r)\to S^{r-1}$ sending a matrix to its last column has fiber $SO(r-1)$. Near $e_r$, with $u=x-(x\cdot e_r)e_r$ and $J=ue_r^T-e_ru^T$, the smooth matrix $I+J+J^2/(1+x\cdot e_r)$ is in $SO(r)$ and sends $e_r$ to $x$; translating this local section gives local sections near every point. These local sections give bundle charts. Compactness supplies a finite trivializing subcover, and [F1] supplies a subordinate smooth partition, so this bundle is numerable and hence a Serre fibration. Its homotopy sequence and $\pi_1(S^{r-1})=\pi_2(S^{r-1})=0$ from [F1] show $\pi_1(SO(r-1))\to\pi_1(SO(r))$ is an isomorphism. Thus $\pi_1(SO(r))=\mathbb Z/2$ for every $r\ge3$. [F1, A1, L2, step 1.2]

3.1 Let $q_i:E_i\to B$ ($i=1,2$) be covering homomorphisms of Lie groups and let $f:E_1\to E_2$ be a based covering isomorphism over $B$. The maps $(x,y)\mapsto f(xy)$ and $(x,y)\mapsto f(x)f(y)$ lift the same map $(x,y)\mapsto q_1(x)q_1(y)$ through $q_2$, and agree at $(e,e)$. Since $E_1\times E_1$ is connected by [F3], uniqueness of lifts [F2] makes them equal; the covering-chart description of $f$ also makes it smooth, so $f$ is a Lie-group isomorphism. Now take an arbitrary connected covering homomorphism $c:K\to L$ and apply the connected-group quotient theorem [L3] to this $K$. Its simply connected covering group $q_K:\widetilde K\to K$ has discrete central kernel $\Gamma_K$ and identifies $K$ with $\widetilde K/\Gamma_K$ over $K$. The composite $f=c\circ q_K:\widetilde K\to L$ is a surjective Lie-group homomorphism with invertible differential, hence a local diffeomorphism. Any surjective homomorphism $q$ that is a local diffeomorphism is a covering: choose a symmetric identity neighborhood $U$ on which $q$ is a diffeomorphism onto an open set $V$ and with $U^{-1}U\cap\ker q=\{e\}$; then $q^{-1}(V)=\bigcup_{\gamma\in\ker q}\gamma U$ is a disjoint union of sheets, each mapped homeomorphically onto $V$. Thus $f$ is a universal cover of $L$. By uniqueness of based universal covers, $f$ is isomorphic over $L$ to $\widetilde L\to L$, and the lift argument just given makes that isomorphism a Lie-group isomorphism. Consequently $c:K\to L$ is isomorphic over $L$ to $\widetilde L/\Gamma\to L$, where $\Gamma$ is the corresponding subgroup of the universal deck group $\Delta=\ker(\widetilde L\to L)\cong\pi_1(L)$. The group $\Delta$ is discrete central by [L3] applied to $L$. Conversely, every subgroup $\Gamma\le\Delta$ is discrete central, and $\widetilde L/\Gamma\to L$ is a surjective local-diffeomorphism homomorphism, hence a connected covering by the same neighborhood argument. Under $\Delta\cong\pi_1(L)$, its induced fundamental-group subgroup is exactly $\Gamma$: a loop lifts to a path ending at its deck element $\delta$, and its image in $\widetilde L/\Gamma$ closes exactly when $\delta\in\Gamma$. The corollary [L2] now distinguishes these already-constructed covers by their induced subgroups. By step 1.2, $\pi_1(L)$ is trivial for $D=2$, is $\mathbb Z$ generated by the positive $2\pi$ rotation for $D=3$, and is $\mathbb Z/2$ for $D\ge4$. Its subgroups give only $L$ in $D=2$; $K_N=\widetilde L/\langle z^N\rangle$ ($N\ge1$) and $K_\infty=\widetilde L$ in $D=3$; and $L,\widetilde L$ in $D\ge4$. [L1, L2, L3, F2, F3, step 1.2, step 2.2]

4.1 In $D=3$ the massive stabilizer is the rotation circle, parametrized by angle $t$ modulo $2\pi$; its lifted one-parameter group has period $2\pi N$ in $K_N$ and no period in $K_\infty$, giving $\mathbb R/(2\pi N\mathbb Z)$ or $\mathbb R$. The null stabilizer in $L$ is the unipotent $\mathbb R$ subgroup from step 2.1; its lift is simply connected, and every other component of its full preimage is a unique deck translate. The deck element $z$ is central by [L1], so the preimage is $\mathbb R\times\mathbb Z$ and quotienting by $\langle z^N\rangle$ gives $\mathbb R\times(\mathbb Z/N\mathbb Z)$. [L1, step 2.1, step 3.1]

4.2 For $D\ge4$, the massive stabilizer $M=SO(D-1)$ includes in $L\cong\mathbb R^{D-1}\times SO(D-1)$ as the second factor, so $\pi_1(M)\to\pi_1(L)$ is an isomorphism. Its full preimage in $\widetilde L$ is connected: loop monodromy from $M$ reaches every deck element because this inclusion is onto, and lifting paths in $M$ then connects every point of the preimage to the identity. As a cover of $M$, its induced subgroup is the kernel of this isomorphism, namely $0$; it is the universal cover $\mathrm{Spin}(D-1)\to SO(D-1)$ by [L2]. The based cover isomorphism is a Lie-group isomorphism by step 3.1. Put $n=D-2$ and $H=\mathbb R^n\rtimes SO(n)$, which is connected. Its fundamental group is that of $SO(n)$ because $\mathbb R^n$ is contractible. Choose the standard null frame with $e_+,e_-$ in the $e_0,e_{D-1}$-plane; then the rotation factor $SO(n)$ is the standard subgroup of the spatial $SO(n+1)$. For $n\ge3$ the same sphere-fibration argument as in step 2.2 makes $\pi_1(H)\to\pi_1(L)$ an isomorphism. For $n=2$, the generator loop in $SO(2)$ lifts under $SU(2)\to SO(3)$ to $\cos(t/2)+k\sin(t/2)$ and ends at $-I$ when $t=2\pi$, so its image is the nontrivial element of $\pi_1(L)=\mathbb Z/2$. To check connectedness of the full null preimage, join the projection of any point in $c^{-1}(H)$ to the identity by a path in $H$ and lift that path; the endpoint then differs from a point over the identity by a deck transformation. Two points over the identity are joined within the preimage exactly when their deck difference is the monodromy of a loop in $H$. Thus components correspond to cosets of the image of $\pi_1(H)$ in the deck group, and the surjectivity just proved makes $c^{-1}(H)$ connected. As a cover of $H$, its induced subgroup is $\ker(\pi_1(H)\to\pi_1(L))$, since a loop in $H$ lifts closed exactly when its image loop in $L$ does. The next paragraph identifies its group. In $D=2$ both nonzero stabilizers are trivial. [L1, L2, F1, step 1.2, step 2.2, step 3.1]

5.1 For $n\ge3$, the map $\pi_1(H)\to\pi_1(L)$ in step 4.2 is an isomorphism, so the connected full preimage has induced subgroup $0$ in $\pi_1(H)$. The connected covering $\mathbb R^n\rtimes\mathrm{Spin}(n)\to H$ also has induced subgroup $0$, since $\mathrm{Spin}(n)\to SO(n)$ is universal. For $n=2$, $\pi_1(H)=\mathbb Z$ and the inclusion maps a generator onto the nontrivial element of $\mathbb Z/2$, so the full preimage has induced subgroup $2\mathbb Z$; the connected double cover $\mathbb R^2\rtimes(\mathbb R/(4\pi\mathbb Z))\to H$ has that same subgroup. In each case [L2] gives a unique based covering isomorphism over $H$ between the displayed semidirect product and the full preimage. Both maps to $H$ are homomorphisms of Lie groups, so step 3.1 proves that this based isomorphism preserves multiplication (and is smooth). Hence the full null preimage is exactly $\mathbb R^n\rtimes\mathrm{Spin}(n)$ with the stated global group structure, including its sheets and not merely its Lie algebra. [L2, step 3.1, step 4.2]

6.1 The computed fundamental groups are countable, so every connected cover here has at most countably many sheets. A countable basis of evenly covered neighborhoods in $L$, lifted sheet by sheet, gives a countable basis upstairs; each cover is a locally compact Hausdorff Lie group by [L1]. Therefore each $K$ is second-countable locally compact Hausdorff, every inverse-image stabilizer is closed by step 2.1, and all stabilizers and preimages in the statement have been computed. [L1, L2, step 2.1, step 1.2, step 3.1, step 4.1, step 4.2, step 5.1] ∎

