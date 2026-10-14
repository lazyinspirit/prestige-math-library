---
id: thm-vc-covering-entropy
kind: theorem
title: "VC-subgraph covering entropy with its finite-r logarithmic bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - cor-archimedean-reciprocal
  - cor-mean-value-theorem
  - def-covering-packing-bracketing-number-and-metric-entropy
  - def-measure-with-density
  - def-natural-logarithm
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-probability-measure
  - def-real-exponential-function-and-e
  - def-real-power
  - def-vc-subgraph-class-and-index
  - lem-finite-grid-interval-discrepancy
  - lem-real-power-preserves-measurability
  - lem-vc-set-covering-entropy
  - thm-algebra-of-derivatives
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-exponential-is-strictly-increasing
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-real-power-laws
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Theorem 8.2"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Section 14.5"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
---

## Statement

Let $(\mathcal X,\mathcal A,Q)$ be a probability space, let $1\le r<\infty$, and let $\mathcal F$ be a nonempty VC-subgraph class of measurable real functions with finite VC index $V$. Suppose a measurable envelope $F$ satisfies $|f(x)|\le F(x)$ for every $f\in\mathcal F$ and $x\in\mathcal X$, and

$$0<\|F\|_{Q,r}:=\left(\int F^r\,dQ\right)^{1/r}<\infty.$$

For every $0<\epsilon<1$, put $K_0:=3e^2/(e-1)$ and $K:=4K_0$. Then

$$N\!\left(\epsilon\|F\|_{Q,r},\mathcal F,L^r(Q)\right)\le\left[K(2/\epsilon)^r\log\!\left(3e(2/\epsilon)^r\right)\right]^{V-1}\le\left(\frac{A}{\epsilon}\right)^{ArV},\qquad A:=12eK+2.$$

The exponent in the first bound is the finite-r logarithmic form. No Axiom of Choice or Countable Choice is used in this proof.

## Facts & Assumptions

**Given:** A probability measure $Q$, a nonempty VC-subgraph class $\mathcal F$ with index $V$, an envelope $F$ with $0<\|F\|_{Q,r}<\infty$, $1\le r<\infty$, and $0<\epsilon<1$.

[F1] The subgraph of $f$ is $C_f=\{(x,t):t<f(x)\}$, and the class has first-unshattered index $V$ ([[def-vc-subgraph-class-and-index]]).

[F2] $L^r(Q)$ distance is $\|f-g\|_{Q,r}$; covering centers belong to the covered class ([[def-covering-packing-bracketing-number-and-metric-entropy]]).

[F3] A nonempty measurable set class of finite VC index $W$ satisfies $$N(\delta,\mathcal C,L^1(\mu))\le\left[K_0\delta^{-1}\log(3e/\delta)\right]^{W-1}$$ for $0<\delta<1$ and any probability measure $\mu$ ([[lem-vc-set-covering-entropy]]).

[F4] If $h\ge0$ is measurable, then $h\,dQ$ is a measure with total mass $\int h\,dQ$ ([[def-measure-with-density]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

[F5] Finite products of sigma-finite measures have the rectangle formula, and Tonelli permits iterated integration of nonnegative measurable functions ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] For the finite grid $U_J$ with trapezoidal weights from [[lem-finite-grid-interval-discrepancy]], every interval $[a,b)\subseteq[-1,1]$ has grid mass within $1/J$ of $(b-a)/2$.

[F7] Coordinate lifts on a product space are measurable, and arithmetic and order operations on measurable real functions preserve measurability; strict threshold sets of measurable real functions are measurable ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]).

[F8] For $r>0$, $t\mapsto t^r$ is increasing on $[0,\infty)$ and sends nonnegative measurable functions to measurable functions ([[lem-real-power-preserves-measurability]]).

[F9] For each $\delta>0$, there is an integer $J\ge1$ with $1/J\le\delta$ ([[cor-archimedean-reciprocal]]).

[F10] Positive-base real powers obey the product and exponent laws ([[def-real-power]], [[thm-real-power-laws]]).

[F11] The logarithm is increasing, $\log e=1$, and $\log(ab)=\log a+\log b$ for positive $a,b$; its derivative is $1/u$, so the mean value theorem applies to it on positive compact intervals ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-algebra-of-derivatives]], [[cor-mean-value-theorem]]).

[F12] $e=\exp(1)>1$, since the exponential is strictly increasing and $\exp(0)=1$ ([[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]]).

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Put $M:=\int F^r\,dQ=\|F\|_{Q,r}^r$. By [F8] $F^r$ is measurable; the hypotheses give $0<M<\infty$. By [F7], the density $F^r/M$ is measurable. Define $R$ by $dR=(F^r/M)\,dQ$; its total mass is one by [F4]. [F4, F7, F8, given, algebra]

2.1 Set $\delta:=\epsilon^r/2^{r+1}$. Then $0<\delta<1$, so [F9] supplies an integer $J\ge1$ with $1/J\le\delta$. Use the grid $U_J$ and probability $\nu_J$ of [F6], and form the product probability $\widetilde Q:=R\otimes\nu_J$ on $\mathcal X\times U_J$ using [F5]. [F5, F6, F9, given, algebra, step 1.1]

