# Focused owner resolution: pivotal partial trace

Current isolated owner proposal, cycle 1. No canonical source, report, observation, decision, ledger, state or gate input was changed. Apply guarded operations only after root adjudication.

The native fatal/open row nmm81-b61-pivotal-left-partial-trace accurately identified a false proof identity. Current Proof 2.2 identifies a pivotal evaluation closure with the opposite pivotal coevaluation closure. Its reported graded-line pivot calculation gives 2 versus 1/2. That alone does not disprove the theorem, as the native report states. The following additional construction disproves the unrestricted Statement.

## Explicit counterexample

Use actual source conventions: $t_A(u)=\operatorname{Tr}_L(j_Au)$ and $r_A(u)=\operatorname{Tr}_R(uj_A^{-1})$. Negligibility is the radical of $t$, irrespective of literature names for the two traces.

Construct the linear category of oriented noncrossing pairings. Objects are finite words in upward label $X$ and downward label $X^\vee$. Morphism bases are orientation-compatible noncrossing pairings of ordered source/target boundaries, without closed components. Tensor product concatenates words and pairings. Composition identifies intermediate boundaries, giving boundary paths and oriented cycles. Delete a cycle with weight 0 in the orientation of $t_X(1_X)=\operatorname{ev}_{X^\vee}\operatorname{coev}_X$ and weight 1 in the opposite orientation of $r_X(1_X)=\operatorname{ev}_X\operatorname{coev}_{X^\vee}$.

Orientation-preserving planar isotopy cannot reverse a circle's orientation. A component closed during intermediate composition remains disconnected from every later boundary; deleting cycles in stages therefore gives exactly the same components and product of weights as total gluing. This proves associativity, including zero weights. Tensor interchange follows from disjoint concatenation of component graphs. Cups and caps obey both snakes: each snake gluing has one through path and no cycle, so neither weight enters. Half-turn rotation defines duality; two half-turns return exactly the original pairing. Double dual is literally the identity and $j=1$ is monoidal and natural. No braiding or spherical isotopy is imposed. These arguments prove the construction consistent rather than presuming an unspecified quotient nonzero.

The unique empty-boundary pairing spans $\operatorname{End}(\mathbf1)=\mathbb C$. The unique loop-free single-strand endomorphism is its through arc, so $\operatorname{End}(X)=\mathbb C1_X$. These identities are nonzero basis vectors. The additive envelope is additive, complex linear and rigid, with bilinear tensor and the same two endomorphism rings.

Thus every test endomorphism of $X$ has zero $t$-trace and $f=1_X$ is negligible. Put $A=X^\vee\otimes X$ and

$$a=\operatorname{coev}_{X^\vee}:\mathbf1\to A,\qquad b=\operatorname{ev}_X:A\to\mathbf1,\qquad h=ab:A\to A.$$

Pivotal cyclicity gives $t_A(h)=t_{\mathbf1}(ba)=ba=1$. Hence $1_{X^\vee}\otimes f=1_A$ is not negligible, since its test $h$ has nonzero trace. This counterexample has finite-dimensional Hom spaces; the false general claim is not an open problem. A focused delegated construction check independently verified the pairing construction and typed trace witness; this supplies no native execution.

## Richest sound correction

Preserve unconditional linear, composition and right tensor closure. Full two-sided tensor closure follows under either:

1. Both pivotal traces agree on every endomorphism. Proof 2.2 explicitly changes from $t$ to $r$ before the mirrored partial closure and back after it. The hypothesis is stated directly, without extending the library's dimension-based spherical definition beyond its abelian tensor setting.
2. A braiding exists. Proof 2.3 uses $1_Z\otimes f=c_{Z,Y}^{-1}(f\otimes1_Z)c_{Z,X}$ and unconditional right tensor/composition closure. Neither sphericality nor ribbon compatibility is needed.

The original Definition remains unchanged: it already disclaims tensor closure. Existing trace, rigidity, pivotal and braiding suppliers suffice; no new item is required. The final focused cycle adds published def-braiding and the actual level-3 prequotient finite-R supplier; in-run level remains 4. The title becomes “Partial-trace closure of negligible morphisms” and Statement provenance becomes ai-altered. Explicit F5/Proof3.1 now invokes the finite-R supplier for the full tilting application. The proposed EGNO locator also corrects printed p.237 to the actually read p.236. The proposed ledger successor retains fatal severity and records the false unrestricted portion as narrowed, superseding rather than erasing the native open row.

Relevant full local source passages were read: Müger, Tensor Categories §3, research/physics-algebras-planning-2026-10-17/sources/04-hopf/muger-tensor-categories.txt lines 1460–1566, asserts general monoidal ideal closure without a resolving proof. EGNO's complete Exercise 8.18.9, research/physics-algebras-planning-2026-10-17/sources/04-hopf/egnobook.txt lines 19883–19905, assumes sphericality. Neither is credited with the missing unrestricted argument. The counterexample and replacement proofs are current local owner work.

## Same-owner consumer dispositions

