# Batch 9 — quantitative induced density and the log-log step

Date: 2026-09-08.

Status: **mathematical, source-reading, and Step-3 semantic closure complete;
no batch-local blocker remains.**

## Inventory and forward-seam resolution

The inventory remains 18 A items and four B examples. The live
`def-labelled-blowup-and-good-induced-copy` is self-contained: it states the
label-to-block assignment and both directional sparsity requirements directly.
Its dependencies are only the earlier induced-density, blockade, and sparsity
interfaces. It does not depend on `def-blockade-rainbow-induced-copy` at
order 413. Former QID-F1 is therefore resolved without duplicating or moving a
published supplier.

The empty-block QID sequence remains distinct from the published positive-width
blockade, because floor widths can be zero. Copy counts are labelled embeddings
normalized by `n^h`; the null pattern has count one, while the non-strict
few-copy theorem is stated only for nonempty patterns. The final strict
corollaries record the vacuous null-pattern boundary separately.

## Proof reading

The complete arXiv v3 HTML of Bucić–Nguyen–Scott–Seymour was read through
Sections 3–5:

- the full proof of 3.1, including transition-count averaging;
- all of 4.1–4.4, including labelled good-copy extension, maximal blowup,
  empty-block/floor cases, and extraction of a uniformly sparse half;
- all of 5.1–5.2, including the exact choices of `z,b,x,p,eta,t`, the
  inequality `delta<x^d eta^t`, the definition of `beta_s`, recursion
  claim (1), iteration, and the `epsilon>=c` rescaling.

Fox–Sudakov §2 was read through Lemmas 2.1–2.2 and Theorems 1.1–1.2 for
the independent two-density recursion. Zhao §2.6 was read through the complete
graph-counting proofs used as supporting finite-counting context.

The stronger Fox--Sudakov form with an absolute constant times `|H|` in the
classical exponent is not an unassigned obligation: the planned 403/404 pair
asks only for the `H`-dependent interfaces used by its recorded consumers, and
no later planned page owns the stronger statement. Coverage therefore records
it as out of scope, with no claim that the local `ell=2` specialization proves
the stronger constant dependence.

All three sources are fetch-verified. Former QID-F2 is resolved. The older
transitive-closure count is retained as bounded structural evidence, not
misrepresented as certification of every inherited proof; no concrete
load-bearing mismatch remains, so former QID-F3 is not a blocker.

No published content, central plan, workflow, or engine state was edited. The
required generated cross-batch ledger refresh below made no batch-9 edge change.

## Step-3 fix pass

### Finding 1 — inherited semantic audit and stale rainbow edge

**Disposition:** resolved.  The current `dependency_audit` in
`research/phase-2-wave-1-batch-9.coverage.json` now has status
`complete-proof-by-proof-semantic-certification` and records its Step-3 audit:
the 61-page, 1,419-item `requires`/`deps` closure, 1,397 inherited-file hash
receipts, all 21 direct external suppliers and 47 entering edges, their exact
statement/proof locations, hypotheses, directions, conventions, axiom scope,
and QID proof use.  Its finite graph, directional blockade, rounding, density
recurrence, and bootstrap-boundary checks are recorded there as well.

The stale
`def-labelled-blowup-and-good-induced-copy ->
def-blockade-rainbow-induced-copy` rows were removed from both `later_edges`
and `outside_page_closure`.  The definition continues to state the label-to-
block condition locally, so no later order-413 supplier is used.  The retained
arXiv primary text was rechecked at §5.2, lines 367–418: lines 374–380 give the
least-integer parameter and its bound, and lines 386–405 prove the recurrence.

**Changed record:** batch-9 coverage only.  No new A/B pair, page requirement,
or cross-batch edge is needed; the owned cross-batch input remains `[]` and the
frontier ledger was refreshed.

### Finding 2 — floor/ceiling dependency gap

