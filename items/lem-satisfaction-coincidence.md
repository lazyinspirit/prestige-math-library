---
id: lem-satisfaction-coincidence
kind: lemma
title: "Coincidence for term values and satisfaction"
status: draft
origin: pipeline
deps: ["thm-set-structure-satisfaction-recursion", "def-free-variables-and-syntactic-substitution"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1C.9, p.13."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

Assignments agreeing on $\operatorname{FV}(e)$ give equal denotations when $e$ is a term and the same truth value when $e$ is a formula. Also, passage to a reduct preserves denotations and satisfaction for expressions in the smaller signature. In particular sentence truth is independent of assignment; the truth of a formula can be specified by any tuple assigning all its free variables.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For every set signature $L$ and $L$-structure $\mathcal M$ there is a unique set $\operatorname{Sat}_{\mathcal M}\subseteq\operatorname{Form}_L\times M^\omega$. Writing $\mathcal M,s\models\phi$ for membership, its clauses are $$\mathcal M,s\models u=v\iff\llbracket u\rrbracket_s=\llbracket v\rrbracket_s,$$ $$\mathcal M,s\models R(t_1,\ldots,t_n)\iff(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s)\in R^{\mathcal M},$$ $$\mathcal M,s\models\neg\phi\iff\text{not }\mathcal M,s\models\phi,$$ $$\mathcal M,s\models\phi\land\psi\iff(\mathcal M,s\models\phi\text{ and }\mathcal M,s\models\psi),$$ $$\mathcal M,s\models\exists x\phi\iff\exists b\in M\ (\mathcal M,s[x:=b]\models\phi).$$ The set is uniformly first-order definable from $L$ and the structure data. ([[thm-set-structure-satisfaction-recursion]])

[F2] An occurrence is a token position in the parsed finite word. A variable occurrence is free when it is in a term field and no ancestor quantifier binds that variable. The variable field of a quantifier is a binder, not a free occurrence. Write $\operatorname{FV}(e)$ for the finite set of variables with free occurrences in $e$, and $\operatorname{Var}(e)$ for all variables appearing anywhere. A sentence is a formula with empty $\operatorname{FV}$. The recursive rules are $\operatorname{FV}(v)=\{v\}$, $\operatorname{FV}(c)=\varnothing$, union over the arguments for function and atomic relation/equality expressions, unchanged under negation, union for conjunction, and $\operatorname{FV}(\exists y\psi)=\operatorname{FV}(\psi)\setminus\{y\}$. Structural recursion justifies these set-valued definitions, with targets $\mathcal P(\omega)$ after identifying variables with their indices. Raw substitution $e[t/x]$ replaces just the free occurrences of variable $x$ by term $t$. On terms it replaces $x$ by $t$, keeps other variables and constants, and acts on each argument. It commutes with atoms and Boolean constructors. At $\exists y\psi$ it leaves the whole expression unchanged if $y=x$; otherwise it gives $\exists y(\psi[t/x])$. The term $t$ is **free for $x$ in $e$** if, at every replaced occurrence, the path to the root crosses no binder for a member of $\operatorname{FV}(t)$. Thus at $\exists y\psi$ with $y\ne x$ and $x\in\operatorname{FV}(\psi)$ it requires both $y\notin\operatorname{FV}(t)$ and that $t$ be free for $x$ in $\psi$. If no free $x$ occurs, the condition is vacuous. Simultaneous substitution replaces the original free occurrences once; it does not perform substitutions inside inserted terms. It need not equal sequential substitution. Conventions and prerequisites: thm-structural-recursion-on-set-coded-syntax. ([[def-free-variables-and-syntactic-substitution]])

## Proof

1.1 For terms, agreement at the variables gives the same leaf values, constants are fixed, and equal argument values give equal function values. This proves the term assertion by constructor induction and the free-variable union rule. Reducts have exactly the same relevant leaf interpretations and function operations. [F1, F2]

2.1 For equality and relation atoms use step 1.1; negation and conjunction preserve equality of truth values by their clauses. At $\exists x\psi$, if $s,s'$ agree on $\operatorname{FV}(\psi)\setminus\{x\}$, then for each $b\in M$ their updates at $x$ agree on $\operatorname{FV}(\psi)$. The induction hypothesis identifies truth for each witness in both directions. [F1, F2, step 1.1]

3.1 Reducts have the same carrier, update assignments and witness range, so the identical atom, Boolean and existential argument proves reduct invariance. For a sentence the agreement condition is empty. A finite free-variable assignment extends to all variables by one fixed element of the nonempty carrier, and any two extensions agree on the free variables. [F1, step 2.1] ∎

