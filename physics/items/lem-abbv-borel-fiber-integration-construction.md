---
id: lem-abbv-borel-fiber-integration-construction
kind: lemma
title: "Construction and Thom Compatibility of Borel Fiber Integration"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
axiom_strength: "ZF + AC"
deps:
  - def-axiom-of-choice
  - def-qftx-character-localization
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - lem-cohomology-ring-of-infinite-complex-projective-space
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - lem-singular-uct-extension-from-cycle-projections
  - thm-de-rham-theorem
  - lem-de-rham-top-integral-is-fundamental-class-evaluation
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-general-stokes-theorem
  - thm-riemann-fubini-on-product-rectangles
  - thm-naturality-and-uniqueness-of-thom-classes
  - lem-de-rham-integration-respects-wedge-and-cup-in-cohomology
dependency_roles:
  lem-de-rham-integration-respects-wedge-and-cup-in-cohomology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-qftx-character-localization: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  lem-cohomology-ring-of-infinite-complex-projective-space: mathematical-premise
  lem-integral-cohomology-ring-of-complex-projective-space-by-splitting: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  cor-poincare-duality-gives-a-nonsingular-cup-pairing: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  lem-de-rham-top-integral-is-fundamental-class-evaluation: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-naturality-and-uniqueness-of-thom-classes: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Michael F. Atiyah and Raoul Bott, The Moment Map and Equivariant
        Cohomology"
      url: "https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbo\
        tt_moment.pdf"
      locator: "Sections 2–3, equivariant integration and Thom pushforward conventions."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Section 3.3, Poincaré duality and the cup pairing."
dependency_level: 4
---

## Statement

Assume AC. Let $T=(\mathbb R/\mathbb Z)^r$, let $k\in\{\mathbb Q,\mathbb R\}$, and use the product right Milnor model and associated-bundle equivalence $(e\cdot t,x)\sim(e,t\cdot x)$. Let $X$ be a compact oriented Hausdorff second-countable smooth $n$-manifold without boundary, with a smooth orientation-preserving $T$-action. Put $X_T=ET\times_T X$. For $N\geq0$, put $E_N=(S^{2N+1})^r$, $B_N=(\mathbb{CP}^{N})^r$, $X_N=E_N\times_T X$, and $p_N:X_N\to B_N$. The finite sphere models embed in the chosen $ET$, inducing $j_N:B_N\to BT$ and $a_N:X_N\to X_T$. Orient $B_N$ by its product complex orientation and $X_N$ by base orientation followed by fiber orientation. Write $b_N=2Nr$.

For $a\in H^q(X_N;k)$, define $(p_N)_!a\in H^{q-n}(B_N;k)$ as the unique class satisfying, for every $b\in H^{b_N-q+n}(B_N;k)$,

$$\langle b\smile(p_N)_!a,[B_N]\rangle=\langle p_N^*b\smile a,[X_N]\rangle.$$

Groups in negative degrees are zero. For $d=q-n\geq0$ and $2N+1\geq d$, the map $j_N^*:H^d(BT;k)\to H^d(B_N;k)$ is an isomorphism, and

$$\int_X\alpha=(j_N^*)^{-1}(p_N)_!a_N^*\alpha\qquad(\alpha\in H^q(X_T;k))$$

is independent of such $N$. For $d<0$ define it to be zero. In every degree its restriction to every finite $B_N$ is $(p_N)_!a_N^*\alpha$. Thus this specifies an actual degree-$-n$ Borel fiber pushforward, including rational coefficients, without a differential-form model on the infinite-dimensional base.

It is linear over $H^*(BT;k)$ with coefficients on the left, commutes with $\mathbb Q\to\mathbb R$, and restricts at a point of $BT$ to ordinary oriented integration. For a trivial action it sends $v\otimes z$ to $v\langle z,[X]\rangle$, where the latter is zero unless $z$ has degree $n$. Product fiber integration is iterated integration in the stated orientation order. These maps extend to character-localized modules by $\int_X(\alpha/s)=(\int_X\alpha)/s$.

Let $i:Y\hookrightarrow X$ be a compact closed equivariant embedded boundaryless submanifold with invariant oriented normal bundle $\nu$ and $o(TX|_Y)=o(TY)\wedge o(\nu)$. Whenever its Borel Thom class is supplied, define $i_*^T$ by multiplying the pulled-back class of $Y_T$ on the left by the normalized Thom class on the right, then applying tubular excision and the relative-to-absolute map. Then

