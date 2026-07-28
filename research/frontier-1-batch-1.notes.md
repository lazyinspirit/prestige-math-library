# frontier-1 batch 1 — scaffolding notes (Beta-F1-1, 2026-07-28)

Pages scaffolded: `ordinal-arithmetic` (245) + `ordinal-arithmetic-examples` (246);
`separation-axioms` (261) + `separation-axioms-examples` (262);
`function-space-topologies` (283) + `function-space-topologies-examples` (284).
Final page objects: `research/frontier-1-batch-1.pages.json`.

Gates actually run, against a SPLICED COPY of the spec in my scratchpad (I did not
write to `research/plan-spec.json`):

- `node tools/validate-plan.mjs <spliced>` — **PASS**, 0 errors. The only warnings
  touching my pages are none; the 152 warnings are the pre-existing
  `redundant-prereq` set plus `[size] monotone-functions-and-discontinuities`.
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later,
  0 draft-page, 0 homeless.** Per page: 245 → 138/138 published; 261 → 124/124
  published; 283 → 184/184 published. The three B pages resolve into their own A
  page only, except 262 which also resolves into 245 (the deliberate intra-batch
  seam). **No dep of mine lands on an unbuilt planned page.**

Everything below is either (1) a prose-scaffold amendment stated as an exact edit,
or (2) an authoring-time note with no scaffold anchor that must reach the step-5
author. Owner-decision items live in my report, not here.

---

## 1. Prose-scaffold amendments

### 1.1 `research/plan-topology-set-theory-track.md` — ST-1 audit block (new)

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## ST-1. Ordinal Arithmetic and the First Uncountable Ordinal  (order 185, foundations)`
**Edit:** insert immediately after the heading line and its following blank line:

```
**frontier-1 audit, 2026-07-28 (batch 1). Six notes bind authoring of this page
pair.** (1) THE PUBLISHED RECURSION THEOREM IS NOT ENOUGH AS QUOTED.
`thm-transfinite-recursion` is stated for a well-order $(W,<)$, i.e. for a SET;
ordinal $\alpha+\beta$ is a class operation defined at every ordinal $\beta$, so
a bridge item is REQUIRED and is scaffolded as `lem-recursion-on-the-ordinals`:
apply the published theorem to each ordinal $\gamma$ (which is a well-order under
$\in$ by clause 2 of `def-ordinal`, whose initial segment below $\beta \in \gamma$
is literally $\beta$), then note that the restriction of $F_\gamma$ to $\delta \in
\gamma$ satisfies the same recursion on $\delta$ and so equals $F_\delta$ by the
published UNIQUENESS clause. Coherence, not a new recursion principle. (2) THE
EXPONENTIATION LIMIT CLAUSE RUNS OVER $0 < \beta < \lambda$, NOT OVER $\beta <
\lambda$. With the naive clause $0^\lambda$ would come out $\ge 1$, since
$0^0 = 1$. With the restricted clause the single formula
$\alpha^\lambda = \bigcup\{\alpha^\beta : 0 < \beta < \lambda\}$ is correct for
EVERY $\alpha$ including $0$, and no case split on $\alpha$ is needed; this is
worth a Remark because most texts split. (3) ORDER-TYPE CHARACTERISATIONS ARE
SCAFFOLDED AS SEPARATE ITEMS (`lem-ordinal-sum-as-an-order-type`,
`lem-ordinal-product-as-an-order-type`), because the recursive definition alone
makes $1 + \omega = \omega$ and $2 \cdot \omega = \omega$ tedious and the order
types make them immediate; both cite the published `thm-mostowski-collapse`.
The product convention is $\alpha \cdot \beta = \operatorname{ot}(\alpha \times
\beta)$ under LAST DIFFERENCES ($\beta$ copies of $\alpha$), which is what makes
$\omega \cdot 2 = \omega + \omega$; state it where it is defined. (4) CANTOR
NORMAL FORM NEEDS $\beta \le \alpha^\beta$ for $\alpha > 1$, otherwise "the
largest $\beta$ with $\omega^\beta \le \alpha$" is not known to exist; that
inequality is scaffolded as a clause of `thm-ordinal-exponent-laws`, together
with continuity at limits, which is what makes the set of such $\beta$ closed and
therefore attain its supremum. (5) NATURAL-NUMBER EXPONENTIATION IS NOT PUBLISHED.
`construction-of-the-natural-numbers` has `def-nat-addition` and
`def-nat-multiplication` and NO exponentiation, so the dictionary item
`thm-ordinal-arithmetic-agrees-on-omega` claims agreement for $+$ and $\cdot$
only, and claims CLOSURE of $\omega$ under all three. Do not write a title
asserting agreement of exponentiation with a Peano operation that does not exist.
(6) $\varepsilon_0$ ON THE B PAGE IS ORIENTATION PLUS ONE HONEST PROOF: define it
as the supremum of the $\omega$-tower (by the published `thm-recursion` over
$\mathbb{N}$, not by any fixed-point theory), then $\omega^{\varepsilon_0} =
\varepsilon_0$ IS proved, from continuity at limits. No fixed-point theorem.
```

