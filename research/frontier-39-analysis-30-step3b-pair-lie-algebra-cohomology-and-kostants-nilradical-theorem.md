# Step 3b authoring record — `lie-algebra-cohomology-and-kostants-nilradical-theorem`

- Run: `frontier-39-analysis-30`, batch 25, role alpha-high (Step 3b pair auditor and author).
- A page: `lie-algebra-cohomology-and-kostants-nilradical-theorem` (order 510.021, `lie-theory`).
- B page: `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples` (order 510.022).
- Dispatch: `research/frontier-39-analysis-30-step3b-pair-lie-algebra-cohomology-and-kostants-nilradical-theorem-a4d12cede20b7d2e.task.md`.
- Step 3a scope receipt: `research/frontier-39-analysis-30-step3a-review-lie-algebra-cohomology-and-kostants-nilradical-theorem.json` — refreshed to `sufficient` for the current scope, `sha256` prefix `df3c59e5`.
- **Status: complete at handoff (2026-10-05).** All 18 items authored and checked, both library pages and the batch proof contracts written, all 18 item decisions recorded (`accept`/`repaired`, confidence 1, examined dependencies), and the Step-3b checks below run on the current content.

## Entry state and open obligations (created at dispatch entry)

Owned IDs, authoring order (level, page order, ID as dispatched):

| # | level | id | page |
|---|-------|----|------|
| 1 | 0 | `def-inversion-set-of-a-weyl-group-element` | A |
| 2 | 0 | `prop-a-normalizer-acts-on-lie-algebra-cohomology` | A |
| 3 | 0 | `prop-h-zero-is-the-invariant-subspace` | A |
| 4 | 0 | `prop-lie-algebra-cohomology-is-derived-invariants` | A |
| 5 | 1 | `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra` | A |
| 6 | 1 | `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` | A |
| 7 | 2 | `lem-kostant-laplacian-is-scalar-on-weight-components` | A |
| 8 | 2 | `thm-casselman-osborne-nilradical-cohomology-constraint` | A |
| 9 | 3 | `lem-each-kostant-extremal-harmonic-space-is-one-dimensional` | A |
| 10 | 4 | `thm-kostant-nilradical-cohomology-theorem` | A |
| 11 | 5 | `cor-kostant-cohomology-in-degrees-zero-and-top` | A |
| 12 | 5 | `cor-kostant-euler-character-recovers-the-weyl-numerator` | A |
| 13 | 5 | `ex-degree-one-kostant-classes-correspond-to-simple-reflections` | B |
| 14 | 5 | `ex-kostant-n-cohomology-for-the-trivial-sl3-module` | B |
| 15 | 6 | `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class` | A |
| 16 | 6 | `ex-kostant-n-cohomology-for-sl2` | B |
| 17 | 7 | `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight` | B |
| 18 | 7 | `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` | B |

Open obligations carried from the design, Step-1 owner resolution 3, and the
Step-3a review, with their handoff status:

- **O1 (A7, `lem-kostant-laplacian-is-scalar-on-weight-components`).** No read
  source proves the cochain-level CE Laplacian identity; Step 3b must write out
  the CAR normal ordering, the two mixed anticommutators, the exterior quartic
  Jacobi reduction and the root-string trace term under one common
  normalization (design §RL-11.2–3; owner resolution §15). **Completed in the
  item** (steps 1.1–3.1); now subject to the independent Steps 5–8 audit.
- **O2 (compact real form, item 7).** Step 3a found no closure item stating
  compact-real-form existence; the local route inside the declared `requires`
  closure uses the 507 root-system realization/root normalization plus
  DG-31/DG-29 integration. **Completed locally**: step 1.1 constructs the
  compact form inside the declared closure; the published direct statement
  (`thm-existence-of-a-compact-real-form`, order 509) is outside `requires` and
  is not cited. No `requires` edge was added; flagged for the owner below.
