---
id: lem-the-closed-disk-is-a-manifold-with-boundary
kind: lemma
title: "The closed disk $D^2$ is a connected Hausdorff topological $2$-manifold with boundary"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-topological-manifold-with-boundary,
       def-euclidean-upper-half-space-and-its-boundary,
       def-complex-numbers-and-arithmetic,
       def-complex-metric-convergence-and-continuity,
       thm-rational-points-and-boxes-in-rn,
       lem-t0-t1-and-hausdorff-are-hereditary,
       prop-second-countability-is-hereditary,
       def-hausdorff-space, def-second-countable-space,
       def-subspace-topology-top, def-continuous-map-top,
       lem-vector-operations-are-continuous-in-a-normed-space,
       def-homeomorphism-and-open-maps,
       def-metric-ball, def-metric-topology, def-metric-continuity,
       lem-complex-conjugation-and-modulus-laws,
       cor-convex-subsets-of-rn-are-contractible,
       cor-contractible-spaces-are-path-connected,
       thm-path-connected-implies-connected,
       def-path-connected, def-connected-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ioan Marcut, Manifolds (2017 lecture notes), sections 14.5 and 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, section 2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $D^2=\{z\in\mathbb C:|z|\le1\}$ carry the subspace topology of the metric
topology of $\mathbb C$ ([[def-complex-metric-convergence-and-continuity]])
and let $\mathbb H^2=\{(x,y)\in\mathbb R^2:y\ge0\}$ be the Euclidean upper
half-space ([[def-euclidean-upper-half-space-and-its-boundary]]), identified
with $\{z\in\mathbb C:\operatorname{Im}z\ge0\}$ through $x+iy\mapsto(x,y)$
([[def-complex-numbers-and-arithmetic]]). Then $D^2$ is nonempty and connected,
it is Hausdorff and second countable, and it is a topological $2$-manifold with
boundary ([[def-topological-manifold-with-boundary]]): every point of $D^2$ has
a neighbourhood in $D^2$ homeomorphic to a relatively open subset of
$\mathbb H^2$. Concretely, for $|z|<1$ the translation $\psi(w):=w+2i$ maps the
open neighbourhood $D^2\cap B(z,\tfrac12(1-|z|))$ of $z$ in $D^2$
homeomorphically onto an open subset of $\mathbb R^2$ contained in the open
upper half-plane; and for $|q|=1$ the map
$$\varphi_q(w):=\frac{i(q-w)}{q+w},$$
defined on the open neighbourhood $V_q:=D^2\cap\{w\in\mathbb C:|w-q|<1\}$ of
$q$ in $D^2$, is a homeomorphism of $V_q$ onto an open subset of
$\mathbb H^2$ containing $0$, with inverse $u\mapsto q(i-u)/(i+u)$.

## Facts & Assumptions

**Given:** The closed disk $D^2\subseteq\mathbb C$ with the subspace topology, and the half-space $\mathbb H^2\subseteq\mathbb R^2$.

[F1] Under the identification $\mathbb C=\mathbb R^2$, the metric $d_{\mathbb C}(z,w)=|z-w|$ is exactly the Euclidean metric $d_2$ ([[def-complex-metric-convergence-and-continuity]]); $\mathbb R^2$ is metrizable, hence Hausdorff ([[def-hausdorff-space]]), and its rational open boxes form a countable basis, so $\mathbb R^2$ is second countable ([[thm-rational-points-and-boxes-in-rn]], [[def-second-countable-space]]).

[F2] Hausdorffness and second countability are hereditary properties, so every subspace of a Hausdorff, second countable space has both properties; a subspace carries the subspace topology ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[prop-second-countability-is-hereditary]], [[def-subspace-topology-top]]).

[F3] Modulus is definite, multiplicative and subadditive: $|zw|=|z||w|$, $|z+w|\le|z|+|w|$ and $|z|=0$ only for $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]); complex addition, multiplication and the maps $w\mapsto w+c$ are continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]], [[def-continuous-map-top]]).

[F4] A nonempty convex subset of $\mathbb R^n$, $n\ge1$, is contractible, a nonempty contractible space is path-connected, and a path-connected space is connected ([[cor-convex-subsets-of-rn-are-contractible]], [[cor-contractible-spaces-are-path-connected]], [[thm-path-connected-implies-connected]], [[def-path-connected]], [[def-connected-space]]).

[F5] For a metric space, balls $B(z,r)$ and the metric topology are as in [[def-metric-ball]] and [[def-metric-topology]]; continuity of maps between metric spaces is the $\varepsilon$-$\delta$ condition of [[def-metric-continuity]]. A homeomorphism is a continuous bijection with continuous inverse, and the restriction of a homeomorphism to an open subset is a homeomorphism onto its image ([[def-homeomorphism-and-open-maps]]).

