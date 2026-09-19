---
id: prop-the-adjoint-representation-has-highest-weight-the-highest-root
kind: proposition
title: The adjoint highest weight is the highest root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system, def-height-of-a-root-and-highest-root, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, prop-brackets-of-root-spaces, def-adjoint-representation-of-a-lie-algebra, def-simple-semisimple-and-reductive-lie-algebras, def-lie-subalgebra-ideal-and-center, def-highest-weight-vector-and-highest-weight-module, def-partial-order-on-weights, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §3"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.4, Example 8.26"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
simple Lie algebra with Cartan subalgebra $\mathfrak h$ and a fixed positive
system whose highest root is $\theta$
([[def-height-of-a-root-and-highest-root]]). Then the adjoint representation
of $\mathfrak g$ on itself
([[def-adjoint-representation-of-a-lie-algebra]]) is irreducible, and its
highest weight is $\theta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such a simple $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, a fixed positive system with highest root $\theta$, and the adjoint representation of $\mathfrak g$ on itself.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory used by the cited suppliers ([[def-axiom-of-choice]]).

[L1] The adjoint map $\operatorname{ad}:\mathfrak g\to\mathfrak{gl}(\mathfrak g)$ is a representation; a subspace $W\subseteq\mathfrak g$ is a subrepresentation if and only if $[x,W]\subseteq W$ for all $x$, that is, if and only if $W$ is an ideal of $\mathfrak g$ ([[def-adjoint-representation-of-a-lie-algebra]], [[def-lie-subalgebra-ideal-and-center]]).

[L2] $\mathfrak g$ is simple: its only ideals are $0$ and $\mathfrak g$, and $\mathfrak g\ne0$ ([[def-simple-semisimple-and-reductive-lie-algebras]]).

[L3] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\dim\mathfrak g_\alpha=1$; the adjoint action of $H\in\mathfrak h$ on $\mathfrak g_\alpha$ is multiplication by $\alpha(H)$, and $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[prop-brackets-of-root-spaces]]).

[L4] The highest root $\theta$ is a positive root with $\theta\le\gamma$ for no positive root $\gamma\ne\theta$; every positive root $\gamma$ satisfies $\gamma\le\theta$, and every negative root $-\gamma$ with $\gamma\in\Phi^+$ satisfies $-\gamma\le\theta$ ([[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]], [[def-height-of-a-root-and-highest-root]], [[def-partial-order-on-weights]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the subrepresentations of the adjoint module are exactly the ideals of $\mathfrak g$; since $\mathfrak g$ is simple and nonzero, [L2] shows that the only subrepresentations are $0$ and $\mathfrak g$, so the adjoint module is irreducible. [A1, L1, L2]

1.2 Its weights are the functionals occurring on nonzero weight spaces of $\mathfrak g$, namely $\alpha$ for $\alpha\in\Phi$ (on the line $\mathfrak g_\alpha$) and $0$ (on $\mathfrak h$); in particular $\theta$ is a weight and all weights are $\le\theta$ by [L4]. [L3, L4]

1.3 Choose $0\ne x\in\mathfrak g_\theta$; for a positive root $\alpha$ we have $[y,x]\in\mathfrak g_{\alpha+\theta}$ for $y\in\mathfrak g_\alpha$, and $\mathfrak g_{\alpha+\theta}=0$ because $\alpha+\theta>\theta$ is not a root by maximality of $\theta$; hence every positive root space annihilates $x$, that is, $\mathfrak n^+\cdot x=0$, and $H\cdot x=\theta(H)x$ for $H\in\mathfrak h$; thus $x$ is a highest weight vector of weight $\theta$. [L3, L4]

2.1 The vector $x$ of step 1.3 is nonzero, so the submodule $U(\mathfrak g)x$ is nonzero and therefore equals the whole adjoint module by irreducibility from step 1.1. Thus $x$ generates the adjoint module and is killed by $\mathfrak n^+$ with weight $\theta$; by the definition of a highest-weight module, the adjoint module has highest weight $\theta$. Together with step 1.1, this proves the assertion. ([[def-highest-weight-vector-and-highest-weight-module]], step 1.1, step 1.3) ∎
