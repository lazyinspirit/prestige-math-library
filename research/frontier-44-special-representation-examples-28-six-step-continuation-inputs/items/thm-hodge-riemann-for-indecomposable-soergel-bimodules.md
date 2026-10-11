---
id: thm-hodge-riemann-for-indecomposable-soergel-bimodules
kind: theorem
title: "Simultaneous induction: Soergel's conjecture, hard Lefschetz and the Hodge-Riemann relations hold for all elements"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-local-intersection-form-for-a-soergel-summand, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, def-the-deformed-lefschetz-operator-on-b-x-b-s, thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character, lem-local-intersection-forms-embed-in-primitive-lefschetz-forms, lem-hodge-riemann-for-large-positive-deformation, thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs, thm-deformed-hard-lefschetz-for-b-x-b-s, lem-tensoring-with-b-s-preserves-hodge-riemann-signs, lem-hard-lefschetz-implies-primitive-decomposition, lem-family-signature-constancy-and-the-weak-lefschetz-substitute, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis, thm-rank-two-type-a-soergel-bimodule-decompositions, lem-the-rank-one-soergel-bimodule-square-splits]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.2.5 (structure of the proof, the induction on Bruhat ideals and the inspection of X = {w : ell(w) <= 2}), together with the displays (1.3)-(1.9) of Sections 1.2.2-1.2.4 and the end of Section 6.8"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.6, the proof of Theoreme 2.7 (recurrence on the length and the simultaneous induction)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Lemma 7.1 and Bemerkung 6.15 (the omnibus lemma and the rank-one and rank-two cases)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A symmetric group $S_n$, a finite Bruhat ideal $X\subseteq S_n$ (closed under $y\le x\in X$), the statements $\mathrm S(x)$, $\mathrm hL(x)$, $\mathrm{HR}(x)$ of the dictionary ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]), the deformed statement packages $\mathrm hL(x,s)_\zeta$, $\mathrm{HR}(x,s)_\zeta$, $\mathrm{HRbar}(x,s)_\zeta$ with lowest degree $-\ell(x)-1$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]), the local intersection forms $(-,-)^{x,s}_y$ and the sign hypotheses $\mathrm S^\pm(y,x,s)$ ([[def-local-intersection-form-for-a-soergel-summand]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]), and a fixed strictly dominant $\rho$.

[F1] The detection theorem: under $\mathrm S(<xs)$, non-degeneracy of every local intersection form $(-,-)^{x,s}_y$ for $y<xs$ is equivalent to $\mathrm S(xs)$ ([[thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character]]).

[F2] The embedding theorem: under $\mathrm S(<xs)$ and $\mathrm{HR}(y)$ for $y<xs$, the local intersection forms embed isometrically, up to a positive scalar, into the primitive Lefschetz forms of $B_x^RB_s^R$; consequently $\mathrm{HR}(x,s)$ implies $\mathrm S(xs)$, and more precisely $\mathrm{HR}(x,s)$ implies the definiteness statements $\mathrm S^\pm(<xs,x,s)$ ([[lem-local-intersection-forms-embed-in-primitive-lefschetz-forms]]).

[F3] The three-case hard Lefschetz theorem for the deformed operator on $B_xB_s$: the cases $(\zeta>0,\ xs<x)$ under $\mathrm S(x)$ and $\mathrm hL(x)$; $(\zeta>0,\ xs>x)$ under $\mathrm S(\le x)$, the lower ascent HR statements, $\mathrm{HRbar}(<x,s)_\zeta$ and $\mathrm{HR}(x)$; and $(\zeta=0,\ xs>x)$ under $\mathrm S(\le x)$, the lower ascent HR statements and $\mathrm hL(z)$ for all $z<xs$; in each case the conclusion is $\mathrm hL(x,s)_\zeta$ for the stated parameters ([[thm-deformed-hard-lefschetz-for-b-x-b-s]]).

