# Step 3a adjudication — batch 4

Run: `frontier-44-special-representation-examples-28-six-step`; group `batch-4`. Review follows the generated dependency order. Published carriers are read-only. Decisions are local mathematical adjudications; no judge, stamp, gate cycle, engine transition, publication or push.

Initial risk-report: 34 routed items, 33 HIGH/CRITICAL and one MODERATE; 0 mechanical errors. Scope: 12 touched, 12 reader and 8 refuter obligations, no page obligations.

## `def-well-order`

Read the entire Definition and Remarks, def-partial-order, def-chain, thm-nat-linear-order and thm-well-ordering-principle, and Marks §3, printed pp. 15–17. Weak/strict presentations agree by totality and antisymmetry; empty and singleton relations are unique. For a descending sequence, its set of terms has a least term x_n but contains x_(n+1)<x_n. This is the forward, choice-free implication and uses no dependent-choice converse. The natural model has both totality and the nonempty least-element property. No carrier defect found.

reader:4:7 and refuter:4:4 are confirmed_fatal citation inaccuracies in the contract, repaired by replacing the nonexistent DC comparison with the actual forward least-element argument. Published carrier unchanged.

## `def-initial-segment`

Read the complete Definition and Remarks and the already-reviewed def-well-order. An inherited total order remains a well-order. For I proper, a=min(W\I) is outside I: all x<a lie in I, and x in I cannot equal or exceed a by downward closure. Uniqueness follows because a<b would put a in its own strict predecessor set. Empty W has no proper segments; singleton W has only the empty proper segment. Nesting is restriction of the same relation. Marks §3 printed p.16 uses the strict predecessor convention; the local definition also permits W itself, explicitly.

reader:4:8/refuter:4:5 confirmed_fatal: contract evidence had a in I instead of a outside I. Corrected the contract; published Definition and proof prose unchanged.

## `def-order-isomorphism`

Read complete Definition/Remarks, def-injection-surjection-bijection and def-ordered-pair, with the already-reviewed order suppliers and Marks §3 p.15. Reflection plus antisymmetry proves injectivity; surjectivity yields the inverse. The antichain-to-chain bijection preserves weak order but fails reflection. For total orders a strictly increasing bijection reflects order by trichotomy. Well-ordering transfers through nonempty preimages; initial segments transfer by reflection and surjectivity. Empty-to-empty has one isomorphism, while exactly one empty carrier admits none. Checked both directions of the correctly typed condition x<=_P y iff f(x)<=_Q f(y). No carrier defect.

The single composite reader finding and its two refuter components confirm fatal contract inaccuracies (false empty-carrier assertion and corrupted defining quotation). Both rows corrected; one closed composite defect records the reader's exact combined obligation and all overlapping reports. Published body unchanged.

## `def-ordinal`

Read the full Definition and Remarks, def-natural-numbers, lem-nat-transitive-irreflexive and Foundation, plus Marks Definition 4.3 and Lemmas 4.4–4.5 (printed pp.18–19). Transitive set and transitive restricted membership relation are different requirements; the displayed nested-singleton witness correctly separates them. Empty ordinal satisfies both clauses; the least-element property is required explicitly, so Foundation is unnecessary for the definition. Members are smaller ordinals using ordinal-basics, not mere transitivity alone; the natural/omega assertions are explicitly deferred to lem-omega-least-limit-ordinal. Checked empty well-order class exception already present. No routed decision and no current defect.



## `thm-well-ordering-implies-ac`

Read all five steps and Remarks and the exact choice-function/AC definitions, well-order definition and natural minimum theorem. Union supplies U, a single existential well-order witness suffices, and Separation on F×U yields the uniquely determined minimum function. Every set in F is nonempty; F itself may be empty and yields the empty function. No arbitrary-index simultaneous choice is smuggled into fixing one order. The stated one-way implication is correct and the converse is explicitly a separate theorem. Contract quotations and uses agree. No routed decision or defect.



## `cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order`

Read all ten proof steps, fact block and source locators; opened every cited supplier (integer definition, operations, ordered-ring/commutative-ring proofs, natural embedding, Peano system, Cartesian product and ordered pair). Irreflexivity, transitivity and both trichotomy directions follow by the displayed coordinate cases. The nonempty column {0}×Z has explicit smaller member (0,n-1) for every n, including zero. The proof derives 0<1 and -1<0 from the exact ring/order interfaces and uses no AC. Marks Exercise 5.9 (printed p.25) is explicitly limited to ordinal products; Moore §14 (printed p.35) actually supplies the integer construction. Current item bytes equal the frozen reader-post hash; the reader's removal of unsupported source assertions is mathematically accepted. Regenerated contract derivations to preserve the complete step 1.5 despite internal [F3]/[F4] references.

amended_repair: retained the reader carrier exactly; synchronized truncated contract extraction. Source statements are now accurately limited to their actual subjects. No Statement/Definition interface change by Alpha; no consumer repair triggered.

## `lem-ordinal-basics`

