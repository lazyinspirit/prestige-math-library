---
id: thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system
kind: theorem
title: Roots of a complex semisimple Lie algebra form a reduced crystallographic root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, cor-cartan-integers-are-integral, cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-root-reflections-preserve-the-root-set, def-root-reflection-from-a-coroot, cor-opposite-root-spaces-pair-nondegenerately, def-coroot-of-a-lie-algebra-root, def-killing-dual-vector-of-a-root, prop-killing-form-orthogonality-of-root-spaces, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Theorem 2.42"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak h$ be a Cartan subalgebra of a
finite-dimensional complex semisimple Lie algebra $\mathfrak g$, with root set
$\Phi=\Phi(\mathfrak g,\mathfrak h)$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]) and Cartan
integers $\langle\beta,\alpha^\vee\rangle=\beta(h_\alpha)$
([[cor-cartan-integers-are-integral]]). Then:

(i) $\Phi$ is finite and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\dim\mathfrak g_\alpha=1$;
(ii) $\Phi$ spans $\mathfrak h^*$, and the common kernel $\{H\in\mathfrak h:\alpha(H)=0\text{ for all }\alpha\in\Phi\}$ is zero;
(iii) $\Phi$ is reduced and central: if $\alpha,c\alpha\in\Phi$ for a scalar $c$, then $c=\pm1$, and $-\alpha\in\Phi$ whenever $\alpha\in\Phi$;
(iv) $s_\alpha(\beta)\in\Phi$ for all $\alpha,\beta\in\Phi$, for the reflections $s_\alpha$ of [[def-root-reflection-from-a-coroot]];
(v) $\langle\beta,\alpha^\vee\rangle=\beta(h_\alpha)\in\mathbb Z$ for all $\alpha,\beta\in\Phi$.

Put $\mathfrak h_{\mathbb R}=\operatorname{span}_{\mathbb R}\{h_\alpha:\alpha\in\Phi\}$
and $E=\operatorname{span}_{\mathbb R}\Phi$. Then
$\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$,
restriction identifies $E$ with the real dual of $\mathfrak h_{\mathbb R}$,
and the Killing form induces a positive-definite inner product on $E$ for
which the displayed maps $s_\alpha$ are orthogonal reflections. Consequently
$\Phi\subset E$ is a reduced crystallographic root system. Under the
Killing-form identification $E\simeq\mathfrak h_{\mathbb R}$, its Euclidean
coroot $2\alpha/(\alpha,\alpha)$ corresponds to the Lie-algebra coroot
$h_\alpha$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g$ and $\mathfrak h$, and the root set $\Phi$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through [L1] and [L6].

[L1] $\Phi$ is finite and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum of eigenspaces, with $\dim\mathfrak g_\alpha=1$ for each root ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

[L2] If $\alpha,c\alpha\in\Phi$ then $c=\pm1$; in particular the scalar multiples of a root that are roots are $\pm\alpha$ ([[cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root]]).

[L3] $s_\alpha(\beta)\in\Phi$ for all roots $\alpha,\beta$ ([[thm-root-reflections-preserve-the-root-set]], [[def-root-reflection-from-a-coroot]]).

[L4] $\beta(h_\alpha)\in\mathbb Z$ for all roots $\alpha,\beta$ ([[cor-cartan-integers-are-integral]], [[def-coroot-of-a-lie-algebra-root]]).

[L5] $-\alpha\in\Phi$ whenever $\alpha\in\Phi$, and $\mathfrak g_\alpha$ pairs nondegenerately with $\mathfrak g_{-\alpha}$ under the Killing form ([[cor-opposite-root-spaces-pair-nondegenerately]]).

[L6] The algebra is centerless ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L7] The restriction of the Killing form to $\mathfrak h$ is nondegenerate, so every root $\alpha$ has a unique Killing-dual vector $H_\alpha$ with $B(H_\alpha,H)=\alpha(H)$; moreover $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ ([[prop-killing-form-orthogonality-of-root-spaces]], [[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]]).

