---
id: def-free-variables-and-syntactic-substitution
kind: definition
title: "Free variables and free-for substitution"
status: draft
origin: pipeline
deps: ["thm-structural-recursion-on-set-coded-syntax"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1B.6\u20131B.9, pp.7\u20139."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Definition

An occurrence is a token position in the parsed finite word. A variable occurrence is free when it is in a term field and no ancestor quantifier binds that variable. The variable field of a quantifier is a binder, not a free occurrence. Write $\operatorname{FV}(e)$ for the finite set of variables with free occurrences in $e$, and $\operatorname{Var}(e)$ for all variables appearing anywhere. A sentence is a formula with empty $\operatorname{FV}$.

The recursive rules are $\operatorname{FV}(v)=\{v\}$, $\operatorname{FV}(c)=\varnothing$, union over the arguments for function and atomic relation/equality expressions, unchanged under negation, union for conjunction, and $\operatorname{FV}(\exists y\psi)=\operatorname{FV}(\psi)\setminus\{y\}$. Structural recursion justifies these set-valued definitions, with targets $\mathcal P(\omega)$ after identifying variables with their indices.

Raw substitution $e[t/x]$ replaces just the free occurrences of variable $x$ by term $t$. On terms it replaces $x$ by $t$, keeps other variables and constants, and acts on each argument. It commutes with atoms and Boolean constructors. At $\exists y\psi$ it leaves the whole expression unchanged if $y=x$; otherwise it gives $\exists y(\psi[t/x])$.

The term $t$ is **free for $x$ in $e$** if, at every replaced occurrence, the path to the root crosses no binder for a member of $\operatorname{FV}(t)$. Thus at $\exists y\psi$ with $y\ne x$ and $x\in\operatorname{FV}(\psi)$ it requires both $y\notin\operatorname{FV}(t)$ and that $t$ be free for $x$ in $\psi$. If no free $x$ occurs, the condition is vacuous. Simultaneous substitution replaces the original free occurrences once; it does not perform substitutions inside inserted terms. It need not equal sequential substitution.

Conventions and prerequisites: [[thm-structural-recursion-on-set-coded-syntax]].
