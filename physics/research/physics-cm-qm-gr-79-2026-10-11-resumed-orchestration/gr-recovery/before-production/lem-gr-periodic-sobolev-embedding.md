---
id: lem-gr-periodic-sobolev-embedding
kind: lemma
title: "Periodic Sobolev embedding: H^s on the three-torus controls C^m when s minus m exceeds three halves"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, def-square-summable-family-on-an-arbitrary-index-set, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, prop-standard-coordinate-inner-products, thm-uniform-derivative-limit-on-a-closed-interval, thm-uniform-limit-continuous-complex-functions, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  prop-standard-coordinate-inner-products: mathematical-premise
  thm-uniform-derivative-limit-on-a-closed-interval: mathematical-premise
  thm-uniform-limit-continuous-complex-functions: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of the Sobolev spaces H^s(T^3), the continuous embedding H^s(T^3) into L-infinity and the Banach-algebra property for s>3/2) and Section 4.3 (Agmon's inequality)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 3 (Sobolev Spaces), Sections 3.1 (weak derivatives), 3.4 (properties of weak derivatives), 3.5 (Sobolev spaces), 3.7-3.8 (Sobolev embedding) and 3.10 (compactness results)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let integers $s\ge m\ge0$ satisfy $s-m>3/2$, and
let $u\in H^s(\mathbb T^3_{2\pi};\mathbb R^N)$ with the objects and notation of
[[def-gr-periodic-torus-and-sobolev-spaces]]. Then:

**(a)** There is a unique representative $u^*\in C^m(\mathbb T^3_{2\pi};\mathbb R^N)$
of the class $u$, and for every $|\alpha|\le m$ the series
$\sum_{k\in\mathbb Z^3}(ik)^\alpha\widehat u(k)\chi_k$ converges absolutely and
uniformly on $\mathbb T^3_{2\pi}$ to $D^\alpha u^*$; moreover there is
$C=C(s,m,N)$ with
$$\|u^*\|_{C^m}\le C\,\|u\|_{H^s}.$$

**(b)** Writing $d(x,y):=\min\{\,|x-y+2\pi l|:l\in\mathbb Z^3\,\}$ for the
induced metric on $\mathbb T^3_{2\pi}$ and fixing
$0<\theta\le\min\{1,s-m-\tfrac32\}$, there is $C'=C'(s,m,N,\theta)$ with
$$\bigl|D^\alpha u^*(x)-D^\alpha u^*(y)\bigr|\le C'\,\|u\|_{H^s}\,d(x,y)^\theta\qquad(x,y\in\mathbb T^3_{2\pi},\ |\alpha|\le m).$$

**(c)** The assignment $u\mapsto u^*$ is linear; and if $(u_j)$ is a sequence in
$H^s$ with $u_j\to u$ in $H^s$, then $u_j^*\to u^*$ uniformly together with all
derivatives of order at most $m$.

## Facts & Assumptions
**Given:** Countable Choice, integers $s\ge m\ge0$ with $s-m>3/2$, and $u\in H^s(\mathbb T^3_{2\pi};\mathbb R^N)$.

[L1] Differentiation identity and norm equivalence: for $v\in H^s$ and $|\alpha|\le s$, $D^\alpha v\in H^{s-|\alpha|}$ and $\widehat{D^\alpha v}(k)=(ik)^\alpha\widehat v(k)$; and $N_s(v)^2\le 2^{s+1}\|v\|_{H^s}^2$ with $N_s(v)^2:=\sum_k(1+|k|^2)^s|\widehat v(k)|^2$, while $\|v\|_{H^s}^2\le(s+1)^3N_s(v)^2$ ([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]).

[L2] Characters and coefficients: $(\chi_k)$ is the orthonormal basis of $L^2$ from the finite torus theorem and $\widehat v(k)=\int v\,\chi_{-k}\,d\mu$ ([[def-gr-periodic-torus-and-sobolev-spaces]]).

[L3] Sums over an arbitrary index set: for a nonnegative family $(c_k)_{k\in\mathbb Z^3}$ the sum over the finite-subset net is a supremum of finite subsums; it is finite exactly when these are bounded; if finite, for every $\varepsilon>0$ there is a finite $F_0$ with tail sum $<\varepsilon$; finite subsums are monotone under inclusion. Absolutely summable complex families are summable, and finite Cauchy--Schwarz bounds pass to the supremum over finite subsets ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[L4] Finite-dimensional Cauchy--Schwarz: $|\sum_{i\in F}a_ib_i|\le(\sum_{i\in F}a_i^2)^{1/2}(\sum_{i\in F}b_i^2)^{1/2}$ for real lists indexed by a finite set $F$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[prop-standard-coordinate-inner-products]]).

[L5] Uniform differentiation on an interval: if $f_j$ are $C^1$ on $[a,b]$, $f_j(c)$ converges for some $c\in[a,b]$, and $f_j'\to g$ uniformly, then $f_j\to f$ uniformly for a differentiable $f$ with $f'=g$ ([[thm-uniform-derivative-limit-on-a-closed-interval]], [[def-ck-and-multi-index-notation-in-several-variables]]); a uniform limit of continuous complex functions is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[L6] The Euclidean mean value bound $|\chi_k(x)-\chi_k(y)|\le\min\{2,|k|\,d(x,y)\}$ holds for the characters and the metric $d$ of the statement, because $|\nabla\chi_k|=|k|$ pointwise and the torus metric is induced by the Euclidean metric on representatives.



## Proof

**Proof technique:** direct.

