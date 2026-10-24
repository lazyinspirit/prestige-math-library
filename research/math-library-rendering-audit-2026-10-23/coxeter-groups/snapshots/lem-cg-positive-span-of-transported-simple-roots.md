---
id: "lem-cg-positive-span-of-transported-simple-roots"
kind: "lemma"
title: "A transported simple root lies in the positive span of the simple root and the inversion roots"
status: published
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 13
deps:
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - thm-cg-root-sign-and-simple-reflection-positivity
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - thm-cg-parabolic-intersections-and-coset-factorization
  - thm-cg-root-length-criterion-and-faithfulness
proof_strategy: induction
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Lemma 2.6 on p. 10 (the positive-span identity for the transported root beta_{wsw^{-1}}), proved there by the same induction"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, pp. 5-6 (Coxeter and sorting-word conventions; background only)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 4.2 and 4.4, pp. 93-97 and 101-105 (the reflection representation, positive roots and inversion sets)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group with length $\ell$, $V=\mathbb R^S$ with Coxeter form $B$ and canonical reflection representation $\rho$, root system $\Phi=\Phi_+\sqcup\Phi_-$ with the reflection dictionary $\alpha\mapsto t_\alpha$, and inversion sets $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$ ([[def-cg-canonical-reflection-homomorphism]], [[thm-cg-root-sign-and-simple-reflection-positivity]], [[def-cg-geometric-inversion-set]]). For $x=\sum_{r\in S}a_re_r\in V$ write $\operatorname{supp}_S(x):=\{r\in S:a_r\ne0\}$. Let $s\in S$ and $w\in W$ with $s\notin S(w)$, so that $w\in W_{S\setminus\{s\}}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1)). Fix a reduced expression $w=r_1\cdots r_k$ and let $t_i:=r_1\cdots r_{i-1}r_ir_{i-1}\cdots r_1$ be its prefix reflections, with corresponding positive roots $\beta_i:=\rho(r_1\cdots r_{i-1})e_{r_i}\in\Phi_+$; then $N(w^{-1})=\{\beta_1,\dots,\beta_k\}$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (2)). Then:

**(1)** $\rho(w)e_s=e_s+\sum_{i=1}^{k}c_i\beta_i$ with $c_i\ge0$ for every $i$; in particular $\rho(w)e_s\in\Phi_+$, which also gives $\ell(ws)>\ell(w)$ ([[thm-cg-root-length-criterion-and-faithfulness]] (1)).

**(2)** Every coefficient of $\rho(w)e_s$ in the simple basis $(e_r)_{r\in S}$ is nonnegative, the coefficient of $e_s$ is $1$, and $\operatorname{supp}_S(\rho(w)e_s)\subseteq S(w)\cup\{s\}$.

**(3)** The conclusions of (1) and (2) hold for every $u\in W$ with $s\notin S(u)$ and every reduced expression of $u$; in particular $u\mapsto\rho(u)e_s$ maps $W_{S\setminus\{s\}}$ into $\Phi_+$.

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$ on $S$, the presented group $W$ with length function $\ell$, the space $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection representation $\rho:W\to\mathrm{GL}(V)$, the root system $\Phi=\Phi_+\sqcup\Phi_-$, an element $s\in S$ and an element $w\in W$ with $s\notin S(w)$, and a reduced expression $w=r_1\cdots r_k$ with prefix reflections $t_i=r_1\cdots r_{i-1}r_ir_{i-1}\cdots r_1$ and prefix roots $\beta_i:=\rho(r_1\cdots r_{i-1})e_{r_i}$.

[F1] [[def-cg-real-coxeter-form-and-reflection]]: $B$ is the unique symmetric bilinear form with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$; for $a\in V$ with $B(a,a)\ne0$ the reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$, so $r_{e_{r_1}}(v)=v-2B(v,e_{r_1})e_{r_1}$.

[F2] [[def-cg-canonical-reflection-homomorphism]]: $\rho$ is the group homomorphism with $\rho(s)=r_{e_s}$ for every $s\in S$, and $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$.

