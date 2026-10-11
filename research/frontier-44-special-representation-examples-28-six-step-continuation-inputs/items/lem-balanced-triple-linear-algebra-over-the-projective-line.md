---
id: lem-balanced-triple-linear-algebra-over-the-projective-line
kind: lemma
title: "The balanced-triple linear algebra over $\\mathbb P^1$"
status: draft
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
      locator: "§8.1, printed pp. 509–512 (PDF pp. 45–48): Lemma 8.1.1 with its proof (8.1.1)–(8.1.2) and Lemma 8.1.2 with its proof, plus the $\\mathbb P^1$-vector-bundle remark."
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

[F1] Balanced-triple data ([[def-balanced-triple-and-globalization-map]]): $E=M\cap L_0\cap L_\infty$; the canonical maps $E	o(M\cap L_0)/(M\cap qL_0)$ and $E	o(M\cap L_\infty)/(M\cap q^{-1}L_\infty)$; the rings $A=\mathbb Z[q,q^{-1}]$, $A_0$ with uniformizer $q$ and residue field $\mathbb Q$, and $A_\infty$ with uniformizer $q^{-1}$ and residue field $\mathbb Q$; $L_0$ and $L_\infty$ are free and generate $V$.

[F2] Chart calculus: a free $A_0$-lattice in a finite-dimensional $\mathbb Q(q)$-space spans it over $\mathbb Q(q)$, so every vector has finite vanishing/pole order, and $qL_0\subseteq L_0$, $q^{-1}L_\infty\subseteq L_\infty$.

[A1] The standing hypothesis of part (1), used only through step 7.1: the canonical map $E	o(M\cap L_0)/(M\cap qL_0)$ is an isomorphism.

## Proof

**Proof technique:** direct.

1.1 **The kernel and the two chart products.** Because $M$ is an $A$-module, $qM\subseteq M$ and $q^{-1}M\subseteq M$; hence $M\cap qL_0=q(M\cap L_0)$ and $M\cap q^{-1}L_\infty=q^{-1}(M\cap L_\infty)$. If the canonical map $E\to(M\cap L_0)/(M\cap qL_0)$ of (1) is injective, its kernel is $E\cap qL_0=E\cap M\cap qL_0$, so $E\cap qL_0=0$. [F1, A1, algebra]

2.1 **Peeling at the zero chart.** Assume from here through the end of part (1) that the canonical map $E\to(M\cap L_0)/(M\cap qL_0)$ in (1) is an isomorphism. Surjectivity says that every $x\in M\cap L_0$ has the form $x=e+qx_1$ with $e\in E$ and $x_1\in M\cap L_0$; iterating gives $M\cap L_0\subseteq\sum_{k=0}^nq^kE+M\cap q^{n+1}L_0$ for every $n\ge0$. [F1, F2, step 1.1, induction]

2.2 **The overlap of a chart with the opposite vanishing order.** For $v\in M\cap qL_0\cap L_\infty$ write $v=qw$ with $w\in M\cap L_0$; then $w=q^{-1}v\in q^{-1}L_\infty\subseteq L_\infty$, so $w\in M\cap L_0\cap L_\infty=E$ and $v\in qE$. Conversely $qE\subseteq M\cap qL_0\cap L_\infty$ because $E\subseteq L_0\cap L_\infty$ and $\mathbb Z[q^{-1}]L_\infty$-charts are $q$-stable. Hence $M\cap qL_0\cap L_\infty=qE$. [step 1.1, F1]

3.1 **Bounded infinity-pole pieces.** Intersecting the inclusion of step 2.1 with $q^nL_\infty$ gives $M\cap L_0\cap q^nL_\infty\subseteq\sum_{k=0}^nq^kE+q^n(M\cap qL_0\cap L_\infty)=\sum_{k=0}^nq^kE+q^{n+1}E=\sum_{k=0}^nq^kE$, using step 2.2 and $q^{n+1}E\subseteq q^nE$; the reverse inclusion holds because $q^kE\subseteq q^nL_\infty$ for $k\le n$ and $E\subseteq L_\infty$. Therefore $M\cap L_0\cap q^nL_\infty=\sum_{k=0}^nq^kE$ for every $n\ge0$. [step 2.1, step 2.2, algebra]

