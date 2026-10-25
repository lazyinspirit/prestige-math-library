---
id: lem-framed-knot-push-off-self-linking-well-defined
kind: lemma
title: "Small framed push-offs define a well-defined self-linking number"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-smooth-bundle-metric,
       thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold,
       cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy,
       lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       lem-linking-number-even-sum-and-reidemeister-invariance,
       def-the-standard-smooth-step-function,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §§3, 5, pp. 8–9 and 15"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definitions 3.6–3.7, pp. 8–9; §5, Definition 5.1, p. 15"
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

[[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy|Ambient isotopy extension for compact embedded families]]

[[def-smooth-bundle-metric|Smooth bundle metric]]

[[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric|Existence of a smooth bundle metric]]

[[def-the-standard-smooth-step-function|Smooth endpoint reparameterization]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an oriented smooth embedded circle $K\subset S^3$, and a smooth nowhere-zero normal section $s$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The normal bundle is the quotient $TS^3|_K/TK$; under $\mathrm{AC}_\omega$ it is a smooth vector bundle, and a tubular neighbourhood is a diffeomorphism from an open neighbourhood of its zero section onto an ambient neighbourhood of $K$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]], [[def-tubular-neighbourhood-of-an-embedded-submanifold]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F2] Under $\mathrm{AC}_\omega$, the smooth normal bundle admits a smooth bundle metric ([[def-smooth-bundle-metric]], [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]).

[F3] Two normalized tubular embeddings of the same closed submanifold, when defined on the same open disk bundle and inducing the same vertical normal-quotient identification, are ambient isotopic near the compact zero section after shrinking ([[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy]]).

[F4] If $P$ is a compact smooth manifold without boundary and $F:P\times I\to S^3$ is a smooth family of embeddings constant near both ends, then $F$ extends to an ambient isotopy of $S^3$ ([[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]]).

[F5] The integer half-sum of mixed crossing signs is invariant under ambient isotopy of two-component oriented links ([[lem-linking-number-even-sum-and-reidemeister-invariance]], [[thm-oriented-linking-number-scan-terminates-and-is-correct]]).

[F6] The supplied smooth step function has values in $[0,1]$, satisfies $\sigma(t)=0$ for $t\le0$ and $\sigma(t)=1$ for $t\ge1$, and is smooth; for any $0<a<1/2$, $\chi_a(u):=\sigma((u-a)/(1-2a))$ is a smooth map $[0,1]\to[0,1]$, equals $0$ on $u\le a$, and equals $1$ on $u\ge1-a$ ([[def-the-standard-smooth-step-function]]).

## Proof

1.1 Choose a tubular chart $\Phi:\Omega\to U$ as in [F1]. The graph map $x\mapsto(x,\varepsilon s(x))$ is an embedding because its projection to the base $K$ is the identity; it is disjoint from the zero section because $s(x)\ne0$. Since $\Phi$ is a diffeomorphism on $\Omega$, its image $K_{\varepsilon s}$ is embedded and disjoint from $K$ whenever the graph is contained in $\Omega$. The zero section is compact, so an open neighbourhood of it contains all sufficiently small scalar multiples of $s$ over $K$; hence such $\varepsilon$ exist. The orientation of $K_{\varepsilon s}$ is transported from the base orientation by its projection to $K$. [A1, F1, given, construct]

2.1 Fix $a\in(0,1/2)$ and use the smooth plateau $\chi_a$ of [F6]. For two sufficiently small radii $\varepsilon_0,\varepsilon_1>0$ in the same chart, define $\varepsilon(u)=(1-\chi_a(u))\varepsilon_0+\chi_a(u)\varepsilon_1$. The family of embeddings of $P:=S^1\sqcup S^1$ whose first component is $K$ and whose second is $K_{\varepsilon(u)s}$ is smooth, stays embedded and disjoint by step 1.1, and is constant on endpoint collars. Here $P$ is compact and boundaryless, so [F4] extends this family to an ambient isotopy; [F5] shows that the linking number is unchanged. If $s_v$ is a smooth homotopy through nonzero sections, compactness of $K\times[0,1]$ gives one small scalar $\varepsilon$ for which all graphs lie in $\Omega$. Replacing $v$ by $\chi_a(u)$ in the family $K\cup K_{\varepsilon s_v}$ again gives a smooth family of embeddings of the same compact boundaryless source, stationary near its endpoints; [F4] and [F5] show that the linking number is independent of the representative section. [A1, F4, F5, F6, step 1.1, construct]

3.1 Let $\Phi_0:\Omega_0\to S^3$ and $\Phi_1:\Omega_1\to S^3$ be two normalized tubular charts. By [F2], choose a smooth bundle metric on $\nu K$. Since $K$ is compact and $\Omega_0\cap\Omega_1$ is an open neighbourhood of the zero section, finitely many bundle trivializations give a common radius $r>0$ such that the open metric disk bundle $\Omega_r=\{v\in\nu K:\lVert v\rVert<r\}$ is contained in both domains. Restrict both charts to this same $\Omega_r$. They now satisfy the common-domain hypothesis of [F3]. After its permitted shrinking, [F3] gives an ambient isotopy $H_t$ with $H_1\circ\Phi_0=\Phi_1$ on a neighbourhood of the compact zero section. Choose $\varepsilon>0$ small enough that the graph of $\varepsilon s$ lies in this neighbourhood. Then $H_1$ carries the oriented pair formed from $K$ and its $\Phi_0$-push-off to the corresponding pair for $\Phi_1$, so [F5] makes their linking numbers equal. Steps 1.1–2.1 prove independence of chart, sufficiently small radius and representative section. Countable Choice is used through the metric and tubular-neighbourhood suppliers; the finite linking computations are choice-free. [A1, F2, F3, F5, step 1.1, step 2.1] ∎

