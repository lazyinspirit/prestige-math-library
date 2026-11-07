---
id: ex-what-is-not-implied-by-the-number-field-langlands-open-problem
kind: example
title: "Specific modularity results do not establish general number-field functoriality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 39
deps:
  - thm-wiles-semistable-elliptic-curves-over-q-are-modular
  - thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p
  - def-geometric-p-adic-galois-representation
  - def-unramified-galois-representation-at-a-place
  - def-de-rham-p-adic-galois-representation
  - def-hodge-tate-p-adic-galois-representation
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
axiom_use: >-
  AC and Countable Choice are assumed under the Galois-group conventions of
  the cited result interfaces. Their full source-proof uses, including the
  transitive DC dependency, are not audited in this example.
sources:
  references:
    - title: "Andrew Wiles, Modular Elliptic Curves and Fermat's Last Theorem, Introduction Theorem 0.4"
      url: "https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf"
      locator: "Introduction Theorem 0.4; the current library carrier records the full semistable-curve statement and its proof obligation."
    - title: "Xinyao Zhang, On the Fontaine–Mazur Conjecture for p=3, arXiv:2412.06812v5"
      url: "https://arxiv.org/abs/2412.06812v5"
      locator: "Theorem 1.0.2, printed pp. 2–3."
    - title: "Michael Emerton, Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations, §6.4.3"
      url: "https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf"
      locator: "§6.4.3, printed pp. 54–55: global functorial transfer along an L-homomorphism."
---

## Example

Assume AC and Countable Choice for the global and local Galois-group
conventions. The global Langlands functoriality assertion for number fields has the
following scope. For a number field $F$, connected reductive groups $G,H$ over
$F$ with $H$ quasi-split, an $L$-homomorphism $\eta:^LG\to{}^LH$, and an
automorphic representation $\pi$ of $G(\mathbb A_F)$, it predicts an
automorphic representation $\Pi$ of $H(\mathbb A_F)$ such that the
unramified Frobenius–Hecke conjugacy class of $\Pi_v$ is the image under
$\eta$ of that of $\pi_v$ for all but finitely many finite places $v$.
Here a connected reductive group is a smooth connected affine group whose
base change to an algebraic closure of $F$ has trivial unipotent radical;
quasi-split means that $H$ has an $F$-defined closed connected solvable
subgroup that is maximal after base change to an algebraic closure. The complex
dual groups $\widehat G$ and
$\widehat H$ have the root data of $G,H$ dualized by interchanging characters
with cocharacters and roots with coroots, and carry the natural Galois actions.
Write $^LG=\widehat G\rtimes\Gamma_F$ for
$\Gamma_F=\operatorname{Gal}(F^{\mathrm{sep}}/F)$. An $L$-homomorphism
respects the projection to $\Gamma_F$ and the Galois actions on the dual
groups; define $^LH=\widehat H\rtimes\Gamma_F$ in the same way. An
automorphic form is a smooth function on $G(F)\backslash G(\mathbb A_F)$ of
moderate growth and finite under the archimedean compact-group and center
actions. An automorphic representation is an irreducible subquotient of the
right-regular action on this space. At a finite place $v$ where $G$ has a
reductive integral model over its valuation ring $\mathcal O_v$, use the
hyperspecial compact subgroup $K_v=G(\mathcal O_v)$. If $\pi_v^{K_v}\ne0$,
the algebra of compactly supported
$K_v$-bi-invariant functions acts on this spherical line by a character; the
Satake isomorphism associates a semisimple conjugacy class in $\widehat G$.
The Frobenius–Hecke class pairs that with geometric Frobenius, the inverse of
arithmetic Frobenius.

