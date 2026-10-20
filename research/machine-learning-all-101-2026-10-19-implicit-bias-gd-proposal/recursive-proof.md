# Complete all-data discrete-GD proof proposal

This is a proof-only proposal for the unchanged Statement of `thm-separable-logistic-gd-selects-hard-margin-direction`. It supplies a local replacement for the difficult residual argument in Soudry et al., Appendix C, Theorem 13 and Lemmas 14–18. It proves a stronger intermediate conclusion: a corrected explicit iterated-log comparison sequence has an absolutely summable discrete GD defect. Eventual nonexpansiveness then bounds the true residual. All facial recursion, offset solvability, triangular corrections and summability estimates are proved below; no source theorem is imported as a premise. The argument applies to precisely the two losses in the Statement and to its stated step conditions. It does not assert the more general nonconvex-loss version of the source theorem.

Only this research proposal was written. No item, metadata, consumer, or runtime state was edited. Narrow settings inspection found `model_auto_compact_token_limit = 500000` and scope `total` in the existing Codex config; no settings were changed.

## 1. Descent and divergence of all margins

Write $v_i=y_ix_i$, $L(w)=\sum_i\ell(v_i^Tw)$, $f=-\ell'>0$ and $F(w)=w-\eta\nabla L(w)$. The sample is nonempty and strictly separable. Choose a unit vector $u$ and $\gamma>0$ with $u^Tv_i\ge\gamma$ for every $i$.

For logistic loss, $0<\ell''(s)\le1/4$, so $0\preceq\nabla^2L(w)\preceq\frac14XX^T$. Thus $\beta=\lambda_{\max}(XX^T)/4$ is a global smoothness constant. The stated bound is exactly $\eta<2/\beta$. For exponential loss use the stated $\beta_{\rm loc}$ on the convex region containing the actual update segments, and put $\beta=\beta_{\rm loc}$. Integration of the Hessian along the update segment (or the ordinary Lipschitz-gradient descent inequality) gives

$$L(w_{t+1})\le L(w_t)-\eta(1-\eta\beta/2)\|\nabla L(w_t)\|^2.$$

Since $L\ge0$, the gradient squares are summable and $\|\nabla L(w_t)\|\to0$. Meanwhile,

$$\|\nabla L(w_t)\|\ge-u^T\nabla L(w_t)=\sum_i f(v_i^Tw_t)u^Tv_i\ge\gamma\sum_i f(v_i^Tw_t).$$

Hence every $f(v_i^Tw_t)\to0$. For both listed losses this forces $v_i^Tw_t\to+\infty$, and therefore $L(w_t)\to0$. In particular $\|w_t\|\to\infty$. No asymptotic directional information has been used in this step.

## 2. Finite facial recursion, including existence at every stage

Set $H_0=\mathbb R^d$, $R_0=I$, and $T_0=\{1,\dots,n\}$. Suppose $T_{m-1}$ is nonempty and the projected vectors $a_i=R_{m-1}v_i$, $i\in T_{m-1}$, are strictly separable inside $H_{m-1}$. Here $R_{m-1}$ is the orthogonal projector onto $H_{m-1}$. Let $h_m\in H_{m-1}$ be the unique minimum-norm vector with $h_m^Ta_i\ge1$. Existence and uniqueness follow by restricting to a nonempty compact norm sublevel of the closed feasible set and strict convexity, exactly as for the original hard-margin problem.

Let $J_m=\{i\in T_{m-1}:h_m^Ta_i=1\}$ and $D_m=T_{m-1}\setminus J_m$. There exist coefficients $\alpha_i\ge0$, $i\in J_m$, with

$$h_m=\sum_{i\in J_m}\alpha_i a_i.$$

Here is a local finite-dimensional proof of that KKT fact. The cone $C=\operatorname{cone}\{a_i:i\in J_m\}$ is closed: a conic representation may be reduced to linearly independent generators by eliminating a linear dependence while preserving nonnegative coefficients; for a convergent sequence in the cone, pass to one of the finitely many such independent subsets, on which coefficient recovery is continuous. If $h_m\notin C$, let $c$ be its nearest point in $C$. With $z=h_m-c$, projection optimality on a cone gives $z^Ta_i\le0$, $z^Tc=0$ and $z^Th_m=\|z\|^2>0$. For small $\epsilon>0$, $h_m-\epsilon z$ preserves the active constraints and the finitely many inactive strict inequalities, while decreasing squared norm. This contradicts minimality. A nearest point exists by restricting the closed cone to a sufficiently large compact ball. Thus $h_m\in C$ as claimed.

