---
id: cor-cartan-integers-are-integral
kind: corollary
title: Cartan integers are integers
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-string-property, def-coroot-of-a-lie-algebra-root, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.29(a)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). For roots
$\alpha,\beta\in\Phi$ the **Cartan integer**
$$\langle\beta,\alpha^\vee\rangle:=\beta(h_\alpha)=\frac{2B(H_\alpha,H_\beta)}{B(H_\alpha,H_\alpha)}$$
is an integer.

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and roots $\alpha,\beta$.

[L1] The set $\{k\in\mathbb Z:\mathfrak g_{\beta+k\alpha}\ne0\}$ is a nonempty interval $\{-p,\dots,q\}$ of consecutive integers with $p-q=\beta(h_\alpha)$ ([[thm-root-string-property]]).

[L2] The coroot $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ and the Killing-dual vector are as in [[def-coroot-of-a-lie-algebra-root]] ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]] supplies the root set).

## Proof

**Proof technique:** direct.

1.1 By [L1] applied to the roots $\alpha,\beta$ there are nonnegative integers $p,q$ with $p-q=\beta(h_\alpha)$. [L1, algebra]

2.1 Since $p$ and $q$ are integers, their difference $\beta(h_\alpha)$ is an integer; this is the claimed integrality. The displayed formula for the Cartan integer is the definition of $H_\alpha$ and $h_\alpha$ from [L2]. [L1, L2, step 1.1, algebra] ∎
