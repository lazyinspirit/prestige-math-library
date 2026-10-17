---
id: thm-csm-relative-gibbs-variational-principle
kind: theorem
title: "Reference-relative entropy and Gibbs variational inequality"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-statistical-state-observable
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-csm-statistical-state-observable: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.3.2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.5"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Let $(\Omega,\mathcal F,m)$ be a measure space and let $p,q$ be probability
densities relative to $m$, with $q>0$ almost everywhere on $\{p>0\}$. Define
the relative entropy
$$D(p\Vert q):=\int_{\{p>0\}}p\log(p/q)\,dm,$$
allowing $+\infty$. Then $D(p\Vert q)\ge0$, and equality holds exactly
when $p=q$ almost everywhere. In particular, let $H$ be finite $p$-almost
everywhere, let $\beta>0$, and suppose
$$0<Z=\int e^{-\beta H}dm<\infty,\quad q=Z^{-1}e^{-\beta H},\quad \int p|H|dm<\infty,\quad \int|p\log p|dm<\infty.$$
For $S[p]:=-k\int p\log p\,dm$ and $F:=-\beta^{-1}\log Z$, with $k>0$
and $\beta kT=1$, one has
$$D(p\Vert q)=\beta\bigl(\langle H\rangle_p-F-TS[p]\bigr)\ge0.$$
Thus the Gibbs density minimizes this specified free-energy functional
among the stated densities; this mathematical inequality does not derive a
physical preparation.

## Facts & Assumptions

**Given:** Normalized densities $p,q$, positivity of $q$ on the support of
$p$, and, for the Gibbs identity, finite energy and entropy integrals.

[A1] $p,q\ge0$, $\int p\,dm=\int q\,dm=1$, and $q>0$ wherever $p>0$ up to
an $m$-null set.

[A2] In the Gibbs case, $\beta>0$, $0<Z<\infty$, $H$ is $p$-integrable,
and $p\log p$ is absolutely integrable.

[F1] The natural logarithm is defined on positive reals and has derivative
$1/x$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]).

[F2] In the Gibbs clause, $q=Z^{-1}e^{-\beta H}$ is already assumed to be a
probability density relative to $m$ by the displayed hypotheses; no
exponential-family differentiation or finite-valued statistic result is
needed for the relative-entropy identity.

[F3] Entropy and expectations are integrals relative to the chosen measure
([[def-csm-statistical-state-observable]]).

## Proof

**Given:** [A1]–[A2] and the logarithm, normalized Gibbs-density and state
conventions [F1]–[F3].

1.1 For $x>0$, set $h(x)=x-1-\log x$. By [F1], $h'(x)=1-1/x$, which is negative for $0<x<1$ and positive for $x>1$; hence $h(x)\ge h(1)=0$, with equality only at $x=1$. On $\{p>0\}$ put $x=q/p$ to obtain $p\log(p/q)\ge p-q$. The negative part of the left integrand is integrable: where $q>p$, writing $x=q/p>1$ gives $p\log(q/p)=q(\log x)/x\le q$, since $h(x)\ge0$ implies $\log x\le x-1$ and $(x-1)/x\le1$. Therefore its integral is well-defined as an extended real number, and $$D(p\Vert q)\ge\int_{\{p>0\}}(p-q)\,dm =1-\int_{\{p>0\}}q\,dm\ge0.$$ [A1, F1, algebra]

2.1 If $D=0$, both nonnegative gaps in the last inequalities vanish: $q$ has no mass on $\{p=0\}$, and $h(q/p)=0$ $p$-almost everywhere. The strict equality case in step 1.1 gives $q=p$ on $\{p>0\}$, hence $p=q$ almost everywhere. Conversely, if $p=q$ almost everywhere then the defining integrand is zero and $D=0$. [A1, step 1.1]

3.1 In the Gibbs case, [F2] and [A2] give $\log q=-\beta H-\log Z$ $p$-almost everywhere, so all terms below are integrable and $$D(p\Vert q)=\int p\log p\,dm+\beta\langle H\rangle_p+\log Z =\beta\left(\langle H\rangle_p+\beta^{-1}\int p\log p\,dm-F\right).$$ Since $S[p]=-k\int p\log p\,dm$ and $\beta^{-1}=kT$, the middle term is $-TS[p]$. Nonnegativity and the equality condition follow from steps 1.1 and 2.1. [A2, F2, F3, step 1.1, step 2.1, algebra] ∎

