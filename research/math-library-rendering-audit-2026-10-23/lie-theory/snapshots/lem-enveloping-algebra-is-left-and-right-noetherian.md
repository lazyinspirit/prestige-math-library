---
id: "lem-enveloping-algebra-is-left-and-right-noetherian"
kind: "lemma"
title: "Noetherianity of the enveloping algebra"
deps: ["thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra", "thm-hilbert-basis-theorem"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§15.1 p.79, Noetherian parenthesis"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Lift finite homogeneous generators of gr(I) in the polynomial algebra gr U(g), subtract leading symbols and induct on degree; same proof for right ideals"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For every finite-dimensional complex Lie algebra $\mathfrak g$ (semisimplicity is unnecessary here), $U(\mathfrak g)$ is left and right Noetherian.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Let $x_1,\dots,x_r$ be an ordered basis of a finite-dimensional complex Lie algebra $\mathfrak g$. Then the monomials $$x_1^{a_1}x_2^{a_2}\cdots x_r^{a_r} \qquad (a_i\in \mathbb N_0)$$ form a basis of $U(\mathfrak g)$. In particular, multiplication identifies $\operatorname{gr}U(\mathfrak g)$ with the symmetric algebra $S(\mathfrak g)$ on the symbols of the $x_i$. ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]])

[F2] Let $R$ be a Noetherian commutative ring. Then the polynomial ring $R[x]$ is a Noetherian commutative ring. No hypothesis beyond Noetherianity is placed on $R$: it may have zero divisors, and it may be the zero ring. ([[thm-hilbert-basis-theorem]])

## Proof

1.1 Put $A=U(\mathfrak g)$ with its nonnegative PBW filtration. Then $\operatorname{gr}A\cong\mathbb C[X_1,\ldots,X_d]$. A field is Noetherian since its only ideals are $0$ and itself; iterating the Hilbert basis theorem makes this polynomial ring Noetherian, also when $d=0$. [F1, F2]

2.1 For a left ideal $I$, $\operatorname{gr}I$ is a homogeneous ideal of $\operatorname{gr}A$. Choose finite homogeneous generators $\sigma(a_j)$ and lift them to $a_j\in I$ of the same degrees. Homogeneous generators may be chosen by replacing generators of a homogeneous ideal by their homogeneous components. For $I=0$ use the empty list. [construct, step 1.1]

3.1 If $a\in I$ has degree $n$, write its symbol as $\sum_j b_j\sigma(a_j)$ with homogeneous $b_j$ of degree $n-\deg a_j$, omitting negative degrees. Lift $b_j$ to $c_j\in A$. Then $a-\sum_jc_ja_j$ has degree less than $n$. Repetition terminates below degree zero, proving $I=\sum_jAa_j$. This includes degree-zero elements. [algebra, step 2.1]

4.1 For a right ideal use $\operatorname{gr}I=\sum_j\sigma(a_j)b_j$ and subtract $\sum_ja_jc_j$ instead. Thus every left and every right ideal is finitely generated. An ascending chain stabilizes because its union is an ideal and its finitely many generators already belong to one member. [algebra, step 3.1] ∎
