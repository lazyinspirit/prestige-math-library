# Step 3b — pair `divided-powers-integral-forms-and-quantum-highest-weights` (batch 5)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-divided-powers-integral-forms-and-quantum-highest-weights-60a301da15cd1def`.
Owned A page: `divided-powers-integral-forms-and-quantum-highest-weights`
(order 1526, `special-topics-in-representation-theory`, 21 items).
Owned B page: `divided-powers-integral-forms-and-quantum-highest-weights-examples`
(order 1527, 4 items). Batch 5 contains only this pair, so no sibling rows
exist in the shared batch files.

## Owned IDs and open obligations (entry checkpoint)

A page order (dispatch dependency order): `def-kashiwara-skew-derivations-on-the-negative-quantum-half` (L0),
`def-lusztig-divided-power-integral-form` (L0), `def-quantum-weight-module-and-integrability` (L0),
`def-contravariant-form-on-an-integrable-quantum-highest-weight-module` (L1),
`def-quantum-verma-module-and-simple-highest-weight-quotient` (L1),
`def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` (L1),
`lem-divided-power-and-toral-quantum-binomial-reordering-identities` (L1),
`lem-divided-power-half-has-integral-skew-string-coefficients` (L1),
`lem-finite-support-regularization-of-quantum-label-weight-modules` (L1),
`lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` (L1),
`lem-cartan-projection-constructs-the-quantum-verma-contravariant-form` (L2),
`lem-quantum-highest-weight-serre-quotient-is-integrable` (L2),
`lem-the-negative-half-is-separated-by-iterated-skew-derivations` (L2),
`lem-unmodified-integral-torus-has-a-quantum-binomial-basis` (L2),
`lem-local-q-one-deformation-proves-integrable-highest-weight-universality` (L3),
`lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` (L3),
`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` (L3),
`lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` (L4),
`thm-integrable-quantum-highest-weight-module-exists-and-is-unique` (L4),
`prop-integrable-quantum-highest-weight-modules-are-semisimple` (L5),
`prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` (L5).

B page: `ex-divided-powers-and-lusztig-form-in-quantized-sl-two` (L5),
`ex-quantum-verma-and-simple-modules-for-sl-two` (L5),
`ex-specializing-a-quantum-highest-weight-lattice-at-q-one` (L6),
`cex-direct-q-one-substitution-in-quantum-denominators` (L7).

