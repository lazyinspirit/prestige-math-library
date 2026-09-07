# Local agent 5 — modular blocks and branching closure audit

Scope: read-only audit for `/root/symmetric_scaffold`, 2026-09-07.  I read the
current canonical inventory/closure ledger and the cached full texts listed
below, including the source pages cited in the locator table.  This report does
not authenticate the concurrent canonical reports and makes no canonical edit.

## Bottom line

1. The **q-Schur/Jantzen--Schaper route is a viable primary proof route for
   Nakayama's theorem** and is materially preferable to the proposed
   Young--Brauer route.  It closes the central block classification, provided
   the existing SYMR-7 q-Schur, PID-lift, Jantzen, block-idempotent, and Schur
   functor rows are retained as genuine proof suppliers, with their stated
   hypotheses.  At `q=1` over a splitting field of characteristic `p`, its
   quantum characteristic is `e=p`, so its Hecke conclusion is exactly the
   symmetric-group same-`p`-core theorem.
2. Consequently the Young-module/Brauer-quotient chain is **not significantly
   in scope as a dependency chain**.  O'Donovan supplies a valuable genuinely
   alternate proof, but it imports Broué vertex/correspondence and block-transfer
   results that the present scaffold does not prove.  Keep at most a
   non-load-bearing historical/alternate-route note.  Do not retain any of its
   eleven infrastructure steps as prerequisites for `thm-nakayama-...`.
3. The **branching statements are mathematically exact only after several
   corrections**, but their proposed local proof is not closed.  Brundan's
   complete paper proves the normal/good restriction criteria through quantum
   `GL_n` and a q-Schur Schur-functor bridge; Kleshchev's survey states the full
   `E_i/F_i` composition and head/socle refinements but credits earlier work.
   The inventory presently has neither that q-Schur/highest-weight/lowering
   chain nor the alternative KLR proof chain as dependencies.  Thus these rows
   must be marked `proof-blocked` (not merely cited) until one route is made
   explicit and read.  Do not use the later Fock/crystal page to establish the
   simple labels needed by the branching page.

## Fixed conventions and hypothesis audit

Use left modules over a splitting field `k` of characteristic prime `p>0`.
For symmetric groups this is safest as an algebraically closed field; James's
result also says every field is splitting for `S_n`, but the residue-primary
construction below should not rely on an unstated scalar extension.  Let
`p` be the characteristic and reserve `e` for the quantum characteristic of a
nonzero Hecke parameter.  At the group specialization `q=1`, `e=p`.

* **James convention:** `D^lambda` is the radical quotient of the usual Specht
  `S^lambda`, and is nonzero precisely when `lambda` is `p`-regular.
* **Brundan/Kleshchev cellular convention:** `D(mu)` is indexed by a
  `p`-restricted `mu`, with dual Spechts.  The exact dictionary is
  `D^lambda ≅ D(lambda') ⊗ sgn`, equivalently
  `D(mu) ≅ D^(mu') ⊗ sgn` (Kleshchev Remark 5.5).  It is a theorem/translation
  to be consumed from SYMR-6, not a definition of the two systems as equal.
  In characteristic two `sgn` is trivial but conjugation is still essential.
* In the Kleshchev convention take a node in row `r`, column `c` to have
  residue `c-r (mod p)` and list nodes from top to bottom.  Record a deliberate
  negation if using Brundan's `r-c`; silently mixing those conventions reverses
  colors.  Cancel adjacent surviving `-+` pairs.  The leftmost surviving `-`
  is good; the rightmost surviving `+` is cogood.  This is valid for `p=2` as
  well; no odd-prime hypothesis belongs in the signature rule.
* `E_i` and `F_i` are not ordinary `Res` and `Ind`.  They are their
  generalized-residue summands.  For a module in content/block `alpha`, define
  them with the idempotent `e_{alpha-alpha_i,alpha_i}` / last-residue primary
  idempotent (equivalently with the simultaneous generalized eigenspaces of
  the commuting JM/polynomial generators), and then take the appropriate
  restriction/induction bimodule.  The identities are
  `Res = ⊕_i E_i` and `Ind = ⊕_i F_i`.  A primitive *central block* idempotent
  alone does not define this refinement without the fixed source/target content
  and primary-idempotent construction.
* Induction multiplicities must use modular module adjunction (and, for the
  symmetric-group tower, the symmetric/Frobenius algebra biadjunction plus
  contragredient duality), **not**
  `cor-frobenius-reciprocity-for-complex-characters`.  This repairs the current
  dependency of `thm-conormal-node-composition-multiplicities-under-residue-induction`.
* The graded shifts in Kleshchev Theorem 7.4 belong only to the graded
  cyclotomic-Hecke/KLR realization.  The SYMR-8 group page may use its ungraded
  consequences but must not display a grading before the SYMR-11 bridge.

## Exact branching claims and corrected proof joints

The current intended items should be kept separate as follows.  Each row below
uses `mu` p-restricted and `D(mu)` in the cellular convention.

