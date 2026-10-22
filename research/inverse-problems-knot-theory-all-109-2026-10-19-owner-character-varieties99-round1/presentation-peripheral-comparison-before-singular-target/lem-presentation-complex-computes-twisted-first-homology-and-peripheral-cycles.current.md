---
id: lem-presentation-complex-computes-twisted-first-homology-and-peripheral-cycles
kind: lemma
title: "Presentation chains compute twisted first homology and peripheral cycles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-fundamental-group-of-finite-wedge-of-circles
  - thm-seifert-van-kampen
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - thm-universal-cover-existence
  - thm-covering-space-lifting-criterion
  - def-right-group-ring-action-on-the-chains-of-a-universal-cover
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-cellular-homology-computes-singular-homology
  - thm-free-modules-are-projective-with-choice-boundary
  - lem-partial-projective-resolutions-determine-tensor-homology-in-degree-one
  - def-singular-and-cellular-chain-complexes-with-local-coefficients
  - thm-cellular-chains-compute-homology-with-local-coefficients
  - prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism
  - lem-nonparabolic-adjoint-torus-homology-has-explicit-peripheral-basis
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Full AC permits simultaneous choices of oriented lifts of the cells of an arbitrary supplied CW structure and projectivity of the resulting possibly infinitely generated free group-ring modules. The presentation, relator fillings and word calculations themselves are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Davis and Kirk, Lecture Notes in Algebraic Topology"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "Chapter5, local coefficient cellular chains and maps; the degree-one partial-resolution and peripheral-word comparison are proved below."
---

## Statement

Assume full AC. Let $Y$ be a connected based CW complex, with basepoint $y$ a vertex, and fix an isomorphism
$$\langle x_1,\ldots,x_n\mid r_1,\ldots,r_m\rangle\ \cong\ \Gamma=\pi_1(Y,y)$$
from a finite presentation. Let $P$ be its presentation $2$-complex, with its one vertex $p$. Choose based loops in $Y$ representing the specified generators. They extend, after choosing fillings of the finitely many relators, to a based map $f:P\to Y$ inducing the specified isomorphism. It may be made cellular rel $p$. For every left $\mathbb Z[\Gamma]$-module $A$, interpreted as the base fibre of a local system with $g a=T_{\bar g}a$ in the first-loop-first convention, this map induces an isomorphism
$$H_1(P;f^*\mathcal A)\ \xrightarrow{\ \cong\ }\ H_1(Y;\mathcal A).$$
This assertion does not require $Y$ or its universal cover to be aspherical and does not assert that $P$ is a spine or a homotopy-equivalent model of $Y$.

There is the following explicit finite-chain form. Give universal-cover chains the right action $c\cdot g=T_{g^{-1}}c$, and choose the lifted presentation vertex $e_0$ and generator edges $e_j$ starting there. For a word $w$ in the generators and their inverses, let each positive letter $x_j$ after prefix $q$ contribute $e_j\cdot q^{-1}$, and each negative letter $x_j^{-1}$ after prefix $q$ contribute $-e_j\cdot(qx_j^{-1})^{-1}$. Denote the sum by $c_w$. Then
$$\partial c_w=e_0\cdot w^{-1}-e_0.$$
If $u\in A$ is fixed by $w$, the tensor $c_w\otimes u$ is a cycle. Under the displayed isomorphism its class is the class of the actual based loop in $Y$ represented by $w$, with initial coefficient $u$; it is independent of the word representative and the relator fillings of $f$.

