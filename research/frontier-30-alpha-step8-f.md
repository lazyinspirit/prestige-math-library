# Frontier 30 Step 8 adjudication — group f

## Scope and result

I read all 10 owned pages, all 117 owned items, the step-7 context, all 51
current judge rejections, and every direct dependency named by a rejected item.
The 51 exact rejection tuples have 41 `confirmed_fatal`, 7
`confirmed_nonfatal`, and 3 `false_positive` outcomes. The 41 fatal items were
repaired and are the rejudge targets. The 10 nonfatal/false-positive items were
left byte-for-byte unchanged from the `pre-step8` guard baseline.

There were no incoming alerts and I found no cross-group defect. No alert or
cross-group ledger row was required.

## Rejections, outcomes, and repairs

| Item | Outcome | Defect type | Repair or closing basis |
|---|---|---|---|
| `cex-dirichlet-density-does-not-mean-integer-natural-density` | `confirmed_fatal` | `dependency_citation` | Added the published Chebyshev bound and used it to prove $\pi(x)/x\to0$. |
| `cex-local-global-fails-for-a-cubic-curve` | `confirmed_fatal` | `dependency_citation` | Restored the $f\in\mathbb Z_p[X]$ and $a_0\in\mathbb Z_p$ hypotheses in the Newton-criterion interface. |
| `cex-recursion-theorem-needs-source-file-access` | `false_positive` | — | Under the fixed machine coding, the canonical numeral of a valid index is its literal machine code; the fixed point therefore prints its own code. No edit. |
| `cor-effective-program-specialization` | `false_positive` | — | “Parameter-specialization function” is the defined term whose definition already includes total computability and the specialization identity. No edit. |
| `cor-hamiltonian-path-and-cycle-are-np-complete` | `confirmed_fatal` | `logic` | Added the missing $s=t$ branches before splitting the two endpoint vertices. |
| `def-chomsky-hierarchy` | `confirmed_fatal` | `other` | Renamed the four-class object as the page's language-class ladder and explicitly distinguished it from the classical Chomsky hierarchy, which contains the context-sensitive tier. |
| `def-hilbert-symbol-over-a-rational-completion` | `confirmed_fatal` | `other` | Replaced “quadratic extension” by the quadratic algebra, with its field and split cases. |
| `def-natural-and-dirichlet-density` | `confirmed_fatal` | `other` | Restricted integer-density sets to $\mathbb N_{\ge1}$ so $n^{-s}$ is defined. |
| `def-numbering-of-partial-computable-functions` | `confirmed_fatal` | `other` | Required every enumerated $\varphi_e$ itself to be partial computable, in addition to surjectivity onto all such functions. |
| `def-parameter-specialization-function` | `confirmed_fatal` | `other` | Removed the false equation $\operatorname{Inp}_1(b)=b$ and stated the actual singleton-code convention. |
| `def-productive-and-creative-set` | `confirmed_fatal` | `other` | Restored the standard partial-computable productive-function definition and separated the later total one-one normalization. |
| `def-rational-local-fields` | `confirmed_fatal` | `dependency_citation` | Added and cited the theorem that equips the $p$-adic completion with its field structure. |
| `def-reduction-gadget-and-interface-invariant` | `confirmed_fatal` | `other` | Introduced explicit source/target witness relations before defining witness interfaces and projections. |
| `ex-clique-is-np-complete` | `confirmed_fatal` | `dependency_citation` | Defined the nine-vertex clause-occurrence graph inside the example instead of attributing an exact witness correspondence to the theorem interface. |
| `ex-finite-bad-place-test-for-a-ternary-form` | `confirmed_fatal` | `dependency_citation` | Used the almost-all-primes theorem only for finiteness and derived the exact set $\{2,3,5\}$ from the local formula. |
| `ex-hasse-minkowski-for-a-quaternary-form` | `confirmed_fatal` | `dependency_citation` | Removed the claim that square-class approximation itself states the binary matching; the explicit common value $3$ now does all the work. |
| `ex-hilbert-one-place-principle` | `confirmed_fatal` | `logic` | Replaced the sign-error example by $X^2+Y^2-2Z^2$, whose criterion is $(2,2)_v$ and whose odd and real places are all soluble. |
| `ex-modified-pcp-is-undecidable` | `confirmed_fatal` | `logic` | Matched the example to the repaired start/transition/copier/cleanup/terminal construction without claiming two tiles alone form the match. |
| `ex-smn-parameter-theorem` | `confirmed_fatal` | `logic` | Fixed an acceptable numbering and evaluated the residual program on $\operatorname{Inp}_1(v)$. |
| `ex-the-character-chi-four-and-leibniz-series` | `confirmed_fatal` | `dependency_citation` | Derived the values of $\chi_4$ directly from the two-element unit group instead of importing a dependency proof as an interface. |
| `ex-three-sat-reduces-to-three-colourability` | `confirmed_fatal` | `dependency_citation` | Defined the variable and position-labelled clause triangles locally before giving the colouring. |
| `lem-binary-quadratic-representation-via-hilbert-symbol` | `confirmed_fatal` | `dependency_citation` | Added the direct Hilbert-symbol definition as the exact source of the binary solvability criterion. |
| `lem-computation-history-domino-encoding` | `confirmed_fatal` | `logic` | Added machine normalization, alignment markers, right-boundary extension tiles, accepting cleanup, a terminal anchor, and the block-by-block soundness invariant. |
| `lem-equivalent-definitions-of-the-hilbert-symbol` | `confirmed_fatal` | `dependency_citation` | Defined the quadratic algebra and computed the determinant norm $u^2-av^2$, including the split case. |
| `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` | `confirmed_fatal` | `dependency_citation` | Stopped attributing odd order to the finite-field definition; oddness now comes from the theorem hypothesis. |
| `lem-modified-pcp-reduces-to-pcp` | `confirmed_fatal` | `logic` | Replaced the false “end tile occurs exactly once” claim by taking the already matched prefix through its first occurrence. |
| `lem-positive-log-dirichlet-series-nonvanishing` | `confirmed_fatal` | `logic` | Added the missing “no other poles” hypothesis, excluding the judge's boundary-pole counterexample. |
| `lem-real-dirichlet-l-nonzero-at-one` | `confirmed_fatal` | `dependency_citation` | Added the zeta continuation dependency that licenses holomorphy away from the pole at $1$. |
| `prop-fixed-machine-coding-is-acceptable` | `confirmed_fatal` | `logic` | Defined a divergent fallback machine when the supplied index is malformed, making hard-wiring total. |
| `thm-cfg-ambiguity-is-undecidable` | `confirmed_fatal` | `logic` | Used fresh tagged index terminals and proved each individual grammar branch unambiguous before comparing the two branches. |
| `thm-cfg-intersection-emptiness-is-undecidable` | `confirmed_nonfatal` | — | “Original symbols together with index symbols” has the standard fresh-tagged reading; making the disjoint union explicit is an immediate local clarification. No edit. |
| `thm-cfg-universality-is-undecidable` | `confirmed_fatal` | `logic` | Replaced the false bounded-separator-window claim with alternating forward/reversed configurations and a PDA stack comparison. |
| `thm-dirichlet-character-orthogonality` | `false_positive` | — | The defined phrase “Dirichlet character modulo $q$” already has $q\ge1$ as a typing condition. No edit. |
| `thm-hasse-minkowski-for-ternary-forms-over-q` | `confirmed_fatal` | `logic` | Split off $b_0=0$, where $a=t^2$ already gives a rational isotropic vector, before using nonzero Hilbert-symbol arguments. |
| `thm-hasse-minkowski-over-the-rationals` | `confirmed_fatal` | `dependency_citation` | Globally square-rescaled the patched $t$ to zero all even outside valuations and rewrote the dimension-$4$ and dimension-$\ge5$ branches so each has its own defined $t$. |
| `thm-hilbert-reciprocity-over-the-rationals` | `confirmed_nonfatal` | — | The omitted generator pair $(2,2)$ follows immediately from $(c,c)_v=(-1,c)_v$ and the already checked pair $(-1,2)$. No edit. |
| `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate` | `confirmed_nonfatal` | — | The $2$-adic square-class representatives and detection by $-1,2,5$ follow immediately from the displayed $2$-adic formula and square criterion. No edit. |
| `thm-mertens-primes-arithmetic-progressions` | `confirmed_fatal` | `logic` | Replaced the invalid Abel-limit argument by the standard von Mangoldt convolution proof using bounded character sums, $L(1,\chi)\ne0$, and $\psi(x)=O(x)$. |
| `thm-modified-pcp-is-undecidable` | `confirmed_nonfatal` | — | Invalid source encodings can be sent to a fixed no-instance by an immediate decoder branch. The mathematical reduction on valid codes is unchanged. No edit. |
| `thm-myhill-isomorphism-theorem-for-creative-sets` | `confirmed_fatal` | `logic` | Added injective syntactic padding to the creative-set reduction and replaced the cyclic alternating-chain argument by Myhill's finite partial-bijection back-and-forth construction. |
| `thm-natural-density-implies-dirichlet-density` | `confirmed_fatal` | `logic` | Restricted the quantified set to positive naturals, matching the summatory Dirichlet series. |
| `thm-nonhalting-is-productive-and-halting-is-creative` | `confirmed_fatal` | `logic` | Removed the unsupported injectivity assertion for the constructed productive function; the repaired standard definition does not require it. |
| `thm-odd-p-hilbert-symbol-formula` | `confirmed_fatal` | `other` | Defined the Legendre symbol of a $p$-adic unit through its nonzero residue class and an integer representative. |
| `thm-primes-residue-class-dirichlet-density` | `confirmed_fatal` | `dependency_citation` | Added the nonprincipal holomorphy theorem, so nonzero value at $1$ now licenses a bounded local logarithm. |
| `thm-proper-inclusions-in-the-chomsky-hierarchy` | `confirmed_fatal` | `logic` | Required an alphabet of at least two symbols, relabelled $A_{TM}$ into it, and used an explicit decidable non-CFL witness. |
| `thm-three-sat-reduces-to-clique` | `confirmed_nonfatal` | — | A clique of size at least $m$ contains an $m$-vertex subclique; this closes the proof in one elementary selection. No edit. |
| `thm-three-sat-reduces-to-directed-hamiltonian-cycle` | `confirmed_fatal` | `logic` | Added the local stranded-vertex argument that forbids a clause detour from jumping between variable gadgets. |
| `thm-three-sat-reduces-to-subset-sum` | `confirmed_nonfatal` | — | An independent set of size at least $k$ contains one of size exactly $k$; the reduction's exact-$k$ presentation is therefore immediately valid. No edit. |
| `thm-three-sat-reduces-to-three-colourability` | `confirmed_fatal` | `logic` | Made clause vertices position-distinguished, so repeated literals do not collapse a triangle. |
| `thm-two-adic-hilbert-symbol-formula` | `confirmed_fatal` | `logic` | Replaced the false general multiplication claim by the correct fixed-second-argument cancellation identity used in the calculation. |
| `thm-vertex-cover-reduces-to-set-cover` | `confirmed_nonfatal` | — | A decoder branch sending malformed encodings to a fixed no-instance is immediate and does not affect the stated valid-instance construction. No edit. |