- **O3.** Align the B-row generator subscripts to A7's convention
  ($v_{w\lambda}\in V_{w\lambda}$, dot weights on classes). **Completed**: the
  `sl2`, `sl3`, `ex-degree-one` and `cex-omitting` rows use $v_{w\lambda}$ for
  the extremal vectors and put the dot weights on cohomology classes.
- **O4.** Reconcile every declared dependency with the actual proof use.
  **Completed**: three dependency corrections are recorded in the per-item
  checkpoints (two additions, and one pair of unused suppliers removed together
  with the unused fact [F8]); the batch manifest `deps` were re-synced from the
  item files and checked row-for-row against them.
- **O5.** Derive the item-specific proof contracts from the completed
  arguments. **Completed**:
  `research/frontier-39-analysis-30-batch-25.proof-contracts.json`, 18 entries,
  213 exact citation contracts (each with a quote verified against the
  supplier's Statement/Definition/Example section), 73 step derivations with
  stated inputs, and all eight boundary cases per item;
  `proof-contract --strict` reports 0 errors, 0 warnings.

## Per-item checkpoints

Unless a row says otherwise, every item passed, on the final content:
`precheck.mts` (17/17 proof-bearing items; the definition is `n/a`),
`rendercheck.mjs`, the batched `proof-layout.mjs` run (18 items, 73 steps,
0 defects) and `proof-contract.mjs --strict` (18/18). Each row records the
claim and conventions, the source locators, the dependency reconciliation, the
recorded decision, and any residual gap.

### 1. `def-inversion-set-of-a-weyl-group-element` (level 0, A) — `repaired`

- **Claim/conventions.** $\Phi_w=\{\alpha\in\Phi^+:w^{-1}\alpha<0\}$ is the
  inversion set; $\Phi_w=\operatorname{Inv}(w^{-1})=N(w^{-1})$, $|\Phi_w|=\ell(w)$,
  $\Phi_1=\varnothing$, $\Phi_{w_0}=\Phi^+$, and
  $\sum_{\alpha\in\Phi_w}\alpha=\rho-w\rho$ (proved by the double count of
  $w\Phi^+$). Conventions from DG-31 (chamber positive system) and the
  published length function.
- **Sources.** Design RL-11; Woit pp.2–3 for the indexing convention;
  DG-31/DG-29 published items named in the Definition.
- **Repair.** The scaffold identified $\Phi_w$ with $\operatorname{Inv}(w)$;
  the correct identification for this set-builder is
  $\operatorname{Inv}(w^{-1})$. Promised content (index set for the exterior
  factors, cardinality $\ell(w)$, half-sum identity) preserved.
- **Checks.** `proof: not-applicable`, so precheck is `n/a`; rendercheck ok;
  proof-layout ok; contract strict.
- **Gap.** None. Next: `prop-a-normalizer-acts-on-lie-algebra-cohomology`.

### 2. `prop-a-normalizer-acts-on-lie-algebra-cohomology` (level 0, A) — `accept`

- **Claim/conventions.** For an ideal $\mathfrak a\triangleleft\mathfrak p$ and
  a $\mathfrak p$-module $V$, the Lie derivative $\theta_x$ is a representation
  of $\mathfrak p$ on $C^\bullet(\mathfrak a,V)$ commuting with $d$, satisfies
  Cartan's formula $\theta_x=di_x+i_xd$ for $x\in\mathfrak a$, kills $\mathfrak a$
  on cohomology, and descends to $\mathfrak p/\mathfrak a$; hence
  $H^\bullet(\mathfrak n^+,V)$ is an $\mathfrak h$-module.
- **Sources.** OWTU §3.2 (printed pp.64–70), Woit pp.1–2.
- **Dependencies.** All 12 declared suppliers are cited by F1–F6 and consumed
  by steps 1.1–4.1; no change needed.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict with all eight boundary cases (including the $q=0$ empty substitution
  sum and the degenerate $\mathfrak p=\mathfrak a$).
- **Gap.** None. Next: `prop-h-zero-is-the-invariant-subspace`.

### 3. `prop-h-zero-is-the-invariant-subspace` (level 0, A) — `repaired`

- **Claim/conventions.** Evaluation at $1$ identifies $C^0(\mathfrak a,V)$
  with $V$, $d^0v=x\cdot v$, so $H^0(\mathfrak a,V)=V^{\mathfrak a}$; for the
  trivial module $H^0(\mathfrak a,k)=k$. Agrees with the published DG-29
  statement.
- **Sources.** Etingof §48.1 (printed pp.259–261); Woit p.1; the published
  DG-29 invariant-subspace proposition.
- **Repair.** Added
  `thm-the-chevalley-eilenberg-differential-squares-to-zero` to `deps`: [L2]
  cites $d^1d^0=0$ and the citation was undeclared. Manifest re-synced.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (all four facts' links contracted, five citations).
- **Gap.** None. Next: `prop-lie-algebra-cohomology-is-derived-invariants`.

### 4. `prop-lie-algebra-cohomology-is-derived-invariants` (level 0, A) — `repaired`

- **Claim/conventions.** $H^n(\mathfrak a,V)\cong\operatorname{Ext}^n_{U(\mathfrak a)}(k,V)$
  computed from the standard free resolution
  $P_q=U(\mathfrak a)\otimes_k\Lambda^q\mathfrak a$ with the Koszul differential,
  the Hom-complex identification matching the published zero-based CE
  differential on the nose.
- **Sources.** Etingof §45.2 (pp.246–249), §48.1; OWTU §3.2–3.3
  (printed pp.64–72); HA-5/HA-6/HA-8 published suppliers (Ext, free modules,
  Koszul regularity, filtered colimits).
- **Repair (recorded for the owner).** The scaffold assumed Dependent Choice
  only. Freeness of $P_q$ and the resolution need a $k$-basis of an arbitrary
  (possibly basisless) $\mathfrak a$, so the item now states the Axiom of
  Choice, which supplies DC through
  `thm-choice-implies-dependent-implies-countable-choice`; AC is used exactly
  for the basis of $\mathfrak a$ (step 1.1) and freeness/free-implies-projective
  (steps 1.2, 7.1). Isomorphism content unchanged. During the audit step 7.1
  gained the [F2] tag, making the degree-zero definition explicitly used.
- **Checks.** precheck pass (canonical phase numbering adopted); rendercheck
  ok; proof-layout 0 defects; contract strict (23 citations, 10 derivations).
- **Gap.** The finite-dimensional exactness chain (steps 3.2–5.1) is the
  authoring-obligation-heavy part; re-audited in Steps 5–8. Next:
  `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra`.

### 5. `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra` (level 1, A) — `repaired`

- **Claim/conventions.** $z\cdot\omega=\operatorname{pr}(z)\cdot\omega$ on
  every $H^p(\mathfrak n^+,V)$, $z\in Z(U(\mathfrak g))$, with the unshifted
  Harish–Chandra projection; the $\rho$-shift is explicitly disclaimed.
- **Sources.** OWTU §3.2.4–3.2.5 (printed pp.69–71), Proposition 3.2.9
  (naturality of connecting maps), Propositions 3.2.10–3.2.11 (injectives);
  Woit pp.2–3.
- **Repair.** Restored the missing Statement section; removed the unused fact
  [F8] (central characters on cyclic highest-weight modules) and the two
  suppliers it alone linked (`def-central-character-of-a-lie-algebra-module`,
  `prop-harish-chandra-projection-is-multiplicative-on-the-center`). The
  consumer `thm-casselman-osborne` declares those suppliers itself, so nothing
  downstream is lost.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (18 citations; the induction base $p=0$, injective vanishing,
  surjectivity of $\delta$ and the induction are all contracted).
- **Gap.** None. Next: `lem-extremal-weight-cochain-for-a-weyl-element-is-closed`.

### 6. `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` (level 1, A) — `repaired`

- **Claim/conventions.** $\gamma_w=(\bigwedge_{\alpha\in\Phi_w}\varepsilon_\alpha)\otimes v_{w\lambda}$
  is a nonzero cocycle of weight $w\cdot\lambda$; $C^q_{w\cdot\lambda}=0$ for
  $q\neq\ell(w)$ and $C^{\ell(w)}_{w\cdot\lambda}=\mathbb C\gamma_w$; equality
  case: $\|\mu+\rho\|=\|\lambda+\rho\|$ forces $\mu=w\cdot\lambda$, $S=\Phi_w$,
  $\eta=w\lambda$ for a unique $w$.
- **Sources.** Goodman–Wallach Appendix E, Lemmas E.2.6–E.2.8, expansion
  (E.40), cochain decomposition (E.42) (printed pp.24–27); OWTU Lemmas
  3.4.4–3.4.5 (printed pp.73–75); Woit pp.2–4.
- **Repair.** Restored the missing Statement. The subset uniqueness (step 1.4)
  is proved locally with the $W$-invariant product
  $\prod(e^{\alpha/2}+e^{-\alpha/2})$ and coefficient comparison, replacing
  the source's Lemma E.2.7 invocation. Source slip not copied: OWTU Lemma
  3.4.4's printed equality clause $S=\Phi^+$ is read as $S=\Phi_w$.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (27 citations; equality-case and multiplicity steps all contracted).
- **Gap.** None. Next: `lem-kostant-laplacian-is-scalar-on-weight-components`.

### 7. `lem-kostant-laplacian-is-scalar-on-weight-components` (level 2, A) — `repaired`

- **Claim/conventions.** With a compact real form, $\tau$-compatible invariant
  Hermitian forms and root vectors normalized by $B(e_\alpha,f_\alpha)=1$:
  (i) $\langle\square c,c\rangle=\|dc\|^2+\|\delta c\|^2$, Hodge decomposition
  and harmonic representatives; (ii) the two anticommutator identities;
  (iii) $2\square=1\otimes\pi(C_{\mathfrak g})-\sum_j\Theta(H_j)^2-2\Theta(H_\rho)$
  and the scalar $\tfrac12(\|\lambda+\rho\|^2-\|\mu+\rho\|^2)$ on occurring
  weight components, vanishing exactly on $W\cdot\lambda$. One common
  normalization of $B$, $C_{\mathfrak g}$ and the root-vector metric.
- **Sources.** The cochain-level identity is proved locally (O1): design
  §RL-11.2–3 and owner resolution §15. Sources supply only the cohomological
  Casimir identity and the equality case: Goodman–Wallach Theorem E.2.1,
  Corollary E.2.2, Lemma E.2.8; Woit p.4 (approach only); OWTU §3.4.
- **Repairs.** Restored the missing Statement; separated the merged steps
  1.6/1.7; fixed a stale cross-reference; adopted the checker's canonical layer
  numbering (2.1 linear coefficient, 3.1 assembly). The assembly algebra of
  step 3.1 was re-derived term by term against steps 1.6–2.1.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (29 citations; AC use and the common normalization recorded in the
  boundary worksheet).
- **Gap.** This is the page's highest-risk local calculation; Steps 5–8 are to
  audit it independently. Next: `thm-casselman-osborne-nilradical-cohomology-constraint`.

### 8. `thm-casselman-osborne-nilradical-cohomology-constraint` (level 2, A) — `accept`

- **Claim/conventions.** Every $\mathfrak h$-weight $\mu$ of
  $H^p(\mathfrak n^+,L(\lambda))$ satisfies $\chi_\mu=\chi_\lambda$, hence
  $\mu\in W\cdot\lambda$, in the dot convention $w\cdot\lambda=w(\lambda+\rho)-\rho$.
- **Sources.** OWTU §3.3 (printed pp.69–75), Theorem 3.3.1; Woit pp.2–3;
  DG-32 central-character orbit corollary.
- **Dependencies.** F1–F5 all cited by steps 1.1–3.1; no change.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (13 citations).
- **Gap.** None. Next: `lem-each-kostant-extremal-harmonic-space-is-one-dimensional`.

### 9. `lem-each-kostant-extremal-harmonic-space-is-one-dimensional` (level 3, A) — `accept`

- **Claim/conventions.** $\ker\square\cap C^q=\bigoplus_{\ell(w)=q}\mathbb C\gamma_w$,
  each summand one-dimensional; $\dim(\ker\square\cap C^q)=\#\{w:\ell(w)=q\}$;
  harmonic projection identifies $H^q$ with the zero eigenspace.
- **Sources.** OWTU Lemmas 3.4.3–3.4.5 (pp.73–76); Goodman–Wallach Lemmas
  E.2.7–E.2.8 (pp.25–27); the local Hodge argument of item 7.
- **Dependencies.** The four facts are exactly the Laplacian and
  extremal-cochain suppliers; all cited.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (8 citations; $q=0$ and rank-zero dispositions cite step 3.1).
- **Gap.** None. Next: `thm-kostant-nilradical-cohomology-theorem`.

### 10. `thm-kostant-nilradical-cohomology-theorem` (level 4, A) — `repaired`

- **Claim/conventions.** $H^k(\mathfrak n^+,V)\cong\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot\lambda}$
  as $\mathfrak h$-modules, multiplicity free, with
  $\dim H^k=\#\{w:\ell(w)=k\}$.
- **Sources.** OWTU §3.4 (pp.75–82), Theorem 3.4.1, Remarks 3.4.2/3.4.6(i);
  Woit pp.2–5.
- **Repairs.** Restored the missing Statement; added
  `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` to `deps` because
  [F2] cites it (the weight computation is the supplier of the summands).
  Manifest re-synced.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (13 citations). The proof does not use the theorem to prove its own
  multiplicity-one statement (that sits in items 6 and 9).
- **Gap.** None. Next: `cor-kostant-cohomology-in-degrees-zero-and-top`.

### 11. `cor-kostant-cohomology-in-degrees-zero-and-top` (level 5, A) — `repaired`

- **Claim/conventions.** $H^0=\mathbb C_\lambda$ (the invariants),
  $H^{|\Phi^+|}=\mathbb C_{w_0\cdot\lambda}$, $H^k=0$ for $k>|\Phi^+|$; the
  rank-zero case $\Phi^+=\varnothing$ gives $H^0(\mathfrak n^+,k)=k$.
- **Sources.** OWTU §3.4 Remark 3.4.2 and Remark 3.4.6(i) (printed pp.73,
  76–77); Woit pp.4–5.
- **Repair.** Restored the missing Statement.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (7 citations; both endpoints and the beyond-top empty index set
  dispositioned).
- **Gap.** None. Next: `cor-kostant-euler-character-recovers-the-weyl-numerator`.

### 12. `cor-kostant-euler-character-recovers-the-weyl-numerator` (level 5, A) — `repaired`

- **Claim/conventions.** $\sum_k(-1)^k\operatorname{ch}H^k(\mathfrak n^+,V)=\sum_w(-1)^{\ell(w)}e^{w\cdot\lambda}$,
  computed directly from the Kostant decomposition; the identification with
  the Weyl numerator via `cor-bgg-euler-character-identity` is a separate
  comparison, explicitly not used in the computation.
- **Sources.** Woit pp.4–6; OWTU §3.5.2 (printed pp.82–84).
- **Repair.** Restored the missing Statement.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (5 citations; finite-support and rank-zero dispositions cite steps
  1.1–2.1).
- **Gap.** None. Next: `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class`.

### 13. `ex-degree-one-kostant-classes-correspond-to-simple-reflections` (level 5, B) — `accept`

- **Claim/conventions.** $H^1(\mathfrak n^+,V)=\bigoplus_{i=1}^r\mathbb C_{s_i\cdot\lambda}$,
  one line per simple reflection, generated by the extremal classes
  $\gamma_{s_i}$; identifies the first BGG term; distinct simple roots give
  distinct weights by regularity of $\lambda+\rho$.
- **Sources.** Kostant theorem; direct rank-one/length-one argument; BGG
  first-term definition (in closure).
- **Dependencies.** 11 declared, all cited; both directions of "length one iff
  simple reflection" are used in step 1.1 and are contracted as
  `iff-forward`/`iff-reverse`.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict.
- **Gap.** None. Next: `ex-kostant-n-cohomology-for-the-trivial-sl3-module`.

### 14. `ex-kostant-n-cohomology-for-the-trivial-sl3-module` (level 5, B) — `repaired`

- **Claim/conventions.** For $\lambda=0$, $V=\mathbb C$,
  $H^k(\mathfrak n^+,\mathbb C)=\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot0}$
  with dimensions $1,2,2,1$ and the six distinct weights
  $0,-\alpha_1,-\alpha_2,-2\alpha_1-\alpha_2,-\alpha_1-2\alpha_2,-2\alpha_1-2\alpha_2$.
