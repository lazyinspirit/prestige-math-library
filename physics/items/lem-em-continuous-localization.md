---
id: lem-em-continuous-localization
kind: lemma
title: "Localization: vanishing integrals or fluxes force a continuous function to vanish"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-continuous-functions-are-borel-measurable, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-metric-ball, def-metric-continuity, def-metric-topology, def-surface-area-and-scalar-surface-integral-of-a-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-countable-choice, def-integrable-real-and-complex-functions-and-their-integrals, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-borel-sigma-algebra, thm-heine-borel-rn, thm-extreme-value-metric, lem-standard-basis-of-f-n, def-euclidean-inner-product, def-admissible-regular-parametrized-surface-patch, def-cross-product-in-r3, cor-disc-jordan-content-is-pi-r-squared, def-riemann-integral-over-a-jordan-set, thm-continuous-functions-on-compact-jordan-sets-are-integrable, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]
dependency_roles:
  def-integral-over-a-measurable-set: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-topology: mathematical-premise
  def-surface-area-and-scalar-surface-integral-of-a-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  cor-disc-jordan-content-is-pi-r-squared: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014), §1.10, §1.12, §2.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "J. Lebl, Basic Analysis II, §9.1 (Leibniz integral rule), Theorem 9.1.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]).

**Integral form.** Let $n,m\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $g:U\to\mathbb R^m$ be continuous. Write $g_i(x):=g(x)(i)$ for $0\le i<m$, using the canonical function coordinates of [[def-euclidean-inner-product]]. For a measurable $V\subseteq U$ write, componentwise,

$$\int_V g\,d\lambda_n:=\Bigl(\int g_0\chi_V\,d\lambda_n,\ \dots,\ \int g_{m-1}\chi_V\,d\lambda_n\Bigr),$$

each component $0\le i<m$, when integrable, being the Lebesgue integral of $g_i$ on $V$, extended by zero outside $V$ ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]]). A ball $V\subseteq U$ is **compactly contained** in $U$ when its closure is a compact subset of $U$; for a Euclidean ball this means $\overline V\subseteq U$. If $\int_Vg\,d\lambda_n=0$ for every ball $V$ compactly contained in $U$, then $g=0$ on $U$.

**Disc form.** Let $W\subseteq\mathbb R^3$ be open and let $F:W\to\mathbb R^3$ be continuous. Write $F_i(x):=F(x)(i)$ for $0\le i<3$ and $e_0=(1,0,0)$, $e_1=(0,1,0)$, $e_2=(0,0,1)$, the canonical standard vectors of [[lem-standard-basis-of-f-n]]. Extend the basis labels cyclically by $e_j:=e_{j\bmod3}$ for $j\ge3$. Thus $e_{i+1}\times e_{i+2}=e_i$ for each $i\in\{0,1,2\}$. For such $i$, $q\in W$ and $r>0$ put

$$\varphi_{i,q}(s,t):=q+s\,e_{i+1}+t\,e_{i+2},\qquad D_r:=\{(s,t)\in\mathbb R^2:s^2+t^2<r^2\},$$

with $\overline{D_r}$ the closed disc. If for every $i$, every $q\in W$ and every $r>0$ with $\varphi_{i,q}(\overline{D_r})\subseteq W$ one has

$$\int_{\overline{D_r}}(F_i\circ\varphi_{i,q})\,d\lambda_2=0,$$

then $F=0$ on $W$.

**Conventions.** The displayed disc condition is the vanishing of the flux of $F$ through the flat disc $\varphi_{i,q}(\overline{D_r})$ in the orientation with unit normal $e_i$: the affine parametrization is a regular patch whose tangent vectors $e_{i+1},e_{i+2}$ have cross product $e_i$ of norm one ([[def-admissible-regular-parametrized-surface-patch]], [[def-cross-product-in-r3]], [[lem-standard-basis-of-f-n]]), so the flux of [[def-oriented-unit-normal-and-flux-of-a-surface-patch]] is the Riemann integral $\int_{\overline{D_r}}(F_i\circ\varphi_{i,q})\,d(s,t)$; that integral equals the displayed Lebesgue integral because the integrand is continuous on the compact Jordan region $\overline{D_r}$ ([[cor-disc-jordan-content-is-pi-r-squared]], [[def-riemann-integral-over-a-jordan-set]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]). Both clauses are pointwise conclusions on their open domains. The first clause is the converse from universal integral relations to a pointwise equation; a single vanishing integral over one ball or one disc supplies no conclusion, and the hypothesis ranges over the full family described.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; integers $n,m\ge1$; an open $U\subseteq\mathbb R^n$ and a continuous $g:U\to\mathbb R^m$ with $\int_Vg\,d\lambda_n=0$ for every ball $V$ compactly contained in $U$; an open $W\subseteq\mathbb R^3$ and a continuous $F:W\to\mathbb R^3$ satisfying the disc condition of the Statement, with canonical indices $0\le i<m$ for $g_i$ and $0\le i<3$ for $F_i,e_i$; and, inside the contradiction argument below, either a point $p\in U$ with $g(p)\ne0$ or a point $x\in W$ with $F(x)\ne0$.

