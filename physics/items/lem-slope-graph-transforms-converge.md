---
id: lem-slope-graph-transforms-converge
kind: lemma
title: "Cone invariance and expansion, and convergence of the slope graph transforms to unique invariant stable and unstable line fields"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-of-triangle-inequality, thm-cauchy-criterion-via-lub, def-stable-unstable-cones-and-line-slopes, def-abs-value, lem-of-abs-value, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, lem-geometric-sequence-null, def-sequence, thm-algebra-of-limits, lem-limit-preserves-order, def-metric-convergence, def-complete-ordered-field]
dependency_roles:
  lem-of-triangle-inequality: mathematical-premise
  thm-cauchy-criterion-via-lub: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-series: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  lem-geometric-sequence-null: mathematical-premise
  def-sequence: mathematical-premise
  thm-algebra-of-limits: mathematical-premise
  lem-limit-preserves-order: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-complete-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, Lemma 4 and Proposition 3: invariant sectors with uniform expansion for the Jacobian and its inverse"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.2, the stable and unstable directions at a hyperbolic fixed point"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Statement

Let $a\in\mathbb R$, $k\in(0,1)$ and $L\ge2$. Let $s=(s_n)_{n\in\mathbb Z}$ be a real bilateral sequence with $|s_n|\ge L$ for every $n$, put $z_n:=(s_{n-1},s_n)$, and let $C^u_k$, $C^s_k$, $\Phi_y$, $\Psi_x$, $DF_a$ and $F_a$ be as in [[def-stable-unstable-cones-and-line-slopes]]. Write

$$\lambda:=2L-k>1,\qquad \rho:=\lambda^{-2}<1,$$

Assume in addition the aperture condition $k(2L-k)\ge1$, equivalently
$1/\lambda\le k$. This condition is needed for invariance of the stated
cones and slope interval; $L\ge2$ alone does not imply it for arbitrarily
small $k$. Then:

1. **(cone invariance and expansion)** for every $n$: $DF_a(z_n)$ maps $C^u_k$ into itself, and every $(u,v)\in C^u_k$ satisfies

$$\max\bigl(|v|,\,|{-u}+2s_nv|\bigr)\ \ge\ \lambda\,\max(|u|,|v|);$$

