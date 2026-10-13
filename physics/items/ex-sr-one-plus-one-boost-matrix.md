---
id: ex-sr-one-plus-one-boost-matrix
kind: example
title: "Worked 1+1 boost matrix: metric, determinant, inverse and interval invariance"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 8
deps: [def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse,
       def-inertial-frame-and-inertial-chart, def-euclidean-inner-product,
       def-time-orientation-and-future-causal-sets,
       def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

Worked computation in an inertial frame whose spatial direction is $e_1$, with
coordinates $(x^0,x^1)$ and $\eta_0=\operatorname{diag}(-1,1)$. Take
$\beta=3/5$, so $\gamma=(1-9/25)^{-1/2}=5/4$ and the passive boost of
[[def-lorentz-boost]] is the linear map with matrix
$B=\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}$ on the $(e_0,e_1)$ plane
(the identity on the other spatial directions of the frame). Then:

(i) $B^{T}\eta_0B=\eta_0$: the $(0,0)$ entry is
$(5/4)^2-(3/4)^2=25/16-9/16=1$ times $-1$, the spatial diagonal entry is
$25/16-9/16=1$, and the off-diagonal entry
$(5/4)(3/4)+(-3/4)(5/4)=0$, giving $\eta_0$;

(ii) $\det B=(5/4)^2-(3/4)^2=1$, so $B$ is proper;

(iii) $Be_0$ has coordinates $(5/4,-3/4)$ and
$\eta_0(Be_0,Be_0)=-25/16+9/16=-1$, so the future timelike vector $e_0$ is
mapped to a future timelike vector;

(iv) $B(-3/5)B(3/5)=\begin{pmatrix}5/4&3/4\\ 3/4&5/4\end{pmatrix}\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}$,
so the inverse is the boost with the opposite parameter;

(v) the events with coordinates $(0,0)$ and $(13,11)$ have images $(0,0)$ and
$(8,4)$: $x'^0=(5/4)(13-(3/5)11)=(5/4)(32/5)=8$ and
$x'^1=(5/4)(11-(3/5)13)=(5/4)(16/5)=4$, and the interval computed in the two
frames is the same: $-(8)^2+4^2=-48=-(13)^2+11^2$ in the convention $\eta_0$;

(vi) the null lines $x^1=\pm x^0$ are preserved: $B(1,1)=(1/2,1/2)$ and
$B(1,-1)=(2,-2)$ are null, and $B(1,-1)=4\,(1/2,-1/2)$, so the images are
exactly the same pair of lines.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$, the parameter $\beta=3/5$, and the boost $B:=B(3/5\,e_1)$.

[L1] For $|\beta|<1$ the passive boost in the $1+1$ case $\boldsymbol\beta=\beta e_1$ acts on the coordinates of the $(e_0,e_1)$ plane by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$, with $\gamma=(1-\beta^2)^{-1/2}>0$ and $\gamma$ the rational power of the positive base $1-\beta^2$; the matrix in the ordered basis $(e_0,e_1)$ is $\begin{pmatrix}\gamma&-\gamma\beta\\ -\gamma\beta&\gamma\end{pmatrix}$, and the map fixes every vector with $x^0=x^1=0$, namely every vector in $\operatorname{span}(e_2,e_3)$ ([[def-lorentz-boost]]).

[L2] $B(\beta)$ is a proper orthochronous Lorentz map with $B(\beta)^{-1}=B(-\beta)$, and $B(\beta)e_0=\gamma(e_0-\beta e_1)$; the map $\beta\mapsto B(\beta)$ is injective ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L3] In an inertial frame $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ and $e_0\in C^+$; one has $\eta(x^0e_0+x^1e_1,x^0e_0+x^1e_1)=-(x^0)^2+(x^1)^2$ in the plane coordinates ([[def-inertial-frame-and-inertial-chart]]).

[L4] $C^+$ is one of the two components of the timelike set and is the set of future timelike vectors; a Lorentz map is orthochronous exactly when it maps $C^+$ onto $C^+$ ([[def-time-orientation-and-future-causal-sets]], [[lem-boost-is-proper-orthochronous-with-inverse]]).

[L5] A nonzero vector $v$ is null when $\eta(v,v)=0$ and timelike when $\eta(v,v)<0$ ([[def-causal-classification-of-lorentz-vectors]]).



