---
id: prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces
kind: proposition
title: Finite-dimensional modules decompose into weight spaces
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weight-and-weight-space-of-a-lie-algebra-representation, thm-root-sl-two-triple, thm-finite-dimensional-representations-of-sl-two, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, def-representation-of-a-lie-algebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "Theorem 8.2 and proof"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$, and let $V$ be a
finite-dimensional representation of $\mathfrak g$
([[def-representation-of-a-lie-algebra]]). Then $V$ is the direct sum of its
weight spaces for $\mathfrak h$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]):
$$V=\bigoplus_{\mu\in\mathfrak h^*}V_\mu ,$$
and only finitely many of the spaces $V_\mu$ are nonzero.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and a finite-dimensional representation $V$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory supplying [L1] and [L4], whose contracts carry the assumption ([[def-axiom-of-choice]]).

[L1] For every root $\alpha$ of $(\mathfrak g,\mathfrak h)$ there are $e_\alpha\in\mathfrak g_\alpha$ and $f_\alpha\in\mathfrak g_{-\alpha}$ with $[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$ and $[h_\alpha,f_\alpha]=-2f_\alpha$, so that $\operatorname{span}\{e_\alpha,f_\alpha,h_\alpha\}$ is a copy of $\mathfrak{sl}_2$ ([[thm-root-sl-two-triple]]).

[L2] For a nonzero finite-dimensional module over $\mathfrak{sl}_2$, the operator $h$ acts diagonalisably with integer eigenvalues ([[thm-finite-dimensional-representations-of-sl-two]]).

[L3] A family of diagonalisable endomorphisms of a finite-dimensional vector space is simultaneously diagonalisable if and only if its members commute pairwise ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L4] The roots of $(\mathfrak g,\mathfrak h)$ form a reduced crystallographic Euclidean root system on $E=\operatorname{span}_{\mathbb R}\Phi$ whose simple coroots span $\mathfrak h$ over $\mathbb C$; in particular the coroots $h_\alpha$ with $\alpha$ ranging over the finitely many roots span $\mathfrak h$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).

## Proof

**Proof technique:** direct.

1.1 If $V=0$, every weight space is zero and the asserted direct sum is the empty direct sum, so the conclusion is immediate. If the root set $\Phi$ is empty, [L4] gives $\mathfrak h=0$, and then $V=V_0$ is already the required decomposition. Assume henceforth that $V\ne0$ and $\Phi\ne\varnothing$. Fix a root $\alpha$ and the $\mathfrak{sl}_2$-triple $(e_\alpha,f_\alpha,h_\alpha)$ of [L1]; restricting the representation to this three-dimensional subalgebra makes $V$ a nonzero finite-dimensional $\mathfrak{sl}_2$-module, so by [L2] the operator $\rho(h_\alpha)$ is diagonalisable. [A1, L1, L2, L4]

1.2 The coroots span $\mathfrak h$ over $\mathbb C$ by [L4] and the root set $\Phi$ is finite, so there are roots $\alpha_1,\dots,\alpha_N$ with $\mathfrak h=\operatorname{span}_{\mathbb C}\{h_{\alpha_1},\dots,h_{\alpha_N}\}$. [A1, L4]

2.1 Every $H\in\mathfrak h$ is a linear combination $H=\sum_{i=1}^Nc_ih_{\alpha_i}$; the operators $\rho(h_{\alpha_1}),\dots,\rho(h_{\alpha_N})$ are diagonalisable by step 1.1 and commute pairwise because $\mathfrak h$ is abelian and $\rho$ preserves brackets, so by [L3] they are simultaneously diagonalisable, and in a common eigenbasis every $\rho(H)$ is diagonal, hence diagonalisable. [A1, L2, L3, step 1.1]

3.1 The family $\{\rho(H):H\in\mathfrak h\}$ consists of pairwise commuting diagonalisable endomorphisms by step 2.1, so [L3] provides a basis $v_1,\dots,v_n$ of $V$ and functionals $\mu_1,\dots,\mu_n\in\mathfrak h^*$ with $\rho(H)v_j=\mu_j(H)v_j$ for all $H\in\mathfrak h$ and all $j$. [A1, L3, step 2.1]

4.1 A basis vector $v_j$ spans a nonzero weight space $V_{\mu_j}$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]]), while a vector $v\in V_\mu$ has $\rho(H)v=\mu(H)v$ for all $H$ and is therefore a linear combination of the basis vectors $v_j$ with $\mu_j=\mu$; hence each $V_\mu$ is the span of those $v_j$ with $\mu_j=\mu$, distinct weights have disjoint sets of basis vectors, and $V=\bigoplus_\mu V_\mu$, with only finitely many nonzero summands. [A1, step 3.1]

5.1 The stated direct-sum decomposition and finiteness of the list of weights are proved. [step 4.1] ∎
