---
id: lem-dirichlet-normal-mixture-local-prior-mass
kind: lemma
title: "The mixture prior places local KL and log-square mass near a compact smooth truth"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-dirichlet-normal-mixture-finite-support-approximation
  - lem-hellinger-ratio-controls-kl-moments
  - lem-dirichlet-process-simplex-small-ball
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - def-hellinger-distance-between-density-laws
  - lem-hellinger-distance-controls-l1-and-total-variation
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - lem-normal-location-scale-density
  - lem-normal-location-scale-mean-and-variance
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "Full AC is inherited from the Dirichlet-process construction and the directional KL convention."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, §§6–9"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, §6.3.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

Assume AC. Let $p_0$ be a bounded probability density supported on a compact
set $K\subset\mathbb R$. Let $\alpha$ be a finite nonzero measure with a
continuous density bounded below by a positive constant on a neighborhood of
$K$. Assume
$$h(p_0,p_0*\phi_\sigma)\le C\sigma^2$$
for all sufficiently small $\sigma>0$, where $\phi_\sigma$ is the centered
normal density with standard deviation $\sigma$. Let $F\sim DP(\alpha)$ and
let $S\sim G$ be independent, where $G$ is any probability measure on
$(0,\infty)$. Suppose $n^{-a_1}\lesssim\sigma_n\lesssim n^{-a_2}$ for
$0<a_2<a_1<1$. Set $\sigma=\sigma_nS$ and
$$\delta_n:=\max\{(n\sigma_n)^{-1/2}\log n,\ \sigma_n^2\log n\}.$$
Then, for some constant $C_1>0$ and all sufficiently large $n$,
$$\Pi_n\!\left\{(F,\sigma):\mathrm{KL}(P_0\Vert P_{F,\sigma})\le C_1\delta_n^2,\quad P_0\left[\log\frac{p_0}{p_{F,\sigma}}\right]^2\le C_1\delta_n^2\right\} \ge e^{-C_1n\delta_n^2}.$$
Here $p_{F,\sigma}$ is the density of [[lem-dirichlet-normal-mixture-density-well-defined]],
and all logarithmic integrands are set to zero on $\{p_0=0\}$.

## Facts & Assumptions

**Given:** AC; the compactly supported bounded density $p_0$; the stated Gaussian-convolution Hellinger bound; the finite base measure $\alpha$ with a positive continuous density near $K$; the independent priors $F\sim DP(\alpha)$ and $S\sim G$; and the polynomial bounds on $\sigma_n$.

[A1] AC supplies $DP(\alpha)$ and the directional KL convention. [[def-axiom-of-choice]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]] [[def-kullback-leibler-divergence]]

[F1] [[lem-dirichlet-normal-mixture-density-well-defined]]: $p_{F,\sigma}(x)=\int\phi_\sigma(x-z)F(dz)$ is a positive finite-valued jointly measurable density.

[F2] [[lem-dirichlet-normal-mixture-finite-support-approximation]]: a probability mixing law on a compact interval has a discrete approximation with logarithmically many atoms and controlled $L^1$ and supremum mixture errors.

[F3] [[lem-dirichlet-process-simplex-small-ball]]: for a finite partition whose interval-cell base masses are bounded below by $c\eta^2$, a DP vector has probability at least $e^{-c'N\log(e/\eta)}$ of being within $O(\eta)$ of any target weight vector while every interval-cell mass is at least $\eta^2/2$. The residual-cell mass may be zero (then that coordinate is omitted); for fixed positive residual mass the constants may depend on its value, uniformly on compact subsets of $(0,m]$.

[F4] [[lem-hellinger-ratio-controls-kl-moments]]: if $h^2(p,q)$ is small and $\|p/q\|_\infty\le R<\infty$, then $\mathrm{KL}(p\Vert q)\le Ch^2(1+\log^+R)$ and $P[(\log(p/q))^2]\le Ch^2(1+\log^+R)^2$.

[F5] [[def-dirichlet-process]] and [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]]: the finite evaluation vector of $F$ on a measurable partition has the Dirichlet law with parameters given by $\alpha$.

