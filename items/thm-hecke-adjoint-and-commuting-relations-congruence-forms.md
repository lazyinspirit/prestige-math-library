---
id: thm-hecke-adjoint-and-commuting-relations-congruence-forms
kind: theorem
title: "Adjointness and Commutation Relations for Hecke Operators"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-hecke-operator-on-congruence-forms
  - def-petersson-inner-product-on-congruence-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - def-congruence-subgroup-of-sl2-z
  - def-congruence-modular-form-with-nebentypus
  - thm-chinese-remainder-theorem
  - thm-bezout-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 4 §4.4, printed pp. 58–59: commutation; Chapter 5 §5.2, printed pp. 70–75: Petersson adjoints of double-coset Hecke operators."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5 §§5.22–5.24, printed pp. 76–77: Petersson invariance and self-adjointness at level one."
---

## Statement

Let $N\ge1$, let $k\ge2$ be even, let $\chi$ be a character modulo $N$ with $\chi(-1)=1$, and let $m,n\ge1$. On $M_k(\Gamma_0(N),\chi)$ the Hecke operators satisfy

$$T_mT_n=\sum_{d\mid\gcd(m,n)}\chi(d)d^{k-1}T_{mn/d^2},$$

where $\chi(d)=0$ for $\gcd(d,N)>1$. In particular the Hecke operators commute. On the Petersson space $S_k(\Gamma_0(N),\chi)$, for every $n$ coprime to $N$ their adjoints satisfy

$$T_n^*=\overline{\chi(n)}\,T_n,$$

equivalently $\langle T_nf,g\rangle_{N,k}=\langle f,\overline{\chi(n)}T_ng\rangle_{N,k}$. Thus the away-from-level operators are self-adjoint when $\chi$ is trivial; no self-adjointness assertion is made for operators at primes dividing $N$.

## Facts & Assumptions

**Given:** $N\ge1$, even $k\ge2$, a finite character $\chi$ with $\chi(-1)=1$, and the spaces and operators defined above.

[F1] [[def-hecke-operator-on-congruence-forms]]: For a holomorphic function invariant under $\Gamma=\Gamma_1(N)$, $H_\alpha$ is the finite sum over $\Gamma_\alpha\backslash\Gamma$ when $\Gamma_\alpha$ has finite index.

[F2] [[def-hecke-operator-on-congruence-forms]]: For $\alpha_p=\operatorname{diag}(1,p)$, $T_p=p^{-1}H_{\alpha_p}$.

[F3] [[def-hecke-operator-on-congruence-forms]]: $T_1$ is the identity, the prime-power recurrence defines $T_{p^r}$, and $T_n$ is the ordered product of these prime-power operators.

[F4] [[def-petersson-inner-product-on-congruence-forms]]: $\langle f,g\rangle_{N,k}$ is the convergent integral of $f\overline g\,y^k$ against the invariant measure $dx\,dy/y^2$ on a fundamental region.

[F5] [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]: Each $T_n$ preserves the modular and cuspidal spaces, and its coefficient formula is $a_r(T_nf)=\sum_{d\mid\gcd(r,n)}\chi(d)d^{k-1}a_{rn/d^2}(f)$.

[F6] [[def-hecke-operator-on-congruence-forms]]: On $\Gamma_1(N)$-invariant forms, $M_k(\Gamma_0(N),\chi)$ is the common $\chi$-eigenspace for the diamond operators.

[F7] [[def-congruence-modular-form-with-nebentypus]]: The character has finite image and $|\chi(e)|=1$ for every unit $e$ modulo $N$.

[F8] [[def-congruence-subgroup-of-sl2-z]]: $\Gamma_1(N)$ is normal in $\Gamma_0(N)$, and the quotient map sends a matrix to its lower-right entry modulo $N$.

[F9] [[thm-chinese-remainder-theorem]]: For the pairwise-coprime moduli $N$ and $p$, any prescribed pair of residue classes is represented by a unique class modulo $Np$.

[F10] [[thm-bezout-identity]]: If $d$ is coprime to $N$, there are integers $a,b$ with $ad-bN=1$.
[A1] No axiom of choice is used: all coset sets are finite, and the prime-level representatives used below are explicitly exhibited.

## Proof

1.1 Let $p\ne q$ be primes. Applying [F5] twice gives $a_r(T_pT_qf)=a_{pqr}+\chi(q)q^{k-1}a_{pr/q}+\chi(p)p^{k-1}a_{qr/p}+\chi(p)\chi(q)(pq)^{k-1}a_{r/(pq)}$, with every coefficient of a noninteger index interpreted as zero. The expression is symmetric in $p,q$, so $T_pT_q=T_qT_p$ because equality of all q-expansion coefficients gives equality of holomorphic functions. Equal-prime operators commute with themselves; hence all $T_p$ commute. [given, F5, algebra]

