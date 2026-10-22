---
id: thm-emg-fx-small-dirichlet-data
kind: theorem
title: Small charged Dirichlet conformal branch
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
deps:
  - def-emg-fx-dirichlet-constraint-problem
  - lem-emg-fx-dirichlet-holder-inverse
  - lem-emg-fx-banach-implicit-constraint
  - lem-emg-fx-holder-cubic-map
  - def-axiom-of-choice
  - def-countable-choice
  - thm-holder-spaces-on-bounded-domains-are-banach-spaces
  - thm-weak-maximum-principle-for-the-laplacian
dependency_roles:
  def-emg-fx-dirichlet-constraint-problem: mathematical-premise
  lem-emg-fx-dirichlet-holder-inverse: mathematical-premise
  lem-emg-fx-banach-implicit-constraint: mathematical-premise
  lem-emg-fx-holder-cubic-map: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-holder-spaces-on-bounded-domains-are-banach-spaces: mathematical-premise
  thm-weak-maximum-principle-for-the-laplacian: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Gilbarg and Neil S. Trudinger, Elliptic Partial Differential Equations of Second Order (2001)"
      url: "https://djvu.online/file/jxRRleAzbYjsl"
      locator: "Chapter 6, Lemma 6.18 and Theorem 6.19, printed pp. 111-112; boundary Hölder regularity for classical Dirichlet solutions."
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.9, Theorem 8.30, printed pp. 151-153; weak-to-strong regularity from a global Schauder estimate."
    - title: "Chin-Lung Wang, Banach Calculus, National Taiwan University lecture notes (2012; complete 16-page PDF)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
      locator: "§3.1 and §3.3, PDF pp. 9-11; contraction and implicit-function methods in Banach spaces."
    - title: "John B. Conway, Functional Analysis, Chapter XII (University of Colorado lecture chapter)"
      url: "https://spot.colorado.edu/~baggett/funcchap12.pdf"
      locator: "Chapter XII, Theorem 12.8, printed pp. 256-257; implicit-function theorem proved from contraction mapping."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and Countable Choice. For the problem of *Bounded-domain charged conformal problem*, there are $\rho>0$, $\varepsilon_0>0$, and $C<\infty$ such that for each $|\varepsilon|<\varepsilon_0$ there is exactly one solution $u_\varepsilon\in X$ with $\|u_\varepsilon\|_{C^{2,\alpha}}<\rho$. The corresponding $\psi_\varepsilon=1+u_\varepsilon$ satisfies $\psi_\varepsilon\geq1$ on $\overline\Omega$. If $v\in X$ is the unique solution of $-8\Delta v=2S$ in $\Omega$, $v=0$ on $\partial\Omega$, then

$$\|u_\varepsilon-\varepsilon^2v\|_{C^{2,\alpha}(\overline\Omega)}\leq C|\varepsilon|^4.$$

The constants may depend on $\Omega,\alpha,S$, and the uniqueness is only in the fixed neighborhood $\|u\|_{C^{2,\alpha}}<\rho$; no global uniqueness, asymptotically Euclidean solution, puncture solution, or non-CMC result is asserted. The $O(\varepsilon^4)$ statement means the displayed bound for all $|\varepsilon|<\varepsilon_0$.

## Statement references

[[def-emg-fx-dirichlet-constraint-problem]]

[[lem-emg-fx-dirichlet-holder-inverse]]

[[lem-emg-fx-banach-implicit-constraint]]

[[lem-emg-fx-holder-cubic-map]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the bounded smooth domain and exponent of [[def-emg-fx-dirichlet-constraint-problem]], $S\in C^{0,\alpha}(\overline\Omega)$ with $S\geq0$, and the three local suppliers below.

[A1] The Hölder inverse supplier assumes the Axiom of Choice and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] [[def-emg-fx-dirichlet-constraint-problem]]: $X$ is the zero-boundary $C^{2,\alpha}$ space, $Y=C^{0,\alpha}(\overline\Omega)$, and the nonlinear equation is $-8\Delta(1+u)=2\varepsilon^2S(1+u)^{-3}$ with $1+u>0$.

[F2] [[lem-emg-fx-dirichlet-holder-inverse]]: $A=-8\Delta:X\to Y$ is a bounded linear isomorphism with bounded inverse.

[F3] [[lem-emg-fx-banach-implicit-constraint]]: if $F(0,0)=0$, $F$ is $C^1$ between Banach spaces, and $D_uF(0,0)$ is invertible, then $F(u,\varepsilon)=0$ has a unique local $C^1$ branch $u(\varepsilon)$.

