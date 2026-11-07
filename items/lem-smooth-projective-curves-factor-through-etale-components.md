---
id: lem-smooth-projective-curves-factor-through-etale-components
kind: lemma
title: "Smooth projective curves factor through finite étale components"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-proper-flat-cohomology-perfect-complex
  - lem-projective-degree-zero-formal-functions-over-noetherian-bases
  - lem-projective-coherent-cohomology-finite-and-vanishing
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are inherited from the proper-flat cohomology complex supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, finite étale Stein factorization"
      url: "https://stacks.math.columbia.edu/tag/0BUN"
      locator: "Lemma 58.15.1; the local curve case is reconstructed below using formal functions."
    - title: "The Stacks Project, Stein factorization and local constancy of connected components"
      url: "https://stacks.math.columbia.edu/tag/03GX"
      locator: "Section 37.53; the projective curve case is reconstructed below using formal functions and the stated cohomology complex."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed, let $S$ be a smooth finite-type $k$-scheme, and let $f:C\to S$ be smooth and projective with nonempty one-dimensional geometric fibres. For every $s\in S(k)$ there is an open neighborhood $U$ of $s$ and a factorization
$$C_U\longrightarrow U'\longrightarrow U$$
in which $U'\to U$ is finite étale and $C_U\to U'$ is smooth and projective with geometrically connected nonempty fibres. The points of $U'$ over a geometric point of $U$ index the connected components of the corresponding curve fibre.

## Facts & Assumptions

**Given:** The algebraically closed field, smooth projective family and rational base point in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Proper flat coherent cohomology is represented by a bounded complex of finite projectives, concentrated in nonnegative degrees, with arbitrary base change. [[lem-proper-flat-cohomology-perfect-complex]]

[F2] Degree-zero coherent sections of a projective scheme commute with completion, naturally for algebra coefficients. [[lem-projective-degree-zero-formal-functions-over-noetherian-bases]]

[F3] Coherent cohomology of a projective morphism over a Noetherian affine base is finite. [[lem-projective-coherent-cohomology-finite-and-vanishing]]

## Proof

**Proof technique:** lift the closed fibre's component idempotents, then use the degree-zero cohomology complex.

1.1 Work on an affine neighborhood $S=\operatorname{Spec}A$ of $s$. Put $B=H^0(C,\mathcal O_C)$, finite over $A$ by [F3]. Let $R$ be the strict henselization of $A$ at $s$ and $\mathfrak m$ its maximal ideal. Flat base change identifies $B\otimes_A R$ with $H^0(C_R,\mathcal O)$, and this is a finite $R$-algebra. The smooth proper geometric fibre $C_s$ is a finite disjoint union of connected smooth projective curves, and its ring of functions is $k^c$, one factor for each component. [A1, F3, given, construct, algebra]

2.1 Each clopen component of $C_s$ determines, for every nilpotent thickening $C_{R/\mathfrak m^j}$, the same clopen subset and hence a unique idempotent section on that thickening. By [F2], the resulting compatible idempotents are idempotents in the completion of $B\otimes_A R$. Their images in $(B\otimes_A R)/\mathfrak m$ lift uniquely to idempotents of the finite algebra $B\otimes_A R$, because $R$ is henselian. They remain orthogonal and sum to one, and they restrict to the component idempotents of $C_s$. Since the strict henselization is a filtered colimit of étale neighborhoods and these are finitely many elements and equations, the idempotents and the clopen decomposition they define descend to an étale neighborhood $V\to S$ of $s$. [A1, F2, step 1.1, construct, algebra]

3.1 On $V$, let $C_i$ be a descended clopen piece. Near the chosen point of $V$, it is smooth and projective, with a connected smooth projective closed fibre. The dimension of its fibrewise $H^0(\mathcal O)$ is upper semicontinuous: by [F1] it is the nullity of the first differential of a finite projective complex after tensoring with the residue field, so determinantal rank conditions give the assertion. It equals one at the chosen point and is at least one wherever the fibre is nonempty. Its image is open because it is smooth and closed because it is proper, so after shrinking $V$ the fibres are nonempty and have geometric $H^0$ dimension one. Thus they are geometrically connected. Consequently the number $c$ of connected components of the original fibres is constant on an open neighborhood of $s$ in $S$, the image of this étale neighborhood. [A1, F1, step 2.1, construct, algebra]

4.1 Shrink $U$ so this number is constantly $c$. By [F1], fibrewise nullity of the first differential of the complex for $\mathcal O_C$ is constantly $c$. The smooth base $U$ is reduced, so the minors of rank above that constant vanish in its local rings; the constant-rank matrix is locally equivalent to a block identity followed by zeros. Its image and kernel are therefore locally direct summands; the kernel is $f_*\mathcal O_C$ and its formation commutes with every base change. It is a finite locally free $\mathcal O_U$-algebra whose geometric fibres are $k(\bar u)^c$, since a smooth proper connected curve over an algebraically closed field has only constant global functions. Its module of relative differentials has zero geometric fibres, so it vanishes by Nakayama; finite presentation and flatness make $U'=\operatorname{Spec}_U(f_*\mathcal O_C)$ finite étale. The canonical factorization identifies the geometric fibres over points of $U'$ with the connected components of the original fibres. Smoothness and projectivity descend to this factorization because $U'\to U$ is étale and the factor map is a base change to a clopen component. [F1, step 3.1, construct, algebra] ∎