and $D(F_a^{-1})(z_n)$ maps $C^s_k$ into itself, with $\max(|2s_{n-1}u-v|,|u|)\ge\lambda\max(|u|,|v|)$ for every $(u,v)\in C^s_k$;
2. **(slope contractions)** for every real $y$ with $|y|\ge L$, the map $\Phi_y$ carries $[-k,k]$ into $[-1/\lambda,1/\lambda]\subseteq[-k,k]$ and satisfies $|\Phi_y(h)-\Phi_y(h')|\le\rho\,|h-h'|$ there; the same holds for $\Psi_x$ for every $|x|\ge L$;
3. **(unstable line field)** define $h^{(0)}_n:=0$ and $h^{(m+1)}_n:=\Phi_{s_{n-1}}\bigl(h^{(m)}_{n-1}\bigr)$ for $m\ge0$. Then $(h^{(m)}_n)_m$ converges for every $n$ to a limit $h_n\in[-k,k]$, uniformly in $n$, and

$$h_{n}=\frac{1}{2s_{n-1}-h_{n-1}}\qquad(n\in\mathbb Z);$$

furthermore $DF_a(z_n)$ maps the line $\{(h_nv,v):v\in\mathbb R\}$ onto the line $\{(h_{n+1}v,v)\}$ for every $n$, so the lines form the unique unstable line field along $s$ whose slopes all lie in $[-k,k]$;
4. **(stable line field)** similarly, $r^{(0)}_n:=0$ and $r^{(m+1)}_n:=\Psi_{s_n}\bigl(r^{(m)}_{n+1}\bigr)$ converge to limits $r_n\in[-k,k]$ with $r_n=1/(2s_n-r_{n+1})$, and $D(F_a^{-1})(z_{n+1})$ maps $\{(u,r_{n+1}u):u\in\mathbb R\}$ onto $\{(u,r_nu):u\in\mathbb R\}$; this is the unique stable line field along $s$ with slopes in $[-k,k]$.

## Facts & Assumptions

**Given:** The parameter $a$, the aperture $k\in(0,1)$, the bound $L\ge2$, the sequence $s$ with $|s_n|\ge L$, the cones, slope maps and matrix data of [[def-stable-unstable-cones-and-line-slopes]], and the recursively defined slope families $h^{(m)}$, $r^{(m)}$.

[F1] Cone, slope and matrix data ([[def-stable-unstable-cones-and-line-slopes]]): $DF_a(x,y)(u,v)=(v,-u+2yv)$ and $D(F_a^{-1})(x,y)(u,v)=(2xu-v,u)$; $C^u_k=\{|u|\le k|v|\}$, $C^s_k=\{|v|\le k|u|\}$, $C^u_k\cap C^s_k=\{0\}$. For $h\ne2y$, the matrix gives $DF_a(x,y)(hv,v)=(v,(2y-h)v)$, so its image line has slope $\Phi_y(h)=1/(2y-h)$. Likewise, for $r\ne2x$, $D(F_a^{-1})(x,y)(u,ru)=((2x-r)u,u)$, so its image line has slope $\Psi_x(r)=1/(2x-r)$.

[F2] Absolute value and order ([[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[def-complete-ordered-field]]): $|uv|=|u||v|$; $|u-w|\ge|u|-|w|$; if $|u|\le k|v|$ and $0<k<1$ then $\max(|u|,|v|)=|v|$; if $|v|\le k|u|$ then $\max(|u|,|v|)=|u|$; and the stated aperture condition gives $1/\lambda\le k$.

[F3] Series and geometric sequences ([[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-geometric-sequence-null]]): for $0\le\rho<1$ the series $\sum_{j\ge0}\rho^j$ converges, $\rho^m\to0$, and $\sum_{j\ge m}\rho^j=\rho^m/(1-\rho)$.

[F4] Completeness and limits of real sequences ([[thm-cauchy-criterion-via-lub]], [[def-sequence]], [[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-metric-convergence]]): every Cauchy real sequence converges; limits of convergent real sequences are compatible with addition, multiplication, division by nonzero limits, and with weak inequalities; a limit of numbers in a closed interval $[-k,k]$ lies in $[-k,k]$.



## Proof

**Proof technique:** direct; verify the two cone computations, then solve the slope recurrences by a contraction iteration from the far past and the far future.

1.1 Constants: since $L\ge2$ and $0<k<1$, we have $2L-k\ge4-k>3$, so $\lambda=2L-k>1$ and $0<\rho=\lambda^{-2}<1$; moreover the aperture hypothesis gives $k(2L-k)\ge1$, hence $1/\lambda\le k$. [given, F2, algebra]

2.1 Unstable cone: let $(u,v)\in C^u_k$, so $|u|\le k|v|$ and $\max(|u|,|v|)=|v|$ by [F2]. Then $DF_a(z_n)(u,v)=(v,-u+2s_nv)$ and $|{-u}+2s_nv|\ge2|s_n||v|-|u|\ge(2L-k)|v|=\lambda|v|$ by [F2]. Also $|{-u}+2s_nv|\ge\lambda|v|\ge|v|$ since $\lambda>1$, so $\max(|v|,|{-u}+2s_nv|)\ge\lambda\max(|u|,|v|)$. Finally $|v|/|{-u}+2s_nv|\le1/\lambda\le k$ whenever $v\ne0$, so the image is in $C^u_k$ (the case $v=0$ gives $u=0$ and image $0$). [given, step 1.1, F1, F2, algebra]

2.2 Stable cone: let $(u,v)\in C^s_k$, so $|v|\le k|u|$ and $\max(|u|,|v|)=|u|$ by [F2]. Then $D(F_a^{-1})(z_n)(u,v)=(2s_{n-1}u-v,u)$ and $|2s_{n-1}u-v|\ge2L|u|-|v|\ge(2L-k)|u|=\lambda|u|$; hence $\max(|2s_{n-1}u-v|,|u|)\ge\lambda\max(|u|,|v|)$ and $|u|/|2s_{n-1}u-v|\le1/\lambda\le k$ whenever $u\ne0$, with the zero case trivial. [given, step 1.1, F1, F2, algebra]

2.3 Slope contractions: let $|y|\ge L$ and $h,h'\in[-k,k]$; by step 1.1, $|2y-h|\ge2L-k=\lambda>0$ and $|2y-h'|\ge\lambda$, so $\Phi_y$ is defined on $[-k,k]$, $|\Phi_y(h)|\le1/\lambda\le k$, and $$|\Phi_y(h)-\Phi_y(h')|=\frac{|h-h'|}{|2y-h||2y-h'|}\le\lambda^{-2}|h-h'|=\rho|h-h'| .$$ The same computation with $\Psi_x$ proves the second assertion. [given, step 1.1, F1, F2, algebra]

3.1 Unstable slopes, uniform bounds and contraction: define $h^{(0)}_n:=0$, $h^{(m+1)}_n:=\Phi_{s_{n-1}}(h^{(m)}_{n-1})$. By induction, step 2.3 gives $|h^{(m)}_n|\le1/\lambda$ for all $m\ge1$ and $n$, and $|h^{(m+1)}_n-h^{(m)}_n|\le\rho^m/\lambda$ for all $m\ge0$. Hence for $m'\ge m$, $$|h^{(m')}_n-h^{(m)}_n|\le\sum_{j=m}^{m'-1}\rho^j/\lambda\le\frac{\rho^m}{\lambda(1-\rho)},$$ uniformly in $n$. Thus $(h^{(m)}_n)_m$ is Cauchy; completeness in [F4] gives its limit $h_n$, with $|h_n|\le1/\lambda\le k$. Passing $m'\to\infty$ in the same estimate gives $|h_n-h^{(m)}_n|\le\rho^m/(\lambda(1-\rho))$ for every $n$, proving uniform convergence. [given, step 2.3, F2, F3, F4, algebra]

3.2 Stable slopes: the same argument with $r^{(0)}_n:=0$, $r^{(m+1)}_n:=\Psi_{s_n}(r^{(m)}_{n+1})$ gives $|r^{(m+1)}_n-r^{(m)}_n|\le\rho^m/\lambda$, limits $r_n\in[-k,k]$ satisfying $r_n=\Psi_{s_n}(r_{n+1})=1/(2s_n-r_{n+1})$. [given, step 2.3, F2, F3, F4]

4.1 Unstable recurrence: fixing $n$ and passing to the limit in $h^{(m+1)}_n=\Phi_{s_{n-1}}(h^{(m)}_{n-1})$, continuity of $\Phi_{s_{n-1}}$ on $[-k,k]$ (step 2.3) and the limit rules of [F4] give $h_n=\Phi_{s_{n-1}}(h_{n-1})=1/(2s_{n-1}-h_{n-1})$. [step 3.1, step 2.3, F4]

4.2 Uniqueness: let $(\tilde h_n)$ be another family with $|\tilde h_n|\le k$ and $\tilde h_n=\Phi_{s_{n-1}}(\tilde h_{n-1})$ for all $n$. Comparing with the construction gives, by induction on $m$, $|\tilde h_n-h^{(m)}_n|\le\rho^m|\tilde h_{n-m}-h^{(0)}_{n-m}|\le\rho^m\cdot2k$ (step 2.3, [F2]); letting $m\to\infty$ and using [F3] gives $\tilde h_n=h_n$. The stable case is identical with the future-pointing iteration. [step 3.1, step 3.2, F2, F3, F4]

5.1 Invariance: by [F1] and step 4.1, $DF_a(z_n)$ carries the line $\{(h_nv,v)\}$ to the line with slope $\Phi_{s_n}(h_n)=1/(2s_n-h_n)=h_{n+1}$; since both lines pass through the origin and the first is mapped onto a line (the differential is invertible), the image is exactly $\{(h_{n+1}v,v):v\in\mathbb R\}$. Similarly, $D(F_a^{-1})(z_{n+1})$ uses the first coordinate $s_n$ of $z_{n+1}$; by [F1] and step 3.2 it carries $\{(u,r_{n+1}u):u\in\mathbb R\}$ onto $\{(u,r_nu):u\in\mathbb R\}$. [step 4.1, step 3.2, F1]

6.1 Conclusion: steps 2.1 and 2.2 prove clause 1, step 2.3 proves clause 2, steps 3.1, 4.1 and 5.1 prove clause 3, steps 3.2 and 5.1 prove clause 4, and step 4.2 proves the uniqueness assertions of clauses 3 and 4. [step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 4.1, step 4.2, step 5.1] ∎


## Remarks

- The convergence of the slope iteration is uniform in $n$, with the rate $\rho^m/(\lambda(1-\rho))$; no compactness of the sequence space is used.

- Both recurrences are one-sided compositions: $h_n$ is determined by the symbols in the infinite past, $r_n$ by the symbols in the infinite future. This is the sense in which the unstable direction has finite memory of the past and the stable direction finite foresight of the future.
