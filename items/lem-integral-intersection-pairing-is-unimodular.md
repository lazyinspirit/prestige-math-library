---
id: lem-integral-intersection-pairing-is-unimodular
kind: lemma
title: The integral intersection pairing is unimodular for a simply connected four-manifold
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-integral-intersection-lattice-of-a-simply-connected-four-manifold
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
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
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: Theorem 1 and §I.2, printed pp. 280–282; integral intersection form convention, with unimodularity proved locally from PD and UCT
---

## Statement

Assume the Axiom of Choice. Let $X$ be a closed connected oriented smooth four-manifold with $\pi_1(X)=0$. Its integral intersection lattice on $H_2(X;\mathbb Z)/\operatorname{Tor}$ is a finite-rank free abelian group and its intersection pairing is unimodular.

## Statement references

[[def-integral-intersection-lattice-of-a-simply-connected-four-manifold|The integral intersection lattice and its pairing convention]]

## Facts & Assumptions

**Given:** Full AC and a closed connected oriented smooth four-manifold $X$ with trivial fundamental group.

[F1] The first Hurewicz map identifies $H_1(X;\mathbb Z)$ with the abelianization of $\pi_1(X)$; in particular it is zero here. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F2] Poincaré duality for a closed oriented four-manifold gives an isomorphism $\operatorname{PD}:H^2(X;\mathbb Z)\to H_2(X;\mathbb Z)$, whose inverse sends a homology class to its cohomological dual. [[thm-poincare-duality-for-oriented-topological-manifolds]]

[F3] The universal-coefficient exact sequence for cohomology is $0\to\operatorname{Ext}^1(H_1(X;\mathbb Z),\mathbb Z)\to H^2(X;\mathbb Z)\to\operatorname{Hom}(H_2(X;\mathbb Z),\mathbb Z)\to0$. [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]

[F4] A closed smooth manifold has finite CW homotopy type under full AC, so its integral homology groups are finitely generated. [[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]]

[F5] The definition of the integral intersection pairing is the Poincaré-duality cup-product pairing on $H_2$ modulo torsion. [[def-integral-intersection-lattice-of-a-simply-connected-four-manifold]]

[A1] Full AC is assumed; it supplies the CW homotopy-type result [F4] and the stated cohomological duality/UCT branch.

## Proof

**Given:** The data and suppliers [F1]–[F5].

1.1 By [F1] and [A1], $H_1(X;\mathbb Z)=0$, so the Ext term in [F3] is zero and evaluation identifies $H^2(X;\mathbb Z)$ with $\operatorname{Hom}(H_2(X;\mathbb Z),\mathbb Z)$. [given, F1, F3, A1, algebra]

1.2 By [F4] and [A1], $H_2(X;\mathbb Z)$ is finitely generated. Its quotient $L=H_2(X;\mathbb Z)/\operatorname{Tor}$ is therefore free of finite rank, and every homomorphism from $H_2$ to $\mathbb Z$ factors uniquely through $L$. Thus $\operatorname{Hom}(H_2,\mathbb Z)=\operatorname{Hom}(L,\mathbb Z)$. [F4, A1, algebra]

2.1 Under the isomorphism [F2], the map $L\to\operatorname{Hom}(L,\mathbb Z)$ sending $\bar x$ to $(\bar y\mapsto Q_X(\bar x,\bar y))$ is the composite of the inverse Poincaré-duality map $H_2\to H^2$ with the evaluation map of [F3]; [F5] identifies that composite with the intersection pairing. Both component maps are isomorphisms by steps 1.1–1.2 and [F2]. Hence the pairing map is an isomorphism. [F2, F3, F5, step 1.1, step 1.2, algebra] ∎
