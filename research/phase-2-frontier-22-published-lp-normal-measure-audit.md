# Frontier-22 published Lp, normal-law and measure audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass reads six high-use direct probability/Fourier interfaces:

| Published item | SHA-256 |
|---|---|
| `def-l-p-space-as-a-quotient-by-null-functions` | `8be15694fcc6ef5568fbffd304122cae46ddeab6f7927454db739c89eded1cc6` |
| `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation` | `6f099f580fa075a3c9aadd8d9e710a7089ded7490f1363a328b9fb0906093d4b` |
| `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable` | `83a024b1b42f1c1862ace50081623a195835f436c788c5b393caa441ae67b51a` |
| `lem-normal-density-has-total-mass-one` | `d13553b32c8ef37c23204a1c311a6a65b5323df330f0f3d3eb905cb6c2da5d67` |
| `def-standard-normal-and-normal-laws` | `1ab7004cbe837eed1288205393e3f3b697a983d7f23542fe21b60142083d74c0` |
| `thm-dynkin-pi-lambda` | `51c045ea2ba75db23cac8f1b736d8a39a8466d2273713618ed41bdf9ce7287b4` |

The complete canonical ledger was searched by every exact ID and alias,
raw-versus-quotient `L^infinity`, null-function equivalence, total-variation
simple approximation, sequential threshold formulas, Gaussian normalization,
degenerate normal laws and the generated lambda-system intersection mechanism.
None had a classification row. The isolated prior occurrences of the
sequential-measurability and Dynkin IDs are supplier mappings, not findings.

## Bounded dispositions

`def-l-p-space-as-a-quotient-by-null-functions` correctly forms almost-everywhere
classes for every positive finite `p`; null equality is an equivalence relation
on the raw measurable-function class independently of the norm. For
`p=infinity`, the preceding definition uses `L^infinity` for raw essentially
bounded functions and this definition explicitly says that it then writes the
same conventional symbol for the quotient classes. That staged overload is
not ideal notation, but it is declared and the later representative/class
remark removes ambiguity at every use. The quotient-vector-space theorem
supplies operations for `p>=1`; the `0<p<1` clause promises only a set of
classes until its metric theorem. No well-definedness defect was found. The
active Fourier uses are at finite `p`, so they do not touch the notation
overload.

`thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`
uses an `L^1(|nu|)` simple approximation. The simple total-variation estimate
makes the integral sequence Cauchy and bounds its limit by
`integral |f|`; applying the same construction to `f 1_E` proves the restricted
formula. Independence of approximants follows by applying the same estimate to
the difference of two approximating sequences. Only one approximating sequence
for a fixed function is instantiated, so no family choice is hidden.

`thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`
has the correct threshold formulas. In particular
`{inf_n f_n>a}` is the union over rational `q>a` of the intersections
`{f_n>q}`. Tail suprema/infima then give limsup/liminf, and equality of two
extended-real values is exactly agreement on every rational cut, including at
both infinities. The pointwise-limit clause follows without a selection.

`lem-normal-density-has-total-mass-one` explicitly assumes AC, hence the CC
needed for Borel measurability and the compact Riemann/Lebesgue bridge. The
substitution `x=sqrt(2)t` gives the correct `sqrt(2)` factor. Monotone
convergence of the symmetric truncations and the published Gaussian integral
give total mass `sqrt(2 pi)`, and positive square-root uniqueness plus scalar
linearity normalize the density to one.

`def-standard-normal-and-normal-laws` uses that normalized nonnegative density
to define a Borel probability measure, then pushes it forward by the continuous
affine map `x -> m+sigma x`. At `sigma=0`, the inverse-image calculation gives
the Dirac law exactly. Its AC hypothesis covers all inherited existence and
measurability uses.

`thm-dynkin-pi-lambda` first applies the two good-set arguments to make the
generated lambda-system intersection-closed, hence a sigma-algebra. Minimality
of generated sigma- and lambda-systems gives both inclusions and the final
containment in an arbitrary lambda-system. All constructions are canonical
intersections; no choice principle is used.

Classification: six new bounded no-repair-needed dispositions. No current
Step-3 blocker or new pair was found.

## Limits

This pass certifies only the displayed target clauses and exact interfaces
above. It does not certify the full transitive Lp, signed/complex measure,
Gaussian or generated-class closure. No external source was newly consulted,
no published item was edited and no independent judge result or exhaustive
discovery claim is made.
