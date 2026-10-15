# Independent focused review of the interval-mass repair

The proposed repair is sound, with the implementation details below made explicit. I read the current finite-support approximation, simplex small-ball, local-prior-mass, interval-mass corollary and contraction theorem. This report reviews the proposed argument; the current corollary still contains its authoring blocker.

## Gaussian bias

Let $P_t$ denote convolution with a Gaussian of variance $t$. For a nonnegative density $p\in C_c^2$, at any nonisolated zero Taylor's formula along a sequence of zeros gives $p''=0$. Isolated zeros are countable. Thus $p''=rp$ almost everywhere, with $r=p''/p$ on the positive set and zero elsewhere, and $\int r^2p=J$.

The heat equation, including continuity at time zero, gives
$$p-P_tp=-\frac12\int_0^tP_sp''\,ds.$$
For $0<s\le t$, Gaussian kernel comparison and Cauchy--Schwarz give
$$P_tp\ge\sqrt{s/t}\,P_sp,\qquad |P_sp''|^2\le(P_sp)P_s(r^2p),\qquad \int\frac{|P_sp''|^2}{P_tp}\le\sqrt{t/s}\,J.$$
Weighted Cauchy--Schwarz in time with $w(s)=(t/s)^{1/4}$, followed by Tonelli and $\int_0^tw(s)ds=4t/3$, yields
$$\chi^2(p\Vert P_tp)\le\frac14\left(\frac{4t}{3}\right)^2J=\frac49t^2J.$$
The time integrals are integrable at zero; the heat identity follows by differentiating convolution since $p''$ is continuous and compactly supported.

For $u>0$, $u(\log u)^2\le(u-1)^2$: write $u=e^v$ and use $2|\sinh(v/2)|\ge|v|$. Also $u\log u-u+1\le(u-1)^2$ follows from $\log u\le u-1$. Both extend at zero with the prescribed conventions. Integrating against $q=P_tp$ proves
$$\mathrm{KL}(p\Vert q)\le\chi^2(p\Vert q),\qquad \int p(\log(p/q))^2\le\chi^2(p\Vert q).$$
Setting $t=\sigma^2$ proves both bias bounds of order $\sigma^4$, with no unimodality or positive central plateau. The theorem's additional integral involving $p'$ is unnecessary for this step but may remain in its contract.

## Finite approximation and DP mass

Write $b_n=\sigma_n$, $\sigma_-=s_-b_n$, and $\eta_n=b_n^{a+6}$. Partition each fixed support component into coarse intervals whose lengths are bounded below by a fixed positive multiple of $\sigma_-$ and above by $\sigma_-/4$. This is possible eventually for finitely many nondegenerate components. Endpoint assignments do not affect $P_0$ mass. The lower interval-mass premise then gives $P_0(I)\ge c'b_n^a$ for every coarse cell. An upper length bound alone would not imply this.

Apply the actual finite-support approximation lemma to each conditional law on a coarse cell after translating its closure to a centered interval. All approximating atoms stay in that closure. Multiply by $P_0(I)$ and sum. This preserves each coarse contribution, uses $O(b_n^{-1}\log n)$ atoms, and has supremum error at most $\eta_n/\sigma_-$ at scale $\sigma_-$. Gaussian convolution propagates the supremum bound to all larger scales. Applying the lemma just once on the whole support would not establish coarse-mass preservation.

Relocate onto a global lattice of mesh $\delta_n=\eta_n\sigma_-$, merge coincidences, and use centered disjoint atom cells of length $\delta_n/4$ plus their complement $U_0$. Retain fractional coarse-cell contributions as bookkeeping weights when merging. The sum of the target weights over merged atoms receiving a contribution from a fixed coarse cell $I$ is at least $P_0(I)$, even when an atom receives contributions from multiple cells.

On a fixed compact neighborhood the base density is bounded above and below. Atom-cell base masses therefore lie between $c\eta_nb_n$ and $C\eta_nb_n$, are at most one eventually, and are bounded below by $c'\eta_n^2$ because $a+6>1$. Also $N\eta_n\to0$. The union of atom cells has length $O(\eta_n\log n)\to0$, so $\alpha(U_0)\in[m/2,m]$ eventually, where $m=\alpha(\mathbb R)$.

The current simplex lemma's statement allows constants depending on $\alpha(U_0)$, so its statement alone does not justify uniformity for varying partitions. Its actual proof does: $1/\Gamma(\alpha(U_0))$ has a uniform positive lower bound on $[m/2,m]$. When the residual-coordinate exponent is positive its factor is at least $(\eta_n^2/2)^m$, and otherwise at least one. Remaining constants depend only on fixed parameters. Any factor $C_0^{-N}$ in its gamma bound is absorbed in the exponential constant. Consequently its proof gives a uniform event
$$\sum_{j=1}^N|F(U_j)-w_j|+F(U_0)\le3\eta_n$$
with probability at least
$$\exp\{-CN\log(e/\eta_n)\}\ge\exp\{-Cb_n^{-1}(\log n)^2\}.$$
No positive lower bound on each individual random atom-cell mass is needed here.