| proposed item / disposition | exact claim | indispensable proof joint and dependency repair |
|---|---|---|
| `def-residue-signature-normal-good-conormal-and-cogood-nodes` | With the convention above, the surviving `-` are normal and their leftmost one is good; surviving `+` are conormal and their rightmost one cogood.  `epsilon_i,phi_i` count them. | Remove the unrelated e-core dependency: addable/removable nodes, p-restricted labels, and a fixed residue convention suffice.  If the inventory retains `c-r`, explicitly say it is the negative of Brundan's residues. |
| `def-residue-restriction-and-induction-functors-for-symmetric-groups` | For every content block, define the exact summand functors by the primary idempotents; `Res=⊕E_i`, `Ind=⊕F_i`. | Needs a new exact supplier for simultaneous generalized JM/polynomial primary decomposition, or a dependency on the cyclotomic block/idempotent definition on SYMR-11 after confirming no cycle.  Complex seminormal interpolation is not a supplier. |
| `thm-normal-node-composition-multiplicities-under-residue-restriction` | For `nu=mu-A`, `[E_iD(mu):D(nu)]` is nonzero iff `A` is normal, and then equals the number of normal i-nodes weakly below `A`, including `A`. | The precise statement is Kleshchev Thm. 11.6(ii).  Brundan 2.5 gives the corresponding nonzero Specht-Hom normal criterion and his §§3--5 prove it via quantum `GL_n`; the present dependency graph lacks that bridge.  Mark proof-blocked until the bridge is scaffolded/read or a complete KLR proof is supplied. |
| `thm-conormal-node-composition-multiplicities-under-residue-induction` | For `nu=mu+B`, `[F_iD(mu):D(nu)]` is nonzero iff `B` is conormal, and then equals the number of conormal i-nodes weakly above `B`, including `B`. | Kleshchev Thm. 11.7.  Replace the complex-character dependency by exact modular biadjunction/duality; it also depends on the residue-idempotent definition.  The normal theorem alone plus character Frobenius reciprocity is not a proof. |
| `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction` | If `epsilon_i(mu)>0`, `E_iD(mu)` has irreducible socle and head, both (ungraded) `D(tilde e_i mu)`; its multiplicity in `E_iD(mu)` is `epsilon_i(mu)`. | The graded source is Kleshchev Thm. 7.4(i),(iii): socle/head shifts are `epsilon_i-1` and `1-epsilon_i`.  In the group case, self-duality converts the good socle to the good head.  Brundan 2.6 proves the *uncoloured* socle statement; it must not be cited alone for the colored multiplicity or head. |
| `thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction` | If `phi_i(mu)>0`, `F_iD(mu)` has irreducible socle/head `D(tilde f_i mu)` and that constituent has multiplicity `phi_i(mu)`. | Kleshchev Thm. 7.4(ii),(iii), with the same graded-shift caveat.  Needs the modular biadjunction and primary functor supplier. |
| `cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues` | `soc(Res D(mu)) = direct-sum_i D(tilde e_i mu)`, over those `i` with a good i-node; it is multiplicity-free because each residue has at most one good node and the residue summands are distinct. | Brundan Thm. 2.6 is a direct ungraded proof source.  It is deliberately weaker than a direct-sum decomposition of all restriction and must say nothing about normal-node multiplicities beyond the socle. |
| crystal-operator/reachability rows | Good deletion/cogood addition define partial combinatorial operators.  The equality of the module crystal with the affine highest-weight crystal is a later theorem. | Keep pure combinatorics upstream.  `dot D(mu)` (defined inductively from socles) and the cellular `D(mu)` are *not* identified elementarily: Kleshchev §11.2 explicitly calls this a difficult identification proved by Ariki / graded theory.  Thus no SYMR-8 proof may use Fock reachability to prove the cellular classification and then use that classification to prove the Fock component. |

There is a further inventory defect: the advertised example
`ex-residue-restriction-with-a-nonsplit-composition-series` says its exact
label will be fixed later.  It is not an authorable example.  Either compute a
named `(p,mu,i)` from a checked table before build, or remove the row.  The
Brundan `(6,4,4,3,2)` example is suitable for signatures and good nodes, not
by itself for an unverified Loewy calculation.

### What Brundan actually closes, and what it imports

Brundan's Theorems 2.5--2.6 (PDF pp. 4--5) state, in his `ell`-restricted,
right-module/dual-Specht convention, the normal Specht-Hom criterion and the
good simple socle criterion.  The proof culminates in Theorems 5.3--5.4 (pp.
29--31): lowering operators give normality iff a specified vector survives the
radical, and a reducibility test distinguishes good from merely normal.  But
the proof explicitly passes through the integral quantum hyperalgebra, q-Schur
algebras, standard/costandard/simple modules, the standard branching
filtration, lowering operators, q-Schur blocks, and the Schur functor
(§§3--5, especially pp. 14--17 and 31).  Those are genuine invoked lemmas,
not a citation-sized proof of SYMR-8.

Two safe closure choices are therefore:

1. Add a narrowly scoped, fully read **Brundan q-Schur/highest-weight proof
   chain** before the modular-branching theorem: integral quantum hyperalgebra
   and polynomial category; q-Schur standards/costandards/simples; branching
   filtration; lowering-operator/radical-survival lemmas; q-Schur block
   criterion used in Brundan 5.4; exact Schur functor and simple survival.
2. Place the modular interpretation strictly after an independently
   proof-complete cyclotomic KLR categorification/branching chain.  This must
   not use SYMR-8 reachability to build the same crystal.  The present SYMR-11
   definitions and SYMR-10 Fock claims do not yet constitute that proof.

