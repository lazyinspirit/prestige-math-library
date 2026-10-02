---
id: ex-linear-system-poles-at-one-point
kind: example
title: "A pencil of functions with poles at one point defines a finite map to the projective line"
status: draft
origin: pipeline
deps:
  - cor-existence-rational-function-bounded-pole
  - cor-smooth-proper-curve-finite-map-projective-line
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-base-point-linear-system
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-relative-projective-space-standard-charts
  - def-riemann-roch-space-of-divisor
  - lem-function-with-poles-defines-map-p1
  - lem-projective-line-divisors-classified-by-degree
  - thm-base-point-free-linear-system-morphism
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Ch. 18.5 and Ch. 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice inherited from the current bounded-pole, linear-system and finite-map suppliers.

Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$, and let $f\in k(C)^{\times}$ be a nonconstant rational function whose
poles all lie at a single closed point $p$, of order $m\ge1$; thus
$$(f)_\infty=m[p]$$
is the pole divisor of $f$, and $f\in L(np)$ for every $n\ge m$ — the case
"all poles at $p$, of order at most $n$" of the scaffold. Write
$D_0:=(f)_\infty=m[p]$. Then:

1. $1$ and $f$ are linearly independent elements of $L(np)$ for every
   $n\ge m$, hence also of $L(D_0)$.
2. In the space $L(D_0)$ the subspace $V_0=k\cdot1+k\cdot f$ is
   two-dimensional and base-point-free: the section $s_f$ of $\mathcal O_C(D_0)$ has unit
   coefficient in a local trivialization at $p$, and $s_1$ has unit coefficient
   at every point away from $p$. The morphism
   $\varphi_{V_0}:C\to\mathbb P^1_k$ attached to $V_0$ by
   [[thm-base-point-free-linear-system-morphism]] is exactly the finite
   morphism $\varphi_f$ of
   [[lem-function-with-poles-defines-map-p1]], of degree $[k(C):k(f)]$ and
   with fibre over infinity equal to the pole divisor $(f)_\infty$.
3. For $n>m$ the same two elements $1,f$ in the larger space $L(np)$ are
   **not** base-point-free: since
   $\operatorname{div}(1)+np=np$ and
   $\operatorname{div}(f)+np=(f)_0+(n-m)p$, the point $p$ lies in both
   divisors, so $p$ is a base point. Among the divisors $np\ge(f)_\infty$
   the base-point-free hypothesis therefore holds exactly at the pole divisor
   $D_0$ ($n=m$).
4. On the projective line, with coordinate $t$ and $D=[\infty]=(t)_\infty$,
   the pair $1,t$ inside $L([\infty])$ is base-point-free and the attached
   morphism is $[1:t]$, the identity of $\mathbb P^1_k$: it is finite of
   degree one with fibre over infinity the single point $[\infty]$. For
   $n\ge2$ the same pair inside $L(n[\infty])$ has base point $\infty$
   (the two divisors $n[\infty]$ and $[0]+(n-1)[\infty]$ both contain
   $\infty$), so no morphism is attached there; the identity is attached to
   the pole divisor $[\infty]$.
5. The morphism attached to a base-point-free subspace of $L(D)$ depends on
   the subspace and not only on $D$: on $\mathbb P^1_k$ with $D=2[\infty]$
   the pencils $V_1=k\cdot1+k\cdot t^2$ and $V_2=k\cdot1+k\cdot(t^2+t)$ are
   both base-point-free subspaces of the same $L(2[\infty])$, and the
   attached morphisms satisfy $\varphi_{V_1}^{\sharp}(t)=t^2$ and
   $\varphi_{V_2}^{\sharp}(t)=t^2+t$; no fractional linear transformation
   $M(u)=\frac{au+b}{cu+d}$ satisfies $M(t^2)=t^2+t$, so the two morphisms
   are not related by the projective-linear action of $\mathrm{PGL}_2(k)$ on
   the target and are genuinely different.
6. By [[cor-existence-rational-function-bounded-pole]], for every closed
   point $p$ of residue degree $d$ and every $n\ge1$ with $nd+1-g\ge2$ a
   nonconstant $f\in L(np)$ of exactly this kind exists, so the construction
   is nonempty. The simplest instance is $C=\mathbb P^1_k$ with $f=t$, whose
   only pole is at infinity and for which $\varphi_f$ is the identity; this
   realizes the construction of
   [[cor-smooth-proper-curve-finite-map-projective-line]] in the case where
   the only pole is at infinity.

