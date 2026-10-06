---
id: lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball
kind: lemma
title: The double cover branched over a slice disk is a rational homology ball
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- thm-collar-neighborhood-theorem
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
- thm-homotopy-invariance-of-vector-bundle-pullback
- def-covering-map-and-evenly-covered-neighbourhoods
- thm-covering-space-lifting-criterion
- lem-subgroup-quotient-of-universal-cover
- prop-the-first-hurewicz-map-in-degree-one-is-abelianization
- thm-mayer-vietoris-sequence-in-singular-homology
- thm-long-exact-sequence-in-homology
- thm-universal-coefficient-theorem-for-homology-over-a-pid
- lem-second-countable-smooth-manifolds-have-cw-homotopy-type
- cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex
- thm-cellular-homology-computes-singular-homology
sources:
  references:
  - title: R. H. Fox and J. W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots, Osaka Journal
      of Mathematics 3 (1966), 257-267 (digitised publisher copy)
    url: https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf
    locator: Theorem 2 and the trefoil nonsliceness discussion motivate these local adapters; the proof below uses
      elementary double-cover homology and duality, not an imported Fox-Milnor factorization theorem

verification:
  precheck: pass
dependency_level: 0
---

## Statement

Assume AC. If $D\subset B^4$ is a smooth proper embedded disk, the connected double cover $W\to B^4$ branched along $D$ is a compact connected oriented smooth $4$-manifold with $H_i(W;\mathbb F_2)=0$ for $i>0$, hence $H_i(W;\mathbb Q)=0$ for $i>0$. Its boundary is the double cover of $S^3$ branched over $\partial D$.

Here a proper embedded disk means a smooth embedding of the closed disk $D^2$ whose interior lies in the interior of $B^4$ and whose boundary circle lies in $S^3=\partial B^4$; the embedding is taken neat, so it meets $S^3$ transversely along $\partial D$ and carries a boundary collar. All homology below is singular homology.

## Facts & Assumptions

**Given:** A smooth proper (neat) embedded disk $D\subset B^4$ with $\partial D\subset S^3$, its normal bundle $\nu(D)$ in $B^4$, and the full Axiom of Choice ([F1]).

[F1] AC is [[def-axiom-of-choice]]; it implies Dependent Choice and Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]). The collaring and tubular inputs need countable choice; bundle homotopy invariance, the CW input and universal coefficients are cited here under full AC.

[F2] The collar neighbourhood theorem supplies boundary collars for $D$ and for $B^4$, so after a small isotopy supported near $\partial D$ the disk is neat, meeting $S^3$ orthogonally along $\partial D$ with a product structure $\partial D\times[0,1)$ in $B^4$; consequently the boundary of a tubular neighbourhood of $D$ is split as $\partial D\times D^2$ (the part in $S^3$) and $D\times S^1$ (the part in the interior), glued along the torus $\partial D\times S^1$ ([[thm-collar-neighborhood-theorem]]).

[F3] Double the collared pair $(B^4,D)$ along $(S^3,\partial D)$. This gives a smooth closed ambient double and a closed embedded doubled disk. Apply [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] there, choosing its metric and normal addition symmetric on the product collar, and restrict to the original half. This supplies a tubular map from a neighbourhood of the zero section of $\nu(D)$. Since $D$ is contractible, [[thm-homotopy-invariance-of-vector-bundle-pullback]] under AC trivializes $\nu(D)$. Compactness gives a sufficiently small closed disk subbundle, whose image is $N\cong D\times D^2$, with $N\cap S^3=\partial D\times D^2$. The tube is a disk subbundle, rather than the whole noncompact normal bundle ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F4] Let $p:\widetilde Y\to Y$ be a two-sheeted covering of a path-connected $Y$ and give the singular chain groups coefficients in $\mathbb F_2$; since the standard simplices are simply connected, every singular simplex of $Y$ lifts to $\widetilde Y$ ([[thm-covering-space-lifting-criterion]]). Writing $T$ for the map sending a simplex to the sum of its two lifts and $P$ for the projection of chains, the sequence $0\to C_*(Y;\mathbb F_2)\xrightarrow{T}C_*(\widetilde Y;\mathbb F_2)\xrightarrow{P}C_*(Y;\mathbb F_2)\to0$ is exact: $P\circ T=0$, $T$ is injective because the two lifts of each simplex are distinct basis elements, and lifts of different simplices project to different basis elements, and a chain lies in $\ker P$ exactly when each of its simplices occurs together with its translate, which exhibits it as $T$ of a chain. The long exact homology sequence of a short exact sequence of chain complexes applies to it ([[thm-long-exact-sequence-in-homology]]).

