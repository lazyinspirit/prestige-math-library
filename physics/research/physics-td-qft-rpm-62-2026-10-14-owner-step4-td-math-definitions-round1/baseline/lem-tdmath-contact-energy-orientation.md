---
id: lem-tdmath-contact-energy-orientation
kind: lemma
title: Thermal joins force a common mathematical energy orientation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, lem-tdmath-forward-spectator-cancellation, thm-tdmath-forward-boundary-graph]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
  thm-tdmath-forward-boundary-graph: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, single-system energy orientation and thermal-contact axioms, §§III–IV; the common-sign deduction is supplied locally"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

Let a family of simple domains satisfy [[def-tdmath-forward-sector-hypotheses]], and suppose every pair has an admitted simple thermal join satisfying T1 and T2 of [[def-tdmath-thermal-contact-hypotheses]]. Then the fixed-work orientation signs from [[thm-tdmath-forward-boundary-graph]] agree throughout the family. One common affine proof-coordinate convention $u'=\varepsilon u$, $\varepsilon\in\{-1,1\}$, therefore makes each fixed-work accessibility order increase with $u'$ and preserves the energy-sum formula for joins. This is a mathematical coordinate convention; it does not change a physical energy quantity or assert a sign of a measured temperature.

## Facts & Assumptions

[A1] [[def-tdmath-forward-sector-hypotheses]]: the component charts are open, represented states have their positive type weights, and the relation is composition-consistent and transitive.

[A2] [[def-tdmath-thermal-contact-hypotheses]]: T1 sends every admissible split to its join; T2 supplies, for each join state, at least one admissible split accessible in both directions to that join state, at the same summed energy and work coordinates.

[F1] [[thm-tdmath-forward-boundary-graph]]: each component domain has a constant sign $\varepsilon_\Gamma$ with fixed-work comparison equivalent to $\varepsilon_\Gamma(u_y-u_x)\ge0$.

[F2] [[lem-tdmath-forward-spectator-cancellation]]: any finite common spectator cancels when the two bases have equal mass; its mass need not equal the base mass.

## Proof

**Given:** [A1], [A2], [F1], and [F2].

1.1 Suppose two component signs are opposed. Choose a join state $Z$ and a reversible split $(x,y)$ by T2 in [A2]. Write $x=(u_x,v_x)$ and $y=(u_y,v_y)$. Openness in [A1] permits a sufficiently small nonzero $\delta$ with $x'=(u_x+\delta,v_x)$ and $y'=(u_y-\delta,v_y)$ in their respective charts. Choose the sign of $\delta$ so $\varepsilon_{\Gamma_x}\delta>0$; opposed signs imply $\varepsilon_{\Gamma_y}(-\delta)>0$. Thus [F1] gives $x\prec\prec x'$ and $y\prec\prec y'$. These pairs have the same summed energy and work coordinates and the same represented aggregate composition and mass. [A1, A2, F1, construct]

2.1 If $(x',y')\prec(x,y)$, consistency with $y\prec y'$ gives $(x',y)\prec(x',y')\prec(x,y)$. Cancel the common represented spectator $y$ by [F2] to get $x'\prec x$, contrary to step 1.1. But T1 gives $(x',y')\prec Z$, and the chosen T2 split gives $Z\prec(x,y)$, so transitivity produces exactly this forbidden reverse comparison. Opposed signs are impossible. Every pair has an admitted join, hence one common sign $\varepsilon$ works for the whole family. The affine change $u'=\varepsilon u$ preserves openness and convexity and sends $u=u_x+u_y$ to $u'=\varepsilon u_x+\varepsilon u_y$; its positive orientation describes the same accessibility relation. No physical energy, unit or calibration premise is redefined. [A1, A2, F1, F2, step 1.1] ∎
