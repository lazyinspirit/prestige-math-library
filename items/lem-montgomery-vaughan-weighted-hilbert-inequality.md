---
dependency_level: 0
id: lem-montgomery-vaughan-weighted-hilbert-inequality
kind: lemma
title: "The weighted Montgomery–Vaughan Hilbert inequality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "H. L. Montgomery and R. C. Vaughan, Hilbert’s Inequality, Journal of the London Mathematical Society (2) 8 (1974), 73–82"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/s2-8-1-73.pdf"
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
---

## Statement

Let $N\ge2$, let $\lambda_1,\ldots,\lambda_N$ be distinct real numbers, and
put $\delta_r:=\min_{s\ne r}|\lambda_r-\lambda_s|$ for $1\le r\le N$.
There is an absolute constant $C>0$ such that every complex sequence
$a_1,\ldots,a_N$ satisfies

$$ \left|\sum_{\substack{1\le r,s\le N\\r\ne s}}\frac{a_r\overline{a_s}}{\lambda_r-\lambda_s}\right|\le C\sum_{r=1}^N\frac{|a_r|^2}{\delta_r}. $$

## Statement references

[Montgomery and Vaughan, “Hilbert’s Inequality,” Theorem 2 and the weighted form of Theorem 1, pp. 74, 79–81](https://personal.science.psu.edu/rcv4/personal/Publications/s2-8-1-73.pdf)

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §6.5, PDF pp. 43–44](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)


## Facts & Assumptions

**Given:** The distinct real numbers $\lambda_r$, their positive nearest spacings $\delta_r$, and complex coefficients in the Statement. All sums below are finite.

[F1] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] Finite Cauchy–Schwarz holds ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 Put $d_{rs}:=\lambda_r-\lambda_s$ and $I_r:=[\lambda_r-\delta_r/2,\lambda_r+\delta_r/2]$. Their interiors are pairwise disjoint: $\delta_r,\delta_s\le|d_{rs}|$, so their half-lengths sum to at most the distance between centers. If $r\ne s$, $I_r$ lies outside the open interval of radius $\delta_s/2$ around $\lambda_s$. Indeed, $|d_{rs}|-\delta_r/2\ge|d_{rs}|/2\ge\delta_s/2$. [given, construct, algebra]

1.2 If $f$ is convex on $I_r$, then $\delta_r f(\lambda_r)\le\int_{I_r}f(v)\,dv$: integrate $2f(\lambda_r)\le f(\lambda_r+u)+f(\lambda_r-u)$ for $0\le u\le\delta_r/2$. Apply this to $(v-\lambda_s)^{-2}$ and $(v-\lambda_s)^{-4}$, whose second derivatives are positive off their poles. Disjointness and step 1.1 give
$$ \sum_{r\ne s}\frac{\delta_r}{d_{rs}^2}\le\frac4{\delta_s},\qquad \sum_{r\ne s}\frac{\delta_r}{d_{rs}^4}\le\frac{16}{3\delta_s^3}. $$
The constants are the integrals of $u^{-2}$ and $u^{-4}$ over $|u|\ge\delta_s/2$. [step 1.1, algebra]

