---
id: lem-sr-future-causal-pairing-negative
kind: lemma
title: 'A future timelike vector pairs negatively with every nonzero future causal vector'
status: published
origin: pipeline
domain: mathematics
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       lem-timelike-cone-has-two-convex-components,
       lem-future-oriented-inertial-frames-exist,
       def-inertial-frame-and-inertial-chart,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       thm-cauchy-schwarz-finite]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 3.2-3.3 pp. 55-59 and 6.4-6.5 pp. 134-139; signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space, let $n,v\in V$, and recall that a nonzero $v$ with $\eta(v,v)\le 0$ is causal ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]). Then:

**(a)** if $n$ is future timelike and $v$ is nonzero future causal, then $\eta(n,v)<0$;

**(b)** if $n$ is future timelike and $v$ is nonzero past causal, then $\eta(n,v)>0$;

**(c)** consequently, for a nonzero null vector $v$ and any future timelike $n$, $v$ is future null if and only if $\eta(n,v)<0$, and $v$ is past null if and only if $\eta(n,v)>0$; the sign of $\eta(n,v)$ does not depend on the choice of the future timelike $n$;

**(d)** if $n_{\mathrm{hat}}:=n/\sqrt{-\eta(n,n)}$ is the normalization of a future timelike $n$, then $n_{\mathrm{hat}}$ is future unit timelike, $\eta(n_{\mathrm{hat}},n_{\mathrm{hat}})=-1$, and $\eta(n,v)=\sqrt{-\eta(n,n)}\,\eta(n_{\mathrm{hat}},v)$ for every $v$, so the sign statements hold for $n_{\mathrm{hat}}$ as well.

The statement is pure affine Minkowski geometry, and no choice principle is used.

## Facts & Assumptions

**Given:** An oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and vectors $n,v\in V$.

[L1] A vector is timelike when $\eta(v,v)<0$, null when $v\ne 0$ and $\eta(v,v)=0$, spacelike when $\eta(v,v)>0$, and causal when it is timelike or null; the zero vector has no causal character and every nonzero vector has exactly one character ([[def-causal-classification-of-lorentz-vectors]]).

[L2] $C^+$ is one of the two connected components of the timelike set, and future timelike means membership in $C^+$, future null means nonzero null membership in $\operatorname{cl}(C^+)$, and future causal means future timelike or future null; the closed cones $\operatorname{cl}(C^+)$ and $\operatorname{cl}(C^-)$ are convex cones meeting only at $0$, and every causal vector is future or past but not both ([[def-time-orientation-and-future-causal-sets]]).

[L3] In an $\eta$-orthonormal basis $(e_0,e_1,e_2,e_3)$ with $e_0$ timelike, writing $x=x^0e_0+x_{\mathrm{vec}}$ with $x_{\mathrm{vec}}:=\sum_{i=1}^3x^ie_i\in\operatorname{span}(e_1,e_2,e_3)$ and $|x_{\mathrm{vec}}|:=\sqrt{(x^1)^2+(x^2)^2+(x^3)^2}$ and $\eta_{00}:=\eta(e_0,e_0)=-1$, the timelike set splits into $T_+=\{x:x^0>|x_{\mathrm{vec}}|\}$ and $T_-=\{x:x^0<-|x_{\mathrm{vec}}|\}$, these are exactly its two connected components, $\operatorname{cl}(T_+)=\{x:x^0\ge|x_{\mathrm{vec}}|\}$ and $\operatorname{cl}(T_-)=\{x:x^0\le-|x_{\mathrm{vec}}|\}$ ([[lem-timelike-cone-has-two-convex-components]]).

[L4] For every event $o\in A$ there is an inertial frame $(o;e_0,e_1,e_2,e_3)$, so its ordered basis is $\eta$-orthonormal with $e_0\in C^+$ ([[lem-future-oriented-inertial-frames-exist]], [[def-inertial-frame-and-inertial-chart]]).

[L5] For an inertial frame, with $S=\operatorname{span}(e_1,e_2,e_3)$ and $\delta:S\times S\to\mathbb R$, $\delta(w,z):=\eta(w,z)$, the positive-definite spatial form, the spatial vectors $x_{\mathrm{vec}}=\sum_{i=1}^3x^ie_i$ and $y_{\mathrm{vec}}=\sum_{i=1}^3y^ie_i$ belong to $S$ and satisfy $\delta(x_{\mathrm{vec}},y_{\mathrm{vec}})=\sum_{i=1}^3x^iy^i$ and $|x_{\mathrm{vec}}|=\sqrt{\delta(x_{\mathrm{vec}},x_{\mathrm{vec}})}$; bilinearity and $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)$ give $\eta(x,y)=-x^0y^0+\delta(x_{\mathrm{vec}},y_{\mathrm{vec}})$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L6] For real lists, $|\sum_{k<n}a_kb_k|\le\sqrt{\sum_{k<n}a_k^2}\sqrt{\sum_{k<n}b_k^2}$ ([[thm-cauchy-schwarz-finite]]), which in the coordinates of [L5] reads $|\delta(x_{\mathrm{vec}},y_{\mathrm{vec}})|\le|x_{\mathrm{vec}}|\,|y_{\mathrm{vec}}|$.

