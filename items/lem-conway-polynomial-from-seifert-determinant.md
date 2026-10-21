---
id: lem-conway-polynomial-from-seifert-determinant
kind: lemma
title: "Seifert determinant constructs the normalized Conway polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - def-seifert-s-equivalence-and-conway-normalization
  - def-link-seifert-pairing-and-matrix
  - def-seifert-surface-arc-surgery
  - lem-link-seifert-pairing-well-defined
  - lem-link-seifert-matrix-enlargement-under-arc-surgery
  - lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - thm-linking-number-equals-signed-intersection
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - thm-parametric-transversality
  - thm-mayer-vietoris-sequence-in-singular-homology
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts in Mathematics 175, Springer (1997)"
      url: "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
      locator: "Chapter 8, Theorems 8.5–8.6, printed pp. 82–83: determinant invariance and skein characterization. The local Hopf chart below fixes the sign for the stated positive-push and crossing conventions; the all-links determinant uses the inverse variable on the first matrix."
---
## Statement

Assume full AC. Every nonempty smooth oriented link $L\subset S^3$ bounds a connected compact smooth oriented embedded surface. If $F$ is any such surface with Seifert matrix $V$, and $u$ is a formal Laurent variable, define the Seifert determinant
$$\Theta_L(u):=\det(u^{-1}V-uV^T).$$
It is independent of the surface and integral basis, belongs to $\mathbb Z[u-u^{-1}]$, equals $1$ for the unknot, and satisfies
$$\Theta_{L_+}(u)-\Theta_{L_-}(u)=(u-u^{-1})\Theta_{L_0}(u)$$
for every oriented skein triple. Thus $\Theta_L(u)=\nabla_L(u-u^{-1})$ for the unique Conway polynomial normalized by $\nabla_U=1$ and $\nabla_+-\nabla_-=z\nabla_0$.

## Statement references

[[def-seifert-s-equivalence-and-conway-normalization|The normalized Conway convention and Alexander substitution]]

[[def-link-seifert-pairing-and-matrix|The positive-push Seifert matrix for links]]

## Facts & Assumptions

**Given:** Full AC, a nonempty oriented link, the positive crossing convention, and a connected spanning surface with its Seifert matrix.

[A1] Full AC implies the countable-choice hypotheses for regular projection, Jordan disks, and the Seifert construction. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]

[F1] A regular oriented diagram has finitely many crossings; oriented smoothing yields finitely many disjoint circles, each bounding a disk in the projection sphere. [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]], [[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] The positive-push matrix is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ on integral homology classes, with the pairing independent of representatives and push-off level. [[def-link-seifert-pairing-and-matrix]], [[lem-link-seifert-pairing-well-defined]]

[F3] One link-level embedded arc surgery changes the positive-push matrix by one of the two displayed two-row/two-column block enlargements. [[lem-link-seifert-matrix-enlargement-under-arc-surgery]]

[F6] Any two connected oriented spanning surfaces of the same oriented link are related by finitely many ambient isotopies fixing the boundary and embedded arc surgeries. [[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries]]

[F4] The positive crossing is the right-handed half-twist in the declared diagram convention; linking is the half-sum of mixed crossing signs for a supplied regular diagram. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[thm-linking-number-equals-signed-intersection]], [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]

[F7] Alexander duality identifies reduced complement homology with reduced cohomology of a compact locally contractible subset; finite-dimensional parametric transversality applies to a smooth transverse evaluation family (fixed endpoint neighborhoods are preserved by choosing perturbations supported away from them). [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]], [[thm-parametric-transversality]]

[F5] An embedded arc surgery replaces two disks by the lateral annulus of an embedded product cylinder and preserves the boundary link. [[def-seifert-surface-arc-surgery]]

[F8] Attaching a band to a connected surface along two disjoint boundary intervals adds one free generator to $H_1$ and leaves the old homology as a direct summand. A Mayer--Vietoris cover by the old surface and the band has intersection two intervals, giving quotient $\ker(\mathbb Z^2\to\mathbb Z^2)\cong\mathbb Z$; a loop through the band and back along the old surface generates it. [[thm-mayer-vietoris-sequence-in-singular-homology]]

## Proof

1.1 Choose a regular diagram by [F1]. Smooth every crossing in the orientation-compatible way. Cap each resulting Seifert circle by its disk on the side away from a chosen point at infinity; when disks are nested, place them at distinct nearby heights in nesting order. In disjoint crossing balls attach one half-twisted band for each original crossing, with twist and endpoint orientation chosen to reproduce the given over-under crossing. The disks are disjoint after the height separation, the bands lie in disjoint crossing balls, and their attaching intervals are pairwise disjoint. Hence their union is an embedded oriented surface, and at each crossing the band boundary restores the original two strands. If it has more than one connected component, each component has nonempty boundary, so its second cohomology vanishes by the compact-surface normal form. Alexander duality makes the complement of their union connected; as an open subset of a smooth three-manifold it is locally path-connected, hence path-connected. Choose points in the interiors of two distinct surface components and short transverse arcs from them into the complement. Join the exterior endpoints by a path in that complement, then smooth the path relative to its short endpoint arcs. First perturb its unfixed interior by bump-supported chart variations with independent value and derivative parameters on a finite cover. The $1$-jet evaluation is transverse to the zero section of the $3$-dimensional tangent bundle; since the path parameter has dimension one, a generic slice is immersive. A compact immersed arc is injective on a uniform neighbourhood of the diagonal in its parameter square. On the remaining compact set of distinct parameter pairs, use independent bump-supported translations on disjoint parameter intervals; the two-point evaluation is transverse to the diagonal in the $3$-manifold squared, and the parameter-pair domain has dimension two. Parametric transversality in [F7] therefore gives a slice with no double points. Keep the endpoint collars fixed and choose both perturbations small enough to stay in the complement and preserve the immersion. The resulting path is an embedded arc whose interior misses the surfaces. A small product neighbourhood of the arc performs the disk replacement in [F5], joining the components without changing $L$. Choose the tube framing that extends the two surface orientations. Repeating this finite operation leaves one connected surface with boundary $L$. [A1, F1, F5, F7, given, construct]

