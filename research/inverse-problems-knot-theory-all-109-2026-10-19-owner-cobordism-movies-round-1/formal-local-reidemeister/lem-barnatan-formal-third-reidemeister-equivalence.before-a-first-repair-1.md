---
id: lem-barnatan-formal-third-reidemeister-equivalence
kind: lemma
title: "A formal third Reidemeister equivalence from explicit residual saddles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-barnatan-open-tangle-cobordism-complexes, lem-barnatan-formal-inverse-boundary-crossings, lem-barnatan-cochain-cones-preserve-strong-retracts, lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms, lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity, def-countable-choice]
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, Lemmas 4.4–4.5 and Figures 7–8"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Published printed pp.1460–1462; actual six-point smoothing cubes and residual saddle bands visually inspected"
---

## Statement

Assume countable choice. Put six points on a disk boundary in clockwise order $1,2,3,4,5,6$, at northwest, northeast, east, southeast, southwest and west. Consider diagonal arcs $a$ from $1$ to $4$ and $b$ from $2$ to $5$, and an arc $c$ from $6$ to $3$. In the left diagram $c$ bows above the intersection of $a,b$; in the right it bows below. In both diagrams $c$ passes over both diagonals. Either $a$ passes over $b$ in both diagrams, or $b$ passes over $a$ in both. These are the two local third Reidemeister variants considered here. More precisely one can use the diameters $y=-x,y=x$ for $a,b$ and the curves $y=\pm h(1-x^2)$, $0<h<1/2$, for $c$, with fixed radial collars near the six boundary points.

At each crossing, the $0$ smoothing pairs the entering underpassing half-line with the half-line reached by turning right in the oriented projection plane; the other smoothing is $1$. For an ordered diagram with $N$ crossings, its raw formal cube has term $\bigoplus_{|v|=s}S_v\{s\}$ in cochain degree $s$ and edge saddle coefficient $(-1)^{\sum_{k<j}v_k}$ in coordinate $j$. For any choice of orientations on the three arcs, normalize by putting this term in degree $s-n_-$ and shifting it internally by the additional $n_+-2n_-$. Then the normalized formal cubes of the two diagrams admit internal degree zero chain homotopy equivalences, with maps defined by the explicit cone retractions below. They can be inserted into any planar surrounding complex.

## Statement references

[[def-barnatan-open-tangle-cobordism-complexes]]

[[lem-barnatan-formal-inverse-boundary-crossings]]

[[lem-barnatan-cochain-cones-preserve-strong-retracts]]

[[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]]

[[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]]

[Bar-Natan, Figures 7–8 and their proofs](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The two diagrams and the smoothing convention in the statement. Products of maps mean composition with the rightmost map first. A pairing such as $(16)(25)(34)$ means the disjoint arcs joining those endpoint pairs, represented without crossings in the disk.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] defines shifts, saddle cobordisms, signed totalization and chain homotopy in the open additive category.

[F2] [[lem-barnatan-formal-inverse-boundary-crossings]] gives the explicit local RII retraction with middle inclusion $\binom{1}{ut}$, projection $(1,-se)$, homotopies $(0,e)$ and $\binom{0}{-u}$, and all three side conditions. Reindexing its degrees by one, keeping the differential, and adding internal shift one gives the raw two-crossing face used below, with the same displayed differential and maps.

[F3] [[lem-barnatan-cochain-cones-preserve-strong-retracts]] proves both source and target retractions for $T(f)^n=U^n\oplus V^{n-1}$ with differential $\begin{pmatrix}d_U&0\\f&-d_V\end{pmatrix}$. The source-case maps are $I=\operatorname{diag}(i,1)$, $P=\begin{pmatrix}p&0\\-fh&1\end{pmatrix}$, $H=\operatorname{diag}(h,0)$; the target-case maps are $I=\begin{pmatrix}1&0\\hf&i\end{pmatrix}$, $P=\operatorname{diag}(1,p)$, $H=\operatorname{diag}(0,-h)$.

[F4] [[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]] supplies the boundary-relative uniqueness of proper smooth disk systems used for the two-saddle disk identification below.

[F5] [[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]] supplies planar insertion of maps and homotopies with the tensor signs.

[A1] [[def-countable-choice]] is inherited through [F2] and [F4]; all cube and matrix constructions are finite.

## Proof

