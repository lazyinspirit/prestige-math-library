# Local nonbacktracking proof of covariance confinement

Research reconstruction, 2026-10-19. Scope: Bai–Silverstein (2010), §5.2.1, pp.106–112, read from `/tmp/bai-silverstein-2010-ndl.pdf` and `/tmp/bai-silverstein-ch5.txt`. No item edits or acceptance claim. The graph argument below replaces the book's lengthy Lemmas 5.5–5.6; Chebyshev polynomials replace its incomplete Lemma 5.15.

## Interface and conclusion

Normalize variance to one; assume $p/n\to y\in(0,1)$. For $Y=X/\sqrt n$, let $T_j$ be its alternating nonbacktracking path matrix with $2j$ factors: sum over paths $(a,v_1,u_1,\ldots,v_j,b)$ with consecutive row vertices unequal and consecutive column vertices unequal, weighted by $n^{-j}x_{av_1}\bar x_{u_1v_1}\cdots x_{u_{j-1}v_j}\bar x_{bv_j}$. Put $T_0=I$, $T=T_1$. Then $T_j$ is Hermitian.

The following inputs belong to the parent's truncation/strong-law branch and must actually be proved there: (i) eventually the nested untruncated array equals a truncation at $\delta_n\sqrt n$; (ii) centered truncation has variance at most one tending to one, is bounded by $L_n=\delta_n\sqrt n$, and satisfies $E|x|^q\le C L_n^{q-3}$ for $q\ge3$, uniformly in $n,q$; (iii) uniformly over rows and columns, the normalized sums of $|x|^2$ tend respectively to $1,y$; (iv) $n^{-2}\sum_{i\le p,j\le n}|x_{ij}|^4=O(1)$ and $\max|x_{ij}|/\sqrt n\to0$. Slow enlargement of $\delta_n$ permits $\delta_n\ge1/\log n$. These assertions must hold also in the centered/truncated comparison where used. The finite constant $C$ in (ii) is sufficient; the book's unit constant is unnecessary.

Under these inputs the complete argument below proves $\limsup\|T_j\|\le(2j+1)(j+1)y^{(j-1)/2}$ for every fixed $j\ge1$, and then $\limsup\|YY^*-(1+y)I\|\le2\sqrt y$. Rescaling gives the desired $\sigma^2$ factors.

## Restricted products and deterministic error estimates

For compatible alternating rectangular matrices, write $A_1\odot\cdots\odot A_s$ for the path sum imposing $i_r\ne i_{r+2}$ at every available position (including endpoints). Its norm is at most $2^{s-1}\prod\|A_i\|$. Here is a local proof rather than an appeal to Appendix A. Expand at the first forbidden reversal:

$$A_1\odot\cdots\odot A_s=A_1(A_2\odot\cdots\odot A_s)-\operatorname{diag}(A_1A_2)(A_3\odot\cdots\odot A_s)+(A_1\circ A_2^{\mathsf T}\circ A_3)\odot A_4\odot\cdots\odot A_s.$$

The correction restores the additional exclusion lost when the first reversal is contracted. This identity follows by fixing the indices $i_1=i_3$, then excluding $i_2=i_4$; for $s=2$ it is simply deletion of the diagonal. Rectangular diagonal matrices have the compatible rectangular identity embedding where necessary. The diagonal term has norm at most $\|A_1\|\|A_2\|$. The fused Schur product has norm at most $\|A_1\|\|A_2\|\|A_3\|$: it is a compression of $A_1\otimes A_2^{\mathsf T}\otimes A_3$ by the coordinate isometries $e_a\mapsto e_a\otimes e_a\otimes e_a$ and the analogous column isometry. Induction gives constants $c_s\le c_{s-1}+2c_{s-2}\le2^{s-1}$.

Define $Y^{[q]}$ to have entries $n^{-q/2}|x|^{q-1}x$ for odd $q$ and $n^{-q/2}|x|^q$ for even $q$. The strong-law inputs give $\|Y^{[2]}\|_F^2=O(1)$ and $\|Y^{[q]}\|_F^2\le(\max|x|/\sqrt n)^{2q-4}n^{-2}\sum|x|^4\to0$ for $q>2$. Once the $j=1$ graph estimate below is proved, $\|Y\|^2\le\|T\|+\|\operatorname{diag}(YY^*)\|=O(1)$. Thus every fixed-length restricted product with at least one factor $Y^{[q]}$, $q>2$, is $o(1)$ in norm.

