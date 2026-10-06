# Step 3b — scaffold audit, repair and authoring — `tensor-product-multiplicities-and-littlewood-richardson`

- Run `frontier-39-analysis-30`; role `alpha-high`; label
  `step3b-pair-tensor-product-multiplicities-and-littlewood-richardson-3ef76b6296bc5fa0`.
- Pair: A `tensor-product-multiplicities-and-littlewood-richardson` (order
  510.015) / B `tensor-product-multiplicities-and-littlewood-richardson-examples`
  (order 510.016), batch 22, category `lie-theory`. A has 19 scaffold items,
  B has 6. Step 3a decision: **sufficient** (scope receipt
  `research/frontier-39-analysis-30-step3a-review-tensor-product-multiplicities-and-littlewood-richardson.json`).

## Owned IDs (audit/author in this exact order)

| # | dependency_level | id | page |
|---|---|---|---|
| 1 | 0 | def-littlewood-richardson-tableau-and-coefficient | A |
| 2 | 0 | def-minuscule-weight | A |
| 3 | 0 | def-polynomial-glr-highest-weights-as-partitions | A |
| 4 | 0 | def-tensor-product-multiplicity-for-highest-weight-modules | A |
| 5 | 0 | lem-bender-knuth-involutions-on-semistandard-tableaux | A |
| 6 | 1 | def-schur-module-and-schur-polynomial-character | A |
| 7 | 1 | lem-minuscule-weights-are-the-weyl-orbit | A |
| 8 | 1 | cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr | B |
| 9 | 2 | prop-semistandard-tableaux-expand-schur-characters | A |
| 10 | 3 | lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux | A |
| 11 | 3 | prop-determinant-twists-translate-glr-highest-weights | A |
| 12 | 3 | prop-tensor-product-multiplicities-are-character-structure-constants | A |
| 13 | 4 | thm-littlewood-richardson-tensor-product-rule | A |
| 14 | 5 | cor-horizontal-pieri-rule | A |
| 15 | 5 | cor-vertical-pieri-rule | A |
| 16 | 5 | prop-littlewood-richardson-coefficients-stabilize-with-rank | A |
| 17 | 5 | ex-a-littlewood-richardson-coefficient-greater-than-one | B |
| 18 | 6 | cor-minuscule-tensor-product-rule | A |
| 19 | 6 | lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient | A |
| 20 | 6 | cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank | B |
| 21 | 6 | ex-littlewood-richardson-product-s21-times-s1 | B |
| 22 | 7 | thm-steinberg-tensor-product-multiplicity-formula | A |
| 23 | 7 | ex-three-tensor-three-for-sl3 | B |
| 24 | 8 | cor-racah-speiser-tensor-product-algorithm | A |
| 25 | 9 | ex-clebsch-gordan-decomposition-for-sl2 | B |

All 25 items and both pages exist on disk, are registered in
`research/frontier-39-analysis-30-batch-22.pages.json`, coverage and the batch
proof contract, and pass every Step-3b mechanical gate listed below.

## Open obligations — status at handoff

