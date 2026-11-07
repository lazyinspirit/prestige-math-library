---
id: thm-hecke-preserves-cuspidality-on-congruence-subgroups
kind: theorem
title: "Hecke Operators Preserve the Cuspidal Subspace"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-hecke-operator-on-congruence-forms
  - def-congruence-modular-form-with-nebentypus
  - def-congruence-subgroup-of-sl2-z
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
      locator: "Chapter 4 §§4.1–4.5, printed pp. 53–61: double-coset preservation, prime coset representatives, and the q-expansion coefficient formula."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Proposition 5.16 and Corollary 5.17, printed pp. 73–75: Hecke action on modular and cusp forms and its Fourier coefficients at level one."
---

## Statement

Let $N\ge1$, let $k\ge0$ and $\chi$ be as in the definition of modular forms with congruence level and nebentypus, and let $n\ge1$. For every $f\in M_k(\Gamma_0(N),\chi)$, the normalized Hecke transform $T_n f$ is again in $M_k(\Gamma_0(N),\chi)$; if $f$ is a cusp form then $T_n f$ is a cusp form. If $f(z)=\sum_{j\ge0}a_jq^j$ at infinity, where $q=e^{2\pi iz}$, then

$$a_m(T_n f)=\sum_{d\mid\gcd(m,n)}\chi(d)d^{k-1}a_{mn/d^2}\qquad(m\ge0),$$

where $\gcd(0,n)=n$, $\chi(d)=0$ when $\gcd(d,N)>1$, and a Fourier coefficient with a noninteger or negative index is interpreted as $0$.

## Facts & Assumptions

**Given:** $N\ge1$, $k\ge0$, a character $\chi$ with $\chi(-1)=(-1)^k$, a form $f\in M_k(\Gamma_0(N),\chi)$, and the normalized operators $T_n$ defined in [[def-hecke-operator-on-congruence-forms]].

[F1] [[def-hecke-operator-on-congruence-forms]]: For $\Gamma=\Gamma_1(N)$ and $\alpha_p=\operatorname{diag}(1,p)$, $T_p$ is the finite double-coset sum over $\Gamma_p\backslash\Gamma$, normalized by $1/p$.

[F2] [[def-congruence-modular-form-with-nebentypus]]: The space $M_k(\Gamma_0(N),\chi)$ consists of holomorphic functions with $f|_k\gamma=\chi(d)f$ for $\gamma\in\Gamma_0(N)$ and holomorphic expansions at every rational cusp; $S_k$ consists of those with zero constant term at every cusp.

[F3] [[def-congruence-subgroup-of-sl2-z]]: $\Gamma_1(N)$ is the subgroup with $a\equiv d\equiv1\pmod N$ and $N\mid c$, it is normal in $\Gamma_0(N)$, and $\Gamma_0(N)/\Gamma_1(N)$ is identified with $(\mathbb Z/N\mathbb Z)^\times$ by the lower-right entry.

[F4] [[thm-chinese-remainder-theorem]]: For a finite pairwise-coprime list of positive moduli, simultaneous residue classes determine a unique class modulo their product.

[F5] [[thm-bezout-identity]]: If two integers are coprime, there are integer coefficients whose linear combination is $1$.

[F6] [[def-hecke-operator-on-congruence-forms]]: $T_1$ is the identity; the prime-power recurrence defines $T_{p^r}$, and $T_n$ is the ordered product of its prime-power operators.

[F7] [[def-hecke-operator-on-congruence-forms]]: The character is extended by $\chi(d)=0$ when $\gcd(d,N)>1$.

## Proof

