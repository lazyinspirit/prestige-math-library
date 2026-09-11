---
id: cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms
kind: corollary
title: Singular cohomology satisfies the Eilenberg Steenrod cohomology axioms
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-naturality-of-the-singular-cohomology-pair-sequence, thm-excision-for-singular-cohomology, def-axiom-of-choice, def-singular-cochain-complex-with-coefficients, def-relative-singular-cochain-complex, def-prism-operator-for-a-homotopy, thm-singular-chain-homotopy-formula, thm-path-connected-implies-connected, lem-finite-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, Cohomology Axioms, printed page 202; Miller section27 printed page75
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

For every abelian group $G$, singular cohomology has functorial pair sequences, homotopy invariance for maps of pairs, pair exactness and excision. It satisfies the dimension axiom $H^0(*;G)=G$ and $H^n(*;G)=0$ for $n\ne0$. Assuming AC for arbitrary-index additivity, the inclusions induce an isomorphism
$$H^n\left(\coprod_{i\in I}X_i;G\right)\xrightarrow{\ \sim\ }\prod_{i\in I}H^n(X_i;G)$$
for every set-indexed family of spaces. Finite additivity and the other stated axioms need no AC. These are additive cohomology axioms; multiplication is additional structure.

## Facts & Assumptions

[F1] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] proves absolute homotopy invariance. [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-naturality-of-the-singular-cohomology-pair-sequence]] and [[thm-excision-for-singular-cohomology]] prove pair exactness, functoriality and excision, choice-free.

[F2] [[def-prism-operator-for-a-homotopy]] gives every prism simplex as a composite through the specified homotopy. [[thm-singular-chain-homotopy-formula]] gives $f_{1\#}-f_{0\#}=dP+Pd$ in all nonnegative degrees. [[def-relative-singular-cochain-complex]] identifies relative cochains with Hom on the quotient chains.

[F3] [[def-singular-cochain-complex-with-coefficients]] gives the positive coboundary and arbitrary simplex-function description.

[F4] [[thm-path-connected-implies-connected]] includes connectedness of $[0,1]$. [[def-axiom-of-choice]] supplies arbitrary simultaneous selections; [[lem-finite-choice]] supplies finite selections without AC.

## Proof

**Given:** $G$, spaces and pairs as stated. AC is assumed only in steps concerning arbitrary families of representatives or primitives.

1.1 Let $H:(X,A)\times I\to(Y,B)$ be a homotopy of pair maps. If a singular simplex has image in $A$, every prism simplex in [F2] has image in $B$ because $H(A\times I)\subseteq B$. Thus $P$ descends to a degree-one map on relative chains, and its identity descends to $\bar f_{1\#}-\bar f_{0\#}=d\bar P+\bar P d$. Precomposing relative cochains with $\bar P$ gives $K^n\varphi=\varphi\bar P_{n-1}$ for $n\ge1$ and $K^0=0$. Direct composition yields $f_1^*-f_0^*=\delta K+K\delta$, with the first term zero in degree zero. On a cocycle the difference is a coboundary, proving relative homotopy invariance. Absolute invariance and all pair exactness/naturality and excision assertions are those of [F1], with the same actual restriction and connecting maps. [F1, F2, F3, given]

1.2 There is exactly one singular simplex $e_n$ of a point in every degree $n\ge0$. Its boundary for $n>0$ is $\left(\sum_{j=0}^n(-1)^j\right)e_{n-1}$, equal to $e_{n-1}$ for even $n$ and zero for odd $n$. Hence its cochain group is $G$ in every nonnegative degree, and $\delta^n$ is zero for even $n$ and identity for odd $n$. At $n=0$ the kernel is all of $G$ and there are no incoming coboundaries. At odd positive $n$ the kernel is zero; at even positive $n$ the incoming image is all of $G$. Negative cochain groups are zero. These calculations prove the dimension axiom for arbitrary $G$ without removing degenerate simplices. [F3, given]

1.3 Put $X=\coprod_iX_i$. Every simplex $\sigma:\Delta^n\to X$ lies in exactly one summand. Indeed its first vertex lies in one $X_i$, and a straight segment from that vertex to any other point of $\Delta^n$ gives a path whose image cannot leave $X_i$: otherwise the inverse images of the clopen summand $X_i$ and its complement would separate the connected interval of [F4]. Thus the simplex sets form the disjoint union of the summand simplex sets. A cochain on $X$ is therefore exactly a tuple of arbitrary cochains on the $X_i$, by restriction and combination of their functions. Faces remain in the same summand, so this identifies the cochain complex with the product complex, with coordinatewise differential. [F3, F4, given]

2.1 For this product complex, a tuple is closed exactly when every coordinate is closed. Sending its class to the tuple of coordinate classes defines the displayed map and is additive. If its image is zero, each coordinate cocycle $z_i$ is a coboundary. When $n\ge1$, AC selects a primitive $u_i$ with $\delta u_i=z_i$ from each nonempty primitive set; then the tuple $u$ is a cochain and $\delta u=z$. At $n=0$, there are no incoming boundaries, so every $z_i$ is already zero and $z=0$. This proves injectivity. Given any tuple of cohomology classes, AC selects one cocycle representative $z_i$ from each nonempty class; the combined tuple is closed and maps to those classes, proving surjectivity. All selections are from sets indexed by the given set $I$. [F3, F4, step 1.3]

3.1 The isomorphism in step 2.1 is induced by the summand inclusions because step 1.3 defined it by restrictions, so its map is canonical despite the choices used to show bijectivity. For finite $I$ the two selections in step 2.1 use only finite choice from [F4]. For empty $I$, both the cochain groups of the empty space and the empty product of abelian groups are zero; the same map is the unique isomorphism. For one index it is the identity. Zero coefficients, empty summands and zero cohomology degrees cause no exception. Together with steps 1.1 and 1.2, this proves the stated axioms and their exact choice boundary, without asserting any multiplication axiom. [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3, step 2.1] ∎