- **OB-1 (in-run unfinished supplier pair). RESOLVED during Step 3b.** The
  nine batch-21 suppliers of `weyl-character-and-multiplicity-formulas`
  (`def-completed-formal-character-ring-for-downward-cones`,
  `def-formal-character-of-a-finite-dimensional-weight-module`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `def-weyl-alternation-operator`,
  `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
  `lem-weyl-length-parity-is-multiplicative`,
  `lem-weyl-alternants-are-skew-invariant`,
  `lem-geometric-series-invertibility-in-the-completed-character-ring`,
  `thm-weyl-character-formula`) were authored on disk while this pair was being
  audited. All 22 declared batch-22 cross-batch edges were re-checked against the
  authored supplier statements (exact quotes are recorded per citation in
  `research/frontier-39-analysis-30-batch-22.proof-contracts.json`) and marked
  `verified` in
  `research/frontier-39-analysis-30-batch-22.cross-batch-dependencies.json`; the
  ledger refresh lists batch 22 among the reviewed batches with no orphaned
  reviews. Two spot-checks with exact text: `lem-weyl-alternants-are-skew-invariant`
  supplies "for all $w\in W$ and $\nu$: $w\cdot A(\nu)=(-1)^{\ell(w)}A(\nu)$,
  and if a simple reflection $s_i$ fixes $\nu$ then $A(\nu)=0$" (used by
  `cor-minuscule-tensor-product-rule` step 1.2), and
  `lem-weyl-length-parity-is-multiplicative` supplies "In particular
  $(-1)^{\ell(w^{-1})}=(-1)^{\ell(w)}$" (used by
  `thm-steinberg-tensor-product-multiplicity-formula` step 3.1). The supplier
  files were still being written when first inspected (mtimes within the
  session); any later supplier edit invalidates the affected contract quotes,
  which the merged strict contract gate re-checks at Step 4.
- **OB-2 (Step 4 `requires` reconciliation, Step 3a finding). OPEN.** Twelve
  immediate item dependency edges of this pair land on four published
  `representation-theory` A pages outside the closure of the A page's declared
  `requires`: `young-diagrams-tableaux-and-permutation-modules`,
  `specht-modules-and-the-irreducibles-of-the-symmetric-group`,
  `the-branching-rule-and-the-young-graph`,
  `symmetric-functions-hall-inner-product-and-schur-bases`. All suppliers are
  published and present; no unmet prerequisite. Proposed Step 4 action: enrich
  the A page `requires` (or record a non-load-bearing disposition). No scaffold
  edit made here.
- **OB-3 (source drop, owner confirmation, carried from Step 1). SETTLED.** The
  design's Humphreys §24.4 source is a documented drop; the mathematics is
  supplied by Goodman--Wallach Cor. 7.1.6--7.1.7 and Knapp Ch. IX §8 Problems
  16--17 with printed solutions. Not re-litigated here.
- **OB-4 owner decision—retain the count theorem, remove the unsupported map.**
  Stembridge's pp. 2–3 proof establishes the admissible-tableau expansion but
  leaves the comparison exercise; Macdonald §I.9, (9.2)–(9.4), proves the
  required per-$\nu$ count identity by the complete Littlewood–Robinson
  algorithm. The item and manifest now state that count identity and retain the
  LR tensor-multiplicity conclusion, without claiming the ill-typed assignment
  $T\mapsto\nu(T)$ is a bijection. The displayed $U(T)$ map and the 191-case
  finite probe are removed as support for a general theorem. Owner scope
  approval and owner `repaired` item receipt are recorded on the corrected
  statement; the run-wide final check will recheck its transitive hash.

## Item checkpoints

Each checkpoint records the claim and conventions, source locators, examined
dependencies, the Step-3b decision, checks, gaps and next action.

### 1. `def-littlewood-richardson-tableau-and-coefficient` (level 0, A)

- **Claim/conventions.** Fixes the reading word (rows right-to-left, top row
  first), the lattice-word condition (every prefix has at least as many $i$'s as
  $i+1$'s), LR tableaux as the semistandard skew tableaux whose reading word is a
  lattice word, and $c^\nu_{\lambda\mu}$ as their number, with the conventions
  $c^\lambda_{\lambda\varnothing}=1$ and $c^\nu_{\lambda\mu}=0$ when
  $[\lambda]\not\subseteq[\nu]$ or $|\nu|\ne|\lambda|+|\mu|$ (English
  coordinates). Choice-free.
- **Sources.** Stembridge, EJC 9 (2002) #N5, printed pp. 1--4 (tableau and
  weight conventions, Bender--Knuth involutions p. 2, bi-alternant theorem
  pp. 2--3); the lattice-permutation form and the coefficient recursion of
  Macdonald §I.9, printed pp. 142--148, are used downstream.
- **Deps.** `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-semistandard-tableau-and-kostka-number`,
  `def-partition-young-diagram-and-conjugate-partition` (all published,
  present).
- **Decision.** `accept`. No gaps; the definition lists no AC dependence.
- **Next.** Step 4 splice; consumer `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`.

### 2. `def-minuscule-weight` (level 0, A)

- **Claim/conventions.** Minuscule means $\langle\omega,\beta^\vee\rangle\le1$
  for every positive root; the item derives the equivalent absolute-value form
  over all roots, records that $0$ is minuscule and fixes the reflection action.
  AC is stated.
- **Sources.** Etingof 18.755 §30.1--30.2, printed pp. 158--160 (Definition
  30.1 and the equivalence with $|\langle\omega,\beta^\vee\rangle|\le1$).
- **Deps.** `def-integral-dominant-and-strictly-dominant-weights`,
  `def-coroot-of-a-lie-algebra-root`,
  `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
  `thm-the-root-set-is-a-reduced-crystallographic-root-system`,
  `def-fundamental-weights`.
- **Decision.** `accept`. The absolute-value equivalence needs only
  $\omega$ dominant integral, which is supplied.
- **Next.** Consumed by `lem-minuscule-weights-are-the-weyl-orbit`,
  `cor-minuscule-tensor-product-rule`, `ex-three-tensor-three-for-sl3`.

### 3. `def-polynomial-glr-highest-weights-as-partitions` (level 0, A)

- **Claim/conventions.** Polynomial versus rational representations of
  $\operatorname{GL}(V)$; weight-space decomposition for the diagonal torus;
  weights of polynomial representations are nonnegative; highest weights of
  polynomial irreducibles are partitions with at most $r$ parts. AC is stated.
- **Sources.** Seynnaeve, Ch. 9 Definition 9.1, Remarks 9.4--9.6, printed
  pp. 51--52, and Ch. 11; Etingof §27.2--27.3, printed pp. 145--147;
  Goodman--Wallach Thm. 5.5.22, printed pp. 273--275.
- **Deps.** `thm-schur-weyl-decomposition-with-length-cutoff`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-commuting-symmetric-and-linear-actions-on-tensor-power`.
- **Decision.** `accept`. The parenthetical "equivalently, in every pair of
  bases" is part of the definition and is disposed of by the two `iff` boundary
  rows of its contract.
- **Next.** Consumed by the Schur-module and tensor-rule items.

### 4. `def-tensor-product-multiplicity-for-highest-weight-modules` (level 0, A)

- **Claim/conventions.** Defines $c^\nu_{\lambda\mu}$ by the finite
  decomposition of $L(\lambda)\otimes L(\mu)$ into simples, with uniqueness of
  the integers, finiteness from the weight bound $\lambda+\mu-Q_+$, and the
  Schur-lemma description $c^\nu_{\lambda\mu}=\dim\operatorname{Hom}_{\mathfrak g}(L(\nu),L(\lambda)\otimes L(\mu))$.
  AC is stated.
- **Sources.** Etingof §27.1, printed p. 145, with §26.1--26.2 for the
  character conventions.
- **Deps.** `def-axiom-of-choice`, `thm-weyls-complete-reducibility-theorem`,
  `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
  `prop-direct-sum-dual-hom-and-tensor-representations`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`,
  `def-partial-order-on-weights`,
  `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `cor-schurs-lemma-for-irreducible-lie-algebra-representations`.
- **Decision.** `accept`. Finiteness is argued inside the Definition from the
  compact box $0\le\langle\nu,\alpha_i^\vee\rangle\le\langle\lambda+\mu,\alpha_i^\vee\rangle$.
- **Next.** Root of every A-page tensor-multiplicity item.

### 5. `lem-bender-knuth-involutions-on-semistandard-tableaux` (level 0, A)

- **Claim/conventions.** Bender--Knuth involutions $\sigma_k$: (i) free cells
  of a row are consecutive; (ii) the complementary-count replacement produces a
  semistandard tableau of the same shape with entries in $\{1,\dots,r\}$;
  (iii) $\sigma_k$ is an involution preserving the free cells with
  $\operatorname{wt}(\sigma_k(T))=s_k\operatorname{wt}(T)$; consequently the
  tableau generating series is symmetric. Choice-free (level 0, no AC row).
- **Sources.** Stembridge, printed p. 2 (explicit description; the relation
  $\omega(\sigma_k(T))=s_k\omega(T)$).
- **Deps.** `def-semistandard-tableau-and-kostka-number`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-partition-young-diagram-and-conjugate-partition`.
- **Decision.** `repaired`. Format repair (reflow; `steps` → `step` tag tokens)
  and canonical dependency-layer renumbering/reordering to steps 1.1, 1.2, 2.1,
  3.1, 4.1, 5.1. No mathematical change; the weight bijection of step 4.1
  (non-free $k$'s to non-free $k+1$'s in the same column) was re-read and is
  exact.
- **Next.** Consumed by `prop-semistandard-tableaux-expand-schur-characters`
  and `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`.

### 6. `def-schur-module-and-schur-polynomial-character` (level 1, A)

- **Claim/conventions.** $S_\lambda(V)=\operatorname{Hom}_{S_n}(S^\lambda,V^{\otimes n})$
  with postcomposition $\operatorname{GL}(V)$-action; nonzero irreducible
  polynomial of highest weight $\lambda$ for $\ell(\lambda)\le r$, zero
  otherwise; character additive, multiplicative and symmetric; $S_\lambda(V)=0$
  iff $\ell(\lambda)>r$. AC is stated.
- **Sources.** Seynnaeve Ch. 11 Definition 11.1, Theorems 11.6--11.8, printed
  pp. 54--56; Ch. 9, pp. 51--52; Etingof §27.4, §28.1, printed pp. 147--151.
- **Deps.** `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-commuting-symmetric-and-linear-actions-on-tensor-power`,
  `thm-schur-weyl-decomposition-with-length-cutoff`,
  `def-polynomial-glr-highest-weights-as-partitions`.
- **Decision.** `accept`. The Hom-space model (rather than the Young
  symmetriser image) is recorded in the Step-1 notes and is exactly the model
  of the cited Schur--Weyl theorem.
- **Next.** Consumed by all type-$A$ items of the pair.

### 7. `lem-minuscule-weights-are-the-weyl-orbit` (level 1, A)

- **Claim/conventions.** Equivalence of (1) $\omega$ minuscule, (2) every weight
  of $L(\omega)$ lies in $W\omega$, (3) every dominant integral $\lambda$ with
  $\omega-\lambda\in Q_+$ equals $\omega$; plus the orbit-sum and multiplicity-one
  consequences. AC is stated.
- **Sources.** Etingof §30.1--30.2, printed pp. 158--160 (Definition 30.1,
  Lemmas 30.2--30.3, Propositions 30.4, Corollaries 30.5 and 30.7).
- **Deps.** `def-minuscule-weight`, `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`,
  `prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`,
  `lem-finite-weyl-closed-chambers-and-stabilizers`, `thm-root-sl-two-triple`,
  `thm-finite-dimensional-representations-of-sl-two`,
  `prop-root-vectors-shift-weight-spaces`, `def-fundamental-weights`,
  `def-coroot-and-dual-root-system`, `def-height-of-a-root-and-highest-root`,
  `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`,
  `thm-the-root-set-is-a-reduced-crystallographic-root-system`,
  `lem-positive-root-pairings-of-a-dominant-integral-weight`.
- **Decision.** `repaired`. Fixed the $m_i\ge1$ argument of step 2.2: the
  pairing $\langle\beta,\alpha_i^\vee\rangle$ is the positive integer
  $1-\langle\lambda,\alpha_i^\vee\rangle\le1$, hence $=1$, and
  $2m_i=1+\sum_{j\ne i}m_j|\langle\alpha_i,\alpha_j^\vee\rangle|\ge1$ with
  $m_i$ integral gives $m_i\ge1$ (the previous text had the equality on the
  wrong side). Also format repair and canonical layer renumbering/reordering to
  steps 1.1--4.1. Re-read: the three implications are closed by step 3.1
  ((1)$\Rightarrow$(3)), step 2.3 ((3)$\Rightarrow$(2)) and step 1.4
  ((2)$\Rightarrow$(1)); step 1.1 is the support reduction and step 1.2 the
  root-lattice lemma.
- **Next.** Consumed by `cor-minuscule-tensor-product-rule` and
  `ex-three-tensor-three-for-sl3`.

### 8. `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr` (level 1, B)

- **Claim/conventions.** Refutes "semistandard $\Rightarrow$ LR" with $T$ of
  shape $(2,1)$, rows $1\,3$ and $2$: content $(1,1,1)$, reading word $3\,1\,2$
  fails at its first prefix; sharpness (the only two fillings both fail) and
  $c^{(2,1)}_{\varnothing,(1,1,1)}=0$. Choice-free.
- **Sources.** Stembridge printed pp. 1--4 for the reading-word/lattice
  conventions; the finite instance was checked directly against them.
- **Deps.** `def-littlewood-richardson-tableau-and-coefficient`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-semistandard-tableau-and-kostka-number`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `thm-skew-jacobi-trudi-and-tableau-expansion`,
  `def-stable-schur-function-by-bialternants`.
- **Decision.** `repaired`. Added `proof_strategy: counterexample`; format
  repair and canonical renumbering (steps 1.1--3.1). The two fillings and both
  reading words were re-checked by hand.
- **Next.** B-page companion only; no consumer.

### 9. `prop-semistandard-tableaux-expand-schur-characters` (level 2, A)

- **Claim/conventions.** $\operatorname{ch}S_\lambda(V)=\sum_Tx^{\operatorname{wt}(T)}=s_\lambda(x_1,\dots,x_r)$
  for $\ell(\lambda)\le r$; the weight-$\nu$ dimension is the Kostka number;
  $S_\lambda(V)\ne0$ iff $\ell(\lambda)\le r$; symmetry of the tableau series.
  AC is stated.
- **Sources.** Etingof §29.1--29.2, printed pp. 155--157 (Schur polynomials
  and the tableau expansion); §27.4, pp. 147--150 (Schur--Weyl); Seynnaeve
  Ch. 11, pp. 54--56.
- **Deps.** The 14 listed in the manifest plus, added in this audit,
  `def-commuting-symmetric-and-linear-actions-on-tensor-power` ([F3] cites it).
- **Decision.** `repaired`. Declared the missing dependency in frontmatter and
  manifest; format repair; canonical renumbering (steps 1.1--5.1).
- **Next.** Consumed by the Littlewood--Richardson rule, the Pieri rules and
  the B-page examples.

### 10. `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` (level 3, A)

- **Claim/conventions.** Bi-alternant expansion
  $a_{\lambda+\rho_r}s_\mu=\sum_{T\text{ admissible}}a_{\lambda+\operatorname{wt}(T)+\rho_r}$;
  sign-reversing cancellation of non-admissible tableaux; identification of
  admissible tableaux with LR tableaux via the displayed map $U(T)$; the
  multiplicity statement $[S_\lambda(V)\otimes S_\mu(V):S_\nu(V)]=c^\nu_{\lambda\mu}$.
  AC is stated.
- **Sources.** Stembridge printed pp. 2--3 (bi-alternant theorem,
  sign-reversing involution, Zelevinsky corollary); Macdonald §I.9, printed
  pp. 142--148, (9.2)/(9.4) (complete proof of the comparison in the
  Littlewood--Robinson formulation).
- **Deps.** `prop-semistandard-tableaux-expand-schur-characters`,
  `def-stable-schur-function-by-bialternants`,
  `thm-skew-jacobi-trudi-and-tableau-expansion`,
  `lem-bender-knuth-involutions-on-semistandard-tableaux`,
  `def-schur-module-and-schur-polynomial-character`,
  `thm-schur-weyl-decomposition-with-length-cutoff`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`,
  `def-dominance-order-on-partitions`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-semistandard-tableau-and-kostka-number`.
- **Decision.** Owner-repaired to the source-backed count identity in OB-4;
  no general bijection is claimed. The classical comparison is explicitly
  attributed to Macdonald's complete Littlewood--Robinson proof.
- **Next.** Stable Step-3 item receipt recertification and Step-4 `requires`
  reconciliation (OB-2).

### 11. `prop-determinant-twists-translate-glr-highest-weights` (level 3, A)

- **Claim/conventions.** $S_{\lambda+(k^r)}(V)\cong S_\lambda(V)\otimes\det{}^k$
  for $k\ge-\lambda_r$ (the range in which $\lambda+(k^r)$ is a partition), and
  the resulting parametrisation of all irreducible rational
  $\operatorname{GL}(V)$-modules as $S_\lambda(V)\otimes\det{}^k$ with
  $\ell(\lambda)\le r$, $k\in\mathbb Z$. AC is stated.
- **Sources.** Seynnaeve §12.1 Proposition 12.1, printed pp. 59--60;
  Goodman--Wallach Thm. 5.5.22, printed pp. 273--275; Etingof §27.
- **Deps.** `def-schur-module-and-schur-polynomial-character`,
  `def-polynomial-glr-highest-weights-as-partitions`,
  `prop-semistandard-tableaux-expand-schur-characters`,
  `def-stable-schur-function-by-bialternants`,
  `cor-the-top-exterior-power-acts-by-the-determinant`,
  `cor-determinant-multiplicativity-from-the-top-exterior-power`,
  `def-partition-young-diagram-and-conjugate-partition`.
- **Decision.** `repaired`. Removed a self-citation (`step 1.2` inside the
  trailing tag of step 1.2), de-duplicated a repeated contract citation of
  `def-minuscule-weight`, format repair and canonical renumbering (steps 1.1,
  2.1, 3.1).
- **Next.** Supplies the Pieri-adjacent rank bookkeeping used by the examples.

### 12. `prop-tensor-product-multiplicities-are-character-structure-constants` (level 3, A)

- **Claim/conventions.** (i) $\operatorname{ch}(L(\lambda)\otimes L(\mu))=\sum_\nu c^\nu_{\lambda\mu}\operatorname{ch}L(\nu)$;
  (ii) the coefficients of $\operatorname{ch}V$ in the simple characters equal
  the composition multiplicities, and the simple characters are linearly
  independent; (iii) the weight-multiplicity formula
  $\dim(L(\lambda)\otimes L(\mu))_\gamma=\sum_{\sigma+\tau=\gamma}m_\lambda(\sigma)m_\mu(\tau)$.
  AC is stated.
- **Sources.** Goodman--Wallach Cor. 7.1.6--7.1.7, printed pp. 333--334; the
  completed-character-ring conventions of the batch-21 pair.
- **Deps.** `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `def-formal-character-of-a-finite-dimensional-weight-module`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `def-completed-formal-character-ring-for-downward-cones`,
  `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`,
  `def-weight-and-weight-space-of-a-lie-algebra-representation`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`,
  `def-partial-order-on-weights`,
  `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Format repair and canonical renumbering/reordering
  (steps 1.1, 1.2, 2.1, 3.1). OB-1 consumer: uses of the five batch-21
  suppliers were reconciled against the authored statements (ledger
  `verified`); the contract quotes them exactly.
- **Next.** Consumed by `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`.

### 13. `thm-littlewood-richardson-tensor-product-rule` (level 4, A)

- **Claim/conventions.** $S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\nu:\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}}$
  and the equivalent rank-$r$ character identity
  $s_\lambda s_\mu=\sum_{\nu:\ell(\nu)\le r}c^\nu_{\lambda\mu}s_\nu$; the
  coefficients do not depend on $r$. AC is stated.
- **Sources.** Etingof §27 (Schur--Weyl, GL$_r$), printed pp. 145--150;
  Seynnaeve Ch. 11, pp. 54--56; Stembridge pp. 1--4 for the LR counts.
- **Deps.** `def-schur-module-and-schur-polynomial-character`,
  `prop-semistandard-tableaux-expand-schur-characters`,
  `thm-schur-weyl-decomposition-with-length-cutoff`,
  `def-polynomial-glr-highest-weights-as-partitions`,
  `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`,
  `def-littlewood-richardson-tableau-and-coefficient`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-stable-schur-function-by-bialternants`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`.
- **Decision.** `repaired`. Replaced the mangled step-1.1 phrase "the saddle
  point is the multiplicity statement" by a direct statement of [F2]; format
  repair; canonical renumbering (steps 1.1, 2.1, 3.1); the contract citation
  [F3] → `def-partition-young-diagram-and-conjugate-partition` was replaced by
  the exact partition/size sentence of that definition.
- **Next.** Consumed by both Pieri rules and the rank-stabilisation item.

### 14. `cor-horizontal-pieri-rule` (level 5, A)

- **Claim/conventions.** $S_\lambda(V)\otimes\operatorname{Sym}^d(V)\cong\bigoplus_{\nu/\lambda\text{ horizontal}}S_\nu(V)$
  and $s_\lambda h_d=\sum_{\nu/\lambda\text{ horizontal}}s_\nu$, the sum over
  $\nu$ of size $|\lambda|+d$ with $\ell(\nu)\le r$ and $\nu/\lambda$ a
  horizontal strip, each multiplicity one. AC is stated.
- **Sources.** Etingof §29.1, printed pp. 155--157; Stembridge for the LR
  count.
- **Deps.** The eight originally declared plus, added in this audit,
  `def-semistandard-tableau-and-kostka-number`,
  `prop-semistandard-tableaux-expand-schur-characters`,
  `def-stable-schur-function-by-bialternants` ([F3]/[F4] cite them).
- **Decision.** `repaired`. Declared the three missing dependencies in
  frontmatter and manifest; format repair; canonical renumbering (steps 1.1,
  2.1, 3.1). Recomputed level from the manifest is still 5
  (`item-dependency-levels` reports no batch-22 mismatch).
- **Next.** Consumed by `ex-littlewood-richardson-product-s21-times-s1`.

### 15. `cor-vertical-pieri-rule` (level 5, A)

- **Claim/conventions.** $S_\lambda(V)\otimes\Lambda^d(V)\cong\bigoplus_{\nu/\lambda\text{ vertical}}S_\nu(V)$
  and $s_\lambda e_d=\sum s_\nu$, the sum over $\nu$ of size $|\lambda|+d$,
  $\ell(\nu)\le r$, with $\nu/\lambda$ a vertical strip, each multiplicity one.
  AC is stated.
- **Sources.** Etingof §29.1, pp. 155--157; Stembridge for the LR count.
- **Deps.** The nine originally declared plus the same three additions as the
  horizontal rule.
- **Decision.** `repaired`. Declared the three missing dependencies in
  frontmatter and manifest; format repair; canonical renumbering (steps 1.1,
  2.1, 3.1); level recomputed and unchanged (5).
- **Next.** Consumed by `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank`.

### 16. `prop-littlewood-richardson-coefficients-stabilize-with-rank` (level 5, A)

- **Claim/conventions.** (i) $c^\nu_{\lambda\mu}\ne0$ forces
  $\lambda\subseteq\nu$, $|\nu|=|\lambda|+|\mu|$, $\nu_1\le\lambda_1+\mu_1$
  and $\ell(\nu)\le\ell(\lambda)+\ell(\mu)$; (ii) the decomposition and
  character identity hold with the same coefficients for every
  $r\ge\max(\ell(\lambda),\ell(\mu))$, and no coefficient visible at larger
  rank is lost once $r\ge\ell(\lambda)+\ell(\mu)$. AC is stated.
- **Sources.** Stembridge pp. 1--4; Etingof §27; the rank conventions of
  `def-stable-schur-function-by-bialternants`.
- **Deps.** `def-littlewood-richardson-tableau-and-coefficient`,
  `def-semistandard-tableau-and-kostka-number`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `thm-littlewood-richardson-tensor-product-rule`,
  `def-schur-module-and-schur-polynomial-character`,
  `def-stable-schur-function-by-bialternants`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`,
  `def-partition-young-diagram-and-conjugate-partition`.
- **Decision.** `repaired`. Format repair and canonical renumbering/reordering
  (steps 1.1, 1.2, 2.1, 3.1); no statement change.
- **Next.** Consumed by the rank-cutoff counterexample.

### 17. `ex-a-littlewood-richardson-coefficient-greater-than-one` (level 5, B)

- **Claim/conventions.** $c^{(3,2,1)}_{(2,1),(2,1)}=2$ from the three
  fillings of the staircase skew shape $(3,2,1)/(2,1)$; the full expansion
  $s_{(2,1)}^2=s_{(4,2)}+s_{(4,1,1)}+s_{(3,3)}+2s_{(3,2,1)}+s_{(3,1,1,1)}+s_{(2,2,2)}+s_{(2,2,1,1)}$
  and the rank-3 dimension check $64=27+10+10+2\cdot8+1$. AC is stated.
- **Sources.** Stembridge pp. 1--4; the tableau enumeration was reproduced by
  the authoring probes (`/tmp/b22_lr_probe*.py`).
- **Deps.** `def-littlewood-richardson-tableau-and-coefficient`,
  `thm-littlewood-richardson-tensor-product-rule`,
  `def-schur-module-and-schur-polynomial-character`,
  `def-stable-schur-function-by-bialternants`,
  `prop-semistandard-tableaux-expand-schur-characters`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-semistandard-tableau-and-kostka-number`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Added `proof_strategy: direct`; format repair and
  canonical renumbering (steps 1.1, 2.1, 3.1, 4.1). The words $1,1,2$ and
  $1,2,1$ satisfy the lattice condition while $2,1,1$ fails at its first
  letter.
- **Next.** B-page companion only.

### 18. `cor-minuscule-tensor-product-rule` (level 6, A)

- **Claim/conventions.** $L(\omega)\otimes L(\lambda)\cong\bigoplus_{\gamma\in W\omega}L(\lambda+\gamma)$,
  terms with $\lambda+\gamma\notin\Lambda^+$ read as $0$, each surviving summand
  once; equivalently the character identity. AC is stated.
- **Sources.** Etingof §30.1--30.2, Cor. 30.5 and Cor. 30.7, printed
  pp. 158--164; Goodman--Wallach Cor. 7.1.7, pp. 333--334.
- **Deps.** `def-minuscule-weight`, `lem-minuscule-weights-are-the-weyl-orbit`,
  `thm-weyl-character-formula`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `lem-geometric-series-invertibility-in-the-completed-character-ring`,
  `lem-weyl-alternants-are-skew-invariant`, `def-weyl-alternation-operator`,
  `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `lem-finite-weyl-closed-chambers-and-stabilizers`.
- **Decision.** `repaired`. Format repair; canonical renumbering (steps 1.1,
  1.2, 2.1, 3.1); a boundary-evidence step reference corrected from 1.3 to
  2.1. OB-1 consumer: the wall-vanishing use of
  `lem-weyl-alternants-are-skew-invariant` and the cancellation use of
  `lem-geometric-series-invertibility-in-the-completed-character-ring` are
  exactly their authored statements (ledger `verified`).
- **Next.** Consumed by `ex-three-tensor-three-for-sl3`.

### 19. `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` (level 6, A)

- **Claim/conventions.** $[e^{\nu+\rho}]A(\rho)\operatorname{ch}V=[V:L(\nu)]$
  for dominant $\nu$, via
  $A(\rho)\operatorname{ch}V=\sum_\mu[V:L(\mu)]A(\mu+\rho)$ and
  $[e^{\nu+\rho}]A(\mu+\rho)=\delta_{\mu\nu}$. AC is stated.
- **Sources.** Goodman--Wallach Cor. 7.1.6--7.1.7, printed pp. 333--334;
  Knapp Ch. IX §8 Problems 15--24, printed pp. 611--612 with solutions
  pp. 747--748.
- **Deps.** `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `prop-tensor-product-multiplicities-are-character-structure-constants`,
  `thm-weyl-character-formula`, `def-weyl-alternation-operator`,
  `def-completed-formal-character-ring-for-downward-cones`,
  `lem-geometric-series-invertibility-in-the-completed-character-ring`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `thm-weyls-complete-reducibility-theorem`,
  `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
  `lem-finite-weyl-closed-chambers-and-stabilizers`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `def-finite-weyl-root-system-lattice-and-chamber-conventions`.
- **Decision.** `repaired`. Format repair and canonical renumbering/reordering
  (steps 1.1, 1.2, 2.1). OB-1 consumer: the numerator identity of the Weyl
  character formula, the alternation operator and the geometric-series
  invertibility are contract-quoted and ledger-verified.
- **Next.** Consumed by `thm-steinberg-tensor-product-multiplicity-formula`.

### 20. `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` (level 6, B)

- **Claim/conventions.** Suppressing $\ell(\nu)\le r$ from the LR tensor rule
  is false: $S_{(1,1,1)}(\mathbb C^2)=0$ while it is one-dimensional in rank 3;
  $c^{(1,1,1)}_{(1,1),(1)}=1$; the rank-2 identity is
  $S_{(1,1)}(\mathbb C^2)\otimes\mathbb C^2\cong S_{(2,1)}(\mathbb C^2)$ of
  dimension $1\cdot2=2$. AC is stated.
- **Sources.** Seynnaeve Ch. 9 and Ch. 11, printed pp. 51--56, §12.1
  pp. 59--60; Etingof §§27--30.
- **Deps.** `def-schur-module-and-schur-polynomial-character`,
  `thm-littlewood-richardson-tensor-product-rule`,
  `cor-vertical-pieri-rule`,
  `prop-littlewood-richardson-coefficients-stabilize-with-rank`,
  `cor-the-kth-exterior-power-vanishes-above-dimension`,
  `def-stable-schur-function-by-bialternants`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Added `proof_strategy: counterexample`; format
  repair; canonical renumbering (steps 1.1, 1.2, 2.1, 3.1). The dimension and
  vanishing computations were re-checked.
- **Next.** B-page companion only.

### 21. `ex-littlewood-richardson-product-s21-times-s1` (level 6, B)

- **Claim/conventions.** $s_{(2,1)}s_{(1)}=s_{(3,1)}+s_{(2,2)}+s_{(2,1,1)}$
  at rank $r\ge3$ with the third term dropping at $r=2$, and the corresponding
  module decomposition with multiplicity one; dimension checks $24=15+6+3$ and
  $4=3+1$. AC is stated.
- **Sources.** Stembridge pp. 1--4 (Pieri/LR counts); Etingof §29.1,
  pp. 155--157.
- **Deps.** `thm-littlewood-richardson-tensor-product-rule`,
  `cor-horizontal-pieri-rule`,
  `def-schur-module-and-schur-polynomial-character`,
  `def-littlewood-richardson-tableau-and-coefficient`,
  `def-stable-schur-function-by-bialternants`,
  `prop-semistandard-tableaux-expand-schur-characters`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Added `proof_strategy: direct`; format repair and
  canonical renumbering (steps 1.1, 2.1, 3.1). The three horizontal-strip
  partitions of size 4 over $(2,1)$ were enumerated by hand.
- **Next.** B-page companion only.

### 22. `thm-steinberg-tensor-product-multiplicity-formula` (level 7, A)

- **Claim/conventions.** $c^\nu_{\lambda\mu}=\sum_{w\in W}(-1)^{\ell(w)}m_\mu(w(\nu+\rho)-(\lambda+\rho))$
  and the equivalent $w\mapsto w^{-1}$ form, only finitely many summands
  nonzero. AC is stated.
- **Sources.** Goodman--Wallach Cor. 7.1.7, printed pp. 333--334 (complete
  proof); Knapp Ch. IX §8 Problem 17, printed pp. 611--612 with the printed
  solution pp. 747--748.
- **Deps.** `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `prop-tensor-product-multiplicities-are-character-structure-constants`,
  `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`,
  `thm-weyl-character-formula`,
  `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
  `lem-weyl-length-parity-is-multiplicative`,
  `def-formal-character-of-a-finite-dimensional-weight-module`,
  `def-completed-formal-character-ring-for-downward-cones`,
  `lem-geometric-series-invertibility-in-the-completed-character-ring`,
  `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`,
  `def-root-reflections-and-the-weyl-group-action`,
  `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
  `def-weight-and-weight-space-of-a-lie-algebra-representation`, plus, added
  in this audit, `prop-formal-characters-are-additive-and-multiplicative`.
- **Decision.** `repaired`. Declared the missing dependency in frontmatter and
  manifest ([F3] cites it); format repair; canonical renumbering (steps 1.1,
  2.1, 3.1). OB-1 consumer: $(-1)^{\ell(w^{-1})}=(-1)^{\ell(w)}$ is the
  "in particular" clause of the authored length-parity statement, and Weyl
  invariance of weight multiplicities is the authored invariance statement
  (both ledger-verified).
- **Next.** Consumed by `cor-racah-speiser-tensor-product-algorithm` and
  `ex-clebsch-gordan-decomposition-for-sl2`.

### 23. `ex-three-tensor-three-for-sl3` (level 7, B)

- **Claim/conventions.** $3\otimes3=6\oplus\bar3$, i.e.
  $c^{2\omega_1}_{\omega_1\omega_1}=c^{\omega_2}_{\omega_1\omega_1}=1$ and all
  other multiplicities zero, with the trivial module excluded and dimension
  check $6+3=9$. AC is stated.
- **Sources.** Etingof §30.1--30.2, printed pp. 158--164 (minuscule orbit
  $W\omega_1=\{\omega_1,\omega_2-\omega_1,-\omega_2\}$); §27 for the classical
  sl$_3$ description.
- **Deps.** `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `cor-minuscule-tensor-product-rule`, `def-minuscule-weight`,
  `lem-minuscule-weights-are-the-weyl-orbit`,
  `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
  `prop-root-systems-of-the-classical-complex-lie-algebras`,
  `def-classical-complex-matrix-lie-algebras`, `def-fundamental-weights`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Added `proof_strategy: direct`; format repair and
  canonical renumbering (steps 1.1, 2.1, 3.1). The three-element orbit (not
  six) and the exclusion of $L(0)$ were re-checked.
- **Next.** B-page companion only.

### 24. `cor-racah-speiser-tensor-product-algorithm` (level 8, A)

- **Claim/conventions.** $c^\nu_{\lambda\mu}=\sum_{\varphi\text{ regular},\ \nu(\varphi)=\nu}(-1)^{\ell(u(\varphi))}m_\mu(\varphi)$
  over weights of $L(\mu)$ regular relative to $\lambda$; irregular (wall)
  weights are discarded, and every $\nu$ with nonzero coefficient is attained
  by a regular weight. AC is stated.
- **Sources.** Knapp Ch. IX §8 Problem 17 with printed solution, pp. 611--612,
  747--748; Goodman--Wallach Cor. 7.1.6--7.1.7, pp. 333--334.
- **Deps.** `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `thm-steinberg-tensor-product-multiplicity-formula`,
  `lem-weyl-length-parity-is-multiplicative`,
  `lem-finite-weyl-closed-chambers-and-stabilizers`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
  `def-root-reflections-and-the-weyl-group-action`,
  `def-weight-and-weight-space-of-a-lie-algebra-representation`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Format repair and canonical renumbering/reordering
  (steps 1.1, 1.2, 2.1, 3.1); the wall-cancellation pairing of step 2.1 was
  re-read against the sign parity of $u(\varphi)$. OB-1 uses contract-quoted
  and ledger-verified.
- **Next.** Consumed by `ex-clebsch-gordan-decomposition-for-sl2`.

### 25. `ex-clebsch-gordan-decomposition-for-sl2` (level 9, B)

- **Claim/conventions.** $L(a)\otimes L(b)\cong\bigoplus_{j=0}^{\min(a,b)}L(a+b-2j)$,
  i.e. $c^c_{ab}=1$ exactly for $|a-b|\le c\le a+b$ with
  $c\equiv a+b\ (2)$ and $0$ otherwise, with the dimension check
  $\sum_{j=0}^{\min(a,b)}(a+b-2j+1)=(a+1)(b+1)$. AC is stated.
- **Sources.** Knapp Ch. IX §8 (Problems and printed solutions),
  pp. 611--612, 747--748; Etingof §26 for finite-dimensional sl$_2$
  representations.
- **Deps.** `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `cor-racah-speiser-tensor-product-algorithm`,
  `thm-finite-dimensional-representations-of-sl-two`,
  `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
  `prop-root-systems-of-the-classical-complex-lie-algebras`,
  `def-classical-complex-matrix-lie-algebras`,
  `def-integral-dominant-and-strictly-dominant-weights`,
  `def-weyl-vector-rho-for-a-chosen-positive-system`,
  `def-axiom-of-choice`.
- **Decision.** `repaired`. Added `proof_strategy: direct`; format repair and
  canonical renumbering/reordering (steps 1.1--4.1). The regular/irregular
  split of step 1.2 and the cancellation range of step 3.1 were re-read against
  the $t>0$/$t<0$ computations of step 2.1.
- **Next.** B-page companion only.

## Checks run (actual commands and results, 2026-10-05)

Format and content repairs were applied before these checks:

- `node tools/tsx-run.mjs tools/reflow.mts <25 item paths>` — reflowed the 20
  proof-bearing items to one physical line per numbered step (precheck is
  line-based), preserving the tagged-step exception.
- `node tools/fix-multiline-display.mjs <25 item paths>` — joined 7 files whose
  `$$…$$` blocks were hard-wrapped; every display block is now a single source
  line (rendercheck's rule).
- Canonical step-layer pass (in-implementation of `proposedPrecheck`'s
  `layerRepair`): permuted steps into dependency-layer order and relabelled
  them `L.k`, atomically with the `step X.Y` references inside prose and tags;
  tail tags normalised from `steps 1.2, 1.3` to `step 1.2, step 1.3`.

Then, all passing:

- `node tools/tsx-run.mjs tools/precheck.mts <25 item paths>` —
  `20 checked, 0 failing — all clean` (the five definitions carry no
  proof body).
- `node tools/proof-layout.mjs <25 item paths>` —
  `proof-layout: 25 items, 83 steps, 0 defects`.
- `node tools/rendercheck.mjs <25 item paths + 2 page paths>` —
  `OK — 27 file(s)`.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-22.pages.json`
  — `25 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-22.pages.json`
  — `25 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — 36 errors, **all in other batches** (the harmonic-analysis items
  `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`,
  `lem-tangential-maximal-function-norm-bound`,
  `thm-maximal-function-characterisations-of-real-hardy-spaces`,
  `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`,
  `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`, etc.);
  no batch-22 item has a level mismatch, cycle or malformed deps.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-22.coverage.json --require-destination`
  — `2 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-22.coverage.json`
  — `9/10 source(s) fetch-verified`, `10/10 resolved (1 documented drop)`;
  no new source was added at Step 3b.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json --strict`
  — `25/25 item(s) checked`, `0 error(s)`, `0 warning(s)`; the file contains
  184 citation contracts with exact source quotes, 83 step derivations and 25
  eight-row boundary worksheets.
- `node tools/citation-fidelity.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json --fail-on-missing-quote`
  — 184 citations, `QUOTE NOT FOUND — none`, `WIDENING CANDIDATES — none`.
- `node tools/boundary-audit.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json --fail-on-contradicted --fail-on-template`
  — no contradicted dispositions, no template reuse at or above 3 members.
- `node tools/finite-smoke.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json`
  — `0 error(s), 0 check(s) over 0/25 item(s)`; the registry contains no
  check matching this pair's combinatorics, so no `finite_smoke` obligation
  was declared. Recorded so the run-level gate is not mistaken for a live
  check; the run-level consequence is outside this pair's scope.
- `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json`
  — `0 error(s), 25 item(s) routed`; the CRITICAL/HIGH candidates
  (dependency counts, cited-fact counts, existence/uniqueness, biconditional,
  boundary-sensitive and limiting language) are routed to the Step-5 audit;
  `--require-reviewed` is a Step-5+ flag and was not used.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — `refreshed and deduplicated`; batch 22 is in `reviewed_batches`, all 22
  declared cross-batch edges carry `verified` reviews, and `orphaned_reviews`
  is empty.
- Citation quality: the 184 citation rows were machine-proposed by maximal-overlap
  sentence selection over the cited source sections and then reviewed. Four pairs whose
  chosen sentence was weaker than the fact it had to support were replaced by hand-written
  exact quotes (`prop-semistandard-tableaux-expand-schur-characters` F4 and F5,
  `prop-determinant-twists-translate-glr-highest-weights` F2, `thm-littlewood-richardson-tensor-product-rule`
  F3), and one fact was tightened (`lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`
  F4: `for all $i\ge1$`) to remove a citation-fidelity widening candidate. No widening
  candidate remains.
- Finite authoring-side verification re-run: `python3 /tmp/b22_verify_equiv2.py`
  — 191 `(λ,μ,ν)` triples with $|\lambda|+|\mu|\le6$ and ≤4 letters, 192
  admissible tableaux; `U(T)` shape/semistandard/lattice failures 0, U
  collisions 0, per-ν admissible-versus-LR count mismatches 0. Supporting
  probes `python3 /tmp/b22_lr_probe2.py` and `/tmp/b22_lr_probe3.py` reproduce
  the sample LR counts and the $U(T)$ image (e.g. $c^{(3,2,1)}_{(2,1),(3,2,1)}$
  style checks and the staircase examples).

## Published concerns and run-level notes

- **No new published defect was found** in any supplier used by this pair; the
  Step-1 examination of the published prerequisites (directions, hypotheses,
  conventions, AC strength) was spot-rechecked where the Step-3b repairs
  touched a cited fact, and no mismatch surfaced.
- **OB-2** (page `requires` enrichment for four published
  representation-theory pages) is a Step-4 plan/prose amendment, not a defect
  in the published items.
- **Batch-21 supplier stability.** The suppliers were authored during this
  session; their statements were verified as current at the recorded time.
  If any supplier text changes, the affected contract quotes and the ledger
  reviews become stale and must be refreshed (the merged strict contract gate
  and `citation-fidelity` detect quote drift).
- **Run-level residue outside this pair** (reported, not touched):
  `item-dependency-levels` has 36 level mismatches in other batches;
  `finite-smoke` has no applicable registry check for this pair (0 checks);
  the risk-report CRITICAL candidates above are Step-5 work.

## Handoff summary

- **Completed IDs (25/25 authored, registered and checked):**
  `def-littlewood-richardson-tableau-and-coefficient`,
  `def-minuscule-weight`,
  `def-polynomial-glr-highest-weights-as-partitions`,
  `def-tensor-product-multiplicity-for-highest-weight-modules`,
  `lem-bender-knuth-involutions-on-semistandard-tableaux`,
  `def-schur-module-and-schur-polynomial-character`,
  `lem-minuscule-weights-are-the-weyl-orbit`,
  `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`,
  `prop-semistandard-tableaux-expand-schur-characters`,
  `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`,
  `prop-determinant-twists-translate-glr-highest-weights`,
  `prop-tensor-product-multiplicities-are-character-structure-constants`,
  `thm-littlewood-richardson-tensor-product-rule`,
  `cor-horizontal-pieri-rule`, `cor-vertical-pieri-rule`,
  `prop-littlewood-richardson-coefficients-stabilize-with-rank`,
  `ex-a-littlewood-richardson-coefficient-greater-than-one`,
  `cor-minuscule-tensor-product-rule`,
  `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`,
  `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank`,
  `ex-littlewood-richardson-product-s21-times-s1`,
  `thm-steinberg-tensor-product-multiplicity-formula`,
  `ex-three-tensor-three-for-sl3`,
  `cor-racah-speiser-tensor-product-algorithm`,
  `ex-clebsch-gordan-decomposition-for-sl2`.
  Both pages (`library/lie-theory/tensor-product-multiplicities-and-littlewood-richardson.md`,
  `...-examples.md`) exist and match the manifest.
- **Added suppliers.** None created at Step 3b. The three in-run prerequisite
  ids added at Step 1 (`def-minuscule-weight`,
  `lem-minuscule-weights-are-the-weyl-orbit`,
  `lem-bender-knuth-involutions-on-semistandard-tableaux`) remain registered in
  the manifest, coverage and contract; four previously undeclared dependency
  edges (`def-commuting-symmetric-and-linear-actions-on-tensor-power` and the
  three Pieri declarations) were added here and levels recomputed.
- **Item decisions recorded** via `tools/step3-decisions.mjs record-item` (25 receipts,
  `research/frontier-39-analysis-30-step3b-review-<id>.json`): 5 `accept` (the definitions),
  19 `repaired` with confidence 1, the reasons above and their examined dependency lists,
  and 1 `escalate` (`lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`,
  OB-4). `step3-decisions check --phase final` closes these 24 items and lists only the
  escalated item as batch-22 owner work. No `--owner` flag, no judge or audit stamps were used.
- **Checks actually run** are listed verbatim above; the explicit-path
  `proof-layout` run was repeated once over all 25 changed item paths as the
  final formatting check.
- **Open obligations at handoff.** OB-2 (Step 4 `requires` enrichment); item
  10's owner `repaired` receipt is recorded and awaits the run-wide final hash
  freshness check.
  Everything else in the pair is Step-3 green; thorough independent
  mathematical audit remains in Steps 5--8.
