---
id: lem-cft-three-intertwiner-tree-expansions-and-local-moves
kind: lemma
title: Three-intertwiner tree expansions and extension of local associativity moves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 6
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-spectral-expansion-product-iterate-factorization
  - lem-cft-real-exponential-polynomial-uniqueness
  - lem-cft-real-weight-nested-tensor-spanning
  - lem-cft-pz-parallel-transport
dependency_roles:
  lem-cft-spectral-expansion-product-iterate-factorization: mathematical-premise
  lem-cft-real-exponential-polynomial-uniqueness: mathematical-premise
  lem-cft-real-weight-nested-tensor-spanning: mathematical-premise
  lem-cft-pz-parallel-transport: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part VIII, Proposition 12.7, Corollary 12.8 and Proposition 12.9"
      url: https://arxiv.org/pdf/1110.1931v2
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Work in a full category of strongly graded generalized modules with real weights and objectwise uniform nilpotence. Suppose binary product-iterate factorization in both directions has the conclusion of the spectral factorization lemma. Suppose every scalar right-associated product of three intertwiners converges absolutely in its radial domain, continues on the configuration space of four ordered leaves, and has the finite power/log convergent expansion form of a regular-singular system at every permitted boundary collection, including its nested-cluster sewing charts. The latter means a finite sum of products of complex powers of local boundary coordinates and nonnegative integral powers of their logarithms, times convergent power series after a fixed finite integral shift.

Put $z_{ij}=z_i-z_j$, with four leaves at $z_1,z_2,z_3,0$. All five triple-intertwiner tree series converge absolutely in the following indicated sewing regions, continue to the same scalar germ after applying the binary comparison maps, and obey those comparisons even when a compared input is itself a completed universal-map value:

| Tree | Absolute convergence region |
| --- | --- |
| $1(2(34))$ | $\vert z_1\vert >\vert z_2\vert >\vert z_3\vert >0$ |
| $1((23)4)$ | $\vert z_3\vert >\vert z_{23}\vert >0$, $\vert z_1\vert >\vert z_3\vert +\vert z_{23}\vert $ |
| $(1(23))4$ | $\vert z_3\vert >\vert z_{13}\vert >\vert z_{23}\vert >0$ |
| $((12)3)4$ | $\vert z_{23}\vert >\vert z_{12}\vert >0$, $\vert z_3\vert >\vert z_{23}\vert +\vert z_{12}\vert $ |
| $(12)(34)$ | $\vert z_2\vert >\vert z_{12}\vert +\vert z_3\vert >0$ |

Every row is intersected with the nonsingular configuration locus $z_i\ne0$ and $z_i\ne z_j$ for $i\ne j$; in particular all inner edge insertion parameters are nonzero.

These claims apply to arbitrary composable intertwiners, in particular the universal ones. The comparisons preserve the actual analytic continuation paths and endpoint logarithms. No finite-exponent-coset restriction is imposed on the module category.

## Facts & Assumptions

**Given:** The exact binary factorization and triple analytic hypotheses of the Statement. The regular-singular expansion clause is a given analytic hypothesis here, not a conclusion from formal Ward identities.

[F1] [[lem-cft-spectral-expansion-product-iterate-factorization]] proves unique natural binary comparisons with full Jacobi and the specified overlap branches.

[F2] [[lem-cft-real-exponential-polynomial-uniqueness]] supplies normality and uniqueness for real spectral supports of arbitrary shape.

[F3] [[lem-cft-real-weight-nested-tensor-spanning]] supplies spanning for universal trees whose binary products have the restricted-dual realization and component-spanning property, provided all-index convergence holds also after arbitrary finite leaf $L(-1)$ insertions. The restricted-dual realization is an additional hypothesis for this auxiliary spanning conclusion, not a requirement for the convergence and completed-input comparisons asserted here.

[F4] [[lem-cft-pz-parallel-transport]] supplies reconstruction, finite logarithmic degree and endpoint transport.

## Proof

