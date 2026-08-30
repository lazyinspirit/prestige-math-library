---
id: lem-null-homology-implies-connected-spherical-complement
kind: lemma
title: "A homologically simply connected plane domain has connected spherical complement"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homologically-simply-connected-complex-domain,
       def-complex-domain,
       lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set,
       thm-winding-number-chain-laws,
       cor-winding-number-is-the-normalized-argument-increment,
       cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §§4.2-4.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a homologically simply connected complex
domain. Then $\widehat{\mathbb C}\setminus\Omega$ is connected.

## Facts & Assumptions

**Given:** A homologically simply connected complex domain $\Omega$.

[L1] A homologically simply connected complex domain is a complex domain in which every cycle with trace in the domain has index $0$ at every omitted point ([[def-homologically-simply-connected-complex-domain]], [[def-complex-domain]]).

[L2] A compact subset of an open Euclidean set lies in the interior of a compact Jordan set contained in that open set, and that Jordan set may be chosen as a finite union of closed grid rectangles ([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L3] Chain integrals and indices are additive in the chain, reversing orientation negates the index, and a sum of cycles is a cycle ([[thm-winding-number-chain-laws]]).

[L4] For a closed contour, the winding number about a point off the trace equals the increment of a continuous argument divided by $2\pi$ ([[cor-winding-number-is-the-normalized-argument-increment]]).

[L5] The index of a cycle is locally constant off its trace ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

## Proof

**Proof technique:** direct.

1.1 Suppose, toward a contradiction, that $F:=\widehat{\mathbb C}\setminus\Omega$ is disconnected. Then $F=A\sqcup B$ for disjoint nonempty closed subsets $A,B\subseteq F$. Since $\infty\in F$, relabel so that $\infty\in B$. Because the Riemann sphere is a metric space, the disjoint closed sets $A$ and $B$ have disjoint open neighbourhoods $U$ and $V$ in $\widehat{\mathbb C}$ with $A\subseteq U$ and $B\subseteq V$. The inclusion $\infty\in V$ forces $U\subseteq\mathbb C$, so $A$ is compact in $\mathbb C$ and $U\cap(\mathbb C\setminus\Omega)=U\cap F=A$. Hence $U\setminus A\subseteq\Omega$. [given, construct, assume-contra]

2.1 Apply [L2] to the compact set $A\subseteq U$, viewing $\mathbb C$ as $\mathbb R^2$. It gives a finite union $J$ of closed grid rectangles with $A\subseteq\operatorname{int}J\subseteq J\subseteq U$. Give each rectangle boundary its positive orientation, sum those boundary chains, and cancel every interior edge with its opposite by [L3]. Let $\Gamma$ be the remaining chain. Then $\Gamma$ is a cycle, and its trace is the frontier of $J$, so $\Gamma^\ast\subseteq U\setminus A\subseteq\Omega$. [step 1.1, L2, L3, construct]

3.1 Let $p\in\operatorname{int}J$ lie on no grid line. Exactly one grid cell $Q$ of $J$ contains $p$. Along the positively oriented boundary of $Q$, the continuous argument of $\zeta-p$ increases by $2\pi$, while along the boundary of every other grid cell it has increment $0$ because $p$ lies outside that cell. Therefore [L4] gives winding number $1$ for $\partial^+Q$ about $p$ and $0$ for every other cell boundary, and additivity from [L3] yields $n(\Gamma,p)=1$. [step 2.1, L3, L4, algebra]

4.1 Fix $a\in A$. Because $A\subseteq\operatorname{int}J$, choose a disc $D(a,r)\subseteq\operatorname{int}J$ and then choose $p\in D(a,r)$ on no grid line. The disc misses $\Gamma^\ast$, so local constancy from [L5] and step 3.1 give $n(\Gamma,a)=n(\Gamma,p)=1$. [step 2.1, step 3.1, L5, choose]

5.1 The point $a$ lies in $\mathbb C\setminus\Omega$, while step 2.1 gives $\Gamma^\ast\subseteq\Omega$. Step 4.1 yields $n(\Gamma,a)=1\ne0$, so [L1] says that $\Gamma$ is not null-homologous in $\Omega$, contradicting the homological simple connectivity of $\Omega$. Therefore the assumption of step 1.1 was false, and $\widehat{\mathbb C}\setminus\Omega$ is connected. [step 2.1, step 4.1, L1, discharge-contradiction] ∎
