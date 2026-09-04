---
id: prop-contravariant-derived-functors-are-derived-on-the-opposite-category
kind: proposition
title: "Contravariant derived functors are derived on the opposite category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-and-contravariant-functor, def-opposite-category, thm-the-opposite-of-an-abelian-category-is-abelian, def-projective-object, def-injective-object, def-right-derived-object-relative-to-injective-resolution-data]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement

Let $G:\mathcal A\to\mathcal B$ be a contravariant additive functor between
abelian categories, regarded as a covariant functor
$G:\mathcal A^{\mathrm{op}}\to\mathcal B$. If $P$ is a supplied projective
resolution datum on a class $\mathcal D$ in $\mathcal A$, then reversing
arrows turns it into a supplied injective resolution datum $P^{\mathrm{op}}$
on the same class in $\mathcal A^{\mathrm{op}}$, and for every
$A\in\mathcal D$,
$$R_{P^{\mathrm{op}}}^nG(A)=H^n\!\bigl(G(P(A)_{\mathrm{del}})\bigr).$$
Thus contravariant derived functors are computed on the opposite category.
## Facts & Assumptions

**Given:** A contravariant additive functor $G$, a supplied projective datum
$P$ on $\mathcal D$, and an object $A\in\mathcal D$.

[L1] A contravariant functor on $\mathcal A$ is a covariant functor on
$\mathcal A^{\mathrm{op}}$ ([[def-functor-and-contravariant-functor]], [[def-opposite-category]]).

[L2] If $\mathcal A$ is abelian then $\mathcal A^{\mathrm{op}}$ is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L3] Projective objects are defined by lifting against epimorphisms, while
injective objects are defined dually by extension across monomorphisms
([[def-projective-object]], [[def-injective-object]]).

[L4] Right derived objects are defined from supplied injective resolution data
([[def-right-derived-object-relative-to-injective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $G$ may be treated as a covariant additive functor on the abelian category $\mathcal A^{\mathrm{op}}$. [L1, L2, given]

1.2 A projective resolution in $\mathcal A$ becomes, after reversing arrows, a coaugmented exact complex in $\mathcal A^{\mathrm{op}}$. Because [L3] exchanges the lifting and extension conditions under passage to the opposite category, each projective term becomes injective there. Hence the supplied datum $P$ becomes an injective resolution datum $P^{\mathrm{op}}$ on $\mathcal D$ in $\mathcal A^{\mathrm{op}}$. [L2, L3, construct]

2.1 Applying [L4] to the covariant functor $G:\mathcal A^{\mathrm{op}}\to \mathcal B$ and the injective datum $P^{\mathrm{op}}$ gives $$R_{P^{\mathrm{op}}}^nG(A)=H^n(G(P(A)_{\mathrm{del}})).$$ This is exactly the correct opposite-category formulation of deriving the original contravariant functor. [L1, L4, step 1.2] ∎
