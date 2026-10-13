---
id: def-gr-energy-conditions
kind: definition
title: "The pointwise energy conditions WEC, NEC, DEC and SEC"
status: published
origin: session
domain: physics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gr-stress-energy-tensor-field, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-future-causal-classification-by-a-timelike-field, lem-timelike-cone-has-two-convex-components, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
physical_scope: "Pointwise inequalities that a model may adopt for its stress-energy tensor: weak, null, dominant and strong energy conditions, stated for the smooth tensor fields of this framework. They are additional assumptions available to a model; no condition is automatic, the actual pointwise implications are proved here, and their measured relevance is a separate empirical question."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the Weak Energy Condition (4.72) and the remarks on stronger conditions, printed p. 117 (PDF p. 124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.7 'Energy Conditions', printed pp. 194-198 (PDF pp. 201-205)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), postulate 3 on the symmetry and conservation of T_ab, PDF p. 68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$T$ be a stress-energy tensor field on its matter domain
$U\subseteq M$ ([[def-gr-stress-energy-tensor-field]]), and let $\sharp_p$ and
$\operatorname{tr}_g$ be the musical isomorphism and the metric trace of
[[def-gr-inverse-metric-and-musical-isomorphisms]]. For $p\in U$ and
$v\in T_pM$ write $T_p(v,\cdot)\in T_p^*M$ for the covector
$w\mapsto T_p(v,w)$, and recall that, by
[[lem-gr-future-causal-classification-by-a-timelike-field]], a vector
$w\in T_pM$ lies in $\operatorname{cl}(C_p^+)$ exactly when $w=0$ or $w$ is
future-directed and causal, where $C_p^+$ is the component of the timelike set
containing $N_p$.

The model **satisfies at $p$**:

- the **weak energy condition (WEC)** when $T_p(v,v)\ge0$ for every timelike
  $v\in T_pM$;
- the **null energy condition (NEC)** when $T_p(v,v)\ge0$ for every null
  $v\in T_pM$;
- the **dominant energy condition (DEC)** when
  $-\sharp_p\bigl(T_p(v,\cdot)\bigr)\in\operatorname{cl}(C_p^+)$ for every
  future-directed timelike $v\in T_pM$;
- the **strong energy condition (SEC)** when
  $\bigl(T_p-\tfrac12\operatorname{tr}_g(T)(p)\,g_p\bigr)(v,v)\ge0$ for every
  timelike $v\in T_pM$, that is, when
  $T_p(v,v)-\tfrac12\operatorname{tr}_g(T)(p)\,g_p(v,v)\ge0$.

The model **satisfies the condition** (on $U$) when the corresponding
inequality holds at every $p\in U$.

Each is a pointwise condition on the pair $(g_p,T_p)$ alone, evaluated on
timelike or null vectors as displayed; the expressions use only the metric
pairing $g_p$, its inverse pairing on covectors, and the endomorphism
$T^\sharp_p:v\mapsto\sharp_p(T_p(v,\cdot))$ of
[[def-gr-inverse-metric-and-musical-isomorphisms]], whose trace is
$\operatorname{tr}_g(T)(p)$. The
timelike and null vector sets are those of the Lorentz vector space
$(T_pM,g_p)$ ([[def-gr-smooth-lorentzian-objects]]).

## Remarks

- **Adopted, not automatic.** None of the four conditions is a consequence of
  the definition of $T$ or of the framework postulates; from a chosen matter
  model some may hold, fail, or be undefined (for instance, a sign of the
  pressure that is not fixed by the model's definition). A model that uses one
  of them adopts it as an additional assumption, and the framework adopts none
  of them automatically.


- **Implications.** Pointwise, DEC implies WEC, WEC implies NEC, and SEC
  also implies NEC, by the proof below. No converse or implication between
  WEC and SEC is assumed. These are consequences of the definitions and
  Lorentzian algebra, not extra restrictions on the chosen matter model.

- **Timelike formulation.** WEC and SEC are stated on timelike vectors;
  continuity extends the corresponding quadratic inequalities to null
  limits. Consumers may use these proved consequences without a further
  physical assumption.

## Facts & Assumptions

**Given:** At $p\in U$, the Lorentz form $g_p$, symmetric bilinear $T_p$, and the definitions of WEC, NEC, DEC and SEC above.

[F1] Future null vectors lie in the closure of the future timelike component ([[lem-gr-future-causal-classification-by-a-timelike-field]]). The closed future cone also contains zero.

[F2] The inverse metric satisfies $g(\sharp\alpha,v)=\alpha(v)$ ([[def-gr-inverse-metric-and-musical-isomorphisms]]); bilinear forms in a finite basis are finite quadratic polynomials, so their values are continuous under coordinate convergence.

[F3] In an orthonormal basis oriented with the future cone, a future causal vector has $j^0\ge|j_{\rm vec}|$ and a future timelike vector has $v^0>|v_{\rm vec}|$ ([[lem-timelike-cone-has-two-convex-components]]). The spatial Euclidean pairing obeys Cauchy–Schwarz ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 Suppose DEC holds and let $v$ be future timelike. Put $j=-\sharp(T_p(v,\cdot))$. DEC puts $j$ in the closed future cone. In the future-oriented orthonormal coordinates of [F3], $g(j,v)=-j^0v^0+j_{\rm vec}\cdot v_{\rm vec}\le-j^0v^0+|j_{\rm vec}||v_{\rm vec}|\le0$, including $j=0$. By [F2], $T_p(v,v)=-g(j,v)\ge0$. Every past timelike vector is the negative of a future timelike vector, and its quadratic value is the same. Hence DEC implies WEC on all timelike vectors. [given, F1, F2, F3, algebra]

2.1 For a future null vector $k$ and future timelike $n$, The same estimate as in step 1.1, using $k^0=|k_{\rm vec}|>0$ and $n^0>|n_{\rm vec}|$, gives $g(k,n)<0$. For every $\epsilon>0$, $k_\epsilon=k+\epsilon n$ has $g(k_\epsilon,k_\epsilon)=2\epsilon g(k,n)+\epsilon^2g(n,n)<0$ and $g(k_\epsilon,n)<0$, so it is future timelike and tends to $k$. If WEC holds, $T_p(k_\epsilon,k_\epsilon)\ge0$; [F2] and the limit give $T_p(k,k)\ge0$. Negating past null vectors gives the same conclusion. Thus WEC implies NEC. [step 1.1, F1, F2, F3, algebra]

3.1 If SEC holds, apply the same timelike limit to $B=T_p-\tfrac12\operatorname{tr}_g(T)(p)g_p$. Continuity gives $B(k,k)\ge0$ at every null $k$, and $g_p(k,k)=0$ makes this $T_p(k,k)\ge0$. Thus SEC implies NEC as well. These deductions preserve the stated pointwise conditions and impose none automatically. [step 2.1, F2, algebra] ∎