1.1 First record an elementary convergence principle for the given regular-singular germs. On a punctured complete Reinhardt domain $D^*\subset\mathbb C^2$, suppose a multivalued analytic function has near the origin a finite power/log expansion. The local coordinate monodromies then satisfy fixed polynomial annihilators $(T_x-\rho_1)^{k_1}\cdots(T_x-\rho_l)^{k_l}$ and the analogous polynomial for $T_y$. These relations continue throughout the connected logarithm cover by the identity theorem. The two coordinate monodromies commute because the domain retracts radially onto its coordinate tori: logarithmic radii lie in a connected convex set for each of the domains used below. Their translates span a finite-dimensional monodromy-invariant vector space: the two polynomial annihilators reduce all powers of $T_x,T_y$ to finitely many powers. On it choose commuting logarithms $B_x,B_y$ of the commuting monodromy matrices, by choosing scalar logarithms on generalized eigenspaces and using the finite nilpotent logarithm series; polynomial interpolation in each monodromy matrix makes the choices commute. For the vector $F$ of a basis of branch functions, $H=\exp(-B_x\log x-B_y\log y)F$ is single-valued on $D^*$. The given local finite power/log form implies that $H$ has at most finite Laurent poles at the origin: the exponent classes coincide modulo integers by the chosen monodromy eigenvalues, and the nilpotent logarithm factors cancel the finite log polynomials. After a finite monomial shift its entries thus have ordinary Taylor expansions near the origin. Their Laurent coefficient integrals on product tori are independent of the chosen radii: connect the radii by a compact chain of overlapping polyanuli and apply the one-variable Cauchy theorem in each variable. The coefficients of negative powers vanish because they vanish near the origin. Their multiple Taylor series therefore converge absolutely on all of $D$: at any point choose a slightly larger product torus still in $D$, and the product Cauchy bound majorizes the series by a product of two geometric series. This proves global normal convergence on compact subsets of $D$ of the finite power/log expansion. It proves double absolute convergence, not merely convergence after one index has been summed. [given, algebra]

1.2 Normalize a nonzero sewing scale by the $L(0)$ conjugation identity in F4. Fixed homogeneous exterior vectors contribute only a finite power/log prefactor, and finite sums of such vectors cause no difficulty. For $1((23)4)$ take $x=z_3/z_1$, $y=z_{23}/z_3$; its normalized domain is $|y|<1$, $|x|(1+|y|)<1$. For $(1(23))4$ take $x=z_{13}/z_3$, $y=z_{23}/z_{13}$; its domain is the bidisc. For $((12)3)4$ take $x=z_{23}/z_3$, $y=z_{12}/z_{23}$; its domain is again $|y|<1$, $|x|(1+|y|)<1$. For $(12)(34)$ take $x=z_{12}/z_2$, $y=z_3/z_2$; its domain is $|x|+|y|<1$. Each domain is complete Reinhardt, and its logarithmic-radius set is convex: for the sum domains this follows from convexity of $\log(e^a+e^b)$, verified by its positive-semidefinite Hessian; the other inequalities are linear or $a+\log(1+e^b)<0$, whose second derivative in $b$ is positive. Their corners $x=y=0$ are respectively the collision of leaves2,3 with outer infinity (equivalently, after normalizing $z_1$ instead, nested clusters234 and23); the nested clusters123 and23; the nested clusters123 and12; and the two separate clusters12 and34. Thus the given regular-singular hypothesis applies in precisely these charts. [given, F4, algebra]

2.1 This principle also identifies real generalized-weight coefficients without assuming their supports are discrete. On an overlap where a coefficient function has an absolutely convergent real-exponential polynomial expansion, apply a coordinate-monodromy annihilator from step 1.1 to that expansion. The endpoint coefficient sums in F2 extend each real-exponential series normally to the entire vertical strip between those real endpoints: $|e^{hs}|$ depends only on $\operatorname{Re}s$, and its finitely many log-polynomial factors are bounded on each compact set. Hence the finite shifts $s\mapsto s+2\pi i$ used by monodromy are legitimate even when they leave the originally chosen small neighborhood. Normality on that full strip permits the finite monodromy operations. The coefficient of the largest logarithmic power at exponent $h$ is multiplied by the annihilator evaluated at $e^{2\pi ih}$. Uniqueness in F2 therefore makes it zero unless that number is zero. Descending on logarithmic degree shows that every nonzero real exponent lies in one of finitely many real cosets modulo $\mathbb Z$, namely those corresponding to the annihilator's unit-circle roots; other roots contribute no real-weight coefficients. The nilpotence orders bound the logarithmic degrees. Polynomial interpolation now reduces these real series to the same ordinary Laurent coefficient functions as step 1.1. Hence their coefficients are uniquely the Taylor/Laurent coefficients of that continued regular-singular germ. Apply this argument first to one coordinate coefficient and then the other. It needs only one-variable absolute convergence at each extraction stage; the final double absolute convergence is then the independent Cauchy conclusion of step 1.1. [F2, step 1.1, algebra]

