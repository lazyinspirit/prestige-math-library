---
id: lem-nonaffine-rational-fixed-point-affineness
kind: lemma
title: "A faithful rational action with a fixed point forces affineness"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-rational-action-composition-domain, lem-nonaffine-faithful-fixed-point-jet-representation, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Brion–Samuel–Uma, Lectures on the structure of algebraic groups, Proposition 2.3.2, pp.28–29"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/chennai.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed, $G$ a smooth algebraic group, and $X$ an integral separated $k$-variety. Suppose $G$ acts rationally and scheme-faithfully on $X$: for every test scheme, only the identity group point induces the identity birational transformation after base change. If some $x\in X(k)$ satisfies $g\cdot x=x$ on a dense open subset of $G$ where the total action is defined, then $G$ is affine. In particular this holds for the faithful rational action induced by left translation of a subgroup on a variety birational to its ambient group.

## Facts & Assumptions

[F1] If two successive rational action values are defined, their composition is defined and agrees with the product action. ([[lem-nonaffine-rational-action-composition-domain]])

[F2] A scheme-faithful rational action whose regular domain contains $G\times\{x\}$ and whose restriction there is the constant $x$ morphism has a faithful finite-dimensional jet representation, which realizes $G$ as a closed subgroup of a general linear group. ([[lem-nonaffine-faithful-fixed-point-jet-representation]])

[F3] Nonempty locally closed subsets of finite-type schemes over an algebraically closed field have closed rational points. ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** AC, $k$, $G$, $X$, a scheme-faithful rational action, and $x$ fixed on the stated dense open.

1.1 First suppose $G$ connected. Replace the dense fixed open $V$ by $W=V\cap V^{-1}$. For any $g\in G(k)$, the dense opens $W$ and $gW^{-1}$ intersect; by [F3] choose $a$ in their intersection and write $g=ab$ with $a,b\in W$. Both $b\cdot x=x$ and $a\cdot(b\cdot x)=x$ are defined, so [F1] implies that the total action is defined at $(g,x)$ and has value $x$. Its regular domain is open. Its closed complement cannot meet $G\times\{x\}$, because any nonempty such intersection would contain a closed point by [F3]. Thus the domain contains all of $G\times\{x\}$. Since $G$ is smooth and hence reduced, its restriction to this subscheme equals the constant morphism $x$: on affine target charts their coordinate differences vanish on all closed points, hence vanish in the reduced coordinate ring. [F1, F3, given, choose]

2.1 Apply [F2] to obtain a closed immersion $G\hookrightarrow\operatorname{GL}_N$ for some finite $N$. General linear groups are affine, and a closed subscheme of an affine scheme is affine, so $G$ is affine. For arbitrary smooth $G$, its identity component is open and closed: smooth local rings are domains, so irreducible components are disjoint, and translations identify the connected components. The rational action restricted to the identity component is scheme-faithful and its dense fixed open is nonempty, so the preceding argument makes that component affine. There are finitely many components and each is a translate of it by a rational point, available by [F3]. Their disjoint union is affine, the spectrum of the finite product of their coordinate rings. Hence $G$ is affine. AC is inherited from [F2] and the geometric suppliers. [F2, F3, step 1.1, construct] ∎
