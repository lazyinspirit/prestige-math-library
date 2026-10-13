---
id: lem-balanced-triple-linear-algebra-over-the-projective-line
kind: lemma
title: "The balanced-triple linear algebra over $\\mathbb P^1$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-triple-and-globalization-map]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§7.1, printed pp. 509–512 (PDF pp. 45–48): Lemma 7.1.1 with its proof (7.1.1)–(7.1.2) and Lemma 7.1.2 with its proof, plus the $\\mathbb P^1$-vector-bundle remark."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§8, printed pp. 50–51: Theorem 8.2 (the three equivalent conditions) and Lemma 8.4 (the criterion, attributed by JKK to Kashiwara91 [10])."
---

## Statement

Let $V$ be finite-dimensional over $\mathbb Q(q)$, let $M\subset V$ be an $A=\mathbb Z[q,q^{-1}]$-submodule spanning $V$, and let $L_0,L_\infty$ be full free $A_0$- and $A_\infty$-lattices in $V$. Write $E=M\cap L_0\cap L_\infty$ and use the balanced-triple language of [[def-balanced-triple-and-globalization-map]].

(1) If the canonical $\mathbb Z$-linear map $E\to(M\cap L_0)/(M\cap qL_0)$ is an isomorphism, then
$$M\cap L_0\cong\mathbb Z[q]\otimes_{\mathbb Z}E,\qquad M\cap L_\infty\cong\mathbb Z[q^{-1}]\otimes_{\mathbb Z}E,\qquad M\cong A\otimes_{\mathbb Z}E,$$
and the infinity residue map $E\to(M\cap L_\infty)/(M\cap q^{-1}L_\infty)$ is also an isomorphism; moreover $A_0\otimes_{\mathbb Z}E\cong L_0$ and $A_\infty\otimes_{\mathbb Z}E\cong L_\infty$ under the maps induced by inclusions. If $E$ has a finite $\mathbb Z$-basis, these are actual free bases of $M,L_0,L_\infty$ over $A,A_0,A_\infty$. No containment $M\subset L_0\cap L_\infty$ and no freeness of $M/E$ is assumed.

(2) If a $\mathbb Z$-module $F$ maps into $M\cap L_0\cap L_\infty$, generates $M$ over $A$, and maps injectively into both rational residues $L_0/qL_0$ and $L_\infty/q^{-1}L_\infty$, then $F\cong E\cong(M\cap L_0)/(M\cap qL_0)$.

(3) More generally, let $N\subset M$ be an $A$-submodule whose integral intersection $E_N=N\cap L_0\cap L_\infty$ satisfies $N\cong A\otimes_{\mathbb Z}E_N$. If a $\mathbb Z$-module $F$ maps to $M\cap(L_0+N)\cap(L_\infty+N)$, generates $M$ modulo $N$ over $A$, and maps injectively into $(L_0+\mathbb QN)/(qL_0+\mathbb QN)$ and $(L_\infty+\mathbb QN)/(q^{-1}L_\infty+\mathbb QN)$, then $M$ is balanced. The sequence
$$0\to(N\cap L_0)/(N\cap qL_0)\to(M\cap L_0)/(M\cap qL_0)\to(L_0+\mathbb QN)/(qL_0+\mathbb QN)$$
is exact, and its last image is the image of $F$. If $F$ and $E_N$ are finite free $\mathbb Z$-modules, then so is $E_M=M\cap L_0\cap L_\infty$, and $M$ is free over $A$.

These are the integral forms of Kashiwara's chart lemmas, in the notation of [[def-balanced-triple-and-globalization-map]]; their rational base extension gives the usual $A_0/A_\infty$ criterion, and no containment of charts or freeness of $M$ is assumed anywhere.

## Facts & Assumptions

**Given:** A finite-dimensional $\mathbb Q(q)$-space $V$, an $A$-submodule $M\subseteq V$ spanning $V$, full free chart lattices $L_0,L_\infty$ over $A_0,A_\infty$, and the balanced-triple data of [[def-balanced-triple-and-globalization-map]].

[F1] Balanced-triple data ([[def-balanced-triple-and-globalization-map]]): $E=M\cap L_0\cap L_\infty$; the canonical maps $E\to (M\cap L_0)/(M\cap qL_0)$ and $E\to (M\cap L_\infty)/(M\cap q^{-1}L_\infty)$; the rings $A=\mathbb Z[q,q^{-1}]$, $A_0$ with uniformizer $q$ and residue field $\mathbb Q$, and $A_\infty$ with uniformizer $q^{-1}$ and residue field $\mathbb Q$; $L_0$ and $L_\infty$ are free and generate $V$.

[F2] Chart calculus: a free $A_0$-lattice in a finite-dimensional $\mathbb Q(q)$-space spans it over $\mathbb Q(q)$, so every vector has finite vanishing/pole order, and $qL_0\subseteq L_0$, $q^{-1}L_\infty\subseteq L_\infty$.

[A1] The hypothesis used only in part (1): the canonical map $E\to (M\cap L_0)/(M\cap qL_0)$ is an isomorphism.

## Proof

**Proof technique:** direct, using finite pole orders and the two residue injections.

