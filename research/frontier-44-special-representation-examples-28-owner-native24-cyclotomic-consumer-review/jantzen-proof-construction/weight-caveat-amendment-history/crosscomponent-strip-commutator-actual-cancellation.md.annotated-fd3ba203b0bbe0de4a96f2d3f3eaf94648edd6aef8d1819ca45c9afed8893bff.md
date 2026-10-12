# Actual crosscomponent commutator cancellation on horizontal-strip support

**Binding weight scope.** The actual Schur algebra C has only multipartition summands/weights. Polynomial and Γ series that allow arbitrary composition monomials are AUXILIARY combinatorial tableau series. Their coefficients at actual multipartition nu equal the required Kostka multiplicities and actual Schur weight determinants; no Schur modules, summands, or idempotents for other compositions are asserted.

Same research-only J construction. This proves the crosscomponent part of the local marked-strip identity whenever the transition IS a permitted horizontal strip. The off-strip vanishing and samecomponent operator identity remain open. It is actual interval cancellation, not merely a reformulated gap.

## 1. Exact row and column minors on interlacing beta lists

For one physical component write q_i=beta_lambda,i, p_i=beta_rho,i. Suppose q_i>=p_i>q_(i+1). The horizontal-strip matrix has entries H_(i,j)=1_(q_i>=p_j), so H is the upper triangular matrix U_(i,j)=1_(j>=i). Its inverse is I minus the superdiagonal shift. Replacing row i by the row at a bead position v changes its determinant to

$$d_i^{\mathrm{row}}(v)=1_{v\ge p_i}-1_{v\ge p_{i-1}}=1_{p_i\le v<p_{i-1}},$$

with p_0=+infinity. This is the row-replacement determinant formula v_row U^-1 e_i, proved by multilinearity (expand the replacement row in the original row basis). Likewise replacing column i by a column at v gives

$$d_i^{\mathrm{col}}(v)=1_{q_i\ge v}-1_{q_{i+1}\ge v}=1_{q_{i+1}<v\le q_i}.$$

For the last column use q_(N+1)=-1 and restrict v>=0. These formulas include all beta sorting signs automatically; they are determinants in the original ordered row/column positions.

Choose N>n, so the last rows of every size<=n shape are zero and p_N=q_N=0. In particular a column lowered from p_N by a positive h is inadmissible and contributes0. Every current term is omitted if its elementary exterior action is zero, before evaluating its residue valuation.

## 2. Operator-side finite sum for a physical pair a<b

Let M_i=q_(a,i)-p_(a,i). Only M_i>0 matters. Under LM, g_ab(u,v)=V(U_a z^u-U_b z^v) depends only on d=u-v, because z^v is a unit. Write it as psi_ab(d). For the intermediate padded manipulations below first treat psi(d) as FORMAL independent symbols; cancel symbols before evaluating their values. This prevents evaluating a padded artificial identically-zero residue difference.

For JΓ, a term in which lambda removes h boxes from component-a bead q_ai and adds h boxes to component-b bead q_bj has row-minor product

`d_row,a,i(q_ai-h) · d_row,b,j(q_bj+h)`.

It is1 exactly when h<=M_i and h<p_(b,j-1)-q_(b,j), with the upper bound absent for j=1. Its valuation is psi(q_ai-h-q_bj). For ΓJ, the inverse transfer applied to rho changes its column beads p_ai+h,p_bj-h. Its minor product is1 exactly when h<=M_i and h<p_bj-q_(b,j+1), and its valuation is psi(p_ai-p_bj+h). This follows directly from §1; no multiplicity or sign is inferred by a generic rank argument.

Pair the JΓ term with index j+1 with the ΓJ term with index j. They have the SAME positive-h bound

$$K_j=p_{b,j}-q_{b,j+1}-1\ge0.$$

The unpaired JΓ term j=1 remains; the unpaired last ΓJ term is0 because p_bN=0. Thus the complete crosscomponent commutator contribution for new row i is exactly

