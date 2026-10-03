---
id: thm-fatou-boundary-theorem-analytic-hardy-spaces
kind: theorem
title: "Fatou's boundary theorem for analytic Hardy spaces"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-axiom-of-choice, def-countable-choice, def-analytic-hardy-space-disc, def-harmonic-hardy-class-disc, lem-hardy-radial-means-are-monotone, thm-riesz-factorization-hardy-space, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, thm-hardy-zero-set-blaschke-condition, thm-harmonic-hardy-representation-p-greater-one, thm-harmonic-hardy-one-measure-representation, thm-poisson-extension-lp-contraction-and-norm-limit, thm-fatou-nontangential-boundary-theorem-harmonic, cor-bounded-harmonic-functions-have-nontangential-limits, def-circle-maximal-function-and-nontangential-region, thm-dominated-convergence, thm-complex-holder-minkowski-and-the-quotient-norm, cor-lyapunov-moment-inequality-on-a-probability-space, thm-jensens-integral-inequality, thm-holomorphic-primitive-on-star-shaped-domain, def-complex-exponential, thm-c2-holomorphic-components-are-harmonic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7 and §5.9"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Identification of $H^p(\\mathbb D)$ with $H^p(\\mathbb T)$ and Corollaries 5.12-5.26, printed pp. 29-42: $f_r\\to f^*$ a.e. and in $L^p$, $f=P[f^*]$, and the boundary function determines $f$."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §3"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 59-62: the analytic Hardy-space boundary theorem, with the $p<1$ case through the root trick."
---

## Statement

Assume the Axiom of Choice. Let $0<p\le\infty$ and $f\in H^p(\mathbb D)$ (the
zero function is allowed in (a)–(c)).

(a) For $m$-almost every $\zeta\in\mathbb T$ the nontangential limit
$f^*(\zeta):=\lim_{z\to\zeta,\,z\in\Gamma_A(\zeta)}f(z)$ exists and is finite for
every $A>1$, and $f^*\in L^p(\mathbb T,m)$ with
$\|f^*\|_p\le\|f\|_{H^p}$.

(b) If $p<\infty$ then $\|f_r-f^*\|_p\to0$ as $r\uparrow1$ and
$\|f^*\|_p=\|f\|_{H^p}$; for $p=\infty$, $\|f^*\|_\infty=\|f\|_\infty$ and the
radial functions converge to $f^*$ weak-star against $L^1(\mathbb T,m)$.

(c) If $1\le p\le\infty$ then $f=P[f^*]$, the Poisson integral of its boundary
function; for $1<p\le\infty$ this is the published representation theorem for
harmonic Hardy classes, and for $p=1$ it says that the analytic $h^1$
representing measure of $f$ is the absolutely continuous measure $f^*m$,
proved here without the F. and M. Riesz theorem, from the a.e. limits and the
$L^1$ convergence in (b).

## Facts & Assumptions

**Given:** The Axiom of Choice, hence countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]); an exponent $0<p\le\infty$; a function $f\in H^p(\mathbb D)$; and, in the case $0<p\le1$, its Riesz factorization $f=Bg$ with zero-free $g$.

[L1] $H^p(\mathbb D)$ consists of the holomorphic $f$ with finite $\|f\|_{H^p}=\sup_r\|f_r\|_{L^p}$; a holomorphic function is complex harmonic, and $\|f\|_{H^p}=\|f\|_{h^p}$ for the harmonic Hardy class of [[def-harmonic-hardy-class-disc]] ([[def-analytic-hardy-space-disc]], [[thm-c2-holomorphic-components-are-harmonic]], [[def-harmonic-hardy-class-disc]]).

[L2] For $1<p\le\infty$ every complex harmonic $u\in h^p(\mathbb D)$ is $u=P[u_*]$ for a unique $u_*\in L^p(\mathbb T,m)$ with $\|u\|_{h^p}=\|u_*\|_p$; for $p<\infty$, $\|(P[u_*])_r-u_*\|_p\to0$, and for $p=\infty$ the radial functions converge weak-star to $u_*$ ([[thm-harmonic-hardy-representation-p-greater-one]]).

[L3] Every $u\in h^1(\mathbb D)$ is $u=P[\nu]$ for a unique finite regular complex Borel measure $\nu$ with $\|u\|_{h^1}=|\nu|(\mathbb T)$ and $(P[\nu])_rm\overset{*}{\rightharpoonup}\nu$ ([[thm-harmonic-hardy-one-measure-representation]]).

