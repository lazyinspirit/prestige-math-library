---
id: prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra
kind: proposition
title: The bracket of opposite root spaces is the root line
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-killing-dual-vector-of-a-root, cor-opposite-root-spaces-pair-nondegenerately, prop-brackets-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-toral-and-maximal-toral-subalgebra, prop-killing-form-orthogonality-of-root-spaces, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Lemma 19.15"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ be a root of the finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$, and
let $H_\alpha\in\mathfrak h$ be its Killing-dual vector
([[def-killing-dual-vector-of-a-root]]). Then
$$[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb CH_\alpha .$$

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and a root $\alpha$, with Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it licenses the root decomposition, Killing-dual vector, and opposite-root pairing in [L1]--[L3].

[L1] $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathfrak g_0$, where $\mathfrak g_0$ is the simultaneous zero-weight space, and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$ is a direct sum ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[prop-brackets-of-root-spaces]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L2] $B$ is invariant and $B|_{\mathfrak h}$ is nondegenerate; $B(H_\alpha,H)=\alpha(H)$ for all $H\in\mathfrak h$ ([[prop-trace-forms-are-symmetric-and-invariant]], [[prop-killing-form-orthogonality-of-root-spaces]], [[def-killing-dual-vector-of-a-root]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}\to\mathbb C$ given by $B$ is nondegenerate ([[cor-opposite-root-spaces-pair-nondegenerately]]).

[L4] A Cartan subalgebra of a complex semisimple Lie algebra is maximal toral, and a toral subalgebra is abelian ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-toral-and-maximal-toral-subalgebra]]).

## Proof

**Proof technique:** direct.

1.1 We first prove that the zero-weight space in [L1] is $\mathfrak h$. By [L4], $\mathfrak h$ is abelian, so $\mathfrak h\subseteq\mathfrak g_0$. Conversely, if $x\in\mathfrak g_0$, write $x=H_0+\sum_{\gamma\in\Phi}x_\gamma$ by [L1]. For every $H\in\mathfrak h$, directness and $0=[H,x]=\sum_\gamma\gamma(H)x_\gamma$ imply $\gamma(H)x_\gamma=0$ for every root $\gamma$. Since each $\gamma$ is a nonzero functional, every $x_\gamma$ vanishes; hence $x=H_0\in\mathfrak h$ and $\mathfrak g_0=\mathfrak h$. In particular [L1] gives $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathfrak h$. [A1, L1, L4, algebra]

2.1 Let $e\in\mathfrak g_\alpha$, $f\in\mathfrak g_{-\alpha}$ and $H\in\mathfrak h$. By step 1.1, $[e,f]\in\mathfrak h$, and invariance [L2] together with $[f,H]=\alpha(H)f$ gives $B([e,f],H)=B(e,[f,H])=\alpha(H)B(e,f)=B(B(e,f)H_\alpha,H)$. Nondegeneracy of $B|_{\mathfrak h}$ yields $[e,f]=B(e,f)H_\alpha$, so every such bracket lies in $\mathbb CH_\alpha$. By [L3] some $e,f$ have $B(e,f)\ne0$; then their bracket is nonzero because $H_\alpha\ne0$ by [[def-killing-dual-vector-of-a-root]]. Therefore the bracket is exactly $\mathbb CH_\alpha$. [A1, L2, L3, step 1.1, algebra] ∎
