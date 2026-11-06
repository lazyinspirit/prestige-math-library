---

id: thm-gts-t1-lifting-principle-for-analytic-deformations
kind: theorem
title: "T¹-lifting principle for analytic deformations"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC, inherited from the analytic deformation and cohomology suppliers."
deps:
  - def-gts-kodairaspencer-deformation-problem
  - lem-gts-kodaira-spencer-forms-form-dgla
  - lem-gts-finite-artin-analytic-dolbeault-comparison
  - def-axiom-of-choice
dependency_roles:
  def-gts-kodairaspencer-deformation-problem: mathematical-premise
  lem-gts-kodaira-spencer-forms-form-dgla: mathematical-premise
  lem-gts-finite-artin-analytic-dolbeault-comparison: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§1.1, Theorem 1.6, printed p. 8: the T¹-lifting criterion for successive analytic Artin deformations."
---

## Statement

Let $B_n=\operatorname{Specan}\mathbb C[t]/(t^{n+1})$ for $n\ge1$, and let $f_n:X_n\to B_n$ be a smooth proper analytic deformation of a compact complex manifold $X$. Its relative Kodaira–Spencer class is $\rho_n\in H^1(X_{n-1},T_{X_{n-1}/B_{n-1}})$, defined by the extension class of
$$0\to\mathcal O_{X_{n-1}}\to\Omega_{X_n}|_{X_{n-1}}\to\Omega_{X_{n-1}/B_{n-1}}\to0.$$
Then $f_n$ extends to a smooth proper deformation $f_{n+1}:X_{n+1}\to B_{n+1}$ if and only if $\rho_n$ lifts to a class $\rho_{n+1}\in H^1(X_n,T_{X_n/B_n})$.

## Facts & Assumptions

**Given:** Full AC, the compact complex manifold $X$, the actual marked smooth proper analytic deformation $X_n$ and its relative cotangent-extension class, with $n\ge1$. Put $A_j=\mathbb C[t]/(t^{j+1})$, including $A_0=\mathbb C$.

[F1] The actual Kodaira–Spencer convention is $d=\bar\partial$, with Maurer–Cartan curvature $d\xi+[\xi,\xi]/2$ and gauge differential $-da+[a,\xi]$. [[def-gts-kodairaspencer-deformation-problem]], [[lem-gts-kodaira-spencer-forms-form-dgla]]

[F2] [[lem-gts-finite-artin-analytic-dolbeault-comparison]] gives an equivalence with the actual marked flat analytic Artin deformations, compatible with restriction; its relative tangent resolution computes cohomology by $d_\xi=d+[\xi,-]$. Its reverse construction glues genuine relative holomorphic Artin charts by finite Dolbeault corrections.

[A1] [[def-axiom-of-choice]] supplies the analytic suppliers' stated choice assumptions. No convergence over a reduced parameter germ is assumed.

## Proof

1.1 By [F2], represent $X_n$ by $\xi(t)=\sum_{j=1}^n\xi_jt^j\in L_X^1\otimes(t)A_n$. Its curvature vanishes modulo $t^{n+1}$; write $R(t)=d\xi+[\xi,\xi]/2=t^{n+1}R_{n+1}$ modulo $t^{n+2}$. The relative class $\rho_n$ is represented in the tangent resolution on $X_{n-1}$ by $\xi'(t)$ modulo $t^n$, up to the fixed sign from dualizing the cotangent extension. To see this, choose the relative coordinates of [F2] and write overlaps $w_i=F_{ij}(w_j,t)$. The difference of local lifts of the relative differentials to absolute differentials has $dt$ coefficient $\partial_tF_{ij}$; this is the defining extension cocycle. In a smooth trivialization its Dolbeault representative is the commutator of $\partial_t$ with $\bar\partial+\xi\partial$, whose coefficient is $\xi'$. Dualizing or reversing the Čech differential changes both the class and a putative lift by the same sign. Thus the lifting question is exactly that for $[\xi']$. All coefficients modulo $t^n$ are retained, rather than replacing this relative class by its central tangent vector. [F1, F2, A1, given, algebra]

2.1 If $X_{n+1}$ exists, make its smooth trivialization compatible with the chosen one on $X_n$: any mismatch is a gauge map from [F2], and its finite vector-field coefficients lift to $A_{n+1}$. Its representative then has the form $\widetilde\xi=\xi+t^{n+1}a$. Differentiating its Maurer–Cartan equation gives $d_\xi(\xi'+(n+1)t^na)=0$ modulo $t^{n+1}$. This closed tangent-valued form represents a class over $X_n$ restricting to $[\xi']$ over $X_{n-1}$. Reinsert the fixed cotangent sign from step1.1 to obtain the required lift of $\rho_n$. [F1, F2, step 1.1, algebra]

2.2 Conversely let $\rho_n$ have a lift, and represent the corresponding lift of $[\xi']$ by a $d_\xi$-closed $\eta\in L_X^1\otimes A_n$ using [F2]. Its reduction differs from $\xi'$ by $d_\xi b$ modulo $t^n$ for some $b\in L_X^0\otimes A_{n-1}$. Lift the finitely many coefficients of $b$ to $A_n$ and subtract $d_\xi b$ from $\eta$. Since $d_\xi^2=0$ modulo $t^{n+1}$, the adjusted representative remains closed and has the exact form $\eta=\xi'+t^nc$ for a smooth $c\in L_X^1$. Differentiating the curvature polynomial and using the symmetry of the bracket on degree-one elements gives $d_\xi\xi'=R'(t)=(n+1)t^nR_{n+1}$ modulo $t^{n+1}$. Also $d_\xi(t^nc)=t^ndc$ at this order because $\xi$ has no constant term in $t$. Closedness therefore implies $dc=-(n+1)R_{n+1}$. [F1, F2, step 1.1, algebra]

3.1 Set $\widetilde\xi=\xi+t^{n+1}c/(n+1)$. Its curvature modulo $t^{n+2}$ is $t^{n+1}(R_{n+1}+dc/(n+1))=0$ by step 2.2, so it is a Maurer–Cartan lift over $A_{n+1}$. The reverse equivalence in [F2] constructs an actual smooth proper analytic Artin deformation, and its restriction compatibility recovers the given $X_n$ with its marking. This proves sufficiency; step2.1 proves necessity. The argument includes $n=1$ with $A_0=\mathbb C$ and divides only by the nonzero integer $n+1$. No Kähler, projectivity or canonical-bundle hypothesis was used. [F1, F2, step 2.1, step 2.2, algebra] ∎

## Scope

This finite-order theorem does not assert a convergent reduced-parameter family or analytic Kuranishi completeness.
