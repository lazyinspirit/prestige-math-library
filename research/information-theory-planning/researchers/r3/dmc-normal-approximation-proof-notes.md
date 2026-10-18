# Finite-DMC normal approximation: local proof development

This is an independent r3 proof development for the unconstrained finite-alphabet case. It proves the fixed-error, positive-dispersion expansion for both average and maximal error. All logarithms below are natural, so rates and dispersion are in nats and nats squared per channel use. The constants in every $O(\ln n)$ term may depend on the fixed channel and on ε.

The source evidence is already recorded in the r3 `source-manifest.json` and `reading-ledger.json`: the complete substantive text of Polyanskiy–Wu (PW), author prepublication, was read on PDF pp. 1–696; the complete PPV author manuscript, PDF pp. 1–121, was read; the complete Cao–Tomamichel (CT) v2 correction, PDF pp. 1–6, was read; and the complete Vershynin v2 Berry–Esseen proof, PDF pp. 1–17, was read. This proof uses PPV’s one-shot threshold bounds and meta-converse interface, the already developed array Berry–Esseen proof in [`berry-essen-proof-notes.md`](berry-essen-proof-notes.md), and a finite exact-KL/Pinsker/polytope-gap route. It does not use PPV Theorem 48’s acknowledged Case 1 argument. CT’s corrected local quadratic-decay theorem remains important source history, but this finite unconstrained proof uses the stronger elementary gap route below rather than duplicating CT’s Taylor/normal-cone proof.

## Statement and code/error conventions

Let $X$ and $Y$ be finite nonempty alphabets, and let $W(y\mid x)$ be a stochastic matrix. The length-$n$ channel is the product $W^n(y^n\mid x^n)=\prod_{i=1}^nW(y_i\mid x_i)$. There is no cost constraint: every $x^n\in X^n$ is admissible. A code has a uniform message $J\in\{1,\ldots,M\}$, a deterministic encoder $m\mapsto x_m^n$, and a possibly randomized decoder $d_m(y^n)\in[0,1]$ with $\sum_{m=1}^M d_m(y^n)\le1$ for every $y^n$; leftover mass is an error/erasure. Its message error is

\[
e_m=1-\sum_{y^n}W^n(y^n\mid x_m^n)d_m(y^n),
\]

its average error is $M^{-1}\sum_m e_m$, and its maximal error is $\max_m e_m$. Write $M_{\rm av}^*(n,\epsilon)$ and $M_{\max}^*(n,\epsilon)$ for the largest code sizes under these respective constraints. Deterministic encoders and stochastic decoders are the model throughout; the converse only uses the decoder subprobabilities, and the achievability constructs a deterministic codebook.

For an input law $P\in\Delta(X)$, put $q_P=PW$ and

\[
I(P,W)=\sum_{x:P(x)>0}P(x)D(W(\cdot\mid x)\Vert q_P),\qquad
V(P,W)=\sum_{x:P(x)>0}P(x)\operatorname{Var}_{W(\cdot\mid x)}\!\left[\ln\frac{W(Y\mid x)}{q_P(Y)}\right].
\]

Terms with $W(y\mid x)=0$ have weight zero. Whenever $P(x)>0$ and $W(y\mid x)>0$, $q_P(y)>0$, so the displayed logarithm is defined on every charged cell. Let $C=\max_{P}I(P,W)$, let $\Pi=\{P:I(P,W)=C\}$, and let $V_{\min}=\min_{P\in\Pi}V(P,W)$. Define $Q(t)=1-\Phi(t)$, so $\Phi^{-1}(\epsilon)=-Q^{-1}(\epsilon)$.

For every fixed $0<\epsilon<1/2$ with $V_{\min}>0$, the result proved below is

\[
\begin{aligned}
\ln M_{\rm av}^*(n,\epsilon)&=nC+\sqrt{nV_{\min}}\,\Phi^{-1}(\epsilon)+O(\ln n)\\
&=nC-\sqrt{nV_{\min}}\,Q^{-1}(\epsilon)+O(\ln n),\\
\ln M_{\max}^*(n,\epsilon)&=nC+\sqrt{nV_{\min}}\,\Phi^{-1}(\epsilon)+O(\ln n)\\
&=nC-\sqrt{nV_{\min}}\,Q^{-1}(\epsilon)+O(\ln n).
\end{aligned}
\]

