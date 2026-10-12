# Direct all-mode invariance for both column arrangements

Constructor proof proposal, pending lead scrutiny. This proof is independent of finite-generation/PBW independence. It supplies invariant explicit D/E/F images for the ORIGINAL left-justified pyramid AND the reflected right-justified pyramid. Together with the sibling's full weighted generation proof, it is the prerequisite G of `right-reduction-proof.md`. It does not claim mathematical acceptance or change any canonical carrier.

## Conventions

Use the BK5 shifted matrix factors

$$\widetilde E_{a,b}=(-1)^{c(b)-c(a)}(E_{a,b}+\delta_{a,b}\rho_{c(a)}),\qquad \rho_c=n-\sum_{d\ge c}q_d.$$

The character of a negative adjacent factor is `χ(tildeE_ab)=−δ_row(a),row(b)` and zero at larger negative column distance. The basic bracket, with row/box Kronecker deltas as indicated, is

$$[\widetilde E_{a,b},\widetilde E_{h,k}]=\delta_{b,h}(\widetilde E_{a,k}-\delta_{a,k}\rho_{c(a)})-\delta_{a,k}(\widetilde E_{h,b}-\delta_{h,b}\rho_{c(b)}).$$

The negative PBW projection `pr` is defined by `U(g)=U(p)U(m)`, applying χ to the right `U(m)` factor. In particular, for a negative factor Z and p-factor B, `pr(ZB)=χ(Z)B+pr([Z,B])`, whereas `pr(BZ)=Bχ(Z)`. This distinction accounts for the boundary scalar terms. The invariant condition here is `pr([x,z])=0` for all `x∈m`. It is equivalent to `[x,z]∈U(g)Iχ`. The set of such z is a subalgebra: `(x−χ(x))z=z(x−χ(x))+[x,z]` implies `U(g)Iχ·z⊂U(g)Iχ`, which proves closure under products and commutators. A left ideal alone would not prove this.

The signed paths in these factors have join sign `−1` at intermediate row at most x and `+1` at later row, with respectively weak-reverse and strict-forward column comparisons. Their degree is `Σ(c(b)−c(a)+1)`. They equal `ηtail(P_ij;x^r)` from the memoir's UNSHIFTED path formula, because the product of the factor signs is `(-1)^(r−s)`. Thus invariant shifted paths give elements of W in the ORIGINAL untwisted chart.

Group equal row lengths into the minimal admissible blocks ν; write m for the last nonempty block and t for its size. Blocks of empty rows contribute only formal diagonal constants and zero positive coefficients; their invariant claim is immediate. Within the last block all its rows are present in each column. Write D/E/F for the PARABOLIC Gauss path coefficients for this ν. Ordinary simple Drinfeld coefficients follow by further Gauss decomposition of each D block; its inverse has identity constant and every coefficient is a polynomial in earlier coefficients. Therefore invariance of the parabolic coefficients implies all ordinary D/E/F coefficients are invariant, including all modes and higher-root coefficients.

## Path cutting and the two end recursions

Delete an end column of height t. A dot means the smaller diagram. Embed its shifted matrix factors into the current shifted matrix factors. On deleting a rightmost column the smaller rho shifts differ by t, so the embedding on unshifted diagonal units is translated by the compensating scalar; on deleting the first column the remaining tail rho shifts agree, and the embedding is the ordinary box embedding. Both send every NEGATIVE unit to itself, hence preserve χ and the projected negative action.

For right deletion call the final column A and previous column B. Let `L_kj=tildeE_(A k),(A j)` and `C_hj=tildeE_(B h),(A j)`. Direct cutting at the last visit to A gives, for ANY fixed bottom row h,

$$D_{a;ij}^{(r)}=\dot D_{a;ij}^{(r)}+\delta_{a,m}\left(\sum_{k=1}^t\dot D_{a;ik}^{(r-1)}L_{kj}+[\dot D_{a;ih}^{(r-1)},C_{hj}]\right),$$

