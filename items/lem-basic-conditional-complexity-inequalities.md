---
id: lem-basic-conditional-complexity-inequalities
kind: lemma
title: "Basic conditional-complexity inequalities"
status: draft
origin: session
deps: [def-conditional-kolmogorov-complexity, def-description-machine-and-plain-kolmogorov-complexity, thm-invariance-theorem-for-plain-complexity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §13"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement
For finite strings $x,y$, $C(x\mid y)\le C(x)+O(1)$ and $C(x,y)\le C(x)+C(y\mid x)+O(\log(C(x)+2)+\log(C(y\mid x)+2))$.
## Facts & Assumptions

**Given:** a fixed optimal plain machine $U$, the fixed optimal conditional machine $V$, a fixed effective encoding $\langle x,y\rangle$ of pairs, and shortest relevant descriptions. Write $C(x,y):=C_U(\langle x,y\rangle)$.

## Proof

1.1 The conditional machine $D(p,y)=U(p)$ ignores its condition. Conditional optimality therefore gives $C(x\mid y)\le C(x)+O(1)$. [given, construct]

2.1 Let $p$ be a shortest $U$-description of $x$ and $q$ a shortest $V$-description of $y$ conditional on $x$. Self-delimit $|p|$ and $|q|$ and concatenate the two programs. A fixed plain description machine recovers $x=U(p)$, then $y=V(q,x)$, and outputs $\langle x,y\rangle$. Its description length is $$|p|+|q|+O(\log(|p|+2)+\log(|q|+2)).$$ Optimality of $U$, supplied by [[thm-invariance-theorem-for-plain-complexity]], transfers this bound to $C(x,y)$ and proves the second inequality. [given, construct] ∎
