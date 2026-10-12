---
id: lem-cm-lattice-shell-count-and-weight-sums
kind: lemma
title: "Lattice ball and shell counts and weight sums on the frequency lattice"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-periodic-vector-sobolev-space-and-leray-projection, def-countable-choice, def-measure, def-nonnegative-extended-series, thm-lebesgue-measure-of-a-box-of-every-kind, cor-volume-of-a-radius-r-n-ball, thm-cauchy-schwarz-finite, thm-integral-test-for-series]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  def-countable-choice: mathematical-premise
  def-measure: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  cor-volume-of-a-radius-r-n-ball: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  thm-integral-test-for-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of Sobolev spaces on T^3: the weight sums and Cauchy-Schwarz estimates behind H^s inclusions)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Subsection 1.9.1 (Fourier coefficients and Plancherel on one-periodic fields) and Subsection 3.2.1 with the appendix to Chapter 3 (the Sobolev-space calculus inequalities used for local existence)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as the Lebesgue-measure statements quoted below do. Let $w_k=(1+|2\pi k|_2^2)^{1/2}$ for $k\in\mathbb Z^3$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

1. **Ball count.** For every $R\ge0$,
$$\#\{\,k\in\mathbb Z^3: |k|_2\le R\,\}\;\le\;\frac{4\pi}{3}\Bigl(R+\frac{\sqrt3}{2}\Bigr)^3 .$$
2. **Shell count.** There is an absolute constant $C_*$ such that for every integer $m\ge1$
$$\#\{\,k\in\mathbb Z^3: m\le|k|_2<m+1\,\}\;\le\;C_*(m+1)^2 ;$$
the proof exhibits $C_*=240$.
3. **Weight sums.** If $\sigma>3/2$ then $\sum_{k\in\mathbb Z^3}w_k^{-2\sigma}<+\infty$; more generally, if $\sigma-r>3/2$ then $\sum_{k\in\mathbb Z^3}w_k^{2r-2\sigma}<+\infty$. In particular $\sum_{k\in\mathbb Z^3}(2\pi|k|_2)^2w_k^{-2\sigma}<+\infty$ whenever $\sigma>5/2$.
4. **$\ell^1$ bounds.** If $\sigma>3/2$, then for every family $c:\mathbb Z^3\to\mathbb C^3$
$$\sum_{k\in\mathbb Z^3}|c(k)|_2\;\le\;W_\sigma\Bigl(\sum_{k\in\mathbb Z^3}w_k^{2\sigma}|c(k)|_2^2\Bigr)^{1/2},\qquad W_\sigma:=\Bigl(\sum_{k\in\mathbb Z^3}w_k^{-2\sigma}\Bigr)^{1/2}<+\infty ,$$
and if $\sigma>5/2$, then with $W'_\sigma:=\bigl(\sum_k(2\pi|k|_2)^2w_k^{-2\sigma}\bigr)^{1/2}<+\infty$,
$$\sum_{k\in\mathbb Z^3}2\pi|k|_2\,|c(k)|_2\;\le\;W'_\sigma\Bigl(\sum_{k\in\mathbb Z^3}w_k^{2\sigma}|c(k)|_2^2\Bigr)^{1/2}.$$
5. **Truncation tails.** For every integer $N\ge0$, every real $r$ and every family $c:\mathbb Z^3\to\mathbb C^3$,
$$\sum_{|k|_\infty>N}w_k^{2r}|c(k)|_2^2\;\le\;\bigl(2\pi(N+1)\bigr)^{-2}\sum_{|k|_\infty>N}w_k^{2r+2}|c(k)|_2^2 ,$$
both sides allowed to be $+\infty$; in particular, for $u\in H^{r+1}$ the $H^r$-weighted tail beyond $|k|_\infty>N$ is at most $(2\pi(N+1))^{-2}\|u\|_{H^{r+1}}^2$.

## Facts & Assumptions

**Given:** The weight family $w_k=(1+4\pi^2|k|_2^2)^{1/2}$ of [[def-periodic-vector-sobolev-space-and-leray-projection]], with $w_k\ge1$, $w_k\ge2\pi|k|_\infty$ and $|2\pi k_j|\le w_k$ for $j=1,2,3$.

