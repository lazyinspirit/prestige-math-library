---
id: ex-a-contravariant-functor-derived-via-the-opposite-category
kind: example
title: "A contravariant functor derived via the opposite category"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [prop-contravariant-derived-functors-are-derived-on-the-opposite-category, thm-hom-is-left-exact-in-each-variable]
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
## Example

Take the contravariant functor
$$G=\operatorname{Hom}_{\mathbb Z}(-,\mathbb Z):\mathbf{Ab}\to\mathbf{Ab}.$$
Fix supplied projective resolution data $P$ on a class $\mathcal D$ of abelian
groups. Regarded as a covariant functor on $\mathbf{Ab}^{\mathrm{op}}$, $G$ has
right derived objects, for $A\in\mathcal D$,
$$R_{P^{\mathrm{op}}}^nG(A)=H^n\!\bigl(G(P(A)_{\mathrm{del}})\bigr),$$
using the opposite-category interpretation of the projective resolutions as
injective resolutions in $\mathbf{Ab}^{\mathrm{op}}$.
## Facts & Assumptions

**Given:** The contravariant functor
$G=\operatorname{Hom}_{\mathbb Z}(-,\mathbb Z)$, supplied projective data $P$
on $\mathcal D$, and an object $A\in\mathcal D$.

[L1] Hom is left exact in each variable, so the displayed Hom functor is a
standard contravariant example
([[thm-hom-is-left-exact-in-each-variable]]).

[L2] Contravariant derived functors are derived on the opposite category
([[prop-contravariant-derived-functors-are-derived-on-the-opposite-category]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $G$ is the sort of contravariant additive functor that later produces Ext-style right derived objects. [L1, given]

2.1 Apply [L2] to $G$, $P$, and $A$. The projective resolution $P(A)$ in $\mathbf{Ab}$ is read in $\mathbf{Ab}^{\mathrm{op}}$ as an injective resolution, giving the displayed right derived object there. This makes the variance bookkeeping explicit. [L2, step 1.1] ∎
