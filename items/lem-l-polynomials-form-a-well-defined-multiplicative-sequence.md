---
id: lem-l-polynomials-form-a-well-defined-multiplicative-sequence
kind: lemma
title: "The L-polynomials are well defined and form a multiplicative, natural and stable sequence"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 2
deps:
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - def-axiom-of-choice
  - def-chern-classes-from-the-projective-bundle-relation
  - def-completed-fourfold-graded-cohomology-ring
  - def-elementary-symmetric-polynomials
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - def-hirzebruch-l-polynomials
  - def-pontryagin-classes-by-complexification
  - lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality
  - thm-fundamental-theorem-of-symmetric-polynomials
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
  - thm-pontryagin-whitney-product-away-from-two
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - thm-top-pontryagin-class-is-the-square-of-the-euler-class
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Lemma 19.1, original pp. 221-222; Multiplicative Characteristic Classes, original p. 227: passage to characteristic classes of real bundles after inverting 2"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 35: the explicit verification L(ab) = L(a)L(b)"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Equation (7.68), printed p. 65, and Remark 8.7, printed p. 68: the Pontryagin definition and the L-class as a series in Pontryagin classes; multiplicativity is proved locally from the cited Whitney supplier"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $L_k$ and the completed total class $L(E)$ be as in
[[def-hirzebruch-l-polynomials]], and let $E,F\to B$ be numerable real vector
bundles over a path-connected paracompact Hausdorff CW base $B$. The same assertions hold for paracompact Hausdorff CGWH bases of CW type, and componentwise for their disjoint unions. Pullbacks are between bases in this scope. Then:

1. Each $L_k$ is a well-defined homogeneous polynomial of weight $4k$ in
   $p_1,\dots,p_k$, independent of the number of formal roots, with $L_0=1$;
   $L(E)$ is natural under pullback, stable ($L(E\oplus\varepsilon^r)=L(E)$) and
   equal to $1$ for trivial $E$.
2. **Multiplicativity.** $L(E\oplus F)=L(E)L(F)$ in
   $\widehat H^{4*}(B;\mathbb Q)$, equivalently
   $L_k(p(E\oplus F))=\sum_{i+j=k}L_i(p(E))L_j(p(F))$.
3. **Rank two and complex lines.** If $E$ is an oriented real rank-two bundle
   with Euler class $e$, then $p_1(E)=e^2$ and
   $L(E)=\sum_{k\ge0}q_{2k}e^{2k}=Q(e)=e/\tanh e$; a Whitney sum of oriented
   rank-two bundles has $L=\prod_iQ(e_i)$. In particular a complex line bundle
   $\ell$ with $c_1(\ell)=t$ has underlying real L-class $Q(t)=t/\tanh t$.

## Facts & Assumptions

**Given:** AC; the L-polynomials $L_k\in\mathbb Q[p_1,p_2,\dots]$ and the total L-class of [[def-hirzebruch-l-polynomials]], built from the series $Q(x)=\sum_jq_{2j}x^{2j}=x/\tanh x$; numerable real bundles over the stated base.

[F1] $L_k$ is determined by the identity $L_k(e_1(x_1^2,\dots,x_N^2),\dots,e_k(x_1^2,\dots,x_N^2))=[\text{weight }4k]\prod_{i=1}^NQ(x_i)$ for every $N\ge1$, and $L_k\in\mathbb Q[p_1,\dots,p_k]$ is homogeneous of weight $4k$; for a bundle $E$, $L_k(E)=L_k(p_1(E),\dots,p_k(E))$ and $L(E)=(L_k(E))_{k\ge0}$ in the completed ring ([[def-hirzebruch-l-polynomials]]).

[F2] The substitution $T_k\mapsto e_k$ is an $\mathbb Q$-algebra isomorphism from $\mathbb Q[T_1,\dots,T_N]$ onto the symmetric polynomials in $x_1,\dots,x_N$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[F3] The elementary symmetric polynomials satisfy $e_0=1$, $e_j=0$ for $j>N$, and $e_r(z_1,\dots,z_M)=\sum_{a+b=r}e_a(z_1,\dots,z_m)e_b(z_{m+1},\dots,z_M)$ for $M=m+n$; the last identity is the coefficient comparison in $\prod_{i\le m}(1+tz_i)\prod_{j}(1+tz_j)$ ([[def-elementary-symmetric-polynomials]]).

