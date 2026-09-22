# Owner residual repair: groups A and B

Run: `phase-2-remaining-27`

Dispatch: `owner-residual-ab`

## Outcome

Four owner escalations are repaired at their selected strength. The fifth is
left open because its selected assertion is false for the diagonals allowed by
its hypotheses; no weakening or silent extra hypothesis was introduced.

| Queue position | Item | Disposition |
|---|---|---|
| A/63 | `thm-classification-of-real-semisimple-lie-algebras` | Repaired |
| A/64 | `prop-classical-real-forms-of-the-classical-complex-lie-algebras` | Repaired |
| B/32 | `prop-reduced-and-unreduced-generalized-cohomology-theories-correspond` | Repaired, with direct supplier repair |
| B/41 | `lem-the-ahss-first-differential-is-the-cellular-coboundary` | Repaired and synchronized with B/32 |
| B/44 | `lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss` | Open; bytes, manifest and contract untouched by this dispatch |

No published item, judge/adjudication ledger, terminal resolution, queue, pass
stamp, engine state or tool was edited.

## Per-item evidence and disposition

### A/63 — classification of real semisimple Lie algebras

The latest receipt identifies the fatal claim exactly: “Step 1.4 says the
diagram involution can always be made trivial.” It also records the consequent
omissions and miscounts, including E VIII/E IX and E I/E IV.

The proof now keeps the abstract Vogan/Satake classification as its local
interface and uses the complete source classification for the named list. Its
repair witness is: “does not change a nontrivial diagram involution into the
identity.” Knapp's Borel--de Siebenthal reduction is used only for the
at-most-one-painted-root normal form; Knapp Theorem 6.105 supplies occurrence,
exhaustion, ranges, all twelve exceptional noncompact noncomplex forms and the
sole normalized duplicate. Etingof independently confirms the type-by-type
classical families and retained outer classes. The false Chevalley/Serre local
enumeration and its unused dependencies were removed without changing the
Statement.

The batch-13 manifest strategy and dependencies were synchronized. A complete
proof contract, previously absent, was added to both the batch-13 and unified
contract files.

### A/64 — classical real forms

The receipt's concrete defect witness is that the old `J` “produc[ed] an
n-by-n matrix ... but multiplies it by X in so_(2n)(C). The products are
undefined.” It also identifies the unduplicated signature matrix in the
symplectic formula and the unsupported compactness, low-rank and exhaustion
arguments.

The repaired item displays the correctly typed matrices. Its exact witness is:
“the last $J_n$ is $2n$ by $2n$, with no odd-dimensional completion”; the
symplectic involution uses
$H_{p,q}=\operatorname{diag}(S_{p,q},S_{p,q})$, also $2n$ by $2n$. The proof
checks the fixed loci, transports the orthogonal signature model explicitly,
and takes exhaustion, compact/split members, ranks and real low-rank
coincidences from the repaired classification and source tables. The Statement
now includes the source's type-$D_4$ duplicate
$\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$.

The batch-13 manifest and the newly added batch/unified proof contract were
synchronized with the final proof.

### B direct supplier — reduced generalized cohomology theory

The B/32 receipt isolates the supplier defect: it supplied “a natural
suspension isomorphism sigma and independent natural connecting maps delta_f”;
the sign-twisted example therefore made the claimed correspondence noninjective
on the stated structured theories.

The definition now states that the connector “is not independent structure”
and fixes it by
$$\delta_f=q_f^*\circ\sigma_n(X).$$
Exactness, naturality and morphisms all use this normalization and the fixed
sphere-first cofiber convention. This is a direct prerequisite repair found
via B/32. Its batch-9 manifest and batch/unified boundary worksheet were
synchronized.

### B/32 — reduced/unreduced correspondence

The receipt says: “construction (B) never defines its required delta_f.” It
also records the false identifications of the empty based space with $S^0$, of
disjoint union with wedge after collapsing subspaces, and of $Y_+$ with
$Y\vee S^0$.

