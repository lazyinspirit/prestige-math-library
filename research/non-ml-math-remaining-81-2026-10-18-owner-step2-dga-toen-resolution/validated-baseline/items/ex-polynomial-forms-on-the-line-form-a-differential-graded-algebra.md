---
id: ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra
kind: example
title: "Polynomial differential forms on the line"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-differential-graded-algebra]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $A=\mathbb Z[t]\oplus\mathbb Z[t]\,\epsilon$, with $|t|=0$, $|\epsilon|=1$,
and multiplication determined by the polynomial multiplication, $t\epsilon=
\epsilon t$, and $\epsilon^2=0$. Thus $A^0=\mathbb Z[t]$, $A^1=\mathbb Z[t]\epsilon$,
and $A^n=0$ for $n\notin\{0,1\}$. The algebra is the associative unital quotient
$\mathbb Z[t,\epsilon]/(\epsilon^2)$, with unit $1$ in degree zero. Define the
$\mathbb Z$-linear map $d:A\to A$ by
$$d(f(t)+g(t)\epsilon)=f'(t)\epsilon,$$
where the formal derivative of $f(t)=\sum_{i=0}^n a_i t^i$ is
$f'(t)=\sum_{i=1}^n i a_i t^{i-1}$.

## Facts & Assumptions

**Given:** The graded algebra and map above. Verify that they form a cohomological DGA.

[F1] [[def-differential-graded-algebra]]: For homogeneous $a\in A^p$ and $b\in A^q$, require the signed Leibniz rule
$$d^{p+q}(ab)=d^p(a)b+(-1)^p a d^q(b).$$

[F2] [[def-differential-graded-algebra]]: The defining cochain differential satisfies $d^{n+1}d^n=0$.

## Verification

1.1 The direct-sum expression $f+g\epsilon$ is unique, so the formula defines a $\mathbb Z$-linear map. It sends $A^0$ to $A^1$ and $A^1$ to $A^2=0$, hence has degree $+1$. [given, construct]

2.1 For every $f+g\epsilon$, $d^2(f+g\epsilon)=d(f'\epsilon)=0$, because $d$ vanishes on $A^1$; in particular $d(1)=0$. Thus [F2] holds. [F2, step 1.1, algebra]

2.2 If $a=f$ and $b=h$ have degree zero, then $d(ab)=(fh)'\epsilon=f'h\epsilon+fh'\epsilon=d(a)b+a d(b)$. If $a=f$ and $b=g\epsilon$ have degrees zero and one, both $d(ab)$ and $d(a)b+a d(b)$ vanish since each term contains $\epsilon^2$ or $d(g\epsilon)=0$. If $a=g\epsilon$ and $b=f$, both sides of $d(ab)=d(a)b-a d(b)$ vanish for the same reasons. If both have degree one, their product and both terms on the right vanish. These are all homogeneous degree possibilities in $A$, so [F1] holds. [F1, step 1.1, algebra]

3.1 The multiplication is associative, unital, degree-preserving and $\mathbb Z$-bilinear by its quotient-ring construction; steps 2.1–2.2 verify the differential axioms. Hence $A$ is a cohomological DGA. [F1, F2, step 2.1, step 2.2] ∎
