# Canonical interface repair route audit

Scope was limited to the three released items and this report. No carrier,
receipt, plan, gate, or other item was changed.

## Current item hashes and claim boundaries

| Item | Before SHA-256 | Current SHA-256 |
| --- | --- | --- |
| def-canonical-line-bundle-curve | dcded7a4b833b44d0eb042e425a5b899a3d0f348361838cc851af7931ca3a99b | 99160ed4cfe0e30a8ca26240c11eeb69bf4f7865e12ba09dfae439b5c6d9d15d |
| lem-rational-differential-divisor-well-defined-class | 76d0d0a77aa9bceb6c4283d21696aaadb711c0e3a41fd03b798708be118c9d3c | 80a317dfe977c969e822d569181bdfeca20f9bf96e8a3bc610e1cac5636e63dc |
| def-gonality-curve | db249d83f0a0607e70586822f856ab79794220a9bbc841b99a8a3a5bfb838b17 | 1e18a15b63f7dc9c553793883140841229c3602b8843ae03cad2dcceb2a563b0 |

The canonical sheaf remains defined as the raw relative-differentials sheaf.
The AC premise now explicitly applies to the existing structural route that
makes it invertible and supplies smooth-curve DVRs. Frame-based orders and the
imperfect-residue-field qualification are preserved. No differential of a
uniformizer is used as a frame.

The differential-divisor lemma retains its full ratio, divisor-class, and
canonical-sheaf conclusions, now with the AC premise required by its actual
suppliers and with Cartier and Weil divisors distinguished by type. The
gonality item retains the raw minimum formula and the degree-one
characterization; existence and that characterization are stated under AC,
which is what the cited finite-map and birational-curve suppliers require.
No field-perfectness, rational-point, or other new restriction was added.

## Audited proof routes

For a nonzero rational differential, the rational-section theorem first gives
a Cartier divisor whose local equations are the coefficients in any local
frames. The normal-Noetherian Cartier-to-Weil theorem then gives the
codimension-one cycle; its coefficient at a closed point is exactly the
frame-defined DVR order. The curve is finite type, hence Noetherian and
quasi-compact; under AC its closed local rings are DVRs and its generic local
ring is a field, so it is normal. AC implies DC, as required by the
locally-finite cycle theorem. A locally finite support on a quasi-compact
scheme is finite: take a finite subcover of neighborhoods each meeting only
finitely many support points. This proves the finite-sum claim rather than
assuming it.

For two rational differentials, their generic fibres are nonzero vectors in
the same one-dimensional k(C)-space, giving a unique ratio f. In every local
frame, the second coefficient is f times the first, so additivity of the DVR
order gives the divisor formula coefficientwise. The Cartier-to-Weil cycle
isomorphism and its principal-divisor compatibility then lift the Weil
identity to the corresponding Cartier identity. This yields both Weil and
Cartier linear equivalence. The rational-section theorem gives
O_C(div_C(omega)) isomorphic to omega_C; the smooth-curve Cartier-to-Weil
isomorphism identifies that Cartier divisor with the canonical Weil divisor,
proving the sheaf assertion for every canonical divisor.

For gonality, transcendence degree one of k(C)/k supplies a transcendental
f in k(C). The actual finite-map lemma, under its AC hypothesis, produces
C to P^1_k with degree [k(C):k(f)], so the degree set is nonempty. Each
degree is a positive integer and therefore has a least element. If that
minimum is one, a degree-one map induces an isomorphism of function fields,
hence is birational; the actual AC birational-smooth-proper-curves theorem
makes it an isomorphism. Conversely, an isomorphism has degree one.

## Current direct dependencies

def-canonical-line-bundle-curve directly depends on:

cor-finite-type-algebra-over-noetherian-ring-is-noetherian,
def-algebraic-curve-over-field, def-axiom-of-choice,
def-cartier-divisor, def-dependent-choice, def-integral-scheme,
def-divisor-smooth-proper-curve, def-invertible-sheaf,
def-invertible-sheaf-of-cartier-divisor,
def-linear-equivalence-cartier-divisors,
def-locally-finite-type-and-finite-type-morphism,
def-locally-noetherian-and-noetherian-scheme,
def-normal-noetherian-ring, def-order-codimension-one-rational-function,
def-principal-cartier-divisor, def-principal-weil-divisor-and-class-group,
def-rational-section-line-bundle, def-sheaf-on-topological-space,
def-sheaf-relative-differentials, def-sheaf-total-quotient-rings,
def-weil-divisor-normal-noetherian-scheme, lem-field-is-noetherian,
thm-cartier-to-weil-divisor-normal-scheme,
thm-cartier-weil-divisors-curves-agree,
thm-choice-implies-dependent-implies-countable-choice,
thm-differentials-smooth-locally-free,
thm-line-bundle-rational-section-cartier-divisor, and
thm-local-ring-smooth-curve-dvr.

lem-rational-differential-divisor-well-defined-class directly depends on:

def-axiom-of-choice, def-algebraic-curve-over-field,
def-canonical-line-bundle-curve, def-cartier-divisor,
def-dependent-choice, def-integral-scheme,
def-divisor-smooth-proper-curve, def-invertible-sheaf,
def-invertible-sheaf-of-cartier-divisor,
def-linear-equivalence-cartier-divisors,
def-order-codimension-one-rational-function,
def-principal-cartier-divisor, def-principal-weil-divisor-and-class-group,
def-rational-section-line-bundle, def-sheaf-relative-differentials,
def-weil-divisor-normal-noetherian-scheme,
thm-cartier-to-weil-divisor-normal-scheme,
thm-cartier-weil-divisors-curves-agree,
thm-choice-implies-dependent-implies-countable-choice,
thm-differentials-smooth-locally-free,
thm-line-bundle-rational-section-cartier-divisor, and
thm-local-ring-smooth-curve-dvr.

def-gonality-curve directly depends on:

cor-birational-smooth-proper-curves-isomorphic,
def-axiom-of-choice, def-algebraic-curve-over-field,
def-nonconstant-morphism-curves-degree,
lem-function-with-poles-defines-map-p1,
lem-integral-finite-type-scheme-function-field, and
thm-affine-domain-dimension-transcendence-degree.

## Actual supplier bodies read

I read the three target bodies and the current full supplier bodies/interfaces
used above: def-algebraic-curve-over-field,
def-rational-section-line-bundle, def-order-codimension-one-rational-function,
def-linear-equivalence-cartier-divisors,
def-principal-cartier-divisor,
def-principal-weil-divisor-and-class-group,
def-invertible-sheaf-of-cartier-divisor,
def-divisor-smooth-proper-curve,
thm-line-bundle-rational-section-cartier-divisor,
thm-cartier-to-weil-divisor-normal-scheme,
thm-cartier-weil-divisors-curves-agree,
thm-differentials-smooth-locally-free,
thm-local-ring-smooth-curve-dvr,
thm-choice-implies-dependent-implies-countable-choice,
lem-integral-finite-type-scheme-function-field,
thm-affine-domain-dimension-transcendence-degree,
lem-function-with-poles-defines-map-p1,
def-nonconstant-morphism-curves-degree, and
cor-birational-smooth-proper-curves-isomorphic. The two Cartier-to-Weil
interfaces confirm the normal/Noetherian and AC/DC premises and the
principal-divisor compatibility used in the proof.

## Targeted checks

- node tools/tsx-run.mjs tools/precheck.mts items/lem-rational-differential-divisor-well-defined-class.md — PASS.
- node tools/rendercheck.mjs items/def-canonical-line-bundle-curve.md items/lem-rational-differential-divisor-well-defined-class.md items/def-gonality-curve.md — PASS for YAML frontmatter, math delimiters, and KaTeX parsing.
- A read-only target-only scan confirmed every declared dependency and body wikilink on these three items resolves to an existing item.

No ordinary review receipt or carrier update was made.
