---
id: thm-cyclotomic-weak-leopoldt-by-kummer-splitting
kind: theorem
title: Cyclotomic weak Leopoldt bound for totally real fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-totally-imaginary-cyclotomic-class-group-module-torsion
  - lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels
  - thm-dirichlet-unit-theorem
  - thm-kummer-pairing-is-perfect
  - thm-p-adic-weierstrass-preparation-for-iwasawa-power-series
  - lem-weierstrass-division-for-p-adic-power-series
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
sources:
  references:
    - title: Romyar Sharifi, Iwasawa Theory
      url: https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
      locator: Section 3.3, Theorem 3.3.4 and its complete proof; the finite Kummer and power-series reduction is written out below.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $E$ be a totally real number field, $p$ an odd prime, and $E_\infty/E$ its cyclotomic $\mathbb Z_p$-extension, with degree-$p^n$ layers $E_n$. For any number field $L$, let $U_L=\mathcal O_L^\times\otimes_\mathbb Z\mathbb Z_p$, let $U_{L,v}^{(p)}$ be the pro-$p$ completion of $\mathcal O_{L_v}^\times$ for $v\mid p$, and let $\delta(L)$ be the $\mathbb Q_p$-dimension of the kernel of the diagonal map $U_L\otimes\mathbb Q_p\to\bigoplus_{v\mid p} U_{L,v}^{(p)}\otimes\mathbb Q_p$. Then the nonnegative integers $\delta(E_n)$ are bounded independently of $n$.

## Statement references

[[thm-totally-imaginary-cyclotomic-class-group-module-torsion]]

