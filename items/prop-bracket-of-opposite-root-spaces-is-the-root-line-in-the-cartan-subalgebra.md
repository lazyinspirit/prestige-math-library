---
id: prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra
kind: proposition
title: The bracket of opposite root spaces is the root line
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-killing-dual-vector-of-a-root, cor-opposite-root-spaces-pair-nondegenerately, prop-brackets-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, prop-killing-form-orthogonality-of-root-spaces, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant]
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

Let $\alpha$ be a root of the finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$, and
let $H_\alpha\in\mathfrak h$ be its Killing-dual vector
([[def-killing-dual-vector-of-a-root]]). Then
$$[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb CH_\alpha .$$

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and a root $\alpha$, with Killing form $B$.

[L1] $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathfrak g_0=\mathfrak h$, and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$ ([[prop-brackets-of-root-spaces]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L2] $B$ is invariant and $B|_{\mathfrak h}$ is nondegenerate; $B(H_\alpha,H)=\alpha(H)$ for all $H\in\mathfrak h$ ([[prop-trace-forms-are-symmetric-and-invariant]], [[prop-killing-form-orthogonality-of-root-spaces]], [[def-killing-dual-vector-of-a-root]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}\to\mathbb C$ given by $B$ is nondegenerate ([[cor-opposite-root-spaces-pair-nondegenerately]]).

## Proof

**Proof technique:** direct.

1.1 Let $e\in\mathfrak g_\alpha$, $f\in\mathfrak g_{-\alpha}$ and $H\in\mathfrak h$. By [L1] $[e,f]\in\mathfrak h$, and invariance [L2] together with $[f,H]=\alpha(H)f$ gives $B([e,f],H)=B(e,[f,H])=\alpha(H)B(e,f)=B(e,f)B(H_\alpha,H)=B(B(e,f)H_\alpha,H)$. Since $B|_{\mathfrak h}$ is nondegenerate, $[e,f]=B(e,f)H_\alpha$. [L1, L2, algebra]

2.1 Hence every bracket of $\mathfrak g_\alpha$ with $\mathfrak g_{-\alpha}$ lies in $\mathbb CH_\alpha$, and by [L3] there are $e\in\mathfrak g_\alpha$, $f\in\mathfrak g_{-\alpha}$ with $B(e,f)\ne0$, for which step 1.1 gives $[e,f]=B(e,f)H_\alpha\ne0$ because $H_\alpha\ne0$ by [[def-killing-dual-vector-of-a-root]]. Therefore the bracket is exactly the line $\mathbb CH_\alpha$. [L2, L3, step 1.1, algebra] ∎
