# `freegroups-1` — step 10 rundown, and the owner pause

Enrichment of the published pair `free-groups-and-presentations` (order 60) and
`free-groups-and-presentations-examples` (61). Steps 0 to 10 under `LEVELS.md`.
Run 2026-08-10/11. **Nothing here is published. Nothing in this run can publish.**

37 new items, all `status: draft`: A page 6 → 32, B page 1 → 12.

---

## 1. Every fatal mathematical error, by defect type and location

The owner rule requires this account before the publication pause. Five defects
were confirmed fatal and repaired. Detailed evidence: `freegroups-1-alpha-report.md`,
`freegroups-1-judge-adjudications.jsonl`, and the refuter reports under
`research/freegroups-1-refuters/`.

### 1a. False or overstrong Statement/title — 3, all found by Alpha at step 6

These are the class the judges **structurally cannot catch**: judges read
Statements and never see a title.

| id | location | the error | disposition |
|---|---|---|---|
| `ex-presentation-of-a-dihedral-group` | title + Statement | Defined `D_n` as "the symmetry group of a regular n-gon, of order 2n", then proved only a claim about `⟨{ρ,σ}⟩ ≤ Sym(ℤ/n)`. **This library develops no plane isometries**, so the named target was not an object it has — the same failure mode as the decidability material dropped at D2. | **Restated.** `D_n` is now stipulative, and order `2n` is *proved* rather than assumed. |
| `thm-abelianisation-of-a-free-group-is-free-abelian` | title | Said "**the** free abelian group" where only "**a**" is proved. Unlike free groups, this library has no uniqueness theorem for free abelian groups, so the definite article was unlicensed. | **Title corrected.** |
| `ex-presentation-of-z-squared` | Statement | Asserted ℤ² *is* "the free abelian group on two generators" — a universal property no step proves. | **Reworded** to the isomorphism actually proved. |

### 1b. Invalid inference / unsupported claim — 1, found by Terra at step 7

| id | location | the error | disposition |
|---|---|---|---|
| `lem-cyclic-reduction-normal-form` | Statement + Facts/dependencies | The Statement's closing clause, "`w` is conjugate to `c` in the reduced-word free group", was proved by **no step** and supported by **no declared dependency** — `deps` carried no group structure at all. | **Proof repaired.** Added `thm-reduced-words-form-the-free-group` as `[L2]` and a new step 4.1 proving the conjugacy. Both lanes pass on rejudge. |

### 1c. Incorrect dependency citation — 1, found by Terra at step 7

| id | location | the error | disposition |
|---|---|---|---|
| `ex-free-group-on-one-generator` | Facts/dependencies + proof step 3.1 | Asserted an isomorphism *carrying `ι(x)` to 1*, attributed to `thm-classification-of-cyclic-groups` — whose **Statement** gives only an unspecified `G ≅ (ℤ,+)`. Generator-compatibility lives only in that theorem's **proof**. | **Proof repaired.** `θ` constructed outright from `lem-cyclic-subgroup-is-the-set-of-powers`, `lem-order-characterisation` and `lem-group-power-laws`; the classification theorem dropped from `deps` as now unused. |

### 1d. Repaired though adjudicated nonfatal — 2, at step 6 where polish is still allowed

`ex-free-group-on-the-empty-set` and `ex-free-group-on-one-generator` quantified
over all free groups while proving only the word model. Alpha classified both
nonfatal (the bridge is one citation of a theorem on the same page) and repaired
them anyway, which step 6 permits. Both Statements are now strictly stronger.

Plus **seven fact-fidelity repairs** where a displayed `[F#]`/`[L#]` omitted the
exact clause its proof used. Nonfatal; repaired at step 6.

### 1e. Nothing was dropped, deferred, or left unproved as a result of a defect

No item was dropped or rescoped for want of a proof. Every repair strengthened
the item in place.

---

## 2. One known defect deliberately NOT repaired — your decision

**`ex-presentation-of-z-squared`, proof step 2.1** tags `[L2]` — a **ring**
statement — for computing `π(aᵐbⁿ) = (m,n)`. Alpha judged this a genuine
misattribution and stated it would have called it **fatal had a judge rejected on
it**. No rejection covers it, and step 8 is fatal-only: only a `confirmed_fatal`
adjudication licenses an edit. Alpha declined to manufacture a licence, which is
the correct behaviour under R1.

It is therefore **still in the text**. It is a misattributed citation, not a false
computation. Repairing it is a one-line change to the Facts block; the options
are to fix it before publish, or to publish and let the next audit wave take it.

---

## 3. The judge lanes compared, as the rule requires

| | verdicts | rejections | confirmed fatal | confirmed nonfatal | false positive |
|---|---|---|---|---|---|
| `gpt-5.6-terra` | 39 | 10 | **2** | 8 | 0 |
| `deepseek-v4-pro` | 39 | 4 | 0 | 2 | 2 |

Zero nulls across 78 calls.

**Both fatal defects came from Terra**, and DeepSeek — the cross-family screen —
produced two false positives and no fatal findings. That inverts the usual
expectation and is worth recording, but one run is not evidence of a trend.