$$\int_X i_*^T\beta=\int_Y\beta.$$

## Statement references

[[def-qftx-character-localization]]

[[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]

[[thm-de-rham-theorem]]

[[lem-de-rham-top-integral-is-fundamental-class-evaluation]]

## Facts & Assumptions

**Given:** AC, the torus, $k$, and the compact oriented smooth manifolds and actions in the Statement. No ABBV formula or localization theorem is assumed.

[A1] AC supplies the duality, coefficient, partition-of-unity and de Rham hypotheses. [[def-axiom-of-choice]]

[F1] The selected circle Milnor bundle contains the compatible finite Hopf sphere bundles, with base inclusions $\mathbb{CP}^N\subset\mathbb{CP}^{N+1}\subset\mathbb{CP}^\infty$. [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[F2] The finite projective-space ring is $\mathbb Z[u]/(u^{N+1})$, using the tautological Euler generator, compatibly with restriction from $\mathbb{CP}^\infty$; integral homology is free with one generator in each occupied even degree. Künneth therefore applies over $k$ to all the finite products. [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]] [[lem-cohomology-ring-of-infinite-complex-projective-space]] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]

[F3] On each compact oriented boundaryless manifold the field-valued cup pairing is perfect. The UCT for free chain complexes over a PID identifies field-valued cohomology with the dual of field-valued homology. [[cor-poincare-duality-gives-a-nonsingular-cup-pairing]] [[lem-singular-uct-extension-from-cycle-projections]]

[F4] Real de Rham comparison is natural and multiplicative, including manifolds with boundary. Top-form integration equals evaluation on the oriented fundamental class. [[thm-de-rham-theorem]] [[lem-de-rham-top-integral-is-fundamental-class-evaluation]]

[F5] Smooth partitions of unity, Stokes, and Fubini apply to the compact fibers and compactly supported chart integrands used below. [[thm-smooth-partitions-of-unity-exist-on-manifolds]] [[thm-general-stokes-theorem]] [[thm-riemann-fubini-on-product-rectangles]]

[F6] A normalized Thom class is unique and natural for oriented pullback and coefficient change. Character localization is the fraction construction for modules over $H^*(BT;k)$. [[thm-naturality-and-uniqueness-of-thom-classes]] [[def-qftx-character-localization]]

## Proof

1.1 The Hopf bundle has smooth local sections over the affine projective charts, obtained by choosing the distinguished unit coordinate positive real. Their transition functions are smooth circle-valued functions. Finite products give smooth principal $T$ charts for $E_N\to B_N$, and the associated charts $p_N^{-1}(U)\cong U\times X$ have smooth transition $(b,x)\mapsto(b,t(b)x)$. Thus $X_N$ is a smooth boundaryless manifold of dimension $b_N+n$. It is compact Hausdorff as the quotient of compact $E_N\times X$ by a compact-group action, and second countable by these finitely many base charts and a countable atlas of $X$. The transition maps preserve vertical orientation and hence the base-then-fiber total orientation. The same statements hold for $Y_N$, and its normal bundle is $E_N\times_T\nu$. [given, F1, construct]

2.1 For $0\leq d=q-n\leq b_N$, the right side of the defining pairing is a linear functional on $H^{b_N-d}(B_N;k)$, so [F3] supplies a unique class in $H^d(B_N;k)$. If $d<0$, its putative test degree exceeds $b_N$; both the test group and the target are zero. If $d>b_N$, then $q>b_N+n$, the source is zero and so is the target. This defines the finite-stage map in all degrees, with no choice of a dual basis. [F3, step 1.1, construct]

