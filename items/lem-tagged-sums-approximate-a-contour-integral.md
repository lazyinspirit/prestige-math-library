---
id: lem-tagged-sums-approximate-a-contour-integral
kind: lemma
title: "Tagged sums approximate a contour integral within oscillation times length"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-complex-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-invariance-of-complex-line-integrals-under-increasing-reparametrization, prop-reversal-and-concatenation-of-complex-line-integrals, prop-linearity-of-complex-line-integrals, cor-contour-integral-of-a-constant-is-an-endpoint-increment, cor-ml-estimate-for-complex-line-integrals, thm-arc-length-is-additive-over-subintervals, def-partition-and-refinement, lem-complex-conjugation-and-modulus-laws, lem-finite-sum-laws, thm-induction-principle, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a rectifiable contour with $a<b$, let $f$ be
continuous on its trace $\gamma^\ast$, let $a=t_0<t_1<\dots<t_r=b$ be a partition
of $[a,b]$, and choose a tag $\xi_i\in[t_i,t_{i+1}]$ for each $i<r$. Write
$\gamma_i$ for the restriction $\gamma|_{[t_i,t_{i+1}]}$ and

$$\omega_i:=\sup\bigl\{\,|f(u)-f(v)|\ :\ u,v\in\gamma([t_i,t_{i+1}])\,\bigr\},$$

which is a nonnegative real number. Then

$$\left|\int_\gamma f(z)\,dz-\sum_{i<r}f(\gamma(\xi_i))\bigl(\gamma(t_{i+1})-\gamma(t_i)\bigr)\right|\ \le\ \sum_{i<r}\omega_i\,L(\gamma_i).$$

In particular, if $\omega\ge0$ satisfies $|f(u)-f(v)|\le\omega$ for all
$u,v\in\gamma^\ast$, then the left-hand side is at most $\omega\,L(\gamma)$.

The bound is stated with the oscillations themselves and not as a limit, so a
modulus of continuity for $f$ on $\gamma^\ast$ converts directly into an error
estimate. For a singleton parameter interval $[a,a]$ there is no partition, and
both the integral and the empty tagged sum are $0$.

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma:[a,b]\to\mathbb C$ with $a<b$, a continuous $f$ on $\gamma^\ast$, a partition $a=t_0<t_1<\dots<t_r=b$, and tags $\xi_i\in[t_i,t_{i+1}]$ for $i<r$.

[L1] A complex contour is a rectifiable path $\gamma:[a,b]\to\mathbb C$; if $\alpha,\beta:[0,1]\to\mathbb C$ satisfy $\alpha(1)=\beta(0)$, their concatenation is $(\alpha*\beta)(s)=\alpha(2s)$ for $0\le s\le\tfrac12$ and $\beta(2s-1)$ for $\tfrac12\le s\le1$ ([[def-complex-contours-reversal-concatenation-and-closedness]], [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[L2] For a rectifiable $\gamma:[a,b]\to\mathbb C$ and $f$ continuous on its trace, the complex line integral $\int_\gamma f\,dz$ of [[def-complex-line-integral-over-a-rectifiable-path]] exists ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L3] If $\phi:[c,d]\to[a,b]$ is a strictly increasing continuous bijection, $\gamma:[a,b]\to\mathbb C$ is rectifiable and $f$ is continuous on the trace of $\gamma$, then $\int_{\gamma\circ\phi}f\,dz=\int_\gamma f\,dz$ ([[thm-invariance-of-complex-line-integrals-under-increasing-reparametrization]]).

[L4] For composable rectifiable contours $\alpha,\beta$, $\int_{\alpha*\beta}f\,dz=\int_\alpha f\,dz+\int_\beta f\,dz$ ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L5] For continuous $f,g$ on the trace of a rectifiable contour $\gamma$ and $\alpha,\beta\in\mathbb C$, $\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz$ ([[prop-linearity-of-complex-line-integrals]]).

[L6] For $c\in\mathbb C$ and a rectifiable contour $\gamma:[a,b]\to\mathbb C$, $\int_\gamma c\,dz=c(\gamma(b)-\gamma(a))$ ([[cor-contour-integral-of-a-constant-is-an-endpoint-increment]]).

[L7] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$, with $M\ge0$, then $\bigl|\int_\gamma f(z)\,dz\bigr|\le M\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L8] For a path $\gamma:[a,b]\to\mathbb R^n$ with $n\ge1$ and $c\in[a,b]$, $L_{[a,b]}(\gamma)=L_{[a,c]}(\gamma|_{[a,c]})+L_{[c,b]}(\gamma|_{[c,b]})$ in the nonnegative extended reals, and $\gamma$ is rectifiable on $[a,b]$ if and only if both restrictions are rectifiable ([[thm-arc-length-is-additive-over-subintervals]]).

