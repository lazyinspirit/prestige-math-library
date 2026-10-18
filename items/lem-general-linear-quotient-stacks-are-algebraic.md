---
id: lem-general-linear-quotient-stacks-are-algebraic
kind: lemma
title: "Affine quotients by products of general linear groups are algebraic stacks"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-algebraic-stack-and-inertia
  - def-descent-data-and-stack-in-groupoids
  - def-morphism-representable-by-algebraic-spaces
  - def-smooth-morphism-schemes
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-nonaffine-characteristic-zero-group-smooth
  - lem-nonaffine-effective-affine-algebra-descent
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "The Stacks Project, Algebraic Stacks, §§94.10–94.12"
      url: "https://stacks.math.columbia.edu/download/algebraic.pdf"
      locator: "Definition 94.12.1 and the action-groupoid presentation criterion in §§94.10–94.11"
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 printing, §2.8"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Printed pp. 40–41 (PDF pp. 51–52), the affine smooth group scheme GL_n"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an affine finite-type
$\mathbb C$-scheme with an algebraic action of
$G=\prod_{r=1}^m\operatorname{GL}_{n_r,\mathbb C}$, allowing $n_r=0$.
Then the quotient stack $[X/G]$, defined by $G$-torsors with equivariant
maps to $X$, is an algebraic stack. The morphism $X\to[X/G]$ from the
trivial torsor is a smooth surjective representable atlas, and the diagonal
of $[X/G]$ is representable by affine schemes.

## Facts & Assumptions

**Given:** AC, the affine scheme $X$, and the indicated action of $G$.

[F1] [[def-descent-data-and-stack-in-groupoids]]: an algebraic stack is a stack in groupoids on the fppf site. The Given quotient-stack definition specifies left $G$-torsors with equivariant maps to $X$, equivariant isomorphisms commuting with those maps, and fppf-local triviality.

[F2] [[def-algebraic-stack-and-inertia]]: a stack in groupoids is algebraic if it has a representable diagonal and a smooth surjective representable presentation by a scheme.

[F3] [[lem-general-linear-group-scheme-and-its-coordinate-ring]] and [[lem-nonaffine-characteristic-zero-group-smooth]]: each $\operatorname{GL}_{n_r,\mathbb C}$ is affine of finite type, with $\operatorname{GL}_0$ trivial; hence their product $G$ is affine of finite type and smooth over $\mathbb C$.

[F4] [[lem-nonaffine-effective-affine-algebra-descent]]: an affine scheme with faithfully flat descent datum is effective, so a $G$-torsor, locally isomorphic to $G$, is represented by a scheme; affineness descends.

[A1] [[def-axiom-of-choice]]: AC is inherited through the algebraic-stack and affine-descent suppliers; the torsor and equalizer constructions below make no additional choices.

## Proof

**Proof technique:** direct.

1.1 Let $T\to[X/G]$ correspond to a left torsor $P\to T$ and an equivariant map $\phi:P\to X$. An object of $X\times_{[X/G]}T$ is a point $x\in X$ and an equivariant isomorphism from the trivial left torsor to $P$, compatible with $\phi$. Such an isomorphism is determined by the image $p\in P$ of the identity, and sends $g$ to $g p$; the compatibility condition forces $x=\phi(p)$. Thus $X\times_{[X/G]}T\cong P$. Since $P\to T$ is a torsor, it is a smooth surjective scheme morphism by [F3] and the local triviality in [F1]. Hence $X\to[X/G]$ is a representable smooth surjective atlas. [F1, F3, given, construct]

1.2 For two objects $(P,\phi)$ and $(P',\phi')$ over a scheme $T$, their isomorphism functor is the subfunctor of $\operatorname{Isom}_G(P,P')$ on which $\phi'\circ f=\phi$. After a common fppf cover trivializing both torsors, and after restricting to affine opens of the cover, $\operatorname{Isom}_G(P,P')\cong G\times T$. With the chosen trivializing sections $p,p'$, the condition is the inverse image of the diagonal $X\hookrightarrow X\times X$ under the two evaluation maps $f\mapsto(\phi'(f(p)),\phi(p))$. The diagonal of affine $X$ is closed, so this is a closed subscheme of $G\times T$, affine over $T$. The isomorphism functor therefore has affine local representatives with their canonical descent data; [F4] makes this affine descent datum effective. Thus the isomorphism functor is represented by an affine scheme over $T$, which proves the diagonal is affine, hence representable. [F1, F4, given, construct]

1.3 The torsor-with-map construction is a category fibred in groupoids by pullback. To verify the stack condition, take an fppf cover of $T$ and torsors with equivariant maps and compatible isomorphisms on its overlaps. The torsors are affine over their bases by [F4]. On affine opens of $T$, refine the cover by faithfully flat affine covers and apply the effective algebra descent of [F4]; its full faithfulness glues these descended affine schemes on overlaps. The action, torsor isomorphism $G\times P\simeq P\times_TP$, and maps to $X$ descend as scheme morphisms by [F1]. Their equivariance and compatibility identities can be checked after the cover, and the resulting $P\to T$ is fppf-locally the given torsor, hence is a torsor. Compatible isomorphisms descend uniquely in the same way, with inverses descending too. Thus morphisms form sheaves and every object descent datum is effective, exactly the stack condition of [F1]. [F1, F4, construct]

2.1 By steps 1.1–1.3, the quotient stack has a smooth surjective representable atlas and representable diagonal. Step 1.3 establishes the stack condition, so the criterion in [F2] applies and $[X/G]$ is an algebraic stack. The inherited AC appears only in [A1] through those defining suppliers. [A1, F2, step 1.1, step 1.2, step 1.3] ∎