Centering comparison is now legitimate without circularity: prove the graph estimate for centered truncations first; infer their $\|Y\|=O(1)$ using their row law; the mean matrix has norm $\sqrt p\,|E x_{11}^{\mathrm{tr}}|=o(1)$ by the parent's slow-truncation construction. Expand the difference of fixed-length restricted products multilinearly and apply the norm inequality. There are $2^{2j}-1$ terms, not the book's printed $2j-1$.

## Complete trace-graph estimate

Fix $\ell\ge1$. Set $N=4m\ell$, with integer $m$ chosen so that $m/\log n\to\infty$ and $\delta_n(m/\log n)^2\to0$; for example $m=\lceil\log n\,\delta_n^{-1/8}\rceil$. Since $\delta_n\ge1/\log n$, $N$ is polylogarithmic. Expand $E\operatorname{tr}T_\ell^{2m}$ into closed alternating walks of length $N$, split into $2m$ consecutive nonbacktracking blocks of length $2\ell$. Bound absolute expectations termwise. Any edge appearing exactly once vanishes by centering and independence (complex conjugations do not alter this fact).

Canonicalize row and column labels separately by order of first appearance. Innovations lead to a previously unvisited vertex and form a spanning tree of the visited vertices. Let $k$ be their number, so $k+1$ vertices are visited. Classify the second occurrence of each innovation edge as T3; all other noninnovation occurrences are T4. There are exactly $k$ T3 occurrences and $d=N-2k$ T4 occurrences. A T4 class is a distinct unoriented edge supporting at least one T4 occurrence; let $t$ be their number. Then $0\le t\le d$, and $t=0$ implies $d=0$. Every innovation edge appears at least twice.

**Moment bound.** An innovation edge of multiplicity two contributes at most one. An innovation edge of multiplicity $q\ge3$ contributes at most $CL_n^{q-3}$. A noninnovation edge of multiplicity $q\ge2$ contributes at most $CL_n^{q-1}$, a deliberately weaker bound valid for $L_n\ge1$. Consequently the product is bounded by $C^tL_n^{d-t}$. This follows by summing exponents: an innovation edge contributes $q-2-1_{q\ge3}$, while a noninnovation edge contributes $q-1$; the resulting total is $N-2k-t$.

**Coding bound, including a replacement for Lemmas 5.5–5.6.** At each time keep the forest $F$ of innovation edges seen exactly once. At a T3 step the endpoint is selected among the neighbors of the current vertex in $F$. Call the step regular if there are at least two such neighbors; otherwise its endpoint is forced. Let $Q$ be the number of nonempty edge components of $F$ not containing the current vertex. An innovation leaves $Q$ unchanged. A regular T3 step increases $Q$ by one (deleting its edge leaves a nonempty component on the departure side); an irregular T3 leaves $Q$ unchanged. A T4 step leaves $F$ unchanged and changes $Q$ by at most one. Since $F$ starts and ends empty, there are at most $d$ regular T3 steps.

At any time the degree of the current vertex in $F$ is at most $2t+1$. To prove this, delete that vertex from the full innovation tree. Each incident open edge determines one branch. Except for the possible branch containing the initial vertex, the prefix walk crosses the cut of such a branch an even number of times. Its innovation-tree edge has been crossed exactly once, so some T4 class must cross this cut with odd multiplicity. A fixed T4 edge can join at most two branches at the deleted vertex. There are $t$ classes, proving the bound. This parity argument allows classes whose first T4 occurrence is in the future by harmless overcounting.

Given innovation and T3 positions, choose the $t$ T4 edge classes in at most $(k+1)^{2t}$ ways and assign all T4 positions to classes in at most $t^d$ ways. Innovation endpoints are forced by canonical order. At any T3 position there are at most $2t+1$ choices, and at most $d$ positions can be regular. A decision tree of depth at most $d$ with branching at most $2t+1$ has at most $(2t+1)^d$ leaves (pad shorter branches with forced dummy choices); no separate selection of regular positions is required. T4 endpoints are forced by current vertex and chosen class, or the code is invalid. Thus the remaining coding factor is at most $(k+1)^{2t}t^d(2t+1)^d\le(k+1)^{2t}3^d(t+1)^{2d}$. Interpret $0^0=1$.

