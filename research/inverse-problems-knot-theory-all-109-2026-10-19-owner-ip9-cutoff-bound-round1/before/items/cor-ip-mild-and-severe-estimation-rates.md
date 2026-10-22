---
id: cor-ip-mild-and-severe-estimation-rates
kind: corollary
title: Polynomial and exponential minimax estimation rates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-statistical-ellipsoid-class
  - thm-ip-truncated-estimator-exact-risk
  - thm-ip-general-source-minimax-comparison
  - def-countable-choice
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - thm-geometric-series
  - thm-exponential-beats-every-polynomial
  - thm-exponential-is-strictly-increasing
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the Gaussian sequence model and the minimax comparison theorem; the cutoff balances are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §3 and Table 1, PDF pp. 5–6"
      url: https://arxiv.org/pdf/1707.01706v2
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft, §4.5, Proposition 4.16, and §4.6, Theorem 4.17 proof, printed pp. 109–113"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Statement

Assume Countable Choice, $Q>0$, and $p,\kappa>0$. As $\epsilon\downarrow0$, the minimax RMS error over $\Theta_a(Q)$ has the following order-sharp rates: if $s_j\asymp j^{-p}$ and $a_j\asymp j^\kappa$, then $R_*(\epsilon)\asymp\epsilon^{\kappa/(\kappa+p+1/2)}$; if $s_j\asymp e^{-pj}$ and $a_j\asymp j^\kappa$, then $R_*(\epsilon)\asymp[\log(1/\epsilon)]^{-\kappa}$; if $s_j\asymp j^{-p}$ and $a_j\asymp e^{\kappa j}$, then $R_*(\epsilon)\asymp\epsilon[\log(1/\epsilon)]^{p+1/2}$; and if $s_j\asymp e^{-pj}$ and $a_j\asymp e^{\kappa j}$, then $R_*(\epsilon)\asymp\epsilon^{\kappa/(p+\kappa)}$. Here $u_j\asymp v_j$ as $j\to\infty$ or $f(\epsilon)\asymp g(\epsilon)$ as $\epsilon\downarrow0$ means the ratio is bounded above and below by positive constants on the indicated tail; the constants may depend on $Q,p,\kappa$ and the axis comparison constants.

