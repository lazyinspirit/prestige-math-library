---
id: ex-zhang-p-three-exceptional-local-type
kind: example
title: "The exceptional p=3 residual type is within Zhang's theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p
  - def-continuous-l-adic-galois-representation
  - def-local-p-adic-galois-representation
  - def-unramified-galois-representation-at-a-place
  - def-de-rham-p-adic-galois-representation
  - def-hodge-tate-p-adic-galois-representation
  - def-residual-galois-representation
  - lem-continuous-l-adic-representation-admits-stable-lattice
  - def-local-p-adic-cyclotomic-character
  - lem-finite-dimensional-galois-representation-has-composition-series
  - def-absolute-galois-group-of-a-global-field
  - def-profinite-group-by-inverse-limit
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
axiom_use: >-
  AC is used by the stable-lattice supplier; Countable Choice is assumed by the
  current local-place convention. The transitive unramified-place dependency
  also lists DC, but its current carrier does not identify an exact use.
sources:
  references:
    - title: "Xinyao Zhang, On the Fontaine–Mazur Conjecture for p=3, arXiv:2412.06812v5"
      url: "https://arxiv.org/abs/2412.06812v5"
      locator: "Introduction, Theorems 1.0.1 and 1.0.2, printed pp. 2–3; the exceptional p=3 residual type and its removal."
---

## Example

Assume AC and Countable Choice. Let $\rho:G_{\mathbb Q}\to
\operatorname{GL}_2(\mathbb Q_3)$ be continuous and irreducible, unramified at
all but finitely many finite primes, de Rham at $3$ with distinct Hodge–Tate
weights, and odd in the sense that $\det\rho(c)=-1$ for a complex conjugation
$c$. Choose an embedding of $\overline{\mathbb Q}$ into
$\overline{\mathbb Q}_3$ and let $D_{\bar 3}$ be the associated decomposition
group, identified with $G_{\mathbb Q_3}$. A full stable lattice means a
finitely generated compact open $\mathbb Z_3$-submodule $\Lambda$ spanning
$\mathbb Q_3^2$ and invariant under $G_{\mathbb Q}$. Reduce $\Lambda$ modulo
$3$, restrict to $D_{\bar 3}$, extend scalars to $\overline{\mathbb F}_3$, and
take the direct sum of the simple factors of a composition series; simple
means having no proper nonzero invariant subspace. Call this local residual
semisimplification $\bar\rho_{\Lambda,3}^{\mathrm{ss}}$. A character $\eta$
is a continuous homomorphism $G_{\mathbb Q_3}\to
\overline{\mathbb F}_3^\times$. The mod-$3$ cyclotomic character
$\omega:G_{\mathbb Q_3}\to\mathbb F_3^\times$ is defined by
$g(\zeta_3)=\zeta_3^{\omega(g)}$ for a primitive cube root of unity $\zeta_3$.
If $\bar\rho_{\Lambda,3}^{\mathrm{ss}}\cong\eta\oplus\eta\omega$, this is
the exceptional residual local type highlighted in Zhang's proof; the
hypotheses of his odd-prime theorem still hold, so its cuspidal-eigenform
conclusion applies.

## Example references

[[thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p]]

[[def-continuous-l-adic-galois-representation]]

[[def-local-p-adic-galois-representation]]

[[def-unramified-galois-representation-at-a-place]]

[[def-de-rham-p-adic-galois-representation]]

[[def-hodge-tate-p-adic-galois-representation]]

[[def-residual-galois-representation]]

[[lem-continuous-l-adic-representation-admits-stable-lattice]]

[[def-local-p-adic-cyclotomic-character]]

[[lem-finite-dimensional-galois-representation-has-composition-series]]

[Xinyao Zhang, *On the Fontaine–Mazur Conjecture for p=3*, arXiv:2412.06812v5, Theorems 1.0.1–1.0.2](https://arxiv.org/abs/2412.06812v5)

## Facts & Assumptions

**Given:** AC and Countable Choice, a representation $\rho$ satisfying the
full hypotheses in the Example, its fixed local-place embedding, and a chosen
stable lattice $\Lambda$.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the
current global absolute-Galois-group and stable-lattice conventions.

[A2] [[def-countable-choice]]: Countable Choice is assumed by the current
local-place completion convention.

[F1] [[def-continuous-l-adic-galois-representation]]: $\rho$ is a continuous
homomorphism from $G_{\mathbb Q}$ to the automorphisms of a finite-dimensional
$\mathbb Q_3$-space.

[F2] [[def-local-p-adic-galois-representation]]: after fixing the local
completion, the restriction is a continuous representation of $G_{\mathbb Q_3}$.

[F3] [[def-unramified-galois-representation-at-a-place]]: unramifiedness is
triviality on the inertia group of a chosen prolongation; its current carrier
cites the supplied completion identification, residue exact sequence and
independence under conjugating that choice. The complete Zhang theorem and
period-ring inputs remain held.

[F4] [[def-de-rham-p-adic-galois-representation]]: the local de Rham space is
$(B_{\mathrm{dR}}\otimes_{\mathbb Q_3}V)^{G_{\mathbb Q_3}}$, with equality of
dimensions defining de Rham; its period-ring input is still held.

[F5] [[def-hodge-tate-p-adic-galois-representation]]: the distinct weights are
the two different indices in the $C_3(-j)$ decomposition.

[F6] [[def-residual-galois-representation]]: reduction along a chosen stable
lattice gives a finite-dimensional residual representation; no independence
from the chosen lattice is asserted.

[F7] [[lem-continuous-l-adic-representation-admits-stable-lattice]]: under AC,
a continuous representation of a profinite group on a finite-dimensional
$\mathbb Q_3$-space admits a full stable $\mathbb Z_3$-lattice.

[F8] [[lem-finite-dimensional-galois-representation-has-composition-series]]:
a finite-dimensional representation over a field has a finite composition
series, so the stated local residual semisimplification exists.

[F9] [[def-local-p-adic-cyclotomic-character]]: reducing the local cyclotomic
character modulo $3$ gives the stated $\omega$.

[F10] [[def-absolute-galois-group-of-a-global-field]]: $G_{\mathbb Q}$ is the
inverse limit of the finite Galois groups in a separable closure, with inverse-
limit topology.

[F11] [[def-profinite-group-by-inverse-limit]]: a topological group given as an
inverse limit of finite discrete groups is profinite, as required by [F7].

[L1] [[thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p]]:
its current Statement applies to every odd $p$ and includes no restriction on
the residual local type, but its complete source proof has not been
reconstructed in this library.

[L2] [[def-dependent-choice]]: the transitive unramified-place dependency
closure contains DC, but the current supplier does not identify an exact use.

## Proof

1.1 By [F10] and [F11], $G_{\mathbb Q}$ is profinite. Applying [F7] with AC [A1] to the given continuous representation gives a full stable lattice. Restricting its reduction using [F2] and applying [F6] gives a finite-dimensional local residual representation; [F8] supplies a finite composition series, and [F9] defines the local mod-$3$ cyclotomic character $\omega$. [A1, F1, F2, F6, F7, F8, F9, F10, F11, given, construct]

2.1 Here $p=3$ is odd, and the stated irreducibility, finite ramification, de Rham regularity, and oddness are exactly the hypotheses in [L1]. The residual isomorphism is not an additional hypothesis of [L1], so [L1] gives the asserted cuspidal-eigenform conclusion in this exceptional local case. [A2, F3, F4, F5, L1, given, step 1.1, algebra] ∎
