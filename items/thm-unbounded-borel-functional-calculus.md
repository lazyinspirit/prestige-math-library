---
id: thm-unbounded-borel-functional-calculus
kind: theorem
title: "Unbounded Borel functional calculus: domains, products, spectral mapping"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-projection-valued-measure, thm-dominated-convergence, def-axiom-of-choice, def-orthogonality-and-orthogonal-complement]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 3.2 and Section 3.3, Theorem 3.17 and Problem 3.21, pp.104-119"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Theorem 6.38 and Remark 6.42, Sec. 6.4"
---

## Statement

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator with spectral
projection valued measure $E$ on $\mathbb R$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]) and let
$f,g:\mathbb R\to\mathbb C$ be Borel. Then:

1. $f(T)^*=\overline f(T)$;
2. $f(T)g(T)$ has domain $D(g(T))\cap D((fg)(T))$ and equals the restriction of
   $(fg)(T)$ to that domain, and its closure is $(fg)(T)$;
3. on $D(f(T))\cap D(g(T))$ the sum $f(T)+g(T)$ equals the restriction of
   $(f+g)(T)$, and the closure of $f(T)+g(T)$ is $(f+g)(T)$;
4. the spectrum of $f(T)$ is the essential range
   $\{z\in\mathbb C:E(f^{-1}(B_\varepsilon(z)))\ne0$ for every
   $\varepsilon>0\}$ of $f$ with respect to $E$;
5. if $f$ is continuous then that essential range is the closure of
   $f(\sigma(T))$, with the closure redundant when $f(\sigma(T))$ is closed.

## Facts & Assumptions

[A1] $f(T)$ has domain $D_f=\{x:\int|f|^2dE_x<\infty\}$, is closed, and $\|f(T)x\|^2=\int|f|^2dE_x$, $(f(T))^*=\overline f(T)$ with $D_{\overline f}=D_f$; for bounded Borel $h$ one has $dE_{h(T)x}=|h|^2dE_x$ and $h(T)=h(E)$ commutes with every $E(B)$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[def-unbounded-integral-against-a-pvm]]).

[A2] Truncations: for Borel $u$ and $x\in D_u$ one has $u(T)x=\lim_m u_m(T)x$ with $u_m=u\mathbf 1_{\{|u|\le m\}}$, and if bounded Borel $g_n$ satisfy $|g_n|\le C|u|$ and $g_n\to u$ pointwise then $g_n(T)x\to u(T)x$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint $T$ with spectral PVM $E$ and Borel functions $f,g$.

1.1 The identity $dE_{g(T)x}=|g|^2dE_x$ holds for every $x\in D_g$: truncate $g$ and use [A1] for bounded $g_m$ together with $g_m(T)x\to g(T)x$ and $E(B)$ bounded, taking limits of $\|E(B)g_m(T)x\|^2=\int_B|g_m|^2dE_x$ and using monotone convergence. [A1, A2]

1.2 Sums: for $x\in D_f\cap D_g$ the equality $f(T)x+g(T)x=(f+g)(T)x$ follows from $f_m(T)x+g_m(T)x=(f_m+g_m)(T)x$ and [A2], since $|f_m+g_m-(f+g)|\le|f_m-f|+|g_m-g|\to0$ dominated by $2(|f|+|g|)$; more precisely $f_m+g_m\to f+g$ pointwise and $|f_m+g_m|\le|f|+|g|$, and $\int(|f|+|g|)^2dE_x<\infty$. Hence $f(T)+g(T)$ is dense, its closure is contained in the closed $(f+g)(T)$ (which extends it), and conversely for $x\in D_{f+g}$ the approximants $x_m=E(\{|f|\le m,|g|\le m\})x$ satisfy $f(T)x_m+g(T)x_m=(f+g)(T)x_m\to(f+g)(T)x$, so the closure is $(f+g)(T)$. [A1, A2, given]

2.1 $D(f(T)g(T))=D_g\cap D_{fg}$ by the definition of composition and step 1.1. [A1, step 1.1]

3.1 For $x\in D_g\cap D_{fg}$ the value agrees: $f(T)g(T)x=\lim_mf_m(T)g(T)x=\lim_m(f_mg)(T)x=(fg)(T)x$, first by [A2] applied to $f$ at the vector $g(T)x\in D_f$, then by [A1] for the bounded $f_m$, and finally by [A2] applied to $fg$ at $x$. [A2, step 2.1]

4.1 $(fg)(T)$ is closed by [A1] and extends $f(T)g(T)$ by steps 2.1 and 3.1, so $\operatorname{cl}(f(T)g(T))\subseteq(fg)(T)$. Conversely, for $x\in D_{fg}$ the vectors $x_m=E(\{|fg|\le m\})x$ lie in $D_g\cap D_{fg}$ and $f(T)g(T)x_m=(fg)(T)x_m\to(fg)(T)x$, so $x$ lies in the domain of the closure and $(fg)(T)\subseteq\operatorname{cl}(f(T)g(T))$. [A1, step 2.1, step 3.1]

5.1 Spectrum. If $E(f^{-1}(B_\varepsilon(z)))=0$ for some $\varepsilon>0$, then $|f-z|\ge\varepsilon$ off an $E$-null set; the bounded function $w=\mathbf 1_{\{|f-z|\ge\varepsilon\}}(f-z)^{-1}$ satisfies $w(f-z)=1$ $E$-a.e., so by steps 1.2 and 2.1 the operators $w(T)$ and $(f-z)(T)$ are mutually inverse bounded operators and $z\in\rho(f(T))$. [A1, step 2.1, step 4.1]

6.1 Conversely if $E(f^{-1}(B_\varepsilon(z)))\ne0$ for every $\varepsilon$, choose a unit vector $x_\varepsilon=E(f^{-1}(B_\varepsilon(z)))x_\varepsilon$ (possible because the projection is nonzero) for each $\varepsilon$; then $\|(f(T)-z)x_\varepsilon\|^2=\int_{f^{-1}(B_\varepsilon(z))}|f-z|^2dE_x\le\varepsilon^2$, so $(f(T)-z)$ has no bounded inverse and $z\in\sigma(f(T))$. [A1, step 5.1]

7.1 Apply steps 5.1--6.1 first to the identity function. They say that $\lambda\in\sigma(T)$ exactly when $E(B_\delta(\lambda))\ne0$ for every $\delta>0$. Moreover $E(\mathbb R\setminus\sigma(T))=0$: every point of the open set $\mathbb R\setminus\sigma(T)$ has an open interval of zero $E$-projection, and a countable rational subcover plus countable additivity of the PVM gives the assertion. [step 5.1, step 6.1]

8.1 Now let $f$ be continuous. If $z\notin\overline{f(\sigma(T))}$, then for some $\varepsilon>0$, $f^{-1}(B_\varepsilon(z))\subseteq\mathbb R\setminus\sigma(T)$, so its $E$-projection is zero by step 7.1. Conversely, if $z\in\overline{f(\sigma(T))}$ and $\varepsilon>0$, choose $\lambda\in\sigma(T)$ with $|f(\lambda)-z|<\varepsilon/2$. Continuity gives an open interval $V$ about $\lambda$ contained in $f^{-1}(B_\varepsilon(z))$. Step 7.1 gives $E(V)\ne0$, hence $E(f^{-1}(B_\varepsilon(z)))\ne0$. Thus the essential range is $\overline{f(\sigma(T))}$. [step 7.1]

9.1 The claims collected are 1 = [A1], 2 = steps 2.1 and 3.1, 3 = step 1.2, 4 = steps 5.1 and 6.1, 5 = steps 7.1 and 8.1. ∎
