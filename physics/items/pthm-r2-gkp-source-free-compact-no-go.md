---
id: pthm-r2-gkp-source-free-compact-no-go
kind: physics-theorem
title: Source-free GKP compactifications have vanishing three-form flux and componentwise constant warp factor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
  - def-r2-iib-flux-background-conventions
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - post-type-iib-fiveform-self-duality-constraint
  - lem-r2-smooth-form-current-is-compatible-with-differential
  - lem-r2-exact-top-current-has-zero-total-charge
dependency_roles:
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  lem-r2-smooth-form-current-is-compatible-with-differential: mathematical-premise
  lem-r2-exact-top-current-has-zero-total-charge: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional classical source-free two-derivative Type IIB Einstein-frame GKP equation with four-dimensional Poincare invariance and regular compact internal X. It excludes localized sources, boundary terms, higher-derivative/string corrections, and any conclusion about sourced GKP backgrounds, de Sitter space, or constancy of the axio-dilaton."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1, equations (2.12)–(2.15), PDF pp. 5–7; source-free Einstein-frame warp equation."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§4.1, equations (4.1)–(4.9), PDF pp. 23–25; independent integrated no-go argument and its 4D scope."
    - title: "Sergio Cecotti, A Geometric Introduction to F-Theory, SISSA lecture notes"
      url: "https://people.sissa.it/~cecotti/FNOTES10.pdf"
      locator: "Chapter 14, equations (14.4)–(14.6), PDF pp. 117–118; independent source-free GKP warp equation."
---

## Statement

Use natural units $\hbar=c=1$, length-valued coordinates, and dimensionless metric components. Let $X$ be a nonempty compact oriented smooth six-manifold without boundary, and let $\widetilde g$ be a smooth Riemannian metric on $X$. Use $\eta_{\mu\nu}=\operatorname{diag}(-,+,+,+)$ on four-dimensional Minkowski space and the source-free Einstein-frame GKP metric
$$ds_E^2=e^{2A(y)}\eta_{\mu\nu}dx^\mu dx^\nu+e^{-2A(y)}\widetilde g_{mn}(y)dy^m dy^n.$$
Let $A,\alpha_4,C_0,\phi$ be smooth real dimensionless functions on $X$, with $\tau=C_0+i e^{-\phi}$ and $\operatorname{Im}\tau=e^{-\phi}>0$. Let $F_3,H_3\in\Omega^3(X;\mathbb R)$ be smooth real three-form field strengths, with coordinate components in the GKP normalization of units length$^{-1}$, and set $G_3=F_3-\tau H_3$. Define $\widetilde\nabla^2 u=\operatorname{div}_{\widetilde g}(\widetilde\nabla u)$, so $\widetilde\nabla^2u\,d\operatorname{vol}_{\widetilde g}=d(\iota_{\widetilde\nabla u}d\operatorname{vol}_{\widetilde g})$. In the source-free two-derivative Type IIB Einstein-frame field system, the external Einstein equation in this ansatz is
$$\widetilde\nabla^2 e^{4A} =\frac{e^{8A}}{12\operatorname{Im}\tau}G_{mnp}\overline{G}^{\,mnp} +e^{-4A}\left(\widetilde g^{mn}\partial_m\alpha_4\partial_n\alpha_4 +\widetilde g^{mn}\partial_m e^{4A}\partial_n e^{4A}\right),$$
where indices on the flux are raised by $\widetilde g$. These are unwarped contractions throughout, obtained from the full-metric contractions in GKP equation (2.15) by $g_E^{mn}=e^{2A}\widetilde g^{mn}$. The equation is conditional model input: it is the source-free specialization of the cited GKP field equations, not a claim about the empirical validity of the truncation.

Under these hypotheses, integrating the displayed equation forces $G_3=0$, $d\alpha_4=0$, and $dA=0$ everywhere on $X$. $A$ and $\alpha_4$ are constant on each connected component; their constants may differ between components. Since $F_3,H_3$ are real and $\operatorname{Im}\tau>0$, it follows that $F_3=H_3=0$. The equation places no restriction on whether $\tau$ is constant.

## Statement references

