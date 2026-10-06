---
id: lem-holder-interpolation-with-an-epsilon-loss
kind: lemma
title: Ehrling-type Hölder and derivative interpolation with an epsilon loss
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 1
deps: [def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, cor-mean-value-theorem, thm-algebra-of-derivatives, thm-young-inequality-real-exponents, def-ck-and-multi-index-notation-in-several-variables, thm-newton-leibniz-with-a-countable-exceptional-set, thm-chain-rule-for-total-derivatives, thm-symmetry-of-higher-mixed-partials]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.1 and Exercises 8.4-8.6, the scale-normalized Ehrling interpolation, printed pp. 140-141 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the interpolation estimates used to absorb intermediate norms, printed pp. 127-133 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§1.4 and Part III of the proof of Theorem 3.8, the interpolation and $\\epsilon$-absorption, printed pp. 36-42 and 105 (read in full)"
---

## Statement

Let $n\ge1$, $0<\alpha<1$, let $k\ge1$ be an integer, $R>0$, and let $B_R\subseteq\Omega$ be a ball in an open set. For every $\varepsilon>0$ there is $C=C(n,k,\alpha,\varepsilon)<\infty$ such that every $u$ with $\|u\|^{*}_{k,\alpha;B_R}<\infty$ satisfies
$$\text{(i)}\quad\sum_{j=0}^{k-1}R^j\max_{|\beta|=j}\ \sup_{B_R}|D^\beta u|\le\varepsilon\|u\|^{*}_{k,\alpha;B_R}+C\sup_{B_R}|u|,$$
$$\text{(ii)}\quad\max_{|\beta|=k}\ \sup_{B_R}|D^\beta u|\le\varepsilon R^{\alpha}\max_{|\beta|=k}[D^\beta u]_{0,\alpha;B_R}+CR^{-k}\sup_{B_R}|u|.$$
For $0<\alpha<\beta\le1$ and $f\in C^{0,\beta}(B_R)$, one also has
$$\text{(iii)}\quad[f]_{0,\alpha;B_R}\le\varepsilon R^{\beta-\alpha}[f]_{0,\beta;B_R}+C(n,\alpha,\beta)\varepsilon^{-\alpha/(\beta-\alpha)}R^{-\alpha}\sup_{B_R}|f|.$$
The constants are independent of $u,f,R$; the inequalities are scale-invariant.

## Facts & Assumptions

**Given:** $n\ge1$, $0<\alpha<1$, an integer $k\ge1$, a radius $R>0$, a ball $B_R=B_R(x_0)$, a fixed $\varepsilon>0$, and a function $u$ with $\|u\|^{*}_{k,\alpha;B_R}<\infty$ (respectively $f\in C^{0,\beta}(B_R)$ in the third part).

[F1] The scaled norm is $\|u\|^{*}_{k,\alpha;B_R}=\sum_{j=0}^{k}R^j\max_{|\beta|=j}\sup_{B_R}|D^\beta u|+R^{k+\alpha}\max_{|\beta|=k}[D^\beta u]_{0,\alpha;B_R}$, and $[v]_{0,\gamma;B}=\sup_{B}|v(x)-v(y)|/|x-y|^{\gamma}$. Under $v(z)=u(x_0+Rz)$ one has $D^\beta v(z)=R^{|\beta|}D^\beta u(x_0+Rz)$, the scaling identity $\|v\|^{*}_{k,\alpha;B_1}=\|u\|^{*}_{k,\alpha;B_R}$, and for $g(z)=f(x_0+Rz)$ the identities $[g]_{0,\gamma;B_1}=R^{\gamma}[f]_{0,\gamma;B_R}$ for $\gamma\in\{\alpha,\beta\}$ and $\sup_{B_1}|g|=\sup_{B_R}|f|$. ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]])

