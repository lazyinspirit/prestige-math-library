---
id: lem-aqft-crossing-even-forward-amplitude
kind: lemma
title: Crossing evenness at the scalar subtraction point
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-aqft-scattering-amplitude-input
dependency_roles:
  def-aqft-scattering-amplitude-input: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: 'Allan Adams, Nima Arkani-Hamed, Sergei Dubovsky, Alberto Nicolis, and Riccardo Rattazzi, Causality, Analyticity and an IR Obstruction to UV Completion'
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: 'Section 4, PDF pp. 14–19: identical-scalar forward crossing about the point s=2m^2 and the two-particle cuts.'
    - title: 'Claudia de Rham, Scott Melville, Andrew J. Tolley, and Shuang-Yong Zhou, Positivity Bounds for Scalar Theories'
      url: https://arxiv.org/pdf/1702.06134
      locator: 'Section 2.1–2.2, equations (7)–(11), PDF pp. 2–3: s/u crossing, pole-subtracted amplitude, and centered variable v.'
    - title: 'Ivano Basile, Luca Buoninfante, Francesco Di Filippo, Benjamin Knorr, Alessia Platania, and Anna Tokareva, Lectures in Quantum Gravity'
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: 'Section 3.3.1, printed pp. 96–98: crossing-symmetric forward contour and subtraction point.'
---

## Statement

Let $m>0$, let $A(s)$ be the forward slice of identical-scalar amplitude data satisfying $A(s)=A(4m^2-s)$, and let $P(s)$ be a finite sum of isolated simple real pole principal parts in $0<s<4m^2$ and their $s\leftrightarrow u$ crossing partners, satisfying $P(s)=P(4m^2-s)$. Put $B(v)=A(2m^2+v)-P(2m^2+v)$ wherever these expressions are defined. Then $B(-v)=B(v)$. If $B$ is complex differentiable in a neighbourhood of $v=0$, then $B'(0)=0$.

## Statement references

[[def-aqft-scattering-amplitude-input]]

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, §4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

## Facts & Assumptions

**Given:** $m>0$, the forward variable $s$, the crossing relation $u=4m^2-s$, and the crossing-symmetric pole-subtracted amplitude data.

[F1] [[def-aqft-scattering-amplitude-input]]: at $t=0$, $u=4m^2-s$, $A(s)=A(u)$, $P(s)=P(u)$, and $B(v)=A(2m^2+v)-P(2m^2+v)$ with $\nu_0=2m^2$.

[A1] The displayed crossing equalities hold wherever both sides are defined.

## Proof

1.1 Set $s=2m^2+v$. Then the crossed value is $u=4m^2-s=2m^2-v$. By [A1], $A(2m^2+v)=A(2m^2-v)$ and $P(2m^2+v)=P(2m^2-v)$. Subtracting the pole terms gives $B(v)=B(-v)$. [given, F1, A1, algebra]

2.1 Differentiate $B(-v)=B(v)$ at $v=0$. The chain rule gives $-B'(0)=B'(0)$; since $2\ne0$ in $\mathbb C$, $B'(0)=0$. [given, step 1.1, algebra] ∎