*Scaffold repair, recorded for the owner.* The frozen scaffold claimed that
$1$ and $f$ span a base-point-free subspace of $L(np)$ for a pole order "at
most $n$", and that "the same two sections, viewed inside the larger space
$L(n[\infty])$, define the same morphism". Both clauses are false when the
pole order $m$ at $p$ is strictly smaller than $n$, and false on
$\mathbb P^1_k$ for $n\ge2$: in $L(np)$ both
$\operatorname{div}(1)+np=np$ and
$\operatorname{div}(f)+np=(f)_0+(n-m)p$ contain $p$, so $p$ is a base point
and the hypothesis of the base-point-free morphism theorem fails. The repair
keeps every promised object — the two sections, the two-dimensional subspace,
the identification of its morphism with $\varphi_f$, the projective-line
identity at $D=[\infty]$, and the dependence of the morphism on the chosen
subspace rather than on $D$ alone — and states base-point-freeness at the
correct divisor, the pole divisor $(f)_\infty$; the enlarged divisors are
handled as the base-point case in item 3.

The current
[[cor-existence-rational-function-bounded-pole]] supplies the nonconstant
function in the existence clause. The Riemann-Roch-space and base-point-free
interfaces are [[def-riemann-roch-space-of-divisor]],
[[def-base-point-linear-system]] and
[[thm-base-point-free-linear-system-morphism]]. The finite map and its pole
fibre are supplied by [[lem-function-with-poles-defines-map-p1]] and
[[cor-smooth-proper-curve-finite-map-projective-line]].

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current bounded-pole, linear-system and finite-map suppliers; a field $k$, a smooth proper geometrically integral curve $C$ over
$k$, a nonconstant $f\in k(C)^{\times}$ whose poles all lie at a single closed
point $p$, of order $m\ge1$, an integer $n\ge m$, and $D_0=(f)_\infty=m[p]$.

[F1] Curve, orders and pole divisors: closed points of $C$ have order functions $\operatorname{ord}_x$ on $k(C)^{\times}$; a divisor is a finite formal integral combination of closed points; the positive and negative parts of $\operatorname{div}(f)$ are $(f)_0$ and $(f)_\infty$, and $\operatorname{div}(f)=(f)_0-(f)_\infty$ ([[def-algebraic-curve-over-field]], [[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]]).

[F2] The Riemann-Roch space: $L(D)=\{g\in k(C)^\times:\operatorname{div}(g)+D\ge0\}\cup\{0\}$ is a $k$-subspace of $k(C)$, characterized coefficientwise by $\operatorname{ord}_x(g)+n_x\ge0$; the promised section dictionary identifies $L(D)=H^0(C,\mathcal O_C(D))$ and attaches to $g\in L(D)$ the section $s_g$ with $\operatorname{div}(s_g)=\operatorname{div}(g)+D$, so that the ratio $s_{g_1}/s_{g_0}$ of two sections of $\mathcal O_C(D)$ is the rational function $g_1/g_0$ ([[def-riemann-roch-space-of-divisor]]).

[F3] Base points: a closed point $x$ is a base point of a subspace $V\subseteq L(D)$ when every nonzero $g\in V$ has $x$ in the support of $\operatorname{div}(g)+D$, and $V$ is base-point-free when it has no base point; the base-point-free condition is exactly the surjectivity of the evaluation morphism of any basis ([[def-base-point-linear-system]]).

[F4] The base-point-free morphism: a base-point-free subspace $V\subseteq L(D)$ of dimension $r+1\ge1$ carries a $k$-morphism $\varphi_V:C\to\mathbb P^r_k$, well defined up to the projective-linear action of $\mathrm{PGL}_{r+1}(k)$ on the target, with $\mathcal O_C(D)\cong\varphi_V^*\mathcal O(1)$ under which the coordinate sections pull back to the sections of $V$ (in particular $\varphi_V^{\sharp}(x_1/x_0)=s_1/s_0$ for a chosen basis $s_0,s_1$ when $r=1$); conversely, a morphism $\varphi:C\to\mathbb P^r_k$ together with an isomorphism $\alpha:\varphi^*\mathcal O(1)\to\mathcal O_C(D)$ has base-point-free span $V_\varphi\ni\alpha(\varphi^*x_i)$, and the morphism attached to the data is $\varphi$ ([[thm-base-point-free-linear-system-morphism]]).