[F3] [[thm-cg-root-sign-and-simple-reflection-positivity]]: (2) $\Phi=\Phi_+\sqcup\Phi_-$ with $\Phi_\pm=\Phi\cap(\pm V_+)$ and $V_+=\{\sum_{s\in S}\lambda_se_s:\lambda_s\ge0\}$; (3) $r_s\bigl(\Phi_+\setminus\{e_s\}\bigr)=\Phi_+\setminus\{e_s\}$ for every $s\in S$.

[F4] [[def-cg-geometric-inversion-set]]: for $u\in W$, $N(u)=\{\alpha\in\Phi_+:\rho(u)\alpha\in\Phi_-\}$.

[F5] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (2): if $u=s_1\cdots s_m$ is a reduced expression, then $N(u^{-1})=\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le m\}$, these elements being pairwise distinct positive roots.

[F6] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1): $S(u)$ is the support of $u$, independent of the reduced expression, and $S(r_1u')=\{r_1\}\cup S(u')$ for a reduced expression $r_1u'$.

[F7] [[thm-cg-root-length-criterion-and-faithfulness]] (1): for all $u\in W$, $t\in S$, $\ell(ut)>\ell(u)\iff\rho(u)e_t\in\Phi_+$ and $\ell(ut)<\ell(u)\iff\rho(u)e_t\in\Phi_-$.

[F8] [[thm-cg-parabolic-intersections-and-coset-factorization]] (2): for $I\subseteq S$ one has $V_I=\operatorname{span}\{e_s:s\in I\}$ and $\Phi_I=\{\rho(v)e_s:v\in W_I,\ s\in I\}=\Phi\cap V_I$.

[F9] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): $u\mapsto u^{-1}$ preserves lengths.

## Proof

**Proof technique:** Induction on $\ell(u)$, over a statement that also records the support of the transported root.

1.1 We prove the following statement $P(\ell)$ for every $\ell\ge0$: for every $u\in W$ with $\ell(u)=\ell$, every $t\notin S(u)$ and every reduced expression $u=s_1\cdots s_\ell$ with prefix roots $\gamma_i:=\rho(s_1\cdots s_{i-1})e_{s_i}$, one has $\rho(u)e_t=e_t+\sum_{i=1}^{\ell}c_i\gamma_i$ with $c_i\ge0$ for all $i$. For the given pair $(w,s)$ we have $\ell(w)=k$ by the reducedness of $w=r_1\cdots r_k$, so clause (1) is the instance $u=w$, $t=s$ of $P(k)$, clause (3) is the same statement quantified over all pairs $(u,s)$ with $s\notin S(u)$, and clause (2) is obtained from it in the last steps. [given, induction]

1.2 Base case $\ell=0$: here $u=1$, the expression is empty, and the homomorphism property in [F2] gives $\rho(1)e_t=e_t$, which is the claimed identity with the empty sum. [base, F2]

1.3 Induction hypothesis: assume $P(m)$ for all $m\le\ell-1$ and let $u=r_1u'$ be a reduced expression with $u'=r_2\cdots r_\ell$, so $\ell(u')=\ell-1$ and $u'$ inherits $t\notin S(u')$ from $t\notin S(u)=\{r_1\}\cup S(u')$, using the support clause in [F6](1). [ih, F6]

2.1 Applying the hypothesis of step 1.3 to the pair $(u',t)$ and the reduced expression $r_2\cdots r_\ell$ gives $\rho(u')e_t=e_t+\sum_{i=2}^{\ell}c_i\gamma'_i$ with $c_i\ge0$ and $\gamma'_i:=\rho(r_2\cdots r_{i-1})e_{r_i}$ the pairwise distinct prefix roots of $u'$; by the prefix-root formula [F5], $N((u')^{-1})=\{\gamma'_2,\dots,\gamma'_\ell\}$. [step 1.3, F5]

2.2 By [F2], $\rho(r_1)=r_{e_{r_1}}$; applying the reflection formula and Coxeter-form entries from [F1] gives $\rho(r_1)e_t=e_t-2B(e_t,e_{r_1})e_{r_1}=e_t+c_1e_{r_1}$ with $c_1:=-2B(e_t,e_{r_1})\ge0$: indeed $t\ne r_1$ because $t\notin S(u)$ and $r_1\in S(u)$, and every off-diagonal value of $B$ is $\le0$ since $m(s,t)\ge2$ for $s\ne t$ gives $\cos(\pi/m(s,t))\ge0$. Moreover $e_{r_1}=\gamma_1$ is the first prefix root of $u$. [step 1.3, F1, F2, algebra]