Read every claim (a)–(g), all nine steps and Remarks; exact cited ordinal/well-order definitions and natural-transitivity supplier already read. Independently traced (a) via two transitivities, (b) via restricted irreflexivity, strict-inclusion=>membership via min(beta\alpha), successor closure including last point, nonempty intersection by one member, comparability via the ordinal intersection, then union by comparability. There is no circular appeal to later trichotomy. For union, a member delta meeting S supplies the least element of S∩delta; totality and downward closure make it least in all S. Empty union is zero; empty intersection is expressly excluded. Both directions of (f), equality and successor endpoints checked. Marks §4 printed pp.18–21 agrees. Contract citations/uses and boundary cases checked; no routed decision or defect.



## `thm-transfinite-induction`

Read all six steps and Remarks against def-well-order and def-initial-segment. A nonempty complement has a minimum a, whose predecessors lie in S; the hypothesis gives a in S, contradiction. The condition includes the minimum, so it supplies the base automatically. For W empty, S=W follows from S subset W. No Foundation, AC or simultaneous choices are used; property form is the Separation schema for a definable property. Checked all contract citation/use rows and the exact one-directional statement. No routed decision or defect.



## `thm-well-ordering-theorem`

Read all ten steps and Remarks, complete thm-zorn and the upper-bound/maximal-element definitions; previously read order/chain/initial-segment/AC suppliers. The set of partial strict well-orders is bounded by the stated power sets. End extension is a partial order; a chain union is total/transitive because finitely many points lie in a common member. For S nonempty, any member meeting S supplies a least point, and end extension prevents subsequently introducing a smaller point. Empty chain has the empty pair as an upper bound. Zorn applies exactly at 7.1 under AC. If M omits x, adding a greatest point gives a strict end extension, contradicting maximality. Empty/singleton X and both weak/strict order typings checked; no current carrier defect. Contract endpoints terminology normalized from lower bound to upper bound.



## `ex-an-explicit-well-ordering-of-the-integers`

Read all ten steps and exact cited suppliers, including absolute-value definition/properties, natural order and Separation. Equal positive absolute values force opposite signs; this proves trichotomy and rules out two consecutive tie comparisons in transitivity. The nonempty absolute-value index subset K of N is separated, then its minimum m determines a canonical member: zero at m=0, otherwise positive m if present and -m otherwise. Computed predecessor sets at 0, 1 and -1 and for either sign. The usual integer order has explicit n-1 descent. Reader's F12 correction is sound: Separation, not Replacement, is exactly needed. Reader's final conclusion correctly calls only the explicit order a well-order. All intended claims retained and choice-free. The Marks §3 text was read completely and contains no claimed Z/R non-well-order remark; corrected that remaining locator to §3's actual subject and marked the integer claims locally verified. Contract regenerated to retain full claims despite internal fact labels.

amended_repair. Alpha changed only the Marks source locator, not the Example or proof. No judge record was present; Statement/Definition consumer trigger is absent. Reflow/precheck and final proof-layout are scheduled for this one changed item after all final edits.

## `cor-ac-iff-well-ordering`

Read all five proof steps/Remarks and cor-ac-iff-zorn, with both well-ordering implications and AC already reviewed. Logical transitivity gives the three equivalences over ZF, without proving any of the principles outright. The globally quantified principles include empty-family/order cases through their suppliers. No claim about weaker principles or independence is inferred from equivalence. Contract citations match the exact implications; no routed decision or current defect.



## `lem-ordinal-trichotomy`

Read the complete proof/Remarks and all five cited suppliers, including ordinal-basics (f),(g). Inclusion comparability supplies at least one alternative; ordinal irreflexivity and transitivity rule out each competing pair. For nonempty A, fix one alpha; either alpha∩A is empty or its minimum is least in all A. Inclusion is an ordinary partial order and its strict part is membership by (f). Empty A is vacuously well ordered even though it has no least element; the Statement explicitly includes every set. Definable-class leastness is bounded by alpha^+ and Separation, not arbitrary comprehension. Marks §4 pp.18–20 agrees. Corrected the contract's exclusion of the empty well-order.



## `lem-well-order-rigid`

Read all eight steps/Remarks and exact well-order, initial-segment and isomorphism interfaces. If f(m)<m at the least bad m, monotonicity makes f(m) a smaller bad point. This proves (a), rules out a map onto a proper predecessor segment at its endpoint, then applied to a bijection and its inverse proves rigidity; h^-1 g proves uniqueness between two orders. Empty W has its unique empty automorphism and no proper predecessor segment; singleton is immediate. No family selection is used. General-poset caveat checked against the two-point antichain. Marks Lemmas 3.2–3.5 pp.15–16 give the same arguments. Contract uses and boundaries checked; no routed decision or carrier defect.



## `thm-transfinite-recursion`

Read all fifteen steps and complete Remarks, with all three suppliers already reviewed; also Marks Theorem 5.3 and proof p.23. G is a formula defining a unique set output for every history with proper initial-segment domain. Induction proves agreement of attempts on overlap. Separation defines T; under predecessors in T, Replacement collects the uniquely defined one-point extensions, whose compatible union has exactly W_<a as domain and satisfies the same recursion. Induction yields all attempts; a second Replacement/Union produces F on W, including empty W. Every restriction passed to G has the required proper domain, including at the greatest point. Uniqueness never selects among candidates. Checked Replacement, Union, set/class distinctions and exact citation/contract inputs; no routed decision or unmet prerequisite. Some ancillary contract locators are normalized to actual step ranges.



