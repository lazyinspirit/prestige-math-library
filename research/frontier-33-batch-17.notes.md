# frontier-33 batch 17 scaffold checkpoint

Scope: only this batch's pages, coverage, and notes. Stage 1 scaffold; no authored proofs or workflow transitions.

Design read: TC-27 lines 1126–1160 and TC-33 lines 1349–1385 of research/plan-computability-theory-track.md. Each pair of design matches is the A/B headings in one section, not competing amendments. These sections control mathematical scope. The requires lists agree with plan-spec.json; the design sections contain no numeric order. Spec orders 633/634 and 645/646 retained. No drift decision needed.

Read sources: Arora–Barak https://theory.cs.princeton.edu/complexity/book.pdf §§3.5,5.1–5.3.1,5.5; Goldreich full notes https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf Lecture 9 §§9.1–9.2 and appendix pp113–114; Goldreich promise survey https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf §§1.1–1.2; Chang https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf §3; Hoory–Linial–Wigderson https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf §§2.1–2.4,3.1–3.2,4.5 and Chapter8; Dinur https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf §§1.1–1.2,2.1–2.2,4. Exact harvest and narrower range boundaries will be in coverage. All six documents fetched through the web PDF reader; shell HTTP failed DNS in this environment. URL-sweep still required; web retrieval is not a substitute for claiming its pass.

Decisions: PH uses polynomially bounded string quantifiers, fixed level k, and general Boolean matrices (CNF cannot be imposed at all parities). Adaptive oracle transcript consistency needs both yes and no certificates. Total membership oracles have charged query writing; promise reductions must preserve both sides. Do not assert that P=NP or P!=NP is known. The design's false inference is refuted as an oracle-independent inference, with explicitly different oracles.

Expander conventions: symmetric nonnegative integer adjacency with loop slots counted in row sum; normalized M=A/d; absolute nontrivial norm alpha distinguished from second eigenvalue mu2. Ordinary constraint edges are represented by reverse-paired directed slots; usual loops have two incidence slots. Equality constraints on loops are tautological. Duplicate an adjacency-slot construction if necessary to obtain even diagonal and paired slots; this changes degree but not normalized spectrum. Constraint violation fractions use slots, hence equal ordinary edge fractions. Fourier transform uses normalized counting inner product, fixing the draft's inconsistent orthonormality normalization. The complete Chapter8 proof gives alpha<=73/80; sharper 5sqrt(2)/8 is not assumed. Cloud-size expansion must be constructed at every positive size, not just squares. Plurality rounding and expander overlay will have explicit gap/size bounds. Walk predicates retain internal labels; no unsupported claim that path composition gives Dinur's binary powered CSP.

Known limits: existing space-page prerequisite items include draft-status but authored, checked proofs. Do not label them already-published in the harvest. No missing prerequisite may be replaced with an unproved named theorem. Next: finish source-range checks, write individual items and dependency rationale, run all task validators. No readiness claim yet.

## Item checkpoints

Each entry is a completed scaffold decision, not an authored or verified proof. Dependencies list the logical support; the following strategy explains its use. At authoring, reread these exact passages and the dependency statements.

### def-polynomial-hierarchy-levels

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For fixed k>=0, Sigma_0=Pi_0=P; Sigma_k uses k alternating polynomial-length binary-string blocks starting existential over a deterministic polynomial-time predicate; Pi_k starts universal; PH is their union. Padding makes lengths exact.

Dependencies: def-p.

Proof/definition strategy and dependency rationale: Specify uniform predicate, fixed level, encodings, empty blocks, and complement convention.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §§5.1–5.2, Definitions5.1,5.4, pp91–92.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-relativized-complexity-class

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For each total A subset {0,1}*, define P^A, NP^A and PH^A with query writing charged, unit answer step, clock valid for every oracle and branch. Define C^D as union over oracle languages in D and Delta_(k+1)=P^{Sigma_k}.

Dependencies: def-p, def-np-by-verifiers, def-polynomial-hierarchy-levels.

Proof/definition strategy and dependency rationale: The polynomial clock includes query length; oracle queries are membership bits, never promise queries. Relativized quantifier predicates belong to P^A.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Definitions3.6–3.7, pp70–71.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-ph-quantifier-block-closure

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: Each Sigma_k and Pi_k is closed under polynomial many-one preimages and polynomially indexed conjunctions/disjunctions of uniformly specified predicates in that class. Complements swap Sigma and Pi; each embeds in both next levels.

Dependencies: def-polynomial-hierarchy-levels.

Proof/definition strategy and dependency rationale: Concatenate like blocks with independent variables; move finite conjunction/disjunction through independent bounded quantifiers; use dummy blocks. Bounds are polynomial for fixed k.

Source read: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Lecture9 §9.1, Proposition9.1.1 p104 and proof of Theorem9.9 pp105–107.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### prop-np-and-conp-are-the-first-levels

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: Sigma_1=NP and Pi_1=coNP.

Dependencies: def-polynomial-hierarchy-levels, def-np-by-verifiers, def-conp.

Proof/definition strategy and dependency rationale: Match the verifier definition and take complements. Correct the Arora–Barak Remark5.5 typo Pi_2 to Pi_1.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2 Remark5.5, p92.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-ph-circuit-matrix-final-block-encoding

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: A polynomial-time predicate R(x,y) has polynomial-time constructible polynomial-length formulas F_exists(x,y,z), F_forall(x,y,z) with R iff exists z F_exists iff forall z F_forall. F_exists is 3CNF; F_forall is 3DNF.

Dependencies: lem-polynomial-time-computations-have-logspace-uniform-circuits, def-boolean-circuit-size-depth-fanin-and-basis.

Proof/definition strategy and dependency rationale: Construct uniform circuit, pin x, add local gate consistency clauses. The unique gate assignment gives exists(consistency AND output=1), or forall NOT(consistency AND output=0). No circuit unfolding. This strengthens formula-only equisatisfiability to pointwise circuit encoding, so does not duplicate the existing Tseitin lemma.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.2 Example5.9, pp93–94; constructive circuit prerequisite on disk.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-bounded-alternation-qbf-is-level-complete

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For every fixed k>=1, true prenex Boolean formulas with k alternating blocks starting exists (respectively forall), with general formula matrix, are Sigma_k-complete (Pi_k-complete) under polynomial many-one reductions.

Dependencies: def-polynomial-hierarchy-levels, lem-ph-circuit-matrix-final-block-encoding, def-polynomial-time-many-one-reduction.

Proof/definition strategy and dependency rationale: Membership evaluates matrix; hardness compiles the predicate and absorbs z into the last block with its matching polarity. Quantifier blocks and formula length stay polynomial. Invalid encodings reject; negation reduction handles encoding separately.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.2 Example5.9, pp93–94.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-ph-adaptive-oracle-transcript-normal-form

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For k>=1, a polynomial nondeterministic machine with a Sigma_k oracle has a Sigma_(k+1) quantifier definition; analogous relativized assertion holds for any fixed outer oracle.

Dependencies: def-relativized-complexity-class, lem-ph-quantifier-block-closure.

Proof/definition strategy and dependency rationale: Guess branch, query-answer transcript, and first existential blocks for YES answers. NO answers use Pi_k definitions. Shift the YES remaining k-1 blocks to align with the NO k blocks, pad missing blocks, conjoin consistency, and replay queries deterministically. All lengths bounded by the machine clock.

Source read: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Lecture9 Theorem9.9, pp105–107, proof in both directions.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-quantifier-and-oracle-characterizations-of-ph

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For k>=0, Sigma_(k+1)=NP^{Sigma_k}; equivalently use a fixed complete oracle at k>=1. Pi is the complementary oracle class; Delta_(k+1)=P^{Sigma_k}. Also k-block polynomial-time alternating machines characterize Sigma_k/Pi_k.

Dependencies: lem-ph-adaptive-oracle-transcript-normal-form, thm-bounded-alternation-qbf-is-level-complete, prop-np-and-conp-are-the-first-levels.

Proof/definition strategy and dependency rationale: Transcript lemma gives hard inclusion; for converse guess the outer block and query the complementary remaining predicate, swapping answer bits. Explain existential/universal computation trees and simulate each block by polynomially many choice bits; no AP theorem is needed.

Source read: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Lecture9 Theorem9.9, pp105–107; AB §5.3 Claim5.11 and §5.5 Theorem5.15.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### prop-ph-containments-and-polynomial-space

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: Sigma_k union Pi_k subset Delta_(k+1) subset Sigma_(k+1) intersection Pi_(k+1); PH subset PSPACE.

Dependencies: thm-quantifier-and-oracle-characterizations-of-ph, lem-ph-quantifier-block-closure, def-pspace-and-npspace.

Proof/definition strategy and dependency rationale: A deterministic machine can flip oracle answers; evaluate each fixed-block quantified predicate by depth-first enumeration retaining polynomial-length assignments and counters.

Source read: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Propositions9.1.1,9.1.2,9.2.1, pp102–108.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-collapse-at-one-level-propagates

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For k>=1, Sigma_k=Pi_k implies Sigma_(k+1)=Pi_(k+1)=Sigma_k.

Dependencies: lem-ph-quantifier-block-closure.

Proof/definition strategy and dependency rationale: Replace the inner Pi_k predicate after the leading existential block by a Sigma_k predicate and merge existential blocks; take complements and use containments. Uniformity applies to the language of paired inputs, not separately chosen predicates for each input.

Source read: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Proposition9.2.3 and appendix proof, pp108,113–114.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-sigma-k-equals-pi-k-implies-ph-collapse

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For fixed k>=1, Sigma_k=Pi_k implies PH=Sigma_k=Pi_k. Also P=NP implies PH=P.

Dependencies: lem-collapse-at-one-level-propagates.

Proof/definition strategy and dependency rationale: Induct on levels; for k=0 use P closure under polynomial deterministic substitution and P=NP=coNP to invoke level1 case.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.1 Theorem5.6, pp92–93.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### cor-ph-complete-language-forces-collapse

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: If PH has a polynomial many-one complete language, PH collapses to a finite level. Consequently PH=PSPACE implies a collapse, using TQBF completeness.

Dependencies: lem-ph-quantifier-block-closure, thm-sigma-k-equals-pi-k-implies-ph-collapse, thm-tqbf-is-pspace-complete.

Proof/definition strategy and dependency rationale: The complete language lies in some Sigma_k; its preimages include Pi_k. For the consequence use existing PSPACE completeness without treating it as a new PH claim.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.2 Claim5.7 and Remark5.8, p93.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-standard-containments-relativize

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For every total A, P^A subset NP^A, coNP^A subset PSPACE^A and PH^A subset PSPACE^A; NP^A verifier characterization, PH oracle characterization, and the collapse implication hold with the same A throughout.

Dependencies: def-relativized-complexity-class, thm-quantifier-and-oracle-characterizations-of-ph, prop-ph-containments-and-polynomial-space.

Proof/definition strategy and dependency rationale: Replay the preceding proofs, preserve identical oracle calls, charge query tape space and time. A polynomial-space depth-first simulator may evaluate each polynomial-time A query directly.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 discussion after Theorem3.9, pp71–72; Goldreich Theorem9.9 proof.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-relativizing-proof-technique

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: A relativizing argument remains valid when every machine receives the same arbitrary total oracle with the same resource convention.

Dependencies: def-relativized-complexity-class.

Proof/definition strategy and dependency rationale: Define as a property of an argument; it is not a syntactic decision procedure classifying all possible proofs.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Relativization, pp70–72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-oracle-diagonalization-finite-extension

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: A polynomially clocked deterministic oracle machine can be defeated on a fresh 1^n for the language L_B={1^n: B has an n-bit word}, while preserving any finite earlier oracle commitments.

Dependencies: def-relativized-complexity-class.

Proof/definition strategy and dependency rationale: Choose n beyond all committed lengths with 2^n>p(n). Answer uncommitted queries NO. If accepts, freeze every n-bit word NO; if rejects, choose one unqueried n-bit word YES and freeze length n. Preserve all queried answers, including longer strings.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 proof of Theorem3.9, p72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-an-oracle-separates-p-from-np

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: There exists a total B with P^B != NP^B.

Dependencies: lem-oracle-diagonalization-finite-extension.

Proof/definition strategy and dependency rationale: Enumerate every deterministic machine with explicit polynomial clocks; extend commitments once per pair. Set never committed bits to zero at the end. L_B has one n-bit guess and one oracle query, but defeats every deterministic clocked decider.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Theorem3.9, pp71–72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-polynomial-space-oracle-absorption

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: NP^TQBF subset PSPACE and PSPACE subset P^TQBF.

Dependencies: def-relativized-complexity-class, def-pspace-and-npspace, thm-tqbf-is-pspace-complete.

