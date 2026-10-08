---
id: lem-analytic-quasiconformality-implies-modulus-distortion
kind: lemma
title: An analytically quasiconformal homeomorphism distorts quadrilateral moduli by at most K
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 7
deps: [def-axiom-of-choice, def-countable-choice, def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds, thm-geometric-and-analytic-quasiconformality-equivalent, lem-inverse-of-a-quasiconformal-map-is-quasiconformal, def-acl-sobolev-quasiconformal-homeomorphism, def-wirtinger-derivatives, thm-modulus-rectangle-and-annulus, thm-round-annulus-conformal-parameter-is-complete-invariant, rem-riemann-sphere-one-point-compactification, thm-jordan-brouwer-separation, lem-jordan-schoenflies-extension-for-plane-curves, cor-components-of-open-subsets-of-rn-are-polygonally-connected]
axiom_use: The Axiom of Choice is required by the analytic ACL/Sobolev interface, the Jordan-domain conformal rectification, and the source area argument; Countable Choice is included for completed-product and extremal-length measure interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1 and §2, printed pp. 50–53: the length–area method, analytic and geometric definitions, and the quadrilateral estimates; Ch. 3 §4, printed pp. 94–96, Theorem 4.2 and Lemma 4.4 for differentiability and the Jacobian area inequality. The proof of Theorem 4.2 has an unresolved maximum argument; this item does not certify that source step."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §11.4, Proposition 11.14, printed pp. 181–182, for the Jacobian-area inequalities; §11.5, Proposition 11.18, printed p. 183, for total differentiability (the text refers to Project 11.19 for its proof); §12.1, Lemma 12.1 and Proposition 12.3, printed pp. 183–184, for the smooth-foliation length–area argument and annulus estimate; Ch. 1 §6.3.1, printed pp. 121–122, Proposition 6.6 and Exercise 6.8 for the annular foliations."
    - title: "F. W. Gehring and O. Lehto, On the total differentiability of functions of a complex variable"
      locator: "Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9; The original was not read; the complete local differentiability proof is supplied by the earlier quadrilateral core."
verification:
  precheck: pass
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §§1–2, printed pp. 50–53, for the length–area method and quadrilateral distortion; Ch. 3 §4, printed pp. 94–96, for the differentiability and Jacobian-area estimates.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §11.4, printed pp. 181–182, Proposition 11.14, for the area formula; §11.5, printed p. 183, Proposition 11.18, for total differentiability; §12.1, printed pp. 183–184, Lemma 12.1 and Proposition 12.3; Ch. 1 §6.3.1, printed pp. 121–122, Proposition 6.6 and Exercise 6.8. The full cited passages were reread. Proposition 11.18 is stated but its proof is deferred to Project 11.19, so it does not close the differentiability obligation.
- F. W. Gehring and O. Lehto, *On the total differentiability of functions of a complex variable*, Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9. The original Gehring–Lehto paper was not read. The earlier core supplies a complete fixed-constant maximum proof; the inverse item supplies the signed-degree area correction.

## Statement

Assume the Axiom of Choice. Let $f:\Omega\to\Omega'$ be a homeomorphism of complex domains which is $K$-quasiconformal in the analytic sense, with $K\ge1$, and let $\lambda,\mu$ denote the extremal length and reciprocal curve-family modulus of [[def-extremal-length-and-curve-family-modulus]].

(i) **Quadrilaterals.** Let $Q$ be a quadrilateral with $\overline Q\subset\Omega$ and marked opposite sides $E_0,E_1$, as in [[def-geometric-quasiconformal-homeomorphism]], and let $\Gamma(Q;E_0,E_1)$ consist of paths in $Q$ joining those sides. Then $f\Gamma(Q;E_0,E_1)=\Gamma(f(Q);f(E_0),f(E_1))$ and
$$K^{-1}\mu\bigl(\Gamma(Q;E_0,E_1)\bigr)\le \mu\bigl(\Gamma(f(Q);f(E_0),f(E_1))\bigr)\le K\mu\bigl(\Gamma(Q;E_0,E_1)\bigr),$$
equivalently
$$K^{-1}\lambda\bigl(\Gamma(Q;E_0,E_1)\bigr)\le \lambda\bigl(\Gamma(f(Q);f(E_0),f(E_1))\bigr)\le K\lambda\bigl(\Gamma(Q;E_0,E_1)\bigr).$$
The same inequalities hold with the other pair of opposite marked sides.

