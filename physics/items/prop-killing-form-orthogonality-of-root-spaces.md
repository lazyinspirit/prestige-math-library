---
id: prop-killing-form-orthogonality-of-root-spaces
kind: proposition
title: Orthogonality of root spaces and nondegeneracy on the Cartan subalgebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-brackets-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-toral-and-maximal-toral-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion, def-axiom-of-choice]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with Killing form $B$, and let
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ be the root set
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

(i) If $\alpha,\beta\in\Phi\cup\{0\}$ and $\alpha+\beta\ne0$, then
$B(\mathfrak g_\alpha,\mathfrak g_\beta)=0$.
(ii) The restriction $B|_{\mathfrak h}$ is nondegenerate.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and roots $\alpha,\beta$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it licenses the root-space decomposition in [L2].

[L1] The Killing form is the trace form of the adjoint representation, and trace forms of finite-dimensional representations are symmetric and invariant: $B([z,x],y)+B(x,[z,y])=0$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]]).

[L2] The root spaces are the simultaneous weight spaces of $\operatorname{ad}_{\mathfrak h}$, $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$ is a direct sum, and $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[prop-brackets-of-root-spaces]]).

[L3] A Cartan subalgebra of a complex semisimple Lie algebra is maximal toral, and a toral subalgebra is abelian ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-toral-and-maximal-toral-subalgebra]]).

[L4] $B$ is nondegenerate because $\mathfrak g$ is semisimple ([[thm-cartans-semisimplicity-criterion]]).

## Proof

**Proof technique:** direct.

1.1 We first justify the zero-weight convention in (i). By [L3], $\mathfrak h$ is abelian, so $\mathfrak h\subseteq\mathfrak g_0$. Conversely, if $x\in\mathfrak g_0$, write $x=H_0+\sum_{\gamma\in\Phi}x_\gamma$ by [L2]. For every $H\in\mathfrak h$, the equality $0=[H,x]=\sum_\gamma\gamma(H)x_\gamma$ and directness of the decomposition give $\gamma(H)x_\gamma=0$ for every $\gamma$ and every $H$. Since each root $\gamma$ is a nonzero functional, this forces every $x_\gamma=0$, so $x=H_0\in\mathfrak h$ and $\mathfrak g_0=\mathfrak h$. Now let $x\in\mathfrak g_\alpha$ and $y\in\mathfrak g_\beta$. Invariance [L1] gives $0=B([H,x],y)+B(x,[H,y])=(\alpha(H)+\beta(H))B(x,y)$. If $\alpha+\beta\ne0$, some $H\in\mathfrak h$ has $(\alpha+\beta)(H)\ne0$, whence $B(x,y)=0$. This proves (i). [A1, L1, L2, L3, algebra]

2.1 For (ii) let $x\in\mathfrak h$ satisfy $B(x,\mathfrak h)=0$. By (i) every $\mathfrak g_\gamma$ with $\gamma\ne0$ is orthogonal to $\mathfrak h=\mathfrak g_0$, so $B(x,\mathfrak g_\gamma)=0$ for all $\gamma\ne0$ as well, and by [L2] $B(x,\mathfrak g)=0$. Nondegeneracy [L4] gives $x=0$. [A1, L2, L4, step 1.1, algebra] ∎