1.2 Put $\Gamma=\Gamma_1(N)$ and let $\alpha\in GL_2^+(\mathbb Q)$ be such that the double-coset sums for $\alpha$ and $\alpha^{-1}$ are finite; put $D:=\det\alpha>0$, set $\alpha^*:=D\alpha^{-1}$ and $j(\alpha,z):=cz+d$ for the bottom row $(c,d)$ of $\alpha$. For any cusp form $h\in S_k(\Gamma_0(N),\chi)$, each sum $H_\alpha h$ is $\Gamma$-invariant and has zero constant term at every rational cusp: right multiplication by $\eta\in\Gamma$ permutes $\Gamma_\alpha\backslash\Gamma$, while changing a representative by left multiplication in $\Gamma_\alpha$ leaves its summand unchanged; at a cusp $\sigma\infty$, each rational matrix $\alpha\delta\sigma$ factors as $\rho\beta$, with $\rho\in SL_2(\mathbb Z)$ and $\beta$ upper triangular with positive diagonal. The expansion of $h|_k\rho$ has only positive powers because $h$ is cuspidal at every rational cusp; applying $|_k\beta$ rescales the exponent by a positive number and multiplies it by a nonzero constant, so it still has zero constant term. The same argument applies to $H_{\alpha^{-1}}h$. For the $\Gamma$ Petersson product, expand the finite sum in $\langle H_\alpha f,g\rangle_\Gamma$ and, in the summand indexed by $\delta$, change variables $w=\delta z$. The sets $\delta\mathcal F_\Gamma$ tile a fundamental region for $\Gamma_\alpha$ because the representatives run over $\Gamma_\alpha\backslash\Gamma$. The identities $j(\alpha\delta,z)=j(\alpha,w)j(\delta,z)$, $g(\delta z)=j(\delta,z)^kg(z)$, $\operatorname{Im}(\delta z)=\operatorname{Im}(z)/|j(\delta,z)|^2$, and $d\mu(\delta z)=d\mu(z)$ cancel the $\delta$-factors and yield $\langle H_\alpha f,g\rangle_\Gamma=(\det\alpha)^k\int_{\mathcal F_{\Gamma_\alpha}}j(\alpha,z)^{-k}f(\alpha z)\overline{g(z)}y^k\,d\mu$. For clarity, the $\Gamma$ product here is the same integral over a fundamental region for the finite-index subgroup $\Gamma$; the finite number of cusp ends and the positive-exponent decay just established give convergence as in [F4]. Applying the inverse unfolding, taking the complex conjugate, and changing variables $z=\alpha w$ yields
$$\langle f,H_{\alpha^{-1}}g\rangle_\Gamma
=\int_{\mathcal F_{\Gamma_\alpha}}j(\alpha,w)^{-k}f(\alpha w)\overline{g(w)}(\operatorname{Im}w)^k\,d\mu(w).$$
Indeed the inverse unfolding starts with $D^{-k}$, while $j(\alpha^{-1},\alpha w)=j(\alpha,w)^{-1}$ and $\operatorname{Im}(\alpha w)=D\operatorname{Im}(w)/|j(\alpha,w)|^2$ supply $D^k$ and the remaining $j(\alpha,w)^{-k}$ after cancellation. Also $d\mu(\alpha w)=d\mu(w)$ and $\Gamma_{\alpha^{-1}}=\alpha\Gamma_\alpha\alpha^{-1}$, so $\alpha^{-1}\mathcal F_{\Gamma_{\alpha^{-1}}}$ is a fundamental region for $\Gamma_\alpha$. Comparing with the first unfolding therefore gives
$$\langle H_\alpha f,g\rangle_\Gamma=D^k\langle f,H_{\alpha^{-1}}g\rangle_\Gamma.$$
The scalar matrix $DI$ acts by $f|_k(DI)=D^k f$ and does not change the conjugated subgroup, hence $H_{\alpha^*}=D^kH_{\alpha^{-1}}$. Since $D^k$ is real, the last equality is exactly $\langle H_\alpha f,g\rangle_\Gamma=\langle f,H_{\alpha^*}g\rangle_\Gamma$, proving $H_\alpha^*=H_{\alpha^*}$. When $f,g$ and both transforms lie in the $\chi$-eigenspace, their Petersson densities are $\Gamma_0(N)$-invariant by [F7]. Put $\Gamma^+=\langle\Gamma,-I\rangle\subseteq\Gamma_0(N)$. The groups $\Gamma$ and $\Gamma^+$ have identical orbits on $\mathbb H$, while coset translates of a $\Gamma_0(N)$ fundamental region give a $\Gamma^+$ fundamental region away from boundaries. Thus the $\Gamma$ product is $[\Gamma_0(N):\Gamma^+]$ times the product in [F4], a finite positive degree by [F8]. Cancelling this same factor on both sides gives the adjoint identity for [F4]. [given, F1, F4, F7, F8, algebra, choose]

