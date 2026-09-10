# Step 3b — group f

Run: phase-2-catchup-24. Assigned batches 12 and 13. Current Step-3a decisions are sufficient; no existing item or owner receipts for these 21 items at entry. Outcome: all 21 items accepted unchanged, each recorded before proceeding. No repairs or mathematical escalations. Review concerns scaffold contracts, not publication. The final mechanical gate is not clear: current shell source liveness/backing and unrelated repository publication metadata fail as detailed below.

Source: [Checkoway Lecture 16](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf), complete stay-put section through PDF page 18 (slides 3, 8–10). The explicit local proofs supply the finite-support and timing refinements.

## def-stay-put-one-tape-machine-and-run-interface — accept

Claim: Extend the base finite tuple by a third direction S, keeping the transition function total exactly on nonhalting state-symbol pairs. Configurations are (q,h,t) with finite-support t:N→Gamma, clamped L at zero, R taking h to h+1, and S fixing h. Writing changes only t(h). Initial and halting predicates are the same formulas as the earlier boundary interface, now explicitly applied to the extended tuple. A run follows these steps until the first designated halting state, or is infinite if none occurs; accepting/rejecting refer only to the two respective states, divergence only to an infinite run.

Examined dependency IDs: def-deterministic-one-tape-turing-machine, def-one-step-configuration-relation, def-turing-machine-initial-and-halting-configuration-interface, thm-recursion, thm-induction-principle, thm-subset-of-a-finite-set.

Checked extended transition domain, separated tape/update sets, finite support by finite adjunction and subset closure, identity extension for recursion and least halt by induction. Boundary interface construction does not depend on direction alphabet. ZF. Checkoway slides 3, 8–10 and published dependency bodies; research/phase-2-catchup-24-step3b-f.md.

No unresolved mathematical obligation. Validation: see final mechanical results below.

## lem-stay-put-right-left-macro-simulation — accept

Claim: For each stay-put machine M construct an ordinary machine N with states Q×{0,1}, unchanged input/tape alphabets and blank, and designated states (q0,0),(qacc,0),(qrej,0). Let E(q,h,t)=((q,0),h,t). For delta(q,a)=(p,b,D), set deltaN((q,0),a)=((p,0),b,D) when D=L or R, and ((p,1),b,R) when D=S. For every p in Q and c in Gamma set deltaN((p,1),c)=((p,0),c,L). Then each genuine M step C→Cprime gives a one-step N segment E(C)→E(Cprime) for L/R or exactly a two-step segment for S; the latter intermediate configuration is ((p,1),h+1,t[h:=b]) and is nonhalting. These are precisely the segments from an unmarked state to the next unmarked state.

Examined dependency IDs: def-stay-put-one-tape-machine-and-run-interface, def-one-step-configuration-relation, def-finite-cardinality, def-cartesian-product, thm-the-characterising-property-of-ordered-pairs, thm-induction-principle, thm-omega-is-peano-system.

Checked all tagged transition entries, including marked halting copies, and finite-state construction by two adjunctions per enumerated state. Ordered pairs separate tags; successor injectivity makes the R/L return exact at zero. Neighbor rewrite is identity. Converse follows from the unique tag-1 successor. Published finite-cardinality, product, ordered-pair and Peano suppliers read; Checkoway slides 9–10 support the complete macro. No AC or unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## thm-stay-put-elimination-with-explicit-simulation-interface — accept

Claim: Every deterministic right-infinite one-tape stay-put machine has the ordinary simulator N of the macro lemma. For every starting configuration C, its maximal run and the run of N from E(C) have identical original-state, head and whole-tape data at macro boundaries. If C_i is the original run, let s_i count S steps among its first i transitions and k_i=i+s_i. Then N at time k_i equals E(C_i). Both runs halt accepting, halt rejecting, or diverge together. A halt after t steps occurs after exactly t+s_t simulator steps, between t and t+t, with exactly the same tape and head. Applied to the initial configuration of every input (including empty input), this preserves recognition, decision and any output read from the halting tape.

Examined dependency IDs: def-stay-put-one-tape-machine-and-run-interface, lem-stay-put-right-left-macro-simulation, thm-recursion, thm-induction-principle, def-nat-addition, def-nat-order, lem-nat-order-add-compatible, thm-nat-linear-order.

