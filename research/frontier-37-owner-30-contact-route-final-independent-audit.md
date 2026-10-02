# Frontier 37 owner 30: final independent contact-route audit

## Verdict

The DC-preserving route is mathematically sound in the target item after the
inline proof and repairs now in `items/thm-principle-of-descent-and-domination.md`.
The bounded one-dimensional strict-contact identity is proved from local
$W^{1,2}$ estimates and test functions. The unbounded identity is then derived
on $\mathbb P^1$ from bounded truncations, upward closure of the full-mass
class, and total-variation convergence. Finite energy supplies that class for
the first potential. The proof does not assume a Bedford--Taylor or
Guedj--Zeriahi contact identity, a full-choice Sobolev chain rule, or
quasicontinuous representatives.

Two bridges needed to make the reports’ route exact are included in the item:

1. For $q\in\mathcal E$, $q_j=\max(q,-j)$ converges to $q$ in
   $L^1_{\rm loc}$ by dominated convergence, so $T_j\to T_q$ distributionally.
   The full-mass tail criterion gives $T_j\to T_q^{np}$ in total variation.
   Once the total-variation limit is seen to be Radon, uniqueness of the local
   Riesz measure identifies $T_q^{np}=T_q$.
2. Smooth-test equality gives the exact Borel contact restrictions after
   proving inner regularity of the restrictions on every Borel set: exhaust
   the domain by compacts and remove open neighborhoods of each compact
   complement. Outer regularity then follows by a relatively compact open
   exhaustion and compact approximation of each open complement. RMK
   uniqueness closes the test-function-to-Borel bridge without fine-topology
   locality.

## Independent checks

I read `CLAUDE.md`, `README.md`, the full current theorem item, and both
complete route reports. I inspected the actual load-bearing library interfaces
and proofs for the logarithmic energy and lower-semicontinuity supplier,
subharmonicity and local integrability, Riesz measures and logarithmic
potentials, Radon regularity, Tonelli/Fubini and polar coordinates, Weyl’s
lemma, the nonnegative-harmonic zero result, mollification, $L^2$ density and
translation, Jensen and dominated convergence, and the Hilbert-space and
Riesz-representation interfaces. Their stated choice requirements are DC or
CC; DC supplies CC. The local scalar chain rule and positive-part formula are
proved inline in the item.

I cross-checked the relevant full sections of the authoritative
Guedj–Zeriahi text (`§1.1`, the full-mass definition and tail criterion,
Theorem 1.3, Proposition 1.6, and the complete proof of Corollary 1.7) from
the arXiv PDF text. That source states the local contact identity for bounded
plurisubharmonic functions and derives its unbounded full-mass version; the
item uses neither result as an axiom. The inline bounded proof and truncation
argument establish the needed statements directly. I did not rely on
Bloom–Levenberg or Saff as proof premises.

The two repo reports are not interchangeable as proofs. The older
`unbounded-contact-repair-route.md` uses the capacity/no-polar-mass route and
the dimension-one characterization of the full-mass class from Guedj–Zeriahi.
That route alone is not the requested self-contained proof. The newer
`contact-measure-inline-route.md` supplies the direct finite-energy
$W^{1,2}$/full-mass route; the target now uses that route and closes the
ordinary-current identification above.

## Item repairs included

- The strict-contact set is Borel; finite-energy finiteness of $u$
  $\mu$-a.e. is used before concluding $\mu(A_\varepsilon^c)=0$.
- The Riesz cutoff is smooth and constant near the origin. The radial mass
  calculation has the correct cancellation of the angular $2\pi$ with the
  Riesz normalization; there is no leftover $1/(2\pi)$ error factor. The
  $a<1$ branch includes its eventual-dominance crossover.
- The harmonic difference is defined on the area-conull set where both
  subharmonic functions are finite. Disk-average uniqueness handles common
  $-\infty$ values, and the contact-point cancellation records that
  $u(z_0)$ is finite.
- Pointwise radial mollification convergence for finite $f(z)$ now uses the
  direct sandwich $f(z)\le A_r f(z)\le f(z)+\eta$ for every sufficiently
  small radius, so it also applies when $f$ is unbounded below nearby.
- The descent proof drops the finite initial indices with $m_n=0$ before
  normalization and uses finite lower bounds valid when $K$ is a singleton
  or the evaluation point lies in $K$.
- The residual mass at infinity is $(1-a)\delta_\infty$. No measure
  inequality $\nu\le\mu$ is imposed, and no finite-energy condition on $\nu$
  is used. The proof permits atoms and infinite logarithmic energy for $\nu$.
- The batch-24 proof-contract row for this theorem now records its 31 direct
  dependencies, the new supplier citations, the revised numbered-step
  derivations, and the corrected boundary dispositions. The theorem Statement
  and batch scope were left unchanged.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-principle-of-descent-and-domination.md` — passed.
- `node tools/rendercheck.mjs items/thm-principle-of-descent-and-domination.md` — passed, including real KaTeX parsing and renderer YAML parsing.
- A read-only path check found all 31 declared direct dependencies present.

This is an item-level independent mathematical audit, not a whole-repository
recertification or a judge verdict. This assignment updated the theorem item,
its report, and only that theorem's batch-24 proof-contract carrier. No receipt,
scope, gate, baseline, staging, or publication state was changed.
