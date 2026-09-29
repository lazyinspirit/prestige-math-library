---
id: ex-line-bundle-map-conic-veronese
kind: example
title: "The conic map from O(2)"
status: published
origin: pipeline
deps:
  - thm-veronese-pullback-twist
  - thm-line-bundle-sections-define-projective-map
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - def-relative-projective-space-standard-charts
  - def-very-ample-invertible-sheaf-relative
  - def-globally-generated-sheaf
  - def-locally-closed-immersion
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Let $k$ be a field and let $\mathbb P^1_k$ have homogeneous coordinates
$x_0,x_1$, with twisting sheaf $\mathcal O(2)=\mathcal O(1)^{\otimes2}$
([[def-very-ample-invertible-sheaf-relative]]). Then:

1. the three global sections $x_0^2,\;x_0x_1,\;x_1^2$ generate
   $\mathcal O(2)$ ([[def-globally-generated-sheaf]]) and define a closed
   immersion
   $$\nu_2:\mathbb P^1_k\longrightarrow\mathbb P^2_k,\qquad [x_0:x_1]\longmapsto[x_0^2:x_0x_1:x_1^2],$$
   the degree-two Veronese, with $\nu_2^*\mathcal O(1)\cong\mathcal O(2)$
   ([[thm-veronese-pullback-twist]]);
2. the image of $\nu_2$ is the plane conic
   $$V_+(Z_0Z_2-Z_1^2)\subseteq\mathbb P^2_k,$$
   where $Z_0,Z_1,Z_2$ are the target coordinates; on the chart $Z_0\neq0$ the
   map is $[1:x_1/x_0]\mapsto[1:x_1/x_0:(x_1/x_0)^2]$, so $\nu_2$ identifies
   $\mathbb P^1_k$ with that conic;
3. since $\nu_2$ is a closed immersion, the scheme-theoretic image of $\nu_2$
   is exactly the conic $V_+(Z_0Z_2-Z_1^2)$.

The computation is valid over an arbitrary field, with no restriction on the
characteristic: the conic equation $Z_0Z_2-Z_1^2$ and the kernel computations
below are polynomial identities with integer coefficients.

## Facts & Assumptions

**Given:** A field $k$, the projective line $\mathbb P^1_k$ with coordinates $x_0,x_1$ and twisting sheaf $\mathcal O(2)$, the projective plane $\mathbb P^2_k$ with coordinates $Z_0,Z_1,Z_2$ and twisting sheaf $\mathcal O(1)$, and the Axiom of Choice as inherited from the projective-space and sheaf constructions.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] (Veronese in degrees $n=1$, $d=2$.) The monomial sections $s_{(2,0)}=x_0^2$, $s_{(1,1)}=x_0x_1$, $s_{(0,2)}=x_1^2$ generate $\mathcal O(2)$, and the associated morphism $\nu_2:\mathbb P^1_k\to\mathbb P^2_k$ is a closed immersion with $\nu_2^*\mathcal O(1)\cong\mathcal O(2)$ carrying the target coordinate $y_m$ to $s_m$; here $N=\binom{1+2}{2}-1=2$. ([[thm-veronese-pullback-twist]])

[F2] For a morphism $\varphi$ attached to generating sections $t_m$ of an invertible sheaf: $\varphi^{-1}(D_+(y_m))=X_{t_m}$ and, on the chart where $t_{m_0}$ is a trivialising section, the chart coordinates satisfy $(y_m/y_{m_0})\circ\varphi=t_m/t_{m_0}$. In particular, if $\varphi^*y_m=t_m$ for all $m$ then the ratios of the sections are the ratios of their pullbacks. ([[thm-line-bundle-sections-define-projective-map]], [[thm-veronese-pullback-twist]])

[F3] On the standard chart $U_i=D_+(x_i)$ of $\mathbb P^1_k$ the sheaf $\mathcal O(1)$ has frame $x_i$, so $\mathcal O(2)$ has frame $x_i^2$, the section $x_i$ is a unit on $U_i$, and $X_{x_i}=U_i$; the charts $U_0,U_1$ are $\operatorname{Spec}k[x^{(0)}_1]$ and $\operatorname{Spec}k[x^{(1)}_0]$ with $x^{(0)}_1=x_1/x_0$ and $x^{(1)}_0=x_0/x_1$ on the overlap. The standard charts of $\mathbb P^2_k$ are the three affine planes $\operatorname{Spec}k[Z_1/Z_0,Z_2/Z_0]$, $\operatorname{Spec}k[Z_0/Z_1,Z_2/Z_1]$, $\operatorname{Spec}k[Z_0/Z_2,Z_1/Z_2]$. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]])

