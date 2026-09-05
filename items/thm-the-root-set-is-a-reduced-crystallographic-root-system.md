---
id: thm-the-root-set-is-a-reduced-crystallographic-root-system
kind: theorem
title: "The root set is a reduced crystallographic root system"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-killing-form-pairs-only-opposite-root-spaces, def-killing-dual-vector-attached-to-a-root, prop-opposite-root-spaces-bracket-to-the-killing-dual-line]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

With the bilinear form induced on $\mathfrak h^*$ by the Killing form, the root set $\Phi$ of a complex semisimple Lie algebra is a finite reduced crystallographic root system.
Moreover, every root space $\mathfrak g_\alpha$ is one-dimensional.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and its root set $\Phi\subseteq \mathfrak h^*$.

## Proof

**Proof technique:** direct.

1.1 Orthogonality of distinct root spaces and nondegeneracy of the Killing form imply that $B$ restricts to a nondegenerate pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}\to\mathbb C$. Choose $e_\alpha,f_\alpha$ with $B(e_\alpha,f_\alpha)\ne0$. Then [[prop-opposite-root-spaces-bracket-to-the-killing-dual-line]] gives $[e_\alpha,f_\alpha]=B(e_\alpha,f_\alpha)H_\alpha$. The scalar $\alpha(H_\alpha)$ is nonzero: otherwise the generated three-dimensional algebra would be solvable, so its adjoint action could be triangularized, making $\operatorname{ad}[e_\alpha,f_\alpha]$ nilpotent; but this element lies in $\mathfrak h$ and acts semisimply, forcing it to be zero, a contradiction. After rescaling, $e_\alpha,f_\alpha$ and $h_\alpha:=2H_\alpha/\alpha(H_\alpha)$ form an $\mathfrak{sl}_2$-triple. [given, construct, algebra]

2.1 The subspace $$\mathbb C H_\alpha\oplus\bigoplus_{k\ne0}\mathfrak g_{k\alpha}$$ is a finite-dimensional module for this $\mathfrak{sl}_2$. Its zero-weight space is the line $\mathbb C H_\alpha$, so complete reducibility of $\mathfrak{sl}_2$-modules leaves one irreducible summand with even weights. Consequently its weight-$2$ space $\mathfrak g_\alpha$ is one-dimensional. Since $[e_\alpha,e_\alpha]=0$, the raising operator kills that weight-$2$ space, so it is the highest weight: no $k\alpha$ with $|k|\ge2$ is a root. [step 1.1, algebra]

3.1 For roots $\alpha,\beta$, the root-string space $$V_{\alpha,\beta}:=\bigoplus_{k\in\mathbb Z}\mathfrak g_{\beta+k\alpha}$$ is a finite-dimensional $\mathfrak{sl}_2$-module. Since its nonzero weight spaces are one-dimensional by step 2.1, the vector in $\mathfrak g_\beta$ lies in one irreducible summand. The $h_\alpha$-weight $\beta(h_\alpha)=2(\beta,\alpha)/(\alpha,\alpha)$ is therefore an integer, and symmetry of the weights in that summand supplies the nonzero opposite-weight space $\mathfrak g_{\beta-\beta(h_\alpha)\alpha}$. Thus $s_\alpha(\beta)=\beta-\beta(h_\alpha)\alpha$ is again a root. [step 1.1, step 2.1, algebra]

4.1 The roots span $\mathfrak h^*$, since an element of $\mathfrak h$ annihilated by every root would commute with all of $\mathfrak g$ and hence be zero. On the real span of the coroots, the Killing form is positive definite: $B(h,h)=\operatorname{tr}(\operatorname{ad}_h^2)$ is the sum of squares of the real root eigenvalues and is positive for $h\ne0$. Finiteness comes from the finite root decomposition; step 2.1 gives reducedness; and step 3.1 gives crystallographic integrality and reflection stability. Hence $\Phi$ is a finite reduced crystallographic root system, and all its root spaces are one-dimensional. [step 2.1, step 3.1, algebra] ∎
