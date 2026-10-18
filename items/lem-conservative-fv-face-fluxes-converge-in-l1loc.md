---
id: lem-conservative-fv-face-fluxes-converge-in-l1loc
kind: lemma
title: Strong local convergence of consistent finite-volume face fluxes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  [
    def-conservative-finite-volume-scheme,
    def-finite-volume-space-time-reconstruction,
    thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity,
    prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
    def-measure,
    prop-measure-monotonicity,
    thm-heine-borel-rn,
    thm-extreme-value-metric,
    thm-heine-cantor-metric,
    def-countable-choice,
    thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
    thm-lebesgue-measure-of-a-box-of-every-kind
  ]
justified_by: []
proof_strategy: direct
axiom_use: "Assume only the Axiom of Countable Choice ACω, used in step 2.1
  through the published L1 translation-continuity theorem for a compactly
  supported cutoff. No dependent or arbitrary-index choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter
        3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.4.1, pp. 94–96: consistent two-state numerical fluxes and face
        updates; the local convergence argument is supplied here."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume
        Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differen\
        tial-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S0\
        9_lec19.pdf"
      locator: "pp. 1–2: two-state numerical face fluxes; the L1 passage is proved
        locally using the declared published translation-continuity interface."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $(\mathcal U_m,
\mathcal Q_m)$ be reconstructions from
[[def-finite-volume-space-time-reconstruction]] for schemes using a continuous
consistent flux $F$ for a continuous physical flux $f$ as in
[[def-conservative-finite-volume-scheme]]. Suppose $h_m\to0$,
$\mathcal U_m\to u$ strongly in $L^1_{\mathrm{loc}}(\mathbb R\times(0,T))$, and
for every bounded interval $I\subset\mathbb R$ and $T'<T$ there is
$M_{I,T'}<\infty$ such that $|\mathcal U_m|\le M_{I,T'}$ almost everywhere on
$I\times[0,T']$ for every $m$. Then $u$ is locally essentially bounded up to
the initial face and, for every bounded interval $I$ and $T'<T$,
$$ \|\mathcal Q_m-f(u)\|_{L^1(I\times(0,T'))}\longrightarrow0. $$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $h_m\to0$, strong local $L^1$ convergence, and local uniform bounds on every cylinder $I\times[0,T']$.

[A1] $\mathrm{AC}_\omega$ says every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] The state and face-flux reconstructions satisfy $\mathcal Q_m(x,t)=F(\mathcal U_m(x,t),\mathcal U_m(x+h_m,t))$ almost everywhere, and $F(a,a)=f(a)$. ([[def-finite-volume-space-time-reconstruction]], [[def-conservative-finite-volume-scheme]])

[F2] Assuming $\mathrm{AC}_\omega$, if $v\in L^1(\mathbb R^2)$ then $\|\tau_zv-v\|_{L^1(\mathbb R^2)}\to0$ as $z\to0$. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

[F3] Under $\mathrm{AC}_\omega$, bounded measurable sets in $\mathbb R^2$ have finite Lebesgue measure. For any measurable sequence $(E_r)$, disjointifying by $F_1=E_1$ and $F_r=E_r\setminus\bigcup_{k<r}E_k$ gives $\lambda_2(\bigcup_r E_r)=\sum_r\lambda_2(F_r)\le\sum_r\lambda_2(E_r)$ by countable additivity and monotonicity; hence Lebesgue measure is countably subadditive. Therefore a bounded measurable function restricted to a bounded rectangle belongs to $L^1$. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[def-measure]], [[prop-measure-monotonicity]])

[F4] Every closed box in Euclidean $\mathbb R^2$ and every closed bounded interval in $\mathbb R$ is compact. ([[thm-heine-borel-rn]])

[F5] A continuous real-valued function on a nonempty compact metric space is bounded. ([[thm-extreme-value-metric]])

[F6] A continuous map on a compact metric space is uniformly continuous. ([[thm-heine-cantor-metric]])

[F7] Under $\mathrm{AC}_\omega$, translation is an isometry of $L^1(\mathbb R^2)$: $\|\tau_z v\|_1=\|v\|_1$. This follows from translation invariance of Lebesgue measure ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F8] Assuming $\mathrm{AC}_\omega$, every rectangle in $\mathbb R^2$ with any choice of included or excluded faces is measurable and has measure equal to its area. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

