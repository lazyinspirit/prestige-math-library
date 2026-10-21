---
id: lem-locally-flat-slice-surface-bounds-seifert-hypersurface
kind: lemma
title: "A locally flat slice surface bounds a Seifert hypersurface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - def-axiom-of-choice
  - thm-time-dependent-vector-fields-have-local-smooth-evolution-operators
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-whitney-approximation-for-euclidean-valued-maps
  - thm-parametric-transversality
  - lem-linking-number-equals-four-dimensional-intersection-number
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-linking-number-equals-signed-intersection
  - thm-topological-collaring-for-manifold-boundaries
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.6, printed p. 323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, course II–11–12"
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/freedmanquinn.pdf"
      locator: "Theorem 9.3A, printed pp. 137–141: relative normal vector bundles, not a regular-fiber theorem"
    - title: "Frank Quinn, Topological transversality holds in all dimensions"
      url: "https://doi.org/10.1090/S0273-0979-1988-15629-7"
      locator: "Bulletin AMS 18 (1988), 145–148, Theorem on p. 145: strongly relative microbundle transversality"
    - title: "John Milnor, On Spaces Having the Homotopy Type of a CW-Complex"
      url: "https://doi.org/10.2307/1993204"
      locator: "Transactions AMS 90 (1959), 272–280: ANR/CW-type criterion for metrizable manifolds"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Proposition 1B.9: maps to a K(G,1), applied to the circle"
---

## Statement

Assume full AC. Let $D$ be a locally flat properly embedded disk in the standard four-ball $B^4$ with boundary an oriented knot $K\subset S^3$, and let $F\subset S^3$ be a connected oriented Seifert surface for $K$. After matching product collars and pushing the interior of $F$ slightly into $B^4$, the closed locally flat surface $\Sigma=F\cup_KD$ bounds a compact connected oriented locally flat three-manifold $R\subset B^4$. The conclusion includes an oriented ambient product neighborhood of $R$ on both sides, with the positive normal push-off along the $F$ portion of $\partial R=\Sigma$ lying on the complementary side of $R$.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|Properness, local-flatness charts, and product collars]]

[[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere|Alexander duality for compact locally contractible subsets]]

## Facts & Assumptions

**Given:** Full AC, the locally flat disk and surface of the Statement and their matching boundary collars. The first part additionally assumes that the disk is smooth; the final part proves the TOP branch using the explicitly cited external normal-bundle and transversality inputs.

[A1] Full AC implies the countable-choice hypotheses of the smooth approximation, ODE and transversality suppliers. [[def-axiom-of-choice]]

[F1] A locally flat surface has the pair charts and prescribed boundary collars in the Definition. For a smooth surface these are smooth charts. The Definition alone does not assert a global TOP normal disk bundle. [[def-locally-flat-proper-surface-and-concordance-collars]]

[F2] Local smooth ODEs, the inverse-function theorem and Euclidean smooth approximation apply with compact parameters. Parametric transversality applies to finite smooth perturbation families. [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[thm-whitney-approximation-for-euclidean-valued-maps]], [[thm-parametric-transversality]]

[F3] Boundary linking equals the intersection of collared bounding chains in the four-ball. Smooth compact manifolds have finite CW homotopy models under countable choice. [[lem-linking-number-equals-four-dimensional-intersection-number]], [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]

[F4] Mayer–Vietoris computes the actual collared decomposition homology; the oriented meridian is dual to a Seifert surface. [[thm-excision-and-mayer-vietoris-with-local-coefficients]], [[thm-linking-number-equals-signed-intersection]]

[F5] Alexander duality gives the meridional complement class for the capped locally flat surface, but it supplies no regular fiber or collar at that surface. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

[F6] **External input — relative TOP normal bundle.** Freedman–Quinn, Theorem 9.3A, printed137–141, supplies an actual rank-two normal vector bundle for a locally flat proper surface in a TOP four-manifold, relative to a supplied normal bundle near a closed subset, including a boundary collar. Its neighborhood embedding agrees with that germ after restriction. This is only the normal-bundle input; it does not assert a circle-map fiber or a Seifert hypersurface. The usual full-AC setting of the Statement is retained.

[F7] **External input — strongly relative TOP transversality.** Quinn1988, Theorem printed145: for proper submanifolds $M,X\subset Y$, a specified normal microbundle $\xi$ of $X$, and closed $C\subset D\subset Y$, if $M$ is transverse to $\xi$ near $C$, an isotopy of $M$, supported in any prescribed neighborhood of $(D\setminus C)\cap M\cap X$, makes it transverse near $D$. Boundary properness is part of the theorem. Transversality means that the intersection is a manifold whose normal microbundle in $M$ is the restriction of the specified $\xi$. The theorem includes the dimensions used below, namely $4$-submanifolds of a $5$-manifold with intersection dimension $3$. This theorem is imported, not reconstructed locally.