[[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[[thm-dirichlet-unit-theorem]]

[[thm-kummer-pairing-is-perfect]]

[[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]]

[[lem-weierstrass-division-for-p-adic-power-series]]

## Facts & Assumptions

**Given:** The choice assumptions, $E,p$ and the cyclotomic layers in the Statement.

[F1] For a totally imaginary number field, its cyclotomic class-group inverse-limit module is finitely generated torsion over $\mathbb Z_p\llbracket T\rrbracket$. [[thm-totally-imaginary-cyclotomic-class-group-module-torsion]]

[F2] The totally imaginary class-group inverse limit is the Galois group of the maximal finite-place-unramified abelian pro-$p$ extension of its cyclotomic tower. [[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[F3] Number-field units form a finitely generated abelian group. [[thm-dirichlet-unit-theorem]]

[F4] The Kummer pairing is perfect for finite radical subgroups in a field containing the required roots of unity. [[thm-kummer-pairing-is-perfect]]

[F5] Every nonzero $f\in\mathbb Z_p\llbracket T\rrbracket$ is $p^a uP$ with $u$ a unit and $P$ distinguished monic; $\mathbb Z_p\llbracket T\rrbracket/(P)$ is finite free over $\mathbb Z_p$. [[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]] [[lem-weierstrass-division-for-p-adic-power-series]]

[A1] AC, Countable Choice and Dependent Choice are available. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** Annihilator bound for the split unramified Iwasawa module and finite Kummer extensions of locally trivial units.

1.1 Put $K=E(\mu_p)$, $K_\infty=E_\infty(\mu_p)$ and $K_n=E_n(\mu_p)$. The field $K$ is totally imaginary and $K_\infty/K$ is its cyclotomic $\mathbb Z_p$-extension. For each $n$, inclusion of units followed by the finite norm is multiplication by $[K_n:E_n]$, a nonzero scalar over $\mathbb Q_p$; local inclusions commute with the diagonal maps. Hence $\delta(E_n)\le\delta(K_n)$. It is enough to bound the latter. [A1, given, construct, algebra]

2.1 By [F1] and [F2], the Galois group $X$ of the maximal unramified abelian pro-$p$ extension of $K_\infty$ is finitely generated torsion over $R=\mathbb Z_p\llbracket T\rrbracket$. Let $X'$ be its quotient corresponding to the maximal subextension in which every prime above $p$ splits completely; it is again a finitely generated torsion $R$-module. A product of finitely many annihilators gives nonzero $fX'=0$. Write $f=p^auP$ using [F5]. Then $p^aX'$ is killed by $P$, hence is a finitely generated $\mathbb Z_p$-module by [F5]. Choose an integer $B$ bounding the size of a $\mathbb Z_p$ generating set of this one module. For every $l>a$, any surjection $X'\twoheadrightarrow(\mathbb Z/p^l)^d$ induces a surjection $p^aX'\twoheadrightarrow(\mathbb Z/p^{l-a})^d$, so $d\le B$. Retain the field from step 1.1. [F1, F2, F5, A1, step 1.1, construct, algebra]

3.1 Fix one $n$, put $L=K_n$ and $d=\delta(L)$, and choose one $l>a$. By [F3] the $p$-completed global unit group modulo its finite torsion is a finite free $\mathbb Z_p$-module. Its localization map has finitely generated image and finite torsion. The inverse image of that torsion is a saturated submodule of rank $d$, so the elementary divisor algorithm supplies $d$ vectors forming part of a basis. Let $p^k$ kill the torsion in the local image. Approximate their finitely many $\mathbb Z_p$ coefficients by integer coefficients modulo $p^{l+k}$. The resulting actual units $\beta_1,\ldots,\beta_d\in\mathcal O_L^\times$ have independent images in $L^\times/(\mu(L)(L^\times)^{p^l})$: a root in $L$ of a unit is itself a unit, and their coordinate vectors remain part of an invertible matrix modulo $p^l$. Their local images satisfy $\iota_v(\beta_i)^{p^k}\in(\mathcal O_{L_v}^\times)^{p^{l+k}}$ after the harmless prime-to-$p$ torsion component is restored, since raising to $p^{l+k}$ is bijective on that component. This is a finite choice for the single $n,l$. Use the integers fixed in step 2.1. [F3, A1, step 2.1, construct, algebra]

4.1 Write $s$ for the largest integer with $\mu_{p^s}\subset L$. Because $p$ is odd, the unique degree-$p$ subextension of $K_\infty/L$ is $L(\mu_{p^{s+1}})$: the cyclotomic character has image a closed subgroup of $1+p^s\mathbb Z_p$ not contained in $1+p^{s+1}\mathbb Z_p$. If $x\in L^\times$ becomes a $p$th power in $K_\infty$, either it was already a $p$th power in $L$ or the degree-$p$ extension $L(x^{1/p})$ is this unique subextension. Kummer nondegeneracy [F4] then gives $x\in\mu(L)(L^\times)^p$. Repeatedly divide a putative relation by the greatest common power of $p$ in its exponents. The remaining relation would contradict independence modulo $\mu(L)(L^\times)^p$ from step 3.1. Thus the $\beta_i$ give a subgroup $(\mathbb Z/p^l)^d$ in $K_\infty^\times/(K_\infty^\times)^{p^l}$. [F4, step 3.1, construct, algebra]

5.1 Form $N=K_\infty(\beta_1^{1/p^l},\ldots,\beta_d^{1/p^l})$. The field $K_\infty$ contains $\mu_{p^l}$, so [F4] and step 4.1 give $\operatorname{Gal}(N/K_\infty)\cong(\mathbb Z/p^l)^d$. At a finite place away from $p$, each $\beta_i$ is a unit and $X^{p^l}-\beta_i$ has separable reduction, so adjoining its roots is unramified. At a prime over $p$, step 3.1 gives $\beta_i^{p^k}=u_i^{p^{l+k}}$ for a local unit $u_i$; hence $\beta_i/u_i^{p^l}$ is a $p^k$-th root of unity. Its $p^l$-th root lies in the local field because $K_\infty$ contains all $p$-power roots of unity. Thus $\beta_i$ is already a $p^l$-th power at every prime above $p$, so those primes split completely in $N$. [F4, step 3.1, step 4.1, construct, algebra]

6.1 By [F2] and step 5.1, $N$ belongs to the split unramified extension defining $X'$. Restriction gives $X'\twoheadrightarrow(\mathbb Z/p^l)^d$. Step 2.1 bounds $d$ by the single integer $B$, independently of $n$; step 1.1 gives $\delta(E_n)\le d\le B$. This proves the stated uniform bound without assuming $\delta(E_n)=0$ or a vanishing Iwasawa $\mu$-invariant. [F2, step 1.1, step 2.1, step 5.1, algebra, discharge-construct] ∎
