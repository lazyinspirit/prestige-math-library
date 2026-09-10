# Six Tor harvest deferrals: destination research

2026-09-09. Research by Astra-2, followed by owner-authorized integration of
only the six batch-5 deferred rows and the relevant HA/CA future-enrichment
prose. No scope decision, canonical plan, ledger, live page manifest,
publication, or acceptance record changed. The original 24 pairs remain
unchanged. These retained future contracts are not current published content
or prerequisites; root owns authoritative future_enrichments metadata.

## Evidence and boundaries

Read the six exact `owner-decision` records in
`phase-2-catchup-24-alpha-c-scope-decisions.json`, their batch-5 coverage rows,
the relevant HA/CA prose inventories, and current `plan-spec.json` entries.
Recovered full PDFs from [Weibel chapter 3](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf),
[Weibel chapter 4](https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf),
and [Sharifi's notes](https://math.ucla.edu/~sharifi/homalg.pdf).
Read Weibel 3.1.3–3.2.5 and 4.1.1–4.1.11, including the relevant exercise
statements and supplied proofs. Visually inspected printed pages 68 and 95
to recover formulas lost by extraction. Sharifi is currently 97 PDF pages;
read 3.3.8 and 3.5.9–3.5.14, especially printed 68–69 and 76.
Do not carry the old extraction's mistaken inequality boundaries forward.

Canonical ordering/counts checked: Tor A/B 365.055/.056; derived-categories
A/B 365.063/.064 (60/9 items); Koszul A/B 365.901/.902 (51/12);
regular-local A/B 365.905/.906 (60/18). CA12 flatness is 111.023,
therefore **not** a legal later Tor destination. Some proposed destinations
below are existing published later pages, not waiting prerequisite builds.
Neither derived A nor regular-local A can accept an additional item at present.

All newly suggested IDs below are proposals, not existing suppliers.
No absent future supplier was established to be necessary for current24.
This is a bounded exact-use investigation, not a whole-run proof audit.

## b323e43871da69f1e5468728dbe3e6b19fbdd3cda6bdcb08cdb41c4e3a3fab37

**Source row:** Weibel `3.1.3; Exercise 3.1.2 Fraction quotient torsion`.
Row hash `0dff83340dc823d3546b64827a686b3d429a32560074a884971e98dac99154f3`.

**Destination proposal:** existing `derived-categories-examples`, beside
`ex-derived-tensor-of-two-cyclic-abelian-groups`; add proposed
`ex-derived-tensor-with-a-fraction-field-quotient`. Preserve the general
commutative-domain statement, with R=Z as its explicit special case, rather
than keeping only Q/Z. This uses one B slot and is never an upstream supplier.

**Complete local calculation:** for a domain R with fraction field F and
module B, tensor the exact sequence 0→R→F→F/R→0. Flatness of F gives a
canonical identification Tor_1(F/R,B)=ker(B→F⊗B). The localization map
identifies F⊗B with S^{-1}B for S=R\{0}; b/1=0 precisely when sb=0 for
some s∈S. This is the torsion submodule. This route avoids assuming an
unproved filtered-colimit theorem for Tor. Use existing localization-flatness,
Tor LES, and derived-tensor/Tor interpretation interfaces with their stated
choice assumptions; with supplied resolution data retain conditional clauses.

**Current24:** no use identified. The integer flatness proof is now the
finite-witness proof, not Weibel's Q/Z route. The field/integer dimension
examples use explicit short free resolutions, not this computation.

## 26236ddf6d312aa510416d2cde7dde06b58940d0825d229686f02cb658a03483

**Source row:** Weibel `3.1.6 Periodic resolution; 3.1.7 regular quotient;
Exercises 3.1.1 and 3.1.3`.
Row hash `21612bc4773b82abdde3583d6192ddbdcb13347a6ff8a33376bc5e5487e6c46b`.

**Destination proposal:** split the composite harvest row into three retained
computational contracts on existing `derived-categories-examples`:
`ex-periodic-derived-tensor-over-integer-quotient-rings`,
`ex-derived-tensor-of-a-principal-right-quotient`, and
`ex-tor-one-of-right-and-left-ideal-quotients` (proposed IDs).
Do not identify Z/m periodic resolutions with the different finite-cyclic-
group resolution on HA12. Do not send the general noncommutative contracts
to a commutative-only Koszul theorem.

**Recovered formulas and local proofs:**

- R=Z/m, positive d dividing m: alternately multiply R by d and m/d,
  ending d:R→R→Z/d. Kernels equal preceding images directly in Z/m.
  After tensoring, degree zero is B/dB; positive odd homology is
  ker(d:B→B)/(m/d)B, and positive even homology is
  ker(m/d:B→B)/dB. This includes d=1,m.
- For arbitrary unital R and r∈R put K={a∈R:ra=0}, a **right** ideal.
  Left multiplication r is right-linear. If K=0, its two-term free
  resolution gives Tor_1(R/rR,B)=ker(r:B→B), and Tor_n=0 for **n≥2**.
  With K arbitrary, break 0→K→R→R→R/rR→0 at rR. Two LES give
  0→Tor_2(R/rR,B)→K⊗B→ker(r:B→B)→Tor_1(R/rR,B)→0,
  where the middle map multiplies a⊗b↦ab. For **n≥3**, dimension shifting
  gives Tor_n(R/rR,B)=Tor_{n-2}(K,B). No false projectivity of K is used.
- For right ideal I and left ideal J, right exactness identifies
  I⊗R/J=I/IJ. The kernel of I/IJ→R/J is (I∩J)/IJ; the LES identifies
  it with Tor_1(R/I,R/J). These are abelian-group identifications unless
  additional bimodule structure is specified. For two-sided I=J obtain I/I².

**Current24:** no actual use identified. The earlier integer cyclic
resolution is not this periodic quotient-ring calculation. The regular-
sequence Koszul machinery can independently compute its commutative
specialization; that is not a prerequisite relation in the other direction.

## b2f83d7d5dc9ccb8b4306213bbaf6bd245b26bee013cc1d180e98d3bc468f810

**Source row:** Weibel `4.1.3 Ideal tests`.
Row hash `209f77367d1bf4f1eb3a4b6e8e9cd71533a9f184350ebbce9a13cee26f3df589`.

**Exact additional result:** the supremum of flat dimensions of cyclic right
modules equals right weak dimension, and likewise on the left. Current Tor's
left/right equality and Tor-degree detection do not alone export cyclic tests.

**Minimal destination proposal:** extend the existing later A contract
`lem-global-dimension-is-detected-on-cyclic-modules` on
`regular-local-rings-and-homological-dimension` with a separately proved
weak-dimension cyclic-test clause for arbitrary unital rings, both sides.
Its current contract already deliberately exports an arbitrary-ring theorem
on this commutative-algebra page. This changes no item count and preserves
its original global/injective clauses. It requires owner approval and future
proof review; the added clause is not currently proved by that item.

**Proof route:** the ideal criterion for flatness plus the LES identifies
flatness of M with Tor_1(R/I,M)=0 for every right ideal I. If every such
R/I has flat dimension ≤d, take d steps of a free resolution of any left M.
Dimension shifting makes its dth syzygy flat by that criterion. Thus left
weak dimension ≤d; exchange sides and use current Tor detection. Infinity
requires only separating each finite bound, not choosing a maximizing module.
The zero bound uses M itself. AC can supply resolutions; state this use.
Follow-up verification found the published ideal criterion and tensor
right-exactness theorem are commutative-only. The CA18 future prose now
provides complete local arbitrary-ring balanced-quotient right exactness,
finite-free induction, and finite-witness ideal tests. It does not apply
the published statements outside their domains. Read Weibel's complete
3.2.4–3.2.7 proofs; the character-dual alternative is not needed here.

**Current24:** not used by the current weak-dimension theorem, whose bound
is tested on all modules. This is preserved enrichment, not a current blocker.

## 84633cc7b0501ea4320b504a8a8c04feeaa0c8c313c5d9a38bf351ecee2a0659

**Source row:** Weibel `4.1.5 Noetherian case; Exercises 4.1.1-3`.
Row hash `e2afdb61114f6982f0b6c13458ba6e7ef94ad87c003e3c5f79ed689cf099978c`.

**Destination proposal, necessarily split:**

1. Preserve the complete **right-Noetherian**, not merely commutative,
   comparison as another explicitly separated clause in the existing later
   cyclic-detection contract just identified: finite right M has fd(M)=pd(M),
   hence wdim(R)=right gldim(R); for a two-sided Noetherian ring both global
   dimensions agree. Finite free syzygies are finitely presented; the flat
   terminal syzygy is projective. Weibel 3.2.7 supplies the arbitrary-ring
   finitely-presented-flat theorem; its full proof was read. Since CA12's
   finite commutative Noetherian theorem is insufficient, the future CA18
   prose now gives a complete finite-matrix splitting proof locally, with
   ordered coefficients and the opposite-ring passage explicit.
2. Add proposed `ex-homological-dimension-bounds-in-exact-sequences` to
   `derived-categories-examples`. For 0→A→B→C→0, LES vanishing gives
   pd B≤max(pd A,pd C), with equality unless pd C=pd A+1;
   the injective analogue has exception id A=id C+1;
   the flat analogue has exception fd C=fd A+1. Prove via the three LES
   inequalities, treating infinite dimensions explicitly rather than
   subtracting infinity. These are actual inequalities, not unconditional
   equality or a universal finite-dimension hypothesis.
3. Add proposed `ex-projective-dimension-of-sums-and-restricted-projectives`
   to that same B page. A direct sum of length-d projective resolutions
   gives the upper bound for pd(⊕A_i); each summand gives the lower bound.
   Under AC this proves equality of extended suprema. If P is S-projective,
   it is a summand of a sum of copies of S, giving pd_R P≤pd_R S.
   If global dimension is infinite, choose modules with unbounded finite
   lower bounds (or one already infinite); their countable sum has infinite
   dimension. State the choice used for selecting modules/resolutions.

**Current24:** no identified dependency on these strengthenings. In particular
the integer dimension result constructs length-one free resolutions directly;
it does not compare Noetherian weak and global dimensions. The later local
regularity contract `lem-local-global-dimension-equals-residue-field-projective-dimension`
uses minimal resolutions and cyclic global detection, not a hidden appeal to
the proposed weak-dimension equality. The complete future proof plans are
now recorded, but authoring and independent review remain owed.

## c2646759b511a334b17187716af37f167504158ab2dfa0d5ca93d92622d3f44c

**Source row:** Sharifi `Remark 3.5.11: flat resolutions`.
Row hash `2520435b31c04325dce6ffd5947e26453a1f3eedf84cd23f97ba26a145b0a730`.

**Existing later destination, no new item needed:** `derived-categories`,
specifically `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`
and `prop-homology-of-the-derived-tensor-product-is-tor`, with
`def-derived-tensor-product-in-the-bounded-above-setting`. Read their full
current proofs. They are published, although this receipt does not recertify
all their suppliers or inherited choice contracts.

For supplied nonnegative homological flat resolution F→M and projective
resolution P→N, reindex to nonpositive cochains. The two maps from P⊗F
to N⊗F and P⊗M are quasi-isomorphisms by the flat-tensor lemma. The
second target computes Tor; therefore the first does as well. This also
works with sides exchanged. All diagonals are finite; an arbitrary unbounded
flat complex is NOT asserted K-flat. No new spectral-sequence supplier.
Sharifi 3.3.8's printed “left exact” is inappropriate for the displayed
left-derived/right-exact proof; specialize to right-exact tensor correctly.

**Current24:** the finite-flat-resolution vanishing proof in
`thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` uses successive kernels
and LES, not this stronger arbitrary-resolution computation theorem. Thus
the later destination does not create a forward dependency for that item.

## a858881a8f48dd3dd0502177ad3a4083ed5cffab5792bd1283261d6c27b30816

**Source row:** Sharifi `Example 3.5.13: nonflat torsion-free ideal`.
Row hash `f22e7c45c62ee7c55038cb5b4e264bf52b89063ebaf86c378309dff274587dc0`.

**Destination proposal:** enrich existing
`ex-koszul-complex-polynomial-variables` on
`koszul-complexes-and-regular-sequences-examples`, with explicit R=Q[x,y]
and J=(x,y). The authorized follow-up selects enrichment of this existing
ID, not a new B item. The current twelve-item B inventory stays unchanged;
the added content is future enrichment, not a current prerequisite.

Local proof: ker((a,b)↦ax+by) is generated by (y,-x), since x divides by
and x is prime, hence x divides b; cancellation gives the other coordinate.
This proves 0→R→R²→R→Q→0 exact. After tensoring with Q both differentials
are zero; Tor_2(Q,Q)=Q. The LES of 0→J→R→Q→0 gives
Tor_1(J,Q)=Q, so J is nonflat. It is torsion-free as a submodule of the
domain R. Use the ordinary Tor interpretation under its declared assumptions.
This recovers every claimed feature and does not use general flat-resolution
comparison. Weibel Exercise 3.2.3 gives the same example over any field.

## Applied handoff: all six destinations retained

The six original harvest rows remain deferred and have actual existing
later page IDs instead of owner-decision. The mixed Noetherian row retains
both its CA18 and derived-B destinations, and the periodic row names all
three derived-B contracts. No original result or mathematical clause was
dropped. The complete formulas/proof strategies are in the HA14 subsection
“Retained Tor harvest enrichment — 2026-09-09” and CA18 subsection
“Retained Tor harvest enrichment at CA16 and CA18 — 2026-09-09”.

Verified current canonical/publication states:

| Existing destination | Order | Current published inventory | Retained future enrichment |
|---|---:|---:|---|
| `derived-categories` | 365.063 | 60 A | Explicit supplied-flat-resolution application of three existing A interfaces; no new ID |
| `derived-categories-examples` | 365.064 | 9 B | Six proposed IDs/contracts listed in the HA14 paragraph; not yet authored or published |
| `koszul-complexes-and-regular-sequences-examples` | 365.902 | 12 B | Add the nonflat torsion-free ideal calculation to existing `ex-koszul-complex-polynomial-variables` |
| `regular-local-rings-and-homological-dimension` | 365.905 | 60 A | Add separately proved general-ring clauses to existing `lem-global-dimension-is-detected-on-cyclic-modules` |

**Authoritative representation:** root may attach these exact contracts as
future_enrichments metadata to the existing named canonical pages, referring
to the binding prose. Do not append six IDs to an already published B page's
current `items` list, change publication status, add an in-run pair, or
represent proposed new clauses as current published suppliers. The potential
15-item enriched derived B is a future authoring count only. All current
publication/current24 inventories remain unchanged. Neither 60-item A grows.

**Interfaces closed as future local proofs:** the published
`thm-flatness-criteria-by-injections-and-ideals` and
`thm-right-exactness-of-tensor-products` were read and are commutative-only.
No matching earlier arbitrary-ring finitely-presented-flat supplier was
located. Full Weibel 3.2.4–3.2.7 source proofs verify the broader statements;
the future CA18 proof supplies its own balanced additive quotient maps,
finite-free/finite-witness ideal criterion, and finite-matrix splitting.
For a finite left presentation with relations sum_i a_ji m_i=0, the
right-linear relation matrix A sends e_i to sum_j e_j a_ji. Flatness
expresses (m_i) as sum_t (b_it)_i tensor z_t with A(b_it)_i=0.
Finitely many lifts z'_t give u_i=sum_t b_it z'_t satisfying the relations
and lifting m_i, hence a section. Finite free projectivity uses only finite
choice; the sided dual is over R^op. The dimension clauses retain AC for
arbitrary resolutions and injective/Baer constructions. These are complete
proposed arguments, not new publication or independent certification.

**Actual current24 necessity:** none established. The fraction-quotient and
periodic/ideal-intersection computations are not used by the current Tor or
Kunneth constructions; integer dimensions use explicit short resolutions.
Weak-dimension detection tests all modules, not the stronger cyclic ideal
tests. The finite flat-resolution vanishing proof uses LES/dimension shifts,
not arbitrary-flat-resolution comparison. Koszul Euler/multiplicity arguments
use regular-sequence/Koszul algebra, not this nonflat ideal counterexample.
Co-residence on their prerequisite pages is not a proof dependency. Phase2
self-containment is not claimed to depend on these unused source extras.

Latest group-c final recheck was read in full. Root separately reports
18/18 URL recovery, 47/47 backing recovery, and canonical five-dependency
synchronization; this report does not fabricate those checks. Root's
page-level current-source-recovery coverage field is outside this task's
six-row ownership and is preserved. Scope decisions, acceptance, canonical
plan and ledger remain root-owned. Future authoring and independent review
remain owed; this handoff supplies preservation destinations, not verdicts.

## Follow-up checks and exact receipt

- Coverage checklist with require-destination: 2 pages, 102 harvested rows,
  0 errors and 0 warnings. All six exact names still occur once, all remain
  deferred, and each primary destination resolves to a current canonical page.
- The six future derived-B IDs exist only as prose contracts: none has an
  item file or an entry in current canonical page inventories.
- Surgical coverage preservation check: remove only reason/destination
  fields from the six named rows and hash the remaining parsed JSON. Before
  and after hashes agree at
  `7dd37b5f6a919765273fa5f072056b541b2fc9071c6f9d0f4a65521c8b5df973`.
  This includes both root current_source_recovery fields, all source fetch
  receipts, all other rows and Kunneth coverage unchanged.
- Targeted git diff --check on the four owned files: clean.
- No judge, acceptance, scope-decision write, source-fetch stamp, canonical
  write, engine operation, publication or live inventory change was performed.

Final shared-file hashes at handoff (root can legitimately change them later):

| File | SHA256 |
|---|---|
| `phase-2-catchup-24-batch-5.coverage.json` | `e3dd72b7d809c7437aec69240ccc00d5c1ae2d77cc40a849a9ba45944fb7de6e` |
| `plan-homological-algebra-track.md` | `0c908d583b899a159bb2606851ee0a221b0e0eae54eadea4e31be7446c17d28f` |
| `plan-commutative-algebra-track.md` | `a9fe75098b5c48fef9d90880c40285c43f8d77204baa9efd45bac8d5901d30e2` |

Source bytes actually available/read for these receipts:
Weibel03 `6caf5421d0e7d24d0cbf99c76a2bec9fb58dca9c777c84a542e29fa959b53025`;
Weibel04 `309741a9c9d6039dbf50999a804b58c82a757823f4b1cbccaa94fd5a4461a96c`;
Sharifi `dbff1b909421574e380f8cabb21094530c1d567020228a30ddf70837e523e803`.
These hashes are reading provenance, not fabricated current fetch approvals.