[F8] **External input — circle representatives on TOP manifolds.** Metrizable TOP manifolds have CW homotopy type by the ANR/CW-type criterion of Milnor1959. On that homotopy type, Hatcher Proposition1B.9 for $S^1=K(\mathbb Z,1)$ represents every integral first-cohomology class by a continuous map to $S^1$; two such maps with the same induced integer homomorphism are homotopic. These classification inputs are used only to construct a continuous meridian map. They are not transversality assertions.


[F9] An actual compact TOP manifold with boundary has a TOP product collar of its entire boundary. Apply this only after the exterior has been constructed as such a manifold. [[thm-topological-collaring-for-manifold-boundaries]]

## Proof

**Given:** First take a smooth proper disk $D$, retaining the full AC of the Statement.

1.1 Use the given boundary product collar to extend $D$ a little beyond $S^3$. Its normal quotient planes are represented by smooth orthogonal projection matrices $Q$ in the ambient Euclidean space. Parametrize the original disk radially from one interior point. Along each radial segment solve $\dot U=[\dot Q,Q]U$ from one fixed oriented orthonormal frame. The skew-symmetric coefficient preserves norms, and compactness gives a bounded coefficient on the finite parameter disk and time interval, so the local solutions of [F2] extend over the entire interval and depend smoothly on the endpoint. This gives a smooth frame of the disk's normal quotient bundle. Choose an ambient metric product-shaped on the end collar, by a one-variable cutoff interpolation with its product metric. Its orthogonal normal bundle is isomorphic to the quotient and inherits the frame. Its geodesic map is the local flow of the smooth coordinate equation $\ddot x^k=-\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})\dot x^i\dot x^j$, whose transformation rule follows by the chain rule. At the zero section its derivative adds tangent and normal vectors, hence is invertible. Extend across the end collar and apply [F2] there. Compactness of the original disk gives a uniform injective tube radius: otherwise equal images of distinct normal vectors tending to zero have convergent basepoints, their limits are equal, and the local inverse at that zero vector is contradicted. Shrink also inside all local flow domains. This constructs an actual smooth disk tube $D^2\times D^2$, product-shaped at its boundary. [A1, F1, F2, given, construct, algebra]

2.1 A small nonzero constant frame vector gives a disjoint proper parallel disk $D'$. By [F3], the linking of its boundary with $K$ equals $D\mathbin\cdot D'=0$. Hence the tube's induced boundary framing is precisely the preferred zero framing. Remove its interior and round the product corners to obtain the actual compact smooth disk exterior $X$. In the decomposition $B^4=X\cup(D^2\times D^2)$ the overlap retracts to $D^2\times S^1$. Since the ball and tube are contractible, integral Mayer–Vietoris gives $H_1(X)=\mathbb Z[\mu]$ and $H_i(X)=0$ for $i>1$. Its marked boundary is the zero surgery $M(K)=E_K\cup_{T^2}(D^2\times S^1)$, with the disk meridian the zero longitude and the circle the positive meridian. The boundary meridian therefore induces an $H_1$ isomorphism to $X$. [F3, F4, step 1.1, construct, algebra]

3.1 We construct a boundary circle map with the actual prescribed fiber, rather than presuming that $K$ is fibered. Truncate $F$ at the knot tube to a proper surface in $E_K$, and cap its boundary with $D^2\times\{1\}$ in the inner solid torus. Call the resulting closed connected surface $\Sigma_0\subset M(K)$. Give a small normal product of $F$ the signed coordinate $u$ whose positive direction is the positive Seifert push, and put $f_0=\exp(2\pi i u)$ there. On the inner $D^2\times S^1$ put $f_0(x,z)=z$, matching these choices in the peripheral collar. Cut the rest of the knot exterior along that product of $F$. Its two faces have real phase values $\epsilon$ and $1-\epsilon$, and its remaining torus annulus has the ordinary lifted angular coordinate between them. These prescriptions agree in their product corner collars. Extend the real phase to the remaining compact cut manifold by finite smooth collar cutoffs and a partition of unity, with all values in $(0,1)$ and constant $1/2$ away from its prescribed boundary collars. Convexity keeps the extended values away from $0$ modulo $1$. Exponentiating gives a smooth map $f_0:M(K)\to S^1$ with $1$ as a regular value, fiber exactly $\Sigma_0$, and positive coorientation on the $F$ part. Its induced homomorphism on $H_1$ is the positive meridian map: crossing $F$ once positively increases the lifted phase by one, exactly the intersection convention in [F4]. [F2, F4, step 2.1, construct, algebra]

