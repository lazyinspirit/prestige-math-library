---
id: lem-linking-number-equals-four-dimensional-intersection-number
kind: lemma
title: "Boundary linking is intersection of bounding chains in the four-ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - thm-linking-number-equals-signed-intersection
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-oriented-intersection-number
  - def-local-oriented-intersection-sign
  - def-product-orientation
  - def-induced-boundary-orientation
  - lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.6, printed p. 323"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Theorem 3.13, printed pp. 27–29; linking as intersection with a spanning surface"
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ and $\beta$ be disjoint finite rational $1$-cycles in the boundary $S^3$ of the standard oriented $4$-ball $B^4$, each represented as a finite rational linear combination of oriented knots. Let $P$ and $Q$ be finite rational $2$-chains in $B^4$ with $\partial P=\alpha$ and $\partial Q=\beta$, with common standard product collars at their respective boundaries and with their interiors in general position. Then the signed interior intersection number $P\cdot Q$ equals the bilinear extension of the linking number $\operatorname{lk}(\alpha,\beta)$ defined by positive meridians in $S^3$.

## Statement references

[[thm-linking-number-equals-signed-intersection|Linking is signed intersection with a spanning surface in the three-sphere]]

[[def-oriented-intersection-number|The signed intersection number of transverse chains]]

## Facts & Assumptions

**Given:** Full AC, disjoint oriented boundary cycles in $S^3$, collared rational bounding chains in $B^4$, and general position for their interiors.

[A1] The Axiom of Choice is assumed in the supplied topological linking-number convention. [[def-axiom-of-choice]]

[F1] For disjoint oriented knots, linking is the signed intersection of the first knot with an oriented Seifert surface spanning the second. [[thm-linking-number-equals-signed-intersection]]

[F5] Every oriented knot in $S^3$ bounds a compact oriented smooth Seifert surface. [[thm-every-oriented-knot-bounds-a-seifert-surface]]

[F2] A compact oriented $1$-manifold has signed boundary count zero. [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]

[F3] The standard $4$-ball is contractible, so its interior has zero second rational homology. [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]

[F4] The local sign of a transverse intersection is determined by the ordered tangent bases and ambient orientation; boundary orientations use the outward-normal-first convention and product orientations preserve the stated factor order. [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]], [[def-induced-boundary-orientation]], [[def-product-orientation]]

## Proof

1.1 First consider disjoint oriented knots $\alpha,\beta$ and two admissible choices $P,P'$ bounding $\alpha$ with the same product collar, while $Q$ is fixed. Their difference $C=P-P'$ is a closed rational $2$-cycle supported in the interior of $B^4$, because the common boundary collars cancel. By [F3], $C=\partial Z$ for a finite rational $3$-chain $Z$ supported in the interior. Put $Z$ and $Q$ in general position relative to their boundary collars. The transverse intersection $Z\cap Q$ is a compact oriented $1$-chain. The product-orientation convention in [F4] makes its boundary count equal to the intersection count $(P-P')\cdot Q$ plus the term from $Z\cap\partial Q$; the latter is empty because $Z$ lies in the interior and $\partial Q=\beta\subset S^3$. By [F2], its signed boundary count is zero, so $P\cdot Q=P'\cdot Q$. The same argument with $Q-Q'$ shows independence of the second bounding chain. Bilinearity gives this independence for finite rational combinations of knots. [A1, F2, F3, F4, given, construct]

1.2 By [F5], choose an oriented Seifert surface $S_\beta\subset S^3$ for each knot component of $\beta$, and similarly choose a cap for each component of $\alpha$. It suffices by bilinearity to consider one knot component of each. Choose a collar depth $0<\epsilon$ in $B^4$. Make $Q$ a graph of $S_\beta$ in the boundary collar with depth zero on $\beta$ and strictly between $0$ and $\epsilon/2$ on its interior. Make $P$ consist of the product collar $\alpha\times[0,\epsilon]$ followed by a cap at depth $\epsilon$. Then $P$ and $Q$ intersect exactly above $\alpha\cap S_\beta$. At each such point, the oriented tangent basis of the collar of $P$ is $(n_{\mathrm{out}},a)$, where $a$ is the positive tangent to $\alpha$ and $n_{\mathrm{out}}$ is the outward normal of $B^4$; the tangent basis of $Q$ is a positive basis $(s_1,s_2)$ of $S_\beta$, up to radial components which do not change the determinant. By [F4], $(n_{\mathrm{out}},a,s_1,s_2)$ is positive exactly when $(a,s_1,s_2)$ is positive in the boundary orientation. Thus the $4$-dimensional intersection sign is exactly the $3$-dimensional sign of $\alpha\cap S_\beta$. Hence $P\cdot Q=\operatorname{lk}(\alpha,\beta)$ by [F1]. [F1, F4, F5, given, construct]

2.1 Step 1.1 shows the intersection number is independent of admissible collared bounding chains, and step 1.2 computes it for one convenient choice. Hence the equality holds for all such $P,Q$ when the boundaries are knots. Expanding finite rational cycles into their oriented knot components and using bilinearity of both signed intersection and linking proves the stated equality. [F1, step 1.1, step 1.2, algebra] ∎
