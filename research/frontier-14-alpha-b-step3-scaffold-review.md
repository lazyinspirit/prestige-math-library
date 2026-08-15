# frontier-14 — group Alpha **b**, step-3 scaffold review (batches 4, 5, 6)

Alpha: Claude Opus 5, `xhigh`, 1M window. Read-only on `items/`, `library/`,
`plan-spec.json` and every Beta artifact; nothing outside this file was written.
Working scripts live in `scratchpad/alpha-b/`.

## Verdicts

| pair | verdict |
|---|---|
| `triangularisation-and-jordan-canonical-form` | **sufficient** |
| `quadratic-residues-and-the-legendre-symbol` | **sufficient** |
| `reflective-subcategories-and-the-adjoint-functor-theorems` | **insufficient** — B6-1 |

Findings are numbered `B<batch>-<n>` and are **stable**: never renumber them.
Every finding below is routed to the owning Beta unless marked *orchestrator*.

Split recommendation: **no split on any of the three pairs.** Reasoning in
§"Sizing" at the end.

---

## What I checked mechanically, across all three batches

- **Dependency closure.** `scratchpad/alpha-b/depcheck.py` recomputes each A
  page's transitive `requires` closure from `plan-spec.json` with the same
  semantics `validate-plan.mjs` uses (`reqClosure`, lines 324–332), maps every
  scaffold `dep` to its home page from `library/**/*.md` frontmatter, and
  classifies it. **All three batches: zero out-of-closure deps, zero unresolved
  deps, zero A-depends-on-B edges, every external dep `status: published`.**
  Distinct external deps used: 34 (b4), 32 (b5), 49 (b6).
- **Gates, re-run by me rather than relayed.** `coverage-checklist.mjs`:
  124 / 67 / 64 harvested results, 0 errors, 0 warnings.
  `content-policy.mjs --manifest-only`: 53 / 25 / 52 scoped items, 0 errors.
  `validate-plan.mjs`: OK. These agree with each Beta's reported numbers.
- **Citation liveness.** `research/frontier-14-url-liveness.json` covers all ten
  source URLs in my three batches. Nineteen of twenty-one run-wide URLs are 200;
  the one failure is batch 6's Mac Lane (`pages.jh.edu`, HTTP 403) and it was
  **recovered from the Wayback index, not re-sourced** — the coverage file cites
  the archive URL. I fetched that archive URL myself (6.0 MB, 331 pages, §V.8
  present). Recover-before-replace was applied correctly.
- **Locator faithfulness by text extraction, never by HTTP status.** I built a
  venv with `pypdf` and extracted and read: Hackman §D.I and §D.IV, Gorodnik
  Lecture 9 §1, Mascot Ch. 3, Treil Ch. 9 §§3–5, Riehl §4.5 and §4.7, Mac Lane
  §V.8, and a targeted spot-check of twenty Axler result numbers. Results
  below; what I did **not** extract is listed in §"Not checked".

---

## Batch 4 — `triangularisation-and-jordan-canonical-form` · **sufficient**

36 A items, 17 B items. Design LA-10 / `plan-algebra-track.md` §II.6.

### Existence-versus-uniqueness (the thing this dispatch singled out) — clean

`thm-jordan-form-uniqueness-from-ranks-of-powers` is a **separate, real theorem**
proved from the computable invariants, not a clause bolted onto existence:

- Title carries the qualifier: "…determine the Jordan form uniquely **up to block
  order**". LA-10 trap (iv) — "a Statement saying 'unique' without that clause is
  false" — is satisfied at the title, which is what the paired judges cannot see.
- The invariant is $\rho_k(\lambda)=\operatorname{rank}(T-\lambda I)^k$ on all of
  $V$, with the block counts $d_k-d_{k-1}$ (size $\ge k$) and
  $2d_k-d_{k-1}-d_{k+1}$ (size exactly $k$), equivalently $\rho_{k-1}-\rho_k$ and
  $\rho_{k-1}-2\rho_k+\rho_{k+1}$. **I checked all four formulas; they are
  correct**, including the endpoints $d_0=0$, $\rho_0=\dim V$ and one stabilised
  value past the largest block. Notes §"Mathematical design" item 7's remark that
  blocks at other eigenvalues contribute a rank constant in $k$, which cancels in
  the second difference, is correct: $(T-\lambda I)$ restricted to $G_\mu$,
  $\mu\ne\lambda$, is invertible.
- `fs-jordan-canonical-form-is-a-unique-matrix` on the B page isolates the exact
  false reading. `cor-nilpotent-similarity-classified-by-power-ranks` and
  `thm-similarity-classification-by-jordan-canonical-form` both restrict to split
  characteristic polynomials in their titles.

### The MOD-5 leaf witness — present and arithmetically correct

`fs-equal-characteristic-and-minimal-polynomials-imply-similarity` is homed on the
**B page** (order 91) as MOD-5 requires, with the fixed witness
$A=J_2(\lambda)\oplus J_2(\lambda)$ against
$B=J_2(\lambda)\oplus J_1(\lambda)\oplus J_1(\lambda)$. Checked: both are $4\times4$
with $\chi=(x-\lambda)^4$ and $\mu=(x-\lambda)^2$; $\operatorname{rank}(A-\lambda I)=2$
and $\operatorname{rank}(B-\lambda I)=1$, so they are not similar. This is the
$4\times4$ over one eigenvalue that §II.6.c names, generalised from $\lambda=0$ to
arbitrary $\lambda$. **No A item and no B item depends on it** (confirmed by the
closure script), which is exactly the leaf status MOD-5 assumes when it restates
the witness natively.

