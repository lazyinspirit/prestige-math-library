# frontier-13 — Alpha **group B**, step 3: scaffold breadth and depth review

**Alpha:** Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`, 1,000,000-token window.
**Scope:** batches **3** and **7** only — three A/B pairs, six pages. Batches 1,
2, 4, 5 and 6 belong to groups A and C and were not opened.
**Date:** 2026-08-15. **Authored nothing; edited no batch file, no spec, no item.**

Priority order applied, per the owner's instruction for this run:
**(1) mathematical accuracy, citational accuracy, richness; (2) minimise forward
references and nonfatal defects.**

---

## Verdicts

| pair | A page | items A/B | verdict |
|---|---|---|---|
| 3-A | `diagonalisation-and-the-minimal-polynomial` (88) | 23 / 12 | **insufficient** |
| 3-B | `inner-product-spaces-and-orthogonality` (94) | 33 / 16 | **insufficient** |
| 7 | `linear-recurrences-and-rational-generating-functions` (195) | 32 / 14 | **insufficient** |

**No pair needs a split**, and I rule on that explicitly below.

All three scaffolds are strong: the proof decompositions are honest, the B pages
are real, the conventions are recorded rather than silently chosen, and in three
places the Betas improved on their sources. The verdicts are driven by **eleven
specific, individually cheap items** — nine additions or restatements and two
source substitutions. None is a rewrite; every one costs a scaffold edit now and
a proof rewrite after step 5.

The single largest finding is not mathematical: **batch 3's UCL source URL is
dead**, and 47 of that batch's 114 source rows — 12 new items with no other
backing — rest on it.

---

## Named challenges — each addressed by name

### Batch 3

**1. Cayley–Hamilton: route and record. — PASS, verified from disk.**
Beta did not re-mint CH; it cites the published `thm-cayley-hamilton` and records
the decision (notes §"Proof architecture", first bullet). I opened
`items/thm-cayley-hamilton.md`. Its proof is the correct adjugate route over
$F[x]$: write $\operatorname{adj}(xI-A)=\sum_{j<n}B_jx^j$, compare coefficients
in the adjugate identity, left-multiply the $k$-th equation by $A^k$ and
telescope. Its step 5.1 says in terms: *"without treating substitution into a
matrix-coefficient polynomial as a ring homomorphism"* — the bogus proof is
explicitly excluded. The notes' description of that proof is accurate.
Citing rather than re-minting is also the correct disposition under the
id-reuse rule.

**2. The minimal polynomial's existence must *use* the PID prerequisite. — PASS.**
`def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism` deliberately
defines the annihilator *set* and does **not** assert a generator exists; the
following `thm-minimal-polynomial-is-well-defined-and-controls-annihilators`
discharges it, and its `deps` carry `cor-polynomial-ring-over-a-field-is-a-pid`
(published, homed on `euclidean-domains-pids-and-unique-factorisation`, in
closure). Nonzeroness comes from CH, principality from the PID theorem,
uniqueness from monic normalisation, with $\mu_T=1$ on the zero space. The
obligation is discharged against a cited item, not asserted.

**3. Order 94's inner product must be the standard one. — PASS.**
I opened `items/def-sesquilinear-and-hermitian-forms-over-a-field-with-involution.md`:
sesquilinear = linear in the first variable and $\sigma$-linear in the second;
Hermitian = $H(u,v)=\sigma(H(v,u))$; and it records that $\sigma=\mathrm{id}$
degenerates to symmetric bilinear. `def-inner-product-space` builds on it with
positive definiteness. That is the standard conjugate-symmetric positive-definite
inner product — no variant — so the class-function inner product a future
representation-theory page pins to it will land correctly.

**4. The linear-in-which-argument convention must be *recorded as a disagreement*. — PASS.**
Notes §"Convention decisions and disagreements", first bullet: the page is linear
in the first argument, matching the inherited published definition; Axler and the
chosen sources read that way; Harvard Math 55a is cited by URL as explicitly
using the opposite semilinear-first convention. The consequences are then tracked
item by item (Riesz written $f(v)=\langle v,w\rangle$, $(\lambda T)^*=\bar\lambda T^*$,
conjugate-transpose adjoint). Recorded, not silently resolved.

I checked the one place the convention actually bites mathematically:
`thm-gram-determinant-detects-linear-independence` records $G=R^{\mathsf T}\overline R$,
**not** $R^*R$. With $v_i=\sum_k R_{ki}e_k$ and linearity in the first argument,
$\langle v_i,v_j\rangle=\sum_k R_{ki}\overline{R_{kj}}=(R^{\mathsf T}\overline R)_{ij}$.
Correct, and the opposite convention would have made it wrong.

**5. Order 94 must not reach into analysis. — PASS.**
No item mentions completeness, Hilbert spaces or infinite orthonormal expansions.
Both integral inner-product examples (Kim 5.1.134, Treil 5.1.2) are `out-of-scope`
with the reason naming integration, and the B page substitutes
`ex-sampled-polynomial-inner-product-on-degree-at-most-three`, whose definiteness
uses only the published polynomial root bound — a genuinely good substitution.
`thm-nth-roots-exist` comes from `roots-and-rational-powers`, a *declared
prerequisite* below the page, not an analysis page above it. The notes also
record that the later generic normed-space definition is deliberately not cited
forward.

**6. Neither pair may cite the other; the spectral theorem is where it bites. — PASS, checked mechanically.**
I walked every `deps` edge in `frontier-13-batch-3.pages.json`. The **only**
cross-page edges inside the batch are B→its own A page (19 on the 88/89 pair, 32
on the 94/95 pair). No order-88 item cites an order-94 item or vice versa, and no
item depends on anything homed on a B page. The spectral theorem is not
anticipated on either page: it is a `deferred` canonical row naming
`the-spectral-theorem-and-singular-value-decomposition`.

I checked that decline reason for accuracy, since it is a claim: it says the
licensing page's *"prerequisites include both owned pairs"*. From
`plan-spec.json`, that page is order 141 and requires
`the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`
(order 94, directly) and `triangularisation-and-jordan-canonical-form` (order 90,
which requires order 88). So both owned pairs are prerequisites, one directly and
one transitively. **The row is accurate and names its licensing page.**

Conrad Thm 4.17 (triangularisability) is likewise `out-of-scope` naming
`triangularisation-and-jordan-canonical-form`; I confirmed that page exists at
order 90. Accurate.

**7. D3.1 must have bought something, and the scalar-extension step must be real. — PASS, and the trap was avoided rather than survived.**

*The room was used.* I walked every `deps` edge on the 88/89 pair against
`plan-spec.json` item homes. Three edges reach
`field-extensions-and-the-complex-numbers`, and two of them are exactly the
results D3.1 was bought for:
`thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
cites both `thm-irreducible-quotient-adjoins-a-root` and
`thm-evaluation-kernel-and-minimal-polynomial`; and
`thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields` cites
`def-field-extension-generated-subfields-and-simple-extension`. The amendment is
load-bearing, not decorative. (The B page additionally reaches it for
$\mathbb C$ and `lem-x-squared-plus-one-is-irreducible-over-the-reals`.)

