---
id: cor-opposite-root-spaces-pair-nondegenerately
kind: corollary
title: Opposite root spaces pair nondegenerately
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-killing-form-orthogonality-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-cartans-semisimplicity-criterion, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.17(b),(c)"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ be a root of the finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Then $-\alpha$
is a root, and the Killing form restricts to a nondegenerate pairing
$\mathfrak g_\alpha\times\mathfrak g_{-\alpha}\to\mathbb C$; in particular
$\mathfrak g_{-\alpha}\ne0$ and $B$ is nonzero on $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and a root $\alpha$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it licenses the orthogonality and root-space decomposition used in [L1] and [L2].

[L1] $B(\mathfrak g_\gamma,\mathfrak g_\delta)=0$ whenever $\gamma+\delta\ne0$, and $B|_{\mathfrak h}$ is nondegenerate ([[prop-killing-form-orthogonality-of-root-spaces]]).

[L2] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$ is a direct sum ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]), and $B$ is nondegenerate on the semisimple algebra $\mathfrak g$ ([[thm-cartans-semisimplicity-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Let $0\ne x\in\mathfrak g_\alpha$. By nondegeneracy of $B$ there is $y\in\mathfrak g$ with $B(x,y)\ne0$; write $y=y_0+\sum_\gamma y_\gamma$ according to [L2]. By [L1] all summands vanish in the pairing with $x$ except possibly $y_{-\alpha}$, whose weight space would make $-\alpha$ a root; hence $B(x,y_{-\alpha})\ne0$, so $-\alpha$ is a root and $\mathfrak g_{-\alpha}\ne0$. [A1, L1, L2, algebra]

2.1 The restriction of $B$ to $\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ is nondegenerate: if $x\in\mathfrak g_\alpha$ pairs to zero with all of $\mathfrak g_{-\alpha}$, then it pairs to zero with every weight space and with $\mathfrak h$ by [L1], hence with $\mathfrak g$, so $x=0$; the same argument applies to $\mathfrak g_{-\alpha}$. Since $\mathfrak g_\alpha\ne0$ by definition of a root, this nondegenerate pairing is nonzero. [L1, L2, step 1.1, algebra] ∎