1.1 Fix a closed bounded interval $I$ and $T'<T$, with common state bound $M$ on $I\times[0,T']$. For $0<\epsilon<T'$, let $K=I\times[\epsilon,T']$. If $E=\{(x,t)\in K:|u(x,t)|>M\}$ had positive measure, then $E=\bigcup_{r\ge1}E_r$, where $E_r=\{(x,t)\in K:|u(x,t)|\ge M+1/r\}$. By countable subadditivity in [F3], some $E_r$ has positive measure. Since $|\mathcal U_m|\le M$ almost everywhere on $K$, it follows that $\|\mathcal U_m-u\|_{L^1(K)}\ge r^{-1}|E_r|>0$ for every $m$, contradicting strong $L^1$ convergence on $K$. Thus $|u|\le M$ almost everywhere on $K$. Taking $\epsilon=1/r$ for sufficiently large integers $r$ covers $I\times(0,T')$; any bounded interval is contained in a closed bounded one, so $u$ is locally essentially bounded up to $t=0$. [F3, given, algebra]

2.1 Fix $0<\epsilon<T'$ and a compact rectangle $K\subset\mathbb R\times[\epsilon,T']$. Enlarge its spatial interval by $1$; step 1.1 bounds $u$ there. The cutoff $v=u$ on this enlarged bounded rectangle and $v=0$ elsewhere is bounded and measurable, so [F3] makes $v\in L^1(\mathbb R^2)$. For all large $m$, $h_m<1$. By [F2], $\|u(\cdot+h_m,\cdot)-u\|_{L^1(K)}\to0$: the cutoff agrees with $u$ on $K$ and on $K+h_m$. Also $K+h_m$ is contained in one fixed compact enlargement $K'$ for all large $m$, so strong local convergence gives $\|\mathcal U_m(\cdot+h_m,\cdot)-u(\cdot+h_m,\cdot)\|_{L^1(K)}=\|\mathcal U_m-u\|_{L^1(K+h_m)}\le\|\mathcal U_m-u\|_{L^1(K')}\to0$. The equality follows by applying [F7] to the restriction of $\mathcal U_m-u$ to the compact set $K+h_m$. The triangle inequality gives $\mathcal U_m(\cdot+h_m,\cdot)\to u$ in $L^1(K)$. [A1, F2, F3, F7, given, step 1.1, algebra]

3.1 Let $K$ be as in step 2.1, and choose a common bound $M$ on the enlarged rectangle. The square $S=[-M,M]^2$ is a nonempty closed box, hence compact by [F4]. Continuity of $F$ and [F5] bound $F$ on $S$; [F6] makes it uniformly continuous there. Put $a_m=\mathcal U_m(x,t)$ and $b_m=\mathcal U_m(x+h_m,t)$. Steps 1.1–2.1 show both converge to $u$ in measure on $K$, and all three values lie in $[-M,M]$ almost everywhere. For $\delta>0$, the set where either input error is at least $\delta$ has measure at most $\delta^{-1}$ times the sum of the two $L^1$ errors. Since $K$ has finite measure by [F3], uniform continuity makes $|F(a_m,b_m)-F(u,u)|$ arbitrarily small in integral off this set, while boundedness of $F$ controls its integral on the set. Thus $F(a_m,b_m)\to F(u,u)=f(u)$ in $L^1(K)$. By [F1], $\mathcal Q_m\to f(u)$ in $L^1(K)$. [A1, F1, F3, F4, F5, F6, step 1.1, step 2.1, algebra]

4.1 On $I\times(0,\epsilon)$, for all sufficiently large $m$ we have $h_m<1$, so the local state bound on the interval enlarged by $1$ bounds both flux inputs uniformly in $m$; step 1.1 bounds $u$. Continuity of $F$ on the compact square $[-M,M]^2$ and continuity of $f$ on the compact interval $[-M,M]$ bound $\mathcal Q_m$ and $f(u)$ there by one constant. The integral of $|\mathcal Q_m-f(u)|$ over this strip is at most a constant times $\lambda_2(I\times(0,\epsilon))=|I|\epsilon$ by [F8]. Step 3.1 gives convergence on $I\times[\epsilon,T']$. Letting first $m\to\infty$ and then $\epsilon\downarrow0$ proves convergence on $I\times(0,T']$. [F1, F4, F5, F8, step 1.1, step 3.1, given, algebra] ∎
