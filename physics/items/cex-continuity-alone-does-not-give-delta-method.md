---
id: cex-continuity-alone-does-not-give-delta-method
kind: counterexample
title: "Continuity alone does not give a delta-method limit"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [thm-first-and-second-order-delta-method-for-random-vectors]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement refuted

Continuity of $g$ at $\theta$ alone suffices for a first-order delta-method conclusion: whenever $r_n(T_n-\theta)\Rightarrow Z$, there is a linear map $A$ for which $r_n\{g(T_n)-g(\theta)\}\Rightarrow AZ$.

## Facts & Assumptions

**Given:** The stated finite two-point law, sequence, and absolute-value function.

[A1] $\Omega=\{-1,1\}$ has full sigma-field and assigns mass $1/2$ to each point; $Z(\omega)=\omega$.

[F1] [[thm-first-and-second-order-delta-method-for-random-vectors]]: a linear first-order expansion with remainder $o(\|h\|)$ at the target is sufficient for the first-order delta conclusion under the theorem's other hypotheses.

## Counterexample

Let $\Omega=\{-1,1\}$ have equal atom probabilities, let $Z(\omega)=\omega$, put $T_n=Z/\sqrt n$ for $n\ge1$, and take $g(t)=|t|$ at $\theta=0$. This $g$ is continuous but not differentiable at $0$.

**Given:** The false statement and the counterexample above.

1.1 By [A1], we have $\sqrt n(T_n-0)=Z$ and $\sqrt n\{|T_n|-|0|\}=|Z|=1$ for every $n$. Thus the transformed sequence has the constant limit $1$. [A1, given, algebra]

2.1 By [A1], $Z$ takes both signs. For any linear map $A:\mathbb R\to\mathbb R$, $AZ=aZ$ for some $a\in\mathbb R$; if $a=0$ its law is concentrated at $0$, and if $a\ne0$ its law has the two distinct values $\pm a$. Neither law is the constant $1$. Also the right and left difference quotients of $g$ at zero are $1$ and $-1$, so no derivative exists. Therefore the proposed conclusion fails, consistently with the differentiability hypothesis in [F1]. [A1, F1, step 1.1, given, algebra] ∎
