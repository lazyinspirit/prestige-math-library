---
id: cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality
kind: counterexample
title: Forgetting the compact-open topology destroys Pontryagin duality
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 18
deps: [def-axiom-of-choice, def-compact-space, def-group-homomorphism, def-integers, def-pontryagin-dual-and-compact-open-topology, def-standard-topologies, def-topological-group, lem-continuous-characters-of-the-real-line-are-exponentials, lem-hamel-basis-exists, lem-unit-circle-is-a-compact-metrizable-topological-group, thm-choice-implies-dependent-implies-countable-choice, thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals, thm-kernel-and-fibres-of-complex-exponential, thm-pontryagin-biduality]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Sections 35D-35F, printed p. 140: the topological circle/integer duals used for comparison. The Hamel-coordinate counterexample is constructed here from the cited Hamel-basis supplier.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement refuted

The biduality conclusion of Pontryagin duality holds for every algebraic character group when the group is equipped with the discrete topology: if $X$ is the algebraic character group $\operatorname{Hom}(\mathbb Z,\mathbb T)$ of the discrete group $\mathbb Z$ with the discrete topology, then the evaluation map $\mathbb Z\to\operatorname{Hom}_{cts}(X,\mathbb T)$ is an isomorphism.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the discrete additive group $\mathbb Z$ ([[def-integers]], [[def-standard-topologies]]) and the multiplicative circle $\mathbb T=\{z\in\mathbb C:|z|=1\}$ ([[lem-unit-circle-is-a-compact-metrizable-topological-group]]).

[F1] The map $z\mapsto(n\mapsto z^n)$ is an isomorphism of topological groups $\mathbb T\to\widehat{\mathbb Z}$, because a homomorphism out of $\mathbb Z$ is determined by its value at $1$ and $\mathbb Z$ is discrete. Compact subsets of the discrete space $\mathbb Z$ are finite (their cover by singletons has a finite subcover), so the preimage of each compact-open subbasic set is a finite intersection of open conditions on powers of $z$; the inverse is evaluation at $1$, whose preimages of open sets are subbasic open sets. Thus both directions are continuous. Every continuous homomorphism $\chi:\mathbb T\to\mathbb T$ is $\chi(z)=z^k$ for a unique $k\in\mathbb Z$: writing $\mathbb T\cong\mathbb R/\mathbb Z$, the character corresponds to a continuous homomorphism $\psi:\mathbb R\to\mathbb T$ with $\psi(1)=1$, the classification of characters of the line gives $\psi(t)=e^{2\pi i\xi t}$ for a unique real $\xi$, and $\psi(1)=1$ forces $\xi\in\mathbb Z$ by the kernel of the complex exponential. ([[def-integers]], [[def-standard-topologies]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-continuous-characters-of-the-real-line-are-exponentials]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-pontryagin-dual-and-compact-open-topology]])

[F2] Assuming the Axiom of Choice, $\mathbb{R}$ has a Hamel basis $B$ over $\mathbb{Q}$: every real is a finite $\mathbb{Q}$-linear combination of basis elements in exactly one way, a $\mathbb{Q}$-linear map $\mathbb{R}\to\mathbb{R}$ is determined by its values on $B$, and the coefficient of any basis element is a well-defined $\mathbb{Q}$-linear map. ([[lem-hamel-basis-exists]])

[F3] A group homomorphism on a discrete group is continuous, and every function on a discrete space is continuous; composition of continuous homomorphisms is a continuous homomorphism, and $\mathbb Z\subseteq\mathbb R$ consists of the integer multiples of $1$. ([[def-standard-topologies]], [[def-group-homomorphism]], [[def-topological-group]], [[def-integers]])

[F4] The assumed AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]), so biduality applies with its full choice hypotheses. With the compact-open topology the group $X=\widehat{\mathbb Z}$ is compact, because the dual of a discrete abelian group is compact under the Axiom of Choice, and Pontryagin biduality identifies its dual with $\mathbb Z$ through the evaluation isomorphism. ([[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]], [[thm-pontryagin-biduality]], [[def-compact-space]], [[def-pontryagin-dual-and-compact-open-topology]])

