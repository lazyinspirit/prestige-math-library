---
id: lem-vostokov-normalized-primary-element-critical-coefficient
kind: lemma
title: "Critical coefficient of a normalized Shafarevich primary element"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-vostokov-formal-exponential-integrality-and-inversion
  - lem-principal-unit-power-quotient-basis-from-leading-terms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "VI.3.1 and VI.5.2, pp.219–221 and 233–234; the coefficient calculation below is a local reconstruction."
verification: {}
---

## Statement

Use the local-field, coefficient-ring and Frobenius conventions of
`items/lem-vostokov-shafarevich-basis-for-principal-units.md`: odd $p$,
finite $F/\mathbb Q_p$, primitive $p^n$-th root $\zeta$ with $n\ge1$,
unramified coefficient ring $\mathcal O_0$, normalized uniformizer $\pi$,
$e=v_F(p)$ and $t=e/(p-1)$. Maximality of $n$ is allowed but not needed.
Set $h=t/p^{n-1}$ and $c=pt$. Impose the additional normalization
$$
z(X)=1+\sum_{i\ge h}b_iX^i,\qquad z(\pi)=\zeta, \qquad b_h\in\mathcal O_0^\times.
$$
Here $h$ is an integer. Put $s=z^{p^n}-1$ and
$\omega(a)=E_X(as)|_{X=\pi}$ for $a\in\mathcal O_0$.
Let $k$ be the residue field, $\alpha=\bar b_h$, and
$d=\alpha^{p^{n-1}}\in k^\times$. Then
$$
\omega(a)\in U_c, \qquad \overline{\frac{\omega(a)-1}{\pi^c}} =d^p\bar a^{p^n}, \qquad \omega(a)\in F^{\times p} \ \Longleftrightarrow\ \operatorname{Tr}_{k/\mathbb F_p}(\bar a)=0.
$$
The residue trace is the reduction modulo $p$ of
$\operatorname{Tr}_{F_0/\mathbb Q_p}(a)$. In particular nonzero trace
modulo $p$ detects a non-$p$-th-power exceptional generator for the
principal-unit quotient basis. For $n=1$ this is also the full
$p^n$-power trace criterion for this normalized lift. No higher-power
criterion or critical-depth assertion for an arbitrary lift is claimed.

## Statement references

[[lem-vostokov-formal-exponential-integrality-and-inversion]]

[[lem-principal-unit-power-quotient-basis-from-leading-terms]]

