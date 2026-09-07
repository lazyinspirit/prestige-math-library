---
id: cex-canonical-bidual-map-need-not-be-surjective
kind: counterexample
title: "The canonical bidual map of c0 misses the constant sequence"
status: published
origin: pipeline
deps: ["thm-dual-of-c0-is-ell-one", "thm-complex-dual-of-ell-one-is-ell-infinity", "cor-ell-p-duality-by-counting-measure", "def-canonical-map-into-the-bidual", "def-reflexive-banach-space"]
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
    - title: "Bühler–Salamon, Functional Analysis, Examples 1.35–1.36 and §2.4.1, pp.36–37,88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
generation:
  role: "counterexample"
proof_strategy: "Evaluate J_x on the coefficient functional associated with a in ell-one; it is sum a_n x_n. Every possible preimage of (1,1,...) would have all coordinates one and hence would not lie in c0."
---

## Statement refuted

Let $\mathbb K=\mathbb R$ or $\mathbb C$. A canonical bidual embedding need not be onto. Under the sequence-dual identifications, $J_{c_0}:c_0(\mathbb K)\to c_0(\mathbb K)^{**}$ is the inclusion $c_0(\mathbb K)\hookrightarrow\ell^\infty(\mathbb K)$, and the constant sequence $(1,1,\ldots)$ is outside its image.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[thm-dual-of-c0-is-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. With coordinates starting at zero, the map $\ell^1(\mathbb K)\longrightarrow c_0(\mathbb K)^*,\qquad a\longmapsto f_a,\qquad f_a(x)=\sum_{n=0}^\infty a_nx_n$ is a linear isometric bijection. The pairing is bilinear, including over $\mathbb C$.

[F2] From [[thm-complex-dual-of-ell-one-is-ell-infinity]], with its stated hypotheses: For complex sequence spaces, with indices starting at zero, $\ell^\infty(\mathbb C)\longrightarrow\ell^1(\mathbb C)^*,\qquad b\longmapsto h_b,\qquad h_b(a)=\sum_{n=0}^\infty b_na_n$ is a complex-linear isometric bijection. There is no conjugation in this pairing.

[F3] From [[cor-ell-p-duality-by-counting-measure]], with its stated hypotheses: Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. Every bounded linear functional $\Lambda:\ell^p\to\mathbb R$ is of the form $\Lambda(a)=\sum_{n=0}^\infty a_nb_n$ for a unique sequence $b \in \ell^q$. Moreover, $\|\Lambda\|=\|b\|_{\ell^q}.$

[F4] From [[def-canonical-map-into-the-bidual]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$, define $J_X:X\to X^{**},\qquad (J_Xx)(f)=f(x)\quad(f\in X^*).$ With the dual norm from def-dual-space-of-a-normed-space, evaluation is linear in $f$ and $|(J_Xx)(f)|\le\|x\|\|f\|$, so $J_Xx$ is a bounded functional on $X^*$. The map is canonical and uses no chosen basis or conjugation.

## Counterexample

1.1 The first dual is identified isometrically with $\ell^1$ through $a\mapsto f_a$, where $f_a(x)=\sum_na_nx_n$. Its dual is $\ell^\infty$, by the complex endpoint theorem or the real counting-measure theorem at $p=1$. Precomposition with a surjective isometry preserves functional norms and is bijective by precomposition with its inverse, so these identifications also identify the bidual. [F1, F2, F3]

2.1 By canonical evaluation, $(J_{c_0}x)(f_a)=f_a(x)=\sum_na_nx_n$, whose coefficient sequence in $\ell^\infty$ is exactly $x$. The constant-one sequence is bounded, but a preimage would have $x_n=1$ for every $n$, as tested with $a=e_n$. Such a sequence does not tend to zero. Thus the named canonical map is not onto. Its zero input maps to zero, so the obstruction is the specified nonzero element. [F4, step 1.1] ∎
