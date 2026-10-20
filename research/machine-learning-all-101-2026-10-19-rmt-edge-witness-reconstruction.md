# Fixed-degree trace witnesses for the reverse covariance edge inequalities

Research proof reconstruction, 2026-10-19. This file supplies a local argument, not an item certification. No Marchenko–Pastur weak convergence, limiting empirical-distribution theorem, or limiting-support theorem is used. The sole separate probabilistic input is the coarse upper-norm bound stated below. All moment counting, almost-sure concentration, finite-moment transfer, and endpoint witnesses are proved here.

Let $(\xi_{ij})_{i,j\ge1}$ be one real iid array, with $E\xi=0$, $E\xi^2=1$, and $E\xi^4<\infty$. Let $p_n/n\to\gamma\in(0,\infty)$, let $X_n=(\xi_{ij})_{i\le n,j\le p_n}$, and put $A_n=X_n/\sqrt n$, $S_n=A_nA_n^T$. Write

$$a=(1-\sqrt\gamma)^2,\qquad b=(1+\sqrt\gamma)^2.$$

The eigenvalues used here include the $n-\operatorname{rank}X_n$ zeros. The positive eigenvalues agree with those of $X_n^TX_n/n$.

**External local-supplier contract.** Almost surely, $\limsup_n\|A_n\|<\infty$. This contract is only a coarse bound; it must be proved independently of the reverse edge inequalities or their moment witnesses. No sharp constant, lower singular-value bound, or norm bound for truncated arrays is needed. The parent reconstruction owns that supplier. Subject to that contract, everything below is complete. In fact, the rest needs only a finite second moment. Thus there is no circular dependence on the desired reverse edges.

The conclusions are

$$\liminf_n\lambda_{\max}(S_n)\ge b,\qquad \limsup_n\lambda_{\min}^{+}(S_n)\le a\quad\hbox{almost surely}.$$

Here the proof also shows that positive eigenvalues exist for all sufficiently large $n$. No eventual full-rank claim is required.

## 1. Bounded centered entries: expectation and exact tree counts

First replace $\xi$ by any bounded centered real iid entry $\eta$, of variance $v\ge0$. For a fixed integer $k\ge1$, set

$$T_{n,k}=\frac1n\operatorname{Tr}\left(\frac{Y_nY_n^T}{n}\right)^k=\frac1{n^{k+1}}\sum_{i_1,\ldots,i_k\le n}\sum_{j_1,\ldots,j_k\le p_n}\prod_{\ell=1}^k\eta_{i_\ell j_\ell}\eta_{i_{\ell+1}j_\ell},\qquad i_{k+1}=i_1.$$

Each summand is a length-$2k$ closed alternating walk on a bipartite graph: row labels and column labels are disjoint vertex types, and each distinct pair $(i,j)$ is an edge. Its graph is connected. An edge occurring once makes its expectation zero, by centering and independence. Every surviving walk therefore has at most $k$ distinct edges and at most $k+1$ vertices. There are finitely many equality patterns of the $2k$ vertex positions, with a bound depending only on $k$. A pattern with $r$ row and $s$ column vertices has exactly $(n)_r(p_n)_s$ injective labelings, and its summand expectations are uniformly bounded. Consequently, every pattern with $r+s\le k$ contributes $O(n^{-1})$ after normalization.

A pattern with $k+1$ vertices has exactly $k$ edges, its graph is a tree, and every edge is traversed exactly twice. The closed walk traverses each tree edge once in each direction. The order in which it first enters the children of each vertex makes this tree a rooted ordered tree, rooted at a row vertex. Conversely the contour walk of every such ordered tree supplies exactly one canonical equality pattern. This is a bijection: on a tree an edge cannot be left behind before its whole descendant excursion is completed, since that would force a third traversal. If the tree has $s$ odd-depth (column) vertices, its limiting labeling weight is $\gamma^s$, and its expectation is $v^k$.

For completeness, the tree count can be extracted without any random-matrix theorem. Let $R(z)$ count ordered trees rooted at a row, with an edge contributing $z$ and each column vertex contributing $\gamma$. Let $C(z)$ count column-rooted trees with the same weights, including the root-column weight. The ordered list of subtrees gives, as formal power series,

$$R=\frac1{1-zC},\qquad C=\frac\gamma{1-zR}.$$

Writing $H=R-1$, these equations give $C=\gamma+H$ and

$$H=z(1+H)(\gamma+H).$$

The formal coefficient identity for $H=z\Phi(H)$ is

$$[z^k]H=\frac1k[u^{k-1}]\Phi(u)^k.$$

