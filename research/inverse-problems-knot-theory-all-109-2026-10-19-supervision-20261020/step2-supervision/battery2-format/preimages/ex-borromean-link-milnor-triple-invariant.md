---
id: ex-borromean-link-milnor-triple-invariant
kind: example
title: The Borromean string link has nonzero triple Milnor invariant
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-lower-central-series-and-magnus-expansion-for-links
  - def-milnor-integer-and-residue-invariants
  - lem-magnus-commutator-degree-and-truncation
  - lem-link-peripheral-longitude-word-from-diagram
  - lem-link-wirtinger-local-meridian-conjugacy
  - thm-string-link-nilpotent-peripheral-identifications
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - alg-oriented-linking-number-from-diagram
  - thm-oriented-linking-number-scan-terminates-and-is-correct
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §§4–5, PDF pp. 14–16, Borromean example and triple-linking coefficient
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: §2.5, printed pp. 16–18 (PDF pp. 24–26), Magnus coefficient convention
    - title: Eric W. Weisstein, Braid Word, Wolfram MathWorld
      url: https://mathworld.wolfram.com/BraidWord.html
      locator: The table at lines 21–24 lists sigma_1 inverse sigma_2 repeated three times as a Borromean braid word; used only to identify the matching closure
---

## Example

Assume AC. Let $\tau_B$ be the based 3-string link represented by the pure
braid word
$$\beta=(\sigma_1^{-1}\sigma_2)^3=\sigma_1^{-1}\sigma_2\sigma_1^{-1}\sigma_2\sigma_1^{-1}\sigma_2,$$
using the library's braid-group product, in which the right factor is stacked
below the left factor. Thus the six factors from bottom to top are
$\sigma_2,\sigma_1^{-1},\sigma_2,\sigma_1^{-1},\sigma_2,\sigma_1^{-1}$.
Here $\sigma_i$ is the positive geometric half twist of adjacent strands in
the crossing convention for this library, and labels $1,2,3$ are assigned from
left to right at the bottom. Close each top endpoint to the corresponding
bottom endpoint outside the braid cylinder by crossing-free closure arcs; the
matching closure is a Borromean link. Use the bottom meridians and the
diagram-induced blackboard product-tube parallels for this based braid. The
third string-link longitude and the matching based longitude of its closed
link have truncated expansion
$$E(\lambda_3)=1+X_1X_2-X_2X_1\pmod{\mathfrak m^3},$$
so $\mu_{\tau_B}(1,2,3)=1$. Every pairwise linking number of the closed braid
is zero, and its based closed-link residue candidate is
$\bar\mu^b_{\widehat{\tau}_B}(1,2,3)=1$.

~~~tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  % Six adjacent half-twists, read from bottom to top in the stated product convention.
  % sigma_2
  \draw[gray] (0,0) -- (0,1);
  \draw[thick,dashed,->] (1,0) .. controls (1.25,0.25) and (1.75,0.75) .. (2,1);
  \draw[thick,->] (2,0) .. controls (1.75,0.25) and (1.25,0.75) .. (1,1);
  \node at (0.55,0.5) {$\sigma_2$};
  % sigma_1^{-1}
  \draw[thick,dashed,->] (1,1) .. controls (0.75,1.25) and (0.25,1.75) .. (0,2);
  \draw[thick,->] (0,1) .. controls (0.25,1.25) and (0.75,1.75) .. (1,2);
  \draw[gray] (2,1) -- (2,2);
  \node at (1.45,1.5) {$\sigma_1^{-1}$};
  % sigma_2
  \draw[gray] (0,2) -- (0,3);
  \draw[thick,dashed,->] (1,2) .. controls (1.25,2.25) and (1.75,2.75) .. (2,3);
  \draw[thick,->] (2,2) .. controls (1.75,2.25) and (1.25,2.75) .. (1,3);
  \node at (0.55,2.5) {$\sigma_2$};
  % sigma_1^{-1}
  \draw[thick,dashed,->] (1,3) .. controls (0.75,3.25) and (0.25,3.75) .. (0,4);
  \draw[thick,->] (0,3) .. controls (0.25,3.25) and (0.75,3.75) .. (1,4);
  \draw[gray] (2,3) -- (2,4);
  \node at (1.45,3.5) {$\sigma_1^{-1}$};
  % sigma_2
  \draw[gray] (0,4) -- (0,5);
  \draw[thick,dashed,->] (1,4) .. controls (1.25,4.25) and (1.75,4.75) .. (2,5);
  \draw[thick,->] (2,4) .. controls (1.75,4.25) and (1.25,4.75) .. (1,5);
  \node at (0.55,4.5) {$\sigma_2$};
  % sigma_1^{-1}
  \draw[thick,dashed,->] (1,5) .. controls (0.75,5.25) and (0.25,5.75) .. (0,6);
  \draw[thick,->] (0,5) .. controls (0.25,5.25) and (0.75,5.75) .. (1,6);
  \draw[gray] (2,5) -- (2,6);
  \node at (1.45,5.5) {$\sigma_1^{-1}$};
  \node at (0,6.25) {$1$};\node at (1,6.25) {$2$};\node at (2,6.25) {$3$};
  \node at (0,-0.3) {$1$};\node at (1,-0.3) {$2$};\node at (2,-0.3) {$3$};
  \node at (1,-0.75) {bottom-to-top braid; close matching labels outside};