### The Beta's correction to §II.6.c's `FS.` witness is right, and the old one was false

Notes amendment 4 replaces the prose witness $J_2\oplus J_1$ versus
$J_1\oplus J_1\oplus J_1$ with $J_3(\lambda)\oplus J_1(\lambda)$ versus
$J_2(\lambda)\oplus J_2(\lambda)$. **Confirmed.** Geometric multiplicity is the
number of blocks: the old pair has two versus three, so it does not hold the
falsified quantity fixed and refutes nothing. The replacement pair has two blocks
each, both $4\times4$, and separates on the second power ($\operatorname{rank}$ 1
versus 0). This is a mathematical correction to the design, not a preference.

### Declines checked against disk

Eight `deferred` rows, no `out-of-scope`. Both licensing page ids exist in
`plan-spec.json`: `the-fundamental-theorem-of-algebra` (order 139) and
`modules-over-a-pid-and-canonical-forms` (order 110).

- **Seven Hoffman–Kunze rows → `modules-over-a-pid-and-canonical-forms`.** These
  are T-admissibility, the Cyclic Decomposition Theorem, its four proof steps,
  and the invariant-complement corollary. The Beta expected me to challenge these.
  I do not: they are the divisibility-ordered invariant-factor decomposition,
  which is MOD-5's subject, and importing them would put two cyclic-decomposition
  theorems in the library. I confirmed on disk that none of them is already
  published (`grep` over `items/` for cyclic decomposition, T-admissible,
  invariant complement, rational canonical form returns only finite-abelian-group
  invariant-factor items and the unrelated Bourbaki–Witt `def-admissible-set`).
  Critically, the page still proves the cyclic-vector criterion **here**, by
  primary components, which §II.6.b requires because GA-3 sits below MOD-5. The
  scaffold does that: `lem-a-vector-realises-the-minimal-polynomial` cites
  `thm-primary-decomposition-for-an-endomorphism`, whose published Statement
  carries the "Moreover, the minimal polynomial of $T|_{V_i}$ is exactly
  $q_i^{e_i}$" clause the route needs. **Decline upheld.**
- **Axler 5.47 → `the-fundamental-theorem-of-algebra`.** Verified from the PDF
  that Axler 5.47 (p. 174) is "if $\mathbf F=\mathbf C$, then every operator on
  $V$ has an upper-triangular matrix". The disposition is correct — see B4-1 for
  the reason, which is not.

### Findings

**B4-1 — the Axler 5.47 decline rests on a claim that is false against disk.**
The reason says the unconditional complex form "requires proving that $\mathbf C$
is algebraically closed, which belongs to the planned page
`the-fundamental-theorem-of-algebra`", and the notes add "The same disk check
found no published theorem making every complex polynomial split".
`items/thm-fundamental-theorem-of-algebra-minimum-modulus-proof.md` is
**`status: published`** — "every nonconstant complex polynomial has a complex
root" — homed on `the-complex-exponential-and-eulers-formula`, **order 189**.
The disposition is still right, because order 189 > 90 and that page is outside
this page's declared closure, so the theorem is unreachable from here. But the
stated reason is the `frontier-13` §A5 shape exactly: a correct call resting on a
wrong claim about disk, which is what makes it get overturned at step 9.
*Fix (one line, coverage row + notes):* restate as "the unconditional complex form
needs $\mathbf C$ algebraically closed; the published
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` supplies the root but
is homed on `the-complex-exponential-and-eulers-formula` at order 189, above and
outside this page's closure, so it is not citable here. This page keeps the
conditional algebraically-closed-field corollary."

**B4-2 — three items are missing a dependency their proof cannot run without.**
All three targets are already published, in closure, and used elsewhere on the
page, so this is a scaffold edit, not new mathematics.
1. `prop-characteristic-polynomial-factors-over-an-invariant-subspace` does not
   list `prop-induced-quotient-operator-is-well-defined`. $\chi_{\overline T}$ is
   not defined until $\overline T$ is known to be a well-defined linear operator,
   and that proposition is what identifies the lower-right block of the adapted
   matrix as its matrix. Add it.
2. `cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial` lists only
   `def-cyclic-subspace-vector-and-vector-annihilator` and
   `def-polynomial-evaluation-at-an-endomorphism`. The proof needs
   $\{v,Tv,\dots,T^{d-1}v\}$ to be a basis of $V$; add
   `thm-cyclic-subspace-power-basis-and-companion-matrix`.
3. `thm-jordan-form-uniqueness-from-ranks-of-powers` reasons about ranks summing
   over a direct-sum decomposition; add `def-rank-and-nullity` and
   `def-internal-direct-sum`.

**B4-3 — two design-mandated Remarks are not recorded anywhere in the scaffold
artifacts.** §II.6.c requires the first isomorphism theorem item to carry a Remark
recording that it re-derives the published `thm-rank-nullity` and citing it — "an
agreement record, not a second proof" — and §II.6.a requires the first item to
explain why quotient spaces are homed on a Jordan-form page. §II.6's B-page list
also asks for a Remark naming the Frobenius of $\mathbb F_8/\mathbb F_2$ as GA-3's
later use of the cyclic-vector theorem, orientation only, with no forward `deps`
edge. None of the three appears in `.notes.md` or `.pages.json`. Remarks live
inside items, so nothing here is wrong yet — but they are invisible to step 5
unless written down. *Fix:* record all three in the notes as step-5 authoring
obligations.

**B4-4 — two titles presuppose a hypothesis they do not state.**
`cor-jordan-block-data-controls-eigenspaces-and-polynomials` ("Jordan blocks read
off algebraic and geometric multiplicities and the minimal polynomial") and
`prop-generalised-eigenspaces-and-algebraic-multiplicity` both presuppose a
splitting hypothesis that their titles omit. LA-10 trap (ii) puts the splitting
hypothesis in the **title** precisely because the judge reads Statements and
cannot see a false title, and `frontier-13` §A2 is this class. Lower severity than
B4-1/B4-2 — the Statements will carry it — but it is free to fix now.

### Confirmations worth recording

- **Treil's rank-difference typo is real.** Treil LADW, §4.3 "Dot diagrams",
  PDF p. 281, printed p. 271, writes: "the number of dots in the second row is
  $\dim\ker(A^2)-\dim\ker A$ … and the number of dots in the $k$th row is
  $\dim\ker(A^k)-\dim\ker(A^{k+1})$." The two are inconsistent and the general
  one is non-positive, since $\ker A^k\subseteq\ker A^{k+1}$. The Beta's judgement
  ("a source typo, not a result to reproduce") and its corrected
  $d_k-d_{k-1}$ are right. Extracted and read, not inferred.
- **Axler locators are faithful.** Twenty result numbers spot-checked against the
  PDF: 3.99 quotient space, 3.101 translates, 3.102 operations, 3.104 quotient
  map $\pi$, 3.105 dimension of quotient, 3.106–3.107 the induced $\widetilde T$
  and its null space and range, 5.38–5.39 upper-triangular, 5.44 the necessary
  and sufficient condition, 5.47 the $\mathbf C$ theorem, 8.1–8.3 the null-space
  sequence, 8.17–8.18 nilpotence, 8.42–8.43 the nilpotent examples, 8.46 Jordan
  form. Every one matches its claimed content.
- **Both prose-order amendments are correct.** LA-10's heading says order 86 and
  the live spec says 90; the expansion file's MOD-5 says order 106 and the live
  spec says 110. Verified both from `plan-spec.json`.
- The `already-published` disposition for the generalised eigenspace decomposition
  is served: `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`
  is stated for a split **minimal** polynomial while the page hypothesises a split
  **characteristic** polynomial, and the bridge
  `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
  is in the deps of the item that needs it. That bridge is exactly the kind of
  edge whose absence would have been a fatal citation gap.