Until one option exists, all theorem rows above are exact **statements with a
documented proof blocker**, not closed local proof items.  This is preferable
to misrepresenting a source locator as proof closure.

## Blocks: q-Schur/Jantzen closure, exact dependencies, and low weights

### Viable primary chain

Mathas's complete 79-page lecture notes give the following self-contained
route in the exact convention of the existing SYMR-7/SYMR-9 proposal:

`PID lift and nondegenerate Gram form`
`→ Jantzen valuation lemma`
`→ q-Schaper virtual sum formula`
`→ block-idempotent projection/positive extremal term`
`→ q-Schur Weyl same-e-core theorem`
`→ Schur functor and corner/block count`
`→ Hecke same-e-core theorem`
`→ q=1, e=p specialization = Nakayama.`

The exact joints are these.

* Work over a PID `R`, a prime element `pi`, residue field `F=R/pi R`, and
  invertible lift `hat q`; require the lifted free form to be nondegenerate over
  `Frac(R)` and `[n]!_(hat q) != 0` in `R`.  A PID is enough; the present
  Jantzen row should depend on `def-principal-ideal-domain`, not on the
  unrelated definition of a valuation ring, unless the author intentionally
  narrows to a DVR and says so.
* Mathas Thm. 5.31 and Cor. 5.32 (printed pp. 58--60) are a virtual identity
  for the positive Jantzen layers.  It does **not** give a general
  decomposition-number algorithm.  The existing formula must retain its beta
  number sorting/sign/zero convention and valuation differences, rather than
  saying merely “the Schaper combination.”
* Lemma 5.35 is the necessary block projection joint: a nonzero extremal
  Jantzen term gives an actual block linkage, so cancellation in a virtual
  equality cannot be hand-waved.
* Theorem 5.36 (pp. 60--61) gives q-Schur Weyl modules in the same block iff
  their labels have the same e-core (with `d>=n` in the q-Schur setup).
  Its forward direction uses hook/rim-hook moves and Jantzen linkage; its
  converse uses the residue-content central character.  It is not an
  elementary consequence of abacus uniqueness.
* Corollary 5.37 (p. 61) transfers exactly to type-A Hecke Spechts.  The
  proof uses the Schur corner and the fact that the q-Schur algebra has at
  least as many blocks as the Hecke corner; exactness of `e(-)` by itself only
  proves one direction.  The current `thm-schur-functor-...` row must include
  this block-count/corner argument.
* At `q=1` in characteristic `p`, `e=p`; together with the group/Hecke
  cellular specialization and the p-core size formula, Cor. 5.37 proves the
  exact Nakayama claim: two `k[S_n]` Spechts lie in the same block iff their
  labels have the same p-core.  At fixed `n`, same p-core already forces
  `w=(n-|gamma|)/p`, so “same p-core and same weight” is redundant.

Accordingly, retain these item-level dependencies (renaming only if the
canonical IDs change):

| item | required exact predecessors |
|---|---|
| `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` | `def-type-a-q-schur-algebra-and-weyl-modules`; `def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents`; `def-principal-ideal-domain`; `def-jantzen-filtration-of-a-lifted-cell-module`; `lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation`; `thm-q-schaper-virtual-radical-layer-formula`; abacus core/rim-hook rows; `lem-virtual-weyl-combinations-detect-q-schur-block-separation`. |
| `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` | prior q-Schur theorem; exact Schur idempotent/functor; theorem identifying `F(W^lambda)` and `F(L^lambda)`, including zeros for non-e-restricted labels; the corner block-count lemma. |
| `thm-nakayama-block-classification-for-symmetric-groups` | prior Hecke theorem; q=1 group/Hecke specialization; `def-p-blocks-by-primitive-central-idempotents`; p-core/weight formula; the group-side dual/conjugate convention item only if simple labels, rather than just Specht blocks, are mentioned. |

This path is not circular with SYMR-6 if the already required repair is
respected: the group-side conjugate/sign result is proved at `q=1` without
SYMR-9, while SYMR-9 specialization consumes it in the forward direction.

### Weight zero and weight one

* **Weight zero.**  A core is the only partition in its e-core block.  Hence
  its q-Schur Weyl and Hecke Specht are simple/projective in Mathas's setup.
  For `k[S_n]`, use Nakayama plus the p-regular matrix orientation and
  `C=D^T D` to get a one-by-one Cartan matrix; the unique simple is projective.
  The final phrase “the block has defect zero” requires the inherited exact
  defect-zero equivalence.  Do not infer it merely from “weight zero.”
* **Weight one—correct source convention.**  Mathas Prop. 5.38 (printed
  pp. 61--63) says that if `gamma` is an e-core of `m` and `n=m+e`, there are
  exactly `e` partitions
  `lambda_1 ▷ lambda_2 ▷ ... ▷ lambda_e` with core `gamma`; in the q-Schur
  (e-restricted cellular) convention, `lambda_1` is not e-restricted and
  `lambda_2,...,lambda_e` are.  The exact Weyl pattern is
  `W(lambda_e)=L(lambda_e)` and, for `1<=j<e`,
  `[W(lambda_j)]=[L(lambda_j)]+[L(lambda_(j+1))]`.
  Applying the Schur functor deletes `L(lambda_1)` and gives the corresponding
  adjacent Specht pattern with columns `D(lambda_2),...,D(lambda_e)`.
  At `q=1,e=p`, transpose/sign-twist it to any p-regular James-matrix display.
  The current blanket phrase “the e partitions form a ... Hecke/symmetric
  group adjacent bidiagonal matrix” is too ambiguous: it conflates q-Schur
  Weyl labels, e-restricted Hecke labels, and p-regular group labels.  Replace
  it by this indexed formula and a declared row/column convention.  It remains
  a solved weight-one island, not a general decomposition algorithm.

