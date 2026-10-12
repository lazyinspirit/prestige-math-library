# Exact current/determinant algebra for the remaining horizontal-strip cancellation

**Binding weight scope.** The actual Schur algebra C has only multipartition summands/weights. Polynomial and Γ series that allow arbitrary composition monomials are AUXILIARY combinatorial tableau series. Their coefficients at actual multipartition nu equal the required Kostka multiplicities and actual Schur weight determinants; no Schur modules, summands, or idempotents for other compositions are asserted.

Same J constructor, same native24 first pass, same research-only scope. This supplements the proved beta/Jacobi–Trudi reduction. It proves the current representation and the elementary horizontal-strip conjugation rule. The final local marked-strip commutator is displayed exactly and remains unproved; no full J closure is claimed.

## 1. Samecomponent beta alternation is a precise operator

Let f(k)=V(z^k-1) for k>0. In the samecomponent beta sum of the preceding packet, put D=beta_i-beta_j and k=D-h. Its valuation is f(k), because the other factors U_a z^beta_j are units. Swapping the two changed determinant rows shows

$$\chi(\beta-(D-k)e_i+(D-k)e_j;x)=-\chi(\beta-k e_i+k e_j;x).$$

Therefore the complete coefficient of f(k), for that physical component, is exactly

$$-\sum_{i<j:\beta_i-\beta_j>k}\chi(\beta-k e_i+k e_j;x).$$

This is the strictly dominance-lowering part of `-p_k p_k^perp` on the abstract Schur shape basis. Here p_k^perp can be defined integrally as the signed bead-removal map: lower an occupied bead by k into an unoccupied nonnegative position, with sign (-1)^number-crossed-beads. Multiplication by p_k raises a bead by k with the same sign rule. The latter statement has a local determinant proof: with N variables y_1,...,y_N, multiply the alternant det(y_r^beta_i) by sum_r y_r^k. Expanding the determinant, distribute this factor to its N rows; the sum equals sum_i det(y_r^(beta_i+k delta_ij)). Divide by the fixed Vandermonde alternant. This gives precisely the bead-raising formula, including equal-row zero terms and sorting signs. Specializing unused variables to zero preserves the polynomial identity. The bead-removal map is its transpose in the orthonormal abstract partition basis; thus it is exactly the adjoint customarily denoted p_k^perp. No characteristic assumption is needed for this integral operator definition.

After one removal and one addition, a non-diagonal lower-dominance result must come from distinct original beads i<j with 0<k<beta_i-beta_j, by the full dominance proof in the preceding packet. Occupied intermediate positions produce zero. All unchanged-bead collision cases are the zero repeated rows already removed in the determinant. Restoring the just-removed bead gives the original partition and is discarded by the strict projection. Hence the lower part is exactly the displayed sum, with no missing diagonal term. This proves the operator identification. It is an algebraic reformulation of the beta side, not a proof of its equality with norm counts.

## 2. Exact finite-current representation of the crosscomponent operator

Let W have ordered basis e_0,e_1,... and work with its N-fold exterior power. A partition rho is represented by the ordered wedge e_(beta_1)∧...∧e_(beta_N), beta_i=rho_i+N-i strictly decreasing. Let E(p,q) insert e_p after removing e_q, with the exterior signs. It vanishes if q is absent or p is occupied. Its sign is exactly the bead-sorting sign. The usual contraction/insertion calculation gives

$$[E(p,q),E(r,s)]=\delta_{q,r}E(p,s)-\delta_{p,s}E(r,q).$$

This follows directly by expanding E=creation·contraction and using contraction_q creation_r+creation_r contraction_q=delta_(q,r); the two products with two creations and two contractions cancel. The exterior space is only a convenient actual finite sign calculator; on a fixed size-n sector all bead positions in nonzero terms are bounded by N+n-1.

Write J for the MATRIX with entries J_(lambda mu), row lambda/column mu, acting on column shape vectors. Thus J's crosscomponent terms raise boxes toward earlier physical components, the transpose of the hook move lambda→mu. Precisely, they are

$$J^{\mathrm{cross}}=\sum_{a<b}\ \sum_{h>0}\ \sum_{q\ge h,\ w\ge0}V(U_a z^{q-h}-U_b z^w)\ E_a(q,q-h)E_b(w,w+h).$$

Omit a current term that is zero on the entire size-n sector BEFORE evaluating its valuation. On every retained term the corresponding valid hook pair makes the residue difference nonzero by the foot-exponent bound. Every nonzero term on the size-n sector has all its positions in [0,N+n-1], so this is a finite operator there. The reverse hook pair has source beads q in earlier component a and w in later component b, removal length h in a, addition length h in b; its forward current is E_a(q-h,q)E_b(w+h,w). Transposing gives exactly the displayed operator, with the same two exterior signs and valuation. This proves its agreement with the entire crosscomponent beta sum. The one-component part is the transpose of the strictly dominance-lowering operator in §1, equivalently the strictly dominance-raising matrix part of `-sum_k f(k) p_k p_k^perp`. These statements completely specify J by elementary exterior operators, independently of the unproved norm identity.

## 3. Horizontal strips are an explicit exterior determinant

Let S e_q=e_(q+1). For a formal variable x define H(x)=(I-xS)^(-1)=sum_(r>=0)x^r S^r. Its entry H_(p,q) is x^(p-q) if p>=q and0 otherwise. All assertions are coefficientwise finite in x; alternatively truncate the basis beyond the largest degree being considered. On N-wedges the matrix of ∧^N H(x) between beta_mu and beta_rho is