### 1.2 `research/plan-topology-set-theory-track.md` — well-definedness row 1

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## Well-definedness obligations (TS-D5 req. 1)`, table row 1
**Old text (one line):**

```
| 1 | 185 | ordinal $\alpha+\beta$, $\alpha\cdot\beta$, $\alpha^\beta$ | each exists and is unique by the uniqueness clause of `thm-transfinite-recursion` (published), with the successor/limit cases split via `def-limit-ordinal`; convention $0^0 = 1$ and $\alpha^0=1$ stated where defined |
```

**New text (one line):**

```
| 1 | 185 | ordinal $\alpha+\beta$, $\alpha\cdot\beta$, $\alpha^\beta$ | each exists and is unique, via the new bridge item `lem-recursion-on-the-ordinals` (the published `thm-transfinite-recursion` is stated for a well-order, i.e. a SET, and gives a class operation only after a coherence argument that its uniqueness clause supplies); THREE cases at $0$, at a successor and at a limit via `def-limit-ordinal`, never two; the exponentiation limit clause runs over $0 < \beta < \lambda$ so that $0^\lambda = 0$; conventions $0^0 = 1$ and $\alpha^0 = 1$ stated where defined |
```

### 1.3 `research/plan-topology-set-theory-track.md` — scope denials, four new entries

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## Scope denials (TS-D5 req. 3)`
**Edit:** append after entry 12 (`... ST-2 states, cites, never proves.`):

```
13. **The cofinality FUNCTION $\operatorname{cf}(\alpha)$, and regularity or
    singularity of $\omega_1$.** ST-1 defines only *cofinal subset of an
    ordinal*, which is all its boundedness theorem needs. The function and the
    regular/singular vocabulary are ST-2's (order 247), and 247 is unbuilt at
    frontier-1. Licensed by: building ST-2.
14. **$\aleph_1$ as a notation, and $\aleph_1 \le 2^{\aleph_0}$.** ST-1 mints
    $\omega_1$ and proves it is a cardinal, but the aleph HIERARCHY
    $\alpha \mapsto \aleph_\alpha$ is ST-2's well-definedness obligation #7. The
    scaffolded page therefore writes $\omega_1$ throughout and never $\aleph_1$.
    Licensed by: ST-2.
15. **Ordinal arithmetic on the LEFT is not developed beyond monotonicity.**
    Right subtraction, left division, and the fixed-point (Veblen) theory of
    normal functions are dropped; $\varepsilon_0$ is exhibited by hand instead.
    Licensed by: a dedicated normal-functions page.
16. **Goodstein sequences, and any proof-theoretic use of Cantor normal form.**
    Not commissioned, and the termination proof needs transfinite induction up to
    $\varepsilon_0$ plus arithmetic coding. Licensed by: a proof-theory page.
```

### 1.4 `research/plan-topology-track.md` — T7 audit block (new)

**File:** `research/plan-topology-track.md`
**Section:** `## T7. Separation Axioms   [needs F1]`
**Edit:** insert immediately after the heading line and its following blank line:

```
**frontier-1 audit, 2026-07-28 (batch 1). T7 IS NOW FIVE SPEC PAGES, and this
section is authoritative for none of them alone.** `plan-spec.json` carries
**261 `separation-axioms`**, **263 `hausdorff-via-the-diagonal`**, **265
`hereditary-and-productive-separation`**, **267 `urysohn-lemma-and-tietze`** and
**271 `tychonoff-embedding-and-stone-cech`**. Of T7's THMS list, page 261 owns:
the definitions, separated sets, zero and cozero sets, "T1 iff singletons are
closed", metric => perfectly normal, and every implication of the chain that is
provable without Urysohn's lemma. "Hausdorff iff the diagonal is closed" is 263's;
hereditary and productive behaviour, and "completely normal iff hereditarily
normal", are 265's; Urysohn's lemma and Tietze are 267's; the cube embedding and
Stone-Cech are 271's.

**Two arrows of the "full implication chain" are NOT provable at 261, and the
page must say so rather than assert the chain.** (a) normal + T1 => completely
regular IS Urysohn's lemma, homed at 267. (b) perfectly normal => completely
normal has no proof that avoids Urysohn functions either; the honest route is
"every closed set is a zero set", which is the same lemma. Page 261 proves
T6 => T4, T5 => T4, T4+T1 => T3+T1, T3.5 => T3, T3+T1 => T2.5 => T2 => T1 => T0,
and metrizable => all of them, and records the two gaps in a Remark in the
non-decaying form ("not available at this point in the reading order").

**Dropped from 261/262, each with what would license it.** *compact Hausdorff =>
normal*: general topological compactness does not exist in this library — the only
compactness on disk is metric (`def-metric-compactness`, order 120) and the general
notion belongs to page 255 `compactness`, which is unbuilt AND sits below 261, so
it cannot be back-filled. *locally compact Hausdorff => completely regular*: same
reason, plus Urysohn. *the Sorgenfrey line and plane*: the published items
`ex-sorgenfrey-line` (order 250, B page) and `ex-sorgenfrey-plane` /
`cex-antidiagonal-of-the-sorgenfrey-plane` (order 252, B page) are LEAF-LOCKED and
may not be cited from another page; rebuilding them is cheap but the payoff item —
the Sorgenfrey plane is not normal — needs either Jones' lemma (cardinal
arithmetic, page 247, unbuilt) or a delicate Baire-category argument, and the
published Baire material (`thm-baire-category-r`, order 133) is about $\mathbb{R}$
specifically. *the Niemytzki (Moore) plane*: same obstruction, and its complete
regularity would additionally need 265. *the Tychonoff corkscrew* (a T3 space that
is not T3.5): dropped outright, it is several pages of construction. *every regular
space is normal* as an `fs-`: dropped, because after the two drops above no regular
non-normal witness is reachable — the deleted plank IS regular, but proving that
needs "regular is hereditary and productive", which is 265's.

**Kept, and what carries them.** *T1 not T2*: the cofinite topology, which is on
the A page `def-standard-topologies` (order 249) and is therefore citable, unlike
its worked B-page companion. *normal not Hausdorff*: the indiscrete two-point
space, likewise from `def-standard-topologies`; this is the item that shows the T1
hypotheses are not decoration. *T0 normal not regular*: Sierpinski space, likewise.
*Hausdorff not regular*: the K-topology on $\mathbb{R}$, built from
`thm-basis-criterion`, minted as `lem-the-k-topology-is-hausdorff-and-not-regular`
on the A page so the `fs-` can cite it. *unique sequential limits without
Hausdorff*: the cocountable topology on $\mathbb{R}$. *a Hausdorff non-normal
space*: the DELETED TYCHONOFF PLANK $((\omega_1+1) \times (\omega+1)) \setminus
\{(\omega_1,\omega)\}$, which is the reason 262 declares `ordinal-arithmetic`
(order 245) as a prerequisite — its non-normality is exactly the boundedness of
countable subsets of $\omega_1$.

**The order topology on an ordinal is minted on the A PAGE, not the B page**
(`def-order-topology-on-an-ordinal`, `lem-ordinal-order-topology-is-t3`). The
published `ex-order-topology` is a B-page item at order 250 and is leaf-locked, and
homing the ordinal case on 262 would leave it unusable by 273's B page, which the
T8a scaffold already promises will need $[0,\omega_1)$. The new definition is
stated for ordinals only and says so; it does not claim to be the general
linearly-ordered-space definition.
```

