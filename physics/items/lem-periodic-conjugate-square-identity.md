---
id: lem-periodic-conjugate-square-identity
kind: lemma
title: "The periodic conjugate square identity for real mean-zero polynomials"
status: published
origin: pipeline
deps: [def-conjugate-function-on-the-circle, def-fourier-coefficients-and-trigonometric-polynomials, lem-trigonometric-characters-are-orthonormal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.3, square identity (5.1.23) and its Fourier proof, printed pp. 320-321; adapted to zero-mean periodic polynomials"
---

## Statement

Let $g$ be a real-valued trigonometric polynomial on
$\mathbb T=\mathbb R/\mathbb Z$ with zero mean, and let $C$ be the conjugate
function of [[def-conjugate-function-on-the-circle]]. Then

$$(Cg)^2=g^2+2\,C(g\,Cg).$$

The identity is asserted for trigonometric polynomials only; no extension to
arbitrary $L^p(\mathbb T)$ inputs is claimed here, and the mean-zero hypothesis
is not removable: for the constant polynomial $g=1$ one has $Cg=0$ and
$C(gCg)=0$, so the right-hand side equals $1$ while the left-hand side vanishes.

## Facts & Assumptions

**Given:** A real-valued trigonometric polynomial $g$ on $\mathbb T$ with zero mean; the conjugate function $C$ on trigonometric polynomials.

[F1] On trigonometric polynomials $C$ acts coefficientwise by $\widehat{Cf}(k)=-i\operatorname{sgn}(k)\widehat f(k)$; it is complex-linear, kills constants, and preserves real-valuedness, so $Cg$ is real-valued for real $g$. [[def-conjugate-function-on-the-circle]]

[F2] Characters satisfy $e_ke_l=e_{k+l}$ and a trigonometric polynomial is a finite complex linear combination of characters. [[def-fourier-coefficients-and-trigonometric-polynomials]]

[F3] If $p=\sum_{k\in F}c_ke_k$ is a trigonometric polynomial, then its Fourier coefficient at $j\in F$ is $\widehat p(j)=c_j$ and $\widehat p(j)=0$ for $j\notin F$. [[lem-trigonometric-characters-are-orthonormal]]

## Proof

**Proof technique:** direct.

1.1 Write the finite expansion $g=\sum_{k\in F}c_ke_k$ given by [F2]. Since $g$ has mean zero and $0\in F$, [F3] gives $c_0=\widehat g(0)=0$; since $g$ is real-valued, [F1] makes $Cg=\sum_{k\in F}(-i\operatorname{sgn}(k))c_ke_k$ real-valued, so $Cg=\sum_{k\in F,0\ne k}(-i\operatorname{sgn}k)c_ke_k$ has zero mean as well. Adding the two expansions and using complex-linearity of $C$ from [F1] gives $F:=g+iCg=\sum_{k\in F}c_k(1+\operatorname{sgn}k)e_k=\sum_{k>0}2c_ke_k$: a trigonometric polynomial whose only frequencies are strictly positive. [F1, F2, F3]

2.1 By [F2], $e_ke_l=e_{k+l}$, so expanding the finite square and collecting terms shows that $F^2=\sum_{k,l>0}4c_kc_le_{k+l}$ is a trigonometric polynomial whose only frequencies are strictly positive. On a polynomial carried by the characters $e_k$ with $k>0$, the coefficient rule of [F1] gives $C(e_k)=-ie_k$, and complex-linearity gives $C(F^2)=-iF^2$. [step 1.1, F1, F2]

2.2 Expanding, $F^2=(g+iCg)^2=g^2-(Cg)^2+2i\,g\,Cg$; by 1.1 both $u:=g^2-(Cg)^2$ and $v:=2g\,Cg$ are real-valued trigonometric polynomials with real-valued conjugate transforms, and $F^2=u+iv$. By complex-linearity of $C$, $C(F^2)=Cu+iCv$. [step 1.1, F1]

3.1 By 2.1 and 2.2, $Cu+iCv=-iF^2=-i(u+iv)=v-iu$. Taking real and imaginary parts of this identity of trigonometric polynomials, whose four real and imaginary parts are real-valued by 2.2, gives $Cu=v$ and $Cv=-u$. [step 2.1, step 2.2]

4.1 Substituting $u=g^2-(Cg)^2$ and $v=2g\,Cg$ into $Cv=-u$ gives $2C(gCg)=(Cg)^2-g^2$, hence $(Cg)^2=g^2+2C(gCg)$, which is the asserted identity. [step 3.1, F1] ∎
