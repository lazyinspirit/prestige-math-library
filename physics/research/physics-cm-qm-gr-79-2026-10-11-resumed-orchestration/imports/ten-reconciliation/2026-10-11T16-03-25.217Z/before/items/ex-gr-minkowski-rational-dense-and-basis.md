---
id: ex-gr-minkowski-rational-dense-and-basis
kind: example
title: "The rational timelike exponential set and the rational exponential basis in the flat vacuum development"
status: draft
origin: session
domain: mathematics
dependency_level: 41
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-gr-development-quotient-dense-set, lem-gr-development-quotient-second-countable, ex-gr-minkowski-maximal-development, thm-gr-local-geodesics-and-exponential-map, def-second-countable-space, def-topology-basis-subbasis, lem-q-and-irrationals-dense-r, def-countable-choice, def-countable]
dependency_roles:
  lem-gr-development-quotient-dense-set: mathematical-premise
  lem-gr-development-quotient-second-countable: mathematical-premise
  ex-gr-minkowski-maximal-development: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-second-countable-space: mathematical-premise
  def-topology-basis-subbasis: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  def-countable-choice: mathematical-premise
  def-countable: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the abstract second countability argument in the proof of Theorem 2.8, checked here in the flat case, printed pp. 22-23"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes): the standard countable basis of R^n by rational balls, background for the verification"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: n/a
---

## Example

In the flat vacuum development $M=(\mathbb R^{1,3},\eta)$ of
[[ex-gr-minkowski-maximal-development]] with initial embedding
$j(x)=(0,x)$, take $S_0:=\mathbb Q^3\subseteq j(\Sigma)$ and the standard
coordinate basis at each point. Then the recursion of
[[lem-gr-development-quotient-dense-set]] produces the countable set
$$D=\mathbb Q\times\mathbb Q^3=\mathbb Q^4,$$
which is dense in $\mathbb R^{1,3}$ and meets the initial surface in the
dense set $\mathbb Q^3\times\{0\}$; and the associated exponential family
$$\mathcal B=\Bigl\{d+B(0;r):\ d\in\mathbb Q^4,\ r\in\mathbb Q_{>0}\Bigr\}$$
(the Euclidean balls with rational centre and rational radius, because
$\exp_d$ in Minkowski spacetime is $v\mapsto d+v$ in the standard
coordinates) is the standard countable basis of the topology of
$\mathbb R^4$, so $M$ is second countable.

## Facts & Assumptions

**Given:** the flat vacuum development $M=(\mathbb R^{1,3},\eta)$ of [[ex-gr-minkowski-maximal-development]] with initial embedding $j(x)=(0,x)$; the set $S_0:=\mathbb Q^3\subseteq j(\Sigma)$; and the standard coordinate basis at every point.

[L1] The dense-set recursion of [[lem-gr-development-quotient-dense-set]] with initial set $j(\Sigma)$ and datum $D_0=S_0$ produces the countable set $D$ of that lemma.

[L2] The exponential family of rational balls is a countable basis of $Q$ ([[lem-gr-development-quotient-second-countable]]); the exponential map of Minkowski spacetime in standard coordinates is $v\mapsto d+v$ along straight geodesics ([[thm-gr-local-geodesics-and-exponential-map]] clause (a)).

## Verification
1.1 (One exponential step produces the rational points with nonzero time coordinate.) In the standard coordinates the exponential map is $\exp_d(v)=d+v$ ([[thm-gr-local-geodesics-and-exponential-map]]: geodesics are straight lines with affine parameter in flat coordinates). For $d=(0,q)\in\mathbb Q^3\times\{0\}=D_0$ and a rational vector $v=(a,w)\in\mathbb Q^4$ the point $d+v=(a,q+w)$ lies in $D_1$ whenever $v$ is timelike, i.e. $a^2>|w|^2$. Given $(a,b)\in\mathbb Q^4$ with $a\ne0$, choose $q:=b$ and $w:=0$; then $v=(a,0)$ satisfies $\eta(v,v)=-a^2<0$, so it is timelike, and $(a,b)\in D_1$. Every exponential step from a rational point using a rational vector remains rational, so induction gives $D\subseteq\mathbb Q^4$. Hence $\{r\in\mathbb Q^4:\ r^0\ne0\}\subseteq D_1$, and $D_0$ supplies the points with $r^0=0$, so $\mathbb Q^4\subseteq D$. [given, L1, L2, algebra]

2.1 (Countability and density.) $D$ is countable by the construction ([[lem-gr-development-quotient-dense-set]], [[def-countable]]) and contains $\mathbb Q^4$, which is dense in $\mathbb R^{1,3}$ by the density of $\mathbb Q$ in $\mathbb R$ coordinatewise ([[lem-q-and-irrationals-dense-r]]); hence $D$ is dense and meets $j(\Sigma)=\{t=0\}$ in $\mathbb Q^3\times\{0\}$. [step 1.1, L1, algebra]

3.1 (The basis.) The repaired abstract family uses translated rational tangent balls: here $\exp_d(B(a,r))=B(d+a,r)$. Since $d,a$ are rational, its centers are rational; conversely every rational center is obtained by taking $a=0$ and that center as $d$. Thus it is exactly the Euclidean rational-center family declared above.  For $d\in D$ and rational $r>0$ the set $\exp_d(B(0;r))=d+B(0;r)$ is the open Euclidean ball of radius $r$ around $d$ centred at a rational point with rational radius; the family of all such balls is a countable basis of the Euclidean topology of $\mathbb R^4$ ([[def-topology-basis-subbasis]], [[def-second-countable-space]]). In particular $\mathcal B$ as defined in the statement is a countable basis of the topology of $M$, so $M$ is second countable, in accordance with [[lem-gr-development-quotient-second-countable]]. [step 2.1, L2, algebra] ∎

## Remarks

This is the flat check of the second countability construction: the abstract dense set is literally the rational lattice, one exponential step reaches all rational points with nonzero time coordinate (the timelike vectors with rational components are dense in the rational points through the choice of the base point), and the exponential charts are Euclidean balls, so the abstract basis is the textbook countable basis of $\mathbb R^4$. The example is a verification of the two quotient items in the simplest vacuum case and carries no empirical content. 