Define $S_m$ as the union of the positive-coordinate supports of all such nonnegative representations, and $T_m=J_m\setminus S_m$. Because there are finitely many indices, averaging one witness representation for each index in $S_m$ gives a single representation

$$h_m=\sum_{i\in S_m}\alpha_i a_i,\qquad \alpha_i>0\quad(i\in S_m).$$

In particular $S_m\ne\varnothing$. Set

$$E_m=\operatorname{span}\{a_i:i\in S_m\},\qquad H_m=H_{m-1}\cap E_m^\perp.$$

Let $Q_m$ be the orthogonal projector onto $E_m$, and let $R_m=R_{m-1}-Q_m$ be the orthogonal projector onto $H_m$. These are nested orthogonal projections by construction. Define $V_m=E_1\oplus\cdots\oplus E_m$ and its projector $P_m=I-R_m$. Thus $h_m\in E_m$, each $E_m\ne\{0\}$, and distinct $E_m$ are orthogonal.

If $T_m\ne\varnothing$, its next projected data $b_i=R_mv_i$ are strictly separable in $H_m$. To prove this crucial assertion, suppose not. The origin then belongs to the convex hull of the $b_i$: otherwise the nearest point $b\ne0$ of that compact convex hull satisfies $b^Tb_i\ge\|b\|^2>0$ for every $i$, a strict separator. Thus there are $c_i\ge0$, not all zero, with $\sum_{i\in T_m}c_i b_i=0$. Consequently $\sum_{i\in T_m}c_i a_i$ lies in $E_m$ and can be written $\sum_{j\in S_m}d_j a_j$. For sufficiently small $\epsilon>0$, each $\alpha_j-\epsilon d_j$ remains positive, and

$$h_m=\sum_{j\in S_m}(\alpha_j-\epsilon d_j)a_j+\sum_{i\in T_m}\epsilon c_i a_i.$$

This is an admissible nonnegative dual representation with a positive coefficient at an index of $T_m$, contradicting the definition of $S_m$. This proves strict separability, including that no next projected vector vanishes.

Continue until $T_M=\varnothing$. At each nonterminal stage a nonzero orthogonal subspace is removed, so $1\le M\le d$ and the procedure terminates. The sets $S_1,D_1,\dots,S_M,D_M$ partition the indices.

The following elementary identities will be used repeatedly:

* If $i\in S_k$, then $v_i\in V_k$, $v_i^Th_j=1$ for $1\le j\le k$, and $v_i^Th_j=0$ for $j>k$.
* If $i\in D_k$, then $v_i^Th_j=1$ for $j<k$, $v_i^Th_k>1$, and the later $v_i^Th_j$ are arbitrary finite constants.

Indeed membership in the successive remaining sets gives the equalities before removal; $R_{k-1}v_i\in E_k$ gives $v_i\in V_k$ for $i\in S_k$; and orthogonality gives all later zero inner products. Also $h_1=w^*$.

This construction deliberately uses spans of the projected support vectors. It never assumes that a product of unrelated raw-data projectors is an orthogonal projector.

## 3. Unique finite offsets (the content needed from source Lemma 17)

Inductively choose $c_m\in E_m$ to solve

$$h_m=\eta\sum_{i\in S_m}\exp\left(-v_i^T\sum_{j=1}^m c_j\right)Q_mv_i.$$

For existence and uniqueness put $a_i=Q_mv_i=R_{m-1}v_i$ for $i\in S_m$, and $\beta_i=\eta\exp(-v_i^T\sum_{j<m}c_j)>0$. We need

$$\sum_{i\in S_m}\beta_i e^{-a_i^Tc_m}a_i=h_m.$$

On $E_m$ consider

$$\Phi_m(c)=\sum_{i\in S_m}\beta_i e^{-a_i^Tc}+h_m^Tc=\sum_{i\in S_m}\left(\beta_i e^{-a_i^Tc}+\alpha_i a_i^Tc\right),$$

