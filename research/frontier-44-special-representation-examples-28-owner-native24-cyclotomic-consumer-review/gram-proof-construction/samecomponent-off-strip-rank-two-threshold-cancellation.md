# Samecomponent off-strip cancellation at step-matrix deficiency two

Author: `/root/repair_klr_global_basis/native24_schur_weight_gram_construction`.
Run: `frontier-44-special-representation-examples-28`.
Research-only local construction, coordinated with the J constructor. This proves the samecomponent commutator vanishing when the horizontal-strip step matrix has rank $N-2$, and also the immediate rank-$\le N-3$ case. It does not claim the remaining deficiency-one case; that stays with the J constructor. No native or consumer record was changed.

## 1. Exact two-row and outward-two-column expression

Choose $N>n$ and decreasing nonnegative beta lists $q_1>\cdots>q_N=0$ and $p_1>\cdots>p_N=0$. Set $H_{ij}=1_{q_i\ge p_j}$ and write $\phi(k)=\nu_{t-1}(z^k-1)$ for $k>0$. Work initially with independent formal symbols $\phi(k)$; the finite valuation specialization comes after cancellation.

The J constructor's signed beta formula gives the row side of the commutator as

$$\sum_{i<j}\sum_{h=1}^{q_i-q_j-1}\phi(q_i-q_j-h)\det H(q-he_i+he_j,p).\tag{1}$$

The inverse column side can be written uniformly as

$$\sum_{i<j}\sum_{h\ge1}\bigl(\phi(p_i-p_j+h)-\phi(h)\bigr)\det H(q,p+he_i-he_j).\tag{2}$$

Terms with a negative new bead or repeated new beads are zero. Both expressions are finite in the fixed size sector. Formula (2) accounts for both hook transfers from the same outward source: if its two changed bead values are $p_i+h$ and $p_j-h$, the inward lengths $h$ and $p_i-p_j+h$ yield the same target $p$, but the latter exchanges the two target beads and has the opposite sign. Their foot gaps are respectively $p_i-p_j+h$ and $h$. The remaining sorting sign is precisely the unsorted column determinant. Thus the coefficient is their difference as displayed, including the case $h=p_i-p_j$. It would be incorrect to discard crossed inverse sources before this pairing.

The assertion proved here is equality of (1) and (2) when $\operatorname{rank}H=N-2$. The common strip monomial is suppressed: every changed beta list has the same total as its original list, so both sides have the identical power of the new alphabet variable.

## 2. Threshold classification and the only potentially active pattern

For $v\ge0$ define its row threshold $\kappa(v)$ by

$$(1_{v\ge p_j})_{j=1}^N=(0,\ldots,0,1,\ldots,1),\qquad\text{first }1\text{ at }\kappa(v).$$

The threshold-$m$ interval is $I_m=[p_m,p_{m-1})$, with $p_0=+\infty$. Because $q_N=p_N=0$, every base row is nonzero. The base thresholds $\kappa(q_i)$ are nondecreasing. The vectors of different nonzero thresholds are independent (subtract successive threshold vectors), so the rank is their number. At deficiency two there are exactly two missing thresholds. The excess repetitions are either one triple, or two disjoint adjacent duplicate pairs.

A nonzero two-row replacement must remove exactly those excess copies and insert exactly the two missing threshold vectors. In (1), both new bead positions lie strictly between the original two source beads: $q_j<q_i-h<q_i$ and $q_j<q_j+h<q_i$. If the two removed rows came from one triple threshold, that entire interval between their bead positions has their already occupied threshold, so neither missing threshold can be supplied. Thus every term is zero in that case.

For two duplicate threshold values $r<s$, a nonzero term must remove one row from each duplicate pair. Every new position strictly between those source beads has threshold between $r$ and $s$ inclusive. Since $r,s$ are already occupied by the unchanged copies, the two missing thresholds must therefore satisfy

$$r<m_1<m_2<s.\tag{3}$$

If (3) fails, every row-side term vanishes.

The same condition is necessary for a nonzero outward two-column term. If the base first column is zero, it must be replaced; but it is necessarily the earlier source column, whose outward shift raises its bead still further above $q_1$, so it remains zero. Thus that boundary case has no nonzero term. To see this without assuming invertibility, the column at $v$ is $(1_{q_i\ge v})_i$, a prefix vector whose last $1$ index is $\ell(v)$. An outward replacement raises the bead in the earlier source column and lowers the bead in the later source column; its two new column-end indices respectively decrease and increase. A nonzero replacement must remove the two excess column copies and insert the two missing column-end values, so those missing ends lie strictly outside the two source repeated-end values, in opposite directions. Relate the two threshold lists by

$$\ell(p_j)=\#\{i:\kappa(q_i)\le j\}.$$

A duplicated row threshold is a jump of size two (or three) in this cumulative count; a missing row threshold is a flat step. Two outward column repairs require two separate size-two jumps, with both flat steps strictly between them. A size-three jump gives adjacent missing column ends with no repeated-end value strictly between them, so cannot be repaired outward. The size-two jumps at $r,s$ and the two intervening flats give exactly (3). This proves the column necessity and shows that all other deficiency-two patterns have both sides zero.

In the active pattern (3), the upper duplicate rows are $r,r+1$, and the lower duplicate rows are $s-1,s$. Write their bead positions as

$$Q=q_r>Q'=q_{r+1},\qquad R=q_{s-1}>R'=q_s.$$

Write the missing intervals as

$$I_1=[P,P')=[p_{m_1},p_{m_1-1}),\qquad I_2=[S,S')=[p_{m_2},p_{m_2-1}).$$

They satisfy $Q'\ge P'>P\ge S'>S>R$. The only missing column-end intervals are

