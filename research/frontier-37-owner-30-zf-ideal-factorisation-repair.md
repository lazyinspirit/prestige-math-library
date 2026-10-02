# ZF ideal-factorisation repair

**Repair date:** 2026-10-01  
**Target:** `thm-number-field-integral-ideal-factorisation-in-zf`  
**Scope:** one published theorem and this repair report. The theorem Statement
is unchanged. No plan, manifest, page, ledger, run-state, receipt, or commit was
edited.

## Confirmed defects in the prior item

The prior proof did not establish its ZF claim through the suppliers it cited.
Its step 1.1 used `cor-submodules-of-finite-free-pid-modules-are-free` to infer
that ideals of `O_K` are finite free abelian groups. The actual proof route of
that generic corollary reaches the simultaneous PID-submodule basis theorem,
whose maximal-divisor pivot uses `thm-principal-ideal-domains-are-unique-
factorisation-domains`. That supplier explicitly assumes AC and its proof uses
DC to select a maximal principal ideal. This was a genuine choice leak in the
published proof, independent of the unqualified statement of the corollary.

A second genuine gap was in the prior finite-quotient annihilator argument.
It selected a “maximal ideal containing the annihilator” from the set of all
ideals containing it. That set includes the whole quotient ring, which is a
maximal member if maximality is read within that set. The argument therefore
did not ensure a proper maximal ideal and did not justify the localization
witness it needed. The same issue applied in the inclusion-reversal step.

The old `verification.verified` stamp was tied to the old proof hash
`e57f7c9eb823caca3170366a3d4d300b9ea72af54313c86863236ad2dc0701c9`. The
historical receipt and its amendment remain in
`research/up-1630-review/agent-04-receipts.jsonl` (receipt 138). The stamp was
removed from the item because it does not audit this replacement proof; this
repair report preserves the historical record without treating it as current
evidence.

## Replacement proof route

The target no longer calls the generic PID-submodule corollary or the generic
height-one localization-to-DVR theorem. It now uses these explicit steps:

1. From the current rank-degree theorem, fix one finite integral basis. An
   induction on `m` proves every subgroup of `Z^m` has a finite basis: project
   to the first coordinate, use the least positive generator of its image,
   take one least-coded lift, and induct on the kernel. Applied to each ideal
   of `O_K`, this gives finite ideal generators directly.
2. For each localization `S=O_{K,p}`, contraction to `O_K` shows every ideal
   of `S` is finitely generated. The same argument proves ascending chains in
   `S` stabilize by taking a finite generating list for their union. This is
   the finite-generation-to-ACC direction proved directly; the proof does not
   invoke a maximal-condition or dependent-choice principle.
3. A nonzero prime has finite quotient and hence is maximal. At a listed prime
   `p`, the local ring `S=O_{K,p}` is integrally closed. For every nonzero
   `x` in its maximal ideal `m`, the quotient `S/xS` is a localization of a
   finite quotient of `O_K`. In this finite local ring every maximal-ideal
   element is nilpotent, so a finite product argument gives `m^N subset xS`.
   Minimality of `N` and the finite-generator determinant trick then make `m`
   principal. Deterministic division by a generator terminates by the direct
   ascending-chain argument and gives the unique local power exponent.
4. The proof explicitly records that `m^r/m^(r+1)` is one-dimensional over
   the residue field and that the maximal ideal of `S/aS` has nilpotency index
   equal to the local exponent. This retains the local facts used by existing
   norm and Dedekind--Kummer consumers.
5. Finite quotient elements and ideals receive codes from a fixed code on
   `O_K`: cosets use their least representative code, and subsets of the
   ordered finite quotient use bit masks. The prime list and finite
   annihilator witnesses are selected among proper ideals by least bit-mask
   code at greatest finite cardinality. The reverse inclusion uses the same
   restriction to proper ideals. Thus the finite local-to-global argument
   actually obtains a proper maximal ideal.

The one initial basis is a single existential witness supplied by the
rank-degree theorem, not a choice from a family. Relative to it, every
multivalued finite selection in the construction is least-coded; all other
divisions and exponent determinations are unique or least natural numbers.

The current published `thm-ring-of-integers-free-of-rank-degree` now has the
choice-free trace-dual lattice and finite subgroup-induction proof integrated
by the root agent. This repair uses its rank-degree result and separately
proves the subgroup fact needed for arbitrary ideals. The prior route audit
`research/frontier-37-owner-30-number-field-zf-route-audit.md` records the
full-text source review and the original route analysis; that audit predated
this item repair.

## Dated batch-2 supplier status update

The initial independent audit found an actual Q-span gap in the then-authored
batch-2 draft `thm-ring-of-integers-and-ideals-are-full-lattices`, step 1.2:
it wrote `a/b = sum_i (m_i/b) alpha_i` and called this a Q-span, although the
denominator `b` there is an element of `O_K`, so those coefficients are in
`K` and the displayed equality proves only a K-span. The later Q-independence
and cardinality argument does not supply the missing Q-span step. The current
draft replaces this argument by taking a Z-basis of `O_K`, clearing a positive
integer denominator to prove Q-independence, and using its `n` elements to
obtain a Q-basis. The batch-2 writer has drained this item repair; the root's
stable-input review remains pending.

