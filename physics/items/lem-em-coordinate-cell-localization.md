---
id: lem-em-coordinate-cell-localization
kind: lemma
title: "Localization of a continuous function by axis-parallel cube integrals"
domain: mathematics
status: draft
origin: session
dependency_level: 0
deps: [def-metric-continuity,
       def-metric-ball,
       def-metric-topology,
       def-euclidean-inner-product,
       def-isometry-and-metric-embedding,
       thm-heine-borel-rn,
       thm-extreme-value-metric,
       thm-continuous-preimages-of-borel-sets-are-borel,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-continuous-on-a-rectangle-is-riemann-integrable,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       thm-multidimensional-integral-properties,
       def-multidimensional-darboux-sums,
       def-multidimensional-grid-partition,
       def-multidimensional-darboux-integral,
       lem-multidimensional-refinement-inequalities,
       cor-archimedean-reciprocal,
       def-countable-choice]
dependency_roles:
  def-metric-continuity: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-isometry-and-metric-embedding: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  lem-multidimensional-refinement-inequalities: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
  def-countable-choice: mathematical-premise
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
    - title: "J. K. Hunter, Measure Theory (UC Davis lecture notes)"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
      locator: "Sets of finite measure and the measure of boxes; the localization argument uses only continuity, the positive measure of a nondegenerate cube and the monotonicity of the integral restricted to the cube, as in the notes' treatment of continuity against measure."
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
      locator: "Section 1.2, measure of boxes and the elementary properties of Lebesgue measure used in the localization argument."
proof_strategy: direct
---


## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the ambient
convention under which the Lebesgue measure and integration interface used
below is stated ([[def-countable-choice]]). Let $n\ge1$, let
$U\subseteq\mathbb R^n$ be open, and let $g:U\to\mathbb R$ be continuous.

For a closed axis-parallel cube $Q=\prod_{i<n}[a_i,a_i+\ell]\subseteq U$ with
$\ell>0$, the restriction $g|_Q$ is continuous on the compact nondegenerate
rectangle $Q$, hence bounded and Borel and Riemann integrable; denote by
$\int_Qg\,d\lambda_n$ the Lebesgue integral of $g$ over $Q$ with respect to
the restriction of Lebesgue measure, which by the comparison of the Riemann
and Lebesgue integrals equals the Riemann integral of $g$ over $Q$. Suppose
that

$$\int_Qg\,d\lambda_n=0$$

for every closed axis-parallel cube $Q\subseteq U$ with side $\ell>0$. Then
$g=0$ on $U$.

In particular, for $n=2$, a continuous function on an open subset of the
plane whose integral over every closed axis-parallel square contained in its
domain vanishes is identically zero.

The hypothesis requires every closed axis-parallel cube, with every centre and
every positive side length. A single cube does not suffice, and neither do the
cubes centred at one fixed point: on $U=\mathbb R^n$ the nonzero continuous
function $g(x)=x_0-p_0$ has $\int_Qg\,d\lambda_n=0$ for every closed cube $Q$
centred at $p$, by cancellation in its first coordinate. This family also
differs from the family of closed cubes that merely contain $p$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. A natural number $n\ge1$, an open set $U\subseteq\mathbb R^n$, a continuous $g:U\to\mathbb R$, and the hypothesis that $\int_Qg\,d\lambda_n=0$ for every closed axis-parallel cube $Q\subseteq U$ of positive side length, the integral being interpreted as in the Statement. Throughout, $\mathbb R^n$ carries the Euclidean metric $d_2$ ([[def-euclidean-inner-product]]) and subsets carry the subspace metric ([[def-isometry-and-metric-embedding]]).

[F1] $U$ is open: for every $x\in U$ there is a real $r>0$ with $B(x,r)\subseteq U$ ([[def-metric-topology]], [[def-metric-ball]]). The map $g$ is continuous, that is, continuous at every point of $U$: for every $a\in U$ and every $\varepsilon>0$ there is a real $\delta>0$ such that $|g(x)-g(a)|<\varepsilon$ for every $x\in U$ with $d_2(x,a)<\delta$ ([[def-metric-continuity]]).

[F2] For $n\ge1$ the Euclidean metric is $d_2(x,y)=\sqrt{\sum_{i<n}(x_i-y_i)^2}$ ([[def-euclidean-inner-product]]).

[F3] For reals $a_i\le b_i$ the box $\{\,x\in\mathbb R^n:a_i\le x_i\le b_i\text{ for every }i<n\,\}$ is a compact subset of $(\mathbb R^n,d_2)$ ([[thm-heine-borel-rn]]).

[F4] A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value ([[thm-extreme-value-metric]]).