## `cex-transfinite-induction-fails-when-the-minimum-is-exempted`

Read all six steps, complete Statement/facts and all eight cited suppliers; opened lem-nat-order-is-membership fully and Moore Theorem 3.5 p.7, with Marks Theorem 5.1/Exercise 5.2 p.23 already read. Omega is well ordered with minimum zero and W_<a=a. For nonzero a, zero belongs to the predecessor set and is missing from S, making the implication vacuous; at zero the premise is true and conclusion false. S differs from W explicitly, so the restricted principle is refuted. Empty predecessor set, excluded endpoint and no-choice status checked. Carrier pre/post bytes are identical; only reader contract locator/use enrichment is routed. Regenerated source-use rows, including the omitted F2 use at 1.2. No mathematical defect in the carrier.



## `def-limit-ordinal`

Read complete Definition/Remarks against ordinal definition, basics and trichotomy. Zero, successor and nonzero nonsuccessor are disjoint and exhaustive. A successor has its predecessor as greatest member; union equals that predecessor. For a nonzero nonsuccessor, every xi in alpha has xi^+ in alpha by trichotomy and exclusion of equality or reverse membership, proving union alpha=alpha. Conversely a successor cannot equal its own union, and successor closure rules out a greatest member. Empty ordinal excluded explicitly; 1=0^+ checked. Marks Definition 4.17 includes zero as limit, while the local convention excludes it and Moore §3 agrees. Contract annotations inspected; no carrier defect or routed decision.



## `fs-transfinite-induction-needs-choice`

Read all five Refutation steps and complete introductory/Remarks prose; exact induction, recursion, AC, Zorn and well-ordering proofs already read. The refutation is entirely the two supplied ZF proofs, with Replacement for recursion. Step 3.1 distinguishes a supplied total functional formula from the cost of obtaining its parameters, including a choice function. Read Marks §8.1 pp.37–38 and the cited SEP dependent-choice paragraph: AC=>DC=>countable choice, non-reversible in the usual relative-consistency sense. The published DC separation paragraph explicitly assumes consistency of ZF and labels the results external/non-load-bearing; no independence/model proof is claimed by this review. Actual class-function cost is at 3.1, not 1.1/1.2. Corrected both stale contract descriptions; published body unchanged.



## `lem-well-order-comparability`

Read all twelve steps and complete Remarks; exact rigidity, isomorphism and initial-segment suppliers already read, and Marks Lemma 3.6/proof p.16 independently checked. Separation defines matched predecessor pairs. Rigidity gives function/injection, restriction proves downward closure and monotonicity, and both domains proper would make their excluded endpoints match, a contradiction. Three remaining configurations yield the Statement; compositions/restrictions prove exclusivity and uniqueness. With V empty, W nonempty, the unique map has range empty=W_<min W>, hence alternative (ii), not (iii); both empty give (i), and W empty, V nonempty gives (iii). No arbitrary selection is required. Repaired the false contract witness/case, preserving the published proof.



## `thm-burali-forti`

Read all five steps and Remarks and exact ordinal/basics/trichotomy suppliers. From an alleged set X containing every ordinal, Separation forms Omega with exactly ordinal members; element closure gives transitivity, and trichotomy plus leastness gives a strict well-order. Thus Omega is itself ordinal and in itself, contradicting ordinal irreflexivity. This proves the stronger no-containing-set statement, with no AC or Foundation reliance. The allegedly empty containing set is impossible already because zero is an ordinal; no nonempty bound assumption is hidden. Marks Exercise 4.13 p.20 and Moore Corollary 3.4 p.7 checked. Contract uses/boundaries agree; no routed decision or defect.



## `thm-mostowski-collapse`

Read all eight steps and Remarks against all nine declared suppliers. G(h)=ran(h) is a total set-valued definable rule; recursion supplies F. Induction makes every F(a) a transitive set of ordinals; ordinal trichotomy well-orders it. Membership preservation is by the recursion equation, reflection by the two contrary order cases and ordinal irreflexivity; trichotomy also gives injectivity. Replacement gives the range ordinal, including empty range=0 and a one-point input of order type 1. Uniqueness of range ordinal uses rigidity against a proper initial segment. For W already an ordinal alpha, id_alpha satisfies id(a)={b:b in a}; recursion uniqueness at 1.1 therefore proves identity directly. The contract wrongly attributed this case to 3.1/5.1. Read Moore Theorem 6.1/Corollary 6.2 p.14 and hierarchy Theorem 6.5/proof p.15: V_(omega+omega) is the cited Zermelo model and a rank-bounded relation on omega can have order type omega·2. No unproved model result is used in the collapse proof; no whole-model reconstruction is claimed. Corrected ordinal-input contract evidence; published carrier unchanged.



## `cex-the-shift-is-a-nonidentity-order-automorphism`