4.1 The same meridian class on $X$ is represented by a continuous map $g:X\to S^1$. To construct it, use the finite CW model of [F3]: send a maximal tree to the basepoint, the remaining one-cells to loops of the stipulated integer degrees, fill each two-cell because its relator has degree zero, and fill higher cells because the universal cover $\mathbb R$ of the circle is contractible. Transport the map by the actual homotopy model. The boundary homomorphism of $g$ equals that of $f_0$ by step 2.1. Smooth $g$ by viewing it in $\mathbb R^2$, extending constantly across boundary collars to the smooth double, applying [F2] within error $1/4$ and projecting the result radially to $S^1$. Normalized straight-line interpolation preserves its homotopy class. The smooth boundary ratio $f_0/g$ has zero degree on every loop, so it has a global smooth real argument: lift its argument along paths from a fixed point; zero loop increments make it path-independent, and local arguments prove smoothness. First make $g$ constant in a smaller boundary collar by a smooth reparametrization of the collar depth. Multiplication there by the exponential of the lifted boundary argument times a cutoff changes $g$ to a smooth $f:X\to S^1$ equal to $f_0$ on that smaller entire collar. [A1, F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Make $1$ a regular value in the remaining compact interior while keeping that collar fixed. Cover the compact critical set on the fiber by finitely many interior charts with bumps positive on smaller cores. For small parameters $a_j$, the family $f_a=f\exp(2\pi i\sum_j a_j\phi_j)$ has derivative spanning the circle tangent in some parameter direction at each such core. Off these cores the original fiber map is already transverse, and sufficiently small parameters preserve that property by compactness and the inverse-function local rank criterion. Thus the total family is transverse to $1$. Parametric transversality [F2] supplies an arbitrarily small parameter with transverse slice. It is unchanged on the retained boundary collar. Its inverse image $R_0$ is a compact smooth oriented three-manifold with product boundary $\partial R_0=\Sigma_0$; orient it with the normal-last product convention so that its boundary has the stated orientation of $\Sigma_0$. Since $\Sigma_0$ is connected, exactly one component of $R_0$ meets it; discard all closed components. [F2, step 3.1, step 4.1, construct, algebra]

6.1 On the inner tube boundary the fiber is exactly $D^2\times\{1\}$ and is product-shaped in its normal collar, so attach the radial product $D^2\times[0,r]$ down that fixed angle to the zero section $D$. At the common peripheral circle it joins the original $F$ collar; their quadrant coordinates agree with the zero-longitude marking in step 2.1. Round these product sectors. The result is a compact connected smooth embedded $R$ with boundary the rounded capped surface $F\cup_K(-D)$, with $F$ carrying its original orientation. Here, as in the Statement's collar adjustment, use a small collar embedding of the ball into its interior and the corresponding rounding to regard the capped closed surface and its spanning $R$ as interior representatives. This retains their identification with $F\cup_KD$ and all old $F$ homology curves; it does not leave an interior point of a closed capped surface on the outer boundary. The normal coorientation of $R_0$ on $F$ was the positive Seifert direction in step 3.1, so after the same collar transport the positive push-off lies on that complementary side of $R$. [F1, F2, F4, step 2.1, step 3.1, step 5.1, construct, algebra]

7.1 Finally the orientations of $R$ and of the four-ball supply a continuous unit smooth normal field on $R$. Extend it in finitely many coordinate neighborhoods by smooth cutoffs to an ambient smooth vector field. Along its small-time flow, the derivative in the normal/time direction together with the tangent directions is invertible at time zero. Local inverse charts, extended a little across the boundary collar of $R$, and compactness give one injective product $R\times[-\delta,\delta]$ in the ambient ball; the same convergent-basepoint contradiction as in step 1.1 proves injectivity after a uniform shrinking. Choose its positive direction to be the coorientation fixed on $F$. This gives the required oriented two-sided ambient product and positive-push compatibility. Thus the entire Seifert-hypersurface conclusion is proved when the supplied disk is smooth. [F2, step 1.1, step 6.1, construct, algebra]

8.1 Now let $D$ be the arbitrary locally flat disk of the Statement. Apply the relative normal-bundle input [F6] with the actual boundary product germ in [F1]. Its oriented rank-two vector bundle over the disk is trivial. A global nonzero frame section gives a disjoint proper parallel disk, so its boundary has linking zero with $K$ by [F3]. Thus the induced boundary framing is the preferred zero framing. Any difference from the supplied zero-framed boundary trivialization has degree zero in $SO(2)$ and extends across the disk; adjust the global frame by that extension, and restrict the actual bundle neighborhood. This gives an actual framed TOP disk tube, with the prescribed product and angular marking on a smaller boundary collar. Its compact exterior $X$ is a TOP four-manifold. The same collared decomposition and integral Mayer–Vietoris calculation as in step2.1 give $H_1(X)=\mathbb Z[\mu]$, $H_i(X)=0$ for $i>1$, with boundary the actual zero surgery $M(K)$ and its marked inner $D^2\times S^1$. No smoothing of the disk or exterior is asserted. [A1, F1, F3, F4, F6, step 2.1, construct, algebra]

8.2 Construct on the actual boundary $M(K)$ the circle map $f_0$ of step3.1. Its knot-exterior part uses the given smooth $F$ and its positive Seifert collar; the solid-torus part is the actual framed tube's angular coordinate $f_0(x,z)=z$. Their zero-longitude boundary products agree by step8.1. The real-phase extension on the cut knot exterior stays in $(0,1)$, so the fiber over1 is exactly the capped surface $\Sigma_0$, with its prescribed whole product neighborhood and positive coorientation. On a collar of $\partial X$, extend $f_0$ constantly in collar depth. This is an actual TOP product-transverse boundary map even though it need not be smooth for the inherited structure of the original disk complement. [F1, F4, step 3.1, step 8.1, construct]

8.3 The meridian class in $H^1(X;\mathbb Z)$ has a continuous circle representative by [F8]. Its boundary class equals that of $f_0$ by step8.1. The boundary ratio therefore has a continuous real argument: lift along paths, with zero increments around every loop. First make the representative constant in a smaller boundary collar by reparametrizing collar depth, then multiply there by the exponential of that argument times a collar cutoff. This constructs a continuous $f:X\to S^1$ equal to $f_0$ on a whole smaller boundary collar. The argument uses [F8] only for a continuous map; no regular value is inferred from it or from Alexander duality. [F4, F8, F9, step 8.1, step 8.2, construct]

8.4 Apply [F7] in $Y=X\times S^1$ to the proper graph $M=\{(x,f(x)):x\in X\}$ and the proper submanifold $Z=X\times\{1\}$ with its specified trivial circle-normal line microbundle. Choose nested closed product collars $C_0\subset\operatorname{Int}C$ of $\partial X$ in the boundary collar where step8.3 fixes $f=f_0$, use $C$ as Quinn's protected set, and take the theorem's $D=Y$. The graph is already microbundle transverse near $C$ by step8.2. The closure of $(Y\setminus C)\cap M\cap Z$ is disjoint from $C_0$, so choose the theorem's support neighborhood disjoint from $C_0$. The isotopy may meet the outer frontier of $C$ but leaves the smaller collar $C_0$ fixed, preserving the whole boundary product and coorientation needed below. Parametrize its resulting graph image by $j_1:X\to M'$. It need not remain a graph over $X$: define instead $f'=\operatorname{pr}_{S^1}j_1$. Microbundle transversality says $R_0=(f')^{-1}(1)$ is a compact neat TOP three-manifold, with $\partial R_0=\Sigma_0$ and exactly the unchanged boundary product/coorientation. Its normal microbundle is the pullback of the specified trivial line, hence has an actual oriented product neighborhood after uniform shrinking over the compact fiber. The trivialization is the already prescribed one near the boundary. Orient $R_0$ by this normal direction and discard closed components; since $\Sigma_0$ is connected, exactly one component meets it. This is the required separate marked angular regular-fiber operation, using [F7], rather than a consequence claimed from [F6]. [F7, step 8.2, step 8.3, construct]

8.5 Attach the actual radial sector $D^2\times[0,r]$ at the fixed angular value down to the disk zero section, as in step6.1. The TOP tube products, zero-longitude peripheral marking and unchanged whole fiber collar make the attaching maps identical on their common products. In the disk's normal plane this sector is the positive coordinate ray; its transverse Cartesian coordinate supplies its two-sided normal product even at the zero-section boundary. It agrees with the angular coorientation for positive radius and with the positive Seifert normal along $F$. Round the product corners in these explicit two-dimensional sector coordinates. They paste with the product of $R_0$ from step8.4, giving the actual compact connected oriented locally flat $R$ with the stated two-sided product and positive-push alignment. Before the collar push this is the model meeting the outer sphere along $F$; the same collar embedding of the ball used in step6.1 gives the closed interior representative of $F\cup_KD$, retaining all marked $F$ homology curves and its normal direction. Together with the preserved smooth proof this proves the entire Statement under its full AC hypothesis. The normal-bundle and transversality theorems remain explicitly external inputs. [F1, F6, F7, step 6.1, step 8.1, step 8.2, step 8.4, construct] ∎