---

## Batch 5 — `quadratic-residues-and-the-legendre-symbol` · **sufficient**

16 A items, 9 B items. Design NT-2, `plan-number-theory-track.md` from line 351.

### The two apparent drops — I verified the orchestrator's check and extended it

NT-2's eighteen A items minus the two dispositioned `already-published` is exactly
sixteen; the inventory is covered item for item. The question routed to me was
whether **every place NT-2 uses the prime-only version is correctly served by the
general one, including hypotheses**. It is. The published statements are:

- `thm-eulers-criterion-for-binomial-congruences` — "Let $n\ge1$ **admit a
  primitive root**, let $\gcd(a,n)=1$, and let $m\ge1$. Put $d=\gcd(m,\varphi(n))$.
  Then $x^m\equiv a\pmod n$ is solvable iff $a^{\varphi(n)/d}\equiv1\pmod n$."
- `cor-number-of-solutions-of-a-binomial-congruence` — same hypotheses plus
  solvability, "exactly $\gcd(\varphi(n),m)$ solution classes".

Specialising to $n=p$ requires three side conditions, and **each is separately
cited at every one of the four A-page uses and the one B-page use**:
`cor-primitive-roots-modulo-prime` (every prime admits a primitive root),
`lem-prime-not-dividing-is-coprime` ($p\nmid a\Rightarrow\gcd(p,a)=1$), and
`cor-totient-at-one-and-at-a-prime` ($\varphi(p)=p-1$, which is what turns
$\varphi(n)/\gcd(m,\varphi(n))$ into NT-2's $(p-1)/\gcd(r,p-1)$ and
$\gcd(\varphi(n),m)$ into $\gcd(r,p-1)$). The uses are
`cor-unique-kth-root-modulo-prime-for-coprime-exponent`,
`thm-count-of-quadratic-residues-modulo-prime`,
`thm-eulers-criterion-for-legendre-symbol`,
`cor-number-of-solutions-to-quadratic-congruence-modulo-prime`, and
`ex-power-residues-modulo-seventeen`. **No hypothesis is hidden and no
restatement is widened.** The disposition is upheld.

### The `lem-integer-part` decline and its replacement argument — closes

`lem-integer-part` is published on `library/real-analysis/limits-of-real-functions.md`,
which my closure script confirms is **not** in this page's closure. The decline is
correct and it is the converse case the brief warns about.

The replacement is load-bearing for `thm-second-supplement-to-quadratic-reciprocity`,
so I worked it: for $a=2$ and $1\le j\le(p-1)/2$ the least positive residue of
$2j$ is $2j$ itself (since $2j\le p-1<p$), so a sign is negative exactly when
$2j>p/2$, i.e. $j>p/4$. Writing $p=8q+r$ with $r\in\{1,3,5,7\}$, the crossing
indices are the explicit integer ranges $[2q{+}1,4q]$, $[2q{+}1,4q{+}1]$,
$[2q{+}2,4q{+}2]$, $[2q{+}2,4q{+}3]$, of sizes $2q$, $2q{+}1$, $2q{+}1$, $2q{+}2$
— exactly the counts the notes record. Their parities match
$(p^2-1)/8=8q^2+2q,\;8q^2+6q+1,\;8q^2+10q+3,\;8q^2+14q+6$ in the four cases.
**The argument is complete and uses only the division algorithm and congruence,
both in closure.** It is also the method Hackman D.IV.6 uses (he groups the
half-system explicitly and does the $p\equiv3\pmod4$ case, leaving
$p\equiv1\pmod4$ to the reader); the four-case version closes what he leaves open,
which is a genuine improvement on the source and not a substitution.

