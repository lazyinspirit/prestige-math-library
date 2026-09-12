---
id: "lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes"
kind: "lemma"
title: "Cellular mapping cylinders and relative cylinders are CW complexes"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","lem-compact-cw-images-have-finite-cell-support-without-choice","def-cw-complex-with-closure-finiteness-and-weak-topology","def-skeleta-cw-subcomplex-and-relative-cw-complex","lem-interval-exponential-law-and-quotient-homotopies","thm-quotient-universal-property","prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant","prop-higher-homotopy-basepoint-transport-and-moving-homotopies"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, proof of Theorem4.5 p347 and Proposition4.15
        pp353–354; ordinary CW topology and relative cylinder details supplied
        locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $X,Y$ be CW complexes with supplied characteristic maps and a common CW subcomplex $A$. Let $f:X\to Y$ be cellular and equal to the identity on $A$. Form the ordinary quotient
$$W=(Y\sqcup(X\times I))/\big((x,0)\sim f(x),\ (a,t)\sim a\text{ for }a\in A\big).$$
Then $W$ is a CW complex. Its embedded endpoint copies $j(X)$, $j(x)=[x,1]$, and $k(Y)$ are subcomplexes meeting in their common $A$. Its cells are those of $Y$, those of the free-end $X\setminus A$, and one $(r+1)$-cell $e^r\times(0,1)$ for every $r$-cell of $X\setminus A$.

The map $r:W\to Y$, $r([x,s])=f(x)$ and $r(k(y))=y$, is a strong deformation retraction in the sense that the included $Y$ is fixed throughout its deformation. The deformation also fixes $A$, and $r$ induces a bijection on components and isomorphisms on all positive homotopy groups at every basepoint of $W$.

When $A$ is empty this is the ordinary mapping cylinder. If $X$ and $Y$ are finite, then $W$ is finite; more precisely the cells outside $j(X)$ are the cells of $Y\setminus A$ and the listed prism cells. These statements require no choice principle.

## Facts & Assumptions

[F1] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] proves that ascending-dimensional attachments with supplied cellular finite-support boundaries give a Hausdorff CW complex, its closed subcomplex embeddings and its map-out criterion, without choice.

[F2] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] gives finite cell support for a specified compact-domain map into a CW complex without choice.

[F3] [[lem-interval-exponential-law-and-quotient-homotopies]] gives the interval exponential law. Together with the weak topology in [F4], it gives the characteristic-disk-cylinder continuity test derived below. The radial identification of $D^r\times I$ with a closed $(r+1)$-disk is also constructed below.

[F4] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] and [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] give supplied characteristic maps, finite closed-cell support and the subcomplex topology.

[F5] [[lem-interval-exponential-law-and-quotient-homotopies]] and [[thm-quotient-universal-property]] give ordinary quotient descent, including after product with $I$.

