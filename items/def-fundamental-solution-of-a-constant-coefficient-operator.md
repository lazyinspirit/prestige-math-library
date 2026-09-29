---
id: def-fundamental-solution-of-a-constant-coefficient-operator
kind: definition
title: Fundamental solution of a constant-coefficient operator
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: §5.3 equations (5.19)–(5.21), printed p. 117
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.6 distributional point-source interpretation, printed pp. 33–34
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-distribution", "def-distributional-derivative", "def-dirac-delta-and-its-derivatives", "thm-test-function-operations-are-continuous"]
---

## Statement

For a constant-coefficient differential operator $L=p(D)$ on $\mathbb R^n$, a distribution $E\in\mathcal D\prime(\mathbb R^n)$ is a fundamental solution when $LE=\delta_0$. Its translate $E_y(x)=E(x-y)$ satisfies $LE_y=\delta_y$, with translation defined on test functions and no conjugation in the pairing.

## Definition

The translation of a distribution $E\in\mathcal D'(\mathbb R^n)$ by $y\in\mathbb R^n$ is the distribution $E_y$ defined by
$$\langle E_y,\varphi\rangle:=\langle E,T_{-y}\varphi\rangle=\langle E,\varphi(\,\cdot+y)\rangle,\qquad \varphi\in\mathcal D(\mathbb R^n).$$
A fundamental solution of $L$ is a distribution $E$ such that $LE=\delta_0$. Here $L$ is a finite linear combination of distributional partial derivatives with constant scalar coefficients, and $D$ denotes the fixed derivative convention used to write that operator. The pairing is complex bilinear, so translation introduces no conjugation.

## Facts & Assumptions

**Given:** $E\in\mathcal D'(\mathbb R^n)$, fixed $y\in\mathbb R^n$, a test function $\varphi\in\mathcal D(\mathbb R^n)$, and a constant-coefficient operator $L$ that is a finite linear combination of distributional partial derivatives.

[F1] A distribution is a continuous complex-linear functional on test functions, and its pairing is linear in both arguments with no conjugation. ([[def-distribution]]).

[F2] Distributional derivatives are defined by $\langle\partial^\alpha E,\psi\rangle=(-1)^{|\alpha|}\langle E,\partial^\alpha\psi\rangle$. ([[def-distributional-derivative]]).

[F3] Test-function translation $T_h\varphi(x)=\varphi(x-h)$ is a continuous isomorphism between the corresponding LF test spaces. ([[thm-test-function-operations-are-continuous]]).

[F4] The Dirac distribution satisfies $\delta_a(\psi)=\psi(a)$. ([[def-dirac-delta-and-its-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Define $E_y$ by the displayed pairing. By [F3], $T_{-y}\varphi$ is a test function, and by [F1] composition with $E$ is a continuous complex-linear functional. Thus $E_y$ is a distribution; the formula is bilinear and uses no complex conjugation. [given, F1, F3]

1.2 For every multi-index $\alpha$, use [F2] and then differentiate the translated test directly to obtain
$$\langle\partial^\alpha E_y,\varphi\rangle=(-1)^{|\alpha|}\langle E,T_{-y}\partial^\alpha\varphi\rangle=(-1)^{|\alpha|}\langle E,\partial^\alpha T_{-y}\varphi\rangle=\langle\partial^\alpha E,T_{-y}\varphi\rangle.$$
The equality $T_{-y}\partial^\alpha\varphi=\partial^\alpha T_{-y}\varphi$ follows because $T_{-y}\varphi(x)=\varphi(x+y)$ and $y$ is fixed. [F2, F3]

2.1 By linearity of the distribution pairing, step 1.2 extends from each partial derivative to their finite constant-coefficient combination $L$. Hence $\langle LE_y,\varphi\rangle=\langle LE,T_{-y}\varphi\rangle$. If $LE=\delta_0$, [F4] makes the right side $(T_{-y}\varphi)(0)=\varphi(y)=\delta_y(\varphi)$, so $LE_y=\delta_y$. This proves the translated point-source assertion. [step 1.2, F1, F4, algebra]

3.1 The calculation also covers the zero operator: its premise $LE=\delta_0$ cannot hold since $\delta_0$ evaluates a test with value $1$ at zero as $1$. For $n=1$ the same multi-index computation applies unchanged; in the zero-dimensional formal case the only translation is by $0$ and the assertion is the premise itself. There are no spatial boundary endpoints on $\mathbb R^n$, and the proof uses only the fixed translation and finite algebra, not a choice axiom. [step 1.1, step 1.2, step 2.1, F4, cases] ∎

## Source notes

Teschl §5.3 equations (5.19)–(5.21), printed p. 117; Hunter §2.6 point-source interpretation, printed pp. 33–34. The translation identity is derived from the distributional derivative definition and fixed test-function translation, with signs checked in the bilinear pairing convention.
