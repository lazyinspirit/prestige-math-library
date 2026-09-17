# Step 3b slice 1b report — `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13, pair
`real-forms-and-real-semisimple-lie-algebras`, slice 1b (resume of slice 1):
restricted roots, restricted Weyl group, nilpotent n, Lie-algebra and global
Iwasawa, uniqueness/change of positive system (Knapp VI §§4-5). Binding
directions read first: `research/phase-2-remaining-27-real-forms-recovery-direction.md`,
`research/phase-2-remaining-27-real-forms-slice.task.md`, and
`research/phase-2-remaining-27-owner-authoring-direction.md`. Only
`items/<id>.md` files for the nine dispatched ids and this report were written;
the batch manifest, coverage, proof-contract file, batch notes, pair report and
cross-batch ledger were not touched.

Authoritative source copy: Knapp, *Lie Groups Beyond an Introduction*, 2nd ed.,
`https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf`,
5,060,066 bytes, sha256_16 `bd7e983a2389349b` (matches the coverage stamp);
printed pages cited below are Knapp's printed page numbers. Etingof's
`lnlg.pdf` (1,510,934 bytes, sha256_16 `80389a10d1f86b37`) was consulted for
§§43.1/43.6.

## 1. Items, decisions, checks

All nine dispatched ids were worked in dispatch order. Decisions recorded with
`node tools/step3-decisions.mjs record-item --run phase-2-remaining-27
--item <id> --decision accept|repaired --confidence 1 --dependencies '<json>'
--reason '<evidence>'`; the dependencies recorded are the items' current
frontmatter `deps`. `node tools/step3-decisions.mjs check --run
phase-2-remaining-27 --phase final` reports all nine as closed.

| # | item | decision | precheck | rendercheck |
|---|---|---|---|---|
| 1 | `def-restricted-root-and-restricted-root-space` | repaired | n/a (definition) | OK |
| 2 | `thm-restricted-root-space-decomposition` | repaired | PASS (direct) | OK |
| 3 | `prop-restricted-root-systems-may-be-nonreduced` | repaired | PASS (direct) | OK |
| 4 | `def-restricted-weyl-group` | repaired | n/a (definition) | OK |
| 5 | `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system` | repaired | PASS (direct) | OK |
| 6 | `def-positive-restricted-roots-and-nilpotent-n-algebra` | repaired | n/a (definition) | OK |
| 7 | `thm-iwasawa-decomposition-on-the-lie-algebra-level` | repaired | PASS (direct) | OK |
| 8 | `thm-global-iwasawa-decomposition` | repaired | PASS (direct) | OK |
| 9 | `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition` | accept (newly authored) | PASS (direct; canonical numbering adopted after one REPAIR report) | OK |

Commands actually run (from the repo root, explicit paths throughout):

```
node tools/tsx-run.mjs tools/precheck.mts items/<the nine ids>.md   # 6 proof-bearing items PASS, 0 failing
node tools/rendercheck.mjs <the nine explicit paths>               # OK — 9 files
node tools/depcheck.mjs --quiet                                    # no finding on any of the nine
node tools/content-policy.mjs research/phase-2-remaining-27-batch-13.pages.json
node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-13.pages.json   # 116 items, 0 errors
node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-13.coverage.json --require-destination  # 2 pages, 29 results, 0 errors, 0 warnings
node tools/validate-plan.mjs research/plan-spec.json               # exit 0
node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final    # the nine items closed
```

`content-policy` on the batch now reports only `scope-item-missing` rows for
items still owned by other slices; no policy error remains on any of the nine
items. Repo-wide `depcheck` shows no finding for any of the nine; the only
findings in the repo belong to other pairs. The strict proof-contract check was
not run: `research/phase-2-remaining-27-batch-13.proof-contracts.json` still
carries no entry for this pair (that shared file is the orchestrator's merge
target; the slice dispatch forbids this lane editing it). The contract material
is supplied in §5 for that merge.

