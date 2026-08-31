---
id: cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix
kind: counterexample
title: "A nonsymmetric invertible matrix does not fit the CG orthogonality and minimization theory"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-conjugate-gradient-recurrence,
       def-gmres-iterate]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Statement refuted

The CG orthogonality and minimization theory applies to every invertible
matrix.

## Facts & Assumptions

**Given:** The CG recurrence and the GMRES affine-Krylov residual minimizer.

[F1] To test the proposed extension outside the Hermitian positive-definite
domain, define the attempted algebraic updates
$$\alpha_k=\frac{r_k^Tr_k}{p_k^TAp_k},\qquad x_{k+1}=x_k+\alpha_kp_k,\qquad r_{k+1}=r_k-\alpha_kAp_k,\qquad p_{k+1}=r_{k+1}+\beta_kp_k$$
with $p_0=r_0$ and
$\beta_k=(r_{k+1}^Tr_{k+1})/(r_k^Tr_k)$. These repeat the formulas used by CG
on its legitimate domain
([[def-conjugate-gradient-recurrence]]); they are not claimed to constitute a
run under that definition for nonsymmetric $A$.

[L1] GMRES is the residual minimizer over an affine Krylov space for a general
matrix
([[def-gmres-iterate]]).

## Counterexample
**Proof technique:** direct calculation.

1.1 Take $$A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad b=\binom01,\qquad x_0=\binom00.$$ Then $A$ is invertible but not symmetric. From [F1], $$r_0=p_0=\binom01,\qquad \alpha_0=\frac{1}{1}=1,\qquad x_1=\binom01,\qquad r_1=b-Ax_1=\binom{-1}0.$$ Also $$\beta_0=\frac{r_1^Tr_1}{r_0^Tr_0}=1,\qquad p_1=r_1+\beta_0p_0=\binom{-1}1.$$ [F1, algebra]

2.1 Now $$p_0^TAp_1=(0,1)\begin{pmatrix}0\\1\end{pmatrix}=1\ne0.$$ So the search directions fail the basic $A$-conjugacy identity already at the second direction, and the SPD CG theory cannot be transplanted to this nonsymmetric matrix. The appropriate general method here is the affine-Krylov residual minimizer named in [L1], not CG's Hermitian positive-definite theory. [L1, step 1.1, algebra] ∎
