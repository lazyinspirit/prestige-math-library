---
id: thm-general-cardinal-erdos-rado
kind: theorem
title: "Erdős–Rado for arbitrary infinite cardinals and finite arity"
status: draft
origin: pipeline
deps: [def-finite-beth-iteration-above-a-cardinal, lem-erdos-rado-pattern-closure-and-end-homogeneity, cor-cardinal-absorption, thm-induction-principle, def-partition-arrow-notation, thm-cantor-powerset, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.9, printed pp62–63; arbitrary infinite-cardinal generalization and zero case proved locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, for every infinite cardinal $\kappa$ and every $n<\omega$,

$$\beth_n(\kappa)^+\longrightarrow(\kappa^+)^{n+1}_\kappa.$$

Here $+$ is cardinal successor and $\beth_0(\kappa)=\kappa$. In particular the theorem includes $n=0$.

## Facts & Assumptions

**Given:** An infinite cardinal $\kappa$; assume AC.

[F1] Relative beths satisfy $\beth_0(\kappa)=\kappa$ and $\beth_{m+1}(\kappa)=2^{\beth_m(\kappa)}$. [[def-finite-beth-iteration-above-a-cardinal]]

[F2] Pattern closure for $\mu$, $1\le r\le\mu$, positive finite $d$ and domain $(2^\mu)^+$ gives distinct $x_\alpha$ ($\alpha<\mu^+$) and an outside point $a$ whose patterns on earlier nodes agree with those of each $x_\alpha$. [[lem-erdos-rado-pattern-closure-and-end-homogeneity]]

[F3] An infinite cardinal times itself equals itself. [[cor-cardinal-absorption]]

[F4] Natural-number induction proves the assertion from zero and successor cases. [[thm-induction-principle]]

[F5] The arrow means every coloring has a homogeneous subset of the target cardinality. [[def-partition-arrow-notation]]

[F6] Cantor's theorem gives $\rho<2^\rho$ for every infinite cardinal $\rho$. [[thm-cantor-powerset]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 For $n=0$, let $c:[\kappa^+]^1\to\kappa$. If every color fiber had size less than $\kappa^+$, each would have size at most $\kappa$ by the successor-cardinal definition. AC chooses an injection of each fiber into $\kappa$, giving an injection of their union into $\kappa\times\kappa$ by recording the color and its fiber index. F3 bounds the union by $\kappa$, contrary to its size $\kappa^+$. Therefore some fiber has size $\kappa^+$ and is homogeneous. By F1 this is exactly the required zero case. [F1, F3, F5, A1, given]

2.1 Assume the assertion at $m\ge0$, and let $F:[\beth_{m+1}(\kappa)^+]^{m+2}\to\kappa$. Put $\mu=\beth_m(\kappa)$. Repeatedly applying F6 to the recurrence F1 gives $\mu\ge\kappa$ and $\mu$ infinite. Thus F2 applies with $r=\kappa$, $d=m+1\ge1$ and $\lambda=(2^\mu)^+=\beth_{m+1}(\kappa)^+$. Obtain distinct nodes $x_\alpha$ for $\alpha<\mu^+$ and $a$ outside their range. [F1, F2, F6, A1, step 1.1]

3.1 Define $G:[\mu^+]^{m+1}\to\kappa$ by $G(v)=F(\{x_\beta:\beta\in v\}\cup\{a\})$. The argument has size $m+2$ because the $x_\beta$ are distinct and $a$ is outside their range, so $G$ is well-defined. The induction assertion at $m$, with $\mu=\beth_m(\kappa)$, gives $H\subseteq\mu^+$ of size $\kappa^+$ homogeneous for $G$, of some color $i<\kappa$. [F1, F5, step 2.1]

4.1 Put $Y=\{x_\alpha:\alpha\in H\}$; injectivity gives $|Y|=\kappa^+$. For any $m+2$ nodes of $Y$, order their indices as $\alpha_0<\cdots<\alpha_{m+1}$ and put $u=\{x_{\alpha_0},\ldots,x_{\alpha_m}\}$. These are $m+1$ previous nodes at stage $\alpha_{m+1}$, so F2 gives $F(u\cup\{x_{\alpha_{m+1}}\})=F(u\cup\{a\})=G(\{\alpha_0,\ldots,\alpha_m\})=i$. Hence $Y$ is homogeneous. Only the largest index was used; no ambient increase of the $x_\alpha$ was assumed. This proves the successor step; F4 and step 1.1 prove all finite $n$. [F2, F4, F5, step 1.1, step 2.1, step 3.1] ∎