## 2. Audit results and repairs

**1 `def-restricted-root-and-restricted-root-space`** (Knapp VI §4 p. 370).
Definition verified (root spaces, g_0^0 = Z_{g_0}(a), multiplicities).
Repair: the unmotivated clause "$\lambda\mapsto\mathfrak g_0^\lambda$ is
additive ... whenever $\lambda+\mu$ is defined" was replaced by the exact
bracket inclusion $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq
\mathfrak g_0^{\lambda+\mu}$, attributed to the decomposition item (Jacobi
identity).

**2 `thm-restricted-root-space-decomposition`** (Knapp Prop. 6.40 and its proof,
pp. 370-371, with Lemma 6.50 for the regular-element centralizer and finite
dimension for finiteness). All five assertions and steps 1.1-6.1 re-checked:
self-adjointness of ad H for H in p_0 (the displayed computation is correct),
simultaneous diagonalisation of the commuting family, pairwise B_theta
orthogonality of the eigenspaces for distinct functionals, a = p_0 ∩ g_0^0 by
maximality, directness, and the empty case (a = 0) in which every statement is
vacuous or trivially true. Repair: [L3] invoked the spectral theorem without a
supplier; added `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
(citation in [L3] and dependency).

**3 `prop-restricted-root-systems-may-be-nonreduced`** (Knapp §4 Example 2 for
su(p,q) pp. 371-372; §5 Prop. 6.52 and Cor. 6.53 pp. 379-381; the classification
of the nonreduced irreducible case is the standard one, reduced here to the
cited root-system machinery). Two repairs:

- **Confirmed defect in the recorded proof.** Step 3.2 claimed that
  $E_{12}-E_{21}+E_{23}+E_{32}$ and $i(E_{21}+E_{23}-E_{12}-E_{32})$ span the
  eigenvalue-1 space of ad H for H = E_{13}+E_{31}. Exact computation of
  $X^*J+JX$ (J = diag(1,1,-1)) shows the second matrix is not even an element
  of su(2,1), and [H,X] is not proportional to X. It was replaced by the
  verified vector $i(E_{12}+E_{21}-E_{23}+E_{32})$, which satisfies the
  J-condition and [H,X] = X. The eigenvalue multiplicities (0 with multiplicity
  2, ±1 with multiplicity 2 each, ±2 with multiplicity 1 each), the centralizer
  Z_{p_0}(H) = a, m_{±f} = 2 and m_{±2f} = 1 were re-verified by exact
  computation; they agree with Knapp's su(p,q) multiplicities
  $2(p-q)$, 1 and 2 for $\pm f_i$, $\pm2f_i$ and $\pm f_i\pm f_j$.
- **Undefined group.** The statement used N_K(a) without defining K;
  it now installs the pair's global setup (G connected semisimple with finite
  center, global Cartan involution Theta with dTheta_e = theta, K = G^Theta, closed compact with Lie algebra k_0), the same convention used by `def-restricted-weyl-group`, the restricted-Weyl-group theorem and the uniqueness/change-of-positive-system item.

The classification half (steps 5.2, 6.1, 7.1-7.4, 8.1-8.2, 9.1, 10.1, 11.1,
12.1) was re-read against the cited root-system suppliers: the possible positive
multiples of a root are {a} or {a,2a}, Σ_s is a reduced crystallographic root
system with W(Σ_s) = W(Σ) and the same hyperplanes, reducibility of Σ is
equivalent to that of Σ_s, every root of Σ_s is W-conjugate to a simple root,
$\langle\beta,\alpha\rangle\langle\alpha,\alpha\rangle^{-1}\in\mathbb Z$ for
β in Ψ, the Dynkin diagram argument gives B_r with the double edge at the end,
Ψ is exactly the short-root class, and the resulting isomorphism carries Σ onto
BC_r preserving Cartan integers. Rank one (8.2) gives BC_1.

**4 `def-restricted-weyl-group`** (Knapp §5 p. 381, W(G,A) = N_K(a)/Z_K(a)).
Repair of the setup only: the earlier "analytic subgroup of the ambient group"
was replaced by the pair's exact setup (G connected semisimple with finite
center, global Cartan involution Θ with dΘ_e = θ, K = G^Θ, closed compact with
Lie algebra k_0), and the unproved label "compact" was removed where it was not
available. N_K, Z_K, the quotient, the faithful action on a and the dual action
on a* were verified.

**5 `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system`**
(Knapp Lemma 6.56 and Thm 6.57 with their proofs, pp. 382-384, plus Prop.
6.52(c) pp. 379-380). The whole route was re-derived: W(Σ) ⊆ W(g_0,a) from the
$k_\lambda$ of Prop. 6.52(c); Ad(K) permutes Σ and the chambers; $H_\delta$ is
regular by the Weyl-vector computation for the reduced system Σ_s;
$\mathfrak u=\mathfrak k_0\oplus i\mathfrak p_0$ is a compact real form with
negative definite Killing form; the restriction of Ad(k'') to u lies in
$\tilde U=\operatorname{Aut}(\mathfrak u)^0$ and centralises the torus
$S=\overline{\{\exp(t\,i\operatorname{ad}_{\mathfrak u}H_\delta)\}}$; the
Lie algebra of the (connected, by torus centralisers in compact connected
groups) group $Z_{\tilde U}(S)$ is
$\operatorname{ad}_{\mathfrak u}(\mathfrak z_{\mathfrak u}(\mathfrak s'))$
with $\mathfrak z_{\mathfrak u}(\mathfrak s')\subseteq\mathfrak m\oplus
i\mathfrak a$ via the complexified Lemma 6.50
$Z_{\mathfrak g_0^{\mathbb C}}(H_\delta)=(\mathfrak a\oplus\mathfrak m)^{\mathbb C}$;
hence $\rho$ fixes $i\mathfrak a$, Ad(k'') fixes a, and the class of k lies in
W(Σ). Repairs: (i) statement/Given now install the same (G,Θ,K) setup as the
definition; (ii) [L2] now derives Ad(K)-invariance of k_0, p_0, B, B_theta from
$\operatorname{Ad}(\Theta(g))=\theta\operatorname{Ad}(g)\theta^{-1}$; (iii) the
degenerate case a = 0 (Σ = ∅, N_K(a) = K = Z_K(a), both groups trivial) is
handled at the start of step 1.1, so the rank-zero/empty case is covered.

**6 `def-positive-restricted-roots-and-nilpotent-n-algebra`** (Knapp §4 p. 373).
Repairs: (i) the paragraph asserting nilpotency contained a garbled height
argument (height with respect to an unspecified basis, no lower bound); it now
states that n is nilpotent, that a⊕n is solvable with derived algebra n and that
g_0 = k_0⊕a⊕n are proved in the Lie-algebra Iwasawa item, with the correct
one-line reason (the positive restricted roots have a positive minimum and a
finite maximum at a regular element cutting out Σ+; Σ+ = ∅ gives n = 0);
(ii) added the citation and dependency
`lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces`
for the existence of regular elements; (iii) removed one vacuous converse
clause in the positive-system definition.

**7 `thm-iwasawa-decomposition-on-the-lie-algebra-level`** (Knapp Prop. 6.43 and
its proof, pp. 373-374). All steps re-verified: n is a subalgebra; nilpotency
from $k m\le M$ for iterated brackets; k_0 ∩ (a⊕n) = 0 by theta-stability and
disjointness of Σ+ and Σ-; spanning by the explicit decomposition
$X = Z_1+Z_2+Z_3$; $[\mathfrak a,\mathfrak n]=\mathfrak n$;
$[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=\mathfrak n$ and
solvability. Repair: in the degenerate case Σ+ = ∅ (a = 0, g_0 compact) the
minimum m and maximum M of step 1.2 do not exist; added the case split
"if Σ+ = 0 then n = 0 and nilpotency is trivial".

**8 `thm-global-iwasawa-decomposition`** (Knapp Lemmas 6.44-6.45 and Thm 6.46
with its proof, pp. 373-376; finite-center hypotheses of Thm. 6.31). Four
repairs, all in the recorded proof:

- **Ordering defect in step 1.2.** The basis was listed "with the vectors of
  g_0^0 first"; with that order ad n is lower triangular, not upper (in
  sl(2,R), ad e carries h to -2e). Replaced by the ordering in non-increasing
  $\lambda(H_0)$: root vectors of Σ+, then g_0^0, then root vectors of Σ-; the
  existing argument ($\lambda_i=\lambda_j+\lambda$ forces
  $\lambda_i(H_0)>\lambda_j(H_0)$, hence i < j) is then correct and ad n is
  strictly upper triangular.
- Step 3.1: replaced "n is nilpotent and simply connected as a vector space" by
  the correct chain (N connected, nilpotent, and simply connected because
  Ad|_N is injective onto the simply connected N_1 of step 2.1), so that exp:
  n → N is a diffeomorphism by the nilpotent-exponential item.
- Step 5.1 (injectivity on the adjoint group): the displayed identity
  $k = a_1'a_1^{-1}n_1'n_1^{-1}$ was not the actual expression; it now reads
  $k = a_1'n_1'n_1^{-1}a_1^{-1} = (a_1'a_1^{-1})(a_1(n_1'n_1^{-1})a_1^{-1})$,
  both factors upper triangular with positive diagonal. The conclusion k = 1
  and $k_1 = k_1'$ is then followed by $A_1\cap N_1=\{1\}$ to get
  $a_1=a_1'$, $n_1=n_1'$.
- Closedness of A and N was promised in the statement but not proved; added that
  the multiplication map is a homeomorphism onto G, so the images of the closed
  subsets $\{1\}\times A\times\{1\}$ and $\{1\}\times\{1\}\times N$ are closed
  in G.

Local-diffeomorphism and inverse-function arguments (steps 1.3, 4.1, 6.1, 6.2,
7.1) and the surjectivity/injectivity split of step 5.1 were re-checked.

**9 `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition`**
(newly authored; Knapp §5 introduction, p. 378, Cor. 6.55 p. 381 and the
discussion after Cor. 6.53, with Thm. 6.51 p. 378 and Thm. 6.57 p. 383).
Contents: (a) uniqueness of kan for fixed data (injectivity of the Iwasawa
diffeomorphism); (b) dependence: A determines and is determined by a, and
$\mathfrak n(-\Sigma^+)=\theta\mathfrak n(\Sigma^+)$,
$N(-\Sigma^+)=\Theta(N(\Sigma^+))\ne N(\Sigma^+)$ whenever
$\mathfrak n(\Sigma^+)\ne0$ (equivalently a ≠ 0); (c) change of a: Ad(k)
transports Σ, positive systems, n, A and N; (d) change of positive system for
fixed a: for any Σ+, Σ+' there is $k\in N_K(\mathfrak a)$ with
Ad(k) n(Σ+) = n(Σ+'), the induced $w\in W(\mathfrak g_0,\mathfrak a)=W(\Sigma)$
satisfies $w(\Sigma^+)=\Sigma^{+'}$, the map $w\mapsto w(\Sigma^+)$ is a
bijection, and k is unique modulo Z_K(a); (e) simultaneous change of a and of
the positive system by $k=k_2k_1$. The chambers/positive-systems bijection,
the simply transitive action of W(Σ) = W(Σ_s) on chambers, and both degenerate
cases (a = 0 / Σ+ = ∅) are covered in the proof. `precheck` reported one REPAIR
(canonical phase/step numbering); the canonical numbering it printed was adopted
verbatim and the file re-run to PASS.

## 3. Manifest patches proposed (frontmatter deps ⊋/⊂ manifest row)

Each addition is a load-bearing prerequisite cited in the item; each removal is
a manifest dep the item does not use. The orchestrator should merge these into
`research/phase-2-remaining-27-batch-13.pages.json` (the item files already
carry the lists below).

| id | added deps | removed deps |
|---|---|---|
| `def-restricted-root-and-restricted-root-space` | — | — |
| `thm-restricted-root-space-decomposition` | `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` | — |
| `prop-restricted-root-systems-may-be-nonreduced` | `def-restricted-root-and-restricted-root-space`, `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition`, `def-reducible-and-irreducible-root-system`, `thm-rank-two-root-system-classification`, `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`, `lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching`, `thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`, `thm-classification-of-irreducible-reduced-crystallographic-root-systems`, `ex-classical-root-systems-in-euclidean-coordinates`, `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`, `thm-finite-dimensional-representations-of-sl-two`, `prop-complexification-preserves-semisimplicity`, `ex-classical-simple-lie-algebras-and-their-killing-forms`, `def-classical-complex-matrix-lie-algebras`, `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group` | — |
| `def-restricted-weyl-group` | `def-restricted-root-and-restricted-root-space`, `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group` | — |
| `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system` | `def-restricted-root-and-restricted-root-space`, `prop-restricted-root-systems-may-be-nonreduced`, `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition`, `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group`, `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`, `prop-weyl-vector-is-the-sum-of-fundamental-weights`, `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`, `thm-compact-group-weyl-group-is-finite`, `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`, `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra`, `prop-complexification-preserves-semisimplicity`, `thm-cartans-closed-subgroup-theorem`, `thm-lie-subgroup-lie-subalgebra-correspondence` | `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k`, `thm-root-sl-two-triple` |
| `def-positive-restricted-roots-and-nilpotent-n-algebra` | `thm-restricted-root-space-decomposition`, `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces` | — |
| `thm-iwasawa-decomposition-on-the-lie-algebra-level` | `def-restricted-root-and-restricted-root-space` | — |
| `thm-global-iwasawa-decomposition` | `def-positive-restricted-roots-and-nilpotent-n-algebra`, `thm-restricted-root-space-decomposition`, `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition`, `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`, `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra` | — |
| `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition` | `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group`, `def-restricted-root-and-restricted-root-space`, `def-positive-restricted-roots-and-nilpotent-n-algebra`, `thm-restricted-root-space-decomposition`, `prop-restricted-root-systems-may-be-nonreduced`, `def-restricted-weyl-group`, `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`, `def-open-and-closed-weyl-chambers` | — |

## 4. Cross-slice notes (for serial reconciliation)

1. The two manifest dep rows removed above
   (`thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k`,
   `thm-root-sl-two-triple` for the restricted-Weyl-group theorem) are not cited
   or used by that item; the conjugacy of maximal abelian subspaces is used by
   the uniqueness/change-of-positive-system item, where it is a declared dep.
2. My nine items are final as of this report. Slice 4's dependent B items
   (`ex-iwasawa-decomposition-of-sl-two-r`, `ex-restricted-roots-of-sl-n-r`,
   `ex-a-nonreduced-bc-root-system-from-a-real-form`) can now be rechecked
   against the final A-page text; their statements as far as I read them agree
   with the repaired items (sl(2,R) Iwasawa data; restricted roots
   $f_i-f_j$ of sl(n,R); su(p,q) system $\{\pm f_i\pm f_j:i\ne j\}\cup\{\pm
   f_i\}\cup\{\pm 2f_i\}$ with multiplicities 2, 2(p-q), 1), and my repairs did
   not change any statement.
3. Source-metadata concern already reported by slice 5 and still present in the
   slice-3/slice-4 items: those files cite the Etingof OCW PDF
   `mit18_745_f20_lec_full.pdf` under the title "Lectures 19-24" while their
   locators ("Lecture 43, §43.6", printed pp. 220-222) belong to
   `https://math.mit.edu/~etingof/lnlg.pdf`. A single consistent reference row
   should be merged for the pair by the orchestrator. My items cite only Knapp
   and (for the new item) the pair's own items.