[F4] For numerable real bundles over a CW base: $p_i(f^*E)=f^*p_i(E)$ for continuous $f$, $p_i(E\oplus\varepsilon^r)=p_i(E)$, and $p_i(E)=0$ whenever $2i>\operatorname{rank}E$ ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]).

[F5] On a CW base, over a coefficient ring in which $2$ is invertible, in particular over $\mathbb Q$, the total Pontryagin class is multiplicative: $p(E\oplus F)=p(E)p(F)$, i.e. $p_r(E\oplus F)=\sum_{a+b=r}p_a(E)p_b(F)$ ([[thm-pontryagin-whitney-product-away-from-two]]).

[F6] $\widehat H^{4*}(B;\mathbb Q)$ is a commutative unital ring under convolution product, and pullback is a unital ring homomorphism ([[lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality]], [[def-completed-fourfold-graded-cohomology-ring]]).

[F7] For a numerable oriented real bundle of rank $2n$ with Euler class $e$, the top Pontryagin class is $p_n=e^2$ ([[thm-top-pontryagin-class-is-the-square-of-the-euler-class]]).

[F8] For a complex rank-$n$ bundle $E$ over a path-connected CW complex, with the complex orientation of the underlying real bundle, $c_n(E)=e(E_{\mathbb R})$ ([[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]).

[F9] Chern and Euler classes of numerable bundles are natural, and their Whitney sums multiply; the Chern classes are obtained from the projective-bundle relation and the Euler class from the zero-section pullback of the Thom class ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]], [[def-chern-classes-from-the-projective-bundle-relation]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

## Proof

**Proof technique:** direct; a universal polynomial identity from the defining product, then substitution of Pontryagin classes.

1.1 For fixed $k$, take $m,n\ge\max(1,k)$ and let $x_1,\dots,x_m,y_1,\dots,y_n$ be indeterminates; put $A=\prod_{i\le m}Q(x_i)$ and $B=\prod_{j\le n}Q(y_j)$ in $\mathbb Q\llbracket x,y\rrbracket$. Then $\bigl(\prod_iQ(x_i)\bigr)\bigl(\prod_jQ(y_j)\bigr)=AB$, so its homogeneous component of weight $4k$ is the finite sum $\sum_{i+j=k}([\text{weight }4i]A)([\text{weight }4j]B)$; the elementary symmetric function of the combined squared variables is $e_r(x_1^2,\dots,x_m^2,y_1^2,\dots,y_n^2)=\sum_{a+b=r}e_a(x^2)e_b(y^2)$ by [F3]. Applying the defining identity of [F1] to the combined family of roots and to each block separately, we obtain the universal identity $$L_k\Bigl(\sum_{a+b=1}e_a(x^2)e_b(y^2),\dots,\sum_{a+b=k}e_a(x^2)e_b(y^2)\Bigr)=\sum_{i+j=k}L_i(e(x^2))L_j(e(y^2))$$ in the symmetric polynomial ring of the two blocks. [given, F1, F2, F3, algebra]

1.2 Well-definedness and trivial values: $L_k$ is a well-defined homogeneous weight-$4k$ polynomial in $p_1,\dots,p_k$, independent of the number $N$ of formal roots, by the existence and uniqueness argument of the definition of [F1] together with the injectivity in [F2]; $L_0=1$ is the weight-$0$ component. Evaluating the defining identity at $x_1=0$ (so all $e_j(0)=0$ for $j\ge1$) gives $L_k(0,\dots,0)=[\text{weight }4k]Q(0)=0$ for $k\ge1$; hence for a trivial bundle, whose positive Pontryagin classes vanish by [F4], the total class is $L(\varepsilon^r)=(1,0,0,\dots)$, the unit of the completed ring. [F1, F2, F4, F6]

1.3 Rank two: let $E\to B$ be a numerable oriented real bundle of rank two over a path-connected paracompact Hausdorff CW base, with Euler class $e$. By [F7] $p_1(E)=e^2$, and $p_i(E)=0$ for $i\ge2$ since $2i>\operatorname{rank}E$ by [F4]. Substituting into the defining identity of [F1] with $N=1$ gives $L_k(E)=L_k(e^2,0,\dots,0)=[\text{weight }4k]Q(x)=q_{2k}e^{2k}$ after putting $x^2=e^2$, so $L(E)=\sum_{k\ge0}q_{2k}e^{2k}=Q(e)=e/\tanh e$. [given, F1, F4, F7, algebra]

1.4 To extend the bundle identities to a path-connected paracompact Hausdorff CGWH base $B$ of CW type, use homotopy inverse maps $h:K\to B$, $g:B\to K$ from a CW model. The CW-type transport in [[def-pontryagin-number-of-a-closed-oriented-manifold]] gives $p_i(E)=g^*p_i(h^*E)$, naturality between these bases, and stability. The Whitney identity for $h^*E,h^*F$ on $K$ therefore pulls back to $B$, and all polynomial L-identities do too. Euler and Chern naturality in [F9] give $e(E)=g^*e(h^*E)$ and the analogous Chern identity, so the rank-two and complex-line formulas also transport. For a disjoint union, each singular simplex lies in one component; cochains, their differentials and cup products are componentwise products, hence every class and identity assembles componentwise, without selecting representatives for a family of classes. [F4, F5, F6, F7, F8, F9, algebra]

2.1 Multiplicativity: since the two blocks $e_a(x^2)$ and $e_b(y^2)$ are jointly algebraically independent by two applications of [F2], the identity of step 1.1 is equivalent, under the inverse substitution $P_a\mapsto e_a(x^2)$, $P'_b\mapsto e_b(y^2)$, to the polynomial identity $L_k(P''_1,\dots,P''_k)=\sum_{i+j=k}L_i(P)L_j(P')$ in $\mathbb Q[P_1,\dots,P_k,P'_1,\dots,P'_k]$, where $P''_r:=\sum_{a+b=r}P_aP'_b$. For bundles $E,F$ over $B$, [F5] gives $p_r(E\oplus F)=\sum_{a+b=r}p_a(E)p_b(F)$ in $H^{4r}(B;\mathbb Q)$, so substituting $P_a\mapsto p_a(E)$, $P'_b\mapsto p_b(F)$ into that polynomial identity yields $L_k(E\oplus F)=\sum_{i+j=k}L_i(E)L_j(F)$ for every $k$; collecting degrees via the convolution product of [F6] gives $L(E\oplus F)=L(E)L(F)$ in $\widehat H^{4*}(B;\mathbb Q)$. [step 1.1, F2, F5, F6]

