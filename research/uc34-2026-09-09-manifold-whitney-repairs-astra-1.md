# Manifold-valued Whitney repair receipts

Owner-delegated bounded local repairs. No judges, shared metadata or live
scaffolds edited. This note follows the earlier manifold-Whitney audit report;
its dispositions supersede only the exact items explicitly repaired below.

## thm-whitney-approximation-for-manifold-valued-maps

Disposition: A-R. Local repair completed 2026-09-10 (Australia/Sydney), after
the 2026-09-09 audit. The original assertion is retained with explicit
countable choice. No remaining local mathematical obstruction identified;
this is not an independent judge or transitive ancestor certification.

Before SHA256: `97db6dc6f5a4a2035c05691c3ffd8be1eb4ee170874315a32a6a2fd5373614bf`.
After SHA256: `b586581ca2badf7a52c0eb2b9d8185f73dfcb53ced344e7f6bed008d93f9997d`.

Changes: replaced dimension-optimal weak Whitney and general ambient tube
imports with the repaired arbitrary finite-dimensional proper embedding and
a complete local normal-addition construction. The proof defines capped
A_p subset (0,1] before taking r(p)=sup A_p, proves all smaller radii eligible,
and proves the supremum-endpoint domain is injective and a local
diffeomorphism by its increasing union. Triangle inequalities prove r is
1-Lipschitz. On Omega={||v||<r(p)/2}, a collision p+v=q+w, ordered by
r(q)<=r(p), forces ||p-q||<r(p) and both vector lengths <r(p), hence puts
both pairs in a common injective local domain. Omega is open because r is
continuous. Local smooth inverses agree and give a global smooth inverse
onto the open image U. Projection after that inverse is the smooth
retraction R fixing the embedded target.

No smooth-radius minorant is needed. No partition, Urysohn, variable-radius
lemma, Euclidean/global ambient tubular existence theorem, or defective
null-image/atlas/projection result is imported. The normal-bundle structure
and its zero-section local-inverse lemma are the exact used interfaces.
The bundle's subspace topology is explained via local normal frames and
continuous coefficient inverses, legitimizing the V_a neighbourhood basis.

For f=jF, the proof uses epsilon=1 when R^k\U is empty, otherwise
min(1,d(f(x),R^k\U)/2). This is positive continuous and gives an ENTIRE
ball in U, not just membership of one approximation point. The repaired
absolute Euclidean theorem supplies H with strict error <epsilon. The
formula j^-1 R((1-t)f+tH) is well defined by the explicit segment norm bound,
jointly continuous by coordinate operations on the product, and has the
required endpoint maps. The endpoint j^-1 R H is smooth. Empty source and
consequently the only possible empty-target case are treated first.

Countable choice is explicit for the repaired embedding, Euclidean
approximation and the normal-bundle manifold interface. The capped-radius
and distance-ball constructions make no simultaneous local-radius choices.

Exact direct dependencies:

- def-countable-choice
- thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space
- prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold
- def-normal-addition-map-for-a-euclidean-submanifold
- lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section
- def-complete-ordered-field
- lem-distance-to-set-is-lipschitz
- thm-whitney-approximation-for-euclidean-valued-maps
- prop-identity-maps-and-composites-of-smooth-maps-are-smooth
- prop-smooth-maps-are-continuous
- prop-smoothness-is-local-on-the-source
- def-homotopy-relative-and-path-homotopy

All twelve dependency files are published. Eleven have explicit earlier
canonical item rows relative to target page455, index26: the embedding is
index3, normal-addition definition index13, local-inverse lemma index14,
Euclidean approximation index23; the remaining such dependencies are on
earlier pages. The complete-ordered-field definition is composed on
library/real-analysis/foundations-of-the-real-numbers.md, whose canonical
page order is9, though the canonical plan's partial item inventory omits
that old definition. This is an existing composed earlier home, not an
orphan or a newly authorized rehome. No forward supplier is used.

Used repaired embedding SHA256:
`7d7473480212c0ba988d9305211565ec9c87530ec8d68cd87795f838135cafa8`.
Used repaired Euclidean approximation SHA256:
`8bcdc3f31cca38dac283ffd24c64e3c16bc1574598c427d7a8339340dd0cd0b8`.
Read the actual complete proofs/statements of the local normal-addition
lemma, normal-addition definition, embedding-image proposition, distance
lemma, Euclidean approximation, smooth composition/continuity and homotopy
definition; the embedding was authored and fully checked immediately before
this task. Read the local smooth-inverse theorem as well. The updated
variable-radius supplier was inspected, but its smooth-minorant construction
is not used and it is not a target dependency.