1.1 Since $q^{\pm1}M=M$, we have $M\cap qL_0=q(M\cap L_0)$, and similarly at infinity. Under [A1], $E\cap qL_0=0$. For $x\in M\cap L_0$ surjectivity gives $x=e+qx_1$ with $e\in E$ and $x_1\in M\cap L_0$. If also $x\in q^nL_\infty$ with $n\ge1$, then $e\in q^nL_\infty$ and $x_1\in q^{n-1}L_\infty$. Induction, starting with $M\cap L_0\cap L_\infty=E$, therefore gives $M\cap L_0\cap q^nL_\infty=\sum_{k=0}^nq^kE$. The sum is direct: in a vanishing sum its constant coefficient belongs to $E\cap qL_0=0$, and division by $q$ removes successive coefficients. [A1, F1, F2, algebra]

1.2 For (2), identify $F$ with its image, since its residue map is injective. In any finite Laurent sum $x=\sum_kq^kf_k$ with $f_k\in F$, the least exponent cannot be negative when $x\in L_0$: multiplying by its inverse power gives a constant coefficient in $F\cap qL_0=0$. Removing that coefficient repeatedly proves $M\cap L_0=\mathbb Z[q]F$. The mirror argument at infinity gives $M\cap L_\infty=\mathbb Z[q^{-1}]F$. These expressions are unique by the same residue injections, so the simultaneous intersection is $F$, and its integral residue map is an isomorphism. This proves (2); only the integral residue, rather than the entire rational residue, is identified with $F$. [F1, algebra]

2.1 Every vector has finite infinity-pole order, so step 1.1 gives $M\cap L_0=\mathbb Z[q]\otimes_{\mathbb Z}E$. Clearing a vector's zero-pole order by a power of $q$ gives $M=AE\cong A\otimes_{\mathbb Z}E$. Also $E\cap q^{-1}L_\infty=0$: if $e$ lies there, then $qe\in E\cap qL_0=0$. In a Laurent expansion of $x\in M\cap L_\infty$, a largest positive exponent $n$ would give, after multiplication by $q^{-n}$, a nonzero coefficient in $E\cap q^{-1}L_\infty$; hence no such exponent occurs. Thus $M\cap L_\infty=\mathbb Z[q^{-1}]\otimes_{\mathbb Z}E$, with infinity residue $E$. [step 1.1, F2, algebra]

2.2 For (3), the assumed canonical isomorphism $A\otimes E_N\to N$ forces $E_N$ to inject into both chart residues. Indeed, if $e\in E_N\cap qL_0$, then $q^{-1}e\in E_N$ as well, contradicting Laurent independence unless $e=0$; the mirror argument handles infinity. Apply (2) to $N$ in its field span, with the induced lattices, to obtain its balancedness and $N=(N\cap L_0)+(N\cap L_\infty)$. If $x=l_0+n_0=l_\infty+n_\infty$ lies in $M\cap(L_0+N)\cap(L_\infty+N)$, write $n_0-n_\infty=a+b$ with $a\in N\cap L_0$ and $b\in N\cap L_\infty$. Then $x-(n_0-a)=l_0+a=l_\infty-b$ is a simultaneous lift. Thus this intersection is $N+E_M$. [F1, step 1.2, algebra]

3.1 The injection $E\to L_0/qL_0$ extends injectively over $\mathbb Q$, by clearing integer denominators. A rational basis $e_1,\ldots,e_t$ of $\mathbb Q E$ has field-independent images: a rational-function dependence, after clearing denominators, would be a polynomial dependence, contradicting step 1.1. Since $M=AE$ spans $V$, this family is a field basis of $V$, so $t=\dim V$. Its residues are a rational basis of $L_0/qL_0$; expressing the $e_j$ in a free chart basis yields a square matrix invertible modulo $q$, hence with determinant a unit in $A_0$. Its adjugate gives $L_0=A_0E$ and the asserted tensor isomorphism. The same argument uses the infinity injection in step 2.1 to give $L_\infty=A_\infty E$. This proves (1), including its finite-free conclusions. [step 1.1, step 2.1, F1, algebra]

3.2 First restrict to a finitely generated subgroup $F'\subseteq F$ and $M'=N+A\varphi(F')$. The quotient-residue injection makes $F'$ torsionfree, hence a finite free abelian group. Modify the images of a finite basis of $F'$ by elements of $N$, using step 2.2, to obtain simultaneous lifts. Together with $E_N$ they generate $M'$. Their direct sum injects into $L_0/qL_0$: a vanishing residue first has zero $F'$ coordinate by the injection into $(L_0+\mathbb QN)/(qL_0+\mathbb QN)$, and then has zero $E_N$ coordinate by step 2.2. The infinity proof is identical. Criterion (2) now gives $E_{M'}\cong E_N\oplus F'$ and balancedness of $M'$. [step 1.2, step 2.2, algebra]

4.1 Every element of $M$ belongs to some such $M'$, because its expression modulo $N$ uses finitely many images of $F$. The preceding balancedness proves injectivity and surjectivity of the residue map for $M$ element by element. Its residue decompositions also prove the stated exact sequence: the kernel of the quotient-residue map is precisely the residue of $N$, and its image is precisely the image of $F$. When $F$ and $E_N$ are finite free, take $F'=F$ in step 3.2; then $E_M\cong E_N\oplus F$ is finite free and (1) makes $M$ free over $A$. This proves (3) and completes the lemma. [step 3.1, step 3.2, algebra] ∎

## Source note

Kashiwara, *On crystal bases* (1991), Lemmas 7.1.1–7.1.2, printed pp. 509–512, supply the integral chart and relative criteria. Here $\mathbb QN$ means the rational span $\mathbb Q\otimes_{\mathbb Z}N$ inside $V$, as in that source. The proof uses bounded pole orders; it never assumes that an infinity lattice is $q$-stable or that a $\mathbb Z[q]$-intersection is an $A_0$-submodule.
