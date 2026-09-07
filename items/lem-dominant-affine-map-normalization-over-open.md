---
id: "lem-dominant-affine-map-normalization-over-open"
kind: "lemma"
title: "A dominant affine map factors finitely over relative affine space after shrinking the base"
deps: ["lem-general-variety-function-field-charts", "cor-noether-normalisation-module-finiteness", "thm-coordinate-ring-principal-open"]
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
    - title: "Vakil Theorem 12.4.1 proof, pp.354–356 (July 27 2024)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Apply the algebra supplier to k[X] tensor_k[Y] k(Y); clear denominators of the normalization elements and monic equations of the finite set of algebra generators. Finitely many denominators suffice. Algebraic normalization itself remains owned by the algebra page."
---

## Statement

Let $f:X\to Y$ be dominant between irreducible affine varieties, put $A=k[Y]\subseteq B=k[X]$, and let $r=\operatorname{trdeg}_{k(Y)}k(X)$. There are $0\ne a\in A$ and elements $t_1,\ldots,t_r\in B_a$, algebraically independent over $A_a$, such that $B_a$ is module-finite over $A_a[t_1,\ldots,t_r]$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-general-variety-function-field-charts]]).

[F2] Let $k$ be a field and let $A$ be a nonzero finite-type $k$-algebra. Then there exist algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is a module-finite algebra over the polynomial ring $k[z_1,\ldots,z_d]$. ([[cor-noether-normalisation-module-finiteness]]).

[F3] Assume the Axiom of Choice. Let $X$ be a classical affine variety over an algebraically closed field $k$, and let $\overline f\in k[X]$. Put $U=D_X(\overline f)$. A function $\varphi:U\to k$ is called **regular on $U$** if there exist finitely many pairs $(\overline g_i,\overline h_i)$ in $k[X]\times k[X]$ such that $$ U=\bigcup_{i=1}^r D_X(\overline h_i) $$ and $$\varphi(x)=\frac{\overline g_i(x)}{\overline h_i(x)}\qquad\text{for every }x\in D_X(\overline h_i).$$ Write $\mathcal O_X(U)$ for the ring of regular functions on $U$. Then evaluation induces a ring isomorphism $$ k[X]_{\overline f}\xrightarrow{\sim}\mathcal O_X(U). $$ If $U=\varnothing$, both sides are the zero ring. ([[thm-coordinate-ring-principal-open]]).

## Proof

1.1 Dominance makes $A\to B$ injective and identifies their fraction fields with $k(Y)\subseteq k(X)$. Put $K=\operatorname{Frac}A$. The localization $B_K=B\otimes_AK$ is a nonzero finite-type $K$-domain inside $\operatorname{Frac}B$, with that same fraction field. [F1]

2.1 Apply normalization over the field $K$ to obtain algebraically independent $t_1,\ldots,t_r\in B_K$ over which $B_K$ is module-finite. Their number is $r$ because the fraction field is algebraic over the fraction field of the normalization polynomial ring. Choose finite $A$-algebra generators $b_1,\ldots,b_s$ of $B$. Each satisfies a monic equation over $K[t_1,\ldots,t_r]$. [F2, step 1.1]

3.1 Every $t_i$ is a fraction with numerator in $B$ and nonzero denominator in $A$. Invert the product $a$ of these denominators and all denominators in the finitely many monic-equation coefficients. The product is nonzero because $A$ is a domain, and an empty product is $1$. Now $t_i\in B_a$, and the same equations are monic over $A_a[t_1,\ldots,t_r]$. Independence descends from $K$. If the equation degrees are $d_j$, the finitely many monomials $\prod_j b_j^{e_j}$ with $0\le e_j<d_j$ span $B_a$ over this polynomial subring by repeated monic reduction. The principal-open supplier identifies the localized rings with the corresponding open-chart rings. This works also for $r=0$. [F3, step 2.1] ∎