- **Sources.** OWTU §3.4 Theorem 3.4.1, Remark 3.4.6(i) (printed pp.73–82);
  Woit pp.4–5.
- **Repair (statement defect).** The scaffold claimed all cohomology weights
  are $0$; this is false since $w\cdot0=w\rho-\rho$ and $\rho$ is regular. The
  Example was rebuilt in the `## Example`/`## Verification` schema, the six
  weights and the dimension list are proved, and the promised rank-two check
  (dimensions, one class per simple root, total $|W|$) is preserved.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict.
- **Gap.** None. Next: `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class`.

### 15. `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class` (level 6, A) — `accept`

- **Claim/conventions.** $D=\prod(1-e^{-\alpha})$, $N_\lambda=\sum_w(-1)^{\ell(w)}e^{w\cdot\lambda}$;
  the BGG class gives $\operatorname{ch}L(\lambda)=D^{-1}N_\lambda$ and the
  Kostant decomposition independently gives the same finite numerator after
  clearing $D$; no cross-Grothendieck-group equality, no spectral sequence.
- **Sources.** Woit pp.4–6; HA-15/HA-16 (BGG resolution, Euler character);
  RL-6 formal-character machinery.
- **Dependencies.** 11 declared, all cited by F1/F2 and steps 1.1–2.1.
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict (10 citations).
- **Gap.** None. Next: `ex-kostant-n-cohomology-for-sl2`.

