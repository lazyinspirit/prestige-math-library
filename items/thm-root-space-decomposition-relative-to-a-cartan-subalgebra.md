---
id: thm-root-space-decomposition-relative-to-a-cartan-subalgebra
kind: theorem
title: "Root-space decomposition relative to a Cartan subalgebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $\mathfrak g$ be a complex semisimple Lie algebra and $\mathfrak h\subseteq \mathfrak g$ a Cartan subalgebra. For $\alpha\in \mathfrak h^*$, set

$$\mathfrak g_\alpha:=\{x\in \mathfrak g : [h,x]=\alpha(h)x \text{ for every } h\in \mathfrak h\}.$$

Then there is a finite set $\Phi\subseteq \mathfrak h^*\setminus\{0\}$ such that

$$\mathfrak g=\mathfrak h\oplus \bigoplus_{\alpha\in \Phi} \mathfrak g_\alpha,$$

and the nonzero summands are exactly the root spaces.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$ and a Cartan subalgebra $\mathfrak h\subseteq \mathfrak g$.

## Proof

**Proof technique:** direct.

1.1 Because $\mathfrak h$ is a Cartan subalgebra of a complex semisimple Lie algebra, the commuting operators $\operatorname{ad}(h)$ for $h\in \mathfrak h$ are simultaneously diagonalizable, so $\mathfrak g$ decomposes into common eigenspaces for the adjoint action of $\mathfrak h$. [given]

2.1 The common eigenspace for the zero functional is the centralizer of $\mathfrak h$, which equals $\mathfrak h$ because $\mathfrak h$ is self-normalizing. Every other common eigenfunctional is nonzero and contributes a subspace of the displayed form $\mathfrak g_\alpha$. [step 1.1]

3.1 Collecting the finitely many nonzero weights gives the finite set $\Phi$, and the simultaneous eigenspace decomposition from step 1.1 becomes the stated direct sum decomposition. [step 1.1, step 2.1] ∎
