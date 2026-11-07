---
id: lem-helf-prime-support-amplification-and-bilinear-sieve
kind: lemma
title: "Prime-Support Amplification and Large-Sieve Bounds for Helfgott's Bilinear Sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
deps:
  - thm-additive-large-sieve-inequality
  - thm-fundamental-theorem-of-arithmetic
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. A. Helfgott, Minor arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1205.5252v4"
      locator: "Section 4.2, Lemma 4.3 and (4.39)–(4.40), printed pp. 44–45; Lemmas 4.4–4.5 and Proposition 4.6, printed pp. 45–50. Weaker unconditional constants and explicitly conditional sharp specialization."
---

## Statement

Write $e(t)=\exp(2\pi it)$, $\|t\|=\min_{h\in\mathbb Z}|t-h|$, and let $\varphi(r)$ count the residue classes coprime to the positive integer $r$. Let $\mu(r)=0$ for nonsquarefree $r$, and $\mu(r)=(-1)^j$ for a product of $j$ distinct primes, including $\mu(1)=1$. Fix an integer $q\ge1$. Let $W\ge W'\ge1$, $W'\ge W/2$, and let $c_p$ be arbitrary complex coefficients on the primes $W'<p\le W$. Put
$$S(t)=\sum_{W'<p\le W}c_pe(tp),\qquad E=\sum_{W'<p\le W}|c_p|^2,\qquad N=\lfloor W\rfloor-\lfloor W'\rfloor,\qquad L=W-W'.$$
If $N=0$, all sums below vanish. Otherwise write
$$K(d)=d^{-1}+4\pi N\quad(0<d\le1),\qquad G_q(R)=\sum_{\substack{r\le R\\(r,q)=1}}\frac{\mu(r)^2}{\varphi(r)}\quad(R\ge1).$$

The following are unconditional consequences of the stated local suppliers.