Open obligations at entry: (1) author all 25 item files (`items/<id>.md`) from
the current batch-5 scaffold statements/strategies, in the dispatch dependency
order, with complete proofs; (2) author the two page files
`library/special-topics-in-representation-theory/divided-powers-integral-forms-and-quantum-highest-weights.md`
and `…-examples.md`; (3) write
`research/frontier-44-special-representation-examples-28-batch-5.proof-contracts.json`
with exact citation quotes, per-step inputs and boundary dispositions; (4) run
the dispatch checks (proof-layout batch, precheck, rendercheck, content-policy,
depcheck/depsource, dependency levels, validate-plan, coverage/source checks,
contract battery); (5) record item decisions for all 25 IDs; (6) update the
batch-5 manifest deps to the final item deps without disturbing siblings.
No direct in-run prerequisite pairs to inspect. Published suppliers inspected
as needed: the QG-1 page items (`def-drinfeld-jimbo-quantized-enveloping-algebra`,
`def-positive-negative-and-toral-quantum-subalgebras`, `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
`thm-triangular-decomposition-of-a-quantized-enveloping-algebra`,
`lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions`,
`thm-quantized-sl-two-string-formulas`,
`thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`)
and the classical page items (`def-kac-moody-integral-and-dominant-integral-weights`,
`def-integrable-kac-moody-module`, `thm-kac-moody-verma-module-has-a-unique-simple-quotient`,
`thm-serre-presentation-of-a-kac-moody-algebra`, the Casimir and dominance lemmas).

## Checkpoint log

(updated after each item; resume here)

### L0 item 1: `def-kashiwara-skew-derivations-on-the-negative-quantum-half`

- **Authored** `items/def-kashiwara-skew-derivations-on-the-negative-quantum-half.md`
  (draft, `dependency_level: 0`, provenance literature-derived/ai-altered per manifest).
- **Claim/route.** Fixed $i$: for every $P\in U_q^-$ there are unique $Q,R\in U_q^-$
  with $E_iP-PE_i=(K_iQ-K_i^{-1}R)/(q_i-q_i^{-1})$; $e_i'(P):=R$,
  $e_i''(P):=Q$. Existence by an explicit recursion on generator words
  ($Q_w=q_i^{-a_{ij_1}}F_{j_1}Q_{w'}+\delta_{ij_1}w'$, likewise $R_w$), uniqueness by
  splitting into weight components and separating $K_i^2$ from $1$ with the toral
  linear functional ($K_h$ linearly independent). Proved: linearity, values on $1$
  and $F_j$, twisted Leibniz rules with twists $q_i^{\pm\langle wt(x),h_i\rangle}$,
  operator relations $e_i'F_j=q_i^{-a_{ij}}F_je_i'+\delta_{ij}$,
  $e_i''F_j=q_i^{a_{ij}}F_je_i''+\delta_{ij}$, degree shift
  $U_q^-[-\nu]\to U_q^-[ -(\nu-\alpha_i)]$ (zero off $Q_+$), height drop and local
  nilpotence, and $e_i''=\psi e_i'\psi$ (apply the semilinear involution to the
  defining identity and compare).
- **Deps used** (added to item deps beyond the manifest and to be synced into the
  manifest): `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions`
  (for $\psi$), `def-kac-moody-root-lattice-height-and-positive-cone` (height). Both
  are out-of-run published items, so the in-run level stays 0.
- **Sources read.** JKK arXiv:math/0305390 §6 PDF pp. 22–23, displays (6.1)–(6.3),
  extracted from the fetched `/tmp/b5-check/jkk.pdf`; Lusztig §1.2.13 locator per the
  manifest (owner OCR record).
- **Checks.** `precheck` PASS (direct, 9 steps, canonical layer numbering adopted
  after the checker's layer repair); `proof-layout` 1 item / 9 steps / 0 defects;
  `rendercheck` OK (fixed two multiline displays).
- **Open.** Manifest dep sync; contract entry; decision receipt. Next item:
  `def-lusztig-divided-power-integral-form`.

### L0 item 2: `def-lusztig-divided-power-integral-form`

- **Authored** `items/def-lusztig-divided-power-integral-form.md` (draft, L0).
- **Claim/route.** $A=\mathbb Z[q,q^{-1}]\subseteq\mathbb Q(q)$ via the universal
  property of the Laurent ring (injective by uniqueness of Laurent coefficients);
  toral binomials $T_{i,c,t}=\prod_{s=1}^t(K_iq_i^{c-s+1}-K_i^{-1}q_i^{-c+s-1})/(q_i^s-q_i^{-s})$;
  $U_A=\langle E_i^{(r)},F_i^{(r)},K_h^{\pm1},T_{i,c,t}\rangle_A$; proved: each
  $T_{i,c,t}\in U_q^0$ and toral-commuting; all generators homogeneous; $U_A$ is a
  graded $A$-subalgebra with graded pieces $U_A[\beta]$; contains $E_i,F_i,K_h$;
  $U_A\otimes_A\mathbb Q(q)\cong U_q(\mathfrak g)$ (surjectivity from generation,
  injectivity by clearing denominators); $A$ is not a PID (elementary proof that
  $(2,q-1)$ is proper, not principal) so no torsion-free-to-free inference.
- **Deps used.** Exactly the six manifest deps (no additions).
- **Sources.** Lusztig ch. 23/31 locators per manifest; Stanford lecture 16 slides
  (restricted quantum group, toral binomials); JKK (1.1)/(1.5).
- **Checks.** `precheck` PASS (7 steps); `proof-layout` 7 steps / 0 defects;
  `rendercheck` OK.
- **Open.** Manifest/contract/decision. Next: `def-quantum-weight-module-and-integrability`.

### L0 item 3: `def-quantum-weight-module-and-integrability`

- **Authored** `items/def-quantum-weight-module-and-integrability.md` (draft, L0).
- **Claim/route.** $P$-graded type-one quantum weight module = module with a
  *chosen* label grading $M=\bigoplus_{\mu\in P}M_\mu$, $K_h|_{M_\mu}=q^{\langle\mu,h\rangle}$,
  $E_iM_\mu\subseteq M_{\mu+\alpha_i}$, $F_iM_\mu\subseteq M_{\mu-\alpha_i}$;
  grading-preserving morphisms; integrable = local nilpotence of $E_i,F_i$ on
  every vector; finite-dimensional weight spaces and bounded support are extra.
  Proved: consistency with the Drinfeld–Jimbo relations; simultaneous toral
  eigenspaces are $\bigoplus_{\chi_\mu=\chi}M_\mu$ and equal single label spaces
  precisely when the pairing separates $P$ (explicit nonseparating witness
  $P=\mathbb Z^2$, $P^\vee=\mathbb Z h$, $\langle(a,b),h\rangle=a$: labels
  $(0,0)\ne(0,1)$ share a character); kernels/images/quotients keep gradings;
  zero module integrable with empty grading; separating case recovers the usual
  type-one definition.
- **Deps used.** The three manifest deps.
- **Checks.** `precheck` PASS (6 steps, canonical relabeling adopted);
  `proof-layout` 6 steps / 0 defects; `rendercheck` OK.
- **Open.** Manifest/contract/decision. Next: level-1 item
  `def-contravariant-form-on-an-integrable-quantum-highest-weight-module`.



### L1 items 4-9 (authored)
- `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` (5 steps): linear
  anti-involution $\sigma$ verified on all relation families (sign-checked against JKK (2.2));
  invariances equivalent to the (2.3) adjunctions; orthogonality along toral characters;
  uniqueness for normalized highest weight modules by reduction to $U_q^-v_\lambda$; existence
  and nondegeneracy delegated to `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form`
  (justified_by; flagged open until authored at L2). Deps extended with
  def-positive-negative, def-symmetrizable, lem-quantum-serre-relations, thm-triangular (all published).
- `def-quantum-verma-module-and-simple-highest-weight-quotient` (5 steps): Borel character by
  killing the positive graded part; right-freeness of $U_q$ over $U_q^{\ge0}$ gives
  $M(\lambda)\cong U_q^-$ with label grading and finite-dimensional components; universal property;
  $N(\lambda)$ = sum of proper graded submodules is proper; $L(\lambda)$ graded-simple and the
  unique simple graded quotient; separating case gives the ordinary simple quotient. Deps extended
  with def-kashiwara-skew (in-run L0).
- `lem-divided-power-and-toral-quantum-binomial-reordering-identities` (6 steps): (i) factorial
  identity; (ii) recursion, toral commutation and the shifts $E_jT_{i,c,t}=T_{i,c-a_{ij},t}E_j$,
  $F_jT=T_{i,c+a_{ij},t}F_j$; auxiliary toral product identity
  $[a+1]T_{i,c+1,t}=[a-t+1]T_{i,c,t}+T_{i,t-b,1}T_{i,c,t-1}$ ($c=2t-a-b-2$) verified by
  factorisation and the two forms of $[m+n]=q^{-n}[m]+q^{m}[n]$; (iii) reordering by induction on
  $a$; (iv) triangular spanning by terminating rewriting.
- `lem-divided-power-half-has-integral-skew-string-coefficients` (7 steps): deletion rule
  $e_i'F_i^{(r)}=q_i^{-(r-1)}F_i^{(r-1)}$; $e_i'$ preserves $U_A^-$; $(e_i')^nF_i^{(m)}u$ formula;
  projector $P_i$ with $e_i'P_i=0$, fixes $\ker e_i'$, annihilates strings (q-binomial sum using the
  library Gauss identity inverted); decomposition, uniqueness, integrality, projection and string
  operators preserving $U_A^-$; no freeness assumed.
- `lem-finite-support-regularization-of-quantum-label-weight-modules` (6 steps): coordinate summand
  $X_f$, dual auxiliary datum $Y_{aux},X_{aux}$ perfect with same $A,D$ and fundamental weights;
  transported grading/action verified on all relation families; inverse recipe and category
  equivalence; Verma/tensor compatibility; rational decomposition $h_{aux}=H_{min}\oplus Z$ with $Z$
  central.
- `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` (3 steps): $\psi,\tau$
  fix $E_i^{(r)},F_i^{(r)}$, invert $K_h$, fix $T_{i,c,t}$ (factorwise sign cancellation); stability
  and bijectivity of $U_A$ by semilinearity.
- `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` (4 steps): axioms (H),(N),(R)
  and their equivalence to the counit normalization (C); uniqueness by peeling; rank-one witness that
  recursion + $B(1,1)=1$ alone is not symmetric/uniquely normalized; existence/symmetry/nondegeneracy
  and integrality delegated to `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`
  (justified_by; open until L3).
- **Fix recorded:** `def-kashiwara-skew-derivations...` step 1.1/2.1 recursion exponents were
  corrected to $Q_w=q_i^{a_{ij_1}}F_{j_1}Q_{w'}+\delta w'$, $R_w=q_i^{-a_{ij_1}}F_{j_1}R_{w'}+\delta w'$
  after an independent rank-one check against $E_if^{(2)}-f^{(2)}E_i$; the item was re-run clean.
- Next: level-2 item `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form`.

### L2 item 11: `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form`

- **Authored** `items/lem-cartan-projection-constructs-the-quantum-verma-contravariant-form.md`
  (draft, L2; 7 steps, precheck/proof-layout/rendercheck clean).
- **Claim/route.** Normalized contravariant form on $M(\lambda)$ by projection along
  the largest proper graded submodule $N(\lambda)$; exact balancing
  $B(uv,w)=B(u,\sigma(v)w)$ on the Cartan projection; radical equals $N(\lambda)$
  (largest proper graded submodule); quotient descent to $L(\lambda)$; ordinary
  simplicity by a maximal-height raising argument; rank-one norms
  $q_i^{r(m-r)}\binom{m}{r}$; $A$-integrality on the highest lattice; the honest
  distinction between the integral highest-module form and the half form.
- **Checks.** precheck PASS; proof-layout 7 steps / 0 defects; rendercheck OK.
- Next: `lem-quantum-highest-weight-serre-quotient-is-integrable`.

### L2 item 12: `lem-quantum-highest-weight-serre-quotient-is-integrable`

- **Authored** `items/lem-quantum-highest-weight-serre-quotient-is-integrable.md`
  (draft, L2; canonical-layer repair applied; 6 steps).
- **Claim/route.** $s_i=F_i^{(m_i+1)}v_\lambda$ is singular; the quotient
  $\tilde L(\lambda)=M(\lambda)/\sum_iU_q^-s_i$ is nonzero with finite-dimensional
  label-weight spaces; $F_i$ locally nilpotent by a quantum-Serre word induction
  (no same-half commutation for $a_{ij}\ne0$); $E_i$ locally nilpotent by the
  support bound; every integrable cyclic highest weight module of weight $\lambda$
  is a quotient of $\tilde L(\lambda)$ (minimal $t_i$ forces $t_i=m_i+1$).
- **Deps added.** `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
  `lem-divided-power-and-toral-quantum-binomial-reordering-identities` (cite in [F2]).
- **Checks.** precheck PASS; proof-layout 6 steps / 0 defects; rendercheck OK.
- **Fix recorded.** Precheck REPAIR adopted canonical layering; corrected the
  stale "steps 1.1-5.1" cross-reference to "1.1 through 4.1".
- Next: `lem-the-negative-half-is-separated-by-iterated-skew-derivations`.

### L2 item 13: `lem-the-negative-half-is-separated-by-iterated-skew-derivations`

- **Authored** `items/lem-the-negative-half-is-separated-by-iterated-skew-derivations.md`
  (draft, L2; 7 canonical steps; precheck/rendercheck clean).
- **Claim/route.** AC declared via `def-axiom-of-choice` and localized to the
  published generic-half theorem (ii) only. Construction: scale the generic
  braided pairing by the degree character $c_\nu=\prod_i(q_i-q_i^{-1})^{n_i}$
  (nonzero scalars, multiplicative), so the pairing $B$ on the actual Serre
  quotient $U_q^-$ has $(H)$, $(N)$, $B(e_i$-word, $\cdot)$ adjunction $(R)$,
  perfect opposite graded components; $(R)$ proved by an explicit braided
  coproduct computation (primitive generators, cross-scalars $\gamma(S)$) plus
  the word deletion formula; matching-permutation Gram formula
  $B(u,v)=\sum_\sigma q^{-\sum_{\sigma(s)>\sigma(t)}\langle\alpha_{i_s},\alpha_{i_t}\rangle}$
  proved by induction and giving symmetry via $\sigma\mapsto\sigma^{-1}$;
  (i) one-step separation; (ii) iterated separation $e_{i_k}'\cdots e_{i_1}'(x)\ne0$
  (composition right to left, first chosen derivation rightmost) with common
  kernel zero; $e_i''$ version via $\psi$. Independent diagnostic: exact
  Laurent-polynomial check (no sympy, integer arithmetic) of the recursion vs
  the matching-permutation formula and symmetry on all words up to degree 4 in
  $A_2$, $B_2$, $C_2$ and degree 3 in $A_3$ — 0 mismatches.
- **Deps added to file (sync to manifest later).** `def-drinfeld-jimbo-quantized-enveloping-algebra`,
  `def-positive-negative-and-toral-quantum-subalgebras`,
  `def-symmetrizable-cartan-datum-for-a-quantum-group` (beyond manifest's five).
- **Sources.** Lusztig 1.2.4/1.2.5/1.2.12/1.2.15 and 33.1.1/33.1.3(a),(b);
  JKK (6.1)–(6.3), Prop 6.1 (locators per manifest, read directly in
  `/tmp/b5-check/jkk.pdf` pp. 22–23).
- Next: `lem-unmodified-integral-torus-has-a-quantum-binomial-basis`.

### L2 item 14: `lem-unmodified-integral-torus-has-a-quantum-binomial-basis`

- **Authored** `items/lem-unmodified-integral-torus-has-a-quantum-binomial-basis.md`
  (draft, L2; 7 canonical steps; precheck/rendercheck clean).
- **Claim/route.** Simple torus: evaluation principle ($T_t(z^n)=\binom{n}{t}_z$),
  Gaussian Vandermonde from the weighted-subset model, symmetric normalization
  ($\binom{m}{r}_z=z^{-r(m-r)}[m,r]_{z^2}$), product identity
  $T_rT_s=\sum_jz^{rs}K^{-j}\binom{r+s-j}{r}_z\binom{r}{j}_zT_{r+s-j}$ by
  evaluation, shift $T_{c+1,t}=z^tT_{c,t}+K^{-1}z^{-c+t-1}T_{c,t-1}$ and the
  two stability identities by direct factorization; spanning of all
  $T_{c,t}$ and $A$-independence of $\{K^\delta T_t\}$ by extremal exponents;
  full torus via $L=\bigoplus\mathbb Z(d_ih_i)$, coset representatives chosen
  minimally (finite coordinate comparisons, AC-free), and
  $\mathbb Q(q)[P^\vee]=\bigoplus_cK_c\mathbb Q(q)[L]$.
- **Deps added to file (sync later).** `def-free-abelian-group`, `def-quantum-integers-factorials-and-divided-powers-at-q-i`, `def-symmetrizable-cartan-datum-for-a-quantum-group`, `def-the-laurent-polynomial-ring` (beyond manifest's four).
- **Independent diagnostic.** Exact-Fraction check of shift, product and stability
  identities at $z=2,K=3$ (shift $c\in[-3,3]$, $t\le4$; product $r,s\le3$;
  stability $t\le4$): 0 failures; plus ordinary Vandermonde and the symmetric
  normalization identity for $n,r,s\le5$: 0 failures. Diagnostic only, not a proof.
- **Fix recorded.** Two precheck REPAIRs (canonical single-line steps; layer
  renumbering); removed a spurious `step 3.1` tag from the shift/stability step and
  retargeted stale `1.5(a)/(b)` cross-references to `step 1.3(a)/(b)`.
- Next: L3 `lem-local-q-one-deformation-proves-integrable-highest-weight-universality`.

### L3 items 15-17 (authored)

- **`lem-local-q-one-deformation-proves-integrable-highest-weight-universality`** (7 steps, clean).
  DVR $R=\mathbb Q[q]_{(q-1)}$; lattice $V_R=\sum_wRF_wv$ finite free per label
  (f.g. torsion-free over a PID); $U_A$-stability (E_i via
  $E_iw=wE_i+\sum_tw_{<t}T_{i,0,1}w_{>t}$, scalars $[m]_i\in R$; $T_{i,c,t}$
  diagonal $\binom{m+c}{t}_i$; divided powers by $R$-unit $[r]_i!$); $q=1$ fibre
  with classical Serre/Cartan relations (from integral identities
  $E_iF_j-F_jE_i=\delta_{ij}T_{i,0,1}$, $T_{i,0,1}E_j=E_jT_{i,a_{ij},1}$, no
  $0/0$ substitution); integrable highest weight; simple by the Casimir
  antichain ($\Omega$-generalized eigenspace + dominance
  `lem-dominance-...` + separation formula of
  `lem-casimir-separates-...`); character $=$ classical simple; applied to
  $\tilde L$ and $L$ gives $\tilde L\cong L$; regularization transport via
  `lem-finite-support-regularization-...`. AC-free.
- **`lem-rational-local-quantum-halves-and-torus-specialize-at-q-one`** (7 steps, clean;
  `axiom_use` = AC only through the generic-half rank theorem (i)). Halves
  finitely free over $R$ and fibre $\cong U(\mathfrak n^\pm)_\mathbb Q$ (Serre
  specialization + equal ranks); toral $R$-basis
  $\{K_c\prod_iK_i^{\delta_i}H_i^{t_i}\}$, $H_i=T_{i,0,1}$ (localized identity
  $K^{-1}=K-(q_i-q_i^{-1})H$); triangular iso over $R$; positive toral quotient
  $k[H_i]$ and $\bar T_{i,c,t}=\binom{H_i+c}{t}$; positive full quotient
  $\cong U(\mathfrak g_{\mathrm{der}})_k$; honest boundary: unquotiented
  $K_h=1$ false ($\mathfrak{sl}_2$, $K=-1$ witness), no vanishing-denominator
  substitution.
- **`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`** (5 steps, clean).
  (i)-(iii) read off the separation lemma's constructed form (+ uniqueness by
  peeling); (iv) word-lattice integrality by height induction on the deletion
  formula; rank-one $b_m=q_i^{-m(m-1)/2}/[m]_i!=1/[m]_{q_i^2}!$, $b_2\notin A$;
  global bound $B(U_A^-,U_A^-)\subseteq A[s^{-1}:s=[r]_i!]$; rank-one
  right-adjunction failure $c=1$ forced, $(F^2,F^2)=1+q^{-2}\ne1+q^2$.
  `axiom_use` = AC inherited only via the separation lemma.
- **Fix recorded.** rendercheck caught `[[r]_i!^{-1}]` being parsed as a
  wikilink in math; rewrote as $A[s^{-1}:s\in S]$ in the statement and step.
- Next: L4 `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators`.

### L4 items 18-19 (authored)

- **`lem-q-one-toral-specialization-identifies-the-classical-cartan-generators`** (3 steps, clean).
  (a) positive toral quotient $k[H_i]$, $\bar T_{i,c,t}=\binom{H_i+c}{t}$
  (quoted from the rational-local theorem); (b) on $U_A$-stable *actually
  graded* lattices: $\bar K_h=\mathrm{id}$, $\bar T$-scalars integer
  $\binom{\langle\mu,h_i\rangle+c}{t}$, commutators
  $[\bar E_i,\bar F_j]=\delta_{ij}\bar H_i$, $[\bar H_i,\bar E_j]=a_{ij}\bar E_j$;
  explicit non-graded-lattice caveat; no $0/0$ substitution.
- **`thm-integrable-quantum-highest-weight-module-exists-and-is-unique`** (4 steps, clean).
  Assembly: Serre-quotient lemma (nonzero/integrable/finite label
  weights/support/universal map), local-q1 lemma ($\tilde L\cong L$, character),
  Cartan-projection lemma (ordinary simplicity), uniqueness of the universal map
  and $V\cong L(\lambda)$ for every nonzero integrable cyclic highest $V$.
- Next: L5 `prop-integrable-quantum-highest-weight-modules-are-semisimple`.

### L5 items 20-21 (authored)

- **`prop-integrable-quantum-highest-weight-modules-are-semisimple`** (5 steps, clean;
  manifest `axiom_use` kept). Proof route: (FIN) $U_ix$ finite-dimensional
  (uniform E/F nilpotence bounds on the finite set $x_b=E^bx$ + the rank-one
  commutation has no E-powers on the right); $U^{\ge0}x$ finite-dimensional
  (finite weight set); label bound $|\langle\nu,h_i\rangle|\le m_i$ (string top
  + `[N-A]` computation); maximal vector $\mu$ dominant integral
  ($[\langle\mu,h_i\rangle-A]_i=0$ argument); $U_qv_\mu\cong L(\mu)$; duality
  retraction via $\psi$ supported at $\mu$ ($E_i\psi=0$ by weights;
  $F_i^k\psi=0$ for $k>m_i$ by the label bound; $W\cong L(\mu)$); retraction
  $\pi:N\to L$ with $\ker\pi=U_qG$, $\dim G<\dim F$; finite induction; general
  case by the AC maximal independent family (Zorn).
- **`prop-specialization-at-q-one-recovers-the-classical-enveloping-relations`** (4 steps,
  clean; manifest `axiom_use` kept). Assembly of the rational-local theorem
  (halves, toral, full positive quotient $U(\mathfrak g_{\mathrm{der}})_k$),
  the graded-lattice operator lemma, and the two boundaries (unquotiented
  $K=-1$ witness; extra Cartan directions diagonal only; no vanishing-denominator
  substitution).
- **Fix recorded.** precheck `bad-tag(choice)` → tag vocabulary requires
  `choose`; adopted canonical layer numbering for both items.
- Next: B items 22-25.

### B items 22-25 (authored)

- **`ex-divided-powers-and-lusztig-form-in-quantized-sl-two`** (4 steps, clean).
  Step 3a's garbled coefficients rewritten: $F^{(2)}F^{(2)}=\binom42_iF^{(4)}$
  with $\binom42_i=q^{-4}+q^{-2}+2+q^2+q^4$. Also corrected the scaffold's
  misprinted $T_{i,-2,1}=\frac{Kq^{-2}-K^{-1}q^2}{q-q^{-1}}$ (scaffold had
  $q^{-3}/q^3$); independently checked $E^{(2)}E^{(1)}=[3]E^{(3)}$,
  $F^{(2)}F^{(2)}=\binom42_iF^{(4)}$ and the $a=b=2$ reordering identity in a
  finite-dimensional rank-one representation at $q=3$ (0 differences).
- **`ex-quantum-verma-and-simple-modules-for-sl-two`** (4 steps, clean).
  String basis/actions; $m\ge0$ finite simple quotient; $m=-1$ irreducible
  infinite string with $[-t]_q\ne0$; general $m<0$.
- **`ex-specializing-a-quantum-highest-weight-lattice-at-q-one`** (3 steps, clean).
  $V_A$ free on $F^{(t)}v_0$ (specific rank-one lattice, not global freeness);
  specialized matrices $\bar K=1$, $\bar F\bar v_t=(t+1)\bar v_{t+1}$,
  $\bar E\bar v_t=(m-t+1)\bar v_{t-1}$,
  $\bar T_{0,1}\bar v_t=(m-2t)\bar v_t$; $m=2$ adjoint triple.
- **`cex-direct-q-one-substitution-in-quantum-denominators`** (4 steps, clean).
  $T_{0,1}$ witness ($0/0$ vs coroot label), $L(1)$ matrices
  $\mathrm{diag}(1,-1)$ vs $K\mapsto\mathrm{id}$, further Gaussian and
  divided-power-commutation witnesses, correct integral-form statement.
- **Fix recorded.** fixproof's rebuild dropped the `## Counterexample`
  heading (the canonical text starts at `**Given:**`); re-inserted manually.
- **All 25 items authored.** Next: page files, contracts, manifest dep sync,
  full battery, decisions, report close.

## Step 3b completion (2026-10-10)

### Completed IDs

All 25 dispatched items are authored (draft, complete proofs, no added IDs),
in the dispatch dependency order. Level 0:
`def-kashiwara-skew-derivations-on-the-negative-quantum-half`,
`def-lusztig-divided-power-integral-form`,
`def-quantum-weight-module-and-integrability`. Level 1:
`def-contravariant-form-on-an-integrable-quantum-highest-weight-module`,
`def-quantum-verma-module-and-simple-highest-weight-quotient`,
`def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half`,
`lem-divided-power-and-toral-quantum-binomial-reordering-identities`,
`lem-divided-power-half-has-integral-skew-string-coefficients`,
`lem-finite-support-regularization-of-quantum-label-weight-modules`,
`lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality`.
Level 2:
`lem-cartan-projection-constructs-the-quantum-verma-contravariant-form`,
`lem-quantum-highest-weight-serre-quotient-is-integrable`,
`lem-the-negative-half-is-separated-by-iterated-skew-derivations`,
`lem-unmodified-integral-torus-has-a-quantum-binomial-basis`. Level 3:
`lem-local-q-one-deformation-proves-integrable-highest-weight-universality`,
`lem-rational-local-quantum-halves-and-torus-specialize-at-q-one`,
`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`.
Level 4:
`lem-q-one-toral-specialization-identifies-the-classical-cartan-generators`,
`thm-integrable-quantum-highest-weight-module-exists-and-is-unique`.
Level 5: `prop-integrable-quantum-highest-weight-modules-are-semisimple`,
`prop-specialization-at-q-one-recovers-the-classical-enveloping-relations`,
`ex-divided-powers-and-lusztig-form-in-quantized-sl-two`,
`ex-quantum-verma-and-simple-modules-for-sl-two`. Level 6:
`ex-specializing-a-quantum-highest-weight-lattice-at-q-one`. Level 7:
`cex-direct-q-one-substitution-in-quantum-denominators`.

Pages: `library/special-topics-in-representation-theory/divided-powers-integral-forms-and-quantum-highest-weights.md`
(21 items, draft) and `…-examples.md` (4 items, draft), both written and
render-clean; the examples page requires the A page. Artifacts: batch-5
manifest `deps` synced to the item files for all 25 rows (order-identical);
`research/frontier-44-special-representation-examples-28-batch-5.proof-contracts.json`
written (207 citations, 135 numbered-step entries, 200 boundary rows, 25/25
items); item receipts recorded for all 25 (6 `accept`, 19 `repaired`, none
escalated; `step3-decisions check --phase final` leaves none of these 25 in
work). The owned cross-batch input remains `[]` (no dependency of this pair
points outside batch 5) and the unified frontier ledger was refreshed.

### Checks actually run (all after the final edits)

- `precheck` explicit paths, 25 items: 25 checked, 0 failing.
- `rendercheck`, 25 items + 2 pages: OK (no wikilink in math, all math parses).
- `proof-layout` single batched run, 25 items: 25 items, 135 steps, 0 defects.
- `content-policy` item mode on the batch-5 manifest: 25 scoped items, 0
  errors.
- `coverage-checklist --require-destination`: 2 pages, 44 harvested rows, 0
  errors.
- `manifest-deps`: 25 items, 0 errors.
- `depcheck --items-file` (25 ids): OK; the three initial
  `cited-not-in-deps` advisories were repaired by declaring the cited
  suppliers.
- `fwdcheck --items-file`: OK.
- `depsource --run --items-file`: 25/25 consumer coverage, 0 unresolved.
- `extcheck --items-file`: 0 recorded-not-proved records in scope.
- `prosecheck` (27 files): 0 errors; the 3 `count-in-prose` warnings were read
  (the "Two remarks" line is an accurate description of the item's own two
  remarks, and "half theorem" is the phrase "generic-half theorem").
- `item-dependency-levels check --run`: 0 errors in this pair (computed levels
  0–7 match the manifest; the 8 remaining run-wide errors are in other
  batches).
- `validate-plan research/plan-spec.json --run`: 0 errors in this pair; the 4
  remaining run-wide errors are in other pages (see below).
- `source-fetch-check --coverage` (batch 5): 8/8 fetch-verified, 8/8 resolved
  (the Step 3a pass also re-ran `url-sweep --recover --fail-on-dead` 5/5 live
  and `source-backing` 23 authored results backed).
- Proof contracts: `proof-contract --strict` on the batch file and on a
  merge of it: 0 errors (one `shotgun-bracket` warning on
  `def-contravariant-form-on-an-integrable-quantum-highest-weight-module`
  1.1, which is the item's actual bracket structure);
  `boundary-audit --fail-on-contradicted --fail-on-template`: 0 template
  clusters, 0 contradicted rows; `citation-fidelity --fail-on-missing-quote`:
  no missing quote, and the 2 widening candidates (the `b>=0`/`b>=1` pair in
  `lem-quantum-highest-weight-serre-quotient-is-integrable` [F2]) were read
  and are faithful: the fact line itself states the `b>=1` bound it uses and
  the cited sources carry the wider `b>=0` calculus; `finite-smoke`: 0
  obligations carried; `risk-report`: 25 items routed (routing signal only).
- `pathcheck special-topics-in-representation-theory`: 0 errors (our pages
  appear only among the expected `draft-unplaced` warnings that pathway-sync
  resolves at Step 4).

### Added suppliers (declaration edges only; no new item IDs)

Eight pre-existing items were declared in `deps` where the authored text
already cited them: `def-drinfeld-jimbo-quantized-enveloping-algebra`,
`def-positive-negative-and-toral-quantum-subalgebras`,
`def-quantum-integers-factorials-and-divided-powers-at-q-i` (two consumers),
`lem-quantum-pascal-recurrence-and-gaussian-integrality`,
`lem-unmodified-integral-torus-has-a-quantum-binomial-basis` (in-batch),
`def-kashiwara-skew-derivations-on-the-negative-quantum-half` (in-batch),
`lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality`
(in-batch) and `def-symmetrizable-cartan-datum-for-a-quantum-group`; the
manifest rows were resynced. No item was added, moved or re-homed, and no
scope went beyond the pair.

### Repairs recorded in this pass

- `def-kashiwara-skew-derivations-on-the-negative-quantum-half`: corrected the
  word-recursion exponents for `Q_w`,`R_w` (rank-one check against
  `E_iF^{(2)}-F^{(2)}E_i`).
- `lem-local-q-one-deformation-…` and `lem-rational-local-…`: removed the
  load-bearing dependency on the B-page example
  `ex-localisation-of-a-pid-at-a-prime` and replaced it with an explicit local
  DVR/localization argument, which clears the two `b-leaf` and the
  `undeclared-prereq` `validate-plan` errors this pair had.
- Stale step cross-references fixed in
  `def-quantum-weight-module-and-integrability` (5.1→4.1),
  `def-quantum-verma-module-and-simple-highest-weight-quotient` (5.1→4.1),
  `lem-quantum-highest-weight-serre-quotient-is-integrable`,
  `lem-unmodified-integral-torus-has-a-quantum-binomial-basis`,
  `prop-integrable-quantum-highest-weight-modules-are-semisimple`
  (steps 1.2-1.3 → 1.2 and 2.1).
- Stale supplier-status sentences updated in `def-contravariant-form-…`,
  `def-the-lusztig-kashiwara-bilinear-form-…` and the Verma item: the
  suppliers are proved in this batch, so the "open obligation" wording was
  replaced by the actual delegation.
- Renderer fixes: `[[r]_i!^{-1}]` rewritten as explicit localization notation
  in `thm-the-negative-half-bilinear-form-…`; counterpart in
  `lem-the-lusztig-integral-form-…`; `bad-tag(choice)`→`choose` in the two
  level-5 propositions; the B example's garbled
  `F^{(2)}F^{(2)}=\binom42_iF^{(4)}` and its coefficient
  `q^{-4}+q^{-2}+2+q^2+q^4` rewritten, and its misprinted
  `T_{i,-2,1}=(Kq^{-2}-K^{-1}q^2)/(q-q^{-1})` corrected (independent `q=3`
  checks).
- `cex-direct-q-one-substitution-in-quantum-denominators`: the
  `## Counterexample` heading dropped by a formatter rebuild was restored.

### Published concerns and record gaps (reported, not repaired here)

- Step 3a record gaps for this pair (§3): four items
  (`def-lusztig-divided-power-integral-form`,
  `def-quantum-weight-module-and-integrability`,
  `def-quantum-verma-module-and-simple-highest-weight-quotient`,
  `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality`)
  have no individual harvest-attribution row (their content is covered by
  sibling rows); the Berkeley row behind the counterexample says "warning"
  where the text displays an indeterminate quotient evaluated by factoring;
  the Lusztig ch. 23 row name still bundles the triangular-decomposition
  clause that belongs to the transferred QG-5 theorems. All three are
  record/wording gaps, not mathematical defects.
- The two QG-5 IDs `thm-integral-triangular-decomposition-for-the-lusztig-form`
  and `thm-quantum-highest-weight-modules-deform-the-classical-weight-character`
  remain owner-held there; this pair has no dependency on either (grep over
  the 25 files and both pages: zero references).
- Run-level `validate-plan` mismatches at handoff, all outside this pair:
  `logarithmic-hodge-complexes-and-smooth-open-weights` (undeclared
  `chow-groups-intersection-products-and-grothendieck-riemann-roch` and
  `hormander-estimates-and-the-levi-problem`),
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`
  (undeclared `divisors-riemann-roch-and-duality`) and
  `ariki-categorification-and-graded-decomposition-numbers` (undeclared
  `kazhdan-lusztig-bases-polynomials-and-cells`). These are Step-4 plan
  reconciliations owed by their owners; they change as siblings author.
- Run-level `item-dependency-levels` shows 8 label mismatches in other
  batches (none in this pair).
- The B-page-leaf defect class is real for this design: the published
  `ex-localisation-of-a-pid-at-a-prime` lives on
  `valuation-rings-and-discrete-valuation-rings-examples` yet was the natural
  supplier for two A-page items. Repaired locally by inlining; the upstream
  example itself is sound and untouched.

### Open obligations

None outstanding for this pair. The two definitions with `justified_by`
suppliers (`def-the-lusztig-kashiwara-bilinear-form-…` ←
`thm-the-negative-half-bilinear-form-…`; `def-contravariant-form-…` ←
`lem-cartan-projection-…`) have both suppliers authored and proved in this
batch, and the definitions now state the delegation without any
"pending verification" claim. Independent mathematical audit of all 25 items
and of the contracts remains the task of Steps 5–7, as does full-source
re-verification of the system as a whole; nothing here claims otherwise.

### Pre-splice plan mismatches for Step 4

The three `validate-plan` errors this pair owned at entry (two `b-leaf` rows
for `ex-localisation-of-a-pid-at-a-prime` and one `undeclared-prereq` for the
A page) are **cleared**. What remains for Step 4 is only the placement work:
the A page is draft and not yet in `_pathway.md` (pathcheck `draft-unplaced`,
resolved by pathway-sync at splice), the examples page requires the A page,
and the four run-level `validate-plan` errors listed above are owned by other
pages. No unresolved dependency of this pair is hidden by this report.
