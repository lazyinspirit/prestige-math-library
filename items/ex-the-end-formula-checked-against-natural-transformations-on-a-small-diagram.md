---
id: ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram
kind: example
title: "The end formula checked by hand against natural transformations on the walking arrow"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The equalizer computed from the two displayed parallel maps must have exactly the elements that the naturality square admits."
  counterexample_search: "Both lists were enumerated in full: the eight elements of the object-indexed product were tested against the equalising condition, and the four pairs of functions satisfying the naturality square were listed independently and matched one for one."
deps: [thm-the-set-of-natural-transformations-is-an-end, thm-an-end-is-an-equalizer-between-two-products, def-end-and-coend, def-natural-transformation, prop-sets-and-functions-form-category-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal J$ be the walking arrow, with objects $0$ and $1$ and one
non-identity morphism $u:0\to1$, and let $F,G:\mathcal J\to\mathbf{Set}$ be

$$F(0)=\{p,q\},\quad F(1)=\{r\},\quad F(u)(p)=F(u)(q)=r;$$
$$G(0)=\{a,b\},\quad G(1)=\{c,d\},\quad G(u)(a)=G(u)(b)=c.$$

The end $\int_{j}\mathbf{Set}(Fj,Gj)$ is computed here twice, once from the
equalizer description and once by listing the natural transformations
$F\Rightarrow G$, and the two answers are matched element for element.

## Facts & Assumptions

**Given:** The walking arrow $\mathcal J$ and the two functors $F,G$ displayed above.

[F3] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F2] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[L2] For a small index category and a target where the two displayed products exist, an end is the equalizer of two products, the first indexed by the objects and the second by the morphisms, the two parallel maps being built from $T(1_c,f)$ and $T(f,1_{c'})$ ([[thm-an-end-is-an-equalizer-between-two-products]]).

[L1] For a small source category and a locally small target, the set of natural transformations is an end of the hom-bifunctor of the values, the terminal wedge being evaluation ([[thm-the-set-of-natural-transformations-is-an-end]]).

## Verification

**Proof technique:** direct.

1.1 The integrand is $H(j_1,j_2)=\mathbf{Set}(F(j_1),G(j_2))$, with values $H(0,0)$ of size four, $H(1,1)$ of size two, $H(0,1)$ of size four and $H(1,0)$ of size two. The object-indexed product is $\mathbf{Set}(F(0),G(0))\times\mathbf{Set}(F(1),G(1))$, with eight elements; the morphism-indexed product has one factor for each of $1_0$, $1_1$ and $u$, namely $\mathbf{Set}(F(0),G(0))$, $\mathbf{Set}(F(1),G(1))$ and $\mathbf{Set}(F(0),G(1))$. [F3, given]

2.1 By [L2] the two parallel maps send a pair $(\phi_0,\phi_1)$ to the families whose $f$-component is $G(f)\circ\phi_{\operatorname{dom}f}$ and $\phi_{\operatorname{cod}f}\circ F(f)$ respectively. At $1_0$ and at $1_1$ both components are $\phi_0$ and $\phi_1$, so those factors impose nothing; at $u$ the condition is $G(u)\circ\phi_0=\phi_1\circ F(u)$. Since $G(u)$ sends both $a$ and $b$ to $c$, the left side is the constant function at $c$, and the right side is the constant function at $\phi_1(r)$; so the condition holds exactly when $\phi_1(r)=c$. The equalizer is therefore the subset of the eight-element product on which $\phi_1(r)=c$, which leaves $\phi_0$ free: its elements are the four pairs with $\phi_0$ one of $p,q\mapsto a,a$; $a,b$; $b,a$; $b,b$ and $\phi_1(r)=c$. [F1, L2, step 1.1]

3.1 Listing the natural transformations independently gives the same four. By [F2] a natural transformation $\alpha:F\Rightarrow G$ is a pair $\alpha_0:\{p,q\}\to\{a,b\}$ and $\alpha_1:\{r\}\to\{c,d\}$ with $G(u)\alpha_0=\alpha_1F(u)$, which as in step 2.1 says exactly $\alpha_1(r)=c$; there are four choices of $\alpha_0$ and each extends in exactly one way. [F2, step 1.1]

4.1 The two lists agree pair for pair, and by [L1] they must: the end of $H$ is $\operatorname{Nat}(F,G)$ with the evaluation wedge, and by [L2] it is the equalizer computed in step 2.1. So the end has four elements on this diagram, and the identification is the identity on the four pairs. [L1, step 2.1, step 3.1] ∎

## Remarks

The identity morphisms of $\mathcal J$ contribute factors to the morphism-indexed product and impose nothing, which is visible here rather than argued in general: their equalising condition is $\phi_j=\phi_j$.

Had $G(u)$ been injective rather than constant, the condition of step 2.1 would have forced $\phi_0$ to be constant as well, and the end would have had fewer elements. Nothing in the equalizer description privileges one of the two parallel maps, and both were written out.
