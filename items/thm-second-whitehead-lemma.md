---
id: thm-second-whitehead-lemma
kind: theorem
title: Second Whitehead lemma
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-casimir-operator-relative-to-an-invariant-form, lem-the-casimir-operator-is-basis-independent-and-intertwining, thm-weyls-complete-reducibility-theorem, thm-second-lie-algebra-cohomology-classifies-abelian-extensions, prop-ideals-and-quotients-of-semisimple-lie-algebras, thm-cartans-solvability-criterion, lem-orthogonal-complements-under-invariant-forms-are-ideals]
landmark: true
proof_strategy: reduction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, Theorem 7.8.9 and Corollary 7.8.12"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.8, Theorem 7.8.9 and Corollary 7.8.12, printed pp. 245–246"
---

## Statement

If $\mathfrak g$ is finite-dimensional semisimple over a characteristic-zero
field and $M$ is a finite-dimensional $\mathfrak g$-module, then
$H^2(\mathfrak g,M)=0$.

## Facts & Assumptions

**Given:** Such $\mathfrak g$ and $M$.

[L1] Weyl decomposes $M$ as a finite direct sum of simple modules ([[thm-weyls-complete-reducibility-theorem]]).

[L2] The Casimir is central and acts as an intertwiner ([[lem-the-casimir-operator-is-basis-independent-and-intertwining]]).

[L3] $H^2$ classifies abelian extensions, including the split zero class ([[thm-second-lie-algebra-cohomology-classifies-abelian-extensions]]).

[L4] Every ideal of a semisimple algebra has a complementary ideal ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]).

[L5] The trace-form version of Cartan's criterion makes an algebra solvable when the required pairings vanish ([[thm-cartans-solvability-criterion]]).

[L6] The radical of an invariant trace form is an ideal ([[lem-orthogonal-complements-under-invariant-forms-are-ideals]]).

[L7] A nondegenerate invariant form and trace-dual bases define the Casimir operator ([[def-casimir-operator-relative-to-an-invariant-form]]).

## Proof

**Proof technique:** Casimir homotopy plus central-extension splitting.

1.1 Let $S$ be a simple module with nontrivial action, put $\mathfrak k=\ker\rho$, and use [L4] to choose a complementary ideal $\mathfrak h$ in $\mathfrak g$. The two ideals commute, $\rho|_{\mathfrak h}$ is faithful, and $\mathfrak h$ is nonzero semisimple. The radical of its trace form on $S$ is an ideal by [L6]; its restricted trace form meets the hypothesis of [L5], so that radical is solvable and hence zero. Thus the trace form on $\mathfrak h$ is nondegenerate and defines the dual-basis Casimir operator $C$ of [L7]. By [L2], $C$ intertwines the simple module. Its trace is $\dim\mathfrak h\neq0$, so $C$ is nonzero and therefore invertible by the kernel-image argument for an endomorphism of a simple module. [L2, L4, L5, L6, L7, algebra]

1.2 It remains to treat the trivial simple module $k$. By [L3], take a central extension $0\to k\to\mathfrak e\xrightarrow{\pi}\mathfrak g\to0$. For $x\in\mathfrak g$, choose a lift $\widetilde x$ and define $x\cdot y=[\widetilde x,y]$ on $\mathfrak e$. Centrality makes this independent of the lift, Jacobi makes it a representation, and $\pi$ is a $\mathfrak g$-map for the adjoint action on $\mathfrak g$. By [L1], the surjection has a module section $\sigma$. Taking $\widetilde x=\sigma(x)$, equivariance gives $[\sigma(x),\sigma(y)]=\sigma([x,y])$, so $\sigma$ is a Lie section. The extension splits and [L3] gives $H^2(\mathfrak g,k)=0$. [L1, L3, algebra]

2.1 For the trace-dual bases $(e_i)$ and $(e^i)$ from [L7] in the ideal $\mathfrak h$, define $H=\sum_i\rho(e_i)\iota_{e^i}$ on the CE cochains of $\mathfrak g$. The inverse tensor $\sum_i e_i\otimes e^i$ is invariant under $\mathfrak h$; it is also invariant under $\mathfrak k$ because the complementary ideals commute. Expanding the CE differential therefore gives $dH+Hd=C$: the value-action terms give $\sum_i\rho(e_i)\rho(e^i)$ and the argument-action terms cancel in pairs by this invariance. Hence $C$ acts null-homotopically in positive degrees. Since $C$ is invertible by step 1.1 and commutes with $d$, composing $H$ with $C^{-1}$ contracts every positive-degree cocycle. In particular $H^2(\mathfrak g,S)=0$. [L2, L7, step 1.1, algebra]

3.1 The CE complex commutes with finite direct sums in the coefficient module. Decompose $M$ by [L1]; steps 2.1 and 1.2 make the second cohomology of every simple summand zero, hence $H^2(\mathfrak g,M)=0$. The zero module and zero algebra are included: for $\mathfrak g=0$, $\Lambda^2\mathfrak g=0$. No choice principle is used beyond finite-dimensional basis choices. [L1, step 2.1, step 1.2] ∎