Verified induction k_i=i+s_i and 0<=s_i<=i, exact segment partition including last transition, and cofinality k_i>=i. At every interior time the tag is nonhalting, so a finite original halt gives the same sole halt and an infinite run expands to an infinite run. Initial tape and head embed identically, including empty input and initially halting arbitrary configurations. Natural arithmetic and recursion suppliers read; no old draft theorem or AC is used. Checkoway complete slides 9–10 plus local timing proof. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## ex-eliminating-a-stay-put-transition — accept

Claim: Take Q={q0,qacc,qrej}, Sigma={a}, Gamma={a,blank}, with delta(q0,c)=(qacc,c,S) for both tape symbols c. On input a the original accepts in one step at cell zero with tape a followed by blanks. Its simulator first reaches ((qacc,1),1,t), then ((qacc,0),0,t), accepting only on step two. The same trace on empty input has an entirely blank tape.

Examined dependency IDs: def-stay-put-one-tape-machine-and-run-interface, lem-stay-put-right-left-macro-simulation.

Directly computed a and empty-input traces: tag-1 accept at head 1 is nonhalting and its identity rewrite then L returns to head 0 and tag-0 accept. All two original and six marked entries are accounted for; arbitrary neighbor content is preserved. Uses the already examined interface and macro, no further supplier or AC. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## cex-deleting-stay-put-moves-does-not-preserve-computation — accept

Claim: Refute the claim that simply deleting S instructions preserves a machine computation. In the machine delta(q0,c)=(qacc,c,S), deleting both entries leaves the transition undefined at the initial nonhalting state, so it is not even a legal total-transition machine. Under the proposed partial-transition interpretation that halts rejecting when an entry is missing, empty input changes from acceptance to rejection. Merely replacing S by R can also change acceptance, not just head position.

Examined dependency IDs: def-stay-put-one-tape-machine-and-run-interface, lem-stay-put-right-left-macro-simulation.

Checked deletion violates totality, and checked the distinct partial-reject interpretation. For the complete four-state replacement witness, input a remains on a at p and accepts; replacement by R scans blank at p and rejects. At head zero L then R ends at 1, so reversing the macro fails. Exact interface and macro dependencies suffice; no AC or unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-normalized-fixed-halting-machine-for-boone-simulation — accept

Claim: Fix the published deterministic one-tape recognizer R of HALT_TM. There is a finite deterministic two-sided blank-tape machine T whose instructions separately write without moving, move left, or move right, with one stopping state q_stop and a fixed effective input map v, such that T started in q_start scanning v(w) stops exactly when R accepts w. Every nonstopping state/symbol pair has exactly one instruction. Thus the single T has an undecidable stopping language. Put v(epsilon)=blank and v(w)=w otherwise (input symbols exclude blank).

Examined dependency IDs: thm-halting-is-recognizable-and-undecidable, def-deterministic-one-tape-turing-machine, def-turing-machine-initial-and-halting-configuration-interface, def-halting-computation-and-divergence, def-decidable-and-recognizable-language, lem-step-by-step-interpreter-for-machine-codes, thm-induction-principle.

Checked published HALT recognizer and interpreter clauses and explicit finite compiler: unique dotted cell zero survives writes, intermediate states remember the source entry and dot flag, clamped L becomes no-op write, acceptance alone reaches stop, rejection loops. Both simulation directions follow after one initialization and two instructions per original step. Empty input maps to one blank. No stay-put elimination, recursive/computable equivalence or Recorded supplier. Rotman complete pp420–425 read in recovered PDF text /tmp/uc19-rotman-EAIf3e/rotman-word-problem.txt after web search found the university PDF; web open failed internally. ZF; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## def-boone-machine-semigroup-and-augmented-configurations — accept

