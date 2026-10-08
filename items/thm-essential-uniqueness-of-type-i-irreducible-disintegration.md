---
id: thm-essential-uniqueness-of-type-i-irreducible-disintegration
kind: theorem
title: Essential uniqueness of the type I irreducible disintegration
deps:
- thm-irreducible-direct-integral-decomposition-for-type-i-groups
- thm-essential-uniqueness-of-central-decomposition
- lem-multiplicity-of-a-type-i-factor-representation-is-well-defined
- def-axiom-of-choice
dependency_level: 9
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)
    url: https://arxiv.org/pdf/1912.07262
    locator: 'Chapter 6, §6.D: Theorem 6.D.7 and its uniqueness clause, printed p. 202; §6.C: Theorem 6.C.8 uniqueness, printed p. 198'
  - title: 'Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)'
    url: https://bruceblackadar.com/Mathematics/Cycr.pdf
    locator: 'Part IV, §1.5: IV.1.5.12 and the multiplicity discussion, printed pp. 360-361'
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
axiom_use: 'AC is inherited from existence, central transport and multiplicity uniqueness. No new selector is needed: the transport field already exists, and equality of its actual class labels forces the base map to be the identity. The zero representation forces both measures to be zero. One-point, atomic and non-atomic supports, as well as finite or infinite multiplicities, use the same fibrewise argument.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact group of type I and let $(\pi,H)$ be a strongly continuous unitary representation on a separable Hilbert space, with irreducible direct integral decompositions over $\widehat G$ as in [[thm-irreducible-direct-integral-decomposition-for-type-i-groups]], with measures $\mu,\nu$ and multiplicity functions $m,n$. Then $\mu$ and $\nu$ are equivalent measures on $\widehat G$ and $m=n$ almost everywhere; the decomposition is unique in this sense, and the pair $(\text{measure class},[m])$ is an invariant of $\pi$.

## Facts & Assumptions

[F1] The type-I dual-labelled disintegration exists, with measurable multiplicities and irreducible fields on conull standard-Borel supports; its Proof7.1–8.1 proves that the resulting models are central ([[thm-irreducible-direct-integral-decomposition-for-type-i-groups]]).

[F2] Two central decompositions are related by a conull bimeasurable measure-class bijection and a measurable field of fibre unitaries ([[thm-essential-uniqueness-of-central-decomposition]]).

[F3] A unitary between positive finite/countable amplifications of irreducible unitary representations forces equality of irreducible classes and multiplicities ([[lem-multiplicity-of-a-type-i-factor-representation-is-well-defined]]). AC is [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

**Given:** AC and the hypotheses and notation of the Statement.

1.1 In the zero-space case both measures are zero: otherwise the positive-measure support with nonzero irreducible amplified fibres would give a nonzero square-integrable localized fundamental section, contradicting the zero direct integral. The measures are then equivalent and the almost-everywhere multiplicity assertion is vacuous. For $H\ne0$, every model satisfying the labelled decomposition conditions of [F1] is central on its conull standard-Borel support: repeat the intrinsic ideal-support and fibre-centre argument of [F1] for that model. The intrinsic ideal-range projections are scalar indicators of the same countable generating ideal-opens, hence the full diagonal algebra lies in the generated algebra; the fibre centre is scalar, so the centre is exactly that diagonal algebra. That argument uses finite-measure localizations and applies to sigma-finite measures as well as to the normalized probability measure used in the existence construction. Apply [F2] to obtain a conull bimeasurable map $c$ carrying the first measure to a measure equivalent to the second, and unitary equivalences between the factor fibre at $b$ in the first model and that at $c(b)$ in the second. [F1, F2, given, construct]

2.1 The two fibres are respectively $m(b)$ copies of the irreducible class $b$ and $n(c(b))$ copies of the irreducible class $c(b)$. Their unitary equivalence and [F3] force $b=c(b)$ and $m(b)=n(c(b))$ on one conull set. Thus the central base isomorphism is the identity on actual dual labels, so its pushforward measure-class assertion is precisely $\mu\sim\nu$ on the same dual. Their multiplicities coincide almost everywhere; transitivity makes the measure class and multiplicity equivalence class invariants of $\pi$. This use of labelled fibre equivalence is legitimate because centrality and class identification were proved in [F1]; it does not follow merely from using the same name for two bases. [F1, F2, F3, step 1.1, algebra] ∎

## Boundary and source qualifications

AC is inherited from existence, central transport and multiplicity uniqueness. No new selector is needed: the transport field already exists, and equality of its actual class labels forces the base map to be the identity. The zero representation forces both measures to be zero. One-point, atomic and non-atomic supports, as well as finite or infinite multiplicities, use the same fibrewise argument. No new citation exception is used. The only inherited cited premise is the exact Glimm factor-type-I-to-GCR implication in the criteria supplier, under the recorded owner authority. The complete Bekka–de la Harpe PDF pp.195–202 was consulted: its canonical decomposition uses prior structure results; here the conull selection, kernel regrouping, centrality and uniqueness arguments are written locally. No full-book or unavailable-original reading is claimed.