[F4] [[lem-emg-fx-holder-cubic-map]]: $u\mapsto S(1+u)^{-3}$ is $C^1$ on the open set where $1+u>0$, with derivative $-3S(1+u)^{-4}h$.

[F5] [[thm-weak-maximum-principle-for-the-laplacian]]: for $w\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta w\geq0$, $\max_{\overline\Omega}w=\max_{\partial\Omega}w$.

[F6] [[thm-holder-spaces-on-bounded-domains-are-banach-spaces]]: the full $C^{2,\alpha}(\overline\Omega)$ space is Banach and $X$, its zero-boundary subspace, is a closed Banach subspace; $Y=C^{0,\alpha}(\overline\Omega)$ is Banach.

## Proof

**Given:** The hypotheses above.

1.1 By [F6], $X$ and $Y$ are real Banach spaces. The set $U:=\{(u,\varepsilon)\in X\times\mathbb R:\min_{\overline\Omega}(1+u)>0\}$ is open because the minimum changes by at most $\|u-v\|_\infty$, which is bounded by the $X$-norm. Define $F:U\to Y$ by $F(u,\varepsilon):=Au-2\varepsilon^2N_S(u)$, with $A=-8\Delta$ and $N_S(u)=S(1+u)^{-3}$. By [A1], the inverse supplier [F2] applies; [F4] gives a continuously differentiable map on $Y$ and the bounded inclusion $X\hookrightarrow Y$, so $F$ is $C^1$. Also $F(0,0)=0$ and $D_uF(0,0)=A$, since the $u$-derivative of the nonlinear term is multiplied by $\varepsilon^2$. [given, A1, F1, F2, F4, F6, algebra]

2.1 Since $A$ is invertible, [F3] supplies $\rho,\varepsilon_0>0$ and a unique local $C^1$ branch $u_\varepsilon$ in the ball $\|u\|_{C^{2,\alpha}}<\rho$ satisfying $F(u_\varepsilon,\varepsilon)=0$. Shrink the product neighborhood so that $\|u_\varepsilon\|_\infty<1/2$; then $\psi_\varepsilon=1+u_\varepsilon>0$, and $F=0$ is equivalent to the defining Dirichlet equation. [F1, F2, F3, step 1.1]

3.1 For each $\varepsilon$, the equation and $S\geq0$ imply $\Delta u_\varepsilon\leq0$. Hence $\Delta(-u_\varepsilon)\geq0$ and $-u_\varepsilon=0$ on $\partial\Omega$. Applying [F5] to $-u_\varepsilon$ yields $\max_{\overline\Omega}(-u_\varepsilon)=0$, so $u_\varepsilon\geq0$ and $\psi_\varepsilon\geq1$. [F1, F5, step 2.1, algebra]

3.2 Let $v:=A^{-1}(2S)$, which is the unique element of $X$ with $-8\Delta v=2S$. The fixed-point equation gives $u_\varepsilon=2\varepsilon^2A^{-1}\bigl(S(1+u_\varepsilon)^{-3}\bigr)$. The branch is continuous and $u_0=0$, so the Hölder norm of $S(1+u_\varepsilon)^{-3}$ is bounded near $\varepsilon=0$; boundedness of $A^{-1}$ in [F2] implies $\|u_\varepsilon\|_{C^{2,\alpha}}=O(\varepsilon^2)$. If $S=0$, the same identity gives $u_\varepsilon=0$, so the zero-source case is included. [F2, F4, step 2.1, algebra]

4.1 Subtract $A(\varepsilon^2v)=2\varepsilon^2S$ from $Au_\varepsilon=2\varepsilon^2S(1+u_\varepsilon)^{-3}$, obtaining $u_\varepsilon-\varepsilon^2v=2\varepsilon^2A^{-1}\!\left(S\bigl((1+u_\varepsilon)^{-3}-1\bigr)\right)$. The differentiability estimate in [F4] at $u=0$ gives $\|S((1+u_\varepsilon)^{-3}-1)\|_{C^{0,\alpha}}\leq C_1\|u_\varepsilon\|_{C^{0,\alpha}}$ for small $\varepsilon$. Combining this with step 3.2, the Hölder product bound, and $\|A^{-1}\|_{Y\to X}<\infty$ proves $\|u_\varepsilon-\varepsilon^2v\|_{C^{2,\alpha}}\leq C|\varepsilon|^4$. This is a conditional mathematical consequence of the stated assumptions, not an empirical claim. [F2, F4, step 3.2, algebra] ∎

