---
id: lem-locally-flat-slice-surface-bounds-seifert-hypersurface
kind: lemma
title: "A locally flat slice surface bounds a Seifert hypersurface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.6, printed p. 323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, course II–11–12"
---

## Statement

Assume full AC. Let $D$ be a locally flat properly embedded disk in the standard four-ball $B^4$ with boundary an oriented knot $K\subset S^3$, and let $F\subset S^3$ be a connected oriented Seifert surface for $K$. After matching product collars and pushing the interior of $F$ slightly into $B^4$, the closed locally flat surface $\Sigma=F\cup_KD$ bounds a compact connected oriented locally flat three-manifold $R\subset B^4$. The conclusion includes an oriented ambient product neighborhood of $R$ on both sides, with the positive normal push-off along the $F$ portion of $\partial R=\Sigma$ lying on the complementary side of $R$.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|Properness, local-flatness charts, and product collars]]

[[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere|Alexander duality for compact locally contractible subsets]]

## Facts & Assumptions

**Given:** Full AC, the locally flat disk and surface of the Statement and their matching boundary collars. The first part of the proof additionally assumes that the given disk is smooth; the last part records the remaining TOP obligation.

[A1] Full AC implies the countable-choice hypotheses of the smooth approximation, ODE and transversality suppliers. [[def-axiom-of-choice]]

[F1] A locally flat surface has the pair charts and prescribed boundary collars in the Definition. For a smooth surface these are smooth charts. The Definition alone does not assert a global TOP normal disk bundle. [[def-locally-flat-proper-surface-and-concordance-collars]]

[F2] Local smooth ODEs, the inverse-function theorem and Euclidean smooth approximation apply with compact parameters. Parametric transversality applies to finite smooth perturbation families. [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[thm-whitney-approximation-for-euclidean-valued-maps]], [[thm-parametric-transversality]]

[F3] Boundary linking equals the intersection of collared bounding chains in the four-ball. Smooth compact manifolds have finite CW homotopy models under countable choice. [[lem-linking-number-equals-four-dimensional-intersection-number]], [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]

[F4] Mayer–Vietoris computes the actual collared decomposition homology; the oriented meridian is dual to a Seifert surface. [[thm-excision-and-mayer-vietoris-with-local-coefficients]], [[thm-linking-number-equals-signed-intersection]]

[F5] Alexander duality gives the meridional complement class for the capped locally flat surface, but it supplies no regular fiber or collar at that surface. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

## Proof

**Given:** First take a smooth proper disk $D$, retaining the full AC of the Statement.

1.1 Use the given boundary product collar to extend $D$ a little beyond $S^3$. Its normal quotient planes are represented by smooth orthogonal projection matrices $Q$ in the ambient Euclidean space. Parametrize the original disk radially from one interior point. Along each radial segment solve $\dot U=[\dot Q,Q]U$ from one fixed oriented orthonormal frame. The skew-symmetric coefficient preserves norms, and compactness gives a bounded coefficient on the finite parameter disk and time interval, so the local solutions of [F2] extend over the entire interval and depend smoothly on the endpoint. This gives a smooth frame of the disk's normal quotient bundle. Choose an ambient metric product-shaped on the end collar, by a one-variable cutoff interpolation with its product metric. Its orthogonal normal bundle is isomorphic to the quotient and inherits the frame. Its geodesic map is the local flow of the smooth coordinate equation $\ddot x^k=-\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})\dot x^i\dot x^j$, whose transformation rule follows by the chain rule. At the zero section its derivative adds tangent and normal vectors, hence is invertible. Extend across the end collar and apply [F2] there. Compactness of the original disk gives a uniform injective tube radius: otherwise equal images of distinct normal vectors tending to zero have convergent basepoints, their limits are equal, and the local inverse at that zero vector is contradicted. Shrink also inside all local flow domains. This constructs an actual smooth disk tube $D^2\times D^2$, product-shaped at its boundary. [A1, F1, F2, given, construct, algebra]

2.1 A small nonzero constant frame vector gives a disjoint proper parallel disk $D'$. By [F3], the linking of its boundary with $K$ equals $D\mathbin\cdot D'=0$. Hence the tube's induced boundary framing is precisely the preferred zero framing. Remove its interior and round the product corners to obtain the actual compact smooth disk exterior $X$. In the decomposition $B^4=X\cup(D^2\times D^2)$ the overlap retracts to $D^2\times S^1$. Since the ball and tube are contractible, integral Mayer–Vietoris gives $H_1(X)=\mathbb Z[\mu]$ and $H_i(X)=0$ for $i>1$. Its marked boundary is the zero surgery $M(K)=E_K\cup_{T^2}(D^2\times S^1)$, with the disk meridian the zero longitude and the circle the positive meridian. The boundary meridian therefore induces an $H_1$ isomorphism to $X$. [F3, F4, step 1.1, construct, algebra]

