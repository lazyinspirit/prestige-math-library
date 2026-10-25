---
id: "cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity"
kind: "counterexample"
title: "A homology equivalence need not be a homotopy equivalence without simple connectivity"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","lem-cw-quotient-induces-relative-singular-homology-isomorphisms","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-homology-of-spheres","def-hurewicz-homomorphism","prop-the-first-hurewicz-map-in-degree-one-is-abelianization","thm-seifert-van-kampen","thm-fundamental-group-of-finite-wedge-of-circles","thm-fundamental-group-of-the-circle","prop-retracts-inject-fundamental-groups","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","prop-zero-th-singular-homology-is-free-on-path-components","thm-quotient-universal-property","lem-interval-exponential-law-and-quotient-homotopies","cor-contractible-nonempty-spaces-have-the-homology-of-a-point"]
sources:
  references:
    - title: Hatcher discussion after Corollary 4.33; explicit two-cell witness
        checked locally
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement refuted

An integral homology equivalence between connected finite CW complexes need not be a homotopy equivalence when simple connectivity is omitted. Explicitly, let $W=S^1_a\vee S^1_b$, attach one $2$-cell by the loop $a^2b^{-3}$, and call the resulting CW complex $X$. The map $f:S^1\to X$ represented by $ab^{-1}$ induces isomorphisms on all integral homology groups but is not a homotopy equivalence. This counterexample is choice-free.

## Facts & Assumptions

[F1] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs a CW complex from the displayed finite cellular attaching maps and gives its ordinary quotient topology, characteristic disks and closed subcomplexes.

[F2] [[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]] makes the actual quotient map $H_j(Y,A)\to H_j(Y/A,*)$ an isomorphism for a nonempty CW subcomplex, naturally and without choice.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives exactness. Its connecting map sends a relative cycle to its boundary in the subspace; postcomposition commutes with this operation, giving naturality for the characteristic-disk map below.

[F4] [[cor-homology-of-spheres]] computes the integral groups of $S^1$ and $S^2$, including their positive generators and vanishing in other positive degrees.

[F5] [[def-hurewicz-homomorphism]] defines $h([u])=u_*[S^1]$ naturally, while [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] makes this degree-one map a homomorphism, so it is additive under concatenation and changes sign under inversion. These clauses are choice-free.

[F6] [[thm-seifert-van-kampen]] gives the inclusion-induced pushout for an open path-connected cover with path-connected overlap.

[F7] [[thm-fundamental-group-of-finite-wedge-of-circles]] makes $\pi_1(W)$ free on the two labelled loops. [[thm-fundamental-group-of-the-circle]] gives the cyclic, hence abelian, group of $S^1$.

[F8] [[prop-retracts-inject-fundamental-groups]] identifies fundamental groups under explicit deformation retractions. [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives the basepoint-track correction, so an unbased homotopy equivalence also induces fundamental-group isomorphisms at its specified source point.

[F9] [[prop-zero-th-singular-homology-is-free-on-path-components]] gives one integral $H_0$ generator for a nonempty path-connected space, with any point representing that generator.

[F10] [[thm-quotient-universal-property]] and [[lem-interval-exponential-law-and-quotient-homotopies]] justify the ordinary quotient maps and radial homotopies, including their time parameter.

[F11] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] applies to the disk under straight-line contraction.

## Counterexample

**Given:** Take two oriented interval loops $a,b$ at a common vertex $v$. Let $r:S^1\to W$ traverse $a$ twice positively and $b$ three times negatively, using five equal parameter intervals. Set $X=(W\sqcup D^2)/(z\sim r(z)\text{ for }z\in S^1)$, and let $\chi:D^2\to X$ be its characteristic map. Coefficients in the entire homology calculation are $\mathbb Z$.