2.2 For real coefficients construct a second finite-stage map directly on forms. More generally let $p:E\to B$ be any smooth bundle with closed oriented compact $n$-dimensional fiber and orientation-preserving structure group. For $\omega\in\Omega^{n+d}(E)$, evaluate $I_p\omega$ on $d$ tangent vectors at $b$ by lifting them to $E|_b$, inserting the lifts first in $\omega$, and integrating the resulting vertical $n$-form over $E|_b$. Changing a lift by a vertical vector produces $n+1$ vertical insertions and hence zero, so this definition is independent of lifts. In a bundle chart with coordinates $b$ on the base and oriented fiber coordinates $y$, write base differentials before fiber differentials; $I_p$ integrates exactly the coefficients of $db^I\wedge dy^1\wedge\cdots\wedge dy^n$. A finite fiber partition reduces to smooth coefficient functions supported in a fixed compact coordinate box. For each base derivative, the difference quotients converge uniformly on that box to the corresponding derivative, by the fundamental theorem of calculus and uniform continuity of the next derivative; integration therefore commutes with that derivative. Iteration proves the integrated coefficients are smooth. Fiber coordinate changes agree by oriented change of variables. Thus this is a global, explicitly defined form; it is zero for $d<0$. [F5, step 1.1, construct]

3.1 In the local formula, horizontal differentiation passes under the integral. Terms from vertical differentiation integrate to zero by Stokes, since the fiber has no boundary; one may use a partition on the fiber and the derivatives of its sum cancel. Consequently $dI_p\omega=I_p d\omega$. Moreover $I_p(p^*\eta\wedge\omega)=\eta\wedge I_p\omega$. For a smooth base map $f:B'\to B$, the pullback bundle has precisely the same vertical integral evaluated on $df$ of the lifted vectors, proving $f^*I_p=I_{p'}\widetilde f^*$, with no transversality requirement on $f$. Fubini proves the iterated formula, ordering vertical coordinates as the first fiber followed by the second. All statements hold for vertically compactly supported forms on vector-bundle tubes as well. [F5, step 2.2, algebra]

3.2 We verify the trace identity at a finite stage. For positive normal rank, on the disk normal bundle $D\nu_N$ of the compact embedded $Y_N\subset X_N$, represent its real relative Thom class by a closed form supported in the interior. Here is the relative comparison needed for this assertion. Integration on the two spaces of the pair $(D\nu_N,S\nu_N)$ commutes with restriction. The induced map on mapping cones is a quasi-isomorphism: the long exact sequences of the two cones and the absolute isomorphisms [F4] prove injectivity and surjectivity by the exact-sequence diagram chase. The singular cone computes relative cohomology. On the form side restriction to the boundary is surjective by a collar and cutoff, so the cone also computes the kernel of restriction. On a collar a closed representative restricting to zero on the boundary is exact, by integrating its normal-coordinate contraction; subtracting the derivative of a cutoff times this primitive makes it vanish on a smaller collar. It therefore extends by zero as a closed form $\tau$ on the open normal tube. Its fiber integral is $1$: on each oriented disk fiber, extend the collar-vanishing form by zero to the oriented double sphere. Excision sends the positive disk-relative generator to the positive top class of that sphere. Naturality of the relative comparison identifies its de Rham image with this extension, and [F4] evaluates its sphere integral as $1$. Thus its disk integral is $1$, with the stated orientation, and Thom normalization supplies exactly this relative generator. Thus $I_{\nu_N}\tau=1$. [F4, F5, F6, step 1.1, step 2.2, construct]

4.1 For a closed base form $\eta$ of complementary degree, Fubini gives $\int_B\eta\wedge I_p\omega=\int_Ep^*\eta\wedge\omega$. Apply [F4] and the perfect pairing [F3] to $p_N$ to see that the cohomology map of $I_{p_N}$ is exactly the map of step 2.1 under de Rham comparison. Hence the finite-stage singular map over $\mathbb R$ has the base-change and projection properties of step 3.1. This proves those properties of the actual pairing-defined map, not of an unrelated candidate. [F3, F4, step 2.1, step 3.1]

5.1 Coefficient inclusion is injective on rational cohomology of any space here. Indeed, split cycles and boundaries in its free rational singular complex; [F3]'s field UCT gives $H^q(-;\mathbb Q)=\operatorname{Hom}_{\mathbb Q}(H_q(-;\mathbb Q),\mathbb Q)$, and extension to $\mathbb R$ sends a functional to its scalar extension, which is injective. Extension is exact over a field, so homology also extends by scalars. On our compact manifolds the cohomology groups are finite dimensional by [F3]; their scalar-extended pairing is the real perfect pairing, since fundamental classes and cup evaluation commute with coefficients on chains. Uniqueness in step 2.1 therefore identifies the realification of the rational pushforward with the real pushforward. Real base-change and projection identities between rational classes now imply the rational identities by injectivity. [A1, F3, step 2.1, step 4.1, algebra]

