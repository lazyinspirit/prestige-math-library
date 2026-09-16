---
id: fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root
kind: false-statement
title: If alpha and beta are roots then alpha plus beta is always a root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-string-property, cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, prop-brackets-of-root-spaces, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Corollary 2.35 and Proposition 2.21"
landmark: false
proof_strategy: direct
---

## Statement

If $\alpha$ and $\beta$ are roots of a complex semisimple Lie algebra relative
to a Cartan subalgebra, then $\alpha+\beta$ is again a root.

## Facts & Assumptions

**Given:** Roots are nonzero functionals with $\mathfrak g_\alpha\ne0$ ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]), and $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ with $\mathfrak g_\gamma=0$ for $\gamma$ neither a root nor $0$ ([[prop-brackets-of-root-spaces]]). The set of indices $k$ with $\beta+k\alpha\in\Phi\cup\{0\}$ is a nonempty interval $\{-p,\dots,q\}$ ([[thm-root-string-property]]), and for a root $\alpha$ the only scalar multiples of $\alpha$ that are roots are $\pm\alpha$ ([[cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

## Refutation

**Proof technique:** explicit witness.

1.1 Let $\alpha$ be any root and put $\beta=-\alpha$, which is a root because the opposite root space is nonzero. Then $\alpha+\beta=0$, and $0$ is not a root by definition, since a root is required to be nonzero. [given, algebra]

2.1 A second, nontrivial failure occurs with $\beta=\alpha$: then $\alpha+\beta=2\alpha$, and $2\alpha$ is not a root because the only scalar multiples of the root $\alpha$ that are roots are $\pm\alpha$. [given, step 1.1, algebra]

3.1 Neither failure contradicts the bracket inclusion of the given facts, which only asserts $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ and therefore says that the bracket vanishes when $\alpha+\beta$ is not a root or $0$. Hence the claim that $\alpha+\beta$ is always a root is false. [given, step 1.1, step 2.1, algebra] ∎
