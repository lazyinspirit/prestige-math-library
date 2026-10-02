---
id: lem-euclidean-balls-are-bounded-c-one-domains
kind: lemma
title: "Euclidean balls are bounded C-one domains with radial outward normal"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-countable-choice, def-euclidean-spheres-and-closed-balls, cor-double-orthogonal-complement-and-dimension, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-bessel-inequality-and-finite-parseval-identity, thm-real-power-continuity-and-derivatives, thm-chain-rule-for-total-derivatives]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 44–49, ball boundary as a smooth graph with radial normal"
---

## Statement

Assume Countable Choice. In this item use one-based labels $e_j:=e_{j-1}^{\mathrm{can}}$ for $1\le j\le n$. Let $n\ge2$, $a\in\mathbb R^n$ and $R>0$. The open ball
$B_R(a)=\{x\in\mathbb R^n:|x-a|<R\}$ is a bounded $C^1$ domain in the sense
of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], and for
every boundary point $y\in\partial B_R(a)=S_R(a)$ its outward unit normal is
the radial vector $\nu(y)=(y-a)/R$.

## Facts & Assumptions

**Given:** an integer $n\ge2$, a centre $a\in\mathbb R^n$ and a radius $R>0$; write $\Omega:=B_R(a)$.

[A1] Countable Choice is assumed, as in the published surface-integration convention used in [F1] ([[def-countable-choice]]).

[F1] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is locally, after a rigid change of coordinates with orthogonal part $Q$, the graph $t=h(y)$ of a $C^1$ function $h$ on an open ball $B\subseteq\mathbb R^{n-1}$, with the domain locally exactly the subgraph $t<h(y)$; the outward normal in these coordinates is $(-Dh(y),1)/\sqrt{1+|Dh(y)|^2}$, transported by the orthogonal coordinate map ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F2] For $c\in\mathbb R^n$ and $r>0$, $\overline B_2(c,r)=\{x:|x-c|\le r\}$ and $S_2(c,r)=\{x:|x-c|=r\}$ are the Euclidean closed ball and the Euclidean sphere ([[def-euclidean-spheres-and-closed-balls]]).

[F3] For every subspace $W$ of a finite-dimensional inner product space $V$, $\dim W+\dim W^\perp=\dim V$ ([[cor-double-orthogonal-complement-and-dimension]]).

[F4] Every finite-dimensional real or complex inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] If $(e_0,\ldots,e_{r-1})$ is an orthonormal basis of an inner product space, then $v=\sum_{i<r}\langle v,e_i\rangle e_i$ and $\lVert v\rVert^2=\sum_{i<r}|\langle v,e_i\rangle|^2$ for every vector $v$ ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F6] For $\alpha\in\mathbb R$ the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[F7] $D(g\circ f)(p)=Dg(f(p))\circ Df(p)$ when $f$ is totally differentiable at $p$ and $g$ is totally differentiable at $f(p)$ ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Fix a boundary point $y\in S_R(a)$ and put $u:=(y-a)/R$, so that $|u|=1$ and $y=a+Ru$. By [F3] applied to $W=\operatorname{span}(u)$ we have $\dim u^\perp=n-1$, so [F4] supplies an orthonormal basis $(v_1,\ldots,v_{n-1})$ of $u^\perp$; then $(v_1,\ldots,v_{n-1},u)$ is an orthonormal basis of $\mathbb R^n$, because every $\xi$ equals $(\xi-\langle\xi,u\rangle u)+\langle\xi,u\rangle u$ with $\xi-\langle\xi,u\rangle u\in u^\perp$. Define the linear map $T(\xi):=\sum_{i=1}^{n-1}\langle\xi,v_i\rangle e_i+\langle\xi,u\rangle e_n$; by [F5], $|T(\xi)|^2=\sum_{i<n}|\langle\xi,v_i\rangle|^2+|\langle\xi,u\rangle|^2=|\xi|^2$ for all $\xi$, so $T$ is orthogonal, and orthonormality gives $T(u)=e_n$ and $T(v_i)=e_i$. [given, F2, F3, F4, F5, algebra]