Claim: For T of the preceding lemma let S be its finite tape alphabet (blank s0), Q its finite states (stop q0), and take distinct new symbols h,q. On A=S disjoint-union Q disjoint-union {h,q}, form the nonempty-word semigroup A+ modulo finite contextual symmetric derivations of these relations: write q_a s_j=q_b s_k; internal right q_a s_j s_beta=s_j q_b s_beta; end right q_a s_j h=s_j q_b s0 h; internal left s_beta q_a s_j=q_b s_beta s_j; end left h q_a s_j=h q_b s0 s_j, for each applicable T instruction and every s_beta in S. Add q0 s=q0, s q0 h=q0 h (s in S), and h q0 h=q. Augmented configurations are q, or h U q_a V h with U,V in S*, with V nonempty unless q_a=q0. The initial word is C(w)=h q_start v(w) h. Reclassify h as a tape letter only for the subsequent algebraic presentation: all relations then have form F_i q_a G_i=H_i q_b K_i with tape contexts in (S union {h})*, possibly empty, and a single state letter on each side.

Examined dependency IDs: lem-normalized-fixed-halting-machine-for-boone-simulation, def-computation-alphabet-and-word-convention, def-equivalence-relation, def-semigroup-and-monoid.

Verified all five instruction and three cleanup families against Rotman pp426–427, keeping h outside the erasure alphabet and q distinct from q0. Nonempty words and empty contexts are compatible. Finite symmetric paths give a congruence; prefix/suffix transport proves quotient multiplication well-defined, and concatenation supplies associativity. Published word, quotient and semigroup definitions read. The corrected augmented set explicitly permits empty right tape only at stop. ZF; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-semigroup-histories-detect-halting — accept

Claim: For the encoded initial word C(w), C(w)=q in the finite semigroup exactly when the fixed machine stops on w.

Examined dependency IDs: def-boone-machine-semigroup-and-augmented-configurations, thm-well-ordering-principle.

Checked each relation orientation on augmented shapes. Reverse writes and internal/end moves restore a scanned cell; reverse cleanup inserts only S letters and q expands only to h q0 h. Nonstop successors are deterministic; stop successors erase right tape, then left tape, then both markers. A shortest path to sink ends forward; any earlier backward edge forces a valley with equal neighbors and a shorter path. Thus it is a forward computation followed by cleanup. Shortest length uses the published natural well-ordering clause (read; already in prerequisite closure). Rotman pp427–429 read completely; its nonempty-right invariant is not imported. ZF; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## thm-fixed-finite-semigroup-has-undecidable-terminal-equality — accept

Claim: There is one fixed finite positive presentation with one-state-letter relations for which equality of encoded initial words to q is undecidable.

Examined dependency IDs: lem-normalized-fixed-halting-machine-for-boone-simulation, lem-boone-semigroup-histories-detect-halting.

The already checked compiler and history iff give a fixed many-one reduction w to h q_start v(w) h, with q and the finite presentation fixed before input. Prefix/suffix insertion and the empty-input convention are effective finite word operations. Restricted terminal equality undecidability implies unrestricted equality undecidability. Rotman pp428–430 read; no Boolean-closure premise or AC. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## def-boone-group-presentation-and-special-word — accept

Claim: Let Sbar=S union {h} and Qbar=Q union {q}. Define the finite group B on Sbar,Qbar,{r_i:i in I},x,t,k with relations x s=s x^2; r_i s=s x r_i x; r_i^-1 F_i# q_a G_i r_i=H_i# q_b K_i; t r_i=r_i t, t x=x t; k r_i=r_i k, k x=x k, k(q^-1 t q)=(q^-1 t q)k. All s range over Sbar. Sharp is the free-word involution sending s^epsilon to s^-epsilon in the SAME order, hence (UV)#=U#V#; it is not group inversion and is not asserted to act on the semigroup quotient. A special word is Sigma=X# q_j Y with X,Y positive tape words, possibly empty; define Sigma*=X q_j Y and W(Sigma)=k Sigma^-1 t Sigma k^-1 Sigma^-1 t^-1 Sigma.

Examined dependency IDs: def-boone-machine-semigroup-and-augmented-configurations, def-recursive-and-finite-group-presentations, def-group-presentation, def-relators-relations-and-finite-presentations.

Visually checked all eight relation families and commutator order against Rotman printed p431 (/tmp/group-f-rotman431.png), and sharp notation on p430. Disjoint finite generator alphabets and equation-to-relator conversion define a legitimate quotient. Sharp preserves adjacent cancellation and is an involution on free tape words only, not on B or the semigroup quotient. Empty contexts and positive special-word domain are explicit. Only the finite clause of the published presentation definition is used; no enumeration theorem, Recorded result or AC. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-base-groups-and-associated-free-bases — accept

