# Number Theory rendering audit — lane 03

Reviewed **76 assigned items** and **114 receipt-listed PNG tiles**. Every tile listed below was opened individually with `tools.view_image` at original resolution. The title and complete ItemBody in each local snapshot were reviewed.

## Findings

Two titles expose ASCII formula notation instead of typesetting it. Both findings are bound to the exact local snapshot line and screenshot tile.

### `ex-arithmetic-of-q-zeta-five` — title, line 4

- Symptom: The title exposes the ASCII cyclotomic expression `Q(zeta_5)` literally instead of typesetting the field and root of unity; the tile confirms the raw title text.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-arithmetic-of-q-zeta-five--01.png` (SHA-256 `4dbc002db9e8f6e7f691e01ea6448603e2b611d4e19acb4b1ecda3ec49ee9ec6`)
- Suggested repair: Use `Arithmetic of $\mathbb{Q}(\zeta_5)$` (or the repository’s established cyclotomic notation) and verify the title renders as mathematical notation.

### `ex-p-adic-hensel-lifting-a-simple-root` — title, line 4

- Symptom: The title spells the polynomial in prose and leaves `Z_7` as literal underscore notation; the tile confirms the title does not typeset either expression.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-p-adic-hensel-lifting-a-simple-root--01.png` (SHA-256 `2fe95a00c11054d107b9972968bb87866d2c91a6ea452e8997bd2973ea59d3d8`)
- Suggested repair: Use `Hensel lifting a simple root of $X^2-2$ in $\mathbb{Z}_7$` and verify exponents and the subscript render correctly.

## Diagram review

No assigned item contains a TikZ diagram in its receipt record (`tikz_count: 0` throughout); therefore no existing diagram mathematics required checking. The reviewed source and rendered items did not support adding a diagram candidate. No diagram is recommended.

## Complete item and tile coverage

