---
id: lem-emg-fx-symplectic-current-boundary
kind: lemma
title: "Closed Maxwell current and gauge boundary term"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-maxwell-presymplectic-current
  - lem-emg-lorentz-hodge-calculus
  - thm-monotone-convergence-for-the-integral
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-maxwell-presymplectic-current: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, JHEP 2020, 146, arXiv:1906.08616v4"
      url: "https://arxiv.org/pdf/1906.08616"
      locator: "Complete 61-page paper inspected. §3.3, Maxwell theory, equations (3.18)–(3.25), printed pp. 26–27 (PDF pp. 27–28): gauge variations produce an exact current contribution and a boundary electric-charge term."
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, Physical Review D 50 (1994), 846–864, arXiv:gr-qc/9403028v1"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
      locator: "Complete 31-page paper inspected. §3, equations (44)–(47), printed pp. 8–9 (PDF pp. 9–10): on-shell current closure and the integrated boundary ambiguity."
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, lecture notes, arXiv:1801.07064v4"
      url: "https://arxiv.org/pdf/1801.07064"
      locator: "Complete 125-page lecture notes inspected. Lecture 1, §§1.3.1–1.3.3, printed pp. 14–22 (PDF pp. 14–22), including current conventions and local surface identities; the opposite current ordering is translated rather than copied."
---

## Statement

Let $g$ be a fixed oriented Lorentzian metric of signature $(-,+,+,+)$ on a smooth four-manifold, and let $\alpha,\beta\in\Omega^1(M)$ be smooth normalized connection variations satisfying $d\star_g d\alpha=d\star_g d\beta=0$. For $\omega_g(\alpha,\beta)=\alpha\wedge\star_g d\beta-\beta\wedge\star_g d\alpha$, one has $d\omega_g(\alpha,\beta)=0$. For every smooth real function $\chi$ on $M$, replacing $\alpha$ by $\alpha+d\chi$ changes the current by $d(\chi\star_g d\beta)$. Hence, for every finite smooth singular three-chain $c$, the integrated change is $\int_{\partial c}\chi\star_g d\beta$; it vanishes when $c$ is a cycle.

For a noncompact oriented spacelike hypersurface $\iota_\Sigma:\Sigma\hookrightarrow M$, suppose both $\Omega_\Sigma(\alpha,\beta)$ and $\Omega_\Sigma(\alpha+d\chi,\beta)$ are defined by the absolute-integrability convention of the preceding presymplectic-current definition. Write $\iota_\Sigma^*(\omega_g(\alpha+d\chi,\beta)-\omega_g(\alpha,\beta))=u\,\mathrm{vol}_\gamma$. For every compact Borel exhaustion $K_n\subseteq K_{n+1}$ with $\bigcup_nK_n=\Sigma$, one has $\int_{K_n}u\,d\mu_\gamma\to\int_\Sigma u\,d\mu_\gamma$. If the exhaustion has finite smooth singular three-chains $c_n$ supported in $K_n$ satisfying $\int_{c_n}\tau=\int_{K_n}u_\tau\,d\mu_\gamma$ for every smooth three-form $\tau=u_\tau\,\mathrm{vol}_\gamma$ on $\Sigma$, using the induced metric and density fixed in that definition, then

$$\Omega_\Sigma(\alpha+d\chi,\beta)-\Omega_\Sigma(\alpha,\beta)=\lim_{n\to\infty}\int_{\partial c_n}\chi\star_g d\beta.$$

The limit exists and is independent of the compact exhaustion and its smooth-chain representatives. For a fixed $\beta$, the pairing shift vanishes exactly when this limiting boundary flux is zero. Given any linear subspace $\mathcal V$ of smooth real one-form solutions $\beta$ of $d\star_g d\beta=0$ for which both pairings are defined, call the exact gauge direction $d\chi$ degenerate on $\mathcal V$ when its pairing shift vanishes for every $\beta\in\mathcal V$. Thus degeneracy on $\mathcal V$ holds exactly when this limit vanishes for every $\beta\in\mathcal V$.

## Statement references

[[def-emg-fx-maxwell-presymplectic-current]]