**Disposition:** resolved.  Each of the six named consumers now declares the
earlier `lem-integer-part`: `lem-qid-maximal-blowup-trichotomy`,
`lem-special-copy-trichotomy-produces-a-restricted-blockade`,
`def-subreciprocal-function-and-ell-divisibility`,
`lem-subreciprocal-functions-close-under-the-density-recursion`,
`lem-qid-logarithmic-and-constant-divisibility`, and
`lem-ell-divisibility-amplifies-through-a-blockade`.

The two previous ceiling uses are replaced, not merely renamed.  The parameter
lemma sets $t=-\lfloor-u\rfloor$ for
$u=2\log_2(1/\epsilon)/\log_2p$, the least natural with
$p^t\ge\epsilon^{-2}$; its proof plan records the resulting one-unit bound.
The recurrence chooses
$m=-\lfloor-\eta\gamma_1|F|\rfloor$, the least natural at least the required
real size, before exact-size selection.  These are consequences of the
published floor lemma's unique integer-part statement and have no undeclared
ceiling convention.

**Changed record:** batch-9 manifest and the direct-interface audit in batch-9
coverage.  `lem-integer-part` is earlier in the declared closure, so no new
prerequisite A/B pair is required.

### Finding 3 — incomplete recurrence interface

**Disposition:** resolved.  `lem-ell-divisibility-amplifies-through-a-
blockade` now quantifies the full source-§5.2 chain: subreciprocal $\ell$;
nonempty $\ell$-divisive $H$ with witnesses $c,d$; $h=|H|$; $z,b,\epsilon,x,p,
\eta,t,\delta$; nonempty fixed $G$; the hypotheses
$\operatorname{ind}_H(G)\le(\delta|G|)^h$ and $\delta|G|>1$; the fixed
`beta_r` profile; $1\le s\le t$; and $u,v\ge\epsilon$.  Its proof plan now
derives the induced-subgraph copy bound and $|F|\ge\eta^{-1}$ in the needed
directions before applying divisivity, fixes the exact block-size construction,
and keeps the complement case as an exchange of density parameters rather than
assuming complement closure of an $H$-free class.

**Changed record:** batch-9 manifest and coverage semantic audit.  This restores
the dependency interface to
`thm-quantitative-density-theorem-for-ell-divisive-graphs`, both final bounds,
and their B examples.  No pair addition is required.

**Checks run:**

- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-9.coverage.json --stamp` — 3/3 sources fetch-verified; 0 newly stamped; 0 drops.
- `node tools/coverage-checklist.mjs --require-destination research/phase-2-wave-1-batch-9.coverage.json` — 1 page, 59 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json` — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-9.pages.json` — 22 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed: acyclic reading order, no item cycle, forward reference, B-page dependency, or unresolved item ID among itemized pages.
- `node tools/extcheck.mjs --quiet` — passed; it reported 63 pre-existing repository-wide published-item warnings outside this batch manifest.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` — refreshed and deduplicated.

**Remaining blocker:** none in batch 9.

## Step-5 authoring

### Final authoring checkpoint

All 22 item IDs individually recorded below are authored, with five definitions and seventeen proof-bearing results/examples. Both assigned pages are complete: `quantitative-induced-density-and-the-loglog-step` and `quantitative-induced-density-and-the-loglog-step-examples`, at their manifest category/ID paths. The per-item pending-check and next-action entries below describe intermediate checkpoints; this final checkpoint supersedes those entries. The proof-contract file contains all 22 item contracts, with actual derivation claims, inputs, citation uses, and item-specific boundary evidence. No independent mathematical review or judge outcome is asserted.

