# B6 divisor-core current audit

Reviewed 2026-10-01. This is a report-only audit of the six assigned item bodies
and the supplier bodies their current text actually uses. I did not edit an
item, carrier, receipt, scope, gate, or shared plan, and I ran no checks.

## Current target inputs

The following raw file hashes were read and audited:

| Item | SHA-256 | Substantive disposition |
|---|---|---|
| `def-divisor-smooth-proper-curve` | `cef1b2b60f5d8e8abe69ce79f169ea6385f0afc048ab40262b703130b0e668ee` | The finite formal-sum convention is sound. Its explanatory normality and Cartier remarks inherit choice-bearing suppliers; see the premise note below. |
| `def-degree-divisor-proper-curve` | `88067bea962a6eb9f7461d7726f9dcc063e4a26dccab88e60d7a9019dafa8f15` | Sound, including for singular proper integral curves. Reuse its current closed receipt. |
| `def-riemann-roch-space-of-divisor` | `a03da3fd42ad298216248e16aab29ace95f7042d36722cba724f720ce3e20c42` | The definition, subspace proof, and section dictionary have complete routes under the current choice-bearing supplier assumptions. The body does not surface the Choice premise those routes use. |
| `thm-cartier-weil-divisors-curves-agree` | `7fcaa43bc6654e6a4e80a6b7b2384e4310078850ec0265ada2c5afcc14a84b38` | Complete route under its stated Axiom of Choice and Dependent Choice assumptions. Its “not yet authored” supplier notices are obsolete. |
| `lem-effective-divisors-sections-mod-scalars` | `9c62be203166573a9a84bc4c2af7895a990eb33d875e9e6e8c812195f5a4c378` | The divisor/section bijection is sound under the Axiom of Choice already listed in Given. Its “not yet authored” notices are obsolete. |
| `lem-degree-effective-divisor-nonnegative` | `e6dd36c4874eeb69e2de8757c94ce0c249c946768af5203ba98d956bcf1c067a` | Sound without Choice or smoothness. |

At the previously observed item-decision snapshot, the degree definition had
one current non-owner repaired receipt; the other five rows were owner-held
after changed inputs. This audit changes none of those states.

## Item-by-item routes

### `def-divisor-smooth-proper-curve`

The definition is a finite formal `Z`-sum over closed points. In a one
dimensional integral scheme, non-generic points are closed and their local
dimension is one; the generic point has local ring the function field. The
finite-support, positive/negative-part, effectivity, and degree conventions
match `def-divisor-support-positive-negative-parts` and
`def-degree-divisor-proper-curve`. The latter proves finite residue degree by
passing to an affine neighborhood and applying
`lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`.

The additional sentence that a smooth proper curve is normal follows from the
closed-point DVR result `thm-local-ring-smooth-curve-dvr` and the generic-point
field; the DVRs are integrally closed. Its actual supplier route assumes
Choice: the local-ring theorem explicitly assumes Choice through the
one-dimensional regular-local-ring criterion. The subsequent assertion that
these Weil divisors are Cartier is supplied by the locally factorial route:
closed-point DVRs are PIDs by `cor-dvr-is-a-pid`, PIDs are UFDs under Choice by
`thm-principal-ideal-domains-are-unique-factorisation-domains`, and the generic
local ring is a field. The full Cartier/Weil comparison is then the
choice-bearing `thm-cartier-weil-divisors-curves-agree` route.

The formal finite-sum definition itself needs none of those normality or
Cartier conclusions; `def-divisor-support-positive-negative-parts` explicitly
notes normality is not required. The premise visibility issue is confined to
the explanatory normality/Cartier assertions: the item has no Given/assumption
section, and does not itself state Choice or Dependent Choice. It also has no
direct dependency on the downstream Cartier/Weil theorem. Do not add that
dependency as a cycle: `thm-cartier-weil-divisors-curves-agree` itself depends
on this definition. Keep the definition’s finite-sum boundary and either
qualify these forward explanatory claims by their actual Choice-bearing route
or leave their discharge to the theorem that consumes this definition.