Read all seven steps, facts and both cited source passages, with all eleven deps already independently opened. Integer translation preserves and reflects strict order by adding its inverse; the +1 shift is bijective and has no fixed points because 1!=0, and the -1 shift is strictly increasing with every image strictly below its input. This refutes both specified rigidity extensions to total orders. The witness set is nonempty Z and all downward-moved points form Z with no least element; empty/singleton total orders are not alleged counterexamples. Source correction to Moore Corollaries 6.2–6.3 and §14 is accurate; Marks Lemmas 3.2–3.3 are the intended contrast. Reader-post item hash unchanged. A focused contract check found an omitted internal step-1.3 input in 3.1; regeneration synchronized that mechanical audit record, without a mechanical-defect ledger row.



## `fs-ordinals-form-a-set`

Read the entire current published Refutation/Remarks, exact archived step 1.2 and cardinal paragraph, and owning local repair report/receipt. Reviewed ordinal-basics, trichotomy, Burali–Forti and the current Hartogs proof; opened cardinal Definition as prerequisite context for the new remark. The historical endpoint inference fails at {gamma}; the current text correctly separates inside gamma^+, including gamma. The historical cardinal-unboundedness assertion had no supplying argument. Current H=aleph(alpha) is above alpha because H cannot inject into alpha; each beta<H does inject, so no such beta is equinumerous with H. Thus H is initial and above alpha. A putative set of cardinals has ordinal union bounding them, contradicting this construction. Refutation itself remains Burali–Forti, with no AC. Both historical findings are confirmed_nonfatal and the owner's existing repairs fully justify closure; Alpha made no published edit. Regenerated exact current L2/derivation evidence, reconciled manifest new Hartogs/cardinal edges and corrected fs dependency level to 7. The generated order's legacy level-5 position was retained for adjudication; actual added suppliers were opened independently as prerequisite context before closing this review.

Closed reader:4:5/6 separately against the durable before archive and current repair receipt. Original Statement is unchanged. Historical defects remain true; no claim that their counterexamples refute the current successor-bound text. Current canonical receipt hash 2ff1ddc944146cf656ffd5c581cbc67358558caf3e922cbf28a38210f18275d0. Published A-R records already exist; ledger annotation will retain this bounded disposition. No new downstream interface change.

## `lem-omega-least-limit-ordinal`

Read all nine proof steps and complete Remarks; opened the six remaining natural suppliers in full: smallest inductive set, induction, nonzero-successor, discreteness, trichotomy (including its step 1.3) and left additive identity. All other exact suppliers already read. Natural order algebra gives m<=n iff m<sigma(n); induction proves omega transitive and membership=order in both directions. Well-ordering of N is used exactly at 3.1/3.2 to show finite naturals and omega are ordinals. Inductiveness plus ordinal irreflexivity excludes omega being a successor; every ordinal below omega is zero or a natural successor, so arbitrary limit gamma must be >=omega by trichotomy. Zero/equality/successor boundaries and nonzero-limit convention checked. Infinity supplies omega; no AC is used. Marks 4.17–4.24 pp.20–21 agrees after translating its zero-limit convention. Repaired the wrong contract least-element locations; published proof unchanged.



## `thm-hartogs`

Read all eight steps and full Remarks with the seven exact suppliers already reviewed. Power Set/Separation form all pairs (S,R); unique ordinal types and Replacement form H. Restricting an isomorphism to a predecessor segment proves downward closure, hence H is an ordinal. Each member injects into A; an injection H->A would transport membership to a well-order of its image and force H in H. Thus H fails to inject while all smaller ordinals do; trichotomy proves leastness. With A empty only the empty well-order contributes, so H={0}=1. Zero does inject via the empty function, while 1 does not. Singleton A gives H=2. Marks 9.6/proof pp.39–40 and Moore 6.6/proof p.16 were read; no AC is used to choose a well-order of each subset. Corrected the false empty-case contract and its ancillary endpoint wording; published theorem/proof unchanged.



## `cex-the-collapsing-recursion-has-no-solution-on-the-integers`

Read all eight steps and complete Statement/facts, opening the remaining Replacement and function definitions. Strict natural successor gaps transport through the injective order-preserving integer embedding; negation reverses them. The recursion equation would give x_(n+1) in x_n along the explicit negative-integer sequence. Replacement collects S, and Foundation gives an element x_m disjoint from S, contradicted by x_(m+1) in x_m∩S. No distinctness of values is assumed, and no dependent choice is needed to form this explicit sequence. Both total-order weakened principles are refuted without invoking either on the non-well-order. Moore Theorem 4.1/proof pp.9–10 and Corollary 6.4 p.14 supply only the forward well-founded recursion/rank facts; no iff is now claimed. Marks §6/§7 definitions and Exercise 2.5's finite-cycle statement checked as background, with the infinite Foundation contradiction proved locally. Reader-post carrier retained; regenerated exact contract use/derivation records.



## `ex-lexicographic-orders-on-products-of-naturals`

