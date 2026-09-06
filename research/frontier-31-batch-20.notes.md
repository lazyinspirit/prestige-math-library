# Frontier-31 batch 20 — scaffold notes

## Scope and design decision

The authoritative plan data are `research/plan-spec.json`: orders 627–630,
category `computability-theory`, and the listed prerequisite pages.  The two
matched design locations for each pair are not competing amendments: the
TC-24/TC-25 section at `research/plan-computability-theory-track.md` lines
1018–1088 contains both the A-page list and its immediately following B-page
line.  I treated that single contiguous section as controlling.  Its stated
prerequisites and the spec agree; the step-0 drift record marks both A pages
`no-drift`.  No plan-structure edit was made.

The designs require quantitative accounting of encodings, simulation overhead,
constructibility, reduction direction, and resource bounds, and prohibit
forward references.  All planned dependencies point to an earlier item or a
published prerequisite; none points forward and every manifest item has an
explicit `deps` array.  The A pages have 15 and 18 items respectively (the
latter includes one necessary bridge lemma), so neither reaches the 60-item
split threshold.

## Shared conventions

- `DTIME`, `NTIME`, `DSPACE`, and `NSPACE` use the already established
  multitape, all-branches-halting convention of
  `def-dtime-ntime-dspace-and-nspace`.  A time bound includes input reading.
- A time-constructible bound is used only with its stated eventual
  input-reading lower bound.  The deterministic hierarchy has the
  $f(n)\log f(n)=o(g(n))$ gap; the nondeterministic theorem uses its delayed
  $f(n+1)=o(g(n))$ condition; the space theorem requires a constructible upper
  bound at least logarithmic and a lower bound $o(g)$.
- `L` is deterministic read-only-input work space $O(\log n)$ and `NL` is its
  existential nondeterministic analogue.  `STCON` means directed reachability
  with an explicitly encoded source and target.  Logspace reductions are
  deterministic many-one transducers whose write-only output may be
  recomputed; no full output string is retained.
- Circuit encodings are topologically ordered Boolean DAGs with fixed finite
  gate basis and explicit input constants.  Logspace uniformity means that a
  logarithmic-space transducer answers the local gate/wire description; this
  is the convention used by the Circuit Value reduction.

## Time and space hierarchy plan

| Item | Exact planned claim and proof route | Dependencies / rationale |
| --- | --- | --- |
| `def-efficient-universal-simulation-with-clock` | Defines a simulator supplied with an explicit, constructible clock and its $O(T\log T)$ time charge. | The generic resource classes, constructibility, and the published universal-simulation theorem are the only prior notions used. |
| `lem-effective-enumeration-of-clocked-machines` | Every entry is a well-formed machine together with a clock and constants; every claimed smaller-time decider occurs. | The clock definition fixes totality; decidable code validity prevents malformed entries from becoming an implicit case. |
| `lem-time-diagonal-language-respects-its-budget` | The timeout-and-flip diagonal language fits the specified larger time budget. | Charges decoding, clocking, and universal-simulation overhead before applying the little-o gap. |
| `thm-deterministic-time-hierarchy` | $\mathrm{DTIME}(f)\subsetneq\mathrm{DTIME}(g)$ under the stated constructibility and $f\log f=o(g)$ hypotheses. | Uses the two clocked diagonal lemmas; no unclocked self-reference is assumed. |
| `cor-p-is-properly-contained-in-exp` | $\mathrm P\subsetneq\mathrm{EXP}$. | Apply the theorem between $2^n$ and $2^{2n}$, so the separating language is outside a class containing all polynomial time. |
| `thm-nondeterministic-time-hierarchy` | The delayed/lazy diagonal hierarchy for `NTIME`. | It has its own proof rather than illegally complementing a nondeterministic branch computation. |
| `lem-space-bounded-universal-simulation` | A universal simulation has constant-factor space overhead for a fixed coded machine. | Uses encoded configurations and one-step interpretation; no time bound is claimed. |
| `lem-space-diagonal-machine-halts` | A marked-space simulation detects repeating configurations and therefore always halts. | The published exponential configuration count supplies the timeout; this is the needed response to space-bounded nontermination. |
| `thm-deterministic-space-hierarchy` | $\mathrm{DSPACE}(f)\subsetneq\mathrm{DSPACE}(g)$ when $f=o(g)$ and the stated constructibility conditions hold. | Combines the two space lemmas and retains all constant-factor/encoding charges. |
| `cor-l-is-properly-contained-in-pspace` | $\mathrm L\subsetneq\mathrm{PSPACE}$. | Savitch puts L in $\mathrm{DSPACE}(\log^2n)$, and the new hierarchy separates that class from linear space. |
| `def-language-padding` | Defines a delimiter-safe padded language. | The binary encoding dependency fixes the self-delimiting format. |
| `lem-padding-transfers-time-bounds` | Padding and unpadding transfer the stated deterministic bounds. | Accounts for verification of the padding and for the changed input length. |
| `thm-gap-and-union-theorems-for-complexity-bounds` | States the exceptional computable gap bound and the uniformly presented union bound separately. | Neither bound is portrayed as natural or constructible; exact/O-bound conventions are kept separate. |
| `prop-hierarchy-theorems-do-not-separate-p-from-np` | Hierarchies within deterministic, nondeterministic, or space models say nothing that separates P from NP. | This is a scope consequence of the three preceding theorem forms, not a claim about P=NP. |
| `fs-unrestricted-diagonalization-respects-any-bound` | Refutes the claim that every computable bound supports a hierarchy diagonalization. | The gap theorem provides the counterexample and identifies constructibility/clocking/halting as the missing requirements. |
| `ex-time-diagonal-language-respects-its-budget` | Works a clocked $n^2$ versus $n^4$ instance. | Builds only on the deterministic diagonal stack. |
| `ex-hierarchy-theorems-do-not-separate-p-from-np` | Exhibits the within-model/cross-model distinction. | Depends only on the scope proposition. |
| `cex-unrestricted-diagonalization-respects-any-bound` | Uses a gap bound with no strict class increase. | Depends on the refuted statement and its gap theorem source. |

