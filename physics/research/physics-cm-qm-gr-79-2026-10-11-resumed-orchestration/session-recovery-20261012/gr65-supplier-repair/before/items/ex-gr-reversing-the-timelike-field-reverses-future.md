---
id: ex-gr-reversing-the-timelike-field-reverses-future
kind: example
title: "Reversing the time orientation reverses the future cone"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, lem-gr-timelike-fields-define-equal-or-opposite-future-cones, lem-gr-future-causal-classification-by-a-timelike-field, ex-gr-minkowski-chart-as-a-lorentzian-manifold, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-timelike-fields-define-equal-or-opposite-future-cones: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  ex-gr-minkowski-chart-as-a-lorentzian-manifold: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2: causal vectors at a point fall into two disconnected sets, printed pp. 26-27 (PDF pp. 27-28)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.3: past-directed and future-directed light cones, printed p. 94 (PDF p. 101)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and put $N':=-N$. Then $(M,g,N')$ is
again a time-oriented smooth Lorentzian four-manifold, and at every $p\in M$
the future-directed causal vectors of $N'$ are exactly the past-directed causal
vectors of $N$; equivalently $C_p^+(N')=C_p^-(N)$. In the flat model of
[[ex-gr-minkowski-chart-as-a-lorentzian-manifold]] with $N=\partial_0$, the
vector $\partial_0$ is future-directed for $N$ and past-directed for $-N$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and its reversal $N'=-N$.

[L1] A time orientation is a smooth vector field $N$ with $g_p(N_p,N_p)<0$ at every $p$; a nonzero causal $v$ is future-directed when $g_p(v,N_p)<0$ and past-directed when $g_p(v,N_p)>0$ ([[def-gr-smooth-lorentzian-objects]]).

[L2] For two smooth timelike fields $N,N'$ the function $f(p)=g_p(N_p,N'_p)$ is smooth and nowhere zero, and on each connected set it has constant sign; where $f<0$ the future cones of $N$ and $N'$ agree, and where $f>0$ they are opposite, in particular $C_p^+(N')=C_p^-(N)$ ([[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]).

[L3] A nonzero causal vector is future-directed exactly when it lies in $\operatorname{cl}(C_p^+)\setminus\{0\}$ and past-directed exactly when it lies in $\operatorname{cl}(C_p^-)\setminus\{0\}$ ([[lem-gr-future-causal-classification-by-a-timelike-field]], [[def-gr-smooth-lorentzian-objects]]).

[L4] In the flat model with $N=\partial_0$, the vector $\partial_0$ is smooth and $g_p(\partial_0,\partial_0)=-1<0$ ([[ex-gr-minkowski-chart-as-a-lorentzian-manifold]], [[def-smooth-vector-field-as-a-tangent-bundle-section]]).

## Verification

**Proof technique:** direct.

1.1 The field $N'=-N$ has component functions the negatives of those of $N$ in every chart, hence is smooth, and $g_p(N'_p,N'_p)=g_p(N_p,N_p)<0$ for every $p$; by [L1] the triple $(M,g,N')$ is a time-oriented smooth Lorentzian four-manifold. [L1, given]

2.1 For the pair $(N,N')$ the function of [L2] is $f(p)=g_p(N_p,-N_p)=-g_p(N_p,N_p)>0$ for every $p$; so $f$ is positive on every connected set, and the positive-sign case of [L2] gives $C_p^+(N')=C_p^-(N)$ at every $p$. [step 1.1, L2, algebra]

3.1 By [L3] applied in the two time orientations, the future-directed causal vectors of $N'$ are $\operatorname{cl}(C_p^+(N'))\setminus\{0\}=\operatorname{cl}(C_p^-(N))\setminus\{0\}$, which are exactly the past-directed causal vectors of $N$; and symmetrically the future-directed causal vectors of $N$ are the past-directed ones of $N'$. [step 2.1, L3, algebra]

4.1 In the flat model, $N'=-\partial_0$ and $g_p(\partial_0,N')=-g_p(\partial_0,\partial_0)=1>0$ by [L4], so by [L1] the vector $\partial_0$ is past-directed for $N'$; it is future-directed for $N$ since $g_p(\partial_0,N)=-1<0$. This is the concrete instance of step 3.1, and it shows that the future/past attribution of a fixed causal vector is relative to the adopted time orientation. [step 3.1, L1, L4, algebra] ∎

## Remarks

**Choice convention.** The smooth vector fields of this example are the
tangent-bundle sections of
[[def-smooth-vector-field-as-a-tangent-bundle-section]], whose canonical smooth
structure on $TM$ assumes the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this example inherits that assumption and uses no
further choice principle.
