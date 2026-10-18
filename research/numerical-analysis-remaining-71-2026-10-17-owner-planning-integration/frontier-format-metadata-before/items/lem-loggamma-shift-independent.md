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
deps: [def-loggamma-slit-plane-branch, def-loggamma-right-halfplane-branch, lem-gamma-functional-equation-meromorphic-extension, lem-loggamma-series-convergence-and-gamma-identity, thm-gamma-functional-equation, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
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
---

## Statement

For every $z\in\Omega=\mathbb C\setminus(-\infty,0]$, the value $\ell(z)$ in
[[def-loggamma-slit-plane-branch]] is independent of the integer $m\ge0$ with
$\operatorname{Re}(z+m)>0$, is holomorphic on $\Omega$, and satisfies
$e^{\ell(z)}=\Gamma(z)$.

## Facts & Assumptions

**Given:** $z\in\Omega$ and the branch definitions
[[def-loggamma-right-halfplane-branch]] and
[[def-loggamma-slit-plane-branch]].

[F1] [[lem-loggamma-series-convergence-and-gamma-identity]]:
$e^{\ell_+(w)}=\Gamma(w)$ and $\ell_+$ is holomorphic for $\operatorname{Re}w>0$.

[F2] [[thm-gamma-functional-equation]]: if $\operatorname{Re}w>0$, then
$\Gamma(w+1)=w\Gamma(w)$.

[F3] [[lem-gamma-functional-equation-meromorphic-extension]]: the same
functional equation holds when $w$ is not a nonpositive integer.

[F4] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
$\operatorname{Log}$ is holomorphic on the slit plane and
$\operatorname{Log}'(w)=1/w$.

[F5] [[thm-complex-exponential-is-entire-with-derivative-itself]] and
[[thm-chain-rule-for-complex-derivatives]]: $(e^H)'=e^H H'$ for holomorphic
$H$.

[F6] [[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]:
a holomorphic function with zero derivative on a connected open domain is
constant.

## Proof
1.1 For $\operatorname{Re}w>0$, the function $H(w)=\ell_+(w+1)-\ell_+(w)-\operatorname{Log}w$ is holomorphic by [F1], and $e^{H(w)}=1$ by [F1] and [F2]. Differentiating this identity by [F5] gives $e^{H(w)}H'(w)=0$, hence $H'(w)=0$ since $e^{H(w)}=1$. By [F6], $H$ is constant on the connected right half-plane. For positive real $w$, all three terms are real, so that constant is $0$. Therefore $\ell_+(w+1)=\ell_+(w)+\operatorname{Log}w$ throughout the right half-plane. [F1, F2, F4, F5, F6, algebra]

2.1 If $m_2>m_1$ are both admissible shifts, then $w=z+m_1$ has positive real part, as do $w,w+1,\ldots,w+(m_2-m_1-1)$. Iterating step 1.1 gives $$\ell_+(z+m_2)-\sum_{j=0}^{m_2-1}\operatorname{Log}(z+j) =\ell_+(z+m_1)-\sum_{j=0}^{m_1-1}\operatorname{Log}(z+j),$$ so the definition is independent of $m$. Locally $m$ can be fixed, making the formula holomorphic; independence makes these local formulas agree. [given, step 1.1, algebra]

3.1 Exponentiating the formula with any admissible $m$ gives $e^{\ell(z)}=\Gamma(z+m)/\prod_{j=0}^{m-1}(z+j)$ by [F1]. None of the factors vanishes because $z\in\Omega$. Iterating [F3] downward therefore identifies this quotient with $\Gamma(z)$. [F1, F3, step 2.1, algebra] ∎