$$E_{a;ij}^{(r)}=\dot E_{a;ij}^{(r)}+\delta_{a,m-1}\left(\sum_{k=1}^t\dot E_{a;ik}^{(r-1)}L_{kj}+[\dot E_{a;ih}^{(r-1)},C_{hj}]\right),\qquad F_{a;ij}^{(r)}=\dot F_{a;ij}^{(r)}.$$

The E correction is used only for r>1 at a=m−1. These are identities IN U(p), not assertions of invariance or generation. To verify them, partition admissible paths into those missing A, those whose final factor is in A, and those crossing B→A. The first class is the dotted term. Cutting off the final A-block factor gives the sum. In the crossing class the two possible cuts at the common bottom row h have opposite join signs and the two product orders are exactly the commutator; all other visits to A pair by moving the cut to the adjacent visit. This is a bijective decomposition in each finite mode. The Gauss path-cut identities use the same sign-changing cut: paths with no intervening visit to the changed row interval occur once, while a path with a visit has its two neighboring cut positions with opposite sign. Consequently these recursions apply to the D/E/F Gauss coefficients, not arbitrary wrongly identified T modes.

For LEFT deletion call the first column A, second B, and set `L_ik=tildeE_(A i),(A k)` and `C_ih=tildeE_(A i),(B h)`. Cutting at the FIRST visit gives

$$D_{a;ij}^{(r)}=\dot D_{a;ij}^{(r)}+\delta_{a,m}\left(\sum_{k=1}^tL_{ik}\dot D_{a;kj}^{(r-1)}+[C_{ih},\dot D_{a;hj}^{(r-1)}]\right),$$

$$E_{a;ij}^{(r)}=\dot E_{a;ij}^{(r)},\qquad F_{a;ij}^{(r)}=\dot F_{a;ij}^{(r)}+\delta_{a,m-1}\left(\sum_{k=1}^tL_{ik}\dot F_{a;kj}^{(r-1)}+[C_{ih},\dot F_{a;hj}^{(r-1)}]\right).$$

The F correction is used only for r>1 at a=m−1. The argument cuts initial rather than final factors, so their product order is as displayed. In particular E is unchanged and F is corrected. The printed BK5 (10.16)–(10.17) incorrectly interchange those two statements; the recursions (10.11)–(10.13), their direct paths, and the correct baby coproduct all have the order written here.

## Induction and unchanged generators

Induct on the number of columns. For one column m=0 and every p-element is invariant; the simple positive modes reduce to coefficients of the one-column matrix and its formal Gauss factors, so every mode is covered. For more columns choose RIGHT deletion for the left-justified pyramid, LEFT deletion for the reflected right-justified pyramid. The deleted column has minimal height t in either case.

The recursions show all earlier D blocks, all E blocks except the boundary E in the RIGHT case, and all F blocks except the boundary F in the LEFT case are unchanged. Their matrix-unit path supports exclude the deleted-column boundary endpoints that could have nonzero χ. They are invariant by induction under the old negative algebra; commuting a new adjacent negative with a path factor produces a negative unit of larger column distance, whose χ and projected commutator are zero. Moving it through the subsequent factors preserves the absent forbidden endpoint, so every projected term is zero. In the right case this is the fact that unchanged monomials have no target in the previous bottom t boxes; in the left case they have no source in the next bottom t boxes. This proves invariance of all unchanged coefficients, INCLUDING the coefficients of inverse earlier D blocks.

For a changed coefficient, the old negative algebra acts trivially on the deleted-column matrix block and on the positive boundary bridge appearing in its recurrence. The dotted coefficient is invariant by induction; its error belongs to the old character ideal. Its product with these boundary factors still has zero projection: the factors commute with the old negative algebra and preserve that ideal. Thus the changed coefficients are invariant under the old m.

The full m is generated as a Lie algebra by the old m and negative matrices between the added column and its neighboring column. Indeed brackets of adjacent-column units generate all longer negative units through a row present in the intervening bottom rows. Invariance under Lie generators implies invariance under their brackets by Jacobi and the normalizer identity above. Only these new adjacent matrices remain to check.

