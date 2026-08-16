---
id: lem-simple-continued-fraction-convergents-and-cylinders
kind: lemma
title: "Continued-fraction convergents, determinant identities, and nested irrational cylinders"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-simple-continued-fraction-coding, thm-recursion, thm-rat-ordered-field, thm-nested-interval-property, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Let $a_0\in\mathbb Z$ and $a_n\in\mathbb Z$ with $a_n\ge1$ for $n\ge1$. Define the **convergent numerators and denominators** by the initial values
$$p_{-2}=0,\quad p_{-1}=1,\quad q_{-2}=1,\quad q_{-1}=0$$
together with the recurrences $p_n=a_np_{n-1}+p_{n-2}$ and $q_n=a_nq_{n-1}+q_{n-2}$ for $n\ge0$. The initial values are part of the definition: without them the two recurrences have no value at $n=0$ and $n=1$. Then $p_0=a_0$ and $q_0=1$; the $q_n$ are positive for $n\ge0$ and strictly increasing for $n\ge1$; and
$$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}\qquad(n\ge0).$$

For a finite prefix $(a_0,\dots,a_n)$ write $C(a_0,\dots,a_n)\subseteq\mathbb N^{\mathbb N}$ for the **code cylinder** of all codes extending that prefix, and write
$$J(a_0,\dots,a_n):=\text{the closed interval with endpoints }\frac{p_n}{q_n}\text{ and }\frac{p_n+p_{n-1}}{q_n+q_{n-1}}\subseteq\mathbb R.$$
The intervals $J$ are nested as the prefix is extended, and $\operatorname{diam}J(a_0,\dots,a_n)=\dfrac{1}{q_n(q_n+q_{n-1})}$, which tends to $0$.

A code cylinder and a real interval are different objects and the two are not identified here. Both endpoints of $J(a_0,\dots,a_n)$ are rational, being ratios of integers. Whether an infinite code's value can equal such an endpoint is not settled on this page; it is settled in [[thm-simple-continued-fractions-parametrise-the-irrationals]], which proves every such value irrational.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Define a bijection $z:\mathbb N\to\mathbb Z$ by $z(2k)=k$ and $z(2k+1)=-(k+1)$; the division algorithm makes these two cases exhaustive (thm-division-algorithm-in-z). For $x\in\mathbb N^{\mathbb N}$ put $a_0=z(x_0)$ and $a_n=x_n+1$ for $n\ge1$. Its finite simple continued fractions are $[a_0;\ldots,a_n]$, evaluated in $\mathbb Q$ (def-rationals, def-rat-operations). A finite prefix determines the cylinder of all codes extending it. Infinite continued-fraction values are established, rather than assumed, in thm-simple-continued-fractions-parametrise-the-irrationals. ([[def-simple-continued-fraction-coding]]).

[F2] Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$. ([[thm-recursion]]).

[F3] The relation of def-rat-order is well defined and makes the field $\mathbb{Q}$ (thm-rat-field) a totally ordered field: the order is total, $x \le y$ implies $x + z \le y + z$, and $0 < x$, $0 < y$ imply $0 < xy$. ([[thm-rat-ordered-field]]).

[F4] For each $k \in \mathbb{N}$ let $I_k = [a_k, b_k]$ be a closed bounded interval with $a_k \le b_k$ (def-interval), and suppose the family is **nested**: $$I_{k+1} \subseteq I_k \qquad (k \in \mathbb{N}).$$ Write $\ell_k = b_k - a_k \ge 0$ for the length of $I_k$. Then: 1. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is **nonempty**. More precisely, with $a = \sup\{a_k : k \in \mathbb{N}\}$ and $b = \inf\{b_k : k \in \mathbb{N}\}$, both of which exist, one has $a \le b$ and $$\bigcap_{k \in \mathbb{N}} I_k = [a, b].$$ 2. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is a **single point** if and only if $\ell_k \to 0$ (def-real-limit). Every hypothesis is load bearing. Dropping closedness makes the intersection empty; dropping boundedness does the same; and dropping nonemptiness of the individual intervals is vacuously fatal. ([[thm-nested-interval-property]]).

[F5] The map $q \mapsto \hat q$ (def-real-numbers) is an embedding of ordered fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with $|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two reals lies a rational. ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** direct.

1.1 The recursion theorem [F2], applied on pairs, makes $(p_n,q_n)_{n\ge-2}$ well defined from the four initial values and the two recurrences; $p_0=a_0\cdot1+0=a_0$ and $q_0=a_0\cdot0+1=1$ follow at once. The determinant identity holds at $n=0$, where $p_0q_{-1}-p_{-1}q_0=a_0\cdot0-1\cdot1=-1=(-1)^{-1}$, and passes from $n$ to $n+1$ because $p_{n+1}q_n-p_nq_{n+1}=(a_{n+1}p_n+p_{n-1})q_n-p_n(a_{n+1}q_n+q_{n-1})=-(p_nq_{n-1}-p_{n-1}q_n)$; induction in the ordered field [F3] gives it for every $n\ge0$. [given, F1, F3, F5, F2]

2.1 After the arbitrary integer term $a_0$ all partial quotients satisfy $a_n\ge1$, so from $q_0=1$ and $q_1=a_1\ge1$ the recurrence gives $q_{n+1}=a_{n+1}q_n+q_{n-1}>q_n$ for $n\ge1$: the denominators are positive and strictly increasing, hence unbounded. Subtracting the two endpoint fractions and using the determinant identity of step 1.1 gives $\frac{p_n}{q_n}-\frac{p_n+p_{n-1}}{q_n+q_{n-1}}=\frac{p_nq_{n-1}-p_{n-1}q_n}{q_n(q_n+q_{n-1})}=\frac{(-1)^{n-1}}{q_n(q_n+q_{n-1})}$, so $\operatorname{diam}J(a_0,\dots,a_n)=1/(q_n(q_n+q_{n-1}))\to0$. Extending a prefix replaces $J$ by one of the subintervals it determines, so the intervals are nested and [F4] applies to them. [step 1.1, F4, F1, F5]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
