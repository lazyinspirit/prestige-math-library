---
id: lem-ip-lm-fejer-decrease-and-parameter-bound
kind: lemma
title: Regularized LM decreases the local solution error
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - alg-ip-regularized-levenberg-marquardt
  - lem-ip-lm-product-condition-implies-range-approximation
  - lem-ip-lm-step-existence-and-residual-forcing
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-bounded-linear-operator
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - lem-of-abs-value
  - def-countable-choice
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-hilbert-adjoint-properties
  - cor-inner-product-induces-a-norm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Lemma 11.9 and proof of Theorem 11.11"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $X,Y$ be real Hilbert spaces, let $T:X\to Y$ be
bounded linear with Hilbert adjoint $T^*$, and let $e\in X$ and
$r\in Y\setminus\{0\}$. Suppose $0<\sigma<1$, $\gamma>1$, $\alpha>0$,
and $h$ is the unique minimizer of
$$h\longmapsto\frac12\|Th-r\|_Y^2+\frac\alpha2\|h\|_X^2.$$
Assume its residual forcing and the range-approximation condition are
$$\|Th-r\|_Y=\sigma\|r\|_Y,$$
$$\|Te+r\|_Y\le\frac\sigma\gamma\|r\|_Y.$$
Then
$$\|e\|_X^2-\|e+h\|_X^2\ge\|h\|_X^2+\frac{2(\gamma-1)\sigma^2}{\gamma\alpha}\|r\|_Y^2.$$
If also $\|T\|\le M$ for some $M>0$, then
$$\alpha\le\frac{\sigma M^2}{1-\sigma}.$$

## Statement references

[[alg-ip-regularized-levenberg-marquardt|Regularized LM step and forcing rule]]

[[lem-ip-lm-product-condition-implies-range-approximation|Range-approximation condition]]

[[lem-ip-lm-step-existence-and-residual-forcing|Unique linearized minimizer and forcing parameter]]

[[def-countable-choice|Axiom of Countable Choice]]

[[def-hilbert-space-adjoint|Hilbert adjoint]]

[[def-real-and-complex-inner-product-space|Real Hilbert inner-product convention]]

[[thm-hilbert-adjoint-properties|Adjoint norm and product identities]]

[[cor-inner-product-induces-a-norm|Triangle inequality for the Hilbert norm]]

