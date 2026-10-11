---
id: lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition
kind: lemma
title: "Graded hard Lefschetz has a canonical primitive decomposition"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-abelian-category, def-biproduct, def-kernels-and-cokernels-as-equalizers-and-coequalizers, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, def-exact-sequence-and-short-exact-sequence-in-an-abelian-category, thm-a-short-exact-sequence-is-a-kernel-cokernel-pair, thm-every-monomorphism-is-the-kernel-of-its-cokernel, thm-splitting-lemma-in-an-abelian-category, def-split-short-exact-sequence-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§2.2.3(c) printed p. 12; Theorem 4.4.4 printed p. 36; §4.5 formulas (22)–(27) printed pp. 37–38"
    - title: "P. Deligne, «Théorème de Lefschetz et critères de dégénérescence de suites spectrales», Publ. Math. IHÉS 35 (1968) 107–126 (complete numdam PDF)"
      url: "https://www.numdam.org/item/PMIHES_1968__35__107_0.pdf"
      locator: "§1, results (1.1)–(1.13) with proofs, printed pp. 107–110"
---

## Statement

Let $H^j$, $j\in\mathbb Z$, be objects of an abelian category, zero for all but finitely many $j$, and let $L_j:H^j\to H^{j+2}$ be morphisms whose iterates give isomorphisms $L^r:H^{-r}\to H^r$ for every $r\ge0$, with $L^0=1_{H^0}$. Put $P^{-r}:=\ker\bigl(L^{r+1}:H^{-r}\to H^{r+2}\bigr)$ for $r\ge0$, and $P^{-r}=0$ for $r<0$. Then for every $r\ge0$ the powers of $L$ induce finite direct sum decompositions
$$H^{-r}=\bigoplus_{j\ge0}L^jP^{-r-2j},\qquad H^{r}=\bigoplus_{j\ge0}L^{r+j}P^{-r-2j},$$
where $L^jP^{-r-2j}$ denotes the image of the restriction of $L^j$ to the subobject $P^{-r-2j}\subseteq H^{-r-2j}$, and likewise for $L^{r+j}P^{-r-2j}$. Each displayed power $L^j$ or $L^{r+j}$ restricts to a monomorphism on its primitive source, and both decompositions are natural for morphisms commuting with $L$. This is a decomposition statement for graded objects in an abelian category; it does not identify primitive objects with classes annihilated by an untruncated map on a derived splitting of a complex.

## Facts & Assumptions

**Given:** Objects $H^j$ of an abelian category, zero for all but finitely many $j$, morphisms $L_j:H^j\to H^{j+2}$, and the hypothesis that each iterate $L^r:H^{-r}\to H^r$, $r\ge0$, is an isomorphism, with $L^0=1_{H^0}$; the objects $P^{-r}=\ker(L^{r+1}:H^{-r}\to H^{r+2})$ for $r\ge0$ and $P^{-r}=0$ for $r<0$.

[F1] Kernels and cokernels are the equalizers and coequalizers of a morphism with the zero morphism: the kernel inclusion $k$ of $f$ satisfies $fk=0$ and every $h$ with $fh=0$ factors uniquely as $h=k h'$, and any two kernels of the same morphism are canonically isomorphic over it ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]], [[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[F2] A composable triple $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$ is a short exact sequence if and only if $i$ is a kernel of $p$ and $p$ is a cokernel of $i$, and every epimorphism is the cokernel of its kernel ([[thm-a-short-exact-sequence-is-a-kernel-cokernel-pair]], [[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]], [[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

[F3] Splitting lemma: if $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$ is a short exact sequence admitting $s:C\to B$ with $ps=1_C$, then there is a unique $\pi:B\to A$ with $\pi i=1_A$ and $i\pi+sp=1_B$, so that $(B,i,s,\pi,p)$ is the biproduct diagram of $A$ and $C$ ([[thm-splitting-lemma-in-an-abelian-category]], [[def-split-short-exact-sequence-in-an-abelian-category]], [[def-biproduct]]).

[F4] A monomorphism $f:X\to Y$ induces an isomorphism $X\to\operatorname{im}(f)$ over $Y$: by [[thm-every-monomorphism-is-the-kernel-of-its-cokernel]] the map $f$ itself is a kernel of its cokernel $\operatorname{coker}(f)$, while the image inclusion $\operatorname{im}(f)\to Y$ is a kernel of $\operatorname{coker}(f)$ by definition, and kernels of one morphism are unique up to a unique compatible isomorphism by [F1]. Consequently, if $X$ is the biproduct of $A$ and $B$ with injections $i_A,i_B$, then applying this isomorphism to the biproduct identities exhibits $\operatorname{im}(f)$ as the biproduct of $\operatorname{im}(fi_A)$ and $\operatorname{im}(fi_B)$.

## Proof

**Proof technique:** induction on the number $j$ of peeled degree-two steps.

1.1 For every $m\ge2$ the map $L:H^{-m}\to H^{-m+2}$ is a monomorphism, because $L^m=L^{m-1}L$ is an isomorphism: if $Lu=0$ then $L^mu=L^{m-1}Lu=0$, hence $u=0$. [given, algebra]

1.2 For every $r\ge0$ the map $p:=L^{r+1}:H^{-r}\to H^{r+2}$ is an epimorphism and $s:=L(L^{r+2})^{-1}:H^{r+2}\to H^{-r}$ satisfies $ps=1_{H^{r+2}}$, because $pL=L^{r+2}$ is an isomorphism: if $vp=0$ then $vL^{r+2}=vpL=0$, hence $v=0$, and $ps=L^{r+1}L(L^{r+2})^{-1}=L^{r+2}(L^{r+2})^{-1}=1$. [given, algebra]

2.1 Fix $r\ge0$ and let $i:P^{-r}\to H^{-r}$ be the kernel of $p=L^{r+1}$. Since $p$ is epic by step 1.2, [F2] makes $0\to P^{-r}\xrightarrow{i}H^{-r}\xrightarrow{p}H^{r+2}\to0$ short exact. Its section $s=L(L^{r+2})^{-1}$ gives, by [F3], a projection $\pi:H^{-r}\to P^{-r}$ with $\pi i=1$, $i\pi+sp=1$ and $\pi s=0$. Put $t=L:H^{-r-2}\to H^{-r}$ and $g=L^{r+2}:H^{-r-2}\to H^{r+2}$. Then $g$ is an isomorphism, $s=tg^{-1}$, $pt=g$ and $\pi t=\pi sg=0$. Consequently $(i,t):P^{-r}\oplus H^{-r-2}\to H^{-r}$ has inverse $(\pi,g^{-1}p)$: the diagonal composites are identities, the off-diagonal composites vanish, and $i\pi+tg^{-1}p=i\pi+sp=1$. Since $t$ is monic by step 1.1, [F4] identifies its source with its image. Hence this is the canonical decomposition $H^{-r}=P^{-r}\oplus LH^{-r-2}$. The endomorphism $sp$ projects onto the second summand, whereas its projection to the source $H^{-r-2}$ is $g^{-1}p$. [F1, F2, F3, F4, step 1.1, step 1.2, construct]

3.1 Base of the induction: for $j=0$ the object $H^{-r}$ is the biproduct of $P^{-r}=L^0P^{-r}$ and $L^1H^{-r-2}=LH^{-r-2}$. This is exactly the decomposition of step 2.1, so the assertion holds for $j=0$. [base, step 2.1]

3.2 Induction hypothesis: fix $j\ge0$ and assume the assertion for this $j$, that is, $H^{-r}$ is the biproduct of $P^{-r},LP^{-r-2},\dots,L^jP^{-r-2j}$ and $L^{j+1}H^{-r-2j-2}$; we must derive it for $j+1$. [ih, step 2.1]

4.1 Applying step 2.1 with $r$ replaced by $r+2j+2$ gives the biproduct decomposition $H^{-r-2j-2}=P^{-r-2j-2}\oplus LH^{-r-2j-4}$. The map $L^{j+1}:H^{-r-2j-2}\to H^{-r}$ is a monomorphism, being a composite of the monomorphisms of step 1.1; by [F4] it carries this biproduct diagram to the biproduct diagram of its image, $\operatorname{im}(L^{j+1})=L^{j+1}P^{-r-2j-2}\oplus L^{j+1}(LH^{-r-2j-4})=L^{j+1}P^{-r-2j-2}\oplus L^{j+2}H^{-r-2j-4}$. Substituting this into the biproduct of the induction hypothesis (step 3.2) gives that $H^{-r}$ is the biproduct of $P^{-r},LP^{-r-2},\dots,L^{j+1}P^{-r-2j-2}$ and $L^{j+2}H^{-r-2j-4}$, which is the assertion for $j+1$. [F4, step 1.1, step 2.1, step 3.2, algebra]

5.1 By induction (steps 3.1, 3.2 and 4.1) the biproduct decomposition of step 3.2 holds for every $j\ge0$. Since $H^n=0$ for all sufficiently negative $n$, choose $J$ with $H^{-r-2J-2}=0$; then the tail $L^{J+1}H^{-r-2J-2}$ vanishes, and $H^{-r}$ is the biproduct of $P^{-r},LP^{-r-2},\dots,L^JP^{-r-2J}$, i.e. the finite direct sum decomposition $H^{-r}=\bigoplus_{j\ge0}L^jP^{-r-2j}$ of the Statement. Each restricted power $L^j|_{P^{-r-2j}}$ is a monomorphism, being for $j\ge1$ a composite of the monomorphisms of step 1.1 and for $j=0$ the primitive kernel inclusion. [step 1.1, step 4.1, given, algebra]

6.1 Applying the isomorphism $L^r:H^{-r}\to H^r$ to the decomposition of step 5.1 carries the biproduct decomposition of $H^{-r}$ to a biproduct decomposition of $H^r$ with summands $L^r(L^jP^{-r-2j})=L^{r+j}P^{-r-2j}$, giving $H^r=\bigoplus_{j\ge0}L^{r+j}P^{-r-2j}$. Each restricted power $L^{r+j}|_{P^{-r-2j}}=L^r\circ\bigl(L^j|_{P^{-r-2j}}\bigr)$ is a monomorphism, being the composite of an isomorphism with the monomorphism of step 5.1. [given, step 5.1, algebra]

7.1 Naturality. Let $\varphi_j:H^j\to H'^{\,j}$ be a morphism of graded objects into another such family $(H'^{\,j},L'^{\,j})$ with $L'\varphi_j=\varphi_{j+2}L$ for all $j$. Then $\varphi$ commutes with every iterate: $L'^{\,r}\varphi_{-r}=\varphi_rL^r$, hence $(L'^{\,r+2})^{-1}\varphi_{r+2}=\varphi_{-r-2}(L^{r+2})^{-1}$; consequently $\varphi_{-r}$ carries $P^{-r}=\ker L^{r+1}$ into $P'^{\,-r}=\ker L'^{\,r+1}$, because $L'^{\,r+1}\varphi_{-r}i=\varphi_{r+2}L^{r+1}i=0$ and the kernel inclusion of $L'^{\,r+1}$ has the universal property of [F1]. The comparison $\pi'\varphi_{-r}=\varphi^P\pi$ of the projections holds because both sides become equal after composition with the monomorphism $i'$, where $\varphi^P:P^{-r}\to P'^{\,-r}$ is the factorization of $\varphi_{-r}i$ through $i'$; and $\varphi_{-r}s=s'\varphi_{r+2}$ holds by the displayed commutation with the inverses of $L^{r+2},L'^{\,r+2}$. So $\varphi$ preserves the decomposition of step 2.1, and by the same chain of identities at the parameter $r+2j+2$ it maps each summand $L^jP^{-r-2j}$ into $L'^{\,j}P'^{\,-r-2j}$ and intertwines the two finite decompositions of step 5.1; the second decompositions, obtained in step 6.1 from the first by the isomorphisms $L^r,L'^{\,r}$, are intertwined as well. [F1, step 2.1, step 5.1, step 6.1, algebra]

8.1 The base case of step 3.1 and the induction step of step 4.1 establish the hypothesis of step 3.2 for every $j\ge0$, so step 5.1 gives the first displayed decomposition for every $r\ge0$, and steps 6.1 and 7.1 give the second decomposition, the monomorphism clause and naturality; the degenerate cases are included, since a zero object has all its summands zero and every argument above is an identity between finitely many morphisms. [step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, discharge-induction] ∎
