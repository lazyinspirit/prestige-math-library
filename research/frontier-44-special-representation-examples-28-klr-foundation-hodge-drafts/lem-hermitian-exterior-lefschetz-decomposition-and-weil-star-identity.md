---
id: "lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity"
kind: "lemma"
title: "Hermitian exterior Lefschetz decomposition and Weil star identity"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions", "thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula", "prop-hodge-star-squared-sign"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}, {"title": "Christian Schnell, class16, complete finite string/Lefschetz proof", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class16.pdf"}, {"title": "Christian Schnell, class17, complete Weil identity proof", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf"}]}
proof_strategy: direct
---

## Statement

Let $V$ be a real Hermitian vector space of dimension $2n$ with the conventions in [[def-compact-kahler-manifold-and-hodge-polarization-conventions]]. On its complex exterior algebra $L,\Lambda,H$ satisfy $[L,\Lambda]=H$, $H|_{\Lambda^k}=(k-n)I$, $[H,L]=2L$, $[H,\Lambda]=-2\Lambda$. Every degree-$k$ element uniquely decomposes as $\sum_{r\ge\max(0,k-n)}L^ru_r$, where $\Lambda u_r=0$ and $\deg u_r=k-2r$. For primitive degree $t$, $L^{n-t+1}u=0$ and $\Lambda^sL^ru=\frac{r!}{(r-s)!}\frac{(n-t-r+s)!}{(n-t-r)!}L^{r-s}u$ for $0\le s\le r\le n-t$; no nonzero primitive has $t>n$. Thus $L^{n-k}:\Lambda^k\to\Lambda^{2n-k}$ is an isomorphism for $k\le n$ and primitive degree $k$ is equivalently $L^{n-k+1}u=0$. With $J=i^{p-q}$ on type $(p,q)$ and $W=\exp L\exp(-\Lambda)\exp L$, one has $W|_{\Lambda^k}=\epsilon(k)J*$. In particular, if $u$ is primitive of type $(p,q)$ and $k=p+q$, then
$$*u=\frac{\epsilon(k)i^{q-p}}{(n-k)!}L^{n-k}u.$$
All decomposition projections are rational polynomials in $L,\Lambda$ on each fixed degree.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The star complementary-basis table and square sign are [[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]] and [[prop-hodge-star-squared-sign]].

## Proof

1.1 On a two-plane with oriented orthonormal basis $e,f$, $L$ sends $1$ to $e\wedge f$ and kills the other basis elements; $\Lambda$ sends $e\wedge f$ to $1$ and kills the others. Hence $[L,\Lambda]$ has eigenvalues $-1,0,0,1$ in degrees $0,1,1,2$. Orthogonal tensor factors give $L=\sum L_j$, $\Lambda=\sum\Lambda_j$, with distinct factors commuting. Summing the two-plane calculation proves all three commutators. Repeatedly commute $\Lambda$ past $L$ to obtain $\Lambda L^ru=r(n-t-r+1)L^{r-1}u$ for primitive $u$; iterating gives the stated factorial formula. Taking inner products gives $\|L^ru\|^2=r(n-t-r+1)\|L^{r-1}u\|^2$. If $t>n$, its $r=1$ case forces $u=0$. For $t\le n$, the coefficients are positive through $r=n-t$ and zero at $r=n-t+1$; thus the string is nonzero through that degree and vanishes next. [given, algebra]

2.1 Since $\Lambda$ is the adjoint of $L$, in each degree the finite-dimensional orthogonal complement of $\operatorname{im}L$ is $\ker\Lambda$. Recursively write a vector as a primitive plus $L$ times a lower-degree vector; this yields existence of the decomposition. Components that vanish beyond their string lengths are deleted. To see uniqueness, in a zero sum choose the largest nonzero index $s$ and apply $\Lambda^s$. All terms with $r<s$ vanish and the remaining term is a nonzero positive integer multiple of $u_s$, contradiction. This also shows successively that each $u_s$ is a rational polynomial in $L,\Lambda$ applied to the vector: take its highest nonzero lowering power, divide by its displayed nonzero integer coefficient, subtract the resulting $L^su_s$, and repeat. In each primitive string $L^{n-k}$ bijects its degree-$k$ and degree-$(2n-k)$ positions. The string uniqueness proves both hard linear Lefschetz and the kernel characterization of primitive vectors. [step 1.1, algebra, induction]

2.2 On one two-plane the star table is $*1=ef$, $*e=f$, $*f=-e$, $*(ef)=1$; here $J(e)=-f$, $J(f)=e$. Directly multiplying the three finite exponentials gives $W(1)=ef$, $W(e)=e$, $W(f)=f$, $W(ef)=-1$. This is $W=\epsilon(\deg)J*$ on all four basis elements. For orthogonal even-dimensional factors and homogeneous $a,b$, complementary-basis signs give $*(a\wedge b)=(-1)^{\deg a\deg b}(*a)\wedge(*b)$. The exponentials factor since distinct $L_j,\Lambda_j$ commute, so $W(a\wedge b)=W(a)\wedge W(b)$. Finally $\epsilon(a+b)=(-1)^{ab}\epsilon(a)\epsilon(b)$ and $J$ respects wedges. Induction over the two-planes proves the full Weil identity, with no irreducibility assertion. [step 1.1, given, algebra, induction]

3.1 For a primitive string of length $m=n-k$, identify $L^ru/r!$ with $\binom mr x^{m-r}y^r$. The recurrence in step 1.1 identifies $L$ with $y\partial_x$, $\Lambda$ with $x\partial_y$. The three exponentials are polynomial substitutions whose composite sends $x$ to $y$ and $y$ to $-x$; hence $Wu=L^mu/m!$. Since $J$ has eigenvalue $i^{p-q}$ on the whole string, the Weil identity gives $*u=\epsilon(k)i^{q-p}L^mu/m!$. This completes every claim. [step 1.1, step 2.1, step 2.2, algebra] ∎
