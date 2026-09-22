---
id: fs-every-weight-vector-is-a-highest-weight-vector
kind: false-statement
title: Not every weight vector is highest
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weight-and-weight-space-of-a-lie-algebra-representation, def-highest-weight-vector-and-highest-weight-module, def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra, def-special-linear-lie-algebra-sl-two, prop-root-vectors-shift-weight-spaces, thm-finite-dimensional-representations-of-sl-two, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §§1–3, worked examples"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Every weight vector in a finite-dimensional module
over a complex semisimple Lie algebra is a highest weight vector.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lie algebra $\mathfrak{sl}_2(\mathbb C)$ with its standard basis $e,f,h$ ([[def-special-linear-lie-algebra-sl-two]]), the Cartan subalgebra $\mathfrak h=\mathbb Ch$, the root $\alpha$ with $\alpha(h)=2$, the positive system $\{\alpha\}$, and the standard two-dimensional module $V=\mathbb C^2$ with basis $u_1=\binom10$, $u_2=\binom01$, on which $e,f,h$ act by their matrices $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, $h=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[A1] The Axiom of Choice is assumed; it enters through the root-space and highest-weight theory used below ([[def-axiom-of-choice]]).

[L1] For the chosen root and positive system the subalgebra $\mathfrak n^+$ is the root space $\mathfrak g_\alpha$, which for $\mathfrak{sl}_2$ equals $\mathbb Ce$ because $[h,e]=2e$ ([[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]], [[def-special-linear-lie-algebra-sl-two]]).

[L2] A weight vector $v\in V_\mu$ is a highest weight vector exactly when it is nonzero and $\mathfrak n^+\cdot v=0$ ([[def-highest-weight-vector-and-highest-weight-module]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[L3] The matrix action on the basis is $h\cdot u_1=u_1$, $h\cdot u_2=-u_2$, $e\cdot u_1=0$, $e\cdot u_2=u_1$, so $u_1$ has weight $\alpha/2$ and $u_2$ has weight $-\alpha/2$, and $V$ is a finite-dimensional module ([[def-special-linear-lie-algebra-sl-two]], [[thm-finite-dimensional-representations-of-sl-two]]).

## Refutation

**Proof technique:** direct.

1.1 The vector $u_2$ is a weight vector: $h\cdot u_2=(-1)u_2$, so with $\mu$ the functional $\mu(h)=-1$ we have $0\ne u_2\in V_\mu$. [L3, A1]

1.2 But $u_2$ is not a highest weight vector: $e\in\mathfrak n^+$ by [L1] and $e\cdot u_2=u_1\ne0$ by [L3], so $\mathfrak n^+\cdot u_2\ne0$ and [L2] excludes $u_2$ from the highest weight vectors. [L1, L2, L3]

2.1 Hence the finite-dimensional $\mathfrak{sl}_2$-module $V$ contains the weight vector $u_2$ that is not a highest weight vector, so the universal statement of the Statement section is false; the failed conclusion is that $\mathfrak n^+$ must annihilate every weight vector. [step 1.1, step 1.2] ∎