## Logarithmic-space and reachability plan

| Item | Exact planned claim and proof route | Dependencies / rationale |
| --- | --- | --- |
| `def-read-only-input-logspace-machine` | Separates the read-only input tape from $O(\log n)$ writable work tape. | Specializes the published machine/resource convention. |
| `def-l-and-nl` | Defines L and NL under that model. | Must follow the tape convention. |
| `lem-logspace-machines-have-polynomially-many-configurations` | Counts the finite control, work contents/heads, and input-head position; accepting runs shorten to simple configuration paths. | Needed for the configuration-graph reduction. |
| `def-logspace-many-one-reduction` | Defines the deterministic write-only-output reduction convention. | Uses the read-only logspace model. |
| `lem-logspace-reductions-compose` | Simulates a second reduction over recomputed bits of a virtual first output, and records L/NL closure transfer. | This is the reduction-direction and output-size bridge needed later. |
| `def-directed-st-connectivity` | Defines the directed $s$–$t$ language from published directed graphs and paths. | Keeps the graph convention self-contained. |
| `thm-directed-st-connectivity-is-nl-complete` | Proves membership by bounded path guessing and hardness by a logspace-emitted configuration graph. | Needs the configuration count, reduction definition, and graph language. |
| `thm-nl-is-contained-in-dspace-log-squared-n` | Instantiates Savitch at logarithmic space. | Gives the genuine $\log^2n$ simulation without conflating it with L. |
| `def-inductive-reachable-vertex-count` | Defines $c_i$, the number reachable in at most $i$ steps. | Uses directed reachability terminology. |
| `lem-reachability-count-is-verifiable-in-nl` | Verifies a claimed count using bounded positive-path witnesses. | Makes every counter and path length explicit. |
| `lem-nonreachability-has-an-inductive-counting-certificate` | Inductively certifies each next count and finally excludes $t$. | Avoids guessing an uncheckable universal negative. |
| `thm-immerman-szelepcsenyi-nl-equals-conl` | Uses nonreachability of STCON plus NL-completeness and virtual-input closure; states the general above-logspace form before the NL case. | All of the reduction and certificate stack is explicit. |
| `cor-nspace-is-closed-under-complement-above-logspace` | Extracts $\mathrm{NSPACE}(s)=\mathrm{coNSPACE}(s)$ for constructible $s\ge\log n$. | The general clause is established in the theorem, so this is a true corollary. |
| `def-logspace-uniform-circuit-family` | Defines circuit encodings and their local logspace-uniform description. | Uses only the logspace transducer convention. |
| `def-p-complete-under-logspace-reductions` | Defines P-membership plus hardness under the chosen reduction type. | Needs generic DTIME and logspace reduction definitions. |
| `lem-polynomial-time-computations-have-logspace-uniform-circuits` | Builds local tableau-update circuits and emits their gates/wires in logspace. | **Added bridge:** this is the nontrivial P-hardness construction Circuit Value needs; omitting it would leave a proof gap. |
| `thm-circuit-value-is-p-complete` | Polynomial-time evaluation plus a logspace reduction from an arbitrary P-machine's uniform computation circuit. | Depends on exactly the definition and bridge lemma. |
| `fs-nl-equals-conl-follows-by-state-swapping` | Shows why swapping nondeterministic terminal labels preserves an existential branch rather than complementing a language. | Contrasts with the counting theorem. |
| `ex-logspace-reductions-compose` | Works the virtual-output-tape construction. | Uses the composition lemma. |
| `ex-circuit-value-is-p-complete` | Works a small tableau/circuit compilation. | Uses the uniform-circuit bridge and Circuit Value theorem. |
| `cex-nl-equals-conl-follows-by-state-swapping` | Displays one accepting and one rejecting branch. | Makes the false state-swap inference concrete. |