### 16. `ex-kostant-n-cohomology-for-sl2` (level 6, B) — `accept`

- **Claim/conventions.** $H^0=\mathbb C_{m\omega}$,
  $H^1=\mathbb C_{-(m+2)\omega}$, $H^k=0$ for $k\ge2$; $s\cdot\lambda=-\lambda-2\rho=-(m+2)\omega$;
  degree-one generator $\varepsilon_\alpha\otimes v_{s\lambda}$ of weight
  $-\alpha+s\lambda$.
- **Sources.** Woit pp.2–5; OWTU §3.4 rank-one specialization.
- **Dependencies.** 12 declared, all cited; rank-one specializations are finite
  and choice-free (AC only through the theorem supplier).
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict.
- **Gap.** None. Next: `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight`.

### 17. `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight` (level 7, B) — `repaired`

- **Claim/conventions.** Correct degree-one weight
  $-\alpha+s\lambda=-(m+2)\omega=s\cdot\lambda$; the dropped-exterior
  candidate $-m\omega$ differs by $2\omega$ for every $m$; the
  shifted-top candidate $(m-2)\omega$ differs by $2m\omega$, coinciding only at
  $m=0$.
- **Sources.** Direct rank-one cochain-weight check; title-only reference.
  `provenance.statement: ai-generated`, `generation.role: counterexample`; not
  a dependency target.