Read all eleven proof steps, complete Example/facts, and the remaining ordered-pair equality theorem in full; all fifteen dependencies now opened. Checked irreflexivity, each transitivity case and both trichotomy directions under first-coordinate priority. Nonempty subsets have a least occupied first coordinate, then a least second coordinate in that fibre. Predecessors of (1,0) are the whole zero column, and n->(0,n) preserves/reflects order and is bijective. Comparability excludes an isomorphism of N onto all W and makes the endpoint unique. Least-counterexample induction computes F(0,n)=n, including n=0; then F(1,0)=omega, lying in the range ordinal. No formula for F(1,n), n>0, is claimed. Reader's corrected reversed alternatives, well-formed projection and computation scope are sound. Marks Exercise 5.9 p.25 uses opposite coordinate priority, explicitly translated by swapping; Moore §5 opening p.11 is only background, accurately qualified. Reader-post bytes retained; regenerated full contract claims and all actual internal fact-use locations.



## `ex-the-mostowski-collapse-of-a-finite-chain`

Read all six proof steps and complete Example/facts against all six already-opened suppliers. Pairwise distinct chain labels are essential and stated. Each nonempty subset has its first listed element. Predecessor lists yield the four collapse values 0,1,2,3, whose range is ordinal 4 by successor closure. Checked all six forward comparisons, six reversed comparisons and diagonal non-membership (ordinal irreflexivity); bijectivity follows from distinct values. A competing solution has the same four values by sequential evaluation, so uniqueness is direct rather than an unjustified arbitrary-solution application of isomorphism uniqueness. Empty predecessor at d and both endpoints checked. Marks Lemma 4.15/Definition 4.16 and Moore Theorem 6.1/Corollary 6.2 are accurately labeled after the reader repair. Current item matches reader-post; regenerated contract internal uses and retained the finite-collapse smoke assertion for focused verification.



## `ex-the-one-point-extension-of-a-well-order`

Read all thirteen steps and full Example/facts, opening def-equinumerous in full; all other thirteen dependencies already reviewed. The new point is outside V and above every old point. Trichotomy/transitivity follow by the old-point/new-top cases; leastness splits on meeting V, including V empty. Identity identifies the proper predecessor segment, giving the unique comparability witness and ruling out V≅W. For V=omega, g(top)=0 and g(n)=sigma(n) is bijective by injectivity, nonzero successors and surjectivity onto nonzero naturals; greatest-element preservation rules out order isomorphism. Least-counterexample evaluation gives F(n)=n, F(top)=omega and range omega^+. Reader corrected 1.2's reversed comparison and Marks 4.17's type; both are sound. Alpha narrowed F11's supplier quotation from every set to every ordinal, the actual domain of def-ordinal; its sole use is alpha=omega, proved ordinal via the collapse itself, so no Example/Definition consumer change. Marks §5 p.25 does contain the noncommutative 1+omega example; its source locator was retained. Contract regenerated, including the formerly missing F6 use in 1.6.



## `def-cardinal`

Read the full published Definition/Remarks earlier as an actual prerequisite of fs-ordinals-form-a-set; now completed the risk review after all named suppliers, including the full pigeonhole proof (claims 3/4), were independently opened. Cardinalhood is the choice-free absence of smaller equinumerous ordinals. Under AC, one well-order gives alpha~X; Separation inside alpha^+ supplies a nonempty candidate set and its least kappa. Trichotomy proves kappa is least among all ordinal representatives, hence independent of the starting order. Checked X empty (cardinality 0), finite cardinals, omega, the explicit omega^+ shift, and the distinction between ordinal successor and successor cardinal. The durable archive's claim that an equinumerosity class never forms a set is false for empty X. Current owner's fix correctly separates the exception {empty} and, for nonempty X, replaces one fixed a by every y outside X; union of a putative set of representatives would contain every ordinal, contradicting Burali–Forti. No simultaneous selection occurs. Added Burali–Forti dependency reconciled in the manifest; original Definition is byte-identical to the before archive. Current published carrier remains read-only; canonical repair hash 48e0d5800771a88910b6974d1bcb9b5812f712336ee318ed862a1fbae15cad63.

reader:4:1 remains confirmed_fatal historically, and the existing owner repair is complete after independent current review. No new published edit or original Definition change. The prior A-R classification and exact before/receipt evidence remain intact.

## `cex-a-set-of-ordinals-that-is-not-transitive`

Read all eight proof steps and complete Statement/facts, with all seven suppliers already reviewed. A={0,1,omega} is well ordered by restricted membership, but 2 in omega in A and 2 outside A proves nontransitivity; 2 differs from 0,1 by its members/irreflexivity and from omega by successor versus limit. Reader's converse B={0,1,{1}} has each member a subset of B, so is transitive, yet 0 and {1} are distinct and membership-incomparable. B need not be a set of ordinals: it is exactly the independent witness for the two general clauses of ordinalhood, while A refutes the narrower set-of-ordinals assertion. Zero/equality/nested-membership domains checked; no AC is involved. Marks Definition 4.3/Exercise 4.1 and Moore §3 match the stated clauses. Reader-post item retained and contract regenerated. Reader report's interface change in added independence witness is sound; source scan finds no active item consumer of this B-item ID, and its page summary remains compatible.



## `ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega`

