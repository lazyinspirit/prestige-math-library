# Index-complete truncation and prefix T recursion

This completes the existing construction pass. It is not a new repair cycle or native acceptance. Actually read BK109 original (2.6)–(2.10), (2.60), and §3.7 Lemmas3.3–3.6 in the freshly fetched fulltext `evidence/bk109.txt`; it was extracted from `evidence/bk109.pdf` with PyMuPDF. The original true-product source notes and BK5 pp17–20 remain actual read context.

## 1. The diagonal sign and coefficient index

Use $A_i(u)=D_i(u)^{-1}=\sum_{t\ge0}A_i^{(t)}u^{-t}$ with $A_i^{(0)}=1$. The source uses $\widetilde D_i(u)=-A_i(u)$, so $\widetilde D_i^{(0)}=-1$. Its defining simple E–F relation, reproduced locally, is

$$[E_i^{(a)},F_i^{(b)}]=\sum_{t=0}^{a+b-1}\widetilde D_i^{(t)}D_{i+1}^{(a+b-1-t)}=-D_{i+1}^{(a+b-1)}-\sum_{t=1}^{a+b-1}A_i^{(t)}D_{i+1}^{(a+b-1-t)}.$$

For $i=c-1$, put $v=s_{c,c-1}$, $u=s_{c-1,c}$, $a=r-v$, $b=v+1$. Then $a+b-1=r$ EXACTLY, and

$$D_c^{(r)}=-\sum_{t=1}^{r}A_{c-1}^{(t)}D_c^{(r-t)}-[E_{c-1}^{(r-v)},F_{c-1}^{(v+1)}].$$

This is used to eliminate $r>p_c=p_{c-1}+u+v$, so $a=r-v>p_{c-1}+u\ge u$ and both E and F indices are allowed. The upper E is above its finite bound, which is precisely why it is eliminated BEFORE this formula is used to eliminate the diagonal. No inverse-D sign convention is hidden. The formal inverse coefficients themselves satisfy $A_i^{(r)}=-\sum_{t=1}^rD_i^{(t)}A_i^{(r-t)}$ and are polynomials in diagonal coefficients of mode at most r.

## 2. Actual finite-mode induction in the abstract quotient

Work in $Y_n(\sigma)/(D_1^{(r)},r>p_1)$. Let $\Omega_c$ consist of all D modes $1\le a\le c$, $1\le r\le p_a$; E roots $a<b\le c$, $s_{ab}<r\le s_{ab}+p_a$; and F roots $a<b\le c$, $s_{ba}<r\le s_{ba}+p_a$. Let $B_c$ be their algebra. We prove every allowed root/diagonal mode with endpoints at most c lies in $B_c$, expressible with total canonical degree at most its original index. For $c=1$ this is the actual imposed truncation, including $p_1=0$.

Suppose this is known for $c-1$. Fix $u=s_{c-1,c}$, $v=s_{c,c-1}$. For any $r>u+p_{c-1}$ the D–E relation with modes $r-u$ and $u+1$ gives

$$E_{c-1}^{(r)}=[D_{c-1}^{(r-u)},E_{c-1}^{(u+1)}]-\sum_{t=1}^{r-u-1}D_{c-1}^{(t)}E_{c-1}^{(r-t)}.$$

Reduce every displayed earlier D by the block-$c-1$ hypothesis. Expand the commutator of its resulting polynomial by Leibniz. The bracket of a finite earlier D mode of index a with $E_{c-1}^{(u+1)}$ is a sum of $D^{(t)}E_{c-1}^{(a+u-t)}$, with $a\le p_{c-1}$ in its only nonzero diagonal block, so every new E index is at most $u+p_{c-1}$. The bracket of an earlier positive root ending in $c-1$, $E_{b,c-1}^{(a)}$, is the root $E_{b,c}^{(a+u)}$, possibly with the lower split terms in a block refinement; $a\le s_{b,c-1}+p_b$ gives $a+u\le s_{b,c}+p_b$ by shift additivity. Earlier negative roots commute with this lowest boundary positive mode, as do earlier roots whose endpoint is not $c-1$. The block-refinement split terms involve only modes within these same bounds. Thus every term in this expanded commutator belongs to $B_c$; each has canonical degree at most r. In the remaining sum $r-t<r$ and $r-t\ge u+1$, so induction on r reduces all those E modes. This proves every simple boundary E mode lies in $B_c$. The reversed D–F relation gives the identical argument with bound $v+p_{c-1}$ and the factors in reversed order.