The two lines give the separate expansions; the finite-$n$ optima need not coincide. No cost-constrained, memory-channel, $\epsilon\ge1/2$, zero-dispersion, or third-order claim is included.

## Capacity output, KKT support, and dispersion identities

Remove any output symbol unreachable from every input. The mutual information is $I(P,W)=H(PW)-\sum_xP(x)H(W(\cdot\mid x))$, continuous on the compact simplex, so $C$ is attained and $\Pi$ is nonempty compact. The output law of every capacity-achieving input is the same. Indeed, if $P_0W\ne P_1W$ for two optimizers, their nontrivial mixture strictly increases the strictly concave output entropy while its conditional output entropy is the corresponding linear mixture, contradicting maximality. Call this common output $q_*=P_*W$.

The law $q_*$ is positive on every retained output. If $q_*(y_0)=0$ but $W(y_0\mid x)>0$, mix $P_*$ with the point mass at $x$: $P_t=(1-t)P_*+t\delta_x$. The new output mass $tW(y_0\mid x)$ contributes $-tW(y_0\mid x)\ln t+O(t)$ to output entropy. Changes on coordinates with positive $q_*$, and the conditional-entropy term, are $O(t)$; other formerly zero coordinates contribute nonnegative $-ta\ln(ta)$. Thus $I(P_t,W)>I(P_*,W)$ for small positive $t$, impossible. Write $q_{\min}=\min_yq_*(y)>0$.

For $d_x=D(W(\cdot\mid x)\Vert q_*)$, direct expansion of finite sums gives, for every $P$,

\[
I(P,W)=\sum_xP(x)d_x-D(q_P\Vert q_*),\qquad
C-I(P,W)=\sum_xP(x)(C-d_x)+D(q_P\Vert q_*).\tag{1}
\]

To get the KKT inequality, use the first identity at $P_t=(1-t)P_*+t\delta_x$. Since $q_*>0$, $D((1-t)q_*+tW_x\Vert q_*)=O(t^2)$, so the right derivative of $I(P_t,W)$ at zero is $d_x-C\le0$. Also $\sum_xP_*(x)d_x=C$; hence $d_x=C$ whenever $P_*(x)>0$. More generally, every $P\in\Pi$ satisfies $P(x)>0\Rightarrow d_x=C$, and (1) proves the exact CAID description

\[
\Pi=\{P\in\Delta(X):P(x)=0\text{ if }d_x<C,\;PW=q_*\}.\tag{2}
\]

The converse inclusion in (2) follows by substitution in (1); the forward inclusion follows because every summand of the gap in $1$ is nonnegative, so equality forces the output divergence and every positive-mass slack to vanish. This also proves that $\Pi$ is a finite polytope.

For $P\in\Pi$, the single-letter information density $J_P=\ln[W(Y\mid X)/q_*(Y)]$ has conditional mean $E[J_P\mid X=x]=d_x=C$ on the support of $P$. Therefore

\[
\operatorname{Var}(J_P)=E[\operatorname{Var}(J_P\mid X)]+\operatorname{Var}(E[J_P\mid X])=V(P,W).\tag{3}
\]

Away from $\Pi$, the unconditional variance can contain the additional variance of $d_X$; the coding dispersion is the conditional variance in the definition of $V$, minimized over $\Pi$. The function $V$ is continuous on $\Pi$, so $V_{\min}$ is attained. Under $V_{\min}>0$, choose $P_*\in\Pi$ attaining that minimum.

## A global quadratic capacity gap

The coding converse needs a uniform penalty when a type moves away from the full, possibly non-singleton, CAID set. This finite DMC admits a short exact route. Let $E=\{x:d_x=C\}$, and for any input $P$ set $t=\sum_{x\notin E}P(x)$, $r=\|PW-q_*\|_2$. By (1), Pinsker in nats, and $\|z\|_2\le\|z\|_1$,

\[
C-I(P,W)\ge \sum_{x\notin E}P(x)(C-d_x)+\tfrac12r^2.
\tag{4}
\]

If $E^c\ne\varnothing$, put $\eta=\min_{x\notin E}(C-d_x)>0$; then the first term is at least $\eta t$. If $E^c=\varnothing$, $t=0$ and (4) still supplies $r^2/2$.