\end{tikzpicture}
~~~

The dashed branch is the under-strand and each arrow points from bottom to top.
The labels at the top and bottom agree because the braid is pure. The diagram
records the word only; the proofs below use the explicit crossing sequence and
group words.

## Example references

[Milnor, *Link Groups*, §§4–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

[Stees, §2.5](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content)

[Wolfram MathWorld, Borromean Rings](https://mathworld.wolfram.com/BorromeanRings.html)

## Facts & Assumptions

**Given:** The based string link, the stated braid diagram, and its product-tube basing.

[A1] Full AC, written AC, supplies the classifying-space and nilpotent-quotient branch. [[def-axiom-of-choice]]

[F1] The positive Artin generator is the positive geometric half twist in the fixed crossing convention, and its inverse reverses the over/under choice. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]

[F2] The based string-link longitude is the ordered product of the over-meridians encountered at its undercrossings, with exponent determined by source-to-target direction. [[lem-link-peripheral-longitude-word-from-diagram]]

[F3] The finite lower-central quotient identifies the bottom and top peripheral systems, and the Magnus coefficient defines $\mu_{\tau_B}(1,2,3)$. [[thm-string-link-nilpotent-peripheral-identifications]], [[def-milnor-integer-and-residue-invariants]]

[F4] The diagram linking-number scan returns one half the signed mixed-crossing sum. [[alg-oriented-linking-number-from-diagram]], [[thm-oriented-linking-number-scan-terminates-and-is-correct]]

[F5] **External input:** The standard closure of the braid word $(\sigma_1^{-1}\sigma_2)^3$ is the Borromean rings. Wolfram MathWorld lists this exact word as a Borromean braid; this input identifies the closure, while the pairwise-linking and Milnor-coefficient calculations are proved below. [Wolfram MathWorld, Braid Word](https://mathworld.wolfram.com/BraidWord.html)

## Verification

**Given:** The braid word and the input conventions in the Example.

1.1 The rightmost factor is stacked lowest, so the factors from bottom to top are $\sigma_2,\sigma_1^{-1},\sigma_2,\sigma_1^{-1},\sigma_2,\sigma_1^{-1}$. Starting from the bottom positions, the component-position sequence after successive crossings is $(1,2,3)$, $(1,3,2)$, $(3,1,2)$, $(3,2,1)$, $(2,3,1)$, $(2,1,3)$, $(1,2,3)$. The six crossing-label pairs and signs in that order are respectively $(2,3,+1)$, $(1,3,-1)$, $(1,2,+1)$, $(2,3,-1)$, $(1,3,+1)$, and $(1,2,-1)$, as determined by the signed generators in the braid word and [F1]. Thus the closure returns each label to its own endpoint, and each component pair crosses twice with opposite signs. By [F4] each pairwise linking number is half the signed mixed-crossing sum, hence is zero. [F1, F4, given, construct]

2.1 At crossing 1, component 2 passes under component 3, so its meridian becomes $B=x_3^{-1}x_2x_3$. At crossing 2, component 3 passes under component 1 and contributes the longitude factor $x_1^{-1}$. At crossing 3, component 1 passes under component 2, so its meridian becomes $C=B^{-1}x_1B$. At crossing 5, component 3 passes under component 1 and contributes the factor $C$. The other crossings do not put component 3 under. Hence $\lambda_3=x_1^{-1}C=x_1^{-1}B^{-1}x_1B$. [F2, given, step 1.1, algebra]

2.2 In $R_2$, $E(B)\equiv1+X_2\pmod{\mathfrak m^2}$, so
$$E(C)=E(B)^{-1}(1+X_1)E(B)=1+X_1+X_1X_2-X_2X_1\pmod{\mathfrak m^3}.$$
Since $E(x_1^{-1})=1-X_1+X_1^2$, multiplication gives
$$E(\lambda_3)=E(x_1^{-1})E(C)=1+X_1X_2-X_2X_1\pmod{\mathfrak m^3}.$$
Under [A1], the $X_1X_2$ coefficient is $+1$, so [F3] gives $\mu_{\tau_B}(1,2,3)=1$. [A1, F3, step 2.1, algebra, construct]

3.1 The computed longitude has zero degree-one term, as required by the chosen untwisted based peripheral system. Closing the endpoints along crossing-free arcs adds no undercrossing factor, and component 3 has self-writhe zero, so the same word is its based closed-link preferred longitude by [F2]. Every proper length-two subsequence in $\Delta_{123}^b$ is a pairwise linking number, so step 1.1 makes $\Delta_{123}^b=0$. Thus the same coefficient gives the closed-link residue candidate $1$. [F2, F3, step 1.1, step 2.2] ∎
