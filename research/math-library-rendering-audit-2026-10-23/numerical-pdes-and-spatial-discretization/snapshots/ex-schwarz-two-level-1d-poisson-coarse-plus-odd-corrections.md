---
id: ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections
kind: example
title: "A uniform two-level 1D Poisson correction bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - thm-additive-schwarz-stable-decomposition-condition-number
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1, pp. 585–592: subspace correction,
        point-Jacobi splitting, and additive condition estimates."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 3 §§3.2–3.4, pp. 41–50: overlapping local spaces and
        coarse-grid correction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $N=2M$ with $M\ge2$ on the uniform fine P1 Dirichlet mesh of $(0,1)$.
Take the coarse P1 space on the even nodes and one local space
$\operatorname{span}\{\phi_{2k-1}\}$ for each odd node. The exact two-level
additive Schwarz operator has $C_0\le2$, $C_1\le2$, and hence
$\kappa_A(BA)\le4$, independently of $M$.

## Facts & Assumptions

**Given:** The uniform mesh with step $h=1/N$, the fine stiffness energy
$a(u,u)=h^{-1}\sum_{j=1}^{N}(u_j-u_{j-1})^2$ with $u_0=u_N=0$, the coarse
space through the even nodes, and odd-node local spaces.

[F1] The additive Schwarz condition theorem gives
$\kappa_A(BA)\le C_0C_1$ for the stable and synthesis constants of the
chosen subspaces ([[thm-additive-schwarz-stable-decomposition-condition-number]]).

[F2] [[def-overlapping-schwarz-subspace-correction-data]]: a subspace
prolongation $R_i$ has local energy matrix $A_i=R_i^{\mathsf T}AR_i$ and
exact additive preconditioner $B=\sum_iR_iA_i^{-1}R_i^{\mathsf T}$.

## Verification

1.1 Given a fine vector $u$, let $u_H$ be its coarse nodal interpolant: $(u_H)_{2k}=u_{2k}$ and $(u_H)_{2k-1}=(u_{2k-2}+u_{2k})/2$. Define $\eta_k=u_{2k-1}-(u_{2k-2}+u_{2k})/2$ and $u_k=\eta_k\phi_{2k-1}$. Nodal values give $u=u_H+\sum_{k=1}^M u_k$. [given, construct]

1.2 On each fine interval, at most one odd nodal hat has nonzero derivative. Thus only the coarse derivative and at most one local derivative can be nonzero there. The elementary inequality $(s+t)^2\le2(s^2+t^2)$, which follows from $(s-t)^2\ge0$, and integration give $\left\|v_0+\sum_kv_k\right\|_A^2 \le2\left(\|v_0\|_A^2+\sum_k\|v_k\|_A^2\right).$ Hence $C_1\le2$. [given, algebra]

2.1 On each pair of fine intervals set $a_k=u_{2k-1}-u_{2k-2}$ and $b_k=u_{2k}-u_{2k-1}$. The coarse energy on that coarse interval is $(a_k+b_k)^2/(2h)\le(a_k^2+b_k^2)/h$, exactly its fine energy contribution. Summing over $k$ gives $\|u_H\|_A^2\le\|u\|_A^2$. [given, step 1.1, algebra]

2.2 Since $\eta_k=(a_k-b_k)/2$ and $(a_k-b_k)^2\le2(a_k^2+b_k^2)$, the local energy is $\|u_k\|_A^2=2\eta_k^2/h\le(a_k^2+b_k^2)/h$. Summing gives $\sum_k\|u_k\|_A^2\le\|u\|_A^2$. The decomposition in step 1.1 therefore has total energy at most $2\|u\|_A^2$, so $C_0\le2$. [step 1.1, algebra]

3.1 Apply [F1] to the exact Schwarz data [F2] with $C_0\le2$ and $C_1\le2$ to obtain $\kappa_A(BA)\le4$. This finite one-dimensional split has a global coarse space; higher-dimensional overlap estimates are handled separately on the A page. [F1, F2, step 2.2, step 1.2, algebra] ∎
