---
id: lem-transpose-range-membership-by-domination
kind: lemma
title: "Membership in the transpose range by an operator estimate"
status: published
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-norm-preserving-extension-from-any-subspace"]
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
    - title: "Bühler–Salamon, Functional Analysis, Lemma 4.15, pp.175–176"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Define h(Tx)=f(x); the bound proves independence of x and boundedness on ran T, even if that range is not closed. HB extends h to Y."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded linear between normed spaces and $f\in X^*$. Then $$f\in\operatorname{ran}T^*\quad\Longleftrightarrow\quad\exists C\ge0\ \forall x\in X:\ |f(x)|\le C\|Tx\|.$$ For any such $C$, a representing $g\in Y^*$ can be chosen with $\|g\|\le C$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[thm-norm-preserving-extension-from-any-subspace]], with its stated hypotheses: Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, let $M \subseteq X$ be a linear subspace, and let $f_0:M \to \mathbb{R}$ or $f_0:M \to \mathbb{C}$ be a bounded linear functional over the ambient scalar field. Then there exists a bounded linear extension $F$ of $f_0$ to all of $X$ such that $\|F\|=\|f_0\|$. No closedness hypothesis on $M$ is needed.

## Proof

1.1 If $f=T^*g$, then $|f(x)|=|g(Tx)|\le\|g\|\|Tx\|$ for all $x$. Take $C=\|g\|\ge0$. [F1]

1.2 Conversely suppose the domination bound holds. It forces $f$ to vanish on $\ker T$. Therefore $h(Tx)=f(x)$ defines a linear functional on $\operatorname{ran}T$: if $Tx=Tx^\prime$, the difference is in the kernel and $f(x)=f(x^\prime)$. The bound says $|h(y)|\le C\|y\|$ there. [given]

2.1 Extend $h$ to $g\in Y^*$ with $\|g\|=\|h\|\le C$, without assuming the range is closed. Then $T^*g=f$. If $C=0$, $f=0$ and $g=0$ works; for $T=0$ the bound holds precisely for $f=0$. [F1, F2, step 1.2] ∎
