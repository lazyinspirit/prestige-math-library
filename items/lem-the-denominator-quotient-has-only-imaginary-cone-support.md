---
id: lem-the-denominator-quotient-has-only-imaginary-cone-support
kind: lemma
title: The denominator quotient has only imaginary cone support
deps: ["lem-the-kac-moody-denominator-is-weyl-skew", "def-kac-moody-denominator-product-with-root-multiplicities", "def-kac-moody-real-coroot-inversions", "lem-kac-moody-reduced-words-and-coroot-signs", "def-simple-reflections-and-the-kac-moody-weyl-group", "def-real-and-imaginary-kac-moody-roots", "def-kac-moody-formal-character-completion"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Sections 5.3 and 10.1-10.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Section 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Put $\varepsilon(w)=\det(w)$ and $A_\rho=\sum_{w\in W}\varepsilon(w)e^{w\rho}$. This sum is coefficientwise locally finite, and $a=e^{-\rho}A_\rho$ has constant coefficient one and an inverse. For $C=(e^{-\rho}D)/a$, the coefficient array is Weyl invariant and its support consists of $e^{-\beta}$ with
$$\beta\in K^+=\{\gamma\in Q^+:w\gamma\in Q^+\text{ for every }w\in W\}.$$
If a nonconstant coefficient is nonzero, any such $\beta$ of least height satisfies $\beta(h_i)\le0$ for every $i$. This cone is not being identified with the set of imaginary roots.

## Facts & Assumptions

**Given:** A finite symmetrizable GCM and its Weyl vector.

[F1] The denominator is Weyl skew, as a transformed coefficient array, by [[lem-the-kac-moody-denominator-is-weyl-skew]].

[F2] The word, coroot and inversion conventions are [[def-kac-moody-real-coroot-inversions]].

[F3] The length/root-sign criterion is [[lem-kac-moody-reduced-words-and-coroot-signs]].

[F4] Cone multiplication and unit inversion are [[def-kac-moody-formal-character-completion]].

[F5] Real/imaginary orbit terminology is [[def-real-and-imaginary-kac-moody-roots]].

[F6] The denominator definition gives $D=e^\rho P$, support of $P$ in $-Q^+$ and the simple-axis identity $P|_{\mathbb Z\alpha_i}=1-e^{-\alpha_i}$ by [[def-kac-moody-denominator-product-with-root-multiplicities]].

[F7] The reflection formula is $s_i\alpha_j=\alpha_j-a_{ij}\alpha_i$ by [[def-simple-reflections-and-the-kac-moody-weyl-group]].

## Proof

1.1 For a reduced word $w=s_{i_1}\cdots s_{i_l}$, each prefix is reduced and its next root $s_{i_1}\cdots s_{i_{r-1}}\alpha_{i_r}$ is positive by F3. Telescoping therefore gives $$\rho-w\rho=\sum_{r=1}^l s_{i_1}\cdots s_{i_{r-1}}\alpha_{i_r}\in Q^+,\qquad \operatorname{ht}(\rho-w\rho)\ge l.$$ There are finitely many words of length at most any fixed integer. Thus only finitely many $w$ contribute at a bounded depth, and $w\rho=\rho$ forces $l=0$. The alternant has top coefficient one, and its normalization $a$ is invertible by F4. Reindexing the orbit sum by left multiplication gives $s_i A_\rho=-A_\rho$ as an array; finite multiplicities justify every coefficient. [F2, F3, F4, algebra]

2.1 We justify division of these skew arrays without presuming a Weyl action on the whole completion. Fix $i$ and write $x=e^{-\alpha_i}$ and $y^{\mathbf b}=\prod_{j\ne i}e^{-b_j\alpha_j}$ for $\mathbf b\ge0$. Let $m(\mathbf b)=-\sum_{j\ne i}a_{ij}b_j\ge0$, where nonnegativity is the off-diagonal sign axiom for a GCM. By F7, reflection sends $x$ to $x^{-1}$ and $y^{\mathbf b}$ to $x^{m(\mathbf b)}y^{\mathbf b}$. Put $p=e^{-\rho}D=P$ by F6. The skewness of $D,A_\rho$ implies for either $f=p$ or $f=a$ that its fixed transverse coefficient satisfies $$f_{\mathbf b}(x)=-x^{m(\mathbf b)+1}f_{\mathbf b}(x^{-1}).$$ This is an equality of coefficient arrays. Since its original exponents in $x$ are nonnegative, the equality forces them to be at most $m(\mathbf b)+1$; hence each $f_{\mathbf b}$ is a polynomial. Moreover $p_{\mathbf0}=1-x$ by F6. Also $a_{\mathbf0}=1-x$: in step 1.1, a reduced word whose first letter is not $i$ already contributes the off-axis root $\alpha_j$; if its first letter is $i$ and it has a second letter $j$, reducedness gives $j\ne i$, while F7 gives $s_i\alpha_j=\alpha_j-a_{ij}\alpha_i$, whose $\alpha_j$-coordinate is one because the simple roots are independent. All associated roots are positive, so later summands cannot cancel that off-axis coordinate. Thus only $1,s_i$ occur on the axis. [F1, F3, F6, F7, step 1.1, algebra]

3.1 Form $C=p/a$ by F4. We show by induction on $\sum_{j\ne i}b_j$ that every $C_{\mathbf b}(x)$ is a polynomial satisfying $C_{\mathbf b}(x)=x^{m(\mathbf b)}C_{\mathbf b}(x^{-1})$. The base is $C_{\mathbf0}=1$. At a nonzero transverse index, the product equation gives $$(1-x)C_{\mathbf b}=R_{\mathbf b}:=p_{\mathbf b}-\sum_{\substack{\mathbf u+\mathbf v=\mathbf b\\\mathbf u\ne\mathbf0}}a_{\mathbf u}C_{\mathbf v}.$$ Every $\mathbf v$ in the finite sum has smaller total transverse degree. Step 2.1 and the induction hypothesis make $R_{\mathbf b}$ a polynomial satisfying $R_{\mathbf b}(x)=-x^{m(\mathbf b)+1}R_{\mathbf b}(x^{-1})$, since $m$ is additive. At $x=1$ this gives $R_{\mathbf b}(1)=0$, so polynomial division yields $R_{\mathbf b}=(1-x)q$ with $q\in\mathbb Z[x]$. Its expansion equals $C_{\mathbf b}$ by uniqueness of inversion in formal power series. Substitution and cancellation of $1-x$ then give $q(x)=x^{m(\mathbf b)}q(x^{-1})$. This completes the induction, including rank one where only the base transverse index exists. [F4, step 2.1, algebra]

4.1 Step 3.1 proves exactly $s_iC=C$ as an array for every $i$, with each transverse slice finite. Repeating over a finite word gives $wC=C$. If the coefficient of $e^{-\beta}$ is nonzero, all coefficients of $e^{-w\beta}$ are the same nonzero value. Since the original support lies in $-Q^+$, this implies $w\beta\in Q^+$ for every $w$, proving the asserted cone support. It does not say that $\beta$ is a root at all, so makes no identification with F5's imaginary-root set. [F5, step 3.1, algebra]

5.1 Suppose nonconstant support exists and take a nonzero $\beta$ of least positive height in it. If $\beta(h_i)>0$, then $s_i\beta=\beta-\beta(h_i)\alpha_i$ is a nonzero element of $Q^+$ by step 4.1 and invertibility of the reflection. Its coefficient is the same and its height is smaller, a contradiction. Thus every pairing is nonpositive. Least height exists in the positive integers; finitely many lattice points have that height, so choosing one uses no AC. [step 4.1, algebra] ∎
