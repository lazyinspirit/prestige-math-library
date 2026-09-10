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

All three were then read at the exact used clauses. The following four
item-specific dispositions result.

`thm-root-space-decomposition-relative-to-a-cartan-subalgebra`, SHA-256
`12ecd2166d3741e380653adc0bf2f50bcc5ae4cdabe6c2aa8169cf80a0bf1b64`,
is newly A-P for an independent supplier gap. Its sole dependency is the
Killing-form proposition, which supplies neither fact used in proofs 1.1--2.1:
that the adjoint operators of the Cartan subalgebra commute and are
simultaneously diagonalizable, and that their common zero eigenspace is exactly
the Cartan subalgebra. The first is substantial semisimple/Cartan structure.
For the second, self-normalizing gives the centralizer containment only after
the Cartan convention and its abelianness have been supplied. No current item
defines that convention or proves these facts. Etingof §27.2 states the root
decomposition as a separate proposition; it is not an elementary consequence
of Killing nondegeneracy alone. Repair from the planned earlier DG Cartan/root
decomposition chain or include the complete structure argument locally.

`prop-killing-form-pairs-only-opposite-root-spaces`, SHA-256
`e5676843a11f16ec39e1457cb2bfdd7c976800c2c2b24d753e35956e4a7144f9`,
is newly A-P through two exact affected branches. Proof 1.1 correctly derives
orthogonality from invariance. Proof 3.1 then needs both the unsupported full
root decomposition and the unproved global nondegeneracy of the Killing form
to conclude nondegeneracy on the Cartan subalgebra. Repair those two suppliers;
the displayed orthogonality calculation itself needs no change.

`def-quadratic-casimir-element`, SHA-256
`45b576ec0eaa0513d1f628915c46e65e7a1f9ce21accc5964dd67419ba95b49f`,
and `lem-the-casimir-element-is-independent-of-dual-bases`, SHA-256
`1efd71b8963bf50437c4c3a952132fe5f0e6225b86607674b77b7100bf473b62`,
each already had one U-P census row under the broad Lie Phase-3 repair map.
Both move to A-P. The definition uses the affected nondegeneracy clause to
choose dual bases and points forward through `justified_by` to the lemma; the
lemma depends back on the definition. Move and prove the basis-independence
lemma first using the nondegenerate bilinear form and the canonical inverse-form
tensor, then define the multiplication image as the Casimir. This breaks the
two-item cycle and makes the definition well founded after the Killing-form
repair. The lemma's tensor argument is otherwise mathematically sound.

The active draft Kostant harmonic definition also needs the nondegenerate form,
but draft readiness does not create a published classification row. No new
Phase-2 pair beyond the already planned DG structure chain is identified.

## Disposition and limits

The existing Killing-form proposition row remains A-P. This follow-up adds two
new A-P IDs and moves the two existing Casimir U-P rows to A-P. No duplicate is
introduced, and no claim is made that all implicit Lie-theory dependencies or
all downstream uses have been audited.
