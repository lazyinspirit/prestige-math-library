---
dependency_level: 4
id: lem-duffin-schaeffer-reduced-event-overlap
kind: lemma
title: Elementary measure and overlap bounds for reduced approximation events
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-reduced-rational-approximation-limsup-set
- thm-chinese-remainder-theorem
- thm-euler-totient-product-formula
- thm-lebesgue-measure-of-a-box-of-every-kind
- def-countable-choice
- lem-uniform-sifted-integer-count
- thm-first-mertens-theorem-for-primes
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
  - title: A. D. Pollington and R. C. Vaughan, The k-dimensional Duffin and Schaeffer
      conjecture, Mathematika37(1990),190–200, §§2–3
    url: https://personal.science.psu.edu/rcv4/personal/Publications/kdimensional_duffin_and_schaeffer_conjecture.pdf
proof_strategy: direct
---

## Statement

Assume Countable Choice. For $q\ge2$ let $I_q(a)$ be the reduced approximation event with parameter $a\ge0$, namely the intersection with $[0,1]$ of intervals of radius $a/q$ about $b/q$, $1\le b\le q$, $\gcd(b,q)=1$. Put $w=a\varphi(q)/q$. If $w\le1/2$, then $\lambda(I_q(a))\ge2w(1-w)\ge w$.

For distinct $q,r\ge2$, real $a,b\ge0$ with $a/q,b/r\le1/2$, put $w_q=a\varphi(q)/q$, $w_r=b\varphi(r)/r$, $g=\gcd(q,r)$ and $D=\max(ra,qb)/g$. Then, with an absolute constant,
$$ \lambda(I_q(a)\cap I_r(b))\ll w_qw_r\,\mathbf1_{2D\ge1}\prod_{\substack{p\mid qr/g^2\\p>D}}(1+1/p). $$

## Statement references

