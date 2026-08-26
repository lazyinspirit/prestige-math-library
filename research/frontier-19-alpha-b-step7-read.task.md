# Step 8 — group **b**, run `frontier-19`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 120 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-19-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `positive-definite-binary-quadratic-forms-and-reduction` | A | number-theory | 78.1 | `lagrange-four-square-theorem-examples`, `group-actions-and-cayleys-theorem`, `matrices-and-the-matrix-of-a-linear-map` |
| 2 | `positive-definite-binary-quadratic-forms-and-reduction-examples` | B | number-theory | 78.2 | `positive-definite-binary-quadratic-forms-and-reduction` |
| 3 | `solvability-by-radicals-and-kummer-theory` | A | abstract-algebra | 101.6 | `finite-fields-and-cyclotomic-extensions-examples`, `composition-series-and-solvable-groups`, `dual-spaces-bilinear-forms-and-inertia` |
| 3 | `solvability-by-radicals-and-kummer-theory-examples` | B | abstract-algebra | 101.8 | `solvability-by-radicals-and-kummer-theory` |
| 4 | `localisation-of-modules-and-support` | A | commutative-algebra | 111.003 | `noetherian-rings-and-hilbert-basis-examples` |
| 4 | `localisation-of-modules-and-support-examples` | B | commutative-algebra | 111.004 | `localisation-of-modules-and-support` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `positive-definite-binary-quadratic-forms-and-reduction` — Positive Definite Binary Quadratic Forms and Reduction (23 item(s))

- `def-binary-quadratic-form-over-integers` · definition — Integral binary quadratic forms
- `def-integer-represented-by-binary-quadratic-form` · definition — Integers represented, and primitively represented, by a binary quadratic form
- `def-primitive-binary-quadratic-form` · definition — Primitive binary quadratic forms
- `def-discriminant-of-binary-quadratic-form` · definition — The discriminant of a binary quadratic form
- `prop-binary-quadratic-form-discriminants-modulo-four` · proposition — An integer is the discriminant of an integral binary quadratic form exactly when it is congruent to $0$ or $1$ modulo $4$
- `def-principal-binary-quadratic-form` · definition — The principal binary quadratic form of a discriminant
- `def-proper-equivalence-of-binary-quadratic-forms` · definition — Proper equivalence of binary quadratic forms
- `lem-binary-quadratic-form-substitution-is-a-right-action` · lemma — Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms
- `thm-proper-equivalence-preserves-representations` · theorem — Properly equivalent binary quadratic forms represent the same integers, with primitive representations in bijection
- `prop-proper-equivalence-preserves-discriminant-and-primitivity` · proposition — Proper equivalence preserves discriminant and primitivity of the form
- `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` · proposition — Some discriminant $\Delta$ form primitively represents $n$ exactly when $\Delta$ is a square modulo $4n$
- `def-positive-definite-binary-quadratic-form` · definition — Positive-definite binary quadratic forms
- `prop-positive-definite-binary-form-criterion` · proposition — An integral binary quadratic form is positive definite exactly when its leading coefficient is positive and its discriminant is negative
- `def-reduced-positive-definite-binary-quadratic-form` · definition — Reduced positive-definite binary quadratic forms
- `lem-gauss-reduction-step-improves-a-positive-definite-form` · lemma — A non-reduced positive-definite form admits an equivalent positive-definite form with smaller reduction measure
- `thm-reduction-of-positive-definite-binary-quadratic-forms` · theorem — Every positive-definite integral binary quadratic form is properly equivalent to a reduced form
- `lem-leading-coefficient-is-minimal-in-a-reduced-class` · lemma — The leading coefficient of a reduced positive-definite form is minimal in its proper-equivalence class
- `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` · lemma — Properly equivalent reduced forms with the same leading coefficient are equal
- `thm-unique-reduced-positive-definite-binary-quadratic-form` · theorem — Each proper-equivalence class of positive-definite integral binary quadratic forms contains exactly one reduced form
- `lem-leading-coefficient-bound-for-a-reduced-form` · lemma — A reduced positive-definite form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$
- `cor-finiteness-of-positive-definite-binary-form-classes` · corollary — For each negative discriminant, there are only finitely many proper-equivalence classes of positive-definite integral binary quadratic forms
- `def-binary-quadratic-form-class-number` · definition — The class number of primitive positive-definite binary quadratic forms of discriminant $\Delta$
- `cor-binary-quadratic-form-equivalence-is-decidable` · corollary — Proper equivalence of positive-definite integral binary quadratic forms is decidable