4.1 **Identification of the zero-chart module.** Every $x\in M\cap L_0\subseteq V$ lies in $q^nL_\infty$ for some $n\ge0$, because $L_\infty$ spans $V$ over $\mathbb Q(q)$ and $x=q^{-n}y$ has bounded infinity-pole order; combined with step 3.1 this gives $M\cap L_0=\sum_{k\ge0}q^kE=\mathbb Z[q]E$. The sum is direct: if $\sum_{k=0}^nq^ke_k=0$ with $e_k\in E$, then $e_0\in qL_0\cap E=0$ by step 1.1, and dividing by $q$ and repeating removes the remaining coefficients. Hence the inclusion $\mathbb Z[q]\otimes_{\mathbb Z}E\to M\cap L_0$ is an isomorphism. [step 1.1, step 3.1, algebra]

5.1 **The Laurent module and the field of fractions.** Let $x\in M$. Since $M\cap L_0$ spans $V$ over $\mathbb Q(q)$ and $M$ is an $A$-module, $x$ can be written as a finite sum $\sum_kc_ky_k$ with $c_k\in A$ and $y_k\in M\cap L_0$: clearing the zero-chart poles of a $\mathbb Q(q)$-combination of $M\cap L_0$-vectors multiplies by a power of $q$, which stays inside $A$ and inside $M$. Thus $M=A(M\cap L_0)=A\otimes_ZE$ by step 4.1, and taking $\mathbb Q(q)$-spans gives $V=\mathbb Q(q)\otimes_{\mathbb Z}E$. [step 4.1, algebra]

5.2 **The chart lattices.** The quotient $L_0/(M\cap L_0)$ is a finitely generated torsion $A_0$-module: $L_0$ is finitely generated over the noetherian local ring $A_0$, and each generator is killed by some power of $q$ because $M\cap L_0$ spans $V$. Hence $L_0=(M\cap L_0)+qL_0$, and Nakayama's lemma for the finitely generated $A_0$-module $L_0/A_0(M\cap L_0)$ gives $L_0=A_0(M\cap L_0)=A_0E$, so the induced map $A_0\otimes_{\mathbb Z}E\to L_0$ is an isomorphism; the same argument with $q^{-1}$ in place of $q$ is used for the opposite chart. [step 4.1, F1, algebra]

6.1 **The infinity chart and the mirror residue.** The vanishing $E\cap qL_0=0$ of step 1.1 dualizes to $E\cap q^{-1}L_\infty=0$: if $e\in E$ and $e=q^{-1}v$ with $v\in M\cap L_\infty$, then $v=qe\in M\cap qL_0\cap L_\infty=qE$ by step 2.2, so $v=qf$ with $f\in E$ and then $e=f$ has $e\in E\cap qL_0=0$. Similarly, using the expansion $M=A E=\mathbb Z[q,q^{-1}]E$ of step 5.1, every $x\in M\cap L_\infty$ satisfies $x\equiv e\pmod{q^{-1}(M\cap L_\infty)}$ for some $e\in E$: terms of the Laurent expansion with exponent $\ge1$ lie in $q(M\cap L_\infty)\subseteq q^{-1}(M\cap L_\infty)$, and terms with exponent $\le-1$ lie in $q^{-1}(M\cap L_\infty)$ because $q^{-1}L_\infty\subseteq L_\infty$. Running the peeling argument of steps 2.1, 3.1 and 4.1 with $(q,L_0)$ replaced by $(q^{-1},L_\infty)$ therefore yields $M\cap L_\infty=\mathbb Z[q^{-1}]E$ and the isomorphism $E\to(M\cap L_\infty)/(M\cap q^{-1}L_\infty)$. Applying step 5.2 with the roles of the charts exchanged gives $A_\infty\otimes_{\mathbb Z}E\cong L_\infty$. [step 1.1, step 2.2, step 5.1, algebra]

