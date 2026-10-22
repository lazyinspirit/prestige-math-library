---
id: pthm-emx-topological-zero-modes
kind: physics-theorem
title: Absolute and PEC-relative discrete Maxwell zero modes
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: physics
library: physics
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-emx-whitney-semidescretization
  - def-na-lowest-order-whitney-de-rham-spaces
  - lem-na-full-dirichlet-hcurl-regular-decomposition
  - thm-na-discrete-compactness-and-poincare-lowest-order-nedelec
  - thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes
  - thm-na-uniformly-bounded-commuting-cochain-projection
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-emx-whitney-semidescretization: formulation-prerequisite
  def-na-lowest-order-whitney-de-rham-spaces: mathematical-premise
  lem-na-full-dirichlet-hcurl-regular-decomposition: mathematical-premise
  thm-na-discrete-compactness-and-poincare-lowest-order-nedelec: mathematical-premise
  thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes: mathematical-premise
  thm-na-uniformly-bounded-commuting-cochain-projection: mathematical-premise
aliases: []
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A conditional mathematical statement about the full absolute Whitney mesh complex and the separate closure-defined PEC relative edge complex used by the semidiscrete Maxwell model. The full-complex mode count uses Countable Choice; the relative-family compactness and quotient bound require the stronger choice, regular-decomposition, projection, domain, and mesh assumptions stated. It makes no empirical claim and does not identify relative PEC modes with absolute Betti numbers.
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete University of California, Irvine lecture notes, updated May 17 2024"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Entire 10-page PDF inspected. Section 3, PDF pp. 8-10: the full finite-element de Rham complex, cohomology, and the caution that exactness depends on domain topology; relative boundary complexes are separately identified."
    - title: "Ralf Hiptmair, Finite elements in computational electromagnetism, Acta Numerica 11 (2002), pp. 237-339, complete author-hosted PDF"
      url: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf
      locator: "Entire 103-page PDF inspected. Sections 2.4 and 3.1-3.2, printed pp. 251-263: H(curl) kernels, absolute and relative continuous cohomology, oriented cochains, Whitney forms, and the full-complex Betti count."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability, Bulletin of the American Mathematical Society 47 (2010), pp. 281-354"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "Entire 70-page PDF inspected. Sections 3.3-3.5 and 5.6-6.2, PDF pp. 23-27 and 57-61: harmonic spaces, cohomology preservation by bounded cochain projections, full Whitney cohomology, and the distinct complex with essential boundary conditions."
---

## Statement

Let T be a finite matching affine tetrahedral mesh whose realization is closure(Omega), with Omega a nonempty bounded Lipschitz polyhedron. Let W_h^0,N_h^1,N_h^2,N_h^3 be the full lowest-order Whitney de Rham spaces of [[def-na-lowest-order-whitney-de-rham-spaces]], and use their real L^2 inner products. Define

$$\mathcal H_h^1:=\ker(\operatorname{curl}|_{N_h^1})\cap(\nabla W_h^0)^\perp,\qquad \mathcal H_h^2:=\ker(\operatorname{div}|_{N_h^2})\cap(\operatorname{curl}N_h^1)^\perp,\qquad \beta_k:=\dim_{\mathbb R}H_k(|\mathcal T|;\mathbb R)\quad(k=1,2).$$

Under Countable Choice, dim_R H_h^1=beta_1 and dim_R H_h^2=beta_2 for the full complex. These are the harmonic complements for the full, absolute finite-element complex.

For the separate PEC-relative family, assume the full Axiom of Choice, including its Countable Choice and Dependent Choice consequences, and let {T_h} be a shape-regular family of matching affine tetrahedral meshes of the same Omega with h=max_K diam(K)->0. Assume also the exact full-Dirichlet H(curl) regular decomposition and the relative commuting-projection hypotheses stated in Facts & Assumptions below. For each mesh write V_h:=N_h^1 intersect H_0(curl;Omega), S_h:=W_h^0 intersect H_0^1(Omega), K_h:=ker(curl|_{V_h}), B_h:=grad S_h, and H_h^rel:=K_h intersect B_h^\perp, with orthogonality in real L^2. Put

$$X_h:=\{v_h\in V_h:(v_h,\nabla q_h)_{L^2}=0\ \text{for every }q_h\in S_h\},\qquad Z_h:=V_h\cap K_h^\perp.$$

Then K_h=B_h direct-sum H_h^rel, every sequence v_h in X_h bounded in H(curl;Omega) has an L^2-convergent subsequence, and there is a constant C independent of h such that ||v_h||_2<=C||curl v_h||_2 for every v_h in Z_h; the constant C has units metres when v_h is an electric field. If H_h^rel contains a nonzero vector for a mesh, that vector lies in X_h and has zero curl, so no curl Poincare inequality holds on that X_h. The full-complex absolute Betti count in the first clause is not asserted for this relative PEC kernel.

## Statement references

[[def-emx-whitney-semidescretization]]

[[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]]

[[lem-na-full-dirichlet-hcurl-regular-decomposition]]

[[thm-na-uniformly-bounded-commuting-cochain-projection]]

[[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]]

## Diagram

