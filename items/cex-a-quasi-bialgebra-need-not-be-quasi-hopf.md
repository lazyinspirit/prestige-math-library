---
id: cex-a-quasi-bialgebra-need-not-be-quasi-hopf
kind: counterexample
title: "A quasi-bialgebra need not be quasi-Hopf"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-quasi-bialgebra-and-quasi-hopf-algebra, def-hh-bialgebra-and-bialgebra-map, def-hh-hopf-algebra-and-antipode]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Sections 5.12–5.13, printed pp. 110–114: quasi-bialgebra and quasi-Hopf definitions, including the additional antipode requirement."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

Every quasi-bialgebra has a quasi-antipode.

## Construction

Let $M=\{1,e\}$ be the monoid with $e^2=e$, $1e=e1=e$, and $e\ne1$. In the monoid algebra $H=\mathbb C[M]$, set $\Delta(m)=m\otimes m$, $\varepsilon(m)=1$ for $m\in M$, and $\Phi=1\otimes1\otimes1$.

## Facts & Assumptions

**Given:** The two-element monoid algebra and structure maps in the Construction.

[F1] [[def-quasi-bialgebra-and-quasi-hopf-algebra]]: a quasi-antipode $(S,\alpha,\beta)$ satisfies the two convolution identities and, when $\Phi=1$, the normalization equations give $\beta\alpha=1=\alpha\beta$.

[F2] [[def-hh-bialgebra-and-bialgebra-map]]: a bialgebra has a coassociative coproduct, counit, and multiplicative unital structure maps.

[F3] [[def-hh-hopf-algebra-and-antipode]]: an ordinary Hopf antipode is a two-sided convolution inverse of the identity.

## Counterexample

1.1 The monoid laws make multiplication associative and unital. On basis elements, $\Delta(mn)=mn\otimes mn=(m\otimes m)(n\otimes n)$, $\Delta(1)=1\otimes1$, $\varepsilon(mn)=1=\varepsilon(m)\varepsilon(n)$, and coassociativity and the counit equations hold. Thus $H$ is a bialgebra and, with $\Phi=1$, a quasi-bialgebra. [given, F1, F2, algebra]

2.1 Suppose $(S,\alpha,\beta)$ is a quasi-antipode. With $\Phi=1$, its normalization equations give $\beta\alpha=1=\alpha\beta$, so $\alpha^{-1}=\beta$. Define $S'(h)=\alpha^{-1}S(h)\alpha$. The quasi-antipode equations imply $\sum S'(h_{(1)})h_{(2)}=\varepsilon(h)1$ and $\sum h_{(1)}S'(h_{(2)})=\varepsilon(h)1$; thus $S'$ is an ordinary Hopf antipode of the bialgebra in step 1.1. [given, F1, F2, F3, step 1.1, algebra, construct]

3.1 The basis element $e$ is group-like: $\Delta(e)=e\otimes e$ and $\varepsilon(e)=1$. The antipode equations in [F3] would make $e$ invertible, since $S'(e)e=1=eS'(e)$. But an invertible idempotent is $1$ (multiply $e^2=e$ by $e^{-1}$), contradicting $e\ne1$. Hence no quasi-antipode exists, refuting the statement. [F1, F3, step 1.1, step 2.1, algebra] ∎
