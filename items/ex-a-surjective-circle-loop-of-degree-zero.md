---
id: ex-a-surjective-circle-loop-of-degree-zero
kind: example
title: "A surjective circle loop can have degree zero and be nullhomotopic"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The out-and-back lift must be continuous, surjective after projection, nonconstant, and have zero terminal displacement."
  counterexample_search: "Checked the midpoint join, both lift endpoints, the canonical representative used for surjectivity, and the distinct values at zero and one quarter."
deps: [def-circle-as-real-line-mod-integers, def-degree-of-a-circle-loop, cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero, lem-integer-part, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Define $u:I\to\mathbb R$ by

$$u(t)=\begin{cases}2t,&0\le t\le1/2,\\2-2t,&1/2\le t\le1,\end{cases}$$

and put $\alpha=p\circ u$. The loop $\alpha$ is surjective and nonconstant,
but it has degree zero and is nullhomotopic.

## Facts & Assumptions

**Given:** The displayed out-and-back function $u$ and its projection $\alpha=p\circ u$.

[L1] The continuous quotient projection satisfies $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$, and $p^{-1}([0])=\mathbb Z$ ([[def-circle-as-real-line-mod-integers]]).

[L2] Degree is the terminal value of the unique lift beginning at zero ([[def-degree-of-a-circle-loop]]).

[L3] A based circle loop is nullhomotopic exactly when its degree is zero ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]).

[L4] Functions continuous on each member of a finite closed cover, and agreeing where the pieces meet, paste to a continuous function ([[lem-continuity-is-local-and-pastes]]).

[L5] Constant functions, the identity, finite sums, and scalar multiples are continuous on real intervals ([[thm-algebra-of-continuous-functions]]).

[L6] Every real $x$ has a unique integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

[L7] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

## Verification

**Proof technique:** direct.

1.1 At $t=1/2$ both formulas give $1$. Each piece is continuous by [L5], so [L4] makes $u$ continuous. Its values at the boundary are $u(0)=0$, $u(1/2)=1$, and $u(1)=0$. [L4, L5, algebra]

2.1 By [L1] and [L7], $\alpha=p\circ u$ is a continuous based loop at $[0]$. The function $u$ is a lift of $\alpha$ beginning at zero, so [L2] gives $\deg(\alpha)=u(1)=0$. [step 1.1, L1, L2, L7]

3.1 Let $[x]\in\mathbb R/\mathbb Z$. By [L6], $r=x-\lfloor x\rfloor\in[0,1)$ and $p(r)=p(x)$. For $t=r/2\in[0,1/2)$, the first formula gives $u(t)=r$, so $\alpha(t)=[x]$; hence $\alpha$ is surjective. It is nonconstant because $\alpha(0)=[0]$ while $\alpha(1/4)=[1/2]\ne[0]$, the latter inequality following from $1/2\notin\mathbb Z$ in [L1]. [step 1.1, step 2.1, L1, L6, algebra]

4.1 Step 2.1 gives degree zero, so the reverse direction of [L3] makes $\alpha$ nullhomotopic. Step 3.1 shows that nullhomotopy here neither forces constancy nor prevents surjectivity. [step 2.1, step 3.1, L3] ∎