We prove the finite affine-slice error estimate needed to turn these residuals into distance from $\Pi$. Let $B$ be a fixed real matrix and $b$ a vector for which $F=\{u\ge0:Bu=b\}$ is nonempty and compact. There is $H<\infty$, depending only on $B,b$, such that

\[
\operatorname{dist}_2(u,F)\le H\|Bu-b\|_2\quad(u\ge0).\tag{5}
\]

For proof by contradiction, suppose no such $H$ exists. Choose $p_k\ge0$ with projection $u_k\in F$, residual $v_k=p_k-u_k\ne0$, and $\|Bp_k-b\|_2/\|v_k\|_2\to0$. Put $d_k=v_k/\|v_k\|_2$. Compactness of the unit sphere gives a subsequence $d_k\to d$ with $\|d\|_2=1$; since $Bv_k=Bp_k-b$, $Bd=0$. The active sets $I_k=\{i:u_{k,i}=0\}$ have only finitely many possibilities, so pass to a further subsequence with fixed $I_k=I$. For $i\in I$, $d_{k,i}=p_{k,i}/\|v_k\|_2\ge0$, hence $d_i\ge0$. For each $k$, choose $s_k>0$ small enough that $u_k+s_kd\ge0$: coordinates in $I$ stay nonnegative and the finitely many positive coordinates of $u_k$ absorb any negative $d_i$ when $s_k$ is small. Also $B(u_k+s_kd)=b$, so $u_k+s_kd\in F$. Euclidean projection optimality gives
\[
\langle v_k,(u_k+s_kd)-u_k\rangle\le0,
\]
and division by $s_k\|v_k\|_2$ yields $\langle d_k,d\rangle\le0$. Letting $k\to\infty$ gives $\|d\|_2^2\le0$, contradicting $\|d\|_2=1$. Thus $5$ holds for some finite $H$. This finite-face compactness proof uses only Euclidean projection and finite-dimensional compactness, not a generic Hoffman or Farkas theorem.

Apply $5$ to the nonempty compact fiber

\[
F_E=\{u\in\mathbb R^E:u\ge0,\;\sum_{x\in E}u_x=1,\;uW_E=q_*\},
\]

which is nonempty because an optimizer exists and is supported on $E$. If $E^c\ne\varnothing$, take $u=P_E$. The residual of its equality constraints is at most $2t+r$: the mass equation has residual $t$, and $uW_E-q_*=PW-q_*-P_{E^c}W_{E^c}$, where $\|P_{E^c}W_{E^c}\|_2\le t$ because each channel row has Euclidean norm at most one. Thus (5) supplies $\bar u\in F_E$ with $\|P_E-\bar u\|_2\le H(2t+r)$. Appending zeros outside $E$ gives $\bar P\in\Pi$ by (2), and

\[
\operatorname{dist}_2(P,\Pi)\le\|P-\bar P\|_2\le t+H(2t+r)\le K_0(t+r)
\]

for a fixed $K_0$. Since $0\le t\le1$, $(t+r)^2\le2(t+r^2)$. Equations $4$ and the definition of $\eta$ give $C-I(P,W)\ge c(t+r^2)$ with $c=\min(\eta,1/2)>0$, and therefore

\[
C-I(P,W)\ge\alpha\operatorname{dist}_2(P,\Pi)^2,\qquad \alpha=c/(2K_0^2)>0.\tag{6}
\]

If $E^c=\varnothing$, apply (5) directly to $P$ and $F_E=\Pi=\{P\ge0:\sum_xP_x=1,\;PW=q_*\}$; then $\operatorname{dist}(P,\Pi)\le Hr$ and (4) gives (6) with $\alpha=1/(2H^2)$. This includes $\Pi=\Delta(X)$, when the distance is identically zero. Thus the gap is global and includes every CAID face; it is not based on an unsupported Hessian-kernel direction.

## Uniform information-density bounds near all CAIDs

Let $q_{\min}=\min_yq_*(y)>0$. If $\operatorname{dist}(P,\Pi)\le\delta$, then for some $P^\circ\in\Pi$, $\|PW-q_*\|_\infty\le\|P-P^\circ\|_1\le\sqrt{|X|}\,\delta$. Choose δ small enough that $q_P(y)\ge q_{\min}/2$ for every output. Let $w_{\min}$ be the least positive transition probability. Every charged $j_P(x;y)=\ln[W(y\mid x)/q_P(y)]$ is bounded in absolute value by a finite constant depending only on $w_{\min},q_{\min}$. Thus the conditional means, variances, and centered third absolute moments

