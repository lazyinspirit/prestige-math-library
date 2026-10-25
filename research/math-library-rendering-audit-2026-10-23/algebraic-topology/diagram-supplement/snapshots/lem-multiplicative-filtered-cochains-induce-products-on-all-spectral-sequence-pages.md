---
id: lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages
kind: lemma
title: Multiplicative filtered cochains induce products on every spectral-sequence page
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, lem-spectral-sequence-subquotient-and-local-lifting-calculus, thm-the-cohomological-filtered-complex-construction, thm-the-next-page-is-the-homology-of-the-current-page]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lecture 29"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 29, printed pp. 100–101"
    - title: "Hatcher, Algebraic Topology, Chapter 5, Multiplicative Structure"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 543–546"
---

## Statement

Let $R$ be a commutative unital ring and let $(K^*,d)$ be an associative
unital differential graded $R$-algebra: $d$ has degree $1$ and
$$d(xy)=(dx)y+(-1)^{|x|}x(dy)$$
for homogeneous $x$. Suppose $K$ has a decreasing filtration by subcomplexes,
indexed by all integers, such that
$$F^aK\cdot F^cK\subseteq F^{a+c}K,\qquad 1\in F^0K.$$
Then every page of its cohomological spectral sequence has natural products
$$E_r^{a,b}\otimes_R E_r^{c,e}\longrightarrow E_r^{a+c,b+e}$$
making it a unital associative bigraded algebra, and
$$d_r(xy)=(d_rx)y+(-1)^{a+b}x(d_ry)\qquad(x\in E_r^{a,b}).$$
The specified comparison
$$E_{r+1}\cong H(E_r,d_r)$$
is an isomorphism of bigraded algebras. If $K$ is graded-commutative, every
page is graded-commutative with the total-degree sign.

If the filtration is degreewise finite, so that the filtered-complex
construction converges to the decreasing image filtration
$$F^aH^n(K)=\operatorname{im}\bigl(H^n(F^aK)\to H^n(K)\bigr),$$
then the stable product is exactly the associated-graded abutment product:
$$E_\infty^{a,b}\otimes E_\infty^{c,e}\longrightarrow E_\infty^{a+c,b+e}$$
corresponds to multiplication
$$\frac{F^aH^{a+b}}{F^{a+1}H^{a+b}}\otimes \frac{F^cH^{c+e}}{F^{c+1}H^{c+e}}\longrightarrow \frac{F^{a+c}H^{a+b+c+e}}{F^{a+c+1}H^{a+b+c+e}}.$$
All assertions are choice-free.

## Facts & Assumptions

**Given:** the DGA, its multiplicative decreasing filtration, homogeneous inputs, and the displayed Leibniz rule.

[F1] [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]] and [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] give the exact $A^r$, $Z^r$, $B^r$, and page quotients. [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] identifies $d_r$ with the original differential on representatives.

[F2] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] permits numerator and denominator containments to be checked after local lifts and descends the resulting bilinear maps uniquely to quotients.

[F3] [[thm-the-next-page-is-the-homology-of-the-current-page]] gives the specified natural comparison and its lower-filtration correction of a page-cycle representative.

[F4] [[thm-the-cohomological-filtered-complex-construction]] fixes the cohomological reindexing and gives the finite-filtration stable-page identification with the decreasing image filtration.

## Proof

**Proof technique:** explicit cycle-and-boundary representatives.

1.1 Reindex by $C_n=K^{-n}$ and $F_pC_n=F^{-p}K^{-n}$ as in [F4]. Multiplication sends $F_pC_n\otimes F_sC_m$ into $F_{p+s}C_{n+m}$, and its Leibniz sign is $(-1)^n$. Fix $r\geq1$, $x\in A^r_{p,n}$, and $y\in A^r_{s,m}$. Then $dx\in F_{p-r}C_{n-1}$ and $dy\in F_{s-r}C_{m-1}$, so $$d(xy)=(dx)y+(-1)^nx(dy)\in F_{p+s-r}C_{n+m-1}.$$ Thus $xy\in A^r_{p+s,n+m}$. For $r=0$, multiplication sends $F_p/F_{p-1}$ times $F_s/F_{s-1}$ to $F_{p+s}/F_{p+s-1}$, since either lower-filtration change lowers the product filtration by one. [F1, F4]

2.1 Let $a\in A^{r-1}_{p-1,n}$. Then $ay\in F_{p+s-1}$ and $$d(ay)=(da)y+(-1)^na(dy)\in F_{p+s-r},$$ so $ay\in A^{r-1}_{p+s-1,n+m}$, the first target denominator summand. The same calculation with the factors reversed puts $xb$ in that summand whenever $b\in A^{r-1}_{s-1,m}$. [F1, Step 1.1]

