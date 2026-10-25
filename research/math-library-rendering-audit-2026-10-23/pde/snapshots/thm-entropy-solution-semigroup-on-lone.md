---
id: thm-entropy-solution-semigroup-on-lone
kind: theorem
title: The entropy solution semigroup on $L^1\cap L^\infty$
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-existence-of-bounded-kruzhkov-entropy-solutions, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, cor-global-lone-contraction-from-the-local-kruzhkov-estimate, cor-linfinity-maximum-bound-for-scalar-entropy-solutions, cor-finite-propagation-for-scalar-conservation-laws, def-metric-ball, def-kruzhkov-entropy-solution, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice, thm-riesz-fischer-completeness-of-l-p]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§§3–4, contraction estimate and semigroup property, pp. 222–239"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§6.1, Theorem 4 and the flow property, pp. 49–51"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§§5.5–6, pp. 45–52"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the heat-kernel, $L^1$ completeness and
vanishing-viscosity extraction interfaces used below. Let $n\ge1$ and let
$f\colon\mathbb R\to\mathbb R^n$ be locally Lipschitz and $C^1$. For
$u_0\in L^1(\mathbb R^n)\cap L^\infty(\mathbb R^n)$ and $t\ge0$ let $S_tu_0$ be
the value at time $t$ of the unique Kruzhkov entropy solution with datum $u_0$
([[thm-existence-of-bounded-kruzhkov-entropy-solutions]],
[[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]),
with $S_0u_0=u_0$. Then: (i) $S_{t+s}=S_t\circ S_s$ for all $s,t\ge0$
(semigroup law); (ii) each $S_t$ is order-preserving and an $L^1$ contraction,
$\|S_tu_0-S_tv_0\|_1\le\|u_0-v_0\|_1$; (iii)
$\|S_tu_0\|_\infty\le\|u_0\|_\infty$. If in addition $f(0)=0$ and $f$ is
globally Lipschitz on $\mathbb R$, then each $S_t$ extends uniquely to a map on
$L^1(\mathbb R^n)$ that is order-preserving, an $L^1$ contraction and satisfies
the same semigroup law; the extension agrees with the classical flow on
$L^1\cap L^\infty$
([[def-kruzhkov-entropy-solution]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable and Dependent Choice, $n\ge1$, a locally Lipschitz $C^1$ flux $f$, and data $u_0,v_0\in L^1\cap L^\infty$ with the associated unique bounded Kruzhkov entropy solutions $S_tu_0$, $S_tv_0$ on any finite time horizon.

[F1] Existence and uniqueness: for every datum in $L^1\cap L^\infty$ there is a bounded Kruzhkov entropy solution, unique in the bounded Kruzhkov class, with a representative continuous in $L^1_{\mathrm{loc}}$ on $[0,T]$ and attaining the datum in the strong local $L^1$ sense ([[thm-existence-of-bounded-kruzhkov-entropy-solutions]], [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]], [[def-kruzhkov-entropy-solution]]).

[F2] Comparison and contraction: if $u_0\le v_0$ almost everywhere then $S_tu_0\le S_tv_0$ almost everywhere, and $\|S_tu_0-S_tv_0\|_1\le\|u_0-v_0\|_1$ for every $t$ ([[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]], [[cor-global-lone-contraction-from-the-local-kruzhkov-estimate]]).

[F3] $L^\infty$ bound: $\|S_tu_0\|_\infty\le\|u_0\|_\infty$ for every $t$; in particular the range of each solution is contained in a bounded interval on which $f$ is Lipschitz ([[cor-linfinity-maximum-bound-for-scalar-entropy-solutions]]).

[F4] Truncation and dominated convergence: for $u_0\in L^1$, the truncations $u_0^m=(-m)\vee(u_0\wedge m)$ lie in $L^1\cap L^\infty$ and converge to $u_0$ in $L^1$; limits of sequences of equivalence classes are taken in $L^1$ and are independent of the pointwise representatives ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]], [[def-l-p-space-as-a-quotient-by-null-functions]]). The Cauchy limits exist by [[thm-riesz-fischer-completeness-of-l-p]].

[F5] If an initial datum is supported in $B(0,R)$, finite propagation gives support of its entropy solution in $B(0,R+Lt)$ for almost every $t$, where $L$ is a Lipschitz constant of $f$ on the common range ([[cor-finite-propagation-for-scalar-conservation-laws]], [[def-metric-ball]]). The representative is continuous in $L^1_{\mathrm{loc}}$ by [F1].

## Proof

**Proof technique:** direct.

1.1 **Semigroup law.** Fix $s,t\ge0$ and a horizon $T>s+t$. The solution $S_\tau u_0$ is in $L^1$ for every $\tau\in[0,T]$: compare it with the zero solution in [F2] to get $\|S_\tau u_0\|_1\le\|u_0\|_1$; its $L^\infty$ bound follows from [F3]. Thus $S_su_0\in L^1\cap L^\infty$ and [F1] supplies the entropy solution $z(\tau)=S_\tau(S_su_0)$. Define $w(\tau,x)=S_{s+\tau}u_0(x)$ on $\Pi_{T-s}$: its entropy inequalities are those of the original solution with time shifted, and its strong local $L^1$ trace at $\tau=0$ is $S_su_0$ by the representative's continuity in $L^1_{\mathrm{loc}}$. Both $w$ and $z$ are bounded entropy solutions with this same datum, so uniqueness [F1] gives $w=z$ almost everywhere on $\Pi_{T-s}$. Their time-continuous representatives then agree at every time in $L^1_{\mathrm{loc}}$, so evaluating at $\tau=t<T-s$ gives $S_{s+t}u_0=S_t(S_su_0)$; as $T$ is arbitrary, this holds for all $s,t\ge0$. [F1, F2, F3]