[L4] For $f_0\in L^1(\mathbb T,m)$, the Poisson integral $P[f_0]$ has nontangential limit $f_0(\zeta)$ at $m$-almost every $\zeta$, and $\|(P[f_0])_r-f_0\|_1\to0$ ([[thm-fatou-nontangential-boundary-theorem-harmonic]], [[thm-poisson-extension-lp-contraction-and-norm-limit]]).

[L5] A bounded complex harmonic function $u$ on $\mathbb D$ has a unique representation $u=P[u_*]$ with $u_*\in L^\infty$, $\|u\|_{h^\infty}=\|u_*\|_\infty$, and $u$ has nontangential limit $u_*(\zeta)$ at $m$-almost every $\zeta$ ([[cor-bounded-harmonic-functions-have-nontangential-limits]]).

[L6] Riesz factorization: for $0<p<\infty$ and nonzero $f\in H^p$, writing $f=Bg$ with $B$ the Blaschke product of the zeros of $f$ gives a zero-free $g\in H^p$ with $\|g\|_{H^p}=\|f\|_{H^p}$ ([[thm-riesz-factorization-hardy-space]]).

[L7] A Blaschke product $B$ has finite nontangential limits $B^*(\zeta)$ at $m$-almost every $\zeta$, and $|B^*|=1$ $m$-almost everywhere ([[thm-blaschke-product-boundary-values-and-zeros]], [[def-blaschke-product]], [[thm-hardy-zero-set-blaschke-condition]]).

[L8] On the star-shaped domain $\mathbb D$ every holomorphic function has a primitive; for a zero-free holomorphic $g$ and an integer $m\ge1$, $G:=\exp\bigl(\frac1m\int_0^z g'/g\bigr)$ is a holomorphic $m$-th root of $g$ (up to a unimodular constant, absorbed into $G$), so $G^m=g$, and $|G|^{mp}=|g|^p$ ([[thm-holomorphic-primitive-on-star-shaped-domain]], [[def-complex-exponential]]).

[L9] On the probability space $(\mathbb T,m)$: $\|h\|_{L^p}\le\|h\|_{L^{mp}}$ for $m\ge1$; for $A,B\in\mathbb C$ and $m\ge1$, $|A^m-B^m|\le m(|A|^{m-1}+|B|^{m-1})|A-B|$, and Hölder together with the Lyapunov monotonicity of $L^p$ norms gives $\|G_r^m-G^{*m}\|_{L^{mp}}\le m(\|G_r\|_{L^{mp}}^{m-1}+\|G^*\|_{L^{mp}}^{m-1})\|G_r-G^*\|_{L^{mp}}$; dominated convergence applies to sequences bounded by an $L^1$ function ([[cor-lyapunov-moment-inequality-on-a-probability-space]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-dominated-convergence]]).



## Proof

**Proof technique:** cases.

1.1 Case $1<p<\infty$: representation and boundary function. By [L1], $f$ is complex harmonic with $f\in h^p(\mathbb D)$ and $\|f\|_{h^p}=\|f\|_{H^p}$. By [L2] there is a unique $f^*\in L^p(\mathbb T,m)$ with $f=P[f^*]$, $\|f^*\|_p=\|f\|_{H^p}$ and $\|f_r-f^*\|_p\to0$. By the harmonic Fatou theorem [L4] applied to the $L^1$ datum $f^*$, $P[f^*](z)\to f^*(\zeta)$ within every fixed $\Gamma_A(\zeta)$ at $m$-almost every $\zeta$. This gives (a), (b) and (c) in this case. [given, L1, L2, L4]

1.2 Case $p=\infty$: representation and limits. By [L1], $f$ is bounded complex harmonic, so [L5] gives a unique $f^*\in L^\infty$ with $f=P[f^*]$, $\|f^*\|_\infty=\|f\|_{h^\infty}=\|f\|_{H^\infty}$, and nontangential limits $f^*$ a.e.; the weak-star convergence of the radial functions is [L2] at $p=\infty$. This gives (a), (b) and (c) in this case. [given, L1, L2, L5]

1.3 Case $0<p\le1$: setting up the root. Assume $f\not\equiv0$ (the zero function is trivial), and write $f=Bg$ as in [L6], so $g$ is zero-free holomorphic with $g\in H^p$ and $\|g\|_{H^p}=\|f\|_{H^p}$. Choose an integer $m\ge2$ with $mp>1$ and let $G$ be a holomorphic $m$-th root of $g$ as in [L8], so $G^m=g$ and $|G_r|^{mp}=|g_r|^p$ for every $r$. [given, L6, L8]

