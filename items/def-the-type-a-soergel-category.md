---
id: def-the-type-a-soergel-category
kind: definition
title: "The type-A Soergel category $\\mathrm{SBim}_n$"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-bott-samelson-bimodule-of-a-word, def-the-idempotent-completion-of-a-preadditive-category]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §§2–5"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

**Ambient bimodules.** Fix $R=\mathbb Q[x_1,\ldots,x_n]$ with $\deg x_i=2$ and
the simple reflections $s_1,\ldots,s_{n-1}$ as in
[[def-type-a-reflection-realization-and-polynomial-ring]]. We work inside the
category of graded $(R,R)$-bimodules and degree-zero bimodule maps, where
"graded" means a $\mathbb Z$-indexed direct sum decomposition
$M=\bigoplus_{d\in\mathbb Z}M_d$ with $R_iM_jR_k\subseteq M_{i+j+k}$, and where
the internal shift $M\{r\}$ has $(M\{r\})_d=M_{d-r}$; as on the rest of this page
we also write $M(r):=M\{-r\}$ for the Elias–Williamson shift, so that
$M(1)_d=M_{d+1}$.

**Bott–Samelson objects.** For a finite word $\underline i=(i_1,\ldots,i_r)$ let
$B_{\underline i}=B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ be the Bott–Samelson
bimodule of [[def-bott-samelson-bimodule-of-a-word]], with
$B_{\emptyset}=R$. Let $\mathrm{BSBim}_n$ be the full subcategory of the ambient
category whose objects are the finite direct sums
$$B_{\underline i_1}(d_1)\oplus\cdots\oplus B_{\underline i_s}(d_s)$$
of shifts of Bott–Samelson bimodules, with the biproduct structure on direct
sums and degree-zero maps between them; the empty sum is the zero bimodule.
This is an additive $\mathbb Q$-linear category with grading shifts.
Its total graded morphism space
$\operatorname{Hom}^{\bullet}(M,N)=\bigoplus_{d\in\mathbb Z}\operatorname{Hom}^0(M,N(d))$
is an $R$-module by left multiplication on the output: a homogeneous scalar
of degree $a$ sends its degree-$d$ part to its degree-$(d+a)$ part. The
categorical morphisms are its degree-zero part, which need not be an
$R$-submodule. The tensor product over $R$
makes it a monoidal category with unit $R=B_{\emptyset}$, because the tensor
product of two finite sums of shifted Bott–Samelson products is again such a
sum, it distributes over the direct sums in each variable, and
$(M(d))\otimes_RN\cong M\otimes_R(N(d))\cong(M\otimes_RN)(d)$ naturally.

**Idempotent completion.** The type-A **Soergel category** is the idempotent
completion, in the sense of
[[def-the-idempotent-completion-of-a-preadditive-category]],
$$\mathrm{SBim}_n:=\mathrm{Kar}(\mathrm{BSBim}_n).$$
Its objects are the pairs $(M,e)$ with $M$ a finite sum of shifted
Bott–Samelson products and $e\in\operatorname{End}(M)$ a degree-zero idempotent,
and its morphisms are the degree-zero maps
$\operatorname{Hom}((M,e),(N,f))=f\operatorname{Hom}(M,N)e$. The tensor product
extends to the completion by $(M,e)\otimes_R(N,f):=(M\otimes_RN,e\otimes f)$ and
makes $\mathrm{SBim}_n$ a graded, additive, idempotent-complete monoidal
category with the same unit $R$; equivalently, $\mathrm{SBim}_n$ is the smallest
full subcategory of the ambient bimodule category that contains $R$ and the
$B_i$, is closed under finite direct sums, internal shifts, tensor products over
$R$, and direct summands. Every object of $\mathrm{SBim}_n$ is a finite direct
sum of graded shifts of indecomposable objects.

**Separation from the diagrammatic presentation.** We write
$\mathrm{SBim}_n$ for the bimodule category defined here and
$\mathcal D$ (or $\mathcal D_n$) for the $k$-linear graded monoidal category
presented by diagrams in
[[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]; the two
are related, but not identified, by the evaluation functor, which is proved to
be an equivalence only later on this page. In particular no statement about
$\mathcal D$ may be read as a statement about $\mathrm{SBim}_n$ before that
equivalence is established. For $n\le1$ there are no simple reflections, so the generating
object $R$ is the only indecomposable up to shift and $\mathrm{SBim}_n$ is the closure of
$R$ under finite direct sums, internal shifts and direct summands: its objects
are the finite direct sums of graded shifts of $R$, its morphisms are the graded
$R$-bimodule maps between them, and the summands are again finite sums of shifts
of $R$. Indeed a finite graded projective module over the connected
nonnegatively graded ring $R$ is graded free: lift a homogeneous basis modulo
$R_+=\bigoplus_{d>0}R_d$, obtaining a surjection from a finite graded free
module by graded Nakayama. Projectivity splits it; its kernel has zero
reduction modulo $R_+$ and is bounded below, so graded Nakayama kills the
kernel. This applies to every graded summand here, whose two $R$-actions agree.