## Sources consulted

- [Kedlaya, Dirichlet characters and L-functions](https://kskedlaya.org/ant/chap-lfunc.html): Theorem 3.5 supplies holomorphy of nonprincipal $L$-functions at $1$ and absence of other poles; Lemma 3.6 explicitly requires no pole other than the possible simple boundary pole.
- [Ian Petrow, Introduction to Analytic Number Theory](https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf): Chapter 4 derives Mertens' theorem in progressions from bounded character sums, the identity $\log=1*\Lambda$, $\psi(x)=O(x)$, and $L(1,\chi)\ne0$. This is the basis of the repaired Mertens proof.
- [Sutherland, 18.782 Lecture 10](https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf): Definition 10.1 and Lemma 10.2 support the solvability and quadratic-algebra norm formulations; Theorems 10.7/10.9 and Corollary 10.10 support the local formulas, bilinearity, and nondegeneracy; Theorem 10.11 lists all reciprocity generator cases, including the equal-prime case that covers $(2,2)$.
- [Sutherland, 18.782 Lecture 11](https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf): Lemma 11.11 gives a patched global square class that is a unit outside the controlled set and one extra prime; Theorem 11.12 separates the dimension-$3$, dimension-$4$, and higher-dimensional Hasse-Minkowski arguments.
- [MIT OCW, computation history method](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/) and [Utah detailed PCP notes](https://my.eng.utah.edu/~cs3100/lectures/l21/pcpnotes.pdf): these support the start/copier/local-transition/accepting-tail tile families and the requirement that matches encode whole accepting histories, including boundary handling rather than fixed padding.
- [Soare, Turing Computability](https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory): Definition 2.4.3 uses a partial computable productive function; the Creative Set Theorem uses its total one-one normal form and a one-one parameterized fixed point; the Myhill Isomorphism Theorem uses the finite partial-bijection stage construction adopted in the repair.
- [University of Waterloo, The Chomsky Hierarchy](https://student.cs.uwaterloo.ca/~cs360/Hall/chier.html): the classical tiers are regular, context-free, context-sensitive, and recursively enumerable, so “decidable” is not a replacement Chomsky tier.
- [MIT OCW, Lecture 16: More NP-completeness](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf): the notes specify clause-occurrence vertices for CLIQUE, explain why a Hamiltonian clause jump strands a crossbar vertex, and give the three-vertex directed-to-undirected Hamiltonian interface gadget.
- [University of Toronto, Recursion Theorem notes](https://www.cs.toronto.edu/~vassos/teaching/c63/handouts/RecursionThm.pdf): the quine construction outputs its own Turing-machine code, supporting the `false_positive` disposition for the fixed-coding counterexample.

## Checks and durable evidence

- Appended 51 exact rows to `research/frontier-30-judge-adjudications.jsonl` with the pre-edit guard hashes: 41 fatal, 7 nonfatal, 3 false positive.
- Appended 41 matching `frontier-30-S8-f-*` rows through `tools/defect-ledger.mjs append`; `defect-ledger.mjs validate --run frontier-30` checked 443 run rows with 0 errors.
- Group-local hash audit: all 41 fatal rows match the `pre-step8` hashes and now differ from baseline; all 10 closed-without-repair rows still equal baseline; 0 problems.
- Focused precheck: 41 repaired files checked, 0 failing.
- Focused rendercheck: 41 repaired files checked; YAML, delimiters, wikilinks-in-math, and KaTeX all passed.
- Full dependency check: 0 errors; 433 pre-existing/global warnings.
- `node tools/step8-scope.mjs check --run frontier-30`: passed with 7 groups, 694 items, 0 open rejections, and 0 cross-group alerts; group f has 0 pending adjudications.
- The required whole-run Step-8 guard was run after adjudication closure. It reported 175 changed items, 148 licensed changes, and 27 unlicensed edits owned by other groups; none of group f's 41 repaired items appeared as an error. The group-local hash audit above independently verifies every group-f edit against its exact fatal licence. The engine must rerun the whole-run guard after those sibling hash rows are corrected.
- The whole-run defect-ledger closure check passed with 470 frontier-30 rows and 0 errors. Group f has exactly 41 fatal adjudications and exactly 41 matching defect rows, with no duplicate or missing match.

## Rejudge targets

The rejudge target set is exactly the 41 `confirmed_fatal` items in the table.
No nonfatal or false-positive item is a rejudge target. No extra judge cycle was
initiated.

- `cex-dirichlet-density-does-not-mean-integer-natural-density` — defect `frontier-30-S8-f-001`.
- `cex-local-global-fails-for-a-cubic-curve` — defect `frontier-30-S8-f-002`.
- `cor-hamiltonian-path-and-cycle-are-np-complete` — defect `frontier-30-S8-f-003`.
- `def-chomsky-hierarchy` — defect `frontier-30-S8-f-004`.
- `def-hilbert-symbol-over-a-rational-completion` — defect `frontier-30-S8-f-005`.
- `def-natural-and-dirichlet-density` — defect `frontier-30-S8-f-006`.
- `def-numbering-of-partial-computable-functions` — defect `frontier-30-S8-f-007`.
- `def-parameter-specialization-function` — defect `frontier-30-S8-f-008`.
- `def-productive-and-creative-set` — defect `frontier-30-S8-f-009`.
- `def-rational-local-fields` — defect `frontier-30-S8-f-010`.
- `def-reduction-gadget-and-interface-invariant` — defect `frontier-30-S8-f-011`.
- `ex-clique-is-np-complete` — defect `frontier-30-S8-f-012`.
- `ex-finite-bad-place-test-for-a-ternary-form` — defect `frontier-30-S8-f-013`.
- `ex-hasse-minkowski-for-a-quaternary-form` — defect `frontier-30-S8-f-014`.
- `ex-hilbert-one-place-principle` — defect `frontier-30-S8-f-015`.
- `ex-modified-pcp-is-undecidable` — defect `frontier-30-S8-f-016`.
- `ex-smn-parameter-theorem` — defect `frontier-30-S8-f-017`.
- `ex-the-character-chi-four-and-leibniz-series` — defect `frontier-30-S8-f-018`.
- `ex-three-sat-reduces-to-three-colourability` — defect `frontier-30-S8-f-019`.
- `lem-binary-quadratic-representation-via-hilbert-symbol` — defect `frontier-30-S8-f-020`.
- `lem-computation-history-domino-encoding` — defect `frontier-30-S8-f-021`.
- `lem-equivalent-definitions-of-the-hilbert-symbol` — defect `frontier-30-S8-f-022`.
- `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` — defect `frontier-30-S8-f-023`.
- `lem-modified-pcp-reduces-to-pcp` — defect `frontier-30-S8-f-024`.
- `lem-positive-log-dirichlet-series-nonvanishing` — defect `frontier-30-S8-f-025`.
- `lem-real-dirichlet-l-nonzero-at-one` — defect `frontier-30-S8-f-026`.
- `prop-fixed-machine-coding-is-acceptable` — defect `frontier-30-S8-f-027`.
- `thm-cfg-ambiguity-is-undecidable` — defect `frontier-30-S8-f-028`.
- `thm-cfg-universality-is-undecidable` — defect `frontier-30-S8-f-029`.
- `thm-hasse-minkowski-for-ternary-forms-over-q` — defect `frontier-30-S8-f-030`.
- `thm-hasse-minkowski-over-the-rationals` — defect `frontier-30-S8-f-031`.
- `thm-mertens-primes-arithmetic-progressions` — defect `frontier-30-S8-f-032`.
- `thm-myhill-isomorphism-theorem-for-creative-sets` — defect `frontier-30-S8-f-033`.
- `thm-natural-density-implies-dirichlet-density` — defect `frontier-30-S8-f-034`.
- `thm-nonhalting-is-productive-and-halting-is-creative` — defect `frontier-30-S8-f-035`.
- `thm-odd-p-hilbert-symbol-formula` — defect `frontier-30-S8-f-036`.
- `thm-primes-residue-class-dirichlet-density` — defect `frontier-30-S8-f-037`.
- `thm-proper-inclusions-in-the-chomsky-hierarchy` — defect `frontier-30-S8-f-038`.
- `thm-three-sat-reduces-to-directed-hamiltonian-cycle` — defect `frontier-30-S8-f-039`.
- `thm-three-sat-reduces-to-three-colourability` — defect `frontier-30-S8-f-040`.
- `thm-two-adic-hilbert-symbol-formula` — defect `frontier-30-S8-f-041`.
