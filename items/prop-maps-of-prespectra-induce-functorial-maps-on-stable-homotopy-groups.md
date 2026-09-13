---
id: prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups
kind: proposition
title: Strict prespectrum maps act functorially on stable homotopy groups
status: draft
origin: pipeline
deps: ["def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra", "def-stable-homotopy-groups-of-a-sequential-prespectrum", "lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail", "prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 25, Section 6, printed page 231
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF pages 8--10
---

## Statement

A strict map $f:E\to F$ of sequential prespectra induces, for every
$k\in\mathbb Z$, a homomorphism

$$ \pi_k(f):\pi_k(E)\longrightarrow\pi_k(F). $$

These maps preserve identities and composition. Structure-compatible
homotopic strict maps induce the same homomorphism.

In this strict sequential-prespectrum setting, a **stable weak equivalence**
is, by definition, a strict map $f$ for which $\pi_k(f)$ is an isomorphism for
every $k\in\mathbb Z$.

## Facts & Assumptions

[F1] Strictness says $f_{n+1}\sigma_n=\tau_n(1_{S^1}\wedge f_n)$ ([[def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra]]).

[F2] Based homotopic maps induce the same homomorphism on every higher homotopy group ([[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

[F3] Finite-tail deletion gives the canonical colimit isomorphism proved in the preceding lemma ([[lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail]]).

## Proof

**Given:** A strict map $f:E\to F$ and an integer $k$ as in the statement.

1.1 **Construct the map of directed systems.** Functoriality of higher homotopy gives $(f_n)_*:\pi_{n+k}(E_n)\to\pi_{n+k}(F_n)$. Suspending a representative and using [F1] shows [F1, F2]
$$ (f_{n+1})_*b_n^E=b_n^F(f_n)_*. $$

Thus the level maps form a natural transformation of the two sequential systems. [F1, F2]

2.1 **Descend to the colimit.** Set $\pi_k(f)[n,x]=[n,(f_n)_*x]$. The equality in step 1.1 shows that equivalent representatives have equivalent images. Common-stage addition shows this map is a homomorphism. Different legal initial cutoffs give the same map under [F3]. [F1, F3, step 1.1]

3.1 **Check functoriality and homotopy invariance.** Identity and composite formulas hold at every level and hence in the colimit. If $H:f\simeq g$ is structure-compatible, then [F2] gives $(f_n)_*=(g_n)_*$ at every stage; their colimit maps are therefore equal. The last paragraph of the statement introduces terminology only. It does not assert a model structure, a replacement theorem, or a criterion involving levelwise equivalences. $\square$ [F2, step 2.1]
