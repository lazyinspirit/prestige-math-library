---
id: lem-deligne-splitting-of-a-mixed-hodge-structure
kind: lemma
title: "The Deligne splitting of a mixed Hodge structure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-mixed-hodge-structure, def-associated-graded-object-of-a-filtered-object, def-internal-direct-sum]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "SS1.2.5-1.2.13, printed pp. 9-13: the two-filtration lemma (1.2.5), the lifting lemma (1.2.8) with its auxiliary lemma (1.2.9), the bigrading (1.2.11) with the decompositions (1.2.11.1)-(1.2.11.3), and the abelian-category theorem (1.2.10) with (1.2.12)"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "Theorem 2.8 with the following note, printed p. 19: the decomposition H_C = sum I^{p,q} with W_k and F^r as partial sums, constructed functorially, and the caveat that its pieces cannot in general be imposed both conjugate-symmetric and filtration-compatible"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures, Srni January 2005 (author-hosted, 15 pp.)"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "(2.2.4)-(2.2.5), printed p. 6: the formula I^{p,q} = (F^p cap W_{p+q}) cap (F^q cap W_{p+q} + F^{q-1} cap W_{p+q-2} + ...), the partial-sum decompositions, the projection isomorphism onto (Gr^W_{p+q})^{p,q} and the congruence I^{p,q} = I^{q,p} mod W_{l-2}"
    - title: "F. El Zein, Hodge Structures and Mixed Hodge Structures, University of Pennsylvania course notes (June 24, 2010)"
      url: "https://www2.math.upenn.edu/~siegelch/Notes/ElZein.pdf"
      locator: "Lemma 2.1, printed pp. 2-3: the splitting formula with the congruence modulo W_{p+q-2} and the partial-sum decompositions"
    - title: "Joana Cirici and Geoffroy Horel, Mixed Hodge structures and formality of symmetric monoidal functors, author-hosted"
      url: "https://geoffroy.horel.org/MHSformality.pdf"
      locator: "SS3, Lemma 3.3, printed pp. 7-9: independent statement of Deligne's splitting with its functoriality"
---

## Statement

Let $(H,W,F)$ be a rational mixed Hodge structure
([[def-rational-mixed-hodge-structure]]) with complex conjugation $\sigma$ on
$H_{\mathbb C}=H\otimes_{\mathbb Q}\mathbb C$, and write
$\bar F^a=\sigma(F^a)$ for the conjugate Hodge filtration; all weight spaces
below are the complexifications $W_aH_{\mathbb C}$. For integers $p,q$ put
$m=p+q$ and
$$I^{p,q}=\bigl(F^p\cap W_m\bigr)\cap\Bigl(\bigl(\bar F^q\cap W_m\bigr)+\sum_{j\ge1}\bigl(\bar F^{q-j}\cap W_{m-j-1}\bigr)\Bigr),$$
the intersections and the sum taken in $H_{\mathbb C}$. Then:

(a) $I^{p,q}\subseteq W_m\cap F^p$, the intersection $I^{p,q}\cap W_{m-1}$ is
zero, and the projection $W_m\to\operatorname{Gr}^W_mH_{\mathbb C}$ maps
$I^{p,q}$ isomorphically onto the summand $H^{p,q}_m$ of the mixed Hodge
definition;

(b) $W_mH_{\mathbb C}=\bigoplus_{p+q\le m}I^{p,q}$,
$F^aH_{\mathbb C}=\bigoplus_{p\ge a}I^{p,q}$ for all integers $a,m$; in
particular $H_{\mathbb C}=\bigoplus_{p,q}I^{p,q}$;

(c) every morphism $f\colon H\to K$ of rational mixed Hodge structures
satisfies $f_{\mathbb C}(I^{p,q}(H))\subseteq I^{p,q}(K)$.

