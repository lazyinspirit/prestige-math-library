---
dependency_level: 1
id: lem-fourier-decay-gives-full-series-lacunary-moment-bound
kind: lemma
title: "Fourier decay and the full-series lacunary moment bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-lacunary-linear-form-count-with-unrestricted-coefficients
  - thm-minkowski-inequality-for-integrals
  - thm-integration-by-parts
  - lem-continuous-functions-riemann-integrable
  - lem-fejer-kernel-is-a-positive-approximate-identity
proof_strategy: direct
sources:
  references:
    - title: "Chow–Technau, Dispersion and Littlewood's conjecture"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "§3 proof of Theorem 3.1; full Fourier bands replace its uniform truncation assertion"
axiom_use: "No choice premise. Compact one-dimensional periodization is proved directly by finite Fourier coefficients and explicit Fejer kernels. Counting is finite; norm limits have uniform scalar tails on the GIVEN Borel probability space."
---

## Statement

Let $(a_t)$ be positive integers with $a_{t+1}>ra_t$, $r>1$. Let $\mu$ be a Borel probability on $[0,1]$ with $|\widehat\mu(k)|\le C_0(1+|k|)^{-\tau}$ for every integer $k$, where $\tau,C_0>0$. Fix $\eta>0$ and a real nonnegative smooth bump $\omega$ supported on $[-1,1]$ with integral1. For integers $T$ sufficiently large put
$$D=(\log T)^{3+2\eta},\qquad \Delta=D/T,\qquad L=\lfloor T/(\log T)^{3+\eta}\rfloor,\qquad K=a_T/8.$$
For $c\in\mathbb R$ define the full smooth periodized count
$$C_{T,c}(\beta)=\sum_{T<t\le2T}\sum_{v\in\mathbb Z}\omega((a_t\beta-c+v)/\Delta).$$
There is a constant $A$, depending only on $r,\eta,C_0,\tau,\omega$, such that uniformly for all $c\in\mathbb R$ and integers $1\le s\le T$,
$$\|C_{T,c}-D\|_{L^{2s}(\mu)}\le A\left(\frac{sD}{(\log T)^{1+\eta/2}}+DLK^{-\tau/(2s)}\right).$$
The lower threshold on $T$ can also depend on $a_1$. No uniform smallness of a truncated Fourier tail is asserted or needed.

## Statement references

