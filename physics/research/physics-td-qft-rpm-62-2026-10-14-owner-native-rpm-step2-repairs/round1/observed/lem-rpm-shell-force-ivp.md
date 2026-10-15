---
id: lem-rpm-shell-force-ivp
kind: lemma
title: "Orthogonal shell force local IVP and compact continuation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - lem-rpm-shell-tangent-force-ivp
  - def-vector-valued-derivative-and-integral
  - thm-componentwise-limits-and-continuity
  - thm-continuous-implies-integrable
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
dependency_roles:
  lem-rpm-shell-tangent-force-ivp: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
sources:
  references:
    - title: "Gautam Iyer, Brief Notes on Introduction to Differential Equations, complete ODE notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html"
      locator: "Theorem 1 and Proposition 17: local existence/uniqueness and the compact-set continuation alternative. The source gives the continuation theorem; the assigned item proves the endpoint-limit and gluing argument in full."
---

## Statement

Let $\mathcal D\subseteq\mathbb R^8$ be an open coordinate-state domain with state $z=(x,U)\in\mathbb R^4\times\mathbb R^4$, and let $G:\mathcal D\to\mathbb R^8$ be the smooth autonomous coordinate vector field of the shell-tangent force system in [[lem-rpm-shell-tangent-force-ivp]]. Let $z:(a,b)\to\mathcal D$ be its unique maximal solution. If $b<\infty$ and there are $b_0\in(a,b)$ and a compact set $K\subset\mathcal D$ such that $z([b_0,b))\subseteq K$, then the solution extends beyond $b$, contradicting maximality. The analogous statement holds at a finite left endpoint. Therefore a finite maximal endpoint can occur only if the state eventually leaves every compact subset of its open coordinate-state domain.

This is a mathematical continuation criterion for the coordinate ODE. It asserts neither that a solution exists for all proper times nor that the background spacetime is geodesically complete.

## Facts & Assumptions

**Given:** The smooth coordinate-state domain and vector field in the Statement, the unique maximal shell-force solution, and the compact-tail hypothesis at a finite endpoint.

[L1] For a smooth force field orthogonal to the future timelike velocity on an open chart-state domain, each normalized future-timelike initial datum has a unique local solution; its norm and future direction are preserved, and the solution has a unique maximal open interval ([[lem-rpm-shell-tangent-force-ivp]]). The current in-run carrier is a draft and this lemma uses exactly that inspected interface conditionally.

[L2] For a differentiable vector curve with integrable derivative, its increment is the integral of its derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L3] The norm of a vector-valued integral is at most the integral of its norm on a forward interval ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L4] The coordinate solution is $C^1$ and satisfies $z'=G\circ z$; hence $G\circ z$ is a continuous vector function, its components are continuous and integrable on each compact parameter interval, and the vector-valued integral is defined componentwise ([[thm-componentwise-limits-and-continuity]], [[thm-continuous-implies-integrable]], [[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** use bounded speed on the compact tail to obtain an endpoint state and apply local existence there.

1.1 Since $G$ is continuous and $K$ is compact, $M:=\max_{w\in K}\|G(w)\|_2$ is finite. By [L4], $G\circ z$ is vector-integrable on every compact subinterval. For $b_0\le s<t<b$, [L2] and [L3] give $\|z(t)-z(s)\|_2=\|\int_s^t G(z(r))\,dr\|_2\le\int_s^t\|G(z(r))\|_2\,dr\le M(t-s)$. Thus $z(t)$ is Cauchy as $t\uparrow b$ and has a limit $z_b\in\mathbb R^8$; because $K$ is compact and closed and the tail lies in $K$, $z_b\in K\subset\mathcal D$. [given, L2, L3, L4, algebra]

2.1 By [L1], the same smooth shell-force system has a local solution $\widetilde z$ through $z(b)=z_b$ at parameter $b$. The old solution extends continuously to $b$ by step 1.1. Taking the limit in its integral equation shows that the extension satisfies $\dot z=G(z)$ up to $b$ with left derivative $G(z_b)$; $\widetilde z$ has the same value and derivative at $b$. Gluing the old curve on $[b_0,b]$ to $\widetilde z$ just after $b$ therefore gives a solution extending beyond $b$, and local uniqueness in [L1] makes this extension agree with the original on overlaps. This contradicts maximality. Applying the same argument to the reversed parameter proves the left-endpoint case. [step 1.1, L1, algebra] ∎

## Remarks

The conclusion is local to the chosen chart-state domain. A finite endpoint can still arise by leaving that open domain or every compact subset of it; no global-lifetime claim follows.
