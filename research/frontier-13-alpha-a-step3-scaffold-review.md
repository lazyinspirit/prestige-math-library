# frontier-13 — Alpha group A, step-3 scaffold review

**Group A (LEAD): batches 1, 2, 5 — five A/B pairs, ten pages.**
Alpha: Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window.
Batches 3, 4, 6 and 7 were not opened for review; groups B and C own them.
Cross-group items I noticed while reading shared material are recorded in §7 for
the orchestrator, not acted on.

Filename is namespaced per `briefs/alpha.md` §"Group Alpha or lead Alpha" and the
group table in `research/frontier-13-brief-alpha.md`; groups B and C are writing
concurrently and an unnamespaced path would collide.

---

## 0. Verdicts

| batch | pair | A/B items | verdict | split |
|---|---|---|---|---|
| 1 | `symmetric-polynomials` (58) | 26 / 9 | **insufficient** | no |
| 1 | `algebraic-extensions-degree-and-finite-fields` (96) | 35 / 14 | **sufficient** (one harvest repair) | no |
| 2 | `primitive-roots-and-unit-groups-modulo-n` (57.001) | 26 / 11 | **insufficient** | no |
| 2 | `semidirect-products-and-automorphism-groups` (68) | 23 / 15 | **sufficient** | no |
| 5 | `tensor-products-of-modules` (106) | 38 / 11 | **insufficient** | no |

Three `insufficient` verdicts, each with an exact remedy below. None requires a
rewrite: two are additions of source-backed results, one is a four-id dependency
swap. All five splits are ruled `no`, each by name in §6.

**The single most urgent item is F5.1** — an out-of-closure citation on
`tensor-products-of-modules` that will fail `undeclared-prereq` at the step-4
splice, and which no gate in this run could have caught (§5.1).

---

## 1. Batch 1 · `symmetric-polynomials` (order 58) — **INSUFFICIENT**

26 A items, 9 B items. The development is genuinely rich: elementary, monomial,
power-sum and complete homogeneous families; lexicographic descent with the
leading-multidegree lemmas separated from the theorem; existence, algebraic
independence and uniqueness as three items; $E(-t)H(t)=1$; Newton's identities in
both regimes; the exact $n!\in R^\times$ hypothesis rather than a characteristic
condition; Vandermonde, discriminant, monic resultant. The proof decomposition is
honest and nothing is compressed into an omnibus theorem.

### 1.1 The Sylvester-resultant decline is REAL and structurally forced — the step-3 record's premise is wrong

`research/frontier-13-step3-decisions.md` §"Batch 1" instructs me to press this
decline because "batch 1 already has determinants over a commutative ring in its
closure, so 'it needs a determinant' is not by itself a licence to decline."

**That premise is false, verified from disk.** The closure of `symmetric-polynomials`
is 28 pages and tops out at `splitting-fields`, order 56. The lowest-order
determinant page in the entire spec is `determinants-of-matrices-over-a-commutative-ring`
at **order 82**, and `symmetric-polynomials` is **order 58**. A `requires` edge
from 58 to 82 fails `validate-plan` check 13 `prereq-order` outright, and check 15's
`forwardRefs` escape is A-page-forbidden (`forward-whitelist`). Building determinant
theory locally is not open either: it would duplicate the stable ids already
published on order 82 (`dup-id`). The only remaining route is a reading-order
change, which is owner-only.

So the disposition is the licensed one — "material genuinely belonging to another
page's topic" — and Beta's recorded reason names the real obstruction. **Confirmed;
no action.** Please correct the step-3 decisions record so a later session does not
re-litigate it.

### 1.2 F1.1 — but two declines RIGHT NEXT TO IT are false, and cost three provable results

I opened Milne, *Fields and Galois Theory* v5.10 at the declared locator (Ch. 4
Appendix, PDF p. 58). **Milne does not define the resultant by a Sylvester matrix
at all.** His defining display is

$$\operatorname{Res}(f,g)=a^{m}b^{n}\prod_{i,j}(\alpha_i-\beta_j),$$

and Proposition 4.35 then reads (a) $\operatorname{Res}(f,g)=(-1)^{mn}\operatorname{Res}(g,f)$;
(b) $\operatorname{Res}(f,g)=a^m\prod_i g(\alpha_i)$; (c) if $g\equiv g_1 \bmod f$ then
$\operatorname{Res}(f,g)=a^{m-m_1}\operatorname{Res}(f,g_1)$. Milne's entire proof of (a)
and (b) is the sentence "Statements (a) and (b) are obvious", and (c) follows from
(b). **No determinant appears anywhere in the range.**

Batch 1 declines two of these three:

| coverage row | recorded reason | why it is false |
|---|---|---|
| Prop 4.35(a), symmetry, `deferred` | "belongs with the Sylvester determinant presentation after determinant machinery is available" | Milne proves it from the double product with no determinant. For **monic** $f,g$ ($a=b=1$) it is $\prod_{i,j}(\alpha_i-\beta_j)=(-1)^{mn}\prod_{j,i}(\beta_j-\alpha_i)$ — one line. |
| Prop 4.35(c), reduction mod $f$, `out-of-scope` | "specific to the full classical resultant and its leading-coefficient normalization" | For monic $f$ the normalisation is trivial ($a=1$): $g-g_1=qf$ gives $g(\alpha_i)=g_1(\alpha_i)$, so $\operatorname{Res}(f,g)=\operatorname{Res}(f,g_1)$. It is a one-line corollary of the page's own root-product theorem. |

