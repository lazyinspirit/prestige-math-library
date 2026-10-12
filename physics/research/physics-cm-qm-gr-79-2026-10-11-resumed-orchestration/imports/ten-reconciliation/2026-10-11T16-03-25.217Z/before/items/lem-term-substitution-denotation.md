---
id: lem-term-substitution-denotation
kind: lemma
title: "Term substitution commutes with evaluation"
status: published
origin: pipeline
deps: ["def-term-denotation-in-a-set-structure", "def-free-variables-and-syntactic-substitution"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 x1.3.1, p.48 (term case)."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

For any terms $u,t$, variable $x$, structure $\mathcal M$ and assignment $s$, put $b=\llbracket t\rrbracket_s$. Then $\llbracket u[t/x]\rrbracket_s=\llbracket u\rrbracket_{s[x:=b]}$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For an $L$-structure $\mathcal M$ and assignment $s\in M^\omega$, define $\llbracket v_i\rrbracket_s=s(i)$, $\llbracket c\rrbracket_s=c^{\mathcal M}$ and $$\llbracket f(t_1,\ldots,t_n)\rrbracket_s=f^{\mathcal M}(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s).$$ This is a simultaneous definition for all assignments: recurse on terms into the set $M^{(M^\omega)}$ of functions from assignments to $M$. Variable leaves are projections, constant leaves are constant maps, and each function operation acts pointwise. Structural recursion gives a unique evaluation. The operations are total because the interpreted functions are total. Superscripts $\mathcal M$ on brackets will distinguish structures when needed. Conventions and prerequisites: def-set-structures-and-variable-assignments, thm-structural-recursion-on-set-coded-syntax. ([[def-term-denotation-in-a-set-structure]])

[F2] An occurrence is a token position in the parsed finite word. A variable occurrence is free when it is in a term field and no ancestor quantifier binds that variable. The variable field of a quantifier is a binder, not a free occurrence. Write $\operatorname{FV}(e)$ for the finite set of variables with free occurrences in $e$, and $\operatorname{Var}(e)$ for all variables appearing anywhere. A sentence is a formula with empty $\operatorname{FV}$. The recursive rules are $\operatorname{FV}(v)=\{v\}$, $\operatorname{FV}(c)=\varnothing$, union over the arguments for function and atomic relation/equality expressions, unchanged under negation, union for conjunction, and $\operatorname{FV}(\exists y\psi)=\operatorname{FV}(\psi)\setminus\{y\}$. Structural recursion justifies these set-valued definitions, with targets $\mathcal P(\omega)$ after identifying variables with their indices. Raw substitution $e[t/x]$ replaces just the free occurrences of variable $x$ by term $t$. On terms it replaces $x$ by $t$, keeps other variables and constants, and acts on each argument. It commutes with atoms and Boolean constructors. At $\exists y\psi$ it leaves the whole expression unchanged if $y=x$; otherwise it gives $\exists y(\psi[t/x])$. The term $t$ is **free for $x$ in $e$** if, at every replaced occurrence, the path to the root crosses no binder for a member of $\operatorname{FV}(t)$. Thus at $\exists y\psi$ with $y\ne x$ and $x\in\operatorname{FV}(\psi)$ it requires both $y\notin\operatorname{FV}(t)$ and that $t$ be free for $x$ in $\psi$. If no free $x$ occurs, the condition is vacuous. Simultaneous substitution replaces the original free occurrences once; it does not perform substitutions inside inserted terms. It need not equal sequential substitution. Conventions and prerequisites: thm-structural-recursion-on-set-coded-syntax. ([[def-free-variables-and-syntactic-substitution]])

## Proof

1.1 If $u=x$, both sides equal $b$. If $u$ is another variable, the update leaves its value unchanged. If $u$ is a constant, both sides are its interpretation. These cover all leaves, including when $t$ itself contains $x$. [F1, F2]

2.1 At $u=f(u_1,\ldots,u_n)$, substitution acts on its arguments. The induction hypothesis identifies every argument value on the two sides, and applying the same total function $f^{\mathcal M}$ gives the displayed equality. Constructor induction completes the proof. [F1, F2, step 1.1] ∎