The construction satisfies
$I^{p,q}+W_{m-2}=\sigma(I^{q,p})+W_{m-2}$ inside $W_m$.
It need not satisfy $\sigma(I^{p,q})=I^{q,p}$, and the same splitting need
not split $\bar F$: its conjugate gives
$\bar F^bH_{\mathbb C}=\bigoplus_{q\ge b}\sigma(I^{q,p})$. The splitting is
the one pinned down in the sources by the displayed formula, not an arbitrary
direct-sum decomposition.

## Facts & Assumptions

**Given:** A rational mixed Hodge structure $(H,W,F)$ with conjugation $\sigma(h\otimes z)=h\otimes\bar z$ and conjugate filtration $\bar F=\sigma(F)$, as in [[def-rational-mixed-hodge-structure]]; the complexified weight filtration $W_aH_{\mathbb C}=(W_aH)\otimes_{\mathbb Q}\mathbb C$ is again written $W_a$.

[F1] On each $\operatorname{Gr}^W_nH_{\mathbb C}$ the induced filtrations $F$ and $\bar F$ are $n$-opposed, $\operatorname{Gr}^W_nH_{\mathbb C}=\bigoplus_{p+q=n}H^{p,q}_n$ with $H^{p,q}_n=F^p\operatorname{Gr}^W_n\cap\bar F^q\operatorname{Gr}^W_n$, where $F^p\operatorname{Gr}^W_n$ is the image of $F^p\cap W_n$ and $\bar F^q\operatorname{Gr}^W_n$ the image of $\bar F^q\cap W_n$ ([[def-rational-mixed-hodge-structure]], [[def-associated-graded-object-of-a-filtered-object]]).

[F2] $W$ is finite: $W_a=0$ for all sufficiently negative $a$ and $W_a=H_{\mathbb C}$ for all sufficiently positive $a$; $F$ and $\bar F$ are finite decreasing filtrations, so also the induced filtrations on each $\operatorname{Gr}^W_n$ are finite ([[def-rational-mixed-hodge-structure]]).

[F3] A sum of vectors from the summands of a finite internal direct sum vanishes only if every summand vanishes; indeed, each summand then lies in its intersection with the sum of the others, which is zero ([[def-internal-direct-sum]]).

## Proof

**Proof technique:** direct.

1.1 (Two-filtration lemma, spanning and partial sums.) Let $V$ be a finite-dimensional $\mathbb C$-vector space with finite decreasing filtrations $F$ and $\bar F$ such that $V=\bigoplus_{p+q=n}(F^pV\cap\bar F^qV)$ for an integer $n$. Then (i) $F^aV+\bar F^{n+1-a}V=V$ for every $a$, and (ii) $F^aV=\bigoplus_{p\ge a}(F^pV\cap\bar F^{n-p}V)$, with the conjugate formula $\bar F^bV=\bigoplus_{q\ge b}(F^{n-q}V\cap\bar F^qV)$. For (i), write $v=\sum_{p+q=n}v_{p,q}$; the terms with $p\ge a$ sum into $F^aV$, and each remaining term has $p<a$, hence $q=n-p>n-a$, that is $q\ge n+1-a$, so their sum lies in $\bar F^{n+1-a}V$. For (ii), prove $F^aV\subseteq\sum_{p\ge a}(F^pV\cap\bar F^{n-p}V)$ by descending induction on $a$: the claim is trivial when $F^aV=0$, and otherwise (i) with $a+1$ gives $V=F^{a+1}V+\bar F^{n-a}V$, so the modular law applied to $F^{a+1}V\subseteq F^aV\subseteq V$ yields $F^aV=F^{a+1}V+(F^aV\cap\bar F^{n-a}V)$, in which the induction hypothesis places $F^{a+1}V$ inside $\sum_{p\ge a+1}(F^pV\cap\bar F^{n-p}V)$ while $F^aV\cap\bar F^{n-a}V$ is the term with $p=a$; the reverse inclusion is clear, and the sum is direct because the pieces $F^pV\cap\bar F^{n-p}V$ are independent by the decomposition hypothesis, which is symmetric in the two filtrations, so the same argument with $F$ and $\bar F$ interchanged gives the formula for $\bar F^bV$. [given, algebra]

