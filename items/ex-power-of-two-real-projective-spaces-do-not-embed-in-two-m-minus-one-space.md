---
id: ex-power-of-two-real-projective-spaces-do-not-embed-in-two-m-minus-one-space
kind: example
title: "Power-of-two projective spaces do not embed in twice the dimension minus one"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings", "lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space", "lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring", "thm-mod-two-real-projective-bundle-theorem", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-real-projective-bundle-and-tautological-line", "lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class", "def-axiom-of-choice"]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§11, Theorem 11.3, Corollary 11.4 and projective-space example, printed pp.119–121"
---

## Example

Assume AC. For every $r\ge1$, put $m=2^r$. Then $\mathbb{RP}^{m}$ does not smoothly embed in $\mathbb R^{2m-1}$. In its mod-two cohomology ring $\mathbb F_2[a]/(a^{m+1})$, $$\bar w(T\mathbb{RP}^m)=(1+a)^{-(m+1)}=1+a+\cdots+a^{m-1},$$ so $\bar w_{m-1}=a^{m-1}\ne0$ contradicts the top-normal-class condition for a rank-$(m-1)$ embedded normal bundle. In particular $\mathbb{RP}^2$ does not embed in $\mathbb R^3$, and $\mathbb{RP}^4$ does not embed in $\mathbb R^7$.

## Facts & Assumptions

**Given:** An integer $r\ge1$ and $m=2^r$; AC.

[F1] For the trivial rank-$(m+1)$ bundle over the one-point base the projective-bundle theorem gives $P(\varepsilon^{m+1})=\mathbb{RP}^m$ and the ring $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$ free on $1,a,\dots,a^m$, the relation classes $c_i\in H^i(\mathrm{pt};\mathbb F_2)$ vanishing for $i\ge1$ by the dimension axiom for singular cohomology; in this ring the tangent class is $w(T\mathbb{RP}^m)=(1+a)^{m+1}$, and the normal total class is its inverse, $\bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=w(T\mathbb{RP}^m)^{-1}$ ([[thm-mod-two-real-projective-bundle-theorem]], [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]], [[def-real-projective-bundle-and-tautological-line]], [[lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space]], [[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]]).

[F2] In characteristic two, $(1+a)^m=1+a^m$ when $m$ is a power of two, and $a^{m+1}=0$ in $\mathbb F_2[a]/(a^{m+1})$ ([[lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring]]).

[F3] If a closed smooth $M^m$ embeds in $\mathbb R^{m+k}$ with $m\ge1$, $k\ge1$, then $\bar w_k(TM)=0$; in particular a nonzero $\bar w_{m-1}$ obstructs an embedding in $\mathbb R^{2m-1}$ ([[cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings]]). AC is the hypothesis of the suppliers ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 We first compute the inverse. Since $m=2^r$, [F2] gives $(1+a)^m=1+a^m$, so the telescoping identity in $\mathbb F_2[a]$ reads $(1+a)(1+a+\cdots+a^{m-1})=1+a^m$. Multiplying by the same factor $(1+a)^m=1+a^m$ gives $$(1+a)^{m+1}\sum_{i=0}^{m-1}a^i=(1+a^m)^2=1+a^{2m}\quad\text{in }\mathbb F_2[a],$$ using $(u+v)^2=u^2+v^2$ in characteristic two. Because $2m\ge m+1$, the term $a^{2m}$ vanishes in $R=\mathbb F_2[a]/(a^{m+1})$, so $(1+a)^{m+1}\sum_{i=0}^{m-1}a^i=1$ in $R$: the polynomial $\sum_{i=0}^{m-1}a^i$ is the inverse of $(1+a)^{m+1}$, and by [F1] $$\bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=\sum_{i=0}^{m-1}a^i=1+a+\cdots+a^{m-1}.$$ [F1, F2, algebra]

2.1 The top coefficient is $\bar w_{m-1}(\mathbb{RP}^m)=a^{m-1}$, which is nonzero in $\mathbb F_2[a]/(a^{m+1})$ because $m-1<m+1$ and the powers $1,a,\dots,a^m$ are linearly independent. Suppose $\mathbb{RP}^m$ embedded smoothly in $\mathbb R^{2m-1}$; here $m\ge2$ and $k=m-1\ge1$, so [F3] with this codimension forces $\bar w_{m-1}(T\mathbb{RP}^m)=0$, contradicting the computed nonzero class. Hence no such embedding exists. [F1, F2, F3, step 1.1]

3.1 The cases $r=1$ and $r=2$ give $m=2$ and $m=4$: $\mathbb{RP}^2$ does not embed in $\mathbb R^{3}$, and $\mathbb{RP}^4$ does not embed in $\mathbb R^{7}$. The argument proves only non-embeddability: no assertion is made about the existence of an immersion of $\mathbb{RP}^m$ in $\mathbb R^{2m-1}$, nor about embeddability in $\mathbb R^{2m}$ or in larger codimension. The only choice used is the AC assumed by the class and embedding suppliers. [F3, step 1.1, step 2.1] ∎
