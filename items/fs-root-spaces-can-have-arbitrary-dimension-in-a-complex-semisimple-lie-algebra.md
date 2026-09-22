---
id: fs-root-spaces-can-have-arbitrary-dimension-in-a-complex-semisimple-lie-algebra
kind: false-statement
title: Root spaces can have arbitrary dimension in a complex semisimple Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-special-linear-lie-algebra-sl-two, def-coroot-of-a-lie-algebra-root, thm-root-sl-two-triple]
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
axiom_strength: "ZF + AC; inherited from the one-dimensionality and root-triple suppliers."
---

## Statement

Assume AC ([[def-axiom-of-choice]]). The root spaces of a complex semisimple Lie algebra relative to a Cartan
subalgebra can have arbitrary dimension, so no uniform bound on
$\dim\mathfrak g_\alpha$ holds.

## Facts & Assumptions

**Given:** AC; root spaces are the eigenspaces $\mathfrak g_\alpha=\{x:[H,x]=\alpha(H)x\text{ for all }H\in\mathfrak h\}$ of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], and for a root $\alpha$ the theorem [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]] asserts $\dim\mathfrak g_\alpha=1$. In $\mathfrak{sl}_2(\mathbb C)=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$ ([[def-special-linear-lie-algebra-sl-two]]) the Cartan subalgebra $\mathbb Ch$ has a root $\alpha$ with $\alpha(h)=2$, and the root triple of [[thm-root-sl-two-triple]] realizes the roots $\pm\alpha$ ([[def-coroot-of-a-lie-algebra-root]]).

## Refutation

**Proof technique:** explicit witness.

1.1 Take $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with the Cartan subalgebra $\mathfrak h=\mathbb Ch$. Its roots are the nonzero functionals $\alpha$ with $\mathfrak g_\alpha\ne0$; since $[h,e]=2e$ and $[h,f]=-2f$, the functional $\alpha$ with $\alpha(h)=2$ is a root with $\mathfrak g_\alpha=\mathbb Ce$ and $-\alpha$ is a root with $\mathfrak g_{-\alpha}=\mathbb Cf$. [given, algebra]

2.1 Both root spaces are one-dimensional, so in this example the dimension is $1$ and not, say, $2$. [given, step 1.1]

3.1 More generally, the cited theorem gives $\dim\mathfrak g_\alpha=1$ for every root of every finite-dimensional complex semisimple Lie algebra, so no root space has dimension $2$ or any other value different from $1$. The statement that root spaces can have arbitrary dimension is therefore false. [step 2.1, algebra] ∎