### 1.5 `research/plan-topology-track.md` — T10 audit block (new)

**File:** `research/plan-topology-track.md`
**Section:** `## T10. Function Spaces and Convergence Topologies`
**Edit:** insert immediately after the heading line and its following blank line:

```
**frontier-1 audit, 2026-07-28 (batch 1). T10 IS THREE SPEC PAGES**: **283
`function-space-topologies`**, **285 `ascoli-arzela`**, **287
`stone-weierstrass-general`**. Page 283 owns the topologies, the comparison, the
uniform limit theorem, completeness, evaluation, the exponential law and Dini;
Ascoli-Arzela is 285's and Stone-Weierstrass is 287's. Equicontinuity is DEFINED at
283 (`def-equicontinuity`) so that 285 has it; no Ascoli statement appears at 283.

**THE DOMAIN IS A METRIC SPACE THROUGHOUT, and this is forced, not stylistic.**
The compact-open topology quantifies over the compact subsets of $X$, and the only
compactness this library has is `def-metric-compactness` (order 120), for metric
spaces. General topological compactness is page 255, unbuilt, and 255 < 283, so it
cannot be back-filled either. Consequently 283 scaffolds
`def-locally-compact-metric-space` ("every point has a compact neighbourhood") with
a DICTIONARY REMARK in the style of the published `def-metrizable-space`, recording
that this is the metric special case of the general topological notion. **Standing
obligation on page 255 `compactness`: when it defines local compactness in
general, it must record the agreement with `def-locally-compact-metric-space`
explicitly.** The target $Y$ is an arbitrary topological space wherever open sets
suffice (pointwise topology, compact-open topology, the exponential law) and is
metric exactly where a distance is used (uniform metric, compact convergence,
uniform limit theorem, completeness, Dini).

**The exponential law is reached, in the form the title promises.** With $X$ a
locally compact metric space and $Z$, $Y$ arbitrary topological spaces,
transposition is a bijection between $C(X \times Z, Y)$ and $C(Z, C(X,Y))$ under
the compact-open topology: the forward half (`thm-exponential-correspondence-is-
continuous`) needs no local compactness and runs on a newly minted
`lem-tube-lemma-for-a-compact-metric-factor`; the converse half runs on
`thm-evaluation-is-continuous-on-a-locally-compact-metric-domain`. The HOMEOMORPHISM
form of the law is NOT claimed and the Statement must not claim it.

**Two published items are NOT usable and their content is re-minted.**
`lem-sup-metric-is-a-metric` (order 116) is the supremum metric on BOUNDED
REAL-VALUED functions only, so it cannot carry $C(X,Y)$ for a metric target;
283 mints `lem-uniform-metric-on-a-function-space` for
$\bar\rho(f,g) = \sup_x \min\{d(f(x),g(x)), 1\}$, which needs no boundedness
hypothesis and cites the published `lem-bounded-remetrisation` for $\min\{d,1\}$
being a uniformly equivalent metric. And `ex-bounded-functions-with-sup-metric-are-
complete` (order 119) is a B-PAGE item, leaf-locked, so completeness of the function
space is proved outright at 283 as `thm-function-space-is-complete-for-a-complete-
target`. The B page then records that on $C([0,1],\mathbb{R})$ the two metrics agree
topologically, which is the anti-two-notions obligation for this page.

**Dropped from 283, each with what would license it.** *Gelfand duality*: needs
Banach algebras, out of scope; it stays a statement for a functional-analysis track.
*"the compact-open topology is metrizable iff $X$ is hemicompact"*: needs countable
exhaustion machinery from 273; only the negative `fs-` is kept. *the general
(non-metric) form of "compact-open = compact convergence"*: needs page 255.
*Dini in its net form*: needs 259 `nets-and-filters`, unbuilt; the sequence form
is kept.
```