[Chow–Technau, proof of Theorem 3.1](https://arxiv.org/pdf/2307.14871v1) — concentration via lacunary counting; the arbitrary-frequency tail is retained in this formulation.

## Facts & Assumptions

**Given:** The data of the Statement; write $e(x)=\exp(2\pi ix)$ and $p=2s$.

[F1] For any $Y\ge2$ and $m\ge1$, the ordered lacunary coefficient count at threshold $K\le a_T/8$ is at most $m!C_r^m\max\{(YT W)^{m/2},Y^{m-1}TW^{m-1}\}$, with $W=\lceil\log(16mY)/\log r\rceil$. [[lem-lacunary-linear-form-count-with-unrestricted-coefficients]]

[F2] Compact continuous functions have Riemann integrals; real integration by parts holds for continuously differentiable functions. The one-dimensional Fejer kernels are the finite positive trigonometric polynomials $K_N(u)=(N+1)^{-1}|\sum_{j=0}^N e(ju)|^2$, have integral1, and have mass at most $[(N+1)\sin^2(\pi h)]^{-1}$ on $[h,1-h]$. These unqualified finite-calculus interfaces suffice for the compact periodization proved in step 1.1. [[thm-integration-by-parts]] [[lem-continuous-functions-riemann-integrable]] [[lem-fejer-kernel-is-a-positive-approximate-identity]]

[F3] The $L^p$ norm of a finite sum of nonnegative real functions is at most the sum of their $L^p$ norms for $p\ge1$. Combining this with the pointwise modulus inequality gives the same estimate for complex sums. [[thm-minkowski-inequality-for-integrals]]

## Proof

**Proof technique:** finite even-moment expansion in every dyadic Fourier band, then summation of the bounds.

1.1 Define $\widehat\omega(u)=\int_{-1}^1\omega(x)e(-ux)\,dx$ by the compact Riemann integral, componentwise for complex values. Four integrations by parts using [F2] give $|\widehat\omega(u)|\le A_4(1+|u|)^{-4}$, with $A_4=16\max\{1,(2\pi)^{-4}\int_{-1}^1|\omega^{(4)}|\}$, because all endpoint derivatives vanish; also $|\widehat\omega(u)|\le1$. For a fixed $\Delta>0$, let $P_\Delta(x)=\sum_{v\in\mathbb Z}\omega((x+v)/\Delta)$. On $[0,1]$ this is a finite sum: terms with $|v|>\lceil\Delta\rceil+2$ vanish. It is smooth and one-periodic. Finite splitting into translated intervals and affine substitution compute its Fourier coefficient as $b_l=\int_0^1P_\Delta(x)e(-lx)\,dx=\Delta\widehat\omega(\Delta l)$. Thus $\sum_l|b_l|<\infty$ by the explicit fourth-power tail, and $H(x)=\sum_l b_le(lx)$ converges absolutely uniformly. To identify the series without invoking general Poisson summation, convolve $P_\Delta$ with the finite kernel $K_N$ from [F2]. Its finite expansion gives $P_\Delta*K_N=\sum_{|l|\le N}(1-|l|/(N+1))b_le(lx)$. If $M=\sup|P_\Delta'|$ and $M_0=\sup|P_\Delta|$, positivity and the far-mass bound in [F2] bound its uniform difference from $P_\Delta$ by $Mh+2M_0/[(N+1)\sin^2(\pi h)]$. The explicit choice $h=(N+1)^{-1/4}$ for $N\ge16$, with $\sin(\pi h)\ge2h$, makes this tend to zero. These same Cesaro sums tend uniformly to $H$, since the Fourier series is absolutely uniformly convergent. Therefore $P_\Delta=H$. All integrals just used are of continuous functions on compact intervals; their identification with any existing Borel Lebesgue integral follows directly by the upper and lower step functions on the canonical dyadic partitions, whose integral gap tends to zero by uniform continuity. This requires no complete-measure construction, arbitrary null-set covers or countable selection. Substituting $x=a_t\beta-c$ and summing over the finite block yields $C_{T,c}=\Delta\sum_l\widehat\omega(\Delta l)e(-lc)\sum_{T<t\le2T}e(la_t\beta)$; its zero term is exactly $T\Delta=D$, and its nonzero series converges absolutely uniformly in $\beta,c$ for each fixed $T$. [given, F2, algebra]

2.1 Split the nonzero frequencies into $0<|l|\le L$ for band0 and $2^{j-1}L<|l|\le2^jL$ for band $j\ge1$, and denote the resulting real trigonometric polynomials by $P_j$. Put $Y_j=2^jL$, $b_0=1$, and for $j\ge1$ put $b_j=A_4(\Delta 2^{j-1}L)^{-4}$. Each coefficient before $e(la_t\beta)$ has modulus at most $\Delta b_j$. For large $T$, $\Delta L$ is comparable to $(\log T)^\eta$ and in particular at least1. Consequently $\sum_{j\ge0}b_j2^j(1+j/\log T)$ is bounded independently of $T$. [step 1.1, construct, algebra]

3.1 Expand $\int P_j^p\,d\mu$ as a finite sum; $P_j$ is real because conjugate frequencies occur together, and $p$ is even. A term has frequency $\sum_{i=1}^p l_i a_{t_i}$, an integer, so the Fourier-decay hypothesis applies. Those of modulus at most $K$ have count bounded by F1 with $m=p,Y=Y_j,Z=T$. The remaining terms number at most $(2Y_jT)^p$ and each has Fourier integral modulus at most $C_0K^{-\tau}$. Taking the $p$-th root and using $(p!)^{1/p}\le p$ therefore gives $\|P_j\|_p\le A b_j[\Delta p\{\sqrt{Y_jTW_j}+Y_j^{1-1/p}T^{1/p}W_j^{1-1/p}\}+DY_jK^{-\tau/p}]$, where $W_j=\lceil\log(16pY_j)/\log r\rceil$. The phase factors containing $c$ have modulus1, so all constants are uniform in $c$. [F1, step 2.1, given, algebra]

4.1 Since $s\le T$, one has $W_j\le A_r(\log T+j)$ for large $T$ and $Y_0W_0\le T$. At $j=0$ the second expression in braces is at most the first: their ratio is $(Y_0W_0/T)^{1/2-1/p}\le1$. Also $\Delta p\sqrt{LTW_0}\le A_rsD/(\log T)^{1+\eta/2}$. Each brace expression in band $j$ is at most a constant times $2^j(1+j/\log T)$ times its band0 value; this follows directly from its powers of $Y_j$ and $W_j$. The last term scales by exactly $2^j$. Multiplying by $b_j$ and summing now gives $\sum_j\|P_j\|_p\le A[sD/(\log T)^{1+\eta/2}+DLK^{-\tau/p}]$, by step 2.1. [step 2.1, step 3.1, algebra]

5.1 Apply F3 to finite sums of the $P_j$. Their fixed-$T$ uniform convergence from step 1.1 implies convergence in $L^p(\mu)$ because $\mu$ is a probability; the norm of a uniformly bounded error is at most its uniform bound. Passing to the limit proves the displayed inequality for the full series. A suitable bump exists explicitly: normalize $\exp(-1/(1-x^2))$ on $|x|<1$, extended by zero elsewhere; repeated differentiation and $t^M e^{-t}\to0$ show smoothness at the endpoints. Thus neither the proof nor its applications depend on a formal unconstructed bump or an unsupported growing-$T$ Fourier truncation. [F3, step 1.1, step 4.1, algebra] ∎

