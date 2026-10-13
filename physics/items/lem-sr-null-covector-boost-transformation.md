---
id: lem-sr-null-covector-boost-transformation
kind: lemma
title: 'Boost transformation of a future null wave covector and of its frame data'
status: published
origin: pipeline
domain: mathematics
deps: [def-sr-affine-phase-and-wave-covector,
       lem-sr-metric-duality-on-lorentz-vector-space,
       lem-sr-future-causal-pairing-negative,
       lem-sr-null-covector-frame-data,
       def-lorentz-boost,
       lem-boost-is-proper-orthochronous-with-inverse,
       def-lorentz-map-and-lorentz-group,
       lem-inertial-chart-transitions-are-affine-lorentz,
       thm-sr-tensor-and-current-transformation,
       def-ck-tensor-field-on-minkowski-space,
       def-inertial-frame-and-inertial-chart,
       thm-unique-coordinates-with-respect-to-an-ordered-basis,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       thm-cauchy-schwarz-finite, def-euclidean-inner-product]
dependency_roles:
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  lem-sr-metric-duality-on-lorentz-vector-space: mathematical-premise
  lem-sr-future-causal-pairing-negative: mathematical-premise
  lem-sr-null-covector-frame-data: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
dependency_level: 10
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 3.2-3.3 pp. 55-59 and 6.4-6.5 pp. 134-139; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 pp. 910-912: transformed wave phase; proofread transcription of the original at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space, let $x$ and $x'$ be inertial charts whose transition is $x'=B(\beta)x+b$ for some $\beta\in\mathbb R^3$ with $|\beta|<1$ and some $b\in\mathbb R^4$, where $B(\beta)$ is the passive boost of [[def-lorentz-boost]] and $\gamma:=(1-|\beta|^2)^{-1/2}$, and let $k$ be a future null wave covector with frame-$x$ data $(\varpi,s)$ as in [[lem-sr-null-covector-frame-data]], so that $k$ has components $(k_0,k_1,k_2,k_3)=(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ in $x$. Then:

**(i)** the components of the same covector $k$ in $x'$ are $k'_a=\bigl(B(-\beta)\bigr)^b{}_ak_b$, that is

$$k'_0=\gamma\bigl(k_0+\beta\cdot k_{\mathrm{vec}}\bigr),\qquad k'_{\mathrm{vec}}=k_{\mathrm{vec}}+\frac{\gamma-1}{|\beta|^2}(\beta\cdot k_{\mathrm{vec}})\beta+\gamma\beta k_0$$

for $\beta\ne0$ (and $k'=k$ for $\beta=0$), where $k_{\mathrm{vec}}:=(k_1,k_2,k_3)$;

**(ii)** with $\varpi':=-k'_0$ and $s'_i:=k'_i/\varpi'$ the frame-$x'$ data of $k$ is

$$\varpi'=\gamma(1-\beta\cdot s)\varpi>0,\qquad s'=\frac{s+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta-\gamma\beta}{\gamma(1-\beta\cdot s)}$$

for $\beta\ne0$ (and $\varpi'=\varpi$, $s'=s$ for $\beta=0$); moreover $|s'|=1$, so $k'_a=(-\varpi',\varpi's'_1,\varpi's'_2,\varpi's'_3)$ in $x'$;

**(iii)** in the axis case $\beta=be_1$ with $b\in(-1,1)$: $s'_1=(s_1-b)/(1-bs_1)$, and $s'_2=s_2/\bigl(\gamma(1-bs_1)\bigr)$, $s'_3=s_3/\bigl(\gamma(1-bs_1)\bigr)$;

**(iv)** $\beta\cdot s'=(\beta\cdot s-|\beta|^2)/(1-\beta\cdot s)$; in particular $\beta\cdot s'=0$ if and only if $\beta\cdot s=|\beta|^2$, and $\beta\cdot s'=-|\beta|^2$ if and only if $\beta\cdot s=0$;

**(v)** applying the transformation with $\beta$ replaced by $-\beta$ returns the original data $(\varpi,s)$, since $B(-\beta)$ is the inverse of $B(\beta)$.

The statement is pure algebra of $\eta$ and the boost; no choice principle is used.

## Facts & Assumptions

**Given:** Inertial charts $x,x'$ with $x'=B(\beta)x+b$, $\beta\in\mathbb R^3$, $|\beta|<1$, $b\in\mathbb R^4$, $\gamma=(1-|\beta|^2)^{-1/2}$, and a future null wave covector $k$ with frame-$x$ data $(\varpi,s)$.

[L1] $B(\beta)$ has matrix entries in the frame basis $B^0{}_0=\gamma$, $B^0{}_i=B^i{}_0=-\gamma\beta_i$, $B^i{}_j=\delta^i_j+\frac{\gamma-1}{|\beta|^2}\beta_i\beta_j$ for $i,j=1,2,3$ and $\beta\ne0$, while $B(0)=\operatorname{id}$; $\gamma\ge1$ with equality exactly when $\beta=0$ ([[def-lorentz-boost]]).

[L2] $B(\beta)$ is a proper orthochronous Lorentz map with $B(-\beta)=B(\beta)^{-1}$, and the transition $x'=B(\beta)x+b$ of inertial charts has proper orthochronous linear part ([[lem-boost-is-proper-orthochronous-with-inverse]], [[lem-inertial-chart-transitions-are-affine-lorentz]], [[def-lorentz-map-and-lorentz-group]]).

[L3] For a constant covector field $k$ on $A$ (of class $C^\infty$, in particular $C^1$) the components in the two charts satisfy $k'_a=(\Lambda^{-1})^b{}_ak_b$, where $\Lambda$ is the linear part of the transition; here $\Lambda=B(\beta)$ and $\Lambda^{-1}=B(-\beta)$ ([[thm-sr-tensor-and-current-transformation]], clause (ii), [[def-ck-tensor-field-on-minkowski-space]], [[def-inertial-frame-and-inertial-chart]]).

[L4] Frame data of a future null wave covector in any inertial frame: for the frame of $x'$, the numbers $\varpi':=-k(e'_0)$ and $s'_i:=k(e'_i)/\varpi'$ satisfy $\varpi'>0$, $|s'|=1$ and $k'_a=(-\varpi',\varpi's'_1,\varpi's'_2,\varpi's'_3)$ ([[lem-sr-null-covector-frame-data]], clauses (a)-(d)).

[L5] In the frame of $x$, $k_a=(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$, $\varpi>0$ and $|s|=1$, with coordinates taken in the frame's orthonormal basis and the Euclidean scalar product $\beta\cdot k_{\mathrm{vec}}=\sum_i\beta_ik_i$ ([[lem-sr-null-covector-frame-data]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-euclidean-inner-product]]).

[L6] $|\beta\cdot s|\le|\beta|\,|s|=|\beta|<1$, so $1-\beta\cdot s>0$ ([[thm-cauchy-schwarz-finite]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 Clause (i). Regard $k$ as the constant covector field on $A$; by [L3] its primed components are $k'_a=(B(-\beta))^b{}_ak_b$. For $\beta\ne0$ the matrix of $B(-\beta)$ has entries $(B(-\beta))^0{}_0=\gamma$, $(B(-\beta))^0{}_i=\gamma\beta_i$, $(B(-\beta))^i{}_0=\gamma\beta_i$ and $(B(-\beta))^i{}_j=\delta^i_j+\frac{\gamma-1}{|\beta|^2}\beta_i\beta_j$ by [L1]; therefore $k'_0=\gamma k_0+\gamma\sum_i\beta_ik_i=\gamma(k_0+\beta\cdot k_{\mathrm{vec}})$ and $k'_i=\gamma\beta_ik_0+k_i+\frac{\gamma-1}{|\beta|^2}\beta_i(\beta\cdot k_{\mathrm{vec}})$, which is the displayed vector identity. For $\beta=0$ one has $B(0)=\operatorname{id}$ by [L1], so $k'=k$. [L1, L2, L3, L5]

2.1 Clause (ii). By step 1.1 and [L5], $k'_0=\gamma(k_0+\beta\cdot k_{\mathrm{vec}})=\gamma(-\varpi+\beta\cdot\varpi s)=-\gamma(1-\beta\cdot s)\varpi$, hence $\varpi'=-k'_0=\gamma(1-\beta\cdot s)\varpi$, and this is positive because $\gamma\ge1$, $\varpi>0$ and $1-\beta\cdot s>0$ by [L6]; this also agrees with $\varpi'>0$ asserted by [L4]. Dividing the vector component of step 1.1 by $\varpi'$ gives $s'_i=k'_i/\varpi'=\bigl[s_i+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)\beta_i-\gamma\beta_i\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]$ for $\beta\ne0$, which is the displayed $s'$. For $\beta=0$, $k'=k$ gives $\varpi'=\varpi$ and $s'=s$. The normalization $|s'|=1$ and the component form $k'_a=(-\varpi',\varpi's')$ are clauses (a)-(d) of [L4] applied in the frame of $x'$. [step 1.1, L4, L5, L6]

3.1 Clause (iii). Let $\beta=be_1$ with $b\in(-1,1)$ and $\gamma=(1-b^2)^{-1/2}$. If $b\ne0$, substituting $\beta_1=b$, $\beta_2=\beta_3=0$ and $\beta\cdot s=bs_1$ into step 2.1 gives $s'_1=\bigl[s_1+\frac{\gamma-1}{b^2}(bs_1)b-\gamma b\bigr]/\bigl[\gamma(1-bs_1)\bigr]=(s_1-b)/(1-bs_1)$, because $s_1+(\gamma-1)s_1-\gamma b=\gamma(s_1-b)$, and $s'_2=s_2/\bigl[\gamma(1-bs_1)\bigr]$, $s'_3=s_3/\bigl[\gamma(1-bs_1)\bigr]$. If $b=0$ then $\gamma=1$ and $s'=s$ by step 2.1, which is the same as the displayed formulas at $b=0$. [step 2.1]

3.2 Clause (iv). For $\beta\ne0$, step 2.1 gives $\beta\cdot s'=\bigl[\beta\cdot s+\frac{\gamma-1}{|\beta|^2}(\beta\cdot s)(\beta\cdot\beta)-\gamma|\beta|^2\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]=\bigl[\beta\cdot s+(\gamma-1)(\beta\cdot s)-\gamma|\beta|^2\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]=\bigl[\gamma(\beta\cdot s)-\gamma|\beta|^2\bigr]/\bigl[\gamma(1-\beta\cdot s)\bigr]=(\beta\cdot s-|\beta|^2)/(1-\beta\cdot s)$; for $\beta=0$ both sides are $0$, so the identity holds always. Since $1-\beta\cdot s>0$ by [L6], $\beta\cdot s'=0$ holds exactly when $\beta\cdot s=|\beta|^2$, and $\beta\cdot s'=-|\beta|^2$ holds exactly when $\beta\cdot s-|\beta|^2=-|\beta|^2(1-\beta\cdot s)$, that is $\beta\cdot s(1-|\beta|^2)=0$, which by $|\beta|<1$ is exactly $\beta\cdot s=0$. [step 2.1, L1, L6]

4.1 Clause (v). The transition $x'=B(\beta)x+b$ inverts to $x=B(-\beta)x'+b'$ with $b':=-B(-\beta)b$, whose linear part $B(-\beta)$ is a proper orthochronous Lorentz map with $|-\beta|=|\beta|<1$ by [L2]; applying step 2.1 to the chart pair $(x',x)$ with parameter $-\beta$ computes the frame-$x$ data of $k$ from its frame-$x'$ data, and that frame-$x$ data is $(\varpi,s)$ by hypothesis. Directly, $\varpi''=\gamma\bigl(1-(-\beta)\cdot s'\bigr)\varpi'=\gamma(1+\beta\cdot s')\varpi'$ and step 3.2 gives $1+\beta\cdot s'=\bigl(1-\beta\cdot s+\beta\cdot s-|\beta|^2\bigr)/(1-\beta\cdot s)=(1-|\beta|^2)/(1-\beta\cdot s)$, so $\varpi''=\gamma\cdot\frac{1-|\beta|^2}{1-\beta\cdot s}\cdot\gamma(1-\beta\cdot s)\varpi=\gamma^2(1-|\beta|^2)\varpi=\varpi$; the vector part of the same instance returns a unit vector $s''$ with $k$'s frame-$x$ data equal to $(\varpi'',s'')$, and by the uniqueness of frame data in [L4] applied to the frame of $x$, $(\varpi'',s'')=(\varpi,s)$, so $s''=s$. This proves (i)-(v); the argument is pure algebra of $\eta$ and the boost, and no choice principle was used. [step 2.1, step 3.2, L2] ∎
