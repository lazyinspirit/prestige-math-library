---
id: lem-shifted-adic-koszul-filtration-euler-comparison
kind: lemma
title: "shifted adic koszul filtration euler comparison"
status: draft
origin: pipeline
deps: [lem-koszul-homology-finite-length-for-an-ideal-of-definition, lem-bounded-finite-length-complex-euler-identities, def-associated-graded-ring-and-module, thm-hilbert-basis-theorem, thm-artin-rees-lemma, thm-nakayama-lemma, thm-long-exact-sequence-in-homology, def-axiom-of-choice, cor-sequence-ideal-annihilates-koszul-homology, lem-koszul-generator-contraction-homotopy, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-noetherian-ring-quotients-and-localisations, def-koszul-complex-of-a-sequence-with-coefficients, cor-length-is-additive-in-short-exact-sequences]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Stacks Project, 43.15.4\u20136; local proof with stated module-relative and coefficient conventions"
      url: "https://stacks.math.columbia.edu/tag/0AZU"
    - title: "Hochster, Math 615 Winter 2012, pp.104\u2013108: Euler characteristics and the multiplicity theorem"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Statement

Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finite $R$-module, $\mathbf f=(f_1,\ldots,f_r)$, and $I=(\mathbf f)$ with $\ell_R(M/IM)<\infty$. Reindex $K(\mathbf f;M)$ as $K^n=K_{-n}$ in cochain degrees $-r,\ldots,0$. Put
$$F^pK^n=I^{\max(0,p+n)}K^n\qquad(p\in\mathbb Z).$$
These are subcomplexes. There is $p_0$ such that every $F^pK$ for $p\geq p_0$ is acyclic. For such $p$, the projection induces $H^n(K)\cong H^n(K/F^pK)$ in every degree, the quotient terms have finite length, and $\chi(K)=\chi(K/F^pK)$.

## Facts & Assumptions

**Given:** AC, a commutative Noetherian local ring $(R,\mathfrak m)$, a finite $R$-module $M$, a finite sequence $\mathbf f$ of length $r$, and $I=(\mathbf f)$ with $\ell_R(M/IM)<\infty$. Set $K^n=K_{-n}(\mathbf f;M)$ and $F^pK^n=I^{\max(0,p+n)}K^n$.

[A1] We assume [[def-axiom-of-choice]].

[F1] The original Koszul homology has finite length under the stated hypothesis: [[lem-koszul-homology-finite-length-for-an-ideal-of-definition]].

[F2] Finite-length term sums equal Euler characteristics: [[lem-bounded-finite-length-complex-euler-identities]].

[F3] Associated graded multiplication is multiplication on quotient classes: [[def-associated-graded-ring-and-module]].

[F4] Polynomial extension preserves Noetherianity: [[thm-hilbert-basis-theorem]].

[F5] For finite $E$ over Noetherian $R$ and $Z\subseteq E$, $Z\cap I^aE=I^{a-c}(Z\cap I^cE)$ for all $a\geq c$: [[thm-artin-rees-lemma]].

[F6] Under AC, finite $L=IL$ with $I$ in the Jacobson radical implies $L=0$: [[thm-nakayama-lemma]].

[F7] Short exact complexes give long exact homology sequences: [[thm-long-exact-sequence-in-homology]].

[F8] Koszul homology is killed by its sequence ideal: [[cor-sequence-ideal-annihilates-koszul-homology]].

[F9] Exterior multiplication $h_j=e_j\wedge-$ satisfies $dh_j+h_jd=f_j\operatorname{id}$: [[lem-koszul-generator-contraction-homotopy]].

[F10] Finite modules over a Noetherian ring have finite submodules: [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]].

[F11] Quotients of Noetherian rings are Noetherian: [[thm-noetherian-ring-quotients-and-localisations]].

[F12] Koszul terms and deletion differential are given by [[def-koszul-complex-of-a-sequence-with-coefficients]].

[F13] Length is additive and passes to quotients: [[cor-length-is-additive-in-short-exact-sequences]].

## Proof

**Proof technique:** direct.

1.1 A differential term deletes $e_j$ and multiplies its coefficient by $f_j$, with sign $(-1)^{j-1}$ in the ordered wedge. Thus $d(I^{\max(0,p+n)}K^n)\subseteq I^{\max(0,p+n+1)}K^{n+1}$: if $p+n\geq0$ multiplication raises the power by one, and if $p+n<0$ the target required power is zero. This proves the subcomplex assertion for every $p$. [F12, given]

2.1 If $M=0$, all complexes vanish. If $r=0$, $I=0$, $K=M[0]$ and $F^pK=0$ for $p\geq1$; the finite-length hypothesis is exactly that on $M$. If $I=R$, there are $a_j$ with $\sum_ja_jf_j=1$. The map $h=\sum_ja_jh_j$ satisfies $dh+hd=\operatorname{id}$, so every cycle $z$ is the boundary $d(hz)$. Every tail equals $K$ and the quotient is zero. This proves all conclusions in these cases. Henceforth $r\geq1$ and $I\subseteq\mathfrak m$. [F9, F1, step 1.1]