1.1 First take overpassing order $c>a>b$. The specified curves have exactly three transverse crossings: $r=a\cap b$, $p=c\cap b$ and $q=c\cap a$. In the left diagram $p$ is the upper-right crossing and $q$ the upper-left crossing. Order the crossings $(r,p,q)$. Use the following five pairings: $A=(16)(25)(34)$, $B=(12)(34)(56)$, $C=(16)(23)(45)$, $D=(14)(23)(56)$ and $P=(12)(36)(45)$. The left smoothing table, with rows indexed by $(p,q)$ and columns by $r$, is $00:(C,A)$, $01:(P,B)$, $10:(C\sqcup O,C)$ and $11:(C,D)$. Here $O$ is one interior circle. To verify the table directly, at the left crossing $q$ the $0$ smoothing connects endpoint $1$ to the branch towards $6$; at $p$, the $0$ smoothing connects endpoint $2$ to the branch of $c$ travelling towards $q$. At $r$, its $0$ smoothing connects the two upper diagonal branches and its other pair joins the branches towards $4,5$. Hence the all-zero state is $(16)(23)(45)$. Flipping $q$ alone reconnects $16,23$ into $12,36$, giving $P$; flipping $p$ alone cuts a circle from the path joining $2,3$; flipping $r$ alone reconnects $23,45$ into $25,34$, giving $A$. With $r=1$, flipping $q$ then joins the pairs to give $B$, flipping $p$ removes the just-described circle to give $C$, and flipping both gives $D$. With $r=0$, flipping $p,q$ merges that circle into the other arc and returns $C$. These traces specify the actual crossing disks and the saddle bands at their flips. [F1, given, construct]

2.1 Let $U_L$ be the $r=0$ raw face, in degrees $0,1,2$, and $W_L$ the $r=1$ raw face. Their terms are $U_L=(C\to(P\oplus(C\sqcup O))\{1\}\to C\{2\})$ and $W_L=(A\to(B\oplus C)\{1\}\to D\{2\})$. In the first expression the initial $C$ has shift zero. Write the differentials of $W_L$ as $\binom{x}{y}$ and $(z,-w)$, where $x:A\to B$, $y:A\to C$, $z:B\to D$ and $w:C\to D$ are the elementary saddles specified by the crossing disks. The $r=0$ face is the RII face of [F2], with its rectangle rotated so that its straight pairing is $(12)(36)$ and with the unused arc $45$ carried as an identity curtain: its local inclusion is $i_L=\binom{1_P}{ut}:Q\to U_L$, where $Q$ is the one-term complex $P\{1\}$ in degree one and $t:P\to C$ reconnects the arcs $12,36$ into $16,23$. Its differential is $\binom{s}{\Delta}$ followed by $(t,-m)$, with exactly the two-crossing cube signs of [F2]. The local RII bigon and its extra arc are visible also from the first column of the table: $C,P,C\sqcup O,C$. Thus [F2] supplies a strong retract $(i_L,p_L,h_L)$ of this actual face onto $Q$. [F1, F2, step 1.1, construct, algebra]

2.2 The second geometric variant, with overpassing order $c>b>a$, is obtained by reflecting the first across the vertical diameter. This sends $a$ to $b$, preserves each upward or downward bow of $c$, and changes the crossing between the diagonals to $b$ over $a$, exactly as required. At every crossing reflection changes a right turn into a left turn, so it interchanges its $0$ and $1$ smoothings. It follows that its actual raw cube is the reflected, time-reversed-surface dual of the first cube with all three bits complemented. A vertex of old degree $s$ becomes degree $3-s$ and has shift $3-s$, obtained from its dual shift $-s$ by adding three. For a new edge in coordinate $j$, the old edge sign is $(-1)^{j-1-\sum_{k<j}v_k}$ instead of the required $(-1)^{\sum_{k<j}v_k}$. Conjugating by the vertex sign $\sigma(v)=(-1)^{\sum_j(j-1)v_j}=(-1)^p$ corrects this ratio on every edge. Thus this is an explicit signed cube identification, not a conclusion from cone algebra alone. [F1, step 1.1, construct, algebra]

3.1 The distinguished saddle defines a chain map $f_L:U_L\to W_L\{1\}$. Its four unshifted components, in the state order of step 1.1, are the saddle $C\to A$ reconnecting $23,45$, the saddle $\alpha:P\to B$ reconnecting $36,45$, the merge $m_{45}:C\sqcup O\to C$ joining the circle to arc $45$, and the saddle $C\to D$ reconnecting $16,45$. These are all flips in the same distinguished disk $r$, disjoint from disks $p,q$. Moving two saddles past one another in their disjoint crossing cylinders proves the chain-map equation on each edge; their positive geometric composites agree, and the cube signs on the two faces agree. Ordering $r$ first makes its edge sign $+1$ and multiplies every remaining edge in the $r=1$ face by $-1$. Consequently the full raw cube is precisely $T(f_L)$, with source $U_L$ and target $W_L\{1\}$, not an unsigned or abelian replacement. Each entry of $f_L$ has internal degree zero after the extra target shift one. [F1, step 1.1, step 2.1, construct, algebra]

4.1 The residual map $\rho_L=f_Li_L:Q\to W_L\{1\}$ has only its degree-one component, equal to $\binom{\alpha}{\beta}$, where $\beta:P\to C$ reconnects $12,36$. Indeed the first component is $\alpha 1_P$; the second is $m_{45}ut=t=\beta$, because the born circle immediately merges into arc $45$, cancelling the birth and merge as in [F2]. The remaining saddle band is the band joining the top arc $12$ to the middle arc $36$, with the bottom arc untouched; it has neither a surviving circle nor an additional tube. The other component joins the middle and bottom arcs, with the top arc untouched. Thus both residual entries are specified embedded elementary saddles. For completeness $z\alpha=w\beta$: each side starts with the three $P$ curtain disks, attaches the two indicated untwisted bands to connect them into one disk, and has boundary the alternating cycle of $P$ and $D$. These proper disk surfaces are identified relative to their collars by [F4]. This also verifies the residual chain-map equation directly. [F2, F4, A1, step 2.1, step 3.1, construct]

