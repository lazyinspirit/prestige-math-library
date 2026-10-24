---
id: lem-nonaffine-affine-nilpotent-thickening
kind: lemma
title: "A nilpotent thickening of an affine scheme is affine"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-qc-sheaf-affine-higher-cohomology-vanishes, lem-extend-sections-from-nonvanishing-open, thm-morphisms-into-affine-scheme-global-sections]
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
    reviewed_raw_sha256: "d9ca6b7ace87c97d1776d322c3bc0365a7c953fa4984f5f02cadcd9ead33eaaa"
    content_sha256: "725d3574e1c18c0784df1bbb94b889768b0fb2df209533b123d0eefb4a3768f8"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Schemes, affineness of nilpotent thickenings"
      url: https://stacks.math.columbia.edu/download/schemes.pdf
    - title: "Milne, Algebraic Groups (2022), Appendix A, nilpotent reductions"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ be a Noetherian separated scheme and $Y\hookrightarrow X$ a closed subscheme defined by a nilpotent quasi-coherent ideal. If $Y$ is affine, then $X$ is affine.

## Facts & Assumptions

[F1] Quasi-coherent sheaves on affine schemes have no higher cohomology. ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F2] On a quasi-compact quasi-separated scheme, sections on a global-section nonvanishing open extend after multiplying by a power of that section. Morphisms to affine schemes correspond to global-section ring maps. ([[lem-extend-sections-from-nonvanishing-open]], [[thm-morphisms-into-affine-scheme-global-sections]])

## Proof

**Given:** AC, $X$, $Y$, and its nilpotent ideal $I$.

1.1 First suppose $I^2=0$. The sheaf $I$ is a quasi-coherent module on $Y$, because $I$ annihilates itself. The closed immersion does not change the underlying topological space. Thus [F1] gives $H^1(X,I)=H^1(Y,I)=0$, and the exact sequence $0\to I\to\mathcal O_X\to\mathcal O_Y\to0$ gives a surjection $A=\Gamma(X,\mathcal O_X)\to B=\Gamma(Y,\mathcal O_Y)$ with square-zero kernel. [F1, given, algebra]

2.1 Around each point choose an affine open $V\subset X$, and then a principal open $D(b)\subset Y=\operatorname{Spec}B$ contained in $V\cap Y$. Lift $b$ to $a\in A$ by step 1.1. Its nonvanishing open $X_a$ has underlying space $D(b)$, lies in $V$, and is the principal open of the restriction of $a$ to $V$, hence affine. By [F2], $\Gamma(X_a,\mathcal O)=A_a$: surjectivity follows by clearing powers of $a$, and a section of $A$ zero on $X_a$ is annihilated by a power of $a$, by the same extension/localization argument on the finite affine cover of $X$. Choose finitely many of these opens covering $X$. Their corresponding $D(a)\subset\operatorname{Spec}A$ cover that spectrum, since $\operatorname{Spec}A$ and $\operatorname{Spec}B$ have the same underlying space under the square-zero quotient. The canonical map $X\to\operatorname{Spec}A$ therefore is an isomorphism on this affine-open cover, and hence globally. [F2, step 1.1, construct]

3.1 For general $I^m=0$, start with $X_1=Y$, and successively thicken to the closed schemes $X_j$ defined by $I^j$, for $j=2,\ldots,m$. The ideal of $X_{j-1}$ in $X_j$ is $I^{j-1}/I^j$, whose square is zero because $2(j-1)\ge j$. Steps 1.1 and 2.1 show inductively that each $X_j$ is affine; $X_m=X$. AC is inherited from the cohomology and section-extension suppliers. [F1, F2, step 1.1, step 2.1, construct] ∎