1.2 The local sign is fixed directly by the declared convention. In oriented $(x,y,z)$ space take $K(t)=(\cos t,\sin t,0)$ and $J(s)=(1+\cos s,0,-\sin s)$. The oriented disk bounded by $K$ meets $J$ once with tangent $+\partial_z$, so their linking is $+1$. Project with viewing normal $(0,1,e)$, $e=1/2$, and positive plane coordinates $(w,x)$, $w=z-ey$. The crossings have $0<x<1$ given by $(1-e^2)x^2-2x+e^2=0$ and opposite nonzero $w$. The projected tangents are $v_K=(-ex,w/e)$ and $v_J=(1-x,w)$, while viewing heights are $-w/e$ and $ew$. Thus $J$ is over at $w>0$, with determinant $w((1-x)/e+ex)>0$, and $K$ is over at $w<0$, with the negative of that expression, again positive. This is a two-positive-crossing Hopf diagram. Its two Seifert disks and two bands form an annulus. In any oriented annulus with boundary $K\cup J$, equally oriented parallel cores transport to $K$ and $-J$, so their linking and the positive-push self-pairing are $-\operatorname{lk}(K,J)$. Hence this annulus has matrix $[-1]$. Changing one crossing cancels the two crossings and gives an unlink annulus, with matrix $[0]$ by the same identity. Their local band comparison therefore changes the new diagonal entry by $N_+-N_-=-1$. [F1, F2, F4, algebra, construct]

2.1 By [F6], compare any two connected surfaces using its finite sequence. Ambient isotopy preserves the positive normal and linking, and a basis change $V\mapsto P^TVP$ multiplies the determinant by $(\det P)^2=1$. Put $M=u^{-1}V-uV^T$. For the first enlargement of [F3], the new diagonal block of $u^{-1}V'-uV'^T$ is $\begin{pmatrix}z(u^{-1}-u)&-u\\u^{-1}&0\end{pmatrix}$; for the second it is $\begin{pmatrix}z(u^{-1}-u)&u^{-1}\\-u&0\end{pmatrix}$. In both cases the old-to-new and new-to-old blocks have zero second column and row respectively, the new block has determinant one, and its inverse has first diagonal entry zero. Its Schur complement is therefore exactly $M$. Each enlargement preserves the determinant, as does its reverse. This proves surface and basis independence of $\Theta_L(u)$. [F2, F3, F6, step 1.1, algebra]

3.1 Construct the Seifert surface for $L_0$ by step 1.1 while keeping its two smoothing strips fixed inside the crossing ball; the diagram disks, bands, and any connecting tubes can be chosen outside that ball except for these strips. Attach the local band with either half twist to obtain surfaces for $L_+$ and $L_-$. Since the old surface is connected, a path between the attaching intervals gives a cycle through the band; [F8] shows that it extends the old basis by one generator. Choose all old basis cycles outside the ball. The two new matrices agree except in the last diagonal entry: all old cycles and their pushes avoid the changed band, and the new cycle agrees outside it. The difference in the last self-pairing is local: the outside portions of a cycle and its parallel agree and cancel in the linking difference. Close the two local ribbons by identical outside strips as in the Hopf/unlink annuli of step 1.2. This identifies that difference with the computed value $N_+-N_-=-1$. In $u^{-1}V-uV^T$ the last diagonal entry consequently changes by $(u^{-1}-u)(-1)=u-u^{-1}$. By [F8], the upper-left minor is exactly the determinant for $L_0$, so expansion in the last diagonal entry proves the positive skein identity. [F1, F2, F4, F8, step 1.1, step 2.1, step 1.2, algebra, construct]

4.1 For the unknot use a disk, whose matrix is empty and whose determinant is $1$. For an $r$-component unlink with $r\ge1$, add a Reidemeister-I curl to one component. The positive and negative curl choices are both isotopic to the same unlink, while the oriented smoothing is the $(r+1)$-component unlink. The skein relation gives $(u-u^{-1})\Theta_{U_{r+1}}=0$, so $\Theta_{U_{r+1}}=0$ because the Laurent polynomial ring is a domain; starting with $\Theta_{U_1}=1$ establishes all unlink base values. Fix a diagram with basepoints and an order of its components. A crossing is bad if its first encountered branch in the resulting ordered traversal is under. Induct on the pair (crossing count, number of bad crossings), ordered lexicographically. Switching a selected bad crossing lowers the second entry without changing the crossing count; smoothing lowers the first. Repeated switches turn the diagram into a descending diagram, which is an unlink: cut each component at its basepoint, lift its first encountered arc above every later arc, and pull components off in traversal order, placing earlier components above later ones. Removing the resulting disjoint descending arcs one at a time by isotopy leaves disjoint simple circles. The skein relation and unlink values therefore express $\Theta_L$ inductively as a polynomial in $z=u-u^{-1}$ with integer coefficients. The same induction shows uniqueness for any invariant satisfying the unknot value and skein relation, since the same curl argument forces every multi-component unlink value to be zero. This proves the determinant gives exactly the normalized Conway polynomial with the stated normalization. [step 1.1, step 2.1, step 3.1, induction, algebra] ∎
