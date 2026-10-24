---
id: thm-dirichlet-problem-on-a-ball-by-the-poisson-integral
kind: theorem
title: Continuous Dirichlet problem on a ball
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-laplacian-of-a-c2-function, def-countable-choice, def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, def-surface-integral-on-a-compact-c-one-hypersurface, lem-ball-poisson-kernel-is-positive-and-normalised, lem-euclidean-balls-are-bounded-c-one-domains, lem-poisson-kernel-boundary-cap-and-complement-estimate, lem-sphere-and-ball-measures-scale, cor-euclidean-closed-balls-and-spheres-are-compact, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, thm-extreme-value-metric, thm-poisson-kernel-for-a-ball-in-rn, thm-real-power-continuity-and-derivatives, thm-weak-maximum-principle-for-the-laplacian]
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 48–50, Main Theorem and alternative cap/complement proof"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4.1, printed pp. 33–34, Theorem 2.13"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed pp. 71–72, Theorem 4.24"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.6, printed pp. 133–134, Theorem 5.25"
verification:
  audited: 2026-10-02
---

## Statement

Assume Countable Choice and $n\ge3$. For every real or complex $g\in C(\partial B_R(a))$ the integral
$$U_g(x)=\int_{\partial B_R(a)}P_{R,a}(x,y)g(y)\,dS_y$$
is absolutely convergent, smooth and harmonic on $B_R(a)$, and $U_g$ extends continuously to $\overline{B_R(a)}$ with boundary trace $g$. It is the unique function in $C^2(B_R(a))\cap C(\overline{B_R(a)})$ that is harmonic on $B_R(a)$ and equals $g$ on $\partial B_R(a)$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, and a complex-valued datum $g\in C(\partial B_R(a))$.

[F1] For $x\in B_R(a)$, $y\in\partial B_R(a)$ the kernel is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$, positive, continuous on $B_R(a)\times\partial B_R(a)$, with $\int_{\partial B_R(a)}P_{R,a}(x,y)\,dS_y=1$ ([[thm-poisson-kernel-for-a-ball-in-rn]], [[lem-ball-poisson-kernel-is-positive-and-normalised]]).

[F2] Under $|x-p|<\delta/2$ one has $|U_g(x)-g(p)|\le\omega_{g,p}(\delta)+2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty(R^2-|x-a|^2)$, and $U_g(x)\to g(p)$ as $x\to p$ from inside the ball ([[lem-poisson-kernel-boundary-cap-and-complement-estimate]]).

[F3] If $\Omega$ is bounded, nonempty and open and real $u\in C^2(\Omega)\cap C(\overline\Omega)$ has $\Delta u\ge0$, then $\max_{\overline\Omega}u=\max_{\partial\Omega}u$ ([[thm-weak-maximum-principle-for-the-laplacian]]); $B_R(a)$ is bounded, open and nonempty ([[lem-euclidean-balls-are-bounded-c-one-domains]]).

[F4] On a measure space $(X,\mu)$ and an open interval $I$, suppose $f:X\times I\to\mathbb C$ has integrable $x$-slices for every $t\in I$, is differentiable in $t$ outside a fixed measurable null set, has measurable derivative slices (extended by zero where undefined), and satisfies $|\partial_tf(x,t)|\le G(x)$ for all $t$ outside a fixed null set, with $G\ge0$ measurable and $\int G\,d\mu<\infty$. Then $\frac{d}{dt}\int f(x,t)\,d\mu(x)=\int\partial_tf(x,t)\,d\mu(x)$ ([[thm-differentiation-under-the-integral-sign]]).

[F5] The surface integral on the compact sphere is defined by chart integration, is additive over Borel partitions and monotone, bounded Borel integrands over finite measure have finite integrals, and dominated convergence applies to a pointwise convergent dominated family ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-sphere-and-ball-measures-scale]], [[thm-dominated-convergence]]).

[F6] Calculus interface: $C^k$ maps on Euclidean domains are closed under sums, products and composition; $(t^\alpha)'=\alpha t^{\alpha-1}$ for $t>0$; the chain rule and product rule hold; the Laplacian is $\Delta f=\sum_i\partial_i\partial_if$, and multi-indices, $D^\alpha$ and $C^k$ are as fixed in the notation item ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-directional-and-partial-derivatives]], [[def-laplacian-of-a-c2-function]]).

