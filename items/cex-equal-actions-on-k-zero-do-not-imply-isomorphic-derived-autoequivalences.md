---
id: cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences
kind: counterexample
title: "Equal actions on K_0 do not imply isomorphic derived autoequivalences"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
deps:
  - def-axiom-of-choice
  - thm-the-khovanov-seidel-weak-braid-action-is-faithful
  - prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action
  - lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel
  - def-graded-grothendieck-group-of-a-m-perfect-complexes
  - def-unreduced-burau-matrices
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Corollary 1.2 and Section 2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Corollary 1.2, printed p. 5, with its proof on p. 47; Section 2e.1, printed pp. 14-15"
    - title: "Stephen J. Bigelow, The Burau representation is not faithful for n=5, Geometry & Topology 3 (1999) 397-404"
      url: "https://arxiv.org/pdf/math/9904100"
      locator: "Theorems 1.2 and 1.4, printed pp. 397-399"
verification:
  precheck: pass
---

## Statement refuted

If an exact autoequivalence of a triangulated category acts as the identity on
the Grothendieck group, then it is isomorphic to the identity functor.

## Facts & Assumptions
**Given:** AC; the integer $m=4$, so that the braid group is $B_5$, the category $C_4=K^b(\operatorname{proj}^{gr}A_4)$, its graded Grothendieck group $G(A_4)$, and the braid action of $B_5$ on $C_4$ by the complexes $R_\sigma$.

[L1] There is a nontrivial braid $\psi\in B_5$ with $\rho^{\mathrm{mat}}_5(\psi)=I_5$, the identity matrix in the unreduced Burau representation; the element is the commutator of the half twist about a regular neighbourhood of an arc $\alpha$ with the full twist about a regular neighbourhood of $\beta\cup\partial D$ ([[lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel]], [[def-unreduced-burau-matrices]]).

[L2] The weak action of $B_5$ on $C_4$ is faithful: $R_\sigma\cong\operatorname{Id}_{C_4}$ implies $\sigma=1$ ([[thm-the-khovanov-seidel-weak-braid-action-is-faithful]]).

[L3] The induced action on $G(A_4)$ is the unreduced Burau action: after the explicit invertible change of basis $C$ and the parameter identification $q=t$, the operator $[R_\sigma]$ equals $\rho^{\mathrm{mat}}_5(\sigma)$ for every $\sigma$ ([[prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action]], [[def-graded-grothendieck-group-of-a-m-perfect-complexes]]).



## Counterexample

**Proof technique:** direct.

1.1 *The witness braid and its categorical action.* Take $m=4$ and let $\psi\in B_5$ be the nontrivial braid of [L1], so $\psi\ne1$ and $\rho^{\mathrm{mat}}_5(\psi)=I_5$. By [L2] applied to the nontrivial braid $\psi$, the endofunctor $R_\psi$ is not isomorphic to the identity functor of $C_4$. [L1, L2]

2.1 *Its action on $K_0$ is trivial.* By [L3] the operator $[R_\psi]$ on $G(A_4)$ corresponds, in the explicit basis of the decategorification proposition, to the matrix $\rho^{\mathrm{mat}}_5(\psi)=I_5$; hence $[R_\psi]$ is the identity operator on $G(A_4)$. Thus the exact autoequivalence $R_\psi$ acts as the identity on the Grothendieck group while, by step 1.1, it is not isomorphic to the identity functor. [step 1.1, L1, L3]

3.1 *Conclusion.* The map from derived autoequivalences of $C_4$ to operators on $K_0$ has a nontrivial kernel, containing the class of $R_\psi$; the refuted statement is false. AC is inherited from the kernel lemma and the faithfulness theorem; no additional choice is made. [step 2.1] ∎ 