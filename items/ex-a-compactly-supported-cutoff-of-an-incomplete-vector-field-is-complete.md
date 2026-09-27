---
id: ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete
kind: example
title: "A compactly supported cutoff of an incomplete vector field is complete"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-existence-and-uniqueness-of-a-maximal-ode-solution, cor-bounded-derivative-implies-lipschitz, thm-extreme-value-metric, thm-heine-borel-rn, lem-ode-extension-from-a-compact-interior-region]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/root-receipts.jsonl (ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Choose a smooth bump function $\chi:\mathbb R\to[0,1]$ with $\chi=1$ on
$[-1,1]$ and $\operatorname{supp}\chi\subseteq [-2,2]$. Then

$$ Y=\chi(x)x^2\frac{\partial}{\partial x} $$

agrees with the incomplete field $x^2\,d/dx$ near the origin but is complete.

## Facts & Assumptions

**Given:** A bump function $\chi$ equal to $1$ on $[-1,1]$ and supported in $[-2,2]$.

[L1] Smooth bump functions with prescribed compact support exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L2] A Picard–Lindelöf initial value problem has a unique maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L3] A bounded derivative on an interval gives a Lipschitz bound ([[cor-bounded-derivative-implies-lipschitz]]).

[L4] Continuous functions on compact metric spaces are bounded ([[thm-extreme-value-metric]]), and closed bounded Euclidean sets are compact ([[thm-heine-borel-rn]]).

[L5] A solution with a sequence of graph points in a compact interior region approaching a finite endpoint extends beyond that endpoint ([[lem-ode-extension-from-a-compact-interior-region]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to $[-1,1]\subset(-2,2)$ to obtain the required smooth bump. Put $f(x)=\chi(x)x^2$. It is smooth, equals $x^2$ on $[-1,1]$, and vanishes off $[-2,2]$. Hence $|f|\le4$. Its derivative is continuous and zero off $[-2,2]$, so [L4] bounds $|f'|$ globally. By [L3], $f$ is Lipschitz. [L1, L3, L4, given]

2.1 Fix any initial value $x(0)=a$ and take its maximal solution $x:(\alpha,\beta)\to\mathbb R$ from [L2]. Since $|x'|=|f(x)|\le4$, [L3] on the interval between $0$ and $t$ gives $|x(t)-a|\le4|t|$. If $\beta<\infty$, set $t_j=\beta(1-1/(j+1))$ for $j\ge1$. These times increase to $\beta$, and the graph points lie in the compact rectangle $[0,\beta]\times[-R,R]$, where $R=|a|+4\beta+1$. The ODE domain is all of $\mathbb R^2$, so [L5] extends the solution past $\beta$, contrary to maximality. Therefore $\beta=\infty$. Reflecting time applies the same argument to $-f$ and gives $\alpha=-\infty$. This uses an explicitly defined sequence and no choice assumption. [L2, L3, L4, L5, step 1.1]

3.1 Every integral curve of $Y$ is thus global, so $Y$ is complete. In contrast, $x(t)=1/(1-t)$ solves $x'=x^2$ with $x(0)=1$ for $t<1$ and diverges as $t\uparrow1$, so the original field is incomplete. This verifies both the local agreement and the claimed change in completeness. [step 1.1, step 2.1, algebra] ∎