## 5. Proof-contract material for the orchestrator's merge

`research/phase-2-remaining-27-batch-13.proof-contracts.json` has no entry for
this pair, and this lane may not edit it. For the merge, each of the six
proof-bearing items of this slice already carries, inside the item text, the
numbered proof steps with their exact inputs and trailing citation/tag groups.
The source excerpts and boundary dispositions are recorded here.

Exact Knapp wording used (in the fetched 2nd-edition PDF; the text extractor
drops the glyph Σ, shown here as [Σ]):

- Prop. 6.40 (p. 370): "(a) g is the orthogonal direct sum g = g0 ⊕(⊕ over
  [Σ]) gλ, (b) [gλ, gµ] ⊆ gλ+µ, (c) θgλ = g−λ, and hence λ ∈ [Σ] implies
  −λ ∈ [Σ], (d) g0 = a ⊕ m orthogonally, where m = Zk(a)."
- Prop. 6.43 (p. 373): "g is a vector-space direct sum g = k⊕a⊕n. Here a is
  abelian, n is nilpotent, a⊕n is a solvable Lie subalgebra of g, and
  [a⊕n, a⊕n] = n."
- Thm. 6.46 (p. 374): "the multiplication map K × A×N →G given by
  (k, a, n) 7→ kan is a diffeomorphism onto. The groups A and N are simply
  connected."
