---
id: def-st-closed-fully-relative-brst-complex
kind: definition
title: "Closed Fully Relative BRST Complex"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 10
deps:
  - def-st-bosonic-brst-complex
  - pthm-st-bosonic-brst-nilpotence
dependency_roles:
  def-st-bosonic-brst-complex: formulation-prerequisite
  pthm-st-bosonic-brst-nilpotence: physical-result
physical_scope: "The fixed-level fully-relative left/right tensor complex of the critical flat closed bosonic string; it is distinct from semi-relative and absolute complexes."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3"
      url: "https://arxiv.org/pdf/hep-th/0607105v3"
      locator: "pp. 2–5, single-chiral relative BRST source conventions only; the left/right tensor complex is defined locally."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

At fixed target momentum $p$, take left and right copies of the single-chiral relative complex of def-st-bosonic-brst-complex with $k_L=k_R=\sqrt{\alpha'/2}p$, and order the graded tensor product left factor before right factor. Define $Q_{\mathrm{cl}}=Q_L\otimes 1 + (-1)^{\mathrm{gh}_L} 1\otimes Q_R$, and impose $b_0^L=b_0^R=0$ and $L_0^{\mathrm{tot},L}=L_0^{\mathrm{tot},R}=0$. The fully-relative complex has total ghost number $\mathrm{gh}_L+\mathrm{gh}_R$. For chiral chain states $\psi_L,\phi_L$ in $C_{\mathrm{rel},L}^1(p)$ and $\psi_R,\phi_R$ in $C_{\mathrm{rel},R}^1(p)$, define $h_{\mathrm{cl}}(\psi_L\otimes\psi_R,\phi_L\otimes\phi_R)=\langle\psi_L|c_0^L|\phi_L\rangle_K \langle\psi_R|c_0^R|\phi_R\rangle_K$ and extend sesquilinearly to their algebraic tensor product. These are chain forms, not evaluations on unnamed cohomology classes. If both chiral forms descend to $H_{\mathrm{rel}}^1$, their product defines the candidate induced form on $H_{\mathrm{rel},L}^1\otimes H_{\mathrm{rel},R}^1$ by the same formula on cycle representatives. The displayed product fixes its sign convention; any combined zero-mode representation must agree with it, with $c_0^L$ preceding $c_0^R$. For nonnegative integers $N$ and $\widetilde N$ define $C_{\mathrm{cl},\mathrm{rel}}^r(p;N,\widetilde N)=\bigoplus_{q_L+q_R=r} C_{\mathrm{rel},L}^{q_L}(p,N)\otimes C_{\mathrm{rel},R}^{q_R}(p,\widetilde N)$, with each chiral level the total matter-plus-ghost level defined in the supplier. Define $H_{\mathrm{cl},\mathrm{rel}}^r(p;N,\widetilde N)$ as the cohomology of this tensor complex. The chiral zero-mode equations are $\alpha' p^2/4+N-1=0$ and $\alpha' p^2/4+\widetilde N-1=0$ at $D=26,a=1$; off either equation the corresponding relative factor is zero. This is a fully-relative tensor complex, not the full closed semi-relative BRST complex.

## Definition references

[Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3](https://arxiv.org/pdf/hep-th/0607105v3), pp. 2–5, single-chiral relative BRST source conventions only; the left/right tensor complex is defined locally.

## Facts & Assumptions

[F1] [[def-st-bosonic-brst-complex]] defines each chiral factor.

[F2] [[pthm-st-bosonic-brst-nilpotence]] proves square zero for the open-string oscillator charge at $D=26,a=1$. Step 1.1 transfers that result to each closed chiral factor by an explicit fixed-zero-mode identification; no equality of the open and closed target momenta is assumed.

The tensor product is the algebraic graded tensor product, left factor first. The sign $(-1)^{gh_L}$ is the Koszul sign required for an odd differential on a graded tensor product. The zero-mode constraints are imposed separately in each factor. The product form is the ordinary tensor-product Hermitian form with the left zero-mode insertion preceding the right one if a representative formula is used. This is a definition of the fully-relative complex only; no identification with the full semi-relative or absolute closed-string complex is part of it.

## Verification

**Given:** The critical parameters $D=26,a=1$, the fixed target momentum $p$, the chiral oscillator/ghost data and relative constraints from [F1], and independent left/right factors on their graded algebraic tensor product.

1.1 Put $p_{\mathrm{op}}=p/2$. The open zero mode at this momentum is $\sqrt{2\alpha'}p_{\mathrm{op}}=\sqrt{\alpha'/2}p$, exactly the zero mode in either closed chiral factor. Identify the open matter and ghost vacuum at $p_{\mathrm{op}}$ with the chosen chiral vacuum at $p$ and send each finite creation-mode monomial to the monomial with the same mode indices and target indices. By F1, the oscillator commutators, ghost CAR, ghost grading, vacuum annihilators and relative-vacuum normal ordering are identical; this is a linear isomorphism intertwining every oscillator and ghost generator. Hence it intertwines every $L_n^m$, the same intercept term and the full locally finite cubic BRST sum. It also intertwines $b_0$, $L_0^{\mathrm{tot}}=\{Q_B,b_0\}$ and the total-level operator. Thus the open charge of F2 and each closed chiral charge are conjugate under this explicit identification. F2 at $D=26,a=1$ gives $Q_L^2=Q_R^2=0$ at every $p$, with the relative subspaces and fixed levels preserved as in F1. This is an algebraic change of momentum label, not an identification of the full open and closed physical theories. [given, F1, F2, algebra]

2.1 For a homogeneous left state of ghost number $q$, the graded tensor differential is $Q_{cl}=Q_L\otimes1+(-1)^q1\otimes Q_R$. Squaring gives $Q_L^2\otimes1+1\otimes Q_R^2$ plus two mixed terms with signs $(-1)^{q+1}$ and $(-1)^q$; those cancel. Hence $Q_{cl}^2=0$. [given, F1, F2, step 1.1, algebra]

3.1 Each chiral differential preserves its own relative subspace by the conditional identity in [F1]'s verification, so their signed sum preserves both $b_0^L=b_0^R=0$ and both $L_0^{tot}=0$ constraints. Each fixed total-level factor is finite dimensional and preserved by its differential by [F1], so the displayed bidegree is an actual finite-dimensional tensor subcomplex. The scalar chain forms in the Definition are sesquilinear, so their tensor product is well-defined on the chain (1,1) subspace. If a cycle representative is changed by a chiral boundary, the product changes by zero whenever that chiral form pairs boundaries with cycles as zero; this proves the stated conditional descent to the tensor product of chiral cohomologies. Descent and positivity are not consequences of the tensor-complex definition alone; the displayed product fixes the zero-mode sign convention. [given, F1, F2, step 1.1, step 2.1, algebra] ∎