Claim: Assume AC. Let H=<x,Sbar | s^-1 x s=x^2 for s in Sbar>, let F(Qbar) be the free state group, and put G0=H*F(Qbar). The infinite cyclic <x> embeds in H. In G0 the subgroups A_i=<F_i# q_a G_i, s x (s in Sbar)> and B_i=<H_i# q_b K_i, s x^-1 (s in Sbar)> are free on exactly the displayed bases, and their indicated basis correspondence is an isomorphism. There is a tape-group involution theta(x)=x^-1, theta(s)=s.

Examined dependency IDs: def-boone-group-presentation-and-special-word, thm-reduced-words-form-the-free-group, thm-normal-form-for-free-products, thm-brittons-lemma, cor-the-base-group-embeds-in-its-hnn-extension, def-axiom-of-choice, thm-hnn-normal-form-theorem, def-choice-of-transversals-for-hnn-normal-forms, def-hnn-word-pin-and-britton-reduced-word.

Read Rotman pp438–440 and the complete published free-word, free-product, Britton, base-injectivity and transversal-normal-form arguments. The finite multiple-letter extension follows by successive embeddings and lower-letter pinch induction; the same front-normalization action treats each stable-letter type. Retraction x to 1 detects reduced words in sx and sx^-1; the explicit state-twisting automorphism then proves the full associated bases free. The two bases have a bijective correspondence and theta preserves every tape relator. G0 is the free product, avoiding the erroneous state-centralization relations printed on Rotman p439. AC explicitly supplies coset transversals; no extra choice for ordinary free-product words. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-hnn-tower-and-auxiliary-subgroups — accept

Claim: Assume AC. Adjoining the rule letters to G0 gives an embedded HNN tower G2, and C=<x,r_i> is free on its displayed generators. Adjoin t by the identity isomorphism of the actual subgroup C to get G3, then k by the identity isomorphism of the actual subgroup D=<x,r_i,q^-1 t q> of G3 to obtain exactly B, with all bases embedded. These are the specified associated subgroups; no assertion about the full centralizers or a free basis for D is made.

Examined dependency IDs: lem-boone-base-groups-and-associated-free-bases, thm-hnn-normal-form-theorem, thm-brittons-lemma, def-axiom-of-choice.

Verified rho into the free group on tape and state letters is injective on each twisted associated basis, while killing x; hence associated subgroups meet <x> trivially. Freely reduced auxiliary words have no rule pinch, so multiple-letter Britton proves C free. Each rule basis isomorphism is therefore legitimate; rearranging r_i^-1(sx)r_i=sx^-1 gives precisely r_i s=s x r_i x. Centralizing C and then the actual subgroup D uses identity embeddings and does not assume D free or claim a full centralizer. The finite centralizer generators imply all subgroup commutators. Relator and sign conventions checked against Rotman pp438–440 and the preceding suppliers. AC propagated; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-positive-history-pushing — accept

Claim: Assume AC. A positive semigroup history Sigma*=q implies Sigma=L q R for words L,R on x,r_i; consequently W(Sigma)=1 in B.

Examined dependency IDs: def-boone-group-presentation-and-special-word, lem-boone-hnn-tower-and-auxiliary-subgroups, def-axiom-of-choice, thm-induction-principle.

Checked all four signed identities directly: crossing one tape letter changes d to 2d+1, giving d=2^m-1, and inversion of reversed positive words yields the two sharp-side identities without reversing sharp itself. Both contextual relation orientations have the displayed auxiliary factors; empty contexts give d=e=0. Multiplying a finite symmetric history yields Sigma=LqR. Substituting this into W reduces it to a conjugate of the defining k/(q^-1 t q) commutator. Rotman entire pp432–433 sufficiency read; this explicit computation closes its abbreviated similar cases. Induction is an examined implicit supplier already in closure. AC inherited as stated; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-commutator-extracts-an-auxiliary-history — accept

Claim: Assume AC. If W(Sigma)=1, then L Sigma R=q in the rule-letter base group for auxiliary words L,R.

