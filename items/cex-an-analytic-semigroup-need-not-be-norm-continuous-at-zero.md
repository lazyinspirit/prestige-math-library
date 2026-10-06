---
id: cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero
kind: counterexample
title: An analytic semigroup need not be norm continuous at zero
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 17
deps: [cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup, ex-analytic-dirichlet-heat-semigroup, cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero, ex-analytic-semigroup-generated-by-a-bounded-operator, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, def-operator-norm, def-bounded-linear-operator, def-dependent-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Corollary II.1.5 (norm continuity at zero forces a bounded generator), printed pp. 50-51"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 2 Section 2.3, Example 2.30 and the discussion of strong versus uniform continuity, printed pp. 66-68"
verification:
  precheck: pass
---

## Statement refuted

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the Dirichlet eigenbasis witness.

The claim that a bounded analytic semigroup is norm continuous at the vertex, i.e. that $\|T(t)-I\|\to0$ as $t\downarrow0$ whenever $T$ is a bounded analytic semigroup, is false. Let $\Omega$ be a nonempty bounded open set and let $A=\Delta_D$ be the Dirichlet Laplacian with heat semigroup $T$ ([[cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup]], [[ex-analytic-dirichlet-heat-semigroup]]). Then $T$ is a bounded analytic semigroup of angle $\pi/2$, but $T(t)\to I$ fails in the operator norm as $t\downarrow0$: for every $t>0$ and every eigenfunction $e_j$ with eigenvalue $-\lambda_j$, $$\|(T(t)-I)e_j\|_2=|e^{-\lambda_jt}-1|\,\|e_j\|_2,$$ and the right-hand side tends to $1$ as $j\to\infty$ for fixed $t>0$ because $\lambda_j\to+\infty$; hence $\|T(t)-I\|\ge1$ for every $t>0$. In particular analyticity improves regularity in the time variable at positive times ([[cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero]]) but does not upgrade strong continuity at the vertex to norm continuity; for a bounded generator the reverse conclusion holds ([[ex-analytic-semigroup-generated-by-a-bounded-operator]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the Dirichlet Laplacian $A=\Delta_D$ with its heat semigroup $T$ and eigenbasis $\{e_j\}$ with eigenvalues $-\lambda_j$, $\lambda_j\to+\infty$, normalised by $\|e_j\|_{L^2}=1$; and a fixed $t>0$.

[L1] $A=\Delta_D$ generates a contraction analytic semigroup $T$ of maximal allowed angle $\pi/2$, hence a bounded analytic semigroup of angle $\pi/2$ ([[cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup]]).

[L2] The heat semigroup is given by the spectral series $T(s)f=\sum_j e^{-\lambda_js}(f,e_j)_{L^2}e_j$ with $A e_j=-\lambda_je_j$, so $T(s)e_j=e^{-\lambda_js}e_j$ for every $s>0$, and the eigenvalues satisfy $\lambda_j\to+\infty$ ([[ex-analytic-dirichlet-heat-semigroup]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[L3] In the setting of the smoothing theorem, $t\mapsto T(t)$ is of class $C^\infty$ on $(0,\infty)$ in the operator norm, with $\frac{d}{dt}T(t)=AT(t)$; no norm continuity or differentiability at $0$ is asserted, and for an unbounded generator it fails ([[cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero]]).

[L4] For a bounded operator $A\in\mathcal B(X)$ the exponential series defines a uniformly continuous strongly continuous semigroup with generator $A$; in particular norm continuity at the vertex holds for bounded generators ([[ex-analytic-semigroup-generated-by-a-bounded-operator]], [[def-bounded-linear-operator]]).

[L5] The operator norm is $\|S\|=\sup\{\|Sx\|:\|x\|\le1\}$ ([[def-operator-norm]]).



## Counterexample

**Proof technique:** direct.

1.1 The eigenfunction computation. For $t>0$ and each basis eigenfunction $e_j$ of [L2], $T(t)e_j=e^{-\lambda_jt}e_j$, so $(T(t)-I)e_j=(e^{-\lambda_jt}-1)e_j$ and therefore $\|(T(t)-I)e_j\|_{L^2}=|e^{-\lambda_jt}-1|\,\|e_j\|_{L^2}=|e^{-\lambda_jt}-1|$; since $\lambda_j\to+\infty$ and $t>0$ fixed, $\lambda_jt\to+\infty$ and $e^{-\lambda_jt}\to0$, so $|e^{-\lambda_jt}-1|\to1$ along $j$, and $\|T(t)-I\|\ge\sup_j|e^{-\lambda_jt}-1|=1$ by [L5]. [L2, L5, given, algebra]

2.1 The semigroup is analytic but not norm continuous at zero. By [L1] $T$ is a bounded analytic semigroup of angle $\pi/2$ generated by $A$, so [L3] makes $t\mapsto T(t)$ operator-norm differentiable at every $t>0$, while [step 1.1] shows $\|T(t)-I\|\ge1$ for every $t>0$; hence $T(t)\to I$ fails in operator norm as $t\downarrow0$, and the failure is attached to the vertex, not to the analyticity on the open sector. [step 1.1, L1, L3, given]

3.1 Contrast with bounded generators. If the generator $A$ were bounded, [L4] would make $T$ uniformly continuous, in particular $\|T(t)-I\|\to0$; the computation of [step 1.1] together with $Ae_j=-\lambda_je_j$ from [L2] shows $\|Ae_j\|_{L^2}=\lambda_j\to+\infty$ on the unit vectors $e_j$, so the Dirichlet Laplacian is unbounded and the two conclusions are consistent; thus norm continuity at the vertex is not a consequence of analyticity but fails exactly for the unbounded-generator case, and the displayed estimate $\|T(t)-I\|\ge1$ is the explicit witness. [step 1.1, L2, L4, given, algebra] ∎



The same witness shows that $T(t)\to I$ in the norm topology fails maximally: the distance from $T(t)$ to the identity is at least $1$ along the eigenbasis. Strong continuity at the vertex is nevertheless asserted, since $T(t)f\to f$ in norm for each fixed $f$; only the uniform-in-$f$ statement fails.