## The first two modes when the adjacent height increases

Let u be the neighboring column height and b=u−t. The new column has only bottom rows. Take the cutoff x=n−t (all shorter rows have minus sign, bottom t rows plus sign). The degree-one changed D coefficient is the sum of the column block units over the row; the projected commutators from the two adjacent columns have equal opposite χ-values, so its projection is zero.

For the RIGHT degree-two coefficient take the new negative `z=tildeE_(A f),(B g)`, with f bottom and g ANY row in B. The single bridge term has constant `−u δ_gi δ_fj`, because `rho_A−rho_B=u`. The bottom-row plus paths `Σ_k B_ik A_kj` contribute `+t δ_gi δ_fj`, together with matrix terms `−δ_gi A_fj+δ_fj B_ig` when g is bottom. The shorter-row MINUS paths in B contribute `+b δ_gi δ_fj`, and supply `+δ_fj B_ig` when g is a shorter row. Here the scalar b is essential: in `pr(z_negative B)` the extra commutator has χ-value −1 for each of the b intervening shorter rows. The single bridge contributes the negatives of all these matrix terms. Thus the scalar total is `−u+t+b=0`, and every matrix term cancels. This proves D^(2). For the boundary E^(2), starting i is a shorter row and ending j bottom; the same computation permits g ANY row and has identical scalar `−u+t+b` and the corresponding matrix cancellation. All paths outside these adjacent columns have zero projection by their support/induction.

For the LEFT degree-two coefficient take `z=tildeE_(B f),(A g)`, with f ANY row in B and g bottom. The single bridge has scalar `−t δ_gi δ_fj`, since `rho_B−rho_A=t`. The bottom plus paths `Σ_k A_ik B_kj` contribute `+t δ_gi δ_fj`, together with matrix terms `−δ_gi B_fj` when f is bottom and `+δ_fj A_ig`. The shorter-row minus paths `−Σ_h B_ih B_hj` supply `−δ_gi B_fj` when f is shorter; they supply NO scalar. In detail, `[z,B_ih]=−δ_fh tildeE_(B i),(A g)`, whose χ is `−δ_ig`; moving this negative through `B_hj` contributes no scalar for h shorter because its row differs from g. The bridge's matrix terms are `+δ_gi B_fj−δ_fj A_ig`. Hence every matrix term cancels and the scalar is `−t+t=0`. The SAME calculation applies to boundary F^(2), whose starting row i is bottom and ending row j shorter: although f may be shorter and δ_fj nonzero, the indicated shorter-row paths still have zero scalar because their negative character involves the bottom row g and shorter h. This proves D^(2) and F^(2) without applying τ to an invariance assertion.

These degree-two checks are used exactly when the boundary shift is 1. When the neighboring height equals t (including rectangles), the two-column calculation in the next section handles all r>1 instead.

## Higher modes at a jump-one boundary

Use a fixed row g of the preceding block. The following coefficient identities hold in U(p) for r>1 in the RIGHT jump-one case:

$$D_{m;ij}^{(r+1)}=[F_{m-1;ig}^{(2)},E_{m-1;gj}^{(r)}]+\sum_{s=0}^r\widetilde D_{m-1;gg}^{(r+1-s)}D_{m;ij}^{(s)},$$

$$E_{m-1;ij}^{(r+1)}=[D_{m-1;ig}^{(2)},E_{m-1;gj}^{(r)}]-\sum_fD_{m-1;if}^{(1)}E_{m-1;fj}^{(r)}.$$

Here tildeD is the coefficient of the NEGATIVE formal inverse `−D(u)^−1` in the source convention (the order-zero coefficient is −I). In the LEFT jump-one case the product orders and commutator orientations are

$$D_{m;ij}^{(r+1)}=[F_{m-1;ig}^{(r)},E_{m-1;gj}^{(2)}]+\sum_{s=0}^rD_{m;ij}^{(s)}\widetilde D_{m-1;gg}^{(r+1-s)},$$