[F5] If $Y$ is nonempty, path-connected, locally path-connected and semilocally simply connected, a surjection $\pi_1(Y,y_0)\to\mathbb Z/2$ determines a connected double cover of $Y$: the kernel acts on the universal cover and the quotient is a connected covering realizing it ([[lem-subgroup-quotient-of-universal-cover]], [[def-covering-map-and-evenly-covered-neighbourhoods]]); the first Hurewicz map identifies $\pi_1(Y,y_0)^{\mathrm{ab}}$ with $H_1(Y;\mathbb Z)$ ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]).

[F6] The universal coefficient theorem for homology over the PID $\mathbb Z$ gives, for every space $X$ and every $i$, a short exact sequence $0\to H_i(X;\mathbb Z)\otimes\mathbb F_2\to H_i(X;\mathbb F_2)\to\operatorname{Tor}(H_{i-1}(X;\mathbb Z),\mathbb F_2)\to0$ ([[thm-universal-coefficient-theorem-for-homology-over-a-pid]]).

[F7] Every second-countable smooth manifold has the homotopy type of a CW complex, and the image of a compact space under a map into a CW complex lies in a finite subcomplex ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]], [[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]], [[thm-cellular-homology-computes-singular-homology]]).

[F8] For an open cover $X=A\cup B$ (or collar-thickenings of the manifold pieces used here), the Mayer-Vietoris sequence is exact, in reduced form as well, and reduces the homology of $X$ to that of $A$, $B$ and $A\cap B$; a contractible space has the homology of a point ([[thm-mayer-vietoris-sequence-in-singular-homology]]).

## Proof

**Proof technique:** direct; compute the homology of the disk complement by Mayer-Vietoris, pass to the connected double cover, glue the branched model and finish with finite generation and universal coefficients.

1.1 By [F2] we may take $D$ neat, so the closed tubular neighbourhood $N$ of [F3] is diffeomorphic to $D\times D^2$, with $N\cap S^3=\partial D\times D^2$ and with $\partial N$ split into the two solid tori $\partial D\times D^2\subseteq S^3$ and $D\times S^1$, glued along the torus $\partial D\times S^1$. Then $Y:=\overline{B^4\setminus\operatorname{int}N}$, with its corners rounded, is a compact $4$-manifold with boundary and $B^4=N\cup Y$ with $N\cap Y=D\times S^1$, which is homotopy equivalent to $S^1$ with generator the meridian circle $\{x\}\times S^1$. [F2, F3, given, construct]

2.1 Mayer-Vietoris [F8] for the collar-thickened open cover of $B^4$ by the interiors of enlarged $N$ and $Y$, retracting to $N,Y,N\cap Y$ respectively, with $N$ and $B^4$ contractible and $N\cap Y\simeq S^1$ gives $H_i(Y;\mathbb Z)=0$ for every $i\ge2$, because $H_i(N\cap Y)$ vanishes there and $H_i(B^4)$ vanishes for $i\ge1$; in degree one it makes $H_1(N\cap Y;\mathbb Z)\to H_1(Y;\mathbb Z)$ an isomorphism, since the preceding term $H_2(B^4)$ vanishes and $H_1(N)=0$, so $H_1(Y;\mathbb Z)\cong\mathbb Z$ is generated by the meridian; in reduced degree zero all terms of $\widetilde H_0(N\cap Y)\to\widetilde H_0(N)\oplus\widetilde H_0(Y)\to\widetilde H_0(B^4)$ vanish except possibly the middle, so $Y$ is connected. [F8, step 1.1, algebra]

