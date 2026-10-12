# SAMEcomponent rank-one defect: missing interval ABOVE duplicated beta rows

Author: `/root/repair_klr_global_basis/native24_schur_weight_gram_construction`.
Run: `frontier-44-special-representation-examples-28`.
Research-only local construction. This supplies the final missing-above orientation directly, including signed inverse sources and the top boundary. It is not an assertion that the missing-below proof transfers by symmetry. Parent alone reviews and binds the complete supplier.

**Binding weight scope.** The actual Schur algebra has multipartition summands and weights. The full polynomial and strip series with arbitrary composition monomials are auxiliary combinatorial tableau series. Their coefficients at actual multipartition weights are the required Kostka numbers and actual Schur weight determinants. No Schur module, summand, or weight idempotent for other compositions is asserted.

## 1. Exact defect data and cofactor signs

Use decreasing nonnegative beta lists $q_1>\cdots>q_N=0$, $p_1>\cdots>p_N=0$, with $N>n$, and the step matrix $H_{ij}=1_{q_i\ge p_j}$. Suppose $\operatorname{rank}H=N-1$, its missing row threshold is $r$, and its duplicated rows are $s,s+1$, with $r\le s$. Put

$$Q=q_s>Q'=q_{s+1},\qquad [P,P')=[p_r,p_{r-1}),\qquad P>Q,$$

where $P'=+\infty$ when $r=1$. This is precisely the missing-above orientation. Its cofactor vectors and common sign are

$$u=e_s-e_{s+1},\qquad v=e_r-e_{r-1},\qquad\varepsilon=(-1)^{s-r},\qquad\operatorname{adj}(H)=\varepsilon vu^{\mathsf T},$$

with the nonexistent $e_0$ omitted. A one-row replacement at position $l$ has determinant $\varepsilon u_l1_{P\le\mathrm{new}\ q<P'}$; a one-column replacement has determinant $\varepsilon v_l1_{Q'<\mathrm{new}\ p\le Q}$. To verify the sign, move the inserted missing row threshold from row $s$ to its sorted position $r$, crossing $s-r$ rows; inserting at the other duplicate row changes the sign. On the column side, inserting into column $r$ the missing column-end threshold $s$ crosses the same $s-r$ columns. Thus endpoint $P$ has sign $+$ and endpoint $P'$ has sign $-$, with the same $\varepsilon$.

Write $\phi(k)$, $k>0$, as independent formal symbols until the finite cancellation is proved. The exact samecomponent row expression is the signed sum over inward replacements $(q_i-h,q_j+h)$ with $i<j$ and $0<h<q_i-q_j$, weighted by $\phi(q_i-q_j-h)$. The inverse column expression is the signed outward replacement $(p_i+h,p_j-h)$, weighted by

$$\phi(p_i-p_j+h)-\phi(h).\tag{1}$$

Formula (1) includes both inward hook lengths from that source, whose exchanged target order changes the sign. These expressions were derived in the J constructor's current packet and are used without a discarded crossed-source term.

## 2. Top missing interval: both sides vanish directly

If $r=1$, then $q_1<P=p_1$, so no inward row replacement can reach the missing interval: both new positions lie strictly between their two original source positions and hence at most $q_1$. Every row determinant is zero. The base first column is zero. A nonzero two-column replacement must replace it; as the first column it is necessarily the earlier source, whose outward replacement raises its bead from $p_1$ to $p_1+h>q_1$. It therefore remains zero. Every column determinant is zero too. This proves the missing-top case without evaluating an infinite endpoint or a zero-residue symbol.

Henceforth let $r\ge2$, so $P'$ is finite.

## 3. Exhaustive repair assignments

A nonzero two-row determinant must remove one of the duplicated rows and insert the missing threshold. The second source row is unique, and its old threshold must also be restored. Both duplicated rows alone cannot repair the missing interval: their inward new positions remain below $Q<P$. A unique source at or below the missing interval cannot repair it either, because both new positions lie below the earlier source bead, which is itself below $P$. Thus the only unique row sources are the normally interlacing head rows $i\le r-1$, whose beads are at least $P'$.

