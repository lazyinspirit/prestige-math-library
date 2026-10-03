---
id: thm-affine-closed-immersions-quotient-rings
kind: theorem
title: "Closed immersions into affine schemes are quotient spectra"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-immersion-schemes, def-affine-scheme, thm-affine-scheme-ring-anti-equivalence]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 26.10.1"
      url: "https://stacks.math.columbia.edu/tag/01IN"
---
## Statement

For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique
isomorphism over $\operatorname{Spec}A$, precisely the morphisms
$\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$.

## Facts & Assumptions

**Given:** A closed immersion $i:Z\to\operatorname{Spec}A$.

## Proof

**Proof technique:** direct.

1.1 By Stacks Project, Tag `01IN`, there is an ideal $I\subseteq A$ whose associated quasi-coherent sheaf is the kernel of $\mathcal O_{\operatorname{Spec}A}\to i_*\mathcal O_Z$, and for every distinguished open $D(f)$ one has $$i^{-1}(D(f))\cong\operatorname{Spec}(A_f/I_f).$$ In particular, for $f=1$ this gives $Z\cong\operatorname{Spec}(A/I)$ over $\operatorname{Spec}A$. This avoids the false inference that an arbitrary surjection of sheaves must be surjective on global sections. [given]

2.1 Conversely, a quotient $A\twoheadrightarrow A/I$ induces a morphism $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ with closed image $V(I)$; on every distinguished open it is the quotient $A_f\twoheadrightarrow A_f/I_f$, so the structure-sheaf map is surjective. Thus it is a closed immersion. [step 1.1]

3.1 The kernel ideal and quotient construction recover each other, giving the claimed classification up to unique isomorphism. [step 2.1] ∎
