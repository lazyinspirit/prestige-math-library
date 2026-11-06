---
id: ex-cmp4-gkp-one-modulus-no-scale-cancellation
kind: example
title: One-modulus no-scale cancellation in the stipulated $N=1$ EFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-4d-moduli-effective-field-theory-examples
dependency_level: 13
deps:
  - def-cmp4-gkp-single-overall-kahler-modulus-coordinate
  - pthm-four-dimensional-n1-fd-scalar-potential
dependency_roles:
  def-cmp4-gkp-single-overall-kahler-modulus-coordinate: formulation-prerequisite
  pthm-four-dimensional-n1-fd-scalar-potential: physical-result
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional algebraic example in the one-modulus, two-derivative four-dimensional N=1 effective model with constant W and no gauging; no full string background or empirical claim."
empirical_premises: []
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.4, equations (2.42)–(2.44); no-scale cancellation in the one-modulus sector."
    - title: "David Baumann and Liam McAllister, Inflation and String Theory, Cambridge Monographs on Mathematical Physics"
      url: "https://arxiv.org/pdf/1404.2601v1"
      locator: "§§6.2–6.4; one-modulus Kähler potential and no-scale structure."
---

## Example

Take a single dimensionless chiral coordinate $\rho$ with $\operatorname{Im}\rho>0$, dimensionless Kähler potential $\mathcal K=-3\log[-i(\rho-\bar\rho)]$, and dimensionful convention $K=M_P^2\mathcal K$. Let $W=W_0$ be a constant holomorphic superpotential with $[W_0]=\mathrm{mass}^3$, and include no vector multiplet, gauging, or D-term. Adopt the standard old-minimal auxiliary sector and assume that it generates the entire zero-derivative scalar potential, with no auxiliary-independent contribution. In the stipulated two-derivative four-dimensional $N=1$ model, the F-term potential vanishes at every point of this patch. Consequently this potential does not fix $\rho$; the calculation establishes no full Type IIB solution, omitted-mode uplift, or vacuum stability.

## Statement references

[Giddings, Kachru, and Polchinski, §2.4](https://arxiv.org/pdf/hep-th/0105097v2)

[Baumann and McAllister, §§6.2–6.4](https://arxiv.org/pdf/1404.2601v1)

## Facts & Assumptions

**Given:** The one-modulus patch $\operatorname{Im}\rho>0$, the coordinate normalization of the GKP modulus interface, $M_P>0$, and the conditional four-dimensional $N=1$ F-term potential.

[F1] [[def-cmp4-gkp-single-overall-kahler-modulus-coordinate]] gives $\rho=b/\sqrt2+i e^{4u_E}$, so $-i(\rho-\bar\rho)=2e^{4u_E}>0$, and dimensionless $\mathcal K=-3\log[-i(\rho-\bar\rho)]$.

[F2] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]] conditionally gives the Einstein-frame F-term potential after eliminating the stated old-minimal auxiliary fields, provided that their sector generates the entire zero-derivative potential and no auxiliary-independent term is added; its current readiness is escalated because of an upstream readiness record, so this example is conditional on that supplier.

[A1] There is exactly one chiral field, no vector or D-term sector, $W=W_0$ is constant and holomorphic, and $K=M_P^2\mathcal K$ with dimensionless $\rho$. The zero-derivative potential is generated entirely by the old-minimal auxiliary sector of [F2], with no additional auxiliary-independent term.

## Verification

1.1 Set $X=-i(\rho-\bar\rho)=2\operatorname{Im}\rho>0$. Differentiating $\mathcal K=-3\log X$ gives $\mathcal K_\rho=-3/(\rho-\bar\rho)$ and $\mathcal K_{\rho\bar\rho}=-3/(\rho-\bar\rho)^2=3/X^2>0$. [given, F1, A1, algebra]

2.1 The inverse metric is $\mathcal K^{\rho\bar\rho}=X^2/3$, and the dimensionless-coordinate covariant derivative is $D_\rho W=\partial_\rho W+\mathcal K_\rho W=\mathcal K_\rho W_0$ because $\partial_\rho W_0=0$. Therefore $\mathcal K^{\rho\bar\rho}D_\rho W\overline{D_\rho W}=(X^2/3)(9/X^2)|W_0|^2=3|W_0|^2$. [given, A1, step 1.1, algebra]

3.1 Since $K_{\rho\bar\rho}=M_P^2\mathcal K_{\rho\bar\rho}$, its inverse is $M_P^{-2}\mathcal K^{\rho\bar\rho}$; inserting step 2.1 into [F2] with the D-term sum empty gives $V=e^{\mathcal K}M_P^{-2}(3|W_0|^2-3|W_0|^2)=0$ for every $\rho$ in the patch. This is an algebraic deduction inside the stipulated effective model. [given, F2, A1, step 2.1, algebra]

4.1 The potential is identically constant, so its first and second derivatives vanish everywhere and it supplies no restoring force or mass for $\rho$. The result is only a no-scale cancellation in the chosen EFT; no full higher-dimensional equations, omitted-field equations, or empirical observations were used. [given, F1, step 3.1, algebra] ∎
