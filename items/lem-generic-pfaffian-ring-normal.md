---
id: lem-generic-pfaffian-ring-normal
kind: lemma
title: Normality of the Pfaffian rank ring
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - lem-generic-pfaffian-straightening
  - def-axiom-of-choice
  - thm-serre-normality-criterion
  - lem-depth-localisation-inequality
  - thm-radical-localisation-and-regular-quotient-properties-of-depth
  - thm-hilbert-basis-theorem
  - thm-noetherian-ring-quotients-and-localisations
  - thm-krull-principal-ideal-theorem
  - thm-dimension-formula-for-affine-domains
  - lem-affine-domain-chain-dimension-formula-step
  - thm-quotient-and-lifting-regularity-across-a-regular-element
  - cor-localisations-of-regular-local-rings-are-regular
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-integrality-commutes-with-localisation
  - thm-valuation-ring-is-integrally-closed
  - lem-zmt-polynomial-rings-over-normal-domains-are-normal
  - cor-submodules-of-finite-free-pid-modules-are-free
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-normality-is-local-for-domains
proof_strategy: direct
axiom_use: "AC is used through Serre normality, the depth and affine dimension suppliers, regularity lifting/localization, and existence of maximal ideals in the closed-point argument."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Linshaw and Song, Standard Monomials and Invariant Theory of Arc Spaces II: Symplectic Group, §1"
      url: https://jag.math.tsinghua.edu.cn/1487/JAG1487.pdf
      locator: "PDF pp. 1–2: the standard basis of Pfaffian coordinate rings, with prior-theorem attribution."
    - title: "Goodman, Multiplicity-Free Spaces and Schur-Weyl-Howe Duality, §6.5"
      url: https://sites.math.rutgers.edu/~goodman/pub/webnuslect.pdf
      locator: "PDF p. 19: Pfaffian rank ideal and its quotient; the straightening and normality proofs are imported."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Under the hypotheses and notation of [[lem-generic-pfaffian-straightening]], the ring $k[a_{ij}:i<j]/J_{m+2}$ is an integrally closed domain for every even $m$ with $0\le m\le t$.

## Facts & Assumptions

**Given:** The field, integers, Pfaffians and quotient $R$ in the Statement, and the Axiom of Choice.

[F1] [[lem-generic-pfaffian-straightening]] supplies a basis of standard products and an injective Gram substitution into $k[x_{ij}:1\le i\le t,1\le j\le m]$; the leading monomial of $P_S$ is $d_S=\prod_{j=1}^{|S|}x_{s_j,j}$.

[F2] [[thm-hilbert-basis-theorem]] and [[thm-noetherian-ring-quotients-and-localisations]]: finite-type algebras over a field and their quotients and localizations are Noetherian. Thus the finitely generated Rees domain and all local rings used below are Noetherian.

[F3] [[thm-serre-normality-criterion]]: under AC, a Noetherian ring is normal exactly when it satisfies $R_1$ and $S_2$. [[thm-normality-is-local-for-domains]] identifies integral closedness of a domain with normality of all prime localizations under AC.

[F4] [[thm-radical-localisation-and-regular-quotient-properties-of-depth]]: quotienting a finite module over a Noetherian local ring by a regular element of its maximal ideal lowers depth by one. [[lem-depth-localisation-inequality]]: for such a local ring $A$ and prime $Q$, $\operatorname{depth}A_Q\ge\operatorname{depth}A-\dim(A/Q)$, under AC. Both are applied only to the ring as its own finite module.

[F5] [[thm-krull-principal-ideal-theorem]] applies under AC to Noetherian quotients; [[thm-dimension-formula-for-affine-domains]] and [[lem-affine-domain-chain-dimension-formula-step]] give $\operatorname{ht}P-\operatorname{ht}Q=\operatorname{ht}(P/Q)$ for primes $Q\subseteq P$ in a finite-type domain over a field. Applied to a prime minimal over $Q+(z)$ with $z\notin Q$, these give $\operatorname{ht}(P/Q)=1$ and $\operatorname{ht}P=\operatorname{ht}Q+1$.

[F6] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: under AC, a nonzero Noetherian local ring with a nonzerodivisor $z$ in its maximal ideal has $\dim(A/(z))=\dim A-1$, and is regular when $A/(z)$ is regular. [[cor-localisations-of-regular-local-rings-are-regular]] makes each prime localization of that regular local ring regular under AC.

