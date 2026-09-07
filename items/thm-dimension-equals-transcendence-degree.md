---
id: "thm-dimension-equals-transcendence-degree"
kind: "theorem"
title: "Dimension equals transcendence degree"
deps: ["thm-affine-variety-dimension-coordinate-ring", "lem-general-variety-function-field-charts", "lem-chain-dimension-open-cover", "thm-affine-domain-dimension-transcendence-degree"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §5j, p.115"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Arapura §4.1, p.30"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Every affine chart has the same fraction field; invoke the established algebraic dimension theorem and the open-cover chain lemma. No new algebraic normalization proof."
---

## Statement

If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a nonempty affine algebraic set $X$, $\dim X=\dim k[X]$, where the right side is Krull dimension. For this comparison only, extend ring dimension to the zero ring by $\dim(0)=-\infty$; then the equality also holds for $X=\varnothing$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-affine-variety-dimension-coordinate-ring]]).

[F2] For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-general-variety-function-field-charts]]).

[F3] For every open cover $T=\bigcup_{i\in I}U_i$ of a Noetherian space, $\dim T=\sup_i\dim U_i$, with empty supremum $-\infty$. ([[lem-chain-dimension-open-cover]]).

[F4] Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $K=\operatorname{Frac}(A)$. Then $$ \dim A=\operatorname{trdeg}_k K. $$ ([[thm-affine-domain-dimension-transcendence-degree]]).

## Proof

1.1 For each nonempty affine chart $V$, its coordinate ring is a finite-type domain. The affine geometric/ring comparison and the affine-domain theorem give $\dim V=\operatorname{trdeg}_k\operatorname{Frac}k[V]$. [F1, F4]

2.1 All these fraction fields are canonically $k(X)$. The open-cover dimension lemma makes $\dim X$ the supremum of the equal chart dimensions, hence that same finite number. Finite generation of a chart gives finiteness of its transcendence degree. [F2, F3, step 1.1] ∎
