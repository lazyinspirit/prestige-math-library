---
id: thm-finite-generation-cohomological-uct-gives-integral-cone-comparison
kind: theorem
title: "Finite-generation cohomological UCT gives integral cone comparison"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-finite-products-and-comparison-cones-have-finite-type
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact
  - thm-the-cone-long-exact-sequence
  - thm-long-exact-sequence-in-homology
  - def-mapping-cone-of-a-chain-map
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Charles Weibel, An Introduction to Homological Algebra, Chapter 3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
      locator: "§3.6, cohomological universal coefficient theorem; the finite-generation detection and endpoint argument are proved locally"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§13, comparison route; endpoint corrected to strict range"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let D≥0 and let C be a nonnegative free integral chain complex whose H_i(C) are finitely generated for 0≤i≤D. If H^i(Hom_Z(C,Q))=0 and H^i(Hom_Z(C,F_p))=0 for every prime p in those degrees, then H_i(C)=0 for 0≤i≤D. Consequently, for a continuous map f:X→Y with degreewise finitely generated integral homology, field cohomology isomorphisms f*:H^i(Y;F)→H^i(X;F) for F=Q and every F_p and 0≤i≤D imply integral homology isomorphisms f_* for i<D and surjectivity for i=D. No degree-D injectivity or degree-D+1 field hypothesis is asserted.

## Facts & Assumptions

**Given:** AC; a nonnegative free integral chain complex $C$ with finitely generated homology; a degree bound $D\ge0$; and the cohomological universal coefficient theorem over $\mathbb Z$.

[F1] The cohomological universal coefficient theorem surjects $H^i(\operatorname{Hom}(C,\mathbb Z))$ onto $\operatorname{Hom}(H_i(C),\mathbb Z)$ with kernel $\operatorname{Ext}^1(H_{i-1}(C),\mathbb Z)$, and over a field $F$ onto $\operatorname{Hom}(H_i(C),F)$ ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]); a finitely generated abelian group is zero exactly when its $\operatorname{Hom}$ into $\mathbb Q$ and into every $\mathbb F_p$ vanishes ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

[F2] The degreewise split canonical sequence for the mapping cone is a short exact sequence of complexes, giving the long exact cone sequence with the stated adjacent terms ([[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]], [[thm-the-cone-long-exact-sequence]], [[def-mapping-cone-of-a-chain-map]]); the cone is free in each degree and its homology is finitely generated when the source and target homology are ([[lem-finite-products-and-comparison-cones-have-finite-type]]).

[F3] Integrating the result to the actual Thom comparison uses the odd-primary and rational vanishing of the Thom spaces and the finite generation of MO/MSO homology, with AC for the choices of fields and decompositions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Cohomology UCT surjects the displayed degree-i cohomology onto Hom(H_i(C),Q), respectively Hom(H_i(C),F_p). In the finite abelian-group decomposition, a nonzero free summand has a nonzero map to Q; any nonzero p-primary summand has a nonzero map to F_p. Thus the vanishing of all these Hom groups forces H_i(C)=0. No H^{i+1} vanishing is used, and the Ext term is not mistaken for the Hom term. In fact all prime fields alone detect a finitely generated nonzero abelian group; Q is included to match the topological coefficient comparisons. [given, F1]

2.1 Apply this to C_f. The degreewise split cone sequence, dualized to any coefficient field, gives H^{i-1}(Y;F)→H^{i-1}(X;F)→H^i(Hom(C_f,F)) →H^i(Y;F)→H^i(X;F). This follows from the inspected long exact sequence of complexes after reindexing cochains; degreewise splitting ensures Hom remains exact. Therefore field isomorphisms f*:H^i(Y;F)→H^i(X;F) for 0≤i≤D imply cone cohomology vanishing for 0≤i≤D, including degree zero with the negative groups zero. The previous lemma and finite generation then give H_i(C_f;Z)=0 for i≤D. The integral cone long exact sequence yields the stated isomorphism below $D$ and surjection at $D$. [step 1.1, F1, F2]

3.1 f_*:H_i(X;Z)→H_i(Y;Z) is an isomorphism for i<D, f_*:H_D(X;Z)→H_D(Y;Z) is surjective. Claiming injectivity in degree D would require H_{D+1}(C_f)=0 and is not a consequence of these hypotheses. For the actual Thom comparison take D=2r−1. Items 2 and 4 give the rational and odd-prime field isomorphisms through D, since both reduced cohomologies vanish there. The **separate mod-two metastable comparison** must give f* isomorphisms through D. If it does, the argument proves integral homology isomorphisms through 2r−2 and surjectivity at 2r−1. Neither odd-primary vanishing nor a mod-two comparison at 2r is required. For a later degree n+r in the isomorphism range choose r≥n+2. [step 2.1, F2, F3] ∎
