---
id: thm-hyperbolic-local-map-stability
kind: theorem
title: A hyperbolic fixed point of a local map is stable exactly when all multipliers contract
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-mean-value-inequality-for-total-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
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
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101, Poincare-map stability of Hopf cycles
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, attracting and repelling periodic orbits
verification:
  precheck: pass
---

## Statement

Let $P$ be a $C^1$ map from a neighborhood of $0$ in $\mathbb R^m$ to $\mathbb R^m$ with $P(0)=0$. If $DP(0)$ has no eigenvalue on the unit circle, then:

- if every eigenvalue has modulus less than one, $0$ is a locally asymptotically stable fixed point;
- if at least one eigenvalue has modulus greater than one, $0$ is an unstable fixed point.

Here local asymptotic stability means Lyapunov stability and convergence of all iterates from a neighborhood to $0$; instability means failure of Lyapunov stability.

## Facts & Assumptions

**Given:** $P$, its fixed point, and the spectral hypothesis in the Statement.

[F1] [[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]: over $\mathbb C$, a finite-dimensional matrix whose characteristic polynomial splits has a Jordan form.

[F2] [[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]: every complex characteristic polynomial splits and its roots are counted with algebraic multiplicity.

[F3] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open Euclidean domain, $\|Df(z)v\|_2\le M\|v\|_2$ implies $\|f(x)-f(y)\|_2\le M\|x-y\|_2$.

[F4] [[def-ck-euclidean-maps-and-diffeomorphisms]]: $C^1$ maps have continuous first derivatives.

## Proof

**Given:** $P(0)=0$ and $A:=DP(0)$ has no eigenvalue of modulus one.

1.1 If $m=0$, the space has only its fixed point, so local asymptotic stability is immediate. Henceforth let $m\ge1$. Suppose first every eigenvalue of $A$ has modulus less than one. By [F1]–[F2], put its complexification in Jordan form. On a Jordan block $\lambda I+N$ of size $k$, conjugate by the diagonal matrix with entries $1,\delta,\ldots,\delta^{k-1}$; the superdiagonal becomes $\delta$, so the maximum row-sum norm is at most $|\lambda|+\delta$. Choose $\delta$ small for the finitely many blocks. Restricting the resulting equivalent norm to the real space gives an induced norm with $\|A\|<q<1$. [F1, F2, given, construct]

2.1 Fix constants $c,C>0$ with $c\|v\|_2\le\|v\|\le C\|v\|_2$ for the adapted norm in step 1.1; the finite coordinate sums for the change of basis and its inverse give these bounds. Put $R(x)=P(x)-Ax$, so $DR(0)=0$. Choose $\epsilon>0$ with $q':=q+(C/c)\epsilon<1$. By [F4], on a sufficiently small convex open Euclidean ball, $\|DR(x)\|_2\le\epsilon$, so [F3] gives $\|R(x)-R(y)\|_2\le\epsilon\|x-y\|_2$. Consequently $\|P(x)-P(y)\|\le(q+(C/c)\epsilon)\|x-y\|=q'\|x-y\|$. Choose an adapted-norm ball inside that Euclidean ball. Since $P(0)=0$, every iterate from this smaller ball stays in it and satisfies $\|P^n(x)\|\le(q')^n\|x\|\to0$. Norm equivalence also transfers Lyapunov stability to the Euclidean topology, proving local asymptotic stability. [F3, F4, step 1.1, given, algebra]

2.2 Now suppose $A$ has an eigenvalue of modulus greater than one. Its stable and unstable generalized eigenspaces give an invariant direct sum $E_s\oplus E_u$. Applying the Jordan scaling in step 1.1 to $A|_{E_s}$ and $(A|_{E_u})^{-1}$ gives equivalent norms and constants $a<1<b$ such that $\|A_s s\|\le a\|s\|$ and $\|A_u u\|\ge b\|u\|$. [F1, F2, step 1.1, given, algebra]

3.1 Write $P(x)=Ax+R(x)$, where $DR(0)=0$. By continuity in [F4], on a sufficiently small ball $\|R(x)\|\le\epsilon\|x\|$. In the cone $\|s\|\le\|u\|$, the product maximum norm gives $\|x\|=\|u\|$; hence $\|u'\|\ge(b-\epsilon)\|u\|$ and $\|s'\|\le(a+\epsilon)\|u\|$. Choose $\epsilon>0$ with $b-\epsilon>1$ and $a+\epsilon<b-\epsilon$. The cone is forward invariant while the iterate remains in the ball, and its unstable component grows by the factor $b-\epsilon>1$. [step 2.2, F4, algebra]

4.1 Starting at any arbitrarily small nonzero $u\in E_u$ with $s=0$, step 3.1 forces an iterate to leave the fixed ball; otherwise its unstable component would grow without bound while staying in that ball. Thus arbitrarily small initial data escape this one fixed neighborhood of zero, so zero is not Lyapunov stable. [step 3.1, given, contradiction] ∎