Source evidence: reread the complete relevant passages of Bucic–Nguyen–Scott–Seymour, https://arxiv.org/html/2301.10147v3, Section 2 conventions, 3.1, 4.1–4.4, and Section 5 through the complete proof of 5.2. Independently checked Fox–Sudakov, https://arxiv.org/pdf/0706.4112, Section 2, printed pp. 8–10 (Lemma 2.2 and the proofs of Theorems 1.1–1.2), and Zhao, https://yufeizhao.com/gtacbook/gtacbook.pdf, Section 2.6, printed pp. 72–75 (Proposition 2.6.1, Theorems 2.6.2 and 2.6.4, Remark 2.6.3, including the injectivity argument). The latter two are comparison/counting context, not substitutes for the few-copy logarithmic argument from the primary paper. Item contracts record the exact source excerpts used in their derivations.

Proof decisions: retain labelled embeddings, null-pattern count one, finite host-specific minima, singleton edge inequalities, and empty QID blocks. The special-copy proof uses the intermediate deleted pattern in its fibres. The maximal-blowup proof uses the actual recursion `t_(k+1)=s t_k` and supplies integer-rounding and size inequalities. The amplification proof explicitly handles inherited copy bounds, reverse selection, internal and cross-edge sums, and complementation of the host and pattern where needed. The terminal general theorem derives the small-parameter conclusion before rescaling to the full interval. The fixed-size selection lemma retains potentially overlapping A and B, counting ordered adjacency pairs; its internal and cross-edge selections are separate existential choices. Constants remain H-dependent as in the accepted scaffold. No promised content was removed or narrowed.

Dependency decisions: added `thm-logarithm-change-of-base` to `lem-qid-logarithmic-and-constant-divisibility`; added `lem-subreciprocal-functions-close-under-the-density-recursion` and `def-qid-finite-density-recursion-profile` to `thm-quantitative-density-theorem-for-ell-divisive-graphs`. The manifest and item dependencies agree. These are earlier published/local inputs, so the consumer file `phase-2-wave-1-batch-9.cross-batch-dependencies.json` remains `[]`. Ran `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` after the edits to maintain the prescribed derived ledger. No plan or workflow transition was performed.

Checks actually run: explicit-path precheck for every manifest item passes (17 checked, zero failing; definitions are skipped by that proof checker). Content policy passes for 22 scoped items with zero errors/warnings. Strict proof-contract validation passes for 22/22 items with zero errors/warnings. Renderer validation passes for all 22 items and both pages using the real KaTeX and renderer YAML parser. The initially requested bare `node tools/validate-plan.mjs` invocation returned usage because it requires an input path; the corrected `node tools/validate-plan.mjs research/plan-spec.json` passes, reporting an acyclic consistent order and no item cycles, forward references, B-page dependencies, or unresolved IDs among the 930 itemized pages. Existing redundant-prerequisite warnings and 683 planned pages without item lists remain outside this batch. Initial owned precheck/content-policy/contract formatting failures were repaired and rerun: canonical proof phase labels and citations, terminal proof marker, expanded provenance YAML, math delimiters, and exact contract step references. After the final overlap-scope correction, the scoped precheck, content-policy, strict contracts, and renderer checks all passed again.

Provenance: the eighteen A-page statements are `ai-altered`; their thirteen arguments are `ai-altered`, and the five definition proofs are `not-applicable`. All four worked examples have `ai-generated` statements and arguments with generation role `example`; none is used as a dependency target. All content remains draft. No judge stamps were added. Source quotations in contracts support the specified uses rather than serving as stand-ins for derivations.

Unresolved mathematical or scope obligations: none identified in the completed arguments. No prerequisite or scope-change request for Alpha is needed. Structural checks do not certify mathematical truth; the completion claim rests on the written derivations and their evidence, not on validator success alone. Next action: owning workflow review of the completed batch.

Active authoring, 2026-09-08. The earlier completion status concerns the scaffold only. Initially none of the 22 assigned item files or the proof-contract file existed. Manifest matches the current plan exactly; the plan expands the design's 12-item outline to 18 A items, preserving its conclusions. Latest group-g recheck accepts this expansion and the direct finite proof route. No missing assigned input.

