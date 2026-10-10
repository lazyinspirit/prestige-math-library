---
id: def-oriented-minkowski-volume-form
kind: definition
title: "The oriented volume form epsilon and the permutation symbols of an inertial frame"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-inertial-frame-and-inertial-chart, def-determinant-of-a-square-matrix, def-alternating-k-linear-map, def-lorentz-form-and-inertia, thm-determinant-is-the-unique-normalized-alternating-multilinear-function]
dependency_roles:
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-alternating-k-linear-map: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-determinant-is-the-unique-normalized-alternating-multilinear-function: mathematical-premise
justified_by: [lem-volume-form-is-independent-of-the-oriented-frame]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space and let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame with its inertial chart
([[def-inertial-frame-and-inertial-chart]]). Every $v\in V$ has a unique
coordinate vector $(v^0,v^1,v^2,v^3)$ with $v=\sum_av^ae_a$. For an ordered
$4$-tuple $(v_0,v_1,v_2,v_3)$ of vectors of $V$ let

$$[v_j^a]:=\begin{pmatrix}v_0^0&v_1^0&v_2^0&v_3^0\\ v_0^1&v_1^1&v_2^1&v_3^1\\ v_0^2&v_1^2&v_2^2&v_3^2\\ v_0^3&v_1^3&v_2^3&v_3^3\end{pmatrix}$$

be the $4\times4$ real matrix whose $j$-th column lists the coordinates of
$v_j$ in the ordered basis $(e_0,e_1,e_2,e_3)$, and define

$$\epsilon(v_0,v_1,v_2,v_3):=\det\bigl([v_j^a]\bigr)$$

by the determinant of a square matrix
([[def-determinant-of-a-square-matrix]]). Then $\epsilon$ is an **alternating
$4$-linear form** on $V$
([[def-alternating-k-linear-map]]): the determinant is multilinear and
alternating in the columns, so replacing one $v_j$ by $\lambda v_j+\mu w$
replaces the $j$-th column correspondingly and $\epsilon$ is linear in each
argument, and $\epsilon(v_0,\ldots,v_3)=0$ whenever two arguments coincide,
since then two columns coincide
([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).
The form $\epsilon$ is the **oriented volume form of the model**. Its
well-definedness as a form of the model, independent of the inertial frame used
in the display, is proved in [[lem-volume-form-is-independent-of-the-oriented-frame]].

**Components.** Write $\epsilon_{abcd}:=\epsilon(e_a,e_b,e_c,e_d)$ for the
components of $\epsilon$ in the inertial frame. Evaluating the determinant on
the coordinate matrix of $(e_a,e_b,e_c,e_d)$, which is the permutation matrix
of the tuple, gives

$$\epsilon_{0123}=+1,\qquad \epsilon_{abcd}=\operatorname{sgn}(\sigma)\ \text{ if }(a,b,c,d)=(\sigma(0),\sigma(1),\sigma(2),\sigma(3))\ \text{ for a permutation }\sigma,$$

and $\epsilon_{abcd}=0$ whenever two of the indices coincide; these are the
**permutation symbols** of the frame. Indeed the coordinate vector of $e_a$ is
the $a$-th standard basis vector, so the coordinate matrix of
$(e_a,e_b,e_c,e_d)$ is the permutation matrix of the tuple and its determinant
is $+1$ on the identity tuple, the sign of the permutation otherwise, and $0$
when two indices repeat.

**Raised components.** The **inverse metric** $\eta^{ab}$ is the inverse of the
matrix $\eta_{ab}:=\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, which
exists because $\eta$ is nondegenerate
([[def-lorentz-form-and-inertia]]); it is again
$\eta^{ab}=\operatorname{diag}(-1,1,1,1)^{ab}$. The raised components of the
volume form are

$$\epsilon^{abcd}:=\eta^{aa'}\eta^{bb'}\eta^{cc'}\eta^{dd'}\epsilon_{a'b'c'd'}$$

(summation over repeated primed indices). Since the inverse metric is diagonal
with diagonal entries $-1,1,1,1$, only one term contributes to $\epsilon^{0123}$
and

$$\epsilon^{0123}=\eta^{00}\eta^{11}\eta^{22}\eta^{33}\epsilon_{0123}=(-1)(+1)(+1)(+1)(+1)=-1 .$$

**Spatial symbol.** The **spatial permutation symbol** $\epsilon_{ijk}$ for
$i,j,k\in\{1,2,3\}$ is defined by $\epsilon_{123}=+1$ together with alternation
in the three indices; explicitly $\epsilon_{ijk}=+1$ for even permutations of
$(1,2,3)$, $\epsilon_{ijk}=-1$ for odd permutations, and $\epsilon_{ijk}=0$
whenever two of $i,j,k$ coincide.
