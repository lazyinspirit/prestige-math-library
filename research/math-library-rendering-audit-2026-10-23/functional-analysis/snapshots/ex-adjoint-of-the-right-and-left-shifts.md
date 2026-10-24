---
id: ex-adjoint-of-the-right-and-left-shifts
kind: example
title: "Transposes of the right and left shifts"
status: published
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-dual-of-c0-is-ell-one", "thm-complex-dual-of-ell-one-is-ell-infinity", "cor-ell-p-duality-by-counting-measure"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Definition 4.1 and Examples 1.35–1.36, pp.172,36–37"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
generation:
  role: "example"
proof_strategy: "Check each shift preserves the stated sequence space and is bounded; reindex the absolutely convergent pairing. Define shifts explicitly, with indexing from zero."
---

## Example

Let $\mathbb K=\mathbb R$ or $\mathbb C$. On $c_0(\mathbb K)$ or $\ell^1(\mathbb K)$, define $$R(x_0,x_1,\ldots)=(0,x_0,x_1,\ldots),\qquad L(x_0,x_1,\ldots)=(x_1,x_2,\ldots).$$ Under the dual pairing, the transposes on $\ell^1$ (for domain $c_0$) and on $\ell^\infty$ (for domain $\ell^1$) satisfy $R^*=L$ and $L^*=R$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[thm-dual-of-c0-is-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. With coordinates starting at zero, the map $\ell^1(\mathbb K)\longrightarrow c_0(\mathbb K)^*,\qquad a\longmapsto f_a,\qquad f_a(x)=\sum_{n=0}^\infty a_nx_n$ is a linear isometric bijection. The pairing is bilinear, including over $\mathbb C$.

[F3] From [[thm-complex-dual-of-ell-one-is-ell-infinity]], with its stated hypotheses: For complex sequence spaces, with indices starting at zero, $\ell^\infty(\mathbb C)\longrightarrow\ell^1(\mathbb C)^*,\qquad b\longmapsto h_b,\qquad h_b(a)=\sum_{n=0}^\infty b_na_n$ is a complex-linear isometric bijection. There is no conjugation in this pairing.

[F4] From [[cor-ell-p-duality-by-counting-measure]], with its stated hypotheses: Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. Every bounded linear functional $\Lambda:\ell^p\to\mathbb R$ is of the form $\Lambda(a)=\sum_{n=0}^\infty a_nb_n$ for a unique sequence $b \in \ell^q$. Moreover, $\|\Lambda\|=\|b\|_{\ell^q}.$

## Verification

1.1 Both shifts preserve null sequences; inserting or deleting a coordinate also preserves absolute summability and boundedness. Each is linear, $R$ preserves the relevant norm, and $L$ is contractive. This verifies that all displayed operators have the stated spaces as domain and codomain, including on zero inputs. [given]

2.1 For $x\in c_0$ and $a\in\ell^1$, the absolutely convergent pairings give $\sum_{n\ge0}a_n(Rx)_n=\sum_{n\ge0}a_{n+1}x_n$ and $\sum_{n\ge0}a_n(Lx)_n=\sum_{n\ge1}a_{n-1}x_n$. These are the pairings of $La$ and $Ra$ with $x$, respectively. Hence $R^*=L$ and $L^*=R$ on $\ell^1$. [F1, F2, step 1.1]

3.1 For $x\in\ell^1$ and bounded $a$, the same two series are absolutely convergent, since their absolute sums are at most $\|a\|_\infty\|x\|_1$. The complex dual identification, or the real counting-measure identification at $p=1$, therefore gives the same transpose formulas on $\ell^\infty$. The inserted zeroth coordinate is essential in the formula for $Ra$. [F1, F3, F4, step 1.1, step 2.1] ∎
