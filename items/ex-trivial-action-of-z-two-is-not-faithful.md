---
id: ex-trivial-action-of-z-two-is-not-faithful
kind: example
title: 'The trivial action of $\mathbb Z/2$ on a singleton is transitive but not faithful'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-action, thm-division-algorithm-in-z, prop-integers-modulo-n-as-a-quotient-group, thm-integers-modulo-n-basic-algebra, def-addition-and-multiplication-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Brosnan, Group actions"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0034.html"
pipeline_run: null
---

## Example

Let $\mathbb Z/2$ act on the singleton $X=\{*\}$ by $a\cdot *=*$ for both
residue classes $a$. This action is transitive, but it is not faithful.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z/2$ and the singleton set $X=\{*\}$.

[L1] Division with remainder is available in the integers, and congruence
classes modulo $2$ are the quotient group with its stated addition and identity
class $0$ ([[thm-division-algorithm-in-z]],
[[prop-integers-modulo-n-as-a-quotient-group]],
[[thm-integers-modulo-n-basic-algebra]],
[[def-addition-and-multiplication-modulo-n]]).

[L2] An action satisfies $0\cdot x=x$ and $(a+b)\cdot x=a\cdot(b\cdot x)$;
it is transitive when one group element carries every point to every other
point, and faithful only when an element fixing every point is the identity
([[def-group-action]]).

## Verification

**Proof technique:** direct.

1.1 Dividing any integer by $2$ shows that the two residue classes are $0$ and $1$; they are distinct because $1-0$ is not a multiple of $2$, and $1+1=0$. [L1, algebra]

1.2 The rule $a\cdot *=*$ satisfies $0\cdot *=*$ and $(a+b)\cdot *=*=a\cdot(b\cdot *)$, so it is an action. [L1, L2, given]

1.3 There is only one point of $X$, so the action is transitive. [L2, given]

2.1 The nonidentity class $1$ fixes $*$, and therefore fixes every point of $X$. Hence the action is not faithful. [step 1.1, L2, given] ∎