Proof/definition strategy and dependency rationale: Depth-first enumerate the polynomial-depth nondeterministic tree; decide each polynomial-length TQBF query by its polynomial-space procedure, reusing space. The other direction is the existing polynomial many-one reduction.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Claim3.8(3), pp70–71, adapted from EXP-complete to the established PSPACE-complete TQBF oracle.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-an-oracle-collapses-p-and-np

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For A=TQBF, P^A=NP^A=PSPACE.

Dependencies: lem-polynomial-space-oracle-absorption.

Proof/definition strategy and dependency rationale: Sandwich PSPACE subset P^A subset NP^A subset PSPACE. The oracle itself need not be decidable in polynomial time.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Theorem3.9 and Claim3.8(3), pp70–72; explicit TQBF adaptation.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### cor-relativization-alone-cannot-resolve-p-versus-np

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: No argument establishing P=NP or P!=NP and valid unchanged relative to every total oracle can succeed.

Dependencies: def-relativizing-proof-technique, thm-an-oracle-separates-p-from-np, thm-an-oracle-collapses-p-and-np.

Proof/definition strategy and dependency rationale: Each candidate conclusion contradicts one of the two constructed relativized worlds. This is a limitation of that proof property, not a theorem classifying all techniques.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 conclusion, p72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-lowness-and-highness

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: For A in NP and k>=0 define Low_k by Sigma_k^A=Sigma_k, and High_k by Sigma_k^A=Sigma_k^SAT=Sigma_(k+1), with Sigma_0^A=P^A. General lowness for a class C means C^A=C.

Dependencies: thm-quantifier-and-oracle-characterizations-of-ph, def-relativized-complexity-class.

Proof/definition strategy and dependency rationale: State restriction A in NP and Turing-oracle meaning; do not confuse highness with many-one completeness or computability-theoretic jumps. SAT is the level1 complete oracle already constructed.

Source read: Richard Chang, On the Structure of Bounded Queries to Arbitrary NP Sets; https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf; §3 High and Low Sets, pp3–4.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### prop-elementary-high-low-identities

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: Low_0=P; Low_1=NP intersection coNP; High_0 consists precisely of NP languages that are polynomial-time Turing complete for NP. Low_k and High_k are increasing in k.

Dependencies: def-lowness-and-highness, prop-np-and-conp-are-the-first-levels, lem-ph-adaptive-oracle-transcript-normal-form.

Proof/definition strategy and dependency rationale: For Low1, NP^A decides both A and its complement; conversely certify every oracle answer using NP witnesses for A and its complement. For high0 simulate SAT and use A in NP. For monotonicity lift equality through the oracle characterization with a fixed base oracle.

Source read: Richard Chang, On the Structure of Bounded Queries to Arbitrary NP Sets; https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf; §3 properties6–8 and preceding nesting statement, pp3–4.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-promise-problem

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: A promise problem is a disjoint pair (Y,N) of binary languages. PromiseP decides correctly on Y union N; PromiseNP has existential acceptance on Y and rejection of every witness on N, with polynomial clock everywhere.

Dependencies: [].

Proof/definition strategy and dependency rationale: Outside the promise either answer is allowed; Y union N need not be decidable. Define encoded input lengths and fixed polynomial witness bound.

Source read: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.1 Definition1.1 and §1.2 Definition1.2, pp2–4.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-promise-preserving-reduction

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: A polynomial many-one promise reduction maps Y into Yprime and N into Nprime. Oracle reductions must work for every total completion separating Yprime from Nprime.

Dependencies: def-promise-problem.

Proof/definition strategy and dependency rationale: No condition outside source promise; universal quantification over target completions is part of the oracle reduction convention.

Source read: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.2 Definition1.3 and oracle reduction paragraph, pp4–5.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### rem-oracle-and-promise-conventions-are-distinct

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: A total membership oracle determines every answer; a promise oracle specifies a set of allowable completions. Relativization and restricting valid inputs are distinct operations.

Dependencies: def-relativized-complexity-class, def-promise-preserving-reduction.

Proof/definition strategy and dependency rationale: Contrast an off-promise query under two completions; a promised input to the caller does not automatically make its queries promised.

Source read: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.2 following Definition1.3, p5.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### fs-relativized-separations-prove-unrelativized-separations

Page: the-polynomial-hierarchy-and-relativization.

Claim and conventions: False inference schema: a P-versus-NP separation for one oracle is sufficient to conclude the same separation independently of the oracle, including every other oracle.

Dependencies: thm-an-oracle-separates-p-from-np, thm-an-oracle-collapses-p-and-np.

Proof/definition strategy and dependency rationale: Refute the universal oracle-removal rule with B and A. Explicitly do NOT call the isolated material implication (P^B!=NP^B => P!=NP) a known false proposition: that would assert the open equality P=NP.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Theorem3.9 and relativization discussion, pp71–72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### ex-np-and-conp-are-the-first-levels

Page: the-polynomial-hierarchy-and-relativization-examples.

Claim and conventions: SAT and tautology exhibit first-level existential and universal predicates; EXACT-INDSET belongs to both Sigma2 and Pi2.

Dependencies: prop-np-and-conp-are-the-first-levels, thm-bounded-alternation-qbf-is-level-complete.

Proof/definition strategy and dependency rationale: For EXACT-INDSET use one k-set witness and universal rejection of every (k+1)-set; reversing independent blocks gives Pi2. Encode graphs and sets with polynomial bit strings; no completeness assertion for EXACT-INDSET.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; Examples5.2–5.3 and5.9, pp91–94.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### ex-relativization-alone-cannot-resolve-p-versus-np

Page: the-polynomial-hierarchy-and-relativization-examples.

Claim and conventions: Work through TQBF oracle absorption and a finite stage of separating-oracle construction.

Dependencies: cor-relativization-alone-cannot-resolve-p-versus-np, lem-polynomial-space-oracle-absorption.

Proof/definition strategy and dependency rationale: Show query-length and frozen-length bounds explicitly, using p(n)<2^n and an unqueried word; never present a finite stage as the final oracle.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 proof of Theorem3.9, pp71–72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### cex-relativized-separations-prove-unrelativized-separations

Page: the-polynomial-hierarchy-and-relativization-examples.

Claim and conventions: The pair A=TQBF and diagonal B refutes oracle-independent transfer of a separation.

Dependencies: fs-relativized-separations-prove-unrelativized-separations.

Proof/definition strategy and dependency rationale: Give opposite equalities in the two worlds; explain why deleting B is an invalid inference but does not prove the unrelativized equality.

Source read: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5, pp71–72.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### ex-promise-oracle-off-promise-answers

Page: the-polynomial-hierarchy-and-relativization-examples.

Claim and conventions: For promise Y={0}, N={1}, two valid completions disagree on 00, so a purported reduction whose answer depends on querying 00 is not justified by the promise.

Dependencies: def-promise-preserving-reduction, rem-oracle-and-promise-conventions-are-distinct.

Proof/definition strategy and dependency rationale: Exhibit completions {0} and {0,00}; fix a yes source input and opposite output responses.

Source read: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.2 oracle-reduction convention, p5; finite illustration.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-regular-multigraph-and-normalized-adjacency

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: A finite d-regular multigraph is a symmetric nonnegative integer matrix A with row sum d>0, on n>=1 vertices; a diagonal entry is a loop slot. M=A/d, uniform inner product, oriented edge-slot sampling, and the n=1 trivial mean-zero space are fixed.

Dependencies: [].

Proof/definition strategy and dependency rationale: Give adjacency-list encoding, rotation pairing when slots come from ordinary edges, and degree convention. Ordinary loops have two slots; general matrices can be doubled to obtain that convention.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §§2.1–2.3, pp19–21; Dinur §2.1, p8.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-constant-vector-is-a-top-eigenvector

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: M1=1, all eigenvalues lie in [-1,1], and the mean-zero space is invariant; eigenvalue1 multiplicity equals number of connected components. For connected graphs, -1 occurs iff the graph is bipartite and has no loop slots.

Dependencies: def-regular-multigraph-and-normalized-adjacency, cor-real-spectral-theorem-for-self-adjoint-endomorphisms.

Proof/definition strategy and dependency rationale: Jensen or coordinate maximum gives contraction; Dirichlet sum identifies constants on components. Equality in the sum of squares for I+M identifies sign alternation. Include n=1 conventions separately.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.3 spectral properties, pp20–21.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-spectral-edge-and-vertex-expansion

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: Define alpha=||M restricted to 1-perp||, gamma=1-mu2, normalized edge expansion h=min cut(S)/(d|S|) for 0<|S|<=n/2, and external vertex expansion min |N(S) minus S|/|S|. Fixed-degree expander families require uniform h>0; polynomial-time constructibility means output adjacency in poly(n).

Dependencies: lem-constant-vector-is-a-top-eigenvector.

Proof/definition strategy and dependency rationale: For n=1 define expansion assertions vacuously, alpha=0. Distinguish second algebraic eigenvalue from absolute norm, and poly(n) construction from poly(log n) neighbor computation.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Definitions2.1–2.3 and §2.3, pp19–21.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-expander-mixing-lemma

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For all S,T, |e(S,T)-d|S||T|/n| <= alpha*d*sqrt(|S|(1-|S|/n)|T|(1-|T|/n)); e counts ordered slots.

Dependencies: def-spectral-edge-and-vertex-expansion, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

Proof/definition strategy and dependency rationale: Subtract constant projections from both indicators and use mean-zero operator norm with Cauchy–Schwarz; allow overlap and loops.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.4 Lemma2.5, p21.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-cheeger-indicator-and-positive-part-energy

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For n>=2, gamma<=2h. A mu2 eigenvector has one signed positive part f>=0, nonzero, supported on at most n/2 vertices, with <f,(I-M)f> <= gamma||f||^2.

Dependencies: def-spectral-edge-and-vertex-expansion, cor-rayleigh-quotient-extreme-eigenvalue-characterisation.

Proof/definition strategy and dependency rationale: Use centered indicators for the first inequality. Pick sign with small positive support; multiply eigen-equation on that support, compare truncation across its boundary.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §4.5.1 and beginning §4.5.2, pp40–42.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-cheeger-sweep-and-layer-cake

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For nonnegative f supported on <=n/2 vertices, h||f||^2 <= (1/d)sum_{unordered nonloop edges}|f(u)^2-f(v)^2| <= sqrt(2<f,(I-M)f>||f||^2), in unnormalized vertex inner product.

Dependencies: lem-cheeger-indicator-and-positive-part-energy, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

Proof/definition strategy and dependency rationale: Order vertex values, telescope level sets (finite layer cake), then factor differences of squares and apply CS. Loop terms vanish and only improve degree upper bound. State normalization change explicitly.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §4.5.2 Lemmas4.12–4.13, pp41–42.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-cheeger-inequalities-for-finite-regular-graphs

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For n>=2, gamma/2 <= h <= sqrt(2gamma), equivalently h^2/2<=gamma<=2h. Also h<= vertex expansion <=d*h.

Dependencies: lem-cheeger-sweep-and-layer-cake.

Proof/definition strategy and dependency rationale: Combine indicator and sweep lemmas; count between one and d incoming cut slots per external boundary vertex. Second algebraic gap controls this claim, not alpha.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §4.5 Theorem4.11 (also Theorem2.4), pp40–42.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### cor-expander-independent-sets-coloring-and-diameter

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: If alpha<1 and an independent vertex set exists, its size is at most alpha*n/(1+alpha); loopless graphs therefore need at least (1+alpha)/alpha colors when alpha>0. If h>0, diameter <=2*ceil(log(n)/log(1+h))+2.

Dependencies: thm-expander-mixing-lemma, thm-cheeger-inequalities-for-finite-regular-graphs.

Proof/definition strategy and dependency rationale: Use S=T in the refined mixing bound. Repeated external neighborhoods grow balls by 1+h until they exceed half the vertices; two large balls intersect. Treat alpha=0 and n=1 separately.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.4 bullets after Lemma2.6, pp21–22; constants sharpened using centered indicators.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-margulis-gabber-galil-graph

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: On (Z/mZ)^2 use maps (x,y)->(x+2y,y), (x,y)->(x,y+2x), their shifts by (1,0),(0,1), and all four inverses. Preserve multiplicities and loops.

Dependencies: def-regular-multigraph-and-normalized-adjacency.

Proof/definition strategy and dependency rationale: List all eight neighbors with modular arithmetic and reverse ports, including m=1,2.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Chapter8 Construction8.1, p69.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-margulis-family-is-constant-degree-and-neighbor-computable

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: These graphs are symmetric and 8-regular on m^2 vertices. A specified neighbor uses O(log m)-bit modular arithmetic in poly(log m) time; the full list uses O(m^2 poly(log m)) bit operations.

Dependencies: def-margulis-gabber-galil-graph.

