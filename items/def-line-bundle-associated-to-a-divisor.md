---
id: def-line-bundle-associated-to-a-divisor
kind: definition
title: The holomorphic line bundle associated to a divisor
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-vector-bundle-chart-and-transition-function
  - thm-vector-bundle-construction-from-a-smooth-cocycle
  - def-local-frame-and-global-frame-of-a-vector-bundle
  - def-dual-and-hom-vector-bundles
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - prop-local-frames-and-local-trivializations-are-equivalent-data
  - def-countable-choice
  - thm-second-countable-implies-lindelof
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - def-smooth-manifold
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §1 and Ch. 6 §1, printed pp. 41–44, 53–54: the divisor sheaf O_D, linear equivalence and its interpretation as holomorphic sections"
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "§16.4, printed p. 128: the sheaf O_D and its isomorphism under linear equivalence"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 14, printed pp. 118–119: line bundles, transition cocycles, meromorphic sections, the divisor bundle O(D), and the isomorphism of its holomorphic-section sheaf with O_D; Ch. 9, printed pp. 83–85: the Riemann–Roch spaces O_D"
dependency_level: 1
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the construction on an arbitrary Riemann surface below. Let $X$ be a Riemann surface and let $D=\sum_p n_p[p]$ be a divisor on $X$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]). Local finiteness gives every point a holomorphic coordinate neighborhood whose domain contains at most one point of $\operatorname{supp}D$. The indexed family of all such coordinate neighborhoods covers $X$. Since $X$ is second countable, $\mathrm{AC}_\omega$ selects a countable subcover, retaining a coordinate chart for each member ([[thm-second-countable-implies-lindelof]]). This countable subcover selection is the only use of $\mathrm{AC}_\omega$; full AC is not used. If $X$ is compact, compactness supplies a finite subcover and the construction uses only finite choice.

For each $i$, define a local meromorphic equation $f_i$ for $D$ by $f_i=1$ if $U_i$ misses $\operatorname{supp}D$, and by $f_i=(z_i-z_i(p))^{n_p}$ if $U_i$ contains its unique support point $p$. Thus $(f_i)=D|_{U_i}$. On each overlap, the ratio
$$g_{ij}:=\frac{f_i}{f_j}$$
is holomorphic and nowhere zero, since its divisor is zero there. These functions obey $g_{ij}g_{jk}=g_{ik}$. Regard multiplication by $g_{ij}$ as its real $2\times2$ matrix. Holomorphic functions are smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), so these matrices form a smooth $GL(2,\mathbb R)$ cocycle; the cocycle construction gives a smooth real rank-two bundle, and the transitions preserve fibrewise multiplication by $i$ and are holomorphic. This is a holomorphic line bundle $\mathcal O(D)$ ([[def-smooth-manifold]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[def-vector-bundle-chart-and-transition-function]], [[thm-vector-bundle-construction-from-a-smooth-cocycle]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

Write $e_i$ for its local holomorphic frame, with transition convention $e_j=g_{ij}e_i$ ([[def-local-frame-and-global-frame-of-a-vector-bundle]], [[prop-local-frames-and-local-trivializations-are-equivalent-data]]). The local sections
$$s_D|_{U_i}:=f_i e_i$$
agree on overlaps because $f_j e_j=f_jg_{ij}e_i=f_i e_i$. Hence they define a meromorphic section $s_D$ of $\mathcal O(D)$, and its local coefficient $f_i$ shows $(s_D)=D$. For a nonzero meromorphic function $h$, the section $h s_D$ is holomorphic exactly when each local coefficient $h f_i$ is holomorphic, equivalently when $(h)+D\ge0$; the zero function gives the zero holomorphic section. Thus
$$H^0(X,\mathcal O(D)):=\Gamma(X,\mathcal O(D))\cong L(D),\qquad h\longmapsto h s_D,$$
and the meromorphic sections correspond to all meromorphic functions $h$, including zero. More locally, the sheaf of holomorphic sections is
$$\mathcal O_X(D)(V):=\{h\in\mathcal M(V):\operatorname{ord}_p(h)\ge-D(p)\text{ for every }p\in V\}$$
for open $V\subseteq X$, where $\mathcal M(V)$ means functions meromorphic on each connected component and a zero germ has order $+\infty$. This includes sections that vanish identically on some components of $V$, whose principal divisor is undefined. The local coefficient map $h\mapsto h f_i$ identifies these bounds with holomorphic sections and commutes with restrictions. In particular, $\dim_{\mathbb C}\Gamma(X,\mathcal O(D))=\ell(D)$.

The transition functions immediately give $\mathcal O(D+D')\cong\mathcal O(D)\otimes\mathcal O(D')$, $\mathcal O(-D)\cong\mathcal O(D)^*$, and $\mathcal O(0)\cong X\times\mathbb C$ ([[def-dual-and-hom-vector-bundles]]). If $(g)=D'-D$, multiplication by $1/g$ maps $\mathcal O_X(D)$ isomorphically to $\mathcal O_X(D')$, because $\operatorname{ord}_p(h/g)+D'(p)=\operatorname{ord}_p(h)+D(p)$, including zero germs; on global sections it is the corrected isomorphism $L(D)\to L(D')$. For a canonical divisor $K_0=(\omega)$, the map $h\mapsto h\omega$ identifies $\mathcal O(K_0)$ with the canonical bundle $K=\Lambda^{1,0}T^*X$: its local coefficients are holomorphic exactly when $\operatorname{ord}_p(h)+K_0(p)\ge0$ for every $p$, including zero germs, and dividing a holomorphic differential by $\omega$ gives the inverse. Its holomorphic sections are therefore exactly the holomorphic differentials ([[def-meromorphic-differential-on-a-riemann-surface]]).

Changing the countable cover or the local equations does not change the isomorphism class: on a common refinement, if $f_i$ and $f'_j$ are the two local equations, the map $e_i\mapsto(f'_j/f_i)e'_j$ is holomorphic and sends $f_i e_i$ to $f'_j e'_j$. These maps agree on overlaps because their ratios telescope, so they glue to the canonical identification. For compact $X$ the finite-cover construction is choice-free; the only choice principle used in the general construction is $\mathrm{AC}_\omega$, to obtain a countable trivializing cover from the coordinate-neighborhood cover.