### Declines checked against disk

Eight `deferred`, seven `out-of-scope`. **Every one names a licensing page id and
every id exists in `plan-spec.json`** — `quadratic-reciprocity-and-the-jacobi-symbol`,
its `-examples` companion, this pair's own `-examples` page, and
`number-fields-rings-of-integers-and-discriminants` for Hackman's Gaussian-integer
clause. This is the only batch of my three that fully satisfies check 3 as
`PREVENTIONS` §A4 states it. The reciprocity cut matches the dispatch; the
prime-power and composite-modulus deferrals match NT-3's declared remit, which I
confirmed at `plan-number-theory-track.md:424`.

### Findings

**B5-1 — two A-page items carry no harvest row at all, and a source heading that
would back one of them sits unenumerated inside the Beta's own declared read
range.** `thm-count-of-quadratic-residues-modulo-prime` and
`prop-quadratic-residue-is-representative-independent` receive no `included` or
`inline` disposition from any source or canonical row. Both are declared
`literature-derived`. The coverage gate cannot see this: it walks
headings → items, never items → headings, so an item with no backing heading
passes silently.

It is not a sourcing failure, only a harvest one, and the fix is concrete:

- Mascot Ch. 3, **PDF p. 8**, inside the Beta's declared "pp. 8–9" range, carries
  a named **Theorem** — "Exactly $\frac{p-1}{\gcd(k,p-1)}$ of the $p-1$ elements
  of $(\mathbb Z/p\mathbb Z)^\times$ are $k$-th powers" — and its named
  **Corollary** — "the map $x\mapsto x^k$ is $\gcd(k,p-1)$-to-1". Neither appears
  in the harvest. At $k=2$ the theorem is precisely
  `thm-count-of-quadratic-residues-modulo-prime`, and the corollary is the
  two-square-roots clause NT-2 attaches to it. Add both rows,
  `included` → `thm-count-of-quadratic-residues-modulo-prime`.
- `prop-quadratic-residue-is-representative-independent` genuinely has no source
  heading: NT-2 attributes it to "Gorodnik Def. 1.1 and Thm. 1.6(ii)", but I
  extracted Gorodnik p. 2 and **Thm. 1.6(ii) is about the Legendre symbol**
  ("whenever $a\equiv b\pmod p$, one has $(a/p)=(b/p)$"), which the Beta correctly
  routed to `prop-legendre-symbol-well-defined`. So this proposition is a
  house-minted bridge. Give it a `canonical` row — that is exactly what the
  `canonical` list is for — and correct its provenance rationale, which currently
  cites "Gorodnik class invariance" for a claim Gorodnik makes about the symbol
  rather than about residuosity.

**B5-2 — the Mascot range does not contain the example it is cited for.** The
coverage locator reads "Chapter 3, 'k-th roots mod p,' PDF pp. 8–9", and the
harvest lists "Example: the unique cube root of 2 modulo 29" from that range. The
example is on **PDF p. 10**; p. 9 carries the theorem and its proof, p. 10 repeats
the theorem with the example (it is a Beamer deck with incremental slides). Widen
the range to pp. 8–10. Low severity, but it is the §B4 class and it is where the
Beta's inability to install `pypdf` shows — it fell back on browser extraction for
Mascot and Gorodnik. *The mathematics is fine:* I extracted p. 10 and the example
is exactly as the Beta reports it, $\sqrt[3]{2}=2^{19}=-3$ in
$\mathbb Z/29\mathbb Z$ with $(-3)^3=-27\equiv2$, and $3\cdot19=57\equiv1\pmod{28}$.

**B5-3 — `cor-quadratic-congruence-discriminant-criterion` omits a load-bearing
hypothesis from its title.** The title is "The discriminant counts roots of a
quadratic congruence modulo an odd prime"; the count $1+((B^2-4AC)/p)$ additionally
requires $p\nmid A$, without which the congruence is linear and the formula is
simply wrong. The strategy line has it ("Since $p\nmid2A$"), the title does not,
and NT-2's own row states it. Same §A2 class as B4-4.

### Confirmations worth recording

- **Hackman's harvest is faithful, and it is the design's locators that are
  stale.** I extracted §D.I (PDF pp. 119–129) and §D.IV (pp. 135–139) and read
  every numbered result. The Beta's mapping is right in every case: D.I.1 def of
  quadratic residues, D.I.2 def of the Legendre symbol, D.I.3 the $p=13$ example,
  D.I.4 Euler's criterion, D.I.5 $(g^k/p)=(-1)^k$, D.I.6 multiplicativity, D.I.7
  the modulo-15 example, D.I.8 the $p=13$ primitive-root table, D.I.9 first
  supplement, D.I.10 Freshman's dream, D.I.11 second supplement, D.I.12 the
  reciprocity law; D.IV.1–D.IV.6 as harvested. **NT-2's Hackman locators disagree
  and are the wrong ones** — it cites D.I.3 for the symbol definition (actually
  D.I.2), D.I.7 for the first supplement (actually D.I.9), and D.I.1–D.I.2 for the
  residue count (both are definitions). *Orchestrator:* NT-2 should be amended at
  step 4 alongside the other prose amendments; the Beta harvested correctly and
  did not inherit the error.