[F1] Metric balls and continuity at a point: $B_X(a,\rho)=\{y\in X:d_X(y,a)<\rho\}$, and $f$ is continuous at $a$ when for every real $\varepsilon>0$ there is $\delta>0$ with $f[B_X(a,\delta)]\subseteq B_Y(f(a),\varepsilon)$ ([[def-metric-ball]], [[def-metric-continuity]]).

[F2] Open subsets of a metric space: $U$ is open exactly when every $x\in U$ has $r>0$ with $B(x,r)\subseteq U$ ([[def-metric-topology]]).

[F3] Under $\mathrm{AC}_\omega$, every Euclidean ball $B(x,r)$ with $r>0$ is Lebesgue measurable with $0<\lambda(B(x,r))<\infty$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F4] Integral of signed and nonnegative functions: for measurable real $u$ with at most one of $\int u^+$, $\int u^-$ equal to $+\infty$ one sets $\int u\,d\lambda:=\int u^+d\lambda-\int u^-d\lambda$, and $u$ is integrable when both are finite, equivalently $\int|u|\,d\lambda<\infty$; then $\int(-u)\,d\lambda=-\int u\,d\lambda$; and for nonnegative measurable $f$ the integral over $E$ is $\int_Ef\,d\lambda=\int f\chi_E\,d\lambda$ ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]]).

[F5] Monotonicity and nonnegative homogeneity for the nonnegative integral: if $0\le f\le h$ are measurable then $\int f\,d\lambda\le\int h\,d\lambda$, and if $c>0$ then $\int cf\,d\lambda=c\int f\,d\lambda$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F6] Simple integral: for a nonnegative simple measurable function $s=\sum_{j\le N}c_j\chi_{E_j}$ one has $\int s\,d\lambda=\sum_{j\le N}c_j\lambda(E_j)$ with $0\cdot\infty=0$, and the nonnegative integral of a nonnegative simple measurable function equals its simple integral; hence $\int c\chi_E\,d\lambda=c\lambda(E)$ for $c\ge0$ and measurable $E$ ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F7] Measurability: every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable under $\mathrm{AC}_\omega$; the Borel $\sigma$-algebra is generated by the open sets, so indicators of open sets are Borel ([[cor-continuous-functions-are-borel-measurable]], [[def-borel-sigma-algebra]]).

[F8] Closed bounded Euclidean sets are compact ([[thm-heine-borel-rn]]). Extreme values: a continuous real function on a nonempty compact metric space is bounded above and below and attains a maximum and a minimum ([[thm-extreme-value-metric]]).

[F9] Canonical coordinates: $\mathbb R^m$ consists of functions on $m=\{0,\dots,m-1\}$, $z_i=z(i)$ for $i<m$, and $\langle z,w\rangle=\sum_{i<m}z_iw_i$ with $\lVert z\rVert_2=\sqrt{\langle z,z\rangle}$ ([[def-euclidean-inner-product]]). The standard vectors $e_i$, $i<m$, have coordinate $1$ at $i$ and $0$ at the other coordinates ([[lem-standard-basis-of-f-n]]). Hence $|z_i|\le\lVert z\rVert_2$, since $z_i^2\le\sum_{k<m}z_k^2$, and $\langle z,e_i\rangle=z_i$; applying the bound to differences shows that every component of a continuous vector map is continuous.

## Proof

**Proof technique:** contradiction; assume the Statement fails, and contradict in turn a nonzero value of $g$ (cases (A)) and, under the disc hypothesis, a nonzero value of $F$ (case (B)).

1.1 Suppose the Statement fails. Then either (A) $g(p)\ne0$ for some $p\in U$, or (B) the disc condition holds and $F(x)\ne0$ for some $x\in W$; if neither holds then $g=0$ on $U$ and, whenever the disc condition holds, $F=0$ on $W$, which is exactly the Statement. We contradict (A) and (B) in turn. [given, assume-contra]

2.1 In case (A): choose a component index $i<m$ with $g_i(p)\ne0$ and put $u:=g_i$, continuous by [F9]. Replacing the $i$-th component of $g$ by its negative preserves the hypothesis, since $\int_V(-g_i)\,d\lambda=-\int_Vg_i\,d\lambda$ by [F4], and does not change whether $g$ vanishes; hence we may suppose $u(p)=2c$ with $c:=u(p)/2>0$. By [F1] applied to the continuous $u$ at $p$ with $\varepsilon=c$ there is $\delta_0>0$ with $|u(y)-u(p)|<c$ for all $y\in B(p,\delta_0)$; by [F2] and $p\in U$ there is $\delta_2>0$ with $B(p,\delta_2)\subseteq U$; put $\delta:=\min\{\delta_0,\delta_2\}>0$. Then the ball $V:=B(p,\delta/2)$ satisfies $\overline V\subseteq B(p,\delta)\subseteq U$, so $V$ is compactly contained in $U$, and $u(y)>u(p)-c=c$ for every $y\in V$. The hypothesis gives $\int_Vg\,d\lambda_n=0$, whose $i$-th component is $\int u\chi_V\,d\lambda=0$. [step 1.1, F1, F2, F4, F9, given, algebra]

