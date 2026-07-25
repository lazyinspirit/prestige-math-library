# Delta note — the counterexample sweeps

What the two counterexample sweeps CHANGE about the plan. Read this, not the
887-line and 565-line raw files, unless you are authoring the item in question.

Sources: `sweep-topology-counterexamples.md` (the deep dive: convergence
pathologies and metric spaces, with an explicit [F]etched / [D]erived /
[K]nowledge marker on every claim) and `sweep-counterexamples-consolidated.md`
(the wide inventory: 118 numbered counterexamples in eleven sections, every
Steen-Seebach number verified against a local clone of the pi-Base data repo
rather than recalled, plus a 22-row false-statements table and a full
axiom-of-choice ledger).

---

## 1. Nine corrections that must not reach an authored item

These are wrong in the standard teaching folklore, and several were wrong in the
briefs I wrote. Each is a **false statement we would have published**.

1. **`x^(1/3)` IS uniformly continuous on R.** From
   `u^3 - v^3 = (u-v)(u^2+uv+v^2) >= (u-v)^3` one gets the Holder-1/3 bound
   `|a^(1/3) - b^(1/3)| <= |a-b|^(1/3)`. So the classical example runs the OTHER
   way: `x^(1/3)` is a uniformly continuous bijection of R whose inverse `x^3` is
   not (`(n+1/n)^3 - n^3 = 3n + 3/n + 1/n^3 -> infinity`). **Affects the
   real-analysis uniform-continuity page directly.** Safe alternates: `arctan`
   onto `(-pi/2, pi/2)`, and `id : (N,|m-n|) -> (N,|1/m-1/n|)`.
2. **The sequential fan `S(omega)` IS Frechet-Urysohn.** What it separates is
   **FU from first countable**, with character exactly the dominating number `d`.
   The "sequential but not Frechet-Urysohn" example is the **Arens space `S_2`**,
   which is universal for that failure and has sequential order 2, i.e. the
   sequential closure operator is **not idempotent**. Do not confuse `S(omega)`
   (counts spines) with `S_2` (counts sequential order).
3. **The long line and long ray ARE path-connected.** Only the **extended** long
   ray is connected-and-not-path-connected. And sequential compactness belongs to
   the **closed** long ray; the **open** long ray is not even countably compact.
4. **`|x-y|` vs `|1/x - 1/y|` on `(0, infinity)` is not a completeness
   separator** — neither metric is complete. Use **`N` with `|m-n|` (complete)
   against `|1/m - 1/n|` (incomplete)**: same discrete topology, opposite
   completeness. Cleanest instance of "completeness is a property of the metric".
5. **"A separable space with uncountably many disjoint open sets" does not
   exist** — separable implies ccc, by a choice-free surjection from the
   countable dense set. The intended object is a separable space with an
   uncountable **closed discrete** subspace, i.e. `c(X) = aleph_0 < e(X) = c`;
   the Sorgenfrey plane antidiagonal, the Niemytzki plane x-axis, the Psi-space.
   Worth an explicit `rem-` on why the two quantify differently.
6. **The Hawaiian earring is compact and locally path-connected.** It fails
   **semi-local simple connectedness**, hence has no universal cover. It is
   neither a "path-connected not locally connected" example nor a
   "sigma-compact not locally compact" one. For the latter use `Q`, the CW wedge,
   or `colim R^n`.
7. **The double arrow space is totally disconnected** (compact, separable, first
   countable, hereditarily Lindelof, T6, non-metrizable). It is not a
   connectedness example at all.
8. **Steen-Seebach 21 (double-pointed countable complement) is not T1** — pi-Base
   asserts `T1 = false, R0 = true`. The T1-not-Hausdorff-and-Lindelof example is
   **S&S 20**, the plain cocountable topology on R.
9. **Munkres 22.6 is `p x p`, not `p x id`**; and the defect in Kelley's proof
   that Tychonoff implies AC is **not** that his spaces fail T1 (they are T1) but
   that `X_a` is **not closed** in the cofinite topology on `X_a u {Lambda}`
   whenever `X_a` is infinite. Schechter (Fund. Math. 189 (2006) 285-288) shows
   Kelley's specialisation gives only BPI. **Repair, keeping T1:** take
   `(X_a, cofinite) (+) {Lambda}` with `Lambda` isolated. **This affects
   `plan-choice-and-ultrafilters-page.md`, which cites Kelley 1950.**