Read SCHEMA, assigned design III.5, full manifest, coverage source dispositions and dependency interfaces, original Step-3 review, final verdict and recheck. Independently reread primary HTML §§2–5, including complete 3.1, 4.1–4.4 and 5.2 proofs. Direct published dependency statements were reread. Correct intermediate-pattern fibres in 3.1, correct t_(k+1)=s t_k in 4.3, and beta+2d in 4.4. These are derivation corrections, not scope changes. Proofs count labelled embeddings. Auxiliary source checks and item-by-item checkpoints follow. Shell source download unavailable; browser full text is accessible.

### Authored `def-induced-copy-density-and-homogeneous-restriction-parameter`

Claim and conventions: Let $G$ be a nonempty finite simple graph, $n=|V(G)|$, and $H$ a finite simple graph with $h=|V(H)|$. Define $d_{\mathrm{ind}}(H,G)=\operatorname{ind}_H(G)/n^h$, using the labelled induced embeddings of [[def-induced-copy-number]] and [[def-induced-embedding-and-induced-copy]].

Source: https://arxiv.org/html/2301.10147v3 — Sections 2 and 5, before 5.2 and its beta_s definition. Dependencies: def-induced-copy-number, def-induced-embedding-and-induced-copy, def-edge-density-between-vertex-sets, thm-two-element-subsets-count, cor-cardinality-of-the-power-set.

Decision: ai-altered statement; not-applicable argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `def-qid-restricted-blockade-with-empty-blocks`

Claim and conventions: For a finite simple graph $G$, a QID block sequence $(B_1,\ldots,B_k)$ has integer length $k\geq1$, pairwise disjoint subsets $B_i\subseteq V(G)$, and width $\min_i|B_i|$. Empty blocks are permitted, including repeated empty sets.

Source: https://arxiv.org/html/2301.10147v3 — Section 2, blockade conventions. Dependencies: def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets, def-complete-anticomplete-pure-and-x-sparse-blockades.

Decision: ai-altered statement; not-applicable argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `def-labelled-blowup-and-good-induced-copy`

Claim and conventions: Let $J$ be a nonempty finite simple graph with its vertices regarded as labels. For an integer $t\geq1$ and $0\leq q\leq1$, a $(t,q)$-blowup of $J$ in $G$ is a family of pairwise disjoint sets $(A_j:j\in V(J))$, each of size $t$, with the following property: for distinct $i,j$, each vertex of $A_i$ has at most $q t$ neighbors in $A_j$ if $ij\notin E(J)$, and at most $q t$ nonneighbors in $A_j$ if $ij\in E(J)$. The condition is required for both ordered pairs $(i,j)$ and $(j,i)$.

Source: https://arxiv.org/html/2301.10147v3 — Section 4, definition preceding 4.2. Dependencies: def-induced-copy-density-and-homogeneous-restriction-parameter, def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets.

Decision: ai-altered statement; not-applicable argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-good-copy-extension-count`

Claim and conventions: Let $J$ have $j\geq1$ vertices and let $(A_v:v\in V(J))$ be a $(t,1/j)$-blowup in a finite graph $G$, with integer $t\geq1$. Every good embedding of $J[I]$, $I\subseteq V(J)$, has at least $(t/j)^{j-|I|}$ good extensions to $J$.

Source: https://arxiv.org/html/2301.10147v3 — 4.2, internal claim (1). Dependencies: def-labelled-blowup-and-good-induced-copy, thm-product-rule, thm-sum-rule, thm-subset-of-a-finite-set.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-few-induced-copies-exclude-a-fixed-labelled-blowup`

Claim and conventions: Let $J$ be nonempty with $j=|J|$, and $t\geq1$ an integer. If $\operatorname{ind}_J(G)<(t/j)^j$, no $(t,1/j)$-blowup of $J$ exists in $G$.

Source: https://arxiv.org/html/2301.10147v3 — 4.2. Dependencies: lem-good-copy-extension-count, def-induced-copy-density-and-homogeneous-restriction-parameter.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-qid-bipartite-density-trimming`

