# Complete crosscomponent off-strip cancellation by rank-one adjugates

**Binding weight scope.** The actual Schur algebra C has only multipartition summands/weights. Polynomial and Γ series that allow arbitrary composition monomials are AUXILIARY combinatorial tableau series. Their coefficients at actual multipartition nu equal the required Kostka multiplicities and actual Schur weight determinants; no Schur modules, summands, or idempotents for other compositions are asserted.

Same J constructor and first pending native24 construction round. This supplies the previously missing OFF-strip part of the CROSSCOMPONENT marked-strip commutator. Together with `crosscomponent-strip-commutator-actual-cancellation.md`, the crosscomponent part is now locally proved on and off support. The samecomponent cancellation remains separate and unproved by this packet.

Take N>n so every partition of size at most n has last beta entry0. Work first with formal potential symbols psi(d); only after equal coefficients cancel evaluate the surviving symbols as V(U_a z^d-U_b), omitting all zero current terms beforehand. This has the same specialization-safe precision as the preceding support proof.

## 1. Classification of every defective horizontal-strip step matrix

For sorted beta lists q,p, the matrix H_(i,j)=1_(q_i>=p_j) has rows equal to tail-step vectors t_r=(0,...,0,1,...,1), with first1 in column r. Since q_N=p_N=0, no row is zero. The N vectors t_1,...,t_N are a basis with unit upper-triangular transition matrix. Hence the rank is exactly the number of distinct occupied tail-step types. If rank<=N-2, changing one row or one column cannot give a nonzero determinant, so every minor used by a crosscomponent current vanishes.

If rank=N-1, exactly one tail type r is missing, and exactly one other tail type occurs twice. The duplicated rows are adjacent, say i,i+1, because their thresholds are weakly ordered. Put Q=q_i,Q'=q_(i+1), so Q>Q'. The missing interval is

`[P,P')=[p_r,p_(r-1))`, with p_0=+infinity.

The left nullspace is spanned by u=e_i-e_(i+1). The right nullspace is spanned by v=e_r-e_(r-1), interpreting e_0=0. At least one (N-1)-minor is±1 (remove one duplicated row and the appropriate column in the tail-step basis). Therefore the adjugate is exactly epsilon·v u^T for one fixed epsilon=±1.

By row/column multilinearity, replacing row l by the row at bead position x gives

`D_row,l(x)=epsilon u_l·1_(P<=x<P')`.

Replacing column l by the column at x gives

`D_col,l(x)=epsilon v_l·1_(Q'<x<=Q)`.

Thus all row and column sorting signs are accounted for, and the SAME epsilon governs both kinds of replacement. These identities prove the defective-minor formulas; no division by the zero base determinant occurs.

The missing tail interval lies entirely above or entirely below the duplicated interval, because its type differs from the duplicated type. If it lies below, Q'>=P', so only lowering a q bead or raising a p bead can restore the determinant. If it lies above, Q<P, so only raising a q bead or lowering a p bead can restore it. A crosscomponent current lowers q in earlier component a and raises q in later component b; the inverse column current raises p in a and lowers p in b. Therefore the only possible nonzero defect in component a is the “missing below” case, and in b the “missing above” case. In every opposite-direction defect both JΓ and ΓJ terms are0.

Any untouched physical component with a defective base strip determinant kills the entire term. Thus it remains to handle only an a defect, only a b defect, or defects in both. Rank<=N-2 defects were already disposed of.

## 2. Only earlier component a defective

Use the notation above for a, with Q'>=P'. Let b be interlacing. As in the on-support proof, pair b's row-plus term j+1 with its column-minus term j; their common bound is h<B_j, B_j=p_(b,j)-q_(b,j+1). The unpaired first row-plus term contributes0 here: the two a row-source coefficients add to epsilon(1-1)=0 at every restored position, since its b bound is unrestricted. The last column-minus term is0 because p_bN=0.

