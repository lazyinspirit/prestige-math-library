# Step 3b authoring record — hochschild-homology-and-triply-graded-link-homology

- Run `frontier-40-geometry-braids-rep-27`, batch 11, role `alpha-high`, label
  `step3b-pair-hochschild-homology-and-triply-graded-link-homology-3e1ffa229d02f5b9`
  (earlier dispatch of the same pair: `…-82d098e2e150c001`; both wrote this
  report).
- A page `hochschild-homology-and-triply-graded-link-homology` (order 765,
  category `braid-groups`, 13 items). B page
  `hochschild-homology-and-triply-graded-link-homology-examples` (order 766,
  4 examples). Own only this pair; the batch-11 manifest, coverage, notes and
  cross-batch input are otherwise untouched except for my own rows.

## Owned item IDs (authoring order, ascending dependency level)

| level | item | page |
|---|---|---|
| 0 | `def-reduced-type-a-polynomial-ring-for-hhh` | A |
| 1 | `def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor` | A |
| 3 | `lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex` | A |
| 4 | `lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence` | A |
| 5 | `lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex` | A |
| 6 | `def-khovanovs-hhh-rouquier-generator-complexes` | A |
| 7 | `def-reduced-khovanov-rozansky-homology` | A |
| 7 | `def-termwise-hochschild-homology-complex-of-a-rouquier-complex` | A |
| 8 | `lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule` | A |
| 8 | `ex-hochschild-homology-of-the-rank-one-soergel-bimodule` | B |
| 8 | `ex-termwise-and-total-hochschild-theories-have-different-grading-outputs` | B |
| 9 | `lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings` | A |
| 9 | `ex-hhh-of-the-positive-two-strand-torus-knot` | B |
| 10 | `thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology` | A |
| 11 | `cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift` | A |
| 11 | `ex-the-trivial-one-braid-hhh-grading-normalization` | B |
| 12 | `cor-the-graded-euler-characteristic-of-hhh-is-homflypt` | A |

## Entry state and open obligations

- Scaffold audit at entry: 17/17 items present in the batch-11 manifest with
  statements, proof strategies and dependency levels 0–12; all declared dep
  edges resolve in the whole-run manifests (`manifest-deps` clean); the
  pair scope decision is `sufficient` (Step 3a record on disk).
- **Open obligation 1 (in-run suppliers not yet authored).** At entry the
  batch-9 pair `rouquier-complexes-and-categorical-braid-relations` and the
  batch-10 pair `matrix-factorizations-and-khovanov-rozansky-link-homology`
  have scaffolded items but no `items/*.md` files. Exact supplier IDs and the
  consuming steps that need them:
  - `def-khovanovs-hhh-rouquier-generator-complexes`: consumes
    `def-positive-and-negative-rouquier-generator-complexes`,
    `def-rouquier-complex-of-a-braid-word`,
    `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence`
    (normalization comparison);
  - `def-reduced-khovanov-rozansky-homology`, `thm-hhh-is-isomorphic-…`: consume
    `def-khovanov-rozansky-complex-and-trigraded-braid-homology`;
  - `lem-setting-a-to-zero-…`: consumes `def-factorization-of-a-marked-moy-graph`,
    `def-arc-and-wide-edge-khovanov-rozansky-factorizations`,
    `def-bigraded-matrix-factorization-with-potential`;
  - `lem-the-koszul-hochschild-comparison-…`: consumes
    `def-chi-zero-and-chi-one-wide-edge-morphisms`,
    `def-positive-and-negative-khovanov-rozansky-crossing-complexes`;
  - `cor-hhh-is-an-oriented-link-invariant-…`: consumes
    `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift`;
  - `cor-the-graded-euler-characteristic-…`: consumes
    `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`,
    `def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series`.
  Consumers are authored anyway; their decisions stay `escalate` until the
  supplier items exist and the actual proof use is reconciled. **Resolved:**
  all named suppliers were authored during this run, every actual proof use is
  verified in the batch-11 cross-batch input, and all 17 decisions are
  recorded (`accept`/`repaired`); see "Repairs and reconciliations" and the
  Handoff.
