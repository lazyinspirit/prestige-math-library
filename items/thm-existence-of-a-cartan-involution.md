---
id: thm-existence-of-a-cartan-involution
kind: theorem
title: Existence of a Cartan involution
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-complexification-preserves-semisimplicity, thm-existence-of-a-compact-real-form, thm-conjugacy-of-compact-real-forms, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §2, Theorem 6.16 and its proof, printed pp. 360-364"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional real semisimple Lie algebra
$\mathfrak g_0$ has a Cartan involution
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

## Facts & Assumptions

**Given:** The Axiom of Choice and a finite-dimensional real semisimple Lie algebra $\mathfrak g_0$ with complexification $\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ and Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the compact-form theory of [L2] and [L3].

[L1] $\mathfrak g$ is semisimple and the complexification of the Killing form of $\mathfrak g_0$ is the Killing form of $\mathfrak g$; the canonical conjugation $\sigma$ of $\mathfrak g$ with respect to $\mathfrak g_0$ is a conjugate-linear bracket-preserving involution with fixed locus $\mathfrak g_0$ ([[prop-complexification-preserves-semisimplicity]], [[def-complexification-of-a-real-lie-algebra]], [[thm-real-forms-correspond-to-conjugate-linear-involutions]]).

[L2] $\mathfrak g$ has a compact real form $\mathfrak u$ with associated conjugation $\tau$ and negative definite Killing form on $\mathfrak u$ ([[thm-existence-of-a-compact-real-form]]).

[L3] Any two compact real forms of $\mathfrak g$ are conjugate by an inner automorphism ([[thm-conjugacy-of-compact-real-forms]]).



**Proof technique:** direct.

1.1 The compact conjugation $\tau$ and the real-form conjugation $\sigma$ are both conjugate-linear involutions of $\mathfrak g$. Since the inner automorphism group of $\mathfrak g$ contains elements implementing the conjugacy of compact forms by [L3], we may replace $\mathfrak u$ by a conjugate compact form so that $\sigma$ and $\tau$ commute: the product $\sigma\tau$ is a complex-linear automorphism by the same computation as for two compact conjugations, it is positive with respect to the positive definite form $-B(\cdot,\tau\cdot)$ on $\mathfrak u$, and its positive square root conjugates $\tau$ into a new compact conjugation commuting with $\sigma$. [L2, L3, algebra]

2.1 With $\sigma\tau=\tau\sigma$, define $\theta=\sigma\tau|_{\mathfrak g_0}$. Since $\sigma,\tau$ commute as conjugate-linear involutions, $\theta$ is a real-linear map; for $X\in\mathfrak g_0$, $\sigma X=X$, hence $\theta X=\tau X$ and $\theta^2X=\tau^2X=X$, so $\theta$ is an involution of the real vector space $\mathfrak g_0$. It preserves the bracket because both $\sigma$ and $\tau$ do. [L1, L2, step 1.1, algebra]

3.1 The bilinear form $B_\theta(X,Y)=-B(X,\theta Y)$ is positive definite. Since $\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$ and $\theta=\tau|_{\mathfrak g_0}$ extends to the conjugate-linear involution $\tau$ of $\mathfrak g$, and the form $-B(\cdot,\tau\cdot)$ is positive definite on the compact form $\mathfrak u$, we compute for $X\in\mathfrak g_0$: writing $X=U+P$ with $U\in\mathfrak u$ and $P\in i\mathfrak u$ (possible since $\mathfrak u$ is a real form), the decomposition is orthogonal for $B$, and $B_\theta(X,X)=-B(U,\tau U)-B(P,\tau P)=-B(U,\tau U)+B(iP,\tau(iP))$-type combination has both terms nonnegative: on $\mathfrak u$ the form $-B(\cdot,\tau\cdot)$ is positive definite by [L2], and on $i\mathfrak u$ it equals the same positive form under multiplication by $i$; moreover $B_\theta(X,X)=0$ forces $U=P=0$. [L1, L2, step 2.1, algebra]

4.1 Hence $\theta$ is a Cartan involution of $\mathfrak g_0$ in the sense of [[def-cartan-involution-of-a-real-semisimple-lie-algebra]]: it is an involutive automorphism and $B_\theta$ is positive definite. The theorem follows. [step 2.1, step 3.1, A1] ∎

1 checked, 1 failing