[F7] Compact subsets of Euclidean space are closed and bounded, closed bounded Euclidean subsets are compact, and continuous real-valued functions on nonempty compact metric spaces attain their extrema. Hence for any nonempty compact $K\subset B_R(a)$ the product $K\times\partial B_R(a)$ is closed and bounded in $\mathbb R^{2n}$ and therefore compact; the continuous functions $(x,y)\mapsto|x-y|$ and $(x,y)\mapsto|D^\alpha_xP(x,y)|$ attain their extrema there. Also $\partial B_R(a)$ is compact and nonempty ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[thm-extreme-value-metric]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F8] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F8]. Fix $x_0\in B_R(a)$. By [F1] and [F7], $y\mapsto P_{R,a}(x_0,y)$ is continuous on the compact sphere, hence bounded, and $\lVert g\rVert_\infty<+\infty$; the sphere has finite surface measure by [F5], so $|P_{R,a}(x_0,\cdot)g|\le\lVert g\rVert_\infty\sup_yP_{R,a}(x_0,y)$ is integrable and $U_g(x_0)$ is absolutely convergent. Moreover $\lVert U_g\rVert_\infty\le\lVert g\rVert_\infty$ on $B_R(a)$ by [F1] and [F5]. [given, F1, F5, F7, F8]

1.2 Smoothness of the kernel and of the parametrised integrals. The map $(x,y)\mapsto|x-y|^2=\sum_i(x_i-y_i)^2$ is a polynomial, hence $C^\infty$ on $\mathbb R^n\times\mathbb R^n$, and it is strictly positive on the set where $x\ne y$; composing with $t\mapsto t^{-n/2}$, which is $C^\infty$ on $(0,\infty)$ by [F6], and multiplying by the polynomial $R^2-|x-a|^2$ shows that $P$ is $C^\infty$ on its domain by [F6]. Consequently for every multi-index $\alpha$ the function $(x,y)\mapsto D^\alpha_xP(x,y)$ is continuous there, and for every nonempty compact $K\subset B_R(a)$ the distance $d_K:=\min\{|x-y|:x\in K,\ y\in\partial B_R(a)\}$ is positive and $M_{\alpha,K}:=\sup_{K\times\partial B_R(a)}|D^\alpha_xP|<+\infty$, by [F7] and [F6] applied to the continuous function $(x,y)\mapsto|x-y|$ on the compact set $K\times\partial B_R(a)$. [given, F6, F7]

1.3 The kernel is harmonic in the interior variable. Fix $y\in\partial B_R(a)$ and $x\in B_R(a)$, put $m(x):=R^2-|x-a|^2$ and $\rho(x):=|x-y|>0$. Direct differentiation gives $\partial_im=-2(x_i-a_i)$, $\Delta m=-2n$, $\partial_i\rho=(x_i-y_i)/\rho$, and for a $C^2$ radial profile $q$ the formulas $\partial_i(q\circ\rho)=q'(\rho)(x_i-y_i)/\rho$ and $\Delta(q\circ\rho)=q''(\rho)+(n-1)q'(\rho)/\rho$; with $q(\rho)=\rho^{-n}$ this gives $\nabla(\rho^{-n})=-n\rho^{-n-2}(x-y)$ and $\Delta(\rho^{-n})=2n\rho^{-n-2}$ by [F6]. Hence $\Delta(m\rho^{-n})=\Delta m\cdot\rho^{-n}+2\nabla m\cdot\nabla(\rho^{-n})+m\Delta(\rho^{-n})=-2n\rho^{-n}+4n\,(x-a)\cdot(x-y)\,\rho^{-n-2}+2n\,(R^2-|x-a|^2)\,\rho^{-n-2}$, and the identity $|x-y|^2=|x-a|^2-2(x-a)\cdot(y-a)+R^2$ shows that the last two terms equal $2n\rho^{-n}$, so $\Delta(m\rho^{-n})=0$. Since $P_{R,a}(x,y)=m(x)\rho(x)^{-n}/(R\omega_{n-1})$, we get $\Delta_xP_{R,a}(x,y)=0$ for all $x\in B_R(a)$, $y\in\partial B_R(a)$. [given, F1, F6, algebra]

