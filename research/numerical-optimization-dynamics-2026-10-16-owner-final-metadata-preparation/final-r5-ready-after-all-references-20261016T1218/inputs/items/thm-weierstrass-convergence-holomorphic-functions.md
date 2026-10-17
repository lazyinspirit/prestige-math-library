---
id: thm-weierstrass-convergence-holomorphic-functions
kind: theorem
title: "Locally uniform limits of holomorphic functions are holomorphic and their derivatives converge locally uniformly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-coordinate-isometry-and-topology-transport, thm-well-ordering-principle, lem-complex-conjugation-and-modulus-laws, lem-compactness-is-intrinsic, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, thm-uniform-limit-continuous-complex-functions, thm-uniform-limit-interchanges-complex-line-integrals, thm-goursat-triangle-theorem, thm-morera-triangle-theorem, lem-cauchy-estimates-on-concentric-subdiscs, def-oriented-complex-triangle-and-boundary, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: true
short: "Weierstrass convergence"
proof_strategy: direct
verification:
  repair: research/numerical-analysis-comprehensive-2026-10-16-owner-supplier-thm-weierstrass-convergence-holomorphic-functions-published-repair.json
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorems 5.2 and 5.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 2.4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.5"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let each $f_n:\Omega\to\mathbb C$ be holomorphic, and suppose $f_n\to f$ locally uniformly on $\Omega$. Then $f$ is holomorphic and

$$f_n^{(k)}\longrightarrow f^{(k)}$$

locally uniformly on $\Omega$ for every natural $k$, with $f^{(0)}=f$.

A locally uniform limit of holomorphic functions is holomorphic, and for every natural $k$ the $k$th derivatives converge locally uniformly to the $k$th derivative of the limit.

## Facts & Assumptions

**Given:** An open set $\Omega$, holomorphic functions $f_n:\Omega\to\mathbb C$, and locally uniform convergence $f_n\to f$. Here **locally uniform** means: for each $a\in\Omega$ there is an open $V$ with $a\in V\subseteq\Omega$ such that for every $\varepsilon>0$ there is a natural $N$ with $|f_n(z)-f(z)|<\varepsilon$ for every $z\in V$ and $n\ge N$. This definition does not presuppose continuity of the limit. Its equivalence to uniform convergence on every compact subset is proved below, rather than taken from a remark.

[L1] A uniform limit of continuous complex-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[L2] Uniform convergence of continuous integrands on a fixed rectifiable contour permits passage of the limit through the complex line integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L3] Every holomorphic function has zero integral around each contained filled triangle, including degenerate triangles ([[thm-goursat-triangle-theorem]]).

[L4] A continuous function on an open subset of $\mathbb C$ is holomorphic if and only if its integral around every contained filled triangle is zero ([[thm-morera-triangle-theorem]]).

[L5] If $0\le r<R<S$, $h$ is holomorphic on $D(a,S)$, $M$ bounds $|h|$ on $|\zeta-a|=R$, and $|z-a|\le r$, then $|h^{(k)}(z)|\le k!RM/(R-r)^{k+1}$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[L6] The boundary of a filled triangle is the union of its directed affine edge traces ([[def-oriented-complex-triangle-and-boundary]]).

[L7] Closed bounded subsets of Euclidean space, including $[0,1]$ and closed complex discs, are compact ([[thm-heine-borel-rn]]).

[L8] The continuous image of a compact metric space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L9] The coordinate bijection $\Phi(a+bi)=(a,b)$ is an isometry transporting open, closed and compact subsets ([[thm-complex-coordinate-isometry-and-topology-transport]]). Balls are open, closed balls are closed, and an open set contains a ball about each of its points ([[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]]).

[L10] If $K$ is compact in its induced metric and is covered by sets open in its ambient metric space, it is covered by finitely many members of that family, and this finite-subcover property conversely characterizes its compactness; the empty $K$ uses the empty family ([[lem-compactness-is-intrinsic]], claim 2).

[L11] Every nonempty subset of the natural numbers has a least element ([[thm-well-ordering-principle]]).

