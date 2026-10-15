---
id: thm-tdmath-spatial-mean-information
kind: theorem
title: Spatial Mean-Information Theorem
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps: [thm-logarithm-derivative-and-integral, def-axiom-of-choice, def-tdmath-poisson-configuration-reference, thm-tdmath-poisson-reference-count-properties, def-tdmath-finite-region-relative-entropy, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-tdmath-specific-entropy-density, lem-tdmath-conditional-log-density-convergence, thm-von-neumann-mean-ergodic-theorem-in-l-two, thm-dominated-convergence, thm-holder-inequality-for-integrals, def-tdmath-local-tame-topology]
justified_by: []
dependency_roles:
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  lem-tdmath-conditional-log-density-convergence: mathematical-premise
  thm-von-neumann-mean-ergodic-theorem-in-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "X.X. Nguyen and H. Zessin, Ergodic theorems for spatial processes"
      url: "https://link.springer.com/content/pdf/10.1007/BF01886869.pdf"
      locator: "Section 6, Theorem 6.26 and proof, printed pp.151–152 / PDF pp.18–19, spatial McMillan theorem under stationary independent-increment reference"
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3, Remark 2.5, printed p.184 / PDF p.7, cube specific-entropy supremum used for the normalization"
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Section 6, printed pp.48–50 / PDF pp.9–12, stationary finite-state lattice comparison only"
---

## Statement

Assume AC. Let $d\geq1$, let $P\in\mathcal P^1_{\rm stat}(\Omega)$, with this class defined in [[def-tdmath-local-tame-topology]], be ergodic under the full translation group $\mathbb R^d$, and suppose its specific relative entropy $I(P)=\gamma$ relative to the unit-intensity Poisson law $Q$ is finite. Ergodic means that every measurable event invariant modulo $P$-null sets under each translation has probability $0$ or $1$. For an integer $N\geq1$, let $\Lambda_N=[0,N)^d$, and let $h_N=dP_{\Lambda_N}/dQ_{\Lambda_N}$, which exists because $D(P_{\Lambda_N}\Vert Q_{\Lambda_N})<\infty$. Then
$$\frac{1}{N^d}\log h_N\longrightarrow\gamma\qquad\text{in }L^1(P).$$
Without the full-translation ergodicity hypothesis the proof yields an invariant $L^1(P)$ limit of mean $\gamma$; it need not be constant.

## Facts & Assumptions

**Given:** AC, a stationary finite-intensity law $P$, finite specific relative entropy $\gamma$, and ergodicity under every real translation.

[A1] AC is used by the conditional-density convergence and Hilbert-space mean-ergodic suppliers ([[def-axiom-of-choice]], [[lem-tdmath-conditional-log-density-convergence]], [[thm-von-neumann-mean-ergodic-theorem-in-l-two]]).

[F1] For $P\in\mathcal P^1_{\rm stat}(\Omega)$, every bounded restriction has finite relative entropy when $I(P)<\infty$, the cube entropy ratio converges to $\gamma$, and the cube ratios are bounded above by $\gamma$ ([[def-tdmath-local-tame-topology]], [[thm-tdmath-specific-entropy-density]]).

[F2] The conditional density of a unit cell given its finite past has logarithm with directed $L^1$ limit $Z=\log k_\infty$, where $k_\infty$ is a density relative to $R_0:=P_{F_+}\otimes Q_C$ and $E_PZ=\gamma$ ([[lem-tdmath-conditional-log-density-convergence]]).

[F3] Finite-region densities factor into successive conditional densities relative to the independent Poisson restrictions; the chain rule identifies the expectation of each conditional log density with its conditional relative entropy. If $k$ is a conditional density relative to a probability reference $R$, then $E_P(-\log k)^+=\int_{0<k<1}k(-\log k)\,dR\leq1/e$, because $u(-\log u)\leq1/e$ for $0<u<1$ ([[thm-tdmath-poisson-reference-count-properties]], [[lem-tdmath-relative-entropy-variational-and-chain-rules]]).

[F4] For each measure-preserving transformation, the Cesàro averages on complex $L^2$ converge in norm to the orthogonal projection onto its invariant subspace ([[thm-von-neumann-mean-ergodic-theorem-in-l-two]]).

[F5] On a probability space $L^2$ convergence implies $L^1$ convergence by Hölder, and dominated convergence passes integrable truncations to the limit ([[thm-holder-inequality-for-integrals]], [[thm-dominated-convergence]]).

[F6] Under $Q_\lambda$, disjoint bounded Borel counts are independent Poisson variables with means $\lambda|A|$, $Q_\lambda$ is translation invariant, and conditional on the count in a unit cell the point configuration has a law independent of $\lambda$ ([[def-tdmath-poisson-configuration-reference]], [[thm-tdmath-poisson-reference-count-properties]]).

