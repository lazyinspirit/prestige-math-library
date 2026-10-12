---
id: lem-gr-timelike-fields-define-equal-or-opposite-future-cones
kind: lemma
title: "Two time orientations agree or are opposite on each connected set"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, lem-gr-future-causal-classification-by-a-timelike-field, lem-timelike-cone-has-two-convex-components, def-gr-smooth-covariant-two-tensor-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-induced-tangent-bundle-chart, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, def-connected-space, def-continuous-map-top, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-induced-tangent-bundle-chart: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  def-connected-space: mathematical-premise
  def-continuous-map-top: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2 on the two disconnected sets of causal vectors, printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.3 on past and future light cones varying smoothly, printed p. 94 (PDF p. 101)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 on future and past light cones, printed p. 6 (PDF p. 13)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g)$ be a smooth Lorentzian four-manifold and let $N,N'$ be two smooth
timelike vector fields on $M$, so that both $(M,g,N)$ and $(M,g,N')$ are
time-oriented ([[def-gr-smooth-lorentzian-objects]]). Put
$f(p):=g_p(N_p,N'_p)$ for $p\in M$, and for each $p$ let $C_p^+(N)$ and
$C_p^+(N')$ be the components of the timelike set of $T_pM$ containing $N_p$
and $N'_p$. Then:

1. $f:M\to\mathbb R$ is $C^\infty$ and $f(p)\neq0$ for every $p\in M$.
2. On every nonempty connected subset $C\subseteq M$ the function $f$ has
   constant sign: either $f<0$ throughout $C$ or $f>0$ throughout $C$.
3. If $f<0$ on a nonempty connected subset $C$, then
   $C_p^+(N')=C_p^+(N)$ and the future-directed causal vectors of $N'$ agree
   with those of $N$ at every $p\in C$; if $f>0$ on $C$, then
   $C_p^+(N')=C_p^-(N)$ and the future-directed causal vectors of $N'$ are
   exactly the past-directed causal vectors of $N$ at every $p\in C$.
4. In particular $N$ and $-N$ define opposite future cones at every point.

## Facts & Assumptions

**Given:** A smooth Lorentzian four-manifold $(M,g)$ and smooth timelike vector
fields $N,N'$ on $M$.

[L1] For $(M,g,N)$ and $p\in M$: $N_p^{\perp}$ is positive definite, no nonzero causal $v$ has $g_p(v,N_p)=0$, and $C_p^+(N)=\{v:g_p(v,v)<0,\ g_p(v,N_p)<0\}$, while a nonzero causal $v$ is future-directed exactly when $v\in\operatorname{cl}(C_p^+(N))$ and past-directed exactly when $v\in\operatorname{cl}(C_p^-(N))$ ([[lem-gr-future-causal-classification-by-a-timelike-field]]).

[L2] The timelike set of a Lorentz vector space has exactly two components, each convex and path-connected; the map $v\mapsto-v$ is a linear isomorphism carrying the timelike set onto itself, and a nonzero timelike $v$ and $-v$ lie in different components, since convexity would otherwise put $0=\tfrac12v+\tfrac12(-v)$ in a component of the timelike set ([[lem-timelike-cone-has-two-convex-components]]).

[L3] A time orientation is a smooth vector field $N$ with $g_p(N_p,N_p)<0$ for all $p$; a nonzero causal vector is future-directed when $g_p(v,N_p)<0$ and past-directed when $g_p(v,N_p)>0$ ([[def-gr-smooth-lorentzian-objects]]).

[L4] A smooth vector field is a smooth section of $TM$, and it is smooth exactly when its component functions in a smooth chart are smooth; in particular the component functions in an induced tangent-bundle chart are smooth ([[def-smooth-vector-field-as-a-tangent-bundle-section]], [[def-induced-tangent-bundle-chart]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L5] In every smooth chart the metric components $g_{ab}=g(\partial_a,\partial_b)$ are $C^\infty$ functions ([[def-gr-smooth-covariant-two-tensor-field]]).

[L6] A space is connected when it admits no separation, a separation being an ordered pair of open, nonempty, disjoint subsets whose union is the space ([[def-connected-space]]).

[L7] A map is continuous when preimages of open sets are open ([[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 In a smooth chart $(U,x)$, $f(q)=\sum_{a,b}g_{ab}(q)N^a(q)N'^b(q)$, where $N^a,N'^b$ are the component functions of the two fields in the induced tangent-bundle chart. By [L4] each $N^a,N'^b$ is $C^\infty$ on $U$ and by [L5] each $g_{ab}$ is $C^\infty$ on $U$; finite sums and products of smooth functions are smooth, so $f$ is $C^\infty$ on $U$, and since the smooth charts cover $M$, $f$ is $C^\infty$ on $M$. [L4, L5, algebra]

1.2 For every $p\in M$ the vector $N'_p$ is timelike, hence nonzero and causal, and [L1] applied with the roles of $N$ and $N'$ interchanged gives $f(p)=g_p(N'_p,N_p)\neq0$. [L1, L3, given]

2.1 Let $C\subseteq M$ be nonempty and connected. By step 1.1 $f$ is $C^\infty$, hence continuous, so $A:=C\cap f^{-1}((0,\infty))$ and $B:=C\cap f^{-1}((-\infty,0))$ are open in $C$ by [L7]. They are disjoint, and by step 1.2 their union is $C$. If both were nonempty, $(A,B)$ would be a separation of $C$, contradicting connectedness by [L6]; hence one is empty and $f$ has constant sign on $C$. [step 1.1, step 1.2, L6, L7]

2.2 Suppose $f<0$ on $C$ and let $p\in C$. Then $g_p(N'_p,N_p)<0$ and $N'_p$ is timelike, so claim 3 of [L1] gives $N'_p\in C_p^+(N)$; symmetrically $g_p(N_p,N'_p)<0$ and $N_p$ timelike give $N_p\in C_p^+(N')$. Both $C_p^+(N)$ and $C_p^+(N')$ are components of the timelike set containing $N'_p$ (the first by the previous sentence, the second by definition of $C_p^+(N')$), and components containing a common point coincide; hence $C_p^+(N')=C_p^+(N)$. By claim 4 of [L1] the future-directed causal vectors of each time orientation are the nonzero points of the closure of its future component, so they agree at $p$. [step 1.2, L1, algebra]

3.1 Suppose $f>0$ on $C$ and let $p\in C$. Then $-N'_p$ is timelike with $g_p(-N'_p,N_p)=-f(p)<0$, so $-N'_p\in C_p^+(N)$ by claim 3 of [L1]; by [L2] the vectors $N'_p$ and $-N'_p$ lie in different components of the timelike set, and by [L2] the timelike set has exactly two components, so the component containing $N'_p$ is the complement of the component containing $-N'_p$, that is, $C_p^+(N')=C_p^-(N)$. Applying claim 4 of [L1] in both time orientations, the future-directed causal vectors of $N'$ are $\operatorname{cl}(C_p^+(N'))\setminus\{0\}=\operatorname{cl}(C_p^-(N))\setminus\{0\}$, which are exactly the past-directed causal vectors of $N$ at $p$. [step 1.2, step 2.1, L1, L2, algebra]

4.1 Steps 1.1-1.2 prove claim 1, step 2.1 proves claim 2, and steps 2.2 and 3.1 prove claim 3; moreover $g_p(N_p,-N_p)=-g_p(N_p,N_p)>0$ for every $p$, so the case $N'=-N$ of step 3.1 gives $C_p^+(-N)=C_p^-(N)$, which is claim 4. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, L3] ∎

## Remarks

**Choice convention.** The smooth vector fields of this item are the
tangent-bundle sections of
[[def-smooth-vector-field-as-a-tangent-bundle-section]], whose canonical smooth
structure on $TM$ assumes the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this item inherits that assumption and uses no
further choice principle.
