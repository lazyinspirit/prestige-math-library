# Step 3b author/audit — `generic-coxeter-hecke-algebras-and-the-standard-basis`

- Run: `frontier-42-coxeter-32`, role alpha-high, Step 3b (A/B pair authoring), batch 3.
- A page: `generic-coxeter-hecke-algebras-and-the-standard-basis` (order 1710, category `hopf-hecke-algebras`, design HH-12).
- B page: `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` (order 1711).
- Owned IDs (audited in dependency order; ties by page order then ID):
  1. `def-hh-universal-coxeter-hecke-parameters-and-presentation` (level 1) — repaired, accepted.
  2. `lem-hh-commuting-left-right-hecke-length-operators` (level 5) — repaired, accepted.
  3. `lem-hh-reduced-word-independence-and-length-multiplication` (level 5) — accepted.
  4. `thm-hh-generic-coxeter-hecke-standard-basis` (level 6) — accepted.
  5. `lem-hh-hecke-anti-involution-bar-and-normalization` (level 7) — repaired, accepted.
  6. `ex-hh-unequal-parameter-dihedral-consistency` (level 7) — repaired, accepted.
  7. `ex-hh-hecke-specialization-at-v-equals-one` (level 8) — repaired (record mirror), accepted.
  8. `ex-hh-rank-one-hecke-multiplication-in-both-normalizations` (level 8) — accepted.
  9. `ex-hh-s3-hecke-multiplication-table-in-both-normalizations` (level 8) — repaired (contract mirror), accepted.

All nine items are `status: draft`, `origin: pipeline`, statement provenance `literature-derived` (`proof: ai-altered`, the definition `not-applicable`), with URL-bearing `sources.references`, and all nine carry a current `step3-decisions` item receipt (six `repaired`, three `accept`, confidence 1) plus a refreshed `sufficient` scope receipt for the pair.

## Inputs read

`CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`, the dispatch task; the Step 3a report `research/frontier-42-coxeter-32-step3a-pair-generic-coxeter-hecke-algebras-and-the-standard-basis.md` (scope `sufficient`) and its receipt; batch-3 records `research/frontier-42-coxeter-32-batch-3.{pages,coverage,cross-batch-dependencies}.json` and `.notes.md`; the design `research/plan-hopf-hecke-algebras-track.md` §HH-12; the scaffold records `research/hopf-hecke-scaffold/{inventory.json,independent-audit.md,hecke-source-report.md}`; owner direction `research/frontier-42-coxeter-32-owner-authoring-direction.md` (HH-12 clause) and `-owner-scope.json`; the current item files of all nine owned IDs and of every in-run supplier; the two directly named prerequisite pairs' current items (`coxeter-presentations-exchange-and-reduced-word-theorems`: `def-hh-coxeter-matrix-word-group-and-length`, `lem-hh-dihedral-root-recurrence-and-root-sign`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`; `tensor-coherence-and-algebraic-descent`: `lem-hh-free-associative-ring-and-relations-descent`, `lem-hh-finite-polynomial-and-localization-constructions`, `lem-hh-universal-presentations-and-base-change`); the three source PDFs at their recorded locators (Lusztig `arXiv:math/0108172` §§3.1–3.5, 4.1–4.2, Prop. 1.10; Geck `arXiv:math/0511548` §2, §4.1; Björner–Brenti §6.1); the plan spec, the current plan-spec `requires` rows for orders 1710/1711 and the consumer pairs at orders 1712–1744.

## Entry state and method