[F7] The variational formula expresses relative entropy as a supremum of functions affine in the first probability law ([[lem-tdmath-relative-entropy-variational-and-chain-rules]]).

[F8] For every $x>0$, $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Let $S_N=\{0,\ldots,N-1\}^d$ be the cell indices in $\Lambda_N$. For $i\in S_N$, set $A_{i,N}=\{j-i:j\in S_N,\ j<_{\rm lex}i\}$; this is a finite subset of the past of the reference cell. Repeated conditional-density factorization from [F3] gives, $P$-almost surely, $$\log h_N(\omega)=\sum_{i\in S_N}\log k_{A_{i,N}}(T_{-i}\omega).$$ Every finite factor is defined $P$-almost surely because the corresponding local relative entropy is finite by [F1]. [A1, F1, F2, F3, construct]

2.1 Fix $\varepsilon>0$. By the directed convergence in [F2], choose a finite past $A_*$ such that every finite $B\supseteq A_*$ satisfies $E_P|\log k_B-Z|<\varepsilon$. Put $R=\max\{|a_j|:a\in A_*,1\leq j\leq d\}$, with $R=0$ if $A_*=\varnothing$. Let $S_N^\circ$ consist of cells at least $R$ cells from each face of $S_N$. If $i\in S_N^\circ$, then $A_*\subseteq A_{i,N}$, so by stationarity $E_P|\log k_{A_{i,N}}(T_{-i}\omega)-Z(T_{-i}\omega)|<\varepsilon$. The boundary has $N^d-(N-2R)^d=o(N^d)$ cells (for $N>2R$). For every finite past $B$, $E_P\log k_B=g(B)\leq\gamma$ and $E_P(-\log k_B)^+\leq1/e$, hence $E_P|\log k_B|\leq\gamma+2/e$. For $Z=\log k_\infty$, $E_P(-\log k_\infty)^+=\int_{0<k_\infty<1}k_\infty(-\log k_\infty)\,dR_0\leq1/e$ on its reference probability $R_0=P_{F_+}\otimes Q_C$, so [F2] gives $E_P|Z|\leq\gamma+2/e$ as well. Summing the interior errors and bounding each boundary error by $2(\gamma+2/e)$ yields $$\left\|N^{-d}\log h_N-N^{-d}\sum_{i\in S_N}Z(T_{-i}\cdot)\right\|_{L^1(P)}\longrightarrow0,$$ since $\varepsilon$ was arbitrary. [A1, F1, F2, step 1.1, algebra]

3.1 For $j=1,\ldots,d$, the shift $U_jf=f\circ T_{-e_j}$ is a linear isometry on complex $L^2(P)$ by stationarity. Apply [F4] to $N^{-1}\sum_{n=0}^{N-1}U_j^n$, obtaining strong convergence to the orthogonal projection $P_j$ onto the $U_j$-invariant subspace. The coordinate shifts commute, so every average for coordinate $j$ commutes with every average for coordinate $k$; taking strong limits shows that the $P_j$ commute with each other and with the other coordinate averages. Since all these operators have norm at most one, a finite telescoping estimate gives strong convergence of the product of the $d$ averages to $P_1\cdots P_d$. This product is the orthogonal projection onto the intersection of the coordinate-invariant subspaces, because the $P_j$ are commuting orthogonal projections. The product averages are exactly the rectangular cube averages $N^{-d}\sum_{i\in S_N}Z_M(T_{-i}\cdot)$, so these converge in $L^2$ for bounded $Z_M$ to a function invariant under every integer shift. [A1, F4, step 2.1, algebra]

4.1 Since $Z\in L^1(P)$, dominated convergence gives $\|Z-Z_M\|_1\to0$. Cube averages are $L^1$ contractions, so the averages of $Z$ are Cauchy in $L^1$: for large $M$ their distance from the convergent averages of $Z_M$ is at most $\|Z-Z_M\|_1$. Let their $L^1$ limit be $s$. Every cube average has mean $E_PZ=\gamma$, hence $E_Ps=\gamma$. For each coordinate shift $e_j$, the averaging index cube and its translate have symmetric difference of exactly $2N^{d-1}$ indices, so $\|U_j A_NZ-A_NZ\|_1\leq2\|Z\|_1/N$. Passing to the $L^1$ limit gives $U_js=s$. These generators imply invariance under every integer translation. [A1, F2, F5, step 3.1, construct]