2.1 Put $c=\chi(p)p^{k-1}$. For $0\le a\le b$, induction on $a$ using the recurrence in [F3] gives $T_{p^a}T_{p^b}=\sum_{j=0}^{a}c^jT_{p^{a+b-2j}}$. For $a=0$ this is the identity. For $a=1$ it is the defining recurrence (and for $b=0$ it is $T_pT_1=T_p$). For $a\ge2$, replace $T_{p^a}$ by $T_pT_{p^{a-1}}-cT_{p^{a-2}}$; applying the induction formula and then $T_pT_{p^s}=T_{p^{s+1}}+cT_{p^{s-1}}$ makes the second sum cancel all terms with $1\le j<a$, leaving exactly the displayed terms. The smallest exponent $s$ used is $b-a+1\ge1$, so every recurrence invocation is within its defined range. [F3, step 1.1, induction, algebra]

2.2 It suffices first to treat a prime $p\nmid N$, with $\alpha=\operatorname{diag}(1,p)$. The double-coset sums for $\alpha$ and $\alpha^{-1}$ are finite: direct conjugation shows that both $\alpha\eta\alpha^{-1}$ and $\alpha^{-1}\eta\alpha$ lie in $\Gamma_1(N)$ for every $\eta\in\Gamma(Np)$. By [F9] choose $d\equiv1\pmod N$ and $d\equiv0\pmod p$. Then $\gcd(d,N)=1$, so [F10] gives $a,b\in\mathbb Z$ with $ad-bN=1$. The matrix $\gamma=\begin{pmatrix}a&b\\N&d\end{pmatrix}$ lies in $\Gamma_1(N)$. With $\delta=\begin{pmatrix}ap&b\\N&d/p\end{pmatrix}\in\Gamma_0(N)$ one has $\gamma\operatorname{diag}(p,1)=\operatorname{diag}(1,p)\delta$, and $d/p\equiv p^{-1}\pmod N$. Since $\gamma$ normalizes $\Gamma_1(N)$ and acts trivially there, coset reindexing gives $H_{\gamma\operatorname{diag}(p,1)}=H_{\operatorname{diag}(p,1)}$; since $\delta$ normalizes $\Gamma_1(N)$, the same reindexing gives $H_{\operatorname{diag}(1,p)\delta}=H_\delta H_{\operatorname{diag}(1,p)}$. Here $H_\gamma=I$ and $H_\delta=\langle p\rangle^{-1}$, so $H_{\operatorname{diag}(p,1)}=\langle p\rangle^{-1}H_{\operatorname{diag}(1,p)}$. By step 1.2 and [F2], $T_p=p^{-1}H_{\operatorname{diag}(1,p)}$, $T_p^*=\langle p\rangle^{-1}T_p=\overline{\chi(p)}T_p$ on the $\chi$-eigenspace. The input and output are in that eigenspace by [F5]; the scalar action of the inverse diamond is $\overline{\chi(p)}$ by [F6] and [F7]. [F1, F2, F5, F6, F7, F8, F9, F10, step 1.2, algebra, choose]

3.1 Factor $m$ and $n$ into prime powers. By step 1.1 the factors at distinct primes commute; use the ordered product in [F3], apply step 2.1 at each prime, and multiply the resulting finite sums. A choice of exponents $j_p$ in those sums is exactly a divisor $d=\prod_pp^{j_p}$ of $\gcd(m,n)$, its coefficient is $\prod_p\chi(p)^{j_p}p^{j_p(k-1)}=\chi(d)d^{k-1}$, and its operator index is $mn/d^2$. This proves the asserted Hecke relation for all positive $m,n$, including primes dividing $N$ because then $\chi(p)=0$ and the recurrence in [F3] has no correction term. [step 1.1, step 2.1, F3, algebra]

4.1 The cases $r=0$ and $r=1$ follow from $T_1=I$ and step 2.2. For $r\ge2$, induct in the prime-power recurrence. If $T_{p^{r-1}}^*=\overline{\chi(p)^{r-1}}T_{p^{r-1}}$ and $T_{p^{r-2}}^*=\overline{\chi(p)^{r-2}}T_{p^{r-2}}$, then taking adjoints of [F3], using step 1.1 and conjugating the scalar $\chi(p)p^{k-1}$, yields $T_{p^r}^*=\overline{\chi(p)^r}T_{p^r}$. For coprime prime powers the adjoint of their product is the product of their adjoints in reverse order; step 1.1 lets us reorder them, so for every $n$ coprime to $N$ one obtains $T_n^*=\overline{\chi(n)}T_n$. The corresponding Petersson identity and the trivial-character self-adjoint case follow from the definition of adjoint. [F3, F4, F5, F7, step 1.1, step 2.2, algebra] ∎
