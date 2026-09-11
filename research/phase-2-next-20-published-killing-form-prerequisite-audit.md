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

## Exact draft supplier update — 2026-09-11

The finite-Weyl author has now supplied the exact nondegeneracy branch locally
on the existing A page. The draft definition
`def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action`, current
SHA-256
`12b20b36612501ab31c8f198719f075440f25a660b1cebe177cccf6ae2302025`,
states the finite-dimensional Lie, solvable, semisimple, trace-form and
symmetric-adjoint conventions without assuming nondegeneracy. The draft lemma
`lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy`, current
SHA-256
`60cc07a6881e99ec4d969f8a7a576d9d9e24f97d8f616527e9e7c8216ff38b50`,
then proves symmetry, invariance and the exact nondegeneracy conclusion used by
the published target.

The complete draft proof was read for this mapping. It proves Engel's common-
kernel and strict-triangular forms by finite-dimensional induction; constructs
the conjugate-spectrum operator by primary decomposition and finite Hermite
interpolation; derives the trace solvability criterion; and applies it to the
Killing radical, whose adjoint action is zero on the ambient quotient. The
radical is thereby a solvable ideal and vanishes by the stated semisimplicity
convention. Every selection is finite and no AC is used. The exact author/source
and local-check record is
`research/phase-2-next-20-finite-weyl-killing-repair-receipt.md`, SHA-256
`50af3157881e131592f067eaf7d96fcc28d8670aee998183eafc46cb3e5d9445` at this
audit.

Both supplying items remain draft and have not received owner review or
publication. They therefore sharpen the existing repair mapping but do not
close or reclassify the published Killing proposition. Phase 3 should replace
its unsupported proof 2.1 by the accepted/published lemma (or the same full
argument), with the definition strictly earlier. No new page pair is needed.

The subsequent draft
`lem-finite-semisimple-cartan-root-and-string-structure`, SHA-256
`dfe98901546beaac4fcdd72678c2e6979496a00b1a54ed87c36a2f9421db6479`,
now carries this local repair through the full Cartan decomposition,
opposite-root pairing, root brackets, rank-one triples, root strings and
reduced crystallographic root-system conclusions. Its exact six-target map is
recorded in
`research/phase-2-next-20-published-finite-weyl-draft-supplier-map.md`. Because
the whole replacement chain remains draft and unreviewed, all existing
published A-P rows remain open.

The next three published root-chain items were also read because they feed the
already-A-P root-system theorem.

`prop-root-space-brackets-add-their-roots`, SHA-256
`58aae8fcdf9a5b6656f8325f7d5f17d9262f984a004476339c6742ab6ef32459`,
has a sound Jacobi/derivation calculation in proof 1.1. Proof 2.1 uses the exact
affected exhaustiveness clause of the root decomposition to identify the
weight and make every other weight space zero. It is newly A-P through that
load-bearing branch; repairing the decomposition closes this proof without a
new argument.

`def-killing-dual-vector-attached-to-a-root`, SHA-256
`7d64c5eac3700fd2cabb034b8c9eee93217fc54062760db3222a353160c08ec1`,
is newly A-P because its unique `H_alpha` is defined through the exact affected
nondegenerate restriction of the Killing form to the Cartan subalgebra. Once
the Killing and opposite-root pairing suppliers are repaired, finite-dimensional
duality supplies the stated unique vector.

`prop-opposite-root-spaces-bracket-to-the-killing-dual-line`, SHA-256
`b262c7fcbcb24f2a8a8caa35f53b2e1e8bf502e916efbde31da276a245700eba`,
is newly A-P through those same exact branches. Proofs 1.1--2.1 correctly show
the displayed bracket identity after the root decomposition and nondegenerate
Cartan restriction are available. Proof 3.1 additionally says to choose
`x,y` with `B(x,y) != 0`, but the current opposite-root proposition does not
prove such a pair exists. Derive it by taking nonzero `x in g_alpha`, applying
global Killing nondegeneracy, decomposing a pairing witness into root-space
components, and using the proved orthogonality to retain a nonzero
`g_{-alpha}` component. Also note that `H_alpha != 0` because `alpha != 0` and
the Cartan restriction is nondegenerate. This proves that the bracket image is
the whole line. The item is the exact published input used in step 1.1 of the
already-A-P root-system theorem.

## Disposition and limits

The existing Killing-form proposition row remains A-P. The impact follow-ups
add five new A-P IDs and move the two existing Casimir U-P rows to A-P. No
duplicate is introduced, and no claim is made that all implicit Lie-theory
dependencies or all downstream uses have been audited.
