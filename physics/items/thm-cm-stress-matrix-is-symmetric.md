---
id: thm-cm-stress-matrix-is-symmetric
kind: theorem
title: "Angular-momentum balance without couples forces the stress matrix to be symmetric"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-traction-and-stress, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, lem-cm-localization-of-vanishing-integrals, def-countable-choice, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-matrix-space, def-matrix-product-and-identity-matrix, def-integral-over-a-measurable-set, thm-linearity-of-the-lebesgue-integral-on-l-one, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-metric-ball]
dependency_roles:
  def-cm-traction-and-stress: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  lem-cm-localization-of-vanishing-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.4 (balance of angular momentum) and Section 4.5 (symmetry of the Cauchy stress tensor)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.2 (the Cauchy stress tensor; the torque argument forcing its symmetry)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as used by the divergence and surface-integral machinery. Let $O\subseteq\mathbb R^3$ be open, let $\sigma:O\to M_3(\mathbb R)$ be of class $C^1$, and let $b:O\to\mathbb R^3$ be continuous. Suppose that for every bounded $C^1$ domain $D$ with $\overline D\subseteq O$ ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]), with outward unit normal $\nu$ and the surface integral of [[def-surface-integral-on-a-compact-c-one-hypersurface]]:

$$\int_{\partial D}\sigma\nu\,dS+\int_Db\,dx=0 \tag{LB}$$

and

$$\int_{\partial D}y\times(\sigma\nu)\,dS+\int_Dy\times b\,dx=0. \tag{AB}$$

Then

$$\sigma(y)^{\mathsf T}=\sigma(y)\qquad\text{for every }y\in O .$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the open set $O$; the $C^1$ field $\sigma$; the continuous field $b$; the balances (LB) and (AB).

[F1] Divergence theorem: for $F\in C^1(\overline D;\mathbb R^3)$ on a bounded $C^1$ domain $D$, $\int_D\operatorname{div}F\,dx=\int_{\partial D}F\cdot\nu\,dS$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]). Applying it to the rows $F_i=(\sigma_{i1},\sigma_{i2},\sigma_{i3})$ gives $\int_{\partial D}\sigma\nu\,dS=\int_Dg\,dx$ with $g_i:=\sum_j\partial_j\sigma_{ij}$.

[F2] Cross product as a bilinear alternating map: $(a\times b)_i=\sum_{j,k}\varepsilon_{ijk}a_jb_k$, where $\varepsilon_{ijk}=0$ if indices repeat, $+1$ for an even permutation of $(1,2,3)$, and $-1$ for an odd permutation; and the product rule differentiates $y_j\sigma_{kl}$ as $\partial_l(y_j\sigma_{kl})=\delta_{jl}\sigma_{kl}+y_j\partial_l\sigma_{kl}$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-matrix-space]]).

[F3] Localization lemma: a continuous function on an open set whose integral vanishes over every member of a neighbourhood-basis family is identically zero; the family of all small balls qualifies ([[lem-cm-localization-of-vanishing-integrals]], [[def-metric-ball]]).

[F4] The integrals in (LB) and (AB) are defined componentwise and are finite for $C^1$ data on a bounded $C^1$ domain ([[def-integral-over-a-measurable-set]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct; differentiate the two integral balances by the divergence theorem and localize.

1.1 Fix a bounded $C^1$ domain $D$ with $\overline D\subseteq O$. By [F1] applied to the three rows of $\sigma$, (LB) becomes $$\int_D\bigl(g+b\bigr)dx=0,\qquad g_i:=\sum_j\partial_j\sigma_{ij}.$$ Since this holds for every bounded $C^1$ domain with closure in $O$, it holds in particular for every open ball $B(y_0,r)$ with $\overline B(y_0,r)\subseteq O$; the function $y\mapsto g(y)+b(y)$ is continuous, so [F3] gives $$g+b=0\qquad\text{on }O. \tag{M}$$ [given, F1, F3, F4, algebra]

2.1 Fix a bounded $C^1$ domain $D$ with $\overline D\subseteq O$ and a component index $i\in\{1,2,3\}$. By [F2], and applying the divergence theorem [F1] to the components $F^{(i)}_l:=(\varepsilon_{ijk}y_j\sigma_{kl})_l$ of the vector field whose $l$-th entry is $\varepsilon_{ijk}y_j\sigma_{kl}$ (summed over $j,k$), $$\Bigl(\int_{\partial D}y\times(\sigma\nu)\,dS\Bigr)_i=\int_D\sum_{j,k,l}\varepsilon_{ijk}\Bigl(\delta_{jl}\sigma_{kl}+y_j\partial_l\sigma_{kl}\Bigr)dx=\int_D\Bigl(\sum_{j,k}\varepsilon_{ijk}\sigma_{kj}+\bigl(y\times g\bigr)_i\Bigr)dx .$$ Hence (AB) reads $$\int_D\Bigl(\sum_{j,k}\varepsilon_{ijk}\sigma_{kj}+\bigl(y\times(g+b)\bigr)_i\Bigr)dx=0 .$$ By (M), the second term vanishes identically, leaving $\int_D\bigl(\sum_{j,k}\varepsilon_{ijk}\sigma_{kj}\bigr)dx=0$ for every bounded $C^1$ domain with closure in $O$. [given, F1, F2, step 1.1, algebra]

3.1 Apply step 2.1 to open balls with closure in $O$ and localize with [F3]: the continuous function $y\mapsto\sum_{j,k}\varepsilon_{ijk}\sigma_{kj}(y)$ vanishes on $O$ for each $i$. For $i=1$ this reads $\sigma_{32}-\sigma_{23}=0$, for $i=2$ it reads $\sigma_{13}-\sigma_{31}=0$, and for $i=3$ it reads $\sigma_{21}-\sigma_{12}=0$; hence $\sigma^{\mathsf T}=\sigma$ on $O$. [step 2.1, F3, algebra] ∎

## Remarks

- The content is conditional: (LB) and (AB) are adopted balance hypotheses for bodies without body couples or surface couples. If a couple density $c$ is present, (AB) must add $\int_Dc\,dx$ and the conclusion weakens to the local relation $\varepsilon_{ijk}\sigma_{kj}+c_i=0$; no symmetry follows in that case, and this item asserts symmetry only in the couple-free balance.

- The orbital terms cancel exactly because both balances use the same $b$: this is what the subtraction of (M) inside the angular integral expresses. Using a different body-force convention in the two balances would invalidate the cancellation and is not part of this statement.

- The center of the angular balance is taken to be the origin of the fixed coordinates; translating the center adds to both integrals a term proportional to the total balance (LB) and therefore does not change the conclusion. No rotational frame or physical interpretation is used.