[F1] A measure is countably additive on pairwise disjoint measurable sets, hence finitely additive: if $A,B$ are disjoint measurable sets then $\mu(A\cup B)=\mu(A)+\mu(B)$, and monotonicity $A\subseteq B\Rightarrow\mu(A)\le\mu(B)$ follows by applying additivity to the disjoint sequence $A,B\setminus A,\varnothing,\varnothing,\dots$ ([[def-measure]]).

[F2] The half-open box $\prod_{i<3}(a_i,b_i]$ is Lebesgue measurable of measure $\prod_{i<3}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] The closed ball of radius $R$ in $\mathbb R^3$ has volume $\frac43\pi R^3$, which is the value $V_3(R)=\pi^{3/2}R^3/\Gamma(5/2)$ of [[cor-volume-of-a-radius-r-n-ball]].

[F5] For a family $a:\mathbb N\to[0,+\infty]$ the nonnegative extended sum is the supremum of the finite partial sums, and the finite sums are the usual ones ([[def-nonnegative-extended-series]]); in particular a nonnegative series converges exactly when its finite partial sums are bounded.

[F6] For reals $a_0,\dots,a_{n-1}$ and $b_0,\dots,b_{n-1}$, $|\sum_{k<n}a_kb_k|\le\bigl(\sum_{k<n}a_k^2\bigr)^{1/2}\bigl(\sum_{k<n}b_k^2\bigr)^{1/2}$ ([[thm-cauchy-schwarz-finite]]).

[F7] If $f:[0,\infty)\to\mathbb R$ is nonincreasing and nonnegative, then $\sum_{k\ge0}f(k)$ converges if and only if the integrals $\int_0^Nf$ are bounded ([[thm-integral-test-for-series]]); this yields the convergence of $\sum_{m\ge1}m^{-p}$ for $p>1$.

## Proof

**Proof technique:** direct; count lattice points by packing unit boxes into a ball, then compare the weight sums with convergent $p$-series and apply Cauchy-Schwarz to finite partial sums.

**Given:** The weight family $w_k$ and the facts [F1]-[F7].

1.1 For $k\in\mathbb Z^3$ let $H_k:=\prod_{i=1}^{3}\bigl(k_i-\tfrac12,k_i+\tfrac12\bigr]$ be the half-open unit box centred at $k$. Distinct $H_k$ are pairwise disjoint: if $k\ne l$ then $k_i-l_i\ge1$ for some $i$, and the half-open intervals $(k_i-\tfrac12,k_i+\tfrac12]$ and $(l_i-\tfrac12,l_i+\tfrac12]$ are disjoint. Each $H_k$ is measurable of measure $1$ by [F2], and $H_k\subseteq B(0,R+\tfrac{\sqrt3}{2})$ whenever $|k|_2\le R$, because for $x\in H_k$ one has $|x|_2\le|k|_2+|x-k|_2\le R+\sqrt3/2$. [given, F2]

2.1 Let $N(R):=\#\{k\in\mathbb Z^3:|k|_2\le R\}$. The union $U_R:=\bigcup_{|k|_2\le R}H_k$ is a finite disjoint union of measurable sets, so by induction on the number of boxes and [F1] one has $\lambda_3(U_R)=\sum_{|k|_2\le R}\lambda_3(H_k)=N(R)$. Since $U_R\subseteq B(0,R+\sqrt3/2)$ by step 1.1 and the open ball is measurable, monotonicity in [F1] gives $N(R)=\lambda_3(U_R)\le\lambda_3(B(0,R+\sqrt3/2))=\frac43\pi(R+\sqrt3/2)^3$ by [F4]; this is claim 1. [step 1.1, F1, F4]

3.1 For an integer $m\ge1$ the shell $\{m\le|k|_2<m+1\}$ is contained in $\{|k|_2\le m+1\}\setminus\{|k|_2\le m-1\}$, and $\{|k|_2\le m-1\}\subseteq\{|k|_2\le m+1\}$, so its cardinality is at most $N(m+1)-N(m-1)\le\frac43\pi\bigl[(m+1+\frac{\sqrt3}{2})^3-(m-1+\frac{\sqrt3}{2})^3\bigr]$ by claim 1. With $a:=m-1+\frac{\sqrt3}{2}$ the bracket equals $(a+2)^3-a^3=6a^2+12a+8\le24m^2+24m+8\le56m^2$ for $m\ge1$ (as $a\le2m$), so the shell count is at most $\frac43\pi\cdot56\,m^2\le240(m+1)^2$; this is claim 2 with $C_*=240$. [step 2.1, algebra]