[F2] All derivatives are canonical-order partial derivatives. The mean value theorem bounds increments along a segment, and iterating [[thm-newton-leibniz-with-a-countable-exceptional-set]] on the smooth restrictions to a segment gives the Taylor formula with integral remainder; [[thm-symmetry-of-higher-mixed-partials]] identifies derivative words of orders at least two. Consequently $\bigl|v(x+h)-\sum_{|\gamma|<m}\frac{D^\gamma v(x)}{\gamma!}h^\gamma\bigr|\le C_{n,m}|h|^m\max_{|\gamma|=m}\sup_{[x,x+h]}|D^\gamma v|$. Under a linear change $y=x+Vz$, [[thm-chain-rule-for-total-derivatives]] expresses each $z$-derivative of order $m$ as a linear combination of $y$-derivatives of order $m$, with coefficients bounded in terms of $m,n,\|V\|$; if $V$ is invertible with bounded inverse, the same holds in reverse. An $\alpha$-Hölder bound for the top-order $y$-derivatives therefore gives the corresponding $z$-derivative bound, with a factor controlled by $\|V\|^\alpha$. ([[cor-mean-value-theorem]], [[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]])

[F3] Young's inequality for real exponents: for conjugate exponents $p,q>1$ and $a,b\ge0$ one has $ab\le\varepsilon a^p+C_{p,q}\varepsilon^{-q/p}b^q$; in part (ii) it is applied with $p=(k+\alpha)/k$ and $q=(k+\alpha)/\alpha$, both greater than one. Part (iii) uses only its direct low/high increment split and does not use Young's inequality. ([[thm-young-inequality-real-exponents]])

## Proof

**Proof technique:** direct.

1.1 Reduction to $B_1$. Put $x_0$ for the centre of $B_R$, $v(z):=u(x_0+Rz)$ on $B_1$ and $g(z):=f(x_0+Rz)$. By the scaling identities of [F1] the three claims for $(u,f,R)$ are equivalent to the same claims for $(v,g,1)$: the factors $R^j$, $R^{k+\alpha}$, $R^\alpha$, $R^{-k}$ and $R^{\gamma}$ reproduce exactly the displayed powers. It therefore suffices to prove all three statements for $R=1$ with constants independent of the function; this is assumed from now on. [F1, given]

1.2 Part (iii). Let $0<\alpha<\beta\le1$, $f\in C^{0,\beta}(B_1)$, $M:=\sup_{B_1}|f|$ and $F:=[f]_{0,\beta;B_1}$. If $M=0$ or $F=0$ the claim is immediate (for $F=0$, use that $f$ is constant, so $[f]_{0,\alpha}=0$; for $M=0$ the function vanishes), so assume $M,F>0$. If $\varepsilon\ge2^{\beta-\alpha}$, then for all $x\ne y$ in $B_1$, $|x-y|\le2$ and $[f]_{0,\alpha;B_1}\le F\cdot2^{\beta-\alpha}\le\varepsilon F$, which is stronger than the claim; hence assume $\varepsilon<2^{\beta-\alpha}$ and put $h_0:=\varepsilon^{1/(\beta-\alpha)}\in(0,2)$. For a pair with $|x-y|\ge h_0$ use the trivial bound $|f(x)-f(y)|\le2M$, and for a pair with $|x-y|<h_0$ use the $\beta$-Hölder bound: $$\frac{|f(x)-f(y)|}{|x-y|^{\alpha}}\le\max\Bigl\{2Mh_0^{-\alpha}, Fh_0^{\beta-\alpha}\Bigr\}=\max\Bigl\{2M\varepsilon^{-\alpha/(\beta-\alpha)},\,F\varepsilon\Bigr\}\le F\varepsilon+2M\varepsilon^{-\alpha/(\beta-\alpha)}.$$ This is the claim for $R=1$ with $C_3=2$. [F1, given, cases, algebra]

