---
id: lem-quantifier-polynomials-agree-on-booleans
kind: lemma
title: "Quantifier polynomials agree with QBF semantics on Boolean assignments"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-qbf-arithmetization-operators, def-quantified-boolean-formula-and-tqbf, def-arithmetization-of-a-boolean-formula, lem-arithmetization-agrees-on-boolean-inputs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

Let $F$ be a field, let $\varphi(x,y_1,\dots,y_m)$ be a quantifier-free Boolean formula on the variables $x,y_1,\dots,y_m$ with $m\ge0$, and let $P:=P_\varphi\in F[X,Y_1,\dots,Y_m]$ be its arithmetization. Then for every Boolean assignment $a\in\{0,1\}^m$ to $y_1,\dots,y_m$ the two operators of [[def-qbf-arithmetization-operators]] satisfy
$$(A_XP)(a)=\text{the truth value of }\forall x\,\varphi(x,a),\qquad (E_XP)(a)=\text{the truth value of }\exists x\,\varphi(x,a),$$
where Boolean truth values are embedded in $F$ as $0$ and $1$.

## Facts & Assumptions

**Given:** A field $F$, a quantifier-free Boolean formula $\varphi(x,y_1,\dots,y_m)$ with $m\ge0$, its arithmetization $P=P_\varphi$, and a Boolean assignment $a$ to $y_1,\dots,y_m$.

[A1] Arithmetization replaces $\neg$ by $1-P_\psi$, $\wedge$ by $P_\psi P_\theta$, and $\vee$ by $P_\psi+P_\theta-P_\psi P_\theta$, and the Boolean value of a formula is obtained from the usual truth tables, with false and true identified with the field elements $0$ and $1$ ([[def-arithmetization-of-a-boolean-formula]]).

[L1] For every Boolean assignment $z$ to $x,y_1,\dots,y_m$, the arithmetization $P_\varphi(z)$ equals the Boolean value of $\varphi$ at $z$, embedded as $0$ or $1$ in $F$ ([[lem-arithmetization-agrees-on-boolean-inputs]]).

[L2] The operators are $A_XP=(P|_{X=0})(P|_{X=1})$ and $E_XP=1-(1-P|_{X=0})(1-P|_{X=1})$, evaluated at the remaining variables ([[def-qbf-arithmetization-operators]]).

## Proof

**Proof technique:** direct.

1.1 On the four bit pairs $(u,v)=(0,0),(0,1),(1,0),(1,1)$ the product $uv$ takes the values $0,0,0,1$, and the expression $u+v-uv$ takes the values $0,1,1,1$. These are exactly the truth tables of the conjunction and the disjunction of two bits, and the computations are polynomial identities valid in every field, including fields of characteristic two. [A1, algebra]

1.2 Let $b$ denote $0$ or $1$. By [L1] the value $P|_{X=b}(a)=P_\varphi(b,a)$ is the Boolean value of the formula $\varphi(b,a)$ at the assignment $a$, hence an element of $\{0,1\}\subset F$. This includes the case $m=0$, where $a$ is the empty assignment and $\varphi$ has no free variable besides $x$, and the case in which $\varphi$ is a constant formula. [L1, given]

2.1 Put $u:=P|_{X=0}(a)$ and $v:=P|_{X=1}(a)$. By step 1.2 both are bits. Hence by [L2]
$$(A_XP)(a)=uv,\qquad (E_XP)(a)=u+v-uv.$$
By step 1.1 the first value is $1$ exactly when both $\varphi(0,a)$ and $\varphi(1,a)$ are true, which is the truth value of $\forall x\,\varphi(x,a)$, and the second is $1$ exactly when at least one of the two is true, which is the truth value of $\exists x\,\varphi(x,a)$. Both operator values are therefore themselves bits. [step 1.1, step 1.2, L2, algebra]

3.1 Consequently $A_X$ and $E_X$, evaluated at any Boolean assignment to the remaining variables, return the truth values of the corresponding quantifications of the arithmetized subformula. [step 2.1] ∎