[F6] [[def-hellinger-distance-between-density-laws]] and [[lem-hellinger-distance-controls-l1-and-total-variation]]: $h$ is the root-L2 distance between square-root densities, satisfies the triangle inequality, and $h^2(p,q)\le\int|p-q|d\lambda$.

[F7] [[lem-normal-location-scale-density]]: $\phi_\sigma(x-z)=\sigma^{-1}\phi((x-z)/\sigma)$ for the standard normal density $\phi$.

[F8] For a standard normal random variable $Z$, $E[Z^2]=1$. [[lem-normal-location-scale-mean-and-variance]]

[F9] Nonnegative product integrals may be interchanged. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $G$ is a probability on $(0,\infty)=\bigcup_{m\ge1}[1/m,m]$, choose $0<s_-<s_+<\infty$ with $g:=G([s_-,s_+])>0$. Put $\sigma_-=s_-\sigma_n$. Apply the moment-matching proof of [F2] to the law $P_0$ at scale $\sigma_-$, restricting each compact moment curve to $K$ intersected with the closure of its partition interval. The same convex-hull reduction and remainder bounds then give a finite discrete probability $F_n$ supported on $K$ with at most $C\sigma_n^{-1}\log n$ atoms and $\|p_{F_n,\sigma_-}-p_{P_0,\sigma_-}\|_1\le\eta_n$, where $\eta_n:=\sigma_n^8$. [F2, given, choose]

1.2 Choose an open neighborhood $V$ of $K$ on which the density of $\alpha$ is bounded above and below by positive constants. By compactness, choose a fixed finite union $D$ of disjoint compact intervals with $K\subset\operatorname{int}D\subset D\subset V$. Move each atom of $F_n$ to a nearest point of a lattice of mesh $\eta_n\sigma_-$, merge coincident atoms, and call the resulting law $\widetilde F_n$. Each atom moves by at most $\eta_n\sigma_-/2$; for every $\sigma\ge\sigma_-$ this changes the mixture in $L^1$ by at most $\eta_n/2$, since $\|\partial_z\phi_\sigma(\cdot-z)\|_1=E|Z|/\sigma\le1/\sigma\le1/\sigma_-$, using $2|Z|\le1+Z^2$ and [F8]. The relocated locations are separated by at least $\eta_n\sigma_-$. Around each take a centered cell of length $\ell_n=\eta_n\sigma_-/2$. In each component of $D$, split every intervening or end gap of length $g\ge\ell_n$ into $q=\lceil2g/\sigma_-\rceil$ equal subintervals. For large $n$, the end gaps have length at least $\ell_n$ because $K\subset\operatorname{int}D$, and gaps between atom-cells have length at least $\ell_n$ by lattice separation. If $q=1$, the subinterval length lies in $[\ell_n,\sigma_-/2]$; if $q\ge2$, then $g>\sigma_-/2$ and $q\le4g/\sigma_-$, so each subinterval has length in $[\sigma_-/4,\sigma_-/2]$. The resulting Borel partition $U_1,\ldots,U_N$ of $D$ has every cell length between $c\eta_n\sigma_-$ and $\sigma_-/2$, every atom-cell diameter at most $2\eta_n\sigma_-$, and $N\le C(m_n+\sigma_-^{-1})\le C\sigma_n^{-1}\log n$, where $m_n$ is the number of atoms. Let $w_j=\widetilde F_n(U_j)$, so $\sum_jw_j=1$. For all large $n$, $c\eta_n\sigma_n\le\alpha(U_j)\le1$ and $c\eta_n\sigma_n\ge c'\eta_n^2$. Also $N\eta_n\le C\sigma_n^7\log n\to0$. The residual cell is $U_0=\mathbb R\setminus D$, so $\alpha(U_0)$ is fixed, possibly zero. Apply [F3] with $a=c'$, $b=2$, and $\eta=\eta_n$; its constant may depend on this fixed residual mass. We obtain an event $E_n$ with $\Pi_{DP}(E_n)\ge e^{-C N\log(e/\eta_n)}\ge e^{-C\sigma_n^{-1}(\log n)^2}$, on which $F(U_0)\le3\eta_n$, $\sum_j|F(U_j)-w_j|\le3\eta_n$, and $F(U_j)\ge\eta_n^2/2$ for every $j$. [A1, F3, F5, F7, F8, given, construct]