Claim and conventions: Let $A,B$ be disjoint finite vertex sets and $c\geq0$. If $e_G(A,B)\leq c|A||B|$, then some $A^{\prime}\subseteq A$ with $|A^{\prime}|\geq|A|/2$ has $|N_G(v)\cap B|\leq2c|B|$ for every $v\in A^{\prime}$. Empty sets are permitted. This is a bound from $A^{\prime}$ into $B$.

Source: https://arxiv.org/html/2301.10147v3 — 4.1. Dependencies: thm-double-counting, cor-the-averaging-principle, def-qid-restricted-blockade-with-empty-blocks.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-qid-fixed-size-density-selection`

Claim and conventions: Let $A,B$ be disjoint finite vertex sets and $1\leq m\leq N=|A|$ an integer. Some $m$-subset $C\subseteq A$ satisfies $e_G(C,B)\leq m e_G(A,B)/N$. Independently, if $2\leq m\leq N$, some $m$-subset $C\subseteq A$ satisfies $e(G[C])/\binom m2\leq e(G[A])/\binom N2$. For $m=1$ the internal edge count is zero. Applying the internal assertion to $\overline G$ gives the analogous upper-density selection. The cross-edge and internal choices need not be the same subset.

Source: https://arxiv.org/html/2301.10147v3 — 4.3 proof (1); 5.2 proof (1). Dependencies: thm-double-counting, cor-the-averaging-principle, thm-binomial-closed-formula, thm-two-element-subsets-count, def-induced-copy-density-and-homogeneous-restriction-parameter.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-local-special-copy-trichotomy`

Claim and conventions: Let $H$ be a nonempty finite graph, $g\in V(H)$, $h=|H|$, $b,c>0$, and $a=b+(1+c)h$. Let $0<x\leq1/2$ and let $A,B$ be disjoint vertex subsets of a finite graph $G$, such that every $v\in A$ has at least $x|B|$ nonneighbors in $B$. At least one of the following holds:

Source: https://arxiv.org/html/2301.10147v3 — 3.1 complete proof. Dependencies: def-induced-copy-density-and-homogeneous-restriction-parameter, lem-few-induced-copies-exclude-a-fixed-labelled-blowup, thm-double-counting, thm-cardinality-of-a-set-of-functions, thm-real-power-laws.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-qid-maximal-blowup-trichotomy`

Claim and conventions: For a nonempty finite graph $H$, $g\in V(H)$ and $\alpha>0$, there exist $\beta,\gamma>0$ such that for every finite graph $G$ with $n=|G|\geq2$ and $0<x\leq1/(8h)$, where $h=|H|$, at least one of the following holds:

Source: https://arxiv.org/html/2301.10147v3 — 4.3 complete proof. Dependencies: lem-local-special-copy-trichotomy, lem-few-induced-copies-exclude-a-fixed-labelled-blowup, lem-good-copy-extension-count, lem-qid-bipartite-density-trimming, lem-qid-fixed-size-density-selection, thm-real-power-laws, lem-integer-part.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-special-copy-trichotomy-produces-a-restricted-blockade`

Claim and conventions: For every nonempty finite graph $H$ there exist $k_1,k_2>0$ such that, whenever $G$ is nonempty, $n=|G|$, $0<x\leq1/(8|H|)$ and $\operatorname{ind}_H(G)<x^{k_1}n^{|H|}$, there is a QID $x$-restricted sequence of length at least $2\log_2(1/x)$ and width at least $\lfloor x^{k_2}n\rfloor$. At least half its indices form a sequence uniformly $x$-sparse in $G$ or its complement, so that sequence has length at least $\log_2(1/x)$ and the same width lower bound.

