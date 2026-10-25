---
id: prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping
kind: proposition
title: Lie representations as actions before enveloping
status: published
verification:
  audited: 2026-09-14
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-representation-of-a-lie-algebra, def-left-and-right-modules]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.1, printed pp. 61–62"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.1, printed pp. 49–50"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

A representation of $\mathfrak g$ on $V$ is equivalently a $k$-bilinear
action $(x,v)\mapsto xv$ satisfying

$$[x,y]v=x(yv)-y(xv).$$

In general this action does not, by itself, canonically make $\mathfrak g$
into an associative unital ring over which $V$ is a module.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and a vector space $V$ over the same field $k$.

[L1] A representation is a linear map $\rho:\mathfrak g\to\operatorname{End}_k(V)$ preserving the Lie bracket ([[def-representation-of-a-lie-algebra]]).

[L2] A left module over a ring requires an associative multiplication and a unit action as in [[def-left-and-right-modules]].

## Proof

**Proof technique:** direct.

1.1 From a representation $\rho$, set $xv=\rho(x)v$. Linearity of $\rho$ and of each $\rho(x)$ makes the action bilinear, and bracket preservation expands to $[x,y]v=x(yv)-y(xv)$. [L1, algebra]

1.2 Conversely, a bilinear action defines a linear map $\rho(x)(v)=xv$ into $\operatorname{End}_k(V)$. The displayed identity says exactly that $\rho([x,y])=\rho(x)\rho(y)-\rho(y)\rho(x)$, so $\rho$ is a representation. [L1, algebra]

2.1 The equivalence is therefore exact, but [L2] does not apply directly from the Lie-algebra data in general. The bracket need not be associative; if it is the zero bracket on a nonzero abelian Lie algebra, that multiplication has no unit. There is a genuine exceptional case: if $\mathfrak g=0$ and $V=0$, the zero bracket makes $\mathfrak g$ the permitted unital zero ring, and its unique action on $V$ is a unital module action. This exception does not give a general ring structure for Lie representations. The canonical associative-module formulation for arbitrary $\mathfrak g,V$ uses $U(\mathfrak g)$. [step 1.1, step 1.2, L2] ∎
