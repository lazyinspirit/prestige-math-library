---
id: def-gr-energy-conditions
kind: definition
title: "The pointwise energy conditions WEC, NEC, DEC and SEC"
status: draft
origin: session
domain: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-stress-energy-tensor-field, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-future-causal-classification-by-a-timelike-field]
dependency_roles:
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
physical_scope: "Pointwise inequalities that a model may adopt for its stress-energy tensor: weak, null, dominant and strong energy conditions, stated for the smooth tensor fields of this framework. They are additional assumptions available to a model; no condition is automatic, no implication between them is asserted here, and their measured relevance is a separate empirical question."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the Weak Energy Condition (4.72) and the remarks on stronger conditions, printed p. 117 (PDF p. 124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.7 'Energy Conditions', printed pp. 194-198 (PDF pp. 201-205)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), postulate 3 on the symmetry and conservation of T_ab, PDF p. 68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
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
$A^\sharp_p$ of [[def-gr-inverse-metric-and-musical-isomorphisms]]. The
timelike and null vector sets are those of the Lorentz vector space
$(T_pM,g_p)$ ([[def-gr-smooth-lorentzian-objects]]).

## Remarks

- **Adopted, not automatic.** None of the four conditions is a consequence of
  the definition of $T$ or of the framework postulates; from a chosen matter
  model some may hold, fail, or be undefined (for instance, a sign of the
  pressure that is not fixed by the model's definition). A model that uses one
  of them adopts it as an additional assumption, and the framework adopts none
  of them automatically.

- **They are not equivalent and are not ordered by inclusion.** The four
  inequalities involve different vector classes (timelike, null, future
  timelike) and different tensors ($T$, $-\sharp T$, $T-\tfrac12(\operatorname{tr}_gT)g$);
  whether one implies another for a particular model is a separate question,
  answered by the specializations to dust, perfect fluids and other matter
  branches, not assumed here.

- **The WEC form used here is the strict timelike form.** Some treatments
  extend the WEC and SEC inequalities to the closed causal cone by continuity;
  this item does not, and consumers that use the extended form state that
  extension as part of their own hypothesis.