* **Amplification.** For any finite indexed family $t_i$, any $R\in[1,W']$, and any $d\in(0,1]$, suppose all the indexed angles
$$t_i+b/r\pmod1,\qquad r\le R,\quad (r,q)=1,\quad \mu(r)^2=1,\quad b\pmod r,\quad (b,r)=1$$
are mutually $d$-separated. The unique class modulo $1$ is included when $r=1$. Then
$$\sum_i|S(t_i)|^2\le\frac{K(d)}{G_q(R)}E,\qquad G_q(R)\ge\frac{\varphi(q)}q\sum_{n\le R}\frac1n\ge\frac{\varphi(q)}q\log R.$$
* **Clusters.** Suppose $t_i=t_0+a_i/q+v_i$ modulo $1$, $0\le a_i<q$, all $v_i$ lie in an interval of length $u>0$, and $a_i=a_j$, $i\ne j$ implies $|v_i-v_j|\ge d>0$. Assume $d+u\le1/q$ and put $R=(q(d+u))^{-1/2}$. Define $J_q(1)=1$ and, for $R>1$,
$$J_q(R)=\min\left(1,\frac{q}{\varphi(q)\log R}\right).$$
Then
$$\sum_i|S(t_i)|^2\le J_q(R)K(d)E.$$
* **The odd bilinear range.** Let $x\ge W$, $x/(2W)\le U'\le x/W$, and
$$B_c(W)=\sum_{\substack{U'<m\le x/W\\m\ \mathrm{odd}}}|S(\alpha m)|^2,\qquad 2\alpha=a/q+\delta/x,\quad (a,q)=1,\quad q\le Q,\quad |\delta/x|\le1/(qQ).$$
For every $1\le R\le W'$ with $qR^2<Q$, set $s=(qR^2)^{-1}-Q^{-1}>0$. Then
$$B_c(W)\le\left(\frac{x}{4Wq}+1\right)\frac{K(s)}{G_q(R)}E.$$
If $\delta\ne0$, put $Q'=x/|\delta q|$ and $D=x/(4W)$. If $q+D\le Q'$, then
$$B_c(W)\le J_q\left(\sqrt{\frac{Q'}{q+D}}\right)(Q'+4\pi N)E.$$
Taking $U'=\max(U,x/(2W))$, $W'=\max(V,W/2)$, and $c_p=(\log p)\mathbf1_{p\ \mathrm{odd}}$ gives exactly the $B(W)$ in the preceding Vaughan-reduction draft whenever these ranges are nonempty and $W'\ge1$. Empty ranges contribute zero. In particular the even prime is not silently added to that draft's inner sum.

There is also an **explicitly conditional sharp specialization**. Suppose the following additional principle holds for the required angles and coefficient interval:

**(H)** For every finite indexed family $t_i$ with mutual circular distances at least $d\in(0,1]$, and every complex coefficient vector $a_n$ on the integers $W'<n\le W$,
$$\sum_i\left|\sum_{W'<n\le W}a_ne(nt_i)\right|^2\le(L+d^{-1})\sum_{W'<n\le W}|a_n|^2.$$

Under (H), every displayed bound above holds with $K(d)$ replaced by $L+d^{-1}$ (and $K(s)$ by $L+s^{-1}$). Consequently the tail bound becomes exactly
$$B_c(W)\le\min\left(1,\frac{2q/\varphi(q)}{\log\bigl(Q'/(q+x/(4W))\bigr)}\right)\left(Q'+\frac W2\right)E,$$
with the minimum interpreted as $1$ when its logarithm is zero. This is the bound in Helfgott's (4.55), with explicit treatment of the zero logarithm. Principle (H) is an unproved additional hypothesis in this draft. The locally available additive-sieve supplier gives $d^{-1}+4\pi N$, not (H). Neither Helfgott's weighted estimate (4.50)/(4.53) nor the parent minor-arc numerical theorem is asserted here.

## Statement references

[[thm-additive-large-sieve-inequality]]

[[thm-fundamental-theorem-of-arithmetic]]

[Helfgott, Section 4.2](https://arxiv.org/pdf/1205.5252v4)

## Facts & Assumptions

**Given:** The finite prime-supported polynomial, intervals, and the separate parameter hypotheses for each conclusion in the Statement. Empty sums are zero. Principle (H) is assumed only for the conditional sharp specialization.

[F1] [[thm-additive-large-sieve-inequality]] gives the constant $d^{-1}+4\pi N$ for $d$-separated torus frequencies and $N$ consecutive integer coefficient positions. Zero coefficients are permitted.

[F2] [[thm-fundamental-theorem-of-arithmetic]] gives unique prime factorization. In particular squarefree divisors are in bijection with subsets of the distinct prime factors. All divisor and residue-class sums below are finite.

## Proof

1.1 For any integer $h$, finite geometric summation gives $\sum_{b=0}^{r-1}e(bh/r)=r$ when $r\mid h$, and zero otherwise. Factorization [F2] gives $\sum_{d\mid n}\mu(d)=\mathbf1_{n=1}$ by expanding $\prod_{p\mid n}(1-1)$. Thus inclusion and exclusion gives $\mathbf1_{(b,r)=1}=\sum_{d\mid(b,r)}\mu(d)$. Summing over $b$ proves, when $(h,r)=1$, that $\sum_{b\bmod r,(b,r)=1}e(bh/r)=\mu(r)$: the term for $d\mid r$ is $\mu(d)\sum_{c=0}^{r/d-1}e(ch/(r/d))$, and only $d=r$ survives. The same inclusion and exclusion with $h=0$ gives $\varphi(r)=r\prod_{p\mid r}(1-1/p)$, including $\varphi(1)=1$. [F2, given, algebra]

2.1 Let $r\le W'$ be squarefree. Every support prime $p>W'$ is coprime to $r$. Step 1.1 therefore gives $\sum_{b\bmod r,(b,r)=1}S(t+b/r)=\mu(r)S(t)$. For complex numbers $z_1,\ldots,z_h$, the inequality $|\sum_jz_j|^2\le h\sum_j|z_j|^2$ follows from $\sum_j|z_j-z_*|^2\ge0$, where $z_*=h^{-1}\sum_jz_j$ denotes the mean in this sentence. Apply it with $h=\varphi(r)$ and use $|\mu(r)|=1$. The result is $|S(t)|^2/\varphi(r)\le\sum_{b\bmod r,(b,r)=1}|S(t+b/r)|^2$. Summing over $i$ and squarefree $r\le R$ coprime to $q$ gives $G_q(R)\sum_i|S(t_i)|^2$ bounded by the sum over all amplified angles. [step 1.1, given, algebra]

2.2 Put $g(r)=\mu(r)^2/\varphi(r)$. For squarefree $r$, unique factorization and geometric summation give $\sum_{\operatorname{rad}(n)=r}1/n=\prod_{p\mid r}\sum_{j\ge1}p^{-j}=\prod_{p\mid r}(p-1)^{-1}=1/\varphi(r)$. Here $\operatorname{rad}(1)=1$, and for $r=1$ the sum consists only of $n=1$; the displayed infinite sums are convergent geometric series over finitely many primes. Partitioning the finite harmonic sum by $\operatorname{rad}(n)$ and enlarging each part proves $\sum_{n\le R}1/n\le G_1(R)$. Every squarefree $r$ decomposes uniquely as $r=st$, where $s$ divides $\operatorname{rad}(q)$ and $(t,q)=1$. Since $g(st)=g(s)g(t)$, positivity gives $G_1(R)\le G_q(R)\sum_{s\mid\operatorname{rad}(q)}g(s)=G_q(R)q/\varphi(q)$, using step 1.1's product. Finally, on $[n,n+1]$ one has $1/t\le1/n$; summing these integrals up to $\lfloor R\rfloor+1$ proves $\sum_{n\le R}1/n\ge\log(\lfloor R\rfloor+1)\ge\log R$. This proves both asserted lower bounds. [F2, step 1.1, algebra]

3.1 The integers $W'<n\le W$ are the $N$ consecutive positions $\lfloor W'\rfloor+1,\ldots,\lfloor W\rfloor$. Put coefficient $c_p$ at a support prime and zero at every other position. When $N>0$, [F1] bounds the last sum of step 2.1 by $K(d)E$ under the amplification separation hypothesis. Also $G_q(R)\ge1$, since $r=1$ occurs. Division proves the amplification inequality. If $N=0$, there are no support primes and the conclusions hold directly. If (H) is additionally assumed, the identical argument gives $(L+d^{-1})E/G_q(R)$ instead. [F1, given, step 2.1, algebra]

4.1 In the cluster setting, the original angles are $d$-separated. For equal $a_i$ this follows because $d\le|v_i-v_j|\le u\le1-d$, and for unequal $a_i$ their rational parts have circular distance at least $1/q$, so their perturbed distance is at least $1/q-u\ge d$. In particular [F1] gives $\sum_i|S(t_i)|^2\le K(d)E$. To analyze the amplified angles, consider the rational parts $a_i/q+b/r$. If two such rational parts coincide modulo $1$, reducing their equality after multiplication by $qrs$ modulo $r$ shows $r\mid s$, since $(r,q)=(r,b)=1$; reversing the roles gives $s\mid r$. Hence $r=s$, and reduction modulo $r$ then gives $b=b'$ modulo $r$, followed by $a_i=a_j$. This argument includes $r=1$ and uses reduced representatives for $b/r$. Distinct rational parts have circular distance at least $1/(qrs)\ge1/(qR^2)=d+u$. Perturbing by $v_i-v_j$ loses at most $u$, so these amplified pairs are also separated by at least $d$. Coincident rational parts with distinct indices were already handled by the equal-$a_i$ case. Thus if $R\le W'$, step 3.1 applies. [F1, F2, given, step 3.1, algebra]

5.1 If $1<R\le W'$, combine steps 2.2 and 3.1 with step 4.1 to obtain $\sum_i|S(t_i)|^2\le J_q(R)K(d)E$. If $R=1$, step 4.1 proves the stated conclusion. It remains to handle $R>W'$, so that the geometric-series argument of step 2.1 need not be applied to primes dividing $r$. In each of the $q$ residue classes the $v_i$ are $d$-separated in a real interval of length $u$, so the number $k$ of indices satisfies $k\le q(1+u/d)=1/(dR^2)$. If $P$ is the number of support primes, finite Cauchy–Schwarz as in step 2.1 gives $|S(t)|^2\le PE$, and $P\le W\le2W'<2R$. For $R>1$, $\log R\le R/2$: the function $R/2-\log R$ has its minimum at $R=2$, with value $1-\log2>0$. Consequently $kP\le W/(dR^2)\le1/(d\log R)\le qK(d)/(\varphi(q)\log R)$. This proves the logarithmic bound also in this case; combine it with step 4.1's ordinary bound to obtain the minimum. [given, step 2.1, step 2.2, step 4.1, algebra]

5.2 List the odd integers in $(U',x/W]$ increasingly, and write each as $m=2j+1$. They form consecutive integer $j$ in an interval of length at most $D=x/(4W)$, and their number $h$ is at most $D+1$. Split them into blocks of at most $q$ consecutive $j$'s. There are at most $\lceil h/q\rceil\le(h+q-1)/q\le D/q+1$ nonempty blocks, with zero blocks when $h=0$. In one block the angles are $\alpha+aj/q+j\delta/x$. Their rational residues $aj$ modulo $q$ are distinct, and their perturbations vary by at most $(q-1)|\delta|/x\le1/Q$. For shifted angles with $r\le R$, $(r,q)=1$ and reduced $b/r$, step 4.1's rational-uniqueness argument shows all rational parts are distinct. Their circular separation is at least $1/(qR^2)$. The perturbations therefore leave separation at least $s=1/(qR^2)-1/Q>0$. Also $s\le1$ because $q,R\ge1$. Apply step 3.1 to the block and sum over the blocks to obtain the asserted $B_c(W)$ bound. [given, step 3.1, step 4.1, algebra]

6.1 If $\delta\ne0$, the same representation of the odd integers gives clusters with common offset $\alpha$, residues $aj\pmod q$, and perturbations $v_j=j\delta/x$ in an interval of length $u=D|\delta|/x>0$. Equal rational residues require $q\mid j-j'$, so their distinct perturbations differ in absolute value by at least $d=q|\delta|/x=1/Q'$. The hypothesis $q+D\le Q'$ is exactly $d+u\le1/q$. The cluster parameter is $R=(q(d+u))^{-1/2}=\sqrt{Q'/(q+D)}$. Apply steps 4.1 and 5.1 to get the stated tail bound. With $U',W'$ and $c_p$ chosen as in the Statement, the finite index sets and coefficients are precisely those of $B(W)$ in the Vaughan draft, including the odd-prime restriction. [given, step 4.1, step 5.1, algebra]

7.1 Under the additional hypothesis (H), repeat steps 4.1 through 6.1 using the last sentence of step 3.1 in place of [F1]. In step 5.1's $R>W'$ case the same trivial bound works because $L+d^{-1}\ge d^{-1}$. Thus all asserted sharp substitutions hold. For the tail, $L\le W/2$, $d^{-1}=Q'$, and $\log R=\tfrac12\log(Q'/(q+D))$. Substitution proves the final conditional formula, including $R=1$ under its stipulated convention. Steps 1.1 through 6.1 used no (H); they prove only the unconditional weaker bounds. No weighted inequality or numerical assembly has been inferred from this conditional step. [given, step 3.1, step 4.1, step 5.1, step 5.2, step 6.1, algebra] ∎

## Remarks

This draft isolates the prime-support mechanism, finite coprime sieve denominator, the odd-index spacing and the tail-cluster reduction. Its unconditional bounds have a logarithmic prime-support gain, but are not claimed sufficient for the numerical minor-arc theorem. The source's sharp additive and weighted sieve inputs require separate local proofs. A source citation is not a local proof of (H).

The unrestricted cluster result includes $R>W'$ by a direct counting argument, rather than applying prime-support amplification outside its coprimality range. Its equality cases use non-strict separation; the zero logarithm is assigned the ordinary bound. These conventions preserve the intended application without assigning an undefined real quotient a value.