One direct verification uses formal residues: substitute $z=u/\Phi(u)$ into $\operatorname{Res}H(z)z^{-k-1}dz$. The resulting residue is $\operatorname{Res}(u^{-k}\Phi^k-u^{-k+1}\Phi^{k-1}\Phi')du$; the second coefficient is $(k-1)/k$ times the first, by differentiating $\Phi^k$. This proves the identity, including $k=1$. Applying it gives

$$\mu_k(\gamma)=[z^k]H=\sum_{s=1}^k\frac1k\binom{k}{s}\binom{k}{s-1}\gamma^s.$$

Thus

$$ET_{n,k}\longrightarrow v^k\mu_k(\gamma).$$

This explicitly counts all leading patterns, and the argument above bounds all nonleading patterns. It does not assume a spectral limit.

## 2. Bounded entries: almost-sure concentration at every fixed degree

For a label assignment $w$, let $M_w$ be its walk monomial and $Z_w=M_w-EM_w$. Expand the fourth centered moment as a sum of $E(Z_{w_1}Z_{w_2}Z_{w_3}Z_{w_4})$, with normalization $n^{-4k-4}$.

Join two of the four walks when their sets of matrix entries share an edge. A walk isolated in this graph is independent of the other three monomials, so its centered factor makes the expectation zero. Therefore every surviving configuration has at most two clusters of walks. Each cluster has a connected union graph because its walks are individually connected and consecutive walks in the cluster share an edge.

Moreover, no matrix-entry edge can occur just once in the total $8k$ factors. Indeed, if that edge occurs in $M_{w_t}$, then $EM_{w_t}=0$, so $Z_{w_t}=M_{w_t}$, and conditioning on all other entries makes the expectation zero. Thus a surviving configuration has at most $4k$ distinct edges. Its number of distinct vertices is at most the sum over its clusters of (edges plus one), hence at most $4k+2$. Sharing vertices between different edge-clusters only reduces this bound.

There are finitely many patterns at this fixed $k$. Bounded entries bound every centered product expectation by a constant depending only on $k$ and the entry bound. With $p_n=O(n)$, the count of labelings is $O(n^{4k+2})$. Therefore

$$E|T_{n,k}-ET_{n,k}|^4=O(n^{-2}).$$

Markov's inequality and the first Borel–Cantelli lemma show $T_{n,k}-ET_{n,k}\to0$ almost surely. Intersecting over all integer $k\ge1$ proves simultaneous fixed-degree trace convergence for bounded entries. Neither independence between different $n$ nor a monotone sequence $p_n$ was assumed.

## 3. Two elementary tools for transfer to finite second moments

**Rectangular strong law.** For every integrable iid nonnegative array $Z_{ij}$,

$$\frac1{n^2}\sum_{i\le n,j\le p_n}Z_{ij}\longrightarrow\gamma EZ\quad\hbox{almost surely}.$$

To prove this, for each positive rational $t$ enumerate the cells of the nested rectangles $[m]\times[\lfloor tm\rfloor]$ in their successive increments. This is an enumeration of the whole quadrant, so the ordinary one-dimensional iid strong law applies at the rectangle cardinalities. It gives the limit $tEZ$ after division by $m^2$. Intersect these probability-one events over rational $t$. Bracket $p_n/n$ between rationals $t_-<\gamma<t_+$ and use nonnegativity, then let $t_\pm\to\gamma$. This proof accommodates arbitrary $p_n/n\to\gamma$.

**Singular-value comparison.** For two real rectangular matrices $A,B$ of the same dimensions, pad their ordered singular-value lists with zeros to length $n$ when forming $AA^T,BB^T$. Then

$$\sum_{i=1}^n(s_i(A)-s_i(B))^2\le\|A-B\|_F^2.$$

Here is an elementary proof of the underlying comparison. For symmetric matrices $U,V$ of dimension $d$ with ordered eigenvalues $\alpha,\beta$, orthogonal diagonalization expresses $\operatorname{Tr}(UV)$ as $\sum_{ij}\alpha_i\beta_jd_{ij}$, where $d_{ij}$ is the square of an orthogonal overlap and its row and column sums are one. For descending real sequences, this sum is at most $\sum_i\alpha_i\beta_i$: set $c_i=\sum_jd_{ij}\beta_j$; the sum of its first $r$ entries is at most the sum of the first $r$ entries of $\beta$, because the associated column weights lie in $[0,1]$ and sum to $r$. Summation by parts against descending $\alpha$, with equal total sums, proves the assertion. Expanding $\operatorname{Tr}(U-V)^2$ now bounds it below by $\sum_i(\alpha_i-\beta_i)^2$. Apply this result to the symmetric dilations

$$\begin{pmatrix}0&A\\A^T&0\end{pmatrix},\qquad \begin{pmatrix}0&B\\B^T&0\end{pmatrix}.$$

Their eigenvalues are the singular values, their negatives, and the required zeros. Both sides acquire a factor two, proving the comparison.

For $k\ge1$, the scalar factorization and Cauchy–Schwarz consequently give

$$\left|\frac1n\sum_i s_i^{2k}-\frac1n\sum_i t_i^{2k}\right|\le2k\left(\frac{\|A-B\|_F^2}{n}\right)^{1/2}\left[\frac2n\sum_i(s_i^{4k-2}+t_i^{4k-2})\right]^{1/2}.$$

Indeed $|s^{2k}-t^{2k}|\le2k|s-t|(s^{2k-1}+t^{2k-1})$ for nonnegative $s,t$; squaring the last parenthesis is bounded by twice the sum of the squares. This inequality needs no operator-norm bound on $B$.

## 4. Finite-moment trace convergence using only the original coarse norm bound

For integer $K\ge1$, put

$$m_K=E[\xi\mathbf1_{|\xi|\le K}],\qquad \eta^{(K)}=\xi\mathbf1_{|\xi|\le K}-m_K,\qquad v_K=E(\eta^{(K)})^2.$$

Then $0\le v_K\le1$ and $v_K\to1$. The residual $r_K=\xi-\eta^{(K)}$ has second moment

$$\delta_K^2=Er_K^2=E[\xi^2\mathbf1_{|\xi|>K}]-m_K^2\longrightarrow0.$$

Let $B_n^{(K)}$ be the normalized matrix of these bounded centered entries, constructed from the same original array. On one probability-one event, Sections 1–2 give for every integer $K$ and every integer $j\ge1$

$$\frac1n\operatorname{Tr}(B_n^{(K)}B_n^{(K)T})^j\longrightarrow v_K^j\mu_j(\gamma).$$

The rectangular strong law, applied to $r_K^2$, also gives simultaneously in $K$

$$\frac1n\|A_n-B_n^{(K)}\|_F^2\longrightarrow\gamma\delta_K^2.$$

Intersect this event with the original coarse-norm event. For each outcome in the intersection there is a finite $C$ such that $\|A_n\|\le C$ eventually. Thus the $s_i^{4k-2}$ average in the comparison inequality is at most $C^{4k-2}$. The $t_i^{4k-2}$ average converges to $v_K^{2k-1}\mu_{2k-1}(\gamma)\le\mu_{2k-1}(\gamma)$. Consequently

$$\limsup_n\left|\frac1n\operatorname{Tr}S_n^k-v_K^k\mu_k(\gamma)\right|\le2k\sqrt{\gamma}\,\delta_K\sqrt{2(C^{4k-2}+\mu_{2k-1}(\gamma))}.$$

Let $K\to\infty$. This proves, simultaneously for every fixed positive integer $k$,

$$\frac1n\operatorname{Tr}S_n^k\longrightarrow\mu_k(\gamma)\quad\hbox{almost surely}.$$

In particular $n^{-1}\operatorname{Tr}S_n\to\gamma>0$, so eventually there is at least one positive eigenvalue. Every fixed polynomial with zero constant term has its normalized trace limit by linearity. There is no triangular truncation, hidden high-moment assumption, or appeal to an empirical-distribution limit.

## 5. An explicit integral representing these positive moments

Set $c=1+\gamma$, $d=2\sqrt\gamma$, so $a=c-d$, $b=c+d$, and define on $(a,b)$

$$w(x)=\frac1{2\pi}\sqrt{(b-x)(x-a)}.$$

We prove the exact positive-moment identity

$$\mu_k(\gamma)=\int_a^b x^{k-1}w(x)\,dx\qquad(k\ge1).$$

This is only an identity for explicit numbers and integrals. No probability measure or spectral support theorem is asserted or used.

For real $z>0$ sufficiently small, substitute $x=c+d\cos\theta$. The generating function of the right-hand side is

$$z\int_a^b\frac{w(x)}{1-zx}\,dx=\frac{zd^2}{2\pi}\int_0^\pi\frac{\sin^2\theta}{1-cz-dz\cos\theta}\,d\theta.$$

For $u>|v|$, substitution $t=\tan(\theta/2)$ directly gives $\int_0^\pi(u-v\cos\theta)^{-1}d\theta=\pi/\sqrt{u^2-v^2}$. Polynomial division in $\cos\theta$ then gives

$$\int_0^\pi\frac{\sin^2\theta}{u-v\cos\theta}\,d\theta=\frac\pi{v^2}\left(u-\sqrt{u^2-v^2}\right),$$

with its continuous value when $v=0$. Hence the generating function above equals

$$\frac{1-cz-\sqrt{(1-cz)^2-4\gamma z^2}}{2z}.$$

It is analytic near zero, vanishes there, and solves $H=z(1+H)(\gamma+H)$. The formal equation uniquely determines the coefficients recursively, so these coefficients equal the tree counts of Section 1. Expansion under the integral is justified by the uniformly convergent geometric series on $[a,b]$ for small $z$. This proves the identity, also when $a=0$.

Consequently, for every polynomial $P$ with $P(0)=0$,

$$\frac1n\operatorname{Tr}P(S_n)\longrightarrow\int_a^b\frac{P(x)}x w(x)\,dx.$$

At $a=0$, the quotient is the polynomial obtained by canceling the factor $x$, so there is no singularity to interpret.

## 6. Upper-edge reverse inequality from one fixed polynomial at a time

Fix $L$ with $0<L<b$. For an integer $q\ge0$ use $P_q(x)=x^{q+1}(x-L)$. Its trace limit is

$$I_q=\int_a^b x^q(x-L)w(x)\,dx.$$

Choose $\max(a,L)<t<u<b$. The positive contribution from $[t,u]$ is at least $t^q(t-L)\int_t^u w(x)dx$. The absolute negative contribution, supported in $[a,L]$ when that interval is nonempty, is at most $L^q L\int_a^b w(x)dx$. Since $t>L$ and $w>0$ on $(a,b)$, $I_q>0$ for some finite integer $q$ (and for all sufficiently large $q$). If $L\le a$, positivity follows directly.

If all eigenvalues of $S_n$ were at most $L$, every summand $P_q(\lambda)$ would be nonpositive, contradicting the eventually positive normalized trace. Thus $\lambda_{\max}(S_n)>L$ for all sufficiently large $n$. Intersecting over a countable sequence $L\uparrow b$ gives $\liminf\lambda_{\max}\ge b$.

## 7. Lower-positive-edge reverse inequality, including the square case

Fix $U>a$. If desired replace $U$ by a smaller number in $(a,b)$; proving the stronger bound for that smaller threshold proves the original bound. Thus assume $a<U<b$. Choose a fixed $B>b$ and use the polynomial

$$Q_q(x)=x(U-x)(B-x)^{2q},\qquad q\ge0.$$

For every $x\ge0$, it vanishes at $0$, is nonpositive for $x\ge U$, and is positive for $0<x<U$ except at the irrelevant zero of the even factor. Its trace limit is

$$J_q=\int_a^b(U-x)(B-x)^{2q}w(x)\,dx.$$

Choose $a<t<u<U$. The positive contribution on $[t,u]$ is at least

$$(U-u)(B-u)^{2q}\int_t^u w(x)dx.$$

The absolute negative contribution on $[U,b]$ is at most

$$(b-U)(B-U)^{2q}\int_a^b w(x)dx.$$

Because $B-u>B-U>0$ and the positive interval has positive integral, $J_q>0$ for some finite integer $q$. If $S_n$ had no positive eigenvalue below $U$, all its eigenvalues would be either $0$ or at least $U$, and therefore $\operatorname{Tr}Q_q(S_n)\le0$. The positive limiting trace excludes this for every sufficiently large $n$. Hence $\lambda_{\min}^{+}(S_n)<U$ eventually. Let $U\downarrow a$ through a countable sequence to obtain $\limsup\lambda_{\min}^{+}\le a$.

For $\gamma=1$, $a=0$. The same argument chooses $0<t<u<U$ and proves an eventually positive eigenvalue below every prescribed $U>0$. The factor $x$ removes every exact zero eigenvalue, including arbitrary extra rank defects, so no rank theorem or lower-rank estimate is concealed in this case. Since eigenvalues are nonnegative, this also proves $\lambda_{\min}^{+}\to0$ in the square-aspect-ratio case.

## Dependency and completion assessment

The only remaining supplier for application to the finite-fourth-moment model is the independently proved eventual coarse bound on $\|X_n/\sqrt n\|$. The trace-moment and reverse-edge arguments above are complete conditional on that stated supplier. They do not invoke, prove, or presuppose Marchenko–Pastur weak convergence. The weighted semicircle integral in Section 5 is derived directly from an elementary integral and the exact tree generating function. No literature citation stands in for any step of the reconstruction. No source-reading claim is made: the available Bai–Silverstein PDF was not needed for this independent argument.