1.1 (Absolute convergence of the differentiated coefficient series.) Fix $|\alpha|\le m$ and put $\theta_\alpha:=s-|\alpha|\ge s-m>3/2$. For every finite $F\subseteq\mathbb Z^3$, Cauchy--Schwarz [L4] with $a_k:=|k^\alpha|$ and $b_k:=|k^\alpha||\widehat u(k)|$ gives $\sum_{k\in F}|k^\alpha||\widehat u(k)|\le\bigl(\sum_{k\in F}|k^\alpha|^2(1+|k|^2)^{-\theta_\alpha}\bigr)^{1/2}\bigl(\sum_{k\in F}(1+|k|^2)^{\theta_\alpha}|\widehat u(k)|^2\bigr)^{1/2}$; passing to the supremum over finite $F$ by [L3] and using $|k^\alpha|^2\le(1+|k|^2)^{|\alpha|}$, and $\theta_\alpha+|\alpha|=s$, yields $\sum_k|k^\alpha||\widehat u(k)|\le\bigl(\sum_k(1+|k|^2)^{-(s-m)}\bigr)^{1/2}N_s(u)$. [L3, L4, algebra]

2.1 (The weight sum is finite.) For $\theta>3/2$, $\sum_{k\in\mathbb Z^3}(1+|k|^2)^{-\theta}<+\infty$: the ball $|k|\le1$ contributes at most $27$ terms, and the dyadic shell $2^j\le|k|<2^{j+1}$ ($j\ge0$) contains at most $C_3 2^{3j}$ lattice points each weighted by at most $2^{-2j\theta}$, so the shell sum is at most $C_3 2^{-j(2\theta-3)}$ and $\sum_j2^{-j(2\theta-3)}<\infty$ by the geometric series. Hence with $\theta:=s-m$ step 1.1 gives $\sum_k|k^\alpha||\widehat u(k)|\le C_{s,m}N_s(u)\le C'_{s,m}\|u\|_{H^s}$ by [L1]. [step 1.1, L1, algebra]

3.1 (The limit series gives a $C^m$ representative.) For finite $F$ put $S_F:=\sum_{k\in F}\widehat u(k)\chi_k$, a $C^\infty$ function. If $F,G$ are finite then $\|S_F-S_G\|_{C^m}\le\max_{|\alpha|\le m}\sum_{k\in F\triangle G}|k^\alpha||\widehat u(k)|$, and the tail sums tend to zero along the finite-subset net by [L3] and step 2.1; hence the derivative series for every $|\alpha|\le m$ satisfies the uniform Cauchy property on $\mathbb T^3_{2\pi}$. Applying the interval differentiation theorem [L5] successively along each coordinate direction and for each order gives a $C^m$ function $u^*$ with $D^\alpha u^*=\sum_k(ik)^\alpha\widehat u(k)\chi_k$ for every $|\alpha|\le m$, the series converging absolutely and uniformly by step 2.1; and $\|u^*\|_{C^m}\le C\|u\|_{H^s}$ by step 2.1. Since $S_F\to u$ in $L^2$ by [L2] and $S_F\to u^*$ uniformly, $u^*$ represents the class $u$; two continuous representatives of one $L^2$ class agree everywhere, giving uniqueness. This proves (a). [step 2.1, L2, L3, L5]

3.2 (The Hölder modulus (b).) For $x,y$ and $|\alpha|\le m$, $|D^\alpha u^*(x)-D^\alpha u^*(y)|\le\sum_k|k^\alpha||\widehat u(k)|\,|\chi_k(x)-\chi_k(y)|\le\sum_k|k^\alpha||\widehat u(k)|\min\{2,|k|d(x,y)\}$ by [L6]. For $0<\theta\le1$ one has $\min\{2,t\}\le2^{1-\theta}t^\theta$ for every $t\ge0$ (for $t\le2$ because $2^{1-\theta}t^\theta\ge t$ iff $2\ge t$; for $t\ge2$ because $t^\theta\ge2^\theta$), so the sum is at most $2^{1-\theta}d(x,y)^\theta\sum_k|k|^{m+\theta}|\widehat u(k)|\le C_\theta d(x,y)^\theta\|u\|_{H^s}$ by steps 1.1 and 2.1 applied with exponent $s-(m+\theta)>3/2$, valid for $\theta<s-m-3/2$; for the endpoint value $\theta_0=\min\{1,s-m-3/2\}$ choose $\theta<\theta_0$ and use $d(x,y)^{\theta_0}\ge \operatorname{diam}(\mathbb T^3_{2\pi})^{\theta_0-\theta}d(x,y)^\theta$. This proves (b). [step 1.1, step 2.1, L6, algebra]

4.1 (Linearity and convergence (c).) $D^\alpha$ is linear and the series representation is linear in the coefficients, so $u\mapsto u^*$ is linear; and for $u_j\to u$ in $H^s$, applying (a) to the difference gives $\|u_j^*-u^*\|_{C^m}\le C\|u_j-u\|_{H^s}\to0$, which is uniform convergence of all derivatives of order at most $m$. [step 3.1, algebra] ∎



## Remarks

- **Sharpness.** The hypothesis $s-m>3/2$ is exactly the case here; The companion counterexample on the examples page shows that for $s-m<3/2$ no continuous representative of all $H^s$ classes need exist, so the boundary is not an artefact of the proof.
- **Use.** The case $m=s-3$ ($s\ge5$) supplies the $L^\infty$ control of all derivatives of order at most $s-3$ used in [[lem-gr-periodic-sobolev-algebra]] and [[lem-gr-smooth-composition-and-commutator-estimates]]; the case $m=s-2$ is used in the time-derivative induction of [[lem-gr-galerkin-time-derivative-bound]], and $m=0$ gives the continuous representative used in the Ascoli step.
