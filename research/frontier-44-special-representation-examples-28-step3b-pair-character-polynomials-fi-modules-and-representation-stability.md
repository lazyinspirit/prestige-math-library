# Step 3b report — character polynomials, FI-modules, and representation stability

Run: `frontier-44-special-representation-examples-28`  
Role: `alpha-high` · label `step3b-pair-character-polynomials-fi-modules-and-representation-stability-6c8d325781721cec`  
A page: `character-polynomials-fi-modules-and-representation-stability` (batch 27, SYMR-14)  
B page: `character-polynomials-fi-modules-and-representation-stability-examples`

## Owned items and open obligations at entry (2026-10-10)

All 27 dispatched items are open pending scaffold audit, complete authoring, supplier
reconciliation, page assembly, contracts/registration, rendering and policy checks,
dependency-level checks, plan validation, and current Step 3 item decisions. Authoring
order is the dispatch order (dependency level, then page order and item ID):

0. `def-character-polynomial-in-cycle-counts`
0. `def-fi-category-and-fi-module`
0. `lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields`
1. `def-fi-coinvariant-functors-and-transition-maps`
1. `def-finite-generation-and-generation-degree-of-an-fi-module`
1. `def-free-fi-module-generated-by-an-sm-module`
1. `def-uniform-representation-stability-for-consistent-sn-sequences`
1. `def-weight-of-a-characteristic-zero-fi-module`
1. `lem-branching-rule-for-specht-induction-and-coinvariants`
1. `lem-padded-irreducible-characters-have-character-polynomials`
2. `def-injectivity-surjectivity-and-stability-degree-of-an-fi-module`
2. `lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight`
2. `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules`
2. `cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation` (B)
2. `ex-fi-permutation-module-has-character-x-one` (B)
3. `lem-free-fi-modules-have-explicit-weight-and-stability-bounds`
3. `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`
3. `ex-exterior-square-of-the-fi-permutation-module` (B)
4. `lem-generation-degree-bounds-surjectivity-degree-and-weight`
4. `prop-fi-module-realizing-one-padded-irreducible-family`
5. `prop-specht-constituents-of-an-fi-module-have-bounded-first-row`
5. `thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category`
5. `ex-the-padded-family-for-lambda-two-one-begins-at-rank-five` (B)
6. `prop-weight-and-stability-degree-give-uniform-representation-stability-range`
7. `thm-finite-generation-is-equivalent-to-uniform-representation-stability`
8. `thm-finitely-generated-fi-modules-have-eventual-character-polynomials`
9. `cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial`

Known open obligations at entry:

- All 27 item files are absent on disk; both pages are absent; the batch-27 proof
  contracts file is absent. The 23 A items and 4 B items must be authored, the two
  pages assembled (A page lists 23 items, B page lists 4 items), and a version-1
  proof-contracts file for the batch must be created and checked with `--strict`.
- Cross-batch supplier `def-first-row-padding-of-a-partition` (batch 26,
  `kronecker-coefficients-and-internal-products`, dependency level 0) is scaffolded but
  not yet authored on disk. Six consumers in this pair declare it:
  `def-weight-of-a-characteristic-zero-fi-module`,
  `def-uniform-representation-stability-for-consistent-sn-sequences`,
  `lem-padded-irreducible-characters-have-character-polynomials`,
  `prop-fi-module-realizing-one-padded-irreducible-family`,
  `thm-finitely-generated-fi-modules-have-eventual-character-polynomials`, and
  `ex-the-padded-family-for-lambda-two-one-begins-at-rank-five`. Their decisions stay
  escalated until the supplier is authored and the actual uses are reconciled.
- Page-level `requires` edge `kronecker-coefficients-and-internal-products` is open for
  the same reason.
- Batch 27 notes (owner repair record) require Step-3 authors to confirm the
  Hilbert-basis/DC citation caveat when writing the Noetherian theorem's proof, and to
  use the corrected rational-Specht classification, weight definition, padded-family
  strategy, and stability-degree tail bound (`lambda_1 <= s`).

Checkpoint entries are recorded below in dependency order as each item is completed;
each records the claim and conventions, source locators, actual supplier uses, repairs
and decisions, checks run, and open gaps. Intermediate entries reflect status at the
time of writing; the final handoff section supersedes their pending text.

## Checkpoints

### def-character-polynomial-in-cycle-counts (level 0)

- **Claim/conventions:** $X_i(\sigma)=c_i(\sigma)$ the number of $i$-element orbits,
  a class function on $S_n$; character polynomials are elements of
  $\mathbb Q[X_1,X_2,\dots]$ (family-of-indeterminates ring, finitely supported on
  monomials), weighted degree $\deg X_i=i$; realization on each $S_n$; uniqueness in
  the limit (agreement on infinitely many $n$ forces equality); eventually polynomial
  sequences.
- **Sources:** CEF arXiv:1204.4533v4, "Character polynomials" paragraph and
  Definition 1.4, printed pp. 2–3 (full PDF cache re-fetched, SHA-256
  `1ff5dd9de3e3663dfa8ceec86e69c1b97448d02630981b22587994be48746e96` = recorded
  coverage stamp; passage read in full at PDF pp. 3–4). Macdonald I §7 Example I.7.14
  recorded as the classical convention source (not re-read page-by-page here).
- **Scaffold repair (dependency):** the scaffold cited the single-variable
  `def-polynomial-ring-over-a-commutative-ring` for $\mathbb Q[X_1,X_2,\dots]$; replaced
  by the family-of-indeterminates ring, monomials, universal property, polynomial
  evaluation and the univariate root bound, all published. Uniqueness is proved in the
  definition text by extending a permutation by fixed points (a polynomial in $k$
  vanishing on an infinite set), then a local induction on the number of variables over
  $\mathbb N^M$; this replaces the scaffold's descending-$X_1$-degree sketch, which is
  the same route made explicit. The polynomial-ring-on-a-commutative-ring edge is
  removed.
- **Checks:** explicit precheck — not-applicable (definition, no phase body);
  `rendercheck` — 1 file, 0 errors/warnings after collapsing the displayed map to one
  source line. Manifest entry for this item still to be synchronised with the new deps
  (final pass). No AC. Next: `def-fi-category-and-fi-module`.

