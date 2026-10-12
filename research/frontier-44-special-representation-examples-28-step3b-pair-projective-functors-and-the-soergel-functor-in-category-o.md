# Step 3b — pair `projective-functors-and-the-soergel-functor-in-category-o`

- Run: `frontier-44-special-representation-examples-28` · role `alpha-high` ·
  label `step3b-pair-projectal-functors-and-the-soergel-functor-in-category-o-deaf4792dc20b419`
- Covers: A `projective-functors-and-the-soergel-functor-in-category-o` (order
  1782, 25 items) and B `projective-functors-and-the-soergel-functor-in-category-o-examples`
  (order 1783, 7 items)
- Batch file: `research/frontier-44-special-representation-examples-28-batch-13.pages.json`
  (batch 13; sibling pairs in batches 14–50 are untouched)
- Inputs read: `CLAUDE.md`, `SCHEMA.md`, the batch-13 scaffold (pages, coverage,
  cross-batch dependencies, notes), the owner authoring direction and Category O
  route decisions, the Step 3a scope decision and B-enrichment round-1
  after-binding review, `research/plan-kazhdan-lusztig-track.md` KL-3, and the
  published supplier items named per item below.

## 1. Owned IDs and open obligations at entry

All 32 assigned subjects (25 A + 7 B) are missing from `items/`; every one is an
original scaffold id of the immutable pre-author inventory, so each needs an
ordinary current item decision. Open obligations recorded at entry:

- **Unfinished in-run suppliers.** `def-reduced-soergel-module-and-dominant-lefschetz-operator`
  and `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
  (batch 12) and `def-invariant-intersection-form-on-a-bott-samelson-bimodule`
  (KL-2 pair `soergel-intersection-forms-and-hodge-theory`) have no `items/`
  file. Consumers: `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`
  (supplier `def-reduced-soergel-module-and-dominant-lefschetz-operator`),
  `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`
  and `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`.
  Their decisions stay escalated until the completed suppliers and the actual
  proof uses are verified; their provisional interfaces are read from the
  sibling scaffold manifests.
- **Local proof-closure items.** The eight Step-1 escalations
  (`prop-base-change-freeness-and-specialization-in-the-deformed-family`,
  `thm-lifting-of-indecomposable-projectives-to-the-deformed-family`,
  `lem-the-central-action-on-the-deformed-antidominant-projective`,
  `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra`,
  `thm-soergels-struktursatz-full-faithfulness-on-projectives`,
  `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`,
  `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`,
  `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`)
  were superseded by the owner's local proof closure of 2026-10-09; the proofs
  are authored here on the local routes described in the batch-13 notes §11.
- **Owner corrections carried.** Degree normalization `deg h = 2`; dominant
  representative in the block definition; right-multiplication wall order;
  pre-reduction individual standard-support ranks with inverse labels;
  surjective (not faithful) dominant-Verma evaluation in the functor
  classification; central-action domain `Z⊗R → R⊗_{R^W}R`.

## 2. Per-item checkpoint log

(written in dependency order as items are completed)

**1. `def-regular-integral-category-o-block-and-its-antidominant-weight` (L0, definition).**
Fixed the dominant regular integral representative, `W_λ=W`, the |W|-element dot
orbit `C=W·λ`, `O_λ=O_C`, standards/costandards/simples/projective covers
Δ(w·λ)=M(w·λ), ∇(w·λ)=D(M(w·λ)), L(w·λ), P(w·λ), the triangularity
[Δ(w·λ):L(v·λ)]≠0 ⇒ v·λ≤w·λ and [Δ(w·λ):L(w·λ)]=1 from BGG reciprocity plus
cor-projective-standard-labels-lie-above-the-head, the antidominant weight
w_0·λ with Δ(w_0·λ)=L(w_0·λ) (unique simple standard, by
cor-antidominant-verma-modules-are-simple and the reflection-embedding proper
submodule for w≠w_0), and the K_0 bases (prop-the-grothendieck-group-of-o-has-simple-and-standard-bases).
Deps: scaffold list plus cor-antidominant-verma-modules-are-simple,
thm-verma-embedding-for-an-arbitrary-positive-root,
thm-verma-module-has-a-unique-simple-quotient,
thm-simple-objects-of-category-o-are-highest-weight-modules,
thm-category-o-has-enough-projectives,
prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
thm-projectives-in-category-o-have-verma-flags,
def-root-reflections-and-the-weyl-group-action,
def-verma-flag-and-its-multiplicities. Sources kept from the scaffold
(Soergel JAMS preprint §1.2; Garnier Part 4 §§7–8). Checks: precheck clean
(definition), rendercheck OK after joining two multiline displays. No gap.
Decision pending final batch pass.

**2. `def-the-coinvariant-algebra-of-a-finite-weyl-group` (L0, definition).**
Defined `S^W_+`, `I=S·S^W_+`, `C=S/I` with `C_0=C`, ρ:S→C and the induced
graded W-action; finite-dimensionality cited from Chevalley–Shephard–Todd plus
the Hilbert-series lemma (`dim C=|W|`). Fixed the page degree normalization
deg h = 2, top degree 2N, and the auxiliary permutation model
`C[x_1,…,x_n]/(e_1,…,e_n)` with the splitting of the permutation representation
into the sum-zero Cartan part and the invariant average coordinate e_1.
Replaced a nonexistent supplier link by
`def-root-reflections-and-the-weyl-group-action` (declared in deps). Sources
kept from the scaffold. Checks: precheck clean (definition), rendercheck OK.
No gap.

Next action: `lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank`
(L0), then `lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots`.

**3. `lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank` (L0, lemma).**
Proved: `Hom_g(E,S(g)) ≅ R⊗Hom_g(E,H)` is free over `R=S(g)^g` of rank
`dim E_0`, and `Hom_g(E,U(g))` is free of rank `dim E_0` over `Z`, with
`U(g)=Z·sym(H)` from thm-enveloping-algebra-is-free-over-its-center. Route:
Kostant decomposition, Molien-type character identity
`ch(H)=∏[d_i]_q·∏(1-qe^α)^{-1}`, orthonormality of Weyl characters for the
constant-term form (proved inline), the `ℓ²(P)` operator limit `T(q)δ_0→δ_0`
(scaffold strategy, checked on sl_2 by hand), monotone convergence giving
finiteness and rank `dim E_0`, then base change
`Hom_g(E,S)⊗_R C ≅ Hom_g(E,C)`. Deps: scaffold list plus
thm-chevalley-shephard-todd-for-finite-weyl-groups and
def-completed-formal-character-ring-for-downward-cones. Sources: Etingof
§13.1–13.5 locator kept. Checks: precheck PASS after rewriting the proof into
the layer-numbered canonical step order (lesson: step number = 1+max layer of
cited steps), rendercheck OK.

**4. `lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots` (L0, lemma).**
Proved `Σ(d_i−1)=|Φ^+|` by the Molien trace identity (proved inline by
averaging in each finite degree), the `u=1−t` expansion of both sides, and the
fact that the codimension-one fixed-space elements are exactly the `|Φ^+|`
reflections (each contributes `(1/2)u^{−(r−1)}`), with the chamber argument
that a fixed hyperplane must be a root hyperplane. Top degree `2|Φ^+|` under
page degree 2 recorded. Deps unchanged from scaffold. Source: Etingof §17.4
Exercise 17.5(i) locator kept. Checks: precheck PASS (layer-numbered),
rendercheck OK.

Next action: level-1 items in dispatch order: `def-projective-functors-on-a-regular-integral-category-o-block`,
`def-the-deformed-category-o-family-and-its-specializations`,
`lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle`,
`lem-the-harmonic-complement-of-the-coinvariant-algebra`,
`lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain`.

**5. `def-projective-functors-on-a-regular-integral-category-o-block` (L1, definition).**
Defined `F_E = pr_λ∘(E⊗−)∘incl_λ`, its exactness and projective preservation,
projective functors as direct summands of `F_E`, and closure under finite sums,
composition (`F_E∘F_E' ≅ F_{E⊗E'}`), summands and adjoints (`F_{E*}` biadjoint
to `F_E` via prop-translation-functors-are-exact-and-biadjoint-across-a-wall).
Sources: BGe §3.1 and Soe90 §§1.2, 2.4 kept. Checks: precheck n/a,
rendercheck OK.

**6. `def-the-deformed-category-o-family-and-its-specializations` (L1, definition).**
Defined `M_S(λ)=U(g)⊗_{U(b)}(S⊗C_λ)`, the right S-action, specialization
`M_S(λ)⊗_S C_ε ≅ M(λ+ε)`, the categories `D_T(λ)` and `D_R(λ)` for
`R=S_{(0)}`, the deformed family, the selected components `D_R^{[ν]}(λ)` by
central idempotents (CRT), and local freeness of weight spaces. Sources:
Soe90 §2.1 and Soe92 §1/§3.2 kept. Checks: precheck n/a, rendercheck OK.

**7. `lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle` (L1, lemma).**
Proved: `w_1,…,w_r` regular sequence, `C=S/(w_i)` complete intersection with
`Hilb(C,t)=∏(1−t^{2d_i})/(1−t²)^r=∏(1+t²+…+t^{2(d_i−1)})`, `dim C_{2N}=1`,
`C_j=0` for `j>2N`; then the two Tor computations `Tor^S_r(C,k)` (via
`K(w;S)⊗k` and via `C⊗K(x;S)`) identify `soc(C)=C_{2N}` one-dimensional in
degree `2N`; and the socle-pairing argument gives nondegeneracy of
`C_i×C_{2N−i}→C_{2N}`, i.e. graded Gorenstein. Sources: Soe90 §2.3 Lemma 6 and
Garnier §10 kept. Checks: precheck PASS, rendercheck OK.

**8. `lem-the-harmonic-complement-of-the-coinvariant-algebra` (L1, lemma).**
Constructed the W-invariant Fischer form, `H_d=I_d^⊥` (W-stable graded
complement, `H_d={f: ∂_p f=0 ∀p∈S^W_+}`), proved `ρ|_H: H≅C`, then
`S^W⊗H→S` by graded Nakayama-style surjectivity + Hilbert-series comparison;
`dim H_d=dim C_d`, `dim H=|W|`. Checks: precheck PASS, rendercheck OK.

**9. `lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain` (L1, lemma).**
Proved: `A=S(g)/(p_1,…,p_r)` is a complete intersection with
`Hilb(A,t)=∏(1−t^{d_i})/(1−t)^{dim g}`, `dim A=dim g−r=2|Φ^+|`; principal sl2
strings give `g=[g,e]⊕z_f`, `Σm_j=N`; `Ψ: G×z_f→g` is dominant by the
submersion criterion + flat-locus openness; hence `q_i=p_i(e+·)` are
algebraically independent; weighted homogeneity (`deg y_j=m_j+1`) makes the
Jacobian determinant a nonzero constant, so `dp_i(e)` are independent and the
Jacobian criterion gives regularity at `e`; propagation to the dense orbit
plus Cohen–Macaulay/unmixedness and irreducibility of the nilpotent cone give
`A` reduced and integral; the PBW central reduction is `A` via the filtered
free basis `sym(H)`. Sources: Etingof §§17.1–17.4 locator kept. Checks:
precheck PASS (layer-numbered), rendercheck OK.

Next action: level-2 items: `def-wall-crossing-functor-and-unit-counit`,
`thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation`,
`def-the-antidominant-projective-and-the-soergel-functor`,
`thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules`.

**Repair pass before continuing.** A relabel script had shifted the step
numbers of four authored items by +1 (each step's own label double-counted),
so `lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s`,
`lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label`,
`thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group` and
`thm-lifting-of-indecomposable-projectives-to-the-deformed-family` failed
`precheck` with `untagged-steps`; I decremented the first component of every
step label and every `step X.Y` citation with line-start/`step`-anchored
regexes only (no mathematics or `[F#]` tag touched), and replaced the one
multiline step of the Grothendieck-group lemma by a single-line step. All four
now `precheck` PASS and `rendercheck` OK.

**10. `def-wall-crossing-functor-and-unit-counit` (L2, definition).**
Defined $\theta_s = \operatorname{pr}_{\lambda}\circ(E\otimes-)\circ
\operatorname{pr}_{\lambda}$ for the two-step wall, with unit/counit from the
translation biadjunction and the standard-flag input
[[thm-translation-to-and-from-a-wall-on-standard-modules]]; conventions: right
multiplication on Verma labels, wall weight fixed by the owner direction.
Sources: BGe §3.1, atlases kept from the scaffold. Checks: precheck n/a,
rendercheck OK.

**11. `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation`
(L2, theorem).** Proved that $C\cong\mathbb C[W]$ as graded $W$-modules
($\dim C_{2d}=\dim\wedge^d\mathfrak h^*$; top degree $2N$), by the harmonic
decomposition plus the graded character comparison; the statement keeps the
page normalization $\deg\mathfrak h=2$ and no grading on $\mathcal O$ objects.
Checks: precheck PASS, rendercheck OK.

**12. `def-the-antidominant-projective-and-the-soergel-functor` (L2,
definition).** Fixed $P=P(w_0\cdot\lambda)$ with the embedded well-definedness
proof that $P$ is injective (the $\eta=-\rho$ semisimple-block translation,
the one-dimensional $\operatorname{Hom}(Q,L(a))$, the split embedding), the
Soergel functor $V=\operatorname{Hom}(P,-)$ with left
$\operatorname{End}(P)$-module values, and the notation $V\Delta$, $VP$.
Sources: Soe90 §§1.2, 2.1 and Garnier Def. 4.17 kept. Checks: precheck n/a,
rendercheck OK.

**13. `thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules` (L2,
theorem).** Proved that every $U(\mathfrak g)$-linear endomorphism of $M_S(\lambda)$
that is $\mathfrak g$-finite for the adjoint action lies in $U(\mathfrak g)\otimes_ZT$
(all weights, no generic restriction), via the local PBW-growth/free-over-center
route of the MIT 18.757 §§13.1-13.5, 17.1-17.4 sources and the three added local
primitives; multiplicity $\dim E_0$. Checks: precheck PASS, rendercheck OK.

**14. `lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension`
(L3, lemma).** Proved $[\theta_s\Delta(v\cdot\lambda)]=[\Delta(v\cdot\lambda)]+[\Delta(vs\cdot\lambda)]$
and exactness of $\theta_s$, including the shared nonsplit two-step extension for
both rank-one inputs, from the translation standard-flag theorem. Checks:
precheck PASS, rendercheck OK.

**15. `prop-base-change-freeness-and-specialization-in-the-deformed-family`
(L3, proposition).** Proved clauses (1)-(4) as stated (adjoint-action
$\mathfrak g$-finite endomorphism algebra, free rank $\dim(E\otimes F^*)_0$ Hom
with base change at every residue field, local freeness, and the fiber criterion).
Checks: precheck PASS, rendercheck OK.

**16. `ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations`
(L3, B example).** Worked out $C(S_2)$ and $C(S_3)$ explicitly: Hilbert series,
the graded regular decomposition, the $S_3$ isotypic degrees; a leaf example.
Checks: precheck n/a, rendercheck OK.

**17. `lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s`
(L4, lemma).** Proved $c[\theta_sX]=c[X](1+s)$ and the subexpression-product
formula with the correct right-multiplication order; repaired (relabel and
single-line display) as recorded above. Checks: precheck PASS, rendercheck OK.

**18. `ex-the-wall-crossing-functor-on-verma-modules-in-rank-one` (L4, B
example).** Computed $\theta_s$ on the two $\mathfrak{sl}_2$ standards, the wall
at $-1$ and the nonsplit $0\to M(0)\to P(-2)\to M(-2)\to 0$. Checks: precheck
n/a, rendercheck OK.

**19. `lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label`
(L5, lemma).** Proved that a reduced wall word's composite on $\Delta(\lambda)$
has the top standard once and realizes each $P(w\cdot\lambda)$ as its unique new
summand; repaired (relabel) as recorded above. Checks: precheck PASS,
rendercheck OK.

**20. `thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group`
(L6, theorem).** Proved (1) Krull-Schmidt, (2) the bijection
$\Theta_w\leftrightarrow w$ with $\Theta_w\Delta(\lambda)\cong P(w\cdot\lambda)$,
(3) determination by the $K_0$ operator; evaluation at $\Delta(\lambda)$ is
onto with nilpotent kernel (no false faithfulness claim); repaired (relabel).
Checks: precheck PASS, rendercheck OK.

**21. `thm-lifting-of-indecomposable-projectives-to-the-deformed-family` (L6,
theorem).** Proved the deformed lifts $P_R(x,\lambda)$ with special fiber
$P(x\cdot\lambda)$, finite free Hom with arbitrary base change, the weightwise
Nakayama criterion, and the singular coset-labelled lifts in
$\mathcal D_R^{[\nu]}(\lambda)$; repaired (relabel) as recorded above. Checks:
precheck PASS, rendercheck OK.

**22. `ex-the-class-map-and-wall-crossing-action-on-the-grothendieck-group-in-rank-two`
(L6, B example).** In $A_2$: $c[\theta_t\theta_s\Delta(\lambda)]=(1+s)(1+t)=1+s+t+st$
and $c[\theta_s\theta_t\Delta(\lambda)]=(1+t)(1+s)=1+t+s+ts$, the two products
differ in the coefficients of $st$ and $ts$, and $\theta_s\theta_t\Delta(\lambda)$
has the top standard $ts$ once, so $P(ts\cdot\lambda)$ occurs with multiplicity
one by the word-$ts$ case of the composition lemma. The Hecke comparison is
stated for the standard generators $T_sT_t=T_{st}\ne T_{ts}=T_tT_s$ only; no
unverified $b$-basis identity is used. Deps as scaffolded. Checks: precheck
n/a, rendercheck OK. No gap.

**23. `lem-the-central-action-on-the-deformed-antidominant-projective` (L7,
lemma).** Proved, following the owner central-order note: the $\eta=-\rho$
translation $Q=P(a)$ with each regular standard once (and the singular
coset version); the height-one residual-character classification (distinct off
root primes,
$\{x,s_\alpha x\}$ or singletons at a root prime); the symbolic
Shapovalov/Casimir proof that the upper Verma has length two with radical the
lower, simple Verma; the nonsplit pair projective and the congruence order
$\operatorname{End}(P_T)=\{(u_a,u_b):u_a\equiv u_b\bmod\tau(\alpha^\vee)\}$
generated by identity and Casimir difference $n(\alpha,\alpha)\tau(\alpha^\vee)$;
the matching local orders of $R\otimes_{R^W}R$ (and $R^{W_\nu}\otimes_{R^W}R$
by first-factor invariants); global equality by height-one intersection;
shifted-Harish-Chandra surjectivity by the jet construction
$(1/|H|)\sum_{w\in W}q(w^{-1}X)$ plus Nakayama; common kernel, closed fiber $C$
(resp. $C^{W_\nu}$); and the translation-out identification
$T_{\mathrm{out}}P_R^\nu\cong P_R^\lambda$ with induced endomorphism map the
invariant-order inclusion. Domain $Z\otimes R$, target $R\otimes_{R^W}R$ as
corrected; the universal $g$-finite endomorphism theorem is not used. Added
published suppliers to `deps` (Harish-Chandra projection items, category-O
structure items, Chevalley-Shephard-Todd, harmonic complement).
Checks: precheck PASS (layers $1.1$-$8.1$ canonical, no repair), rendercheck
OK. No gap; supplier reconciliation pending for the escalated consumers.

**24. `cex-wall-crossing-functors-do-not-commute` (L7, B counterexample).**
Refuted commutation: the class products $(1+s)(1+t)$ and $(1+t)(1+s)$ differ
on $[\Delta(\lambda)]$, so the class operators differ and, by the determination
theorem, $\theta_s\theta_t\not\cong\theta_t\theta_s$; additionally
$\theta_s^2\cong\theta_s\oplus\theta_s\not\cong\operatorname{id}$ shows
$s\mapsto\theta_s$ is not a representation of $W$, matching the Hecke pattern
$T_sT_t=T_{st}\ne T_{ts}=T_tT_s$. Checks: precheck PASS, rendercheck OK.

Next action: level-8 `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra`.

**25. `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra`
(L8, theorem).** Proved by specialization of the central-action lemma at
$R\to\mathbb C$: Hom base change identifies
$\operatorname{End}_{\mathfrak g\otimes R}(P_R)\otimes_R\mathbb C$ with
$\operatorname{End}_{\mathfrak g}P(w_0\cdot\lambda)$, the target specializes to
$C$, and the shifted Harish-Chandra composite is surjective with the common
kernel; singular companion $C^{W_\lambda}$ recorded. Checks: precheck PASS,
rendercheck OK.

**26. `thm-soergels-struktursatz-full-faithfulness-on-projectives` (L9,
theorem).** Proved the canonical iso
$\operatorname{Hom}(M,Q)\cong\operatorname{Hom}_C(VM,VQ)$ for all $M$ and
projective $Q$: simple-level comparison for $P$ and $\Delta(\lambda)$ (socles
$L(a)$, trivial $C$-actions), left-exact composition-series induction, the
quotient equivalence via the left adjoint $P\otimes_C-$ with $V$-killed
counit kernel/cokernel, wall-word adjunction descending through $\ker V$, and
the word generation of every projective; quotient-faithfulness clause included.
Target-projective hypothesis kept exact. Checks: precheck PASS (canonical
labels $1.1$-$5.1$ adopted), rendercheck OK.

**27. `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`
(L10, theorem).** Proved $V\theta_s\cong C\otimes_{C^s}V$: the onto/out
translation counts $\Delta(y\cdot\lambda)\mapsto\Delta(y\cdot\nu)$ once and
$\Delta(y\cdot\nu)\mapsto\Delta(y\cdot\lambda)\oplus\Delta(ys\cdot\lambda)$,
$T_{\mathrm{out}}P_R^\nu\cong P_R^\lambda$ with
$T_{\mathrm{on}}P_R^\lambda\cong P_R^\nu\oplus P_R^\nu$, descent of both
adjunctions through $\ker V$, and the resulting restriction/extension-of-scalars
identifications. Type-A clause carried the owner correction
(batch-13 notes 3.6): $B_s\otimes_SC\cong(C\otimes_{C^s}C)(1)$ for $M=S$ and
the two-dimensional origin reduction $k(-1)\oplus k(1)$ are stated up to the
rank-one suspension normalisation, and the false general
$B_s\otimes_S\mathbb C\cong C\otimes_{C^s}C$ clause is replaced by the correct
dimension comparison (two versus $2|W|$); the owner's Step-1 correction of this
very clause is the binding record. Supplier
`def-reduced-soergel-module-and-dominant-lefschetz-operator` (batch 12) is now
authored; its reduction/centering clauses are the ones used, so this consumer's
supplier obligation is reconciled. Checks: precheck PASS, rendercheck OK.

**28. `cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects`
(L10, B counterexample).** Refuted full faithfulness of $V=\operatorname{Hom}(P(-2),-)$
on the whole $\mathfrak{sl}_2$ block: $V(L(0))=0$ kills the nonzero identity
(non-faithfulness), and $\operatorname{Hom}(M(0),L(-2))=0$ while
$V(M(0))=V(L(-2))=\mathbb k$ and $\operatorname{Hom}_C(\mathbb k,\mathbb k)=\mathbb k$
(non-fullness); both targets are nonprojective, so the Struktursatz's
target-projective hypothesis is respected, and the quotient clause is not
refuted. Checks: precheck PASS, rendercheck OK.

Next action: level-11 `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`.

**29. `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`
(L11, theorem).** Proved the dictionary $VP(w\cdot\lambda)\cong\bar B_{w^{-1}}$
and the equivalence with ungraded Soergel modules: the root-DVR quiver table
with the relation $ji=\tau(\alpha^\vee)$ after rescaling (step 1.1), deformed
full faithfulness on projectives by height-one intersection (2.1),
reduction-of-Hom for Bott-Samelson modules via the canonical composite map
(3.1), reduced indecomposability by the local degree-zero and graded-End
argument using Wedderburn-Artin (4.1), the centered self-dual auxiliary
gradings and uniqueness up to shift from the batch-12 invariant-form clauses
(5.1), and the label induction with inverse labels (5.2). **Supplier
reconciliation:** the formerly missing suppliers
`def-reduced-soergel-module-and-dominant-lefschetz-operator` and
`lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
(batch 12) and `def-invariant-intersection-form-on-a-bott-samelson-bimodule`
(KL-2 pair `soergel-intersection-forms-and-hodge-theory`) are now authored;
their actual clauses (reduction/centering; points (1)-(4) on locality,
labels/shifts and character/Hom base change; clauses (5)-(6) on centered
reduced forms) are the ones used, so this consumer is no longer escalated.
Added deps: `thm-endomorphisms...`, `def-type-a-soergel-bimodule-for-a-simple-reflection`,
`def-the-type-a-soergel-category`. Checks: precheck PASS, rendercheck OK.

**30. `ex-wall-crossing-on-projectives-in-the-sl-two-block` (L11, B example).**
Computed $\theta_sP_e\cong P_s$ and $\theta_sP_s\cong P_s\oplus P_s$ with the
matrix $\begin{pmatrix}0&0\\1&2\end{pmatrix}$ from the flag counts
$(2,2)$ and BGG reciprocity, the Soergel values
$C\otimes_{\mathbb k}\mathbb k\cong C$ and
$C\otimes_{\mathbb k}C\cong C\oplus C$, and the dimension comparison
$4=2|W|$ versus the two-dimensional right-reduced $B_s$. Checks: precheck
n/a, rendercheck OK.

**31. `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`
(L12, proposition).** Proved
$(P:\Delta(y\cdot\lambda))=\sum_dr_{y^{-1},d}(\mathsf B(P))$ by the deformed
lift: rank-one free $V_R$ standards (closed fiber $[\Delta(w):L(a)]=1$), the
central-action branch $f\mapsto f(y^{-1}\tau)$ giving the inverse graph label,
localization of the chosen polynomial lift to $V_RP_R$, and the fraction-field
rank comparison, with the explicit caveat that no separated labelled
filtration on the reduced $V(P)$ is asserted and the types other than A use
Weyl-group lifts. **Supplier reconciliation:** the batch-12
`def-reduced-soergel-module-and-dominant-lefschetz-operator` and
`lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
are authored and their reduction/support-rank clauses used; the consumer is no
longer escalated. Added deps: `lem-the-central-action...`,
`thm-wall-crossing-under-the-soergel-functor...`, `thm-bgg-reciprocity`.
Checks: precheck PASS, rendercheck OK.

**32. `ex-the-soergel-functor-on-a-small-regular-block` (L13, B example).**
Displayed the nonsplit sequences, the $V$-values
$V(P_e)=\mathbb k$, $V(P_s)=C$, $V(\Delta_e)=V(\Delta_s)=\mathbb k$,
$V(L(0))=0$, $V(L(-2))=\mathbb k$, the projective Hom table with dimensions
$\begin{pmatrix}1&1\\1&2\end{pmatrix}$ and the maps $i_0(1)=x$,
$p_0(a+bx)=a$ with $p_0i_0=0$, $i_0p_0=m_x$; on the polynomial side the
reductions of $B_e=S$ and $B_s=S\otimes_{\mathbb k[a^2]}S(1)$ with centered
degrees $-1,1$ and the pre-reduction graph ranks $(1,0)$, $(1,1)$ matching
the Verma flags at $v=1$. Checks: precheck n/a, rendercheck OK.

## 3. Handoff

**Completed IDs (32/32; 25 A + 7 B).** A page
`projective-functors-and-the-soergel-functor-in-category-o`:
`def-the-coinvariant-algebra-of-a-finite-weyl-group`,
`def-regular-integral-category-o-block-and-its-antidominant-weight`,
`lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots`,
`lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank`,
`def-projective-functors-on-a-regular-integral-category-o-block`,
`lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle`,
`lem-the-harmonic-complement-of-the-coinvariant-algebra`,
`def-the-deformed-category-o-family-and-its-specializations`,
`lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain`,
`def-wall-crossing-functor-and-unit-counit`,
`thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation`,
`def-the-antidominant-projective-and-the-soergel-functor`,
`thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules`,
`lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension`,
`prop-base-change-freeness-and-specialization-in-the-deformed-family`,
`lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s`,
`lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label`,
`thm-lifting-of-indecomposable-projectives-to-the-deformed-family`,
`thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group`,
`lem-the-central-action-on-the-deformed-antidominant-projective`,
`thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra`,
`thm-soergels-struktursatz-full-faithfulness-on-projectives`,
`thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`,
`thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`,
`prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`.
B page `projective-functors-and-the-soergel-functor-in-category-o-examples`:
`ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations`,
`ex-the-wall-crossing-functor-on-verma-modules-in-rank-one`,
`ex-the-class-map-and-wall-crossing-action-on-the-grothendieck-group-in-rank-two`,
`cex-wall-crossing-functors-do-not-commute`,
`cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects`,
`ex-wall-crossing-on-projectives-in-the-sl-two-block`,
`ex-the-soergel-functor-on-a-small-regular-block`.
Both pages exist under `library/special-topics-in-representation-theory/`,
the batch-13 manifest is synced to the authored deps/levels, the proof
contract covers all 32 ids, and all 32 item decision receipts are recorded
(23 `repaired`, 9 `accept`; owner false).

**Checks actually run (results as printed).**

- `precheck` explicit paths, all 32 items: 21 checked, 0 failed, 11
  not-applicable (definitions and examples without a verification body).
- `rendercheck` all 32 items: OK — no wikilink in math, no multiline display,
  all spans parse under KaTeX, all frontmatter blocks parse.
- `proof-layout` batched over the 32 changed item paths: 32 items, 159 steps,
  0 defects (run once after the final edits).
- `proof-contract --strict` on the batch-13 contract file: 32/32 entries,
  0 errors, 1 warning (`shotgun-bracket` on
  `lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain`: step 9.1
  cites 4 of 6 declared facts while two other steps cite none — warning only).
- `content-policy` batches 12+13 (post-authoring mode): 65 scoped items,
  2 errors, 0 warnings — both errors are in the sibling batch-12 pair
  (`notation-iota-applied`, listed below), none in batch 13. The
  `--manifest-only` mode reports 65 `batch-item-already-exists` errors that are
  the known artefact of running the pre-authoring mode after the items exist.
- `manifest-deps` batch-13 manifest: 32 items, 0 errors.
- `item-dependency-levels check --run …`: 0 diagnostics for any batch-13 item
  (run-wide errors occur only in other batches' in-flight inventories).
- `validate-plan research/plan-spec.json --run … --pages-file <all 100 run
  pages>`: my page's `undeclared-prereq` was cleared by the supplier swap
  recorded below; the run still exits 1 on other batches' rows (five
  `undeclared-prereq` and one `resolve` diagnostic listed under concerns), and
  the run-wide `redundant-prereq` warnings include several on page 1782, the
  same shared-plan class recorded at Step 1.
- `coverage-checklist` batch-13 coverage: 2 pages, 82 harvested results,
  0 errors, 0 warnings.
- `depcheck --json` (repo-wide): 0 hard errors touching any batch-13 item or
  either owned page; the run-wide 2762 errors are other in-flight batches'
  drafts.
- `step3-decisions record-item` for all 32 ids (twice, after the final edits;
  the second pass is current).

**Added suppliers (beyond the Step-1 scaffold).** The authored items extend
their `deps` with the published and in-run suppliers actually cited, and the
batch-13 manifest was synced to those lists. The material additions are:
the category-$\mathcal O$ structure bundle for
`def-regular-integral-category-o-block-and-its-antidominant-weight`
(`cor-antidominant-verma-modules-are-simple`,
`thm-verma-embedding-for-an-arbitrary-positive-root`,
`thm-verma-module-has-a-unique-simple-quotient`,
`thm-simple-objects-of-category-o-are-highest-weight-modules`,
`thm-category-o-has-enough-projectives`,
`prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`,
`thm-projectives-in-category-o-have-verma-flags`,
`def-root-reflections-and-the-weyl-group-action`,
`def-verma-flag-and-its-multiplicities`); roughly twenty Harish-Chandra,
category-$\mathcal O$, invariant-theory and coinvariant suppliers for
`lem-the-central-action-on-the-deformed-antidominant-projective` and
`thm-soergels-struktursatz-full-faithfulness-on-projectives` (including
`def-harish-chandra-projection`,
`lem-harish-chandra-projection-computes-highest-weight-scalars`,
`thm-chevalley-shephard-todd-for-finite-weyl-groups`,
`thm-bgg-verma-homomorphism-criterion`,
`lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`,
`thm-central-character-summands-split-into-linkage-blocks`,
`lem-block-projection-preserves-projectives`,
`cor-antidominant-verma-modules-are-simple`); the Koszul/Tor suppliers
`def-koszul-complex-of-a-sequence-with-coefficients` and
`cor-koszul-complex-resolves-a-regular-quotient` for
`lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain`; and
`thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra`,
`def-type-a-soergel-bimodule-for-a-simple-reflection`,
`def-the-type-a-soergel-category` for the dictionary theorem. One supplier
was **replaced**: `thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules`
cited `def-bialgebra-counit-and-antipode`, whose home page
`quantized-enveloping-algebras-and-quantum-serre-relations` is not in the
closure of this page's declared `requires`; the equivalent published
`rem-hopf-algebra-structure-on-the-enveloping-algebra` (whose page is in the
closure) supplies the same Hopf structure and is now cited.

**Published concerns.**

1. `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms` and
   `thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs`
   (sibling batch-12 pair `soergel-intersection-forms-and-hodge-theory`) fail
   `content-policy` with `notation-iota-applied`: applied `\iota(...)` notation
   in math must write the natural number directly. Mechanical check, high
   confidence; repair is a notation edit by their owner. Not edited here
   (sibling content).
2. Run-wide `validate-plan` rows in other batches:
   `divided-powers-integral-forms-and-quantum-highest-weights` (depends on
   `valuation-rings-and-discrete-valuation-rings-examples`),
   `character-polynomials-fi-modules-and-representation-stability`
   (`eilenberg-watts-theorem-and-natural-transformations`),
   `compact-kahler-hodge-foundations` and its `resolve` diagnostic
   (`def-injective-object-in-an-abelian-category`),
   `complex-algebraic-stratified-topology`
   (`riemann-surfaces-branched-maps-and-differentials`),
   `logarithmic-hodge-complexes-and-smooth-open-weights`
   (`chow-groups-intersection-products-and-grothendieck-riemann-roch`),
   `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`
   (`divisors-riemann-roch-and-duality`). Reported for Step 4; not batch-13
   defects.
3. My own page's Step-4-relevant point: the dependency swap recorded under
   added suppliers was a page-closure repair, not a claim change. If the owner
   prefers the quantum-page supplier `def-bialgebra-counit-and-antipode` for
   `thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules`, the page
   `requires` list must instead gain
   `quantized-enveloping-algebras-and-quantum-serre-relations`; that is a plan
   amendment for Step 4, not something repaired here.
4. `proof-contract` warning on
   `lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain`
   (`shotgun-bracket`, warning level) — Step 5 may want each declared fact
   cited at the step that uses it.

**Open obligations.**

- Thorough independent audit of all 32 items and of the contract entries
  follows in Steps 5-7, including the four proof items whose step labels were
  repaired (`format` defect recorded) and the statement clarification in
  `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`.
- The three former supplier escalations
  (`thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`,
  `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`,
  `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`) are
  reconciled against the now-authored batch-12/KL-2 clauses and recorded
  `repaired` + `dependency`; if Steps 5-7 find those suppliers defective, the
  consumers' proofs must be re-examined.
- No batch-13 item is left escalated; no owner-held decision was overridden.
