---
id: ex-three-species-weighted-stoichiometric-conservation
kind: example
title: "Three species with weighted number-to-mass conservation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-conservative-production-destruction-system
  - def-source-factored-production-destruction-rates
  - alg-zero-compatible-modified-patankar-euler
  - thm-zero-compatible-modified-patankar-euler-admissibility
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Let species $A,B,C$ have molecular weights $2,1,1$. In number variables let the reactions be $A\rightleftarrows B+C$, with forward event rate $r=2n_A$ and reverse event rate $s=n_Bn_C$. Convert to mass variables $y=(2n_A,n_B,n_C)$. Verify the conservative transfer representation and one zero-compatible step from $y^n=(2,0,0)$ with $h=1$.

## Verification

**Given:** The reactions and molecular weights in the Example, mass coordinates $y=(2n_A,n_B,n_C)$, and step $h=1$.

[F1] [[def-finite-conservative-production-destruction-system]]: paired rates $p_{ij}=d_{ji}$ define a finite closed PDS and preserve the sum in its internal-transfer form.

[F2] [[def-source-factored-production-destruction-rates]]: rates $p_{ij}=y_j a_{ij}$ and $d_{ij}=y_i a_{ji}$ have a ratio-free representation at zero coordinates.

[F3] [[alg-zero-compatible-modified-patankar-euler]]: the step solves $(I-hB(y^n))y^{n+1}=y^n$ using donor-rate factors $a_{ij}(y^n)$.

[F4] [[thm-zero-compatible-modified-patankar-euler-admissibility]]: for the stated factorization the output is nonnegative and conserves total mass, including at zero compartments.

1.1 One forward event consumes mass $2$ from $A$ and produces mass $1$ in each of $B,C$; one reverse event consumes mass $1$ from each of $B,C$ and produces mass $2$ in $A$. Thus the mass transfer rates are $p_{21}=p_{31}=d_{12}=d_{13}=r=y_1$ and $p_{12}=p_{13}=d_{21}=d_{31}=s=y_2y_3$, with all other rates zero. These paired rates satisfy [F1], and $y_1+y_2+y_3=2n_A+n_B+n_C$ is the molecular-weight mass. [given, F1, algebra]

1.2 The transfer factors are $a_{21}=a_{31}=1$, $a_{12}=y_3$, and $a_{13}=y_2$, with all other factors zero; hence the rates have the form required by [F2], even when $y_2$ or $y_3$ is zero. At $y^n=(2,0,0)$, the matrix in [F3] is $I-B(y^n)=\begin{pmatrix}3&0&0\\-1&1&0\\-1&0&1\end{pmatrix}$. Solving it against $(2,0,0)^T$ gives $y^{n+1}=(2/3,2/3,2/3)^T$. [F2, F3, algebra]

2.1 The updated coordinates are nonnegative, and $2/3+2/3+2/3=2=2+0+0$. This is the weighted number-to-mass conservation verified in step 1.1; it also agrees with the general zero-compatible theorem [F4]. [F1, F4, step 1.1, step 1.2, algebra] ∎
