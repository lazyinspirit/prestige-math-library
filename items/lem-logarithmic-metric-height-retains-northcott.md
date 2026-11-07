---
id: lem-logarithmic-metric-height-retains-northcott
kind: lemma
title: "Logarithmic singularities preserve Northcott finiteness off the boundary"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - thm-northcott-finiteness-for-projective-points
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings and G. Wüstholz et al., *Rational Points*, 2nd ed."
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Relevant complete section as specified in the item references."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC. Let $K$ be a number field, let $X\subseteq\mathbb P^N_K$ be a projective subvariety, let $U\subseteq X$ be open, and let $h$ be the restriction of the absolute logarithmic Weil height of $\mathbb P^N$. Suppose $H:U(K)\to\mathbb R$ satisfies $H(P)\ge a h(P)-C$ for fixed constants $a>0$ and $C\in\mathbb R$. Then for every real $B$, the set $\{P\in U(K):H(P)\le B\}$ is finite.

## Statement references

[[thm-northcott-finiteness-for-projective-points]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

## Facts & Assumptions

**Given:** AC; a number field $K$, a projective subvariety $X\subseteq\mathbb P^N_K$, an open subset $U$, the restricted projective height $h$, and constants $a>0,C,B$ with the stated lower comparison.

[A1] [[def-axiom-of-choice]]: AC is inherited from the supplied height/model interface; the displayed local calculation makes no further use of it.

[F1] [[thm-northcott-finiteness-for-projective-points]]: over a fixed number field, bounded absolute logarithmic height gives finitely many points in projective space.

[F2] [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]: $h$ is the absolute logarithmic Weil height on the stated projective space.

## Proof

**Proof technique:** reduce the bound for $H$ to a projective height bound.

**Given:** [F1]–[F2], $a>0$, $C$, and $B$.

1.1 If $P\in U(K)$ satisfies $H(P)\le B$, the assumed inequality gives $a h_L(P)\le B+C$, so $h_L(P)\le (B+C)/a$. [given, algebra]

1.2 The set in step 1.1 lies in $\mathbb P^N(K)$ and has bounded absolute logarithmic Weil height as defined in [F2]. [F2, step 1.1, algebra]

2.1 Northcott finiteness [F1] makes that bounded-height set finite. The set in the Statement is contained in it, hence is finite. [F1, step 1.2, algebra] ∎