1.3 For $s\ne t$, the function $f(v)=((v-\lambda_s)^2(v-\lambda_t)^2)^{-1}$ is convex on every interval avoiding its two poles: $(\log f)''=2/(v-\lambda_s)^2+2/(v-\lambda_t)^2>0$, hence $f''=f(((\log f)')^2+(\log f)'')>0$. The intervals $I_r$ with $r\ne s,t$ avoid both half-spacing neighborhoods. If $d:=|\lambda_s-\lambda_t|$, at least one of $|v-\lambda_s|,|v-\lambda_t|$ is at least $d/2$, whence
$$ f(v)\le\frac4{d^2}\left(\frac1{(v-\lambda_s)^2}+\frac1{(v-\lambda_t)^2}\right). $$
Integration and the argument in step 1.2 therefore give
$$ \sum_{r\ne s,t}\frac{\delta_r}{d_{rs}^2d_{rt}^2}\le\frac{16}{d_{st}^2}\left(\frac1{\delta_s}+\frac1{\delta_t}\right). $$
[step 1.1, step 1.2, algebra]

2.1 Let $A$ have entries $A_{rs}=d_{rs}^{-1}$ for $r\ne s$ and $A_{rr}=0$, and put $D=\operatorname{diag}(\delta_1,\ldots,\delta_N)$. The matrix $B=D^{1/2}AD^{1/2}$ is skew-Hermitian. By [F1], its eigenvalues are $i\mu$ with $\mu$ real and its quadratic form is bounded in modulus by $\max|\mu|$ times the Euclidean squared norm. The eigenvalues are purely imaginary because $v^*Bv=-\overline{v^*Bv}$. For an eigenvector $v$ with $v^*v=1$, put $u=D^{1/2}v$; then
$$ \sum_r\frac{|u_r|^2}{\delta_r}=1,\qquad \sum_{s\ne r}\frac{u_s}{d_{rs}}=\frac{i\mu u_r}{\delta_r}. $$
It suffices to bound every such $|\mu|$. [F1, construct, algebra]

2.2 Squaring the eigenvector equation and summing with weights $\delta_r$ gives $\mu^2=T_1+T_2$, where
$$ T_1=\sum_s|u_s|^2\sum_{r\ne s}\frac{\delta_r}{d_{rs}^2},\qquad T_2=\sum_{s\ne t}u_s\overline{u_t}\sum_{r\ne s,t}\frac{\delta_r}{d_{rs}d_{rt}}. $$
Thus $T_1\le4$. To evaluate $T_2$, use $1/(d_{rs}d_{rt})=(1/d_{rs}-1/d_{rt})/d_{st}$. Extend the first resulting triple sum to $r=t$ and the second to $r=s$. Their extended sums coincide: using the eigenvector equation and its conjugate, each equals $-i\mu\sum_{r\ne s}\delta_r|u_s|^2/(\delta_s d_{rs})$. Restoring the two removed diagonal terms yields
$$ T_2=2\operatorname{Re}\sum_{r\ne s}\frac{\delta_r u_s\overline{u_r}}{d_{rs}^2}\le T_6,\qquad T_6:=\sum_{r\ne s}\frac{|u_r u_s|(\delta_r+\delta_s)}{d_{rs}^2}. $$
[step 1.2, step 2.1, algebra]

3.1 Symmetry gives $T_6/2=\sum_r|u_r|\sum_{s\ne r}\delta_s|u_s|/d_{rs}^2$. Weighted Cauchy–Schwarz [F2] and the normalization in step 2.1 give
$$ (T_6/2)^2\le\sum_r\delta_r\left(\sum_{s\ne r}\frac{\delta_s|u_s|}{d_{rs}^2}\right)^2=\sum_{s,t}\delta_s\delta_t|u_su_t|\sum_{r\ne s,t}\frac{\delta_r}{d_{rs}^2d_{rt}^2}, $$
where for $s=t$ the inner exclusion means $r\ne s$. The diagonal part is at most $16/3$ by step 1.2; the off-diagonal part is at most $16T_6$ by step 1.3. Hence $T_6^2\le64/3+64T_6$, which implies $T_6<65$ since the left side minus the right side is positive and increasing for $T_6\ge65$. [F2, step 1.2, step 1.3, step 2.1, algebra]

3.2 Steps 2.2 and 3.1 give $\mu^2<69<81$, so every eigenvalue of $B$ has modulus less than $9$. For arbitrary $a$, apply the quadratic-form bound in step 2.1 to $v=D^{-1/2}a$. The modulus of the Statement's sum equals $|a^*Aa|=|v^*Bv|$ (the two displayed index conventions differ only by sign), and $v^*v=\sum_r|a_r|^2/\delta_r$. This proves the stated inequality with $C=9$. [step 2.1, step 2.2, step 3.1, algebra] ∎