using the strictly positive $\alpha_i$ from Section 2. Every scalar function $s\mapsto\beta_i e^{-s}+\alpha_i s$ is bounded below and tends to $+\infty$ as $s\to\pm\infty$. The $a_i$ span $E_m$, so $\max_i|a_i^Tc|\ge\delta_m\|c\|$ for some $\delta_m>0$, by compactness of the unit sphere. Therefore $\Phi_m(c)\to\infty$ when $\|c\|\to\infty$: one scalar summand tends uniformly to infinity and all the others have finite lower bounds. Thus $\Phi_m$ attains its minimum. Its Hessian satisfies

$$z^T\nabla^2\Phi_m(c)z=\sum_{i\in S_m}\beta_i e^{-a_i^Tc}(a_i^Tz)^2>0\qquad(0\ne z\in E_m),$$

so the minimizer is unique. Its zero gradient is exactly the required equation. Put $c=\sum_{m=1}^M c_m$ and $b_i=\eta e^{-v_i^Tc}>0$. For $i\in S_m$, later $c_j$ are orthogonal to $v_i$, so the equation becomes

$$Q_m\sum_{i\in S_m}b_i v_i=h_m.$$

All factors of $\eta$ are thus included in $b_i$, and $c$ depends on the fixed step as expected.

## 4. Unique triangular correction vectors (the content needed from source Lemma 18)

Put $B_m=\sum_{i\in S_m}b_i v_i$ and $A_k=\sum_{i\in S_k}b_i v_iv_i^T$. Since $v_i\in V_k$ for $i\in S_k$, $A_k$ maps into $V_k$. Its diagonal block $Q_kA_k|_{E_k}:E_k\to E_k$ is positive definite: for $z\in E_k\setminus\{0\}$,

$$z^TA_kz=\sum_{i\in S_k}b_i((Q_kv_i)^Tz)^2>0.$$

For each $m>1$ define the vectors $d_{k,m}\in E_k$, $1\le k<m$, by

$$\sum_{k<m}A_kd_{k,m}=P_{m-1}B_m.$$

This system has exactly one solution. To see this without neglecting its cross blocks, start with $y=P_{m-1}B_m\in V_{m-1}$. For $k=m-1,m-2,\dots,1$ solve the invertible diagonal-block equation $Q_kA_kd_{k,m}=Q_ky$, and replace $y$ by $y-A_kd_{k,m}$. Before that step $y\in V_k$ and afterwards $y\in V_{k-1}$, because $A_kd_{k,m}\in V_k$ and its $E_k$ component has been removed. The final residual is zero. The same backward argument applied to a homogeneous system proves uniqueness. This is a genuinely triangular solution; an $A_kd_{k,m}$ can have nonzero components in earlier $E_j$.

Because $B_m\in V_m$ and $Q_mB_m=h_m$, these solutions give the exact cancellation identity

$$B_m-\sum_{k<m}A_kd_{k,m}=h_m\qquad(1\le m\le M),$$

with the empty sum understood as zero. All $c_m$ and $d_{k,m}$ are fixed finite vectors.

## 5. Iterated-log summability

For sufficiently large real $s$ let $L_0(s)=s$, $L_m(s)=\log L_{m-1}(s)$, and

$$a_m(s)=L_m'(s)=\frac1{s\prod_{j=1}^{m-1}L_j(s)},\qquad \epsilon_{k,m}(s)=\frac{a_m(s)}{a_k(s)}=\frac1{\prod_{j=k}^{m-1}L_j(s)}\quad(k<m).$$

All iterated logs used here, including $L_M$, are positive and eventually increasing. Each $a_m$ and each $\epsilon_{k,m}$ is positive, decreasing and tends to zero.

The summability test used below is elementary. A product

$$s^{-\nu_0}\prod_{j=1}^qL_j(s)^{-\nu_j}$$

is integrable and integer-summable on a sufficiently large tail if its first exponent differing from $1$ is greater than $1$. Indeed, if that first exponent occurs at $L_r$ (where $r=0$ denotes $s$), the substitution $y=L_r(s)$ removes all earlier factors and reduces the integral to $y^{-1-\delta}$ times finitely many real powers of iterated logs of $y$. Those later powers are $O(y^{\delta/2})$, since $\log\log y=o(\log y)$, so the integral converges. The original function is eventually decreasing: its logarithmic derivative is dominated by the negative derivative of its earliest positive-power denominator. The integral test gives integer summability. This proves the needed form of source Lemma 16, including arbitrary signs of later exponents.

