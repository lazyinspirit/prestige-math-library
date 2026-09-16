---
id: thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system
kind: theorem
title: Roots of a complex semisimple Lie algebra form a reduced crystallographic root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, cor-cartan-integers-are-integral, cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-root-reflections-preserve-the-root-set, def-root-reflection-from-a-coroot, prop-killing-form-orthogonality-of-root-spaces, def-killing-dual-vector-of-a-root, def-coroot-of-a-lie-algebra-root, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-axiom-of-choice]
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

Thus $\Phi$ satisfies the axioms of a reduced crystallographic root system,
with coroots $\alpha^\vee=h_\alpha$; the abstract axioms themselves are
developed on a later page, and only the listed properties are asserted here.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g$ and $\mathfrak h$, and the root set $\Phi$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through [L1] and [L6].

[L1] $\Phi$ is finite and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum of eigenspaces, with $\dim\mathfrak g_\alpha=1$ for each root ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

[L2] If $\alpha,c\alpha\in\Phi$ then $c=\pm1$; in particular the scalar multiples of a root that are roots are $\pm\alpha$ ([[cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root]]).

[L3] $s_\alpha(\beta)\in\Phi$ for all roots $\alpha,\beta$ ([[thm-root-reflections-preserve-the-root-set]], [[def-root-reflection-from-a-coroot]]).

[L4] $\beta(h_\alpha)\in\mathbb Z$ for all roots $\alpha,\beta$ ([[cor-cartan-integers-are-integral]], [[def-coroot-of-a-lie-algebra-root]]).

[L5] $-\alpha\in\Phi$ whenever $\alpha\in\Phi$, and $\mathfrak g_\alpha$ pairs nondegenerately with $\mathfrak g_{-\alpha}$ under the Killing form ([[prop-killing-form-orthogonality-of-root-spaces]], [[def-killing-dual-vector-of-a-root]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L6] The algebra is centerless ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

## Proof

**Proof technique:** direct.

1.1 Properties (i) and (v) are [L1] and [L4]; property (iii) is [L2] together with [L5], which also shows $-\alpha\in\Phi$; and (iv) is [L3]. [L1, L2, L3, L4, L5]

1.2 For (ii): if $H\in\mathfrak h$ has $\alpha(H)=0$ for every $\alpha\in\Phi$, then $[H,\mathfrak g_\alpha]=\alpha(H)\mathfrak g_\alpha=0$ for every root and $[H,\mathfrak h]=0$ because $\mathfrak h$ is abelian; by the direct sum of [L1] this gives $[H,\mathfrak g]=0$, so $H$ is central and $H=0$ by [L6]. Hence the common kernel is zero, and therefore $\Phi$ spans $\mathfrak h^*$: a finite set of functionals spans the dual space exactly when no nonzero vector is annihilated by all of them, applied to the dual pairing between $\mathfrak h$ and $\mathfrak h^*$. [L1, L6, algebra]

2.1 Collecting steps 1.1 and 1.2 gives (i)–(v). The Axiom of Choice was used only through the inherited suppliers [L1] and [L6]. [A1, L1, L6, step 1.1, step 1.2] ∎
