---
id: ex-bidual-map-on-the-circle-and-the-integers
kind: example
title: The bidual map on the circle and the integers
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 18
deps: [def-axiom-of-choice, def-dependent-choice, def-homeomorphism-and-open-maps, def-integers, def-pontryagin-dual-and-compact-open-topology, def-standard-topologies, def-topological-group, lem-continuous-characters-of-the-real-line-are-exponentials, lem-unit-circle-is-a-compact-metrizable-topological-group, thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals, thm-kernel-and-fibres-of-complex-exponential, thm-pontryagin-biduality]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Sections 35D-35F, printed p. 140: the circle/integer duals and their concrete biduality.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.12, printed p. 437, and Example C.14(1), printed p. 438: evaluation biduality and integer characters.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]); the two identifications of values below are direct computations from the classifications of the characters of $\mathbb Z$ and $\mathbb T$ given in the Facts, and the continuity statement is exactly [[thm-pontryagin-biduality]]. Under the identifications $\widehat{\mathbb Z}\cong\mathbb T$, $z\mapsto(n\mapsto z^n)$, and $\widehat{\mathbb T}\cong\mathbb Z$, $k\mapsto(z\mapsto z^k)$, the evaluation map $\Phi_{\mathbb Z}:\mathbb Z\to\widehat{\widehat{\mathbb Z}}$ is the identity of $\mathbb Z$, and $\Phi_{\mathbb T}:\mathbb T\to\widehat{\widehat{\mathbb T}}$ is the identity of $\mathbb T$. In particular the abstract biduality identification is the natural one on these two groups, not merely an abstract isomorphism.

## Facts & Assumptions

**Given:** The discrete group $\mathbb Z$ ([[def-integers]], [[def-standard-topologies]]) and the circle $\mathbb T=\{z\in\mathbb C:|z|=1\}$ ([[lem-unit-circle-is-a-compact-metrizable-topological-group]]).

[F1] A homomorphism $\gamma:\mathbb Z\to\mathbb T$ is determined by $\gamma(1)$, and every $z\in\mathbb T$ occurs; since $\mathbb Z$ carries the discrete topology every such homomorphism is continuous. Hence $z\mapsto(n\mapsto z^n)$ is an algebraic isomorphism $\mathbb T\to\widehat{\mathbb Z}$. Compact subsets of the discrete space $\mathbb Z$ are finite (their cover by singletons has a finite subcover), so the preimage of each compact-open subbasic set is a finite intersection of open conditions on powers of $z$; the inverse is evaluation at $1$, whose preimages of open sets are subbasic open sets. Thus both directions are continuous. ([[def-integers]], [[def-standard-topologies]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-topological-group]])

[F2] Every continuous homomorphism $\chi:\mathbb T\to\mathbb T$ is $\chi(z)=z^k$ for a unique $k\in\mathbb Z$. Indeed, writing $\mathbb T\cong\mathbb R/\mathbb Z$ through the unit-circle isomorphism, $\chi$ corresponds to a continuous homomorphism $\psi:\mathbb R\to\mathbb T$ with $\psi(1)=1$; by the classification of characters of the line there is a unique $\xi\in\mathbb R$ with $\psi(t)=e^{2\pi i\xi t}$, and $\psi(1)=1$ forces $e^{2\pi i\xi}=1$, that is $\xi\in\mathbb Z$ by the kernel of the complex exponential. The dual of the compact circle is discrete by [[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]], so this bijection from the discrete group $\mathbb Z$ is a topological isomorphism. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-continuous-characters-of-the-real-line-are-exponentials]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-pontryagin-dual-and-compact-open-topology]])

[F3] For every locally compact Hausdorff abelian group $G$ the evaluation map $\Phi_G(x)(\gamma):=\gamma(x)$ is an isomorphism of topological groups $G\to\widehat{\widehat G}$. ([[thm-pontryagin-biduality]])

## Verification

1.1 Under the identification [F1], the element $z\in\mathbb T$ corresponds to the character $n\mapsto z^n$ of $\mathbb Z$, so for $n\in\mathbb Z$ one has $\Phi_{\mathbb Z}(n)(z)=z^n$; reading this character of $\mathbb T$ through the identification of [F2], which assigns to $k\in\mathbb Z$ the character $z\mapsto z^k$, gives the integer $n$. Hence $\Phi_{\mathbb Z}$ is the identity of $\mathbb Z$. [F1, F2]

1.2 Under the identification of [F2], the integer $k$ corresponds to the character $z\mapsto z^k$ of $\mathbb T$, so for $z\in\mathbb T$ one has $\Phi_{\mathbb T}(z)(k)=z^k$; reading this character of $\mathbb Z$ through the identification [F1] gives back $z$. Hence $\Phi_{\mathbb T}$ is the identity of $\mathbb T$. [F1, F2]

2.1 By [F3] the maps $\Phi_{\mathbb Z}$ and $\Phi_{\mathbb T}$ are topological isomorphisms, and steps 1.1 and 1.2 identify them with the identity maps of $\mathbb Z$ and $\mathbb T$; so the biduality identification is the natural one on these groups, which is the example. [F3, step 1.1, step 1.2] ∎