Proof/definition strategy and dependency rationale: Each forward affine map is bijective with a listed inverse. Multiplicity prevents degree loss at small moduli.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Construction8.1, p69; explicit arithmetic cost analysis.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-finite-torus-fourier-transform

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For m>=1 set omega=exp(2pi i/m), chi_b(x)=omega^(b dot x), and hat f(b)=m^-2 sum_x f(x) conjugate(chi_b(x)); inner product is m^-2 sum f conjugate(g).

Dependencies: [].

Proof/definition strategy and dependency rationale: Define residue representatives and complex conjugation convention explicitly; characters needed here are only on the finite two-dimensional torus.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.1.1 Definition8.4 and torus examples, p70.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-finite-torus-fourier-orthogonality-and-affine-change

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: Characters form an orthonormal basis; inversion f=sum hat f chi; Parseval ||f||^2=sum|hat f|^2; mean zero iff hat f(0)=0. For g(x)=f(Tx+b), hat g(y)=omega^(-y dot T^-1 b) hat f(T^-T y).

Dependencies: def-finite-torus-fourier-transform, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

Proof/definition strategy and dependency rationale: Prove geometric-sum orthogonality separately for m=1 and m>1, count m^2 independent vectors, then change variables. No general finite-abelian character classification is assumed.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.1.1 Propositions8.5–8.6, pp70–71, corrected normalization.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-fourier-analysis-of-margulis-adjacency

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For real mean-zero f, the absolute quadratic form of the four forward maps is bounded, after Fourier transform, by Q(g)=sum_z 2g(z)[g(T2^-1 z)|cos(pi z1/m)|+g(T1^-1 z)|cos(pi z2/m)|], where g=|hat f| and g(0)=0.

Dependencies: lem-finite-torus-fourier-orthogonality-and-affine-change, lem-margulis-family-is-constant-degree-and-neighbor-computable.

Proof/definition strategy and dependency rationale: Apply affine change, note transposes exchange the shears, pair the translation factors, and use |1+omega^r|=2|cos(pi r/m)|. Full adjacency quadratic is twice the real forward sum.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.2 Theorems8.7–8.8, pp71–72; only the reduction, not the sharp constant.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-margulis-diamond-weight-bound

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For nonnegative g vanishing at zero, Q(g)<=73/20 sum g(z)^2.

Dependencies: lem-fourier-analysis-of-margulis-adjacency.

Proof/definition strategy and dependency rationale: Use centered coordinate reps, diamond |z1|+|z2|<m/2 and norm partial order. Bound 2ab<=w*a^2+w^-1*b^2 with w=5/4 oriented by order. Generic inside vertices:3/w+w=73/20; equal absolute coordinates and axes:2/w+2=18/5; outside:2w*(|cos|+|cos|)<=2w*sqrt(2)<73/20. Check wraparound, zero and boundary explicitly.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.2 Proposition8.9 and complete weaker-bound proof, pp72–73.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-margulis-family-has-uniform-spectral-gap

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For every m>=2 the normalized absolute nontrivial eigenvalue is <=73/80; m=1 has zero-dimensional nontrivial space. Hence gap is at least7/80.

Dependencies: lem-margulis-diamond-weight-bound, cor-real-spectral-theorem-for-self-adjoint-endomorphisms.

Proof/definition strategy and dependency rationale: The full adjacency is forward operator plus adjoint, so |<f,Af>|<=73/10||f||^2; divide by8. The absolute-value Fourier bound controls negative eigenvalues as well.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Theorem8.2 with fully proved weaker bound at end §8.2, pp69–73.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-expander-size-adjustment-and-laziness

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For every N>=1 construct in poly(N) time a 128-regular reverse-paired multigraph H_N with loops, alpha<=rho0=1-49/1638400<1, and unnormalized edge expansion at least h0=7/10 for N>=2.

Dependencies: thm-margulis-family-has-uniform-spectral-gap, thm-cheeger-inequalities-for-finite-regular-graphs.

Proof/definition strategy and dependency rationale: Take m=ceil sqrt N, partition m^2 vertices into N consecutive fibers of size<=4; quotient the 8-regular graph, pad diagonal to degree32. A quotient cut and its complement lift to sets of size at least min(|S|,N-|S|), so its edge expansion>=7/20. Its normalized h>=7/640. Cheeger gives gap>=49/819200. Add32 loop slots to make lazy degree64, then double every slot for reverse-paired ordinary loops; alpha<=1-49/1638400 and edge expansion>=7/10. Handle N=1 using128 loop slots.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Lemma2.1 and Corollary2.4, pp8–9; HLW Construction8.1 and §4.5; explicit constants adapted.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### cor-explicit-polynomial-time-constant-degree-expanders-exist

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: An explicit polynomial-time constructible constant-degree expander exists at every positive vertex count, with uniform absolute spectral gap, not only square counts.

Dependencies: lem-expander-size-adjustment-and-laziness.

Proof/definition strategy and dependency rationale: Record degree128, alpha<=rho0, total adjacency size128N and polynomial bit construction time. Do not claim linear bit time from an adjacency output with log N-bit names.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Lemma2.1, p8, instantiated by preceding construction.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-constraint-graph-and-labeling-value

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: A constraint graph has finite nonempty alphabet Sigma, an ordinary undirected multigraph with explicitly paired incidence slots, and a binary relation per edge (reverse uses transpose). val(sigma) is the satisfied edge fraction; val(G)=max val(sigma), UNSAT=1-val. Isolated vertices may be removed; the edgeless case has value1.

Dependencies: def-regular-multigraph-and-normalized-adjacency.

Proof/definition strategy and dependency rationale: Define relation-table encoding, ordinary loop evaluation R(a,a), size O(|V|+|E| |Sigma|^2) entries and binary bit cost. Duplicating every edge preserves fractions.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §1.1 Definition1.1 and §1.2 Definition1.2, pp2–3.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-constraint-graph-regularization

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: Replace a vertex of degree r>0 by r incidence ports, place equality constraints on H_r, and keep each original edge between its two corresponding ports. Then overlay H_(2|E|) with tautological constraints and add130 loop slots (65 ordinary loops) per vertex.

Dependencies: def-constraint-graph-and-labeling-value, lem-expander-size-adjustment-and-laziness.

Proof/definition strategy and dependency rationale: Use cloud degree128, external degree1, so degree129. For a simpler even-loop lazy overlay add130 loop slots: final degree D=129+128+130=387, diagonals even. Alphabet unchanged. Isolated and edgeless inputs handled explicitly.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Definitions4.1–4.2, PDF pages13–14, with explicit degree and loop conventions.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-cloud-plurality-rounding

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For a labeling of the clouds, decode each original vertex by plurality. If S is the number of nonplurality ports and U_int the number of violated internal equality edges, U_int>=h0*S/2. The decoded original violation count is <=U_ext+S.

Dependencies: def-constraint-graph-regularization.

Proof/definition strategy and dependency rationale: Each nonlargest label class has size at most half the cloud; sum its expanding boundaries and divide by2. Changing each disagreeing port affects at most its one external edge; loops are still represented by two ports. Ties choose a fixed alphabet order.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 proof of Lemma4.1, PDF pages13–14.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-regularization-preserves-value-quantitatively

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For degree129 cloud graph G1, c*UNSAT(G)<=UNSAT(G1)<=UNSAT(G)/129, where c=1/[129*max(1,2/h0)] and h0=7/10. It has2|E| vertices,129|E| edges, unchanged alphabet, and polynomial construction time.

Dependencies: lem-cloud-plurality-rounding.

Proof/definition strategy and dependency rationale: U_G<=U_ext+(2/h0)U_int<=max(1,2/h0)U_G1; divide by original |E| and new129|E|. Constant-per-cloud extension violates exactly original bad external edges. This is a bound on UNSAT, not multiplicative preservation of val.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Lemma4.1, PDF pages13–14.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-constraint-expander-overlay

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: The full preprocessing graph G2 has degree387, 2|E| vertices,387|E| edges, a loop at each vertex, alpha<1, and (129/387)c*UNSAT(G)<=UNSAT(G2)<=UNSAT(G)/387. For every labeling, overlay multiplies its violation fraction by129/387.

Dependencies: lem-regularization-preserves-value-quantitatively.

Proof/definition strategy and dependency rationale: M2=(129M1+128M_H+130I)/387. Upper mean-zero eigenvalue <=(259+128rho0)/387<1; lower >=(-129-128rho0+130)/387>-1. New constraints tautological. Store exact rho bound; decoder follows cloud plurality.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Lemma4.2 and Corollary4.3, pp14–15.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-graph-power-and-walk-constraint

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: The graph power has one oriented slot per length-t port walk, degree d^t and normalized adjacency M^t. A walk predicate on its t+1 vertex occurrences conjoins its t original edge constraints, respecting repeated vertices.

Dependencies: def-constraint-graph-and-labeling-value.

Proof/definition strategy and dependency rationale: Specify t>=1, walk multiplicity, reversal, and labels shared across repeated occurrences. This is a (t+1)-ary constraint on the original labeling, not a binary relation on endpoint letters. Dinur endpoint-view powering is deferred to the next page.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §1.2 Powering, pp4–5; underlying walk edges and original constraints.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-expander-walk-contraction

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For a d-regular graph, a uniformly chosen port walk has transition M and stationary uniform law; ||M^t p-u||2<=alpha^t||p-u||2 and total variation <=sqrt(n)*alpha^t/2. Graph powers have nontrivial norm alpha^t.

Dependencies: def-spectral-edge-and-vertex-expansion, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

Proof/definition strategy and dependency rationale: Define finite probabilities as counts over n*d^t equally likely walks and variation as half the l1 distance. Decompose p-u in eigenbasis; use CS for l1. A fixed start uses d^t paths.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.1 Definition3.1 and §3.1.1 Theorems3.2–3.3, Lemma3.4, pp25–26.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-expander-walk-restricted-operator

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For S of density beta, projection P_S satisfies ||P_S M P_S||<=alpha+(1-alpha)beta. The probability a stationary t-step walk stays in S is <1_S,(P_S M P_S)^t 1_S>/n.

Dependencies: lem-expander-walk-contraction.

Proof/definition strategy and dependency rationale: For f supported in S, squared constant projection<=beta||f||^2, so Rayleigh upper<=alpha+(1-alpha)beta; lower>=-alpha. Apply the real spectral theorem on the supported subspace. The product formula follows by expanding the finite path sum.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Lemmas3.7–3.8, pp28–29; sharpened constant from the same projection proof.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### thm-expander-walk-hits-dense-bad-sets

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For any fixed bad vertex set B of density delta and a stationary t-step walk, Pr[no visit to B]<= (1-delta)*(1-(1-alpha)delta)^t <=(1-delta)*exp(-(1-alpha)delta*t).

Dependencies: lem-expander-walk-restricted-operator.

Proof/definition strategy and dependency rationale: Apply the restricted operator to S=V minus B and bound its power. State stationarity, t+1 sampled vertices, alpha<1, and delta in[0,1]. A bad vertex set and a bad edge set are different objects.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Theorem3.6 with the sharper Lemma3.8 estimate above, pp28–29.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### prop-expander-walk-sampled-and-moving-sets

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: At selected times with gaps g_i>=1 and target sets S_i of densities beta_i, probability of all visits is <=sqrt(beta_0*beta_r)*product_i(sqrt(beta_(i-1)*beta_i)+alpha^g_i).

Dependencies: lem-expander-walk-restricted-operator.

Proof/definition strategy and dependency rationale: Use ||P_T M^g P_S||<=sqrt(beta_S beta_T)+alpha^g from M^g=J+(M-J)^g and multiply, keeping endpoint indicator norms. This includes the source selected-time bound.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Theorems3.10–3.11, p29.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### lem-expander-walk-bad-edge-return

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For a nonloop edge set F in a d-regular graph, conditioned on a stationary edge belonging to F, a later edge i steps after it belongs to F with probability <=epsilon+alpha^(i-1), i>=1; epsilon=|F|/|E|.

Dependencies: lem-expander-walk-contraction.

Proof/definition strategy and dependency rationale: The endpoint law of a uniformly chosen F edge has coordinates deg_F(v)/(2|F|). Pair its mean-zero part with deg_F/d after i-1 transitions and use CS plus deg_F<=d. Track the one-step indexing and reject F empty separately.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Proposition2.5 and its full proof, pp9–10.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### prop-expander-walk-hits-bad-edges

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For t>=1 stationary edges, nonloop bad-edge fraction epsilon, and alpha<1, Pr[at least one bad edge]>=t*epsilon/[t*epsilon+1+2/(1-alpha)] (zero when epsilon=0).

Dependencies: lem-expander-walk-bad-edge-return, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

