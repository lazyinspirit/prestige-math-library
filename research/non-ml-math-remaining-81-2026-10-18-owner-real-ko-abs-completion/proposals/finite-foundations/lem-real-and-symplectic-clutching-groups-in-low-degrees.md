---
id: lem-real-and-symplectic-clutching-groups-in-low-degrees
kind: lemma
title: "Real and symplectic clutching groups in low degrees"
status: draft
origin: session
page: real-clifford-modules-ko-and-abs-orientations
deps: [def-real-ko-and-ksp-grothendieck-groups, def-reduced-relative-ko-and-ko-compact-support, lem-finite-cw-relative-ko-triples-and-homotopy-invariance, thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-numerable-fiber-bundles-are-hurewicz-fibrations, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, thm-higher-dimensional-spheres-are-simply-connected, lem-pi-three-so-three-generated-by-the-quaternion-double-cover, lem-the-second-homotopy-group-of-so-three-vanishes, thm-path-lifting-for-covering-maps, thm-homotopy-lifting-for-covering-maps, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. F. Atiyah, K-Theory, §§1.3–1.4 and 2.4 (complex source; real arguments supplied locally)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

Assume AC. Clutching and stabilization give natural additive identifications, for $n\geq1$,

$$\widetilde {KO}^0(S^n)\cong\underset r{\operatorname{colim}}\,\pi_{n-1}(O(r)),\qquad\widetilde {KSp}^0(S^n)\cong\underset r{\operatorname{colim}}\,\pi_{n-1}(Sp(r)).$$

At $n=1$ the right sides mean component groups under block sum. Then $KO^0(*)=KSp^0(*)=\mathbb Z$ by real and quaternionic dimension, respectively, and

$$KO^{-1}(*)=\mathbb Z/2,\qquad KO^{-2}(*)=\mathbb Z/2,\qquad KO^{-3}(*)=0,$$

$$KSp^{-1}(*)=KSp^{-2}(*)=KSp^{-3}(*)=0.$$

Here $Sp(r)$ is the compact group of right-$\mathbb H$-linear isometries of $\mathbb H^r$. These calculations use no Bott periodicity or KO coefficient table.

## Facts & Assumptions

**Given:** AC, the standard block inclusions of compact matrix groups, and $n\geq1$.

[F1] The real clutching construction and its hemisphere gauge equivalence are proved in [[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]. Quaternionic disk triviality, complements and homotopy invariance are supplied in [[lem-finite-cw-relative-ko-triples-and-homotopy-invariance]].

[F2] A fibration has its homotopy exact sequence ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]), and numerable fiber bundles are fibrations under AC ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F3] $\pi_k(S^d)=0$ for $k<d$, and $S^d$ is simply connected for $d\geq2$ ([[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]], [[thm-higher-dimensional-spheres-are-simply-connected]]).

[F5] Covering paths and homotopies lift uniquely ([[thm-path-lifting-for-covering-maps]], [[thm-homotopy-lifting-for-covering-maps]]).

[F4] Unit-quaternion conjugation gives the two-sheeted covering $S^3\to SO(3)$ with kernel $\{\pm1\}$ ([[lem-pi-three-so-three-generated-by-the-quaternion-double-cover]]); in particular $\pi_2(SO(3))=0$ ([[lem-the-second-homotopy-group-of-so-three-vanishes]]).

## Proof

1.1 Cover $S^n$ by two disks. Disk bundles are trivial by [F1]; hence a rank-$r$ real bundle has transition map $S^{n-1}\to GL_r(\mathbb R)$, deformable by polar normalization into $O(r)$. The same proof over $\mathbb H$ gives transition maps into $Sp(r)$: positive square roots exist by the convergent real matrix power-series construction, and all matrices commute with right scalar multiplication. An isomorphism between clutched bundles consists of two disk-defined gauge matrices, exactly as in [F1]; a homotopy of transitions gives an isomorphism by homotopy invariance. Thus the clutching and gauge classification holds over $\mathbb H$ as well. [F1, construct, algebra]

1.2 For $n\geq2$, choose a point on the connected equator and multiply a transition map by the inverse of its value there. This normalizes it to a based map into the identity component. Disk gauges restrict to maps homotopic to constants; after this normalization their only residual action is conjugation by a constant group element. This action is trivial for $Sp(r)$ once its path connectedness is proved in step 2.1. For the real case conjugation by a determinant-positive constant is trivial in homotopy by path connectedness of $SO(r)$; conjugation by a reflection $R$ becomes trivial after adding one coordinate, because $\operatorname{diag}(R,-1)\in SO(r+1)$ is path connected to identity and conjugates $\operatorname{diag}(g,1)$ in exactly the same way as $R$ conjugates $g$. Therefore the real orientation-orbit ambiguity disappears on stabilization. For $n=1$, a transition on $S^0$ is a pair of matrices; change gauges to make the first identity. The component of the second is the complete invariant, since each hemisphere is an interval. This yields the component-group formulation. [F1, step 1.1, construct]