[F5] Every set $R$ with $R^\circ\subseteq R\subseteq\overline R$ determined by reals $a_i\le b_i$ is Lebesgue measurable with $\lambda_n(R)=\prod_{i<n}(b_i-a_i)$; in particular a closed cube of side $\ell>0$ has measure $\ell^n>0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F6] A continuous map between topological spaces has Borel preimages of Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F7] Every continuous real function on a closed nondegenerate rectangle $Q\subseteq\mathbb R^m$, $m\ge1$, is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F8] Assume $\mathrm{AC}_\omega$. For $m\ge1$ and reals $a_i<b_i$, if a bounded Borel real function $f$ on the box $Q=\prod_{i<m}[a_i,b_i]$ is Riemann integrable, then $f$ is Lebesgue integrable on $Q$ and its Lebesgue and Riemann integrals agree ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F9] For integrable $f\le h$ on a nondegenerate rectangle the Riemann integrals satisfy $\int_Qf\le\int_Qh$, and Riemann integrals are linear in the integrand ([[thm-multidimensional-integral-properties]]).

[F10] Lower and upper Darboux sums of a bounded $f$ over a grid $P$ are $L(f,P)=\sum_i m_i\operatorname{vol}(Q_i)$ and $U(f,P)=\sum_i M_i\operatorname{vol}(Q_i)$, with $m_i=\inf f[Q_i]$ and $M_i=\sup f[Q_i]$; the cells $Q_i$ of a grid partition have $\sum_i\operatorname{vol}(Q_i)=\operatorname{vol}(Q)$; and the Darboux integrals are the suprema and infima of these sums, the function being Riemann integrable when they agree ([[def-multidimensional-darboux-sums]], [[def-multidimensional-grid-partition]], [[def-multidimensional-darboux-integral]]).

