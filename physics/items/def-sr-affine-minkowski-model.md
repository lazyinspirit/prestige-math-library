---
id: def-sr-affine-minkowski-model
kind: definition
title: "Oriented time-oriented affine Minkowski space (the spacetime primitives)"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-affine-space-and-displacement, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]
dependency_roles:
  def-affine-space-and-displacement: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

An **oriented time-oriented affine Minkowski space** is a quadruple
$(A,V,\eta,C^+)$ with the following data. In this notation $V$ includes its
specified orientation; forgetting that orientation gives only the underlying
real vector space, not the full datum $V$ of the model.

1. A nonempty affine space $A$ over a $4$-dimensional real vector space $V$,
   with action $(p,v)\mapsto p+v$ and displacement $q-p\in V$
   ([[def-affine-space-and-displacement]]). In particular $V$ is a real vector
   space of dimension $4$.
2. A Lorentz form $\eta$ on $V$, i.e. a nondegenerate symmetric bilinear form of
   inertia $(3,1,0)$ ([[def-lorentz-form-and-inertia]]). Its associated quadratic
   form is $q(v)=\eta(v,v)$.
3. An **orientation** of $V$: a positive ray of the determinant line
   $\Lambda^4V$, fixed once and for all
   ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]).
4. A **time orientation** $C^+$ of $(V,\eta)$: one of the two connected
   components of the timelike set $T=\{v\in V:\eta(v,v)<0\}$, the other being
   $C^-:=T\setminus C^+$ ([[def-time-orientation-and-future-causal-sets]]).

The following terminology is attached to such a quadruple.

- The elements $p$ of $A$ are the **events**; for events $p,q$ the vector
  $q-p\in V$ is the **displacement from $p$ to $q$**.
- The **interval** of $p,q\in A$ is the real number
  $I(p,q):=\eta(q-p,q-p)=q(q-p)$.
- Events $p,q$ are **timelike**, **null**, **spacelike** or **causally
  related** when the displacement $q-p$ is timelike, null, spacelike or causal
  in the sense of [[def-causal-classification-of-lorentz-vectors]]; they are
  **future-related** when $q-p$ is future causal and **past-related** when
  $q-p$ is past causal in the sense of
  [[def-time-orientation-and-future-causal-sets]].

**No point of $A$ is distinguished.** For every $v\in V$ the translation
$\tau_v:A\to A$, $\tau_v(p):=p+v$, is a bijection, since it is inverse to
$\tau_{-v}$: $\tau_{-v}(\tau_v(p))=(p+v)+(-v)=p+(v-v)=p$ and symmetrically, by
the affine action axioms ([[def-affine-space-and-displacement]]). Displacements
are translation invariant, $\tau_v(q)-\tau_v(p)=q-p$, so every $\tau_v$ preserves
the interval, the causal classification of every ordered pair, and the sets
$C^+$, $C^-$ (which are subsets of $V$, independent of the point of $A$); it
changes only the labelling of points. The mathematical structure of the model is
exactly the quadruple $(A,V,\eta,C^+)$; no derived physical quantity (proper
time, four-velocity, momentum, energy, charge or any field) is part of this
definition, and all later structure of the framework (frames, charts, tensor
fields, worldlines) is built on this model.

**Well-definedness.** The affine-space definition supplies the action and the
unique displacements; the Lorentz-form definition supplies $\eta$ and its
inertia; the determinant-line definition supplies orientations; and the two
components of $T$ between which the time-orientation definition chooses exist by
the components lemma recorded in the well-definedness clause of
[[def-time-orientation-and-future-causal-sets]], which is also what makes the
names future and past causal in item 4 well defined.
