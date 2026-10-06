# Step 3b authoring — Weyl character and multiplicity formulas

- Run: `frontier-39-analysis-30` (role: alpha-high; batch 21; this pair only)
- A page: `weyl-character-and-multiplicity-formulas` (order 510.013, `lie-theory`; 21 items, levels 0–7)
- B page: `weyl-character-and-multiplicity-formulas-examples` (order 510.014; 6 items, levels 4–8)
- Manifest: `research/frontier-39-analysis-30-batch-21.pages.json` (27 items)
- Coverage: `research/frontier-39-analysis-30-batch-21.coverage.json` (61 harvested rows, 8 fetch-verified sources)
- Step 3a scope: **sufficient** — `research/frontier-39-analysis-30-step3a-review-weyl-character-and-multiplicity-formulas.json`
- Libraries read: `CLAUDE.md`, `SCHEMA.md`, batch-21 manifest/coverage/notes, `plan-representation-theory-lie-track.md` L1034–1075, the RL-7 published suppliers (listed below), `briefs/tasks/frontier-dependency-ledger.md`.

## Owned IDs (authoring order)

Level 0: `def-completed-formal-character-ring-for-downward-cones`,
`lem-casimir-comparison-on-a-weight-vector`,
`lem-rho-minus-w-rho-is-a-sum-of-positive-roots`,
`lem-weyl-length-parity-is-multiplicative`.
Level 1: `def-formal-character-of-a-finite-dimensional-weight-module`,
`def-weyl-alternation-operator`,
`lem-positive-root-strings-sum-the-freudenthal-correction`,
`lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight`.
Level 2: `lem-geometric-series-invertibility-in-the-completed-character-ring`,
`lem-weyl-alternants-are-skew-invariant`,
`prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
`prop-formal-characters-are-additive-and-multiplicative`,
`thm-freudenthal-weight-multiplicity-recursion`.
Level 3: `cor-freudenthal-recursion-terminates-from-the-highest-weight`,
`def-kostant-partition-function`, `thm-weyl-denominator-identity`.
Level 4: `lem-bgg-euler-character-gives-the-weyl-numerator`,
`ex-a2-weyl-denominator-expansion`.
Level 5: `thm-weyl-character-formula`.
Level 6: `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one`,
`thm-kostant-weight-multiplicity-formula`.
Level 7: `thm-weyl-dimension-formula`,
`cex-omitting-the-rho-shift-breaks-kostants-formula`,
`ex-kostant-multiplicity-in-the-sl3-adjoint-module`.
Level 8: `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`,
`ex-weyl-character-and-dimension-formulas-for-sl2`,
`ex-weyl-dimension-formula-for-a-fundamental-sl3-module`.

## Open obligations at entry

1. **No unfinished supplier.** Every `deps` target of the 27 items is either a
   published item of the library or another item of this batch; the pair's
   `cross-batch-dependencies.json` is the empty list and the only run edge is
   the consumer edge owned by batch 22 (RL-8). Nothing has to be escalated to
   an unfinished in-run supplier; no decision is pre-held on that ground.
2. **Step-3a non-scope note 1 (circular clause).** The scaffold statement of
   `lem-geometric-series-invertibility-in-the-completed-character-ring`
   asserted `A(rho)^{-1}=e^{-rho}prod(1-e^{-alpha})^{-1}` before the
   denominator identity that identifies the two. Resolution: keep the
   invertibility lemma independent of the equality (general `1+u`
   invertibility, the factors `e^mu`, the polynomial
   `prod(1-e^{-alpha})`, and `A(rho)=e^rho(1+u)` with `u` supported in
   `-Q_+\\{0}`), and put the identification `A(rho)=e^rho prod(1-e^{-alpha})`
   and the concrete form of `A(rho)^{-1}` in `thm-weyl-denominator-identity`
   and `thm-weyl-character-formula`, which cite it. Manifest statement and
   `deps` updated for the lemma.
3. **Step-3a non-scope note 2 (Freudenthal trace).** The scaffold's declared
   deps of `lem-positive-root-strings-sum-the-freudenthal-correction` do not
   name an sl2 string item. Resolution: the required trace identity is proved
   directly from `prop-root-vectors-shift-weight-spaces`,
   `prop-opposite-root-spaces-bracket-to-the-killing-dual-line` and the
   bracket normalization `[e_alpha,f_alpha]=H_alpha`; the finiteness of the
   string uses `lem-highest-weight-modules-have-weights-below-the-top-weight`.
   No sl2 classification is used, so no declaration is added. The identity
   matches Moreau Lemma 11.6 (coverage row) and Borcherds p. 146.
4. **Step-3a non-scope note 3 (near-duplicate B example).** 
   `ex-weyl-character-and-dimension-formulas-for-sl2` (this pair, Weyl route)
   overlaps the published `ex-weyl-character-and-dimension-formulas-for-sl-two`
   (DG-32, weight-string route). No id collision and no dependency edge; the
   overlap is a prose/splice observation for Step 4, reported here, not edited.
5. **Published suppliers to re-check at authoring.** All 43 external `deps`
   were read at statement level before use; per item the exact supplier claims
   are quoted in the proof contracts. No published defect found in any supplier
   at the time of writing (any later finding is reported in this file).

## Checkpoint log

(One block per item, appended after its checks. Fields: status, claim
conventions, suppliers actually used, decisions, checks, open gaps.)

### Entry checkpoint

- Status: report written; no item file authored yet.
- No `research/frontier-39-analysis-30-owner-authoring-direction.md` and no
  `...-step3b-owner-*.json` exist, so there is no run-local owner direction.
- Next action: author `def-completed-formal-character-ring-for-downward-cones`
  from its read suppliers and checkpoint.

### Checkpoint 1 — levels 0–1 written (8 items)

- `def-completed-formal-character-ring-for-downward-cones` (0). Definition of
  $\mathcal R$ = the ring denoted $\mathscr R$ in the published Grothendieck
  item; convolution well-definedness by coordinate bounds in the simple-root
  basis; contains $\mathbb Z[\mathfrak h^*]\supseteq\mathbb Z[P]$ as
  finite-support elements; Verma character lands in $\mathcal R$. Statement
  slightly narrowed from the scaffold: the scaffold's "subring of
  integral-support elements is the ring of formal characters" is not asserted
  (it is not literally true for the whole ring of characters of category O;
  the honest statement is that $\mathscr R$ is the ambient ring of the
  character homomorphism). Checks: precheck n/a (definition), rendercheck OK.
- `lem-casimir-comparison-on-a-weight-vector` (0). $C$ expands in the dual
  basis $\{h_j,h^j\}\cup\{e_\alpha,f_\alpha\}$; traces on $L(\lambda)_\mu$
  give $((\lambda,\lambda+2\rho)-(\mu,\mu))m=\sum_\alpha\operatorname{tr}(e_\alpha
  f_\alpha+f_\alpha e_\alpha)$. Added deps:
  `prop-root-vectors-shift-weight-spaces` (already there),
  `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra`
  (composition of operators for the $h_jh^j$ trace),
  `def-weyl-vector-rho-for-a-chosen-positive-system` (the scalar
  $(\lambda,\lambda+2\rho)$ names $\rho$). Checks: precheck PASS, proof-layout
  0 defects, rendercheck OK.
- `lem-rho-minus-w-rho-is-a-sum-of-positive-roots` (0). Telescoping over a
  reduced word with two descent-criterion sign checks and a cardinality count
  via the bijection $\alpha\mapsto-w\alpha$; $\rho-w\rho\in Q_+$. Checks:
  precheck PASS, proof-layout 0 defects, rendercheck OK.
- `lem-weyl-length-parity-is-multiplicative` (0). $\det(s_\alpha)=-1$ from the
  top exterior power; every expression gives $\det(w)=(-1)^{k}$; a reduced
  word gives $\det(w)=(-1)^{\ell(w)}$; multiplicativity from
  $\det(ST)=\det S\det T$. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK.
- `def-formal-character-of-a-finite-dimensional-weight-module` (1). Definition
  as in the scaffold; $\operatorname{ch}V$ is a finite-support element of
  $\mathcal R$; notation $m_\lambda(\mu)$ fixed here (also used inline in
  `lem-casimir-comparison-on-a-weight-vector`). Definition, no proof.
- `def-weyl-alternation-operator` (1). **Scaffold repair.** The scaffold
  asserted that $w\cdot e^\mu=e^{w\mu}$ extends to a $\mathbb Z$-algebra
  automorphism of all of $\mathcal R$. That is false: $W$ does not preserve
  the positive cone $Q_+$ (for $A_2$, $s_1(-Q_+)$ contains $n\alpha_1$ for all
  $n\ge0$, outside every finite union of downward cones). Repaired statement:
  the action is defined on the finite-support elements of $\mathcal R$
  (a $\mathbb Z$-algebra automorphism there, restricting to $\mathbb Z[P]$
  because $W$ preserves $P$), with an explicit caveat that it does not extend
  to $\mathcal R$; all later uses (characters of finite-dimensional modules,
  alternants) involve finite-support elements only. Deps: added
  `lem-weyl-length-parity-is-multiplicative`. Manifest statement to be updated
  accordingly (tracked below).
- `lem-positive-root-strings-sum-the-freudenthal-correction` (1). Direct trace
  recursion on the $\alpha$-string through $\mu$: cyclic trace plus
  $[e_\alpha,f_\alpha]=H_\alpha$ gives
  $\operatorname{tr}(f_\alpha e_\alpha)=\sum_{j\ge1}m(\mu+j\alpha)(\mu+j\alpha,\alpha)$
  and hence the stated
  $m(\mu)(\mu,\alpha)+2\sum_{j\ge1}(\dots)$. **Step-3a note 2 resolved without
  a new declaration**: no sl2 classification is needed, so no declaration was
  added; the argument uses only root-vector shifting, the bracket
  normalization and finiteness of the string. Checks: precheck PASS,
  proof-layout 0 defects.
- `lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight` (1).
  Dominant-representative reduction, the identity
  $(\rho-w\rho,\rho+w\rho)=|\rho|^2-|w\rho|^2=0$, and the reduced-word
  expansion $\lambda-v\lambda=\sum_l\langle\lambda,\alpha_{i_l}^\vee\rangle
  \beta_l$ give $D\ge0$ with $D=0$ iff $\mu=\lambda$. Added deps:
  `lem-finite-weyl-positive-roots-and-simple-reflections`,
  `lem-finite-weyl-strong-exchange-and-deletion`. Checks: precheck PASS,
  proof-layout 0 defects, rendercheck OK.

Open at this checkpoint: manifest edits for the two repaired statements
(`def-completed-formal-character-ring-for-downward-cones`,
`def-weyl-alternation-operator`, plus the planned level-2 repair of
`prop-characters-of-finite-dimensional-modules-are-weyl-invariant` and
`lem-geometric-series-invertibility-in-the-completed-character-ring`) and the
scope re-record they force; proof contracts; pages. Next action:
`lem-geometric-series-invertibility-in-the-completed-character-ring`.

### Checkpoint 2 — level 2 written and checked (5 items)

- `lem-geometric-series-invertibility-in-the-completed-character-ring` (2).
  Claim: for $u$ supported in $-Q_+\setminus\{0\}$ the series $1+u$ is
  invertible with inverse $\sum_{k\ge0}(-u)^k$ (coefficientwise finite by the
  height bound), and so are $e^\mu$, $\prod(1-e^{-\alpha})$,
  $e^\rho\prod(1-e^{-\alpha})$ and $A(\rho)=e^\rho(1+u')$; the identification
  of $A(\rho)^{-1}$ with $e^{-\rho}\prod(1-e^{-\alpha})^{-1}$ is explicitly
  deferred to the denominator identity. Conventions: heights in the
  simple-root basis, $Q_+$ over the base. Sources: Knapp Ch. V §6 p. 320
  (Lemma 5.72); Moreau §13.1 p. 93 (Ex. 13.3(b),(e)); Etingof §26.2 p. 139
  (Example 26.2). Deps examined: the exact array in the decision receipt
  (`def-completed-formal-character-ring-for-downward-cones`,
  `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
  `def-weyl-alternation-operator`,
  `lem-rho-minus-w-rho-is-a-sum-of-positive-roots`,
  `def-height-of-a-root-and-highest-root`,
  `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
  `def-grothendieck-group-and-character-of-category-o`). Decision: accept,
  confidence 1. Checks: precheck PASS; proof-layout 0 defects; rendercheck OK;
  contract strict, citation-fidelity and boundary-audit clean. Open gaps: none
  (scaffold circularity repaired; the forward mention of the denominator
  identity was reworded to prose when depcheck flagged it, and the five
  downstream contract quotes of the statement were resynced).
- `lem-weyl-alternants-are-skew-invariant` (2). Claim:
  $w\cdot A(\nu)=(-1)^{\ell(w)}A(\nu)$ for all $w,\nu$, and $A(\nu)=0$ if a
  simple reflection fixes $\nu$; stated for the finite-support action on
  $\mathcal R$. Sources: Etingof §26.2 p. 139 (Prop. 26.3); Moreau §13.1 p. 93
  (Ex. 13.3(c),(d)); Weber pp. 1–2. Principal suppliers used:
  `def-weyl-alternation-operator`, `lem-weyl-length-parity-is-multiplicative`,
  `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`.
  Decision: accept, confidence 1. Checks: precheck PASS; proof-layout 0
  defects; rendercheck OK. Open gaps: none.
- `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` (2).
  Claim: $w\cdot\operatorname{ch}V=\operatorname{ch}V$ and
  $\dim V_{w\mu}=\dim V_\mu$ for finite-dimensional $V$, via reindexing the
  finite support and W-invariance of multiplicities; AC declared and carried
  from the published multiplicity supplier. Sources: Etingof §26.1 p. 138;
  Moreau §13.1 p. 93. Principal suppliers:
  `lem-simple-reflections-preserve-weight-multiplicities`,
  `prop-weyl-length-equals-positive-root-inversion-number`. Decision: accept,
  confidence 1. Checks: precheck PASS; proof-layout 0 defects; rendercheck OK.
  Open gaps: none.
- `prop-formal-characters-are-additive-and-multiplicative` (2). Claim:
  additivity of $\operatorname{ch}$ on short exact sequences and
  multiplicativity on tensor products, computed in $\mathcal R$ by
  convolution. AC declared (entry through the published category-O
  suppliers). Sources: Etingof §26.2 p. 139; Moreau §13.1 p. 93 (Ex. 13.2).
  Principal suppliers: `prop-verma-and-finite-dimensional-modules-lie-in-category-o`,
  `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`,
  `prop-direct-sum-dual-hom-and-tensor-representations`. Decision: accept,
  confidence 1. Checks: precheck PASS; proof-layout 0 defects; rendercheck OK.
  Open gaps: none.
- `thm-freudenthal-weight-multiplicity-recursion` (2). Claim: the recursion
  $\bigl((\lambda+\rho)^2-(\mu+\rho)^2\bigr)m_\lambda(\mu)
  =2\sum_{\alpha>0}\sum_{j\ge1}(\mu+j\alpha,\alpha)m_\lambda(\mu+j\alpha)$.
  Conventions: $\rho$ the Weyl vector, $m_\lambda$ the multiplicities of
  `def-formal-character-of-a-finite-dimensional-weight-module`. Sources:
  Moreau §11.3 pp. 80–82 (Thm 11.7); Borcherds p. 146. Principal suppliers:
  `lem-casimir-comparison-on-a-weight-vector`,
  `lem-positive-root-strings-sum-the-freudenthal-correction`. Decision:
  accept, confidence 1. Checks: precheck PASS; proof-layout 0 defects;
  rendercheck OK. Open gaps: none.

### Checkpoint 3 — levels 3–4 written and checked (5 items)

- `cor-freudenthal-recursion-terminates-from-the-highest-weight` (3). Claim:
  $m_\lambda(\lambda)=1$, $m_\lambda(\nu)=0$ for $\nu\not\le\lambda$, and the
  recursion determines every other multiplicity by induction on the height
  defect because the coefficient is strictly positive for $\mu\ne\lambda$
  and the right-hand weights are strictly higher; at $\mu=\lambda$ the
  recursion is $0=0$. Sources: Moreau §11.3 pp. 80–82; Borcherds p. 146.
  Principal suppliers: `thm-freudenthal-weight-multiplicity-recursion`,
  `lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight`,
  `prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`.
  Decision: accept, confidence 1. Checks: precheck PASS; contract quote for
  this item was resynced after the shifted-norm rewording. Open gaps: none.
- `def-kostant-partition-function` (3). Definition: $P(\beta)$ = number of
  nonnegative root-coefficient families summing to $\beta$, finite by the
  height bound; equals the coefficients of
  $\prod(1-e^{-\alpha})^{-1}$. Sources: Etingof §26.3 p. 142 (Ex. 26.7(i));
  Knapp pp. 320, 322; Moreau §13.1 p. 93 (Def. 13.3); Weber pp. 1–2.
  Decision: accept, confidence 1. Checks: precheck n/a (definition);
  rendercheck OK. Open gaps: none.
- `thm-weyl-denominator-identity` (3). Claim:
  $A(\rho)=e^\rho\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})
  =\prod(e^{\alpha/2}-e^{-\alpha/2})$ in $\mathbb Z[P]$, hence
  $A(\rho)^{-1}=e^{-\rho}\prod(1-e^{-\alpha})^{-1}$; proved from the BGG
  Euler identity at $\lambda=0$ and $\operatorname{ch}L(0)=1$. AC declared
  (enters through `cor-bgg-euler-character-identity`). Sources: Etingof §26.3
  p. 140 (Cor. 26.5); Knapp p. 320 (Cor. 5.76); Moreau §13.1 p. 93.
  Decision: accept, confidence 1. Checks: precheck PASS; contract strict after
  quote resync. Open gaps: none.
- `lem-bgg-euler-character-gives-the-weyl-numerator` (4). Claim:
  $\operatorname{ch}L(\lambda)\cdot A(\rho)=A(\lambda+\rho)$ in
  $\mathbb Z[P]$, by multiplying the published BGG character identity by the
  product form of $A(\rho)$. AC declared (BGG supplier). Sources: Etingof
  §26.3–26.4 pp. 139–141; Knapp p. 322 (Thm 5.77); Weber p. 2 eq. (6),
  Thm 1.2. Decision: accept, confidence 1. Checks: precheck PASS; contract
  quote resynced. Open gaps: none.
- `ex-a2-weyl-denominator-expansion` (4). Verified computation: both sides of
  the denominator identity expand to
  $e^\rho-e^{\alpha_2}-e^{\alpha_1}+e^{-\alpha_1}+e^{-\alpha_2}-e^{-\rho}$
  for $A_2$, the two unit terms cancelling. Sources: Etingof §26.2
  pp. 139–141; Knapp p. 320. Decision: accept, confidence 1. Checks: precheck
  PASS. Open gaps: none.

### Checkpoint 4 — levels 5–8 written and checked (11 items)

- `thm-weyl-character-formula` (5). Claim:
  $\operatorname{ch}L(\lambda)=A(\lambda+\rho)A(\rho)^{-1}$ as a formal
  product in $\mathcal R$, no ordinary quotient asserted; obtained by
  multiplying the numerator identity by the invertible $A(\rho)^{-1}$.
  Sources: Etingof §26.3 pp. 139–142 (Thm 26.4); Knapp p. 322 (Thm 5.75);
  Moreau §13.1 pp. 93–95 (Thm 13.11); Weber p. 2 (Thm 1.2). Decision:
  accept, confidence 1. Checks: precheck PASS; contract quote resynced. Open
  gaps: none.
- `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one` (6).
  Claim: after evaluating $e^\mu\mapsto e^{2t(\mu,x)}$, (i) the alternant
  identity $\sum_w(-1)^{\ell(w)}e^{2t(w\nu,\rho)}
  =\prod_\alpha(e^{t(\nu,\alpha)}-e^{-t(\nu,\alpha)})$, (ii) the quotient
  identity for $\sum_\mu m_\lambda(\mu)e^{2t(\mu,\rho)}$, (iii) continuity at
  $t=0$ with the factorwise limit
  $\prod_\alpha(\lambda+\rho,\alpha)/(\rho,\alpha)$. AC declared (via the
  numerator identity). Analytic suppliers: `thm-exponential-addition-formula`,
  `thm-derivative-of-exponential`, `thm-lhopital-zero-over-zero`,
  `thm-algebra-of-limits`, `cor-exponential-reciprocal-and-positivity`.
  Sources: Etingof §26.5 pp. 142–143 (Prop. 26.8); Weber pp. 2–4 (Thm 1.3).
  Decision: accept, confidence 1. Checks: precheck PASS; contracts clean.
  Open gaps: none.
- `thm-kostant-weight-multiplicity-formula` (6). Claim:
  $m_\lambda(\mu)=\sum_w(-1)^{\ell(w)}P(w(\lambda+\rho)-(\mu+\rho))$ with
  $P=0$ off $Q_+$, by coefficient extraction from the character formula.
  Sources: Etingof §26.3 p. 142 (Ex. 26.7(ii)); Knapp p. 322 (Cor. 5.83);
  Weber pp. 1–3 (Thm 1.4); Moreau §13.1 p. 93 (Thm 13.10). Decision: accept,
  confidence 1. Checks: precheck PASS; contract quote resynced. Open gaps:
  none.
- `thm-weyl-dimension-formula` (7). Claim:
  $\dim L(\lambda)=\prod_\alpha(\lambda+\rho,\alpha)/(\rho,\alpha)
  =\prod_\alpha\langle\lambda+\rho,\alpha^\vee\rangle/\langle\rho,\alpha^\vee\rangle$
  by uniqueness of the limit $t\to0+$. Sources: Etingof §26.5 pp. 142–143
  (Prop. 26.8); Knapp p. 323 (Thm 5.84); Weber pp. 2–4 (Thm 1.3). Decision:
  accept, confidence 1. Checks: precheck PASS. Open gaps: none.
- `cex-omitting-the-rho-shift-breaks-kostants-formula` (7). Counterexample
  (statement `ai-generated`, role `counterexample`): for $\mathfrak{sl}_2$,
  $\lambda=2\omega$, $\mu=0$ the true multiplicity is $1$
  ($P(2\omega)-P(-4\omega)$) while
  $\sum_w(-1)^{\ell(w)}P(w(\lambda+\rho)-\mu)=P(3\omega)-P(-3\omega)=0$
  because $3\omega=\tfrac32\alpha\notin\mathbb Z_{\ge0}\alpha$. Sources:
  Etingof §26.3 p. 142; Weber pp. 1–3 (Thm 1.4). Decision: accept,
  confidence 1. Checks: precheck PASS. Open gaps: none.
- `ex-kostant-multiplicity-in-the-sl3-adjoint-module` (7). Verified: for
  $\lambda=\theta=\rho$ and $\mu=0$ only $w=1$ contributes,
  $m_\theta(0)=P(\theta)=2$, matching the adjoint weights ($6\cdot1+2=8$).
  Sources: Etingof §26.3 p. 142 (Ex. 26.7(iii)); Weber pp. 1–3 (Thm 1.4).
  Decision: accept, confidence 1. Checks: precheck PASS. Open gaps: none.
- `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` (8). Verified:
  the recursion at $\lambda=\theta=\rho$, $\mu=0$ reads
  $3(\theta,\theta)m_\theta(0)=6(\theta,\theta)$, giving $m_\theta(0)=2$ and
  recovering the Kostant example. Sources: Moreau §11.3 pp. 80–82;
  Borcherds p. 146. Decision: accept, confidence 1. Checks: precheck PASS.
  Open gaps: none.
- `ex-weyl-character-and-dimension-formulas-for-sl2` (8). Verified: the
  telescoping quotient gives the $m+1$ term character, the dimension formula
  gives $m+1$, and $m=0$ gives the trivial character and dimension one.
  Sources: Etingof §26 pp. 138–144; Moreau §13.1 p. 93 (Ex. 13.9). Decision:
  accept, confidence 1. Checks: precheck PASS. Open gaps: none; see the
  near-duplicate published concern below.
- `ex-weyl-dimension-formula-for-a-fundamental-sl3-module` (8). Verified:
  $\dim L(\omega_1)=(2/1)(1/1)(3/2)=3$, matching $\mathbb C^3$. Sources:
  Weber pp. 2–4 (Thm 1.3); Etingof §26.5 pp. 142–143. Decision: accept,
  confidence 1. Checks: precheck PASS. Open gaps: none.

## Scope re-record and item decisions

- The 3b repairs changed manifest statements, so the Step-3a scope review hash
  was stale. Scope was re-recorded for `weyl-character-and-multiplicity-formulas`
  as review role `sufficient` at 2026-10-04T21:00:53Z, sha256 `610ece12f9524b2238e6368b88e197e351b3021199020422b076df2b17615e6d`;
  `step3-decisions check --phase scope` then showed the page closed.
- All 27 items (21 A + 6 B) were recorded with `record-item --decision accept
  --confidence 1`, each with the exact `deps` array from its item file as the
  examined dependency list and a per-item evidence reason. All 27 are original
  scaffold-inventory IDs (all are in
  `research/frontier-39-analysis-30-step3-auditor-baseline.json` `items`, none
  in `existing_item_files`), so all required ordinary current item decisions;
  no escalation, no owner decision and no auditor certification was used.
  `step3-decisions check --phase final` reports zero open items for this pair.
  - **Post-recording repo-wide sweep (external, 2026-10-04T21:02Z).** After the
    decisions were first recorded, an external process rewrote 14,990 item
    files repo-wide, appending a trailing space at EOF and stripping the final
    newline (`git diff --stat items/`: 14,990 files changed, sample
    `items/prop-formal-character-of-a-verma-module.md`; this pair's own 27 item
    files were swept too). The change is whitespace-only at EOF: proof-contract
    --strict (0/0, 27/27), citation-fidelity (no missing quotes), content-policy
    (27/0/0), proof-layout (0 defects), precheck (23 checked, 0 failing) and
    rendercheck were all re-run clean on the post-sweep bytes, and the 27 item
    decisions were re-recorded as accept/confidence 1 against the current bytes
    (each reason carries a re-record note). `step3-decisions check --phase
    final` again shows zero open items for this pair. The sweep reopened
    decisions run-wide (accepted count 148 → 47), so it is recorded as a
    published concern below.

## Handoff — Step 3b complete for this pair

**Completed IDs (27).** Level 0:
`def-completed-formal-character-ring-for-downward-cones`,
`lem-casimir-comparison-on-a-weight-vector`,
`lem-rho-minus-w-rho-is-a-sum-of-positive-roots`,
`lem-weyl-length-parity-is-multiplicative`. Level 1:
`def-formal-character-of-a-finite-dimensional-weight-module`,
`def-weyl-alternation-operator`,
`lem-positive-root-strings-sum-the-freudenthal-correction`,
`lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight`. Level 2:
`lem-geometric-series-invertibility-in-the-completed-character-ring`,
`lem-weyl-alternants-are-skew-invariant`,
`prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
`prop-formal-characters-are-additive-and-multiplicative`,
`thm-freudenthal-weight-multiplicity-recursion`. Level 3:
`cor-freudenthal-recursion-terminates-from-the-highest-weight`,
`def-kostant-partition-function`, `thm-weyl-denominator-identity`. Level 4:
`lem-bgg-euler-character-gives-the-weyl-numerator`,
`ex-a2-weyl-denominator-expansion`. Level 5: `thm-weyl-character-formula`.
Level 6: `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one`,
`thm-kostant-weight-multiplicity-formula`. Level 7:
`thm-weyl-dimension-formula`,
`cex-omitting-the-rho-shift-breaks-kostants-formula`,
`ex-kostant-multiplicity-in-the-sl3-adjoint-module`. Level 8:
`ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`,
`ex-weyl-character-and-dimension-formulas-for-sl2`,
`ex-weyl-dimension-formula-for-a-fundamental-sl3-module`. Both pages, the
manifest, coverage, cross-batch dependency file (still `[]`) and the 27-entry
proof contract are on disk under their batch-21 names.