- **Repair.** Added the `## Statement refuted` section with the false claim;
  corrected the vector subscript to $v_{s\lambda}\in V_{s\lambda}$ (the
  scaffold wrote $v_{s\cdot\lambda}$).
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict; boundary worksheet records the $m=0$ coincidence as the zero case.
- **Gap.** None. Next: `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical`.

### 18. `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` (level 7, B) — `repaired`

- **Claim/conventions.** $H^1(\mathfrak n^+,\mathbb C)=(\mathfrak n^+)^*\cong\mathbb C\neq0$
  for the abelian one-dimensional nilradical of $\mathfrak{sl}_2$: $d^0=0$,
  all 1-cochains closed, $C^2=0$. The semisimplicity hypothesis of the
  Whitehead lemmas cannot be replaced by nilpotency.
- **Sources.** Woit pp.1–3; OWTU §3.2 (pp.64–68).
- **Repair.** Added the `## Statement refuted` section and renamed the proof
  section to `## Counterexample` (SCHEMA).
- **Checks.** precheck pass; rendercheck ok; proof-layout 0 defects; contract
  strict.
- **Gap.** None.

## Completed IDs

All 18 assigned IDs are authored, checked and decided:

`def-inversion-set-of-a-weyl-group-element`,
`prop-a-normalizer-acts-on-lie-algebra-cohomology`,
`prop-h-zero-is-the-invariant-subspace`,
`prop-lie-algebra-cohomology-is-derived-invariants`,
`lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra`,
`lem-extremal-weight-cochain-for-a-weyl-element-is-closed`,
`lem-kostant-laplacian-is-scalar-on-weight-components`,
`thm-casselman-osborne-nilradical-cohomology-constraint`,
`lem-each-kostant-extremal-harmonic-space-is-one-dimensional`,
`thm-kostant-nilradical-cohomology-theorem`,
`cor-kostant-cohomology-in-degrees-zero-and-top`,
`cor-kostant-euler-character-recovers-the-weyl-numerator`,
`ex-degree-one-kostant-classes-correspond-to-simple-reflections`,
`ex-kostant-n-cohomology-for-the-trivial-sl3-module`,
`prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class`,
`ex-kostant-n-cohomology-for-sl2`,
`cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight`,
`cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical`.

