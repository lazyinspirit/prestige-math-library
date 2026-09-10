# Published smoothing follow-ups — 2026-09-09

Owner-authorized, defect-focused audits, one item at a time; no independent
judge or whole-closure certification. Only the three assigned published
items and this report are writable. Parent owns ledger and canonical updates.

## Source reading and common supplier scope

Read CLAUDE, README, SCHEMA, WORKFLOW, audit brief, exact ledger findings and
latest batch9 Astra3 notes. Read full Lee second-edition Theorem2.23 proof
pp43–44 and Proposition2.25 p45, Theorem6.21 pp136–137 and Theorem6.26 p141
from the complete recovered `/tmp/batch9-sources/lee-all.txt` (SHA256
8191cfaf351090fce4085f0d89a21b594c903ff1f027c19818b24b20f58034c7).
Active full-text URL:
https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
Lee explicitly regroups partition functions; the local proof supplies the
closed locally finite support-union argument and explicit countable choices.
No boundary extension exercise is imported: these items use the library's
boundaryless smooth-manifold definition. Source reading is not an assertion
that the source audits choice or every earlier published dependency.

Fully read actual partition, subordinate-partition definition, countable
coordinate cover, locally finite shrinking, repaired compact-set bump,
normalization and locally finite smooth sum proofs; coordinate-ball basis,
smooth-manifold definition, countable-choice definition, second-countable
Lindelof, compact-Hausdorff closedness, closed-subspace/finite-union compactness,
ambient compactness, derivative algebra and iterated-derivative definition.
The partition/cover/shrinking proofs remain separately owed repairs. The
normalization item's claim of subordination to closed supports is also not
used; only its elementary quotient calculation is reproduced locally.

## thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set

Disposition: A-R, bounded grouping/choice repair completed.
Home: smooth-partitions-of-unity-and-exhaustions, canonical A445.
Before SHA256: d1de603c0a8b7ddd4d4c28b22f111829ed8bbf6d7803a5ac901b7a3abebbbde8.
After SHA256: b83de635c83d1b29dae8ede2f6bc6e56fb26d60e076c7cf317b780e964235100.

Confirmed old step1.1 inferred two functions from a refinement-indexed
construction without regrouping and inherited unlicensed choices. Repair
states AC_omega explicitly and constructs the needed family locally, removing
the defective partition supplier entirely. All eligible coordinate tuples
are formed as a set; CC selects witnesses only for countably many basis
members. A compact exhaustion uses least integer indices, not DC. All
eligible nested coordinate pairs cover each compact annulus; CC selects
finite ordered covering lists, and then the countable bump family. Annular
support bounds prove local finiteness. Each grouped support union is closed
by deleting finitely many local closed supports; the quotient of the first
grouped sum by the positive total equals1 on an open neighbourhood of A
and has support in U. Empty cases and noncompact closed A are included.

Exact published deps (all read and adequate for these used clauses):
def-countable-choice; def-smooth-manifold;
lem-coordinate-balls-form-a-basis-of-a-topological-manifold;
thm-compact-subset-of-a-hausdorff-space-is-closed;
thm-closed-subspace-of-a-compact-space-is-compact;
lem-compactness-of-a-subspace-is-ambient;
lem-manifold-bump-for-a-compact-set-inside-an-open-set;
thm-a-locally-finite-sum-of-smooth-functions-is-smooth;
thm-algebra-of-derivatives;
def-ck-and-multi-index-notation-in-several-variables.
No Phase2, late665, Recorded supplier or new pair. Same-page bump and sum
precede this theorem; countable choice A18 and coordinate basis A443 are
earlier. Parent should synchronize these exact deps in the canonical item
and review page-requires closure; no canonical file was edited here.

Checks: targeted precheck PASS; targeted real renderer/KaTeX PASS. Replaced
stale owner/judge stamps with an honest owner-delegated local repair record.
Changed only this item and report for this disposition. Direct consumers
still need their own explicit inherited-choice audit; the assigned relative
Whitney target is handled below, not blanket-cleared by this receipt.

## thm-whitney-approximation-for-euclidean-valued-maps

Disposition: A-R, bounded countable-choice/refinement-index repair completed.
Home: whitney-embedding-tubular-neighbourhoods-and-approximation, canonical A455.
Before SHA256: d31f9b52c6d8282d651cd4dd652296536c8bde84fabc7b7b2af738e077acb4be.
After SHA256: 8bcdc3f31cca38dac283ffd24c64e3c16bc1574598c427d7a8339340dd0cd0b8.