For such $i$, the earlier source is $A=q_i$ and the later duplicated source is $B\in\{Q,Q'\}$. There are exactly two assignments:

* Direct: $A-h$ restores its own interval $[p_i,p_{i-1})$, and $B+h$ fills $[P,P')$.
* Exchange: $A-h$ fills $[P,P')$, and $B+h$ restores $[p_i,p_{i-1})$.

Their signs are $\varepsilon u_B$ and $-\varepsilon u_B$, respectively. Expanding the two replacement rows on the old unique threshold vector and the missing threshold vector gives exactly that direct-minus-exchange $2\times2$ determinant; every other threshold assignment leaves a missing or repeated base vector and vanishes.

For outward two-column sources, the affected endpoint must be the later, lowered source: raising either $P$ or $P'$ cannot reach the lower gap $(Q',Q]$. An earlier unique source column $i\le r-2$ raises within its own original interval $(q_{i+1},q_i]$, while endpoint $P$ or $P'$ lowers into the missing gap. The sign is $\varepsilon v_{\mathrm{endpoint}}$. The remaining possible pair consists of the endpoints themselves: $P'$ raises within their common old column threshold interval, and $P$ lowers into $(Q',Q]$. Its sign is $+\varepsilon$, because the actual repaired endpoint is $P$, with $v_r=+1$. No other pair can remove the duplicate columns and simultaneously fill the missing gap with outward moves. This classification retains both possible row target assignments and the full two-hook inverse coefficient (1).

Set

$$M_i=q_i-p_i\ge0\qquad(i\le r-1).$$

In the normal head, a row lowering within its own interval and a column raising within its own interval both have exactly $1\le h\le M_i$.

## 4. Direct terms match first potentials at the same index

For a fixed unique row $i\le r-1$, the direct sum is

$$R_i=\varepsilon\sum_{h=1}^{M_i}\left(1_{P\le Q+h<P'}\phi(q_i-Q-h)-1_{P\le Q'+h<P'}\phi(q_i-Q'-h)\right).$$

Writing the missing new position as $x=B+h$, the source-copy difference is $1_{x\le Q+M_i}-1_{x\le Q'+M_i}$. Therefore the exact interval form is

$$R_i=\varepsilon\sum_{d\in(q_i-P',q_i-P]\cap[p_i-Q,p_i-Q')}\phi(d).\tag{2}$$

All displayed $d$ are positive: the restored normal-head row remains above the missing interval.

For a unique column $i\le r-2$, split its inverse coefficient (1) into first and second potentials. Its first-potential sum is

$$C_i^{\mathrm{first}}=\varepsilon\sum_{h=1}^{M_i}\left(1_{Q'<P-h\le Q}\phi(p_i-P+h)-1_{Q'<P'-h\le Q}\phi(p_i-P'+h)\right).$$

Writing the new gap position as $y=E-h$, the endpoint difference is $1_{y\ge P-M_i}-1_{y\ge P'-M_i}$. With $d=p_i-y$ this becomes EXACTLY (2). Hence

$$R_i=C_i^{\mathrm{first}}\qquad(i\le r-2).\tag{3}$$

There is no reindexing as in the missing-below orientation; the head intervals match at the SAME index.

The second-potential sum is

$$C_i^{\mathrm{second}}=\varepsilon\sum_{h=1}^{M_i}\phi(h)\left(1_{Q'<P-h\le Q}-1_{Q'<P'-h\le Q}\right).\tag{4}$$

The actual column contribution is $C_i^{\mathrm{first}}-C_i^{\mathrm{second}}$.

## 5. Exchange assignments cancel the second potentials

In an exchange-row term put $k=A-B-h>0$. The new positions are $B+k$ in the missing interval and $A-k$ in the unique old interval. The own-interval condition is exactly $1\le k\le M_i$: its upper endpoint is automatic since $A=q_i<p_{i-1}$, and its lower endpoint gives $k\le q_i-p_i$. The signed exchange sum is

$$X_i=-\varepsilon\sum_{k=1}^{M_i}\phi(k)\left(1_{P\le Q+k<P'}-1_{P\le Q'+k<P'}\right).$$

The literal half-open/half-closed endpoint reciprocity is

$$1_{P\le Q+k<P'}-1_{P\le Q'+k<P'}=1_{Q'<P-k\le Q}-1_{Q'<P'-k\le Q}.$$

It follows by expressing each interval indicator as a difference of half-line indicators; all endpoints are integers, with precisely the shown strictness. Comparing with (4) gives

$$X_i=-C_i^{\mathrm{second}}\qquad(i\le r-1).\tag{5}$$

For every $i\le r-2$, equations (3) and (5) show $R_i+X_i-(C_i^{\mathrm{first}}-C_i^{\mathrm{second}})=0$ term by term. Thus the sole remaining row source is the boundary head row $r-1$, together with the two-endpoint column source.

## 6. The boundary head row and endpoint columns cancel exactly

Put

$$M=q_{r-1}-P'\ge0,\qquad B=P'-P>0,\qquad A=P-Q>0,\qquad L=Q-Q'>0,$$

and use the finite integer intervals

$$I_0=[A,A+L),\qquad I_1=I_0+B.$$

Formula (2) at $i=r-1$ gives

$$R_{r-1}=\varepsilon\sum_{d\in I_1\cap(M,M+B]}\phi(d).\tag{6}$$

Formula (4) at that same index is

$$C_{r-1}^{\mathrm{second}}=\varepsilon\sum_{h=1}^{M}\phi(h)\left(1_{I_0}(h)-1_{I_1}(h)\right).\tag{7}$$

For the endpoint pair, the upper endpoint $P'$ raises within its own threshold interval exactly when $h\le q_{r-1}-P'=M$. The lower endpoint $P$ lands in $(Q',Q]$ exactly when $h\in I_0$. Their source bead gap is $B$, and the repaired endpoint cofactor is positive. Its COMPLETE inverse contribution is therefore

$$C^{\mathrm{end}}=+\varepsilon\sum_{\substack{h\in I_0\\1\le h\le M}}\left(\phi(B+h)-\phi(h)\right).\tag{8}$$

This $+\varepsilon$ is essential; importing the missing-below endpoint sign would give the wrong expression.

The full residual commutator is $R_{r-1}+X_{r-1}-C^{\mathrm{end}}=R_{r-1}-C_{r-1}^{\mathrm{second}}-C^{\mathrm{end}}$. Substitute (6)–(8). The $\phi(h)$ terms on $I_0$ cancel, and the result is

$$\varepsilon\sum_{d\in I_1\cap[1,M+B]}\phi(d)-\varepsilon\sum_{\substack{h\in I_0\\1\le h\le M}}\phi(B+h)=0.$$

The equality is the explicit translation $d=h+B$. Since $A>0$, every integer in $I_1$ is at least $B+1$; the translated lower endpoint therefore agrees with the displayed positive-argument restriction. This proves cancellation of every formal coefficient, including $M=0$.

## 7. Result and integration boundary

The missing-above rank-one samecomponent commutator is zero, with explicit repair assignments, source signs, inverse two-hook coefficients, the top zero-column boundary, and the final finite-interval translation. Every retained $\phi$ argument is a positive integer, so $z^k-1$ is nonzero in every LM generic field. The formal identity specializes to the exact valuations in every characteristic, including their higher characteristic-$p$ multiplicities.

Together with the J constructor's missing-below and on-strip proofs, this supplies both rank-one orientations. The separate deficiency-two and higher-deficiency proof in this directory supplies the remaining off-strip ranks; J has complete crosscomponent on/off-strip constructions. These are research proof constructions that parent must read, check, and bind to the actual Murphy/S2 datum, monic Gram determinant, auxiliary tableau series, and actual multipartition weights before any supplier integration or native resolution. No acceptance is inferred merely from this completed local cancellation.
