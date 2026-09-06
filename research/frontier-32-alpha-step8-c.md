# Frontier 32 Step 8 adjudication — group c

## Scope and evidence

I read all six assigned pages and all 110 owned items, then opened every dependency touched by a rejection. No dependency edge or defect crossed the group boundary. The exact 37 rejection tuples are recorded in `research/frontier-32-judge-adjudications.jsonl`; the three Step-7 warning dispositions are in `research/frontier-32-step8-alert-decisions.jsonl`.

Primary sources consulted for the boundary-coordinate and collar questions:

- Ioan Mărcuț, *Manifolds* (2017), §§14.5 and 15.1, <https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf>: supports the local boundary calculus, inward-field construction, and collar-by-flow argument.
- Will Merry, *Differential Geometry* (2021), Lecture 24, <https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf>: supports half-space charts, the full-dimensional boundary tangent space, embedded manifold boundary, partitions of unity, and the outward-normal-first convention.
- Marco Gualtieri, *Topology I: Smooth Manifolds*, transversality section, <https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf>: confirms that the ordinary transverse-preimage theorem supplies submanifoldness and its tangent-space formula, not the simultaneous boundary-adapted normal form claimed in the rejected proof.

## Rejection dispositions

### Confirmed fatal — 21

| Item | Type | Exact defect and licensed repair | Status |
|---|---|---|---|
| `def-closable-linear-operator` | other | The definition leaves `X,Y` untyped; require normed spaces. | repaired |
| `lem-open-mapping-successive-approximation` | logic | The geometric bounds sum to 2 rather than less than 1; shift both exponents. | repaired |
| `thm-closability-sequential-criterion` | logic | The `1/n` selection is undefined at the library's index `n=0`; use `1/(n+1)`. | repaired |
| `ex-a-closed-unbounded-differential-operator` | logic | The displayed witness is undefined at `n=0`; quantify it for integers `n>=1`. | repaired |
| `def-spherical-averages-and-local-ball-means-in-rn` | other | The integrals lack dimension, domain, function, and integrability data; supply all of them. | repaired |
| `def-distributional-harmonicity-and-poisson-equation-in-rn` | other | `F` is undeclared in the Poisson equation; quantify `F` as a distribution. | repaired |
| `ex-radial-harmonic-functions-away-from-the-origin` | other | The radial function, domain, dimension, and `C^2` regularity are absent; state them. | repaired |
| `lem-radial-mollification-fixes-local-mean-value-functions` | logic | Radiality alone does not imply unit mass; require the cited radial mollifier family. | repaired |
| `ex-distributional-harmonicity-removes-an-apparent-corner` | other | Distributional harmonicity has no stated domain; work on `R^n`, `n>=1`. | repaired |
| `cor-local-mean-value-property-is-enough` | other | The local ball can leave `Omega`, making its averages undefined; require compact containment. | repaired |
| `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` | other | The witness has free `n` and no ambient domain; set `n>=1` and `u:R^n->R`. | repaired |
| `ex-affine-and-harmonic-polynomial-functions` | other | Coordinate indices are unbounded; quantify `x`, `a,b`, and `0<=i,j<n`. | repaired |
| `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` | other | A chart domain is not required to be open; add that condition. | repaired |
| `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold` | other | “Last coordinate” is ill-typed under the page's `n=0` convention; add the zero-dimensional branch. | repaired |
| `thm-neat-submanifolds-have-boundary-adapted-slice-charts` | dependency_citation | Neither cited theorem supplies the simultaneous normal form; give the explicit half-space-preserving coordinate construction, with the `k=1` empty tangential block handled separately. | repaired |
| `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts` | dependency_citation | The arbitrary source chart from constant rank need not preserve the face; absorb it into the target chart before restricting. | repaired |
| `prop-boundary-orientation-is-independent-of-the-outward-vector-field` | logic | The interval formula is false for the opposite orientation; specify the standard orientation. | repaired |
| `thm-the-double-has-a-well-defined-smooth-structure` | dependency_citation | The proof consumes a collar whose available theorem assumes countable choice; propagate that hypothesis to the global structure while retaining an unconditional local seam chart for its direct extension corollary. | repaired |
| `ex-real-projective-space-is-orientable-exactly-in-odd-dimension` | dependency_citation | The quotient-orientation criterion is asserted without derivation; prove descent and pullback through the double cover. | repaired |
| `prop-pointwise-orientation-sign-of-a-local-diffeomorphism` | logic | An arbitrary-coordinate Jacobian sign need not be the intrinsic sign; restrict to oriented charts. | repaired |
| `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary` | other | The statement omits smoothness of the manifold needed for germs and bundle transitions; add it. | repaired |