### `def-degree-divisor-proper-curve`

This source is valid for an integral proper one-dimensional curve without
normality, smoothness, or projectivity. Properness supplies finite type. For a
closed point, any affine open containing it still sees it as closed, hence as
a maximal ideal; the finite-type residue-field lemma gives a finite extension
of `k`. Therefore each residue degree is a positive integer, the finite
formal sum defines a homomorphism to `Z`, and the stated degree is well
defined. No gap or hidden choice premise was found.

### `def-riemann-roch-space-of-divisor`

For each closed point the actual order route is
`thm-local-ring-smooth-curve-dvr` followed by the valuation facts in
`def-order-codimension-one-rational-function`. The valuation inequality proves
closure under addition; nonzero constants are units in every local ring, and
the zero scalar gives the included zero vector. The finite support needed for
`div(f)` is supplied by the actual Cartier-cycle route: the curve theorem uses
`thm-cartier-to-weil-divisor-normal-scheme`, whose local-finiteness proof
reduces nonzero orders on an affine neighborhood to minimal primes of two
Noetherian principal quotients. Thus `div(f)` is in the divisor group, rather
than merely a formal possibly infinite sum.

The global-sections reading has a complete route. The curve theorem identifies
the Weil divisor `D` with a Cartier divisor. Locally, if `t_i` is an equation
for `D`, then `O_C(D)|_{U_i}=t_i^{-1}O_{U_i}` and a function `f` is a regular
section exactly when `t_i f` is regular. At a closed point this is precisely
`ord_x(f)+ord_x(D) >= 0`. Conversely every section of this subsheaf is one
rational function in `k(C)`. The canonical inclusion and zero-divisor
convention are supplied by `def-invertible-sheaf-of-cartier-divisor` and
`thm-line-bundle-rational-section-cartier-divisor`.

The item's old “Supplier obligations … not yet authored” paragraph is stale:
both cited suppliers are present and their current proof bodies support the
interface. However, the item body does not expose the Choice premise carried
by the local-DVR supplier, nor the Axiom of Choice plus Dependent Choice
carried by its Cartier/Weil supplier. If this item's subspace and section
identification are meant to be established from the listed routes, surface
those premises or replace them with a verified choice-free route. This is a
premise/interface finding, not a counterexample to the usual curve statement.

### `thm-cartier-weil-divisors-curves-agree`

The statement explicitly assumes AC and DC. Its complete route is:

1. Closed local rings are DVRs under AC; they are PIDs and then UFDs, while
   the generic local ring is a field. Thus the curve is locally factorial.
2. `thm-cartier-weil-isomorphism-locally-factorial` proves prime divisors are
   locally cut out by nonzerodivisors using height-one primes in the local
   UFDs. It realizes each prime divisor with cycle coefficient one, obtains
   surjectivity by finite sums, and uses
   `lem-cartier-to-weil-injective-normal` for cycle injectivity. Normality
   follows from the same local rings. AC supplies DC for the cycle suppliers.
3. `thm-cartier-divisors-mod-principal-to-picard` identifies Cartier divisors
   modulo principal divisors with the Picard group on the integral curve;
   `lem-cartier-to-weil-respects-principal-and-addition` transports this
   quotient to the Weil class group. `thm-line-bundle-rational-section-cartier-divisor`
   gives a divisor for every invertible sheaf and accounts for the
   well-defined-modulo-linear-equivalence clause.

Every supplier named in the target's Statement/F4 flag paragraph is present
and connected through the current dependency lists. In particular,
`def-invertible-sheaf-of-cartier-divisor`,
`def-linear-equivalence-cartier-divisors`,
`thm-cartier-divisors-mod-principal-to-picard`,
`thm-cartier-to-weil-divisor-normal-scheme`,
`thm-cartier-weil-isomorphism-locally-factorial`, and
`thm-line-bundle-rational-section-cartier-divisor` are all authored. The
“not yet authored” text is historical, not a blocker. No mathematical gap was
found in the target route under its stated AC+DC assumptions.

