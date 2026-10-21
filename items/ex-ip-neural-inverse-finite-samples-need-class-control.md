---
id: ex-ip-neural-inverse-finite-samples-need-class-control
kind: example
title: Finite samples cannot identify every Lipschitz inverse map uniformly
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_use: No choice axiom is used; the construction uses finitely many sample points.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $N\ge1$ and let $x_1,\ldots,x_N\in[0,1]$ be arbitrary training inputs. For every deterministic learning rule that returns a prediction function $g:[0,1]\to\mathbb R$ from the observed pairs $(x_i,f(x_i))$, there are two $1$-Lipschitz functions $f_0,f_1:[0,1]\to\mathbb R$ agreeing with each other and taking the common value $0$ at every training input but satisfying
$$\|f_1-f_0\|_{\infty}\ge\frac{1}{2(N+1)}.$$
Consequently, at the midpoint of a largest sample-free interval, the returned prediction function $g$ has absolute prediction error at least $1/(4(N+1))$ for at least one of these two indistinguishable target functions.

## Example references

[[op-ip-neural-operator-sample-complexity-for-inverse-maps|A finite-sample limit that motivates explicit inverse-map and architecture classes.]]

## Facts & Assumptions

**Given:** $N\ge1$, arbitrary sample sites $x_1,\ldots,x_N\in[0,1]$, exact labels $f(x_i)$, and a deterministic learning rule depending only on these observed pairs.

[A1] A function is $1$-Lipschitz when $|f(x)-f(y)|\le|x-y|$ for all $x,y\in[0,1]$.

## Verification

1.1 Sort the distinct sample sites together with endpoints $0$ and $1$. The at most $N+1$ consecutive gaps have total length one, so one open gap $(a,b)$ has length $\ell=b-a\ge1/(N+1)$. Let $x_*=(a+b)/2$, $r=\ell/2$, $f_0(x)=0$, and $f_1(x)=\max\{0,r-|x-x_*|\}$. The tent has slopes of magnitude at most one, vanishes at every sample site, and has height $r\ge1/(2(N+1))$ at $x_*$. Thus $f_0,f_1$ are both $1$-Lipschitz and yield identical training pairs. [given, A1, construct]

2.1 Because the training pairs are identical, the deterministic rule returns the same value $g(x_*)$ for both target functions. Since $|g(x_*)-f_0(x_*)|+|g(x_*)-f_1(x_*)|\ge|f_1(x_*)-f_0(x_*)|=r$, one of the two errors is at least $r/2\ge1/(4(N+1))$. Their uniform distance is $r\ge1/(2(N+1))$, proving both claims. [given, step 1.1, algebra] ∎
