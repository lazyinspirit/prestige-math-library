---
id: lem-nrqm-coulomb-three-dimensional-hardy-bound
aliases: [nrqm-coulomb-three-dimensional-hardy-bound]
kind: lemma
domain: mathematics
title: "Three-dimensional Hardy bound"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, cor-vector-forms-of-the-divergence-theorem, thm-dominated-convergence, thm-complex-lp-completeness-and-almost-everywhere-subsequences, def-countable-choice]
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  cor-vector-forms-of-the-divergence-theorem: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-complex-lp-completeness-and-almost-everywhere-subsequences: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Comments on Chapter 8, p. 233 (the one-dimensional Hardy inequality on W^{1,p}_0(0,1) with the sharp constant p/(p-1)) and Comments on Chapter 9, p. 313 (Hardy's inequality ||u/d||_p <= C||Du||_p on bounded C^1 domains)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
    - title: "Wikipedia, 'Hardy's inequality' (encyclopedia article; secondary reference for the sharp multidimensional form: the L^p(R^n) norm of f/|x| is at most p/(n-p) times the L^p norm of the gradient, 1 <= p < n; the case n=3, p=2 gives the constant 2, whose square 4 is the constant of this lemma)"
      url: "https://en.wikipedia.org/wiki/Hardy%27s_inequality"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$W^{1,2}(\mathbb R^3;\mathbb C)$ be the Sobolev space of
[[def-sobolev-space-wkp-and-its-norm]] with the weak gradient $\nabla u$ of
[[def-weak-derivative-of-a-locally-integrable-function]], write
$r(x):=|x|$, and write $\|u\|_2^2=\int_{\mathbb R^3}|u(x)|^2\,dx$ for the
$L^2$ norm of [[def-l-p-space-as-a-quotient-by-null-functions]] and
[[def-complex-lp-and-euclidean-test-function-conventions]]. Then:

(a) for every $u\in C_c^\infty(\mathbb R^3\setminus\{0\};\mathbb C)$,

$$\int_{\mathbb R^3}\frac{|u(x)|^2}{|x|^2}\,dx\le 4\int_{\mathbb R^3}|\nabla u(x)|^2\,dx;$$

(b) the same inequality holds for every $u\in C_c^\infty(\mathbb R^3;\mathbb C)$;

(c) for every $u\in W^{1,2}(\mathbb R^3;\mathbb C)$ the a.e.-defined function $x\mapsto u(x)/|x|$ lies in $L^2(\mathbb R^3;\mathbb C)$ and satisfies $\|u/|\cdot|\|_2\le 2\|\nabla u\|_2$.

No constant smaller than $4$ is claimed, and no statement is made about
$\|u/|\cdot|\|_2$ for $u$ outside $W^{1,2}$.

## Facts & Assumptions

**Given:** the Sobolev space $W^{1,2}(\mathbb R^3;\mathbb C)$ with weak gradient $\nabla u$; the function $r(x)=|x|$; a function $u$ of one of the stated regularity classes.

[F1] Divergence theorem and its vector forms: for a bounded domain with a finite piecewise $C^1$ presentation and a $C^1$ vector field $F$ on a neighbourhood of its closure, the integral of $\operatorname{div}F$ equals the outward flux; in particular, if $F$ is $C^1$ on $\mathbb R^3\setminus\{0\}$ and compactly supported there, then $\int_{\mathbb R^3}\operatorname{div}F=0$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[cor-vector-forms-of-the-divergence-theorem]]).

[F2] Cauchy-Schwarz for $L^2$: $\int|fg|\le\|f\|_2\|g\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F3] $C_c^\infty(\mathbb R^3;\mathbb C)$ is dense in $W^{1,2}(\mathbb R^3;\mathbb C)$ in the Sobolev norm ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-sobolev-space-wkp-and-its-norm]]).

[F4] If $f_n\to f$ in $L^2$, then some subsequence converges to $f$ pointwise a.e. ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F5] If $f_n\to f$ a.e. and $|f_n|\le g$ with $g\in L^1$, then $\int f_n\to\int f$ ([[thm-dominated-convergence]]).