$$J_Q=(Q',Q],\qquad J_R=(R',R].$$

The repeated column groups are columns $m_1-1,m_1$ and $m_2-1,m_2$. If $m_2=m_1+1$, these groups share a column and form a triple; the calculation below includes that case explicitly.

## 3. The exact cofactor signs

Set

$$\varepsilon=(-1)^{m_1-r+s-1-m_2}.$$

Replacing the first upper duplicate row $r$ by a threshold-$m_1$ row and the first lower duplicate row $s-1$ by a threshold-$m_2$ row gives determinant $\varepsilon$. Indeed moving the first new row from position $r$ to its sorted position $m_1$ crosses $m_1-r$ rows, and moving the second from position $s-1$ to $m_2$ crosses $s-1-m_2$ rows. These intervals of moves are disjoint because $m_1<m_2$. Switching which copy of either duplicated source is replaced changes the sign; swapping the two supplied missing thresholds also changes the sign. These statements follow alternatively by transposing the two equal base rows or the two inserted rows.

On the column side choose the lower endpoint $P=p_{m_1}$ from the first repeated group and $S=p_{m_2}$ from the second. Replace them by a column in $J_Q$ and a column in $J_R$, respectively. Moving the first new column from position $m_1$ to column-end position $r$, and the second from position $m_2$ to $s-1$, crosses the same numbers of columns. Its determinant is therefore the SAME $\varepsilon$. Replacing the other copy in either source group changes its sign. Thus the endpoint signs are $P:+$, $P':-$, $S:+$, $S':-$, with common factor $\varepsilon$.

## 4. Every formal coefficient cancels by endpoint reciprocity

For $k>0$ abbreviate

$$A_I(k)=1_{R+k\in I}-1_{R'+k\in I},\qquad B_I(k)=1_{Q-k\in I}-1_{Q'-k\in I}.$$

In (1) put $k=q_i-q_j-h$. Its new row positions are $q_j+k$ and $q_i-k$. The two missing intervals are strictly between the upper and lower source threshold intervals, so all nonzero indicators automatically imply $0<k<q_i-q_j$ and $h>0$; no guard has been dropped. The source-copy signs and the two possible assignments of the missing intervals give the COMPLETE coefficient of $\phi(k)$:

$$\varepsilon\bigl(A_{I_1}(k)B_{I_2}(k)-A_{I_2}(k)B_{I_1}(k)\bigr).\tag{4}$$

On the column side define

$$D_P^{\pm}(J;k)=1_{P\pm k\in J}-1_{P'\pm k\in J},\qquad D_S^{\pm}(J;k)=1_{S\pm k\in J}-1_{S'\pm k\in J}.$$

The positive $\phi(p_i-p_j+h)$ term in (2) at coefficient $\phi(k)$ has new column positions $p_j+k$ and $p_i-k$; the negative $\phi(h)$ term has positions $p_i+k$ and $p_j-k$. The first target must lie in $J_Q$, the second in $J_R$. The target intervals are above and below all source endpoint values, respectively, so these indicators automatically imply the required positive $h$. Cofactor signs therefore give the COMPLETE coefficient

$$\varepsilon\bigl(D_S^+(J_Q;k)D_P^-(J_R;k)-D_P^+(J_Q;k)D_S^-(J_R;k)\bigr).\tag{5}$$

If the two repeated column groups overlap, the formal product sum includes the common endpoint choice $p_i=p_j=P=S'$. It contributes zero: the positive and negative terms in (2) then have identical weight $\phi(h)-\phi(h)$. Consequently (5) remains exact; it has not assigned a two-column minor to one column twice.

For any $a<b$ and $c<d$ the elementary endpoint identity is

$$1_{a\le d+k<b}-1_{a\le c+k<b}=1_{c<a-k\le d}-1_{c<b-k\le d}.\tag{6}$$

It follows by expressing each interval indicator as a difference of half-line indicators and canceling, or by considering the four possible relative positions of the two interval endpoints. Applying (6) with $(a,b)=(P,P')$ and $(c,d)=(R',R)$ gives

$$A_{I_1}(k)=D_P^-(J_R;k).$$

The same substitution with $I_2$ gives $A_{I_2}(k)=D_S^-(J_R;k)$. Applying the reversed-shift version to $(Q',Q)$ gives

$$B_{I_1}(k)=D_P^+(J_Q;k),\qquad B_{I_2}(k)=D_S^+(J_Q;k).$$

Substitute these four literal indicator identities into (4). The resulting expression is exactly (5). Thus every formal coefficient $\phi(k)$ is equal on the row and column sides, proving (1)=(2) at deficiency two. This is an actual finite signed-minor cancellation, including adjacent missing thresholds and overlapping column groups.

## 5. Higher deficiency and exact boundary

If $\operatorname{rank}H\le N-3$, changing two rows or two columns can increase rank by at most two. Every determinant in (1) and (2) is therefore zero. Hence the samecomponent commutator also vanishes in that case.

All nonzero retained terms in the deficiency-two proof are valid exterior bead transfers; repeated or negative targets have already been assigned determinant zero. Since $k>0$, $z^k-1$ is nonzero in every LM generic field, so its finite valuation is legitimate, including the higher positive-characteristic value. Formal coefficient cancellation therefore specializes without any field restriction. The artificial infinite top interval never occurs in the active pattern, because $m_1>r\ge1$; the common padded zero bead prevents a missing last threshold. There is no hidden boundary term.

The only samecomponent off-strip case not proved by this note is $\operatorname{rank}H=N-1$. The on-strip case and deficiency-one case are owned by the J constructor. Parent alone binds the complete local commutator and accepts any resulting Gram/Jantzen supplier.
