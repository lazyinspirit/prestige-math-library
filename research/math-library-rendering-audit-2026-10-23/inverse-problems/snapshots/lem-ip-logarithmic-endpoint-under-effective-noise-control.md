---
id: lem-ip-logarithmic-endpoint-under-effective-noise-control
kind: lemma
title: A logarithmic endpoint rate with explicit effective noise and tolerance control
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-ip-index-function-young-conjugate-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography
      url: https://arxiv.org/pdf/2403.18704
      locator: Theorem 3 and Remark 1; the additional endpoint noise condition is derived from the scalar estimate here
dependency_level: 1
---

## Statement

Fix $p,\nu,a,C_*,C>0$ and let $\psi$ be a continuous nondecreasing concave source index with $\psi(0)=0$. Suppose its conjugate $H(q)=\sup_{t\ge0}(\psi(t)-qt)$ satisfies $H(q)\le C(\log q)^{-\nu}$ for all sufficiently large $q$. Let $\delta\downarrow0$ be a nominal parameter, and put $L_\delta=\log(1/\delta)$. Suppose nonnegative errors satisfy
$$S_\delta+a\alpha_\delta e_\delta\le d_\delta+\alpha_\delta\psi(C_*S_\delta),\qquad \alpha_\delta\asymp\delta^p,\qquad d_\delta=O(\delta^pL_\delta^{-\nu}).$$
Then
$$e_\delta=O(L_\delta^{-\nu}),\qquad S_\delta=O(\delta^pL_\delta^{-\nu}).$$
For the joint objective estimate with $p\ge1$ and actual data noise $\varepsilon_\delta=\|y^\delta-y\|$, the hypothesis on $d_\delta$ is supplied by $2\varepsilon_\delta^p+\eta_\delta=O(\delta^pL_\delta^{-\nu})$. This condition explicitly strengthens the usual nominal bound $\varepsilon_\delta\le\delta$, $\eta_\delta=O(\delta^p)$ at the endpoint. If $e_\delta=\frac12\|u_\delta-u^\dagger\|^2$, the norm rate is $O(L_\delta^{-\nu/2})$.

The universal assertion that $\alpha\asymp\delta^2$ yields a vanishing norm error for every deterministic noise family bounded by $\delta$ is false, even for an exact quadratic Tikhonov minimizer and a truth satisfying every nonnegative variational source inequality: on real $\ell^2$, take $Ke_j=j^{-1}e_j$, $x^\dagger=0$, $y^{\delta_j}=\delta_j e_j$, $\delta_j=1/j$, $\alpha_j=\delta_j^2$, and objective $\|Kx-y^{\delta_j}\|^2+\frac{\alpha_j}{2}\|x\|^2$. Its unique minimizer is $2e_j/3$. This counterexample refutes the universal abstract endpoint assertion; it makes no assertion that these data arise from an EIT conductivity map.

## Statement references

[[lem-ip-index-function-young-conjugate-bound]]

[Kaltenbacher, Theorem 3 and Remark 1](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The scalar comparison, conjugate bound, nominal endpoint parameter, and effective noise hypothesis in the Statement.

[F1] [[lem-ip-index-function-young-conjugate-bound]] gives $e_\delta\le a^{-1}(d_\delta/\alpha_\delta+H(1/(C_*\alpha_\delta)))$ and $S_\delta\le2(d_\delta+\alpha_\delta H(1/(2C_*\alpha_\delta)))$.

## Proof

1.1 Put $d_\delta^+:=\max\{d_\delta,0\}$. The scalar inequality remains true with $d_\delta^+$ on its right, and $d_\delta^+=O(\delta^pL_\delta^{-\nu})$. Since $\alpha_\delta\asymp\delta^p$, one has $\log(1/(c\alpha_\delta))\sim pL_\delta$ for either fixed $c=C_*$ or $c=2C_*$. Thus both conjugate terms in [F1] are $O(L_\delta^{-\nu})$, while $d_\delta^+/\alpha_\delta=O(L_\delta^{-\nu})$. Substitution into [F1] proves both error estimates. If the joint approximate-minimum comparison is made with actual noise $\varepsilon_\delta$ and $p\ge1$, its comparison term is $d_\delta=2\varepsilon_\delta^p+\eta_\delta$; this follows by replacing the noise upper bound by its actual value in the triangle-power comparison. The explicitly stated effective noise hypothesis therefore suffices. The quadratic norm rate follows by taking square roots. [F1, given, algebra]

2.1 For the asserted counterexample, complete squares coordinatewise in $\|Kx-y^{\delta_j}\|^2+(\alpha_j/2)\|x\|^2$. Every coordinate $i\ne j$ has unique minimizer zero. The $j$th coordinate has unique minimizer $\frac{j^{-1}\delta_j}{j^{-2}+\alpha_j/2}=2/3$. All quadratic coefficients are positive and the penalty is strictly positive definite, so this point is the unique global minimizer on $\ell^2$. Its norm error is $2/3$ for every $j$. At truth zero the regularizer subgradient is zero, so the variational source left side is zero and any nonnegative source index satisfies the inequality. Also $\|y^{\delta_j}-Kx^\dagger\|=\delta_j$, so the ordinary deterministic noise bound holds exactly. This proves the false universal endpoint assertion fails and explains the need for an explicit additional noise condition in step 1.1. [step 1.1, given, algebra] ∎