consumer-closure.json records exact current dependencies/justifications, alias resolution and raw guards: three direct and eleven indirect consumers. Exact current source snapshots are retained as .current-read.txt. The supplier has no aliases. nonlogical-consumers.json records six additional page uses and no additional item.

| Consumer | Focused disposition |
|---|---|
| lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings | F5 and Proof 1.3 use the planar ideal property. Both full closures count identical components on every basis matching; linearity gives trace agreement. Proposed F5 explicitly verifies this branch; no Statement/path normalization change. |
| thm-temperley-lieb-root-negligible-quotient-is-semisimple | F4/Proof 1.1 use closure of the planar boundary projector. Proposed F4 states the same component-count trace agreement. Radical equality, rectangular blocks and fusion Statements remain unchanged. |
| thm-temperley-lieb-rank-one-tilting-quotient-fusion-category | F3/Proofs 1.1–2.1 need closure before quotienting. Existing F4's finite-R lemma Proofs 3.1–4.1 construct natural invertible braiding on the full prequotient category; Weyl/dual-Weyl generation extends from tensor powers to all sums/summands. Proposed F3 invokes that braided branch, without circularly assuming quotient sphericality. Statement unchanged. |
| thm-temperley-lieb-rank-one-pivotal-ribbon-conversion | Uses the preceding actual quotient/path results, including unequal-degree Hom and retained sums. Their interfaces remain unchanged; negative-loop/parity correction unaffected. No edit. |
| thm-temperley-lieb-root-quotient-tower-interface | Uses unchanged planar radical components/path units. Reflection, positivity, prefix maps and right closure unaffected. No edit. |
| thm-su2-root-unity-ribbon-category-is-modular | Uses unchanged actual tilting quotient, finite-R ribbon data and signed comparison. The prequotient braided branch supplies its category without an extra premise. No edit. |
| lem-ell-four-root-ising-gauge-and-chirality-conversion | Uses unchanged actual root quotient, path units, finite-R channels and signed comparison. FS/parity/gauge computations unaffected. No edit. |
| ex-temperley-lieb-ell-four-and-five-fusion | Substitutes unchanged truncated intervals at ell 4 and 5. No edit. |
| ex-temperley-lieb-order-three-root-boundary | Explicit two-dimensional planar trace computation; no abstract pivotal premise. No edit. |
| ex-su2-ell-three-modular-data and ex-su2-ell-four-modular-data | Instantiate unchanged actual modular data and label counts. No edit. |
| ex-ell-three-framing-anomaly-and-kirby-blowup | Uses unchanged ell-three category and weighted surgery data. Gauss sums/signature normalization unaffected. No edit. |
| ex-rt-genus-two-factorization-dimension | Uses unchanged ell-four S data/factorization to sum 4+2+4. No edit. |
| ex-ising-periodic-path-space-and-two-sector-map | Uses unchanged ell-four conversion and independently supplied positive-FS coherent category/periodic representation. No edit. |

These actual source arguments and affected supplier uses were read in the focused check; this is not a recursive audit of unrelated premises. Propagation stops because the direct consumer Statements/Definitions are preserved. The six page summaries describe actual planar/root/tilting/modular/Ising constructions, without the false unrestricted pivotal assertion; no prose repair is needed. All rich root/fusion/ribbon claims, pair identities and page lists remain.

## Integration packet

source-operations.json gives current raw guards and four isolated proposed source files: supplier and three exact consumer F replacements. contract-field-replacements.json gives exact guarded selected entries, new derivations and quotes. before-selected-contracts.json preserves original native open risk review and historical boundary annotations. cycle2-manifest-field-replacements.json supersedes the earlier manifest-row proposal and supplies exact title, full Statement, provenance, sources, dependencies, existing supplier checks and resolved-obligation field operations; root alone binds the actual integrated canonical source hash. The original full row remains in cycle1 proposal history.

proposed-ledger-successor.json retains the original row and conditionally appends a fatal/narrowed owner successor after actual integration. All proposed enums are supported by tools/defect-ledger.mjs. proposed-current-decision.json conditionally supplies its supplemental gate decision; root computes the actual resulting structured carrier hash. No prospective source seal or old native hash is supplied.

No canonical source/metadata/state mutation, gate, validator, stamp, publication, push or commit was performed. Root owns acceptance/integration, final dependency-ordered formatting/metadata checks, rehashing and the full genuine native battery. Approved 81 pairs/162 pages remain fixed; numerical-71 remains excluded.

Second/final focused cycle: cycle2-currency-and-no-cycle.json rechecks all four source-operation guards and every recorded consumer guard against current disk: all match. The finite-R lemma’s actual transitive dependency/justification closure (576 records) does not reach the repaired supplier, so adding it cannot create a cycle. Its full prequotient braiding Proofs3.1/4.1 were rechecked; no quotient conclusion is needed by F5. Existing three consumer qualifiers remain exact and no other source change is proposed. Root has already integrated the25 closed supplemental decisions; those historical decision-file guards are not reused for batch61.
