---
id: lem-upsilon-filtered-tower-splitting
kind: lemma
title: "Filtered tower splitting for the Upsilon minimax"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-upsilon-function-from-filtered-complex
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only finite-dimensional basis changes are made; no choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, Appendix A and §15"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Theorem A.1, PDF pp.13–14, and §15, PDF pp.11–13; filtered tower splitting and coordinate change to the t-modified grading"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§3–4"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definitions 3.4/3.6 and Proposition 4.2; t-modification and non-torsion grading"
---

## Statement

Let $C=\mathrm{CFK}^{\infty}(K)$ be the finite-rank free $\Lambda=\mathbb F_2[U,U^{-1}]$ knot Floer complex of a smooth oriented knot, with its Maslov grading, algebraic filtration $i$, Alexander filtration $j$, and weighted filtration $F_t=(1-t/2)i+(t/2)j$ for a fixed $t\in[0,2]$. Assume its total homology is $\Lambda$ generated in Maslov grading zero. Then the filtered graded complex $(C,F_t)$ admits a filtered direct-sum decomposition $C=T\oplus A$, where $T=\Lambda\alpha$, $\partial\alpha=0$, $\alpha$ represents the normalized homology generator at filtration $\nu_t(C)$, and $A$ is acyclic as a graded complex. In the t-modified complex, the non-torsion tower from $T$ has maximal grading $-2\nu_t(C)$; hence this maximum equals the cycle-minimax definition of $\Upsilon_K(t)$.

## Statement references

[[def-upsilon-function-from-filtered-complex|The finite cycle-minimax and t-grading conventions]]

[Livingston, *Notes on the knot concordance invariant Upsilon*, Appendix A and §15](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§3–4](https://arxiv.org/pdf/1407.1795)

## Facts & Assumptions

**Given:** A finite-rank free $\Lambda$ complex with a finite bifiltered graded basis, differential of Maslov degree $-1$, and total homology $\Lambda$ generated in Maslov degree zero.

[F1] [[def-upsilon-function-from-filtered-complex]]: the filtration of a finite chain is the maximum of the weighted basis-term filtration levels, and $\nu_t$ is the least level at which a cycle represents the normalized generator.

## Proof

1.1 Translate finitely many $\Lambda$-basis elements by powers of $U$ so that each has Maslov degree $0$ or $1$; this is possible because $U$ lowers Maslov degree by $2$. These representatives form a finite free $\Lambda$-basis and a filtered graded $\mathbb F_2$-basis after taking all $U$-translates. Choose a Maslov-zero cycle $A_1$ of least $F_t$ filtration among cycles representing the nonzero total-homology class. Write $A_1=x_1+\cdots+x_r$ in Maslov-zero basis elements, ordered by nonincreasing filtration, and replace $x_1$ by this sum. The change is invertible and filtered because every term has filtration at most that of $x_1$. Thus $A_1$ is a basis cycle representing the generator at filtration $\nu_t(C)$. [given, F1, algebra]

1.2 List the Maslov-one basis elements whose boundaries contain $A_1$, ordered by nondecreasing filtration. Replace each after the first by its sum with the first one; these are filtered invertible basis changes and cancel the $A_1$ coefficient from all but one boundary. Call the remaining generator $B_1$. Its boundary is $A_1+X$, where $X$ is a sum of other Maslov-zero basis elements. The equation $\partial^2B_1=0$ and $\partial A_1=0$ imply $\partial X=0$. If $X=0$, then $A_1$ is a boundary, contradicting its nontrivial homology class. Replace one basis element in $X$ by the sum $A_2=X$; then $\partial B_1=A_1+A_2$, and $A_2$ is a cycle homologous to $A_1$. Minimality of $A_1$ implies $F_t(A_2)\ge F_t(A_1)$, while the displayed filtered basis change gives the reverse inequality, so it preserves the filtration. [given, step 1.1, algebra]

2.1 Repeat step 1.2 with $A_2$, then with each newly obtained cycle. At every stage at least one unused Maslov-one generator is consumed; there are finitely many basis generators, so the process terminates. It cannot terminate with a final Maslov-one generator, since the resulting summand would be acyclic and would contain the nonzero homology class represented by $A_1$. It therefore yields a finite direct summand
$$ A_1\xleftarrow{B_1}A_2\xleftarrow{B_2}\cdots\xleftarrow{B_{r-1}}A_r $$
with differential $\partial B_i=A_i+A_{i+1}$ and all $A_i$ cycles homologous to $A_1$. Replacing each $A_i$ for $i>1$ by $A_1+A_i$ is filtration-preserving because $F_t(A_i)\ge F_t(A_1)$. This splits off $T=\Lambda A_1$ with zero differential; the complement has zero homology because $T$ already carries the entire rank-one total homology. Thus $C=T\oplus A$ with $A$ acyclic and the asserted filtered decomposition. [step 1.2, given, algebra]

2.2 The filtered decomposition in step 2.1 determines the least $F_t$ filtration of a cycle representing the normalized generator. It does not by itself identify the corresponding class in the $t$-modified minus complex: the t-grading there includes the reweighted $U$-action and differential, while the cycle-minimax is computed on Laurent translates in $\mathrm{CFK}^{\infty}$. The displayed basis-term identity alone does not construct a grading-preserving map between these two homology classes. The required coordinate change and preservation of the non-torsion tower are not established in this draft, so the second conclusion remains unresolved. [F1, step 2.1, algebra] ∎

## Proof references

[[def-upsilon-function-from-filtered-complex|Finite cycle-minimax definition]]

[Livingston, *Notes on the knot concordance invariant Upsilon*, §15](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Unresolved proof obligations

The finite filtered basis-change induction follows Livingston's full Appendix A argument, with its filtration conditions written in steps 1.1–2.1. The t-regrading comparison in step 2.2 is not locally proved. Livingston §15 uses a full Laurent-complex regrading and an affine coordinate change; the present `def-upsilon` also records the Ozsváth–Stipsicz–Szabó minus-complex convention. A local map between these exact constructions, preserving the normalized non-torsion class and filtration, remains to be supplied. This item is escalated and is not used as a proved premise.