### `lem-effective-divisors-sections-mod-scalars`

The core map uses only these exact facts: `f in L(D)` iff
`div(f)+D` is coefficientwise effective; principal divisors give linear
equivalence; scalar units have order zero; and a zero divisor for `f/g`
implies `f/g` is a global regular function. Injectivity then follows from
`thm-h0-structure-sheaf-proper-curve`, which applies because a curve is
geometrically integral and the item lists AC in its Given clause. The current
H0 route is `thm-global-functions-proper-integral-variety`; its stated
geometrically-integral case gives `H^0(C,O_C)=k`. Surjectivity is exactly the
definition of linear equivalence on the Weil side together with
`thm-cartier-weil-divisors-curves-agree`, which transports it to the Cartier
convention.

The core proof is sound. The current body for
`lem-global-section-effective-divisor` proves that a regular section has
regular local coefficients, these glue to an effective Cartier divisor, and
the canonical isomorphism carries `1_D` to the section. The current
`thm-line-bundle-rational-section-cartier-divisor` supplies the inverse
rational-section dictionary. The target's claim that those suppliers are not
yet authored is obsolete. Those section suppliers are useful for the
section-language explanation; the proof of the displayed Weil-divisor
bijection itself is already complete through [F1], [F2], [F4], and [F5]. AC is
explicit in Given and supports both H0 and Cartier/Weil uses; no separate
premise gap remains for this lemma.

### `lem-degree-effective-divisor-nonnegative`

The proof is a finite sum of terms `n_x [kappa(x):k]` with `n_x >= 0` and
`[kappa(x):k] >= 1`. A finite sum of nonnegative integers is nonnegative; if
it is zero each supported coefficient is zero. The general proper-curve
degree definition and finite residue-field lemma supply all premises, so the
claim holds without smoothness, normality, or Choice. The unused smooth-case
fact [F4] is correctly not needed.

## Current suppliers read

I read the complete current bodies of the six targets above and the complete
load-bearing supplier bodies below. Hashes are raw file SHA-256 values from
the same read snapshot.

| Supplier | SHA-256 |
|---|---|
| `def-algebraic-curve-over-field` | `9dbd57a9a428f9a7116973bdf6ad50adf1e527003a83cf063666c40702a36954` |
| `def-divisor-support-positive-negative-parts` | `5eb31cfb26296cb40b8ec50bac824008a24f76cdef8e5effb3576c285baf03f3` |
| `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite` | `a0117b7f329f917ba4ced4b66520aee57fc96d6e59e27ca59f0dd671d4dac835` |
| `thm-local-ring-smooth-curve-dvr` | `20118cacd8d7e4a9e3722f40994609127e7944f80d6306ed83173b47e32bfa0a` |
| `thm-regular-local-rings-are-normal` | `04f5c2ed575ce4d725c36ab39f3aea4d3f9c48d69d16fa35fecdec34624cc863` |
| `cor-dvr-is-a-pid` | `7192bc26fab836c1d154e0f131686db3ad7ea9f050afa89c515e9ecad5509078` |
| `thm-principal-ideal-domains-are-unique-factorisation-domains` | `8bbd6f18b9086cb9af8a7c0217d9e68b7e2961b44c6295dafe065855a9a19867` |
| `thm-cartier-weil-isomorphism-locally-factorial` | `60a69d528c1c412a95c65c0bf08accea66bc949b6bcf24acff51f2f5f2894a74` |
| `thm-cartier-to-weil-divisor-normal-scheme` | `1a8df250e34aaa77a26455a1abd9e49a771261cd04273a85dc4d39cc49803a6d` |
| `lem-principal-weil-divisor-locally-finite` | `34a3eebc667c0d6861ac1dcf341a42fcdd98206dd4ae563a816db075a9426ea6` |
| `lem-cartier-to-weil-injective-normal` | `7a6385c59965cc1de8cdb5a25bf936a0aed1bbe848f78cbf44db8c44b8747b2b` |
| `lem-cartier-to-weil-respects-principal-and-addition` | `b6d4d5b63e52a2b9996e67be1256e5e9601b9f65ece9db305163460763210752` |
| `thm-cartier-divisors-mod-principal-to-picard` | `39654d42b66f5879e525791cdc5abb1a7f9f5ae71f3c07ae02832b67a061121a` |
| `thm-line-bundle-rational-section-cartier-divisor` | `a769479d45dc430c62eda285791b053e5f2feaab77fa1adb3ad4d33f3db192b5` |
| `lem-global-section-effective-divisor` | `299c306abf4db57cbe48ef7ae0e0f005f63df162cab53936aa4a218b9d9d0554` |
| `thm-h0-structure-sheaf-proper-curve` | `3fa2bafae379acf7d5891b644450499fa95d1c0d0ead60fd8a2187ef7a5162e0` |
| `thm-global-functions-proper-integral-variety` | `2bf333afa50f8d4c63187a33e7537e4a329db8919711cc03a5402339742397f5` |

