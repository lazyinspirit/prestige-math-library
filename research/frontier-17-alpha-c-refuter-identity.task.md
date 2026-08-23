# Frontier-17 Alpha-c read-only refutation — pair `the-identity-theorem-and-the-open-mapping-theorem`

Scope: the A page `the-identity-theorem-and-the-open-mapping-theorem` and its B
companion `…-examples` (batch 8). Read every item in full at `items/<id>.md`,
plus the contract entries in `research/frontier-17-batch-8.proof-contracts.json`,
plus every item named in each page's `requires` that a proof actually cites.

## Items — every one is mandatory

A page:
def-locally-injective-holomorphic-map,
def-biholomorphic-map,
lem-locally-zero-locus-clopen-holomorphic-function,
thm-identity-theorem-holomorphic-functions **[high]**,
thm-isolated-zeros-holomorphic-function,
def-local-degree-holomorphic-map,
cor-holomorphic-function-ring-integral-domain **[critical]**,
lem-local-holomorphic-logarithm-nonvanishing-function-on-disc **[high]**,
cor-local-holomorphic-roots-nonvanishing-function **[high]**,
lem-nonzero-derivative-gives-local-biholomorphism,
thm-local-normal-form-holomorphic-map **[high]**,
cor-local-multiplicity-count-holomorphic-map **[high]**,
thm-open-mapping-theorem-holomorphic-functions **[high]**,
rem-complex-versus-banach-open-mapping-theorems,
thm-local-maximum-modulus-principle,
cor-maximum-principle-real-part-holomorphic-function,
thm-boundary-maximum-modulus-principle **[high]**,
thm-maximum-modulus-principle-with-boundary-and-infinity-control **[high]**,
thm-minimum-modulus-principle,
cor-constant-boundary-modulus-forces-zero-or-constancy,
lem-bounded-strip-maximum-principle **[critical]**,
thm-hadamard-three-lines **[critical]**,
rem-three-lines-and-complex-interpolation,
thm-holomorphic-inverse-function-theorem **[high]**,
cor-injective-holomorphic-derivative-nonzero **[high]**.

B page:
thm-complex-pythagorean-identity-by-identity-theorem **[high]**,
ex-local-mapping-of-complex-squaring-at-zero-and-one **[high]**,
ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc **[AI-generated construction]**,
cex-boundary-accumulation-does-not-force-holomorphic-identity **[critical]**,
cex-flat-smooth-function-has-no-holomorphic-extension **[critical]**,
cex-nonconstant-blaschke-factor-has-constant-boundary-modulus **[critical]**,
fs-maximum-modulus-principle-without-connectedness,
fs-minimum-modulus-principle-without-nonvanishing,
fs-injective-real-differentiable-map-has-nonzero-jacobian **[high]**,
fs-boundary-maximum-modulus-principle-on-unbounded-domains **[high]**.

## What Alpha needs from you

Complex analysis's fatal defects here are **connectedness, the accumulation
point's location, boundedness, and the difference between a domain and an
arbitrary open set**. Concretely test:

- **Connectedness, everywhere.** The identity theorem is false on a disconnected
  open set. For each Statement, check whether it says *domain* (open and
  connected) or merely *open*, and whether the proof uses connectedness. Then
  check every consumer supplies it — `cor-holomorphic-function-ring-integral-domain`
  in particular is false for a disconnected open set, so its Statement must say
  connected.
- **Where the accumulation point lies.** The identity theorem needs the zero set
  to accumulate at a point *of the domain*, not of its closure or boundary.
  `cex-boundary-accumulation-does-not-force-holomorphic-identity` exists to mark
  that boundary — verify its witness really is holomorphic on the stated domain,
  really has zeros accumulating only at the boundary, and really is nonconstant.
- **The maximum-modulus family.** `thm-boundary-maximum-modulus-principle` needs
  the domain *bounded* (or the infinity-control hypothesis) and the extension
  *continuous on the closure*. Check each Statement carries exactly the
  hypotheses its proof uses, that the compactness step is licensed, and that
  `thm-maximum-modulus-principle-with-boundary-and-infinity-control` states the
  growth condition it actually needs. `fs-boundary-maximum-modulus-principle-on-unbounded-domains`
  must be genuinely false and its refutation must exhibit a real witness.
- **Hadamard three lines.** Check the strip is the correct closed/open set, the
  boundedness hypothesis on the strip is present (the theorem is false without
  it), the auxiliary function `f(z)M_0^{z-1}M_1^{-z}` (or the page's variant) is
  well defined including when `M_0` or `M_1` is `0`, and that the `ε`-perturbation
  argument is completed. The `M_0 = 0` or `M_1 = 0` degenerate case is exactly the
  kind of boundary row that has hidden fatal defects before.
- **Local normal form, degree and multiplicity.** Check `def-local-degree-holomorphic-map`
  is well defined at a point where `f` is constant (it is not — is that excluded?),
  that the normal form `f(z) = f(a) + (h(z))^m` is stated with `h` biholomorphic
  onto a neighbourhood, and that the multiplicity count states the punctured
  neighbourhood and the "sufficiently small" quantifier in the right order.
- **The inverse function theorem and `cor-injective-holomorphic-derivative-nonzero`.**
  The corollary is the genuinely nontrivial direction (injective ⇒ `f' ≠ 0`), and
  it is *false* in the real setting — `fs-injective-real-differentiable-map-has-nonzero-jacobian`
  marks that. Verify the complex proof does not silently use a real-analysis fact,
  and that the false-statement item's refutation gives a correct real witness
  (e.g. `x ↦ x^3`) with its Jacobian actually computed.
- **`cex-flat-smooth-function-has-no-holomorphic-extension`** — check the flat
  function is correctly given, that it is genuinely `C^∞` at `0`, and that the
  non-extension argument uses the identity theorem correctly rather than assuming
  what it proves.
- **`thm-complex-pythagorean-identity-by-identity-theorem`** — the sin²+cos²=1
  transfer. Check the real identity is a genuine dependency, that the accumulation
  set (the real line) accumulates in `ℂ`, and that the entire-function hypothesis
  is established rather than assumed.

Also check every `[F#]`/`[A#]`/`[L#]` against the cited item's actual text on
disk before alleging it is too weak, and check each title against what its proof
delivers.

## Output

Finding ids `C-ID-1`, `C-ID-2`, … Each: item id, exact location, what is wrong,
the quoted dependency text or the explicit counterexample, and `fatal` or
`nonfatal`. Fatal first. Accept items explicitly where no specific defect exists
— "no defect in these N items, here is what I checked" is the expected result and
a valuable one. Do not manufacture findings.

Finish with a coverage statement: read in full / sampled / could not check.

Read-only is absolute: do not edit, patch, create or delete any repository file,
and never apply a fix. Alpha is the sole adjudicator.

**NO PERMISSION PROMPTS OF ANY KIND**, including for any segment of a compound
command. If an indispensable read has no escalation-free form, report that exact
blocker instead of prompting.
