<!-- new lines at canonical 13 -->
  - thm-time-dependent-vector-fields-have-local-smooth-evolution-operators
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-whitney-approximation-for-euclidean-valued-maps
  - thm-parametric-transversality
  - lem-linking-number-equals-four-dimensional-intersection-number
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-linking-number-equals-signed-intersection
  - thm-topological-collaring-for-manifold-boundaries

<!-- new lines at canonical 27 -->
  proof: ai-altered

<!-- new lines at canonical 36 -->
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

<!-- new lines at canonical 62 -->
**Given:** Full AC, the locally flat disk and surface of the Statement and their matching boundary collars. The first part additionally assumes that the disk is smooth; the final part proves the TOP branch using the explicitly cited external normal-bundle and transversality inputs.

<!-- new lines at canonical 75 -->

[F6] **External input — relative TOP normal bundle.** Freedman–Quinn, Theorem 9.3A, printed137–141, supplies an actual rank-two normal vector bundle for a locally flat proper surface in a TOP four-manifold, relative to a supplied normal bundle near a closed subset, including a boundary collar. Its neighborhood embedding agrees with that germ after restriction. This is only the normal-bundle input; it does not assert a circle-map fiber or a Seifert hypersurface. The usual full-AC setting of the Statement is retained.

[F7] **External input — strongly relative TOP transversality.** Quinn1988, Theorem printed145: for proper submanifolds $M,X\subset Y$, a specified normal microbundle $\xi$ of $X$, and closed $C\subset D\subset Y$, if $M$ is transverse to $\xi$ near $C$, an isotopy of $M$, supported in any prescribed neighborhood of $(D\setminus C)\cap M\cap X$, makes it transverse near $D$. Boundary properness is part of the theorem. Transversality means that the intersection is a manifold whose normal microbundle in $M$ is the restriction of the specified $\xi$. The theorem includes the dimensions used below, namely $4$-submanifolds of a $5$-manifold with intersection dimension $3$. This theorem is imported, not reconstructed locally.

[F8] **External input — circle representatives on TOP manifolds.** Metrizable TOP manifolds have CW homotopy type by the ANR/CW-type criterion of Milnor1959. On that homotopy type, Hatcher Proposition1B.9 for $S^1=K(\mathbb Z,1)$ represents every integral first-cohomology class by a continuous map to $S^1$; two such maps with the same induced integer homomorphism are homotopic. These classification inputs are used only to construct a continuous meridian map. They are not transversality assertions.


[F9] An actual compact TOP manifold with boundary has a TOP product collar of its entire boundary. Apply this only after the exterior has been constructed as such a manifold. [[thm-topological-collaring-for-manifold-boundaries]]

<!-- new lines at canonical 103 -->
8.1 Now let $D$ be the arbitrary locally flat disk of the Statement. Apply the relative normal-bundle input [F6] with the actual boundary product germ in [F1]. Its oriented rank-two vector bundle over the disk is trivial. A global nonzero frame section gives a disjoint proper parallel disk, so its boundary has linking zero with $K$ by [F3]. Thus the induced boundary framing is the preferred zero framing. Any difference from the supplied zero-framed boundary trivialization has degree zero in $SO(2)$ and extends across the disk; adjust the global frame by that extension, and restrict the actual bundle neighborhood. This gives an actual framed TOP disk tube, with the prescribed product and angular marking on a smaller boundary collar. Its compact exterior $X$ is a TOP four-manifold. The same collared decomposition and integral Mayer–Vietoris calculation as in step2.1 give $H_1(X)=\mathbb Z[\mu]$, $H_i(X)=0$ for $i>1$, with boundary the actual zero surgery $M(K)$ and its marked inner $D^2\times S^1$. No smoothing of the disk or exterior is asserted. [A1, F1, F3, F4, F6, step 2.1, construct, algebra]

8.2 Construct on the actual boundary $M(K)$ the circle map $f_0$ of step3.1. Its knot-exterior part uses the given smooth $F$ and its positive Seifert collar; the solid-torus part is the actual framed tube's angular coordinate $f_0(x,z)=z$. Their zero-longitude boundary products agree by step8.1. The real-phase extension on the cut knot exterior stays in $(0,1)$, so the fiber over1 is exactly the capped surface $\Sigma_0$, with its prescribed whole product neighborhood and positive coorientation. On a collar of $\partial X$, extend $f_0$ constantly in collar depth. This is an actual TOP product-transverse boundary map even though it need not be smooth for the inherited structure of the original disk complement. [F1, F4, step 3.1, step 8.1, construct]

8.3 The meridian class in $H^1(X;\mathbb Z)$ has a continuous circle representative by [F8]. Its boundary class equals that of $f_0$ by step8.1. The boundary ratio therefore has a continuous real argument: lift along paths, with zero increments around every loop. First make the representative constant in a smaller boundary collar by reparametrizing collar depth, then multiply there by the exponential of that argument times a collar cutoff. This constructs a continuous $f:X\to S^1$ equal to $f_0$ on a whole smaller boundary collar. The argument uses [F8] only for a continuous map; no regular value is inferred from it or from Alexander duality. [F4, F8, F9, step 8.1, step 8.2, construct]

8.4 Apply [F7] in $Y=X\times S^1$ to the proper graph $M=\{(x,f(x)):x\in X\}$ and the proper submanifold $Z=X\times\{1\}$ with its specified trivial circle-normal line microbundle. Take the closed protected set $C$ to be a smaller entire boundary collar times $S^1$, inside the collar where step8.3 fixes $f=f_0$, and take the theorem's $D=Y$. The graph is already microbundle transverse near $C$ by step8.2. The external isotopy is consequently supported away from that protected collar. Parametrize its resulting graph image by $j_1:X\to M'$. It need not remain a graph over $X$: define instead $f'=\operatorname{pr}_{S^1}j_1$. Microbundle transversality says $R_0=(f')^{-1}(1)$ is a compact neat TOP three-manifold, with $\partial R_0=\Sigma_0$ and exactly the unchanged boundary product/coorientation. Its normal microbundle is the pullback of the specified trivial line, hence has an actual oriented product neighborhood after uniform shrinking over the compact fiber. The trivialization is the already prescribed one near the boundary. Orient $R_0$ by this normal direction and discard closed components; since $\Sigma_0$ is connected, exactly one component meets it. This is the required separate marked angular regular-fiber operation, using [F7], rather than a consequence claimed from [F6]. [F7, step 8.2, step 8.3, construct]

8.5 Attach the actual radial sector $D^2\times[0,r]$ at the fixed angular value down to the disk zero section, as in step6.1. The TOP tube products, zero-longitude peripheral marking and unchanged whole fiber collar make the attaching maps identical on their common products. In the disk's normal plane this sector is the positive coordinate ray; its transverse Cartesian coordinate supplies its two-sided normal product even at the zero-section boundary. It agrees with the angular coorientation for positive radius and with the positive Seifert normal along $F$. Round the product corners in these explicit two-dimensional sector coordinates. They paste with the product of $R_0$ from step8.4, giving the actual compact connected oriented locally flat $R$ with the stated two-sided product and positive-push alignment. Before the collar push this is the model meeting the outer sphere along $F$; the same collar embedding of the ball used in step6.1 gives the closed interior representative of $F\cup_KD$, retaining all marked $F$ homology curves and its normal direction. Together with the preserved smooth proof this proves the entire Statement under its full AC hypothesis. The normal-bundle and transversality theorems remain explicitly external inputs. [F1, F6, F7, step 6.1, step 8.1, step 8.2, step 8.4, construct] ∎

