---
id: lem-emg-fx-holder-cubic-map
kind: lemma
title: Positive Hölder cubic map is continuously differentiable
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-fx-dirichlet-constraint-problem
  - def-frechet-derivative-between-banach-spaces
  - def-c-k-map-between-banach-spaces
  - cor-mean-value-theorem
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-holder-spaces-on-bounded-domains-are-banach-spaces
dependency_roles:
  def-emg-fx-dirichlet-constraint-problem: mathematical-premise
  def-frechet-derivative-between-banach-spaces: mathematical-premise
  def-c-k-map-between-banach-spaces: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-holder-spaces-on-bounded-domains-are-banach-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chin-Lung Wang, Banach Calculus, National Taiwan University lecture notes (2012; complete 16-page PDF)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
      locator: "§2.1-2.4, PDF pp. 4-8; Fréchet derivatives, parameter derivatives, and the Banach chain rule."
    - title: "John B. Conway, Functional Analysis, Chapter XII (University of Colorado lecture chapter)"
      url: "https://spot.colorado.edu/~baggett/funcchap12.pdf"
      locator: "Chapter XII, the Banach calculus and operator-norm framework preceding Theorem 12.8, printed pp. 248-254."
verification:
  precheck: pass
---

## Statement

Let $X$ and $Y=C^{0,\alpha}(\overline\Omega)$ be the Hölder spaces with the norms specified in [[def-emg-fx-dirichlet-constraint-problem]], and let $S\in Y$ be its source. The inclusion $X\hookrightarrow Y$ is bounded. The set $\mathcal U:=\{u\in Y:\min_{\overline\Omega}(1+u)>0\}$ is open, and

$$N_S:\mathcal U\to Y,\qquad N_S(u):=S(1+u)^{-3},$$

is continuously Fréchet differentiable with $DN_S(u)[h]=-3S(1+u)^{-4}h$ for every $u\in\mathcal U$ and $h\in Y$.

## Statement references

[[def-emg-fx-dirichlet-constraint-problem]]

## Facts & Assumptions

**Given:** The bounded smooth domain $\Omega$, $0<\alpha<1$, the Hölder norm on $Y=C^{0,\alpha}(\overline\Omega)$, and $S\in Y$.

[F1] [[def-emg-fx-dirichlet-constraint-problem]]: $\|g\|_Y=\|g\|_\infty+[g]_{0,\alpha}$, with $[g]_{0,\alpha}=\sup_{x\ne y}|g(x)-g(y)|/|x-y|^\alpha$.

[F2] [[thm-holder-spaces-on-bounded-domains-are-banach-spaces]]: $C^{0,\alpha}(\overline\Omega)$ with its full Hölder norm is a Banach space.

[F3] [[def-frechet-derivative-between-banach-spaces]] and [[def-c-k-map-between-banach-spaces]]: Fréchet differentiability means a bounded linear first-order approximation with remainder $o(\|h\|)$, and $C^1$ means this derivative is continuous.

[F4] [[thm-heine-borel-rn]]: the closure of a bounded set in $\mathbb R^3$ is compact. [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its minimum and maximum.

[F5] [[cor-mean-value-theorem]]: a differentiable real function on an interval changes by at most the supremum of the absolute derivative times the interval length.

## Proof

**Given:** The hypotheses above.

1.1 Bounded inclusion. Compactness of $\overline\Omega$ and the smooth boundary give a finite cover by interior balls and flattened boundary boxes whose smaller concentric patches still cover $\overline\Omega$. In an interior patch, sufficiently close points can be joined by a segment; in a boundary patch, flattening identifies the domain locally with one side of a graph, and the inverse graph map and its inverse are Lipschitz on the smaller box. Therefore there are $\delta,C_0>0$ such that any $x,y\in\overline\Omega$ with $|x-y|<\delta$ can be joined in $\overline\Omega$ by a curve of length at most $C_0|x-y|$: take a Lebesgue number for the finite smaller-patch cover and pull back the straight segment in the corresponding ball or half-box. For boundary endpoints, approximate both endpoints by interior points in the same patch and pass to the limit using the continuous extensions of $u$ and its first derivatives. The fundamental theorem of calculus along these curves gives $|u(x)-u(y)|\leq C_0\|\nabla u\|_\infty|x-y|$ for such pairs. For $|x-y|\geq\delta$, the quotient is at most $2\delta^{-\alpha}\|u\|_\infty$. Consequently $[u]_{0,\alpha}\leq C(\|u\|_\infty+\|\nabla u\|_\infty)$, so $\|u\|_Y\leq C\|u\|_X$. [given, F1, algebra]

1.2 The Hölder norm is an algebra norm. For $f,g\in Y$, the identity $f(x)g(x)-f(y)g(y)=f(x)(g(x)-g(y))+g(y)(f(x)-f(y))$ gives $[fg]_{0,\alpha}\leq\|f\|_\infty[g]_{0,\alpha}+\|g\|_\infty[f]_{0,\alpha}$, hence $\|fg\|_Y\leq\|f\|_Y\|g\|_Y$. By [F4], the positive minimum $m=\min_{\overline\Omega}(1+u)$ exists; if $\|h\|_Y<m/2$, then $1+u+h\geq m/2>0$, so $\mathcal U$ is open. [given, F1, F4, algebra]

2.1 Hölder composition and remainder. On a sufficiently small $Y$-neighborhood of a fixed $u\in\mathcal U$, the values of $1+u$ lie in a compact interval contained in $(0,\infty)$. For $j=3,4,5$, the scalar derivative of $s\mapsto s^{-j}$ is bounded on that interval; the real mean-value theorem [F5] gives $[ (1+u)^{-j}]_{0,\alpha}\leq C[u]_{0,\alpha}$, and these compositions lie in $Y$. Put $z=1+u$ and $r=h/z$. Since $z\geq m>0$, $|z(x)^{-1}-z(y)^{-1}|\leq m^{-2}|z(x)-z(y)|$, so $z^{-1}\in Y$ and step 1.2 gives $\|r\|_Y\leq C\|h\|_Y$. Direct algebra gives $(z+h)^{-3}-z^{-3}+3z^{-4}h=z^{-3}(6r^2+8r^3+3r^4)/(1+r)^3$. For small $\|h\|_Y$, $z+h\geq m/2$; the same reciprocal estimate gives $(1+r)^{-1}=z/(z+h)$ bounded in $Y$. The algebra estimate of step 1.2 therefore bounds the norm of this remainder after multiplication by $S$ by $C\|h\|_Y^2=o(\|h\|_Y)$, proving $DN_S(u)[h]=-3S(1+u)^{-4}h$. [F1, F5, step 1.2, algebra]

3.1 Continuity of the derivative. For $u,v$ in a smaller neighborhood with $q:=1+u$, $p:=1+v$, and $q,p\geq m/2$, the factorization $q^{-4}-p^{-4}=(p-q)(p+q)(p^2+q^2)/(p^4q^4)$ and the reciprocal estimates of step 2.1 give $\|(1+u)^{-4}-(1+v)^{-4}\|_Y\leq C\|u-v\|_Y$. Thus $\|DN_S(u)-DN_S(v)\|_{Y\to Y}\leq3\|S\|_Y C\|u-v\|_Y$, proving continuity of $DN_S$. By [F2], $Y$ is Banach, so steps 2.1 and 3.1 establish that $N_S$ is continuously Fréchet differentiable as a map between Banach spaces; by step 1.1, its restriction along the bounded inclusion $X\hookrightarrow Y$ is also $C^1$. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎

