---
id: lem-proper-thickening-from-explicit-boundary-certificate-in-zf
kind: lemma
title: Proper thickenings from an explicit projective-boundary certificate in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-proper-morphism
  - def-closed-immersion-schemes
  - def-quasi-coherent-module-scheme
  - lem-projective-properness-and-finite-type-surjectivity-without-choice
proof_strategy: direct
axiom_use: No choice is assumed; the finite projective-boundary and membership certificates are explicit input data.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, Proposition 32.9.6
      url: https://stacks.math.columbia.edu/tag/01ZJ
      locator: The earlier A5 authoring read the finite-type closed-ambient context; this explicitly qualified boundary-certificate argument is supplied locally.
---

## Statement

In ZF, let $A$ be a ring, let $Y$ be a separated finite-type $A$-scheme, and let $P\to Y$ be a proper surjection together with an immersion $P\hookrightarrow\mathbb P^n_A$ that is closed in a specified quasi-compact open $W\subseteq\mathbb P^n_A$. Let $K$ be a specified finite-type quasi-coherent ideal whose closed locus is the complement of $W$. Let $X=\varprojlim X_\lambda$ be a directed closed limit of closed finitely presented subschemes $X_\lambda\subseteq Y$, with defining ideals $I_\lambda$ whose union is the ideal $I$ of $X$.

Suppose the pullback $X'=P\times_YX$ is supplied as a closed subscheme of $\mathbb P^n_A$ with ideal $J_\infty$, and suppose there is a specified finite-type quasi-coherent ideal $J\subseteq J_\infty$ with a finite algebraic certificate for $J+K=\mathcal O_{\mathbb P^n_A}$. Then every sufficiently late $X_\lambda$ is proper over $A$. The boundary identity and closed projective realization are explicit additional hypotheses; they are not inferred from pointwise closed-locus disjointness.

## Statement references

[[def-proper-morphism]]

[[def-closed-immersion-schemes]]

[[def-quasi-coherent-module-scheme]]

## Facts & Assumptions

**Given:** The stated proper surjection, projective immersion and boundary ideal, directed closed system, closed projective realization, and the specified finite boundary identity.

[F1] Projective space and its closed subschemes are proper, proper maps are stable under base change, and a proper surjection from an $A$-proper scheme proves that a separated finite-type target is proper. [[lem-projective-properness-and-finite-type-surjectivity-without-choice]]

[F2] Closed immersions are described by quasi-coherent quotient ideals and are stable under base change. [[def-closed-immersion-schemes]] [[def-quasi-coherent-module-scheme]]

## Proof

**Proof technique:** use the actual unit identity to produce a projective closed envelope at one finite stage.

1.1 The supplied equality $J+K=\mathcal O$ makes $Z=V(J)$ disjoint from $V(K)$ by direct evaluation at every prime, so $Z\subseteq W$. The ideal $J$ is finite type, and $Z$ is a closed subscheme of projective space, hence proper by [F1]. The inclusion of $X'$ in $Z$ is scheme-theoretic because $J\subseteq J_\infty$. This step uses the supplied identity in the algebra-to-topology direction only. [F1, F2, given, construct, algebra]

2.1 On finitely many affine charts, take the finitely many generators of $J\mathcal O_P$. They belong to $I\mathcal O_P=\bigcup_\lambda I_\lambda\mathcal O_P$. For each generator take one finite membership witness and use directedness for one common index $\lambda_0$. For every later $\lambda$, the pullback $P_\lambda=P\times_YX_\lambda$ is scheme-theoretically contained in $Z$. Since $P$ is closed in $W$ and $P_\lambda$ is closed in $P$, while $Z\subseteq W$, the induced $P_\lambda\hookrightarrow Z$ is a closed immersion. Therefore $P_\lambda$ is proper over $A$ by [F1]. [F1, F2, step 1.1, given, construct, algebra]

3.1 The map $P_\lambda\to X_\lambda$ is the base change of the proper surjection $P\to Y$, hence is proper and universally surjective by [F1]. Since $X_\lambda$ is separated and of finite type over $A$, [F1] descends properness from $P_\lambda$ to $X_\lambda$. This holds for every stage after $\lambda_0$, without any spectrum-compactness or prime-ideal principle. [F1, step 2.1, given, construct] ∎