### 1.6 `research/plan-topology-set-theory-track.md` — build-frontier note confirmed

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## Build-frontier notes (for the orchestrator; order ≠ build order)`
**Old text (one bullet):**

```
- **ST-1/ST-2** are buildable NOW: their `requires` (183, 18, 10) are all
  published. They are the natural next foundations level, and the T-page
  counterexample machinery ($\omega_1$, long line, plank) waits on them.
```

**New text:**

```
- **ST-1 is buildable NOW and is scaffolded in build `frontier-1`** (spec order
  245; the "183" above is pre-TS-D2 and is stale — recompute from the spec). Its
  prerequisites `ordinals-and-transfinite-recursion` and
  `countability-and-uncountability` are published, and `depsource` confirms all
  138 of its scaffolded dependencies resolve to published items. **ST-2 is NOT in
  frontier-1** and remains unbuilt; every page that needs cardinal arithmetic
  (273's cardinal functions, the Jones-lemma counterexamples) still waits on it.
  The plank counterexample does NOT wait on ST-2 and is built at 262.
```

---

## 2. Authoring-time notes with no scaffold anchor

### 2.1 Binding on all three pages

- **`proof_strategy` for transfinite-induction proofs is `direct`, not
  `induction`.** The published `thm-mostowski-collapse` and `lem-ordinal-basics`
  set this precedent: precheck's `induction` strategy wants `[base]`/`[ih]`/
  `[discharge-induction]` tags shaped for ordinary induction on $\mathbb{N}$, and
  a transfinite induction is written as a direct proof that cites
  `thm-transfinite-induction` as a fact. Every proof-bearing item on 245 carries
  `direct` for this reason. The two exceptions declared in the JSON are
  `cex-the-deleted-tychonoff-plank-is-not-normal` and
  `fs-the-evaluation-map-is-always-continuous`, both genuinely by contradiction.
- **$\mathbb{N}$ contains $0$.** Every reciprocal on these pages is written
  $1/(n+1)$, never $1/n$: the set $K$ of the K-topology is
  $\{1/(n+1) : n \in \mathbb{N}\}$, the $G_\delta$ presentation of a closed set in
  a metric space is $\bigcap_n \{x : d(x,A) < 1/(n+1)\}$, and the moving spikes and
  the maps $x \mapsto x/(n+1)$ on the B page of 283 are indexed the same way.
  `cor-archimedean-reciprocal` is stated for $n \ge 1$, so the shift is the bridge
  and is cited wherever a reciprocal appears.
- **A natural number is a von Neumann natural, hence not a real.** $1/(n+1)$ means
  $1/\iota(n+1)$; `def-canonical-natural` is in the deps of every item that writes
  one.
- **No wikilink inside `$...$`.** Several titles here carry displayed operators
  ($\omega^{\beta_1}$, $S(K,V)$, $\bar\rho$); keep every `[[id]]` outside math.
- **`external_refs`, not `deps`, for the two independence citations.** They are
  the axiom-exemption class and must never be a proof step:
  `rem-omega-one-and-the-cost-of-choice` (245) declares
  `rem-feferman-levy-model`; `rem-separation-axiom-conventions` (261) declares
  `rem-urysohn-lemma-not-a-zf-theorem`. Both targets are published
  `proved_here: false` items, both bodies must link them, and `extcheck` enforces
  the rest. Neither appears in the scaffolded `deps` lists, which is why
  `depsource` does not show them.
- **`justified_by`, not `deps`, for the definitional discharges.** The JSON shape
  has no `justified_by` field, so the obligations are recorded here:
  `def-first-uncountable-ordinal` is justified by
  `thm-omega-one-is-the-least-uncountable-ordinal`;
  `def-order-topology-on-an-ordinal` by `lem-ordinal-order-topology-is-t3`;
  `def-topology-of-uniform-convergence` by `lem-uniform-convergence-in-the-uniform-
  metric`; `def-compact-open-topology` by `thm-compact-open-equals-compact-
  convergence`. The existence-and-uniqueness discharges for the three ordinal
  operations are the `cor-*-well-defined` items, which precede their definitions
  and are therefore ordinary `deps`, following the published
  `cor-nat-addition-well-defined` / `def-nat-addition` pattern.

### 2.2 Page 245 `ordinal-arithmetic`

