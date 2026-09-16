---
id: ex-cartan-subalgebra-and-roots-of-sl-two
kind: example
title: Cartan subalgebra and roots of sl_2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-special-linear-lie-algebra-sl-two, def-killing-dual-vector-of-a-root, def-coroot-of-a-lie-algebra-root, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Example 19.9 and Example 19.14"
landmark: false
proof_strategy: direct
---

## Example

In $\mathfrak{sl}_2(\mathbb C)=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$ of
[[def-special-linear-lie-algebra-sl-two]], with $[h,e]=2e$,
$[h,f]=-2f$, $[e,f]=h$, the line $\mathfrak h=\mathbb Ch$ is a Cartan
subalgebra; the roots are $\pm\alpha$, where $\alpha\in\mathfrak h^*$ is
determined by $\alpha(h)=2$, with root spaces $\mathfrak g_\alpha=\mathbb Ce$
and $\mathfrak g_{-\alpha}=\mathbb Cf$, so that
$\mathfrak{sl}_2=\mathfrak h\oplus\mathbb Ce\oplus\mathbb Cf$ is the
root-space decomposition
([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]). With
the Killing form of [[def-killing-form-of-a-finite-dimensional-lie-algebra]],
$B(h,h)=8$, and the Killing-dual vector and coroot of $\alpha$ are
$H_\alpha=\tfrac14h$ and $h_\alpha=h$
([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]]).

## Facts & Assumptions

**Given:** The Lie algebra $\mathfrak{sl}_2(\mathbb C)=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$ with the brackets of [[def-special-linear-lie-algebra-sl-two]], its one-dimensional subalgebra $\mathfrak h=\mathbb Ch$, the root $\alpha$ with $\alpha(h)=2$ from [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], and the Killing form of [[def-killing-form-of-a-finite-dimensional-lie-algebra]].

## Verification

**Proof technique:** direct.

1.1 The subspace $\mathfrak h=\mathbb Ch$ is a Cartan subalgebra: it is one-dimensional, hence abelian and nilpotent, and $N_{\mathfrak g}(\mathfrak h)=\{a h+be+cf:[ah+be+cf,h]\in\mathbb Ch\}$ equals $\mathbb Ch$, because $[h,h]=0$, $[e,h]=-2e$ and $[f,h]=2f$, so a normalizing element has $b=c=0$. [given, algebra]

1.2 The eigenspaces of $\operatorname{ad}_h$ are $\mathbb Ch$ with eigenvalue $0$, $\mathbb Ce$ with eigenvalue $2$ and $\mathbb Cf$ with eigenvalue $-2$. Defining $\alpha\in\mathfrak h^*$ by $\alpha(h)=2$ and using [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], the nonzero eigenspaces are $\mathfrak g_\alpha=\mathbb Ce$ and $\mathfrak g_{-\alpha}=\mathbb Cf$, so $\Phi=\{\pm\alpha\}$ and the root-space decomposition is the displayed one. [given, algebra]

1.3 Killing-form computation: $\operatorname{ad}_h=\operatorname{diag}(0,2,-2)$ on the basis $(h,e,f)$, $\operatorname{ad}_e(h)=-2e$, $\operatorname{ad}_e(e)=0$, $\operatorname{ad}_e(f)=h$, and $\operatorname{ad}_f(h)=2f$, $\operatorname{ad}_f(e)=-h$, $\operatorname{ad}_f(f)=0$. Hence $B(h,h)=\operatorname{tr}(\operatorname{ad}_h^2)=0+4+4=8$, while $B(h,e)=B(h,f)=B(e,e)=B(f,f)=0$ and $B(e,f)=4$. [given, algebra]

2.1 The dual vector $H_\alpha$ satisfies $B(H_\alpha,h)=\alpha(h)=2$; writing $H_\alpha=th$ gives $8t=2$, so $t=\tfrac14$ and $H_\alpha=\tfrac14h$; then $\alpha(H_\alpha)=\tfrac14\cdot2=\tfrac12=B(H_\alpha,H_\alpha)$, so the coroot is $h_\alpha=2H_\alpha/\alpha(H_\alpha)=2\cdot\tfrac14h/\tfrac12=h$. [given, step 1.3, algebra] ∎