[F11] If a grid $P'$ refines a grid $P$, then $L(f,P)\le L(f,P')\le U(f,P')\le U(f,P)$ ([[lem-multidimensional-refinement-inequalities]]).

[F12] For every real $\eta>0$ there is a natural number $k\ge1$ with $1/k<\eta$ ([[cor-archimedean-reciprocal]]).

## Proof

1.1 Suppose that $g(p)\ne0$ for some $p\in U$. Replacing $g$ by $-g$ if necessary, assume $g(p)>0$: the replacement preserves the hypothesis, because for every admissible cube the two Riemann integrals satisfy $\int_Q(-g)=-\int_Qg$ and the Lebesgue integrals equal them by [F8], so $\int_Q(-g)\,d\lambda_n=-\int_Qg\,d\lambda_n=0$, and it preserves the conclusion $g=0$; both $g$ and $-g$ are continuous. [given, F8, F9, algebra]

1.2 By continuity of $g$ at $p$ with $\varepsilon=g(p)/2>0$ there is $\delta_1>0$ with $|g(x)-g(p)|<g(p)/2$ for every $x\in U$ with $d_2(x,p)<\delta_1$; by openness of $U$ there is $\delta_2>0$ with $B(p,\delta_2)\subseteq U$. Put $\delta:=\min\{\delta_1,\delta_2\}>0$ and $\ell:=\delta/\sqrt n>0$, and consider the closed axis-parallel cube $Q:=\prod_{i<n}[p_i-\ell/2,\,p_i+\ell/2]$. For $x\in Q$ we have $d_2(x,p)^2=\sum_{i<n}(x_i-p_i)^2\le n(\ell/2)^2=\delta^2/4$, so $d_2(x,p)\le\delta/2<\delta\le\delta_1$ and $x\in B(p,\delta_2)\subseteq U$; thus $Q\subseteq U$ and $g(x)>g(p)-g(p)/2=g(p)/2$ for every $x\in Q$. [F1, F2, choose, algebra]

1.3 It remains to verify the sharpness clause. Fix $p\in\mathbb R^n$, put $a=\ell/2>0$ and $Q=\prod_{i<n}[p_i-a,p_i+a]$, and let $h(x)=x_0-p_0$ on $\mathbb R^n$. Let $\Phi(x):=(2p_0-x_0,x_1,\dots,x_{n-1})$; then $\Phi$ maps $Q$ onto $Q$, $\Phi\circ\Phi$ is the identity, and for each cell $A$ of a grid whose first-coordinate partition is symmetric about $p_0$ the mirror cell $\Phi(A)$ has $\operatorname{vol}(\Phi(A))=\operatorname{vol}(A)$, $\inf h[\Phi(A)]=-\sup h[A]$ and $\sup h[\Phi(A)]=-\inf h[A]$. [F2, F10, construct, algebra]

2.1 The set $Q$ is a nonempty compact subset of $\mathbb R^n$ and the restriction $g|_Q$ is continuous for the subspace metric, so it is bounded and attains its extrema; its Borel measurability is [F6] applied to the continuous map $g|_Q$, and continuity on the closed nondegenerate rectangle gives Riemann integrability. By [F8] the Lebesgue integral $\int_Qg\,d\lambda_n$ exists and equals the Riemann integral of $g|_Q$, and by [F5] $\lambda_n(Q)=\ell^n>0$. [F3, F4, F5, F6, F7, F8, step 1.2]

2.2 The constant $c:=g(p)/2>0$ has Riemann integral $c\,\ell^n$ over $Q$: for every grid $P$ of $Q$ every cell satisfies $m_i=M_i=c$, so $L(c,P)=U(c,P)=c\sum_i\operatorname{vol}(Q_i)=c\operatorname{vol}(Q)=c\,\ell^n$ by [F10]; hence the Darboux integrals of $c$ equal $c\,\ell^n$, the function is Riemann integrable, and by [F8] its Lebesgue integral over $Q$ is $c\,\ell^n>0$. [F5, F8, F10, step 1.2, algebra]

2.3 Let $P$ be any grid of $Q$ and let $P''$ be the grid with first-coordinate partition the union of the first-coordinate breakpoints of $P$ with their reflections $t\mapsto2p_0-t$, and with the remaining coordinate partitions those of $P$; then $P''$ refines $P$ and its first-coordinate partition is symmetric about $p_0$, so its cells fall into mirror pairs and self-mirrored cells, and summing the identities of step 1.3 over those classes gives $L(h,P'')=-U(h,P'')$, whence $L(h,P'')\le0\le U(h,P'')$; by [F11], $L(h,P)\le L(h,P'')\le0$ and $U(h,P)\ge U(h,P'')\ge0$ for every grid $P$. [F10, F11, step 1.3, algebra]

3.1 Since $g(x)>c$ for every $x\in Q$ by step 1.2 and both $g|_Q$ and the constant $c$ are Riemann integrable on $Q$, monotonicity [F9] gives $\int_Qg\,d\lambda_n\ge c\,\ell^n>0$, where step 2.1 identifies the Lebesgue integral of $g$ with its Riemann integral and step 2.2 evaluates the constant. This contradicts the hypothesis $\int_Qg\,d\lambda_n=0$ for the admissible cube $Q\subseteq U$ constructed in step 1.2. Hence $g(p)=0$ for every $p\in U$, and the planar clause is the case $n=2$. [step 2.2, step 1.2, step 2.1, F9, given, contradiction]

3.2 For each integer $m\ge1$ let $P_m$ be the grid with first-coordinate breakpoints $p_0+ka/m$ for $-m\le k\le m$ and single intervals of length $2a$ in the remaining coordinates. Its first-coordinate partition is symmetric about $p_0$, so $L(h,P_m)=-U(h,P_m)$ by step 2.3, and direct summation over the $2m$ cells of first-coordinate length $a/m$ gives $L(h,P_m)=-U(h,P_m)=-a^2(2a)^{n-1}/m$, a quantity tending to $0$; hence $\sup_PL(h,P)\ge L(h,P_m)$ for every $m$ forces $\sup_PL(h,P)\ge0$, and together with step 2.3 this gives $\sup_PL(h,P)=0$, while $\inf_PU(h,P)=0$ likewise. Therefore $h$ is Riemann integrable over $Q$ with $\int_Qh=0$, and by [F8], using that $h|_Q$ is continuous hence bounded and Borel, the Lebesgue integral is $\int_Qh\,d\lambda_n=0$. [F7, F8, F12, step 2.3, algebra]

4.1 The function $g(x)=x_0-p_0$ is continuous and nonzero on $\mathbb R^n$, and step 3.2 shows $\int_Qg\,d\lambda_n=0$ for the cube $Q$ of step 1.3 centred at $p$; every closed cube centred at $p$ is of that form, so the family of cubes with the single centre $p$ does not satisfy the localizing hypothesis although $g\ne0$, and a single cube plainly cannot either. Thus the all-cubes hypothesis of the Statement is exactly what the argument of steps 1.1-3.2 uses. [given, step 3.2, step 3.1] ∎



## Source notes

The localization statement is standard: a continuous function that is orthogonal to every axis-parallel cube integral vanishes. The proof above is written in the library's own measure and Darboux interfaces, using the multidimensional Darboux integral of [[def-multidimensional-darboux-integral]] and the comparison with the Lebesgue integral of [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]; the sharpness witness is the coordinate-cancellation computation, proved directly by mirror-symmetric grid refinements rather than by a separate symmetry or change-of-variables theorem.
