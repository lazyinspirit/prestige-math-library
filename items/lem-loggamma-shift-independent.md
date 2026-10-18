---
id: lem-loggamma-shift-independent
kind: lemma
title: Shifted log-Gamma branch is independent of the shift
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-loggamma-slit-plane-branch, def-loggamma-right-halfplane-branch, lem-gamma-functional-equation-meromorphic-extension, lem-loggamma-series-convergence-and-gamma-identity, thm-gamma-functional-equation, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, def-complex-logarithms-principal-logarithm-and-complex-powers, thm-polar-form-with-unique-principal-argument, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, def-complex-exponential, thm-chain-rule-for-complex-derivatives, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant, def-complex-conjugate-real-imaginary-part-and-modulus, thm-path-connected-implies-connected, lem-real-and-complex-modulus-rules, def-natural-logarithm, thm-natural-logarithm-laws]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §5.11, asymptotic expansions
      url: https://dlmf.nist.gov/5.11
    - title: DLMF, §5.5, functional relations
      url: https://dlmf.nist.gov/5.5
    - title: DLMF, §§5.5, 5.8, and 5.11
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 2
---

## Statement

For every $z\in\Omega=\mathbb C\setminus(-\infty,0]$, the value $\ell(z)$ in
[[def-loggamma-slit-plane-branch]] is independent of the integer $m\ge0$ with
$\operatorname{Re}(z+m)>0$, is holomorphic on $\Omega$, and satisfies
$e^{\ell(z)}=\Gamma(z)$.

## Facts & Assumptions

**Given:** $z\in\Omega$ and the branch definitions [[def-loggamma-right-halfplane-branch]] and [[def-loggamma-slit-plane-branch]].

[F1] [[lem-loggamma-series-convergence-and-gamma-identity]]: $e^{\ell_+(w)}=\Gamma(w)$ and $\ell_+$ is holomorphic for $\operatorname{Re}w>0$.

[F2] [[thm-gamma-functional-equation]]: if $\operatorname{Re}w>0$, then $\Gamma(w+1)=w\Gamma(w)$.

[F3] [[lem-gamma-functional-equation-meromorphic-extension]]: the same functional equation holds when $w$ is not a nonpositive integer.

[F4] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]: $\operatorname{Log}$ is holomorphic on the slit plane and $\operatorname{Log}'(w)=1/w$. [[def-complex-logarithms-principal-logarithm-and-complex-powers]] and [[thm-polar-form-with-unique-principal-argument]] give $\operatorname{Log}w=\log w\in\mathbb R$ for positive real $w$.

[F5] [[thm-complex-exponential-is-entire-with-derivative-itself]] and [[thm-chain-rule-for-complex-derivatives]]: $(e^H)'=e^H H'$ for holomorphic $H$.

[F6] [[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]: a holomorphic function with zero derivative on a connected open domain is constant.

[F7] [[thm-complex-exponential-addition-and-real-extension]] and [[def-complex-exponential]]: $\exp(u+v)=\exp(u)\exp(v)$ and $\exp(0)=1$. In particular, $\exp(-v)$ is the reciprocal of $\exp(v)$.

[F8] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: on the positive reals, $\log$ is the inverse of $\exp$ and $\log 1=0$.

[F9] [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-real-and-complex-modulus-rules]], and [[thm-path-connected-implies-connected]]: the right half-plane is open, since if $x=\operatorname{Re}w_0>0$ and $|w-w_0|<x$, then $\operatorname{Re}w\ge x-|\operatorname{Re}(w-w_0)|\ge x-|w-w_0|>0$. For $w_0,w_1$ in it, $\gamma(t)=(1-t)w_0+tw_1$ has positive real part and $|\gamma(t)-\gamma(s)|=|t-s||w_1-w_0|$, which proves continuity by the metric definition. The half-plane contains $1$ and is open and connected.

[F10] [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]: under $\mathbb C\cong\mathbb R^2$, a complex-differentiable function is totally differentiable and its real derivative is multiplication by its complex derivative; in particular, $H'=0$ implies $DH=0$.

## Proof
1.1 For $\operatorname{Re}w>0$, the function $H(w)=\ell_+(w+1)-\ell_+(w)-\operatorname{Log}w$ is holomorphic by [F1]. The functional equation [F2], branch identity [F1], and $\exp(\operatorname{Log}w)=w$ from [F4] give $\exp(\ell_+(w+1))=\exp(\ell_+(w)+\operatorname{Log}w)$. By [F7], $\exp(H(w))=1$. Differentiating this identity by [F5] gives $\exp(H(w))H'(w)=0$, hence $H'(w)=0$. By [F10], the real derivative of $H$ vanishes; the right half-plane is nonempty, open, and connected by [F9], so [F6] makes $H$ constant there. For positive real $w$, all three terms are real by the defining series for $\ell_+$ and the real logarithm, so [F8] and $\exp(H(w))=1$ imply $H(w)=\log1=0$. Therefore $\ell_+(w+1)=\ell_+(w)+\operatorname{Log}w$ throughout the right half-plane. [F1, F2, F4, F5, F6, F7, F8, F9, F10, algebra]

2.1 If $m_2>m_1$ are both admissible shifts, then $w=z+m_1$ has positive real part, as do $w,w+1,\ldots,w+(m_2-m_1-1)$. Iterating step 1.1 gives $$\ell_+(z+m_2)-\sum_{j=0}^{m_2-1}\operatorname{Log}(z+j) =\ell_+(z+m_1)-\sum_{j=0}^{m_1-1}\operatorname{Log}(z+j),$$ so the definition is independent of $m$. Locally $m$ can be fixed, making the formula holomorphic; independence makes these local formulas agree. [given, step 1.1, algebra]

3.1 Exponentiating the formula with any admissible $m$ gives $e^{\ell(z)}=\Gamma(z+m)/\prod_{j=0}^{m-1}(z+j)$ by [F1]. None of the factors vanishes because $z\in\Omega$. Iterating [F3] downward therefore identifies this quotient with $\Gamma(z)$. [F1, F3, step 2.1, algebra] ∎