The diagram gives the moment-coordinate identification for the full complex. The vertical arrows send a piecewise scalar to its vertex values, an edge field to its oriented edge circulations, a face field to its oriented face fluxes, and a cellwise constant to its cell integrals. The bottom arrows are oriented simplicial coboundaries. The commuting squares mean that the edge, face, and cell moments of grad, curl, and div are the signed sums on the corresponding oriented boundaries. This is the finite-complex interface proved by the cited mathematical supplier; no proof step below relies on the drawing.

~~~tikzcd
\begin{tikzcd}
W_h^0 \arrow[r,"\nabla"] \arrow[d,"\cong"'] &
N_h^1 \arrow[r,"\operatorname{curl}"] \arrow[d,"\cong"'] &
N_h^2 \arrow[r,"\operatorname{div}"] \arrow[d,"\cong"'] &
N_h^3 \arrow[d,"\cong"] \\
C^0(\mathcal T;\mathbb R) \arrow[r,"\delta^0"] &
C^1(\mathcal T;\mathbb R) \arrow[r,"\delta^1"] &
C^2(\mathcal T;\mathbb R) \arrow[r,"\delta^2"] &
C^3(\mathcal T;\mathbb R)
\end{tikzcd}
~~~

## Facts & Assumptions

**Given:** The full mesh complex above with Countable Choice. For the separate relative-family clause, also assume the Axiom of Choice, the shape-regular refining family on a bounded Lipschitz polyhedron, and the precise regular-decomposition and projection interfaces below.

[A1] Countable Choice is the choice hypothesis of the full lowest-order cohomology theorem and the real L^2 interfaces. [[def-countable-choice]]

[A2] The relative-family theorem assumes the full Axiom of Choice; its uses include the Countable Choice and Dependent Choice consequences explicitly listed by that theorem. [[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

[F1] [[def-na-lowest-order-whitney-de-rham-spaces]]: W_h^0 is continuous piecewise P1; N_h^1 is the assembled lowest-order Whitney edge space with one oriented circulation per global edge; N_h^2 is the assembled RT0 face space with one oriented flux per global face; N_h^3 is cellwise constant.

[F2] [[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]]: under Countable Choice, the degrees of freedom identify the full finite-element complex with the real simplicial cochain complex; its degree-one and degree-two harmonic complements have dimensions dim_R H_1(|T|;R) and dim_R H_2(|T|;R). The theorem does not identify this absolute complex with a PEC-relative complex.

[F3] [[def-emx-whitney-semidescretization]]: H_0(curl) is the closure-defined PEC space, S_h=W_h^0 intersect H_0^1, V_h=N_h^1 intersect H_0(curl), and the discrete gradient maps S_h into V_h.

[F4] [[lem-na-full-dirichlet-hcurl-regular-decomposition]]: under the Axiom of Choice, for every nonempty bounded Lipschitz open Omega, each u in H_0(curl;Omega) has u=z+grad q with z in H_0^1(Omega;R3), q in H_0^1(Omega), and ||z||_{H^1}+||q||_{H^1}<=C_Omega||u||_{H(curl)}. No contractibility or mesh hypothesis is imposed by this decomposition.

[F5] [[thm-na-uniformly-bounded-commuting-cochain-projection]]: for a shape-regular refining family of matching affine tetrahedral meshes, the boundary-corrected relative projections include pi_h^0:H_0^1->S_h and pi_h^1:H_0(curl)->V_h, uniformly bounded in graph norm, identity on their targets, commuting with grad and curl, and strongly convergent on the stated graph domains.

[F6] [[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]]: under AC, bounded Lipschitz domain and shape-regular refining family, plus the regular decomposition [F4] and relative projections [F5], it proves discrete compactness on X_h and the uniform curl Poincare inequality on Z_h=V_h intersect K_h^\perp. It also states that a nonzero relative harmonic vector obstructs such an inequality on X_h.

## Proof

1.1 For the full clause, [F1] gives exactly the spaces and moment coordinates in [F2]. The finite mesh is matching, its realization is closure(Omega), and Countable Choice is [A1], so all hypotheses of the full discrete de Rham cohomology theorem are met. Applying [F2] gives dim_R H_h^1=beta_1 and dim_R H_h^2=beta_2. These are the full-complex spaces defined in the first clause, not PEC-relative spaces. [A1, F1, F2, given]

1.2 For the relative clause, [A2] supplies AC and its stated CC/DC consequences; the domain and refining-mesh hypotheses are those in the Statement; [F4] is the required full-Dirichlet regular decomposition and [F5] gives the exact relative commuting projections on these same spaces. Thus the hypotheses of [F6] hold. It gives discrete compactness on X_h and the mesh-uniform curl Poincare inequality on Z_h. Since B_h is a subspace of K_h and H_h^rel is its L^2-orthogonal complement within the finite-dimensional K_h, the finite-dimensional orthogonal decomposition gives K_h=B_h direct-sum H_h^rel and Z_h=X_h intersect (H_h^rel)^\perp. [A2, F3, F4, F5, F6, construct]

2.1 If h in H_h^rel is nonzero, then h in K_h so curl h=0; also h is orthogonal to B_h, hence h belongs to X_h, and ||h||_2>0. Therefore no estimate ||v_h||_2<=C||curl v_h||_2 can hold on that X_h. This is the stated reason that removing only relative gradients can leave zero modes. It makes no claim that H_h^rel has the absolute dimensions beta_1 or beta_2; those numbers belong only to the full complex in step 1.1. [F2, F3, F6, step 1.1, step 1.2, algebra] ∎