Source: https://arxiv.org/html/2301.10147v3 — 4.4; 2.3. Dependencies: lem-good-copy-extension-count, lem-few-induced-copies-exclude-a-fixed-labelled-blowup, lem-local-special-copy-trichotomy, lem-qid-maximal-blowup-trichotomy, def-qid-restricted-blockade-with-empty-blocks, thm-logarithm-change-of-base, thm-real-power-laws, lem-integer-part.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `def-subreciprocal-function-and-ell-divisibility`

Claim and conventions: A function $\ell:(0,1/2)\to(0,\infty)$ is subreciprocal when it is nonincreasing and satisfies $1<\ell(x)\leq1/x$ throughout its domain.

Source: https://arxiv.org/html/2301.10147v3 — Section 5 before 5.1. Dependencies: def-induced-copy-density-and-homogeneous-restriction-parameter, def-qid-restricted-blockade-with-empty-blocks, def-logarithm-to-a-base, lem-integer-part.

Decision: ai-altered statement; not-applicable argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-subreciprocal-functions-close-under-the-density-recursion`

Claim and conventions: Let $\ell$ be subreciprocal, $0<c<1/2$, $d>1$. Set $z=\ell(c)^{-1/2}$ and $b=2-\log_2(1-z)>2$. For $0<\epsilon<c$, put $L=\log_2(1/\epsilon)$, $Q=\log_2\ell(\epsilon)$, $x=2^{1-b}\epsilon$, $p=z\ell(x)$, and $\eta=x^d/4$. Let $t=-\lfloor-2L/\log_2p\rfloor$, and $\delta=2^{-20bdL^2/Q}$. Then $t$ is the least natural number with $p^t\geq\epsilon^{-2}$ and
$$0<\eta<1,\quad p>1,\quad p^2\geq\ell(x),\quad 1\leq t\leq5L/Q,\quad \delta<x^d\eta^t.$$
This asserts admissibility of the recursion parameters; no new operation on functions is implicit in the title.

Source: https://arxiv.org/html/2301.10147v3 — 5.2, setup preceding claim (1). Dependencies: def-subreciprocal-function-and-ell-divisibility, thm-logarithm-change-of-base, thm-real-power-laws, thm-natural-logarithm-laws, lem-integer-part.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `def-qid-finite-density-recursion-profile`

Claim and conventions: Fix a nonempty finite graph $G$, $0<\eta<1$, and an integer $s\geq0$. For real $a,b\geq0$, define
$$\beta_s(a,b)=\min\{\rho_{G[W]}(a,b):W\subseteq V(G),\ |W|\geq\eta^s|G|\}.$$
Here $\rho$ is [[def-induced-copy-density-and-homogeneous-restriction-parameter]]. The qualifying $W$ are nonempty because $\eta^s|G|>0$, and they form a finite family by [[cor-cardinality-of-the-power-set]]. The family contains $V(G)$, since $\eta^s\leq1$. Thus its minimum is attained by finite comparison, and $0<\beta_s(a,b)\leq1$.

Source: https://arxiv.org/html/2301.10147v3 — 5.2, definition of beta_s. Dependencies: def-induced-copy-density-and-homogeneous-restriction-parameter, cor-cardinality-of-the-power-set.

Decision: ai-altered statement; not-applicable argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-qid-logarithmic-and-constant-divisibility`

Claim and conventions: Every nonempty finite graph $H$ is $\ell$-divisive for each of $\ell(x)=\log_2(1/x)$ and $\ell(x)=2$. Both functions are subreciprocal on $(0,1/2)$. The divisibility constants may depend on $H$.

Source: https://arxiv.org/html/2301.10147v3 — 5.1 and paragraph on constant ell before it. Dependencies: lem-special-copy-trichotomy-produces-a-restricted-blockade, def-subreciprocal-function-and-ell-divisibility, lem-subreciprocal-functions-close-under-the-density-recursion, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, lem-integer-part, thm-logarithm-change-of-base.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `lem-ell-divisibility-amplifies-through-a-blockade`

