---
id: cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root
kind: corollary
title: The only scalar multiples of a root that are roots are plus or minus the root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, cor-cartan-integers-are-integral, def-coroot-of-a-lie-algebra-root, def-killing-dual-vector-of-a-root, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Corollary 19.18"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ and let $\alpha,c\alpha\in\Phi$ be roots,
where $\Phi$ is the root set of
[[def-root-and-root-space-relative-to-a-cartan-subalgebra]]. Then $c=\pm1$.

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and roots $\alpha$ and $\beta=c\alpha$.

[L1] For every root $\gamma$, its coroot is $h_\gamma=2H_\gamma/\gamma(H_\gamma)$ with $H_\gamma$ the Killing-dual vector and $\gamma(H_\gamma)\ne0$ ([[def-coroot-of-a-lie-algebra-root]], [[def-killing-dual-vector-of-a-root]]).

[L2] Cartan integers are integral: $\beta(h_\alpha)\in\mathbb Z$ and $\alpha(h_\beta)\in\mathbb Z$ for roots $\alpha,\beta$ ([[cor-cartan-integers-are-integral]]).

[L3] If $\gamma$ is a root then $2\gamma$ is not a root ([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

## Proof

**Proof technique:** direct.

1.1 Since $H_{c\alpha}=cH_\alpha$ by the defining equation $B(H_{c\alpha},H)=c\alpha(H)$, the coroots satisfy $h_{c\alpha}=\frac{2cH_\alpha}{c\alpha(cH_\alpha)}=\frac{2H_\alpha}{c\,\alpha(H_\alpha)}=h_\alpha/c$. [L1, algebra]

2.1 By [L2] applied to the pair $(\alpha,\beta)$ we get $2c=\beta(h_\alpha)=c\,\alpha(h_\alpha)\in\mathbb Z$, and applied to the pair $(\beta,\alpha)$ we get $2/c=\alpha(h_\beta)=\alpha(h_\alpha/c)\in\mathbb Z$. [L2, step 1.1, algebra]

3.1 The two integrality statements say $c=m/2$ for some integer $m$ and $4/m\in\mathbb Z$, so $m$ divides $4$ and $c\in\{\pm\tfrac12,\pm1,\pm2\}$. [step 2.1, algebra]

4.1 Finally $c\ne2$ and $c\ne-2$, since $2\alpha$ and $-2\alpha=2(-\alpha)$ are not roots by [L3]; and $c\ne\tfrac12,-\tfrac12$, since then $2\beta=\pm\alpha$ would be twice the root $\beta$, again contradicting [L3]. Hence $c=\pm1$. [L3, step 3.1, algebra] ∎