### def-fi-category-and-fi-module (level 0)

- **Claim/conventions:** $FI$ = finite sets and injections, equivalent to the full
  subcategory on $[n]=\{0,\dots,n-1\}$ (zero-based, matching the library's $S_n$);
  FI-module = covariant functor to $k\text{-Mod}$ with $V_S,V_n,f_*$; $V_n$ a left
  $kS_n$-module; transition maps equivariant for the explicit conjugation homomorphism
  $\Phi_f$ (checked to be a homomorphism); sub-FI-module = subfunctor; maps = natural
  transformations; pointwise abelian structure; FB-module = functor on the groupoid of
  bijections, determined up to isomorphism by the $W_n$ and with no transition maps.
- **Sources:** CEF Definition 1.1 (printed p. 2), Definitions 2.1.1, 2.1.2 and 2.1.4
  (printed pp. 11–12), Definition 2.2.1 and the FB paragraph on printed p. 12 — read in
  the cached full PDF (SHA-256 `1ff5dd9de3e3663dfa8ceec86e69c1b97448d02630981b22587994be48746e96`);
  CEFN §2.1 printed pp. 9–10 read in the full author-hosted PDF (SHA-256
  `4cb6cebded25181dd068dee57a3c976bb33ba84d6eb29317f46a595f6971586f`) for the pointwise
  abelian structure and sub-FI-modules.
- **Scaffold repair (convention + dependencies):** the scaffold wrote $[n]=\{1,\dots,n\}$;
  aligned to the library's zero-based $S_n$ realization (the two are canonically
  isomorphic; no claim changed). Added `def-abelian-category`,
  `thm-modules-over-a-ring-form-an-abelian-category` and
  `thm-group-actions-and-group-ring-modules-correspond` for claims the scaffold asserted
  without suppliers; all other declared deps kept.
- **Checks:** precheck — not-applicable (definition); rendercheck — 1 file, 0
  errors/warnings. Next: `lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields`.

### lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields (level 0)

- **Claim/conventions:** over any characteristic-zero field $F$, the $S^\lambda_F$
  ($\lambda\vdash n$) are nonzero, irreducible and pairwise non-isomorphic, every
  irreducible $FS_n$-module is one of them, and Maschke makes them a complete
  irredundant list. Route exactly as the owner-corrected scaffold: rational Specht
  models, base change along $\mathbb Q\to F$ via the integral standard basis, finite
  rational matrix ranks for Hom base change — no embedding of $F$ into $\mathbb C$.
- **Sources:** CEF arXiv:1204.4533v4, "Irreducible representations of $S_n$ in
  characteristic 0", printed p. 13 (read in cached full PDF, SHA-256 prefix
  `1ff5dd9d`); Macdonald I §7 printed pp. 114–115 as recorded convention source.
- **Proof:** 11 numbered steps (canonical reordered labels 1.1–8.1): dimension/base
  change of Specht modules; intertwiner base change by finite matrix rank; End and
  distinctness over $\mathbb Q$ via complex Schur; irreducibility over $\mathbb Q$ and
  over $F$ via Maschke plus non-scalar projections; completeness over $\mathbb Q$
  through complex constituents; regular-module decomposition over $\mathbb Q$ and its
  base change to $F$; completeness over $F$. All cited suppliers published except the
  in-run level-0 definitions; no AC (finite-dimensional matrices and finite groups
  only).
- **Scaffold repair (dependency):** added `cor-schurs-lemma…`,
  `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`,
  `thm-group-actions-and-group-ring-modules-correspond`,
  `thm-group-ring-is-a-unital-algebra-with-basis-g`, `def-group-ring`,
  `thm-tensor-product-basis-from-bases` and
  `def-module-homomorphism-kernel-image-and-cokernel`; all nine scaffold deps kept.
  Adopted the precheck's canonical step renumbering (the map from the authored labels
  is recorded in the working notes: old 1.3–4.1 → new 2.1, 3.1, 3.2, 4.1, 4.2, 5.1,
  6.1, 7.1, 8.1).
- **Checks:** precheck — 1 checked, 0 failing after adopting the canonical renumbering;
  rendercheck — 1 file, 0 errors/warnings. Next: `def-fi-coinvariant-functors-and-transition-maps`.

### def-fi-coinvariant-functors-and-transition-maps (level 1)

- **Claim/conventions:** graded $k[T]$-modules and their morphisms; for fixed $a$ and
  set $\mathbf a$, $\Phi_a(V)_n=(V_{\mathbf a\sqcup n})_{S_n}=k\otimes_{kS_n}V_{\mathbf a\sqcup n}$;
  the transition map uses the standard injection $n\to n+1$ and is independent of the
  choice by post-composition with $\tau\in S_{n+1}$; $\Phi_a$ is a functor, pointwise
  right exact, and exact over $\mathbb Q$-algebras via the averaging section (which
  identifies coinvariants with invariants), so sub-FI-modules induce submodules.
- **Sources:** CEF Definitions 3.1.1–3.1.2 and the well-definedness paragraph,
  printed pp. 16–17 (cached PDF, hash prefix `1ff5dd9d`), which states right exactness
  and exactness over rings containing $\mathbb Q$; CEFN Definition 2.4 basic
  corroboration only (the scaffold's "$H_0(V)=0\Rightarrow V=0$" clause of Lemma 2.5 is
  **not used** in this item).
- **Scaffold repair (dependency):** added
  `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`
  for right exactness of $k\otimes_{kS_n}-$, plus `def-group-ring`,
  `thm-group-ring-is-a-unital-algebra-with-basis-g` and
  `def-tensor-product-of-modules-by-generators-and-relations` for the tensor description.
  The $\mathbb Q$-exactness proof is written out (averaging section, invariants).
- **Checks:** precheck — not-applicable (definition); rendercheck — 0 errors/warnings.
  Next: `def-finite-generation-and-generation-degree-of-an-fi-module`.

### def-finite-generation-and-generation-degree-of-an-fi-module (level 1)

- **Claim/conventions:** $\operatorname{span}_V(\Sigma)$ is the smallest sub-FI-module
  containing $\Sigma$ and equals the finite $k$-linear combinations of the $f_*(v)$;
  finitely generated; generated in degree $\le d$ with $V_{\le d}$ the elements of the
  values at finite sets of size $\le d$; generation degree (finite or $\infty$);
  pointwise finite generation is implied by but does not imply global finite generation.
