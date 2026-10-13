---
id: lem-sr-null-covector-frame-data
kind: lemma
title: 'Frame data of a future null wave covector: the unique pair $(\varpi,s)$ with $|s|=1$'
status: published
origin: pipeline
domain: mathematics
deps: [def-sr-affine-phase-and-wave-covector,
       lem-sr-metric-duality-on-lorentz-vector-space,
       lem-sr-future-causal-pairing-negative,
       def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       def-inertial-frame-and-inertial-chart,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       lem-timelike-cone-has-two-convex-components,
       thm-unique-coordinates-with-respect-to-an-ordered-basis,
       def-euclidean-inner-product]
dependency_roles:
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  lem-sr-metric-duality-on-lorentz-vector-space: mathematical-premise
  lem-sr-future-causal-pairing-negative: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
dependency_level: 7
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 6.4 Duality pp. 134-137 and Section 6.5.1 Doppler shift p. 137; signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, the wave four-vector (6.1)-(6.5) pp. 25-26'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space, let $k$ be a future null wave covector ([[def-sr-affine-phase-and-wave-covector]]) and let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame with inertial chart $x$ ([[def-inertial-frame-and-inertial-chart]]). Define

$$\varpi:=-k(e_0),\qquad s_i:=\frac{k(e_i)}{\varpi}\quad (i=1,2,3),$$

and write $s:=(s_1,s_2,s_3)\in\mathbb R^3$ with Euclidean norm $|s|$ ([[def-euclidean-inner-product]]). Then:

**(a)** $\varpi>0$;

**(b)** $|s|=1$;