## Why the Young--Brauer proof is now optional only

O'Donovan's Theorem 1 (p. 1) is a real alternate proof of the same Nakayama
classification.  Its own Section 2, however, explicitly imports Broué's
Theorems 3.2 and 3.3 for vertex detection and the p-permutation/Brauer
correspondence; Section 4 imports the exact block-transfer Lemma 12 (from
Wildon) and Brauer first/main theorem material.  The proof then requires Young
modules, their triangular decomposition, p-types/vertices, explicit Brauer
quotients, the normalizer tensor product, and the four induction steps
(Propositions 13--15, 18--19), including the special `p=2` exceptional type
and the p-restricted/projective/Mullineux step.

That is a coherent advanced alternative, but after the q-Schur proof it is
duplicative and none of it should be kept as a hidden supplier.  If an author
wants to teach it, make a later, explicitly optional “Young modules and an
alternate proof of Nakayama” page with all of those prerequisites, including
the planned RG-14/RG-16 block-theory suppliers.  It may not be used to claim
the present core/block page is dependency-closed.

## Full-text evidence read

All local PDFs below were checked with `mutool info`; their terminal material
is present.  “Complete” means a complete cached document, not a publisher
preview.  URLs are authoritative/author, university, or arXiv endpoints.

| source and role | full text / local status | SHA-256; pages | sections actually inspected and locator |
|---|---|---|---|
| Jonathan Brundan, *Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A*, Proc. LMS 77 (1998), 551--581, DOI `10.1112/S0024611598000562` — primary proof route for normal/good restriction | [author manuscript](https://pages.uoregon.edu/brundan/papers/quantum.pdf); complete local PDF `scratchpad/source-cache/symmetric-groups/modular-articles/brundan-1998-modular-branching-mullineux.pdf` | `c9739b545e24407fdb93010f56a539a17331596f6e93b1f352619e91ddfe451c`; 34 | §§2, 3, 5: Thms. 2.5--2.6 (PDF pp. 4--5), Lemma 5.2 and Thms. 5.3--5.4 (pp. 28--31), Schur functor §5.5--5.7 (pp. 31--32). |
| William O'Donovan, *A New Proof of Nakayama's Conjecture via Brauer Quotients of Young Modules* (2017) — alternate proof, not retained as dependency | [arXiv:1708.04365 PDF](https://arxiv.org/pdf/1708.04365); complete local PDF `.../modular-articles/odonovan-2017-new-proof-nakayama.pdf` | `52583cd8e22d8e5c52b3d2ede984ece5dfcba3e35df2ec786eb6fc39e9ca05e9`; 16 | all pp. 1--16; Thm. 1, imported Thms. 2--3, Thm. 4, Lemmas 9--12, Props. 13--15 and 18--19. |
| Alexander Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras*, Bull. AMS 47 (2010), 419--481 — authoritative survey/exact convention and statement check | [arXiv:0909.4844 PDF](https://arxiv.org/pdf/0909.4844); complete local PDF `.../modular-articles/kleshchev-2009-symmetric-groups-related-hecke-algebras.pdf` | `8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab`; 66 | Remark 5.5 (printed p. 24); §3.4 (pp. 18--19); §7.4/Thm. 7.4 (pp. 31--33); §11.2 and 11.4, Thms. 11.2, 11.6--11.7 (pp. 50--54).  It credits, rather than proves, several original results. |
| Andrew Mathas, *Iwahori--Hecke Algebras and Schur Algebras of the Symmetric Group* (1999 notes) — q-Schur/Jantzen block proof route | Complete local cache `scratchpad/source-cache/symmetric-groups/modular-hecke-textbook/mathas-1999-ihaschur.pdf`; its embedded source URI is a [ResearchGate record](https://www.researchgate.net/publication/2553779_Iwahori-Hecke_Algebras_and_Schur_Algebras_of_the_Symmetric_Group).  The formerly guessed Sydney `ihas.pdf` endpoint is 404 as checked 2026-09-07; use the [official AMS record](https://bookstore.ams.org/ulect-15/) for bibliographic authority, but it is not a full-text endpoint. | `8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0`; 79 PDF pages / printed pp. 1--73 | Ch. 4 (Thms. 4.14--4.20, pp. 36--52); Ch. 5 (Lem. 5.29, Thm. 5.31, Cor. 5.32, Lem. 5.34--5.35, Thm. 5.36, Cor. 5.37, Prop. 5.38; printed pp. 54--63).  This is a complete cached set of lecture notes, not the missing full textbook assignment. |
| G. D. James, *The Representation Theory of the Symmetric Groups*, LNM 682 (1978) — p-regular radical quotient and matrix orientation cross-check | [University of Minnesota complete scan](https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf); local `.../modular-articles/james-1978-representation-theory-symmetric-groups.pdf` | `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc`; 161 | §§10--12 (printed pp. 34--43), especially Lem. 10.4, Cor. 10.5, Thms. 11.1, 11.5, 12.1; §21.11 was checked only as a statement, not a proof of Nakayama. |

The Mathas row deliberately records the retrieval defect rather than pretending
that a 404 author URL is full text.  The cached full text and hash are validated,
but an integrating source manifest requiring a live legitimate full-text endpoint
must retrieve one before claiming a fresh full-text fetch.  No source in this
table licenses a claim that arbitrary positive-characteristic decomposition
numbers are known.

## Integration actions

1. Treat the current SYMR-7 q-Schur/Jantzen route as the sole central Nakayama
   proof route, add `def-principal-ideal-domain` (or explicitly choose a DVR),
   and preserve the Schur-corner block-count joint.
2. Replace the weight-one item with the exact q-Schur/Hecke convention
   translation above; retain weight-zero only with the inherited defect-zero
   criterion.
3. Move the Young--Brauer chain out of central dependencies; if retained, call
   it an optional alternate proof and include its imported block-theory inputs.
4. Correct SYMR-8 residue sign, generalized-primary-idempotent, modular
   adjunction, and p-regular/p-restricted translation dependencies.  Mark its
   branching theorem proof routes blocked until one complete proof chain is
   scaffolded.
5. Delete or specify the unresolved nonsplit branching example.  Do not allow
   an example with “label to be fixed later” into the mechanical inventory.

## Follow-up primary branching proof audit — 2026-09-07

### Recovery and validation

I recovered the complete scan of A. S. Kleshchev, *Branching rules for
modular representations of symmetric groups, II*, J. reine angew. Math. 459
(1995), 163--212, from the Göttingen State and University Library.

* Bibliographic/METS record: <https://gdz.sub.uni-goettingen.de/mets/PPN243919689_0459.xml>.
  `DMDLOG_0010` names Kleshchev's article and records an extent of **50
  pages**; its physical map is `PHYS_0168`--`PHYS_0217`, exactly the printed
  inclusive range 163--212.
* Full-article PDF: <https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0459/LOG_0010.pdf>.
  It has one front/terms page plus the 50 scanned article pages (**51 PDF
  pages**), SHA-256
  `6a7a7856d3eb8c8198920c02bdcdd16d8b350f024d39ae96215f072050bc368c`.
  The first article scan visibly bears the journal title, volume, author,
  and pp. 163--212; its final scan is p. 212/references.  Thus this is a
  full article, not a preview.

I also recovered the author-posted complete manuscript of A. S. Kleshchev,
*On decomposition numbers and branching coefficients for symmetric and
special linear groups*, Proc. LMS (3) 75 (1997), 497--558:

* Full author PostScript: <http://darkwing.uoregon.edu/~klesh/BrIV.ps>,
  SHA-256 `0bbf3d69ddf20940089045c540e3d516c542118ab06644c5d26c430bedf46558`.
  It is a DSC Level-2 PostScript source.  Rendering it with Ghostscript gives
  a complete **66-page manuscript PDF**, SHA-256
  `0bb9c690a58c1091a7ba78130da7a584b74beef9736e64eef3c5fa91e1dddef1`,
  with title through final bibliography/author address.  The journal range is
  62 printed pages; the author manuscript has distinct internal pagination.

Both were read in the ranges noted below.  The temporary retrieval files were
not retained in the repository.

### What Kleshchev II proves — and what it does not

Kleshchev II uses the **p-regular/James** label convention.  Let `lambda` be
p-regular, write `D^lambda` for the simple `K S_n`-module, and use its
row-index normal/good nodes.  It assumes only `char K=p>0`; the ordinary
simple classification makes these simples absolutely irreducible.

* **Theorem 0.4, printed p. 165** proves the Specht-Hom statement
  `dim Hom_{S_(n-1)}(S^mu, D^lambda down) <= 1`, nonzero exactly at a
  normal removal.  This is a Hom criterion, not a composition-multiplicity
  formula.
* **Theorem 0.5, p. 166** proves
  `soc(D^lambda down)=direct-sum_{i good} D^(lambda(i))`.
  Its introductory sentence also explicitly says the head is isomorphic to
  the socle.  This is the multiplicity-free *uncoloured socle* theorem, not a
  direct-sum formula for the full restriction.  The following remark says the
  good summands are in different blocks and discusses the associated
  indecomposable summands with simple head/socle; part of that elaboration is
  referred to James for details.
* **Theorem 0.6, p. 166** gives only the special completely-reducible case:
  restriction is completely reducible iff all normal removals are good, and
  then it is the direct sum over normal removals.  It must not be substituted
  for the general normal-node multiplicity theorem.

Thus Kleshchev II itself closes the exact source distinction demanded by the
inventory: Hom, socle/head, and a special semisimple-restriction test are
different assertions.  It does **not** state the full normal-node composition
multiplicity in Theorem 0.4 or 0.5.

### The primary source for the full normal multiplicity

The 1997 Kleshchev paper supplies the missing theorem.  In its Theorem 1.4
(manuscript pp. 5--6), for a p-regular `lambda`, a removable node `A` in row
`j`, and p-regular `lambda(j)`, it proves

`[D^lambda down_{S_(n-1)} : D^(lambda(j))] = |T_j(lambda)|`.

The immediately following explanation identifies this number as zero when
`A` is not normal and, when it is normal, as

`1 + #{normal removable nodes B above A : res(B)=res(A)}`.

This is exactly the p-regular convention form of the normal-node formula.
Under transpose/sign duality it becomes the inventory's p-restricted form:
for `nu=mu-A`,

`[E_i D(mu):D(nu)] = #{normal i-nodes weakly below A}`

when `A` is normal, and is zero otherwise.  “Above” becomes “below” on
transpose; the sign twist changes the residue by negation.  In particular,
the formula is valid at `p=2`; the sign is then trivial but the transpose and
the reversal of the node order remain necessary.

This paper contains a real proof architecture, not an isolated citation:

1. §§2--8 construct and count the relevant lowering-operator / PBW-type
   bases of the `SL_n` weight spaces; Theorems 8.6 and 8.8 are the two basis
   theorems.
2. §9 defines the first-level branching multiplicities and **Theorem 9.3**
   computes them as the normality number `sigma(i,l)`.
3. §11, Proposition 11.2, identifies the symmetric-group branching
   multiplicity with that first-level `SL_n` restriction multiplicity; p. 65
   explicitly applies Prop. 11.2 and Theorem 9.3 to deduce Theorem 1.4.

There is one exact inherited source joint: Prop. 11.2 is cited there as
Kleshchev I, §2.12(v), the Schur-functor/first-level comparison.  I did not
recover a complete Kleshchev-I scan in this follow-up.  Therefore the source
chain is now pinpointed to one named, narrow external theorem rather than an
unspecified quantum-`GL_n` programme, but it is **not yet dependency-closed
under the scaffold's hard rule** until that comparison is independently read
and supplied (or reproved through an exactly equivalent q-Schur interface).

### Consequences for all three requested branching assertions

1. **Normal restriction multiplicities.**  The exact theorem is now primary
   and proof-bearing (Kleshchev 1997 Thm. 1.4, with the §9--§11 route above),
   conditional only on closing the named Kleshchev-I comparison supplier.
   Replace the former Brundan-only proof blocker with this smaller, exact
   blocker.
2. **Conormal induction multiplicities.**  No independent “complex character
   reciprocity” is needed.  Add a modular finite-group lemma that induction
   and coinduction for `S_n <= S_(n+1)` are naturally isomorphic (the group
   algebra is finite free/symmetric Frobenius); combine it with the existing
   `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction`
   and contragredient duality.  Then
   `[F_iD(mu):D(nu)] = [E_iD(nu):D(mu)]`; transpose/sign-residue translation
   turns Kleshchev's normal formula into the stated conormal formula, with
   multiplicity equal to the conormal nodes weakly above the added node.
   This is a valid proof only after the new biadjunction/isomorphism lemma and
   the normal theorem's Kleshchev-I joint are in the graph.
3. **Simple good/cogood socle and head.**  Kleshchev II Thm. 0.5 gives the
   uncoloured multiplicity-free socle and matching head.  Split it by the
   generalized residue idempotents: distinct good nodes have distinct target
   blocks/residues, so the `E_i` summand has the one good simple in its socle;
   self-duality gives its simple head.  The 1997 normal formula gives its
   total multiplicity `epsilon_i`.  Induction then gives the cogood analogue
   by the same biadjunction/duality argument.  This distinguishes the simple
   socle/head claim from the larger composition-factor list.

### Exact scaffold repair required for closure

Keep the existing SYMR-8 theorem IDs, but replace their proof/dependency
entries by the following explicit chain.  These are proposed support items,
not canonical edits.

| target | exact additional suppliers |
|---|---|
| `def-residue-restriction-and-induction-functors-for-symmetric-groups` | a local `def-generalized-jm-primary-idempotent-and-residue-summand` over the stated splitting field; integral/base-changeable JM elements from SYMR-5 are not themselves a primary decomposition proof. |
| `thm-normal-node-composition-multiplicities-under-residue-restriction` | `thm-kleshchev-first-level-sl-branching-multiplicity` (Kleshchev 1997 §§2--9); `prop-schur-functor-compares-first-level-sl-branching-with-symmetric-group-restriction` (Kleshchev I §2.12(v), still to retrieve/read); p-regular/p-restricted transpose-sign-residue dictionary; the residue-summand definition. |
| `thm-conormal-node-composition-multiplicities-under-residue-induction` | prior normal theorem; `lem-finite-group-induction-is-coinduction-and-thus-biadjoint` with `def-restriction-induction-and-coinduction-for-group-modules`, `lem-the-group-ring-is-free-over-a-subgroup-ring`, and `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra`; contragredient duality and the same translation dictionary.  Delete `cor-frobenius-reciprocity-for-complex-characters`. |
| good/cogood simple socle/head theorems | residue-summand definition; Kleshchev II Thm. 0.5; self-duality/biadjunction; the normal/conormal theorem for the `epsilon_i/phi_i` multiplicity.  Kleshchev II Thm. 0.6 may appear only as the completely-reducible special case. |
| uncoloured socle corollary | Kleshchev II Thm. 0.5 plus `Res=direct-sum_i E_i`; it does not require all normal composition factors to split. |

**Closure verdict (follow-up):** the main formula and a detailed primary proof
route have now been recovered.  The branching cluster is not fully closed in
the current scaffold because its indispensable Schur-functor/first-level
comparison is presently only a pinpointed citation to Kleshchev I §2.12(v),
and because the modular induction/coinduction identification and residue
primary-idempotent supplier have not yet been scaffolded.  Once those three
small named suppliers are read and added, Kleshchev 1997 + Kleshchev II yield
a non-circular proof of normal/conormal multiplicities and good/cogood
socle/head, without invoking Fock-space reachability or Ariki.

## Final narrow-blocker closure audit — 2026-09-07

### 1. The Kleshchev-I comparison has a complete, inspected equivalent

I did not recover a complete usable scan of Kleshchev I, J. Algebra 178
(1995), 493--511, DOI `10.1006/jabr.1995.1362`; the cited item is indeed
Kleshchev I because Brundan's reference [22] identifies it that way.  This is
no longer a blocker: Brundan gives the same comparison, including the
Schur-functor proof, in a complete primary source already cached and read.

* Brundan §5.5, PDF p. 31, fixes `n >= r`, the q-Schur algebra `S(n,r)`, and
  the `(1^r)` weight idempotent `e`, with
  `eS(n,r)e isomorphic to H(r)`.  It defines the exact Schur functor
  `f_(n,r)(V)=eV` and its left adjoint
  `h_(n,r)(W)=S(n,r)e tensor_(eS(n,r)e) W`.
* Lemma 5.6(i)--(ii), p. 31, proves the exact full-subquotient comparison
  needed for Hom spaces (not merely an abstract Morita slogan), and Lemma 5.7,
  pp. 31--32, supplies the restricted-socle condition that makes its use
  legitimate.
* On p. 32 Brundan records, and uses in the proof of Theorems 2.5--2.6, the
  precise first-level identity
  `f_(n-1,r-1)(L_n(lambda)^1) = f_(n,r)(L_n(lambda)) down_H(r-1)`.
  Here `W^z` was defined in §3.22, pp. 17--18, as the sum of the simultaneous
  `K_n`/binomial-`K_n` weight spaces of level `z`.  Thus this is the same
  `first level` that occurs in Kleshchev 1997 Prop. 11.2, not an ordinary
  restriction mistaken for a level.

The one-line ``argument involving weights'' on Brundan p. 32 has a short
local proof which should be put in the new comparison item: take the permitted
stable rank `n=r`, and use the q-Schur weight-idempotent definition of `f`.
The `(1^r)` weight then belongs to the level-1 summand of §3.22.  Deleting its
last (level) coordinate identifies it with the `(1^(r-1))` Schur weight; on
that space the generators `T_1,...,T_(r-2)` act identically before and after
the deletion.  Hence the two sides are equal as `H(r-1)`-modules, naturally
in `V`.  This is an equality of explicit simultaneous weight spaces, so it
uses neither semisimplicity nor an identification of cellular and crystal
labels.

For the composition version used by Kleshchev 1997, apply exactness of `f` to
a composition series of `V^1`.  A restricted simple `L_(n-1)(mu)` maps to the
simple `(D^mu)^#`; a different surviving simple has a different label, while
a simple killed by `f` contributes nothing.  Therefore the multiplicity of
the selected surviving simple equals its multiplicity in the Hecke
restriction.  Together with Kleshchev 1997 Theorem 9.3 and the explicit
normal-count deduction in Theorem 1.4, this replaces the citation to
Kleshchev I §2.12(v) by a proof-bearing q-Schur route.  It must retain the
source's `ell`-restricted convention and then use the already-recorded
transpose--sign--residue dictionary at `q=1`, where `ell=p`; this includes
`p=2`.

The source is the complete 34-page author manuscript
<https://pages.uoregon.edu/brundan/papers/quantum.pdf>, locally
`scratchpad/source-cache/symmetric-groups/modular-articles/brundan-1998-modular-branching-mullineux.pdf`,
SHA-256 `c9739b545e24407fdb93010f56a539a17331596f6e93b1f352619e91ddfe451c`.
The exact item replacement is
`prop-schur-functor-compares-first-level-branching-with-hecke-restriction`,
depending on the q-Schur weight-idempotent/Schur-corner definitions, the
first-level definition, and Brundan Lemmas 5.6--5.7.  It is a supplier for
the former `prop-schur-functor-compares-first-level-sl-branching-with-symmetric-group-restriction`;
do not add both as parallel indispensable routes.

### 2. Finite-group induction equals coinduction: exact published suppliers and local proof

The following **published** existing items supply the setup, but none alone
states the required natural isomorphism:

| existing published item | exact supplied fact |
|---|---|
| `def-restriction-induction-and-coinduction-for-group-modules` | For left modules, `Ind_H^G M=kG tensor_(kH) M`, `Coind_H^G M=Hom_(kH)(kG,M)`, and `(g phi)(x)=phi(xg)`. |
| `lem-the-group-ring-is-free-over-a-subgroup-ring` | A finite coset transversal makes `kG` finite free on either side of `kH`. |
| `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` | The two adjunctions, separately. |
| `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra` | The coefficient-of-identity symmetric Frobenius form on an individual finite group algebra; useful context, but not by itself the relative Frobenius-extension assertion. |

Add the small proof-bearing lemma
`lem-finite-group-induction-is-coinduction-and-thus-biadjoint`.  No
splitting-field, characteristic, or `p not equal to 2` hypothesis is needed:
for **every finite** inclusion `H <= G` and every field `k`, define

`Phi_M(g tensor m)(x) = (xg)m` if `xg` lies in `H`, and `0` otherwise.

The formula is `kH`-linear in `x`; the relation
`gh tensor m = g tensor hm` is respected; and
`Phi_M(g_0 g tensor m)(x)=Phi_M(g tensor m)(xg_0)`, so it is a natural
`kG`-map.  If `R` is a left-coset transversal, the inverse sends a coinduced
map `phi` to `sum_(r in R) r^(-1) tensor phi(r)`.  The two formulas are
inverse because each summand is supported on one left coset.  Finite `G/H`
makes the sum finite.  Combined with the published adjunction item, `Ind` is
both left and right adjoint to `Res` (and is exact by the free-module item).

For `S_n <= S_(n+1)` this supplies exactly the modular biadjunction required
for the conormal theorem.  Pairing it with contragredient duality and the
primary residue summands below gives the required equality of the relevant
composition multiplicities.  It replaces, rather than supplements,
`cor-frobenius-reciprocity-for-complex-characters`.

### 3. JM residue-primary idempotents: a primary source plus a local construction

There is **no published existing item** which supplies the modular
simultaneous-primary construction: the existing SYMR-5 JM item is explicitly
complex/seminormal, and
`lem-generalized-central-character-submodules-are-direct-summands` is over
`C` and central characters, hence cannot be repurposed.  The source-level
supplier is nevertheless complete and exact:

* Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke
  Algebras*, §2.3--2.4, printed pp. 8--9 / PDF pp. 8--9, defines the commuting
  `L_r` at `xi=1` as `sum_(s<r)(s,r)` (equation (2.6)); Lemma 2.4 says every
  eigenvalue on every finite-dimensional module is a residue `nu(i)`; and
  equation (2.7) constructs orthogonal `e(i)` from the regular module, with
  `e(i)M=M_i` for every finite-dimensional module.  Equation (2.8) records
  the corresponding nilpotent primary parts.  In §2.9, equation (2.41), the
  sum over all sequences of content `alpha` is the block idempotent `e_alpha`.
* This is the complete 66-page arXiv text <https://arxiv.org/pdf/0909.4844>,
  locally `scratchpad/source-cache/symmetric-groups/modular-articles/kleshchev-2009-symmetric-groups-related-hecke-algebras.pdf`,
  SHA-256 `8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab`.

The new exact supplier should be
`def-generalized-jm-primary-idempotents-and-residue-summand-functors` (or the
already proposed SYMR-11
`def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`, provided the
edge is directed into SYMR-8 and creates no cycle).  Its local proof is short:
form the finite-dimensional commutative algebra
`B=k[L_1,...,L_n]` inside `kS_n`.  On its regular module, Lemma 2.4 makes every
minimal polynomial split into powers of the linear factors `X-i` with
`i in F_p`.  Iterated Chinese-remainder/Bézout projections for the commuting
`L_r` give pairwise orthogonal idempotents `e(i_1,...,i_n)` in `B`, summing to
one; their images are exactly the simultaneous generalized eigenspaces.  As
these are algebra elements, not merely module projections, the identity
`e(i)M=M_i` is functorial for every finite-dimensional module.  Summing by
content gives `e_alpha`; retaining the last residue gives the source/target
idempotent which defines `E_i` and `F_i`.  Direct-summand projection makes
them exact and gives `Res=direct-sum_i E_i`, `Ind=direct-sum_i F_i`.

This route is valid over any field of characteristic `p>0`: residues are in
the prime subfield, so algebraic closedness is not needed for the primary
factorization.  If the scaffold retains ``splitting field'' for simple-label
convenience, state it once, but do not make the idempotent proof depend on it.
It also works unchanged at `p=e=2`; it is explicitly a generalized-primary,
not a Lagrange/seminormal, construction.

### Closure result and exact dependency splice

At the narrow-blocker level, closure is now achieved: the Kleshchev-I
reference has a complete inspected equivalent; the finite-group biadjunction
has a two-line explicit natural isomorphism based on existing published
items; and the modular JM primary construction has both an exact full-text
source and a self-contained CRT proof route.  This is not a claim that the
canonical inventory was edited.

The minimal splice is:

`q-Schur weight/Schur-corner definitions -> prop-schur-functor-compares-first-level-branching-with-hecke-restriction -> thm-kleshchev-first-level-sl-branching-multiplicity -> normal multiplicity`,

`published group-module setup -> lem-finite-group-induction-is-coinduction-and-thus-biadjoint -> conormal multiplicity`, and

`integral JM definition + def-generalized-jm-primary-idempotents-and-residue-summand-functors -> residue E_i/F_i -> all four coloured branching/socle/head rows`.

All three routes retain the fixed left-module, `p>0`, `q=1/e=p`,
p-restricted convention.  The transpose/sign and residue-negation dictionary
is the sole interface to Kleshchev/Brundan's displayed convention; at `p=2`
the sign becomes trivial but neither transpose nor order reversal does.