- **Sources:** CEF Definitions 2.3.1, 2.3.3, 2.3.4 and Lemma 2.3.2, printed pp. 14–15
  (read in full); CEFN Definition 2.1 and Proposition 2.3, printed pp. 10–11.
- **Scaffold repair (dependency):** added `lem-submodule-criterion-sums-and-intersections`
  for the objectwise intersection of submodules; all three scaffold deps kept. The
  same-page forward link to `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules`
  is kept as an ordinary same-page link (not a dependency), preserving the claim that
  finite generation implies pointwise finite generation.
- **Checks:** precheck — not-applicable (definition); rendercheck — 0 errors/warnings.
  Next: `def-free-fi-module-generated-by-an-sm-module`.

### def-free-fi-module-generated-by-an-sm-module (level 1)

- **Claim/conventions:** $M(W)_S=\bigoplus_{T\subseteq S}W(T)$ for an FB-module $W$,
  transition maps $W(f|_T)$; left $kS_n$-module structure; adjunction
  $\operatorname{Hom}(M(W),V)\cong\operatorname{Hom}(W,\pi V)$ with explicit unit/counit;
  $M(W)_n\cong\bigoplus_a\operatorname{Ind}_{S_a\times S_{n-a}}^{S_n}(W_a\boxtimes k)$;
  $M(m)=M(k[S_m])$ with basis the injections $[m]\hookrightarrow S$; $M(\lambda)=M(S^\lambda_k)$
  for characteristic-zero fields, with the associated FB-module $S^\lambda_k(T)=k[\operatorname{Iso}([m],T)]\otimes_{kS_m}S^\lambda_k$.
- **Sources:** CEF Definitions 2.2.1–2.2.3 (formulas (3), (4)) and 2.2.6, printed
  pp. 12–13, read in full; CEFN Definition 2.2 (Yoneda identification) printed p. 10.
- **Scaffold repair (convention):** the scaffold defined $W_T$ as "$W_{|T|}$ transported
  along a bijection $T\to[|T|]$", which needs a transport convention; since an FB-module
  is a functor on *all* finite sets, the authored definition uses the literal value
  $W(T)$ and is fully canonical (no choices). No claim changed. All scaffold deps kept.
- **Checks:** precheck — not-applicable (definition); rendercheck — 0 errors/warnings
  after collapsing the induction display to one line. Next:
  `def-uniform-representation-stability-for-consistent-sn-sequences`.

### def-uniform-representation-stability-for-consistent-sn-sequences (level 1)

- **Claim/conventions:** consistent sequences over char-0 fields; the three conditions
  (I) injectivity, (II) the $S_{n+1}$-span of the image is everything, (III) padded
  multiplicity stability with $V(\lambda)_n$ indexed by $\lambda[n]$; uniformly stable
  = for some $N$; witness that (II) is not implied by (I)+(III) ($V_n=k^2$ trivial,
  $\varphi_n$ the first-coordinate inclusion).
- **Sources:** CEF Definition 3.3.2 and Remark 3.3.1, printed pp. 21–22, read in full.
- **Open supplier:** `def-first-row-padding-of-a-partition` (batch 26) is still
  unauthored on disk. Flagged: consumer `def-uniform-...` clause (III) depends on its
  padding convention $\lambda[n]$; the item is authored with the obligation stated and
  its Step-3 decision will stay escalated unless the supplier appears before handoff.
- **Checks:** precheck — not-applicable (definition); rendercheck — 0 errors/warnings.
  Next: `def-weight-of-a-characteristic-zero-fi-module`.

### def-weight-of-a-characteristic-zero-fi-module (level 1)

- **Claim/conventions:** $V(\lambda)_n=k\otimes_{\mathbb Q}S^{\lambda[n]}_{\mathbb Q}$;
  constituent = subquotient isomorphic to $V(\lambda)_n$ (defined for
  infinite-dimensional values); weight = sup of $|\lambda|$ over constituents, $0$ for
  $V=0$, $+\infty$ when unbounded; subquotient monotonicity. Every partition of $n$ is
  uniquely $\lambda[n]$ (delete the first row), so the labels are non-repetitive.
- **Sources:** CEF Definitions 2.2.5 (printed pp. 13–14) and 3.2.1 (printed p. 18),
  both read. The scaffold's no-extremal-C-lift care is respected (no $F\to\mathbb C$
  map).
- **Open supplier:** `def-first-row-padding-of-a-partition` again (used for $\lambda[n]$);
  flagged as an open edge; decision will stay escalated unless that item lands.
- **Checks:** precheck — not-applicable (definition); rendercheck — 0 errors/warnings
  after collapsing the weight display. Next:
  `lem-branching-rule-for-specht-induction-and-coinvariants`.

### lem-branching-rule-for-specht-induction-and-coinvariants (level 1)

- **Claim/conventions:** (i) $\operatorname{Ind}^{S_{n+k}}_{S_n\times S_k}(S^\lambda_F\boxtimes F)$
  is the sum of $S^\mu_F$ over horizontal $k$-strips $\mu/\lambda$; (ii) the $S_k$-coinvariants
  of the restriction to $S_{n-k}\times S_k$ are the sum of $S^\nu_F$ over shapes obtained
  by removing one box from each of $k$ different columns; all multiplicities $0/1$; no
  embedding of $F$ into $\mathbb C$ (descent $\mathbb C\leftarrow\mathbb Q\to F$ via
  finite matrix ranks and the field-uniform Specht basis).
- **Sources:** CEF Lemma 3.2.3 and its proof comment, printed pp. 18–19, read in full;
  Macdonald I §5 (5.16)–(5.17), printed pp. 73–74, recorded as the Pieri-rule source
  (the published `cor-outer-pieri-rules-for-trivial-and-sign-factors` supplies the
  complex form actually used).
- **Proof:** 7 numbered steps (canonical labels after adopting the precheck repair:
  1.1 base-change tools, 1.2 complex Pieri, 1.3 coinvariant/Hom adjunction, 2.1 descent
  to $\mathbb Q$, 3.1 base change to $F$, 4.1 multiplicity computation, 5.1 assembly of
  (ii)). All cited suppliers published.
