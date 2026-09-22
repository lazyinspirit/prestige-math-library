---
id: prop-the-adjoint-representation-has-highest-weight-the-highest-root
kind: proposition
title: The adjoint highest weight is the highest root
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-height-of-a-root-and-highest-root", "thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra", "thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional", "prop-brackets-of-root-spaces", "def-adjoint-representation-of-a-lie-algebra", "def-simple-semisimple-and-reductive-lie-algebras", "def-lie-subalgebra-ideal-and-center", "def-highest-weight-vector-and-highest-weight-module", "thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates", "def-axiom-of-choice", "def-derived-series-and-solvable-lie-algebra", "def-semisimple-lie-algebra-by-vanishing-radical"]
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
verification:
  audited: 2026-09-22
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

[L2] $\mathfrak g$ is simple: it is nonabelian and its only ideals are $0$ and $\mathfrak g$ ([[def-simple-semisimple-and-reductive-lie-algebras]]).

[L3] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\dim\mathfrak g_\alpha=1$; the adjoint action of $H\in\mathfrak h$ on $\mathfrak g_\alpha$ is multiplication by $\alpha(H)$, and $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[prop-brackets-of-root-spaces]]).

[L4] The supplied highest root $\theta$ is positive and maximal in the root order ([[def-height-of-a-root-and-highest-root]]). Positive roots are nonnegative integral combinations of simple roots, so adding a positive root strictly increases this order ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L5] The derived subalgebra is an ideal; a Lie algebra is solvable when its derived series eventually vanishes ([[def-derived-series-and-solvable-lie-algebra]]). The radical is its largest solvable ideal, and semisimple means that radical is zero ([[def-semisimple-lie-algebra-by-vanishing-radical]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathfrak g$ is nonabelian, its derived ideal $[\mathfrak g,\mathfrak g]$ is nonzero. Simplicity and [L5] give $[\mathfrak g,\mathfrak g]=\mathfrak g$, so every term of the derived series equals $\mathfrak g\ne0$. Thus $\mathfrak g$ is not solvable. Its radical, being an ideal, is either zero or $\mathfrak g$; the latter would make $\mathfrak g$ solvable. Hence the radical is zero and $\mathfrak g$ is semisimple, licensing the semisimple root-space interfaces [L3]. [L2, L5, algebra]

1.2 By [L1] subrepresentations of the adjoint module are precisely ideals. Simplicity and nonzeroness imply this representation is irreducible. [L1, L2]

2.1 Apply [L3] using step 1.1. The weights of the adjoint module are the roots on their root spaces and zero on $\mathfrak h$. In particular the specified root $\theta$ has a nonzero one-dimensional weight space. Choose $0\ne x\in\mathfrak g_\theta$. For every positive root $\alpha$, the bracket $[\mathfrak g_\alpha,x]$ lies in $\mathfrak g_{\alpha+\theta}$. Since $\alpha+\theta$ is nonzero and strictly greater than $\theta$ in the root order, it cannot be a root by maximality, so this bracket vanishes. Therefore $\mathfrak n^+x=0$ and $Hx=\theta(H)x$ for every $H\in\mathfrak h$. [A1, L3, L4, step 1.1, algebra]

3.1 The subrepresentation generated by the nonzero $x$ of step 2.1 is nonzero, hence is the entire adjoint representation by step 1.2. Thus $x$ is a highest weight vector of weight $\theta$ generating the module, exactly the definition of a highest weight module ([[def-highest-weight-vector-and-highest-weight-module]]). The proof uses the given maximal root directly and does not presume that an arbitrary irreducible module has a unique maximal weight. Simplicity excludes both the zero algebra and a one-dimensional abelian algebra; no additional choice beyond [A1] is needed to select one nonzero vector in the given root line. [A1, step 1.2, step 2.1, algebra] ∎
