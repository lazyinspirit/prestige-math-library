---
id: lem-fixed-degree-covariance-trace-and-edge-witnesses
kind: lemma
title: "Fixed-degree covariance trace moments and independent edge witnesses"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - thm-kolmogorov-iid-l1-strong-law
  - thm-singular-value-decomposition
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-first-borel-cantelli-lemma-for-events
  - cor-markov-inequality-for-random-variables
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, second edition, Chapters 3 and 5 (source context for the local reconstruction)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite real iid array with $E\xi_{11}=0$, $E\xi_{11}^2=1$ and $E|\xi_{11}|^2<\infty$. Let $p_n/n\to\gamma\in(0,\infty)$, $X_n=(\xi_{ij})_{i\le n,j\le p_n}$ and $G_n=X_nX_n^{\mathsf T}/n$. Suppose almost surely $\limsup_n\|X_n/\sqrt n\|_{\mathrm{op}}<\infty$. For every fixed integer $k\ge1$, almost surely
$$\frac1n\operatorname{Tr}G_n^k\longrightarrow\mu_k(\gamma):=\sum_{s=1}^k\frac1k\binom{k}{s}\binom{k}{s-1}\gamma^s.$$
Positive eigenvalues exist eventually and, with $a=(1-\sqrt\gamma)^2$ and $b=(1+\sqrt\gamma)^2$, almost surely
$$\liminf_n\lambda_{\max}(G_n)\ge b,\qquad\limsup_n\lambda_{\min}^{+}(G_n)\le a.$$
The edge conclusions follow from fixed polynomial trace witnesses and do not assume a weak empirical spectral limit.

## Statement references

Bai and Silverstein, Chapters 3 and 5 ([complete book](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)); the argument below supplies its own counting and probability estimates.

## Facts & Assumptions

[F1] The integrable iid strong law is [[thm-kolmogorov-iid-l1-strong-law]]. The iid array convention is [[def-identically-distributed-and-iid-random-variables]].

