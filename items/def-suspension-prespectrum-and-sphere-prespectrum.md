---
id: def-suspension-prespectrum-and-sphere-prespectrum
kind: definition
title: Suspension and sphere prespectra
status: draft
origin: pipeline
deps: ["def-sequential-prespectrum-spectrum-and-adjoint-structure-maps"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed page 176
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF page 6
---

## Definition

For a well-pointed based CGWH space $X$, its **suspension prespectrum** is

$$ (\Sigma^\infty X)_n=S^n\wedge X, $$

where $S^n=(S^1)^{\wedge n}$ and $S^0$ is the smash unit. Its structure map

$$ S^1\wedge(S^n\wedge X)\longrightarrow S^{n+1}\wedge X $$

is the canonical associativity homeomorphism, with the new $S^1$ coordinate
placed first. Coherence makes the iterated construction unambiguous.

The **sphere prespectrum** is

$$ \mathbb S=\Sigma^\infty S^0, \qquad \mathbb S_n=S^n. $$

These are prespectra. The definition does not assert that an arbitrary
suspension prespectrum is an Omega-spectrum.