\[
T(P)=\sum_{x:P(x)>0}P(x)E_{W_x}|j_P(x;Y)-D(W_x\Vert q_P)|^3
\]

are uniformly bounded in this neighborhood. Since $q_P$ stays positive and the alphabets are finite, $V(P,W)$ is continuously differentiable there; on a compact smaller neighborhood it is Lipschitz. Continuity and $V\ge V_{\min}>0$ on $\Pi$ allow δ to be reduced so that $V(P,W)\ge v_0:=V_{\min}/2$ throughout that neighborhood. Consequently $\sqrt{V(P,W)}$ is Lipschitz there as well.

There is also a global variance bound $V(P,W)\le B_2<\infty$, including input laws on boundary faces. For charged cells,

\[
V(P,W)\le E[j_P(X;Y)^2]
\le2\sum_{x,y}P(x)W(y\mid x)(\ln W(y\mid x))^2
+2\sum_yq_P(y)(\ln q_P(y))^2.
\]

The first term is uniformly bounded because the channel has finitely many positive transition probabilities. In the second, $s(\ln s)^2$ extends continuously by zero at $s=0$, hence is bounded on $[0,1]$. This proves $B_2$ uniformly; no near-CAID lower variance bound is asserted for far types.

For any length-(n) input word of type $P$, under its channel output define

\[
L=\sum_{i=1}^n\ln\frac{W(Y_i\mid x_i)}{q_P(Y_i)}.
\]

The summands are independent. The distribution of $L$ depends only on the type, not on coordinate order, and direct summation gives

\[
E L=nI(P,W),\quad \operatorname{Var}L=nV(P,W),\quad
\sum_{i=1}^nE|L_i-E L_i|^3=nT(P).
\tag{7}
\]

In the δ-neighborhood, the independent-array Berry–Esseen theorem proved in the r3 supplement, standardized by $\sqrt{nV(P,W)}$, gives a constant $B<\infty$, uniform over every type and every $n$, such that

\[
\sup_z\left|\Pr\!\left\{L\le nI(P,W)+\sqrt{nV(P,W)}z\right\}-\Phi(z)\right|\le\frac B{\sqrt n}.
\tag{8}
\]

Indeed the array theorem bounds this error by $C_{BE} nT(P)/(nV(P,W))^{3/2}\le C_{BE}T_{\max}/(v_0^{3/2}\sqrt n)$. This is the uniformity needed near a non-singleton $\Pi$; a pointwise iid CLT would not suffice.

## One-shot achievability and meta-converse bounds

The achievability input is PPV’s dependence-testing bound (Theorem 17, author manuscript PDF pp. 15–16), stated here in nats. For an input law $P_X$, output law $q=P_XW$, and $M\ge2$, there is a deterministic $M$-word code with average error at most

\[
E_{P_XW}\exp\!\left(-\left[j(X;Y)-\ln\frac{M-1}{2}\right]_+\right).
\tag{9}
\]

For completeness, draw codewords independently from $P_X$; decode to the first word whose information density exceeds $\ln a$, where $a=(M-1)/2$, and declare an error if none passes. For a transmitted index $m$, an error is contained in the union of its own threshold failure and the event that an earlier random word passes. Averaging over $m$, the first term is $P_{P_XW}\{j\le\ln a\}$ and the union term is at most $aP_{P_Xq}\{j>\ln a\}$. On the support of the joint law, $d(P_XW)/d(P_Xq)=e^j$, so this sum equals the expectation in $9$. A finite random-codebook average has at least one deterministic codebook no worse than its expectation. For any γ>0, splitting the expectation at $j=\ln a+γ$ yields the threshold form

\[
\epsilon_{\rm av}\le P_{P_XW}\{j\le\ln((M-1)/2)+γ\}+e^{-\gamma}.
\tag{10}
\]

For the converse, fix an input type $P$, put $Q_n=q_P^n$, and take a code whose codewords all have type $P$. For finite laws $P_0,Q_0$, define $\beta_\alpha(P_0,Q_0)=\inf\{E_{Q_0}T:0\le T\le1,\ E_{P_0}T\ge\alpha\}$, where $T=1$ means accepting $P_0$. For message $m$, let $P_m=W^n(\cdot\mid x_m^n)$, let $T_m(y^n)=d_m(y^n)$, and let $L_m=\ln(dP_m/dQ_n)$ on the $P_m$-support. This likelihood ratio is well-defined there because a type-(P) word only emits outputs with $q_P(y)>0$. Every $L_m$ has the same law $L$ in (7). The decoder satisfies $\sum_m T_m(y^n)\le1$, so $\sum_m E_{Q_n}T_m\le1$.