- **Repairs:** added `def-polytabloid-specht-module-over-an-arbitrary-field`,
  `lem-integral-specht-garnir-straightening-and-field-basis`,
  `rem-induced-representation-agrees-with-the-tensor-product-model`,
  `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction`,
  `cor-schurs-lemma-for-irreducible-representations`,
  `cor-change-of-rings-for-extension-of-scalars`,
  `thm-associativity-of-balanced-tensor-products`,
  `thm-tensor-products-commute-with-arbitrary-direct-sums`,
  `def-restriction-and-extension-of-scalars`,
  `def-tensor-product-of-modules-by-generators-and-relations`; kept all five scaffold
  deps. Adopted the canonical renumbering.
- **Checks:** precheck — 1 checked, 0 failing after adopting the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `lem-padded-irreducible-characters-have-character-polynomials`.

### lem-padded-irreducible-characters-have-character-polynomials (level 1)

- **Claim/conventions:** for each $\lambda$ ($m=|\lambda|$) a character polynomial
  $P_\lambda\in\mathbb Q[X_1,X_2,\dots]$ of weighted degree $\le m$ with
  $\chi^{\lambda[n]}(\sigma)=P_\lambda(X(\sigma))$ for all $n\ge m+\lambda_1$.
- **Sources read:** Macdonald, *Symmetric Functions and Hall Polynomials*, Chapter I
  §7 Example 14 and the Frobenius formula (7.8), printed pp. 122–124 — both passages
  read in the cached 486-page full text (SHA-256 prefix `64e242b84d1f3b78` = the
  recorded coverage stamp); CEF printed p. 23 records [Mac, Example I.7.14] as the
  classical input of Theorem 3.3.4.
- **Proof:** 4 steps. Step 1.1 is the classical input (Macdonald's padding identity
  $\chi^{(N,\lambda)}=\langle E\cdot P,s_\lambda\rangle_H$, obtained there from (7.8)
  plus the $x_0=1$ homogeneity reduction) and is labelled as such; steps 1.2–3.1 prove
  locally the binomial expansion of $E\cdot P$, the finiteness of the degree-$m$
  extraction, the polynomial construction with weighted degree $\le m$, and
  uniqueness. **Open qualification:** the Frobenius extraction itself is sourced, not
  locally re-derived; recorded for Step 5–7 scrutiny (complete derivation is in the
  cited source; exact locators recorded).
- **Open supplier:** `def-first-row-padding-of-a-partition` (padding $\lambda[n]$):
  still unauthored; decision will stay escalated unless it lands before handoff.
- **Checks:** precheck — 1 checked, 0 failing; rendercheck — 0 errors/warnings. Next:
  `def-injectivity-surjectivity-and-stability-degree-of-an-fi-module`.

### def-injectivity-surjectivity-and-stability-degree-of-an-fi-module (level 2)

- **Claim/conventions:** inj-deg and surj-deg are the least thresholds with the
  corresponding property for all $a$, stab-deg is their max, each may be $+\infty$;
  equivalently $T$ is an iso for all $a$ and $n\ge\operatorname{stab-deg}(V)$; the
  three bounds are kept distinct.
- **Sources:** CEF Definitions 3.1.3, 3.1.5 and Remark 3.1.4, printed pp. 16–17, read
  in full.
- **Checks:** precheck — not-applicable (definition); rendercheck — 0 errors/warnings.
  Next: `lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight`.

### lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight (level 2)

- **Claim/conventions:** for $\mu=\lambda[n]$ and $a\le n$: coinvariants
  $(V(\lambda)_n)_{S_{n-a}}=0\iff a<|\lambda|$ (i); at $a=|\lambda|$ they are $V_\lambda$
  (ii); for $a\ge|\lambda|$ and $n\ge a+\lambda_1$ they equal
  $\operatorname{Ind}_{S_{|\lambda|}\times S_{a-|\lambda|}}^{S_a}(V_\lambda\boxtimes k)$,
  independent of $n$ (iii); weight $\le a$ subquotients have
  $W_n=0\iff(W_n)_{S_{n-a}}=0$ (iv).
- **Sources:** CEF Lemma 3.2.7 (i)–(iv) with its complete proof, printed pp. 18–20,
  read in full; Macdonald (5.16)–(5.17) recorded as the Pieri source.
- **Proof:** 5 canonical steps (after adopting the precheck renumbering: 1.1 branching
  constituents, 2.1 (i), 2.2 (ii), 2.3 (iii) interlacing comparison, 3.1 (iv) via
  finite orbit spans, Maschke and exactness of coinvariants in characteristic zero).
- **Repairs:** added `thm-maschkes-theorem-…`, `def-submodule` and
  `def-first-row-padding-of-a-partition` (open); kept all four scaffold deps; F1 covers
  both directions of the branching rule.
