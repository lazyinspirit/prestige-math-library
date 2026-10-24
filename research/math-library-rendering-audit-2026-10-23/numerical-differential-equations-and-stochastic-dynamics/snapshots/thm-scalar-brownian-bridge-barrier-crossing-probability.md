---
id: thm-scalar-brownian-bridge-barrier-crossing-probability
kind: theorem
title: Scalar Brownian bridge barrier-crossing probability
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-scalar-brownian-bridge-from-x-to-y
  - lem-scalar-brownian-bridge-restriction-density
  - thm-brownian-reflection-principle
  - lem-brownian-transition-semigroup-property
  - thm-dominated-convergence
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Proposition 2.7.2, pp. 60–61"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Mike Giles, Monte Carlo Methods, Module 4: Monte Carlo path simulation, Brownian bridge barrier crossing, pp. 31–32"
      url: "https://people.maths.ox.ac.uk/~gilesm/mc/module_4/module_4_1.pdf"
---

## Statement

Assume AC. Let $h>0$, barrier $c\in\mathbb R$, and endpoints
$x,y\ge c$. For a scalar Brownian bridge $B^{x,y,h}$ from $x$ to $y$ over
$[0,h]$, defined in [[def-scalar-brownian-bridge-from-x-to-y]],
$$\mathbb P\left\{\inf_{0\le s\le h}B^{x,y,h}_s\le c\right\} =\exp\left(-\frac{2(x-c)(y-c)}{h}\right).$$
If either endpoint equals $c$, the event has probability one and the formula
gives one. For strict endpoints $x,y>c$, the event is a genuine interior
bridge crossing.

## Facts & Assumptions

**Given:** AC, $h>0$, a level $c$, endpoints $x,y\ge c$, and the canonical bridge law.

[F1] For standard Brownian motion $W$ and $a>0$, $\mathbb P\{\sup_{s\le h}W_s\ge a,\ W_h\le b\}= \mathbb P\{W_h\ge2a-b\}$ for every $b\le a$. [[thm-brownian-reflection-principle]]

[F2] The bridge law conditioned at any fixed endpoint is explicitly defined by $x+(s/h)(y-x)+W_s-(s/h)W_h$, and its restriction to $[0,t]$, $t<h$, has density $p_{h-t}(y-X_t)/p_h(y-x)$ relative to Brownian motion from $x$. [[def-scalar-brownian-bridge-from-x-to-y]] [[lem-scalar-brownian-bridge-restriction-density]]

[F3] The endpoint density is $p_h(z)=(2\pi h)^{-1/2}\exp(-z^2/(2h))$, continuous and strictly positive for $h>0$. [[lem-brownian-transition-semigroup-property]]

[A1] AC is inherited from the Brownian reflection and conditional-law interfaces [F1]–[F2]; no selection is made in the density argument. [[def-axiom-of-choice]]

## Proof

1.1 First assume $x,y>c$, put $a=x-c>0$, $z=x-y$, and let $W^z$ denote the canonical bridge from $0$ to $z$ over duration $h$. The bridge event in the Statement has the law of $\{\sup_{s\le h}W^{z}_s\ge a\}$: subtracting the bridge path from $x$ negates its centered Gaussian residual and has terminal value $z$. Since $z=a-(y-c)<a$, the restriction and endpoint-disintegration statement [F2] applies to this endpoint. [F2, given, algebra]

1.2 Write $q(z)=\mathbb P\{\sup_{s\le h}W^z_s\ge a\}$. From [F1], for $u<v<a$, $\mathbb P\{\sup_{s\le h}W_s\ge a,\ u<W_h\le v\} =\int_u^vp_h(2a-r)dr.$ Indeed, subtract the reflection identities at $v$ and $u$ and change variables in the Gaussian endpoint integral [F3]. The full endpoint disintegration [F2] then identifies $q(r)p_h(r)=p_h(2a-r)$ for Lebesgue-almost every $r<a$. [F1, F2, F3, algebra]

2.1 The function $q$ is continuous on $(-\infty,a)$. Under the explicit bridge representation, changing endpoint from $r$ to $r'$ changes the path uniformly by at most $|r-r'|$. Thus the crossing indicators converge almost surely as $r'\to r$ unless the bridge maximum equals $a$. For fixed $r<a$, if that maximum equals $a$, it is attained before $h$; hence for some $t_k=h(1-1/k)<h$ the bridge maximum on $[0,t_k]$ equals $a$. By the restriction density in [F2], this event has probability zero because the Brownian maximum on $[0,t_k]$ has a continuous distribution by the reflection identity [F1] and the continuous Gaussian density [F3]. The countable union over $k\ge2$ is null. Dominated convergence ([[thm-dominated-convergence]]) applies with the integrable constant majorant $1$ and proves continuity of $q$. [F1, F2, F3, step 1.1, given]

3.1 Both $q(r)p_h(r)$ and $p_h(2a-r)$ are continuous on $r<a$. Step 1.2 shows they agree almost everywhere there; if their difference were nonzero at one point, continuity would make it nonzero on an interval of positive Lebesgue measure, a contradiction. Hence $q(z)=\frac{p_h(2a-z)}{p_h(z)}$ for the specified endpoint $z<a$. Since $2a-z=(x-c)+(y-c)$ and $z=(x-c)-(y-c)$, the Gaussian density ratio is $\exp\left(-\frac{((x-c)+(y-c))^2-((x-c)-(y-c))^2}{2h}\right) =\exp\left(-\frac{2(x-c)(y-c)}h\right).$ [F3, step 1.2, step 2.1, algebra]

4.1 If $x=c$ or $y=c$, the bridge begins or ends at the barrier, so the event in the Statement is certain and the right side is $e^0=1$. These boundary cases complete the claim for $x,y\ge c$. The strict case used $z<a$, which follows exactly from $y>c$; no formula is asserted when an endpoint lies below the barrier. AC is used only through [A1]. [A1, step 3.1, given] ∎