These are inconvenience declines, not obstructions, and the 2026-08-11 rule
forbids them. Note also that the design paragraph Beta replaced (its notes §"Applyable
edits", edit 4) explicitly listed $\operatorname{Res}(f,g)=\prod_{i,j}(\alpha_i-\beta_j)$
among the retained results; the replacement paragraph silently dropped it.

**Add three items, all provable from what is already on the page.** Source:
Milne FT v5.10 p. 58, already inside the declared locator range.

1. `thm-monic-resultant-as-a-double-root-product` — for **monic** $f,g$ of degrees
   $n,m$ splitting in a common extension,
   $\operatorname{Res}(f,g)=\prod_{i,j}(\alpha_i-\beta_j)$.
   Route: `thm-monic-resultant-root-product-and-common-root-criterion` gives
   $\prod_i g(\alpha_i)$; substitute $g=\prod_j(x-\beta_j)$. The common splitting
   field is published — `cor-splitting-field-of-a-product-is-the-composite-of-splitting-fields`
   on `splitting-fields`, already in closure and already cited by this page.
2. `cor-monic-resultant-symmetry` — for **both** $f$ and $g$ monic,
   $\operatorname{Res}(f,g)=(-1)^{mn}\operatorname{Res}(g,f)$. State "both monic"
   explicitly: $\operatorname{Res}(g,f)$ is undefined under `def-monic-resultant`
   unless $g$ is monic. Milne Prop 4.35(a).
3. `cor-monic-resultant-is-unchanged-modulo-f` — for monic $f$, if $g-g_1=qf$ for
   some $q$, then $\operatorname{Res}(f,g)=\operatorname{Res}(f,g_1)$. Hypothesis-free
   in this form; no division algorithm needed. Milne Prop 4.35(c), monic case.

Retire the two coverage rows' dispositions to `included` naming these ids, and keep
the **general** (non-monic) resultant and the Sylvester matrix deferred with the
order-82 reason from §1.1, which is the true one.

### 1.3 F1.2 — the Grinberg locator excludes the range that two scaffold items are sourced from

Declared locator: *"Chapter 7, Section 7.1, printed pp. 434-449, in full; stopping
before Section 7.2."*

Opened `arxiv.org/pdf/2506.00738v1`. Two defects:

- **The locator is self-contradictory.** §7.2 "N-partitions and monomial symmetric
  polynomials" begins **on printed page 449**, which the range includes. "pp. 434–449"
  and "stopping before §7.2" cannot both hold.
- **Two scaffold items are sourced from §7.2, which the locator excludes.** The
  provenance table credits `def-monomial-symmetric-polynomials` to "DG-7's orbit sums
  indexed by partitions" and `thm-monomial-symmetric-polynomials-form-a-basis` to
  "DG-7's basis result". Those are **Definition 7.2.4** ($m_\lambda$) and **Theorem
  7.2.7(a)** ("the family $(m_\lambda)$ is a basis of the $K$-module $\mathcal S$").
  Neither has a coverage row, because the declared range stops before them.

Fix: extend the locator to §7.1–§7.2 through Theorem 7.2.7, and add disposition
rows for 7.2.1, 7.2.2, 7.2.3, **7.2.4 → `def-monomial-symmetric-polynomials`**,
7.2.5, 7.2.6, **7.2.7 → `thm-monomial-symmetric-polynomials-form-a-basis`**, 7.2.8,
7.2.9. §7.3 (Schur polynomials) stays outside the range.

### 1.4 F1.3 — the Grinberg harvest enumerates 9 rows against 17 numbered results

Grinberg §7.1 contains **7.1.1 through 7.1.17**. The coverage file records **9 rows**.
Un-enumerated, with no disposition: Convention 7.1.1, Definition 7.1.2 (the $S_N$
action on $\mathcal P$), Example 7.1.3, **Proposition 7.1.4** (the action is a
well-defined group action), **Proposition 7.1.5** (it acts by $K$-algebra
automorphisms), **Theorem 7.1.6** ($\mathcal S$ is a $K$-subalgebra), Definition
7.1.7, Definition 7.1.8, **Definition 7.1.9** ($e_n$), Example 7.1.10, and
Lemma 7.1.17.

Mathematically almost nothing is lost — Thm 7.1.6 is `prop-symmetric-polynomials-form-a-subring`
and Def 7.1.9 is `def-elementary-symmetric-polynomials`, both scaffolded. The defect
is in the artifact: the 2026-08-11 rule requires a disposition for every named-result
heading in the declared range, and `coverage-checklist.mjs` passes cleanly because it
only checks that the rows *present* are disposed. Add the eleven rows.

For contrast, the **Conrad *Symmetric Polynomials* harvest is complete and faithful**
— 25 rows covering §§1–5 with adjacent examples consolidated, and Theorem 2.12
(lexicographic order admits no infinite descent) correctly recorded as `inline` into
the FTSP existence proof, which is the load-bearing termination argument. That is
what a faithful harvest of this shape looks like.

### 1.5 B page

9 items, 7 examples and 2 counterexamples (the lexicographic-shortcut trap and the
characteristic-two failure of power-sum generation). Real, not token. **Advisory,
not a verdict trigger:** one `fs-` boundary item would earn its place — *FALSE: the
discriminant vanishes exactly when $f$ has a repeated root in the base field* —
refuted by $(x^2-2)^2$ over $\mathbb Q$, whose repeated roots $\pm\sqrt2$ are not in
$\mathbb Q$. It marks the boundary of `thm-discriminant-root-formula-and-repeated-root-criterion`,
whose criterion is about a splitting field, and needs nothing beyond published
material.

---

## 2. Batch 1 · `algebraic-extensions-degree-and-finite-fields` (order 96) — **SUFFICIENT**

35 A items, 14 B items. The standard development is present in full: degree and
finite extensions, the product-basis lemma separated from the tower law,
finite⟹algebraic, algebraic iff simple extension finite, finitely generated
algebraic ⟹ finite, algebraic elements form a subfield, relative algebraic closure,
transitivity, the compositum bound; then prime subfields, characteristic, the
binomial theorem over a commutative ring with $p\mid\binom pk$, Frobenius, prime-power
order, cyclicity of $\mathbb F_q^\times$, the $x^{p^n}-x$ root field, existence,
uniqueness, the subfield lattice, the factorisation of $x^{q^n}-x$ into monic
irreducibles of degree dividing $n$, irreducibles in every degree, simplicity of
finite extensions of finite fields; and then an honestly algebraic constructibility
block.

Verified on disk:

- The minimal polynomial and $[F(a):F]=\deg m_a$ are **published**, not missing:
  `thm-simple-algebraic-extension-quotient-power-basis-and-degree` on
  `field-extensions-and-the-complex-numbers` (54, in closure) states the power basis
  **and** the degree. Beta correctly cites it rather than minting a duplicate, and
  correctly records that the prose scaffold's "there is no definition of an algebraic
  extension anywhere in the library" is stale.
- Cyclicity of $\mathbb F_q^\times$ is discharged through published
  `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`. I read that item: it proves
  cyclicity from the invariant-factor form of the finite-abelian structure theorem
  together with `thm-root-bound-for-polynomials-over-a-domain`. Reusing it rather
  than duplicating the argument is the right call and answers the task file's
  route question.
- The constructibility block is sound and correctly scoped. Adjoining a real
  quadratic is $F_i(\sqrt d)$ with $d=b^2-4c>0$ forced by reality; the compositum
  of two towers is a tower once redundant adjunctions are dropped, which Beta's
  notes explicitly require; and the degree obstruction is stated as a **necessary
  condition only**, avoiding the classical false converse. $\mathbb R$, its ordering
  and positive square roots are all in closure (`foundations-of-the-real-numbers` 9,
  `suprema-and-infima` 14, `roots-and-rational-powers` 16).

### 2.1 All six declines confirmed real

- **Infinite tower law** (Knapp Thm 9.6, verified present at printed p. 456):
  published `def-dimension` assigns no cardinal dimension. Cardinal arithmetic is a
  subject area the library has not reached, not a missing local lemma. Real.
- **Straightedge-and-compass equivalence** (Knapp Thm 9.24, verified at printed
  p. 470; Milne Thm 1.37): needs a coordinate-geometric model of line/circle
  intersection. Real subject boundary.
- **Regular polygons** (Knapp Thm 9.25, verified at printed p. 473): cyclotomic
  fields and Fermat primes. Real.
- **Trisection / squaring the circle**: the geometric interface and the
  transcendence of $\pi$. Real, and each is declined for its own reason rather
  than one repeated excuse.
- **Algebraic closure of a finite field and its infinite subfield lattice**
  (Milne 4.23, 4.24): algebraic-closure construction is a dedicated page's topic.
  Real.

### 2.2 F1.4 — required harvest repair (does not change the verdict)

The Conrad *Finite Fields* harvest declares "§§1–2 and Appendix A **in full**" and
records **13 rows**, against **25 numbered results** in that range. Enumerated:
1.1, 1.5, 1.6, 1.10, 2.1, 2.2, 2.3, 2.5, 2.7, 2.8, A.1, A.2, A.4. Absent with no
disposition: Examples 1.2, 1.3, 1.4, 1.7, 1.8, 2.6, 2.9, 2.10, A.5 and Remarks 1.9,
2.4, A.3, plus the three section headings.

Unlike the Grinberg case there is **no consolidation row** for any of them — the
harvest lists theorems and lemmas only and drops the source's Examples and Remarks
as a class. Mathematical loss is nil: Conrad Ex 1.2/1.3 are the B page's
`ex-f-eight-as-a-polynomial-quotient` and `ex-f-nine-as-a-polynomial-quotient`,
Ex 1.7 is `ex-a-generator-of-f-eight-multiplicative-group`, Ex 2.9 is
`ex-subfields-of-f-sixty-four`. Remark 1.9 (the multiplicative group is cyclic but
the additive group generally is not) is the one worth a `deferred`/`inline` row on
its own merits.

Because breadth and depth are intact, the verdict stays `sufficient`; the harvest
completion is a required fix, routed to the owning Beta with F1.2 and F1.3.

Knapp's declared locators were verified against the digital 2nd edition: printed
p. 453 is PDF p. 479 (offset 26); §1 at printed 453–457 contains Prop 9.1–Thm 9.10,
§3 at 461–464 contains Thm 9.14–Prop 9.20, §5 at 468–474 contains Thm 9.23–9.25.
Every result the declines cite exists at the stated place. 21 rows against ~23
headings — faithful.

---

## 3. Batch 2 · `primitive-roots-and-unit-groups-modulo-n` (order 57.001) — **INSUFFICIENT**

26 A items, 11 B items. Everything the task file asked for is present: primitive
roots with the $n=1$ convention made explicit, index/discrete-logarithm calculus,
order of a power, the generator count, the coprime-order product criterion,
cyclicity of $(\mathbb Z/p)^\times$, the lift to odd $p^k$ through the
$(1+p^su)^p$ congruence and the $p$-adic valuation lemmas, the exceptional
$C_2\times C_{2^{k-2}}$ structure at $2^k$ with the exact order of 5, the CRT
decomposition, the full structure theorem, Carmichael's $\lambda$ with the
maximal-order characterisation and the lcm formula, the classification of moduli
admitting primitive roots, and the primitive-root count. Euler's totient and its
multiplicativity are correctly disposed `already-published` rather than duplicated.

### 3.1 The cyclicity of $\mathbb F_p^\times$ route — verified, and it is a proof

`cor-unit-group-modulo-prime-is-cyclic` cites `thm-z-mod-p-is-a-field` →
`lem-field-is-a-commutative-ring` → published `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`,
and the notes state the route explicitly at §"Published dependency audit". The
published corollary is a genuine proved theorem, not folklore: I read it, and its
proof combines the invariant-factor structure theorem with the root bound — i.e. it
*is* the first of the two routes the task file named, already built. Correct
disposition; no duplicate id minted.

**One contract-level gap to record for step 5:** `lem-field-is-a-commutative-ring`
supplies a commutative ring, while `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`
requires an **integral domain**. The step from field to domain
($ab=0,\ a\neq0\Rightarrow b=a^{-1}ab=0$) is elementary algebra and licensed inline,
but it is a real step and must appear as one; it is not currently in the contract's
inputs.

### 3.2 F2.1 — the declared source range skips the subsection containing the page's missing theorem

Hackman's locator reads: *"Chapter C, §C.I (C.I.1–C.I.6), §C.II (C.II.1–C.II.4),
§C.IV (C.IV.1–C.IV.10), and §C.V (C.V.1–C.V.7); **the intervening §C.III** and
end-of-chapter exercises **were not included in the read range**."*

Over the range it *does* declare, the harvest is **complete and faithful** — 31 rows
against exactly 27 numbered results plus 4 section headings, which I enumerated from
the PDF. The problem is the range.

**Hackman §C.III is "Binomial Congruences", and it contains C.III.1 Theorem
(Euler's Criterion):**

> Let $n$ admit a primitive root, $f=\varphi(n)$, $\gcd(a,n)=1$. The congruence
> $x^m\equiv a \pmod n$ is solvable if and only if $a^{f/(f,m)}\equiv1\pmod n$.

Hackman's proof is precisely the machinery this page already scaffolds: write
$a\equiv g^k$, put $x\equiv g^y$, and the congruence becomes the linear congruence
$my\equiv k \pmod f$, solvable iff $(m,f)\mid k$; the last equivalence is the order
characterisation.

This result appears in **no source's `contents`** and in **no coverage row** — it is
neither built nor disposed. That is the defect step 3 exists to catch (criterion 1),
and it is the criterion-4 signal as well: a standard result of the chapter absent
from every harvested heading because a subsection of the chapter was skipped.

It is not licensed by a successor page. `quadratic-residues-and-the-legendre-symbol`
exists at order **57.003** and requires `primitive-roots-and-unit-groups-modulo-n-examples`
— so the **$m=2$ / Legendre-symbol specialisation correctly belongs there**, and
deferring *that* is right. But C.III.1 is the general-$m$, general-$n$ binomial
congruence criterion; it is the $a\neq1$ completion of this page's own
`cor-power-congruence-solution-count-modulo-a-prime` (which is exactly the $a=1$,
$n$ prime case) and of its index calculus, and 57.003 would cite it, not own it.

**Add, and extend the Hackman locator to include §C.III:**

1. `thm-solvability-of-binomial-congruences` — for $n$ admitting a primitive root,
   $\gcd(a,n)=1$ and $m\ge1$: $x^m\equiv a\pmod n$ is solvable iff
   $a^{\varphi(n)/\gcd(\varphi(n),m)}\equiv1\pmod n$. Deps already on the page:
   `def-index-of-a-unit-relative-to-a-primitive-root`, `prop-index-calculus-modulo-n`,
   `prop-primitive-root-iff-unit-group-generator`, `lem-order-characterisation`, plus
   published linear-congruence solvability from `congruences-and-the-chinese-remainder-theorem`
   (order 30, in closure). Source: Hackman C.III.1.
2. `cor-number-of-solutions-of-a-binomial-congruence` — when solvable, the solution
   count is exactly $\gcd(\varphi(n),m)$. Same route; generalises the existing
   item 10 from $a=1$ and prime $n$ to the full statement.

Add disposition rows for C.III.1, C.III.2 (the four worked examples → `inline` or a
B-page item) and the §C.III heading. Hackman's §C.III exercises may be dispositioned
as a block, as the harvest already does for end-of-chapter exercises.

### 3.3 Other declines confirmed

The three Hackman `out-of-scope` rows (two modulus-40487 machine searches, the
decimal-period application) and the two Stein Sage transcripts are computational
apparatus, not mathematics. Real.

**Stein's harvest is exemplary** and verified against the PDF: 15 rows against
exactly 15 numbered items and subsection headings in §2.5 from Definition 2.5.1 to
Example 2.5.13. The decision to stop before §2.5.3 is correct — §2.5.3 is **Artin's
Conjecture**, an open problem, and §2.5.4 is primitive-root algorithms.

---

## 4. Batch 2 · `semidirect-products-and-automorphism-groups` (order 68) — **SUFFICIENT**

23 A items, 15 B items. Internal and external semidirect products with the
equivalence, the recognition theorem, split extensions and the splitting lemma
proved as a full equivalence, $\operatorname{Out}(G)$, characteristic-in-normal, the
holomorph with its faithful affine action and the regular-normal-subgroup
recognition property, $\operatorname{Aut}(C_n)$, $\operatorname{Aut}(\mathbb Z^n)$,
the action-twisting isomorphism lemma, generalised and ordinary dihedral groups, and
a complete order-$pq$ classification. Every item on the task file's list is present.

### 4.1 The run's flagged seam — closed by building locally, and RECORDED

This is the named challenge, and the answer is explicit: **built locally and
recorded in the notes, not silently worked around.** Beta's notes carry a dedicated
section, §"Hard seam between the pairs", which states that no Pair-B item cites
Pair A, names the two results it built instead, gives the reason, and closes with
"Accordingly, no new requires edge is recommended." The step-3 decisions record
already verified the four published dependencies exist. What was left to me was
whether the proof closes. **It does.**

`thm-automorphisms-of-a-finite-cyclic-group`, deps `def-group-isomorphism-and-automorphism`,
`thm-classification-of-cyclic-groups`, `thm-unit-criterion-modulo-n`,
`lem-order-characterisation`:

- Every endomorphism of $C_n=\langle g\rangle$ is $g\mapsto g^a$; $[a]\mapsto\varphi_a$
  is well defined because $\operatorname{ord}(g)=n$.
- **Invertible $\Leftarrow$ $\gcd(a,n)=1$:** `thm-unit-criterion-modulo-n` gives $b$
  with $ab\equiv1\pmod n$, so $(g^a)^b=g^{ab}=g\cdot g^{kn}=g$, hence $g\in\langle g^a\rangle$.
- **$\Rightarrow$:** if $d=\gcd(a,n)>1$ then $(g^a)^{n/d}=(g^n)^{a/d}=1$, so by
  `lem-order-characterisation` $\operatorname{ord}(g^a)\le n/d<n$.

Both directions close inside the declared closure, and critically **without**
`lem-order-of-a-power-in-a-finite-cyclic-group` — which is item 5 on Pair A and would
have been the illegal edge. The route is sound.

*Contract note for step 5:* derivation step 1.1 currently discharges this to
"elementary calculation". The explicit inverse witness $ab\equiv1\pmod n$ obtained
from `thm-unit-criterion-modulo-n` must be written out; it is the whole content of
the forward direction.

### 4.2 R2.1 — recommended `requires` amendment: add `polynomial-rings-and-roots` (order 52)

`lem-power-congruence-root-bound-modulo-a-prime` ("$x^d\equiv1\pmod q$ has at most
$d$ solutions") declares deps `thm-z-mod-p-is-a-field`, `def-congruence-modulo-an-integer`,
`thm-induction-principle` only. The published `thm-root-bound-for-polynomials-over-a-domain`
states exactly this result and is **not in the page's closure**: order 68's closure
contains no ring or polynomial page at all. Beta's notes call the local substitute
"the locally scaffolded coefficient-array root bound" — i.e. the lemma must introduce
coefficient arrays and re-derive the factor theorem inside itself, duplicating an
audited published proof in miniature.

On priority (1), citational accuracy, the better route is the published theorem.
**Simulated the edge across all 11 run closures:**

| check | result |
|---|---|
| target `status: published` | yes — `library/abstract-algebra/polynomial-rings-and-roots.md` |
| `prereq-order` | order **52** < 68 |
| in prior closure | no — closure grows 26 → 31 |
| in-run seams, all 11 pairs | **0** |
| new `redundant-prereq` warning | none — `congruences-and-the-chinese-remainder-theorem` was already reachable via two other prerequisites |

If the orchestrator approves, `lem-power-congruence-root-bound-modulo-a-prime` becomes
a two-line citation of `thm-root-bound-for-polynomials-over-a-domain` specialised to
$D=\mathbb Z/q$ and $f=x^d-1$. If declined, the local route is still legal and the
lemma stays as scaffolded — this is an accuracy improvement, not a defect. It is
cheap now and a rewrite after step 5.

### 4.3 Two recorded notes, neither a verdict trigger

- **Thin backing for a theorem.** `thm-automorphisms-of-a-finite-rank-free-abelian-group`
  ($\operatorname{Aut}(\mathbb Z^n)\cong GL_n(\mathbb Z)$) is backed by
  Bridson–Vogtmann's **abstract and first two introduction paragraphs** — 2 harvested
  headings from a survey. That satisfies the letter of the two-treatment rule only
  because Milne and Conrad carry the rest of the page; a textbook citation for this
  specific theorem would be better. Also: $GL_n(\mathbb Z)$ **must** be defined
  locally in the Statement as invertible integer coefficient arrays, since
  `matrices-and-the-matrix-of-a-linear-map` is order 78 and out of closure; Beta's
  conventions section says exactly this, and step 5 must honour it or the title cites
  an object the page never defines.
- **Under-declared dependency.** The same item's deps are only `def-free-abelian-group`
  and `def-group-isomorphism-and-automorphism`. Nothing declared establishes
  $\mathbb Z^n$ as a free abelian group of rank $n$ in the first place
  (`def-external-direct-product-of-groups` and `prop-order-of-finite-direct-product`
  are both in closure). Reconcile at step 5.

### 4.4 Declines and harvest

All ten `out-of-scope` rows confirmed real: the quaternion nonsplitting witness (no
quaternion page in closure — the cyclic prime-square witness is built instead), the
upper-triangular and elementary-abelian $GL(n,p)$ examples (matrix interfaces at
order 78+), and Cameron's complete-group and iterated-automorphism exercises
(specialised classification, not holomorph structure). **Zero `deferred` rows — the
healthiest decline profile in my three batches.**

Cameron §7.2 verified against the PDF: the section runs from the heading through
four exercises and two examples, and the three declined rows are exactly the
elementary-abelian $GL(n,p)$ example and the two complete-group exercises. Faithful.

---

## 5. Batch 5 · `tensor-products-of-modules` (order 106) — **INSUFFICIENT**

38 A items, 11 B items, and the mathematics is the strongest scaffold in my group.
Every MOD-3 requirement is present and the two things the design is emphatic about
both reached the scaffold.

**What I verified positively, so it is not re-litigated later:**

- **The guard item is present and correct.** `prop-elementary-tensor-formulas-descend-exactly-when-balanced`
  is its own numbered item, and its proof contract carries the mandatory explicit
  failure: on $\mathbb Z\otimes_{\mathbb Z}\mathbb Z$ the prescription $q(m\otimes n)=m$
  would send $2\otimes1=1\otimes2$ to both $2$ and $1$. That is the demonstration
  MOD-3 §Traps (i) demands, not a remark.
- **Construction and module structure are two statements.**
  `def-tensor-product-of-modules-by-generators-and-relations` is over an arbitrary
  unital $R$ with a right and a left module and produces an abelian group;
  `thm-commutative-ring-module-structure-on-a-tensor-product` supplies the $R$-module
  structure only for commutative $R$; and `thm-bimodule-actions-induced-on-tensor-products`
  carries the general case. MOD-3 §Traps (ii) is honoured.
- **Enough injectives** is correctly `already-published`. I confirmed
  `thm-module-categories-have-enough-injectives` is `status: published` and listed on
  `free-modules-and-exact-sequences` (104, in closure), together with
  `lem-every-abelian-group-embeds-in-a-divisible-group`, `lem-coinduced-modules-are-injective`
  and `thm-baer-criterion-for-injective-modules`. The locally built
  `thm-character-duals-of-flat-modules-are-injective` is Lambek's distinct
  flat ⟹ character-dual-injective result, not a duplicate.
- **$\mathbb C\otimes_{\mathbb R}\mathbb C$ is properly licensed.** I opened
  `cor-complex-numbers-are-a-quadratic-real-extension`: its Statement is
  "$\mathbb C=\mathbb R(i)$, power basis $1,i$, $[\mathbb C:\mathbb R]=2$" — exactly
  the real basis the example needs — and `def-complex-numbers-and-arithmetic` supplies
  the unital $\mathbb R\to\mathbb C$ map. The $\mathbb R$-algebra structure is built
  on the A page by `def-algebra-over-a-commutative-ring`. Retention is correct.
- **Stacks §10.39 harvest is complete** — 10.39.1 through 10.39.5, every one
  disposed, matching the declared range exactly.

### 5.1 F5.1 — HARD GATE FAILURE: an out-of-closure citation that no gate in this run can catch

`def-tensor-product-of-modules-by-generators-and-relations` declares

```
def-free-abelian-group
thm-abelianisation-of-a-free-group-is-free-abelian
```

Both are homed on **`free-groups-and-presentations`, order 60**, and that page is
**not** in the closure of `tensor-products-of-modules`. The closure is 39 pages —
foundations through `free-modules-and-exact-sequences` (104), `dual-spaces-bilinear-forms-and-inertia`
(92) and `field-extensions-and-the-complex-numbers` (54) — and order 60 is not among
them. This is `validate-plan` check 15 `undeclared-prereq` and it will fire at the
step-4 splice.

It is load-bearing, not decorative: the contract for
`thm-universal-property-of-module-tensor-products` opens "Let $F$ be the free abelian
group on $M\times N$ and $H$ the subgroup generated by the additivity and balance
relations."

**I swept all seven batches' 450 scaffolded items against disk item homes and page
closures. This is the only out-of-closure dependency in the entire run.**

**Why every gate missed it, which the orchestrator should know before step 4.**
`validate-plan.mjs` cannot catch this class:

1. In the item-dep loop it does `if (existing.has(d)) continue;` — any dep already
   present in `items/` is skipped before the home-page tests.
2. `pageSucc()` induces page edges from `pageOfItem`, which is built **only from the
   spec's own page item lists**. `free-groups-and-presentations` carries **6 items in
   `plan-spec.json` against 32 on disk**, and neither `def-free-abelian-group` nor
   `thm-abelianisation-of-a-free-group-is-free-abelian` is among the six.

So no page edge is induced and `undeclared-prereq` cannot fire. That is why Beta's
in-memory splice reported clean (its notes, §Blockers) and why the whole-run graph
check in the step-3 decisions record reported 0 unresolved dependencies — "unresolved"
there means "id not found anywhere", which is a different question from "homed on a
page outside the closure".

**Preferred fix — swap the two dependencies, no spec edit:**

| replace | with | homed on |
|---|---|---|
| `def-free-abelian-group` | `def-free-module-on-a-set-and-standard-basis` at $R=\mathbb Z$ | `free-modules-and-exact-sequences` (104) ✓ in closure |
| `thm-abelianisation-of-a-free-group-is-free-abelian` | `thm-universal-property-of-free-modules` at $R=\mathbb Z$ | `free-modules-and-exact-sequences` (104) ✓ in closure |

`def-free-module-on-a-set-and-standard-basis` gives $R^{(X)}=\bigoplus_{x\in X}R$
with unique finite expression and the standard basis inclusion, so $\mathbb Z^{(M\times N)}$
**is** the free abelian group on $M\times N$, and `thm-universal-property-of-free-modules`
supplies the extension-and-uniqueness clause. The "abelian group viewed as a
$\mathbb Z$-module" move is already precedented in published, judged content on that
very page: `lem-every-abelian-group-embeds-in-a-divisible-group` opens
"**Given:** An abelian group $A$, viewed as a $\mathbb Z$-module" and builds
$F=\mathbb Z^{(A)}$. `free-modules-and-exact-sequences` is already this page's
most-cited prerequisite (15 citations).

**Alternative:** add `free-groups-and-presentations` to the page's `requires`. It is
order-legal (60 < 106), published, and creates no in-run seam. I recommend against
it: it buys nothing mathematically, and citing the module interface the page uses
everywhere else is the more accurate citation.

### 5.2 F5.2 — all 41 proof contracts have empty `citations`, and the notes say otherwise

```
batch 1: 70 contracts,  0 with zero citations
batch 2: 65 contracts,  0 with zero citations
batch 5: 41 contracts, 41 with zero citations
```

Batch 5's notes state, at §"Proof-obligation pass": *"At scaffold time each contract
records every planned dependency as a citation obligation."* On disk every
`citations` array is `[]`. Batches 1 and 2 pre-verified 95 and 132 exact published
quotations against disk respectively; batch 5 pre-verified none.

Nothing is mathematically wrong today, and `proof-contract.mjs --strict` will demand
one citation contract per authored `[F#]` fact at step 5 (`citation-fact-uncontracted`).
The cost is that the step-5 author on the run's highest-fan-out module page starts
from zero pre-checked citation obligations, on a page whose universal property 35
downstream A pages will cite. Route to the owning Beta with the dependency swap so
both are fixed in one pass, and correct the notes claim.

### 5.3 The two deferrals are real, but neither row names its licensing page

This was my named challenge, and the answer is: **the declines are well founded and
the rows are under-specified.**

| deferral | recorded reason | licensing page, verified in the spec |
|---|---|---|
| Stacks Lemma 10.39.3, directed colimits of flat modules are flat | "requires exactness of directed colimits and a developed directed-system interface"; adds that no downstream module page uses it | Real — colimit theory begins at `limits-and-colimits` (363) and exactness of filtered colimits is the Grothendieck AB5 axiom on `subobject-lattices-generators-and-the-grothendieck-axioms` (365.017). **Neither is named in the row.** |
| Barr §5.19, the Tor formulation of flatness | "belongs to the later derived-functor and projective-resolution layer" | Real — `projective-and-injective-resolutions` (365.045), `derived-functors` (365.047) and `tor-flatness-and-global-dimension` (365.055) all exist. **None is named in the row.** |

Both rest on a subject area the library reaches only in the 363–365 band, so
`deferred` is the licensed disposition. Require each row to name its page id, the
same standard batch 6's deferrals were held to. Beta's own note that the directed-colimit
row "is the decline most likely to be challenged" is honest and correct.

The two `out-of-scope` rows — Li's quaternion tensor square (no quaternion algebra
in the library) and the coordinate-ring interpretation of products of affine
algebraic sets (vanishing ideals and spectra, hundreds of orders later) — are real.

### 5.4 Source depth

Primary backing is two monographs, the Stacks Project and Barr's *Acyclic Models*,
plus Miller's full lecture-note set and Li's commutative-algebra notes. Criterion (a)
is satisfied comfortably. I verified the Dennis Week 1 note directly: its 21
harvested headings are genuine numbered paragraph headings 1.1–1.8, 2.1–2.8, 3.1–3.2+
in a two-page note, so the count is accurate rather than inflated. Stacks §10.12
contains 16 numbered items (10.12.1–10.12.16); the declared range stops at Remark
10.12.13 and 16 rows are recorded, so the range is covered. The excluded 10.12.15–16
are localisation, which the library does not have.

---

## 6. Split rulings — every pair, by name

The 60-item ceiling is `validate-plan` error `size`. All five are **no split**, and
counts are read from the `.pages.json` files, not from the step-3 record.

| pair | A items | ruling |
|---|---|---|
| `symmetric-polynomials` | 26 (29 if F1.1's three items are added) | **No split.** Less than half the ceiling. |
| `algebraic-extensions-degree-and-finite-fields` | 35 | **No split** — ruled explicitly as the brief requires, notwithstanding the two-subject shape and the design's stale A-30 sizing. The finite-field half consumes the degree machinery of the first half directly: `thm-finite-fields-have-prime-power-order` uses $[\mathbb F_q:\mathbb F_p]=n$ and the subfield lattice uses `cor-intermediate-field-degrees-divide`. Splitting at 35 items would convert intra-page structure into a cross-page dependency chain and buy no readability. Beta's recorded cut line (algebraic extensions and degree through the compositum bound / finite fields and constructibility from prime subfields) is the right one **if** a later harvest ever forces it; hold it, do not spend it. |
| `primitive-roots-and-unit-groups-modulo-n` | 26 (28 with F2.1) | **No split.** |
| `semidirect-products-and-automorphism-groups` | 23 | **No split.** |
| `tensor-products-of-modules` | 38 | **No split.** Beta's reasoning is right: the exactness/flatness half rests organically on the construction, universal property, right exactness and direct-sum calculus of the first half, and 38 leaves 22 of headroom. |

No pair in group A is at risk of crossing 60 during step-5 authoring. The three
additions I am asking for total five items across two pages.

---

## 7. Recorded for the orchestrator (lead-Alpha duty; I did not act on these)

1. **`undeclared-prereq` has a blind spot, and F5.1 is sitting in it.** Published
   deps are skipped in `validate-plan`'s item loop, and page edges come only from the
   spec's item lists, which are stale for pages like `free-groups-and-presentations`
   (6 in spec, 32 on disk). Recommend running a disk-home closure check over all
   seven batches before the step-4 splice. I have already run it across all 450
   items: **batch 5 is the only offender**, so this is a one-item fix, not a sweep.
2. **Batch 4's per-page counts were never recorded, and one page looks thin.**
   `erdos-hajnal-property-and-homogeneous-sets` scaffolds **11 A items** and 8 B
   items; `regular-pairs-and-induced-counting` has 25 and 8. The step-3 decisions
   table shows batch 4's split row as "pending" and the narrative records only the
   52-item total. Eleven items is under half the next-thinnest A page in the run
   (23), on the page that opens a block with 21 downstream pages. Group C's call,
   but it should be looked at explicitly rather than absorbed into a total.
3. **Correct the step-3 decisions record on batch 1.** It states that batch 1 "already
   has determinants over a commutative ring in its closure". It does not and cannot:
   the closure of `symmetric-polynomials` (58) tops out at `splitting-fields` (56), and
   the lowest-order determinant page is order 82. The real defect near that decline is
   F1.1, which the record does not mention.

---

## 8. Summary of what goes back to the Betas

| id | batch | page | fix | cost |
|---|---|---|---|---|
| **F5.1** | 5 | `tensor-products-of-modules` | swap 2 deps to `def-free-module-on-a-set-and-standard-basis` + `thm-universal-property-of-free-modules` at $R=\mathbb Z$ | 2 dep edits |
| **F1.1** | 1 | `symmetric-polynomials` | add 3 monic-resultant items (Milne 4.35(a),(c) + the double-product); retire 2 false decline rows | 3 items |
| **F2.1** | 2 | `primitive-roots-…` | add 2 binomial-congruence items (Hackman C.III.1); extend the locator to §C.III and add its rows | 2 items |
| **F5.2** | 5 | `tensor-products-of-modules` | populate all 41 contracts' `citations` with disk-checked quotes; correct the notes claim | artifact |
| **F1.2** | 1 | `symmetric-polynomials` | fix the Grinberg locator and add §7.2 rows for Def 7.2.4 and Thm 7.2.7 | artifact |
| **F1.3** | 1 | `symmetric-polynomials` | add the 11 missing Grinberg §7.1 disposition rows | artifact |
| **F1.4** | 1 | `algebraic-extensions-…` | add the 12 missing Conrad *Finite Fields* Example/Remark rows | artifact |
| **F5.3** | 5 | `tensor-products-of-modules` | name the licensing page id in both deferral rows | artifact |
| **R2.1** | 2 | `semidirect-products-…` | *orchestrator decision:* add `polynomial-rings-and-roots` (52) to `requires`; 0 seams, no new warning | 1 spec edit |

I authored nothing and edited no batch file, no `plan-spec.json` entry and no
published item. I will re-check every fix before step 4 splices anything.