- `lem-recursion-on-the-ordinals` is a THEOREM SCHEMA, exactly as
  `thm-transfinite-recursion` is; say so, and say that Replacement is what it
  spends and that no choice is used. Its proof is three moves: (i) for each
  ordinal $\gamma$, $(\gamma, \in)$ is a well-order by clause 2 of `def-ordinal`
  and its proper initial segments are exactly the $\beta \in \gamma$, since
  $\gamma$ is transitive; (ii) the published theorem gives a unique
  $F_\gamma$ on $\gamma$; (iii) for $\delta \in \gamma$ the restriction
  $F_\gamma \restriction \delta$ satisfies the recursion on $\delta$, so equals
  $F_\delta$ by uniqueness. Coherence, then define $F(\beta) := F_{\beta^{+}}(\beta)$.
- **Three cases, not two, everywhere**: $0$, successor, limit. `def-limit-ordinal`
  says in terms this library's words that every ordinal is exactly one of the
  three; cite it, do not write "successor or limit".
- The suprema in the limit clauses are unions, and a union of a set of ordinals is
  an ordinal by claim (e) of the published `lem-ordinal-basics`. That claim is what
  makes the values ordinals; it is the whole content of the three
  `cor-*-well-defined` items and should be cited by clause letter.
- `thm-ordinal-arithmetic-monotonicity` is the workhorse. It must state, as
  separate clauses: $\beta < \gamma \Rightarrow \alpha + \beta < \alpha + \gamma$;
  $\alpha \le \beta \Rightarrow \alpha + \gamma \le \beta + \gamma$ (weak, and the
  `fs-` two items later shows weak is best possible); left cancellation for $+$;
  for $\alpha > 0$, $\beta < \gamma \Rightarrow \alpha\beta < \alpha\gamma$;
  $\alpha \le \beta \Rightarrow \alpha\gamma \le \beta\gamma$; and CONTINUITY:
  for limit $\lambda$, $\alpha + \lambda = \sup_{\beta<\lambda}(\alpha+\beta)$ and
  $\alpha\cdot\lambda = \sup_{\beta<\lambda}\alpha\beta$, which is the defining
  clause restated as a supremum property and is what later "least $\beta$ such
  that" arguments consume.
- `thm-ordinal-arithmetic-agrees-on-omega` is well-definedness obligation #5 and is
  **not optional**: without it the library holds two arithmetics on $\mathbb{N}$.
  It has three claims: (a) for $m, n \in \omega$ the ordinals $m+n$, $m\cdot n$ and
  $m^n$ lie in $\omega$; (b) ordinal $m+n$ is `def-nat-addition`'s $m+n$ and
  ordinal $m \cdot n$ is `def-nat-multiplication`'s; (c) the ordinal order $\in$
  on $\omega$ is `def-nat-order`'s $<$, which is claim (i) of the published
  `lem-omega-least-limit-ordinal` and is CITED, not re-proved. Claim (b) is
  ordinary induction on $n$ using `thm-induction-principle`, since the recursion
  clauses at $0$ and at a successor are literally the Peano clauses; the limit
  clause never fires below $\omega$.
- `thm-omega-one-is-the-least-uncountable-ordinal`: the bridge that has to be
  written out is "an ordinal injects into $\omega$ iff it is at most countable" —
  forward by `lem-subset-of-countable`, backward by `def-countable` directly. The
  published `thm-hartogs` gives the least ordinal NOT injecting into $\omega$;
  that bridge is what turns it into the least UNCOUNTABLE ordinal. **Say in the
  Statement that this is a theorem of ZF**, because two items later the cost
  starts.
- `thm-countable-subsets-of-omega-one-are-bounded`: name $\mathrm{AC}_\omega$ in
  the Statement, not only in Facts. The proof is: $A \subseteq \omega_1$ at most
  countable, each $\alpha \in A$ at most countable by the previous theorem,
  $\bigcup A$ an ordinal by `lem-ordinal-basics` (e), $\bigcup A$ at most countable
  by `thm-countable-union-of-countable` (this is the single AC$_\omega$ step),
  hence $\bigcup A \in \omega_1$, hence $A$ is bounded by it. Note that $\bigcup A$
  IS $\sup A$, by the "suprema come for free" remark of `lem-ordinal-basics`.
- The `fs-` witnesses, all computed from the order-type lemmas:
  $1+\omega = \sup_{n<\omega}(1+n) = \omega < \omega+1$;
  $2\cdot\omega = \sup_{n<\omega} 2n = \omega < \omega+\omega = \omega\cdot 2$;
  $(1+1)\cdot\omega = 2\cdot\omega = \omega$ while
  $1\cdot\omega + 1\cdot\omega = \omega\cdot 2 \ne \omega$;
  $0+\omega = \omega = 1+\omega$ although $0 < 1$.
  `fs-ordinal-multiplication-is-right-distributive` must NOT cite the commutativity
  `fs-` for $2\cdot\omega = \omega$; recompute it inline (one line from the limit
  clause), so the refutation stands on theorems.
