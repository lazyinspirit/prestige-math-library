---
id: lem-dirichlet-normal-mixture-interval-mass-local-prior-mass
kind: lemma
title: "Interval masses give a log-free local KL neighborhood for the mixture prior"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - lem-gaussian-convolution-kl-and-log-square-second-order-bound
  - lem-dirichlet-normal-mixture-finite-support-approximation
  - lem-dirichlet-process-simplex-small-ball
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-normal-location-scale-density
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the Dirichlet-process and normal-law suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ghosal and van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities (2007), Theorem 1 and Section 9"
      url: "https://arxiv.org/pdf/0708.1885"
---

## Statement

Assume AC. Let $p_0\in C^2(\mathbb R)$ be a probability density with compact support $K$, a finite union of intervals. Suppose $J=\int_{\{p_0>0\}}(p_0'')^2/p_0<\infty$ and there are $a,c>0$ such that $P_0(I)\ge c\lambda(I)^a$ for every interval $I\subseteq K$. Let $F\sim DP(\alpha)$, where $\alpha$ is a finite nonzero measure with continuous strictly positive density on a neighborhood of $K$, and independently let $S\sim G$ for any probability measure $G$ on $(0,\infty)$. Suppose $n^{-a_1}\lesssim\sigma_n\lesssim n^{-a_2}$ for $0<a_2<a_1<1$, and put $\sigma=\sigma_nS$. Then for constants $C_1,C_2>0$ and all sufficiently large $n$,
$$ \Pi_n\left\{\mathrm{KL}(P_0\Vert P_{F,\sigma})\le C_1\sigma_n^4,\quad P_0\left[\log\frac{p_0}{p_{F,\sigma}}\right]^2\le C_1\sigma_n^4\right\}\ge\exp\{-C_2\sigma_n^{-1}(\log n)^2\}. $$
Consequently, for $d_n=\max\{(n\sigma_n)^{-1/2}\log n,\sigma_n^2\}$, the same two local quantities are at most $C_1d_n^2$ on a set of prior mass at least $e^{-C_3nd_n^2}$. Logarithmic integrands vanish where $p_0=0$.

## Facts & Assumptions

**Given:** AC and all hypotheses of the Statement.

[F1] Gaussian convolution of this truth has KL and log-square error at most $(4/9)\sigma^4J$. [[lem-gaussian-convolution-kl-and-log-square-second-order-bound]]

[F2] A compactly supported mixing law in an interval of length at most a fixed multiple of $\tau$ has a discrete normal-mixture approximation at scale $\tau$ with $O(\log(e/\eta))$ atoms, $L^1$ error at most $\eta$ and supremum error at most $\eta/\tau$. [[lem-dirichlet-normal-mixture-finite-support-approximation]]

