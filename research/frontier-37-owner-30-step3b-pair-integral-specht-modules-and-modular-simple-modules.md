# Step 3b pair checkpoints — integral-specht-modules-and-modular-simple-modules

Run `frontier-37-owner-30`, batch 23, role alpha-high. Owned pair: A page
`integral-specht-modules-and-modular-simple-modules` (order 809) and B page
`integral-specht-modules-and-modular-simple-modules-examples` (order 811).
This file is the task-authorized checkpoint for the 18 owned items; it is
appended one item at a time in the dispatch's dependency-level order.

## Conventions in force

- Left actions throughout; tabloids keep labelled rows:
  $\{t\}=\{\rho\cdot t:\rho\in R_t\}$, row sets $\{t(i,c):c\}$; the polytabloid
  is $e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\{\gamma t\}$ with
  coefficient $1$ at $\{t\}$. Source: published
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`.
- Integral form $\beta$ is the orthonormal symmetric bilinear tabloid form on
  $M^\lambda_{\mathbb Z}$, distinct from the published complex Hermitian form.
- Fixed splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$; no extra
  algebraically-closed hypothesis inserted; all 18 items are finite and AC-free.
- Scaffold sources: James (SLN 682) §§6.7, 8.14-8.15, 10.2-10.6, 11.1-11.7,
  12.1-12.4; Law/Tomczak printed pp. 11-22; Craven §2.3 printed pp. 23-27
  (Props 2.8-2.10, Cors 2.11, 2.14); Kleshchev §5.2-5.3 (PDF pp. 22-25).
  Cached full texts in `/tmp/f37-b23/` (`james.txt`, `craven.txt`,
  `tomczak.txt`, `klesh.txt`); James printed p. = PDF p. - 5.
- `research/frontier-37-owner-30-owner-authoring-direction.md` EXISTS
  (transport-recovery authorization, "I topped up, try again", 2026-09-30).
  Relevant obligations carried: preserve the escaped `\cap` in YAML source
  titles and check all frontmatter; all original scaffold IDs require
  ordinary current audit receipts; root alone handles owner escalations,
  the shared ledger/decline decisions and gate closure. The Step-1 note in
  an earlier version of this file claiming the direction file did not exist
  was stale and is corrected here. No batch-23 entry in the pre-splice
  findings file (checked at Step 1; rechecked at dispatch time). Batch 23
  consumer-batch dependency input stays `[]`.

## Checkpoints (one per authored item, in dispatch order)

### 1. `def-integral-specht-lattice-and-base-change` (level 0) — authored

- Claim: $M^\lambda_{\mathbb Z}$, $e_t$, $S^\lambda_{\mathbb Z}$; standard
  polytabloids are a $\mathbb Z$-basis; integral Garnir identity; saturated
  summand; base change $S^\lambda_R\cong R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$
  for every commutative ring; $\lambda=\varnothing$ rank one.
- Sources: James Cor. 8.6, §10.3 (printed pp. 29, 37); Law/Tomczak
  Props. 2.18-2.20, Thm. 2.21 (printed pp. 19-22).
- Deps used: published Specht definition, Young subgroup/tabloids, tabloid
  order, leading-tabloid lemma, integral Garnir relation, covariance, tensor
  distributivity. Verified: precheck pass.

### 2. `def-p-regular-and-p-restricted-partitions` (level 0) — authored

- Claim: $z_j<p$ versus $\lambda_i-\lambda_{i+1}<p$; $\lambda$ $p$-restricted
  $\iff\lambda'$ $p$-regular; $\varnothing$ satisfies both.
- Sources: James §10.1, Lem. 10.2 (printed pp. 36-37); Craven §2.3
  (printed pp. 23-24). Dep: `def-partition-young-diagram-and-conjugate-partition`.
- Verified: precheck pass.

### 3. `def-integral-tabloid-bilinear-form-and-specht-gram-matrix` (level 1) — authored

- Claim: orthonormal $\mathbb Z$-bilinear form $\beta$ on tabloids, symmetric,
  nondegenerate, $S_n$-invariant, $\kappa_t$ self-adjoint; integer Gram matrix
  $G_\lambda$ in the standard basis; scalar extension to any ring; warning that
  $\beta$ is not the published Hermitian form (no conjugation/positivity in
  characteristic $p$). Forward wikilink to the gcd lemma was removed at Step 3b
  authoring time as part of this dispatch (the gcd item was then unwritten).
- Sources: Law/Tomczak §2.2 Lem. 2.3 (printed pp. 11-14); Chan Def. 9.1,
  Rem. 9.2 (printed pp. 31-32).
- Verified: precheck pass (re-run after the link edit).

### 4. `lem-field-antisymmetrizer-image-and-dominance` (level 1) — authored

- Claim: over any field $F$, $\kappa_tM^\lambda_F=Fe_t$ with $e_t\ne0$, and
  $\kappa_tM^\mu_F\ne0\Rightarrow\lambda\unrhd\mu$; characteristic 2 and $n=0$
  included; no averaging.
- Sources: Law/Tomczak Prop. 2.4 and claim (printed pp. 12-13); James Lem. 4.6,
  Cor. 4.7 (printed pp. 16-17).
- Verified: precheck pass.

### 5. `def-modular-specht-form-and-radical-quotient` (level 2, landmark) — authored

- Claim: $S^\lambda_k=k\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$,
  $R^\lambda=S^\lambda_k\cap(S^\lambda_k)^\perp$ is an $S_n$-submodule,
  $D^\lambda=S^\lambda_k/R^\lambda$ (possibly $0$), and
  $\dim_kD^\lambda=\operatorname{rank}_k(G_\lambda\bmod p)$; module-radical
  identification explicitly deferred to the field James theorem.
- Sources: James §11.2, §11.6 (printed pp. 39-40); Law/Tomczak §2.2
  (printed pp. 13-14).
- Verified: precheck pass.

### 6. `lem-specht-gram-gcd-detects-p-regularity` (level 2) — authored (this dispatch)

- Claim: $z_j$ = number of rows of length $j$; $L=\prod_jz_j!\mid g_\lambda
  \mid U=\prod_j(z_j!)^j$, where $g_\lambda$ is the positive gcd of all
  integral pairings of integral polytabloids (equal to the gcd of the
  standard-basis Gram entries); $p\nmid g_\lambda\iff\lambda$ $p$-regular;
  for the row reversal $t^*$, $\beta(e_t,e_{t^*})=U$ and
  $\kappa_te_{t^*}=Ue_t$ over every field.
- Proof route recorded here (derived this session; independent of the printed
  proofs which use the same idea in right-action convention): (i) the
  row-shuffle group $\Pi=\prod_j\operatorname{Sym}(P_j)$ acts freely on
  tabloids with orbits of size $L$; (ii) the shuffle $\pi$ is realised on each
  polytabloid $e_u$ by a column permutation $\delta_\pi\in C_u$ with
  $\operatorname{sgn}(\delta_\pi)=\prod_j\operatorname{sgn}(\pi_j)^j$, so
  $c_u(\pi\star T)=s_\pi c_u(T)$ for every tabloid $T$, giving that each
  $\Pi$-orbit contributes $L\,c_s(T_0)c_t(T_0)$ to any pairing; (iii) the
  common tabloids of $e_t$ and $e_{t^*}$ are exactly
  $\{\{\gamma t\}:\gamma\in C_t\cap C_{t^*}\}$ because
  $\operatorname{row}_i(t^*)=\operatorname{row}_i(t)$ and $\gamma,\delta$ must
  agree on every value; each contributes $+1$; (iv) the counting
  $|C_t\cap C_{t^*}|=\prod_j(z_j!)^j=U$ via independent permutations of the
  $z_j$ column-$c$ values carried by rows of length $j$; (v) prime-divisor
  comparison of $L$ and $U$.
- Sources: James §10.3 (definition of $g_\lambda$), Lem. 10.4, Cors. 10.5-10.6
  (printed pp. 37-38); Craven Props. 2.8-2.9 (printed pp. 23-25).
- Computational cross-check (this session, `/tmp/f37b23v/verify3.py`,
  `verify4.py`): for all shapes with $n\le6$: $L\mid g\mid U$, and
  $\beta(e_t,e_{t^*})=U$; the common-tabloid set equals
  $\{\gamma t:\gamma\in C_t\cap C_{t^*}\}$ with
  $|C_t\cap C_{t^*}|=U$. The shuffle coefficient rule
  $c_u(\pi\star T)=s_\pi c_u(T)$ was verified for all $n\le5$. Both scripts
  use the library's labelled-row tabloid convention.
- Verified: precheck pass (canonical layer renumbering adopted).

### 7. `thm-james-submodule-theorem-over-an-arbitrary-field` (level 3) — authored

- Claim: for any field $F$ and any $F[S_n]$-submodule $U\le M^\lambda_F$,
  either $S^\lambda_F\le U$ or $U\le(S^\lambda_F)^\perp$; consequently
  $D^\lambda_F$ is zero or absolutely irreducible and self-dual, and if
  $D^\lambda_F\ne0$ then $R^\lambda_F$ is the unique maximal submodule,
  equals $\operatorname{rad}(S^\lambda_F)$, and $D^\lambda_F$ is the simple
  head; characteristic two and $n=0$ included, no averaging.
- Proof route: apply $\kappa_t$ to $U$; if some $\kappa_tU\ne0$ then
  $Fe_t=\kappa_tU\le U$ and cyclicity gives $S^\lambda_F\le U$; otherwise
  self-adjointness gives $U\le(S^\lambda_F)^\perp$. Kernel/rank formula via
  the form map $\varphi:S^\lambda_F\to(S^\lambda_F)^*$; base change of
  $D^\lambda$ over field extensions; nondegenerate induced form on the
  quotient gives self-duality; nonzero case gives unique maximal submodule,
  radical and simple head.
- Sources: James Thms 4.8-4.9 and §11.5 (printed pp. 15-16, 40-41);
  Law/Tomczak Thm 2.5, Cor. 2.6, Thm 2.7 (printed pp. 12-13).
- Deps used: `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
  `def-modular-specht-form-and-radical-quotient`,
  `lem-field-antisymmetrizer-image-and-dominance`,
  `def-module-radical-socle-head-and-loewy-series`,
  `def-integral-specht-lattice-and-base-change`,
  `lem-polytabloid-covariance-and-column-sign`, `thm-rank-nullity`,
  `cor-matrix-rank-equals-the-rank-of-its-linear-map`.