1.3 Direct sum of bundles corresponds to block sum of transitions. Stable block sum agrees with homotopy-group addition: in any topological group pointwise multiplication agrees with concatenation on based homotopy classes, by cutting a square into horizontal and vertical paths; after moving one block into the other by a path of real block rotations, the two commuting block matrices multiply to the block sum. For $\pi_0$ the same block movement proves the component assertion. Every stable class has an additive inverse because $g\oplus g^{-1}$ contracts by $\operatorname{diag}(g,I)R_t\operatorname{diag}(I,g^{-1})R_t^{-1}$ from $t=0$ to $\pi/2$, with $R_t$ the two-block rotation. Group completion therefore introduces no new stable classes. Conversely, equality of reduced differences is stable isomorphism after a common trivial summand by [F1], and the clutching criterion in steps 1.1–1.2 identifies exactly the same stable transitions. This proves both stated colimit identifications; it does not silently identify finite-rank unoriented bundles with a based homotopy group. [F1, step 1.1, step 1.2, algebra, construct]

2.1 The last-column maps $SO(r)\to SO(r+1)\to S^r$ and $Sp(r-1)\to Sp(r)\to S^{4r-1}$ are locally trivial bundles. To see local sections near a unit vector $v_0$, first choose an orthonormal basis with last vector $v_0$. For $v$ near $v_0$, project the other basis vectors onto $v^\perp$ and Gram–Schmidt them; their Gram determinants stay nonzero nearby. Append $v$ as last column. In the real case keep the orientation positive by the sign chosen at $v_0$; it remains positive by continuity. In the quaternionic case use the right-Hermitian inner product and divide by positive real lengths; the resulting frame change is right-linear. Translate these local sections to all points. Their stabilizers are exactly the indicated smaller groups. A finite partition on each compact sphere makes the bundles numerable, so [F2] applies. Starting with $SO(2)$, the circle of plane rotations, and $Sp(1)=S^3$, the component part of the exact sequence and connectedness of the spheres inductively prove connectedness of all $SO(r)$ for $r\geq2$ and all $Sp(r)$ for $r\geq1$. The groups $SO(1)$ and $Sp(0)$ are points. [F2, F3, construct]

2.2 The determinant map $O(r)\to\{\pm1\}$ is onto for $r\geq1$, with fibers $SO(r)$ and a reflection translate of it. Step 2.1 therefore proves $\pi_0(O(r))=\mathbb Z/2$. Stabilization preserves determinant, and block sum multiplies determinants. Thus the first colimit is $\mathbb Z/2$. The symplectic component colimit is zero by the same connectedness result. [step 2.1, algebra]

3.1 The covering in [F4] has simply connected total space by [F3]. By [F5], lifting a loop in $SO(3)$ from $1\in S^3$ gives endpoint $1$ or $-1$. This is unchanged by based homotopy, is multiplicative under loop concatenation because the cover is a group homomorphism, and has kernel the loops whose lifts close. Such a closed lift contracts in $S^3$ by [F3], so the kernel is zero. A path from $1$ to $-1$ in $S^3$ projects to a loop, showing surjectivity. Hence $\pi_1(SO(3))=\mathbb Z/2$. The second group is zero by [F4]. [F3, F4, F5, construct]

3.2 For $r\geq3$, the exact sequence of $SO(r)\to SO(r+1)\to S^r$ and $\pi_2(S^r)=\pi_1(S^r)=0$ give an isomorphism on $\pi_1$. Therefore the stable first group is the $\mathbb Z/2$ of step 3.1. For $r=3$, the segment $\pi_2(SO(3))\to\pi_2(SO(4))\to\pi_2(S^3)=0$ shows $\pi_2(SO(4))=0$, since its source is zero; no false assertion that $\pi_3(S^3)=0$ is used. For $r\geq4$ both $\pi_3(S^r)$ and $\pi_2(S^r)$ vanish by [F3], so stabilization on $\pi_2$ is an isomorphism and its stable value is zero. Based positive homotopy groups of $O(r)$ equal those of its identity component. [F2, F3, step 3.1, algebra]

4.1 For $Sp(1)=S^3$, [F3] gives $\pi_1=\pi_2=0$, and step 2.1 gives $\pi_0=0$. For $r\geq2$ the sphere in $Sp(r-1)\to Sp(r)\to S^{4r-1}$ has dimension at least seven. Its homotopy groups in degrees one, two and three vanish by [F3]. The exact sequence in [F2] therefore makes stabilization an isomorphism on $\pi_1$ and $\pi_2$; the component groups remain zero. Finally bundles over a point are classified by their nonnegative integer real or quaternionic dimension, whose group completion is $\mathbb Z$. The definition $KO^{-j}(*)=\widetilde {KO}^0(S^j)$, its quaternionic analogue, and the colimit identifications of step 1.3 now yield every displayed coefficient. No periodicity assertion enters any step. [F1, F2, F3, step 1.3, step 2.1, step 2.2, step 3.2, algebra] ∎
