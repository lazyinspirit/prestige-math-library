---
id: thm-degree-one-thin-annulus-lifts-propagate-quadratic-mass-through-holomorphic-spots
kind: theorem
title: Degree-one thin-annulus lifts propagate quadratic mass through holomorphic spots
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-schwarz-pick-lemma-on-the-unit-disc
  - thm-covering-space-lifting-criterion
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-a-very-short-geodesic-forces-definite-quadratic-mass-in-its-thin-annuli
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
  - cor-holomorphic-mean-value-property
  - thm-weierstrass-convergence-holomorphic-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section7.3 observationII and propagation, printed452–453, actual full Sections2.3–2.4 and5–7 read. Primitive loxodromic image and degree-one lift hypotheses below are explicit geometric interfaces, not inferred from holomorphic inclusion alone.
---

## Statement

Assume AC, hence Countable Choice. Supply a connected complete hyperbolic surface $X$, finitely many connected complete finite-area hyperbolic surfaces $Y_a$ of compact cusp type $(g_a,N_a)$, and a finite or countable family of data
$$p_j:U_j\longrightarrow X,\qquad i_j:U_j\hookrightarrow Y_{a(j)}.$$
Here $U_j$ is a connected complete hyperbolic surface, $p_j$ is a holomorphic covering and local hyperbolic isometry, and $i_j$ is an injective holomorphic map. For each $a$, require the open sets $i_j(U_j)\subset Y_a$ with $a(j)=a$ to be pairwise disjoint. Supply integrable holomorphic quadratics $q_a$ on $Y_a$, and put $\kappa_j=i_j^*q_{a(j)}$. Then
$$\phi=\sum_j(p_j)_*\kappa_j$$
is a well-defined integrable holomorphic quadratic on $X$, by the sum over all local inverse branches, with $\|\phi\|_1\le\sum_a\|q_a\|_1$.

Fix $0<\varepsilon<\eta_*/2$ and a primitive geodesic $\alpha$ on $X$ of length $0<\ell<\varepsilon/2$. Write $A$ for its geodesic $\varepsilon$-thin annulus and $\mu=\int_A|\phi|$. For each $j$ supply a union $G_j$ of connected components of $p_j^{-1}(A)$ with the following two properties: each component maps by $p_j$ with degree ONE onto $A$, and the image under $i_j$ of its primitive core class is a nontrivial PRIMITIVE LOXODROMIC class of $\pi_1(Y_{a(j)})$. Suppose
$$\sum_j\int_{p_j^{-1}(A)\setminus G_j}|\kappa_j|\le b<\mu.$$
Then with
$$R=\sum_a(3g_a-3+N_a)$$
one has $R\ge1$, and some $Y_a$ contains a primitive geodesic $\beta$ of length at most $\ell$ whose geodesic $\varepsilon$-thin annulus $B_\beta$ satisfies
$$\int_{B_\beta}|q_a|\ge\frac{\mu-b}{R}>0.$$
The class $\beta$ is the image core class of an ACTUAL supplied degree-one component, with orientation forgotten. No covering is required to be regular, and neither the number of spots nor their covering degrees is bounded. The primitive/nonperipheral image condition and the small omitted mass are genuine supplied hypotheses; this theorem does not obtain them from holomorphic embedding or from an abstract subgroup intersection.

## Facts & Assumptions

**Given:** AC, the surface covering/embedding data and finite family of integrable target quadratics, then the short annulus and selected good degree-one components with the stated actual image classes and omitted-mass bound.

[A1] Full choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] Holomorphic maps between supplied hyperbolic universal models decrease the hyperbolic metric and distance, by the disc Schwarz–Pick inequality. [[thm-schwarz-pick-lemma-on-the-unit-disc]] Continuous maps from the simply connected model lift through a covering, uniquely after choosing a base lift; local conformal inverse charts make a lift holomorphic. [[thm-covering-space-lifting-criterion]]

[F2] The local thin classifier gives an embedded cyclic annulus for a primitive loxodromic short core. Its full inverse image in the universal model is the cyclic element's displacement band. The complete model quotient supplies axis translation lengths and covering descriptions. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]] A type-$(g,N)$ finite-area surface has at most $3g-3+N$ geodesic thin annuli. [[thm-a-very-short-geodesic-forces-definite-quadratic-mass-in-its-thin-annuli]], component-count clause.

[F3] For an injective conformal coordinate map, absolute quadratic mass changes by its real Jacobian. Nonnegative branch sums obey completed Tonelli–Fubini. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-tonelli-and-fubini-for-completed-product-measures]]

[F4] A holomorphic coefficient equals its circular average; integration over radii gives $|f(z)|\le(\pi r^2)^{-1}\int_{D(z,r)}|f|$ on every interior disc. A locally uniform limit of holomorphic functions is holomorphic. [[cor-holomorphic-mean-value-property]], [[thm-weierstrass-convergence-holomorphic-functions]]

## Proof

