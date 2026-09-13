---
id: def-pairing-and-unital-multiplication-of-sequential-prespectra
kind: definition
title: Pairings and unital multiplication of sequential prespectra
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: ["prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms", "def-sequential-prespectrum-spectrum-and-adjoint-structure-maps"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 25, Section 3, printed pages 222--223
---

## Definition

Let $E,F,G$ be sequential prespectra, with structure maps denoted
$\sigma^E,\sigma^F,\sigma^G$. A **pairing** $E\wedge F\to G$ is a family of
based maps

$$ \mu_{m,n}:E_m\wedge F_n\longrightarrow G_{m+n} $$

together with based homotopies making it compatible with each structure
coordinate. Suppressing only the canonical associators, the two required
comparisons are

$$ \mu_{m+1,n}(\sigma^E_m\wedge1) \simeq \sigma^G_{m+n}(1_{S^1}\wedge\mu_{m,n}) $$

on $S^1\wedge E_m\wedge F_n$, and

$$ \mu_{m,n+1}(1\wedge\sigma^F_n) \simeq \sigma^G_{m+n}(1_{S^1}\wedge\mu_{m,n}) (\tau_{E_m,S^1}\wedge1) $$

on $E_m\wedge S^1\wedge F_n$. Here $\tau_{E_m,S^1}$ moves the new
suspension coordinate past $E_m$; this twist is part of the formula, not an
implicit sign.

A **unital multiplication** on $E$ is such a pairing $E\wedge E\to E$, a
based unit $\eta:S^0\to E_0$, and specified compatible homotopies from the
two unit composites to the identity and between
$\mu(\mu\wedge1)$ and $\mu(1\wedge\mu)$, with the canonical associators
inserted. A **commutativity datum** additionally gives compatible comparison
homotopies between $\mu_{m,n}$ and $\mu_{n,m}\tau_{E_m,E_n}$, including the
permutation of the $m$ and $n$ suspension-coordinate blocks. That block
permutation has degree $(-1)^{mn}$ on $S^{m+n}$. All homotopies are required
to respect the two displayed structure comparisons.