[F6] [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]] proves based homotopy invariance. [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives the isomorphisms for moving basepoint tracks.

## Proof

**Given:** The CW data, common subcomplex and cellular map in the statement. All copies of $A$ below are identified by the supplied identity.

1.1 Construct the endpoint space $P=Y\cup_A X$ as follows. Start with $Y$, adjoin all vertices of $X\setminus A$, and then attach the cells of $X\setminus A$ in increasing dimension using their original boundary maps, with points in $A$ interpreted in $Y$. Each boundary map remains cellular and meets only finitely many earlier cells by closure finiteness in $X$. Thus [F1] makes $P$ a CW complex with the claimed endpoint cells. There are no identifications except those already in $X,Y$ and the common $A$. The final disk test agrees with the ordinary amalgamated quotient topology: a function out is continuous exactly when its restrictions to $X,Y$ are continuous and agree on $A$. Both are subcomplexes and retain their given CW topologies. For the latter assertion, their closed-set tests use exactly their original characteristic disks; [F4] identifies these tests with the original topologies. [F1, F4, given]

2.1 We first record two explicit product facts. Regard $D^r\times I$, after centering the interval coordinate, as the unit ball for the norm $\max(\lVert u\rVert_2,|s|)$. Radial rescaling between this norm and the Euclidean norm gives a homeomorphism of this product with a closed $(r+1)$-disk and carries its top, bottom and side to the boundary. Also, a function $H:Z\times I\to T$ on a CW complex is continuous whenever its composite with every characteristic-disk cylinder is continuous: [F3] transposes those composites to continuous maps from the characteristic disks into $C_0(I,T)$; they agree on identified points, so [F4]'s weak-topology quotient criterion descends them to a continuous map $Z\to C_0(I,T)$; untransposing by [F3] gives $H$. Now attach the prisms in increasing source dimension $r$. Before stage $r$, the current space is $P$ with prisms from source dimensions less than $r$. Inductively it has a continuous prescribed map from $X^{r-1}\times I$ by this criterion: every characteristic prism there is already an attached disk, or is constant in the interval on a cell of $A$. For $r=0$ there is no side to define. For an $r$-cell of $X\setminus A$ with characteristic map $\chi:D^r\to X$, use the displayed disk $D^r\times I$. Map its top by $j\chi$, its bottom by $kf\chi$, and its side by $(u,s)\mapsto[\chi(u),s]$. The side is continuous by composing the preceding cylinder map with $\chi|_{S^{r-1}}\times\mathrm{id}$. When $\chi(u)\in A$ its value is the common point, independent of $s$. The prescriptions agree at corners, so closed pasting gives a continuous attaching map. Top and bottom land in dimension at most $r$, the latter because $f$ is cellular; the side uses lower source cells and their prisms of dimension at most $r$. The boundary has finite support: the top does by closure finiteness in $X$, the bottom $f\chi$ does by [F2], and the side uses only the finitely many lower source cells in the boundary of this source cell and their prisms, together with their already finite boundary supports. Thus [F1], applied to each finite initial sequence of attachment stages, gives a CW complex after stage $r$. The same characteristic-cylinder criterion proves continuity of the extended map on $X^r\times I$, completing the induction. Finally [F1] applied to all these supplied ascending-dimensional attachments gives a CW complex $W'$ with endpoint subcomplex $P$. No topology of the eventual quotient is assumed in this construction. [F1, F2, F3, F4, step 1.1]

3.1 The underlying set of $W'$ is the underlying set of $W$: an interior prism point is uniquely specified by a point of an open cell of $X\setminus A$ and a parameter in $(0,1)$, while its boundary identifications are exactly the displayed relations. Its topology is also that ordinary quotient topology. For any space $T$, a function $h:W\to T$ is continuous for the quotient topology exactly when its maps on $Y$ and $X\times I$ are continuous and respect the relations. By step 2.1, continuity on $X\times I$ is equivalent to continuity after every characteristic prism of $X$. The prisms for cells in $A$ are constant in the interval and are already tested on $Y$; the other prisms are precisely the new characteristic disks of $W'$. The restrictions at their free ends, together with $Y$, test continuity on $P$. Hence the condition is exactly the final map-out criterion for $W'$ in [F1]. To see that this equality of map-out tests proves equality of topologies, apply it to the characteristic map of an arbitrary subset into the two-point space with open sets $\varnothing,\{1\},\{0,1\}$: its continuity is exactly openness of that subset. Thus $W=W'$ topologically. This proves Hausdorffness, the actual CW structure, and the asserted embedded subcomplexes and intersection. [F1, F4, F5, step 1.1, step 2.1]

4.1 The maps $r([x,s])=f(x)$ and $r(k(y))=y$ respect both equivalence relations, because $f(a)=a$. By [F5] they descend continuously and satisfy $rj=f$ and $rk=\mathrm{id}$. Likewise $$D(k(y),t)=k(y),\qquad D([x,s],t)=[x,(1-t)s]$$ is well defined on the extra collapsed $A$ tracks and continuous by quotient-times-interval descent [F5]. It begins at $\mathrm{id}_W$, ends at $kr$, and fixes $k(Y)$, including $A$, at every time. This proves the stated strong deformation retraction. [F5, step 3.1]

5.1 The component maps of $r,k$ are inverse: $rk$ is the identity and each point is joined to its $kr$ image by its track in $D$. For positive degree and arbitrary $w\in W$, let $y=r(w)$ and $\gamma(t)=D(w,t)$. At the basepoint $k(y)$, [F6] applied to $D$, which fixes that point, makes $k_*:\pi_n(Y,y)\to\pi_n(W,k(y))$ an isomorphism. At $w$, the moving-basepoint formula in [F6] gives $$\mathrm{id}_{\pi_n(W,w)}=\beta_\gamma k_*r_*.$$ The first two maps on the right are isomorphisms, so $r_*:\pi_n(W,w)\to\pi_n(Y,y)$ is their inverse composite. This covers every basepoint, including those in prism interiors, without choosing one point per component. [F6, step 4.1]

6.1 There is one prism cell of dimension $r+1$ for every $r$-cell of $X\setminus A$, and no prism cell over $A$. The remaining cells are exactly those of $P$. This proves the cell count, including the stated list outside $j(X)$ and the finite case. If $A$ is empty the additional track relation disappears, giving the ordinary mapping cylinder; if $A=X$, there are no new endpoint or prism cells and $W=Y$. Empty $X$ also gives $Y$; if the whole data are empty, all assertions are vacuous with the unique maps. For $r=0$ the prism is an interval with its two prescribed endpoints, which may coincide. Nonregular attaching maps and repeated boundary points are already accommodated by the quotient gluing in steps 2.1–3.1. All data and the homotopy are specified, finite support is supplied by [F2] without choices, and [F1] uses specified recursion. No AC is used. [F1, F2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
