# Complete SAMEcomponent marked-strip commutator on support

**Binding weight scope.** The actual Schur algebra C has only multipartition summands/weights. Polynomial and Γ series that allow arbitrary composition monomials are AUXILIARY combinatorial tableau series. Their coefficients at actual multipartition nu equal the required Kostka multiplicities and actual Schur weight determinants; no Schur modules, summands, or idempotents for other compositions are asserted.

Same native24 first-pass J construction. This supplies the general SAMEcomponent ON-strip cancellation. Combined with the complete crosscomponent packets, only SAMEcomponent OFF-strip cancellation remains. An earlier intermediate communication suggested a guarded inverse-column coefficient in k; that shortcut was incomplete. This proof retains the full two-hook outward-source inverse, explained below. No acceptance or source retry is made.

Let phi(k)=V(z^k-1), k>0, S(r)=sum_(k=1)^r phi(k), S(0)=0. Fix one physical component and a horizontal-strip transition rho→lambda. Put q_i=beta_lambda,i, p_i=beta_rho,i, q_i>=p_i>q_(i+1), M_i=q_i-p_i, and

$$K_j=p_j-q_{j+1}-1\ge0\quad(1\le j<N),\qquad K_N=0.$$

Take N>n, so q_N=p_N=0. The strip base matrix is U_(i,j)=1_(j>=i). Row and column replacement minors are exactly those established in the crosscomponent support packet.

## 1. Correct full inverse-column formula

The original samecomponent JΓ expression is

$$\sum_{i<j}\ \sum_{h=1}^{q_i-q_j-1}\phi(q_i-q_j-h)\det H(q-h e_i+h e_j,p).$$

Here H(q,p)_(r,s)=1_(q_r>=p_s); changed rows are kept in their original indexed positions, so the determinant includes all sorting signs. This is the original beta-hook formula before replacing h by its complementary gap.

The FULL inverse-column expression for ΓJ is

$$\sum_{i<j}\ \sum_{h\ge1}\big(\phi(p_i-p_j+h)-\phi(h)\big)\det H(q,p+h e_i-h e_j),$$

omitting negative or repeated shifted bead positions before evaluation.

**Full proof of the inverse formula.** An outward source sigma above rho changes its two beta values p_i,p_j (i<j) to p_i+h,p_j-h, h>0. Every distinct nonnegative such shifted array is a partition after sorting, and its sorted beta list strictly majorizes rho. Conversely every sigma with a two-bead move and sigma strictly dominating rho comes uniquely from an outward pair of this form: the larger changed value increases, the smaller decreases; source/target sets determine both original indices and h. A duplicate shifted bead gives determinant0 and is omitted.

There are exactly TWO hook pairs returning this source to rho. The first removes h from p_i+h to p_i and adds h from p_j-h to p_j; its foot-gap is p_i-p_j+h, and its sorting sign returns the original ordered rho list. The second removes p_i-p_j+h from p_i+h to p_j and adds that same length from p_j-h to p_i; its foot-gap is h, and its final rho beads are exchanged, giving the opposite sign. The intermediate targets p_i,p_j are both unoccupied in sigma: a valid shifted array changed exactly those two original beads and left all others distinct. Hence both hook paths are actual, not formal collision terms. Their combined coefficient is the source-sorting sign times [phi(p_i-p_j+h)-phi(h)]. The shifted-column determinant has exactly that same source-sorting sign. This proves the full formula. In particular crossed inverse sources must not be silently discarded; they are precisely the second term here.

## 2. Every two-row and two-column minor on strip support

Expand a two-row replacement determinant in the original U row basis. It is the 2×2 determinant of the replacement-row coefficients. For row shifts q_i-h,q_j+h, i<j, its direct product is1 exactly when

`1<=h<=min(M_i,K_(j-1))`.

Its crossed product, which appears with minus sign, has positions q_i-h in interval j and q_j+h in interval i. Put k=q_i-q_j-h>0. Then these positions are q_j+k and q_i-k. The interlacing inequalities make all lower/upper bounds automatic except

`1<=k<=min(M_i,K_(j-1))`.

For clarity: q_j+k>=p_j since q_j>=p_j; q_j+k<p_(j-1) gives k<=K_(j-1); q_i-k>=p_i gives k<=M_i; q_i-k<p_(i-1) is automatic since q_i<p_(i-1). The original restriction k<q_i-q_j follows from K_(j-1)<=q_i-q_j-1. Therefore the crossed part contributes exactly `-S(min(M_i,K_(j-1)))` after the valuation weight phi(k) is included.