For fixed j, put L=q_(b,j+1), M=p_(b,j). The first term sums over restored a positions x in [P,P'), with source coefficients +Q and -Q'. Its coefficient at psi(x-L) is

`epsilon·(1_(Q-x<B_j)-1_(Q'-x<B_j)) = -epsilon·1_(Q'-M<x-L<=Q-M)`.

The second term sums over restored a-column positions y in (Q',Q], with a source coefficients +P and -P'. Its coefficient at psi(y-M) is

`epsilon·(1_(y-P<B_j)-1_(y-P'<B_j)) = -epsilon·1_(P-L<=y-M<P'-L)`.

Both sums are therefore exactly

`-epsilon Σ_(d in [P-L,P'-L) intersect (Q'-M,Q-M]) psi(d)`.

They agree, so their difference in the commutator is0. All positive-h requirements are automatic: restoring the a row lowers a source at least Q' to a position below P'<=Q', and restoring the a column raises a source at most P' to a position strictly above Q'. This proves vanishing for an a-only defect, including all signs.

## 3. Only later component b defective

Write its duplicated q endpoints as R>R' and missing p interval [S,S'), with R<S. Let a be interlacing. For each new a row put M=q_ai-p_ai>=0. In JΓ, restore a b-row position w in [S,S') from source +R or -R'. The a row-minus minor imposes h<=M. The signed coefficient is

`epsilon·(1_(w-R<=M)-1_(w-R'<=M))=epsilon·1_(R'+M<w<=R+M)`.

Its potential is psi(q_ai-w). In ΓJ, restore a b-column position t in (R',R] from source +S or -S'. The a column-plus minor imposes h<=M. The signed coefficient is

`epsilon·(1_(S-t<=M)-1_(S'-t<=M))=epsilon·1_(S<=t+M<S')`.

Its potential is psi(p_ai-t). The translation w=t+M identifies both index intersections and both potentials because q_ai=p_ai+M. Hence the two sums agree and the commutator vanishes. If r=1, S'=+infinity and there is no source at that virtual endpoint; the formulas simply omit it, and the same interval translation remains valid.

## 4. Both components defective

Use a endpoints Q>Q', [P,P') with Q'>=P', and b endpoints R>R', [S,S') with R<S. Common positive h is automatic in all potentially nonzero terms. For each formal potential psi(d), the coefficient in JΓ is epsilon_a epsilon_b times

`[1_(S<=Q-d<S')-1_(S<=Q'-d<S')] · [1_(P<=R+d<P')-1_(P<=R'+d<P')]`.

Indeed if the a source is A in {Q,Q'} and b source is B in {R,R'}, their restored positions are x=A-h and y=B+h. The potential index is d=x-B=A-y. Thus x=B+d must lie in [P,P') and y=A-d in [S,S'), making the two source sums factor exactly as displayed.

The corresponding coefficient in ΓJ is epsilon_a epsilon_b times

`[1_(R'<P-d<=R)-1_(R'<P'-d<=R)] · [1_(Q'<S+d<=Q)-1_(Q'<S'+d<=Q)]`.

For inverse column sources A in {P,P'} and B in {S,S'}, the restored positions are z=A+h and t=B-h. Its potential index is d=A-t=z-B, so t=A-d must lie in (R',R] and z=B+d in (Q',Q], giving the displayed factors.

The two products are IDENTICAL by the elementary interval boundary identity

$$1_{B_0\le A_1-d<B_1}-1_{B_0\le A_0-d<B_1}=1_{A_0<B_0+d\le A_1}-1_{A_0<B_1+d\le A_1}.$$

Its proof is subtraction of the four half-line indicators 1_(A>=B+d); the common terms regroup on the other side. Apply it with (A_1,A_0;B_0,B_1)=(Q,Q';S,S') to the first factor, and with (R,R';P,P') and offset -d to the second. Missing top interval S'=infinity is handled by omitting its virtual source and setting the corresponding half-line indicator to0. Thus every formal potential coefficient matches, proving commutator vanishing when both components are defective.

## 5. Coverage and specialization

All ranks and restoring directions have been covered. If an untouched receiving component is noninterlacing, its unchanged base determinant is0. If a touched matrix has rank<=N-2, every one-row/column determinant is0. If it has rankN-1, the wrong direction kills both terms, while the three remaining defect patterns vanish by §§2–4. Thus the entire crosscomponent commutator is0 off permitted Γ support. Combined with the on-support interval proof, this establishes the FULL crosscomponent marked-strip identity.

For physical b beyond the current TYPE component c, the reachable prefix has rho^(b)=empty. In JΓ, a hook transfer from earlier a to later b would make the intermediate shape in component b nonempty, impossible for that Γ prefix. In ΓJ, the inverse transfer would remove a positive hook from the empty rho^(b), impossible. Therefore these terms vanish as well; the identity needs only a<b<=c.

Throughout, signs and equality were proved as coefficients of formal psi(d). Any artificial undefined Laurent factor has canceled before evaluation. Each retained current term corresponds to an actual valid hook pair, so the root's foot-exponent separation makes its value finite. Hence specializing psi(d) to the exact LM valuation is legitimate over every field, including characteristic p with p-power valuations. No field algebraic closure, level restriction, or constant-residue indicator replacement is introduced.

## Remaining exact boundary

The general CROSSCOMPONENT marked-strip commutator is now constructed completely. The SAMEcomponent two-row/two-column minor identity is still required, together with its off-strip vanishing. Once that single-component cancellation is established, the already proved commutator telescoping finishes L_lambda=B_lambda and the full Schur Jantzen sum. This packet grants no native acceptance or consumer closure by itself.
