---
id: prop-killing-form-pairs-only-opposite-root-spaces
kind: proposition
title: "The Killing form pairs only opposite root spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-killing-form-of-a-semisimple-lie-algebra, prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra, thm-root-space-decomposition-relative-to-a-cartan-subalgebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $B$ be the Killing form from [[def-killing-form-of-a-semisimple-lie-algebra]], and let $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_\beta$ for the root-space decomposition of [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]]. If $\alpha+\beta\ne 0$, then

$$B(x,y)=0.$$

In particular, $B$ pairs nontrivially only opposite root spaces and restricts nondegenerately to $\mathfrak h$.

## Facts & Assumptions

**Given:** Roots $\alpha,\beta$ of a Cartan subalgebra $\mathfrak h$, vectors $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_\beta$, and the Killing form $B$.

## Proof

**Proof technique:** direct.

1.1 For any $h\in \mathfrak h$, invariance from [[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]] gives $0=B([h,x],y)+B(x,[h,y])=(\alpha(h)+\beta(h))B(x,y)$. [given, algebra]

2.1 If $\alpha+\beta\ne 0$, choose $h\in \mathfrak h$ with $(\alpha+\beta)(h)\ne 0$; then step 1.1 forces $B(x,y)=0$. Also, for $h_0\in \mathfrak h$, the same argument with $x=h_0$ and $y\in \mathfrak g_\alpha$ shows $B(h_0,y)=0$, so $\mathfrak h$ is orthogonal to every nonzero root space. [step 1.1]

3.1 If $h_0\in \mathfrak h$ is orthogonal to $\mathfrak h$, then step 2.1 makes it orthogonal to every summand in [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]], hence to all of $\mathfrak g$. Nondegeneracy from [[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]] gives $h_0=0$, so the restriction of $B$ to $\mathfrak h$ is nondegenerate. [step 2.1] ∎