Read all four verification steps and complete Example/facts, checking all six suppliers already reviewed. Successor closure proves 0–3 ordinal and their exact predecessor comprehensions; the comprehension variable is an ordinal under the displayed ordinal convention. Transitivity of omega gives union omega subset omega; inductivity gives n in sigma(n) in omega for the reverse. Natural zero/successor classification excludes limits below omega, and omega's leastness is the exact supplied theorem. Empty zero predecessor and nonzero-limit convention checked. Marks Definition 4.17, Lemmas 4.18–4.23 and Exercise 4.24 are accurately identified, with its inclusion of zero as limit explicitly translated. Moore §3's successor/limit discussion uses the local nonzero convention. Reader-post item unchanged; regenerated full contract derivations/citation use audit records. No interface or consumer repair required.



## `ex-the-hartogs-number-of-a-finite-set`

Read all six steps, complete Example/facts, and full Schroder–Bernstein proof, with all other thirteen suppliers already opened. Transporting an injection into A gives its image a well-order of the domain ordinal's type. Given A~n, alpha injects into A iff alpha<=n: the forward proof excludes an ordinal above n via Schroder–Bernstein and finite/omega pigeonhole alternatives; the reverse uses inclusion. Both directions include n=0 (only zero injects), n=1 and alpha=n. Therefore H consists exactly of ordinals <=n and equals n^+. Reader title/final-step correction correctly refers to successor of the finite size, rather than successor of arbitrary A. Alpha made transported relation's variable domains explicit (xi,eta in alpha), and restored the ordinal predicate in 3.1's quotation of 2.1: without it {alpha:alpha injects into A} denotes all dominated sets, not Hartogs' ordinal set. All intended mathematics retained. Proof-only repairs change no Example/Definition interface; no judge was present. Contract regenerated; focused format checks pending final batch.



## `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal`

Read all eight verification steps and full Example/facts; opened def-countable and the full subset-of-countable proof. Countable means finite or equinumerous with omega, not only countably infinite. An ordinal injects into omega iff at most countable: one direction uses its image subset and the choice-free enumeration proof; the other transports finite inclusion or a supplied bijection. Transported well-orders characterize H as exactly countable ordinals, with ordinal predicate essential. Omega itself injects by identity, so omega in H and H nonzero. If H=alpha^+, an injection alpha->omega can be shifted by sigma, reserving 0 for the new alpha point, giving an injection H->omega, contradiction. Domain disjointness uses alpha not in alpha; zero-predecessor case works as well. Thus H is an uncountable nonzero limit above omega, without asserting regularity or uncountable cofinality in ZF. Reader's restored ordinal predicate and corrected zero/successor/limit split are accepted. Alpha added explicit xi,eta in alpha bounds to the transported relation; no Example/Definition change or new AC use. Marks 9.4/9.6 pp.39–40 and historical Moore §7 cardinal/countability paragraph p.18 checked. Full contract regenerated.



## `rem-choice-ledger`

Read the entire ledger prose, full basis-existence corollary, basis-extension theorem, Bourbaki–Witt, countable-choice and dependent-choice definitions; all remaining fourteen deps already independently read. The ledger reports the three local equivalent formulations without inferring independence. Full AC is used exactly in Zorn's simultaneous strict-upper-bound selection and the basis extension's Zorn application; empty chains receive explicit bounds. Bourbaki–Witt's supplied admissible-chain result makes its fixed point proof choice-free. Countable choice and DC are distinct input principles, with DC allowing repeated sequence values and a prescribed start; ledger asserts no unproved converse or lower bound. Hartogs/comparability are choice-free on given sets/well-orders; arbitrary ordinal cardinality requires well-orderability. Checked current exact source interfaces, contract boundaries and the cited SEP qualifications. No current carrier defect, no routed decision and no new consumer repair.




## Frozen comparison and current carriers

Every touched item was compared against its pre/post raw item, contract and manifest hashes. Eleven item carriers changed in the reader pass; the omitted-minimum counterexample changed only its contract. Alpha retained eight touched carriers byte-for-byte and edited four draft carriers. All touched decisions are `amended_repair` because the exact current contract claims/uses were synchronized, except the contract-only omitted-minimum enrichment, which is `reviewed_no_defect`/`audit_enrichment`. No Statement, Definition or Example interface was changed by Alpha. No current judge records existed in the four edited draft carriers. Published carriers are unchanged by Alpha; their existing before archives/repair receipts distinguish the true historical findings from the corrected current bytes. No unbound observation or in-run producer finding is routed in this batch.

