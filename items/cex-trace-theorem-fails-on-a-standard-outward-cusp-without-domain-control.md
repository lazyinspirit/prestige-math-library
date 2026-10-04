---
id: cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control
kind: counterexample
title: "The trace estimate fails on an outward cusp above the critical sharpness"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, def-sobolev-space-wkp-and-its-norm, lem-classical-derivatives-are-weak-derivatives, thm-linear-change-of-variables-for-lebesgue-measure, def-surface-integral-on-a-compact-c-one-hypersurface, def-bounded-linear-operator, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Carlos Zuppa, A compact trace theorem for domains with external cusps, Revista de la Union Matematica Argentina 50 (2009), no. 1"
      url: "https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0041-69322009000100003"
      locator: "Abstract and Section 1 (Definition 1, Condition A1, Theorems 2 and 4, Corollary 5): weighted estimates on external cusps and compactness under the stated below-threshold Condition A1."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.I], printed pp. 288-290: the trace equivalence is stated for domains with uniformly Lipschitz local coordinate systems, the hypothesis that fails at an outward cusp."
    - title: "Piotr Hajlasz and Olli Martio, Traces of Sobolev functions on fractal type sets and characterization of extension domains, Journal of Functional Analysis 143 (1997), 221-246"
      url: "https://sites.pitt.edu/~hajlasz/OriginalPublications/HajlaszM-Traces-JFunctAnal-143-1997-221-246.pdf"
      locator: "Section 2 and the remarks on domains with the $A(c)$ property, printed pp. 224-229: traces on non-Lipschitz sets require additional structure beyond the Euclidean boundary measure."
---

## Statement refuted

Assume Countable Choice. Let $1\le p<\infty$, let $\alpha>p$, and put
$$\Omega_\alpha:=\{(x,y)\in\mathbb R^2:0<y<1,\ |x|<y^\alpha\},$$
a bounded open set with an outward cusp at the origin whose boundary consists
of the two $C^1$ arcs $x=\pm y^\alpha$ ($0<y<1$), the cusp point $(0,0)$, and the top segment
$y=1$, $|x|\le1$, and which carries finite surface measure. Then there is no
bounded linear operator $S:W^{1,p}(\Omega_\alpha)\to L^p(\partial\Omega_\alpha)$
that agrees with classical restriction on $C^1(\overline\Omega_\alpha)$: for
$\theta\in C_c^\infty(\mathbb R)$ with $\theta\equiv1$ on $[-1,1]$ and
$\theta\equiv0$ on $[2,\infty)$ and $u_\delta(x,y):=\theta(y/\delta)$ one has
$u_\delta\in W^{1,p}(\Omega_\alpha)$ with
$\|u_\delta\|_{W^{1,p}(\Omega_\alpha)}^p\le C\,\delta^{\alpha+1-p}$ and
$\|u_\delta|_{\partial\Omega_\alpha}\|_{L^p(\partial\Omega_\alpha)}^p\ge2\delta$,
so the ratio
$\|u_\delta|_{\partial\Omega_\alpha}\|/\|u_\delta\|_{W^{1,p}}$ diverges like
$\delta^{(p-\alpha)/p}\to\infty$ as $\delta\downarrow0$. Consequently the
hypothesis that $\Omega$ is a bounded $C^1$ domain in the uniform graph sense
of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] cannot be relaxed to
arbitrary bounded open sets whose boundary pieces are merely $C^1$ curves;
this witness refutes the unweighted estimate and asserts no weighted replacement theorem.

## Facts & Assumptions

**Given:** Countable Choice; $1\le p<\infty$; $\alpha>p$; the cusped domain $\Omega_\alpha$; a fixed $\theta\in C_c^\infty(\mathbb R)$ with $0\le\theta\le1$, $\theta\equiv1$ on $[-1,1]$ and $\theta\equiv0$ on $[2,\infty)$; and, for $0<\delta<\tfrac12$, the function $u_\delta(x,y):=\theta(y/\delta)$.