### `positive-definite-binary-quadratic-forms-and-reduction-examples` — Positive Definite Binary Quadratic Forms and Reduction — Examples (10 item(s))

- `ex-reducing-a-large-binary-quadratic-form` · example — Reducing $(458,214,25)$ to $(1,0,1)$
- `ex-reduced-forms-of-discriminant-minus-four` · example — The reduced primitive forms of discriminant $-4$
- `ex-reduced-forms-of-discriminant-minus-eight` · example — The reduced primitive forms of discriminant $-8$
- `ex-primes-represented-by-x-squared-plus-two-y-squared` · example — Odd primes congruent to $1$ or $3$ modulo $8$ are represented by $x^2+2y^2$
- `ex-reduced-forms-of-discriminant-minus-twenty` · example — The reduced primitive forms of discriminant $-20$
- `ex-reduced-forms-of-discriminant-minus-twenty-three` · example — The reduced primitive forms of discriminant $-23$
- `cex-same-discriminant-does-not-imply-proper-equivalence` · counterexample — Forms of discriminant $-24$ need not be properly equivalent
- `cex-same-represented-integers-do-not-imply-proper-equivalence` · counterexample — Distinct reduced forms can represent the same integers
- `ex-proper-versus-improper-equivalence-of-forms` · example — Improper equivalence can merge two distinct proper classes
- `cex-indefinite-classes-have-cycles-of-reduced-forms` · counterexample — An indefinite proper-equivalence class can contain a cycle of reduced forms

### `solvability-by-radicals-and-kummer-theory` — Solvability by Radicals and Kummer Theory (28 item(s))

- `def-field-norm-and-trace` · definition — The norm $N_{K/F}$ and trace $\operatorname{Tr}_{K/F}$ of a finite field extension
- `thm-field-norm-and-trace-by-embeddings` · theorem — Norm and trace from embeddings, with the inseparable exponent in the norm formula
- `thm-basic-laws-for-field-norm-and-trace` · theorem — Norm is multiplicative, trace is $F$-linear, and both are transitive in towers
- `thm-field-norm-and-trace-agree-with-operator-determinant-and-trace` · theorem — Field norm and trace agree with the determinant and trace of multiplication by an element
- `def-trace-form-of-a-finite-extension` · definition — The trace form $(x,y)\mapsto \operatorname{Tr}_{K/F}(xy)$ of a finite extension
- `thm-trace-form-is-nondegenerate-iff-separable` · theorem — The trace form of a finite extension is nondegenerate exactly when the extension is separable
- `cor-trace-is-surjective-for-finite-separable-extensions` · corollary — The trace map of a finite separable extension is surjective
- `def-cyclic-extension` · definition — A cyclic extension is a finite Galois extension with cyclic Galois group
- `thm-hilberts-theorem-90` · theorem — Hilbert's theorem 90 for a finite cyclic extension
- `thm-additive-hilberts-theorem-90` · theorem — Additive Hilbert 90: trace zero is the image of $\alpha\mapsto\alpha-\sigma(\alpha)$
- `def-lagrange-resolvent` · definition — The Lagrange resolvent attached to a cyclic action and a root of unity
- `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer` · theorem — If $\mu_n\subseteq F$ and $\operatorname{char}F\nmid n$, then a degree-$n$ extension is cyclic exactly when it is $F(\alpha)$ with $\alpha^n\in F$ and $x^n-\alpha^n$ irreducible
- `thm-artin-schreier-characterization-of-cyclic-degree-p-extensions` · theorem — In characteristic $p$, a degree-$p$ extension is cyclic exactly when it is generated by a root of $x^p-x-a$ with $a\in F$ and that polynomial irreducible
- `def-kummer-extension` · definition — Kummer extensions from adjoining $n$-th roots over a base field containing $\mu_n$
- `thm-kummer-pairing-is-perfect` · theorem — The Kummer pairing $\operatorname{Gal}(K/F)\times B/(F^\times)^n\to\mu_n$ is perfect
- `cor-degree-of-f-adjoin-an-nth-root-by-coset-order` · corollary — The degree $[F(\sqrt[n]{a}):F]$ is the order of $a(F^\times)^n$ in $F^\times/(F^\times)^n$
- `thm-kummer-correspondence` · theorem — Kummer theory classifies finite abelian extensions of exponent dividing $n$ by subgroups between $(F^\times)^n$ and $F^\times$
- `def-radical-extension` · definition — A radical extension is a tower obtained by adjoining one $n$-th root at each step
- `def-solvable-by-radicals` · definition — A polynomial is solvable by radicals when its splitting field lies in a radical extension
- `lem-normal-closure-of-a-radical-extension-is-radical` · lemma — The normal closure of a radical extension is again radical
- `lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel` · lemma — Adjoining roots of unity to a finite Galois extension adds an abelian kernel and preserves solvability
- `thm-solvable-by-radicals-implies-a-solvable-galois-group` · theorem — In characteristic $0$, a polynomial solvable by radicals has a solvable Galois group
- `thm-solvable-galois-group-implies-solvable-by-radicals` · theorem — In characteristic $0$, a solvable Galois group makes a polynomial solvable by radicals
- `lem-symmetric-groups-up-to-four-are-solvable` · lemma — The symmetric groups $S_n$ are solvable for $nle 4$
- `cor-polynomials-of-degree-at-most-four-are-solvable-by-radicals` · corollary — Every polynomial of degree at most four is solvable by radicals
- `thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p` · theorem — For prime $p$, a transitive subgroup of $S_p$ containing a transposition is all of $S_p$
- `thm-general-polynomial-of-degree-n-has-galois-group-s-n` · theorem — The general polynomial of degree $n$ has Galois group $S_n$
- `cor-abel-ruffini-for-the-general-polynomial` · corollary — For $n\ge5$, the general polynomial of degree $n$ is not solvable by radicals

