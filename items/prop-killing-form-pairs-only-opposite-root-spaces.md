---
id: prop-killing-form-pairs-only-opposite-root-spaces
kind: proposition
title: "Under Choice, the Killing form pairs only opposite root spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-killing-form-of-a-semisimple-lie-algebra, prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra, thm-root-space-decomposition-relative-to-a-cartan-subalgebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (prop-killing-form-pairs-only-opposite-root-spaces). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $B$ be the Killing form from [[def-killing-form-of-a-semisimple-lie-algebra]], and let $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_\beta$ for the root-space decomposition of [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]]. If $\alpha+\beta\ne 0$, then

$$B(x,y)=0.$$

In particular, $B$ pairs nontrivially only opposite root spaces and restricts nondegenerately to $\mathfrak h$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), roots $\alpha,\beta$ of a Cartan subalgebra $\mathfrak h$, vectors $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_\beta$, and the Killing form $B$.

[L1] Under the given Choice premise, an arbitrary Cartan subalgebra has the displayed finite root-space direct sum ([[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]]).

[L2] The Killing form is invariant and globally nondegenerate on a finite-dimensional complex semisimple Lie algebra ([[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 For any $h\in \mathfrak h$, invariance from [L2] gives $0=B([h,x],y)+B(x,[h,y])=(\alpha(h)+\beta(h))B(x,y)$. [L2, given, algebra]

2.1 If $\alpha+\beta\ne 0$, choose $h\in \mathfrak h$ with $(\alpha+\beta)(h)\ne 0$; then step 1.1 forces $B(x,y)=0$. Also, [L1] identifies $\mathfrak h$ as the zero-weight space. For $h_0\in\mathfrak h$, the same invariance argument with $x=h_0$ and $y\in\mathfrak g_\alpha$ gives $B(h_0,y)=0$, so $\mathfrak h$ is orthogonal to every nonzero root space. [L1, step 1.1]

3.1 If $h_0\in \mathfrak h$ is orthogonal to $\mathfrak h$, then step 2.1 makes it orthogonal to every nonzero root space. Under Choice, the complete direct sum in [L1] makes it orthogonal to all of $\mathfrak g$, and global nondegeneracy in [L2] gives $h_0=0$. Thus $B|_{\mathfrak h}$ is nondegenerate. [L1, L2, step 2.1] ∎
