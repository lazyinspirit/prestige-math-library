---
id: cex-frobenius-cycle-type-needs-good-reduction
title: "Frobenius cycle type needs good reduction"
kind: counterexample
status: draft
origin: pipeline
deps: [thm-frobenius-cycle-type-and-prime-splitting, thm-dedekind-kummer-prime-factorisation, thm-ramified-primes-and-the-number-field-discriminant, thm-ring-of-integers-of-a-quadratic-field, thm-power-basis-discriminant-is-polynomial-discriminant]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.2.1, Q(sqrt5) example, pp.102\u2013103; Milne Theorem 8.23 qualification"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Statement refuted

Factor multiplicities from an arbitrary integral generator need not encode Frobenius cycles. For $F(T)=T^2-5$ at p=2, $\bar F=(T+1)^2$, yet $\mathbb Q(\sqrt5)$ is unramified and inert at 2, with Frobenius a transposition. The integral generator $\omega=(1+\sqrt5)/2$ has minimal polynomial $G(T)=T^2-T-1$, whose reduction $T^2+T+1$ is irreducible over $\mathbb F_2$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-frobenius-cycle-type-and-prime-splitting]]: Let $F\in\mathbb Z[T]$ be monic separable with splitting field L, and let p be a rational prime not dividing $\operatorname{Disc}(F)$. Then p is unramified in L and $\bar F\in\mathbb F_p[T]$ is squarefree. The degrees of its monic irreducible factors, with each distinct factor counted once, are exactly the cycle lengths of arithmetic Frobenius on the roots of F.

[F2] [[thm-dedekind-kummer-prime-factorisation]]: Let $L/K$ be a finite extension of number fields, let $\alpha\in\mathcal O_L$ with $\mathcal O_L=\mathcal O_K[\alpha]$, and let $F\in\mathcal O_K[X]$ be its monic minimal polynomial over $K$. Let $\mathfrak p$ be a nonzero prime ideal of $\mathcal O_K$, not dividing the index of this power order (the index is $1$ under the stated monogeneity hypothesis). If $\bar F=\prod_i\bar g_i^{e_i}$ with distinct monic irreducibles over $\mathcal O_K/\mathfrak p$, then $\mathfrak p\mathcal O_L=\prod_i\mathfrak P_i^{e_i},\qquad \mathfrak P_i=(\mathfrak p,g_i(\alpha)),\qquad f(\mathfrak P_i/\mathfrak p)=\deg\bar g_i,$ Here $g_i\in\mathcal O_K[X]$ are any monic lifts of $\bar g_i$, and the last $f$ denotes the residue degree from def-prime-above-and-residue-degree.

[F3] [[thm-ramified-primes-and-the-number-field-discriminant]]: A rational prime $p$ ramifies in $K/\mathbb Q$ if and only if $p\mid d_K$.

[F4] [[thm-ring-of-integers-of-a-quadratic-field]]: For squarefree $d\ne1$, $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[(1+\sqrt d)/2]$ if $d\equiv1\pmod4$, and $\mathbb Z[\sqrt d]$ otherwise.

[F5] [[thm-power-basis-discriminant-is-polynomial-discriminant]]: Let $K=\mathbb Q(\alpha)$. If $f$ is the degree-$n$ monic minimal polynomial of $\alpha$, then $\operatorname{disc}(1,\alpha,\ldots,\alpha^{n-1})=(-1)^{n(n-1)/2}N_{K/\mathbb Q}(f'(\alpha))=\operatorname{disc}(f).$

## Counterexample

1.1 The quadratic integral-basis theorem gives $\mathcal O_L=\mathbb Z[\omega]$. Direct substitution gives G(omega)=0, and its discriminant 5 is not a rational square, so it is the minimal polynomial. The power-basis discriminant formula gives $d_L=\operatorname{Disc}(G)=5$. Therefore 2 is unramified by the field-discriminant criterion. [F3, F4, F5]

2.1 Modulo 2, G is $T^2+T+1$, taking value 1 at both 0 and 1. It is irreducible. Dedekind-Kummer applies to the full ring $\mathcal O_L=\mathbb Z[\omega]$ and gives a single prime of e=1 and f=2. Alternatively the good-reduction cycle theorem for G gives the transposition Frobenius. [F1, F2, step 1.1]

3.1 For the other generator, $\sqrt5=2\omega-1$, so $\mathbb Z[\sqrt5]$ has index 2 in $\mathcal O_L$, as the change-of-basis matrix has determinant 2. Its polynomial discriminant is 20 and its reduction is $(T+1)^2$. The two characteristic-zero roots reduce to the same root, so this reduction is not a bijection of root sets. It cannot supply the cycle comparison; in particular reading its multiplicity as ramification would contradict e=1. The full-ring hypothesis of the cited Dedekind-Kummer statement fails for this generator. [F1, F2, step 1.1, step 2.1] ∎
