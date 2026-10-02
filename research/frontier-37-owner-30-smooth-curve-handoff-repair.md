# Batch 6 smooth-curve handoff: read-only proof findings

Run `frontier-37-owner-30`, batch 6. This is a source and proof finding memo,
not a Step 3b approval, owner receipt, or blanket audit of the 49 items. The
manifest, open-edge, and supplier-file snapshot below was read on
2026-09-30 12:30–12:33 UTC while the engine recovery authors and the separate
Batch 5 supplier repair were active. Recheck current files and hashes after
those writers drain. No item, carrier, manifest, coverage, notes, contract,
pair-report, receipt, shared-plan, or engine-state file was edited here.

## Proof findings checked directly

### Differential orders at imperfect-residue points

`items/def-canonical-line-bundle-curve.md:44–57` says that for every closed
point $x$, a uniformizer $t_x$ has differential $\mathrm{d}t_x$ generating
$\Omega^1_{C/k,x}$, then defines the order of a rational differential by
writing it as $\omega=g\,\mathrm{d}t_x$. Its claimed change-of-uniformizer
argument also relies on that generator assertion. The same assertion is used in
`items/lem-rational-differential-divisor-well-defined-class.md:56,68` ([F2]
and Step 2.1).

Here is a counterexample under the stated arbitrary-field hypotheses. Let
$k=\mathbf{F}_p(a)$, $C=\mathbf{P}^1_k$, and let $x$ be the closed point
defined on the affine chart by $t^p-a=0$. This polynomial is irreducible;
$s=t^p-a$ is a uniformizer at $x$, while
$\kappa(x)=k(a^{1/p})/k$ is purely inseparable. In characteristic $p$,

\[
  \mathrm ds=\mathrm d(t^p-a)=0.
\]

But $\Omega^1_{C/k,x}$ is free with generator $\mathrm{d}t$, since it is
the localization at $x$ of the free module $k[t]\,\mathrm{d}t$. Thus the
differential of this uniformizer is zero, not a generator. The formula
$\omega=g\,\mathrm{d}t_x$ cannot be used for arbitrary nonzero rational
differentials at this point.