Carriers written: the 18 `items/<id>.md` files; the two library pages
`library/lie-theory/lie-algebra-cohomology-and-kostants-nilradical-theorem.md`
(13 items) and `...-examples.md` (5 examples/counterexamples);
`research/frontier-39-analysis-30-batch-25.proof-contracts.json`; the refreshed
scope receipt and the 18 item receipts
`research/frontier-39-analysis-30-step3b-review-<id>.json`.

## Checks actually run (on the final content)

- `node tools/tsx-run.mjs tools/precheck.mts <explicit 18 paths>` —
  17 checked, 0 failing (the definition is `n/a`).
- `node tools/rendercheck.mjs <18 items + both pages>` — 20 files, no errors.
- `node tools/proof-layout.mjs <explicit 18 paths>` — 18 items, 73 steps,
  0 defects.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-25.proof-contracts.json --strict`
  — 0 errors, 0 warnings, 18/18 items.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-25.pages.json`
  — 18 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-25.pages.json`
  — 18 items, 0 errors; manifest `deps` re-synced and compared row-for-row with
  the item files (0 mismatches).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — no batch-25 error; the run still shows two level errors in other batches
  (see Published concerns).
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0, no
  undeclared-prereq; the same 8 redundant-prereq WARNs on the declared
  `requires`; 510.021/510.022 still carry no item list in the plan-spec
  (pre-splice, see Open obligations).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-25.coverage.json`
  — 2 pages, 46 harvested results, 0 errors, 0 warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed; batch 25 contributes no cross-batch edge.