### `solvability-by-radicals-and-kummer-theory-examples` — Solvability by Radicals and Kummer Theory — Examples (14 item(s))

- `ex-norm-and-trace-in-a-quadratic-extension` · example — For $\mathbb Q(\sqrt d)/\mathbb Q$, the embedding formulas match the determinant and trace of multiplication
- `ex-norm-and-trace-in-a-finite-field-extension` · example — In $\mathbb F_{q^n}/\mathbb F_q$, norm and trace are the Frobenius product and sum
- `ex-trace-vanishes-on-a-purely-inseparable-extension` · example — For $\mathbb F_p(t)/\mathbb F_p(t^p)$, the trace is identically zero
- `ex-hilbert-90-and-pythagorean-triples` · example — Hilbert 90 for $\mathbb Q(i)/\mathbb Q$ recovers the rational parametrization of the unit circle
- `ex-x-cubed-minus-two-over-q-omega-is-cyclic` · example — Over $\mathbb Q(\omega)$, the splitting field of $x^3-2$ is a cyclic cubic extension
- `ex-cardano-from-the-lagrange-resolvent` · example — Cardano's formula for $x^3-3x-1$ from the Lagrange resolvent
- `ex-a-quartic-solved-by-its-resolvent-cubic` · example — A quartic solved through its resolvent cubic
- `ex-x-fifth-minus-two-is-solvable-by-radicals` · example — $x^5-2$ over $\mathbb Q$ is solvable by radicals although it is a quintic
- `ex-an-artin-schreier-extension-over-f-p-of-t` · example — Over $\mathbb F_p(t)$, the polynomial $x^p-x-t$ gives a cyclic Artin-Schreier extension
- `ex-q-zeta-three-cuberoot-two-cuberoot-three-is-a-kummer-extension` · example — $\mathbb Q(\zeta_3,\sqrt[3]{2},\sqrt[3]{3})$ is a Kummer extension with quotient $(\mathbb Z/3)^2$
- `fs-solvable-by-radicals-does-not-force-an-abelian-galois-group` · false-statement — FALSE: a polynomial solvable by radicals must have abelian Galois group
- `fs-not-every-quintic-is-insoluble-by-radicals` · false-statement — FALSE: every quintic is insoluble by radicals
- `fs-the-norm-is-always-the-product-of-the-embeddings` · false-statement — FALSE: for every finite extension, the norm is just the product over the embeddings
- `fs-the-trace-is-always-surjective` · false-statement — FALSE: the trace map of every finite extension is surjective

