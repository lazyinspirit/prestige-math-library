# frontier-13 — Alpha C, step 6b: adjudication of the independent readers' findings

**Scope:** batches 4 (`erdos-hajnal-property-and-homogeneous-sets` + companion,
`regular-pairs-and-induced-counting` + companion) and 6
(`adjunctions-units-and-counits` + companion). Reports adjudicated:
`research/frontier-13-reader-4.md` and `research/frontier-13-reader-6.md`.

**Method.** For every finding I opened the flagged item *and* the cited
dependency on disk and read both. For the fourteen source-locator findings I
downloaded Zhao chapter 2 (`https://yufeizhao.com/gtacbook/2.pdf`, 1.23 MB, 38
pages) and extracted its text with a `pypdf` venv, sanity-checked against terms
certain to be present (264 occurrences of "regular", 29 of "Szemer"), then
enumerated every numbered result in the chapter and compared its **kind** and
**subject** against each recorded locator. That mechanical pass confirmed 12 of
the 14 and, on its own, would have missed 2 — see §4.

**Counts.** 42 reader findings adjudicated: **20 `confirmed_fatal`**, **22
`confirmed_nonfatal`**, **0 `false_positive`**. I additionally raise **2 findings
of my own** that neither reader reported. Every fatal was repaired; every
nonfatal was polished here, since step 8 will not permit it later.

---

## 1. Batch 4, reader 4 — the fatal proof and citation defects

### 1.1 `thm-ramsey-logarithmic-homogeneous-set-bound` — `confirmed_fatal`

`[L4]` attributed both `log_2 x = log x / log 2` **and** `2^{log_2 x} = x` to
`def-logarithm-to-a-base`. I opened that Definition: it states only the quotient
`\log_b x := \log x/\log b`. The inverse identity is not there, and step 2.1 also
silently used monotonicity of `u \mapsto 2^u`. Both charges hold.