2.2 In case (B): choose $i\in\{0,1,2\}$ with $F_i(x)\ne0$ and put $\varphi:=\varphi_{i,x}$, $W':=\varphi^{-1}[W]=\{(s,t):\varphi(s,t)\in W\}$ and $h:=F_i\circ\varphi:W'\to\mathbb R$, so that $h(0,0)=F_i(x)\ne0$. Then $W'$ is open in $\mathbb R^2$, $h$ is continuous, and for every $r>0$ with $\overline B((0,0),r)\subseteq W'$ the disc hypothesis with centre $x$ gives $\int_{\overline B((0,0),r)}h\,d\lambda_2=0$. Indeed, the standard unit vectors are orthonormal by [F9], so $\lVert\varphi(s,t)-\varphi(s',t')\rVert_2=\lVert(s,t)-(s',t')\rVert_2$ for all $(s,t),(s',t')$; hence $\varphi$ is continuous, and the inverse image of a ball contained in $W$ at $\varphi(s_0,t_0)$ contains the parameter ball of the same radius at $(s_0,t_0)$, so $W'$ is open by [F2], while for $(s_0,t_0)\in W'$ and $\varepsilon>0$, continuity of $F_i$ by [F9] at $\varphi(s_0,t_0)\in W$ gives $\rho>0$ with $|F_i(y)-F_i(\varphi(s_0,t_0))|<\varepsilon$ whenever $d(y,\varphi(s_0,t_0))<\rho$, and then $d((s,t),(s_0,t_0))<\rho$ gives $|h(s,t)-h(s_0,t_0)|<\varepsilon$ by the isometry identity; finally, when $\overline B((0,0),r)\subseteq W'$ the disc $\varphi(\overline B((0,0),r))$ lies in $W$, so the Statement's condition applies with centre $x$ and radius $r$. [step 1.1, F1, F2, F9, given, algebra]

3.1 In case (A): the function $u\chi_V$ is Borel and nonnegative, and $0\le c\chi_V\le u\chi_V$ pointwise, because $u>c>0$ on $V$ by step 2.1 while $u\chi_V=0$ off $V$, and $u$ is continuous while $V$ is open [F7]. More explicitly, for a continuous function on open $U$, inverse images of open real sets are relatively open, hence open in $\mathbb R^n$; after multiplication by $\chi_V$ and zero extension, inverse images are Borel (adding $\mathbb R^n\setminus V$ when the target contains zero). Moreover $\overline V$ is a nonempty compact metric space, so $M:=\max_{\overline V}|u|$ is finite by [F8], and $|u\chi_V|\le M\chi_{B(p,\delta)}$ with $\int M\chi_{B(p,\delta)}\,d\lambda=M\lambda(B(p,\delta))<\infty$ by [F5], [F6] and [F3]; hence $u\chi_V$ is integrable and $\int u\chi_V\,d\lambda$ is a finite real number by [F4]. Monotonicity [F5] and the simple-integral rule [F6] give $\int u\chi_V\,d\lambda\ge\int c\chi_V\,d\lambda=c\,\lambda(V)>0$ by [F3], contradicting $\int u\chi_V\,d\lambda=0$ from step 2.1. Therefore case (A) is impossible: the integral hypothesis forces $g=0$ on $U$. [step 2.1, F3, F4, F5, F6, F7, F8, algebra]

4.1 In case (B), replace $h$ by $-h$ if necessary, which preserves every zero disc integral by [F4], so $h(0,0)=2c'>0$. Continuity and openness as in step 2.1 give $r>0$ with $\overline B((0,0),r)\subseteq W'$ and $h>c'$ throughout that closed disc $C$. It is compact by [F8] and contained in the open ball $B((0,0),2r)$, of finite measure by [F3], so $h\chi_C$ is integrable by the boundedness and Borel argument of step 3.1. Since $0\le c'\chi_{B((0,0),r)}\le h\chi_C$, [F5] and [F6] give $\int_C h\,d\lambda_2\ge c'\lambda_2(B((0,0),r))>0$ by [F3]. This contradicts the closed-disc integral hypothesis of step 2.2, without replacing it by an unstated open-ball hypothesis. Thus $F=0$ on $W$. [step 2.1, step 2.2, step 3.1, F3, F4, F5, F6, F8, algebra]

5.1 Cases (A) and (B) both end in contradiction, so no failure of the Statement occurs: the integral hypothesis forces $g=0$ on $U$, and the disc hypothesis forces $F=0$ on $W$. [step 3.1, step 4.1, discharge-contradiction] ∎

## Remarks

- The proof uses, for each clause, the hypothesis only on balls centred at the point where the function is assumed nonzero and with radius half of a continuity threshold; the full family in the Statement is what makes the lemma a localization statement, but no choice from the family is made, and the argument is choice-free apart from the declared $\mathrm{AC}_\omega$ used by the surface and measurability suppliers.
- The disc clause is not a statement about a single loop or box: one special disc carries no information, and the components must be tested in all three coordinate directions at all admissible centres and radii.
