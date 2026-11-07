---
id: def-cft-genus-one-pseudotrace-correlation-function
kind: definition
title: Genus-one pseudo-trace correlation function
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
deps:
  - lem-cft-nonnegative-c2-mode-window-finiteness
  - lem-cft-torus-ward-connection-and-pseudotrace-continuation
  - def-cft-logarithmic-intertwining-operator
  - def-cft-hlz-strongly-graded-generalized-module
  - def-vertex-algebra-module
  - def-vertex-algebra-state-field
  - def-cft-pseudotrace
  - lem-cft-pseudotrace-basis-independent
dependency_roles:
  lem-cft-nonnegative-c2-mode-window-finiteness: mathematical-premise
  lem-cft-torus-ward-connection-and-pseudotrace-continuation: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  def-cft-hlz-strongly-graded-generalized-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-cft-pseudotrace: mathematical-premise
  lem-cft-pseudotrace-basis-independent: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
axiom_use: Full AC is inherited by the C2-cofinite analytic conclusion from the geometric sphere/cylinder sewing constructions; the finite dual-basis formulas require no additional physical premise.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi-Zhi Huang, Modular invariance of (logarithmic) intertwining operators"
      url: "https://arxiv.org/pdf/2305.15152v3"
      locator: "§2.2, equations (2.4)–(2.7), and §5, Definition 5.1 and Theorem 5.5."
verification:
  precheck: pending
---

## Definition

Work over $\mathbb C$. Let V be a nonnegative vertex operator algebra in the explicit sense of [[lem-cft-nonnegative-c2-mode-window-finiteness]]; its finite-dimensional weight-zero space is not required to equal $\mathbb C\mathbf1$. Let $P$ be a finite-dimensional unital associative algebra with symmetric linear functional $\phi:P\to\mathbb C$. Fix external grading-restricted generalized modules $W_1,\ldots,W_n$, $n\ge1$, and intermediate grading-restricted generalized modules $\widetilde W_1,\ldots,\widetilde W_{n-1}$. The loop module is a grading-restricted generalized $V$-$P$-bimodule $\widetilde W_0=\widetilde W_n$, projective as a right $P$-module; it is separate from the external insertion module $W_n$.

Choose logarithmic intertwiners of the cyclic types
$$Y_i:\binom{\widetilde W_{i-1}}{W_i\ \widetilde W_i},\qquad 1\le i\le n.$$
Compatibility with P means that for EVERY choice of external states $w_i\in W_i$ their full ordered product is coefficientwise right P-linear:
$$Y_1(w_1,x_1)\cdots Y_n(w_n,x_n)(u p) =\big(Y_1(w_1,x_1)\cdots Y_n(w_n,x_n)u\big)p,$$
for $u\in\widetilde W_0=\widetilde W_n$ and $p\in P$. No factorization of that loop module into external modules is imposed.

For a lower-bounded generalized module $W$, let $A_j\in\mathbb C$ be the unique coefficients of the formal coordinate change
$$ \exp\!\left(\sum_{j\geq1}A_j y^{j+1}\frac{d}{dy}\right)y =\frac{1}{2\pi i}\log(1+2\pi i y). $$
Write $L_+^W(A)=\sum_{j\geq1}A_jL_W(j)$ and define Huang’s geometric modification by
$$ U_W(x)=(2\pi i)^{L_W(0)}x^{L_W(0)}e^{-L_+^W(A)}. $$
For $x\in\mathbb C^\times$, use $\log x=\log|x|+i\arg x$ with $0\leq\arg x<2\pi$; on a generalized weight space define $x^{L_W(0)}=e^{(\log x)L_{W,s}(0)}e^{(\log x)N_W(0)}$, where $L_{W,s}(0)$ acts by the generalized weight and $N_W(0)=L_W(0)-L_{W,s}(0)$ is nilpotent. The positive-mode sum is locally nilpotent on each vector: each $L_W(j)$, $j>0$, lowers weight by $j$, and the module is lower bounded. Set $q_\tau=e^{2\pi i\tau}$ and $q_{z_i}=e^{2\pi iz_i}$; in the preferred radial branch use $\log q_{z_i}=2\pi iz_i$. With $\pi_h$ the projection onto the generalized $L_{\widetilde W_0}(0)$-eigenspace $(\widetilde W_0)_{[h]}$, the shifted pseudo-$q_\tau$-trace is the formal series
$$ \sum_h \operatorname{Tr}_{\phi,(\widetilde W_0)_{[h]}}\!\left( \pi_h\,Y_1(U_{W_1}(q_{z_1})w_1,q_{z_1})\cdots Y_n(U_{W_n}(q_{z_n})w_n,q_{z_n}) q_\tau^{\,L_{\widetilde W_0}(0)-c/24} \right), \qquad q_\tau^{\,L_0}:=e^{2\pi i\tau L_0}. $$
Here $\operatorname{Tr}_{\phi,-}$ is the Hattori–Stallings pseudo-trace of [[def-cft-pseudotrace]]; the symmetry of $\phi$ and [[lem-cft-pseudotrace-basis-independent]] make each term independent of its finite dual basis. The expression is initially a formal series. When it converges in $1>|q_{z_1}|>\cdots>|q_{z_n}|>|q_\tau|>0$ and admits analytic continuation, that continuation, with its preferred branch in this region, is the genus-one pseudo-trace correlation function. Huang’s source specifies continuation to the multivalued analytic domain $\Im\tau>0$, $z_i\ne z_j+k\tau+\ell$ for $i\ne j$ and $k,\ell\in\mathbb Z$.