- $2^\omega = \omega$: $2^n \in \omega$ for $n \in \omega$ by the agreement theorem,
  $2^n \ge n$ by monotonicity, so
  $2^\omega = \bigcup\{2^n : 0 < n < \omega\} = \omega$. The `rem-ordinal-versus-
  cardinal-exponentiation` then contrasts this with `thm-cantor-powerset`
  ($\omega \prec \mathcal{P}(\omega)$) and `thm-r-uncountable`; it must NOT write
  $2^{\aleph_0}$ as a cardinal power, since cardinal exponentiation is ST-2's and
  is not defined here. Phrase it as $\lvert \mathcal{P}(\omega) \rvert$.
- **Standing sweep item.** The published ‡ `rem-aleph-one-dowker-space-open`
  (order 5) and `rem-dowker-spaces` (order 3) speak of $\aleph_1$ with no
  definition anywhere in the library. Once 245 publishes, $\omega_1$ exists and
  those remarks CAN link it. Neither contains a scope-denial claim that 245
  falsifies, so no amendment is forced; I flag it as a low-severity opportunity in
  my report, not as a defect.

### 2.3 Page 261/262 `separation-axioms`

- **`def-hausdorff-space` already exists** and is published on
  `subspaces-products-and-quotients` (order 251). REUSE IT. Do not mint a T2
  definition. The published item's "Scope of this item" paragraph explicitly
  defers the graded family to a later page — page 261 is that page, and its
  conventions Remark should say so in a non-decaying form (what 261 proves, not
  what the library contains).
- **`def-f-sigma-g-delta` already exists** and is published on
  `cantor-set-baire-and-measure-zero` (order 133), but it is stated for
  $\mathbb{R}$ only, over `def-open-and-closed-in-r`. The new
  `def-g-delta-and-f-sigma-in-a-topological-space` must carry the DICTIONARY:
  for $\mathbb{R}$ with its usual topology the two notions coincide, because the
  two collections of open subsets of $\mathbb{R}$ are literally the same
  collection (`rem-r-native-topology-scope`, `def-metrizable-space`). This is why
  page 261 declares `cantor-set-baire-and-measure-zero` as a prerequisite; without
  the dictionary this would be the level-7 two-notions-of-open defect again.
- **`def-standard-topologies` is on the A page 249**, so the discrete, indiscrete,
  cofinite, cocountable, particular-point and Sierpinski topologies are all
  citable. Their worked B-page companions at 250 are NOT. Every witness on 261/262
  is built from `def-standard-topologies`, never from the 250 examples.
- The `fs-` on unique sequential limits: in $(\mathbb{R}, \mathcal{T}_{coc})$ a
  convergent sequence is eventually constant, because the complement of the set of
  values other than the limit is open (`def-standard-topologies`, cocountable
  closed sets are the at most countable sets, and a sequence's range is at most
  countable by `lem-countable-iff-surjection-from-n`); and no two nonempty open
  sets are disjoint, because two at most countable complements cannot cover the
  uncountable $\mathbb{R}$ (`thm-r-uncountable`, `lem-subset-of-countable`).
- `lem-the-k-topology-is-hausdorff-and-not-regular`: basis is the open intervals
  $(a,b)$ together with the sets $(a,b) \setminus K$, $K = \{1/(n+1) : n \in
  \mathbb{N}\}$; check (B1) and (B2) against `thm-basis-criterion` explicitly. It
  is finer than the usual topology, hence Hausdorff. $K$ is closed in it because
  $\mathbb{R} \setminus K = ((-\infty,\infty) \setminus K)$ is basic-open-generated.
  Non-regularity at the pair $(0, K)$: any basic $(a,b) \setminus K \ni 0$ and any
  open $V \supseteq K$ must meet, because a basic neighbourhood of some
  $1/(n+1) \in (a,b)$ contains points of $(a,b) \setminus K$ (density of the
  irrationals, or `lem-of-q-dense` applied to a gap). Write the choice of $n$ from
  `cor-archimedean-reciprocal`; "clearly some $1/(n+1)$ lies in $(a,b)$" is the
  gap that ships defects.
- `thm-metric-spaces-are-completely-normal`: for separated $A, B$ put
  $U = \bigcup_{a \in A} B(a, d(a,B)/2)$ and $V = \bigcup_{b \in B} B(b, d(b,A)/2)$.
  Both radii are positive because $a \notin \overline{B}$ and
  $\overline{B} = \{x : d(x,B) = 0\}$ (`thm-metric-closure-characterisation`,
  `def-metric-bounded-diameter`). Disjointness is the triangle inequality. **No
  choice principle is used**: the unions run over sets, nothing is selected. Say so
  — this library states the choice cost of every metric-space theorem.
  $B$ may be empty; then $d(a,B)$ is undefined (`lem-distance-to-set-is-lipschitz`
  is stated for nonempty $A$), so handle $A = \varnothing$ or $B = \varnothing$
  first, where $\varnothing$ and $X$ separate them.
- `thm-metric-spaces-are-tychonoff-and-perfectly-normal`: closed $A \ne \varnothing$
  is the zero set of $x \mapsto d(x,A)$, continuous by
  `lem-distance-to-set-is-lipschitz`, and equals
  $\bigcap_{n}\{x : d(x,A) < 1/(n+1)\}$, a $G_\delta$. For complete regularity at
  $x_0 \notin C$ closed, take $f(x) = \min\{1, d(x,x_0)/r\}$ with
  $r = d(x_0, C) > 0$. Both need $C \ne \varnothing$ handled separately.