[F7] [[thm-integral-closure-finite-finite-type-domain-over-field]] gives a finite normalization module for every finite-type domain over a field. [[thm-integrality-commutes-with-localisation]] identifies its localizations with the corresponding integral closures. Hence the support of its quotient by the original ring is exactly the nonnormal locus; it is closed, because the module is finite: if its localization vanishes, multiply the finitely many denominators killing a finite generating set to obtain an annihilator outside the prime; conversely an annihilator outside the prime kills the localization. Thus its support is the zero set of its annihilator.

[F8] [[cor-submodules-of-finite-free-pid-modules-are-free]] makes the lattice $L\subseteq\mathbb Z^{tm}$ free of finite rank. [[lem-zmt-polynomial-rings-over-normal-domains-are-normal]], iterated starting at $k$, makes its polynomial group-coordinate ring integrally closed. Localization preserves integral closedness by [[thm-integrality-commutes-with-localisation]], so $k[L]$ is integrally closed. [[thm-valuation-ring-is-integrally-closed]] applies to the monomial valuation rings below.

[F9] [[thm-proper-ideal-contained-in-maximal-ideal]] gives, under AC, a maximal ideal containing any proper ideal of a finite-type algebra. Pulling it back to a finite polynomial presentation and applying [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]] shows that every nonempty closed subset of its spectrum has a $k$-rational closed point when $k$ is algebraically closed.

## Proof

1.1 The Gram embedding in [F1] makes $R$ a domain. We describe its monomial degeneration explicitly. Choose positive integer weights on the finitely many variables $x_{ij}$ which realize the column-first lexicographic comparisons between all terms in all the finitely many Gram images $P_S$, $|S|\le m$. Such weights exist: list the variables in that lexicographic order, give successive variables weights $N^{tm-1},N^{tm-2},\ldots,1$, and take $N>2t+1$, larger than the total degree of each polynomial being compared. Thus $d_S$ is the unique term of largest weight in each image. Filter $R$ by these ambient polynomial weights. A standard product has unique term of largest weight equal to the corresponding product of the $d_S$; these monomials are distinct by [F1]. In a linear combination of standard products the terms of maximum weight therefore do not cancel. Consequently the associated graded ring is exactly $k[\Gamma]$, where $\Gamma$ is the additive semigroup generated by the exponent vectors of all $d_S$, for even $|S|\le m$. In particular this is a filtration of the entire ring, not merely a computation of the initial terms of its generators. [F1, algebra, choose]

2.1 Write an exponent array as $b=(b_{ij})$, put $\lambda_j=\sum_i b_{ij}$, and put $C_j(u)=\sum_{i\le u}b_{ij}$, with $C_j(0)=0$. The semigroup $\Gamma$ consists exactly of the integer arrays satisfying [step 1.1, algebra]
$$
b_{ij}\ge0,\qquad \lambda_{2r-1}=\lambda_{2r},\qquad \lambda_j\ge\lambda_{j+1},\qquad C_{j+1}(u)\le C_j(u-1)\quad(1\le j<m,\ 1\le u\le t).
$$
Necessity follows by adding these inequalities for individual increasing even rows. For sufficiency sort the row indices in each column increasingly, with multiplicities. The cumulative inequalities say that the $a$th entry of column $j$ is strictly less than the $a$th entry of column $j+1$ whenever the latter exists: a failure at value $u$ would give $C_{j+1}(u)>C_j(u-1)$, and the converse follows by taking $a=C_{j+1}(u)$. The inequalities on column lengths make a left-justified tableau; their pairwise equalities say that every row length is even. Each row is therefore an allowed $S$. Reading these rows from top to bottom gives a standard product and expresses $b$ as a sum of exponent vectors of $d_S$. All displayed conditions are homogeneous integral linear inequalities or equalities. Thus if $b$ is in the group $L$ generated by $\Gamma$ and $qb\in\Gamma$ for a positive integer $q$, then $b\in\Gamma$. More precisely $\Gamma=L\cap\mathcal C$, where $\mathcal C$ is the rational polyhedral cone cut out by the displayed conditions. [step 1.1, algebra, construct]

