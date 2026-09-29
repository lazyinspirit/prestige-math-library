---
id: ex-associated-sheaf-localized-module
kind: example
title: Restricting an associated sheaf to a localization
status: draft
origin: pipeline
deps:
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-restriction-affine-open
  - lem-spectrum-localization-open-immersion
  - thm-associated-module-sheaf-exists
  - def-localisation-of-a-module
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Example

Assume the Axiom of Choice, inherited from the associated-sheaf construction.
Let $A$ be a commutative ring with $1$, let $f\in A$, let $M$ be an
$A$-module, and let
$$\sigma:\operatorname{Spec}A_f\;\longrightarrow\;D(f)\subseteq\operatorname{Spec}A$$
be the isomorphism of locally ringed spaces induced by the localisation
$A\to A_f$ ([[lem-spectrum-localization-open-immersion]]). Write
$\widetilde M$ for the associated sheaf of $M$ on $\operatorname{Spec}A$ and
$\widetilde{M_f}$ for the associated sheaf of the $A_f$-module $M_f$ on
$\operatorname{Spec}A_f$ ([[thm-associated-module-sheaf-exists]]).

Then $\sigma$ identifies $\widetilde{M_f}$ with the restriction of
$\widetilde M$ to $D(f)$: there is a canonical isomorphism of
$\mathcal O_{\operatorname{Spec}A_f}$-modules
$$\widetilde{M_f}\;\cong\;\sigma^*\bigl(\widetilde M|_{D(f)}\bigr),$$
natural in $M$ and in $f$. On corresponding basic opens the identification is
the canonical one: for $a\in A$ the open
$D_{A_f}(a/1)\subseteq\operatorname{Spec}A_f$ satisfies
$\sigma(D_{A_f}(a/1))=D(fa)\subseteq D(f)$, and the sections are $M_{fa}$ on
both sides. In particular the example includes the degenerate case where $f$
is nilpotent, when both sides are the zero sheaf on the empty scheme.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative ring $A$; an element $f\in A$; an
$A$-module $M$; the isomorphism $\sigma:\operatorname{Spec}A_f\to D(f)$.

[F1] The localisation $A\to A_f$ induces an isomorphism of locally ringed
spaces $\operatorname{Spec}A_f\to D(f)$ onto the open subscheme $D(f)$, whose
underlying map sends a prime of $A_f$ to its contraction in $A$
([[lem-spectrum-localization-open-immersion]]).

[F2] For an affine scheme $\operatorname{Spec}B$ with associated sheaf
$\widetilde N$, one has $\Gamma(D(b),\widetilde N)=N_b$ for every $b\in B$,
with restriction the canonical localisation, naturally in $N$ and $b$
([[lem-associated-sheaf-sections-basic-open]],
[[thm-associated-module-sheaf-exists]]).

[F3] For an affine open $W=\operatorname{Spec}C\subseteq\operatorname{Spec}A$
with inclusion $\sigma$ and corresponding ring map $\varphi:A\to C$, and any
$A$-module $M$, there is a canonical isomorphism
$(\widetilde M)|_W\cong\widetilde{(C\otimes_AM)}$ of $\mathcal O_W$-modules,
natural in $M$ ([[lem-associated-sheaf-restriction-affine-open]]).

[F4] For the localisation $A\to A_f$ and an $A$-module $M$ one has
$A_f\otimes_AM\cong M_f$ canonically, and further localisation
$(M_f)_{a/1}\cong M_{fa}$ for $a\in A$
([[def-localisation-of-a-module]]).

[F5] The refuted situation the example corrects: the restriction of
$\widetilde M$ to $D(f)$ is the associated sheaf of the localised module
$M_f$, not merely a sheaf with isomorphic stalks.



**Proof technique:** direct; identify the open immersion, apply the affine-open
restriction theorem, and check the identification on basic opens.

## Proof

1.1 By [F1] the map $\sigma$ is an isomorphism of locally ringed spaces onto $D(f)$ and a prime $\mathfrak q\subseteq A_f$ corresponds to $\mathfrak q\cap A$; hence for $a\in A$ the basic open $D_{A_f}(a/1)$ corresponds to $D_A(a)\cap D_A(f)=D_A(fa)$, and the sections of the structure sheaf on these corresponding opens are the same ring $A_{fa}$ under $\sigma$. [F1]

1.2 Applying [F3] with $W=D(f)=\operatorname{Spec}A_f$, $C=A_f$ and the ring map $A\to A_f$ gives a canonical isomorphism $(\widetilde M)|_{D(f)}\cong\widetilde{(A_f\otimes_AM)}$ of $\mathcal O_{D(f)}$-modules, natural in $M$; by [F4] $A_f\otimes_AM\cong M_f$, so transporting along $\sigma$ gives the canonical isomorphism $\widetilde{M_f}\cong\sigma^*(\widetilde M|_{D(f)})$ of the Example. [F3, F4]

2.1 The identification is the canonical one on basic opens: for $a\in A$, [F2] applied to $\operatorname{Spec}A$ gives $\Gamma(D(fa),\widetilde M)=M_{fa}$, while [F2] applied to $\operatorname{Spec}A_f$ with the element $a/1$ gives $\Gamma(D_{A_f}(a/1),\widetilde{M_f})=(M_f)_{a/1}$, and [F4] identifies $(M_f)_{a/1}\cong M_{fa}$ with the localisation of the identity on $M$; for $b\in A$ with $D(fb)\subseteq D(fa)$ the restriction maps are the canonical localisations $M_{fa}\to M_{fb}$ and $(M_f)_{a/1}\to(M_f)_{b/1}$, which [F4] identifies, so these identifications realise the isomorphism of step 1.2 on a basis of $D(f)$ and are natural in $M$ and $f$. [F2, F4, step 1.1, step 1.2]

3.1 If $f$ is nilpotent then $D(f)=\varnothing$ and $A_f=0$, so $M_f=0$ and both sides of the isomorphism are the zero sheaf on the empty scheme, in agreement with [F2]; otherwise the isomorphism of step 1.2 is the restriction identification of the Example, and the Axiom of Choice is inherited from [F2] and [F3], no new choice being made. [F2, F3, step 1.2, step 2.1] ∎