1.1 For a prime $p$ and $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_1(N)$, the definition gives $\gamma\in\Gamma_p$ if and only if $\alpha_p\gamma\alpha_p^{-1}\in\Gamma_1(N)$. Direct multiplication gives $\alpha_p\gamma\alpha_p^{-1}=\begin{pmatrix}a&b/p\\pc&d\end{pmatrix}$. Thus $\Gamma_p=\{\gamma\in\Gamma_1(N):p\mid\gamma_{12}\}$, so $\Gamma(Np)\subseteq\Gamma_p$ and the index is finite. If $p\mid N$, every element of $\Gamma_1(N)$ reduces modulo $p$ to $\begin{pmatrix}1&b\\0&1\end{pmatrix}$; the matrices $\delta_b=\begin{pmatrix}1&b\\0&1\end{pmatrix}$ realize all $p$ residues and $\Gamma_p$ is the kernel of this reduction, so they represent its left cosets. If $p\nmid N$, for each $x\in\mathbb F_p$ choose $t$ divisible by $N$ with $t\equiv x\pmod p$, possible because $N$ has an inverse modulo $p$. Then $\begin{pmatrix}1&t\\0&1\end{pmatrix}$ and $\begin{pmatrix}1&0\\t&1\end{pmatrix}$ lie in $\Gamma_1(N)$ and reduce to $E_{12}(x)$ and $E_{21}(x)$. These elementary matrices generate $SL_2(\mathbb F_p)$: for $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, if $a=0$ then $c\ne0$ and left multiplication by $E_{12}(1)$ makes the upper-left entry nonzero; if $a\ne0$, left multiplication by $E_{21}(-c/a)$ zeros the lower-left entry, then multiplication by $E_{12}(-ab)$ zeros the upper-right entry, leaving $\operatorname{diag}(a,a^{-1})$. This diagonal matrix is $w(a)w(-1)$, where $w(u)=E_{12}(u)E_{21}(-u^{-1})E_{12}(u)=\begin{pmatrix}0&u\\-u^{-1}&0\end{pmatrix}$. Thus reduction maps $\Gamma_1(N)$ onto $SL_2(\mathbb F_p)$. The image of $\Gamma_p$ is the lower-triangular subgroup $B$, and its full preimage is $\Gamma_p$, so $[\Gamma_1(N):\Gamma_p]=[SL_2(\mathbb F_p):B]=p+1$, since $|SL_2(\mathbb F_p)|=p(p^2-1)$ (choose a nonzero first column, then one of the $p$ second columns with determinant $1$) and $|B|=p(p-1)$ (choose its nonzero first diagonal entry and its arbitrary lower-left entry). By [F5], choose integers $a,c$ with $ap-cN=1$. The matrices $\delta_b$ and $\delta_\infty=\begin{pmatrix}ap&1\\cN&1\end{pmatrix}$ have determinant one and their first-row lines modulo $p$ are the $p+1$ distinct lines in $\mathbb P^1(\mathbb F_p)$. These lines distinguish the left cosets because left multiplication by $B$ scales the first row; if the first rows of $\delta_2$ and $\delta_1$ span the same line, then the first row of $\delta_2\delta_1^{-1}$ has the form $(\lambda,0)$, so its upper-right entry is zero and the quotient lies in $B$. Hence the matrices represent all left cosets. [given, F1, F3, F5, algebra]

1.2 The double-coset sum is modular for $\Gamma_1(N)$: right multiplication by any $\eta\in\Gamma_1(N)$ permutes $\Gamma_p\backslash\Gamma_1(N)$, and replacing a representative by its left $\Gamma_p$-equivalent representative does not change its summand because $\alpha_p\Gamma_p\alpha_p^{-1}\subseteq\Gamma_1(N)$. Each summand is holomorphic on $\mathbb H$. At a cusp $\sigma\infty$, the rational matrix $\alpha_p\delta\sigma$ sends $\infty$ to a rational cusp, so it factors as $\rho\beta$ with $\rho\in SL_2(\mathbb Z)$ sending $\infty$ to that cusp and $\beta$ upper triangular with positive diagonal. The nonnegative Fourier expansion of $f|_k\rho$ remains nonnegative after the affine change of variable from $\beta$; if its constant term is zero it remains zero. The finite sum therefore preserves both holomorphy at all cusps and cuspidality. [F1, F2, algebra, choose]

2.1 For each representative $\delta_b$, $\alpha_p\delta_b=\begin{pmatrix}1&b\\0&p\end{pmatrix}$, whose slash action is $f((z+b)/p)$. When $p\nmid N$, the additional representative satisfies $\alpha_p\delta_\infty=\begin{pmatrix}a&1\\cN&p\end{pmatrix}\begin{pmatrix}p&0\\0&1\end{pmatrix}$, where the first factor has determinant $ap-cN=1$ and lower-right entry $p$; its slash action on $f$ is therefore $\chi(p)p^k f(pz)$. Dividing these coset sums by $p$ gives $T_pf=p^{-1}\sum_{b=0}^{p-1}f((z+b)/p)+\chi(p)p^{k-1}f(pz)$ when $p\nmid N$, and only the first term when $p\mid N$. [step 1.1, F1, F2, algebra]

