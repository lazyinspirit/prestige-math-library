---
id: cex-gr-vanishing-tidal-operator-for-one-observer
kind: counterexample
title: "A nonzero algebraic curvature tensor whose tidal operator vanishes for one timelike direction"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-algebraic-curvature-vanishing-criterion, def-gr-tensor-fields-and-components, def-gr-smooth-lorentzian-objects, def-gr-curvature-tensor-and-derived-tensors]
dependency_roles:
  lem-gr-algebraic-curvature-vanishing-criterion: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the Riemann tensor symmetries (3.78)-(3.83) and the tidal reading of geodesic deviation (3.113), printed pp. 79-81 and 86-88 (PDF pp. 86-88 and 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5: the geodesic deviation equation (4.22)-(4.24) and the flatness criterion that curvature is detected by all congruences, printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $R_p$ be an algebraic curvature tensor at a point $p$
of a time-oriented smooth Lorentzian four-manifold, with the four identities
of [[lem-gr-algebraic-curvature-vanishing-criterion]], and suppose there is
**one** timelike vector $T\in T_pM$ such that the tidal operator
$J\mapsto R(T,J)T$ vanishes for every $J\in T_pM$. Then $R_p=0$."

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $M=\mathbb R^4$ with identity chart $x=(x^0,x^1,x^2,x^3)$, metric $g=\operatorname{diag}(-1,1,1,1)$ and time orientation $N=\partial_0$ ([[def-gr-smooth-lorentzian-objects]]).

[L1] A vector $R(T,J)T$ associated with a $(0,4)$-tensor $R$ is defined by the pairing $g\bigl(R(T,J)T,W\bigr)=R_{abcd}W^aT^cJ^dT^b$ for all $W$, the convention fixed in [[def-gr-curvature-tensor-and-derived-tensors]] clause (b) and [[lem-gr-algebraic-curvature-vanishing-criterion]]; $g$ is nondegenerate, so such a vector is zero if and only if the pairing vanishes for all $W$.

[L2] An algebraic curvature tensor at a point is a multilinear map whose components in a basis satisfy $R_{abcd}=-R_{bacd}=-R_{abdc}=R_{cdab}$ and $R_{abcd}+R_{acdb}+R_{adbc}=0$ ([[lem-gr-algebraic-curvature-vanishing-criterion]]).

[L3] A family of component functions that is constant in the global identity chart defines a smooth tensor field ([[def-gr-tensor-fields-and-components]] clauses (b)-(c)).

## Counterexample

Let $h$ be the smooth $(0,2)$-tensor field on $M$ with constant components in
the identity chart
$$h_{00}=h_{0i}=h_{i0}:=0,\qquad h_{ij}:=\delta_{ij}\quad(i,j\in\{1,2,3\}),$$
the Euclidean metric on the spacelike coordinate three-plane extended by zero,
and let $R$ be the smooth $(0,4)$-tensor field with constant components
$$R_{abcd}:=h_{ac}h_{bd}-h_{ad}h_{bc}.$$
Both exist by [L3]. For a future timelike vector $T$ write
$R(T,J)T$ for the vector defined in [L1].

1.1 (The four algebraic identities.) Since $h_{ab}=h_{ba}$, one has $R_{bacd}=h_{bc}h_{ad}-h_{bd}h_{ac}=-R_{abcd}$ and $R_{abdc}=h_{ad}h_{bc}-h_{ac}h_{bd}=-R_{abcd}$; and $R_{cdab}=h_{ca}h_{db}-h_{cb}h_{da}=h_{ac}h_{bd}-h_{ad}h_{bc}=R_{abcd}$. Moreover $R_{abcd}+R_{acdb}+R_{adbc}=(h_{ac}h_{bd}-h_{ad}h_{bc})+(h_{ad}h_{cb}-h_{ab}h_{cd})+(h_{ab}h_{dc}-h_{ac}h_{db})=0$, each of the three pairs cancelling by $h_{xy}=h_{yx}$. Hence $R$ satisfies the four identities of [L2] at every point. [L2, L3, algebra]

1.2 (Nonvanishing.) $R_{1212}=h_{11}h_{22}-h_{12}h_{21}=1\cdot1-0=1\neq0$, so $R\neq0$. [L3, algebra]

1.3 (The tidal operator vanishes for $T=\partial_0$.) Let $T:=\partial_0$, a future timelike vector with $g(T,T)=-1$. For all $J,W$, by [L1] and the definition of $R$, $g\bigl(R(T,J)T,W\bigr)=R_{abcd}W^aT^cJ^dT^b=R_{a00d}W^aJ^d$ and $R_{a00d}=h_{a0}h_{0d}-h_{ad}h_{00}=0-0=0$, because all components of $h$ with an index $0$ vanish. Hence the pairing vanishes for all $J,W$ and, by nondegeneracy [L1], $R(T,J)T=0$ for every $J\in T_pM$. [L1, L3, algebra]

2.1 (A tilted timelike direction detects the tensor.) Let $T':=\partial_0+\tfrac12\partial_1$; then $g(T',T')=-1+\tfrac14=-\tfrac34<0$, so $T'$ is timelike. Expanding in the constant components, $g\bigl(R(T',\partial_3)T',W\bigr)=R_{abcd}W^aT'^c(\partial_3)^dT'^b=\tfrac14R_{a113}W^a$, with the remaining three terms $R_{a003}$, $R_{a013}$ and $R_{a103}$ vanishing: each of their products contains a factor $h_{0b}$ or $h_{b0}$ for some $b$, and all such components of $h$ are zero. Now $R_{a113}=h_{a1}h_{13}-h_{a3}h_{11}=-h_{a3}$, so $g\bigl(R(T',\partial_3)T',W\bigr)=-\tfrac14W^3$ and, by [L1], $R(T',\partial_3)T'=-\tfrac14\partial_3\neq0$: the tidal operator of $R$ does not vanish for every timelike direction. [L1, step 1.3, algebra]

3.1 (Conclusion.) By steps 1.1 and 1.2, $R$ is a nonzero algebraic curvature tensor; by step 1.3 there is a timelike vector, namely $\partial_0$, for which the tidal operator vanishes identically; by step 2.1 the operator is nonzero for the timelike direction $T'$. Hence the displayed statement is refuted: the vanishing of the tidal operator for a single timelike direction does not force $R=0$, and the hypothesis "for every timelike $T$" in [[lem-gr-algebraic-curvature-vanishing-criterion]] cannot be weakened to a single observer. [step 1.1, step 1.2, step 1.3, step 2.1, L2, algebra] ∎

## Remarks

- **Where the single oblique direction matters.** For $T=\partial_0$ every
  slot of $R$ built from $T$ contains a factor $h_{\cdot0}=0$, so the whole
  tidal pairing collapses; the tilt $T'=\partial_0+\tfrac12\partial_1$ gives
  the slot $h_{11}=1$ a nonzero weight and produces the component
  $R(T',\partial_3)T'=-\tfrac14\partial_3$. The example thus separates the
  hypothesis "one timelike direction" from the hypothesis "all timelike
  directions" used by the criterion.
- **Scope.** The counterexample is algebraic and concerns the stated
  implication only; no realization of $R$ as the curvature of a
  metric-selected connection is claimed, and no empirical statement is made.