7.1 **Conclusion of (1).** Steps 1.1–6.1 prove all the assertions of (1), including the infinity residue isomorphism and the rational chart extensions $A_0\otimes_{\mathbb Z}E\cong L_0$, $A_\infty\otimes_{\mathbb Z}E\cong L_\infty$. If $E$ is free with a finite $\mathbb Z$-basis, the tensor identifications exhibit bases of $M,L_0,L_\infty$ over $A,A_0,A_\infty$, since $A\otimes_{\mathbb Z}\mathbb Z^n\cong A^n$ and similarly for the two chart rings. [step 4.1, step 5.1, step 5.2, step 6.1]

7.2 **The generation criterion (2).** Let $F$ map into $M\cap L_0\cap L_\infty$, generate $M$ over $A$, and inject into both rational residues. Then $F\cap qL_0=0$ and $F\cap q^{-1}L_\infty=0$, so $F$ is $\mathbb Z$-torsion-free; moreover $M\cap L_0\subseteq F+q(M\cap L_0)$: for $x\in M\cap L_0$ written as a finite $A$-combination of images of $F$, reducing modulo $q(M\cap L_0)$ leaves only the terms of exponent $\le0$, and each such term lies in $F+q(M\cap L_0)$ because the negative-exponent terms are themselves in $L_0$ only through vanishing of their images modulo $q$, which the injection $F\to L_0/qL_0$ forces into $F$. Hence the peeling and termination arguments of steps 2.1, 3.1 and 4.1 apply with $E$ replaced by $F$: $M\cap L_0=\mathbb Z[q]F$, $M=AF=A\otimes_{\mathbb Z}F$ and, by the mirror argument of step 6.1, $M\cap L_\infty=\mathbb Z[q^{-1}]F$ and the maps $F\to L_0/qL_0$, $F\to L_\infty/q^{-1}L_\infty$ are isomorphisms. Then $F\subseteq M\cap L_0\cap L_\infty$ and $F$ contains, by the peeling, one lift per residue class, so $F=M\cap L_0\cap L_\infty=E$ and $E\cong(M\cap L_0)/(M\cap qL_0)$. [step 2.1, step 3.1, step 4.1, step 6.1]

8.1 **The relative criterion (3): reduction to simultaneous lifts.** Let $N\subseteq M$ with $N\cong A\otimes_{\mathbb Z}E_N$, $E_N=N\cap L_0\cap L_\infty$, and let $F$ be as in (3). Replacing $F$ by a finitely generated submodule and $M$ by $AF+N$ does not change the hypotheses in the required form, so $F$ is a finitely generated torsion-free, hence free, $\mathbb Z$-module. Since $N$ is balanced, $N=(N\cap L_0)+(N\cap L_\infty)$, and one computes $M\cap(L_0+N)\cap(L_\infty+N)=N+M\cap L_0\cap L_\infty$: an element in the left side differs from an element of $M\cap L_0$ by some $n\in N$, whose failure to lie in $L_\infty$ can be split into its $L_0$- and $L_\infty$-chart parts and subtracted. [F1, A1, step 7.1, algebra]

9.1 **Changing the lifts by $N$.** Using step 8.1, each basis element $f\in F$ can be modified by an element of $N$ so that its image lies in $M\cap L_0\cap L_\infty$; the induced maps $F\to(L_0+\mathbb QN)/(qL_0+\mathbb QN)$ and to the infinity quotient, together with the injection $E_N\to(N\cap L_0)/(N\cap qL_0)$, show that the direct sum $F\oplus E_N$ injects into both rational residues and generates $M$ over $A$. Applying (2) with this $F\oplus E_N$ gives $M$ balanced, the stated exact sequence and image, and $E_M\cong F\oplus E_N$ when the reduction was finite generated. [step 7.2, step 8.1]

10.1 **Conclusion.** Step 7.1 gives (1), step 7.2 gives (2), and steps 8.1–9.1 give (3); in every part no containment of charts and no freeness of $M$ was assumed, and freeness of $M$ over $A$ is concluded only from a finite free simultaneous integral basis. [step 7.1, step 7.2, step 8.1, step 9.1] ∎

## Source note

Parts (1) and (2) are the integral form of Kashiwara's chart Lemma 8.1.1 and its criterion, and part (3) of Lemma 8.1.2; the proof above reproduces the printed peeling and Nakayama arguments, with the two chart vanishing orders kept distinct as the owner direction requires. The $\mathbb P^1$-vector-bundle reformulation is not used as a substitute for the arguments.