The order itself can be defined without choosing a parameter differential:
choose any local frame of the invertible sheaf $\omega_C$, express the
rational differential as a rational coefficient times that frame, and take
the DVR order of the coefficient. Alternatively, a parameter-differential
definition must restrict to separable residue extensions. The Stacks Project,
*Algebraic Curves*, Lemma 53.12.3 (tag [0C1E](https://stacks.math.columbia.edu/tag/0C1E)),
states exactly the latter hypothesis: if $\kappa(x)/k$ is separable, then
for any uniformizer $s$, $\mathrm{d}s$ freely generates
$\Omega_{X/k,x}$. It does not assert this for inseparable residue fields.

### Trace element and dual generator in the different proof

`items/lem-curve-different-local-support-and-index-bound.md:88` ([F7]) says
that the trace functional generates $W=\operatorname{Hom}_A(B,A)$. The
same proof then uses a coefficient (h) for the trace element in
`Step 2.1` (line 108) and in the tame calculation at `Step 3.1` (line 110).
Those are incompatible in a ramified example: the trace functional need not
be a generator of the dual module.

Take $A=k[[t]]$, $B=k[[s]]$, $t=s^2$, with
$\operatorname{char}(k)\ne2$. This is a finite flat, tamely ramified
extension with ramification index $e=2$. On the $A$-basis $1,s$,

\[
  \tau(a+bs)=\operatorname{Tr}_{B/A}(a+bs)=2a.
\]

Define the $A$-linear functional $\lambda$ by $\lambda(a+bs)=b$. Under the
standard $B$-action on $W$, $(b\phi)(x)=\phi(bx)$, the elements $\lambda$
and $s\lambda$ are an $A$-basis of $W$, so $\lambda$ is a $B$-generator. A
direct computation gives $\tau=2s\lambda$. Since $s$ is a nonunit,
τ is not a generator. Its coefficient relative to λ is the nonunit
$h=2s$; this is precisely the factor that records the different.

There is a second, related error in [F8] at line 90: it calls the trace
*pairing* on the fibre algebra nondegenerate in the tame case. In the same
example the fibre algebra is $C_0=k[s]/(s^2)$, and
$\operatorname{Tr}_{C_0/k}(a+bs)=2a$. The matrix of
$(u,v)\mapsto\operatorname{Tr}_{C_0/k}(uv)$ in the basis $1,s$ is
\(\begin{pmatrix}2&0\\0&0\end{pmatrix}\), which is degenerate. What is
nonzero in the tame case is the trace **functional** on $C_0$, not its
pairing. Inseparable residue extension or residue characteristic dividing
$e$ makes that functional zero.

This matches the actual local argument in Stacks, *Algebraic Curves*, Lemma
53.12.4 (tag [0C1F](https://stacks.math.columbia.edu/tag/0C1F), proof of
(2)): it takes a generator $\lambda$ of the invertible dualizing module
$\operatorname{Hom}_{\kappa(y)}(C,\kappa(y))$, writes the trace functional
as $\tau_{C/\kappa(y)}=h\lambda$, and identifies the different ideal as
$(h)$. It uses that $\tau$ is nonzero exactly when the residue extension is
separable and $e$ is invertible; it does not say that $\tau$ generates the
dual module or that the trace pairing on a nonreduced ramified fibre is
nondegenerate. This coefficient formulation also explains why in the tame
case $h$ is a nonzero socle element and has valuation $e-1$.

The correction needed in [F7]–[F8] is to distinguish the invertible dual
module, a chosen generator $\lambda$, the trace functional $\tau$, and its
coefficient $h$. Then state nonvanishing of $\tau$, rather than nondegeneracy of the fibre
trace pairing. This memo does not certify the remaining local-algebra
arguments of that item.

## Batch 5 to Batch 6 declared routes

At the snapshot time, `research/frontier-37-owner-30-batch-6.cross-batch-dependencies.json`
had 49 rows: 48 item edges and one page prerequisite. Every row had status
`open`. The table below transcribes those declared routes; it is a dependency
inventory, not an independent audit of each consumer proof.

| Batch 6 consumer | Batch 5 supplier(s) |
|---|---|
| A page `smooth-proper-curves-divisors-genus-and-ramification` | Page `cartier-and-weil-divisors-line-bundles-and-picard-groups` |
| `cex-degree-zero-line-bundle-no-section` | `cor-degree-descends-picard-curve`; `def-invertible-sheaf-of-cartier-divisor` |
| `def-base-point-linear-system` | `def-invertible-sheaf-of-cartier-divisor` |
| `def-canonical-line-bundle-curve` | `def-order-codimension-one-rational-function`; `def-rational-section-line-bundle`; `thm-line-bundle-rational-section-cartier-divisor` |
| `def-complete-linear-system` | `def-effective-cartier-divisor`; `def-linear-equivalence-cartier-divisors` |
| `def-divisor-smooth-proper-curve` | `def-degree-divisor-proper-curve`; `def-divisor-support-positive-negative-parts`; `def-weil-divisor-normal-noetherian-scheme` |
| `def-ramification-index-curve-map` | `def-order-codimension-one-rational-function` |
| `def-riemann-roch-space-of-divisor` | `def-divisor-support-positive-negative-parts`; `def-invertible-sheaf-of-cartier-divisor`; `def-order-codimension-one-rational-function` |
| `ex-divisor-degree-over-nonalgebraically-closed-field` | `def-degree-divisor-proper-curve` |
| `ex-projective-line-divisors-linear-systems` | `def-degree-divisor-proper-curve` |
| `ex-smooth-conic-is-projective-line-with-point` | `def-degree-divisor-proper-curve` |
| `lem-degree-effective-divisor-nonnegative` | `def-degree-divisor-proper-curve`; `def-divisor-support-positive-negative-parts` |
| `lem-effective-divisors-sections-mod-scalars` | `def-effective-cartier-divisor`; `def-invertible-sheaf-of-cartier-divisor`; `def-linear-equivalence-cartier-divisors`; `lem-global-section-effective-divisor`; `thm-line-bundle-rational-section-cartier-divisor` |
| `lem-function-with-poles-defines-map-p1` | `lem-finite-flat-curve-fibre-degree`; `lem-proper-normal-curve-rational-function-map` |
| `lem-rational-differential-divisor-well-defined-class` | `def-linear-equivalence-cartier-divisors`; `def-order-codimension-one-rational-function`; `def-rational-section-line-bundle`; `thm-line-bundle-rational-section-cartier-divisor` |
| `lem-torsion-quotient-invertible-sheaves-effective-divisor` | `def-effective-cartier-divisor`; `def-invertible-sheaf-of-cartier-divisor`; `def-linear-equivalence-cartier-divisors`; `thm-line-bundle-rational-section-cartier-divisor` |
| `thm-base-point-free-linear-system-morphism` | `def-invertible-sheaf-of-cartier-divisor` |
| `thm-cartier-weil-divisors-curves-agree` | `def-cartier-divisor`; `def-invertible-sheaf-of-cartier-divisor`; `def-linear-equivalence-cartier-divisors`; `def-locally-factorial-scheme`; `def-picard-group-scheme`; `def-rational-section-line-bundle`; `thm-cartier-divisors-mod-principal-to-picard`; `thm-cartier-to-weil-divisor-normal-scheme`; `thm-cartier-weil-isomorphism-locally-factorial`; `thm-line-bundle-rational-section-cartier-divisor` |
| `thm-degree-positive-line-bundle-sections-zero-bound` | `cor-degree-descends-picard-curve`; `def-invertible-sheaf-of-cartier-divisor` |

At that same snapshot, the 19 distinct Batch 5 item suppliers resolved to 9
existing `draft` item files and 10 absent item files; none was a verified
supplier. The missing set was `cor-degree-descends-picard-curve`,
`def-effective-cartier-divisor`, `def-invertible-sheaf-of-cartier-divisor`,
`def-linear-equivalence-cartier-divisors`,
`lem-finite-flat-curve-fibre-degree`, `lem-global-section-effective-divisor`,
`thm-cartier-divisors-mod-principal-to-picard`,
`thm-cartier-to-weil-divisor-normal-scheme`,
`thm-cartier-weil-isomorphism-locally-factorial`, and
`thm-line-bundle-rational-section-cartier-divisor`. Batch 5 repair was active;
these are timestamped observations, not assertions about its current state.

The two differential-order consumers inspected above have these explicit
supplier obligations in their current text:

- `def-canonical-line-bundle-curve` cites the line-bundle/rational-section to
  Cartier-divisor dictionary in its final paragraph; the current text itself
  says this identification is flagged until
  `thm-line-bundle-rational-section-cartier-divisor` is authored.
- `lem-rational-differential-divisor-well-defined-class` flags the same
  dictionary and `def-linear-equivalence-cartier-divisors` in its statement,
  Facts [F3], and Steps 4.1–5.1. Step 2.1 also depends on the invalid
  parameter-differential order assertion described above; resolving the
  supplier does not repair that local issue.

## Manifest-only choice-path screen

A direct-edge scan of the current Batch 6 manifest found 21 items whose own
`deps` omit `def-axiom-of-choice` but which have at least one direct in-pair
supplier whose `deps` include it. This is a graph screen only. It does not
establish that the consumer's statement or proof needs Choice, nor that any
item is mathematically false. The direct paths to inspect are:

| Consumer | Direct supplier(s) declaring Choice |
|---|---|
| `def-divisor-smooth-proper-curve` | `thm-local-ring-smooth-curve-dvr` |
| `def-riemann-roch-space-of-divisor` | `thm-cartier-weil-divisors-curves-agree`; `thm-local-ring-smooth-curve-dvr` |
| `def-complete-linear-system` | `lem-effective-divisors-sections-mod-scalars`; `thm-cartier-weil-divisors-curves-agree` |
| `def-base-point-linear-system` | `thm-cartier-weil-divisors-curves-agree` |
| `def-arithmetic-genus-proper-curve` | `thm-h0-structure-sheaf-proper-curve` |
| `def-canonical-line-bundle-curve` | `thm-local-ring-smooth-curve-dvr` |
| `lem-rational-differential-divisor-well-defined-class` | `thm-local-ring-smooth-curve-dvr` |
| `def-nonconstant-morphism-curves-degree` | `thm-nonconstant-morphism-proper-curves-finite-surjective`; `cor-birational-smooth-proper-curves-isomorphic` |
| `def-ramification-index-curve-map` | `thm-local-ring-smooth-curve-dvr` |
| `def-ramification-and-branch-points` | `lem-curve-different-local-support-and-index-bound` |
| `def-different-divisor-curve-map` | `lem-curve-different-local-support-and-index-bound`; `thm-local-ring-smooth-curve-dvr` |
| `lem-torsion-quotient-invertible-sheaves-effective-divisor` | `thm-cartier-weil-divisors-curves-agree`; `thm-local-ring-smooth-curve-dvr` |
| `def-gonality-curve` | `lem-function-with-poles-defines-map-p1`; `cor-birational-smooth-proper-curves-isomorphic` |
| `def-delta-invariant-curve-singularity` | `thm-local-ring-smooth-curve-dvr`; `thm-normalization-glues-integral-finite-type-curves` |
| `cor-plane-curve-geometric-genus-delta-correction` | `def-geometric-genus-singular-curve`; `lem-normalization-lowers-arithmetic-genus-delta`; `thm-normalization-glues-integral-finite-type-curves` |
| `ex-projective-line-divisors-linear-systems` | `thm-base-point-free-linear-system-morphism` |
| `ex-smooth-conic-is-projective-line-with-point` | `lem-function-with-poles-defines-map-p1` |
| `ex-nodal-cubic-normalization-genus` | `def-geometric-genus-singular-curve`; `lem-normalization-lowers-arithmetic-genus-delta` |
| `ex-cuspidal-cubic-normalization-genus` | `def-geometric-genus-singular-curve`; `lem-normalization-lowers-arithmetic-genus-delta` |
| `ex-basepoint-linear-system` | `thm-base-point-free-linear-system-morphism` |
| `ex-plane-quartic-genus-three-smooth` | `def-geometric-genus-singular-curve` |

For each path, inspect the actual proposition and proof to determine whether
Choice is part of the consumer's logical assumptions or only occurs in a
supplier's proof. If it is required by the consumer, reconcile its statement
and declared dependencies under the repository schema; if it is not, record
the choice-free supplier interface and recertify as required. Do not propagate
Choice mechanically from this screen.

## Stale scope marker for root reconciliation

The current manifest read above has 37 A items and 12 B items. The extant
pair report `research/frontier-37-owner-30-step3a-pair-smooth-proper-curves-divisors-genus-and-ramification.md`
still reports 36 A plus 12 B, 48 total, and its receipt is described as bound
to that earlier manifest hash. Treat those scope counts and that receipt as
stale for current release purposes. The manifest now has 49 rows, matching
the 49 carrier edges here only by coincidence (the carrier includes a page
prerequisite); root owns the shared scope/evidence refresh. This memo makes no
item decision and records no acceptance.