(ii) **Annuli.** Let $\widetilde A\subset\Omega$ be a doubly connected domain, meaning that $\widehat{\mathbb C}\setminus\widetilde A$ has exactly two connected components ([[rem-riemann-sphere-one-point-compactification]]), and put $A=f(\widetilde A)$. Let $\Gamma(\widetilde A)$ and $\Gamma(A)$ be the path families joining the two annular ends. Then
$$K^{-1}\mu(\Gamma(\widetilde A))\le\mu(\Gamma(A))\le K\mu(\Gamma(\widetilde A)),\qquad K^{-1}\lambda(\Gamma(\widetilde A))\le\lambda(\Gamma(A))\le K\lambda(\Gamma(\widetilde A)).$$
For a round annulus $A(r,R)$ the connecting-family extremal length is the conformal parameter $(2\pi)^{-1}\log(R/r)$ and the reciprocal modulus is $2\pi/\log(R/r)$, by [[thm-modulus-rectangle-and-annulus]] and [[thm-round-annulus-conformal-parameter-is-complete-invariant]].

(iii) **Area and null sets.** For every relatively compact Borel set $E\subset\Omega$,
$$\operatorname{area}(f(E))=\int_EJ_f\,dA.$$
In particular, $f^{-1}$ maps Lebesgue-null Borel subsets of $\Omega'$ to null subsets of $\Omega$.

**Annular end-path convention.** In (ii), paths have parameter interval (0,1), are proper, and their tails escape into different ends, defined by the two-collar exhaustion proved below. Local rectifiability means rectifiability on each compact parameter interval. Their nonnegative Borel weighted length is the increasing supremum of those compact-restriction arc-length integrals; a nonrectifiable restriction has infinite length. The displayed extremal-length supremum over finite positive-area densities and reciprocal modulus convention are unchanged. The proof verifies compatibility with ordinary finite-boundary families and transport of the two ends, including punctured and infinite rings.

## Facts & Assumptions

**Given:** AC, the analytic homeomorphism and K, quadrilateral or arbitrary doubly connected subdomain, and the stated path families.

[F1] Both quadrilateral bounds are proved without inverse-null in [[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]. The rectangle and round-annulus numerical constants are [[thm-modulus-rectangle-and-annulus]]; [[thm-round-annulus-conformal-parameter-is-complete-invariant]] fixes the finite-round parameter convention.

[F2] The independent quadrilateral equivalence gives orientation and same-K inverse regularity ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]]). The auxiliary Remark of the inverse lemma records the proved area equality and both null-set properties for the two already-regular maps; it does not assume inverse-null to obtain regularity.

[F3] The core's auxiliary Remark supplies the summable-gradient barrier, weighted AC speed identity and one-direction density pullback. At good differentiability points $\|Df\|_{\rm op}^2\le KJ_f$ by the analytic inequality ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-wirtinger-derivatives]], [[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]).