- **Checks:** precheck — 1 checked, 0 failing after adopting the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules`.

### lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules (level 2)

- **Claim/conventions:** (a) image of the map $M(m)\to V$ determined by $v\in V_m$ is
  $\operatorname{span}_V(v)$, and the general $\Sigma$ version; (b) finite generation
  and generation in degree $\le d$ are equivalent to surjections from direct sums of
  $M(m_i)$ (including the evaluation map $\bigoplus_{m\le d}M(V_m)\to V$);
  (c) finite generation implies pointwise finite generation.
- **Sources:** CEF Lemma 2.3.2 and Proposition 2.3.5, printed pp. 14–15, read; CEFN
  Definition 2.2 and Proposition 2.3 with proof, printed pp. 10–11.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next: `cex-pointwise-finite-dimensionality-…`.

### cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation (level 2, B)

- **Claim/conventions:** the pointwise one-dimensional FI-module ($V_S=ke_S$,
  bijections $\mapsto$ identity identifications, non-bijections $\mapsto0$) is an
  FI-module but no finite generating set exists (all images from sets of size
  $\le M$ vanish at $[M+1]$); so pointwise finite-dimensionality does not imply finite
  generation.
- **Sources:** CEF printed pp. 3 and 14–15 (the global failure remark); CEFN §2.1;
  statement and proof are ai-generated with `generation.role: counterexample`.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next: `ex-fi-permutation-module-has-character-x-one`.

### ex-fi-permutation-module-has-character-x-one (level 2, B)

- **Claim/conventions:** the free-module FI-module $V_S=k^{(S)}$ is $M(1)$ with
  $V_n\cong k^n$ the permutation representation, generated in degree $\le1$ by
  $V_{\{0\}}$; its trace function is $X_1$ (fixed points), weighted degree 1, for every
  $n$ (including $n=0$).
- **Sources:** CEF printed pp. 3–4 (the $X_1$ example) and Definition 2.2.3/Example
  2.2.4 (printed pp. 12–13); Macdonald I §7 Example 14 printed pp. 122–124 (component
  conventions).
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `lem-free-fi-modules-have-explicit-weight-and-stability-bounds`.

### lem-free-fi-modules-have-explicit-weight-and-stability-bounds (level 3)

- **Claim/conventions:** for an FB-module $W$: $\operatorname{inj-deg}(M(W))=0$; if
  $W$ vanishes above $m$ then $\operatorname{surj-deg}(M(W))\le m$; for $M(m)$,
  stab-deg $=m$ exactly. For char-0 $k$ and a partition $\lambda$:
  $\operatorname{weight}(M(\lambda))=|\lambda|$ and
  $\operatorname{stab-deg}(M(\lambda))=\lambda_1$.
- **Sources:** CEF Proposition 3.1.7 with its proof (printed pp. 17–18) and
  Propositions 3.2.4, 3.2.6 (printed pp. 19–20), read; Macdonald (5.16)–(5.17)
  recorded as the Pieri source.
- **Proof:** the orbit decomposition $\Phi_aM(W)_n\cong\bigoplus_{U\subseteq\mathbf
  a}\bigoplus_{k\le n}\Phi_{|U|}(W)_k$ with $T$ the identity on factors (CEF (6)); the
  injectivity/surjectivity bounds and sharpness for $M(m)$; weight of $M(\lambda)$ by
  the horizontal-strip constituent analysis with $|\eta|\le m$; stability degree
  $\lambda_1$ with sharpness at $a=m-\lambda_1$, $n=\lambda_1-1$.
- **Repairs:** added `lem-specht-modules-classify-…`,
  `thm-maschkes-theorem-…` and `def-first-row-padding-of-a-partition` (open); kept all
  five scaffold deps.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`.


### prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated (level 3)

- **Claim/conventions:** pointwise tensor product of FI-modules over a commutative
  ring is an FI-module; if $V$ is generated in degree $\le m_1$ and $W$ in degree
  $\le m_2$ then $V\otimes W$ is generated in degree $\le m_1+m_2$; in particular
  tensor products of finitely generated FI-modules are finitely generated.
- **Sources:** CEF Proposition 2.3.6 with proof, printed p. 14; CEFN Proposition 2.3,
  printed pp. 10–11.
- **Proof:** $U=M(m_1)\otimes M(m_2)$ is generated in degree $\le m_1+m_2$ because
  each basis pair $(f_1,f_2)$ is pulled back from
  $T=\operatorname{im}f_1\cup\operatorname{im}f_2$; tensor the two finite free
  surjections and distribute to get $\bigoplus_{i,j}M(m_i)\otimes M(n_j)\twoheadrightarrow V\otimes W$;
  quotients of modules generated in degree $\le d$ are generated in degree $\le d$.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next: `ex-exterior-square-of-the-fi-permutation-module`.

### ex-exterior-square-of-the-fi-permutation-module (level 3, B)

- **Claim/conventions:** $W=\Lambda^2V$ for the permutation FI-module $V=M(1)$ is an
  FI-module with $W_n\cong\Lambda^2(k^n)$ and character $\binom{X_1}{2}-X_2$ of
  weighted degree 2, for every $n\ge0$ (empty cases included).
- **Sources:** CEF printed p. 4 (introductory exterior-square computation); Macdonald
  I §7 Example I.7.14, printed pp. 122–124.
- **Proof:** basis wedges $e_i\wedge e_j$ ($i<j$); diagonal entry of $\sigma$ is
  $+1$ on unordered pairs of distinct fixed points, $-1$ on transposition pairs, and
  $0$ otherwise; trace sum gives $\binom{X_1}{2}-X_2$.
- **Repairs:** rewrote a stale final-step range reference `1.2–2.2` to the actual
  steps 1.1, 1.2 and 2.1 (the canonical renumbering had left the range stale; precheck
  did not flag it).
- **Checks:** precheck — 1 checked, 0 failing; rendercheck — 0 errors/warnings.
  Next: `lem-generation-degree-bounds-surjectivity-degree-and-weight`.

### lem-generation-degree-bounds-surjectivity-degree-and-weight (level 4)

- **Claim/conventions:** (a) quotients satisfy
  $\operatorname{surj-deg}(W)\le\operatorname{surj-deg}(V)$; (b) generated in degree
  $\le d$ implies $\operatorname{surj-deg}(V)\le d$; (c) over characteristic zero,
  generated in degree $\le d$ implies $\operatorname{weight}(V)\le d$.
- **Sources:** CEF Lemma 3.1.6, Proposition 3.1.8, Proposition 3.2.5, printed
  pp. 17–19; CEFN Proposition 2.3, printed pp. 10–11.
