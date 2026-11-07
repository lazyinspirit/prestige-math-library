---
id: def-gowers-uniformity-norm-on-finite-cyclic-groups
kind: definition
title: "Gowers $U^d$ norm on finite cyclic groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
aliases: []
deps: [def-integers-modulo-n,
       def-addition-and-multiplication-modulo-n,
       thm-integers-modulo-n-basic-algebra,
       thm-standard-representatives-modulo-n,
       thm-nth-roots-exist,
       lem-complex-conjugation-and-modulus-laws]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§5, Definition 5.1, equations (5.2)–(5.7), printed pp. 493–496."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142 (2012), author's preliminary version"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "§1.3.3, printed pp. 56–58, equations (1.32)–(1.33)."
    - title: "Julia Wolf, Arithmetic and polynomial progressions in the primes [after Gowers, Green, Tao and Ziegler], Astérisque 352 (2013)"
      url: "https://www.numdam.org/item/AST_2013__352__389_0.pdf"
      locator: "§2.1, printed p. 395, Definition 1 and the recursive uniformity norm formula."
---

## Definition

Fix an integer $N\ge1$, let $G_N=\mathbb Z/N\mathbb Z$ with addition modulo $N$, and let $f:G_N\to\mathbb C$. For an integer $d\ge1$, write $h=(h_1,\ldots,h_d)\in G_N^d$ and $\omega=(\omega_1,\ldots,\omega_d)\in\{0,1\}^d$, put $|\omega|=\omega_1+\cdots+\omega_d$ and $\omega\cdot h=\omega_1h_1+\cdots+\omega_dh_d$, and define $\mathcal C^m z=z$ when $m$ is even and $\mathcal C^m z=\overline z$ when $m$ is odd. For a function $F$ on $G_N^{d+1}$, let

$$\mathbb E_{x,h_1,\ldots,h_d\in G_N}F:=N^{-(d+1)}\sum_{x,h_1,\ldots,h_d\in G_N}F.$$

Define the alternating cube average

$$C_d(f):=\mathbb E_{x,h_1,\ldots,h_d\in G_N}\prod_{\omega\in\{0,1\}^d}\mathcal C^{|\omega|}f(x+\omega\cdot h).$$

Then $C_d(f)$ is a nonnegative real number, and the Gowers uniformity norm is the unique nonnegative real $u$ satisfying $u^{2^d}=C_d(f)$; we write $u=\|f\|_{U^d(G_N)}$.

## Definition references

[[def-integers-modulo-n]]

[[def-addition-and-multiplication-modulo-n]]

[[thm-integers-modulo-n-basic-algebra]]

[[thm-standard-representatives-modulo-n]]

[[thm-nth-roots-exist]]

[[lem-complex-conjugation-and-modulus-laws]]

[Green and Tao, §5, Definition 5.1 and equations (5.2)–(5.7)](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Tao, *Higher Order Fourier Analysis*, §1.3.3](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

[Wolf, §2.1](https://www.numdam.org/item/AST_2013__352__389_0.pdf)

## Facts & Assumptions

**Given:** An integer $N\ge1$, the additive group $G_N=\mathbb Z/N\mathbb Z$, an integer $d\ge1$, and a function $f:G_N\to\mathbb C$.

[F1] The integers modulo $N$ are the quotient set of congruence classes $[a]_N$ for $a\in\mathbb Z$ ([[def-integers-modulo-n]]).

[F2] The classes $[0]_N,\ldots,[N-1]_N$ are distinct and exhaust $G_N$, so $|G_N|=N$ ([[thm-standard-representatives-modulo-n]]).

[F3] Addition is $[a]_N+[b]_N=[a+b]_N$ ([[def-addition-and-multiplication-modulo-n]]).

[F4] $(G_N,+)$ is an abelian group, so translation by any class has an inverse translation ([[thm-integers-modulo-n-basic-algebra]]).

[F5] For every nonnegative real $a$ and integer $m\ge1$ there is a unique nonnegative real $s$ with $s^m=a$ ([[thm-nth-roots-exist]]).

[F6] Complex conjugation distributes over products, and $z\overline z=|z|^2\ge0$ for every $z\in\mathbb C$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 Put $h'=(h_1,\ldots,h_{d-1})$ and $g_{h'}(x)=\prod_{\omega'\in\{0,1\}^{d-1}}\mathcal C^{|\omega'|}f(x+\omega'\cdot h')$. Grouping the full cube product by its last coordinate gives $g_{h'}(x)\overline{g_{h'}(x+h_d)}$: the last-coordinate-zero face is the displayed product, and the last-coordinate-one face has each conjugation parity increased by one. [given, F1, F3, F6, algebra]

1.2 The map $(x,h_d)\mapsto(x,y=x+h_d)$ is a bijection of $G_N^2$, with inverse $(x,y)\mapsto(x,y-x)$ by the group inverse law; because each average is uniform on the same finite group, the average in $x,h_d$ of the product in step 1.1 is $\mathbb E_{x,y}g_{h'}(x)\overline{g_{h'}(y)}=|\mathbb E_x g_{h'}(x)|^2$, which is a nonnegative real. [given, F2, F4, step 1.1, algebra]

1.3 Averaging the nonnegative real from step 1.2 over the remaining $h'$ variables shows $C_d(f)\ge0$. Apply [F5] with $m=2^d$ to obtain the unique nonnegative real $u$ with $u^{2^d}=C_d(f)$, proving the definition is well-defined. [F5, step 1.2] ∎