Examined dependency IDs: lem-boone-hnn-tower-and-auxiliary-subgroups, thm-brittons-lemma, def-axiom-of-choice, thm-well-ordering-principle.

Checked the two nested Britton applications against complete Rotman pp440–441. The k pinch places Sigma^-1 t Sigma in the actual D. Minimal conjugated-t length exists by natural well-ordering. Length zero contradicts t-Britton; a first-t pinch yields R^-1 Sigma R0=q in embedded G2. Any later pinch has opposite signs and centralizes an element of C, so replacing the two conjugated-t factors by Rj lowers length by two for either sign. No freeness of D is assumed. AC propagated; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-reduced-auxiliary-words-have-no-rule-pinches — accept

Claim: Assume AC. Freely reduced auxiliary words contain no rule-letter HNN pinch with a nonzero intermediate power of x; reduced normal-form comparisons match the rule-letter lengths in L Sigma R=q.

Examined dependency IDs: lem-boone-base-groups-and-associated-free-bases, lem-boone-hnn-tower-and-auxiliary-subgroups, thm-hnn-normal-form-theorem, def-axiom-of-choice.

The proved intersection test excludes every nonzero x power from either rule edge subgroup. A zero power between inverse rule letters contradicts free reduction. Thus the two sides L X# q_j and q R^-1 Y^-1 are reduced multiple-rule words. Peeling interface pinches in their equality must exhaust both sides together: otherwise a remaining reduced word equals a base element, contrary to multiple-letter Britton. This proves equal rule lengths without assuming the reconstruction theorem. Rotman pp442–443 and the local normal-form argument checked. AC propagated; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## lem-boone-positive-history-reconstruction — accept

Claim: Assume AC. If a special positive word Sigma satisfies L Sigma R=q with auxiliary L,R, then Sigma*=q in the positive semigroup.

Examined dependency IDs: lem-boone-commutator-extracts-an-auxiliary-history, lem-boone-reduced-auxiliary-words-have-no-rule-pinches, lem-boone-positive-history-pushing, def-axiom-of-choice, thm-induction-principle, thm-well-ordering-principle, thm-normal-form-for-free-products, thm-brittons-lemma.

Read the entire Rotman Lemma 12.15 argument, pp443–447, and checked the stronger signed-tape induction required by the scaffold. At p=0 tape retraction forces empty X,Y. For p>0 reduced comparison words force a central rule pinch. Minimal state occurrence in its associated-basis expression leaves one positive state factor; free-product comparison gives the two tape equations. Reduced words in sx have no internal tape pinch: opposite signs with matching tape letters would already be a free-basis cancellation. If reduced G^-1Y starts negative, the only possible seam pinch is s x s^-1, impossible because the infinite-order x is not in <x^2>; the inverted left equation gives the mirrored endpoint test. Empty remainders cause no interface. These tests force literal X=X1 F and Y=G Y1 and prevent cancellation after replacement. Theta computes the new coefficients and changes sx^-1 to sx for the opposite rule orientation, preserving tape spellings; this checks the source-omitted reverse case as well. Both sides lose a rule letter, and free reduction/length comparison permits the induction. Positivity and semigroup equality follow without assuming reversible machine motion. AC propagated; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## thm-boone-special-word-equivalence — accept

Claim: Assume AC. For every special positive word Sigma, W(Sigma)=1 in B if and only if Sigma*=q in the finite semigroup.

Examined dependency IDs: lem-boone-positive-history-pushing, lem-boone-commutator-extracts-an-auxiliary-history, lem-boone-positive-history-reconstruction, def-axiom-of-choice.

Both directions now have accepted suppliers: positive semigroup histories push to the trivial commutator; a trivial commutator extracts an equation in embedded G2 and reconstruction returns the positive semigroup equality. Domain remains exactly Sigma=X# q_j Y with positive X,Y and does not include arbitrary group words. Matches Rotman Lemma 12.7 p431 after reading both full algebraic directions. AC is explicit and declared; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## thm-novikov-boone-undecidability-of-the-word-problem — accept

Claim: Assume AC. There exists one finitely presented group whose word problem in its fixed finite presentation is undecidable.