3.1 This proves normality of $k[\Gamma]$ directly. The group algebra $k[L]$ is a Laurent polynomial ring after choosing an integral lattice basis and is integrally closed by [F8]. Each defining integral linear inequality $\ell\ge0$ gives the valuation $v_\ell(\sum c_b X^b)=\min_{c_b\ne0}\ell(b)$ on its fraction field (combine equal-weight terms first); its nonnegative valuation ring is integrally closed by [F8]. The equality $\Gamma=L\cap\mathcal C$ gives [step 2.1, algebra]
$$
k[\Gamma]=k[L]\cap\bigcap_{\ell}\{f:v_\ell(f)\ge0\}.
$$
Indeed for a Laurent polynomial nonnegative minimum under every $\ell$ means that every exponent lies in $\mathcal C$. An intersection of integrally closed subrings of one field is integrally closed, by applying a monic equation in every member of the intersection. Hence the special ring of the filtration is a normal domain. [F8, step 2.1, algebra]

4.1 We give the lifting argument to avoid assuming normality from distinct initial terms. Let $\mathcal B=\bigoplus_{d\ge0}F_dR\,z^d\subset R[z]$ be the Rees ring of step 1.1. It is generated by $z$ and $P_Sz^{w(d_S)}$: expand an element in the standard basis, and use the absence of highest-weight cancellation in step 1.1. It is a finitely generated domain, hence Noetherian by [F2], with $\mathcal B/(z)=k[\Gamma]$, and $\mathcal B[z^{-1}]=R[z,z^{-1}]$. Retain also the ordinary grading $\deg(P_S)=|S|/2$ and $\deg z=0$; then $\mathcal B_0=k[z]$ and all other generators have positive ordinary degree. We use the following local normality argument. For a finite-type domain $D$ over a field and a nonzero element $z$, if $(D/(z))_{\mathfrak p}$ is normal, then $D_{\mathfrak p}$ is normal for every prime $\mathfrak p$ containing $z$. To check this by [F3], localize at such $\mathfrak p$. At a prime $Q$ containing $z$, [F4] increases depth by one from the quotient and [F6] increases dimension by one, so the $S_2$ bounds follow from $S_2$ of the quotient. Height-one primes containing $z$ have field quotients, so their local rings are regular by [F6]. Height-zero primes of the domain localize to its fraction field and are regular. For $Q$ not containing $z$ and of positive height, choose a prime $P$ minimal over $Q+(z)$ in this local ring. Applied to the corresponding primes in the original affine domain, [F5] gives $\operatorname{ht}P=\operatorname{ht}Q+1$ and $\dim(D_P/QD_P)=1$. If $\operatorname{ht}Q=1$, the quotient of $D_P$ by $z$ is a normal one-dimensional local domain, hence regular by $R_1$ in [F3]; [F6] makes $D_P$ regular of dimension two and then makes its localization $D_Q$ regular. If $\operatorname{ht}Q\ge2$, the quotient has depth at least two by [F3], so $D_P$ has depth at least three by [F4]; the depth-localization inequality in [F4] $\operatorname{depth}D_Q\ge\operatorname{depth}D_P-\dim(D_P/QD_P)$ gives depth at least two at $Q$. Thus $R_1$ and $S_2$ hold throughout the local ring, which proves the assertion. All these applications concern Noetherian local rings by [F2], nonzero regular elements because the Rees ring is a domain, and primes of an affine domain, as required by [F3]–[F6]. Applied to $\mathcal B$, step 3.1 proves normality at every point of the fiber $z=0$. [F2, F3, F4, F5, F6, step 3.1, algebra]

5.1 For completeness, this local conclusion controls every fiber here. The normalization is finite and its nonnormal locus is closed by [F7]. The nonnormal locus of $\mathcal B$ is stable under both its ordinary grading action and its filtration grading action: each scaling is a ring automorphism, extends to the fraction field, and preserves integral elements and therefore the normalization quotient. This uses no assertion that normalization itself has a chosen grading. If it contained a point over $z=c\ne0$, its closure under the ordinary grading action would contain the point of the section with all positive-ordinary-degree generators zero and $z=c$: the orbit map extends to scaling parameter zero. The filtration grading action then gives all points of that section with $z\ne0$; closedness gives its point at $z=0$, contradicting step 4.1. By [F9], over the algebraically closed field $k$ a nonempty closed subset has a $k$-rational closed point, so this excludes the entire nonnormal locus. Hence $\mathcal B$ and $R[z,z^{-1}]$ are normal. Finally an element of $\operatorname{Frac}R$ integral over $R$ is integral over this Laurent extension and therefore belongs to it; its Laurent expansion has only the degree-zero coefficient, so it belongs to $R$. This proves normality of $R$. When $m=0$, $R=k$ directly; all other boundary cases are included in the filtration argument. [F3, F7, F9, step 4.1, algebra] ∎