[F5] The morphism of a nonconstant function: a nonconstant $f\in k(C)^\times$ defines a finite locally free $k$-morphism $\varphi_f:C\to\mathbb P^1_k$ with $\varphi_f^{\sharp}(t)=f$, of degree $[k(C):k(f)]\ge1$, whose fibre over infinity is the pole divisor $(f)_\infty$; and with $A=(f)_\infty$ one has $\mathcal O_C(A)\cong\varphi_f^*\mathcal O(1)$ ([[lem-function-with-poles-defines-map-p1]], [[cor-smooth-proper-curve-finite-map-projective-line]]).

[F6] The projective line: $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$ with affine coordinate $t=x_1/x_0$, origin $[1:0]$ and point at infinity $\infty=[0:1]=V(x_0)$; the coordinate section $x_0$ of $\mathcal O(1)$ satisfies $\operatorname{div}(x_0)=[\infty]$ and $\mathcal O(1)\cong\mathcal O([\infty])$ with $\deg_k\mathcal O(1)=1$, while $\operatorname{div}(x_1)=[\,[1:0]\,]$ ([[lem-projective-line-divisors-classified-by-degree]], [[def-relative-projective-space-standard-charts]]).

[F7] Existence of functions with a bounded single pole: for every closed point $p$ of residue degree $d=[\kappa(p):k]\ge1$ and every $n\ge1$ with $nd+1-g\ge2$ there is a nonconstant $f\in L(np)$, every pole of which lies at $p$ with order at most $n$ ([[cor-existence-rational-function-bounded-pole]]).

[F8] The Axiom of Choice is available and is inherited only through the suppliers of [F2], [F4], [F5] and [F7]; the example selects nothing beyond the given curve, point and function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** compute the two divisors $\operatorname{div}(1)+D$ and $\operatorname{div}(f)+D$ for $D=(f)_\infty$ and for the larger $np$, apply the base-point-free morphism theorem and its converse, and carry out the two explicit projective-line computations.

1.1 The two sections and their divisors. Since $f$ is nonconstant, $1$ and $f$ are linearly independent in $k(C)$; since $f\in L(np)$ and $1\in L(np)$ for $n\ge m$ by [F2] (as $\operatorname{div}(f)+np\ge0$ and $np\ge0$), they span a two-dimensional subspace of $L(np)$ and of $L(D_0)$. By [F1] the pole divisor of $f$ is $(f)_\infty=m[p]$ with $m\ge1$, and the divisor attached to $1$ and $f$ in $L(np)$ is $\operatorname{div}(1)+np=np$ and $\operatorname{div}(f)+np=(f)_0-m[p]+n[p]=(f)_0+(n-m)[p]$. [F1, F2]

1.2 The same divisor with two different subspaces. On $\mathbb P^1_k$ let $D=2[\infty]$. The two subspaces $V_1=k\cdot1+k\cdot t^2$ and $V_2=k\cdot1+k\cdot(t^2+t)$ of the single space $L(2[\infty])$ are two-dimensional. Both are base-point-free: by [F2] and [F6], $\operatorname{div}(1)+2[\infty]=2[\infty]$ and $\operatorname{div}(t^2)+2[\infty]=2[0]$, and $\operatorname{div}(t^2+t)+2[\infty]=[0]+[-1]$ (as $\operatorname{div}(t^2+t)=[0]+[-1]-2[\infty]$), so in each pair the constant $1$ is a unit away from infinity and the second section is a unit at infinity; by [F3] there is no base point. By [F4] each subspace attaches a morphism $C\to\mathbb P^1_k$, and the pullback of the coordinate is the ratio of the two basis sections: $\varphi_{V_1}^{\sharp}(t)=t^2$ and $\varphi_{V_2}^{\sharp}(t)=t^2+t$. If the two morphisms were related by the projective-linear action of $\mathrm{PGL}_2(k)$ on the target, some $M(u)=\frac{au+b}{cu+d}$ would satisfy $M(t^2)=t^2+t$; clearing denominators, $at^2+b=(t^2+t)(ct^2+d)=ct^4+ct^3+dt^2+dt$, so comparing coefficients gives $c=0$, then $d=0$, then $a=b=0$, contradicting that $M$ is invertible. Hence $\varphi_{V_1}$ and $\varphi_{V_2}$ are not related by the target action: the morphism attached to a base-point-free subspace of $L(D)$ depends on the subspace, not only on $D$. [F2, F3, F4, F6]

2.1 Base-point-freeness at the pole divisor. Take $n=m$ and $D_0=m[p]$. By step 1.1, $\operatorname{div}(f)+D_0=(f)_0$, which does not contain $p$, so the section $f$ does not vanish at $p$; and $\operatorname{div}(1)+D_0=D_0=m[p]$ is supported at $p$, so the constant section $1$ does not vanish at any other point. By [F3] no point of $C$ lies in both divisors, so $V_0=k\cdot1+k\cdot f\subseteq L(D_0)$ is base-point-free of dimension two. [F2, F3, step 1.1]

3.1 The attached morphism is $\varphi_f$. By [F5] there is a finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ with $\varphi_f^{\sharp}(t)=f$, of degree $[k(C):k(f)]$, whose fibre over infinity is $(f)_\infty$, and an isomorphism $\mathcal O_C(D_0)\cong\varphi_f^*\mathcal O(1)$. Under the section dictionary [F2] the pullbacks $\varphi_f^*x_0$ and $\varphi_f^*x_1$ correspond to the rational functions $1$ and $f$, whose span is $V_0$; the converse clause of [F4], applied with $r=1$, $D=D_0$ and that isomorphism, gives that $V_0$ is base-point-free — recovering step 2.1 — and that the morphism attached to the data $(\mathcal O_C(D_0);1,f)$ is $\varphi_f$. Hence $\varphi_{V_0}=\varphi_f$, so $\varphi_{V_0}$ is finite of degree $[k(C):k(f)]$ with fibre over infinity equal to $(f)_\infty$. [F2, F4, F5, step 2.1]

3.2 The enlarged divisors have the base point $p$. Let $n>m$. By step 1.1 both $\operatorname{div}(1)+np=np$ and $\operatorname{div}(f)+np=(f)_0+(n-m)p$ contain $p$, since $n\ge1$ and $n-m\ge1$; by [F3] the point $p$ is a base point of $k\cdot1+k\cdot f\subseteq L(np)$, so the hypothesis of [F4] fails and no morphism is attached. Together with step 2.1 this shows that among the divisors $np\ge(f)_\infty$ the pair $1,f$ is base-point-free exactly at the pole divisor $D_0=(f)_\infty$ ($n=m$). [F2, F3, F4, step 1.1]

4.1 The projective-line identity. Let $C=\mathbb P^1_k$ and $f=t$, so that $(t)_\infty=[\infty]=D_0$ by [F6] (the coordinate section $x_0$ has divisor $[\infty]$). By step 3.1 the attached morphism $\varphi_{V_0}$ is $\varphi_t$, finite of degree $[k(\mathbb P^1_k):k(t)]=1$ with fibre over infinity the single point $[\infty]$; and the converse clause of [F4], applied with $\varphi=\mathrm{id}_{\mathbb P^1}$, $D=[\infty]$ and the isomorphism $\mathcal O(1)\cong\mathcal O([\infty])$ of [F6] carrying $x_0\mapsto s_1$ and $x_1\mapsto s_t$ (matching divisors $[\infty]$ and $[0]$ by [F2]), shows that the morphism attached to the data $(\mathcal O([\infty]);1,t)$ is the identity $[1:t]$. For $n\ge2$, the same two elements of $L(n[\infty])$ have $\operatorname{div}(1)+n[\infty]=n[\infty]$ and $\operatorname{div}(t)+n[\infty]=[0]+(n-1)[\infty]$, both containing $\infty$, so by [F3] $\infty$ is a base point of $k\cdot1+k\cdot t\subseteq L(n[\infty])$ and no morphism is attached to the larger system. [F2, F3, F4, F6, step 3.1]

5.1 Realization and conclusion. By [F7] the example is nonempty: for every closed point $p$ of residue degree $d$ and every $n\ge1$ with $nd+1-g\ge2$ there is a nonconstant $f\in L(np)$ with all poles at $p$ of order at most $n$, and the construction above attaches to the pole divisor $(f)_\infty$ the base-point-free pencil $k\cdot1+k\cdot f$ with morphism exactly $\varphi_f$; on $\mathbb P^1_k$ the case $f=t$ is the simplest instance, in which the only pole is at infinity and $\varphi_f$ is the identity. This realizes the construction of [[cor-smooth-proper-curve-finite-map-projective-line]] in the single-pole case. The Axiom of Choice declared in [F8] is inherited only through the suppliers of [F2], [F4], [F5] and [F7], and nothing is selected beyond the given curve, point and function. [F5, F7, F8, step 3.1, step 4.1] ∎
