# Final adjudication: maximal Brauer pairs

Run: phase-2-nine-step-25. Group e, batch 10, queue position 1 of 1.
Item: `thm-maximal-brauer-pairs-exist-and-are-conjugate`.
Decision: **accepted-after-review**. Source status: **verified**.
The theorem file and every dependency file remain unchanged by FA.
Current itemHashGuard: `f5b585e9827ebeabeb48eff62cf5f19219d7c7c94a3a0036bc6bec4c883a0bed`.

## Evidence inspected

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md, the exact dispatch queue,
the complete current theorem and its eight direct dependencies:

- `thm-every-brauer-pair-determines-a-unique-global-block`
- `thm-defect-groups-are-maximal-brauer-support`
- `lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums`
- `lem-idempotents-lift-through-finite-commutative-algebra-quotients`
- `thm-brauer-homomorphism-is-multiplicative`
- `def-brauer-homomorphism-for-a-p-subgroup`
- `thm-sylow-second-theorem`
- `thm-brauer-pair-order-is-independent-of-the-normal-chain`.

Also opened the complete normal-inclusion, relative-map and local-pair definitions,
the finite-commutative local-factor lemma and the published block definition.
Read both `library/representation-theory/blocks-defect-groups-and-the-brauer-homomorphism` A/B pages;
the target entry in `research/phase-2-nine-step-25-batch-10.pages.json`;
the target contract, boundaries and risk review in the batch-10 proof contract;
the corresponding aggregate contract; the relevant coverage source mapping;
the group-e reader conventions and target load-bearing interfaces;
the target initial adjudication and repair report in
`research/phase-2-nine-step-25-alpha-step7-e.md`; and both target rows in
`research/phase-2-nine-step-25-judge.jsonl`.

The initial rejection has context hash
`52551c1ade658adde2986845d36bda3414f11f58ff9207c9acbadf72fa5d5e2a`.
Sol correctly replaced the kernel/trace supplier of F6 by the coefficient-projection
definition. Its current owning proof contract records that replacement.
The final rejection has context hash
`1baa6fc772fc2ff1e6ba016288c5ea7f0694ae65e70daf726b88659226149588`.
It objects that F8 supplies primitive-idempotent criteria but not normal inclusion.

## Independent mathematical decision

That final objection overlooks the last sentence of the cited order theorem:
“For normal $Q\trianglelefteq P$, it agrees with direct normal inclusion.”
The same sentence is included in the owning contract's F8 quotation.
Unfolding `def-normal-inclusion-of-brauer-pairs` gives precisely subgroup
normality, stability of the lower block and the relative Brauer-product equation.
Thus F8 is a valid restatement of the theorem in the page's defined terminology.
It need not reprove the definition or discard the theorem's final clause.

Checked the full consumer argument as follows. The finite-dimensional centers
have finitely many orthogonal primitive idempotents; $(1,b)$ ensures nonemptiness.
Consequently a maximal pair exists. Its distinct normalizer-conjugate blocks
form a nonzero orthogonal sum $z$, and global-block membership gives
$\operatorname{Br}_P(b)z=z$.

For step 2.1, $R$ normalizing $P$ acts on that normalizer orbit, so all relative
maps have invariant inputs. The non-singleton orbit lemma kills those sums.
For a fixed block $f$, relative projection is the restriction of the absolute
$R$-Brauer homomorphism to $(kC_G(P))^R$. It is multiplicative by F5.
For $t\in kC_G(R)$, it fixes $t$ and hence
$\operatorname{Br}_R(f)t=\operatorname{Br}_R(ft)=\operatorname{Br}_R(tf)=t\operatorname{Br}_R(f)$.
Its nonzero image is therefore a central idempotent containing a primitive
central block $d$. The equation with $d$ is exactly direct normal inclusion.
F1 keeps the enlarged pair in block $b$; conjugating back preserves strictness
because the larger subgroup has greater order. Maximality rules this out.

Step 1.2 proves the needed normalizer condition by a finite fixed-coset count.
Step 3.1 then makes $P$ Sylow in each support element's centralizer.
In step 4.1 the conjugate of $P$ and $P$ have equal Sylow order in $C_G(y)$,
even before knowing whether $y$ has nonzero coefficient. Correcting the
conjugator inside $C_G(y)$ proves coefficient equality on the entire intersection
of a global conjugacy class with $C_G(P)$. Extending those coefficients by class
sums gives the required central preimage, with no cancellation assumption.

