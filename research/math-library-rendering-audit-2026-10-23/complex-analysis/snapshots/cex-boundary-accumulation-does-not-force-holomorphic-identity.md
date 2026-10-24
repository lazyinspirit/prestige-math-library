---
id: cex-boundary-accumulation-does-not-force-holomorphic-identity
kind: counterexample
title: "Agreement accumulating only at the boundary does not force a holomorphic identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-holomorphic-functions, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-complex-sine-and-cosine-zero-sets, thm-complex-trigonometric-hyperbolic-dictionary, thm-quarter-turn-values-and-shift-formulas, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives, lem-punctured-rn-is-polygonally-connected, rem-complex-plane-euclidean-dictionary, def-complex-domain]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §2.3"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement refuted

Two holomorphic functions on a complex domain that agree on a set accumulating at a boundary point must agree everywhere.

## Facts & Assumptions

**Given:** The punctured plane $\Omega=\mathbb C\setminus\{0\}$, the functions $f(z)=\sin(1/z)$ and $g(z)=0$, the entire complex sine ([[cor-complex-trigonometric-and-hyperbolic-derivatives]], [[thm-complex-trigonometric-hyperbolic-dictionary]]), the complex chain and quotient rules ([[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]), the plane topology dictionary ([[rem-complex-plane-euclidean-dictionary]]), and $\sin(\pi/2)=1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L1] For complex $z$, $\sin z=0$ exactly when $z=k\pi$ for some integer $k$ ([[thm-complex-sine-and-cosine-zero-sets]]).

[L2] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain ([[thm-identity-theorem-holomorphic-functions]]).

[L3] For $n\ge2$, $\mathbb R^n\setminus\{0\}$ is polygonally connected ([[lem-punctured-rn-is-polygonally-connected]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $\Omega$ is open and is connected by [L3] under the plane dictionary, so it is a complex domain ([[def-complex-domain]]). The chain and quotient rules make $f$ holomorphic there, and $g$ is holomorphic as a constant. [L3, given, algebra]

1.2 For every natural $k\ge1$, put $z_k=1/(k\pi)$. Then $z_k\in\Omega$, [L1] gives $f(z_k)=\sin(k\pi)=0=g(z_k)$, the points are distinct, and $z_k\to0$. [L1, algebra]

2.1 The accumulation point $0$ is not in $\Omega$, so [L2] does not apply. Moreover, $2/\pi\in\Omega$ and $f(2/\pi)=\sin(\pi/2)=1\ne0=g(2/\pi)$. Thus the functions agree on a set accumulating only at the boundary but are not identical. [step 1.1, step 1.2, L2, given, algebra] ∎