### Confirmed nonfatal — 8

- `cor-pointwise-limit-of-bounded-operators-is-bounded`: apply `||T_nx||<=||T_n||||x||` along the chosen subsequence; this is an immediate omitted line. The matching reader warning is nonfatal.
- `thm-open-mapping-theorem`: the immediately preceding closure-ball lemma supplies the hypothesis of the successive-approximation lemma; the omitted bridge is local and the theorem is correct.
- `lem-sphere-and-ball-measures-scale`: surface scaling follows directly from dilation, while the cited polar theorem supplies finiteness and the ball formula.
- `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic`: a locally uniform limit of continuous functions is continuous on a compact neighbourhood, an immediate standard line.
- `ex-real-and-imaginary-parts-of-holomorphic-monomials`: the explicitly displayed polynomial components are `C^2`, so the cited harmonic-components theorem applies.
- `thm-the-interior-is-an-open-smooth-n-manifold`: for `n=0`, the stipulated half-space is a point and the result is immediate; the positive-dimensional proof is correct.
- `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations`: the same locally constant sign argument applies independently on each connected component.
- `ex-the-closed-ball-and-its-sphere-boundary`: the `n=1` ball is the elementary interval `[-1,1]`; the implicit-function proof covers the nontrivial higher-dimensional case.

### False positives — 8

- `cex-closed-graph-fails-without-completeness`: the opened dependency explicitly contains the equal-coordinate vectors invoked by the proof.
- `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary`: the declared smooth-boundary invariance dependency licenses the converse.
- `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`: the full opened precursor prints the shrinking, bump, and normalization construction; restricting its Euclidean bumps to a half-space preserves the required properties.
- `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`: this item deliberately adopts the two-ray determinant-line convention at dimension zero, and the next proposition explicitly records its difference from the published basis-class convention.
- `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary`: the full opened double theorem explicitly constructs seam coordinates; those are exactly the coordinates used here.
- `thm-collar-neighborhood-theorem`: the proof locally extends the field across each face and uses its Euclidean flow; it does not apply the whole-manifold semiflow theorem to a merely local field.
- `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension`: “both frames” in step 2.1 refers to the positive charts chosen in step 1.1, so the determinant assertion is correctly scoped.
- `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line`: under the cited definition, `d x(\partial_x)=1>0`, so inwardness at zero is immediate and the displayed integral curve proves the claim.

## Reader-warning dispositions

- `s8a-c667527fa94e3c0e3e35ac45`: `covered_by_rejection`; the exact rejection of `def-spherical-averages-and-local-ball-means-in-rn` independently identifies and licenses the same repair.
- `s8a-bea9295dcfb0e3326be749b1`: `nonfatal`; the standard LF topology on the test-function space is immediately recoverable. No topology wording is changed while the separately licensed `F` defect is repaired.
- `s8a-b4995ce770e4f4a663df4d20`: `nonfatal`; the missing subsequence norm estimate is an immediate proof line and does not alter the result.

## Cross-group alerts

None. Every issue localized to an owned item or an opened published dependency that already contained the needed fact.

## Validation and rejudge targets

- Repair progress: 21/21 completed.
- Rejudge targets: the 21 repaired items in the confirmed-fatal table above.
- Focused validation: after correcting the display-separated numbered steps in the two boundary normal-form repairs, precheck passed on all 16 repaired proof-bearing items; rendercheck passed on all 21 repaired items; the three owned batch manifests passed content policy with 110 scoped items, zero errors, and zero warnings; and dependency checking completed with zero hard errors (its warnings were pre-existing repository-level multi-home/orphan/declaration notices).
- Defect-ledger validation: `node tools/defect-ledger.mjs validate --run frontier-32` checked the then-current 463 rows with zero errors. A direct reconciliation also found exactly 21 group-c defect rows, one for every group-c fatal tuple and no others.
- Step-8 guard: run against the prescribed pre-Step-8 baseline and touch/adjudication ledgers. A direct group-c projection found exactly the 21 repaired items above, all licensed by exact pre-edit hashes, with zero unlicensed group-c changes. The latest repository-wide invocation observed 178 changed items, 120 licensed changes, and 58 still-unlicensed changes owned by other concurrently active groups; no out-of-scope item was changed here.
- Step-8 scope check: run. All 37 group-c rejection tuples and all three group-c reader warnings have exactly one disposition. The latest repository-wide check remained red on seven unanswered Step-7 alerts assigned to other groups; none targets or is owned by group c.
