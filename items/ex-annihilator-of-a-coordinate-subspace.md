---
id: ex-annihilator-of-a-coordinate-subspace
kind: example
title: "The annihilator of a coordinate subspace"
status: draft
origin: pipeline
deps: ["def-annihilator-and-preannihilator", "thm-dual-of-c0-is-ell-one"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 1.36, pp.36–37; Brezis §1.3 notation p.9"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
generation:
  role: "example"
proof_strategy: "Use e_n tests in both directions and the absolutely convergent coordinate pairing; M_I is an intersection of closed coordinate kernels."
---

## Example

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For $I\subseteq\mathbb N$, put $$M_I=\{x\in c_0(\mathbb K):x_n=0\text{ for }n\notin I\}.$$ It is closed, and under $c_0^*=\ell^1$ its annihilator is $$A_I=\{a\in\ell^1(\mathbb K):a_n=0\text{ for }n\in I\}.$$ The preannihilator ${}^\perp A_I$ is $M_I$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F2] From [[thm-dual-of-c0-is-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. With coordinates starting at zero, the map $\ell^1(\mathbb K)\longrightarrow c_0(\mathbb K)^*,\qquad a\longmapsto f_a,\qquad f_a(x)=\sum_{n=0}^\infty a_nx_n$ is a linear isometric bijection. The pairing is bilinear, including over $\mathbb C$.

## Verification

1.1 Each coordinate map on $c_0$ is continuous since $|x_n|\le\|x\|_\infty$. Thus $M_I$ is the intersection of the closed coordinate kernels for $n\notin I$, hence is closed and linear. If $a$ annihilates $M_I$, testing $e_n\in M_I$ for $n\in I$ gives $a_n=0$. [F1, F2]

2.1 Conversely if $a_n=0$ on $I$ and $x\in M_I$, every product $a_nx_n$ is zero, so the absolutely convergent pairing vanishes. This proves $M_I^\perp=A_I$. [F1, F2, step 1.1]

3.1 If $x$ annihilates $A_I$, testing $e_n\in A_I$ for $n\notin I$ gives $x_n=0$, hence $x\in M_I$. The converse follows again because every coordinate product vanishes. For $I=\varnothing$, $(M_I,A_I)=(0,\ell^1)$; for $I=\mathbb N$ it is $(c_0,0)$, with the same test arguments. [F1, F2, step 2.1] ∎
