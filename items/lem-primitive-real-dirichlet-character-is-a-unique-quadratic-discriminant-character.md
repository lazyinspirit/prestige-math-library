---
dependency_level: 0
id: lem-primitive-real-dirichlet-character-is-a-unique-quadratic-discriminant-character
kind: lemma
title: Every primitive real Dirichlet character has a unique fundamental discriminant
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
deps:
- def-dirichlet-character-modulo-q
- def-induced-dirichlet-character
- def-primitive-dirichlet-character-and-conductor
- def-principal-dirichlet-character
- thm-fundamental-theorem-of-arithmetic
- thm-unit-group-chinese-remainder-decomposition
- cor-order-of-element-divides-group-order
- lem-group-homomorphism-basic-properties
- prop-legendre-symbol-on-units-is-homomorphism
- def-legendre-symbol
- thm-legendre-symbol-multiplicativity
- thm-unit-group-modulo-two-power-structure
- thm-quadratic-reciprocity
- thm-first-supplement-to-quadratic-reciprocity
- thm-second-supplement-to-quadratic-reciprocity
justified_by: []
axiom_use: None. Only finite groups, finite prime factorization and finite CRT are used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: W. Stein, Elementary Number Theory, Sections 4.1 and 4.3 (quadratic symbols and reciprocity)
    url: https://wstein.org/ent/ent.pdf
    locator: Context for the standard quadratic-character classification; the local finite proof is reconstructed from the explicitly cited library interfaces. No source theorem is imported.
verification: {}
---

## Statement

Let $q\ge1$ and let $\chi$ be a primitive Dirichlet character modulo $q$ whose arithmetic function is real-valued. If $\chi$ is nonprincipal, there is a unique fundamental quadratic discriminant $D\ne1$ satisfying
$$|D|=q,\qquad \operatorname{sgn}D=\chi(-1),\qquad \chi(n)=\left(\frac Dn\right)\quad(n\in\mathbb Z).$$
Here fundamental quadratic discriminant means numerically: $D$ is squarefree with $D\equiv1\pmod4$, or $D=4m$ with $m$ squarefree and $m\equiv2,3\pmod4$; squarefreeness of a signed integer means squarefreeness of its absolute value. The principal primitive case is exactly $q=1$, with $D=1$ and $\chi(n)=(1/n)=1$ for all integers $n$.

The Kronecker symbol is defined on every denominator as follows. For an odd prime $\ell$, $(D/\ell)$ is the Legendre symbol; $(D/2)=0$ for even $D$ and $(D/2)=(-1)^{(D^2-1)/8}$ for odd $D$; $(D/-1)=\operatorname{sgn}D$. For $n\ne0$, multiply these values over the signed prime factorization of $n$; and $(D/0)=1$ if $|D|=1$, and $0$ otherwise.

More explicitly, put $P=\prod_{p\mid q,\ p\text{ odd}}p^*$, where $p^*=(-1)^{(p-1)/2}p$ and an empty product is one. Then $q=2^a\prod_{p\mid q,\ p\text{ odd}}p$ with $a\in\{0,2,3\}$, and $D=\delta P$ for the unique local factor $\delta\in\{1,-4,8,-8\}$ selected in the proof. On units,
$$\chi(n)=\lambda(n)\prod_{p\mid q,\ p\text{ odd}}\left(\frac np\right),$$
where $\lambda=1,\chi_4,\chi_8,\chi_4\chi_8$ respectively for $\delta=1,-4,8,-8$, with $\chi_4(n)=(-1)^{(n-1)/2}$ and $\chi_8(n)=(-1)^{(n^2-1)/8}$ on odd $n$. Off the units $\chi$ is zero. There is no choice axiom hypothesis.

## Facts & Assumptions

**Given:** The primitive real character and modulus in the Statement.

[F1] A Dirichlet character is a unit-group homomorphism, extended by zero off the units; the principal one is the trivial homomorphism. Induction from a divisor is pullback on unit groups, followed by extension by zero at nonunits of the larger modulus. Primitive means not induced from a proper divisor, including divisor one. [[def-dirichlet-character-modulo-q]] [[def-principal-dirichlet-character]] [[def-induced-dirichlet-character]] [[def-primitive-dirichlet-character-and-conductor]]

[F2] Positive integers have unique finite prime factorizations, and finite coprime CRT gives an isomorphism of unit groups, including the empty product. [[thm-fundamental-theorem-of-arithmetic]] [[thm-unit-group-chinese-remainder-decomposition]]