Claim and conventions: Let $\ell$ be subreciprocal and let the nonempty finite graph $H$ be $\ell$-divisive with witnesses $0<c<1/2$, $d>1$. Write $h=|H|$. Put $z=\ell(c)^{-1/2}$, $b=2-\log_2(1-z)$, and for $0<\epsilon<c$ put $x=2^{1-b}\epsilon$, $p=z\ell(x)$, $\eta=x^d/4$, $t=-\lfloor-2\log_2(1/\epsilon)/\log_2p\rfloor$ and $\delta=2^{-20bd\log_2(1/\epsilon)^2/\log_2\ell(\epsilon)}$. Fix a nonempty finite $G$ with $n=|G|$, $\operatorname{ind}_H(G)\leq(\delta n)^h$ and $\delta n>1$. Let $\beta_r$ be its finite density profile with parameter $\eta$. For $1\leq s\leq t$ and $u,v\geq\epsilon$,
$$\beta_{s-1}(u,v)\geq\eta\min\{\beta_s(pu,v),\beta_s(u,pv)\}.$$

Source: https://arxiv.org/html/2301.10147v3 — 5.2 claim (1). Dependencies: lem-special-copy-trichotomy-produces-a-restricted-blockade, def-subreciprocal-function-and-ell-divisibility, lem-subreciprocal-functions-close-under-the-density-recursion, def-qid-finite-density-recursion-profile, lem-qid-bipartite-density-trimming, lem-qid-fixed-size-density-selection, thm-two-element-subsets-count, def-induced-copy-number, lem-integer-part.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `thm-quantitative-density-theorem-for-ell-divisive-graphs`

Claim and conventions: Let $H$ be a nonempty finite graph that is $\ell$-divisive for a subreciprocal function $\ell$. There is $C_{H,\ell}>0$ such that, for $0<\epsilon<1/2$ and
$$\delta=2^{-C_{H,\ell}\log_2(1/\epsilon)^2/\log_2\ell(\epsilon)},$$
every nonempty finite graph $G$ with $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$ has a nonempty $S\subseteq V(G)$ of size at least $\delta|G|$ with $e(G[S])\leq\epsilon\binom{|S|}{2}$ or $e(\overline G[S])\leq\epsilon\binom{|S|}{2}$.

Source: https://arxiv.org/html/2301.10147v3 — 5.2 complete proof. Dependencies: def-induced-copy-density-and-homogeneous-restriction-parameter, def-subreciprocal-function-and-ell-divisibility, lem-ell-divisibility-amplifies-through-a-blockade, thm-real-power-laws, thm-logarithm-change-of-base, lem-subreciprocal-functions-close-under-the-density-recursion, def-qid-finite-density-recursion-profile.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `cor-fox-sudakov-quantitative-induced-density-bound`

Claim and conventions: For every nonempty finite graph $H$ there is $C_H>0$ such that for $0<x<1/2$, $\delta=2^{-C_H(\log_2(1/x))^2}$, and any nonempty finite graph $G$ with $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$, there is a nonempty $S\subseteq V(G)$ with $|S|\geq\delta|G|$ and at most $x\binom{|S|}{2}$ edges in $G[S]$ or $\overline G[S]$. In particular this holds for $H$-free $G$. The version with a strict copy inequality covers the null pattern vacuously.

Source: https://arxiv.org/html/2301.10147v3 — 5.2 at ell=2; 1.7 (comparison of constant dependence). Dependencies: thm-quantitative-density-theorem-for-ell-divisive-graphs, lem-qid-logarithmic-and-constant-divisibility.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `thm-loglog-quantitative-induced-density-bound`

Claim and conventions: For every nonempty finite graph $H$ there is $C_H>0$ such that, for $0<x<1/2$ and
$$\delta=2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)},$$
every nonempty finite graph $G$ with $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$ has a nonempty $S\subseteq V(G)$ of size at least $\delta|G|$ with $e(G[S])\leq x\binom{|S|}{2}$ or $e(\overline G[S])\leq x\binom{|S|}{2}$. Every $H$-free host qualifies. The strict few-copy version covers the null pattern vacuously.