The forward construction now treats $A=\varnothing$ through the one-point
based space and obtains additivity from wedges of reduced cofibers. The reverse
construction obtains suspension from the cone triple, sets
$\delta_f=q_f^*\sigma$, and proves exactness by mapping-cylinder replacement.
The first inverse uses the correct witness “$Y_+/S^0$ ... is canonically the
original based space $Y$”; the other uses the cone pair and excision. Thus the
connectors agree as part of the inverse correspondence rather than as an
unstated convention.

The batch-9 manifest was synchronized, and the batch-9 and unified citation,
derivation and boundary contracts were regenerated. The stale pre-repair risk
review was removed because it does not attest to the rewritten bytes.

### B/41 — first AHSS differential

The latest receipt's endpoint witness is: “Such a map gives only 0 or 1, not
the required -1 at an initial endpoint.” It also traces the independent sign
failure to the same unnormalized connector repaired above.

For $p\geq1$ the proof retains the attaching-sphere degree calculation. For
$p=0$ it now uses the normalized boundary of the oriented interval pair and
states the exact repair witness
$$a(v_+)-a(v_-),$$
so the coefficient is $+1$ at the terminal endpoint, $-1$ at the initial
endpoint, and zero for a loop. Negative cell degrees are handled by vanishing.
The cellular-cochain comparison is stated for the finite CW complex already in
the hypotheses and sourced directly from Loizides, avoiding the unnecessary
AC-bearing local dependency.

The batch-9 manifest and batch/unified contracts were synchronized. The item
now directly depends on B/32 so the connector normalization is explicit. Its
stale pre-repair risk review was removed.

### B/44 — multiplicative AHSS remains open

The current selected claim gives every page, including $E_1$, a bigraded ring
after pullback along an arbitrary chosen cellular approximation of the
diagonal. The terminal receipt correctly states: “The claimed first-page
multiplication is not associative.”

The irreducible counterexample is ordinary integral cohomology on the interval
with vertices $v_0,v_1$ and oriented edge $e$. The receipt's allowed cellular
diagonal follows a six-segment path in the square and induces
$$2(v_0\times e)+2(e\times v_1)-(v_1\times e)-(e\times v_0).$$
For the degree-zero cellular cochain $a(v_0)=1$, $a(v_1)=0$ and the degree-one
cochain $z(e)=1$, the induced product has
$$a\cdot a=a,\qquad a\cdot z=2z.$$
Hence $(a\cdot a)\cdot z=2z$ but $a\cdot(a\cdot z)=4z$. This disproves
associativity on $E_1$ under the item's literal hypotheses. Independently, its
steps start with relative classes on $(X,X^{p-1})$ rather than arbitrary
$E_1$ classes on $(X^p,X^{p-1})$, and its cited lifting-calculus lemma supplies
neither a typed exact-couple pairing nor the missing product identities.

Exact remaining obligation: either provide a strict filtered, coassociative
diagonal/model and prove that it exists with the required typed exact-couple
pairing, or change the selected assertion so the multiplicative ring structure
starts only on a page where the requisite homotopies act trivially. Both alter
the present contract or hypotheses. Because this dispatch was required to
preserve the selected claim and scope, B/44 remains open and no licence row was
created for it. Its current guard-form hash is
`b62f01db096ac0ae5e70cda0ca4612990a5a638a5e336121f98680b4f1af5bd5`.

## Authoritative sources read

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, Chapter VI,
  especially the paragraph preceding Theorem 6.96, Theorem 6.96, Figures
  6.1--6.3, Theorem 6.105 and table (6.110), printed pp. 408--426:
  https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
- Pavel Etingof, *Lie Groups and Lie Algebras*, Lectures 40--41, printed
  pp. 185--193:
  https://math.mit.edu/~etingof/lnlg.pdf
- Yiannis Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §2 and
  Theorem 3.2 with its component diagram, printed pp. 3--6:
  https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
- James Davis and Paul Kirk, *Lecture Notes in Algebraic Topology*, §8.8,
  printed pp. 227--233:
  https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
- For the open B/44 disposition, the terminal receipt's sources were retained:
  Miller, Lecture 29, printed pp. 100--101,
  https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf,
  and Ji, Theorem 1.4 and §1.3, printed pp. 3--4,
  https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf.