In particular:

$$\sum_t\frac{a_k(t)}{L_j(t)}<\infty\quad(j<k),\qquad \sum_t\frac{a_k(t)}{L_k(t)^2}<\infty.$$

For the first series the exponent at $L_j$ is $2$, while all earlier exponents are $1$; for the second the exponent at $L_k$ is $2$. Also

$$\sum_t|\epsilon_{k,m}(t+1)-\epsilon_{k,m}(t)|<\infty,$$

by positive monotonicity and telescoping. Finally

$$\sum_t\left|L_m(t+1)-L_m(t)-a_m(t)\right|<\infty.$$

Indeed the summand equals $a_m(t)-\int_t^{t+1}a_m(s)\,ds$, is nonnegative, and is at most $a_m(t)-a_m(t+1)$, which telescopes. These observations account explicitly for every discretization term.

## 6. Explicit comparison trajectory and its summable defect

Define, for all sufficiently large integer $t$,

$$G_t=\sum_{m=1}^Mh_mL_m(t)+c+D(t),\qquad D(t)=\sum_{k<m}d_{k,m}\epsilon_{k,m}(t).$$

The correction $D(t)\to0$, and Section 5 proves

$$\sum_t\left\|G_{t+1}-G_t-\sum_{m=1}^Mh_ma_m(t)\right\|<\infty.$$

We next prove, separately and in full, the analogous gradient estimate

$$\sum_t\left\|-\eta\nabla L(G_t)-\sum_{m=1}^Mh_ma_m(t)\right\|<\infty.$$

First consider the exponential loss, for which $-\eta\nabla L(G_t)=\sum_i\eta e^{-v_i^TG_t}v_i$ exactly.

**Discarded nonsupport indices.** If $i\in D_k$, write $p_i=v_i^Th_k>1$. The identities in Section 2 give

$$e^{-v_i^TG_t}=e^{-v_i^Tc-v_i^TD(t)}\left(\prod_{j<k}L_{j-1}(t)^{-1}\right)L_{k-1}(t)^{-p_i}\prod_{j>k}L_{j-1}(t)^{-v_i^Th_j}.$$

The first factor is bounded above because $D(t)\to0$. In the remaining product the first exponent differing from $1$ is $p_i>1$. Section 5 therefore shows $\sum_t e^{-v_i^TG_t}<\infty$. This handles all nonsupport gradients, including arbitrary negative later margins.

**Retained indices.** For $i\in S_k$, Section 2 gives the exact factorization

$$\eta e^{-v_i^TG_t}=b_i a_k(t)e^{-v_i^TD(t)}.$$

Because $v_i\in V_k$, only the $d_{j,m}$ with $j\le k$ can contribute to $v_i^TD(t)$. Split

$$v_i^TD(t)=U_{i,k}(t)+W_{i,k}(t),$$

$$U_{i,k}(t)=\sum_{m>k}v_i^Td_{k,m}\epsilon_{k,m}(t),\qquad W_{i,k}(t)=\sum_{j<k}\sum_{m>j}v_i^Td_{j,m}\epsilon_{j,m}(t).$$

All sums are finite. Since every extra iterated log in a product is eventually at least $1$,

