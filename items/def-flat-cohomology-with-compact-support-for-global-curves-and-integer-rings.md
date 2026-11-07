---
id: def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
kind: definition
title: "Flat cohomology with compact support and local restriction maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-finite-flat-group-scheme-and-cartier-dual
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - def-mapping-cone-of-a-chain-map
  - thm-long-exact-sequence-in-cohomology
  - def-global-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-tate-cohomology-for-finite-groups
justified_by: []
proof_strategy: direct
axiom_use: "Cohomology uses the site supplier's Axiom-of-Choice resolution branch. Real-place Tate terms also inherit Dependent Choice and the supplied complete-resolution convention from def-tate-cohomology-for-finite-groups. The mapping-cone long exact sequence adds no axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §§0.3–0.6"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §2 and Proposition 2.1"
      url: "https://arxiv.org/pdf/1804.03941"
    - title: "The Stacks Project, Cohomology, Section 59.14, Theorem 59.14.1"
      url: "https://stacks.math.columbia.edu/tag/03NT"
verification: {}
---

## Definition

Let $K$ be either a number field with $X=\operatorname{Spec}\mathcal O_K$,
or the function field of a smooth proper geometrically integral curve $X$
over a finite field, and let $U\subseteq X$ be a nonempty open subscheme.
For an abelian fppf sheaf $F$ on $U$, write $R\Gamma(U,F)$ for the right
derived sections complex on the fppf site. For every finite place $v\notin U$,
let $\widehat K_v$ be the completion of $K$ at $v$ and use the natural
restriction map $R\Gamma(U,F)\to R\Gamma(\widehat K_v,F)$. In the number-field
case, for each real place $v$ let $F_v$ be the generic fibre over $K_v$, let
$M_v=F_v(\mathbb C)$ with its $\operatorname{Gal}(\mathbb C/\mathbb R)$-action,
and fix the supplied complete resolution $P_{\bullet,v}$ from the Tate
cohomology convention. Use the cochain complex
$\widehat{R\Gamma}(G_v,M_v):=\operatorname{Hom}_{\mathbb Z[G_v]}
(P_{\bullet,v},M_v)$ at $v$, where $G_v=\operatorname{Gal}(\mathbb C/\mathbb R)$; its cohomology is the supplied Tate cohomology,
and no canonical identification between different supplied resolutions is
asserted. Complex places contribute zero. Define
$$
R\Gamma_c(U,F):=\operatorname{Cone}\!\left(R\Gamma(U,F)\longrightarrow
\bigoplus_{v\notin U,\ v\text{ finite}}R\Gamma(\widehat K_v,F)
\oplus\bigoplus_{v\text{ real}}\widehat{R\Gamma}(G_v,M_v)\right)[-1],
$$
where the real-place sum is omitted for function fields, and put
$H_c^r(U,F)=H^r(R\Gamma_c(U,F))$. The displayed cone fixes the compact-support
and local-restriction convention used here; for a Henselian discrete valuation
ring $R$ with fraction field $L$, define cohomology supported at its closed
point by
$$
R\Gamma_x(R,F):=\operatorname{Cone}(R\Gamma(R,F)\to R\Gamma(L,F))[-1],
\qquad H_x^r(R,F):=H^r(R\Gamma_x(R,F)).
$$

## Definition references

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-tate-cohomology-for-finite-groups]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §§0.3–0.6](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §2 and Proposition 2.1](https://arxiv.org/pdf/1804.03941)

[The Stacks Project, Theorem 59.14.1](https://stacks.math.columbia.edu/tag/03NT)

## Facts & Assumptions

**Given:** AC, a global curve $X$, a nonempty open $U\subseteq X$, and an
abelian fppf sheaf $F$ on $U$. DC is additionally used only when the
number-field branch has real places.

[F1] [[thm-abelian-sheaves-on-a-site-have-enough-injectives]]: the category of
abelian sheaves on the fppf site is abelian and has enough injectives, so
$R\Gamma$ is defined.

[F2] [[def-mapping-cone-of-a-chain-map]]: for a cochain map $f:A^\bullet\to
B^\bullet$, its cone has degree-$n$ term $B^n\oplus A^{n+1}$ and the standard
cone differential; the shift convention is cohomological.

[F3] [[thm-long-exact-sequence-in-cohomology]]: a short exact sequence of
cochain complexes induces its natural long exact cohomology sequence.

[F4] [[def-global-field]] and [[def-number-field]] fix the two allowed global
field cases; [[def-place-of-a-global-field]] and
[[def-completion-of-a-global-field-at-a-place]] define their finite places and
completions.

[F5] [[def-tate-cohomology-for-finite-groups]]: the real-place complex uses a
supplied complete resolution, and its cohomology is Tate cohomology. That
supplier assumes DC and does not assert canonical comparison between different
supplied resolutions.

[F6] [[def-finite-flat-group-scheme-and-cartier-dual]] supplies the finite-flat
coefficient sheaves and duals to which this compact-support convention is
applied in the duality items on this page.

[A1] [[def-axiom-of-choice]]: AC supplies the injective-resolution, place, and
completion interfaces used in the definition.

[A2] [[def-dependent-choice]]: DC is used only to supply the real-place Tate
cohomology datum in [F5]; the function-field compact-support branch has no
archimedean Tate term.

[L1] Demarche–Harari, §2, defines the fppf compact-support complex by a cone
using completed local fields and real Tate complexes. Its Proposition 2.1(1)
derives the restriction long exact sequence from that cone. Their full proof
also records that the comparison between completion and henselization is a
separate issue in positive characteristic.
[Demarche–Harari, §2 and Proposition 2.1](https://arxiv.org/pdf/1804.03941)

## Proof

**Proof technique:** define derived sections and verify the cone boundary
sequence.

**Given:** AC, the global curve data, and DC for any real-place Tate summands in the number-field branch.

1.1 The set-sized fppf site has enough injectives by [F1], so an injective
resolution $F\to I^\bullet$ exists and $R\Gamma(U,F)$ and each local derived
sections complex are defined by applying sections to the corresponding
restricted resolution. [given, F1, A1]

1.2 The restriction maps to the finite complement and the real Tate cochain
complexes in [F4]–[F5] assemble into the displayed map of complexes. Applying the mapping-cone
construction [F2] to that specific map defines $R\Gamma_c(U,F)$; the same
construction for $R\Gamma(R,F)\to R\Gamma(L,F)$ defines $R\Gamma_x(R,F)$.
[F2, F4, F5, A2, step 1.1, construct]

2.1 In every degree, the cone complex has a termwise split short exact sequence
from its target complex into the cone and then onto the shift of its source.
Applying [F3] gives the restriction long exact sequence
$$\cdots\to H_c^r(U,F)\to H^r(U,F)\to\bigoplus_{v\notin U}H^r(\widehat K_v,F)\to H_c^{r+1}(U,F)\to\cdots,$$
with Tate groups at real places. The local-support sequence follows by the same
cone argument. [F2, F3, step 1.2, algebra] ∎