3.1 No prefix root $\gamma'_i$ of $u'$ equals $e_{r_1}$: if $\gamma'_i=e_{r_1}$, then $e_{r_1}\in N((u')^{-1})$ by step 2.1; the inversion-set definition [F4] gives $\rho((u')^{-1})e_{r_1}\in\Phi_-$. The root-length criterion [F7] then gives $\ell((u')^{-1}r_1)<\ell((u')^{-1})$, which by [F9] is $\ell(r_1u')<\ell(u')$, contradicting the reducedness of $u=r_1u'$. [step 2.1, F4, F7, F9]

4.1 For $i\ge2$ we have $\gamma'_i\in\Phi_+\setminus\{e_{r_1}\}$ by steps 2.1 and 3.1, so the simple-reflection action in [F3](3) gives $\rho(r_1)\gamma'_i\in\Phi_+\setminus\{e_{r_1}\}$; and $\rho(r_1)\gamma'_i=\rho(r_1\cdots r_{i-1})e_{r_i}=\gamma_i$ is the $i$-th prefix root of $u$. [step 2.1, step 3.1, F3, algebra]

5.1 The homomorphism property in [F2] gives $\rho(u)=\rho(r_1)\rho(u')$, so steps 2.1, 2.2 and 4.1 give $\rho(u)e_t=e_t+c_1\gamma_1+\sum_{i=2}^{\ell}c_i\gamma_i$ with all coefficients $\ge0$; this is $P(\ell)$. [step 2.1, step 2.2, step 4.1, F2, algebra]

6.1 The base case of step 1.2 and the induction step, using step 1.3 to set up and step 5.1 to prove the inductive case, establish $P(\ell)$ for every $\ell\ge0$. In particular $P(k)$ gives, for the given pair $(w,s)$ and the reduced expression $w=r_1\cdots r_k$, the expansion $\rho(w)e_s=e_s+\sum_{i=1}^{k}c_i\beta_i$ with $c_i\ge0$ for all $i$. [step 1.2, step 1.3, step 5.1, discharge-induction]

7.1 By the support clause [F6](1), each prefix root $\beta_i=\rho(r_1\cdots r_{i-1})e_{r_i}$ has $r_1\cdots r_{i-1}\in W_{S(w)}$ and $r_i\in S(w)$; hence the parabolic root identity [F8](2) gives $\beta_i\in\Phi_{S(w)}=\Phi\cap V_{S(w)}$. By the sign split [F3](2), each $\beta_i\in\Phi_+\subseteq V_+$ is a nonnegative combination of the simple roots $e_r$ with $r\in S(w)$ and has no $e_s$-coordinate, since $s\notin S(w)$. Therefore every simple coordinate of $\rho(w)e_s$ is $\ge0$ by step 6.1, its $e_s$-coordinate equals $1$, and its support satisfies $\operatorname{supp}_S(\rho(w)e_s)\subseteq S(w)\cup\{s\}$; this proves clause (2). [step 6.1, F3, F6, F8]

8.1 By the root-orbit definition [F2], $\rho(w)e_s\in\Phi$; step 7.1 shows it lies in $V_+\setminus\{0\}$, so the sign split [F3](2) gives $\rho(w)e_s\in\Phi_+$. The root-length criterion [F7](1) now gives $\ell(ws)>\ell(w)$, completing clause (1). [step 6.1, step 7.1, F2, F3, F7]

9.1 By the parabolic-support clause [F6](1), the elements $u$ with $s\notin S(u)$ are exactly $W_{S\setminus\{s\}}$. For any such $u$, $P(\ell(u))$ supplies the expansion of (1), step 7.1 gives the support statement of (2) with $S(w)$ replaced by $S(u)$, and step 8.1 gives $\rho(u)e_s\in\Phi_+$; hence $u\mapsto\rho(u)e_s$ maps $W_{S\setminus\{s\}}$ into $\Phi_+$. [step 6.1, step 7.1, step 8.1, F6, discharge-induction] ∎