$$\sum_{u=p_{a,i}}^{q_{a,i}-1}\psi(u-q_{b,1})+\sum_{j=1}^{N-1}\ \sum_{h=1}^{\min(M_i,K_j)}\left(\psi(A_{ij}+M_i+K_j+1-h)-\psi(A_{ij}+h)\right),\qquad A_{ij}=p_{a,i}-p_{b,j}.$$

Every retained term came from a valid current and strip minor, so its original foot-residue valuation is finite. The unit/common-exponent precision is the same as the preceding hook-exponent proof.

## 3. Norm-side endpoint sum and complete interval cancellation

The crosscomponent marked-strip norm factor was proved in `marked-strip-beta-endpoint-telescoping.md`. Temporarily extending the padded sums as formal symbols, and telescoping its old-node rectangle in the other direction, yields for row i

$$\sum_{u=p_{a,i}}^{q_{a,i}-1}\left(\psi(u+1)+\sum_{j=1}^N\big(\psi(u-q_{b,j})-\psi(u-p_{b,j}+1)\big)\right).$$

Here is the complete algebra leading to this expression. The old-node endpoint rectangle satisfies

`Σ_(v=b_j)^(p_bj-1)[ψ(q_ai-v)-ψ(p_ai-v)] = Σ_(u=p_ai)^(q_ai-1)[ψ(u-b_j+1)-ψ(u-p_bj+1)]`.

This equality is the finite rectangle telescope of the same discrete difference: sum ψ(u+1-v)-ψ(u-v) over both u and v. In the previously proved endpoint formula add these rectangles to the new-node terms. The vacuum terms sum over j to ψ(u+1)-ψ(u-N+1), and the actual boundary term ψ(u-N+1) cancels that lower endpoint. This gives the displayed expression. The last j=N term has q_bN=p_bN=0 and cancels ψ(u+1). Separate j=1 from the positive q terms and reindex all remaining q terms by j+1. The result is

$$\sum_{u=p_{a,i}}^{q_{a,i}-1}\psi(u-q_{b,1})+\sum_{j=1}^{N-1}\ \sum_{s=0}^{M_i-1}\left(\psi(A_{ij}+s+K_j+1)-\psi(A_{ij}+s+1)\right).$$

For any integers A and nonnegative M,K there is the EXACT elementary identity

$$\sum_{s=0}^{M-1}\big(\psi(A+s+K+1)-\psi(A+s+1)\big)=\sum_{h=1}^{\min(M,K)}\big(\psi(A+M+K+1-h)-\psi(A+h)\big).$$

**Proof.** The left side is the formal sum over the integer interval [A+K+1,A+K+M] minus the interval [A+1,A+M]. If M<=K they are disjoint and both have M entries, giving the right side with min(M,K)=M after reversing the first interval. If M>K, their overlapping middle interval cancels, leaving the top K entries minus the bottom K entries, giving the right side with min(M,K)=K. M=0 or K=0 gives0 on both sides. This proves the equality for arbitrary symbols psi, so no analytic or field assumption is hidden in it.

Apply it for each i,j. The resulting norm-side sum is IDENTICAL term-for-term to the operator-side sum in §2. All padded artificial symbols have canceled in this formal proof. Specialize only the remaining coefficients: they correspond to the valid currents in §2 and therefore to nonzero Laurent differences. Thus the equality holds for the exact LM valuations over every field, including positive-characteristic multiplicities. This completes the crosscomponent marked-strip commutator proof on permitted strip support.

## 4. Exact remaining work

This proof does not establish that the crosscomponent commutator vanishes off horizontal-strip support. There the base determinant is0 and the U^-1 calculation cannot be used. A cancellation of the relevant shifted-row/shifted-column minors is still needed. The samecomponent commutator also remains to be matched with its beta endpoint indicator counts. The complete R core will close only after these remaining support/minor cancellations are proved; no acceptance is inferred from the genuine crosscomponent support result.
