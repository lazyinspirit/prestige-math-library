---
id: lem-irrational-torus-flow-is-free-with-dense-orbits
kind: lemma
title: The irrational torus flow is free with dense orbits
status: draft
origin: pipeline
deps: [def-smooth-left-action-of-a-lie-group, lem-pigeonhole]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.3, printed page 542
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Irrational torus winding, Example 3.14(2), printed page 26; immersed-subgroup Example 4.6(1), printed page 29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: constructive
---

## Statement

Let $\alpha\in\mathbb R\setminus\mathbb Q$. The formula

$$t\mathbin{\cdot}(z,w)=\left(e^{2\pi i t}z,e^{2\pi i\alpha t}w\right)$$

defines a smooth free left action of $\mathbb R$ on
$\mathbb T^2=S^1\times S^1$, and every orbit is dense. Its orbit map through
$(1,1)$,

$$i(t)=\left(e^{2\pi i t},e^{2\pi i\alpha t}\right),$$

is an injective immersion and a Lie-group homomorphism.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$, the additive Lie group
$\mathbb R$, and the usual torus Lie group $\mathbb T^2$.

[F1] A smooth left action is jointly smooth and satisfies the identity and
associativity laws. [[def-smooth-left-action-of-a-lie-group]].

[F2] Among $N+1$ points placed in $N$ sets, two points lie in the same set.
[[lem-pigeonhole]].

## Proof

**Proof technique:** construct small irrational rotations by the finite pigeonhole principle.

1.1 The displayed map is jointly smooth. Its phase factors satisfy $e^{2\pi i(s+t)}=e^{2\pi is}e^{2\pi it}$ and likewise with $\alpha(s+t)$, so $0$ acts as the identity and $(s+t)\cdot x=s\cdot(t\cdot x)$; hence it is a smooth left action by [F1]. If $t$ fixes any $(z,w)$, then $e^{2\pi it}=e^{2\pi i\alpha t}=1$, so $t\in\mathbb Z$ and $\alpha t\in\mathbb Z$. Irrationality forces $t=0$, proving freeness. [given, F1, algebra, construct]

1.2 The integer rotation orbit $\{n\alpha+\mathbb Z:n\in\mathbb Z\}$ is dense in $\mathbb R/\mathbb Z$. Indeed, given $\varepsilon>0$, choose an integer $N>1/\varepsilon$ and partition $[0,1)$ into $N$ half-open intervals of length $1/N$. Applying [F2] to the $N+1$ fractional parts of $0,\alpha,\ldots,N\alpha$ gives integers $0\le r<s\le N$ with $\lVert(s-r)\alpha\rVert<1/N<\varepsilon$. Replacing $q=s-r$ by $-q$ if necessary makes $\delta=\{q\alpha\}$ satisfy $0<\delta<\varepsilon$. For any $u\in[0,1)$, the integer $m=\lfloor u/\delta\rfloor$ satisfies $0\le u-m\delta<\delta$ and $m\delta<1$, so the orbit point $mq\alpha+\mathbb Z=m\delta+\mathbb Z$ is within $\varepsilon$ of $u+\mathbb Z$. [F2, algebra]

2.1 Fix a source point $(z,w)$ and a target $(e^{2\pi i a}z,e^{2\pi i b}w)$. Parameters $t=a+n$, $n\in\mathbb Z$, put the first coordinate exactly at $e^{2\pi ia}z$, while their second-coordinate phases are $e^{2\pi i\alpha a}e^{2\pi i n\alpha}$. Step 1.2 makes the latter dense in $S^1$, so some such parameters put the action point arbitrarily close to the target. Hence every orbit is dense. [step 1.1, step 1.2, algebra]

3.1 The orbit map $i$ is a homomorphism by the phase calculation in step 1.1. It is injective because $i(t)=(1,1)$ implies $t=0$ by the freeness calculation. Its differential sends $1\in T_0\mathbb R$ to the nonzero tangent vector $2\pi i(1,\alpha)$; translating the homomorphism identity shows its differential is injective everywhere. Thus $i$ is an injective immersion. All choices above are finite or single choices, so no choice principle is used. [step 1.1, step 2.1, algebra, discharge-construct: flow and winding verified] ∎
