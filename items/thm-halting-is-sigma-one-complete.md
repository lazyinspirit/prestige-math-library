---
id: thm-halting-is-sigma-one-complete
kind: theorem
title: "The halting set is Sigma_1^0-complete"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-arithmetical-level-completeness, def-universal-and-acceptable-numbering, thm-sigma-one-sets-are-exactly-ce-sets]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §5.4"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For a fixed acceptable numbering, $K=\{\langle e,x\rangle:\varphi_e(x)\downarrow\}$
is $\Sigma_1^0$-complete.

## Facts & Assumptions

**Given:** an acceptable numbering and a $\Sigma_1^0$ set $A$.

[L1] Computably enumerable sets are exactly the $\Sigma_1^0$ sets
([[thm-sigma-one-sets-are-exactly-ce-sets]]).

[L2] Acceptability supplies a total computable hard-wiring function
([[def-universal-and-acceptable-numbering]]).

## Proof

**Proof technique:** direct.

1.1 The universal partial function $(e,x)\mapsto\varphi_e(x)$ is partial computable. Its halting domain $K$ is computably enumerable, and hence is $\Sigma_1^0$ by [[thm-sigma-one-sets-are-exactly-ce-sets]]. [given, L1]

1.2 Write $x\in A\iff\exists y\,R(x,y)$ with $R$ primitive recursive. There is a partial computable two-argument procedure which, on parameters $(x,z)$, searches for $y$ and halts exactly when $R(x,y)$; it ignores $z$. The hard-wiring function supplied by acceptability gives, uniformly and totally computably in $x$, an index $e_x$ for the corresponding one-argument procedure. [given, L2, construct]

2.1 Therefore $x\in A$ exactly when $\varphi_{e_x}(0)\downarrow$. After the fixed binary encodings from [[def-arithmetical-level-completeness]], the total computable map $x\mapsto\langle e_x,0\rangle$ reduces $A$ to $K$. [step 1.2, algebra] ∎
