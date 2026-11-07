---
id: lem-sharp-additive-large-sieve-for-real-intervals
kind: lemma
title: "Sharp Additive Large Sieve on a Real Coefficient Interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: direct
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-basel-sum-by-residues
  - thm-mittag-leffler-expansion-of-pi-cotangent
  - thm-eulers-formula
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 15"
      url: "https://kskedlaya.org/ant/chap-largesieve.html"
      locator: "Lemmas 15.1 and 15.4, Corollaries 15.2–15.3, Theorem 15.5 and Exercise 15.4.4 (Cohen dilation). The exercise arguments are supplied below."
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, author manuscript"
      url: "https://personal.science.psu.edu/rcv4/571s25/montgomery-vaughanII.pdf"
      locator: "Appendix G.4, Theorems G.14–G.15 and their complete proofs, printed pp. 422–426, PDF pp. 434–438."
---

## Statement

Write $e(t)=\exp(2\pi it)$ and $\|t\|=\min_{h\in\mathbb Z}|t-h|$. Let $I$ be a finite index set, let $0<d\le1$, and let $t_i\in\mathbb R$ satisfy $\|t_i-t_j\|\ge d$ whenever $i\ne j$. Let $W',W\in\mathbb R$ with $W'\le W$, and let $a_n\in\mathbb C$ for the integers $W'<n\le W$. Put $N=\lfloor W\rfloor-\lfloor W'\rfloor$. If $N\ge1$, then
$$\sum_{i\in I}\left|\sum_{W'<n\le W}a_ne(nt_i)\right|^2\le(N-1+d^{-1})\sum_{W'<n\le W}|a_n|^2\le(W-W'+d^{-1})\sum_{W'<n\le W}|a_n|^2.$$
If $N=0$, both moments and the coefficient energy are zero, and the last inequality remains valid. Thus the exact principle (H) in the installed prime-support amplification lemma holds, including real interval endpoints, zero coefficients, singleton and empty families, and non-strict separation. The proof uses no choice axiom beyond finite choice.

## Statement references

[Kedlaya, Theorem 15.5](https://kskedlaya.org/ant/chap-largesieve.html)

## Facts & Assumptions

**Given:** The finite family, non-strict separation, coefficient interval and coefficients in the Statement. Auxiliary real separated families below are also finite. All vector norms are Euclidean, and a bar denotes complex conjugation.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] gives an orthonormal eigenbasis for a finite complex normal matrix. For a skew-Hermitian matrix $A^*=-A$, its eigenvalues are purely imaginary: if $Au=\rho u$ with $u\ne0$, the identity $u^*Au=-\overline{u^*Au}$ forces $\operatorname{Re}\rho=0$. Expansion in the eigenbasis bounds its norm by the largest eigenvalue modulus.

[F2] [[cor-basel-sum-by-residues]] gives $\sum_{h\ge1}h^{-2}=\pi^2/6$.

[F3] [[thm-mittag-leffler-expansion-of-pi-cotangent]] gives, for $z\notin\mathbb Z$,
$$\pi\cot(\pi z)=\frac1z+\sum_{h\ge1}\left(\frac1{z-h}+\frac1{z+h}\right),$$
with the indicated paired convergence.

[F4] [[thm-eulers-formula]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]] and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] give the usual real exponential/trigonometric identities: $|e(t)|=1$, $e(t+1)=e(t)$, $e(s+t)=e(s)e(t)$, and $2i\sin(\pi t)=e(t/2)-e(-t/2)$. The algebra below uses these identities and finite geometric summation.

## Proof

1.1 First take real numbers $x_1<\cdots<x_r$ whose consecutive gaps are at least $h>0$. Define the real matrix $A$ by $A_{jk}=(x_j-x_k)^{-1}$ for $j\ne k$ and $A_{jj}=0$. Put $b_j=\sum_{k\ne j}A_{jk}$ and $r_j=\sum_{k\ne j}A_{jk}^2$. The gap condition gives $|x_j-x_k|\ge h|j-k|$, so [F2] implies $r_j\le2h^{-2}\sum_{v\ge1}v^{-2}=\pi^2/(3h^2)$. Also $A^*=-A$. By [F1], to bound its norm it suffices to bound an eigenvalue $i\lambda$ on a nonzero eigenvector $u$, with $\lambda\in\mathbb R$ and $Au=i\lambda u$. The empty matrix needs no estimate. [given, F1, F2, construct]

1.2 For real $z\notin\mathbb Z$, the cotangent identity $\cot(\pi z/2)-\cot(\pi z)=1/\sin(\pi z)$ follows directly from [F4]. Substitute the expansions [F3] at $z/2$ and $z$, using cutoff $H$ in the first and $2H$ in the second. Their difference is exactly $$\frac1z+\sum_{v=1}^{2H}(-1)^v\left(\frac1{z-v}+\frac1{z+v}\right).$$ The paired terms are $O_z(v^{-2})$, so the odd cutoffs have the same limit as the even cutoffs. It follows that $$\lim_{H\to\infty}\sum_{v=-H}^{H}\frac{(-1)^v}{z+v}=\frac\pi{\sin(\pi z)}.$$ The triangularly weighted sums have this same limit: if $s_ell$ is the symmetric sum with cutoff $\ell$, then $\sum_{|v|<K}(1-|v|/K)(-1)^v/(z+v)=K^{-1}\sum_{\ell=0}^{K-1}s_\ell$. The arithmetic means of a convergent sequence converge to its limit, as follows by bounding a fixed finite initial segment by its total modulus divided by $K$, and its remaining errors by any prescribed $\varepsilon>0$. [F3, F4, algebra]

