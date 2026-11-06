---
id: pthm-st-closed-fully-relative-kunneth-sector
kind: physics-theorem
title: "Closed Fully Relative Kunneth Sector"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 13
deps:
  - def-st-closed-fully-relative-brst-complex
  - pthm-st-open-bosonic-brst-no-ghost
  - pthm-st-closed-bosonic-lightcone-spectrum
dependency_roles:
  def-st-closed-fully-relative-brst-complex: formulation-prerequisite
  pthm-st-open-bosonic-brst-no-ghost: physical-result
  pthm-st-closed-bosonic-lightcone-spectrum: physical-result
physical_scope: "Only the total ghost-number-two (1,1) summand of the fully-relative closed complex at nonzero momentum and fixed chiral levels; not the full semi-relative or absolute closed cohomology."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3"
      url: "https://arxiv.org/pdf/hep-th/0607105v3"
      locator: "Single-chiral source context only. No source theorem for the full closed sector is claimed; the finite-level Künneth argument is supplied locally."
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

For $D=26$, $a=1$, fixed nonzero target momentum p and nonnegative finite total chiral oscillator levels N and tilde-N satisfying $\alpha^\prime p^2/4+N-1=\alpha^\prime p^2/4+\widetilde N-1=0$, the fully-relative closed complex $C_{\mathrm{cl,rel}}(p;N,\widetilde N)$ of def-st-closed-fully-relative-brst-complex has the canonical Künneth decomposition $H_{\mathrm{cl,rel}}^2(p;N,\widetilde N)=\bigoplus_{q_L+q_R=2}H_{\mathrm{rel},L}^{q_L}(p,N)\otimes H_{\mathrm{rel},R}^{q_R}(p,\widetilde N)$. Its (1,1) summand has the positive Hermitian form $h_{\mathrm{rel},L}\otimes h_{\mathrm{rel},R}$ and, in a nonzero-$p^+$ chart, is isometrically identified with the tensor product of the transverse matter Fock spaces of weighted levels N and tilde-N. Here the cohomology labels are total matter-plus-ghost levels; under the isomorphism these labels become the weighted transverse matter levels N and tilde-N. A dressed BRST cycle is constrained by total level, rather than by matter level alone. The two mass-shell equations imply $N=\widetilde N$, so this physical tensor sector is level matched. This theorem concerns the fully-relative (1,1) tensor sector and makes no identification with the full semi-relative or absolute closed-string cohomology.

## Statement references

[Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3](https://arxiv.org/pdf/hep-th/0607105v3), Single-chiral source context only. No source theorem for the full closed sector is claimed; the finite-level Künneth argument is supplied locally.

## Facts & Assumptions

[F1] [[def-st-closed-fully-relative-brst-complex]] defines the graded left/right tensor complex and the product Hermitian form.

[F2] [[pthm-st-open-bosonic-brst-no-ghost]] proves single-chiral relative ghost-number-one positivity at every finite level and nonzero on-shell effective momentum, with the declared Hermitian $c_0$ form.

[F3] [[pthm-st-closed-bosonic-lightcone-spectrum]] defines the weighted left/right levels $N=\sum_{n>0,i}\alpha_{-n}^i\alpha_n^i$ and $\widetilde N=\sum_{n>0,i}\widetilde\alpha_{-n}^i\widetilde\alpha_n^i$, the intercept equations $L_0^m-a=\widetilde L_0^m-\widetilde a=0$, and their mass-shell consequences with $k_L=k_R=\sqrt{\alpha'/2}\,p$.

[A1] Fix the total-level bidegree $(N,\widetilde N)$ in [F1]. Its chiral factors are the actual finite-dimensional relative subcomplexes $C_{rel,L}(p,N)$ and $C_{rel,R}(p,\widetilde N)$, not fixed matter-level spaces.

[A2] For each closed chiral factor use the open theorem's effective momentum $p_{eff}=p/2$, since $\sqrt{2\alpha'}p_{eff}=\sqrt{\alpha'/2}p$. This is nonzero exactly when $p\ne0$.

**Given:** Assume $D=26$, intercept one, fixed nonzero on-shell closed momentum, finite total chiral levels $N,\widetilde N$, and [F2] with its actual nonzero-momentum and relative-complex hypotheses.

## Proof

1.1 For finite-dimensional chain complexes over a field, split each degree as boundaries plus chosen cohomology representatives plus a complement mapped isomorphically by the differential onto the next boundaries. Tensoring these decompositions shows that every summand containing a boundary/complement pair is contractible, while the cohomology representatives tensor to the surviving homology. Thus
$H^2(C_L\otimes C_R)=\bigoplus_{q_L+q_R=2}H^{q_L}(C_L)\otimes H^{q_R}(C_R)$
and the $(1,1)$ summand is canonically $H^1_{rel,L}(p,N)\otimes H^1_{rel,R}(p,\widetilde N)$. The canonical map sends $[x]\otimes[y]$ to $[x\otimes y]$; the auxiliary splittings prove bijectivity without making the map choice dependent. [given, F1, A1, algebra]

2.1 The two mass-shell equations in [F3] are $\alpha'p^2/4+N-1=0$ and $\alpha'p^2/4+\widetilde N-1=0$. Subtracting gives $N=\widetilde N$. The conversion in [A2] matches each chiral zero mode to the nonzero open-string parameter, so the finite-total-level construction in [F2], steps 1.1–4.1, applies to both factors. Its contraction has kernel the transverse matter Fock space $\mathcal T_N$ tensored with $|\downarrow\rangle$, and its finite degree-raising correction preserves total level. Its $c_0$ pairing equals the transverse positive form exactly. Thus it gives isometric identifications $H^1_{rel,L}(p,N)\cong\mathcal T_N$ and $H^1_{rel,R}(p,\widetilde N)\cong\mathcal T_{\widetilde N}$. The labels become matter/transverse weighted levels through these isomorphisms; a generic chain vector can mix matter levels. Transport from a nonzero-$p^+$ chart is the rotation transport included in [F2]. [given, F2, F3, A2, step 1.1, algebra]

3.1 Choose orthonormal bases $e_i$ and $f_j$ for the two positive finite-dimensional factor forms. For a nonzero tensor $v=\sum_{i,j}z_{ij}e_i\otimes f_j$, the product form gives $\langle v,v\rangle=\sum_{i,j}|z_{ij}|^2>0$. Hence the $(1,1)$ summand has positive product form and is level matched. The result concerns only the fully-relative $(1,1)$ summand, not semi-relative or absolute closed cohomology. [step 1.1, step 2.1, F1, algebra] ∎
