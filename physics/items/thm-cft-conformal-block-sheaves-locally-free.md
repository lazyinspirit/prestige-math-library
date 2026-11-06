---
id: thm-cft-conformal-block-sheaves-locally-free
kind: theorem
title: Local freeness of C2-cofinite conformal-block sheaves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
- def-cft-voa-conformal-block-and-dual-fusion-product
- def-c2-cofinite-vertex-algebra
- def-grading-restricted-generalized-vertex-module
- def-axiom-of-choice
- lem-cft-c2-cofinite-modules-finitely-generated
- lem-cft-smooth-family-positive-pole-cohomology-and-lifting
- lem-cft-smooth-family-coinvariant-finiteness-and-virasoro-matrices
- lem-cft-fixed-curve-partial-coinvariants-finite
- thm-nakayama-lemma
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-smooth-family-positive-pole-cohomology-and-lifting: mathematical-premise
  lem-cft-smooth-family-coinvariant-finiteness-and-virasoro-matrices: mathematical-premise
  lem-cft-fixed-curve-partial-coinvariants-finite: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
axiom_use: Full AC is inherited from the compact-curve line-bundle Hodge/duality,
  smooth partition and local coherent acyclicity suppliers; no smaller choice bound
  is asserted.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex
      Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces'
    url: https://arxiv.org/pdf/2411.07707v4
    locator: Theorem 3.13, §3.3, PDF p. 45, for local freeness of the sheaf of coinvariants
      and its dual.
proof_strategy: direct
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---



## Statement

Let $V$ be a C2-cofinite conformal vertex algebra of CFT type and let $\widetilde X=(\pi:\mathcal C\to B;\sigma_1,\ldots,\sigma_N)$ be a proper analytic family of compact pointed Riemann surfaces. Assume every connected component of every fiber meets a marked section, and let $W$ be a grading-restricted generalized $V^{\otimes N}$-module on the incoming sections. Then the sheaf of coinvariants defined by the family version of the conformal-block construction above is locally free of finite rank over $B$; its dual sheaf of conformal blocks is locally free of the same finite rank.

## Statement references

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

[[def-c2-cofinite-vertex-algebra]]

[[def-grading-restricted-generalized-vertex-module]]

## Facts & Assumptions

**Given:** Exactly the proper analytic family, component/mark condition and full generalized joint module of the unchanged Statement. In particular the analytic-family definition specifies a proper holomorphic submersion with smooth compact fibers; this proof concerns no nodal fiber.

[F1] [[lem-cft-smooth-family-positive-pole-cohomology-and-lifting]] proves holomorphic direct images, local holomorphic principal-part lifting and base change for sufficiently positive marked-pole twists, by smooth kernel perturbation and an explicit finite nonabelian dbar gauge.

[F2] [[lem-cft-smooth-family-coinvariant-finiteness-and-virasoro-matrices]] constructs, on a connected coordinate polydisc U, global finite coinvariant generators G, actual meromorphic lifts of coordinate vector fields, ideal-preserving Virasoro differential operators, and their actual finite holomorphic presentation matrices. It also proves canonical base change of the residue cokernel and identifies its fiber with the fixed-curve quotient. It assumes no local freeness or coherence of that quotient.

[F3] [[lem-cft-fixed-curve-partial-coinvariants-finite]] gives finite-dimensional coinvariants on each fixed fiber. [[thm-nakayama-lemma]] applies to finitely generated modules over the local holomorphic ring.

## Proof

1.1 First let the base be a sufficiently small coordinate disk U with coordinate q. By F2 choose a fixed finite-dimensional space G with basis $e_1,...,e_d$ generating the global quotient on U, and choose the actual operator $\nabla=\partial_q-A(q)$ on $W\otimes\mathcal O_U$. For every fixed w, A(q)w lies in a fixed finite-dimensional W-span with holomorphic coefficients. The actual geometric reduction gives a holomorphic matrix Omega with $\nabla e_i=\sum_j\Omega_{ij}e_j$ modulo the global Ward ideal. No finite-rank sheaf, flatness or projective anomaly is being assumed to obtain this matrix. [F2, construct]

2.1 Fix a point p in U and a fiber block $\phi_p$ on W there. For constant w define its formal transport $\widehat\phi(w)=\sum_{n\ge0}\phi_n(w)(q-p)^n$ by $\phi_0=\phi_p$ and $$n\phi_n(w)=-\sum_{j=0}^{n-1}\phi_j(A_{n-1-j}w),\qquad A(q)=\sum_{k\ge0}A_k(q-p)^k.$$ Each expression is finite and defines a linear functional on W, without a completion of W. On arbitrary formal sections the recursion is precisely $\partial_q\widehat\phi(s)=\widehat\phi(\nabla s)$. Since F2 proves that nabla preserves the sheaf Ward ideal, $\partial_q^n\widehat\phi(r)|_p=\phi_p((\nabla^nr)|_p)=0$ for every local Ward relation r. Thus the formal transport annihilates every local relation near p, not only globally chosen ones. [F2, step 1.1, algebra]

