# frontier-19 — group Alpha `b`, step-3 scaffold breadth and depth review

Batches **2**, **3**, and **4**, the algebraic-arithmetic cluster named in
`research/frontier-19-alpha-groups.json`: binary quadratic forms, Kummer and
solvability, and localisation/support/Nakayama. I read, for each owned pair,
the batch `.pages.json`, `.notes.md`, and `.coverage.json` together with the
governing design section and the current `plan-spec.json` entry. I also opened
the cited source locators and checked the published dependencies on disk for
`status: published` and non-`ai-generated` statement provenance.

The `plan-spec.json` entries for all three A pages still have empty `items`
lists, so the batch manifests are the live scaffold. No A page exceeds the
step-3 split ceiling: NT-6 has 23 A items, GA-4 has 27, and CA-2 has 35.

## Verdicts

| pair | A items | B items | verdict | findings |
|---|---:|---:|---|---|
| `positive-definite-binary-quadratic-forms-and-reduction` | 23 | 10 | **sufficient** | none |
| `solvability-by-radicals-and-kummer-theory` | 27 | 14 | **insufficient** | B3-1, B3-2 |
| `localisation-of-modules-and-support` | 35 | 10 | **sufficient** | none |

## Severity table

| id | pair | severity | class | disposition |
|---|---|---|---|---|
| B3-1 | solvability-by-radicals-and-kummer-theory | **major** | missing published dependency in a load-bearing route | route to Beta 3 |
| B3-2 | solvability-by-radicals-and-kummer-theory | **major** | missing published dependency in a load-bearing route | route to Beta 3 |

## Batch 2

### `positive-definite-binary-quadratic-forms-and-reduction` — **sufficient**

The standard positive-definite reduction chapter is present: definitions of
forms, represented integers, primitive forms, discriminant, principal form, and
proper equivalence; the `SL_2(Z)` substitution action; preservation of
representation and discriminant; the positivity criterion; reduced forms;
existence and uniqueness of reduced representatives; the coefficient bound; the
finiteness corollary; and the class-number definition. The B page is real, not
token: it contains a full reduction computation, three explicit small
discriminant class-number enumerations, two genuine counterexamples, an
improper-equivalence example, and the indefinite-cycle boundary example.

The source harvest is faithful. Stein Ch. 9 §§9.2-9.4 does exactly carry the
equivalence/reduction/class-number spine Beta harvested, and Granville §4.1 plus
§4.6 do carry the discriminant-square criterion, the reduction algorithm, and
the indefinite-cycle warning Beta recorded. The Encyclopedia of Mathematics row
is used exactly as a convention tiebreaker and for the later composition
warning, which is the right scope for it.

The decline rows are explicit and acceptable. The full class-number-one list and
Gauss composition genuinely belong to later quadratic-order / ideal-class-group
machinery, and the discriminant-specific prime criteria from Granville are
surface enrichments rather than missing prerequisites to the current reduction
theory. Nothing is silently omitted, and no proof route in the current scaffold
fails for lack of a listed dependency.

## Batch 3

### `solvability-by-radicals-and-kummer-theory` — **insufficient**

Breadth is otherwise strong. The norm/trace block, cyclic and additive Hilbert
90, the cyclic Kummer theorem, Artin-Schreier, the perfect pairing, the Kummer
correspondence, both solvability theorems, the low-degree corollary, the
general-polynomial theorem, Abel-Ruffini for the general polynomial, and the B
page of concrete examples / false statements are all present. The source harvest
is also faithful: Milne Ch. 5, Conrad's norm/trace notes, Schultz's
applications lectures, the Artin-Schreier lecture, and Ghorpade's cyclic/abelian
extensions all support the page Beta built.

The problem is route closure, not topic omission.

### B3-1 — `thm-general-polynomial-of-degree-n-has-galois-group-s-n` omits the Artin fixed-field dependency

The scaffolded strategy says:

> "Its splitting field is exactly `F(X_1,...,X_n)`, and the permutation action
> on the roots embeds the Galois group into `S_n` while **Artin's theorem on
> invariants** makes the extension degree `n!`, forcing equality."

But the listed deps are only:

- `thm-fundamental-theorem-of-symmetric-polynomials`
- `cor-rational-function-field-as-a-fraction-field`
- `thm-galois-group-embeds-in-the-symmetric-group-on-the-roots`
- `thm-finite-galois-extension-characterizations`

The published item that actually states the fixed-field degree formula is
`thm-artin-fixed-field-degree-theorem`, with statement
`[K:K^G]=|G|` and `Aut(K/K^G)=G`. The broader
`thm-finite-galois-extension-characterizations` depends on Artin's theorem, but
its own statement is the equivalence of finite Galois conditions; it is not the
same proposition as the fixed-field degree computation this scaffold explicitly
uses.

This is a real step-3 closure defect. Add the published dependency
`thm-artin-fixed-field-degree-theorem` to the deps of
`thm-general-polynomial-of-degree-n-has-galois-group-s-n`.

### B3-2 — `thm-solvable-galois-group-implies-solvable-by-radicals` omits the Galois-correspondence quotient theorem

The scaffolded strategy says:

> "Choose a composition series whose factors are cyclic of prime order. Work
> upward through the corresponding tower of fixed fields."

That move is exactly the normal-subgroup / quotient-group part of the finite
Galois correspondence. The current deps are:

- `def-solvable-by-radicals`
- `lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel`
- `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer`
- `thm-finite-solvable-iff-composition-factors-have-prime-order`

What is missing is the published theorem
`thm-normal-subgroups-and-quotients-in-the-galois-correspondence`, whose
statement is exactly that normal subgroups correspond to Galois intermediate
fields and give quotient Galois groups. Without it, the scaffold names a tower
of fixed fields and cyclic prime-degree quotients but does not actually cite the
result that licenses that translation from group series to field tower.

This is also a real step-3 closure defect. Add the published dependency
`thm-normal-subgroups-and-quotients-in-the-galois-correspondence` to the deps of
`thm-solvable-galois-group-implies-solvable-by-radicals`.

With those two dependency repairs, the page looks breadth-sufficient; without
them, the intended proofs do not yet close from the scaffold as written.

## Batch 4

### `localisation-of-modules-and-support` — **sufficient**

The page covers the standard module-localisation/support/Nakayama chapter in an
honest decomposition: module fractions and their three well-definedness checks;
the universal property; tensor identification; quotient/direct-sum behaviour;
exactness; Hom localisation for finite and finitely presented sources; the local
criteria for zero maps and exactness; support of finite modules, short exact
sequences, tensor products, arbitrary direct sums, and localisation; the
Jacobson radical criterion; the determinant trick; Nakayama; generators modulo a
Jacobson-radical ideal; minimal generators over a local ring; and the local
vanishing corollary. The B page is substantive and boundary-focused, especially
on direct sums versus products and on the two essential hypotheses in Nakayama.

The design/addendum state is also acceptable. Beta correctly used the later
`CA-2 additions` decomposition where it sharpens proof obligations, while
keeping the actual spec page id `localisation-of-modules-and-support`. The
omitted addendum corollaries about cyclicity / `r` generators near a prime are
not silent drops from the harvested locators and are not needed to make the
current page's proof spine close.

The source harvest is faithful. Altman-Kleiman's cited exercises, propositions,
and support section match the scaffolded module-localisation/support/Nakayama
spine, and Milne's Nakayama/local-criterion material is used exactly where Beta
claims. Every published dependency I checked on disk is published and has
eligible statement provenance.

No missing prerequisite or dishonest decomposition blocks this pair, so the page
is sufficient as scaffolded.
