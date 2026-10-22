---
id: ex-ip-operator-shift-stable-scalar-risk
kind: example
title: A scalar inverse with a conditioning-dependent shift modulus
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
axiom_use: No choice axiom is used; the scalar laws and couplings are explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Fix $R,a_0,\sigma>0$ and $0\le\rho_A<a_0/2$. The working inverse is $g(y)=y/a_0$. Under a test operator $a=a_0+\delta$ with $|\delta|\le\rho_A$, the observation is $Y=a\theta+\varepsilon$ for $\theta\in[-R,R]$ and independent $\varepsilon\sim N(0,\sigma^2)$. For any two truth laws $\mu_0,\mu$ on $[-R,R]$, define $W_1(\mu,\mu_0)$ as the infimum of $E|\Theta-\Theta_0|$ over their couplings. The risk is
$$R_{\mu,\delta}(g)=E_{\theta\sim\mu,\varepsilon}|g((a_0+\delta)\theta+\varepsilon)-\theta|^2=\frac{\delta^2}{a_0^2}E_\mu\theta^2+\frac{\sigma^2}{a_0^2},$$
and it satisfies $R_{\mu,\delta}(g)\le(\rho_A^2R^2+\sigma^2)/a_0^2$ and
$$|R_{\mu,\delta}(g)-R_{\mu_0,\delta}(g)|\le\frac{2\delta^2R}{a_0^2}W_1(\mu,\mu_0).$$

## Example references

[[ex-ip-robust-ellipsoid-minimax-shift-rate|The bounded operator and test-law shift frontier illustrated by a conditioned scalar inverse.]]

## Facts & Assumptions

**Given:** $R,a_0,\sigma>0$, $0\le\rho_A<a_0/2$, $|\delta|\le\rho_A$, $\theta\in[-R,R]$, $\varepsilon\sim N(0,\sigma^2)$ independent of $\theta$, and the working inverse $g(y)=y/a_0$.

[A1] The test law $\mu$ and source law $\mu_0$ are Borel probability measures on $[-R,R]$; $W_1$ is the infimum of expected absolute distance over their couplings.

## Verification

1.1 Substitution gives $g(Y)-\theta=((a_0+\delta)\theta+\varepsilon)/a_0-\theta=\delta\theta/a_0+\varepsilon/a_0$. Independence and $E\varepsilon=0$ make the cross term vanish, so the expected squared error is $\delta^2E_\mu\theta^2/a_0^2+\sigma^2/a_0^2$. Since $|\theta|\le R$ and $|\delta|\le\rho_A$, this is at most $(\rho_A^2R^2+\sigma^2)/a_0^2$. [given, A1, algebra]

2.1 For any coupling $(\Theta,\Theta_0)$ of $\mu,\mu_0$, $|\Theta^2-\Theta_0^2|=|\Theta-\Theta_0||\Theta+\Theta_0|\le2R|\Theta-\Theta_0|$. Taking expectations, then the infimum over couplings, gives $|E_\mu\theta^2-E_{\mu_0}\theta^2|\le2R W_1(\mu,\mu_0)$. Multiplication by $\delta^2/a_0^2$ and step 1.1 yields the claimed risk-transfer bound. [A1, step 1.1, algebra] ∎
