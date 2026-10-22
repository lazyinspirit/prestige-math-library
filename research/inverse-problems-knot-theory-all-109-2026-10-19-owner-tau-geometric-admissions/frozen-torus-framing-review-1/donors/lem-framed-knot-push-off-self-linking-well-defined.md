---
id: lem-framed-knot-push-off-self-linking-well-defined
kind: lemma
title: "Small framed push-offs define a well-defined self-linking number"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold,
       cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       lem-linking-number-even-sum-and-reidemeister-invariance,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §§3, 5.1, pp. 3–9 and 17–18"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definitions 3.6–3.7; §5.1, Definition 5.1; pp. 8–9 and 17"
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, the definition of linking number and the diagram isotopy discussion, pp. 26–27"
---

## Statement

Assume the Axiom of Countable Choice. Let $K:S^1\hookrightarrow S^3$ be an
oriented smooth embedded circle and let $s$ be a smooth nowhere-zero section of
its normal bundle. For any tubular neighbourhood chart that is the inclusion
on the zero section and identifies each vertical normal fibre with the ambient
normal quotient by the identity, the curve $K_{\varepsilon s}$ obtained by
mapping the graph of $\varepsilon s$ into $S^3$ is an embedded oriented circle
disjoint from $K$ for every sufficiently small $\varepsilon>0$. The integer
linking number of $K$ with $K_{\varepsilon s}$ is independent of the sufficiently
small radius, of the representative section in its homotopy class, and of the
normalized tubular chart. It therefore defines a self-linking integer of the
framing class $[s]$.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots]]

[[def-normal-and-conormal-bundles-of-an-embedded-submanifold|Normal bundle as quotient by the tangent bundle]]

[[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold|Tubular neighbourhood existence]]

[[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy|Normalized tubular neighbourhood uniqueness]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an oriented smooth embedded circle
$K\subset S^3$, and a smooth nowhere-zero normal section $s$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The normal bundle is the quotient $TS^3|_K/TK$; under $\mathrm{AC}_\omega$ it is a smooth vector bundle, and a tubular neighbourhood is a diffeomorphism from an open neighbourhood of its zero section onto an ambient neighbourhood of $K$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]], [[def-tubular-neighbourhood-of-an-embedded-submanifold]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F2] Normalized tubular neighbourhood charts of the same closed embedded submanifold induce isotopic push-off embeddings after shrinking, with an ambient isotopy fixing the zero section near compact $K$ ([[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy]]).

[F3] The integer half-sum of mixed crossing signs is invariant under ambient isotopy of two-component oriented links ([[lem-linking-number-even-sum-and-reidemeister-invariance]], [[thm-oriented-linking-number-scan-terminates-and-is-correct]]).

## Proof

1.1 Choose a tubular chart $\Phi:\Omega\to U$ as in [F1]. The graph map $x\mapsto(x,\varepsilon s(x))$ is an embedding because its projection to the base $K$ is the identity; it is disjoint from the zero section because $s(x)\ne0$. Since $\Phi$ is a diffeomorphism on $\Omega$, its image $K_{\varepsilon s}$ is embedded and disjoint from $K$ whenever the graph is contained in $\Omega$. The zero section is compact, so an open neighbourhood of it contains all sufficiently small scalar multiples of $s$ over $K$; hence such $\varepsilon$ exist. The orientation of $K_{\varepsilon s}$ is transported from the base orientation by its projection to $K$. [A1, F1, given, construct]

2.1 For two small radii $\varepsilon_0,\varepsilon_1>0$ in the same chart, the positive interpolation $\varepsilon_u=(1-u)\varepsilon_0+u\varepsilon_1$ keeps the graph disjoint from the zero section and gives an isotopy of the two-component links $K\cup K_{\varepsilon_u s}$. If $s_u$ is a homotopy through nonzero sections, compactness of $K\times[0,1]$ gives one small scalar for which all graphs lie in $\Omega$, and $(x,u)\mapsto \Phi(x,\varepsilon s_u(x))$ gives the same kind of link isotopy. By [F3] the linking number is constant in both cases. [A1, F3, step 1.1, construct]

3.1 Let $\Phi_0,\Phi_1$ be two normalized tubular charts. By [F2], after shrinking there is an ambient isotopy fixing $K$ and carrying one chart to the other near its compact zero section. Apply it to the disjoint pair $K\cup K_{\varepsilon s}$ and use [F3]; the resulting linking number is unchanged. Steps 1.1–1.2 prove that the value depends only on the framing homotopy class, not on the chart or the sufficiently small radius. Countable Choice is used only through tubular-neighbourhood existence and uniqueness; the finite linking computations are choice-free. [A1, F2, F3, step 1.1, step 2.1] ∎