The old proof selected a countable cover and sample points without licensing
countable choice; it also inherited the mismatch between refinement-indexed
partitions and original-cover indices. The corrected theorem explicitly
assumes AC_omega and constructs exactly the needed family locally. All
admissible ball/chart/sample tuples satisfying error<epsilon/2 form a set;
CC selects witnesses for countably many basis members. The finite annular
cover and bump construction is expanded again here, so no unstated general
conclusion from the Urysohn proof is used. The approximation is indexed by
the actual refinement pairs i and uses the retained original sample x_n(i).
Local finiteness makes smoothness componentwise and the triangle inequality
finite. At least one positive weight ensures the strict error inequality.
Empty M is explicit. Full Lee6.21 proof read; no mollification or unpublished
supplier is required.

Exact published deps: def-positive-continuous-error-function-for-strong-approximation
and the ten exact dependencies listed for Urysohn above. The error definition
is immediately earlier on A455; all other suppliers are on earlier pages.
Removed thm-smooth-partitions-of-unity-exist-on-manifolds and
cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover: their
pending published repairs are not inputs of this proof. No Urysohn dependency
is needed either. Parent should synchronize the new dependency list and
explicit assumption in canonical metadata; shared files remain untouched.

Checks: targeted precheck PASS and renderer/KaTeX PASS. Old owner stamp
replaced with honest delegated local verification. This closes only the
actual stated approximation/choice interface; downstream manifold-valued
and relative consumers require their own assumption propagation.

## thm-relative-whitney-approximation-for-euclidean-valued-maps

Disposition: A-R, bounded noncompact-neighbourhood and inherited-choice
repair completed. Home: whitney-embedding-tubular-neighbourhoods-and-approximation,
canonical A455, immediately after the absolute Euclidean approximation.
Before SHA256: 3788285679f4b43329aca88349ae2de80e1b864f731230fc291a6c420afeae3c.
After SHA256: a52efb0b5d8f639ebdf735ec9cbc2a698e320c3075333e0c3d207e7c987145be.

Confirmed old step1.1 required compactly contained neighbourhoods of an
arbitrary closed A. For instance A=R in M=U=R cannot lie in a relatively
compact W. The corrected proof retains the full neighbourhood-equality
claim and arbitrary closed A. Assume AC_omega explicitly, obtain absolute
approximation Q and the repaired cutoff chi=1 near A supported in the smooth
locus U, and set Ftilde=chi F+(1-chi)Q. On U it is smooth by product rules;
on M minus supp(chi) it is Q. Those open sets cover M, proving smoothness
without differentiating F elsewhere. The pointwise error is
(1-chi)||Q-F|| <= ||Q-F|| < epsilon, including chi=1. No compact shrinking,
closed-neighbourhood extension, or pending supplier is used. Empty cases
are explicit. This is a local stronger-neighbourhood adaptation of the
fully read Lee6.21 argument, not a quotation of a source conclusion.

Exact deps: def-countable-choice;
thm-whitney-approximation-for-euclidean-valued-maps (published, repaired above);
thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set (published, repaired above);
prop-smoothness-is-local-on-the-source (published A443);
thm-algebra-of-derivatives;
def-ck-and-multi-index-notation-in-several-variables.
The last three full supplier proofs/definitions were read. Removed
lem-smooth-extension-from-a-closed-neighbourhood, which remains a separate
published consumer of Urysohn needing an explicit inherited-choice review.

Checks: targeted precheck PASS; renderer/KaTeX PASS. All three targets'
direct dependencies were checked against actual item files (published) and
canonical positions (strictly earlier page or earlier same-page item), and
all body wikilinks are declared deps. No new A/B pair, late665 edge, source
drop record, canonical edit, or independent judge. Parent should synchronize
the six exact deps/choice assumption and move the existing ledger row.

## Bounded downstream discovery, not new defect verdicts

A read-only declared-dependency scan found these additional published direct
consumers. They are assumption-impact review candidates, not blanket U-C
findings; their full proofs were not audited here (except the extension item
whose actual cutoff use was fully read as described above).

Urysohn: cor-smooth-functions-separate-points-from-closed-sets;
lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands;
lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed;
lem-smooth-extension-from-a-closed-neighbourhood;
lem-variable-radius-injectivity-for-normal-addition;
thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function;
thm-the-double-has-a-well-defined-smooth-structure.

Absolute Whitney: fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold;
thm-whitney-approximation-for-manifold-valued-maps.

Relative Whitney: cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values;
ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set;
thm-relative-whitney-approximation-for-manifold-valued-maps.

The assigned relative theorem is already repaired and is omitted from this
pending-consumer list. A declared dependency can be extraneous or replaceable
by a choice-free explicit example, so each candidate needs its own proof
read before classification. No unassigned item was edited. Scoped whitespace
check passed; no broad completeness or upstream partition-family repair is
claimed by these three local dispositions.

Repository-wide depcheck was also run and is not a global pass: it reports
four unrelated published-unaudited errors on
cex-separately-continuous-not-jointly-continuous, def-metric-continuity,
lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group,
and lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams. No assigned
target has an error; no global item or page cycle was reported. These
unrelated publication-evidence states were left untouched.
