---
id: lem-waring-complete-monomial-exponential-sum
kind: lemma
title: "Complete monomial exponential sums at prime powers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-waring-singular-series-and-singular-integral
  - def-exponential-character-e
  - def-real-power
  - def-p-adic-valuation
  - thm-fundamental-theorem-of-arithmetic
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - thm-chinese-remainder-theorem
proof_strategy: cases
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.2, Lemmas 6.14–6.17, printed pp. 44–47; only the finite-field and p-adic methods are used as cross-checks"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, singular-series convergence input, printed pp. 1616–1621"
---

## Statement

For each integer $k\ge2$ and each $\varepsilon>0$ there is a constant $C_{k,\varepsilon}$ such that, for every integer $q\ge1$ and every integer $a$ whose only positive common divisor with $q$ is $1$,
$$\left|S_k(q,a)\right|=\left|\sum_{x=0}^{q-1}e\!\left(\frac{ax^k}{q}\right)\right|\le C_{k,\varepsilon}q^{1-1/k+\varepsilon}.$$
For $q=1$, the only residue is $a=0$ and the sum is $1$.

## Statement references

[Assing, §6.2, Lemmas 6.14–6.17](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** An integer $k\ge2$, a positive integer $q$, a reduced residue $a\pmod q$, and $e(t)=\exp(2\pi i t)$.

[F1] $S_k(q,a)=\sum_{x=0}^{q-1}e(ax^k/q)$ ([[def-waring-singular-series-and-singular-integral]], [[def-exponential-character-e]]).

[F2] For every prime $p$, the multiplicative group $\mathbb F_p^\times$ is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[F3] For a prime $p$ and positive integer $m$, $v_p(m)$ is the unique nonnegative integer $\tau$ such that $p^\tau\mid m$ and $p^{\tau+1}\nmid m$ ([[def-p-adic-valuation]]).

[F4] Finite geometric sums of the characters $u\mapsto e(ju/M)$ vanish unless the frequency is $0$ modulo $M$ ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F5] Every positive integer has a unique factorization into prime powers, and coprime moduli are combined bijectively by the Chinese remainder theorem ([[thm-fundamental-theorem-of-arithmetic]], [[thm-chinese-remainder-theorem]]).

[F6] For every $\varepsilon>0$, the function $x\mapsto x^\varepsilon$ on positive reals is increasing and multiplicative ([[def-real-power]]).

## Proof

**Proof technique:** prime-power cases followed by the Chinese remainder theorem.

1.1 Let $p$ be prime and $p\nmid a$. Write $\delta=\gcd(k,p-1)$ and choose a generator $g$ of $\mathbb F_p^\times$ by [F2]. The map $x\mapsto x^k$ has image the powers $g^u$ with $\delta\mid u$ and has exactly $\delta$ preimages for each element of its image. Define $\chi(g^u)=e(u/\delta)$; this is well-defined because $\delta\mid p-1$. For $t\ne0$, the finite geometric sum gives $\#\{x\in\mathbb F_p:x^k=t\}=\sum_{j=0}^{\delta-1}\chi(t)^j$; at $t=0$ the same identity holds if the $j=0$ term is set to $1$ and all $j>0$ terms to $0$. [F2, F4, construct]

1.2 Summing this root-count identity against $e(at/p)$ gives $S_k(p,a)=\sum_{j=1}^{\delta-1}\tau_j(a)$, since the $j=0$ term is $\sum_{t\bmod p}e(at/p)=0$ by [F4], where $\tau_j(a):=\sum_{t\ne0}\chi(t)^j e(at/p)$. Each $\chi^j$ for $1\le j<\delta$ is nontrivial. Substituting $t=ay$ shows $|\tau_j(a)|=|\tau_j(1)|$. With $\psi=\chi^j$, put $t=uy$ in the square of the latter modulus to obtain
$$|\tau_j(1)|^2=\sum_{u\ne0}\psi(u)\sum_{y\ne0}e(y(u-1)/p)=(p-1)-\sum_{u\ne1}\psi(u)=p,$$
because the inner sum is $p-1$ for $u=1$ and $-1$ otherwise, while $\sum_{u\ne0}\psi(u)=0$ by the geometric sum [F4]. Thus $|S_k(p,a)|\le(\delta-1)\sqrt p\le(k-1)p^{1-1/k}$. [F1, F2, F4, step 1.1, algebra]

