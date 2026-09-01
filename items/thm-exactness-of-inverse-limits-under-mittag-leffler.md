---
id: thm-exactness-of-inverse-limits-under-mittag-leffler
kind: theorem
title: "Countable Mittag-Leffler systems preserve short exactness on inverse limits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-inverse-limits-are-left-exact, def-mittag-leffler-inverse-system]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma 22.7"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.86.4"
      url: "https://stacks.math.columbia.edu/tag/0594"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let
$$
0 \to A_n \xrightarrow{f_n} B_n \xrightarrow{g_n} C_n \to 0
$$
be a short exact sequence of inverse systems of $R$-modules indexed by
$\mathbb{N}_{\ge 1}$. If $(A_n)$ is Mittag-Leffler, then
$$
0 \to \varprojlim A_n \to \varprojlim B_n \to \varprojlim C_n \to 0
$$
is exact.

## Facts & Assumptions

**Given:** A short exact sequence of inverse systems
$0 \to A_n \xrightarrow{f_n} B_n \xrightarrow{g_n} C_n \to 0$ with $(A_n)$
Mittag-Leffler.

[L1] Inverse limits are left exact ([[thm-inverse-limits-are-left-exact]]).

[L2] The Mittag-Leffler condition means that for each fixed stage $m$, the
images of the transition maps into $A_m$ eventually stabilize
([[def-mittag-leffler-inverse-system]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the sequence of inverse limits is already exact at $\varprojlim A_n$ and at $\varprojlim B_n$. It remains to prove surjectivity of $$\varprojlim B_n \longrightarrow \varprojlim C_n.$$ [L1]

1.2 Let $c=(c_n)_{n \ge 1}\in\varprojlim C_n$. For each $n$, set $$E_n:=g_n^{-1}(c_n)\subseteq B_n.$$ Since $g_n$ is surjective, each $E_n$ is nonempty. Compatibility of the inverse system and of the family $(c_n)$ makes every transition map $B_{n+1}\to B_n$ restrict to a map $E_{n+1}\to E_n$. [given, construct]

1.3 The system $(E_n)$ is Mittag-Leffler as a system of sets. Fix $m$. By [L2] choose $c(m)\ge m$ such that $$\operatorname{im}(A_n\to A_m)=\operatorname{im}(A_{c(m)}\to A_m)\qquad(n\ge c(m)).$$ For $n\ge c(m)$ the inclusion $$\operatorname{im}(E_n\to E_m)\subseteq \operatorname{im}(E_{c(m)}\to E_m)$$ is automatic. For the reverse inclusion, take $y\in\operatorname{im}(E_{c(m)}\to E_m)$ and choose $e_c\in E_{c(m)}$ mapping to $y$. Choose any $e_n^0\in E_n$. The images of $e_c$ and $e_n^0$ in $C_{c(m)}$ are both $c_{c(m)}$, so their difference lies in $A_{c(m)}$. By the stabilization choice there is $a_n\in A_n$ whose image in $A_m$ equals the image of $e_c-e_n^0$. Then $e_n:=e_n^0+a_n$ lies in $E_n$ and maps to $y$ in $E_m$. Hence the images stabilize. [L2, choose, algebra]

2.1 For each $n$, let $$E_n':=\bigcap_{m\ge n}\operatorname{im}(E_m\to E_n).$$ Because $(E_n)$ is Mittag-Leffler and nonempty, $E_n'$ is equal to one stable image and is therefore nonempty. The restricted maps $E_{n+1}'\to E_n'$ are surjective: if $y\in E_n'$, then $y$ comes from some sufficiently high stage $E_m$ with $m\ge n+1$, and the image of that same element in $E_{n+1}$ lies in $E_{n+1}'$ and maps to $y$. [step 1.3, construct]

3.1 By the Axiom of Choice, choose $x_1\in E_1'$, and after $x_n$ has been chosen choose $x_{n+1}\in E_{n+1}'$ mapping to $x_n$; this is possible by surjectivity from step 2.1. Then $(x_n)_{n\ge 1}$ is an element of $\varprojlim E_n$, hence of $\varprojlim B_n$, and by construction it maps to $c\in\varprojlim C_n$. [step 2.1, choose]

4.1 Therefore $\varprojlim B_n\to\varprojlim C_n$ is surjective. Combined with step 1.1, this proves exactness of $$0 \to \varprojlim A_n \to \varprojlim B_n \to \varprojlim C_n \to 0.$$ [step 1.1, step 3.1] ∎
