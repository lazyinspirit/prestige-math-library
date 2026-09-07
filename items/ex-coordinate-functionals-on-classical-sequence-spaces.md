---
id: ex-coordinate-functionals-on-classical-sequence-spaces
kind: example
title: "Coordinate functionals on sequence spaces"
status: draft
origin: pipeline
deps: ["thm-dual-of-c0-is-ell-one", "thm-complex-dual-of-ell-one-is-ell-infinity", "cor-ell-p-duality-by-counting-measure"]
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
    - title: "Bühler–Salamon, Functional Analysis, Examples 1.35–1.36, pp.36–37"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
generation:
  role: "example"
proof_strategy: "The coordinate bound gives <=1, and e_n attains one."
---

## Example

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For every $n\ge0$, the coordinate functional $\pi_n:x\mapsto x_n$ has norm one on both $c_0(\mathbb K)$ and $\ell^1(\mathbb K)$. Under their sequence-dual identifications it is represented by $e_n$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[thm-dual-of-c0-is-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. With coordinates starting at zero, the map $\ell^1(\mathbb K)\longrightarrow c_0(\mathbb K)^*,\qquad a\longmapsto f_a,\qquad f_a(x)=\sum_{n=0}^\infty a_nx_n$ is a linear isometric bijection. The pairing is bilinear, including over $\mathbb C$.

[F2] From [[thm-complex-dual-of-ell-one-is-ell-infinity]], with its stated hypotheses: For complex sequence spaces, with indices starting at zero, $\ell^\infty(\mathbb C)\longrightarrow\ell^1(\mathbb C)^*,\qquad b\longmapsto h_b,\qquad h_b(a)=\sum_{n=0}^\infty b_na_n$ is a complex-linear isometric bijection. There is no conjugation in this pairing.

[F3] From [[cor-ell-p-duality-by-counting-measure]], with its stated hypotheses: Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. Every bounded linear functional $\Lambda:\ell^p\to\mathbb R$ is of the form $\Lambda(a)=\sum_{n=0}^\infty a_nb_n$ for a unique sequence $b \in \ell^q$. Moreover, $\|\Lambda\|=\|b\|_{\ell^q}.$

## Verification

1.1 The pairing for $c_0^*$ assigns to $e_n\in\ell^1$ the functional $x\mapsto x_n$. The complex $\ell^1$ dual formula does the same for $e_n\in\ell^\infty$, and the real counting-measure theorem at $p=1$ gives the real counterpart. [F1, F2, F3]

2.1 On $c_0$, $|x_n|\le\|x\|_\infty$; on $\ell^1$, $|x_n|\le\|x\|_1$. Thus each norm is at most one. In both spaces $\|e_n\|=1$ and $\pi_n(e_n)=1$, proving equality. This works at index zero as well as every later index; the zero input gives zero. [step 1.1] ∎