$$x^{|\mu|-|\rho|}\det\big(1_{\beta_{\mu,i}\ge\beta_{\rho,j}}\big)_{i,j=1}^N.$$

Since both beta lists strictly decrease, subtract consecutive columns in the 0/1 matrix. Its determinant is1 exactly when beta_mu,i>=beta_rho,i>beta_mu,i+1 for all i (with the last lower bound automatic), and0 otherwise. These inequalities are precisely mu_i>=rho_i>=mu_(i+1), the horizontal-strip criterion. This proves, including coefficient1, that Γ(x)=∧^N H(x) adds every horizontal strip once with weight x^(strip size).

For a TYPE component a, put Γ_a(x)=product_(b<=a) Γ_b(x). It adds a horizontal strip in every permitted physical component b<=a, leaves components b>a unchanged, and weights the total added size by x. Thus successive Γ_a(x_(a,r)) from the empty shape enumerate exactly the flagged semistandard tableaux: the boxes bearing each successive row label are those strips. This proves the branching matrix used below without a new Schur-functor assertion.

Conjugation of an elementary current is equally explicit:

$$\Gamma(x)^{-1}E(p,q)\Gamma(x)=\sum_{r=0}^q x^{q-r}\big(E(p,r)-xE(p+1,r)\big).$$

**Proof.** Conjugation under an exterior power carries the induced matrix-unit action to H^-1 E(p,q)H. Since H^-1=I-xS, its column vector is e_p-xe_(p+1); its row covector is sum_(r<=q)x^(q-r)e_r*. Their outer product gives the displayed sum. This proof also gives the two-current conjugation by multiplying the two displayed sums, retaining their order if they lie in one component. It is valid in every finite coefficient range and does not use a source theorem.

## 4. Explicit marked-strip factor and the local identity still needed

Let rho→lambda be a permitted Γ_a strip transition, η=[lambda]\[rho], and order nodes by physical component, then row, then column. Put r_x=U_(physicalcomponent x) z^(content x), C+(A,B)=(zB-A)/(B-A), and R(A,B)=(zB-A)(B-zA)/(B-A)^2. Define the following entirely explicit rational factor:

$$F_{\lambda\rho}^{(a)}=\prod_{x\in\eta}\ \prod_{\operatorname{comp}(x)<b\le a}(r_x-U_b)\ \prod_{\substack{x\in[\rho],\ y\in\eta\\x,y\text{ in same physical row}}}C_+(r_x,r_y)\ \prod_{\substack{x<y,\ x,y\in\eta\\x,y\text{ in different physical rows}}}C_+(r_x,r_y)\ \prod_{\substack{x\in\eta,\ y\in[\rho]\\x<y}}R(r_x,r_y).$$

The last pairs cannot be in one physical row: new nodes append to the right of all old nodes. In the third product “different physical rows” includes different components. Every factor is exactly one of the sibling pair-reduction factors. Indeed older labels are strictly smaller than the new label; same-row old/new pairs give C+; distinct-row new/new pairs have the same label and give C+; a new row-reading-earlier node followed by an old node is a different-label inversion and gives R; all other new/old pairs have no factor. Boundary factors occur only for the new nodes, because previous node type-components are unchanged. Thus along any semistandard chain, the product of these F-factors over labels is EXACTLY gamma_(t_T)/(C_(t_T)u_T). This multiplicative branching description is proved by splitting the complete node-pair list into old/old, old/new, and new/new pairs, not by assuming the desired J formula.

All auxiliary ranks m use the SAME fixed parameters z,U_a of the final rank-n LM deformation (in particular U_a=Q_a t^(na), not Q_a t^(ma)). For each n,m, let Γ_a^(n,m)(x) be the size-n/size-m block of the strip matrix. The remaining local train/marked-strip identity is

$$\big(J_n\Gamma_a^{(n,m)}(x)-\Gamma_a^{(n,m)}(x)J_m\big)_{\lambda\rho}=\begin{cases}x^{n-m}V(F_{\lambda\rho}^{(a)}),&\lambda/\rho\text{ is a permitted }\Gamma_a\text{ transition},\\0,&\text{otherwise}.\end{cases}$$

It is required only on the reachable prefix sector where physical components b>a are empty. This is a concrete finite matrix identity: J is already the explicit current/determinant matrix in §§1–2; Γ is the explicit 0/1 exterior determinant in §3; F is the displayed product. Establishing it requires the remaining cancellation. The current conjugation formula makes both sides computable algebraically and exposes a possible proof by telescoping current coefficients, but this packet does NOT claim that telescoping completed.

If the local identity is proved, multiply the Γ matrices in increasing type-row label order and telescope JΓ−ΓJ, starting from J_0=0. Each commutator inserts exactly V(F) at its strip position, so the λ-coordinate is the sum over all semistandard chains of their total norm valuation. The resulting equality is L_lambda(x)=B_lambda(x), completing R and, via the previous DVR/character leaves, the full integer K0 J theorem. This implication is fully algebraic. The remaining work is exactly proving the displayed local marked-strip identity, not citing Jantzen or asserting a Specht-to-Schur converse.

## Status

The beta operator, finite current representation, exact exterior horizontal-strip matrix, and current conjugation rule are proved locally. The marked-strip commutator is still unproved. It is a prospective local proof route for the SAME single cancellation core, not an additional scope requirement or a second mathematical review round. All original source-recovery restrictions and the minimal-refinement correction remain in force.