In block $b$, let $a_b$ count adjacent innovation/noninnovation pairs. Such a pair must have a NEW noninnovation edge: its departure vertex was just introduced, and immediate reversal is prohibited inside a block. It is therefore the first T4 occurrence of its class. Consequently $\sum a_b\le t$. Innovation runs have at most $a_b+1$ components; their alternating row/column innovations differ in number by at most one each. If $r,s$ count row and column innovations, then $k=r+s$ and $|r-s|\le t+2m$. Hence $r\ge(k-t-2m)/2$.

For given $a_b$, innovation positions in block $b$ have at most $\binom{2\ell+1}{2a_b+1}$ patterns: a binary string with $a_b$ transitions $1\to0$ has this count, by specifying its alternating run endpoints, including a possible terminal run. Their product is at most $(2\ell+1)^{2t+2m}$. There are at most $(\ell+1)^{2m}$ choices of the $a_b$. Once innovation positions are fixed, T3 positions have at most $\binom{N-k}{k}$ choices. Labelings contribute at most $p^{r+1}n^s=n^{k+1}y_n^{r+1}\le n^{k+1}y_n^{(k-t-2m)/2}$, eventually $0<y_n<1$.

Combining all factors, with $A=(2\ell+1)(\ell+1)$, gives

$$E\operatorname{tr}T_\ell^{2m}\le nA^{2m}y_n^{-m}\sum_{1\le k\le N/2}\binom{N-k}{k}y_n^{k/2}\delta_n^{N-2k}3^{N-2k}\sum_{t=0}^{N-2k}q_{n,k}^{t}(t+1)^{2(N-2k)},$$

where $q_{n,k}=C(2\ell+1)^2(k+1)^2/(\sqrt{ny_n}\delta_n)$. This derivation uses absolute values and so applies to complex entries without any symmetry assumption.

Uniformly in $k$, $q_{n,k}=n^{-1/2+o(1)}$. Set $a=-\log q_{n,k}$, so eventually $(\log n)/3\le a\le\log n$. For $d\ge1$,

$$\sum_{t\ge0}e^{-at}(t+1)^{2d}\le2e^{a/2}\max\{1,(4d/(ae))^{2d}\}\le2n\,[C_1\max\{1,N/\log n\}^2]^d.$$

Indeed split the exponential into two halves, sum one geometric factor, and maximize $u^{2d}e^{-au/2}$ for $u=t+1\ge1$. For $d=0$ the finite inner sum is exactly one. Thus, after enlarging a fixed constant, let $\varepsilon_n=C_2\delta_n\max\{1,N/\log n\}^2\to0$; the trace is at most

$$2n^2A^{2m}y_n^{-m}\sum_k\binom{N-k}{k}y_n^{k/2}\varepsilon_n^{N-2k}\le2n^2A^{2m}y_n^{-m}(y_n^{1/4}+\varepsilon_n)^N.$$

For the final inequality, $\binom{N-k}{k}\le\binom N{2k}$: map a $k$-subset of $\{1,\ldots,N-k\}$ to the $2k$-subset formed by the adjacent pairs $(b_i+i-1,b_i+i)$; these are disjoint and recover the original subset. The sum is consequently bounded by the binomial expansion with nonnegative coefficients. Since $N=4m\ell$, the last display equals $2n^2[A y_n^{(\ell-1)/2}]^{2m}(1+o(1))^N$.

For $\eta>Ay^{(\ell-1)/2}$, Markov's inequality gives $P(\|T_\ell\|\ge\eta)\le2n^2e^{-cm}$ eventually, which is summable since $m/\log n\to\infty$. Borel–Cantelli and a countable sequence of $\eta$ prove the claimed norm bound. This completes all graph estimates locally.

## Full recurrence with boundary cases

Let $D=\operatorname{diag}(YY^*)\to I$, $E=\operatorname{diag}(Y^*Y)\to yI$ in norm. Let $B_j$ be the restricted product of length $2j-1$ starting with $Y^*$ and alternating thereafter. For $j\ge2$, the deterministic restricted-product identity above gives

$$T_j=YB_j-DT_{j-1}+Y^{[3]}\odot Y^*\odot\cdots\odot Y^*=YB_j-T_{j-1}+o(1).$$