**Repair.** `[L4]` now restates only what the Definition says. I added
`thm-natural-logarithm-laws` (published, on `the-logarithm-and-general-powers`,
which is in this page's `requires` closure) as `[L5]`, and a new step 2.1 derives
`2^{2k-2} \le n` honestly: `\log 2 > \log 1 = 0`, so `(2k-2)\log 2 \le \log n`;
the product law gives `\log(2^{2k-2}) = (2k-2)\log 2`; strict monotonicity of
`\log` gives the conclusion. The binomial bound moved to a new step 3.1 and the
rest renumbered. **No real-power machinery is needed** — `2k-2` is a nonnegative
integer, so this is an integer power throughout.

### 1.2 `thm-random-graph-logarithmic-homogeneous-set-upper-bound` — `confirmed_fatal`

Same inflated `[L7]`, plus steps 1.1 and 4.1 needing base-two monotonicity,
`\log_2(2^m)=m`, and `\log_2(x^j)=j\log_2 x`. Confirmed.

**Repair.** `[L7]` restated faithfully; new `[L8]` from
`thm-natural-logarithm-laws`; new step 1.1 derives all three logarithm facts
before use. I also **deleted the clause `1 \le k \le n`** from the old step 1.1:
it was never derived and is never used — the conclusion `hom(G) \le k-1` follows
from `X=0` whether or not `k \le n`. Re-checked the arithmetic of the (now) step
5.1: `k \ge 3L` and `L \ge 4` give `L-(k-1)/2 \le (1-L)/2 < 0`, so
`1+3L(1-L)/2 < 0`.

### 1.3 `thm-szemeredi-regularity-lemma-with-tower-bound` — `confirmed_fatal`

The strongest finding in either report, and worse on disk than described. Step
1.2 ended mid-sentence at "`[L2] gives`" with no conclusion. The per-round
increment `q(P_{r+1}) > q(P_r)+\epsilon^5/2` was printed **after** step 2.2 which
cites it, and its own citation named the *later* step 3.1. Step 3.1 asserted an
equitable refinement with a part bound but derived no energy-loss estimate — and
Zhao labels the equitable proof a sketch (Exercise 2.1.22), so the argument could
not be imported from the named source either.

**Repair — the proof is rewritten.** The honest argument I wrote:

- **Equitisation (new step 1.2).** Order `V(G)` so each part of `P` is an
  interval and each cell of the witness refinement `R` is an interval inside its
  part; cut each part into `p = \lceil \epsilon^{-5}2^{k+5}\rceil` consecutive
  near-equal pieces. With `a = \lfloor n/k\rfloor` and `t = \lfloor a/p\rfloor`,
  part sizes `\{a,a+1\}` force every piece into `\{t,t+1\}`, so the result is
  **equitable** and refines `P`.
- **Dirty-piece bound (new step 2.1).** A piece is dirty exactly when it contains
  a boundary between consecutive `R`-cells of one part; there are at most `K-k`
  such boundaries, each in one piece, so `|D| \le 4Kn/(kp) = 2^{k+3}n/p \le
  \epsilon^5 n/4`.
- **Energy loss (new step 3.1) — the estimate that was entirely missing.** Let
  `S` be the common refinement of `P'` and `R`. `S` refines `R`, so `q(S) \ge
  q(R)` by `[L2]`. Every clean piece is already an `S`-cell, so by the energy
  definition the two sums agree except on ordered pairs meeting `D`, whose total
  weight is at most `2|D|/n` and whose squared densities lie in `[0,1]`. Hence
  `q(P') \ge q(R) - \epsilon^5/2`.

**The Statement changed.** The recurrence `m_{r+1}=\lceil\epsilon^{-5}m_r
2^{m_r+2}\rceil` is *not* what the honest estimate supports; it is now
`m_{r+1}=m_r\lceil\epsilon^{-5}2^{m_r+5}\rceil`. I say that plainly rather than
patching: the old constant left a factor-of-four gap between the dirty-vertex
bound and the round threshold. I added `def-energy-of-a-vertex-partition` to
`deps` (same page, earlier in reading order) because the loss estimate reads the
energy weights directly.

*Mechanism note worth carrying:* the original corruption is reproducible. A step
that ends with a standalone `$$…$$` display followed by a bracketed citation line
gets its display orphaned by the step parser. My first rewrite hit the identical
failure (`untagged-steps`) and I moved every such inequality inline.

### 1.4 `cor-regularity-refining-a-given-partition` — `confirmed_fatal`

The arbitrary-refinement half is fine. The equitable half said only to "split
corresponding cells" and "enlarge the recurrence" — no construction, no loss
estimate, and the asserted `\epsilon^5/2` gain unsupported by either cited fact.
Confirmed.

**Repair.** Same equitisation and energy-loss argument written out, with explicit
constants `K_0=k_0`, `K_{r+1}=K_r\lceil\epsilon^{-5}2^{K_r+5}\rceil`,
`R=\lceil2\epsilon^{-5}\rceil`, `T=K_R`. I also added the **small-graph branch**
the old text lacked: for `n < T` the partition into singletons refines `P_0`, is
equitable, and is `\epsilon`-regular, because the only subset of a singleton of
size `\ge \epsilon` times its size is the singleton itself; the null graph is
covered by the convention in `def-regular-and-equitable-vertex-partition`. Added
`def-regular-and-equitable-vertex-partition`, `def-energy-of-a-vertex-partition`,
`def-epsilon-regular-pair` to `deps`.

### 1.5 `thm-strong-regularity-lemma-by-energy-stabilisation` — `confirmed_fatal`

`[L2]` claimed the Szemerédi lemma offers "singleton handling … for smaller
graphs". Its Statement applies only when `n \ge M` and says nothing about small
graphs, yet step 1.1 used the inflated version to start the construction for
*every* finite graph. Confirmed inaccurate and load-bearing.

**Repair.** `[L2]` restated with its `n \ge M_0` threshold intact; a new step 2.1
handles `m_0 \le n < M_0` explicitly by the singleton partition. I added a step
1.1 reducing to `\epsilon_i < 1` (an `\epsilon`-regular pair is
`\epsilon'`-regular for `\epsilon' \ge \epsilon`, since the subsets tested at the
larger parameter are among those tested at the smaller), because the repaired
Szemerédi theorem requires `0<\epsilon<1`.

**I also strengthened the Statement**, for §1.6: a prescribed minimum part count
`m_0`, the hypothesis `|V(G)| \ge m_0`, and the conclusion `m_0 \le |\mathcal P|`.
Refinements only gain parts, so `|\mathcal P_i| \ge |\mathcal P_0| \ge m_0`.

### 1.6 `thm-induced-graph-removal-lemma` — `confirmed_fatal`

Step 3.1 allowed `n^2/k` for the diagonal pairs while `[L1]` supplies only `k \le
K`. At `k = 1` that allowance is `n^2`, which no choice of the approximation
parameters brings below `\epsilon n^2` for `\epsilon < 1`. Confirmed: a lower
bound on `k` is used and nowhere available.

**Repair — the standard one, threaded through two Statements.** I added a
prescribed minimum part count to `thm-strong-regularity-lemma-by-energy-stabilisation`
(§1.5) and to `thm-self-regular-representative-subsets` (`k_0 \le k \le K`,
hypothesis `|V(G)| \ge k_0`), then applied `[L1]` here with
`k_0 = \lceil 8/\epsilon\rceil` and `n_0 \ge 8/\epsilon`. Step 3.1 now derives the
diagonal bound rather than asserting it:
`\sum_i |V_i|^2 \le n\max_i|V_i| \le n(n/k+1) = n^2/k + n \le \epsilon n^2/4`.
`[L1]` is restated faithfully with the part-count bounds and the
`\epsilon_0 k^2` density-exception count. Zhao's Remark 2.1.21 records exactly
this practice ("often convenient to discard all the edges inside parts").

*Checked and clear:* `thm-graph-removal-lemma` has the same shape but **already**
applies `[L1]` "with sufficiently large minimum part count `m_0`" and bounds
within-part deletions by `n^2/m_0`. The reader was right to flag only the induced
version.

---

## 2. Batch 4, reader 4 — the nonfatal and polish findings

| item | verdict | what I changed |
|---|---|---|
| `ex-bounded-order-graph-classes-are-erdos-hajnal` | `confirmed_nonfatal` | `N^{\log2/\log N}=2` and monotonicity of `x\mapsto x^\epsilon` were genuinely absent. Added `def-real-power` and `def-natural-logarithm` as `[L4]`,`[L5]`, derived `N^\epsilon=\exp(\log2)=2`, and added a step deriving `n^\epsilon\le N^\epsilon` from strict monotonicity of `\log` and `\exp`. |
| `thm-induced-counting-lemma-for-regular-pairs` | `confirmed_nonfatal` | The diagonal error is `|A\cap B|/(|A||B|)\le 1/\max(|A|,|B|)` in the **current** candidate sets, not `1/\min_i|W_i|`; candidate sets shrink. Restated it in the current sizes, introduced the retained fraction `\rho(H,\eta)`, and chose `N` with `1/(\rho N)<\eta/4`. |
| `thm-large-self-regular-subset` | `confirmed_nonfatal` | `def-epsilon-regular-pair` defines self-regularity only for **nonempty** sets, so step 7.1's `W=\varnothing` for the null graph was not covered. Narrowed the Statement to graphs with at least one vertex, said why the hypothesis cannot be dropped, and updated both citers (`cor-partition-into-self-regular-sets`, `thm-self-regular-representative-subsets`) so their restatements match. |
| `lem-typical-degrees-in-a-regular-pair` | `confirmed_nonfatal` | "exactly `\epsilon|X|` bad vertices" need not be an integer, and step 1.2 invoked "the same argument" before it was given. Rewrote following Zhao 2.2.3: take `A` to be **all** bad vertices, assume `|A|\ge\epsilon|X|`, average to `d(A,Y')<d-\epsilon`, contradict `[L1]`. No integrality issue; the upper-exception case now follows. |
| `lem-energy-increment-for-an-irregular-partition` | `confirmed_nonfatal` | The symmetry sentence was wrong as written. The correct point: one orientation supplies the witnesses, but that single split refines **both** old parts, so the gain applies to both ordered pairs, which carry equal weight and equal regularity status — recovering the full ordered sum. Rewritten. |
| `thm-triangle-counting-lemma-for-regular-triples` | `confirmed_nonfatal` | Real: for `c<\epsilon` the factor `c-\epsilon` is negative and substituting lower bounds reverses the inequality. Added the case split. Also recorded that `a\le1` and `a\ge2\epsilon` force `\epsilon\le1/2`, so `1-2\epsilon\ge0`. |
| `thm-self-regular-representative-subsets` | `confirmed_nonfatal` | `qquad` → `\qquad` in the Statement display. Note `rendercheck` cannot catch this — KaTeX parses `qquad` happily as four variables. The reader caught it by reading. |

---

## 3. Batch 6, reader 6 — the fatal findings

### 3.1 `thm-mates-under-a-pair-of-adjunctions`, finding 1 — `confirmed_fatal`

The Statement's closing sentence, "Mates carry identity transformations to
identity transformations", is **false**, and the reader's witness is correct. I
checked it: with `F\dashv U` the free-group adjunction, the identity adjunction
on **Grp** as the second, `H=F`, `K=1_{\mathbf{Grp}}`, `\alpha=1_F`, the displayed
formula returns `\alpha^\flat=\varepsilon:FU\Rightarrow 1_{\mathbf{Grp}}`, whose
source and target are different functors — so it cannot be an identity. The
adjacent `rem-conjugates-preserve-isomorphisms-but-arbitrary-mates-need-not`
already said as much, so the page contradicted itself.

**Repair — the claim is narrowed, not patched.** The true statement, and what
Riehl 4.3.7 supports, is the identity clause of the double-categorical
functoriality: when the two adjunctions coincide and `H,K` are identities, the
mate of `1_F` is `(G\varepsilon)\circ(\eta G) = 1_G` by the triangle identity.
The Statement now says that, plus a sentence saying plainly why the general claim
fails (`\alpha^\flat` runs `HG \Rightarrow G'K`, and those need not be equal).
Steps 1.3 and 3.1 rewritten to match.

### 3.2 `thm-mates-under-a-pair-of-adjunctions`, finding 2 — `confirmed_fatal`

`[L2]` cited `thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares`,
whose Statement opens "Let `F\dashv G` be an adjunction between **locally small**
categories". The mates theorem assumes no such thing, and `[L2]` was an input to
steps 1.2 and 1.3. Confirmed: a load-bearing citation used outside its domain.

**Repair — changed the proof strategy, not the citation.** The size-free route is
available on disk and is this page's declared design (its summary: "a formulation
that stays meaningful without local smallness"). I dropped `[L2]` entirely and
proved naturality from whiskering: each of the six factors is a whiskering of
`\eta'`, `\alpha`, `\varepsilon`, `\varepsilon'`, `\beta`, `\eta`, natural by
`lem-horizontal-composition-of-natural-transformations-is-natural`, and the
vertical composites natural by
`lem-vertical-composition-of-natural-transformations-is-natural`. Both are
published, both in the page's closure.

### 3.3 `thm-adjoints-are-unique-up-to-unique-natural-isomorphism` — `confirmed_fatal`

Same defect: no local-smallness hypothesis in the Statement, `[L1]` targeting the
locally-small transposition theorem, and steps 2.2 and 3.1 leaning on it.
Confirmed.

**Repair — size-free reproof.** `[L1]` removed; `thm-unit-components-are-initial-in-their-comma-categories`
(which states in as many words "No local-smallness hypothesis is needed") and
`def-adjunction-by-unit-counit-and-triangle-identities` now carry the proof.
Naturality (step 2.2): `(F'c',\eta'_{c'}a)` lies in `(c\downarrow G)`, and both
`F'a\,\alpha_c` and `\alpha_{c'}Fa` compose with `\eta_c` to `\eta'_{c'}a` — the
first by naturality of `\eta'`, the second by naturality of `\eta` — so
initiality identifies them. Counit compatibility (step 3.1): `\varepsilon_d` and
`\varepsilon'_d\alpha_{Gd}` both send `\eta_{Gd}` to `1_{Gd}` under `G`, by the
two triangle identities and step 1.1, so initiality of `(FGd,\eta_{Gd})`
identifies them. The Statement now records that no size hypothesis is needed.

### 3.4 `ex-the-galois-connection-between-ideals-and-varieties` — `confirmed_fatal`

The Example writes `f(a)` for `f \in k[x_1,\ldots,x_n]` and `a \in k^n`, and step
1.1 needs that evaluation to preserve differences and products. I opened
`def-polynomial-evaluation-and-root`: it defines only `f_\varphi(s)` for
`f \in R[x]` at a single `s \in S`, and states no ring-homomorphism law. `[F1]`
supplies the iterated ring but no evaluation map. Confirmed: the entire
construction of `V(S)`, `I(X)`, and the ideal proof rests on an interface that is
not there.

**Repair.** Added `thm-universal-property-of-a-polynomial-ring` (published, in
closure) as `[F3]` — it states that `\operatorname{ev}_{\varphi,s}:R[x]\to S` is a
**unital ring homomorphism**. New step 1.1 builds `\operatorname{ev}_a:A\to k` by
induction on `n` along the iteration of `[F1]`, each stage a unital ring
homomorphism, so the composite is one; `f(a):=\operatorname{ev}_a(f)` then really
does satisfy `(f-g)(a)=f(a)-g(a)` and `(rf)(a)=r(a)f(a)`. Facts renumbered
`[F3]`–`[F6]`, steps renumbered.

---

## 4. Batch 6, reader 6 — the eleven polish findings, all `confirmed_nonfatal`

| # | item | what I changed |
|---|---|---|
| 4 | `thm-equivalent-encodings-of-an-adjunction` | Wrote the converse construction out: `u^\flat:=G(u)\eta_c`; `\varepsilon_d` as the unique morphism with `G(\varepsilon_d)\eta_{Gd}=1_{Gd}`; naturality of `\varepsilon` by comparing factorisation data; the first triangle identity from `G(\varepsilon_{Fc})GF(\eta_c)\eta_c=\eta_c=G(1_{Fc})\eta_c`. Step 2.1 now says what the dual construction *is*. |
| 5 | `thm-a-left-adjoint-exists-…-initial-object` | The bridge from universal arrows to an adjunction was `thm-equivalent-encodings-of-an-adjunction`, used but not declared. Added it as `[L2]` (same page, item 9 before item 10) and cited it in step 3.1. Verified no cycle and no same-page order violation. |
| 6 | `thm-adjunctions-compose` | Wrote both triangle composites out, named the interchange rewriting and the exact naturality component used (`\varepsilon` at `\eta'_{Fc}`; `\eta'` at `\varepsilon_{G'd}`), and displayed the reduction to the four triangle identities. |
| 7 | `thm-right-adjoints-preserve-limits` | Step 4.2 named the **first** triangle identity; the calculation `k=G(\varepsilon_L)GF(k)\eta_c=G(\varepsilon_L)\eta_{GL}k` uses the **second**, which is the one `[L1]` lists. Wrote the identity and the calculation into the step. |
| 8 | `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` | Naturality was checked only for `\Delta\dashv\lim`. Added the dual check for the cocone correspondence and repointed the closing step at both. |
| 9 | `thm-abelianisation-is-left-adjoint-to-…` | Step 3.1 applied step 2.1 at target `H^{\mathrm{ab}}`, but 2.1 needs an abelian target and nothing said `G/[G,G]` is abelian. Added step 1.2: `q_G` has kernel `[G,G]`, so `q_G(g)q_G(h)q_G(g)^{-1}q_G(h)^{-1}=q_G([g,h])=1`, and `q_G` is onto. |
| 10 | `thm-the-discrete-and-indiscrete-topologies-…` | `[F2]` quoted the global preimage-open characterisation; `def-continuous-map-top` defines continuity **pointwise** by neighbourhoods and states only the local open criterion. Restated `[F2]` as what the Definition gives and rewrote steps 1.1/1.2 to use it (a singleton witnesses continuity out of a discrete space; `U=Y` witnesses continuity into an indiscrete one). |
| 11 | `thm-stone-cech-is-left-adjoint-to-…` | Forming `J:\mathbf{CompHaus}\hookrightarrow\mathbf{Tych}` needs every compact Hausdorff space to be Tychonoff; `[F3]` gives only a cube embedding. Added `cor-a-compact-hausdorff-space-is-tychonoff` (published, in closure) as `[F5]` and cited it at step 1.1. |
| 12 | `prop-the-underlying-set-functor-on-fields-…` | Working it through: the **positive**-characteristic direction needs no injectivity (`p\cdot1_L=0` forces `\operatorname{char}L \mid p`, and `1` is excluded by `0\ne1`), but the **characteristic-zero** direction does. Added automatic injectivity to `[F2]`, wrote both directions into 1.3, and derived `\operatorname{char}(\mathbb Z/p)=p` in 2.1 instead of assuming it. |
| 13 | `fs-the-hom-set-form-of-an-adjunction-…` | `\alpha+0=\alpha` is the zero clause, but `0+\alpha=\alpha` needs the limit clause and transfinite induction. Wrote the induction out over all three clauses. |
| 15 | `ex-the-free-category-on-a-quiver` | `P` was never defined on quiver maps and the functor laws were unchecked, while step 4.1 invoked a locally-small-only theorem. Added step 2.2 defining `P(f)` and checking composability and both functor laws, and rewrote 4.1 to establish local smallness of the categories of **small** quivers and **small** categories first. |

---

## 5. Two findings the readers did not report

**A1. `ex-frobenius-reciprocity-for-group-representations` — inaccurate
restatement of `def-coset`.** `confirmed_nonfatal`, repaired. `[F5]` read "The
right coset represented by `g` is `gH=\{gh:h\in H\}`, while the left coset is
`Hg`" — the **opposite** of the cited Definition, which names `gH` the left coset
and `Hg` the right, and the Statement inherited the wrong name ("the right cosets
on which `f` is nonzero"). No step is invalidated: the sets are correct
throughout and the sums in 2.2/4.1/5.1 range over `G/H`. But this is exactly the
dominant defect class of this run — an `[F#]` saying something the cited item does
not — and it survived an independent read. Corrected `[F5]` and the Statement.

**A2. `thm-p3-free-graphs-have-square-root-homogeneous-sets` — undefined symbol.**
`confirmed_nonfatal`, repaired. Step 1.3 concluded `\alpha(G)\ge r` before step
2.1 introduced `r`. Now defined in 1.3 as the number of connected components.

---

## 6. `risk_review` dispositions

`risk-report` routed **42 CRITICAL/HIGH items** in batches 4 and 6 (20 in batch 4,
22 in batch 6). All 42 now carry a `risk_review` record with
`status: complete`, tier, and per-item notes naming what I actually checked. I
opened and read every one of the 42 on disk; the notes for the 23 that carried no
reader finding record the specific computations I re-derived rather than a
disposition alone (for example the case enumeration in
`cor-every-graph-on-at-most-three-vertices-…`, the collision count in
`thm-counting-lemma-for-a-fixed-graph`, and the two inverse-composite steps in
`thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit`).

`--require-reviewed` now passes on both batch contract files, which it could not
have done before this step: a `risk_review` is a disposition only Alpha writes.

---

## 7. Gate output after the repairs

```
precheck  batch 4                    46 checked, 0 failing — all clean
precheck  batch 6                    49 checked, 0 failing — all clean
citecheck batch 4                    55 item(s) scanned — OK
citecheck batch 6                    60 item(s) scanned — OK
content-policy batch 4               55 scoped item(s), 0 error(s), 0 warning(s)
content-policy batch 6               60 scoped item(s), 0 error(s), 0 warning(s)
coverage-checklist batch 4           2 page(s), 107 harvested, 0 error(s), 0 warning(s)
coverage-checklist batch 6           1 page(s), 195 harvested, 0 error(s), 0 warning(s)
url-sweep --recover --fail-on-dead   8/8 live; 0 failed; 0 recoverable
proof-contract --strict (merged)     0 error(s), 0 warning(s), 390/390 checked
proof-contract --strict --require-reviewed  batch 4: 46/46 clean; batch 6: 49/49 clean
finite-smoke batch 4                 0 error(s), 2 check(s)
finite-smoke batch 6                 0 error(s), 2 check(s)
risk-report                          0 error(s), 390 item(s) routed
rendercheck                          OK — 4916 file(s)
depcheck / fwdcheck / extcheck       OK (no cycles; forward refs declared; ‡ tier consistent)
standing closure check (all 22 pages) 463 items, 1431 deps, out_of_closure 0,
                                      cross_pair 0, b_leaf 0, unresolved 0,
                                      order 0, duplicate_ids 0
```

**Contract maintenance.** My edits changed Facts labels, step numbering, and four
Statements, staling 21 contract entries (183 strict errors — every one downstream
of a repair, none pre-existing). I regenerated the affected entries with
`tools/regen-contract-entries.mjs` (15 in batch 4, 14 in batch 6) and hand-fixed
one `boundaries` block in `lem-typical-degrees-in-a-regular-pair` whose evidence
named the step I removed. The tool preserves `boundaries`, `finite_smoke` and
`risk_review`, so it does not launder a genuine contract defect.

---

## 8. Per-page verdicts

| page | items | verdict |
|---|---:|---|
| `erdos-hajnal-property-and-homogeneous-sets` | 14 | **PASS after repair** — 2 confirmed fatal (both inflated `def-logarithm-to-a-base` restatements), both repaired with faithful facts and inline derivations. |
| `erdos-hajnal-property-and-homogeneous-sets-examples` | 8 | **PASS after repair** — 1 confirmed nonfatal (missing real-power inputs), repaired. |
| `regular-pairs-and-induced-counting` | 25 | **PASS after repair** — 4 confirmed fatal (the equitisation of the regularity lemma and its corollary, an inflated `[L2]` in strong regularity, and a missing part-count lower bound in induced removal), 6 confirmed nonfatal, 10 source locators corrected against the Zhao PDF. |
| `regular-pairs-and-induced-counting-examples` | 8 | **PASS after repair** — 0 mathematical defects; 4 source locators corrected, and one `literature-derived` construction label retagged `ai-altered` because no cited locus supports it. |
| `adjunctions-units-and-counits` | 51 | **PASS after repair** — 3 confirmed fatal (a false Statement clause about mates, and two load-bearing citations used outside their local-smallness domain), 10 confirmed nonfatal. |
| `adjunctions-units-and-counits-examples` | 9 | **PASS after repair** — 1 confirmed fatal (undeclared multivariate evaluation), 2 confirmed nonfatal (one of them mine). |

**Adjudicated: 42 reader findings + 2 of my own = 44.** 20 `confirmed_fatal`, 24
`confirmed_nonfatal`, 0 `false_positive`. Four Statements changed and said so
plainly: the Szemerédi recurrence constant, the mates identity clause, and the
prescribed part-count parameters in strong regularity and representative subsets.

**Note for step 7.** Every item on these six pages is materially rewritten
relative to the step-6a text the readers judged, so all of them are fresh judge
targets. The Statement changes in §1.3, §1.5, §1.6 and §3.1 are the ones a judge
should read first.