[F2] The finite-dimensional spectral theorem and SVD are [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and [[thm-singular-value-decomposition]].

[F3] Markov's inequality is [[cor-markov-inequality-for-random-variables]] and the first Borel–Cantelli lemma is [[cor-first-borel-cantelli-lemma-for-events]].

## Proof

**Given:** The objects and hypotheses in the statement. Write $A_n=X_n/\sqrt n$ and $S_n=G_n$. For a bounded centered iid array $(\eta_{ij})$, write $Y_n=(\eta_{ij})_{i\le n,j\le p_n}$.

1.1 First replace $\xi$ by any bounded centered real iid entry $\eta$, of variance $v\ge0$. For a fixed integer $k\ge1$, set $$T_{n,k}=\frac1n\operatorname{Tr}\left(\frac{Y_nY_n^T}{n}\right)^k=\frac1{n^{k+1}}\sum_{i_1,\ldots,i_k\le n}\sum_{j_1,\ldots,j_k\le p_n}\prod_{\ell=1}^k\eta_{i_\ell j_\ell}\eta_{i_{\ell+1}j_\ell},\qquad i_{k+1}=i_1.$$ [given, F1, F2, F3, algebra]

2.1 Each summand is a length-$2k$ closed alternating walk on a bipartite graph: row labels and column labels are disjoint vertex types, and each distinct pair $(i,j)$ is an edge. Its graph is connected. An edge occurring once makes its expectation zero, by centering and independence. Every surviving walk therefore has at most $k$ distinct edges and at most $k+1$ vertices. There are finitely many equality patterns of the $2k$ vertex positions, with a bound depending only on $k$. A pattern with $r$ row and $s$ column vertices has exactly $(n)_r(p_n)_s$ injective labelings, and its summand expectations are uniformly bounded. Consequently, every pattern with $r+s\le k$ contributes $O(n^{-1})$ after normalization. [given, F1, F2, F3, algebra, step 1.1]

3.1 A pattern with $k+1$ vertices has exactly $k$ edges, its graph is a tree, and every edge is traversed exactly twice. The closed walk traverses each tree edge once in each direction. The order in which it first enters the children of each vertex makes this tree a rooted ordered tree, rooted at a row vertex. Conversely the contour walk of every such ordered tree supplies exactly one canonical equality pattern. This is a bijection: on a tree an edge cannot be left behind before its whole descendant excursion is completed, since that would force a third traversal. If the tree has $s$ odd-depth (column) vertices, its limiting labeling weight is $\gamma^s$, and its expectation is $v^k$. [given, F1, F2, F3, algebra, step 2.1]

4.1 For completeness, the tree count can be extracted without any random-matrix theorem. Let $R(z)$ count ordered trees rooted at a row, with an edge contributing $z$ and each column vertex contributing $\gamma$. Let $C(z)$ count column-rooted trees with the same weights, including the root-column weight. The ordered list of subtrees gives, as formal power series, $$R=\frac1{1-zC},\qquad C=\frac\gamma{1-zR}.$$ [given, F1, F2, F3, algebra, step 3.1]

5.1 Writing $H=R-1$, these equations give $C=\gamma+H$ and $$H=z(1+H)(\gamma+H).$$ [given, F1, F2, F3, algebra, step 4.1]

6.1 The formal coefficient identity for $H=z\Phi(H)$ is $$[z^k]H=\frac1k[u^{k-1}]\Phi(u)^k.$$ [given, F1, F2, F3, algebra, step 5.1]

7.1 One direct verification uses formal residues: substitute $z=u/\Phi(u)$ into $\operatorname{Res}H(z)z^{-k-1}dz$. The resulting residue is $\operatorname{Res}(u^{-k}\Phi^k-u^{-k+1}\Phi^{k-1}\Phi')du$; the second coefficient is $(k-1)/k$ times the first, by differentiating $\Phi^k$. This proves the identity, including $k=1$. Applying it gives $$\mu_k(\gamma)=[z^k]H=\sum_{s=1}^k\frac1k\binom{k}{s}\binom{k}{s-1}\gamma^s.$$ [given, F1, F2, F3, algebra, step 6.1]

8.1 Thus $$ET_{n,k}\longrightarrow v^k\mu_k(\gamma).$$ This explicitly counts all leading patterns, and the argument above bounds all nonleading patterns. It does not assume a spectral limit. [given, F1, F2, F3, algebra, step 7.1]

9.1 For a label assignment $w$, let $M_w$ be its walk monomial and $Z_w=M_w-EM_w$. Expand the fourth centered moment as a sum of $E(Z_{w_1}Z_{w_2}Z_{w_3}Z_{w_4})$, with normalization $n^{-4k-4}$. [given, F1, F2, F3, algebra, step 8.1]

10.1 Join two of the four walks when their sets of matrix entries share an edge. A walk isolated in this graph is independent of the other three monomials, so its centered factor makes the expectation zero. Therefore every surviving configuration has at most two clusters of walks. Each cluster has a connected union graph because its walks are individually connected and consecutive walks in the cluster share an edge. [given, F1, F2, F3, algebra, step 9.1]

11.1 Moreover, no matrix-entry edge can occur just once in the total $8k$ factors. Indeed, if that edge occurs in $M_{w_t}$, then $EM_{w_t}=0$, so $Z_{w_t}=M_{w_t}$, and conditioning on all other entries makes the expectation zero. Thus a surviving configuration has at most $4k$ distinct edges. Its number of distinct vertices is at most the sum over its clusters of (edges plus one), hence at most $4k+2$. Sharing vertices between different edge-clusters only reduces this bound. [given, F1, F2, F3, algebra, step 10.1]

12.1 There are finitely many patterns at this fixed $k$. Bounded entries bound every centered product expectation by a constant depending only on $k$ and the entry bound. With $p_n=O(n)$, the count of labelings is $O(n^{4k+2})$. Therefore $$E|T_{n,k}-ET_{n,k}|^4=O(n^{-2}).$$ [given, F1, F2, F3, algebra, step 11.1]

13.1 Markov's inequality and the first Borel–Cantelli lemma show $T_{n,k}-ET_{n,k}\to0$ almost surely. Intersecting over all integer $k\ge1$ proves simultaneous fixed-degree trace convergence for bounded entries. Neither independence between different $n$ nor a monotone sequence $p_n$ was assumed. [given, F1, F2, F3, algebra, step 12.1]

14.1 **Rectangular strong law.** For every integrable iid nonnegative array $Z_{ij}$, $$\frac1{n^2}\sum_{i\le n,j\le p_n}Z_{ij}\longrightarrow\gamma EZ\quad\hbox{almost surely}.$$ [given, F1, F2, F3, algebra, step 13.1]

15.1 To prove this, for each positive rational $t$ enumerate the cells of the nested rectangles $[m]\times[\lfloor tm\rfloor]$ in their successive increments. This is an enumeration of the whole quadrant, so the ordinary one-dimensional iid strong law applies at the rectangle cardinalities. It gives the limit $tEZ$ after division by $m^2$. Intersect these probability-one events over rational $t$. Bracket $p_n/n$ between rationals $t_-<\gamma<t_+$ and use nonnegativity, then let $t_\pm\to\gamma$. This proof accommodates arbitrary $p_n/n\to\gamma$. [given, F1, F2, F3, algebra, step 14.1]

16.1 **Singular-value comparison.** For two real rectangular matrices $A,B$ of the same dimensions, pad their ordered singular-value lists with zeros to length $n$ when forming $AA^T,BB^T$. Then $$\sum_{i=1}^n(s_i(A)-s_i(B))^2\le\|A-B\|_F^2.$$ Here is an elementary proof of the underlying comparison. For symmetric matrices $U,V$ of dimension $d$ with ordered eigenvalues $\alpha,\beta$, orthogonal diagonalization expresses $\operatorname{Tr}(UV)$ as $\sum_{ij}\alpha_i\beta_jd_{ij}$, where $d_{ij}$ is the square of an orthogonal overlap and its row and column sums are one. For descending real sequences, this sum is at most $\sum_i\alpha_i\beta_i$: set $c_i=\sum_jd_{ij}\beta_j$; the sum of its first $r$ entries is at most the sum of the first $r$ entries of $\beta$, because the associated column weights lie in $[0,1]$ and sum to $r$. Summation by parts against descending $\alpha$, with equal total sums, proves the assertion. Expanding $\operatorname{Tr}(U-V)^2$ now bounds it below by $\sum_i(\alpha_i-\beta_i)^2$. Apply this result to the symmetric dilations $$\begin{pmatrix}0&A\\A^T&0\end{pmatrix},\qquad \begin{pmatrix}0&B\\B^T&0\end{pmatrix}.$$ [given, F1, F2, F3, algebra, step 15.1]

17.1 Their eigenvalues are the singular values, their negatives, and the required zeros. Both sides acquire a factor two, proving the comparison. [given, F1, F2, F3, algebra, step 16.1]

18.1 For $k\ge1$, the scalar factorization and Cauchy–Schwarz consequently give $$\left|\frac1n\sum_i s_i^{2k}-\frac1n\sum_i t_i^{2k}\right|\le2k\left(\frac{\|A-B\|_F^2}{n}\right)^{1/2}\left[\frac2n\sum_i(s_i^{4k-2}+t_i^{4k-2})\right]^{1/2}.$$ Indeed $|s^{2k}-t^{2k}|\le2k|s-t|(s^{2k-1}+t^{2k-1})$ for nonnegative $s,t$; squaring the last parenthesis is bounded by twice the sum of the squares. This inequality needs no operator-norm bound on $B$. [given, F1, F2, F3, algebra, step 17.1]

19.1 For integer $K\ge1$, put $$m_K=E[\xi\mathbf1_{|\xi|\le K}],\qquad \eta^{(K)}=\xi\mathbf1_{|\xi|\le K}-m_K,\qquad v_K=E(\eta^{(K)})^2.$$ [given, F1, F2, F3, algebra, step 18.1]

20.1 Then $0\le v_K\le1$ and $v_K\to1$. The residual $r_K=\xi-\eta^{(K)}$ has second moment $$\delta_K^2=Er_K^2=E[\xi^2\mathbf1_{|\xi|>K}]-m_K^2\longrightarrow0.$$ [given, F1, F2, F3, algebra, step 19.1]

21.1 Let $B_n^{(K)}$ be the normalized matrix of these bounded centered entries, constructed from the same original array. On one probability-one event, phases 1–2 give for every integer $K$ and every integer $j\ge1$ $$\frac1n\operatorname{Tr}(B_n^{(K)}B_n^{(K)T})^j\longrightarrow v_K^j\mu_j(\gamma).$$ [given, F1, F2, F3, algebra, step 20.1]

22.1 The rectangular strong law, applied to $r_K^2$, also gives simultaneously in $K$ $$\frac1n\|A_n-B_n^{(K)}\|_F^2\longrightarrow\gamma\delta_K^2.$$ [given, F1, F2, F3, algebra, step 21.1]

23.1 Intersect this event with the original coarse-norm event. For each outcome in the intersection there is a finite $C$ such that $\|A_n\|\le C$ eventually. Thus the $s_i^{4k-2}$ average in the comparison inequality is at most $C^{4k-2}$. The $t_i^{4k-2}$ average converges to $v_K^{2k-1}\mu_{2k-1}(\gamma)\le\mu_{2k-1}(\gamma)$. Consequently $$\limsup_n\left|\frac1n\operatorname{Tr}S_n^k-v_K^k\mu_k(\gamma)\right|\le2k\sqrt{\gamma}\,\delta_K\sqrt{2(C^{4k-2}+\mu_{2k-1}(\gamma))}.$$ [given, F1, F2, F3, algebra, step 22.1]

24.1 Let $K\to\infty$. This proves, simultaneously for every fixed positive integer $k$, $$\frac1n\operatorname{Tr}S_n^k\longrightarrow\mu_k(\gamma)\quad\hbox{almost surely}.$$ [given, F1, F2, F3, algebra, step 23.1]

25.1 In particular $n^{-1}\operatorname{Tr}S_n\to\gamma>0$, so eventually there is at least one positive eigenvalue. Every fixed polynomial with zero constant term has its normalized trace limit by linearity. There is no triangular truncation, hidden high-moment assumption, or appeal to an empirical-distribution limit. [given, F1, F2, F3, algebra, step 24.1]

26.1 Set $c=1+\gamma$, $d=2\sqrt\gamma$, so $a=c-d$, $b=c+d$, and define on $(a,b)$ $$w(x)=\frac1{2\pi}\sqrt{(b-x)(x-a)}.$$ [given, F1, F2, F3, algebra, step 25.1]

27.1 We prove the exact positive-moment identity $$\mu_k(\gamma)=\int_a^b x^{k-1}w(x)\,dx\qquad(k\ge1).$$ This is only an identity for explicit numbers and integrals. No probability measure or spectral support theorem is asserted or used. [given, F1, F2, F3, algebra, step 26.1]

28.1 For real $z>0$ sufficiently small, substitute $x=c+d\cos\theta$. The generating function of the right-hand side is $$z\int_a^b\frac{w(x)}{1-zx}\,dx=\frac{zd^2}{2\pi}\int_0^\pi\frac{\sin^2\theta}{1-cz-dz\cos\theta}\,d\theta.$$ [given, F1, F2, F3, algebra, step 27.1]

29.1 For $u>|v|$, substitution $t=\tan(\theta/2)$ directly gives $\int_0^\pi(u-v\cos\theta)^{-1}d\theta=\pi/\sqrt{u^2-v^2}$. Polynomial division in $\cos\theta$ then gives $$\int_0^\pi\frac{\sin^2\theta}{u-v\cos\theta}\,d\theta=\frac\pi{v^2}\left(u-\sqrt{u^2-v^2}\right),$$ with its continuous value when $v=0$. Hence the generating function above equals $$\frac{1-cz-\sqrt{(1-cz)^2-4\gamma z^2}}{2z}.$$ [given, F1, F2, F3, algebra, step 28.1]

30.1 It is analytic near zero, vanishes there, and solves $H=z(1+H)(\gamma+H)$. The formal equation uniquely determines the coefficients recursively, so these coefficients equal the tree counts of phase 1. Expansion under the integral is justified by the uniformly convergent geometric series on $[a,b]$ for small $z$. This proves the identity, also when $a=0$. [given, F1, F2, F3, algebra, step 29.1]

31.1 Consequently, for every polynomial $P$ with $P(0)=0$, $$\frac1n\operatorname{Tr}P(S_n)\longrightarrow\int_a^b\frac{P(x)}x w(x)\,dx.$$ [given, F1, F2, F3, algebra, step 30.1]

32.1 At $a=0$, the quotient is the polynomial obtained by canceling the factor $x$, so there is no singularity to interpret. [given, F1, F2, F3, algebra, step 31.1]

33.1 Fix $L$ with $0<L<b$. For an integer $q\ge0$ use $P_q(x)=x^{q+1}(x-L)$. Its trace limit is $$I_q=\int_a^b x^q(x-L)w(x)\,dx.$$ [given, F1, F2, F3, algebra, step 32.1]

34.1 Choose $\max(a,L)<t<u<b$. The positive contribution from $[t,u]$ is at least $t^q(t-L)\int_t^u w(x)dx$. The absolute negative contribution, supported in $[a,L]$ when that interval is nonempty, is at most $L^q L\int_a^b w(x)dx$. Since $t>L$ and $w>0$ on $(a,b)$, $I_q>0$ for some finite integer $q$ (and for all sufficiently large $q$). If $L\le a$, positivity follows directly. [given, F1, F2, F3, algebra, step 33.1]

35.1 If all eigenvalues of $S_n$ were at most $L$, every summand $P_q(\lambda)$ would be nonpositive, contradicting the eventually positive normalized trace. Thus $\lambda_{\max}(S_n)>L$ for all sufficiently large $n$. Intersecting over a countable sequence $L\uparrow b$ gives $\liminf\lambda_{\max}\ge b$. [given, F1, F2, F3, algebra, step 34.1]

36.1 Fix $U>a$. If desired replace $U$ by a smaller number in $(a,b)$; proving the stronger bound for that smaller threshold proves the original bound. Thus assume $a<U<b$. Choose a fixed $B>b$ and use the polynomial $$Q_q(x)=x(U-x)(B-x)^{2q},\qquad q\ge0.$$ [given, F1, F2, F3, algebra, step 35.1]

37.1 For every $x\ge0$, it vanishes at $0$, is nonpositive for $x\ge U$, and is positive for $0<x<U$ except at the irrelevant zero of the even factor. Its trace limit is $$J_q=\int_a^b(U-x)(B-x)^{2q}w(x)\,dx.$$ [given, F1, F2, F3, algebra, step 36.1]

38.1 Choose $a<t<u<U$. The positive contribution on $[t,u]$ is at least $$(U-u)(B-u)^{2q}\int_t^u w(x)dx.$$ [given, F1, F2, F3, algebra, step 37.1]

39.1 The absolute negative contribution on $[U,b]$ is at most $$(b-U)(B-U)^{2q}\int_a^b w(x)dx.$$ [given, F1, F2, F3, algebra, step 38.1]

40.1 Because $B-u>B-U>0$ and the positive interval has positive integral, $J_q>0$ for some finite integer $q$. If $S_n$ had no positive eigenvalue below $U$, all its eigenvalues would be either $0$ or at least $U$, and therefore $\operatorname{Tr}Q_q(S_n)\le0$. The positive limiting trace excludes this for every sufficiently large $n$. Hence $\lambda_{\min}^{+}(S_n)<U$ eventually. Let $U\downarrow a$ through a countable sequence to obtain $\limsup\lambda_{\min}^{+}\le a$. [given, F1, F2, F3, algebra, step 39.1]

41.1 For $\gamma=1$, $a=0$. The same argument chooses $0<t<u<U$ and proves an eventually positive eigenvalue below every prescribed $U>0$. The factor $x$ removes every exact zero eigenvalue, including arbitrary extra rank defects, so no rank theorem or lower-rank estimate is concealed in this case. Since eigenvalues are nonnegative, this also proves $\lambda_{\min}^{+}\to0$ in the square-aspect-ratio case. [given, F1, F2, F3, algebra, step 40.1] ∎
