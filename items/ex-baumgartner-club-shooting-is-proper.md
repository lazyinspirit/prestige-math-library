---
id: ex-baumgartner-club-shooting-is-proper
kind: example
title: "Baumgartner's finite-condition generic club forcing is proper"
status: draft
origin: pipeline
deps: [def-countable-model-generic-master-condition-and-proper-poset, lem-proper-master-condition-characterizations, def-club-filter-and-nonstationary-ideal, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorem 8.13, printed pp.40-41"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Let $\mathbb B$ consist of the finite partial functions
$p:\omega_1\rightharpoonup\omega_1$ which are contained in some normal
function $h:\omega_1\to\omega_1$, ordered by reverse inclusion. Then
$\mathbb B$ is proper. If $G\subseteq\mathbb B$ is generic, then
$F=\bigcup G$ is a normal function and its range is a new club subset of
$\omega_1$.

## Facts & Assumptions

**Given:** ZFC and the forcing $\mathbb B$ in the Statement. A normal function is strictly increasing and continuous at nonzero limit ordinals.

[F1] An $(M,P)$-master condition is one below the starting condition for which every dense set in $M$ has its $M$-part predense below it. [[def-countable-model-generic-master-condition-and-proper-poset]]

[F2] Verifying the dense-set predensity condition for every relevant countable model proves properness. [[lem-proper-master-condition-characterizations]]

[F3] A club subset of $\omega_1$ is closed and unbounded. [[def-club-filter-and-nonstationary-ideal]]

[A1] AC supplies the suitable elementary models, their enumerations, and the set-sized genericity choices used in the semantic example. [[def-axiom-of-choice]]

## Verification

1.1 Let $M$ be a relevant countable elementary submodel, let $p\in\mathbb B\cap M$, and put $\delta=M\cap\omega_1$. Then $M\cap\omega_1$ is an initial segment with no largest member, so $\delta$ is a countable limit ordinal. By elementarity choose in $M$ a normal $h:\omega_1\to\omega_1$ extending $p$. For every $\alpha<\delta$, both $\alpha$ and $h(\alpha)$ belong to $M\cap\omega_1$, while $h(\alpha)\geq\alpha$; hence $\sup h``\delta=\delta$ and continuity gives $h(\delta)=\delta$. Thus $$q=p\cup\{(\delta,\delta)\}$$ belongs to $\mathbb B$ and satisfies $q\leq p$. [F1, A1, Given]

1.2 For each $\alpha<\omega_1$, the set $E_\alpha=\{p:\alpha\in\operatorname{dom}(p)\}$ is dense: extend a witness normal function for $p$ and add its value at $\alpha$. Directedness of $G$ makes $F=\bigcup G$ a function, and meeting all $E_\alpha$ makes it total. Given $\alpha<\beta$, take two filter conditions specifying the two values and a common stronger condition; its normal extension shows $F(\alpha)<F(\beta)$. [A1, Given, construct]

2.1 Fix $r\leq q$. Any normal extension of $r$ contains $(\delta,\delta)$, so strict increase gives $$\alpha<\delta\quad\Longleftrightarrow\quad r(\alpha)<\delta$$ for every $\alpha\in\operatorname{dom}(r)$. Consequently $s=r\cap M$ is exactly the part of $r$ whose coordinates and values lie below $\delta$. It is a finite condition, belongs to $M$, and is extended by $r$. If $D\in M$ is dense, elementarity supplies $r'\in D\cap M$ with $r'\leq s$. Every coordinate and value of the finite $r'$ lies below $\delta$. [F1, A1, step 1.1]

2.2 Let $\delta<\omega_1$ be a nonzero limit and put $\gamma=\sup F``\delta\leq F(\delta)=\beta$. Suppose $\gamma<\beta$, and choose $p\in G$ containing $(\delta,\beta)$. Below $p$, conditions which specify some $(\alpha,\rho)$ with $\alpha<\delta$ and $\gamma<\rho<\beta$ are dense. Indeed, from any $s\leq p$, take a normal extension $u$; continuity at $\delta$ gives an $\alpha<\delta$, beyond the finite lower domain of $s$, with $\gamma<u(\alpha)<\beta$, and add $(\alpha,u(\alpha))$. A generic containing $p$ meets this dense-below-$p$ set (equivalently, adjoin the conditions incompatible with $p$ to make it globally dense), contradicting the definition of $\gamma$. Hence $F(\delta)=\sup F``\delta$, and $F$ is normal. [A1, step 1.2]

3.1 The conditions $r$ and $r'$ are compatible. To verify the point suppressed by the usual proof, choose a normal $u$ extending $r$. By elementarity choose a normal $v\in M$ extending $r'$. Both satisfy $u(\delta)=v(\delta)=\delta$: for $u$ this follows from $(\delta,\delta)\in r$, and for $v$ by the calculation in step 1.1. Splice $v$ below and at $\delta$ with $u$ above $\delta$. The result is normal: both pieces agree at $\delta$, their values on the lower piece are below $\delta$, and replacing the lower piece by another sequence cofinal in $\delta$ does not change continuity at any later limit. It extends $r\cup r'$, so that finite union is a common condition. Therefore $D\cap M$ is predense below $q$. By F1 and F2, $q$ is an $(M,\mathbb B)$-master below $p$, and $\mathbb B$ is proper. [F1, F2, A1, step 1.1, step 2.1]

3.2 The range $C=F``\omega_1$ is unbounded because strict increase implies $F(\alpha)\geq\alpha$. It is closed: if $\eta<\omega_1$ is a limit point of $C$, then $\xi=\sup\{\alpha:F(\alpha)<\eta\}$ is a nonzero limit below $\omega_1$, and continuity and cofinality of the selected values give $F(\xi)=\eta$. Thus $C$ is club by F3. [F3, step 1.2, step 2.2]

4.1 Finally fix any ground-model normal function $a:\omega_1\to\omega_1$. The set $$E_a=\{p\in\mathbb B:(\exists\alpha\in\operatorname{dom}(p))\ p(\alpha)\ne a(\alpha)\}$$ is dense. Given $p$, choose a normal extension $u$, a successor $\alpha$ above its finite domain, and two successive values above $u(\alpha)$; at least one differs from $a(\alpha)$, and replacing the value at that new successor by the chosen larger value and continuing normally witnesses an extension in $E_a$. Genericity makes $F\ne a$ for every ground normal $a$. If $C$ were in the ground model, its increasing enumeration would be a ground normal function and, as the unique increasing bijection from $\omega_1$ onto $C$, would equal $F$. This contradiction proves that the club $C$ is new. The forcing is nonempty (the empty map is greatest), and all finite, singleton, zero-coordinate, and limit-coordinate cases used above are included. [A1, step 1.2, step 2.2, step 3.2] ∎