Step 5.1 applies the proved finite-commutative quotient lifting lemma to the
image of the center. Primitivity of $b$ and the nonzero image of $bc$ force
$bc=b$, whence $\operatorname{Br}_P(b)=z$. In step 6.1 no relative map for a
nonnormal inclusion is assumed: first project through $N_S(P)$, where normality
holds, then use containment of centralizer basis sets. F2 identifies maximal
support with defect. For two resulting defect groups its containment-up-to-
conjugacy clause, applied in both directions, forces equal orders and conjugacy.
Finally primitive-block orthogonality selects exactly one summand of $z$,
proving pair conjugacy and the asserted image formula.

The cases $P=1$, trivial $G$, and Sylow $P$ require no additional argument or
choice assumption. All selections are finite. The A-page explicitly allows
characteristic-$p$ fields for coefficient arguments and reserves splitting
hypotheses for matrix-algebra conclusions. The local-factor and lifting proofs
work over arbitrary fields. No source field restriction is silently imported.

## Authoritative source verification

Consulted the university-hosted original thesis, not a search snippet:
https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf

Read the complete relevant arguments in Definition 2.11, Theorem 2.14 and
Lemmas 2.15–2.18 (printed pp.12–14; PDF indices 17–19), and Lemma 2.32 and
Theorem 2.33 (printed p.18; PDF index 23, extracted lines 1219–1307).
These verify the normal-inclusion convention, relative projection properties,
orbit vanishing, and the maximal-pair argument. Read the field convention on
printed p.1 (PDF index 6): Jacobsen fixes the algebraic closure of the prime
field. The broader local field scope is justified by the independently opened
local-factor and quotient-lifting proofs, rather than claimed from the thesis.
The source uses a support definition of defect; the consumer instead invokes
its local theorem connecting support with diagonal-vertex defect. Retrieval
succeeded on the first attempt. No whole-thesis reading is claimed.

## Bookkeeping and focused checks

Reconciled only this theorem's batch-10 manifest dependency list with Sol's
existing repair: replaced `lem-brauer-kernel-and-relative-trace-support` by
`def-brauer-homomorphism-for-a-p-subgroup`. The owning proof contract already
has the correct F6 and needed no edit. The aggregate contract still reflects
the earlier F6; it is a derived run artifact for the engine's normal merge,
not an additional mathematical dependency or a reason to change other items.

Following `briefs/tasks/frontier-dependency-ledger.md`, atomically reaffirmed
the owning `research/phase-2-nine-step-25-batch-10.cross-batch-dependencies.json`
as `[]` and ran the prescribed refresh. Both old and replacement suppliers
are on this owned A-page in batch 10. The collector confirms zero batch-10
cross-batch edges; inventing a same-batch review row would create an orphan.
No dependency item was repaired, so no owner-prerequisite-repair licence or new
lemma is needed. Scope is unchanged.

Completed checks:

- Focused `precheck.mts`: 1 checked, 0 failing.
- `proof-contract.mjs` on the owning batch-10 contract with `--strict --items`
  and this exact ID: 0 errors, 0 warnings, 1/1 checked.
- Focused `rendercheck.mjs`: passed.
- Manifest/current-item comparison: all eight dependencies match and exist.
- `frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25`: passed.
- Global `depcheck.mjs --quiet`: one unrelated `published-unaudited` error for
  `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`, plus
  existing warnings; no diagnostic names this consumer. That global failure
  is not represented as a pass or repaired outside this task.

No mathematical obligation remains for this queue item. The next action is
the exact terminal recorder with disposition `accepted-after-review` and
source status `verified`. This evidence is an FA decision, not a judge verdict;
no third consumer judgment or pass stamp is authorized or produced.

## Recorder completion

The prescribed recorder subsequently exited 0 and recorded
`accepted-after-review`, source status `verified`, at context hash
`1baa6fc772fc2ff1e6ba016288c5ea7f0694ae65e70daf726b88659226149588`.
Its receipt is in `research/phase-2-nine-step-25-step7-terminal-resolutions.jsonl`.
Queue complete; the owning Alpha may resume. The engine retains responsibility
for aggregate merging and the unrelated whole-run dependency-check finding.