2.1 Define the rigid motion $\Phi(p):=T(p-a)-Re_n$ (orthogonal part $T$, translation $-T(a)-Re_n$), the open cylinder $C:=B_{R/2}(0)\times(-R/2,R/2)$, the open set $W:=\Phi^{-1}(C)$ and the open ball $B:=B_{R/2}(0)\subseteq\mathbb R^{n-1}$; also put $h(w):=\sqrt{R^2-|w|^2}-R$ for $w\in B$. The point $y$ lies in $W$, because $\Phi(y)=T(Ru)-Re_n=0\in C$; so $W$ is an open neighbourhood of $y$. Moreover $T(\Omega-a)=T(B_R(0))=B_R(0)$ by orthogonality, so $\Phi(\Omega)=B_R(-Re_n)$. [given, step 1.1]

3.1 For $z=(w,t)\in C$ we have $\Phi^{-1}(z)=p$ and $T(p-a)=z+Re_n$, so by orthogonality $|p-a|^2=|z+Re_n|^2=|w|^2+(t+R)^2$. Thus $z\in\Phi(\Omega)$ exactly when $|w|^2+t^2+2Rt<0$. For $|w|<R/2$, put $s(w):=\sqrt{R^2-|w|^2}$; then $s(w)>\sqrt3R/2$, so the quadratic inequality is equivalent to $-R-s(w)<t<-R+s(w)=h(w)$. Its lower root satisfies $-R-s(w)<-R/2<t$, so it is automatic throughout $C$. Also $-R/2<(\sqrt3/2-1)R<h(w)\le0<R/2$, so the graph lies inside the vertical interval of $C$. Therefore the local set equations are $\Phi(\Omega\cap W)=\Phi(\Omega)\cap C=\{(w,t)\in B\times(-R/2,R/2):-R-s(w)<t<h(w)\}=\{(w,t)\in C:t<h(w)\}$. [given, step 2.1, algebra]

3.2 The polynomial $q(w):=R^2-|w|^2$ is positive on $B$ and $C^1$ there; by [F6] with $\alpha=1/2$ the map $s\mapsto s^{1/2}$ is differentiable on $(0,\infty)$ with derivative $\tfrac12s^{-1/2}$; the chain rule [F7] applied to $h=q^{1/2}-R$ therefore gives $Dh(w)=-w/\sqrt{R^2-|w|^2}$ on $B$, a continuous expression, so $h\in C^1(B)$. [given, step 2.1, F6, F7, algebra]

4.1 By steps 2.1, 3.1 and 3.2 the arbitrary boundary point $y\in S_R(a)$ has a neighbourhood $W$ and a rigid motion $\Phi$ for which $\Phi(\Omega\cap W)=\{(w,t)\in C:t<h(w)\}$, where $C=B\times(-R/2,R/2)$ and $h\in C^1(B)$; thus the boundary is locally a $C^1$ graph and the domain is locally exactly its subgraph. The set $\Omega$ is nonempty, bounded and open in $\mathbb R^n$ with $n\ge2$. Applying the bounded-domain convention [F1] under [A1], $\Omega=B_R(a)$ is a bounded $C^1$ domain. [given, step 2.1, step 3.1, step 3.2, A1, F1]

5.1 In the coordinates $z=(w,t)$ of step 3.1 the definition [F1] prescribes the outward normal $(-Dh(w),1)/\sqrt{1+|Dh(w)|^2}$ on the graph $t=h(w)$; by step 3.2 this equals $\bigl(w/\sqrt{R^2-|w|^2},1\bigr)\sqrt{R^2-|w|^2}/R=(w,h(w)+R)/R$, which at the graph point $z=(w,h(w))$ is exactly $(z+Re_n)/R$; transporting back by the orthogonal part $T$ gives the vector $T^{\mathsf T}(z+Re_n)/R$. At $y=a+Ru$ we have $\Phi(y)=0$ and $z+Re_n=T(y-a)$, so the transported normal is $T^{\mathsf T}T(y-a)/R=(y-a)/R$, a unit vector because $|y-a|=R$. Thus the normal prescribed by [F1] under [A1] is $\nu(y)=(y-a)/R$ for every $y\in S_R(a)$. [given, step 1.1, step 3.2, step 4.1, A1, F1, algebra] ∎
