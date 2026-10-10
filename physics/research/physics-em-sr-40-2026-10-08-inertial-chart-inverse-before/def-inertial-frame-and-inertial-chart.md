---
id: def-inertial-frame-and-inertial-chart
kind: definition
title: "Inertial frames and inertial charts of the affine Minkowski model"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, lem-lorentz-form-has-orthonormal-basis, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-orientation-of-a-finite-dimensional-real-vector-space, prop-orientations-and-positive-basis-classes-agree-in-positive-dimension, def-linear-isomorphism-and-invertible-linear-map, thm-unique-coordinates-with-respect-to-an-ordered-basis]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  prop-orientations-and-positive-basis-classes-agree-in-positive-dimension: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
justified_by: [lem-future-oriented-inertial-frames-exist]
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
---

## Definition

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]]), with orientation fixed as a positive ray of
the determinant line $\Lambda^4V$
([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]])
and with the corresponding class of positively oriented ordered bases of $V$
([[def-orientation-of-a-finite-dimensional-real-vector-space]]); by
[[prop-orientations-and-positive-basis-classes-agree-in-positive-dimension]] the
positive ray selects exactly one such class for $\dim V=4>0$.

An **inertial frame** of the model is a tuple $(o;e_0,e_1,e_2,e_3)$ consisting
of an event $o\in A$ and an ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ that is

1. **$\eta$-orthonormal**: $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for all $a,b$ ([[lem-lorentz-form-has-orthonormal-basis]]);
2. **future**: $e_0\in C^+$, i.e. $e_0$ is future timelike; and
3. **positively oriented**: the ordered basis lies in the positive-basis class
   selected by the fixed orientation.

The event $o$ is the **origin** of the frame and $e_0,e_1,e_2,e_3$ are its
**basis vectors**.

**Inertial charts.** For an inertial frame $(o;e_0,e_1,e_2,e_3)$, define

$$E:\mathbb R^4\longrightarrow V,\qquad E(u):=\sum_{a=0}^3u^ae_a .$$

Then $E$ is a linear isomorphism ([[def-linear-isomorphism-and-invertible-linear-map]]):
it is linear by construction, and it is bijective because
$(e_0,e_1,e_2,e_3)$ is an ordered basis, every $v\in V$ having exactly one
coordinate list $u$ with $v=\sum_au^ae_a$
([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]). The **inertial
chart** of the frame is the map

$$x:A\longrightarrow\mathbb R^4,\qquad x(p):=E^{-1}(p-o),$$

and its values $x^a(p)$ are the **inertial coordinates of the event $p$** in the
frame. Since $E$ and $v\mapsto p+v$ are bijections, $x$ is a bijection
$A\to\mathbb R^4$; and $x(p)=0$ exactly when $p-o=0_V$, that is, exactly when
$p=o$.

**Transition law.** Let $(o';e'_0,e'_1,e'_2,e'_3)$ be another inertial frame
with chart $x'$, and let $M=(M^b_a)$ be the change-of-basis matrix defined by
$e'_a=\sum_bM^b_ae_b$, a $4\times4$ real matrix that is invertible because both
families are ordered bases. Then $E'(u)=\sum_au^ae'_a=E(Mu)$ for all
$u\in\mathbb R^4$, for the matrix-vector product $Mu$ in the coordinates of the
first frame, because $\sum_au^a\sum_bM^b_ae_b=\sum_b(\sum_aM^b_au^a)e_b$; hence
$E'=E\circ M$ and $E'^{-1}=M^{-1}\circ E^{-1}$, so for every event $p$,

$$x'(p)=M^{-1}\bigl(x(p)-x(o')\bigr)=M^{-1}x(p)-M^{-1}x(o') .$$

In particular the transition between two inertial charts is an affine map of
$\mathbb R^4$ with invertible linear part $M^{-1}$ and constant part
$-M^{-1}x(o')$, and it is a bijection of $\mathbb R^4$ with inverse
$u\mapsto M(u+x(o'))$, which is the transition in the reverse direction.

**The inertial atlas.** The **inertial atlas** of the model is the family of
all inertial frames together with their inertial charts. Its charts are
available at every event by [[lem-future-oriented-inertial-frames-exist]], which
supplies for every $o\in A$ an inertial frame with origin $o$; and any two of
its charts are related by the affine transition displayed above.