1.1 The wedge $W$ has one vertex and two open edges, and $r$ is a continuous loop by endpoint agreement and finite pasting. It is a cellular attaching map into that $1$-skeleton with finite support, so [F1] gives the stated finite CW space $X$, with $W$ a closed subcomplex and $\chi$ a homeomorphism on the open disk onto its cell. Every point of $W$ is connected to $v$ along its edge, and every interior-disk point is connected radially to a boundary point and then to $v$. Thus both $W$ and $X$ are path connected. The quotient $W/S^1_a$ is $S^1_b$, with its usual quotient interval topology. The quotient $X/W$ is $D^2/S^1\cong S^2$: identify the open disk with $\mathbb R^2$ by $z\mapsto z/(1-|z|)$, follow by inverse stereographic projection, and send the collapsed boundary to infinity. Continuity at that point follows because escaping every bounded set corresponds to approaching the disk boundary; the same description supplies inverse continuity. These are the actual quotient identifications, by [F10], not merely homology equivalences inferred from a cellular complex. [F1, F10, given]

2.1 Let $k:S^1_a\to W$ and $s:S^1_b\to W$ be inclusions, and $p_a,p_b$ the maps collapsing the other loop. They are continuous by the quotient interval test and satisfy $p_ak=1$, $p_bs=1$, with constant cross composites. The pair exact sequence [F3], the vanishing of positive point homology from [F4], and the $H_0$ isomorphism for the path-connected $S^1_b$ from [F9] show directly that $H_j(S^1_b)\to H_j(S^1_b,*)$ is an isomorphism for $j>0$. Thus [F2] and [F4] make $H_j(W,S^1_a)=H_j(S^1_b,*)$ zero for $j\ge2$ and $\mathbb Z$ for $j=1$. The pair sequence [F3] gives $H_j(W)=0$ for $j\ge2$. In degree one it gives $0\to\mathbb Z\xrightarrow{k_*}H_1(W)\xrightarrow{(p_b)_*}\mathbb Z\to0$: the connecting arrow to $H_0(S^1_a)$ vanishes because its next map to $H_0(W)$ is an isomorphism by [F9]. Its right inverse is $s_*$. For any $z\in H_1(W)$, $z-s_*(p_b)_*z$ lies in the image of $k_*$, and applying $(p_a)_*$ gives its unique coefficient. Therefore $H_1(W)=\mathbb Z\alpha\oplus\mathbb Z\beta$, where $\alpha=a_*[S^1]$ and $\beta=b_*[S^1]$, with coordinate inverse $((p_a)_*,(p_b)_*)$. Also $H_0(W)=\mathbb Z$. This proves the wedge calculation directly without invoking the higher-sphere wedge lemma outside its $n\ge2$ hypothesis. [F2, F3, F4, F9, step 1.1]

2.2 Compute the fundamental group using an actual open cover. In the disk coordinates of $\chi$ put $U=X\setminus\chi(\{|z|\le1/3\})$ and $V=\chi(\{|z|<1\})$. The first is open by the quotient criterion: its inverse image is all of $W$ and the relatively open disk annulus $|z|>1/3$. The second is open because its inverse image is the open disk and the empty subset of $W$. They cover $X$ and intersect in $1/3<|z|<1$, an annulus. The radial homotopy $ru\mapsto((1-t)r+t)u$ on the annular part of $U$, fixing $W$, descends by [F10] and retracts $U$ onto $W$. The disk $V$ is contractible and the annulus retracts onto a circle. All three spaces are path connected. Choose a basepoint in the annulus and the radial path from it to $v=r(1)$ on $W$; the retraction's basepoint track is this path, so [F8] supplies the based comparison. Its positive annulus generator retracts to the attaching word $a^2b^{-3}$, with this path fixing the whisker. Thus [F6, F7] give $$\pi_1(X,v)\cong\langle a,b\mid a^2b^{-3}=1\rangle.$$ Indeed the pushout is the free group on $a,b$ modulo the normal closure of that word: a map from it to any group is exactly a choice of images of $a,b$ satisfying that relation, which is the van Kampen universal property for this cover. [F6, F7, F8, F10, step 1.1]

