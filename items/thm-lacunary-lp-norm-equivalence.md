---
id: thm-lacunary-lp-norm-equivalence
kind: theorem
title: "L-p norm equivalence for finite Hadamard-lacunary sums"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm, lem-hadamard-gaps-bound-additive-representations, thm-holder-inequality-for-integrals]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Theorem 3.6.4"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $q>1$ and $0<p<\infty$. There are constants $c_{p,q},C_{p,q}>0$ such
that every finite $q$-Hadamard-lacunary sum
$f=\sum_{j\in J}a_je_{\lambda_j}$ satisfies

$$c_{p,q}\left(\sum_{j\in J}|a_j|^2\right)^{1/2} \le\|f\|_{L^p(\mathbb T)} \le C_{p,q}\left(\sum_{j\in J}|a_j|^2\right)^{1/2}.$$

Here $\|f\|_p=(\int_0^1|f|^p)^{1/p}$ is a quasi-norm when $0<p<1$.
The $L^2$ identity is [[lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm]],
the additive input is [[lem-hadamard-gaps-bound-additive-representations]],
and the usual $p\ge1$ integral inequality is
[[thm-holder-inequality-for-integrals]].

## Facts & Assumptions

**Given:** $p,q,J,(a_j)$ and $f$ as in the Statement; write $A=(\sum_{j\in J}|a_j|^2)^{1/2}$.

## Proof

**Proof technique:** residue-class even moments, followed by interpolation or a distribution bound.

1.1 For every integer $m\ge1$, split $J$ into $r=r(m,q)$ residue classes [given, algebra] with $q^r>m$. Expanding the $2m$-th moment of each class, the additive lemma says that only equal index multisets survive integration. Their permutations give at most $(m!)^2$ copies, and $|\sum_{\nu=1}^rz_\nu|^{2m}\le r^{2m-1}\sum_\nu|z_\nu|^{2m}$. Consequently $$\|f\|_{2m}\le B_{m,q}A$$ for a constant independent of $J$ and the coefficients. [given, algebra]

2.1 The cited $L^2$ identity gives $\|f\|_2=A$. If $1\le p<2$, Holder [step 1.1, algebra] applied to $|f|^2=|f|^{\theta p}|f|^{2m(1-\theta)}$, with $1/2=\theta/p+(1-\theta)/(2m)$, combines this identity and step 1.1 to give $A\le\|f\|_p^\theta(B_{m,q}A)^{1-\theta}$. If $p\ge2$, choose $m$ with $p\le2m$ and apply the same interpolation identity with $1/p$ between $1/2$ and $1/(2m)$ for the upper bound. For the lower bound, normalized Haar measure has mass one, so Holder gives $\|f\|_p\ge\|f\|_2=A$ whenever $p\ge2$. Thus the stated two-sided estimate holds for every $p\ge1$. [step 1.1, algebra]

3.1 Let $0<p<1$. Step 1.1 with $m=2$ and the $L^2$ identity give [step 1.1, step 2.1, algebra] $\int|f|^2=A^2$ and $\int|f|^4\le B_{2,q}^4A^4$. Cauchy--Schwarz applied to $|f|^2\mathbf1_{\{|f|\ge A/\sqrt2\}}$ shows that this set has measure at least $d_q>0$; otherwise its complement contributes at most $A^2/2$. Hence $\|f\|_p^p\ge d_q(A/\sqrt2)^p$. Conversely $t^p\le1+t^2$ for $t\ge0$, and applying this to $t=|f|/A$ shows $\|f\|_p^p\le2A^p$ when $A>0$; the case $A=0$ is immediate. This proves both bounds for $0<p<1$. [step 1.1, step 2.1, algebra] ∎