2.1 (Two-filtration lemma, vanishing.) Under the hypothesis of step 1.1, $F^aV\cap\bar F^bV=0$ whenever $a+b>n$. Indeed, let $x\in F^aV\cap\bar F^bV$ and let $x=\sum_{p+q=n}x_{p,q}$ be its unique decomposition with $x_{p,q}\in F^pV\cap\bar F^qV$. Since $x\in F^aV$, its decomposition lies in $\bigoplus_{p\ge a}(F^pV\cap\bar F^{n-p}V)$ by step 1.1 (ii), so $x_{p,n-p}=0$ for every $p<a$; since $x\in\bar F^bV$, the conjugate half of step 1.1 (ii) gives $x_{n-q,q}=0$ for every $q<b$. If $x\ne0$, some $x_{p,n-p}$ is nonzero, and it satisfies $p\ge a$ and $n-p\ge b$, whence $n=p+(n-p)\ge a+b>n$, a contradiction; so $x=0$. [step 1.1, algebra]

2.2 (Lifting.) Let $m=p+q$. Every $d\in W_{m-1}$ can be written as $d=z+g$ with $z\in F^p\cap W_{m-1}$ and $g\in(\bar F^q\cap W_{m-1})+\sum_{j\ge1}(\bar F^{q-j}\cap W_{m-j-1})$. To see this, construct elements $d_1,d_2,\dots$ and vectors $f_j,g_j$ as follows. Put $d_1=d$, and suppose $d_j\in W_{m-j}$ has been constructed for some $j\ge1$. By [F1] the induced filtrations on $\operatorname{Gr}^W_{m-j}$ are $(m-j)$-opposed, and step 1.1 (i) applied there with the pair $(p,q-j+1)$, whose indices sum to $m-j+1$, shows that the images of $F^p\cap W_{m-j}$ and $\bar F^{q-j+1}\cap W_{m-j}$ generate $\operatorname{Gr}^W_{m-j}$; choose $f_j\in F^p\cap W_{m-j}$ and $g_j\in\bar F^{q-j+1}\cap W_{m-j}$ whose classes sum to the class of $d_j$, and put $d_{j+1}:=d_j-f_j-g_j\in W_{m-j-1}$. By [F2] there is $J$ with $W_{m-J}=0$; the recursion stops there, and summing the identities $d_{j+1}=d_j-f_j-g_j$ gives $d=\sum_{j=1}^{J-1}(f_j+g_j)$. Each $f_j$ lies in $F^p\cap W_{m-j}\subseteq F^p\cap W_{m-1}$; $g_1$ lies in $\bar F^q\cap W_{m-1}$ and, for $j\ge2$, $g_j$ lies in $\bar F^{q-(j-1)}\cap W_{m-(j-1)-1}$. Hence $z:=\sum_jf_j$ and $g:=\sum_jg_j$ have the required properties. [F1, F2, step 1.1, construct]

3.1 (Surjectivity onto the graded summand.) Let $\xi\in H^{p,q}_m$. Since $H^{p,q}_m\subseteq F^p\operatorname{Gr}^W_m$ is the image of $F^p\cap W_m$, choose $x_0\in F^p\cap W_m$ representing $\xi$; since $H^{p,q}_m\subseteq\bar F^q\operatorname{Gr}^W_m$ is the image of $\bar F^q\cap W_m$, choose $y_0\in\bar F^q\cap W_m$ also representing $\xi$. Then $d:=x_0-y_0$ lies in $W_{m-1}$, so step 2.2 gives $d=z+g$ with $z\in F^p\cap W_{m-1}$ and $g$ in the displayed sum. Put $x:=x_0-z=y_0+g$. Then $x\in F^p\cap W_m$, and $x\in(\bar F^q\cap W_m)+\sum_{j\ge1}(\bar F^{q-j}\cap W_{m-j-1})$ because $y_0$ lies in the first summand and $g$ in the sum; so $x\in I^{p,q}$. Finally $x-x_0=-z\in W_{m-1}$, so $x$ and $x_0$ have the same class $\xi$ in $\operatorname{Gr}^W_m$. Hence the projection maps $I^{p,q}$ onto $H^{p,q}_m$, and $I^{p,q}\subseteq W_m\cap F^p$ holds by definition. [F1, step 2.2, algebra]

