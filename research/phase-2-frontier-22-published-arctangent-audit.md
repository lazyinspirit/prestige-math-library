# Published principal-arctangent audit — 2026-09-11

This bounded audit reads the complete published principal tangent branch,
inverse-tangent definition and calculus theorem, together with the exact clauses
used by two current batch-3 drafts. It is not a whole-closure certification or
an exhaustive published-library audit. No published or draft item was edited.

## Deduplication and dispositions

The complete canonical ledger was searched before classification for the three
IDs below, the alias `gregory-leibniz-series`, the principal-tangent and inverse-
tangent titles, and their exact circle-parametrization, inverse-function, FTC,
power-series and Abel mechanisms. None already had an item-specific finding or
classification row. Each is a new bounded clear.

| Published item | SHA-256 | Bounded disposition |
|---|---|---|
| `lem-tangent-principal-branch-is-bijective` | `bdeb3c524fc3f1bf5a4c0005806b15eb7d7354287af06ce58c37a82a9c4de7d5` | Continuous positive derivative gives strict increase; the explicit unit-circle point gives every real tangent value. |
| `def-principal-inverse-tangent` | `688b31cc4a5d3f774a4587a3213baa20425dc947f0d9705eadba8a47e69bd53b` | The inverse exists on exactly the principal interval and inherits continuity and strict increase. |
| `thm-principal-inverse-tangent-calculus` | `576a6cf539d496dafddaf46c1d212cee7ac144bbddd1a2c3d964b7ad3e29ede3` | The inverse derivative, FTC integral, power series and Abel endpoint arguments are sound. |

## Proof and affected-clause review

For a prescribed real $y$, the branch lemma forms

$$
c=(1+y^2)^{-1/2}>0,\qquad s=y(1+y^2)^{-1/2}.
$$

The point $(c,s)$ lies on the unit circle. The published circle
parametrization supplies a parameter, and the sign ranges place it, modulo
$2\pi$, inside $(-\pi/2,\pi/2)$; its tangent is $s/c=y$. The positive secant-
squared derivative gives strict increase and injectivity independently.

This exact use of the now-A-P
`thm-sine-and-cosine-parametrize-the-unit-circle` needs only its unaffected
surjectivity clause. The branch proof says the parameter is unique, but neither
its construction nor its conclusion spends that uniqueness: strict increase
already proves branch injectivity. Under the used-clause and adequate-implicit-
proof rules, the branch is therefore clear rather than a downstream impact of
the separate fibre-classification defect.

The inverse-tangent definition then applies the published continuous-inverse
theorem to that strictly increasing continuous bijection. Domains and both
inverse identities are exact.

For the calculus theorem, the inverse derivative is
$1/(1+\tan^2u)$ and hence $1/(1+x^2)$. The FTC primitive has the same derivative
and value at zero. The geometric series with ratio $-t^2$ may be integrated on
each compact subinterval of $(-1,1)$. At the endpoint, the alternating series
converges and Abel's theorem applies to the equivalent coefficient sequence
whose even-degree coefficients vanish. Continuity of arctangent and
$\tan(\pi/4)=1$ identify the limit as $\pi/4$. Negative oriented integrals and
the half-open endpoint are both handled by the stated suppliers. No choice
principle or new Phase-2 pair is needed.

## Current consumers

Two batch-3 draft consumers use the audited clauses directly:

- `lem-uniform-sine-integral-bound-and-dirichlet-value`, SHA-256
  `de8b7cf81156049b39bf7f9004aa4c02f6e3469da3c735f9abe6824b47a4c9ab`,
  F9--F10 and proofs 2.2--3.1 use the rational-integral formula and the
  increasing range to obtain $\arctan(1/\varepsilon)\to\pi/2$.
- `ex-cauchy-law-and-its-characteristic-function`, SHA-256
  `3337b1b42f014db7301d9d11993a5209a2d1264dd8792900c82179d8e27e0958`,
  F10/F12 and proof 2.1 use the same integral and endpoint limits to normalize
  the Cauchy density.

No defect or additional active-frontier repair obligation was found on this
arctangent path. The consumers retain any separately recorded measure/integral
impacts outside this bounded review.