- Lemma 6.50 (p. 378): "If H ∈ a has λ(H) ̸= 0 for all λ ∈ [Σ], then
  Zg(H) = m ⊕a. Hence Zp(H) = a."
- Thm. 6.51 (p. 378): "If a and a′ are two maximal abelian subspaces of p,
  then there is a member k of K with Ad(k)a′ = a."
- Prop. 6.52(c) (p. 379): "If Eλ is normalized so that B(Eλ, θ Eλ) = −2/|λ|2,
  then k = exp(π/2)(Eλ + θ Eλ) is a member of the normalizer NK(a), and Ad(k)
  acts as the reflection sλ on a∗."
- Cor. 6.53 and Cor. 6.55 (pp. 379-381): "[Σ] is an abstract root system in
  a∗"; "Any two choices of n are conjugate by Ad of a member of NK(a)."
- Lemma 6.56 and Thm. 6.57 (pp. 382-384): "The Lie algebra of NK(a) is m.
  Therefore W(G, A) is a finite group."; "The group W(G, A) coincides with
  W([Σ])."
- §5 introduction (p. 378): "an Iwasawa decomposition of g is unique up to
  conjugacy by Int g; therefore an Iwasawa decomposition of G is unique up to
  inner automorphism."
- su(p,q) Example 2 (pp. 371-372): the restricted roots "include all linear
  functionals ±fi ±fj with i ̸= j and ±2fi for all i. Also the ±fi are
  restricted roots if p ̸= q", with dim g^{±fi} = 2(p−q), dim g^{±2fi} = 1 and
  dim g^{±fi±fj} = 2.
