---
dependency_level: 3
id: thm-maass-hecke-prime-adjoint-and-uniform-norm
kind: theorem
title: "Adjoint and uniform norm of a prime Maass Hecke operator"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gamma0-prime-hecke-double-coset-correspondence, def-hecke-operator-on-maass-forms, def-weight-zero-maass-form-on-gamma0n]
justified_by: []
sources:
  references:
    - title: "Knightly-Li, Kuznetsov trace formula, sections 4.2 and 7-9; local reconstruction with stated scope"
      url: https://arxiv.org/pdf/1202.0189v1
---

## Statement

Let $N\geq1$, let $\chi$ be even and unitary modulo $N$, and let $p\nmid N$ be prime. Use automorphy $u(\gamma z)=\chi(d_\gamma)u(z)$ and the finite Hecke formula with coefficient $\chi(a)$. On smooth automorphic square-integrable functions,

$$T_pu=p^{-1/2}\left(\sum_{b=0}^{p-1}u((z+b)/p)+\chi(p)u(pz)\right).$$

It preserves automorphy and cuspidality, commutes pointwise with the hyperbolic Laplacian, and extends boundedly to the $L^2$ closure of those smooth functions and their cuspidal subspace. For either the unnormalized Petersson inner product or its fixed level-dependent positive scalar multiple,

$$T_p^*=\overline{\chi(p)}T_p,\qquad\|T_p\|\leq p^{1/2}+p^{-1/2}.$$

If $\xi^2=\overline{\chi(p)}$, then $\xi T_p$ is self-adjoint. In particular every nonzero Maass eigenfunction $T_pu=\lambda_pu$ has a real normalized eigenvalue $\nu_p=\xi\lambda_p$ with $|\nu_p|\leq p^{1/2}+p^{-1/2}$, uniformly in $N$ and $\chi$. No spectral completeness or existence of a simultaneous eigenbasis is asserted.

## Statement references

[[lem-gamma0-prime-hecke-double-coset-correspondence]]

[[def-hecke-operator-on-maass-forms]]

[[def-weight-zero-maass-form-on-gamma0n]]

## Facts & Assumptions

[F1] The prime double coset, its two index-$p+1$ subgroups, character compatibility, and weighted finite sum are proved in [[lem-gamma0-prime-hecke-double-coset-correspondence]].

[F2] Automorphic functions, the hyperbolic measure and cusp conditions are defined in [[def-weight-zero-maass-form-on-gamma0n]]. The Hecke normalization is [[def-hecke-operator-on-maass-forms]].

## Proof

**Given:** The data in the Statement. Inner products are linear in the first argument. First use the unnormalized quotient integrals; a common positive scalar factor does not affect adjoints or norms.

1.1 Write $d=p+1$, $H=\Gamma\cap\alpha^{-1}\Gamma\alpha$ and $H'=\alpha H\alpha^{-1}$ as in F1. For a function $v$ transforming by $\varepsilon$ under $H$, define $\operatorname{Tr}_Hv(z)=\sum_{\gamma\in H\backslash\Gamma}\varepsilon(\gamma)^{-1}v(\gamma z)$. Finite unions of translates of a measurable fundamental region give a fundamental region for $H$, and changing variables in these finitely many integrals proves $\langle\operatorname{Tr}_Hv,w\rangle_\Gamma=\langle v,w\rangle_H$ for $w$ automorphic under $\Gamma$. Cauchy–Schwarz in the $d$ summands gives $\|\operatorname{Tr}_Hv\|_\Gamma\leq\sqrt d\|v\|_H$. Unit character factors do not change these estimates. [F1, F2, construct, algebra]

2.1 Put $R_\alpha u(z)=u(\alpha z)$. Character compatibility from F1 makes this $H$-automorphic. Hyperbolic measure is invariant under $\alpha$, and $\alpha$ maps an $H$ fundamental region to an $H'$ fundamental region. Thus $\|R_\alpha u\|_H^2=\|u\|_{H'}^2=d\|u\|_\Gamma^2$. The operator of F1 is $S_\alpha=\varepsilon(\alpha)^{-1}\operatorname{Tr}_H R_\alpha$. Consequently $\|S_\alpha u\|\leq d\|u\|$ and $\|T_pu\|\leq d/\sqrt p\|u\|$. These estimates also prove independence of almost-everywhere representatives and give the unique bounded extension to the indicated closure. [F1, step 1.1, algebra]

3.1 Let $\alpha^*=p\alpha^{-1}=\operatorname{diag}(p,1)$; its fractional linear action equals that of $\alpha^{-1}$. Applying step 1.1 and then $w=\alpha z$ gives $\langle S_\alpha u,v\rangle_\Gamma=\varepsilon(\alpha)^{-1}\langle u,R_{\alpha^*}v\rangle_{H'}=\varepsilon(\alpha)^{-1}\langle u,\operatorname{Tr}_{H'}R_{\alpha^*}v\rangle_\Gamma$. Since $\varepsilon(\alpha)=\chi(p)$, $\varepsilon(\alpha^*)=1$, and $\alpha^*$ belongs to the same double coset by F1, representative independence identifies $\operatorname{Tr}_{H'}R_{\alpha^*}=S_\alpha$. Taking account of conjugation of a scalar in the second argument gives $S_\alpha^*=\chi(p)S_\alpha$. Since $T_p=\chi(p)S_\alpha/\sqrt p$, this yields $T_p^*=\overline{\chi(p)}T_p$. [F1, step 1.1, step 2.1, algebra]

4.1 Automorphy is F1. A rational positive-determinant matrix carries a rational cusp to a rational cusp. After integral cusp scalings, its action fixing infinity is $z\mapsto az+b$ with $a>0$ rational and $b$ rational. On a common period, enlarged to kill the finite-order cusp character, each summand therefore has no zero Fourier mode whenever the input has none. A nonzero frequency remains nonzero under positive rational dilation. Finite sums preserve that property at every cusp. This proves preservation of smooth cuspidality, hence of its closed span; the adjoint formula also preserves that span. For the Laplacian, $\operatorname{Im}(\beta z)=\det(\beta)y/|cz+d|^2$ and $\beta'(z)=\det(\beta)/(cz+d)^2$. The chain rule in $\Delta=-4y^2\partial_z\partial_{\bar z}$ shows $\Delta(u\circ\beta)=(\Delta u)\circ\beta$. Thus Maass cusp forms are preserved with their Laplace eigenvalue. [F1, F2, step 2.1, step 3.1, algebra]

5.1 Since $|\chi(p)|=1$, any $\xi^2=\overline{\chi(p)}$ has modulus one. The adjoint formula gives $(\xi T_p)^*=\bar\xi\overline{\chi(p)}T_p=\xi T_p$. For a nonzero eigenfunction, $\langle\xi T_pu,u\rangle=\nu_p\|u\|^2$ is real, and the operator norm bound gives $|\nu_p|\leq d/\sqrt p$. These facts prove the stated uniform real compact interval without any spectral-completeness argument. [step 2.1, step 3.1, step 4.1, algebra] ∎

## Source convention

Knightly–Li use automorphy $\overline{\omega'}$; the library's actual character is $\chi=\overline{\omega'}$. This proof establishes the adjoint and norm locally in that library convention.
