# Step 5a reader report — batch `6`, run `phase-2-remaining-27`

Reader label: `reader-6` (covers 6). Scope: the two pages of
`research/phase-2-remaining-27-batch-6.pages.json` and all 48 items listed
there, plus dependencies opened to verify specific claims.

Status: COMPLETE. Every listed page and item was opened and read in full; 11
items received a material repair; 32 precheck-bearing items pass precheck after
the repairs; no uneditable defect remains (findings array empty).

## Inventory and per-item verdicts

A page `library/functional-analysis/unbounded-self-adjoint-operators-and-stones-theorem.md`
(order 288.087, 41 items):

| item | verdict |
| --- | --- |
| def-unbounded-linear-operator-domain-and-graph | OK (graph, graph norm, completeness of $H\oplus H$ verified) |
| def-densely-defined-closed-and-closable-operator | OK (three graph-norm claims verified) |
| thm-closure-of-a-closable-operator | OK (closure of graph is a graph; least closed extension) |
| def-adjoint-of-a-densely-defined-unbounded-operator | OK (extension of bounded functionals + Riesz) |
| lem-unbounded-adjoint-is-well-defined-and-closed | OK (closedness, kernel-range identity, inclusion reversal all checked) |
| thm-closable-iff-adjoint-domain-is-dense | OK (graph rotation $W$ and $W(M^\perp)=(WM)^\perp$ checked) |
| def-symmetric-self-adjoint-and-essentially-self-adjoint | REPAIRED (justification of density of $D(T^{**})$) |
| cex-symmetric-need-not-be-self-adjoint | OK (density, symmetry, closedness, $D(T^*)$, boundary sign all checked; free-constant slip noted below) |
| def-resolvent-and-spectrum-of-a-closed-unbounded-operator | OK (plus-sign convention $R_T(z)=(z-T)^{-1}$; resolvent recovers $T$; $\rho\ne\varnothing\Rightarrow$ closed) |
| thm-self-adjoint-resolvent-estimate | OK (identity, injectivity, closed range, denseness, estimate) |
| thm-self-adjointness-range-criterion | REPAIRED (two in-text step references) |
| def-cayley-transform-of-a-self-adjoint-operator | OK ($C=I-2i(T+i)^{-1}=I+2iR_T(-i)$, isometry, unitary, $\ker(I-C)=0$, $\operatorname{ran}(I-C)=D(T)$) |
| thm-cayley-correspondence | OK (both inverse constructions verified) |
| def-unbounded-integral-against-a-pvm | OK (Cauchy property and linearity of the limit) |
| lem-unbounded-pvm-integral-is-well-defined-and-closed | OK (density, $\bar f(E)\subseteq f(E)^*$, closedness via adjoint) |
| thm-spectral-theorem-for-unbounded-self-adjoint-operators | OK (transport along $\lambda\mapsto(\lambda-i)(\lambda+i)^{-1}$; uniqueness) |
| thm-unbounded-borel-functional-calculus | REPAIRED (removed authorial "hmm:" residue in step 1.2) |
| def-strongly-continuous-one-parameter-unitary-group | OK |
| def-infinitesimal-generator-of-a-unitary-group | OK (sign convention $U(t)=e^{itT}$ recorded) |
| lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group | OK (group law, strong continuity, derivative domain via Fatou) |
| lem-laplace-resolvents-of-a-unitary-group | REPAIRED (sign in step 4.1; conclusion was already correct) |
| lem-generator-of-a-unitary-group-is-skew-adjoint | OK (density of $D(G)$ via $Q_+$, symmetry, closedness, range criterion) |
| thm-stone-one-parameter-unitary-groups | OK (uniqueness of the group for a fixed generator) |
| def-deficiency-subspaces-and-deficiency-indices | OK |
| thm-von-neumann-self-adjoint-extension-parameterization | REPAIRED (step 2.1 replaced by a correct injectivity argument) |
| cor-self-adjoint-extension-exists-iff-deficiency-indices-agree | OK |
| def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces | OK |
| thm-canonical-spectral-type-decomposition | OK (multiplication model, support transport, separable clause) |
| def-relative-boundedness-with-respect-to-an-operator | OK (graph-norm equivalence, resolvent interface) |
| lem-second-resolvent-identity-for-closed-operator-perturbations | REPAIRED (false sign in the statement and in the proof) |
| thm-kato-rellich | REPAIRED (symbols in [A2], factorization in step 2.1, false [A5], lower-bound step rewritten) |
| def-discrete-and-essential-spectrum-of-a-self-adjoint-operator | REPAIRED (item 3: non-sequitur replaced by the finite-dimensional reduction) |
| thm-weyl-criterion-for-essential-spectrum | OK (both directions, orthonormal singular sequence) |
| def-relative-compactness-with-respect-to-an-operator | REPAIRED (items 1, 2, 4: resolvent identities and symbols) |
| thm-weyl-essential-spectrum-invariance | REPAIRED (resolvent-difference sign; circular step removed) |
| def-norm-and-strong-resolvent-convergence | OK |
| lem-resolvent-star-algebra-is-dense-in-c-zero | OK (Stone-Weierstrass on $\mathbb R^*$; factorization identity verified by direct computation) |
| thm-continuous-functional-calculus-under-resolvent-convergence | OK (strong and norm cases, parameter independence) |
| cor-unitary-groups-converge-under-strong-resolvent-convergence | OK |
| lem-spectral-form-domain-and-core-of-a-semibounded-operator | OK (wording observation below) |
| thm-min-max-principle-below-essential-spectrum | OK (padding case noted below) |