### `cex-an-abscissa-need-not-be-a-line-of-convergence` — A boundary line need not have uniform convergence behavior
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cex-an-abscissa-need-not-be-a-line-of-convergence.md` lines 1–50 (SHA-256 `d0ede8878e5d50adf3b1462d3dd2f87f690fe681aa76408faa04b5e913c8143e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cex-an-abscissa-need-not-be-a-line-of-convergence--01.png` | `500164be887f09ccd07f784616d3f558cb3ae1269591874afbc29dd8f668e06d` | Attested |

### `cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic` — Dirichlet density alone does not give a counting asymptotic
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic.md` lines 1–58 (SHA-256 `aac65ab9f89bbb290e45d662ba113d46fddaf36ae49ef57e1e952e02d1759224`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic--01.png` | `7a1e9a357e4d7390c578405d00c17f373b780b820a92e7d77c047ee6477d665c` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic--02.png` | `7d1135893997078997989fd43cd53648884ba45da2fecea26fdea0c809efce28` | Attested |

### `cex-indefinite-classes-have-cycles-of-reduced-forms` — An indefinite proper-equivalence class can contain a cycle of reduced forms
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cex-indefinite-classes-have-cycles-of-reduced-forms.md` lines 1–53 (SHA-256 `ba62139aab4098f04b7eefb600bc48afe87e3467955c3a36f225e9804f9d0db0`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cex-indefinite-classes-have-cycles-of-reduced-forms--01.png` | `6f40cc137e9024d302a0a63db4cc722c951cf47a0dd2b13fe7365e610ab4d1ec` | Attested |

### `cex-right-continuous-psi-has-the-wrong-perron-endpoint` — Right-continuous psi has the wrong Perron endpoint
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cex-right-continuous-psi-has-the-wrong-perron-endpoint.md` lines 1–37 (SHA-256 `f83848d6c93b50c07ad26d7cb40dcf6f65d179d218e4dce8c5eff62cec649790`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cex-right-continuous-psi-has-the-wrong-perron-endpoint--01.png` | `04df73bf2aead57e5ac09ce30375f00d7ac236bff10b215a4f4ab1d30658161f` | Attested |

### `cex-z-mod-one-is-not-a-field` — $\mathbb{Z}/1$ has one element and satisfies $[0]_1=[1]_1$, so it is not a field
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cex-z-mod-one-is-not-a-field.md` lines 1–49 (SHA-256 `5321e502bf2bf11e6dcd2561dcc9cf3081e82f967c82edf4d81746b1d3815f7a`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cex-z-mod-one-is-not-a-field--01.png` | `2f89cbfa0f4e37bec650c8568db88ff01de234fa791f433e1a8407531122a376` | Attested |

### `cor-binary-quadratic-form-equivalence-is-decidable` — Proper equivalence of positive-definite integral binary quadratic forms is decidable
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-binary-quadratic-form-equivalence-is-decidable.md` lines 1–52 (SHA-256 `2e68499a04e59ba34af834b1b22a7dcceb86aa6d86541b5cddb032813cb43c4d`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-binary-quadratic-form-equivalence-is-decidable--01.png` | `1c988d2661b3095dbcc9924c32351ab1f785a5268ef9bc7d55e736a8765351d6` | Attested |

### `cor-dirichlet-character-residue-class-indicator` — A residue-class indicator from character sums
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-dirichlet-character-residue-class-indicator.md` lines 1–46 (SHA-256 `699e903b1ab8cea97fee8ee9a64d195facc86dd1e28518cb0e350e60602f77ad`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-dirichlet-character-residue-class-indicator--01.png` | `183e3ed49df90b0cd93f9a2eb6acfa1a00223154e2844eb6532dd75c57fc82df` | Attested |

### `cor-euler-prime-product-tends-to-zero` — Euler's prime product tends to zero
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-euler-prime-product-tends-to-zero.md` lines 1–50 (SHA-256 `2adee91bcdf9dc39551616cf765dc70ef1c8087b758b0aa022b52a7cc58cd1e4`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-euler-prime-product-tends-to-zero--01.png` | `2a20e08bdc7a20657bb4d4d6157361c0cd112b6eab12cd3e633cecd6d4a997ab` | Attested |

### `cor-gcd-quotients-coprime` — If $d = \gcd(a,b)$ is nonzero then $a/d$ and $b/d$ are coprime
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-gcd-quotients-coprime.md` lines 1–81 (SHA-256 `d4b1d5e882073096ba64527040611317402961839fc180172fefe9a5db97e68e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-gcd-quotients-coprime--01.png` | `9a32796c3889805c79d9f75983f72033121bc509d48b1157b7768dcec57b6d46` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-gcd-quotients-coprime--02.png` | `39eafcf09c41a0dbdee5fa35a76f2671af7ac553053bb08db32b4526d74780c3` | Attested |

### `cor-no-nontrivial-number-field-is-unramified-over-q` — Every nontrivial number field has a ramified finite prime
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-no-nontrivial-number-field-is-unramified-over-q.md` lines 1–150 (SHA-256 `aa88ed771037f006bf8c1dee4d08888de7955866c38faca295964daabae835b4`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-no-nontrivial-number-field-is-unramified-over-q--01.png` | `5d5cded1a1a133461b76a99f122ae8d04c4533f2158eae60f86bdd2026697baa` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-no-nontrivial-number-field-is-unramified-over-q--02.png` | `20435540e496dcc7559b698654427d384d98fa0b23f5fa3af97a538761491769` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-no-nontrivial-number-field-is-unramified-over-q--03.png` | `d89e82974f6c4d0097f9e853f845e3727fb5c11847d96aa52060ad9999f0390e` | Attested |

### `cor-only-finitely-many-primes-ramify` — Only finitely many primes ramify
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-only-finitely-many-primes-ramify.md` lines 1–30 (SHA-256 `47a1647f6f604443351ccfb98ed251111bfa6957f37bb5647e1424c587a8d9ec`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-only-finitely-many-primes-ramify--01.png` | `ed87bb35721f0820952d6ae0721be52b26364e2e034534d367d738c022300767` | Attested |

### `cor-quadratic-congruence-discriminant-criterion` — The discriminant counts roots of $Ax^2+Bx+C\equiv0\pmod p$ for odd prime $p\nmid A$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-quadratic-congruence-discriminant-criterion.md` lines 1–62 (SHA-256 `2f2a202e6d3ee12f69606c69cd0e34b81e2f3f103087d92f57510b359b20d275`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-quadratic-congruence-discriminant-criterion--01.png` | `47bb0e2488d0ca81fb55b9407d3d6405782c8965e9eafaebf73d20edf5e5fab0` | Attested |

### `cor-ternary-isotropy-via-hilbert-symbol` — Ternary isotropy via the Hilbert symbol
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-ternary-isotropy-via-hilbert-symbol.md` lines 1–54 (SHA-256 `d477ea83573aebcab906c302e3b54ad4c4d8bbaf698e231376df2035ec5444fe`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-ternary-isotropy-via-hilbert-symbol--01.png` | `62d69d0fb31b5df358163cf8b93f2bafa1d6e037b2390b23db3ced944e2f15d4` | Attested |

### `cor-zeta-zero-count-unit-interval` — A unit-interval bound for zeta zeros
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/cor-zeta-zero-count-unit-interval.md` lines 1–41 (SHA-256 `ad5305104fab57dcba86b4fc65a08b2a0bc925f72c488106b09fa40041764710`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/cor-zeta-zero-count-unit-interval--01.png` | `18440342868d1e05108d2bdf5c8505e41a9c95ffe93735179e8547ccdb70f02a` | Attested |

### `def-binary-quadratic-form-over-integers` — Integral binary quadratic forms
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-binary-quadratic-form-over-integers.md` lines 1–48 (SHA-256 `97c594a33c461582db51967ac13e4334d80957cc2769a10c8fbb29028a9d6534`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-binary-quadratic-form-over-integers--01.png` | `d71e4a201803307d1111c0af67bd9523bd21c3bb81d7adfb1074a13f30b94ad4` | Attested |

### `def-continued-fraction-complete-quotients` — Complete quotients in the continued-fraction algorithm
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-continued-fraction-complete-quotients.md` lines 1–52 (SHA-256 `70cabcf3b9088cdd5570cada37f594df7c5550cb1394b195f14e6418b247ad40`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-continued-fraction-complete-quotients--01.png` | `7aa01e131a528d9ec46bfc4e33e9be7845f7257145d29c06f2f355c2773cbef9` | Attested |

### `def-discriminant-of-a-number-field-basis-and-order` — Discriminant of a basis and order
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-discriminant-of-a-number-field-basis-and-order.md` lines 1–36 (SHA-256 `ea87a5895391323e5dfd14fd8f707155263b47fca4ab42be6ae979d455c4ae45`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-discriminant-of-a-number-field-basis-and-order--01.png` | `f820f56ffe2f4c5f1739440ad1b7dff0109cc461196fa18db44d262946f7e878` | Attested |

### `def-fundamental-pell-solution` — The fundamental Pell solution
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-fundamental-pell-solution.md` lines 1–37 (SHA-256 `b04e1827c56f58e7e9c543f8283dc0bd0f377ea55d4fe5deb92a80c2eaba1d38`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-fundamental-pell-solution--01.png` | `69714fadb88c9033694fbddafc0d8efc4339dc4279f32be503d10fc507b36e27` | Attested |

### `def-integer-represented-by-binary-quadratic-form` — Integers represented, and primitively represented, by a binary quadratic form
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-integer-represented-by-binary-quadratic-form.md` lines 1–51 (SHA-256 `a799f637310973d0eb1120781c99b86e52feb2422420a6e6b3d3661c1766526a`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-integer-represented-by-binary-quadratic-form--01.png` | `8754216f20b425c3aa803c16f3ff0920313b68a243d98eff686f1ec22a41dce9` | Attested |

### `def-mertens-function` — The Mertens function $M(x)$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-mertens-function.md` lines 1–40 (SHA-256 `61aca194d31c2420266b05264aa11715786f70c7cdb8c62449ebcce738101f9c`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-mertens-function--01.png` | `27a877223c47e44afedad164a0c436825e3f89477c4979f4c2b7f182ad74e0dd` | Attested |

### `def-p-adic-absolute-value-on-the-rationals` — The p-adic absolute value on the rationals
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-p-adic-absolute-value-on-the-rationals.md` lines 1–37 (SHA-256 `73214a48d0d3e08bf51d19434fb882db6f0e1079b321642fe2f2cbb3786e5915`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-p-adic-absolute-value-on-the-rationals--01.png` | `bfe9c112344bdda48c570b3b65840dcbcbe87a43125cc31bd956aef434d2960a` | Attested |

### `def-primitive-binary-quadratic-form` — Primitive binary quadratic forms
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-primitive-binary-quadratic-form.md` lines 1–46 (SHA-256 `b29ca4e46ad7957d128798f43a824dd1d428a81f6533208bf9226afc73d150d8`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-primitive-binary-quadratic-form--01.png` | `a882b24b680a1fbe57f742e9698a0f6f4f1450ca00d7f14456d81651f7313f78` | Attested |

### `def-rational-local-fields` — The rational local fields
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-rational-local-fields.md` lines 1–37 (SHA-256 `604e8d4fa25ac914dbdd7dd277b879ee60ef13a1f68d475b98d0923c90bec5e9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-rational-local-fields--01.png` | `eead23c2ffc40fba196c6891c93ddca943dd857aecef20b4469ffb7f18e0cba3` | Attested |

### `def-sum-of-two-squares-representation` — Representations and primitive representations as sums of two squares
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/def-sum-of-two-squares-representation.md` lines 1–41 (SHA-256 `4ec1d989c6688502ee567092d9593ef01000a1de50d4cfc2872839b94a4f9795`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/def-sum-of-two-squares-representation--01.png` | `b0306f26b732b7b82bbb545dd51a7a2b25685bbbecdc2d6e53dc01ea728e569b` | Attested |

### `ex-arithmetic-of-q-zeta-five` — Arithmetic of Q(zeta_5)
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-arithmetic-of-q-zeta-five.md` lines 1–110 (SHA-256 `95a50192c57e6bedb05ca602ebfc34d4902dee5102975944a90b4fe89a0ac120`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-arithmetic-of-q-zeta-five--01.png` | `4dbc002db9e8f6e7f691e01ea6448603e2b611d4e19acb4b1ecda3ec49ee9ec6` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-arithmetic-of-q-zeta-five--02.png` | `9acaabacb2ef1e2c05bb8dcb47c4d4cedb93cb26ff08b9d8ec8de5252454e903` | Attested |

### `ex-class-group-from-small-prime-ideals` — Higher-degree class group by norm exclusions
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-class-group-from-small-prime-ideals.md` lines 1–129 (SHA-256 `f33c9b5096f2c0801603fe9c1440684fae3427a3f3049e84d91572feaa9a7d13`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-class-group-from-small-prime-ideals--01.png` | `ccd339835f88977b386a1bd82b386492f0e2912d6d6b6de6d4e4a059bf11d515` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-class-group-from-small-prime-ideals--02.png` | `5ffe0e62d83217628bedda7b43b913beeae62090b3350fc9cc3814c520a4c0e4` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-class-group-from-small-prime-ideals--03.png` | `28738acd5a6344db85122179c78eaab83d9453bbc7eefd65f009848523367c18` | Attested |

### `ex-dedekind-kummer-in-a-cubic-field` — Dedekind--Kummer in a cubic field
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-dedekind-kummer-in-a-cubic-field.md` lines 1–36 (SHA-256 `3d35cecec28316ecdae0ca75a4d10421ec3a62ffb7c64e6791063226f2583535`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-dedekind-kummer-in-a-cubic-field--01.png` | `929e5785755049a7f8164108ab08f9289b9f61ad3b94d50db1c1fceb326f382a` | Attested |

### `ex-divisor-counting-and-sum-prime-power-formulas` — Prime-power formulas for $\tau$ and $\sigma_k$ in concrete cases
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-divisor-counting-and-sum-prime-power-formulas.md` lines 1–55 (SHA-256 `15761a65cbf799b411c40c0cab0ff54d554593781260780efc1983f5cec3e892`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-divisor-counting-and-sum-prime-power-formulas--01.png` | `2146dc3ae77a240d131dd15634dbc276e3964193e9757a5227e7f71c7c8a35f3` | Attested |

### `ex-even-and-odd-character-theta-kernels` — Even and odd theta kernels
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-even-and-odd-character-theta-kernels.md` lines 1–40 (SHA-256 `7d696ce07f50e455a31a0097b2b7e7eed227728a8b3eaf062b1c0379b209850c`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-even-and-odd-character-theta-kernels--01.png` | `816465501229befcebfe894f5eb5dbe07fc57880a00e7b6cab38322c24a0e5cc` | Attested |

### `ex-frobenius-in-a-small-cyclotomic-field` — Frobenius in a small cyclotomic field
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-frobenius-in-a-small-cyclotomic-field.md` lines 1–48 (SHA-256 `8fe70c3aa68ca4e7a4fd47f1e5add0e10130fc2b36dbebc4e384f51c621b33f9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-frobenius-in-a-small-cyclotomic-field--01.png` | `7dfc6a156e783680d7798e9c66f9ce7511e16cb4a93a7bbd09194a2e58de3e72` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-frobenius-in-a-small-cyclotomic-field--02.png` | `289bde52244ef4898b5f0789fe7dcdbca9bbfed0e49da94fd31a384d2d5d6aa1` | Attested |

### `ex-generalized-pell-orbits-for-six` — Generalized Pell orbits for $x^2 - 6y^2 = 3$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-generalized-pell-orbits-for-six.md` lines 1–55 (SHA-256 `17fb55419f6d3e55330470257f8612e9af58b08847da24767b6aaff4773c86c5`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-generalized-pell-orbits-for-six--01.png` | `33069096c6d0d318d6942ccfdeeaf2955070a713b2087639ad62d28f5a80ba54` | Attested |

### `ex-least-absolute-remainders-and-the-even-modulus-tie` — Least absolute remainders modulo $7$ and modulo $8$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-least-absolute-remainders-and-the-even-modulus-tie.md` lines 1–66 (SHA-256 `f17b0d52674b4e8844f4bbbb0c416c2e71ca72772f0e286a7a5a850107d27151`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-least-absolute-remainders-and-the-even-modulus-tie--01.png` | `4a1843d2d3b44d048f309f45890f05fdb8d380ed382581845da5513fbb1b2aa5` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-least-absolute-remainders-and-the-even-modulus-tie--02.png` | `e4c1687c1e1d9b1f0fc81e88024906d0bae7dd20a3d0074964639bcfef497eaa` | Attested |

### `ex-negative-pell-equation-for-five` — The negative Pell equation for $D=5$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-negative-pell-equation-for-five.md` lines 1–55 (SHA-256 `b3f1022c0d192c61536df53a1779b39ece2c5fe1854edcb31bb50b27e1302caa`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-negative-pell-equation-for-five--01.png` | `36f2a114850c83c9579119e2a34698284e6c8d6e06a99968e60d720d56a8e6ce` | Attested |

### `ex-p-adic-hensel-lifting-a-simple-root` — Hensel lifting a simple root of X squared minus 2 in Z_7
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-p-adic-hensel-lifting-a-simple-root.md` lines 1–44 (SHA-256 `81da8f8a0e4309530705d6aa64f0d5fd404644bcb963837bed7fa63b733ee57c`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-p-adic-hensel-lifting-a-simple-root--01.png` | `2fe95a00c11054d107b9972968bb87866d2c91a6ea452e8997bd2973ea59d3d8` | Attested |

### `ex-prime-factorisation-worked` — $360 = 2^{3} \cdot 3^{2} \cdot 5$ and $84 = 2^{2} \cdot 3 \cdot 7$, with $\gcd(360,84) = 12$ and $\operatorname{lcm}(360,84) = 2520$ read off the exponents
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-prime-factorisation-worked.md` lines 1–125 (SHA-256 `205e228ab194db7781af5eb314bbf2497a9217b5380bc8fa6340e7a9bd6295a5`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-prime-factorisation-worked--01.png` | `7940d35c24dceb74077990af0c1017360578d2c4c33a7d2acbfd58909ed98bbb` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-prime-factorisation-worked--02.png` | `b5bc78094094048570c5bd989aa5c41378b2572279ed765e4fa85ccb304dc226` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-prime-factorisation-worked--03.png` | `4a7e645fac5a8407a229a0476a3b133a5a58c4630df4affd510acfc9aa221112` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-prime-factorisation-worked--04.png` | `353e737c46b87c082d6be38afd88bc60cad8ecedab4860925873744e2aee7ea9` | Attested |

### `ex-proper-versus-improper-equivalence-of-forms` — Improper equivalence can merge two distinct proper classes
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-proper-versus-improper-equivalence-of-forms.md` lines 1–49 (SHA-256 `eb398127e2058246b5ee9eb5bebf0168406806a1fdf0ce5402fc8be886087de9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-proper-versus-improper-equivalence-of-forms--01.png` | `a76350bbbfffaadccbf791a0f31253b5671a2ff07386e72486051cfe32bbc203` | Attested |

### `ex-reduced-forms-of-discriminant-minus-eight` — The reduced primitive forms of discriminant $-8$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-reduced-forms-of-discriminant-minus-eight.md` lines 1–54 (SHA-256 `47ffb49e6038bf57846ca0a9c47910677fcff0832b46caa250137a70b340cbfc`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-reduced-forms-of-discriminant-minus-eight--01.png` | `f3ead0f70c8771b212123bfbd7afa88b275695656fccb4e557ca525472f87951` | Attested |

### `ex-selecting-an-admissible-contour-height` — Selecting an admissible contour height
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-selecting-an-admissible-contour-height.md` lines 1–38 (SHA-256 `950aa7297cde87606b3dc465f47a6a1d5ed4a4c097214aa98b72e672ecc0fceb`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-selecting-an-admissible-contour-height--01.png` | `1918cdf90f21ff9f72b36e6aea5818a6b0b0793e4bdb6faa855cd3e88341567f` | Attested |

### `ex-the-three-four-one-trigonometric-inequality` — The three four one trigonometric inequality
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-the-three-four-one-trigonometric-inequality.md` lines 1–42 (SHA-256 `07bc02d4c178ecd334d2733f0980d6fbc14d02fb16ff7d110947571cfba93059`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-the-three-four-one-trigonometric-inequality--01.png` | `e09eda4ba571a1ca02142a28f094854c6caff300f455c188d9b160751a4c2496` | Attested |

### `ex-two-square-representations-from-prime-factorisation` — Prime factorisation gives two representations of $221$ as a sum of two squares
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-two-square-representations-from-prime-factorisation.md` lines 1–49 (SHA-256 `5aff856f657c54e8e01e45a442cdc33b1ff7976e0f59cc86999ec1e55fa4fbe2`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-two-square-representations-from-prime-factorisation--01.png` | `8912f8f424e54013641f4e705e846b2a084b81062339de27fe5d02df841d0f79` | Attested |

### `ex-zero-divisors-modulo-composites` — A modulus $n>1$ is composite exactly when two nonzero classes in $\mathbb{Z}/n$ have product $[0]_n$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-zero-divisors-modulo-composites.md` lines 1–53 (SHA-256 `10d3b165c0b05b166d127fba213e8cb5c719a8027fe724aa8610629503aa7c4e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-zero-divisors-modulo-composites--01.png` | `d2834ca3a07cec6c0150a0b504bb637949ec4b42fb1d22d05238071e275fc3f0` | Attested |

### `lem-arithmetic-frobenius-on-a-cyclotomic-field` — Arithmetic Frobenius is the power map in an unramified cyclotomic field
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-arithmetic-frobenius-on-a-cyclotomic-field.md` lines 1–87 (SHA-256 `d738d2b33ba9b248c49bc2aa247498ae63a0625f0aa1b44ce221539991c555c5`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-arithmetic-frobenius-on-a-cyclotomic-field--01.png` | `2b7a321e04205b3303e995fafe744daa64db1ee988b8deebef87d6125b7e6651` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-arithmetic-frobenius-on-a-cyclotomic-field--02.png` | `8df2fdadab8efbc1498d76c488530443e7b586366c5225715258b1b34b8604ef` | Attested |

### `lem-chebyshev-psi-prime-power-expansion` — Prime-power expansion of Chebyshev's psi function
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-chebyshev-psi-prime-power-expansion.md` lines 1–54 (SHA-256 `7f2e5a42a651751c540280c99fbf7181d660aa947b02421b399753a187e3a240`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-chebyshev-psi-prime-power-expansion--01.png` | `41402a544f0e49441f93b81ac758c53e844e0d9e7b238666ad3bbffd5a39e14c` | Attested |

### `lem-coprime-discriminant-compositum-integral-basis` — Integral basis and discriminant of a coprime-discriminant compositum
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-coprime-discriminant-compositum-integral-basis.md` lines 1–122 (SHA-256 `8a96f60ac683052c951d1a08111a64dc13af7d2419b2ee8e5486ccb39bc1b397`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-coprime-discriminant-compositum-integral-basis--01.png` | `8f7f89abb68d4f4e18eda7237ba415919c9374a11805b655413d9b197c8f223e` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-coprime-discriminant-compositum-integral-basis--02.png` | `489512c257f104a5e74b28802d5dd8c3716107a72fc1f483dedb2cec151ffea2` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-coprime-discriminant-compositum-integral-basis--03.png` | `5908c72c6d207e8d90e631e08ca9b34da09b90a10ad6f5445303cb0f4a5b34ba` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-coprime-discriminant-compositum-integral-basis--04.png` | `b78ab13435552dee6adcebe01238e783623640e94119dd71e5c93cf27c788d7f` | Attested |

### `lem-discriminant-change-of-basis` — Change of basis for discriminants
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-discriminant-change-of-basis.md` lines 1–38 (SHA-256 `8a4535fda60baf3cfb521a6b613969b355379dbf50eafe59eadf0f72650a2e3a`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-discriminant-change-of-basis--01.png` | `afd9c65ed2c4e2debe5afff5e24a2b22d6279a83e2c285ad137e6019424e3eb3` | Attested |

### `lem-four-square-congruence-for-primes` — For every prime $p$ the congruence $x^2+y^2+1\equiv 0\pmod p$ is solvable
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-four-square-congruence-for-primes.md` lines 1–74 (SHA-256 `63ea1461a4da63e9df686a2492bc708dba4dfe8106469fb496308427698e4755`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-four-square-congruence-for-primes--01.png` | `7d3e13f768a79d4946d3bfa812017487d243bd5f8517356811c8e2a4430df5b5` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-four-square-congruence-for-primes--02.png` | `2cf6011bddbc1ff10d5c234781f103564c421e32070bde8b797bc620ab41cf73` | Attested |

### `lem-gcd-scaling` — $\gcd(ca, cb) = |c|\,\gcd(a,b)$ for all integers $a, b, c$, the identity holding at $c = 0$ and at $(a,b) = (0,0)$ as well
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-gcd-scaling.md` lines 1–92 (SHA-256 `833f3dcaf145764666af139c19214a82e9e563810125661ea10a530adb570e5e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-gcd-scaling--01.png` | `7c71241f8587c6f4346cc4e7bac6cc281242eeb5e0534571d45b22ff5db38f14` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-gcd-scaling--02.png` | `4472c42aad56a997db1f7173ff502fbaa52352293e7c19c4ffba1a24dc24862a` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-gcd-scaling--03.png` | `aa389f20beba1a6b499cb760cef8c0954ce2cefe180e2d906bea39287f6edfb8` | Attested |

### `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` — Kernel of the unit logarithm is the roots of unity
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity.md` lines 1–109 (SHA-256 `ed888d2f34b435bea6a8f6337e9cb60f7e306d8fbeb1b5a76ac2da75adb21450`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity--01.png` | `93635717bcbcd1f2c122733974ac5a6fbdb13985c58ce5360ef1d0a36899622e` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity--02.png` | `765075ab61e2b1afccff618138bab6fd9b10d84ba7d8de86f98e65fcc14ba883` | Attested |

### `lem-logarithmic-unit-image-is-discrete` — The logarithmic unit image is discrete
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-logarithmic-unit-image-is-discrete.md` lines 1–93 (SHA-256 `193ba9bb688be66695bc479ab9e623d6210ad41c22b4c0bedde943650b6160ee`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-logarithmic-unit-image-is-discrete--01.png` | `c2edd2da11dccc8074256ef406f23743fc835cb2f2ef4a9b1721c31e64c9f0d3` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-logarithmic-unit-image-is-discrete--02.png` | `4b776035d18c5f5adcff0d03738a304778f86964098272410465bf549b9134ae` | Attested |

### `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` — A nonsingular square root lifts uniquely by one odd-prime-power step
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-nonsingular-square-root-lift-modulo-odd-prime-powers.md` lines 1–55 (SHA-256 `812b9b2930f0ef87e0b228a401cb5b07189389f8863bdcf81213f3c7c705104e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-nonsingular-square-root-lift-modulo-odd-prime-powers--01.png` | `1e88e377813cb3167bcb59d2c4a1849d95dfce84c4ce95dd8e7d1b643dc7bb35` | Attested |

### `lem-p-adic-valuation-on-q` — The $p$-adic valuation extends to the nonzero rationals by $v_p(a/b) := v_p(a) - v_p(b) \in \mathbb{Z}$, independently of the representation; it satisfies $v_p(xy) = v_p(x) + v_p(y)$, and $v_p(x+y) \ge \min\{v_p(x), v_p(y)\}$ whenever $x$, $y$ and $x+y$ are nonzero
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-p-adic-valuation-on-q.md` lines 1–123 (SHA-256 `1afbe7ac68e3f9ba1c320dd4f734be18765e3db7efebc061c453502cc01240ec`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-p-adic-valuation-on-q--01.png` | `cea4c1b59da85c349fd3823fbce72ef1f9f8282a266a4d0817140c1079f65d36` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-p-adic-valuation-on-q--02.png` | `664017b947dfb76635c1c6d3a6a121c3277bc0cb240454325f5197e43df758d9` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-p-adic-valuation-on-q--03.png` | `870941b3aa63b486b87d5a315d8b737885e8b2cc2fb60760e04ab5608961af22` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-p-adic-valuation-on-q--04.png` | `f8e10d7c6dd5bfe97f8b38929f2f311c919115df7a7d937e561c43e5589ead60` | Attested |

### `lem-prime-power-cyclotomic-integral-structure` — Prime-power cyclotomic ring, discriminant support and p factor
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-prime-power-cyclotomic-integral-structure.md` lines 1–159 (SHA-256 `54bb22f57b5f44fa87d40c0aa79bbe1658e097234b852cc2d5e48f2232c90e83`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-prime-power-cyclotomic-integral-structure--01.png` | `9537f8bb979a18c8829c482487d597e7131c2360f15a9c421ad46bf472b778ca` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-prime-power-cyclotomic-integral-structure--02.png` | `d7401f89f211496abad9ee5c5eca5141b76d5f553e1f4abddf9224149b55a5b2` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-prime-power-cyclotomic-integral-structure--03.png` | `dc6b23738d415143fb550d24af16c3d2b442887f744fdf908e3a47e9beb7ba91` | Attested |

### `lem-square-root-continued-fraction-state-recurrence` — The complete quotients of $\sqrt{D}$ satisfy the $P_n,Q_n$ recurrence
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-square-root-continued-fraction-state-recurrence.md` lines 1–56 (SHA-256 `cd95299da25e9c91414b96f726e062e4be375dcd1769d3b1ecac08872faafbfd`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-square-root-continued-fraction-state-recurrence--01.png` | `63cb62a0429e4f00c9ec3db4bd808b66a2babc8f22dc6c32112392f14eb8eeda` | Attested |

### `lem-truncated-perron-kernel` — The truncated Perron kernel
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-truncated-perron-kernel.md` lines 1–36 (SHA-256 `897053092f986a61a945e56ddd396cbd6e43651e033578a0163d859c20a9d115`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-truncated-perron-kernel--01.png` | `b8ef33319a8f69607dc7a5eb0b87c95d3e8697ec9b25a3fe9e2210910a32ff37` | Attested |

### `lem-zeta-horizontal-logarithmic-derivative-comparison` — Zeta horizontal logarithmic derivative comparison
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-zeta-horizontal-logarithmic-derivative-comparison.md` lines 1–53 (SHA-256 `db1971c04fd0775baa7a8333234e3f35fb7e52b7db817477230897dabba2ae6e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-zeta-horizontal-logarithmic-derivative-comparison--01.png` | `5d2ecc6c925fe2e7fed671dc5263c644dcb04beece639b25ae39d6868c2fa10f` | Attested |

### `prop-integral-pell-solutions-form-a-group` — Integral Pell solutions form an abelian group
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/prop-integral-pell-solutions-form-a-group.md` lines 1–58 (SHA-256 `3e6fb7e220bed5f4079114c5e8878020dd44aa8f15428ab01746c5c3b58fd9c9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/prop-integral-pell-solutions-form-a-group--01.png` | `50b463107a61a524add3f3cdd85d33b9c2ef91c079a8ce29ee34b61ff9efdf40` | Attested |

### `prop-quadratic-residue-is-representative-independent` — Quadratic residuosity is representative-independent and the residues are the image of squaring
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/prop-quadratic-residue-is-representative-independent.md` lines 1–58 (SHA-256 `2030bcf6617a0e5b171efede18fb8aaca99be8ad91c18830b76675a3d0ce1b23`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/prop-quadratic-residue-is-representative-independent--01.png` | `c346a9d88d356e6de205082d98c01bfeaee4dc220596d51db333b3b51b5b424c` | Attested |

### `thm-carmichael-function-formula` — Carmichael's function on prime powers and its least-common-multiple formula
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-carmichael-function-formula.md` lines 1–66 (SHA-256 `12c4b6afae1bbb4791b24b006ef1fcbcdf3b49e2c0943273b6945e47bd4bcb35`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-carmichael-function-formula--01.png` | `8e1122fe8e728c5110cac2cfdf76a773f797b983861856d1e1ba9d1c78d50146` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-carmichael-function-formula--02.png` | `d3b3c8444bc4edca89fd40f0da0961261cb427b4734636e64ecf08d567ceee67` | Attested |

### `thm-continued-fraction-algorithm-for-real-numbers` — The continued-fraction algorithm for real numbers
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-continued-fraction-algorithm-for-real-numbers.md` lines 1–55 (SHA-256 `aa5fd47457ebc085d8bb3df699b9b736227d0b72cb46f07f85e80627f9b79ea4`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-continued-fraction-algorithm-for-real-numbers--01.png` | `e371a15840a7a73d94dd35667c92b9b2807b989b119000c7d859464fc4a6504d` | Attested |

### `thm-decomposition-inertia-exact-sequence` — Decomposition inertia exact sequence
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-decomposition-inertia-exact-sequence.md` lines 1–44 (SHA-256 `915942820fc1f2a3335db093c3b8be0161a89461799f44c01766e2872e4ed46b`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-decomposition-inertia-exact-sequence--01.png` | `b4149d06869882913107a120c87ce4f4be2eeb07cf89564bee3b1e78976348cb` | Attested |

### `thm-dirichlet-hyperbola-method` — Dirichlet's hyperbola method for summatory convolutions
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-dirichlet-hyperbola-method.md` lines 1–53 (SHA-256 `aef8c5591bb9b8912008be0bfdbb5e4bd02d2eadb7649eb9b32893ad40b3744d`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-dirichlet-hyperbola-method--01.png` | `f5ed779d7e0444fa90712cc26db5bd42b1b74f508ebc5e05284c8e95eec6a8f9` | Attested |

### `thm-dirichlet-unit-theorem` — Dirichlet unit theorem
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-dirichlet-unit-theorem.md` lines 1–110 (SHA-256 `fcc0d4ee1467574ebeab6f515282056df4b26617344b1d4990848eca477c1439`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-dirichlet-unit-theorem--01.png` | `038b221305d4268621529ef18257b226036a52abf17deb7d1431880a5e390475` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-dirichlet-unit-theorem--02.png` | `a9e144ff09b1d6ca6ccf1d76db1782979e6c6157d3b61bceb1b2abbbec9d7e69` | Attested |

### `thm-euclids-lemma` — Euclid's lemma: if $p$ is prime and $p \mid ab$ then $p \mid a$ or $p \mid b$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-euclids-lemma.md` lines 1–76 (SHA-256 `0591c43ef9be2883d1006d1df4f3a1b292d3dc6ff49175b54c71dc1a873929c7`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-euclids-lemma--01.png` | `947c282f75bb4023368ce6906a452862ebcfc5902b99e72bd8d360db7baba9c3` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-euclids-lemma--02.png` | `a440e3d4bd3a30ca77223f08a82649567229ae8a1b1c7602fff1b549bd0d370d` | Attested |

### `thm-first-supplement-to-quadratic-reciprocity` — First supplement: $(-1/p)=(-1)^{(p-1)/2}$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-first-supplement-to-quadratic-reciprocity.md` lines 1–62 (SHA-256 `20bc310df8c81403f0b9a77d8333ee82e461b9cb560cb6cb941148dc24769156`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-first-supplement-to-quadratic-reciprocity--01.png` | `e09ac4c7aba5e0b90d71471faef6b264c358c44a8c46181ff5496a1630c2fbee` | Attested |

### `thm-gcd-lcm-product` — Every common multiple of $a$ and $b$ is a multiple of $\operatorname{lcm}(a,b)$, and $\gcd(a,b) \cdot \operatorname{lcm}(a,b) = |ab|$
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-gcd-lcm-product.md` lines 1–103 (SHA-256 `7873d63f72a5d8b2b341f92cfe6ea5c7d9292772fd29fd09dd6c040d245d4961`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-gcd-lcm-product--01.png` | `0c5314c1daabd77f20c0c1529c2ff48bc295242749da571df52106e7bec21120` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-gcd-lcm-product--02.png` | `4c5f62f0789e7e8845ad54c617098ef6d300750605c2bcd45671e47463476072` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-gcd-lcm-product--03.png` | `794190f050dde972dfa67c179eb194136c1f3b8ff2c6148d3f96eda2d7d20c7c` | Attested |

### `thm-jacobi-map-kernel-and-square-subgroup` — The kernel of the Jacobi map and the subgroup of unit squares
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-jacobi-map-kernel-and-square-subgroup.md` lines 1–89 (SHA-256 `bdf58c77bb455f45a820f83349d2c6f2fb83e2004c6d1860d35d88ab11384b1f`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-jacobi-map-kernel-and-square-subgroup--01.png` | `b964cae36e7c665d55e0a286474756d01c2abb83af28a3e7ca1b95c626e53517` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-jacobi-map-kernel-and-square-subgroup--02.png` | `f4aa7fa7c9d86b02ff843e24b7953d7ef4a755a92733591e78163d840383da32` | Attested |

### `thm-legendre-symbol-multiplicativity` — The Legendre symbol is multiplicative for all integer numerators
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-legendre-symbol-multiplicativity.md` lines 1–54 (SHA-256 `4a86a3d76b7b927b63749e2396f43e90d88e827545fb4d263da4a192e634b854`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-legendre-symbol-multiplicativity--01.png` | `69fa1704c8c85277f1486ea528ee416db09b269cbfb5054a28fab08965c69a2a` | Attested |

### `thm-natural-density-implies-dirichlet-density` — Natural density implies Dirichlet density
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-natural-density-implies-dirichlet-density.md` lines 1–47 (SHA-256 `505db7348e58c394a23f349ef2ca8f46e51de09246c21fd269ebedc49bb8dff9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-natural-density-implies-dirichlet-density--01.png` | `bbf2e2a96456d8d51f167eeca66e8028bd5b98ea6fe9d0abddc0dab0390875de` | Attested |

### `thm-orders-have-integral-bases-and-finite-index` — Orders have integral bases and finite index
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-orders-have-integral-bases-and-finite-index.md` lines 1–42 (SHA-256 `22bf60180ff0814340b6745555e07e0ca7a19c4a6b89647239e6a53209388fec`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-orders-have-integral-bases-and-finite-index--01.png` | `582e10ce9b712dc24d93e2874be71b08dd56b039abcbead0ebd4de93d70c42b9` | Attested |

### `thm-prime-factorisation-in-a-cyclotomic-field` — Prime factorisation in a cyclotomic field
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-prime-factorisation-in-a-cyclotomic-field.md` lines 1–104 (SHA-256 `2df4a48b180ff3c80723fc19b2d4e74c6bd15545fddc43f7570d7dedf10df7e5`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-prime-factorisation-in-a-cyclotomic-field--01.png` | `690462bca004d2f7637833549f8382c3ac27dad68706dd5edaa004e49141ac0b` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-prime-factorisation-in-a-cyclotomic-field--02.png` | `a6784b48ac808b7baabf7e34b5473afa188567214d24e922440334b80b7386c8` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-prime-factorisation-in-a-cyclotomic-field--03.png` | `862a0f0a3a05789d6b3a1d3a72c21e934663ffeb4cc910566d483c4f502c5c18` | Attested |

### `thm-principal-ideal-norm-is-absolute-field-norm` — The norm of a principal integral ideal
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-principal-ideal-norm-is-absolute-field-norm.md` lines 1–34 (SHA-256 `1d073b7c0599c91fdbe9e3f2825b0321b1db3ab094e2ea0a2c7893aab6cdd304`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-principal-ideal-norm-is-absolute-field-norm--01.png` | `eaa2e65a633dc825e24d1282dc0d8b7c45d927b2871caba3f272c3a35fcda07d` | Attested |

### `thm-ramification-and-residue-degrees-in-towers` — Ramification and residue degrees in towers
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-ramification-and-residue-degrees-in-towers.md` lines 1–35 (SHA-256 `5479c9c5b45f992156da4b716668ceade54c7b9087d88da4003030e3527da0db`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-ramification-and-residue-degrees-in-towers--01.png` | `6eb9baf0b4fb869947f172e5e1a6396dc06c4081c305c102b1987c4d22e94bed` | Attested |

### `thm-s-unit-theorem` — S-unit theorem
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-s-unit-theorem.md` lines 1–97 (SHA-256 `aff1eddb9aedf93412e5fc2e8ae9d7daed156f904810b946963de338bdeb6f67`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-s-unit-theorem--01.png` | `dffa2703bf1103a246e1774a01d11b28b850450e5f8f2a7330f457eb27d7f7bb` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-s-unit-theorem--02.png` | `20765ef42a5d8324d81e6418601a14a507615d377567a045cf191d5d9a60934f` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-s-unit-theorem--03.png` | `822ce13c33fc2a99b4f72b640efd5f94ce12625dc89aab44778c0a6e9db18d3f` | Attested |

### `thm-sum-of-two-squares-characterisation` — Characterisation of positive integers that are sums of two squares
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-sum-of-two-squares-characterisation.md` lines 1–67 (SHA-256 `c9ea37f8e0b5914ecf648397105d99b539ecaf55511d21fe597bb38b8644d77f`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-sum-of-two-squares-characterisation--01.png` | `1c535b877ffa3cb2745c7107519e61252521b0b496a57db75471b546c0db54e6` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-sum-of-two-squares-characterisation--02.png` | `da19d0be37074b82d40068bc0d2461038d88ebfd60eb8d97b23845a0f4c823ed` | Attested |

### `thm-uniqueness-of-two-square-representation-of-a-prime` — A prime congruent to $1$ modulo $4$ has one two-square representation up to signs and order
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-uniqueness-of-two-square-representation-of-a-prime.md` lines 1–57 (SHA-256 `9ac7e7c2ab96132871c20ea265837054b06a8459510b1d2e59b2ba0df444143b`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-uniqueness-of-two-square-representation-of-a-prime--01.png` | `5967666a9921a2dcc8dd69817ad63a7ceb637078d7c8a5f61c2a0f3698fd96c5` | Attested |

### `thm-von-mangoldt-explicit-formula-smoothed` — A smoothed von Mangoldt explicit formula
Snapshot: `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-von-mangoldt-explicit-formula-smoothed.md` lines 1–57 (SHA-256 `18e94bc26bae17bc6c32d42f503f67e26b6b5500f5384886887875bce7a80dfd`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-von-mangoldt-explicit-formula-smoothed--01.png` | `85a392034192275d0e30a27a9181d532589d89f09562bcae820276e8b648fb35` | Attested |
| `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-von-mangoldt-explicit-formula-smoothed--02.png` | `31b3f4a2d6ed88b28a4ce3447f366b9ab86a32b0f280bc7b781dad6e57bbd3b0` | Attested |

