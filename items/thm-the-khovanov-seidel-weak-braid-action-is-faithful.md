---
id: thm-the-khovanov-seidel-weak-braid-action-is-faithful
kind: theorem
title: "The Khovanov-Seidel weak braid action is faithful"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps:
  - def-khovanov-seidel-bigrading-cover-and-local-intersection-indices
  - def-axiom-of-choice
  - def-basic-arcs-admissible-curves-and-normal-form
  - def-faithful-weak-categorical-action
  - thm-khovanov-seidel-homs-compute-bigraded-arc-intersections
  - lem-khovanov-seidel-basic-arcs-detect-the-identity-braid
  - thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
proof_strategy: direct
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Corollary 1.2"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Corollary 1.2 and the final paragraph of Section 4c, printed pp. 5 and 47"
verification:
  precheck: pass
---

## Statement

Assume AC, inherited from the braid-to-mapping-class dictionary used in the Hom
theorem and the detector, and from the supplied representative-independence
and isotopy invariance of intersection numbers. For every $m\ge1$ the weak action of $B_{m+1}$ on
$C_m$ given by the complexes $R_\sigma$
([[thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action]]) is
faithful ([[def-faithful-weak-categorical-action]]): if
$R_\sigma\cong\operatorname{Id}_{C_m}$ for a braid $\sigma$, then $\sigma=1$.
Equivalently, no nontrivial braid acts by the identity functor, although
nontrivial braids may act trivially on the Grothendieck group $G(A_m)$.

## Facts & Assumptions
**Given:** AC, the weak braid action by the complexes $R_\sigma$ on $C_m$, the basic arcs $b_0,\dots,b_m$ with their normalized bigradings, and a braid $\sigma\in B_{m+1}$ with $R_\sigma\cong\operatorname{Id}_{C_m}$.

[L1] For all $\sigma,\tau$ and all $j,k,s_1,s_2$ the Hom groups $\operatorname{Hom}_{C_m}(R_\tau P_k,R_\sigma P_j[s_1]\{-s_2\})$ are free with Poincaré polynomial $I^{\mathrm{bigr}}(\widetilde f_\tau\widetilde b_k,\widetilde f_\sigma\widetilde b_j)$ ([[thm-khovanov-seidel-homs-compute-bigraded-arc-intersections]]).

[L2] If $f\in G$ satisfies $I(b_j,f(b_k))=I(b_j,f^2(b_k))=I(b_j,b_k)$ for all $j,k$, then $[f]=1$ in $G$ ([[lem-khovanov-seidel-basic-arcs-detect-the-identity-braid]]).

[L3] Under AC, the preferred lifts give the action of $B_{m+1}$ on bigraded curves, and $I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)|_{q_1=q_2=1}=2I(c_0,c_1)$, so equality of the bigraded numbers specializes to equality of the ordinary intersection numbers ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]).

[L4] Under the isomorphism $B_{m+1}\cong G=\pi_0\operatorname{Diff}(D,\partial D;\Delta)$ a braid $\sigma$ corresponds to a boundary-fixed mapping class $f_\sigma$ well defined up to isotopy, and $\sigma=1$ iff $[f_\sigma]=1$ ([[def-basic-arcs-admissible-curves-and-normal-form]], whose dictionary includes Artin-presentation completeness and the smooth comparison).



## Proof

**Proof technique:** direct.

1.1 *The Hom-table of $R_\sigma$ is the identity table.* Suppose $R_\sigma\cong\operatorname{Id}_{C_m}$. Then for all $j,k$ and all shifts $s_1,s_2$ the induced isomorphism gives $\operatorname{Hom}_{C_m}\bigl(P_k,R_\sigma P_j[s_1]\{-s_2\}\bigr)\cong\operatorname{Hom}_{C_m}\bigl(P_k,P_j[s_1]\{-s_2\}\bigr).$ By the Hom theorem [L1] applied with $\tau=1$ on the left and $\sigma=1$ on the right, taking Poincaré polynomials gives $I^{\mathrm{bigr}}\bigl(\widetilde b_k,\sigma\widetilde b_j\bigr)=I^{\mathrm{bigr}}\bigl(\widetilde b_k,\widetilde b_j\bigr) \qquad\text{for all }j,k .$ [L1]

2.1 *The same for the square.* The weak-action relation $R_{\sigma^2}\cong R_\sigma R_\sigma$ gives $R_{\sigma^2}\cong\operatorname{Id}_{C_m}$ as well; hence the same argument yields $I^{\mathrm{bigr}}\bigl(\widetilde b_k,\sigma^2\widetilde b_j\bigr)=I^{\mathrm{bigr}}\bigl(\widetilde b_k,\widetilde b_j\bigr) \qquad\text{for all }j,k .$ [step 1.1, L1]

3.1 *Specialization to the ordinary intersection table.* Setting $q_1=q_2=1$ in the identities of steps 1.1 and 2.1 and using [L3] gives $I(b_k,f_\sigma(b_j))=I(b_k,b_j),\qquad I(b_k,f_\sigma^2(b_j))=I(b_k,b_j) \qquad\text{for all }j,k,$ where $f_\sigma$ is the boundary-fixed mapping class of $\sigma$ [L4]. [step 1.1, step 2.1, L3, L4]

4.1 *The detector concludes.* The two families of equalities of step 3.1 are exactly the hypotheses of the detector lemma [L2] for $f=f_\sigma$; hence $[f_\sigma]=1$ in $G$, and by [L4] $\sigma=1$ in $B_{m+1}$. This proves faithfulness. [step 3.1, L2, L4]

5.1 *Conclusion.* No nontrivial braid acts by the identity functor: the identity of the Hom tables forces the identity of the mapping class, by the two-iterate hypothesis of the detector. The contrast with the Grothendieck group is displayed by the decategorification proposition and the companion counterexample. AC is inherited through the Hom theorem and the detector, which use $B_{m+1}\cong G$, and through the supplied representative-independence and isotopy invariance of intersection numbers in [L3]. [step 4.1, L1, L2, L3] ∎ 