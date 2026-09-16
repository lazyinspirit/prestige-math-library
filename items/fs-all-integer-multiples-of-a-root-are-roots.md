---
id: fs-all-integer-multiples-of-a-root-are-roots
kind: false-statement
title: All integer multiples of a root are roots
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-root-string-property, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.21"
landmark: false
proof_strategy: direct
---

## Statement

If $\alpha$ is a root of a complex semisimple Lie algebra, then every integer
multiple $k\alpha$ with $k\in\mathbb Z$ is again a root.

## Facts & Assumptions

**Given:** For a root $\alpha$ the only scalar multiples of $\alpha$ that are roots are $\pm\alpha$ ([[cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root]]), and in particular $2\alpha$ is not a root ([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]); the root-string property describes the roots of the form $\beta+k\alpha$ ([[thm-root-string-property]]). The root spaces are the eigenspaces of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], and $\mathfrak{sl}_2(\mathbb C)=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$ is the Lie algebra of [[def-special-linear-lie-algebra-sl-two]].

## Refutation

**Proof technique:** explicit witness.

1.1 Take $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with Cartan subalgebra $\mathbb Ch$ and the root $\alpha$ determined by $\alpha(h)=2$. Then the root spaces are $\mathfrak g_\alpha=\mathbb Ce$ and $\mathfrak g_{-\alpha}=\mathbb Cf$, and there are no other roots. [given, algebra]

2.1 The integer multiple $2\alpha$ is not a root: $\mathfrak g_{2\alpha}$ would be the eigenspace of $\operatorname{ad}_h$ with eigenvalue $4$, whereas the eigenvalues of $\operatorname{ad}_h$ on $\mathfrak{sl}_2(\mathbb C)$ are $2,0,-2$; alternatively $2\alpha$ is a scalar multiple of the root $\alpha$ other than $\pm\alpha$. [given, step 1.1, algebra]

3.1 Likewise $k\alpha$ is not a root for every integer $k$ with $|k|\ge2$, while $0=0\cdot\alpha$ is not a root either because roots are nonzero by definition. Hence not all integer multiples of a root are roots, and the statement is false. [given, step 1.1, step 2.1, algebra] ∎