3.1 By [F2], the pair $(X,W)$ has $H_2(X,W)=\mathbb Z$ and all other positive relative groups zero, using $X/W=S^2$ and [F4]. The characteristic-disk map $\chi:(D^2,S^1)\to(X,W)$ induces an isomorphism in relative homology: the quotient square of [F2] identifies it with the homeomorphism $D^2/S^1\to X/W$ from step 1.1. The disk has no positive homology by [F11], so the pair sequence [F3] makes $\delta:H_2(D^2,S^1)\to H_1(S^1)$ an isomorphism. Let $[D^2,S^1]$ be the unique class mapping to the positive circle generator of [F4], and put $c=\chi_*[D^2,S^1]$. Naturality of the boundary map [F3] gives $\delta c=r_*[S^1]$. By the degree-one additivity and inversion formula in [F5] and the actual word defining $r$, this is $2\alpha-3\beta$. Thus the pair sequence reduces in its only nonzero positive segment to $$0\longrightarrow H_2(X)\longrightarrow\mathbb Z\xrightarrow{t\mapsto(2t,-3t)}\mathbb Z^2\longrightarrow H_1(X)\longrightarrow0.$$ In degrees at least three its surrounding groups vanish, so $H_j(X)=0$ there. The displayed integer map is injective, since $2t=0$ implies $t=0$ in $\mathbb Z$, so $H_2(X)=0$ too. [F2, F3, F4, F5, F11, step 1.1, step 2.1]

4.1 The homomorphism $\lambda:\mathbb Z^2\to\mathbb Z$, $\lambda(u,v)=3u+2v$, kills $(2,-3)$ and sends $(1,-1)$ to $1$. It induces an isomorphism $\mathbb Z^2/\mathbb Z(2,-3)\to\mathbb Z$: for every $(u,v)$, $$(u,v)-(3u+2v)(1,-1)=-(u+v)(2,-3),$$ so its inverse sends $k$ to $k[(1,-1)]$. The two formulas compose to the identity, proving both injectivity and surjectivity. Define $f:S^1\to X$ by first following $a$ and then $b^{-1}$, using the two half-intervals. By [F5], $f_*[S^1]$ has coordinates $(1,-1)$ modulo the attaching vector, so the just-proved isomorphism sends it to $1$. Hence $f_*$ is an isomorphism on $H_1$. In degree zero it takes a point to the sole component and is an isomorphism by [F9]. In every degree at least two both source and target groups vanish by [F4] and step 3.1. This verifies the promised integral homology equivalence in every degree, including its generator normalization. [F4, F5, F9, step 3.1]

5.1 Send $a$ to the transposition $A=(12)$ and $b$ to the cycle $B=(123)$, acting as permutations of $\{1,2,3\}$ with rightmost composition first. They obey $A^2=B^3=1$, so step 2.2's universal property gives a homomorphism from $\pi_1(X)$ to that permutation group. Its image is nonabelian: $(AB)(1)=1$, whereas $(BA)(1)=3$. In fact it is all $S_3$: $ABA=B^{-1}$, so the six distinct permutations $1,B,B^2,A,AB,AB^2$ comprise the subgroup generated by $A,B$ and exhaust the permutations of three letters. Therefore $\pi_1(X)$ is nonabelian, while $\pi_1(S^1)$ is abelian by [F7]. A homotopy equivalence would induce an isomorphism of these groups by [F8], impossible. Thus the particular $f$ in step 4.1 is not a homotopy equivalence despite all its integral homology isomorphisms. [F7, F8, step 4.1, step 2.2]

6.1 This is a finite nonempty connected CW witness with exactly one vertex, two edges and one $2$-cell; no wild space or missing CW hypothesis is involved. The zero higher homology groups and the one-dimensional generator map were calculated, and the attaching vector has no kernel despite its mixed signs. The annular cover excludes the disk center but includes all boundary identifications in $U$; its homotopy fixes them, as required for quotient descent. The finite permutation calculation witnesses the failed fundamental-group conclusion. Only finitely many cells, maps and representatives are instantiated, and all supplier clauses used above are choice-free. No arbitrary-cell choice or general Hurewicz isomorphism is used. [F1, F2, F5, F10, step 1.1, step 3.1, step 4.1, step 2.2, step 5.1] ∎