2.1 For $F$ in $E_n$, compare $p_{F,\sigma}$ with $p_{\widetilde F_n,\sigma}$, uniformly for $s_-\sigma_n\le\sigma\le s_+\sigma_n$. On atom cells, replacing $F|_{U_j}$ by its mass at the center costs at most $C\eta_n$ in $L^1$ by the [F7] location derivative bound and cell diameter. The event bounds make the total mass on gap cells and $U_0$ at most $C\eta_n$ and the sum of weight discrepancies at most $C\eta_n$. Since each normal density has $L^1$ norm one, $\|p_{F,\sigma}-p_{\widetilde F_n,\sigma}\|_1\le C\eta_n$. For every such $\sigma$, the relocation estimate in step 1.2 also gives $\|p_{\widetilde F_n,\sigma}-p_{F_n,\sigma}\|_1\le C\eta_n$. If $\sigma>\sigma_-$, completing the square gives $\phi_{\sigma_-}*\phi_v=\phi_\sigma$ for $v=\sqrt{\sigma^2-\sigma_-^2}$; at $\sigma=\sigma_-$ the identity is immediate. Convolution by a probability density contracts $L^1$ by Tonelli [F9], so $\|p_{F_n,\sigma}-p_{P_0,\sigma}\|_1\le\|p_{F_n,\sigma_-}-p_{P_0,\sigma_-}\|_1\le\eta_n$. Thus [F6] gives $h(p_{F,\sigma},p_{P_0,\sigma})\le C\sqrt{\eta_n}$, and the assumed bias bound gives $h(p_0,p_{F,\sigma})\le C(\sigma_n^2+\sqrt{\eta_n})\le C\sigma_n^2$. [F1, F2, F6, F7, F9, given, step 1.1, step 1.2, algebra]

3.1 For every $x\in K$, the interval $[x-\sigma_-,x+\sigma_-]$ contains a full cell $U_j$ because $D$ contains a fixed neighborhood of $K$ and all cells have length at most $\sigma_-/2$. On this interval $\phi_\sigma(x-z)\ge c/\sigma$ for $s_-\sigma_n\le\sigma\le s_+\sigma_n$. Thus [F1] and the cell-mass lower bound in step 1.2 give $p_{F,\sigma}(x)\ge c\eta_n^2/\sigma_n$. Since $p_0$ is bounded and vanishes outside $K$, $R_n:=\|p_0/p_{F,\sigma}\|_\infty\le C\sigma_n\eta_n^{-2}=C\sigma_n^{-15}$. Step 2.1 gives $h(p_0,p_{F,\sigma})\le C\sigma_n^2$, and the polynomial lower bound on $\sigma_n$ gives $1+\log^+R_n\le C\log n$. Apply [F4] to $p=p_0$ and $q=p_{F,\sigma}$ to obtain both local KL quantities at most $C\sigma_n^4(\log n)^2\le C\delta_n^2$. [F1, F4, F6, F7, given, step 1.2, step 2.1, algebra]

4.1 The scale event $S\in[s_-,s_+]$ has probability $g>0$ and is independent of $F$. Thus the subset $E_n\times\{S\in[s_-,s_+]\}$ is contained in the displayed local KL/log-square set and has prior probability at least $g e^{-C\sigma_n^{-1}(\log n)^2}$. By the definition of $\delta_n$, $n\delta_n^2\ge\sigma_n^{-1}(\log n)^2$, so increasing $C_1$ absorbs $g$ and proves the required lower bound. [given, step 1.2, step 3.1, algebra] ∎
