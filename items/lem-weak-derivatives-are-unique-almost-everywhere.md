---
id: lem-weak-derivatives-are-unique-almost-everywhere
kind: lemma
title: Uniqueness of a weak derivative as an almost-everywhere class
status: published
origin: pipeline
deps: [def-weak-derivative-of-a-locally-integrable-function, def-locally-integrable-function-as-a-regular-distribution, thm-locally-integrable-functions-embed-in-distributions, def-countable-choice]
landmark: false
proof_strategy: direct
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
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.1
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), §3.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$,
$\alpha\in\mathbb N_0^n$, and $u,v,w\in L^1_{\mathrm{loc}}(\Omega)$. If both
$v$ and $w$ are weak $\alpha$-derivatives of $u$, then
$$v=w\quad\text{almost everywhere on }\Omega.$$
Thus a weak derivative, when it exists, is unique as an almost-everywhere
class. No connectedness assumption is needed.

If $\Omega=\varnothing$, the assertion holds because there is only the zero
class and no nonzero tests.

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1, printed pp. 3–4,
  Definition 1.2 and the uniqueness proof immediately following Remarks 1.3.
  The proof subtracts the two weak identities and tests their difference to
  conclude equality almost everywhere. The library proof uses its published
  regular-distribution injection as the precise uniqueness interface.
- John K. Hunter, *Notes on Partial Differential Equations*, §3.1,
  Definitions 3.1–3.2, printed pp. 47–48, for the weak derivative convention.

## Facts & Assumptions

**Given:** Countable Choice, an open set $\Omega\subseteq\mathbb R^n$, $\alpha\in\mathbb N_0^n$, and $u,v,w\in L^1_{\mathrm{loc}}(\Omega)$ such that $v$ and $w$ both satisfy the weak derivative identity.

[F1] A weak $\alpha$-derivative satisfies the signed test identity for every $\varphi\in C_c^\infty(\Omega)$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] Under Countable Choice, the map from a locally integrable almost-everywhere class to its regular distribution is injective ([[thm-locally-integrable-functions-embed-in-distributions]]).

## Proof

**Proof technique:** direct.

1.1 For every test $\varphi\in C_c^\infty(\Omega)$, the two weak derivative identities have the same left side. Subtracting them gives $$(-1)^{|\alpha|}\int_\Omega (v-w)\varphi\,dx=0.$$ Since $(-1)^{|\alpha|}$ is nonzero, this says $\int_\Omega(v-w)\varphi\,dx=0$ for every test. [F1, given]

2.1 The difference $v-w$ is locally integrable, and its regular distribution therefore pairs with each test by this integral. Step 1.1 says that this regular distribution is zero. By [F2] and the stated Countable Choice hypothesis, its representing almost-everywhere class is zero; hence $v=w$ almost everywhere on all of $\Omega$. This argument applies to the whole open set, whether or not it is connected. [F2, step 1.1, given] ∎