## Proof

**Proof technique:** direct.

1.1 Frame and coordinates. Fix an inertial frame $(o;e_0,e_1,e_2,e_3)$ [L4] and write every $x\in V$ as $x=x^0e_0+x_{\mathrm{vec}}$, where $x_{\mathrm{vec}}:=\sum_{i=1}^3x^ie_i\in S$; then $\eta(x,y)=-x^0y^0+\delta(x_{\mathrm{vec}},y_{\mathrm{vec}})$ with $|\delta(x_{\mathrm{vec}},y_{\mathrm{vec}})|\le|x_{\mathrm{vec}}|\,|y_{\mathrm{vec}}|$ by [L5, L6]. Because $e_0\in C^+$ and $e_0\in T_+$, the component $T_+$ of [L3] is $C^+$, so $C^+=\{x:x^0>|x_{\mathrm{vec}}|\}$ and $\operatorname{cl}(C^+)=\operatorname{cl}(T_+)=\{x:x^0\ge|x_{\mathrm{vec}}|\}$ [L2, L3]. [L2, L3, L4, L5, L6]

2.1 Clause (a). Let $n$ be future timelike and $v\ne 0$ future causal. By [L2] and step 1.1 the future causal vectors are $C^+\cup(\operatorname{cl}(C^+)\setminus\{0\})$, so in the frame of step 1.1, $n^0>|n_{\mathrm{vec}}|$ and $v^0\ge|v_{\mathrm{vec}}|\ge0$; $v\ne0$ rules out $v^0=0$, so $v^0>0$. Then $\eta(n,v)=-n^0v^0+\delta(n_{\mathrm{vec}},v_{\mathrm{vec}})\le-n^0v^0+|n_{\mathrm{vec}}|\,|v_{\mathrm{vec}}|\le-n^0v^0+|n_{\mathrm{vec}}|\,v^0=-(n^0-|n_{\mathrm{vec}}|)v^0<0$, because $|v_{\mathrm{vec}}|\le v^0$, $|n_{\mathrm{vec}}|\ge0$, $n^0-|n_{\mathrm{vec}}|>0$ and $v^0>0$. [step 1.1]

3.1 Clause (b). If $n$ is future timelike and $v$ is nonzero past causal, then $-v$ is nonzero future causal: $v\in C^-$ or $v$ is past null, and negating does not change $\eta(v,v)$, while $\operatorname{cl}(C^-)=-\operatorname{cl}(C^+)$ and $T_-=-T_+$ show $-v$ lies in $C^+$ (timelike case) or is nonzero null in $\operatorname{cl}(C^+)$ (null case) [L2, L3]. By step 2.1, $\eta(n,-v)<0$, and bilinearity gives $\eta(n,-v)=-\eta(n,v)$, so $\eta(n,v)>0$. [step 2.1, L2, L3]

4.1 Clause (c). Let $v$ be nonzero null and $n$ future timelike. If $v$ is future null then $v$ is nonzero future causal and step 2.1 gives $\eta(n,v)<0$; if $v$ is past null then step 3.1 gives $\eta(n,v)>0$. Since a causal vector is future or past but not both [L2] and a nonzero null vector is causal, exactly one of these two cases occurs, so conversely $\eta(n,v)<0$ forces $v$ future null and $\eta(n,v)>0$ forces $v$ past null; the sign is therefore determined by $v$ alone and is independent of the future timelike $n$ used. [step 2.1, step 3.1, L1, L2]

5.1 Clause (d). For future timelike $n$, $-\eta(n,n)>0$ by [L1], so $\lambda:=\sqrt{-\eta(n,n)}$ is a positive real number and $n_{\mathrm{hat}}:=n/\lambda$ is defined. By step 1.1, $n^0>|n_{\mathrm{vec}}|\ge0$; multiplying by $\lambda^{-1}>0$ gives $n_{\mathrm{hat}}^0>|n_{\mathrm{hat,vec}}|$, so $n_{\mathrm{hat}}\in T_+=C^+$ is future timelike; bilinearity gives $\eta(n_{\mathrm{hat}},n_{\mathrm{hat}})=\lambda^{-2}\eta(n,n)=-1$ and $\eta(n,v)=\eta(\lambda n_{\mathrm{hat}},v)=\lambda\,\eta(n_{\mathrm{hat}},v)$ for every $v$. Hence $\eta(n_{\mathrm{hat}},v)$ has the same sign as $\eta(n,v)$ for every $v$, and the sign statements of steps 2.1, 3.1 and 4.1 hold with $n$ replaced by $n_{\mathrm{hat}}$; this proves (a)-(d). The argument used only the affine Minkowski geometry of the cited items, and no choice principle was used. [step 1.1, step 2.1, step 3.1, step 4.1, L1] ∎