[L9] A partition of $[a,b]$ with $a<b$ consists of $a=t_0<t_1<\dots<t_r=b$ with $r\ge1$, its subintervals $[t_i,t_{i+1}]$ being indexed from $i=0$ ([[def-partition-and-refinement]]).

[L10] $|z+w|\le|z|+|w|$ for all $z,w\in\mathbb C$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L11] If $a_k\le b_k$ for all $k<n$ then $\sum_{k<n}a_k\le\sum_{k<n}b_k$ ([[lem-finite-sum-laws]]).

[L12] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

[L13] A closed box in $\mathbb R^n$ is compact, and a subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[L14] The continuous image of a compact subset is a compact subset ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L15] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

## Proof

**Proof technique:** direct.

1.1 By [L8] applied at $t_1$, then to $\gamma|_{[t_1,b]}$ at $t_2$, and so on, an induction on the number of partition points ([L12]) shows that each $\gamma_i$ is rectifiable and that $L(\gamma)=\sum_{i<r}L(\gamma_i)$. [given, L8, L9, L12]

1.2 Each $\omega_i$ is a nonnegative real: $[t_i,t_{i+1}]$ is a closed bounded interval, hence compact by [L13]; $f\circ\gamma$ is continuous on it, so its image is compact by [L14] and bounded by [L15]; hence $\{|f(u)-f(v)|:u,v\in\gamma([t_i,t_{i+1}])\}$ is a nonempty set of reals bounded above, and it has a supremum, which is $\ge0$ because $u=v$ is allowed. [given, L13, L14, L15]

1.3 For $a\le u<v<w\le b$ put $\alpha(s)=\gamma(u+s(v-u))$ and $\beta(s)=\gamma(v+s(w-v))$ on $[0,1]$; then $\alpha(1)=\gamma(v)=\beta(0)$, so $\alpha*\beta$ is defined by [L1], and $\alpha*\beta=\gamma|_{[u,w]}\circ\phi$ where $\phi:[0,1]\to[u,w]$ is the strictly increasing continuous bijection that is affine on $[0,\tfrac12]$ and on $[\tfrac12,1]$ with $\phi(\tfrac12)=v$. Since $\alpha$ and $\beta$ are increasing reparametrisations of $\gamma|_{[u,v]}$ and $\gamma|_{[v,w]}$, [L3] and [L4] give $\int_{\gamma|_{[u,w]}}f\,dz=\int_{\gamma|_{[u,v]}}f\,dz+\int_{\gamma|_{[v,w]}}f\,dz$. [given, L1, L2, L3, L4]

1.4 For each $i<r$, [L6] applied to the constant $f(\gamma(\xi_i))$ on $\gamma_i$ gives $\int_{\gamma_i}f(\gamma(\xi_i))\,dz=f(\gamma(\xi_i))\bigl(\gamma(t_{i+1})-\gamma(t_i)\bigr)$. [L6]

2.1 Applying step 1.3 at $t_1$, then to $\gamma|_{[t_1,b]}$ at $t_2$, and so on, an induction on the number of partition points ([L12]) gives $\int_\gamma f\,dz=\sum_{i<r}\int_{\gamma_i}f\,dz$. [step 1.3, L12]

2.2 Fix $i<r$. The tag value $\gamma(\xi_i)$ lies on the trace of $\gamma_i$, so $|f(z)-f(\gamma(\xi_i))|\le\omega_i$ for every $z$ on that trace by the definition of $\omega_i$ in step 1.2; by [L5] the difference $\int_{\gamma_i}f\,dz-\int_{\gamma_i}f(\gamma(\xi_i))\,dz$ equals $\int_{\gamma_i}\bigl(f(z)-f(\gamma(\xi_i))\bigr)dz$, and [L7] bounds its modulus by $\omega_i L(\gamma_i)$. [step 1.2, step 1.4, L5, L7]

3.1 Subtracting the identity of step 1.4 from that of step 2.1 termwise, the quantity to be estimated is $\sum_{i<r}\bigl(\int_{\gamma_i}f\,dz-f(\gamma(\xi_i))(\gamma(t_{i+1})-\gamma(t_i))\bigr)$; the finite triangle inequality, obtained from [L10] by induction ([L12]), and then [L11] with the bounds of step 2.2, give the stated estimate $\sum_{i<r}\omega_i L(\gamma_i)$. [step 2.1, step 2.2, L10, L11, L12]

4.1 If $|f(u)-f(v)|\le\omega$ for all $u,v\in\gamma^\ast$ then $\omega_i\le\omega$ for every $i<r$, so step 3.1 and [L11] bound the error by $\omega\sum_{i<r}L(\gamma_i)$, which is $\omega L(\gamma)$ by step 1.1; and on a singleton interval $[a,a]$ the integral is $0$ and there is no partition, so the assertion made there is the stated one about the empty sum. [step 1.1, step 3.1, L11] ∎
