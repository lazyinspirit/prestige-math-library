---
id: lem-fourier-tail-diagonal-compact-convergence
kind: lemma
title: "Diagonal extraction of a converging Fourier subsequence from high-norm bounds and the tail estimate"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [cor-mean-value-theorem, def-periodic-vector-sobolev-space-and-leray-projection, lem-cm-lattice-shell-count-and-weight-sums, def-countable-choice, cor-bolzano-weierstrass-in-rn, thm-countable-union-of-countable, def-countable, cor-archimedean-reciprocal, lem-integer-part, def-interval]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-cm-lattice-shell-count-and-weight-sums: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-bolzano-weierstrass-in-rn: mathematical-premise
  thm-countable-union-of-countable: mathematical-premise
  def-countable: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
  lem-integer-part: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Subsection 3.2.3 (uniform bounds in C([0,T];H^m) and Lip([0,T];H^{m-2}), subsequence extraction and passage to the limit)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 3.2 and Section 4.2 (compactness of the Galerkin approximations on the torus via finitely many Fourier coefficients and uniform tail bounds)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $s>5/2$ and $T>0$, and for each $N\ge1$ let $u_N:[0,T]\to H^s(\mathbb T^3;\mathbb R^3)$ be a field-valued curve with the following properties:

(a) for every $t\in[0,T]$ the coefficients of $u_N(t)$ are supported in $|k|_\infty\le N$;
(b) for every real $m\ge s$ there is $B_m<+\infty$ with $\sup_{N\ge1}\sup_{0\le t\le T}\|u_N(t)\|_{H^m}\le B_m$;
(c) each $u_N$ is differentiable into $H^{m-2}$ for every $m\ge s$ and there are $B_m'<+\infty$ with $\sup_{N\ge1}\sup_{0\le t\le T}\|u_N'(t)\|_{H^{m-2}}\le B_m'$.

Then there are a subsequence $(N_j)$ and a field $u:[0,T]\to H^m$ for every $m\ge s$, denoted $u\in\bigcap_{m\ge s}C([0,T],H^m)$, such that:

1. $u_{N_j}\to u$ in $C([0,T],H^{m-1})$ for every real $m\ge s+1$ (i.e. $\sup_{0\le t\le T}\|u_{N_j}(t)-u(t)\|_{H^{m-1}}\to0$);
2. $\sup_{0\le t\le T}\|u(t)\|_{H^m}\le B_m$ for every $m\ge s$;
3. $u(t)$ is real for every $t$ and is divergence-free whenever every $u_N(t)$ is divergence-free, and $\widehat{u_{N_j}(t)}(k)\to\widehat u(t)(k)$ for every $k$ and every $t$, the convergence being uniform in $t$ on every finite set of frequencies;
4. if in addition $u_N(0)\to v$ in $H^m$ for every $m\ge s$, then $u(0)=v$.

## Facts & Assumptions

**Given:** The sequence $(u_N)$ with properties (a)-(c), the weights $w_k\ge\max(1,2\pi|k|_\infty)$ of [[def-periodic-vector-sobolev-space-and-leray-projection]], and the coefficient convention $\|v\|_{H^m}^2=\sum_kw_k^{2m}|\widehat v(k)|_2^2$.

[F1] For every finite $K$ the set of coefficient vectors $(\widehat v(k))_{|k|_\infty\le K}\in\mathbb C^{M_K}$, $M_K=\#\{|k|_\infty\le K\}$, is in bijection with $\mathbb R^{2M_K}$; a bounded sequence in $\mathbb R^{2M_K}$ has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]]).

[F2] For $m\ge s>5/2$, $m-2>0$ and the coefficient functional satisfies $|\widehat v(k)|_2\le\|v\|_{H^{m-2}}$, since $w_k\ge1$. Thus $t\mapsto\widehat{u_N}(k,t)$ is differentiable with derivative bounded by $B_m\prime$. For $t<t+h$ in $[0,T]$, apply the real mean-value theorem ([[cor-mean-value-theorem]]) to the scalar product of this six-real-coordinate curve with the unit vector in the direction of its endpoint difference (or use zero difference directly). This gives $|\widehat{u_N}(k,t+h)-\widehat{u_N}(k,t)|_2\le|h|B_m\prime\le|h|^{1/2}T^{1/2}B_m\prime$ because $|h|\le T$. No continuity or integrability of the derivative is assumed for this argument ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F3] The tail estimate: for every $m$ and every $v\in H^m$, $\sum_{|k|_\infty>K}w_k^{2(m-1)}|\widehat v(k)|_2^2\le(2\pi(K+1))^{-2}\|v\|_{H^m}^2$ ([[lem-cm-lattice-shell-count-and-weight-sums]], claim 5).

[F4] The dyadic time set $D=\{kT/2^n: n\in\mathbb N,\ 0\le k\le 2^n\}$ is countable and dense in $[0,T]$: it is the union over $n$ of the finite sets $D_n=\{kT/2^n: 0\le k\le2^n\}$ ([[thm-countable-union-of-countable]], [[def-countable]]), and for $t\in[0,T]$ and $\delta>0$ one has $|t-kT/2^n|\le T/2^n<\delta$ for $n$ large and $k:=\lfloor 2^nt/T\rfloor$ ([[cor-archimedean-reciprocal]], [[lem-integer-part]]).