## Proof

**Proof technique:** direct.

1.1 Evaluate the $2\times2$ matrix $B$: $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$, so $B=\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}$, and $B$ acts as the identity on the coordinate directions $e_2,e_3$ because $\boldsymbol\beta=3/5\,e_1$ has vanishing $e_2,e_3$ components in [L1]. For the product $B^{T}\eta_0B$, the four entries are $(5/4)(-5/4)+(-3/4)(-3/4)=-25/16+9/16=-1$ in the $(0,0)$ slot, $(5/4)(3/4)+(-3/4)(5/4)=15/16-15/16=0$ and $(-3/4)(-5/4)+(5/4)(-3/4)=15/16-15/16=0$ in the two off-diagonal slots, and $(-3/4)(3/4)+(5/4)(5/4)=-9/16+25/16=1$ in the $(1,1)$ slot; hence $B^{T}\eta_0B=\operatorname{diag}(-1,1)=\eta_0$. [L1, algebra]

1.2 The determinant is $\det B=(5/4)(5/4)-(-3/4)(-3/4)=25/16-9/16=1$, so $B$ is proper in the sense of the properness condition of [L2]. [L2, algebra]

1.3 By [L2], $Be_0=\gamma(e_0-\beta e_1)=(5/4)(e_0-(3/5)e_1)$, with coordinates $(5/4,-3/4)$; [L3] gives $\eta(Be_0,Be_0)=-(5/4)^2+(3/4)^2=-1$, so $Be_0$ is timelike by [L5]. Since $B$ is orthochronous by [L2] and $e_0\in C^+$ by [L3], [L4] gives $Be_0\in B(C^+)=C^+$, so $Be_0$ is future timelike: the future timelike vector $e_0$ is mapped to a future timelike vector. [L2, L3, L4, L5, algebra]

1.4 The product of clause (iv) is $\begin{pmatrix}5/4&3/4\\ 3/4&5/4\end{pmatrix}\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}=\begin{pmatrix}25/16-9/16&-15/16+15/16\\ -15/16+15/16&-9/16+25/16\end{pmatrix}=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}$, and the first factor is the matrix of $B(-3/5)$ by [L1]; this is the instance at $\beta=3/5$ of $B(-\beta)B(\beta)=\operatorname{id}$ from [L2], so the inverse is the boost with the opposite parameter. [L1, L2, algebra]

1.5 For the two null directions, [L1] gives $B(1,1)=\bigl((5/4)(1-3/5),(5/4)(1-3/5)\bigr)=(1/2,1/2)$ and $B(1,-1)=\bigl((5/4)(1+3/5),(5/4)(-1-3/5)\bigr)=(2,-2)$; both images satisfy $\eta_0=0$ on their squares: $-(1/2)^2+(1/2)^2=0$ and $-4+4=0$, so they are null by [L5]. Since $B(1,1)=\tfrac12(1,1)$ and $B(1,-1)=2(1,-1)$, the image of the line $x^1=x^0$ is the same line and the image of the line $x^1=-x^0$ is the same line; hence the pair of null lines $\{x^1=x^0\}\cup\{x^1=-x^0\}$ is mapped onto itself, and the images are exactly that pair. [L1, L5, algebra]

2.1 For the event with coordinates $(13,11)$, [L1] gives $x'^0=(5/4)(13-(3/5)11)=(5/4)(13-33/5)=(5/4)(32/5)=8$ and $x'^1=(5/4)(11-(3/5)13)=(5/4)(11-39/5)=(5/4)(16/5)=4$, while $(0,0)$ is fixed because the boost is linear. The interval in $\eta_0$ is $-(8)^2+(4)^2=-64+16=-48$ and $-(13)^2+(11)^2=-169+121=-48$; this numerical equality is the instance of $B^{T}\eta_0B=\eta_0$ from step 1.1 applied to the coordinate difference $(13,11)$. [L1, step 1.1, algebra]

3.1 Steps 1.1-1.4 verify clauses (i)-(iv), step 2.1 verifies clause (v), and step 1.5 verifies clause (vi); every clause of the Example is a checked finite computation with the displayed rational entries. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 1.5] ∎