Authoritative comparison: complete Lee Theorem6.24, Proposition6.25 and
Theorem6.26, pp139-141, read from the recovered full text at
/tmp/batch9-sources/lee-all.txt, SHA256
`8191cfaf351090fce4085f0d89a21b594c903ff1f027c19818b24b20f58034c7`.
The item retains the exact source URL. The radius endpoint/local-inverse
and ball-containment arguments are fully expanded locally, not replaced
with a citation or an exercise. Lee6.21's complete proof and the relevant
published approximation repair were read in this smoothing work.

Checks on final bytes: targeted precheck PASS; actual renderer PASS,
including KaTeX and frontmatter YAML. Manual checks covered the cap,
supremum endpoint, positive-radius continuity, strict collision bounds,
bundle topology, local inverse gluing, empty complement, joint continuity
and explicit choice. Only the target item and this new report were edited.
Parent owns dependency/page-requirement synchronization and ledger update.
The relative manifold-valued approximation item remains unchanged A-P until
its separately authorized repair; no acceptance is inferred from this one.

## thm-relative-whitney-approximation-for-manifold-valued-maps

Disposition: A-R, separate owner-authorized repair completed 2026-09-10.
This supersedes this relative item's previous A-P disposition. It does not
certify other published consumers or ancestors, and no judge was run.

Before SHA256: `6b6786902b38c4b334440c758c8a79cc2f700d6b64c1a9e3e1eae9f75ed4047c`.
After SHA256: `ea2f1bbc9f223e978e921fd75c144e6f91ef8229d7cd294b7c7f28bc7eeb7b15`.

Explicit CC now licenses the two existence routes. The statement retains
agreement on an OPEN neighbourhood of any closed A, without a compactness
assumption, and makes the relative conclusion explicit: the homotopy is
fixed on that same open neighbourhood, hence on A.

Exact reuse is documented in fact L1: steps1.1-6.1 of the repaired absolute
manifold theorem construct j, its smooth image inverse, U and R BEFORE
approximation. These proved auxiliary data, not the absolute theorem's
mere existence statement, supply the interface. That proof contains the
complete capped continuous-radius normal-addition construction. This item
does not import the dimension-optimal weak embedding, ambient tubular
existence, partition, or smooth-radius minorant suppliers.

For f=jF, the relative proof constructs a positive continuous error using
distance to the nonempty complement of U, with epsilon=1 in the empty
complement case. It explicitly proves whole-ball containment. The repaired
relative Euclidean theorem gives H=f on an open W0 containing A and strict
error <epsilon everywhere. Intersect W0 with the originally supplied open
smoothness neighbourhood V to obtain W; no relatively compact neighbourhood
is asserted or chosen. The smooth endpoint j^-1 R H agrees with F on W.
The explicit segment estimate places every (1-t)f+tH in the SAME ball;
coordinate products prove joint continuity. On W, H=f makes the entire
homotopy constant. Empty source and empty A are handled as stated.

Exact direct dependencies, all published and canonical-backward relative
to page455 index27:

- def-countable-choice (page18)
- thm-whitney-approximation-for-manifold-valued-maps (page455 index26)
- thm-relative-whitney-approximation-for-euclidean-valued-maps (page455 index24)
- lem-distance-to-set-is-lipschitz (page116)
- prop-identity-maps-and-composites-of-smooth-maps-are-smooth (page443)
- prop-smooth-maps-are-continuous (page443)
- def-homotopy-relative-and-path-homotopy (page289)

Used absolute manifold theorem SHA256:
`b586581ca2badf7a52c0eb2b9d8185f73dfcb53ced344e7f6bed008d93f9997d`.
Used relative Euclidean theorem SHA256:
`a52efb0b5d8f639ebdf735ec9cbc2a698e320c3075333e0c3d207e7c987145be`.
Read the actual relative Euclidean supplier completely for this item. The
absolute supplier was authored and checked immediately before this task;
distance, smooth-composition/continuity and homotopy suppliers were fully
read in that immediately preceding repair. The full Lee6.21 and6.26 proofs
were read in this smoothing work; their source receipt and recovered text
hash are recorded above. The stronger open-neighbourhood agreement comes
from the actual repaired Euclidean supplier, not from an attribution that
Lee6.26 alone states that stronger conclusion.

Targeted precheck PASS; actual renderer PASS including KaTeX and YAML.
Seven direct dependencies checked published and earlier. Manual reread
checked smoothness on V, use of the actually proved auxiliary tube data,
noncompact closed A, whole-ball containment, strict endpoint estimates,
joint continuity and equality throughout W times the interval. No remaining
local mathematical obstruction identified. Only this target and this report
changed during this task: no embedding, normal-addition, other supplier,
shared canonical, engine-control or live-scaffold edits. Parent owns the
exact dependency inventory and ledger reconciliation.