4.1 Write $\Sigma_\sigma:=\sum_{k\in\mathbb Z^3}w_k^{-2\sigma}$ as a nonnegative extended sum and split it into the mode $k=0$ and the shells of index $m\ge1$. Using claim 2, $w_k^2\ge4\pi^2m^2$ on the $m$-th shell and $1\le m$, we get the finite-partial-sum bound $\Sigma_\sigma\le1+\sum_{m\ge1}240(m+1)^2(4\pi^2m^2)^{-\sigma}\le1+240(2m)^2m^{-2\sigma}(4\pi^2)^{-\sigma}$ summed; more explicitly there is a constant $C$ with $\sum_{|k|_2\le M}w_k^{-2\sigma}\le1+C\sum_{m\le M}m^{2-2\sigma}$ for every $M$. If $\sigma>3/2$ then $2\sigma-2>1$, so $\sum_{m\ge1}m^{2-2\sigma}$ converges by [F7]; by [F5] the finite partial sums of $\Sigma_\sigma$ are bounded, so $\Sigma_\sigma<+\infty$. Replacing $\sigma$ by $\sigma-r$ gives the general weight sum $\sum_kw_k^{2r-2\sigma}=\sum_kw_k^{-2(\sigma-r)}<+\infty$ whenever $\sigma-r>3/2$, and with $r=1$ and $\sigma>5/2$ this gives $\sum_k(2\pi|k|_2)^2w_k^{-2\sigma}\le\sum_kw_k^{2-2\sigma}<+\infty$, since $2\pi|k|_2\le w_k$; this is claim 3. [step 3.1, F4, F5, F7, given]

5.1 For claim 4 fix a family $c$ and a finite $F\subseteq\mathbb Z^3$. Cauchy-Schwarz [F6] applied to the lists $a_k=w_k^{-\sigma}$ and $b_k=w_k^{\sigma}|c(k)|_2$, $k\in F$, gives $\sum_{k\in F}|c(k)|_2\le\bigl(\sum_{k\in F}w_k^{-2\sigma}\bigr)^{1/2}\bigl(\sum_{k\in F}w_k^{2\sigma}|c(k)|_2^2\bigr)^{1/2}\le W_\sigma\|c\|_{\ell^2_\sigma}$, with $W_\sigma$ finite by claim 3; taking the supremum over finite $F$ by [F5] gives the first bound. The second bound is the same computation with the lists $a_k=2\pi|k|_2w_k^{-\sigma}$ and $b_k=w_k^{\sigma}|c(k)|_2$, whose first factor is $W'_\sigma<\infty$ by claim 3 with $r=1$ and $\sigma>5/2$. [step 4.1, F5, F6]

6.1 For claim 5 let $|k|_\infty>N$, so $2\pi|k|_\infty\ge2\pi(N+1)$ and hence $w_k\ge2\pi(N+1)$ by the given inequality $w_k\ge2\pi|k|_\infty$; therefore $w_k^{2r}\le(2\pi(N+1))^{-2}w_k^{2r+2}$ for every such $k$. Summing this pointwise inequality over the finite sets $\{|k|_\infty>N,\ |k|_2\le M\}$ and taking the supremum in $M$ by [F5] gives claim 5; for $u\in H^{r+1}$ the right-hand side is at most $(2\pi(N+1))^{-2}\|u\|_{H^{r+1}}^2$. [given, F5, algebra] ∎

## Remarks

- The count in claim 1 is the standard packing of unit half-open cubes into the ball of radius $R+\sqrt3/2$; it is sharp up to the constant, which is all the later estimates use.
- Claim 3 and claim 4 are the only place where the threshold $\sigma>3/2$ for the torus dimension $3$ enters: the lattice sum $\sum_kw_k^{-2\sigma}$ converges exactly when $2\sigma>3$, and the $\ell^1$ bound for coefficients is what forces Sobolev fields of order $>3/2$ to have absolutely convergent Fourier series, and hence continuous representatives.
- The tail inequality in claim 5 is the quantitative form of the strong convergence of the Fourier truncations: it shows that the truncation error in $H^r$ is bounded by the $(r+1)$-norm divided by the first omitted frequency.