B page `library/functional-analysis/unbounded-self-adjoint-operators-and-stones-theorem-examples.md`
(order 288.088, 7 items; page prose read, not edited):

| item | verdict |
| --- | --- |
| ex-unbounded-multiplication-operator-and-its-domain | REPAIRED (closing summary renumbered to the steps carrying the claims) |
| ex-position-operator-on-l-two-of-r | OK |
| ex-periodic-derivative-and-its-unitary-translation-group | OK (explicit solution of $(P\pm i)u=g$ checked; generator identification) |
| cex-the-minimal-derivative-is-symmetric-not-self-adjoint | OK (deficiency vectors, $\lambda\mapsto\mu$ bijection $|\lambda|=1/e\leftrightarrow|\mu|=1$ checked) |
| cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded | OK (cited closed graph theorem is published and states DC) |
| cex-strongly-continuous-unitary-group-need-not-be-norm-continuous | OK ($\|U(t)-I\|=2$; bounded-generator dichotomy) |
| rem-self-adjoint-extensions-and-deficiency-indices | OK (wording observation below) |

## Repairs (with evidence)

The library convention throughout is $R_T(z)=(z-T)^{-1}$
(`def-resolvent-and-spectrum-of-a-closed-unbounded-operator`, sentence fixed
there: "the parameter appears with a plus sign in front of $T$"). Every repair
below was checked against that convention by direct computation and, for the
second-resolvent and Kato-Rellich items, against Teschl, *Mathematical Methods
in Quantum Mechanics*, 2nd ed., §6.1 pp.157-159 (Lemma 6.3 with (6.3) and
Theorem 6.4 with (6.4) and its proof) and §6.4 pp.171-173 ((6.39), (6.40),
Theorems 6.19-6.20, Lemmas 6.21-6.23), fetched and read in full for that
purpose.

1. `lem-second-resolvent-identity-for-closed-operator-perturbations`. The
   statement read
   $R_C(z)-R_A(z)=-R_A(z)BR_C(z)=-R_C(z)BR_A(z)$, which is false for
   $B=C-A$: multiplying $R_A(z)(C-z)R_C(z)=-R_A(z)$ (itself mis-signed as
   $=+R_A(z)$) gives $R_C(z)-R_A(z)=R_A(z)BR_C(z)=R_C(z)BR_A(z)$. Scalar
   check $A=a$, $C=c$: both sides equal $(c-a)(z-c)^{-1}(z-a)^{-1}$. Fixed the
   statement, [A3] ($(z-C)R_C(z)=I$, hence $R_A(z)(C-z)R_C(z)=-R_A(z)$) and
   steps 2.1, 2.2, 3.1, and [A1] ($AR_A(z)=zR_A(z)-I$, not $I+zR_A(z)$).
