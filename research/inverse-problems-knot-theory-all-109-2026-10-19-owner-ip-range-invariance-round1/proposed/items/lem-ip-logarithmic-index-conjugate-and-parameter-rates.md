---
id: lem-ip-logarithmic-index-conjugate-and-parameter-rates
kind: lemma
title: Logarithmic source indices and their admissible parameter scales
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-ip-index-function-young-conjugate-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography
      url: https://arxiv.org/pdf/2403.18704
      locator: Theorem 3 and Remark 1; the pure-power endpoint is excluded from the conclusion below
---

## Statement

Fix $C,\nu>0$ and $0<t_0<e^{-(\nu+1)}$. Define $\psi(0)=0$, $\psi(t)=C[\log(1/t)]^{-\nu}$ for $0<t\le t_0$, and $\psi(t)=\psi(t_0)$ for $t>t_0$. Then $\psi$ is continuous, nondecreasing and concave, and
$$H(q):=\sup_{t\ge0}(\psi(t)-qt)\sim C(\log q)^{-\nu}\qquad(q\to\infty).$$
For each fixed $c>0$, one consequently has $H(cq)/H(q)\to1$. For $p>0$, fixed $D,a,C_*>0$ and nonnegative errors satisfying
$$S_\delta+a\alpha e_\delta\le D\delta^p+\alpha\psi(C_*S_\delta),$$
the balanced choice $\alpha\asymp\delta^p[\log(1/\delta)]^\nu$ gives
$$e_\delta=O([\log(1/\delta)]^{-\nu}),\qquad S_\delta=O(\delta^p).$$
For a pure-power choice $\alpha\asymp\delta^k$ with $0<k<p$, the same error rate follows, with residual bound $S_\delta=O(\delta^k[\log(1/\delta)]^{-\nu})$. No assertion for $k=p$ is made. If $e_\delta=\frac12\|u_\delta-u^\dagger\|^2$, the corresponding norm rate has exponent $\nu/2$.

## Statement references

[[lem-ip-index-function-young-conjugate-bound]]

[Kaltenbacher, Theorem 3 and Remark 1](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The constants, index, scalar inequality and parameter choices in the Statement.

[F1] [[lem-ip-index-function-young-conjugate-bound]]: the scalar inequality implies $e_\delta\le a^{-1}(D\delta^p/\alpha+H(1/(C_*\alpha)))$ and $S_\delta\le2(D\delta^p+\alpha H(1/(2C_*\alpha)))$.

## Proof

1.1 On $(0,t_0)$ write $L=\log(1/t)$. Direct differentiation gives $\psi'(t)=C\nu t^{-1}L^{-\nu-1}>0$ and $\psi''(t)=C\nu t^{-2}L^{-\nu-2}(\nu+1-L)<0$. At $t_0$ the derivative drops from a positive value to zero; above it the function is constant. Thus the derivative is nonincreasing on each smooth piece and has a downward jump, giving concavity on $(0,\infty)$; taking limits at zero extends the chord inequalities there. Continuity and monotonicity are immediate from the formula. In particular $H$ is finite because $0\le\psi\le\psi(t_0)$, and $H\ge0$ by testing $t=0$. [given, algebra]

2.1 Put $Q=\log q$ and take $q$ sufficiently large. For $0<t\le q^{-1}Q^{\nu+1}$, one has $\log(1/t)\ge Q-(\nu+1)\log Q$, so $\psi(t)-qt\le C[Q-(\nu+1)\log Q]^{-\nu}$. For $t>q^{-1}Q^{\nu+1}$, one has $qt>Q^{\nu+1}>\psi(t_0)$, so the expression is negative. This bounds $H(q)$ above by $CQ^{-\nu}(1+o(1))$. Testing $t=q^{-1}Q^{-\nu-1}$ gives $\psi(t)-qt=C[Q+(\nu+1)\log Q]^{-\nu}-Q^{-\nu-1}=CQ^{-\nu}(1+o(1))$, proving the matching lower bound. Replacing $q$ by $cq$ changes $Q$ by the fixed constant $\log c$, hence $H(cq)/H(q)\to1$. [step 1.1, given, algebra]

3.1 For the balanced scale, $\log(1/\alpha)\sim p\log(1/\delta)$, so step 2.1 gives both conjugate values in [F1] of order $[\log(1/\delta)]^{-\nu}$. Moreover $\delta^p/\alpha$ has this same order, and $\alpha H(1/(2C_*\alpha))=O(\delta^p)$. Substitution in [F1] proves the balanced error and residual bounds. [F1, step 2.1, given, algebra]

4.1 If $\alpha\asymp\delta^k$ with $0<k<p$, step 2.1 again gives the two conjugate values of order $[\log(1/\delta)]^{-\nu}$. Since $\delta^{p-k}[\log(1/\delta)]^\nu\to0$ (put $x=\log(1/\delta)$ and compare the exponential $e^{(p-k)x}$ with its power-series term of integer degree greater than $\nu$), $\delta^p/\alpha$ is bounded by the desired logarithmic order. Also $\delta^p=O(\delta^k[\log(1/\delta)]^{-\nu})$. Apply [F1] for the two asserted bounds. Finally, $e_\delta=\frac12\|u_\delta-u^\dagger\|^2$ gives the norm conclusion by taking square roots. [F1, step 2.1, given, algebra] ∎
