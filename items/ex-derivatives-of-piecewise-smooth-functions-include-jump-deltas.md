---
id: "ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas"
kind: "example"
title: "Derivatives of piecewise smooth functions include jump deltas"
deps: ["def-distributional-derivative", "def-dirac-delta-and-its-derivatives", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "thm-dominated-convergence", "def-countable-choice", "thm-local-finite-order-characterization-of-distributions"]
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

## Example

Assume Countable Choice. Let $A\subseteq\mathbb R$ be locally finite, and let $f\in L^1_{\mathrm{loc}}(\mathbb R)$ be $C^1$ on each component of $\mathbb R\setminus A$. Assume finite one-sided limits $f(a\pm)$ at every $a\in A$, and assume that the classical derivative $g=f'$ off $A$, assigned arbitrary finite values on $A$, belongs to $L^1_{\mathrm{loc}}$. Then
$$D u_f=u_g+\sum_{a\in A}(f(a+)-f(a-))\delta_a.$$
The sum is locally finite. These hypotheses hold, in particular, when $f$ is $C^1$ up to each side of every break point.

## Facts & Assumptions

[F1] Locally integrable functions have regular functionals, and under Countable Choice the embedding theorem makes them distributions; distribution derivatives are signed test transposes and Dirac masses evaluate tests ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]).

[F2] Complex integration by parts on closed intervals holds under Countable Choice ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F3] Dominated convergence passes limits through integrable complex functions ([[thm-dominated-convergence]]).

[F4] Compactwise finite-order bounds characterize distributions ([[thm-local-finite-order-characterization-of-distributions]]).

[F5] Assume [[def-countable-choice]] for the Lebesgue integration interfaces.

## Proof

**Given:** $A,f,g$ and the stated assumptions.

1.1 By F1, $u_f$ and $u_g$ are distributions. Fix a test $\varphi$ and a closed interval $[b,c]$ containing its support in its interior, with endpoints outside $A$. Local finiteness and compactness imply $A\cap[b,c]$ is finite: take a finite subcover of neighborhoods each meeting finitely many points. List these break points in increasing order. On each intervening open interval $(s,t)$ apply F2 to $f,\varphi$ on $[s+\varepsilon,t-\varepsilon]$ for sufficiently small positive $\varepsilon$. This gives [given, F1, F2, F5]
$$-\int_{s+\varepsilon}^{t-\varepsilon} f\varphi'=\int_{s+\varepsilon}^{t-\varepsilon}g\varphi+f(s+\varepsilon)\varphi(s+\varepsilon)-f(t-\varepsilon)\varphi(t-\varepsilon).$$

2.1 Let $\varepsilon$ decrease to zero, for example through the reciprocal integers once the truncated interval is nonempty. F3 applies to the two integrals, with majorants $|f\varphi'|$ and $|g\varphi|$, integrable on $[b,c]$ by the local integrability assumptions. The boundary values tend to $f(s+)\varphi(s)$ and $f(t-)\varphi(t)$ by the finite one-sided limits; at $b,c$ the test vanishes. Sum over the finitely many intervals. At each break point $a$, the left interval contributes $-f(a-)\varphi(a)$ and the right contributes $f(a+)\varphi(a)$. The result is exactly the asserted formula when paired with $\varphi$. [step 1.1, given, F1, F3]

3.1 On any fixed compact test support $K$, the delta sum is finite and bounded in modulus by $\bigl(\sum_{a\in A\cap K}|f(a+)-f(a-)|\bigr)p_0(\varphi)$. It therefore defines a distribution by F4, so the test equality proves the distribution identity. If there are no break points in $K$ the sum is zero, and a zero jump contributes no delta. If $f$ is $C^1$ up to both sides, $f$ and $g$ are bounded on each of the finitely many compact pieces meeting a compact interval, hence locally integrable, verifying the stated sufficient case. Merely being $C^1$ on the open pieces does not supply local integrability of $g$ at the breaks. $\square$ [step 2.1, given, F1, F4]
