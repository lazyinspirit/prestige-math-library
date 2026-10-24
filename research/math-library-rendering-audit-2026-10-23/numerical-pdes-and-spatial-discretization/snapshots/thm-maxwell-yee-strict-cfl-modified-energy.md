---
id: thm-maxwell-yee-strict-cfl-modified-energy
kind: theorem
title: Strict spectral CFL positivity and Yee modified energy
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - alg-maxwell-yee-leapfrog-update
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 7 §7.4, printed pp. 164–168, and Chapter 9 §9.3, printed pp. 246–249: FDTD dispersion relation, staggered field placement, and centered updates."
verification:
  precheck: pass
---

## Statement

Set $K=C^TM_bC$. If the retained electric cochain space is zero-dimensional,
define $\lambda_{\max}:=0$; otherwise set
$$\lambda_{\max}:=\max_{e\ne0}\frac{e^TKe}{e^TM_ee}.$$
For a lossless, source-free update from [[alg-maxwell-yee-leapfrog-update]], define
$$\mathcal E^n:=\frac12(e^n)^TM_ee^n+\frac12(b^{n-1/2})^TM_bb^{n+1/2},\qquad b_c^n:=\frac{b^{n-1/2}+b^{n+1/2}}2.$$
Then $\mathcal E^n$ is independent of $n$, and
$$\mathcal E^n\ge\frac12\left(1-\frac{\Delta t^2\lambda_{\max}}4\right)\|e^n\|_{M_e}^2+\frac12\|b_c^n\|_{M_b}^2.$$
Consequently, the actual strict spectral condition $\Delta t^2\lambda_{\max}<4$ makes this modified energy positive on admissible staggered states and controls the electric field and the centered magnetic field. When $\lambda_{\max}>0$, at equality the energy loses coercivity and a maximal mode has a repeated root $-1$; above equality a mode grows exponentially. If $\lambda_{\max}=0$, the strict condition is automatic for every $\Delta t>0$ and neither endpoint case occurs.

## Facts & Assumptions


**Given:** $\Delta t>0$, a finite Yee complex, symmetric positive definite $M_e,M_b$, no source, and $S=0$.

[F1] The mass matrices are symmetric positive definite, and $K=C^TM_bC$ is the curl-curl matrix. ([[def-maxwell-discrete-cochain-and-yee-grid]])

[F2] The lossless rows are $b^{n+1/2}=b^{n-1/2}-\Delta t Ce^n$ and $M_e(e^{n+1}-e^n)=\Delta t C^TM_bb^{n+1/2}$. ([[alg-maxwell-yee-leapfrog-update]])

## Proof

1.1 If $N_e=0$, the electric cochain is necessarily zero and $C$ is the zero map from the zero space. The Faraday row in [F2] makes $b^{n+1/2}=b^{n-1/2}$ at every step, while the electric row is an equality in the zero space. Thus $b_c^n=b^{n+1/2}$ is constant and $\mathcal E^n=\tfrac12\|b_c^n\|_{M_b}^2$. With the stated convention $\lambda_{\max}=0$, this proves conservation, the lower bound, and positivity on the remaining magnetic state for every $\Delta t>0$; there is no positive-eigenvalue endpoint case. For the rest of the proof assume $N_e>0$. The quotient defining $\lambda_{\max}$ is continuous on the compact set $\{e:e^TM_ee=1\}$, so the maximum exists and is finite. Also $e^TKe=(Ce)^TM_b(Ce)\ge0$, hence $\lambda_{\max}\ge0$. From the first row of [F2], $b^{n-1/2}=b_c^n+\Delta t Ce^n/2$ and $b^{n+1/2}=b_c^n-\Delta t Ce^n/2$. Expanding their $M_b$ inner product gives $\mathcal E^n=\frac12\|e^n\|_{M_e}^2+\frac12\|b_c^n\|_{M_b}^2-\frac{\Delta t^2}{8}\|Ce^n\|_{M_b}^2.$ [F1, F2, given, algebra]

1.2 Using [F2], the electric-energy increment is $\frac12\|e^{n+1}\|_{M_e}^2-\frac12\|e^n\|_{M_e}^2=\left(\frac{e^{n+1}+e^n}{2}\right)^TM_e(e^{n+1}-e^n)=\Delta t\left(\frac{e^{n+1}+e^n}{2}\right)^TC^TM_bb^{n+1/2}.$ The magnetic cross-energy increment is $\frac12(b^{n+1/2})^TM_b(b^{n+3/2}-b^{n-1/2})=-\Delta t\left(\frac{e^{n+1}+e^n}{2}\right)^TC^TM_bb^{n+1/2},$ by applying the Faraday row at times $n$ and $n+1$. The two increments cancel, proving conservation. [F2, algebra]

2.1 By the definition of $\lambda_{\max}$, $\|Ce^n\|_{M_b}^2=(e^n)^TKe^n\le\lambda_{\max}\|e^n\|_{M_e}^2$. Substitution into step 1.1 gives the stated lower bound. When $\Delta t^2\lambda_{\max}<4$, its electric coefficient is positive. If an admissible staggered state has zero energy, the bound forces $e^n=0$ and $b_c^n=0$; the Faraday row in [F2] then gives $b^{n+1/2}=b^{n-1/2}$, so $b_c^n=b^{n-1/2}=b^{n+1/2}=0$. Thus the energy is positive definite on update states. [step 1.1, F1, F2, algebra]

3.1 Subtract the electric row in [F2] at indices $n$ and $n-1$, then use the magnetic row to replace $b^{n+1/2}-b^{n-1/2}$; this gives $M_e(e^{n+1}-2e^n+e^{n-1})+\Delta t^2Ke^n=0$. If $\Delta t^2\lambda_{\max}=4$, a maximizing vector $v$ satisfies $Kv=\lambda_{\max}M_ev$ by the constrained Rayleigh-quotient maximum. Thus $e^n=q_nv$ obeys $q_{n+1}-2q_n+q_{n-1}+\Delta t^2\lambda_{\max}q_n=0$, whose characteristic polynomial is $(r+1)^2$. Hence $q_n=(-1)^n(a+bn)$ is a solution and grows linearly when $b\ne0$. It is compatible with the full first-order rows by setting $b^{n+1/2}=(q_{n+1}-q_n)Cv/(\Delta t\lambda_{\max})$: the Ampere row follows from $Kv=\lambda_{\max}M_ev$, and the Faraday row follows from the scalar recurrence. For $\Delta t^2\lambda_{\max}>4$, the same recurrence has real reciprocal roots, one with modulus greater than one. This proves the endpoint caveat and instability above it. [F1, F2, algebra] ∎