3.1 Starting with a specified triple tree, apply F1 to two neighboring vertices to replace their binary iterate by a product, or their product by an iterate, until it is the right-associated tree. At this stage use only coefficient identities: hold one intermediate generalized-weight projection fixed, so the corresponding vector is an actual vector in a finite-dimensional component, and apply the already proved binary comparison to the other two operators. Every such application is legitimate for actual inputs. It gives equality on the binary overlap and hence equality of the continued coefficient germs. The required sequences are $1((23)4)\to1(2(34))$, $(1(23))4\to1((23)4)\to1(2(34))$, $((12)3)4\to(12)(34)\to1(2(34))$, and $(12)(34)\to1(2(34))$. In each first move hold the unaffected deepest component fixed, or hold the outer finite testing component fixed; thus each comparison is an actual binary one. As an explicit coefficient check for $1((23)4)$, normalize $z_3=1$, put $y=z_{23}$, and write its inner iterate as $Y_2(Y_3(w_2,y)w_3,1)w_4$. F1 replaces it on $|1+y|>1>|y|$ by $Y_4(w_2,1+y)Y_5(w_3,1)w_4$. The outer operator $Y_1(w_1,1/x)$ then gives the given right-associated triple germ. At each fixed outer weight its coefficient pairs the inner object with an actual finite-component functional, so the binary equality identifies its $y$-coefficients with the original inner projections before any outer infinite sum is interchanged. This fixed-component one-variable series is absolutely convergent by F1, so F2 applies to it on its actual binary overlap; only afterward does the regular-singular Laurent expansion identify the outer coefficient and provide the double Cauchy bound. The other listed moves use exactly the same fixed-component argument in their displayed pair of objects. The resulting right-associated product has an all-index absolutely convergent scalar coefficient and a continued analytic function by the Given triple hypothesis. Its coefficients in a sewing coordinate are therefore the same coefficient germs just obtained, by F2 uniqueness. Near the appropriate corner of step 1.2 its regular-singular expansion exists by hypothesis. Applying step 2.1 successively identifies its two-coordinate coefficients with exactly the two formal intermediate projections of the original tree: the first extraction holds the other component fixed and uses F1 on actual vectors, and the second extraction uses its corresponding binary equality. No truncated projection is asserted to be a module morphism. [given, F1, F2, step 2.1, step 1.2, algebra]

4.1 By step 1.1 the identified double expansion is absolutely convergent throughout the appropriate complete Reinhardt domain. Undo the normalization in step 1.2 to obtain exactly the four indicated target-tree sewing regions; the right-associated region is Given. Normality of all derivatives follows either from product Cauchy estimates for the finite power/log expansion or from the multivariable interpolation-and-corner proof in F3. Equality of the sums on the binary overlaps and analytic continuation gives the same continued scalar germ with the specified paths. Thus double absolute convergence has been proved from the regular-singular hypothesis and coefficient identification; it has not been inferred merely from the existence of binary equalities or from grouped convergence. [given, F1, F2, F3, step 1.1, step 1.2, step 3.1, algebra]

5.1 Now insert a completed universal value as one input of a binary comparison. Replace it temporarily by a finite sum of its actual homogeneous components and apply the binary equality to that actual vector. In scalar pairings, both sides have precisely the tree expansions established in step 4.1. Their normal double absolute bounds permit passage to the limit through the finite partial sums by the finite-subsum criterion for absolute convergence; the limit is independent of the order of the two indices. This proves the comparison on completed inputs. If it is followed by a module map, take its restricted transpose on the final testing functional; it preserves weights and each finite-dimensional component, and the same argument applies. Thus no naturality claim for a nonintertwining finite-weight projection is needed. For the auxiliary spanning assertion, suppose additionally that the binary universal products have the restricted-dual realization and component-spanning property required by F3. Every finite leaf L(-1) insertion is another actual leaf vector in the same module, and the Given hypotheses quantify over all such vectors. Steps 1.1–4.1 therefore prove the required all-index convergence for those inserted vectors as well. Under that additional binary-realization hypothesis, all hypotheses of F3 hold and it gives spanning of the continued universal nested values in each of the five trees. The completed-input comparison itself was proved above without this auxiliary spanning assertion. [F1, F3, F4, step 3.1, step 4.1, algebra] ∎