This is the constant-composition meta-converse in PPV’s testing language (Theorems 26–28, PDF pp. 27–30), and the needed test bound does not require Neyman–Pearson attainment. If $e_m=1-E_{P_m}T_m$, then for every real $a$, with $A=\{L_m\le a\}$,

\[
E_{Q_n}T_m\ge e^{-a}E_{P_m}[T_m1_A]
\ge e^{-a}(F_L(a)-e_m),\tag{11}
\]

because on $A$, $dQ_n=e^{-L_m}dP_m\ge e^{-a}dP_m$, and the test rejects $P_m$ on a set of total $P_m$-mass $e_m$. Sum (11) over messages. For average error $e=M^{-1}\sum_m e_m$, this gives $F_L(a)\le e+e^a/M$. In particular, with $a=\ln M-\gamma$,

\[
F_L(\ln M-\gamma)\le e+e^{-\gamma}.
\tag{12}
\]

For maximal error at most $\epsilon_n$, each $T_m$ is feasible for $\beta_{1-\epsilon_n}(P_m,Q_n)$, so $\sum_m\beta_{1-\epsilon_n}(P_m,Q_n)\le\sum_mE_{Q_n}T_m\le1$. The common CDF $F_L$ in (11) gives the same threshold lower bound for every beta term. Equation (12) holds for either error criterion, and for randomized decoders, with no atom convention ambiguity: $F_L(a)=P\{L\le a\}$ and the other event is $L>a$.

## Achievability at the minimum dispersion

Choose $P_*\in\Pi$ with $V(P_*,W)=V_{\min}$, and let $X_i$ be iid $P_*$, $Y_i\sim W(\cdot\mid X_i)$. Set $J_i=\ln[W(Y_i\mid X_i)/q_*(Y_i)]$ and $S_n=\sum_iJ_i$. By the KKT support equality and (3), $EJ_i=C$ and $\operatorname{Var}(J_i)=V_{\min}>0$; the finite alphabets and $q_*>0$ give $\beta_3=E|J_i-C|^3<\infty$. The iid Berry–Esseen bound from the r3 note gives

\[
\sup_s\left|P\{S_n\le s\}-\Phi\!\left(\frac{s-nC}{\sqrt{nV_{\min}}}\right)\right|\le\frac{B_0}{\sqrt n},\qquad B_0=C_{BE}\frac{\beta_3}{V_{\min}^{3/2}}.
\tag{13}
\]

For large $n$, put $\gamma=\tfrac12\ln n$, $u_n=\epsilon-(B_0+2)/\sqrt n>0$, $t_n=nC+\sqrt{nV_{\min}}\Phi^{-1}(u_n)$, and $M_n=1+\lfloor2e^{t_n-\gamma}\rfloor$. We need $M_n\ge2$ and $t_n-\gamma\to\infty$: if $C=0$, nonnegativity of mutual information forces every input law, including each point mass, to be capacity achieving, whose conditional dispersion is zero; this contradicts $V_{\min}>0$. Hence $C>0$, so these properties hold for large $n$. Also $(M_n-1)/2\le e^{t_n-\gamma}$ and, once $e^{t_n-\gamma}\ge1$, $M_n\ge e^{t_n-\gamma}$. Applying (10) and (13),

\[
\epsilon_{\rm av}\le P\{S_n\le t_n\}+n^{-1/2}
\le u_n+B_0n^{-1/2}+n^{-1/2}
=\epsilon-n^{-1/2}.
\]

Since ε is fixed in $(0,1)$, $\Phi^{-1}$ is Lipschitz on a compact neighborhood of ε, and $u_n=\epsilon-O(n^{-1/2})$ gives $t_n=nC+\sqrt{nV_{\min}}\Phi^{-1}(\epsilon)-O(1)$. Consequently

\[
\ln M_n\ge nC+\sqrt{nV_{\min}}\Phi^{-1}(\epsilon)-\tfrac12\ln n-O(1).
\tag{14}
\]

