---
id: ex-two-quantifier-qbf-arithmetization-transcript
kind: example
title: "A two-quantifier field transcript"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-qbf-arithmetization-operators, def-multilinearization-operator, def-shamir-protocol-for-tqbf, def-arithmetization-of-a-boolean-formula, thm-z-mod-p-is-a-field, def-quantified-boolean-formula-and-tqbf]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: ai-altered
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
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Work over the prime field $F=\mathbb Z/251$, and take the closed prenex quantified Boolean formula
$$\Phi=\exists x\,\forall y\,(x\lor\neg y),$$
whose matrix is $\psi=x\lor\neg y$ and which is true, since $x=1$ makes the matrix $1$ for both values of $y$. The matrix has $L=4$ syntax nodes, so with $n=2$ the protocol has $D=4$, $T=5$, and $N=241$; $p=251$ is the first prime greater than $N$. Its matrix arithmetization is
$$b(X,Y)=1-Y+XY,$$
the multilinearized operator sequence of $\Phi$ is
$$b\;\xrightarrow{R_X}\;R_Xb\;\xrightarrow{R_Y}\;R_YR_Xb\;\xrightarrow{A_Y}\;A_YR_YR_Xb\;\xrightarrow{R_X}\;R_XA_YR_YR_Xb\;\xrightarrow{E_X}\;1,$$
and the reverse protocol of [[def-shamir-protocol-for-tqbf]] processes the nodes $E_X$, then $R_X$, then $A_Y$, $R_Y$, $R_X$, with challenges drawn in the order $2,3,4,5,6$. With those challenges the honest claim sequence is $1\to2\to3\to9\to11\to26$ and the terminal comparison is $b(6,5)=26$.

## Facts & Assumptions

**Given:** The field $\mathbb Z/251$, the formula $\Phi=\exists x\,\forall y\,(x\lor\neg y)$ and the protocol of [[def-shamir-protocol-for-tqbf]] for it.

[A1] Arithmetization replaces $\neg u$ and $u\lor v$ by $1-u$ and $u+v-uv$, variable leaves by their variables, and it agrees with the Boolean value of the formula at Boolean inputs ([[def-arithmetization-of-a-boolean-formula]]).

[A2] The ordered arithmetization applies $A_XP=(P|_{X=0})(P|_{X=1})$ and $E_XP=1-(1-P|_{X=0})(1-P|_{X=1})$ to the quantifiers, inner quantifiers first ([[def-qbf-arithmetization-operators]]).

[A3] The multilinearized sequence inserts $R_XP=(1-X)(P|_{X=0})+X(P|_{X=1})$ before each quantifier operation, and its blocks for the prefix $\exists x\forall y$ are $R_X,R_Y,A_Y$ followed by $R_X,E_X$ ([[def-multilinearization-operator]]).

[A4] In the protocol the rounds process the operator list backwards; in the round for a node the verifier tests $c=s(0)s(1)$ for $A$, $c=s(0)+s(1)-s(0)s(1)$ for $E$, and $c=(1-a)s(0)+a\,s(1)$ with the current value $a$ of the reduced variable for $R$, then samples a fresh challenge $r$, sets the reduced variable to $r$ and $c:=s(r)$, and finally accepts exactly when $c=b(\sigma)$ ([[def-shamir-protocol-for-tqbf]]).

[A5] The classes of $\mathbb Z/251$ form a field under addition and multiplication modulo $251$ ([[thm-z-mod-p-is-a-field]]), and $\Phi$ is a closed prenex quantified Boolean formula with the truth semantics of [[def-quantified-boolean-formula-and-tqbf]].



## Verification

1.1 By [A1] the matrix arithmetization is $X+(1-Y)-X(1-Y)$, which simplifies to $1-Y+XY=:b(X,Y)$. At the four Boolean points it takes the values $b(0,0)=1$, $b(0,1)=0$, $b(1,0)=1$, $b(1,1)=1$, matching $x\lor\neg y$ in each case. [A1, algebra]

2.1 The reductions do not change $b$, because $b$ is multilinear: $b|_{X=0}=1-Y$ and $b|_{X=1}=1$ give $R_Xb=(1-X)(1-Y)+X=1-Y+XY$, and $b|_{Y=0}=1$ and $b|_{Y=1}=X$ give $R_Yb=(1-Y)+YX=1-Y+XY$. [A3, step 1.1, algebra]

3.1 Applying the quantifier operations: $A_Yb=(b|_{Y=0})(b|_{Y=1})=1\cdot X=X$, then $R_XX=X$ since $X|_{X=0}=0$ and $X|_{X=1}=1$, and finally $E_XX=1-(1-0)\cdot(1-1)=1$. The constant so obtained is the truth value of $\Phi$ by [A2] and [A5], and indeed $\Phi$ is true. [A2, step 2.1, A5, algebra]

3.2 Reading the stages backwards, the honest messages are the restrictions of $G_4=R_XX=X$, $G_3=X$, $G_2=R_YR_Xb=1-Y+XY$ at $x=3$, $G_1=1-Y+XY$ at $x=3$, and $G_0=b$ at $y=5$; that is, in the order of the rounds, $s_1(T)=T$, $s_2(T)=T$, $s_3(T)=1+2T$, $s_4(T)=1+2T$ and $s_5(T)=5T-4$. [A3, A4, step 2.1, algebra]

4.1 The reverse protocol of [A4] therefore processes $E_X$ first, then $R_X$, then $A_Y$, $R_Y$ and $R_X$. Take the challenges in this order to be $2,3,4,5,6$, so that $\sigma(x)$ is set to $2$ and then to $3$ and finally to $6$, and $\sigma(y)$ is set to $4$ and then to $5$. [A4, step 3.1]

4.2 The verifier's tests pass with these messages: $E_X$ checks $1=0+1-0$; then $R_X$ with $a=2$ checks $2=(1-2)\cdot0+2\cdot1$; then $A_Y$ checks $3=1\cdot3$, where $s_3(0)=1$ and $s_3(1)=3$; then $R_Y$ with $a=4$ checks $9=(1-4)\cdot1+4\cdot3$; and finally $R_X$ with $a=3$ checks $11=(1-3)\cdot(-4)+3\cdot1$. So the claim sequence is $1\to2\to3\to9\to11\to26$, where each new claim is obtained by evaluating the sent message at the new challenge. [A4, step 3.2, algebra]

5.1 The point left at the end is $\sigma=(6,5)$, and the terminal comparison gives $b(6,5)=1-5+30=26$, equal to the final claim $26$; the verifier therefore accepts this transcript. All products and sums above are computed in $\mathbb Z/251$, where $(1-4)\cdot1=-3\equiv248$ and $248+12=260\equiv9\pmod{251}$, so the intermediate values agree with the field arithmetic. [A4, step 4.2, A5, algebra] ∎