2.2 Let $u\in A^{r-1}_{p+r-1,n+1}$. The Leibniz formula gives $$(du)y=d(uy)+(-1)^nu(dy).$$ Here $uy\in A^{r-1}_{p+s+r-1,n+m+1}$: its differential lies in $F_{p+s}$ because $(du)y$ lies there and $u(dy)$ lies in $F_{p+s-1}$. Also $u(dy)\in A^{r-1}_{p+s-1,n+m}$, since it lies in $F_{p+s-1}$ and its differential, up to sign, is $(du)(dy)\in F_{p+s-r}$. Thus $(du)y$ belongs to the sum of the two target $B^r$ summands. Symmetrically, for $v\in A^{r-1}_{s+r-1,m+1}$, $$x(dv)=(-1)^n d(xv)-(-1)^n(dx)v,$$ with $xv\in A^{r-1}_{p+s+r-1,n+m+1}$ and $(dx)v\in A^{r-1}_{p+s-1,n+m}$. Hence a change by either differential-boundary summand also changes the product by a target $r$-boundary. [F1, Step 1.1]

3.1 Steps 2.1 and 2.2 show separately that multiplication kills the source denominator in either variable after passage to the target quotient. Bilinearity handles simultaneous changes. Quotient descent in [F2] therefore gives a unique page product for every $r\geq1$; the $r=0$ calculation in Step 1.1 gives the associated-graded product. Associativity and the unit descend from $K$. If $xy=(-1)^{|x||y|}yx$ in $K$, the same representative equality gives graded commutativity on every page. A filtration-preserving DGA map sends $xy$ to the product of the two image representatives and preserves every $A^r$ and $B^r$; uniqueness in [F2] therefore makes these page products natural for filtered DGA maps. [F1, F2, Step 1.1, Step 2.1, Step 2.2]

4.1 By [F1], the page differential is induced by $d$. Therefore the calculation of Step 1.1 descends verbatim: $$d^r([x][y])=[d(xy)]=[dx][y]+(-1)^n[x][dy].$$ Under $p=-a$, $q=-b$, the parity of $n=p+q=-(a+b)$ is the parity of $a+b$, and the target bidegrees translate to $(a+r,b-r+1)$ and $(a+c,b+e)$. This is the asserted cohomological derivation rule, including $r=0$. [F1, F4, Step 3.1]

4.2 Assume the filtration is degreewise finite and fix $(p,n)$. For $r$ beyond both relevant filtration endpoints, [F1] reduces the stable numerator to $$Z_n(F_pC)=\{x\in F_pC_n:dx=0\}$$ and its denominator to $$Z_n(F_{p-1}C)+\{dz:z\in C_{n+1},\ dz\in F_pC_n\}.$$ Sending an actual cycle to its class in $H_n(C)$ identifies this quotient, in both directions, with $F_pH_n(C)/F_{p-1}H_n(C)$, which is the stable identification in [F4]. If $x$ and $y$ are actual filtered cycles, their product is the actual cycle $xy$, lies in $F_{p+s}$, and represents both their page product from Step 3.1 and the product of their image-filtration classes. Lower-filtered cycles and actual boundaries give exactly the lower associated-graded ambiguity by Steps 2.1 and 2.2. Translating back to the decreasing filtration proves the displayed $E_\infty$ product is precisely the associated-graded abutment product. [F1, F4, Step 2.1, Step 2.2, Step 3.1]

5.1 The comparison in [F3] is multiplicative. For $r=0$, a $d^0$-cycle represented by $x\in F_pC_n$ already lies in $A^1_{p,n}$, and the comparison sends it to the same representative; hence it sends the product class to $xy$. For $r\geq1$, if page-cycle representatives $x,y$ require the lower-filtration corrections $x-a\in A^{r+1}_{p,n}$ and $y-b\in A^{r+1}_{s,m}$ from [F3], Step 1.1 puts their product in $A^{r+1}_{p+s,n+m}$. Moreover $$(x-a)(y-b)-xy=-ay-xb+ab\in F_{p+s-1}C_{n+m},$$ so it represents the same $E^r$ product class. It is therefore a permitted correction for $xy$, and the representative rule in [F3] sends the product of the two homology classes to the product of their images. Independence follows from [F3]'s kernel calculation, not from a chosen correction. Thus $E_{r+1}\cong H(E_r,d_r)$ is an algebra isomorphism. [F3, Step 1.1, Step 2.1, Step 3.1, Step 4.1]

6.1 If $K=0$, the coefficient ring is zero, or either input is zero, every map is the unique zero map. The unit calculation includes one factor equal to $1$, and $r=0$ and $r=1$ are covered separately in Steps 1.1 and 5.1. Repeated filtration terms, a zero differential, and representatives already in lower filtration satisfy the same containments. Step 2.2 checks both differential-boundary variables and Step 4.2 checks both finite filtration endpoints and both directions of the stable quotient identification. Every correction and calculation concerns finitely many supplied elements, so no choice principle is used. There is no iff assertion. [F1, F2, F3, F4, Step 1.1, Step 2.1, Step 2.2, Step 3.1, Step 4.1, Step 5.1, Step 4.2] ∎