2.2 Fix a unit $e\bmod N$. Choose $d\equiv e\pmod N$ and, when $p\nmid N$, also $d\equiv1\pmod p$ by [F4]; if $p\mid N$, any lift of $e$ is coprime to $Np$. Thus $\gcd(d,Np)=1$, so [F5] gives $a,b\in\mathbb Z$ with $ad-bNp=1$. Put $\gamma=\begin{pmatrix}a&b\\Np&d\end{pmatrix}\in\Gamma_0(Np)$ and $\beta=\alpha_p^{-1}\gamma\alpha_p=\begin{pmatrix}a&bp\\N&d\end{pmatrix}\in\Gamma_0(N)$. Both have lower-right entry $e\bmod N$, so they represent the same diamond operator on every $\Gamma_1(N)$-invariant function. Both normalize $\Gamma_1(N)$; moreover $\beta$ normalizes $\Gamma_p$ because $\alpha_p\beta\alpha_p^{-1}=\gamma$ also normalizes $\Gamma_1(N)$. For $f$ in the $\chi$-eigenspace, reindexing the finite coset sum by $\delta\mapsto\beta^{-1}\delta\beta$ gives $$(T_pf)|_k\beta=\frac1p\sum_{\delta\in\Gamma_p\backslash\Gamma_1(N)}f|_k\alpha_p\delta\beta=\frac1p\sum_{\delta'}f|_k\alpha_p\beta\delta'=\frac1p\sum_{\delta'}f|_k\gamma\alpha_p\delta'=\chi(e)T_pf.$$ The reindexing is valid because conjugation by $\beta$ preserves both $\Gamma_p$ and $\Gamma_1(N)$. Step 1.2 gives $T_pf$ invariant under $\Gamma_1(N)$, so its actions by $\gamma$ and $\beta$ agree; hence it is a $\chi$-eigenvector for every diamond operator. [step 1.2, F1, F3, F4, F5, algebra, choose]

3.1 By [F6], every $T_n$ is formed from the $T_p$ by sums, scalar multiples, and compositions. Steps 1.2 and 2.2 therefore show that every $T_n$ preserves $M_k(\Gamma_0(N),\chi)$ and its subspace $S_k(\Gamma_0(N),\chi)$. [step 1.2, step 2.2, F6, algebra]

3.2 For $p\nmid N$, expand the two terms derived in step 2.1 and sum the $p$ roots of unity: $\frac1p\sum_{b=0}^{p-1}e^{2\pi i jb/p}$ is $1$ when $p\mid j$ and $0$ otherwise. The coefficient at $q^m$ is therefore $a_{pm}+\chi(p)p^{k-1}a_{m/p}$, with the second term zero unless $p\mid m$. If $p\mid N$, step 2.1 gives only $a_{pm}$, which is the same expression because $\chi(p)=0$ by [F7]. [step 2.1, F7, algebra]

4.1 Induct on $r\ge0$. For $T_{p^0}=I$ and $T_p$ the claim is step 3.2. For $r\ge2$, substitute the induction formulas for $T_{p^{r-1}}$ and $T_{p^{r-2}}$ into $T_{p^r}=T_pT_{p^{r-1}}-\chi(p)p^{k-1}T_{p^{r-2}}$. The first term contributes the indices $j$ with $p^j\mid pm$, the second contributes those with $p^{j+1}\mid m$, and the subtracted term cancels exactly the overlapping indices $1\le j<r$. What remains is $a_m(T_{p^r}f)=\sum_{0\le j\le r,\ p^j\mid m}\chi(p)^j p^{j(k-1)}a_{p^r m/p^{2j}}$. The index is an integer for every summand by $p^j\mid m$; when $p\mid N$, all terms with $j>0$ vanish. [step 3.2, F6, F7, induction, algebra]

5.1 Write $n=\prod_p p^{r_p}$ and compose the prime-power operators in the order fixed in [F6]. For two distinct primes $p,q$, applying the formula of step 4.1 twice gives a sum over pairs $j,\ell$ with $0\le j\le r_p$, $p^j\mid m$, $0\le\ell\le r_q$, and $q^\ell\mid m$; the divisibility conditions are independent because $p$ and $q$ are coprime. Each term has coefficient $\chi(p)^j p^{j(k-1)}\chi(q)^\ell q^{\ell(k-1)}$ and index $p^{r_p}q^{r_q}m/(p^{2j}q^{2\ell})$. Repeating this calculation for the finitely many prime factors yields one term for each tuple $(j_p)_p$ with $0\le j_p\le r_p$ and $p^{j_p}\mid m$. Set $d=\prod_p p^{j_p}$; these conditions say exactly $d\mid m$ and $d\mid n$, hence $d\mid\gcd(m,n)$. The coefficient is $\prod_p\chi(p)^{j_p}p^{j_p(k-1)}=\chi(d)d^{k-1}$, and the index is $mn/d^2$. This proves the displayed formula and completes the theorem. [step 4.1, F6, algebra] ∎
