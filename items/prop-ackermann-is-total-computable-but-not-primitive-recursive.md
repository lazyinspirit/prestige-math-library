---
id: prop-ackermann-is-total-computable-but-not-primitive-recursive
kind: proposition
title: "The Ackermann function is total computable but not primitive recursive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-primitive-recursive-function, def-partial-function-computed-by-a-machine]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Primitive Recursion"
      url: "https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf"
---

## Statement

Let $A:\mathbb N^2\to\mathbb N$ be the Ackermann-Peter function defined by
$$ A(0,n)=n+1, $$
$$ A(m+1,0)=A(m,1), $$
$$ A(m+1,n+1)=A\bigl(m,A(m+1,n)\bigr). $$
Then $A$ is a total computable function, but $A$ is not primitive recursive.

## Facts & Assumptions

**Given:** The function $A$ defined in the statement.

[L1] Primitive recursive functions are the total functions obtained from the initial functions by finitely many compositions and primitive recursions, by [[def-primitive-recursive-function]].

[L2] A machine computes a partial function when it halts with the required output on every input in the domain and diverges off the domain, by [[def-partial-function-computed-by-a-machine]].

[F1] For each fixed $m$, the unary function $A_m(n):=A(m,n)$ is strictly
increasing in $n$, and $A_{m+1}$ is obtained by iterating $A_m$ a growing
number of times. Consequently, for fixed $c$ and $r$, some sufficiently high
row $A_d$ with $d>c$ eventually dominates the shifted row
$n\mapsto A_c(n+r)$, and passing to a sufficiently higher row absorbs any
fixed finite composition or an $n$-fold iteration of lower rows.

## Proof

**Proof technique:** direct.

1.1 A deterministic machine can evaluate $A(m,n)$ by keeping a finite stack of pending calls. Start with the one stack entry $(m,n)$. If the top entry is $(0,r)$, replace it by the value $r+1$; if it is $(p+1,0)$, replace it by $(p,1)$; and if it is $(p+1,r+1)$, replace it by the two pending calls $(p+1,r)$ and then $(p,\square)$, where the second frame waits for the value returned by the first and then substitutes it into $A(p,\cdot)$. Every individual rewrite is effective on a coded stack, so by [L2] this gives a machine procedure for evaluating $A$. [L2, F1, given, construct]

1.2 For each primitive recursive $k$-ary function $f$, structural induction on its construction from [L1] gives constants $c,r$ such that $f(x_1,\dots,x_k)\le A_c(\max_i x_i+r)$ for all inputs. The initial functions satisfy such a bound. For composition, apply the induction bounds to all inner functions, take their maximum, and then apply the bound for the outer function; monotonicity and the absorption property in [F1] replace the resulting finite composition by one higher fixed row. For primitive recursion, the recursion variable bounds the number of successive applications of the step function; [F1] again absorbs those boundedly many lower-row iterations into a higher fixed row. [L1, F1, given, induction]

2.1 The defining recursion decreases the left argument whenever the right argument is reset, and otherwise decreases the right argument before the left argument is used again. Induction on $m$ and then on $n$ therefore shows that every call chain eventually reaches the base clause $A(0,r)=r+1$. Hence the machine from step 1.1 halts on every input $(m,n)$, so $A$ is total computable. [F1, step 1.1]

2.2 If $A$ itself were primitive recursive, step 1.2 would give fixed $c,r$ with $A(m,n)\le A_c(\max\{m,n\}+r)$ for all $m,n$. Setting $m=n$ and then taking $n>c$ sufficiently large gives $A(n,n)>A_c(n+r)$ by [F1], contradicting that bound. Therefore $A$ is not primitive recursive. [F1, step 1.2]

3.1 Steps 2.1 and 2.2 prove that Ackermann's function is total computable but not primitive recursive. [step 2.1, step 2.2] ∎
