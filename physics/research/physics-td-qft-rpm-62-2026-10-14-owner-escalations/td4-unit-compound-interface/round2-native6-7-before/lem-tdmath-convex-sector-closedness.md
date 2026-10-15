---
id: lem-tdmath-convex-sector-closedness
kind: lemma
title: Convexity and relative closedness of forward sectors
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps: [def-tdmath-forward-sector-hypotheses, lem-tdmath-relative-interior-segment, lem-tdmath-forward-spectator-cancellation]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  lem-tdmath-relative-interior-segment: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Lemma 3.1 and Theorem 3.2, pp. 42–45"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Under [[def-tdmath-forward-sector-hypotheses]], for every simple state $x$, the forward sector $A_x=\{y\in\Gamma_i:x\prec y\}$ is convex and closed relative to $\Gamma_i$. For collinear $y=tx+(1-t)z$, $0<t<1$, $y\prec z$ implies $x\prec y$, and $x\prec z$ implies $x\prec y$.

## Facts & Assumptions

**Given:** A1–A7 and S1–S3 on a nonempty open convex domain $\Gamma_i$.

[A1] [[def-tdmath-forward-sector-hypotheses]]: A1–A7 include consistency, scaling, splitting, convex-combination access, and stability for positive spectators.

[F1] [[lem-tdmath-relative-interior-segment]]: a nonempty convex set has nonempty relative interior, and segments from a relative-interior point to a closure point, excluding the closure endpoint, remain in the relative interior.

[F2] [[lem-tdmath-forward-spectator-cancellation]]: an equal-mass common spectator cancels under A1–A6, without CH.

## Proof

1.1 If $x\prec y$ and $x\prec z$, splitting gives $x\sim(tx,(1-t)x)$. Consistency, positive scaling, and transitivity then give $(tx,(1-t)x)\prec(ty,(1-t)z)$. The convex-combination access hypothesis in [A1] gives $(ty,(1-t)z)\prec ty+(1-t)z$, so the convex combination belongs to $A_x$. [A1, algebra]

1.2 Let $y=tx+(1-t)z$ with $0<t<1$. The convex-combination access hypothesis in [A1] gives $(tx,(1-t)z)\prec y$. Splitting gives $y\sim(ty,(1-t)y)$. If $y\prec z$, scaling by $1-t$ and adding $ty$ gives $(ty,(1-t)y)\prec(ty,(1-t)z)$. Compose and cancel the common $(1-t)z$ by [F2], then scale by $1/t$, to get $x\prec y$. If instead $x\prec z$, scaling by $1-t$ and adding $tx$ gives $(tx,(1-t)x)\prec(tx,(1-t)z)\prec y$; recombination gives $x\prec y$. [A1, F2, algebra]

2.1 Take $y\in\overline{A_x}^{\,\Gamma_i}$. If $y\in A_x$, the claim is immediate. Otherwise choose $w\in\operatorname{ri} A_x$ by [F1]. Because $\Gamma_i$ is open, choose $z=w+(1+\eta)(y-w)\in\Gamma_i$ for some $\eta>0$. For every integer $n>1+\eta$, $y_n=(1+1/n)y-z/n=w+(1-\eta/n)(y-w)$ lies in $\operatorname{ri}A_x$ by [F1], so $x\prec y_n$. Also $y=\frac{n}{n+1}y_n+\frac1{n+1}z$. The convex-combination access hypothesis in [A1] gives $(\frac n{n+1}y_n,\frac1{n+1}z)\prec y$; scaling by $(n+1)/n$ and using the reversible split of $y$ gives $(y_n,z/n)\prec(y,y/n)$. [A1, F1, step 1.1, algebra]

3.1 Consistency adds the same spectator $z/n$ to $x\prec y_n$, and transitivity with step 2.1 gives $(x,z/n)\prec(y,y/n)$ for every $n>1+\eta$. Apply the stability hypothesis in [A1] to bases $x,y$, fixed unit spectators $z,y$, and the tail sequence $\epsilon_m=1/(m+n_0)$ with $n_0>1+\eta$. It follows that $x\prec y$. Thus every relative closure point belongs to $A_x$. [A1, step 2.1, algebra] ∎