[Christian Clason, *Regularization of Inverse Problems*, Lemma 11.9 and proof of Theorem 11.11](https://arxiv.org/pdf/2001.00617v2)

## Facts & Assumptions

**Given:** Countable Choice; real Hilbert spaces $X,Y$; bounded linear $T:X\to Y$ with adjoint $T^*$; $e\in X$; $r\ne0$; $0<\sigma<1$, $\gamma>1$, $\alpha>0$; a unique minimizer $h$ with $\|Th-r\|=\sigma\|r\|$; and $\|Te+r\|\le(\sigma/\gamma)\|r\|$.

[A1] Countable Choice is the assumed principle used by the adjoint and shifted-normal-operator interfaces ([[def-countable-choice]]).

[F1] In the substitution $T=F'(x)$ and $r=y^\delta-F(x)$, the regularized LM algorithm takes its exact increment to be a global minimizer of this same quadratic ([[alg-ip-regularized-levenberg-marquardt]]).

[F2] The residual after the selected increment has norm $\sigma\|r\|$, and the range-approximation residual satisfies $\|Te+r\|\le(\sigma/\gamma)\|r\|$ ([[lem-ip-lm-step-existence-and-residual-forcing]], [[lem-ip-lm-product-condition-implies-range-approximation]]).

[F3] The adjoint identity gives $\langle T^*q,e\rangle_X=\langle q,Te\rangle_Y$ ([[def-hilbert-space-adjoint]]).

[F4] For a real scalar $a$, $a\le|a|$; Cauchy–Schwarz gives $|\langle q,w\rangle_Y|\le\|q\|_Y\|w\|_Y$ ([[lem-of-abs-value]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F5] The adjoint satisfies $\|T^*\|=\|T\|$ ([[thm-hilbert-adjoint-properties]]).

[F7] The operator norm of a bounded map is the supremum of $\|Sz\|$ over the unit ball ([[def-operator-norm]]).

[F8] The real Hilbert norm satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

[F6] In a real Hilbert space, $\|e+h\|^2=\|e\|^2+2\langle e,h\rangle+\|h\|^2$ ([[def-real-and-complex-inner-product-space]]).

## Proof



1.1 For any $z\in X$ and $t\in\mathbb R$, expansion using [F6] gives
$$\Phi_\alpha(h+tz)-\Phi_\alpha(h)=t\bigl(\langle Th-r,Tz\rangle_Y+\alpha\langle h,z\rangle_X\bigr)+\frac{t^2}{2}\bigl(\|Tz\|_Y^2+\alpha\|z\|_X^2\bigr).$$
Since $h$ is a global minimizer, this is nonnegative for every $t$. Its linear coefficient must therefore vanish: if it were nonzero, a sufficiently small $t$ of the opposite sign would make the displayed difference negative. By [F3], $\langle T^*(Th-r)+\alpha h,z\rangle_X=0$ for every $z$; taking $z=T^*(Th-r)+\alpha h$ and using positive definiteness gives $T^*(Th-r)+\alpha h=0$. Set $q:=r-Th$, so $\alpha h=T^*q$. Therefore [F3] gives $\alpha\langle h,e\rangle_X=\langle q,Te\rangle_Y$, and taking the inner product of $\alpha h=T^*q$ with $h$ gives $\alpha\|h\|_X^2=\langle q,Th\rangle_Y=\langle q,r\rangle_Y-\|q\|_Y^2$. [F3, F6, given, construct, algebra]

2.1 Put $w:=Te+r$. By [F6] and step 1.1, $\|e+h\|_X^2-\|e\|_X^2=\frac2\alpha\langle q,w\rangle_Y-\|h\|_X^2-\frac2\alpha\|q\|_Y^2.$ Indeed, $Te=w-r$; substitute this into $2\langle e,h\rangle+\|h\|^2$ and use $\langle q,r\rangle=\alpha\|h\|^2+\|q\|^2$. [F3, F6, step 1.1, algebra]

3.1 By [F2], $\|q\|_Y=\sigma\|r\|_Y$ and $\|w\|_Y\le(\sigma/\gamma)\|r\|_Y$. Thus [F4] gives $2\langle q,w\rangle_Y\le2|\langle q,w\rangle_Y|\le2\|q\|_Y\|w\|_Y\le2\sigma^2\|r\|_Y^2/\gamma$. Substituting this and $\|q\|_Y^2=\sigma^2\|r\|_Y^2$ into step 2.1 yields $\|e\|_X^2-\|e+h\|_X^2\ge\|h\|_X^2+\frac{2(\gamma-1)\sigma^2}{\gamma\alpha}\|r\|_Y^2,$ which is the first claim. [F2, F4, step 2.1, algebra]

4.1 Applying $T$ to $\alpha h=T^*q$ and using $q=r-Th$ gives $(TT^*+\alpha I_Y)q=\alpha r$. By [F8], $\alpha\|r\|_Y=\|(TT^*+\alpha I_Y)q\|_Y\le\|TT^*q\|_Y+\alpha\|q\|_Y$. The unit-ball definition [F7] gives $\|T^*q\|_X\le\|T^*\|\|q\|_Y$ and $\|T(T^*q)\|_Y\le\|T\|\|T^*q\|_X$: if an input vector is nonzero, divide it by its norm to place it in the unit ball; if it is zero, the bound is immediate. Then [F5] gives $\|TT^*q\|_Y\le\|T\|\|T^*\|\|q\|_Y=\|T\|^2\|q\|_Y$. Thus, using $\|T\|\le M$ and the forcing equality, $\alpha\|r\|_Y\le(M^2+\alpha)\sigma\|r\|_Y.$ Since $r\ne0$, divide by $\|r\|_Y$ and rearrange using $1-\sigma>0$ to obtain $\alpha\le\sigma M^2/(1-\sigma)$. [A1, F2, F5, F7, F8, given, step 1.1, algebra] ∎
## Remarks

Apply the lemma in the iteration with $T=F'(x)$, $e=x-x^\dagger$, and $r=y^\delta-F(x)$. By [F1], the algorithm's exact increment is the required minimizer. Then $Te+r$ is the negative of the linearized residual at $x^\dagger$, so their norms agree. The proof uses Countable Choice through the Hilbert-adjoint and normal-operator interfaces; it does not use full AC, DC, or HB. The first estimate is conditional on the exact residual-forcing step and the stated range-approximation inequality. It is not a claim about arbitrary inexact solutions of the normal equation.