- **Open obligation 2 (load-bearing checks carried from Step 3a/1).**
  1. trigrading constants `a=-h`, `q=p-h`, `t=c` and the global `(1,-1,0)`
     correction, anchored by the unknot and `(2,n)` normalizations;
  2. trivial-factor bookkeeping: the source's `Q[x_1]` form used in the
     corrected `s_i`-equivariant form, and the explicit splitting of the
     `a=0` doubling in `lem-a-closed-moy-…`;
  3. generator-complex normalization comparison `F(σ_i)=F_i^{-1}{1}`,
     `F(σ_i^{-1})=F_i{-1}` with the balanced-root sign and unit `2`;
  4. the corrected negative crossing (`χ_1`-cone);
  5. batch-10 draft shift-sign inconsistency recorded in the batch-11 notes
     §3.3 (supplier-side; not blocking this pair).
- **Open obligation 3.** `def-reduced-khovanov-rozansky-homology` wording: keep
  the coefficient `a` in the reduced ring (KR II printed p. 12) and record the
  trivial variable explicitly.

## Checkpoint log

Conventions shared by the whole pair (used in every entry below): the reduced
ring $R=\mathbb Q[y_2,\dots,y_m]$ with $y_j=x_j-x_1$ (for $m=2$,
$R=\mathbb Q[y]$, $y=x_1-x_2$) and $B_i=R\otimes_{R^{s_i}}R$; the raw reduced
Khovanov-Rozansky class of the one-strand unknot is $(-1,1,0)$; the global
correction is $(k,l)\mapsto(k+1,l-1)$; the dictionary is $k=-h$, $l=p-h$,
$j=c$, i.e. $a=-h$, $q=p-h$, $t=c$; generator-complex normalization
$F(\sigma_i)\cong F_i^{-1}\{1\}$, $F(\sigma_i^{-1})\cong F_i\{-1\}$,
$B_i^{\mathrm{lib}}=B_i\{-1\}$, $\varepsilon_i=(-1)^{i-1}$,
$\eta_i(1)=\alpha_i\otimes1+1\otimes\alpha_i$, $\alpha_i=\varepsilon_iy_i$,
$br_srb_s=2y_s$; primary sources: Khovanov arXiv:math/0510265v3 (printed
pp. 3-10, 15-16), Khovanov-Rozansky II arXiv:math/0505056v2 (section 1,
pp. 1-12; section 7), GKS IHES notes (printed pp. 537-550), BPW
arXiv:1605.03523v2 §3.8.6, Rouquier arXiv:math/0409593 §3.

**A1. `def-reduced-type-a-polynomial-ring-for-hhh`** (level 0). Claim: the
reduced ring of consecutive differences with the $s_i$-action, invariant
coordinate $t_i=x_i+x_{i+1}$, rank-two freeness $R'=R[t_i]$, the
decomposition $R=R^{s_i}\oplus y_iR^{s_i}$ using $2$ invertible, and the
dictionary with the published shifted generator. Sources: Khovanov printed
pp. 3-4; Soergel 1992. Deps: published type-$A$ items only. Decision:
`accept` (2026-10-04T15:16:52Z, hash current). Checks: proof-layout 0 defects;
precheck n/a; rendercheck clean; contract strict clean; 8 boundary rows.
Open gaps: none. Next: Step 5 audit.