2. `thm-weyl-essential-spectrum-invariance`. [A5] and steps 3.1, 3.2 carried
   the same wrong sign, and step 3.2 proved compactness of $KR_{A+K}$ from an
   identity containing $KR_{A+K}$ itself (circular). Replaced by
   $R_{A+K}(z)-R_A(z)=R_{A+K}(z)KR_A(z)$, a product of the bounded
   $R_{A+K}(z)$ with the compact $KR_A(z)$; the conclusion
   $\sigma_{\mathrm{ess}}(A+K)=\sigma_{\mathrm{ess}}(A)$ is unchanged.
3. `def-relative-compactness-with-respect-to-an-operator`. Clause 1 used
   $AR_A(z)=I+zR_A(z)$; here it is $zR_A(z)-I$ (so $\|AR_A(z)\|\le1+|z|\|R_A(z)\|$
   as asserted). Clause 2's first identity had the resolvents in the wrong
   order ($BR_A(z)R_A(w)$, circular); the correct identity is
   $BR_A(z)=BR_A(w)+(z-w)BR_A(w)R_A(z)$. Clause 4's factorization and symbol
   were the Teschl-convention ones; in this convention
   $BR_A(i\lambda)=(BR_A(i))(i-A)R_A(i\lambda)$ with symbol
   $(i-\mu)(i\lambda-\mu)^{-1}$.
4. `lem-laplace-resolvents-of-a-unitary-group`. Step 4.1 read
   $GR_-=\lambda R_--I$; step 2.1 gives $(\lambda+G)R_-=I$, that is
   $GR_-=I-\lambda R_-$, which is what makes the displayed
   $(\lambda-G)R_-=2\lambda R_--I$ and the identity
   $R_++R_-=2\lambda R_+R_-$ correct.
5. `thm-von-neumann-self-adjoint-extension-parameterization`. Step 2.1 claimed
   $2\|u\|^2+2\operatorname{Re}\langle Vu,u\rangle=0$ from $u+Vu=-2ix$; the
   correct value is $\|u+Vu\|^2=4\|x\|^2$, and that equation does not force
   $x=0$. Replaced by: both sides lie in $D(T^*)$, $T^*(u+Vu)=iu-iVu$ and
   $T^*x=Tx$ give $Tx=-\tfrac12(u-Vu)$, and pairing both identities with $u$
   using $\langle Tx,u\rangle=-i\langle x,u\rangle$ yields
   $\|u\|^2+\langle Vu,u\rangle=-\|u\|^2+\langle Vu,u\rangle$, hence $u=0$ and
   $x=0$.
6. `thm-kato-rellich`. [A2] quoted symbols from the other resolvent
   convention ($\lambda(\lambda+i\mu)^{-1}$, $\mu(\mu+\lambda)^{-1}$);
   corrected to $\nu(i\mu-\nu)^{-1}$ and
   $\nu(-\lambda-\nu)^{-1}=-\nu(\nu+\lambda)^{-1}$ with the same norm bounds.
   Step 2.1's factorization $(A+B\pm i\mu)=(I+BR_A(\pm i\mu))(A\pm i\mu)$ is
   false in this convention (the right side is $A+B\pm i\mu\pm2i\mu BR_A(\pm i\mu)$);
   the correct form is $(A+B\pm i\mu)=(I-BR_A(\mp i\mu))(A\pm i\mu)$, since
   $R_A(\mp i\mu)(A\pm i\mu)=-I$. [A5] asserted the false general claim
   "$-\lambda\in\rho(S)\Rightarrow S\ge-\lambda$"; it now records the true
   facts used (closed real spectrum, $\inf\sigma(S)\in\sigma(S)$,
   $\|R_S(t)\|=\operatorname{dist}(t,\sigma(S))^{-1}$, $S\ge c\Leftrightarrow
   \sigma(S)\subseteq[c,\infty)$). The lower-bound step was rewritten: for
   admissible $\lambda>-\gamma$ the factorization applied to $S_t=A+tB$ gives
   $-\lambda\in\rho(S_t)$ with a uniform gap
   $\operatorname{dist}(-\lambda,\sigma(S_t))\ge\rho>0$; concavity and
   continuity of $t\mapsto\inf\sigma(S_t)$, starting at
   $\inf\sigma(A)\ge\gamma>-\lambda$, make it impossible for $\inf\sigma(A+B)$
   to lie below $-\lambda$, and the two-case solution of
   $\|BR_A(-\lambda)\|<1$ yields the stated constant
   $\gamma-\max\{a|\gamma|+b,b/(1-a)\}$ (matching Teschl (6.4) with the
   denominator corrected to $1-a$). Step renumbering to 3.2/4.1 follows the
   precheck layer convention; internal references were kept consistent.
