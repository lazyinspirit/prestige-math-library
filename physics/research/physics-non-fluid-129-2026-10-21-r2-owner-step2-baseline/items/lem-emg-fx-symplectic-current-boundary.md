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
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-maxwell-presymplectic-current: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
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

Let $g$ be a fixed oriented Lorentzian metric on a smooth four-manifold, and let $\alpha,\beta\in\Omega^1(M)$ be smooth normalized connection variations satisfying $d\star_g d\alpha=d\star_g d\beta=0$. For $\omega_g(\alpha,\beta)=\alpha\wedge\star_g d\beta-\beta\wedge\star_g d\alpha$, one has $d\omega_g(\alpha,\beta)=0$. For every smooth real function $\chi$ on $M$, replacing $\alpha$ by $\alpha+d\chi$ changes the current by $d(\chi\star_g d\beta)$. Thus the integrated gauge direction is degenerate on a finite closed smooth singular three-cycle; on a chain with boundary the change is exactly the boundary flux, and on a noncompact hypersurface degeneracy requires the corresponding limiting boundary flux to vanish.

## Statement references

[[def-emg-fx-maxwell-presymplectic-current]]

[[lem-emg-lorentz-hodge-calculus]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ as inherited from the fixed smooth principal-connection sector, a fixed oriented Lorentzian four-metric, smooth normalized real one-form variations $\alpha,\beta$, their fixed-background equations $d\star_g d\alpha=d\star_g d\beta=0$, and a smooth real function $\chi$.

[F1] [[def-emg-fx-maxwell-presymplectic-current]]: the normalized Maxwell current is $\omega_g(\alpha,\beta)=\alpha\wedge\star_g d\beta-\beta\wedge\star_g d\alpha$ on global connection variations satisfying the fixed-background equations.

[F2] [[lem-emg-lorentz-hodge-calculus]]: the Hodge identity is $\mu\wedge\star_g\nu=\langle\mu,\nu\rangle_g\,\mathrm{vol}_g$, the two-form pairing is symmetric, the exterior derivative obeys the graded product rule, and $d^2=0$.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth singular three-chain $c$ and smooth two-form $\eta$, $\int_c d\eta=\int_{\partial c}\eta$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the background assumption for the inherited smooth tangent and principal-connection convention; the exterior-calculus identities and finite-chain Stokes calculation use no further choice.

## Proof

1.1 Applying the graded product rule to each term of [F1] gives $d\omega_g=d\alpha\wedge\star_g d\beta-\alpha\wedge d\star_g d\beta-d\beta\wedge\star_g d\alpha+\beta\wedge d\star_g d\alpha$. The first and third terms cancel because the two-form pairing in [F2] is symmetric, and the other two vanish by the stated equations. Hence $d\omega_g=0$. [given, A1, F1, F2, algebra]

1.2 Since $d^2\chi=0$ by [F2], the change in [F1] under $\alpha\mapsto\alpha+d\chi$ is exactly $d\chi\wedge\star_g d\beta$. On the other hand, $d(\chi\star_g d\beta)=d\chi\wedge\star_g d\beta+\chi\,d\star_g d\beta=d\chi\wedge\star_g d\beta$. The current change is therefore the exact three-form $d(\chi\star_g d\beta)$. [given, A1, F1, F2, algebra]

2.1 Integrating the exact change over a finite smooth singular three-chain $c$ and applying [F3] gives $\int_c d(\chi\star_g d\beta)=\int_{\partial c}\chi\star_g d\beta$. This is zero when $c$ is a cycle, while for a chain with boundary it is the displayed boundary flux. For a noncompact hypersurface, the same conclusion requires exhaustion by finite chains and an explicit hypothesis that the limiting boundary flux vanishes; no falloff condition is inferred from the field equations alone. [given, F3, step 1.2] ∎

## Remarks

The calculation treats an exact gauge variation with a globally defined real parameter $\chi$. A circle-valued large gauge transformation need not admit such a global phase; this identity alone therefore does not declare every flat connection difference to be presymplectically degenerate.
