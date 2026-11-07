---
id: lem-local-artin-character-invariant-pairing
kind: lemma
title: Local reciprocity is adjoint to the invariant character pairing
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
- def-local-artin-reciprocity-map
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-axiom-of-choice
- def-dependent-choice
proof_strategy: direct
axiom_use: The original AC/DC hypotheses are preserved. The supplied Artin map is
  the distinguished canonical character construction; its property applies directly
  to the finite inflated character. No mixed Tate cup-product associativity or unresolved
  arbitrary-tensor theorem is imported.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Romyar Sharifi, Algebraic Number Theory, Chapter 8 §8.1
    url: https://math.ucla.edu/~sharifi/notes/algnum-ch08.html
    locator: Propositions 8.1.7 and 8.1.10 and Lemma 8.1.9, including their complete
      proofs, lines 81–134.
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter III §4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: The local invariant and character-pairing argument in the proof of Theorem
      4.4, printed pp.112–114.
verification: {}
---


## Statement

Assume AC and DC. Let $K$ be a complete discretely valued field with finite
residue field, fix a separable closure $K_s$, and put
$G_K=\operatorname{Gal}(K_s/K)$. Let $L/K$ be finite abelian,
$G=\operatorname{Gal}(L/K)$, and let $\chi:G\to\mathbb Q/\mathbb Z$ be a
group homomorphism. Let $\delta(\chi)\in H^2(G,\mathbb Z)$ be the
connecting class for the exact sequence of trivial $G$-modules
$0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$, and also write
$\delta(\chi)$ for its inflation to $H^2_{\mathrm{cts}}(G_K,\mathbb Z)$.
Let $\operatorname{inv}_K:H^2_{\mathrm{cts}}(G_K,K_s^\times)\to
\mathbb Q/\mathbb Z$ be the normalized local class-formation
isomorphism,
and let $\operatorname{inv}_{L/K}:H^2(G,L^\times)\to
(\frac1d\mathbb Z)/\mathbb Z$ be the induced finite-level invariant, where
$d=[L:K]$. Assume it is an isomorphism, and let $u_{L/K}$ be its unique
class with invariant $1/d+\mathbb Z$. Let
$\operatorname{rec}_K:\widehat{K^\times}\to
\operatorname{Gal}(K^{\mathrm{ab}}/K)$ be the local Artin map normalized so a
uniformizer maps to arithmetic Frobenius on every finite unramified
extension, where $K^{\mathrm{ab}}$ is the maximal abelian extension in
$K_s$. View $a\in K^\times=H^0_{\mathrm{cts}}(G_K,K_s^\times)$ as a
degree-zero cohomology class, and use the cup product formed with the
coefficient pairing $K_s^\times\times\mathbb Z\to K_s^\times$,
$(x,m)\mapsto x^m$. Then
$$
\operatorname{inv}_K\bigl(a\smile\delta(\chi)\bigr)
=\chi\!\left(\operatorname{rec}_K(\bar a)|_L\right),
$$
where $\bar a$ is the image of $a$ in $\widehat{K^\times}$ and the
restriction is viewed as an element of $G$.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-local-artin-reciprocity-map]]

[[def-local-galois-cohomology-cup-product]]

[[def-local-invariant-map-of-the-brauer-group]]

[[thm-local-class-formation-for-finite-residue-local-field]]

[[thm-tate-nakayama-for-class-formations]]

[[thm-local-artin-reciprocity-and-norm-index]]

## Facts & Assumptions

**Given:** The original AC/DC, local field, finite abelian extension $L/K$,
character $\chi$, supplied normalized invariant and canonical local Artin
map; the finite fundamental class in the Statement is retained.

[F1] The distinguished local Artin map satisfies
$\widetilde\chi(\operatorname{rec}_K(a))
=\operatorname{inv}_K(a\smile\delta\widetilde\chi)$ for every finite-order
continuous character $\widetilde\chi$ of $G_K$, with coefficient pairing
$(a,m)\mapsto a^m$.
[[def-local-artin-reciprocity-map]]
[[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F2] Continuous normalized cochains use the explicit inhomogeneous
differential; quotient inflation is composition and commutes with the
Bockstein computed from a rational lift.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[A1] AC and DC are the original Statement hypotheses and those of the
canonical construction's existence theorem.
[[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** specialize the canonical finite-character property,
with the actual inflated Bockstein cochain.

**Given:** The data above.

1.1 Inflate $\chi:\operatorname{Gal}(L/K)\to\mathbb Q/\mathbb Z$ to
$\widetilde\chi:G_K\to\mathbb Q/\mathbb Z$. It is continuous and
finite order, since its quotient is finite discrete. Choose one rational
lift on that finite quotient. Its differential is an integer-valued
normalized $2$-cocycle, and composition with the quotient map is precisely
the differential of its inflated lift. Hence
$\delta\widetilde\chi=\operatorname{Inf}(\delta\chi)$ as actual
continuous cochains, not merely by an unstated comparison theorem.
[F2, given, construct, algebra]

1.2 Apply [F1] to $a$ and $\widetilde\chi$, using the supplied normalized
invariant in the Statement. The left side is
$\chi(\operatorname{rec}_K(\bar a)|_L)$, and step1.1 identifies its
right side with $\operatorname{inv}_K(a\smile\delta\chi)$ in the
Statement's notation. This proves the full claimed identity. The finite
fundamental class is not needed for this characterization proof; it remains
part of the original supplied data. No identity between a separately
constructed negative Tate cup product and a double boundary is assumed.
[A1, F1, F2, step 1.1, algebra] ∎