5.1 Fix $r\in\mathbb R^d$, put $G=\Lambda_N$, $G'=G+r$, and $B=G\cap G'$. For $N>2\|r\|_\infty$, $B$ contains a cube $J$ of side $N-2\|r\|_\infty$. By [F1] and restriction monotonicity, $D(P_G\Vert Q_G)\leq\gamma N^d$ and $D(P_B\Vert Q_B)\geq D(P_J\Vert Q_J)$; the latter divided by $N^d$ tends to $\gamma$. Therefore $N^{-d}(D(P_G\Vert Q_G)-D(P_B\Vert Q_B))\to0$. The conditional chain rule [F3] identifies $\log h_G-\log h_B$ with a conditional log density. Its mean is this entropy difference, and [F3] bounds its negative-part expectation by $1/e$; thus its $L^1(P)$ norm is at most the entropy difference plus $2/e$. The same bound applies to $G'$. Translation covariance gives $\log h_{G'}=(\log h_G)\circ T_{-r}$; thus the normalized information in $G$ and $G'$ have the same $L^1$ limit. Since $N^{-d}\log h_G\to s$, it follows that $s\circ T_{-r}=s$ $P$-almost surely for this $r$. [A1, F1, F3, step 4.1, construct]

6.1 Step 5.1 applies to every fixed $r\in\mathbb R^d$. For each rational $q$, the event $\{s\leq q\}$ is therefore invariant modulo null sets under every translation. Full-translation ergodicity makes each such event have probability $0$ or $1$. If $s$ were not almost surely constant, some rational sublevel set would have probability strictly between $0$ and $1$; hence $s$ is constant. Its mean from step 4.1 is $\gamma$, so $s=\gamma$. Combining with step 2.1 proves the asserted $L^1(P)$ limit. [A1, step 2.1, step 4.1, step 5.1]

7.1 To see that the invariant limit need not be constant, fix $z>0$ with $z\ne1$ and put $P_*=(Q+Q_z)/2$. It is stationary and has finite cell intensity by [F6]. Let $V=N^d$. Since $\Lambda_N$ is the union of $V$ unit cells, the common conditional position laws and independent cell configurations in [F6] give $$r_N:=\frac{d(Q_z)_{\Lambda_N}}{dQ_{\Lambda_N}}=e^{(1-z)V}z^{N_{\Lambda_N}},\qquad h_N^*:=\frac{d(P_*)_{\Lambda_N}}{dQ_{\Lambda_N}}=\frac{1+r_N}{2}.$$ Thus $D((Q_z)_{\Lambda_N}\Vert Q_{\Lambda_N})=E_{Q_z}\log r_N=V c_z$, where $c_z:=1-z+z\log z$; the expectation uses $E_{Q_z}N_{\Lambda_N}=zV$. By [F8], $x-1-\log x=\int_1^x(1-1/t)\,dt>0$ for $x>0$, $x\ne1$: the integrand is positive for $t>1$, negative for $t<1$, and the orientation reverses in the latter case. Applying this at $x=1/z$ gives $c_z=z(1/z-1-\log(1/z))>0$. By [F7], relative entropy is convex in its first argument, so $D((P_*)_{\Lambda_N}\Vert Q_{\Lambda_N})\leq Vc_z/2$. The specific-entropy formula [F1] therefore gives $I(P_*)\leq c_z/2<\infty$, and steps 1.1–5.1 yield an invariant limit $s_*\in L^1(P_*)$. Under $Q_\lambda$, put $K=N_{\Lambda_N}$ and $\theta=\lambda V$. Its Poisson mass formula gives $E[K(K-1)]=e^{-\theta}\theta^2\sum_{n\geq2}\theta^{n-2}/(n-2)!=\theta^2$, hence $E[(K-\theta)^2]=\theta$. For $\varepsilon>0$, the pointwise bound $\varepsilon^2V^2\mathbf1_{\{|K-\theta|>\varepsilon V\}}\leq(K-\theta)^2$ yields $Q_\lambda(|K/V-\lambda|>\varepsilon)\leq\lambda/(\varepsilon^2V)\to0$. Consequently $V^{-1}\log r_N\to1-z+\lambda\log z$ in $Q_\lambda$-probability. For every real $u$, $$0\leq V^{-1}\log(1+e^{Vu})-\max\{0,u\}\leq\frac{\log2}{V},$$ so $V^{-1}\log h_N^*\to0$ in $Q$-probability and $V^{-1}\log h_N^*\to c_z$ in $Q_z$-probability: $1-z+\log z<0$ by $\log z<z-1$, and $c_z>0$ for $z\ne1$. Since $P_*\geq Q/2$ and $P_*\geq Q_z/2$, convergence in $P_*$-probability to $s_*$ also holds under each component. Uniqueness of limits in probability forces $s_*=0$ $Q$-almost surely and $s_*=c_z$ $Q_z$-almost surely. These distinct values on positive-weight components show that $s_*$ is not constant $P_*$-almost surely. [A1, F1, F6, F7, F8, step 4.1, step 5.1, algebra] ∎

