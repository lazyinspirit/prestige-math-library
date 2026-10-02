---
id: ex-basepoint-linear-system
kind: example
title: "A linear system with and without a base point"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-morphisms-equal-on-dense-open-reduced-source
  - def-axiom-of-choice
  - def-base-point-linear-system
  - def-complete-linear-system
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-order-codimension-one-rational-function
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-relative-projective-space-standard-charts
  - def-riemann-roch-space-of-divisor
  - ex-projective-line-divisors-linear-systems
  - thm-base-point-free-linear-system-morphism
  - thm-line-bundle-sections-define-projective-map
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
generation:
  role: example
verification:
  audited: 2026-10-02
---

## Example

Assume the Axiom of Choice as inherited from the projective-space
constructions ([[def-axiom-of-choice]]). On $\mathbb P^1_k$ with coordinate $t$
and $D=2[\infty]$
([[def-projective-line-two-affine-cover-and-twisting-sheaf]],
[[def-divisor-smooth-proper-curve]]), put
$$V=\operatorname{span}(1,t^2)\subseteq L(D),\qquad W=\operatorname{span}(t,t^2)\subseteq L(D).$$
Both are two-dimensional subspaces of $L(D)$
([[def-riemann-roch-space-of-divisor]]), so base-point-freeness is a property
of the chosen subsystem and not of its degree. The subspace $V$ is
base-point-free and defines the degree-two morphism
$\varphi_V:\mathbb P^1_k\to\mathbb P^1_k$, $[1:t]\mapsto[1:t^2]$; the subspace
$W$ has $t=0$ as its unique base point, and its associated rational map is
$[t:t^2]=[1:t]$ on $\mathbb P^1_k\smallsetminus\{0\}$,
which extends to the identity morphism of $\mathbb P^1_k$. The pair $(t,t^2)$
does not generate $\mathcal O(D)$ at its base point, so the base-point-free
construction for this line bundle does not apply to that pair. In the
set identification $|D|\cong P(L(D))\cong\mathbb P^2_k(k)$ of
[[ex-projective-line-divisors-linear-systems]], use coordinates $(a,b,c)$ for
$a+bt+ct^2$. The associated projective parameter scheme is
$\mathbb P(L(D))\cong\mathbb P^2_k$; the intersections below are scheme
intersections in this parameter scheme. If $\operatorname{char}k\ne2$, the discriminant conic
$b^2=4ac$ is smooth, $\mathbb P(W):a=0$ is tangent to it at $2[0]$, and
$\mathbb P(V):b=0$ is the secant through $2[0]$ and $2[\infty]$. If
$\operatorname{char}k=2$, the discriminant scheme is the double line $b^2=0$;
its reduced support $b=0$ is the geometric doubled-divisor locus, and the
coordinate-square map $[T:S]\mapsto[T^2:0:S^2]$ is onto that support as a
morphism. Then $\mathbb P(V)$ is the support line, while $\mathbb P(W)$ meets it at $2[0]$
and meets the double discriminant in a length-two point. Over an imperfect
field, not every $k$-point of the support need come from a $k$-rational doubled
divisor.


## Facts & Assumptions

**Given:** A field $k$, the projective line $\mathbb P^1_k$ with coordinate $t$ on $U_0=\operatorname{Spec}k[t]$, the point at infinity $\infty$ the pole of $t$, the divisor $D=2[\infty]$, and the two subspaces $V=\operatorname{span}(1,t^2)$, $W=\operatorname{span}(t,t^2)$ of $L(D)$.

[F1] On $\mathbb P^1_k$ one has $\operatorname{div}(t)=[0]-[\infty]$ and, for a nonzero polynomial $p$ of degree $m$, $\operatorname{div}(p)=Z(p)-m[\infty]$, where $Z(p)$ is the effective divisor of the affine zeros of $p$; $\deg_k(2[\infty])=2$, and the constant function $1$ has $\operatorname{div}(1)=0$. ([[ex-projective-line-divisors-linear-systems]], [[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]])