2.2 Naturality: for a continuous $f:B'\to B$ and a bundle $E\to B$, [F4] gives $p_i(f^*E)=f^*p_i(E)$; since $f^*$ is a unital ring homomorphism on completed cohomology by [F6] and $L_k$ is a polynomial, $L_k(f^*E)=L_k(f^*p_1(E),\dots)=f^*L_k(E)$, and componentwise $L(f^*E)=f^*L(E)$. [step 1.2, F4, F6]

2.3 Stability: [F4] gives $p_i(E\oplus\varepsilon^r)=p_i(E)$ for every $i$, so $L_k(E\oplus\varepsilon^r)=L_k(E)$ for every $k$ and $L(E\oplus\varepsilon^r)=L(E)$; the trivial-bundle case is step 1.2. [step 1.2, F4]

2.4 Complex line: let $\ell\to B$ be a complex line bundle with $c_1(\ell)=t$, regarded as an oriented real rank-two bundle through the complex orientation. By [F8] its Euler class is $e(\ell_{\mathbb R})=c_1(\ell)=t$, so step 1.3 gives $L(\ell_{\mathbb R})=Q(t)=t/\tanh t$. [step 1.3, F8, F9]

3.1 Whitney sums of rank-two bundles: iterating step 2.1 and using step 1.3, an oriented Whitney sum $E_1\oplus\cdots\oplus E_r$ of numerable oriented rank-two bundles has $L(E_1\oplus\cdots\oplus E_r)=\prod_{i=1}^rL(E_i)=\prod_{i=1}^rQ(e_i)$, with $e_i$ the Euler class of $E_i$. [step 1.3, step 2.1]

4.1 Steps 1.2, 2.2 and 2.3 give well-definedness, naturality, stability and the trivial-bundle value; step 2.1 gives multiplicativity; steps 1.3, 2.4 and 3.1 give the rank-two, complex-line and Whitney-sum evaluations. All statements are identities between prescribed polynomials in characteristic classes over $\mathbb Q$; the empty Whitney sum is the trivial bundle, and the rank-zero and rank-two boundary cases are included by $L_0=1$ and by $p_i=0$ for $2i>\operatorname{rank}$, and AC is used only as declared through the Pontryagin-class construction and its multiplicativity supplier. [step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, step 3.1, step 1.4] ∎