*The invariance trap is not stepped in — because it is not needed.* Beta's step-2
checkpoint (notes line 8) planned to *"prove invariance of the minimal polynomial
under scalar extension before reducing irreducible factors to eigenvalues"*. The
final scaffold has **no invariance item, and does not need one**, which is the
better design. Tracing the two proofs:

- `thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields`,
  forward: if $A_Kv=\lambda v$ with $v\ne0$ over $K/F$, then
  $\mu_T(A)v=\mu_T(\lambda)v$, and $\mu_T(A)$ is the *same* zero matrix merely
  viewed in $M_n(K)$, so $\mu_T(\lambda)=0$. Reverse: $\mu_T(\lambda)=0$ with
  $\mu_T\mid\chi_T$ gives $\chi_T(\lambda)=0$, and the root–spectrum theorem
  applied over $K$ produces the eigenvector. Neither direction asserts
  $\mu_{A,K}=\mu_{A,F}$.
- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`:
  for irreducible $q\mid\chi_T$, take $K=F[x]/(q)$ with its root $a$; then
  $\chi_T(a)=0$, so $a$ is an eigenvalue over $K$, so $\mu_T(a)=0$ by the
  previous theorem, and the evaluation-kernel theorem forces $q\mid\mu_T$. Again
  no invariance.

This matches Conrad's own route (Thm 4.7 is stated for an eigenvalue "in some
extension field $E$"; Cor 4.10 argues through a root of $\pi$ in a larger field),
which I read at PDF pp. 6.

*One residual 30-second seam, for step 5 to state rather than assume:* both
proofs silently use that $\chi_A$ computed over $F$, regarded in $K[x]$, is
$\chi_{A_K}$. It is the same Leibniz formula in a larger ring — a routine step,
nonfatal — but it should appear as a named step rather than as an unremarked
change of ambient field, because it is the place where a reader would expect
invariance machinery and find none.

### Batch 7

**8. The cofactor/adjugate machinery: decide once, record it, and open the determinants page. — PASS.**
Notes §"Design corrections", Finding 1 records the decision in full and states
*"I opened that page and confirmed it contains determinant definitions and laws
but none of that machinery"* — the dispatch's specific requirement. The scaffold
then reuses the four published ids rather than minting duplicates. I verified the
reuse is not merely present but **sound at the right generality**, which is the
part that could have failed silently:

- `cor-inverse-matrix-by-adjugate` is stated *"If $R$ is a commutative ring,
  $n\ge1$, $A\in M_n(R)$, and $\det(A)$ is a unit"* — so applying it over
  $R\llbracket x\rrbracket$ is licensed, not a stretch of a field-only statement.
- `def-determinant-of-a-square-matrix` is Leibniz over a commutative ring with
  domain $n\ge1$; the notes' convention bullet holds `det(I-xA)` to positive size
  accordingly.
- `def-formal-power-series-and-coefficient-extraction` and
  `thm-formal-power-series-unit-criterion` are both stated over an arbitrary
  commutative ring (the unit criterion is "constant coefficient is a unit *in
  $R$*", including the zero ring). So `lem-formal-matrix-geometric-series`'s
  *"over every commutative coefficient ring"* is licensed.

The 0-indexed cofactor convention and the resulting $(v,u)$/$(-1)^{u+v}$ reading
are recorded and match `def-matrix-minors-cofactors-and-adjugate`.

*Faithful restatement, in the form that is checkable before authoring.* No proof
prose exists yet, so the testable artifact is the proof contract's quoted source
clauses. I re-extracted **every** published-citation quote in both batches and
matched each against its item file on disk after whitespace normalisation:
**134 quotes, 134 exact matches, 0 mismatches, 0 missing item files** (91 in
batch 3, 43 in batch 7) — including all four adjugate-chain quotes. Whether the
step-5 prose stays faithful is a step-6 question; the scaffold-time obligation
map is clean.

**9. The central equivalence must be the dimension count, not partial fractions. — PASS, and well done.**
`lem-four-spaces-for-a-fixed-linear-recurrence` owns the dimension count;
`thm-linear-recurrence-iff-rational-generating-function` adds the finite-prefix
clause; partial fractions begin only at
`lem-partial-fractions-for-a-split-recurrence-denominator` and the closed form is
a separate theorem. They are not collapsed.

I verified the refactoring against Stanley EC1 p. 536. Stanley's $V_1,\dots,V_4$
are: fixed-denominator rational, recurrence sequences, polynomial-exponential
closed forms, partial-fraction span — and his $V_1=V_2$ step really is the
two-line dimension count. Batch 7 keeps $V_1,V_2$ and replaces $V_3,V_4$ with the
numerator and initial-value coordinate spaces, harvesting Stanley's $V_3,V_4$
into the partial-fraction and closed-form items instead. Notes line 236 discloses
this explicitly as a refactoring rather than claiming Stanley named these four
spaces. That is the honest way to do it.

I also checked the lemma is true as restated: for $Q=1+c_1x+\cdots+c_dx^d$ and
$F=\sum a_nx^n$, $[x^m](QF)=\sum_{k\le\min(d,m)}c_ka_{m-k}$, which vanishes for
every $m\ge d$ exactly when the recurrence holds from index 0, so $QF$ is a
polynomial of degree $<d$; and $P\mapsto PQ^{-1}$ is an isomorphism because $Q$
is a unit. All four maps are inverse pairs. Sound.

**10. The three CB-5 traps. — two PASS, one PASS with a gap (see F7.2).**
- *Splitting field named in the Statement:*
  `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field` names $E/K$ and
  adds characteristic zero. The char-0 hypothesis is a genuine improvement on both
  sources (Stanley and Sagan both work over $\mathbb C$) and is placed correctly —
  on the closed-form theorem, where $\binom{n+j-1}{j-1}$ must be a *polynomial in
  $n$*, and **not** on `lem-binomial-series-for-a-repeated-pole`, where the
  coefficient identity holds over any commutative ring.
- *Reciprocal-root convention:* `rem-reciprocal-root-convention-for-recurrences`
  fixes $\chi(t)=\prod(t-\lambda_i)^{m_i}\leftrightarrow Q(x)=\prod(1-\lambda_ix)^{m_i}$
  and is cited by the partial-fraction lemma, the closed-form theorem and three B
  items. Sources' differing verbalisations recorded. I confirmed against Sagan
  Thm 3.7.1(c) (eq. 3.21) and Stanley 4.1.1(iii): same convention.
- *Cofactor form primary, eigenvalue form hypothesis-bearing:*
  `thm-transfer-matrix-cofactor-formula` is the landmark;
  `cor-eigenvalue-form-of-the-transfer-matrix-trace` carries "over an
  algebraically closed field" in its title. But its *proof plan* has a hypothesis
  gap — F7.2 below.

**11. Batch 7 split. — RULED: no split.**
32 A items against the 60 ceiling. My recommended additions below take it to 34,
still 26 clear. The two halves are genuinely joined: `cor-cayley-hamilton-recurrences-for-matrix-powers`,
`thm-hadamard-product-of-rational-series-is-rational` and the finite-state word
counting all cross the seam. Beta's pre-recorded cut line (after item 18) is
sound if it is ever needed; it is not needed. **No spec edit.**
Batch 3 likewise: 23 and 33 items, ~26 and ~35 after my additions. **No split.**

**12. Stanley's Cor 4.7.4 decline. — the row is NOT accurate. See F7.5.**

---

## Findings — batch 3

### F3.1 (blocking) — the UCL source URL is dead, and 41% of the batch's harvest rests on it

`https://www.homepages.ucl.ac.uk/~ucahmki/2201notes.pdf` (Minhyong Kim, *Math
2201 Lecture Notes*) is one of only **two** enumerated coverage sources for
**each** of batch 3's two pairs. What I found:

| probe | result |
|---|---|
| `GET` with browser UA, `Accept: application/pdf`, Google referer, following redirects | **HTTP 404** |
| same over plain HTTP, and via `www.ucl.ac.uk/~ucahmki/` | **404** |
| the parent directory `~ucahmki/` itself | **404** |
| the sibling `~ucahmki/ant/3704notes.pdf` named in the search index | **404** |
| Wayback CDX for `homepages.ucl.ac.uk/~ucahmki/2201notes.pdf`, any status | **no snapshot, ever** |
| Wayback CDX for `~ucahmki*` | 4 archived URLs, last 2026-02-11; `2201notes.pdf` not among them |
| the archived 2026-02-11 `~ucahmki/` index page | a **research** page — 50 links, all anabelian-geometry papers and seminar slides. No teaching section, no linear algebra, no link to `2201notes.pdf` |

**I could not verify a single Kim locator, and neither will a reader or a later
auditor.** I am not asserting the notes never existed: a web-search index still
carries an entry titled "Math 2201 Lecture Notes" at that exact URL with a
section list matching what the harvest cites, Kim did host UCL course notes under
that directory (the 3704 notes are separately mirrored elsewhere), and an
independent UCL MATH2201 note set credits Kim as an author. Kim left UCL long
ago; the likeliest reading is that the file was removed before the Wayback
Machine ever crawled it. But the Beta's precise citations (Definition 3.3.66
through Example 3.4.85; Definition 5.1.128 through result 5.3.149) cannot be
checked against anything.

**Blast radius, computed from `coverage.json`:** 47 of the batch's 114 source
rows are Kim rows (22 on page 88, 25 on page 94). **Fifteen items have Kim as
their only source backing**; three of those are `already-published` rows, leaving
**twelve new items** with no verifiable source:

`def-diagonalisable-endomorphism`, `def-primary-component-and-generalised-eigenspace`,
`cor-minimal-polynomial-divides-characteristic-polynomial`,
`lem-coprime-kernel-decomposition`, `thm-primary-decomposition-for-an-endomorphism`,
`cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`,
`def-inner-product-norm`, `ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms`,
`ex-nilpotent-shift-and-its-single-primary-component`,
`ex-primary-decomposition-over-q-with-an-irreducible-quadratic`,
`ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension`,
`fs-a-split-minimal-polynomial-always-gives-diagonalisability`.

Primary decomposition and the coprime-kernel lemma are the spine of page 88.

Two independent rules bite. Under the **source-depth rule** each pair needs two
independent treatments, *at least one a textbook, monograph or full lecture-note
set*: remove Kim and page 88 is left with Conrad's 11-page blurb alone, which is
none of those. Under the **provenance rule** every `literature-derived` /
`ai-altered` item needs a reader-visible `sources.references` URL — and
`level-coverage.mjs` checks that a URL is *present*, not that it *resolves*, so
84 items would ship a dead link past a green gate.

**Fix — two live substitutions, both cheap because the Beta has already read one of them:**

- **Page 88 → Sergei Treil, *Linear Algebra Done Wrong*, Chapter 4** (live; the
  same textbook whose Chapter 5 already backs page 94, so it costs no new
  reading protocol). I fetched the chapter: §4.1.1–4.1.7 and §4.2.1–4.2.6, with
  Prop 4.1.1, Thm 4.1.2, Thm 4.2.1, Cor 4.2.3, **Thm 4.2.8**, Thm 4.2.9. It
  covers every Kim row on page 88 — minimal polynomial context, diagonalisability,
  distinct eigenvalues, real vs complex — and it carries the result F3.2 says is
  missing. Textbook, so the source-depth rule is satisfied.
- **Page 94 → Sheldon Axler, *Linear Algebra Done Right*, 4th ed.**,
  `https://linear.axler.net/LADR4e.pdf` (verified live: HTTP 200, 2.8 MB). The
  Beta **already read** §§6A–6C and 7A/7D and used them as a supplementary check
  (notes line 53), deliberately keeping them out of the gated yield. Promoting
  Axler to an enumerated source costs only the heading enumeration over ranges
  already read.

Either way the Kim rows must be re-harvested against the replacement, and no
Kim URL may reach `sources.references` on any item.

### F3.2 (blocking, page 88) — the multiplicity criterion for diagonalisability is absent from the scaffold *and* from every source's contents

The single most-taught criterion in this chapter is missing:

> $T$ is diagonalisable **iff** $\chi_T$ splits and, for every eigenvalue
> $\lambda$, $\dim E_\lambda(T)$ equals the algebraic multiplicity of $\lambda$
> — equivalently $\sum_\lambda\dim E_\lambda=\dim V$.

The scaffold has `thm-diagonalisability-eigenspace-direct-sum-criterion`
($V=\bigoplus E_{\lambda_i}$) and the squarefree-minimal-polynomial criterion, but
nothing in multiplicity terms. This is criterion 4 of the faithfulness check: it
appears in **no** source's `contents` at all — neither Conrad §§4–5 nor the Kim
range covers multiplicities — which is the signal that the sources were too thin
rather than that the Beta missed a row.

It is cheap and needs no spec change. Both ingredients are **published and
already in order 88's closure**, on
`eigenvalues-eigenvectors-and-the-characteristic-polynomial`:
`def-algebraic-and-geometric-multiplicity-of-an-eigenvalue` and
`thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity`. From
$V=\bigoplus_\lambda E_\lambda$ the proof is
$\dim V=\sum\dim E_\lambda\le\sum m_\lambda\le\deg\chi_T=\dim V$, forcing equality
throughout and forcing $\chi_T$ to split.

**Add:** one theorem, e.g.
`thm-diagonalisable-iff-geometric-and-algebraic-multiplicities-agree`, plus
optionally a B-page example where they differ.
**Source that carries it:** Treil LADW **Theorem 4.2.8**, the chapter's own "Main
Diagonalizability Criterion" — *"A is diagonalizable if and only if for each
eigenvalue λ the dimension of the eigenspace coincides with the algebraic
multiplicity of λ"* — with §4.1.5 defining both multiplicities and Prop 4.1.1
giving the inequality. Adopting the Treil substitution in F3.1 brings this row in
automatically.

### F3.3 (page 88) — Conrad Corollary 5.5 lies inside the declared range with no disposition, and it is a free corollary of a theorem already scaffolded

The Conrad locator reads *"Sections 4–5, PDF pp. 4–10, from '4. The Minimal
Polynomial' through Corollary 5.4, stopping before '6. Nilpotent Operators'"*.
Those two clauses disagree: **Corollary 5.5 sits on p. 10, after Cor 5.4 and
before §6**, and it has no row.

I read it (PDF p. 10): *"Let $A$ and $B$ be linear operators $V\to V$ that are
diagonalizable and commute. Then every operator in the ring $F[A,B]$ is
diagonalizable. In particular, $A+B$ and $AB$ are diagonalizable."* Its proof is
two lines from the common eigenbasis, i.e. directly from the already-scaffolded
`thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`. The
paragraph immediately after it supplies a ready-made counterexample:
$\mathrm{diag}(1,2)$ and $\begin{psmallmatrix}0&1\\0&-1\end{psmallmatrix}$ are
diagonalisable but their sum $\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$ is
not.

This is exactly the "useful, cheaply proved corollary" the scaffold-richness rule
asks for, and the counterexample is exactly what a B page is for.