## 2. Errata in Steen-Seebach itself

Cite the book for a property only after checking these. All verified against
pi-Base.

- **#80 Arens square** is claimed T2.5 and **is not** (`T2 = true, T2.5 = false`).
  The correct T2.5-but-not-functionally-Hausdorff witness is **B. Scott's
  modified Arens square** (pi-Base S000080).
- **#90 Tychonoff corkscrew** is charted countably paracompact and **is not**
  (it contains a closed copy of the deleted plank).
- **#101 Alexandroff square** was marked completely normal in the 1970 first
  edition; it is not.
- **#112 Novak space** — the construction as printed **is incorrect**: it assumes
  `2^c` is regular, which is not a ZFC theorem.
- **#76 deleted diameter** — the deleted discs are a **base**, not a subbase.

Also the book's own naming inverts the modern T2.5 vocabulary: S&S "completely
Hausdorff" = modern **Urysohn**; S&S "Urysohn" = modern **functionally
Hausdorff**. Our convention rule already fixed the modern reading; the hazard is
citing a page number for the other one.

## 3. Two claims flagged UNVERIFIED — do not author without checking

- "A Suslin line has a non-ccc square" (Kurepa; Kunen ch. II §4). Classical, but
  not confirmed against any fetched source. Verify in Kunen before use.
- The tangent-disc disjointness criterion `D_r(a) n D_s(b) = empty <=>
  |a-b| >= 2*sqrt(rs)` and the Niemytzki countability dichotomy built on it
  (consolidated report CE-65) are the sweep agent's **own derivation**,
  numerically validated but not cited. If authored, it is **original content**
  and must be flagged as such to the judge and in the owner audit.

## 4. The choice ledger — this is the big one

The consolidated report contains a full Hasse-style ledger of
`topology theorem -> choice principle`. Three entries overturn things this
project has already written down.

- **Urysohn's lemma is NOT choice-free.** It is Howard-Rubin **Form 78** (Tietze
  is Form 375). Lauchli (1962/63) built a model with a T4 space carrying only
  constant real functions; Tachtsis (Proc. AMS 147 (2019) 4029-4038, note the
  erratum DOI 10.1090/proc/14848) showed it is not provable from ZF + countable
  choice. **DMC implies UL and is optimal** (Blass 1979); **BPI does not**
  (Brunner 1983). ZF-provable sub-cases: UL for **metric** spaces (the explicit
  `d(x,A)/(d(x,A)+d(x,B))`), "compact Hausdorff implies normal", and — the one
  that matters for the metrization page — **Urysohn's METRIZATION theorem is
  entirely effective**. But **Tietze can fail even for compact Hausdorff spaces
  in ZF**. Every Urysohn/Tietze item needs an honest choice-cost remark.
- **The Baire category theorem is four different principles**, and our own
  `DEFERRED.md` §0 recorded one of them wrongly:

  | statement | over ZF |
  |---|---|
  | complete metric implies Baire | **<=> DC** (Blair 1977) |
  | **separable** complete metric implies Baire | **ZF** |
  | totally bounded complete / 2nd countable complete | **<=> AC_omega** |
  | **compact Hausdorff implies Baire** | **<=> DMC** (Fossy-Morillon 1998) |
  | **locally compact regular implies Baire** | **<=> DMC** (Bacsich 1972) |

  So "BCT for locally compact Hausdorff spaces is choice-free" is **false**, and
  Wikipedia's BCT2 is not a ZF theorem. BPI does **not** give DMC (HR [14][106] =
  3). Herrlich's 1997 survey still lists BCT <=> DC as open, apparently unaware of
  Blair 1977 — a citation trap. **DEFERRED.md §0 has been corrected.**
- **Sequential continuity for `f : R -> R`.** **Global** sequential continuity
  implies continuity is a **ZF theorem** (Sierpinski 1916; Herrlich calls
  treating it as a choice principle "a serious mistake"). **Pointwise at a single
  `x`**, and sequential continuity on a subspace of R, are each **<=> CC(R)**.
  On a general metric domain it is **<=> AC_omega**. The real-analysis continuity
  page states the global theorem, so it is safe as written; the *pointwise*
  version must not be proved by the usual "choose `x_n` in `B(x,1/n)`" argument
  without a remark.