3.1 Let $X_+:=\{x:F(x)>0\}$ and define $A_f:=\{(x,u):x\in X_+,\ uF(x)<f(x)\}$ for $f\in\mathcal F$. The coordinate projections are measurable because their preimages of measurable sets are rectangles; hence [F7] makes $X_+$ and each $A_f$ product-measurable. On $X_+\times U_J$, the map $\psi(x,u):=(x,F(x)u)$ is injective and $A_f=\psi^{-1}(C_f)$. If a finite set of pairs is shattered by $\{A_f:f\in\mathcal F\}$, its image under $\psi$ is a same-size set shattered by $\{C_f:f\in\mathcal F\}$. Thus the nonempty set class $\mathcal C_J:=\{A_f:f\in\mathcal F\}$ has finite VC index $V_J\le V$. [F1, F7, given, step 2.1]

4.1 Fix $f,g\in\mathcal F$. For $x\in X_+$, put $a(x):=\min(f(x),g(x))/F(x)$ and $b(x):=\max(f(x),g(x))/F(x)$. The envelope gives $-1\le a(x)\le b(x)\le1$, and the section $(A_f\triangle A_g)_x$ is exactly $\{u\in U_J:a(x)\le u<b(x)\}$. By [F6], its $\nu_J$-mass differs from $|f(x)-g(x)|/(2F(x))$ by at most $1/J$. The set $X\setminus X_+$ has $R$-measure zero, since the density $F^r/M$ vanishes there. [F6, F8, step 1.1, step 3.1, given]

4.2 Apply [F3] to $\mathcal C_J$ under $\widetilde Q$ at radius $\delta$. Since $e>1$, $K_0=3e^2/(e-1)>1$, and $\delta<1$ makes $\log(3e/\delta)>1$; thus the bracketed base is greater than one, so $V_J\le V$ yields $N(\delta,\mathcal C_J,L^1(\widetilde Q))\le\left[K_0\delta^{-1}\log(3e/\delta)\right]^{V-1}<\infty$. Choose a cover with this many centers $A_{g_1},\ldots,A_{g_k}$, each represented by some $g_j\in\mathcal F$. The cover uses finitely many centers, so this uses only finite choice. [F3, F12, given, choose, step 2.1, step 3.1]

5.1 Integrating the section estimate under $R$ and using [F5] gives $\left|\widetilde Q(A_f\triangle A_g)-\frac12\int_{X_+}\frac{|f-g|}{F}\,dR\right|\le\frac1J$. For $x\in X_+$, put $a:=|f(x)-g(x)|\le2F(x)$. If $a=0$ the inequality $a^r\le2^{r-1}F(x)^{r-1}a$ is immediate; if $a>0$ and $r>1$, [F8] raises $a\le2F(x)$ to the positive power $r-1$ and multiplication by $a$ gives it; for $r=1$ it is equality. Hence [F2] gives $\|f-g\|_{Q,r}^r\le2^{r-1}M\int_{X_+}\frac{|f-g|}{F}\,dR\le2^rM\left(\widetilde Q(A_f\triangle A_g)+\frac1J\right)$. The last inequality uses the discrepancy bound and the definition of $R$. [F2, F5, F8, F10, step 1.1, step 4.1, algebra]

6.1 For every $f\in\mathcal F$, some center satisfies $\widetilde Q(A_f\triangle A_{g_j})\le\delta$. Steps 5.1 and 2.1 then give $\|f-g_j\|_{Q,r}^r\le2^rM(\delta+1/J)\le2^{r+1}M\delta=\epsilon^rM$. Thus the function class is covered by the same $k$ centers at radius $\epsilon\|F\|_{Q,r}$, and its covering number is no larger than the set covering number in step 4.2. [step 2.1, step 5.1, step 4.2, algebra]

7.1 Put $L:=\log(3e(2/\epsilon)^r)$. From $\delta^{-1}=2(2/\epsilon)^r$ and $\log(3e/\delta)=L+\log2\le2L$ (since $3e(2/\epsilon)^r>2$, so $L>\log2$), the base in step 4.2 is at most $4K_0(2/\epsilon)^rL=K(2/\epsilon)^rL$. Since this base exceeds one, step 6.1 proves the first asserted entropy bound. [F11, F12, step 4.2, step 6.1, algebra]

8.1 Put $\eta:=(\epsilon/2)^r\in(0,1)$. For $u\ge1$, the function $h(u):=u-\log u$ has $h(1)=1$ and $h'(u)=1-1/u\ge0$; the mean value theorem [F11] gives $\log u\le u$. Hence $K\eta^{-1}\log(3e/\eta)\le3eK\eta^{-2}=3eK(2/\epsilon)^{2r}$. Let $A:=12eK+2$. From [F12], $e-1<e$, so $K_0=3e^2/(e-1)>3e>3$ and $K=4K_0>4$. Thus $x:=3eK>1$ and $A/2=6eK+1\ge x$, whence $(A/2)^{2r}\ge x^{2r}\ge x$ because $r\ge1$. This gives $3eK(2/\epsilon)^{2r}\le(A/\epsilon)^{2r}$. [F11, F12, step 7.1, algebra]

9.1 The first bound is the step 7.1 base raised to $V-1$. Since $A/\epsilon>1$, $A\ge2$, and $V\ge1$, we have $2r(V-1)\le ArV$. Thus the first bound is at most $(A/\epsilon)^{ArV}$, proving the second inequality. [step 7.1, step 8.1, algebra] ∎