4.1 (Injectivity modulo the lower weight.) Suppose $0\ne x\in I^{p,q}\cap W_{m-1}$, and choose its least weight index $r$, so $x\in W_r\setminus W_{r-1}$ and $r<m$. Write $x=y+\sum_{j\ge1}g_j$ as in the defining formula, with $y\in\bar F^q\cap W_m$ and $g_j\in\bar F^{q-j}\cap W_{m-j-1}$; only finitely many terms are needed because $W$ is finite. Put $J=m-r-1\ge0$. The sum $\sum_{j>J}g_j$ lies in $W_{r-1}$, while $h:=y+\sum_{1\le j\le J}g_j$ lies in $\bar F^{q-J}$ and also in $W_r$, because $h=x-\sum_{j>J}g_j$. Thus the nonzero class of $x$ in $\operatorname{Gr}^W_r$ belongs to $F^p\operatorname{Gr}^W_r\cap\bar F^{q-J}\operatorname{Gr}^W_r$. But $p+q-J=r+1>r$, so step 2.1 makes that intersection zero, a contradiction. Together with step 3.1 this proves the projection isomorphism in (a). [F1, F2, step 2.1, step 3.1, algebra]

5.1 (The weight decomposition and the direct-sum identity.) For every $m$ the projection restricts to an isomorphism $\bigoplus_{p+q=m}I^{p,q}\to\operatorname{Gr}^W_mH_{\mathbb C}$: by steps 3.1 and 4.1 each $I^{p,q}$ maps isomorphically onto $H^{p,q}_m$, and by [F1] the summands $H^{p,q}_m$ are independent with sum $\operatorname{Gr}^W_m$. In particular $\dim I^{p,q}=\dim H^{p,q}_m$, so $\sum_{p+q=m}\dim I^{p,q}=\dim\operatorname{Gr}^W_m$ for every $m$. The sum map $\psi_m\colon\bigoplus_{p+q\le m}I^{p,q}\to W_m$ is injective: if a finite sum $\sum_{m'\le m}\sum_{p+q=m'}x_{p,q}$ vanishes, its class in $\operatorname{Gr}^W_m$ is the sum of the classes of the top pieces $x_{p,m-p}$, which vanishes only if each of those pieces is zero because the restricted projection is an isomorphism; subtracting them leaves a vanishing sum over $m'\le m-1$, and induction on $m$ (with $W_m=0$ for all sufficiently negative $m$) finishes the argument. Its image therefore has dimension $\sum_{m'\le m}\dim\operatorname{Gr}^W_{m'}=\dim W_m$, the finite telescoping identity for the finite filtration $W$; an injective map between spaces of equal dimension is an isomorphism, so $W_mH_{\mathbb C}=\bigoplus_{p+q\le m}I^{p,q}$. Taking $m$ large gives $H_{\mathbb C}=\bigoplus_{p,q}I^{p,q}$. [F1, F2, step 3.1, step 4.1, F3, algebra]

5.2 (Conjugation modulo lower weights.) Work in $U=W_m/W_{m-2}$ with the images of $F^p\cap W_m$ and $\bar F^q\cap W_m$. Their intersection $T$ maps injectively to $\operatorname{Gr}^W_m$: its intersection with $W_{m-1}/W_{m-2}$ is $F^p\operatorname{Gr}^W_{m-1}\cap\bar F^q\operatorname{Gr}^W_{m-1}=0$ by step 2.1, since $p+q=m>m-1$. The formula for $I^{p,q}$ shows its image in $U$ lies in $T$, since every tail term has weight at most $m-2$. Step 3.1 shows this image maps onto $H^{p,q}_m$; the image of $T$ also lies in $H^{p,q}_m$, so injectivity makes the image of $I^{p,q}$ exactly $T$. Conjugating the same argument for $I^{q,p}$ shows that $\sigma(I^{q,p})$ has this same image $T$ in $U$. Therefore $I^{p,q}+W_{m-2}=\sigma(I^{q,p})+W_{m-2}$. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 (The Hodge decomposition.) For all $a,m$ one has $F^a\cap W_m=\bigoplus_{p\ge a,\ p+q\le m}I^{p,q}$. Indeed, decompose $x\in F^a\cap W_m$ by step 5.1. Its class in $\operatorname{Gr}^W_m$ lies in $\bigoplus_{p\ge a}H^{p,m-p}_m$ by step 1.1, so its top components with $p<a$ vanish by the projection isomorphism. Subtracting the remaining top components leaves an element of $F^a\cap W_{m-1}$, and induction through the finite $W$ proves the assertion. Taking $m$ large proves $F^a=\bigoplus_{p\ge a}I^{p,q}$. Conjugating this identity gives $\bar F^b=\bigoplus_{q\ge b}\sigma(I^{q,p})$; it does not assert a decomposition of $\bar F$ by the original $I^{p,q}$. [F1, F2, step 1.1, step 4.1, step 5.1, algebra]

7.1 (Functoriality.) Let $f\colon H\to K$ be a morphism of rational mixed Hodge structures. Since $f$ is defined over $\mathbb Q$, $f_{\mathbb C}$ commutes with the conjugations, so $f_{\mathbb C}(\bar F^qH_{\mathbb C})=\overline{f_{\mathbb C}(F^qH_{\mathbb C})}\subseteq\bar F^qK_{\mathbb C}$; it also satisfies $f_{\mathbb C}(F^pH_{\mathbb C})\subseteq F^pK_{\mathbb C}$ and $f_{\mathbb C}(W_aH_{\mathbb C})\subseteq W_aK_{\mathbb C}$ by definition. Applying $f_{\mathbb C}$ to the two intersections and the sum defining $I^{p,q}(H)$ therefore produces an element of the corresponding intersection of $F^pK_{\mathbb C}$ with the sum of the $\bar F$-terms for $K$, and $W$-membership is preserved term by term; hence $f_{\mathbb C}(I^{p,q}(H))\subseteq I^{p,q}(K)$. [given, algebra] ∎

## Source notes

The construction is Deligne's; the proof above is a complete reconstruction of Deligne II (1.2.5), (1.2.8)-(1.2.11) in the increasing-weight convention. Step 2.2 replaces Deligne's induction (1.2.8)/(1.2.9) by a direct descending correction through the finite weight filtration, and steps 1.1 and 2.1 supply the two-filtration lemma (1.2.5) in the forms used afterwards. Weber (2.2.4)-(2.2.5) and El Zein, Lemma 2.1 state the displayed formula and the partial-sum decompositions; Cirici-Horel, Lemma 3.3 was an independent cross-check of the formula. The formula is not conjugate-symmetric in general: step 5.2 proves the congruence $I^{p,q}\equiv\sigma(I^{q,p})\bmod W_{m-2}$ (Weber (2.2.5)), and the note after Voisin's Theorem 2.8 records that the pieces cannot in general be chosen simultaneously conjugate-symmetric and compatible with the two filtrations. The proof uses the exact $W,F$ decompositions and the proved congruence, without asserting exact conjugate symmetry or an exact $\bar F$ decomposition by the same $I^{p,q}$.