2.2 Let $S=\operatorname{gr}_I(R)$ and $G=\operatorname{gr}_I(M)$, extending $G_j=0$ for $j<0$. In degree $p$ the graded complex $F^pK/F^{p+1}K$ has cochain term $G_{p+n}^{\binom r{-n}}$. For $p+n<0$ this is zero since the two filtration terms coincide. A representative $m\in I^{p+n}M$ in a wedge summand maps to the sum of $(-1)^{j-1}f_jm$ in the deleted wedge summands, modulo $I^{p+n+2}M$. This is exactly multiplication by $f_j^*\in S_1$. Therefore the direct sum over $p$ is the Koszul complex on $\mathbf f^*$ with coefficients $G$, giving wedge degree $i$ weight $i$, so the total internal degree $p$ is preserved. [F3, F12, step 1.1]

3.1 The map $(R/I)[X_1,\ldots,X_r]\to S$ taking $X_j$ to $f_j^*$ is onto: every element of $I^a/I^{a+1}$ is a sum of degree-$a$ monomials in these initial forms. Thus $S$ is Noetherian by quotient preservation and iterated Hilbert basis. A finite generating list of $M$ gives generators of $G$ in degree zero, by expressing elements of $I^aM$ as monomials times those generators. All terms, cycles and homologies of the graded Koszul complex are therefore finite over $S$. [F4, F10, F11, step 2.2]

4.1 Each such graded homology is killed by all $f_j^*$, hence by $S_+$, since the $f_j^*$ generate the positive-degree ideal. Replacing its finite generating list by its finitely many homogeneous components gives homogeneous generators; kernels and images are graded because the differential preserves internal degree. Only their degrees can occur: positive-degree scalars act as zero and degree-zero scalars preserve degree. There are only $r+1$ homology modules. Choose $b$ above all their generator degrees (take $b=0$ if all are zero). Then $\operatorname{gr}_F^pK$ is acyclic for every $p\geq b$. [F8, step 2.2, step 3.1]

5.1 In $0\to F^{p+1}K\to F^pK\to\operatorname{gr}_F^pK\to0$, the last complex is acyclic for $p\geq b$. The LES therefore makes $H^n(F^{p+1}K)\to H^n(F^pK)$ an isomorphism. Finite composition gives the same for $H^n(F^qK)\to H^n(F^pK)$ whenever $q\geq p\geq b$. [F7, step 4.1]

6.1 Fix $p\geq\max(b,r)$ and put $E^n=F^pK^n$, $Z^n=\ker(d:E^n\to E^{n+1})$. These and $L^n=H^n(F^pK)$ are finite $R$-modules. For $q\geq p$ all the exponents are nonnegative and $F^qK^n=I^{q-p}E^n$. Artin–Rees gives $c_n\geq0$ such that, when $q-p\geq c_n+1$, $Z^n\cap F^qK^n=I^{q-p-c_n}(Z^n\cap I^{c_n}E^n)\subseteq IZ^n$. Choose one $q$ satisfying this for the finitely many $n$ between $-r$ and $0$. [F5, F10, step 5.1]

7.1 A cycle from $F^qK^n$ represents, in $L^n$, the class of an element of $Z^n\cap F^qK^n\subseteq IZ^n$. Its class is in $IL^n$, since the quotient map $Z^n\to L^n$ is linear. Surjectivity in the preceding LES comparison gives $L^n=IL^n$. The ring $R$ is local, so $J(R)=\mathfrak m$; $I\subseteq\mathfrak m$ and $L^n$ is finite. Nakayama, under AC, gives $L^n=0$. Since $p$ was arbitrary above the bound, every such tail is acyclic. [A1, F6, step 5.1, step 6.1]

8.1 The LES of $0\to F^pK\to K\to K/F^pK\to0$ now gives the claimed homology isomorphisms. For any $a\geq1$, each factor $I^jM/I^{j+1}M$ of $M/I^aM$ is a quotient of finitely many copies of $M/IM$, via degree-$j$ monomials in the $r$ generators. All factors, and hence $M/I^aM$, have finite length. The case $a=0$ gives zero. Each quotient term is a finite direct sum of such modules. Its Euler characteristic is therefore computable by term lengths, and equals that of $K$ by the homology isomorphisms and finite-length original homology. [F1, F2, F7, F13, step 2.1, step 7.1] ∎

## Remarks

Source locators: Stacks 43.15.5, the filtration and associated-graded paragraphs; Hochster printed pp.105–108. The local argument proves high-tail acyclicity rather than invoking a spectral-sequence convergence theorem. Artin–Rees is used on cycles inside a fixed finite tail term, with the explicit containment into $IZ^n$; Nakayama is the AC-bearing tail step. No completeness hypothesis is needed.