- `thm-the-separation-implication-chain` is the page landmark and is an ASSEMBLY
  item: every clause names the earlier item that carries it, and the proof cites.
  Its Statement must list exactly the arrows proved and no more — the T4 => T3.5
  and T6 => T5 arrows are absent, and their absence is stated in
  `rem-separation-axiom-conventions`, not in the theorem.
- `rem-separation-axiom-conventions` carries four things: the regular/normal-with-
  or-without-T1 fork (Munkres builds T1 in and writes "regular"; Kelley, Willard
  and Engelking do not — this library separates the two and always writes the T1
  hypothesis); the $T_{2\frac12}$ naming and its clash with Urysohn's LEMMA; the
  two missing arrows; and the choice observation, via `external_refs` to
  `rem-urysohn-lemma-not-a-zf-theorem`, that Urysohn's lemma is not even a theorem
  of ZF, so the gap at 261 is not merely bookkeeping.
- `cex-the-deleted-tychonoff-plank-is-not-normal` — the full argument, since it is
  the hardest item in the batch. Let $T = ((\omega_1^{+}) \times (\omega^{+}))
  \setminus \{(\omega_1,\omega)\}$ with the product of the two order topologies,
  restricted to $T$. Note $\omega_1^{+} = \omega_1 + 1$ by `def-ordinal-addition`;
  say it once and then use whichever notation reads better.
  $A = \{\omega_1\} \times \omega$ and $B = \omega_1 \times \{\omega\}$ are
  disjoint and closed in $T$ (`thm-subspace-closure-and-interior`). Suppose open
  $U \supseteq A$ and $V \supseteq B$ are disjoint. For each $n \in \omega$ the
  point $(\omega_1, n) \in U$ has a basic neighbourhood
  $(\alpha_n, \omega_1] \times \{n\} \subseteq U$. The set
  $\{\alpha_n : n \in \omega\}$ is an at most countable subset of $\omega_1$, so
  $\alpha = \sup_n \alpha_n < \omega_1$ by
  `thm-countable-subsets-of-omega-one-are-bounded` — **this is the single step that
  uses page 245, and it is the reason 262 requires it.** Then
  $(\alpha, \omega_1] \times \{n\} \subseteq U$ for every $n$. Now
  $(\alpha^{+}, \omega) \in B \subseteq V$, so $V$ contains a basic
  $\{\alpha^{+}\} \times (m, \omega]$ for some $m < \omega$, which meets
  $U$ at $(\alpha^{+}, m^{+})$. Contradiction. Hausdorffness of $T$ is proved
  INLINE from the basis of the product topology and
  `lem-ordinal-order-topology-is-t3`; do NOT invoke "Hausdorff is productive and
  hereditary", which is page 265's and is not available here.
  The $\mathrm{AC}_\omega$ cost is inherited from the boundedness theorem and must
  be stated.
- `lem-ordinal-order-topology-is-t3`: the basis $\{[0,\beta]\} \cup \{(\alpha,\beta]\}$
  consists of CLOPEN sets — the complement of $(\alpha,\beta]$ in $\gamma$ is
  $[0,\alpha] \cup (\beta,\gamma)$, both open — so the space has a clopen basis and
  regularity is immediate from `lem-regularity-via-closed-neighbourhoods`. Check
  (B1)/(B2) against `thm-basis-criterion` including the $\beta = 0$ and limit
  cases. Note that this basis is the right one BECAUSE ordinals have no
  left-neighbours at successors; a naive "open intervals" basis misses the isolated
  points.

### 2.4 Page 283/284 `function-space-topologies`

- **Conventions to fix once, in `rem-function-space-conventions`, and then use
  silently**: $X$ is a metric space and is NONEMPTY wherever a supremum over $X$ is
  taken (`lem-uniform-metric-on-a-function-space` fails outright for
  $X = \varnothing$, where $Y^X$ is a one-point set and $\sup \varnothing$ does not
  exist in this library — see `rem-sup-conventions`); $Y$ is a topological space,
  and metric where stated; $C(X,Y)$ always carries the topology named at the point
  of use, never a default.
- `lem-uniform-metric-on-a-function-space`: the proof is the proof of the published
  `lem-sup-metric-is-a-metric` with $\lvert f(s)-g(s)\rvert$ replaced by
  $\bar d(f(x),g(x)) = \min\{d(f(x),g(x)),1\}$, which is a metric by the published
  `lem-bounded-remetrisation` and is bounded by $1$, so no boundedness hypothesis
  on $f$ and $g$ is needed. Say explicitly that this REPLACES the published sup
  metric rather than generalising it, and that on $C([0,1],\mathbb{R})$ the two
  agree topologically — the B page proves that, and it is this page's
  anti-two-notions obligation.
- `lem-tube-lemma-for-a-compact-metric-factor`: handle $K = \varnothing$ first
  (any $W$ works). For nonempty $K$, cover $K \times \{z_0\}$ by basic boxes
  $U \times W$ inside $N$, use the AMBIENT form of compactness
  (`lem-compactness-is-intrinsic` claim 3, which is the indexed form the scaffold
  will want), take the finite intersection of the $W$s. The finite selection is
  over a finite index set and is `lem-finite-choice`, a ZF theorem — say so, as the
  published compactness page does.
