---
id: lem-cm-integral-and-ftc-for-continuous-normed-space-curves
kind: lemma
title: "Riemann integration of continuous curves in a complete normed space, with the fundamental theorem of calculus and coefficient functionals"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-norm-and-normed-space, def-complete-metric-space, def-cauchy-in-metric, def-metric-uniform-continuity, cor-compact-domain-maps-are-uniformly-continuous, thm-heine-borel-r, def-interval, def-metric-continuity, lem-reverse-triangle-inequality-in-a-normed-space, def-vector-space]
dependency_roles:
  def-norm-and-normed-space: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-cauchy-in-metric: mathematical-premise
  def-metric-uniform-continuity: mathematical-premise
  cor-compact-domain-maps-are-uniformly-continuous: mathematical-premise
  thm-heine-borel-r: mathematical-premise
  def-interval: mathematical-premise
  def-metric-continuity: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  def-vector-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 4.1 (Bochner spaces and integration of curves with values in a Banach space)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Theorem 3.1 (the Picard theorem on a Banach space) and Subsections 3.2.2-3.2.3 (integral equations and limits of curves in Sobolev spaces)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

Let $X$ be a real vector space ([[def-vector-space]]) with a norm $\|\cdot\|$ ([[def-norm-and-normed-space]]) whose metric $d(x,y):=\|x-y\|$ is complete ([[def-complete-metric-space]]). Let $a<b$ be reals ([[def-interval]]) and let $g:[a,b]\to X$ be continuous ([[def-metric-continuity]]). Then:

1. **Integral.** For every sequence of tagged partitions of $[a,b]$ whose mesh tends to $0$, the Riemann sums $\sum_i(t_{i+1}-t_i)\,g(s_i)$ converge in $X$; the limit, written $\int_a^b g$, is independent of the sequence, and
$$\Bigl\|\int_a^b g\Bigr\|\;\le\;(b-a)\sup_{t\in[a,b]}\|g(t)\| .$$
2. **Fundamental theorem.** The curve $G:[a,b]\to X$, $G(t):=\int_a^t g$, is well defined, satisfies $\|G(t)-G(s)\|\le(t-s)\sup_{[s,t]}\|g\|$ for $a\le s\le t\le b$, and is differentiable with $G'=g$ on $[a,b]$ in the one-sided sense at the endpoints.
3. **Linearity.** For continuous $g,h:[a,b]\to X$ and reals $\alpha,\beta$: $\int_a^b(\alpha g+\beta h)=\alpha\int_a^b g+\beta\int_a^b h$; and for $a\le c\le b$, $\int_a^b g=\int_a^c g+\int_c^b g$.
4. **Bounded linear images.** If $Y$ is a normed real vector space and $T:X\to Y$ is linear with $\|Tx\|\le C\|x\|$ for some $C<+\infty$ and all $x$, then $T\circ g$ is continuous and $T\bigl(\int_a^b g\bigr)=\int_a^b (T\circ g)$; in particular, for every real-linear functional $\Lambda:X\to\mathbb R$ with $|\Lambda x|\le C\|x\|$, $\Lambda\bigl(\int_a^b g\bigr)=\int_a^b\Lambda\circ g$.

## Facts & Assumptions

**Given:** A complete normed real vector space $X$, reals $a<b$, a continuous curve $g:[a,b]\to X$.

[F1] A normed space is a real vector space with a norm, and $d(x,y)=\|x-y\|$ is a metric; scalar multiplication and addition are continuous for that metric, and $\|x\|=\|x-0\|$ is $1$-Lipschitz hence continuous ([[def-norm-and-normed-space]], [[lem-reverse-triangle-inequality-in-a-normed-space]]).

[F2] A metric space is complete when every Cauchy sequence converges ([[def-complete-metric-space]], [[def-cauchy-in-metric]]).

[F3] $[a,b]$ is compact and Hausdorff ([[thm-heine-borel-r]]), and every continuous map from a nonempty compact Hausdorff space to a uniform space is uniformly continuous ([[cor-compact-domain-maps-are-uniformly-continuous]], [[def-metric-uniform-continuity]]).

[F4] A sequence $\bigl(g(\tau_j)\bigr)$ converges to $g(t)$ whenever $\tau_j\to t$ ([[def-metric-continuity]]).

## Proof

**Proof technique:** direct; uniform continuity makes the Riemann sums Cauchy in the complete metric, and the fundamental theorem is the usual quotient estimate.

**Given:** The complete normed space $X$ and the continuous curve $g$.