[F3] An element of a finite group has order dividing the group order, and homomorphisms preserve integer powers. [[cor-order-of-element-divides-group-order]] [[lem-group-homomorphism-basic-properties]]

[F4] For an odd prime $p$, the Legendre symbol on units is the unique nontrivial homomorphism to $\{\pm1\}$. Legendre symbols are multiplicative for all integer numerators and vanish precisely at numerators divisible by $p$. [[prop-legendre-symbol-on-units-is-homomorphism]] [[thm-legendre-symbol-multiplicativity]] [[def-legendre-symbol]]

[F5] For $a\ge3$, every unit modulo $2^a$ is uniquely $(-1)^\varepsilon5^j$, where $\varepsilon\in\{0,1\}$ and $j$ is taken modulo $2^{a-2}$. [[thm-unit-group-modulo-two-power-structure]]

[F6] For distinct odd primes $p,\ell$, quadratic reciprocity gives $(p/\ell)(\ell/p)=(-1)^{(p-1)(\ell-1)/4}$. The supplements give $(-1/p)=(-1)^{(p-1)/2}$ and $(2/p)=(-1)^{(p^2-1)/8}$. [[thm-quadratic-reciprocity]] [[thm-first-supplement-to-quadratic-reciprocity]] [[thm-second-supplement-to-quadratic-reciprocity]]

## Proof

**Proof technique:** direct.

1.1 Each unit has finite order by [F3]. Its character value is a nonzero real number of finite order, hence belongs to $\{1,-1\}$: if $x^r=1$ with $x\in\mathbb R\setminus\{0\}$, then $|x|^r=1$ forces $|x|=1$. Factor $q$ by [F2]. Under unit CRT, define each local character by inserting its argument in that factor and identities in all others. Multiplying these finitely many coordinate tuples shows that $\chi$ on units is the product of its local sign characters. [F1, F2, F3, given, construct, algebra]

2.1 Each local character is primitive at its prime-power modulus. Indeed, if the local character at $p^b$ factors through $p^c$ with $0\le c<b$ (where $p^0=1$), combine that homomorphism with the unchanged other local characters by CRT. This is a character on units modulo $q/p^{b-c}$ whose pullback is $\chi$ on units modulo $q$. Its extension by zero induces $\chi$ modulo $q$, contradicting primitivity. Reduction of units between prime powers is surjective: any integer prime to $p$ remains a unit at every higher power; CRT combines this with the other factors. [F1, F2, step 1.1, construct, algebra]

3.1 Let $p$ be odd and $p^b$ its exact power in $q$. The reduction kernel from units modulo $p^b$ to units modulo $p$ consists of the $p^{b-1}$ distinct classes $1+pt$ for $0\le t<p^{b-1}$. It is a finite group of odd order, so [F3] gives odd order for every element. Its image under a sign character must be $1$, since $(-1)^r=-1$ for odd $r$. Thus the local character is trivial on the kernel and descends modulo $p$: two lifts of the same unit differ by a kernel element, so their images agree and define a homomorphism on units modulo $p$. Step 2.1 forces $b=1$ and forces this descended character to be nontrivial. By [F4] it is $(\cdot/p)$. [F3, F4, step 1.1, step 2.1, construct, algebra]

3.2 Write $2^a$ for the exact power of two in $q$, allowing $a=0$. If $a=0$, put $\lambda=1$ and $\delta=1$. If $a=1$, the unit group modulo two is trivial, contrary to step 2.1, so this cannot occur. If $a=2$, the units are $1,-1$; their only nontrivial sign character sends $-1$ to $-1$, is $\chi_4$, and has $\delta=-4$. [F1, step 1.1, step 2.1, construct, algebra]

3.3 If $a\ge3$, [F5] shows that a sign character is determined by its values on $-1$ and $5$, and depends only on $\varepsilon$ and $j$ modulo two in $(-1)^\varepsilon5^j$. Reduction modulo eight retains exactly these data, by [F5] at $a=3$. Hence it descends modulo eight, forcing $a=3$ by step 2.1. If its value at $5$ were $1$, it would depend only on $\varepsilon$, and descend modulo four since $5\equiv1\pmod4$ and $-1\equiv3\pmod4$. Thus its value at $5$ is $-1$. The odd residues $1,3,5,7$ show that $\chi_8$ has values $1,-1,-1,1$, and $\chi_4$ has values $1,-1,1,-1$. In particular $\chi_8(-1)=1$, $\chi_8(5)=-1$, $\chi_4(-1)=-1$, and $\chi_4(5)=1$. The two possibilities are therefore $\lambda=\chi_8$, $\delta=8$ and $\lambda=\chi_4\chi_8$, $\delta=-8$, according as the local value at $-1$ is $1$ or $-1$. The residue tables justify these formulas on every odd integer, including negative representatives. [F5, step 1.1, step 2.1, construct, algebra]