[F4] Jordan separation and Schönflies give closed Jordan disks and two-sided boundary collars; open connected planar sets are polygonally connected ([[thm-jordan-brouwer-separation]], [[lem-jordan-schoenflies-extension-for-plane-curves]], [[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]). We supply the two-end exhaustion below instead of assuming finite-round uniformization.

## Proof

**Proof technique:** use the earlier quadrilateral core and independent inverse, then compare improper end-path integrals outside a zero-modulus exceptional family.

1.1 For this ring clause, an end path is a proper continuous $\gamma:(0,1)\to\widetilde A$ whose two tails approach different exhaustion ends. It is locally rectifiable if all compact parameter restrictions are rectifiable; define $\ell_\rho(\gamma)=\sup_{0<a<b<1}\ell_\rho(\gamma|_{[a,b]})$, setting this to infinity if any such restriction is nonrectifiable. Define $\lambda$ by the same supremum of $\ell_\rho(\Gamma)^2/A(\rho)$ over finite positive-area Borel densities and $\mu=1/\lambda$, including zero/infinite reciprocal conventions. This local end-path convention allows nonlanding tails, punctures and infinity; it requires no finite global Euclidean length. For a globally rectifiable compact physical-boundary path, atomless arc-length measure makes this improper integral equal its ordinary integral. Compact-trace paths of infinite Euclidean length form a zero-modulus family: for traces in a fixed ball, a constant density on that ball has infinite improper length and arbitrarily small area after scaling; take the countable union over balls. Removing this family preserves modulus by the vanishing-cost barrier argument. Thus the finite-boundary family values agree with the compact-path convention even though end paths allow merely local rectifiability. Scaling densities gives the admissible-area characterization exactly as in the compact convention [[def-extremal-length-and-curve-family-modulus]]. [F1, F3, given, construct]

2.1 Write the spherical complement of $\widetilde A$ as disjoint compact connected sets $K_0,K_1$. Each is nonseparating: the connected domain lies in one component of the open complement of $K_0$; any other component U would lie in the closed $K_1$, while its nonempty boundary lies in $K_0$, contradicting disjointness. For a finite-chart nonseparating continuum K, cover it by finitely many small disks centered on K. Their union is connected because each component meets the covered connected K. Slightly perturb radii within the positive cover margin to avoid the finitely many tangencies/triple intersections. Exposed boundary arcs then form disjoint finite degree-two cycles, hence Jordan curves. Connectedness gives one outer cycle; the others bound holes. Fill those holes to obtain a closed Jordan neighborhood. These neighborhoods can be nested: choose the next disks in the preceding interior, and filling cannot cross the preceding outer boundary. They shrink to K, since each outside point has a path to infinity avoiding K at positive distance, which small enough disk unions miss, placing that point in their exterior. Normalize each $K_i$ in a chart avoiding the other and choose disjoint nested neighborhoods. The closed cores between their Jordan boundaries are compact, nested and exhaust $\widetilde A$. Their complement in the domain has exactly two connected collars: any point in a neighborhood minus K can follow a path avoiding K to its first outer-boundary hit, and all hits connect through the thin inner boundary collar, disjoint from K. Thus each proper tail eventually lies in one consistent collar, and there are exactly two ends. A homeomorphism is proper as a map of these locally compact domains and carries this exhaustion and its two collar components to an exhaustion and two collar components of A. Therefore f induces an end bijection and maps their end-path families bijectively. No extension to individual wild boundary points is asserted. [F4, step 1.1, construct]

3.1 On a countable compact-neighborhood exhaustion of the source use the local barriers of [F3]. Extend each by zero and multiply by positive constants so their $L^2$ norms have finite sum. Their sum G belongs to $L^2$. Every path with a bad compact restriction has infinite G integral; the family Z of such end paths has modulus zero, since G/m is admissible there with area tending to zero. Outside Z, each image compact restriction is AC and has the weighted speed identity. For a nonnegative Borel target density $\tau$, the local chain rule gives $\ell_\tau(f\circ\gamma|_{[a,b]})\le\ell_{(\tau\circ f)\|Df\|_{\rm op}}(\gamma|_{[a,b]})$. Increasing compact parameter intervals to (0,1) proves the same inequality for the improper lengths, including infinite values. The lower-area inequality and $\|Df\|_{\rm op}^2\le KJ_f$, exhausted over compact source sets, give pullback area at most $KA(\tau)$. If $\tau$ is target admissible, the pullback is admissible outside Z; add G/m to handle Z and let its $L^2$ norm tend to zero. Taking infima gives $\mu(\Gamma(\widetilde A))\le K\mu(\Gamma(A))$. This is only one direction. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Apply step 3.1 separately to the independently K-QC inverse in [F2]. Its end correspondence is the inverse of that in step 2.1, so it gives $\mu(\Gamma(A))\le K\mu(\Gamma(\widetilde A))$. Together the two inequalities give the claimed annular bounds. Reciprocals give the extremal-length bounds even when one value is zero or infinite. The finite-round numerical constants follow from [F1]. This argument uses exhaustion for individual lengths and density areas, not an unproved continuity of modulus under arbitrary ring-core exhaustion. [F1, F2, step 2.1, step 3.1, algebra]

5.1 The quadrilateral assertion is [F1], and f carries its joining family onto the full image family because it is a homeomorphism on a neighborhood of its compact closure. Area equality on all relatively compact Borel sets is [F2]; applying it to both f and its independently regular inverse proves their null-set preservation. This establishes the entire area and inverse-null clause and completes all three assertions without using any circular-dilatation or MRMT supplier. [F1, F2, step 4.1, given] ∎

