---
id: "cex-not-every-distribution-is-a-locally-integrable-function"
kind: "counterexample"
title: "Not every distribution is a locally integrable function"
deps: ["thm-locally-integrable-functions-embed-in-distributions", "def-dirac-delta-and-its-derivatives", "def-countable-choice", "lem-test-function-cutoffs-and-euclidean-localization", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null"]
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
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every distribution on $\mathbb R^n$, $n\ge1$, is represented by a locally integrable function. Under Countable Choice, $\delta_0$ is a counterexample.

## Facts & Assumptions

[F1] Under Countable Choice the regular-distribution map is injective on almost-everywhere classes on every open domain ([[thm-locally-integrable-functions-embed-in-distributions]], [[def-countable-choice]]).

[F2] Dirac is a distribution and $\delta_0(\varphi)=\varphi(0)$ ([[def-dirac-delta-and-its-derivatives]]).

[F3] A test equal to one near zero exists ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] A point is Lebesgue null, as a subset of a coordinate hyperplane ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

## Proof

**Given:** Countable Choice and the witness $\delta_0$.

1.1 Suppose $u_f=\delta_0$ with $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$. On the open domain $U=\mathbb R^n\setminus\{0\}$, all tests evaluate to zero at the origin, so F2 gives $u_{f|U}=0$. F1 applied on this entire open domain, without selecting pointwise neighborhoods, gives $f=0$ almost everywhere on $U$. By F4 the omitted singleton is null, so $f=0$ almost everywhere on $\mathbb R^n$. [given, F1, F2, F4]

2.1 Consequently $u_f=0$, but F3 supplies $\varphi$ with $\varphi(0)=1$, and F2 gives $\delta_0(\varphi)=1$. This contradiction proves that the witness is not regular and refutes the proposed universal statement. The zero function does represent the zero distribution; the failure is the nonzero point mass, not a failure of the regular-distribution construction. Dimension zero is excluded, since its singleton has mass one in the library convention. $\square$ [step 1.1, F1, F2, F3]