For the outward two-column shift p_i+h,p_j-h, the crossed coefficient product is0: raising p_i cannot put it into the lower j-th q interval, and lowering p_j cannot put it into the upper i-th interval. The direct product is1 exactly when

`1<=h<=min(M_i,K_j)`.

This includes the last-row convention: p_N=0 has no permissible positive lowering, hence K_N=0. These are actual determinant identities, so no row sorting, leg sign, or multiplicity has been suppressed.

## 3. Pair adjacent row terms with the inverse-column terms

For fixed i the direct row terms with indices (i,j+1), j>=i+1, and the negative phi(p_i-p_j+h) inverse-column terms with indices (i,j) have the SAME bound r=min(M_i,K_j). Their combined sum is

$$\sum_{h=1}^{r}\left(\phi(q_i-q_{j+1}-h)-\phi(p_i-p_j+h)\right)=\sum_{u=p_i}^{q_i-1}\left(\phi(u-q_{j+1})-\phi(u-p_j+1)\right).$$

This is exactly the finite interval-overlap identity proved in the crosscomponent support packet, with A=p_i-p_j, M=M_i, K=K_j, and q_i-q_(j+1)=A+M+K+1. Every phi argument is positive; no infinite/zero valuation enters. Summing these paired terms gives

$$P_i=\sum_{j=i+1}^{N-1}\ \sum_{u=p_i}^{q_i-1}\left(\phi(u-q_{j+1})-\phi(u-p_j+1)\right).$$

The positive phi(h) inverse-column terms sum over j>i to sum_j S(min(M_i,K_j)). The crossed-row terms sum to -sum_(j>i)S(min(M_i,K_(j-1))). All terms cancel except

`-S(min(M_i,K_i))`,

because K_N=0. The one unpaired direct row term is j=i+1; it contributes

$$\sum_{h=1}^{\min(M_i,K_i)}\phi(M_i+K_i+1-h).$$

Subtract the residual S. Apply the same finite interval-overlap identity with A=0. The total residual becomes

$$U_i=\sum_{u=p_i}^{q_i-1}\phi(u-q_{i+1})-S(M_i).$$

If M_i=0 all these sums vanish. If i=N there is no pair term and M_N=0, so the same convention is valid.

## 4. Exact match with the norm endpoint expression

Add P_i+U_i. The q terms now run over all j=i+1,...,N, and the negative p terms run over j=i+1,...,N-1:

$$P_i+U_i=\sum_{j=i+1}^{N}\ \sum_{u=p_i}^{q_i-1}\phi(u-q_j)-\sum_{j=i+1}^{N-1}\ \sum_{u=p_i}^{q_i-1}\phi(u-p_j+1)-S(M_i).$$

Since p_N=q_N=0, this is equivalently

$$\sum_{u=p_i}^{q_i-1}\phi(u+1)-S(M_i)+\sum_{j=i+1}^{N}\ \sum_{u=p_i}^{q_i-1}\big(\phi(u-q_j)-\phi(u-p_j+1)\big).$$

The first sum is S(q_i)-S(p_i). Summing over i gives EXACTLY

$$\sum_i\big(S(q_i)-S(p_i)-S(M_i)\big)+\sum_{i<j}\ \sum_{u=p_i}^{q_i-1}\big(\phi(u-q_j)-\phi(u-p_j+1)\big),$$

which was proved to equal the actual samecomponent marked-strip norm valuation in `marked-strip-beta-endpoint-telescoping.md`. Thus `(JΓ−ΓJ)_(lambda rho)=V(F_(lambda rho)) Γ_(lambda rho)` for every permitted horizontal-strip transition, for the SAMEcomponent terms. This completes the general on-support identity, retaining all signed hooks and inverse source terms.

## Remaining boundary

The off-strip SAMEcomponent two-row/two-column determinant cancellation is still needed. Its base strip matrix has rank at most N-1, so the U inverse computation above does not apply. The sibling `native24_schur_weight_gram_construction` owns that exact remaining rank/minor work. Crosscomponent on/off support has complete local proofs already, and the full commutator telescoping to R is proved conditionally on this last off-support cancellation. No complete J theorem or acceptance is declared until that proof is supplied and root binds all actual inputs.