For the fixed EXTERNAL modules $W_i$ and insertion states $w_i$, let $\mathcal F_{w_1,\ldots,w_n}$ be the span of all such correlation functions as $P,\phi,\widetilde W_0=\widetilde W_n$, all intermediate modules $\widetilde W_i$, and compatible cyclic $Y_i$ vary. Define $a^{-L_W(0)}=e^{-(\log|a|+i\arg a)L_W(0)}$ for $a\in\mathbb C^\times$, with $0\leq\arg a<2\pi$; on each finite-dimensional generalized eigenspace the nilpotent exponential is a finite sum.

## Statement references

[[thm-cft-c2-pseudotrace-modularity]]

## Facts & Assumptions

**Given:** The modules and operators have the grading, lower-bound, generalized-weight, and logarithmic-intertwiner structures specified above.

[F1] [[def-cft-hlz-strongly-graded-generalized-module]]: generalized weight spaces are finite dimensional and lower bounded, and the grading is compatible with the module and bimodule actions.

[F2] [[def-cft-logarithmic-intertwining-operator]]: logarithmic intertwining operators satisfy the Jacobi, derivative, and Möbius-bracket identities and have coefficientwise finite logarithmic polynomials.

[F3] The broader nonnegative VOA data just specified include the conformal vector, L(0) and central charge c. Its Jacobi and Virasoro axioms do not require V0=C1.

[F4] [[def-cft-pseudotrace]]: a finite projective right $P$-module and symmetric functional define a candidate pseudo-trace from a finite dual basis.

[F5] [[lem-cft-pseudotrace-basis-independent]]: that scalar is independent of the chosen finite dual basis.

[F6] [[def-vertex-algebra-module]]: the module Jacobi identity gives the coefficientwise commutator formula for module modes.

[F7] [[def-vertex-algebra-state-field]]: translation covariance gives $(Ta)_{(m)}=-m a_{(m-1)}$.

[F8] [[lem-cft-torus-ward-connection-and-pseudotrace-continuation]] proves absolute/local-uniform convergence and full configuration-space continuation under the ADDITIONAL C2-cofiniteness hypothesis. It also includes projective trace cyclicity and all finite logarithmic powers; ordinary trace completeness is not substituted.

## Proof

1.1 Taking $\operatorname{Res}_{z_0}$ of the module Jacobi identity, then multiplying by $z_1^m z_2^n$ and taking $\operatorname{Res}_{z_1}\operatorname{Res}_{z_2}$, gives
$$ [a_{(m)}^W,b_{(n)}^W]=\sum_{k\geq0}\binom{m}{k}(a_{(k)}b)^W_{(m+n-k)}. $$
Indeed, the delta residue on the right expands $z_1^m=(z_2+z_0)^m$ in its prescribed region, whose $z_0^k$-coefficient is $\binom{m}{k}z_2^{m-k}$. Put $a=b=\omega$, $m=1$, $n=j+1$; only $k=0,1$ contribute. Since $\omega_{(0)}\omega=T\omega$, $\omega_{(1)}\omega=2\omega$, and [F7] applies,
$$ [L_W(0),L_W(j)]=(T\omega)_{(j+2)}+2\omega_{(j+1)} =-(j+2)L_W(j)+2L_W(j)=-jL_W(j). $$
Therefore $L_W(j)W_{[h]}\subseteq W_{[h-j]}$: if $(L_W(0)-h)^Nw=0$, the displayed commutator gives $(L_W(0)-(h-j))^NL_W(j)w=L_W(j)(L_W(0)-h)^Nw=0$. [given, F3, F6, F7, algebra]

2.1 In the formal exponential defining the coordinate change, the coefficient of $y^{j+1}$ is $A_j$ plus a polynomial in $A_1,\ldots,A_{j-1}$: any composition involving another positive-degree vector field raises the degree. Comparing coefficients recursively therefore gives a unique sequence $(A_j)_{j\geq1}$. By step 1.1 and lower boundedness, $L_+^W(A)$ lowers weight by at least one and is locally nilpotent on each vector, so its exponential is a finite sum there. [given, F1, step 1.1, algebra]

3.1 The generalized-weight decomposition is preserved by the right $P$-action, so each projection $\pi_h$ is $P$-linear. Since $\widetilde W_0$ is projective as a right $P$-module, each generalized-weight space is a direct summand and hence projective; it is finite dimensional by [F1], and therefore finitely generated over the finite-dimensional algebra $P$. Thus [F4] applies to each weight space. [given, F1, F4, step 2.1, algebra]

4.1 Product compatibility makes the coefficient operators and their weight-space restrictions right $P$-linear. Applying [F5] to each such restriction gives a well-defined scalar coefficient, independent of the chosen dual basis. The formula therefore defines a formal shifted pseudo-trace series; its convergence and analytic continuation are supplied under C2-cofiniteness by F8. [given, F2, F4, F5, F8, step 3.1, algebra] ∎
## Analytic scope

The formal coefficient construction and projective-weight-space argument hold as stated. Under C2-cofiniteness the linked local Ward-connection and sewing proof supplies its analytic correlation functions and all prescribed continuation branches. For a non-C2-cofinite VOA this definition retains its conditional phrase “when it converges and admits analytic continuation”; no unrestricted convergence is asserted.