[Giddings, Kachru, and Polchinski, §2.1](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §4.1](https://arxiv.org/pdf/hep-th/0509003v3)

[Cecotti, Chapter 14](https://people.sissa.it/~cecotti/FNOTES10.pdf)

## Facts & Assumptions

**Given:** The smooth compact oriented manifold $X$, the GKP ansatz and conventions in the Statement, $\operatorname{Im}\tau>0$, the source-free field equation displayed there, and the exact smooth-form integration convention.

[A1] [[def-r2-iib-flux-background-conventions]]: the current definition fixes $G_3=F_3-\tau H_3$, the Einstein/string frame map, orientation, internal metric, warped ansatz, and self-dual five-form profile. Its broader scope is an O3/O7 Calabi–Yau orientifold; this theorem uses the explicitly restated GKP convention subset in the source-free specialization and makes no orientifold-specific conclusion. Its current Step 1 record remains escalated on upstream inputs.

[A2] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: the current physical input is the massless source-free leading two-derivative Type IIB pseudoaction; its exact statement is in string frame and excludes localized sources and higher-order terms.

[A3] [[post-type-iib-fiveform-self-duality-constraint]]: the five-form constraint is imposed separately after variation. This is required by the GKP ansatz and is not supplied by varying the undoubled pseudoaction alone.

[F1] [[lem-r2-smooth-form-current-is-compatible-with-differential]]: if $\eta$ is a smooth $(5)$-form on $X$, its smooth-form current satisfies $dT_\eta=T_{d\eta}$.

[F2] [[lem-r2-exact-top-current-has-zero-total-charge]]: if $T$ is a degree-$5$ current on compact boundaryless $X$, then $\langle dT,1\rangle=0$.

## Proof

1.1 Put $u=e^{4A}$ and $\eta=\iota_{\widetilde\nabla u}d\operatorname{vol}_{\widetilde g}\in\Omega^5(X)$. The coordinate definition of the divergence gives $d\eta=(\widetilde\nabla^2u)d\operatorname{vol}_{\widetilde g}$. By [F1], this top form defines the exact current $dT_\eta$; [F2] therefore gives $\int_X\widetilde\nabla^2u\,d\operatorname{vol}_{\widetilde g}=\langle dT_\eta,1\rangle=0$. [F1, F2, given, algebra]

2.1 In the source equation the full-metric flux contraction is $e^{6A}G_{mnp}\overline G^{\,mnp}_{\widetilde g}$, and a full-metric scalar-gradient contraction is $e^{2A}|df|_{\widetilde g}^2$. Thus its coefficients $e^{2A}$ and $e^{-6A}$ become respectively $e^{8A}$ and $e^{-4A}$ in the Statement's unwarped notation. Integrate that field equation and use step 1.1. The right-hand side is a sum of continuous nonnegative functions: $\operatorname{Im}\tau>0$, $\widetilde g$ is positive definite, and $G_{mnp}\overline G^{\,mnp}\ge0$. Hence its integral is zero. If any summand were positive at a point, continuity would make it positive on an open neighborhood of positive Riemannian volume, contradicting the zero integral. Each summand therefore vanishes everywhere. [A1, A2, A3, step 1.1, given, algebra]

3.1 Step 2.1 gives $G_3=0$, $d\alpha_4=0$, and $d(e^{4A})=0$. Since $4e^{4A}>0$, the identity $d(e^{4A})=4e^{4A}dA$ gives $dA=0$ on every component of $X$. A smooth function with zero differential is locally constant in a coordinate ball by the one-variable fundamental theorem along line segments; connectedness then makes it constant on each connected component. Apply this to both $A$ and $\alpha_4$, without identifying constants on distinct components. [step 2.1, algebra]

4.1 Write $\tau=C_0+i\tau_2$ with $\tau_2=\operatorname{Im}\tau>0$. The real and imaginary parts of $F_3-\tau H_3=0$ are $F_3-C_0H_3=0$ and $-\tau_2H_3=0$. The second gives $H_3=0$, and substitution into the first gives $F_3=0$. No equation above differentiates $\tau$, so this argument does not imply that it is constant. [A1, step 3.1, algebra] ∎
