---
id: ex-jordan-eigenvalue-residual-square-root-instability
kind: example
title: "A Jordan eigenpair residual can be much smaller than its eigenvalue error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-closed-epsilon-pseudospectrum
  - thm-closed-pseudospectrum-resolvent-perturbation-equivalence
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., §3.1 and §3.5"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "Mark Embree, Matrix Theory course notes, §5.3"
      url: https://personal.math.vt.edu/embree/math5524/chapter5.pdf
---

## Example

Let $\delta=10^{-8}$, $J=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\widehat\lambda=10^{-4}$, and
$v=(1,\widehat\lambda)^T/\sqrt{1+\widehat\lambda^2}$. Then $\|v\|_2=1$ and

$$\|Jv-\widehat\lambda v\|_2=\frac{\widehat\lambda^2}{\sqrt{1+\widehat\lambda^2}}<10^{-8},$$

but $\operatorname{dist}(\widehat\lambda,\sigma(J))=10^{-4}$. The residual is four decimal orders smaller than the eigenvalue error; a small residual does not give a same-size forward eigenvalue bound for this nonnormal matrix.

## Facts & Assumptions

**Given:** The displayed $J,\delta,\widehat\lambda,v$.

[F1] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: eigenvalues are the scalars with a nonzero eigenvector.

[F2] [[thm-closed-pseudospectrum-resolvent-perturbation-equivalence]]: a unit-vector residual at most $\epsilon$ places its scalar in the closed $\epsilon$-pseudospectrum.

## Verification

1.1 Direct multiplication gives $Jv=(\widehat\lambda,0)^T/\sqrt{1+\widehat\lambda^2}$ and $\widehat\lambda v=(\widehat\lambda,\widehat\lambda^2)^T/\sqrt{1+\widehat\lambda^2}$. Their difference has norm $\widehat\lambda^2/\sqrt{1+\widehat\lambda^2}<10^{-8}$, and $\|v\|_2=1$. [given, algebra]

2.1 Set $r=(J-\widehat\lambda I)v$ and $E=-rv^*$. For every unit vector $x$, $\|Ex\|_2=\|r\|_2|v^*x|\le\|r\|_2$, with equality at $x=v$, so $\|E\|_2=\|r\|_2<\delta$. Also $(J+E)v=\widehat\lambda v$. By [F2], $\widehat\lambda\in\Lambda_\delta(J)$. [given, F2, step 1.1, algebra]

3.1 If $\lambda\ne0$ and $(J-\lambda I)(x_1,x_2)^T=0$, the second row gives $-\lambda x_2=0$, hence $x_2=0$; the first row then gives $-\lambda x_1=0$, hence $x_1=0$. But $e_1$ is a nonzero eigenvector for $\lambda=0$. Thus [F1] gives $\sigma(J)=\{0\}$ and $\operatorname{dist}(\widehat\lambda,\sigma(J))=10^{-4}$, which is $10^4$ times the residual scale. [given, F1, algebra] ∎
