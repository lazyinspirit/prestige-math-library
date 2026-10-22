---
id: lem-ip-bv-smooth-coarea
kind: lemma
title: Coarea identity for smooth scalar functions
status: draft
origin: pipeline
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-countable-choice
  - lem-ip-open-euclidean-locally-finite-smooth-partition
  - lem-ip-unit-vector-density-has-scalar-variation
  - lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice
  - lem-rat-embeds-dense
  - thm-product-of-countable
  - thm-rationals-countable
  - thm-morse-sard-for-euclidean-maps
  - thm-euclidean-inverse-function-theorem
  - cor-change-of-variables-for-compactly-supported-functions
  - lem-local-graph-flux-from-fubini-and-the-fundamental-theorem
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "BV Functions minicourse, Oxford Mathematical Institute, Version 3.0"
      url: "https://www.maths.ox.ac.uk/system/files/attachments/BV_minicourse_Slides_Version3_0.pdf"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and let $u\in C^\infty(\Omega;\mathbb R)\cap L^1(\Omega)$ satisfy $\int_\Omega|\nabla u|\,dx<\infty$. For $t>0$ set $E_t^+:=\{x\in\Omega:u(x)>t\}$ and for $t<0$ set $E_t^-:=\{x\in\Omega:u(x)<t\}$. Then the level sets have finite perimeter relative to $\Omega$ for almost every applicable $t$, and
$$\int_\Omega|\nabla u|\,dx=\int_0^\infty P(E_t^+;\Omega)\,dt+\int_{-\infty}^0P(E_t^-;\Omega)\,dt.$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The spatial BV and relative-perimeter definitions.]]

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, and a smooth real function $u\in L^1(\Omega)$ with $\nabla u\in L^1(\Omega;\mathbb R^n)$.

[A1] Countable Choice is assumed for the countable chart and surface-measure constructions. ([[def-countable-choice]])

[F1] The critical values of a smooth scalar function on an open Euclidean set have Lebesgue measure zero. ([[thm-morse-sard-for-euclidean-maps]])

[F2] A $C^1$ map with nonsingular derivative has a local $C^1$ inverse, and an injective such map on an open set obeys the compactly supported change-of-variables formula. ([[thm-euclidean-inverse-function-theorem]], [[cor-change-of-variables-for-compactly-supported-functions]])

[F3] On an $m$-dimensional graph, Hausdorff measure divided by the repository normalization constant $c_m$ has density $\sqrt{1+|Dh|^2}$; for $C^1$ graphs this agrees with the chart surface integral. Graph surface measures are Radon in their relative topology, and pushforward to the open ambient domain is Radon when the graph is relatively closed and the total measure finite. ([[lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F4] For a $C^1$ graph boundary and a compactly supported $C^1$ vector field, integrating its divergence over the subgraph gives the graph flux formula. ([[lem-local-graph-flux-from-fubini-and-the-fundamental-theorem]])

[F5] Rational points are dense in Euclidean space and form a countable family, so rational balls give a countable base. ([[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]])

[F6] A countable open cover of an open Euclidean set admits a locally finite smooth partition of unity subordinate to that cover. ([[lem-ip-open-euclidean-locally-finite-smooth-partition]])

[F7] A continuous unit-vector density against a finite Radon surface measure has partition variation equal to that surface measure. ([[lem-ip-unit-vector-density-has-scalar-variation]])

[F8] Tonelli permits summing nonnegative chart integrals and interchanging the level and spatial integrations. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

**Given:** The hypotheses listed above.

1.1 Put $G:=\{x\in\Omega:\nabla u(x)\ne0\}$. The balls with rational centers and radii whose closures lie in $\Omega$ and on which some $\partial_i u$ never vanishes form a countable open cover of $G$ by density and countability [F5]; assign each ball the least such coordinate $i$. Each ball is convex. The map $T_i(x)=(x_1,\ldots,x_{i-1},u(x),x_{i+1},\ldots,x_n)$ has nonzero Jacobian there; it is injective because along each line parallel to the $i$th axis, $u$ is strictly monotone. Thus [F2] makes it a $C^1$ diffeomorphism onto its open image. By [F6], choose a locally finite smooth partition of unity $(\eta_j)$ on $G$ subordinate to these chart balls. On a ball assigned coordinate $i$, write $y=x_{\widehat i}$ and $t=u(x)$; the inverse chart has graph form $x_i=h(y,t)$, with $|\det DT_i|=|\partial_i u|$ and $$\sqrt{1+|D_yh|^2}=\frac{|\nabla u|}{|\partial_i u|}$$ by implicit differentiation. Change of variables [F2] and the surface density [F3], applied to the compactly supported nonnegative weight $\eta_j$, give $$\int_G\eta_j|\nabla u|\,dx=\int_{\mathbb R}\int_{G\cap\{u=t\}}\eta_j\,d\mathcal H^{n-1}\,dt.$$ [A1, F2, F3, F5, F6, given, construct]

2.1 Sum the chart identities of step 1.1 over $j$. Since $\sum_j\eta_j=1$ on $G$, Tonelli [F8] gives $$\int_\Omega|\nabla u|\,dx=\int_{\mathbb R}\mathcal H^{n-1}(G\cap\{u=t\})\,dt,$$ because $\nabla u=0$ on $\Omega\setminus G$. Sard's theorem [F1] says that outside a null set every point of a level is regular, so the integrand agrees almost everywhere in $t$ with $\mathcal H^{n-1}(\Omega\cap\{u=t\})$. This also establishes measurability of the level-area function as a countable sum of the chart integrals in step 1.1. [F1, F8, step 1.1, given]

3.1 Fix a nonzero regular value $t$ for which the area in step 2.1 is finite; throughout the proof $\mathcal H^{n-1}$ denotes the normalized graph measure from [F3], with counting measure if $n=1$. In that case every graph chart is a single point at fixed level, its empty-coordinate Jacobian is one, and the same substitution identity in step 1.1 is the ordinary one-dimensional substitution formula. Then $\Gamma_t:=\Omega\cap\{u=t\}$ is a smooth hypersurface. For a compactly supported smooth test field $\phi$, its intersection with $\Gamma_t$ is compact; local finiteness gives a neighborhood meeting only finitely many chart supports, whose partition sum is one there. Decompose $\phi$ into the finite chart-supported sum and a remainder vanishing near $\Gamma_t$. The remainder has zero divergence integral over either level set because its restriction to that open set extends as a compactly supported smooth field. Each chart term obeys the graph flux formula [F4]. Summing shows that $D\chi_{E_t^+}=+(\nabla u/|\nabla u|)\mathcal H^{n-1}|_{\Gamma_t}$ and $D\chi_{E_t^-}=-(\nabla u/|\nabla u|)\mathcal H^{n-1}|_{\Gamma_t}$. The level $\Gamma_t$ is relatively closed in $\Omega$; hence this measure is finite and Radon by the graph area construction [F3], and [F7] gives its partition variation as exactly $\mathcal H^{n-1}|_{\Gamma_t}$. Hence the indicator is BV and its perimeter equals that area. For $t>0$ and $t<0$, respectively, Markov's inequality gives $|E_t^+|\le t^{-1}\|u\|_1$ and $|E_t^-|\le|t|^{-1}\|u\|_1$, so the indicators are in $L^1$. The area integral is finite, so almost every applicable nonzero level is regular and has finite area by step 2.1; the required perimeter equality and almost-everywhere finiteness follow. [A1, F3, F4, F7, step 2.1, given] ∎ 