1.2 **Order, contraction and the maximum bound.** Let $u_0\le v_0$ almost everywhere in $L^1\cap L^\infty$; by [F2] and [F3], $S_tu_0\le S_tv_0$ almost everywhere, $\|S_tu_0-S_tv_0\|_1\le\|u_0-v_0\|_1$, and $\|S_tu_0\|_\infty\le\|u_0\|_\infty$ for every $t\ge0$. This proves (ii) and (iii). [F2, F3]


2.1 **Extension to $L^1$: construction.** Assume $f(0)=0$ and $f$ globally Lipschitz, and let $u_0\in L^1$. Put $u_0^m=(-m)\vee(u_0\wedge m)$ as in [F4]. For $m,\ell\ge1$ and every $t\ge0$, step 1.2 gives $\|S_tu_0^m-S_tu_0^\ell\|_1\le\|u_0^m-u_0^\ell\|_1$, so $(S_tu_0^m)_m$ is Cauchy in $L^1$, uniformly in $t$; define $S_tu_0=\lim_mS_tu_0^m$ in $L^1$. The definition is independent of the approximating sequence: if $w_m\in L^1\cap L^\infty$ with $w_m\to u_0$ in $L^1$, then $\|S_tw_m-S_tu_0^m\|_1\le\|w_m-u_0^m\|_1\to0$, so both sequences have the same limit. [F2, F4, step 1.2]


3.1 **Time continuity of the $L^1$ flow.** First fix $w_0\in L^1\cap L^\infty$ and $T>0$, and choose $R>0$ with $w_0^R:=w_0\mathbf 1_{B(0,R)}$. Let $M=\|w_0\|_\infty$ and let $L$ be a Lipschitz constant of $f$ on $[-M,M]$. By [F5], for almost every $t\in(0,T)$ the orbit $S_tw_0^R$ is supported in $B(0,R+Lt)$. Fix $t_0\in[0,T]$ and a compact set $K\subseteq\{x:|x|>R+Lt_0\}$. Its positive distance from $\overline B(0,R+Lt_0)$ lets us choose times $t_j$ from that full-measure set tending to $t_0$ with $K\subseteq\{x:|x|>R+Lt_j\}$. Then $S_{t_j}w_0^R=0$ in $L^1(K)$, and the $L^1_{\mathrm{loc}}$ continuity [F1] gives $S_{t_0}w_0^R=0$ in $L^1(K)$. A countable exhaustion of the strict exterior by compact sets shows that every slice is supported in $\overline B(0,R+Lt_0)$; hence all slices on $[0,T]$ are supported in the fixed ball $\overline B(0,R+LT)$. Local $L^1$ continuity is therefore global $L^1$ continuity for this truncated orbit. By [F2], $\sup_{t\in[0,T]}\|S_tw_0-S_tw_0^R\|_1\le\|w_0-w_0^R\|_1$, which tends to $0$ as $R\to\infty$. Thus the $L^1$-continuous truncated orbits converge uniformly on $[0,T]$ to $t\mapsto S_tw_0$, proving continuity for every datum in $L^1\cap L^\infty$. For $u_0\in L^1$ in step 2.1, the extension orbit is the uniform limit of the continuous orbits $t\mapsto S_tu_0^m$, since $\sup_{t\ge0}\|S_tu_0-S_tu_0^m\|_1\le\|u_0-u_0^m\|_1\to0$; hence the extension is continuous as well. [F1, F2, F4, F5, step 2.1]


3.2 **Extension: properties.** The extended maps preserve order: if $u_0\le v_0$ in $L^1$, then the truncated sequences satisfy $u_0^m\le v_0^m$ and hence $S_tu_0^m\le S_tv_0^m$ almost everywhere; passing to the $L^1$ limit gives $S_tu_0\le S_tv_0$ almost everywhere. They are contractions: $\|S_tu_0-S_tv_0\|_1\le\liminf_m\|S_tu_0^m-S_tv_0^m\|_1\le\liminf_m\|u_0^m-v_0^m\|_1=\|u_0-v_0\|_1$, using that truncation is a contraction in $L^1$. The semigroup law passes to the limit: $S_{t+s}u_0=\lim_mS_{t+s}u_0^m=\lim_mS_t(S_su_0^m)=S_t(S_su_0)$, the last step by the contraction property just proved applied to $S_su_0^m\to S_su_0$. Finally, the extension agrees with the original flow on $L^1\cap L^\infty$, because for such $u_0$ the estimate of step 2.1 with $w_m=u_0$ gives $S_tu_0=\lim_mS_tu_0^m$ in the original sense as well. An order-preserving $L^1$ contraction agreeing on the dense subset $L^1\cap L^\infty$ is unique, so the extension is unique. [F2, F4, step 1.1, step 2.1]


4.1 **Conclusion.** Steps 1.1–1.2 prove (i)–(iii) for data in $L^1\cap L^\infty$, and steps 2.1 and 3.2 construct and characterise the unique order-preserving $L^1$ contraction extension to $L^1$ when $f(0)=0$ and $f$ is globally Lipschitz, agreeing with the classical flow on $L^1\cap L^\infty$ and satisfying the semigroup law. Step 3.1 proves strong $L^1$ continuity of these orbits. This completes the proof. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2] ∎