For $b<c-1$, define the new higher root by

$$E_{b,c}^{(r)}=[E_{b,c-1}^{(r-u)},E_{c-1}^{(u+1)}],\qquad F_{c,b}^{(r)}=[F_{c-1}^{(v+1)},F_{c-1,b}^{(r-v)}].$$

Their earlier endpoint modes reduce by the block hypothesis. The same Leibniz expansions just described produce new roots of indices at most $s_{b,c}+p_b$ or $s_{c,b}+p_b$ and earlier factors already in $B_{c-1}$. Hence all new higher roots, including their modes above those bounds, lie in $B_c$ with the required degree control. This step uses the finite allowed new higher roots as generators of $B_c$, not any W-PBW assertion.

Now eliminate $D_c^{(r)}$ for $r>p_c$ using §1. Its inverse earlier D factor lies in $B_{c-1}$, and every $D_c^{(r-t)}$ has smaller mode, so induction on r handles the sum. First replace $E_{c-1}^{(r-v)}$ in its commutator by the finite expression just obtained. Expand its bracket with the lowest boundary F. Brackets with earlier D/F factors give bounded new F roots and earlier factors; earlier E factors commute with the boundary F. A finite new E root starting at $c-1$ has index $a\le u+p_{c-1}$, so its E–F convolution contains only $D_c$ modes of index at most $a+v\le p_c$. A new E root starting in $b<c-1$ gives a root with endpoint $c-1$ and earlier factors, all reduced by the block hypothesis; it cannot produce a new high $D_c$ mode. Thus the commutator is in $B_c$ using only $D_c$ indices at most $p_c$. All resulting products have total canonical degree at most r. This completes the two-level induction. Commutator straightening of the finite generators, with canonical-degree lowering and these eliminations, then spans the quotient by their ordered monomials. No restriction-of-infinite-PBW inference is used.

## 3. Exact original prefix T recursion

Let $\lambda_m$ consist of the first m columns of the ORIGINAL decreasing-column pyramid, and $I_{m-1}:U(\mathfrak g_{m-1})\hookrightarrow U(\mathfrak g_m)$ be the ordinary top-left box embedding in the UNSHIFTED chart. Put $Q_m=\sum_{a\le m}q_a$. Let $b_m(j)$ denote the box in row j of column m, defined iff $j>n-q_m$. Set coefficient zero for negative index and $T_{ij}^{(0)}=\delta_{ij}$. The exact coefficient identity is, for $r>0$,

$$T_{ij}^{(r)}(\lambda_m)=I_{m-1}(T_{ij}^{(r)}(\lambda_{m-1}))-\sum_{\substack{1\le h\le n-q_m\\s_{hj}\le r}}I_{m-1}(T_{ih}^{(r-s_{hj})}(\lambda_{m-1}))I_{m-1}(T_{hj}^{(s_{hj})}(\lambda_{m-1}))+\sum_{h>n-q_m}I_{m-1}(T_{ih}^{(r-1)}(\lambda_{m-1}))E_{b_m(h),b_m(j)}-[I_{m-1}(T_{ij}^{(r-1)}(\lambda_{m-1})),E_{b_{m-1}(j),b_m(j)}].$$

The final THREE terms (the shorter-row subtraction, Levi sum, and commutator) are omitted when $j\le n-q_m$. A nonexistent box omits its corresponding summand. The $s_{hj}$ in the sum is the ORIGINAL m-column shift. This formula is in the ordinary, unshifted matrix units; no rho factor or scalar chart multiplier has been inserted.

