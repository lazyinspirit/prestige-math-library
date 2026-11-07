---
id: lem-unitary-character-twists-force-finite-spectral-vanishing
kind: lemma
title: "Inequivalent unitary character twists give finite-spectrum vanishing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hilbert-orthogonal-projection
  - thm-hilbert-adjoint-properties
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - thm-support-and-uniqueness-of-the-spectral-measure
  - thm-continuous-functional-calculus-for-bounded-normal-operators
  - def-projection-valued-measure
  - thm-nth-roots-exist
  - thm-holder-inequality-for-integrals
proof_strategy: direct
sources:
  references:
    - title: "P. Michel and A. Venkatesh, The subconvexity problem for GL₂"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§5.2.7, finite-spectrum vanishing; the unitary-representation reduction is stated and proved under explicit hypotheses below."
---

## Statement

Assume AC and Countable Choice. Let a topological group $G$ act measurably and measure-preservingly on a measure space $X$, and suppose its pullback action $U$ on the supplied Hilbert space $L^2(X)$ is a strongly continuous unitary representation satisfying $U(gh)=U(g)U(h)$ and $U(g)(ab)=U(g)a\,U(g)b$ for the products used below. Let $V,W\subseteq L^2(X)$ be nonzero closed $U(G)$-invariant subspaces on which $U$ is irreducible.

Let $\chi_1,\ldots,\chi_m$ be supplied measurable functions with $|\chi_j|=1$ almost everywhere and $U(g)\chi_j=\theta_j(g)\chi_j$ almost everywhere, where each $\theta_j:G\to\mathbb C$ is a continuous unitary character. Assume that, for each $j$, the representation on $V$ is not unitarily equivalent to the representation $g\mapsto\theta_j(g)U(g)|_W$ on $W$.

For $f\in V$ and $h\in W$, every integral $\int_X f\overline h\,\overline{\chi_j}$ converges absolutely and equals zero. If also each $\chi_j\in L^2(X)$ and $f\overline h\in L^2(X)$, then the orthogonal projection of $f\overline h$ onto the finite-dimensional span of the $\chi_j$ is zero. The empty family is allowed. This is a conditional unitary-representation statement: it does not construct the automorphic spectral decomposition, prove the character-twist inequivalence, or assert $L^2$ membership of an automorphic product.

## Facts & Assumptions

**Given:** AC, Countable Choice, the measure-preserving action, the two supplied irreducible subspaces, the characters and the inequivalence assumptions in the Statement.

[A1] AC and Countable Choice are assumed. [[def-axiom-of-choice]], [[def-countable-choice]]

[F1] A closed subspace of a Hilbert space has a unique orthogonal projection characterized by the decomposition into that subspace and its orthogonal complement. [[def-hilbert-orthogonal-projection]]

[F2] Hilbert adjoints exist under Countable Choice and reverse products. [[thm-hilbert-adjoint-properties]]

[F4] Under AC, the Borel calculus of a bounded normal operator sends indicators to spectral projections, and operators commuting with both the operator and its adjoint commute with those projections. Every nonempty relatively open subset of the spectrum has a nonzero spectral projection. The continuous calculus sends the coordinate function to the operator, and disjoint spectral projections have zero product. [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[thm-support-and-uniqueness-of-the-spectral-measure]], [[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[def-projection-valued-measure]]

[F5] Every positive real number has a positive square root. [[thm-nth-roots-exist]]

[F3] Hölder with exponents $2,2$ gives $\int_X|f||h|\le\|f\|_2\|h\|_2$. [[thm-holder-inequality-for-integrals]]

## Proof

**Proof technique:** turn each character into a unitary multiplication operator, and apply Schur's lemma to an orthogonal projection.

1.1 Fix $j$. Multiplication by $\chi_j$ defines a unitary operator $M_j$ on $L^2(X)$, with inverse multiplication by $\overline{\chi_j}$, because $|\chi_j|=1$ almost everywhere. Put $W_j=M_jW$. It is closed and nonzero. By covariance and the eigenfunction property, $$U(g)M_jw=\theta_j(g)M_jU(g)w\qquad(w\in W).$$ Thus $W_j$ is invariant, the representation on it is unitarily equivalent to the $\theta_j$-twist of $W$, and it is irreducible because $M_j^{-1}$ carries its closed invariant subspaces to those of $W$. Strong continuity and unitarity persist under this unitary conjugation. [given, algebra]

2.1 By F1 let $P_j$ be the orthogonal projection onto $W_j$. The orthogonal complement $W_j^\perp$ is invariant: for $x\perp W_j$ and $w\in W_j$, unitarity gives $\langle U(g)x,w\rangle=\langle x,U(g)^{-1}w\rangle=0$. Uniqueness of the orthogonal decomposition therefore gives $P_jU(g)=U(g)P_j$. The decomposition is orthogonal, so $\|P_jx\|^2\le\|x\|^2$ by Pythagoras; hence $P_j$ is bounded. Its restriction $P_j|_V:V\to W_j$ is a bounded intertwiner. Write $T=P_j|_V$. F2 gives an adjoint $T^*$, which intertwines in the reverse direction, so $A=T^*T$ is a bounded self-adjoint positive operator on $V$ commuting with $U(g)|_V$. If $A$ is not scalar, F4 implies its spectrum has two distinct points; choose disjoint nonempty relatively open neighborhoods of them. Their spectral projections are nonzero and orthogonal, and F4 makes each commute with $U(g)|_V$. The first projection therefore has a nonzero proper closed invariant range, contradicting irreducibility. Thus $A=cI$ with $c\ge0$. If $c=0$ then $T=0$. If $c>0$, F5 makes $c^{-1/2}T$ an isometric intertwiner with nonzero closed invariant range in $W_j$; irreducibility makes that range all of $W_j$, contradicting the assumed inequivalence. Therefore $T=0$, and every $f\in V$ is orthogonal to every $\chi_jh\in W_j$. [A1, F1, F2, F4, F5, step 1.1, given, algebra]

3.1 F3 makes $f\overline h\,\overline{\chi_j}$ absolutely integrable because $|\chi_j|=1$ and $f,h\in L^2(X)$. With the inner product linear in the first entry, $$\int_X f\overline h\,\overline{\chi_j}=\langle f,\chi_jh\rangle=0$$ by step 2.1. This holds for every supplied $j$. [F3, step 2.1, given, algebra]

4.1 Suppose additionally that $f\overline h$ and all $\chi_j$ belong to $L^2(X)$. Step 3.1 says that $f\overline h$ is orthogonal to each $\chi_j$, and therefore to their finite-dimensional span. Its orthogonal projection onto that closed span is zero by F1. For $m=0$ the span is the zero subspace and the conclusion is immediate. No automorphic realization or nonvanishing exclusion is inferred. [F1, step 3.1, given, algebra] ∎
