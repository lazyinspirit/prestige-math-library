# Finite `Tab` and `Decode` formula checks

Date: 2026-09-12. This is research-only support for the open constructibility
work in `phase-2-next-17`. It neither authors a library item nor records a
Step-3 decision. The executable companion is
`research/support-phase-2-next-17-internal-tab-decode.mjs`.

## Implemented formulas

The executable uses the exact bounded formula-word parser from
`support-phase-2-next-17-internal-word-parse-certificate.mjs`. It defines the
following pure-membership formulas.

- `Tab(w,c,q,A,m,U,H)` says that `c` is a complete finite parse certificate
  for formula word `w`, `U` is exactly the graph-coded set of length-`m`
  assignments into `A`, and `H` has exactly one truth-set row for each formula
  row of `c`. Atomic equality, atomic membership, negation, conjunction and
  existential assignment update use the selected row equations. Every row
  value is a subset of `U`; every key in `H` is a formula row of `c`; and each
  formula row of `c` has a unique value in `H`.
- `FV` is a graph on the same formula rows. Its rows are obtained by singleton
  pairs for atoms, identity for negation, union for conjunction and deletion
  of the bound variable for an existential formula.
- `Decode(w,A,n,a,b)` existentially supplies a parse certificate, an adequate
  assignment length, `U`, `H` and `FV`. It requires a nonempty carrier, a
  length-`n` parameter graph `a`, `n<m`, and no variable index in `w` above
  `n`. It says that `b` is exactly the set of `x` in `A` for which a true
  assignment has coordinate zero equal to `x` and coordinates `1,...,n`
  equal to the entries of `a`. Assignment coordinates above `n` are padding;
  they do not become parameters.

`rowsMatrix` and `freeMatrix` are bounded formulas. The exact-assignment
universe clause and the existentially closed `Tab` and `Decode` formulas are
not bounded, because they quantify over their finite set witnesses.

## Termination repair

The initial executable called the historical recursive formula-word encoder on
the generated formulas. The formulas have about twenty thousand AST nodes and
long right-associated branches, so that encoder raised `RangeError: Maximum
call stack size exceeded` before any test completed.

The companion now exports `iterativeFormulaCode`. It emits the identical
token word with an explicit work stack and no recursive JavaScript calls.
Small-formula comparisons show literal numerical equality with the historical
encoder. The numerical decoder round-trips all seven generated matrices and
closures. A focused regression serializes and decodes 12,000 nested negations,
whose AST depth is 12,001, and separately preserves the variable index
`2^80+7` without conversion to a JavaScript number.

## Canonical finite enumeration checks

`canonicalFormulaRows` independently scans the serialized source word. On
each closing parenthesis it parses the candidate subword, retains formula
subwords, removes repeats by exact numerical word equality, and records their
first closing-order occurrence. Thus its result is a canonical postorder of
the distinct formula subexpressions and does not reuse the certificate
producer's AST walk.

Six fixtures cover equality, membership, negation, conjunction, a repeated
subformula, and nested/shadowing existential quantifiers. For each fixture the
test checks all of the following.

1. The iterative and historical encoders give the same numerical word.
2. The independent closing-order rows equal the formula rows in the internal
   parse certificate.
3. Those rows equal the independent external schedule from
   `support-phase-2-next-17-subformula-truthset-history.mjs`.
4. The schedule's variable-index inventory equals a separate AST traversal.
5. The resulting least adequate assignment arities are `1,2,1,2,1,2`.

This supplies finite row-enumeration agreement for the selected word coding.
It does **not** connect these words to a separately published global
formula/arity-number enumeration, so the executable deliberately reports
`publishedFormulaArityNumberingAgreement: false`.

## Finite semantic fixtures

The positive `Tab` fixture uses the singleton transitive carrier and the
formula `v_0=v_0`. The independently constructed assignment universe, truth
row and free-variable row satisfy the full `tabMatrix`. Negative mutations
reject:

- an assignment universe with its assignment removed;
- replacement of the root truth row by its complement;
- two conflicting values for the root row;
- omission of the root row;
- an extra truth row keyed by a formula not in the parse certificate; and
- an empty `FV` graph where the root free-variable row is required.

The `Decode` fixtures check a membership formula with one parameter and an
extra padding coordinate, and an equality formula with two unused supplied
parameters. Negative cases reject a wrong decoded subset, an arity too small
for a used variable, an assignment length not larger than the parameter
arity, and the explicitly excluded empty carrier. In total the run reports
one positive full `Tab` fixture, two positive `Decode` fixtures, six canonical
enumeration fixtures and ten rejected semantic mutations.

## Reproduction

Run from the repository root:

```bash
node --check research/support-phase-2-next-17-internal-tab-decode.mjs
node research/support-phase-2-next-17-internal-tab-decode.mjs
```

The successful run on 2026-09-12 serialized and decoded these principal
formulas:

| Formula | AST nodes | Maximum depth | Numerical code bits |
| --- | ---: | ---: | ---: |
| `rowsMatrix` | 18,731 | 200 | 4,780,952 |
| `tab` | 19,183 | 216 | 4,896,524 |
| `freeMatrix` | 15,367 | 200 | 3,903,904 |
| `decodeMatrix` | 22,583 | 202 | 5,781,456 |
| `decodeWord` | 22,602 | 221 | 5,784,856 |

The complete test run terminates normally and prints
`finiteRowEnumerationAgreement: true`, ten negative checks, and the explicit
false value for published enumeration agreement.

## Exact remaining boundary

These executions evaluate formulas in explicitly materialized finite
transitive hereditary-set domains. They are not finite models of ZF. They do
not establish, inside ZF or an arithmetic base, the following still-required
claims.

- Existence and uniqueness of the selected `Tab`, `FV` and `Decode` witnesses
  in every weak transitive domain or required successor constructible level.
- A proof that every internally accepted table is sound and complete for all
  actual finite assignments in those domains.
- Agreement with the repository's separately fixed published
  formula/arity-number enumeration, including a proof-code bridge for the
  exact unused-parameter convention.
- A numerical ZF proof constructor for these formulas or a PA proof of the
  constructor's totality and proof-checker acceptance invariant.
- The expanded formula defining constructibility, arbitrary relativized
  Separation and Replacement proof constructors, and the fixed AC/GCH proof
  blocks needed by the finite-fragment L interpretation.

The finite semantic implementation uses JavaScript array indices for its
materialized hereditary-set pool and therefore restricts those fixtures to
safe integer payloads. The separate serialization regression proves that the
word codec itself preserves much larger natural-number variable indices.

Accordingly this support closes the executable termination defect and gives a
reusable selected finite `Tab`/`Decode` specification with adversarial tests.
It does not by itself justify reopening or accepting any Step-3 item.