Here is its coefficient derivation, independent of any cutoff. In the minimal admissible Gauss blocks, deletion leaves F and every D/E whose terminal block is earlier than the last block unchanged. For the last block it gives $D^{(r)}=I(D^{(r)})+\sum I(D^{(r-1)})E_{last,last}-[I(D^{(r-1)}),E_{prev,last}]$. The corresponding E relation has the same last two terms but starts with the smaller coefficient $\bar E^{(r)}$. Its precise subtraction is

$$\bar E_{a,m}(u)=E_{a,m}(u)-\sum_{c=a}^{m-1}E_{a,c}(u)E_{c,m}^{(\dot s_{cm}+1)}u^{-\dot s_{cm}-1}.$$

Here every E in the subtraction is a smaller-diagram coefficient and $\dot s$ denotes its smaller shift, so $\dot s_{cm}+1=s_{cm}$ for a shorter block c and terminal block m. Insert these identities into the coefficient of $u^{-r}$ of $T_{ij}(u)=\sum_{c\le\min(a,b)}(F_{c,a}(u)D_c(u)E_{c,b}(u))_{ij}$. The unchanged terms give the first embedded T. The $\bar E$ subtractions group by their shorter terminal row h into the displayed product with mode split $(r-s_{hj},s_{hj})$, because the smaller diagram's terminal shift is $s_{hj}-1$, so its first E coefficient has mode $s_{hj}$. The last-column products group into the Levi sum; their common positive bridge is in column pair $(m-1,m)$ and Leibniz groups them into the SINGLE displayed commutator with $I(T_{ij}^{(r-1)})$. Higher-root end relations follow by the same adjacent-root commutator recursion; its previous-block coefficient commutes with that terminal bridge by its endpoint support, so no omitted bridge bracket remains. These steps establish the actual prefix identity; vanishing is only a later consequence.

## 4. Every term above the T bound vanishes

For the original decreasing-column pyramid, $S_{ij}=s_{ij}+\min(p_i,p_j)=p_j$ for EVERY ordered row pair. Induct on m; the one-column T has degree at most one directly, and an empty row gives only its diagonal constant. If $j\le n-q_m$, row j is not in the removed column, so its length is unchanged; the prefix recursion is just the first embedded T and the induction hypothesis kills it for $r>p_j$.

If j is a bottom row in the removed column, $p_j=m$. The first embedded term is zero when $r>m$, since its smaller target-row length is $m-1$. In a shorter-row product indexed by h, $p_h$ is unchanged and $s_{hj}=m-p_h$. Thus $r-s_{hj}>p_h=S_{ih}(\lambda_{m-1})$ for ANY i; the first factor is zero by induction, regardless of whether the second factor survives. Every row h in the Levi sum has smaller length $m-1$, and $r-1>m-1=S_{ih}(\lambda_{m-1})$ kills that factor. The commutator likewise contains $T_{ij}^{(r-1)}$ above its smaller bound $m-1$ and is zero. These inequalities cover every summand, including r=m+1. Therefore $T_{ij}^{(r)}=0$ for $r>S_{ij}$. Reflection obtains the analogous cutoff with $S'_{ij}=S_{ji}$ by the proved all-path transpose map after whole original/reflected generation; it does not assume reflected generation to prove it. Ordinary FDE shift additivity proves the lower cutoff $0<r\le s_{ij}$ coefficientwise.

The finite Gauss-to-T symbol change is triangular in the actual mode index: its diagonal coefficient is one and every remaining term is a product of smaller mode indices of total canonical degree r. The just-proved upper cutoff and the finite Gauss eliminations from §2 close both coefficientwise inversions on precisely the finite set. Consequently the finite T modes have the same canonical symbol polynomial algebra and ordered filtered basis, with no rescaling $u^{s_{ij}}$.