- The Beta's split of Hackman D.I.10 into two rows — the ordinary-integer clause
  `already-published`, the complex-integer clause `out-of-scope` — is precise and
  right: D.I.11's *proof* in Hackman goes through complex integers, and the
  scaffold instead proves the second supplement from Gauss's lemma (D.IV.6). No
  Gaussian-integer dependency is smuggled in.
- Gorodnik Lecture 9 §1 verified line by line: Def. 1.1, Thm. 1.2, Ex. 1.3
  (4th powers mod 17), Def. 1.4, Thm. 1.5, Thm. 1.6(i)–(iv), the unnumbered
  $1+(a/p)$ note and the completed-square discriminant consequence. All harvested
  faithfully, and §2 (reciprocity) is correctly outside the read range.
- Choice discipline holds: primitive roots are selected inside proofs of theorems
  asserting existence, for one fixed prime, and no family over all primes is
  formed. NT-2 stays ZF.

---

## Batch 6 — `reflective-subcategories-and-the-adjoint-functor-theorems` · **insufficient**

43 A items, 9 B items. Design MA-2, `plan-category-theory-track.md` from line 1165.

MA-2's numbered inventory 1–35 plus the four `fs-` items and the eight B items is
covered **item for item**, including every landmark and the required
`rem-choice-ledger-for-the-adjoint-functor-theorems`. The Beta additionally homed
the companion counterexample MA-2 item 7 owes
(`cex-a-reflective-inclusion-need-not-preserve-colimits`) on the B page. Smallness
discipline is carried where MA-2 asks for it: `def-intersection-of-a-family-of-subobjects`
is "of a **supplied** family", `lem-wide-pullbacks-compute-intersections-independently-of-representatives`
is "for **supplied set-indexed** subobject representatives",
`def-well-powered-and-co-well-powered-category` names "supplied well-powerings",
and every GAFT/SAFT item repeats local smallness, completeness, continuity and the
solution-set or coseparating hypothesis in its own title or dep list.

### The §6 obligation — the repair closes, and I checked it rather than taking it

MA-2's repair (Leinster Lemma A.1) lands on
`thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`,
whose **title says "without class-indexed choice"**. I worked the four steps:

1. $S$ as a full subcategory is small — its objects form a set, and local
   smallness makes the union of its hom-sets a set.
2. $L=\lim(S\hookrightarrow\mathcal C)$ exists by completeness (the diagram is
   small). For a *fixed* target $C$, one witness $S_0\to C$ from weak initiality,
   composed with $p_{S_0}$, makes $L$ weakly initial. One existential
   instantiation, not a simultaneous selection.
3. For $f,g:L\rightrightarrows C$, take the equalizer $e:E\to L$, one witness
   $q:S_0\to E$, and $r=q\,p_{S_0}$.
4. For each $S\in S$, $p_Se q:S_0\to S$ lies in the **full** subcategory $S$, so
   the limit cone gives $p_S=(p_Se q)\,p_{S_0}=p_S e r$; limit uniqueness forces
   $er=1_L$. Then $e$ is monic and split epic, hence iso, so $f=g$.

**It closes.** Fullness in step 4 and local smallness in step 1 are both
load-bearing and both are stated. The Beta's own account (notes §"Choice-free
initial-object repair") reaches the same conclusion. Neither failure mode the
dispatch named occurred: the textbook class-indexed proof is not scaffolded, and
the theorem is not weakened.

*Doc bug, orchestrator:* MA-2's opening paragraph says "§6 records the repair and
**item 12** is where it lands". Item 12 is `def-intersection-of-a-family-of-subobjects`;
the initial-object lemma is **item 18**. The Beta landed it on item 18, correctly.
The same wrong pointer was copied verbatim into `frontier-14-beta-6.task.md` and
`frontier-14-alpha-b.task.md`.

### The Beta's SAFT blocker is real, and both sources confirm it

The Beta raised a step-3 adjudication (notes §"The class-intersection SAFT issue"):
Riehl's Theorem 4.7.10, as MA-2 item 26 states it — arbitrary-collection
subobject intersections in $\mathcal A$ plus **continuity alone** — cannot be
derived, because the comma category's intersections are not created. **I verified
this against both sources by extracting text, and the Beta is right.**

- **Riehl's own proof elides exactly that step.** Category Theory in Context,
  proof of Thm. 4.7.10 (PDF p. 199, printed p. 179): *"Monomorphisms in $s\downarrow U$
  are preserved and reflected by $\Pi$, and so the comma category $s\downarrow U$
  has intersections of subobjects created by this functor."* Lemma 4.7.2 creates
  only the limits $U$ **preserves**, and this library defines continuous as
  preserving all **small** limits (`def-preservation-reflection-creation-continuity-and-cocontinuity`)
  and complete as having all small limits, "not … limits of large diagrams"
  (`def-small-finite-and-large-limits-completeness-and-cocompleteness`). For a
  proper-class family of subobjects, continuity supplies nothing.
- **The failing step is concrete.** Subobjects of $(a,f)$ in $s\downarrow U$
  correspond to monos $m_i:a_i\rightarrowtail a$ carrying a factorisation
  $f_i:s\to Ua_i$ with $U(m_i)f_i=f$. The $f_i$ form a cone over the image of the
  wide-pullback diagram, so the structure arrow $s\to UI$ into the intersection
  exists **iff $U$ preserves that wide pullback**. Set-indexed: continuity gives
  it. Class-indexed: nothing does. (The family *is* closed under finite and
  set-indexed intersections, which is why the gap is invisible under
  well-poweredness.)