7. `def-symmetric-self-adjoint-and-essentially-self-adjoint`. Item 2 justified
   the density of $D(T^{**})$ by "$T^{**}\subseteq T^*$", which does not give
   density; the correct reason is $T\subseteq T^{**}=\overline T$, so
   $D(T^{**})$ contains the dense $D(T)$.
8. `thm-self-adjointness-range-criterion`. Steps 3.1 and 3.2 cited "1.2" for
   closedness of $\operatorname{ran}(T-z)$; the carrying step is 2.1.
9. `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator`. Item 3's
   first half inferred "$\lambda$ is an eigenvalue" from $P_\varepsilon\ne0$;
   replaced by the correct finite-dimensional reduction: $\operatorname{ran}
   P_\varepsilon$ is a finite-dimensional reducing subspace whose restriction
   of $A$ has spectrum exactly $\sigma(A)\cap(\lambda-\varepsilon,
   \lambda+\varepsilon)$, a finite set of eigenvalues of finite multiplicity.
10. `ex-unbounded-multiplication-operator-and-its-domain`. Step 3.1 summarised
    "steps 1.1 (domain), 2.2 (self-adjointness and spectral measure), 2.1
    (calculus) and 3.1 (spectrum)", citing itself for the spectrum; corrected
    to steps 1.1, 2.1 and 2.2.
11. `thm-unbounded-borel-functional-calculus`. Step 1.2 contained an authorial
    residue ("...$2(|f|+|g|)$ hmm: more precisely..."); removed.

Contract and tooling state after the repairs: the affected clauses of
`research/phase-2-remaining-27-batch-6.proof-contracts.json` were updated for
every changed item (claims for `lem-second-resolvent-...` d-2.1/d-2.2/d-3.1,
`thm-weyl-...` d-3.1/d-3.2, `lem-laplace-...` d-4.1,
`thm-von-neumann-...` d-2.1, `thm-kato-rellich` d-1.1/d-2.1/d-3.2/d-4.1 and
citation uses, `thm-self-adjointness-range-criterion` d-3.1/d-3.2,
`ex-unbounded-multiplication-...` d-3.1,
`thm-unbounded-borel-functional-calculus` d-1.2; derivation records added for
the well-definedness clauses of `def-relative-compactness-...` and for the
"with proofs" clauses of `def-symmetric-...` and
`def-discrete-and-essential-spectrum-...`). No item of this batch carried a
`verification:` record, so no stale judge record had to be removed. Reflow
(`tools/reflow.mts`) reported no reformatting and precheck
(`tools/precheck.mts`) passes for all 32 phase-format items of the batch;
`def-relative-compactness-with-respect-to-an-operator` is a definition without
a phase body, so precheck skips it by design.

## Lesser observations, left unchanged (nonfatal, closable at once)

These are recorded for the 5b lead and were deliberately not edited: each has a
true conclusion and is closed by a competent reader in one step.