**Add:** a corollary on the A page and a `cex-` on the B page.
**Source:** Conrad, PDF p. 10, already in the ledger — only the locator's second
clause needs tightening so the range and the enumeration agree.

### F3.4 (page 88) — a harvest row claims an iff that the item delivers as one direction

The Conrad row reads *"Theorem 5.2, a finite family of diagonalizable operators
is simultaneously diagonalizable **if and only if** it commutes"*, disposed
`included` to `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`
— whose title states only *"Every pairwise commuting family of diagonalisable
endomorphisms of a finite-dimensional space is simultaneously diagonalisable"*.
The converse is not in the scaffold anywhere. Conrad's Thm 5.2 really is an iff
(verified, PDF p. 9).

The converse is one line — operators diagonal in a common basis commute because
diagonal matrices commute — and it is the half a reader uses to *rule out*
simultaneous diagonalisability. **Add it to the same item** (making the title an
iff) rather than minting a second id.

*Separately, and to Beta's credit:* the arbitrary-family reduction is a genuine
improvement on Conrad. Conrad Cor 5.4 says only that the span $U$ "is spanned by
a finite number of $A_i$'s"; the scaffold expands a finite basis of the span in
the original family and unions the finite supports. That is the careful version,
and `cor-dimensions-of-matrix-and-linear-map-spaces` is correctly in `deps`.

### F3.5 (blocking, page 94) — least squares and the normal equation appear in no source's contents, and the machinery for them is already on the page

Treil's Chapter 5, the pair's primary textbook backing, contains **§5.4 "Least
square solution. Formula for the orthogonal projection"** (§5.4.1 geometric
approach and the normal equation; §5.4.2 the projection matrix formula). The
batch-3 locator explicitly excludes §5.4, and the least-squares problem then
appears in no source's `contents` at all.

That is a range choice the Beta was entitled to make, but it drops a standard
part of a finite-dimensional inner-product development, and it is *cheap here*
because both ingredients are already scaffolded:
`thm-orthogonal-projection-is-the-unique-nearest-point` and
`thm-adjoint-kernel-and-range-orthogonality` ($\ker T^*=(\operatorname{im}T)^\perp$).
The characterisation "$x$ minimises $\lVert Ax-b\rVert$ iff $A^*Ax=A^*b$" is four
lines from those two.

**Add:** one theorem, e.g. `thm-least-squares-solutions-are-the-normal-equations`,
and optionally a worked B-page example.
**Source:** Treil LADW **§5.4.1**, one section inside the chapter already
harvested; Axler LADR4e covers the same material if Axler is adopted per F3.1.

### F3.6 (nonfatal, page 88) — "splits" is used as a technical term the page cannot cite

`cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial` and the
surrounding prose use "splits". The published
`def-polynomials-that-split-and-splitting-fields` is homed on `splitting-fields`
(order 56), which is **not** in order 88's closure — I computed it. Two clean
options, in my order of preference:

1. Phrase every statement as "is a product of linear factors" and drop the
   technical term. Zero cost.
   (`thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots`
   already does exactly this in its title — only the corollary and prose drift.)
2. Recommend adding `splitting-fields` to order 88's `requires`. I simulated it:
   published, order 56 < 88, one page added to the closure (37 → 38), and **zero
   cross-pair seams** against all eleven in-run pairs.

Do **not** mint a local `def-` for "splits": that would duplicate a published
concept, which is what D5.3 and D7.1 were decided against.

### F3.7 (nonfatal, both pages) — the B-page summary paragraph must not reach a page

The notes' §"Reader-facing page summaries" contains, after page 94's two
paragraphs, a third 37-word paragraph beginning *"The B pages supply concrete
computations and misconception checks…"*. Under the page-summary contract **a B
page has no authored summary body at all**, and an A-page summary is *exactly*
two paragraphs. Whichever page it were spliced onto would violate the contract.
Flagging now so it is dropped at step 5 rather than caught at step 6.

The four A-page summary paragraphs themselves are fine: 79/67 words for page 88
and 70/54 for page 94, both two paragraphs, all well under 150 words.

---

## Findings — batch 7

### F7.1 (blocking) — `cor-cayley-hamilton-recurrences-for-matrix-powers` drops two hypotheses its own source carries

Title as scaffolded: *"Cayley–Hamilton makes **every** matrix-power entry and
trace sequence linearly recurrent."* No scalar domain, no invertibility. Both are
required, and Waldschmidt states both.