[Pollington–Vaughan, §§2–3, pp.191–196; the local proof retains the factor2 in the separation condition](https://personal.science.psu.edu/rcv4/personal/Publications/kdimensional_duffin_and_schaeffer_conjecture.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] Reduced events, unit representatives and the totient product are given in [[def-reduced-rational-approximation-limsup-set]], [[thm-euler-totient-product-formula]].

[F2] The Chinese remainder theorem holds for prime-power factors ([[thm-chinese-remainder-theorem]]).

[F3] Uniformly in $N,y$, the count of positive integers at most $y$ coprime to $N$ is at most an absolute constant times $y\prod_{p\mid N,p\le y}(1-1/p)$ ([[lem-uniform-sifted-integer-count]]).

[F4] Under Countable Choice, interval length computes Lebesgue measure ([[def-countable-choice]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] $\sum_{p\le u}(\log p)/p=\log u+O(1)$ ([[thm-first-mertens-theorem-for-primes]]).

## Proof

1.1 Work on the circle $\mathbb R/\mathbb Z$ with normalized length. For $q\ge2$ this event agrees with $I_q(a)$ up to the identified endpoints. Indeed its centers in $(0,1)$ are paired by $c\leftrightarrow1-c$. If the interval about $c$ wraps past $1$, any resulting point $x$ near $0$ has $|x-(1-c)|\le x+1-c$, the wrapped distance from $c$; it already belongs to the ordinary interval about $1-c$. Wrapping past $0$ is symmetric. Thus circle and interval measures coincide, also for intersections. [F1, F4, algebra]

1.2 List the reduced residues cyclically and let their positive integer gaps be $h_i$, so $\sum_i h_i=q$. The circle event has length $q^{-1}\sum_i\min(2a,h_i)=2w-q^{-1}\sum_i(2a-h_i)_+$. The loss sum is at most $\int_0^{2a}\sum_{1\le h\le u}C_q(h)\,du$, where $C_q(h)$ counts residue classes $c\pmod q$ with both $c$ and $c+h$ coprime to $q$. Each short adjacent gap is among these ordered pairs. Let $e=\gcd(q,2)$. By [F2], $C_q(h)=0$ unless $e\mid h$; otherwise it equals
$$ \frac qe\prod_{\substack{p\mid q\\p>2}}(1-2/p)\sum_{\substack{d\mid\prod_{p\mid q,p>2}p\\d\mid h}}\prod_{p\mid d}\frac1{p-2}. $$
At a prime power $p^v$, the count is $p^{v-1}(p-1)$ if $p\mid h$ and $p^{v-1}(p-2)$ otherwise, proving this expression by expansion. Summing over $h\le u$ and bounding each multiple count by $u/(ed)$ gives
$$ \sum_{h\le u}C_q(h)\le\frac{qu}{e^2}\prod_{\substack{p\mid q\\p>2}}(1-2/p)\left(1+\frac1{p(p-2)}\right)=qu\left(\frac{\varphi(q)}q\right)^2. $$
For $w\le1/2$, $2a\le q$, so the adjacent-gap argument applies without multiple windings. Integrating proves the loss at most $2qw^2$, and therefore the asserted lower bound. [F1, F2, step 1.1, algebra]

2.1 Put $\delta=\min(a/q,b/r)$ and $\Delta=\max(a/q,b/r)$; zero radii give null events and may be discarded. For the prime valuations $u=\nu_p(q)$, $v=\nu_p(r)$ put
$$ \ell=\prod_{u=v\ge1}p^u,\qquad m=\prod_{u\ne v}p^{\min(u,v)},\qquad n=\prod_{u\ne v}p^{\max(u,v)}. $$
Then $qr=\ell^2mn$, $g=\ell m$, $\operatorname{lcm}(q,r)=\ell n$, $\gcd(\ell,n)=1$, $n>1$, and $\Delta\ell n=D$. Differences of reduced centers are residues $c/(\ell n)$ with $\gcd(c,n)=1$. At an unequal-valuation prime the multiplicity of a fixed difference is $\varphi(p^{\min(u,v)})$. At an equal positive valuation it is $p^{u-1}(p-1)$ if $p\mid c$, and $p^{u-1}(p-2)$ otherwise, by the same residue count as in step 1.2. By [F2], the total multiplicity is therefore at most
$$ \frac{\varphi(m)\varphi(\ell)^2}{\ell}\prod_{p\mid\gcd(\ell,c)}\frac p{p-1}. $$
The inequality uses $1-2/p\le(1-1/p)^2$ at primes not dividing $c$. [F1, F2, algebra]

2.2 A pair of intervals can intersect only if its circle-center distance is at most $2\Delta$, and its intersection length is at most $2\delta$. A nonzero difference has distance at least $1/(\ell n)$, so $2D<1$ implies zero intersection. Otherwise set $X=2\Delta\ell n=2D\ge1$. Counting both signs bounds the intersection by an absolute constant times
$$ \delta\frac{\varphi(m)\varphi(\ell)^2}{\ell}\sum_{\substack{1\le c\le X\\(c,n)=1}}\prod_{p\mid\gcd(\ell,c)}\frac p{p-1}. $$
This upper bound remains valid if $X$ exceeds half the period, since overcounting only increases it. Expand the product as $\sum_{d\mid\gcd(\ell,c)}\varepsilon(d)/\varphi(d)$, where $\varepsilon(d)$ is $1$ for squarefree $d$ and $0$ otherwise. Reordering, and using $\gcd(\ell,n)=1$, bounds the sum by
$$ \sum_{\substack{j\le X\\(j,n)=1}}\sum_{d\le X/j}\frac{\varepsilon(d)}{\varphi(d)}\ll\sum_{\substack{j\le X\\(j,n)=1}}\log(2X/j). $$
To justify the last bound directly, $1/\varphi(d)=d^{-1}\sum_{k\mid d}\varepsilon(k)/\varphi(k)$ by prime factorization. Thus its partial sum is at most $(1+\log Y)\sum_k\varepsilon(k)/(k\varphi(k))\ll\log(2Y)$; the latter positive series is bounded by $\prod_p(1+1/(p(p-1)))<\infty$. [F1, F2, step 2.1, algebra]

3.1 Let $V_n(u)=\prod_{p\mid n,p\le u}(1-1/p)$. Integrating the count in [F3] bounds the final logarithmic sum by $\ll\int_1^{2X}V_n(u)\,du\ll XV_n(2X)$. For the last bound, split at $\sqrt{2X}$: on the upper interval $V_n(u)\le C V_n(2X)$, and on the lower interval use $V_n(u)\le1$. To justify both comparisons directly from [F5], partial summation with $A(u)=\sum_{p\le u}\log p/p=\log u+O(1)$ gives $\sum_{p\le u}1/p=A(u)/\log u+\int_2^u A(t)/(t(\log t)^2)\,dt=\log\log u+O(1)$. Taking logarithms of prime products, with a bounded error from $\sum_p p^{-2}$, therefore gives $V_n(2X)\gg1/\log(4X)$ and an absolutely bounded inverse product over $\sqrt{2X}<p\le2X$. Bounded $X\ge1$ are absorbed by increasing the constant. [F3, F5, step 2.2, algebra]

3.2 Substitution in step 2.2, and $\varphi(q)\varphi(r)=\varphi(\ell)^2\varphi(m)\varphi(n)$, now bound the intersection by
$$ \ll\delta\Delta\varphi(q)\varphi(r)\prod_{\substack{p\mid n\\p>4D}}(1-1/p)^{-1}. $$
Here $n$ and $qr/g^2=n/m$ have exactly the same prime factors. Moreover $(1-1/p)^{-1}=(1+1/p)(1-1/p^2)^{-1}$, and the product of the last factors is bounded absolutely by comparison with $\sum_{k\ge2}k^{-2}$. Enlarging the prime set from $p>4D$ to $p>D$ proves the stated overlap bound, since $\delta\Delta\varphi(q)\varphi(r)=w_qw_r$. Step 1.2 proves the remaining assertion. [F1, step 1.2, step 2.1, step 2.2, step 3.1, algebra] ∎