3.1 The formal vector $f=(\widehat\phi(e_i))_i$ satisfies $f'=\Omega f$. This actual finite system has a holomorphic solution throughout the disk U for each prescribed initial value at p. Explicitly its fundamental matrix is the Picard series of iterated integrals of Omega along the segment from p to q. On a compact convex subdisk containing the segment, the nth term has norm at most $M^n|q-p|^n/n!$. Hence the series converges locally uniformly, is holomorphic, and solves the equation by differentiation. The same recursion gives uniqueness of its Taylor coefficients. Solving the inverse equation $H'=-H\Omega$ shows that its fundamental matrix is invertible. Exhausting U by such compact sets gives the assertion on all U; no convergence theorem for an unspecified formal system is cited. [step 1.1, step 2.1, algebra]

4.1 For every constant w, F2's global reduction supplies holomorphic coefficients $c_{(w,j)}$ on the same U with $w-\sum_jc_{w,j}e_j\in J_{\mathrm{pre}}(U)$. Define $\phi(w)=\sum_jc_{w,j}f_j$. Near p its Taylor series equals the formal transport, by step 2.1. Different choices of the coefficients give the same analytic function: their difference has zero Taylor series at p, hence vanishes on connected U. The same argument proves linearity in w and the initial-value identity. Thus this defines one actual sheaf morphism $W\otimes\mathcal O_U\to\mathcal O_U$ on the entire common U, not merely an assignment of germs with w-dependent radii. Its dual differential equation follows first formally near p and then everywhere by the identity theorem. [F2, step 2.1, step 3.1, algebra]

5.1 We verify all Ward tests, without assuming global generation of infinitely many other direct-image bundles. Fix a state cutoff n, a sufficiently positive pole order k, and a fixed w. By F1 the bundle $H_{n,k}=\pi_*(V_{\le n,C}\otimes K_{C/U}(kD))$ is an actual holomorphic bundle on U with its canonical fiber evaluation. Residue action on w defines a holomorphic bundle map $H_{n,k}\to S\otimes\mathcal O_U$, where S is a fixed finite-dimensional W-span: the state stage and pole order are finite, and high positive modes kill w uniformly on a basis of that state stage. Composing with phi gives a holomorphic bundle map $T_{n,k,w}:H_{n,k}\to\mathcal O_U$. Near p choose any finite holomorphic frame of $H_{(n,k)}$. Step 2.1 says that its images under T have zero Taylor series at p. They are analytic by step 4.1, so T is zero on a neighborhood of p. The identity theorem for a holomorphic bundle map on connected U gives $T=0$ on all U. [F1, F2, step 2.1, step 4.1, algebra]

6.1 Every finite-state finite-pole differential on any fiber belongs to one of the stages in step 5.1 after increasing k. F1's fiber identification therefore says that phi annihilates its residue action at that point. This proves pointwise the full Ward condition, and it proves sheaf annihilation too: the scalar image of a local relation is holomorphic and vanishes at every point of its domain. Thus phi is a genuine family conformal block. The finite-dimensional bundle argument in step 5.1 is the reason no common-radius assumption or unnamed Cartan-A generation theorem is needed for all local Ward tests. [F1, F2, step 5.1, algebra]

7.1 For any two points p,q in U, transport defines a linear map between their fiber block spaces. The reverse transport has the same finite matrix Omega. Uniqueness of the holomorphic matrix solution in step 3.1 shows that the two maps are inverse on their $e_i$ values, hence on all W by the common reduction of step 4.1. Consequently the finite number $\dim\operatorname{CB}(C_q,W)$ is constant on U. For a higher-dimensional coordinate polydisc, join its center to any point by its complex radial line. The pulled-back family is again a smooth proper marked family. The disk argument applies locally at every point of this connected line, so the fiber block dimension is locally constant along it and therefore the same at its endpoints. F2's fiber identification makes this exactly the rank function of Q on the polydisc. This proves local constancy in arbitrary base dimension without claiming a flat multidimensional connection. [F2, F3, step 3.1, step 4.1, step 6.1, algebra]

8.1 Q is of finite type by F2. At a base point choose n of its finite generators whose fiber values form a basis, where n is the constant fiber dimension just proved. Nakayama's lemma makes their germs generate its stalk. Expressing the original finitely many generators by them at that stalk and shrinking once gives a sheaf epimorphism $\mathcal O_U^n\to Q|_U$. Its fiber map is an isomorphism at every point because the rank is constantly n. A local relation $\sum_j f_je_j=0$ therefore has $f_j(b)=0$ at every b; each holomorphic $f_j$ is zero. Thus the epimorphism is injective as well, and Q is locally free of finite rank n. This argument deliberately uses finite type plus the proved constant fiber rank; it does not assume that a finite-type analytic quotient is automatically coherent. [F2, F3, step 7.1, algebra]

9.1 The conformal-block sheaf in the Statement is the O-linear dual of Q by definition. The dual of a rank-n locally free sheaf is locally free of rank n, by dualizing its local basis. Step 8.1 therefore proves both claims of the original Statement. All modes in the geometric connection were conformal Virasoro modes; auxiliary module gradings entered only the finite-generation reduction. No sewing convergence, nodal extension, scalar curvature or Hodge-line normalization has been silently added to the conclusion. [F2, step 8.1, algebra] ∎