Examined dependency IDs: thm-fixed-finite-semigroup-has-undecidable-terminal-equality, def-boone-group-presentation-and-special-word, thm-boone-special-word-equivalence, def-word-problem-for-a-fixed-finite-presentation, def-axiom-of-choice.

Checked the final map w to h^-1 q_start v(w) h to its displayed commutator. It is finite copying, reversal and sign substitution, with presentation fixed throughout. The accepted semigroup and special-word iff suppliers identify exactly HALT_TM as its preimage, contradicting a fixed-presentation decider. Read the published fixed word-problem definition and Rotman Theorem 12.8 on p431; no Higman, Recorded replacement or Church–Turing premise. AC is stated and declared. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## ex-boone-sharp-is-not-word-inversion — accept

Claim: For distinct tape letters a,b compute (ab)#=a^-1 b^-1, whereas (ab)^-1=b^-1 a^-1.

Examined dependency IDs: def-boone-group-presentation-and-special-word, thm-reduced-words-form-the-free-group.

Direct letterwise computation gives a^-1 b^-1 for sharp and b^-1 a^-1 for inverse. Distinct letters make distinct reduced free words; no quotient inequality is inferred. Published free-word supplier read for that implicit distinction, and Rotman pp430–431 notation checked. Choice-free; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## ex-boone-halting-cleanup-through-an-empty-right-tape — accept

Claim: For tape symbols a,b, including when they coincide, the augmented stopping configuration h a q0 b h has cleanup h a q0 b h -> h a q0 h -> h q0 h -> q. The middle two words have empty right tape.

Examined dependency IDs: def-boone-machine-semigroup-and-augmented-configurations.

Checked the three literal contextual replacements q0 b to q0, a q0 h to q0 h, h q0 h to q. Both middle words have empty right tape, including a=b, and are valid augmented stopping shapes. No reachability assertion is made. Rotman p427 cleanup and the corrected owned definition suffice. Choice-free; no unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## ex-fixed-boone-undecidability-implies-uniform-undecidability — accept

Claim: Assume AC. There is no Turing-machine algorithm which, on every finite presentation P and every word w in its generators, decides whether w=1 in P. This follows by fixing the single Boone presentation supplied by the A-page theorem.

Examined dependency IDs: thm-novikov-boone-undecidability-of-the-word-problem, def-axiom-of-choice.

A hard-coded finite prefix P_B followed by input w implements the proposed uniform decider on that fixed presentation. It would decide the exact fixed word problem ruled out by the accepted theorem. No extra encoding theorem or varying-presentation premise is used. AC is inherited through the declared endpoint dependency and explicitly stated. Rotman p431 and Simpson Theorem 8 complete p4 endpoint read as a quantifier cross-check only. No unresolved obligation.

Validation: see final mechanical results below; no item repair required.

## Source, scope and dependency reconciliation

Read current batch manifests, coverage (all 53 harvest rows), notes, binding prose sections at `research/plan-computability-theory-track.md:3094` and `research/plan-group-theory-track.md:4621`, current plan entries, Step-3a receipts and consumer ledger records. All four page metadata records and item inventories match the plan. The existing semigroup-definition enrichment declares three extra published dependencies in the scaffold: `def-computation-alphabet-and-word-convention`, `def-equivalence-relation`, `def-semigroup-and-monoid`. These are checked above and remain inside the page prerequisite closure. Serial plan reconciliation must carry these declarations into `research/plan-spec.json`; no shared plan edit was made here.

