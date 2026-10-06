---
id: lem-bounded-lipschitz-profile-moments-control-uniform-distance
kind: lemma
title: "Finitely many polynomial moments control the uniform distance on bounded Lipschitz profiles"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [cor-weierstrass-approximation-on-a-closed-interval, def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-continuous-implies-integrable, def-darboux-integral, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-continuity-real, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Lemma 5.7 and its proof, printed pp. 28-29 (weak versus uniform topology on bounded Lipschitz profiles; the polynomial-moment version uses Weierstrass approximation)"
---

## Statement

Fix $I=[a,b]$ with $a\le b$ and let $\Sigma_I$ be the set of real functions $\sigma$ with support in $I$ satisfying $|\sigma(x)-\sigma(y)|\le|x-y|$ for all $x,y$. Then for every $\varepsilon>0$ there exist $K\in\mathbb N$ and $\delta>0$ such that every $\sigma\in\Sigma_I$ with
$$\Bigl|\int_{\mathbb R}\sigma(x)x^k\,dx\Bigr|\le\delta\qquad(k=0,1,\dots,K)$$
satisfies $\sup_{x\in\mathbb R}|\sigma(x)|\le\varepsilon$. Consequently, if $(\sigma_n)\subseteq\Sigma_I$ and $\int_{\mathbb R}\sigma_n(x)x^k\,dx\to0$ for every $k\ge0$, then $\sigma_n\to0$ uniformly on $\mathbb R$; equivalently, on $\Sigma_I$ the topology of all polynomial moments coincides with the topology of uniform convergence.

## Facts & Assumptions

**Given:** reals $a\le b$, the set $\Sigma_I$ of real functions $\sigma$ vanishing outside $I$ with $|\sigma(x)-\sigma(y)|\le|x-y|$ for all $x,y$, and a real $\varepsilon>0$. For $\sigma\in\Sigma_I$ the integral $\int_{\mathbb R}\sigma(x)x^k\,dx$ of the Statement is read as $\int_a^b\sigma(x)x^k\,dx$ (Riemann-Darboux, [[def-darboux-integral]]) when $a<b$, and as $0$ when $a=b$; the convention $x^0=1$ is used.

[F1] A function with $|g(x)-g(y)|\le|x-y|$ for all reals $x,y$ is continuous on $\mathbb R$: at every point and every real $\eta>0$, $\delta:=\eta$ witnesses continuity ([[def-continuity-real]]).

[F2] For $a\le b$, every continuous real function on $[a,b]$ is a uniform limit of polynomials ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[F3] For $a<b$, every continuous real function on $[a,b]$ is bounded and Riemann integrable, so its Darboux integral exists ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[F4] For $a<b$, if $f,g$ are integrable on $[a,b]$ then so are $f+g$ and $\lambda f$ for real $\lambda$, with $\int_a^b(\lambda f+\mu g)=\lambda\int_a^bf+\mu\int_a^bg$ ([[thm-linearity-of-the-integral]]); if $f\le g$ pointwise on $[a,b]$ then $\int_a^bf\le\int_a^bg$, and if $m\le f\le M$ then $m(b-a)\le\int_a^bf\le M(b-a)$ ([[thm-monotonicity-of-the-integral]]).

[F5] Absolute value and its basic inequalities: $|u|=u$ for $u\ge0$ and $|u|=-u$ for $u<0$ ([[def-abs-value]]); for every real $c>0$ and real $x$, $|x|\le c$ if and only if $-c\le x\le c$ ([[lem-of-abs-value]]); and $|x+y|\le|x|+|y|$ for all reals $x,y$ ([[lem-of-triangle-inequality]]).

[F6] A sequence $(g_n)$ of real functions converges uniformly to $0$ on $\mathbb R$ when for every real $\eta>0$ there is $N$ with $|g_n(x)|<\eta$ for all $n\ge N$ and all $x$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Boundedness of the profiles: let $\sigma\in\Sigma_I$. If $a=b$, then for every real $r>0$ the point $y:=a+r$ lies outside $I$, so $\sigma(y)=0$ and $|\sigma(a)|\le|a-y|=r$; hence $|\sigma(a)|=0$ and $\sigma\equiv0$. If $a<b$, the Lipschitz bound together with $\sigma(y)=0$ for $y<a$ gives $|\sigma(a)|=|\sigma(a)-\sigma(y)|\le a-y$ for every $y<a$, hence $|\sigma(a)|\le0$, and symmetrically $\sigma(b)=0$; then for $x\in I$ one has $|\sigma(x)|\le|x-a|$ and $|\sigma(x)|\le|b-x|$, so $|\sigma(x)|\le(b-a)/2$. Put $C:=\max\{1,(b-a)/2\}$, so $\sup_{\mathbb R}|\sigma|\le C$ for every $\sigma\in\Sigma_I$, and $\sigma$ is continuous on $\mathbb R$ by [F1]. For the rest of the proof assume $a<b$; the case $a=b$ is finished below. [given, F1, algebra]

1.2 The comparison bump: fix $x\in I$ and a real $\eta>0$, and put $u:=\max(a,x-\eta/2)$, $v:=\min(b,x+\eta/2)$, so $u<v$ because $a<b$ and $x\in I$. Let $c:=(u+v)/2$ and define $F(y):=\max\{0,\ \frac{2}{v-u}\bigl(1-\frac{2|y-c|}{v-u}\bigr)\}$ for real $y$. Then $F\ge0$ is continuous, its support is $[u,v]\subseteq I\cap[x-\eta/2,x+\eta/2]$, and $\int_{\mathbb R}F=1$, the graph of $F$ being a triangle of height $2(v-u)^{-1}$ and base $v-u$. Since every $y$ in the support of $F$ satisfies $|y-x|\le\eta/2$, $\sigma(y)\ge\sigma(x)-|y-x|\ge\sigma(x)-\eta/2$; hence if $\sigma(x)>\eta$ then $\sigma F\ge(\eta/2)F$ pointwise on $I$ and, as $\sigma F$ and $F$ are continuous there, [F4] and [F3] give $\int_{\mathbb R}\sigma F\ge(\sigma(x)-\eta/2)\int_{\mathbb R}F=\sigma(x)-\eta/2>\eta/2$, while if $\sigma(x)<-\eta$ then symmetrically $\int_{\mathbb R}\sigma F\le\sigma(x)+\eta/2<-\eta/2$. In either case $|\sigma(x)|>\eta$ implies $\bigl|\int_{\mathbb R}\sigma F\bigr|>\eta/2$, so $\{\sigma\in\Sigma_I:|\int_{\mathbb R}\sigma F|\le\eta/2\}\subseteq V(x,\eta):=\{\sigma\in\Sigma_I:|\sigma(x)|\le\eta\}$. [given, F1, F3, F4, F5, construct, algebra]

1.3 Integral triangle inequality and polynomial bounds: let $f$ be continuous on $[a,b]$. Then $f$ and $|f|$ are continuous and integrable by [F3]. Applying [F4] to the two pointwise chains $-|f|\le f\le|f|$ and $-f\le|f|$ gives $\int f\le\int|f|$ and $-\int f=\int(-f)\le\int|f|$; by [F5], $\bigl|\int f\bigr|\le\int|f|$. Now let $P=\sum_{k=0}^{K}a_kx^k$ be a real polynomial with $K\ge0$, put $S:=1+\sum_{k=0}^{K}|a_k|\ge1$, let $\eta>0$ and set $\delta_0:=\eta/(4S)$. If $\sigma\in\Sigma_I$ satisfies $\bigl|\int_{\mathbb R}\sigma x^k\bigr|\le\delta_0$ for $k=0,\dots,K$, then $\sigma P$ is continuous on $[a,b]$, [F4] gives $\int_{\mathbb R}\sigma P=\sum_{k=0}^{K}a_k\int_{\mathbb R}\sigma x^k$, and the integral triangle inequality just proved together with [F5] yields $\bigl|\int_{\mathbb R}\sigma P\bigr|\le\sum_{k=0}^{K}|a_k|\bigl|\int_{\mathbb R}\sigma x^k\bigr|\le\sum_{k=0}^{K}|a_k|\,\delta_0\le\eta/4$. [given, F1, F3, F4, F5, algebra]

1.4 A finite mesh: for every real $\eta>0$ there are finitely many points $a=x_1<x_2<\cdots<x_m=b$ with $x_{i+1}-x_i\le\eta$ for all $i<m$; one may take $m:=\lceil (b-a)/\eta\rceil+1$ and split $[a,b]$ into equal parts. Every $x\in I$ then satisfies $|x-x_i|\le\eta$ for at least one mesh point $x_i$. [given, choose, algebra]

2.1 Polynomial replacement of the bump: keep the notation of step 1.2 and put $\theta:=\eta/\bigl(4C(b-a)\bigr)>0$ with $C$ from step 1.1. By [F2] choose a polynomial $P$ with $\sup_{y\in I}|F(y)-P(y)|\le\theta$. The functions $\sigma F$, $\sigma P$ and $\sigma(F-P)$ are continuous on $[a,b]$ by [F1], hence integrable by [F3], and all three vanish outside $I$; therefore, by step 1.3 and [F4], $\bigl|\int_{\mathbb R}\sigma(F-P)\bigr|\le\int_{\mathbb R}|\sigma(F-P)|\le C(b-a)\sup_{I}|F-P|\le\eta/4$, and if $\bigl|\int_{\mathbb R}\sigma P\bigr|\le\eta/4$, then [F5] gives $\bigl|\int_{\mathbb R}\sigma F\bigr|\le\bigl|\int_{\mathbb R}\sigma P\bigr|+\bigl|\int_{\mathbb R}\sigma(F-P)\bigr|\le\eta/2$. Combined with step 1.2, $\{\sigma\in\Sigma_I:|\int_{\mathbb R}\sigma P|\le\eta/4\}\subseteq V(x,\eta)$. [given, F1, F2, F3, F4, F5, step 1.1, step 1.2, step 1.3, algebra]

2.2 From mesh values to the supremum: let $\eta>0$, let $a=x_1<\cdots<x_m=b$ be a mesh as in step 1.4, and let $\sigma\in\Sigma_I$ satisfy $|\sigma(x_i)|\le\eta$ for all $i$. For $x\in I$ choose $i$ with $|x-x_i|\le\eta$; then $|\sigma(x)|\le|\sigma(x_i)|+|x-x_i|\le2\eta$, while $|\sigma(x)|=0\le2\eta$ for $x\notin I$. Hence $\sup_{\mathbb R}|\sigma|\le2\eta$. [given, step 1.4, algebra]

3.1 First claim: given $\varepsilon>0$, apply steps 2.1 and 1.3 with $\eta:=\varepsilon/2$ at each mesh point $x_1,\dots,x_m$ of step 1.4: for each $i$ this produces a polynomial $P_i=\sum_{k=0}^{K_i}a_{i,k}x^k$ such that $\{\sigma\in\Sigma_I:|\int_{\mathbb R}\sigma P_i|\le\varepsilon/8\}\subseteq V(x_i,\varepsilon/2)$, and a threshold $\delta_i:=\frac{\varepsilon/8}{1+\sum_{k=0}^{K_i}|a_{i,k}|}>0$ such that the moments up to $K_i$ being at most $\delta_i$ force $\bigl|\int_{\mathbb R}\sigma P_i\bigr|\le\varepsilon/8$. Put $K:=\max_iK_i$ and $\delta:=\min_i\delta_i>0$; both depend only on $I$ and $\varepsilon$. Let $\sigma\in\Sigma_I$ satisfy $\bigl|\int_{\mathbb R}\sigma x^k\bigr|\le\delta$ for $k=0,\dots,K$. For each $i$ the moments up to $K_i\le K$ are at most $\delta\le\delta_i$, so $\bigl|\int_{\mathbb R}\sigma P_i\bigr|\le\varepsilon/8$ and hence $|\sigma(x_i)|\le\varepsilon/2$; step 2.2 with $\eta=\varepsilon/2$ gives $\sup_{\mathbb R}|\sigma|\le\varepsilon$. In the case $a=b$ every $\sigma\in\Sigma_I$ is $\sigma\equiv0$ by step 1.1, so any $K$ and $\delta$ work. [given, step 1.1, step 1.3, step 1.4, step 2.1, step 2.2, algebra]

4.1 Consequence and topology: for a sequence with every moment tending to zero, apply step 3.1 with tolerance $\varepsilon/2$; the finitely many moment conditions hold eventually, giving $\sup|\sigma_n|\le\varepsilon/2<\varepsilon$, hence uniform convergence by [F6]. To compare the topologies at an arbitrary $\tau\in\Sigma_I$, put $g:=(\sigma-\tau)/2\in\Sigma_I$. Given $\varepsilon>0$, step 3.1 at tolerance $\varepsilon/4$ supplies $K,\delta>0$; if $|\int(\sigma-\tau)x^k|<2\delta$ for $k\le K$, then $\sup|\sigma-\tau|=2\sup|g|\le\varepsilon/2<\varepsilon$. Thus a finite intersection of moment neighborhoods of $\tau$ lies in each uniform neighborhood. Conversely, for every $k$, continuity and steps 1.3 and [F4] give $|\int(\sigma-\tau)x^k|\le(b-a)\max\{1,|a|,|b|\}^{k}\sup|\sigma-\tau|$, so each moment functional is continuous for the uniform topology. These two neighborhood containments prove equality of the topologies; when $a=b$ the space is the singleton zero profile by step 1.1. [given, F3, F4, F6, step 1.1, step 1.3, step 3.1, algebra] ∎
