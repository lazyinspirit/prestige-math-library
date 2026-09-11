# Frontier-22 published Archimedean-core audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Prior index state |
|---|---|---|
| `def-archimedean-field` | `ec6f3110c54c877b960bba9fb6b2a814078124692bef91707f331237745dcd83` | absent |
| `lem-of-naturals-positive` | `aa86d0261f064b0cf6fba826d10df6937adf76556d9688ea660709fca232e453` | absent |
| `thm-of-archimedean` | `e90de4059fe2801c77c5e48db21bf41ed091f8379ce5e508d9887bd21d72a30d` | U-P supplier-impact row |
| `cor-archimedean-reciprocal` | `6a01c4664ff48a19b611041ad3448af2401f5c31d0cde3bfafd3dd2c317f100e` | absent |

All four complete targets were read. Every exact ID was searched in the whole
canonical ledger and in each classification section. Canonical naturals,
cofinality, least-upper-bound contradiction, reciprocal inversion and missing
witness mechanisms were also searched. The sole prior classification is the
U-P row for `thm-of-archimedean`, labelled “Nonmeasurable-set counterexample:
missing witness supply.” The associated historical finding repaired a different
counterexample and listed this theorem only as a supplier-impact candidate; it
contains no theorem-specific defect. The present exact proof audit therefore
moves that single row to clear rather than creating another finding.

## Bounded dispositions

The Archimedean definition identifies cofinality of the canonical naturals with
the quantified order property. Its reciprocal remark follows by applying that
property to the inverse of a positive element and reversing a strict positive
inequality under inversion. The required inverse-order theorem is published,
so the concise remark is an adequate implicit use.

The canonical-natural lemma proves positivity and strict successor growth by
induction. Separate inductions give compatibility with natural addition and
multiplication. Iterating successor growth and natural order yields strict
monotonicity and injectivity. The proof does not declare its recursion,
induction and natural-order edges directly, but the published `thm-recursion`,
`thm-induction-principle` and natural-order interfaces are adequate and the
uses are correct. Under the canonical implicit-use rule this is clear.

If the canonical naturals were bounded, completeness would give their
supremum `s`. Since `s-1<s`, leastness gives a canonical natural above `s-1`;
its successor is then above `s`, contradicting that `s` is an upper bound. This
proves the Archimedean theorem with one existential witness for one fixed
inequality and no family selection.

Finally, for positive `epsilon`, Archimedeanness applied to its positive inverse
gives `epsilon^{-1}<n`. Reversing positive inverses yields `1/n<epsilon`.
Every inverse is defined, and the optional eventual form follows from
monotonicity.

Classification: three new bounded no-repair-needed dispositions and the one
existing `thm-of-archimedean` U-P row moved to bounded clear. No current Step-5
blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the four complete targets and their exact canonical-
natural, supremum and inversion clauses. It does not certify every epsilon
argument that cites them. No external source was newly consulted, no published
item was edited, and no independent judgment or exhaustive discovery claim is
made.