- `node tools/depcheck.mjs` (repo-wide) — no error names any batch-25 id or
  page; the 967 repo-wide errors are in other in-flight pairs (see below).
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`
  — no batch-25 work item remains (the run as a whole is open because other
  pairs are still in flight).

## Added suppliers

None. Every premise of every item is either a published library item inside the
declared `requires` closure or is proved locally (the CE Laplacian identities of
item 7 and the compact real form of item 7's step 1.1).

## Published concerns (exact IDs and evidence)

1. **Source slips in the read sources (not copied; confidence high —
   verified against the printed texts during Step 3a and re-used here).**
   OWTU Lemma 3.4.4 prints the equality clause $S=\Phi^+$ where the proof and
   Lemma 3.4.5 require $S=\Phi^+(w)$; OWTU Remark 3.4.6(ii) prints
   $\omega\in B^p$ where the argument needs a nonzero cocycle in $Z^p$; Woit
   p.4 uses $w\beta<0$ while indexing by $w\lambda$, against the plan's
   $w^{-1}\alpha<0$ convention. Our items use the corrected forms; the
   affected source locators are recorded in items 6 and 10.
2. **No source proves the cochain-level CE Laplacian identity (confidence
   high).** Goodman–Wallach Appendix E proves a Casimir identity *on
   cohomology* (Theorem E.2.1, Corollary E.2.2) and the equality case (Lemma
   E.2.8); Woit p.4 gives only the approach; OWTU §3.4 does not construct a
   metric or adjoint. The identity is therefore proved locally in item 7 and is
   the natural target of the independent Steps 5–8 audit.
3. **Repo-wide gate findings in other in-flight pairs (not batch 25; for the
   orchestrator).** `depcheck` reports 967 repo-wide errors, all in other
   pairs' items (mostly `dep-unresolved`/`link-unresolved` in the PDE
   elliptic-regularity/Fourier batches, and one `b-leaf-content`:
   `thm-lumer-phillips-generation-theorem` depends on
   `ex-bounded-operators-form-a-noncommutative-banach-algebra`, which lives
   only on a B page). `item-dependency-levels` reports
   `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`
   (14 vs computed 13) and
   `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
   (5 vs computed 6). `validate-plan` exits 0 with 257 planned pages still
   carrying no item list. No finding names a batch-25 id or page.