2.1 Higher derivatives under the integral. Induct on the length of an ordered word of coordinate derivatives. The empty word gives the defining integral for $U_g$. Suppose a word gives $V(x)=\int Q(x,y)g(y)\,dS_y$, where $Q$ is the same ordered derivative of $P$. Fix $x_0$ and a closed ball $K$ with $x_0\in\operatorname{int}K$ and $K\subset B_R(a)$. By step 1.2, both $Q$ and $\partial_iQ$ are continuous and bounded on $K\times\partial B_R(a)$. For $x=x_0+te_i$ on a sufficiently small open interval, each slice $Q(x,\cdot)g$ is Borel and integrable, and its $t$-derivative is Borel and bounded by $\sup_{K\times\partial B_R(a)}|\partial_iQ|\,\|g\|_\infty$, an integrable constant by [F5]. Thus all hypotheses of [F4] hold, with empty exceptional set, and $\partial_iV(x_0)=\int\partial_iQ(x_0,y)g(y)\,dS_y$. The integral expressions for both $V$ and this derivative are continuous near $x_0$ by dominated convergence [F5], using the respective bounded continuous kernels on $K$. This proves existence and continuity for every ordered derivative, hence $U_g\in C^\infty$ under [F6]; choosing the canonical word for a multi-index gives $D^\alpha U_g(x)=\int D^\alpha_xP(x,y)g(y)\,dS_y$. No interchange of derivative order is required. [step 1.2, F4, F5, F6, induction]

3.1 $U_g$ is smooth and harmonic. Step 2.1 with $\alpha=0$ gives $C^\infty$, and for $|\alpha|=2$ it gives $\Delta U_g(x)=\sum_i\int\partial_i\partial_iP_{R,a}(x,y)g(y)\,dS_y=\int\Delta_xP_{R,a}(x,y)g(y)\,dS_y$ by [F5] and the Laplacian definition of [F6]; step 1.3 makes every value of $\Delta_xP_{R,a}$ vanish, so $\Delta U_g=0$ on $B_R(a)$ and $U_g$ is smooth harmonic. [step 1.3, step 2.1, F5, F6, algebra]

3.2 Boundary trace and continuity on the closed ball. Interior continuity holds by step 2.1 with $\alpha=0$. Define $\widetilde U:=U_g$ on $B_R(a)$ and $\widetilde U:=g$ on $\partial B_R(a)$. At a boundary point $p$, [F2] gives $U_g(x)\to g(p)=\widetilde U(p)$ along every interior approach, and $g$ is continuous on the sphere by hypothesis; hence $\widetilde U$ is continuous at every point of $\overline{B_R(a)}$ and $U_g$ extends continuously to the closed ball with trace $g$. [step 2.1, F2]

4.1 Uniqueness. Let $v\in C^2(B_R(a))\cap C(\overline{B_R(a)})$ be harmonic on $B_R(a)$ with $v=g$ on $\partial B_R(a)$, and put $w:=v-\widetilde U$, which is continuous on the closure, $C^2$ inside and harmonic inside by step 3.1. Apply [F3] to $\mathrm{Re}\,w$ and to $-\mathrm{Re}\,w$, and to $\mathrm{Im}\,w$ and $-\mathrm{Im}\,w$: on the boundary all four functions vanish, so their maxima over $\overline{B_R(a)}$ are zero. Hence $w\equiv0$ and $v=U_g$. [step 3.1, step 3.2, F3, cases]

5.1 Steps 1.1, 3.1 and 3.2 show that $U_g$ is absolutely convergent, smooth harmonic and continuously extendible with trace $g$, and step 4.1 shows that every such classical solution equals $U_g$; this is exactly the assertion. The boundary convergence was obtained from the cap/complement estimate [F2], which depends only on the kernel formula, its positivity and its unit mass, so the later uniform-radial corollary is not presupposed. [step 1.1, step 3.1, step 3.2, step 4.1] ∎