The primary Boone argument was read from the complete recovered [Rotman Chapter 12 PDF](https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf), local PDF/text paths recorded above, pp.418–433 and pp.438–447, stopping at the formal proof conclusions. Page 431 was inspected visually to recover relators obscured in text extraction. The current web search located the university PDF, but two opens returned internal errors; the recovered full local text supplied the arguments. [Simpson](https://sgslogic.net/t20/logic/seminar/050517.pdf) was read through all five pages, including the complete Theorem 8 endpoint; its alternate modular proof is not a supplier for Boone reconstruction. [Savage §5.1](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf), complete pp.210–211 before §5.1.1, was also read to check coverage conventions: its abnormal left-edge termination, separate write/move instructions and halt terminology are not imported into the clamped two-outcome model.

The UNSW drop preserves all selected claims with explicit local alternatives; those arguments have been adjudicated above, not accepted merely because a drop receipt exists. No new source drop or fetch stamp was written. `scope-decisions refresh --run phase-2-catchup-24 --group f` preserved 17 current `stands` decisions with evidence and left zero pending. The declined decidable-class exercises, Boolean-closure results, modular-machine construction and prescribed-degree theorem have no proof use here; two-sided folding changes a feature outside the commissioned stay-put problem. The existing individual evidence in the group scope JSON remains accurate. No owner ruling was invented.

Both consumer-batch dependency inputs remain `[]`. Current declarations and actual proof uses have no cross-batch edge, including between batches 12 and 13: Boone compiles the earlier published ordinary recognizer directly and never uses the new stay-put theorem. The machine boundary interface is already published. The unified ledger refresh with `--require-reviewed` passed; no owned edge or orphaned review was found. Implicit suppliers examined during this audit are included in the item receipts. No Recorded result is used, and the choice-free machine/semigroup branches remain choice-free; AC is explicit throughout the HNN-dependent chain.

No new published mathematical defect was identified in the checked prerequisite clauses. Existing consumer debt remains in `research/published-consumer-supplier-ledger.md`: the three Boone false-statement consumers await the new endpoint and AC propagation; the recorded Novikov–Boone remark is a retirement target, never a supplier. The current multitape theorem already contains its own local macro, so its historical dependency on the old draft stay-put result is not reopened. These consumer debts do not block the sound new suppliers and are not certified repaired by this review.

## Actual mechanical results

Checks below ran on 2026-09-09 UTC (the workspace date is 2026-09-10 Sydney). None is a publication authorization.

| Check | Actual result |
|---|---|
| `manifest-deps` on all run manifests | Exit 0: 735 items, 0 normalizations, 0 errors. |
| `content-policy --manifest-only` on batches 12,13 | Exit 0: 21 items, 0 errors or warnings. |
| `coverage-checklist` on batches 12,13 | Exit 0: 53 harvested rows, 0 errors; one Boone low-yield warning, covered by the 17 current decline decisions. |
| `scope-decisions refresh` then `check`, group f | Exit 0: 17 declines, 0 pending/errors. |
| `validate-plan research/plan-spec.json` | Exit 0: acyclic and consistent; 973 pages have item lists, 646 do not; existing global warnings remain. Plan/scaffold dependency reconciliation noted above. |
| `frontier-dependency-ledger refresh --require-reviewed` | Exit 0: refreshed and deduplicated. Both owned inputs are empty, correctly. |
| `source-fetch-check` on owned coverage | Exit 0: 4/5 fetch-verified; 5/5 resolved, including one documented UNSW drop. |
| `url-sweep --fail-on-dead` on owned coverage | Exit 1: 0/4 active URLs live in shell, all curl error 6 (host resolution). Diagnostic receipt `/tmp/step3b-f-url-liveness.json`. |
| `source-backing --require-verified` with that fresh receipt | Exit 1: 15 result IDs flagged backing-lost (3 stay-put, 12 Boone). Source-reading and durable fetch evidence do not waive this gate. |
| `depcheck --quiet` | Exit 1: 473 warnings and 4 published-unaudited errors outside the owned batches; exact IDs below. |
| `extcheck --quiet` | Exit 0: 55 existing warnings; no recorded-result boundary failure. |
| Current Step-3 receipt hash check via `loadStep3`, `scopeDecision`, `itemDecision` | Both assigned scope decisions and all 21 item decisions are current and closed. Whole-run final check remains open: 170/735 items closed at that snapshot, 565 remaining elsewhere. |

The four repository-wide `published-unaudited` errors were `cex-separately-continuous-not-jointly-continuous`, `def-metric-continuity`, `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`, and `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. These are metadata diagnostics in concurrent work, not newly adjudicated mathematical defects or dependencies of these proofs. They require their owning workstreams, not edits in group f.

Next action: the driver/serial owner must retain the 21 current mathematical decisions, reconcile the three existing plan dependency declarations, and obtain passing source liveness/backing and repository checks before the final gate. Re-read mathematics only if a claim or dependency changes. No precheck, rendering, publication or owner decision was performed or claimed here.
