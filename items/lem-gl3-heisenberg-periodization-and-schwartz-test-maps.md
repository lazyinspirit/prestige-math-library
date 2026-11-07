---
dependency_level: 0
id: lem-gl3-heisenberg-periodization-and-schwartz-test-maps
kind: lemma
title: "Heisenberg periodization and rapidly decreasing Schwartz test maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tempered-distribution, thm-finite-seminorm-bound-characterizes-tempered-distributions, lem-test-function-cutoffs-and-euclidean-localization, thm-poisson-summation-for-schwartz-functions, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, def-pullback-of-a-distribution-by-a-diffeomorphism, thm-tempered-convolution-is-smooth-with-polynomial-growth, lem-schwartz-parameter-pairing-and-integral-interchange, def-countable-choice]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), proof of Proposition 3.18, §4"
      url: "https://arxiv.org/pdf/math/0408100v3"
---

## Statement

Assume Countable Choice. Put $e(t)=\exp(2\pi it)$, let $N$ have multiplication $(x,y,z)(x',y',z')=(x+x',y+y',z+z'+xy')$, and let $X=N_{\mathbb Z}\backslash N$ have normalized Haar density $dx\,dy\,dz$. For $n\ne0$ and $k\in\mathbb Z/n\mathbb Z$, the formulas
$$E_{n,k}f=\sum_{l\equiv k\pmod n}e(nz+ly)f(x+l/n),\qquad J_{n,k}h=\sum_{l\equiv k\pmod n}e(n(z-xy)+lx)h(l/n-y)$$
define continuous maps $\mathcal S(\mathbb R)\to C^\infty(X)$ and continuous maps $\mathcal S'(\mathbb R)\to\mathcal D'(X)$ for both weak and strong dual topologies. The latter formulas mean the transposes of the test maps below. If $p_M$ denotes the supremum of derivatives up to order $M$ in a finite smooth atlas on $X$, and $q_{P,Q}(f)=\max_{j\le Q}\sup_u(1+|u|)^P|f^{(j)}(u)|$, their $\mathcal S\to C^\infty$ bounds grow at most polynomially in $|n|$, uniformly in $k$. Their transposed test maps $A_{n,k},B_{n,k}:C^\infty(X)\to\mathcal S(\mathbb R)$ satisfy, for every $A,P,Q$, a bound
$$q_{P,Q}(A_{n,k}\Phi)+q_{P,Q}(B_{n,k}\Phi)\le C(1+|n|)^{-A}p_L(\Phi),$$
with $C,L$ independent of $n,k,\Phi$. For every $f\in\mathcal S'$ one has
$$E_{n,k}f=\sum_{j\in\mathbb Z/n\mathbb Z}e(jk/n)J_{n,j}[\widehat f(n\,\cdot)],$$
where $\widehat f(t)=\int f(u)e(-ut)\,du$ on Schwartz functions and scaling of distributions means diffeomorphism pullback.

## Statement references

[Miller and Schmid, §4, especially (4.10)–(4.14)](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** The data of the statement and [[def-countable-choice|Countable Choice]]. Distributions act linearly on tests, without complex conjugation.

[F1] [[lem-test-function-cutoffs-and-euclidean-localization]] provides smooth cutoffs. A positive cutoff divided by its locally finite integer periodization gives $\chi\in C_c^\infty(\mathbb R)$ with $\sum_{q\in\mathbb Z}\chi(x-q)=1$.

[F2] [[thm-poisson-summation-for-schwartz-functions]] gives Poisson summation with negative-sign Fourier transform.

[F3] [[def-tempered-distribution]] and [[thm-finite-seminorm-bound-characterizes-tempered-distributions]] give the Schwartz dual and its finite seminorm estimates. [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] and [[def-pullback-of-a-distribution-by-a-diffeomorphism]] give the continuous Fourier and scaling maps.

[F4] [[thm-tempered-convolution-is-smooth-with-polynomial-growth]] makes convolution with a compact smooth mollifier smooth. [[lem-schwartz-parameter-pairing-and-integral-interchange]] permits pairing under a Schwartz-seminorm-integrable parameter integral.

## Proof

**Given:** The stated data.

1.1 Left integer translations reduce $x,y,z$ to the unit cube, so $X$ is compact, with its usual smooth boundary identifications. Integrating a quotient function against $\chi(x)\,dx\,dy\,dz$ with $y,z\in[0,1]$ computes its quotient integral. Indeed the integrand after $y,z$ integration is periodic in $x$, since the left translation $(1,0,0)$ changes $(x,y,z)$ to $(x+1,y,z+y)$; summing the partition in [F1] reduces its integral to $0\le x\le1$. [F1, given]


2.1 For $\Phi\in C^\infty(X)$ put $h_{n,l}(x)=\int_0^1\int_0^1\Phi(x,y,z)e(nz+ly)\,dy\,dz$. The variables $y,z$ are periodic at fixed $x$. Repeated integration by parts using $1-\partial_y^2$ and $1-\partial_z^2$ gives, on each fixed compact $x$ interval and for arbitrary $a,b,q$, [step 1.1]
$$\sup_x|D_x^q h_{n,l}(x)|\le C(1+|n|)^{-a}(1+|l|)^{-b}p_L(\Phi).$$
The left translation above also gives $h_{n,l}(x+1)=h_{n,l+n}(x)$. All derivatives and integrals are on fixed compact rectangles, so these estimates apply uniformly to bounded sets of smooth tests. [step 1.1]


3.1 Set $A_{n,k}\Phi(u)=\sum_{l\equiv k\pmod n}\chi(u-l/n)h_{n,l}(u-l/n)$. The possible values of $l/n$ have spacing one, so only a fixed number of terms occur at each $u$. On each support $|u|\le C+|l|$, since $|n|\ge1$. Differentiate this formula and apply step 2.1 with $b>P+1$ to obtain the stated bound for every $q_{P,Q}$ and every $A$. Changing variable $u=x+l/n$ shows [F1, F3, step 1.1, step 2.1]
$$\int_X(E_{n,k}f)\Phi=\int_{\mathbb R}f(u)A_{n,k}\Phi(u)\,du.$$
Thus $\langle E_{n,k}T,\Phi\rangle=\langle T,A_{n,k}\Phi\rangle$ defines the asserted extension. A continuous map of test spaces maps bounded sets to bounded sets; its transpose is therefore continuous for both dual topologies. [F1, F3, step 1.1, step 2.1]


4.1 Choose $0\le k<|n|$ and write $l=k+nq$. On a fixed compact $x$ interval, $x+l/n$ differs from $q$ by a bounded amount. Differentiating the series for $E$ at most $M$ times contributes at most $M$ powers of $l$ and $n$ and at most $M$ derivatives of $f$. Since $|l|\le |n|(1+|q|)$, summing $(1+|q|)^{-3}$ proves uniform convergence of every derivative and the sufficient bound [F1, step 2.1, step 3.1]
$$p_M(E_{n,k}f)\le C_M(1+|n|)^{2M+2}q_{M+3,M}(f).$$
Its left lattice invariance follows by reindexing $l$ under $(1,0,0)$ and by integer periodicity for the other two generators. In coordinates $w=z-xy$, the variables $x,w$ are periodic at fixed $y$; translation $y\mapsto y+1$ changes $w$ to $w-x$. Interchange $x,y$, replace the real argument by its negative, use a compact partition in $y$, and repeat steps 2.1–3.1. This gives $B_{n,k}$ and the same bounds for $J$. Explicitly its Fourier coefficients are $b_{n,l}(y)=\int_0^1\int_0^1\Phi(x,y,w+xy)e(nw+lx)\,dx\,dw$ and
$$B_{n,k}\Phi(u)=\sum_{l\equiv k\pmod n}\chi(l/n-u)b_{n,l}(l/n-u).$$
The compact-strip derivative bounds and support estimates just proved apply to this formula verbatim. The change from $z$ to $w$ has Jacobian one. [F1, step 2.1, step 3.1]


5.1 For $f\in\mathcal S$ and $a=x+k/n$, Poisson summation applied to $g(t)=f(a+t)e(nyt)$ yields [F2, step 4.1, algebra]
$$E_{n,k}f=e(nz+ky)\sum_q e(nqy)f(a+q)=\sum_m e(n(z-xy)+mx+mk/n)\widehat f(m-ny).$$
Indeed $\widehat g(m)=e((m-ny)a)\widehat f(m-ny)$. Grouping $m$ modulo $n$ gives the required finite identity, including negative $n$; the scaling stays inside $\widehat f(n\,\cdot)$, so no scalar factor is inserted. [F2, step 4.1, algebra]


6.1 Schwartz functions are strongly dense in $\mathcal S'$. To verify precisely the needed assertion, fix a compact smooth integral-one mollifier $\eta$, put $\eta_\epsilon(x)=\epsilon^{-1}\eta(x/\epsilon)$, and choose $\chi_0\in C_c^\infty$ equal to one near zero. For $T\in\mathcal S'$ set $f_m=\chi_0(\cdot/m)(T*\eta_{1/m})\in C_c^\infty$. Its pairing with $\psi\in\mathcal S$ equals the pairing of $T$ with $\check\eta_{1/m}*(\chi_0(\cdot/m)\psi)$ by [F4]. In every Schwartz seminorm the cutoff error is $O(m^{-1})$ times a fixed higher seminorm of $\psi$: outside $|x|\ge cm$ absorb $m^{-1}$ with one extra power of $(1+|x|)$, and use the product rule for derivatives. The convolution error is likewise $O(m^{-1})$ by the mean-value formula and the weighted first moment of the compactly supported $\eta$; convolution at scales at most one is uniformly bounded by a fixed higher Schwartz seminorm. These estimates hold uniformly on bounded sets of $\psi$. The finite bound in [F3] therefore gives $f_m\to T$ strongly. Pass step 5.1 through the continuous maps in [F3] and steps 3.1–4.1. This proves the identity for all $T$, and completes every asserted extension and estimate. [F1, F3, F4, step 3.1, step 4.1, step 5.1] ∎ [F1, F3, F4, step 3.1, step 4.1, step 5.1]