[[lem-emg-lorentz-hodge-calculus]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ as inherited from the fixed smooth principal-connection sector, a fixed oriented Lorentzian four-metric, smooth normalized real one-form variations $\alpha,\beta$, their fixed-background equations $d\star_g d\alpha=d\star_g d\beta=0$, and a smooth real function $\chi$.

[F1] [[def-emg-fx-maxwell-presymplectic-current]]: the normalized Maxwell current is $\omega_g(\alpha,\beta)=\alpha\wedge\star_g d\beta-\beta\wedge\star_g d\alpha$ on global connection variations satisfying the fixed-background equations.

[F2] [[lem-emg-lorentz-hodge-calculus]]: the Hodge identity is $\mu\wedge\star_g\nu=\langle\mu,\nu\rangle_g\,\mathrm{vol}_g$, the two-form pairing is symmetric, the exterior derivative obeys the graded product rule, and $d^2=0$.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth singular three-chain $c$ and smooth two-form $\eta$, $\int_c d\eta=\int_{\partial c}\eta$.

[F4] [[thm-monotone-convergence-for-the-integral]]: if nonnegative measurable functions increase pointwise to a limit on a measure space, their integrals increase to the integral of that limit.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the background assumption for the inherited smooth tangent and principal-connection convention; the exterior-calculus identities and finite-chain Stokes calculation use no further choice.

## Proof

1.1 Applying the graded product rule to each term of [F1] gives $d\omega_g=d\alpha\wedge\star_g d\beta-\alpha\wedge d\star_g d\beta-d\beta\wedge\star_g d\alpha+\beta\wedge d\star_g d\alpha$. The first and third terms cancel because the two-form pairing in [F2] is symmetric, and the other two vanish by the stated equations. Hence $d\omega_g=0$. [given, A1, F1, F2, algebra]

1.2 Since $d^2\chi=0$ by [F2], the change in [F1] under $\alpha\mapsto\alpha+d\chi$ is exactly $d\chi\wedge\star_g d\beta$. On the other hand, $d(\chi\star_g d\beta)=d\chi\wedge\star_g d\beta+\chi\,d\star_g d\beta=d\chi\wedge\star_g d\beta$. The current change is therefore the exact three-form $d(\chi\star_g d\beta)$. [given, A1, F1, F2, algebra]

2.1 Integrating the exact change over a finite smooth singular three-chain $c$ and applying [F3] gives $\int_c d(\chi\star_g d\beta)=\int_{\partial c}\chi\star_g d\beta$. This is zero when $c$ is a cycle, while for a chain with boundary it is the displayed boundary flux. [given, F3, step 1.2]

3.1 Now let $\Sigma$ be noncompact, assume both current pairings in the Statement are defined, and choose a compact Borel exhaustion with finite-chain representatives as in the Statement. Write $\iota_\Sigma^*(\omega_g(\alpha+d\chi,\beta)-\omega_g(\alpha,\beta))=u\,\mathrm{vol}_\gamma$. The two current coefficients are in $L^1(\mu_\gamma)$, so their difference $u$ is also in $L^1(\mu_\gamma)$ by $|u|\leq |u_{\alpha+d\chi,\beta}|+|u_{\alpha,\beta}|$. Since $K_n\uparrow\Sigma$, both $\mathbf1_{K_n}u^+$ and $\mathbf1_{K_n}u^-$ increase pointwise to $u^+$ and $u^-$. Applying [F4] separately to these nonnegative functions and subtracting their finite limits gives $\int_{K_n}u\,d\mu_\gamma\to\int_\Sigma u\,d\mu_\gamma$. By the defining property of $c_n$ and [F3], $\int_{\partial c_n}\chi\star_g d\beta=\int_{c_n}d(\chi\star_g d\beta)=\int_{K_n}u\,d\mu_\gamma$. This proves the stated flux identity. For the fixed $\beta$, the shift vanishes exactly when the limiting flux is zero; on a specified test space this must hold for every allowed $\beta$ for the gauge direction to be degenerate. No falloff condition is inferred from the field equations alone. [given, F1, F3, F4, step 1.2, algebra] ∎

## Remarks

The calculation treats an exact gauge variation with a globally defined real parameter $\chi$. A circle-valued large gauge transformation need not admit such a global phase; this identity alone therefore does not declare every flat connection difference to be presymplectically degenerate.