| Item | Pre raw SHA-256 | Reader-post raw SHA-256 | Current raw SHA-256 |
| --- | --- | --- | --- |
| `cex-a-set-of-ordinals-that-is-not-transitive` | `77fa11fbfaa685a7f7435fcd0474bd473037d9b9252d486e3f2603c38a6e7e7f` | `809def134fd253bd513afb03c0f190cc0994fe23f10c0c2e7effe60698ca417d` | `809def134fd253bd513afb03c0f190cc0994fe23f10c0c2e7effe60698ca417d` |
| `cex-the-collapsing-recursion-has-no-solution-on-the-integers` | `3fd78922cc808e51fa78ae4b9eb7cde166841be5dd49833157e668358179f8a8` | `8cdded872bc851ba21b694b5493768ead8ad4619b762637dd6f4a906345ff8af` | `8cdded872bc851ba21b694b5493768ead8ad4619b762637dd6f4a906345ff8af` |
| `cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order` | `19d56afbcdfa40454d491f0b1da9ea317fbbe2c7b8c5a7901a4cb41336920c83` | `0fd5a69b5148edbeb8abc961fbc9fc67d6937e3b005587b73861d49b31841fe9` | `0fd5a69b5148edbeb8abc961fbc9fc67d6937e3b005587b73861d49b31841fe9` |
| `cex-the-shift-is-a-nonidentity-order-automorphism` | `7175d49fcaaabd58123410345b41b50f77ee65f768d1b4d4d3b89146a4dfdada` | `fabb99170d0beee10e1c691994a295835dd3f86c8648fd19bd90290718e7d4c9` | `fabb99170d0beee10e1c691994a295835dd3f86c8648fd19bd90290718e7d4c9` |
| `cex-transfinite-induction-fails-when-the-minimum-is-exempted` | `9fbbe8ab47ade7909ae8212d65041bf676aa38d1d85fc595568b729da445898e` | `9fbbe8ab47ade7909ae8212d65041bf676aa38d1d85fc595568b729da445898e` | `9fbbe8ab47ade7909ae8212d65041bf676aa38d1d85fc595568b729da445898e` |
| `ex-an-explicit-well-ordering-of-the-integers` | `6eadb80a615a5ddaa203d60d8f9c3c626b6f63c124466ff4b696889c43037df5` | `bf39f21b924ac3c3f021d2eb3a7537c2b1b3fa965b8d9880934d0452d164c58d` | `7a70f373eaba9fbbb7e7efbeb36b9e664338eb52ee327a5107347a2e63c694c3` |
| `ex-lexicographic-orders-on-products-of-naturals` | `95abfea7ffe5129ea2ae72bb36facaac19f4553aa6bf531c1a3aedfdabc4a090` | `2d1e2bae0827738b86d2cafbb33dd5e04a0fe56fd1a4ca114c8fe0b8cc8403c1` | `2d1e2bae0827738b86d2cafbb33dd5e04a0fe56fd1a4ca114c8fe0b8cc8403c1` |
| `ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega` | `6bde3444cd50e15d92b1b730b243b828592f778fbf26d2271f35c52ad3d6cb1d` | `5041fc53c065ef51ab29a5b76a8c4deaae0cba6aad900a7e7213e576a2e86899` | `5041fc53c065ef51ab29a5b76a8c4deaae0cba6aad900a7e7213e576a2e86899` |
| `ex-the-hartogs-number-of-a-finite-set` | `9fe031ffb972a411b82be3bcfcb7449360027fba1a9c3be5a047624e47242bf4` | `d91b54e5c642277582e12075fb6f0edeeae17462e47762e7e55f5a3cd3f1731b` | `9a3703026e2cd3c7f149092ae60fbd04d39307fc5ef802d3651f7e3af432253b` |
| `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal` | `f1901e6e8655fbca42b64e9a010a7d4585207faaa978b4166628015b1bd5d7ef` | `537628f19e8c7c583f277c0bc6ef8831f3ad4da682b7fee61bc0dd251f41d63c` | `22805503a785f7af2f2a656256a72e7697003a78239f42a1d8a2866df15938af` |
| `ex-the-mostowski-collapse-of-a-finite-chain` | `8a881efc77ec0ff56e6e5abdb8e578c603b4e03854d7cef95b6e39c6e4a7bb09` | `60f96fdb4cd5acc46f33b73971ee74d00d5e837ee272695a7b3b8424f6742348` | `60f96fdb4cd5acc46f33b73971ee74d00d5e837ee272695a7b3b8424f6742348` |
| `ex-the-one-point-extension-of-a-well-order` | `ae80792908d796997dbaf25518b9f2a7dc3e56e662f4242b559a0289582486d0` | `588bf7cacbca863922ce32b54e75171ae2ac94cd4257bfecc991bc42a6fda049` | `5316ed60e5ac921d9885f801f51813db127274feef5c33c998e0b72eb02a08d1` |

## Consumer maintenance and published findings

Source/metadata scan of all active item and page Markdown found no item consumers of the reader-changed B-item interfaces `cex-a-set-of-ordinals-that-is-not-transitive` and `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal`. The examples page uses both only in its inventory and compatible summary bullets, which were read. Alpha proof/fact/source repairs leave each original Example/Statement unchanged, so they introduce no further interface event. No outside consumer repair or withdrawal is requested. Fifteen exact item edges to the countability suppliers are independently reviewed and marked verified with current raw source/consumer hashes in the owned cross-batch input; two induced page edges remain open for Step 3b. All stable IDs and existing proposed withdrawals remain present.

Published `def-cardinal` and `fs-ordinals-form-a-set` historical defects are closed only after reading the corrected current content and its actual suppliers. Their A-R local-repair records and sealed receipt markers were reread under an exclusively acquired `research/.published-consumer-ledger.lock`; current classification entries were already unique and were preserved. A separate adjudication annotation records exact defects, current hashes, suppliers and strategy. The lock was released by its owner. No published item was edited or newly stamped.

## Source evidence and limits

