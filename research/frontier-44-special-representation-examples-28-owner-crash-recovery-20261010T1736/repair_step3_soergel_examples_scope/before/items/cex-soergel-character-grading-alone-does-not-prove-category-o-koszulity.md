---
id: cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity
kind: counterexample
title: "The Soergel character grading alone does not prove category-O Koszulity"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one, def-regular-integral-dot-orbit-labelling-convention, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-kazhdan-lusztig-polynomial-recursion, def-bruhat-interval-and-r-polynomials, lem-bruhat-order-basic-properties-for-permutations, def-verma-flag-and-its-multiplicities, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 16
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed p. 135): 'P_{2134,4231}(q) = P_{1324,3412}(q) = 1 + q', with the surrounding discussion of the S_4 examples; complete passage read."
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 133-136) and Exercise 7(a) (printed p. 163): Theorems 5.1.4/5.1.7, the descent recursion and the fact that gaps of length at most two have P=1, which is what makes (1324,3412) the unique nonconstant pair in its interval; complete passages read."
---

## Statement refuted

**Refuted claim:** 'The auxiliary grading on the polynomial Soergel lifts
transports to category $\mathcal O$ and makes each regular integral block graded
(indeed Koszul), so that the coefficients of the Kazhdan–Lusztig polynomials
are the graded decomposition numbers; in particular, for every comparable pair,
the leading coefficient of $P_{y,w}(q)$ is the ordinary Verma-flag multiplicity
$(P(w\cdot\lambda):\Delta(y\cdot\lambda))$.'

**Counterexample:** let $\lambda$ be dominant regular integral for
$\mathfrak{sl}_4$ (for instance $\lambda=0$) and take
$y=1324=s_2$ and $w=3412=s_2s_1s_3s_2$ in $S_4$, so that
$\ell(w)-\ell(y)=3$. On the ten-element interval $[1324,3412]$ the only
Kazhdan–Lusztig polynomial different from $1$ is
$P_{1324,3412}(q)=1+q$; its leading coefficient is $1$, but the multiplicity
theorem gives $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)=2\ne1$.
Hence the leading coefficient of the Kazhdan–Lusztig polynomial is not the
ordinary multiplicity, and no coefficientwise reading of $P_{y,w}$ produces
category-$\mathcal O$ multiplicities. Moreover the page constructs no grading
on $\mathcal O$ at all: the grading in play is the auxiliary grading of the
polynomial lifts, normalised on the Soergel side and passed to by the ungraded
reduction of the projective dictionary, so the character theorem alone cannot
establish Koszulity; the graded/$\mathrm{Ext}$ refinement is reserved for the
separate Koszul-duality frontier.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the multiplicity theorem cited below), $\mathfrak{sl}_4$ with a dominant regular integral weight $\lambda$ (for instance $\lambda=0$), the permutations $b:=1324=s_2$ and $w:=3412=s_2s_1s_3s_2$ in one-based $S_4$, and the classical Kazhdan–Lusztig polynomials $P_{y,z}(q)$ with $q=v^{-2}$.

[F1] Multiplicity theorem ([[thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one]]): in the regular integral type-$A$ block $\mathcal O_\lambda$ one has $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)$ for all $y,w\in W$, and the multiplicity vanishes unless $y\le w$.

[F2] Block and grading conventions ([[def-regular-integral-dot-orbit-labelling-convention]], [[def-verma-flag-and-its-multiplicities]]): $(P(w\cdot\lambda):\Delta(y\cdot\lambda))$ is the ordinary Verma-flag multiplicity of the standard $\Delta(y\cdot\lambda)$, the projective dictionary is the ungraded reduction $V(P(w\cdot\lambda))=\bar B_{w^{-1}}$, and the auxiliary grading lives on the polynomial Soergel lifts.

[F3] Classical Kazhdan–Lusztig polynomials ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]): $P_{y,z}$ has constant term $1$, and for $y<z$ its degree is at most $(\ell(z)-\ell(y)-1)/2$; the $\mu$-coefficient $\mu(y,z)$ is the coefficient of $q^{(\ell(z)-\ell(y)-1)/2}$, defined as $0$ when $\ell(z)-\ell(y)$ is even; $P_{y,z}=0$ unless $y\le z$.

[F4] Descent recursion ([[thm-kazhdan-lusztig-polynomial-recursion]]): for a simple reflection $s$ with $sz<z$ and $y\le z$, $$P_{y,z}(q)=q^{1-c}P_{sy,sz}(q)+q^{c}P_{y,sz}(q)-\!\!\!\sum_{\substack{y\le u\le sz\\ su<u,\ \mu(u,sz)\ne0}}\!\!\!\mu(u,sz)\,q^{(\ell(z)-\ell(u))/2}P_{y,u}(q),$$ where $c=1$ if $sy<y$ and $c=0$ if $sy>y$.

[F5] Bruhat order of $S_4$ ([[lem-bruhat-order-basic-properties-for-permutations]], [[def-bruhat-interval-and-r-polynomials]]): $y\le z$ holds exactly when $y$ is a reduced subword of every reduced expression of $z$; the order is graded by inversion length; intervals are finite.

## Counterexample

**Proof technique:** direct.

1.1 **The interval.** The word $s_2s_1s_3s_2$ has length $4$ and is reduced, since $3412$ has exactly the four inversions $(3,1),(3,2),(4,1),(4,2)$. Its reduced subwords give: $1234$ at length $0$; $2134,1324,1243$ at length $1$; $1342,1423,2314,3124,2143$ at length $2$; $1432,2413,3142,3214$ at length $3$; and $3412$ at length $4$. The four elements $1234,2134,1243,2143$ contain no reduced subword equal to $s_2=1324$, so they are not above $b$ by the reduced-subword criterion; the remaining ten elements are exactly $[b,w]$. [F5, algebra]