2.1 The case $1<mp<\infty$ applied to $G$. Since $\int_{\mathbb T}|G(r\zeta)|^{mp}dm(\zeta)=\int_{\mathbb T}|g(r\zeta)|^p\,dm(\zeta)\le\|g\|_{H^p}^p$ for every $r$, we have $G\in H^{mp}(\mathbb D)$ with $\|G\|_{H^{mp}}^{mp}=\|g\|_{H^p}^p$. As $mp>1$, step 1.1 applied to $G$ gives a boundary function $G^*\in L^{mp}(\mathbb T,m)$ with $G=P[G^*]$, $\|G^*\|_{mp}=\|G\|_{H^{mp}}$, nontangential limits $G^*$ a.e., and $\|G_r-G^*\|_{mp}\to0$. [step 1.1, step 1.3, L8, algebra]

3.1 The boundary function of $f$ and its norm. Put $f^*:=B^*(G^*)^m$, defined a.e.; by [L7] $|B^*|=1$ a.e., so $|f^*|=|G^*|^m\in L^p$ with $\int_{\mathbb T}|f^*|^pdm=\int_{\mathbb T}|G^*|^{mp}dm=\|G\|_{H^{mp}}^{mp}=\|g\|_{H^p}^p=\|f\|_{H^p}^p$. Since $B$ and $G$ have nontangential limits at $m$-almost every $\zeta$, so does $f=B\cdot G^m$, and its limit is $B^*(\zeta)G^*(\zeta)^m=f^*(\zeta)$. This gives (a) in this case, with equality in the norm bound. [step 1.3, step 2.1, L7, algebra]

4.1 $L^p$ convergence of the radial functions. Write $f_r-f^*=B_r(G_r^m-G^{*m})+(B_r-B^*)G^{*m}$. For the second term, $(B_r-B^*)G^{*m}\to0$ a.e. and is bounded in modulus by $2|G^*|^m\in L^p$, so its $L^p$ norm tends to $0$ by dominated convergence [L9]. For the first term, $|B_r|\le1$ and $\|h\|_{L^p}\le\|h\|_{L^{mp}}$ give $\|B_r(G_r^m-G^{*m})\|_p\le\|G_r^m-G^{*m}\|_{mp}$, which tends to $0$ by the estimate and Hölder bound of [L9] together with $\|G_r-G^*\|_{mp}\to0$ from step 2.1. Hence $\|f_r-f^*\|_p\to0$, and with step 3.1 this gives (b) in this case. [step 2.1, step 3.1, L9, algebra]

5.1 Case $p=1$ and the Cauchy representation (c). Let $f\in H^1(\mathbb D)$. Steps 1.3, 2.1, 3.1 and 4.1 apply with $p=1$ and give $f^*\in L^1$, $\|f^*\|_1=\|f\|_{H^1}$, a.e. limits and $\|f_r-f^*\|_1\to0$. By [L3] there is a unique finite regular complex Borel measure $\nu$ on $\mathbb T$ with $f=P[\nu]$ and $f_rm\overset{*}{\rightharpoonup}\nu$; then for every $g\in C(\mathbb T)$ one has $\int_{\mathbb T}g\,d\nu=\lim_r\int_{\mathbb T}g\,f_r\,dm=\int_{\mathbb T}g\,f^*dm$, because $\|f_r-f^*\|_1\to0$ and $g$ is bounded; hence $\nu=f^*m$ and $f=P[f^*]$. This proves (c) for $p=1$ without using the F. and M. Riesz theorem. [step 4.1, L3, algebra]

6.1 Cases $1<p\le\infty$ for (c). For $1<p\le\infty$, (c) is exactly the representation clause of [L2] already invoked in steps 1.1 and 1.2. Together with step 5.1 this covers all $1\le p\le\infty$. [step 1.1, step 1.2, step 5.1, L2]

7.1 Assembly. The case $1<p<\infty$ is step 1.1, the case $p=\infty$ is step 1.2, and the case $0<p\le1$ is steps 1.3, 2.1, 3.1 and 4.1 with the additional representation statement for $p=1$ in step 5.1; step 6.1 covers the remaining clause of (c). All asserted clauses (a), (b), (c) are thereby proved, and the Axiom of Choice is used exactly through the representation and Fatou theorems [L2], [L3] and [L5] cited in the dependency list. [step 1.1, step 1.2, step 4.1, step 5.1, step 6.1] ∎