4.1 Put $P=\prod_{p\mid q,\ p\text{ odd}}p^*$ and $D=\delta P$ with the factors just determined. Each $p^*$ is $1$ modulo four, so $P$ is signed odd squarefree and $P\equiv1\pmod4$. If $\delta=1$, $D=P$ is fundamental; if $\delta=-4$, $D=4(-P)$ with $-P\equiv3\pmod4$ squarefree; and if $\delta=\pm8$, $D=4(\pm2P)$ with $\pm2P\equiv2\pmod4$ squarefree. Steps 3.1–3.3 give $|D|=q$. The first supplement gives $(-1/p)=\operatorname{sgn}(p^*)$, and the local tables give $\lambda(-1)=\operatorname{sgn}\delta$. Taking the finite product in step 1.1 proves $\chi(-1)=\operatorname{sgn}D$. [F2, F6, step 1.1, step 3.1, step 3.2, step 3.3, construct, algebra]

5.1 Let $\ell$ be an odd prime not dividing $q$. If $t=(p-1)/2$, [F4] and [F6] give $(p^*/\ell)=(-1/\ell)^t(p/\ell)=(\ell/p)$: the sign from $(-1/\ell)^t$ cancels the reciprocity sign. Also $(-4/\ell)=\chi_4(\ell)$, $(8/\ell)=\chi_8(\ell)$ and $(-8/\ell)=\chi_4(\ell)\chi_8(\ell)$ by the supplements and multiplicativity. Multiplying over the numerator factors of $D$ shows $(D/\ell)=\lambda(\ell)\prod_p(\ell/p)=\chi(\ell)$. For an odd prime $\ell\mid q$, steps 3.1 and 4.1 give $\ell\mid D$, so both $(D/\ell)$ and $\chi(\ell)$ are zero. [F1, F4, F6, step 1.1, step 3.1, step 3.2, step 3.3, step 4.1, algebra]

6.1 If $q$ is even, $D$ is even and $(D/2)=\chi(2)=0$. If $q$ is odd, $D=P$ is odd. For odd integers $u,v$, the identity $(u^2v^2-1)/8=(u^2-1)/8+(v^2-1)/8+(u^2-1)(v^2-1)/8$ shows that the parity on the left is the sum of the first two parities, since the last term is even. Thus $(D/2)=\prod_p(p^*/2)=\prod_p(-1)^{(p^2-1)/8}=\prod_p(2/p)=\chi(2)$ by the second supplement and the Kronecker rule; empty products also satisfy this. At denominator $-1$, the Kronecker rule and step 4.1 give $(D/-1)=\chi(-1)$. Both functions are multiplicative on nonzero integers: for $\chi$, multiply units and note that a product is a nonunit exactly when some factor is a nonunit; for the Kronecker symbol this is its finite-factor definition. Finite signed prime factorization and step 5.1 therefore prove equality at every nonzero integer. In particular every integer not coprime to $q$ has a prime factor shared with $D$ and both values vanish. [F1, F2, F6, step 1.1, step 3.2, step 4.1, step 5.1, algebra]

7.1 A principal character at $q>1$ is induced from the principal character modulo one, so is not primitive. The unit group modulo one is trivial and its unique character is identically one on all integers, including zero; it is primitive and represented by $D=1$ under the stated Kronecker convention. If $\chi$ is nonprincipal, consequently $q>1$, so the constructed $D$ satisfies $|D|=q>1$ and $D\ne1$. At $n=0$ both $\chi(0)$ and $(D/0)$ are then zero. Finally any discriminant satisfying the asserted absolute value and sign equals $\chi(-1)q$, so is unique. This completes every asserted case without an infinite choice. [F1, step 4.1, step 6.1, algebra] ∎

## Remarks

This finite classification makes no assertion about a number field, a class number, $L(1,\chi)$, an analytic continuation, or a quantitative lower bound. Such conclusions require their own suppliers with their actual hypotheses.