For $j=1$, $YB_1=T_1+D=T_1+T_0+o(1)$, so the unified relation is $YB_j=T_j+T_{j-1}+o(1)$ for all $j\ge1$. Similarly

$$B_{j+1}=Y^*T_j-EB_j+(Y^{[3]})^*\odot Y\odot\cdots\odot Y^*.$$

For $j=1$ the final correction is simply $(Y^{[3]})^*$, which is $o(1)$; this case must not be silently omitted. All restricted products have fixed length and bounded norm; the fused corrections vanish by the estimates above. Therefore

$$T_{j+1}=YB_{j+1}-DT_j+o(1)=(YY^*-D)T_j-yYB_j+o(1)=TT_j-yT_j-yT_{j-1}+o(1).$$

Errors are in operator norm, for each fixed $j$. This proves Lemma 5.14 with $T_0=I$ and includes $j=1$.

## Polynomial closure replacing Lemma 5.15

Put $H=T-yI$. Define $P_0(z)=1$, $P_1(z)=z+y$, and $P_{j+1}(z)=zP_j(z)-yP_{j-1}(z)$. Since $\|H\|=O(1)$, induction in the recurrence gives $T_j=P_j(H)+o(1)$ for each fixed $j$. Explicitly

$$P_j(z)=y^{j/2}\left[U_j\left(\frac z{2\sqrt y}\right)+\sqrt y\,U_{j-1}\left(\frac z{2\sqrt y}\right)\right],$$

where $U_{-1}=0$, $U_0=1$, $U_{j+1}(t)=2tU_j(t)-U_{j-1}(t)$. This explicit formula follows immediately by checking the two initial values and recurrence.

For real $|t|\ge1+\epsilon$, write $|t|=\cosh a$, $\rho=e^a>1$. Then $|U_j(t)|=\sinh((j+1)a)/\sinh a\ge\rho^j$ and $|U_{j-1}(t)|\le|U_j(t)|$, so $|U_j(t)+\sqrt yU_{j-1}(t)|\ge(1-\sqrt y)\rho^j$. If $\|H\|$ exceeds $2\sqrt y+\epsilon$ infinitely often, Hermitian spectral mapping implies for every fixed $j$ that

$$y^{j/2}(1-\sqrt y)\rho_\epsilon^j\le\limsup\|P_j(H)\|\le(2j+1)(j+1)y^{(j-1)/2}.$$

This is impossible as $j\to\infty$. Thus $\limsup\|H\|\le2\sqrt y$. Finally $YY^*-(1+y)I-H=D-I\to0$. This establishes both confinement inequalities; reverse edge witnesses are a separate parent task.

## Corrections and remaining interface obligations

The book's proof prints missing normalizations/conjugates and inconsistent signs in 5.15; none is needed above. Its centered moment hypothesis with unit third-moment bound need not hold, which is repaired by $C^t$. Its centering expansion has $2^{2\ell}-1$ terms. Its final diagonal bound needs $1/n$. The proof above supplies the graph encoding, summation, norm inequality, recurrence, and polynomial argument rather than relying on these printed assertions.

No unresolved internal graph or polynomial lemma is being imported. The only pending obligations are the explicitly listed parent-owned nested-array truncation and strong-law inputs, including the small mean-matrix estimate. Until these are verified, this note is a conditional reconstruction, not a completed proof of the finite-fourth-moment theorem.


## Owner integration refinement

The final local carriers orient every rectangle with the smaller dimension as the row dimension, so y_n≤1 and y_n→y∈(0,1]. Both dimensions are comparable to the original sequence index; the probability bounds are summed over that original index, so monotonicity of the larger dimension is not required. To include y=1 in polynomial closure, use |U_{j-1}(t)|/|U_j(t)|≤ρ^-1 when |t|=cosh(a), ρ=e^a>1. Thus |U_j(t)+sqrt(y)U_{j-1}(t)|≥(1−sqrt(y)/ρ)ρ^j≥(1−ρ^-1)ρ^j, a strictly positive uniform exponential bound outside the closed spectral interval. This replaces the factor1−sqrt(y) above and handles aspect-one sequences crossing the orientation boundary. The final carriers, not the provisional conditional notation above, are the proposed mathematical repair.
