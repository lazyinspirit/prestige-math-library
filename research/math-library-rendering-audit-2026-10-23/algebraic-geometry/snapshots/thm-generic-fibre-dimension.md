---
id: "thm-generic-fibre-dimension"
kind: "theorem"
title: "Fibres have pure expected dimension over a dense open"
deps: ["thm-fibre-dimension-lower-bound", "lem-dominant-affine-map-normalization-over-open", "lem-dominant-affine-image-contains-principal-open", "lem-classical-variety-noetherian-components", "lem-chain-dimension-open-cover", "cor-transcendence-degree-tower-additivity", "thm-affine-domain-dimension-transcendence-degree", "lem-dimension-nonempty-open-subset", "thm-dimension-equals-transcendence-degree", "lem-general-variety-function-field-charts"]
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
    - title: "Vakil Theorem 12.4.1 and Corollary 12.4.2, pp.354–356"
      url: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf
    - title: "Arapura Theorem 4.2.1, p.31"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: published
origin: "pipeline"
proof_strategy: "Cover the inverse image of an affine target chart by finitely many nonempty affine source charts, each still dominant. Normalize each over a principal open and intersect these base opens. Fibre component coordinate rings are integral over quotients of polynomial rings in r variables, so their transcendence degrees are <=r. The lower bound makes every component exactly r; affine chart coverage handles the whole fibre."
---

## Statement

For a dominant morphism $f:X\to Y$ between irreducible classical varieties, there is a nonempty open $U\subseteq Y$, contained in $f(X)$, such that every $X_y$ with $y\in U$ is nonempty and has pure dimension $r=\dim X-\dim Y$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a dominant morphism $f:X\to Y$ between irreducible classical varieties and every closed point $y\in Y$, each nonempty irreducible component $Z$ of $X_y$ satisfies $\dim Z\ge\dim X-\dim Y$. No bound is asserted for an empty fibre. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-fibre-dimension-lower-bound]]).

[F2] Let $f:X\to Y$ be dominant between irreducible affine varieties, put $A=k[Y]\subseteq B=k[X]$, and let $r=\operatorname{trdeg}_{k(Y)}k(X)$. There are $0\ne a\in A$ and elements $t_1,\ldots,t_r\in B_a$, algebraically independent over $A_a$, such that $B_a$ is module-finite over $A_a[t_1,\ldots,t_r]$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dominant-affine-map-normalization-over-open]]).

[F3] The image of a dominant morphism $f:X\to Y$ between irreducible affine varieties contains a nonempty principal open subset of $Y$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dominant-affine-image-contains-principal-open]]).

[F4] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

[F5] For every open cover $T=\bigcup_{i\in I}U_i$ of a Noetherian space, $\dim T=\sup_i\dim U_i$, with empty supremum $-\infty$. ([[lem-chain-dimension-open-cover]]).

[F6] Let $k\subseteq K\subseteq L$ be a tower of field extensions. Assume that $\operatorname{trdeg}_k K$ and $\operatorname{trdeg}_K L$ are finite. Then $$ \operatorname{trdeg}_k L=\operatorname{trdeg}_k K+\operatorname{trdeg}_K L. $$ ([[cor-transcendence-degree-tower-additivity]]).

[F7] Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $K=\operatorname{Frac}(A)$. Then $$ \dim A=\operatorname{trdeg}_k K. $$ ([[thm-affine-domain-dimension-transcendence-degree]]).

[F8] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

[F9] If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-equals-transcendence-degree]]).

[F10] For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-general-variety-function-field-charts]]).

## Proof

1.1 Choose a nonempty affine target chart $V$ and cover its inverse image by finitely many nonempty affine charts $W_i$. Every $W_i\to V$ is dominant because nonempty opens in irreducible $X$ intersect the inverse image of every nonempty open in $V$. The common function fields and transcendence-degree additivity give $\operatorname{trdeg}_{k(Y)}k(X)=r$. [F4, F6, F9, F10]

2.1 For each $W_i\to V$, normalization after restriction gives a nonzero $a_i\in k[V]$ such that $k[W_i]_{a_i}$ is finite over an injected polynomial ring $k[V]_{a_i}[t_1,\ldots,t_r]$. Intersect these finitely many principal opens and, if needed, the principal image opens supplied by the affine image lemma. The result $U$ is nonempty, since $V$ is irreducible, and lies in the image of every $W_i$. [F2, F3, step 1.1]

3.1 For $y\in U$, each affine fibre chart has coordinate ring obtained by quotienting $k[W_i]_{a_i}$ by the radical of $\mathfrak m_y$. The ring of any irreducible component is therefore a domain finite over the image of $k[t_1,\ldots,t_r]$. Its fraction field is algebraic over the fraction field of that image, which is generated by at most $r$ elements. Thus its transcendence degree and its dimension are at most $r$. This uses a quotient of the polynomial ring, not an unjustified injection after taking a fibre. [F7, step 2.1]

4.1 For any global irreducible component $Z$ of $X_y$, choose a fibre chart meeting it away from the other components. Its intersection is a nonempty open of $Z$ and an affine component, hence has the same dimension as $Z$ and at most $r$ by the preceding calculation. The lower-bound theorem gives $\dim Z\ge r$. Hence each component has dimension exactly $r$; nonemptiness follows from $U\subseteq f(W_i)$. The zero-relative-dimension case is included. [F1, F5, step 2.1, step 3.1, F8] ∎