**A2. `def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor`**
(level 1). Claim: $B'_i=B_i\otimes_{\mathbb Q}\mathbb Q[t_i]$ with the
corrected $s_i$-equivariant form of the source's $x_1$-factor
($t_i=x_i+x_{i+1}$; the source's $x_1$ phrasing is valid for $i\ge2$ only),
$rb_i,br_i$ induced, $HH(R',M\otimes\mathbb Q[t])\cong HH(R,M)\otimes\mathbb Q[t]
\oplus$ shift. Sources: Khovanov pp. 3-5; Elias-Makisumi-Thiel-Williamson
ch. 21. Deps: published plus A1. Decision: `repaired`
(15:16:54Z). Checks as above. Open gaps: none. Next: Step 5 audit.

**A3. `lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex`**
(level 3). Claim: for a closed marked MOY resolution $D$, $C(D)|_{a=0}$ is the
folding of the Koszul complex $K(D)$ of the $(r+1)m$ relations
$\beta_i,\gamma_i,x_{i,j}-x_{i-1,j}$ and the closure differences, with the
shifts $(-1,1)$/$(-1,3)$ and all differentials of bidegree $(1,1)$ in the
library convention $(M\{r_1,r_2\})_{(k,l)}=M_{(k-r_1,l-r_2)}$. Sources:
Khovanov pp. 7-8 ("Sketch of proof"); KR II section 1 formulas (2)-(4).
Deps: A2 plus batch-10 `def-factorization-of-a-marked-moy-graph`,
`def-arc-and-wide-edge-khovanov-rozansky-factorizations`,
`def-bigraded-matrix-factorization-with-potential` and published Koszul
items. Decision: `repaired` (15:16:59Z). Checks: proof-layout 0; precheck
pass; contract strict; boundary rows. Open gaps: the batch-10 shift-sign
display caveat (see handoff). Next: Step 5 audit.

**A4. `lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence`**
(level 4). Claim: the layer relations form a regular sequence with quotient
$B'(D)$ and the remaining closure differences act as the diagonal elements;
the layer Koszul complex is a free resolution of $B'(D)$. Source: Khovanov
pp. 7-8; published regular-sequence items. Deps: A3-adjacent layer bookkeeping
plus published regular-sequence/Koszul items. Decision: `repaired`
(15:17:00Z). Checks: proof-layout 0; precheck pass. Open gaps: none. Next:
Step 5 audit.

**A5. `lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex`**
(level 5). Claim (AC here): after deleting the first-layer resolution the
remaining closure relations form the diagonal Koszul complex of $B'(D)$; the
`u_t=0` splitting separates the trivial coordinate, and the reduced summand is
$HH(R,B(D))$. Sources: Khovanov pp. 7-8; Weibel §9.1.3. Deps: A4 plus the
published `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex`
and `def-axiom-of-choice`. Decision: `repaired` (15:17:02Z). Checks:
proof-layout 0; precheck pass. Open gaps: none. AC recorded and propagated
(see handoff). Next: Step 5 audit.

**A6. `lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule`**
(level 8). Claim (AC): $HH_h(R',B'(D))\cong H_h(K(D))$; with $y_j=x_j-x_1$,
$u_t=0$ on $B'(D)$ and
$HH_h(R',B'(D))\cong(HH_h(R,B(D))\oplus HH_{h-1}(R,B(D)))\otimes\mathbb Q[t]$;
deleting $\mathbb Q[t]$ leaves the resolution-$D$ contribution $HH(R,B(D))$ to
$\overline H(D)$. Sources: Khovanov pp. 7-9; KR II end of section 1. Deps: A5,
A2, and batch-10 `def-khovanov-rozansky-complex-and-trigraded-braid-homology`
used in step 5.1 ([L5]). Decision: `repaired` (15:31:06Z after upstream
inputs changed; earlier 15:17:03Z). Checks: proof-layout 0; precheck pass;
contract strict; supplier rows verified in the batch-11 cross-batch input.
Open gaps: none. Next: Step 5 audit.

**A7. `def-khovanovs-hhh-rouquier-generator-complexes`** (level 6).
Claim/conventions: $br_i$, $rb_i$; $F(\sigma_i)=[R\{2\}\to B_i]$,
$F(\sigma_i^{-1})=[B_i\{-2\}\to R\{-2\}]$ with the $B$-term in degree 0;
tensor totalization over the word; normalization comparison with the library's
shifted generator complexes as in the shared conventions above. Sources:
Khovanov pp. 4-5; Rouquier §3.2-3.3. Deps: A1, A2, batch-9
`def-positive-and-negative-rouquier-generator-complexes`,
`def-rouquier-complex-of-a-braid-word`,
`thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence`,
published tensor-totalization item. Decision: `repaired` (15:31:03Z; earlier
15:16:55Z). Checks: proof-layout 0; precheck pass; contract strict; the three
batch-9 supplier rows verified (steps 2.1 and 3.1). Open gaps: none. Next:
Step 5 audit.

**A8. `def-reduced-khovanov-rozansky-homology`** (level 7). Claim: the reduced
groups are obtained by rerunning the KR construction over
$\mathbb Q[a,x_2-x_1,\dots,x_m-x_1]$ with $a$ retained,
$H(D)\cong\overline H(D)\otimes_{\mathbb Q}\mathbb Q[x]$, reduced unknot
one-dimensional in raw tridegree $(-1,1,0)$, corrected to $(0,0,0)$. Sources:
KR II end of section 1 (pp. 11-12); Khovanov pp. 7-9. Deps: batch-10
`def-khovanov-rozansky-complex-and-trigraded-braid-homology` (supplier row
verified). Decision: `accept` (15:35:05Z after the fwdcheck repair; earlier
15:16:58Z). Checks: proof-layout 0; rendercheck clean (Remarks section parses);
fwdcheck no longer names the item. Open gaps: none. Next: Step 5 audit.

**A9. `def-termwise-hochschild-homology-complex-of-a-rouquier-complex`**
(level 7). Claim: the termwise Hochschild complex
$(HH_h(R,F(\sigma)^\bullet),HH_h(R,d^\bullet))$ and
$HHH^{j,h,d}=H^j(HH_h(R,F(\sigma)^\bullet))_d$ — Khovanov's construction is
the cohomology of this termwise complex (BPW (3.44) componentwise form), *not*
the total hyperhomology abutment. Sources: Khovanov pp. 5-7; BPW §3.8.6.
Deps: A7 plus published Hochschild/spectral-sequence items. Decision:
`repaired` (15:35:06Z after the fwdcheck repair; earlier 15:31:05Z and
15:16:56Z). Checks: proof-layout 0; precheck pass; fwdcheck no longer names the
item. Open gaps: none. Next: Step 5 audit.

**A10. `lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings`**
(level 9). Claim: (a) the maps induced by $\chi_0,\chi_1$ on the reduced
summands are $rb_s$ and $br_s$ up to nonzero rational units (the factor $2$ in
$br_srb_s=2y_s$ and the sign of the balanced root), so the local complexes
match $F(\sigma_s)$, $F(\sigma_s^{-1})$ with matching shifts; (b) after
$(k,l)\mapsto(k+1,l-1)$, $k=-h$, $l=p-h$, $j=c$. Sources: Khovanov pp. 8-10;
KR II section 1 formulas (5)-(6), (12)-(13). Deps: A6, A7, A8, A3, A4, batch-10
`def-chi-zero-and-chi-one-wide-edge-morphisms`,
`def-positive-and-negative-khovanov-rozansky-crossing-complexes`,
`def-khovanov-rozansky-complex-and-trigraded-braid-homology`, batch-9
`def-positive-and-negative-rouquier-generator-complexes`. Decision: `accept`
(15:31:11Z; earlier 15:17:05Z). Checks: proof-layout 0; precheck pass; all
four supplier rows verified (steps 2.1, 3.1, 4.2, 5.1). Open gaps: none. Next:
Step 5 audit.

**A11. `thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology`**
(level 10). Claim (AC inherited through A5): $HHH^{c,h,p}(\sigma)\cong
\overline H^{j,k,l}(\widehat\sigma)$ under the dictionary of A10, reduced
theories only, trigrading-preserving after the global correction. Sources:
Khovanov Theorem 1 and proof (pp. 6-10); KR II end of section 1; BPW (3.44).
Deps: A9, A10, A6, A8, A2, A7, batch-10 crossing-complex item. Decision:
`accept` (15:31:14Z; earlier 15:17:06Z). Checks: proof-layout 0; precheck pass;
supplier rows verified (steps 1.1-4.1). Open gaps: none. Next: Step 5 audit.

**A12. `cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift`**
(level 11). Claim (AC): for ambient-isotopic closures there is a trigrading
shift with $c_0=j_0$, $h_0=-k_0$, $p_0=l_0-k_0$; the type IA stabilization
contributes $\{1,1\}[1]$, i.e. $(-1,0,1)$ in $(h,p,c)$, and type IB none.
Sources: Khovanov Theorem 1; KR II Theorem 1/2; GKS section 3. Deps: A11,
batch-10 `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift`
(row verified, step 1.1/3.1), published Markov items, `def-axiom-of-choice`.
Decision: `accept` (15:31:16Z; earlier 15:17:08Z). Checks: proof-layout 0;
precheck pass. Open gaps: none. Next: Step 5 audit.

**A13. `cor-the-graded-euler-characteristic-of-hhh-is-homflypt`** (level 12).
Claim: with $\langle HHH(\sigma)\rangle=\sum(-1)^ct^{-h}q^{p-h}\dim HHH$ (sign
on the cohomological/Rouquier degree only),
$E(\sigma)=(tq^{-1}(1-q^2))^{-1}\sqrt\alpha^{|D|_+-|D|_--s(D)+1}\langle HHH\rangle
=\widetilde F(\widehat D)$, the v2 series with one-strand value
$\alpha/(1-q^{-2})=t^{-1}q/(1-q^2)$; equivalently $\langle HHH\rangle=
tq^{-1}(1-q^2)\sqrt\alpha^{s(D)-1-|D|_++|D|_-}\widetilde F$. Sources: Khovanov
paragraph after Theorem 1 (printed p. 7); KR II Theorem 2 and section 7.
Deps: A11, batch-10 categorification theorem (parts (1)-(2) only) and
normalized-series item (rows verified, steps 1.1-4.1), A8, batch-10 trigraded
complex item, `def-axiom-of-choice`. Repaired in this pass (sign $(-1)^c$
instead of $(-1)^{c+h}$; one-strand check $t^{-1}q/(1-q^2)$ instead of the
arithmetically wrong "=1"; caveat no longer claims
$\widetilde F=\delta^{-1}F$). Decision: `accept` (15:31:19Z; earlier
15:17:10Z). Checks after repair: proof-layout 0 defects; precheck pass;
rendercheck clean; contract strict 0 errors (contract regenerated); boundary
row "one" updated. Open gaps: none for the proven identity; the supplier's
part (3) remains owner-held (see handoff). Next: Step 5 audit; owner decision
if the multiplicative $F$ normalization is wanted as well.

**B1. `ex-hochschild-homology-of-the-rank-one-soergel-bimodule`** (level 8).
Claim (AC through the diagonal Koszul theorem): for $m=2$,
$HH_0(R,B_1)=R$ (class of $1\otimes1$, degree $0$),
$HH_1(R,B_1)=R\{4\}$ (class of $(y\otimes1+1\otimes y)\theta$, symbol degree
$2$) and $HH_h=0$ for $h\ge2$; the matrix of the Koszul differential is
$\left(\begin{smallmatrix}y&-y^2\\-1&y\end{smallmatrix}\right)$. Source:
Khovanov $m=2$ example, printed pp. 15-16 (the $HH_0/HH_1$ complexes there).
Deps: A1, A7, A9, published diagonal Koszul items, `def-axiom-of-choice`.
Decision: `repaired` (15:31:08Z; earlier 15:17:11Z). Checks: proof-layout 0;
precheck pass; contract strict; the values $HH_0(R,R)=R$, $HH_1(R,R)=R\{2\}$
for the unit used by the $(2,n)$ example are the $m=1$ companion recorded in
B2/[L4] there. Open gaps: none. Next: Step 5 audit.

**B2. `ex-hhh-of-the-positive-two-strand-torus-knot`** (level 9). Claim (AC
through the diagonal Koszul theorem): for $\sigma=\sigma_1^n$ with $n$ odd the
termwise complexes in Hochschild degrees $0,1$ are
$R\{2n\}\xrightarrow{2y}R\{2n-2\}\xrightarrow{0}\cdots$ and
$R\{2n+2\}\xrightarrow{1}R\{2n+2\}\xrightarrow{0}R\{2n\}\xrightarrow{2y}\cdots$,
with cohomology classes $(p,c)=(2n-2,1),(2n-6,3),\dots,(0,n)$ in $h=0$ and
$(2n-2,3),(2n-6,5),\dots,(4,n)$ in $h=1$, total rank $n$ — matching Khovanov's
printed p. 16 (rank $n$ for $T(2,n)$, previously computed by Rasmussen). Deps:
A1, A7, A9, B1, published diagonal Koszul items, published rank-one splitting
lemma. Decision: `accept` (15:31:12Z; earlier 15:17:13Z). Checks: proof-layout
0; precheck pass; source re-read (extracted text of arXiv:math/0510265v3,
pp. 15-16) confirming both complexes and both lists. Open gap (scope caveat):
the example is stated for odd $n$ (torus *knot*); the even-$n$ two-component
link endpoint is parity-dependent and is not asserted (see handoff). Next:
Step 5 audit; owner decision only if the full link case is required.

**B3. `ex-the-trivial-one-braid-hhh-grading-normalization`** (level 11).
Claim: for the trivial one-strand braid $R=\mathbb Q$, $F(\sigma_*)=\mathbb Q$
in degree $0$, so $HHH(\sigma_*)=\mathbb Q$ in $(h,p,c)=(0,0,0)$; the reduced
KR unknot class sits in raw tridegree $(-1,1,0)$ and the global correction
$(k,l)\mapsto(k+1,l-1)$ plus $k=-h$, $l=p-h$, $j=c$ sends it to $(0,0,0)$:
both one-strand classes agree and this fixes the global constant of the
dictionary. Sources: Khovanov pp. 9-10 (the $(-1,1,0)$ shift); KR II end of
section 1. Deps: A11, A8, A7, A9, A10, published Hochschild items. Decision:
`accept` (15:31:17Z; earlier 15:17:15Z). Checks: proof-layout 0; precheck
pass. Open gaps: none. Next: Step 5 audit.

**B4. `ex-termwise-and-total-hochschild-theories-have-different-grading-outputs`**
(level 8). Claim (AC through the diagonal Koszul theorem): for
$F=\mathbb Q[x]\xrightarrow{0}\mathbb Q[x]$ (degrees $0,1$), the termwise
output has the four labels $(c,h,p)=(0,0,0),(1,0,0),(0,1,2),(1,1,2)$ with
value $R=\mathbb Q[x],\ \deg x=2$, while the total hyperhomology is $R\{2\}$ in
total degree $-1$, $R\oplus R\{2\}$ in $0$, $R$ in $1$ — the termwise theory
keeps the finest $(c,h)$ trigrading, the hyperhomology retains only $n=c-h$
with its filtration. Sources: BPW §3.8.6 eq. (3.44); Khovanov pp. 6-7.
Deps: published termwise/hyperhomology items, diagonal Koszul items,
`def-axiom-of-choice`. Decision: `accept` (15:31:09Z; earlier 15:17:16Z).
Checks: proof-layout 0; precheck pass. Open gaps: none. Next: Step 5 audit.

## Repairs and reconciliations after the first dispatch

1. **Corollary normalization repair (A13).** The first authored version
   carried three related errors: the weight was $(-1)^{c+h}$ where the source
   dictionary gives $(-1)^c$ (the KR weight is $(-1)^jt^kq^l$ with $j=c$,
   $k=-h$, $l=p-h$, so the Hochschild degree enters only through grading
   shifts); $\widetilde F$ was described as having one-strand value $1$ (its
   value is $\alpha/(1-q^{-2})=t^{-1}q/(1-q^2)$); and step 4.1's arithmetic
   "$\ldots=1$" was wrong. Repaired: definition of $\langle HHH\rangle$,
   statement, caveat, step 1.1, step 4.1, and the "one" boundary row of the
   contract. The identity $E=\widetilde F$ (and equivalently
   $\langle HHH\rangle=tq^{-1}(1-q^2)\langle H\rangle$) is unchanged and now
   verified at the unknot ($t^{-1}q/(1-q^2)$ on both sides).
2. **fwdcheck forward references (A8, A9).** `fwdcheck --quiet` named
   `def-reduced-khovanov-rozansky-homology` and
   `def-termwise-hochschild-homology-complex-of-a-rouquier-complex`: both
   linked their later-page companion example from the definition body without
   `forward_refs`, and the first repair attempt (adding `forward_refs` alone)
   then tripped `forward-on-spine`. Final repair: the pointers were moved into
   new `## Remarks` sections and `forward_refs` declared; neither item is
   named by fwdcheck any more.
3. **Manifest dependency rows.** The batch-11 manifest rows for the 17 items
   were aligned with the item frontmatter (some scaffold rows were shorter);
   `manifest-deps` reports 17 items, 0 errors, and each row now matches the
   item's `deps`.
4. **Cross-batch input reconciliation.** All 20 declared edges whose consumer
   is on this pair (2 page rows, 18 item rows) are now `verified` in
   `research/frontier-40-geometry-braids-rep-27-batch-11.cross-batch-dependencies.json`,
   each naming the exact consumer step(s) and the supplier clause that
   satisfies it; `frontier-dependency-ledger.mjs refresh` was re-run and the
   derived ledger shows 0 orphaned reviews and no unreviewed batches, with
   every one of these 20 edges reviewed.
5. **Decision refresh.** After the later upstream edits (batch-9 lemma
   15:18Z + manifest alignment 15:21Z; batch-6 Hecke items 15:22Z) 11 receipts
   were stale; all 11 were re-recorded (accept/repaired, confidence 1, exact
   dependency lists, reasons naming the re-examined inputs), and after the
   fwdcheck repair A8 and A9 were re-recorded again. All 17 receipts now match
   their current input closures.

## Handoff

**Completed IDs (17).** A page: `def-reduced-type-a-polynomial-ring-for-hhh`,
`def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor`,
`def-khovanovs-hhh-rouquier-generator-complexes`,
`def-termwise-hochschild-homology-complex-of-a-rouquier-complex`,
`def-reduced-khovanov-rozansky-homology`,
`lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex`,
`lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence`,
`lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex`,
`lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule`,
`lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings`,
`thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology`,
`cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift`,
`cor-the-graded-euler-characteristic-of-hhh-is-homflypt`. B page:
`ex-hochschild-homology-of-the-rank-one-soergel-bimodule`,
`ex-hhh-of-the-positive-two-strand-torus-knot`,
`ex-the-trivial-one-braid-hhh-grading-normalization`,
`ex-termwise-and-total-hochschild-theories-have-different-grading-outputs`.
Both page files exist:
`library/braid-groups/hochschild-homology-and-triply-graded-link-homology.md`
and `…-examples.md`; the batch-11 manifest, proof contract (17 contracts, 97
citations, 60 derivations, 136 boundary rows), coverage (66 harvested rows)
and cross-batch input are all on disk. No new item, page or supplier id was
created by this pair; nothing outside the pair's item/page files, the batch-11
JSONs and this report was edited.

**Checks actually run (final battery, on explicit paths unless stated).**

| check | command | result |
|---|---|---|
| proof layout | `node tools/proof-layout.mjs <17 items>` | 17 items, 60 steps, **0 defects** |
| precheck (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts <17 items>` | 14 checked, **0 failing** (3 definition-only) |
| render check | `node tools/rendercheck.mjs <17 items + 2 pages>` | OK, 19 files, KaTeX/YAML clean |
| content policy | `node tools/content-policy.mjs …-batch-11.pages.json` | 17 scoped, **0 errors, 0 warnings** |
| manifest deps | `node tools/manifest-deps.mjs …-batch-11.pages.json` | 17 items, 0 normalized, **0 errors** |
| coverage | `node tools/coverage-checklist.mjs …-batch-11.coverage.json --require-destination` | 1 page, 66 harvested, **0 errors** |
| proof contracts (strict) | `node tools/proof-contract.mjs …-batch-11.proof-contracts.json --strict` | **0 errors, 0 warnings**, 17/17 |
| citation fidelity | `node tools/citation-fidelity.mjs …-batch-11.proof-contracts.json --fail-on-missing-quote` | exit 0, no missing quote, no widening |
| boundary audit | `node tools/boundary-audit.mjs …-batch-11.proof-contracts.json` | no contradicted dispositions |
| finite smoke | `node tools/finite-smoke.mjs …-batch-11.proof-contracts.json` | 0 errors, 0 obligations triggered |
| risk report | `node tools/risk-report.mjs …-batch-11.proof-contracts.json` | 0 errors, 17 routed (9 critical) — Step-5 routing signal only |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | exit 0, no error names an owned item |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run … --phase final` | 822 accepted, 73 open run-wide, **0 of them on this pair** |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run …` | refreshed; 20/20 pair edges reviewed `verified`, 0 orphaned |
| source fetch stamps | `node tools/source-fetch-check.mjs --coverage …-batch-11.coverage.json` | 4/4 fetch-verified |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (note: 257 planned pages elsewhere still lack item lists) |
| repo-wide precheck | `node tools/tsx-run.mjs tools/precheck.mts` | 19558 checked, 0 failing |
| depcheck | `node tools/depcheck.mjs --quiet` | repo-wide FAIL but **no error names an owned item** (833 published-unaudited, 183 cited-not-in-deps, 2 b-leaf-content, all elsewhere) |
| fwdcheck | `node tools/fwdcheck.mjs --quiet` | repo-wide FAIL (16 findings, e.g. batch-6 `thm-standard-basis-of-the-generic-type-a-hecke-algebra`); **none names an owned item** |
| extcheck | `node tools/extcheck.mjs` | repo-wide FAIL (41 external-unused, e.g. `cex-no-claim-of-resolution-in-positive-characteristic`); **none names an owned item** |

**Added suppliers.** None. Every consumer was reconciled against already-existing
in-run items (batch 9 Rouquier pair, batch 10 matrix-factorization pair, batch 6
Hecke-Markov pair) or published items; no local prerequisite item was needed
for this pair.

**Published concerns (for the owner; do not edit published content).**
`thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex`
(published, frontier-36) fails proof layout at step 5.2:
`node tools/proof-layout.mjs items/thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex.md`
reports `[missing-or-invalid-tags]` and `[rendered-chip-mismatch]` at
`…md:229` (2 defects). Confidence high; formatting only. This pair cites the
item's Statement (through `lem-the-remaining-closure-…`, `lem-a-closed-moy-…`,
the $(2,n)$ example and the termwise-vs-total example), never step 5.2, so the
pair is not blocked. Repair strategy (owner-held): end the step-5.2 paragraph
with valid trailing `[justifications]` before the punctuation/`∎` as the
proof-layout rule requires. Reported here, not edited.

**Open obligations (owner-held).**

1. Supplier-side display inconsistency in the batch-10 draft
   `def-bigraded-matrix-factorization-with-potential`: it displays
   `M{n_1,n_2}_{(k,l)}=M_{(k+n_1,l+n_2)}`, contradicting the library
   convention `(M{r})_d=M_{d-r}` that it cites and that its own arc/wide-edge
   items (and this pair's A3) use. Remedy: change the displayed formula to
   `M_{(k-n_1,l-n_2)}` (or restate the convention). No batch-11 proof step
   consumes the displayed formula; recorded in the batch-11 cross-batch input
   row for the supplier. Exact consumers to re-check if the sign is changed:
   none (this pair's uses are `d^2=w\cdot\mathrm{id}`, bidegree $(1,1)$ and
   $w_D=a\sum\epsilon_px_p$).
2. The batch-10 supplier
   `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`
   remains owner-held (`escalate`) for its part (3), the Hecke-Markov
   comparison and the split-union rule, which awaits reconciliation with
   `def-the-homflypt-coefficient-ring`,
   `def-homflypt-polynomial-from-the-hecke-markov-trace` and
   `thm-the-homflypt-skein-relation` (all now authored on disk; the
   split-union rule used by its [F10] is not stated in them). A13 consumes
   only parts (1)-(2) of that supplier (published $\langle D\rangle=F/(1-t^2)$
   with $F(\text{unknot})=(t^{-1}-t)/(q-q^{-1})$, and $\widetilde F$
   Markov-invariant with unknot value $\alpha/(1-q^{-2})$), so A13's `accept`
   does not depend on part (3); if the owner resolves the supplier, no
   batch-11 item needs to change.
3. Scope caveat on B2: the example is restricted to odd $n$ (the torus knot
   $T(2,n)$) because the source's even-$n$ endpoint is the two-component torus
   link and its printed endpoint is parity-dependent; the scaffold statement
   mentions the torus link $T(2,n)$ with $n\ge1$ and no parity restriction.
   The source's rank-$n$ statement (printed p. 16) is for the $(2,n)$-torus
   knot and is derived there from the same two displayed complexes. If the
   owner requires the full two-component case, author the even-$n$ computation
   from those complexes and the same rank-one input, or escalate.
4. A13 is stated and proven in the v2 normalization ($\widetilde F$; integer
   grading). The multiplicative function $F$ of the categorification theorem
   is a different normalization ($F(\text{unknot})=(t^{-1}-t)/(q-q^{-1})$);
   the statement now records this and claims no identification of the two. If
   Step 5 prefers the multiplicative normalization, that is a re-statement,
   not a gap in the proof.
5. Entry obligation 1 (unfinished in-run suppliers) is **closed**: all direct
   suppliers exist with complete proofs, and each actual proof use is verified
   in the cross-batch input. Entry obligation 2 (the five carried checks) is
   resolved in the items (trigrading constants A10/A11/B3; trivial-factor
   bookkeeping A2/A6; generator normalization A7; corrected negative crossing
   A3/A10; batch-10 shift-sign recorded in 1 above). Entry obligation 3 is
   satisfied: the coefficient $a$ is retained in A8 and the trivial variable
   is recorded explicitly.
