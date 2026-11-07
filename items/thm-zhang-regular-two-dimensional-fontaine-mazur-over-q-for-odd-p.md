---
id: thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p
kind: theorem
title: "Zhang's regular two-dimensional Fontaine–Mazur theorem over Q for odd p"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-geometric-p-adic-galois-representation
  - def-hodge-tate-p-adic-galois-representation
  - def-normalized-cuspidal-eigenform-over-gl2
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  The local definition interfaces assume AC and Countable Choice. The source proof's
  exact AC/DC/Countable Choice uses have not been reconstructed, and the
  unramified-place supplier declares a DC dependency whose use is unresolved.
sources:
  references:
    - title: "Xinyao Zhang, On the Fontaine–Mazur Conjecture for p=3, arXiv:2412.06812v5"
      url: "https://arxiv.org/abs/2412.06812v5"
      locator: "Theorem 1.0.2, printed pp. 2–3; full reducibly residual proof, §§5.1–5.5, printed pp. 41–51; full irreducibly residual proof, §6.1, printed pp. 51–52."
    - title: "James Newton, Modularity of Galois Representations and Langlands Functoriality"
      url: "https://people.maths.ox.ac.uk/newton/iisc.pdf"
      locator: "§§2.4–2.5: geometric p-adic representations, de Rham regularity, and the Fontaine–Mazur–Langlands formulation."
verification:
  precheck: blocked
---

## Statement

Assume AC and Countable Choice under the global and local Galois-group
conventions used here. Let $p$ be an odd prime and let
$\rho:G_{\mathbb Q}\to\operatorname{GL}_2(\mathbb Q_p)$ be a continuous
irreducible representation. Suppose that $\rho$ is unramified at all but
finitely many finite primes, that its restriction to $G_{\mathbb Q_p}$ is de
Rham with two distinct Hodge–Tate weights, and that
$\det\rho(c)=-1$ for every complex conjugation $c\in G_{\mathbb Q}$. Then
$\rho$ arises from a cuspidal eigenform up to twist, in the sense of
Zhang's Theorem 1.0.2.

## Statement references

[[def-geometric-p-adic-galois-representation]]

[[def-hodge-tate-p-adic-galois-representation]]

[[def-normalized-cuspidal-eigenform-over-gl2]]

[[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]

[Xinyao Zhang, *On the Fontaine–Mazur Conjecture for p=3*, arXiv:2412.06812v5, Theorem 1.0.2](https://arxiv.org/abs/2412.06812v5)

[James Newton, *Modularity of Galois Representations and Langlands Functoriality*, §§2.4–2.5](https://people.maths.ox.ac.uk/newton/iisc.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice under the current Galois conventions; an odd
prime $p$; a continuous irreducible $\rho:G_{\mathbb Q}\to
\operatorname{GL}_2(\mathbb Q_p)$; finite ramification; de Rham restriction at
$p$ with distinct Hodge–Tate weights; and oddness.

[A1] [[def-axiom-of-choice]]: AC is assumed by the current global
absolute-Galois-group convention.

[A2] [[def-countable-choice]]: Countable Choice is assumed by the current
local-place completion convention.

[F1] [[def-geometric-p-adic-galois-representation]]: geometricity means
unramifiedness outside a finite set of finite places and de Rham restriction
at each place above $p$. Its place-identification interface is now supplied
through the unramified-place definition; its period-ring construction and
comparison obligations remain held.

[F2] [[def-hodge-tate-p-adic-galois-representation]]: the Hodge–Tate weight
indices are the integers $j$ in the decomposition into $C_p(-j)$-summands;
distinct weights means that the two indices are different.

[F3] [[def-normalized-cuspidal-eigenform-over-gl2]]: a normalized cuspidal
Hecke eigenform is a cusp form with first Fourier coefficient $1$ that is an
eigenvector for every normalized Hecke operator.

[L1] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]:
the current Statement supplies the attached continuous two-dimensional
representation interface, but its proof reduces to a modular-curve
cohomology realization whose proof is not supplied.

[L2] [[def-dependent-choice]]: the current unramified-place dependency closure
contains DC, but that supplier's Statement and Facts & Assumptions do not
identify an exact DC use. The source theorem's axiom audit is also incomplete.

## Proof status

Zhang's full 59-page arXiv v5 was inspected. The source proves the residually
reducible case through Theorems 5.1.1 and 5.5.1, using the componentwise
pro-modularity argument of §§5.1–5.5 and the classicality bridge in Corollary
3.3.8. The residually irreducible case is Theorem 6.1.1, whose proof uses
Proposition 4.3.3 and Corollary 3.3.8. These arguments depend on local
deformation and pseudo-deformation geometry, completed-cohomology
local–global compatibility, patching, characteristic-zero Greenberg–Wiles
dimension estimates, and classicality. No complete local reconstruction of
those chains is supplied here; the source citation is not used as a proof.
Theorem 1.0.2's phrase “up to twist” is retained exactly; the source statement
does not specify the allowed twisting-character class, so that scope
clarification also remains open.

The smallest proposed A-page prerequisites are separate local items for the
residually reducible potential pro-modularity/classicality branch (Theorems
5.1.1 and 5.5.1), the residually irreducible potential modularity/classicality
branch (Theorem 6.1.1), and their shared completed-cohomology classicality
bridge. Their exact source hypotheses, the p=3 exceptional local type, and the
local/global deformation inputs must be stated and proved before this theorem
can be ready. The current minimal Taylor–Wiles item has narrower local
deformation hypotheses and an unsupplied proof; it does not by itself close
these obligations. The permitted page prerequisites do not include a local
p-adic Langlands or general pseudo-deformation theory chain.
