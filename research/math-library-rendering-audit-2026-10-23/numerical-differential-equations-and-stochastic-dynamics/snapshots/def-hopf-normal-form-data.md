---
id: def-hopf-normal-form-data
kind: definition
title: Hopf spectral and multilinear normal-form data
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue
  - prop-simple-eigenvalues-admit-left-right-normalization
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-total-derivative-in-euclidean-space
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 2, 3B–3C, printed pp. 27–49 and 91–104
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: Definition, multidimensional case, and first-Lyapunov formula; orientation only, not a proof supplier
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $f(x,\lambda)$ be a real $C^3$ vector field on an open subset of $\mathbb R^d\times\mathbb R$, and suppose $f(0,0)=0$. Put $A=D_xf(0,0)$. Assume $A$ has a simple pair of eigenvalues $i\omega$ and $-i\omega$, where $\omega>0$, and no other eigenvalue on the imaginary axis. Let $A_{\mathbb C}$ be the complexification of $A$. Choose $q,p\in\mathbb C^d$ with

$$Aq=i\omega q,\qquad A^*p=-i\omega p,\qquad q^*q=1,\qquad p^*q=1.$$

Here $u^*v=\bar u^{\,T}v$ is the standard Hermitian product. To obtain both normalizations, start with nonzero compatible eigenvectors $q_0,p_0$ and put $q=q_0/\sqrt{q_0^*q_0}$. Simplicity gives $a:=p_0^*q\ne0$ by [[prop-simple-eigenvalues-admit-left-right-normalization]]. Set $p=p_0/\overline a$; then $q^*q=1$ and $p^*q=a/a=1$, while both eigenvector equations are preserved. Write $B=D_x^2f(0,0)$ and $C=D_x^3f(0,0)$ for the symmetric real multilinear derivatives, extended complex multilinearly. Since zero and $2i\omega$ are not eigenvalues of $A$, define

$$G_{21}:=p^*\!\left(C(q,q,\bar q)-2B\!\left(q,A^{-1}B(q,\bar q)\right)+B\!\left(\bar q,(2i\omega I-A)^{-1}B(q,q)\right)\right)$$

and define the first Lyapunov coefficient in this normalization by

$$\ell_1:=\frac{\operatorname{Re}G_{21}}{2\omega}.$$

If $q$ is rescaled to $cq$ and the unit-norm condition is dropped while $p^*q=1$ is preserved, then $\ell_1$ rescales by $|c|^2$; under the declared condition $q^*q=1$, the remaining phase freedom leaves $\ell_1$ unchanged. Its sign is the local cubic radial sign. The definition alone is not a bifurcation theorem.

For an equilibrium at arbitrary $(x_*,\lambda_0)$, apply this definition to the translated field $\widehat f(y,\mu)=f(x_*+y,\lambda_0+\mu)$ at $(y,\mu)=(0,0)$. Thus $A=D_xf(x_*,\lambda_0)$, $B=D_x^2f(x_*,\lambda_0)$ and $C=D_x^3f(x_*,\lambda_0)$, and $p,q,\omega$ refer to that same $A$. Translation preserves these spatial derivatives and their Euclidean normalization. If the equilibrium is continued as $\xi(\lambda)$, the further state change $y=x-\xi(\lambda)$ at each fixed parameter gives $\dot y=f(y+\xi(\lambda),\lambda)$; because $\dot\lambda=0$, no extra time-derivative term appears. Spatial jets at the critical parameter are still the same $A,B,C$.