$$F_{m-1;ij}^{(r+1)}=[F_{m-1;ig}^{(r)},D_{m-1;gj}^{(2)}]-\sum_fF_{m-1;if}^{(r)}D_{m-1;fj}^{(1)}.$$

For clarity these identities are algebraic recurrences, not uses of invariance or full generation. They follow by the end recursions and the matrix bracket. For example expanding the right E recurrence gives respectively `dotE_(r+1)+Σ dotD1 dotE_r`, its product with the new block L, and its commutator with C; collecting via the right end recurrence gives `E_(r+1)+ΣD1 E_r`. The left F expansion gives `dotF_(r+1)+ΣdotF_r dotD1`, its LEFT product with L, and the commutator `[C,that expression]`; collecting via the left end recurrence gives `F_(r+1)+ΣF_r D1`. No new-column unit occurs in the unchanged earlier D2, and no unit at its boundary endpoint occurs in its path expansion, so it commutes with L and C in these expansions. The D identities follow from expanding the boundary E–F commutator and using the coefficient convolution defining the inverse earlier D block; its convolution cancels all split paths except the changed D coefficient. This is exactly the same sign-cut cancellation as the formal Gauss inverse, with both product orders retained.

All earlier D coefficients, inverse D coefficients and unaffected boundary coefficients on the right-hand sides are already invariant. The base changed D1,D2 and E2 (RIGHT) or F2 (LEFT) were checked directly. Induction on r in these formulas therefore proves every changed coefficient invariant, without assuming an infinite shifted-Yangian PBW theorem or finite generation.

## The equal-height neighboring columns: complete boundary tables

When the boundary shift exceeds 1 the first TWO end columns have height t; in the rectangle case the same is true. Write a double dot for the pyramid with both deleted. Fixed h is bottom. Put `K_(s);ij=ddotD_(m;ij)^s`. The SAME computation covers boundary E (RIGHT) or F (LEFT) by replacing K with the corresponding ddotE or ddotF coefficient: the derivation uses only that K belongs to the twice-deleted p, commutes with the new negative z, and obeys its end recursion. Negative-index coefficients are zero. All sums below are over bottom rows 1,...,t.

In the RIGHT case call the last three column positions C,B,A. Put `B_ck=tildeE_(B c),(B k)`, `A_kj=tildeE_(A k),(A j)`, `C_hk=tildeE_(C h),(B k)`, `J_cj=tildeE_(B c),(A j)`, `H_hj=tildeE_(C h),(A j)`. Expanding twice the end recurrence gives the following eight summands:

$$A_0=K_{r;ij},\ B_0=\sum_cK_{r-1;ic}B_{cj},\ C_0=[K_{r-1;ih},C_{hj}],\ D_0=\sum_kK_{r-1;ik}A_{kj},$$

$$E_0=\sum_{k,c}K_{r-2;ic}B_{ck}A_{kj},\ F_0=\sum_k[K_{r-2;ih},C_{hk}]A_{kj},\ G_0=\sum_cK_{r-2;ic}J_{cj},\ H_0=[K_{r-2;ih},H_{hj}].$$

For `z=tildeE_(A f),(B g)` their projected brackets are

* A0,C0: zero;
* B0: `−δ_fj K_(r−1);ig`; D0: `+δ_fj K_(r−1);ig`;
* E0: `tδ_fj K_(r−2);ig −K_(r−2);ig A_fj +δ_fj Σ_cK_(r−2);ic B_cg`;
* F0: `+δ_fj[K_(r−2);ih,C_hg]`;
* G0: the NEGATIVE of the displayed E0 expression;
* H0: the NEGATIVE of the displayed F0 expression.

Every expression cancels. These are obtained by the displayed matrix bracket and moving each negative unit to the RIGHT before evaluating χ; in E0 there is one χ correction for each of the t summation rows. In G0 the scalar is `rho_A−rho_B=t`, which supplies the matching −t correction. Thus the table is valid for EVERY r>1, not merely a degree-two example.

