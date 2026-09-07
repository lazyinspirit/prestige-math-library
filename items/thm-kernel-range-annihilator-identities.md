---
id: thm-kernel-range-annihilator-identities
kind: theorem
title: "Kernel-range identities and the weak-star closure of the transpose range"
status: draft
origin: pipeline
deps: ["lem-elementary-kernel-range-annihilator-identities", "def-weak-star-topology", "thm-bipolar-closure-for-linear-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Theorem 4.8 and Corollary 3.26, pp.174 and 130"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Apply the now preceding local bipolar-closure theorem to the linear subspace N=ran T*. The elementary preannihilator identity gives preannihilator(ran T*)=ker T. The first identity is the preceding elementary kernel-range lemma. Its injectivity consequence is that T is injective iff ran T* is weak-star dense. Preserve weak-star closure throughout."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. If $T:X\to Y$ is bounded linear between normed spaces, then $$(\operatorname{ran}T)^\perp=\ker T^*,\qquad (\ker T)^\perp=\overline{\operatorname{ran}T^*}^{\sigma(X^*,X)}.$$ The second closure is weak-star closure, with no norm-closure substitution.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[lem-elementary-kernel-range-annihilator-identities]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $(\operatorname{ran}T)^\perp=\ker T^*,\qquad {}^\perp(\operatorname{ran}T^*)=\ker T,\qquad \overline{\operatorname{ran}T}^{\|\cdot\|}={}^\perp(\ker T^*).$ The closure in the last identity is in $Y$.

[F2] From [[def-weak-star-topology]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ with continuous dual $X^*$ from def-dual-space-of-a-normed-space, the **weak-star topology** $\sigma(X^*,X)$ is the initial topology of all evaluations $f\mapsto f(x)$ into $\mathbb K$ with its usual topology. At $f_0$, a neighbourhood basis consists of $U(f_0;x_1,\ldots,x_n;\varepsilon)=\{f\in X^*: |(f-f_0)(x_j)|<\varepsilon\ (1\le j\le n)\},$ where $n$ is finite and $\varepsilon>0$. For $n=0$ the set is all of $X^*$. Finite intersections of inverse images of scalar open sets form the initial-topology basis; at the given point, finitely many disks can be refined using their smallest positive radius. Weak-star closure means closure in this topology, not merely sequential closure.

[F3] From [[thm-bipolar-closure-for-linear-subspaces]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and a linear subspace $N\le X^*$, $({}^\perp N)^\perp=\overline N^{\sigma(X^*,X)}.$ Consequently $N$ is weak-star closed if and only if $N=({}^\perp N)^\perp$, and weak-star dense in $X^*$ if and only if ${}^\perp N=\{0\}$. For a linear subspace $M\le X$, the primal formula is ${}^\perp(M^\perp)=\overline M^{\|\cdot\|}$.

## Proof

1.1 The elementary identities give $(\operatorname{ran}T)^\perp=\ker T^*$ and ${}^\perp(\operatorname{ran}T^*)=\ker T$. The range of the linear operator $T^*$ is a linear subspace of $X^*$. [F1]

2.1 Apply the bipolar closure theorem to $N=\operatorname{ran}T^*$ in the topology $\sigma(X^*,X)$. It gives $\overline{\operatorname{ran}T^*}^{\sigma(X^*,X)}=({}^\perp\operatorname{ran}T^*)^\perp=(\ker T)^\perp$. For $T=0$ this is $\overline{\{0\}}^{\sigma(X^*,X)}=X^\perp=0$, so zero ranges are included. [F2, F3, step 1.1] ∎
