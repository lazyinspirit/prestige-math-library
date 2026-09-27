---
id: def-elementary-geometric-half-twist
kind: definition
title: "The elementary geometric half twist, its support disc, and its opposite"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-geometric-braid-with-setwise-endpoints,
       thm-geometric-braids-form-a-group, def-interval, def-continuous-map-top,
       lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.5, printed pp. 7-8, Figure 2"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.2, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $n\in\mathbb N$ and let $Q=(q_1,\dots,q_n)$ be the base configuration of
[[def-geometric-braid-with-setwise-endpoints]], with $h=\frac{1}{4(n+1)}$ and
$q_j=((2j-n-1)h,0)$. Fix an index $i$ with $1\le i\le n-1$. The two adjacent
base points are

$$q_i=\bigl((2i-n-1)h,0\bigr),\qquad q_{i+1}=\bigl((2i+1-n)h,0\bigr),$$

their **midpoint** is $m_i:=(q_i+q_{i+1})/2=((2i-n)h,0)=q_i+(h,0)$, and their
**support disc** is the open disc

$$U_i:=\bigl\{w\in\mathbb R^2:\lVert w-m_i\rVert_2<\tfrac32h\bigr\}.$$

The support disc contains the two base points $q_i,q_{i+1}$, whose distance from
$m_i$ is $h$, and it contains no other base point: for $k<i$ one has
$\lVert q_k-m_i\rVert_2=(2(i-k)+1)h\ge 3h$ and for $k>i+1$ one has
$\lVert q_k-m_i\rVert_2=(2(k-i)-1)h\ge3h$, both exceeding $\tfrac32h$. Moreover
$U_i\subseteq D^\circ$, because every point of $U_i$ has norm at most
$\lVert m_i\rVert_2+\tfrac32h\le(n-2)h+\tfrac32h<(n+1)h<1$. Finally
$U_i\cap U_j=\varnothing$ whenever $|i-j|>1$, since then the midpoints are at
distance $2|i-j|h\ge4h>3h$, twice the radius.

**The positive half twist.** Define $\rho\colon I\to\mathbb R^2$, the
**anticlockwise diamond path**, by

$$\rho(t):=\begin{cases}\bigl(2th-h,\,-2th\bigr),&0\le t\le \tfrac12,\\[2pt] \bigl(2th-h,\,2th-2h\bigr),&\tfrac12\le t\le1.\end{cases}$$

Thus $\rho(0)=(-h,0)$, $\rho(\tfrac12)=(0,-h)$, $\rho(1)=(h,0)$, and $\rho$ is
continuous, piecewise linear, and satisfies $\lVert\rho(t)\rVert_2\le h$ for all
$t$ with $\rho(t)\neq0$ throughout. The **elementary half twist at $i$**, written
$\sigma_i$, is the tuple of motions

$$(\sigma_i)_i(t):=m_i+\rho(t),\qquad (\sigma_i)_{i+1}(t):=m_i-\rho(t),\qquad (\sigma_i)_k(t):=q_k\ \ (k\notin\{i,i+1\}).$$

It is a braid based at $Q$
([[def-geometric-braid-with-setwise-endpoints]],
[[def-continuous-map-top]]): the two moving points stay in $U_i$ and are
antipodal about $m_i$, so they are distinct; every other point is fixed and lies
outside $U_i$; and the endpoint permutation is the transposition of $i$ and
$i+1$, since $(\sigma_i)_i(1)=m_i+(h,0)=q_{i+1}$ and
$(\sigma_i)_{i+1}(1)=m_i-(h,0)=q_i$.

The words *positive* and *anticlockwise* refer to the fixed orientation of the
plane of the disc and to the fixed planar projection whose horizontal axis
contains $Q$: the moving pair turns through the half turn anticlockwise, the
label $i$ passing below its midpoint and the label $i+1$ above. Together with
the first-under-second stacking convention of
[[prop-stacking-of-geometric-braids-is-well-defined]] this fixes the sign
convention for every signed crossing on this page and its companion.

**The opposite half twist.** The **opposite** (clockwise) half twist at $i$ is
defined by the reflected path

$$\rho^{-}(t):=\bigl(\rho_1(t),-\rho_2(t)\bigr),$$

through the motions $(\sigma_i^{-})_i(t):=m_i+\rho^{-}(t)$,
$(\sigma_i^{-})_{i+1}(t):=m_i-\rho^{-}(t)$ and
$(\sigma_i^{-})_k(t):=q_k$ for $k\notin\{i,i+1\}$. It is again a braid supported
in $U_i$ with endpoint permutation the transposition of $i$ and $i+1$; its pair
turns through the same half turn clockwise, the label $i$ passing above the
midpoint. The two motions are not equal, and they are not related by a
reparametrisation of the height: they are the two signed crossings of the pair.

**The opposite motion is the group inverse.** For a braid $\beta$ the reversed
braid $\overline\beta_j(t)=z_{\pi(\beta)^{-1}(j)}(1-t)$ represents
$[\beta]^{-1}$ in the group $G_n$
([[thm-geometric-braids-form-a-group]]). For $\beta=\sigma_i$ one computes
$\overline{\sigma_i}=\sigma_i^{-}$: reversing the height and relabelling by the
transposition of $i$ and $i+1$ sends $\rho(t)=m_i+(\rho_1,\rho_2)$ to the
motion with relative path $-\rho(1-t)$, which is the reflected path
$\rho^-$ traversed from $t=0$ to $t=1$. Hence

$$[\sigma_i^{-}]=[\sigma_i]^{-1}\qquad\text{in }G_n .$$

**Elementary cases.** For $n\le1$ there is no index $i$ with $1\le i\le n-1$,
and there are no elementary half twists; the assertions above are vacuous. For
$n\ge2$ and $1\le i\le n-1$ both $[\sigma_i]$ and $[\sigma_i^{-}]$ are
nonidentity elements of $G_n$, since their endpoint permutations are
transpositions, which are not the identity permutation.

**Two letters do not commute in general.** For adjacent indices the supports
$U_i$ and $U_{i+1}$ overlap and no commutation is asserted;
[[lem-geometric-far-commutativity]] proves commutativity only for disjoint
supports.