For the LEFT case call the first three column positions A,B,C. Put `L_ik=tildeE_(A i),(A k)`, `B_kc=tildeE_(B k),(B c)`, `C_kh=tildeE_(B k),(C h)`, `J_ic=tildeE_(A i),(B c)`, `H_ih=tildeE_(A i),(C h)`. The twice-expanded coefficients are

$$A_0=K_{r;ij},\ B_0=\sum_kB_{ik}K_{r-1;kj},\ C_0=[C_{ih},K_{r-1;hj}],\ D_0=\sum_kL_{ik}K_{r-1;kj},$$

$$E_0=\sum_{k,c}L_{ik}B_{kc}K_{r-2;cj},\ F_0=\sum_kL_{ik}[C_{kh},K_{r-2;hj}],\ G_0=\sum_cJ_{ic}K_{r-2;cj},\ H_0=[H_{ih},K_{r-2;hj}].$$

For `z=tildeE_(B f),(A g)` the COMPLETE LEFT-IDEAL projection table is

* A0,C0: zero;
* B0: `+δ_ig K_(r−1);fj`; D0: `−δ_ig K_(r−1);fj`;
* E0: `tδ_ig K_(r−2);fj −δ_ig Σ_cB_fc K_(r−2);cj +L_ig K_(r−2);fj`;
* F0: `−δ_ig[C_fh,K_(r−2);hj]`;
* G0: the NEGATIVE of the displayed E0 expression;
* H0: the NEGATIVE of the displayed F0 expression.

This is a direct calculation in the REFLECTED left reduction, not a reversal of the ideal in the right-hand table. For example `[z,L_ik]=δ_gi tildeE_(B f),(A k)`. Moving that negative through `B_kc` gives `−δ_fk B_kc+δ_fc`, and summing k gives the first two E0 terms including t. The second bracket in E0 gives `+L_ig K_(r−2);fj`. On the other hand the bridge J gives those opposite matrix terms and scalar `rho_A−rho_B=−t`, precisely canceling E0. The F/H cancellation uses `[z,H_ih]=δ_gi C_fh` and the fact that z commutes with K. Thus EVERY mode in the LEFT changed D/F recursions has zero projection.

If only two columns remain, the twice-deleted K's are their formal constant coefficients, and commutators with K vanish. Terms involving a third column consequently vanish; the same tables apply with the nonexistent terms omitted and K positive coefficients zero. This covers the final induction boundary.

## Conclusion and remaining separate duties

The unchanged coefficients, old-m invariance, degree-one/two base checks, jump-one recurrences and equal-height all-r tables cover every allowed parabolic D/E/F mode in both arrangements. Further Gauss inversion splits minimal blocks and produces the ordinary simple coefficients; products and commutators produce higher roots. Every one is invariant. Since `eta_tail(P)` is the shifted path coefficient, this proves that the original untwisted path generators belong to their actual LEFT reduction W for BOTH π and π′.

The subsequent assertion that these invariant generators exhaust W is a SEPARATE weighted slice/Hilbert-series argument supplied by the shifted-PBW constructor. Only after that proof is checked may `right-reduction-proof.md` deduce τ(W)=W′ and the original head/right equality. No mode truncation is used to suppress an unverified infinite family here. The finite D/E/F or T cutoffs require the sibling's independent quotient/presentation proof.

## Reading record

Personally read BK5 complete local fulltext carrier `research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/head-tail-path-model-adoption/bk5-read.txt`, actual §9 path definition and cut identities, and §10 pp.31–39, all right recurrences/invariance lemmas10.4–10.10 and left recurrences10.11–10.13. The source omits details of left Lemma10.12 and degree-two Lemma10.7; those omissions are precisely why the direct LEFT boundary table and degree-two scalar/matrix calculations above were reconstructed here. This records those actual passages read, not a claim to have independently re-read every page of the full article.