[F3] For a finite partition with interval-cell base masses in $[c\eta^2,1]$ and $N\eta\le1/4$, a DP finite vector has probability at least $C\exp\{-c'N\log(e/\eta)\}$ of having total target-weight discrepancy plus residual mass at most $3\eta$. [[lem-dirichlet-process-simplex-small-ball]]

[F4] The mixture density is jointly measurable, positive and finite. [[lem-dirichlet-normal-mixture-density-well-defined]]

[F5] The Gaussian kernel has formula $\phi_\sigma(x)=(\sigma\sqrt{2\pi})^{-1}e^{-x^2/(2\sigma^2)}$. [[lem-normal-location-scale-density]]

## Proof

1.1 Choose $0<s_-<s_+<\infty$ with $g:=G([s_-,s_+])>0$, possible because these compact intervals exhaust $(0,\infty)$. Set $b_n=\sigma_n$, $\tau=s_-b_n$, $B=a+6$ and $\eta=b_n^B$. For all large $n$, partition each nondegenerate component of $K$ into equal consecutive Borel intervals of lengths in $[\tau/8,\tau/4]$: use $\lceil4\ell/\tau\rceil$ pieces for a component of length $\ell$. Endpoints can be assigned arbitrarily because $P_0$ has a density. The support of a continuous density has no isolated points, so there are no isolated support components to treat. There are $O(b_n^{-1})$ coarse cells $I_k$, each of mass at least $c' b_n^a$. Translate the conditional probability $P_0(\cdot\mid I_k)$ to an interval centered at zero, apply [F2] at scale $\tau$, and translate back. Multiplying by $P_0(I_k)$ and summing gives a finite probability $F_n$ with at most $C b_n^{-1}\log(e/\eta)$ atoms in the closures of these cells, each carrying its original coarse-cell label, and $\|p_{F_n,\tau}-p_{P_0,\tau}\|_\infty\le\eta/\tau$. The total weight of atoms with label $k$ is exactly $P_0(I_k)$. [F2, given, choose, construct]

1.2 Put $\delta=\eta\tau$. Move each atom to a nearest point of the global lattice of mesh $\delta$ and merge atoms at the same location. Preserve its fractional label weights when merging. The resulting distinct locations $z_j$ are separated by at least $\delta$, with weights $w_j$ summing to one, and still number $N\le Cb_n^{-1}\log(e/\eta)$. Let $U_j=[z_j-\delta/4,z_j+\delta/4)$ and $U_0=\mathbb R\setminus\bigcup_{j=1}^NU_j$. These are disjoint partition cells. The base density is bounded above and below on a fixed compact neighborhood of $K$, so $c_0\eta\tau\le\alpha(U_j)\le C_0\eta\tau\le1$ eventually. Since $B>1$, $\eta\tau\ge c_1\eta^2$ and $N\eta\to0$. Also $\sum_j\alpha(U_j)\le C N\delta\to0$, so, writing $m=\alpha(\mathbb R)>0$, we have $\alpha(U_0)\in[m/2,m]$ eventually. [given, step 1.1, construct, algebra]

1.3 Apply [F3] with tolerance $\eta$ to get an event $E_n$ on which $\sum_j|F(U_j)-w_j|+F(U_0)\le3\eta$ and $\Pi_{DP}(E_n)\ge\exp\{-C b_n^{-1}(\log n)^2\}$. Its constants can be taken uniform in $n$: in the proof of [F3] the only residual-parameter factors are $\Gamma(m)/\Gamma(\alpha(U_0))$ and a lower bound $(\eta^2/2)^m$ for the residual power. The gamma ratio is bounded below on the fixed compact interval $[m/2,m]$, and the latter power already has fixed exponent $m$. The remaining constants use only the fixed bound $c_1\eta^2\le\alpha(U_j)\le1$. Finally $\log(e/\eta)\le C\log n$ by the polynomial lower bandwidth bound. [F3, step 1.2, algebra]

2.1 For $\tau\le\sigma\le s_+b_n$, the original discrete approximation still satisfies $\|p_{F_n,\sigma}-p_{P_0,\sigma}\|_\infty\le C\eta/b_n$. Indeed the Gaussian convolution identity $\phi_u*\phi_v=\phi_{\sqrt{u^2+v^2}}$ follows by completing the square and integrating; convolution with a probability kernel contracts the supremum norm by the triangle inequality. Use $u=\tau$, $v=\sqrt{\sigma^2-\tau^2}$, treating equality by the original approximation. Differentiating [F5] gives $\|\phi_\sigma'\|_\infty\le C\sigma^{-2}$. Atom relocation by at most $\delta/2$ therefore changes the mixture by at most $C\delta/\sigma^2\le C\eta/b_n$. For $F\in E_n$, replacing each $F|_{U_j}$ by its mass at $z_j$ costs at most the same derivative bound times $\delta/4$; the weight discrepancies and residual mass cost at most $3\eta\|\phi_\sigma\|_\infty$. Consequently, uniformly over $F\in E_n$ and $\tau\le\sigma\le s_+b_n$, one has $\|p_{F,\sigma}-p_{P_0,\sigma}\|_\infty\le C\eta/b_n$. [F4, F5, step 1.1, step 1.2, step 1.3, algebra]

2.2 For any $x\in K$ choose a coarse cell whose closure contains $x$. Its length is at most $\tau/4$, so every original atom with that label, and every associated relocated atom-cell, lies in $[x-\tau,x+\tau]$ eventually. Let $J_x$ be the set of relocated atom indices carrying a positive fraction of this label's weight. Merging preserves the full label weight, so $\sum_{j\in J_x}w_j\ge P_0(I_k)\ge c' b_n^a$. The vector discrepancy on $E_n$ implies $F([x-\tau,x+\tau])\ge\sum_{j\in J_x}F(U_j)\ge c'b_n^a-3\eta\ge c'b_n^a/2$. On this neighborhood, [F5] is at least $c''/b_n$ for every $\tau\le\sigma\le s_+b_n$. Thus $p_{F,\sigma}(x)\ge c'''b_n^{a-1}$. The same argument directly with the coarse-cell mass under $P_0$ gives $p_{P_0,\sigma}(x)\ge c'''b_n^{a-1}$, after decreasing the constant. [F4, F5, step 1.1, step 1.2, step 1.3, algebra]

3.1 Put $q=p_{P_0,\sigma}$ and $r=p_{F,\sigma}$. The mean-value theorem for the logarithm and steps 2.1–2.2 give $\sup_{x\in K}|\log(q(x)/r(x))|\le C\eta b_n^{-a}=Cb_n^6$. By [F1], $\mathrm{KL}(P_0\Vert Q)\le Cb_n^4$ and $P_0[\log(p_0/q)]^2\le Cb_n^4$ uniformly in these scales. Adding the bounded log perturbation proves $\mathrm{KL}(P_0\Vert P_{F,\sigma})\le Cb_n^4+Cb_n^6\le C'b_n^4$. The inequality $(u+v)^2\le2u^2+2v^2$ similarly gives $P_0[\log(p_0/r)]^2\le C'b_n^4$. All integrals exist by the displayed bounds, and integrands vanish off $\{p_0>0\}$. [F1, step 2.1, step 2.2, algebra]

3.2 The scale event $S\in[s_-,s_+]$ has fixed probability $g>0$ and is independent of $F$. Therefore $E_n$ times this event is contained in the displayed KL/log-square set and has probability at least $g\exp\{-C b_n^{-1}(\log n)^2\}$. Increase $C_2$ to absorb $g$. Since $nd_n^2\ge b_n^{-1}(\log n)^2$ and $d_n^2\ge b_n^4$, the consequent local-radius form follows as well. This proves all assertions without a unimodality hypothesis. [given, step 1.3, step 3.1, algebra] ∎