$$|U_{i,k}(t)|\le\frac C{L_k(t)},\qquad |W_{i,k}(t)|\le C\sum_{j<k}\frac1{L_j(t)},\qquad |v_i^TD(t)|\le\frac{C'}{L_k(t)}.$$

The last bound follows because $L_j(t)\ge L_k(t)$ for $j<k$. It remains valid when $k=M$, where $U_{i,M}=0$. Taylor's theorem on a fixed neighborhood of zero gives

$$e^{-v_i^TD(t)}=1-U_{i,k}(t)+E_{i,k}(t),\qquad |E_{i,k}(t)|\le C\left(\sum_{j<k}\frac1{L_j(t)}+\frac1{L_k(t)^2}\right).$$

Thus $\sum_t a_k(t)|E_{i,k}(t)|<\infty$, by Section 5. This bound includes every crossed correction with $j<k$, every product of two different corrections, and every higher Taylor remainder; none is silently omitted. Consequently, after summing over the finite sets of indices,

$$-\eta\nabla L_{\exp}(G_t)=\sum_{k=1}^M a_k(t)B_k-\sum_{k<m}a_k(t)\epsilon_{k,m}(t)A_kd_{k,m}+e_t,$$

where $\sum_t\|e_t\|<\infty$. Since $a_k\epsilon_{k,m}=a_m$, the exact triangular identity in Section 4 makes the right side

$$\sum_{m=1}^Ma_m(t)\left(B_m-\sum_{k<m}A_kd_{k,m}\right)+e_t=\sum_{m=1}^Mh_ma_m(t)+e_t.$$

This proves the gradient estimate for exponential loss.

**Logistic tail correction.** Since $f_{\log}(s)=e^{-s}/(1+e^{-s})$,

$$0\le e^{-s}-f_{\log}(s)=\frac{e^{-2s}}{1+e^{-s}}\le e^{-2s}.$$

For every index, $v_i^Th_1\ge1$, and all later $L_m(t)$ are $o(\log t)$; therefore $v_i^TG_t\ge(1-o(1))\log t$. In particular, simultaneously for the finitely many indices and all sufficiently large $t$, $v_i^TG_t\ge\frac34\log t$. Hence $e^{-2v_i^TG_t}\le t^{-3/2}$ is summable. The difference between the logistic and exponential gradient vectors at $G_t$ is thus summable, proving the same gradient estimate for logistic loss.

Combining the increment and gradient estimates proves the promised absolutely summable defect:

$$\delta_t:=G_{t+1}-F(G_t)=G_{t+1}-G_t+\eta\nabla L(G_t),\qquad \sum_t\|\delta_t\|<\infty.$$

Also $L(G_t)\to0$, because every comparison margin tends to $+\infty$.

## 7. Eventual GD nonexpansiveness and a bounded residual

Here is the elementary comparison fact replacing the full source Lemma 14 case split. For a $C^2$ convex loss $L$, let $x,y$ be such that the Hessian has eigenvalues in $[0,B]$ at every point of the segment $[x,y]$, and suppose $\eta B\le2$. The symmetric matrix

$$H_{x,y}=\int_0^1\nabla^2L(y+s(x-y))\,ds$$

has eigenvalues in $[0,B]$, and $\nabla L(x)-\nabla L(y)=H_{x,y}(x-y)$. Therefore

$$\|F(x)-F(y)\|=\|(I-\eta H_{x,y})(x-y)\|\le\|x-y\|.$$

For logistic loss this applies globally with $B=\lambda_{\max}(XX^T)/4$ by Section 1 and the stated step restriction.

For exponential loss, no membership of $G_t$ in the assumed local-smoothness region is needed. Let $K=\max_i\|v_i\|^2$. At every $z$,

$$\|\nabla^2L_{\exp}(z)\|_{\rm op}\le\sum_i e^{-v_i^Tz}\|v_i\|^2\le K L_{\exp}(z).$$

Convexity gives $L_{\exp}(z)\le\max\{L_{\exp}(w_t),L_{\exp}(G_t)\}$ on the connecting segment $[w_t,G_t]$. Both endpoint losses tend to zero, by Sections 1 and 6. Thus on this segment the Hessian bound $B_t=K\max\{L_{\exp}(w_t),L_{\exp}(G_t)\}$ tends to zero. Since $\eta$ is fixed, $\eta B_t\le2$ for every sufficiently large $t$. This proves eventual nonexpansiveness between the actual and comparison iterates, under exactly the stated exponential-loss hypothesis.

Choose $T$ large enough for this property and define $r_t=w_t-G_t$. Then

$$\|r_{t+1}\|=\|F(w_t)-F(G_t)-\delta_t\|\le\|r_t\|+\|\delta_t\|.$$

Iteration yields

$$\sup_{t\ge T}\|r_t\|\le\|r_T\|+\sum_{t\ge T}\|\delta_t\|<\infty.$$

This closes the residual estimate without first assuming any residual growth or sign bound. It is a complete substitute for source Lemmas 14 and 15 in this two-loss theorem. If the source's scalar recurrence is also desired locally, it follows in one line: for nonnegative $\phi,h,z$ with $\phi_{t+1}^2\le\phi_t^2+h_t\phi_t+z_t$ and $\sum h_t<\infty$, use $h_t\phi_t\le h_t(1+\phi_t^2)/2$ and iterate; $\prod_t(1+h_t/2)\le\exp(\sum h_t/2)$ bounds the product and gives $\phi_{t+1}^2\le C_2+C_3\sum_{s\le t}z_s$, which is precisely the needed Lemma 15 estimate.

Since $c$ is fixed and $D(t)\to0$, the bounded residual above proves

$$w_t=\sum_{m=1}^M h_m\log^{\circ m}t+O(1).$$

In particular

$$w_t=w^*\log t+O(\log\log t),\qquad \frac{w_t}{\|w_t\|}\longrightarrow\frac{w^*}{\|w^*\|}.$$

The first convergence uses $h_1=w^*\ne0$ and $\log\log t=o(\log t)$. Any component of the initialization orthogonal to the data span simply remains in the bounded remainder; arbitrary initialization is covered.

## 8. Almost-everywhere bounded first residual

Fix the labels. Multiplication $x_i\mapsto v_i=y_ix_i$ preserves Lebesgue-null sets. Outside a finite union of proper polynomial zero sets, every set of at most $d$ of the $v_i$ is linearly independent and no $d+1$ of them lie in one affine hyperplane. The latter excludes the determinant-zero conditions for the augmented rows $(v_i^T,1)$; the former excludes the appropriate Gram determinant-zero conditions. Each relevant polynomial is nonzero, as witnessed by coordinate vectors for the linear conditions and affinely independent points for the affine conditions. A nonzero real polynomial has a null zero set, by induction on dimension and Fubini: outside the zero set of its nonzero coefficient polynomial, it is a nonzero univariate polynomial with finitely many roots.

All first-stage active points lie in the hyperplane $(w^*)^Tv=1$, so their number is at most $d$. Their column matrix $A$ has full column rank, and the dual representation is uniquely

$$\alpha=(A^TA)^{-1}\mathbf1,$$

because $A^Tw^*=\mathbf1$ and $w^*=A\alpha$. Each coordinate of this rational function has a polynomial numerator not identically zero: for orthonormal columns, every coordinate is $1$. After excluding these finitely many additional numerator-zero sets for every possible active subset, every active multiplier is nonzero. Since the KKT multipliers are nonnegative, they are all positive. Thus $T_1=\varnothing$, $M=1$ and the expansion of Section 7 gives $w_t=w^*\log t+O(1)$. Restricting this null-set conclusion to the open set of strictly separable arrays proves exactly the almost-everywhere clause in the Statement. This is a consequence, not an extra general-position assumption on the all-data result.

## 9. Actual degenerate iterated-log terms

The qualification that further logarithms may occur is realized by a concrete separable example. In $\mathbb R^q$ take $n=q$ and

$$v_i=e_1+\cdots+e_i\qquad(1\le i\le q).$$

The first hard-margin vector is $e_1$: the first constraint forces $w_1\ge1$ and $e_1$ satisfies all constraints. Its unique dual representation has only the first coefficient positive, because comparison of coordinates from $q$ down to $2$ forces all later coefficients to vanish. After projecting off $e_1$ the same argument applies to the remaining staircase vectors. Consequently $S_m=\{m\}$ and $h_m=e_m$ through $M=q$. Under either stated GD regime the proved expansion is

$$w_t=e_1\log t+e_2\log\log t+\cdots+e_q\log^{\circ q}t+O(1).$$

For $q=2$ this gives a nonzero $\log\log t$ residual, and larger $q$ give further nonzero iterated-log coefficients. This also confirms that replacing the all-data proof by only its almost-everywhere branch would lose an actual part of the stated theorem.

## Source correspondence and remaining editorial work

The facial construction and $h_m$ correspond to source equations (58)–(60); the offset minimization proves the content of (62)–(63)/Lemma 17; the explicit backward solve proves (64)–(66)/Lemma 18 with all cross blocks retained. Section 5 proves the needed iterated-log integrability lemma. Sections 6–7 replace source Lemma 14 and its energy closure by a stronger summable-defect argument specialized to the two convex losses actually in the item. This yields the complete Theorem 13 expansion and hence every asymptotic clause of the exact current Statement. No genuine mathematical defect in those asymptotic clauses was found.

The parent owns turning this proof into local item carriers or a single complete proof, adding whichever prerequisite links the repository representation requires, and checking actual consumers. This proposal itself supplies no workflow acceptance, judgment, gate, certification, or publication claim.
