---
id: thm-pure-braid-groups-are-torsion-free
kind: theorem
title: "Pure braid groups are torsion-free"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-pure-braid-forgetting-a-strand-short-exact-sequence, thm-free-groups-are-torsion-free, def-pure-braid-group-from-ordered-configurations, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (equation (2.2), the free-kernel pure braid tower, and Corollary 2.3)"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Assume the Axiom of Choice. For every $n\ge0$ the pure braid group
$PB_n=\pi_1(F_n(D^2),q)$ of
[[def-pure-braid-group-from-ordered-configurations]] is torsion-free: if
$g\in PB_n$ and $m\ge1$ satisfy $g^m=e$, then $g=e$. Equivalently, every
nonidentity element of $PB_n$ has infinite order.

## Facts & Assumptions

**Given:** the Axiom of Choice and an integer $n\ge0$; the pure braid groups $PB_n$ of the closed-disc convention, with the same base configuration $q$ fixed throughout.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] $PB_0$ and $PB_1$ are the one-element groups, and the inclusion $F_m(\operatorname{int}D^2)\to F_m(D^2)$ induces an isomorphism $\pi_1(F_m(\operatorname{int}D^2),q)\to PB_m$ at every configuration of interior points ([[def-pure-braid-group-from-ordered-configurations]]).

[F2] Assume AC and let $n\ge2$. The last-coordinate forgetful map $\varphi:PB_n\to PB_{n-1}$ fits into a short exact sequence $1\to F_{n-1}\xrightarrow{\kappa}PB_n\xrightarrow{\varphi}PB_{n-1}\to1$ with $\kappa$ injective, $\varphi$ surjective and $\operatorname{im}\kappa=\ker\varphi$, where $F_{n-1}=\pi_1(\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\},q_n)$ is a free group ([[thm-pure-braid-forgetting-a-strand-short-exact-sequence]]).

[F3] Every free group is torsion-free: if $G$ is free, $x\in G$ and $m\ge1$ satisfy $x^m=e$, then $x=e$ ([[thm-free-groups-are-torsion-free]]).

[F4] In ZF, AC implies DC, so the choice hypothesis of [F2] is available under [A1] ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** induction on $n$.

1.1 **The base cases.** By [F1] the groups $PB_0$ and $PB_1$ are one-element groups, so their only element is the identity and is not a nonidentity element of finite order; hence $PB_0$ and $PB_1$ are torsion-free. [base, F1]

1.2 **The torsion-freeness of the free fibre.** By [F3] every free group is torsion-free; in particular this applies to the group $F_{n-1}$ of the exact sequence in [F2], so that if $x\in F_{n-1}$ and $x^m$ is the identity of $F_{n-1}$ for some $m\ge1$, then $x$ is the identity. [F3]

1.3 **The exact sequence used in the successor step.** Let $n\ge2$. The Axiom of Choice [A1] holds, so by [F4] the choice hypothesis of [F2] is met and [F2] supplies the short exact sequence $1\to F_{n-1}\xrightarrow{\kappa}PB_n\xrightarrow{\varphi}PB_{n-1}\to1$ for the last-coordinate forgetful map $\varphi$: the map $\varphi$ is a surjective homomorphism, $\kappa$ is an injective homomorphism, and $\operatorname{im}\kappa=\ker\varphi$. The Axiom of Choice is used only to invoke [F2]; no further choice is made in this proof. [A1, F2, F4]

1.4 **Induction hypothesis.** Fix $n\ge2$ and assume that $PB_{n-1}$ is torsion-free: every $y\in PB_{n-1}$ with $y^m=e$ for some $m\ge1$ equals $e$. [ih]

2.1 **The successor step.** Let $g\in PB_n$ and $m\ge1$ satisfy $g^m=e$, where $e$ denotes the identity of $PB_n$. Since $\varphi$ is a homomorphism, $\varphi(g)^m=\varphi(g^m)=\varphi(e)=e$ in $PB_{n-1}$, so $\varphi(g)=e$ by the induction hypothesis of step 1.4. Hence $g\in\ker\varphi=\operatorname{im}\kappa$, and there is $x\in F_{n-1}$ with $g=\kappa(x)$. Then $\kappa(x^m)=\kappa(x)^m=g^m=e$; since $\kappa$ is injective, $x^m$ is the identity of $F_{n-1}$, so $x$ is the identity by step 1.2, and therefore $g=\kappa(x)=e$. Thus every element of $PB_n$ of finite order is the identity, that is, $PB_n$ is torsion-free. [step 1.3, step 1.4, step 1.2]

3.1 **Induction conclusion.** Step 1.1 establishes the statement for $n=0$ and $n=1$, and step 2.1 proves the successor implication for every $n\ge2$; by induction on $n$, $PB_n$ is torsion-free for every $n\ge0$. [step 1.1, step 2.1, discharge-induction]

The argument applies only to the pure braid groups: torsion-freeness of the kernel $PB_n$ and finiteness of the quotient $S_n$ of the full braid group $B_n$ are not used to make any claim about torsion in $B_n$ itself. ∎
