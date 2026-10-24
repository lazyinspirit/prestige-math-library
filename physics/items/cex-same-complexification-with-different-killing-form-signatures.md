---
id: cex-same-complexification-with-different-killing-form-signatures
kind: counterexample
title: Same complexification with different killing form signatures
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-compact-and-split-real-forms-of-sl-two-c, ex-killing-form-of-sl-two, def-killing-form-of-a-finite-dimensional-lie-algebra, def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form, thm-sylvesters-law-of-inertia, cor-real-symmetric-bilinear-forms-are-classified-by-inertia, def-definiteness-inertia-and-signature-data-over-the-reals]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, compact real forms and the sign of the Killing form, printed pp. 348-353; Chapter VI, §5, Rh versus Rih_B in sl(2,R), printed pp. 384-385"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.3-39.4, printed pp. 202-204"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement refuted

Real forms of one complex semisimple Lie algebra have congruent Killing forms;
equivalently, the inertia of the Killing form of a real semisimple Lie algebra
is determined by its complexification.

## Facts & Assumptions

**Given:** The two real Lie algebras $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$, both real forms of $\mathfrak s=\mathfrak{sl}_2(\mathbb C)$, and the basis $e,f,h$ of $\mathfrak s$ with the Killing form $B$.

[L1] $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are real forms of $\mathfrak s=\mathfrak{sl}_2(\mathbb C)$; $\mathfrak{su}(2)$ is a compact real form and $\mathfrak{sl}_2(\mathbb R)$ is a split real form ([[ex-compact-and-split-real-forms-of-sl-two-c]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]]).

[L2] The Killing form of $\mathfrak{sl}_2$ satisfies $B(h,h)=8$, $B(e,f)=B(f,e)=4$, and all other pairings of the basis $e,f,h$ vanish; equivalently $B(X,Y)=4\operatorname{tr}(XY)$ ([[ex-killing-form-of-sl-two]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The inertia $(p,q,r)$ of a real symmetric bilinear form is a congruence invariant and classifies such forms in a fixed dimension: two forms are congruent exactly when their inertias agree ([[thm-sylvesters-law-of-inertia]], [[cor-real-symmetric-bilinear-forms-are-classified-by-inertia]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).





**Proof technique:** direct computation of the two Killing forms.

1.1 The two algebras have the same complexification: by [L1] both $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are real forms of $\mathfrak s=\mathfrak{sl}_2(\mathbb C)$, so their complexifications are both isomorphic to $\mathfrak s$. [L1]

1.2 The Killing form of $\mathfrak{su}(2)$ has inertia $(0,3,0)$: for $X\in\mathfrak{su}(2)$ one has $X^{*}=-X$, and [L2] gives $B(X,X)=4\operatorname{tr}(X^2)=-4\operatorname{tr}(XX^{*})=-4\sum_{i,j}|X_{ij}|^2$, which is negative for every nonzero $X$ and zero only at $X=0$; hence $B$ is negative definite on the three-dimensional space $\mathfrak{su}(2)$, with no positive and no null directions. [L2, algebra]

1.3 The Killing form of $\mathfrak{sl}_2(\mathbb R)$ has inertia $(2,1,0)$: in the basis $(h,e,f)$ the Gram matrix of $B$ is $\begin{pmatrix}8&0&0\\ 0&0&4\\ 0&4&0\end{pmatrix}$ by [L2], whose characteristic polynomial is $(8-\lambda)(\lambda^2-16)$, so the eigenvalues are $8$, $4$ and $-4$; a symmetric matrix is diagonalized by an orthogonal change of basis, so the form has two positive and one negative square and is nondegenerate. [L2, algebra]

2.1 The two forms are not congruent: their inertias $(0,3,0)$ and $(2,1,0)$ differ, and by [L3] congruent forms of the same dimension have equal inertia. [step 1.2, step 1.3, L3]

3.1 No Lie-algebra isomorphism can exist between them: if $\varphi\colon\mathfrak{sl}_2(\mathbb R)\to\mathfrak{su}(2)$ were an isomorphism, then $\operatorname{ad}_{\varphi(X)}=\varphi\circ\operatorname{ad}_X\circ\varphi^{-1}$ would give $B_{\mathfrak{su}(2)}(\varphi X,\varphi Y)=\operatorname{tr}(\operatorname{ad}_{\varphi X}\operatorname{ad}_{\varphi Y})=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)=B_{\mathfrak{sl}_2(\mathbb R)}(X,Y)$, so the two Killing forms would be congruent via the invertible matrix of $\varphi$, contradicting step 2.1. [step 2.1, L2, algebra]

4.1 Consequently the complexification does not determine the inertia of the Killing form: the real forms $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ of the same complex algebra $\mathfrak{sl}_2(\mathbb C)$ carry Killing forms of inertia $(0,3,0)$ and $(2,1,0)$ and are not isomorphic. The compactness of $\mathfrak{su}(2)$ corresponds exactly to the vanishing of the positive part of the inertia, while the split form has a positive-definite subspace of dimension $2$. [step 1.1, step 1.2, step 1.3, step 3.1, L1]

5.1 Endpoints and scope: both algebras are three-dimensional and nondegenerate, so the nullity is $0$ in both cases and the difference is entirely in the signature; the computation is finite, uses the explicit basis of $\mathfrak{sl}_2$ only, and needs no choice principle. [step 1.2, step 1.3, algebra] ∎
