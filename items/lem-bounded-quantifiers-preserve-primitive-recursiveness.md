---
id: lem-bounded-quantifiers-preserve-primitive-recursiveness
kind: lemma
title: "Bounded quantifiers preserve primitive recursiveness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-arithmetic-formula]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local proof and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Douglas Cenzer and Jeffrey Remmel, Effectively Closed Sets, Theorem II.6.6"
      url: "https://people.clas.ufl.edu/cenzer/files/book4.pdf"
---

## Statement

If $R(\vec x,u)$ is primitive recursive and $t(\vec x)$ is primitive
recursive, then each relation
$$ \exists u<t(\vec x)\ R(\vec x,u),\qquad \forall u<t(\vec x)\ R(\vec x,u) $$
is primitive recursive.

## Facts & Assumptions

**Given:** primitive-recursive $R$ and $t$.

[F1] Primitive recursion, composition, initial functions, and the characteristic-function convention are supplied by [[def-bounded-arithmetic-formula]].

## Proof

**Proof technique:** direct.

1.1 Addition and multiplication are primitive recursive: use $a+0=a$, $a+(m+1)=S(a+m)$, $a\cdot0=0$, and $a\cdot(m+1)=a\cdot m+a$. Argument permutations are compositions with projections. Constants zero and one are initial functions or their compositions with successor. The function $\operatorname{sg}$ defined by $\operatorname{sg}(0)=0$, $\operatorname{sg}(m+1)=1$ is primitive recursive. [F1, construct]

2.1 Let $r(\vec x,u)$ be the $0$-$1$ characteristic function of $R$. Define $B(0,\vec x)=0$, $B(m+1,\vec x)=B(m,\vec x)+r(\vec x,m)$ and $C(0,\vec x)=1$, $C(m+1,\vec x)=C(m,\vec x)r(\vec x,m)$. These are primitive-recursion instances with parameters. Consequently $\operatorname{sg}(B(t(\vec x),\vec x))$ and $C(t(\vec x),\vec x)$ are primitive recursive by composition. [given, F1, step 1.1, construct]

3.1 The first expression is one exactly when at least one of the first $t(\vec x)$ characteristic values is one; the second is one exactly when all are one. At bound zero their values are respectively zero and one. Thus they are the characteristic functions of the existential and universal relations asserted. [step 2.1, algebra] ∎