[F6] A topological $n$-manifold with boundary is a Hausdorff, second countable space in which every point has a neighbourhood homeomorphic to a relatively open subset of $\mathbb H^n$ ([[def-topological-manifold-with-boundary]]); under the identification $\mathbb C=\mathbb R^2$ used in [F1], the half-space $\mathbb H^2$ corresponds to $\{z\in\mathbb C:\operatorname{Im}z\ge0\}$, because $z=x+iy$ has coordinates $(x,y)$ ([[def-complex-numbers-and-arithmetic]], [[def-euclidean-upper-half-space-and-its-boundary]]).



## Proof

**Proof technique:** direct.

1.1 *The ambient plane and its subspaces.* By [F1] the metric topology of $\mathbb C$ is the Euclidean topology of $\mathbb R^2$ under $x+iy\mapsto(x,y)$; $\mathbb R^2$ is Hausdorff and second countable with the countable basis of rational open boxes. Since $D^2\subseteq\mathbb C$ carries the subspace topology, [F2] makes $D^2$ Hausdorff and second countable. [F1, F2]

1.2 *$D^2$ is nonempty, convex and connected.* Clearly $0\in D^2$. If $z,w\in D^2$ and $t\in[0,1]$, then $|(1-t)z+tw|\le(1-t)|z|+t|w|\le 1$ by multiplicativity and subadditivity of the modulus in [F3], so $D^2$ is convex; it is a nonempty convex subset of $\mathbb R^2$ in the sense of [F4], hence contractible, hence path-connected, hence connected. [F3, F4]

1.3 *Interior charts.* Let $z\in\mathbb C$ with $|z|<1$ and put $r:=\tfrac12(1-|z|)>0$. If $|w-z|<r$ then $|w|\le|z|+|w-z|<|z|+r<1$ by [F3], so $B(z,r)\subseteq D^2$ and $U:=D^2\cap B(z,r)=B(z,r)$ is an open neighbourhood of $z$ in $D^2$ that is open in $\mathbb C$ as well. The translation $\psi(w):=w+2i$ is continuous with continuous inverse $u\mapsto u-2i$ by [F3], hence a homeomorphism of $\mathbb C$; its restriction to $U$ is therefore a homeomorphism of $U$ onto the open set $\psi(U)\subseteq\mathbb R^2$, and for $w\in U$ one has $\operatorname{Im}w\ge-|w|>-1$ and hence $\operatorname{Im}\psi(w)=\operatorname{Im}w+2>1>0$, so $\psi(U)$ lies in the open upper half-plane and is in particular a relatively open subset of $\mathbb H^2$ containing $\psi(z)$. [F3, F5, F6]

1.4 *The two-sided inverse of the boundary formula.* Let $q\in\mathbb C$ with $|q|=1$, put $\varphi_q(w):=i(q-w)/(q+w)$ for $w\ne-q$, and put $\psi(u):=q(i-u)/(i+u)$ for $u\ne-i$. Both are defined on the sets where they are used below, because $|q-(-q)|=2>1$ gives $-q\notin V_q$ and because $|i+u|\ge\operatorname{Im}u+1\ge1>0$ whenever $\operatorname{Im}u\ge0$. For $u\ne-i$, $$\frac{i(q-\psi(u))}{q+\psi(u)}=\frac{i\left(1-\frac{i-u}{i+u}\right)}{1+\frac{i-u}{i+u}}=\frac{i\,\frac{(i+u)-(i-u)}{i+u}}{\frac{(i+u)+(i-u)}{i+u}}=\frac{i\cdot 2u}{2i}=u,$$ so $\varphi_q\circ\psi=\operatorname{id}$ on $\mathbb C\setminus\{-i\}$, in particular on $\{\operatorname{Im}u\ge0\}$, and for $w\ne-q$, $$\psi\bigl(\varphi_q(w)\bigr)=\frac{q\left(i-\frac{i(q-w)}{q+w}\right)}{i+\frac{i(q-w)}{q+w}}=\frac{q\,\frac{i\,2w}{q+w}}{\frac{i\,2q}{q+w}}=w,$$ so $\psi\circ\varphi_q=\operatorname{id}$ on $\mathbb C\setminus\{-q\}$, which contains $V_q$. Hence $\varphi_q$ and $\psi$ are mutually inverse bijections between $\mathbb C\setminus\{-q\}$ and $\mathbb C\setminus\{-i\}$, and in particular $\varphi_q$ is injective on $D^2\setminus\{-q\}$. [F3, F6, algebra]

