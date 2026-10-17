---
id: ex-uniform-step-bdf2-satisfies-dahlquist-conditions
kind: example
title: "Uniform-step BDF2 satisfies the Dahlquist conditions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-linear-multistep-order-conditions-from-taylor
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - thm-dahlquist-equivalence-for-linear-multistep-methods
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
dependency_level: 3
---

## Example

The variable-step BDF2 formula reduces on a uniform grid to the consistent, zero-stable two-step method

$$3Y_{n+1}-4Y_n+Y_{n-1}=2h f(t_{n+1},Y_{n+1}).$$

On $y'=t^2$, $y(0)=0$, with exact starting values $Y_0=0$, $Y_1=h^3/3$, the selected implicit branch is explicit and this method converges with global error $O(h^2)$ on each fixed interval.

## Facts & Assumptions

**Given:** The BDF2 procedure [[alg-variable-step-bdf2-with-selected-implicit-branch]], the order and consistency convention [[def-linear-multistep-method-consistency-order-and-root-condition]], and the constant-step theorem [[thm-dahlquist-equivalence-for-linear-multistep-methods]].

[F1] The BDF2 formula is the equation in [[alg-variable-step-bdf2-with-selected-implicit-branch]] with $r_n=1$.

[F2] [[lem-linear-multistep-order-conditions-from-taylor]] characterizes order at least two by the vanishing moments $\mu_0,\mu_1,\mu_2$.

[F3] [[thm-dahlquist-equivalence-for-linear-multistep-methods]] gives global order $p$ for a consistent root-condition method of order at least $p$, when the starting errors are $O(h^p)$ and the stated smoothness, Lipschitz, and uniform local selected-branch hypotheses hold.

## Verification

1.1 Setting $r_n=1$ in [F1] gives the displayed recurrence. Its coefficients are $(\alpha_0,\alpha_1,\alpha_2)=(1,-4,3)$ and $(\beta_0,\beta_1,\beta_2)=(0,0,2)$, so $\rho(\zeta)=3\zeta^2-4\zeta+1=(3\zeta-1)(\zeta-1)$ and $\sigma(\zeta)=2\zeta^2$. [F1, algebra]

1.2 The moments are $\mu_0=1-4+3=0$, $\mu_1=\sum j\alpha_j-\sum\beta_j=(-4+6)-2=0$, and $\mu_2=\sum j^2\alpha_j-2\sum j\beta_j=(-4+12)-8=0$. Thus [F2] gives order at least two. The roots are $1$ and $1/3$, both simple, so the root condition holds. [F2, algebra]

1.3 Fix $T>0$ and set $K=[-1,T^3/3+1]$, which contains the exact path $y(t)=t^3/3$ with distance at least $1$ from its boundary. For $f(t,Y)=t^2$, the step has the unique explicit root $Z=(4Y_n-Y_{n-1}+2h t_{n+1}^2)/3$. Supply the algorithm's oracle on these uniform-grid calls by computing this $Z$ and returning $(\texttt{unique-root},Z)$ if $Z\in B_{n+1}$, or `no-root` otherwise; the field is everywhere defined and multiple roots are impossible. Direct substitution of $y(t)=t^3/3$ gives exact unscaled defect $3y(t_{n+1})-4y(t_n)+y(t_{n-1})-2h t_{n+1}^2=-4h^3/3$. Hence, if both preceding errors are at most $1/6$, then $|Z-y(t_{n+1})|\le5/18+4h^3/9<1/2$ for sufficiently small $h$. Prescribing $B_{n+1}=\overline B(y(t_{n+1}),1/2)\subset K$ therefore makes the algorithm select the unique root in a uniform local branch around the exact trajectory. The stated starting values are exact. [given, algebra]

2.1 Apply [F3] with $p=2$ on a fixed interval: the method is consistent by step 1.2, satisfies the root condition, has order at least two, has exact starts, and satisfies the uniform local branch hypothesis by step 1.3. The exact solution is smooth and $f(t,Y)=t^2$ is state-Lipschitz with $L=0$ on $[0,T]\times K$. Therefore the global grid error is $O(h^2)$. [F2, F3, step 1.1, step 1.2, step 1.3] ∎