## Proof

**Proof technique:** direct.

1.1 Properties (i) and (v) are [L1] and [L4]; property (iii) is [L2] together with [L5], which also shows $-\alpha\in\Phi$; and (iv) is [L3]. [L1, L2, L3, L4, L5]

1.2 For (ii): if $H\in\mathfrak h$ has $\alpha(H)=0$ for every $\alpha\in\Phi$, then $[H,\mathfrak g_\alpha]=\alpha(H)\mathfrak g_\alpha=0$ for every root and $[H,\mathfrak h]=0$ because $\mathfrak h$ is abelian; by the direct sum of [L1] this gives $[H,\mathfrak g]=0$, so $H$ is central and $H=0$ by [L6]. Hence the common kernel is zero, and therefore $\Phi$ spans $\mathfrak h^*$: a finite set of functionals spans the dual space exactly when no nonzero vector is annihilated by all of them, applied to the dual pairing between $\mathfrak h$ and $\mathfrak h^*$. [L1, L6, algebra]

2.1 Let $\mathfrak h_{\mathbb R}=\operatorname{span}_{\mathbb R}\{h_\alpha:\alpha\in\Phi\}$. The coroots span $\mathfrak h$ over $\mathbb C$: by step 1.2 the roots span $\mathfrak h^*$, their Killing-duals therefore span $\mathfrak h$, and [L7] says that each $H_\alpha$ is a nonzero complex multiple of $h_\alpha$. For $H\in\mathfrak h_{\mathbb R}$ every root value $\beta(H)$ is real, because it is a real linear combination of the integers $\beta(h_\alpha)$ from [L4]. If also $H\in i\mathfrak h_{\mathbb R}$, every $\beta(H)$ is both real and purely imaginary, hence zero; step 1.2 gives $H=0$. The complex spanning and this zero intersection prove $\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$ as real vector spaces. [L4, L7, step 1.2, algebra]

3.1 For $H,K\in\mathfrak h_{\mathbb R}$, the root-space decomposition and one-dimensionality in [L1] give $B(H,K)=\operatorname{tr}(\operatorname{ad}H\operatorname{ad}K)=\sum_{\beta\in\Phi}\beta(H)\beta(K)\in\mathbb R$. Thus $B(H,H)=\sum_{\beta\in\Phi}\beta(H)^2\ge0$, and equality forces every $\beta(H)=0$, hence $H=0$ by step 1.2. Therefore $B|_{\mathfrak h_{\mathbb R}}$ is positive definite. In particular $B(h_\alpha,h_\alpha)=4/\alpha(H_\alpha)>0$, so $H_\alpha$ is a positive real multiple of $h_\alpha$. It follows that the Killing-dual map sends $E=\operatorname{span}_{\mathbb R}\Phi$ isomorphically onto $\mathfrak h_{\mathbb R}$. Transporting $B$ across that map defines a positive-definite inner product on $E$. [L1, L7, step 1.2, step 2.1, algebra]

4.1 For the inner product of step 3.1, $2(\beta,\alpha)/(\alpha,\alpha)=2B(H_\beta,H_\alpha)/B(H_\alpha,H_\alpha)=\beta(h_\alpha)$. Hence the map $\beta\mapsto\beta-\beta(h_\alpha)\alpha$ of [L3] is precisely the orthogonal reflection in $\alpha^\perp$, and the Euclidean coroot maps to $h_\alpha$. Together with finiteness and spanning by the definition of $E$, [L2] gives reducedness, [L3] reflection stability, and [L4] crystallographic integrality. Thus $\Phi\subset E$ satisfies every reduced crystallographic root-system axiom, not merely properties (i)–(v). The Axiom of Choice is inherited through [L1], [L6], and [L7]. [A1, L1, L2, L3, L4, L7, step 3.1, algebra] ∎