Alpha diagnosed **seven of Terra's ten** rejections as a single systematic
pattern rather than seven defects: a fact declared in `deps` but not restated in
the Facts block. Terra applies a strict "every step needs a displayed
`[F#]`/`[L#]`" reading; DeepSeek does not. That is **lane calibration**, and the
cheap fix is a step-6 hygiene pass in future runs, not step-8 repairs.

**The R1 loop was observed live.** Rejudging the repaired
`ex-free-group-on-one-generator` produced a *fresh* Terra rejection on a new
point while DeepSeek passed it — exactly the repair → rejudge → new-nitpick cycle
R1 exists to stop, on an item already at three touches. Alpha adjudicated rather
than edited, quoting `def-order-in-a-group.md:44-56`, where "no positive power is
the identity" **is** the definiens of infinite order, making the step definitional
unfolding. `confirmed_nonfatal`, no edit, item held at three touches.

---

## 4. Escalations for your personal audit

- **`ex-free-group-on-one-generator` — 3 touches** (step-6a reader, step 6b, step
  8). Each repair was licensed and each made it strictly stronger, but three is
  three.
- **`ex-presentation-of-a-dihedral-group` — 2 touches.** Both were Alpha's in one
  sitting; the second was a cosmetic rephrase clearing a `prosecheck` warning the
  first introduced. A bookkeeping artifact, not two refutations.

---

## 5. What publishing requires — FOUR steps, not three

Alpha caught that the staged amendment was incomplete. Applying the item lists
alone would publish a page whose summary was written for six items and now fails
the two-paragraph summary contract. In one commit:

1. Replace the two frontmatter lists in
   `research/freegroups-1-published-amendments.md`.
2. Replace the A-page summary with the staged text in that same file.
3. Flip all 37 items from `status: draft` to `status: published`.
4. Write `verification.audited` on the 37, per your audit.

**A correction I made to the staged summary at step 9.** It said "That normal
form earns the universal property." That is backwards, and I verified it from
disk: `thm-word-quotient-model-is-free` carries **no** normal-form dependency and
proves the universal property independently by evaluation invariance under
elementary moves; the normal form is what `cor-generators-embed-in-the-word-quotient`
uses for injectivity. Corrected to say so. Staged prose only — no item touched,
no verdict voided.

---

## 6. Pre-existing decay found by the step-9 sweep — not caused by this run

Four `library/not-proved-here/deferred-*` records claim fundamental groups or
simple connectedness remain unbuilt; the already-published fundamental-group page
falsifies them. Exact sentences and smallest corrections are in
`research/freegroups-1-step9-scope-denial.md` §4.2. Left for you rather than
silently repaired, since they are outside this run's scope.

---

## 7. Gate results of record

| gate | result |
|---|---|
| `precheck` | 29 proof-bearing checked, 0 failing (8 definitions `n/a`) |
| `content-policy` | 37 scoped, 0 errors, 0 warnings |
| `depcheck` | no cycles, all references resolve, **no draft items on published pages** |
| `fwdcheck` | clean |
| `proof-contract --strict` | 29/29, boundary dispositions on every entry |
| `finite-smoke` | 0 errors |
| `risk-report --require-reviewed` | 0 errors, 29 routed, 23 `risk_review` records |
| `impact-audit` | 13 interfaces, 11 consumers, 0 undispositioned |
| `step8-guard` | 2 changed, **2/2 licensed by a confirmed fatal defect** |
| `spine-audit --receipt` | **59/59 read**, none carried, no fatal findings |
| `level-coverage --verify-current-context` | **EXIT 0** — 37 items, 161 relationships, 37/37 judge pairs, 11 adjudicated WARNs |

---

## 8. Scope honestly delivered, and what was not

**Built:** the `W(X)/~` construction with its universal property **proved** (your
D6), the van der Waerden normal form, von Dyck, explicit normal closure,
finite-rank invariance, free bases, presentation vocabulary, abelianisation,
Tietze transformations with their package-equivalence proof, cyclic reduction,
torsion-freeness, conjugacy of cyclically reduced words, eight worked
presentations, and the three rewriting counterexamples.

**Dropped with licensing notes, recoverable:**

- **All decidability material** — Novikov–Boone, Dehn's decision problems,
  residual finiteness, Knuth–Bendix, Todd–Coxeter. This library has built no
  computability machinery; nothing may rest on it. This is most of the prompting
  article's centrepiece.
- **Nielsen–Schreier** — needs Schreier/Nielsen or covering-space machinery.
- **Infinite-rank invariance** — `cardinal-arithmetic-and-cofinality` is at order
  247 against this page's 60, so it is unreachable, not merely unproved.

---

## 9. The owner pause

Everything above is committed and `status: draft`. Step 10 is the sole owner
pause: publication requires your audit, and no gate, agent, or flag in this run
can perform it.

Before publishing, decide: the `ex-presentation-of-z-squared` citation (§2), the
two escalations (§4), and whether to fold the pre-existing deferred-catalogue
corrections (§6) into the same commit or leave them for an audit wave.
