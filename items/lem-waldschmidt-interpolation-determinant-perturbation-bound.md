---
dependency_level: 0
id: lem-waldschmidt-interpolation-determinant-perturbation-bound
kind: lemma
title: An interpolation determinant with a small row perturbation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- thm-taylor-expansion-holomorphic-function
- thm-boundary-maximum-modulus-principle
- cor-determinant-is-alternating-multilinear-in-the-rows
- thm-leibniz-determinant-is-alternating-multilinear-and-normalized
proof_strategy: direct
sources:
  references:
  - title: Michel Waldschmidt, Linear Independence of Logarithms of Algebraic Numbers,
      IMSc Report116, 1992, ChapterIX Lemmas9.1–9.4 and Proposition9.5
    url: https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $L_0\ge2$ and $L_1\ge4n$ be integers, and let $E>1$. Put

$$\mathcal A=\{\lambda\in\mathbb N^{n+1}:\lambda_1+\cdots+\lambda_n\le L_0,\ 0\le\lambda_{n+1}\le L_1\},\quad L=\binom{L_0+n}{n}(L_1+1),\quad U=\frac{(L_0+1)(L_1+1)\log E}{48n}.$$

Let $\varphi_0,\ldots,\varphi_{L_1}$ be entire functions, let $\ell_1,\ldots,\ell_n\in\mathbb C$, and set $f_\lambda(z)=z_1^{\lambda_1}\cdots z_n^{\lambda_n}\varphi_{\lambda_{n+1}}(\ell_1z_1+\cdots+\ell_nz_n)$. Let $\xi_1,\ldots,\xi_L\in\mathbb C^n$ and $b_{\lambda\mu}\in\mathbb C$. Suppose there are positive real numbers $M_\lambda$ satisfying

$$\max_{|s|=E,\,1\le\mu\le L}|f_\lambda(s\xi_\mu)|\le e^{M_\lambda},\qquad \max_\mu|b_{\lambda\mu}|\le e^{M_\lambda},\qquad \log L+M_\lambda\le U.$$

For every $\varepsilon\in\mathbb C$ with $|\varepsilon|\le e^{-4U}$,

$$\left|\det\bigl(f_\lambda(\xi_\mu)+\varepsilon b_{\lambda\mu}\bigr)_{\lambda\in\mathcal A,\,1\le\mu\le L}\right|\le2^L e^{-LU}.$$

Any fixed ordering of $\mathcal A$ may be used. The zero function, zero perturbation, zero logarithm direction and repeated evaluation points are included.

## Statement references

[Waldschmidt, ChapterIX, Lemmas9.1–9.4 and Proposition9.5](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** The dimensions, parameters, entire functions, evaluation points, row bounds and perturbation in the Statement, under AC.

[A1] The Axiom of Choice is the same permitted ambient axiom as in the consuming logarithmic theorem; no additional choice principle is introduced. ([[def-axiom-of-choice]])

[F1] Holomorphic functions have Taylor expansions on their centered discs, with uniform convergence on smaller compact discs, and the boundary maximum-modulus principle applies on a bounded disc. ([[thm-taylor-expansion-holomorphic-function]], [[thm-boundary-maximum-modulus-principle]])

[F2] The determinant is alternating multilinear in its rows and has the finite Leibniz expansion. ([[cor-determinant-is-alternating-multilinear-in-the-rows]], [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]])

## Proof

1.1 Put $M=\binom{L_0+n-1}{n-1}$. Among multiindices $\kappa\in\mathbb N^n$ with $\kappa_2+\cdots+\kappa_n\le L_0$, at most$M$ have any one specified total degree: the transverse coordinates have $M$ possibilities and then $\kappa_1$ is forced. For $k$ distinct such indices, write $k=Mq+r$ with $0\le r<M$. Their total-degree sum is at least $Mq(q-1)/2+rq$, by filling degree levels starting at zero with at most$M$ indices per level. This is at least $k(k-M)/(2M)$ because the difference is $r(M-r)/(2M)\ge0$. In particular the sum is at least $k^2/(4M)$ if $k\ge2M$. The formula includes$n=1$, for which$M=1$. [given, algebra]

2.1 Choose any subset $I$ of$k$ analytic rows and fill the remaining rows with the constant rows $(b_{\lambda\mu})_\mu$. Let $D_I(s)$ be this mixed determinant, with analytic entries $f_\lambda(s\xi_\mu)$. If the linear form$\ell\cdot z$ is nonzero, make an invertible complex linear coordinate change whose first coordinate is that form. The polynomial prefactors remain polynomials of total degree at most$L_0$, so their Taylor terms times the entire function in the first coordinate have transverse degree at most$L_0$. If the linear form is zero, any coordinate system gives the same conclusion. Expanding the special rows in Taylor monomials gives a convergent expansion near$s=0$. By [F2], a term choosing the same multiindex in two special rows is zero, since those two evaluation rows are proportional. Therefore every nonzero term uses $k$ distinct multiindices of the kind in step1.1. For $k\ge2M$, $D_I$ vanishes at zero to order at least $k^2/(4M)$. Uniform Taylor convergence on compact discs from [F1] justifies the finite-row expansion and coefficient comparisons. [step 1.1, F1, F2, algebra]

3.1 On$|s|=E$, the Leibniz bound is $|D_I(s)|\le L!\exp(\sum_\lambda M_\lambda)\le\exp(LU)$, since$\log L!\le L\log L$ and each$M_\lambda+\log L\le U$. If$D_I$ has a zero of order$\nu$, divide it by$s^\nu$ and use [F1] on the radius-$E$ disc to get $|D_I(1)|\le E^{-\nu}e^{LU}$. An identically zero determinant satisfies every such bound directly. The same boundary principle applied entrywise also gives the trivial bound$|D_I(1)|\le e^{LU}$ when no vanishing order is used. [given, step 2.1, F1, F2, algebra]

4.1 One has $L/M=((L_0+n)/n)(L_1+1)>4$, using$L_0\ge2$ and$L_1\ge4n$. If$k\ge\lceil L/2\rceil$, then$k\ge2M$ and steps1.1–2.1 give a vanishing-order contribution at least $\nu\log E\ge k^2\log E/(4M)\ge kL\log E/(8M)\ge k(L_0+1)(L_1+1)\log E/(8n)=6kU\ge3LU$. Thus$|D_I(1)|\le e^{-2LU}$. Since$U>0$ and$|\varepsilon|\le1$, multiplying by$\varepsilon^{L-k}$ preserves the bound$e^{-LU}$. [step 1.1, step 3.1, given, algebra]

5.1 If$k<\lceil L/2\rceil$, then$L-k\ge L/2$. The trivial bound from step 3.1 and$|\varepsilon|\le e^{-4U}$ give $|\varepsilon|^{L-k}|D_I(1)|\le e^{-2LU}e^{LU}=e^{-LU}$. Expand the required determinant by row multilinearity as$\sum_{I\subseteq\mathcal A}\varepsilon^{L-|I|}D_I(1)$. Each of its$2^L$ terms has absolute value at most$e^{-LU}$ by this step or step 4.1, proving the bound. When$\varepsilon=0$, the term with no perturbation factor is interpreted with exponent zero as1; the same expansion remains valid. Zero rows, repeated evaluation points and zero logarithm direction can only make the corresponding determinants vanish, so require no excluded case. [given, step 3.1, step 4.1, F2, algebra] ∎
