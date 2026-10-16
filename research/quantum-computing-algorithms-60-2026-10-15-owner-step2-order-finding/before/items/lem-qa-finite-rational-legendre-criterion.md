---
id: lem-qa-finite-rational-legendre-criterion
kind: lemma
title: Finite-rational Legendre criterion before the terminal convergent
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-regular-continued-fraction
  - def-convergents-of-regular-continued-fraction
  - def-continued-fraction-complete-quotients
  - lem-continued-fraction-convergent-recurrence
  - lem-continued-fraction-determinant-identity
  - lem-continued-fraction-complete-quotient-formula
  - thm-rational-continued-fraction-termination
  - thm-normalized-finite-continued-fraction-uniqueness
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "None; the proof uses finite Euclidean recursion and integer determinant identities."
proof_strategy: direct
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; finite continued-fraction recovery"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, PDF pp. 16–19; rational approximation in period finding"
---

## Statement

Let $A,p\in\mathbb Z$ and $D,q\in\mathbb Z_{>0}$, with $A/D$ and $p/q$ reduced and $D>2q$. If $|A/D-p/q|<1/(2q^2)$, then $p/q$ is a convergent of the normalized finite regular continued fraction of $A/D$. This is a finite-rational statement; it does not invoke the irrational-input Legendre theorem.

## Facts & Assumptions

**Given:** Reduced $A/D$ with $D>2q$, and reduced $p/q$ with $q>0$ and $|A/D-p/q|<1/(2q^2)$.

[F1] A rational continued fraction terminates at its Euclidean quotient list, and normalized finite expansion chooses the representation whose last digit is at least $2$ unless the expansion is an integer ([[thm-rational-continued-fraction-termination]], [[thm-normalized-finite-continued-fraction-uniqueness]]).

[F2] For convergents, $p_n=a_np_{n-1}+p_{n-2}$ and $q_n=a_nq_{n-1}+q_{n-2}$, and the finite-prefix formula is $(Tp_j+p_{j-1})/(Tq_j+q_{j-1})$ for the positive remaining tail $T$ ([[def-convergents-of-regular-continued-fraction]], [[lem-continued-fraction-convergent-recurrence]], [[lem-continued-fraction-complete-quotient-formula]]).

[F3] Adjacent convergents satisfy $p_jq_{j-1}-p_{j-1}q_j=(-1)^{j-1}$ ([[lem-continued-fraction-determinant-identity]]).

[F4] The complete quotient is $T=a_{j+1}$ at the last digit and otherwise $T>a_{j+1}$; the denominator recurrence is increasing after the possible initial equality $q_0=q_1=1$ ([[def-continued-fraction-complete-quotients]], [[def-convergents-of-regular-continued-fraction]]).

## Proof

1.1 By [F1], write $A/D=[a_0;\ldots,a_s]$ in normalized finite form. Since $D>2q\ge2$, $A/D$ is not an integer, so $s\ge1$. Its terminal convergent equals $A/D$ by [F1] and [F2]; [F3] makes numerator and denominator coprime, so the positive terminal denominator is $q_s=D$. [given, F1, F2, F3]

2.1 If $q=1$, then $p$ is an integer and $|A/D-p|<1/2$. Put $a_0=\lfloor A/D\rfloor$ and $e:=A/D-a_0\in(0,1)$. The only possible such integers are $a_0$ and $a_0+1$. The first is the zeroth convergent. If $p=a_0+1$, then $e>1/2$, hence $a_1=\lfloor1/e\rfloor=1$; the recurrence in [F2] gives $p_1/q_1=(a_0+1)/1$. Thus $p/q$ is a convergent. [given, F2, step 1.1, algebra]

2.2 Suppose $q\ge2$. Since $q<D=q_s$, choose the largest $j$ with $q_j\le q$. Then $0\le j<s$; the only repeated initial denominator can be $q_0=q_1=1$, so $q_j>0$ and $s_0:=q_{j-1}/q_j$ lies in $[0,1]$ (with $q_{-1}=0$ when $j=0$). Put $T=a_{j+1}$ if $j+1=s$, and otherwise let $T$ be the complete quotient after the prefix. By [F4], $T\ge a_{j+1}$, and $x:=q/q_j$ satisfies $1\le x<a_{j+1}+s_0\le T+s_0=:L$. [given, F2, F4, step 1.1, choose]

3.1 By [F3], the integer vectors $(p_j,q_j)$ and $(p_{j-1},q_{j-1})$ form a unimodular basis of $\mathbb Z^2$. Write $(p,q)=u(p_j,q_j)+v(p_{j-1},q_{j-1})$ with integers $u,v$; then $x=u+vs_0$. Put $\varepsilon=p_jq_{j-1}-p_{j-1}q_j=\pm1$. Cross multiplication using the tail formula [F2] gives $\frac pq-\frac AD=\frac{(up_j+vp_{j-1})(Tq_j+q_{j-1})-(Tp_j+p_{j-1})(uq_j+vq_{j-1})}{q(Tq_j+q_{j-1})}=\frac{\varepsilon(u-vT)}{q_j^2xL}$. Since $q=xq_j$, it follows that $q^2|A/D-p/q|=x|u-vT|/L$. Finally $L=T+s_0$ and $x=u+vs_0$, so $u-vT=x-vL$ and $q^2|A/D-p/q|=x|x-vL|/L$. [F2, F3, step 2.2, algebra]

4.1 The hypothesis makes the expression in step 3.1 less than $1/2$. If $v\le-1$, then $|x-vL|\ge x+L$, so $x|x-vL|/L>x\ge1$. If $v\ge2$, then $|x-vL|\ge2L-x>L$ because $x<L$, so again $x|x-vL|/L>x\ge1$. Both alternatives are impossible. [given, step 3.1, algebra]

4.2 If $v=1$, then $u=x-s_0$ is an integer. If $s_0<1$, $x\ge1$ implies $u>0$; if $s_0=1$, then $j\ge1$ and $q_j=q_{j-1}=1$, while $q\ge2$ forces $x\ge2$. Thus $u\ge1$. Also $q<q_{j+1}$ implies $u<a_{j+1}$, so $L-x=T-u\ge1$. Hence $x(L-x)/L\ge x/(x+1)\ge1/2$, contradicting the strict hypothesis. Thus $v\ne1$. [given, F4, step 2.2, step 3.1, algebra]

5.1 The alternatives $v\le-1$, $v\ge2$, and $v=1$ were excluded in steps 4.1–4.2, so $v=0$. Then $(p,q)=u(p_j,q_j)$, hence $p/q=p_j/q_j$ and $p/q$ is the $j$th convergent. The proof includes the terminal case $j+1=s$ because only $T\ge a_{j+1}$ was used, allowing equality at the terminal tail. [F1, step 4.1, step 4.2, algebra] ∎
