# frontier-29 — Step 8 adjudication, group b

## Summary

All 37 exact rejection tuples for batches 3, 13, and 14 were adjudicated:
19 confirmed_fatal, 14 confirmed_nonfatal, and 4 false_positive. Only the 19
confirmed-fatal items were edited. Each fatal tuple has one exact defect-ledger
owner, and all 19 repaired items are rejudge targets.

There were no incoming alerts, outgoing cross-group item findings, or published
item repairs.

## Sources consulted

- The Stacks Project, [Theorem 10.160.8](https://stacks.math.columbia.edu/tag/032A):
  the theorem assumes a complete local ring and supplies a coefficient ring;
  Noetherianity is needed only for its additional power-series quotient clause.
  This directly defeats the rejection of
  lem-coefficient-field-purely-inseparable-complete-step.
- The Stacks Project, [Section 10.160](https://stacks.math.columbia.edu/tag/0323):
  Remark 10.160.9 states that
  $k\llbracket X_1,\ldots,X_d\rrbracket$ is a Noetherian complete regular
  local ring of dimension $d$, and Lemma 10.160.11 constructs the finite
  regular power-series subring of a complete local domain. These support the
  two repaired parameter-subring arguments.
- The Stacks Project, [Lemma 10.153.3](https://stacks.math.columbia.edu/tag/04GG):
  the simple-root condition quantifies over $f\in R[T]$ and a simple root of
  its reduction, and is equivalent to coprime factor lifting. This supports the
  repaired quantifier/domain statement in
  lem-simple-root-form-recovers-factor-lifting.
- The Stacks Project, [Lemma 15.11.4](https://stacks.math.columbia.edu/tag/0ALJ):
  an $I$-adically complete ring gives a Henselian pair by successive compatible
  factor lifting. This confirms the ambient correction mechanism used on the
  Henselian page.
- The Stacks Project, [Theorem 7.10.10](https://stacks.math.columbia.edu/tag/00WB):
  the first plus construction is separated and the double-plus construction
  is a sheaf. This supports the repaired gluing and uniqueness argument in
  lem-second-plus-construction-is-sheaf.
- The Stacks Project, [Section 6.17](https://stacks.math.columbia.edu/tag/007X):
  topological-space sheafification is expressed through locally representable
  families of germs on open neighbourhoods. This supports the open-set
  corrections in the stalk/germ definitions and the local constructions in
  the étalé-space proof.
- The Stacks Project, [Sheaves on Spaces](https://stacks.math.columbia.edu/download/sheaves.pdf):
  the sheafification of the constant presheaf with value $A$ is the sheaf of
  locally constant $A$-valued functions. Thus the extra claim in the constant
  presheaf counterexample is true, although its local proof is incomplete.

## Exact adjudications

| item | context SHA-256 | outcome | basis and disposition |
|---|---|---|---|
| cex-constant-presheaf-not-sheaf-disconnected-open | fd3b966cfe65774c67f474ff0c34b5063e7e1c6bb7e09513012a090467b1e642 | confirmed_nonfatal | The non-sheaf counterexample is complete. The final sheafification identification is true by the consulted source but lacks its local map/universal-property argument; this is non-load-bearing proof polish, so no edit. |
| cex-nilpotent-polynomial-data-invisible-to-zero-locus | 51023d52dd5b7e883f5c3eef390a15ca2817a3f984eaeb8f12256c9e7519b800 | confirmed_nonfatal | $V(x)=V(x^2)$ and the two quotient computations are valid over every field. The cited lemma has a narrower algebraically closed-field interface, leaving only an immediately closable citation/domain gap; no edit. |
| cex-zariski-topology-not-hausdorff | 6b5ba864ac48356d2dcffac5569cdf92af861d1d0f0022c04fbc679c7c091904 | confirmed_nonfatal | The Zariski topology on the affine line over any infinite field is cofinite, so the counterexample is correct. Reusing the algebraically closed version without restating the root-bound proof is a local citation gap; no edit. |
| cor-artinian-local-henselian-via-nilpotent-maximal-ideal | 3aaa733990d398860d8683efdab553107b35f4eea4a0a48173b5204754781d7d | confirmed_fatal | Its load-bearing nilpotence theorem explicitly assumes Choice. Added Choice to the statement and Given block. Defect frontier-29-S8-b-001; rejudge. |
| cor-complete-local-domain-finite-over-a-regular-power-series-ring | 8ba06d45b45271f363a1a7c33d997f6dc8d4a8f95d029d815619d01857057ace | confirmed_nonfatal | The theorem is correct and its two direct parameter-map dependencies already supply the map used in the next step. Calling the system-of-parameters definition itself the source of that map is local citation polish; no edit. |
| cor-quotient-of-a-henselian-local-ring-is-henselian | 9cbac5d66dac4739776a555bd569e4f84b537615b3f9cbd63372d4f2624f0d4b | confirmed_fatal | $J=A$ produces the zero ring, which is not local here. Required $J\subsetneq A$. Defect frontier-29-S8-b-002; rejudge. |
| def-germ-of-section | c4ee5b65c212fa162149112ab0f2fbb6a68057556870e632159e623e5e8e12ae | confirmed_fatal | The final restriction used $\mathcal F(V)$ without making $V$ open. Restricted both assertions to open sets. Defect frontier-29-S8-b-003; rejudge. |
| def-open-set-category-topological-space | 7a3fd4b8ed65267f8256187b3b9ab02d0b868198100d4d497080200e31dbb2ab | false_positive | Transitivity of subset inclusion is an elementary derivation and the text explicitly uses it to define composition; no external dependency is required. No edit. |
| def-stalk-of-presheaf | 1aed637c183f5fe3c675ec9f0ca3a077351152de421e4497151868e963b74d5f | confirmed_fatal | Under the library's non-open neighbourhood convention, the concrete representatives and restrictions were ill-typed. Required open neighbourhoods throughout the concrete description. Defect frontier-29-S8-b-004; rejudge. |
| ex-cohen-presentation-singular-hypersurface | 8957f948e846ff0b05e29a152a614de8a06ea3f5042f47d33a755aca1e257670 | confirmed_nonfatal | The displayed quotient and its kernel are established directly and do not use Choice. The later sentence calling it an instance of the general Choice-qualified theorem abbreviates that theorem's scope but is non-load-bearing; no edit. |
| ex-complete-discrete-valuation-ring-henselian | f0d7976cd9b0049404b4796686e857146639994f4fad011ff503f83ed67d8957 | confirmed_nonfatal | The claim for $k\llbracket t\rrbracket$ is correct; formal order immediately gives $f=t^n u$ and hence the local-PID/DVR property. The cited DVR characterization does not itself establish that premise, so this is an immediately closable proof/citation gap; no edit. |
| ex-coordinate-cross-reducible | 2854b39144a7820f63afb0ce4116fbd4ac221c1f4d68b9b4cf31bd7e8b649a86 | confirmed_fatal | Without an algebraically closed/infinite base, the claimed coordinate ring can fail. Added the algebraically closed hypothesis and directly proved $I(V(xy))=(xy)$. Defect frontier-29-S8-b-005; rejudge. |
| ex-germs-of-continuous-functions | 9ad00d27d11668db5a5570bd90443c9a628ed8631a598147b81dde416547a83f | confirmed_nonfatal | Equal germs being witnessed on a smaller open neighbourhood follows immediately from the stalk equivalence relation behind the cited germ definition. The example and both conclusions are correct; no edit. |
| ex-hensel-factor-correction-mod-three-powers | cfac243a98206fa52cf59bcca50b3dd861fa3bcfd38b247dbb2116c091358b91 | confirmed_fatal | The old title promised three corrections although the computation has an initial lift and two corrections. Narrowed it to lifting modulo three successive powers. Defect frontier-29-S8-b-006; rejudge. |
| ex-parabola-is-affine-line | f05ead7d6392e1c3caef9e2e23589434b29a7ad3699e4771b462e04da189d243 | confirmed_fatal | Over finite fields the point-set vanishing ideal is larger. Added the algebraically closed hypothesis and proved $I(V(y-x^2))=(y-x^2)$ by monic division and infinitude. Defect frontier-29-S8-b-007; rejudge. |
| ex-punctured-affine-line-not-affine-closed-subset | efe35e4b643da886bf21b5f66cd11b2838b302fbea6fae41880be087321cf216 | confirmed_fatal | The old title falsely denied all closed affine embeddings, while the body proves only nonclosedness in the original line. Narrowed the title to “not closed in its ambient affine line.” Defect frontier-29-S8-b-008; rejudge. |
| lem-algebraic-set-finite-irreducible-components | 8d5e94708eaa1b38d20b7eac71cb23b4bbca4d98681e7aadeb563ac52ec0f85a | confirmed_nonfatal | Pairwise noncontainment alone does not prove irredundancy, but irreducibility of each component and closedness of the finite union of the others close the argument in one line; step 2.2 also proves maximality. No edit. |
| lem-coefficient-field-purely-inseparable-complete-step | 95f4db4595dd6a45db2eb51e0c8041716fbdcb74bcb727f4d0fca15e04c5bb0b | false_positive | The cited Cohen structure theorem really does state coefficient-ring existence for every complete local ring; Noetherianity is not a hypothesis of that clause. In the equicharacteristic case the coefficient ring is a field. No edit. |
| lem-coefficient-field-separable-adjunction-step | 4e84dda28ffbca7d3d147a2674ecbc46dd077b0f40edbf7d6abbc4ba3b2dd907 | confirmed_fatal | “Larger” was false when $\bar u$ already belonged to $\rho(K)$. Required $\bar u\notin\rho(K)$ and used it to prove strict enlargement. Defect frontier-29-S8-b-009; rejudge. |
| lem-coefficient-field-transcendental-adjunction-step | abe9e59dc3f4a3eae2b2503bf537a1c3a9dd5e567f522c14aae096dd372382b7 | confirmed_nonfatal | Steps 1.1–2.1 explicitly construct the residue-injective field extension. The final citation to the maximal-subfield existence lemma is interpretive and unnecessary, while the mathematical claim is correct; no edit. |
| lem-cohen-presentation-surjective-by-completeness | 4b20baae9bd4488406d818acbc143332793bd9ce10078824fd86c68c962a1947 | confirmed_nonfatal | The preceding dependency proves quotient-level surjectivity using homogeneous graded pieces, from which the displayed correction is immediate. Its Facts summary quotes the proof rather than the theorem interface, a local citation gap; no edit. |
| lem-cohen-presentation-surjective-mod-maximal-square | 9d8b770d3eab70a716e48664a70577301db8ec13d11aae37d0ee68d73fcd5e94 | confirmed_nonfatal | Powers of an ideal generated by the $x_i$ are elementarily generated by their degree-$r$ products. The cited Noetherian characterization does not state that elementary expansion, so the citation is imprecise but the proof closes immediately; no edit. |
| lem-formal-power-series-evaluation-unique-continuous-map | 5a99612d6aa6820ac91dd2fa741e3271d746daa207b6eca87bfb9d6fa8f300d6 | false_positive | The library definition makes “complete” include separatedness. Therefore limits are unique and the density argument is valid under the stated hypothesis. No edit. |
| lem-hensel-factor-correction-one-stage | cb673b5882ad7039e5174ec1133d00b51c3d9bf597907e73c75ab95c6fb217bc | confirmed_fatal | The two-division “absorption” was not justified. Added the necessary degree equality and replaced it by one monic division in $I^r/I^{r+1}$, with the second degree bound proved from the resulting equality. Defect frontier-29-S8-b-010; rejudge. |
| lem-hensel-factor-lift-uniqueness-induction | a511be31f947d7c5353f984652e437b15970f206b1c7ffead320ee5f9ad1a41a | confirmed_fatal | The claimed degree bounds failed at the allowed $I=A$ boundary. Required matching factor degrees and proved coefficient-class vanishing from Bezout invertibility modulo the monic factors. Defect frontier-29-S8-b-011; rejudge. |
| lem-parameter-power-series-map-injective-by-dimension | 219a5f129c3510565ea1e74add5fb736afe6221ab88ad35f2d5d3596c3f931b0 | confirmed_fatal | Its stated principal-ideal consequence was false for general Noetherian rings. The repair uses the exact dimension-$d$ power-series domain, prepends $(0)\subsetneq\ker\phi$ to prime chains, and contracts chains strictly along the finite integral injection; inherited Dependent Choice is explicit. Defect frontier-29-S8-b-012; rejudge. |
| lem-parameter-power-series-subring-makes-ring-finite | 2c9fdc9f95a13a087818d271803f819a9a83d3171a5d107dac25170a652cc691 | confirmed_fatal | Completeness of a source does not make an arbitrary image complete. Applied Complete Nakayama over the complete power-series source instead, proved the target module separated, and preserved the dependency's Dependent Choice scope. Defect frontier-29-S8-b-013; rejudge. |
| lem-second-plus-construction-is-sheaf | 887ce54bc1a27221725c9e1fdeb7af74a0e9cab7fb6b2a77bf693dcff6d4850a | confirmed_fatal | The old gluing step built an $\mathcal F^+$ section while claiming an $\mathcal F^{++}$ section. The repaired construction combines the local $\mathcal F^+$ presentations, verifies their cross-overlap germs and restrictions, and uses separatedness for uniqueness. Defect frontier-29-S8-b-014; rejudge. |
| lem-section-zero-if-all-germs-zero | f99b63d460b4c9a6525f3c9f8b46cdecf1228cb42705d7bda7031ae8d4289160 | confirmed_nonfatal | The witness-neighbourhood characterization comes immediately from the stalk equivalence relation underlying the cited germ definition. The theorem and proof are correct; this is a direct-citation omission only. No edit. |
| lem-simple-root-form-recovers-factor-lifting | c765992e636a3c54b880fcc08c185dd23fc61548e492831cedb2a76548cbcc76 | confirmed_fatal | A root of a residue polynomial cannot “lift over $A$” without binding its polynomial lift. The statement now quantifies over monic $f\in A[T]$, a simple root of $\bar f$, and a lifted $a$ with $f(a)=0$. Defect frontier-29-S8-b-015; rejudge. |
| lem-simple-root-to-coprime-factorisation | d61adf8537ca070b07b5b06e415ca878dd587a7fd42734dd08461a64f651bf3a | confirmed_nonfatal | Division by a monic linear polynomial and the factor theorem follow by an elementary coefficient recursion over a commutative ring. The definition citation does not state that recursion, but the gap is immediate and the claim is correct; no edit. |
| rem-classical-affine-register-limit | 3f044737836d29d02449006fe9964694a53d49fe6106c8b3d9ca0ede576a6252 | confirmed_fatal | Its statements about reduced affine algebras and visible maximal ideals are false over an unspecified base. Fixed the opening scope to an algebraically closed field. Defect frontier-29-S8-b-016; rejudge. |
| thm-affine-algebraic-sets-coordinate-duality | ca6c742deef2db6797af4e4cd0091711cba64c6d16dc863b18a0351326d8310e | confirmed_fatal | The old title promised a contravariant categorical match while the statement explicitly defers morphisms. Narrowed the title to the object-level correspondence proved here. Defect frontier-29-S8-b-017; rejudge. |
| thm-affine-nullstellensatz-correspondence | 10c58699f3e63d32e64eecf2f46050d7b4339a7f4d6a6fabd46e2770212e41de | confirmed_fatal | Its central radical equality uses a dependency explicitly qualified by Choice. Added Choice to the theorem and Given block. Defect frontier-29-S8-b-018; rejudge. |
| thm-regular-functions-on-affine-algebraic-set | ae27a71bfce6d973742bd5d2b3c3c68954400fa76ae6a60dc8feabe386a6a51e | confirmed_nonfatal | The reverse implication is step 1.1 and the forward implication is step 1.2; step 2.1 cites both before misstating that 1.2 alone is the iff. The proof establishes the theorem, leaving only local attribution polish; no edit. |
| thm-sheaves-as-local-homeomorphisms | e13afcd26dcc5f04119a10d5f41962e8d92fdd25b84b4e21f0d4cc6891ffa781 | confirmed_fatal | The old proof did not construct the étalé-space functor on sheaf morphisms and used stalkwise uniqueness as existence. Added the induced germ map, its continuity proof, the section functor on maps over $X$, and naturality of both quasi-inverse isomorphisms. Defect frontier-29-S8-b-019; rejudge. |
| thm-zariski-closed-sets-affine-space | dc99266fe66a1de7e003e12684c19a23612240cb029b276014290e5150a3e5f8 | false_positive | The cited definition explicitly states both $V(\varnothing)=\mathbf A_k^n$ and $V(1)=\varnothing$. The proof accurately invokes that convention. No edit. |

## Rejudge targets

1. cor-artinian-local-henselian-via-nilpotent-maximal-ideal
2. cor-quotient-of-a-henselian-local-ring-is-henselian
3. def-germ-of-section
4. def-stalk-of-presheaf
5. ex-coordinate-cross-reducible
6. ex-hensel-factor-correction-mod-three-powers
7. ex-parabola-is-affine-line
8. ex-punctured-affine-line-not-affine-closed-subset
9. lem-coefficient-field-separable-adjunction-step
10. lem-hensel-factor-correction-one-stage
11. lem-hensel-factor-lift-uniqueness-induction
12. lem-parameter-power-series-map-injective-by-dimension
13. lem-parameter-power-series-subring-makes-ring-finite
14. lem-second-plus-construction-is-sheaf
15. lem-simple-root-form-recovers-factor-lifting
16. rem-classical-affine-register-limit
17. thm-affine-algebraic-sets-coordinate-duality
18. thm-affine-nullstellensatz-correspondence
19. thm-sheaves-as-local-homeomorphisms

## Alerts and retained observations

- Incoming alerts: none.
- Cross-group item alerts raised: none.
- Published-item repairs: none.
- The Step-7 digest also recorded that the declared page prerequisites
  chern-and-pontryagin-classes-by-splitting-and-complexification-examples and
  plane-curves-local-intersection-multiplicity-and-bezout-examples have no page
  file under library/. They are page/scope observations rather than defects in
  an item owned by another Step-8 group, so this dispatch did not write a
  cross-group item alert or change scope. The current Step-8 scope checker
  accepts the rendered partition.

## Checks and blockers

- Exact group-b join: 37/37 rejection tuples answered, with 19 fatal,
  14 nonfatal, and 4 false-positive outcomes.
- Exact fatal linkage: every one of the 19 fatal tuples has exactly one
  frontier-29-S8-b-* defect-ledger owner.
- Focused precheck: all 13 repaired proof-bearing items pass.
- Focused render check: all 19 repaired files pass YAML, delimiter, and KaTeX
  validation.
- Content policy: 115 scoped group-b items, 0 errors and 0 warnings.
- Dependency check: exit 0; 375 standing warnings.
- Boundary audit: 664 rows checked; no contradicted disposition.
- Defect-ledger validation and exact adjudication linkage: 476 current
  frontier-29 rows, 0 errors.
- Step-8 scope check: exit 0; seven groups, 755 items, zero open rejections,
  and zero cross-group alerts.
- Step-8 guard: pass; all 126 whole-run changes are licensed, including the
  exact pre-edit guard hashes for all 19 group-b repairs.
- Strict proof-contract diagnostics pass batch 13 but report 12 stale entries
  in batch 3 and 20 in batch 14 after the material repairs. Citation fidelity
  likewise reports two old statement quotes. These are documentary post-repair
  synchronization inputs for the engine-owned Step-8 preflight; this
  adjudication task did not rewrite contract artifacts.

There is no unresolved group-b rejection or mathematical repair blocker.
