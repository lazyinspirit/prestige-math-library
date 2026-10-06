---
id: thm-stable-unoriented-thom-homotopy-is-injectively-detected
kind: theorem
title: "Stable unoriented Thom homotopy is injectively detected"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2
  - lem-stable-thom-detector-coordinates-commute-with-suspension
  - def-stable-homotopy-groups-of-a-sequential-prespectrum
  - lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail
dependency_level: 14
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lectures 10–12, printed pp. 86–105: Thom spectra, stable homotopy, and the rational Hurewicz application; the cofinal-tail injection is proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For each n≥0, the stable group π_n(MO)=colim_r π_{r+n}(T_r) maps injectively to V_n=F₂^{B_n} by the compatible detector coordinates D_{r,n}, using the cofinal tail r≥n+2.

## Facts & Assumptions

**Given:** AC; a stable degree $n\ge0$; the stable group $\pi_n(MO)=\operatorname{colim}_r\pi_{r+n}(T_r)$ over the cofinal tail $r\ge n+2$; the compatible detector coordinates $D_{r,n}$ of the suspension-compatibility lemma; and the target $V_n=\mathbb F_2^{B_n}$.

[F1] The finite-range theorem makes each $D_{r,n}$ an isomorphism for $r\ge n+2$, and the suspension-compatibility lemma gives $D_{r+1,n}\circ(\beta_r)_*=D_{r,n}$ with identity target bonding maps ([[thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2]], [[lem-stable-thom-detector-coordinates-commute-with-suspension]]).

[F2] The stable homotopy colimit is computed over any cofinal tail ([[def-stable-homotopy-groups-of-a-sequential-prespectrum]], [[lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail]]); AC fixes the global basis defining the coordinates ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 With the fixed target $V_n$, the target bonding maps are identities, and the finite-range theorem makes each $D_{r,n}$ an isomorphism on every rank $r\ge n+2$. The cofinal-tail lemma then yields injectivity of the colimit map. [given, F1]

2.1 Explicitly, represent a stable class at a rank r≥n+2. If its detector is zero, compatibility makes its detector zero at every later rank; injectivity of D_{s,n} then makes the advanced source representative zero, so the colimit class was zero. This proves the stable conclusion without assuming stabilization is an isomorphism in advance. In fact, because each D_{r,n} is an isomorphism and the square commutes, the bonding maps are isomorphisms on this tail, but this stronger consequence is not needed for injectivity. [step 1.1, F1, F2] ∎