## Counterexample

1.1 Identify $X=\operatorname{Hom}(\mathbb Z,\mathbb T)$ with $\mathbb T$ by [F1] and equip it with the discrete topology. Since a homomorphism on the discrete group $X$ is automatically continuous by [F3], the group of continuous characters $\operatorname{Hom}_{cts}(X,\mathbb T)$ is exactly the group $\operatorname{Hom}_{alg}(\mathbb T,\mathbb T)$ of all algebraic homomorphisms. The evaluation map $\mathbb Z\to\operatorname{Hom}_{cts}(X,\mathbb T)$ is $n\mapsto(z\mapsto z^n)$; with the compact-open topology on $\mathbb T$, [F1] says these power maps are exactly its continuous characters. [F1, F3]

1.2 By [F2] choose a Hamel basis $B$ and expand $1$ in it. Choose a basis element $b_0$ whose rational coefficient $r=\Lambda_{b_0}(1)$ is nonzero, and put $T=\Lambda_{b_0}/r:\mathbb R\to\mathbb R$. Then $T$ is $\mathbb Q$-linear with $T(1)=1$, hence $T(n)=n$ for every integer $n$. The complement clause of the Hamel-basis supplier gives another basis vector $b_1\ne b_0$; then $T(b_1)=0$ while $b_1\ne0$. Consequently $T$ cannot be multiplication by a real scalar: its value at $1$ would force that scalar to be $1$, contradicting its value at $b_1$. Since $T(\mathbb Z)\subseteq\mathbb Z$, it induces the well-defined homomorphism $f_T(x+\mathbb Z)=T(x)+\mathbb Z$ of $\mathbb R/\mathbb Z$. This uses the supplied coordinate map and does not assume the arbitrary Hamel basis contains $1$. [F2]

2.1 Let $f_T$ be the homomorphism induced by $T$ of step 1.2. As a homomorphism from the discrete group $X$ it belongs to $\operatorname{Hom}_{cts}(X,\mathbb T)$ by [F3]. If it were continuous for the compact-open topology on $\mathbb T$, then by [F1] there would be $k\in\mathbb Z$ with $f_T(z)=z^k$ for all $z$, that is $T(x)-kx\in\mathbb Z$ for all $x\in\mathbb R$. The map $G(x):=T(x)-kx$ is then $\mathbb Q$-linear with $G(\mathbb R)\subseteq\mathbb Z$; for every $x$ and every $n\ge1$ one has $G(x)=n\,G(x/n)\in n\mathbb Z$, so $G(x)\in\bigcap_{n\ge1}n\mathbb Z=\{0\}$ and $T=k\,\mathrm{id}$, contradicting the choice of $T$. Hence $f_T$ is an algebraic homomorphism continuous on the discrete $X$ but not continuous on the compact-open circle. [F1, F2, F3, step 1.2]

3.1 The homomorphism $f_T$ lies in $\operatorname{Hom}_{cts}(X,\mathbb T)=\operatorname{Hom}_{alg}(\mathbb T,\mathbb T)$ but is not one of the maps $z\mapsto z^k$, so it is not in the image of the evaluation map $\mathbb Z\to\operatorname{Hom}_{cts}(X,\mathbb T)$, whose image is exactly $\{z\mapsto z^n:n\in\mathbb Z\}$ by [F1] and is a copy of $\mathbb Z$. The evaluation map is injective, since $z\mapsto z^n$ determines $n$, but it is not surjective: the discrete algebraic character group $X$ fails the biduality conclusion, and no topological constraint on $X$ beyond discreteness is available to repair it. [F1, F3, step 2.1]

4.1 By contrast, with the compact-open topology the same group $X=\widehat{\mathbb Z}\cong\mathbb T$ is compact and [F4] gives $\operatorname{Hom}_{cts}(X,\mathbb T)\cong\mathbb Z$ through the evaluation map. Thus it is the discarded compact-open topology, not the algebraic character group, that carries Pontryagin biduality; the statement refuted above is false. [F4, step 3.1] ∎