### `localisation-of-modules-and-support` — Localisation of Modules and Support (35 item(s))

- `def-localisation-of-a-module` · definition — Localisation of a module at a multiplicative subset
- `lem-localised-module-fraction-equivalence-is-an-equivalence-relation` · lemma — The module-fraction relation is an equivalence relation
- `lem-localised-module-addition-independent-of-representatives` · lemma — Addition of localised module fractions is independent of representatives
- `lem-localised-module-scalar-action-independent-of-representatives` · lemma — The localised scalar action is independent of representatives
- `thm-universal-property-localisation-of-a-module` · theorem — Universal property of localisation for modules
- `thm-localisation-of-modules-is-tensor-product` · theorem — Localisation of modules is extension of scalars
- `thm-localisation-of-modules-commutes-with-quotients-and-sums` · theorem — Localisation commutes with quotient modules and arbitrary direct sums
- `lem-zero-in-a-localised-module` · lemma — A localised module fraction is zero exactly when one denominator kills its numerator
- `lem-localisation-preserves-injectivity` · lemma — Injective module maps remain injective after localisation
- `lem-localisation-preserves-surjectivity` · lemma — Surjective module maps remain surjective after localisation
- `thm-localisation-of-modules-is-exact` · theorem — Localisation of modules is exact
- `cor-localisation-commutes-with-kernels-images-and-cokernels` · corollary — Localisation commutes with kernels images and cokernels
- `cor-localisation-commutes-with-finite-intersections-of-submodules` · corollary — Localisation commutes with finite intersections of submodules
- `lem-localisation-of-hom-natural-map` · lemma — There is a natural localisation map on Hom
- `lem-localised-hom-finite-free-case` · lemma — The localised Hom map is an isomorphism for finite free sources
- `lem-localised-hom-finite-presentation-kernel-step` · lemma — A finite presentation reduces localised Hom to the finite free case
- `thm-localisation-of-hom-for-finitely-presented-modules` · theorem — Localisation of Hom for finite and finitely presented modules
- `thm-local-criterion-for-zero-modules-and-maps` · theorem — Local criteria for zero modules and for injective, surjective, and bijective maps
- `thm-local-criterion-for-exactness-of-modules` · theorem — A sequence of modules is exact exactly when all prime localisations are exact
- `def-support-of-a-module` · definition — Support of a module
- `lem-support-membership-by-annihilator` · lemma — A prime lies in the support exactly when some element has annihilator inside it
- `lem-support-of-a-cyclic-module-is-its-vanishing-set` · lemma — The support of a cyclic quotient is its vanishing set
- `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` · lemma — A finite module has the union of its generator-cyclic supports
- `thm-support-and-annihilator-of-a-finite-module` · theorem — For a finite module, support is the set of primes containing the annihilator
- `thm-support-in-a-short-exact-sequence` · theorem — Support in a short exact sequence is the union of the outer supports
- `thm-support-of-arbitrary-direct-sums` · theorem — Support of an arbitrary direct sum is the union of the supports
- `thm-support-under-localisation` · theorem — Support under localisation is restriction to primes disjoint from the denominator set
- `def-jacobson-radical-of-a-ring` · definition — The Jacobson radical of a ring
- `thm-jacobson-radical-unit-characterisation` · theorem — An element lies in the Jacobson radical exactly when one minus any multiple is a unit
- `lem-determinant-trick-for-nakayama` · lemma — Determinant trick for Nakayama
- `thm-nakayama-lemma` · theorem — Nakayama's lemma
- `cor-nakayama-generators-modulo-an-ideal` · corollary — Generators modulo an ideal in the Jacobson radical lift to generators
- `cor-minimal-generators-over-a-local-ring` · corollary — Minimal generators over a local ring are exactly residue-field bases
- `thm-support-of-a-tensor-product-of-finite-modules` · theorem — Support of a tensor product of finite modules is the intersection of the supports
- `cor-finite-module-locally-zero-near-a-prime` · corollary — A finite module that vanishes at a prime vanishes on some principal neighbourhood of that prime