1.2 **All gaps at most two have $P=1$.** Suppose $y<z$ and $d:=\ell(z)-\ell(y)\le2$. By [F3] the degree of $P_{y,z}$ is at most $(d-1)/2\le1/2$, hence at most $0$; together with constant term $1$ this forces $P_{y,z}=1$. If $d=0$ then $y=z$ and $P_{y,y}=1$; if $y$ and $z$ are incomparable, $P_{y,z}=0$ by [F3]. In particular $P_{b,2413}=1$ and $P_{1234,1423}=1$, both pairs having gap $2$. [F3, F5, algebra]

2.1 **The recursion at $(\mathrm{id},2413)$.** Write $\mathrm{id}=1234$ and use $2413=s_1s_3s_2$, a reduced word with left descent $s_1$. With $s=s_1$ one has $s\,2413=1423$ and $s\,\mathrm{id}=2134$, so $c=0$ in [F4] and $$P_{\mathrm{id},2413}(q)=q\,P_{2134,1423}(q)+P_{\mathrm{id},1423}(q)-\!\!\!\sum_{\substack{\mathrm{id}\le u\le1423\\ s_1u<u,\ \mu(u,1423)\ne0}}\!\!\!\mu(u,1423)\,q^{(3-\ell(u))/2}P_{\mathrm{id},u}(q).$$ The first summand vanishes: $1423=s_3s_2$ has no reduced subword $s_1$, so $2134\not\le1423$ and $P_{2134,1423}=0$ by [F3] and [F5]. The correction sum is empty as well: $[\mathrm{id},1423]=\{1234,1324,1243,1423\}$ by step 1.1, and for each of these four elements left multiplication by $s_1$ swaps the values $1$ and $2$, raising the length from $0,1,1,2$ to $1,2,2,3$ respectively, so no element of the interval has the required left descent $s_1$. By step 1.2 the remaining term is $P_{\mathrm{id},1423}=1$, hence $P_{\mathrm{id},2413}=1$. [F4, F5, step 1.1, step 1.2, algebra]

3.1 **The main recursion.** Apply [F4] to $b=1324$, $w=3412$ and the left descent $s=s_2$: $s_2w=2413$ and $s_2b=1234$, so $c=1$ because $s_2b$ has length $0<1=\ell(b)$, and $$P_{b,w}(q)=P_{\mathrm{id},2413}(q)+q\,P_{b,2413}(q)-\!\!\!\sum_{\substack{b\le u\le2413\\ s_2u<u,\ \mu(u,2413)\ne0}}\!\!\!\mu(u,2413)\,q^{(4-\ell(u))/2}P_{b,u}(q).$$ By step 1.1 the interval $[b,2413]$ is $\{1324,1423,2314,2413\}$; left multiplication by $s_2$ swaps the values $2$ and $3$, turning these into $1234,1432,3214,3412$ of lengths $0,3,3,4$, so only $u=b$ has the required descent, and there $\mu(b,2413)=0$ because $\ell(2413)-\ell(b)=2$ is even by [F3]. The correction sum is therefore empty; step 2.1 gives $P_{\mathrm{id},2413}=1$ and step 1.2 gives $P_{b,2413}=1$, so $P_{b,w}=1+q$, with $\mu(b,w)=1$ and $\ell(w)-\ell(b)=3$. [F3, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 **The comparison.** The polynomial $P_{b,w}(q)=1+q$ has leading coefficient $1$ (the coefficient of $q^{1}$, its degree being $1$) while its value at $q=1$ is $2$. The multiplicity theorem [F1] computes the ordinary Verma-flag multiplicity as $(P(w\cdot\lambda):\Delta(b\cdot\lambda))=P_{b,w}(1)=2$, with $0$ dominant regular integral in $\mathfrak{sl}_4$ (indeed $\langle\rho,\alpha_i^\vee\rangle=1\ne0$ for every simple root and $0$ is integral). Hence the leading coefficient $1$ of the Kazhdan–Lusztig polynomial differs from the multiplicity $2$: the refuted claim's coefficientwise clause is false, and no selection of coefficients of $P_{b,w}$ can reproduce the multiplicity, only the total value at one can. This is a genuine failure of the claim and not an artefact of undefined quantities: $b\le w$, all polynomials are classical Kazhdan–Lusztig polynomials, and the multiplicity is that of the ordinary block $\mathcal O_0$. [F1, F2, step 3.1, algebra]

5.1 **The grading clause.** The remaining structural clause of the refuted claim is not supplied by the cited results either: the multiplicity of [F1] is the ordinary (ungraded) Verma-flag multiplicity, and the projective dictionary of [F2] is the ungraded reduction $V(P(w\cdot\lambda))=\bar B_{w^{-1}}$, whose auxiliary grading lives on the polynomial lift and is not a grading of $\mathcal O_\lambda$. Thus the character identity at $q=1$ cannot establish that the block is graded or Koszul; the graded and $\mathrm{Ext}$ refinements belong to the separate Koszul-duality frontier, and the numerical failure of step 4.1 shows in addition that the coefficient-by-coefficient graded-decomposition interpretation is not available here. The claim is therefore refuted, with witness $(y,w)=(1324,3412)$ in $\mathfrak{sl}_4$. [F1, F2, step 4.1] ∎