2.1 Expanding the norm and separating equal indices gives $\lambda^2\sum_j|u_j|^2=D+C$, where $$D=\sum_j|u_j|^2r_j,\qquad C=\sum_{j\ne k}u_j\overline{u_k}\sum_{i\ne j,k}A_{ij}A_{ik}.$$ For three distinct indices, $A_{ij}A_{ik}=A_{jk}(A_{ij}-A_{ik})$. The inner sum is consequently $A_{jk}(b_k-b_j+2A_{jk})$, since $\sum_{i\ne j,k}A_{ij}=-b_j+A_{jk}$ and $\sum_{i\ne j,k}A_{ik}=-b_k-A_{jk}$. Therefore $$C=2\sum_{j\ne k}u_j\overline{u_k}A_{jk}^2+\sum_{j\ne k}u_j\overline{u_k}A_{jk}(b_k-b_j).$$ All these sums are finite. [step 1.1, algebra]

3.1 The last sum in step 2.1 is zero. Indeed, its part containing $b_k$ equals $\sum_k b_k\overline{u_k}\sum_{j\ne k}A_{jk}u_j=-i\lambda\sum_k b_k|u_k|^2$, whereas its part containing $-b_j$ equals $-\sum_j b_ju_j\sum_{k\ne j}A_{jk}\overline{u_k}=i\lambda\sum_j b_j|u_j|^2$. Here we used antisymmetry, the eigenvector equation, the reality of $A$ and $\lambda$, and its conjugate. The sum $\sum_{j\ne k}u_j\overline{u_k}A_{jk}^2$ is real by interchange of $j,k$. Taking real parts and using $2\operatorname{Re}(u_j\overline{u_k})\le|u_j|^2+|u_k|^2$ bounds it by $D$. Thus $\lambda^2\sum_j|u_j|^2\le3D\le\pi^2h^{-2}\sum_j|u_j|^2$. [step 1.1, step 2.1, algebra]

4.1 By [F1] every vector satisfies $\|Au\|_2\le\pi h^{-1}\|u\|_2$. Finite Cauchy–Schwarz therefore gives the real-line Hilbert bound $$\left|\sum_{j\ne k}\frac{z_j\overline{z_k}}{x_j-x_k}\right|\le\frac\pi h\sum_j|z_j|^2.$$ For clarity, finite Cauchy–Schwarz follows by expanding $\sum_j|v_j-cw_j|^2\ge0$ and minimizing in the complex scalar $c$ (with $w=0$ treated directly). Relabeling the real points preserves this bound, so increasing order is unnecessary once the pairwise separation is known. [F1, step 3.1, algebra]

5.1 Choose lifts $\theta_i\in[0,1)$ for the given $t_i$ by subtracting their integer parts. For a positive integer $K$, the real points $\theta_i+m$, $0\le m<K$, are mutually at least $d$ apart: different $i$ use the circular separation, and equal $i$ use integer distance at least $1\ge d$. Apply step 4.1 to them with coefficients $(-1)^mz_i$. The terms with equal $i$ and distinct $m,n$ cancel in reversed pairs, because their numerators are the real numbers $(-1)^{m-n}|z_i|^2$ and their denominators have opposite signs. Group the remaining terms by $v=m-n$ and divide the inequality by $K$ to get $$\left|\sum_{i\ne j}z_i\overline{z_j}\sum_{|v|<K}\left(1-\frac{|v|}K\right)\frac{(-1)^v}{\theta_i-\theta_j+v}\right|\le\frac\pi d\sum_i|z_i|^2.$$ Step 1.2 applies to every $\theta_i-\theta_j\notin\mathbb Z$. Taking the limit over the finitely many pairs and dividing by $\pi$ proves $$\left|\sum_{i\ne j}\frac{z_i\overline{z_j}}{\sin\pi(\theta_i-\theta_j)}\right|\le d^{-1}\sum_i|z_i|^2.$$ This argument includes an empty or singleton family, where the last sum is zero. [given, step 4.1, step 1.2, algebra]

6.1 For any real $y$, write $\sin(2\pi yv)=(e(yv)-e(-yv))/(2i)$ using [F4]. Apply step 5.1 to the two vectors $z_ie(y\theta_i)$ and $z_ie(-y\theta_i)$, and take half the sum of their bounds. Since both vectors have the same energy as $z$, this gives $$\left|\sum_{i\ne j}z_i\overline{z_j}\frac{\sin(2\pi y(\theta_i-\theta_j))}{\sin\pi(\theta_i-\theta_j)}\right|\le d^{-1}\sum_i|z_i|^2.$$ The signs of the denominators are preserved by using the fixed real lifts throughout. [F4, step 5.1, algebra]

