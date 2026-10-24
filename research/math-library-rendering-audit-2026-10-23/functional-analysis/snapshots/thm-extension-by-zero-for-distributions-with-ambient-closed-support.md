---
id: "thm-extension-by-zero-for-distributions-with-ambient-closed-support"
kind: "theorem"
title: "Extension by zero for distributions with ambient closed support"
deps: ["thm-distributions-form-a-sheaf", "def-support-of-a-distribution"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Razvan Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $F$ be closed in $\mathbb R^n$, let $F\subseteq\Omega$ with $\Omega$ open, and let $u\in\mathcal D'(\Omega)$ have support contained in $F$. Then there is a unique distribution $\widetilde u$ on $\mathbb R^n$ restricting to $u$ on $\Omega$ and with support contained in $F$. No compactness of $F$ is required. The assertion holds in ZF and uses ambient closedness, not merely relative closedness in $\Omega$.

## Facts & Assumptions

[F1] Compatible distributions on an arbitrary open cover glue uniquely ([[thm-distributions-form-a-sheaf]]).

[F2] A distribution vanishes on the complement of its support, and support is the complement of its largest vanishing open set ([[def-support-of-a-distribution]]).

## Proof

**Given:** $F,\Omega,u$ as in the statement.

1.1 The sets $\Omega$ and $\mathbb R^n\setminus F$ are open and cover $\mathbb R^n$ because $F\subseteq\Omega$. On their overlap $\Omega\setminus F$, the distribution $u$ vanishes by F2 since its support is contained in $F$. Hence $u$ and the zero distribution on $\mathbb R^n\setminus F$ are compatible. [given, F2]

2.1 F1 glues them to $\widetilde u$. It restricts to $u$ and is zero on $\mathbb R^n\setminus F$, so F2 gives support contained in $F$. Any other extension with this support must have the same two restrictions, and uniqueness in F1 makes it equal to $\widetilde u$. [step 1.1, F1, F2]

3.1 If $F$ is empty, F2 makes $u=0$ and the extension is zero; if $\Omega=\mathbb R^n$, the extension is $u$. Ambient closedness ensures that the second member of the cover is open. The proof therefore supplies no extension claim across a boundary when only relative closedness is known. There is no choice use beyond the choice-free sheaf theorem. $\square$ [step 2.1, F1, F2]