## Statement references

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §3 and Table 1](https://arxiv.org/pdf/1707.01706v2)

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, §§4.5–4.6](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

## Facts & Assumptions

[A1] [[def-countable-choice]]: Countable Choice is inherited through the compact SVD coordinate model.

[F1] [[def-ip-gaussian-sequence-inverse-model]] and [[def-ip-statistical-ellipsoid-class]]: The observation coordinates are $Z_j=\theta_j+\epsilon s_j^{-1}\xi_j$ and the parameter set is $\Theta_a(Q)=\{\theta\in\ell^2:\sum_j a_j^2\theta_j^2\le Q^2\}$ with positive nondecreasing weights.

[F2] [[thm-ip-truncated-estimator-exact-risk]]: At cutoff $D\in\mathbb N_0$, the exact worst-case expected squared risk is $B_D=Q^2/a_{D+1}^2+\epsilon^2\sum_{j=1}^D s_j^{-2}$.

[F3] [[thm-ip-general-source-minimax-comparison]]: The minimax RMS error satisfies $R_*(\epsilon)\le(\inf_D B_D)^{1/2}\le2.2R_*(\epsilon)$.

[F4] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is the inverse of $\exp$ on positive reals, is increasing, and obeys $\log(xy)=\log x+\log y$.

[F5] [[def-real-power]], [[thm-real-power-laws]], and [[thm-real-power-continuity-and-derivatives]]: Positive-base real powers obey the exponent laws and $x^\alpha$ is increasing for $\alpha>0$.

[F6] [[thm-geometric-series]] and [[thm-exponential-is-strictly-increasing]]: For $p>0$, the geometric sums of $e^{2pj}$ are bounded above and below by positive constants times their final term.

[F7] [[thm-exponential-beats-every-polynomial]]: $x/\exp(x)\to0$ as $x\to+\infty$.

**Given:** $Q>0$, $p,\kappa>0$, positive nonincreasing singular values $s_j\to0$, positive nondecreasing weights $a_j$, and a positive noise level $\epsilon$ tending to zero.

## Proof

1.1 For $q>0$ and integer $D\ge2$, $\sum_{j=1}^D j^q\le D^{q+1}$. For a lower bound, the at least $D/2$ indices with $D/2\le j\le D$ each satisfy $j^q\ge(D/2)^q$, so $\sum_{j=1}^D j^q\ge(D/2)^{q+1}$. Thus $\sum_{j\le D}j^q\asymp D^{q+1}$. Also the finite geometric-sum identity gives $\sum_{j\le D}e^{2pj}\asymp e^{2pD}$ for each fixed $p>0$. [F5, F6, algebra]

2.1 Suppose $s_j\asymp j^{-p}$ and $a_j\asymp j^\kappa$. With $H=\epsilon^{-2/(2\kappa+2p+1)}$ and $D_0=\lfloor H\rfloor$, step 1.1 and [F2] show that both terms of $B_{D_0}$ are $O(H^{-2\kappa})$. For any $D\le D_0$, monotonicity of $a_j$ gives $Q^2/a_{D+1}^2\ge Q^2/a_{D_0+1}^2\asymp H^{-2\kappa}$; for $D>D_0$, the variance is at least $\epsilon^2\sum_{j\le D_0}j^{2p}\asymp\epsilon^2H^{2p+1}=H^{-2\kappa}$. Therefore $\inf_D B_D\asymp H^{-2\kappa}$ and the cutoff RMS error is $\asymp\epsilon^{\kappa/(\kappa+p+1/2)}$. [given, F1, F2, F5, step 1.1, algebra]

2.2 Suppose $s_j\asymp e^{-pj}$ and $a_j\asymp j^\kappa$. Put $L=\log(1/\epsilon)$ and $D_0=\left\lfloor(L-\kappa\log L)/p\right\rfloor$. By [F7], $\log L/L\to0$, so $D_0\asymp L$. At $D_0$, the squared bias and variance in [F2] are both $O(L^{-2\kappa})$. For $D\le D_0$, the bias is at least $Q^2/a_{D_0+1}^2\asymp L^{-2\kappa}$; for $D>D_0$, the geometric variance is at least $\epsilon^2e^{2pD_0}\asymp e^{-2L}e^{2L}L^{-2\kappa}=L^{-2\kappa}$. Hence $\inf_D B_D\asymp L^{-2\kappa}$ and the cutoff RMS error is $\asymp L^{-\kappa}$. [given, F1, F2, F4, F5, F6, F7, step 1.1, algebra]

2.3 Suppose $s_j\asymp j^{-p}$ and $a_j\asymp e^{\kappa j}$. Put $L=\log(1/\epsilon)$ and $D_0=\left\lfloor(L-(p+\tfrac12)\log L)/\kappa\right\rfloor$. Again [F7] gives $D_0\asymp L$. At $D_0$, the squared bias and variance are both $O(\epsilon^2L^{2p+1})$. For $D\le D_0$, monotonicity of $a_j$ gives bias at least $Q^2/a_{D_0+1}^2\asymp e^{-2\kappa D_0}\asymp\epsilon^2L^{2p+1}$; for $D>D_0$, the polynomial variance is at least $\epsilon^2\sum_{j\le D_0}j^{2p}\asymp\epsilon^2L^{2p+1}$. Thus $\inf_D B_D\asymp\epsilon^2L^{2p+1}$ and the cutoff RMS error is $\asymp\epsilon L^{p+1/2}$. [given, F1, F2, F4, F5, F7, step 1.1, algebra]

2.4 Suppose $s_j\asymp e^{-pj}$ and $a_j\asymp e^{\kappa j}$. Let $L=\log(1/\epsilon)$ and $D_0=\lfloor L/(p+\kappa)\rfloor$. Then $D_0\to\infty$; at this cutoff the squared bias and geometric variance are both $O(\epsilon^{2\kappa/(p+\kappa)})$. For $D\le D_0$, monotonicity of $a_j$ gives bias at least $Q^2/a_{D_0+1}^2\asymp e^{-2\kappa D_0}\asymp\epsilon^{2\kappa/(p+\kappa)}$; for $D>D_0$, the variance is at least $\epsilon^2e^{2pD_0}\asymp\epsilon^{2\kappa/(p+\kappa)}$. Hence $\inf_D B_D\asymp\epsilon^{2\kappa/(p+\kappa)}$ and the cutoff RMS error is $\asymp\epsilon^{\kappa/(p+\kappa)}$. [given, F1, F2, F4, F5, F6, step 1.1, algebra]

3.1 Steps 2.1–2.4 establish the four rates for $(\inf_D B_D)^{1/2}$. By [A1], the compact singular-system coordinate model and its minimax comparison theorem are used under Countable Choice. By [F3], this quantity and the minimax RMS error differ by at most the fixed factor $2.2$, so the same four order-sharp rates hold for $R_*(\epsilon)$. [A1, F3, step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

The four cases are indexed separately by singular-value decay and ellipsoid-axis growth. Ding–Mathé call polynomial operator singular-value decay moderately ill-posed and exponential decay severely ill-posed; this operator terminology is distinct from the statistical minimax-rate description. The comparison is order-sharp up to constants, not Pinsker sharp-constant optimality.
