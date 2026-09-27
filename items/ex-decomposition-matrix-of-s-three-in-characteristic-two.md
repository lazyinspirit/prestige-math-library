---
id: ex-decomposition-matrix-of-s-three-in-characteristic-two
kind: example
title: "The decomposition matrix of S3 in characteristic two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-decomposition-map-from-ordinary-to-modular-grothendieck-groups, def-decomposition-numbers-and-decomposition-matrix, ex-p-regular-classes-of-s-three, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Example

For $S_3$ in characteristic $2$, with ordinary irreducibles ordered as
$(1,\operatorname{sgn},\operatorname{std})$ and irreducible Brauer characters
ordered as $(\varphi_{\mathrm{triv}},\varphi_{\mathrm{std}})$, the
decomposition matrix is

$$\begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The ordinary trivial, sign, and standard characters of $S_3$ in characteristic $2$.

[F1] The decomposition matrix is defined by the expansions of the restricted ordinary characters in the irreducible Brauer basis ([[def-decomposition-numbers-and-decomposition-matrix]]).

[F2] The decomposition map records those modular reductions ([[def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]]).

[L1] The $2$-regular classes of $S_3$ are represented by $1$ and $(123)$ ([[ex-p-regular-classes-of-s-three]]).

[L2] The irreducible Brauer characters form a basis of the class functions on the $2$-regular classes ([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], only the values at $1$ and $(123)$ matter. The ordinary trivial and sign characters both restrict to $(1,1)$ on those classes, because a $3$-cycle is even. The ordinary standard character restricts to $(2,-1)$. [L1, given, algebra]

2.1 Let $k$ be an algebraic closure of $\mathbb F_2$ and let $W=\{(x_1,x_2,x_3)\in k^3:x_1+x_2+x_3=0\}$ with the permutation action of $S_3$. It is the reduction of the integral sum-zero lattice for the ordinary standard representation. A $3$-cycle acts on $W$ with the two distinct nontrivial cubic-root eigenvalues; a transposition interchanges their eigenlines. Thus no line in $W$ is $S_3$-invariant, so $W$ is simple. By [F2] its Brauer character is the restricted ordinary standard character $(2,-1)$, while the trivial module gives $(1,1)$. These two characters are independent on the two $2$-regular classes, so [L2] shows that they are the full irreducible Brauer basis. Consequently [F1] writes the restricted ordinary characters as $$1^0=\varphi_{\mathrm{triv}},\qquad \operatorname{sgn}^0=\varphi_{\mathrm{triv}},\qquad \operatorname{std}^0=\varphi_{\mathrm{std}}.$$ [F1, F2, L1, L2, step 1.1, algebra]

3.1 Reading off the coefficients yields the displayed decomposition matrix. [step 2.1] ∎