[F4] The deformation principle: $\mathrm{HR}(x)$ together with $\mathrm hL(x,s)_\zeta$ for all $\zeta$ in an interval implies $\mathrm{HR}(x,s)_\zeta$ throughout that interval, because $\mathrm{HR}(x,s)_{\zeta_0}$ holds for some $\zeta_0\gg0$ and signatures are constant on compact parameter intervals free of parameter values where the form degenerates; on $(0,\infty)$ one applies this on a compact subinterval joining any requested positive parameter to a sufficiently large one ([[lem-hodge-riemann-for-large-positive-deformation]], [[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]]).

[F5] The undeformed restriction lemma: if $\mathrm hL(x,s)_0$ holds then $\mathrm hL(xs)$ holds, and if $\mathrm{HRbar}(x,s)_0$ holds then the restriction of the intersection form to the top summand $B_{xs}$ satisfies HR with the ambient signs; once $\mathrm S(xs)$ is known, positivity of the comparison scalar identifies this restricted form with the intrinsic normalized one, giving $\mathrm{HR}(xs)$ and $\mathrm{HRbar}(xs)$ ([[lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands]]).

[F6] For $w$ of length $\le2$ the statements $\mathrm S(w)$, $\mathrm hL(w)$ and $\mathrm{HR}(w)$, and the parameterized statements $\mathrm{HR}(z,t)_\zeta$ for the pairs with $z<zt$ of length $\le2$, hold by the explicit rank-one and rank-two computations: the rank-one module has Betti numbers $1,1$ in degrees $-1,+1$, its middle Lefschetz map is an isomorphism and the bottom Lefschetz form is positive; for a reduced two-letter word the product is the indecomposable $B_{st}$ with Betti numbers $1,2,1$ in degrees $-2,0,2$, the extreme Lefschetz maps are isomorphisms, the kernel of the middle map is one-dimensional and its Lefschetz form is negative definite, which is HR with the standard sign ([[lem-the-rank-one-soergel-bimodule-square-splits]], [[thm-rank-two-type-a-soergel-bimodule-decompositions]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F7] Under $\mathrm S(\le y)$ the comparison lemma gives the unshifted decomposition of products with $B_s$ needed in the recognition of direct summands, and the invariant-form comparison is positive, so that the intrinsic and the restricted forms have the same signs ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]], [[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

## Statement

Let $X\subseteq S_n$ be a finite Bruhat ideal containing the initial ideal $X_0=\{w:\ell(w)\le2\}$ and assume:

(1) $\mathrm{HR}(z,t)_\zeta$ holds for all $\zeta\ge0$, all $z<zt$ with $zt\in X$ and all simple $t$;

(2) $\mathrm{HR}(z,t)_\zeta$ holds for all $\zeta>0$, all $zt<z$ with $z\in X$ and all simple $t$.

Then for every $x\in X$ the three statements $\mathrm S(x)$, $\mathrm hL(x)$ and $\mathrm{HR}(x)$ hold. Since (1) and (2) hold for the initial ideal $X_0=\{w:\ell(w)\le2\}$ by direct inspection of the rank-one and rank-two cases, and the induction step below preserves them when passing from an ideal $X$ to $X\cup\{x'\}$ with $x'$ minimal outside $X$, the theorem gives: for every $w\in S_n$, Soergel's conjecture $\mathrm S(w)$, hard Lefschetz $\mathrm hL(w)$ and the Hodge-Riemann relations $\mathrm{HR}(w)$ hold; and for every $x,s$ with $xs>x$ the strong forms $\mathrm{HRbar}(x,s)_\zeta$ hold for all $\zeta\ge0$. The induction below is finite (it runs over the finitely many elements of $S_n$) and uses no choice.

## Proof
**Proof technique:** induction over the finite Bruhat order; the four implications (detection, embedding, three-case hard Lefschetz and deformation) are assembled for one minimal element at a time, and the parameter intervals are kept away from the singular zero-parameter descent case.

1.1 **Base of the induction.** [base] Let $X_0=\{w:\ell(w)\le2\}$. By [F6] the statements $\mathrm S(w)$, $\mathrm hL(w)$, $\mathrm{HR}(w)$ hold for all $w\in X_0$, and the parameterized ascent statements $\mathrm{HR}(z,t)_\zeta$ hold for all $\zeta\ge0$ for the pairs $z<zt$ with $\ell(zt)\le2$; the descent statements of (2) for $X_0$ are the pairs $(z,t)$ with $\ell(z)=2$, $zt<z$, and hold for all $\zeta>0$ by the positive-parameter descent case of [F3] together with the deformation principle [F4] applied on $(0,\infty)$; hence (1) and (2) hold for $X_0$. [given, F3, F4, F6]

2.1 **Induction hypothesis and the minimal element.** [ih] Fix a Bruhat ideal $X$ containing $X_0$ for which (1) and (2) hold and assume that every element of $X$ satisfies $\mathrm S$, $\mathrm hL$ and $\mathrm{HR}$; choose $x'$ minimal in the complement of $X$ and write $x'=xs$ with $x\in X$ and $s$ simple. Every $y<x'$ lies in $X$, so $\mathrm S(y)$, $\mathrm hL(y)$, $\mathrm{HR}(y)$ hold for all $y<x'$. [given, step 1.1]

3.1 **The lower ascent hypotheses.** Let $t$ be any simple reflection and let $y<x't$ with $y<x'$ and $yt>y$. Then $yt$ is comparable with $x'$: since $\ell(yt)=\ell(y)+1\le\ell(x't)=\ell(x')+1$ and $y<x'$, if $yt\ge x't$ then $\ell(yt)\le\ell(x't)$ forces $yt=x't$, which would give $y=x'$, a contradiction; hence $yt<x'$, so $yt\in X$, and (1) for $X$ applies to the pair $(y,t)$ and gives $\mathrm{HR}(y,t)_\zeta$ for all $\zeta\ge0$. [step 2.1]

3.2 **The lower descent hypotheses.** Let $t$ be simple and $y<x't$ with $y<x'$ and $yt<y$. Then $y\in X$; since $y$ satisfies $\mathrm S(y)$ and $\mathrm hL(y)$, the positive-parameter descent case of [F3] gives $\mathrm hL(y,t)_\zeta$ for all $\zeta>0$, and $\mathrm{HR}(y)$ together with [F4] gives $\mathrm{HR}(y,t)_\zeta$ for all $\zeta>0$. Hence for every simple $t$ the strong lower hypothesis $\mathrm{HRbar}(<x't,t)_\zeta$ holds for all $\zeta>0$. [step 2.1, F3, F4]

4.1 **Hard Lefschetz for every new ascent pair.** Let $t$ be a simple right descent of $x'$, i.e. $x't<x'$; then $z:=x't\in X$, and we apply the three-case theorem [F3] to the pair $(z,t)$ with $zt=x'$: case (2) with $\zeta>0$ uses $\mathrm S(\le z)$, the lower ascent statements for $z$ (from (1) for $X$) and $\mathrm{HRbar}(<z,t)_\zeta$ (from steps 3.1 and 3.2), and gives $\mathrm hL(z,t)_\zeta$ for all $\zeta>0$; case (3) with $\zeta=0$ uses the same lower ascent statements, $\mathrm{HR}(z)$ and $\mathrm hL(w)$ for all $w<zt=x'$ (available since all such $w$ lie in $X$) and gives $\mathrm hL(z,t)_0$. Hence $\mathrm hL(x't,t)_\zeta$ holds for all $\zeta\ge0$ for every right descent $t$ of $x'$. [step 2.1, step 3.1, step 3.2, F3]

5.1 **Hodge-Riemann for every new ascent pair.** Fix a right descent $t$ of $x'$ and keep $z=x't\in X$. By $\mathrm{HR}(z)$ and the deformation principle [F4] applied on $[0,\infty)$ to the family $\mathrm hL(z,t)_\zeta$, obtained in step 4.1 for all $\zeta\ge0$, the relations $\mathrm{HR}(z,t)_\zeta$ hold for all $\zeta\ge0$. In particular the condition (1) holds for $X\cup\{x'\}$: the only new pairs are those with $zt=x'$, i.e. $z=x't$ for the right descents $t$ of $x'$, and these have been verified for all $\zeta\ge0$; all other pairs lie in $X$ and are covered by (1) for $X$. [step 4.1, F4]

6.1 **Soergel's conjecture for $x'$.** Take the chosen right descent $s$ with $x'=xs$, $x\in X$, and the instance $\mathrm{HR}(x,s)_0$ of step 5.1. Since $\mathrm S(y)$ and $\mathrm{HR}(y)$ hold for all $y<x'$, the embedding theorem [F2] gives that the local intersection forms on $\operatorname{Hom}^0(B_y,B_xB_s)$, $y<x'$, are definite for the sign $\mathrm S^\pm(y,x,s)$ and hence non-degenerate; the detection theorem [F1] then gives $\mathrm S(x')$. [step 5.1, step 2.1, F1, F2]

7.1 **Hard Lefschetz and Hodge-Riemann for $x'$.** By [F5] applied to the pair $(x,s)$ with $\mathrm hL(x,s)_0$ from step 4.1 we obtain $\mathrm hL(x')$; and by [F5] applied to $\mathrm{HRbar}(x,s)_0$ from step 5.1, the restriction of the intersection form to the top summand $B_{x'}$ satisfies HR, which by the now established $\mathrm S(x')$ and the positivity of the comparison scalar [F7] is $\mathrm{HR}(x')$. [step 4.1, step 5.1, step 6.1, F5, F7]

8.1 **The descent condition for the enlarged ideal.** Let $t$ be simple with $x't<x'$. By step 4.1 we have $\mathrm hL(x',t)_\zeta$ for all $\zeta>0$, and $\mathrm{HR}(x')$ from step 7.1, so the deformation principle [F4] applied on the interval $(0,\infty)$ gives $\mathrm{HR}(x',t)_\zeta$ for all $\zeta>0$ (any requested positive parameter is joined to a sufficiently large one by a compact subinterval avoiding $0$). The pairs with $z\in X$ and $zt<z$ are covered by (2) for $X$; hence (2) holds for $X\cup\{x'\}$. Together with step 5.1 this shows that (1) and (2) are preserved by the induction step, and with steps 6.1 and 7.1 that $\mathrm S$, $\mathrm hL$, $\mathrm{HR}$ hold on $X\cup\{x'\}$. [step 4.1, step 5.1, step 7.1, F4]

9.1 **Conclusion.** The finite induction starting from $X_0$ reaches $X=S_n$, so $\mathrm S(w)$, $\mathrm hL(w)$ and $\mathrm{HR}(w)$ hold for every $w\in S_n$; and for every pair $x,s$ with $xs>x$ the sequence of steps 4.1, 5.1 applied to $z=x$ gives $\mathrm{HR}(x,s)_\zeta$ for all $\zeta\ge0$, hence also the strong embedded forms $\mathrm{HRbar}(x,s)_\zeta$ by the positivity of the comparison scalars [F7]. No step restricts a positive middle-position operator to a summand: every passage from the tensor product to its top summand uses the zero-parameter instance and the undeformed restriction lemma [F5], and the positive parameters are handled by the deformation principle on intervals that avoid the singular value $\zeta=0$ in the descent case. [step 8.1, F5, F7, discharge-induction: step 2.1] ∎

## Remarks

- The base case is the only place where the rank-one and rank-two computations enter; the examples companion page illustrates them but is not used as a supplier here, and the induction is finite and choice-free.
- Steps 3.1-4.1 show that the lower hypotheses needed by the three-case hard-Lefschetz theorem are available one step before they are used, which is what lets the induction close without assuming any statement at the element currently being proved.