[F5] If a sequence of vectors in a finite-dimensional real normed space converges for each member of a finite set of coordinates, then it converges in the norm; the relations $\widehat u(-k)=\overline{\widehat u(k)}$ and $k\cdot\widehat u(k)=0$ are preserved by coefficientwise limits ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[cor-bolzano-weierstrass-in-rn]]).

## Proof


**Proof technique:** diagonal; extract a subsequence converging at all dyadic times on every finite frequency set, upgrade to uniform convergence in time by the equicontinuity from (c), and control all remaining frequencies by the tail estimate.

**Given:** The sequence $(u_N)$, the bounds $B_m,B_m'$ and the facts [F1]-[F5].

1.1 Enumerate the countable set of pairs $(k,q)$, $k\in\mathbb Z^3$, $q\in D$, using [F4]. Each real coordinate sequence of $\widehat{u_N}(k,q)$ is bounded by (b). A bounded real sequence has a deterministically specified convergent subsequence: start with the integer $M\ge1$ least such that every value lies in $[-M,M]$; repeatedly bisect the current closed interval and retain the left half if it contains infinitely many terms, otherwise the right half. At each stage select the least later index whose value belongs to the retained interval. The resulting subsequence is Cauchy because the interval lengths tend to zero, hence converges. Apply this specified rule successively to the six real coordinates of each vector and to each enumerated pair, nesting the infinite index sets. The diagonal index $N_j$ is the least member of the $j$th retained index set larger than $N_{j-1}$. For every fixed pair its tail is a subsequence of the corresponding retained sequence and hence converges. This supplies convergence on each finite frequency block at every dyadic time; no dependent selection principle is used. [F1, F4]

2.1 For each $k$ and each $t\in[0,T]$ the sequence $\bigl(\widehat{u_{N_j}}(k,t)\bigr)_j$ is Cauchy: given $\epsilon>0$, pick a dyadic time $q$ with $|t-q|\le\delta$ where $|h|^{1/2}T^{1/2}B'_s<\epsilon/3$ whenever $|h|\le\delta$ (possible by the density in [F4]), and then $j,i$ large with $|\widehat{u_{N_j}}(k,q)-\widehat{u_{N_i}}(k,q)|<\epsilon/3$; by the equicontinuity estimate [F2] applied with $m=s$, $|\widehat{u_{N_j}}(k,t)-\widehat{u_{N_j}}(k,q)|<\epsilon/3$ and likewise for $N_i$, so the three terms sum to less than $\epsilon$. Hence $\widehat u(k,t):=\lim_j\widehat{u_{N_j}}(k,t)$ exists; moreover the convergence is uniform in $t$ on each finite frequency set, because the same finite $\delta$-net of dyadic times can be chosen independently of $j$ and $t$. [step 1.1, F2, F4]

3.1 Define $u(t)$ to be the coefficient family $k\mapsto\widehat u(k,t)$. For each $m\ge s+1$ and each finite $K$, the uniform convergence of step 2.1 and the bound (b) give $\sum_{|k|_\infty\le K}w_k^{2(m-1)}|\widehat u(k,t)|^2\le B_m^2$ for every $t$; the tail beyond $K$ is bounded by $(2\pi(K+1))^{-2}B_m^2$ by [F3] applied to the $u_N$ and passing to the limit in each coefficient. Given $\epsilon>0$, choose $K$ with $2B_m(2\pi(K+1))^{-1}<\epsilon$; then for large $j$, $\|u_{N_j}(t)-u(t)\|_{H^{m-1}}\le\epsilon$ uniformly in $t$: the finite part converges uniformly by step 2.1 and both tails are small by [F3]. This proves the convergence of claim 1 and, taking the supremum over finite $K$ in the bound, also claim 2 (with $m$ in place of $m-1$). To verify the claimed continuity, for each order $p\ge s$ hypothesis (c) at order $p+2$ makes every $u_N$ differentiable, hence continuous, into $H^p$. Applying the uniform convergence just proved at order $m=p+1$ shows that $u$ is continuous into $H^p$ as a uniform limit. The norm bound at order $p$ follows directly by passing each finite weighted coefficient sum at that order to the limit in (b). [step 2.1, F3, given]

4.1 Realness is preserved under limits by [F5]; if the approximants are divergence-free, their equations $k\cdot\widehat{u_N}(k,t)=0$ pass to the limit as well, and the initial condition follows by applying the same convergence statement at $t=0$; this gives claims 3 and 4. [step 3.1, F5] ∎

## Remarks

- The proof chooses subsequences only countably often, which is why $\mathrm{AC}_\omega$ and not full choice is assumed. No Arzelà-Ascoli theorem is invoked; the compactness comes from the explicit equicontinuity in time and the finite-dimensional Bolzano-Weierstrass theorem in each finite coefficient block.
- The support condition (a) is not used in the extraction except through the fact that the bounds $B_m$ are uniform in $N$; it is the property that will make the extracted limit a solution of the truncated equations in the main theorem.