## Likelihood ratio and contraction

For $x$ in a coarse cell $I$, each associated atom cell lies within $\sigma_-$ of $x$ eventually: the original atom lies in the closure of $I$, relocation costs at most $\delta_n/2$, and cell radius is $\delta_n/8$. The DP event gives mass at least $P_0(I)-3\eta_n\ge c''b_n^a$ to the union of those cells. The Gaussian kernel there is uniformly at least $c/b_n$ for $\sigma\in[s_-b_n,s_+b_n]$. Hence $q_{F,\sigma}(x)\ge cb_n^{a-1}$. Integrating over $I$ directly gives the same lower bound for $q_{0,\sigma}=P_0*\phi_\sigma$.

The Gaussian location derivative has supremum norm $C/\sigma^2$. Finite approximation, relocation, within-cell movement, weight discrepancies and residual mass give
$$\|q_{F,\sigma}-q_{0,\sigma}\|_\infty\le C\eta_n/b_n.$$
The lower bounds and the mean value theorem for the logarithm imply on the support
$$|\log(q_{0,\sigma}/q_{F,\sigma})|\le C\eta_nb_n^{-a}=Cb_n^6.$$
Consequently the bias bound gives
$$\mathrm{KL}(P_0\Vert P_{F,\sigma})\le Cb_n^4+Cb_n^6\le C'b_n^4,$$
and $(u+v)^2\le2u^2+2v^2$ gives
$$P_0[\log(p_0/q_{F,\sigma})]^2\le Cb_n^4+Cb_n^{12}\le C'b_n^4.$$
Every probability measure $G$ on $(0,\infty)$ gives some compact interval $[s_-,s_+]$ positive mass. Independence supplies the full local-prior-mass bound, absorbing this fixed factor in its exponential constant.

Use the improved local radius $d_n=\max\{(nb_n)^{-1/2}\log n,b_n^2\}$ and repeat the contraction theorem's proof with this radius. Its entropy supplier already depends only on the first and middle rate terms; the posterior-sieve calculation remains valid with the smaller denominator radius. The compact-scale branch again omits the middle term. Merely invoking the unchanged theorem's final displayed rate would not prove the refined conclusion.

No mathematical obstruction remains in the proposed repair. The authored proof should explicitly include the coarse-length lower bound, translated per-cell application of the finite-support supplier, merged-contribution bookkeeping, and uniform simplex constants. No source items were edited and no tests or gates were run for this focused mathematical review.

## Outside cycle 2: integrated-source review

Accepted on focused mathematical review. I read the complete current bodies of `lem-gaussian-convolution-kl-and-log-square-second-order-bound`, `lem-dirichlet-normal-mixture-interval-mass-local-prior-mass`, and `cor-dirichlet-normal-mixture-interval-mass-refinement`. I also checked the actual contracts and proof interfaces of the countable-band entropy, posterior-sieve-tail, and countably partitioned contraction suppliers used in the new corollary proof. No actual defect was found in these three integrated arguments.

The Gaussian supplier proves the heat identity, zero-set assertion, weighted estimate with constant $4/9$, and both scalar logarithm inequalities. The local-mass supplier now includes both coarse-length bounds, translated conditional approximation, fractional label bookkeeping through merging, and the uniform residual-Dirichlet parameter argument. Its atom cells have radius $\delta/4$ rather than the smaller radius considered above; they remain disjoint and within the required $\tau$ neighborhood, so this harmless change preserves every estimate. The supremum perturbation is uniform throughout the fixed scale slab, and its logarithmic contribution is $O(b_n^6)$.

The corollary preserves its Statement and supplies the genuine contraction argument at the improved local radius. The denominator coefficient is $3$, so the sieve supplier's required leakage condition is exactly $nq_n-5n\bar d_n^2\to\infty$, as established. Its location tolerance is $\xi_n$, with $n\xi_n^2\to\infty$ and the required distant-location bound. The dyadic partition and tail tolerance agree with the entropy supplier; the compact-scale branch uses its first-term-only clause. The final contraction supplier does not require the target radius to tend to zero, so bandwidth choices for which the middle term is large create no missing case.

This is acceptance of the focused mathematical repair and its displayed consumer proof, not a claim of native gate execution or whole-frontier certification. No source edits, tests, proof-layout runs, hashes or metadata changes were performed in this review.