**(a) The field.** The proof contract's input map for step 1.1 cites
`thm-cayley-hamilton`, whose Statement is *"For every endomorphism $T$ of a
finite-dimensional **vector space**"* — a field — alongside
`def-coordinate-endomorphism-over-a-commutative-ring`, which is $T_A:R^n\to R^n$
for a commutative ring $R$. The two are compatible only when $R$ is a field
(then $R^n=M_{n\times1}(F)$ is a finite-dimensional vector space and CH applies);
for general $R$, the library has not proved CH and the cited fact does not
license the step. The item also cites the field-only `def-trace-of-a-square-matrix`
and `def-characteristic-polynomial-of-a-matrix` ($\chi_A\in F[x]$), which
indicates a field *was* intended — but the page's ambient setting is a commutative
ring throughout (`def-matrices-over-a-commutative-ring`, weights in a commutative
ring, and the page's own newly minted ring trace), so a reader will read the
unqualified title at the ambient generality.

**(b) Invertibility.** I read the source. Waldschmidt, slide 18 (PDF p. 5):
*"Let $A=(a_{ij})\in GL_{d\times d}(K)$ be a $d\times d$ matrix with coefficients
in $K$ **and nonzero determinant**. … Then each of the $d^2$ sequences
$(a^{(n)}_{ij})_{n\ge0}$ is a linear recurrence sequence."* The hypothesis is not
decoration. This page's own
`def-linear-recurrence-and-recurrence-characteristic-polynomial` requires
$c_d\ne0$ (notes §"Convention decisions", first bullet), and for $\chi_A$ the
trailing coefficient is $(-1)^n\det A$. For singular $A$ the relation from CH is
therefore **not** a linear recurrence of order $n$ in this page's own sense: a
nilpotent $A$ gives $\chi_A=x^n$ with every $c_k$ after the leading one zero.

Note the proof contract's `boundaries` block does not catch this. Its
`degenerate` entry is the template sentence *"Planned step 2.1 records
cancellation, repeated-root, zero numerator, reducible presentation, collapsed
state, or zero-ring behavior as applicable"* — unanchored to $\det A=0$.

**Fix (Statement edit, no new machinery):** state it as *"Let $F$ be a field,
$n\ge1$, $A\in M_n(F)$ invertible"*, or — better, and free — state the conclusion
as **eventual** linear recurrence for arbitrary $A\in M_n(F)$, since the page
already owns eventual recurrences via
`thm-linear-recurrence-iff-rational-generating-function` and
`prop-finite-modification-preserves-rationality-and-eventual-recurrence`. Write
$\chi_A(x)=x^r g(x)$ with $g(0)\ne0$; the entry and trace sequences satisfy the
order-$\deg g$ recurrence from index $r$ on. Anchor the `degenerate` boundary to
$\det A=0$ either way.

This is the fatal class — a title asserting more than the proof gives — caught
where it costs a Statement edit.

### F7.2 (blocking) — `cor-eigenvalue-form-of-the-transfer-matrix-trace` cites "has a root" where its consumers require "splits"

The contract's step 1.1 takes `def-algebraically-closed-field` as an input,
quoting *"every nonconstant polynomial $p\in F[x]$ has a root in $F$"*, and in
the same step applies `thm-spectral-mapping-for-polynomials` and
`thm-trace-is-sum-of-eigenvalues`.

I opened both consumers. Each takes the **split factorisation as an explicit
hypothesis of its Statement**: *"Let $T$ act on an $n$-dimensional $F$-vector
space and suppose $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$."* Having one root is not
having that factorisation. The bridge is an induction on degree via the factor
theorem, and **no published item states it** — I grepped the corpus: the only two
items mentioning algebraic closure are `def-algebraically-closed-field` and
`cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`,
and neither says polynomials split.

**Fix, free and reusable:** add a local lemma
`lem-monic-polynomials-split-over-an-algebraically-closed-field`, induction on
degree from `def-algebraically-closed-field` and
`cor-factor-theorem-over-a-commutative-ring` — which I confirmed is published,
homed on `polynomial-rings-and-roots`, and **in order 195's closure**. Then cite
it as the hypothesis-discharging step. Failing that, record it as a numbered
inline derivation with the factor-theorem citation; do not leave it implicit.

*Worth recording as a positive:* my first reading suspected a worse defect — that
spectral mapping gives only a set equality and cannot carry multiplicities
through $A\mapsto A^n$, which would have needed triangularisation (unbuilt,
order 90). The published `thm-spectral-mapping-for-polynomials` is in fact
stated as $\chi_{p(T)}(y)=\prod_{i<n}(y-p(\lambda_i))$, **with algebraic
multiplicity**. Beta's route is therefore correct. Only the split hypothesis is
undischarged.

### F7.3 (blocking) — `prop-reciprocity-for-biinfinite-linear-recurrences` states its conclusion in a field the page cannot reach

The item's conclusion is $F_+(x)=-F_-(1/x)$ **in $K(x)$**, and $K(x)$ is not
available: `cor-rational-function-field-as-a-fraction-field` and
`def-field-of-fractions` are homed on `the-field-of-fractions-and-localisation`,
which I confirmed is **not in order 195's closure**. The item's `deps` list is a
single entry (`thm-linear-recurrence-iff-rational-generating-function`) and its
proof contract has **zero** published citations and one obligation — the thinnest
in the batch, and thin because the machinery genuinely is not there.

This is not a formality. I read Stanley Prop 4.2.3 (p. 541), which appends an
explicit *Note*: *"It is important to realize that Proposition 4.2.3 is a
statement about the equality of **rational functions, not power series**"*, with a
worked instance ($f\equiv1$ gives $F=1/(1-x)$ and $\bar F=x/(1-x)$, equal only in
$K(x)$). Stanley's proof further works in the doubly infinite space
$L=\{\sum_{n\in\mathbb Z}a_nx^n\}$, which he notes is *not* a ring — so the
published finite-tail `def-formal-laurent-series-and-residue` on
`formal-power-series` does not supply it either.

**Fix, in preference order:**
1. **Recommend adding `the-field-of-fractions-and-localisation` to order 195's
   `requires`.** I simulated the edit: published, order **53.2** « 195, closure
   grows 42 → 43 by exactly that one page, and **zero cross-pair seams** against
   all eleven in-run pairs. The item then builds Stanley's $L$ locally as a
   $K$-vector space with polynomial multiplication — a small local definition —
   and states the conclusion in $K(x)$ properly.
2. If the orchestrator declines the edge, restate the conclusion as the
   **polynomial identity between the two numerators** after clearing denominators
   (which is what Stanley's Cor 4.2.4 extracts anyway), and drop the $K(x)$
   phrasing entirely.

Dropping the item is the worst option — it is a real Stanley result and the
degree-gap/endpoint-symmetry clause of Cor 4.2.4 is already folded into it.

### F7.4 — `lem-binomial-series-for-a-repeated-pole` cites nothing for its binomial machinery

The Statement contains $\binom{n+j-1}{j-1}$ and the strategy applies the
hockey-stick identity to a Cauchy convolution, but `deps` are only
`thm-formal-power-series-unit-criterion` and
`prop-coefficient-extraction-linearity-and-extensionality`. Neither
`def-binomial-coefficient` nor any binomial identity is declared.

Both are published and **in order 195's closure**, homed on
`finite-counting-and-binomial-coefficients`: `def-binomial-coefficient` and
`thm-pascals-rule` (hockey-stick follows from Pascal by a short induction; the
adjacent `cor-binomial-theorem-consequences` is also in closure). **Add both to
`deps`** and name the identity in the derivation.

I verified the lemma's statement itself against Stanley p. 536:
$\frac{1}{(1-\gamma x)^j}=\sum_{n\ge0}x^n\gamma^n\binom{j+n-1}{j-1}$ — exact match.

### F7.5 — the Stanley Cor 4.7.4 decline reason contains a false claim about reading order

The row reads: declined because the *"inner-product and orthogonal-diagonalisation
machinery is **homed after order 195** and is not in this page's declared
closure."*

The first clause is false. From `plan-spec.json`:
`inner-product-spaces-and-orthogonality` is order **94** and
`the-spectral-theorem-and-singular-value-decomposition` is order **141** — both
*below* 195. The true and sufficient reason is the second clause alone: neither
page is in this pair's declared `requires` closure, and neither is published
today (the spectral-theorem page additionally needs
`the-fundamental-theorem-of-algebra` and
`triangularisation-and-jordan-canonical-form`, neither built; the inner-product
page is in flight as batch 3 of this very run).

The **decline itself stands** — I read Cor 4.7.4 (Stanley p. 576) and it does use
a real orthogonal $U$ with $U^{-1}AU=\mathrm{diag}(\lambda_1,\dots,\lambda_p)$,
so the spectral theorem is genuinely required, and the scaffold's general
algebraically-closed trace form is the right substitute. Only the reason text is
wrong. The disposition label should also be `deferred` rather than `out-of-scope`:
this is the page's own topic blocked on unbuilt prerequisites, not another page's
subject matter.

Correct the reason to name orders 94 and 141 and the true obstruction.

### F7.6 — Stanley Example 4.7.5 sits inside the declared range with no disposition, and the eigenvalue trace form has no example at all

The Stanley locator reads *"Section 4.7.1 through Corollary 4.7.4, then Examples
4.7.6-4.7.7 and Proposition 4.7.8, printed pp. 573-578"*. The page range covers
**Example 4.7.5 (p. 576)**, which the enumeration skips and which has no row.
(The same self-contradiction recurs at *"Example 4.7.16, printed pp. 583-585"*:
pp. 583–584 also carry Prop 4.7.13 and Lemma 4.7.14. Those fall under the
free-monoid decline, which is separately reasoned, so only the locator wording
needs tightening there.)

Example 4.7.5 is worth having. I read it: closed walks of length $n$ in the
complete graph $K_p$, giving $f_p(n)=(p-1)^n+(p-1)(-1)^n$, from the eigenvalues
$p-1$ and $-1$ of $A(K_p)$. It needs no spectral theorem — $\chi_{A(K_p)}$ splits
over $\mathbb Q$ — so it is fully inside this pair's closure.

And it fills a real hole: I walked every B-page `deps` edge, and
**`cor-eigenvalue-form-of-the-transfer-matrix-trace` is cited by no B item at
all.** The page's only trace example, `ex-lucas-cyclic-tilings-and-the-trace-method`,
goes through `cor-closed-walk-trace-generating-functions` instead. A landmark
corollary with no worked instance is exactly the thin spot a B page exists to
cover.

**Add:** `ex-closed-walks-in-the-complete-graph` to the B page, and a disposition
row for 4.7.5. **Source:** Stanley, printed p. 576, already in the ledger.

### F7.7 (nonfatal) — the proposed B-page summary must not be authored

Notes §"Proposed page summaries" contains a **two-paragraph summary for
`linear-recurrences-and-rational-generating-functions-examples`** (61 and 70
words). A B page has no authored summary body at all. Drop it at step 5. The A
page's two paragraphs (74 and 75 words) are fine.

### F7.8 (nonfatal) — `def-finite-words-factor-avoidance-and-prefix-states` declares `deps: []`

A definition introducing finite words over an alphabet, contiguous factors and
proper-prefix states with no cited dependency at all. The local-interface
decision is right (the free-group word page is outside closure, and the notes say
so), but the underlying notion of a finite sequence should be cited rather than
assumed. Low priority; worth one line at step 5.

### Batch 7 declines I tested and accept

- **Stanley Ex. 4.7.16 middle (free-monoid factorisation of tuples)** —
  `out-of-scope`, reason names free-monoid factorisation and observes nothing
  downstream consumes it. Correct: §4.7.4 is a separate development and the
  Fibonacci/Lucas ends of the same example *are* included.
- **Waldschmidt EGF/differential-equation heading** — `out-of-scope` to the EGF
  interface. Correct; the pair is expressly about ordinary generating series, and
  the Pell-equation section beyond it is properly outside the range.
- **CB-15** — I re-confirmed no such page id exists. Carrying it as a planning
  note rather than a `requires` target is right.

---

## Source-verification ledger

Every source named in both batches' `coverage.json`, opened at its stated
locator. WebFetch cannot read PDFs, so PDFs were downloaded and parsed with
`pypdf` in a local venv (Sagan's AMS PDF is AES-encrypted and additionally needed
`cryptography`; MSU's server blocks non-browser clients, so it was retrieved from
its Wayback snapshot).

| source | locator claim | verdict |
|---|---|---|
| **Conrad**, *The Minimal Polynomial and Some Applications* | §§4–5, PDF pp. 4–10, Def 4.1 → Cor 5.4, before §6 | **verified**, every numbered result present on the stated pages — except that **Cor 5.5 falls inside the range with no row** (F3.3) |
| **Kim**, *Math 2201 Lecture Notes* | §§3.3–3.4 pp. 25–29; §§5.1–5.3 pp. 49–55 | **UNVERIFIABLE — URL 404, no archive** (F3.1) |
| **Treil**, *Linear Algebra Done Wrong*, Ch. 5 | §§5.1.1–5.1.4, §§5.2–5.3 thru Prop 5.3.6, §§5.5.1–5.5.2 thru Thm 5.5.1; §5.4 excluded | **verified**; range internally consistent and harvest matches it. §5.4 is *Least square solution* (F3.5) |
| **Stanley**, *EC1* 2nd ed. | §§4.1–4.2 pp. 535–542; §4.7.1–Cor 4.7.4, Ex 4.7.6–4.7.7, Prop 4.7.8 pp. 573–578; Ex 4.7.16 pp. 583–585 | **verified** (printed page = PDF page). §§4.1–4.2 complete: all nine results rowed, §4.3 begins p. 543. §4.7 complete **except Ex 4.7.5 inside the range with no row** (F7.6) |
| **Sagan**, *Combinatorics: The Art of Counting* | §3.6 pp. 92–93; §3.7 pp. 96–98 | **verified** (printed = PDF − 17). Eq. (3.15), the $c_d\ne0$ definition, Thm 3.7.1(a)(b)(c) and its proof all present and faithfully rowed |
| **Waldschmidt**, *Linear Recurrence Sequences VI* | PDF pp. 1–6, slides 5–28 | **content verified**; slide 18 carries the $GL_d(K)$ hypothesis (F7.1). Minor: slides 25–28 are on PDF p. 7, so "pp. 1–6, slides 5–28" is off by a page |
| **Gallier–Quaintance** | §6.4, Def 6.9 and Prop 6.11 | **verified**: PDF p. 201 is §6.4 with the minor/cofactor/adjugate definition and Prop 6.11 over a commutative ring, exactly as the four `already-published` rows describe |
| **Wilf**, *generatingfunctionology* §1.3 | convention check only | not independently re-read; it carries no gated row |
| **Axler**, LADR4e | supplementary, ungated | URL verified live (HTTP 200); proposed as the page-94 replacement in F3.1 |

Published dependencies I opened item-by-item rather than trusting the notes'
table: `thm-cayley-hamilton`, `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`,
`cor-polynomial-ring-over-a-field-is-a-pid`, `def-trace-of-a-square-matrix`,
`thm-spectral-mapping-for-polynomials`, `thm-trace-is-sum-of-eigenvalues`,
`cor-inverse-matrix-by-adjugate`, `def-coordinate-endomorphism-over-a-commutative-ring`,
`def-formal-power-series-and-coefficient-extraction`,
`thm-formal-power-series-unit-criterion`, `def-determinant-of-a-square-matrix`,
`def-monoid-finite-product`, `def-finite-sum-in-a-commutative-monoid`.

One suspicion I raised and then withdrew: batch 3 cites `def-monoid-finite-product`
for coordinate sums, which looked like it should have been
`def-finite-sum-in-a-commutative-monoid`. It is correct as written —
`def-finite-sum-in-a-commutative-monoid` is for sums over an arbitrary finite
*set* and is itself defined as "the finite monoid product of
`def-monoid-finite-product` written additively", so for sums indexed by $k<n$ the
cited id is the precise one.

---

## For the orchestrator

**Two `requires` recommendations, both simulated for seams (zero in each case):**

| page | add | order | closure | seams | buys |
|---|---|---|---|---|---|
| `linear-recurrences-and-rational-generating-functions` (195) | `the-field-of-fractions-and-localisation` | 53.2, published | 42 → 43 | **0** | $K(x)$, without which F7.3's item cannot be stated |
| `diagonalisation-and-the-minimal-polynomial` (88) | `splitting-fields` | 56, published | 37 → 38 | **0** | the term "splits"; optional — the rewording in F3.6 is free |

**Two source substitutions** (F3.1) — Treil LADW Ch. 4 for page 88, Axler LADR4e
for page 94 — with re-harvest of the 47 Kim rows and removal of the Kim URL from
every item's `sources.references`.

**Nine scaffold edits** routed to the owning Betas: F3.2, F3.3, F3.4, F3.5, F3.6,
F7.1, F7.2, F7.4, F7.6 — plus the bookkeeping items F3.7, F7.5, F7.7, F7.8.

**Bearing on other groups, recorded not acted on:** the locator pattern behind
F3.3 and F7.6 — a stated *page range* wider than the enumerated headings, leaving
numbered results inside the range undisposed — is invisible to
`coverage-checklist.mjs`, which validates only the rows that are listed. If it
recurs in batches 1, 2, 4, 5 or 6, groups A and C will have to catch it the same
way: by opening the source at the range endpoints. I have not looked at their
batches.

**Nothing here is a blocker for me.** I re-check these fixes before step 4
splices, then run 6a/6b for batches 3 and 7 and hand the namespaced report to the
orchestrator. Step 4 propagation, step 6c and step 8 belong to group A.