[F4] For a commutative ring $A$, an integer $n\ge0$, $B=A[x_0,\dots,x_n]$ and a homogeneous ideal $I\subseteq B$, the closed subscheme $V_+(I)\hookrightarrow\mathbb P^n_A$ has $V_+(I)\cap D_+(x_i)=\operatorname{Spec}(B_{(x_i)}/I_{(x_i)})$; every closed subscheme of $\mathbb P^n_A$ is recovered from its chart ideals, and $V_+(I)=V_+(J)$ as closed subschemes exactly when $I$ and $J$ have the same saturation. ([[thm-closed-subschemes-projective-space-homogeneous-ideals]])

[F5] Kernel computations over a field $k$: the $k$-algebra homomorphism $k[u,v]\to k[t]$ with $u\mapsto t$, $v\mapsto t^2$ has kernel $(v-u^2)$, because $k[u,v]/(v-u^2)\cong k[u]$ via elimination of $v$ and $k[u]\to k[t]$, $u\mapsto t$, is injective; the homomorphism $k[u,v]\to k[t,t^{-1}]$ with $u\mapsto t^{-1}$, $v\mapsto t$ has kernel $(uv-1)$ by the same elimination, using $k[u,v]/(uv-1)\cong k[u,u^{-1}]$; and the homomorphism $k[a,b]\to k[t^{-1}]$ with $a\mapsto t^{-2}$, $b\mapsto t^{-1}$ has kernel $(a-b^2)$. [algebra]

[F6] A morphism of affine schemes whose associated ring map is surjective with kernel $K$ has image the closed subscheme $\operatorname{Spec}\bigl(k[u,v]/K\bigr)$, and a closed immersion is in particular injective, so its image is the closed subscheme it defines. ([[thm-closed-subschemes-projective-space-homogeneous-ideals]], [[def-locally-closed-immersion]])

## Verification

**Proof technique:** direct: invoke the Veronese theorem in degree two on the projective line, read the chart formulas for the ratios of the monomial sections, compute the chart rings of the conic $Z_0Z_2-Z_1^2$, and compare them with the chartwise images of the morphism.

1.1 The monomials and the morphism. Put $M=\{(2,0),(1,1),(0,2)\}$, so $|M|=3=\binom{1+2}{2}$ and $N=2$, and set $s_m=x^m$. By [F1] the sections $s_{(2,0)}=x_0^2$, $s_{(1,1)}=x_0x_1$, $s_{(0,2)}=x_1^2$ generate the invertible sheaf $\mathcal O(2)$, and $\nu_2:\mathbb P^1_k\to\mathbb P^2_k$ is a closed immersion with $\nu_2^*\mathcal O(1)\cong\mathcal O(2)$, carrying the target coordinate $y_m$ to $s_m$; write $Z_0=y_{(2,0)}$, $Z_1=y_{(1,1)}$, $Z_2=y_{(0,2)}$. [F1, F3]

1.2 The chart formulas for $\nu_2$. On $U_0=D_+(x_0)$ the section $s_{(2,0)}=x_0^2$ is a frame of $\mathcal O(2)$ by [F3], and by [F2] $\nu_2^{-1}(D_+(Z_0))=X_{s_{(2,0)}}=U_0$, with $(Z_1/Z_0)\circ\nu_2=s_{(1,1)}/s_{(2,0)}=x_1/x_0$ and $(Z_2/Z_0)\circ\nu_2=s_{(0,2)}/s_{(2,0)}=(x_1/x_0)^2$ on $U_0$. Symmetrically on $U_1=D_+(x_1)$ one has $\nu_2^{-1}(D_+(Z_2))=U_1$, $(Z_0/Z_2)\circ\nu_2=(x_0/x_1)^2$ and $(Z_1/Z_2)\circ\nu_2=x_0/x_1$, while on the overlap $U_0\cap U_1=X_{s_{(1,1)}}$ one has $(Z_0/Z_1)\circ\nu_2=x_0/x_1$ and $(Z_2/Z_1)\circ\nu_2=x_1/x_0$. In particular, on the chart $Z_0\neq0$ the morphism sends a point with coordinate $u=x_1/x_0$ to $[1:u:u^2]$, which is the displayed formula $[x_0:x_1]\mapsto[x_0^2:x_0x_1:x_1^2]$. [F1, F2, F3, algebra]