This proves the average-error lower bound. For maximal error, retain only messages with $e_m\le\epsilon$. If $k$ messages are discarded, their total error is greater than $k\epsilon$, while the total code error is at most $M_n(\epsilon-n^{-1/2})$; hence the retained fraction is at least $n^{-1/2}/\epsilon$. Zero the removed decoder functions, so retained messages do not acquire additional error. The logarithmic size loss is at most $\tfrac12\ln n+\ln(1/\epsilon)$, giving the same expansion lower bound for maximal error. The average lower bound follows from the maximal-error code. With ε<1/2 two retained messages cannot use the same codeword: under the common output law their two decoder success probabilities would each exceed one half, contradicting $\sum_md_m\le1$.

## Converse for constant-composition codes

Let $P$ be an $n$-type and consider a code of $M$ words all of type $P$, with average error $e\le\epsilon_n$, where eventually we use $\epsilon_n=\epsilon+n^{-1/2}$. The likelihood sum in (7) has law independent of message. If $P$ lies within the δ-neighborhood of $\Pi$, take $\gamma=\tfrac12\ln n$ in (12), standardize $a=\ln M-\gamma$, and apply (8). With

\[
z=\frac{\ln M-\gamma-nI(P,W)}{\sqrt{nV(P,W)}},
\]

we obtain

\[
\Phi(z)\le F_L(\ln M-\gamma)+B n^{-1/2}
\le\epsilon+(B+2)n^{-1/2}.
\]

For fixed ε, choose $n$ large so the right side remains in a compact subinterval of $(0,1)$. Since the normal density is positive on the corresponding compact quantile interval, $\Phi^{-1}$ is Lipschitz there; for a constant $K_1$,

\[
z\le\Phi^{-1}(\epsilon)+K_1n^{-1/2},\qquad
\ln M\le nI(P,W)+\sqrt{nV(P,W)}\Phi^{-1}(\epsilon)+\tfrac12\ln n+O(1),
\tag{15}
\]

uniformly over every near-CAID type. This explicitly carries the $\epsilon+n^{-1/2}$ expurgation shift through the quantile; it is not silently replaced by ε.

Let $P^\circ$ be a nearest point of $\Pi$, and $d=\|P-P^\circ\|_2$. Put $a_\epsilon=-\Phi^{-1}(\epsilon)=Q^{-1}(\epsilon)>0$. The local Lipschitz property of $\sqrt{V}$, $V(P^\circ)\ge V_{\min}$, and $6$ imply for a constant $L$,

\[
nI(P,W)-a_\epsilon\sqrt{nV(P,W)}
\le nC-n\alpha d^2-a_\epsilon\sqrt{nV_{\min}}+a_\epsilon L\sqrt n\,d
\le nC-a_\epsilon\sqrt{nV_{\min}}+\frac{a_\epsilon^2L^2}{4\alpha}.
\tag{16}
\]

The last line maximizes the scalar quadratic $-\alpha u^2+a_\epsilon Lu$ at $u=d\sqrt n$. Combining (15)–(16) proves, uniformly over near types,

\[
\ln M\le nC+\sqrt{nV_{\min}}\Phi^{-1}(\epsilon)+\tfrac12\ln n+O(1).
\tag{17}
\]

No CAID uniqueness is used: $P^\circ$ can be any nearest point, its dispersion is at least $V_{\min}$, and the moment/Berry–Esseen constants are uniform over the whole compact CAID neighborhood.

For types at distance at least δ, compactness and continuity of $I$ give a fixed $\eta_0>0$ such that $I(P,W)\le C-\eta_0$, unless this far set is empty. For any such type, $7$ and the global variance bound imply by Chebyshev

\[
F_L(nI(P,W)+K\sqrt n)\ge1-B_2/K^2.
\]

Choose $K$ so that the right side is strictly greater than ε plus a fixed positive margin. For large $n$, this contradicts (12) if $\ln M-\tfrac12\ln n>nI(P,W)+K\sqrt n$, because the right side of (12) is at most $\epsilon+2n^{-1/2}$. Thus

\[
\ln M\le n(C-\eta_0)+K\sqrt n+\tfrac12\ln n,
\]

which is smaller than the right side of (17) for all sufficiently large $n$. This argument covers zero-variance far types too; it never applies Berry–Esseen where the variance may vanish.

