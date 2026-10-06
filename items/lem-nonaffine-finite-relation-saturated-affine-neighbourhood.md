---
id: lem-nonaffine-finite-relation-saturated-affine-neighbourhood
kind: lemma
title: "Finite equivalence relations have saturated affine neighbourhoods around affine-contained orbits"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-nonaffine-finite-flat-affine-equivalence-quotient, lem-finite-prime-avoidance]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post.json"
    reviewed_raw_sha256: "20ecbbf8b725be21a2966fdb120ed5de0bc695c2f55c0b533783125bdb8df8b6"
    content_sha256: "6c7fd232ac89d71c5ddc873fe26719d2035d705cf04a7e086c2665e4b236ce0c"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3, Expose V, Section 5.b, saturated affine neighbourhood construction, pp.268-269"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf
    - title: "Milne, Algebraic Groups (2022), Appendix B.18 saturated affine neighbourhood step"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $R\rightrightarrows X$ be a finite locally free equivalence-relation groupoid on a separated finite-type $k$-scheme. If an orbit is contained in an affine open $V\subset X$, it is contained in a saturated affine open $W\subset V$.

## Facts & Assumptions

[F1] Characteristic polynomials and norms along finite locally free relation projections are invariant under the equivalence relation, by composition and inverse as in the finite affine quotient proof. ([[thm-nonaffine-finite-flat-affine-equivalence-quotient]])

[F2] An ideal not contained in any of finitely many prime ideals contains an element outside their union. ([[lem-finite-prime-avoidance]])

## Proof

**Given:** AC, $X,R$, its source and target maps $s,t$, and an orbit $E\subset V$.

1.1 The saturation $s(t^{-1}(X\setminus V))$ is closed, since $s$ is finite, and is a union of entire orbits by composition. Let $V'$ be its complement. It is the largest saturated open contained in $V$ and contains $E$. Write $V=\operatorname{Spec}A$. The closed subset $V\setminus V'$ is defined by an ideal $I$. No prime of any point of the finite orbit $E$ contains $I$, so [F2] gives $f\in I$ nonzero at every point of $E$. Hence $V_f\subset V'$ and contains $E$. [F2, given, construct]

2.1 On the saturated $V'$, the restricted relation is still finite locally free. Its norm $N=\operatorname{Norm}_s(t^*f)$ is a regular function on $V'$. Its nonvanishing locus consists exactly of the points all of whose relation targets lie in $V_f$: on a residue-field fibre the determinant is nonzero exactly when multiplication by $t^*f$ is invertible in its finite algebra, equivalently when that element vanishes at none of the fibre's points. Thus this locus is saturated and contains $E$. It is contained in $V_f$, because the identity arrow is one of those targets. Therefore it equals the principal nonvanishing locus of the restriction $N|_{V_f}$ in the affine scheme $V_f$, and is affine. It is the required $W$. The norm invariance in [F1] also verifies saturation scheme theoretically. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, algebra] ∎
