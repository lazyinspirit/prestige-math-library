# Frontier-22 published active-foundation follow-up audit

Date: 2026-09-11

## Scope and deduplication

This bounded follow-up reads seven high-use direct interfaces in the active
22-pair frontier:

| Published item | SHA-256 |
|---|---|
| `def-simple-reflections-and-the-kac-moody-weyl-group` | `8cc898a4690902259ecf463dcf47fa28b1752cabdd51a821ab4afc80dcc09759` |
| `thm-ordinals-and-omega-are-absolute-in-transitive-models` | `06176e5f73d5e358f063cbcaaf8e43c4583516f9c55cd60c5007c0a9461654cb` |
| `thm-singular-chain-homotopy-formula` | `b0c39b18c59fdfcab878f386370389835a29025c2eaaf9cb80e2bfc30d59493f` |
| `def-period-one-fourier-coefficients-partial-sums-and-convolution` | `02c2671068d8dfdc517deba240ab72de634b58efd8d4d866f0f8325907309b23` |
| `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line` | `ce43deb869be84d5fd8f130488f5a1136d775a16b4f7b3571fcd43b7cc441517` |
| `def-c-c-and-c-c-infinity-on-rn` | `3c41e31affbc0bba0c4693b04199e935c222b717ba225f0cd801e92ac4f80c2c` |
| `def-complex-lp-and-euclidean-test-function-conventions` | `249fe3b5639fae7d43d4dc3528d8939fa74479e9b4739f343ea8b91f1c415cd0` |

The complete canonical ledger was searched by these exact IDs, aliases,
`extended-real exponentiation`, `infinite Lp norm`, `torus convolution`,
`periodic representatives`, the exact Tonelli/Fubini and translation suppliers,
and the direct consumer IDs. None of the seven had a classification row. The
older planned-edge and supplier-map occurrences are not classification rows.

## Complex Lp finite-norm totality defect

`def-complex-lp-and-euclidean-test-function-conventions` defines, for every
finite-valued measurable complex function and every finite `p`,

`N_p(f) = (integral |f|^p)^(1/p)`.

The nonnegative integral may equal `+infinity`. Published
`def-extended-reals` explicitly states that exponentiation is not defined on
the extended real line, so the displayed formula does not define `N_p(f)` for
all functions in its stated domain. The following set definition
`L^p={f:N_p(f)<infinity}/~` therefore uses a partial expression in its own
membership predicate. This is a genuine well-definedness gap rather than a
missing redundant dependency.

Repair the definition piecewise: when the nonnegative integral is finite,
take its positive real `p`th root; when it is `+infinity`, set `N_p(f)` to
`+infinity`. Equivalently, define the finite-`p` raw class directly by
finiteness of `integral |f|^p` and introduce the real-valued norm only on the
quotient. The published nonnegative-integral and positive-real-power interfaces
suffice. The complex Holder/Minkowski and completeness items consume only
finite-norm members, so their calculations survive this repair. The definition
is nevertheless load-bearing for current Fourier and Schwartz drafts; those
consumers should make the piecewise convention explicit until the published
definition is repaired.

Classification: new A-P item. No new pair is required.

## Period-one convolution well-definedness gap

`def-period-one-fourier-coefficients-partial-sums-and-convolution` has no
declared dependencies and gives no proof for its non-definitional assertion
that the convolution of two `L^1(T)` classes exists almost everywhere, is
integrable and is independent of representatives. These are exactly the
measurability, Tonelli and quotient-descent obligations needed before the
display defines an `L^1` class. The separate real-line convolution chain shows
the needed discipline: choose Borel representatives, prove joint
measurability, apply Tonelli/Fubini, use translation invariance, and prove
representative independence. No corresponding torus proof appears in this
definition or an earlier declared supplier.

Repair by choosing one-periodic Borel representatives, applying the published
sigma-finite Tonelli/Fubini interfaces on the finite period square, and proving
the split-period translation identity
`integral_0^1 |f(x-t)| dt = integral_0^1 |f(u)| du` before the product-norm
bound. Translation invariance makes changes of representatives harmless in
every fixed section, and Tonelli gives the almost-everywhere domain and the
`L^1` class. State the applicable choice contract of the representative/product
interfaces.

The live Carleson theorem cites only this item's Fourier coefficient and finite
partial-sum normalization, which are coherent and do not use its convolution
claim. `lem-fourier-partial-sums-are-dirichlet-convolutions` also uses only the
bounded Dirichlet-kernel branch, where periodic translation makes the integral
exist for every point. Thus this is not a current Step-3 blocker, but the
general `L^1` convolution clause and consumers that use it remain affected.

Classification: new A-P item. No new pair is required.

## Five bounded clears

- `def-simple-reflections-and-the-kac-moody-weyl-group`: the root/coroot
  formulas are dual, `alpha_i(h_i)=2` makes each generator an involution, and
  the Cartan entries give lattice preservation. No finiteness or Coxeter
  presentation is assumed.
- `thm-ordinals-and-omega-are-absolute-in-transitive-models`: transitivity and
  the bounded linear-membership clauses are absolute; ambient Foundation
  supplies well-foundedness. Internal ZF successor formation fixes every
  finite ordinal, and the bounded least-limit-ordinal description identifies
  the model's omega with the actual omega. Downward closure gives the ordinal
  initial segment.
- `thm-singular-chain-homotopy-formula`: the oriented prism-boundary formula
  gives the chain identity on each singular simplex, including degree zero;
  integer linearity and the stated tensor extensions give arbitrary abelian
  coefficients.
- `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`:
  the compactly supported truncations are measurable and increase pointwise,
  monotone convergence identifies their integrals, and the explicit CC-bearing
  compact Riemann/Lebesgue bridge plus the improper-limit definition give the
  claimed finite value.
- `def-c-c-and-c-c-infinity-on-rn`: compact support and ordered Euclidean
  smoothness define the two real vector spaces coherently; finite unions of
  compact component supports supply closure.

Classification: five new bounded no-repair-needed dispositions.

## Limits

This pass certifies only the displayed target clauses and the exact interfaces
described above. It does not certify the whole transitive Fourier, Lebesgue,
singular-homology, set-theory or Kac--Moody closure. No external source was
newly consulted, no published item was edited and no independent judge result
or exhaustive-discovery claim is made.