Together (17) and the far-type bound prove a uniform $O(\ln n)$ converse for every constant-composition code whose average error is at most $\epsilon+n^{-1/2}$. They also cover a maximal-error type code with error at most ε.

## From arbitrary codes to one type; both error criteria

For an arbitrary average-error code with error at most ε, set $\delta_n=n^{-1/2}$. Retain messages with individual error at most $\epsilon+\delta_n$. If $k$ messages are removed, their total error exceeds $k(\epsilon+\delta_n)$, whereas total error is at most $M\epsilon$. Hence the retained fraction is at least

\[
\frac{\delta_n}{\epsilon+\delta_n}=\frac{1}{1+\epsilon\sqrt n}.
\]

There are at most $(n+1)^{|X|}$ types. One type subcode therefore has size at least $M\delta_n/[(\epsilon+\delta_n)(n+1)^{|X|}]$, and every retained message has error at most $\epsilon+\delta_n$. Set deleted decoder probabilities to zero; retained message errors do not increase. Apply the constant-composition converse to that type and add the logarithm of the displayed polynomial loss. This gives

\[
\ln M_{\rm av}^*(n,\epsilon)\le nC+\sqrt{nV_{\min}}\Phi^{-1}(\epsilon)+O(\ln n).
\]

Every maximal-error-ε code is also average-error-ε, so this is the maximal-error upper bound as well. In the other direction, the achievability construction and its expurgation gave a maximal-error code with the same expansion lower bound; its average error is no greater. Thus the asserted expansions hold under both criteria. The upward error shift in this converse costs $\ln[(\epsilon+\delta_n)/\delta_n]+|X|\ln(n+1)=O(\ln n)$; the downward shift and message expurgation in achievability also cost $O(\ln n)$.

## Source and supplier boundaries

- PPV, *Channel Coding Rate in the Finite Blocklength Regime*, complete author manuscript: Theorem 17, PDF pp. 15–16, supplies (9) and the corresponding average-error random-coding proof; Theorems 26–28, PDF pp. 27–30, supply the binary-testing/meta-converse interface. The threshold inequalities (10)–(12) are derived above, with the finite-alphabet support convention checked here. Theorem 49 gives the familiar DMC expansion but is not used as a proof substitute. PPV’s Appendix I proof of Theorem 48 Case 1 is explicitly known to have a gap and is not used.
- PW, *Information Theory: From Coding to Learning*, author prepublication: Ch. 5 output-radius/capacity identities and Thm. 22.2, printed pp. 435–437 / PDF pp. 460–462, give context and the stated finite-DMC target. Theorem 22.2 is a proof sketch, not the argument above.
- CT, *Comments on “Channel Coding Rate in the Finite Blocklength Regime”*, arXiv:2208.12945v2: Thm. 1 and its proof, PDF pp. 1–4, repair local quadratic decay near all finite-DMC CAIDs; §III, PDF pp. 5–6, treats finite linear constraints. The historical CT proof needs its full-simplex $J=\varnothing$ case handled separately; constrained versions require the affine translate $(p^*+V)\cap P_A$, nonempty feasible set, and outputs reachable from feasible inputs. This note’s unconstrained exact-KL/Pinsker route does not import the constrained theorem.
- Roman Vershynin, *Two Friendly Proofs of the Berry–Esseen Theorem*, arXiv:2602.06234v2, complete read, PDF pp. 1–9: the local r3 development in [`berry-essen-proof-notes.md`](berry-essen-proof-notes.md) proves the independent-array inequality used in (8) and the iid specialization used in (13), with the stated finite third moments and positive variance.
- The finite affine-slice estimate (5), exact KL identity (1), KKT support equality, uniform moment bounds, one-shot threshold steps, quantile inversion, type selection, and error transfers are proved in this note. At library authoring time their proposed interfaces are the finite polytope error-bound lemma, DMC capacity-output/saddlepoint and conditional-variance lemmas, uniform quadratic-capacity-gap theorem, one-shot DT/meta-converse theorems, and the r3 Berry–Esseen theorem; citations identify evidence but do not replace these local arguments. The divergence and sharp Pinsker inequality (natural-log convention) must be taken from their exact proved suppliers with their stated assumptions. No arbitrary-cost, continuous-alphabet, memory-channel, strong-converse, $\epsilon\ge1/2$, zero-dispersion, or $O(1)$ third-order extension follows from this proof.
