# Finite estimates for the three operational coding bridges

Isolated construction, not a ready receipt. All spaces below are nonzero finite-dimensional; logarithms are natural. Write $T(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$, $h(t)=-t\ln t-(1-t)\ln(1-t)$, and $g(t)=(1+t)\ln(1+t)-t\ln t$, with continuous endpoint values. Root fidelity is distinguished from squared entanglement fidelity.

## Entropy of a finite mixture

For states $\rho_i$ and finite probabilities $p_i$, put $\bar\rho=\sum_i p_i\rho_i$. Then
$$0\le S(\bar\rho)-\sum_i p_iS(\rho_i)\le H(p).$$

Proof. Omit zero weights. Positivity of $\bar\rho-p_i\rho_i$ implies $\ker\bar\rho\subseteq\ker\rho_i$ (take its quadratic form on a kernel vector), so every relative entropy below is finite. Expanding the spectral cross traces gives
$$S(\bar\rho)-\sum_i p_iS(\rho_i)=\sum_i p_iD(\rho_i\Vert\bar\rho)\ge0$$
by the actual finite-state QRE nonnegativity supplier. For the upper bound, diagonalize each $\rho_i=\sum_j\lambda_{ij}|v_{ij}\rangle\langle v_{ij}|$, omitting zero eigenvalues, and purify the mixture as $|v\rangle=\sum_{ij}\sqrt{p_i\lambda_{ij}}|v_{ij}\rangle\otimes|i,j\rangle$. Its label marginal $G$ has diagonal $q_{ij}=p_i\lambda_{ij}$ and has the same nonzero eigenvalues as $\bar\rho$ by Schmidt decomposition. For $\Delta=\operatorname{diag}(q)$, positivity gives $\operatorname{supp}G\subseteq\operatorname{supp}\Delta$; hence
$$0\le D(G\Vert\Delta)=H(q)-S(G)=H(p)+\sum_i p_iS(\rho_i)-S(\bar\rho).$$
This proves both bounds, including singleton/zero-weight cases.

## Quantitative entropy continuity

For states on dimension $d\ge1$ and $t=T(\rho,\sigma)$,
$$|S(\rho)-S(\sigma)|\le t\ln d+g(t).$$
The bound is deliberately weaker than sharp Fannes–Audenaert and suffices with dimension growing exponentially in block length.

Proof. If $t=0$, equality of the states settles the claim. Otherwise the positive and negative parts of $\rho-\sigma$ have trace $t$, because that difference has trace zero. Normalize them to states $\omega_+,\omega_-$. Then
$$\theta=\frac{\rho+t\omega_-}{1+t}=\frac{\sigma+t\omega_+}{1+t}.$$
Apply the lower mixture-entropy bound to the first representation and upper bound to the second. After multiplication by $1+t$ this gives
$$S(\rho)-S(\sigma)\le t\bigl[S(\omega_+)-S(\omega_-)\bigr]+(1+t)h(t/(1+t))\le t\ln d+g(t).$$
Interchanging the states gives the absolute-value bound. Dimension one causes no exception. The function $g$ is increasing and concave: for $t>0$, $g'(t)=\ln(1+1/t)>0$ and $g''(t)=-1/[t(1+t)]<0$; continuity extends Jensen to $t=0$.

Consequently, if states $\sigma_m$ on dimension $d$ have average half-distance $a=M^{-1}\sum_m T(\sigma_m,\sigma)$ from one target state $\sigma$, then their uniform Holevo information satisfies
$$\chi(\{M^{-1},\sigma_m\})\le2a\ln d+2g(a).$$
Indeed the average state is within $a$ by the triangle inequality; apply the entropy-continuity estimate to its entropy and to the average of the individual entropies, and use Jensen for $g$. This is a proved quantitative implication for this particular finite ensemble, not an identification of secrecy metrics. When $d=d_E^n$ and $a$ decays exponentially, the unnormalized Holevo information tends to zero.

## Exponential spectral-projector estimates

For every fixed finite ensemble $p_x,\rho_x$ and fixed $\eta>0$, there are constants $C,c>0$ (depending on this ensemble and $\eta$, not $n$) and projectors $P_n,Q_{x^n}$ such that, writing $\bar\rho=\sum p_x\rho_x$ and $s=\sum p_xS(\rho_x)$,
$$\operatorname{rank}P_n\le e^{n(S(\bar\rho)+\eta)},\quad P_n\bar\rho^{\otimes n}P_n\preceq e^{-n(S(\bar\rho)-\eta)}P_n,$$
$$\operatorname{rank}Q_{x^n}\le e^{n(s+\eta)},\quad Q_{x^n}\rho_{x^n}Q_{x^n}\preceq e^{-n(s-\eta)}Q_{x^n},$$
and
$$\mathbb E\operatorname{tr}(\rho_{X^n}(I-P_n))\le Ce^{-cn},\qquad\mathbb E\operatorname{tr}(\rho_{X^n}(I-Q_{X^n}))\le Ce^{-cn}.$$
The second pair of algebraic bounds holds for every word, including words with zero sampling probability; no per-word high-acceptance assertion is required.

Proof. For $P_n$, retain product eigenvectors of $\bar\rho^{\otimes n}$ whose positive eigenvalue has negative logarithm in $n[S(\bar\rho)-\eta,S(\bar\rho)+\eta]$. For $Q_{x^n}$, use product eigenvectors of $\rho_{x^n}=\bigotimes_i\rho_{x_i}$ whose eigenvalue has negative logarithm in $n[s-\eta,s+\eta]$. The upper eigenvalue bounds are immediate. The lower retained eigenvalue and trace at most one imply each rank bound. Under the joint law $\Pr(X=x,J=j)=p_x\lambda_{xj}$, with zero-probability eigenvalues omitted, the random variable $Z=-\ln\lambda_{XJ}$ has finite support and mean $s$. Its IID sum controls the second failure probability exactly. The first failure is the same argument for the spectral law of $\bar\rho$; averaging inputs gives $\bar\rho^{\otimes n}$.

For completeness, a finite supported centered variable $Y$ with $|Y|\le b$ obeys $\mathbb E e^{uY}\le1+u^2b^2e^{|u|b}/2$, by the Taylor remainder and $\mathbb EY=0$. For small fixed $u>0$, $\ln\mathbb E e^{uY}<u\eta/2$. Markov's inequality and independence then bound $\Pr(\sum Y_i\ge n\eta)\le e^{-nu\eta/2}$; apply the same argument to $-Y$ and add. A constant spectral variable has zero failure probability and needs no division by a range. All logarithms are evaluated only on positive-probability eigenvalues.

## Exact type reduction to flat states

Let $\rho=\sum_{j=1}^d\lambda_j|j\rangle\langle j|$. The product $\rho^{\otimes n}$ decomposes as
$$\rho^{\otimes n}=\sum_t p_t\tau_t,$$
where $t$ ranges over its positive-probability spectral types and $\tau_t$ is the uniform state on that type subspace. There are at most $(n+1)^d$ such types; their supports are orthogonal. Thus
$$\sum_t p_tS(\tau_t)=nS(\rho)-H(T),\quad H(T)\le d\ln(n+1).$$
For any fixed channel $\mathcal N$ with complement $\mathcal N^c$, the mixture bounds applied separately to their outputs yield
$$\sum_t p_t I_c(\tau_t,\mathcal N^{\otimes n})\ge nI_c(\rho,\mathcal N)-H(T),$$
$$\sum_t p_t\{S(\tau_t)+I_c(\tau_t,\mathcal N^{\otimes n})\}\ge n\{S(\rho)+I_c(\rho,\mathcal N)\}-2H(T).$$
Indeed the averaged receiver entropy is at least its mixture entropy minus $H(T)$; averaged environment entropy is at most its mixture entropy. The input entropy identity follows directly by summing eigenvalues over disjoint type blocks. Therefore in each inequality some flat type state attains at least the displayed lower bound. These are exact finite-$n$ estimates; no replacement of fixed-dimensional continuity by a uniform bound is involved.
