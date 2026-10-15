---
id: thm-tdmath-uniform-tempered-exterior-pressure
kind: theorem
title: Uniform exterior-pressure limit for tempered configurations
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-tdmath-superstable-regular-interaction
  - lem-tdmath-integrable-tail-diagonal-gap
  - lem-tdmath-superquadratic-positive-core
  - thm-tdmath-decreasing-integrable-tail-free-cube-pressure
  - thm-holder-inequality-for-integrals
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
  lem-tdmath-superquadratic-positive-core: mathematical-premise
  thm-tdmath-decreasing-integrable-tail-free-cube-pressure: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 6, printed pp.188–191 / PDF pp.18–21: tempered exterior pressure comparison and near/far interactions."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Propositions 2.5–2.7 and 5.2–5.3, printed pp.140–144 and 151–155 / PDF pp.14–18 and 25–29: correlation and tempered moment bounds. The complete probability proof was visually checked."
---

## Statement

Assume a stable regular pair potential $\phi$ as in [[def-tdmath-superstable-regular-interaction]], with stability constant $B$, and the genuine finite-valued positive-core condition of [[lem-tdmath-superquadratic-positive-core]]: for some $r_0>0$, a nonincreasing $\chi:(0,r_0]\to(0,\infty)$ satisfies $\phi(x)\geq\chi(|x|_\infty)$ for $0<|x|_\infty\leq r_0$ and $\int_0^{r_0}\chi(r)r^{d-1}\,dr=+\infty$. Let $\Lambda_n=[-n-\tfrac12,n+\tfrac12)^d$, $V_n=(2n+1)^d$, $C_i=i+[-\tfrac12,\tfrac12)^d$, and $\mathcal C_{\rm lf}$ be the set of locally finite simple configurations $\zeta\subset\mathbb R^d$. For $t\geq0$ define
$$\Omega(t)=\left\{\zeta\in\mathcal C_{\rm lf}:\sum_{i\in\Lambda_n\cap\mathbb Z^d}N_{C_i}(\zeta)^2\leq tV_n\text{ for every integer }n\geq0\right\}.$$
For $\omega=(q_1,\ldots,q_N)\in\mathcal S_N(\Lambda_n)$, write $H_{n,\mathrm{free}}(\omega)=\sum_{1\leq i<j\leq N}\phi(q_i-q_j)$. For $\zeta\in\Omega(t)$, let $\zeta_n^{\rm out}=\zeta\setminus\Lambda_n$ and define the finite-volume boundary Hamiltonian
$$H_{n,\zeta}(\omega)=H_{n,\mathrm{free}}(\omega)+\sum_{i=1}^N\sum_{y\in\zeta_n^{\rm out}}\phi(q_i-y).$$
The exterior series has finite negative part by the proof below; its extended value may be $+\infty$, with $e^{-\beta(+\infty)}=0$. Define
$$Z_{n,\zeta}(N;\beta)=\frac1{N!}\int_{\mathcal S_N(\Lambda_n)}e^{-\beta H_{n,\zeta}(\omega)}\,dq_1\cdots dq_N,\qquad Z_{n,\zeta}(0;\beta)=1,\qquad \Xi_{n,\zeta}(z,\beta)=\sum_{N\geq0}z^NZ_{n,\zeta}(N;\beta).$$
For fixed $z,\beta>0$ and $t<\infty$, the free-wall grand pressure with this exterior pair energy satisfies
$$\lim_{n\to\infty}\sup_{\zeta\in\Omega(t)}\left|\frac1{V_n}\log\Xi_{n,\zeta}(z,\beta)-p(z,\beta)\right|=0,$$
where $p(z,\beta)$ is the free-cube pressure from [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]. The exterior configuration is restricted to the stated fixed square-count class; no volume-filling external field is included. The conclusion is conditional on the genuine positive core and does not infer it from superstability alone.

## Facts & Assumptions

**Given:** The positive divergent core, regular far tail, fixed $z,\beta>0$, and a fixed finite tempering constant $t$.

[F1] [[def-tdmath-superstable-regular-interaction]]: stability gives $\phi(x)\geq-2B$ for every nonzero separation, and the far pair interaction is bounded in absolute value by a decreasing integrable envelope $\psi$ outside some radius $R_0$.