Proof/definition strategy and dependency rationale: Set X=sum bad-edge indicators. Pairwise return bound gives EX2<=t*epsilon*(1+t*epsilon+2/(1-alpha)); apply (EX)^2<=Pr[X>0]*EX2 by finite-sum CS. This supplies the second-moment tool without a probability-course prerequisite.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Proposition2.5 and §2.2 Fact2.6, pp9–10, direct consequence.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### def-gap-csp

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: For fixed alphabet and 0<=s<c<=1, Gap-CSP(c,s) is the promise problem val(G)>=c versus val(G)<=s, with arbitrary behavior in the middle. Gap-CSP(1,1-epsilon) distinguishes satisfiable instances from UNSAT>=epsilon.

Dependencies: def-constraint-graph-and-labeling-value.

Proof/definition strategy and dependency rationale: Define the disjoint yes/no pair locally to avoid a page dependency on PH. State relation encoding, arity, thresholds, and that no NP-hardness or PCP theorem is asserted here.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §1.1 Definition1.1 and Theorem1.2 formulation, pp2–3.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### fs-nonconstructive-expanders-suffice-for-uniform-reductions

Page: expander-graphs-and-constraint-graphs.

Claim and conventions: False claim: an arbitrary choice of one constant-degree expander at each size automatically supplies a polynomial-time uniform graph generator usable in a reduction.

Dependencies: def-spectral-edge-and-vertex-expansion, cor-explicit-polynomial-time-constant-degree-expanders-exist.

Proof/definition strategy and dependency rationale: An existence statement has no generator or time bound. Refutation uses two distinguishable explicit bounded-degree expanders per size and a diagonal choice against every polynomially clocked generator. It does not deny that these graphs have some effective choices.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.1 Definition2.3, p19; Dinur §2.1 Lemma2.1 explicitly requires constructibility.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### ex-expander-mixing-lemma

Page: expander-graphs-and-constraint-graphs-examples.

Claim and conventions: For the looped complete graph A=J_n, d=n and alpha=0, e(S,T)=|S||T| exactly; for K_(r,r), the second eigenvalue gap can coexist with absolute alpha=1.

Dependencies: thm-expander-mixing-lemma.

Proof/definition strategy and dependency rationale: Compute the constant and bipartition eigenvectors. Use n=2r>=4 for mu2=0 and eigenvalue-1; a stationary walk alternates sides.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.3 spectral properties and §2.4 mixing, pp20–21; finite computations.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### ex-expander-walk-hits-dense-bad-sets

Page: expander-graphs-and-constraint-graphs-examples.

Claim and conventions: On a Margulis graph alpha<=73/80, a fixed set of density at least1/4 is missed for t+1 stationary samples with probability <=(3/4)(313/320)^t.

Dependencies: thm-expander-walk-hits-dense-bad-sets, thm-margulis-family-has-uniform-spectral-gap.

Proof/definition strategy and dependency rationale: Insert delta=1/4 and gap7/80; compare stationary start to a chosen vertex and explain why arbitrary starts need a prefactor or mixing period.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Theorem3.6 and Chapter8 weaker bound; numerical specialization.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### cex-nonconstructive-expanders-suffice-for-uniform-reductions

Page: expander-graphs-and-constraint-graphs-examples.

Claim and conventions: A size-indexed family of constant-degree expanders need not have a polynomial-time uniform adjacency generator.

Dependencies: fs-nonconstructive-expanders-suffice-for-uniform-reductions, lem-expander-size-adjustment-and-laziness.

Proof/definition strategy and dependency rationale: For N>=2 take H_N plus128 loop slots or H_N plus128 times the permutation swapping vertices1 and2 and fixing others. Both have degree256 and alpha<=(1+rho0)/2; their (1,2) entries differ. Enumerate polynomial-clocked generators and choose at a fresh size the opposite of its output when it outputs either candidate. Every chosen graph expands, but every generator fails once.

Source read: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Definition2.3, p19; diagonal counterexample to constructibility inference, with spectral verification.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

### ex-constraint-cloud-rounding-and-loop-counts

Page: expander-graphs-and-constraint-graphs-examples.

Claim and conventions: One unsatisfiable original edge yields two ports,129 cloud edges and387 preprocessed edges; any constant-on-cloud lift violates one edge at both stages.

Dependencies: lem-regularization-preserves-value-quantitatively, lem-constraint-expander-overlay.

Proof/definition strategy and dependency rationale: Choose the empty binary relation on that edge so no labeling satisfies it; equality and tautological additions account for all other edges. Show why val is not preserved exactly although satisfiability and a constant fraction of UNSAT are.

Source read: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Lemmas4.1–4.2, pp12–15; smallest nonempty instance.

Status: scaffolded; full proof and authoring checks remain for step 5. Next action: validate manifest and coverage.

## Page-size decision

the-polynomial-hierarchy-and-relativization: 25 items; the-polynomial-hierarchy-and-relativization-examples: 4 items; expander-graphs-and-constraint-graphs: 31 items; expander-graphs-and-constraint-graphs-examples: 4 items. Both A pages are below60; no split or deletion to meet the limit is proposed.

## Dependency and source reconciliation

All64 item IDs are unused on disk and pass the batch content-policy check. A temporary spec with only these four item lists overlaid passed validate-plan, including transitive prerequisite closure, intra-page order, B-leaf constraints and cycle checks. Existing circuit compilation, spectral theorem, Rayleigh theorem, Cauchy–Schwarz, P/NP/coNP and TQBF dependency statements were read. The circuit-to-final-block lemma is a pointwise circuit encoding, stronger than the existing formula-only equisatisfiability lemma; it does not duplicate that claim. The normalized multigraph Cheeger theorem extends the existing simple-graph statement and proves both directions. No forward references are planned.

Source title corrections: Goldreich has a distinct §9.1.3 Equivalence of definitions (pp105–107), now harvested; §9.2 is Easy Computational Observations. Arora–Barak Remark5.16 concerns class-oracle notation, not transcript consistency. Dinur §4 has Definitions4.1 and4.2 but no numbered subsections4.1/4.2; invented subsection labels were removed while retaining every definition, lemma and decoding result. Locators with numbered results are controlling; Dinur §4 is PDF pages13–15.

Scaffold provenance is ai-altered: formulations adapt resource clocks, normalized multigraph conventions, and explicit constants from the cited treatments. No step5 proof has been written or stamped. Assignment-level Corollary4.3 is carried in lem-constraint-expander-overlay: for each output labeling, plurality decoding gives UNSAT_decoded(G) <=387*max(1,2/h0)*UNSAT_output(G2). This follows from the cloud counting proof and exact overlay factor.

## Final validation checkpoint (2026-09-07)

- `node tools/coverage-checklist.mjs research/frontier-33-batch-17.coverage.json --require-destination`: PASS, 2 A pages, 153 harvested rows, 0 errors, 0 warnings. Six fetched independent documents; 97 included,31 inline,10 deferred with resolvable destinations,15 specifically out of scope. Initial low-yield warnings arose from classifying whole scaffolded definitions/theorems as inline; the final dispositions distinguish whole included items from actual proof substeps faithfully.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-17.pages.json`: PASS,64 items,0 errors,0 warnings. Every item has explicit deps. Canonical IDs and aliases checked; no collision.
- Required `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: FAIL outside this batch. At the checked snapshot, batch2's `thm-kernel-range-annihilator-identities` names missing `def-weak-star-topology` and `thm-bipolar-closure-for-linear-subspaces`. No batch2 file was changed. This is a whole-run obligation for its owner, not a local dependency to invent here.
- Required `node tools/validate-plan.mjs research/plan-spec.json`: PASS. Because the owned pages are still empty in the canonical spec, an additional temporary spec `/tmp/b17-merged-plan.json` overlays only our four pages. `node tools/validate-plan.mjs /tmp/b17-merged-plan.json`: PASS, including declared prerequisite closure, item order, no cycles/forward references/B dependencies, and the60-item A-page ceiling. The canonical spec was not modified. Full diagnostic output: `/tmp/b17-plan-validation.log`.
- Required `node tools/url-sweep.mjs --coverage research/frontier-33-batch-17.coverage.json --out /tmp/b17-url-liveness.json --recover --fail-on-dead`: FAIL,0/6 live through shell curl. Every result is curl(6), could not resolve host. Recovery also returned no reachable archive. All six original PDFs were independently fetched and read through the web reader; this is environmental DNS failure, not evidence that their texts vanished. Re-sourcing would not repair this environment, and no harvest/source was removed or reassigned. Exact report: `/tmp/b17-url-liveness.json`. URL gate remains outstanding; do not mark the batch ready.

Final mathematical limits and next actions: no authored proofs or exact-hash review stamps are claimed at scaffold stage. Step5 must expand the final-block formula proof, every diamond-order boundary case, all-size quotient construction, and cloud/overlay counting as specified above, with the exact existing dependency statements reopened. Keep the design's false-statement ID but use the carefully stated invalid inference schema; an isolated unrelativized P/NP implication is not known false. The graph-power definition is an elementary walk hyperconstraint, while the next page owns binary endpoint-view powering and its amplification proof. Both A pages are unsplit at25 and31 items; both companions contain4 examples/counterexamples.

Final artifact SHA256 values (notes excluded to avoid self-reference):
- pages: `278ce922a724067aee7363d30a4488ff167cd56dca3f724a723e30861f5e9c66`
- coverage: `664d06ae77c6f04ea7f138960b9a5475c5b09f9688f91d9f777f3874825301e9`

No workflow state, plan structure, published content, or another batch was edited. Remaining dispatch gates require working shell DNS and the batch2 owner to resolve its missing dependencies. These are recorded blockers, not approval requests.

## Step-3 fix pass

The group-g review records no separately numbered finding IDs. Its stable finding
keys are the two `page` values in
`research/frontier-33-alpha-g-step3-verdicts.json`; they are reproduced below
without renumbering.

- Finding `the-polynomial-hierarchy-and-relativization` — disposition:
  **applied; no scaffold change required**. The review verdict is `sufficient`.
  The controlling design is the single TC-27 entry in
  `research/plan-computability-theory-track.md`, headed at L1126 with its B
  companion at L1150; it agrees with the order-633 spec and its two declared
  page prerequisites. The reviewed route retains the quantifier-block,
  circuit-matrix, adaptive-transcript, collapse, and oracle-barrier
  intermediates, and keeps lowness/highness and promise conventions distinct.
  I re-fetched the four recorded sources at their manifest URLs and checked the
  harvested ranges: Arora--Barak §3.5 pp70--72, §§5.1--5.3.1 pp91--96, and
  §5.5 pp98--99; Goldreich Lecture 9 §§9.1--9.2 pp101--108 plus the
  Proposition 9.2.3 appendix pp113--114; Chang §3 pp3--4; and Goldreich,
  *On Promise Problems*, §§1.1--1.2 pp2--5. The current coverage maps every
  resulting heading to an included item, inline use, or a specific scoped
  disposition. Changed scaffold record: **none**; all 25 A and 4 B items and
  their explicit `deps` arrays remain as recorded in
  `research/frontier-33-batch-17.pages.json`.

- Finding `expander-graphs-and-constraint-graphs` — disposition: **applied;
  no scaffold change required**. The review verdict is `sufficient`. The
  controlling design is the single TC-33 entry in
  `research/plan-computability-theory-track.md`, headed at L1349 with its B
  companion at L1374; it agrees with the order-645 spec and its three declared
  page prerequisites. The reviewed dependency-closed route retains the
  Cheeger sublemmas, finite-torus/Fourier Margulis proof, size adjustment,
  cloud rounding and overlay, restricted-operator walk bounds, and bad-edge
  return; it does not import deferred PCP-hardness or alphabet-reduction
  claims. I re-fetched both recorded sources and checked HLW §§2.1--2.4
  pp19--22, §3.1--§3.1.1 pp25--26, §3.2 pp28--29, §4.5 pp40--42, and Chapter
  8 pp69--73, together with Dinur §§1.1--1.2 pp2--5, §§2.1--2.2 pp8--10
  through Fact 2.6, and §4 pp12--15. Changed scaffold record: **none**; all
  31 A and 4 B items and their explicit `deps` arrays remain as recorded in
  `research/frontier-33-batch-17.pages.json`.

