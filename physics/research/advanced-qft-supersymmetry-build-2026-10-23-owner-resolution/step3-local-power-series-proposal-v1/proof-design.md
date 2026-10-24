# Independent local proof design (unsigned; no authoring authority)

For coefficients $|c_\alpha|\le M r^{-\alpha}$, write $r^{-\alpha}=\prod_i r_i^{-\alpha_i}$ and $w=z-a$.

1. Geometric box sums bound $\sum_\alpha M s^{|\alpha|}$ by $M(1-s)^{-m}$ for $0<s<1$. Thus the series converges absolutely and uniformly on each closed $s r$ polydisc, by the M-test and absolute-series enumeration/rearrangement facts.

2. For a coordinate $k$ and $0<\theta<1$, set $d_\nu=(\nu_k+1)c_{\nu+e_k}$. The correct estimate is
   $$|d_\nu|\le\frac M{r_k}(\nu_k+1)\theta^{|\nu|}\prod_i(\theta r_i)^{-\nu_i}\le\frac M{r_k(1-\theta)^2}\prod_i(\theta r_i)^{-\nu_i}.$$
   Indeed $\theta^{|\nu|}\le\theta^{\nu_k}$, and $(j+1)\theta^j=\sum_{p+q=j}\theta^{p+q}\le(\sum_{p=0}^j\theta^p)^2\le(1-\theta)^{-2}$. This uses finite sums only. Applying paragraph 1 to $d$ proves local uniform absolute convergence of the first derived series on every interior polydisc.

3. Fix $z$ with $|w_i|\le s r_i$, choose $s<t<1$, put $\eta=\max_i|h_i|/r_i$, and take $h\ne0$ small enough that $T=(t-s)/\eta\ge1$. Finite binomial expansion gives $\phi_\alpha(u)=\prod_i(w_i+u h_i)^{\alpha_i}=\sum_j A_{\alpha,j}u^j$, with $A_{\alpha,0}=w^\alpha$ and $A_{\alpha,1}=\sum_i\alpha_iw^{\alpha-e_i}h_i$ (omit zero exponents). The binomial coefficients are nonnegative, so
   $$\sum_j|A_{\alpha,j}|T^j\le\prod_i(|w_i|+T|h_i|)^{\alpha_i}\le\prod_i(t r_i)^{\alpha_i}.$$
   Hence $|\phi_\alpha(1)-A_{\alpha,0}-A_{\alpha,1}|\le T^{-2}\prod_i(t r_i)^{\alpha_i}$. Absolute summation against $c_\alpha$ bounds the remainder in the linear approximation to the sum by
   $$\frac{M\eta^2}{(t-s)^2(1-t)^m}\le\frac{M\|h\|^2}{(\min_i r_i)^2(t-s)^2(1-t)^m}.$$
   The first derived series is absolutely convergent by paragraph 2, so splitting/reindexing is justified. The linear approximation is $h\mapsto\sum_k b_k(z)h_k$, a complex-linear map. The displayed quadratic remainder proves total complex differentiability under the repository definition and identifies each complex coordinate partial with the derived series. No appeal to separate holomorphy, Osgood, or the defective theorem is made.

4. Fix a derivative multi-index $\gamma$ of order $q$. If $q=0$, paragraph 1 applies. If $q>0$, for any $0<\tau<1$ put $t_j=1-j(1-\tau)/q$ for $0\le j\le q$, and apply paragraphs 2–3 successively on the radii $t_0r,\ldots,t_qr=\tau r$, using the shrink factor $t_j/t_{j-1}\in(0,1)$ at stage $j$. At each step the new coefficients meet the required bound, with a finite constant; the resulting derivative exists and is holomorphic on $\Delta_{\tau r}(a)$. Induction using $(\nu_k+1)$ yields its coefficient at $\nu$ as $((\nu+\gamma)!/\nu!)c_{\nu+\gamma}$. The coefficient is independent of the chosen order of coordinate derivatives. Every interior point belongs to some $\Delta_{\tau r}(a)$, so this proves the iterated identity throughout $\Delta_r(a)$. At $a$ only $\nu=0$ survives, giving $\partial_z^\gamma g(a)=\gamma!c_\gamma$.

5. Two bounded coefficient families with the same sum on a common polydisc give the same derivatives of that single function at $a$. Paragraph 4 gives $\gamma!c_\gamma=\gamma!c'_\gamma$; cancellation of the positive integer factorial proves coefficient uniqueness.

This proof is sufficient for both currently load-bearing uses: grouped/shifted subseries in the completion lemma are holomorphic germs, and the exponential example's bounded series is holomorphic with unique coefficients. It leaves the outside published supplier's false intermediate bound unchanged and reported.