- `thm-self-adjointness-range-criterion` step 4.1: "(6)$\Leftrightarrow$(4) by
  steps 1.5 and 1.3" is loose - (4)$\Rightarrow$(6) runs through
  (4)$\Rightarrow$(5)$\Rightarrow$(1)$\Rightarrow$(6), which the same sentence
  displays.
- `cex-symmetric-need-not-be-self-adjoint` step 3.1: from
  $\bar H-i\bar g=c\mathbf 1$ one gets $g=iH-i\bar c$, not
  $g=iH-\overline{ic}$; the constant is free, so the set of solutions and the
  conclusion $g'=iH'=ih$ are unchanged.
- `lem-spectral-form-domain-and-core-of-a-semibounded-operator`, statement:
  "$q_A$ changes only by the constant $(c-c')\|x\|^2$" - $q_A[x]=c\|x\|^2+
  \|(A-cI)^{1/2}x\|^2=\int\lambda\,dE_x$ is itself $c$-independent; it is
  $\|(A-cI)^{1/2}x\|^2$ that changes by the constant, as the proof shows.
- `rem-self-adjoint-extensions-and-deficiency-indices`: "the unitaries are the
  phases of the unit circle" - the unitaries $V:K_+\to K_-$ are the scalars
  $\lambda$ with $|\lambda|=\|e^{-x}\|/\|e^{x}\|=1/e$, in bijection with the
  boundary phases $\mu$ on the unit circle.
- `thm-min-max-principle-below-essential-spectrum` step 1.4: when
  $E_{n-1}=\Lambda$ there are fewer than $n-1$ eigenvectors below $\Lambda$;
  the test space $F$ must be padded with arbitrary orthonormal vectors, after
  which the same argument (all eigenvalues below $\Lambda$ are among the
  $\varphi_i$) goes through, and the sup-inf bound follows as in the case
  $E_n<\Lambda$ by step 2.2.

## Dependencies opened

Item-level dependencies whose clauses are actually used in the repaired or
otherwise load-bearing steps were opened and their statements/sections read:
`def-resolvent-and-spectrum-of-a-closed-unbounded-operator` (convention,
resolvent recovers $T$, closedness from $\rho\ne\varnothing$),
`def-relative-boundedness-with-respect-to-an-operator` (constants, graph-norm
form, resolvent interface), `lem-neumann-series` (statement and tail estimate),
`thm-double-orthogonal-complement-is-closure` (AC hypothesis and statement),
`thm-hilbert-adjoint-properties`, `thm-partial-isometry-characterizations`,
`thm-support-and-uniqueness-of-the-spectral-measure`,
`thm-bounded-borel-pvm-integral` (norm identity and $E$-essential supremum),
`lem-scalar-and-complex-measures-from-a-pvm`,
`thm-riesz-representation-for-hilbert-space`,
`def-projection-valued-measure` (clauses 1-4, including strong countable
additivity), and the published `thm-closed-graph-theorem` (published, states
DC, cited correctly by the Banach-space counterexample). Teschl's §6.1 and §6.4
sections listed above were fetched and read for the second-resolvent-identity,
Kato-Rellich and Weyl items.

## Page verdicts

- A `unbounded-self-adjoint-operators-and-stones-theorem`: page prose is
  accurate on the current items (domain-as-data, graph norm, adjoint, range
  criterion, Cayley, PVM calculus, Stone, deficiency indices, resolvent
  convergence, form domain, min-max all match the items); 10 of its 41 items
  were repaired, none of the repairs contradicts the summary. No page-prose
  edit was needed.
- B `unbounded-self-adjoint-operators-and-stones-theorem-examples`: page prose,
  one item repair aside, is accurate; the multiplication/position/periodic
  models, the $(1,1)$ deficiency example, the Banach-space closed-graph
  counterexample and the norm-continuity counterexample all check. B-page
  prose was read but not edited (out of scope for reader edits).

## Blockers

None. No withdrawal is proposed: no item, page or claim was deleted, and no
claim of this batch is left unsupported after the repairs.