5.1 Rotate the left diagram by $180$ degrees to obtain the right one, transporting its crossing names and disk orientations. The endpoint action is $(1\,4)(2\,5)(3\,6)$. It fixes $A,D,P$ and exchanges $B,C$. The right $r=0$ face therefore has states $B,P,B\sqcup O,B$ and has its own transported retract onto the same $Q$. Its $r=1$ face $W_R$ has states $A,C,B,D$, with degree-one summands ordered $(C,B)$. The map $S:W_R\to W_L$ identifies the pairing objects by planar isotopy, exchanges these two middle summands, is $1_A$ in degree zero, and is $-1_D$ in degree two. The initial column is unchanged; the last row, after the middle exchange, is $(-z,w)$ instead of $(z,-w)$, and the extra sign on $D$ corrects it. This is precisely the cube permutation sign for interchanging the two remaining crossing coordinates, whose only nontrivial vertex sign is at $(p,q)=(1,1)$. Thus $S$ is an internal degree zero chain isomorphism. The two residual saddles are now $(\beta,\alpha)$ before this exchange, and $S\rho_R=(\alpha,\beta)=\rho_L$. The equality includes the actual bands: rotation exchanges the top-middle and middle-bottom windows in $P$, and the summand exchange puts each back at its specified window. [F1, F2, step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 Apply the source retract of [F3] to $T(f_L)$ and $T(f_R)$, using the actual $(i,p,h)$ in their RII faces. Let $I_L,P_L,H_L$ and $I_R,P_R,H_R$ be its displayed block maps. Let $S_T=\operatorname{diag}(1_Q,S)$ identify their residual cones. Then $\Phi=I_R S_T^{-1}P_L$ and $\Psi=I_LS_TP_R$ are explicit chain maps between the full left and right cubes. Every entry is a finite sum of the already specified local surfaces. The equations $P_LI_L=P_RI_R=1$ imply $\Psi\Phi=I_LP_L=1-dH_L-H_Ld$ and $\Phi\Psi=I_RP_R=1-dH_R-H_Rd$. The common residual cone, with the degree-one summands ordered $(A,P)$, is $(A\oplus P)\{1\}\to(B\oplus C)\{2\}\to D\{3\}$ in degrees $1,2,3$, with matrices $\begin{pmatrix}-x&\alpha\\-y&\beta\end{pmatrix}$ and $(-z,w)$. This displays the actual remaining maps after the reduction, including their signs. [F3, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Under that identification the old $r=0$ face becomes the new $r=1$ face: the RII retract is now on the target of the distinguished saddle map. Its target retract data are the reflected duals $i'=p^\vee$, $p'=i^\vee$, $h'=h^\vee$, conjugated by the stated vertex signs. They satisfy $p'i'=1$, $1-i'p'=dh'+h'd$, $h'i'=p'h'=(h')^2=0$, since these are respectively the duals of $pi=1$, $1-ip=dh+hd$ and $ph=hi=h^2=0$. Use the target-case blocks of [F3]: $I=\begin{pmatrix}1&0\\h'f&i'\end{pmatrix}$, $P=\operatorname{diag}(1,p')$, $H=\operatorname{diag}(0,-h')$. They give the two target reductions onto the reflected dual of the same residual complex. Its residual arrow is the reflected dual row of $\binom{\alpha}{\beta}$, with the vertex signs just computed. Therefore the same residual identification and these target-case blocks give explicit inverse equivalences for the second actual RIII variant. All local surface identities persist because reflection and reversal preserve embedded-surface isotopies and S, T and four-tube. [F1, F2, F3, step 6.1, step 2.2, construct, algebra]

8.1 Each saddle has unshifted internal degree $-1$, so raising the vertex shift by one makes all raw cube differentials degree zero. The RII maps and homotopies of [F2], their transported versions, the two cone reductions of [F3], and $S$ consequently all have internal degree zero. For any fixed orientations of $a,b,c$, corresponding crossings on the two sides involve the same ordered pair of oriented strands with the same overpassing choice, so they have the same signs and the same counts $n_+,n_-$. Applying the common cochain translation $-n_-$ and internal shift $n_+-2n_-$ therefore preserves the displayed equivalences. Reflection reverses the crossing signs, exchanging $n_+,n_-$; the second normalized cube is exactly the reflected cochain dual of the first normalized cube, since $3-s-n_+=n_--s$ and $3-s+n_--2n_+=-s-n_++2n_-$. Thus the second-variant degree bookkeeping in step 2.2 also agrees with the normalized complexes. Finally insert the finite maps and homotopies by [F5], with its homotopy tensor signs. This proves the asserted local equivalences and their planar extensions. [F1, F2, F3, F5, step 6.1, step 7.1, algebra] ∎