**Checks actually run (all on the final bytes).**
- `proof-layout` batched over all 27 item paths: 27 items, 71 steps, 0 defects.
- `precheck` over all 27 item files: 23 checked, 0 failing (the 4 definitions
  are n/a).
- `rendercheck` over all 27 items plus both pages: 29 files, OK.
- `content-policy` on the batch-21 manifest: 27 scoped items, 0 errors,
  0 warnings.
- `proof-contract --strict` on the 27-entry contract: 0 errors, 0 warnings,
  27/27 checked; `citation-fidelity --fail-on-missing-quote`: no missing
  quotes; `boundary-audit --fail-on-contradicted --fail-on-template`: no
  contradicted dispositions, no template reuse.
- `coverage-checklist`: 2 pages, 61 harvested results, 0 errors, 0 warnings;
  `source-fetch-check --coverage`: 8/8 fetch-verified, 8/8 resolved.
- `item-dependency-levels check --run`: no batch-21 error (the run-level
  errors are in other, not-yet-final batches); manifest deps re-synced from
  item files; `depcheck --items-file` (all 27): no hard error and no warning
  for this pair (the two `cited-not-in-deps` warnings found earlier were
  repaired, and the repo-wide FAIL comes from other batches' pages).
- `validate-plan research/plan-spec.json`: exit 0, page-level validation OK;
  no ERROR lines. `frontier-dependency-ledger refresh --run`: refreshed.
- `step3-decisions check --phase final`: 0 open items for this pair; 27/27
  accept at confidence 1.

**Added suppliers.** Four local prerequisite items were authored inside the
pair and registered in the manifest, coverage-level suppliers, contracts and
page: `lem-weyl-length-parity-is-multiplicative`,
`lem-rho-minus-w-rho-is-a-sum-of-positive-roots`,
`lem-geometric-series-invertibility-in-the-completed-character-ring`,
`lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight` (the first
two also feed the RL-8 consumer edge; the last two prove the strict
denominator positivity needed by the Freudenthal termination corollary).
All are original scaffold-inventory IDs, not engine-certified additions.

**Published concerns (no published item edited).**
1. Near-duplicate B item (prose/splice decision for Step 4, not a defect):
   `ex-weyl-character-and-dimension-formulas-for-sl2` (this pair, Weyl-route
   computation) overlaps the published DG-32 item
   `ex-weyl-character-and-dimension-formulas-for-sl-two` (weight-string
   route). No ID collision and no dependency edge; the duplication is only of
   the computed example. **Owner decision:** retain both calculations because
   they give distinct derivations of the same character and dimension formula;
   do not collapse either proof at splice.
2. No mathematical defect was found in any published supplier read during
   authoring. All 43 external `deps` targets were read at statement level and
   quoted exactly in the proof contract; the published suppliers carrying AC
   (`cor-bgg-euler-character-identity`, the multiplicity and highest-weight
   items) have the assumption declared and propagated in every consumer here.
3. Observation for Step 4, not a mismatch: `plan-spec.json` carries no item
   list for this pair (page-level entry only), so `validate-plan` validated
   the pair at page level; the authored item lists live in the batch-21
   manifest and both pages.
4. Repo-wide mechanical EOF sweep (confirmed event, unidentified writer).
   Between 2026-10-04T21:01:51Z and 21:02:02Z an external process modified
   14,990 tracked item files (published and draft), each gaining a trailing
   space at EOF and losing its final newline (`git diff --stat items/`;
   sample `items/prop-formal-character-of-a-verma-module.md`; mtimes clustered
   at 21:02:01–02Z). Two other dispatches completed at 21:01:39Z and
   21:01:51Z immediately before the sweep, and the run is paused with
   in-flight dispatches still finishing; the writer is not identified.
   Confidence: confirmed as an event, impact whitespace-only, but it
   invalidated every author's item-decision hashes run-wide. Repair strategy
   for the serial reconciler/owner: identify the writer, re-normalize EOFs
   repo-wide (restore final newlines, drop the trailing spaces), then have
   authors re-record decisions against the stabilized bytes; this pair's
   decisions are already re-recorded against the post-sweep bytes.

**Open obligations.** None for this pair: all suppliers are published or
in-batch and authored; the cross-batch dependency list is empty; every item
decision is closed. Independent mathematical audit (Steps 5–8) is expected to
verify the repaired statements listed above and the deferred-circularity
boundary between `lem-geometric-series-invertibility-in-the-completed-character-ring`
and `thm-weyl-denominator-identity`.

## Independent Step 3b re-audit

On 2026-10-05, all 27 B21 items were re-audited in dependency order and their
current receipts were refreshed against the exact current dependency arrays
and transitive input hashes. A proof-only error in
`lem-weyl-alternants-are-skew-invariant` was corrected: the previous proof
incorrectly replaced `wx nu` by `x(w nu)`. The revised proof reindexes the
finite sums directly, preserving the anti-invariance statement and its full
wall-fixed vanishing clause. No Statement or Definition changed and there are
no outside consumer interfaces to review. The pair is 27/27 closed with no
open B21 blockers. Final focused checks: proof-layout 27 items, 70 steps, 0
defects; strict proof contracts 27/27, 0 errors, 0 warnings. Workflow gates
and tests were not run.