[Fesenko–Vostokov, VI.3 and VI.5](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The supplied local-field and Frobenius data, and the normalized
expansion in the Statement. We use $U_m=1+\pi^m\mathcal O_F$.

[F1] The formal exponential is integral, additive to multiplicative, and
respects integer powers; its resulting integral series converges at $\pi$.
[[lem-vostokov-formal-exponential-integrality-and-inversion]]

[F2] For $\lambda=\overline{p/\pi^e}$ and $b\in U_c$, the criterion
$b\in F^{\times p}$ is that $\overline{(b-1)/\pi^c}$ belong to the image
of $x\mapsto x^p+\lambda x$ on $k$.
[[lem-principal-unit-power-quotient-basis-from-leading-terms]]

## Proof

**Given:** The data and normalization above. All residue powers below
are taken in $k$; $\varphi$ reduces to $x\mapsto x^p$.

1.1 Put $\xi=\zeta^{p^{n-1}}$. All $1-\xi^i$ for $1\le i<p$ have the same valuation, since $(\xi^i-1)/(\xi-1)$ reduces to the nonzero residue of $i$. Their product is $p$, so $v_F(\xi-1)=t$. For a principal unit of exact depth $m<t$, its $p$-th power has exact depth $pm$ by the binomial expansion; for $m\ge t$, its $p$-th power has depth at least $pt>t$. Working backwards from $\xi$, the successive primitive roots therefore have depths $t/p,t/p^2,\ldots,t/p^{n-1}$. Thus $h=v_F(\zeta-1)$ is integral. Repeatedly using the first binomial rule gives $\overline{(\xi-1)/\pi^t}=\alpha^{p^{n-1}}=d$. The binomial expansion of $\xi^p=1$ at depth $pt$ gives $d^p+\lambda d=0$, hence $\lambda=-d^{p-1}$. [given, algebra]

2.1 Write $q=z-1$. For a series $H=\sum H_iX^i$, use the weighted bound $w(H)=\inf_i(v_F(H_i)+i)$, which bounds $v_F(H(\pi))$ whenever the series converges. For $1\le k\le p^n$, one has $v_p\binom{p^n}{k}=n-v_p(k)$. Indeed $\binom{p^n}{k}=(p^n/k)\binom{p^n-1}{k-1}$, and the latter binomial is a unit: modulo $p$, the coefficients of $(1+T)^{p^n-1}$ are $(-1)^i$ through degree $p^n-1$. If $r=v_p(k)$ and $j\ge0$, the $k$-th binomial contribution to $p^{-j}\Delta^j(as)$ has weighted bound $(n-r-j)e+p^jkh\ge(n-r-j)e+p^{r+j}h$. For integers $u\ge0$, the function $B(u)=(n-u)e+p^u h$ decreases up to $u=n-1$, is equal at $n-1,n$, and increases thereafter: its difference is $B(u+1)-B(u)=e(p^{u-n+1}-1)$. Its minimum is $c$. Consequently every contribution has bound at least $c$. Equality requires $k=p^r$ and $r+j\in\{n-1,n\}$. The coefficient $a$ can only increase these bounds. [step 1.1, given, algebra]

3.1 These bounds justify the analytic operations at $\pi$. For each fixed $j$, the coefficients of $p^{-j}\Delta^j(as)$ have valuations plus degree tending to infinity, since $s$ is integral. As $j\to\infty$, its bound is at least $\min_{0\le r\le n}B(r+j)\to\infty$. Thus $L=\sum_{j\ge0}p^{-j}\Delta^j(as)$ converges in the complete ring of series whose coefficient valuations plus degree tend to infinity, equipped with the weighted norm. Completeness follows by coefficientwise limits of Cauchy sequences and the uniform tail bound. Multiplication is continuous because weighted bounds add. Since $w(L)\ge c>t$, the exponential converges there: $v_F(m!)\le t(m-1)$ gives $w(L^m/m!)\ge mc-t(m-1)\to\infty$. These series agree coefficientwise with the formal defining series of $E_X(as)$; evaluation is continuous in this norm, so $\omega(a)=\exp(L(\pi))$. For $m\ge2$, the same bound is strictly greater than $c$. It follows that $\omega(a)\equiv1+L(\pi)\pmod{\pi^{c+1}}$, proving membership in $U_c$. This exchanges evaluation and exponential only after establishing the required bounds. [F1, step 2.1, algebra]

4.1 The $j=0$ term of $L(\pi)$ is $as(\pi)=0$. For $j\ge1$, step 2.1 leaves only $k=p^r$ with $j+r=n-1$ or $n$ at depth $c$. In addition, only the leading coefficient $b_h$ of $q$ contributes at that depth. The binomial quotient $p^{-(n-r)}\binom{p^n}{p^r}$ reduces to $1$, by the coefficient computation in step 2.1 and oddness of $p$. If $j+r=n-1$, the resulting normalized coefficient is $\lambda d\bar a^{p^j}=-d^p\bar a^{p^j}$; these terms run over $1\le j\le n-1$. If $j+r=n$, it is $d^p\bar a^{p^j}$; these terms run over $1\le j\le n$. Subtracting the two sums leaves $d^p\bar a^{p^n}$. Step 3.1 gives the asserted coefficient of $\omega(a)$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Since $\lambda=-d^{p-1}$, one has $(dy)^p+\lambda dy=d^p(y^p-y)$. On the finite field $k$ the image of $y\mapsto y^p-y$ is exactly the trace-zero subspace. Indeed its kernel is $\mathbb F_p$, its image has codimension one, and its image has zero trace. The trace functional is nonzero because its defining polynomial $T+T^p+\cdots+T^{p^{f-1}}$, where $|k|=p^f$, is a nonzero polynomial of degree less than $|k|$; hence its kernel also has codimension one. By step 4.1 and [F2], $\omega(a)$ is a $p$-th power exactly when $\operatorname{Tr}_{k/\mathbb F_p}(\bar a^{p^n})=0$, equivalent to $\operatorname{Tr}_{k/\mathbb F_p}(\bar a)=0$. Finally $\operatorname{Tr}_{F_0/\mathbb Q_p}(a)=\sum_{j=0}^{f-1}\varphi^j(a)$ reduces to this residue trace, since $F_0/\mathbb Q_p$ is unramified with Frobenius generator. This proves the stated criterion and its nonzero-trace consequence. [F2, step 1.1, step 4.1, algebra] ∎

## Authoring boundary

This lemma depends on the formal-exponential and filtration prerequisites.
The full trace criterion modulo $p^n$ for $n>1$ and invariance modulo
$F^{\times p^n}$ under changing lifts remain separate obligations.
Critical-depth membership for every lift allowed in the parent is false;
the explicit counterexample is recorded in the batch-93 research evidence.