In particular let $j:(T^2,*)\to(Y,y)$ be a based torus map with ordered based loops $(\lambda,\mu)$, choose words $w_\lambda,w_\mu$ for their images, and let $u$ be fixed by both. The two finite cycles $c_{w_\lambda}\otimes u,c_{w_\mu}\otimes u$ compute the images of the actual torus classes in precisely this order. If $A$ is a finite-dimensional vector space over a field $F$, the presentation complex gives finite matrices $B:C_2\to C_1$, $C:C_1\to C_0$ and these two cycle columns $U$, with $CB=CU=0$. The actual kernel of the two peripheral classes mapping into $H_1(Y;\mathcal A)$ is exactly
$$\ker\{F^2\xrightarrow{U}\ker C/\operatorname{im}B\}.$$
Thus a one-dimensional image of those two actual peripheral classes is equivalent to $\operatorname{rank}_F(B\mid U)=\operatorname{rank}_FB+1$. All matrix entries are finite sums of matrices for generator words and their inverses. For the left coefficient action $\operatorname{Ad}\rho$ of an $SL_2$ representation they are polynomial in the representation entries and in the chosen vector $u$. For a torus restriction with $\operatorname{tr}(\rho(\mu))^2\ne4$, one may take $u=\rho(\mu)-\tfrac12\operatorname{tr}(\rho(\mu))I$ in characteristic different from $2$; the two torus classes are then a basis. This applies, in particular, to a knot exterior equipped with a supplied CW structure and its actual based peripheral torus map. No existence of a generic representation family or generic exterior rank is inferred.

## Facts & Assumptions

**Given:** Full AC, the based CW complex and specified finite presentation, the coefficient module in the stated convention, and the torus/field/adjoint data when those clauses are invoked.

[F1] A finite wedge of $n$ circles has fundamental group freely generated by its oriented circle loops; Seifert–van Kampen computes the group of a two-set open cover as the pushout ([[thm-fundamental-group-of-finite-wedge-of-circles]]; [[thm-seifert-van-kampen]]). Cellular approximation of a map from a finite CW pair is available relative its prescribed vertex ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F2] A connected CW complex has a simply connected universal cover; based maps from a simply connected source lift uniquely after fixing the image of one point ([[thm-universal-cover-existence]]; [[thm-covering-space-lifting-criterion]]). Under the no-reversal deck identification, cover chains are free right group-ring modules on supplied oriented cell lifts, with $c\cdot g=T_{g^{-1}}c$ ([[def-right-group-ring-action-on-the-chains-of-a-universal-cover]]; [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

[F3] For a path-connected space, integral $H_1$ is the abelianization of its fundamental group; ordinary cellular chains compute integral singular homology ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]; [[thm-cellular-homology-computes-singular-homology]]). Free modules are projective under AC ([[thm-free-modules-are-projective-with-choice-boundary]]; [[def-axiom-of-choice]]).

[F4] Augmented projective complexes exact in degrees0/1 have unique comparison isomorphisms on first homology after tensoring with an arbitrary module on the opposite side; no flatness or exactness in degree2 is required ([[lem-partial-projective-resolutions-determine-tensor-homology-in-degree-one]]).

[F5] Intrinsic local chains agree with right-cover-chain tensor left-coefficient-module chains, with $g a=T_{\bar g}a$; cellular comparison is natural, and a based homotopy preserves the induced local homology class with the prescribed coefficient transport ([[def-singular-and-cellular-chain-complexes-with-local-coefficients]]; [[thm-cellular-chains-compute-homology-with-local-coefficients]]; [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]]).

[F6] The adjoint torus calculation gives an explicit basis with invariant vector $M-\operatorname{tr}(M)I/2$ when $\operatorname{tr}(M)^2\ne4$, together with a chain contraction of the complementary plane ([[lem-nonparabolic-adjoint-torus-homology-has-explicit-peripheral-basis]]).

## Proof