1.3 The conic and its chart rings. Let $F=Z_0Z_2-Z_1^2\in k[Z_0,Z_1,Z_2]$, homogeneous of degree $2$. By [F4] the closed subscheme $V_+(F)\subseteq\mathbb P^2_k$ has chart ideals generated by the dehomogenisations: $(F)_{(Z_0)}=(Z_2/Z_0-(Z_1/Z_0)^2)$, $(F)_{(Z_1)}=((Z_0/Z_1)(Z_2/Z_1)-1)$ and $(F)_{(Z_2)}=(Z_0/Z_2-(Z_1/Z_2)^2)$, so its chart rings are $k[u,v]/(v-u^2)$ with $u=Z_1/Z_0$, $v=Z_2/Z_0$; $k[u,v]/(uv-1)$ with $u=Z_0/Z_1$, $v=Z_2/Z_1$; and $k[a,b]/(a-b^2)$ with $a=Z_0/Z_2$, $b=Z_1/Z_2$. [F4, algebra]

2.1 The image on each target chart. On $D_+(Z_0)$ the morphism $\nu_2$ restricts on $U_0$ to the morphism corresponding to the $k$-algebra map $k[u,v]\to k[t]$, $u\mapsto x_1/x_0=t$, $v\mapsto t^2$ by step 1.2, whose kernel is $(v-u^2)$ by [F5]; hence the image of $U_0$ is the closed subscheme cut out by $v-u^2$, which is exactly $V_+(F)\cap D_+(Z_0)$ by step 1.3, and $U_0\to V_+(F)\cap D_+(Z_0)$ is an isomorphism. On $D_+(Z_1)$ the restriction corresponds on $U_0\cap U_1$ to $k[u,v]\to k[t,t^{-1}]$, $u\mapsto t^{-1}$, $v\mapsto t$, with kernel $(uv-1)$; on $D_+(Z_2)$ the restriction corresponds on $U_1$ to $k[a,b]\to k[t^{-1}]$, $a\mapsto t^{-2}$, $b\mapsto t^{-1}$, with kernel $(a-b^2)$. In each case the image chart is the corresponding chart of $V_+(F)$ from step 1.3 and the restriction is an isomorphism onto it. [F5, F6, step 1.2, step 1.3, algebra]

3.1 The image is the conic. The morphism $\nu_2$ is a closed immersion by [F1], so its image is a closed subscheme $Z\subseteq\mathbb P^2_k$; by [F4] such a closed subscheme is recovered from its chart ideals. Step 2.1 computes the chart of $Z$ over each of $D_+(Z_0)$, $D_+(Z_1)$, $D_+(Z_2)$ to be the corresponding chart of $V_+(F)$ computed in step 1.3, so $Z=V_+(Z_0Z_2-Z_1^2)$: the image of the Veronese $\nu_2$ is exactly the conic $Z_0Z_2=Z_1^2$, and $\nu_2$ identifies $\mathbb P^1_k$ with it. [F1, F4, step 1.3, step 2.1]

4.1 Conclusion. Steps 1.1 and 1.2 show that the global sections $x_0^2,x_0x_1,x_1^2$ generate $\mathcal O(2)$ and define the degree-two Veronese closed immersion $[x_0:x_1]\mapsto[x_0^2:x_0x_1:x_1^2]$ with $\nu_2^*\mathcal O(1)\cong\mathcal O(2)$, and steps 1.3 to 3.1 identify its image, hence its scheme-theoretic image, with the conic $Z_0Z_2-Z_1^2=0$. No division by $2$ or by any other nonzero scalar occurs: the quadratic equation is integral and the kernels $(v-u^2)$, $(uv-1)$, $(a-b^2)$ of [F5] are computed by elimination of a variable in every characteristic, so the verification is uniform, including characteristic two. The Axiom of Choice [A1] is inherited from the Veronese and projective-space suppliers; the only objects chosen are the three monomials and the three target charts, so no choice is made here. [A1, F1, F5, step 1.2, step 3.1, cases: characteristic two and general characteristic]
\qed
