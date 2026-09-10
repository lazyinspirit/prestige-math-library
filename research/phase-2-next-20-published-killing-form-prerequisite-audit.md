# Published Killing-form prerequisite audit — 2026-09-11

This bounded audit follows the original-next-20 finite-Weyl/Kostant handoff.
It covers the complete current target, its sole declared dependency, the exact
nondegeneracy clause used downstream, and a repository search for the invoked
criterion. It does not certify every downstream proof or the full Lie-theory
closure. No published item was edited.

## Target and prior classification

`prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`,
SHA-256
`d48fed4e735940a453f2b5c755ea46a698a5f3098791405612df2b3b85c50f4f`,
has no aliases. Before this audit it had one U-P index row whose evidence was
the broad Lie-theory Phase-3 repair map. Exact-ID, alias, Cartan-criterion,
Killing-radical and supplier-ID searches found no second classification row.
This audit moves that existing row to A-P; it does not add an index ID.

## Exact proof gap

The sole declared dependency is
`def-killing-form-of-a-semisimple-lie-algebra`, SHA-256
`c9092d9c162eed7ccb8eae43397f7f0654ec3a16b671c974befdcd449eb282fc`.
That item defines `B(x,y)=tr(ad_x ad_y)` and supplies no semisimplicity
criterion.

Target proof 1.1 correctly proves invariance using
`ad_[x,y]=[ad_x,ad_y]` and cyclicity of finite-dimensional trace. Proof 2.1
then states Cartan's semisimplicity criterion and immediately uses its
nontrivial direction to conclude that the Killing radical is zero. A complete
search of current item text finds no published Cartan-criterion theorem. The
criterion is the whole proof of nondegeneracy; it is neither an elementary
unfolding of the Killing-form definition nor a correct implicit use of an
adequate published supplier. The classical statement remains true, but its
published proof has a load-bearing missing theorem.

The cited source, Pavel Etingof's *Lie Groups and Lie Algebras I*, §14.6,
<https://math.mit.edu/~etingof/lnlg.pdf>, treats this as the Cartan
semisimplicity criterion and proves the semisimple-to-nondegenerate direction
through the separate Cartan solvability criterion. This confirms the missing
argument is substantial structure theory rather than a trace identity already
present in the definition.

## Repair and bounded impact

Supply and declare an earlier Cartan semisimplicity/nondegeneracy theorem with
its Engel/Lie/solvability prerequisites, then make proof 2.1 an explicit
application. Equivalently, include a complete local proof of the required
direction. The current original-next-20 plan identifies the intended earlier
DG29 Cartan-criterion/nondegeneracy chain; until it is proved and published it
cannot repair this published proposition.

Three current published items directly declare the proposition:

- `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`
- `prop-killing-form-pairs-only-opposite-root-spaces`
- `def-quadratic-casimir-element`

The second uses nondegeneracy in proof 3.1 to prove nondegeneracy on the Cartan
subalgebra; the third needs it to choose dual bases. These are bounded impact
candidates, not three newly confirmed defects. The active draft Kostant
harmonic definition also needs the nondegenerate form, but draft readiness does
not change the published classification. No new Phase-2 pair beyond the
already planned DG repair chain is identified.

## Disposition and limits

The existing single U-P row moves to A-P. This is one promotion, with no new
ID, no duplicate, and no claim that all implicit Lie-theory dependencies or
all downstream uses have been audited.