Source: https://arxiv.org/html/2301.10147v3 — 1.8; 5.1 and 5.2. Dependencies: thm-quantitative-density-theorem-for-ell-divisive-graphs, lem-qid-logarithmic-and-constant-divisibility.

Decision: ai-altered statement; ai-altered argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `ex-a-labelled-blowup-and-its-good-copies`

Claim and conventions: Label $P_3$ by $1,2,3$, with edges $12,23$. Let $A_i=\{(i,1),(i,2),(i,3)\}$. Make each $A_i$ independent, put all edges between $A_1,A_2$ and between $A_2,A_3$, and no edges between $A_1,A_3$. This blowup has 27 good copies, 9 good copies extending any prescribed middle vertex, and 126 total labelled induced embeddings of $P_3$.

Source: https://arxiv.org/html/2301.10147v3 — 4.2, explicit specialization. Dependencies: def-labelled-blowup-and-good-induced-copy, lem-good-copy-extension-count, thm-product-rule.

Decision: ai-generated statement; ai-generated argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `ex-checking-the-subreciprocal-condition-for-the-quadratic-log-bound`

Claim and conventions: For $\ell(x)=2$ on $(0,1/2)$, the subreciprocal inequalities are $1<2<1/x$ and $\log_2\ell(x)=1$. At $x=1/16$ the classical density fraction with symbolic constant $C>0$ is $2^{-16C}$.

Source: https://arxiv.org/html/2301.10147v3 — Section 5, ell=2. Dependencies: def-subreciprocal-function-and-ell-divisibility, cor-fox-sudakov-quantitative-induced-density-bound, thm-logarithm-change-of-base.

Decision: ai-generated statement; ai-generated argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `ex-checking-the-subreciprocal-condition-for-the-loglog-bound`

Claim and conventions: For $\ell(x)=\log_2(1/x)$ on $(0,1/2)$, the function is subreciprocal. At $x=1/16$ we have $\ell(x)=4$ and $\log_2\ell(x)=2$, and the loglog density fraction with symbolic constant $C>0$ is $2^{-8C}$.

Source: https://arxiv.org/html/2301.10147v3 — 5.1 and 5.2. Dependencies: def-subreciprocal-function-and-ell-divisibility, lem-qid-logarithmic-and-constant-divisibility, thm-loglog-quantitative-induced-density-bound, thm-logarithm-change-of-base.

Decision: ai-generated statement; ai-generated argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.

### Authored `ex-comparing-the-two-quantitative-density-scales`

Claim and conventions: Fix $C_1,C_2>0$. For $0<x<1/2$ put $L=\log_2(1/x)$, $D_1=2^{-C_1L^2}$ and $D_2=2^{-C_2L^2/\log_2 L}$. The ratio of logarithmic losses is
$$\frac{\log_2(1/D_2)}{\log_2(1/D_1)}=\frac{C_2}{C_1\log_2 L},$$
and tends to zero as $x$ decreases to zero. Consequently $D_2>D_1$ for all sufficiently small $x$. With $C_1=C_2=C$ and $x=1/16$, the fractions are $D_1=2^{-16C}$ and $D_2=2^{-8C}$.

Source: https://arxiv.org/html/2301.10147v3 — 1.7–1.8, numerical comparison. Dependencies: cor-fox-sudakov-quantitative-induced-density-bound, thm-loglog-quantitative-induced-density-bound, thm-logarithm-change-of-base, thm-natural-logarithm-laws.

Decision: ai-generated statement; ai-generated argument. Written argument and item-specific boundary contract saved; no judge stamp. Local checks pending the batch check pass. Open mathematical gap: none identified in this item. Next action: continue in dependency order, then run required checks.