[F6] For $u\in C_c^\infty(\mathbb R^3;\mathbb C)$ the function $x\mapsto|u(x)|^2/|x|^2$ is integrable: choosing $R>0$ with $\operatorname{supp}u\subseteq B(0,R)$ and bounding $|u|\le\|u\|_\infty$, its integral is at most $\|u\|_\infty^2\int_{|x|\le R}|x|^{-2}dx=4\pi R\|u\|_\infty^2<\infty$ ([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

1.1 [The divergence of the radial weight] On $\mathbb R^3\setminus\{0\}$ one has $\operatorname{div}(x/|x|^2)=\sum_{i=1}^3\partial_i(x_i|x|^{-2})=3|x|^{-2}-2|x|^{-2}=|x|^{-2}$, because the derivative of $|x|^{-2}$ in the direction $x$ is $-2|x|^{-4}\sum_ix_i^2=-2|x|^{-2}$. [algebra]

2.1 [Integration by parts on the punctured space] Let $u\in C_c^\infty(\mathbb R^3\setminus\{0\};\mathbb C)$ and put $W(x):=|u(x)|^2x/|x|^2$. Then $W$ is $C^1$ on $\mathbb R^3\setminus\{0\}$ and compactly supported there, and step 1.1 gives $\operatorname{div}W=\nabla(|u|^2)\cdot x/|x|^2+|u|^2/|x|^2$. Since $\int_{\mathbb R^3}\operatorname{div}W=0$ by [F1], and $\nabla(|u|^2)=2\operatorname{Re}(\overline u\,\nabla u)$, we obtain $\int_{\mathbb R^3}|u|^2/|x|^2\,dx=-2\operatorname{Re}\int_{\mathbb R^3}\overline u(x)\,x\cdot\nabla u(x)\,|x|^{-2}\,dx$. [step 1.1, F1, algebra]

3.1 [Hardy bound away from the origin] With $u$ as in step 2.1, the absolute value of the right-hand integral is at most $\int(|u|/|x|)|\nabla u|\le\|u/|\cdot|\|_2\|\nabla u\|_2$ by [F2], while the left-hand side is $\|u/|\cdot|\|_2^2$; both quantities are finite by [F6]. Hence $\|u/|\cdot|\|_2^2\le2\|u/|\cdot|\|_2\|\nabla u\|_2$, and division by the nonnegative factor yields $\|u/|\cdot|\|_2\le2\|\nabla u\|_2$, which is (a). [step 2.1, F2, F6, algebra]

4.1 [Removing the puncture] Let $u\in C_c^\infty(\mathbb R^3;\mathbb C)$ and choose a radial $\chi\in C_c^\infty(\mathbb R^3;[0,1])$ with $\chi=0$ for $|x|\le1$, $\chi=1$ for $|x|\ge2$, and $|\nabla\chi|\le C$; put $\chi_\varepsilon(x):=\chi(x/\varepsilon)$. Then $u_\varepsilon:=\chi_\varepsilon u\in C_c^\infty(\mathbb R^3\setminus\{0\};\mathbb C)$, because its support is contained in the closed set $\{|x|\ge\varepsilon\}\cap\operatorname{supp}u$ and hence stays a positive distance from the origin, so step 3.1 applies: $\|u_\varepsilon/|\cdot|\|_2\le2\|\nabla u_\varepsilon\|_2$. As $\varepsilon\downarrow0$ the functions $u_\varepsilon/|x|$ converge to $u/|x|$ pointwise on $\{|x|>0\}$ and are dominated by $|u|/|x|\in L^2$ by [F6], so $\|u_\varepsilon/|\cdot|\|_2\to\|u/|\cdot|\|_2$ by [F5] applied to the squared moduli. Moreover $\nabla u_\varepsilon=\chi_\varepsilon\nabla u+u\nabla\chi_\varepsilon$ with $\|\chi_\varepsilon\nabla u-\nabla u\|_2^2\le\int_{|x|<2\varepsilon}|\nabla u|^2\to0$ and, with $M:=\|u\|_\infty$, $\|u\nabla\chi_\varepsilon\|_2^2\le C^2\varepsilon^{-2}\int_{|x|\le2\varepsilon}M^2\,dx\le C^2M^2\tfrac{4\pi(2\varepsilon)^3}{3\varepsilon^2}=O(\varepsilon)\to0$; hence $\|\nabla u_\varepsilon\|_2\to\|\nabla u\|_2$, and passing to the limit in the display gives (b). [step 3.1, F5, F6, algebra]

5.1 [Density extension to $W^{1,2}$] Let $u\in W^{1,2}(\mathbb R^3;\mathbb C)$ and choose $u_n\in C_c^\infty(\mathbb R^3;\mathbb C)$ with $\|u_n-u\|_{W^{1,2}}\to0$ by [F3]. Step 4.1 applied to $u_n-u_m$ gives $\|u_n/|\cdot|-u_m/|\cdot|\|_2\le2\|\nabla(u_n-u_m)\|_2$, so $(u_n/|\cdot|)$ is Cauchy in $L^2$; let $w\in L^2$ be its limit, so $\|w\|_2\le2\|\nabla u\|_2$ because $\|\nabla u_n\|_2\to\|\nabla u\|_2$. By [F4] some subsequence satisfies $u_{n_k}\to u$ and $u_{n_k}/|\cdot|\to w$ pointwise a.e.; on the conull set where $u_{n_k}\to u$ and $|x|>0$ we have $u_{n_k}(x)/|x|\to u(x)/|x|$, so $w=u/|\cdot|$ a.e. and (c) follows. [step 4.1, F3, F4, algebra] ∎
