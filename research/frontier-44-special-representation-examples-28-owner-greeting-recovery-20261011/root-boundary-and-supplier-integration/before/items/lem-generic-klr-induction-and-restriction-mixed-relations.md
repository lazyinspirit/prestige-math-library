---
id: lem-generic-klr-induction-and-restriction-mixed-relations
kind: lemma
title: "Generic KLR induction and restriction: mixed relations and the opposite-end exact sequence"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-klr-induction-and-restriction-bimodules,
       def-divided-power-klr-idempotents-and-projectives,
       thm-klr-pbw-basis-theorem,
       thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 3, Proposition 3.2 (right coset decomposition of R(n+1) over R(n,1)), Proposition 3.3, Corollary 3.4 (the corner isomorphism with its q-shifts), Theorem 3.6 (mixed isomorphisms), Proposition 3.7 and Corollary 3.8 (the (R(n),R(n))-bimodule exact sequence), Theorem 3.9 (the opposite-end functorial exact sequence)."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Sections 2.3-2.5: the shuffle/PBW decomposition of R(n+1) over R(n) x R(1) and the exactness of the convolution functors."
---

## Statement

Let $R=\bigoplus_\beta R(\beta)$ be a KLR algebra on a symmetrizable Cartan datum
with no imaginary simple roots
([[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]) and let
$E_i$ denote restriction $e(\beta,i)(-)$ and $F_i$, $\bar F_i$ the right-append
and left-append inductions of [[def-klr-induction-and-restriction-bimodules]]
(so that $\bar F_i(M)=R(\beta+\alpha_i)e(i,\beta)\otimes_{R(\beta)}M$ with
$e(i,\beta)=\sum_{\nu\in I^\beta}e(i\ast\nu)$). Let $t_i$ be an indeterminate of
degree $(\alpha_i\mid\alpha_i)=2d_i$. Then:

(a) for $i\ne j$ there are natural isomorphisms
$E_iF_j\cong q^{-(\alpha_i\mid\alpha_j)}F_jE_i$ and
$\bar F_jE_i\cong E_i\bar F_j$;

(b) for $i=j$ there is a natural isomorphism
$E_iF_i\cong q^{-(\alpha_i\mid\alpha_i)}F_iE_i\oplus(\mathrm{Id}\otimes_kk[t_i])$,
where $(\mathrm{Id}\otimes_kk[t_i])(M)=M\otimes_kk[t_i]$ with $t_i$ homogeneous
of degree $2d_i$;

(c) the opposite-end corner comparison gives a functorial exact sequence in
$\mathrm{Mod}(R(\beta))$
$$0\longrightarrow \bar F_iE_iM\longrightarrow E_i\bar F_iM\longrightarrow q^{-(\alpha_i\mid\beta)}M\otimes_kk[t_i]\longrightarrow 0,$$
where $\otimes_kk[t_i]$ is understood in the graded sense. Equivalently, there
is an exact sequence of $(R(n),R(n))$-bimodules
$0\to R(n)\otimes_{R_1(n-1)}R_1(n)\to R(n+1)\to R(n)\otimes_kk[t]\to0$ in the
notation of the source, with the bimodule structures induced by the embeddings
$\xi_n$. All shifts are computed in the fixed grading of
[[def-klr-grading-and-diagrammatic-composition]]; the functors are exact
([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]).

## Facts & Assumptions

**Given:** A KLR algebra $R$ for a symmetrizable Cartan datum with $a_{ii}=2$,
colors $i,j$, and $\beta\in Q_+$ with $|\beta|=n$; the idempotents
$e(\beta,i)$, $e(i,\beta)$ and the functors $E_i,F_i,\bar F_i$ of
[[def-klr-induction-and-restriction-bimodules]].

[F1] The PBW basis of [[thm-klr-pbw-basis-theorem]]: for a reduced-expression
system, $\{\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)\}$ with $w\in S_n$, $a_r\ge0$,
$\nu\in I^n$ is a $k$-basis of $R_n(Q)$, and each $R(\beta)$ has
finite-dimensional homogeneous components. In particular, for each $w$ there is
$\ell(w)$ and $\tau_w$ is a $k$-linear combination of products of crossings; the
elementary relations of (Q1)-(Q4) and the braid relations let every product of
crossings be rewritten in this form.

[F2] The `dot moves' and the identity $\tau_af-(s_af)\tau_a=(\partial_af)e$
with $\partial_af=(s_af-f)/(x_a-x_{a+1})$ on equal-color corners, and
$\tau_ax_b=x_{s_a(b)}\tau_a$ for $b\notin\{a,a+1\}$; on unequal-color corners
$\tau_ax_a=x_{a+1}\tau_a$, $\tau_ax_{a+1}=x_a\tau_a$ and $\tau_a^2=Q_{ij}
(x_a,x_{a+1})$ (relations (4)-(7) of
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]],
[[def-klr-grading-and-diagrammatic-composition]]).

[F3] $R(\beta+\alpha_i)e(\beta,i)$ is a free right $R(\beta)$-module and
$e(\beta,i)R(\beta+\alpha_i)$ is a free left $R(\beta)$-module, with bases
indexed by the right (resp. left) cosets $S_{n+1}=\bigsqcup_aS_ns_n\cdots
s_a$; consequently the induction and restriction functors of
[[def-klr-induction-and-restriction-bimodules]] are exact and induce the
adjunction $F_i\dashv E_i$
([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]).

## Proof

**Proof technique:** decompose the one-strand enlargement of a block along the
left and right cosets of $S_n$ in $S_{n+1}$, compare the two decompositions
corner by corner with the PBW basis, and read the mixed isomorphisms and the
opposite-end exact sequence off the surviving cosets and their explicit degrees.

1.1 Coset decomposition of one appended strand. By the PBW basis [F1], every element of $R_{n+1}(Q)$ is a sum of monomials $\tau_wx^ae(\nu)$ with $w\in S_{n+1}$, and the right-coset decomposition $S_{n+1}=\bigsqcup_{a=1}^{n+1}S_ns_n\cdots s_a$ with additive lengths rewrites each such monomial, modulo the relations of [F2], in the form $\sum_a r_a\tau_n\cdots\tau_a$ with $r_a\in R(n,1)=R(n)\otimes_kR(1)$; hence $R(n+1)=\bigoplus_{a=1}^{n+1}R(n,1)\tau_n\cdots\tau_a$ as $R(n,1)$-modules, and $R(n+1)$ is free of rank $n+1$ over $R(n,1)$. [F1, F2, algebra]

2.1 Corners and the same-end structure. Multiply the decomposition of step 1.1 by the idempotents $e(n,i)$ on the left and $e(n,j)$ on the right. For $a\le n$ the term $e(n,i)\tau_n\cdots\tau_a$ lies in the corner with first letter $i$ and last letter $i$; moving the idempotent past the crossings with [F2] shows that for $i\ne j$ the summands with $a>1$ vanish on the right idempotent $e(n,j)$ (the last strand carries the color $i$), while for $i=j$ the top summand $e(n,i)R(n,1)e(n,i)$ survives for every $a$. The explicit degree of $\tau_n\cdots\tau_a$ on a fixed word is the sum of the crossing degrees $-b$ along the word, and the PBW leading terms show that $e(n,i)R(n+1)e(n,j)\cong q^{-(\alpha_i|\alpha_j)}\bigl(R(n)e(n-1,j)\otimes_{R(n-1)}e(n-1,i)R(n)\bigr)$ for $i\ne j$ and $e(n,i)R(n+1)e(n,i)\cong q^{-2d_i}\bigl(R(n)e(n-1,i)\otimes_{R(n-1)}e(n-1,i)R(n)\bigr)\oplus e(n,i)R(n,1)e(n,i)$ for $i=j$; the displayed shifts are exactly the source's $q^{-(\alpha_i|\alpha_j)}$ and $q^{-(\alpha_i|\alpha_i)}$. [step 1.1, F2, algebra]

2.2 The opposite-end exact sequence. By the same PBW-coset argument applied to the pair $(R(n),R_1(n))$ with $R_1(n)$ the image of the shift embedding $\xi_n$, the multiplication map $R(n)\otimes_{R_1(n-1)}R_1(n)\to R(n+1)$ is injective with image $\sum_{a=2}^{n+1}R(n,1)\tau_n\cdots\tau_a$, and the complementary coset $R(n,1)\tau_n\cdots\tau_1$ is free of rank one generated by $\tau_n\cdots\tau_1$ over $R(n,1)\cong R(n)\otimes k[x_{n+1}]$. The quotient map $\phi$ sends a PBW monomial to its coefficient on that coset, and the left multiplication by $x_{n+1}$ and the right multiplication by $x_1$ correspond under $\phi$ to multiplication by $t$ on $R(n)\otimes_kk[t]$; hence the displayed exact sequence of $(R(n),R(n))$-bimodules. [step 1.1, F2, F3]

3.1 The mixed isomorphisms (a) and (b). Tensor the corner isomorphisms of step 2.1 with the formulation $E_iF_j(N)=e(\beta,i)R(\beta+\alpha_i)e(\beta,j)\otimes_{R(\beta)}N$ and $F_iE_i(M)=R(\beta+\alpha_i)e(\beta,i)\otimes_{R(\beta)}e(\beta,i)M$. For $i\ne j$ this yields $E_iF_j\cong q^{-(\alpha_i|\alpha_j)}F_jE_i$; for $i=j$ the extra summand $e(n,i)R(n,1)e(n,i)\cong R(n)\otimes_kk[t_i]$ with $t_i$ of degree $2d_i$ survives and gives $E_iF_i\cong q^{-(\alpha_i|\alpha_i)}F_iE_i\oplus(\mathrm{Id}\otimes_kk[t_i])$. The mirror computation with the left coset decomposition $S_{n+1}=\bigsqcup_a\tau_a\cdots\tau_1S(1,n)$ gives $\bar F_jE_i\cong E_i\bar F_j$ for $i\ne j$ by the same vanishing of the nonidentity cosets. [step 2.1, F1]

4.1 The functorial sequence (c). Apply step 2.2 to $\beta+\alpha_i$ in place of $n$, restrict along $e(\beta,i)$ and tensor over $R(\beta)$ with $M$; since the first term of step 2.2 is exactly the kernel of the left-append induction and the quotient is $R(\beta)\otimes_kk[t_i]$, the resulting sequence is $0\to\bar F_iE_iM\to E_i\bar F_iM\to q^{-(\alpha_i|\beta)}M\otimes_kk[t_i]\to0$, functorially in $M$, with the single q-shift coming from the difference of degrees between the two ends of the surviving coset, namely $-(\alpha_i\mid\beta)$. Exactness of all functors is [F3]. [step 3.1, step 2.2, F3]

5.1 Conclusion. Steps 3.1 and 4.1 prove (a), (b) and (c) with their exact shifts in the grading of [[def-klr-grading-and-diagrammatic-composition]]; all identifications are corner-by-corner PBW computations, and no flatness of a quotient or unproved exactness of an induction is assumed beyond the freeness recorded in [F3]. [step 3.1, step 4.1] ∎
