---
id: cex-transpose-range-need-not-be-norm-dense
kind: counterexample
title: "The transpose of an injective map need not have norm-dense range"
status: published
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-dual-of-c0-is-ell-one", "cor-ell-p-duality-by-counting-measure", "lem-finite-truncations-are-dense-in-c0-and-ell-one", "lem-c-zero-is-a-closed-subspace-of-ell-infinity", "def-annihilator-and-preannihilator"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 4.10, p.174"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Compute T* by the pairing. Finite support sequences imply norm closure contains c0; ell-one is contained in the closed c0 subspace, proving equality. The constant-one sequence is outside. No weak-star result is needed for this norm-closure refutation."
---

## Statement refuted

An injective bounded operator need not have norm-dense transpose range. Over $\mathbb R$, take the inclusion $T:\ell^1\to c_0$. Its transpose is the inclusion $T^*:\ell^1\to\ell^\infty$, and $$\overline{\operatorname{ran}T^*}^{\|\cdot\|_\infty}=c_0\subsetneq\ell^\infty=(\ker T)^\perp.$$ The operator $T$ is injective and has dense range.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[thm-dual-of-c0-is-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. With coordinates starting at zero, the map $\ell^1(\mathbb K)\longrightarrow c_0(\mathbb K)^*,\qquad a\longmapsto f_a,\qquad f_a(x)=\sum_{n=0}^\infty a_nx_n$ is a linear isometric bijection. The pairing is bilinear, including over $\mathbb C$.

[F3] From [[cor-ell-p-duality-by-counting-measure]], with its stated hypotheses: Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. Every bounded linear functional $\Lambda:\ell^p\to\mathbb R$ is of the form $\Lambda(a)=\sum_{n=0}^\infty a_nb_n$ for a unique sequence $b \in \ell^q$. Moreover, $\|\Lambda\|=\|b\|_{\ell^q}.$

[F4] From [[lem-finite-truncations-are-dense-in-c0-and-ell-one]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Use coordinates indexed by $\mathbb N=\{0,1,\ldots\}$. Define $\ell^1(\mathbb K)=\{a:\sum_{n=0}^\infty|a_n|<\infty\}$, with coordinatewise operations and norm $\|a\|_1=\sum_n|a_n|$. Let $P_N$ retain coordinates $0,\ldots,N$ and set all others to zero. Then $\|x-P_Nx\|_\infty\longrightarrow0\quad(x\in c_0(\mathbb K)),\qquad\|a-P_Na\|_1\longrightarrow0\quad(a\in\ell^1(\mathbb K)).$

[F5] From [[lem-c-zero-is-a-closed-subspace-of-ell-infinity]], with its stated hypotheses: $c_0$ is a closed linear subspace of $\ell^\infty$ in the sup norm.

[F6] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

## Counterexample

1.1 Absolute summability implies convergence to zero: infinitely many coordinates of magnitude at least $\varepsilon>0$ would make partial absolute sums unbounded. Also $\|x\|_\infty\le\|x\|_1$, so inclusion is bounded and injective. Finite-support sequences lie in its range and are dense in $c_0$ by truncation. [F4]

1.2 Identify $c_0^*$ with $\ell^1$ and $(\ell^1)^*$ with real $\ell^\infty$. For $a\in\ell^1$ and $x\in\ell^1$, $(T^*f_a)(x)=f_a(Tx)=\sum_na_nx_n$, so the transpose corresponds to the same coefficient sequence $a$, now viewed in $\ell^\infty$. [F1, F2, F3]

2.1 The transpose image is contained in $c_0$, which is closed in $\ell^\infty$, so its norm closure is contained in $c_0$. Conversely it contains all finite-support sequences, whose sup-norm closure contains $c_0$ by truncation. Hence that closure is exactly $c_0$. [F4, F5, step 1.1, step 1.2]

3.1 The constant-one sequence has distance exactly one from $c_0$: for $z_n\to0$, $|1-z_n|\to1$, so $\|1-z\|_\infty\ge1$, and $z=0$ attains one. It is therefore outside the closure. Since $\ker T=0$, its annihilator is all of $(\ell^1)^*=\ell^\infty$, proving strict inclusion. [F6, step 1.1, step 2.1] ∎
