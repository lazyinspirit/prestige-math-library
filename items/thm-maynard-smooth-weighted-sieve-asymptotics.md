---
dependency_level: 4
id: thm-maynard-smooth-weighted-sieve-asymptotics
kind: theorem
title: "Complete smooth S1 and S2 asymptotics from a given prime level"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-admissible-prime-tuple
  - def-maynard-variational-quantity-mk
  - thm-chinese-remainder-theorem
  - lem-maynard-s1-diagonal-form-with-error
  - lem-maynard-prime-coordinate-diagonal-form-with-error
  - lem-maynard-prime-coordinate-y-marginal-transfer
  - lem-prime-power-removal-for-fixed-tuple-divisor-weights
justified_by: []
proof_strategy: direct
axiom_use: "Finite arithmetic, Riemann integrals and absolutely convergent numerical series; no choice axiom is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Proposition4.1 and its full proof in Sections5–6; finite presieve from Proposition4.2. Local proof uses the library psi-level convention directly."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Let $k\ge2$, let $H=\{h_1<\cdots<h_k\}\subset\mathbb Z$ be admissible, and suppose the primes have level $\theta>0$ in the full-weight endpoint convention. Fix $0<2\alpha<\min(\theta,1)$ and a real $\Phi\in C_c^\infty(U_k)$, $U_k=\{t_i>0,\sum_i t_i<1\}$. For sufficiently large positive integers $N$ set
$$y=\log\log\log N,\quad W=\prod_{p\le y}p,\quad a=\varphi(W)/W,\quad R=N^\alpha,\quad L=\log R.$$
There exists a residue $v\pmod W$ with $(v+h_i,W)=1$ for every $i$; choose any such residue. Define $Y_r=\Phi(\log r/L)$ when $\prod r_i<R$ is squarefree and coprime to $W$, zero otherwise, and
$$\lambda_d=\left(\prod_i\mu(d_i)d_i\right)\sum_{d_i\mid r_i}\frac{Y_r}{\prod_i\varphi(r_i)},\qquad w(n)=\left(\sum_{d_i\mid n+h_i}\lambda_d\right)^2.$$
Then the finite nonnegative weights on $\mathcal N_N=\{n\in[N,2N)\cap\mathbb Z:n\equiv v\pmod W\}$ satisfy
$$S_1=\sum_{n\in\mathcal N_N}w(n)=C_N(I_k(\Phi)+o(1)),\quad S_2=\sum_{n\in\mathcal N_N}w(n)\sum_i1_{\mathbb P}(n+h_i) =C_N\left(\alpha\sum_iJ_{k,i}(\Phi)+o(1)\right),\qquad C_N=\frac{Na^kL^k}{W}>0.$$
The errors tend to zero for fixed $k,H,\theta,\alpha,\Phi$ uniformly in the allowed residue $v$. All $I,J$ are the actual Riemann functionals. Neither BV nor an additional choice hypothesis is assumed.

## Facts & Assumptions

**Given:** The parameters and prime level in the Statement; $N$ tends to infinity through positive integers.

[F1] [[def-admissible-prime-tuple]] means each prime misses some shift residue. [[thm-chinese-remainder-theorem]] gives finite simultaneous residues modulo pairwise-coprime primes.

[F2] [[lem-maynard-s1-diagonal-form-with-error]] gives the full $S_1$ asymptotic, including its CRT endpoint error.

[F3] [[lem-maynard-prime-coordinate-diagonal-form-with-error]] gives each prime-logarithmic moment $T_j$ with all weighted endpoint, proper-power and cross-array errors.

[F4] [[lem-maynard-prime-coordinate-y-marginal-transfer]] gives $Z_{\max}\ll aL$ and $\sum Z_j(r)^2/\prod g(r_i)=(aL)^{k+1}(J_{k,j}+O(1/y+K_* /(aL)))$, where $K_*=(1+\log\log(3WR^k))^2$.

[F5] [[lem-prime-power-removal-for-fixed-tuple-divisor-weights]] also gives $|T_j-(\log N)S_j|\ll_H S_j$ for the nonnegative prime moment $S_j$.

[F6] [[def-maynard-variational-quantity-mk]] defines $I_k,J_{k,j}$ as Riemann integrals.

## Proof

1.1 For each prime $p\le y$, admissibility says that the $-h_i$ also miss a residue: negation is a permutation. Take the least missing representative in $\{0,\ldots,p-1\}$ and apply finite CRT. Its least representative modulo $W$ defines one valid $v$. This explicit finite prescription is available for each $N$ without selecting an infinite family of witnesses by choice. For large $N$, $y>\max(3,h_k-h_1)$ and all the supporting hypotheses of [F2]–[F5] hold. The fixed parameters obey $\alpha<1/2$ and $2\alpha<\theta$. [F1, given, construct]

1.2 Apply [F2] to get $S_1=C_N(I_k+o(1))$. Its normalized error is bounded by a fixed constant times [F2, given, algebra]
$$\frac1y+\frac{K_*}{aL}+W a^{-k}N^{2\alpha-1}(\log N)^{3k}.$$
These terms tend to zero because $\log W\le y\log y=o(\log\log N)$, $a^{-1}\le W$ and $2\alpha<1$. The bounds do not depend on $v$. [F2, given, algebra]

2.1 For each $j$, use [F4] in [F3]. The principal term is [F3, F4, step 1.2, algebra]
$$\frac N{\varphi(W)}(aL)^{k+1}J_{k,j}=C_N L J_{k,j}.$$
Its relative diagonal/marginal errors are $O(1/y+K_* /(aL))$ and its cross-array error is $O(1/y)$, using $Z_{\max}\ll aL$. The endpoint error is $O(Y^2N(\log N)^{-B})$ for any fixed $B$, where $Y=\|\Phi\|_\infty$. Dividing it by $C_N L$ gives at most a constant times $W a^{-k}(\log N)^{-B}L^{-k-1}\to0$, for instance with $B=k+10$. Finally choose $\varepsilon=1/4$ in the proper-power error. Since $\lambda_{\max}\ll_k YL^k$, its ratio to $C_N L$ is
$$O_{k,H,\Phi}\left(Wa^{-k}N^{-1/4}L^{k-1}(\log N)^2\right)\to0.$$
Here the coefficient bound is part of [F3]'s proved input. Thus $T_j=C_NL(J_{k,j}+o(1))$. All estimates are uniform in $v$, since the distribution estimate maximizes over its reduced residue. [F3, F4, step 1.2, algebra]

3.1 For large $N$, [F5] gives [F5, F6, step 2.1, algebra]
$$(\log N-C_H)S_j\le T_j\le(\log N+C_H)S_j.$$
The lower factor is positive. These inequalities give $S_j=(T_j/\log N)(1+O_H(1/\log N))$, including the case $T_j=S_j=0$. Substituting step 2.1 and summing the finitely many coordinates yields
$$S_2=C_N\left(\frac L{\log N}\sum_jJ_{k,j}+o(1)\right) =C_N\left(\alpha\sum_jJ_{k,j}+o(1)\right).$$
All integral identifications are those of [F6], since a smooth compact interior function has smooth zero extension and smooth marginals. A zero $\Phi$ gives zero weights without a positivity assertion; $C_N$ itself is positive for large $N$. This proves the full Statement without invoking a prime-counting main term or a prime-number theorem. [F5, F6, step 2.1, algebra] ∎