- `thm-compact-open-equals-compact-convergence` is stated on $C(X,Y)$, not on
  $Y^X$: the compact-open topology is only defined on continuous maps, because
  $f[K]$ compact is what the argument uses
  (`thm-continuous-image-of-a-compact-space-is-compact`). One direction needs a
  Lebesgue-number-free argument: for $f \in S(K,V)$, $f[K]$ is a compact subset of
  the open $V$, so $\varepsilon = d(f[K], Y \setminus V) > 0$ by
  `thm-extreme-value-metric` applied to $x \mapsto d(f(x), Y\setminus V)$, which is
  continuous by `lem-distance-to-set-is-lipschitz`; handle $V = Y$ separately, where
  $Y \setminus V = \varnothing$ and the distance is undefined.
- `thm-uniform-limit-theorem`: the standard $\varepsilon/3$; $X$ may be an
  arbitrary topological space here, and the scaffold keeps it metric only for
  uniformity of the page's hypotheses. State whichever the author proves, and make
  the title match.
- `thm-the-exponential-law` — the Statement is a BIJECTION between
  $C(X \times Z, Y)$ and $C(Z, C(X,Y))$, not a homeomorphism. A title or Statement
  claiming a homeomorphism would assert more than the proof gives and is fatal.
- `fs-the-compact-open-topology-is-always-metrizable`: witness is $X = \mathbb{R}$
  with the DISCRETE metric ($d(x,y) = 1$ for $x \ne y$; build it inline, since
  `ex-discrete-metric` is a leaf-locked B item at order 117) and $Y = \mathbb{R}$.
  Compact subsets of a discrete metric space are exactly the finite sets, so the
  compact-open topology is the pointwise topology, i.e. the product topology on
  $\mathbb{R}^{\mathbb{R}}$. That is not first countable: a countable
  neighbourhood base at the zero function would constrain only countably many
  coordinates in total (`thm-countable-union-of-countable`, cost
  $\mathrm{AC}_\omega$, stated), leaving a coordinate $x_0$ free, and then
  $S(x_0, (-1,1))$ contains no base member. Not first countable implies not
  metrizable by the published `def-metrizable-space` ("two things every metrizable
  space has").
- `fs-the-evaluation-map-is-always-continuous`: witness $X = \mathbb{Q}$ with the
  metric of $\mathbb{R}$, $Y = \mathbb{R}$. The load-bearing sub-fact is that a
  compact subset $K \subseteq \mathbb{Q}$ has empty interior in $\mathbb{Q}$:
  $K$ compact implies complete (`thm-compact-implies-complete-and-totally-bounded`)
  implies closed in $\mathbb{R}$ (`thm-complete-subspace-iff-closed`), so if
  $K \supseteq (a,b) \cap \mathbb{Q}$ then $K \supseteq [a,b]$ and $K$ contains an
  irrational, contradiction (`cor-irrationals-uncountable` or any single irrational
  in $(a,b)$; `lem-rat-embeds-dense` gives the density facts). Then pick a rational
  $q$ near $0$ outside the finite union of compacta appearing in a supposed basic
  neighbourhood, and use $f(x) = 2\max\{0, 1 - d(x,q)/\varepsilon\}$, continuous by
  `lem-distance-to-set-is-lipschitz`, vanishing on the compacta and with
  $f(q) = 2$.
- `thm-dini`: $X$ compact metric, $f_n \to f$ pointwise with $f_n \le f_{n+1}$ and
  all of $f_n$, $f$ continuous. The published `thm-monotone-convergence` supplies
  the pointwise limits; the cover argument then gives uniformity. The finite
  subcover selection is over a finite set (`lem-finite-choice`). State the
  monotonicity direction in the Statement; both directions hold and the proof is
  written for one.
- B page 284 uses PIECEWISE-LINEAR families throughout (moving spikes; the ramps
  $r_n$ increasing to the indicator of $\{1\}$; $x \mapsto x/(n+1)$), assembled by
  the published `lem-continuity-is-local-and-pastes` (claim 3, finite closed
  cover). This deliberately avoids `def-integer-power` and any $x^n$ argument, so
  that no item on the page depends on the power machinery of order 16 for a fact
  it does not need.

---

## 3. `requires` amendments the orchestrator must splice

Three page objects in my JSON carry `requires` different from `plan-spec.json`.
All three are needed and all three point strictly downward.

| page | spec `requires` | mine | why |
|---|---|---|---|
| 261 `separation-axioms` | `subspaces-products-and-quotients` | `+ cantor-set-baire-and-measure-zero` (133), `+ ordinals-and-transfinite-recursion` (243) | 133 homes `def-f-sigma-g-delta`, needed for the $G_\delta$ dictionary; 243 homes `def-ordinal` etc., needed by `def-order-topology-on-an-ordinal` |
| 262 `separation-axioms-examples` | `separation-axioms` | `+ ordinal-arithmetic` (245) | the deleted Tychonoff plank needs $\omega_1$ and the boundedness theorem |
| 245, 246, 283, 284 | unchanged | unchanged | — |

`validate-plan` reports none of these as `redundant-prereq`, so all three are real
edges, not decoration.
