---
id: thm-smooth-projective-gauss-manin-local-systems-are-semisimple
kind: theorem
title: "Semisimplicity of geometric Gauss–Manin local systems"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases, def-geometric-polarizable-hodge-variation, lem-regular-trace-kernel-descends-the-complex-socle, lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity, lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations, thm-finite-length-semisimple-module-characterizations, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. If $f:X\to S$ is smooth projective with $S$ a connected smooth quasiprojective complex variety, then every local system $R^m f_*\mathbb Q$ is semisimple over $\mathbb Q$ and remains semisimple after scalar extension to every characteristic-zero field. More generally the complex local system of every geometric polarizable rational Hodge variation is semisimple. The algebraic realization and geometric integral lattice are essential hypotheses; no claim is made for every polarized analytic variation on a punctured disk.

## Facts & Assumptions

**Given:** On a pure Hodge fiber, the real Hodge torus $\mathbb C^\times$ acts on type $(p,q)$ by $t^p\overline t^q$. Its characters on a fixed-weight decomposition are distinct; linear combinations of finitely many torus action matrices recover each Hodge-type projector by Vandermonde interpolation. Thus a rational subspace is a Hodge substructure precisely when its complexification is torus stable. The geometric category in [[def-geometric-polarizable-hodge-variation]] with its finite sums, tensors, exterior powers, duals and full integral lattices. These closure and lattice clauses must be supported by the family-construction supplier [[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]], with AC [[def-axiom-of-choice]].

[F1] In every tensor/exterior object the monodromy-fixed part is a constant Hodge substructure ([[thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases]]).

[F2] The complex socle of a rational finite-dimensional monodromy module is defined over $\mathbb Q$ and is nonzero when the module is nonzero ([[lem-regular-trace-kernel-descends-the-complex-socle]]).

[F3] Finite sums of simples have invariant complements ([[thm-finite-length-semisimple-module-characterizations]]). Complex semisimplicity implies semisimplicity over every characteristic-zero coefficient field by [[lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity]].

## Proof

1.1 Work with a nonzero pure geometric object $H$ and induct on its rank. Let $W_{\mathbb C}$ be the socle of its complex monodromy module. By [F2] it is $W_{\mathbb Q}\otimes\mathbb C$ for a nonzero rational flat subspace. Intersect $W_{\mathbb Q}$ with the full integral lattice of $H$; this gives a full lattice in $W_{\mathbb Q}$ because a rational basis becomes integral after clearing denominators. Monodromy acts on that lattice by invertible integer matrices, so on $\det W_{\mathbb C}$ it acts by $\pm1$, and $(\det W_{\mathbb C})^{\otimes2}$ is a constant local system. [F2, given, construct, algebra]

2.1 Let $T$ be a complex simple flat subspace of $W_{\mathbb C}$, and choose a flat complement $T'$ there by [F3]. If $d=\dim T$ and $e=\dim W$, the line $\det T\otimes\det T'$ inside $\bigwedge^dH_{\mathbb C}\otimes\bigwedge^{e-d}H_{\mathbb C}$ is $\det W$. Its square is a fixed line in a geometric tensor object. By [F1] the real Hodge torus acts on the full fixed-part space, so for each torus element $t$ it carries that squared line to another flat line. A nonzero tensor square determines its underlying projective line, so the unsquared image line is flat. A nonzero decomposable tensor determines each factor projective line (contract with a linear functional nonzero on the other factor), hence both $t(\det T)$ and $t(\det T')$ are flat. The Plücker line determines its subspace by $T=\{v:v\wedge\det T=0\}$; this identity commutes with transport. Thus $tT$ is a flat subspace of $H_{\mathbb C}$. [F1, F3, step 1.1, construct, algebra]

3.1 At a fixed fiber, irreducibility is open among invariant subspaces of dimension $d$: if reducible invariant $d$-planes converged to an irreducible one, choose invariant subplanes of a common rank $1\le r<d$ along a subsequence. Compactness of the complex Grassmannian yields a convergent subplane of that rank inside the limit plane. Invariance under every monodromy matrix is a closed condition, so the limit subplane contradicts irreducibility. Thus for $t$ sufficiently near the identity, the flat subspace $tT$ of step 2.1 is simple and lies in the socle. Choose a finite simple decomposition of $W_{\mathbb C}$, and intersect the finitely many identity neighborhoods obtained for its summands. There $tW\subseteq W$, hence equality by dimension. The stabilizer of $W$ in the real Hodge torus is a subgroup containing a neighborhood of the identity; the real torus $\mathbb C^\times$ is connected, so this subgroup is the full torus. Hence $W_{\mathbb Q}$ is a Hodge substructure at every fiber. Since it was already flat, it is a Hodge subvariation. [F3, step 1.1, step 2.1, construct, algebra]

4.1 A polarization $Q$ of $H$ restricts nondegenerately to $W$: the Weil operator preserves its Hodge subspace, and positivity of the Weil-operator Hermitian form implies a vector in the radical is zero. Thus the rational $Q$-orthogonal complement $W^\perp$ gives a flat Hodge decomposition $H=W\oplus W^\perp$. A Hodge direct summand is geometric by the defining category. The socle $W_{\mathbb C}$ is already semisimple, while $W^\perp$ has smaller rank; induction therefore gives complex semisimplicity of $H$. Decompose a non-pure object into its finitely many weight components and apply this argument to each. [F2, F3, step 3.1, given, algebra]

5.1 The Gauss–Manin object is geometric and polarizable by the family supplier. Its complex semisimplicity follows from step 4.1, and [F3] gives semisimplicity over $\mathbb Q$ and over every characteristic-zero field. This completes the proof without extending a false assertion from analytic punctured-disk monodromy. [F3, step 4.1, given] ∎
## Source notes

Deligne II 4.2.3–4.2.7 read in full. This proof uses the full socle instead of the minimal-rank summand sum, supplies its rational descent by the trace-kernel lemma, and explicitly checks the openness/connectedness argument needed to make the socle Hodge stable.