1.1 Since $[a,b]$ is compact and metric, hence a uniform space, [F3] provides a modulus: for every $\varepsilon>0$ there is $\delta>0$ such that $\|g(s)-g(s')\|\le\varepsilon$ whenever $|s-s'|\le\delta$. Define $\omega(\delta):=\sup\{\|g(s)-g(s')\|: s,s'\in[a,b],\ |s-s'|\le\delta\}$; then $\omega(\delta)\to0$ as $\delta\downarrow0$ and $\omega$ is nondecreasing. [F3, F1]

2.1 Let $P$ be a tagged partition $a=t_0<\dots<t_n=b$ with tags $s_i\in[t_i,t_{i+1}]$ and Riemann sum $S_P:=\sum_{i<n}(t_{i+1}-t_i)g(s_i)$, and let $R$ be a refinement of $P$ with any tags. Grouping the terms of $S_R$ by the interval of $P$ that contains them, $S_P-S_R=\sum_{i<n}\sum_{R\ni[t',t'']\subseteq[t_i,t_{i+1}]}(t''-t')\bigl(g(s_i)-g(s')\bigr)$, so $\|S_P-S_R\|\le\sum_{i<n}(t_{i+1}-t_i)\,\omega(t_{i+1}-t_i)\le(b-a)\,\omega(\mathrm{mesh}(P))$ by [F1]. [F1, step 1.1, algebra]

3.1 Let $(P^{(j)})$ and $(Q^{(j)})$ be two sequences of tagged partitions with meshes tending to $0$. For each $j$ let $R^{(j)}$ be a common refinement of $P^{(j)}$ and $Q^{(j)}$, so $\mathrm{mesh}(R^{(j)})\le\min(\mathrm{mesh}(P^{(j)}),\mathrm{mesh}(Q^{(j)}))$. By step 2.1 applied twice, $\|S_{P^{(j)}}-S_{Q^{(j)}}\|\le\|S_{P^{(j)}}-S_{R^{(j)}}\|+\|S_{R^{(j)}}-S_{Q^{(j)}}\|\le2(b-a)\omega\bigl(\max(\mathrm{mesh}(P^{(j)}),\mathrm{mesh}(Q^{(j)}))\bigr)\to0$. Taking $Q^{(j)}=P^{(k)}$ for fixed $k$ and letting $j\to\infty$ shows that $(S_{P^{(j)}})$ is Cauchy, and taking arbitrary sequences shows that any two such limits coincide; by completeness [F2] the limit $\int_a^bg$ exists and is independent of the sequence. Moreover $\|S_P\|\le(b-a)\sup_{[a,b]}\|g\|$ for every $P$ by the triangle inequality, and the norm is continuous [F1], so the same bound holds for the limit. This is claim 1. [step 2.1, F1, F2, F3]

4.1 For $a\le c\le b$ the integral over $[a,b]$ equals the sum of those over $[a,c]$ and $[c,b]$: partitions of $[a,b]$ may be refined to contain $c$, and for such a partition the Riemann sum splits into the two sums; both sides converge and limits are additive because addition in $X$ is continuous [F1]. Defining $G(t):=\int_a^tg$, this additivity gives $G(t)-G(s)=\int_s^tg$ for $a\le s\le t\le b$, and claim 1 applied on $[s,t]$ gives $\|G(t)-G(s)\|\le(t-s)\sup_{[s,t]}\|g\|$. [step 3.1, F1, algebra]

4.2 Linearity: for fixed $g,h,\alpha,\beta$ and any tagged partition $P$, the Riemann sums satisfy $S_P(\alpha g+\beta h)=\alpha S_P(g)+\beta S_P(h)$ by finite distributivity in the vector space $X$ [F1]; letting the mesh tend to $0$ and using continuity of addition and scalar multiplication [F1] gives $\int(\alpha g+\beta h)=\alpha\int g+\beta\int h$. This completes claim 3. [step 3.1, F1]

5.1 Differentiability: for $a\le t<b$ and $0<h\le b-t$, step 4.1 gives $G(t+h)-G(t)=\int_t^{t+h}g$, and claim 1 gives $\bigl\|\frac1h\bigl(G(t+h)-G(t)\bigr)-g(t)\bigr\|=\bigl\|\frac1h\int_t^{t+h}\bigl(g-g(t)\bigr)\bigr\|\le\sup_{u\in[t,t+h]}\|g(u)-g(t)\bigr\|\to0$ as $h\downarrow0$ by continuity [F4]; the left endpoint and negative $h$ are identical arguments, so $G'=g$ with the usual one-sided interpretation at $a$ and $b$. Together with step 4.1 this is claim 2. [step 4.1, F1, F4]

6.1 Bounded linear images: $T\circ g$ is continuous since $g$ is and $T$ is Lipschitz [F1]; for each tagged partition $T(S_P(g))=S_P(T\circ g)$ by linearity, and $T$ is continuous, so passing to the limit in step 3.1 gives $T(\int_a^bg)=\int_a^bT\circ g$. Applying this to a bounded linear functional $\Lambda:X\to\mathbb R$ (with $\mathbb R$ in the role of $Y$) gives the last clause of claim 4. [step 3.1, F1] ∎

## Remarks

The statement is deliberately quantitative: the integral is defined by a limit of Riemann sums for partitions of mesh tending to zero, which is the only integration of curves needed for the Galerkin argument below. No Bochner measurability theory, no Radon-Nikodym theorem and no dual-space completeness is presupposed.