- **Mac Lane states the two valid forms, exactly as the Beta reports.** CWM §V.8
  Theorem 2: "…while every **set** of subobjects of an object $a\in A$ has a
  pullback … Then $G:A\to X$ has a left adjoint if and only if $G$ preserves all
  small limits **and all pullbacks of families of monics**", and his proof uses
  that second clause at the precise point Riehl elides ("The functor $G$ preserves
  pullbacks, so … there is a unique $f_0:x\to Gb$"). His Corollary is the other
  branch: "If $A$ is small complete, **well-powered**, with small hom-sets, and a
  small cogenerating set … then $G$ has a left adjoint if and only if it is
  continuous."

The Beta's two-branch scaffold — `thm-special-adjoint-functor-theorem-objectwise-form`
titled "with explicit intersection smallness **or** preservation data", carrying
both a chosen-well-powered set-indexed branch and a direct class-intersection-plus-preservation
branch — is the mathematically correct repair, and it is *not* a weakening: it is
what Mac Lane proves. **Endorsed. MA-2 item 26 should be amended at step 4 rather
than the unqualified Riehl wording reinstated.**

One refinement worth recording so nobody over-corrects: the Beta was right to keep
Riehl's arbitrary-collection form in **item 25**
(`thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object`).
Riehl's Lemma 4.7.11 is valid as stated — it takes the intersection of all
subobjects of a product *inside the category that hypothesises arbitrary
intersections*. Mac Lane's Theorem 1, which hypothesises only "every **set** of
subobjects", is the one with an implicit smallness assumption there. The split
belongs at SAFT and nowhere else, which is where the Beta put it.

### Findings

**B6-1 — a source-named result is declined `out-of-scope` on an obstruction that
does not exist, and it is buildable from published, in-closure material.** This is
what makes the pair `insufficient`.

Riehl Example 4.5.13(ii), second half — *"A similar construction defines a left
adjoint to the inclusion $\mathbf{CRing}\hookrightarrow\mathbf{Ring}$ of
commutative rings into the category of all rings"* — is dispositioned
`out-of-scope` with the reason: *"This specific ring reflection needs the
commutator ideal and its quotient universal property, neither of which is
developed by this category-theory pair. No planned page in plan-spec.json
explicitly licenses the commutativisation-of-rings construction."*

The stated obstruction is not real. Every piece is **published and inside this
page's declared closure** (verified with the closure script):

| needed | item | home page | in closure |
|---|---|---|---|
| the category $\mathbf{Ring}$ | `prop-rings-and-homomorphisms-form-category-ring` | `categories-functors-and-natural-transformations` | yes |
| full subcategory | `def-subcategory-and-full-subcategory` | same | yes |
| ideal generated by a subset, two-sided | `def-generated-and-principal-ideals` | `ideals-and-quotient-rings` | yes |
| the quotient ring | `def-quotient-ring`, `thm-quotient-ring-laws` | same | yes |
| the factorisation | `thm-quotient-ring-universal-property` | same | yes |

`def-generated-and-principal-ideals` defines $(S)$ for any subset of any ring as
the intersection of all **two-sided** ideals containing $S$, and
`thm-quotient-ring-universal-property` reads "If $I\trianglelefteq R$, $f:R\to S$
is a ring homomorphism, and $I\subseteq\ker f$, there is a unique ring
homomorphism $\bar f:R/I\to S$ with $\bar f(r+I)=f(r)$". The whole proof is four
lines: $R/C$ with $C=(\{ab-ba:a,b\in R\})$ is commutative because
$[a][b]-[b][a]=[ab-ba]=0$; any $f:R\to S$ with $S$ commutative kills every
$ab-ba$, hence kills $C$, hence factors uniquely.

Under the standing self-contained-scope rule, `out-of-scope` is "reserved for
material genuinely belonging to another page's topic, or resting on a whole
subject area the library has not reached". Neither holds. That no *planned* page
licenses commutativisation is an argument for building it **here**, not against.

*Exact result to add, and the source that carries it:*
**`thm-commutative-rings-are-reflective-in-rings`** — commutative rings form a
reflective full subcategory of rings, with reflector $R\mapsto R/C$ for $C$ the
two-sided ideal generated by the commutators $ab-ba$ and unit the quotient map.
Source: **Riehl, *Category Theory in Context*, current author-hosted edition,
Example 4.5.13(ii), PDF p. 182, printed p. 162** — already inside the Beta's
declared read range. It lands on the **A page**, in the applications block beside
`thm-abelian-groups-are-reflective-in-groups` and
`thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups`, which are its
two structural twins (MA-2 item 35). Change the coverage row from `out-of-scope`
to `included` naming that id. A page grows 43 → 44, still 16 under the ceiling.

**B6-2 — two items cite a proposition about preorders on a *set* to license a
proper-class preorder.** `fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint`
(witness $\mathbf{Ord}^{op}\to\mathbf 1$) and `cex-a-category-that-is-not-well-powered`
(the ordinal preorder with an adjoined top) both list
`prop-preorders-as-categories-and-monotone-maps-as-functors`. That item's
Statement is "A preorder determines a category with at most one morphism between
any two objects", and `def-preorder` defines a preorder as a relation **on a set
$P$**. Both witnesses are proper classes — and their properness is the entire
point, since a small complete category is a preorder with an initial object
(`cor-small-complete-or-cocomplete-categories-are-preorders`, already cited by
`rem-why-completeness-alone-is-not-enough-for-an-adjoint`). This is the inflated
`[F#]` restatement class, §A1: a cited Statement about a set restated over a
class, in the one place where the difference is load-bearing.

*Fix (scaffold edit, no new mathematics):* drop that dep from both items and
construct $\mathbf{Ord}^{op}$ and the ordinal preorder directly as definable-class
categories under `rem-category-theory-class-and-size-conventions` ("Class-sized
category theory in ZFC: definable-class schemas…"), which is published, in
closure, and already used by `rem-why-completeness-alone-is-not-enough-for-an-adjoint`;
keep `lem-ordinal-basics` and `fs-ordinals-form-a-set`. The B-page item
`ex-the-adjoint-functor-theorem-for-ordered-sets` keeps the proposition — ordered
**sets** are exactly what it is about.

*The witness itself is sound and should not be weakened:* $\mathbf{Ord}^{op}$ is
locally small and small-complete (a set of ordinals has a supremum; the empty
limit is $0$), the unique functor to $\mathbf 1$ preserves everything vacuously,
and a left adjoint would be an initial object of $\mathbf{Ord}^{op}$, i.e. a
greatest ordinal. So MA-2's contingency ("if it does not close, this becomes a
`rem-` and the drop is recorded") is not triggered.

**B6-3 — two items are missing a dependency their proof cannot run without.**
Both targets are published, in closure, and used elsewhere on the page.
1. `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`
   does not list `def-limit-and-colimit-of-a-diagram`. Steps 2 and 4 of the repair
   use the limit projections $p_S$ and the *uniqueness* of the factorisation
   through a limit cone; completeness alone does not supply that.
2. `thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object`
   lists neither `def-limit-and-colimit-of-a-diagram` nor
   `def-monomorphism-and-epimorphism`. Riehl's proof forms a product, forms a
   pullback, and argues that the equalizer of two distinct arrows would be a
   proper mono contradicting minimality of the intersection.

**B6-4 — five of the six declines name no licensing page id, and one of the
remaining four should.** Four `out-of-scope` rows say verbatim "No planned page in
plan-spec.json explicitly licenses…", against `PREVENTIONS` §A4's requirement that
every decline name a licensing page id. For two of them that is the honest answer
and I would not force a fabricated id: the nerve/Segal reflection and Riehl
Cor. 4.5.15 need simplicial **sets**, and the spec's nearest page is
`simplicial-complexes-and-simplicial-homology` (366.001), which is a different
object — the Beta says so and is right. The sheafification deferral correctly
names `presheaves-sheaves-stalks-and-sheafification` (366.057, confirmed in spec).
The two to act on:
- Riehl 4.5.13(ii) commutative rings → **B6-1**: not a decline at all.
- Riehl 4.5.13(iv) restriction of scalars along a ring epimorphism → the spec
  **does** carry a licensing page: **`tensor-products-of-modules`, order 106**,
  which is where extension of scalars $T\otimes_R-$ lives. It is not in this
  page's closure, so the decline itself stands; name that page instead of
  asserting none exists.

*See also the mechanism note below: §A4 describes this check as mechanical, and it
is not.*

### Confirmations worth recording

- **The Beta's Riehl section-number correction is right.** MA-2 cites "Riehl
  Def 4.6.12" and "§4.6" throughout; in the current author-hosted edition the
  reflective-subcategory material is **§4.5** (Def. 4.5.12 reflective subcategory,
  Lemma 4.5.11 giving the counit iso, Example 4.5.13 the reflective examples,
  Cor. 4.5.15), while the adjoint functor theorems are §4.7 (Lemma 4.7.1, Thm.
  4.7.3, Def. 4.7.7–4.7.9, Thm. 4.7.10, Lemma 4.7.11, Cor. 4.7.13–4.7.14, Thm.
  4.7.15). Extracted and confirmed. *Orchestrator: MA-2 should be amended.*
- Every rejected dependency candidate was rejected for a reason I verified:
  `thm-tychonoff` and `cor-functor-categories-inherit-completeness-and-cocompleteness`
  assume full Choice where `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`
  and `prop-size-of-functor-categories` suffice; `ex-free-group-on-two-generators-is-not-abelian`
  is a B-page leaf. The Urysohn choice cost is carried in the titles of
  `thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces`
  ("Under dependent choice") and
  `prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses`
  ("Under the ultrafilter lemma and dependent choice"), so MA-2 trap 3 is
  satisfied where the judge can see it.
- MA-2 trap 4 (two routes to Stone–Čech) is honoured: `thm-saft-yields-the-stone-cech-adjunction`
  depends on both the SAFT forms and the published
  `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces`,
  and on `thm-adjoints-are-unique-up-to-unique-natural-isomorphism` for the
  agreement after restriction to Tychonoff spaces.
- The Mac Lane citation is a Wayback URL because the `pages.jh.edu` original
  returns 403. `url-sweep` recovered it rather than re-sourcing, which is the
  correct order, and I fetched the archive copy and read §V.8 from it.

### One coverage gap I am *not* raising as a finding

MA-2 item 34 asks for GAFT to recover "$\mathbf{Ab}\to\mathbf{Grp}$,
$\mathbf{Grp}\to\mathbf{Mon}$, $\mathbf{Ring}\to\mathbf{Mon}$ (Leinster Ex 6.3.12)".
`cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` covers the first
two; the monoid ones are absent and carry no disposition row. I checked and the
library has no published free-monoid or underlying-monoid adjunction to cite, so
building them would mean minting the adjunctions first — genuinely out of scope
for a category-theory existence page. Worth a one-line `deferred` or `inline` row
for completeness of the harvest, but it is not a missing result.

---

## Sizing

| pair | A items | ceiling | headroom | split? |
|---|---|---|---|---|
| `triangularisation-and-jordan-canonical-form` | 36 | 60 | 24 | no |
| `quadratic-residues-and-the-legendre-symbol` | 16 | 60 | 44 | no |
| `reflective-subcategories-and-the-adjoint-functor-theorems` | 43 (44 with B6-1) | 60 | 16 | **no** |

The dispatch asked specifically whether authoring will push batch 6 over 60. **It
will not, and I do not recommend a split.** The `size` check in
`validate-plan.mjs` counts items, the item list is frozen when step 4 splices it
into `plan-spec.json`, and step 5 authors the items that are there rather than
minting new ones. The only route to 60 is a deliberate step-3/step-6 addition, and
everything I am proposing adds one item. Sixteen items of headroom is ample.

If the page ever does have to split, the Beta's recorded cut is the right one and
matches the dispatch's: reflective subcategories and the subobject/smallness
vocabulary (design items 1–17) on the first A page, the initial-object lemma
onward (18–35) on the second. I would not take it now — it would put GAFT and
SAFT on a page whose prerequisites are all on the page below, for no reader
benefit, and MA-2 trap 1 warns that items 9–17 must stay A-page and citable for
MA-9.

Batch 4's contingency cut (triangularisation and generalised eigenspaces / Jordan
form and similarity) is likewise sensible but unnecessary at 36.

---

## Mechanism observations (orchestrator, not the Betas)

1. **`PREVENTIONS` §A4 describes a mechanical check that is not mechanical.** It
   says "every `deferred` / `out-of-scope` disposition must name a licensing page
   id. Checked at step 2 with the coverage gate." `tools/coverage-checklist.mjs`
   lines 203–219 checks only that the reason exceeds `MIN_REASON` characters and
   that three or more declines do not share one identical string. It never looks
   for a page id and never validates one against the spec. Batch 6 passed the
   gate with five declines naming no page. Per the standing rule that the code is
   the truth and the doc is the bug, either §A4 should be reworded as **brief**,
   or the gate should grow the check. I raise it because a prevention listed as
   mechanical is trusted differently from one listed as advice, and this run's
   whole premise is that the distinction is load-bearing.
2. **The coverage gate cannot see an item with no harvest row.** `harvestOf`
   walks sources → contents → item, so an item that no heading names is invisible
   (B5-1). An items-without-a-backing-row report would be cheap and would have
   caught it at step 2.
3. **A published/planned duplication worth someone's attention.**
   `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` is published at
   order 189 (`the-complex-exponential-and-eulers-formula`), while
   `the-fundamental-theorem-of-algebra` sits **planned at order 139**. Whoever
   builds 139 will be re-proving a published theorem, below the page that carries
   it. Not batch 4's problem and outside step-3 scope, but it surfaced while
   checking B4-1 and it will not surface again on its own.

---

## Not checked, stated plainly

- **Axler and Hoffman–Kunze headings were not exhaustively verified.** Batch 4's
  harvest is 124 rows; I extracted and confirmed all fourteen Treil rows and
  spot-checked twenty Axler result numbers against the PDF, all correct. I did
  **not** enumerate Axler's §3E/§5C/§8A–8C or Hoffman–Kunze's Ch. 6 §6.4 and
  Ch. 7 §§7.1–7.2 heading by heading against the remaining rows, so I cannot
  certify that harvest is *complete* over its declared range — only that
  everything I sampled is faithful. Given how the Mascot range turned out (B5-2),
  the Hoffman–Kunze range is the one I would sample next.
- **Stein §§4.1–4.3 and Leinster §6.3/Appendix were not extracted.** Batch 5's
  Stein rows and batch 6's fourteen Leinster rows are unverified against the PDFs.
  For Leinster this matters least: the Appendix Lemma A.1 argument is reproduced
  in MA-2 §6 in full and I verified it as mathematics rather than as a citation.
- **No proofs were reviewed**, none exist yet. **No provenance was adjudicated**
  beyond confirming that no `ai-generated` Statement or construction is
  load-bearing in any of the three batches — I checked each Beta's provenance
  table against its own dependency graph and against the A/B leaf structure, and
  every AI-generated statement is a B-page leaf with nothing depending on it.
- **Proof-contract contents were not audited**; that is the step-5/6 gate's job
  and the item files do not exist.
- I did not re-litigate the batching, and I did not open the four
  `.proof-contracts.json` files beyond confirming they exist.

---

## Routing summary

| finding | pair | severity | costs at step 3 | costs later |
|---|---|---|---|---|
| B6-1 | batch 6 | **blocks `sufficient`** | one coverage row + one A item | a rewrite after step 4 |
| B6-2 | batch 6 | high | two dep-list edits | a step-8 fatal citation row |
| B4-1 | batch 4 | medium | one reason string | a step-9 overturn |
| B5-1 | batch 5 | medium | three coverage rows | an unsourced item at step 7 |
| B4-2, B6-3 | batches 4, 6 | medium | dep-list edits | authored proofs citing nothing |
| B4-3 | batch 4 | medium | three notes lines | three lost design obligations |
| B4-4, B5-3 | batches 4, 5 | low | title wording | §A2, invisible to the judges |
| B5-2 | batch 5 | low | one locator range | §B4 |
| B6-4 | batch 6 | low | one licensing page id | §A4 |

Alpha b will re-check every finding above from disk before the step-4 splice.