Validation after the dispositions:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-17.coverage.json --require-destination --json` — PASS: 2 A pages, 153 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-17.coverage.json` — PASS: 6/6 recorded sources fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-33-batch-17.pages.json` — PASS: 64 items, 0 normalization changes, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — PASS: 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS: declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved IDs among populated plan pages. Its redundant-prerequisite diagnostics are non-fatal and do not authorize a change to the plan or this manifest.

No plan, item, library, workflow-state, coverage, or manifest record was changed
in this fix pass. The next action remains the engine-owned splice/authoring
stages; no mathematical scaffold obligation is open for batch 17.

## Step-5 authoring

Active scope: the 64 manifest IDs and four assigned draft pages only. Required inputs and group-g reviews present. Canonical dependency statements reopened. Corrections identified before authoring: highness compares with Sigma_k^SAT, with k=0 benchmark P^SAT (not an asserted NP equality); negative-exponent Fourier convention gives a positive affine phase. These are mathematical corrections to scaffold prose, not changes to planned IDs or dependency structure. No independent review or workflow state is changed.

### Authored def-polynomial-hierarchy-levels

Claim and conventions: All languages are subsets of $\{0,1\}^*$. Put $\Sigma_0^p=\Pi_0^p=P$ as in [[def-p]]. For a fixed integer $k\ge1$, $L\in\Sigma_k^p$ means that a deterministic polynomial-time predicate $R$ and polynomially bounded, polynomial-time computable lengths $p_1,\ldots,p_k$ satisfy
$$x\in L\iff \exists y_1\in\{0,1\}^{p_1(|x|)}\ \forall y_2\in\{0,1\}^{p_2(|x|)}\cdots Q_k y_k\in\{0,1\}^{p_k(|x|)}\ R(x,y_1,\ldots,y_k).$$
Here $Q_j$ is existential for odd $j$ and universal for even $j$. Starting universally defines $\Pi_k^p$. Write $\mathrm{PH}=\bigcup_{k\ge0}\Sigma_k^p$. The level and all polynomials are fixed for a language, not part of the input. Length zero allows the single empty string. Variable-length witnesses can be encoded with a length field and padding; every padded string decodes to a bounded-length string, so universal blocks introduce no invalid-witness exception.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §§5.1–5.2, Definitions5.1,5.4, pp91–92.

Dependencies: def-p. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-relativized-complexity-class

Claim and conventions: Fix a total language $A\subseteq\{0,1\}^*$. An oracle machine writes a query word and receives its membership bit in $A$ in one answer step. Query writing counts toward time and the query tape toward space. A polynomial time clock bounds every branch for every oracle. $P^A$ and $NP^A$ are deterministic and nondeterministic polynomial-time oracle classes, respectively; the latter equivalently uses a polynomial-length witness and a deterministic polynomial-time $A$-oracle verifier. Use the conventions of [[def-p]] and [[def-np-by-verifiers]].

For $\Sigma_k^{p,A}$ and $\Pi_k^{p,A}$, replace the deterministic predicate in [[def-polynomial-hierarchy-levels]] by a $P^A$ predicate; level zero is $P^A$. Define $\mathrm{PSPACE}^A$ by deterministic polynomial space under the charged-query convention. For a language class $\mathcal D$, $P^{\mathcal D}=\bigcup_{B\in\mathcal D}P^B$ and $NP^{\mathcal D}=\bigcup_{B\in\mathcal D}NP^B$. Finally $\Delta_{k+1}^p=P^{\Sigma_k^p}$. With a fixed base oracle, a machine may query both $A$ and a language $B$; encode this by the tagged union $A\oplus B=\{0x:x\in A\}\cup\{1x:x\in B\}$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Definitions3.6–3.7, pp70–71.

Dependencies: def-p, def-np-by-verifiers, def-polynomial-hierarchy-levels. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-relativizing-proof-technique

Claim and conventions: An argument about complexity classes **relativizes** if its asserted reasoning remains valid when every machine in it receives the same arbitrary total membership oracle, using the resource conventions of [[def-relativized-complexity-class]]. This is a property of an argument, not a claimed algorithm for classifying all proofs.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Relativization, pp70–72.

Dependencies: def-relativized-complexity-class. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-lowness-and-highness

Claim and conventions: For a language $A\in NP$ and an integer $k\ge0$, define
$$\mathrm{Low}_k=\{A\in NP:\Sigma_k^{p,A}=\Sigma_k^p\},\qquad \mathrm{High}_k=\{A\in NP:\Sigma_k^{p,A}=\Sigma_k^{p,SAT}\}.$$
The relativized levels and $\Sigma_0^{p,A}=P^A$ use [[def-relativized-complexity-class]]; SAT denotes satisfiability of general Boolean formulas, the first-level complete language supplied in [[thm-quantifier-and-oracle-characterizations-of-ph]]. At $k=0$ the highness benchmark is $P^{SAT}$; no identification of that class with $NP$ is assumed. At positive levels the oracle characterization identifies $\Sigma_k^{p,SAT}$ with $\Sigma_{k+1}^p$. More generally, lowness for a specified oracle machine class $\mathcal C$ means $\mathcal C^A=\mathcal C$. Highness here concerns polynomial-time oracle access, not many-one completeness or computability-theoretic jumps.

Sources and locators: Richard Chang, On the Structure of Bounded Queries to Arbitrary NP Sets; https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf; §3 High and Low Sets, pp3–4.

Dependencies: thm-quantifier-and-oracle-characterizations-of-ph, def-relativized-complexity-class. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-promise-problem

Claim and conventions: A **promise problem** is a pair $(Y,N)$ of disjoint subsets of $\{0,1\}^*$. Its promise is $Y\cup N$. A deterministic solver must accept every word of $Y$ and reject every word of $N$, with either answer allowed elsewhere. The pair belongs to $\mathrm{PromiseP}$ if such a solver has a polynomial time bound on every input.

It belongs to $\mathrm{PromiseNP}$ if there are a polynomial $p$ and a deterministic polynomial-time predicate $V(x,w)$ such that every $x\in Y$ has some $w$ with $|w|\le p(|x|)$ and $V(x,w)=1$, whereas for every $x\in N$ every such $w$ has $V(x,w)=0$. The promise need not be decidable; either side or both sides may be empty. When $Y\cup N=\{0,1\}^*$, this is the ordinary language decision convention.

Sources and locators: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.1 Definition1.1 and §1.2 Definition1.2, pp2–4.

Dependencies: none. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-promise-preserving-reduction

Claim and conventions: For promise problems $(Y,N)$ and $(Y',N')$ in [[def-promise-problem]], a polynomial-time many-one promise reduction is a total polynomial-time function $f$ satisfying $f(Y)\subseteq Y'$ and $f(N)\subseteq N'$. There is no condition on $f$ outside $Y\cup N$.

A polynomial-time oracle promise reduction is a polynomially clocked deterministic oracle machine $M$ which solves $(Y,N)$ for **every** total language $B$ satisfying $Y'\subseteq B$ and $B\cap N'=\varnothing$. This uses binary, consistent membership completions: an off-promise word may have either bit, but repeated queries to that word receive the same bit. The clock is uniform over all completions.

Sources and locators: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.2 Definition1.3 and oracle reduction paragraph, pp4–5.

Dependencies: def-promise-problem. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored rem-oracle-and-promise-conventions-are-distinct

Claim and conventions: A total membership oracle in [[def-relativized-complexity-class]] fixes the answer on every query word. A promise target in [[def-promise-preserving-reduction]] describes a collection of total completions. Correctness of a promise reduction must hold for each completion, including its arbitrary answers outside the target promise. A promised input to the caller does not by itself guarantee that the caller's queries satisfy the target promise.

Sources and locators: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.2 following Definition1.3, p5.

Dependencies: def-relativized-complexity-class, def-promise-preserving-reduction. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-regular-multigraph-and-normalized-adjacency

Claim and conventions: A finite $d$-regular adjacency-slot multigraph on $V=\{1,\ldots,n\}$, with $n\ge1$ and integer $d>0$, is a symmetric matrix $A\in\mathbb Z_{\ge0}^{n\times n}$ with every row sum $d$. $A_{uv}$ counts slots from $u$ to $v$; diagonal entries count loop slots. Its normalized adjacency is $M=A/d$. We use $\langle f,g\rangle=n^{-1}\sum_v f(v)\overline{g(v)}$ unless an unnormalized inner product is explicitly specified.

An adjacency list records the $d$ destinations per vertex, including repetitions. An ordinary undirected edge has two incidence slots paired by reversal; an ordinary loop has two slots at the same vertex. Such a representation requires even diagonal entries. Any symmetric integer matrix can be converted to it by doubling every slot. Uniform directed-slot sampling chooses one of the $nd$ slots; for a reverse-paired graph it induces the uniform distribution on its $nd/2$ ordinary edges. Connectivity uses positive off-diagonal entries. When $n=1$, the mean-zero subspace is $\{0\}$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §§2.1–2.3, pp19–21; Dinur §2.1, p8.

Dependencies: none. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-spectral-edge-and-vertex-expansion

Claim and conventions: For the regular multigraph and spectral conventions in [[lem-constant-vector-is-a-top-eigenvector]], put $\alpha=\|M|_{\mathbf1^\perp}\|$. For $n\ge2$ order the eigenvalues $1=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$, counting multiplicity, and put $\gamma=1-\mu_2$. Thus $\alpha=\max_{j\ge2}|\mu_j|$, which also controls negative eigenvalues.

Write $\operatorname{cut}(S)=\sum_{u\in S,v\notin S}A_{uv}$ and $\partial_VS=\{v\notin S:A_{uv}>0\text{ for some }u\in S\}$. Normalized edge expansion and external vertex expansion are
$$h=\min_{0<|S|\le n/2}\frac{\operatorname{cut}(S)}{d|S|},\qquad h_V=\min_{0<|S|\le n/2}\frac{|\partial_VS|}{|S|}.$$
For $n=1$, put $\alpha=0$ and leave $\mu_2,\gamma,h,h_V$ undefined; cut-expansion assertions are vacuous. A bounded-degree family is an expander family when its normalized edge expansion has a positive uniform lower bound for $n\ge2$. Polynomial-time constructibility means a uniform algorithm outputs the adjacency list in time polynomial in $n$; neighbor computation in time polynomial in $\log n$ is a stronger requirement.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Definitions2.1–2.3 and §2.3, pp19–21.

Dependencies: lem-constant-vector-is-a-top-eigenvector. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-margulis-gabber-galil-graph

Claim and conventions: For integer $m\ge1$, let $V=(\mathbb Z/m\mathbb Z)^2$. The Margulis–Gabber–Galil graph has the following eight slots at $(x,y)$, with all arithmetic modulo $m$:
$$(x+2y,y),\ (x+2y+1,y),\ (x-2y,y),\ (x-2y-1,y),\ (x,y+2x),\ (x,y+2x+1),\ (x,y-2x),\ (x,y-2x-1).$$
Multiplicities and fixed points are retained under [[def-regular-multigraph-and-normalized-adjacency]]. Write $T_1(x,y)=(x+2y,y)$ and $T_2(x,y)=(x,y+2x)$. Pair each forward affine map with its inverse as reverse ports, even when their destinations coincide.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Chapter8 Construction8.1, p69.

Dependencies: def-regular-multigraph-and-normalized-adjacency. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-finite-torus-fourier-transform

Claim and conventions: On $V=(\mathbb Z/m\mathbb Z)^2$, $m\ge1$, let $\omega=e^{2\pi i/m}$ and $\chi_b(x)=\omega^{b_1x_1+b_2x_2}$. Residue representatives do not affect these values. With inner product $\langle f,g\rangle=m^{-2}\sum_x f(x)\overline{g(x)}$, define
$$\widehat f(b)=\langle f,\chi_b\rangle=m^{-2}\sum_x f(x)\omega^{-b\cdot x}.$$
The norm is $\|f\|^2=m^{-2}\sum_x|f(x)|^2$. At $m=1$ there is one character, the constant function one. The sign in the exponent is part of this convention.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.1.1 Definition8.4 and torus examples, p70.

Dependencies: none. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-constraint-graph-and-labeling-value

Claim and conventions: A binary constraint graph consists of a finite ordinary undirected multigraph, with paired incidence slots as in [[def-regular-multigraph-and-normalized-adjacency]], a finite nonempty alphabet $\Sigma$, and for each edge a relation $R_e\subseteq\Sigma^2$ in a specified endpoint order. Reversing that order transposes the relation. Loops have two incidences and test $R_e(a,a)$. Relations are explicit Boolean tables.

For a labeling $\sigma:V\to\Sigma$, $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied. Put $\operatorname{val}(G)=\max_\sigma\operatorname{val}_\sigma(G)$ and $\operatorname{UNSAT}_\sigma(G)=1-\operatorname{val}_\sigma(G)$, $\operatorname{UNSAT}(G)=\min_\sigma\operatorname{UNSAT}_\sigma(G)$. An edgeless graph has value one. Isolated vertices may be removed without changing value. Fractions computed using directed slots agree with edge fractions. Duplicating each ordinary edge preserves them. An explicit representation uses $O(|V|+|E||\Sigma|^2)$ table entries and endpoint names of $O(\log(|V|+2))$ bits.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §1.1 Definition1.1 and §1.2 Definition1.2, pp2–3.

Dependencies: def-regular-multigraph-and-normalized-adjacency. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-constraint-graph-regularization

Claim and conventions: Use the degree-$128$ graphs $H_r$ of [[lem-expander-size-adjustment-and-laziness]], whose unnormalized edge expansion is at least $h_0=7/10$ when $r\ge2$. For a constraint graph $G$ as in [[def-constraint-graph-and-labeling-value]] with $E\ne\varnothing$, remove isolated vertices and replace each vertex of degree $r$ by a cloud of its $r$ incidence ports. Put $H_r$ inside that cloud, with equality on every edge. Keep one external edge for every original edge, joining its two designated ports and carrying its original relation. A loop's two ports are distinct. Call the resulting graph $G_1$.

On the $2|E|$ ports, add a copy of $H_{2|E|}$ with tautological relations, and at each port add $65$ ordinary tautological loops, i.e. $130$ loop slots. Call this $G_2$. Its degree is $129+128+130=387$; $G_1$ has degree $129$. The alphabet is unchanged. For an edgeless input, output the empty graph with value one; positive-degree and nonempty-size claims about $G_1,G_2$ are restricted to $E\ne\varnothing$. Fix an alphabet ordering for plurality tie breaking and for decoding removed isolated vertices.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Definitions4.1–4.2, PDF pages13–14, with explicit degree and loop conventions.

Dependencies: def-constraint-graph-and-labeling-value, lem-expander-size-adjustment-and-laziness. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-graph-power-and-walk-constraint

Claim and conventions: For a $d$-regular constraint graph with normalized adjacency $M$ under [[def-constraint-graph-and-labeling-value]], and an integer $t\ge1$, the adjacency-slot graph power has one slot for every length-$t$ port walk. Its degree is $d^t$, its adjacency is $A^t$, and its transition matrix is $M^t$: matrix multiplication counts walks with all multiplicities. Walk reversal supplies an inverse slot.

The predicate of a walk $(v_0,e_1,v_1,\ldots,e_t,v_t)$ tests every original edge relation on the labels of its incident vertex occurrences. Repeated occurrences of one vertex use the same label. Thus it is a conjunction of $t$ tests, on at most $t+1$ original vertices; it is not in general a binary predicate on endpoint letters. A fixed labeling satisfies the walk predicate exactly when none of the traversed edges is violated.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §1.2 Powering, pp4–5; underlying walk edges and original constraints.

Dependencies: def-constraint-graph-and-labeling-value. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored def-gap-csp

Claim and conventions: Fix a finite nonempty alphabet and thresholds $0\le s<c\le1$. Using the explicit binary constraint encoding of [[def-constraint-graph-and-labeling-value]], $\operatorname{GapCSP}(c,s)$ is the disjoint yes/no pair
$$Y=\{G:\operatorname{val}(G)\ge c\},\qquad N=\{G:\operatorname{val}(G)\le s\}.$$
Inputs with $s<\operatorname{val}(G)<c$ are outside the promise. Malformed encodings are also outside it. For $0<\varepsilon\le1$, $\operatorname{GapCSP}(1,1-\varepsilon)$ distinguishes satisfiability from $\operatorname{UNSAT}(G)\ge\varepsilon$. This definition asserts no hardness theorem.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §1.1 Definition1.1 and Theorem1.2 formulation, pp2–3.

Dependencies: def-constraint-graph-and-labeling-value. Provenance: adapted formulation definition (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: definition recorded; dependent proofs remain. Next action: continue assigned items, then run required validators.

### Authored lem-ph-quantifier-block-closure

Claim and conventions: For each fixed $k\ge0$, both $\Sigma_k^p$ and $\Pi_k^p$ are closed under polynomial-time many-one preimages and polynomially many uniformly indexed conjunctions and disjunctions. Precisely, if the language of pairs $(x,i)$ lies in the class and $0\le i<q(|x|)$ for a polynomial-time computable polynomial bound $q$, then both “every such $i$” and “some such $i$” define languages in that class. Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each is contained in both classes at level $k+1$. These assertions also hold with one fixed base oracle.

Sources and locators: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Lecture9 §9.1, Proposition9.1.1 p104 and proof of Theorem9.9 pp105–107.

Dependencies: def-polynomial-hierarchy-levels. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored prop-np-and-conp-are-the-first-levels

Claim and conventions: $\Sigma_1^p=NP$ and $\Pi_1^p=coNP$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2 Remark5.5, p92.

Dependencies: def-polynomial-hierarchy-levels, def-np-by-verifiers, def-conp. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-ph-circuit-matrix-final-block-encoding

Claim and conventions: For a fixed polynomial-time Boolean predicate $R(x,y)$, and a polynomial bound on $|y|$ in $|x|$, one can construct in time polynomial in $|x|$ formulas $F_\exists(x;y,z)$ in 3CNF and $F_\forall(x;y,z)$ in 3DNF such that, for every allowed $y$,
$$R(x,y)\iff\exists z\,F_\exists(x;y,z)\iff\forall z\,F_\forall(x;y,z).$$
Here clauses or terms have at most three literals. Both formula length and $|z|$ are polynomially bounded.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.2 Example5.9, pp93–94; constructive circuit prerequisite on disk.

Dependencies: lem-polynomial-time-computations-have-logspace-uniform-circuits, def-boolean-circuit-size-depth-fanin-and-basis. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-bounded-alternation-qbf-is-level-complete

Claim and conventions: For every fixed $k\ge1$, truth of prenex Boolean formulas with $k$ alternating blocks beginning existentially is $\Sigma_k^p$-complete under polynomial-time many-one reductions. The universally starting version is $\Pi_k^p$-complete. The matrix is a general Boolean formula, empty blocks are allowed, and malformed encodings are rejected.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.2 Example5.9, pp93–94.

Dependencies: def-polynomial-hierarchy-levels, lem-ph-circuit-matrix-final-block-encoding, def-polynomial-time-many-one-reduction. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-ph-adaptive-oracle-transcript-normal-form

Claim and conventions: For fixed $k\ge1$ and $B\in\Sigma_k^p$, every nondeterministic polynomial-time $B$-oracle computation has a $\Sigma_{k+1}^p$ definition. More generally, for a fixed total base oracle $A$ and $B\in\Sigma_k^{p,A}$, polynomial nondeterministic access to both $A$ and $B$ has a $\Sigma_{k+1}^{p,A}$ definition.

Sources and locators: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Lecture9 Theorem9.9, pp105–107, proof in both directions.

Dependencies: def-relativized-complexity-class, lem-ph-quantifier-block-closure. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-quantifier-and-oracle-characterizations-of-ph

Claim and conventions: For every $k\ge0$,
$$\Sigma_{k+1}^p=NP^{\Sigma_k^p},\qquad\Pi_{k+1}^p=coNP^{\Sigma_k^p},\qquad\Delta_{k+1}^p=P^{\Sigma_k^p}.$$
For $k\ge1$ a fixed complete bounded-alternation QBF language can replace the class oracle. At $k=1$, this gives the usual satisfiability oracle. The quantifier levels also equal polynomial-time alternating computations with at most $k$ blocks of existential/universal choices, beginning with the indicated polarity. With a fixed base oracle $A$, the same oracle characterization holds using access to both $A$ and a language in $\Sigma_k^{p,A}$.

Sources and locators: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Lecture9 Theorem9.9, pp105–107; AB §5.3 Claim5.11 and §5.5 Theorem5.15.

Dependencies: lem-ph-adaptive-oracle-transcript-normal-form, thm-bounded-alternation-qbf-is-level-complete, prop-np-and-conp-are-the-first-levels. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored prop-ph-containments-and-polynomial-space

Claim and conventions: For every $k\ge0$,
$$\Sigma_k^p\cup\Pi_k^p\subseteq\Delta_{k+1}^p\subseteq\Sigma_{k+1}^p\cap\Pi_{k+1}^p.$$
Moreover $\mathrm{PH}\subseteq\mathrm{PSPACE}$.

Sources and locators: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Propositions9.1.1,9.1.2,9.2.1, pp102–108.

Dependencies: thm-quantifier-and-oracle-characterizations-of-ph, lem-ph-quantifier-block-closure, def-pspace-and-npspace. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-collapse-at-one-level-propagates

Claim and conventions: If $k\ge1$ and $\Sigma_k^p=\Pi_k^p$, then $\Sigma_{k+1}^p=\Pi_{k+1}^p=\Sigma_k^p$.

Sources and locators: Goldreich, Computational Complexity lecture notes; https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf; Proposition9.2.3 and appendix proof, pp108,113–114.

Dependencies: lem-ph-quantifier-block-closure. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-sigma-k-equals-pi-k-implies-ph-collapse

Claim and conventions: For fixed $k\ge1$, $\Sigma_k^p=\Pi_k^p$ implies $\mathrm{PH}=\Sigma_k^p=\Pi_k^p$. Also $P=NP$ implies $\mathrm{PH}=P$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.1 Theorem5.6, pp92–93.

Dependencies: lem-collapse-at-one-level-propagates. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored cor-ph-complete-language-forces-collapse

Claim and conventions: If a language $C\in\mathrm{PH}$ is polynomial-time many-one hard for all of PH, then PH collapses to a finite level. In particular, $\mathrm{PH}=\mathrm{PSPACE}$ implies such a collapse.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §5.2.2 Claim5.7 and Remark5.8, p93.

Dependencies: lem-ph-quantifier-block-closure, thm-sigma-k-equals-pi-k-implies-ph-collapse, thm-tqbf-is-pspace-complete. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-standard-containments-relativize

Claim and conventions: For every fixed total oracle $A$, $P^A\subseteq NP^A$, $NP^A\cup coNP^A\subseteq\mathrm{PSPACE}^A$, and $\mathrm{PH}^A\subseteq\mathrm{PSPACE}^A$. The verifier characterization, bounded-level oracle characterization, and implication $\Sigma_k^{p,A}=\Pi_k^{p,A}\Rightarrow\mathrm{PH}^A=\Sigma_k^{p,A}$ for $k\ge1$ all hold using the same $A$ throughout.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 discussion after Theorem3.9, pp71–72; Goldreich Theorem9.9 proof.

Dependencies: def-relativized-complexity-class, thm-quantifier-and-oracle-characterizations-of-ph, prop-ph-containments-and-polynomial-space. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-oracle-diagonalization-finite-extension

Claim and conventions: Let $c$ be a finite partial assignment of membership bits to binary words, and let $M$ be a deterministic oracle machine with a fixed polynomial clock $p(n)$. There exist $n\ge1$ and a finite extension $c'$ of $c$ such that every total oracle $B$ extending $c'$ makes $M^B(1^n)$ disagree with membership in $L_B=\{1^j:B\cap\{0,1\}^j\ne\varnothing\}$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 proof of Theorem3.9, p72.

Dependencies: def-relativized-complexity-class. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-an-oracle-separates-p-from-np

Claim and conventions: There is a total oracle $B$ for which $P^B\ne NP^B$. In fact $L_B=\{1^n:B\cap\{0,1\}^n\ne\varnothing\}$ lies in $NP^B\setminus P^B$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Theorem3.9, pp71–72.

Dependencies: lem-oracle-diagonalization-finite-extension. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-polynomial-space-oracle-absorption

Claim and conventions: $NP^{TQBF}\subseteq\mathrm{PSPACE}\subseteq P^{TQBF}$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Claim3.8(3), pp70–71, adapted from EXP-complete to the established PSPACE-complete TQBF oracle.

Dependencies: def-relativized-complexity-class, def-pspace-and-npspace, thm-tqbf-is-pspace-complete. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-an-oracle-collapses-p-and-np

Claim and conventions: For $A=TQBF$, $P^A=NP^A=\mathrm{PSPACE}$.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Theorem3.9 and Claim3.8(3), pp70–72; explicit TQBF adaptation.

Dependencies: lem-polynomial-space-oracle-absorption. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored cor-relativization-alone-cannot-resolve-p-versus-np

Claim and conventions: Neither an argument for $P=NP$ nor an argument for $P\ne NP$ can be valid unchanged relative to every total oracle.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 conclusion, p72.

Dependencies: def-relativizing-proof-technique, thm-an-oracle-separates-p-from-np, thm-an-oracle-collapses-p-and-np. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored prop-elementary-high-low-identities

Claim and conventions: For the NP high/low classes, $\mathrm{Low}_0=P$, $\mathrm{Low}_1=NP\cap coNP$, and $\mathrm{High}_0$ consists exactly of NP languages polynomial-time Turing complete for NP. Both $\mathrm{Low}_k\subseteq\mathrm{Low}_{k+1}$ and $\mathrm{High}_k\subseteq\mathrm{High}_{k+1}$ hold for every $k\ge0$.

Sources and locators: Richard Chang, On the Structure of Bounded Queries to Arbitrary NP Sets; https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf; §3 properties6–8 and preceding nesting statement, pp3–4.

Dependencies: def-lowness-and-highness, prop-np-and-conp-are-the-first-levels, lem-ph-adaptive-oracle-transcript-normal-form. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored fs-relativized-separations-prove-unrelativized-separations

Claim and conventions: **False inference schema:** a separation $P^B\ne NP^B$ for one total oracle can be transferred independently of the oracle, yielding $P^A\ne NP^A$ for every total oracle $A$ (and in particular for the empty oracle).

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 Theorem3.9 and relativization discussion, pp71–72.

Dependencies: thm-an-oracle-separates-p-from-np, thm-an-oracle-collapses-p-and-np. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored ex-np-and-conp-are-the-first-levels

Claim and conventions: Formula satisfiability and tautology exhibit the existential and universal first levels. For a finite simple graph $G$ and integer $k$, the language $\mathrm{EXACT\mbox{-}INDSET}$ defined by $\alpha(G)=k$ belongs to $\Sigma_2^p\cap\Pi_2^p$; no completeness claim is made for it. Malformed inputs and $k<0$ or $k>|V(G)|$ are rejected.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; Examples5.2–5.3 and5.9, pp91–94.

Dependencies: prop-np-and-conp-are-the-first-levels, thm-bounded-alternation-qbf-is-level-complete. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored ex-relativization-alone-cannot-resolve-p-versus-np

Claim and conventions: A TQBF oracle absorbs polynomial nondeterministic computation into PSPACE. A finite diagonal stage with clock $p(n)=n^2$ and $n=8$ can defeat a machine on $1^8$, provided all earlier committed words have length less than eight. This finite stage is not a complete separating oracle.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5 proof of Theorem3.9, pp71–72.

Dependencies: cor-relativization-alone-cannot-resolve-p-versus-np, lem-polynomial-space-oracle-absorption. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored cex-relativized-separations-prove-unrelativized-separations

Claim and conventions: The oracle-independent transfer schema refuted in [[fs-relativized-separations-prove-unrelativized-separations]] fails: a separating oracle cannot force separation in every other oracle world.

Sources and locators: Arora–Barak, Computational Complexity, 2007 draft; https://theory.cs.princeton.edu/complexity/book.pdf; §3.5, pp71–72.

Dependencies: fs-relativized-separations-prove-unrelativized-separations. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored ex-promise-oracle-off-promise-answers

Claim and conventions: For the target promise $Y'=\{0\}$, $N'=\{1\}$, a caller which accepts its sole promised YES input exactly when the target answers YES to query $00$ is not a valid oracle promise reduction.

Sources and locators: Goldreich, On Promise Problems; https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf; §1.2 oracle-reduction convention, p5; finite illustration.

Dependencies: def-promise-preserving-reduction, rem-oracle-and-promise-conventions-are-distinct. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-constant-vector-is-a-top-eigenvector

Claim and conventions: For a finite $d$-regular adjacency-slot multigraph, $M\mathbf1=\mathbf1$, every eigenvalue of $M$ lies in $[-1,1]$, and $\mathbf1^\perp$ is invariant. The multiplicity of eigenvalue $1$ equals the number of connected components. For a connected graph, $-1$ is an eigenvalue if and only if its positive slots join opposite parts of a bipartition, so in particular it has no loop slots.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.3 spectral properties, pp20–21.

Dependencies: def-regular-multigraph-and-normalized-adjacency, cor-real-spectral-theorem-for-self-adjoint-endomorphisms. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-expander-mixing-lemma

Claim and conventions: For any subsets $S,T$ of a finite $d$-regular adjacency-slot graph on $n\ge1$ vertices, let $e(S,T)=\sum_{u\in S,v\in T}A_{uv}$ count ordered slots. Then
$$\left|e(S,T)-\frac{d|S||T|}{n}\right|\le\alpha d\sqrt{|S|(1-|S|/n)\,|T|(1-|T|/n)}.$$
Overlap and loop slots are allowed.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.4 Lemma2.5, p21.

Dependencies: def-spectral-edge-and-vertex-expansion, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-cheeger-indicator-and-positive-part-energy

Claim and conventions: Let $n\ge2$ and use normalized edge expansion $h$ and algebraic gap $\gamma=1-\mu_2$. Then $\gamma\le2h$. Moreover some sign of a nonzero mean-zero $\mu_2$ eigenvector has positive part $f\ne0$ supported on at most $n/2$ vertices and satisfying $\langle f,(I-M)f\rangle\le\gamma\|f\|^2$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §4.5.1 and beginning §4.5.2, pp40–42.

Dependencies: def-spectral-edge-and-vertex-expansion, cor-rayleigh-quotient-extreme-eigenvalue-characterisation. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-cheeger-sweep-and-layer-cake

Claim and conventions: For a finite $d$-regular graph on $n\ge2$ vertices and a nonnegative $f$ supported on at most $n/2$ vertices, use the unnormalized inner product $\langle f,g\rangle_0=\sum_v f(v)g(v)$ and energy $E(f)=\langle f,(I-M)f\rangle_0$. Then
$$h\|f\|_0^2\le\frac1d\sum_{u<v}A_{uv}|f(u)^2-f(v)^2|\le\sqrt{2E(f)\|f\|_0^2}.$$
In particular, the indicator and positive-part estimates $\gamma\le2h$ and $E(f_+)\le\gamma\|f_+\|_0^2$ of the preceding lemma may be combined with this inequality.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §4.5.2 Lemmas4.12–4.13, pp41–42.

Dependencies: lem-cheeger-indicator-and-positive-part-energy, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-cheeger-inequalities-for-finite-regular-graphs

Claim and conventions: For a finite $d$-regular adjacency-slot multigraph on $n\ge2$ vertices,
$$\frac{\gamma}{2}\le h\le\sqrt{2\gamma},\qquad h\le h_V\le dh.$$
Here $\gamma=1-\mu_2$ is the algebraic gap; it is not replaced by $1-\alpha$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §4.5 Theorem4.11 (also Theorem2.4), pp40–42.

Dependencies: lem-cheeger-sweep-and-layer-cake. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored cor-expander-independent-sets-coloring-and-diameter

Claim and conventions: If $S$ is independent in a $d$-regular adjacency-slot graph (meaning $e(S,S)=0$), then $|S|\le\alpha n/(1+\alpha)$. Thus a loopless graph with $\alpha>0$ needs at least $(1+\alpha)/\alpha$ colors. For $n\ge2$ and $h>0$ its diameter is at most $2\lceil\log n/\log(1+h)\rceil+2$. A singleton has diameter zero.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.4 bullets after Lemma2.6, pp21–22; constants sharpened using centered indicators.

Dependencies: thm-expander-mixing-lemma, thm-cheeger-inequalities-for-finite-regular-graphs. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-margulis-family-is-constant-degree-and-neighbor-computable

Claim and conventions: The Margulis graph on $(\mathbb Z/m\mathbb Z)^2$ is symmetric and $8$-regular, with $m^2$ vertices, for every $m\ge1$. One specified neighbor is computable in polynomial time in $\log(m+2)$; the whole adjacency list is computable in $O(m^2\operatorname{poly}(\log(m+2)))$ bit operations.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Construction8.1, p69; explicit arithmetic cost analysis.

Dependencies: def-margulis-gabber-galil-graph. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-finite-torus-fourier-orthogonality-and-affine-change

Claim and conventions: For the normalized negative-exponent Fourier transform on $(\mathbb Z/m\mathbb Z)^2$, the characters are an orthonormal basis, and
$$f=\sum_b\widehat f(b)\chi_b,\quad \|f\|^2=\sum_b|\widehat f(b)|^2,\quad \sum_x f(x)=0\iff\widehat f(0)=0.$$
For every invertible matrix $T$ over $\mathbb Z/m\mathbb Z$, and $g(x)=f(Tx+a)$,
$$\widehat g(y)=\omega^{\,y\cdot T^{-1}a}\widehat f(T^{-\mathsf T}y).$$

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.1.1 Propositions8.5–8.6, pp70–71, corrected normalization.

Dependencies: def-finite-torus-fourier-transform, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-fourier-analysis-of-margulis-adjacency

Claim and conventions: Let $T_1(x,y)=(x+2y,y)$, $T_2(x,y)=(x,y+2x)$ modulo $m$. Define the forward operator $Kf(x)=f(T_1x)+f(T_1x+e_1)+f(T_2x)+f(T_2x+e_2)$. For real mean-zero $f$, put $g=|\widehat f|$ and
$$Q(g)=\sum_z2g(z)\bigl[g(T_2^{-1}z)|\cos(\pi z_1/m)|+g(T_1^{-1}z)|\cos(\pi z_2/m)|\bigr].$$
Then $g(0)=0$, $\|f\|^2=\sum_z g(z)^2$, $|\langle f,Kf\rangle|\le Q(g)$, and the full Margulis adjacency $A$ satisfies $|\langle f,Af\rangle|\le2Q(g)$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.2 Theorems8.7–8.8, pp71–72; only the reduction, not the sharp constant.

Dependencies: lem-finite-torus-fourier-orthogonality-and-affine-change, lem-margulis-family-is-constant-degree-and-neighbor-computable. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-margulis-diamond-weight-bound

Claim and conventions: For every integer $m\ge1$ and every nonnegative function $g$ on $(\mathbb Z/m\mathbb Z)^2$ with $g(0)=0$, the quadratic expression $Q$ in the Fourier reduction satisfies
$$Q(g)\le\frac{73}{20}\sum_z g(z)^2.$$
Consequently, for the forward/full adjacency operators and normalized transform in that reduction, $|\langle f,Af\rangle|\le(73/10)\|f\|^2$ for real mean-zero $f$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §8.2 Proposition8.9 and complete weaker-bound proof, pp72–73.

Dependencies: lem-fourier-analysis-of-margulis-adjacency. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-margulis-family-has-uniform-spectral-gap

Claim and conventions: For every $m\ge2$ the normalized Margulis adjacency has absolute nontrivial norm $\alpha\le73/80$, hence algebraic gap at least $7/80$. For $m=1$ the mean-zero space is zero and $\alpha=0$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Theorem8.2 with fully proved weaker bound at end §8.2, pp69–73.

Dependencies: lem-margulis-diamond-weight-bound, cor-real-spectral-theorem-for-self-adjoint-endomorphisms. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-expander-size-adjustment-and-laziness

Claim and conventions: For every integer $N\ge1$ there is a polynomial-time constructible reverse-paired $128$-regular multigraph $H_N$ on exactly $N$ vertices with
$$\alpha(H_N)\le\rho_0:=1-\frac{49}{1638400}<1.$$
For $N\ge2$ every $S$ satisfies $\operatorname{cut}(S)\ge(7/10)\min(|S|,N-|S|)$. Every vertex has loops.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Lemma2.1 and Corollary2.4, pp8–9; HLW Construction8.1 and §4.5; explicit constants adapted.

Dependencies: thm-margulis-family-has-uniform-spectral-gap, thm-cheeger-inequalities-for-finite-regular-graphs. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored cor-explicit-polynomial-time-constant-degree-expanders-exist

Claim and conventions: There is a uniform polynomial-time algorithm producing, for each positive vertex count $N$, a degree-$128$ expander $H_N$ with absolute nontrivial norm at most $1-49/1638400$. The output has $128N$ adjacency slots; its bit-time cost is polynomial in $N$.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Lemma2.1, p8, instantiated by preceding construction.

Dependencies: lem-expander-size-adjustment-and-laziness. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-cloud-plurality-rounding

Claim and conventions: For any labeling of the cloud graph $G_1$ of a nonempty-edge constraint graph $G$, decode each original vertex by its cloud's plurality label, using fixed tie breaking. Let $S$ count the ports disagreeing with that label, and let $U_{\rm int},U_{\rm ext}$ count violated internal equality and external edges. Then
$$U_{\rm int}\ge\frac{h_0}{2}S,\qquad U_G\le U_{\rm ext}+S,\qquad h_0=7/10,$$
where $U_G$ is the decoded violation count in $G$.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 proof of Lemma4.1, PDF pages13–14.

Dependencies: def-constraint-graph-regularization. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-regularization-preserves-value-quantitatively

Claim and conventions: Let $G$ have $m=|E|>0$ ordinary edges, with the fixed nonempty alphabet and paired-loop convention. Its cloud graph $G_1$ is degree $129$, has $2m$ vertices and $129m$ ordinary edges, and is constructible in polynomial time without changing the alphabet. Put $K=\max(1,2/h_0)=20/7$ and $c=1/(129K)$. Then
$$c\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_1)\le\operatorname{UNSAT}(G)/129.$$
For every labeling $\tau$ of $G_1$, plurality decoding $D\tau$ satisfies $\operatorname{UNSAT}_{D\tau}(G)\le129K\operatorname{UNSAT}_\tau(G_1)$. For an edgeless input use the empty output convention and UNSAT zero.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Lemma4.1, PDF pages13–14.

Dependencies: lem-cloud-plurality-rounding. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-constraint-expander-overlay

Claim and conventions: For $G$ with $m>0$ edges, the full preprocessing graph $G_2$ has $2m$ vertices, degree $387$, and $387m$ ordinary edges over the same alphabet. It has loops at every vertex and
$$\alpha(G_2)\le\rho_2:=\frac{259+128\rho_0}{387}<1.$$
With $K=20/7$ and $c=1/(129K)$,
$$\frac{129c}{387}\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_2)\le\frac{\operatorname{UNSAT}(G)}{387}.$$
For every port labeling $\tau$, $\operatorname{UNSAT}_\tau(G_2)=(129/387)\operatorname{UNSAT}_\tau(G_1)$ and $\operatorname{UNSAT}_{D\tau}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$. Construction and plurality decoding take polynomial time. The edgeless convention has UNSAT zero.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Lemma4.2 and Corollary4.3, pp14–15.

Dependencies: lem-regularization-preserves-value-quantitatively. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-expander-walk-contraction

Claim and conventions: A walk that at each step chooses one of the $d$ ports uniformly has transition matrix $M$ and stationary uniform law $u=\mathbf1/n$. For any initial probability vector $p$ and integer $t\ge0$, using the ordinary Euclidean norm,
$$\|M^tp-u\|_2\le\alpha^t\|p-u\|_2,\qquad \operatorname{TV}(M^tp,u)\le\frac{\sqrt n}{2}\alpha^t.$$
For $t=0$ the factor $\alpha^0$ is interpreted as one. For $t\ge1$, the adjacency-slot power has nontrivial norm $\alpha^t$. Here total variation means half the $\ell^1$ distance.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.1 Definition3.1 and §3.1.1 Theorems3.2–3.3, Lemma3.4, pp25–26.

Dependencies: def-spectral-edge-and-vertex-expansion, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-expander-walk-restricted-operator

Claim and conventions: Let $S$ have density $\beta=|S|/n$ in a finite regular graph and let $P_S$ project onto functions supported in $S$. Then
$$\|P_SMP_S\|\le\alpha+(1-\alpha)\beta.$$
For a stationary length-$t$ walk, $t\ge0$, its confinement probability is $n^{-1}\langle\mathbf1_S,(P_SMP_S)^t\mathbf1_S\rangle_0$, where the inner product is unnormalized.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Lemmas3.7–3.8, pp28–29; sharpened constant from the same projection proof.

Dependencies: lem-expander-walk-contraction. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored thm-expander-walk-hits-dense-bad-sets

Claim and conventions: Let $\alpha<1$ and let $B$ be a fixed vertex set of density $\delta\in[0,1]$. For a walk begun from the uniform distribution and taking $t\ge0$ steps (thus sampling $t+1$ vertices),
$$\Pr[\text{no visit to }B]\le(1-\delta)[1-(1-\alpha)\delta]^t\le(1-\delta)e^{-(1-\alpha)\delta t}.$$
A zeroth power is interpreted as one even when its base is zero.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Theorem3.6 with the sharper Lemma3.8 estimate above, pp28–29.

Dependencies: lem-expander-walk-restricted-operator. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored prop-expander-walk-sampled-and-moving-sets

Claim and conventions: For a stationary walk in a finite regular graph, take times $0\le t_0<\cdots<t_r$, gaps $g_i=t_i-t_{i-1}\ge1$, and fixed sets $S_i$ of densities $\beta_i$. Then
$$\Pr[X_{t_i}\in S_i\text{ for all }0\le i\le r]\le\sqrt{\beta_0\beta_r}\prod_{i=1}^r\bigl(\sqrt{\beta_{i-1}\beta_i}+\alpha^{g_i}\bigr).$$
For $r=0$ the empty product is one, giving the exact probability $\beta_0$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Theorems3.10–3.11, p29.

Dependencies: lem-expander-walk-restricted-operator. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored lem-expander-walk-bad-edge-return

Claim and conventions: Let $F$ be a nonempty set of nonloop ordinary edges of a reverse-paired $d$-regular graph, and put $\varepsilon=|F|/|E|$. In a stationary walk, condition on some edge being in $F$. For $i\ge1$, the probability that the edge $i$ positions later belongs to $F$ is at most $\varepsilon+\alpha^{i-1}$. Interpret $\alpha^0=1$.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Proposition2.5 and its full proof, pp9–10.

Dependencies: lem-expander-walk-contraction. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored prop-expander-walk-hits-bad-edges

Claim and conventions: Let a stationary walk traverse $t\ge1$ edges of a reverse-paired regular graph with $\alpha<1$. For a fixed set $F$ of nonloop bad edges and $\varepsilon=|F|/|E|$,
$$\Pr[\text{at least one bad edge}]\ge\frac{t\varepsilon}{t\varepsilon+1+2/(1-\alpha)}.$$
For $F=\varnothing$ this lower bound is zero.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §2.1 Proposition2.5 and §2.2 Fact2.6, pp9–10, direct consequence.

Dependencies: lem-expander-walk-bad-edge-return, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored fs-nonconstructive-expanders-suffice-for-uniform-reductions

Claim and conventions: **False statement:** every choice of one bounded-degree expander on each positive vertex count automatically supplies a polynomial-time uniform adjacency generator for the chosen family.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.1 Definition2.3, p19; Dinur §2.1 Lemma2.1 explicitly requires constructibility.

Dependencies: def-spectral-edge-and-vertex-expansion, cor-explicit-polynomial-time-constant-degree-expanders-exist. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored ex-expander-mixing-lemma

Claim and conventions: For the looped complete adjacency-slot graph $A=J_n$, $d=n$ and $\alpha=0$, with $e(S,T)=|S||T|$ for all sets. In contrast, for $K_{r,r}$ with $r\ge2$ one has $\mu_2=0$ but $\alpha=1$.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §2.3 spectral properties and §2.4 mixing, pp20–21; finite computations.

Dependencies: thm-expander-mixing-lemma. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored ex-expander-walk-hits-dense-bad-sets

Claim and conventions: On a Margulis graph, a fixed bad vertex set of density at least $1/4$ is missed by a stationary $t$-step walk with probability at most $(3/4)(313/320)^t$, for $t\ge0$. The stationary-start requirement cannot simply be deleted.

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; §3.2 Theorem3.6 and Chapter8 weaker bound; numerical specialization.

Dependencies: thm-expander-walk-hits-dense-bad-sets, thm-margulis-family-has-uniform-spectral-gap. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored cex-nonconstructive-expanders-suffice-for-uniform-reductions

Claim and conventions: There is a family of degree-$256$ expanders on every positive size with a uniform absolute gap but without any polynomial-time uniform generator, refuting [[fs-nonconstructive-expanders-suffice-for-uniform-reductions]].

Sources and locators: Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf; Definition2.3, p19; diagonal counterexample to constructibility inference, with spectral verification.

Dependencies: fs-nonconstructive-expanders-suffice-for-uniform-reductions, lem-expander-size-adjustment-and-laziness. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Authored ex-constraint-cloud-rounding-and-loop-counts

Claim and conventions: Take two vertices joined by one edge carrying the empty relation over a nonempty alphabet. The cloud graph has two ports and $129$ ordinary edges; the full preprocessing graph has $387$ ordinary edges. Their optimal UNSAT values are respectively $1/129$ and $1/387$, whereas the original UNSAT is one.

Sources and locators: Irit Dinur, The PCP theorem by gap amplification; https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf; §4 Lemmas4.1–4.2, pp12–15; smallest nonempty instance.

Dependencies: lem-regularization-preserves-value-quantitatively, lem-constraint-expander-overlay. Provenance: adapted formulation and locally expanded proof (ai-altered); no judge record. Validation: pending focused batch checks. Obligations: proof contract recorded; independent mathematical review remains. Next action: continue assigned items, then run required validators.

### Final claim clarification

The sweep lemma now explicitly quantifies the existence of the nonzero positive-part test function inherited from `lem-cheeger-indicator-and-positive-part-energy`, rather than using an ambiguous subscript for it. Its proof step 3.1, the Cheeger theorem F1 quotation, and the exact contract source quotation agree. No arbitrary nonnegative function is asserted to have Rayleigh quotient at most the spectral gap. Source remains HLW §4.5.2, Lemmas 4.12–4.13. Required checks are rerun below.

### Step-5 final factual report

Authored all 64 assigned item IDs listed in the individual checkpoints above and all four planned pages:

- `library/computability-theory/the-polynomial-hierarchy-and-relativization.md`
- `library/computability-theory/the-polynomial-hierarchy-and-relativization-examples.md`
- `library/computability-theory/expander-graphs-and-constraint-graphs.md`
- `library/computability-theory/expander-graphs-and-constraint-graphs-examples.md`

Output manifest: `research/frontier-33-batch-17.pages.json`; IDs, kinds, dependencies, page categories, requires, and order retained. Completed output `research/frontier-33-batch-17.proof-contracts.json` covers every one of the 49 proof-bearing items, with exact source-section quotations, citation-to-step maps, actual derivations, and all eight boundary-axis dispositions. Canonical phase repairs are reflected in the final contract step references. All 64 items and four pages were checked to remain draft, with no judge record. Definitions and the convention remark have no invented proof verification; adapted statements and expanded proofs retain ai-altered provenance and the listed source locators. No generation pass or independent approval is claimed.

Source rationale: the PH and oracle arguments adapt Arora–Barak §§3.5, 5.1–5.3.1, 5.5 and Goldreich Lecture 9, including its collapse appendix. The promise convention uses Goldreich's promise survey §§1.1–1.2; high/low identities use Chang §3 with the level-zero benchmark correction. The spectral, Fourier, and walk arguments adapt HLW §§2.1–2.4, 3.1–3.2, 4.5, Chapter 8; the constraint construction and edge-return argument adapt Dinur §§1.1–1.2, 2.1–2.2, 4. Source URLs and item-specific locators are recorded above and in the item frontmatter. Relevant PDF passages and current dependency statements were read; local adaptations are proved explicitly rather than attributed as verbatim source theorems.

Narrowing/corrections: retained the fully proved Margulis constant 73/80 instead of assuming the sharper constant; corrected the affine Fourier phase for the chosen negative-exponent convention; highness at level zero uses P^SAT, with no P^SAT=NP assertion; h and gamma require at least two vertices; the singleton mean-zero space and edgeless CSP convention are explicit. Ordinary loops have two slots, leading to degree 128 expanders, degree 129 clouds, and degree 387 overlays. Walk constraints retain internal labels and do not assert Dinur's later amplification theorem. The false relativization inference is a universal transfer rule, not an assertion resolving unrelativized P versus NP. The sweep lemma explicitly preserves the existential positive-part qualification. No planned IDs were dropped.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 64 explicit manifest `items/ID.md` paths: final result **49 checked, 0 failing**. The first run requested canonical phase repairs in all 49 proofs; those repairs were adopted before rerunning.
- `node tools/validate-plan.mjs research/plan-spec.json`: **exit 0**, acyclic and consistent, no item cycles, forward references, B-page dependencies, or unresolved IDs across 892 pages with item lists. The validator also reports 463 planned pages without item lists and redundant prerequisite notices. The task's bare command was attempted first and only printed usage because this CLI requires the plan path; that bare invocation is not counted as a pass.
- `node tools/content-policy.mjs research/frontier-33-batch-17.pages.json`: **64 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/frontier-33-batch-17.proof-contracts.json --strict`: **49/49 checked, 0 errors, 0 warnings**. Early fact-paragraph parsing failures were repaired by keeping each fact and its target in one paragraph. The oracle counterexample cites the true counterwitness Remark, not the false statement it refutes.
- Focused `node tools/rendercheck.mjs` over all 64 items and the four correct page paths: **68 files pass**. Initial rendering found one unsupported math command in EXACT-INDSET, which was replaced; the initial command also contained two wrong page paths, corrected to the manifest paths. The two files touched by the final sweep-qualification clarification were checked again and both pass.
- Bounded finite smoke for the diamond coefficient: all **707136** nonzero centered points for moduli **1 through 128** satisfy the 73/20 coefficient bound numerically; largest observed coefficient 3.647455308255495 at modulus 128 and point (-2,-1). This is counterexample-search evidence only. The written proof handles all moduli, wraparound, axes, equal coordinates, and the diamond boundary algebraically.

Blockers: none for this authoring dispatch. No URL-sweep, judge, publication, or workflow transition is claimed. Existing independent reviews and exact-hash gates were preserved. The remaining review/publication actions belong to the run driver and owner; this authoring task is complete.
