---
id: thm-root-sl-two-triple
kind: theorem
title: The root sl_2 triple
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coroot-of-a-lie-algebra-root, def-killing-dual-vector-of-a-root, def-special-linear-lie-algebra-sl-two, prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra, cor-opposite-root-spaces-pair-nondegenerately, prop-brackets-of-root-spaces, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, prop-killing-form-orthogonality-of-root-spaces, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Lemma 19.16(ii)"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ be a root of a finite-dimensional complex semisimple Lie algebra
$\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$, with coroot
$h_\alpha$ as in [[def-coroot-of-a-lie-algebra-root]]. Then there are
$e_\alpha\in\mathfrak g_\alpha$ and $f_\alpha\in\mathfrak g_{-\alpha}$ with

$$[e_\alpha,f_\alpha]=h_\alpha,\qquad [h_\alpha,e_\alpha]=2e_\alpha,\qquad [h_\alpha,f_\alpha]=-2f_\alpha .$$

Consequently the span of $e_\alpha,f_\alpha,h_\alpha$ is a copy of
$\mathfrak{sl}_2$ inside $\mathfrak g$
([[def-special-linear-lie-algebra-sl-two]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h,\alpha$ and the Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it licenses the Killing-dual, coroot, and opposite-root pairing facts in [L1]--[L3].

[L1] The pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}\to\mathbb C$, $(x,y)\mapsto B(x,y)$, is nondegenerate ([[cor-opposite-root-spaces-pair-nondegenerately]]).

[L2] $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb CH_\alpha$ ([[prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]]); the Killing form is invariant and its restriction to $\mathfrak h$ is nondegenerate ([[prop-trace-forms-are-symmetric-and-invariant]], [[prop-killing-form-orthogonality-of-root-spaces]]).

[L3] $B(H_\alpha,H)=\alpha(H)$ for $H\in\mathfrak h$, and $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ with $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)\ne0$, so $\alpha(h_\alpha)=2$ ([[def-coroot-of-a-lie-algebra-root]], [[def-killing-dual-vector-of-a-root]]).

[L4] The root spaces are the eigenspaces of $\operatorname{ad}_{\mathfrak h}$ ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]), and $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathfrak g_0$ ([[prop-brackets-of-root-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Choose $0\ne e\in\mathfrak g_\alpha$, which is possible because $\alpha$ is a root. By [L1] the linear functional $y\mapsto B(e,y)$ on the nonzero space $\mathfrak g_{-\alpha}$ is not identically zero, hence surjective onto $\mathbb C$; choose $f\in\mathfrak g_{-\alpha}$ with $B(e,f)=2/\alpha(H_\alpha)$, a nonzero number by [L3]. [A1, L1, L3, algebra]

2.1 For every $H\in\mathfrak h$, invariance and the root-space identity give $B([e,f],H)=B(e,[f,H])=\alpha(H)B(e,f)=B(B(e,f)H_\alpha,H)$. Both $[e,f]$ and $H_\alpha$ lie in $\mathfrak h$ by [L2], so nondegeneracy of $B|_{\mathfrak h}$ yields $[e,f]=B(e,f)H_\alpha=\frac{2}{\alpha(H_\alpha)}H_\alpha=h_\alpha$. By [L4] and [L3], $[h_\alpha,e]=\alpha(h_\alpha)e=2e$ and $[h_\alpha,f]=-2f$. Thus all three bracket relations of [[def-special-linear-lie-algebra-sl-two]] hold for $(e,f,h_\alpha)$. [L2, L3, L4, step 1.1, algebra]

3.1 Since $0\ne e\in\mathfrak g_\alpha$ and $0\ne f\in\mathfrak g_{-\alpha}$ lie in distinct root spaces while $h_\alpha\in\mathfrak h$, the three elements are linearly independent, so their span is three-dimensional and by step 2.1 is closed under the bracket with the relations of $\mathfrak{sl}_2$; by [[def-special-linear-lie-algebra-sl-two]] it is a copy of $\mathfrak{sl}_2$. Setting $e_\alpha=e$ and $f_\alpha=f$ proves the statement. [step 1.1, step 2.1, algebra] ∎