- Knapp's own remark after Cor. 6.53: "The example of SU(p, q) for p > q shows
  that the abstract root system [Σ] need not be reduced."

Boundary dispositions (per item; "not applicable" is used only where the item
has no such case):

| item | empty / zero | one / degenerate | choice | both iff directions |
|---|---|---|---|---|
| restricted-root decomposition | Σ = ∅ and a = 0: every assertion vacuous or trivially true (steps 1.1, 2.1, 4.1 cover it); g_0^0 = g_0 | H = 0 case of statement 5 gives Z_{g_0}(0) = g_0 = g_0^0 | AC declared [A1], no selection in the argument | θ g^λ = g^{−λ} gives both directions of "λ ∈ Σ iff −λ ∈ Σ" (step 1.4) |
| nonreduced root systems | C = {c>0: cλ∈Σ} analysed for all λ; empty cases are a = 0, where (a) and (c) are read with r ≥ 1 and Σ = ∅ | rank-one case step 8.2 (BC_1); {1},{1,2} alternatives in step 5.2 | AC declared; used only through finite-dimensional representation theory [L6] | reducibility of Σ iff reducibility of Σ_s (step 7.2), both directions proved |
| restricted Weyl group theorem | a = 0 (Σ = ∅): both sides trivial (step 1.1); a ≠ 0 gives Σ ≠ ∅ since Σ spans a* | Σ_s without doubles: Ψ = ∅, system reduced; a = 0 case as above | AC declared; used through compact-group connectedness [L5] and restricted-root theory [L1] | equality W(g_0,a) = W(Σ) proved as two inclusions (steps 1.3, 6.1) |
| positive roots and n | Σ+ = ∅: n = 0, trivially nilpotent | a one-dimensional: Σ+ has one or two elements, both handled by the general statement | AC declared (ZFC interface), no selection used | sign decomposition Σ = Σ+ ⊔ (−Σ+) is equivalent to positivity at a regular H_0 |
| Lie-algebra Iwasawa | Σ+ = ∅: n = 0, a = 0, g_0 = k_0; step 1.2 case split | a one-dimensional: no special treatment needed | AC declared; no selection in the argument | directness proved from both k_0∩(a⊕n) = 0 and spanning (steps 1.3, 1.4) |
| global Iwasawa | Σ+ = ∅: K = G, A = N = 1, all steps vacuous or trivial | N = 1 case of A_1∩N_1 and of the surjectivity argument | AC declared; used through global Cartan and Lie-algebra Iwasawa (steps 1.1, 5.1, 6.1) | bijectivity proved as surjectivity (6.1) plus injectivity (6.2); local diffeomorphism plus bijection gives diffeomorphism (7.1) |