- Verified: precheck pass.

### 8. `ex-specht-form-rank-for-shape-two-two-in-small-characteristics` (level 3, B page) — authored

- Claim: the integral Gram matrix of the two standard polytabloids of shape
  $(2,2)$ is $\begin{pmatrix}4&2\\2&4\end{pmatrix}$, so
  $\dim_kD^{(2,2)}=0,1,2$ for $p=2,3,p>3$; in characteristic $2$ the
  Specht module $S^{(2,2)}_k$ is nonzero of dimension $2$ while its form
  vanishes identically and $D^{(2,2)}=0$.
- Sources: James §10.4, §11.1 (printed pp. 37-39); Craven Exercise 2.4,
  §2.3 (printed pp. 23-25).
- Independent computation (this session, `/tmp/f37-b23/author/check10.py`,
  standard-basis Gram over all shapes $n\le6$): $G_{(2,2)}=[[4,2],[2,4]]$
  and ranks $0,1,2$ at $p=2,3,101$, matching the item text.
- Verified: precheck pass.

### 9. `lem-conjugate-specht-sign-duality-over-fields` (level 4) — authored

- Claim: the map $\theta(\{u\})=\operatorname{sgn}(\sigma_u)
  (e_{u^{\mathsf T}}\otimes w)$ on tabloid generators of $M^{\lambda'}_F$
  is a well-defined $S_n$-homomorphism onto
  $S^\lambda_F\otimes\operatorname{sgn}$ with
  $\ker\theta=(S^{\lambda'}_F)^\perp$, so
  $M^{\lambda'}_F/(S^{\lambda'}_F)^\perp\cong
  S^\lambda_F\otimes\operatorname{sgn}\cong(S^{\lambda'}_F)^*$, over every
  field, including $n=0$ and characteristic $2$.
- Authoring defect found and repaired during authoring: the assignment
  $t\mapsto t^{\mathsf T}$ does NOT descend to tabloids, so $\theta$ is
  defined only through the signed polytabloids; the item states this
  caution explicitly in step 1.1.
- Sources: James §6.7 and §8.14-8.15 (printed pp. 25-26, 31-33).
- Computational cross-check (this session, `/tmp/f37-b23/author/check9c.py`
  and `check9c.log`): for $p\in\{2,3,5,7,101,1000003\}$ and eight shapes,
  $\operatorname{rank}\theta=f^\lambda$, $\ker\theta=(S^{\lambda'}_F)^\perp$
  in both directions, well-definedness and equivariance: all OK.
- Verified: precheck pass.

### 10. `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions` (level 4) — authored (this dispatch)

- Claim: over any field $F$ of characteristic $p$,
  $D^\lambda_F=0\iff p\mid$ every entry of $G_\lambda\iff p\mid g_\lambda
  \iff\lambda$ is not $p$-regular; equivalently $D^\lambda_F\ne0$ iff
  $z_j(\lambda)<p$ for all $j$. Moreover
  $\dim_FD^\lambda_F=\operatorname{rank}_F(G_\lambda\bmod p)$ is the
  $p$-rank of the Gram matrix, determined by $\lambda,p$ alone, positive
  exactly for $p$-regular $\lambda$; in that case $R^\lambda_F$ is the
  unique maximal submodule $=\operatorname{rad}(S^\lambda_F)$ and
  $D^\lambda_F$ is the simple, self-dual, absolutely irreducible head of
  $S^\lambda_F$. No simplicity of $S^\lambda_F$ itself is claimed.
- Proof route: $\varphi(v)=\beta_F(v,\cdot)|_{S^\lambda_F}$ has kernel
  $R^\lambda_F$ and matrix $G_\lambda\bmod p$ in the standard basis, so
  rank-nullity gives $\dim D=\operatorname{rank}(G_\lambda\bmod p)$;
  $D=0\iff$ zero matrix $\iff p\mid$ every entry $\iff p\mid g_\lambda$
  (gcd of entries, item 6); prime criterion of item 6 converts this to
  $p$-regularity; the nonzero case gets the structural conclusions from
  the James submodule theorem item 7; the rank is computed by minors and
  hence is independent of the field of characteristic $p$ and of the
  splitting system (matching the definition item for $F=k$).
- Sources: James Theorem 11.1, Definition 11.2 and Theorem 11.6 (printed
  pp. 39-40); Craven Props. 2.8-2.9, Thm. 2.5 (printed pp. 23-25).
- Deps used: `def-integral-specht-lattice-and-base-change`,
  `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
  `def-modular-specht-form-and-radical-quotient`,
  `lem-specht-gram-gcd-detects-p-regularity`,
  `thm-james-submodule-theorem-over-an-arbitrary-field`,
  `def-p-regular-and-p-restricted-partitions`,
  `def-splitting-p-modular-system-for-a-finite-group`,
  `def-module-radical-socle-head-and-loewy-series`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `thm-rank-nullity`, `cor-matrix-rank-equals-the-rank-of-its-linear-map`.
- Computational cross-check (this session, `/tmp/f37-b23/author/check10.py`):
  for all shapes $n\le6$ and $p\in\{2,3,5,7\}$ in the standard
  polytabloid basis, $\operatorname{rank}_pG_\lambda>0\iff p\nmid g_\lambda
  \iff\lambda$ $p$-regular: all OK.
- Verified: precheck pass (canonical layer renumbering: the external-fact
  step is 1.3, terminal step 5.1).

### 11. `lem-nonzero-maps-between-specht-quotients-force-dominance` (level 5) — authored (this dispatch)

- Claim: for $F$ of characteristic $p$, $\lambda$ $p$-regular, $U\le M^\mu_F$
  a submodule: every nonzero $F[S_n]$-map $\varphi:S^\lambda_F\to M^\mu_F/U$
  has $\lambda\unrhd\mu$; if $\lambda=\mu$ then
  $\operatorname{Im}\varphi=(S^\mu_F+U)/U$ so $U\nsupseteq S^\mu_F$; same for
  $\psi:D^\lambda_F\to M^\mu_F/U$; and $D^\lambda_F\cong D^\mu_F$ with
  $\lambda$ $p$-regular forces $\mu$ $p$-regular, $\mu=\lambda$.
- Proof route (derived; matches James 11.3/11.4 and Craven Prop. 2.10):
  $\lambda$ $p$-regular $\Rightarrow U_\lambda\ne0$ in $F$ (via
  $L_\lambda\mid g_\lambda\mid U_\lambda$ and the shared prime divisors);
  a nonzero $\varphi$ is nonzero on every polytabloid, so
  $\kappa_t\varphi(e_{t^*})=U_\lambda\varphi(e_t)\ne0$; lifting to $M^\mu_F$
  gives $\kappa_tM^\mu_F\ne0$, whence $\lambda\unrhd\mu$ by the
  antisymmetrizer lemma; when $\mu=\lambda$, $\kappa_tM^\lambda_F=Fe_t$ forces
  $e_t+U\in\operatorname{Im}\varphi$ so $\operatorname{Im}\varphi$ is the
  whole image of $S^\mu_F$; quotient version by composing with
  $S^\lambda_F\twoheadrightarrow D^\lambda_F$; separation by applying the
  quotient version to $D^\lambda\cong D^\mu$ composed with the injection
  $D^\mu\hookrightarrow M^\mu_F/(S^\mu_F)^\perp$ in both directions.
- Sources: James Lemma 11.3 and Corollary 11.4, printed pp. 39-40; Craven
  Proposition 2.10, printed pp. 25-26.
- Deps used: `def-integral-specht-lattice-and-base-change`,
  `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
  `def-modular-specht-form-and-radical-quotient`,
  `lem-field-antisymmetrizer-image-and-dominance`,
  `lem-specht-gram-gcd-detects-p-regularity`,
  `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions`,
  `def-dominance-order-on-partitions`,
  `lem-polytabloid-covariance-and-column-sign`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-module-radical-socle-head-and-loewy-series`.
- Verified: precheck pass. (The equal-rank bookkeeping was double-checked by
  hand against James 11.3's proof structure; a claimed endomorphism
  counterexample with image $R^{(2,1)}$ at $p=3$ was retracted after
  computing $D^{(2,1)}\cong\operatorname{sgn}$ there, so no endomorphism with
  that image exists.)

### 12. `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads` (level 6) — authored (this dispatch)

- Claim: for a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$,
  the modular Specht quotients $D^\lambda$ indexed by $p$-regular
  $\lambda\vdash n$ are nonzero, self-dual, absolutely irreducible, pairwise
  non-isomorphic simple $k[S_n]$-modules, and every simple $k[S_n]$-module is
  isomorphic to exactly one of them (so the number of simples equals the
  number of $p$-regular partitions); for non-$p$-regular $\lambda$,
  $D^\lambda=0$.
- Proof route: simple-head and vanishing facts from the level-4 criterion
  theorem; pairwise non-isomorphism from the level-5 dominance lemma;
  p-regular elements of $S_n$ have all cycle lengths prime to $p$
  (order = lcm of cycle lengths) and conjugacy classes are indexed by cycle
  type, so the number of $p$-regular classes equals the number of partitions
  of $n$ into parts not divisible by $p$; the formal identity
  $\prod_{j\ge1}(1+x^j+\cdots+x^{(p-1)j})=\prod_{p\nmid j}(1-x^j)^{-1}$
  (proved coefficient-wise using
  $1+x^j+\cdots+x^{(p-1)j}=(1-x^{pj})/(1-x^j)$ with cancellation beyond
  degree $N$) shows this also equals the number of $p$-regular partitions;
  Brauer's count for splitting fields closes the count; injection plus equal
  cardinality gives exhaustiveness.
- Sources: James §10.2, Lemma 10.2, Theorems 11.1 and 11.5, printed
  pp. 36-37 and 39-41; Law/Tomczak Thm. 2.15 (Brauer) and Prop. 2.16,
  printed pp. 16-17; Craven Thm. 2.5, Cor. 2.11, printed pp. 24-26.
- Deps used: the level-4 criterion theorem, the level-5 dominance lemma,
  `def-modular-specht-form-and-radical-quotient`,
  `def-splitting-p-modular-system-for-a-finite-group`,
  `def-module-radical-socle-head-and-loewy-series`,
  `def-p-regular-and-p-restricted-partitions`,
  `def-p-regular-and-p-singular-elements`,
  `def-permutation-support-disjoint-cycles-and-cycle-type`,
  `cor-order-of-a-permutation-from-its-cycle-lengths`,
  `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`,
  `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes`.
- Computational cross-check (this session, `/tmp/f37-b23/author/check11.py`):
  for $p\in\{2,3,5,7\}$ and $n\le15$, the number of $p$-regular partitions
  equals the number of partitions into parts not divisible by $p$ (=
  number of $p$-regular cycle types): all OK.
- Verified: precheck pass (canonical layer repair adopted: identity step 1.3,
  class count 2.1, coefficient interpretation 2.2, injection 2.3, count 3.1,
  exhaustiveness 4.1, terminal 5.1).

### 13. `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality` (level 7) — authored (this dispatch)

- Claim: for the splitting system $(K,\mathcal O,k)$, $p$-restricted $\mu$
  and the dual Specht module $S(\mu):=(S^\mu_k)^*$:
  $S(\mu)\cong S^{\mu'}_k\otimes\operatorname{sgn}$ and
  $D(\mu):=\operatorname{hd}(S(\mu))\cong D^{\mu'}\otimes\operatorname{sgn}$;
  equivalently $D^\lambda\cong D(\lambda')\otimes\operatorname{sgn}$ for
  $p$-regular $\lambda$; and $\mu\mapsto D(\mu)$ is a bijection from
  $p$-restricted partitions to isomorphism classes of simple
  $k[S_n]$-modules. In characteristic $2$ the sign is trivial but the
  transposition remains.
- Proof route: James Thm. 8.15 (conjugate Specht = sign-twisted dual) with
  $\lambda:=\mu'$ identifies $S(\mu)$ with $S^{\mu'}_k\otimes sgn$; the
  one-dimensional twist preserves submodule lattices, radicals, heads,
  simplicity and absolute irreducibility, and twisting twice returns the
  original module; $p$-regular $\mu'$ has simple head $D^{\mu'}$; the
  bijection follows from the L6 classification plus the sign-twist inverse.
- Sources: James Theorem 8.15 (printed p. 33) and Theorem 11.5 (p. 40);
  Kleshchev Remark 5.5 (q=1 dictionary $D^\mu\cong D(\mu^t)\otimes sgn$,
  PDF p. 25).
- Deps used: `def-p-regular-and-p-restricted-partitions`,
  `lem-conjugate-specht-sign-duality-over-fields`,
  `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
  `def-modular-specht-form-and-radical-quotient`,
  `def-integral-specht-lattice-and-base-change`,
  `def-sign-representation-and-restriction-of-a-representation`,
  `def-module-radical-socle-head-and-loewy-series`,
  `def-tensor-product-of-modules-by-generators-and-relations`.
- Verified: precheck pass.

### 14. `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular` (level 7) — authored (this dispatch)

- Claim: with $d_{\lambda\mu}=[S^\lambda_k:D^\mu]$ (the decomposition number
  from the stable lattice $\mathcal O\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$
  in the ordinary irreducible $S^\lambda_K$): $d_{\lambda\mu}=0$ unless
  $\mu\unrhd\lambda$; $d_{\lambda\lambda}=1$ for $p$-regular $\lambda$; and
  with $p$-regular rows (block first) and columns in decreasing lexicographic
  order the leading square block is lower unitriangular. A constraint, not a
  formula for all entries.
- Proof route: char-$0$ nondegeneracy of the integral Gram matrix
  ($\det G_\lambda\ne0$ from the positive definite Hermitian form) makes
  $S^\lambda_K$ absolutely irreducible via the James submodule theorem;
  $\mathcal O\otimes S^\lambda_{\mathbb Z}$ is the stable lattice with
  reduction $S^\lambda_k$, giving the decomposition numbers by the published
  lattice-independence theorem. Every factor of $M^\lambda_k/S^\lambda_k$ is
  $D^\nu$ with $\nu\rhd\lambda$: a factor sits in $M^\lambda_k/U$ with
  $U\supseteq S^\lambda_k$, and the level-5 lemma gives $\nu\unrhd\lambda$
  while its equality clause forbids $\nu=\lambda$. Duality
  $S^{\lambda\perp}_k\cong(M^\lambda_k/S^\lambda_k)^*$ transfers the same
  factor list to $S^{\lambda\perp}_k$, and the series
  $0\subseteq R^\lambda\subseteq S^\lambda_k\subseteq M^\lambda_k$ then gives
  the bound and $[S^\lambda_k:D^\lambda]=1$. Strict dominance implies
  strictly greater lex order, giving the triangular block.
- Sources: James Theorem 12.1 and Corollaries 12.2-12.3, printed pp. 42-43;
  Craven Prop. 2.10 and Cor. 2.11, printed pp. 25-26.
- Deps used: `def-integral-specht-lattice-and-base-change`,
  `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
  `def-modular-specht-form-and-radical-quotient`,
  `def-og-lattice-and-reduction-modulo-the-maximal-ideal`,
  `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups`,
  `def-decomposition-numbers-and-decomposition-matrix`,
  `thm-decomposition-map-is-independent-of-the-stable-lattice`,
  `def-composition-series-and-length-of-a-module`,
  `thm-jordan-holder-theorem-for-modules`,
  `def-invariant-inner-product-on-a-tabloid-module`,
  `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`,
  `thm-james-submodule-theorem-over-an-arbitrary-field`,
  the level-4 criterion theorem, the level-5 dominance lemma,
  `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
  `def-dominance-order-on-partitions`,
  `def-p-regular-and-p-restricted-partitions`,
  `def-splitting-p-modular-system-for-a-finite-group`.
- Computational cross-check (this session, `/tmp/f37-b23/author/check12.py`):
  full submodule-lattice computation for all shapes of $n=3$ at
  $p\in\{2,3,5\}$ matches the decomposition matrices of James §12.4,
  including the $p=3$ uniserial $S^{(2,1)}$ with factors
  $D^{(3)},D^{(2,1)}$ each once.
- Verified: precheck pass.

### 15. `rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity` (level 8) — authored (this dispatch)

- Claim: the dominance-zero pattern and the $p$-regular diagonal ones
  constrain the decomposition matrix but do not determine its remaining
  entries; a determination of an allowed off-diagonal entry needs the
  composition factors of the Specht module as separate input, and no general
  positive-characteristic formula or algorithm is asserted by this pair.
- Proof route: the triangle data for given $n,p$ consist of index sets, the
  forced-zero set $\{(\lambda,\mu):\mu\ntrianglerighteq\lambda\}$, the
  diagonal positions with value $1$, and the lex ordering; no condition
  assigns a value at an allowed position. Witness: for $n=3$ the
  $p$-regular partitions are $(3),(2,1)$ at both $p=2$ and $p=3$, and both
  recorded matrices (James Example 12.4) satisfy the same formal constraints,
  yet $d_{(2,1),(3)}=0$ at $p=2$ and $=1$ at $p=3$; the source's §24 opening
  records that the general composition factors are not determined by the
  theory expounded there ("only partial results").
- Sources: James Example 12.4, printed p. 43; James §24 opening, printed
  p. 98 (quotes: "no known way of determining the composition factors of the
  general Specht module when the ground field $F$ has characteristic a prime
  $p$"; "The theorems we expound give only partial results").
- Deps used:
  `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
  `def-decomposition-numbers-and-decomposition-matrix`,
  `def-dominance-order-on-partitions`,
  `def-p-regular-and-p-restricted-partitions`.
- Verified: precheck pass (layers 1.1-1.2, 2.1, 3.1).

### 16. `cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head` (level 8) — authored (this dispatch)

- Claim refuted: every nonzero modular Specht module $S^\lambda_k$ is simple
  and has nonzero invariant-form quotient $D^\lambda$. Two independent
  failures, one per clause.
- Witness 1 ($p=3$, $\lambda=(2,1)$): $S^{(2,1)}_k$ has $k$-basis
  $e_t=v_3-v_1$, $e_u=v_2-v_1$; in characteristic $3$,
  $w:=e_t+e_u=v_1+v_2+v_3$ is nonzero and $S_3$-fixed, so $kw$ is a proper
  $1$-dimensional trivial submodule; the quotient is the sign
  representation (computed via $(12)\cdot e_t\equiv-e_t\bmod kw$, since
  $v_3-v_2+e_t=3v_3-w$). Hence $S^{(2,1)}_k$ is reducible, while
  $D^{(2,1)}\ne0$ by the level-4 criterion.
- Witness 2 ($p=2$, $\lambda=(2,2)$): the level-3 example's $G_{(2,2)}=
  \begin{pmatrix}4&2\\2&4\end{pmatrix}\equiv0\bmod2$, so
  $\dim_kD^{(2,2)}=\operatorname{rank}_2=0$ while $S^{(2,2)}_k$ is nonzero of
  dimension $2$ (as a $2$-singular label the criterion predicts the
  vanishing too). Explicitly no simplicity claim is made for
  $S^{(2,2)}_k$.
- Sources: James Example 5.1 (p. 18) and Example 12.4 (p. 43); Craven
  §2.3/Exercise 2.4 (pp. 23-25).
- Deps used: `def-integral-specht-lattice-and-base-change`,
  `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
  `def-modular-specht-form-and-radical-quotient`,
  `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions`,
  `ex-specht-form-rank-for-shape-two-two-in-small-characteristics`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-young-tableau-standard-tableau-and-shape`, `def-simple-module`,
  `def-submodule`, `def-splitting-p-modular-system-for-a-finite-group`.
- Verified: precheck pass after adopting canonical layers (1.1, 1.2, 2.1).

### 17. `cex-p-regular-and-p-restricted-are-not-the-same-label` (level 8) — authored (this dispatch)

- Claim refuted: the $p$-regular and $p$-restricted partitions of $n$
  coincide, so that the two labellings assign the same partition to each
  simple module. Witness at $n=2$, $p=2$: $(2)$ has $z_2=1<2$ (2-regular)
  but $2-0=2\not<2$ (not 2-restricted); $(1,1)$ has $z_1=2\not<2$ (not
  2-regular) but differences $0,1<2$ (2-restricted); and $(2)'=(1,1)$.
- Same-simple link: by the level-7 duality proposition,
  $D^{(2)}\cong D((1,1))\otimes\operatorname{sgn}\cong D((1,1))$ since the
  sign is trivial in characteristic $2$; so the label change is visible even
  where the sign twist is invisible. This is why a $p$-restricted good-node
  statement needs the transpose (and, in odd characteristic, the sign twist)
  before it is applied to the James label.
- Sources: James §10.1 and Lemma 10.2, printed pp. 36-37; Kleshchev
  Remark 5.5 (q=1 dictionary), PDF p. 25.
- Deps used: `def-p-regular-and-p-restricted-partitions`,
  `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
  `def-sign-representation-and-restriction-of-a-representation`,
  `def-partition-young-diagram-and-conjugate-partition`.
- Verified: precheck pass after adopting canonical layers (1.1, 1.2, 2.1,
  3.1).

### 18. `ex-decomposition-matrices-of-s3-in-characteristics-two-and-three` (level 8) — authored (this dispatch)

- Claim: for $S_3$ with rows $(3),(2,1),(1,1,1)$ and columns the
  $p$-regular labels $(3),(2,1)$,
  $p=2$: $\begin{pmatrix}1&0\\0&1\\1&0\end{pmatrix}$,
  $p=3$: $\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}$; both obey the
  dominance bound and lower-unitriangular shape.
- Proof route: $(3)$: unique tabloid spans the trivial module, $G_{(3)}=(1)$;
  $(2,1)$: basis $e_t=v_3-v_1$, $e_u=v_2-v_1$ with
  $G_{(2,1)}=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, of rank $2$ mod $2$
  (so $R=0$, $S\cong D^{(2,1)}$) and rank $1$ mod $3$; $(1,1,1)$: the single
  standard polytabloid $e=\sum_\sigma\operatorname{sgn}(\sigma)\{\sigma w\}$
  satisfies $\tau\cdot e=\operatorname{sgn}(\tau)e$, so the module is the
  sign representation, trivial at $p=2$ and nontrivial at $p=3$. At $p=3$,
  $w=e_t+e_u=v_1+v_2+v_3$ spans a trivial submodule of $S^{(2,1)}_k$ and the
  quotient is sign; hence the factor lists
  $S^{(1^3)}\cong D^{(2,1)}$, $[S^{(2,1)}]=[D^{(3)}]+[D^{(2,1)}]$,
  $S^{(3)}=D^{(3)}$. Cross-checked by the submodule-lattice script
  `/tmp/f37-b23/author/check12.py` and James Example 12.4.
- Sources: James Example 5.1 (p. 18), Theorem 12.1 and Example 12.4
  (pp. 42-43); Craven §2.3/Exercise 2.4 (pp. 23-25).
- Deps used: `def-integral-specht-lattice-and-base-change`,
  `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
  `def-modular-specht-form-and-radical-quotient`,
  `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
  `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
  `def-decomposition-numbers-and-decomposition-matrix`,
  `def-sign-representation-and-restriction-of-a-representation`,
  `def-p-regular-and-p-restricted-partitions`,
  `def-dominance-order-on-partitions`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-young-tableau-standard-tableau-and-shape`,
  `def-splitting-p-modular-system-for-a-finite-group`, `def-simple-module`.
- Verified: precheck pass after adopting canonical layers (1.1, 1.2, 2.1,
  3.1, 3.2, 4.1).

All 18 dispatch items are now authored; the 18-item explicit-path precheck is
clean (`18 checked, 0 failing`).

## Step-3b completion record

**Status: complete for this dispatch.** All 18 owned items are authored on
their pages, both library pages are written, the batch manifest carries the
refreshed `deps` and recomputed `dependency_level`s, the batch proof-contracts
file is strict-clean, and all 18 item decisions are recorded with confidence
1 and current input hashes (`step3-decisions check --phase final` reports no
open item or page belonging to this pair).

### Completed IDs

A page `integral-specht-modules-and-modular-simple-modules` (14):
`def-integral-specht-lattice-and-base-change`,
`def-p-regular-and-p-restricted-partitions`,
`def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
`lem-field-antisymmetrizer-image-and-dominance`,
`def-modular-specht-form-and-radical-quotient`,
`lem-specht-gram-gcd-detects-p-regularity`,
`thm-james-submodule-theorem-over-an-arbitrary-field`,
`lem-conjugate-specht-sign-duality-over-fields`,
`thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions`,
`lem-nonzero-maps-between-specht-quotients-force-dominance`,
`thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
`rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity`.

B page `integral-specht-modules-and-modular-simple-modules-examples` (4):
`ex-specht-form-rank-for-shape-two-two-in-small-characteristics`,
`cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head`,
`cex-p-regular-and-p-restricted-are-not-the-same-label`,
`ex-decomposition-matrices-of-s3-in-characteristics-two-and-three`.

### Local repairs made during authoring

1. `def-modular-specht-form-and-radical-quotient`: the splitting-system fact
   F1 (char $p$, splitting fields) is now used, not merely declared, in
   step 1.1.
2. `lem-specht-gram-gcd-detects-p-regularity`: the declared but unused
   polytabloid-covariance fact F6 was removed (later facts renumbered) and the
   stale `step 7.1` cross-reference in the Statement corrected to step 6.1.
3. `thm-james-submodule-theorem-over-an-arbitrary-field`: step 1.2 now defines
   $R^\lambda_F,D^\lambda_F$ through F5, so the declared definitional supplier
   is actually consumed.
4. `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`:
   F5 (radical/head) is now used in step 1.2, and the missing
   `def-splitting-p-modular-system-for-a-finite-group` dependency declared.
5. `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`: the
   unused rank-one-image clause and its source were removed from F4 (step 2.2
   uses only the James alternative).
6. `lem-nonzero-maps-between-specht-quotients-force-dominance`: the missing
   `def-p-regular-and-p-restricted-partitions` dependency of fact F1 added.
7. `lem-conjugate-specht-sign-duality-over-fields`: step 5.1 cited a
   nonexistent step 3.2; replaced by the correct base-change steps 4.1/2.3.
8. `ex-decomposition-matrices-of-s3-in-characteristics-two-and-three`: a
   stray `Example 12.4` token in step 4.1 was replaced by the source
   reference (it would otherwise have demanded a bogus contract input).
9. `cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head`:
   the design's single `(2,2)`-in-characteristic-2 witness was corrected; the
   item now uses `(2,1)` in characteristic 3 for reducibility and `(2,2)` in
   characteristic 2 for the vanishing form quotient.

### Checks actually run (final state)

| Check | Command | Result |
| --- | --- | --- |
| Explicit-path precheck | `precheck` on the 18 items (pages are covered by `rendercheck`) | 18 checked, 0 failing |
| Render gate | `rendercheck` on both pages | OK (no wikilink in math, no multiline displays, KaTeX/YAML parse) |
| Strict proof contracts | `proof-contract … --strict` | 0 errors, 18/18 items checked; 1 nonfatal `shotgun-bracket` warning on `thm-james…` step 1.1 |
| Content policy | `content-policy … -batch-23.pages.json` | 18 scoped items, 0 errors, 0 warnings |
| Dependency levels | `item-dependency-levels check --run …` | only a foreign batch-24 error (below); no batch-23 error |
| Plan validation | `validate-plan research/plan-spec.json` | acyclic and consistent; pre-existing redundant-prereq notes only |
| Coverage checklist | `coverage-checklist … -batch-23.coverage.json --require-destination` | 1 page, 55 harvested results, 0 errors, 0 warnings |
| Repo dependency gate | `depcheck` | 0 errors and 0 warnings involving batch-23 items (repo-wide foreign findings remain) |
| Forward refs / recorded results | `fwdcheck`, `extcheck` | 0 findings involving batch-23 items |
| Step-3 decisions | `step3-decisions check --phase final` | all 18 pair items closed; 9 `accept`, 9 `repaired`; pair scope current |
| Cross-batch input / ledger | batch-23 input `[]`; `frontier-dependency-ledger refresh` | refreshed and deduplicated |

### Flags, escalations and open obligations

- **Foreign dependency-level defect (escalated, not edited).**
  `item-dependency-levels check --run frontier-37-owner-30` fails on
  `thm-principle-of-descent-and-domination` (batch 24): manifest
  `dependency_level` 3 vs computed 2. This item belongs to another pair; it
  must be corrected by its owner.
- **Nonfatal contract warning.** `thm-james-submodule-theorem-over-an-arbitrary-field`
  step 1.1 cites four of its seven declared facts while steps 2.2 and 5.1
  cite only numbered steps. The bracketing is the item's actual use pattern;
  the warning is recorded here for the serial reviewer rather than silenced.
- **No unfinished in-run suppliers.** Every direct dependency of the 18 items
  is a published item; the batch-23 cross-batch dependency input is `[]`.
  No consumer decision was left escalated for a missing supplier.
- **Published concerns.** No potentially defective published item was
  identified during this authoring pass; no published item or page was
  edited. The removed covariance citation is a local scaffold repair, not a
  defect of the published covariance lemma.
- **Coverage scope.** The batch coverage file carries the A page (55
  harvested results); the B items harvested from sources (`ex-specht-form-rank…`
  via James §11.7, `ex-decomposition-matrices…` via §12.4) are named there as
  destinations, and the two locally constructed counterexamples are not
  source harvests. This matches the batch-22 pair precedent.