[F2] $L(D)=\{f\in k(\mathbb P^1)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$ is the $k$-subspace of rational functions with poles bounded by $D$. ([[def-riemann-roch-space-of-divisor]])

[F3] A nonzero $f\in L(D)$ **vanishes at** a closed point $x$ when $\operatorname{ord}_x(f)+n_x\ge1$, where $n_x$ is the coefficient of $D$ at $x$; $x$ is a **base point** of a subspace $V\subseteq L(D)$ when every nonzero $f\in V$ vanishes at $x$; $V$ is base-point-free when it has no base point, equivalently when the evaluation morphism of a basis of $V$ is surjective. ([[def-base-point-linear-system]])

[F4] A base-point-free subspace $V\subseteq L(D)$ of dimension $r+1\ge1$ determines a $k$-morphism $\varphi_V:\mathbb P^1_k\to\mathbb P^r_k$ with $\varphi_V^*\mathcal O(1)\cong\mathcal O(D)$ under which the coordinate sections pull back to a basis of $V$; for generating sections $s_0,\dots,s_r$ the chart formula $x^{(i)}_j\circ\varphi=s_j/s_i$ holds on the locus where $s_i$ is invertible, and two morphisms to the separated reduced $k$-scheme $\mathbb P^r_k$ agreeing on a dense open are equal. ([[thm-base-point-free-linear-system-morphism]], [[thm-line-bundle-sections-define-projective-map]], [[cor-morphisms-equal-on-dense-open-reduced-source]])

[F5] For $d\ge0$ the complete linear system $|d[\infty]|$ is in bijection with $P(L(d[\infty]))$, the set of $k$-lines in $L(d[\infty])$, and consists of the effective divisors of degree $d$; for $D=2[\infty]$ the associated morphism of the complete system is the degree-two Veronese map $\nu_{1,2}:\mathbb P^1_k\to\mathbb P^2_k$, $[x_0:x_1]\mapsto[x_0^2:x_0x_1:x_1^2]$, and $|D|\cong P(L(D))\cong\mathbb P^2_k(k)$. The projective parameter scheme $\mathbb P(L(D))\cong\mathbb P^2_k$ has this set of $k$-points, with coefficient coordinates $(a,b,c)$ for $a+bt+ct^2$; the inclusions of $V,W$ give projective linear subschemes $\mathbb P(V),\mathbb P(W)$ in it. ([[ex-projective-line-divisors-linear-systems]], [[def-complete-linear-system]])

[F6] The divisor-doubling map in coefficient coordinates is $[T:S]\mapsto[T^2:-2TS:S^2]$ and lies in the discriminant scheme $b^2=4ac$. If $\operatorname{char}k\ne2$, its image is the smooth conic, and its $k$-points are exactly the squares of linear forms up to nonzero scalar. If $\operatorname{char}k=2$, the discriminant scheme is $b^2=0$, a double line with reduced support $b=0$; the doubling map becomes $[T:S]\mapsto[T^2:0:S^2]$ and has that reduced line as its scheme-theoretic image. It is surjective onto the support geometrically, while its image on $k$-points can be smaller over an imperfect field. ([[ex-projective-line-divisors-linear-systems]], [[def-complete-linear-system]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; test the two subspaces against the vanishing criterion, compute their chart maps, and read their pencils off the model of the projective line.

1.1 The two subspaces. By [F1], $\operatorname{div}(1)+2[\infty]=2[\infty]\ge0$, $\operatorname{div}(t)+2[\infty]=[0]+[\infty]\ge0$, $\operatorname{div}(t^2)+2[\infty]=2[0]\ge0$, so $1,t,t^2\in L(2[\infty])$ and $V,W$ are subspaces of $L(D)$; the pairs $(1,t^2)$ and $(t,t^2)$ are linearly independent over $k$, so $\dim_kV=\dim_kW=2$ and $V,W$ are two-dimensional subsystems of the degree-two complete system $|D|$. [F1, F2, F5]

1.2 $V$ is base-point-free and defines $t\mapsto t^2$. Since $\operatorname{div}(1)+2[\infty]=2[\infty]$ is supported at $\infty$, the function $1$ does not vanish at any closed point $x\ne\infty$, so no point other than possibly $\infty$ is a base point of $V$; and since $\operatorname{div}(t^2)+2[\infty]=2[0]$ is supported at the origin, $t^2$ does not vanish at $\infty$, so $\infty$ is not a base point either [F3]. Hence $V$ is base-point-free, and [F4] attaches to $V$ a morphism $\varphi_V:\mathbb P^1_k\to\mathbb P^1_k$ with $\varphi_V^*\mathcal O(1)\cong\mathcal O(D)$, whose coordinate sections pull back to $1,t^2$; on the chart where $1$ is invertible, which is $\mathbb P^1_k\smallsetminus\{\infty\}$, the chart formula gives $\varphi_V([1:t])=[1:t^2]$, the degree-two map $t\mapsto t^2$. [F1, F3, F4]

1.3 $W$ has the base point $0$, but its rational map extends. Every nonzero $f=\alpha t+\beta t^2=t(\alpha+\beta t)\in W$ has $\operatorname{ord}_0(f)\ge1$ while the coefficient of $D$ at $0$ is $n_0=0$, so every such $f$ vanishes at the origin [F3]; and no other point is a base point, since $t$ does not vanish at closed points $x\ne0,\infty$ while $t^2$ does not vanish at $\infty$ [F1, F3]. Hence the base locus of $W$ is exactly $\{0\}$, and its two sections do not generate $\mathcal O(D)$ there, so [F4]'s base-point-free construction does not attach a morphism from this pair with pullback line bundle $\mathcal O(D)$. On the complement of $0$, however, the pair defines $[t:t^2]=[1:t]$, the identity rational map, which extends to the identity morphism of $\mathbb P^1_k$. The rational map extension is unique because morphisms to the separated target $\mathbb P^1_k$ agreeing on a dense open are equal [F4]. [F1, F3, F4]

2.1 The pencil picture in the parameter scheme $\mathbb P(L(D))\cong\mathbb P^2_k$. By [F5], this scheme has coefficient coordinates $(a,b,c)$ for $a+bt+ct^2$, and the subspaces correspond to $\mathbb P(V):b=0$ and $\mathbb P(W):a=0$. The divisor-doubling map of [F6] is $[T:S]\mapsto[T^2:-2TS:S^2]$; its coefficient image satisfies $b^2=4ac$, with $2[0]=(0,0,1)$ and $2[\infty]=(1,0,0)$. If $\operatorname{char}k\ne2$, this is a smooth conic. On $\mathbb P(W)$, $a=0$ forces $b^2=0$, so the intersection is the length-two point $2[0]$ and $\mathbb P(W)$ is tangent there. On $\mathbb P(V)$, $b=0$ forces $ac=0$, giving the two distinct points $2[0]$ and $2[\infty]$; thus $\mathbb P(V)$ is a secant. In this characteristic, a pencil has a base point exactly when its line is tangent to the doubled-divisor conic, consistent with steps 1.2 and 1.3. [F5, F6, step 1.1, step 1.2, step 1.3]

If $\operatorname{char}k=2$, the discriminant scheme is $b^2=0$, the double of the reduced support line $b=0$. The doubling map becomes $[T:S]\mapsto[T^2:0:S^2]$; on either standard affine chart its coordinate map is $w\mapsto w^2$, so it is finite and surjective onto that support as a morphism, although it need not be onto its $k$-points when $k$ is imperfect. Thus $\mathbb P(V)$ is the reduced support of the geometric doubled-divisor locus, while $\mathbb P(W)$ meets that support at $2[0]$. Its intersection with the double discriminant has local ring $k[b]/(b^2)$ at that point and therefore length two. The characteristic-not-two tangent/secant description is not asserted in characteristic two. [F6]

3.1 Conclusion. On $\mathbb P^1_k$ with $D=2[\infty]$, $V=\operatorname{span}(1,t^2)$ is base-point-free and defines $[1:t]\mapsto[1:t^2]$, while $W=\operatorname{span}(t,t^2)$ has the single base point $0$ and its rational map extends to the identity morphism (steps 1.2–1.3). Both subsystems have degree two, so base-point-freeness depends on the chosen subsystem and not its degree. Their pencil geometry is the tangent/secant picture of step 2.1 in characteristic not two; in characteristic two, $\mathbb P(V)$ is the reduced support of the double discriminant and $\mathbb P(W)$ meets the doubled scheme in a length-two point. The Axiom of Choice is inherited from the projective-space constructions of [F4] and [F7], and no further selection is used. [F4, F7, step 1.2, step 1.3, step 2.1] ∎