Authoritative passages consulted: [Marks, Set Theory](https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf), §§3–5 (well-orders, ordinal closure, induction/recursion and coordinate convention), Definition 6.1/Lemma 6.2, Exercise 2.5, §7 opening, Definition 9.4/Theorem 9.6 and their relevant proofs; [Moore historical notes](https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf), §3, Theorem 4.1 and proof, §5 opening, §6 pp.14–16, §7 pp.17–18 and §14 p.35; [Moore current notes](https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes.pdf), §8 opening p.20; [SEP, Axiom of Choice](https://plato.stanford.edu/entries/axiom-choice/), dependent-choice paragraph. Source result names, local conventions and exact hypotheses are recorded per item above. No whole-book reading or reconstruction of external DC independence models is claimed. The DC statements in the published false statement are explicitly external, conditional and unused by its local refutation.

One external-source defect was independently observed: historical Moore Theorem 6.1 p.14 claims reflection for an arbitrary nonextensional well-founded setlike relation. For three distinct points a,b,c and R={(b,c)}, the recursion gives pi(a)=pi(b)=empty and pi(c)={empty}; then pi(a) in pi(c) although a R c fails. The printed proof establishes the forward recursion and transitivity, not that general reflection. Our scoped collapse theorem assumes a well-order, whose predecessor sets distinguish points, and proves injectivity/reflection locally. Its dependencies and all examples therefore require no use of the false generalization. This is an external-source alert, not a defective published library carrier, and creates no missing local prerequisite.

## Checks and remaining handoff

Coverage check: exactly 32/32 obligations (12 touched, 12 reader, 8 flagged/refuter), no missing or extra decisions; each reader/refuter maps to exactly one closed adjudication-ledger row. Repeated reports share their original defect row explicitly; all repairs carry confidence 1. All 34 contracts have specific complete risk reviews (including the MODERATE definition); initial and final risk reports completed, final `--require-reviewed` reported 0 errors. Owning manifest deps match every current carrier, including the owner-added published prerequisites. The finite Hartogs manifest title was also synchronized to the reader-corrected n-element/n^+ title; the old arbitrary-set-successor wording is removed.

Local checks actually run:

- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-4.proof-contracts.json --strict`: 34/34 items, 0 errors, 1 advisory shotgun-bracket warning for the unchanged published collapse proof 2.1. The initial three missing boundary anchors were corrected in contract evidence before this successful rerun; no mathematical defect row was created for those mechanical diagnostics.
- `node tools/citation-fidelity.mjs research/frontier-44-special-representation-examples-28-six-step-batch-4.proof-contracts.json`: 207 citations, no missing quotes or widening candidates. This screen supplements the actual supplier reading.
- `node tools/finite-smoke.mjs research/frontier-44-special-representation-examples-28-six-step-batch-4.proof-contracts.json --items ex-the-mostowski-collapse-of-a-finite-chain`: 1 selected check passed on lengths 1–6; finite computation is not a proof of a general statement.
- Reflow on the four Alpha-edited draft items: all unchanged. Batched precheck: 4 checked, 0 failing. Batched rendercheck: 4 files, no errors. Final proof-layout result recorded below after its actual output.

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28-six-step` failed because the batch-11 input has invalid review or consumer ownership. Batch-4 input is maintained; the unified refresh blocker is outside this dispatch and must be resolved by its owner/engine. No unrelated artifact was repaired to bypass it. This is a mechanical outside blocker, not a batch-4 mathematical escalation. Live engine status was read from `.autopilot/`, not RESUME files; unrelated split-47/50 blockers were also visible and were not changed.

No unresolved mathematical finding remains in the assigned obligations. No decision hashes or engine acceptance were stamped, no judge cycle or gate battery initiated, and no stage transition, publication, push or commit performed. Engine/lead next actions: stamp current decisions, run their required checks, merge dependency inputs after the batch-11 ownership correction, and disposition the retained Step-3b page/impact obligations.

Final batched `node tools/proof-layout.mjs items/ex-an-explicit-well-ordering-of-the-integers.md items/ex-the-one-point-extension-of-a-well-order.md items/ex-the-hartogs-number-of-a-finite-set.md items/ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal.md` ran after the last item edit and formatter: **4 items, 37 steps, 0 defects**, exit 0. No item edit followed. Local decision/ledger reference check confirms 32 exact decisions and 28 referenced closed rows, with no decision hashes/stamps added. The generated defect-ledger view was refreshed after the append transaction.

Contract/manifest snapshot comparison (risk annotations excluded only for this comparison):

- cex-a-set-of-ordinals-that-is-not-transitive: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- cex-the-collapsing-recursion-has-no-solution-on-the-integers: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- cex-the-shift-is-a-nonidentity-order-automorphism: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- cex-transfinite-induction-fails-when-the-minimum-is-exempted: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-an-explicit-well-ordering-of-the-integers: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-lexicographic-orders-on-products-of-naturals: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-the-hartogs-number-of-a-finite-set: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-the-mostowski-collapse-of-a-finite-chain: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.
- ex-the-one-point-extension-of-a-well-order: pre/post contract changed=true; current without risk matches post=false; pre/post manifest unchanged=true.

Current manifest hashes also compared with the exact `__step4_page_id` schema: among touched items only the finite Hartogs manifest differs from reader-post, because its old overstrong title was synchronized. All 34 manifest titles now match current carrier titles.
