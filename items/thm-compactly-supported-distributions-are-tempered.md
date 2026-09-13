---
id: thm-compactly-supported-distributions-are-tempered
kind: theorem
title: Compactly supported distributions are tempered
status: published
origin: pipeline
deps: [thm-finite-seminorm-bound-characterizes-tempered-distributions, lem-compactly-supported-distributions-extend-to-smooth-functions, lem-test-function-inclusion-in-schwartz-space-is-continuous]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Inclusion (11.30) and §11.2.3, pp. 126, 129"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Compact-support example following Theorem 8.4.1, p. 128"
proof_strategy: direct
---

## Statement

Every compactly supported distribution $v\in\mathcal D'(\mathbb R^n)$ has a
unique extension $\widetilde v\in\mathcal S'(\mathbb R^n)$.  Restricting
$\widetilde v$ to $\mathcal D$ recovers $v$.  No choice axiom is required.

## Facts & Assumptions

**Given:** A distribution $v$ with compact support in $\mathbb R^n$.

[F1] Such a distribution extends uniquely to a continuous linear functional
on $C^\infty$, with $\widetilde v(f)=v(\chi f)$ for any fixed cutoff equal to
one near the support
([[lem-compactly-supported-distributions-extend-to-smooth-functions]]).

[F2] A finite Schwartz-seminorm estimate proves temperateness
([[thm-finite-seminorm-bound-characterizes-tempered-distributions]]).

[F3] The inclusion $\mathcal D\to\mathcal S$ is continuous with dense image
([[lem-test-function-inclusion-in-schwartz-space-is-continuous]]).

## Proof

**Proof technique:** cutoff extension and density.

1.1 Restrict the $C^\infty$ extension from [F1] to $\mathcal S$.  Its continuity gives a compact $K$, an integer $m$, and $C\geq0$ satisfying the following estimate. [F1]

$$|\widetilde v(\varphi)| \leq C\max_{|\beta|\leq m}\sup_{x\in K}|\partial^\beta\varphi(x)| \leq C\max_{|\beta|\leq m}p_{0,\beta}(\varphi).$$

Thus the restriction is tempered by [F2]. [F1, F2]

1.2 For $\psi\in\mathcal D$, the extension property in [F1] gives $\widetilde v(\psi)=v(\psi)$; this includes the zero distribution and empty support.  Hence $\widetilde v$ really extends $v$. [F1]

2.1 If $w\in\mathcal S'$ is another extension, then $w-\widetilde v$ vanishes on $\mathcal D$.  This difference is continuous on $\mathcal S$, and $\mathcal D$ is dense there, so it vanishes on all of $\mathcal S$. Therefore the extension is unique. [F3, step 1.2] ∎