3.1 We construct a boundary circle map with the actual prescribed fiber, rather than presuming that $K$ is fibered. Truncate $F$ at the knot tube to a proper surface in $E_K$, and cap its boundary with $D^2\times\{1\}$ in the inner solid torus. Call the resulting closed connected surface $\Sigma_0\subset M(K)$. Give a small normal product of $F$ the signed coordinate $u$ whose positive direction is the positive Seifert push, and put $f_0=\exp(2\pi i u)$ there. On the inner $D^2\times S^1$ put $f_0(x,z)=z$, matching these choices in the peripheral collar. Cut the rest of the knot exterior along that product of $F$. Its two faces have real phase values $\epsilon$ and $1-\epsilon$, and its remaining torus annulus has the ordinary lifted angular coordinate between them. These prescriptions agree in their product corner collars. Extend the real phase to the remaining compact cut manifold by finite smooth collar cutoffs and a partition of unity, with all values in $(0,1)$ and constant $1/2$ away from its prescribed boundary collars. Convexity keeps the extended values away from $0$ modulo $1$. Exponentiating gives a smooth map $f_0:M(K)\to S^1$ with $1$ as a regular value, fiber exactly $\Sigma_0$, and positive coorientation on the $F$ part. Its induced homomorphism on $H_1$ is the positive meridian map: crossing $F$ once positively increases the lifted phase by one, exactly the intersection convention in [F4]. [F2, F4, step 2.1, construct, algebra]

4.1 The same meridian class on $X$ is represented by a continuous map $g:X\to S^1$. To construct it, use the finite CW model of [F3]: send a maximal tree to the basepoint, the remaining one-cells to loops of the stipulated integer degrees, fill each two-cell because its relator has degree zero, and fill higher cells because the universal cover $\mathbb R$ of the circle is contractible. Transport the map by the actual homotopy model. The boundary homomorphism of $g$ equals that of $f_0$ by step 2.1. Smooth $g$ by viewing it in $\mathbb R^2$, extending constantly across boundary collars to the smooth double, applying [F2] within error $1/4$ and projecting the result radially to $S^1$. Normalized straight-line interpolation preserves its homotopy class. The smooth boundary ratio $f_0/g$ has zero degree on every loop, so it has a global smooth real argument: lift its argument along paths from a fixed point; zero loop increments make it path-independent, and local arguments prove smoothness. First make $g$ constant in a smaller boundary collar by a smooth reparametrization of the collar depth. Multiplication there by the exponential of the lifted boundary argument times a cutoff changes $g$ to a smooth $f:X\to S^1$ equal to $f_0$ on that smaller entire collar. [A1, F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Make $1$ a regular value in the remaining compact interior while keeping that collar fixed. Cover the compact critical set on the fiber by finitely many interior charts with bumps positive on smaller cores. For small parameters $a_j$, the family $f_a=f\exp(2\pi i\sum_j a_j\phi_j)$ has derivative spanning the circle tangent in some parameter direction at each such core. Off these cores the original fiber map is already transverse, and sufficiently small parameters preserve that property by compactness and the inverse-function local rank criterion. Thus the total family is transverse to $1$. Parametric transversality [F2] supplies an arbitrarily small parameter with transverse slice. It is unchanged on the retained boundary collar. Its inverse image $R_0$ is a compact smooth oriented three-manifold with product boundary $\partial R_0=\Sigma_0$; orient it with the normal-last product convention so that its boundary has the stated orientation of $\Sigma_0$. Since $\Sigma_0$ is connected, exactly one component of $R_0$ meets it; discard all closed components. [F2, step 3.1, step 4.1, construct, algebra]

6.1 On the inner tube boundary the fiber is exactly $D^2\times\{1\}$ and is product-shaped in its normal collar, so attach the radial product $D^2\times[0,r]$ down that fixed angle to the zero section $D$. At the common peripheral circle it joins the original $F$ collar; their quadrant coordinates agree with the zero-longitude marking in step 2.1. Round these product sectors. The result is a compact connected smooth embedded $R$ with boundary the rounded capped surface $F\cup_K(-D)$, with $F$ carrying its original orientation. Here, as in the Statement's collar adjustment, use a small collar embedding of the ball into its interior and the corresponding rounding to regard the capped closed surface and its spanning $R$ as interior representatives. This retains their identification with $F\cup_KD$ and all old $F$ homology curves; it does not leave an interior point of a closed capped surface on the outer boundary. The normal coorientation of $R_0$ on $F$ was the positive Seifert direction in step 3.1, so after the same collar transport the positive push-off lies on that complementary side of $R$. [F1, F2, F4, step 2.1, step 3.1, step 5.1, construct, algebra]

7.1 Finally the orientations of $R$ and of the four-ball supply a continuous unit smooth normal field on $R$. Extend it in finitely many coordinate neighborhoods by smooth cutoffs to an ambient smooth vector field. Along its small-time flow, the derivative in the normal/time direction together with the tangent directions is invertible at time zero. Local inverse charts, extended a little across the boundary collar of $R$, and compactness give one injective product $R\times[-\delta,\delta]$ in the ambient ball; the same convergent-basepoint contradiction as in step 1.1 proves injectivity after a uniform shrinking. Choose its positive direction to be the coorientation fixed on $F$. This gives the required oriented two-sided ambient product and positive-push compatibility. Thus the entire Seifert-hypersurface conclusion is proved when the supplied disk is smooth. [F2, step 1.1, step 6.1, construct, algebra]

8.1 For an arbitrary locally flat TOP disk, [F1] supplies pair charts and end collars but not the global framed normal disk tube used in step 1.1. Even after such a TOP tube were separately supplied, the angular collar map would be TOP, so the relative smoothing and regular-fiber attachment in steps 4.1–6.1 would require their own compatibility proof. The ambient complement is smooth away from the disk, but that fact alone gives neither interface. Alexander duality [F5] supplies only the meridian homology class. Accordingly the original full TOP Statement remains unresolved here; steps 1.1–7.1 are the complete smooth branch and are not promoted to a TOP regular-value theorem. [F1, F5, step 1.1, step 4.1, step 6.1, step 7.1]
