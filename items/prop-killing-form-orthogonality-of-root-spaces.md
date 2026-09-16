---
id: prop-killing-form-orthogonality-of-root-spaces
kind: proposition
title: Orthogonality of root spaces and nondegeneracy on the Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-brackets-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.17"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with Killing form $B$, and let
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ be the root set
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

(i) If $\alpha,\beta\in\Phi\cup\{0\}$ and $\alpha+\beta\ne0$, then
$B(\mathfrak g_\alpha,\mathfrak g_\beta)=0$.
(ii) The restriction $B|_{\mathfrak h}$ is nondegenerate.

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and roots $\alpha,\beta$.

[L1] The Killing form is the trace form of the adjoint representation, and trace forms of finite-dimensional representations are symmetric and invariant: $B([z,x],y)+B(x,[z,y])=0$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]]).

[L2] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$, and $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[prop-brackets-of-root-spaces]]).

[L3] $B$ is nondegenerate because $\mathfrak g$ is semisimple ([[thm-cartans-semisimplicity-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_\beta$ and $H\in\mathfrak h$. Invariance [L1] gives $0=B([H,x],y)+B(x,[H,y])=(\alpha(H)+\beta(H))B(x,y)$. If $\alpha+\beta\ne0$ then some $H\in\mathfrak h$ has $(\alpha+\beta)(H)\ne0$, and $B(x,y)=0$ follows; this proves (i). [L1, L2, algebra]

2.1 For (ii) let $x\in\mathfrak h$ satisfy $B(x,\mathfrak h)=0$. By (i) every $\mathfrak g_\gamma$ with $\gamma\ne0$ is orthogonal to $\mathfrak h=\mathfrak g_0$, so $B(x,\mathfrak g_\gamma)=0$ for all $\gamma\ne0$ as well, and by [L2] $B(x,\mathfrak g)=0$. Nondegeneracy [L3] gives $x=0$. [L2, L3, step 1.1, algebra] ∎