[L12] The complex modulus satisfies the triangle inequality, hence $\bigl||z-a|-|w-a|\bigr|\le|z-w|$ by applying it twice ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Suppose convergence is locally uniform in the stated sense, and let $K\subseteq\Omega$ be compact. Let $\mathcal V$ be the family of all open $V\subseteq\Omega$ on which convergence is uniform. Local uniformity says this family covers $\Omega$, without selecting a neighbourhood for every point. If $K$ is nonempty, [L10] supplies a finite list $V_1,\ldots,V_q$ covering $K$. For fixed $\varepsilon>0$, let $N_j$ be the least natural threshold valid for $\varepsilon$ on $V_j$, which exists by uniform convergence and [L11]. The natural $N=N_1+\cdots+N_q$ is at least each $N_j$, so $n\ge N$ gives $|f_n-f|<\varepsilon$ on every $V_j$ and hence on $K$. For $K=\varnothing$ the conclusion is vacuous. Thus convergence is uniform on every compact subset. [given, L10, L11, construct]

1.2 Conversely suppose convergence is uniform on every compact subset, and fix $a\in\Omega$. By [L9] choose $s>0$ with $D(a,s)\subseteq\Omega$ and let $r=s/2$. The closed disc $\overline D(a,r)$ is closed and bounded in the complex metric; by [L9] its coordinate image is closed and bounded in $\mathbb R^2$, hence compact by [L7], and [L9] transports compactness back. Convergence is therefore uniform on that closed disc and on its open subdisc $D(a,r)$, an open neighbourhood of $a$ by [L9]. This proves the converse and fixes the local/compact equivalence for this proof. [L7, L9, choose]

2.1 If $\Omega$ is nonempty, fix $a\in\Omega$ and choose $s>0$ with $D(a,s)\subseteq\Omega$ and put $S=s/2>0$, so $\overline D(a,S)\subseteq\Omega$; [L7] and [L9] make this closed disc compact, and step 1.1 makes convergence uniform there, and [L1] makes $f$ continuous on it, so $f$ is continuous throughout $\Omega$. [given, step 1.1, L1, L7, L9]

2.2 Let $\Delta\subseteq\Omega$ be any filled triangle. By [L6], its boundary trace is the union of three affine edge images of $[0,1]$, each compact by [L7] and [L8]. An ambient open cover of this union covers each edge, so [L10] supplies a finite subcover for each of the three edges; concatenating these three finite lists covers the union, and the converse in [L10] proves its compactness. Step 1.1 therefore makes convergence uniform on the trace, [L3] makes every $\int_{\partial\Delta}f_n$ zero, and [L2] gives $\int_{\partial\Delta}f=0$. [given, step 1.1, L2, L3, L6, L7, L8, L9, L10]

3.1 The continuity from step 2.1 and the vanishing triangle integrals from step 2.2 satisfy [L4], so $f$ is holomorphic throughout $\Omega$; on the empty open set this conclusion is vacuous. [step 2.1, step 2.2, L4]

4.1 Fix a natural derivative order $k$ and a point $a\in\Omega$, and choose radii $0<r<R<S$ with $\overline D(a,S)\subseteq\Omega$; by step 3.1 every difference $h_n:=f_n-f$ is holomorphic on $D(a,S)$. [step 3.1, choose]

5.1 Given $\varepsilon>0$, the circle $|\zeta-a|=R$ is closed by the reverse triangle inequality and bounded, hence compact by [L7] and [L9]. Step 1.1 gives uniform convergence there and a natural $N$ such that $|h_n(\zeta)|<\varepsilon(R-r)^{k+1}/(2k!R)$ for $n\ge N$; applying [L5] with $M=\varepsilon(R-r)^{k+1}/(2k!R)$ then gives $|f_n^{(k)}(z)-f^{(k)}(z)|\le\varepsilon/2<\varepsilon$ for every $|z-a|\le r$. [step 1.1, step 4.1, L5, L7, L9, L12]

6.1 Step 5.1 proves uniform convergence of the $k$th derivatives on a neighbourhood of every point, hence locally uniform convergence by the explicit definition in the given data and [L9]; when $k=0$ it recovers the original convergence, and zero or eventually constant sequences require no exception. [given, step 5.1, L9] ∎
