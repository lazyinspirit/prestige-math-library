---
id: ex-smn-parameter-theorem
kind: example
title: "Specializing a two-argument program to obtain a unary residual program"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-smn-parameter-theorem, cor-effective-program-specialization]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references: []
---

## Example

Fix an acceptable numbering, and let $e_+$ be an index for the binary program that, on coded input
$(u,v)$, returns $u+v$. Fix the first argument to be $7$.

## Facts & Assumptions

**Given:** An acceptable numbering, the binary addition index $e_+$, and the parameter value $7$.

[L1] The $s$-m-$n$ theorem supplies a total specialization map $s_1^1$, by [[thm-smn-parameter-theorem]].

## Verification

**Proof technique:** direct.

1.1 By [L1], there is a total specialization map $s_1^1$. Put $$ e_7:=s_1^1(e_+,7). $$ Then for every $v$, $$ \varphi_{e_7}(\operatorname{Inp}_1(v))\simeq\varphi_{e_+}(\operatorname{Inp}_2(7,v))=7+v. $$ [L1, given]

2.1 So $e_7$ is an index for the unary residual program $v\mapsto 7+v$. This is exactly the interpretation recorded abstractly in [[cor-effective-program-specialization]]. [step 1.1] ∎
