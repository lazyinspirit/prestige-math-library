---
id: "thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint"
kind: "theorem"
title: "The Lagrange multiplier rule for one regular constraint in Hilbert space"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 4
deps:
  - "def-axiom-of-choice"
  - "def-frechet-derivative-between-banach-spaces"
  - "def-hilbert-space"
  - "lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family"
  - "lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-304 (Theorem 13.6: the case of one nonvanishing constraint derivative, giving the Lagrange multiplier identity)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a real Hilbert space ([[def-hilbert-space]]), let $U\subseteq H$ be open, let $I:U\to\mathbb R$ be Fréchet differentiable at $u\in U$, and let $G:U\to\mathbb R$ be of class $C^1$ with $DG(u)\ne0$ ([[def-frechet-derivative-between-banach-spaces]]). If $u$ is a local minimiser or a local maximiser of $I$ on the level set $\{G=G(u)\}$, then there is a unique $\lambda\in\mathbb R$ with
$$DI(u)=\lambda\,DG(u).$$

## Facts & Assumptions

**Given:** A real Hilbert space $H$, open $U\subseteq H$, a functional $I$ Fréchet differentiable at $u$, a $C^1$ function $G$ with $DG(u)\ne0$, and the assumption that $u$ is a local minimiser or local maximiser of $I$ on the level set $\{G=G(u)\}$.

[F1] [[lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum]]: under these hypotheses $DI(u)h=0$ for every $h\in\ker DG(u)$, and the same conclusion is obtained from the constrained-extremum lemma applied with the single constraint $G$ (the level set and $C^1$ hypotheses are exactly those of that lemma with $m=1$, whose derivative $DG(u)\ne0$ is surjective onto $\mathbb R$).

[F2] [[lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family]]: if $\psi\ne0$ is a bounded linear functional on $H$ with $\ker\psi\subseteq\ker\varphi$ for some bounded linear functional $\varphi$, then $\varphi=\lambda\psi$ for a unique $\lambda\in\mathbb R$; this is the $m=1$ clause of that lemma.

[F3] [[def-frechet-derivative-between-banach-spaces]], [[def-hilbert-space]]: $DI(u)$ and $DG(u)$ are bounded linear functionals on $H$ (the derivative of a $C^1$ function into $\mathbb R$), and $DG(u)\ne0$ means that $DG(u)$ is not the zero functional.

[A1] [[def-axiom-of-choice]]: recorded as in the statement and consumed only through [F1].

## Proof

**Proof technique:** direct.

**Given:** The hypotheses above, including the local extremum at $u$ and $DG(u)\ne0$.

1.1 Since $DG(u):H\to\mathbb R$ is a nonzero bounded linear functional, it is surjective, so the constrained-extremum lemma [F1] applies with the single constraint $G$: the differential $DI(u)$ vanishes on $\ker DG(u)$. [given, A1, F1, F3]

2.1 The functionals $\psi:=DG(u)\ne0$ and $\varphi:=DI(u)$ satisfy $\ker\psi=\ker DG(u)\subseteq\ker DI(u)=\ker\varphi$ by step 1.1, so the $m=1$ clause of [F2] gives a unique $\lambda\in\mathbb R$ with $DI(u)=\lambda DG(u)$. [step 1.1, F2, F3]

3.1 This is the asserted multiplier identity with its uniqueness clause; the Hilbert structure is used only through the standing conventions of the page, the argument being valid in any real Banach space [A1]. [step 2.1, A1] ∎