The nine item files were found on disk in an authored state written by earlier timed-out attempts of this same dispatch (they are the pair's 3b writer output; the Step 1 scaffold produced statements and strategies only). Entering as the live alpha-high instance, I (a) created this report at entry, (b) read each supplier cited by the first item before auditing item 1, (c) audited every item independently against its suppliers, its sources and the manifest contract in the dispatch order, repairing local defects, (d) reconciled the manifest statement/strategy mirrors, the cross-batch-dependency input and the receipts, and (e) reran the full check battery on the final content. The final on-disk content is adopted as this dispatch's authoring.

## Per-item checkpoints (dependency order)

### 1. `def-hh-universal-coxeter-hecke-parameters-and-presentation` (level 1)

- Claim adopted: for a finite Coxeter matrix $(S,m)$ with presented group $W$ and length $\ell$: the odd-edge equivalence $\sim$ with $c$ classes; the coefficient ring $R=\mathbb Z[v_1^{\pm1},\dots,v_c^{\pm1}]=\Lambda_{\mathbb Z,c}$; the presented algebra $H=F/I$ by (Q) $(T_s-v_s)(T_s+v_s^{-1})$ and the alternating (B) relations on finite edges; the universal property; the universal-parameter statement; and the generator-conjugacy criterion $s\sim t\iff s,t$ conjugate in $W$, with the stated conventions (no freeness/basis/torsion claimed here).
- Steps verified: 1.1 (equivalence relation and component count, including $S=\varnothing$ giving $c=0$, $R=\mathbb Z$); 1.2 (unital associative $R$-algebra via the free algebra and quotient universal property); 1.4 (class-sign homomorphism $\varphi_C$ kills $s^2$ relators and $(uv)^{m}$, because exactly-one-in-$C$ forces $m$ even; conjugate generators have equal $\varphi_C$, so $\nsim$ separates); 1.5 (Laurent-ring universal property); 1.6 (expanding conventions, dependence only on $v_s-v_s^{-1}$); 2.1 (assembly, no choice).
- Repair: step 1.3 asserted $xs=(st)^ks=(ts)^kt=tx$ through routine algebra. Replaced by the displayed derivation $(st)^ks\cdot t(st)^k=(st)^{2k+1}=1$ in $W$, hence $(st)^ks=(t(st)^k)^{-1}=(st)^{-k}t=(ts)^kt=t(st)^k$, which makes the odd-edge conjugacy step complete.
- Supplier check: `lem-hh-free-associative-ring-and-relations-descent` [F1]; `lem-hh-finite-polynomial-and-localization-constructions` [F2]; `def-hh-coxeter-matrix-word-group-and-length` [F4]; published `def-algebra-over-a-commutative-ring` [F3], `def-group-homomorphism` [F6], `def-conjugacy-class-and-centralizer` [F5] — every quoted claim matches the current supplier statement. Sources: Lusztig §3.1 weight-function constraint $L(s)=L(s')$ for finite odd $m$; Geck §2 conjugacy rule $\pi(s)=\pi(t)$.
- Contract mirror: manifest `statement` synchronized to the item (unital associative target algebra $A$; references to steps 1.1/1.6 instead of the scaffold's "(strategy 1.7)"); manifest strategy 1.1 corrected to $0\le c\le|S|$ with $c=0$ exactly for $S=\varnothing$.
- Choice: none used (explicit congruence and quotient; no selection).
- Open gaps: none for this item. Next: item 2.

### 2. `lem-hh-commuting-left-right-hecke-length-operators` (level 5)

- Claim adopted: the endomorphisms $P_s,Q_s$ on the free $R$-module $E=\bigoplus_{w\in W}Re_w$ by the two length clauses; (1) $P_sQ_t=Q_tP_s$ for all $s,t$; (2) quadratics $P_s^2=(v_s-v_s^{-1})P_s+\operatorname{id}$ and the explicit inverse, likewise for $Q_s$; (3) braid relations for finite $m$; (4) reduced products $P_{s_1}\cdots P_{s_k}(e_1)=e_w$ and well-defined $P_w$ with $P_w(e_1)=e_w$. No finiteness of $W$, no regularity of $R$.
- Steps verified: 1.1 (exactly one clause applies by the parity law); 1.2 (quadratic and inverse by the two length cases); 1.3 (two-length lemma: $\ell(sxt)=\ell(x)$, $\ell(sx)=\ell(xt)$ forces $sx=xt$, by exchange on the reduced word $(s_1,\dots,s_q,t)$ and reduction of the length-lowering case); 1.4 (four monotone configurations); 1.5 (prefix-reducedness of reduced words, $P$- and $Q$-evaluations at $e_1$); 2.1 (configurations (v)/(vi) and the parameter rule $v_s=v_t$ for conjugate generators, giving commutation); 3.1 (braid relations on $e_w$ using the commuting $Q$-operators, $(st)(ts)=s^2=1$ and $(st)^m=1$); 4.1 (Matsumoto gives well-defined $P_w$).
- Repair: step 1.3 dropped the letter $s_i$ in $sx=(s\,s_1\cdots s_{i-1})s_{i+1}\cdots s_q$. Replaced by $sx=(s\,s_1\cdots s_{i-1})s_i\,s_{i+1}\cdots s_q=(s_1\cdots s_i)s_i\,s_{i+1}\cdots s_q=s_1\cdots s_{i-1}s_{i+1}\cdots s_q$, a $q-1$ letter word, which is the needed contradiction with $\ell(sx)=q+1$.
- Supplier check: `def-hh-coxeter-matrix-word-group-and-length` [F5]; `thm-hh-coxeter-exchange-deletion-and-faithfulness` [F1]; `thm-hh-matsumoto-reduced-word-theorem` [F4]; `lem-hh-dihedral-root-recurrence-and-root-sign` [F3] (ambient reducedness of alternating words); `def-hh-universal-coxeter-hecke-parameters-and-presentation` [F2]; published `def-free-module-on-a-set-and-standard-basis` [F6], `def-module-homomorphism-kernel-image-and-cokernel`/`def-endomorphism-ring-of-a-module` [F7]. The Step-3a correction (module-level interface instead of `def-linear-map`) is present in both the item and the manifest.
- Choice: none (all maps defined by explicit length clauses).
- Open gaps: none. Next: item 3.

### 3. `lem-hh-reduced-word-independence-and-length-multiplication` (level 5)

- Claim adopted: well-definedness of $T_w$ from Matsumoto braid-connectivity; the two length-multiplication rules in both hands; spanning of $\{T_w\}$; explicit scope clause withholding independence.
- Steps verified: 1.1 (braid moves preserve the product in $H$); 2.1/3.1 (both rules from the quadratic relation); 4.1 (spanning by induction on word length over the free-algebra quotient); 5.1 (assembly; $W$ may be infinite; no choice).
- Supplier check: Matsumoto [F1]; `def-hh-universal-coxeter-hecke-parameters-and-presentation` [F2]/[F4]; exchange theorem [F3] (parity); free algebra [F5]; `thm-induction-principle`/`def-natural-numbers` [F6].
- Repairs: none needed (format and mathematics clean). Manifest statement already identical to the item.
- Choice: none. Open gaps: none. Next: item 4.

### 4. `thm-hh-generic-coxeter-hecke-standard-basis` (level 6)

- Claim adopted: the representation $\rho:H\to\operatorname{End}_R(E)$, $T_s\mapsto P_s$, with $\rho(T_w)=P_w$ and $\rho(T_w)(e_1)=e_w$; $\{T_w\}$ is an $R$-basis; $\rho$ is faithful; scalar extension along any ring homomorphism $R\to R'$ is the presented quotient with basis $(1\otimes T_w)$ and no flatness/torsion/semisimplicity hypothesis.
- Steps verified: 1.1 (universal property applied to the $P_s$); 2.1 ($\rho(T_w)=P_w$); 3.1 (independence by evaluating at $e_1$ against the free basis); 4.1 (faithfulness); 4.2 (base change via `lem-hh-universal-presentations-and-base-change` parts 1–3); 5.1 (assembly, no choice).
- Supplier check: `lem-hh-commuting-left-right-hecke-length-operators` [F1]; `def-hh-universal-coxeter-hecke-parameters-and-presentation` [F2] (the direct A1 edge requested at Step 3a is present); `lem-hh-reduced-word-independence-and-length-multiplication` [F3]; `lem-hh-universal-presentations-and-base-change` [F6]; free module [F4]; `def-endomorphism-ring-of-a-module`/`prop-endomorphisms-form-a-ring`/`def-algebra-over-a-commutative-ring` [F5].
- Repairs: none needed. Choice: none. Open gaps: none. Next: item 5.

### 5. `lem-hh-hecke-anti-involution-bar-and-normalization` (level 7)

- Claim adopted: the reversal anti-involution $\#$ with $T_s^{\#}=T_s$, $T_w^{\#}=T_{w^{-1}}$; generator invertibility $T_s^{-1}=T_s-(v_s-v_s^{-1})$ and the reverse-order product formula; the $\sigma$-semilinear bar operator ($v_i\mapsto v_i^{-1}$) with $\overline{T_s}=T_s^{-1}$, involutive, $\overline{T_w}=T_{w^{-1}}^{-1}$; the normalization $S_s=v_sT_s$, $Q_s=v_s^2$, $(S_s-Q_s)(S_s+1)=0$, $S_s^{-1}=v_s^{-1}(T_s-(v_s-v_s^{-1}))$, $T_s=v_s^{-1}S_s$.
- Steps verified: 1.1 (reversal is an involutive anti-automorphism; the quadratic generator is fixed; the braid generator is mapped into the ideal, see repair); 1.2 (inverses from the quadratic relation); 1.3 ($\sigma$ exists, is involutive, fixes the coefficient subring); 2.1 (bar descends through $I$, is involutive and satisfies the two bar identities); 2.2 (normalization by substitution); 3.1 (assembly, no choice).
- Repair (mathematical): the braid-generator line claimed $a_1^{\#}=a_2$, $a_2^{\#}=a_1$ unconditionally; this is false for odd $m(s,t)$ because the alternating word of length $m$ is then a palindrome (e.g. $T_sT_tT_s$ is reversal-fixed). Replaced by the parity-correct statement: reversal fixes each alternating product for odd $m$ and swaps the two for even $m$, so $(a_1-a_2)^{\#}=\pm(a_1-a_2)$ in all cases and the ideal is preserved. The rest of the descent argument was already correct.
- Supplier check: `lem-hh-free-associative-ring-and-relations-descent` [F1] (the free-associative direct edge requested at Step 3a is present); `def-hh-universal-coxeter-hecke-parameters-and-presentation` [F2]; `thm-hh-generic-coxeter-hecke-standard-basis` [F3]; `def-hh-coxeter-matrix-word-group-and-length` [F4]; `lem-hh-finite-polynomial-and-localization-constructions` [F5].
- Choice: none. Open gaps: none. Next: item 6.

### 6. `ex-hh-unequal-parameter-dihedral-consistency` (level 7)

- Claim adopted: in dihedral rank two, odd $m$ forces equal parameter differences (the commutation check at the longest alternating element yields $(u_t-u_s)e_z$, vanishing iff $u_s=u_t$, i.e. $v_t=v_s$ or $v_t=-v_s^{-1}$ in the universal Laurent ring); even $m$ leaves the two parameters free (no configuration (v)/(vi) occurs since the generators are not conjugate), and the standard basis exists for independent units by base change.
- Steps verified: 1.1 (six-configuration classification; identical expansions in (i)–(iv)); 2.1 (odd case: $\xi=(st)^ks$, $s\xi=\xi t=z$, $\ell(z)=m-1$, configuration (v), difference $(u_t-u_s)e_z$); 2.2 (even case: conjugacy argument excludes (v)/(vi)); 3.1 (assembly).
- Repair: step 2.1 claimed the literal chain $s\xi=s(st)^ks=(st)^{k+1}$; corrected to the $W$-computation $s\xi=s(st)^ks=(ts)^k=(st)^{-k}=(st)^{k+1}=\xi t$ (using $(st)^{-1}=ts$ and $(st)^m=1$ with $m-k=k+1$), with an explicit note that the values are elements of $W$. Manifest strategy 3.2's stale expansion (extra $e_{wt}$ terms) corrected to the two expansions of configuration (v).
- Supplier check: `def-hh-universal-coxeter-hecke-parameters-and-presentation` [F1] (parameter rule and difference-only dependence); `lem-hh-commuting-left-right-hecke-length-operators` [F2] (two-length lemma); `def-hh-coxeter-matrix-word-group-and-length`; `thm-hh-coxeter-exchange-deletion-and-faithfulness`; `lem-hh-dihedral-root-recurrence-and-root-sign` [F3] (ambient reducedness); `lem-hh-finite-polynomial-and-localization-constructions` [F5] (domain and solution set); `thm-hh-generic-coxeter-hecke-standard-basis` [F4].
- Choice: none. Open gaps: none. Next: item 7.

### 7. `ex-hh-hecke-specialization-at-v-equals-one` (level 8)

- Claim adopted: for units $u_s$ constant on classes, $H_A=A\otimes_RH$ is free with basis $(1\otimes T_w)$; at $u_s=1$, $\Phi:H_A\to A[W]$, $T_s\mapsto s$, is an $A$-algebra isomorphism carrying the standard basis to the group basis; for general units the map $T_s\mapsto s$ exists iff $u_s^2=1$ (over a field $u_s=\pm1$), so $v\mapsto1$ and $v\mapsto-1$ both give the group ring.
- Steps verified: 1.1 (specialized presentation and $\Phi$); 1.2 (converse $\Psi$ via the relator check $(T_sT_t)^m=1$ from the braid relation with $T_s^2=T_t^2=1$); 2.1 (mutually inverse, basis-to-basis); 2.2 (general-unit obstruction $-(u_s-u_s^{-1})s=0$ against the group basis; $u^2=1$ cases); 3.1 (assembly).
- Repairs: none to the item; the manifest statement mirror was synchronized to the authored $Q_s$ (subscripted) normalization notation.
- Supplier check: `lem-hh-universal-presentations-and-base-change` [F4]; `thm-hh-generic-coxeter-hecke-standard-basis` [F2]; `lem-hh-hecke-anti-involution-bar-and-normalization` [F3]; `def-group-ring`/`thm-group-ring-is-a-unital-algebra-with-basis-g` [F6]; `def-hh-coxeter-matrix-word-group-and-length` [F7]; free algebra [F8]; Laurent ring [F5].
- The two application pages named (`principal-series-representations-of-gl-n-over-a-finite-field`, `hecke-markov-traces-and-polynomial-link-invariants`) remain reading pointers only; no item depends on them.
- Choice: none. Open gaps: none. Next: item 8.

### 8. `ex-hh-rank-one-hecke-multiplication-in-both-normalizations` (level 8)

- Claim adopted: $S=\{s\}$, $W=\mathbb Z/2$; basis $\{1,T_s\}$ with $T_s^2=(v-v^{-1})T_s+1$ and $T_s^{-1}=T_s-(v-v^{-1})$; basis $\{1,S_s\}$ with $S_s=vT_s$, $S_s^2=(Q-1)S_s+Q$, $(S_s-Q)(S_s+1)=0$, $S_s^{-1}=Q^{-1}(S_s+1-Q)$; the conversion $T_s=v^{-1}S_s$ both ways, over the domain $R$ and every base change.
- Steps verified: 1.1 (basis and normalized table); 1.2 (multiplicative table and inverse, explicit identities); 2.1 (conversion, domain, base change, no choice).
- Repairs: none needed. Choice: none. Open gaps: none. Next: item 9.

### 9. `ex-hh-s3-hecke-multiplication-table-in-both-normalizations` (level 8)

- Claim adopted: the complete $6\times6$ left-multiplication table in the normalized basis $\{T_w\}$ for $W=S_3$, the multiplicative $S$-rules $S_sS_w=S_{sw}$ / $QS_{sw}+(Q-1)S_w$ with the two generator rows and the explicit $S_{w_0}S_{w_0}$, and the sanity checks.
- Independent verification: both tables were recomputed with exact symbolic arithmetic (Laurent polynomials in $v$, then in $Q$) from the multiplication rules alone. All 36 normalized entries match the item, including $T_{w_0}T_{w_0}=T_1+u(T_s+T_t)+u^2(T_{st}+T_{ts})+(u^3+u)T_{w_0}$; the multiplicative rows and $S_{w_0}S_{w_0}=Q^3S_1+(Q^3-Q^2)(S_s+S_t)+(Q^3-2Q^2+Q)(S_{st}+S_{ts})+(Q^3-2Q^2+2Q-1)S_{w_0}$ match; the $v=1$ reductions give the group-ring table.
- Repairs: the item table was already correct; the manifest `statement` table (stale $u^2-2$ coefficients) and strategy 2.3 were synchronized to the correct entries.
- Supplier check: `def-hh-universal-coxeter-hecke-parameters-and-presentation` [F1]; `lem-hh-reduced-word-independence-and-length-multiplication` [F2]; `thm-hh-generic-coxeter-hecke-standard-basis` [F3]; `lem-hh-hecke-anti-involution-bar-and-normalization` [F4]; `def-hh-coxeter-matrix-word-group-and-length` and `thm-hh-parabolic-minimal-representatives-and-length-additivity` [F5].
- The wikilink to `ex-hh-hecke-specialization-at-v-equals-one` is a same-page forward pointer, not load-bearing (the $v=1$ reduction is a direct substitution in the displayed table); the depcheck `cited-not-in-deps` warning is reviewed and accepted, and the item is not made a dependency of a later item.
- Choice: none. Open gaps: none.

## Dependency-record reconciliation (Step 3a follow-ups)

All four Step-3a dependency-record observations are resolved in the final content: (1) `thm-hh-matsumoto-reduced-word-theorem` is now a direct dep of `lem-hh-commuting-left-right-hecke-length-operators` (used at step 4.1); (2) `def-hh-universal-coxeter-hecke-parameters-and-presentation` is a direct dep of `thm-hh-generic-coxeter-hecke-standard-basis` (used at step 1.1); (3) `lem-hh-free-associative-ring-and-relations-descent` is a direct dep of `lem-hh-hecke-anti-involution-bar-and-normalization` (used at step 1.1); (4) the operator interface is cited through `def-module-homomorphism-kernel-image-and-cokernel` (+ `def-endomorphism-ring-of-a-module`) instead of the field-only `def-linear-map`. Levels were recomputed after the manifest pass: `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports no finding for any `hh-` item of this pair; computed levels are 1, 5, 5, 6, 7, 7, 8, 8, 8 and each matches the item frontmatter and manifest entry.

## Supplier reconciliation (in-run prerequisite pairs) and open obligations

Every supplier used by this pair now exists on disk as an authored draft and its current statement supports the named use. Checked against the supplier statements on 2026-10-07 (this Step 3b), with the consumer-ID/step map:

- `def-hh-coxeter-matrix-word-group-and-length` → def (Definition, [F4], step 1.4), lem-reduced ([F3]/[F4], steps 2.1/3.1/4.1), lem-commuting ([F5], steps 1.5/3.1), thm (Statement), anti-involution ([F4], step 1.1), ex-unequal (Definition), ex-s3 ([F5], step 1.1), ex-specialization ([F7], steps 1.1/1.2), rank-one ([F2], step 1.1).
- `lem-hh-free-associative-ring-and-relations-descent` → def ([F1], Definition/step 1.2), lem-reduced ([F5], step 4.1), anti-involution ([F1], step 1.1), ex-specialization ([F8], step 1.1).
- `lem-hh-finite-polynomial-and-localization-constructions` → def ([F2], steps 1.2/1.5), anti-involution ([F5], step 1.3), ex-unequal ([F5], step 2.1), rank-one ([F1]/[F5], step 2.1), ex-specialization ([F5], step 3.1).
- `lem-hh-universal-presentations-and-base-change` → thm ([F6], step 4.2), ex-specialization ([F4], steps 1.1/2.2).
- `lem-hh-dihedral-root-recurrence-and-root-sign` → lem-commuting ([F3], step 3.1), ex-unequal ([F3], steps 2.1/2.2).
- `thm-hh-coxeter-exchange-deletion-and-faithfulness` → lem-reduced ([F3], steps 2.1/3.1), lem-commuting ([F1], steps 1.1–1.3), ex-unequal ([F2], steps 1.1/2.2).
- `thm-hh-matsumoto-reduced-word-theorem` → lem-reduced ([F1], step 1.1), lem-commuting ([F4], step 4.1).
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` → ex-s3 ([F5], step 1.1).

Open obligation: these two sibling pairs are still in flight in this run. Item receipts bind to the suppliers' current bytes; if any listed supplier statement is rewritten before the Step-3 gate, the named use sites must be re-verified in the pre-gate recertification pass (CLAUDE §21) and by Step 5. No escalation is recorded: every supplier is authored and its statement, as of this check, licenses the use. No item of this pair is blocked.

## Cross-batch dependency input

`research/frontier-42-coxeter-32-batch-3.cross-batch-dependencies.json`: all 29 rows (2 page prerequisites and 27 item edges) were updated from `open` to `verified` with exact required-claim, use-location and resolution evidence for this pair's consumers, and the unified ledger was refreshed (`node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` — refreshed and deduplicated). No row was deleted; sibling rows in other batches were not touched.

## Checks actually run (2026-10-07, on the final content)

| Check | Command | Result |
|---|---|---|
| Proof format (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts` on the 9 owned items | 9 checked, 0 failing |
| Rendering | `node tools/rendercheck.mjs` on the 9 items + both pages | 11 files OK (YAML, math/KaTeX, links) |
| Content policy | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-3.pages.json` | 9 scoped items, 0 errors, 0 warnings |
| Dependency graph | `node tools/depcheck.mjs --items-file <9 ids>` | OK; 3 reviewed warnings (`cited-not-in-deps` for same-page forward pointers in lem-commuting, lem-reduced, ex-s3) |
| Manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-3.pages.json` | 9 items, 0 errors |
| Strict proof contracts | `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-3.proof-contracts.json --strict` | 9/9 items, 0 errors, 0 warnings |
| Blue-chip layout | `node tools/proof-layout.mjs <all 9 item paths>` | 9 items, 48 steps, 0 defects |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no finding for any owned item; one run-wide error belongs to another pair (`ex-cg-reducible-semidefinite-forms-are-factorwise`: recorded 15, computed 16) |
| Coverage | `node tools/coverage-checklist.mjs ...batch-3.coverage.json --require-destination` | 1 page, 36 harvested results, 0 errors, 0 warnings |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | FAIL run-wide only on other pairs' undeclared-prereq findings; for this pair: 4 `redundant-prereq` warnings (below), no error |
| Manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 present, no scope drift |
| Step 3 decisions | `node tools/step3-decisions.mjs record-scope` (refresh) and `record-item` ×9; `check --phase final` | pair scope closed (`sufficient`); all 9 items accepted with current receipts |
| Source evidence | Step-3a fetch stamps retained (Lusztig, Geck, Björner–Brenti); locators re-read for the used passages | 3/3 sources fetch-verified; no source dropped |

The S3 tables were additionally recomputed with an exact independent script (not part of the repo gates), covering all 36 normalized products, the multiplicative generator rows and $S_{w_0}S_{w_0}$.

Post-verification supplier churn (same day, sibling writers): `research/frontier-42-coxeter-32-batch-1.pages.json` (21:00) and the proof body of `lem-hh-dihedral-root-recurrence-and-root-sign` (21:04) were rewritten after the first receipt pass. Both were re-inspected: the batch-1 manifest statement fields still match their item files, and the dihedral-root item's statement parts 3/7 (exact dihedral order, ambient reducedness of alternating words) are unchanged, so every use mapped below still holds; the nine item receipts were then re-recorded on the updated bytes (all nine `closed` at 2026-10-07 21:05 local / 10:05 UTC). Because receipts bind to the full shared closure, further sibling edits will stale them again; the engine's §21 pre-gate recertification and Step 5 re-check the final bytes.

## Findings for Step 4 (plan/prose) and other owners

- `[redundant-prereq]` warnings on the A page: the plan's `requires` list `[tensor-coherence-and-algebraic-descent, coxeter-presentations-exchange-and-reduced-word-theorems, polynomial-rings-and-roots]` now contains direct requirements already implied through the item-derived closure (3 warnings through the two other requires). The `requires` field is plan-spec-held; no change was made here. Step 4 may wish to leave it (the plan's reading-order intent) or normalize it.
- The plan-spec item arrays for orders 1710/1711 are empty by design (the scaffold items live in the batch manifests); `validate-plan` therefore lists 0 items for these pages and no item-level plan mismatch exists.
- Not owned, reported for the reconciler: `ex-cg-reducible-semidefinite-forms-are-factorwise` has `dependency_level` 15 against a computed 16 (coxeter track, another pair); the run-wide `validate-plan` failures are `undeclared-prereq` findings on other pages (e.g. `coxeter-descents-poincare-polynomials-and-growth`).

## Published concerns

None confirmed. The three Step-1 observations were re-checked and are not defects: the published `def-type-a-hecke-algebra-in-soergel-normalization` uses $q=v^{-2}$ while this pair records the conversion $T_s=v_s^{-1}S_s$, $S_s=v_sT_s$ (matched, not contradicted); the published finite-Hecke items built as $H(G,B)=e\mathbb C[G]e$ are not consumed here; and the standard basis is proved independently (evaluation at $e_1$) rather than taken from any Recorded result. Confidence: high for the checks actually performed; no published supplier used by this pair was found defective.

## Open obligations at handoff

1. Sibling suppliers (batch 1, batch 2) remain in flight; any rewrite of a supplier statement requires re-verification of the exact consumer/step uses mapped above (pre-gate recertification and Step 5).
2. Item receipts are bound to the current bytes of this pair's items and their shared closure (all nine receipts share large parts of the closure; a single later edit to any of the nine item files or to `research/frontier-42-coxeter-32-batch-3.pages.json` stales them and they must be re-recorded).
3. Step 4: the A-page `requires` redundancy warnings and the empty plan-spec item arrays.
4. Other pairs' open gates (run-wide `validate-plan`/levels findings above) are not this pair's obligations but block the run gate until their owners clear them.

## Handoff summary

- Completed IDs: all nine owned items fully authored, audited and accepted (see per-item checkpoints; four items carry mathematical repairs, two carry contract-mirror synchronizations).
- Checks run: precheck (9/9), rendercheck (11 files), content-policy (9/0/0), depcheck (OK, 3 reviewed warnings), manifest-deps (0 errors), strict proof-contracts (9/9), proof-layout (48 steps, 0 defects), item-dependency-levels (no owned finding), coverage-checklist (0/0), manifest-integrity (no drift), frontier-dependency-ledger refresh, step3-decisions scope refresh + 9 item receipts, plus an independent exact recomputation of both $S_3$ tables.
- Added suppliers: none (no new items or pages were created).
- Published concerns: none confirmed.
- Open obligations: the four listed above; none blocks the pair's own Step-3 acceptance.