2.1 *Which points of the plane are carried into the half-space.* Let $w\in D^2\setminus\{-q\}$ and multiply numerator and denominator of $\varphi_q(w)$ by $\bar q+\bar w$, which is the conjugate of $q+w$: using $q\bar q=|q|^2=1$, $w\bar w=|w|^2$ and $s-\bar s=2i\operatorname{Im}s$ for $s:=q\bar w$ gives $$\varphi_q(w)=\frac{i(q-w)(\bar q+\bar w)}{|q+w|^2}=\frac{i\bigl(|q|^2+q\bar w-w\bar q-|w|^2\bigr)}{|q+w|^2}=\frac{i\bigl(1-|w|^2+2i\operatorname{Im}(q\bar w)\bigr)}{|q+w|^2},$$ so $\operatorname{Im}\varphi_q(w)=\bigl(1-|w|^2\bigr)/|q+w|^2$, which is $\ge0$ exactly when $|w|\le1$: thus $\varphi_q$ maps $D^2\setminus\{-q\}$ into the closed upper half-plane $\{\operatorname{Im}u\ge0\}$. Conversely, if $\operatorname{Im}u\ge0$ then $$|\psi(u)|^2=\frac{|i-u|^2}{|i+u|^2}=\frac{(\operatorname{Re}u)^2+(1-\operatorname{Im}u)^2}{(\operatorname{Re}u)^2+(1+\operatorname{Im}u)^2}\le1,$$ because the last inequality is equivalent to $(1-\operatorname{Im}u)^2\le(1+\operatorname{Im}u)^2$, that is to $-2\operatorname{Im}u\le2\operatorname{Im}u$. Hence $\psi$ maps $\{\operatorname{Im}u\ge0\}$ into $D^2$. Since $\varphi_q\circ\psi$ is the identity by step 1.4, $\varphi_q$ is surjective onto $\{\operatorname{Im}u\ge0\}$ and $\psi$ is injective; by step 1.4, $\varphi_q$ is also injective. So $\varphi_q:D^2\setminus\{-q\}\to\{\operatorname{Im}u\ge0\}$ is a bijection with inverse $\psi$. [step 1.4, F3, F6, algebra]

3.1 *$\varphi_q$ and $\psi$ are continuous, hence homeomorphisms.* For $w,w_0\in D^2\setminus\{-q\}$ expansion gives $$\varphi_q(w)-\varphi_q(w_0)=\frac{i(q-w)(q+w_0)-i(q-w_0)(q+w)}{(q+w)(q+w_0)}=\frac{2iq(w_0-w)}{(q+w)(q+w_0)},$$ so by multiplicativity of the modulus and $|i|=|q|=1$, $$|\varphi_q(w)-\varphi_q(w_0)|=\frac{2|w-w_0|}{|q+w|\,|q+w_0|}.$$ Let $\delta:=|q+w_0|>0$ and suppose $|w-w_0|\le\delta/2$; then $|q+w|\ge|q+w_0|-|w-w_0|\ge\delta/2$ by subadditivity, so $|\varphi_q(w)-\varphi_q(w_0)|\le4|w-w_0|/\delta^2$, which is $<\varepsilon$ as soon as $|w-w_0|<\min(\delta/2,\varepsilon\delta^2/4)$. This is the $\varepsilon$-$\delta$ condition of [F5] for continuity of $\varphi_q$ at $w_0$. The same expansion with $i$ in place of $q$ and $u$'s in place of $w$'s gives $|\psi(u)-\psi(u_0)|=2|u-u_0|/(|i+u||i+u_0|)$, and $|i+u_0|\ge1$ for $\operatorname{Im}u_0\ge0$, so $\psi$ is continuous on the closed upper half-plane as well. By step 2.1 and [F5], $\varphi_q$ is a homeomorphism of $D^2\setminus\{-q\}$ onto $\{\operatorname{Im}u\ge0\}$; consequently $\varphi_q(V_q)$ is a relatively open subset of $\mathbb H^2$ by [F6], because $V_q$ is open in $D^2$ and hence in $D^2\setminus\{-q\}$, and it contains $\varphi_q(q)=0$. [F3, F5, F6, step 1.4, step 2.1]

4.1 *Conclusion.* Step 3.1 shows that for $|q|=1$ the restriction of $\varphi_q$ to the neighbourhood $V_q$ of $q$ in $D^2$ is a homeomorphism onto a relatively open subset of $\mathbb H^2$ containing $0$, and step 1.3 provides the corresponding chart at every point with $|z|<1$. Step 1.2 shows $D^2$ is nonempty and connected and step 1.1 shows it is Hausdorff and second countable, so every point of $D^2$ has a neighbourhood homeomorphic to a relatively open subset of $\mathbb H^2$: by [F6], $D^2$ is a topological $2$-manifold with boundary, as claimed. [step 1.1, step 1.2, step 1.3, step 3.1, F5, F6] ∎
