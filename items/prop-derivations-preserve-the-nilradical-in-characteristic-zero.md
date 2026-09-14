---
id: prop-derivations-preserve-the-nilradical-in-characteristic-zero
kind: proposition
title: Derivations preserve the nilradical in characteristic zero
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero, def-nilpotency-class-of-a-lie-algebra, def-derivation-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Maksimenko, On action of outer derivations on nilpotent ideals of Lie algebras"
      url: https://admjournal.luguniv.edu.ua/index.php/adm/article/viewFile/770/300
      locator: "formula (1), Lemmas 2–5, and Theorem 1, journal pp. 75–82"
---

## Statement

If $D$ is a derivation of a finite-dimensional characteristic-zero Lie algebra
$\mathfrak g$, then

$$D(\operatorname{nilrad}(\mathfrak g))\subseteq\operatorname{nilrad}(\mathfrak g).$$

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak g$ over a
characteristic-zero field and a derivation $D$ of $\mathfrak g$.

[L1] The nilradical $I=\operatorname{nilrad}(\mathfrak g)$ exists and is the
largest nilpotent ideal
([[thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero]]).

[L2] A nonzero nilpotent Lie algebra has a finite nilpotency class $c$, meaning
that its lower-central powers satisfy $I^{c+1}=0$ and $I^c\neq0$
([[def-nilpotency-class-of-a-lie-algebra]]).

