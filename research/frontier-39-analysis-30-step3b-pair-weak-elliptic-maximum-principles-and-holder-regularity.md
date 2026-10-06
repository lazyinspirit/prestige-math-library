# Step 3b authoring report — `weak-elliptic-maximum-principles-and-holder-regularity`

- Run: `frontier-39-analysis-30`
- Role: step3b pair author (alpha-high)
- A page: `weak-elliptic-maximum-principles-and-holder-regularity` (order 458.037, category `pde`, batch 14, 22 items)
- B page: `weak-elliptic-maximum-principles-and-holder-regularity-examples` (order 458.038, batch 14, 9 items)
- Owned pair only. Batches file: `research/frontier-39-analysis-30-batch-14.pages.json` (sole pair).
- Scope decision: owner `proceed` recorded 2026-10-04T20:24:54Z
  (`research/frontier-39-analysis-30-step3a-owner-weak-elliptic-maximum-principles-and-holder-regularity.json`,
  sha256 `cf018f2eb9a00d733447e5b189da930e3927768e7b9655b6b09bc15c2d5da9ad`), integrating the scope repair:
  the weak-maximum counterexample becomes the smooth radial eigenfunction
  $u=\sin|x|/|x|$ on $B_\pi(0)\subset\mathbb R^3$ for $L=-\Delta-1$, and the
  systems remark is narrowed to the supported scalar limitation.

## Owned IDs and open obligations at entry

Authoring order fixed by the dispatch (dependency level, then page order and item ID):

| level | home | item |
|---|---|---|
| 0 | A | `lem-geometric-oscillation-decay-implies-a-holder-modulus` |
| 0 | A | `lem-nonlinear-geometric-iteration-sequence-converges-to-zero` |
| 3 | A | `def-weak-subsolution-and-supersolution-of-a-divergence-form-equation` |
| 4 | A | `lem-positive-part-is-an-admissible-weak-test-by-truncation` |
| 5 | A | `lem-caccioppoli-inequality-for-truncated-subsolutions` |
| 5 | A | `lem-positive-part-of-a-zero-trace-function-has-zero-trace` |
| 6 | A | `lem-sobolev-level-set-iteration-step` |
| 7 | A | `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions` |
| 7 | A | `thm-weak-maximum-principle-for-coercive-divergence-form-equations` |
| 8 | A | `cor-weak-comparison-and-uniqueness` |
| 8 | A | `lem-de-giorgi-oscillation-reduction` |
| 8 | A | `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions` |
| 8 | A | `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term` |
| 8 | B | `cex-weak-maximum-principle-needs-the-zero-order-sign` |
| 8 | B | `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions` |
| 9 | A | `lem-moser-iteration-for-positive-supersolutions` |
| 9 | A | `thm-de-giorgi-nash-interior-holder-regularity` |
| 9 | B | `ex-oscillation-decay-implies-a-holder-modulus` |
| 10 | A | `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems` |
| 10 | A | `thm-weak-harnack-inequality-for-nonnegative-supersolutions` |
| 10 | B | `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory` |
| 10 | B | `ex-measurable-coefficients-with-a-holder-regular-weak-solution` |
| 11 | A | `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution` |
| 11 | A | `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range` |
| 11 | A | `thm-harnack-inequality-for-nonnegative-weak-solutions` |
| 12 | A | `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds` |
| 12 | B | `cex-harnack-estimate-needs-an-additive-forcing-term` |
| 12 | B | `cex-harnack-requires-nonnegativity` |
| 13 | A | `cor-strong-maximum-principle-for-weak-elliptic-solutions` |
| 13 | B | `cex-global-harnack-comparison-needs-connectedness` |
| 14 | B | `cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets` |

Open obligations carried from Step 3a / batch note:

1. A7 clause 2 forcing term: display the $L^q$--$L^{q'}$ Hölder step, the
   threshold $q>n/2$, and the dependence of $C$ on $\Omega$; no verbatim
   boundary-form source exists, so the author writes it from [K1] Thm 1 and
   [Si] L18 Thm 2 by scaling.
2. A5 $n=2$ clause: confirm the hypotheses of
   `thm-critical-sobolev-embedding-into-every-finite-lq` (bounded extension
   domain; balls qualify) before using it for $2^*$.
3. A15/A16 constants: transcribe $p_0$ and negative-power constants from [K1]
   (7)--(13); weak Harnack range is exactly $0<p<n/(n-2)$.
4. In-run suppliers are unfinished at authoring time (batches 4, 10, 12, 13):
   `def-uniformly-elliptic-divergence-form-operator`,
   `def-weak-dirichlet-solution-for-a-divergence-form-operator`,
   `lem-elliptic-form-is-well-defined-and-bounded`,
   `def-local-weak-solution-for-a-divergence-form-operator`,
   `def-hk-and-hk-zero-notation` (published), Sobolev/Poincaré/critical-embedding
   items of batch 4, and `def-holder-spaces-c-k-alpha-and-their-scaled-norms`
   of batch 13. Consumers are authored anyway; decisions stay escalated until
   the suppliers are finished and their actual use is reconciled (tracked below).
5. Added coverage rows for two items named by batch-note bookkeeping
   (`lem-geometric-oscillation-decay-implies-a-holder-modulus`,
   `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range`).

## Source texts in hand

Local copies used for this authoring pass (byte-identical to the coverage stamps):

- [Si] `simon.pdf` (940975 B) — repo root; Lectures 13, 17, 18.
- [K1] Krummel, *DeGiorgi-Nash lecture notes* (202547 B) — `/tmp/sources/k1.pdf`.
- [K2] Krummel, *Consequences of De Giorgi-Nash-Moser* (170987 B) — `/tmp/sources/k2.pdf`.
- [V] Velichkov, *Teorema di De Giorgi* (242906 B) — `/tmp/sources/v.pdf` (Italian).
- [T] Teschl, *PDE: From Classical to Modern* (2912992 B) — `/tmp/sources/t.pdf`.
- [S] Schikorra, *PDE I & II* (1635832 B) — `/tmp/sources/s.pdf`.

## Per-item checkpoints

(appended in dependency order as each item was authored, checked and recorded; `A` = main page, `B` = examples page)

### Level 0 — `lem-geometric-oscillation-decay-implies-a-holder-modulus` (A)

Claim: oscillation decay osc_{B_r(x)}u <= theta osc_{B_{2r}(x)}u with theta in (0,1) gives |u(x)-u(y)| <= 2^alpha (|x-y|/R)^alpha osc_{B_R(x_0)}u on B_{R/2}, alpha = log(1/theta)/log 2; smaller exponents admitted with the dyadic constant. Source: dyadic iteration of [K2] Cor. 2 / [Si] L18 Theorem 3 and [V] Prop. 11. Deps: published Holder/oscillation interfaces only. Decision: **accept**. Checks: proof-layout, precheck, rendercheck, strict contract (F1/F2 cited in both steps). Open gaps: none.

### Level 0 — `lem-nonlinear-geometric-iteration-sequence-converges-to-zero` (A)

Claim: Y_{j+1} <= C B^j Y_j^{1+delta} with the explicit smallness Y_0 <= C^{-1/delta}(2B)^{-1/delta^2} forces geometric decay with ratio (2B)^{-1/delta}. Sources: elementary; scaffolded from the iteration lemmas of [K1]/[Si]. Deps: published lemma `lem-geometric-sequence-null` (added by repair). Decision: **repaired**. Checks: all four pass. Open gaps: none.

### Level 3 — `def-weak-subsolution-and-supersolution-of-a-divergence-form-equation` (A)

Claim/conventions: the library form $a(u,v)=\int(a^{ij}D_juD_iv+b^iD_iu v+cuv)$ with $Lu=-D_i(a^{ij}D_ju)+b^iD_iu+cu$; subsolution against nonnegative $H^1_0$ tests; weak boundary order via trace; boundary supremum as an infimum. Sources: [Si] L13 pp. 153-154; [T] Ch. 10 §1; [S] II.1-II.2. Decision: **accept**. Checks: rendercheck, strict contract; no proof body. Open gaps: none. Note: the convention bullet records that $c\ge0$ is the favourable zeroth-order sign and that no sign condition is imposed on $b$ by the definition.

### Level 4 — `lem-positive-part-is-an-admissible-weak-test-by-truncation` (A)

Claim: $(u-k)^\pm\in H^1$ with $D(u-k)^+=1_{\{u>k\}}Du$; $\eta^2u_k$ is an admissible nonnegative test. Source: [Si] L13 Lemma 3/p. 147-152 chain rule conventions; ACL characterisation cited for the truncation. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 5 — `lem-positive-part-of-a-zero-trace-function-has-zero-trace` (A)

Claim: $Tu\le k$ a.e. iff $(u-k)^+\in H^1_0$; the weak boundary order equals the trace order and $\sup_{\partial\Omega}u=\operatorname{ess\,sup}_{\partial\Omega}Tu$. Sources: [Si] L13 conventions (i)-(iv); [T] Ch. 10 §1 boundary convention; trace suppliers. Decision: **repaired** (published dependency `cor-positive-negative-part` added). Checks: all four pass. Open gaps: none.

### Level 5 — `lem-caccioppoli-inequality-for-truncated-subsolutions` (A)

Claim: the truncated Caccioppoli inequality with source, $\int\eta^2|D(u-k)^+|^2\le\frac{4M_a^2}{\theta^2}\int(u-k)^{+2}|D\eta|^2+\frac2\theta\int\eta^2(u-k)^+f^+$, and its ball form with $C(n,\theta,M_a)$. Sources: [V] Lemmi 4-5; [K1]/[Si] L17 Lemma 1-2. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 6 — `lem-sobolev-level-set-iteration-step` (A)

Claim: the level-set decay $\int_{B_r}(u-k)^{+2}\le C(R-r)^{-2}(k-h)^{-4/n}(\int_{B_R}(u-h)^{+2})^{1+2/n}$ and the measure estimate, with the $n=2$ substitute $\delta\in(0,1)$. Sources: [V] Lemma 6 and Lemmi 9-11; [Si] L17 Lemma 2/Cor. 1. Deps repaired: the $W^{1,1}$ endpoint supplier `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one` and `thm-critical-sobolev-embedding-into-every-finite-lq` are declared and cited. Decision: **repaired**. Checks: all four pass. Open gaps: none.

### Level 7 — `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions` (A)

Claim: $\operatorname{ess\,sup}_{B_{\rho R}}u\le C(n,\theta,M_a,\rho,p)(\frac1{|B_R|}\int_{B_R}u^p)^{1/p}$ for nonnegative homogeneous subsolutions, all $p>0$, scale invariant, with the $n=2$ critical-embedding clause. Sources: [V] Lemma 6; [K1] Thm 1 (homogeneous case); [Si] L17. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 7 — `thm-weak-maximum-principle-for-coercive-divergence-form-equations` (A)

Claim: clause 1, the homogeneous weak maximum principle under the weak sign condition; clause 2, the forcing bound $\operatorname{ess\,sup}_\Omega u\le\sup_{\partial\Omega}u^++C\|f^+\|_{L^q}$, $q>n/2$, $b\equiv0$, $c\ge0$; clause 3, the supersolution form. **Defect found and repaired in the item: the manifested weak sign condition displays the opposite first-order sign.** With the library convention $Lu=-D_i(a^{ij}D_ju)+b^iD_iu+cu$ one has $L=-D_i(a^{ij}D_ju-b^iu)+(c-\operatorname{div}b)u$, so the natural condition is $\int(c\zeta+b^iD_i\zeta)\ge0$ ($c-\operatorname{div}b\ge0$ weakly); the manifested sign is refuted by $u=\sin|x|/|x|$ on $B_\pi\subset\mathbb R^3$ with $b=0$, $c=-1$, which has $Lu=0$ and $\operatorname{ess\,sup}u=1>0=\sup_{\partial\Omega}u^+$ while the manifested inequality reads $\int(c\zeta-b^iD_i\zeta)=-\int\zeta\ge0$ for $c+\operatorname{div}b=0$ weakly, i.e. it holds. The authored steps 1.1/2.1 use the corrected condition applied with $u_k$ and $u_k^2$ exactly as in [Si] L13 Theorem 4; step 3.1 uses the $W^{1,1}$ endpoint supplier and [F3]. Decision: **escalate** — the owner must amend the manifest statement and re-close scope. Checks: proof-layout, precheck, rendercheck, strict contract all pass for the corrected item. Open gap: manifest sign + owner scope re-close.

### Level 8 — `cor-weak-comparison-and-uniqueness` (A)

Claim: comparison $u\le v$ for a subsolution below a supersolution on the boundary, plus the two consequences (forcing bound, uniqueness for the homogeneous Dirichlet problem). Source: [T] Ch. 10 §1 comparison; [Si] L13. Decision: **accept**. Checks: all four pass. Open gap: the inherited sign-convention decision of A7 (the corollary refers to the sign condition by link, not by display).

### Level 8 — `lem-de-giorgi-oscillation-reduction` (A)

Claim: dichotomy of the half-level sets and the quantitative reduction $\operatorname{osc}_{B_{R/2}}u\le\eta\operatorname{osc}_{B_R}u$ with $\eta=\eta(n,\theta,M_a)\in(0,1)$. Sources: [K2] (7); [V] Prop. 11 and Lemmi 9-12; [Si] L18. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 8 — `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions` (A)

Claim: $\int\eta^2|D\log(u+\varepsilon)|^2\le\frac{4M_a^2}{\theta^2}\int|D\eta|^2$ and the ball form $\int_{B_r}|Du|^2/u^2\le C|B_R|(R-r)^{-2}$ for positive supersolutions. Source: [K1] (14)-(15); [Si] L17 Lemma 3-4. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 8 — `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term` (A)

Claim: $\operatorname{ess\,sup}_{B_{\rho R}}u\le C[(\fint_{B_R}u^p)^{1/p}+R^{2-n/q}\|f^+\|_{L^q(B_R)}]$ for nonnegative subsolutions with $L^q$ source, $q>n/2$. Proof route: remove the source with the Lax–Milgram barrier $h$ and weak maximum principle, then apply homogeneous local boundedness to $(u-h)^+$ and undo the source and spatial scalings. The source difference is $g-g^+=-g^-\le0$. The positive-part step uses the admissible test $\psi_\epsilon=\phi\min(1,(u-h)^+/\epsilon)$ for nonnegative $\phi\in C_c^\infty$: the truncation-gradient term is nonnegative, and dominated convergence gives the inequality for the positive part. The extension to all nonnegative $H^1_0$ tests uses positive-part approximation in $H^1$ followed by nonnegative interior mollification; no indicator multiplied by an arbitrary test is asserted to be in $H^1_0$. Sources: [Si] L18 Theorem 2 (delta-rescaling), [K1] Thm 1, [V] Teorema 2 and Lemma 4.

**Owner proof repair (2026-10-05).** Replaced the former invalid assertion $\mathbf1_{\{w>0\}}v\in H^1_0$ by the truncation and positive-cone approximation argument above. The theorem Statement is unchanged. The earlier Step-3 “all four checks pass” record predates this edit and is stale for the new item hash; `node tools/proof-layout.mjs items/thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term.md` passes (1 item, 3 steps, 0 defects). Item-decision/contract recertification remains for the owner-controlled workflow. No analytic gap remains in this reduction.

### Level 8 — `cex-weak-maximum-principle-needs-the-zero-order-sign` (B)

Refuted: the weak maximum principle without a zero-order sign condition. Witness: $\Omega=B_\pi\subset\mathbb R^3$, $L=-\Delta-1$, $u=\sin|x|/|x|$, $Lu=0$, $u>0$ inside, $u=0$ on the boundary. Decision: **accept** (owner-repaired statement from Step 3a, unchanged). Checks: all four pass. Open gaps: none. Note: the last sentence records that the manifested sign functional $\int c\zeta$ is negative, which stays true for $b=0$ under the corrected condition.

### Level 8 — `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions` (B)

Example: $u=|x|^2-1$ on the unit disc for $-\Delta$; the classical and weak principles both give supremum $0$. Decision: **repaired**. Checks: all four pass. Open gaps: none.

### Level 9 — `lem-moser-iteration-for-positive-supersolutions` (A)

Claim: the negative-power chain $(\fint_{B_R}u^{-p})^{-1/p}\le C\operatorname{ess\,inf}_{B_{\rho R}}u$ for all $p>0$, and the $p_0$-comparison on $B_{3R/4}$ with $p_0=p_0(n,\theta,M_a)>0$; proof reproduces (6)-(13) of [K1] with the logarithmic estimate as input and the monotone $\varepsilon\downarrow0$ limit. Deps repaired: the dominated-convergence interface is `thm-dominated-convergence`; the Sobolev supplier is the critical embedding. Decision: **repaired**. Checks: all four (incl. strict contract with 5 mapped steps). Open gaps: none.

### Level 9 — `thm-de-giorgi-nash-interior-holder-regularity` (A)

Claim: interior Holder regularity of weak solutions with exponent $\alpha(n,\theta,M_a)$ and the displayed seminorm and $L^\infty$ bounds, plus existence and uniqueness of the representative. Proof: dyadic iteration of the one-step reduction, transfer to Lebesgue points, extension by continuity (deps repaired to `thm-uniformly-continuous-extension-from-dense` and `def-complete-metric-space`), geometric-decay lemma. Sources: [K2] Thms 3-5; [Si] L18 Thm 3; [V] Teorema 1. Decision: **repaired**. Checks: all four pass. Open gaps: none.

### Level 9 — `ex-oscillation-decay-implies-a-holder-modulus` (B)

Example: $\theta=\tfrac12$ gives the Lipschitz bound with factor $2$; $\theta=2^{-1/3}$ gives exponent $\tfrac13$ with constant $2^{1/3}$; closing step now cites `lem-de-giorgi-oscillation-reduction` as declared. Decision: **repaired** (repaired citation). Checks: all four pass. Open gaps: none.

### Level 10 — `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems` (A)

Remark (owner-narrowed at Step 3a): the scalar hypotheses of $u\in H^1(\Omega;\mathbb R)$, symmetric measurable uniformly elliptic $A$ and the scalar equation are checked explicitly; Legendre-Hadamard ellipticity of a system does not verify them. Source: [V] §1 standing hypotheses. Decision: **accept**. Checks: rendercheck, strict contract; no proof body. Open gaps: none.

### Level 10 — `thm-weak-harnack-inequality-for-nonnegative-supersolutions` (A)

Claim: $R^{-n/p}\|u\|_{L^p(B_R)}\le C(\operatorname{ess\,inf}_{B_{R/2}}u+R^{2-n/q}\|F\|_{L^q(B_R)})$ for nonnegative supersolutions of $L_0u=-F$, $q>n/2$, $0<p<n/(n-2)$ ($n=2$: all finite $p$). Proof: barrier removal by the same Lax-Milgram construction, the Moser negative chain and $p_0$-comparison, and the positive-power chain. **Statement convention narrowed in the item to the doubled-ball hypothesis $B_{2R}(x_0)\Subset\Omega$**, which is the quantitative form of [K1] Thm 2 and [K2] Thm 2; the manifest's $B_R\Subset\Omega$ quantifier is not what the iteration proves. Decision: **escalate** — owner must confirm the narrowed quantifier or re-scope. Checks: all four pass. Open gaps: manifest ball quantifier; owner scope.

### Level 10 — `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory` (B)

Example: the zero class of $H^1(B_1)$ with representative $\mathbf 1_{\{0\}}$ has $\sup=1$ but $\operatorname{ess\,sup}=0$, so the estimates control essential extrema of a class; pointwise statements need the Holder representative. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 10 — `ex-measurable-coefficients-with-a-holder-regular-weak-solution` (B)

Example: the two-valued coefficient $a\in\{1,4\}$ on the annulus and the piecewise radial $u$ with continuous flux $x/|x|^2$; $u\in H^1\cap C^{0,1}$, $u\notin C^1$, consistent with the De Giorgi-Nash conclusion and showing the exponent cannot be improved to one. Decision: **accept**. Checks: all four pass (frontmatter YAML escape fixed). Open gaps: none.

### Level 11 — `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution` (A)

Claim: for a nonnegative weak solution on a connected open set, a continuous representative vanishing at a point is identically zero; the zero set is relatively clopen; the local statement for mere supersolutions continuous at a point. Proof: weak Harnack with $p=1$ on balls around the zero point, then connectedness. Decision: **repaired** (dep list repaired to declare the local-boundedness supplier cited in the facts). Checks: all four pass. Open gaps: none.

### Level 11 — `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range` (A)

Remark: the weak Harnack range $0<p<n/(n-2)$ ($n\ge3$) is part of the theorem; the Moser iteration produces a fixed $p_0$ and interpolation with the Sobolev input gives the range; no claim for arbitrary $p>0$. Source: [K1] Thm 2 exponent range. Decision: **accept**. Checks: strict contract; no proof body. Open gaps: none.

### Level 11 — `thm-harnack-inequality-for-nonnegative-weak-solutions` (A)

Claim: $\operatorname{ess\,sup}_{B_{R/2}}u\le C(\operatorname{ess\,inf}_{B_{R/2}}u+R^{2-n/q}\|F\|_{L^q(B_R)})$ for nonnegative weak solutions of $L_0u=-F$; homogeneous case $F=0$ is the Harnack inequality. Proof: local boundedness with $p=p_0$ plus the weak Harnack inequality on the same ball. **Statement convention narrowed in the item to the doubled-ball hypothesis $B_{2R}(x_0)\Subset\Omega$**, inherited from the weak Harnack supplier. Decision: **escalate** — owner must confirm or re-scope. Checks: all four pass. Open gaps: ball quantifier; owner scope.

### Level 12 — `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds` (A)

Claim: for compact connected $K\Subset\Omega$ there are finitely many balls with $\cup B_{R_j/2}\supseteq K$ and $\operatorname{ess\,sup}_Ku\le C(\operatorname{ess\,inf}_Ku+\sum R_j^{2-n/q}\|F\|_{L^q(B_{R_j})})$. Proof: compact cover, polygonal connectedness, Harnack propagation along overlapping half-balls. Decision: **repaired** (deps repaired: compactness cited to `thm-heine-borel-rn`; the local-boundedness supplier declared). Checks: all four pass. Open gaps: the inherited ball convention of the Harnack supplier.

### Level 12 — `cex-harnack-estimate-needs-an-additive-forcing-term` (B)

Refuted: a forcing-free Harnack comparison for $Lu=f$. Witness: $u=|x|^2/(2n)$, $f=-1$ on $B_1$, $-\Delta u=f$, $\inf_{B_{1/2}}u=0<1/(8n)=\sup_{B_{1/2}}u$. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 12 — `cex-harnack-requires-nonnegativity` (B)

Refuted: a Harnack comparison for all weak harmonic functions. Witness: $u=x_1$ on $B_1\subset\mathbb R^2$ with $\sup_{B_{1/2}}=\tfrac12>-\tfrac12=\inf_{B_{1/2}}$. Decision: **accept**. Checks: all four pass. Open gaps: none.

### Level 13 — `cor-strong-maximum-principle-for-weak-elliptic-solutions` (A)

Claim: a nonnegative weak solution on a connected open set is either zero a.e. or positive a.e., and its Holder representative has no interior zero unless it vanishes identically. Proof: dichotomy via the zero-set propagation lemma. Decision: **repaired** (dep list repaired). Checks: all four pass. Open gaps: none.

### Level 13 — `cex-global-harnack-comparison-needs-connectedness` (B)

Refuted: $\sup_\Omega u\le C\inf_\Omega u$ on every open set. Witness: $\Omega=B_1(0)\cup B_1(3e_1)$, $u=0$ resp. $1$ on the components; a locally constant nonnegative weak solution with $\sup=1$, $\inf=0$. Decision: **repaired** (repaired: the reference to a published examples-page item was replaced by prose so that no authored dependency reaches a B page). Checks: all four pass. Open gaps: none.

### Level 14 — `cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets` (B)

Refuted: the strong maximum principle for positive-semidefinite (not uniformly elliptic) coefficients. Witness: $a^{11}=1$, other entries $0$ on $B_1\subset\mathbb R^2$, $u=|x_2|$: $D_1u=0$ a.e., $\int a^{11}D_1uD_1v=0$ for all $v\in H^1_0$, zero set an interior line. Decision: **accept** (owner-repaired statement from Step 3a). Checks: all four pass. Open gaps: none.

## Completed IDs

All 31 owned items and both pages are authored and on disk:

- A page `weak-elliptic-maximum-principles-and-holder-regularity` (22 items): `lem-geometric-oscillation-decay-implies-a-holder-modulus`, `lem-nonlinear-geometric-iteration-sequence-converges-to-zero`, `def-weak-subsolution-and-supersolution-of-a-divergence-form-equation`, `lem-positive-part-is-an-admissible-weak-test-by-truncation`, `lem-caccioppoli-inequality-for-truncated-subsolutions`, `lem-positive-part-of-a-zero-trace-function-has-zero-trace`, `lem-sobolev-level-set-iteration-step`, `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions`, `thm-weak-maximum-principle-for-coercive-divergence-form-equations`, `cor-weak-comparison-and-uniqueness`, `lem-de-giorgi-oscillation-reduction`, `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions`, `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term`, `lem-moser-iteration-for-positive-supersolutions`, `thm-de-giorgi-nash-interior-holder-regularity`, `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems`, `thm-weak-harnack-inequality-for-nonnegative-supersolutions`, `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range`, `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution`, `thm-harnack-inequality-for-nonnegative-weak-solutions`, `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds`, `cor-strong-maximum-principle-for-weak-elliptic-solutions`.
- B page `weak-elliptic-maximum-principles-and-holder-regularity-examples` (9 items): `cex-weak-maximum-principle-needs-the-zero-order-sign`, `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions`, `ex-oscillation-decay-implies-a-holder-modulus`, `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory`, `ex-measurable-coefficients-with-a-holder-regular-weak-solution`, `cex-harnack-requires-nonnegativity`, `cex-harnack-estimate-needs-an-additive-forcing-term`, `cex-global-harnack-comparison-needs-connectedness`, `cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets`.
- Pages: `library/pde/weak-elliptic-maximum-principles-and-holder-regularity.md` and `...-examples.md` (frontmatter `page/title/status: draft/items/examples`, 22 resp. 9 ids).
- Contracts: `research/frontier-39-analysis-30-batch-14.proof-contracts.json` (scope = all 31 ids, 113 numbered steps, citations with exact quotes, eight boundary worksheets per item).
- Decisions: `research/frontier-39-analysis-30-step3b-review-<id>.json` for all 31 ids (25 `accept`/`repaired` at confidence 1; 3 `escalate`: A7, the weak Harnack theorem and the Harnack theorem).
- Coverage: the two items named by the Step 3a bookkeeping now have `included` rows in `research/frontier-39-analysis-30-batch-14.coverage.json` (69 harvested results, 0 errors, `--require-destination`).

## Checks actually run (results)

- `node tools/proof-layout.mjs` over all 33 changed paths in one command: **0 defects** (33 items, 113 steps).
- `node tools/tsx-run.mjs tools/precheck.mts <31 items + 2 pages>`: 28 items checked, **0 failing** (3 definitions/remarks have no phase body and are reported not-applicable by the checker).
- `node tools/rendercheck.mjs <31 items + 2 pages>`: **OK** — no wikilink inside math, no nested/unbalanced delimiters, no multiline display blocks, every math span parses under KaTeX, every frontmatter parses under the renderer YAML parser (one YAML escape defect in `ex-measurable-coefficients-...` was found and fixed).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-14.pages.json`: **31 scoped items, 0 errors, 0 warnings**. (`--manifest-only` now reports `batch-item-already-exists` for all 31 ids, which is the expected outcome of that pre-authoring scoping mode once the items exist on disk.)
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-14.proof-contracts.json --strict`: **0 errors, 0 warnings, 31/31 items checked**.
- `node tools/depcheck.mjs`: **0 findings for any of the 31 owned items** (after adding `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions` to three dependency lists and removing a B-page dependency from `cex-global-harnack-comparison-needs-connectedness`). The repo-wide run still FAILs on other batches' items (`b-leaf-content`, `published-unaudited` and `page-item-missing` findings listed below as published concerns); none of them is on this pair.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`: **no error for any of the 31 owned items**; the run exits 1 with 9 level mismatches confined to the Hone/BMO-duality batches of the sibling group, plus the known empty-inventory cases for batches not yet authored.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .`: **OK** — declared page order acyclic and consistent, no item-level cycles, forward references, B-page dependencies or unresolved ids among the pages with item lists (257 still-empty planned pages noted by the tool).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`: refreshed and deduplicated.
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope`: this pair is closed (owner `proceed` receipt `cf018f2e…` matches the unmodified manifest).
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`: **no work item for any of the 31 owned ids** (517 of 927 items accepted run-wide; the remaining 413 belong to other pairs).

## Added suppliers

- `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one` (batch 4) is now a declared and cited supplier of `lem-sobolev-level-set-iteration-step` and of A7, supplying the $W^{1,1}_0$ endpoint inequality directly.
- `thm-poincare-inequality-for-w-one-p-zero`, `lem-elliptic-form-is-well-defined-and-bounded`, `def-local-weak-solution-for-a-divergence-form-operator`, `def-weak-dirichlet-solution-for-a-divergence-form-operator`, `def-sobolev-conjugate-exponent`, `thm-heine-borel-rn`, `def-complete-metric-space` and `thm-uniformly-continuous-extension-from-dense` are declared where the authored proofs consume them.
- Materials appearing during the session and now cited: `cor-sobolev-inequality-for-w-one-p-zero` (created by the batch-4 group at 08:23) and `thm-critical-sobolev-embedding-into-every-finite-lq` (created at 08:24); the strict contract check passes with them in place.

## Published concerns

- **Confirmed defect (own pair, escalated):** the manifested weak sign condition of A7 displays $\int(c\zeta-b^iD_i\zeta)\ge0$ where the library convention needs $\int(c\zeta+b^iD_i\zeta)\ge0$; the manifested form is refuted by the radial eigenfunction on $B_\pi\subset\mathbb R^3$ with $b=0$, $c=-1$ (which satisfies $\int(c\zeta-b^iD_i\zeta)=0$ while violating the conclusion) and the proof's $k$-term requires the plus sign. The item is authored with the corrected condition; the manifest and the owner scope receipt must be amended. Confidence 1.
- **Confirmed convention narrowing (own pair, escalated):** the manifested ball quantifier "for every $B_R(x_0)\Subset\Omega$" of the weak Harnack and Harnack theorems is stronger than the quantitative form the Moser machinery proves; the items record the standard doubled-ball hypothesis $B_{{2R}}(x_0)\Subset\Omega$ used by [K1] Thm 2 and [K2] Thm 2. Confidence 1 that the doubled-ball form is what the cited proofs give; the owner must confirm the narrowing (or supply a proof of the wider quantifier).
- **Suspicion (own pair, low materiality):** the $n=2$ clause of `lem-sobolev-level-set-iteration-step` is stated in the manifest as "any exponent $\delta>0$"; the proof produces $\delta=1-2/\kappa\in(0,1)$ and the item records that range. The wider range is not derivable from the cited embedding and may be false for $\delta\ge1$; the owner should tighten the manifest wording at the same time as the A7 amendment.
- **Unrelated published debt (not owned, no action taken):** the repo-wide `depcheck` run reports `b-leaf-content` findings for several other frontiers' items (e.g. `thm-rankine-hugoniot-jump-condition` depends on `ex-smooth-compactly-supported-bump` on a B page), `published-unaudited` items in other frontiers, and `page-item-missing` for `library/pde/interior-and-boundary-sobolev-elliptic-regularity.md` listing `lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates`. These do not touch this pair.
- **Sibling in-run dependency (resolved during the session):** `cor-sobolev-inequality-for-w-one-p-zero` and `thm-critical-sobolev-embedding-into-every-finite-lq` were missing at entry and are now authored by the batch-4 group; the consumers (`lem-sobolev-level-set-iteration-step`, A7, the local-boundedness, Moser, weak-Harnack and Harnack items) are authored against them and their proof uses are reconciled in the contract file. No consumer decision remains escalated for a missing supplier.

## Open obligations and next action

1. Owner: amend the A7 manifest statement (sign of $b$ in the weak sign condition) and re-close the pair scope, then resolve the A7 escalation; optionally tighten the $n=2$ $\delta$-range wording of `lem-sobolev-level-set-iteration-step` in the same pass.
2. Owner: confirm the doubled-ball hypothesis recorded in `thm-weak-harnack-inequality-for-nonnegative-supersolutions` and `thm-harnack-inequality-for-nonnegative-weak-solutions` (the manifest quantifier $B_R\Subset\Omega$ is not what the Moser iteration proves) and resolve the two escalations.
3. Step 4 / serial reconciler: the shared plan/prose amendments are (i) the sign convention of the weak maximum principle and (ii) the ball quantifier of the weak Harnack/Harnack pair; the design prose and the additions table should follow.
4. Independent audit (Steps 5-8): the following authored steps are the ones where compression was used and where a solver should look first — the corrected A7 steps 2.1/3.1, the level-set step of `lem-sobolev-level-set-iteration-step` (δ-range), the Moser chains (6)-(13) and the exponential-series step of `lem-moser-iteration-for-positive-supersolutions`, the ball bookkeeping of the weak Harnack/Harnack pair, and the barrier-plus-rescaling argument of `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term`.
5. After the owner's scope amendment, re-run the batch checks and re-record the affected item decisions; nothing else in the pair is open.

## Post-check addendum (this session)

- **Item decisions re-recorded after in-run supplier churn (two passes, 28 + 21 items).** The batch-4 sibling group authored `cor-sobolev-inequality-for-w-one-p-zero` and `thm-critical-sobolev-embedding-into-every-finite-lq` (and other Sobolev items) while this pair was being authored. Because an item decision hashes the item's *transitive* dependency closure, the appearance of those files invalidated 28 recorded decisions; all 28 were re-recorded (`repaired`, confidence 1) with the examined dependency lists. The three escalated items (`thm-weak-maximum-principle-for-coercive-divergence-form-equations`, `thm-weak-harnack-inequality-for-nonnegative-supersolutions`, `thm-harnack-inequality-for-nonnegative-weak-solutions`) cannot be re-recorded by the author by design: only the owner can resolve an escalation.
- **Proof contracts regenerated** after the last item edit (removal of the B-page link from the connectedness counterexample); `node tools/proof-contract.mjs ... --strict` returns **0 errors, 0 warnings, 31/31 items**. The contract file must be regenerated again if any item is later edited.
- **Machine-readable summary of the state is not guaranteed to be closed for the two sibling-dependent items** while other groups keep authoring inside this pair's transitive closure; the engine's serial reconciliation and the owner scope amendment should re-run `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final` after those edits stop. Nothing in this pair is open except the three owner escalations and the two manifest amendments recorded above.