1.3 Interior-point difference estimates, including points near the boundary. Write $M_j:=\max_{|\gamma|=j}\sup_{B_1}|D^\gamma u|$, $M_0=\sup_{B_1}|u|$, and $H:=\max_{|\gamma|=k}[D^\gamma u]_{0,\alpha;B_1}$, and set $\rho_*:=1/(8nk)$. For each $x\in B_1$ choose an invertible frame $V_x$ as follows. If $|x|\le1/2$, take $V_x=I$. If $|x|>1/2$, put $\nu=x/|x|$, choose an orthonormal basis $e_1,\ldots,e_{n-1}$ of the tangent space $\nu^\perp$, and take the columns of $V_x$ to be $e_i-\nu$ for $1\le i<n$ and $-\nu$ for the last column (when $n=1$ there is just the column $-\nu$). These frames and their inverses have norms bounded by constants depending only on $n$. Define $\widetilde u_x(z):=u(x+V_xz)$ wherever $x+V_xz\in B_1$. For any vector $\ell\in[0,\infty)^n$ with $m:=\sum_i\ell_i\le nk$ and any $0\le t\le1$, the whole segment $x+t\rho V_x\ell$ lies in $B_1$ whenever $0<\rho\le\rho_*$. In the inner case, $|x+t\rho V_x\ell|\le1/2+\rho m\le5/8$. In the outer case write $V_x\ell=-m\nu+\sum_{i<n}\ell_ie_i$; its tangential component has norm at most $m$, so $|x+t\rho V_x\ell|^2\le r^2-2t\rho mr+2t^2\rho^2m^2\le r^2<1$, since $r=|x|\ge1/2$ and $t\rho m\le1/8\le r/2$. Thus every sample point and Taylor segment below is contained in $B_1$. For $0\le d\le k-1$, choose the unique weights $a_0^{(d)},\ldots,a_{k-1}^{(d)}$ solving the Vandermonde system $\sum_{\ell=0}^{k-1}a_\ell^{(d)}\ell^q=d!\,\mathbf1_{q=d}$ for $q=0,\ldots,k-1$. For a multi-index $\delta$ of order $j<k$, define the tensor stencil $Q_\rho^\delta\widetilde u_x(0):=\rho^{-j}\sum_{\ell\in\{0,\ldots,k-1\}^n}\Bigl(\prod_{i=1}^n a_{\ell_i}^{(\delta_i)}\Bigr)\widetilde u_x(\rho\ell).$ Taylor-expand $\widetilde u_x$ at $0$ through degree $k-1$. The moment identities make this stencil equal to $D_z^\delta\widetilde u_x(0)$ on every polynomial of total degree less than $k$. The integral remainder at each stencil point is bounded by $C_{n,k}\rho^kM_k$ using [F2] and the uniform frame bound. The weights and stencil are fixed by $n,k$, hence $|Q_\rho^\delta\widetilde u_x(0)-D_z^\delta\widetilde u_x(0)|\le C_{n,k}\rho^{k-j}M_k,\qquad |Q_\rho^\delta\widetilde u_x(0)|\le C_{n,k}\rho^{-j}M_0.$ For a multi-index $\delta$ of order $k$, instead use the ordinary iterated forward difference in the $z$-coordinates, $\Delta_\rho^\delta\widetilde u_x(0):=\sum_{0\le\gamma\le\delta}(-1)^{k-|\gamma|}\binom\delta\gamma\widetilde u_x(\rho\gamma)$. Repeated use of the fundamental theorem of calculus gives $\rho^{-k}\Delta_\rho^\delta\widetilde u_x(0)$ as the average of $D_z^\delta\widetilde u_x$ at points $\rho\sum_{q=1}^k t_qe_{i_q}$, where the list $i_1,\ldots,i_k$ contains $\delta_i$ copies of $i$ and $0\le t_q\le1$. These segments lie in $B_1$ by the preceding geometry; the chain rule and the $\alpha$-Hölder seminorm of the order-$k$ derivatives therefore give $\left|\rho^{-k}\Delta_\rho^\delta\widetilde u_x(0)-D_z^\delta\widetilde u_x(0)\right|\le C_{n,k}\rho^\alpha H,\qquad |\Delta_\rho^\delta\widetilde u_x(0)|\le2^kM_0.$ Finally, $\partial_{x_a}=\sum_i(V_x^{-1})_{ia}\partial_{z_i}$, so each canonical derivative of order $j$ is a uniformly bounded linear combination of frame derivatives of that order. We have proved, for every $x\in B_1$, $0<\rho\le\rho_*$, and canonical multi-index $\beta$, $|D^\beta u(x)|\le C_{n,k}\bigl(\rho^{-j}M_0+\rho^{k-j}M_k\bigr)\quad (j=|\beta|<k),\qquad |D^\beta u(x)|\le C_{n,k}\bigl(\rho^{-k}M_0+\rho^\alpha H\bigr)\quad (j=k).$ Taking suprema gives these same bounds for the full-ball quantities $M_j$; the estimates are valid up to points arbitrarily close to $\partial B_1$. [F2, given, algebra]

