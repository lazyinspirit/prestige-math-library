---
id: "thm-dominant-equal-dimension-generically-finite"
kind: "theorem"
title: "Equal dimension is equivalent to generic quasi-finiteness"
deps: ["thm-generic-fibre-dimension", "lem-zero-dimensional-classical-variety-finite", "def-quasi-finite-morphism-classical", "lem-general-variety-function-field-charts", "cor-transcendence-degree-tower-additivity", "thm-dimension-equals-transcendence-degree"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arapura Lemma 4.1.3 and Corollary 4.2.2"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: published
origin: "pipeline"
proof_strategy: "A finitely generated algebraic field extension is finite; generic dimension zero is equivalent to finite fibres. State inseparable extensions are allowed and do not identify geometric fibre cardinality with degree."
---

## Statement

For a dominant morphism $f:X\to Y$ of irreducible classical varieties, the following are equivalent: $\dim X=\dim Y$; the extension $k(Y)\subseteq k(X)$ is finite; and $f^{-1}(U)\to U$ is quasi-finite for some nonempty target open $U$. Inseparable extensions are allowed.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a dominant morphism $f:X\to Y$ between irreducible classical varieties, there is a nonempty open $U\subseteq Y$, contained in $f(X)$, such that every $X_y$ with $y\in U$ is nonempty and has pure dimension $r=\dim X-\dim Y$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-generic-fibre-dimension]]).

[F2] A classical variety $X$ has $\dim X\le0$ if and only if its underlying set is finite. The empty set is included. A nonempty irreducible variety of dimension zero is one point. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-zero-dimensional-classical-variety-finite]]).

[F3] A morphism $f:X\to Y$ of classical varieties is quasi-finite if every closed-point fibre $X_y$ is a finite set; empty fibres are allowed. Classical morphisms here are of finite type: for an affine target chart and an affine source chart above it, any finite set of $k$-algebra generators of the source ring also generates it over the target ring. The inverse image has a finite affine cover because it is an open of a Noetherian variety. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-quasi-finite-morphism-classical]]).

[F4] For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-general-variety-function-field-charts]]).

[F5] Let $k\subseteq K\subseteq L$ be a tower of field extensions. Assume that $\operatorname{trdeg}_k K$ and $\operatorname{trdeg}_K L$ are finite. Then $$ \operatorname{trdeg}_k L=\operatorname{trdeg}_k K+\operatorname{trdeg}_K L. $$ ([[cor-transcendence-degree-tower-additivity]]).

[F6] If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-equals-transcendence-degree]]).

## Proof

1.1 Let $K=k(Y)\subseteq L=k(X)$ be the field injection. Both fields are finitely generated over $k$, and $L$ is finitely generated over $K$. The dimension/transcendence-degree formula and tower additivity show that equal dimensions mean $\operatorname{trdeg}_K L=0$. A finitely generated algebraic field extension is finite: adjoining its generators one at a time gives finite degrees whose product bounds the total degree. Conversely a finite extension is algebraic, so tower additivity gives equal dimensions. [F4, F5, F6]

1.2 If the dimensions are equal, generic fibres on a nonempty target open are nonempty and zero-dimensional. They are finite by the zero-dimensional finiteness result, so the restriction is quasi-finite. [F1, F2, F3]

2.1 Conversely suppose the restriction over a nonempty open $U$ is quasi-finite. Intersect $U$ with the nonempty open given by the generic fibre theorem. Irreducibility makes the intersection nonempty. A fibre there is nonempty and finite, hence has dimension zero, while the generic theorem gives its dimension as $\dim X-\dim Y$. Thus the dimensions are equal. The argument never equates fibre cardinality with field degree. [F1, F2, F3, step 1.1] ∎
