---
id: lem-morphisms-of-mixed-hodge-structures-are-strict
kind: lemma
title: "Strictness of mixed Hodge morphisms"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-mixed-hodge-structure, lem-deligne-splitting-of-a-mixed-hodge-structure]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "SS1.2.10-1.2.12, printed pp. 12-13: the category of objects with three opposed filtrations is abelian, kernels and images keep the bigrading, and morphisms are strictly compatible with all three filtrations; SS2.3.4-2.3.5, printed p. 30: Theorem (2.3.5)(i)-(v), strictness for W and F, kernel/image/cokernel, exactness of Gr^W"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "Theorems 2.7 and 2.8 with the printed proof of 2.7 from 2.8, printed p. 19: strictness of a Hodge morphism follows from the functorial Deligne splitting"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures, Srni January 2005 (author-hosted, 15 pp.)"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "(2.2.3) and (2.2.6)-(2.2.7), printed p. 6: strictness of MHS morphisms, the abelian-category statement and the induced structures on kernel, image and cokernel"
    - title: "F. El Zein, Hodge Structures and Mixed Hodge Structures, University of Pennsylvania course notes (June 24, 2010)"
      url: "https://www2.math.upenn.edu/~siegelch/Notes/ElZein.pdf"
      locator: "Lemma 2.3 and Proposition 2.4, printed p. 3: strictness and the abelian-category property"
---

## Statement

Every morphism $f\colon H\to K$ of rational mixed Hodge structures is strict for
$W$ and for $F$:
$$f(W_nH)=f(H)\cap W_nK,\qquad f(F^pH_{\mathbb C})=f(H_{\mathbb C})\cap F^pK_{\mathbb C}$$
for all $n,p$. Its kernel, image and cokernel, with the induced or quotient
filtrations, are mixed Hodge structures; the functor $\operatorname{Gr}^W_n$ is
exact; and a morphism from a structure of weights at least $n$ (that is
$W_{n-1}H=0$) to a structure of weights at most $n$ (that is $W_nK=K$) has
pure image of weight $n$.

## Facts & Assumptions

**Given:** A morphism $f\colon H\to K$ of rational mixed Hodge structures
([[def-rational-mixed-hodge-structure]]); the complexified map is written
$f_{\mathbb C}=f\otimes\mathrm{id}$ and commutes with the conjugations because
$f$ is rational.

[F1] The Deligne splitting of [[lem-deligne-splitting-of-a-mixed-hodge-structure]]: $H_{\mathbb C}=\bigoplus_{p,q}I^{p,q}(H)$ with $W_mH_{\mathbb C}=\bigoplus_{p+q\le m}I^{p,q}(H)$, $F^aH_{\mathbb C}=\bigoplus_{p\ge a}I^{p,q}(H)$, $\bar F^bH_{\mathbb C}=\bigoplus_{q\ge b}I^{p,q}(H)$, the projection of $I^{p,q}(H)$ onto $\operatorname{Gr}^W_{p+q}H_{\mathbb C}$ being an isomorphism onto $H^{p,q}_{p+q}$, and $f_{\mathbb C}(I^{p,q}(H))\subseteq I^{p,q}(K)$.

[F2] On $\operatorname{Gr}^W_nH_{\mathbb C}$ one has $\operatorname{Gr}^W_nH_{\mathbb C}=\bigoplus_{p+q=n}H^{p,q}_n$ with $H^{p,q}_n=F^p\operatorname{Gr}^W_n\cap\bar F^q\operatorname{Gr}^W_n$ ([[def-rational-mixed-hodge-structure]]).

## Proof

**Proof technique:** direct.

1.1 (Weight strictness.) Let $y=f(x)\in f(H)\cap W_nK$ and decompose $x=\sum_{p,q}x^{p,q}$ along the splitting of $H_{\mathbb C}$; then $y=\sum_{p,q}f_{\mathbb C}(x^{p,q})$ with $f_{\mathbb C}(x^{p,q})\in I^{p,q}(K)$ by [F1]. Since $y\in W_nK=\bigoplus_{p+q\le n}I^{p,q}(K)$ and the sum is direct, all components with $p+q>n$ vanish: $f_{\mathbb C}(x^{p,q})=0$ whenever $p+q>n$. Hence $x':=\sum_{p+q\le n}x^{p,q}$ lies in $W_nH_{\mathbb C}$ and satisfies $f_{\mathbb C}(x')=y$, so $y\in f_{\mathbb C}(W_nH_{\mathbb C})$. The reverse inclusion $f(W_nH)\subseteq f(H)\cap W_nK$ is the preservation of $W$ by $f$. [F1, algebra]