1.1 Disjointness and conformal change of variables [F3] give $$\sum_j\|\kappa_j\|_1=\sum_a\int_{\bigcup_{a(j)=a}i_j(U_j)}|q_a|\le\sum_a\|q_a\|_1<\infty.$$ Every surface has a countable coordinate basis, and a discrete fiber of a covering is countable: disjoint evenly covered neighborhoods give one distinct basis element about each fiber point. On a simply connected coordinate disc $D\Subset X$, the covering lifts [F1] give countably many single-valued inverse branches, one for each sheet. In that coordinate write their pushed coefficients as $h_{j,k}$. For every Borel $E\subset D$, [F3] yields $$\int_E\sum_{j,k}|h_{j,k}|=\sum_j\int_{p_j^{-1}(E)}|\kappa_j|.$$ In particular the sum is finite almost everywhere. Its coefficient sum converges normally on smaller discs: the $L^1$ norm of a tail on $D$ tends to zero by the finite total sum, and the disc mean bound [F4] bounds the supremum of each finite holomorphic tail on $D'\Subset D$ by a fixed constant times that $L^1$ tail. Thus partial sums are uniformly Cauchy there. Their limit is holomorphic by [F4] and equals the almost-everywhere absolute branch sum. On overlapping coordinates the usual squared-derivative rule holds for each branch, hence for the locally uniform sum, so these coefficients define a quadratic $\phi$. Cover $X$ by countably many disjoint Borel coordinate pieces and use the displayed identity and triangle inequality to conclude $\|\phi\|_1\le\sum_j\|\kappa_j\|_1$. This also proves independence from enumerations or inverse-chart choices. [A1, F1, F3, F4, given, construct, algebra]

2.1 Consider a good degree-one component $C\subset G_j$. Since $p_j$ is a local isometry and maps $C$ bijectively onto $A$, it identifies $C$ isometrically with that actual displacement annulus. Its primitive core has length exactly $\ell$. Its class is primitive in $\pi_1(U_j)$: if it were a proper power there, applying $(p_j)_*$ would make the primitive class of $\alpha$ a proper power on $X$. Lift $i_j$ between the model universal covers using [F1]. If $h$ is this source primitive core element and $h'$ its supplied primitive loxodromic image, uniqueness of lifts gives $$\widetilde i_j(hz)=h'\widetilde i_j(z).$$ Schwarz–Pick gives $$d(\widetilde i_j(z),h'\widetilde i_j(z))\le d(z,hz).$$ At axis points the right side is $\ell$, so the target translation length is at most $\ell$. At every point of the displacement band projecting to $C$ the right side is less than $2\varepsilon$. Therefore $i_j(C)$ lies in the geodesic $\varepsilon$-thin annulus of the actual primitive target element $h'$ by [F2]. Its core $\beta_C$ has length at most $\ell<\varepsilon/2$. This proves the required annulus inclusion and length comparison with all image-type assumptions explicit. [F1, F2, given, construct, algebra]

3.1 Apply the absolute branch identity from step 1.1 to $A$, partitioning it into countably many coordinate pieces if necessary. It gives $$\mu=\int_A|\phi|\le\sum_j\int_{p_j^{-1}(A)}|\kappa_j|\le b+\sum_j\int_{G_j}|\kappa_j|.$$ Hence $\sum_j\int_{G_j}|\kappa_j|\ge\mu-b>0$. For each $a$, let $\mathcal B_a$ be the DISTINCT target $\varepsilon$-thin annuli obtained from the good components by step 2.1. Each image $i_j(C)$ is contained in the indicated annulus. Within a fixed $Y_a$ all these images are pairwise disjoint: this is the assumed spot disjointness when the indices differ, and injectivity of $i_j$ when they agree. Consequently change of variables and nonnegative additivity give $$\sum_j\int_{G_j}|\kappa_j|\le\sum_a\sum_{B\in\mathcal B_a}\int_B|q_a|.$$ In particular this step does not bound the number of covers, preimage annuli or spots by a surface complexity; only DISTINCT target annuli will be counted. Multiple good components contributing to the same target class are combined without overcounting their mass. [F3, step 1.1, step 2.1, given, construct, algebra]

4.1 By [F2], $|\mathcal B_a|\le3g_a-3+N_a$, so the total number of target annuli in step 3.1 is at most $R$. The positive lower bound in that step makes the family nonempty, hence $R\ge1$. One of its members has mass at least $(\mu-b)/R$; otherwise summing its at most $R$ strictly smaller masses would contradict step 3.1. Its primitive target core has length at most $\ell$ by step 2.1 and represents the image of an actual selected source core. This proves every assertion, with no regular-cover assumption and no inference that all nontrivial preimage annuli have degree one. [F2, step 2.1, step 3.1, given, construct, algebra] ∎

## Actual reading and remaining operation

The authentic complete Iteration Sections2.3–2.4 and5–7 were read. Its Section7.3 observationII is realized here with all covering, primitive image and omitted-mass hypotheses written explicitly. The actual full disc Schwarz–Pick, covering-lift, local thin/model, short-core component-count, real change-of-variables, completed Tonelli–Fubini, circular holomorphic mean and Weierstrass convergence proofs were read. Normality of the branch series and target-annulus mass accounting are proved above; neither an unproved Poincare-series completeness theorem nor a regular-cover formula is imported.

For actual geometric spots one must still prove that the selected classes are primitive loxodromic on BOTH relevant surface sides and that the good degree-one part carries all but the specified mass. Root-closure for actual distinct simply connected ordinary components is a relevant separate proposed geometric supplier, not assumed to identify arbitrary subgroups here. Three-dimensional cylinder and essential-torus conclusions remain outside this theorem. All older frozen sources are unchanged.