## Source harvest and dispositions

The machine-readable, per-heading harvest and dispositions are in
`research/frontier-31-batch-20.coverage.json`.  I read the full relevant ranges
through the cited full-text URLs:

- Arora–Barak, *Computational Complexity: A Modern Approach*, textbook:
  `https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf` — contents
  pp. v–vi; hierarchy chapter printed pp. 84–87; NL chapter printed pp. 75–80;
  P-completeness printed pp. 123–124.  Its named results support the universal
  simulator/three hierarchies, reduction composition, PATH completeness,
  inductive counting, general complement closure, and Circuit Value.
- Krötzsch, *Complexity Theory, Lecture 13: Space Hierarchy and Gaps*, full
  lecture notes: `https://iccl.inf.tu-dresden.de/w/images/b/be/CT22-Lecture-13-Gap.pdf`
  — slides 2–19.  Its space diagonal, NL–PSPACE corollary, constructibility
  warning, and gap construction are mapped to the exact hierarchy items.
- Fortnow, *A Short History of Computational Complexity*, survey:
  `https://gwern.net/doc/cs/algorithm/2003-fortnow.pdf` — §2, printed pp. 2–3.
  Its named historical statements separately support the gap and union results
  and the fact that P versus NP remains unresolved.
- Sudan/Kwon, *CS 221 Lecture 5: Space and Nondeterminism*, full scribe notes:
  `https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf`
  — pp. 1–3.  Its Path theorem, $N_k$ definition, Lemmas 8–9, and NL=coNL
  treatment independently support the reachability/certificate part of the
  second A page.

The textbook is the pair's harvestable table-of-contents primary treatment; the
lecture notes and survey are independent treatments.  All source-heading rows
are included or inline with a named item—none is silently dropped, deferred, or
declared already published.

## Known limits and next action

- The gap and union results concern exceptional computable bounds.  They must
  not be used to claim a familiar complexity-class separation or a
  constructible witness.
- `NL=coNL` does not follow from swapping nondeterministic terminal states;
  the induction must show soundness of every count.  Circuit Value hardness
  must output a circuit encoding in logspace, not merely assert a polynomial
  circuit exists.
- Browser full-text reads succeeded for all four URLs (the Arora–Barak text is
  recorded once per A-page coverage entry, hence five source records).  The
  local shell cannot resolve external DNS in this dispatch environment.  The
  required stamp attempt was run exactly as:

  ```text
  node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-20.coverage.json --stamp --timeout-sec 30
  ```

  and returned `EAI_AGAIN` for all five records: Duke/Arora–Barak, TU Dresden,
  Gwern/Fortnow, the second Duke/Arora–Barak entry, and Harvard/Sudan.  This is
  a dispatch-network failure, not a failed or unverified mathematical source:
  browser full-text retrieval supplied the exact ranges above.  No URL was
  removed, replaced, or stamped synthetically.  A network-enabled rerun of the
  same command is the remaining obligation; it will write the byte/hash/page
  stamps mechanically without changing the harvest.

## Validation checkpoint

- `node tools/manifest-deps.mjs research/frontier-31-batch-20.pages.json` —
  `39 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-31-batch-20.coverage.json --require-destination`
  — `2 page(s), 33 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-20.pages.json`
  — `39 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed with the
  repository's pre-existing advisory redundant-prerequisite warnings only.
- `git diff --check -- research/frontier-31-batch-20.pages.json
  research/frontier-31-batch-20.coverage.json research/frontier-31-batch-20.notes.md`
  — clean.

The only nonpassing required validator is the source fetch stamp command
recorded above, due to sandbox DNS resolution rather than a URL, source text,
or harvest defect.