### `localisation-of-modules-and-support-examples` — Localisation of Modules and Support — Examples (10 item(s))

- `ex-localising-an-abelian-group-at-a-prime` · example — Localising cyclic abelian groups and Q/Z at a prime
- `ex-localisation-kills-exactly-s-torsion` · example — Localising Z/12Z kills exactly the torsion seen by the denominator set
- `ex-support-of-a-cyclic-module` · example — The support of Z/12Z is the pair of primes (2) and (3)
- `ex-support-of-an-infinite-direct-sum` · example — The support of the direct sum over all primes of Z/pZ is the set of all nonzero prime ideals of Z
- `ex-nakayama-jacobson-hypothesis-is-essential` · example — Over Z, the ideal (2) acts surjectively on Z/3Z but does not kill it
- `ex-nakayama-finite-generation-is-essential` · example — The p-primary quotient Q/Z_(p) over Z_(p) shows finite generation is essential in Nakayama
- `ex-minimal-generators-local-ring` · example — The ideal (x,y) in k[x,y]_(x,y) has two minimal generators
- `ex-local-test-for-an-isomorphism` · example — The Chinese-remainder map Z/6Z -> Z/2Z direct-sum Z/3Z is an isomorphism by local tests
- `ex-localised-hom-needs-finite-presentation` · example — Localised Hom can fail without finite presentation of the source
- `ex-localisation-does-not-commute-with-products` · example — Localisation need not commute with infinite products

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — read your group while the judges work, run `frontier-19`

You are a **group Alpha**. Your group, your pages and every item you own are
listed above.

This is the first half of your job. The second half is step 8, where you
adjudicate the judges' rejections against your own items. **You will not be
replaced by another agent.** This same conversation is resumed at step 8, so
whatever you understand now is what you will have then.

## You are read-only right now

Your sandbox refuses every write. The judges are reading a frozen copy of this
text; an edit landing now would void verdicts already cast against the old
bytes.

You get write access when this conversation resumes at step 8. Until then, note
things — do not fix them.

## What to do

1. **Read every page you own and its `-examples` companion**, and the item files
   under `items/`.
2. **Open every published item your pages cite.** You can read the whole
   library. Record a dependency only if you actually opened it.
3. **Write down the conventions your pages fix** — the orientation sign, the
   boundary regularity, whether a measure is complete, where an index starts,
   which direction an iff is stated in. Say which item fixes each one and which
   items depend on it.
4. **Note the items the rest of your group leans on**, quoting each statement as
   written.
5. **Check the cross-group edges** listed above, in both directions. If there are
   none, that field is empty.
6. **Note what already looks wrong**, before any verdict exists. Grade each one:
   `would-be-fatal` if the claim as written looks false or unsupported,
   `gap-a-reader-closes` if a competent reader closes it in thirty seconds,
   `presentation` if it is only wording.
7. **Alert other groups.** If you find a defect in an item another group owns,
   put it in `alerts` with the item id and what you think is wrong. Do not repair
   it and do not adjudicate it. It is delivered to that group before it
   adjudicates.

## Two things this is not

It is not an audit. Step 6 already ran independent readers and refuters over this
text. You are not repeating that.

It is not a verdict. Your concerns do not license edits. A cross-group alert is
different: the engine gives it a stable id and requires the owning group to
record a disposition at step 8, so a concrete warning cannot disappear between
agents. If the owner agrees it is fatal, the target item must first receive its
own current judge rejection before the fatal-only rule can license a repair.

## Why note things before the verdicts arrive

At step 8 you get a list of rejections. If you read the mathematics for the first
time then, you read it through the objections. Reading it now means your view of
the pages is your own.

A concern you record now was found with nobody pointing at it. If a judge later
objects in the same place, that is two independent readings agreeing, and you
should weigh it accordingly.

## Output

Your final message is a single JSON object matching the schema you were given.
Nothing else — no prose around it, no code fence.

`pages_read`, `items_read`, and `seams_checked` are exact inventories, not
counts or samples. List every owned page and item and every seam named above,
once each. The gate compares these sets mechanically and rejects omissions,
extras, and duplicates.

An empty `concerns` list is a real answer. Do not invent entries.

**No permission prompts of any kind**, including inside an `&&` chain.