[F2] [[lem-tdmath-integrable-tail-diagonal-gap]]: the cell envelope is summable, and the diagonal tail choice has $g(\ell)\to\infty$, $g(\ell)/\ell\to0$, and $(\ell/g(\ell))^d\eta(g(\ell))\to0$.

[F3] [[lem-tdmath-superquadratic-positive-core]]: for the genuine core there is an increasing finite-valued $h:\mathbb N_0\to[0,\infty)$ with $h(0)=0$, $h(m)/m^2\to\infty$, and $H\geq\sum_i h(N_i)-bN$ on unit cells. Translation invariance gives the same inequality for the centered cells $C_i$ used here.

[F4] [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]: all perturbed free-cube grand pressures at positive activity and inverse temperature exist and are finite.

[F5] [[thm-holder-inequality-for-integrals]]: Hölder’s inequality gives convexity of finite-volume log partition functions in inverse temperature and log activity.

[L1] Ruelle's tempered-boundary estimates apply to superstable, lower-regular interactions with the stated square-count exterior class; the full source proof and exact hypotheses were read. The near/far estimate used below is written explicitly in the proof.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Put $S_n=\{i\in\mathbb Z^d:|i|_\infty\leq n\}$, $v_n=|S_n|=V_n$, $N_i(\omega)=|\omega\cap C_i|$, $T_n(\omega)=\sum_{i\in S_n}N_i(\omega)^2$, and $T_n^h(\omega)=\sum_{i\in S_n}h(N_i(\omega))$. Choose $m_0\geq\lceil R_0+1\rceil$ and $M_0\geq\max\{2B,\psi(m_0-1)\}$. Set $\gamma_m=M_0$ for integers $m<m_0$ and $\gamma_m=\psi(m-1)$ for $m\geq m_0$. Then $\gamma$ is nonincreasing, dominates the negative part at every cell offset, dominates $|\phi|$ at offsets $m\geq m_0$, and $\sum_{j\in\mathbb Z^d}\gamma_{|j|_\infty}<\infty$ by [F1]–[F2]. Let $\Delta_m=\gamma_m-\gamma_{m+1}\geq0$ and $v_m=(2m+1)^d$. Since $\gamma_r=\sum_{m\geq r}\Delta_m$, Tonelli gives $\sum_m\Delta_m v_m=\sum_j\gamma_{|j|_\infty}<\infty$. Thus $\delta_k:=\frac12\sum_{m\geq k}\Delta_m v_m\to0$. [F1, F2, F3, algebra]

2.1 For an interior configuration $\omega\subset\Lambda_n$ and any $\zeta\in\Omega(t)$, the long-offset cell sum satisfies $$\sum_{i\in S_n,\ j\in\mathbb Z^d:\,|i-j|_\infty\geq k}\gamma_{|i-j|_\infty}N_i(\omega)N_j(\zeta)\leq\delta_k\bigl(T_n(\omega)+2^dtV_n\bigr).$$ Indeed, expand $\gamma_r=\sum_{m\geq r}\Delta_m$ and enlarge the offset set in the $m$th term to $j\in S_m+i$. With $$S_{n,m}(\zeta)=\sum_{j\in\mathbb Z^d}N_j(\zeta)^2\,\#\{i\in S_n:j\in S_m+i\},$$ the inequality $ab\leq(a^2+b^2)/2$ bounds that term by $\frac12\Delta_m(v_mT_n+S_{n,m})$. The multiplicity is at most $\min(v_n,v_m)$ and vanishes unless $j\in S_{n+m}$, so $S_{n,m}\leq\min(v_n,v_m)t v_{n+m}\leq2^dtv_nv_m$. Summing proves the estimate. [F2, step 1.1, algebra]