2.1 Part (ii). By step 1.3, for every $x\in B_1$, $0<\rho\le\rho_*$, and $|\beta|=k$, $|D^\beta u(x)|\le C_{n,k}(M_0\rho^{-k}+\rho^\alpha H).$ If $M_0=0$, then $u=0$. If $H=0$ and $M_0>0$, use $\rho=\rho_*$ and take the supremum to obtain $M_k\le C(n,k)M_0$. Otherwise assume $M_0,H>0$ and put $s=(M_0/H)^{1/(k+\alpha)}$. If $s\ge\rho_*$, then $H\le\rho_*^{-(k+\alpha)}M_0$, and the estimate with $\rho=\rho_*$ gives $M_k\le C(n,k,\alpha)M_0$. If $s<\rho_*$, take $\rho=s$ to get $M_k\le C_{n,k,\alpha}M_0^{\alpha/(k+\alpha)}H^{k/(k+\alpha)}$. Young's inequality [F3], with $p=(k+\alpha)/k$ and $q=(k+\alpha)/\alpha$, then gives $M_k\le\varepsilon H+C(n,k,\alpha,\varepsilon)M_0$. This proves (ii) for $R=1$. [step 1.3, F1, F3, cases, algebra]

3.1 Part (i). By part (ii), for every $\delta>0$ there is $C_\delta$ such that $M_k\le\delta H+C_\delta M_0$. Choose $\delta:=\varepsilon/(2kC_{n,k})$, increasing $C_{n,k}$ in step 1.3 if necessary so it is at least $1$. Fix any $\rho\in(0,\rho_*]$. For $0\le j<k$, the lower-order estimate of step 1.3 gives $M_j\le C_{n,k}\rho^{-j}M_0+C_{n,k}\rho^{k-j}M_k\le C(n,k,\alpha,\varepsilon)M_0+\frac{\varepsilon}{2k}H,$ since $\rho_*<1$. Summing over the $k$ orders yields $\sum_{j=0}^{k-1}M_j\le C(n,k,\alpha,\varepsilon)M_0+\frac\varepsilon2H\le C M_0+\varepsilon\|u\|^{*}_{k,\alpha;B_1}$, which is (i) for $R=1$. [step 1.3, step 2.1, F1, algebra]

4.1 Scaling back and conclusion. Undoing the change of variables of step 1.1 with the scaling identities of [F1] transforms (i), (ii) and (iii) for $R=1$ into the three displayed statements for general $R$, with the same constants: $R^jM_j(u)=M_j(v)$, $R^{k+\alpha}H(u)=H(v)$, $R^\gamma[f]_{0,\gamma;B_R}=[g]_{0,\gamma;B_1}$ and $\sup_{B_R}|f|=\sup_{B_1}|g|$. The constants depend only on $n,k,\alpha,\varepsilon$ (and on $n,\alpha,\beta,\varepsilon$ in (iii)), never on $u,f,R$ or the centre, and no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1, F1, given] ∎

## Remarks

- Parts (i) and (ii) are the derivative form of the Ehrling inequality: in part (ii), the smallness parameter $\varepsilon$ is bought at the price of a constant blowing up like $\varepsilon^{-k/\alpha}$ under the displayed Young exponents, which is the price paid in the freezing and Schauder estimates below.
- The proof of parts (i) and (ii) uses the top-order Hölder seminorm only through the difference-quotient approximation; no compactness of the embedding $C^k\hookrightarrow C^{k-1}$ or Arzelà–Ascoli argument is used, so the estimate is fully quantitative.
