---
id: thm-symmetry-of-information-up-to-logarithmic-terms
kind: theorem
title: "Symmetry of information up to logarithmic terms"
status: published
origin: session
deps: [def-conditional-kolmogorov-complexity, thm-invariance-theorem-for-plain-complexity, lem-basic-conditional-complexity-inequalities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, Theorem 11"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement
For finite strings $x,y$, $C(x,y)=C(x\mid y)+C(y)+O(\log(C(x)+2)+\log(C(y)+2))$; consequently this expression is symmetric in $x,y$ up to the same logarithmic order.
## Facts & Assumptions

**Given:** finite strings $x,y$, fixed optimal plain and conditional machines, and the fixed effective pairing used to define $C(x,y)$.

## Proof

1.1 The concatenation construction in [[lem-basic-conditional-complexity-inequalities]], with $x$ and $y$ exchanged, gives $$C(x,y)\le C(y)+C(x\mid y) +O(\log(C(x)+2)+\log(C(y)+2)).$$ [given]

1.2 Put $a=C(x,y)$ and enumerate the finite set $A=\{(u,v):C(u,v)\le a\}$ by dovetailing all programs of length at most $a$; it has fewer than $2^{a+1}$ elements. Let $A_y=\{u:(u,y)\in A\}$ and $b=\lfloor\log_2|A_y|\rfloor$. Given $y,a,b$, the ordinal of $x$ in the enumeration of $A_y$ is a conditional description, so $$C(x\mid y)\le b+O(\log(a+2)).$$ The set of $v$ whose fibre has at least $2^b$ elements is computably enumerable from $a,b$ and has fewer than $2^{a+1-b}$ members. The ordinal of $y$ in that enumeration gives $$C(y)\le a-b+O(\log(a+2)).$$ Both decoder bounds transfer to the fixed machines by conditional optimality and [[thm-invariance-theorem-for-plain-complexity]]. Adding them yields $C(x\mid y)+C(y)\le C(x,y)+O(\log(C(x,y)+2))$. [given, construct, algebra]

2.1 The elementary upper bounds on pair complexity make $\log(C(x,y)+2)$ no larger than the displayed logarithmic order. Combining steps 1.1 and 1.2 proves the equality. Applying it after swapping $x,y$ proves the stated symmetry. [step 1.1, step 1.2, algebra] ∎
