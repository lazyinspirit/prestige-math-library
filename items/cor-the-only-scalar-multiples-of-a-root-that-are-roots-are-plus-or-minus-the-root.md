---
id: cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root
kind: corollary
title: The only scalar multiples of a root that are roots are plus or minus the root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-cartan-integers-are-integral, def-coroot-of-a-lie-algebra-root, def-killing-dual-vector-of-a-root, def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-root-sl-two-triple, prop-brackets-of-root-spaces, prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra, thm-trace-of-ab-equals-trace-of-ba]
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

[L3] For every root $\gamma$ there are $e_\gamma\in\mathfrak g_\gamma$, $f_\gamma\in\mathfrak g_{-\gamma}$, and $h_\gamma=[e_\gamma,f_\gamma]$ satisfying the $\mathfrak{sl}_2$ relations ([[thm-root-sl-two-triple]]).

[L4] Root-space brackets add their weights, and the opposite bracket is the line $\mathbb CH_\gamma=\mathbb Ch_\gamma$ ([[prop-brackets-of-root-spaces]], [[prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]]).

[L5] The trace of a commutator of finite-dimensional endomorphisms is zero ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

**Proof technique:** direct.

1.1 Since $H_{c\alpha}=cH_\alpha$ by the defining equation $B(H_{c\alpha},H)=c\alpha(H)$, the coroots satisfy $h_{c\alpha}=\frac{2cH_\alpha}{c\alpha(cH_\alpha)}=\frac{2H_\alpha}{c\,\alpha(H_\alpha)}=h_\alpha/c$. [L1, algebra]

1.2 We first prove that twice a root is never a root. For a root $\gamma$, put $W_\gamma=\mathbb Ce_\gamma\oplus\mathbb Ch_\gamma\oplus\bigoplus_{j\ge1}\mathfrak g_{-j\gamma}$. This is a finite direct sum because the root spaces are joint eigenspaces for distinct functionals in the finite-dimensional space $\mathfrak g$. It is stable under the adjoint action of the triple in [L3]: $\operatorname{ad}_{e_\gamma}$ and $\operatorname{ad}_{f_\gamma}$ shift the root-space index by $1$ and $-1$, respectively, the exceptional opposite bracket lands in $\mathbb Ch_\gamma$ by [L4], and $\operatorname{ad}_{h_\gamma}$ preserves every displayed summand. [L3, L4, algebra]

2.1 By [L2] applied to the pair $(\alpha,\beta)$ we get $2c=\beta(h_\alpha)=c\,\alpha(h_\alpha)\in\mathbb Z$, and applied to the pair $(\beta,\alpha)$ we get $2/c=\alpha(h_\beta)=\alpha(h_\alpha/c)\in\mathbb Z$. [L2, step 1.1, algebra]

2.2 On $W_\gamma$ one has $\operatorname{ad}_{h_\gamma}=[\operatorname{ad}_{e_\gamma},\operatorname{ad}_{f_\gamma}]$, so [L5] makes its trace zero. Its eigenvalues on the displayed direct sum are $2$ on $\mathbb Ce_\gamma$, $0$ on $\mathbb Ch_\gamma$, and $-2j$ on $\mathfrak g_{-j\gamma}$. Therefore $0=2-2\sum_{j\ge1}j\dim\mathfrak g_{-j\gamma}$, so $\sum_{j\ge1}j\dim\mathfrak g_{-j\gamma}=1$. Hence $\mathfrak g_{-j\gamma}=0$ for every $j\ge2$. Applying the same argument to the root $-\gamma$ gives $\mathfrak g_{j\gamma}=0$ for every $j\ge2$; in particular $2\gamma$ is not a root. [L3, L5, step 1.2, algebra]

3.1 The two integrality statements say $c=m/2$ for some integer $m$ and $4/m\in\mathbb Z$, so $m$ divides $4$ and $c\in\{\pm\tfrac12,\pm1,\pm2\}$. [step 2.1, algebra]

4.1 Now $c\ne2$ and $c\ne-2$, since $2\alpha$ and $-2\alpha=2(-\alpha)$ are not roots by step 2.2; and $c\ne\tfrac12,-\tfrac12$, since then $2\beta=\pm\alpha$ would be twice the root $\beta$, again contradicting step 2.2. Hence $c=\pm1$. [step 3.1, step 2.2, algebra] ∎