## Exact-hash licences

The five edited existing items have owner licences appended to
`research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`.
Hashes below are guard-form SHA-256 values, with the whole `verification:`
block excluded.

| Edited item | Licence and path | Pre-Step-7 SHA-256 | Current SHA-256 |
|---|---|---|---|
| `thm-classification-of-real-semisimple-lie-algebras` | `owner-prerequisite-repair`, found via A/64 | `25c0d943f420b1f02be138d415d4f30e7b8037ca410bd87f2407f924ad709c10` | `6ddc93c3a45db9926e699afe369fed0a2bae7096d414fc9edf56e0ffcbd25bbf` |
| `prop-classical-real-forms-of-the-classical-complex-lie-algebras` | `owner-impact-repair`: A/63 → A/64 | `cb7750b85956d03bae298f938b183b9a37ea4688fe4406d278977d55088c96fe` | `b00a740fdb715d0cb81998afb42e76acfd943620fb8dc51a04ce49cab139138e` |
| `def-reduced-generalized-cohomology-theory` | `owner-prerequisite-repair`, found via B/32 | `a604a20b86763e8c7400b0b588d0418aac4276ec66ff87fe3a66b9b991d6f40b` | `436f9a2f44fade2576e9b215cbb8c34eaad6b2401ec332ffa9c2955df3ec03a1` |
| `prop-reduced-and-unreduced-generalized-cohomology-theories-correspond` | `owner-prerequisite-repair`, found via B/41 | `f0bb96121f002f8afef86e434621c9dc6742653ae5382c7ccd27dad113741352` | `4a9ab69f909c9166439f476fb70a5e7b6f425aedef9d38e8ea64bd741b551e83` |
| `lem-the-ahss-first-differential-is-the-cellular-coboundary` | `owner-impact-repair`: B/32 → B/41 | `e1d3250256a90a3bb8cea0d2a174b5414611347693432315534b55abdab9a3a9` | `a2b27c7e01a3f43f35dd764473c67b8786ad0b3b8fd3460d809cd05f5bf2926c` |

## Validation

- Focused `prosecheck --warnings`: 5 files checked, 0 errors, 0 warnings.
- Focused precheck: all 4 proof-bearing edited items passed; the edited
  definition has no numbered proof and is not a precheck subject.
- Strict batch proof contracts: batch 9 checked 3/3 with 0 errors and 0
  warnings; batch 13 checked 2/2 with 0 errors and 0 warnings.
- Strict unified proof contract: 5/5 checked with 0 errors and 0 warnings.
- Both changed manifests and all changed contract files parse as JSON.
- The owner repair ledger parses as JSONL. The canonical Step-7 guard sees no
  error for any of these five items or licences among 694 current changed
  items.
- Scoped `git diff --check` over every item and owned research artifact changed
  by this dispatch: clean.

## Repository-wide unrelated failures

`node tools/depcheck.mjs --quiet` ran to completion and retained 273 existing
warnings plus these seven out-of-scope `b-leaf-content` errors; none names an
item or dependency edited here:

1. `def-chern-character-of-a-complex-vector-bundle` →
   `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space`
2. `ex-complex-k-ahss-for-complex-projective-space` →
   `ex-complex-k-ring-of-complex-projective-space`
3. `ex-euler-class-of-the-universal-oriented-two-plane` →
   `ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space`
4. `lem-ma-produces-an-uncountable-q-set` →
   `ex-the-cardinality-of-the-continuum`
5. `ex-standard-inner-products-on-kn-ell-two-and-l-two` →
   `ex-counting-measure-integral-is-a-series`
6. `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` →
   `ex-c-of-a-compact-space-is-banach`
7. `ex-ito-formula-for-brownian-powers` →
   `ex-integral-of-brownian-motion-against-itself-preview`

The canonical Step-7 guard also reports one unrelated pre-existing
`reader-warning-fatal-licence-stale` error for
`rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`, at
`research/phase-2-remaining-27-step7-alert-decisions.jsonl:34`. The file is
outside this dispatch's write scope and was not changed.
