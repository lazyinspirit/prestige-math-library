---
id: def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
kind: definition
title: Sequential prespectra, spectra, and adjoint structure maps
status: published
origin: pipeline
deps: ["prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms", "prop-loop-suspension-adjunction-on-based-homotopy-classes"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 175--178
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF page 6
---

## Definition

A **sequential prespectrum** $E$ consists of well-pointed based CGWH spaces
$E_n$, indexed by $n\geq 0$, and based structure maps

$$ \sigma_n:S^1\wedge E_n\longrightarrow E_{n+1}. $$

The sphere coordinate is always written first. Its adjoint structure map is

$$ \widetilde\sigma_n:E_n\longrightarrow\Omega E_{n+1}, \qquad \widetilde\sigma_n(x)(t)=\sigma_n(t\wedge x). $$

The loop space carries the compactly generated compact-open topology. The
loop--suspension adjunction identifies $\sigma_n$ and
$\widetilde\sigma_n$.

On this page a **spectrum** means an **Omega-prespectrum**: every
$\widetilde\sigma_n$ is a weak homotopy equivalence. This is terminology in
the strict sequential setting only; no stable model structure or replacement
functor is part of the definition.

