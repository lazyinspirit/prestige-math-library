---
id: lem-smooth-projective-curves-have-local-finite-etale-multisections
kind: lemma
title: "Smooth projective curves have local finite étale multisections"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-proper-quasi-finite-is-finite
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for finite-type dimension and selection of a rational section from a nonempty open parameter set."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "SGA 4, Exposé XI, section 2, Theorem 2.1"
      url: "https://grothendiecksga.com/read/sga4/en/XI-2.html"
      locator: "Pointed transverse sections; the relative finite étale multisection is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $k$ be an algebraically closed field, let $S$ be a finite-type $k$-scheme, and let $f:\overline X\to S$ be a smooth projective morphism with geometrically connected one-dimensional fibres. Let $j:X\hookrightarrow\overline X$ be an open immersion, and let $x\in X(k)$ have image $s\in S(k)$. There are an open neighborhood $U$ of $s$ and a finite étale surjection $T\to U$ together with a $U$-morphism $T\to X_U$. Thus the pullback $X_T\to T$ has a section. The cover and section are constructed locally around the specified point; no global multisection is asserted.

## Facts & Assumptions

**Given:** The algebraically closed field, smooth projective family of connected curves, open subscheme and rational point in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] A proper quasi-finite morphism is finite. [[thm-proper-quasi-finite-is-finite]]

## Proof

**Proof technique:** choose a transverse hyperplane section through the prescribed point and shrink the base.

1.1 Work on an affine neighborhood of $s$ and choose a relative projective embedding with its very ample line bundle $L$. The fibre $C=\overline X_s$ is a smooth connected projective curve over $k$, and $x\in C(k)$. Let $W$ be the restricted ambient hyperplane sections, let $W(-x)$ be those vanishing at $x$, and let $V$ be the image of $W(-x)\otimes W$ in $H^0(C,L_s^{\otimes 2})$. For any $y\ne x$, the restriction from $V$ to the first-jet space $L_s^{\otimes 2}\otimes\mathcal O_{C,y}/\mathfrak m_y^2$ is surjective: choose a section in $W(-x)$ not vanishing at $y$, and multiply it by sections in $W$ generating the first jets at $y$. The same very ample embedding supplies a section in $V$ with nonzero derivative at $x$. [A1, given, choose, construct, algebra]

2.1 For $y\ne x$, vanishing of both the value and derivative of a section of $V$ at $y$ imposes two independent linear conditions. The corresponding incidence subset in $V\times(C\setminus\{x\})$ has dimension at most $\dim V-1$, so its image has closure a proper closed subset of $V$. Vanishing of the derivative at $x$ is another proper linear condition. Since $k$ is infinite, choose a $k$-point outside these closed sets. Its section vanishes simply at $x$ and at every other zero. Its zero scheme $D_s$ is therefore a finite reduced nonempty subscheme of $C$. [A1, step 1.1, choose, construct, algebra]

3.1 The section in step 2.1 is a linear combination of products of fibrewise hyperplane sections, and the scalar coefficients lift to regular functions after shrinking the affine base. It therefore lifts to a section of $L^{\otimes 2}$ on $\overline X$; let $D$ be its zero scheme. Shrink $S$ around $s$ so that $D\to S$ is étale along the whole fibre $D_s$: the nonzero fibre derivative gives the local Jacobian criterion at each of its finitely many points, and the image of the remaining closed non-étale locus is closed because $D$ is projective over $S$. Further remove the closed image of $D\setminus X$, which misses $s$ after choosing the zeros away from the closed set $C\setminus X_s$ as below. Then $D$ lies in $X$ over the shrunken base. [step 2.1, construct, algebra]

4.1 To ensure this avoidance, include before the choice in step 2.1 the finitely many points of $C\setminus X_s$: for each such point $y$, the condition that a section in $V$ vanish at $y$ is a proper hyperplane, since very ampleness separates $x$ and $y$. The prescribed point $x$ is not among them. Hence the same choice avoids all these hyperplanes. On the resulting neighborhood, $D\to S$ is proper and étale, hence quasi-finite and finite by [F1]. Its image is both closed, by properness, and open, by étaleness, and contains $s$; shrink to this image. Thus $T=D$ is finite étale surjective and the inclusion $D\subset X$ gives the asserted section after base change. [A1, F1, step 3.1, choose, construct, algebra] ∎