4. **No defect identified in a consumed published item.** The load-bearing
   suppliers were re-read against the completed arguments during contract
   authoring; Steps 5–8 still perform the independent audit.

## Open obligations and handoff state

- **Step 4 (pre-splice mismatch, to reconcile).** `research/plan-spec.json`
  still has `items: []` for 510.021/510.022 while
  `research/frontier-39-analysis-30-batch-25.pages.json` carries the 18 items
  (13 A + 5 B). The library pages list the same ids in the same order as the
  manifest rows, so the Step-4 splice can hydrate the plan from them; nothing
  is unresolved and no dependency is hidden.
- **Owner decision—compact real form (O2).** Retain item 7's local construction
  and keep the page self-contained; do not add a `requires` edge to the later
  real-forms page.
- **Owner decision—choice scope (item 4).** Approve the authored AC scope for
  the arbitrary-Lie-algebra derived-invariants proposition. The universal
  free-resolution claim needs AC; a DC alternative would narrow the theorem to
  finite-dimensional or countably based Lie algebras, or require a different
  Ext foundation. Its in-run consumers already declare AC. Owner `proceed`
  receipt recorded at the current scope hash (`df3c59e5…`).
- **Residual audit surface.** The Laplacian identity (item 7), the
  finite-dimensional exactness chain (item 4, steps 3.2–5.1) and the local
  compact-form/equality-case arguments are the non-routine parts flagged for
  the independent Steps 5–8 review; no open obligation is marked resolved
  beyond the authoring checks listed above.