1.1 **Construct the actual presentation map.** Begin with the generator circles and attach the finitely many relator disks. The circle wedge has the free fundamental group in [F1]. For one disk attachment, the old complex together with the outer region $r>1/3$ in the attached disk is an open set deforming to the old complex; the inner region $r<2/3$ is an open contractible disk. Their overlap is an annulus, and its generator maps to the attaching word in the old complex. These are open sets also for a noninjective attaching map, as can be checked on the old complex and the disk before taking the adjunction quotient. Van Kampen therefore quotients the old group by the normal closure of that word. Finite iteration proves $\pi_1(P,p)=\langle x_j\mid r_i\rangle$ with the stated generators. Send the generator circles to the chosen loops in $Y$. Each relator is trivial in $\pi_1(Y,y)$ by the given presentation isomorphism, so its based nullhomotopy descends from the cone on the circle to a filling disk. Choose these finitely many fillings and glue along their attaching circles; the quotient topology gives a continuous map $f:P\to Y$. It induces exactly the prescribed isomorphism. Cellular approximation rel $p$ in [F1] gives a cellular such map, based-homotopic to it and with the same fundamental-group map. [F1, given, construct, algebra]

2.1 **Verify the augmented universal-cover complexes, not an exterior spine.** Put $R=\mathbb Z[\Gamma]$ and identify the two deck groups by $f_*$. Choose pointed universal covers using [F2]. Each is path-connected and simply connected. Consequently its integral $H_0$ is $\mathbb Z$: explicitly the sum-of-coefficients augmentation kills boundaries, and any difference of two vertices bounds an edge path in the connected cover; cellular homology agrees with singular homology by [F3]. Its integral $H_1$ is zero by the Hurewicz assertion in [F3]. Thus the augmented right $R$-module cellular complex $C_2\to C_1\to C_0\to\mathbb Z\to0$ is exact at $C_1,C_0,\mathbb Z$, both for $P$ and $Y$. This is exactness of underlying abelian groups and hence of right modules, because the boundaries and augmentation are right-linear; $\mathbb Z$ has trivial right action. A set of supplied lifted cells gives free right modules, projective by [F3]. If $Y$ has infinitely many cells, AC supplies their simultaneous lifts and the stated projectivity; no finiteness of the universal covers is presumed. The based map lifts to $\widetilde f$. Uniqueness of lifts gives $\widetilde fT_g=T_{f_*(g)}\widetilde f$: both sides are lifts of the same map and agree at the chosen point, as is also seen by lifting the loop $g$. It is therefore right-linear on chains after the group identification. Cellularity and naturality of the skeletal boundary construction make it an augmentation-preserving cellular chain map. [F2, F3, step 1.1, given, construct, algebra]

3.1 **Apply finite comparison on the correctly paired sides.** For complete side bookkeeping apply [F4] over $R^{\mathrm{op}}$. A right $R$-module $C$ is a left $R^{\mathrm{op}}$-module by $r^{\mathrm{op}}c=cr$, and the given left $R$-module $A$ is a right $R^{\mathrm{op}}$-module by $a\cdot r^{\mathrm{op}}=ra$. The flip $a\otimes c\mapsto c\otimes a$ identifies $A\otimes_{R^{\mathrm{op}}}C$ with $C\otimes_R A$: the balancing identity $(ra)\otimes c=a\otimes(cr)$ becomes $c\otimes ra=cr\otimes a$. The inverse flip is defined the same way. Step2.1 supplies every projectivity and exactness hypothesis of [F4]. Its conclusion, including its clause for an already supplied comparison map, shows that $C_*(\widetilde f)\otimes1$ induces an isomorphism on $H_1$. By [F5] these are the intrinsic local homology groups and this is the actual map $f_*$. No assertion about $H_2(\widetilde P)$, higher homotopy, or a homotopy equivalence has entered. [F4, F5, step 2.1, construct, algebra]