1.2 (Hodge strictness.) The same computation with the condition $p<a$ instead of $p+q>n$: if $y=f_{\mathbb C}(x)\in f(H_{\mathbb C})\cap F^aK_{\mathbb C}$, decompose $x$ and use $F^aK_{\mathbb C}=\bigoplus_{p\ge a}I^{p,q}(K)$ to conclude that $f_{\mathbb C}(x^{p,q})=0$ for $p<a$, so $x'=\sum_{p\ge a}x^{p,q}$ lies in $F^aH_{\mathbb C}$ and maps to $y$. [F1, algebra]

2.1 (Rational form.) Tensoring step 1.1 with $\mathbb C$ gives $f_{\mathbb C}(W_nH_{\mathbb C})=f_{\mathbb C}(H_{\mathbb C})\cap W_nK_{\mathbb C}$. Both sides are the complexifications of the rational subspaces $f(W_nH)$ and $f(H)\cap W_nK$, and a rational subspace of a rational vector space is recovered from its complexification as the set of $\sigma$-fixed vectors; hence $f(W_nH)=f(H)\cap W_nK$, which with step 1.2 is the displayed strictness. [step 1.1, step 1.2, algebra]

2.2 (Kernel, image and cokernel.) By [F1], $f_{\mathbb C}$ maps each summand of $\bigoplus_{p,q}I^{p,q}(H)$ into the summand with the same indices of $K$, so kernel, image and cokernel decompose componentwise: $\ker f_{\mathbb C}=\bigoplus_{p,q}(\ker f_{\mathbb C}\cap I^{p,q}(H))$, $f(H_{\mathbb C})=\bigoplus_{p,q}f_{\mathbb C}(I^{p,q}(H))$ and $\operatorname{coker}f_{\mathbb C}=\bigoplus_{p,q}\bigl(I^{p,q}(K)/f_{\mathbb C}(I^{p,q}(H))\bigr)$. Intersecting with $W_nH_{\mathbb C}=\bigoplus_{p+q\le n}I^{p,q}(H)$ and with $F^aH_{\mathbb C}=\bigoplus_{p\ge a}I^{p,q}(H)$ (and dually for $\bar F^b$) shows that on $\operatorname{Gr}^W_n\ker f$ the induced $F$ and $\bar F$ are the sums over $p\ge a$ and $q\ge b$ of the pieces $\ker f_{\mathbb C}\cap I^{p,q}(H)$ with $p+q=n$, so those pieces are the $H^{p,q}_n$ and the graded piece decomposes accordingly; the same computation applies to the image and, by quotients of the displayed decompositions, to the cokernel. Conjugation exchanges the induced $F$- and $\bar F$-parts, so each of the three structures satisfies the mixed Hodge axiom. [F1, F2, step 1.1, step 1.2, algebra]

2.3 (Exactness of $\operatorname{Gr}^W_n$.) Let $0\to A\xrightarrow{i}B\xrightarrow{p}C\to 0$ be a short exact sequence of mixed Hodge structures. By [F1] the splitting identifies $\operatorname{Gr}^W_nA$, $\operatorname{Gr}^W_nB$, $\operatorname{Gr}^W_nC$ with $\bigoplus_{p+q=n}I^{p,q}(A)$ and its analogues, and the maps $\operatorname{Gr}^W_n i$, $\operatorname{Gr}^W_n p$ with the direct sums of the maps induced by $i$ and $p$ between the pieces $I^{p,q}$. Each piecewise sequence $0\to I^{p,q}(A)\to I^{p,q}(B)\to I^{p,q}(C)\to 0$ is exact: the middle arrows are the restrictions of the injective $i$ and of the surjective $p$, and an element $b\in I^{p,q}(B)$ lies in $\ker p$ precisely when $b=i(a)$ for some $a\in A$, which by the componentwise description of $i^{-1}(I^{p,q}(B))$ forces $a\in I^{p,q}(A)$. A direct sum of short exact sequences is short exact, so $0\to\operatorname{Gr}^W_nA\to\operatorname{Gr}^W_nB\to\operatorname{Gr}^W_nC\to0$ is exact; a morphism is strict for $W$ precisely when it induces such exact sequences, so this recovers step 1.1 independently. [F1, step 1.1, algebra]

3.1 (Pure image.) Now suppose $W_{n-1}H=0$ and $W_nK=K$. By step 2.2 the image is a mixed Hodge structure with the induced filtration, and step 1.1 gives $W_{n-1}(\operatorname{im}f)=f(W_{n-1}H)=0$ and $W_n(\operatorname{im}f)=f(H)\cap W_nK=f(H)=\operatorname{im}f$; hence the image is pure of weight $n$. [step 1.1, step 2.2, algebra] ∎

## Source notes

Deligne II (1.2.10)-(1.2.12) and Theorem (2.3.5) are the source; the proof above
follows Voisin's printed deduction of Theorem 2.7 from Theorem 2.8 and uses the
splitting lemma of this page in place of Deligne's three-opposed-filtrations
category theorem. The statement claims no canonical splitting of the induced
structures on kernel, image or cokernel, and the argument is choice-free:
all decompositions used are the canonical ones supplied by the splitting lemma.