For comparison, an elliptic curve over $\mathbb Q$ means a smooth projective
geometrically integral genus-one curve with a rational point. Good reduction
means that its minimal Weierstrass cubic is smooth; multiplicative reduction
means that this cubic has a node. Wiles's theorem concerns curves with one of
these reduction types at every prime and says they are modular: there is a
nonconstant $\mathbb Q$-morphism $X_0(N)\to E$ for some $N\ge1$, where
$X_0(N)$ is the smooth projective compactification over $\mathbb Q$ of
$\Gamma_0(N)\backslash\mathbb H$, $\Gamma_0(N)=\{\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\mathrm{SL}_2(\mathbb Z):N\mid c\}$,
and $\mathbb H=\{z\in\mathbb C:\operatorname{Im}(z)>0\}$. Zhang's theorem
concerns continuous irreducible two-dimensional representations of
$G_{\mathbb Q}$ at an odd prime, unramified outside finitely many finite
places, de Rham at $p$ with two distinct Hodge–Tate weights, and odd, meaning
$\det\rho(c)=-1$ for complex conjugation $c$. It concludes that they arise
from a cuspidal eigenform up to twist. These are specific
modularity results; their statements do not assert the universal transfer for
arbitrary $F,G,H$ and $\eta$.

## Example references

[[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]

[[thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p]]

[[def-geometric-p-adic-galois-representation]]

[[def-unramified-galois-representation-at-a-place]]

[[def-de-rham-p-adic-galois-representation]]

[[def-hodge-tate-p-adic-galois-representation]]

[[def-normalized-cuspidal-eigenform-over-gl2]]

[Andrew Wiles, *Modular Elliptic Curves and Fermat's Last Theorem*, Introduction Theorem 0.4](https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf)

[Xinyao Zhang, *On the Fontaine–Mazur Conjecture for p=3*, arXiv:2412.06812v5, Theorem 1.0.2](https://arxiv.org/abs/2412.06812v5)

[Michael Emerton, *Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations*, §6.4.3](https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice, the unramified global functoriality
formulation in the Example, and the current Wiles and Zhang statement
interfaces carried by the library.

[A1] [[def-axiom-of-choice]]: AC is assumed by the current global Galois-group
convention and the Wiles carrier's Statement.

[A2] [[def-countable-choice]]: Countable Choice is assumed by the current
local-place completion convention and the Zhang carrier's Statement.

[F1] [[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]: its current
Statement concerns semistable elliptic curves over $\mathbb Q$ and concludes
modularity by a map from a modular curve.

[F2] [[thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p]]:
its current Statement concerns continuous irreducible two-dimensional
representations of $G_{\mathbb Q}$ for odd $p$, with finite ramification,
distinct de Rham Hodge–Tate weights, and oddness.

[L3] [[def-dependent-choice]]: DC is in the transitive dependency closure of
the Zhang unramified-place interface, but the current supplier does not
identify an exact use.

[L1] [[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]: the current
carrier has no local proof; the scope comparison uses only its Statement and
does not claim the theorem's proof is accepted.

[L2] [[thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p]]:
the current carrier preserves the exact Zhang statement, but its full source
proof has not been reconstructed locally.

## Proof

1.1 By [F1], Wiles's statement has input an elliptic curve over $\mathbb Q$ with good or multiplicative reduction at every prime, and its conclusion is modularity of that curve. It contains no arbitrary number field, pair of reductive groups, or $L$-homomorphism. [F1, given]

1.2 By [F2], Zhang's statement has input one two-dimensional representation of $G_{\mathbb Q}$ for an odd $p$ and concludes that it arises from a cuspidal eigenform up to twist. It likewise contains no arbitrary pair $(G,H)$ or transfer map $\eta$. [F2, given]

2.1 The transfer formulation in the Given quantifies over arbitrary number fields, groups, $L$-homomorphisms, and automorphic representations, and requires matching local classes after applying $\eta$. The two preceding statements assert only their displayed modularity conclusions, so they illustrate special modularity results and do not state the general number-field functoriality assertion. This is a comparison of scopes, not a counterexample to functoriality. [given, step 1.1, step 1.2, algebra] ∎