7.1 Let $M\in\mathbb Z$ and $J\ge1$ be an integer. Expand $\sum_{n=M+1}^{M+J}|\sum_i z_ie(n\theta_i)|^2$. The diagonal is $J\sum_i|z_i|^2$. For $v=\theta_i-\theta_j\notin\mathbb Z$, finite geometric summation and [F4] give $$\sum_{n=M+1}^{M+J}e(nv)=e\left(\left(M+\frac{J+1}2\right)v\right)\frac{\sin(\pi Jv)}{\sin(\pi v)}.$$ Apply step 6.1 with $y=J/2$ and replace $z_i$ there by $z_ie((M+(J+1)/2)\theta_i)$. The off-diagonal has absolute value at most $d^{-1}\sum_i|z_i|^2$, giving $$\sum_{n=M+1}^{M+J}\left|\sum_i z_ie(n\theta_i)\right|^2\le(J+d^{-1})\sum_i|z_i|^2.$$ This bound also applies to the angles $-\theta_i$, which have the same separation. [F4, step 6.1, algebra]

8.1 Put $P_i=\sum_{n=M+1}^{M+J}a_ne(n\theta_i)$. For any vector $z$ of energy $1$, step 4.1's finite Cauchy–Schwarz and step 7.1, applied to $-\theta_i$, give $$\left|\sum_i P_i\overline{z_i}\right|=\left|\sum_n a_n\sum_i\overline{z_i}e(n\theta_i)\right|\le\left(\sum_n|a_n|^2\right)^{1/2}\left(\sum_n\left|\sum_i z_ie(-n\theta_i)\right|^2\right)^{1/2}\le\left((J+d^{-1})\sum_n|a_n|^2\right)^{1/2}.$$ If $P\ne0$, use $z=P/\|P\|_2$; otherwise the desired inequality is immediate. Squaring proves the additive large-sieve bound with constant $J+d^{-1}$. Periodicity makes it valid for arbitrary lifts of the angles. [F4, step 4.1, step 7.1, algebra]

9.1 To apply step 8.1 on a dilated family and remove the extra unit, start with coefficients at the consecutive positions $A,A+1,\ldots,B$, where $A,B\in\mathbb Z$, $A\le B$, and $J=B-A+1$. For a positive integer $K$ use the angles $(\theta_i+k)/K$, $0\le k<K$. Their mutual circular separation is at least $d/K$: for different $i$, every numerator $\theta_i-\theta_j+k-\ell-Kv$ has absolute value at least $d$; for equal $i$ and distinct $k,\ell$, that numerator is a nonzero integer for every $v\in\mathbb Z$, and has absolute value at least $1\ge d$. Put $b_{Kn}=a_n$ and put zero at the other integer positions from $KA$ through $KB$. There are $K(J-1)+1$ positions and the energy is unchanged. At each of the $K$ new angles belonging to $i$, the new polynomial equals $\sum_n a_ne(n\theta_i)$, since $e(nk)=1$. [given, F4, step 8.1, construct]

10.1 Step 8.1 with separation $d/K$ and interval length in integer positions $K(J-1)+1$ therefore yields $$K\sum_i\left|\sum_{n=A}^{B}a_ne(n\theta_i)\right|^2\le\left(K(J-1)+1+\frac Kd\right)\sum_{n=A}^{B}|a_n|^2.$$ Divide by $K$ and let the positive integer $K$ tend to infinity. The left side after division is independent of $K$, proving the constant $J-1+d^{-1}$. These are inequalities between fixed finite quantities, so no interchange of an infinite sum is used. [step 8.1, step 9.1, algebra]

11.1 For the given real interval with $N\ge1$, set $A=\lfloor W'\rfloor+1$, $B=\lfloor W\rfloor$, so $J=N$. These are exactly its integer coefficient positions. Writing $W'=\lfloor W'\rfloor+u$ and $W=\lfloor W\rfloor+v$ with $u,v\in[0,1)$ gives $W-W'=N+v-u>N-1$. Thus step 10.1 gives both inequalities in the Statement. If $N=0$, the interval contains no integer and every relevant sum is zero; $W-W'+d^{-1}>0$ still holds. This proves (H) without extra restrictions on the endpoints or a strict separation hypothesis. [given, step 10.1, algebra] ∎

## Remarks

The proof reconstructs the sharp Hilbert and additive-sieve arguments locally; neither Hilbert inequality nor a Selberg majorant is an unproved external premise. It uses only finite-dimensional spectral theory and the two stated convergent partial-fraction/series suppliers. Its applications require no arbitrary-index choices.

This draft is the missing supplier for (H) only. After owner installation and the ordinary review process, it can be cited at the existing prime-support helper's conditional steps, retaining that helper's prime-support, endpoint, odd-index and zero-logarithm conventions. It proves no weighted prime-supported sieve estimate and does not supply the parent theorem's numerical assembly.