3.1 The connected manifold $Y$ is path-connected, and its ball or half-ball charts give contractible neighbourhoods, so it is locally path-connected and semilocally simply connected. Fix a basepoint in $Y$. By [F5] the composite $\pi_1(Y)\to H_1(Y;\mathbb Z)\cong\mathbb Z\to\mathbb Z/2$ (reduction mod $2$) is a surjection, so it determines a connected double cover $p:\widetilde Y\to Y$. Over $\mathbb F_2$ the singular chains of the cover form the short exact sequence of [F4], and its long exact homology sequence together with step 2.1 gives: $H_0(Y;\mathbb F_2)=\mathbb F_2$, $T_*:H_0(Y;\mathbb F_2)\to H_0(\widetilde Y;\mathbb F_2)$ is zero and $P_*:H_0(\widetilde Y;\mathbb F_2)\to H_0(Y;\mathbb F_2)$ is an isomorphism (the cover is connected), so the connecting map $H_1(Y;\mathbb F_2)\to H_0(Y;\mathbb F_2)$ is an isomorphism; consequently $P_*=0$ in degree one and $T_*:H_1(Y;\mathbb F_2)\to H_1(\widetilde Y;\mathbb F_2)$ is an isomorphism; and $H_i(\widetilde Y;\mathbb F_2)=0$ for $i\ge2$. [F4, F5, step 1.1, step 2.1, algebra]

4.1 The preimage in $\widetilde Y$ of the solid torus $N\cap Y\cong D\times S^1$ is connected, because the meridian has odd class in $\mathbb Z/2$, and the covering restricts to the model $(x,z)\mapsto(x,z^2)$ of $D\times S^1$ onto itself; naturality of the transfer in step 3.1 shows that its upstairs meridian generates $H_1(\widetilde Y;\mathbb F_2)$: the transfer of a downstairs circle is the sum of its two lifted half-circle paths, hence the single upstairs circle. Glue a copy of $D\times D^2$ to $\widetilde Y$ by a diffeomorphism of its boundary solid torus onto that upstairs overlap, identifying the upstairs circle coordinate $z$ with itself; its projection downstairs is $(x,z)\mapsto(x,z^2)$; after rounding corners the result $W$ is a compact connected smooth $4$-manifold, and the gluing map exhibits $W\to B^4$ as a branched double cover whose restriction off $D$ is the covering $p$ and whose local model at $D$ is $(x,z)\mapsto(x,z^2)$ in complex normal coordinates; pulling back the orientation of $B^4$ along this branched cover orients $W$, and the boundary $\partial W$ is the double cover of $S^3$ branched along $\partial D$. [F2, step 3.1, construct]

5.1 Mayer-Vietoris [F8] over $\mathbb F_2$ for collar-thickened open pieces retracting to the displayed pieces of $W=\widetilde Y\cup(D\times D^2)$ with overlap $D\times S^1$, whose $H_1$ maps isomorphically onto $H_1(\widetilde Y;\mathbb F_2)$ by step 4.1, while $H_i(D\times D^2;\mathbb F_2)=H_i(D\times S^1;\mathbb F_2)=0$ for $i\ge2$ and $H_i(\widetilde Y;\mathbb F_2)=0$ for $i\ge2$ by step 3.1, yields $H_i(W;\mathbb F_2)=0$ for every $i>0$ and, by the reduced degree-zero segment, $\widetilde H_0(W)=0$, so $W$ is connected; the exact piece in degrees two and one is $0\to H_2(W)\to H_1(D\times S^1)\xrightarrow{\cong}H_1(\widetilde Y)\to H_1(W)\to0$, so $H_2(W)=H_1(W)=0$. [F8, step 3.1, step 4.1, algebra]

6.1 The double $DW=W\cup_{\partial W}W$ of $W$ along its collared boundary is a compact smooth $4$-manifold without boundary, hence by [F7] has the homotopy type of a CW complex whose compact image lies in a finite subcomplex $K'$; the folding retraction $r:DW\to W$ collapsing the second copy onto the first through the collar satisfies $r|_{W}=\mathrm{id}_W$, so composing an equivalence, its inverse and $r$ exhibits $W$ as a homotopy retract of the finite CW complex $K'$. Therefore every $H_i(W;\mathbb Z)$ is finitely generated. For $i>0$, the universal coefficient sequence of [F6] injects $H_i(W;\mathbb Z)\otimes\mathbb F_2$ into $H_i(W;\mathbb F_2)=0$ by step 5.1, so $H_i(W;\mathbb Z)$ has no nontrivial free part; tensoring with $\mathbb Q$ gives $H_i(W;\mathbb Q)=H_i(W;\mathbb Z)\otimes\mathbb Q=0$ for $i>0$. This completes the proof; full AC is used for the bundle homotopy-invariance, CW and universal-coefficient suppliers, and supplies the countable choice needed for collaring and tubes. [F1, F6, F7, step 5.1, algebra] ∎
