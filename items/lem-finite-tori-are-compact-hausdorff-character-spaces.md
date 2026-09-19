---
id: lem-finite-tori-are-compact-hausdorff-character-spaces
kind: lemma
title: Finite tori are compact Hausdorff spaces separated by characters
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, thm-quotient-universal-property, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-compactness-under-continuous-maps, thm-heine-borel-r, thm-finite-products-of-compact-spaces, lem-products-preserve-t0-t1-and-hausdorff, lem-integer-part, def-countable-choice, def-quotient-topology, def-hausdorff-space, def-compact-space, def-integers, def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-real-numbers]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.63–64"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let
$\mathbb T=\mathbb R/\mathbb Z$ be the torus with quotient map $q$ and quotient
topology ([[def-the-one-dimensional-torus-and-normalized-haar-integral]],
[[def-quotient-topology]]).

1. $\mathbb T$ is compact ([[def-compact-space]]) and Hausdorff
   ([[def-hausdorff-space]]), and the map
   $$\varphi:\mathbb T\to S^1,\qquad \varphi([t]):=(\cos 2\pi t,\ \sin 2\pi t),$$
   is a well-defined homeomorphism onto the Euclidean unit circle
   $S^1=\{(x,y)\in\mathbb R^2 : x^2+y^2=1\}$.
2. For every natural $n\ge1$ the finite torus $\mathbb T^n$ is compact and
   Hausdorff in the finite product topology
   ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]), and the
   coordinate characters separate its points. Explicitly, define
   $\chi_j(x):=\exp(2\pi i t)$ using any real representative $t$ with
   $q(t)=x_j$; this is well defined, and for distinct $x,y\in\mathbb T^n$
   some $j<n$ satisfies $\chi_j(x)\ne\chi_j(y)$
   ([[def-complex-exponential]]).

## Facts & Assumptions

[A1] $q:\mathbb R\to\mathbb T$ is continuous and surjective, and a continuous image of a compact space is compact; $[0,1]$ is compact ([[thm-heine-borel-r]], [[thm-compactness-under-continuous-maps]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[A2] A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[A3] $t\mapsto(\cos t,\sin t)$ is a bijection of $[0,2\pi)$ onto $S^1$; sine and cosine have least positive common period $2\pi$, hence $\cos(x+2\pi m)=\cos x$ and $\sin(x+2\pi m)=\sin x$ for every integer $m$, and $\exp(i\theta)=\cos\theta+i\sin\theta$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[A4] $\exp(2\pi iu)=\exp(2\pi iv)$ for reals $u,v$ if and only if $u-v\in\mathbb Z$, because both sides have the cartesian form of [A3] and the parametrisation of the circle is injective on $[0,2\pi)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[A5] A finite product of compact spaces is compact, and arbitrary products preserve the Hausdorff property ([[thm-finite-products-of-compact-spaces]], [[lem-products-preserve-t0-t1-and-hausdorff]]).

[A6] The map induced on a quotient by a continuous map constant on the fibres is continuous ([[thm-quotient-universal-property]]).

[A7] With $S:=\bigcup_{k\in\mathbb Z}(t-\delta+k,\ t+\delta+k)$ and $T:=\bigcup_{k\in\mathbb Z}(s-\delta+k,\ s+\delta+k)$ for $\delta:=\operatorname{dist}(s-t,\mathbb Z)/2>0$ when $s-t\notin\mathbb Z$, the two unions are disjoint saturated open sets, so their images are disjoint open neighbourhoods ([[def-quotient-topology]]); and an integer part satisfies $n\le r<n+1$ ([[lem-integer-part]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the torus $\mathbb T=\mathbb R/\mathbb Z$ with quotient map $q$, and the map $\varphi$.

1.1 $\mathbb T$ is compact: $[0,1]$ is compact, $q$ is continuous, and every class has a representative in $[0,1]$, so $\mathbb T=q([0,1])$ is a continuous image of a compact space. [A1]

1.2 $\mathbb T$ is Hausdorff: let $[s]\ne[t]$, so that $s-t\notin\mathbb Z$ and $\delta:=\operatorname{dist}(s-t,\mathbb Z)/2>0$ (positive because for $x:=s-t$ and an integer part $n$ of $x$ one has $|x-m|\ge\min(x-n,\ n+1-x)>0$ for every $m\in\mathbb Z$). The saturated open sets of [A7] are the preimages of neighbourhoods of $[s]$ and $[t]$ and are disjoint, so the two classes have disjoint open neighbourhoods. [A7]

1.3 $\varphi$ is well defined and continuous: if $t'-t\in\mathbb Z$ then $t'=t+m$ and $2\pi t'=2\pi t+2\pi m$, so periodicity gives the same pair $(\cos,\sin)$; the map $t\mapsto(\cos 2\pi t,\sin 2\pi t)$ is continuous, being built from sine and cosine, which are differentiable and hence continuous, by composition with the continuous linear multiplication by $2\pi$, and it is constant on the fibres of $q$, so it induces a continuous $\varphi$ by the universal property. [A3, A6]

1.4 The coordinate character $\chi_j(x):=\exp(2\pi it)$, where $t\in\mathbb R$ is any representative with $q(t)=x_j$, is well defined by [A4]. If $x\ne y$ in $\mathbb T^n$, then $x_j\ne y_j$ for some $j<n$. Were $\chi_j(x)=\chi_j(y)$, [A4] would make the difference of chosen real representatives an integer and hence force $x_j=y_j$, a contradiction. Thus the coordinate characters separate points. [A4]

2.1 $\varphi$ is bijective: it is surjective because every point of $S^1$ is $(\cos\theta,\sin\theta)$ for some $\theta\in[0,2\pi)$ and then $\theta/(2\pi)\in[0,1)$ represents a class mapping to it; and it is injective because if $\varphi([s])=\varphi([t])$, then choosing representatives $s',t'\in[0,1)$ of the two classes and using periodicity gives $(\cos 2\pi s',\sin 2\pi s')=(\cos 2\pi t',\sin 2\pi t')$ with $2\pi s',2\pi t'\in[0,2\pi)$, so $2\pi s'=2\pi t'$ by injectivity of the parametrisation, whence $[s]=[t]$. [step 1.3, A3]

2.2 For $n\ge1$ the finite torus $\mathbb T^n$ is a finite product of compact Hausdorff spaces, hence compact Hausdorff, by [A5], step 1.1 and step 1.2. [step 1.1, step 1.2, A5]

3.1 By steps 1.1, 1.2 and 2.1, $\varphi$ is a continuous bijection from the compact space $\mathbb T$ onto the Hausdorff Euclidean circle $S^1$, hence a homeomorphism, which is claim 1. [step 1.1, step 1.2, step 2.1, A2]

4.1 Steps 3.1, 2.2 and 1.4 establish the homeomorphism $\varphi$, compactness and Hausdorffness of every finite torus, and separation of points by the coordinate characters. [step 1.4, step 2.2, step 3.1] ∎