**(c)** for every $v=v^0e_0+v^1e_1+v^2e_2+v^3e_3$ in $V$ one has $k(v)=\varpi(-v^0+s_1v^1+s_2v^2+s_3v^3)$; equivalently the components of $k$ in the frame are $(k_0,k_1,k_2,k_3)=(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$;

**(d)** the raised vector is $k^\sharp=\varpi(e_0+s_1e_1+s_2e_2+s_3e_3)$, with frame coordinates $\varpi(1,s_1,s_2,s_3)$; it is nonzero and future null, and $k(k^\sharp)=\eta(k^\sharp,k^\sharp)=0$;

**(e)** conversely, if a covector $k\in V^*$ has frame components $(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ with $\varpi>0$ and $|s|=1$ in some inertial frame, then $k$ is a future null wave covector, and the construction of (a)-(b) applied to $k$ in that frame returns the same $\varpi$ and $s$;

**(f)** the pair $(\varpi,s)$ is uniquely determined by $k$ and the frame, and two future null wave covectors with the same pair agree; it is thus the complete frame description of a future null wave covector.

No choice principle is used.

## Facts & Assumptions

**Given:** An oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$, a future null wave covector $k$, and an inertial frame $(o;e_0,e_1,e_2,e_3)$.

[L1] A wave covector is a nonzero element of $V^*$; it is future null if and only if its raised vector is future null ([[def-sr-affine-phase-and-wave-covector]], clause (c)). Thus the given $k$ satisfies $k^\sharp\neq0$ and $\eta(k^\sharp,k^\sharp)=0$. Metric duality gives $k(w)=\eta(k^\sharp,w)$ for every $w\in V$ ([[lem-sr-metric-duality-on-lorentz-vector-space]], clause (c)).

[L2] An inertial frame has $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, with $e_0$ future ($e_0\in C^+$), and its vectors are linearly independent with every vector having unique coordinates in the basis ([[def-inertial-frame-and-inertial-chart]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L3] If $n$ is future timelike and $v$ is nonzero future causal, then $\eta(n,v)<0$ ([[lem-sr-future-causal-pairing-negative]], clause (a)).

[L4] A nonzero vector has exactly one causal character, and it is causal exactly when it is timelike or null; a causal vector is future or past but not both; future causal means future timelike or future null, and future null means nonzero null in $\operatorname{cl}(C^+)$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L5] In the frame, put $S:=\operatorname{span}(e_1,e_2,e_3)$ and write $v=v^0e_0+v_{\mathrm{vec}}$, where $v_{\mathrm{vec}}:=\sum_{i=1}^3v^ie_i\in S$; define $w_{\mathrm{vec}}$ likewise. For the positive-definite spatial form $\delta:S\times S\to\mathbb R$, $\eta(v,w)=-v^0w^0+\delta(v_{\mathrm{vec}},w_{\mathrm{vec}})$ and $\delta(v_{\mathrm{vec}},w_{\mathrm{vec}})=\sum_{i=1}^3v^iw^i$, so $|v_{\mathrm{vec}}|^2=\sum_{i=1}^3(v^i)^2$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L6] For the components $k_a:=k(e_a)$ of a covector, the raised vector is $k^\sharp=-k_0e_0+k_1e_1+k_2e_2+k_3e_3$, and in the frame $\eta(k^\sharp,k^\sharp)=-(k_0)^2+(k_1)^2+(k_2)^2+(k_3)^2$ ([[lem-sr-metric-duality-on-lorentz-vector-space]], clause (d)).

[L7] The frame's first vector is future, so $C^+=\{v:v^0>|v_{\mathrm{vec}}|\}$ and $\operatorname{cl}(C^+)=\{v:v^0\ge|v_{\mathrm{vec}}|\}$ ([[lem-timelike-cone-has-two-convex-components]]).

[L8] $|s|^2=\sum_i s_i^2$ for the Euclidean norm on $\mathbb R^3$ ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 Clause (a). Since $e_0$ is future and $\eta(e_0,e_0)=-1$, it is future timelike, and $k^\sharp$ is nonzero future causal by [L1]; [L3] gives $\eta(e_0,k^\sharp)<0$. By [L1] and symmetry of $\eta$, $k(e_0)=\eta(k^\sharp,e_0)=\eta(e_0,k^\sharp)<0$, so $\varpi=-k(e_0)>0$. [L1, L2, L3]

1.2 Clause (c). For $v=\sum_av^ae_a$ with unique coordinates and $k$ linear [L2], $k(v)=\sum_av^ak(e_a)=v^0k(e_0)+\sum_iv^ik(e_i)=-\varpi v^0+\sum_i\varpi s_iv^i=\varpi(-v^0+s_1v^1+s_2v^2+s_3v^3)$, using the definitions of $\varpi$ and $s_i$; the component statement is the same identity read on the basis. [L2]

1.3 Clause (e). Let $k$ have components $(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ with $\varpi>0$ and $|s|=1$ in the given inertial frame. Then $k(e_0)=-\varpi\neq0$, so $k\neq0$; by [L6], $k^\sharp=-k_0e_0+\sum_ik_ie_i=\varpi(e_0+s_1e_1+s_2e_2+s_3e_3)$. Its frame coordinates are $\varpi(1,s)$, so $v:=k^\sharp$ satisfies $v^0=\varpi=\varpi|s|\ge0$ and $|v_{\mathrm{vec}}|=\varpi|s|=\varpi=v^0$ by [L5, L8]; hence $v\in\operatorname{cl}(C^+)\setminus\{0\}$ by [L7], and $\eta(v,v)=-\varpi^2+\varpi^2|s|^2=0$ by [L5, L6, L8], so $v$ is null; by [L4] $v$ is future null, and by [L1] the nonzero covector $k$ is a future null wave covector. The construction of (a)-(b) returns $-k(e_0)=\varpi$ and $k(e_i)/\varpi=\varpi s_i/\varpi=s_i$. [L1, L4, L5, L6, L7, L8]

2.1 Clause (b). By [L6], $k^\sharp=-k_0e_0+k_1e_1+k_2e_2+k_3e_3$ with $k_0=k(e_0)=-\varpi$ and $k_i=k(e_i)=\varpi s_i$, so $k^\sharp=\varpi e_0+\sum_i\varpi s_ie_i$. Orthonormality of the frame [L2] and bilinearity give $\eta(k^\sharp,k^\sharp)=-\varpi^2+\sum_i(\varpi s_i)^2=\varpi^2\bigl(|s|^2-1\bigr)$ by [L8]; by [L1] this value is $0$, and $\varpi>0$ by step 1.1, so $|s|^2=1$ and $|s|=1$. [step 1.1, L2, L6, L8]

2.2 Clause (d). Step 1.2 and $k_i=\varpi s_i$, $k_0=-\varpi$ give $k^\sharp=-k_0e_0+k_1e_1+k_2e_2+k_3e_3=\varpi(e_0+s_1e_1+s_2e_2+s_3e_3)$ by [L6]; the coefficient of $e_0$ is $\varpi>0$ and the coordinates are $\varpi(1,s_1,s_2,s_3)$, so $k^\sharp\neq0$; [L1] gives that $k^\sharp$ is future null and $k(k^\sharp)=\eta(k^\sharp,k^\sharp)=0$. [step 1.1, step 1.2, L1, L6]

3.1 Clause (f). By definition $\varpi=-k(e_0)$ and $s_i=k(e_i)/\varpi$ are determined by $k$ and the frame (with $\varpi>0$ by step 1.1), so the pair is unique for $k$; conversely, if two covectors have the same frame data, they take the same values on each $e_a$, hence agree on all of $V$ by linearity and [L2]. Clause (c) exhibits the data of every future null wave covector, clause (e) shows every admissible pair arises from one, and steps 2.1 and 2.2 record $|s|=1$ and the raised vector; this proves (a)-(f). No choice principle was used. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, L2] ∎
