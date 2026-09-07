# Researcher 05 — representations and linearity

**Assignment.** Audit BG-8 and BG-9 of the proposed braid-groups scaffold:
the one-variable Burau construction/status and the two-variable
Lawrence--Krammer--Bigelow (LKB) construction, integral module, pairing, and
faithfulness route.  This is planning evidence, not authored mathematics and
does not change the plan.

## Retrieval, identity, and reading ledger

All four official arXiv PDF URLs below were fetch-verified on 2026-09-07:
each returned `200 application/pdf`.  The cache files were independently
checked for a PDF signature, page count, and an extracted body reaching the
bibliography.  They are under the permitted ignored cache root.  The cited
sections/pages were read; “complete object” means a complete downloaded PDF,
not that an unmentioned section is being claimed as evidence.

| key | identity and official URL | complete cached object / SHA-256 / pages | read for this report |
|---|---|---|---|
| Bigelow 2001 | Stephen J. Bigelow, *Braid Groups are Linear*, arXiv:math/0005038v1 (4 May 2000), [PDF](https://arxiv.org/pdf/math/0005038) | `scratchpad/source-cache/braid-groups/bigelow-linear.pdf`; `db0b9b7a8534f16157041fbe8f6a4351064ed97839efb9ef6856774d89eb5072`; 13 PDF/printed pages | all: §1 (pp. 1--3), §2 and Basic Lemma (pp. 3--6), §3 and Key Lemma/faithfulness (pp. 6--10), §4 matrices/freeness (pp. 10--12), refs p. 13 |
| Bigelow 2002 | Stephen J. Bigelow, *The Lawrence-Krammer representation*, arXiv:math/0204057v1 (4 Apr. 2002), [PDF](https://arxiv.org/pdf/math/0204057) | `scratchpad/source-cache/braid-groups/bigelow-lawrence-krammer.pdf`; `2200c8829ae3771403c4576aabd7c9b0b1f29c402a03a81df5b394769ec803ab`; 20 pages | all: Intro pp. 1--2; §§2.1--2.3 pp. 3--5; §§3.1--3.4 pp. 5--8; §4 pp. 8--12; §§4.2 and 5 pp. 12--19; refs p. 20 |
| Krammer 2004 | Daan Krammer, *Braid groups are linear*, Ann. of Math. 155 (2002), 131--156; arXiv:math/0405198v1 (11 May 2004), [PDF](https://arxiv.org/pdf/math/0405198) | `scratchpad/source-cache/braid-groups/krammer-linear.pdf`; `21bcf4863c62b55f6023e311371d027d69b0fc6f43a320afff830dc0d63c09a6`; 26 pages | §§1--6: pp. 131--156; especially representation formulas pp. 139--142, cone proof pp. 142--146, half-permutation lemmas pp. 146--151 |
| BBB 2026 | Vasudha Bharathram, Joan S. Birman, Tara E. Brendle, *The Burau representation is faithful for n = 4*, arXiv:2607.05283v1 (6 Jul. 2026; manuscript dated 7 Jul. 2026), [PDF](https://arxiv.org/pdf/2607.05283) | `scratchpad/source-cache/braid-groups/bharathram-birman-brendle-burau-b4.pdf`; `ecaf125b6075bcbcca9d7b9a55274cb1c8e16bb1bf22bbe0737bf25ded381c7c`; 26 pages | all pp. 1--26; in particular §§2, 4--7 on pp. 3--5 and 7--24 |

The date/version of BBB matters: it is an arXiv **v1 preprint**, not a
published replacement for a classical result.  The report below consequently
uses “claims/proves in v1,” not “settled literature.”

## Fixed conventions and source facts

### Burau

Let the punctured disk be \(D_n=D^2\setminus Q_n\), choose a boundary
basepoint \(p_*\), and send every standard positive meridian to
\(1\in\mathbb Z\).  BBB §2 (p. 3) uses
the corresponding connected infinite cyclic cover \(\widetilde D_n\), with
deck group generated multiplicatively by \(t\), and defines its **unreduced**
representation on
\[
 H_1(\widetilde D_n,p^{-1}(p_*);\mathbb Z)\cong\mathbb Z[t^{\pm1}]^n.
\]
This is precisely the relative module proposed in
`def-unreduced-burau-relative-homology-module`.  A lifted one-vertex,
\(n\)-edge spine gives the absolute module in
`def-reduced-burau-homology-module`; its cellular boundary is the row with
entries \(t-1\), so its kernel is free of rank \(n-1\).  This supports
`lem-the-reduced-burau-module-is-free-of-rank-n-minus-one`, but its proof
must actually display the kernel basis and the deck/basepoint convention.

With **column vectors**, the usual unreduced matrix convention is identity
outside the \(i,i+1\) coordinates and has block
\[
\begin{pmatrix}1-t&t\\1&0\end{pmatrix}.
\]
At \(t=1\) this is the adjacent transposition.  The source treatments mix
left/right actions and row/column displays; the author must state that a
column matrix acts on the left and translate the plan's “first braid under
second” convention before composing matrices.  Direct \(3\times3\) block
multiplication proves the Artin relations; it does not itself prove the
topological/matrix comparison.

BBB §2 gives a useful current source for the cover and relative module.
Its `Main Theorem` is explicitly for its **unreduced**
\(\rho_4:B_4\to GL_4(\mathbb Z[t^{\pm1}])\).  The existing BG-8 wording
instead records a result about the reduced representation.  Do not silently
equate the two: the integral short exact sequence and a proof that the
faithfulness assertion passes to the particular reduced quotient/submodule
must be written or sourced.  BBB's introduction uses “Burau” for its
unreduced convention even while noting the classical reduced representation.

### LKB

Bigelow 2001 §1.1 (pp. 1--2) and Bigelow 2002 §2.1 (p. 3) take
\(C\) to be the unordered configuration space of two distinct moving points
of \(D_n\), based at two distinct boundary points.  For a loop \(\alpha\),
let \(b\) be the exponent sum after forgetting the fixed punctures and
let \(b'\) be the exponent sum after adjoining them.  They have equal parity;
\(a=(b'-b)/2\), and
\[
 \Phi([\alpha])=q^a t^b,\qquad
 \Lambda=\mathbb Z[q^{\pm1},t^{\pm1}].
\]
The kernel cover has deck group \(\mathbb Z^2\).  A boundary-pointwise
mapping class preserves \(\Phi\), hence has the unique chosen-basepoint lift
and acts \(\Lambda\)-linearly on absolute \(H_2(\widetilde C)\).

The integral LKB representation is that action on **absolute**
\(H_2(\widetilde C)\), not an action first defined on a fraction-field space.
Bigelow 2002 §2.2 (pp. 3--4) defines, with \(\nu_\epsilon\) the
collision-or-puncture neighborhood, the directed-limit relative targets
\[
 H_2(\widetilde C,\widetilde\nu),\quad
 H_2(\widetilde C,\partial\widetilde C\cup\widetilde\nu),
\]
and the sesquilinear deck-sum pairing
\[
 \langle x,y\rangle=\sum_{a,b\in\mathbb Z}(x\cdot q^at^b y)q^at^b.
\]
It satisfies \(\langle\sigma x,\sigma y\rangle=\langle x,y\rangle\) and
\(\langle\lambda x,y\rangle=\lambda\langle x,y\rangle=
\langle x,\bar\lambda y\rangle\), where the bar inverts \(q,t\).
Thus `def-lkb-relative-pairing-modules` and the proposed equivariance lemma
need the direct-limit notation, both different relative targets, and this
sesquilinearity; an ordinary unsigned intersection number is not enough.

Bigelow 2002 Theorem 4.1 (p. 8) proves
\(H_2(\widetilde C)\) free of rank \(\binom n2\).  Its proof is genuinely
integral: Lemma 4.2 gives only the fraction-field dimension and injectivity;
Lemmas 4.3--4.6 plus induction force every rational coefficient into
\(\Lambda\) (pp. 9--12).  The basis surfaces are not just genus one/two:

- generic pairs use a genus-one surface and factor \((1-q)^2\);
- \((i,j)=(1,3)\) uses genus two and \((1-q)^2(1+qt)\);
- adjacent pairs use genus three and \((1-q)^2(1+qt)(1-t)\).

Accordingly the current BG-9 phrase “closed genus-one/genus-two classes” is
false by omission and must be repaired before `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`
is treated as locally proved.

Bigelow 2002 §4.2 (pp. 12--13) explicitly warns that Krammer's free
\(\Lambda\)-module \(V\) with basis \(F_{i,j}\) and the integral
\(H_2(\widetilde C)\) are **not isomorphic over \(\Lambda\) for \(n\ge3\)**
(citing PP01), although they become isomorphic over \(\mathbb Q(q,t)\).
It also corrects a sign in the older Bigelow matrix display.  Krammer's
generic-field/free-module basis must never be advertised as Bigelow's
integral homology basis.  In particular the current BG-9 example promising
both \(B_3\) matrices “with Bigelow 2002's integral basis classes” lacks a
source formula: Bigelow 2002 says those integral-basis matrices are complicated
and does not compute them.  Change it to a Krammer-basis, fraction-field
matrix example, or supply an independently checked integral calculation.

## What the two faithfulness proofs actually require

### Bigelow's topological route

Bigelow 2001 Theorem 1.1 (p. 1) states all-rank faithfulness.  Its proof chain
is exact and should be reflected in dependencies:

1. §§1--2 define forks/noodles and their deck-weighted pairing.  The fork
   surface is initially noncompact, so it cannot simply be declared an
   absolute homology class.
2. Basic Lemma 2.1 (pp. 3--6): a closed immersed surface represents a
   multiple \((1-q)^2(1+qt)\widetilde\Sigma(F)\) outside the puncture
   neighborhood.  This makes the pairing well-defined and makes it invariant
   under a kernel element.  The exact multiplier in the plan is correct.
3. Key Lemma 3.1 (pp. 6--9): \(\langle N,F\rangle=0\) iff the tine is
   isotopic rel \(\partial D\cup P\) to an arc disjoint from \(N\).
   The hard direction uses a lexicographic order on (q^at^b): maximal
   monomials all have the same sign and cannot cancel.  “Leading terms cannot
   cancel” alone is not a proof unless Claims 3.2, 3.3, and 3.5 are supplied.
4. §3.3 (pp. 9--10) applies the two lemmas repeatedly to standard adjacent
   edges \(E_i\), eliminating digons via the separately cited bigon criterion
   (Lemma 3.6 is not proved in this paper).  A mapping class fixing these
   edges is a boundary-twist power.  It then acts by scalar \(q^{2n}t^2\),
   forcing that power to be zero.

Therefore `lem-trivial-lkb-action-forces-trivial-action-on-a-punctured-disk-arc-system`
is too compressed.  It must depend on a source/proof of the bigon criterion,
a sequential arc-straightening lemma, and a lemma identifying a map fixing all
standard edges with a boundary twist power.  The current dependency on
`lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity`
does not replace these steps and is not how Bigelow closes the proof.  A clean
route is to add those three lemmas, then use the scalar full-twist action.

### Krammer's independent algebraic route

Krammer §§3--5, pp. 139--151, is an independent proof for a free module
\(V\) of rank \(\binom n2\) with basis indexed by reflections.  §3 gives
the seven-case generator formula.  Krammer says relation checking and
invertibility are straightforward but leaves that calculation to the reader;
it cannot be cited as an already supplied local proof.

For (R=\mathbb R[t^{\pm1}]) and a fixed (0<q<1), §4 uses the positive
coefficient cone (V_2), sets of reflections (half-permutations), their
greatest permutation projection, and nonempty disjoint cone pieces (C_x).
The crucial inclusion is
\(xC_y\subset C_{LF(xy)}\); Proposition 2.1 then proves Theorem 4.6
(p. 145), hence Theorem B/all-rank faithfulness.  The deferred
half-permutation closure/projection/equivariance proofs are §5, pp. 146--151.
This is a sound *external independent route*, but is far too long to hide
inside BG-9's present single theorem unless these substantial combinatorial
lemmas are scaffolded.

## BG-8 disposition and exact repairs

| proposed ID(s) | disposition | required correction / proof route |
|---|---|---|
| `def-total-winding-homomorphism-of-the-punctured-disk`, `def-burau-infinite-cyclic-cover`, `def-reduced-burau-homology-module`, `def-unreduced-burau-relative-homology-module` | include | BBB §2 p. 3 supplies the exact cover and relative module.  State the basepoint/full preimage and which deck generator is (t).  The mapping-class invariance is needed for normalized lifts, not merely asserted. |
| `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one`, `lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover`, `def-reduced-burau-representation` | include with proof seam | Give the lifted-spine chain complex and a kernel basis.  The lift must fix the selected boundary lift and commute with (t); only then does composition give a representation. |
| `def-unreduced-burau-matrices`, `lem-unreduced-burau-matrices-satisfy-the-artin-relations`, `thm-topological-and-matrix-burau-representations-agree` | include with convention repair | Freeze the displayed column block and explicitly state action/composition order.  The theorem needs a calculated lift of a half twist on the chosen relative edges and an exact-sequence comparison; relation checking does not prove it. |
| `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module` | include, but do not infer an equivariant integral splitting | State all three terms and maps from the pair LES.  The proposed warning is essential: a rank-one quotient/invariant line does not supply a (B_n)-stable integral complement.  It also does not by itself transfer faithfulness in the direction BG-8 wants. |
| `thm-reduced-burau-is-faithful-for-at-most-three-strands` | **repair required** | BBB §4 pp. 7--8 proves the (B_3) result through Moody polynomials, disk sequences, and parity/no-cancellation, not the plan's “central quotient plus specialized projective matrices” route.  Either source that alternate route and its exact specialization, or add a compact Moody chain (definition, exponent-difference lemma, parity criterion) and cite BBB §2, §§3--4.  Also establish precisely reduced versus BBB's unreduced convention. |
| `rem-current-faithfulness-status-of-the-reduced-burau-representation` | retain only as `proved_here: false` | State two levels: established classical status \(n\le3\) faithful and \(n\ge5\) nonfaithful; BBB v1 claims/proves its *unreduced* \(\rho_4\) faithful.  Do not report “reduced \(B_4\) settled” until the bridge above is verified.  Link exactly to arXiv v1 and date the audit. |

The B4 v1 architecture, accurately stated, is: Long's normal-subgroup reduction puts a hypothetical kernel into the Brunnian group (Intro/Prop. 1.2); §2 gives Moody's individual obstruction; §4 proves B3 through parity; §5 defines proper point-pushing products; §6 classifies B4 disk parity, embeds in \(B_5\) to replace the only bad 4-disks by 5-disks, obtains distinct Moody polynomials, and applies the obstruction to prove faithfulness on \(\mathrm{Brun}_4\) (Theorem 6.6); §7 is an illustration, not a proof ingredient.  Lemmas 6.2--6.3 only give a **single disk at a time** isotoped off the loop, not a simultaneous disjointness assertion.  The argument additionally invokes Long, Moody, the Birman exact sequence, and pseudo-Anosov facts as cited external inputs; a local proof cannot claim those are proved by BBB.

## BG-9 disposition and exact repairs

| proposed ID(s) | disposition | required correction / proof route |
|---|---|---|
| `def-two-point-configuration-space-of-a-punctured-disk` through `def-lawrence-krammer-bigelow-cover`, `lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly`, `def-lawrence-krammer-bigelow-representation` | include | Use Bigelow 2002 §2.1 p. 3 for the \(a,b\) convention and normalized lift.  The plan's stated \(q,t\) convention agrees with it. |
| `def-lkb-absolute-second-homology-module`, `def-lkb-relative-pairing-modules`, `def-forks-noodles-and-their-lkb-intersection-pairing` | include with terminology repair | Absolute (H_2) is the representation module; relative modules only provide pairing targets.  Do not call the original fork surface an absolute class.  Give both direct-limit targets and the bar-involution/sesquilinearity. |
| `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two` | include after basis repair | Cite Bigelow 2002 Theorem 4.1 and Lemmas 4.2--4.6.  Correct the omitted genus-three adjacent surfaces and do not identify its basis with Krammer's (F_{ij}). |
| `lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement`, `lem-the-fork-noodle-pairing-is-well-defined-and-equivariant`, `lem-the-fork-noodle-pairing-detects-essential-intersections` | include only as an explicit three-lemma chain | Basic Lemma 2.1 supports compact replacement and kernel invariance; Key Lemma 3.1 supports detection.  Include the multiplier \((1-q)^2(1+qt)\), the finite deck-sum argument, and the lexicographic no-cancellation proof—not a diagram-only assertion. |
| `lem-trivial-lkb-action-forces-trivial-action-on-a-punctured-disk-arc-system`, `thm-the-lawrence-krammer-bigelow-representation-is-faithful` | **repair required** | Add bigon criterion, sequential standard-edge straightening, “fixed standard edges implies boundary-twist power,” and the \(q^{2n}t^2\) scalar calculation.  Remove the misleading reliance on the BG-7 \(\pi_1\)-triviality lemma unless a separate proof really uses it noncircularly. |
| `cor-every-classical-braid-group-is-linear` | include after the above | The integral embedding lands in \(GL_{\binom n2}(\Lambda)\), then inclusion \(\Lambda\hookrightarrow\mathbb Q(q,t)\) supplies linearity over a field.  This is supported independently by Bigelow 2001 Theorem 1.1 and Krammer Theorem 4.6, but neither proof route should be compressed into an unsupported citation. |
| `ex-the-lkb-module-and-generator-matrices-for-b-three` | change | As written it conflates bases and promises an integral computation not supplied by the cited 2002 text.  Make it a carefully parameter-translated Krammer-basis field example, or defer until an integral change-of-basis calculation is independently checked. |

## Dependency consequences

1. BG-8 correctly depends on the punctured-disk/topological core, but its low-rank faithfulness theorem currently has neither BBB's Moody machinery nor an alternative sourced proof.  It must not depend merely on `thm-the-artin-representation-is-faithful`; that theorem is unrelated to the Burau kernel.
2. BG-9's `thm-the-integral-lkb-module-is-free...` should precede the representation definition as now planned, but needs the full surface/basis chain.  It does **not** depend on Burau; retaining the two pages as parallel branches is mathematically right.
3. BG-9's faithful theorem needs the compact-replacement and Key-Lemma chain before geometric arc straightening.  The existing BG-7 mapping-class faithfulness seam, already flagged by researcher 04, cannot silently be used to close LKB; Bigelow supplies a distinct boundary-twist closure.
4. Treat BBB as a current-status remark only.  A theorem used as a prerequisite must be either locally supplied with the named Moody/point-pushing/normal-subgroup inputs or recorded externally with the v1 status and exact statement; a preprint title is not a dependency proof.

## Bottom line

The LKB page has the right endpoint and main source selection, but it needs
three non-negotiable repairs: preserve the absolute-versus-relative distinction,
state the full integral basis surface cases, and expand Bigelow's
compact-replacement--Key-Lemma--arc-straightening chain.  Krammer is a valid
independent algebraic backup, not an integral-basis identification.  The Burau
page has a sound cover/matrix spine but currently overstates what the July 2026
v1 establishes for its chosen **unreduced** convention and names a B3 proof
route different from the source.  Keep B4 explicitly provisional and add the
missing bridge before saying the reduced status is resolved.