Also read the current interfaces/bodies for `def-degree-divisor-proper-curve`,
`def-order-codimension-one-rational-function`,
`def-weil-divisor-normal-noetherian-scheme`,
`def-invertible-sheaf-of-cartier-divisor`, `def-effective-cartier-divisor`,
`def-linear-equivalence-cartier-divisors`, `def-cartier-divisor`,
`def-locally-factorial-scheme`, `def-picard-group-scheme`,
`def-principal-cartier-divisor`, and
`def-principal-weil-divisor-and-class-group`. The latter source reads confirm
the divisor sign convention and the DC premise on Weil classes. No external
source fetch was needed to settle an uncertainty.

## Handoff

No missing-file or missing-supplier blocker remains in the six reviewed routes.
The two actionable integration findings are: (i) surface the AC premise used
by the Riemann–Roch definition's current local-order/Cartier route, and (ii)
avoid presenting the divisor-definition's normality/Cartier explanatory
sentences as unconditional new theorems when their current supplier route is
choice-bearing. The five owner-held item-decision rows remain untouched; root
retains scope and decision integration.

## Repair addendum (2026-10-01)

Root released only the two definitions above and this report for repair. The
earlier integration findings are resolved in the current bodies as follows:

| Item | Before SHA-256 | After SHA-256 | Repair |
|---|---|---|---|
| `def-divisor-smooth-proper-curve` | `cef1b2b60f5d8e8abe69ce79f169ea6385f0afc048ab40262b703130b0e668ee` | `9e19855fb97cce2b1fe4270ad4ff6d475fb39ed61d4c689ce24ab12af521eab1` | Kept the finite formal-sum definition unqualified. Added AC and AC⇒DC to the structural route. Distinguished closed-point DVRs from the generic-point field, derived normality, stated the Noetherian input, and derived local factoriality through the DVR→PID→UFD suppliers. Kept the Cartier interpretation as a separate curve-comparison consequence without adding a cyclic dependency. |
| `def-riemann-roch-space-of-divisor` | `a03da3fd42ad298216248e16aab29ace95f7042d36722cba724f720ce3e20c42` | `7fe85f2885857b8a290bfdebc8217c1a8b88eeb85fb26b0d204de60ae4436082` | Surfaced AC and its DC consequence. Removed the false equivalence `div(f)^- <= D`, stated the exact zero/pole conditions for signed coefficients, and proved the H0 dictionary from `O_C(D) ⊂ K_C` and local equations `t_i^-1 O_{U_i}` via the generic rational function. Removed obsolete “not yet authored” flags and the now-unused direct dependency on positive/negative parts. |