The same initial audit found two actual defects in the batch-2 **draft**
`def-minkowski-embedding-of-a-number-field`, at different locations. Its
Definition gave the complex-block Euclidean norm as `sum_j |tau_j(x)|`, rather
than `sqrt(sum_j |tau_j(x)|^2)`. Its real-basis remark did not justify real
linear independence from injectivity and a Q-basis. The current draft has the
correct unscaled norm `sqrt(sum_j |tau_j(x)|^2)` in the Definition and
explicitly says injectivity alone is insufficient; the all-embedding
determinant calculation with the `2^(-r_2)` realification factor proves the
real-basis assertion. The batch-2 writer has drained these item and carrier
repairs, but the root's stable-input release remains pending. The old norm
quote is still present in the batch-2 quote and the corresponding batch-3
full-lattice quote. Those upstream items and contracts were not edited in
this repair; downstream evidence should wait for stable-content rechecks.

## Direct-consumer interface audit

`node tools/consumers.mjs thm-number-field-integral-ideal-factorisation-in-zf
--json` found seven direct consumers, all still present. Their uses were read
in the current files:

| Consumer | Actual use | Effect of this repair |
|---|---|---|
| `cor-no-nontrivial-number-field-is-unramified-over-q` | Uses prime factorization of `p O_K` in its ramification-data fact. | The theorem Statement is unchanged. |
| `def-different-of-a-number-field` | Uses factorization of a nonzero principal ideal to justify the inverse fractional ideal; it separately establishes maximality of nonzero primes from finite quotients. | Supported by the same Statement; no supplier change. |
| `def-ramification-index` | Uses existence and uniqueness of prime exponents; it separately invokes the rank-degree result for properness. | Supported by the same Statement; no supplier change. |
| `thm-dedekind-kummer-prime-factorisation` | Uses factorization of `p O_L` and the local nilpotency index to identify exponents. | The replacement proof explicitly proves that the local nilpotency index is the exponent. Its phrase “DVR used in that theorem’s proof” names a structure the replacement does not invoke by name, but the exact local quotient conclusion it needs is established. |
| `thm-fundamental-identity-for-primes-in-number-fields` | Uses the finite prime-power factorization and one-dimensional local layers. | Both local facts are explicit in the replacement proof. |
| `thm-galois-action-on-primes-above-a-prime-is-transitive` | Uses the complete finite factorization statement to form the finite prime set. | Supported by the same Statement. |
| `thm-ideal-norm-is-multiplicative` | Uses factorization and one-dimensional local layers to compute successive quotient cardinalities. | The local layer calculation is explicit in the replacement proof. |

There are no page-prose links to the target; its only listed home remains
`library/number-theory/prime-ideal-decomposition-ramification-and-the-different.md`.
The target Statement and Definition interfaces did not change, so this audit
found no direct-consumer proof repair to make. The internal local facts cited
by the three local-calculation consumers are now explicit in the replacement
proof.

## Mechanical checks and evidence boundary

The current target passed `node tools/tsx-run.mjs tools/precheck.mts
items/thm-number-field-integral-ideal-factorisation-in-zf.md` (1 checked, 0
failing) and `node tools/rendercheck.mjs` on the target (frontmatter and KaTeX
pass). All 11 direct dependency IDs resolve, and the ten Fact entries cite
those suppliers. The consumer inventory reports seven direct consumers, one
existing home, and no page-prose links; the consumer proof-use review above was
read independently. The target Statement is byte-for-byte unchanged from the
pre-repair item; its section SHA-256 is
`9efe2f71499e3ffea0e773bd2f696828926c2f5c21772fe7484083c921243dd6`.

Final target hashes: raw and judge
`cd71e40fb4cbdc616a4d86de2f3908f9c4a40fac3934e68aa8cab705d1521e8d`, guard
`13a694e454edb4330b6025906e39db46589431de4bc9507c2a6e05e1e5af8e6f`, and
surface
`a9da12015eadf2fe682918ed75cb8738cadb6e6fa10e744e6c7e5cb42016b699`.
These checks establish formatting, rendering, and repository wiring only;
they do not independently accept the mathematics. The old bound verification
stamp was removed. No fresh ordinary receipt or independent judgment was
created, no selected Step-3 strict-contract run was performed for this
published-owner repair, and no shared plan, manifest, page, ledger, run state,
or commit was changed.

## Root stable integration (2026-09-30 UTC)

The writer drained before root's final review. Root read the entire replacement
proof and all11 actual direct supplier files. Added explicit rational independence
of the integral basis by clearing denominators and Frac(R)=K, instantiated the
localization integral-closure theorem with base R, and corrected quotient-class
notation/membership to aR in the kernel argument. The Statement is unchanged.
Root recorded verification.audited2026-09-30 as a local owner review, synchronized
ONLY the target row's deps in plan-spec.json, and checked all11 supplier homes
already lie in the existing prerequisite closure of the prime-ideal-decomposition
A page. No page rehome or prerequisite addition is needed. Selected precheck and
rendercheck both pass after these changes. No independent judgment or whole-
closure audit is claimed. The seven direct-consumer conclusions in the prior
audit remain unchanged; the local layers and nilpotency index they use are explicit.

Final raw SHA256: `626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`.