[L3] A derivation satisfies $D([x,y])=[D(x),y]+[x,D(y)]$
([[def-derivation-of-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Put $I=\operatorname{nilrad}(\mathfrak g)$ and $J=I+D(I)$. For $x\in\mathfrak g$ and $a\in I$, [L3] gives $[x,D(a)]=D([x,a])-[D(x),a]\in D(I)+I$; hence $J$ is an ideal. If $I=0$, then $D(I)=0$ and the result is immediate, so suppose $I\neq0$ and let $c$ be its class as in [L2]. For subspaces use left-normed brackets and write $I^1=I$, $I^{m+1}=[I^m,I]$; every $I^m$ is an ideal of $\mathfrak g$ by Jacobi. [given, L1, L2, L3, algebra]

1.2 Iterating [L3] gives the generalized Leibniz formula $D^q([x_1,\ldots,x_s])=\sum_{q_1+\cdots+q_s=q}\frac{q!}{q_1!\cdots q_s!}[D^{q_1}x_1,\ldots,D^{q_s}x_s]$. If the $x_i$ lie in $I$ and $q<s$, every multi-index has at least $s-q$ zero entries; bracketing successively past those undifferentiated $I$-entries gives $D^q(I^s)\subseteq I^{s-q}$. This is the differentiated-bracket estimate used below. [L3, algebra]

2.1 Apply the formula in step 1.2 with $q=s=c+1$ to $0=[x_1,\ldots,x_{c+1}]$ for $x_i\in I$. The all-ones multi-index contributes $(c+1)![D(x_1),\ldots,D(x_{c+1})]$. Every other multi-index has a zero entry and its bracket lies in the ideal $I$. Since $(c+1)!$ is invertible in characteristic zero, $[D(I),\ldots,D(I)]\subseteq I$ with $c+1$ copies of $D(I)$; expanding powers of $J$ therefore gives $J^{c+1}\subseteq I$. [L2, step 1.2, algebra]

2.2 The refined initial estimate is $[I,D(I),\ldots,D(I)]\subseteq I^2$ with $c+1$ copies of $D(I)$. Indeed, for $x_1,\ldots,x_{c+2}\in I$ let $t_i$ be the bracket having $x_i$ in position $i$ and $D(x_j)$ in every other position. For each $s$, the bracket $u_s$ having $D(x_s)$ in position $s$ and undifferentiated $x_j$ elsewhere is zero because it contains $c+1$ entries from $I$. Expanding $D^c(u_s)=0$ by step 1.2 modulo $I^2$ leaves exactly $c!\sum_{i\neq s}t_i$. Division by $c!$ gives $\sum_{i\neq s}t_i\in I^2$; summing over $s$ gives $(c+1)\sum_i t_i\in I^2$, and division by $c+1$ then gives each $t_s\in I^2$. Taking $s=1$ proves the estimate. [L2, step 1.2, algebra]

3.1 Define $f_c(1)=c+1$ and $f_c(m)=f_c(m-1)+c-m+1$ for $2\leq m\leq c$. We prove inductively that $[I^m,D(I),\ldots,D(I)]\subseteq I^{m+1}$ with $f_c(m)$ copies of $D(I)$. Step 2.2 is the base. For the induction step set $s=f_c(m-1)+1$, $t=c-m+1$, and $N=s+t$. Given $x_1\in I^m$ and $x_2,\ldots,x_N\in I$, the ideal $I^m$ contains $[x_1,Dx_2,\ldots,Dx_s]$, so $[x_1,Dx_2,\ldots,Dx_s,x_{s+1},\ldots,x_N]=0$ after the remaining $t$ brackets with $I$, since $I^{m+t}=I^{c+1}=0$. Apply $D^t$ and expand by step 1.2. The term with differentiation indices $0$ on positions $1,\ldots,s$ and $1$ on positions $s+1,\ldots,N$ is $t![x_1,Dx_2,\ldots,Dx_N]$, and it is the exceptional term. [step 1.2, step 2.2, algebra]

4.1 Every other term of the expansion in step 3.1 lies in $I^{m+1}$; here and below a summand with differentiation indices $k_1,\ldots,k_N$ is read from left to right, so if its first entry lies in $I^p$ for some $p\geq 1$ and at least $\ell$ later entries are undifferentiated elements of $I$, then it lies in $I^{p+\ell}$. Because $\sum_ik_i=t$ while $N=s+t$, the indices $k_1,\ldots,k_N$ have at least $s$ zeros; call a summand exceptional when $k_1=\cdots=k_s=0$ and $k_{s+1}=\cdots=k_N=1$, which is exactly the summand of step 3.1. Let $r$ denote the number of zeros among $k_{s+1},\ldots,k_N$ and $u$ the sum of the nonzero numbers among $k_1,\ldots,k_s$; the nonzero tail indices number at most $t-r$ and sum to $t-u$, so $u\leq r$. If $r\geq m+1$, then the summand lies in $I^r\subseteq I^{m+1}$: its first entry lies in $\mathfrak g$ while its $r$ undifferentiated tail entries are elements of $I$, and each such entry raises the current power by one. So assume $r\leq m$; then $k_1\leq u\leq r$. If $k_1<r$, step 1.2 gives $D^{k_1}x_1\in I^{m-k_1}$ and the $r$ undifferentiated tail entries raise the power by $r$, giving $I^{(m-k_1)+r}\subseteq I^{m+1}$. If $k_1=r$ and $r<m$, then $k_j=0$ for $2\leq j\leq s$, so $[D^{k_1}x_1,Dx_2,\ldots,Dx_s]\in I^{m-r+1}$ by the induction hypothesis at depth $m-r$: the first entry lies in $I^{m-r}$ by step 1.2 and there are $f_c(m-1)\geq f_c(m-r)$ entries from $D(I)$. The $r$ undifferentiated tail entries again raise the power by $r$, giving $I^{m+1}$. If $k_1=r=m$, then again $k_j=0$ for $2\leq j\leq s$, and the summand is $[D^mx_1,Dx_2,\ldots,Dx_s]$ followed by $m$ undifferentiated tail entries. Write $w=D^{m-1}x_1\in I$ and $U=[w,Dx_2,\ldots,Dx_s]$: since $s-1=f_c(m-1)\geq f_c(1)=c+1$, step 2.2 and ideality of $I^2$ give $U\in I^2$, while the Leibniz rule expands $D(U)=[Dw,Dx_2,\ldots,Dx_s]+\sum_{j=2}^{s}[w,Dx_2,\ldots,D^2x_j,\ldots,Dx_s]$, where each correction term lies in $I$ because its first entry is $w\in I$. As $D(I^2)\subseteq I$ by step 1.2, the sub-bracket $[D^mx_1,Dx_2,\ldots,Dx_s]=D(U)-\sum_{j=2}^{s}[w,\ldots,D^2x_j,\ldots]$ lies in $I$, and the $m$ undifferentiated tail entries raise the power to $I^{m+1}$. The remaining case $k_1=u=r=0$ is the exceptional one, since then every tail index is nonzero and those $t$ nonzero tail indices sum to $t$. Division by $t!$ therefore proves the induction step. [step 1.2, step 2.2, step 3.1, algebra]

4.2 Let $k=\sum_{m=1}^c f_c(m)$. Starting in $I$ and applying the estimates of step 3.1 in consecutive blocks sends a bracket with $k$ entries from $D(I)$ into $I^{c+1}=0$. More generally, in any word of $k$ entries from $J=I+D(I)$ after an initial entry of $I$, an $I$-entry advances one lower-central level immediately, while a block of $f_c(m)$ intervening $D(I)$-entries advances level $m$ by step 3.1; scanning the word therefore reaches $I^{c+1}$ within at most $k$ entries. Thus $[I,J,\ldots,J]=0$ with $k$ copies of $J$. Together with $J^{c+1}\subseteq I$ from step 2.1 this yields $J^{c+k+1}=0$. The recurrence gives $f_c(m)=m(c+1)-(m-1)(m+2)/2$ and $c+k=c(c+1)(2c+1)/6+2c$, so in particular $J$ is nilpotent. [L2, step 2.1, step 3.1, algebra]

5.1 The ideal $J$ is nilpotent by step 4.2 and contains $I$. Since [L1] says that $I$ is the largest nilpotent ideal, $J\subseteq I$; hence $D(I)\subseteq I$. All divisions in steps 2.1–3.1 are by explicitly displayed positive integers and are valid because the field has characteristic zero. The proof uses only finite sums and finite induction, so it uses no form of AC. [L1, step 1.1, step 4.2] ∎
