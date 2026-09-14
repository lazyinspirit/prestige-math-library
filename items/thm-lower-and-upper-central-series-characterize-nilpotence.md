---
id: thm-lower-and-upper-central-series-characterize-nilpotence
kind: theorem
title: Lower and upper central series characterize nilpotence
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-upper-central-series-of-a-lie-algebra, def-quotient-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 2.5"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Proposition 2.5(a), printed p. 12"
---

## Statement

A Lie algebra $\mathfrak g$ is nilpotent if and only if its upper central
series reaches $\mathfrak g$: equivalently, for some $c\geq0$,

$$\gamma_{c+1}(\mathfrak g)=0\qquad\Longleftrightarrow\qquad Z_c(\mathfrak g)=\mathfrak g.$$

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and an integer $c\geq0$.

[L1] The lower central series satisfies $\gamma_1=\mathfrak g$ and
$\gamma_{r+1}=[\mathfrak g,\gamma_r]$
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] The upper central series satisfies $Z_0=0$ and
$x\in Z_{r+1}$ exactly when $[\mathfrak g,x]\subseteq Z_r$
([[def-upper-central-series-of-a-lie-algebra]]).

[L3] The quotient-center formulation of $Z_{r+1}/Z_r$ uses the quotient Lie
bracket ([[def-quotient-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\gamma_{c+1}=0$. We prove $\gamma_{c+1-r}\subseteq Z_r$ for $0\leq r\leq c$. At $r=0$ this is the assumed containment in $Z_0=0$. If it holds at $r$, then $x\in\gamma_{c-r}$ implies $[\mathfrak g,x]\subseteq\gamma_{c+1-r}\subseteq Z_r$, so [L2] gives $x\in Z_{r+1}$. At $r=c$ we obtain $\mathfrak g=\gamma_1\subseteq Z_c$, hence equality. [given, L1, L2, L3, algebra]

2.1 Conversely assume $Z_c=\mathfrak g$. Starting from $\gamma_1=\mathfrak g=Z_c$, induction gives $\gamma_{r+1}\subseteq Z_{c-r}$ for $0\leq r\leq c$: if $\gamma_{r+1}\subseteq Z_{c-r}$, then [L1] and [L2] give $\gamma_{r+2}=[\mathfrak g,\gamma_{r+1}]\subseteq Z_{c-r-1}$. At $r=c$ this yields $\gamma_{c+1}\subseteq Z_0=0$, so $\mathfrak g$ is nilpotent. The argument also covers $c=0$, when both conditions say $\mathfrak g=0$. [given, L1, L2, step 1.1] ∎
