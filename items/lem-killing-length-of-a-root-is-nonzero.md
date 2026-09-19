---
id: lem-killing-length-of-a-root-is-nonzero
kind: lemma
title: The Killing length of a root is nonzero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra, cor-opposite-root-spaces-pair-nondegenerately, prop-killing-form-orthogonality-of-root-spaces, def-killing-dual-vector-of-a-root, def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-toral-and-maximal-toral-subalgebra, def-derivation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, thm-lies-theorem, prop-nilpotent-lie-algebras-are-solvable, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Lemma 2.18(c)"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Lemma 19.16(i)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\alpha$ be a root of the finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$, with
Killing-dual vector $H_\alpha$
([[def-killing-dual-vector-of-a-root]]). Then
$$B(H_\alpha,H_\alpha)=\alpha(H_\alpha)\ne0 .$$

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h,\alpha$ and the Killing form $B$.

[L1] $B(H_\alpha,H)=\alpha(H)$ for all $H\in\mathfrak h$, and $B|_{\mathfrak h}$ is nondegenerate; the pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}$ is nondegenerate ([[def-killing-dual-vector-of-a-root]], [[prop-killing-form-orthogonality-of-root-spaces]], [[cor-opposite-root-spaces-pair-nondegenerately]]).

[L2] $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb CH_\alpha$, the root spaces are the eigenspaces of $\operatorname{ad}_{\mathfrak h}$, and $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathfrak g_0=\mathfrak h$ ([[prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L3] Cartan subalgebras are maximal toral, so every element of $\mathfrak h$ has semisimple adjoint operator ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-toral-and-maximal-toral-subalgebra]]).

[L4] A solvable finite-dimensional complex Lie algebra acts triangularly on $\mathfrak g$ in some basis, by Lie's theorem, and a nilpotent Lie algebra is solvable ([[thm-lies-theorem]], [[prop-nilpotent-lie-algebras-are-solvable]]); $\operatorname{ad}_{[u,v]}=[\operatorname{ad}_u,\operatorname{ad}_v]$ ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]], [[def-derivation-of-a-lie-algebra]]).

[L5] The algebra is centerless ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]) and $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]]).

## Proof

**Proof technique:** contradiction via Lie's theorem.

1.1 By [L1] choose $e\in\mathfrak g_\alpha$ and $f\in\mathfrak g_{-\alpha}$ with $B(e,f)\ne0$ and put $z=[e,f]$. By [L2], $z\in\mathfrak h$. For every $H\in\mathfrak h$, invariance from [L5] gives $B(z,H)=B(e,[f,H])=\alpha(H)B(e,f)=B\bigl(B(e,f)H_\alpha,H\bigr)$. Nondegeneracy of $B|_{\mathfrak h}$ from [L1] therefore gives $z=B(e,f)H_\alpha\ne0$. Also $[z,e]=\alpha(z)e$ and $[z,f]=-\alpha(z)f$, while $\alpha(z)=B(e,f)\alpha(H_\alpha)$. [L1, L2, L5, algebra]

1.2 Suppose $\alpha(H_\alpha)=0$. Then $\alpha(z)=0$, so $[z,e]=[z,f]=0$, the span $\mathfrak a=\mathbb Ce+\mathbb Cf+\mathbb Cz$ is a Lie subalgebra with $[\mathfrak a,\mathfrak a]\subseteq\mathbb Cz$ and $z$ central in $\mathfrak a$; in particular $\mathfrak a$ is nilpotent and hence solvable by [L4]. By [L4] there is a basis of $\mathfrak g$ in which every $\operatorname{ad}_x$, $x\in\mathfrak a$, is upper triangular; then $\operatorname{ad}_z=[\operatorname{ad}_e,\operatorname{ad}_f]$ is a commutator of upper triangular matrices, hence strictly upper triangular and therefore nilpotent. [L2, L4, algebra]

2.1 But $z\in\mathfrak h$, and by [L3] the operator $\operatorname{ad}_z$ is semisimple; an operator that is both semisimple and nilpotent is zero, so $\operatorname{ad}_z=0$ and $z$ lies in the center. By [L5] the center is zero, so $z=0$, contradicting step 1.1, and therefore $\alpha(H_\alpha)\ne0$; because $B(H_\alpha,H_\alpha)=\alpha(H_\alpha)$ by [L1], this is the claim. [L1, L3, L5, step 1.1, step 1.2, algebra] ∎