2.1 Suppose $p\nmid k$ and $h\ge2$. Every residue $x\pmod {p^h}$ has a unique expression $x=z+p^{h-1}y$, with $z\pmod {p^{h-1}}$ and $y\pmod p$. Modulo $p^h$, the binomial expansion gives $x^k\equiv z^k+kz^{k-1}p^{h-1}y$, since every term of order at least two contains $p^{2h-2}$ and $2h-2\ge h$. For fixed $z$, summing over $y$ therefore gives zero unless $p\mid z$, and gives $p$ when $p\mid z$, by [F4]. Writing $z=pw$ then yields
$$S_k(p^h,a)=p\sum_{w\bmod p^{h-2}}e\!\left(\frac{aw^k}{p^{h-k}}\right),$$
where the exponent is an integer phase when $h\le k$. Hence $S_k(p^h,a)=p^{h-1}$ for $2\le h\le k$. When $h>k$, the summand in the displayed sum is periodic modulo $p^{h-k}$, and $w$ ranges over $p^{h-2}$ residues, so each residue modulo $p^{h-k}$ occurs $p^{k-2}$ times. Including the outside factor $p$ gives $S_k(p^h,a)=p^{k-1}S_k(p^{h-k},a)$. [F1, F4, algebra]

2.2 The base case $h=1$ is step 1.2, and for $2\le h\le k$ we have $p^{h-1}\le p^{h(1-1/k)}$. Repeatedly applying the recurrence in step 2.1 reduces every $h>k$ to one of these base exponents and multiplies the bound by $p^{k-1}$ for each decrease by $k$. Thus, when $p\nmid k$, $|S_k(p^h,a)|\le(k-1)p^{h(1-1/k)}$ for all $h\ge1$. [step 1.2, step 2.1, algebra]

3.1 Suppose $p\mid k$ and write $\tau=v_p(k)\ge1$ by [F3]. Since $2^\tau\le p^\tau\le k<2^k$, one has $\tau\le k-1$. Put $H_k=2k+3$. If $h>H_k$, let $L=h-\tau-1$; then $h>k$ and $L\ge k+4\ge2$. Every residue modulo $p^h$ has a unique expression $x=z+p^L y$ with $z\pmod {p^L}$ and $y\pmod {p^{\tau+1}}$. For $2\le j\le k$, the identity $j\binom{k}{j}=k\binom{k-1}{j-1}$ gives $v_p(\binom{k}{j})\ge\tau-v_p(j)$. Also $(j-1)L\ge v_p(j)+1$: if $p=2$, $v_2(j)\le j-1$ and $L\ge2$; if $p$ is odd, $v_p(j)\le j-2$ and $L\ge1$. Therefore all terms of degree at least two in the binomial expansion of $(z+p^Ly)^k$ vanish modulo $p^h$, and
$$x^k\equiv z^k+p^{h-1}(k/p^\tau)z^{k-1}y\pmod {p^h}.$$
For $p\nmid z$, the coefficient $a(k/p^\tau)z^{k-1}$ is nonzero modulo $p$, so the sum over $y$ vanishes by [F4]. The remaining residues are exactly those with $p\mid x$. [F3, F4, algebra]

3.2 Write the surviving residues as $x=pw$, with $w\pmod {p^{h-1}}$. Since $h>k$, the phase $e(ap^kw^k/p^h)$ has period $p^{h-k}$ and each residue modulo $p^{h-k}$ occurs $p^{k-1}$ times. Consequently $S_k(p^h,a)=p^{k-1}S_k(p^{h-k},a)$ whenever $p\mid k$ and $h>H_k$. For $1\le h\le H_k$, the trivial bound $|S_k(p^h,a)|\le p^h$ is at most $k^{H_k/k}p^{h(1-1/k)}$, since $p\le k$. Applying the recurrence repeatedly proves $|S_k(p^h,a)|\le k^{H_k/k}p^{h(1-1/k)}$ for all $h\ge1$ when $p\mid k$. [F1, step 3.1, algebra]

4.1 By [F5], factor $q=\prod_{m=p^h\parallel q}m$ into pairwise coprime prime powers. For each such $m$, put $Q_m=q/m$ and choose $\overline Q_m$ with $Q_m\overline Q_m\equiv1\pmod m$. If $x_m$ is the residue of $x$ modulo $m$, the Chinese remainder theorem gives $x^k/q\equiv\sum_m\overline Q_m x_m^k/m\pmod1$. Thus the summand factors into local characters with coefficients $a\overline Q_m$ coprime to $m$, and the residue-variable bijection factors the entire sum into the corresponding prime-power sums. Steps 2.2 and 3.2 therefore give
$$|S_k(q,a)|\le C_k^{\omega(q)}q^{1-1/k},$$
where $C_k:=\max(k-1,k^{H_k/k})$ and $\omega(q)$ is the number of distinct prime divisors of $q$. [F5, step 2.2, step 3.2]

4.2 Fix $\varepsilon>0$ and choose an integer $P_0$ with $P_0^\varepsilon\ge C_k$. Prime factors below $P_0$ contribute at most the fixed factor $C_k^{P_0}$, while each distinct prime factor at least $P_0$ contributes at most its $\varepsilon$-power. Hence $C_k^{\omega(q)}\le C_k^{P_0}q^\varepsilon$ by unique prime factorization and [F6], proving the asserted bound; the $q=1$ case is the stated convention. [F5, F6, step 4.1] ∎