[F1] Classical derivatives of a smooth function are its weak derivatives; membership in $W^{1,p}$ follows when the function and these derivatives have finite $L^p$ norms, as checked below. ([[lem-classical-derivatives-are-weak-derivatives]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] Lebesgue measure is transformed by linear changes of variables, and the one-dimensional substitution rule computes $\int_0^{2\delta}2y^\alpha dy=2^{\alpha+2}\delta^{\alpha+1}/(\alpha+1)$. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

[F3] The surface integral on a compact $C^1$ face contained in a regular patch is given by the chart formula; for the regular $C^1$ arcs $y\mapsto(\pm y^\alpha,y)$ the surface measure is arclength, with density $\sqrt{1+\alpha^2y^{2\alpha-2}}$. ([[def-surface-integral-on-a-compact-c-one-hypersurface]])

[F4] A bounded linear operator $S$ satisfies $\|Su\|\le\|S\|\,\|u\|$ for all $u$ in its domain. ([[def-bounded-linear-operator]])

## Counterexample

1.1 The inside norm. The function $u_\delta$ is the restriction to $\Omega_\alpha$ of the $C^\infty(\mathbb R^2)$ function $(x,y)\mapsto\theta(y/\delta)$, whose classical derivatives are its weak derivatives on $\Omega_\alpha$ by [F1], with $\partial_xu_\delta=0$ and $\partial_yu_\delta=\delta^{-1}\theta'(y/\delta)$ by [F1]. Its support in $\Omega_\alpha$ lies in the strip $0<y<2\delta$, whose area is $\int_0^{2\delta}2y^\alpha dy=2^{\alpha+2}\delta^{\alpha+1}/(\alpha+1)$ by [F2]. Since $|u_\delta|\le1$ and $|\partial_yu_\delta|\le\delta^{-1}\|\theta'\|_\infty$, this gives $\|u_\delta\|_{L^p}^p\le C\delta^{\alpha+1}$ and $\|\partial_yu_\delta\|_{L^p}^p\le C\delta^{\alpha+1-p}$, hence $u_\delta\in W^{1,p}(\Omega_\alpha)$ and $\|u_\delta\|_{W^{1,p}(\Omega_\alpha)}^p\le C'\delta^{\alpha+1-p}$ for $0<\delta<\tfrac12$ and a constant independent of $\delta$. [F1, F2, algebra, given]

1.2 The boundary mass. Fix $0<\varepsilon<\delta$. On each compact regular subarc $\{(\pm y^\alpha,y):\varepsilon\le y\le\delta\}$ one has $u_\delta\equiv1$. The chart formula [F3] applies away from the cusp and gives length $\int_\varepsilon^\delta\sqrt{1+\alpha^2y^{2\alpha-2}}\,dy\ge\delta-\varepsilon$. Positivity of the boundary integral therefore gives its $p$-th power at least $2(\delta-\varepsilon)$ for every $\varepsilon>0$; letting $\varepsilon\downarrow0$ yields $2\delta$, without assigning a regular hypersurface chart at the cusp itself. Hence $\|u_\delta|_{\partial\Omega_\alpha}\|_{L^p(\partial\Omega_\alpha)}^p\ge2\delta$; the top segment contributes nothing because $u_\delta$ vanishes there for $\delta<\tfrac12$. [F3, algebra, given]

2.1 Matching bounds. On $0<y<2\delta<1$, the arclength density is at most $\sqrt{1+\alpha^2}$, and $|u_\delta|\le1$; outside these two arc portions the restriction vanishes. Thus $\|u_\delta|_{\partial\Omega_\alpha}\|_{L^p}^p\le4\sqrt{1+\alpha^2}\,\delta$. Since $\theta(1)=1$ and $\theta(2)=0$, its derivative is nonzero at some point of $(1,2)$; continuity supplies $1<a<b<2$ and $c_0>0$ with $|\theta'(s)|\ge c_0$ on $[a,b]$. Integrating over the strip $a\delta\le y\le b\delta$ gives $\|\partial_yu_\delta\|_{L^p}^p\ge2c_0^p\delta^{-p}\int_{a\delta}^{b\delta}y^\alpha\,dy=c_1\delta^{\alpha+1-p}$, where $c_1=2c_0^p(b^{\alpha+1}-a^{\alpha+1})/(\alpha+1)>0$. Together with steps 1.1 and 1.2 these estimates give $c\,\delta^{(p-\alpha)/p}\le\|u_\delta|_{\partial\Omega_\alpha}\|_{L^p}/\|u_\delta\|_{W^{1,p}}\le C\,\delta^{(p-\alpha)/p}$ for positive constants independent of $\delta$. [F1, F2, F3, step 1.1, step 1.2, algebra, given]

3.1 The ratio diverges and no bounded extension exists. Combining steps 1.1 and 1.2, the ratio of norms satisfies $\|u_\delta|_{\partial\Omega_\alpha}\|_{L^p}/\allowbreak\|u_\delta\|_{W^{1,p}}\ge c\,\delta^{1/p}\delta^{-(\alpha+1-p)/p}=c\,\delta^{(p-\alpha)/p}$, which diverges as $\delta\downarrow0$ because $\alpha>p$. If a bounded linear $S$ agreeing with classical restriction on $C^1(\overline\Omega_\alpha)$ existed, then $Su_\delta=u_\delta|_{\partial\Omega_\alpha}$ for each $\delta$ and [F4] would give the uniform bound $\|u_\delta|_{\partial\Omega_\alpha}\|\le\|S\|\,\|u_\delta\|_{W^{1,p}}$ for all $\delta$, contradicting the divergence. Therefore no such operator exists, and the uniform-graph hypothesis of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] cannot be replaced by mere $C^1$ regularity of the boundary arcs. [F4, step 1.1, step 1.2, step 2.1, algebra, given] ∎

## Source notes

Zuppa's Section 1 (Definition 1, Condition A1, Theorems 2 and 4) supplies external-cusp models, weighted estimates and a sufficient below-threshold condition for compact trace; the failure above the exponent used here is proved by the displayed concentrating family; Gagliardo's Teorema [1.I] (printed pp. 288-290) states the trace equivalence under uniformly Lipschitz local coordinate systems, the hypothesis that degenerates at the cusp; Hajlasz and Martio (printed pp. 224-229) record that traces on non-Lipschitz sets need structure beyond the Euclidean boundary measure. The concentrating family and its exponents are computed above and are the reason the failure is attributed to the geometry rather than to the measure.