## 6. Published items and open obligations

- No new published-item defect is claimed from this slice. The items I
  re-read for suppliers (batch-11/12/13 drafts and the published DG-25–DG-33
  interfaces) did not produce a confirmed defect outside my own nine items.
  The pair-level published debt recorded in the batch-13 notes
  (Jordan-Chevalley AC metadata; the three Cartan/root interfaces superseded by
  the batch-11 replacements) was not re-adjudicated here and remains with the
  serial reconciler/owner.
- The three owner-held escalations of slice 5 (`thm-existence-of-a-compact-real-form`,
  `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form`,
  `cor-maximal-compact-subgroups-...`) and slice 2's escalation
  (`thm-classification-of-real-forms-by-vogan-diagrams`), plus the still-open
  slice-3 and slice-4 items, are outside this slice and remain open; nothing in
  my repairs depends on them.
- Open obligations for this slice: none. All nine item decisions are recorded
  with confidence 1 and current hashes; the receipts
  `research/phase-2-remaining-27-step3b-review-<id>.json` for the nine ids carry
  the post-repair text.
- Re-record note: the last edit of this slice aligned
  `prop-restricted-root-systems-may-be-nonreduced` with the pair's global Cartan
  setup. That edit lies in the transitive closure of
  `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system`
  and of
  `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition`,
  so both receipts were re-recorded after re-checking their citations of the
  supplier (their own text was unchanged; the supplier's realised reflection
  k_lambda lies in K = G^Theta, so the conventions now agree literally).
  `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase
  final` reports all nine ids closed (run accepted 1009 of 1030 at the time of
  writing; the remaining open ids belong to other slices of this pair or to
  owner-held escalations).
- Local suppliers added: none. No definition, lemma or page was created on the
  A page by this slice; the only supplier-class addition is the
  `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` citation in item 2,
  which is an existing item added to that item's deps.