The repaired definitions preserve the degree, divisor, Riemann–Roch-space,
vector-space, and global-sections claims. The formal divisor convention remains
unqualified; AC appears only on its normality/local-factorial explanation and
on the Riemann–Roch item's actual local-order and Cartier/Weil supplier route.

The targeted renderer check passed for both definitions. The targeted
precheck reported `0 checked` because these definitions have no
`Facts & Assumptions`/proof-strategy body for that phase-format checker; it
therefore supplied no proof validation. No other check, carrier, receipt,
scope, item, gate, or plan was changed.

### B6 carrier reconciliation (2026-10-01)

Root released a carrier-only synchronization after reading the stable item
bodies. The selected B6 manifest claims now reflect the actual definitions and
the two additional reviewed claims: the divisor definition keeps the finite
formal-sum definition choice-free while qualifying its normality, Weil, and
local-factorial context by AC/DC; the Riemann–Roch entry states the signed
coefficient condition and the actual global-section image; the
Cartier/Weil theorem distinguishes closed-point DVRs from the generic-point
field; and the singular-curve counterexample records nonexistence of an
extension and conditional uniqueness, not two extensions. All four manifest
dependency lists match their corresponding current item frontmatter. The two
definition proof-contract arrays `citations`, `derivations`, and
`routine_steps` remain empty as required by the definition contract convention.

I refreshed the two definition boundary records and the 11 direct-consumer
Definition quotations that no longer matched the edited definitions. A
targeted comparison of every B6 contract quotation citing either definition
found 23 such quotations and 0 remaining stale excerpts. The theorem and
counterexample contracts already matched their current item bodies and were
left unchanged. `coverage.json` and `notes.md` were unchanged; the existing
source inventory still records the same harvested source material.

The scoped in-run dependency-level calculation leaves one upstream closure
reconciliation for root: `def-divisor-smooth-proper-curve` remains level 2;
`thm-cartier-weil-divisors-curves-agree` is stored at 9 but currently computes
10 through `thm-cartier-weil-isomorphism-locally-factorial`; consequently
`def-riemann-roch-space-of-divisor` is stored at 10 but computes 11. These
levels were not rewritten because the excess path is in the moving upstream
closure and root owns the B6 reclose. The counterexample remains at level 2.

| File | SHA-256 after carrier reconciliation |
|---|---|
| `items/def-divisor-smooth-proper-curve.md` | `9e19855fb97cce2b1fe4270ad4ff6d475fb39ed61d4c689ce24ab12af521eab1` |
| `items/def-riemann-roch-space-of-divisor.md` | `7fe85f2885857b8a290bfdebc8217c1a8b88eeb85fb26b0d204de60ae4436082` |
| `items/thm-cartier-weil-divisors-curves-agree.md` | `7fcaa43bc6654e6a4e80a6b7b2384e4310078850ec0265ada2c5afcc14a84b38` |
| `items/cex-rational-map-singular-curve-not-extend-uniquely.md` | `6972fb93a732609a65bd7144cd17a2471043369d763875d56173dd5911f822f2` |
| `research/frontier-37-owner-30-batch-6.pages.json` | `493b69c3394a7593ee9e7bffc79150ceb42ce5df254ca5b45f934c675d4a9764` |
| `research/frontier-37-owner-30-batch-6.proof-contracts.json` | `48ea4e5f62e73956adfcc9179973cc1d18da64e7b7bd21fe761ef9208e2a6e64` |
| `research/frontier-37-owner-30-batch-6.coverage.json` (unchanged) | `b3b3f50e52ebe5d48d33660861b56673d69e82d0ee6ad02d86af6424a25e3ec5` |
| `research/frontier-37-owner-30-batch-6.notes.md` (unchanged) | `4bc652e8aa680ee8b4362eb3515f5952d7280afb2f9672a5fd7ac9cc53ab7324` |

No gate or broad strict check was attempted.
