---
id: lem-hopf-smooth-eigenpair-branch
kind: lemma
title: A simple eigenpair has a regularity-matched gauge-fixed parameter branch
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue
  - prop-simple-eigenvalues-admit-left-right-normalization
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing
  - thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §3.5, printed pp. 91–93, smooth eigenvectors and parameter-dependent Hopf data
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Section 3C, printed pp. 95–98, continuation of the critical eigenvalue and crossing condition
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $k\ge1$ and let $A(\lambda)\in\mathbb C^{d\times d}$ be a $C^k$ matrix path. Let $\zeta_0$ be a simple eigenvalue of $A(0)$, and choose compatible left and right eigenvectors $p_0,q_0$ with $p_0^*q_0=1$. Then there are unique local $C^k$ functions $\zeta(\lambda),q(\lambda)$ such that
$$A(\lambda)q(\lambda)=\zeta(\lambda)q(\lambda),\qquad p_0^*q(\lambda)=1,\qquad \zeta(0)=\zeta_0,\quad q(0)=q_0.$$
There is also a unique local $C^k$ left eigenvector $p(\lambda)$ with
$$A(\lambda)^*p(\lambda)=\overline{\zeta(\lambda)}p(\lambda),\qquad p(\lambda)^*q(\lambda)=1,\qquad p(0)=p_0.$$
Moreover, $\zeta'(0)=p_0^*A'(0)q_0$.

## Facts & Assumptions

**Given:** $A$, $\zeta_0$, $p_0$, $q_0$ and the hypotheses in the Statement.

[F1] [[def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue]]: $A(0)q_0=\zeta_0q_0$ and $p_0^*A(0)=\zeta_0p_0^*$.

[F2] [[prop-simple-eigenvalues-admit-left-right-normalization]]: compatible left and right eigenvectors for a simple eigenvalue can be normalized by $p_0^*q_0=1$.

[F3] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: a $C^k$ equation with an invertible derivative in the solved variables has a unique local $C^k$ solution branch for every $k\ge1$.

[F4] [[thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]]: the simple eigenvalue and the same gauge-fixed eigenvector have unique local $C^1$ branches.

[F5] [[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]]: along compatible branches normalized by $p^*q=1$, $\zeta'=p^*A'q$.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Regard complex vector spaces as real spaces of twice the dimension and define
$$\Phi(\lambda,\zeta,q):=((A(\lambda)-\zeta I)q,\ p_0^*q-1).$$
This is $C^k$ by the matrix path hypothesis. Its derivative in $(\zeta,q)$ at $(0,\zeta_0,q_0)$ sends $(a,v)$ to $((A(0)-\zeta_0I)v-aq_0,\ p_0^*v)$. If this derivative is zero, left multiplication of the first component by $p_0^*$ gives $-a=0$ by [F1] and [F2]; then $v$ is in the eigenspace spanned by $q_0$, and $p_0^*v=0$ forces $v=0$. Thus the derivative is injective and, its finite-dimensional domain and codomain having equal real dimension, invertible. [F1, F2, given, algebra]

2.1 Apply [F3] to $\Phi=0$ in the solved variables $(\zeta,q)$. It gives unique $C^k$ branches satisfying the eigenvalue equation, gauge, and base values. By uniqueness they agree with the $C^1$ branches in [F4]. [F3, F4, step 1.1]

2.2 Apply the same implicit-function construction as step 1.1 to $A(\lambda)^*$ at eigenvalue $\bar\zeta_0$, with gauge $q_0^*p(\lambda)=1$. The same injectivity computation, with $q_0,p_0$ interchanged and conjugated, gives a unique $C^k$ left eigenvector branch $\widetilde p(\lambda)$; its eigenvalue is $\overline{\zeta(\lambda)}$ by uniqueness of the simple local branch. [F1, F2, F3, step 1.1, algebra]

3.1 Set $c(\lambda)=\widetilde p(\lambda)^*q(\lambda)$. It is $C^k$ and $c(0)=1$, so it stays nonzero after shrinking the interval. Define $p(\lambda)=\widetilde p(\lambda)/\overline{c(\lambda)}$; then $p(\lambda)^*q(\lambda)=c(\lambda)/c(\lambda)=1$ and its eigenvector equation is unchanged. If $\widehat p$ is another such local branch, rescale it by $d(\lambda)=q_0^*\widehat p(\lambda)$, which is nonzero near zero and equals $1$ at zero. Then $\widehat p/d$ satisfies the fixed gauge $q_0^*(\widehat p/d)=1$ and solves the same adjoint eigenpair equation, so IFT uniqueness from step 2.2 gives $\widehat p/d=\widetilde p$. The normalization $\widehat p^*q=1$ then forces $d=1/\overline c$, hence $\widehat p=p$. [F1, F2, step 2.1, step 2.2, given, algebra]

4.1 Differentiate $A(\lambda)q(\lambda)=\zeta(\lambda)q(\lambda)$ at zero and left-multiply by $p_0^*$. The terms containing $q'(0)$ cancel by [F1], and $p_0^*q_0=1$ by [F2], leaving $\zeta'(0)=p_0^*A'(0)q_0$, also the interface stated in [F5]. [F1, F2, F5, step 2.1, algebra] ∎
