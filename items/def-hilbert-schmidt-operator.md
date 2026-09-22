---
id: def-hilbert-schmidt-operator
kind: definition
title: Hilbert–Schmidt operator and Hilbert–Schmidt norm
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-square-summable-family-on-an-arbitrary-index-set, def-bounded-linear-operator, def-operator-norm, def-space-of-bounded-linear-operators]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Roe, Lectures on Analysis — Lecture 13, Definition 13.1, printed p. 67"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.23, printed pp. 93–94"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  audited: 2026-09-22
---

## Definition

Throughout, $H$ and $K$ are real or complex Hilbert spaces with the pairing
linear in the first argument and conjugate-linear in the second
([[def-hilbert-space]]), $T\in\mathcal B(H,K)$ is a bounded linear operator
([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]) of
operator norm $\|T\|$ ([[def-operator-norm]]), and $E$ is a **Hilbert basis**
of $H$, that is, a complete orthonormal subset of $H$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).
The basis $E$ is **supplied as data**; the definitions below are stated
relative to it.

**The Hilbert–Schmidt square-sum.** The family $(\|Te\|^2)_{e\in E}$ consists of
nonnegative real numbers and is indexed by the arbitrary set $E$. Its sum is the
supremum of the finite subsums,

$$s_E(T):=\sum_{e\in E}\|Te\|^2:=\sup\Bigl\{\sum_{e\in F}\|Te\|^2 \;:\; F\subseteq E \text{ finite}\Bigr\}\in[0,+\infty],$$

in the finite-subset-supremum convention of
[[def-square-summable-family-on-an-arbitrary-index-set]]; the empty finite
subset contributes the empty sum $0$, so the supremum is over a nonempty
set and exists in $[0,+\infty]$. No enumeration, ordering or countability of
$E$ is used or asserted, and no choice is performed: the supremum ranges over
the set of finite subsets of the fixed index set $E$. For finite $E$ the
supremum is the ordinary finite sum over $E$, because all terms are
nonnegative.

**Hilbert–Schmidt relative to a basis.** The operator $T$ is
**Hilbert–Schmidt relative to $E$** when $s_E(T)<+\infty$, that is, when the
finite subsums are bounded above in $\mathbb R$. In that case the
**Hilbert–Schmidt norm of $T$ relative to $E$** is the nonnegative square root

$$\|T\|_{HS,E}:=\Bigl(\sum_{e\in E}\|Te\|^2\Bigr)^{1/2}\in[0,+\infty).$$

When $s_E(T)=+\infty$, no Hilbert–Schmidt norm relative to $E$ is defined, and
$T$ is not Hilbert–Schmidt relative to $E$.

**Degenerate and extreme cases.** The zero operator satisfies $s_E(0)=0$ for
every basis $E$, so it is Hilbert–Schmidt relative to every basis with norm
$0$. If $H=\{0\}$ then the empty family is a Hilbert basis of $H$, the only
finite subset is empty, and $s_\varnothing(T)=0$ for the only linear operator
$T:\{0\}\to K$; that operator is Hilbert–Schmidt relative to the empty basis
with norm $0$. If $H$ is finite dimensional and $E$ is finite, $s_E(T)$ is an
ordinary finite sum of the squared norms $\|Te\|^2$, and $T$ is automatically
Hilbert–Schmidt relative to $E$.

**The basis is part of the notation.** The symbol $\|T\|_{HS,E}$ keeps the
basis in the subscript on purpose. Until the next result is proved, the phrase
"$T$ is Hilbert–Schmidt" is never used without a specified Hilbert basis, and
nothing here asserts that a Hilbert basis of $H$ exists: the existence of $E$
is a hypothesis of the definition, and the question of whether the finiteness
of $s_E(T)$ and the value $\|T\|_{HS,E}$ depend on $E$ is taken up in
[[thm-hilbert-schmidt-norm-is-basis-independent]]. In particular this
definition makes no basis-existence claim and no comparison with the operator
norm $\|T\|$; every such statement is proved later, where its own hypotheses
are displayed.

**Notation.** For a finite $F\subseteq E$ we write
$s_F(T):=\sum_{e\in F}\|Te\|^2$ for the finite subsum, so that
$s_E(T)=\sup\{s_F(T):F\subseteq E \text{ finite}\}$.
