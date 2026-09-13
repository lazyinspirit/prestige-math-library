---
id: ex-suspension-prespectra-of-spheres-are-shifts
kind: example
title: Suspension prespectra of spheres are shifts
status: draft
origin: pipeline
deps: ["def-suspension-prespectrum-and-sphere-prespectrum", "def-shift-and-suspension-of-a-sequential-prespectrum", "prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms"]
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
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF pages 6 and 9--10
---

## Example

For every $r\geq0$ there is a canonical isomorphism of sequential
prespectra

$$ \Sigma^\infty S^r\cong\operatorname{sh}^r\mathbb S. $$

With the grading convention of this page, it follows that

$$ \boxed{\ \pi_k(\Sigma^\infty S^r)\cong\pi_{k-r}^s.\ } $$

## Facts & Assumptions

[F1] Canonical smash associators are coherent with the leading $S^1$ structure coordinate ([[prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms]]).

[F2] The shift formula is $\pi_k(\operatorname{sh}E)\cong\pi_{k-1}(E)$ ([[def-shift-and-suspension-of-a-sequential-prespectrum]]).

## Verification

**Given:** An integer $r\geq0$.

1.1 At level $n$, the canonical smash associator gives [F1]
$$ (\Sigma^\infty S^r)_n=S^n\wedge S^r \cong S^{n+r}=\mathbb S_{n+r} =(\operatorname{sh}^r\mathbb S)_n. $$ [F1]

1.2 Both structure maps add a leading $S^1$ coordinate. Smash coherence says the level homeomorphisms commute with these structure maps, so they form a strict prespectrum isomorphism. [F1]

2.1 Applying [F2] $r$ times gives $\pi_k(\operatorname{sh}^r\mathbb S)\cong\pi_{k-r}(\mathbb S) =\pi_{k-r}^s$. The opposite sign in the Step-1 scaffold is incompatible with the direct reindexing and is not used. $\square$ [F2, step 1.2]