6.1 The square from $X_N\to X_{N+1}$ over $B_N\to B_{N+1}$ is a pullback square of smooth bundles: restriction of the larger Hopf bundle is the smaller one, and associated-bundle formation commutes with restriction. Steps 4.1 and 5.1 give $\iota_N^*(p_{N+1})_!a_{N+1}^*\alpha=(p_N)_!a_N^*\alpha$. By [F2] and change of coefficients, $H^*(B_N;k)=k[u_1,\ldots,u_r]/(u_1^{N+1},\ldots,u_r^{N+1})$, and $j_N^*$ is the polynomial quotient map from $H^*(BT;k)=k[u_1,\ldots,u_r]$. Its first possible killed monomial has degree $2N+2$, so it is an isomorphism in degrees $d\leq2N+1$. Compatibility thus identifies all sufficiently large finite outputs with a single degree-$d$ polynomial. This proves existence, independence, and uniqueness in the Statement. Restriction from a larger stable index also proves the asserted equality at every smaller index. No cohomological limit theorem for $X_T$ is used. [F1, F2, F6, step 4.1, step 5.1, construct]

6.2 Represent a real class $\beta_N$ by a closed form $\zeta$ on $Y_N$. The Gysin image is represented by extension by zero of $q^*\zeta\wedge\tau$, where $q$ is the tube projection. This follows from the relative comparison of step 3.2, relative multiplicativity and tubular excision. For clarity, the natural wedge/cup cochain homotopy of [[lem-de-rham-integration-respects-wedge-and-cup-in-cohomology]] also proves relative multiplicativity here: its restriction to the boundary vanishes when the Thom-form factor vanishes there, so its coboundary identity descends to the relative complexes. This is the relative product actually used, rather than an assumed multiplicative mapping-cone comparison. Integration over the normal fibers gives $\zeta$ by step 3.1 and $I_q\tau=1$. In total orientation the tangent directions of $Y_N$ precede the oriented normal directions, exactly as specified in the Statement; Fubini therefore gives $(p_N)_!i_{N*}\beta_N=(p_{Y,N})_!\beta_N$. Rational Thom classes map to normalized real Thom classes by [F6], so rational equality follows by step 5.1. [F4, F5, F6, step 3.1, step 3.2, step 5.1]

7.1 To check the projection formula for homogeneous $v\in H^*(BT;k)$, choose $N$ large enough that restriction detects both output degrees of $\int_X(\pi_X^*v\smile\alpha)$ and $v\smile\int_X\alpha$. The finite-stage projection formula makes their restrictions equal; injectivity in step 6.1 proves equality on $BT$. Finite sums give the formula for arbitrary classes. Coefficient compatibility follows in the same way. Restriction to $B_0=*$ is ordinary integration, by the defining perfect pairing in dimension zero and [F4]. For a trivial action the form integral on $B_N\times X$ gives the stated tensor formula and the product rule by Fubini; rational statements follow from step 5.1. The fraction formulas in [F6] now extend this module-linear map uniquely to the localization; an equality witnessed by $t(s'\alpha-s\alpha')=0$ remains an equality after applying the linear map. [F3, F4, F6, step 3.1, step 5.1, step 6.1, algebra]

8.1 Restrict the supplied Borel Thom class and tubular map to $B_N$. Thom naturality [F6] and naturality of relative cup product and excision identify this restriction of $i_*^T\beta$ with $i_{N*}\beta_N$. Apply step 6.2 and detect the resulting output class at a stable $N$ by step 6.1. This proves $\int_X i_*^T\beta=\int_Y\beta$ and its localized extension. Empty fibers give zero throughout; rank-zero normal bundles have standard Thom class $1$: their Thom map is the identity on $Y_T$, and tubular extension to $X_T$ is extension by zero from the open-and-closed union of components $Y_T$. For $r=0$ every base is a point, so the same construction is ordinary oriented integration with no limiting step. Negative output degrees are zero at every finite stage. These observations complete the construction in all the stated cases. [F6, step 6.1, step 6.2, step 7.1] ∎

