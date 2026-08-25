---
id: cor-principal-logarithm-is-holomorphic-on-the-slit-plane
kind: corollary
title: "The principal logarithm is the normalised holomorphic branch on the slit plane"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-holomorphic-logarithms-homologically-simply-connected-domains, prop-star-shaped-plane-domains-are-homologically-simply-connected, cor-holomorphic-logarithm-has-the-logarithmic-derivative, def-complex-logarithms-principal-logarithm-and-complex-powers, thm-polar-form-with-unique-principal-argument, thm-classification-of-complex-logarithms, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-intermediate-value, def-star-shaped-open-subset-of-rn, def-complex-domain, def-natural-logarithm, thm-kernel-and-fibres-of-complex-exponential, cor-complex-differentiability-implies-continuity, def-complex-conjugate-real-imaginary-part-and-modulus, def-metric-topology, def-metric-ball, def-integers, rem-plane-star-shaped-and-convex-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $S=\mathbb C\setminus\{x\in\mathbb R:x\le0\}$ be the slit plane. Then $S$ is
a complex domain, star-shaped with respect to $1$, and homologically simply
connected. The principal logarithm $\operatorname{Log}$
([[def-complex-logarithms-principal-logarithm-and-complex-powers]]) is the
unique holomorphic $F:S\to\mathbb C$ with

$$\exp(F(z))=z\ \ (z\in S)\qquad\text{and}\qquad F(1)=0,$$

and it satisfies $\operatorname{Log}'(z)=1/z$ on $S$.

## Facts & Assumptions

**Given:** The slit plane $S=\mathbb C\setminus\{x\in\mathbb R:x\le0\}$; segments and star-shapedness in the plane are those of [[rem-plane-star-shaped-and-convex-dictionary]].

[L1] On a homologically simply connected complex domain, a holomorphic nowhere-zero $f$ admits a holomorphic $L$ with $\exp\circ L=f$, and any two such differ by a constant in $2\pi i\mathbb Z$ ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]]).

[L2] A nonempty open star-shaped subset of $\mathbb C$ is a complex domain and is homologically simply connected ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[L3] If $L$ and $h$ are holomorphic on an open set with $\exp\circ L=h$, then $h$ is nowhere zero and $L'=h'/h$ ([[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[L4] For $z\ne0$ with principal polar form $z=r(\cos\theta+i\sin\theta)$ and $-\pi<\theta\le\pi$, $\operatorname{Log}z=\log r+i\theta$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]]).

[L5] Every $z\ne0$ has a unique representation $z=r(\cos\theta+i\sin\theta)$ with $r=|z|>0$ and $-\pi<\theta\le\pi$ ([[thm-polar-form-with-unique-principal-argument]]).

[L6] For $z\ne0$ the solutions of $\exp w=z$ are exactly $\operatorname{Log}z+2\pi ik$ for $k\in\mathbb Z$ ([[thm-classification-of-complex-logarithms]]).

[L7] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L8] A continuous real function on $[a,b]$ attains every value between $f(a)$ and $f(b)$ ([[thm-intermediate-value]]).

[L9] A nonempty open $U\subseteq\mathbb R^n$ is star-shaped with respect to $a\in U$ when $a+t(x-a)\in U$ for every $x\in U$ and $0\le t\le1$ ([[def-star-shaped-open-subset-of-rn]]).

[L10] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]).

[L11] For $x>0$, $\log x$ is the unique real $y$ with $\exp y=x$ ([[def-natural-logarithm]]).

[L12] $\ker(\exp)=2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L13] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L14] For $z=a+bi$ with $a,b$ real, $\operatorname{Re}z=a$, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L15] A set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]).

[L16] $\mathbb Z$ is the ring of integers ([[def-integers]]).

## Proof

**Proof technique:** direct.

1.1 $S$ is open: if $z=x+iy\in S$ with $y\ne0$ then the ball of radius $|y|$ about $z$ contains no real number, and if $y=0$ then $x>0$ and the ball of radius $x$ about $z$ contains no real number $\le0$; in both cases [L14] and [L15] put a ball around $z$ inside $S$. It is nonempty, since $1\in S$. [given, L14, L15]

1.2 $S$ is star-shaped with respect to $1$ in the sense of [L9]: for $z\in S$ and $0\le t\le1$ put $w=1+t(z-1)$. If $w$ were a real number $\le0$ then $\operatorname{Im}w=t\operatorname{Im}z=0$ by [L14]; $t=0$ gives $w=1>0$, so $t>0$ and $\operatorname{Im}z=0$, making $z$ a real number, necessarily $z>0$ because $z\in S$; but then $w=(1-t)+tz>0$, a contradiction. [given, L9, L14]

2.1 By steps 1.1 and 1.2 and [L2], $S$ is a complex domain and is homologically simply connected. [step 1.1, step 1.2, L2, L10]

3.1 The identity function $h(z)=z$ is holomorphic and nowhere zero on $S$, because $0\notin S$, so [L1] gives a holomorphic $G$ on $S$ with $\exp\circ G=h$; since $\exp(G(1))=1$, [L12] puts $G(1)$ in $2\pi i\mathbb Z$, and $F:=G-G(1)$ is holomorphic with $\exp\circ F=h$ and $F(1)=0$. [step 2.1, L1, L12]

4.1 Fix $z\in S$ and let $\phi(t)=\operatorname{Im}F\bigl(1+t(z-1)\bigr)$ for $t\in[0,1]$; the segment lies in $S$ by step 1.2, and $\phi$ is continuous by [L13] and [L14], with $\phi(0)=0$. If $|\phi(1)|\ge\pi$ then [L8] gives $t$ with $\phi(t)=\pi$ or $\phi(t)=-\pi$; writing $w=1+t(z-1)$ and using $\exp(F(w))=w$ together with [L7], [L11] and [L14] gives $w=e^{\operatorname{Re}F(w)}(\cos(\pm\pi)+i\sin(\pm\pi))=-e^{\operatorname{Re}F(w)}$, a real number $<0$, contradicting $w\in S$. Hence $\operatorname{Im}F(z)\in(-\pi,\pi)$. [step 1.2, step 3.1, L7, L8, L11, L13, L14]

5.1 By [L6] there is an integer $k$ with $F(z)=\operatorname{Log}z+2\pi ik$; taking imaginary parts and using [L4] and [L5], $\operatorname{Im}F(z)=\theta+2\pi k$ with $-\pi<\theta\le\pi$, and step 4.1 gives $\operatorname{Im}F(z)\in(-\pi,\pi)$, so $2\pi k\in(-2\pi,2\pi)$ and therefore $k=0$ by [L16]. Hence $F=\operatorname{Log}$ on $S$. [step 3.1, step 4.1, L4, L5, L6, L14, L16]

6.1 By step 5.1 the principal logarithm is holomorphic on $S$, and [L3] applied to $L=\operatorname{Log}$ and $h(z)=z$ gives $\operatorname{Log}'(z)=1/z$ there. If $F_1$ is any holomorphic function on $S$ with $\exp\circ F_1=h$ and $F_1(1)=0$, then $F_1-\operatorname{Log}$ is a constant in $2\pi i\mathbb Z$ by [L1], and it vanishes at $1$, so $F_1=\operatorname{Log}$. [step 5.1, L1, L3] ∎