- **Proof:** naturality of $T$ under quotients (a); reduction of weight for arbitrary
  $kS_m$-modules $W$ to finite-dimensional $W'\subseteq W$ via a finite-dimensional
  orbit span $X\subseteq M(W')_N$ (weight $\le m$ for $M(W)$); evaluation surjection
  $\bigoplus_{m\le d}M(V_m)\to V$ and the surjectivity degree of free modules.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `prop-fi-module-realizing-one-padded-irreducible-family`.

### Supplier update: `def-first-row-padding-of-a-partition`

Batch 26 has now authored `items/def-first-row-padding-of-a-partition.md` (status
draft, dependency level 0). Its convention is
$\alpha[n]=(n-|\alpha|,\alpha_1,\dots,\alpha_k)$ for $n\ge|\alpha|+\alpha_1$,
which matches the usage in every batch-27 consumer; the six consumer decisions no
longer need the "supplier unauthored" escalation on this ground, but the actual proof
uses still require reconciliation once each consumer is authored.

### Repair note

`ex-fi-permutation-module-has-character-x-one` (stale range `1.1–1.3` → steps 1.1,
2.1, 2.2) and `lem-free-fi-modules-have-explicit-weight-and-stability-bounds`
(stale ranges `1.2–2.2`/`2.3–3.2` → steps 1.2, 2.2 / steps 2.3, 3.1) also carried
stale final-step range references from the canonical renumbering; both repaired and
re-checked clean.

### prop-fi-module-realizing-one-padded-irreducible-family (level 4)

- **Claim/conventions:** for a char-0 field $k$ and a partition $\lambda$ with
  $m=|\lambda|$, $d=m+\lambda_1$, there is a sub-FI-module $V(\lambda)\subseteq M(\lambda)$
  with $V(\lambda)_n\cong V_{\lambda[n]}$ for $n\ge d$ and $0$ otherwise; generated in
  degree exactly $d$; weight $=m$; inj-deg $=0$; surj-deg $=$ stab-deg $=\lambda_1$.
- **Sources:** CEF Proposition 3.4.1 with its complete proof (ar5iv/PDF v4), printed
  pp. 24–25, read in full; Lemma 3.1.6 (quotient/submodule bounds) read; Macdonald
  (5.16)–(5.17) recorded as the Pieri input.
- **Proof route:** define $V(\lambda)_n$ as the multiplicity-one isotypic piece of
  $\lambda[n]$ in $M(\lambda)_n$; preservation by transition maps via $f_*$
  $S_p$-equivariance ($\Phi_f$) plus the pointwise stabilizer of $\mathrm{im}\,f$ and the
  horizontal-strip interlacing intersection $\{\nu\}=\{\lambda[q]\}$; transport to all
  finite sets by bijections (choice-free because the value is independent of the
  bijection); generation by injectivity of $f_*\colon M(\lambda)_d\to M(\lambda)_n$;
  weight from $|\lambda[n]|=m$; inj-deg 0 from containment in $M(\lambda)$ and exactness
  of $\Phi_a$; surj-deg $\le\lambda_1$ as a quotient of $M(\mu)$, $\mu=\lambda[d]$;
  sharpness from $(V(\lambda)_d)_{S_{\lambda_1}}\cong V_\lambda\ne0$ vs. the zero value
  one step below $d$; $\lambda=\varnothing$ handled separately.
- **Dep note:** the quotient bound CEF Lemma 3.1.6 is proved inline (right exactness +
  naturality) rather than imported from the same-level sibling
  `lem-generation-degree-bounds-surjectivity-degree-and-weight`, to keep the computed
  dependency level at 4.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering (final
  step range references repaired by hand); rendercheck — 0 errors/warnings. Next:
  `prop-specht-constituents-of-an-fi-module-have-bounded-first-row`.

### prop-specht-constituents-of-an-fi-module-have-bounded-first-row (level 5)

- **Claim/conventions:** for a char-0 field $k$ and an FI-module $V$ with
  $s=\operatorname{stab-deg}(V)<\infty$, every irreducible constituent $V(\lambda)_n$ of
  $V_n$ satisfies $\lambda_1\le s$ (the second row of the padded diagram is bounded).
- **Sources:** CEF Proposition 3.2.8 with its complete proof, printed p. 20, read in
  full (ar5iv); Macdonald (5.16)–(5.17) as the Pieri input.
- **Proof route:** filtration $F^mV=\operatorname{span}_V(V_{\le m})$, reduction to
  constituents of the graded pieces $G_m$, surjectivity of
  $T\colon\Phi_{m-s-1}(\overline V)_s\to\Phi_{m-s-1}(\overline V)_{s+1}$ for
  $\overline V=V/F^{m-1}V$ with zero domain, coinvariant vanishing (Lemma 3.2.7(i)) on
  $H_m=(G_m)_m$, evaluation surjection $M(H_m)\twoheadrightarrow G_m$, and the
  finite-orbit-span reduction of constituents of $M(H_m)_n$ to finite-dimensional
  $N\subseteq H_m$ with horizontal-strip interlacing $\nu_2\le\mu_1$.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next: `thm-fi-modules-over-a-noetherian-…`.

### thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category (level 5)

- **Claim/conventions:** $k$ commutative Noetherian containing $\mathbb Q$; every
  sub-FI-module $W$ of a finitely generated FI-module $V$ is finitely generated
  (Noetherian category).
- **Sources:** CEF Theorem 1.3 with its complete proof, printed pp. 3 and 20–21, read
  in full; CEFN Theorem A recorded as the stronger result not used; CEF Prop 2.3.5,
  3.1.8, 3.2.5 used through the batch suppliers.
- **Proof route:** $V_n$ f.g. and $W_n$ f.g. (Noetherian $k$); $\Phi_a(V)$ f.g. graded
  $k[T]$-module generated in degrees $0..a$ (T surjective from degree $a$); $k[T]$
  Noetherian (Hilbert, cited only through its choice-free finite-generation form);
  $\Phi_a(W)$ f.g., homogeneous generators lifted to $w_i$, $\widetilde W$ generated
  with finite generating sets of $W_0,\dots,W_{a-1}$, $\Phi_a(W/\widetilde W)=0$;
  restriction of scalars $k\to\mathbb Q$, $\operatorname{weight}(U^{\mathbb Q})\le a$,
  vanishing detection gives $U_n=0$ for $n\ge a$.
- **Repairs/notes:** added `def-weight-of-a-characteristic-zero-fi-module` and
  `def-fi-category-and-fi-module` to the scaffold deps (levels 1 and 0, no level
  change); the $U^{\mathbb Q}$ step is tagged with a citation of the $\widetilde W$
  step so the canonical renumbering keeps the logical order (the checker topologically
  sorts steps by cited-step layers); final range reference repaired by hand.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `ex-the-padded-family-for-lambda-two-one-begins-at-rank-five`.

### ex-the-padded-family-for-lambda-two-one-begins-at-rank-five (level 5, B)

- **Claim/conventions:** $\lambda=(2,1)$: $\lambda[n]=(n-3,2,1)$ is a partition exactly
  for $n\ge5$; the padded FI-module $V((2,1))$ has values $V_{(n-3,2,1)}$ for $n\ge5$
  and $0$ below, generation degree exactly $5$, weight $3$, inj-deg $0$, surj-deg
  $=$ stab-deg $=2$.
- **Sources:** CEF Definition 2.2.5/Proposition 3.4.1, printed pp. 13, 24–25; Macdonald
  I §7 Example I.7.14 padding convention.
- **Proof route:** threshold check of the padding by hand at $n=3,4$; direct
  instantiations of the realization proposition.
- **Checks:** precheck — 1 checked, 0 failing (canonical order already matched);
  rendercheck — 0 errors/warnings. Next:
  `prop-weight-and-stability-degree-give-uniform-representation-stability-range`.

### prop-weight-and-stability-degree-give-uniform-representation-stability-range (level 6)

- **Claim/conventions:** char-0 $k$, $V$ with finite-dimensional values, weight
  $d<\infty$, stab-deg $s<\infty$ ⇒ the consistent sequence $(V_n,\varphi_n)$ is
  uniformly representation stable with stable range $n\ge d+s$ (conditions I, II, III).
- **Sources:** CEF Proposition 3.3.3 with its complete proof, printed pp. 21–22, read in
  full; CEFN §1 recorded.
- **Proof route:** $K_n=\ker\varphi_n$, $C_{n+1}=\operatorname{coker}
  (\operatorname{Ind}\varphi_n)$; weight-$d$ vanishing criteria via Lemma 3.2.7(iv);
  the two factorizations of $T=q\circ(\varphi_n)_{S_{n-d}}
  =(\varphi'_n)_{S_{n+1-d}}\circ\psi$ with exactness of coinvariants force injectivity
  and surjectivity for $n-d\ge s$; multiplicities by induction on $m=|\lambda|\le d$
  using Lemma 3.2.7(i)–(iii) and the first-row bound $\lambda_1\le s$ at
  $n\ge s+d\ge m+\lambda_1$.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering (final
  range reference repaired by hand); rendercheck — 0 errors/warnings. Next:
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability`.

### thm-finite-generation-is-equivalent-to-uniform-representation-stability (level 7)

- **Claim/conventions:** char-0 $k$, $V$ with finite-dimensional values: $V$ finitely
  generated $\iff$ the consistent sequence $(V_n,\varphi_n)$ is uniformly
  representation stable.
- **Sources:** CEF Theorem 1.13 with its complete proof, printed pp. 21–23, read in
  full; CEFN Remark 1.2 recorded.
- **Proof route:** ($\Rightarrow$) finite free presentation $M\oplus$-sum of $M(i)$'s,
  kernel $K$ finitely generated (Noetherian theorem), exactness of $\Phi_a$, chase giving
  inj-deg$(V)\le r$ from inj-deg$(M)=0$ and surj-deg$(K)\le r$, then weight $\le g$ and
  the level-6 stability-range proposition. ($\Leftarrow$) condition (II) spans $V_{n+1}$
  by images from $V_n$, so $V=\operatorname{span}(V_{\le N})$ with each $V_{[m]}$
  finite-dimensional, choosing finitely many generators.
- **Repairs:** added `def-finite-generation-and-generation-degree-of-an-fi-module` (level
  1) and `def-weight-of-a-characteristic-zero-fi-module` (level 1) to the scaffold deps
  (no level change); removed a forward reference the checker rejected
  (forward-ref-1.3); after the canonical renumbering the steps are 1.1, 1.2, 2.1, 3.1, 4.1
  in the intended order.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `thm-finitely-generated-fi-modules-have-eventual-character-polynomials`.

### thm-finitely-generated-fi-modules-have-eventual-character-polynomials (level 8)

- **Claim/conventions:** char-0 $k$, $V$ finitely generated with finite-dimensional
  values, $d=\operatorname{weight}(V)$, $s=\operatorname{stab-deg}(V)$ (both finite):
  there is a unique character polynomial $P_V\in\mathbb Q[X_1,X_2,\dots]$ of weighted
  degree $\le d$ with $\chi_{V_n}(\sigma)=P_V(X(\sigma))$ for all $n\ge s+d$, $\sigma$.
- **Sources:** CEF Theorem 3.3.4 with its complete proof, printed pp. 23–24, read in
  full; Macdonald I §7 Example I.7.14 as the padded character source.
- **Proof route:** finiteness of weight ($\le g$) and of stab-deg (free presentation,
  Noetherian kernel, exactness chase; $(g,r')$ bounds) inlined because the level-7
  theorem's statement does not expose them; stability-range proposition gives constant
  isotypic multiplicities for $n\ge s+d$; each occurring $\lambda$ has
  $|\lambda|\le d$, $\lambda_1\le s$ so $n\ge|\lambda|+\lambda_1$; padded character
  polynomials $P_\lambda$ (with the $\mathbb Z$-model scalar-extension trace remark for
  general char-0 $k$); additivity of trace gives $P_V=\sum c_\lambda P_\lambda$;
  uniqueness in the limit.
- **Checks:** precheck — 1 checked, 0 failing after the canonical renumbering;
  rendercheck — 0 errors/warnings. Next:
  `cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial`.

### cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial (level 9)

- **Claim/conventions:** for a finitely generated FI-module over a characteristic-zero
  field with finite-dimensional values, weight $d$ and stability degree $s$, one has
  $\dim_kV_n=P_V(n,0,0,\dots)$ for $n\ge s+d$, so the dimensions are eventually
  polynomial of degree $\le d$.
- **Sources:** CEF Theorem 1.5 with its proof from Theorem 3.3.4, printed pp. 3–4 and
  23–24; CEFN Theorem B recorded.
- **Proof route:** evaluate the character identity at the identity permutation
  ($X_1=n$, $X_i=0$ for $i\ge2$) and substitute.
- **Checks:** precheck — 1 checked, 0 failing; rendercheck — 0 errors/warnings.

## Pages, contracts, records, and gates (handoff state)

- **Pages created:** both library pages exist and render-check clean:
  `library/special-topics-in-representation-theory/character-polynomials-fi-modules-and-representation-stability.md`
  (23 items, requires the six planned page prerequisites) and its B companion
  `...-examples.md` (4 items, requires the A page).
- **Proof contracts:** `research/frontier-44-special-representation-examples-28-batch-27.proof-contracts.json`
  (version 1, scope = all 27 items) passes
  `node tools/proof-contract.mjs <file> --strict`: 0 errors, 0 warnings, 27/27 items,
  176 fact-source citation entries with exact quotes and step uses, every one of the
  110 numbered steps mapped as a derivation, and all 8 standard boundary cases on each
  item.
- **Item decisions:** all 27 recorded with `tools/step3-decisions.mjs record-item`;
  26 items `repaired` with defects `["dependency"]` (and `["dependency","format"]` for
  `lem-padded-irreducible-characters-have-character-polynomials`,
  `prop-fi-module-realizing-one-padded-irreducible-family` and
  `prop-weight-and-stability-degree-give-uniform-representation-stability-range`),
  1 item `accept` unchanged (`def-uniform-representation-stability-for-consistent-sn-sequences`).
- **Checks actually run (all on the final item texts unless noted):** precheck and
  rendercheck on all 27 items; `proof-layout.mjs` on all 27 item paths in one command
  (27 items, 110 steps, 0 defects, run once after the final edits at handoff);
  content-policy on the batch-27
  manifest (27 items, 0 errors); manifest-deps (0 errors); coverage-checklist
  `--require-destination` (2 pages, 59 results, 0 errors); item-dependency-levels
  `check --run` (no errors for any of the 27; other batches show unrelated in-flight
  mismatches); `validate-plan.mjs research/plan-spec.json --run` (no errors for either
  of our pages; only redundant-prereq advisories); depcheck (our items have no hard
  errors and no remaining cited-not-in-deps advisories).
- **Added suppliers (beyond the scaffold deps):** the completed proofs cite tensorial,
  Specht, Maschke, trace, padding and presentation suppliers that the scaffold had not
  listed, so those were added to the item frontmatter dependency lists (levels 0–5,
  none raising a declared dependency level); the full per-item reasons are in the
  Step-3b decision receipts `research/frontier-44-special-representation-examples-28-step3b-review-<item>.json`.

## Plan and published concerns (for Step 4 and the owner)

- **Fixed in-run plan mismatch (was new):** `def-fi-coinvariant-functors-and-transition-maps`
  originally cited `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`,
  which lives on the later page `eilenberg-watts-theorem-and-natural-transformations`
  (plan order 1678 > 1584), producing a forward page edge flagged by `validate-plan`
  (`undeclared-prereq`). Repaired by citing
  `prop-the-coinvariants-functor-is-right-exact` (page
  `group-cohomology-as-a-derived-functor`, already in the page's `requires`), which
  states exactly the right exactness of coinvariants over a group; no other item edge
  leaves the declared requires closure.
- **Unresolved open obligation (not ours to close):** the page-level `requires` edge
  `character-polynomials-fi-modules-and-representation-stability` →
  `kronecker-coefficients-and-internal-products` stays open: batch 26 has 11 of 15 item
  files authored (including the shared padding definition) but the kronecker page file
  and four of its items (`lem-kronecker-reduction-lemma`,
  `thm-row-gap-reduction-and-conditional-k-stability`,
  `rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known`,
  `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability`)
  are still missing. The six padding-consumer cross-batch edges are recorded
  `open` in `...-batch-27.cross-batch-dependencies.json` with the supplier's actual
  Definition text and the consumer's exact use, for the Step-5 review.
- **Source qualification (flagged for Steps 5–7):** the padded-character-polynomial
  input in `lem-padded-irreducible-characters-have-character-polynomials` rests on
  Macdonald's Chapter I §7 Example I.7.14 (printed pp. 122–124) as a sourced classical
  identity; it is cited with its locator and is not re-derived locally. Confidence:
  high that the identity is stated correctly; the concern is provenance depth, not a
  suspected defect.
- **Sibling in-flight failures observed but not ours (no repair attempted):**
  `validate-plan --run` also reports `resolve` and `undeclared-prereq` failures for
  pages `divided-powers-integral-forms-and-quantum-highest-weights`,
  `complex-algebraic-stratified-topology`, `logarithmic-hodge-complexes-and-smooth-open-weights`
  and an item `lem-c-soft-field-sheaves-are-compact-support-acyclic`; and
  `item-dependency-levels check --run` reports level mismatches for the
  projective-hodge-perverse items (e.g.
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`).
  These belong to other in-flight pairs and should clear when their authors finish; they
  are not evidence against our content.

## Handoff summary

- **Completed IDs (27, authored and checked):** all items of both pages — the 23 A
  items `def-fi-category-and-fi-module`, `def-finite-generation-and-generation-degree-of-an-fi-module`,
  `def-fi-coinvariant-functors-and-transition-maps`,
  `def-injectivity-surjectivity-and-stability-degree-of-an-fi-module`,
  `lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields`,
  `def-weight-of-a-characteristic-zero-fi-module`,
  `def-free-fi-module-generated-by-an-sm-module`,
  `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules`,
  `lem-branching-rule-for-specht-induction-and-coinvariants`,
  `lem-free-fi-modules-have-explicit-weight-and-stability-bounds`,
  `lem-generation-degree-bounds-surjectivity-degree-and-weight`,
  `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`,
  `lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight`,
  `prop-specht-constituents-of-an-fi-module-have-bounded-first-row`,
  `thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category`,
  `def-uniform-representation-stability-for-consistent-sn-sequences`,
  `prop-weight-and-stability-degree-give-uniform-representation-stability-range`,
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability`,
  `def-character-polynomial-in-cycle-counts`,
  `lem-padded-irreducible-characters-have-character-polynomials`,
  `thm-finitely-generated-fi-modules-have-eventual-character-polynomials`,
  `prop-fi-module-realizing-one-padded-irreducible-family`,
  `cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial`,
  and the 4 B items `ex-fi-permutation-module-has-character-x-one`,
  `ex-exterior-square-of-the-fi-permutation-module`,
  `ex-the-padded-family-for-lambda-two-one-begins-at-rank-five`,
  `cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation`.
- **Open obligations at handoff:** the kronecker page edge and the six padding edges
  (recorded `open` for Step 5); Steps 5–7 independent mathematical audit of the whole
  pair; the Step-4 reconciliation of the added suppliers against the design and of the
  redundant-prereq advisories on the A page.
