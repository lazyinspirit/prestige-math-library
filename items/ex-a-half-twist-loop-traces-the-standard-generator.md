---
id: ex-a-half-twist-loop-traces-the-standard-generator
kind: example
title: "A half-circle configuration loop traces an elementary half twist"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-a-configuration-loop-traces-a-geometric-braid,
       lem-path-homotopy-traces-braid-isotopy,
       def-elementary-geometric-half-twist,
       def-geometric-braid-with-setwise-endpoints,
       def-motion-of-an-unordered-point-configuration,
       def-ordered-configuration-space,
       def-unordered-configuration-space,
       def-product-topology,
       def-subspace-topology-top,
       def-homotopy-relative-and-path-homotopy,
       def-braid-isotopy-relative-top-and-bottom,
       lem-vector-operations-are-continuous-in-a-normed-space,
       thm-complex-exponential-is-entire-with-derivative-itself,
       cor-complex-differentiability-implies-continuity,
       cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       thm-complex-exponential-addition-and-real-extension,
       cor-pi-is-the-first-positive-sine-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §1.5, printed pp. 7–8, Figure 2"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Example

Fix $n\ge2$ and an adjacent index $1\le i<n$. Use the base tuple $Q$, spacing
$h$, and midpoint $m_i$ of [[def-elementary-geometric-half-twist]], and identify
the real disc with the complex disc as in
[[def-motion-of-an-unordered-point-configuration]]. Set
$$v(t):=h\exp\bigl(i\pi(1+t)\bigr),$$
$$x_j(t):=\begin{cases}m_i+v(t),&j=i,\\m_i-v(t),&j=i+1,\\q_j,&j\notin\{i,i+1\},\end{cases}\qquad \alpha_i(t):=[(x_1(t),\ldots,x_n(t))].$$
Then $\alpha_i$ is an interior based loop in
$C_n(\operatorname{int}D^2)$ at $[Q]$, and the geometric braid traced by
$\alpha_i$ is braid-isotopic to the published positive elementary half twist
$\sigma_i$.

## Facts & Assumptions

**Given:** $n\ge2$, $1\le i<n$, the fixed base tuple $Q$, and the published
positive half twist $\sigma_i$ with its midpoint $m_i$, spacing $h$, support
disc $U_i$, and lower diamond path $\rho$.

[L1] The spacing is $h=1/(4(n+1))>0$, and the base points satisfy
$q_i=m_i-(h,0)$ and $q_{i+1}=m_i+(h,0)$; the
support disc $U_i$ has radius $3h/2$, lies in $D^\circ$, and contains exactly
$q_i,q_{i+1}$ ([[def-elementary-geometric-half-twist]]).

[L2] The published positive half twist has coordinates $m_i+\rho(t)$ and
$m_i-\rho(t)$ at labels $i,i+1$, with all other coordinates fixed, and
$$\rho(0)=(-h,0),\quad \rho(1/2)=(0,-h),\quad \rho(1)=(h,0),\quad \lVert\rho(t)\rVert_2\le h,\quad \rho(t)\ne0$$
([[def-elementary-geometric-half-twist]]).

[L3] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and
$|\exp(x+iy)|=e^x$, while $e^{i\pi}=-1$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] For complex $z,w$, $\exp(z+w)=\exp z\exp w$
([[thm-complex-exponential-addition-and-real-extension]]).

[L5] $\sin u>0$ for $0<u<\pi$ ([[cor-pi-is-the-first-positive-sine-zero]]).

[L6] The complex exponential is continuous
([[thm-complex-exponential-is-entire-with-derivative-itself]],
[[cor-complex-differentiability-implies-continuity]]).

[L7] Vector addition and scalar multiplication are continuous in a real or
complex normed space
([[lem-vector-operations-are-continuous-in-a-normed-space]]).

[L8] $F_n(X)$ is the subspace of $X^n$ consisting of tuples with pairwise
distinct coordinates ([[def-ordered-configuration-space]]).

[L9] Continuity into a product with the product topology is checked coordinate
by coordinate ([[def-product-topology]]).

[L10] A map into a subspace is continuous exactly when its composite with the
inclusion into the ambient space is continuous ([[def-subspace-topology-top]]).

[L11] The orbit map $p_n:F_n(X)\to C_n(X)$, $x\mapsto[x]$, is continuous and
its fibres are coordinate-permutation orbits
([[def-unordered-configuration-space]]).

[L12] An interior based motion is a continuous path in
$C_n(\operatorname{int}D^2)$ whose two endpoints equal $[Q]$
([[def-motion-of-an-unordered-point-configuration]]).

[L13] A geometric braid consists of continuous coordinate paths in $D^\circ$
that remain pairwise distinct, start at $Q$, and end with endpoint set $Q$
([[def-geometric-braid-with-setwise-endpoints]]).