3.1 Set $g(r)=r\sqrt{h(r)}$ for $r\in\mathbb N_0$ and $g^*(s)=\sup_{r\in\mathbb N_0}\{rs-g(r)\}$. Then $g(r)/r^2\to\infty$ and $g(r)/h(r)\to0$, so $g^*(s)/s^2\to0$: for each $a>0$, eventually $g(r)\geq r^2/(4a)$, and completing the square gives $g^*(s)\leq as^2+C_a$. Also $rs\leq g(r)+g^*(s)$. For a fixed $k\geq m_0$, every near cross pair has its inside cell in $S_n\setminus S_{n-k}$ and its exterior cell in $S_{n+k}\setminus S_n$; its negative energy is at most $M_0$. Counting the finitely many offsets of size below $k$, for every $a>0$ we obtain $$W^-_{\rm near}\leq C_k\left(aT_n^h+C_a|S_n\setminus S_{n-k}|+atv_{n+k}+C_a|S_{n+k}\setminus S_n|\right).$$ Here $g(r)\leq ah(r)+C_a$ and $g^*(s)\leq as^2+C_a$ were used, with $\sum_{j\in S_{n+k}\setminus S_n}N_j(\zeta)^2\leq tv_{n+k}$. First choose $k$ large in step 2.1 so that its far negative-energy bound is at most $\epsilon(T_n^h+V_n)/2$. For this fixed $k$, both boundary-cell counts are $O_k(n^{d-1})$ and $v_{n+k}/v_n\to1$, so choosing $a$ small and then $n$ large makes the near bound at most $\epsilon(T_n^h+V_n)/2$. The far estimate uses $T_n\leq T_n^h+q^2V_n$ for a fixed $q$ with $h(r)\geq r^2$ when $r\geq q$. Consequently, for each $0<\epsilon<1$ and all sufficiently large $n$, $$W_n(\omega,\zeta)\geq-\epsilon T_n^h(\omega)-\epsilon V_n$$ uniformly over $\zeta\in\Omega(t)$. [F1, F2, F3, step 1.1, step 2.1, algebra]

3.2 For the lower bound, restrict interior particles to $\Lambda_{n-k}$, leaving the corridor empty. Choose $k\geq m_0$, so every interior-exterior cell offset is in the far tail. The two-sided estimate of step 2.1 gives $$|W(\omega,\zeta\setminus\Lambda_n)|\leq\delta_k\bigl(T_{n-k}(\omega)+2^dtV_{n-k}\bigr).$$ With $T_{n-k}\leq T_{n-k}^h+q^2V_{n-k}$, choose $k$ large enough that the right side is at most $\epsilon(T_{n-k}^h+V_n)$. Since $T_{n-k}^h\leq H_{n-k,\mathrm{free}}+bN$, integration over the restricted positions yields $$\Xi_{n,\zeta}(z,\beta)\geq e^{-\beta\epsilon V_n}\Xi(2(n-k)+1;ze^{-\beta\epsilon b},\beta(1+\epsilon))$$ uniformly over $\zeta$. For fixed $\epsilon$, the selected $k$ is fixed as $n\to\infty$, and the removed corridor volume fraction vanishes. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 By [F3], $T_n^h\leq H_{n,\mathrm{free}}+bN$. For each $0<\epsilon<1$ and all sufficiently large $n$, step 3.1 therefore gives $$\Xi_{n,\zeta}(z,\beta)\leq e^{\beta\epsilon V_n}\sum_{N\geq0}\frac{z^N}{N!}\int_{\mathcal S_N(\Lambda_n)}e^{-\beta H_{n,\mathrm{free}}+\beta\epsilon T_n^h}\,dq^N$$ and $$\sum_{N\geq0}\frac{z^N}{N!}\int_{\mathcal S_N(\Lambda_n)}e^{-\beta H_{n,\mathrm{free}}+\beta\epsilon T_n^h}\,dq^N\leq\Xi(2n+1;ze^{\beta\epsilon b},\beta(1-\epsilon)).$$ The inequality is uniform over $\zeta\in\Omega(t)$. [F3, step 3.1, algebra]

5.1 Divide the bounds in steps 4.1–3.2 by $V_n$ and let $n\to\infty$; [F4] supplies the perturbed free-cube pressure limits. These limits are finite convex functions of $(\beta,\log z)$ by Hölder's inequality [F5], since finite-volume log partition functions are convex and pointwise limits preserve convexity. A finite convex function is continuous on the open parameter domain $\beta>0$, $z>0$. Let $\epsilon\downarrow0$ in both uniform bounds. Their upper and lower limits coincide with $p(z,\beta)$ uniformly over $\Omega(t)$. For $t=0$, every exterior configuration in $\Omega(0)$ is empty, so the equality with the free-wall pressure is immediate. [F4, F5, step 4.1, step 3.2, algebra] ∎