3.2 **Compute each word by the actual lifted path.** The lifted edge $e_j$ has endpoint $T_{x_j}e_0$, so its boundary is $e_0\cdot x_j^{-1}-e_0$. A positive occurrence after prefix $q$ traverses $T_qe_j=e_j\cdot q^{-1}$. A negative occurrence after prefix $q$ traverses the reverse of $T_{qx_j^{-1}}e_j$, giving exactly the negative contribution in the Statement. The endpoint differences telescope along these consecutive lifted edges, giving $\partial c_w=T_we_0-e_0=e_0\cdot w^{-1}-e_0$. In tensor coordinates its positive contribution is $e_j\otimes q^{-1}u$ and its negative contribution is $-e_j\otimes(qx_j^{-1})^{-1}u$. These are exactly the initial local coefficients on the successive oriented edges, because forward transport along a path of class $q$ is the action of $q^{-1}$ in [F5]. If $w u=u$, also $w^{-1}u=u$, and $\partial(c_w\otimes u)=0$. The boundary of each lifted relator disk is the same finite expression $c_{r_i}$, with its chosen orientation; its boundary is zero since $r_i=1$ in $\Gamma$. Thus the presentation complex really gives finite coefficient matrices, whose entries are the displayed finite word sums, including their inverse prefixes. No untyped identification of forward conjugation with a right module action is made. [F2, F5, step 1.1, step 2.1, given, construct, algebra]

4.1 **Identify the actual peripheral inclusion and its algebraic kernel.** Under cellular comparison [F5], the subdivided loop carrying initial coefficient $u$ is the sum of its successive oriented edge chains with transported coefficients, which is exactly step 3.2; subdividing or concatenating the finite edges does not change its homology class, by the prism relation in [F5]. Applying $f$ sends it to the loop class represented by $w$ in $Y$. Any other based loop representing that group element is based-homotopic to it; the homotopy transport at the fixed basepoint is the identity, so [F5] identifies their coefficient homology classes. Two choices of relator fillings give maps agreeing on generator edges and therefore give the same images of these cycles, independently of their behavior on $2$-cells. Apply this to the two loops of $j$. The isomorphism of step3.1 takes the two finite word cycles to $j_*[u\otimes\lambda]$ and $j_*[u\otimes\mu]$, in the stated order. In field coordinates they are the columns $U$; being cycles is $CU=0$, and $CB=0$ is the cellular boundary identity. Their kernel is precisely the preimage of $\operatorname{im}B$ under $U$. Finally appending two columns to $B$ adds exactly the dimension of their span modulo $\operatorname{im}B$, so their actual image has dimension one exactly when $\operatorname{rank}(B\mid U)=\operatorname{rank}B+1$. This uses the actual comparison, not the assumption that the presentation complex computes exterior $H_2$. [F5, step 3.1, step 3.2, given, construct, algebra]

5.1 **Adjoint and knot applications, with the conventions retained.** For $A=\mathfrak{sl}_2(F)$ and its left coefficient action $gX=\rho(g)X\rho(g)^{-1}$, a generator action and its inverse have polynomial entries in the $SL_2$ entries: matrix inversion there is the polynomial adjugate. Every finite word sum in step 3.2 and each cycle column is consequently polynomial in those entries and in $u$. On the peripheral torus, forward transports are $\operatorname{Ad}\rho(\lambda)^{-1}$ and $\operatorname{Ad}\rho(\mu)^{-1}$ in [F5]. Apply [F6] to these two inverse matrices. Their meridian trace is still $t$, and their invariant vector is $\rho(\mu)^{-1}-tI/2=-u$ by the direct $SL_2$ identity $\rho(\mu)+\rho(\mu)^{-1}=tI$. Multiplying both peripheral basis vectors by $-1$ preserves their being a basis and does not change the common kernel line or its ordered coordinates. Thus the actual two torus classes with coefficient $u$ have exactly the asserted basis property, including characteristic different from2. A knot exterior with a supplied CW structure is a particular $Y$, and its actual based torus inclusion is a particular $j$; the comparison applies with arbitrary finite presentation of its group. The proof supplies no CW-structure existence theorem, generic representation family, generic rank assertion or valuation/tree/surface conclusion. All coefficient, lift and cellular choices are either supplied, finite, or covered by the declared full AC. This proves the stated actual degree-one and peripheral comparison. [F5, F6, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, given, construct, algebra] ∎