[L14] Every based interior configuration loop has a unique ordered lift from
$Q$, and its coordinate paths form its geometric braid trace
([[lem-a-configuration-loop-traces-a-geometric-braid]]).

[L15] A jointly continuous homotopy through based configuration loops has
boundary traces that are braid-isotopic relative to their top and bottom
endpoints ([[lem-path-homotopy-traces-braid-isotopy]]).

[L16] A path homotopy fixes both path endpoints throughout; transposing the
coordinates converts between path parameter first and homotopy parameter
first ([[def-homotopy-relative-and-path-homotopy]]).

[L17] A braid isotopy is a jointly continuous family whose every height slice
is a geometric braid with bottom tuple $Q$ and top endpoint set $Q$
([[def-braid-isotopy-relative-top-and-bottom]]).

**Choice audit:** No Axiom of Choice is assumed. Every coordinate path and the
starting tuple $Q$ are explicitly specified, and no point is selected from a
nonempty product.

## Verification

**Proof technique:** direct.

1.1 *Compute the round relative path.* The addition law [L4] and Euler's identity [L3] give $v(0)=-h$, $v(1)=h$, and $v(t)=-h\exp(i\pi t)$. For $0<t<1$, [L3] and [L5] give $\operatorname{Im}v(t)=-h\sin(\pi t)<0$, since $h>0$ and $0<\pi t<\pi$; the modulus formula gives $|v(t)|=h$. By [L6], $v$ is continuous. The piecewise formula [L2] gives $\operatorname{Im}\rho(t)=-2th<0$ for $0<t\le1/2$ and $\operatorname{Im}\rho(t)=2h(t-1)<0$ for $1/2\le t<1$. [L1, L2, L3, L4, L5, L6]

1.2 *Check the unordered loop.* The coordinates $x_j(t)$ are continuous by [L6], [L7], and [L9]. Their moving pair is distinct because $|v(t)|=h>0$ by [L1] and [L3]. Each moving point is at distance $h$ from $m_i$, so lies in $U_i\subset D^\circ$; every fixed $q_j$ lies in $D^\circ$ and, for $j\notin\{i,i+1\}$, outside $U_i$ by [L1]. The tuple therefore lies in $F_n(D^\circ)$ by [L8], and [L10] makes it continuous into that subspace. Its orbit is continuous by [L11]. Since $v(0)=-h$ and $v(1)=h$, the ordered tuple starts at $Q$ and ends with $q_i,q_{i+1}$ exchanged; both orbit endpoints are $[Q]$. Thus $\alpha_i$ is an interior based loop by [L12]. [L1, L3, L6, L7, L8, L9, L10, L11, L12]

2.1 *Interpolate in the lower half-plane.* Set $w_s(t):=(1-s)\rho(t)+s v(t)$ for $s,t\in I$. This is jointly continuous by [L6], [L7], and [L9]. For $0<t<1$, both imaginary parts are strictly negative by step 1.1, so $w_s(t)\ne0$; at $t=0,1$ the common values are $-h,+h$, also nonzero. The triangle inequality and [L2], [L3] give $|w_s(t)|\le(1-s)|\rho(t)|+s|v(t)|\le h<3h/2$. The tuple with coordinates $x_{s,i}(t)=m_i+w_s(t)$, $x_{s,i+1}(t)=m_i-w_s(t)$, and $x_{s,j}(t)=q_j$ for the other labels stays collision-free and interior: the moving pair is distinct and stays in $U_i$, while all fixed points remain outside $U_i$ by [L1]. Its coordinate maps are continuous, and [L8]–[L10] give a continuous family in the ordered configuration subspace. Each slice is a geometric braid by [L13], and the family is a braid isotopy by [L17], since its bottom tuple is $Q$ and its top set is $Q$ for every $s$. At $s=0$ the braid is $\sigma_i$; at $s=1$ it is the round tuple of step 1.2. [L1, L2, L3, L6, L7, L8, L9, L10, L13, L17, step 1.1, step 1.2]

3.1 *Identify the exact traces.* The ordered family in step 2.1 is continuous into $F_n(D^\circ)$ by [L8]–[L10], so its quotient $H(s,t):=[(x_{s,1}(t),\ldots,x_{s,n}(t))]$ is jointly continuous by [L11]. Its endpoints satisfy $H(s,0)=H(s,1)=[Q]$ for every $s$, and every slice is an interior based motion by [L12]. The transpose $(t,u)\mapsto H(u,t)$ is a path homotopy rel endpoints under [L16]. Thus [L15] makes the traces of the two boundary loops braid-isotopic. By [L14], those traces are exactly $\sigma_i$ and the round tuple; the latter is the trace of $\alpha_i$ by step 1.2. This proves the example. [L8, L9, L10, L11, L12, L14, L15, L16, step 1.2, step 2.1]
∎