Other load-bearing entries: **Tychonoff <=> AC**; **Tychonoff for Hausdorff <=>
BPI** (Los-Ryll-Nardzewski 1954, both directions choice-free) but **do not**
upgrade Hausdorff to Tychonoff, since a ZF compact Hausdorff space may fail
complete regularity (Lauchli); **`R` is Lindelof <=> CC(R)**, so even **`N` can
fail to be Lindelof**; **`omega_1` exists in ZF** (Hartogs 1915) but **`omega_1`
regular needs choice** (Feferman-Levy), which is what half the ordinal
counterexamples silently consume; **Stone's theorem** (every metric space is
paracompact) is not provable from ZF+DC, not implied by BPI (Corson 2020), and is
**not known** to be equivalent to AC.

## 5. What this makes cheap, and what it re-prices

**Cheap now (the B pages are close to pre-authored).** The consolidated report is
organised exactly as our B pages are: separation separators, compactness
separators, connectedness separators, countability separators, convergence,
metric, products and quotients. Each entry already carries (a) construction,
(b) what it refutes, (c) choice cost, (d) attribution. That is our item schema
minus the phase-stratified proof.

**Two organising theorems worth their own items**, because they explain why the
whole zoo exists:

- **The metrizable collapse.** For metrizable `X`: second countable <=> separable
  <=> Lindelof <=> hereditarily Lindelof <=> hereditarily separable <=> ccc <=>
  countable network <=> every closed discrete subspace is countable. Consequence:
  **every separation/compactness/countability counterexample in the report is
  non-metrizable**, with exactly one exception, the uncountable discrete space.
  This is the single best motivation for metrization theory.
- **Dowker's theorem.** For normal T1 `X`: not countably paracompact <=>
  `X x [0,1]` not normal <=> not countably metacompact. Turns "normality is not
  productive" from a list of accidents into one equivalence.

**Re-priced upward: the ordinals page.** Previously logged as optional
(`DEFERRED.md` §3a). The report shows `omega_1` is needed for the Tychonoff
plank, the corkscrews, the long line, the ordinal spaces, `[0,omega_1)` and
Dowker spaces — and, more sharply, that the *interesting* content is the choice
cost of `omega_1` **regularity**, not the ordinals themselves. Recommendation is
now firm: author `ordinals-and-transfinite-recursion` as the second foundations
page, immediately after `choice-zorn-and-ultrafilters`.

**Re-priced downward: the corkscrews.** For "regular but not completely regular"
we do **not** need the Tychonoff corkscrew, its deleted version, or Hewitt's
condensed corkscrew. **Mysior's example** (Proc. AMS 81 (1981) 652-653) does it
with **no ordinals at all** — a subset of `R x [0,inf)` plus one point, where the
slanted-segment neighbourhoods make every axis neighbourhood clopen, and a
countable-union argument forces `f(a) = 0`. Author Mysior; record the corkscrews
as a `rem-` with citations. Keep **Hewitt's condensed corkscrew** as a remark
only, since "a regular Hausdorff space with `C(X) = R`" is the sharp answer to
Urysohn's 1925 problem and deserves to be stated even unproved.

## 6. New DEFERRED entries generated by this sweep

Added to `DEFERRED.md`: Enflo's space without the approximation property; the
James space; Banach limits and `(l^inf)* = ba(2^N)`; Bishop-Phelps; the
Radon-Nikodym property and "`c_0` is not a dual space"; Eberlein-Smulian
(functional analysis). Suslin lines and Suslin's hypothesis; `aleph_1`-sized
Dowker spaces; the Solovay and Shelah models; every independence result quoted in
the ledger (set theory beyond choice). Invariance of domain; `pi_1` of the
Hawaiian earring; shape theory and the Warsaw circle's weak contractibility
(algebraic topology). Vitali sets, Bernstein sets, Banach-Tarski (measure theory
plus choice).

**Not deferred, contrary to first impression:** Riesz's lemma and the
non-compactness of the infinite-dimensional unit ball; the `l^p` scale with its
duals; the discontinuous functional on `c_00` (which is **explicit and
choice-free**, unlike the Banach-space version, which is equivalent to AC); the
Cantor set's Brouwer characterisation; Knaster-Kuratowski; the pseudo-arc and the
solenoid as point-set objects.
