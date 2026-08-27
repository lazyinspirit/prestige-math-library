---
id: thm-perron-solves-dirichlet-on-regular-plane-domains
kind: theorem
title: "On a regular bounded plane domain, Perron's method solves the Dirichlet problem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-perron-envelope-is-harmonic, thm-barrier-characterization-of-regular-boundary-points, cor-uniqueness-for-the-bounded-plane-dirichlet-problem]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain such that every
boundary point is regular. For every continuous boundary datum
$\varphi:\partial\Omega\to\mathbb R$, the regularized Perron envelope $H_\varphi$
is harmonic on $\Omega$, extends continuously to $\overline\Omega$, agrees with
$\varphi$ on $\partial\Omega$, and is the unique function with those
properties.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ whose every boundary point is regular, and a continuous boundary datum $\varphi:\partial\Omega\to\mathbb R$.

[L1] The regularized Perron envelope is harmonic on $\Omega$ ([[thm-perron-envelope-is-harmonic]]).

[L2] Regularity at a boundary point means that the Perron envelope tends to the prescribed boundary datum there; barriers characterize regular points ([[thm-barrier-characterization-of-regular-boundary-points]]).

[L3] A bounded-domain harmonic extension of fixed continuous boundary data is unique ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $H_\varphi$ is harmonic on $\Omega$. By the hypothesis that every boundary point is regular and the definition packaged in [L2], for every $\zeta\in\partial\Omega$ one has [L1, L2, given]
$$\lim_{\substack{z\to\zeta\\ z\in\Omega}}H_\varphi(z)=\varphi(\zeta).$$
[L1, L2, given]

2.1 Step 1.1 gives the boundary limits pointwise on $\partial\Omega$, and the continuity of $\varphi$ turns those limits into a continuous extension of $H_\varphi$ to $\overline\Omega$ by setting the boundary values equal to $\varphi$. [step 1.1, given]

3.1 If $u$ is any other continuous harmonic function on $\overline\Omega$ with $u=\varphi$ on $\partial\Omega$, then [L3] applied to $u$ and the extension from step 2.1 gives $u=H_\varphi$ on $\overline\Omega$. Thus Perron's method solves the Dirichlet problem uniquely on regular bounded plane domains. [step 2.1, L3] ∎
